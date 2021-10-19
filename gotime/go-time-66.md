**Erik St. Martin:** Welcome back, everybody, to another episode of GoTime. Today's episode is number 66. On the show today we have myself, Erik St. Martin, we have Carlisia Pinto here...

**Carlisia Thompson:** Hi, everybody.

**Erik St. Martin:** And Brian Ketelsen...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And our special guest today, who I'm really excited about, is Damian Gryski. Most of you may know him because he's always talking about white papers that I know personally I wish I understood enough to read... Before we jump into performance and fuzzing and stuff, do you wanna give people a little background on who you are, for anybody who may not be familiar with you already?

**Damian Gryski:** Okay. My name is Damian, and I've been using Go since before 1.0. I remember things like os.Error. I tweet a lot about Go, I am the moderator of the [Go SubReddit](https://www.reddit.com/r/golang/), I post a lot of stuff there, too. I like computer science researchy things, so I have a lot of repositories of papers and stuff that I've implemented. I used to live in Amsterdam, working for Booking.com, but now I am in Vancouver, working for Fastly. That's me in 30 seconds.

**Brian Ketelsen:** Do we know anybody else that works at [Fastly](https://www.fastly.com/)?

**Erik St. Martin:** I think so...

**Carlisia Thompson:** No...

**Brian Ketelsen:** I can't -- I'm trying to think of somebody, but I can't think of anybody... It feels like I should know somebody that works at Fastly.

**Erik St. Martin:** So before we kicked off the show we were kind of having our little pre-chat there, and you talked about how you did busking and magic and stuff beforehand... I actually find it really interesting, because you decided later to learn computer science, and then you went all the way over; you're like "I'm gonna deep dive and read papers and implement them, and write papers..." That's awesome.

**Damian Gryski:** Well, growing up -- I actually had this discussion with my daughter and my wife's parents... We were all talking about "What did you want to be when you grown up?" and I realized that even though there was a brief period where I was hanging out with jugglers and magicians and thinking, you know, maybe this is a cool thing that I could do (because I was 12), I started programming very early and I have a book and math stuff from when I was in grade five, six... You know, like really being into math and computers and programming and doing all that. So it's not that I totally switched, it's just like "Oh, wait a minute... Actually, this is just a better career path for me."

**Erik St. Martin:** So both hobbies, you just kind of switched which one should be your career.

**Damian Gryski:** Yeah.

**Erik St. Martin:** That's awesome. One of the things that you talk about a lot recently is performance. Let's shout a little bit about performance and when's a good time for focusing on performance; with something that's already so fast as Go, when and why does it matter to start looking at performance - all that good stuff.

**Damian Gryski:** \[04:02\] Yeah, so I guess I'll quickly talk about this perf book that I'm writing. I tend to mostly hang out in the [performance channel](https://gophers.slack.com/messages/performance) on the Gopher Slack, and one of the thing -- I was like, you know, we have so much knowledge about how to optimize Go, ways to build things and ways to work around issues in the runtime, and getting better performance out of the compiler and all that, so we should really gather all these blog posts and actually turn this into a resource to take it sort of out of 20 people's heads and into something that would be easier to share.

So I got a bunch of resources and started writing up a little bit of things, my personal thoughts about optimization and performance work; every now and then I would sort of add a little bit to it. Then around the beginning of the year I was going through my repositories and I noticed "Oh yeah, there's this [perf book](https://github.com/dgryski/go-perfbook) here." It's kind of stalled a little bit... So I made some dumb tweets-- clearly, the reason that this hasn't taken off is because it's not called "Awesome GoLang performance!" and is now on the front page of Hacker News... And that tweet actually got a whole bunch of retweets, and I got like 200 stars in like 24 hours. I'm like, "Wow, okay... Clearly, this project that I had that was kind of sitting around - people do actually care about it."

I ended my GitHub streak before I moved from Amsterdam to Vancouver, just to give myself a little bit more time, and now I'm thinking "Well, maybe I will spend 2018 working on this performance book." So that's kind of where a lot of my free time has been going. I'm up to like 5,000 or something and I haven't actually even gotten to any of the Go-specific optimization stuff... Just all my other thoughts about performance and optimization and all that stuff that is really appliccable to anything that you're building and want to make fast. So that's with the history of this perf book thing...

**Carlisia Thompson:** So your thoughts on performance - do they come from you exploring and experimenting, or they come from experience with a previous production-level application or a combination...? I just wanted you to talk about this, because I'm thinking "Why would people be motivated to explore different ways of measuring performance?", or is it not even a worthwhile endeavor and they should maybe (for example) just read a book or look for what's out there? How should people approach that? To get to answer that question I guess I'm trying to assess how you approach going into this.

**Damian Gryski:** One of the things that I enjoy doing is obviously reading computer science research, and most of that is "Here's a better algorithm for doing this thing", and exactly how you measure better varies - sometimes they are faster, sometimes they are more accurate, sometimes they use less memory... The question is how do you apply that and how do you actually determine if this is a worthwhile paper not just from a theoretical standpoint, but actually from a practitioner standpoint... The way I actually want to implement this and put this into production. So I think my interest in performance really comes from wanting to apply computer science research in a way that makes sense.

\[07:52\] As to who should be interested in performance - it really varies; it depends on (I'm gonna say) where you are in the stack. I think if you're building infrastructure, then necessarily performance I think is a little bit more important for what you're doing, because there are more things that are sort of building on top of you, and you kind of want to be as fast as possible because at the upper layers their speed will be -- they cannot be faster than you are, and if you are very slow, then that kind of limits how fast they themselves can go.

If on the other hand you are doing something that is purely customer-facing or maybe a different kind of infrastructure, maybe you don't actually care about performance because your goal actually is shipping, right? Your goal is "I just need to get this out and I need to be customer-focused, and you know what? They're not gonna notice if it takes 500 milliseconds or if it takes 2 seconds. My goal is to improve on usability" or "My goal is to improve on adding new features, or making things better in that way", so performance really shouldn't be your primary thought.

**Brian Ketelsen:** So what percentage of Go developers do you think need to care about performance?

**Damian Gryski:** That's gonna depend. I see a lot of people -- so for many people the move to Go and the move away from an interpreted language like Perl or Python, or even a very fast language like Node.js, the switch to Go is enough. You say "Yeah, Go is twice as slow as C", but on the other hand, Perl and Python, which are like 30 times slower than C, all of a sudden by going to Go you are now 10 or 15 times faster. That's simply by switching technologies.

So for most things that people are doing, if you're in what we would call a traditionally slow language, then moving to something like Go probably is enough. It's really the places where you're doing things where you need to be smarter about what you're doing where you need to start thinking about performance. I would say, again, at least with my experience at Booking.com, which is a huge company - you know, lots of developers, massive codebase... How many of them were focusing on performance? How many of them needed to be focusing on performance? You know what, it really kind of varies, but I think that the most important thing is what is the software that you're doing doing, and is it doing it well enough, is it doing it fast enough? Is it using a reasonable amount of memory? And I think for most people the answer is "Yeah, it's doing fine."

So it's really a very small amount of people that actually need to focus 100% on performance and really get those last 10% or 20%, or 1% or 2%, to sort of grind the cycles and really get the hardcore optimization. Everything else is -- I mention this in the perf book, I say "Basic tips for writing not slow software - choose a reasonable data structure", and that's basically like "Don't be dumb." \[laughter\] And then tips for writing fast software is "Okay, here's actually what we're gonna do, and this is how to minimize GC allocation. Here's how to optimize GC performance, here's how to really work around some of the issues with the runtime." But the first thing to write not slow software - just don't be dumb.

\[12:03\] If you're doing mostly key-based look-ups, use a map. Ta-da! If you need stuff in order, use a slice. Ta-da! Just choose the reasonable data structure for your data access patterns, and then that's kind of it. Then it's really -- after the program you're trying to write, you determine that it isn't fast enough. "I have an hourly report that takes an hour and a half to run" - okay, well that's clearly not fast enough. "I have this box and I have to solve this problem, but all of a sudden I don't have enough RAM. If I do the obvious thing, then I don't have enough RAM to solve it" - okay, now we need to go in and shrink data sizes, compress data structures in memory, kind of do the extra that is required. I think in almost all cases, don't optimize... But on the other hand, also don't be dumb.

**Erik St. Martin:** I'm waiting for that on Twitter - "Don't be dumb."

**Brian Ketelsen:** "Don't be dumb."

**Damian Gryski:** Don't optimize, but also don't be dumb.

**Brian Ketelsen:** It's gonna be a meme, I see it already.

**Carlisia Thompson:** I can see using "...but also don't be dumb" a lot in so many different scenarios.

**Erik St. Martin:** So once you've kind of decided that you need to optimize something, what's your approach there to make sure that you're optimizing the right thing? Do you always profile first, or do you just kind of get a gut instinct about where the problem lies?

**Carlisia Thompson:** Yeah, where do you even start?

**Damian Gryski:** So your gut instinct is always wrong...

**Brian Ketelsen:** Yeah, that's the truth.

**Carlisia Thompson:** Sorry, not mine. \[laughter\]

**Damian Gryski:** And the really good thing about profiling first is that you don't have to worry about other people who are like "Oh, this is where your bottleneck is." You say, "Well, you know what? I'm dumb, I don't know where it is, so I'm gonna profile first." So the people who are too smart to profile - you can just ignore them.

So the whole point is you have to profile because your guesses are always wrong. Modern systems have in general so many interconnected pieces that if you say "Well, I think this is the thing that's slow" maybe you're right - and that's great, your profile will confirm your guess, or maybe you're wrong, and then your profile will tell you where you actually need to speed things up, and then you won't have wasted time on optimizing something that isn't gonna make a difference to the runtime.

**Erik St. Martin:** I think sometimes your guess might be right as to "where", but "why" might be wrong, right? Like, "Oh, well this particular function or section of code is slow", but you think it's actually the instructions, when really it's the GC that it's causing, or things like that.

**Damian Gryski:** But the profile will tell you where your bottlenecks are, and Amdahl's Law tells you to focus on the bottlenecks, because that really limits how fast your program can go. If my program is slow to start up, but that's only 2% of my application, if I make that twice as fast - great, well now that's 1% of my application, so that's 1% of my total runtime, which maybe isn't that big a thing.
If I have a hot loop that profiling tells me "Here's this hot inner loop, and this is taking 80% of your runtime" - if you can make that only 10% faster, that's will end up being a much more significant chunk of the total runtime of your program, so that's where you should focus your efforts on, and I think that's the other advantage of profiling, because it says "If you speed up this thing here, this will make the biggest bang for the buck."

**Carlisia Thompson:** \[16:02\] That's a very good point.

**Erik St. Martin:** I forget where I heard it from, but somebody was saying about when you profile, something like "Focus on the biggest box first, and then everytime you make a box smaller, focus on the next biggest one."

**Damian Gryski:** Yeah, because those are basically the bottlenecks, right? That's saying "This is where your program is spending time." So either you want to take that thing that is slow and either make it faster by choosing a different algorithm, instead of program-tuning and switching things around... Or at a larger level you say "Well, why is that box there at all? Maybe I can just do something to not have this thing called as many times."

So your program is doing either something that is not that slow a lot of times, or it's doing something that is slow, and so you either want to make that thing that is slow faster, or not do that thing that is slow as frequently. Those are really the only two approaches that you can take to speeding something up.

**Erik St. Martin:** Yeah, and cgo was the prime example of kind of like that expensive call thing, right? So if you can call into C less times, you can make cgo calls a lot more efficient.

**Damian Gryski:** And this is where you get into things like batching. I don't wanna have to call into cgo every single time to do this, so I'm going to create an array of a hundred of these things and then pass them all into cgo, so I only cross that border once.

**Carlisia Thompson:** In your book are you going to list strategies like that, too? Like, which strategies to handle - or even avoid - performance issues?

**Damian Gryski:** Yes... So like I said, the goal at the moment is to take everything that I know about performance optimization and in-general strategies, and then I was gonna go into Go-specific things, like how to use pprof and the different profiles, and how to write benchmarks and how to read pprof output to know where it is you need to optimize... Stuff around processor-level fixes, so things around cache lines, and padding, and concurrent access -- like, if you have a lot of goroutines, sort of how to speed up accessing the same data structures, maybe branch predictions... So really kind of like low-level stuff that comes in. I was gonna go into garbage collection, minimizing allocations, escape analysis, and those kinds of things. Other things that show up when you profile, so instead of runtime calls, all the interface conversions back and forth, type assertions, defer the bounds check elimination... So those kinds of things.

I have stuff with unsafe. Unsafe is unsafe, but it can also be fast... Stuff with cgo, some stuff with Assembly, because obviously sometimes that is the way to speed things up, but not always; I have cases where writing something in Assembly has made like a 10x performance improvement. I've had a case where it made zero performance improvement. The code that I wrote was essentially equivalent to what the Go compiler was generating. And I've had cases where my Assembly implementation was slower, because Assembly routines aren't in-lined... So you know, just sort of talking about all those things. At the moment I have the larger performance stuff and outlines for the Go-specific sections... But hey, it's only January, so I have lots of time.

**Brian Ketelsen:** \[20:19\] The year is young.

**Erik St. Martin:** Are you looking to complete it by the end of the year?

**Damian Gryski:** I have no idea. This is my hobby, we'll see what happens.

**Brian Ketelsen:** I'm kind of hoping you'll complete it before I have to teach my next Go Performance class... Just FYI.

**Carlisia Thompson:** Which is what, next month?

**Brian Ketelsen:** Yeah, I don't know... Soon, probably.

**Damian Gryski:** Well, the first section is almost done. My general performance thoughts - those are mostly done. It could use an editing pass... But it's sort of the Go-specific things that need more writing about, and I suppose those to extent are a little bit easier to (I guess) almost crowdsource, because it's not my personal opinion. Things like "How do you use unsafe?" Well, there's one obvious way to use unsafe to do these things, so they're just kind of almost a tutorial section. I think some of those and the later chapters are more tutorial sections, and those I think will be easier to write in a sense, because you just have the things you want to write about and then you write about them.

The first section about when to optimize and basic strategies for optimization that are at the bigger conceptual level - I think that's taken me a little bit more time, because it turns out I've been doing programming a lot time, and I've read a lot on software engineering and performance optimization and I've done a lot of software engineering, a lot of performance optimization, so it turns out apparently I have a lot to say. I had no idea until I started writing it all down.

**Brian Ketelsen:** \[laughs\] Are you enjoying it a lot?

**Damian Gryski:** I am, actually. It's kind of good to get it all out of my brain and say "Oh yeah, here's another interesting thing." And I think because I've had a lot of these discussions over time with people in the performance channel - so it's nice to be able to say "Look over here for my opinion on this."

**Erik St. Martin:** Yeah, we should mentione that too, that on the Gopher Slack there is a performance channel.

**Damian Gryski:** That's mostly where you'll find me.

**Erik St. Martin:** Here's a question, too... So one of the things you talked about in the beginning is using data structures and algorithms that are best served for your access patterns and stuff... That's awesome if you have a huge vocabulary of them, right? So how would you recommend people get more familiar with more data structures and algorithms, so that they can kind of have more to choose from? Or do you recommend just kind of going with your first pass being kind of how you imagine it, using kind of standard things that are offered to you by the language and then finding more efficient data structures later?

**Damian Gryski:** I think that really there are only a small handful of data structures that most people need to use on a day-to-day basis, and luckily, for the most part, they're built into Go already. So you know, I have a slice, because I want--sort of, you know--order one append and I need a random access, or I need to be able to iterate things in order, or whatever. Or I have a map, because I have some sort of key-value look-up. And that really should cover almost everything that most devs want to do, and conveniently that's why they're in the language.

\[24:02\] A lot of them that are esoteric data structures have very specific use cases, so you don't need to actually know how to write them, but it's helpful if you know that they exist. I think that's -- how did I learn them? Well, my background is -- I have a computer science degree, and it was from a very theory-heavy university, so I cracked open the books and I did all that work. Does everybody need to do that? No, probably not.

How do you learn more about data structures? Pick one that you're interested in, but really the number that most devs need to know I think is very small. It's nice to know how a binary search tree works; it's nice to understand the guarantees that an [AVL tree](https://en.wikipedia.org/wiki/AVL_tree) or a [red-black tree](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree) give you, versus a regular [binary search tree](https://en.wikipedia.org/wiki/Binary_search_tree)... But if I was actually implementing those, I wouldn't use either an AVL tree or a red-black tree, because they're both a huge pain to implement, because they're really kind of annoying... And a [treap](https://en.wikipedia.org/wiki/Treap) gives you basically the same performance and is way easier to implement. So if I needed something that couldn't be solved by a slice or a map and I needed the--sort-of, you know--like log n, in-order guarantees that a tree structure will give me, then I would personally go with the treap, because they're just simpler. But you kind of need to know the holes that the data structures that you have don't fill. There's so many data structures out there, so pick some of the main ones and learn those.

**Erik St. Martin:** So what are some that -- maybe pick like two or three that you think if anybody had to wander off the beaten path might be interesting ones to know. Or your favorites, for people that don't have a list of data structures; what are some favorites or top ones you think people might go to?

**Damian Gryski:** I think heaps are very useful, because that kind of thing shows up frequently. [Bloom filters](https://en.wikipedia.org/wiki/Bloom_filter) I think are super cool.

**Erik St. Martin:** Oh, yeah...

**Damian Gryski:** Especially when you're doing performance work, that ability to quickly say "Do I have to do this thing or not? Do I need to do this extra amount of work or not?" Bloom filters are really cool and show up as a component of a lot of systems. For example, there is a cache eviction algorithm that I've implemented called [TinyLFU](https://github.com/dgryski/go-tinylfu), and as part of this cache, it has a teenie bloom filter that basically says "Have I seen this before? If I have seen it before, then I might see it again, so add it to my cache. But if I haven't seen it before, then don't put it into my cache yet, because it might be a one-off." Bloom filters by themselves are cool, but they're really cool as a component of something else.

When I wanna talk about data structures, because I've been doing this for so long, my views are heavily skewed toward the things that I find interesting. [Count-min sketches](https://en.wikipedia.org/wiki/Count%E2%80%93min_sketch) - there's a lot of probabilistic things that are cool, that end up being simple but effective because they integrate randomness into them. Again, going back to treaps - they're very cool, really easy to implement... Look at my [GitHub](https://github.com/dgryski)--

**Brian Ketelsen:** \[27:58\] I was just gonna say, if you wanna see some interesting stuff, just go to Damian's GitHub page because it's full of amazing implementations of technical papers. Every two minutes he's announcing on Twitter that he found a new paper and then implemented it in Go, here you go.

**Erik St. Martin:** That's your slogan, "Implementing white papers, so you don't have to."

**Brian Ketelsen:** It should be.

**Erik St. Martin:** I love some of this stuff when they come around -- like when Raft came out... I love when people take these complex things and distill it down into a much simpler thing, like the fact that -- what was the [Raft paper](https://raft.github.io/raft.pdf), like 11 pages? So much easier than some of the other distributed [consensus](https://en.wikipedia.org/wiki/Consensus_(computer_science)) algorithms that were around.

**Brian Ketelsen:** Paxos...

**Damian Gryski:** I tried to read the [Paxos](http://lamport.azurewebsites.net/pubs/lamport-paxos.pdf) white paper - it's entertaining, but it's dense... And I think the fact that it's presented as this -- basically, the whole setup for the part-time parliament is "We've discovered these historical things about this island in the Aegean Sea about how this parliamentary system works, and here it is." And then the last section is like "By the way, this also applies to computers." But the whole thing I think is really dense. You can try reading it... I did. I'm glad that Raft came out, because that I could understand; I mean, I understand how Paxos works, but not because I read it in the Paxos paper.

**Erik St. Martin:** Yeah, and I think there's a bunch of Paxos implementations, and they're all implemented differently. Everybody's interpretation of it was different.

**Brian Ketelsen:** I thought I read somewhere that -- somebody who was very smart on Paxos said that he hadn't yet seen a Paxos implementation outside of Google that was correct. That wouldn't surprise me.

**Damian Gryski:** I can believe that. Another thing that's interesting, especially with talking about Paxos, is the paper that Google released talking about [Chubby](https://static.googleusercontent.com/media/research.google.com/en//archive/chubby-osdi06.pdf), which is basically their implementation of Paxos... And I guess it's the implementation of [Zookeeper](https://zookeeper.apache.org/), but whatever; Zookeeper was based off Chubby, and Chubby implements Paxos, blah-blah-blah... Talking about how the algorithm that is in the Paxos paper is only one teenie component of what you actually need to build something that you can then call a service, and there are so many weird other edge cases that were not covered in Paxos, and there are sort of bits and pieces that you gather from these other papers to try to fill in the holes... But is that sufficient? I don't know.

I think the Chubby paper is a really interesting paper to read from a software engineering point of view of really trying to put this theory into practice, and how even though these things have proofs associated with them, how the researchers and how the work that has gone into these papers is really this minuscule part of it, and trying to get everything together to build something that you can actually deploy, and the so much more extra work required.

**Erik St. Martin:** Yeah, and even if you look at Raft - Raft itself kind of explains how the consensus works, but you take an implementation of that, like [etcd](https://github.com/coreos/etcd) or [Consul](https://github.com/hashicorp/consul) or something like that, and there's so much more that goes into it... Especially when you talk about having a service that can stand the test of time; you need to be able to back-up the data and compact logs and all these things. There's so much more work than just that; that's kind of the root of it, but like you said, there's so much more engineering and problems to solve around it.

\[32:03\] Moving on from performance, another topic you are very into is fuzzing. For anybody who may not be familiar with what fuzzing is, do you wanna kind of give a rundown on what fuzzing is, and then we can get into why you think everybody should be doing it?

**Damian Gryski:** So fuzzing is essentially randomized testing. If you have some program that accepts input from the user - maybe it's across the network, maybe it's a file - fuzzing is basically "What are all the edge cases you forgot about?" There's fuzzing in general, and then there's also the [go-fuzz](https://github.com/dvyukov/go-fuzz) package that makes fuzzing easy for Go. But fuzzing in general is you generate random inputs and throw them at your program and then see what happens. The assumption is that your program should never crash. If your program crashes, then I found a bug.

Go-fuzz is a tool for Go that makes this very easy - you write a simple function called fuzz and it will generate data and call this fuzz function. Go-fuzz works with what's called coverage-guided fuzzing... So it looks at the coverage that a particular input managed to get over your codebase, and if that explored more cases - basically, it got good coverage and got into paths that a previous input hadn't, then it said "Oh, this is more interesting input, so I'm gonna keep this one and change around the bits of this input to see if I can get even more coverage."

So coverage-guided fuzzing makes it very easy to sort of narrow in on basically edge cases, things you haven't thought about. I love randomized testing. Testing is very good, randomized testing is even better, and Go-fuzz I think has essentially found crashers on almost everything I've thrown at it. So you find a repository and you say "Did you manage to check all your edge cases?" The answer is almost always no, and Go-fuzz will find them for you, generally very quickly.

**Brian Ketelsen:** Now, it would be even better if it could generate the fixes, too.

**Damian Gryski:** You should read up on the [DARPA Grand Cyber Challenge](https://www.darpa.mil/program/cyber-grand-challenge)...

**Erik St. Martin:** Oh, yeah.

**Damian Gryski:** That stuff was amazing. These are fully -- I'm probably gonna get this wrong, but basically fully-automated systems that had to both detect attacks against their code, and patch them... Basically, automatically generate patches for these programs, and I think there may have also been an attack component, I'm not sure. But seriously, google the DARPA Grand Cyber Challenge (I think it was called) and watch -- I know there's a [YouTube video](https://www.youtube.com/watch?v=SBZ29_4sAGI) that I saw, it's just like a summary about this whole thing. Some of the work that was being done there was amazing.

**Brian Ketelsen:** That sounds like a good way to kill a day.

**Erik St. Martin:** There was also a talk at Velocity New York City this year, where there were some colleges and things that have come together, and they use an AI/ML component to kind of guess what the most normal or reasonable change would be to make to a piece of code to make it accurate. I have to remember the name of that talk, and if I do, I'll make sure it goes in the show notes, but along the same lines, where we can actually feed these things in and there's only a couple of changes that a normal programmer might make to something, and it can kind of take a good guess at it. Eventually, we won't need jobs anymore... Somebody's gonna write the AI system that writes code for us, and they're gonna be very rich.

\[36:16\] Fuzzing is actually good from not just a stability standpoint, but also from a security standpoint, because generally, if you can make a program crash, you can take control of it. I mean, even at the least you can cause a denial of service on it.

**Damian Gryski:** That's less of an issue with Go obviously, because of the memory safety, but definitely if you're writing servers in like C or C++, then yeah, a crash generally means also exploitable.

One of the other things you can do with Go-fuzz is turn it not into so much looking for crashes, but to compare two implementations. So I have a slow implementation and a fast implementation, and I will use coverage-guided fuzzing to make sure that I explore all the corners of the slow implementation and the fast implementation, and then I will compare the output. If the output isn't the same, then I will crash.

Then Go-fuzz finds crashes, which means "I have found a case where the fast implementation and the slow implementation generate different outputs."

**Brian Ketelsen:** That's cool.

**Damian Gryski:** Lots of use for fuzzing outside of just pure traditional vulnerabilities.

**Erik St. Martin:** There we go, I've found it... It was called "FTFY: Research advances in automatic bug repair." Some people out of Carnegie Mellon... I will link to that. Alright, so how are we doing on time?

**Brian Ketelsen:** Well, it might be time to move into news...

**Erik St. Martin:** I think it is. First off, 1.9.3 was released a couple days ago, so update now... Submit bug reports, because we know none of you tested it while it was in beta... \[laughs\]

**Brian Ketelsen:** There isn't really much in this one. I looked at the GitHub issues and they were pretty light; I mean, there's nothing huge.

**Erik St. Martin:** Yeah, it was some minor bug fixes and stuff. There was no major security stuff that I recall.

**Brian Ketelsen:** The biggest one I remember seeing was a database connection leak, I think, and it had something to do with transactions. But overall, one of the more minor of the point releases, which is good. We like tiny little bug fixes.

**Damian Gryski:** 1.10 will be out soon. I think RC 1 is out, or will be out probably by the time you hear this not live... And I think they were targeting mid-February for 1.10, so again, that's not very far away.

**Brian Ketelsen:** Yeah, they just keep coming. It's amazing how fast these six-month release cycles go. I love it.

**Damian Gryski:** It takes them about six months.

**Erik St. Martin:** And speaking of performance, that's one of the things that I've always loved about Go, especially coming from pre-1.0. The amount of performance change is crazy, and you didn't have to do anything.

**Brian Ketelsen:** You just download a new compiler and smile.

**Erik St. Martin:** And then re-compile and you're like, "Oh, it's faster!"

**Damian Gryski:** Yee-hah!

**Brian Ketelsen:** That is awesome, and that kind of underscores what Damian was talking about earlier - if you came from a language that was already not so awesomely fast... Go was huge when I moved from Ruby. It was a big speed difference. Then I move to Go 1.1, and then 1.4, and then 1.6, and it just keeps getting faster; it's the gift that keeps on giving.

\[40:02\] Alright, I've found a project for news called Skydive. It's at [github.com/skydive-project/skydive](https://github.com/skydive-project/skydive). It bills itself as an open source real-time network topology and protocol analyzer. Now, I've gotta be honest, I really don't care about that, but the graph, the interactive little thing on their GitHub page looks really cool, and you can just dive in and look at all the different nodes on your network, and the protocols that are traveling between them. It makes you feel kind of CSI-ish, and you should probably download that just to impress your friends.

**Erik St. Martin:** Oh, that's awesome. I really wanna use this from a security standpoint... Because sometimes trying to map out what machines are taking to other machines to try to find new attack surfaces - that's wicked cool.

**Brian Ketelsen:** I'm surprised you hadn't seen this one yet; this is right up your alley.

**Erik St. Martin:** Yeah, I have not seen this. This is really cool. I've got one, too - I think we mentioned it on the show before, but there's a project called [Metaparticle](https://metaparticle.io/), which is kind of this exploration of building an abstraction over Kubernetes and Docker and all these things, and exposing them to your programming language and framework of choice, where they're kind of embedded in the language. They now have [Go support](https://github.com/metaparticle-io/package/tree/master/go), so you can now write a Go program that compiles itself -- or it compiles, and then when you run it, it containerizes itself and deploys it, and it can do crazy stuff like sharding for you automatically. You say "I wanna be spread out across two shards. Here's my shard key", and it kind of does the right thing and creates all the Kubernetes components to do that. Just super cool.

**Brian Ketelsen:** Yeah, Metaparticle is just an amazing idea, and then adding to that the idea that when you go run this application, it's gonna deploy itself to a cluster in a way that you've programmatically declared that is just really cool.

**Erik St. Martin:** Then as always the [Just For Func](https://www.youtube.com/channel/UC_BzFbxG2za3bp5NRRRXJSw/featured) stuff - there was [a recent one where Francesc does an awesome job talking through channels and nil channel](https://medium.com/justforfunc/why-are-there-nil-channels-in-go-9877cc0b2308), and why they even exist.

**Brian Ketelsen:** All of [Francesc's](https://twitter.com/francesc) videos are just so amazing.

**Erik St. Martin:** I feel like I've missed a few of them, I need to binge-watch them.

**Carlisia Thompson:** That might have to do with him being so amazing, but I'm not sure.

**Brian Ketelsen:** Possibly... I think that's a really good point.

**Erik St. Martin:** There's a slight chance, but... Yeah, Francesc is awesome. \[laughs\] Anything else? Move on to \#FreeSoftwareFriday?

**Brian Ketelsen:** Yes!

**Erik St. Martin:** Damian, you've listened to the show, so you kind of know what the \#FreeSoftwareFriday is, right?

**Damian Gryski:** \[42:58\] Sure, of course I do. I wanna give a shout-out to [@andybons](https://twitter.com/andybons) on Twitter, Andrew from the Go team who is slowly working through all the Go-fuzz bugs to get Go-fuzz integrated into the main Go tooling. I think that will be amazing. So even though it's kind of his job, I think still a cool shout-out for that, because that will make a really big difference just to getting really good testing in with Go tooling, you don't have to do anything else.

**Erik St. Martin:** Yeah, that would be amazing. Do you know roughly what milestone they're targeting for that?

**Damian Gryski:** I have no idea.

**Erik St. Martin:** How about you, Carlisia?

**Carlisia Thompson:** I don't have anything today.

**Brian Ketelsen:** Does that mean I can do two?

**Carlisia Thompson:** Yeah, that's exactly what it means.

**Erik St. Martin:** You can do three, because I've spent this whole week working on slides, so I haven't used a tool for one to kind of pop in my head right now.

**Brian Ketelsen:** Awesome! So I have to go with a fun one that I constantly use and never remember that I use, which is the [Pretty package](https://github.com/kr/pretty) from Keith Rarick. Everytime I want to debug - you know, we don't debug in my house, we just fmt.Println but KR Pretty is a package that dumps pretty much any object you can think of to the screen in a pretty format. So instead of fmt.Println, kr/pretty.println and you get a nice JSON human-readable output of all of those objects.

My only complaint is that if you've got a really big type, it parses that whole thing and goes all the way down, so you might end up with hundreds of lines of output for one type... But that's what you've asked for, because you're debugging. It's awesome, and I use it pretty much all the time.

So that's one... That one will be mine. And then for Erik, I would like to thank Richard Musiol, who's [neelance on GitHub](https://github.com/neelance). He is working really hard right now on the [WebAssembly](http://webassembly.org/) compiler for Go, and I stumbled across his Go fork that has WASM support last night. I just sat in awe, looking at how close it is to being done, and I can't tell you how excited I am about WebAssembly support for Go. That's gonna be amazing.

**Erik St. Martin:** Yeah, I actually saw that in one of the Golang Weekly newsletters, and that was -- I meant to read that, because I think all the WebAssembly stuff is just killer. Alright, so I think that's it... We're like perfectly timed this week.

**Brian Ketelsen:** Did we hit it right on the head?

**Erik St. Martin:** Yeah!

**Brian Ketelsen:** That's awesome.

**Erik St. Martin:** With that, I wanna thank everybody for being on the show. Huge thank you to Damian for coming on. All of us will keep an eye out on your perf book, and we'll be cheering behind the scenes, and I'm sure plenty of people will be willing to review it for you.

**Brian Ketelsen:** Yeah, hurry up and finish it so I can steal all your content. That'd be awesome, thanks. \[laughter\] I mean, borrow... Did I say steal?

**Damian Gryski:** I think the license allows you to steal.

**Brian Ketelsen:** Oh, perfect. Thank goodness.

**Damian Gryski:** CC BY-SA. At least that's what \[unintelligible 00:46:27.27\]

**Brian Ketelsen:** \[laughs\] "Damian wrote this."

**Erik St. Martin:** Thank you to all of our listeners. You can find us at GoTime.fm. We are @GoTimeFM on Twitter. If you have suggestions for guests or topics or you wanna come on the show, you can file an issue on GitHub.com/gotimefm/ping. With that, goodbye everybody. We'll see you next week.

**Carlisia Thompson:** Bye!

**Brian Ketelsen:** Bye!
