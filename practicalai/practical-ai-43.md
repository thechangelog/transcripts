**Daniel Whitenack:** Welcome to Practical AI. This is Daniel Whitenack. I'm a data scientist with SIL International, and I'm joined here by Chris Benson, who is a chief AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great, Daniel. How's it going today?

**Daniel Whitenack:** It's going good. It's allergy and mowing season, and I finally got peer-pressured enough into mowing my lawn last night, so you know, I'm feeling that a little bit... But all around good. Otherwise, models are training and having fun.

**Chris Benson:** There you go.

**Daniel Whitenack:** What about you?

**Chris Benson:** I'm doing fine. Also, mowing the lawn you just take a giant Ziploc bag and jump into it and zip it up, and go out there and push it around. Try to avoid the pollen that way.

**Daniel Whitenack:** Yeah, exactly. I'm really excited today... As our listeners know, my background is originally in computational physics, so I always love when we have guests that overlap with that area. It kind of brings me back to my grad school days. Today, the topic that we're gonna talk about is pretty exciting; we're gonna talk about quantum computing and how that overlaps with machine learning and AI, how machine learning and AI are impacting quantum computing, and then some related things.

Today we're joined by Marcus Edwards, who is a graduate student at the Institute for Quantum Computing at the University of Waterloo, and Dr. Shohini Ghose, who is a professor at the Wilfrid Laurier University. Welcome, thank you guys for joining.

**Marcus Edwards:** Thank you for having us.

**Shohini Ghose:** Thanks for having us.

**Daniel Whitenack:** It would be great to hear just a little bit of background from each of you - how you got into physics and quantum computing, how you got interested maybe in related things, like AI and those sorts of things. Maybe Dr. Ghose, if you wanna start us out with that?

**Shohini Ghose:** I've been interested in physics, and more generally science, for a long time... And yes, I was one of those nerdy kids who loved Star Trek back when I was a kid.

**Daniel Whitenack:** There's nothing wrong with that.

**Chris Benson:** Excellent.

**Shohini Ghose:** \[00:04:01.12\] Right?! But other than the Sci-Fi kind of astronauts, I was also inspired by real astronauts. When I was a kid in India, one of my heroes was Rakesh Sharma, who was the first Indian to go to space. I always dreamed of following him into space, and that's not something that's happened as yet, but hopefully...

**Daniel Whitenack:** You never know.

**Chris Benson:** You have time left.

**Shohini Ghose:** Exactly, right?! Exactly. So in the meantime I thought I'd do something that's almost as exciting, which is physics, of course. That's what brought me into physics. When I was an undergrad, I was lucky because I got to do a summer research project on quantum physics. That was my first real taste of this very bizarre world, and I kind of liked it.

From there, I went to grad school in the U.S, at the University of New Mexico. Back then, that was one of the first research groups in this brand new area called quantum information science, which is basically the broad area that includes quantum computing, quantum communication and everything else we hear about today.

So I feel like I got in on the ground floor. It was exciting times, and I've seen the whole field grow and evolve to what it is today. It's been a great, wonderful journey. Kind of like a Star Trek exploration journey. I think it's going well so far... That's my story.

**Chris Benson:** I've gotta say, any bio that can bring Star Trek into it as part of your bio, that works for me. Marcus, can you tell us a little bit about yourself?

**Marcus Edwards:** I certainly can. Actually, my link to quantum physics and quantum computing really is Dr. Ghose. I attended Wilfrid Laurier University in my undergrad, in a double major in computer science and physics. I originally joined that program just because of the interest in the fundamental problem of information science and computing, and wanting to get into the physics of it. In that exploration, quantum mechanics was the most interesting facet, and it sort of felt like that's where people were asking the most fundamental and ground-breaking questions... So I started working with Dr. Ghose in my undergrad, doing a directed research study, and getting involved that way.

It was actually Dr. Ghose who encouraged me to continue on with it, and that's why largely I'm at the Institute for Quantum Computing now, doing my grad studies. I guess I also am a bit of a technologist, so I'm currently a front-end team lead at DelphX Capital Markets Inc. where I'm doing full-stack software development. So having some of that more practical technology experience and bringing that together with the quantum physics is really exciting to me; that's sort of where quantum machine learning comes into it... And we'll go from there.

**Daniel Whitenack:** Awesome. That's super-exciting. I'm really excited to hear about your passion for merging that practical side of software engineering with the quantum physics. I really appreciated that in our previous conversations.

On Practical AI we're talking a lot of times about GPUs and other ways to accelerate computing, and a lot of our listeners might have heard of quantum computing, but not really understand how it fits into the wider scheme of "Is it a way to accelerate regular computers? Is it something different?" So if one of you could describe in general what quantum computing is and how it fits into that scheme of accelerating computing... That would be awesome.

**Marcus Edwards:** Sure. Dr. Ghose, why don't you take a shot at this first, and I'll add anything.

**Shohini Ghose:** \[00:07:46.22\] Quantum computing - yes, it does offer the promise of super-fast speed-up for certain types of problems... But this is not just yet another faster computer. So it's not just about how you read in the news all the time, "Oh, now we have yet another faster processor from Intel, or AMD, or whatever." That's not what we're talking about. We're talking about an entirely different technology.

It's kind of the difference between, for example, transportation via horse and carriage versus transportation by cars. It's not like you can just build better and better horses and make a car. You can't. So in that sense, it's a completely different technology, because it's harnessing different laws of physics than what we use to build current computers. And the laws that we are talking about are the laws of physics that govern the behavior of individual particles like electrons, and photons, and so on... And those tend to be rather peculiar laws.

One of the things probably a lot of people have heard of is this idea of quantum uncertainty, or they may have heard about the idea of superposition, where a particular particle can have two different properties at the same time. In the language of computing, that translates into a bit or some piece of information; a quantum bit doesn't have to be just 0 or 1, but could have a superposition of 0 and 1, which means it has a probability of being 0 and a probability of 1. That may seem like that would lead to more uncertainty in computing, which is true, sure, but if you're smart about it, then you can actually harness this uncertainty to do actually better computing, and build new types of applications.

One of the very first such applications was to realize that uncertainty can lead to information security, in the sense of encryption, and hiding information. From there, we explored new types of algorithms for other kinds of applications, such as encryption... And not just encryption, but cryptography, and mathematical tasks such as factoring large numbers is another big example, doing searches more efficiently... And all of these come from realizing that all these strange quantum properties essentially give us new math to work with. And when we have more rules to work with, then we can combine the rules in more clever ways.

It's like taking the rules of chess, for example, and then saying "Hey, what if we could play 3D chess, like in Star Trek?" And then you can make a lot more moves, and you can play a much more interesting game. So that's for me broadly what quantum computing is all about.

**Daniel Whitenack:** Yeah, thank you so much. So if I'm understanding right, there's kind of a basic set of operations and hardware that have powered - even if they're faster computers over time - classical, normal sort of computers that people think of over time, that are really built around maybe things like transistors, or other things that have a certain state, like 1 or 0. So am I right in saying that in a quantum computer there's not necessarily the idea of a transistor, but something that has maybe not just 1 or 0, but a certain number of states, and because you have more possibilities, there's fundamentally new things that you can do that are a different space of operations than what was enabled on the other hardware... Is that right?

**Shohini Ghose:** That's exactly right. A quantum processor would involve gates that are not just flipping of a bit from 0 to 1, or just multiplying OR and AND gates, which we are very familiar with in regular, classical hardware processors. For quantum processors we are allowed to build even more gates, that we couldn't do before, because as you correctly said, there are many more different types of potential manipulations you can do... Because you're not just restricted to two things, 0 and 1.

**Marcus Edwards:** \[00:11:57.05\] Yes. Can I just say that I think it's awesome that quantum information science is a field that lets you sort of go back and design at the level of the comparative transistor... Like, who's going to let you redesign the transistor in any other field, right?

**Daniel Whitenack:** Yeah, it's kind of like going back to a golden age, almost...

**Marcus Edwards:** It is, especially if you're really interested in that technology-focused research. So I love that comparison to the transistor and designing at that level, and thinking about things in different ways. I also really like that comparison with 3D chess, actually... Because yeah, there are models of quantum information science that are being developed, and some that have been developed to quite a far extent, and experimentally tested, experimentally demonstrated. These models are enabling us to do computation despite not fully understanding the underlying physics of what's going on necessarily.

I don't necessarily think anyone truly understands quantum mechanics, which is kind of fun how it fits with the 3D chess analogy... We can model quantum mechanical interactions in many-body physics using high-dimensional vector spaces, and tensor mathematics etc. which ends up leading us to the fact that actually quantum mechanics and quantum computing has a lot of analogs that fit well with machine learning, and other fields that deal with high-dimensional mathematics.

**Chris Benson:** I'm wondering - we're always hearing in the news about quantum computing/quantum computers, but I don't know that in my own mind I understand what the current state of practical quantum computers, just like I might work on a traditional computer or classical computer -- where are they at this point? Is this something that we're expecting to be available any time soon? Are people gonna have access to them? And if not, what is the roadmap to get there?

**Marcus Edwards:** Sure. I suspect that you may know this, but in 2010 Lockheed Martin actually became the first customer of one of the first companies providing commercially-available quantum computing devices. The company I'm talking about is D-Wave, and they don't provide quantum computers per se, not universal quantum computing, but computational devices that make use of quantum physics, for sure.

That was really exciting, because Lockheed Martin was able to demonstrate one of the first practical uses of what's called a quantum annealing machine - which is what D-Wave provides - debugging a chunk of 30-year-old code from an F-16 aircraft. It was just a cool story, and I thought it was a cool connection. So that's one example. There are these sort of almost application-specific quantum devices that are actually now available, though there aren't too many in the world... And we also see other companies like IBM, Google, Intel, all working on their own quantum computing projects. Microsoft actually has one, too. These are all at varying levels, and focusing on different technologies, because there are many different formulations and approaches to implementing quantum computing.

One of the most notable ones, just because of how far they've come and how well they're doing with marketing and getting researchers on board, is IBM. IBM announced this year their system called IBM Quantum One. What it is - it's a 20 qubit quantum computer, and it is that sort of universal quantum computer which application-specific devices like D-Waves are not. It's exciting, because it's commercially available; it's also available to research... Researchers like myself use it for just asking interesting questions about physics and seeing what actually happens, and if it matches our expectations. It's kind of like a lab that you can access through the cloud. It's cool.

\[00:15:55.01\] Now, these computers, though you may suspect, aren't changing the world yet. These are at this point sort of toy machines, and they're really expensive toys. They're several million dollars of parts and work going into each one... But they're still at the point where even if they have a large number of qubits, like 20, that's not really enough to get us to the point where we're doing any sort of large-scale optimization problems, or really enhancing machine learning yet, largely due to just the challenges in engineering that come along with it. Once you're trying to maintain a large quantum system, that becomes very difficult.

**Chris Benson:** As a follow-up to that, I'm gonna ask both of you for an answer, if you'll put on your super-prediction hat and magically look into your crystal ball - do you think there's a point in the future here where quantum computers become as ubiquitous as our classical computers are? Or do you think they're always gonna be specialized? And if so, just pulling a number out of the air, how long do you think that we are from that?

**Shohini Ghose:** Okay, I'll go first, I'll jump in...

**Chris Benson:** Okay.

**Shohini Ghose:** ...although, of course, it's very dangerous to ever make predictions about technology, because we never, ever get it right; that's the only prediction I can make for certain, that I will be wrong... But that being said, currently I don't see any evidence that we are going to have desktops or laptops that are quantum computer-based, because -- for one thing, we don't need them. It's a bit of an overkill to use a quantum computer to do e-mails, for example. You're never, ever going to need that. That's not what quantum computing technology is all about.

**Daniel Whitenack:** I don't know, I think I might need one to run all my Chrome tabs...

**Chris Benson:** Your quantum Chrome, yeah... \[laughter\]

**Shohini Ghose:** I'd say in the near future there's going to be definitely specific applications, as I said, perhaps either in encryption, or in things like what we call quantum simulations, so using a quantum computer to try to simulate other quantum systems, like small molecules perhaps, that could be used for drug development, and things like this. Those would happen in the small scale, in the relatively near term; maybe we're talking about the next decade or so. But I think in the longer term, and even now, I think what we're doing now is envisioning more of a hybrid system, where there'll be perhaps a front-end, which is familiar to users today, which looks no different than what we're using now, and then in the back-end maybe there will be some layers of either quantum communication happening, or some kind of quantum processing happening, that we may not even see.

As Marcus described, our first access right now to any kind of quantum device, which is the IBM device, is through the cloud. So that might become the way forward, where most of this will be cloud-based, where we don't have it in our homes all the time necessarily, but it'll be there in the background. I guess I'll leave it at that.

**Daniel Whitenack:** Yeah, not many people have like a TPU pod from Google sitting in their closet to run their neural nets either, so it seems like a similar model.

**Shohini Ghose:** Exactly.

**Chris Benson:** I'm just bumming; apparently, I'm not gonna have a MacBook Pro Quantum version anytime soon... \[laughter\]

**Marcus Edwards:** Well, it's unlikely. I will say though that one thing that really excites me is bringing this sort of cooperation closer together between classical and quantum computing, and sort of optimizing that as much as possible. While it's certainly less likely that we'll ever have a quantum processing unit or something alongside our CPU and our laptops, I don't think it's impossible. My prediction would be that, of course, the first access that becomes "ubiquitous", if it gets that far, to quantum computing, would be through the cloud. That would be similar to what we have now, that IBM is providing. Other companies are starting to look at that as well. There's Rigetti at Google, and Xanadu actually all have their own software portals now, that they intend to continue to market and develop and optimize for quantum computing, and enabling that communication.

\[00:20:19.07\] Now, of course, communicating with a quantum process is interesting, because it becomes a bottleneck when you wrap a quantum process in classical processes on either end. However, having a completely quantum computer to me would be probably the most useless computer that exists, just because as humans we expect to have interpretable information coming out at us and going into the computing from us... So I think that we will always have that sort of classical interface at least, and where quantum will actually be useful is in - as Dr. Ghose said - the back-end, whether that's a chip or a remote database somewhere that's been implemented using quantum physics, or a remote processor doing particular pieces of hybrid algorithms.

Some of the most exciting hybrid algorithms are in machine learning, and there's work being done here in Waterloo at IQC and at the Perimeter Institute on creating these hybrid algorithms and optimizing them for cooperation between CPUs and QPUs. That's really exciting stuff.

**Break:** \[00:21:36.23\]

**Daniel Whitenack:** I really appreciate the explanation that both of you gave on the front of what quantum computing is and the current state of it, maybe some things that are coming in the future... One question that I have in my mind - I played a little bit around with systems like Rigetti, and others... But I'm wondering, from your perspective, could you just describe what does it look like to program a quantum computer? Do I just pull up a Jupyter notebook and use Python to say "Pandas read from quantum computer", or something? What's the interface currently, and what type of different thinking and different sorts of practical operations are you dealing with when you're programming a quantum computer?

**Marcus Edwards:** This is a very fun question, and one that's very exciting, because again, when it comes to quantum information science, you're free to reimagine and rethink every layer of the stack. For example, what sort of language do we use to program a quantum computer at the low level? There are a few different takes at this, but it's all in the very early stages, and almost all open source, so that anyone who is interested can actually start learning how people are thinking about implementing assembly languages for quantum computers. IBM has OpenQASM they call it, it's Quantum Assembly Language. It's open source.

\[00:24:06.10\] For example, I have the source on my laptop here on my Mac, and I'm able to play with that a lot. Now, sort of an interesting question is "Do we want our language (even our low-level language, our quantum assembly language) to be opinionated and limit the scope of what a quantum physicist can describe?" Because quantum physics is very complex, and the gate model is what's typically used to describe quantum computing processes... But it's certainly not the only model for quantum physics and even quantum computing. There are plenty of different types of devices even. You might say "We want to use a continuous variable quantum computer, or an adiabatic quantum computer." And if we wanna do that, because for some reason there's some appeal to practically implement one of those in the future, maybe IBM's QASM is no longer relevant in that case, because it was designed to express its particular type of quantum computing.

So there's sort of a bit of an emerging open source community around quantum computing, which is very interesting. It's largely centered around IBM and what they're doing, but there's alternatives, like what Xanadu is offering, which is around a different type of quantum computing, called continuous variable quantum computing. I've been a contributor to Xanadu's Strawberry Fields library, which is a Python library, for about five months. It's trying to define basically the TensorFlow of quantum computing... Which is a Python library that - yes, allows you to define these sort of gate-level operations, and express quantum computing processes in that way, but also provide these more abstracted tools, sort of like you'd expect from a package like TensorFlow.

So if you want to implement a machine learning process that uses quantum physics in the background, you may use their package Strawberry Fields or PennyLane to actually do that in a more expressive way... And it's just really fun seeing all this stuff getting built and imagined for the first time. It's an open area of research, honestly, to define these languages well, and work is going on in that area at IQC, and in companies like Xanadu. It's really cool.

**Chris Benson:** I appreciate that, Marcus. That's a great explanation. Dr. Ghose, how do you see -- you have the existing AI and machine learning community that's out there, and you have these quantum communities that are in development... How are those communities similar and different, how do they look at each other, and how might they go about collaborating? This idea that Marcus mentioned about kind of the TensorFlow of quantum computing - how does that come into being where it's actually utilized in the community?

**Shohini Ghose:** That's a really exciting question to explore right now. This whole area of quantum machine learning, as we call it now, is rapidly growing. As Marcus mentioned, Waterloo is a big hub for this kind of work, as is Toronto of course in AI in general. I think both quantum can benefit from AI and machine learning, and machine learning can benefit from quantum, too. What I mean is -- if you look at the level of the mathematical structures of quantum theory, and the mathematical structures of machine learning, there's a lot in common.

\[00:27:56.10\] One thing that people have been exploring is, given that we don't actually have existing large-scale quantum computers today, we still have to rely on our current regular computers to be modeling and analyzing quantum systems, right? And what happens is that it's a very challenging problem, because every time you add one more quantum bit to your system to try to model it, you double the computational space that you need. That's a huge challenge, and in fact it prevents us, for example, even from modeling molecules of a few hundred atoms, for example. That's where we get stuck. Even the world's best super-computers can't handle it.

However, if you look at the best ways to map that kind of information into classical computers, it turns out the sort of mathematical frameworks like the tensor network structure and so on, that you also use for machines, and the neural networks -- so the tensor network from quantum maps onto the neural network structure that's being used right now for machine learning. So there's a lot of work in trying to explore how can we efficiently explore quantum physics using the same kind of structures and approaches that are being used in machine learning.

There have been some initial successes for doing things like, for example, looking at the magnetic properties of different materials, and so on. Those are very exciting, because it means that there are actual benefits to be had from using the mathematics of machine learning to also analyze quantum theory... But it can also go the other way, because we can also think about what happens when we do have working quantum computers at a scale large enough to do something interesting. The question then becomes "Can we take some of the machine learning algorithms that are existing today and build quantum versions of those algorithms that are much more efficient?"

What I mean by that, for example -- this is not a machine learning example, but one of the first math problems that was shown to be much better if you run it on a quantum computer is this idea of factoring a large number. And this is very useful, of course, because this is in fact what would enable us to hack into current encryption like RSA.

What we know is that there's a quantum version of factoring that can run much faster if we had a quantum computer... So then the question is are there quantum versions of current machine learning algorithms that would learn much faster once we have a quantum computer? There's a lot of work on that end. As we build more of those and have them ready to go, and at the same time develop a good software and language that we can use to program future quantum computers, then we might be able to do all these exciting new kinds of problems that we can't do today. That's what we call quantum advantage... That's where I see that field.

**Chris Benson:** I'm curious, from a very practical standpoint, with deep learning now being dominated by the linear algebra and derivatives that we're always taking as we are training models, is that going to be superseded by different quantum techniques? In other words, would the current math and quantum be somehow working together, or are you essentially going to replace the current mathematics with a quantum variant of that, to get better performance where you wanna go on that?

**Shohini Ghose:** Quantum mathematics is essentially linear algebra, but in a particular space, which we call Hilbert space. This essentially means that you have complex numbers, and vectors, and there are certain properties on the space. It's basically, as I said, a larger set of mathematical rules that we can use. And again, if you have more rules to a game, then you can figure out different ways to win the game. That's really what I mean by using quantum to do -- I mean, the task remains the same, but the way you solve the task changes, because you're allowed to use these different rules.

**Daniel Whitenack:** Gotcha.

**Marcus Edwards:** \[00:32:12.17\] Yes, and one of the interesting things that we get to do as researchers is actually recast problems that are currently being solved by AI and solved by classical algorithms into the Hilbert space and into quantum problems. So if we can do this recasting of the problem and come up with a quantum solution, it's often very interesting to see what kind of advantage that quantum solution provides over the classical one.

We already see some companies actually providing services - not too many, but... There's 1QBit, for example, which does actually provide sort of a consulting service, and as a part of that, recasts problems into quantum problems, and it attempts to find solutions to that. So I imagine if quantum computing explodes and everything's great, that more people would start to do that type of work.

One thing to mention too is that not only is it going to be advantageous to recast AI problems into quantum AI problems, but classical AI also is helping us to understand what's fundamentally different and interesting about quantum physics... Because if we can sort of go backwards and take a quantum problem and turn it into an AI problem, and it's sort of solved, and we can do it today, then maybe that's not as interesting a problem to physicists anymore, right? And that does happen.

Actually, one interesting phenomena is that as quantum physicists come up with more interesting things about quantum computing and what could happen, classical computational scientists and data scientists are coming up with analogs or solutions, and getting a little bit better in order to keep up with quantum, in some ways... So I think there will always be a collaboration between the two, and we'll have classical and quantum computing sort of helping each other out as we go forward.

**Daniel Whitenack:** Yeah, it's interesting to come full circle on this... When I was in grad school I was working on computational physics, and Dr. Ghose, as you said, a lot of these brute force techniques will get you to maybe modeling a hundred or a few hundred atoms or molecules... And I remember at the time when I was in school, it was kind of the first time I had seen -- at the end of my grad school people started to apply machine learning techniques to figure out the energy functionals and things that we were trying to figure out just from scratch by writing good equations, and instantly out-performed everything that we were doing, and it was kind of a shock to all of us... But it illustrates, as you were saying, Marcus, the power that you can achieve in certain cases by reimagining a problem as an AI or as a machine learning problem.

I was browsing around, as you were talking, on the Xanadu website and a couple others, and I see certain phrases like "Machine learning toolbox for quantum computing powered by TensorFlow" and other things... Is that more on the side of, say, using TensorFlow, using AI to learn more about quantum computing? Or are those things more on the side of creating a quantum computing module for TensorFlow?

**Marcus Edwards:** \[00:35:58.05\] Yeah, one thing that's being done by Xanadu, and that I'm playing around too with in my research, is using tools that exist - and are inherently classical, of course - like TensorFlow, and TPUs and GPUs, and looking at all the different classical technology that exists, and seeing what can be done to emulate, simulate or predict the outcomes of quantum computations. So yes, what Xanadu is doing is actually using TensorFlow as a back-end. When you are using PennyLane or Strawberry Fields to express a quantum experiment and you choose to use the TensorFlow back-end, what it's doing is using TensorFlow to actually simulate that quantum process.

**Daniel Whitenack:** So it's kind of helping you learn about how the experiment might go. Is that a way to put it, or...?

**Marcus Edwards:** Sure, yeah. It's implementing the mathematics of the model. If you have TensorFlow as your back-end, then it's possible that you could actually express gate-level quantum computations and get them sort of compiled down to -- well, not compiled, but sort of interpreted and changed into TensorFlow code, which is Python, that's creating matrices, doing matrix multiplications, defining a tensor network, and then that can get sent off to Google, who then implements that on a TPU, and gives you results through the Google Cloud (I think they're calling it Anthos now, or whatever). So it's using it as a simulator back-end to help physicists learn and inform themselves, and also demonstrate theories. There is certainly power in the classical infrastructure that exists; what's really cool is how the machine learning infrastructure is getting used now to simulate many-body physics, and TensorFlow is just one example.

**Break:** \[00:38:04.18\]

**Chris Benson:** Earlier I know that you had mentioned the quantum emulation project that you are working on. Could you describe that a bit more?

**Marcus Edwards:** Sure. This is one of my research projects with Dr. Ghose, through the IQC. The quantum emulation project is sort of the umbrella for all of our research into quantum emulation. This is sort of the research that has led me to get involved with Xanadu, contributing to their library for Python... It also encapsulates my thinking about how can hardware potentially emulate quantum physics. So the project itself is multi-faceted.

**Chris Benson:** And as you explain that, could you also define what quantum emulation would be?

**Marcus Edwards:** Oh, sure. Yeah, interesting word choices - emulation versus simulation, right?

**Daniel Whitenack:** Yeah, I'm thinking of the Nintendo games I play on my Raspberry Pi.

**Marcus Edwards:** Yeah, okay... \[laughs\] It's not that, but related. When I say "emulation", what I'm referring to is a physical system that more closely behaves like a quantum physical system, rather than a software simulation. So it's a very nitpicky sort of difference between simulation and emulation, but when I'm talking about an emulator, it would be something implemented in hardware, that's designed from physics to behave more like quantum physics... Whereas if I was talking about a simulation, I would probably just be talking about something I wrote in Python.

**Daniel Whitenack:** Okay, and the pieces of hardware in this emulation - what are those? Are those pieces of classical hardware, that are kind of bolted together, along with certain software elements to do this emulation? What are those pieces? Are those like nodes on the cloud, or what are we talking about there?

**Marcus Edwards:** When I'm talking about a quantum emulator, there's actually a bunch of research around emulation of quantum computing. There have been papers about doing this with FPGAs, there's been a paper about how rough and hard it is to do this with analog computing elements, like \[unintelligible 00:42:20.08\] and such. But yeah, I'm sort of looking at the whole spread of options, taking a look at what can be done with FPGAs, what can be done with analog, how can this be orchestrated efficiently to work with the machine learning tools that exist, which are mostly accessible through the cloud...

One of the questions that I wanna answer with the research is what can be done to take this to the next level? We have stuff like what Xanadu is producing, which is awesome, expressive Python; they're also working on a specific type of back-end hardware, which is continuous variable quantum computing; we have IBM, and we have all these cloud tools as well... Can we bring them together, and what would be missing to make this a viable system? And is there something I can do to add that secret sauce, or whatever is missing?

**Chris Benson:** Dr. Ghose, what does success look like, from your perspective? Where should the project be heading and what kinds of things are you hoping to see come out of the project?

**Shohini Ghose:** You mean Marcus' project, or \[unintelligible 00:43:27.07\]

**Chris Benson:** I'm sorry, I was thinking that both of you were participating in that... I can turn to either one of you, whichever one would like to take a stab at it.

**Shohini Ghose:** Well, what Marcus is working on is part of a broader research program in my team, which is why I want to clarify whether you're talking about our research in general. So research success is basically exploring something that nobody has ever done before, and figuring out, whether or not you actually build something new that is useful or not, you learn something. That's the definition of research. So in that sense, this is a great area to be in, because nobody knows anything about anything. \[laughs\] So that's really how we approach it. It's almost like playing - here's this unexplored territory, kind of like a new planet in Star Trek... \[laughter\]

**Daniel Whitenack:** \[00:44:23.27\] There you go, you did make it...!

**Shohini Ghose:** \[laughs\] So we beamed out on this planet and we start exploring. And part of that is to say, well, given our current tools - we have some access to toy quantum computers as of now - and we have this huge, powerful, new toolset offered through AI and machine learning, and we have our current hardware, which are super-computers, and whatever is the latest processor today. Given what we have today, what's the best we can do, and what can we learn about what can and cannot be done?

For example, in Marcus' project, which if it comes down to it, is going to be limited by the fact that we don't have a real quantum computer, so we're gonna try to, as he said, emulate it, using what hardware we can build now, for example... And the reason to do that is not because we expect to somehow replace an actual quantum computer, but it is to explore what is the actual power of a full quantum computer; where is that transition happening, what is that special fuel that we will not be able to emulate? In this sense, success is almost not succeeding at a certain task, right? As in, "Here's where we would really need a quantum computer." So that's what we should focus on.

That's kind of how we approach this project, and research in general. I don't know if that is very clear, but... You know, research by definition is just a lot of going down blind alleys, and failing a lot, and then finding some unexpected discovery, and then taking it from there.

**Daniel Whitenack:** Yeah, I have maybe a practical question from my perspective as being previously in Academia, and also now viewing -- like you were saying, Dr. Ghose, the powerful tools that are available right now in TensorFlow and AI... And I'm just thinking back to when I was in grad school, I think a lot of that in some ways would be overwhelming for me to take in, in addition to quantum physics and all of the other things...

So I was wondering, Marcus, maybe from your perspective, or Dr. Ghose, from your perspective as a team in a research group in general, how have you found the process of looking at the problem set that's in front of you, deciding to use AI and TensorFlow and those sorts of things, and figuring out how to apply TensorFlow to your research problem? Do you have any tips for those out there that are maybe doing some sort of research, whether that's in R&D in industry, or in Academia, or elsewhere, and they see the power of what maybe they could achieve with AI, but it seems overwhelming for them... Do you have any tips as far as them getting into this and starting to apply these sorts of techniques in their research?

**Marcus Edwards:** Absolutely, yeah. I think one of the best things was just getting involved in the open source stuff that's out there, and the Slacks that are available... There's a great Slack that's hosted by Xanadu where people are discussing this stuff. I think it's awesome that these communities are starting to emerge, because there's really smart people thinking about really interesting things that you can have discussions with, whether it's in-person or not.

\[00:48:05.28\] The other thing is just to read a ton. Dr. Ghose will have more to say too, but my strategies have been get involved and ask questions of people who are experts, and read a lot. I read a lot of papers, and that's sort of what I do when I'm done working for the day.

**Shohini Ghose:** Just to build on that broadly, research seems to be not so well-defined when you start, and I think especially for students, that's hard to get into... But there's actually a method to all that we do; as Marcus alluded to it, we have to get up to speed. We have to do the background legwork, and try to understand where the field is currently. Pick a particular topic, and then try to read up on it to whatever level you're comfortable with. And as you read something and try to learn a field, you will automatically find that there are some pieces you don't understand; sometimes that's about you just being confused, so then you have to go and read up a little more on that... But sometimes it's because that just happens to be an open question in the field. That's how you can identify new questions that you can go and do research in.

That's a technique that -- just like everything else, you have to practice it and get used to it. Then it becomes more natural, to the point where you don't even know you're doing it... But every time you look at a new area, you sort of scan the field, you do almost a survey, and then you identify parts that have been unexplored. Then you try to think "Okay, this has not been explored. Let me go and find out who else is working on it; maybe I can work with them." If nobody else is working on it, then either it's really hard, or you've found something interesting to work and you should go ahead and try to find an approach to attack that problem, if that's something you're interested in. That's broadly the method.

**Daniel Whitenack:** \[00:49:59.23\] Yeah, I appreciate that. Over time, I've learned that the people that I feel like are able to adapt very quickly and really advance quickly are those that are willing to just ask a lot of questions and be willing to not be prideful and say "Oh, I feel like I should know this." But really, if you don't know, be willing to ask, be willing to research. I've learned over time that people's individual spheres of knowledge are much smaller than I originally envisioned; no one has all of the pieces of information to do a lot of these sorts of problems, so it involves a lot of being willing to discuss and ask questions... So I appreciate that perspective.

Maybe to bring us to a little bit of a close here, regarding quantum computing in general - and I know that Marcus you've mentioned quite a few things (and open source things) to start with... If people want to start and get exposed to quantum computing -- maybe they're software engineers, but they're really interested in quantum computing, maybe even contributing to open source projects... Where might be a good place for them to start to learn the basics of quantum computing, and then maybe start building something?

**Marcus Edwards:** Sure. There are a few places to go. There is something called The Quantum Open Source Foundation, and they have a collection of great projects. But in terms of getting involved from the ground up, I think the best place for software developers to start is with IBM, just because their focus is really on introducing quantum computing to the world, especially from a software perspective. They have really great tutorials, they have a fantastic Python library called Qiskit, which enables you to learn through tutorials and through expressive programming how quantum computing might work... And as I mentioned, they have lots of open source stuff, too. So I think that's a great starting point. Once you've sort of mastered what you're doing there, then you can branch off to more exotic flavors of quantum computing, like continuous variable, which is Xanadu's -- and they have fantastic documentation, by the way. I think the world opens up once you've learned it in one place, and IBM is really great at onboarding, I think.

**Daniel Whitenack:** Awesome. Well, thank you both for taking time out of your busy schedules and out of your attempts to explore this whole new world of computing... I really appreciate you taking time to chat with us. It's been a great conversation. We'll definitely put links in our show notes to all of those things that we've talked about, and I'm really excited for our listeners to explore those, and for me to explore them myself as well. Thank you so much for taking the time.

**Shohini Ghose:** Thank you.

**Marcus Edwards:** Awesome, thank you very much.

**Chris Benson:** Thank you.
