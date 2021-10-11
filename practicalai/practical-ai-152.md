**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack, I'm a data scientist with SIL International, and I'm joined as always by Chris Benson, who is a strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well, Daniel. Enjoying the nice, cooler weather, and looking forward to some cool topics on today's episode.

**Daniel Whitenack:** Yeah, for sure. Are you brushed up on your math?

**Chris Benson:** Oh my God, no. I'm not. I'm not as good at math as I wish I was. I am super-jealous when we find somebody to talk to that is really good at math, like I think we're about to.

**Daniel Whitenack:** Yeah. Well, I think we're both lucky in that respect, because we've got Tivadar Danka with us, who is an educator in the machine learning space. He is writing a book which he talks about as going from high school mathematics to neural networks, which is a pretty cool idea. Welcome, Tivadar.

**Tivadar Danka:** Hi, everyone.

**Daniel Whitenack:** Yeah, it's great to have you here.

**Tivadar Danka:** It's great to be here.

**Daniel Whitenack:** Yeah. So first of all, how did you start thinking about like "Hey, there's a need out there to help people along the pathway, from high school mathematics to neural networks?"

**Tivadar Danka:** So I'm a mathematician by training. All of my higher education in the mathematics field, like bachelor's, master's and Ph.D. So it was kind of a given to me. I'm an expert in mathematics, and I just started to post on Twitter about mathematics and machine learning. Because after my Ph.D. in pure mathematics, I started working in machine learning, more specifically bioinfromatics... And then I just started to create content on the topic. And it got traction; as I created more and more content, and I got more and more feedback, I realized that it is actually like a need from people. They want to understand mathematics. But often, the learning curve is so steep that many people fall off of the cliff... Which I think is quite unfortunate, because mathematics is not that complicated. You know, mathematicians make it complicated; it doesn't have to be.

\[00:04:26.27\] If you can properly explain and motivate concepts, it's like, what we use in machine learning are quite intuitive, and I really enjoy teaching and explaining stuff. I realized this a few years ago, and ever since then I'm putting more and more energy into teaching, educating, creating educational content in the topics of mathematics and machine learning.

**Chris Benson:** Where were you when I needed you so desperately a few years ago, as I was getting into this field? What you've just said described my entry into deep learning... Because I was coming from a software programmatic perspective, writing code and wanting to get into it, and I had gotten up through some basic calculus... What we would describe in our university level as \[unintelligible 00:05:10.12\] integrals and stuff... And that's as far as I made it. And it wasn't far enough to do this stuff. So I think that that is an experience many, many people have, is the frustration of trying to level up in mathematics, to be able to do this kind of really cool work that we're all talking about and working in today. So it seems like something that's desperately needed. I don't think that's changed at all since I came through.

**Tivadar Danka:** Usually, how they teach mathematics at classical mathematics courses is very boring... Which is something I try to change.

**Daniel Whitenack:** Yeah, that's unfortunate that it's that case... I have had math classes in the past - and I'm sure it's just because of the instructor, but ones that I have really enjoyed... But also, I have had those that are just really tough, not even from a content perspective, but just from like a grinding through the content perspective.

I'm curious, as you're starting to work with more and more people and talk to them specifically about mathematics in the context of machine learning, from your perspective as a practitioner - like, I can download TensorFlow, run through some tutorials, download Hugging Face or something and do some pretty state of the art stuff, without having much of what's going on under the hood... From your perspective, what as a practitioner are some of the benefits of spending time digging into some of the theoretical and mathematical elements of what's going on under the hood?

**Tivadar Danka:** It really depends on the stage where you're at in your machine learning journey. I strongly believe that when you start out, you don't really need higher mathematics. High school mathematics is often enough. There is this awesome machine learning course from FastAI which explicitly states that all the mathematics you need to start is basically taught in high school. So you don't really need more. And as you go on and on in your journey, you pick up pieces of mathematics here and there, and this is how I think machine learning practitioners should start about learning mathematics. But there comes a point then, using built-in solutions, like you've just mentioned, downloading a pretrained model from Hugging Face, won't work.

And how I see mathematics is that in the aspect of machine learning - this is really the language of machine learning. Mathematics is the language in which algorithms are written. And if you want to effectively talk about those algorithms, you need to learn this language. You don't need to be a master writer in this language, but you need to speak it properly, to exchange ideas with the other people, your colleagues and whatnot.

And also, the level of mathematics you need depends on what will be your job or what is your job. For instance, if you are a machine learning ops engineer, I don't think you really need that much mathematics. If you're a data scientist, you need a lot of probability theory and statistics, for instance.

**Chris Benson:** \[00:08:21.10\] So for me, as I kind of mentioned, this is a particularly fascinating thing... And I'm still very questionable in my mathematics, because it was kind of learning as I could... But I was at the time coming through the teens; it was around 2015 when I was struggling with this, and coming feeling a strong deficit in my mathematical knowledge. I'm really fascinated when you talk about the FastAI course talking about you only need a high school level... That's something I wish I had known then. How would you reset me? I'm kind of curious, if I can take you right now, I'm gonna transport you back in time, I guess 6-7 years, when I'm struggling through that... What would that look like at this point? What would you advise me? Because I did waste a ton of time, I struggled through stuff I may not have needed, I probably missed some stuff I did need... How would you lay it out for a beginner like me, who's coming from another technical skill, but isn't a mathematician?

**Tivadar Danka:** I had the same feeling, actually, just in another field in mathematics. I would basically always suggest people to find their problem which they are interested in, and then just start building stuff. Once they start working out a solution, they will stumble upon these smaller obstacles. And sometimes these obstacles are related to mathematics. And then if they know that they have some kind of difficulty of understanding (I don't know) matrix operations, then they should do a focused research on that topic. Because if you are a machine learning practitioner, you pick up a bunch of mathematics on your way.

**Chris Benson:** I've found it hard to connect -- I was trying to go back and learn the matrix multiplication... And then simultaneously, coming from a software background, we tend to go and try to build something anyway... So I was trying to do that with the tools of the day, which are different from the tools of today... But trying to connect across those two, to where I'm attempting to learn the mathematics of machine learning based on what I'm reading about and I'm supposed to know, and then trying to use the tools of the day - connecting those was agonizing at times. How do you do that? If you're taking someone that is just getting into it - today, someone's maybe coming out of university, they're a software developer, they took one high-level machine learning class and they wanna dive into it... How do you help connect them with that practical side of it, of using the tools and the code, with the theory to understand it? ...to actually not just be doing it rote, but to be having a sense of what you're trying to accomplish.

**Tivadar Danka:** I usually try to motivate every concept in mathematics with machine learning applications, potential machine learning applications. For instance, if we are talking about matrix multiplications, if you are in a classical linear algebra class, they just give you the formula for matrix multiplication and you have to understand it, and you have to understand it as is. But if you actually take a look at matrix multiplication from a different perspective, so if you go back to machine learning, for instance, if you think about neural networks, if you are a practitioner, you probably worked with fully connected layers, so you know what they are. Then I would tell you that "Hey, fully connected layers are actually defined by matrices." And why do we need to understand what matrices are? Because we want to understand what our neural network is doing in this small layer. So then this would serve as initial motivation to raise their interest in the subject.

Then, when I talk about matrix multiplication, for instance, I always introduce data transformations. So from an abstract viewpoint, a neural network is nothing else than something which takes the data and transforms it step by step, eventually leaving you a representation from which you can read out class labels, or whatever you want. And those transformations are essentially made from linear transformations, which are given by matrices. So linear transformations are essential in machine learning.

\[00:12:19.17\] And then we inter-use the concept of linear transformations, then I would take you through what is the structure of linear transformations, how can you actually describe them... And this is how you stumble upon the very definition of matrix, because a matrix is nothing else but the image of unit vectors on the linear transformation. And then once you understand that, I can just tell you that if you compose two transformations, then you get basically a third transformation. And if you describe the matrix of this composed transformation, then you can calculate by hand how two matrices are multiplied. So composition of linear transformations give the matrix multiplication definition, and I think, for instance, this way is much more interesting and much more understandable for somebody who is coming from an application \[unintelligible 00:13:04.01\]

**Chris Benson:** It's very coherent. I got it, and I didn't get other explanations before I've met you, in my learning days; yeah, I was struggling. That's a great way of putting it.

**Tivadar Danka:** Awesome.

**Daniel Whitenack:** Yeah, and it's probably also a bit -- I understand your plight, because it's probably a bit difficult also in audio format on a podcast to describe some of these things without visual aids, or something like that... But I was wondering -- you mentioned sort of getting a lot of interest on Twitter, and people starting to interact with you, enough that you were considering creating some of this content which you have (and are creating). I'm wondering, was it mostly current practitioners that were sort of interested in this, and deepening their level of understanding, or was it mostly those trying to get into the machine learning or AI space and having trouble understanding jargon, and understanding the theory? What mix of people was it that you were interacting with, and are interacting with?

**Tivadar Danka:** It's a mixture of both. Twitter is huge. Every group is properly represented in terms of machine learning... So I interacted with both of these groups. Once you are rich, enough experience in your machine learning career, you have some kind of curiosity about understanding the underlying so-called magic - which is not magic, but you want to understand what is behind the curtains. Then you're basically happy to consume any kind of content which can basically give you that.

I also meet with young students who are taking their first mathematics classes, and they want to understand what this is about. They want to have more intuitive explanations... And they are not that sure how to connect that with machine learning at that point. Because usually, in traditional courses, you are learning mathematics and you are learning computer science. So usually, it's like two different tracks.

Mathematics courses are usually taught by mathematicians... And I think this is a huge problem, because even though I'm a mathematician, I know that this is not ideal, because there is this quote from Goethe that mathematicians are like French people - they see something and they translate it to their language, and from that point it means something completely different. So this is why it's suboptimal that you are basically taught mathematics by mathematicians.

**Break:** \[00:15:31.27\]

**Daniel Whitenack:** Where I came across your work initially was on Twitter, and I think a post that probably got a lot of attention, where you broke out and had a diagram of all of these different areas of mathematics that you sort of categorized as having something to do with the mathematics of machine learning and how you broke it down... Which I thought was, first of all, a really well-made diagram, and easy to understand... But I think also people -- maybe where Chris was talking about, where they sort of have all of these bits and pieces of what they think is maybe useful in machine learning and neural networks, but to have it broken down on sort of this single page, and like "Hey, what's on the radar? What should I be thinking about?" It was maybe useful. Is that breakdown of mathematics -- and we can go into the details of what's included there... How did that sort of come about, and how did you end up doing this sort of categorization? Was it part of the creation of the book, or...?

**Tivadar Danka:** It was before the creation of the book.

**Daniel Whitenack:** Oh, okay.

**Tivadar Danka:** And really, it's to serve as some kind of blueprint. I tried to \[unintelligible 00:17:33.24\] this roadmap. To be more specific, I tried to leave out every field or subfield which is not of interest, but I wanted to include everything that might be eventually interesting... And I worked from backwards. I started with \[unintelligible 00:17:51.22\] like, what you need; basically, you need optimization techniques, and you need linear algebra to describe models. And you need probability theory to fit models to data.

From that point, I started to work backwards. If you want optimization methods for doing it, you need calculus to do that. If you want to describe your models, you need linear algebra, and you need a bit of calculus... And you still need probability theory to fit models to data and interpret results.

And after I got those three, essentially broke down into small pieces, basically. I highlighted a few key milestones which you will encounter later... As I said, I tried to be as minimal as possible.

**Chris Benson:** And I think right now this is one of those moments, going back to what Daniel said - you created the diagram, so you know it really well, and Daniel and I are able to look at it visually right this second... But just for listeners who are driving in their car and listening to this, I just thought I'd take two seconds to describe the central line, so that people can get the visual... And you kind of did that. You start with fundamentals, and you hit calculus, and for each of these things you hit all those things that go in calculus and linear algebra, lead to multivariate calculus, lead to probability theory... And then as we get into the neural network section, basics of optimization and mathematical statistics are together, and then neural networks down there... And all of these have this amazing branching into all of the knowledge areas. I mean, I wish I'd had this so bad a few years ago. This would have really, really helped. So I just wanted to kind of call out the visual aspects of it, as you continue describing how you got there.

**Daniel Whitenack:** Yeah, definitely. It's always helpful for me to se something in a visual form like this... And we talked a little bit -- you went into a little bit of detail about how you connect matrix operations with neural networks and all of that... I'm wondering if you could do that with a couple of these other ones, too. When you first started talking about how you came up with these categories, you talked about optimization, along with linear algebra... So maybe for those getting into neural networks, maybe they're not familiar with what you mean by optimization in a mathematical sense. Could you give just a little bit of an intro to what do you mean when you say optimization, and where does that fit within the framework of neural networks and machine learning?

**Tivadar Danka:** \[00:20:19.02\] Sure. Let's talk about neural networks, because they are the best.

**Daniel Whitenack:** I think our listeners - we don't have to convince them too hard on that... \[laughter\]

**Tivadar Danka:** Okay, cool then. We have a common ground there. So again, from a mathematical perspective, a neural network is a function. You have an input, an output, and you also have a bunch of parameters basically define this function. These parameters are in the form of real numbers, and your job as a data scientist or machine learning engineer is to find a good set of parameters that fits well to your data. So how would you do that? You need to have some kind of search in the parameter space.

One very simple, although useful method is called gradient descent. Essentially, you measure the quality of the fit. This is what you do with plugging in an error function; you know how well these given set of parameters fit, and then you basically want to minimize this loss.

**Daniel Whitenack:** And that measurement of error is based on those training examples.

**Tivadar Danka:** Yeah, sure.

**Daniel Whitenack:** People probably have heard the jargon, like "Hey, here's my training set." Right? So that's where that comes in.

**Tivadar Danka:** Yeah. And then if you visualize this loss function in terms of the parameters, you see some kind of landscape, just like you would go on a hike and you would pull out a map and you would see that "This is a hill. This is a valley." This is how you can imagine such a landscape. And what we want to do is we want to climb to the bottom of this landscape, because the loss is minimal.

If you are at a given point and your goal is to climb to the lowest point of the landscape, who will you do this? You look around yourself, you try to figure out which way is the steepest descent, and then you start going there. You take a step in that direction. And once you took a step, then you repeat this whole procedure. So again, you look around yourself and determine the direction of the \[unintelligible 00:22:18.10\] then go another step.

This is a high-level description of the method, and if you want to implement this mathematically, you need to introduce the definition of gradients. So if you have a landscape, how do you define where to go? This is where calculus comes in, this is where gradients come in... Because the gradient is actually the direction of the steepest increase, but in gradient descent you actually move to the opposite direction of the gradient.

So this is how you realize that you have to understand differentiation and gradients, because this is what you do if you want to optimize. It's quite interesting. It's actually a really simple algorithm; it was known a few hundred years ago... But it's still useful, and it still makes it possible to train neural networks, although more \[unintelligible 00:23:05.08\] a super-charged version of the classical gradient descent... But this is what happens, basically.

**Daniel Whitenack:** This is a safe space, Chris. Yeah.

**Tivadar Danka:** I think it's more user-friendly if you start with single variable calculus, because multi-variable calculus is slightly more complicated, and not that much abstract, but you have a lot more notation. And it's very easy to get lost in those huge matrices and functions if you don't understand the core concepts.

So this is why I usually recommend taking single-variable calculus first, because then you can understand the concepts of derivative very easily. Derivative is just basically the speed of an object. It's easy to understand. But if you try to generalize this concept into higher dimensions, you include possible complications... For instance, I don't know, which direction do you measure the rate of change. It's not that clear why would you define a partial derivative.

**Chris Benson:** \[00:24:04.15\] Gotcha.

**Daniel Whitenack:** And one of the other big areas that you have on this map is probability theory. You already mentioned that data scientists oftentimes are very concerned with probability theory. Maybe there's certain types of models that they use, that are -- maybe they're thinking of Naive Bayes type models, and there's these things out there... But when we talk about neural networks, where is probability theory intersecting with neural network-based models?

**Tivadar Danka:** At the very foundations, I would say. For instance, let's talk about mean squared error, which you encounter; or even better, let's talk about cross-entropy. It's more common for classification problems. So when you want to train a classification, very often you use the cross-entropy error. This is a concept which was introduced by probability theory. If you want to understand intuitively what it means, then you need to understand for instance the fundamentals of random variables, you want to understand entropy itself, expected value... So once you can think in terms of expected value and entropy, cross-entropy becomes much simpler for you.

**Chris Benson:** To go on about the graphic, because I'm in love with the graphic... Because it's super-helpful.

**Tivadar Danka:** Awesome.

**Chris Benson:** I know this is stuff that you guys know, and I've learned parts of it... But it also shows me a lot of things that I need to ramp up on, even today. So that begs the question - it doesn't matter if this was when I was first learning, or whether it's now, and I'm trying to continue to level up in my own skills... This maps out all of these knowledge areas, and it helps me -- I can look at each one and say "What do I know about that? What have I learned about that? Do I feel comfortable with that?" How can I take this mapping and translate that into a practical learning plan to help myself move on up and develop the mathematics that I need to do the work that I love to do? How do you translate that into that kind of linear progress mode from the map, that kind of covers so much here?

**Tivadar Danka:** I'm actually writing a book about this topic...

**Chris Benson:** Perfect.

**Tivadar Danka:** So maybe now is the perfect time to talk about this, because as I mentioned, I kind of created this roadmap as a blueprint for my book. So the roadmap itself, this diagram which we are talking about is just like a rough learning plan, and then this book is where I put this roadmap into action. So I organized the chapters in order, so that it would take you through, from top to bottom.

**Chris Benson:** I can't wait.

**Daniel Whitenack:** Yeah, so the top, for those listening, who aren't looking at the graph - at the top is calculus and linear algebra, then going through multivariate calculus probability theory, basic sub-optimization, mathematical statistics, and neural networks. In the book, what sorts of decisions are you making in terms of -- because you mentioned notation jargon being one of the main blockers for people when they encounter these subjects... It's like, "Oh, there's all this new jargon." Not every book or course uses the same jargon or notation, depending on your --

**Tivadar Danka:** It's a big problem.

**Daniel Whitenack:** ...yeah, your field of study. I know in physics oftentimes I would encounter much different jargon than I would if I was reading -- even like a subdiscipline like mathematical physics types of books, or articles, or something...

So I guess my question is how are you deciding, as you're writing the book, what jargon and notation do you use, and how much to pull in code into that, or algorithmic thinking into that, I guess...

**Tivadar Danka:** I always, always put machine learning first. When I decided whether or not I should include the topic, I always think it through from the perspective of machine learning. So can I motivate this with an example from data science or machine learning? Where will this be used? If this won't be used anywhere, I won't include that in the book. I don't want to basically cause math overload, which all of us experienced at some point in our studies...

**Chris Benson:** \[00:28:13.10\] I still do, on a regular basis...

**Tivadar Danka:** Yeah. Trust me, I also experience that. Guiding principle number one - no unnecessary stuff. Guiding principle number two - I always, always inter-use every concept as visual as possible, use as much geometry and visuals as possible, because this is how you think... If you work in mathematics for long enough, you learn to think in terms of formulas, but I think this is kind of like a side effect of being a mathematician. Nobody should be expected to think in terms of formulas about concepts such as gradient descent, and this is what is basically guiding me all the time... Even with simple concepts such as matrix multiplication or matrix determinants.

Determinant for matrices - I mean, they are tough to understand if you don't know the geometry behind them. But once you understand the geometry, it's easy peasy.

**Chris Benson:** You know what - the thing in my head as you're telling me about this, and I'm so thankful that you're taking the approach that you are... This is humane machine learning mathematics. I felt like when I was starting my journey along this path it was not humane at all... And I always felt out of depth. But I love your approach on that. So are you really targeting -- I mean, in the conversation it feels like you're targeting me for this...

**Daniel Whitenack:** I don't know if there's gonna be a dedication to you in the book, Chris...

**Chris Benson:** Oh, gosh...!

**Daniel Whitenack:** I don't think he's promising that.

**Chris Benson:** "To help Chris get out of machine learning purgatory." There's your dedication right there.

**Tivadar Danka:** That can be arranged. Essentially, basically, it's for every computer scientist who is interested in machine learning, and even those who are not interested in machine learning.

**Chris Benson:** That sounds great.

**Daniel Whitenack:** Yeah.

**Tivadar Danka:** It's important that it's not for mathematicians.

**Daniel Whitenack:** \[laughs\] I know myself, and just thinking about the things I'm exploring in machine learning and AI, they're changing so rapidly... And there's new things being introduced all the time. From your perspective, as you're sort of monitoring the trends within the industry, and talking to different people, how stable are these sorts of fundamentals as compared to what people are exploring and what's becoming more mainstream? Are there new areas of mathematics that are starting to impact machine learning and AI, that maybe people should be aware of? Or is it basically just like, everything is built on these building blocks, and that's pretty much 99.9% of things?

**Tivadar Danka:** I would say the latter.

**Daniel Whitenack:** Okay.

**Tivadar Danka:** Essentially, new mathematics field influencing machine learning is like science fiction for me at the moment... Because mathematics is always hundreds of years in front of applications, because this is how mathematicians operate. They always try to generalize things to prove even more and more abstract \[unintelligible 00:31:02.20\] and so on. So it's like an intellectual sport, which - after a while, it loses touch with reality. And I say this as someone who wrote a Ph.D. in mathematics. I have research papers, so I know this first hand, that most research papers have absolutely nothing to do with applications... Even though mathematicians may try to deny this to get grants and whatnot, but sadly, this is the case.

So I see this, as I said, mathematics, as the language which we speak. Even though you can't write new novels or poems in this language, the language itself remains the same. It evolves slower than, for instance, literature... Although they are interconnected, they influence each other. Modern mathematics is something like an abstract art. You won't understand it unless you are an abstract artist yourself.

**Chris Benson:** \[00:31:58.16\] That's a really interesting dichotomy there. We think of machine learning as just racing along in terms of its impact, and the development of it, and you can barely keep up with it because it's going a thousand miles an hour... And yet, it's built on something that, to your point just a moment ago, is hundreds of years ahead of applications, and is long, long in the development. It's not something I had ever considered before. It's fascinating.

**Tivadar Danka:** Just to give you an example - gradient descent, hundreds of years old algorithm, \[unintelligible 00:32:29.04\] and even nowadays, you can still discover new uses of this.

**Daniel Whitenack:** Yeah. I think in my mind, not being a mathematician, I have no idea about that sort of abstract art world that you described. I totally don't understand or even can fathom what's going on there... But I think what I had in my mind was like, when I'm seeing trends in the AI field that are graph neural networks, bringing in different structured data, and specific ways of processing that, or I also see more mention of differential equations, partial differential equations in relation to AI... I didn't do a search on your diagram, but are there things that you're seeing that maybe are old in terms of the math world, but people are bringing into the AI world in ways that they didn't before? I guess maybe that's a better way to phrase it.

**Tivadar Danka:** There's a pattern I see in mathematics very frequently, that old ideas influence new ideas. So mathematics is kind of timeless even now, hundreds of years old results can basically implant new ideas. As a researcher myself, I was working on one of the problems which I solved in my PhD, one of the key components of the proof I've found in a paper... It was written during the Second World War. It's very old. As a machine learning engineer or machine learning researcher, then would you use papers that are more than 20 years old? Never. It never happens, because technology moves so fast... But mathematics is kind of timeless, because as I said, it's about the language. It's the language of algorithms. And this is how I think it can basically influence new ideas, like \[unintelligible 00:34:25.25\]

**Daniel Whitenack:** Yeah, I see them mentioned quite a bit. People are exploring that more, along with other things like graph theory, and other things like that.

**Tivadar Danka:** Graph neural networks I'm not very familiar with, unfortunately... Neither with neural networks that use \[unintelligible 00:34:46.14\]

**Daniel Whitenack:** Well, I appreciate you taking your perspective on how those interactions between the math world and the machine learning world happen, and trends in those... I definitely appreciate you taking time to chat about all of these things on the show. It's been really useful and interesting. If you're listening to this, we're gonna include a link to Tivadar's book and website, and a link to the diagram that we've been talking about in the show notes... So make sure and check that out. If I understand correctly, the book is out for early release, right?

**Tivadar Danka:** Yeah, it's in early access, which means the book is not ready yet, and I publish chapters just as I write them. It's usually one chapter per week. One of the big advantages of this early access program is that you essentially, as a reader, have direct access to me all the time. We have a closed Discourse server where you can just ask me any question you might have... And if you have some feedback, I'll just correct it in the book, and next week you'll get an updated version with better explanations.

I chose this format because, as I mentioned, I want to write this book for leaders, not for mathematicians. So this is why I love this early access solution.

**Daniel Whitenack:** Awesome. Well, I appreciate you being also vulnerable during the writing process as well, and getting that out to people and letting them get feedback to you. I think that will produce a really valuable resource. So we'll be watching and we'll be excited to have you back on the show to educate us a little bit on machine learning math... Thanks, Tivadar.

**Tivadar Danka:** Awesome. Thank you very much for the opportunity.
