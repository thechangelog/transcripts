**Jerod Santo:** So Todd, we've got Moore's Law a little bit wrong in our episode with Eric Normand; that was episode \#267, about functional programming... We were talking about Moore's Law, and I might have even mentioned on the show how lots of people get Moore's Law wrong, and then I got it wrong... \[laughs\] So embarrass phase - it's happening. But you were gracious enough to hop into our Slack, which is a place that we hang out and talk about our shows, and programming topics and random things, blockchain mostly...

**Adam Stacoviak:** A lot of blockchain.

**Jerod Santo:** A lot of blockchain in there... And hop in our Slack community and straighten us out a bit about it and the particulars, and so we thought, well, if we need schooling, perhaps more people than just us need a little bit of schooling. So first of all, thanks for coming on the Changelog, and secondly, straighten us out on Moore's Law and what it actually is.

**Todd Gamblin:** I don't necessarily think that it was completely wrong on the show, but the gist of what you guys said was fine...

**Jerod Santo:** Yes...!

**Todd Gamblin:** ...that chips are -- there's no more free lunch, you don't get free performance out of your chips anymore like you used to when the clock speed was going up rapidly...

**Jerod Santo:** Right.

**Todd Gamblin:** But Moore's Law is not dead. It's fair to be confused, because there's been a lot of articles written about this. There was an article on MIT review that said "Moore's Law is dead. Now what?", but it predicted the death of Moore's Law I think out in the 2020's. The Intel CEO says Moore's Law is fine, the chips are gonna continue to improve. I think it's kind of hard to see what's really happening in the processor landscape.

What Moore's Law actually says is that the number of transistors that you can cram on a chip doubles every 18 to 24 months. That's the part that is still relatively true, although it's slowing down. The interesting thing, and the thing that people typically get confused with this is -- so there's something else called Dennard's scaling, that broke down around 2006. I think that's what has led to us having all these multi-core chips now, where you got a lot of performance out of your single-core chips before.

\[00:04:25.01\] What Dennard's scaling says is that as your transistors get smaller, the voltage and current stay proportionate to that, so effectively your power density is the same for a smaller transistor as it is for a larger one. What that means is that you can basically jack up the frequency or the voltage on the chip as you scale the number of transistors, so you get clock speed for free over time.

**Jerod Santo:** Just by increasing the power.

**Todd Gamblin:** Yeah, just by increasing the frequency as you scale it down. So the chips have effectively the same power for that area that you're putting all those transistors in, right? You wanna keep the power envelope relatively constant, because you're putting it in a device - these days like a phone or a desktop computer - and you don't want someone to have a really high power desktop machine that ramps up their power bill, right?

**Jerod Santo:** Right.

**Todd Gamblin:** So you've got a fixed power envelope, you're increasing the number of transistors, and it used to be that you could also increase the clock speed... But because of the breakdown of Dennard's scaling, you see that in 2006 (or around there) the chips are kind of kept out of it... Like 2.5 GHz now. They're all sort of hovering around there; they get up to 3 sometimes, and you can find like 4 GHz monsters in like some of the bigger IBM Z systems... But effectively, it's kind of capped out there. I don't know if you remember, I had 100 MHz computers back in the day, or even -- I think my Apple 2GS was like maybe kHz, I'm not even remembering.

**Jerod Santo:** I don't think I go back quite that far. You might go back a little farther than Adam and I in that regard.

**Adam Stacoviak:** I've always been in the MHz.

**Jerod Santo:** I know that I was in the MHz; I think it was like -- maybe my first was 750 MHz, or somewhere around there.

**Todd Gamblin:** Oh wow, so you guys are picking up late '90s.

**Jerod Santo:** That would have been like late '90s, yup. Exactly.

**Adam Stacoviak:** I do recall having a 4-gig drive, it was my first computer, and then the second one I had a 20-gig drive.

**Todd Gamblin:** Okay.

**Adam Stacoviak:** So I don't relate so much back to the chip, but mostly like how much space that I had to put stuff on...

**Jerod Santo:** Sure.

**Adam Stacoviak:** ...which sort of like relates to the chip era, because it kind of goes in a similar scale.

**Jerod Santo:** Yeah, they go hand in hand, yeah. So you have a little bit of seniority on us there, Todd, but nonetheless, we've definitely seen the topping out. I'm on a -- what is this, a 2016 MacBook Pro, and I've got a 3.1 GHz, so that's like... Yeah, 2.5-3 -- like you said, in the more server products you might have 4 GHz, but that's what definitely has stopped.

**Todd Gamblin:** Yeah, and the reason that that's broken down is that -- so Dennard's scaling ignores current leakage, so as people packed all these transistors on the chip, you get something of a thermal runway where you can't pack them that close without having a whole lot of power on the dye. So you basically are capped how much clock speed you can have.

But what they do - you can still get these multi-core chips now, right? The number of core on your chips has definitely been increasing, so that's what they're using the transistors for... Where they used to pack more transistors into things like out of order execution and other stuff on the dye; now you're just building out and replicating chips of effectively the same size on the same -- well, cores of effectively the same size on the chip. So that's what your multi-core CPU's are doing, they're becoming their own little massively parallel machines.

**Jerod Santo:** \[00:08:20.29\] So even back in that show, even then we were talking about the proliferation of cores at least at a consumer level hasn't gone crazy in terms of you're still talking about two-core, four-core, eight-core.

**Todd Gamblin:** Sure.

**Jerod Santo:** Probably from your purview inside of the supercomputer labs - you can tell us about what machinery looks like inside there, but... Is that something that has also hit a threshold, or it's just slowed to where it doesn't make sense, maybe like you said, inside the same thermal envelope to have 32 cores on a laptop, for instance?

**Todd Gamblin:** So I actually am not 100% clear on why they haven't jacked up the number of cores on a laptop... I mean, I would assume it's because people don't need that many cores that much, and also because most of the parallelism that you're gonna wanna do on a desktop machine is gonna be on the GPU; on the phones they have a lot of specialized hardware for things like video processing, and they call these AI units and things like that, which is interesting, and it has a lot to do with the eventual death of Moore's Law, too...

But yeah, on the supercomputers - I mean, we buy effectively the same chips, at least for some of the machines, as your desktop machine. So our commodity clusters, as we call them - they're Linux boxes with Intel and maybe AMD chips, and we're seeing a large increase in on-node parallelism. We might not have more cores per chip than what your desktop would have... We have a lot of sockets in the machines, and so the amount of on-node parallelism that's there is pretty high, and we try to use all that.

**Jerod Santo:** So where do you see this all going in terms of Moore's Law? You said that it was said that it would be dying in the 2020's... We're getting near that range...

**Adam Stacoviak:** So close.

**Jerod Santo:** Prognosticate out for us. What does it look like in the next five years?

**Todd Gamblin:** In the next five years I think you'll see the rate of transistors that are getting packed on the chips start to slow down; currently, the number of transistors on the chip is doubling (2x) every three years instead of every one and a half, so this is slowing. Once that goes away, you're gonna have to figure out how to increase your speed other ways. What that means in the hardware universe is I think you'll start to see a lot more specialized hardware. You're kind of already seeing that, right? Like we were talking about, on the mobiles you've got -- the iPhone X has this bionic processor, or whatever it is, you've got custom GPU's and things... I mean, a lot of the processing that happens on your phone is just off-loaded, and most of that is for power consumption, because you can do it a lot more efficiently in hardware.

I think you're gonna see the HPC side start to shift towards different architectures they can make use of the same number of transistors more effectively for their particular workload, so you'll see a lot more specialization, but you're not gonna -- basically, if the number of transistors that you can fit on a chip becomes constant, then the only way that you can get more speed is to make more effective use of them; you can't continue getting performance either in terms of more parallelism or in terms of higher clock speed...

**Jerod Santo:** Right... Because physics.

**Adam Stacoviak:** Maybe for those out there that are like catching up and maybe just trying to follow along, to some degree, if they're not schooled in transistors and chips, can you break down what a chip is and what the components of it are, and the thresholds we have kind of gone over the years and we're at today? Is that possible?

**Todd Gamblin:** \[00:12:12.09\] Sure. Yeah, we could talk about that some. At the lowest level, people talk about transistors. What a transistor is - it's a thing that if you apply current to it, it changes the conductivity of the material. What that means -- think of it as a wire, with another wire coming into it; if you put some current on that thing, then the first wire either conducts or it doesn't. All that means is that now you have a switch, so you can build out more complex logic from that switch. That's the fundamental thing that enables us to build computers. They can build that now by etching it on silicon. So they oxidize silicon - that's what all these fabs and big chip plants are doing - they etch lots of transistors onto silicon with chemical reactions, and there's different processes for doing that.

Those processes are what enable us to cram more transistors on the chip over time. It's improvements to them, and -- I mean, I'm not a process scientist, so I don't know a whole lot about that, but effectively Moore's Law originated when Gordon Moore in 1965 observed that that process had resulted in the effective doubling of transistors every 18 months or two years back in 1965. He was looking at the range from 1958 to 1965. So that's where that comes from.

**Adam Stacoviak:** So it was a general comment that turned into a law...

**Todd Gamblin:** It's an observation, I wouldn't say that it's a law... You can't go to jail for violating Moore's Law.

**Adam Stacoviak:** They call it Moore's Law...

**Todd Gamblin:** Yeah, that's right... We call a lot of things--

**Jerod Santo:** Don't cross Moore, you'll go to jail.

**Adam Stacoviak:** That's right.

**Jerod Santo:** We call them laws until they get broken, and then they're like "Well..."

**Todd Gamblin:** Event the way that it's usually stated, 18-24 months, is fairly vague, right? It's just an observation of the cadence with which they can double the number of transistors on a chip.

**Adam Stacoviak:** Right.

**Todd Gamblin:** And it held pretty true. Moore thought it would hold for I think 10 years, and it's actually held since 1965 pretty well, so it's somewhat remarkable in that sense. So you know, it's more than just an observation when it holds for many, many more years than you thought it would.

**Jerod Santo:** But it's somewhat been co-opted and transformed into meaning general compute power doubling, and that's kind of the way that we are using it... In fact, when I was looking it up a little bit here, an Intel executive in the '90s said that chip performance would double every 18 months, as opposed to transistor density, and that's the general context in which programmers and technologists talk about Moore's Law - so generally, it's computing power, and not this specific thing that Moore was talking about.

**Todd Gamblin:** Well, because the computing power is what enables you to do more and more with your computer. You can do many more computations, the thing gets faster, it's good. I mean, I think the main consequence of the breakdown there is that you don't get as much single-thread performance as you used to. That's kind of kept out. So if you're using Microsoft Word, you're typing, or something that has to execute sequentially, it's not going to go any faster. But if you can get parallelism out of your workload, then you can actually harness all the power that's on your chip.

The difference is that if you increase this clock frequency, that just means that everything on your chip is happening faster, so that's effectively free. If you had a program that ran on an older chip, it would run just the same on a newer chip, just faster, whereas with parallelism, if you wanna harness that performance, you actually have to rework your program.

**Jerod Santo:** Divvy it up.

**Todd Gamblin:** \[00:16:04.18\] Yeah, you have to divide it up into smaller chunks, or figure out a way to do it; it might involve changing your whole algorithm, and that's a lot harder. And not all workloads can do that, and not all consumer workloads can do that, so it's interesting to see how this will pan out on consumer chips... Although I think with all this machine learning stuff going on now -- it's not like there's a shortage of numerically-intensive things to do on your desktop machine or on your phone... Or games, they have always taken advantage of things.

We can talk about GPUs some. GPUs are an interesting design point. I think in the functional programming podcast you were mentioning earlier, you guys mentioned that "Oh, people told me I was gonna have thousands of cores. Where are my thousands of cores?" and the answer is "They're in your GPU", because that's a very different workload from what your desktop CPU is doing; it's data parallel. It's easy to divide up the work that you have to do for graphics rendering.

The GPUs are basically these large parallel (they call them) vector processors, because they do lots of the same type of instruction at once. In a GV100 Volta I think there's like 5,000 cores on that thing, if you count CUDA cores. People debate whether or not you should count a CUDA core as a real core, because it's definitely not the same thing as the CPU in your system... But it's 5,000-way parallel, that's true. You can do that many operations at once.

**Jerod Santo:** But a very specific use case, not general purpose.

**Adam Stacoviak:** Well, you brought in that new terminology though too, in this conversation. You've got chip, you've got -- so I'm still trying to paint the picture of what this thing is, but you've brought in a new term called core. You mentioned it earlier too, but you've got the chip made of silicon, and you've got transistors on that. Where do cores come into play? What are cores?

**Todd Gamblin:** Okay, so what people used to just a chip - because you only had one core - is a core. A core is basically a microprocessor, although even that term is kind of fuzzy these days, because you can say that a microprocessor has multiple cores. You're right, there's a lot of ambiguity. Okay, so let's go back to the transistors and build it up from there.

**Adam Stacoviak:** And then we can go to GPUs, because that's where I wanna go.

**Todd Gamblin:** Yeah, okay. I think that's the interesting direction. So you've got transistors on the chip; you can use those to do switching. That enables you to build what they call logic gates, and you can do things like "and", "or", "not"... Basically, you're taking two signals and you're producing a result. So one and one is one, one and zero is zero, and so on. That's basic logic. You can take that, and it turns out you can build anything with that. If you have a NAND gate, basically (NOT AND gate), then you can build whatever you want. So there's lots of ways to do that, but effectively they've built this whole chip out of that, and they're putting that logic on the dye, and that implements what people recognize as a modern CPU.

So if we're coming to this from a high-level language... I think most of the listeners here are familiar with JavaScript, or Ruby, Python, or even C - those either get interpreted or compiled into machine instructions, and effectively you're taking all these logic gates and you're building something that fetches instructions from memory, it fetches data from memory, the instructions tell the processor to do something with that data, and then they write it back to memory. That's pretty much how your chip works.

So if you have that pipeline where you can pull instructions from memory, you can do stuff to numbers and write it back to memory, then that's effectively what a modern core (I guess) looks like. That's a processor. You can run programs on that.

\[00:20:08.03\] It used to be that you had one core on the chip, and that was what you did; you had one thread of execution, you would fetch an instruction, you'd do what it said, you'd write the result back to memory and you would go on and fetch the next one, and do what it said. And there's just a whole lot of optimizations that have happened over the course of processor history that led to what we have today.

Spectre and Meltdown have been the news recently. The chips do things like speculative execution; they can say "Hey, I'm not gonna know whether I wanna execute this stream of instructions for a little while, but while I'm waiting to figure it out, can I go and try that?" Then, as we found out, you can get bugs from that... But it's also a huge performance increase.

There's things like regular out-of-order execution, where effectively your chip has logic on it that looks at the instructions coming in, it figures out the dependencies between them, and it figures out which one don't have any dependencies right now in terms of data that they need to read or results of other calculations in the instruction stream. It will pull those and it will execute those instructions concurrently, with other ones that don't have any dependencies. That's called an out-of-order processor; sometimes people call it a superscalar processor, because it can execute more than one instruction at once.

There's vectorization. Most chips have some types of instructions that will do multiple things at once. If you know that you have four numbers lined up in memory and you wanna multiply them all by two, you can pool them all at once and do those operations all at once if they're the same.

There's lots of these different sequential optimizations that people have done, and that's what goes into your one chip. So now that you have all of these extra transistors, because you can increase the clock speed on the one chip or on the one core, people are building out the number of cores that they have on a chip. So they have the same core, they're not trying to cram too much into that one core and increasing the power density to the point that it would cause problems, but they're just scaling that out with a number of transistors. Does that make sense?

**Adam Stacoviak:** Totally.

**Jerod Santo:** When you sit back and think about it, it's still mind-numbingly awesome what we can actually build out of those core primitives... Just where we've gotten from where it starts; you know, you take it for granted, you don't think about it much, but when you do, you sit back and think about it, all the ones and zeroes, and logic gates at the bottom of it all - what we actually can create out of that has been amazing.

**Adam Stacoviak:** That's true.

**Todd Gamblin:** Oh, there's tons of layers. If you think about it, that people started out just programming to the chip... If you got a new machine back in the founding days of this laboratory (1952), you would read the manual, the instructions -- the programmer manual had assembly code and it said "Here's the instructions you can execute on this chip. This is what it can do", and you have to actually think about memory, how you're managing it, what you're pulling into the core, how much memory you have... Things like that. And now, you don't even think about that. You can instantiate things dynamically, you don't have to think very much about memory in most of the modern languages, and it's a pretty nice ecosystem.

The reason that the multicore stuff doesn't change your perception of what's going on on the computer quite as much, or at least from a programming perspective - one reason is that there are a lot of multi-threaded programs, and even your operating system is... You know, even before you had multi-core chips, your operating system was executing multiple things at the same time; it was just doing it by time-sharing. So you know what a context switch is - it's when you're executing one program and then the OS says "Well, there's this other thing that's running at the same time; I'm gonna swap that in, execute it for a little bit, then I'm gonna preempt it and switch back to the other thing that you were doing."

\[00:24:16.01\] And effectively, that's how your OS did multitasking before you had multi-core chips, is by just switching back and forth between different tasks really rapidly. And now, on your chip you really can have things executing actually in parallel, so to some extent it's kind of a natural transition, because you can just execute different threads on different cores, and the operating system has to manage that... But you still have context-switching too, so you can still execute many more tasks on your chip than you had cores.

**Break:** \[00:24:52.28\]

**Jerod Santo:** Well, Moore's Law is not dead, but dying... Murphy's Law, however - eternally true.

**Todd Gamblin:** Still true, yes.

**Jerod Santo:** It will always be true. Adam, do you know that one?

**Adam Stacoviak:** Yes.

**Todd Gamblin:** Yeah, that's a real law.

**Jerod Santo:** Yes. Anything that can go wrong, will go wrong. Eternally true.

**Todd Gamblin:** If we wanna get back to Moore's Law dying aspect, I think GPUs are a good example of one way that you can take more effective advantage of some transistors and sort of combat that power law, or the Dennard's scaling problem. The GPUs, in terms of number of operations you can do on them, you get a lot more performance per watt if you can exploit them than you do out of a CPU. If you have a workload that's data-parallel, you compose it that way, then you can execute it more efficiently on a GPU than you can on the CPU... And you have like 5,000 cores on there; it's a big scale-up machine, it's doing vector stuff, it's very power efficient. That's one way to use the transistors more effectively for certain workloads than for the CPU. I think that's where you're going. You're gonna see other types of technologies take over that are better at certain tasks.

In our community, the other places that people are looking - so there's quantum computing, and people talk about that a lot.

**Jerod Santo:** \[00:27:59.20\] Oh, I wanna talk about that.

**Todd Gamblin:** Yeah... Okay.

**Jerod Santo:** Put that on the sidelines.

**Todd Gamblin:** I can't say too much about it, I'm not an expert, but there's a whole beyond Moore's Law thrust in DOE and I think in the broader CS research funding agencies.

**Adam Stacoviak:** What's the DOE?

**Todd Gamblin:** Department of Energy.

**Adam Stacoviak:** Okay. Just to be clear for those not in the US and hearing acronyms, to know what we're talking about.

**Todd Gamblin:** Yeah, we could do the origin story thing at the beginning...

**Adam Stacoviak:** In RFC I think there's some in that show to some degree about where you work and what you do. I'm pretty sure that's how Nadia opened it up.

**Todd Gamblin:** Yeah, that's true; so we could talk about the DOE later. DOE is where I work; I work at Lawrence Livermore National Laboratory, and we care about high-performance computing. So yeah, quantum computing is one way that you can use a different type of technology to do computation. So far people haven't really -- they've shown that it's useful for certain problems.

There's a D-Wave system... Los Alamos has a D-Wave system that they're looking at. It's a type of quantum computer that can do something called quantum annealing, which allows you to solve certain optimization problems very fast. But again, that's a different model of computation; it's not like a script, it's another type of thing. So if you have to do optimization problems, that's a good thing to use, and you can do it really fast.

There's something called cognitive computing, that we're looking at. At Livermore we have a partnership with IBM where we're looking at their TrueNorth architecture. They call it a cognitive computer - effectively what it is is it's a chip that you can basically put a neural network on and you can evaluate it very quickly, so it's good for machine learning workloads. If you need to do some machine learning evaluation along with your workload, where I'm distinguishing between training and evaluation, then you could potentially do it faster with a TrueNorth chip. Then to some extent there are limitations to how you can do that; you have to discretize the neural net a certain way, so that it fits on the chip, and you can only do certain types of neural nets... But you can pose a lot of neural net problems that way, so we think it could be useful for helping to accelerate some of the simulations that we're doing, or help to solve problems that are really hard for humans to optimize at runtime. So that's another model.

**Jerod Santo:** Are there private sector equivalents, Todd, to these things that you're speaking of, or are these the kinds of things that you only find in the public sector, in terms of the cognitive learning machines?

**Todd Gamblin:** I believe TrueNorth is available, and you could buy it if you were in the private sector. It's an IBM product. I'm not 100% clear on whether it's just a research prototype that we're dealing with, or whether you can actually buy these and play with them in industry.
I think some industry players have D-Wave machines, so they're playing with those... So you can get to play around with them. I definitely think that it's still in the research phases in terms of what you would actually do with it.

The TrueNorth chip is interesting because it's a little closer in terms of actually deploying those, because people do have machine learning workloads, right? And if they wanna accelerate them, they can use something like this to do that. What it doesn't accelerate is the training, so you would still have these giant batch jobs to go and analyze data sets to build the neural net that you use to either classify or to analyze the data once you're done training that thing.

But I think the theme across all these different areas is that it's more specialization that --

**Jerod Santo:** Special purpose.

**Todd Gamblin:** Yeah.

**Jerod Santo:** \[00:31:54.01\] Tell us real quick -- you mentioned you work at Lawrence Livermore National Lab, and you said "We care about high-performance computing." Maybe explain the specific use cases as much as is public knowledge (not top secret stuff that you guys do and you're applying these technologies to).

**Todd Gamblin:** Okay, so I work for the Department of Energy; I think the Department of Energy has been in the news as Trump has picked his cabinet lately... We deal with a couple of different things. I think the DOE is the biggest funder of science research in the US, alongside the NSF, and that involves funding universities, it involves funding the national laboratories, and we're also in charge of managing the US nuclear stockpile and making sure that it stays safe and reliable.

So across all of those different scientific domains, there's a whole lot of physics simulation that needs to get done, and effectively we are using simulation to look at things that you either can design and experiment for, or that it's too expensive to design and experiment for, or that it would just be unsafe to design and experiment for... Or that you shouldn't design and experiment for. And I guess on the NNSA side - Lawrence Livermore is part of the National Nuclear Security Administration, which is under the DOE - the unsafe thing that we're looking at is "How do nuclear weapons work?" That's a lot of the simulation workload that takes place here.

We also do other types of simulation, like climate science; we have a lot of people working on that. We look at fundamental material science... All of these big either computational fluid dynamics, or astrophysical simulations, geological simulations, earthquake simulations - all this physical phenomena, we have simulations at various degrees of resolution that we can look at to figure out what would happen if...

We have some guys who have done predictions about earthquakes in the Bay Area, what would the damage be. We look at "Will this weapon continue to work?" We also do things like detection... If you had something like this type of device and someone was trying to ship it in a container, how might you figure out that it was there without opening every container? There are lots of things like that that the DOE looks into, and high-performance computing drives all sorts of different aspects of that.

And I guess the other interesting facility here that's in the news frequently is the National Ignition Facility, which is a nuclear fusion experiment. We're trying to make a little star in a big building the size of three football fields, where we've got like 192 lasers that fire at this little target. So simulating how the lasers interact with the target, how they deposit energy there is one of the things that we can simulate on the machines here.

**Jerod Santo:** You're building a star inside of a big building...

**Todd Gamblin:** A little tiny star.

**Jerod Santo:** Oh, to me every star is big, I guess, so a tiny star relative to other stars, but a big building...

**Todd Gamblin:** Well, let me be clear... It's a star in the sense that we're trying to get fusion burn to happen.

**Adam Stacoviak:** I was gonna ask you, what exactly is a star...

**Jerod Santo:** I was just waiting for Adam to hop in, because this is like where he gets super excited -- his ears are perking up.

**Adam Stacoviak:** Well, I was still stuck back at the size of this TrueNorth, and I was thinking about the size of this thing... I was actually thinking about at what point does -- because these things are really, really small... At what point does a chip - or microchip, or however you wanna term this - get so small that it gets to the very, very small, which if you study physics and things like that, you know life like we see it, then you see the very, very big, which is planet sizes, and universe sizes, then you get the very, very small, which is like atom sizes... Like, how small do these things get? But then this star conversation is far more interesting to me... I like that.

**Todd Gamblin:** \[00:36:13.05\] So there's lots of physics that goes on in the Department of Energy, so I guess -- shameless plug (I can endorse the Department of Energy) it's a good place to work, because you get to find out about stuff like this.

**Jerod Santo:** Yeah, sounds interesting.

**Todd Gamblin:** Yeah. The interesting thing about the National Ignition Facility (NIF) is that you're simulating a star, it's very small... The target is a few millimeters in diameter, but you're trying to cause the same kind of fusion burn that would happen in the sun.

**Adam Stacoviak:** So it's all these lasers colliding, the light from these lasers colliding, that creates the fusion burn...

**Todd Gamblin:** Yeah, that's right. The lasers come in, they hit this cylindrical thing called a hohlraum, that's made of gold; that gets really hot, X-rays come out of it and implode the target in the middle. That's the idea.

**Jerod Santo:** Are you doing that a lot, or are you simulating on computers and then doing it very few times?

**Adam Stacoviak:** I can see how they can do it physically in this big building, but then on these chips that he's talking about, they can do it simulated.

**Todd Gamblin:** We're doing it physically. This is a good example of the type work we do. NIF is where we're trying to do it physically, we're trying to get fusion burn there, but to understand how this thing is working, we have to do simulation to prototype the designs, and I think we do about 400 real shots in a year over at NIF, where we actually turn the lasers on, point them at a target...

**Jerod Santo:** Well, that's not too many...

**Todd Gamblin:** Well, we're ramping that up. It's a scientific facility, so you can do research for lots of different groups. In conjunction with that, we do simulation to see if what we're simulating matches what really happened, and that's an iterative process. So you do more simulations, you say "Okay, it matches. How do I change the design to do better, to get more energy out?" and then you go simulate that; it says it's gonna do better, you try it, maybe it doesn't, and then you iterate on that until the two match. That's the process that we use for designing these things.

So that's where the HPC comes in. Simulating something like that takes an awful lot of compute cycles. I work in Livermore Computing, which is a compute center, kind of like a data center, but we have machines that are dedicated to doing computation instead of persistent services like a data center would have... And we have I think over two million cores just in this building for all of our computing needs, and we have some of the largest machines in the world here that people run these parallel applications on.

**Adam Stacoviak:** So many cores, huh? That's a lot of cores.

**Todd Gamblin:** Yeah, we have one machine with 1,5 million, which is number four I think in the world now... So that's Sequoia, and we're installing the new machine right now, it's called Sierra; it's a big IBM system with POWER9 processors and NVIDIA GPUs.

**Adam Stacoviak:** This is highly specialized equipment for highly specialized tasks...

**Todd Gamblin:** Yeah, that's true.

**Adam Stacoviak:** It seems so.

**Todd Gamblin:** I'd say that you buy a different kind of machine for HPC than you do for the cloud, but some aspects of running a data center and a compute center are very similar - managing power, temperature, stuff like that...

**Adam Stacoviak:** Security...

**Todd Gamblin:** Security - yeah, exactly, that's important. We've been rolling out Meltdown patches all across the facility.

**Jerod Santo:** I was just gonna ask that, yeah.

**Todd Gamblin:** Yeah... And we see performance hits from that, so we try to optimize that.

**Jerod Santo:** How big of a performance hit is it that you're seeing? There are some reports it would be up to 30%, but it doesn't sound like that's necessarily the case...

**Todd Gamblin:** \[00:39:58.09\] Yeah, I think that's in line, depending on the workload. It really depends on what application you're running, because it's that system call overhead that you're paying for. So we have an interest in high-performance computing because there's basically never an end to the computing capacity that we need to simulate the stuff that we're looking into. Most of the place where we get into architecture around here is in optimizing the performance of applications... So we have people who work with the application teams and they say "Okay, your simulation does this... How can I make that execute more efficiently on the hardware?"

Then we also look at procurement. So we have this workload, we know that we need to run these things, so what's the next machine that we're gonna buy? I was talking about Sequoia - Sequoia is the 16th realized 20 peak petaflop machine that we have on the floor right now. Our next machine is gonna be a 125 petaflop machine... So the whole procurement process - people get together and they look at the architectures from different vendors and they say "How is our workload gonna execute on this?"
I think in the future you're gonna have to think more and more about matching the applications to the architecture... And we had to think about that, because our next machine is a big GPU system.

Here's an example that probably gets to the heart of this Moore's Law stuff. Sequoia is the previous generation machine; it's about 100,000 nodes, each node has a multi-core chip on it, and they're all PowerPC chips, so our workloads could execute pretty effectively on that, and it was fairly easy to scale things out to a large number of processors.

The GPUs have kind of won in terms of that's the thing that hasn't a market out there for games and for other applications, so we have to ride along with the much bigger market for commodity computing... So our current machine is only 4,000 nodes, it's got POWER9 processors on it, it's got 4 GPUs per node. So in terms of number of nodes, it's a much smaller machine than Sequoia, but it's way faster. It's 125 petaflops versus 20, and so that's where the GPUs will win. But for us, that's a big shift because we haven't used GPUs as extensive before, so now we have to take our applications, import them so they can actually use the 4 GPUs per node, and that's a challenge.

**Jerod Santo:** Give us an idea of what range we're looking at here, in US dollars?

**Todd Gamblin:** For the big machines?

**Jerod Santo:** Yeah, the big machines. Are we talking like hundreds of thousands of dollars, millions of dollars, tens of millions? What's the order of magnitude?

**Todd Gamblin:** So for most of the big machines, if you're gonna get a number one on the top 500 list, which is like the place where they have the list of the top supercomputers, it has been probably like around 200 million dollars, at least in the DOE, for this system. That's procured over the course of like five years; we start five years out, we talk to vendors and we get them to pitch. They write a proposal that says "Here's how we could meet your specs." Then we have a big meeting where we go and we look at how they project this will work on our workloads, they do experiments with some of our applications, and we also look at the other specs on the machine and different parameters - how much memory is it gonna have, how much memory per node, how many nodes? Are we gonna have to use GPUs, are we gonna have to use Intel Xeon Phi chips, or other things? Then we pick the one that we think will best meet our needs going forward.

**Jerod Santo:** How would like to close that deal, Adam? 200 million...

**Adam Stacoviak:** That's a lot of money.

**Jerod Santo:** Be the salesman on the front-end of that thing...

**Adam Stacoviak:** That's a long sales process.

**Jerod Santo:** You've got the dinner after you make that sale...

**Adam Stacoviak:** Yeah... \[laughter\]

**Todd Gamblin:** \[00:44:13.11\] But if you want the details on our current machine, there's a nice article at The Next Platform by our CTO, who is in charge of that procurement process.

**Adam Stacoviak:** Awesome. Well, we'll make sure we link it up in the show notes.

**Jerod Santo:** Alright Todd, I have a suggested project for you for the NIF folks after you guys finish that star you're working on...

**Todd Gamblin:** I'm sure they'll listen to you. \[laughs\]

**Jerod Santo:** Yes... Sharks with laser beams on their heads.

**Todd Gamblin:** I feel like people have come up with that idea before.

**Jerod Santo:** Just for your consideration... Simulate that a few times.

**Todd Gamblin:** Are you sure no one else is working on it?

**Jerod Santo:** Well, I think you'd be bleeding edge.

**Todd Gamblin:** Alright... \[laughter\] With simulation we can make it better. We can more effecive sharks with laser beams. That sounds scary, though; I think we should think about the consequences in doing that.

**Break:** \[00:45:08.12\]

**Adam Stacoviak:** So I guess the question I have is like if you've got this 200-million-dollar computer, it's gotta be something that's pretty demanding, right? People are gonna wanna use this thing, because you're not gonna wanna not get the return on investment for that thing... So what's it like scheduling, managing a project -- how do you schedule time for it? Do you have to predict how long the project will take, the compute time...? Give us a day-to-day operation of using one of these computers.

**Todd Gamblin:** I can't speak necessarily to what the actual application guys would do, because I'm a performance guy, so I work with them to help speed things up. But the usage model is basically you have to write a proposal to get time on these things. For the bulk of our workload - and this is the case for other Department of Energy laboratories, too - you have to write something up that says "I have this scientific problem. It really needs a lot of CPU cycles, it's not possible without that, and here is what it would enable; this is why it's worth the time on the machines."

\[00:48:08.18\] Those go through here, and at Argonne, and at Oak Ridge, all these other labs... A competitive process where reviewers look at the proposals, they evaluate "Does it have merit?" and then once that's done, you get assigned hours according to what you asked for on the machine. So you get CPU hours. That's millions of CPU hours or more, depending on what the project is.

A CPU hour is measured in terms -- I think we may be doing node hours now; I'm not sure if it's CPU hours or node hours, but basically it's just a measure of how much compute power you're allowed to use. So that's how we justify it, and the machines stay busy all the time, because we have science projects that need them for their workloads. We have more work than the computers could ever possibly do, but they are doing it fast, so it enables new science.

I think in a given day at the lab there's a bunch of users... We have 3,000 users for the facility; some here, some are collaborators, some are at universities that we collaborate with. They're running jobs, applications -- it's like a big batch system; you log into it, you say "Here's the job I wanna run, here's how many CPUs it needs or how many nodes it needs, and here's how much time it needs to do that approximately." Then we have a scheduler that just goes and farms those jobs out of the system.

The people at the compute center - we look at what's going on, we try to manage the schedulers, that it has a good policy for all these different users, and we have performance teams who help the application teams actually optimize their code to run on the machine. And that's an iterative process, right? So for a machine like the new Sierra machine I was talking about, we'll typically have a smaller machine in advance of that that's similar; we have a POWER8 GPU system instead of a POWER9 GPU system that we've been testing on... And they'll get their code running on that in preparation for the new system.

In that process we'll run profilers on the code, we will look at traces to see if it's communicating effectively between all the nodes, and we'll help out the application teams by saying "You should modify this" or "We need to change this algorithm."
I think one of the things that we've been helping people with a lot lately - and especially with the GPUs and also with other centers using more exotic chips like Xeon Phi, which is like an Intel many-core chip (a 64-core Intel chip), we need the same code to execute well on all these different architectures, and that's not an easy process. If you have a numerically-intensive code, you write it one way. It might execute well on the CPU, but not on the GPU, and we'd ideally like to have one code that the application developers maintain, and have essentially some other layer handle the mapping of that down to the architecture.

One of the things we've developed is -- we call them performance portability frameworks; we have this thing called RAJA... It's a C++ library where you can write a loop -- instead of a for loop you write a for all, or you pass a lambda to it, and you pass that for all a template parameter that says "Hey, I want you to execute on the GPU" or "I want you to execute on the CPU." That allows them to tune effectively for different architectures; they can kind of swap out the parallelism model under there. So tuning that, getting the compilers to optimize it well for different machines - that's the kind of things the performance folks have been working on.

**Jerod Santo:** \[00:51:59.26\] So you answered the one question that I was thinking when you talked about scheduling, "Do these things ever sit idle?" Because that would be the worst use of a huge, massively powerful, expensive computer - idle time. I guess it's heartening to find out that there's so much work to do, that that's not a problem whatsoever; in fact, the problem is the opposite - you need to start procuring some more to continue more and more research.

**Todd Gamblin:** Yeah...

**Adam Stacoviak:** The other side too, it sounds like you do a dashboard, or something like that... Do you ever see the computer, do you actually get next to it, or do you just operate whatever you need to do through some sort of like portal, or something like that?

**Todd Gamblin:** We have people who get next to the machine and we give tours of the facility to folks who visit the lab sometimes.

**Adam Stacoviak:** But you don't have to put your USB stick into it to put your program on it and run it, right?

**Todd Gamblin:** No, no... Punch cards.

**Adam Stacoviak:** Okay.

**Todd Gamblin:** Basically, these things look like servers, like you'd be used to. You have a desktop machine, you SSH into the computer, and then there's a resource manager running on it. Slurm is the open source resource manager that we use; it's developed here, and now it's got a company, SchedMD around it. And the users would say, you know, "sbatch command line", and then they would take that command line, put in the queue, and then eventually run it on however many nodes they ask for. Or "srun" if they wanna do it interactively and wait for some nodes to be available. The wait times can get pretty big if the queues are deep.

**Adam Stacoviak:** So you get assigned hours, but you don't get assigned like 9 in the morning to 10 in the morning... You get just hours and you're in a queue; whenever your queue comes up, you execute.

**Todd Gamblin:** Right. You get a bank that comes with your project; we call it a bank - that's how many total CPU hours you have. If you submit a job, when you submit it you have to say "Here's how long I expect it to run for" and the scheduler will kill it after that much time. Then you submit the number of nodes you want and then it runs for that long; the length of time it runs, times the number of nodes that you use, times the number of CPUs per node is how much they subtract from your bank at the end of that. So if you get a few multi-million CPU hour allocation, you can run that out pretty quickly if you run giant jobs that run for a long time.

**Jerod Santo:** So Todd, I first met you at the Sustain event last spring (almost summertime, I suppose) at the GitHub headquarters; you were very involved in that, and in fact that's when you hopped into our Slack for the first time and helped bring some people from the lab to that event... So you have interest in and passion around sustaining open source, because that's why you were there and involved, and we appreciated your help... But tell us and the audience the intersection of where open source comes in with the work you're doing with the supercomputers in the lab work.

**Todd Gamblin:** Sure. It's at two places, and they're big places. For our computer center, the folks who run it, we prefer open source for nearly everything: for the resource manager, for the file systems... We have big parallel file systems like Lustre for even the compilers that we use; we're investing in Clang, or in LLVM, to create a new Flang to do Fortran for some of our code.

So I would say that the majority of what we do at the compute center is open source in terms of the infrastructure that we're using. Our machines run Linux, and we have a team downstairs that manages a distribution for HPC, we call it TOSS, which is a Tri-Lab Open Source Stack. That's basically Linux distribution with our custom packages on top of it, and that's how we manage our deployment for the machines. So that's one way...

\[00:56:10.10\] Then we have people working on -- the people who work on those projects... ZFS is used in Lustre; we have a guy who actually did the ZFS on Linux port and manages that community... I think we get a lot out of that; it's Brian Behlendorf at Livermore. Not the Brian Behlendorf who's doing blockchain stuff, but actually another Brian Behlendorf...

**Jerod Santo:** I was gonna ask that.

**Todd Gamblin:** The same name. Yeah, there's two Brian Behlendorfs in open source.

**Jerod Santo:** Same spelling, and everything?

**Todd Gamblin:** Everything, yeah. He said that they met once and talked to each other.

**Jerod Santo:** That is confusing. We just had the other Brian Behlendorf on the show, we interviewed him at OSCON last year about Hyperledger.

**Todd Gamblin:** Yes, I listened to that. So this is ZFS... So there's the ZFS Brian Behlendorf, and there's the Hyperledger Brian Behlendorf.

**Jerod Santo:** Okay.

**Todd Gamblin:** One of them is in the building with me... Yup. We were talking about how we procure these big machines, and there's a contract associated with that; in that we allocate some time for the vendor to contribute to open source software. We require that as part of the contract. So they work with us and they make sure that our software and other software that we care about (from the DOE and elsewhere) actually works on the machines. So that's another way we interface with the open source community.

**Adam Stacoviak:** On that note then, it sounds like you're pretty involved in the process or what's on these machines... Do you have good relationships with those who sysadmin these machines? Do you as a collective -- are you able to say "Well, we prefer this flavor of Linux..."? It seems like since you choose open source, you have some sort of feedback loop into preferences that everyone can put on this machine and do all these fun things you do.

**Todd Gamblin:** Yeah, so at this center there's a software development group, there's a system administration group - they're all in the building that I'm in, which is attached to the compute center. There's a lot of cross-talk between those different areas, and then we also talk to the researchers who run applications on the machines.

I would say that Livermore computing at least, on the infrastructure side, is definitely involved in choosing what open source we wanna run on the machines, and when we maybe don't wanna go open source. We run proprietary compilers because they're fast, for example... But we also do things like invest in the open source compilers to try to say "We want an open source alternative so that we have something that we can run on the machine that will work, and work well."

**Adam Stacoviak:** The reason I ask that is because it seems like the application process is very protected to manage the load on those machines at a time, so I just wondered if the involvement of what's on the machines and who manages them and all that stuff is just as protective. It seems like one side is a little more loose, but to get the time - it's a big ceremony, a big process, and it could be gate-kept, to some degree.

**Todd Gamblin:** Yeah, I mean, it's a research computing field, right? It's mostly researchers who need this much compute power, and so the calls for proposals are not unlike the calls for funding that people put out for Academia. There are open ones, so the Office of Science labs have the inside program where you can apply for time on Oak Ridge and Argonne's machines, which are similarly large, if not -- Oak Ridge has a larger machine than ours right now... And for us, our customers are slightly different, because we work with Los Alamos National Lab and Sandia National Lab, and so our proposal processes - at least on the classified side - are mostly between those labs, because they're about the weapons program, and stuff like that.

\[01:00:05.08\] But then there are other places where you can get time for basic science runs. So when we get a new machine like Sierra, we put it out there and we let early code teams, the guys who maybe have an important science application that isn't as complicated as maybe some of our production code, who can get on there early and show off the machine... There's a few months at the beginning where we let them use the time with allocations there.

So I guess I'd say there are a lot of different ways to get time on the machines. It's pretty low overhead. It's not quite like writing a full academic proposal. It's pretty open.

**Adam Stacoviak:** Yeah, and we're on this open source gig, I was just curious how that flavored in, because as you're describing your choices, and I guess the primary choice of choosing open source, and that's your preference, it seems like while there's a lot of process around the proposal flow, maybe there's a little bit more cross-talk as you mentioned at involvement with other teams that have access to these super expensive machines... That's a huge privilege, because I don't have access to a 200-million dollar machine; I can barely afford one that costs seven, and I've gotta borrow money from grandma, or something like that... \[laughs\]

**Jerod Santo:** Seven what? Seven million?

**Adam Stacoviak:** K. Thousand.

**Jerod Santo:** Oh... \[laughs\] You said "200 million" and then you said you could barely afford one that costs seven...

**Adam Stacoviak:** Well, I assumed everyone thought I was in the thousands...

**Jerod Santo:** I assumed the denominator was staying the same.

**Adam Stacoviak:** Grandma ain't got millions, man... \[laughter\] You can quote me on that.

**Todd Gamblin:** I had the same question. \[laughter\]

**Jerod Santo:** I guess what we're trying to say, Todd, is how can we get some time on this computer, possibly out of this ? \[laughter\]

**Adam Stacoviak:** Yeah. We've got some research...

**Todd Gamblin:** Yeah, so I guess if I had to boil it down to something, you have to have justification for getting on the machine. You have to be able to show that you can make scientific progress with your hours. That's what the process is about.

**Adam Stacoviak:** Sharks and lasers, man...

**Jerod Santo:** Sharks with clicking laser beams on their heads... I told you our justification already.

**Todd Gamblin:** Ill-tempered sea bass.

**Adam Stacoviak:** Oh, boy... \[laughter\]

**Jerod Santo:** I guess the other elephant in the room, Todd, for justifications - and you addressed this to us in the break, but please, for the audience sake, because I know that we probably have a fair amount of Bitcoin miners listening... So I think that is the other thing that has people putting their pinky up to their mouth...

**Todd Gamblin:** Yeah, CPU time...

**Jerod Santo:** Yeah, what about Bitcoin mining on these rigs?

**Todd Gamblin:** We're not allowed to mine Bitcoin on these machines; it's not legal to use government machines to mine for Bitcoins, but even if you did, it wouldn't be worth it. If you look at what people are using for Bitcoin mining, a lot of that is custom chips; they're very low power and only do hashing... So you'll do way better investing in that than you will in one of our machines. I think at some other compute centers people have been fired for trying to mine Bitcoin on the machines.

**Jerod Santo:** Really?

**Todd Gamblin:** Yeah... You can google for news stories about that. But I wanna be a little clear on the openness front. The application for time is separate from the software that you actually run on the machine, right? We have a lot of open source projects that live for much longer than any allocation or any machine, really... And there are a lot of people who work on those, and those are open. Some of them you can even run on your laptop, and scientists do, so a lot of development for these machines does happen on people's laptops, and then they scale the program up to run on the big machine.

So there's a lot of open source software development that happens, even if the process for getting access to a big machine isn't open... And you can run that open source software on the machine that you do have, for 7k... Or less.

**Jerod Santo:** \[01:03:54.18\] For a measly 7k. \[laughs\]

**Todd Gamblin:** Yes.

**Jerod Santo:** Your grandma could run that, Adam.

**Adam Stacoviak:** That's right. Grandmas can run that.

**Jerod Santo:** So what about the open source community? It seems like anytime when I think of a government operation, you think especially with the security constraints and a lot of the "red tape", it seems like actually a deep involvement with a community that's built on openness and freedom and all these things that are kind of opposite of secrecy and closed - is there any give or take there? Is there red tape, are there issues around that, or has it all been pretty easy in terms of integrating your open source work into the greater open source community?

**Todd Gamblin:** I'd say that historically Livermore is pretty good about open source. I mean, we started using Linux clusters in the late '90s, and we've been working on the operating system for that, we've developed Slurm - the resource manager has been open source for a long time... So putting stuff out there has not been such a problem.

There is a release process that you have to go through that's kind of cumbersome, but once you do it - like we did for Spack, the package manager I work on - you can work out in the open on that, as long as you stay within a certain project scope. So yeah, I mean, there is some red tape around that; obviously, we don't wanna release some of the things that we develop, but then again, we use a lot of open source internally and benefit from the broader open source community... So I would say that the DOE has a pretty active open source development ecosystem, and we leverage things that are developed by other labs, and other labs leverage things that are developed by us, and I think there's a lot of back and forth.

I would say that the interaction model on the projects is maybe not quite the same as like a large infrastructure project, like Kubernetes or Docker or something like that, just because -- I mean, it's scientific computing, so people get funded to solve a particular problem, not to develop software. So there are sustainability issues around how much software development time can we actually put on this project.

On the production side though, the facilities - their job is to keep the center running and to do it efficiently, and I think that's why you see a lot of open source coming out of there. But then again, there are long-lived research projects that are very widely used. One good example of that is in the Math Library community, so for large-scale parallel solvers. The different labs have teams working on that stuff and there are some solver libraries; Livermore has Hyper, Sandia has Trilinos and Berkeley Lab has some solvers... And also things like finite element frameworks, things for meshing and for building these big models of physical systems... Livermore has a library called MFEM that has a big open source community around it -- well, not big by JavaScript standards, but big by scientific computing standards.

So some of them operate like communities, I would say, and then others tend to stay within a particular group, or they maybe don't have a cross-lab community... It just depends on the software and what the funding and the interaction model has been historically. I do think more community could help a lot of projects, if people started thinking more in terms of like "How do I sustain this over time? How do I get more contributors?" I don't necessarily think that we build research software with growing contributors in mind.

**Adam Stacoviak:** I think it's interesting that you've got the three I took note of earlier - the one you obviously talked about on Request For Commits, Spack, that's the project you work on primarily...

**Todd Gamblin:** Yes...

**Adam Stacoviak:** Then you've got Slurm, which I think is a workload manager, if I got you correctly; that's actually what you interface with to put your projects onto a supercomputer, is that right?

**Todd Gamblin:** Yeah, it runs the jobs, it does the scheduling.

**Adam Stacoviak:** \[01:07:55.04\] Then you've got Lustre, which I was just noticing down on the trademark is a Seagate technology trademark; so that means that that's the file system... These things are important enough for you to have open source projects alongside them that I guess are more specific to, say, a super-computer scenario, versus, say, a laptop scenario.

**Todd Gamblin:** Yeah, for sure. I mean, we have to pay for open source development for like a parallel file system that will run fast on our machine; we have to keep the computers working, so yeah, a lot of the infrastructure projects are aimed at that.

**Adam Stacoviak:** It seems like some of this stuff should come with a 200-million-dollar computer... \[laughter\] I mean, I'm just thinking like...

**Todd Gamblin:** Well it does, to some extent...

**Jerod Santo:** Did you get a T-shirt, or anything? \[laughter\]

**Adam Stacoviak:** "Bring your own file system, okay?"

**Todd Gamblin:** Haven't ever got a T-shirt but you do get a mural painted on the side of the machine. If you look at like the Norsk machines they have a picture of a grasshopper painted on the side of their machine.

**Jerod Santo:** That's cool.

**Todd Gamblin:** So there is a lot of software that comes from the vendor. Cray provides a whole programming environment with their system; it's not necessarily open in the same sense. If you buy an IBM system, they will bundle their file system, which is GPFS; it's a competitor for Lustre, it's proprietary. And you know, which one you go with depends on what value do you get out of the procurement, which one do you think is gonna perform better. I'd say performance drives a lot of the decisions at the procurement level, but openness is also a big factor.

**Adam Stacoviak:** Does it come with hard drives?

**Todd Gamblin:** Yeah, so the system would come with -- I mean, a parallel file system, right? So it's not just hard drives, it's like racks and racks and racks of hard drives...

**Adam Stacoviak:** Right... I was gonna make a joke to say like, when you get it, do you just wet the drives and put your own stuff on it, like you'd do in the old -- do you do at scale, essentially? When I get a machine, even a Mac, I sometimes will just wipe it and put my brand new version of OS 10 on there - or MacOS now - because I just like it; I just do that, you know? My own way...

**Todd Gamblin:** Yeah, we do that effectively with our Linux clusters. We build our own distribution, like I was saying, so we have a TOSS image that we run across those. For the bigger machines, for what we call our advanced technology machines that are in these large procurement packages - it's much more vendor-driven because it's bleeding edge, so we rely more on the vendor to provide the software stack... Although -- I mean, the next machine is gonna be Linux, so the machines, for the OS at least, run Linux.

**Adam Stacoviak:** Which flavor of Linux?

**Todd Gamblin:** Across the center here we run RHEL; that's the distro that typically is -- it's a debase of our TOSS distribution, and then some machines run SUSE, but not at Livermore. The Cray machines I think use SUSE as their base distro.

\[01:11:00.11\] They also build their own kind of custom lightweight versions of Linux for the actual compute nodes. They wanna reduce system noise, so they don't want a lot of context switching going on that would slow down the application.

**Adam Stacoviak:** That's RHEL, right?

**Todd Gamblin:** Red Hat Enterprise Linux, yeah.

**Adam Stacoviak:** Gotcha. Cool. This is pretty interesting, to kind of peel back the layers of a supercomputing research laboratory like this, see how open source fits in, see what 200 million dollars buy, how you procure time, how you propose time, how you interface with other teams that manage open source software, how you determine preferences... This is an interesting conversation that's not exactly the typical episode of the Changelog, so hopefully, listeners, you really enjoyed this. And if you did, there's a way you can tell us... You can either hop in GitHub (github.com/changelog/ping) or join the community, go to changelog.com/community. Go there, which is what Todd did one day, and he was like "Hey, y'all are doing this conference called Sustain; I'm gonna go and I wanna bring some friends... Wow, this is an awesome community", so... Todd, to close this out, what can you say about hanging out in Slack?

**Todd Gamblin:** Hanging out in Slack...

**Adam Stacoviak:** With us.

**Jerod Santo:** Slacking with us.

**Todd Gamblin:** I do that because it's nice to be in touch with (I guess) a different open source community. I think the Changelog is kind of heavy on web development. I used to be a web developer before I came to DOE, so I like to keep up with that stuff and see what's going on out in the cloud, as well as over here in the DOE... So it's been a nice time.

**Adam Stacoviak:** Well Todd, thank you for coming on the show today, man... We're huge fans of yours, and thanks so much for schooling us on Moore's Law; I appreciate it.

**Todd Gamblin:** Cool.
