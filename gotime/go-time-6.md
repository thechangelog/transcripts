**Erik St. Martin:** Alright everybody, welcome back for another episode of Go Time, it's episode number six. I'm Erik St. Martin, today here with me we have Brian Ketelsen. Say hello, Brian.

**Brian Ketelsen:** Hello.

**Erik St. Martin:** And we have Carlisia Campos, say hello.

**Carlisia Pinto:** Glad to be here. Hi, everybody.

**Erik St. Martin:** And we have a special guest with us today. Bill Kennedy from Ardan Labs and GoBridge is here with us today. You might also know him from all of his workshops that he does in like the world now, right Bill?

**Bill Kennedy:** Yeah, I’ve been lucky enough to get into Europe a couple of times this year.

**Erik St. Martin:** It's crazy, it's like every day we see you somewhere else. I don't know how the planes arrive in time for your workshops.

**Bill Kennedy:** \[laughs\] Scheduling is difficult sometimes for sure.

**Erik St. Martin:** I mean, what's your mileage look like? Your frequent flier miles.

**Bill Kennedy:** I think I'm at like a hundred and thirty thousand miles right now.

**Erik St. Martin:** Geez, I don’t envy you.

**Brian Ketelsen:** Diamond elite?

**Bill Kennedy:** On American I am now Platinum on my way to Executive Platinum.

**Brian Ketelsen:** Nice.

**Bill Kennedy:** But yes, these are not goals that you should want to achieve.

**Erik St. Martin:** Do you have your favorite soap and shampoo that comes in the small bottles?

**Bill Kennedy:** I've leveraged whatever the hotel has to the extent that I can.

**Erik St. Martin:** So today we're gonna be talking with Bill about Mechanical Sympathy. I think this is gonna be a really interesting topic; before we get into that, let’s talk news and interesting projects. Anybody have any interesting they want to talk about before we get into it with Bill?

**Bill Kennedy:** You know, it was a pretty quiet week in Go news from my perspective. But I did find two relatively interesting projects. The first one I thought might be a winner in the best hack of the year award. In the show notes you'll find a link to the blog post from Acksin, acksin.com, where they hacked together a way to send stats dtype metrics to Google Analytics, which seems like an interesting shoehorn and it looks like it works pretty well. So you get a nice free stats D monitoring for your servers using Google Analytics inappropriately. I approve completely of this plan.

**Erik St. Martin:** You know, but the interesting thing about that though is that you can see it alongside metrics that you are already collecting in Google Analytics. And how some of those things might impact your funnel. I can’t think of any specific uses I'd use it for off the bat, but I think it has potential to be valuable.

**Brian Ketelsen:** It was interesting, to say the least. I'm not sure I would put it in production on a useful system. What if Google decided that they could figure out that traffic and start tossing it?

**Erik St. Martin:** Yeah, I think I'd prefer Grafana, or something like that.

**Brian Ketelsen:** Datadog all the way.

**Erik St. Martin:** Datadog is good stuff, too.

**Brian Ketelsen:** So the second interesting project I found is one in the multitude of vendoring projects. This one's called Manul, and you'll find a link to that in the show notes. It's another one that does vendoring with Git submodules this time, ant looked to be one of the better vendoring packages that supports Git submodules. So it had some very nice commands and utilities with it.

**Erik St. Martin:** \[\\00:03:54.17\\\] I’m interested to see though how they solve some of the drawbacks from using submodules, because a lot of people have reservations about using Git submodules. There’s kind of some inherent flaws with the way it works. Number one would be that you’re still relying on that repository to exist in the future. So if it went down or somebody decided to delete their project - because that totally never happens -

**Carlisia Pinto:** Or you can just rename it.

**Erik St. Martin:** ...you still wouldn’t have access to the code, but some of it also comes in the way submodules work. So if I pulled down your project and I needed to do a Git submodule update to update my local versions of those submodules, but if I don’t do that, I’m still running with my prior versions of those submodules. So by checking out your code it doesn’t move my submodules with it, so I can accidentally commit my older versions of your stuff, and those lines are really easy to mess. There’s a couple issues too with the way those things that are kind of merged too, so I’m interested to see how that's solved. Because people step on each other's submodules all the time. You see it where I pulled down your changes but I didn’t notice you had submodule updates, but then I commit my commit and my submodule versions are different than yours, and I just kind of step on yours. But I mean, these are problems that people were having years ago, so maybe there's some stuff in Git now that accounts for... Maybe the tool accounts for it a little bit too. I guess if you did it on like a commit hook or something, you could probably... But yeah, it’s interesting though... Submodules can be valuable and they can also be a pain, but I guess everything in programming can be, right?

**Bill Kennedy:** Always.

**Erik St. Martin:** Have you guys used submodules before, anybody?

**Bill Kennedy:** Not me.

**Carlisia Pinto:** I have, I have. I did not run into any problem with it. Didn’t do anything crazy, just dropping a submodule there to access it.

**Erik St. Martin:** Yeah, I’ll find a link surrounding some of those pitfalls, and we'll drop it in the show notes before this is released. This has been a couple of years, so I can't remember a name of one off the top of my head, but I know people were having a lot of weird issues. So anything else we want to talk about?

**Brian Ketelsen:** That's all I had.

**Carlisia Pinto:** I don’t have anything.

**Erik St. Martin:** I know what we do want to talk about.

**Brian Ketelsen:** Mechanical Sympathy?

**Erik St. Martin:** Exactly.

**Brian Ketelsen:** Yes!

**Carlisia Pinto:** First things first then - where did this name come from? We were talking about this earlier, but I wanna hear it from the horse's mouth.

**Bill Kennedy:** It didn’t come from me. This is a term that I think I got from Martin Thompson, who, if you watch any of his videos, he says he got it from a racecar driver.

**Erik St. Martin:** Yeah. Jackie Stewart was a Formula1 driver and I think during an interview he had said something along the lines that you don’t need to be an engineer or mechanic to be a racecar driver, but you need to have Mechanical Sympathy. Basically he was just implying by having some level of understanding of how the machine, the car worked, that it made you a better driver. And I think as Bill kind of pointed out, Martin Thompson started applying that to programming. So Bill, would you like to fill us in a bit on how you think that that concept applies to programming?

**Bill Kennedy:** Yeah. I mean, I only have a perspective on it from the Go side, and it's something I really focus in the training. I kind of focus on two things in the training: data-oriented design and Mechanical Sympathy, and trying to show how the language Go itself is very in tune around these two ideas. And I really, really believe that if you don’t understand the data that you’re working with, you do not understand the problem that you’re trying to solve. It all starts there, like everything, every problem that we're trying to solve is really a data manipulation problem in some fashion, in some way. \[\\00:08:03.21\\\] So it all really starts with the data, and it's this idea that if you don’t understand the data you're work with you don’t understand the problem, and if you don’t understand the cost of solving that problem, you can’t really reason about solving it. And to be able to reason about the cost you have to have some understanding of what every line of code is doing and how that's affecting the operating system and the hardware, which is there to execute those instructions that you're spending time writing to begin with. So I think it's that relationship that I’m really interested in and think about in terms of what Go is doing to help us.

**Brian Ketelsen:** So when you talk about Mechanical Sympathy, you’re talking about things at the physical level, like the discs, the caches, the CPU, electrical things. How much of that as a programmer do we have to care about?

**Bill Kennedy:** I really focus it around the data that you're working with. One of the things that I’ve learned is that the hardware that we’re working on today, our processors are now multicore processors and every core has their own sets of local caches; that L1 and L2 cache in many cases belong to each core. Cores could then share now three-cache and you just don’t have access anymore directly to main memory. So if you’re writing code where the hardware cannot predict access to the data you're working with and you're going to have these cache misses that can cost you hundreds of clock cycles. In one architecture that Scott Meyers uses in one of his talks it’s 107 clocks cycles every time you have cache miss. Now, that’s gonna change from hardware to hardware, but if you could imagine employing some sort of length list data structure, or on every iteration you’re accessing a different node on the list and every node on that list is not sympathetic with the caching system or doesn’t exist on the same cache lines, you could be chugging through memory without even realizing it, without even understanding why it’s as slow as it is.

**Erik St. Martin:** So let's back up here just a second too, because a lot of people come from dynamic languages - Ruby, Python, and even Go abstracts these concepts from you. Let’s take a second and talk about CPU caches and what those are, because I would argue that probably a lot of people aren’t even familiar with what a CPU cache is.

**Bill Kennedy:** So we've got to talk about this at a very high representative level, because hardware is really different. But in essence, we're dealing with a piece of hardware that has caches in, and from our perspective it can be all the same. The idea is that that hardware needs to have the memory that we're working with as close to it as possible, and what’s going to happen today is if you need any, even a byte of memory that's sitting out in main, it’s got to move from main memory into let’s say the L1 or L2 cache for it to be used. And these caches get pulled in and out on cache lines, and the default cache line today is the 64-byte cache line. So the idea now is that if you have instructions that are working with data, which is what we do, right? I mean, this is what we do all day - we’re reading memory, we're writing to memory... This memory has to now get into the caching system in order for us to be able to use it. This state has got to be moving on these 64-byte cache lines from main and back in. And so, one of the things that we can do to be sympathetic with the hardware is try to work with data in as contiguous blocks as possible. The more contiguous our data is, you usually then at that point are probably iterating over that data. And iterating over data can create predictable access patterns to that data that the hardware today can pick up on.

\[\\00:12:12.04\\\] So if we really want to give the hardware its best opportunity to take advantage of everything that's in there, we've got to be sympathetic with it. We've got to try to look at data in a way of, what are our working sets of data? Can we lay data out contiguously, work with data contiguously and can we create predictable access patterns around that, so the hardware can pick up on what are the next cache lines that are probably in play or will definitely be in play, and pull those into the caches before those next instructions need them.

**Carlisia Pinto:** How does somebody learn about what predictable access patterns look like? And what can they do to achieve that?

**Bill Kennedy:** From today's perspective, it is the array that is really the most important data structure from the hardware perspective, because it is the array that allows you to create contiguous blocks of memory.

**Erik St. Martin:** Well, I guess structs are aligned that way too, right?

**Bill Kennedy:** Say that again, I’m sorry.

**Erik St. Martin:** Structs are also aligned contiguously.

**Bill Kennedy:** They are, but if I was gonna create a user struct and I was gonna create a hundred thousand of those and I didn’t lay that out contiguously... You know, I created just a link list of these particular user values and they laid out all over in memory almost randomly, and you started walking down that link list, the hardware's not gonna be able to pick up on any pattern there, and you're basically gonna be chugging through memory, because every access is gonna be a cache miss. So we're trying to eliminate that by trying to keep all of the data that we can as close together as possible and the least number of cache lines as possible.

**Erik St. Martin:** Right, because over the years processors, even though they haven’t got significantly faster, they've become much better at multi-tasking. So while the processor may be performing a math calculation, in the same cycle it can be making the next stride and pulling the next cache line, so that the next iteration the data's already there and it’s basically for free.

**Bill Kennedy:** If it can predict what that next cache line is, then it absolutely can do that. But if we’re not being sympathetic in helping it to be able to predict these things, then it can’t pull that cache line until it knows exactly, "Now this is where the data is that I need." But it's...

**Erik St. Martin:** Yeah, and..

**Bill Kennedy:** I’m sorry?

**Erik St. Martin:** I was just gonna say, so the access patterns, how you talk about it being important thinking about the data and how you’re working with it... I guess that the two main points that I can think of is basically temporal and spatial locality right? Working with things that are located next to each other in memory or working on the same pieces of data at the same time, right? Kind of to your point where you can minimize the number of cache misses.

**Bill Kennedy:** Yeah, and hopefully... I mean, you’re not gonna avoid cache misses altogether, but if you have a working set of data that you're gonna be doing a lot of processing on, once it gets pulled in now it’s there you can leverage it. If you're bouncing around memory all the time and it’s somewhat random, you're just gonna chug through it.

**Erik St. Martin:** So let’s give an idea of bouncing around memory.

**Bill Kennedy:** A link list to me could be a scenario where you have a node of data, that node of data points to another node of data, and that node of data points to another node of data. Depending on how and when that data was created, that could be almost anywhere in the heap, depending on how that's getting created and when and how it’s getting hooked up.

**Erik St. Martin:** Right.

**Bill Kennedy:** So you can’t guarantee in that case that every single node is on the same cache line, or even in cache lines that are next to each other.

**Erik St. Martin:** \[\\00:15:55.04\\\] And I guess another example would be like a multidimensional ray, right? Iterating over row-based versus column-based.

**Erik St. Martin:** Yeah, we actually have some examples in the training with that over benchmarking, where you actually see a significant difference in performance. If you go row base you see it’s much faster than if you go in column base... Kind of breaking, you know, going against the grain.

**Erik St. Martin:** Yes, so it’s interesting though, because we typically think about memory for free, right? You know, we're like, "Yeah, it’s on a RAM. RAM is fast. At least I don’t have to go to disc for it", right? But doing something like column first or row first iteration over an array like that, it really demonstrates the point how much slower it is to go to RAM than CPU cache. And it really shows its head the bigger that it grows.

And there’s other things, too... Even just because we use... Typical operating systems have the - I always mess up this name - the translation lookaside buffer, I think that’s what it’s called, where it basically maps the address or memory your program has to the real memory, physical memory address. And that has pages too that you can blow out and it kind of has to load back in, and that's expensive, right? So every time you blow that out because you’re not working with memory that’s located next to each other.

**Bill Kennedy:** You know, my interest in this actually started to develop when I came into Go. Because before that I was in C\# and we had lists, we had keys, we had stacks for data structures, right? And even C++ gave us all these data structures. And when I came into Go, I was like, "Where are all my data structures? I don’t understand this." I'd just see an array, I'd see a slice which I honestly didn’t understand at that time, and I'd see maps. And it’s really silly, because I didn’t really understand what slices were. I just thought that they were really just arrays, and back in school we were really taught that arrays are difficult to work with. And I actually avoided slices for the first couple of months working in Go using link lists, because I honestly didn’t understand why we didn’t have data structures, and eventually at some point I realized that everybody is using slices and the language is pushing you towards slices, and I figured out I had to really learn what this is.

Now when you step back and you look at it from this point of view, the underlying data structure for the slice is an array, right? The slice is the most important data structure in Go. And as I peel this onion every month, more and more about Go, all I keep seeing is how Go is pushing us towards writing sympathetic codes, Go is pushing us towards doing the right things without anybody realizing it. Go wants us to work with these slices because then we're really working with arrays and contiguous memory, and it's giving us our best opportunity to have these sympathies without even realizing that we’re being sympathetic with the hardware. So Go to me is just an incredibly fascinating language when it comes to that.

And other areas of the language too, where you see that you're really being sympathetic with the operating system scheduler on the concurrency side, without even realizing it. Just these idioms and these things that we tell people to do all the time, they’re based not on just, “Hey, we want you to do this”, they’re based on real things around performance, simplicity, readability, those types of things. It all kind of comes full circle.

**Erik St. Martin:** Yeah, I think there’s a lot of programming idioms that can be followed to help. But I think you’re right... Like I said, I never really considered some of the language functionality, that it’s abstracting the way these things and making our programs more sympathetic by default, right? And channels are a good example too, right? You know, you’re passing pieces of data over between threads, so that the data can stay locally on the cache or that particular thread.

**Bill Kennedy:** \[\\00:19:54.04\\\] So what about the reference type, your slice, your maps, your channel values, right? We’re always told, "Do not share this. Everybody can get a copy of these values." And what that's doing is that it's allowing us to not put pressure on the GC right? Like, we get to leverage the stacks to the fullest extent because everybody can get a copy of this slice.

The thing that's being shared underneath is what let’s say necessary has to be on the heap, just that. And all these little objects that we need to pass values around across these program boundaries, we get to leverage the stack, right?

Because there's gonna be two areas where we gonna want to focus around performance. One will be I think around data-oriented design and are we being sympathetic with the hardware and the caching systems, are we working with data the best way we can? And then the other side is gonna be, can we reduce pressure on the garbage collectors so it doesn’t have to run as much, right?

These are two areas where I think we can focus just day one around performance when we’re not getting enough of it. But I tell everybody in my classes all the time, I go, "Don’t become paralyzed by all this stuff. You have to get whatever it is your working on, working first. And then you can profile and measure what’s working." The profiling tooling is amazing, right? You can see the low hanging fruit and then look at where you can spend real time. Where does your time need to be? And then these things kick in to help you understand, "How can I get some better performance here? Am I not being sympathetic with the caching system? Am I not being sympathetic with the operating system? Am I not being sympathetic with the garbage collector? It’s all just allocating too much stuff here when I don’t need to."

**Carlisia Pinto:** How about the data-oriented design? I understand we don’t want to maximize performance ahead of time before you know what you need to optimize and even where you need to optimize. How about the concept of data-oriented design?

I can totally see you're designing your software in a way that is not data-oriented, and it's to make it work, and you might or might not have performance issues. But let’s say you do want to change things around. It seems to me if you didn’t start out thinking about data-oriented - that way of doing it - the changes would be so great, the redoing would be so great, versus if you had started out thinking in that way and should we be doing that... Not so much in terms of, "Let’s try to optimize performance too early", but are there payoffs of starting out with data-oriented design that go beyond performance. Maybe just code readability, maintainability, that kind of thing.

**Bill Kennedy:** So Go is an object oriented programming language, but I don’t want people writing object oriented programs in Go. I think that’s the line, I think if your writing object-oriented software, you’re not thinking about the data first, you’re thinking about all of those relationships, and object-oriented programming designs tend to create link lists at the end of the day. I mean, that’s what they’re doing. They're to me not sympathetic with the way the hardware works today. So for me, this is about separating where you can the data that you’re working on and then the behavior that’s going against that data.

And I’m a big fan of functions, I love functions. One of the things that was so great when I got into Go was I had my functions back. Not everything had to be on a method on a class. And I think functions can also help reduce a huge amount of your code when you’re using them in a sense where, "Here's my state and here’s some behavior." I mean, methods play a huge role in Go, I’m not saying that you’re not gonna have methods, but for me it’s about not thinking about architecting things in terms of an object-oriented design or pattern, but really thinking about, "This is the data, these are the manipulations, this is the input, this is the output and how do I do that with the least amount of code?"

**Erik St. Martin:** \[\\00:24:04.09\\\] And now the data-oriented design concept came from the game programming world, I believe.

**Bill Kennedy:** Yes.

**Erik St. Martin:** And a lot of their problems were similar, right? They needed things to happen fast because they need high frame rates, so they tried to start organizing their code in a manner so that the data that they were working with was spatially located, so they'd group the data they worked with commonly together to pass around, versus working with objects.

**Bill Kennedy:** Yes, right. They have to do N number of things in X amount of time, and time is not changing, right? So they have to make that happen. So yeah, they started to learn that they had to be even more sympathetic than anyone else.

But I think the slice, the idea of being able to leverage the slice as much as possible, when it is practical and when it is reasonable, is giving you a lot of this without you even realizing it.

That’s one of the things I love about Go, is that Go has given us the things that we need and is pushing us towards these things by saying, "Well, I’m not gonna give you any other data structure. I’m giving you maps, I’m giving you slices." And even maps are a leveraging contiguous memory underneath. And then with all the reference type values, if we’re not sharing them, passing them around, everybody gets a copy... You’re just getting these things. But yeah, I think I heard the term first from Mike Acton on a talk from 2014 where he goes to lower-level detail, and some of it I can’t even understand, about how he’s leveraging data-oriented design in those gaming systems that he’s building.

**Brian Ketelsen:** So when we were researching this show I found the term 'false sharing'. How does that fit into this whole picture?

**Bill Kennedy:** Yeah, so now we’re getting really deep inside the hardware a little bit. But the idea is that because every core is going to be loaded with cache lines, if you have let’s say two threads, each running on a different core, working with the same data that happens to be on the same cache line, you now have technically two copies of that data: one in the cache for core one and one in the cache for core two. And even if each thread is working with a different byte on each cache line, you don’t have a concurrency issue here, you don’t have a data raise issue. But you do have a situation where the same data is now duplicated inside of a cache for two different cores.

Now, the false sharing comes in because of that. From your perspective you're not really sharing data, but from the hardware perspective this data is being shared. The problem with false sharing doesn’t come from reading, because if you're reading data... It’s when that data gets mutated, because as soon as one thread on one core mutates any data in that cache line, all other copies of that cache line in all other cores now have to be considered dirty. And when that other thread goes to do something on that cache line - its own copy of the cache line - and it's dirty, you don’t have to wait for a new version of the cache line to come in. And so that can create performance problems.

An example Scott Meyers uses is that somebody has created a global array of counters. So all of these counters, let’s say there's sixteen counters all in the same cache line, and you launched sixteen threads, each thread getting its own index of a counter on this cache line, and all sixteen threads getting their own core; you now have sixteen copies of these cache line of these counters in every single core, and every time one thread writes, increments its counter, all other fifteen other caches now have to be marked as dirty. And your chugging through memory because every thread that does a ++ on their counter is causing every other thread now to have to wait for their copy of the cache line to get updated. So that’s really what fault sharing is all about.

**Erik St. Martin:** \[\\00:28:22.20\\\] So an example of that would be if you had a single backing array holding all of your counters?

**Bill Kennedy:** Yeah.

**Erik St. Martin:** We see stuff like this all the time, right? So in your package, if you had a publicly exported array - or slice, for that matter - that just isn’t appended to - well, even when it is appended to... But for example you have an array of 8-byte integers that you’re using as counters, so your example would be if each one of the threads using those were scheduled onto different CPUs or cores, that incrementing any one of those would cause all of the caches to be blown out for that particular cache line.

**Bill Kennedy:** That's right. Because from your perspective you're not caching, but from the hardware perspective you are. Because every core has its own copy of that same exact cache line.

**Erik St. Martin:** I guess this kind of echoes back to your data-oriented design right? Because if you’re keeping all the data locally that you’re working with, they wouldn’t be grouped together somewhere else, right? Because the counters don’t make sense together, they make sense in their individual...

**Bill Kennedy:** So the solution to that is, since every Go routine’s stack in the stack frame - in that particular case for any Go team - is going to be in its own unique cache line, the solution to something like that would be to perform your counters on a local variable. That would be on your cache for each thread in that case, and therefore every time each thread performs a ++ it's on a unique cache line. And at the end of that algorithm, you might perform one last write to the global, and that’s not gonna hurt you. That’s a one-time boom-boom-boom-boom. So data locality, when we’re talking about not just reading but writing, can also add a huge help in terms of being sympathetic with the way the caching system works.

**Erik St. Martin:** So if you had to pick just a couple takeaways for everyone, things to be cognizant of when developing, to start at least a journey of being more sympathetic to the hardware, what would those be?

**Bill Kennedy:** I tell everyone, if you’re not sure how to do something, ask the question around what is the most idiomatic way to do this in Go. Because many of those answers are already tuned to being sympathetic with the operating system of the hardware.

The next thing I tell people is if you’re working with data, try to work with slices of values as your initial load of data. You can share different elements of those slices, but the core data you’re working with, we try to keep it as contiguous as possible. It’s not going to be perfect because you're going to have strings, and you're going to have reference types of high pointers to things, but the compilers are tools; it’s gonna do its best that we work with it to help us there. And try to think about if you're working with very large sets of data, what are the working sets that you might be working with at any given time? Try to keep that together and really try to avoid, when you can and when its practical, things like link lists that are not gonna really help you create predictable access patterns. There are times where whatever you’re doing, the algorithms that you’re trying to build are just not gonna be practical for arrays and linear traversals and things. That is what it is. But I think a lot of times you can lay that data out in a way and work with in a way where you can gain these sympathies that still implement the algorithms that you're trying to implement.

**Brian Ketelsen:** \[\\00:32:00.02\\\] So what about laying out your data at a lower level? I know when we talked about this a few months ago when you came to visit us in Tampa, you talked about the size of the structs and keeping them within word boundaries. How does that affect processing speed?

**Bill Kennedy:** I’m not really sure if I said that... If the struct is data - to me when I look at a struct, I look at it in two different ways. What I'll ask is does this struct represent my pure data or is it a struct that’s gonna be some sort of concept like a pool of goroutines; I’m creating a pool of goroutines. I’m gonna create multiple instances of this thing. It's \[unintelligible 00:32:39.07\] work. That’s one thing. But if the struct is gonna be pure data, then the size of that struct is what it needs to be, whether it’s 4k or its 24 bytes - it is what it is. But what I’m looking at then is the concept of patting. If it’s pure data where I’m gonna create a hundred thousands of these structs and even lay them out contiguously in memory, I don’t wanna lay the fields out in such a way where I’m going to get extra patting bytes in between, that’s gonna cause me now to have to use more memory than I need to. But that’s only when the struct, in my view, the struct is really pure data. Other than that, I wanna lay fields out on a struct that makes sense organizationally to what that struct is doing.

**Erik St. Martin:** I was just gonna say, so one of the things that I think might come into play there if you look at structs, is if the struct is large enough where it doesn’t all fit in a cache line, if you’re using properties at the top of it and at the bottom of it, you could keep going out the cache line, as you're just doing typical work. So I think sometimes it might come into play to organize your struct in a manner so that the things that are often used together are grouped together to ensure that they align properly, but this gets into like going in-depth into performance optimizations, and sometimes it’s a little too far, right?

**Bill Kennedy:** That could be a level of micro-optimization. If these structs, let’s say they do spend over 64 bytes, they're still being laid out across two cache lines, right? And the next one might be laying into the next one, so you might still see the same sympathies anyway. If you start mutating these things, then we go back to the fault sharing issues.

You know, the hardware today is designed to copy data really, really fast too. And so I tell people don’t panic because you think you’ve got a struct that’s too large to copy and now we're just gonna start sharing it everywhere. Until you do some performance profiling you don’t really know. So I’d rather the code be really reasonable around what we’re trying to solve and not start thinking about performance as you’re writing the code. We can always go on performance and profile it later. And then we just make the side that "You know what? Yeah, this was too large to make copies of based on how we're using it, and it was better performing and sharing this across these program boundaries."

**Carlisia Pinto:** What are some easy things to do, some easy rule of thumbs that can help people achieve this data-oriented design, thinking about grouping data that you’re going to use together in the same place? When you set out a program, how do you think about these things?

**Bill Kennedy:** I really believe that every problem we solve is a data problem with some data manipulation. So the very first thing I’m doing on projects is I’m asking what is the data that we’re working with? What is my input? And what is it that we’re trying to achieve? Where are we trying to get to? Here’s my input, here's my output and then we could start thinking about how we’re gonna get from here to there. \[\\00:36:02.28\\\] And sometimes these are really complex problems. We've got to break them down into really, really small attainable smaller data transformation prompts, and for me when I start thinking about what does this data look like, it's some of these pure data, it's some of this more constructs around how we wanna do the manipulations, and then things like Eric and Brian were already saying - well, we know that this is gonna go across maybe multiple cache lines. Is it pretty large data? Can we group the working sets together? These types of things.

I don’t get completely paralyzed over it, because we have to solve the problem. If you don’t get something to work, almost you can’t do any of these. You gotta get something to work first. But I think what's brilliant is Go is pushing us in the direction to do things fairly right the first time if we follow the idioms, if we work with slices of values, if we’re doing things the way that, as a community over the last few years, we’ve been directing people to do.

**Brian Ketelsen:** So do you have any resources for us to kind of go out and start exploring these concepts?

**Bill Kennedy:** Oh, yeah. On the Go Training GitHub repo under Arden Lab/GoTraining. I actually have a folder in there called Reading where I've got a ton of links that I've kind of pulled out for people to read, and there's a whole section there around CPU caches and the Linux operating system and how the scheduler works and things like that. I made it throughout the training material for each section. there’s a ton of links and resources to learn more. So everything that I know comes from these videos and articles and I’m always re-reading them as well. Cause there’s so much there... It takes me sometimes a couple of months to absorb some stuff and then I’ll go back and read it again and get more. So yeah, it’s all out there and I’ve tried to create a good collection of this stuff, and it’s all there in the training repo.

**Erik St. Martin:** Alright, I have a little bit of a change of subject. There’s a grassroots movement going around. I’m not sure if you’re aware of it, but there are several people that are talking about cosplaying as you this year as GopherCon. Did you know about this? Could you give them some advice on maybe on where to find the hat?

**Bill Kennedy:** Say that again, they want the hat?

**Erik St. Martin:** They're looking to dress up as you this year at GopherCon. Several people have mentioned it.

**Bill Kennedy:** The hat is too expensive to be played in that game. \[laughs\]

**Erik St. Martin:** Alright. I’m gonna put this out there, free beer for anybody who comes dressed as Bill Kennedy.

**Bill Kennedy:** Oh my god. \[Laughter\]

**Bill Kennedy:** Free drink tickets all night.

**Erik St. Martin:** I will even steal the real hat and give it to you. \[Laughter\]

**Carlisia Pinto:** If that's all you're missing.

**Erik St. Martin:** Oh, that’s priceless.

**Brian Ketelsen:** So we know you’re a busy guy, Bill. You’ve got workshops going on at GopherCon, you’ve got the book going on... Is there anything you wanna tell us about any of those things that you've got going on other than your training?

**Bill Kennedy:** The trainings are always really exciting and I’m really excited to be doing a \[unintelligible 00:39:08.22\] workshop on the 3rd day of GopherCon, but I think one of the things I’m really excited about right now is Carlisia and I through GoBridges started the remote meet up platform, and we’re putting an all-star lineup of speakers together right now that will start speaking in June and July. It's gonna be awesome because it doesn’t matter where you live, everybody's gonna be able to come together, and the BigMarker platform is really amazing in terms of being able to have a collaboration. The real goal for us right here is not for GoBridge to have a remote MeetUp but for anybody, no matter where they live, to be able to start their own MeetUp, to be able to find the speakers and the things that they're interested in and have a MeetUp even if they're the only person that lives in this small town or remote area of the world. Start a MeetUp, find people who have similar interests, find your own speakers and start to meet. You know, I’m really hoping that we can see another 10 or 15 Go MeetUps by the end of the year, all being driven around this idea of a remote MeetUp.

**Brian Ketelsen:** \[\\00:40:19.17\\\] That’s neat idea.

**Erik St. Martin:** Yeah, Brian and I commonly don’t make it out to the Tampa one. I mean time gets the better of you, so...

**Bill Kennedy:** Right, I know so many people that come to me and they get... Even me, when I am in Miami and San Francisco’s holding a MeetUp with people that I wanna hear and I can’t get out there, it can be depressing sometimes. But what’s great about this is you're gonna be able to really start your own MeetUp and speakers from all around the world can come in and you don’t have to feel like you’re missing out. And I love the Go community. You can reach out, anybody can reach out to Brian and say "Brian, can you give a talk for a MeetUp?" and Brian’s gonna say yes. He will say yes, I will say yes. So many people..

**Erik St. Martin:** You're saying yes on his behalf.

**Bill Kennedy:** I can’t get Erik to say yes, but we’re gonna get Erik to say yes one day, too.

**Erik St. Martin:** One day.

**Carlisia Pinto:** Bill, do you wanna mention some other people that have already agreed to do a MeetUp?

**Bill Kennedy:** Yes, so we have... I hope I pronounce her last name right - Butow Tammy from Dropbox, we scheduled a talk, I haven’t published this yet. Kelsey Hightower has agreed to give a talk, too. So I’ll be publishing that very soon on the days that are there. And we've reached out to a few more people, I haven’t got confirmations yet, but hopefully they're gonna be coming in soon and we’ll publish that on our MeetUp page and we'll tweet that out. We're really like excited about that.

**Brian Ketelsen:** That’s really awesome.

**Carlisia Pinto:** Yes, and I suggest people to sign up. There is a limit of a hundred attendees, so when you see the tweets going out, just go and sign up. You don’t wanna be left out.

**Bill Kennedy:** And I have to say Compose.io is sponsoring our plus account that gives us the hundred people. We're really excited that they've stepped up and they're supporting the Go community.

**Carlisia Pinto:** Absolutely.

**Brian Ketelsen:** That’s great. They're also GopherCon sponsors, so double props to them.

**Bill Kennedy:** Yes, so that what I’m kind of focusing on now with the little time I have, trying to get enough speakers set up and really show people the power of the platform so others will come in and start their own MeetUps. At the end of the day, that's what I would love to see.

**Erik St. Martin:** I don’t think you're quite busy enough, Bill. \[laughter\] It’s not like you travel, or anything. I mean...

**Bill Kennedy:** Nah... Well, you know, I have a long time on planes. \[laughter\] I can't sleep on them.

**Erik St. Martin:** Oh, I can’t sleep in cars, I can’t sleep on planes... In general I can’t sleep, I guess. \[laughter\] I guess we’re running out of time here, but typically the way we close out the show is we like to thank open source projects that have kind of made our lives better and easier, just to show appreciation. So we'll quickly go around the virtual room here and everybody can give a quick shout out. Bill, if you’ve got one handy, you’re welcome to join.

**Bill Kennedy:** The one that I’ve been working, on because I do some work on the CORAL project, which is an open source project, \[unintelligible 00:43:26.01\] which is providing authentication and authorization. It’s all written in Node, but we've added some Go support on the client side and it’s a really cool platform.

**Erik St. Martin:** Awesome. Brian?

**Brian Ketelsen:** So, one of the projects that I wanted to shout out to speak is Go Validator. The link will be in the show notes, but if you've ever had to validate inbound data, you know how painful it is to write that regex for email validation or credit card validations. This is a project by Alex Saskevich, that collects all of the important validations that you might need to do for incoming data, and it's just a treasure trove of good validations. Even if you're against dependencies, this is one you wanna have because they're a very nicely organized list of things to validate your data.

**Erik St. Martin:** \[\\00:44:19.06\\\] Excellent. Carlisia?

**Carlisia Pinto:** I wanna give a shout out to Joe Fitzgerald - I can’t pronounce it properly. He is the one who does all the Go packages for Atom and he does an amazing job. He has go-plus, autocomplete-go, go-metalinter, tester-go... A bunch of packages. I use them all the time. He’s amazing. He's frequently on the editor channel on Gophers.slack.com, and very helpful. I love the things that he's doing for Atom. Thank you, Joe.

**Erik St. Martin:** I didn't even know there's an editor channel. These channels pop up too fast. It’s like, "Wait, there’s a channel for that? Is there a barbecue channel? There is now!"

**Brian Ketelsen:** There is a barbecue channel. \[laughter\]

**Carlisia Pinto:** There is.

**Brian Ketelsen:** Yeah, that's a silly question.

**Erik St. Martin:** So this is funny, this is kind of sidelining here... But somebody made a comment about needing a barbecue Gopher. They were like, "We should totally see whether the Ardan guys will create one for us." And there, apparently, already exists one. There is already a gopher standing at the grill, or - I forget what it looks like now.

**Brian Ketelsen:** He's standing at a grill, he’s got a cowboy hat on, he’s got an apron and he’s got the barbecue tongs, and I can tell you that the shirts have already been ordered.

**Erik St. Martin:** Where's mine?

**Brian Ketelsen:** It's in the mail, Erik.

**Erik St. Martin:** Sweet. So for me, I’m gonna thank HashiCorp. Particularly I’m using their LRUcache this week, that they have available, but many times before, Brian too - Vagrant, Vault, Consul... There’s so many of their tools that are useful, so I’m just gonna \[unintelligible 00:46:00.14\] say HashiCorp.

So we encourage everybody else to thank their open source projects through Twitter or any other social media. Reaching out is often just a good thing as Brian spoke to in I think episode one... Just getting that comment from people makes all the difference sometimes.

So with that said, I think we are out of time unfortunately, but it has been quite a fun episode. We definitely want to thank Bill for coming on the show with us. I know myself I’m gonna be digging through more of the stuff he's got in the training material, because I’ve got tons of free time, too. Right? All of us?

\[laughter\]

**Bill Kennedy:** Exactly. And thanks for having me on this, it’s been a lot of fun.

**Erik St. Martin:** I definitely want to thank Brian and Carlisia for the panel. I think this has been one of my favorite episodes. I thank everybody who's listening; Adam told us that there's like 25 plus people listening this week live. That’s crazy.

**Bill Kennedy:** Yeah, that’s great. It’s growing.

**Erik St. Martin:** Yeah. We also released our first episode, which is both good and terrible. \[laughter\]

**Brian Ketelsen:** Scary.

**Erik St. Martin:** Yeah, definitely scary. But you can get it, so GoTime.FM will redirect to Changelog's site where our first episode is hosted while the CMS is completed. By popular demand, we have started releasing episodes before the CMS is completed. So you'll find that there, and probably within the next week some more episodes will be dropping, for everybody who's impatient.

I don’t know whether the newsletters sign up is on that site, but if it’s not, it is there or will be here soon. So keep checking back to the GoTime.FM to sign back up. iTunes will drop I think in about a week and a half, something like that, because they get forever to approve... Unless they tell us for some reason they don’t like our show. \[laughter\]

**Brian Ketelsen:** \[\\00:48:05.23\\\] Not approved.

**Erik St. Martin:** So we are on Twitter @GoTimeFM when you are listening live, GoTime FM channel on Slack, you can also socialize with us. And did I miss anything? Did we get it all?

**Brian Ketelsen:** No, it was a busy episode.

**Erik St. Martin:** Alright, awesome. So with that, thanks everybody for being on the show and we'll see you next week.

**Brian Ketelsen:** Bye.

**Carlisia Pinto:** Goodbye.

**Bill Kennedy:** Bye.
