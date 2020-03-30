**Jerod Santo:** I think we should probably start by getting everyone on the same page, because quantum computing is a place where I think a lot of our listeners - and probably the three of us - come from very different places in terms of our understanding of it... So Johan, first of all, thanks for joining us, but the also, explain to us the core principals of quantum computing and how they're different than what I'm used to and what everybody is used to right now.

**Johan Vos:** Right. Thanks for having me. Quantum computing is actually very different from classical computing. There are some misconceptions, and people sometimes think that -- well, computers are getting faster every year, and CPUs are getting better, there's more memory... And then a quantum computer is probably just the next step to this. But that is actually completely untrue.

A quantum computer has not much in common with a classical computer. The main difference is every classical computer that has been built in the past, 50, 60, 70 years or so, is built on top of transistors. Very small electronical pieces that decide whether there should be current or not. A quantum computer is not built on transistors.

So the fundamental building block is very different, and as a consequence, the concept of quantum computing are very different as well. The core concept of a classical computer is a bit, which can be zero or one. And all the processing in those bits, and all the logic and all the algorithms are based on zeroes or ones. All the characters and all the flow is based on zero and one, and in a quantum computer that is not the case, because a qubit, which is what you can call the equivalent of a bit in a quantum computer, can be zero, it can also be one, but it can also be a combination of zero and one, and that is of course entirely different from a traditional computer.

And while that may sound strange, it actually is not strange, because nature is all about quantum mechanics... And the computers that we have today are pretty artificial, because we exclude what we call the superposition; we say that every bit should be zero or one, but that's not how nature works. There are states, there are combinations of zeroes and ones. So a quantum computer is much closer to real nature than a classical computer.

**Adam Stacoviak:** Are you saying then, I guess just for a one-to-one, if someone's familiar with quantum mechanics, or any nature of physics, if they're somewhat familiar with the quantum realm, if that's science fiction or not... If they're familiar with that, does a lot of it transfer in terms of quantum computing mirroring reality?

**Johan Vos:** \[00:04:18.21\] Yes, so quantum computers are totally leveraging the principles of quantum mechanics. For example, if you are a bit familiar with quantum mechanics, you know that electrons can have different spins; they can be in spin up, or spin down, or in a combination of a spin up and a spin down. And that actually applies to quantum computing as well. A bit can be zero, it can be one, or it can be a combination of zero and one...

So there are fundamental particles that can have a property that is sort of undefined until you measure it. And that is one of the core principles of quantum mechanics - the uncertainty; until you make a measurement, the property is not really defined, and that is the same core idea of quantum computing. As long as you don't make measurements, the system can be in a superposition of all the possible states.

**Jerod Santo:** What does that look like?

**Johan Vos:** From a physical point or from a computational point?

**Jerod Santo:** Well, let's take them both in order. What does that look like from a physical point of view? I guess you don't look at it, because once you observe it, it's no longer in that state.

**Johan Vos:** Yeah.

**Adam Stacoviak:** Observing it actually changes it, so... It's sort of a recursive loop - it is what it is until you observe it, which changes when you observe it. So are you observing it prior to the change that you influence by observing it, or...? It gets really a mind spin...

**Johan Vos:** Yeah, and then you come close to the philosophical questions - does it exist before you observe it, or does it exist because you observe it? And you can go very far with that... Now, what I do recommend is not to think too hard about this, because --

**Jerod Santo:** Okay, I can do that... \[laughs\]

**Johan Vos:** Yeah, you won't do much more \[unintelligible 00:05:56.07\] I prefer looking at mathematical equations without trying to have an interpretation, because it's mind-boggling... But yes indeed, if you look at it, it falls down to a classical state again. So if you look at the qubit, if you try to measure it - so we know that it's zero, or one, or some sort of a combination - it will always be zero or one. And in the complex quantum system with many qubits, there can be a huge amount of possible states. But once you observe it, it will fall back to one state only.

So that's one of the biggest challenges with quantum computers - you should not look and you should not be able to look, because once you observe the system, it falls down to the classical state. And that is one of the things that makes the hardware of quantum computers pretty challenging. Any measurement of the system or interaction with other components will cause the system to collapse to a base state.

**Adam Stacoviak:** What does an observation look like? Give us some degree of an example of observing.

**Johan Vos:** Yeah, this becomes tricky, because I don't know anything about hardware, to be honest... But it depends o what type of quantum computer, so I'll sort of circumvent that question. For example, Google and IBM - they are mainly using a subconducting quantum computer, so they are cooled to a very low temperature, a few millis of Kelvin. But there are others, for example Honeywell announced last week a quantum computer based on trapped ions, which is a completely different system...

But in most cases, by applying lasers you can manipulate the qubits, whether it be trapped ions, or electrons, or photons, or whatever... And then in order to get the measurements, somehow you need to have them interact with other particles. Then you measure the effect of that particle... So that's in general in elementary physics things that happen -- for example the double-slit experiment; you send a beam or you send particles to a slit, and then you measure their reaction when they encounter other particles.

\[00:08:09.17\] So it's all about indirect measurements... The moment that the qubit that you want to measure interacts with another elementary particle, based on the properties of that second particle you can detect the state of the qubit at that moment. It's then already zero or one, so you cannot detect a superposition. You cannot detect whether it was 70% zero and 30% one. You will always measure zero or one.

**Adam Stacoviak:** And what's the point then of quantum computing. Why is quantum computing important, considering the difficulty of observation...? What's the goal?

**Johan Vos:** Yeah, that's a very good question, and it's not easy to answer. I struggled with that question for a very long time, because -- well, you start with (let's say) 8 qubits, and with these 8 qubits you can have 2 to the power of 8 superpositions, and you can do all kinds of processing with all these combinations; 256 combinations in this case. But ultimately, you need to do a measurement, and you're back to 8 qubits that have fallen into a classical state... So you end actually with 8 bits. That seems like there's no advantage over classical computing, because it may look like a black box, and then you are telling your audience "Yeah, but inside this black box everything turns into gold" and once it comes out, it's wood again.

For example, you tell your audience "We put wood in this black box. There it becomes gold, all shiny, and then when it comes out it's wood again", and your audience will ask "So what is the value of this?" The mind-shift that developers need to make is that in many cases the outcome is not important, but the process is important.

Sometimes you're not interested in the outcome of a problem, but in the process that you need to follow to get an outcome... And the quantum algorithms that we know today and that people are working on today are mainly looking into this area.

For example, let me give a very fictive example, because there's no known quantum algorithm that is going to do this, but imagine that you have 100 numbers that are randomly sorted, and you want to know the highest number of this. What you do typically in the classical computing is you can do some bubble sort, or some quick sort, or whatever, and then you will get the highest number. So the result of this problem is one single number, and a quantum computer might be able to this just in one run... And the result is then again only one single number; but the fact that it could do the processing so much faster than a classical computer is where the real gain comes from.

A more realistic example of this is finding the periodicity of a function, which is something that's actually at the core of a Shore's algorithm, which we might come into, which is supposedly going to break encryption... Finding the periodicity of a function is something that you can do on a classical computer, but it's going to be much faster on a quantum computer... And the input of this is just a function, and the output is just one number.

So you don't need much numbers in the end to prove that this is faster. You just need one number. And if you can do the processing part much faster, then you gain something.

**Jerod Santo:** Hm. So you mentioned you don't know very much about hardware; you obviously know a lot about software. Both things are in play here... And one thing about quantum computing is that it has been very much the realm of academics and researchers so far, because the hardware problem, it seems - probably both problems - but what's the state of the world?

\[00:12:04.05\] It seems like quantum computing has been a threat or a technology that's always been next year, in two years... Like it's always coming, but it's never come... Yet. At least to the mass production phase. It's kind of like IPv6; it's gonna be here eventually... Although IPv6 has been here for years, we're just not using it. So what's the state of the hardware? You've mentioned IBM and Google are doing some things... Catch us up.

**Johan Vos:** Yeah. Well, actually, quantum computers are already being used, but not at the scale that one envisions. For example, you can create entangled particles and use those to do secure encryption. There is already hardware that allows to do this, and with systems that can work with one qubit only you can already do a few things.

Now, what people really think about when they hear about quantum computing - the first example that most people talk about is about breaking encryption. And then the question is "How far are we from breaking RSA?" That's very difficult to answer, and I personally don't think that this is the most important application in the short-term... But anyway, how far are we from this? Well, it's hard to say, again. Initially, people thought that the number of qubits is what defines how far we are in quantum computing.

Similar to classical computing - remember, 640k would be enough for all applications; then computers became bigger and bigger, so memory increased... And one would assume that this procedure would also be solved with quantum computers. We start with one qubit; you cannot do much with one qubit, but then two qubits, four qubits, eight qubits... And then the question is "How much qubits do we need before we have something that can really be worked on?" and more importantly, "How many qubits do we have today?"

Well, the question is not so much about how many qubits, because it would be not extremely difficult to get a quantum computer with a large number of qubits... But they have to be stable for a long enough time, and that is another problem. So getting a large sample of qubits is one thing, but having them stable for a long enough time to do some processing is the other thing... Because as we said in the beginning, if you measure that system or if there somehow is interaction between the system and noise, then your calculation is over. So the quality of the qubit is extremely important.

At this moment, we heard about 50 or 100 qubits that are sufficiently stable to do something useful... And I think this is good enough for developers to start working with it and to start experimenting with software on top of real quantum hardware.

It's gonna take a while before we have quantum computers that are strong enough to break encryption, but it is not going to take a long time before we have quantum computers that can apply encryption. That is something, for example, that the Q-tech department of Delft University of Technology - they hope to achieve that in 2020. So this year they want to show a network of quantum computers, very small quantum computers.

You only need one or a few qubits in order to have them interact with each other and send messages in a completely secure way... And I think that is going to be a first widespread application of quantum computing. It's maybe not as popular as breaking encryption, but guaranteeing encryption is for financial institutes, healthcare, everything where privacy is important, is going to be an important aspect... And I think that give it a year or so from now, that should be achievable. Not yet for everyone at home, but it should be used in between banks and different industries.

**Jerod Santo:** \[00:15:59.17\] So tell me if I'm hearing you correctly... It sounds like you're saying that before quantum computing is powerful enough to break our current traditional encryption algorithms, it will have produced its own new style of encryption that's more secure and unbreakable. Is that what you're saying?

**Johan Vos:** Yes, exactly.

**Jerod Santo:** Oh, that's good news...

**Johan Vos:** Yeah.

**Jerod Santo:** Isn't it?

**Adam Stacoviak:** I suppose, yeah...

**Jerod Santo:** Because the scary thing is like "Isn't it gonna break everything?" And I was thinking about the progress of these things, and I was like "If I was a nation-state and I wasn't interested in telling everybody how far I've gotten", and I was curious how close we are to like "Could nation-states have already privately developed the hardware to do this, or are we too far away?" And it sounds like before we get to there, we're already gonna have options...

**Johan Vos:** Yes, exactly. That's a reassuring order... So we will first have secure communication thanks to quantum computing before we have breaking of the encryption. Now, you never know, of course, what nations or big companies - what they're building...

**Jerod Santo:** Yeah, what they're capable of behind closed doors, right?

**Johan Vos:** Yeah... But the difference between the requirements for a quantum system just to do secure encryption are much simpler than the requirements for a quantum system that breaks RSA encryption.

**Jerod Santo:** That's interesting. Of course, if I was a nation-state and I had broken RSA encryption already, I wouldn't tell anybody about it, you know?

**Johan Vos:** No, but there might be signs... For example, with the same quantum computer you could also trick the whole Bitcoin system and do the mining... So you would see that in the Bitcoin price, for example. Now, not to worry people, but even if we think that breaking encryption is ten years away, that is still something to worry about today.

**Jerod Santo:** It's not that long.

**Johan Vos:** It's not long, and it may come back to you, because your bank transactions that you are doing now, if they are intercepted, and you don't worry about them, because "Whatever, they are secure", or your messages, you're using a secure messaging application and you're sending messages to each other - you don't care that they are on a server, because "They are encrypted", if someone stole those records, they are encrypted, they can't do anything with them now...

**Jerod Santo:** But ten years from now...

**Johan Vos:** Yeah. So imagine what this -- for example, communication between two presidents, that is encrypted, and that they assume that no one will ever see, and then 50 years from now someone wants to make history and he has those messages and he decrypts them... That might shed a new light on history.

**Adam Stacoviak:** Interesting.

**Jerod Santo:** That might be kind of cool. Kind of like the Freedom of Information Act. You won't need an act for that, you'll just have freedom of information, because you'll have unlocked 50 years of communications that were previously private.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** As long as there's a statute of limitations on that information or something, it may be not be all bad.

**Adam Stacoviak:** Especially with open government and open data, and the availability of some of this data. I guess in some cases that's really just literally open (not encrypted), but at some point having public access to past conversations of 50 years ago presidents...

**Jerod Santo:** Right.

**Adam Stacoviak:** It's interesting.

**Jerod Santo:** I'm actually less concerned about public officials having their communications publicized eventually, as I am private citizens having their private conversations publicized... That's more concerning, in my opinion. But either way... That's interesting, ten years from now... Because you think once you got it encrypted across the wire, you're fine. But that data at rest is gonna be resting there for years and years, and it may come back and bite all of us. Be careful out there.

**Adam Stacoviak:** Yeah, in parentheses "not yet". So it's private/encrypted for now; that might be a better way to say it. Because it's encrypted today, but for now.

**Jerod Santo:** Well, Johan, you got us all depressed and scared over here.

**Adam Stacoviak:** That's right. \[laughs\] Bring it back to the qubit.

**Jerod Santo:** Perk us up, perk us up.

**Adam Stacoviak:** \[00:20:08.29\] I'm curious -- you'd mentioned about this idea of a qubit and stability, which I'm still kind of grok what you mean by the hardware... It sounds lot like it's tied to the literal physics, meaning literal particles. The computer is not just simply -- I guess even in classical computing it's photons, right? How does a computer run today? Electricity. Is that photons? How does it change once it goes into quantum computing realm?

**Jerod Santo:** Lasers.

**Adam Stacoviak:** Yeah, I mean - is it based upon the stability of an actual particle?

**Johan Vos:** Yeah, sort of. So I hope there are not too many hardware experts listening, because they will kill me... But one of the cool things if we go from classical to quantum - you know that they try to make transistors smaller and smaller.

**Adam Stacoviak:** Right.

**Johan Vos:** But we're now at the smallest possible dimensions of a transistor. A transistor is actually mean to block electrons, to go from one side of the transistor to the other side. So if it should be zero, then there should be no flow, so it then blocks. But if you make them smaller than they are today, there can be an effect called quantum tunneling, that still allows electrons from one side to sort of magically (spooky) appear on the other side. That is a hard limit on transistors in classical computers today that you can't make transistors much smaller than today. So that is also why \[unintelligible 00:21:34.01\] coming to an end. And in quantum computing that's different, because they actually want those quantum effects to happen...

But stable is actually a difficult word, because what does it mean, a qubit that is stable? The real difficulty is that you can bring with lasers a photon in a state where it has to spin up and then spin down. Or there's actually a combination of a spin up and a spin down. But it's tricky, it's very hard to maintain it in that state for a long time...

But you want to do lots of processing on that state, and that's really mind-boggling how you can do that so you won't have that particle interact with other particles, and without actually measuring those particles... And if you do something slightly wrong, then the system will collapse into one of its possible base states. So all the combinations of zero and one are going back into either zero or one... And that is what makes it hard to keep them stable for a long time. The moment that you look at it, it's gone.

**Adam Stacoviak:** Yeah, even describing "look" is difficult. Like, "Look." How do you look at it? What is this -- the idea of observation and looking is very challenging to describe as well.

**Johan Vos:** Absolutely. So observations is one of the most difficult aspects in actually the whole quantum physics... And it's funny that we talk about this for a long time, because this is actually what I avoid in the book... \[laughter\] I mean, how many software developers know about how a transistor is working? Personally, I find it extremely interesting; all the physics behind quantum mechanics is extremely interesting... But it's very hard.

The core point of what I try to do with this book is explaining to developers that they do not need a Ph.D. in physics to work with quantum computers... Similar to how they do not have a deep understanding of how transistors work, but they can still write applications.

Nevertheless, it would be interesting and I'd love to discuss all the hardware aspects; it's just that this is difficult and mind-boggling, if you start thinking about it, especially -- the thing about observations... I read lots of papers and I watch lots of presentations abut that concept of observation, and where exactly does the observation happen, and what causes reality and consciousness... But that kind of brings us a bit too far, I think.

**Break:** \[00:24:18.17\]

**Jerod Santo:** Shout-out to our friends at Manning for hooking us up with some free copies. Stay tuned to the end and you can win a copy of the eBook... And it's very practical. So we've been talking about the \[unintelligible 00:26:00.19\] hard to understand, mind-boggling aspects, and I think the hardware and the physics and really the paradigm lead to that... But when it comes to software developers, first of all, we wanna dive into the book and what you're here to say to developers today, in 2020, about quantum computing... But I'm just curious, why write a book so practical about something that seems (at least today) so impractical in terms of it's out there...? Why now, and why write this book?

**Johan Vos:** Yeah. Surprisingly, you're not the first one to ask this question, so I prepared the answer... Well, actually, do you remember the Millennium Bug? The Y2K...

**Jerod Santo:** I do. The Y2K book, yes.

**Johan Vos:** When did you think they start working on that? In 1999, December 31st?

**Jerod Santo:** Um, probably before Christmas, as least... \[laughs\]

**Johan Vos:** Yeah... So that's the thing, you want to be prepared for when something big is happening, and we discussed breaking encryption... So do you want to be a) the first one, or b) the last one to break encryption? And especially if you want to guard yourself against this, if you want to use secure communication... This is not something that -- I mean, we try to make the software as easy as possible, but it's at this moment not something that you will just download from the internet and you have it running. It takes a while before you really understand the benefits and how it works...

So it's better to start working on it now, and to understand what is possible, and how you should program for it, so that you algorithms are ready by the time that real powerful quantum computers are there... Or even if you want to do secure communication using a quantum key distribution - that is really not extremely far in the future...

\[00:27:53.04\] So if you program that now and you have it on a real quantum hardware in a few years from now, today is really the time to start looking into this, for another reason as well - even if real quantum hardware is still not yet widespread available, quantum simulators in general are available today. And while they are of course much slower than what we expect real quantum hardware will do, their behavior is expected to be exactly the same as real quantum computers.

So you can test your software already now, and you can run it on quantum simulators... And that allows you to create all kinds of applications and to see which parts should be quantum written and which parts should be classical written, because we have those quantum simulators that are exact predictions of how it will work on real quantum hardware.

That is something, of course, that we didn't really have with classical computing, because there was no pre-classical computer... So it was hard to work on algorithms for classical computers when there were no computers already... But now we can use classical computers to simulate quantum computers and to write software for quantum computers.

**Jerod Santo:** Yeah, I think there's a huge opportunity whenever you have something that's just on the horizon, but seems to be obviously a step forward or a paradigm shift for those forward-looking developers to get accustomed to it today, so they're at the forefront tomorrow. It makes a lot of sense.

One thing that you said here, which you also write about in the book, is how quantum computing isn't going to take over classical computing, in so far as I'm not gonna have an iPhone that just has a quantum computer in it. You mentioned there'll be most likely a CPU, maybe a GPU, and then also a qubit processing unit, because quantum computing is not better at everything. It's better at very specific problems, and classical computing is better at other problems... What are the things that quantum computing is really good at?

We talked about breaking encryption, but surely there's other uses of this technology... Beyond that, where does it really shine, and where would I as a developer say "Well, I'm gonna turn to quantum computing for this particular problem I have, and classical computing for this other particular problem I have."

**Johan Vos:** That's definitely true, quantum computers are not intended to create a web page, or so. That is not the goal. And sometimes people wonder how large is the potential field of quantum computing versus classical computing; is a quantum computer just a special case? Well, actually I see the other way around - quantum computers are very close to nature. They are natural. They use natural building blocks, elementary particles, and classical computers are special cases, where we put everything in zeroes or ones, which is pretty artificial, but very useful for example for user interfaces.

Now, the fact that quantum computers are so close to nature make them already applicable for all kinds of problems related to nature, and I'm talking about physics, medicines, biology. If we want to understand the interactions of molecules, it is extremely difficult to model this on a classical computer. Even the tree body problem is extremely hard on a classical computer...

So the interactions between molecules, or the moment that we talk about complex molecules - that's impossible to simulate with high enough precision on classical computers. And why is this? Because those things are, by definition, quantum mechanical. And the best way to simulate something that's quantum mechanical is with quantum computing, which uses quantum mechanical characteristics as well. So there it is very useful.

The consequence of this is also that quantum computing is also in general very applicable for complex problems, where as we said earlier, a qubit can be in the state zero, and can be in the state one, and it can be in a linear combination... And this allows to represent two possible states with one qubit, four possible states with two qubits, eight states with three qubits... So there's an exponential function.

\[00:32:23.22\] So many problems that are exponential definitely can benefit from quantum computing, and this is why breaking encryption or so is one of the areas where quantum computing will outperform classical computing, because there is an exponential problem... And without going into the mathematical details, it actually means that if you make the problem twice as big, the time required to solve the problem can become twice as big - that's not a problem, but if it becomes exponentially bigger every time that you just add one bit, then it's soon impossible to do it with a classical computer. And with a quantum computer, that is more easy to tackle.

So those problems that require exponential computational power, so that if you make the problem slightly bigger, that it only becomes somehow harder to solve - those are candidates to be dealt with by quantum computers.

**Jerod Santo:** What about things like machine learning algorithms, or teaching? Thoughts on that?

**Johan Vos:** That is one of the areas where I think that quantum computing will - not in the very short term, but in the longer term - be really beneficial, and that's machine learning.

I think we made great progress in machine learning over the past decade or so, but still, if you look at how difficult it is for -- I mean, if you ask a computer to calculate the square root of a five-digit number, it will do it immediately, while a human needs more time for this. But if you ask a computer to detect a rabbit from a dog in a picture, you need to feed it with thousands of images before it can really do that... And the algorithms are getting much better, but for example, if you do deep learning, this requires lots of linear algebra and Matrix calculations.

Now, if you can leverage the power of quantum computing, where basically those things can be mainly done in parallel, then there's gonna be a tremendous speed-up in this. And I think actually that many of the hard problems in AI can only be solved if you also apply quantum computing to really increase the power of the mathematical algorithms that need to be performed in order to do this.

**Jerod Santo:** What are some domains where you don't see quantum computing making big waves?

**Johan Vos:** Well, everything related to user interfaces is something that's very subjective, where you don't need to be fast, but you just need to be right... And there it's less applicable.

**Adam Stacoviak:** Which is hard too, because you know -- what I know of a computer, personally, is what I see. So to go beyond what I see is difficult. That's why it's difficult to grok this quantum computing, because it's unlike anything I've personally seen before.

**Jerod Santo:** Yeah.

**Johan Vos:** Yeah, exactly. But that's going to be a bit philosophic, again... That brings us back to the original question - you're talking about what you see and what you observe. Now, that's not quantum anymore. At that moment you lost the quantum state.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Right.

**Jerod Santo:** You've gone classic again.

**Johan Vos:** But everything that is needed before you make that observation is quantum... And as Richard Feynman said, "Nature isn't classical. It is quantum." So if you want to study this, you're gonna need a quantum computer. And in the observations that you make - yes, that is classical. But everything that is behind this observation that causes you to be possible to make this observation - that is actually quantum.

**Adam Stacoviak:** \[00:36:11.17\] Yeah. And an analogy I heard, or a metaphor of expressing this, is if I can see a car moving, and I can predict "Okay, I see that car going from here to there", to the Stop sign, or whatever. But at the quantum spectrum of things you're predicting a crazy amount of particles; you're predicting where they're going.

As a car is a large object, I can see that the car is moving from here to there... But I'm really predicting a massive equation based upon my visual knowledge of the direction of a car. In some area of the quantum realm it may not actually play out that way.

**Johan Vos:** Yes, that is one of the bigger problems in physics in general, of course - the laws of quantum physics, pretty well understood at the level of elementary particles. One particle may be in a separate position, but how does that translate to larger bodies and larger structures like \[unintelligible 00:37:12.26\] That's a problem that is puzzling the greatest scientists of the last couple of decades... So I think it's pretty hard to solve.

**Jerod Santo:** Bringing this back to ground level here for a moment... You say they will not create quantum algorithms for applications that will benefit from quantum computers, but they will use existing algorithms... So for those out there may be overwhelmed - like myself; I can't totally understand it - this is approachable, and that's what Johan's book is trying to do, is to make an approachable way for Joe developer/Jerod developer to just become aware and know how to use these things, use existing algorithms.

You do say that developers who know the basics about quantum algorithms - why they're faster, how to use them etc. will have an advantage. So have we been discussing the basics of quantum algorithms, or is there more to that conversation that we haven't touched on yet?

**Johan Vos:** Well, we didn't really discuss that yet, because that's another discipline. Quantum computing for developers is multi-disciplinary. We talked about the hardware - I don't know much about it - and if we talk about the algorithms, that's mathematics. You don't need to understand the hardware to create algorithms, but yeah, it helps if you have a Ph.D. in mathematics in order to create quantum algorithms... Which the typical developer does not have. So the question is "What now?"

**Adam Stacoviak:** Yeah, exactly. \[laughs\]

**Jerod Santo:** Exactly. What now, Johan?

**Adam Stacoviak:** Give us the bootstrap to this then.

**Jerod Santo:** Yeah, what now?

**Johan Vos:** Yeah. One of the main goals that I'm trying to do with this book is to explain the fundamentals behind those quantum algorithms that are created by those bright mathematicians, and how developers can benefit from these concepts. I think it's extremely hard to come up with completely new quantum algorithms. If you think about it, there are only a few known popular quantum algorithms.

People that are in quantum computing for a while - they will know Shor's algorithm, Grover, Deutsch–Jozsa, and a few others... But they're not too many of them. And that's what I want to make clear - if you are a developer, do not expect that you will tomorrow create your totally new quantum algorithm.

\[00:39:42.20\] Those quantum algorithms are based on some concepts that might be applicable to your particular application. For example, in the book we discuss the Deutsch–Jozsa algorithm. That is a very simple algorithm, which in itself does not do something very useful, but what it does is it allows to detect some properties of a function very fast. And whatever that function is, that is something that is independent to the algorithm. The property that we examine in this Deutsch–Jozsa algorithm is whether a function is balanced or not. That means "Is the function always giving the same result, or is it sometimes returning zero, and then a one, and then a zero, and then a one?"

We show that if you want to do this with a classical algorithm, it's gonna take a fixed number of iterations, and a quantum algorithm can do it in just one iteration. By explaining this with some real Java code, it becomes clear to developers that "Okay, if I have a similar problem where I need to find out if this very complex function that I don't know what it is actually doing, but I'm just feeding it some input and it's giving some output", if I can maybe transfer my original problem into this problem that's already been solved by quantum computing, then I can benefit from quantum computing.

So that is actually one of the key take-aways that I try to give with this book - we explain a number of quantum algorithms, and if you think about your own problems that you have to solve, if you think how you can transform your original problem into a quantum problem, then you can apply that quantum algorithm and transfer the result back to your original problem. So you benefit from the hard work already done by the mathematicians that came up with the algorithm and you benefit from the quantum hardware, but you didn't have to create your quantum computer and you didn't have to come up with this bright quantum algorithm. You only need to make sure that you can see where those quantum algorithms might make sense in your particular problem.

**Adam Stacoviak:** Super-deep stuff, obviously. It is quite mind-boggling, as you said a couple of times already. This is very deep stuff... And the whole using of quantum for a developer I think is even more interesting, because you have to think about literal physics and the way things work, and how you can benefit from that... And leveraging mathematicians - hey, that's awesome; if you've got two Ph.D's and I've got none, I wanna leverage that; so that's so great that it's even available, and you're making it practical for very much so Java developers. You're clearly "a champion" of Java developers and Java's language. Tell us about that.

**Johan Vos:** One of the problems that I think quantum computing is facing is that there are some very brilliant hardware engineers, some very brilliant mathematicians and physicists working in this area... But in the end, if we want to make this successful on a large scale, then we also need, of course, software developers that are experienced in writing enterprise software, that are experienced with current encryption that can work with scalability, and software in general.

Now, the gap between these two worlds is at this moment pretty big... And what I try to do in this book is leverage a huge amount of existing developers and explain to them that quantum computing can also be used from their language. All my examples are Java-based, and Java has about 12 million developers that are very good in Java programming.

Now, if quantum computing becomes more popular, it would be a pity that those developers have to learn a new language... So why can't we make quantum computing accessible to Java developers? Because that will immediately give us 12 million quantum developers.

\[00:43:59.26\] If those Java developers can leverage the quantum algorithms that are being developed, then those quantum advantages can be used by 12 million developers... And that can create huge opportunities for not only those developers, but also the projects that they're working on. It's not gonna be easy to have 12 million quantum developers any time soon, so going that way is going to be difficult... But I think it's going to be easier to make these quantum algorithms accessible to Java developers, and then have 12 million developers that are leveraging quantum computing... Which is not exactly the same as 12 million developers programming quantum computers themselves. That is what I want to avoid in the book. You can use your regular Java skills to create those applications.

**Break:** \[00:44:59.24\]

**Jerod Santo:** Johan, I am reassured and encouraged as a working, practicing developer that I don't necessarily need to understand everything about how quantum computing works, and qubits, and quarks, and superpositions... I don't have to understand all of that stuff - and maybe with time I will - but right now what's important for preparing myself for this future, which is on its way, and is kind of here but it's just not yet evenly distributed, as they like to say, the main thing is understanding that it's out there, understanding that there are these algorithms which have extreme advantages, and there are problems that I'll come across in my day-to-day coding that if I can just rearrange the nature of my problems into a quantum computing-aligned nature, I can leverage one of these algorithms and have huge benefits... And I think that this book is really preparing many developers for that, so I'm excited about that.

Tell us about how if I wanted to dip my toe in the water with quantum computing - there's a simulator, I can't actually use any hardware, unless I have access to something like that, which I don't... But there is an open source quantum computer simulator, and in your book, you go through coding a Hello World... So there's actually code we can play with today, which at least gives us an idea of what it'll be like calling into quantum computing algorithms in the future. So walks us through that, step by step. What does the software look like, how do I access it etc.

**Johan Vos:** \[00:48:02.13\] Alright, so the quantum computing simulator, that I actually started writing about before I had the idea of this book, is called Strange, and it's a Java-based quantum computer simulator. It's on GitHub, it's open source, you can download it, you can play with it, and there are a number of samples that will get you started.

We tried to start with the very easy samples and then become introduced to concepts of quantum computing by showing more samples, and then the concepts of quantum computing algorithms by showing even more examples.

Now, the fact that it is in Java allows for many of those existing Java developers to hopefully get an a-ha moment... Because the way we explain superposition, for example, is hopefully intuitive for Java developers... Because I didn't use the word "random" yet, because it's a dangerous word to use in quantum computing...

**Jerod Santo:** \[laughs\] Here we go again... You're gonna go over my head... Why is it dangerous? Because there's no such thing as random in quantum computing, or something?

**Johan Vos:** Well, yeah, we prefer to talk about probabilities.

**Jerod Santo:** Oh...

**Johan Vos:** A qubit can be zero, or it can be one, or it can be a combination of zero and one. But there's still a probability X that you will measure zero, and a probability 1-X that you will measure one.

**Jerod Santo:** Okay. Makes sense.

**Johan Vos:** So if X is 50%, then it actually means that there's one chance in two that you will measure zero, and once chance in two that you will measure one. Now, this may sound familiar to developers in general. That's a quantum number generator. So this is how we show how you can write classical code to generate a random number, with just the random clause in Java... But then we create a quantum algorithm that does the same by simply putting a qubit into a superposition state, so that it's a combination of zero and one, and then we measure that qubit. And by measuring that qubit, it will be zero or it'll be one. And if you do that for example a thousand times, you will see that on average you will get 500 times a zero and 500 times a one.

This very simple example shows how you can sort of program a quantum computer... Because that is done -- similar to how a classical computer is programmed with gates, a quantum computer can be programmed with quantum gates by applying a NOT gate, a CNOT gate, but also typical quantum gates like a Hadamard gate, which brings a qubit into a superposition... So we introduce those gates and we show how you can program them to create the random number generator, for example.

Now, this is not something that in the end you want to do after. This is not the end goal of quantum computing, of course, but it makes the developer familiar with how a quantum computer works and how it resembles classical computers.

So we gradually add more functionality, and with every sample I try to show how you would do this in a classical way, and then how you do it in the quantum way. This gets the reader more familiar with the quantum gates and the quantum operations that are possible.

In the end, I still don't think that it is required for developers to understand everything about those quantum gates. Maybe they don't even need to know much about it... But it shows how the classical problem translates to a quantum problem, and that should help them when they are working on real-world problems - it should help them to detect which parts of the problem can somehow be transposed into the quantum world, where it can then be dealt with via a quantum computer.

\[00:51:57.23\] The classical gates, like a NOT gate and an AND gate - most developers understand about them. But if you create algorithms, you don't think about those gates because you typically program in a higher-level language like Java, where you don't worry about those gates anymore. And similar, while Strange -- the quantum computer simulator allows you to program quantum algorithms with gates, I don't think in 20 years from now if quantum computing is very widespread that many people will still be programming low-level gates... But therefore, the other part of Strange also allows to use quantum algorithms, and then they are implemented using those gates, but you don't need to know how these gates are really working. This book - it helps explaining concepts like superposition and quantum entanglement.

**Jerod Santo:** What do you think is the logical conclusion of that abstraction layer? And what I mean by that is you're describing and you're walking through the reader at a very low level, these gates and stuff... Because you want them to learn how it all works. But imagine 20 years down the road -- I'm feeling similar to I asked the TensorFlow team probably five years ago when we had them on the show to talk about machine learning and TensorFlow, when I said "When can I just call an API and get my result back out?"

When can I just say "Hey, sentiment analysis, please", and just pass in some data and it gives me the sentiment analysis, and I don't have to do all the machinations that were required back then to do some machine learning, and to train a model, and to update it, and manage all that kind of stuff. Their answer was "Well, that stuff is kind of coming, but it's not here yet", and I think we've seen progress towards that as a community, where certain machine learning algorithms and models are available, and I can take a model that's been pre-trained by a company and I can tweak it or whatever, I can call it and get my data back out.

I'm curious if quantum computing has a parallel where I can just have some sort of Shor's algorithm API down the road, or super-secure encryption, quantum concryption API... Is this a future that you see possible as a developer, saying "Hey, I can just call the quantum cloud and then get back my results"? ...and I don't really have to get into the nitty-gritty.

**Johan Vos:** That is indeed one of the possible futures that I see. So you mentioned Shor's algorithm, and then one more...?

**Jerod Santo:** The super-secret encryption algorithm... \[laughter\]

**Johan Vos:** Yeah, yeah. Quantum key distribution.

**Jerod Santo:** Yeah... Well, I don't know the names of these things. Well, I know Shor's algorithm, because I read it from your chapter ten, but I don't know anything else, so... I'm making things up.

**Johan Vos:** Yeah... The quantum key distribution is actually pretty cool, and that's a short-term realistic thing. I'm actually working on one more example for this... Actually, that might be part of an answer to your question, as well. I don't think that in many years from now developers will say "Okay, now I'm gonna use the quantum key distribution." They will use a Java socket, just like they do now. And the internal implementation of that socket - you can already do secure sockets with the SSL socket factory in Java, but also another implementation could use quantum encryption.

So you would just say at a very high level "I want to create a socket to this IPv6 address, for example, and I want to give it property quantum." I think this will rather be in the underlying layers of libraries, and that is slightly different from the evolutions in machine learning, where you always need a good model, and you always need data scientists to do the analysis and interpretation, and to do all those clever things.

\[00:55:53.18\] In quantum computing I think it's gonna be more hidden inside the libraries. But even then, you need to know which libraries you want to use for which occasions, and that is still going to be a challenge... So it's gonna be partly similar to the way that machine learning in general is moving into, but it will be (I think) more hidden for the end developer. But then we were really talking about the long-distance future...

**Jerod Santo:** Yeah. In the meantime there's a lot of work to be done, and we need developers doing that work, right? Building up those abstraction layers and the glue underneath, for the rest of 20 years from now for me to just say to my runtime "call this library", and that one happens to be backed by a QC algorithm, or something.

**Johan Vos:** Yeah, exactly. It's indeed a future that's far away. I think for now developers that, for example, are worried about encryption and want to know about quantum key distribution and Shor's algorithm - they still need to pick those algorithms... And that is indeed something that (I think) at this stage you can compare it with the stage of machine learning, because you somehow need to understand what you're doing in order to do something useful.

To give you a concrete example of Shor's algorithm, what it is actually doing - Shor's algorithm is factoring integers. So it's gonna say that 15 equals 5 times 3, and it does that no by brute force, but it does it by translating this problem to another problem. And the problem that it is translated to is finding the periodicity of a function, which I talked in the beginning... And it turns out that quantum computers are very good at finding the periodicity of a function.

But if you want to break encryption, you still need to think about "Oh, somehow I can translate this problem into finding the periodicity of a function, and then I can use a quantum computer." You don't need to understand how quantum computers work, but you still at this moment need to realize how you can translate finding prime numbers for example, to translate that to finding the periodicity of a function.

**Adam Stacoviak:** It still seems kind of trapped in the mathematics realm, based on what you've just said there... At least currently. Jerod mentioned this future of -- I love the idea of this quantum cloud, Jerod. When you said that, I was like "Yes, we need that." But based on what Johan is saying, it still requires some knowledge, awareness of the mathematics behind these algorithms and the usage of them, to really leverage them to the full ability.

**Johan Vos:** That's why I hesitated giving this example until now... \[laughter\] Because indeed, for Shor's algorithm it does. To be honest, you need a fair understanding of mathematics in order to understand it... And that's why it's typically the number one algorithm that people know about when they hear about quantum computing. And it's great, and it's brilliant, and it's so nice from a mathematical point; it's fantastic. But it is not, in my opinion, the most appealing algorithm, or at least not the one that will immediately be the most popular amongst developers. There are other things...

And by just explaining the concepts of superposition and entanglement, with those simple Java applications where we create a random number generator... And with entanglement I have the analogy with a magician, so where you have two coins, you don't see them, you send one to another computer, and based on what you measure, you know what's there on the other computer. That's more realistic, down to earth, and you don't need a Ph.D. in mathematics for this... But understanding these concepts might already be helpful in translating some parts of your problem to quantum problems. And granted, for Shor's algorithm - yes, you need lots of mathematics.

**Adam Stacoviak:** \[00:59:55.28\] Yeah. I think it's important too to sort of rewind back to something you had said in the blog post about this regarding the book. You said with the book the goal here is not to be this end-all-be-all knowledge base of quantum computing, but more so you wanna give the 12 million Java developers out there the opportunity. Now, the key thing is this opportunity to experiment. So it's not like "Hey, today quantum computing has arrived. Use it. Here's how you do things."

It's more so an invitation to experiment with this different way of computing that we're not familiar with, or generally familiar with, and primarily using Java-based computing simulators... In this case Strange, and the things you've done there. So that's kind of key too, is that this isn't meant to be a bible of quantum computing; it's meant to be an invitation of this experimental phase. If you haven't used it yet, here's a way to get in.

**Jerod Santo:** An introduction.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** And I would also say that reading a book as non-Java developer, that didn't give me any problems. I didn't actually code out the things, but I read through the code; the examples are in Java, it's focused on Java, but I would say for all developers who are interested in quantum computing, I think it's approachable, regardless of your language of choice.

**Johan Vos:** Yeah, it is in Java because I know that language the best... But actually, it is just any classical language that could have been used for this. We try to bridge the gap between the world of quantum computing and the world of classical computing.

I hear many classical developers, Java developers asking "Hey, quantum computer - is that gonna be something for me or not? How do I start on it?" I think there's an increasing amount of resources about quantum computing, and especially how the hardware is evolving , and what the potential opportunities are... But as a developer, I also saw that some companies are getting nervous because they work with security, they have great developers, but they hear that quantum computing might give opportunities and challenge us... And even if it's still many years out, they want their developers to start understanding how it works.

I don't want to claim that after reading this book you can start creating your own quantum algorithms that will be the best in the world or so, but at least what I hope is that developers will get a feeling of what is possible with quantum computing. It's not that strange thing anymore that's just gonna speed up all the algorithms with a few orders of magnitude, it's something tangible that has some benefits, that has some challenges, but that might be useful for them today, in a few years, or in a long time; no matter what, it's gonna take more than just reading the book before a developer becomes an expert in leveraging quantum computing. But that's also - coming back to the very first question - why it's important to start working on it now.

People that started working on the Millennium Bug started working many years before the problem was really there, because it takes a while to understand it... And you want to be prepared for when it's really there.

**Adam Stacoviak:** That's simple, it's just a year change... Oversimplifying this...

**Jerod Santo:** It's simple, isn't it? \[laughs\]

**Adam Stacoviak:** Right? It's just a year change. No big deal.

**Jerod Santo:** They're just qubits. At the end of the day, they're just qubits.

**Adam Stacoviak:** Right. I like the idea of qubits and qubobs. \[laughter\]

**Jerod Santo:** You have bits and bobs, and you have qubits and qubobs.

**Adam Stacoviak:** That's right. Yeah, I like that.

**Jerod Santo:** Yeah, it's all the same thing. You just add a "qu" in front of it, that's my take-away. One other point to add to that, the Y2K analogy... More on the opportunity front - the people who really dove into... I'm looking at this on a parallel with machine learning; I just can't let go of it. The people taht dove into that five years ago, seven years ago, ten years ago, are making very good money right now. And I think the people that are going to dive into quantum computing and able to implement things, and know about things, and leverage this coming technology I think will have opportunity at very good money; so if money motivates you, there's some motivation as well.

\[01:04:14.03\] Johan, I'm curious if there's a place where your average developer like myself could keep up with the state of quantum computing - kind of like see new things coming out, new algorithms - without being overwhelmed with the maths and the hardware folk... Is there any approachable waypoints in the community? Is there a forum, is there an RSS feed I could subscribe to just to stay abreast of what's going on and developing in the quantum computing community?

**Johan Vos:** There are very good resources if you want to track the progress of hardware. Unfortunately, most of the progress is really in academic papers. The difference - if you want to make this more accessible - you're risking to getting one of the more popular articles that just claimed "Well, we achieved quantum supremacy" without saying what it actually means. So that is difficult. However, there is one resource I do recommend; some of the companies that are working on a quantum computer, like IBM \[unintelligible 01:05:16.24\] Google are creating excellent documentations and videos and tutorials.

For example Qiskit, which is the IBM quantum suite, which has both a simulator and also access to their real experimental hardware - they have some great tutorials and great blog posts about it, so that's always interesting. And then I follow all the progress of Q-Tech, which is that research consortium associated with the Delft University of Technology. They have very great and accessible tutorials about what quantum computing is... So more than just the hardware.

But unfortunately, at this moment, I don't know yet of a simple list or RSS that makes evolutions in quantum algorithms for developers available in a developer-friendly way.

**Jerod Santo:** Yeah. Well, it sounds like an opportunity for somebody out there who's interested and would like to keep the rest of us updated with what's going on. A feed on that for developers would be -- it would get me subscribed, that's for sure, and probably many others as well.

So the book is Quantum Computing for Developers, by Manning. it's in Manning Early Access right now. It's gonna be done real soon now... We've got access to eight chapters; there's 11 chapters. I think Johan has one or two sitting on his hard drive, haven't quite gotten uploaded to the Early Access Program yet, but I'm sure it'll be there real soon.

Thanks to Manning, we do have a discount code for all listeners who are interested, for all versions, whether the print book, which will be happening, or the current early access eBook. The discount code is "podchangelog20". I do not know how much it takes off, but you can plug that in and be surprised.

**Adam Stacoviak:** I would assume 20%.

**Jerod Santo:** I would assume 20% as well... And so we will link up the product page in the show notes. Please use that discount code and save yourself 20%. We also, as I referenced before, have three free discount codes to the eBook that we'll be giving away. Here's how it works - pop up in your show notes, hit Discuss on Changelog News, leave a comment on the episode page, tell us something about quantum computing, maybe an analogy that works well for you, maybe you can tell us how confused you are, maybe you can link us to a resource that is helpful, or just let us know something about it... We'll pick our three favorites within 30 days of the publishing of this episode and we will hook you up with a free eBook.

**Adam Stacoviak:** Excellent.

**Jerod Santo:** Johan, this has been a lot of fun. It's been enlightening for me, and hopefully for our listeners as well... And thanks so much for coming on the Changelog.

**Johan Vos:** Thanks folks for having me, it was fun.
