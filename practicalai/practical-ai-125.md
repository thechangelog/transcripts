**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technologist strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well. How are you today, Daniel?

**Daniel Whitenack:** Doing wonderful. Blessed as always, and especially this week I got some sunshine and snow melting, so that's always a good thing after a bit of a deep freeze in the States. For those who don't know, this is March of 2021 in real-time. How about you? How are things down there?

**Chris Benson:** Spring has sprung, it's glorious. I'm desperately hoping we don't fall back to winter. It's looking nice outside... Having fun, doing some AI... What else is there?

**Daniel Whitenack:** Yeah, exactly. So before last year, each spring year here in Indiana we go mushroom foraging for various types of mushrooms... And there's a number of apps that do classification of mushrooms based on pictures; you can take pictures of them. None of them are very good, in my experience. I haven't liked any of them. So last year, I was like "Before next mushroom season I'm gonna make my own little mushroom classification app." But here we are, and you know, such is not the case, so...

**Chris Benson:** Such is not the case...

**Daniel Whitenack:** So it'll be my continual side-project. Maybe someone out there, one of our listeners - maybe if you're aware of any good apps like that, let me know... But yeah, it's a very interesting object recognition problem, so...

**Chris Benson:** \[04:12\] Absolutely.

**Daniel Whitenack:** Yeah. It's fun for anyone that wants a side-project.

**Chris Benson:** That sounds good. This week, since I work in the defense industry, focusing on this new, really long report that came out - over 700 pages...

**Daniel Whitenack:** Not about mushrooms?

**Chris Benson:** It's not about mushrooms, actually... It's the National Security Commission on Artificial Intelligence...

**Daniel Whitenack:** Oh, wow. It sounds very official.

**Chris Benson:** Yeah, it's basically saying we need to get with it. We need to get with it, and so I am consuming -- I've kind of gone through the highlights, and I'm going through the detail of the report. It's an interesting read -- completely boring in some, but lots of interesting tidbits sprinkled throughout... So if anyone has an interest in things at a government level, it' something -- it's great bedtime reading.

**Daniel Whitenack:** Yeah, yeah. Well, Chris, I have not got my Coronavirus vaccine dose yet...

**Chris Benson:** I haven't either yet. I'm trying, waiting.

**Daniel Whitenack:** My parents just got their first dose. I imagine it will be quite some time before I get my own... But in discussions around that, and health-related applications of AI in our Slack channel, there have been a couple of people that have suggested that we talk at some point on the podcast about "Hey, is it possible to apply AI to drug discovery, or to finding vaccines? How does that cross into that world?" And because we had those prompts from our listeners, we're really privileged today to have with us Dr. Abraham Heifets, who's co-founder and CEO of Atomwise, and this is exactly what they're doing. I'm really excited to hear more from Abraham. Welcome!

**Chris Benson:** Sounds good.

**Abe Heifets:** Thanks for having me on the show.

**Daniel Whitenack:** Yeah, definitely. Do you wanna give us just a little bit of a background about yourself and how you ended up where you're at now?

**Abe Heifets:** Sure, I'd be happy to. My background is actually in computer science. I did my undergrad and my master's at Cornell, where I was focused on what today is called "good old-fashioned AI."

**Daniel Whitenack:** Symbolic type things?

**Abe Heifets:** Symbolic type things, breadth search algorithms... For example, one of my big projects was World Robotic Soccer, so the Cornell RoboCup team, 2000 world champions. So this was - you know, you build little robots that play soccer on essentially a ping-pong table, but totally autonomously... And the stated goal of that team is to beat the human world cup champions with humanoid robots by 2050. So that was my background; you can hear that this is pretty AI and computation, but it wasn't a lot of drug discovery.

**Daniel Whitenack:** Yeah. So is the Dr. in front of your name - is that like Ph.D. in computer science, or is that like medical doctor?

**Abe Heifets:** It's doctor as in Ph.D. in computer science.

**Daniel Whitenack:** Okay, gotcha.

**Abe Heifets:** It's specifically in computation biology. So after Cornell, I went to work for IBM on what probably today we call big data. I don't think we have the term, so we call that high-performance data processing. Much more IBMy anyway.

**Daniel Whitenack:** Lots of acronyms.

**Abe Heifets:** Yeah, exactly. So this was in Boston. While in Boston, I got interested in medicine. I thought that was interesting. So I started taking, for fun, organic chemistry courses on nights and weekends at Harvard, and I thought that that was really neat in that there were these deep connections actually with how computers play chess. There's this deep connection with how chemists think about making molecules - it ends up being, in both cases, these tree search algorithms that you can apply.

\[08:00\] So I went back for my Ph.D. - I did my Ph.D. at the University of Toronto, now in computational biology. So I had the good fortune to meet my co-founder Izhar Wallach, and his background was in protein analysis algorithms. He'd been working for a small pharma company and did protein analysis algorithms. So you can see, in Atomwise, and the technology that became Atomwise, we've put together three pieces - my big datasets, his protein analysis algorithms, and then we had the good fortune where literally across the hallway from us Geoffrey Hinton's Machine Learning Group was inventing modern machine learning.

**Chris Benson:** How fortunate.

**Abe Heifets:** Yeah, talk about being at the right place at the right time...

**Chris Benson:** Yes.

**Abe Heifets:** But we were able to see -- actually, before AlexNet got published, in these sort of hallway conversations, we kind of saw that machine learning was able to do things that it wasn't able to do before, and we've figured out a way to apply that to the realm of biochemistry and drug discovery. So that was the genesis of what today is Atomwise.

**Daniel Whitenack:** Awesome. Chris, I don't know about you, but often my spare time doesn't involve taking medical and biology courses at Harvard... \[laughter\]

**Abe Heifets:** Everybody needs a hobby...

**Daniel Whitenack:** Yeah, everybody needs a hobby, I guess...

**Chris Benson:** This is eerily familiar... I have a good friend who is very similar in that way - both a deep learning person and a Harvard Ph.D. in chemistry, and he crosses that chasm as well. So I'll need to introduce the two of y'all, because you're sounding frighteningly like him, and I've never met anyone like either one of you before. So there's one other person that you can talk about in this way and they'll actually understand the whole thing.

**Abe Heifets:** It's interesting, actually - I'll tell you about the... We might end up cutting this out of the show, but I'll tell you the connection there between the good old-fashioned AI... It's not about Atomwise, but there is a connection between the good old-fashioned AI and how chemists think.

**Chris Benson:** Okay, let's hear it. That's totally gonna be in the show.

**Abe Heifets:** Okay, so here's the problem. A standard problem in organic chemistry \[unintelligible 00:10:18.26\] is here's a molecule, I'll show you a molecule, and you come up with basically a recipe to construct it out of simple, commercially-available pieces. And the thing you need to understand about the chemists is that they can build a world that's made out of LEGOs. So they'll take that molecule and say "Okay, well I don't have that molecule. But if I broke it into these two simpler pieces, I know a reaction that would stick those two pieces together." Or alternatively, if I broke it apart a different way, then I'd have two different pieces, and now I can stick those together with a different reaction."

So now you've got kind of the same problem, and so in our parlance here we would say we recurse; so for each of those simpler pieces you apply the same algorithm, you break it apart, and you break it apart, and you break it apart, and you get this essentially expanding tree of synthetic possibilities where out of simpler and simpler pieces you know how to put each piece together. This is called by the chemists retrosynthetic analysis; retro because it's working backwards from the goal. It was actually the topic of the 1990 Nobel Prize, which was given to E.J. Corey at Harvard, was for elucidating this idea of retrosynthetic analysis.

**Daniel Whitenack:** So does that go all the way back down -- I assume if you take that all the way back down, you end up with the elemental make-up of our Universe, right?

**Abe Heifets:** Right, right...

**Daniel Whitenack:** How far does that go down?

**Abe Heifets:** Practically, it goes until you can buy them out of a catalog.

**Daniel Whitenack:** Okay, right. That makes sense.

**Abe Heifets:** But even here, you see that you need computer tools. I think at the time I was working on it, there were 14 million compounds you could buy out of a catalog. Today there's 16 billion compounds you can buy out of a catalog... And I don't know about you, but there are some mornings where I can barely remember 12 billion \[unintelligible 00:12:00.13\]

**Chris Benson:** That's most mornings... \[laughs\]

**Abe Heifets:** \[12:03\] Yeah... This is why you have that coffee. So my point is you need computer tools to do this stuff. You can't do it all in your head anymore. So your audience can appreciate that we would talk about this as backwards-chaining reasoning, or heuristic tree search. It's kind of like, when a computer plays chess, it looks at the board and sees every move they can make, and then thinks about every move you can make, and then thinks about every move it could make in response. And so sort of similarly, you get this expanding tree of possibilities, and now it's plotting a course from the current board until checkmate, and that's kind of what a chemist is doing - plotting a course from the molecule you want, to these commercially-available molecules. So those links are actually very deep, and that was when I went back to get my Ph.D. to build that system.

**Daniel Whitenack:** Is that assuming -- like, you know the compound that you want to start with, right? The problem is how you actually get there.

**Abe Heifets:** Exactly. So this is the interface maybe between the work of Atomwise and the work that I was doing at my doctorate. For the doctor it was "You've found the answer, and now you wanna know how you make it." So there's one molecule, and the question is "What's the recipe to construct it?" But there's this whole problem which is, okay, there's billions of molecules you could make... Which one is the best one to make? It's the pre-problem for what I was just talking about.

So that's the problem that we're focused on at Atomwise - how do you make a molecule which is gonna be safe and effective as a medicine? That's the problem.

**Daniel Whitenack:** So before we get into how you're doing that, how traditionally is that done, absent AI-driven drug discovery? How has that been done in the past? Maybe with computer methods, but also without them.

**Abe Heifets:** Sure. And people have been trying to apply computers to medicine drug discovery for decades. These are good ideas, but they're not new ideas. It's just that -- I think we all see the power of machine learning computation today. It lets us do things that weren't possible a few decades ago. So that's where the excitement comes from.

But I'll tell you the answer to your question about what's the still common approach today - it's really doing these experiments physically, and relying a lot on human intuition. Those, I would say, are the baseline tools today. And think about that, because that is an incredible claim... If you think about every major industry on the planet - and I don't care if you're talking about Lockheed Martin... My second job in high school actually I was working for Lockheed Martin Missiles and Space

**Chris Benson:** Okay.

**Abe Heifets:** But if you're talking about Lockheed Martin designing a new wing, you will test a thousand wing designs before you ever build a prototype. Now, you still take that prototype to the wind tunnel, you still do a test flight, I hope, before I ever get near the plane... But you do most, 99% of the experiments computationally rather than physically, because those are hard and laborious and finicky... So you want those experiments to work. You'd rather run one test which succeeds, rather than thousands and thousands which fail. So there, most of the experiments are on the computer.

I'm right now in San Francisco. So out here in California, I've got a pretty good guess that this building will stand up in an earthquake. That is an inordinately expensive experiment to run physically... So we rely on circuital engineers doing computational simulation to give us the certainty that we should move into the building. So every major industry, actually, most of the experiments are done computationally. But pharma still - the baseline is to run those experiments physically. So that's what we're trying to do - we're trying to give the same efficiency of every major industry to the drug discovery industry.

**Break:** \[15:54\]

**Chris Benson:** So as you arrived at that point where you were fortunate enough to be across the hallway from Dr. Hinton and his team, and you started applying such techniques - deep learning, as we're calling it now - to this, what specifically... Could you tell us a little bit about how you got into using these new technologies of the day, and how that changed your workflow at the time, as you were getting started and as you took that turn with what we're not calling AI or deep learning at this point?

**Abe Heifets:** Absolutely, yeah. Let me draw the connection for you between what maybe is more common, image recognition and speech recognition, and what we're doing. And here's the way I'll do it, actually... Let me talk about the history of computer approaches to chemistry prediction. Like I said, this isn't a new idea. People have been trying this for decades, maybe 1970's; basically, as soon as we got high-quality -- it was called X-ray crystal structures; so 3D structures of proteins, which machine learning made a big breakthrough recently and the Casp 14 organizers said that AlphaFold 2 solved the problem. So there's huge progress in AI in just getting the shape of the protein.

People have been experimentally able to get structures since the 1970s, and people basically tried to use computers as soon as they could to work on those. So the first generation was the physicists. When the physicists came in, they said "What's the problem? I can compute Van der Waals dispersion, I can compute coulombic charges, \[unintelligible 00:19:54.04\] how is this even a problem...?

**Daniel Whitenack:** Sounds like a typical physics approach...

**Abe Heifets:** Exactly!

**Daniel Whitenack:** "Whatever you're doing is applied physics, so I don't see why this is a problem."

**Abe Heifets:** Exactly, exactly. I think in the show notes maybe you should put that XKCD about the physicists.

**Daniel Whitenack:** Right.

**Abe Heifets:** \[20:14\] My dad's a physicist, so I like ragging a little bit on the physicists... So - exactly right. And it turns out actually that if you do full quantum mechanical simulation, you get the right answer... Which frankly I find comforting that physics got it right. That's nice. But full quantum mechanical situation doesn't scale. It's incredibly computationally taxing. So you get the right answer for like lithium hydride; very, very simple, inorganic molecules, and doesn't scale to the thousands of electrons which might be in a biological system.

**Daniel Whitenack:** Yeah. This was the whole thing with my Ph.D. I studied density-functional theory, which - you've probably run across that... For anyone that's interested in that, you can google that and we won't talk about it here... But yeah, I'm totally eating up everything you're saying.

**Abe Heifets:** Okay, great. So you know better than me both the strengths and the challenges in the approach. So then, roughly speaking, here's what I'd say - the next generation came through, and it wasn't physicists, it was chemists. And the chemists said "Okay, I don't just know physics, I also know a little bit of chemistry. I know that there are features that in my experience correlate with binding." Hydrogen bonds - I believe hydrogen bonding is important for our medicine to hit a protein and inhibit it.

Actually, it occurs to me - maybe I should take a step back and explain how medicine works for a second...

**Chris Benson:** No, that's a great idea.

**Daniel Whitenack:** That'd be great, yeah.

**Chris Benson:** Give the context.

**Abe Heifets:** Okay, so here's the context... Here's the 90-second crash course in biology...

**Daniel Whitenack:** I like it. That's all I need.

**Chris Benson:** I do, too. That's a big promise right there.

**Abe Heifets:** \[laughs\] So think about the proteins in your body as machines on an assembly line. Every machine takes in a very specific input, transforms it in a specific way, hands it off to the next machine on the demo line. So out of the coffee you're drinking or the food you're eating - your body breaks that down and then builds more you.

So one of the ways that disease happens is when those machines break, or when they go haywire. Imagine, for example, the machine that governs cell growth, cell division - it switches on and then never switches off. That means that that cell will keep growing and dividing, growing and dividing... That's a tumor. That's cancer.

**Chris Benson:** Yeah.

**Abe Heifets:** If you were wandering on a factory floor and you saw a machine that was going haywire, you might throw in a monkey wrench, so that the machine, instead of doing what's it's normally doing, is just busy chomping on that monkey wrench and you've essentially turned off that runaway machine just by physically blocking it out.

**Chris Benson:** Right.

**Abe Heifets:** It turns out actually that that's how most of our medicine works today - you make a molecule and it just physically slots into a protein and it shuts down that protein. So you arrest the disease process.

**Chris Benson:** Or it connects to the receptor, right? So that whatever else cannot connect.

**Abe Heifets:** That's right. So it connects to the receptor, and so you disrupt signaling. Or it blocks up an enzyme so the enzyme doesn't catalyze the reaction that it should catalyze. Exactly right.

I know that this sounds pretty abstract, but if you google something like the Philadelphia chromosome, you will see that there's just a mutation which switches on cell growth and cell division, and it doesn't switch off, and this is a very clear link in cancer. Exactly what we talked about. So this means that people were able to design the first cancer-specific drug to block exactly that mutative protein.

\[23:52\] So what does a drug need to do? Imagine you've got a monkey wrench - you want it basically to do two things; you want it to stick really well to the disease protein. You want it to bind to the disease protein, to shut it down as completely as possible. You also want it to bounce off the proteins in your liver, and your kidneys, and in your heart, and in your brain, that you wanna keep functioning. Because you don't wanna turn off a hundred different proteins on that factory and cause all kinds of side effects.

**Chris Benson:** Yeah.

**Abe Heifets:** So basically, you can phrase this as "It's gotta stick to what you want it to stick to. It's gotta not stick/bounce off what you don't want it to stick to", and that's talking about both efficacy and safety. So that's a poor piece of doing drug design.

Now, there are other things in there, like you wanna make sure that it's soluble in water, so that when you drink it, it actually gets into your bloodstream, that it doesn't get metabolized right away by your liver or your kidneys, so it hangs out long enough to reach the proteins. So there's other factors in there, but basically, a core piece of what you want is "Does it stick, does it not stick?" And today, that is answered by setting up an experiment physically, which as you can imagine, is difficult, laborious, finicky, expensive, time-consuming, and all those problems. Instead, we phrase that as a binary classification problem. So we're the first team to use convolutional neural networks, where you set up and run that as a prediction problem.

So in the image is a 2D grid of pixels, and every grid has red and green and blue colored channels. Well, proteins are 3D, so we've set up a 3D grid. Instead of red and green and blue colored channels, we have oxygen, sulfur, nitrogen and carbon color channels. As soon as you do that encoding, then you can essentially adapt all of the algorithms that people have used for image recognition, change them to the 3D biochemistry domain and get them to predict bindings. Does that make sense?

**Chris Benson:** Very cool. It does, it does. So how early in your process did you move to this? Because certainly, as Hinton was setting -- you know, we weren't quite to the mature convolutional neural networks that we have today... How did that progression look as you started to turn to the technology, and then you kind of arrived at this utilization of convolutional in its present -- how did that look along the way? How did you make the steps, and what did that reflect on what you were able to produce?

**Abe Heifets:** Absolutely. So AlexNet, if you remember...

**Chris Benson:** Yes.

**Abe Heifets:** ...in the dark protohistory of modern machine learning, all the way back in 2012 - that was published I think in December 2012, and we had our first convolutional neural network running in January 2013.

**Chris Benson:** Oh, wow.

**Abe Heifets:** But that's because we had been talking to folks before things were published. That's the question about being \[unintelligible 00:26:35.12\] being on that same hallway. It was pretty early on. And then we published - and these have become popular tools in the drug discovery/cheminformatics/drug discovery/AI realm. That's the beginning of the story; there's many things you've gotta do to make these things practical and successful.

**Daniel Whitenack:** Yeah. I'm curious -- so part of it is figuring out how to encode the information that you want in a way that you can utilize it in, say, a convolutional neural net. So that's the encoding piece. But I'm also thinking about the data labeling piece... Like you're saying, you're trying to predict binding or not. How clearly is that defined in terms of actually getting a dataset that will tell you about all of these different molecules, and whether they do or don't bind... What does it look like to put together that dataset I guess is what I'm asking.

**Abe Heifets:** Absolutely. You struck on something that's absolutely critical, which is the quality of the data. In some sense, if you're an academic machine learning researcher, you get to just care about MNIST and ImageNet and CIFAR. And in some sense, you don't even care if those are labeled correctly or incorrectly. You now have ground truth data and you can ignore whether they were accurate or inaccurate. And I think people have -- there's still mislabeled things in ImageNet, and totally ambiguous things in MNIST, but who cares...? It's really how well do you overfit to those three standard sets.

**Chris Benson:** \[28:05\] It's standard now, yeah.

**Abe Heifets:** It's a standard, exactly. And there's value in having a standard. But you know, our bug, the bug we're trying to close is "Have we ever helped a patient? Have we ever cured a disease?" It doesn't matter whether you're doing well on a benchmark, it matters whether you're having practical, pragmatic outcomes. Anyway, if any of your listeners don't want to improve clickthrough rates on ads, or don't wanna improve performance on a benchmark, but hold themselves to that standard of whether they're helping humanity - boy, we've got more than enough machine learning problems to work on.

So to get to your question about data quality, I wanna talk to two pieces of it - input data and output data. How do you tell if you can trust the input data? How do you tell whether your system is predicting anything worth paying attention to?

On the input data - there's a huge amount of data out there. The National Institute of Health (NIH) has a database called PubChem. The last time I checked there were something like 240 million labeled data points of the kind that we use in there, about protein small molecule binding, 98% of which fails are quality-controlled filters. So there's a huge amount of data and there's a huge amount of noise. Let me give you one example. There's lots of examples, but let me give you one.

You'll see in these databases a protein and a molecule and a measurement of binding. 3.14159 nanomolar, which is a measure of binding... And then you'll see the same protein and the same molecule and the same 3.14159, but now it's millimolar. So the only part here which is important is the nano vs. milli - people following along at home can see that you have exactly the same number, but it's off by a factor of a million times from each other.. And you look at this and you say "This can't possibly be two different \[unintelligible 00:29:48.08\] What happened here?" And if you dig into this, what you find is that somebody was citing their earlier work and they copied an entry out of their previous paper, and the letters n and the letter m are next to each other on the keyboard... So they fat-fingered -- there's a typo, and you ended up all off by a factor of a million. I can't tell you in which direction...

**Daniel Whitenack:** No biggie. It's just a million.

**Abe Heifets:** ...but I can tell you \[unintelligible 00:30:09.22\] Just a million. \[laughter\] And it's only \[unintelligible 00:30:12.13\] trying to use your prediction, what a neural network was gonna learn, or any machine learning - it's gonna learn the average of these two. So you're off by half a million, which you only discover when the \[unintelligible 00:30:23.14\] are sitting there, trying to do the physical experiment.

So you have to do huge amounts of data cleaning, and it's not good enough just to do random cross-validation, fivefold cross-validation, because you have to really appreciate where these error sources come from, and how you got the data. And that's even before you talk about things like - there are molecules which interfere with the asset, which aggregate up, which fall out of solution, which... If I put sulfuric acid in a \[unintelligible 00:30:50.18\] it'll look like it's a great drug, but it's not for the reasons you care about. So you have to be able to clean a lot of that data.

One of the things we've had to do - we've had to put the machine learning practitioner in the same room as the medicinal chemist, in the same room as the structural biologist, in the same room as the software engineer, because these things have to run at massive scale, with incredible accuracy. So we put a huge amount of effort into the data cleaning. And that's just on the input data. There's the output data side as well - how do you tell whether any of this stuff is working? How do you catch that wrong in half a million in either direction problem?

**Daniel Whitenack:** And is that part of just like monitoring and trying to gain some intuition about what you're looking for, or how do you go about that?

**Abe Heifets:** That's the core question, is how do you convince yourself, even before you convince anybody else; how do you convince yourself that you're making progress and that this is working. Actually, if you look up my name, the last paper that I wrote was a paper basically looking at every benchmark that we could get our hands on. We looked at every one of the standard benchmarks in our field, and basically, we've found that there was this problem of data redundancy.

\[32:04\] How to explain - here's the conversation I was having with people... People would come to me and they'd say "Hey, I've got a machine learning system. I can predict yesterday's stock price to within a dollar. Give me your life savings, we're gonna be rich." And you hear that and you say "Well, it's good that you can predict yesterday's stock price. That's something. Have you ever predicted tomorrow's stock price?" And they say "Okay. Tough customer."

And they go and they come back and they say "Okay, now I can predict yesterday's stock price to within a dime. Give me your life savings, we're gonna be rich." And you say, "Well, that doesn't really answer my question - have you predicted tomorrow's?" And they'd say "I can tell you're an expert."

And they go and they come back and they say "Now, we can predict yesterday's stock price to within a penny. What more can you want?" And basically, you look at that and you say "I have less confidence now than I did at the beginning, because now you've convinced me that you're overfitting to the data. You're modeling the noise, you're overfitting to the data, and you've never done the killer test, about whether you can do a prospective test."

Similarly in our space, you see a ton of papers. Basically, the history is there's a ton of papers where someone has a shiny, new, whiz-bang system, and then they report results on a protein. And you never know if that means "Does it work on that one protein, or does it work on every protein? Or does it work on that one class of protein?" What does it mean? You show two or three results, and it's super-challenging to understand what the limits are or what it means.

So people set up benchmarks, kind of like MNIST and CIFAR and ImageNet to try to answer this... But basically, my co-founder and I, the last paper that we wrote, we looked at every benchmark and we've found that there are these redundancies where basically you're teaching to the test; you're memorizing yesterday's stock price. And we showed that the more that we came up with a mathematical definition for data redundancy between the training and the test set, and we basically showed that the more redundancy there was, the better machine learning algorithms looked like they do... And this was true for every benchmark we've looked at, for every machine learning algorithm we looked at, for every feature set we looked at, for every training \[unintelligible 00:34:11.18\] we looked at. It's just an incredibly robust set of results.

So my personal conclusion is that most of the history computational chemistry in this sort of corner of it has been rewarding overfitting and teaching to the test, instead of rewarding real prospective "Can you predict tomorrow?", rather than "Can you predict yesterday?" A sort of depressing result... So what we said to ourselves was, "Okay, we're gonna have to show that this was on a hundred different proteins, it works on different diseases, it works in different labs' hands... It's a robust result." You know, people are hiring; you can get a job selling ads if you're a machine learning person... So does this matter? Are we making progress?

So what we did was we launched -- you know, we're not experts in a hundred different proteins. I'm a computer scientist, I'm not an expert in any project, so we decided we're gonna have to partner with people who were. And nobody is an expert in a hundred different proteins, so we launched a wide set of collaborations with academics. And what we did was - imagine you're a professor, and you believe if you block protein XYZ, that would cure a certain type of cancer, or Alzheimer's, or COVID... You tell us you want molecules for protein XYZ, we go screen commercially-available molecules, we buy the best molecules out there, we get them formatted, plated, ready to go into your \[unintelligible 00:35:33.13\] We ship you physical molecules. You run the experiment and you tell us whether we were right or not.

**Break:** \[35:36\]

**Chris Benson:** So now that you've kind of taken us through how you got there and how you think about all this stuff and how it works, could you pick a use case of maybe a specific disease that you guys have worked on, and how do you apply that? Maybe tell us about a story where you were doing this and you got some level of the success of doing the process, as well as some of the challenges that you hit along the way, just to make the whole thing real and give something very tangible.

**Abe Heifets:** Sure, I'd be happy to. So in this setup where you're a professor and you're sending us compounds -- let me give you the stats and \[unintelligible 00:37:12.24\] and then I'll give you an example.

**Chris Benson:** Sounds great.

**Abe Heifets:** So we set up this set of applications, this program called The Artificial Intelligence Molecular Screen (AIMS), and it's been hugely successful. We had over 1600 applications, from more than 250 universities and research hospitals in 50 countries. We've accepted more than 775 programs/projects covering 600 unique proteins... And for context, a big pharma company might have like 60 small molecule projects. So we have 600 unique protein targets here, and so this is really operating on a massive scale, covering every major therapeutic area - cancer, neurodegeneration and infectious disease - in there.

So we have data back now for more than 150 of these projects, and so we can really give very statistically sound results about how well we're doing.

When I present this at chemistry conferences, I usually stop and I ask the audience, "Okay, you've seen the setup... What success rate -- think about your favorite screening technology in your mind. Maybe that's a computational approach, or maybe that's a physical approach, or maybe it's just throwing darts at a catalog, whatever you think is the best way - what do you think the success rate is?" And the answer I most frequently get back is 10% success rate. They think out of a hundred such projects, if we've found anything in ten of them, that's what they expect; and if we were able to get 20, then they would be really impressed and delighted. We have about a 75% success rate on these projects.

**Chris Benson:** Wow...

**Abe Heifets:** So this is importantly better.

**Chris Benson:** Yeah, significantly.

**Abe Heifets:** Significantly better. But actually, let me walk you through an example here... And here's the important part - because it's not just a question of cost, it's not just a question of speed, it's actually a question about making the impossible possible. Something that not a lot of people appreciate is in the human genome we've only ever had medicine, FDA-approved medicines for 4% of human genes. And there's another 16% of human genes that have good evidence implicating them in human disease that we would want to be able to target, and we've never been able to target. So this is like four times the entire farm industry is waiting for us to figure out a way to get medicine for those. So there's huge opportunity. But to do what's been impossible, you need technologies that have never existed; that's why we're out there inventing. So that's what we're working on.

Let me give you an example. This is joint work with professor Ron Viola at the University of Toledo, and there's a disease called Canavan disease. This is an ultra-rare neurodegenerative disorder. If you're pregnant and you're doing a genetic screen, it's one of the things that they test for in genetic screens...

\[40:02\] Basically - I won't get deeply into the biology, but you've got a molecule in your brain called NAA (N-acetylaspartate). And you have a system that makes it in your brain, and you have a system that clears it out in your brain. And these kids lose the ability to clear it out. So this NAA builds up in the brain, and basically the sheath around your neuron, the myelin sheath starts to degrade, and these kids stop hitting developmental milestones. It can be fatal, there's really no cure for it, so it's a pretty tragic disease.

But there was some mouse data that shows that having lost the ability to clear this NAA, if you slow down the synthesis, you could burn the system back into balance, and the mice live a full lifespan. So that gives the idea that we could develop a drug for the synthesis side. But that N-acetylaspartate synthesized is a classic undruggable target, and I'll tell you why. It's inside the neurons; so it's in the central nervous system, it's inside the neuron, and your brain's protected by something called the blood brain barrier, so it's like an armor around your brain. So it's very hard to get to.

That protein itself is membrane-associated, so it's stuck in the membrane, inside the cell, and that makes it very finicky to work with, very hard to work with. Difficult to express, difficult to purify... Just getting enough of it to run large experiments, which is - as we discussed - the state-of-the-art pharma today, you couldn't get enough of the protein. You couldn't get a crystal structure for the protein. I don't know what AlphaFold 2 can do, but experimentally, we had no way of designing molecules based on the shape of that protein, designing that monkey wrench which would block up the protein.

So basically, all of the standard doors for drug discovery were closed. You couldn't run a big physical screen, you couldn't design \[unintelligible 00:41:42.26\] there were no molecules drugs, molecules which were known for this protein, so you couldn't build a machine learning model specific for that protein... Human medicinal cabinets didn't have anywhere to get going from, to start working on. So basically, all the standard doors were closed, until we worked on it.

So what we did was - with these machine learning techniques, empirically they are more robust, and so you can use distant-homology models; the kind of thing that AlphaFold 2 produces - we can use that, rather than having to have an experimental X-ray crystal structure, an experimental 3D structure of the protein. So we used a very distant protein, a bacterial protein, so separated by three billion years of evolution, and only 20% of the immunoacids were identical, so very, very distantly related... But we used that as a homology model. We screened 7.2 million molecules - and for context, a big pharma company might have 3-5 million molecules in its corporate collection, so this might be twice the size of a big pharma corporate collection.

Out of 7 million, we pulled down to 60 that we felt we'd test, and five of the 60 (so quite a high hit rate) were actually accurate, with the best one being more potent than what you would expect from a physical screen. So that's not a drug yet; we have to continue working on it... But where all the doors were closed, now we've opened the door to doing drug discovery.

**Daniel Whitenack:** That's so cool.

**Chris Benson:** It really is. That's quite a story.

**Daniel Whitenack:** Yeah, that's an amazing story... I've heard of these things, and not being a medical person or a biology person, you hear about these diseases or other things where it's really not possible to develop a drug, or they don't know where to go... And it's really cool to hear some stories of people trying to push through that barrier. Really commendable work.

I'm curious - maybe a slightly weird question, but one of the things that people of course are so concerned about with the rapid expansion of applications of AI into all spheres of life is various sources of bias in the data that we're using... And I think this has been particularly - not in the case of AI, but another source of bias that people have been talking about recently is with vaccines, and of course, certain populations who maybe have a certain history with vaccines or other things, are very concerned... For example with the Coronavirus vaccine of "Hey, does this work well for our population or other populations? Are we getting the bad vaccine?" or something like that...

\[44:23\] So I'm wondering, as you are specifically trying to apply AI in these cases, what is your thought process around making sure that you're accounting for some of that bias in your methods, and you're creating drugs that are kind of applicable to general population that is diverse?

**Abe Heifets:** Absolutely. I think it's absolutely the case that we need medicines for all people, everywhere in the world. And I think one of the things I'm proud of is the fact that we opened this program globally, that we're democratizing access to these kinds of technologies to researchers around the world, and that they can decide what diseases they're concerned about, where they see the ability to make a breakthrough.

Like I said, we've had these applications from over 50 countries. If our priorities about which medicine we work on is just happening in Boston, Massachusetts, there's going to be a skew to the kinds of diseases which are familiar in Boston, Massachusetts, or keep people up in Boston, Massachusetts. But if you look in another place of the world - stomach cancer has a much higher prevalence in East Asia than it does in the U.S. And I don't know if it's because of environmental or dietary or genetic factors, or it could be a mix of all of those.

South Asia has a high cardiovascular burden. There's different kinds of liver disease in South-East Asia than \[unintelligible 00:45:52.16\] So absolutely right that what is high on the list and what is top of mind for people is gonna be different in these different places. So I think by dropping the cost of the developing medicines with these new technologies, and dropping the barriers and reducing the timelines and putting these technologies into the hands of people, then we can help democratize that decision-making.

One example - we're working with an NGO based in Geneva called the Drugs for Neglected Diseases Initiative. And there we're working -- kind of a similar style story, but we're working on a disease called Chagas disease, which is an endemic disease of poverty in Latin America. By having new technologies and making success easier to reach and faster to reach, we can go and we can tackle a much broader set of diseases.

So that's our perspective on a very important problem. I'm glad you raised it.

**Daniel Whitenack:** That's a really great perspective. I think it's a great point that this sort of diversity of diseases, and also how it's diverse across geographies and populations, is like an AI-sized problem...

**Abe Heifets:** That's right.

**Daniel Whitenack:** ...because we do only have so much capacity of expert chemists, expert doctors, medical professionals. We only have so much capacity there, but yet we have this sort of increasingly complex disease situation around the world... So yeah, I think it's a really good point.

**Chris Benson:** To that point, when you say "AI-sized problems", can you tell us -- this sounds like it's truly in the process, in the early stages of revolutionizing an entire industry; because of the scale and the accuracy, you've changed the whole thing. So where do you see this going? No one can tell the future, but if you'll put your wizard hat on for a minute and pull out the crystal ball and speculate on what it looks like 5, 10, even beyond, where you think -- when you lay in bed at night and you're thinking about where you're going with this and where you wanna go with this, what does that look like? How does the world change as a result of this within that industry, which affects all of us? Where are we going?

**Abe Heifets:** \[48:01\] I think you're right that it affects all of us. This is one of the fundamental, universal truths about being human, is that we get sick, our parents get sick, our kids get sick, the people we care about get sick, so this is something that all of us face... And I think in some sense, no one comes down on the other side. No one says "Yeah, chemotherapy - those side effects are fine, and the success rates are fine." "Yeah, Alzheimer's - we don't have any real treatment... Well, I guess that's it. We're just gonna have to live with it, or not, as the case may be." Or diseases of poverty around the world that we haven't been able to afford to direct large discovery -- what can we do?

I don't think anybody is actually advocating for any of those approaches. We want better treatments for all of it. Let alone diseases that we had fixed, but we're losing ground. The WHO is talking about a post-antibiotic apocalypse. And when you see serious governmental organizations use words like that, it's serious. And that's the growth of antibiotic resistance. We need fundamentally new approaches to antibiotics just to maintain the kind of lifestyle that we've been happy with.

One of the stories there is Calvin Coolidge's son got a blister playing tennis on the White House lawn, got sepsis and died. This is the most powerful men in the world, in the era before penicillin, you had no protection. Nobody had protection against it. So we need technologies that keep up with the evolutionary arms race. So I think you're absolutely right that this is critical.

This is a long and maybe rambling answer to your question...

**Chris Benson:** No, long and rambling is good when you're predicting the future...

**Abe Heifets:** Okay. I also wanna take the opportunity to give credit to the chemists. Real transformation happens at the intersection of multiple different pieces. If you think about AI, there's data and there's algorithms that come together, but those wouldn't be able to be run without a huge success by DevOps, and cloud computing, and GPUs, breakthroughs in the hardware, which are driving much of the --

I was just looking at this - because I'm a nerd, if we didn't already establish this... The ASCI White, the most powerful super-computer in the world, and therefore in the history of our species, up to 2001, ASCI White, clocked in at over a hundred million dollars and a hundred tons. That machine peak FLOPS is an Xbox today. That's an incredible transformation. So if you think about why are we able to do these things with AI today - it's because of the massive success by hardware engineers; that's driving a huge part of it.

So I wanna give a huge shout-out to the chemists. There's been this equal exponential change on the side of the chemists, which is why we should care about AI. Here's what they did. 15-20 years ago big pharma -- like, if you and I wanted to order compounds out of a catalog, these commercially available compounds, there may be a million molecules that you and I could buy. And big pharma like Pfizer, Novartis and \[unintelligible 00:51:19.28\] Bristol Myers - they had maybe 3-5 million molecules in their warehouses. So in that world, it was better to be Pfizer and Novartis, because you had a better shot about finding something in your catalog, and then with an army of chemists you could iterate your way to a drug from that initial something. Remember, in Canavan, that's what we lacked, was that initial something, and that's what we were able to do at Atomwise.

**Chris Benson:** They were already scaled up enough to have a good chance starting.

**Abe Heifets:** Exactly. Well, they had a better chance than you and me. Good or not, that's an empirical question. After you ran the screen, you could tell. But they had a better chance than you and me. Okay. But here's what happened 15 years afterwards - the industry has adopted something called synthesis on-demand. And here's where it works. You may remember Dell computers...

**Chris Benson:** \[52:10\] Of course.

**Abe Heifets:** Okay. Michael Dell had what was principally a business innovation, which was "I'll get to work after your check clears." That's principally a business innovation. But there was a corollary to that change, which is that the range of different computers that Michael Dell could sell you was way more than what anybody else could sell you, because it was every potential combination of printer, and memory, and monitor that you could choose to put together.

**Chris Benson:** Sure.

**Abe Heifets:** He waited until you said what you wanted. So basically the same thing happened in chemical vendors - they store these days building blocks, and they say "I know how to put them together." And so what they sell you is a catalog of 16 billion different compounds that they know how to make, but that they haven't made yet. Exactly like Dell with a computer - knows how to make that computer, hasn't made it yet. And they're adding about a billion molecules a month. We're talking here already maybe 5,000 times the size of a big pharma corp \[unintelligible 00:53:08.11\] that you and I have access to, and we can get it shipped in 4-6 weeks.

So this means that basically 99.9% of all molecules ever available to medicinal chemists today are accessible only through computational approaches... Because you can't test them physically if they don't exist physically to be tested. You have to run the experiment first, and then you can \[unintelligible 00:53:35.07\] You have to run the computational experiment first. Every chemist today is a computational chemist; if they're really looking at it this way, every medicinal chemist is a computational chemist.

So that's a fundamental shift, and that was driven by the chemists, the fact that they've been so successful in coming up with these syntheses. And if you draw the trendline of that growth, by 2024, if they stay on trend, those libraries are gonna be about a trillion molecules. So this is why we need AI; it's because at that scale it's not enough to be 99% accurate. 99% accurate means 1% inaccurate. Now, the point where you're running a trillion molecules and 1% inaccurate, it means 10 billion false positives, right?

**Chris Benson:** Yeah...

**Abe Heifets:** You need way better than 99% accurate. You need 99,999%, whatever. And it just turns out that our best technologies are machine learning technologies.

**Chris Benson:** You know, for most people listening to this, you've just put their problems in perspective of being not so bad. \[laughter\] Most of us aren't having 10 billion false positives, I'm just saying.

**Abe Heifets:** Right, exactly. Yeah. So there's huge promise out there, and these are deeply meaningful problems. The potential, if you can crack this, is worth it. But boy, you've gotta be willing to take on a 10 billion false positive problem, right? Facebook doesn't have a 10 billion false positive problem, because there's only seven billion people, right? You're capped how badly things could go.

**Daniel Whitenack:** Yeah. Well, I definitely for one am super-glad that you and your team are willing to be one of those taking on this problem. It's so inspiring and cool to think about some of the things you've already done, and some of the success that you've had... And it does really sound like there's some wonderful things in the future.

So yeah, I definitely look forward to having you back on the show to give an update on how things are going... But we appreciate you taking the time to talk with us. I know I've learned a lot; this has been really great, so...

**Chris Benson:** That's a fantastic conversation.

**Daniel Whitenack:** ...thank you. Yeah.

**Abe Heifets:** I had a lot of fun. There's a ton of open problems well-worth working on, and at their core it turns out that medicine is an AI problem.
