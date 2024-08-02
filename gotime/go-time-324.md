**Natalie Pistunovich:** Alright, my name is Natalie and I'm here again with Jesús, and we are recording now the second part of our topic of the 10 a-ha moments that Jesús had when reading the Go codebase... And we stopped at six. Would you like to do a quick recap before we jump into seven?

**Jesús Espino:** Yes. Great. Well, hello, everybody.

**Natalie Pistunovich:** Yes, welcome. It's nice of you to join again. I'm just jumping straight back in, but yeah, \[unintelligible 00:04:57.23\]

**Jesús Espino:** That's fine. Let me recap. The last episode we were talking about some a-ha moments that come from some explorations in the Go source code that comes from a couple of talks that I did. One was around the different building objects, like slices, maps and channels... And the other ones come from the compiler itself. I have another talk that I did around understanding the Go compiler. And we explored these different a-ha moments. One of them was how slices work under the hood; that was surprising for me. Another one was about the syntax, and how the syntax of Go have a representation inside the compiler, that is the abstract syntax tree... And having that knowledge about how the abstract syntax trees were presented was an a-ha moment for me, because - give me the understanding of what can have a file in Go? What are the boundaries of what exists in a Go file, and what can't exist?

**Natalie Pistunovich:** What are the building blocks.

**Jesús Espino:** Exactly. What are the building blocks, and the fact that there's no more building blocks; there's nothing else that I've not seen because I haven't read about it. So that was another cool a-ha moment. Also, another one was around the cooperative nature of the goroutines and how they wake up each other, and how they stop themselves, and things like that. That was pretty cool also; it was another very interesting thing.

Another one was when I was investigating around the compiler, I started seeing these escape analysis concepts, the idea of how the compiler decides what goes to the heap and what goes to the stack... And also the inlining, that the compiler decides when to inline or not a function code. How they work together to give you way better usage of the memory, because sometimes the inlining process makes something that before went to the heap, now because the inlining process now goes to the stack. And that is faster. So that was another one.

The other one that also was super-cool for me was understanding when in the compiler starts the code that is machine-dependent. Where in the process of compiling your program your code gets in a state that is machine-dependent. This is pretty late in the process; it's one of the passes of the Static Single Assignment representation, and that was really cool, because then you realize that almost a huge percentage of the compiler is architecture-agnostic, and that's pretty amazing.

\[07:54\] The other thing - and that is related to that - is the fact that TinyGo leveraged that idea, and leveraged the SSA representation to build the TinyGo compiler. Basically, you use the SSA representation of Go to get that SSA, use the whole compiler machinery already there to generate the SSA. And instead of compile, that is to say to a binary for your architecture, it's going to intercept that point, convert that SSA into an LLM intermediate representation, and that LLM intermediate representation -- LLVM, sorry. LLVM intermediate representation. Yeah... LLM is --

**Natalie Pistunovich:** Low-level virtual machine, not the large language model.

**Jesús Espino:** Exactly. The LLVM intermediate representation, and that LLVM intermediate representation converts that code into your microcontroller-specific architecture. So I've found that pretty amazing and pretty smart. And that were the six a-ha moments that we explored yesterday; it was just yesterday... The previous --

**Natalie Pistunovich:** It's okay, it's okay. It's okay to say what happened behind the scenes. All good. It became a a long episode, longer than expected, so we broke that down into two.

**Jesús Espino:** Okay, I think that's it. That was what we were talking yesterday.

**Natalie Pistunovich:** Alright. I'm ready to jump to number seven.

**Jesús Espino:** Okay, number seven - that's kind of the intersection between my talk around understanding the Go compiler, and my talk around understanding the Go runtime. That is the next obvious step. Well, actually, the next obvious step whenever you are exploring these kinds of things is stopping. It makes no sense to keep going and keep going... But - well, I'm a reckless person, so I still kept investigating, and I started investigating the runtime. And as part of that, there was some interesting thing that I saw, and it was kind of surprising... Not necessarily surprising, but kind of... If you think about it, it makes sense, but I haven't thought about it before, and then when I saw that, I was surprised. It's the fact that the compiler compiles to binary code, in general. So if you have an assignation of a variable, it's going to be compiled into some binary code that is going to do some registers change, and some memory access, and things like that.

But not everything ends up being compiled to that binary code per se. Some of the syntax that you see in the Go source code is compiled to calls to the runtime. Instead of executing some assembly code, some CPU instruction, it's going to delegate that logic to a chunk of code that is going to be always there. That is the runtime.

For example, a very common syntax that we use is inserting things in a channel, or reading from a channel. That syntax, it's going to end up converting to an instruction in the assembly that is a call function to the runtime module, to the specific function that sends messages and data to a channel, or receives data from a channel.

So that was very cool, because it's this -- you see how smart is the design there, because you always have this runtime, the runtime is kinda easy to follow code... And converting all that into assembly to represent the concept of a channel in the final assembly probably is going to get your binaries probably more bloated. But not only that, it's kind of simpler to design that. You have a package that is always there. And your syntax can compile to that based on the existence of that package. So that was, that was really cool.

\[00:11: 57.25\] And you can easily see that if you use the go build flags. If you pass the ss in GC flags, you get the assembly generated when you builds your program, and you can see in the assembly there all the calls to the runtime package. So it's kind of easy to see that, and for me it's pretty cool.

**Natalie Pistunovich:** Why do you think this was done this way? Or what would it be another way kind of doing that, that would be maybe better for another setup?

**Jesús Espino:** I think, for example, there is a concept in Rust that is zero cost abstractions. That is something that you have the syntax there, but the compiler is going to take care of all that, and it's going to generate the final binary for that abstraction, without any runtime cost. That is another way of doing that. That is going to put more pressure in the compiler, it's going to take more time to the compiler to compile all that code... So probably that's one of the reasons. If you have a runtime that is always there, and it's always ready to just be linked to your binary, or be embedded in your binary, probably it's faster to compile. Also, I think the code is going to be simpler, because at the end of the day with all these transformations, all these generate these AST that suddenly represents something, an intermediate representation, and that intermediate representation, convert that into instructions... All that it's kind of more heavylifting than saying "Yeah, whenever you see a channel send, just add a call to a function." That's simpler. I think that's the idea behind that. I don't know for sure, but that's my guess. It's faster for compiling, or I guess it's faster for compiling, and it's simpler from a mental model perspective.

**Natalie Pistunovich:** Does it have something to do with cross compilation flags to kind of support that? From your guesstimate. I know it's a cross of too many topics.

**Jesús Espino:** Yeah... I think it doesn't need to be related to that, because the cross-compiling part is going to be -- well, have some relationship, because if your runtime already cross-compiled for another architecture, you don't need to recompile that part over and over again. So that is cross-compile one time, and the rest of your code needs to be cross-compiled. That's the one that needs to be cross-compiled. But at the end of the day, the runtime is just a Go package like any other Go package... So at the end of the day, probably the cross-compiling wouldn't be that different, because at the end of the day what you will do is something like "Okay, the send message to a channel, it's going to be a set of instructions that goes together." And that's it. So I wouldn't expect that to be affecting the cross-compiling. But again, it's a guess, as you said. It's a guess.

**Natalie Pistunovich:** Is there any recommendation for when writing your code you can have this in mind? Or is this too many layers and this is more of like a general bonus there?

**Jesús Espino:** Yeah, for me, I think part of this is about whenever you want to know more about how certain things works, you can check out that and say "Oh, okay, it's calling the runtime directly." So whenever I -- for example, whenever I append something to a slice, it's just calling the runtime. So there's some things that are happening in the runtime that you can say "Okay, if this is a runtime responsibility, I can easily go to the runtime code and understand what is going on." Understand what means append to a slice, or what it means to go to add something into a map, or send something to a channel. So you can easily explore that based on that. That's the only thing that I see some value there.

\[16:19\] In general, my talks are completely useless. So they are interesting knowledge. I find that knowledge interesting, but in general, they are useless. There's not much thing that you can apply directly, because it's about how things work. And to be fair, the Go compiler works really well. So you don't need to know how the compiler and the runtime works. So it's just about being curious and understanding better certain things. And yes, time to time, you'll find that knowledge useful. But in general, it's more about the pleasure of understanding what is going on under the hood.

**Natalie Pistunovich:** Yeah. I guess that one time where suddenly memory's eating in a wild way, and nobody understands why, and that one person knows that one very esoteric one fun fact... This is where it comes in useful.

**Jesús Espino:** Yeah... I went to a talk from Miki Tebeka in GopherCon UK that was about brain teasers. He has a book about that also, about brain teasers... And was like I was able to guess 50% of them. The other 50% I got caught. But easily, actually... It was like "Okay, this is not something that I \[unintelligible 00:17:43.05\] But some of them I was like "Oh, okay, I know that it's going to behave weirdly, because I know how it works under the hood." But yeah, it's pretty cool. But it's not especially useful in general, as I said.

**Natalie Pistunovich:** Keep it in the back of the mind, basically, is what you say.

**Jesús Espino:** Yeah, exactly.

**Natalie Pistunovich:** For that one time where compilation is being weird.

**Jesús Espino:** Yeah. Exactly. And understanding some small things here and there that can be interesting.

**Break**: \[18:16\]

**Natalie Pistunovich:** Okay, let's jump to number eight.

**Jesús Espino:** Yeah, this is another one that has to do with this understanding on the knowledge that is good to have, and sometimes you don't really understand what's going on... And it's about the binary entry point. Whenever you execute that Go binary -- whenever you learn Go, the first thing that everybody said is "Oh, the entrypoint of your program is this main function that you define, and then your program starts executing there." Of course that's not true, because we have a runtime. So the very first thing that is executed in your binary - it's a function that is dependent on your... It's an assembly function, a Go assembly function that is dependent on your operating system and your architecture. And then is starts initializing things, and setting up a lot of stuff, the memory allocator, the garbage collector, the different CPU flags, security-related stuff... A lot of stuff is done before even your main function is called. So that was very interesting, because you see the amount of things that are done before your main function is executed... It's pretty amazing.

Also, during that process one of the thing that happens is that your function, your main function, it's executed through a goroutine also. It's not the main process and the goroutines is something that happens after. The first goroutine is created and the it starts executing your main function. So your main function is not executed outside any goroutine and then \[unintelligible 00:23:49.22\] goroutines. Your main function is a goroutine, and actually, before your main function is executed, there are other goroutines already executing, like the system monitor and things like that. So there is a huge -- not a huge, but a very interesting process there before your main function is executed. And I've found that pretty cool.

**Natalie Pistunovich:** I mean, on the one hand it's very -- it's a lot happening, but on the other hand it's so fast, and it makes me think of that XKCD comic where it's compiling, and they play swords, and it's kind of how it stopped happening in Go... Because the same thing happens, but just faster, basically.

**Jesús Espino:** Yeah, it goes really fast. Actually, if you start digging into that initialization process, most of them are very small tasks. For example, the memory allocator is just initializing some structs that are there, but it's not like -- it's not heavy lifting there. Then some things like the garbage collector is just setting some flags here and there, and the garbage collector is set up. It's all a small things, a small set of structs that you define, and a small initialization that you do... And then, when the program starts running, you start using that thing. So for example, whenever you need memory, it's going to start using the memory locator. Whenever you need to recollect the garbage, the garbage collector is going to kick off, and all that stuff. So there's a lot of steps, there's a lot of things that happens between when your start your binary and your main function is called, but they are very small things, very targeted things.

**Natalie Pistunovich:** If one wants to go about looking into that, how would you do that? How did you do this?

**Jesús Espino:** Yeah. I will recommend to go and check out my talk. That will be a kind of easy path. But if you want to do it by yourself, that is perfectly reasonable. What I did was go to the -- well, I went to the GDB debugger and find the entrypoint; in my case it was in the src/runtime/rt0linuxamd64.s. That is the entrypoint; that's an assembly code there. And then I start tracing that, and going to the different calls that it's doing, and see what are that calls doing, what are they initializating, and all that stuff. So basically, I manually trace all that execution.

\[26:34\] And that was my process... It was relatively hard; it's not super-easy, because you have some assembly code there that you have to kind of understand a bit. It's not something that you need to understand a lot of assembly, but you have to understand a bit. And then you can just start tracing all these small steps here and there. Then you have the scheduler initialization, but the scheduler initialization includes the memory allocator initialization, the garbage collector initialization... So there is a big chunk that is the scheduler initialization, but it's initializing a lot of stuff inside. So tracing all that took me time, but it's not specially hard. It's more time-consuming than hard. That is what I perceived.

**Natalie Pistunovich:** All the links will be in the show notes.

**Jesús Espino:** Oh, yeah. I can share some links there. And actually, if you see -- I usually do that in my talks; whenever I explain these kinds of things, I usually have at the bottom right corner of my slides links to the source code. That is kind of homework for the people if they want to go there and check where in the source code is happening whatever. Yeah, if you go to the slides of my talk and you start looking at the different steps, you are going to see that at the bottom right corner the link to the source file, and the specific version of the Go runtime or compiler. And yeah, you can go there and check it. It's interesting. I don't know how many people do that, to be honest, but I put that there.

**Natalie Pistunovich:** Yeah, that's fair. It's nice to have sources, for sure. References, yeah. Okay. Number nine.

**Jesús Espino:** Okay, it's kind of related with what we have been talking... It was the memory allocator - probably that was more my fault than anything else, but I didn't even know, I didn't even think about the concept of the memory allocator inside Go. Whenever you talk about memory management in Go, normally you talk about the garbage collector. But I never thought about the memory allocator. And the memory allocator was an interesting piece of software that I didn't know.

The memory allocator is responsible of talking with the operating system and reclaim pages and free pages. So it's a very interesting part of how memory is managed in Go. And actually, what it does is it organizes the data in a way that it takes a set of pages, what is called mspans, memory spans, and those memory spans have variables of the same size always. So an mspan can have 30 pages, but it doesn't matter the amount of pages that it has, it always is going to store variables of the same size.

\[29:49\] That means if you have an mspan of eight bytes, all the variables of eight bytes are going to go there. If you have an mspan of 32 bytes, variables of 32 bytes goes there. And there is a set of mspan size that are defined, and the bigger is the span, the bigger is the space between them. For example, you have 8, 16, 24, 32... And then I think it jumps to 48, or something like that, and then to 60, and then to 96, or something like that. So it's jumping, and there's more and more space between them. I don't remember the exact numbers, but there's more space between them. That is important to know, because if for example you store a variable that is 30 bytes, for example, it's going to be storing them in a span of 32. So it's going to take 32 bytes of space, no matter the size of the struct.

So every single variable that is between 24 and 32, it's going to be stored in the 32 span, and it's going to take 32 bytes. So that's idea. That way, you have less fragmentation, you have a very efficient way of storing and retrieving that variables... Also, you have an easy way of reclaiming and freezing that pages in memory... So it's an interesting approach. And that's the memory allocator.

Apart from that, you have all these mspans, and then you have for each CPU, you have one mspan, and then you have a centralized version of all the spans of all the CPUs. And then you have an mheap that is managing everything. And the other thing is the biggest mspan is 32 kilobytes, I think. So everything that goes over 32 kilobytes is going to be handled directly from the mheap, and it's going to get its own memory pages.

So really big data chunks are going to be handled independently, outside mspans, and it's going to use pages directly in memory. And everything under that is going to go in the mspans that is going to handle that in pages of memory. So the memory allocator asks for more pages, and free pages from the operating system. So the memory management is done by the memory allocator. The garbage collector decides what is its use and what is not, but the memory itself, the asking for memory and freeing the memory from the operating system is done by the memory allocator. And I didn't even know that that exists before, because I'm a web developer, basically... So my focus has been always in other places.

**Natalie Pistunovich:** Yeah. I would like to watch a talk about that. I feel like I need to hear this one more time.

**Jesús Espino:** Yeah. I think in the last EuroPython, Diana Shevchenko gave a talk --

**Natalie Pistunovich:** From Datadog?

**Jesús Espino:** Yeah, from Datadog. She gave a talk about that, about how they -- knowing how the memory allocator works, they were able to squeeze a lot of performance, and reduce the memory usage, and the garbage collector pressure, and all that stuff. So that is interesting... And actually, knowing how the garbage collector works and knowing how a structure packing works, how changing the order of the fields of a struct can end up giving you a less memory usage for that struct... And if that falls into the right spot between mspans, you can end up saving big amounts of memory, actually. And yeah, probably, whenever the recording is there, check out the talk from Diana.

**Natalie Pistunovich:** Is there any action items that were like recommended practice, that somebody can take from this?

**Jesús Espino:** \[33:57\] Yeah, I will say that knowing that mspan size and all that stuff, and knowing that structure packing can lead you to save memory - that is something that I will recommend to check it out, especially if you have a huge amount of instances of something. For example, in Datadog \[unintelligible 00:34:14.25\] so they have some structure that is repeated millions and millions of times. So that millions and millions of times, if you save, I don't know, 30 bytes on each structure there, 30 bytes multiplied by millions of times, you are saving memory there. And you are saving, back and forth with operating system, reclaiming pages, and all that stuff. So I think it's something to check out if you have probably in the order of millions of instances of any object.

**Natalie Pistunovich:** Okay. Still trying to think what -- it always helps me to kind of link this in my mind to something, and it's like hanging there... But okay. Moving on to number ten, and the last one.

**Jesús Espino:** Yeah. The number ten, it's kind of related. One of the things that I always say -- I always have this "Oh, when the garbage collector runs - oh, it runs whenever you have this memory threshold, but it can run from time to time without the memory threshold, but you can run it manually..." But when that runs, there can be different places. And what's interesting - when I just realized that there are three cases only, three specific cases where the garbage collector runs. One is whenever you call GC -- well, whenever you explicitly call the garbage collector to do a cycle. So that is the GC trigger cycle. So it's manual calling the garbage collector, ws1 in this case. Then you have another one that is related to time. There is a goroutine that is running under the hood every 10 milliseconds in Go that is called a system monitor. And that system monitor checks if the garbage collector hasn't been called for too much time. And if that's the case, it's going to call the garbage collector from there. It's what \[unintelligible 00:36:28.00\] GC trigger time, that is based on time. The system monitor detects that, and calls the garbage collector.

Then you have the one that was more interesting for me, that is the GC trigger heap. That is this one that is related to the Go GC environment variable that defines when the garbage collector have to pass, based on the size of the heap in the previous pass. So by default, it's 100%, so what it means is whenever you do a garbage collection pass, you end up with certain amount of memory. Let's say 16 megabytes, for example. The next pass is going to be whenever you double that. Whenever you reach 32 megabytes of RAM, it's going to trigger a garbage collection phase, and for example after the garbage collection, you get into 20 megabytes, so the next pass is in 40. That reduces the amount to x, and then whenever you reach to x, it's going to call again, and all that stuff.

So that is how the GC pacer works to do that check of whenever you double the memory. But when that happens exactly in the code? Because you are asking for new variables, new structs, and things like that all the time. So when are you checking if I surpass that memory? And it's kind of simpler when you understand that the memory allocator is there.

\[38:01\] The trigger heap, the garbage collection heap check is done whenever you ask for a new page of memory. Whenever you need a new page of memory, whenever you request for new memory, you block a new chunk of memory to store variables in any of the mspans, you are going to check if that is surpassing the threshold. And then if it's surpassing the threshold, it's going to call the garbage collector. So that is exactly the exact point where it's checking that. So there's these three cases: whenever you reclaim a page from the operating system, it's when the garbage collector could run if the threshold is surpassed, based on time from the system monitor, and whenever you call it manually. So and that's it. There is no any other place where you are calling the garbage collector.

**Natalie Pistunovich:** What's a practical takeaway here?

**Jesús Espino:** Well, I think understanding especially the heap one, it's going to understand better when do you generate pressure in the garbage collector. If you for example start creating variables, and freeing them, and creating them, and freeing them, and creating them, and freeing them, inside the same kind of size of variables, probably you are not going to need to reclaim more pages, because you probably are reusing the same mspan and the same pages that you have in memory. So I'm not 100% sure if that is 100% accurate... But yeah.

**Natalie Pistunovich:** It sounds like if I would want to like - not hack, but if I want to poke around somebody's code somehow... I'm trying to think if you are playing some Capture the Flag, and you've got this piece of a program, and you try to poke it to see where will it break... Maybe this is something to try there. Not the most everyday practical use case, but... Yeah. Still trying to link that also into somewhere.

**Jesús Espino:** Yeah. It's kind of hard for me, because as I said, I don't find a lot of practical usage for most of the things that I see here. For me, it's about knowledge, and about understanding how it works, and having a better understanding on things like this.

It's useful to know when the garbage collector is going to run; probably in very specific real-time applications you need to know that. But probably if you are doing real-time applications, almost for sure you are not using a garbage collected language. Anyway, for that kind of cases, whenever you need to know that "Hey, the garbage collector is not going to run in this space", you can say, "Okay, I can run the garbage collector first, so I reduce the possibility of the timer one to running by itself." And then I can control the size of the heap to be sure that during that time I'm not doubling the heap. So I don't know if that is something I will do, or I will want. Probably I will try to disable the garbage collector and enable it again later... I don't know if it's even possible in Go. Anyway...

**Natalie Pistunovich:** Yeah, no, interesting.

**Jesús Espino:** Yeah, it's \[unintelligible 00:41**:**34.02\] And yeah, trying to poke around with these... I don't know how you can poke around with this. I don't know...

**Natalie Pistunovich:** It's lots of arrays until something happens...

**Jesús Espino:** \[00:4**Natalie Pistunovich:** 52.28\] Yeah, no, for sure you can generate a lot of data and start generating the garbage collector to spin a lot. Actually, you can do things like playing around with the concept of "Hey, whenever you double memory, I'm going to generate the garbage collector pass. I can easily double the memory, reduce the memory, because I free that thing, and double the memory again, and free that, and double the memory again, and free that, and double the memory again." And that will generate a lot of garbage collector cycles. But you need to play with that, and... Yeah, you can play with that, and screw a bit the performance of the thing, because you are doing a lot of garbage collection work, instead of real work.

**Natalie Pistunovich:** Okay, cool.

**Jesús Espino:** Probably you can do even better just reducing the amount of memory needed for the garbage collector phase. You can tune the Go GC to instead of 100, you put that in 10, and every time the 10% is reached, or 1% is reached, you run a garbage collection phase, and that's going to be crazy, spinning the garbage collector all the time. Not something that I would recommend, but...

**Natalie Pistunovich:** Yeah, very nice segue you gave me here for an unpopular opinion. But before we jump there, could I ask you to recap the two episodes on this, and just quickly go over all the 10 again, as a very quick summary? It was really interesting to hear them all.

**Jesús Espino:** Yeah, I can do a recap of them. One of them was the slices internals, the other one was the goroutine cooperation, the cooperative natures of goroutines, the other one was the concept of the syntax, the abstract syntax tree and how that sets the boundaries of all the things that can be there in a Go file. The other one was escape analysis plus inlining, and how they collaborate to get a better memory usage. The SSA lowering process, that is the process that converts your program representation at that point, the SSA program representation, from machine independent to machine dependent. And how TinyGo leveraged that SSA to use the LLVM technology to generate microcontroller binaries using the exact same Go language. And how the compiler and the runtime collaborate together to provide a lot of the syntax that you use in Go, like sending things to channel, or appending things to a map. The entrypoint of your binary, and how that is not the main function; it's more complex than that. And the memory allocator, and how the memory allocator manages your memory and reclaims pages and all that stuff, from the operating system. And the final one, when the garbage collector runs, and what are the three places where the garbage collector can run, and why. And I think that's it.

**Natalie Pistunovich:** Okay. I would love to hear from people who listened to the episodes on this topic, either on Slack channel of the Go Time podcast, or on Twitter, what was your mind-blowing one, or what was useful, or what was the biggest a-ha for you. It is really cool. Go watch all the talks from Jesús. They all will be linked in the show notes. And thank you so much for joining. Do you have an unpopular opinion for today?

**Jesús Espino:** Oh, that's hard... It took me some time to realize that I had one... So no, I don't have one for today. I am going to stick to my mechanical keyboards dislike.

**Natalie Pistunovich:** A mini unpopular opinion is that two episodes recorded in two consecutive days can share one unpopular opinion.

**Jesús Espino:** Yeah.

**Natalie Pistunovich:** Great, then thank you so much for sharing your insights, and good luck in all the cool talks that are coming up for you.

**Jesús Espino:** Yeah, thank you. Thank you for having me. And yeah, I had a great time here. So thank you. And I hope -- I really want to know more about people getting this knowledge, and finding ways of using that. Because to be honest, as I said, I'm a web developer; my main focus is on API development. So there's a lot of fields out there that are more system-level, that probably can take advantage of this kind of knowledge. But for building APIs, everything works so smoothly in Go that you don't really need to go deeper. So...

**Natalie Pistunovich:** Do share your thoughts, everybody who listened. Yup.

**Jesús Espino:** Yeah, let's see what people say.

**Natalie Pistunovich:** Alright. Thanks everyone for joining. Thanks, Jesús. Bye-bye.

**Jesús Espino:** Thank you. Bye.
