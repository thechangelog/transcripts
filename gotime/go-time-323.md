**Natalie Pistunovich:** Hello everyone, and welcome to another episode of Go Time. My name is Natalie, and I'm here with Jesús Espino, joining us from Mattermost. You're here to talk about the a-ha moments you got from reading the source code. Have you been doing Go for long?

**Jesús Espino:** Yeah, I've been doing Go for around seven years already. So yeah, quite long. Not a lot, but...

**Natalie Pistunovich:** How did you start? Why?

**Jesús Espino:** Well, I you started because I started getting interested in the language itself. I had a friend that - she was learning Go, and she was very excited about the language, and she said the cool things that you can find in Go... And I started getting interested, I started practicing, and actually I started contributing to open source projects. One of them was Mattermost. And like six months later, I started working for Mattermost, actually. So it was very, very good timing.

**Natalie Pistunovich:** Nice. What language were you switching from?

**Jesús Espino:** I come from Python&gt; I was using Python for around 10 years before that.

**Natalie Pistunovich:** Do you still use Python, or completely all Go?

**Jesús Espino:** Time to time I use it. It's a nice language also. I like Go more, but Python is a great language, and for very specific use cases I still use Python.

**Natalie Pistunovich:** Like writing AI models.

**Jesús Espino:** Yeah, playing with AI is one of them. Probably some small scripting things, or maybe even some small REST API, very small REST API with Bottle, or Flask, and things like that. So very small things, nothing big... But yeah, I still use it.

**Natalie Pistunovich:** Nice. Let's start talking about the 10 a-ha moments that you got from my reading the Go source code. How did that even come to be?

**Jesús Espino:** Yeah. Well, I really like to know deeply my tools, the things I use, the things that I work with every day, and things like that. In the past, in my Python background, I like to give talks and things like that, and get into the details. And back then, I investigated around how the Python objects work under the hood and things like that, how the different Python objects that were built in in the language we working, and all that kind of stuff. I prepared a talk, I did a talk actually in some conference about that. But then, when I switched to Go, I started fresh, I didn't know anything at that level; I started learning the language and started getting confidence with it. And there was a point in 2020-2021, or something like that, that I felt confident enough to start investigating for preparing a talk. And one of the things that I investigated was exactly the same - how certain built-in objects work in Go. And those objects were the slices, maps and channels. Because they're like the bread and butter of Go. So I started investigating --

**Natalie Pistunovich:** Probably half the pop quizzes I'm seeing are usually around slices, arrays and such. Yeah, that's a fun one.

**Jesús Espino:** Yeah, tricky, and understanding how they work under the hood is interesting. And that was my first attempt to start reading the Go source code here and there. It was relatively targeted, so it was kind of simpler at that time.

\[08:14\] I prepared a talk, I gave that talk in the FOSDEM for the first time... So what's really great - it gave me a lot of insights about how channels actually work, and how slices and maps work, and even some small sneak peek on how goroutines works. So it was an interesting experiment. And that is how I started.

Then I just kept going. I use conferences and public speaking as an excuse to learn things that I want to learn. So I prepare a talk, and then I have to learn something to the degree that I can give a talk and I can answer the questions; that sometimes is really hard. So yeah, it's how I get into that. So the ten a-ha moments come from the exploration that keeps going, preparing other talks, that if you want we can keep talking about it.

**Natalie Pistunovich:** Yes \[unintelligible 00:09:12.21\] Do you wanna start with the first, biggest a-ha moment? How would you go about that? The biggest, the most impressive ones, or the most -- chronologically the order of that?

**Jesús Espino:** Yeah, I think I like the chronological approach, because it's kind of easier for understanding in my head, and it probably explains sometimes why it's an a-ha moment. The first one for me is exactly about the slices, maps and channels, and specifically about the slices. That was how slices are implemented under the hood, because when I started writing Go, I was said that you have slices, and the slices are immutable, and then you just append things to the slices, and then you get an appended version of the slice. The thing is, that sounds really, really inefficient. It looks like it has to be inefficient. How in the hell are you doing it to make it that efficient? Then you realize -- when you start investigating the code, you start realizing how they are doing it, and it's really smart. Slices just are sort of pointers and counters; the real data is stored under the hood, in an array. And that array is changing in size, and it's automatically managed for you... And the growing of the underneath array is not something like "I'm going to add one, add one, add one." It's normally doubling the size of the previous array to store more data. And then because of that, you understand why you should be pre-allocating the array size. All that kind of stuff was one of my first a-ha moments, was like "Oh, so that's the reason why it's efficient." It's really a smart approach, actually.

Then you have some pitfalls that because you know how it's implemented under the hood, but there are some pitfalls around that approach, that is using multiple slices that points to the same array, and one of them get \[unintelligible 00:11:23.25\] connected before, because we're accessing the same underneath array, but suddenly they are not connected anymore... So it's kind of a weird behavior that is unexpected, I guess, if you don't understand the implementation details. But yeah, that was my first one; my first a-ha moment was like "Oh, then that is how they make these efficient, and make these work smoothly."

**Natalie Pistunovich:** Were you comparing it to what you know from other languages, or was it more like "This is the first time for arrays I'm focusing on how's it done under the hood"?

**Jesús Espino:** \[12:03\] Yeah, I think from Python it was very similar. It's not the same, because in Python -- I'm not 100% sure. In Python they are not appending things. You are saying, "Hey, I have a list of elements, and I'm adding things to that list." So semantically, you are understanding that you are adding things to the list under the hood. If I recall correctly, it's pretty similar, the behavior. There's an array of memory that keeps doubling, and you have these pointers and these counters that give you the \[unintelligible 00:12:37.05\] and the capacity. All that is almost exactly the same, if I recall correctly. I don't have the Python implementation very fresh.

**Natalie Pistunovich:** Yeah, of course. We're not talking about the focus of Python source code. I'm just curious if you generally were focusing on the same topic for other languages, or was Go kind of where you started really diving into this.

**Jesús Espino:** No, I started in Python before, and then I started with Go, because I was using Go every day. So the whole point was "It's a tool that I use every day. I want to understand it better." That's the reason why I did that in Python before. I want to do that with all the tools that I use. I did that with Git in the past, I want to do that with Postgres in the future... But yeah, it's something that I want to do. I don't know if I'm going to do it. It's a matter of time, and sometimes it's hard to find the time for that... But yeah.

**Natalie Pistunovich:** Yeah, it's like an Advent of Diving into Code can be a fun project. Instead of solving challenges in Advent of Code, actually reading somebody else's code and learning those things.

**Jesús Espino:** Yeah.

**Natalie Pistunovich:** New Year's list, yeah.

**Jesús Espino:** Yeah. It's challenging. I have to say that Go helps a lot there. Go is a great language to read, because it feels like home everywhere. Of course, the algorithms and the complexity of the different projects - it's different, and reading compiler source code is a tough thing, because it's a compiler. The complexity of a compiler is already big enough to be challenging. But at the same time, you see the same kind of styling everywhere. The code is kind of familiar. "Okay, if error, whatever, then nil, whatever." All those things are kind of the same, so it feels less weird than other languages where every project has its own styling.

**Natalie Pistunovich:** Yeah, yeah. It very much goes to our human need for pattern recognition, for sure. Yeah, I agree. Okay, so you say that arrays implementation was making sense, and was a little bit familiar, also speaking to your pattern recognition as well...

**Jesús Espino:** Yeah. I was interested that at the end of the day most of the implementations -- so for example, slices and maps is not like a super-weird implementation. You can find very similar implementations in other languages. It's just a relatively standard implementation of certain things. There's details on for example maps that can be different than other languages... For example in Go maps keys are unsorted, and are unsorted on purpose; actually, they are unsorted on purpose up to the level that every single map have a random set for the keys. So two different maps with the same keys and the same values are going to be ordered differently.

\[15:52\] So it's on purpose, it's by design. But at the end of the day, most of the languages have their own implementation of these kinds of things, and most of them are kind of similar, around HashMaps, and slices and all that stuff.

**Natalie Pistunovich:** Okay. How about the second a-ha moment?

**Jesús Espino:** Okay, next step - one of the things that I was intrigued about Go, because it's one of the key things, is goroutines. It's something that everybody wants in Go, everybody loves in Go... And I did want to understand better what a goroutine is, and how it works... And I started digging into the source code and I started investigating how the goroutines work under the hood, from the perspective of the goroutine, of the lifecycle of the goroutine. And actually, for that I prepared another talk that is called "The secret life of a goroutine." And that in that talk, what I try to do is follow the process of when a goroutine is created, how it's created, and what are the steps that the goroutine goes through, and how it changes from one state to another, and how the reasoning around that changes.

And one of the things that I discovered while I was doing that was it's something that I already have kind of the intuition around that, or the understanding about that, that is goroutines are cooperative. But whenever I started seeing the code, it was more obvious and evident that it's a cooperative approach.

In threads, in operating system threads, you have the operating system deciding when to cut something and assign another thread to the processor. In Go, the goroutine itself is responsible of saying "Hey, I'm going to stop myself, call the scheduler to select another task, or another goroutine, and the goroutine is going to start running." Not only that, I just stop myself because I'm waiting for something, and the one that is going to wake me up is another goroutine. For example, whenever you send something to a channel, and it's another goroutine waiting, the goroutine that is sending to that channel is going to wake up the other goroutine. So they are collaborating together to do all the processing.

There's some special goroutines like the system monitor goroutine, that is doing certain things, or the net pool that also - it's kind of monitoring certain things for getting back that goroutines whenever they finished... But in general, the goroutines are waking up each other or are sleeping by themselves and calling the scheduler to select another goroutine. So that cooperative nature of the goroutines is something that I've found very interesting, and it was an a-ha moment for me also. Yeah.

**Natalie Pistunovich:** So you said the previous one, the arrays one made a lot of sense. Does this one make a lot of sense? Would you have done it somehow differently?

**Jesús Espino:** I think it's kind of a natural way of doing that whenever you are doing coroutines. It's not exactly the same coroutine that Go has, but it's this kind of cooperative approach where you have one single thread, and you have to decide when to change to one or another. And it's just easier if you let the goroutines collaborate than if you have to put another process on top of that, orchestrating all of those goroutines. Because actually, the scheduler, the Go scheduler is not another process, is not another goroutine; it's nothing like that. The Go scheduler is a chunk of code. The goroutine that is going to sleep, or the goroutine that finishes work and is going to go to \[unintelligible 00:19:44.27\] it's going to call the scheduler code, and it's going to transfer somehow the execution to the scheduler, the scheduler executes and selects another goroutine and transfers to that goroutine the execution. So it's just a chunk of code that transitions from one goroutine to another. It's pretty cool, actually; it's super-interesting code. I don't know if I answered your question, actually...

**Natalie Pistunovich:** \[20:15\] Yeah, yeah. Another philosophical question a little bit, as a background for the question. Have you watched Rick and Morty? Do you know the concept of Mr. Meeseeks?

**Jesús Espino:** Oh, no, I don't. Sorry.

**Natalie Pistunovich:** So there there is a concept of a little blue creature that is called Mr. Meeseeks, and I've found it super-helpful to understand this concept, also of like spinning up a task that has to do exactly one thing, and then it dies. I think probably there's some developers in the creators of the show, because I've found lots of similarity. And then when AI came, and the concept of agents, autonomous agents in the world of AI, not the world of software, it's also a little bit similar in the sense that the AI agent gets a task, and then it spins off some tasks, and then it finishes the task and kind of bubbles up to report.

So I kind of see similarity between the three of them, and I hope that in those two and a half sentences I explained enough of this logic to you... But this will be my guiding question kind of throughout our conversation on the a-ha moments, because I like finding lots of equivalence between our current day software and what I tried to imagine AI-based software will be. So this is kind of -- I don't know, you're not familiar with Rick and Morty, I get that. That's probably better. \[laughter\] Have you played at all with AI agents? Do you have enough experience to say an opinion about this, or not yet?

**Jesús Espino:** Not yet, actually. I don't know what you mean with an AI agent.

**Natalie Pistunovich:** Autonomous agent is a better name.

**Jesús Espino:** Yeah, I guess it's something like you ask to realize a task, and it's going to use external resources or external actions to fulfill the task... Something like that, I guess.

**Natalie Pistunovich:** Basically, the AI goes and decides what is the sub-task -- you give it a goal, and it breaks it down into sub-tasks, and then it spins off mini AI's to execute those tasks, let's say... Which is very similar to that concept.

**Jesús Espino:** Yeah... Could be. It's hard for me, because I like AI, I have used it, but I'm not very deep into that. But yeah, I think there are similarities. At the end of the day what goroutines are is just processes that are \[unintelligible 00:22:38.18\] up to a certain degree. They have a task, they have to realize that task, and they are kind of independent from the rest of the goroutines.

There is actually something that for some people is weird - goroutines doesn't a parent, if I recall correctly. So a goroutine is a goroutine. There's no relationship with three goroutines. You can execute thousands of goroutines and they are not related to each other, not even with the parent, or the one that's \[unintelligible 00:23:06.16\] So I don't know, I think I'm a bit lost with your questions, too.

**Natalie Pistunovich:** Yeah, yeah. Well, just to -- it's even more like an opinion than a question... But just to confuse a bit more, and then we'll move on to number three... \[laughs\] Another similarity that I see there is also to the concept of threads in processors. I don't know how much you got a chance to dive into operating system breaking down things into telling the different processors how they run around their tasks and so on, but there's also like -- now you have a threat, and so on, and so I see some similarity in those concepts... And I personally find it really cool that it kind of goes between the different fields that have something to do with each other, but not fully. Just an observation, it's not a question. If you have experience there, I'm happy to hear your thoughts. If not, tell us about number three.

**Jesús Espino:** In threads, and the difference between threads and goroutines, or something like that, or...?

**Natalie Pistunovich:** Yeah. Do you want to chat about that?

**Jesús Espino:** \[24:08\] Yeah, well, it's interesting how it's solving in the Go runtime. Basically, they abstract you from the operating system threads and call them CPUs, actually. Processors, actually. And then that processor gets assigned to different goroutines. But the goroutines and the processors are not highly coupled, so they can't -- they normally have a certain tendency to execute in the same processor, on the same operating system thread, but it's not mandatory at all for the goroutines. So the goroutines can execute in different operating system threads, so... It's a very smart approach that they coupled the CPU and the goroutines, or the operating system threads and the goroutines, and it allows you to execute at full capacity of your processors using that architecture. Because if a CPU is overloaded, you can take the goroutines from another CPU and start executing in the one that is more free, things like that. So it's very cool how Go abstracts you from CPUs, operating system threads, and the goroutine itself. It's pretty cool.

**Natalie Pistunovich:** Yup. And efficient. So what is your number three a-ha moment?

**Jesús Espino:** Okay, number three. Oh, well, this was kind of a silly one... I was investigating around -- I was investigating the compiler. And one of the things that I started investigating was the process for tokenizing and parsing. And whenever I started reading the parser, I just realized that -- it was obvious anyway, but I realized that whatever is in the parser, in the AST tree, is what you can have in a Go file. There's nothing else.

So if you start seeing how the AST tree, the abstract syntax tree for Go is generated, you are going to see that it's one abstract syntax tree per file, and it's going to have an import, a set of declarations, and a set of imports. And a declaration can be a constant, a variable, a function, and a type. And that's it. There is nothing else that can be in a file.

So it was kind of a sensation of complete understanding of something, and saying "Okay, now I know where is the boundaries, so everything is inside these boundaries. There is nothing else that can go in a file, so there's nothing that I am missing." Constants, variables, functions and types. And the import, and the package name. That's everything.

And it probably is kind of silly, but for me it was like an a-ha moment. So it was like "Oh, that's it." Of course, then you have the body of the functions and all that stuff, and there's a lot of stuff that goes there... But yeah, inside the file you only have those things.

**Natalie Pistunovich:** This makes me think of how in C there is -- I think it's in C, that you have the header file, and you have the code file. It's kind of similar with scope, our little universe, but this is scoping it for that file, but it's kind of like knowing that this is everything that's included there.

**Jesús Espino:** Yeah, it's kind of like that, exactly. You have a clear definition of what can go there. It's not exactly the same, because in the h file you are saying "Hey, these are the functions that I declare." This is a public interface. But at the same time it's okay, yeah, if I understand the h file, in theory I should be able to use it, and I should be able to understand all the boundaries. So yeah.

**Natalie Pistunovich:** \[28:03\] And you say that what you liked more than that, this is like defining, scoping it for this file, it's kind of like scoping it for Go in general, that this is your entire toolbox, and there will be no surprises. It's not keywords, but a toolbox, really.

**Jesús Espino:** Yeah, there's nothing else. If you say "Oh, could I execute a chunk of code inside the main file, but outside the function?" No, you can't. That's it. It's a variable declaration? Then you can. It's a constant? Then you can. But if it's not a type definition or a function, you can't. There's no representation for that. You can't represent that in days the AST. There are the pragmas, \[unintelligible 00:28:50.19\] but they are comments that are handled in a smart way. But at the end of the day, the AST is just that. There's nothing else that you can represent with that.

**Natalie Pistunovich:** It sounds like it has not been a talk yet, this a-ha moment.

**Jesús Espino:** Not really. The a-ha moment comes from another talk that I was preparing, actually... At the time I was preparing the "Understanding the Go compiler." Actually, it was called "Hello World, from the code to the screen." I prepared that talk. I did that talk in the GopherCon US. But then I made an updated version to the last version of the Go compiler for a GopherCon UK, and I renamed that to "Understanding the Go compiler", because it was more clear, the title, and I don't want to mislead people around what I'm going to talk. But yeah, it was on that, "Understanding the compiler", and I go through the whole compiler... And there's a lot of a-ha moments that come from that talk, because I went through the whole process of compiling... And the idea was I have a Hello World, and that Hello World is going to be the main character of my talk. It's going to go through the whole process of transformation until getting to a binary. And in the talk I guide you through the whole process. And that's the idea. And this a-ha moment comes from that. And there's some of them, some that come from that, too. So if you want, we can jump to the next one, actually.

**Natalie Pistunovich:** Yeah, yeah. Let's do that. So a-ha moment number four.

**Jesús Espino:** Yeah, I think so. When I was investigating that, one of the things that I investigated during the process were two characteristics that were escape analysis and inlining. And the escape analysis, for the people that doesn't know that, escape analysis is a process inside the compiler that is going to decide if a variable needs to be a store in the heap, or can be a store in the stack. So that decision is made through escape analysis, that basically decides "Hey, if it's possible for me to use the function stack to store this data, or because the scope of this variable escapes from the function, I need to store somewhere else." That means basically the main memory, the heap. So that is what escape analysis does.

On the other hand you have inlining. Inlining is a process that analyzes a function in the Go compiler, it's a process that analyzes the function and decides if the function is simple enough to be embedded, to be inlined in the other side, in the call side. Instead of calling the function, you are going to take the whole code of the function and replace the function code with the code itself. That is inlining. And it depends on the complexity of the function that it not necessarily means the size of the function. It means the size of the function, but it actually means the operations that you use inside the function.

\[32:12\] So the cool thing that I learned was if you have escape analysis, that the size of function needs to go into the stack or the heap, and you have inlining, that allows you to take a function and put the function in place of the caller... What is going to happen is they are going to collaborate together. So if your function is simple enough, it's going to be inline, and suddenly, the scope of your variables is bigger, so it's more probable that you can use the stack instead of the heap. So that was very cool, that was very interesting. It's something that I've found super-interesting.

**Natalie Pistunovich:** And then did you have any chance of writing code that is kind of corresponding to this functionality that was extra-efficient, or interesting, or...? Or is there a use case you can imagine for this to be interesting, or...? Because as you were describing this, I had nothing come to mind.

**Jesús Espino:** There are use cases... I think it's a tool that you have there, and sometimes you can say "Okay, I have a very tight function here, that is generating a lot of allocations", then I can try to tweak that to reach the point where this gets in line. So that's one option. But also, I think the cool part is knowing that you can make decisions that are just smarter around creating your structs. For example, if you have a new function for creating a new struct, and you have an initialization process inside that function, that new function, that new function almost for sure is not going to be in line, because the initialization process is going to get complex enough to not get inlined.

So the scope of the variables, whenever you execute new, it's going to return a pointer to that variable, and because of that, it's going to always go into the heap. But if the function is small enough, if you say "Hey, the new function is going to create the object, and return the pointer", suddenly that new function is always in line, and it's always a store in the stack, in the stack of the parent, unless there's some other reason for escaping. But you are storing that in the stack of the parent... And then if you call, for example, an initialization function, that initialization function is already working in the stack.

So keeping your constructors small enough to get them inlined is going to be a good practice in general. So for example, that is a good thing, because it's not going to give you a huge boost in performance, but it can get you tiny improvements in performance here and there, and suddenly you are gaining -- well, \[unintelligible 00:35:20.25\] at the end. So yeah, it's --

**Natalie Pistunovich:** Yeah, that makes a lot of sense. And that would be actually super-interesting to also run tracing on that, for example, and to compare...

**Jesús Espino:** Yeah. Depending on the size of your application, you can have thousands and thousands of creation of certain objects, and if they go to the heap instead of the stack, it's going to be a lot of \[unintelligible 00:35:41.09\] a lot of other stuff that maybe is not that important.

**Natalie Pistunovich:** Or actually, we'll find big differences. I would be very curious, would you have a tracing episode in planning? Part two of that... So I will remember to do a cross and to bring this up there as well. It's a cool observation.

**Jesús Espino:** \[36:05\] Yeah. Actually, I think the inliner now - it's being rewritten. I don't know if it's already finished the work...

**Natalie Pistunovich:** I think in 23 it will be released and updated.

**Jesús Espino:** Yeah, with a profiler, right? With a profile guided optimization. So yeah, that can be very cool to see that is going to have a huge impact, because probably it's going to have a certain impact there.

**Natalie Pistunovich:** Anything else to say about point number four?

**Jesús Espino:** I don't think so. We have a lot of field to cover still, so...

**Natalie Pistunovich:** Alright. Jumping back... And we are continuing now with a-ha moment number five and six.

**Jesús Espino:** Yes. The other thing that I was doing -- well, I keep investigating the Go compiler, and go through different steps in the process... And I reached a point that was super-interesting for me, that was another a-ha moment, that was when the Go compiler gets machine-specific. So all the process related to tokenizing, parsing, there's an intermediate representation in the middle, then it's converted to something that is called SSA, that is single static assignment, and then it applies a lot of optimizations... And there's a point in the process of converting SSA or processing SSA where it's applying optimizations and accepting \[unintelligible 00:37:29.29\] one of the passes of the optimizations that is called lower. That is the exact point where the compiler starts doing things that are machine-specific. Everything before that point is machine-agnostic. If you have an ARM or if you have an AMD-64 doesn't matter. It's all the same codebase. And then it gets into this lower phase of the SSA transformation or SSA passes and gets converted into a machine-specific SSA. And then it applies other optimizations, and finally, with that optimization supplied, it starts generating the binary, the linking, and generates the final binary that is an executable.

But it's pretty cool that very far in the process is when do you get the machine-specific part. That by itself was an a-ha moment and was very interesting for me... But I'm also a big fan of TinyGo. I love microcontrollers, I love playing around... I'm not good at it, but I love playing around with them. And for me it was kind of interesting how TinyGo was doing that. And it's very interesting, TinyGo follows a very smart approach. It's basically taking everything up to that point, everything up to SSA... Up to that point it's the same compiler, it's the same codebase mainly. And in that point, it takes that SSA, and instead of converting that SSA into machine code, it's going to convert that into LLVM intermediate representation, or LLVM \[unintelligible 00:39:14.17\] assembly. And then LLVM is the one responsible for compiling down to the microcontroller-specific architecture.

So apart from that, you have to have a runtime that is compatible with microcontrollers, because with microcontrollers you don't have the same kind of access to things; you don't have an operating system and things like that. But at the end of the day, the compilation part is exactly the same, so that is the reason why TinyGo is exactly the same language. You can have differences in the runtime, but you don't have differences in the language, because it's the same one, and it's leveraging that point. So for me, that was like "Oh wow, these people are really smart." So I really loved that a-ha moment. And actually, I'm a big fan of TinyGo, so...

**Natalie Pistunovich:** \[40:04\] \[laughs\] Shouting out to the cool things that TinyGo does... And together with Ron Evans and Daniel Esteban and the team who is working on the cool projects around that.

**Jesús Espino:** Oh, yeah.

**Natalie Pistunovich:** Yeah, that is interesting. How would you say that this -- so if this maps easily to across the different processors, and it maps also to little tiny embedded tech, how would that be working on GPUs, for example?

**Jesús Espino:** Yeah, that's interesting... I think that GPUs have a different set of instructions, so I don't think it fits really well with that. I'm not an expert, to be honest, but my sensation here is what you have is a \[unintelligible 00:40:52.01\] that is oriented to a general purpose CPU. And that general purpose CPU \[unintelligible 00:40:58.09\] gets converted into real general-purpose CPU like ARM, or AMD64, or things like that. So applying that to CPU -- you can apply the same set of ideas, probably. You can do what Rob Pike did here, or what the Go team did here, that is generating \[unintelligible 00:41:25.28\] assembly that is going to be for GPU code, and build that up to the level that you have this intermediate language. And whenever you reach that point, you convert that into the specifics of different GPU's assembly code or instructions. But I don't think it's applicable to execute the Go binary, for example, or a Go binary directly into a GPU, because I think they have a different set of instructions. It's not the same kind of machine that you are managing there.

**Natalie Pistunovich:** Yeah, that's fair.

**Jesús Espino:** Again, I'm not an expert. Maybe I'm wrong here.

**Natalie Pistunovich:** Yeah, it's I guess, it's a surprise question. Yeah. But that definitely is interesting, and I will go and look about that a little bit. I'm also now curious... You said embedded TinyGo, and although this connection has been around in forever, I'm kind of only now starting to think "How different will it be for FPGAs?", for example, and all the other hardware out there in the world. Maybe one day we'll do an episode about Go and different processing units.

Yeah. Well, we only covered six of the ten, but we're slowly approaching our time, which means we will have to do a part two, because you're just bringing up too interesting points, and I have too many questions/comments about them. My last question to you would be "Do you have an unpopular opinion?"

**Jingle**: \[42:59\]

**Jesús Espino:** Okay, I think I'm going to get some hate for this... Well, that's what unpopular opinion is about.

**Natalie Pistunovich:** Yeah.

**Jesús Espino:** I think mechanical keyboards are just glorified nostalgia.

**Natalie Pistunovich:** Loudly glorified...

**Jesús Espino:** Yeah, very loud glorified nostalgia. So that's the thing - I have used them, I don't think they are more comfortable, I don't think they are better. For sure they're not going to make you a better programmer, or improve your performance or something like that... There's no way. I understand for some cases it's pretty cool whenever you are building your own keyword, or this kind of split keyboards, or programmable keyboards that you have your microcontroller and things like that - for that kind of cases, I've found that cool, because you can have your switches and all that stuff, and there's a lot of pieces out there for doing that kind of things... But I don't know, paying 10x? It's all the 10x that you are going to get for a keyboard, is 10x in the price.

**Natalie Pistunovich:** And the sound. The noise.

**Jesús Espino:** Oh, yeah. Exactly. The decibels, yeah. Getting that 10x in the price for something that is -- I don't know, it probably is an unpopular opinion. I get that the people that are going to consider this unpopular are going to consider this very unpopular... So let's see.

**Natalie Pistunovich:** Well, I cannot say I don't agree with you, so at least with me you are popular... My unpopular opinion is on a similar topic... Trackpads are better than mice.

**Jesús Espino:** I use a mouse, but... Yeah, I think so.

**Natalie Pistunovich:** Well, I guess we both agree. Then, with this consensus, I will say thank you so much for joining and sharing your interesting insights, and I am looking forward to episode two, and thanks everybody who joined.

**Jesús Espino:** Yeah, thank you for having me.
