**Erik St. Martin:** It is episode \#27 of GoTime. Today on the show we have myself, Erik St. Martin, we have Carlisia Pinto...

**Carlisia Thompson:** Hi there.

**Erik St. Martin:** Brian Ketelsen is out today, and filling in for him today is Bill Kennedy. Say hello, Bill...

**Bill Kennedy:** Hi, everybody.

**Erik St. Martin:** And our special guest today actually taught us all how to make a lot of profit using maps at GopherCon. I'm still waiting for my check, but on the show today is Keith Randall from the Go team.

**Keith Randall:** Hello, everybody.

**Erik St. Martin:** Do you wanna give everybody a rundown - who you are, what you do specifically on the Go team?

**Keith Randall:** Sure. I work on Go runtime internals and compilers. I work on making Go faster, all behind the scenes. You don't sort of see anything I do in APIs or anything like that, but every release we make things a little bit faster and a little bit less memory, and all-around better.

**Erik St. Martin:** That's awesome. So you specifically work on the compiler and runtime?

**Keith Randall:** Correct. I sort of started out working on Go, working on runtime things like maps, scheduler, some of the type conversion stuff and so on. More recently I've been working on compiler internals, making generated code better, smaller, that sort of thing.

**Erik St. Martin:** That's awesome. Have you played a big role in SSA stuff that happened over the last couple of releases?

**Keith Randall:** Yeah, so I started the SSA backend project, proposed it, got people on board with it and sort of was the tech lead for it. I wrote the first prototype and then got a bunch of other people both from inside Google and outside to help work on it. It was released in 1.7 for amd64. For this upcoming release, 1.8, it's gonna be available on all of the other architectures: arm, MIPS, PowerPC and so on. I think maybe even there's a SPARC one coming, I'm not sure whether that's gonna make 1.8.

**Erik St. Martin:** Oh, nice.

**Keith Randall:** Yeah, and the performance we get on x86, it was something like 20% better. It very much depends on the application, but we're getting on average about 20% better, mostly because the x86 chips are really good at executing bad code, so you really have to do a good job of making better code before you can see the performance improvements. We're getting something more like 40% better on ARM chips, which are not as good as hiding the old bad code. I think it turned out pretty well overall.

**Erik St. Martin:** Yeah, and ARM needs the love even more, because ARM typically doesn't have the clock rate that an x86 chip does.

**Keith Randall:** Right, absolutely.

**Erik St. Martin:** Those performance improvements help a lot.

**Keith Randall:** And the performance improvements help save power, too. That's also a big thing.

**Erik St. Martin:** Yeah, that's true as well. We should probably circle back a little bit to when we talked about SSA and maybe give a brief explanation of what SSA is and why that benefits us to have the compiler leverage SSA.

**Keith Randall:** Okay. I guess at first it'd help to describe what the old compiler was like. The old compiler used to take the abstract syntax tree of a Go program and would generate code sort of node-by-node on that syntax tree. If there was a plus, it would load both arguments into registers, do the plus and then store the result somewhere.

\[00:04:02.17\] It would do that one at a time on the nodes of the syntax tree, with no look ahead, very little look behind... The code it generated wasn't very good, because there were a lot of moves you didn't need, there were a lot of operations that if you did that same add twice, it would execute that add twice instead of reusing the result.

So SSA instead takes the abstract syntax tree and builds a control flow graph, and a value graph. And then we can do all sorts of optimizations on that graph, like common self-expression elimination, we can do bounds check elimination, we can do better scheduling, dead code elimination, all that sort of stuff - all of which benefit the generated code and make it better than what was generated previously straight from the abstract syntax tree.

SSA compilers have been around for a while. I know I've worked on one 15 years ago, so it's a pretty mature compiler technology. GCC uses it, LLVM uses it... It's a pretty common compiler technology. This is not sort of a researchy thing; SSA is known to be a good way to generate code for compilers. We need to get Go up to speed so that we can compete with the other languages.

**Bill Kennedy:** I've got a quick question, because I've always tried to visualize these things that are going on... So this piece is happening inside of the compiler; is this helping to generate that intermediate assembly? Is that kind of where this is? Where in the toolchain between the compiler, the assembler and the linker is all this sitting?

**Keith Randall:** Fair enough. So when you start with Go code, there is a parser that basically takes that Go code and makes an internal in-memory representation of the abstract syntax tree. From there, SSA takes that abstract syntax tree and generates assembly code, that is actually sort of an in-memory representation of the assembly code. It's sort of semi already assembled, and then that gets passed to the linker and the code generator from there. Basically, the input is an abstract syntax tree and the output is an in-memory representation of assembly.

**Erik St. Martin:** Okay, so this would actually be an IR... Bill and I were actually kind of having this debate before the show - the difference between an intermediate representation and an intermediate language. And the best I could come up with is that an intermediate language is actually produced code, whereas IR is typically in-memory data structure, but I could be completely wrong there, too.

**Keith Randall:** Yeah, I don't think I've ever heard the term "intermediate code"...

**Erik St. Martin:** Or intermediate language.

**Keith Randall:** Yeah, or intermediate language... I don't know. It's a good question. So LLVM has something which maybe I would call an intermediate language; it's an actual textual representation of the IR.

**Erik St. Martin:** Yeah, that was my interpretation of the difference between the two. I've always heard IR, and then Bill said IL this morning and I was like, "Hm..."

**Bill Kennedy:** I think I got that from the .NET side of things over there... They have a whole intermediate language over there between what the C\# compiler is producing, if I remember...

**Keith Randall:** Yeah, I believe it's like Java, they have some sort of bytecode thing, right?

**Bill Kennedy:** Yeah. The SSA is really interesting, I was just always curious if it came before or after the assembler, or somewhere in between.

**Keith Randall:** Yeah, so there's no assembler when that Go compiler runs; there's no assembler used.

**Bill Kennedy:** Oh, okay.

**Keith Randall:** The thing that's generated from the compiler is already essentially equivalent to what the assembler produces when it parses assembly.

**Erik St. Martin:** Oh, interesting. So basically there's only a linker after that, right? There's no intermediate assembly stage.

**Keith Randall:** Correct.

**Erik St. Martin:** I think Rob Pike did a talk about that at GopherCon, where he was talking about the fact that there's a shared layer, there is an assembler, and there is the compiler, but there's like an object or some kind of library that's used between the two.

**Keith Randall:** Right.

**Erik St. Martin:** \[00:08:02.22\] It was a while ago that I saw the video. I didn't get to watch the talk while I was there, but I remember vaguely that there was no assembly stage in the compile process.

**Keith Randall:** Right, we go directly from the compiler output... It generates something called the obj library; it generates basically one structure for every assembly instruction that tells you what the register inputs and the register outputs are. And then actual instruction selection, like encoding the bytes of the instruction, is done by that obj library. The compiler itself doesn't emit bytes; it emits these data structures one per assembly instruction.

**Erik St. Martin:** Oh yeah, so it doesn't... Because in a typical approach the compiler would emit assembly instructions, and then those would then get turned into the actual machine code by the assembler. So you're saying that that obj library converts the IR directly into the machine instructions by using kind of internal data structures.

**Keith Randall:** Exactly, yeah. So our assembler is really just the parser. It doesn't assemble in that sense. The obj library, which is part of the linker (sort of) is the thing that actually does instruction selection from the internal representation.

**Erik St. Martin:** Interesting. I need to start playing with compiler internals. \[laughter\] It's a little below where I usually work, but it's really interesting. So looking at the changes -- and I know that a lot of the work that you guys have been doing has been making it easier to port to new architectures on the backend as far as the assembly and stuff goes, now what about the compiler backend itself? In theory, is it reusable, kind of like JRuby and Scala are built kind of on top of Java bytecode?

**Keith Randall:** The new SSA backend is very easy to port. There's just a machine description file that has all the opcodes you wanna use, and a bunch of read/write rules that tell you how to get from machine independent IR to a machine-dependent IR.

As far as the compiler itself, whether you can embed a compiler in some other program, it's not directly reusable, although it's certainly more reusable than the old compiler, and that's the direction we're heading - to get to the point where we could - if we wanted to - make the compiler a library.

**Erik St. Martin:** I don't think I have a direct use case for that, but it's just interesting to kind of see these different languages build on top of things that other languages have done, and kind of leverage that stuff where there's shared resources, so if somebody wanted to make their own spinoff of Go that has some wanted feature, that not necessarily is gonna be brought into Go proper just yet because of the Go 1 compatibility guarantee or something - maybe they could do like a spinoff that has it in there, but leverage all the same compiler logic.

**Keith Randall:** Yeah, that would be nice.

**Bill Kennedy:** I was curious, we constantly talk about how fast the compiler is and how we're trying to bring it back down to that when it was written in C, but optimization's also really important, so how do you guys strike a balance about how much optimization the compilers do, as opposed to how much time that would take?

**Keith Randall:** It's a good question. There is a tradeoff there, and at some point we're gonna have to say no - and we have said no - to optimizations that just would take too long otherwise... Like alias analysis; we haven't done any yet, and we're sort of scared to go down that route because it can be very expensive.

\[00:11:42.18\] The original goal of the SSA compiler was we wanna make the compiler generate code that's better enough that the compiler gets no slower because we compile the compiler with the compiler. So we sort of wanna buy back all the extra time we're spending by making the compiler faster, and we didn't quite get there for x86; SSA added something like 30% or 40% to the running time of the compiler, what made the compiler 20% faster. So we sort of lost out on 10%-20%. But on ARM it totally works out; we get 40% back by compiling the compiler with the SSA backend, and then we spend 40% extra time, so the compiler is actually no slower with SSA backend than it used to be on ARM.

**Erik St. Martin:** I always love how meta that is. \[laughter\]

**Keith Randall:** It is very meta. It's hard to describe.

**Bill Kennedy:** Are there optimizations that - I guess once all this SSA stuff is done - you'd like to see maybe going forward?

**Keith Randall:** Sure. We got some of the major ones, like common self-expression, which are very important. There are ones that we could do that sort of are more domain specific. We could certainly improve our generation of floating-point code, for example. We could do a better job at bounds check elimination. We could do some simple alias analysis that would get rid of some variables that would otherwise have to be stored on the stack - we could put them in registers.

There's things like that, but at some point we're gonna reach diminishing returns; it's not worth the extra effort of coding, it's not worth the extra runtime with the compiler to do those sorts of things. Then at some point we're gonna have to declare that we're done, or at least we're done unless someone comes up with new ideas.

**Erik St. Martin:** There's always "more better."

**Keith Randall:** That's true, yeah.

**Erik St. Martin:** I think there's the fear that there's an end, but it's just like any goal in life - by the time you get anywhere close, you've drawn the line out further, right? There'll be something else that comes up and you're like, "We need to do that!"

**Keith Randall:** That's true. And there's always people filing bugs, saying "Hey, my program is not as fast as I think it should be. You guys should fix this." I have a stack of them that I have to look at. So yeah, there will always be complaints; it's just a question of, you know, there's limited manpower and there's limited compiler running time, so you have to be judicious about what you attack.

**Erik St. Martin:** Yeah, I guess that's the tradeoff, too. It's the same thing with the language. The whole thought process behind the language is how do we provide everybody what they need without providing them too much, and it's the same thing with the compiler. How do you do everything you need to do but without having slow build times.

**Keith Randall:** Right.

**Erik St. Martin:** Every time I have to compile a C or C++ app I wanna email all of you and thank you. \[laughter\] You forget, and then there's one day you have to work on something and build it and you're like, "Oh, this is so bad."

**Keith Randall:** Yeah, I had to download LLVM at one point and build it and it took like two hours. Like, how is this possible? I mean, I'm sure there's some incremental thing which you could do better if you're a developer, but from scratch it took like two hours to build.

**Erik St. Martin:** I remember doing this on processors less than a gigahertz. I remember upgrading GNOME or KDE back in the day, you'd let it run over night.

**Keith Randall:** Yeah, I don't wanna go back to those days.

**Erik St. Martin:** And the 56k modems... I don't wanna go back.

**Keith Randall:** Our house at home just got upgraded from a 2 MBits connection to a 6MBits connection, as we live in the boonies and we're too far from the central office for anything good. But just the jump from 2 MBits to 6 MBits has been awesome.

**Erik St. Martin:** It's like life-changing.

**Keith Randall:** It is. Now more than one person can watch a video at a time in our house, so we're not hitting each other over the head whenever anyone else is doing anything that's ruining our videos.

**Erik St. Martin:** It's not fighting over "Who can use the bathroom to brush their teeth first", it's "Who gets to watch their movie."

**Keith Randall:** Yeah, exactly.

**Erik St. Martin:** Like, "You watch cable, I get Netflix today!" So what's next for the compiler, what's exciting? What do you have planned for the next couple releases?

**Keith Randall:** \[00:15:58.08\] Let's see... One of the big things that's coming - or will, if it works out - is we're gonna change the calling convention. Right now when you call a function everything gets passed on the stack in memory, and everything gets returned on the stack. That's pretty inefficient, but it makes things like walking the stack and finding all these GC routes and things like that very easy. So we're looking at passing values and registers and returning values and registers instead.

It's sort of a big project. It's not terribly hard coding-wise to get the compiler to generate that code, but it has a lot of implications for the runtime and it has a lot of implications for... Like, everyone who's ever written assembly would have to change their assembly, so we're sort of looking at how we roll such a thing out to make it so that everyone doesn't have to rewrite all their stuff all at once. But we think it could buy another 10%-20% in runtime, so that's one big thing.

**Erik St. Martin:** How much assembly would you say exists in the Go standard library and runtime?

**Keith Randall:** The standard library might have 10,000 lines of assembly...

**Erik St. Martin:** Wow.

**Keith Randall:** It's not huge, but there's a lot of stuff for all the... BigInt has a lot of assembly, all of crypto stuff there's a lot of assembly, and then you could put assembly in your Go project, so there's probably all kinds of stuff on GitHub that we don't even know about that has assembly. That's the stuff I'm worried about. We can fix the runtime and the math and whatever else ourselves, but the problem is someone out there has random assembly that they're using in their project and you don't have control over when they change that assembly, and so on.

We're currently thinking about how we might roll such a thing out if it ends up working out.

**Erik St. Martin:** Yeah, that almost feels like it's gonna have to be some sort of phased approach where there's like at least a release or two to kind of give people time to convert.

**Keith Randall:** Yeah, and we were thinking about... You know, the current assembly, when we switch to a new calling convention, we can then generate stubs for all the old calling convention things, and then you can sort of opt in to get the new calling convention and we'll remove the stub as you change your code. Something like that may have to happen.

**Erik St. Martin:** Right.

**Bill Kennedy:** Do you work on any of the escape analysis stuff for the compiler too?

**Keith Randall:** I've touched escape analysis, yeah. I am not a major contributor to it. David Chase did a lot of the most recent stuff.

**Bill Kennedy:** Okay. There is a document that Dmitry put out a little over a year ago on some of the escape analysis flaws and I was curious how much of this has been worked on over that year, and if there's any update to what's left.

**Keith Randall:** I don't know, that's a good question. I know that it's another one of those never-ending rat holes you can go down, trying to get every last case that people care about. I don't think anyone's been working on it seriously for the past year. Maybe fixing obvious bugs and things, but there's been no concerted effort to cover the remaining gotchas and so on.

**Erik St. Martin:** I have a question for you. We actually have a C++ app that requires real-time thread support. Over this past week we were kind of joking about, "Would that be something we could ever rewrite in Go?" Basically it takes MPTS streams - multiplexes, multiple MPEG video streams together, and to keep the timeline (because it's a linear video) it requires real-time threading. So this was actually kind of like a thought experiment, and I was thinking to myself, you could in theory use syscalls to set a thread to real-time priority and lock OS thread to keep the goroutine running in that thread. But I'm wondering what other implications might need to be accounted for inside the runtime, in order to get actual red priority support.

**Keith Randall:** Yeah, it's a good question. I think it should just work. If you take a goroutine, lock it to a thread and tell the OS "Give that thread high priority", that should just work. You'll get pauses when GC starts and stops, but those have been getting quite low recently, and I can't think of any other reason why you wouldn't get all the cycle time that the OS is gonna give you. Yeah, so that should work.

\[00:20:06.17\] As long as your program is single-threaded, once you try to use multiple goroutines to do that, I'm less confident it would work out of the box.

**Erik St. Martin:** Yeah, this would be multiple threads with different priority, because you basically have some threads going out to fetch new segments of video and audio, and then you kind of have your real-time thread responsible for keeping your timeline and multiplexing the package together and dropping them, and accounting for network jitter and stuff like that. So yeah, it would definitely be multi-threaded.

I might have to whip up a silly example of something like that to see whether I could get it to work and whether it falls flat. Before it wasn't even a consideration because of the garbage collection time, but now it's nice to see that we're kind of in a point where that's not the most complex part of it. It's really the fact that goroutines by nature aren't really their own threads... Which is to most people's advantage, but in this case it's much harder.

**Keith Randall:** Right. Yeah, goroutines don't exist as objects to the users, so you can't set priorities and things like that on goroutines. That's sort of a deliberate design decision, that they're anonymous, so you can't do things like wait for goroutines to die and things like that.

**Erik St. Martin:** Right.

**Keith Randall:** It makes the runtime all that simpler, but it makes things like real-time a bit more difficult.

**Erik St. Martin:** But in those use cases, I'll take it. You can use Go for almost anything, except for a couple of these odd use cases that not many people have to worry about.

**Keith Randall:** Yeah, exactly.

**Erik St. Martin:** Alright, so we're gonna take a quick sponsor break, and then we will jump back on with Keith.

**Break:** \[00:21:47.04\]

**Erik St. Martin:** Alright, we are back. Carlisia, I know you had some questions for Keith.

**Carlisia Thompson:** Yeah, I was curious to know if you do any side projects when you're not working on compilers, or if you do a different sort of compiler work when you're not at work?

**Keith Randall:** Like when I'm home, hacking by myself?

**Carlisia Thompson:** Yeah.

**Keith Randall:** Yeah, I sort of hack on random stuff. I wrote a pretty good integer factorization library, which you can grab on my GitHub account. It can factor 50-digit integers. I'm a math geek and a performance geek, so I like to sort of hack on stuff like that.

**Carlisia Thompson:** Very cool. I'm gonna check that out.

**Bill Kennedy:** Are there are other languages that you work in, other than C -- like, have you looked at Rust at all? What do you think about their philosophies around integrity and around the runtime there?

**Keith Randall:** Yeah, I like the idea of Rust, that you keep track of exactly what pointers mean and what they're allowed to do and when they disappear, and things like that. I'm not a big fan of the fact that there's eight different kinds of pointers, or whatever the number is nowadays. Because that adds a lot of cognitive load to the user to figure out which ones he's supposed to use where.

I haven't actually written anything in Rust, so take my comments with a grain of salt. Maybe it's easier than I think it is. But I like the fact that in Go everything's naturally -- you're used to it coming from C or from Java, or whatever... There's no fancy new semantics to learn.

**Bill Kennedy:** \[00:24:05.02\] One of the questions that seems to come up more and more - and I think it's because I'm seeing more programmers that are coming from functional programming languages, is they get afraid about pointers and they start asking me, "What is the advantage of having the pointers over not having to deal with them?" What kind of answers can I give them? Do you have any opinions around that?

**Keith Randall:** It's fundamentally a question of efficiency, and to the extent that a compiler can realize that you're doing something functional and can pass pointers around under the hood, so you don't have to do big copies - that's great. The SSA thing would totally be impossible to write in a functional language, because everything's linked to everything else via pointers, and the side effects matter. If I wanna delete an instruction from an instruction stream, I need to sort of update all the people who use that instruction, I need to update all the arguments of that instruction... So there's a lot of side-effect things that have to go on in order to make the compiler work, and work efficiently, that I don't have to iterate through all the instructions to find a single use of an instruction, for example.

So I agree that the semantics of a functional language are much easier to understand, and make for a nicer programming language. In languages that scale, it's hard to make functional programs efficient in all cases, whereas given a pointer, it's much easier to sort of design your thing to make whatever algorithm you're doing efficient.

**Bill Kennedy:** That's cool. I'm also curious if you played with Delve at all, and what kind of support are you seeing maybe in the future to help the development of that tool?

**Keith Randall:** Yeah, I love Delve. We are in contact with Derek all the time... We're making this change to the compiler that's gonna change the layout of registers or layout of memory locations - does Delve still work if we do this? So we had a good contact with him, and I love Delve. I use it not all that much when I'm developing Go, but when I'm doing hobby projects I use Delve all the time.

**Erik St. Martin:** That's awesome, so you actually collaborate and reach out proactively and let him know that there's going to be these potentially breaking changes to kind of give him the headstart?

**Keith Randall:** Yeah, exactly.

**Erik St. Martin:** That's great.

**Keith Randall:** Go had a very bad story for debuggers for a long time, and it was slowly bumping up our list of "This is something we have to tackle, this is something we have to tackle", and then Derek tackled it for us, it was great.

**Erik St. Martin:** One of those, "See a need, fill a need."

**Keith Randall:** Exactly.

**Erik St. Martin:** I was actually really surprised when it came out. To your point, I kind of thought that that was ways down the road as far as the Go team, that there was still a lot of work to be done on the language and the compilers themselves, and I recognize that there needed to be a debugger, it just wasn't the priority now, and then Derek pretty much came out and was like, "I got one!"

**Keith Randall:** Yeah, exactly. It was pretty sweet.

**Erik St. Martin:** Yeah. So speaking of cool projects, do you guys wanna get into interesting projects and news, and we'll just kind of talk about stuff that's going on right now?

**Carlisia Thompson:** Yeah, let's do that.

**Keith Randall:** Okay.

**Erik St. Martin:** So the biggest of which is Go 1.8 beta, which was recently released, and for anybody who hasn't tested their code against it, they should, because it drops in February, if I recall...?

**Keith Randall:** Yeah, February 1st, or January 31st, something like that.

**Erik St. Martin:** And Brad Fitzpatrick gave everybody a warning that he's got time to fix bugs now, but later not so much. So file the bug reports now. Is there anything you're particularly excited about in this release?

**Keith Randall:** The big thing is the SSA stuff, for all the other architectures besides x86. That's sort of been my focus. What else is cool in this release...? It's a good question.

**Erik St. Martin:** I know everybody was raving about the 10 to 100 microsecond GC pauses...

**Keith Randall:** Right.

**Erik St. Martin:** \[00:28:01.23\] I think it was guaranteed to be under a hundred microseconds, but they were seeing ten-ish most of the time, if I recall what that was.

**Keith Randall:** Yeah, the pauses we got rid of... There's a bunch of stuff that you have to do when you stop the world. When you do a GC, you stop the world, you sort of set some bits, then you have to do some stuff and then you have to start the world up again. And the stuff you need to do, we've been shrinking and shrinking and shrinking, and now it's down to just sets and bits in various places... And start again; you don't even need to scan a single goroutine stack before you can start the world again. So it's getting quite a bit better. Sub-microsecond for almost everybody, and well a sub-microsecond for lots of people.

**Erik St. Martin:** And then I know this release also saw some improvements with the overhead and calling out to Cgo.

**Keith Randall:** Right.

**Erik St. Martin:** I don't remember what they were... I wanna say it was like cut in half, or something like that; a big concern for people using cgo was the expense of calling out to C, so most of the time the code got written in C, and then there were these logical breakpoints where flow of execution kind of got handed over to C, it did its thing, came back, rather than the more iterative tight loop type calls into C.

**Keith Randall:** Right, and a lot of people we'll serve are stuck with legacy stuff in C, and you've gotta use it... Yeah, so I think the big improvements were in defer. We've put some defer records on the stack instead of allocating them from the heap, and that sort of helps a lot when you have to do -- you basically have to do a defer every time you go into C; in case something panics, you need to defer there to recover. I think that was the big thing, but in general it got a lot of love in this release. Ian looked at it quite a bit to get the overheads down as much as we can.

**Erik St. Martin:** Speaking of which, defer itself was improved. Was that kind of where this was gained? The overhead was kind of saved there because it leverages defer and then defer itself had performance improvements?

**Keith Randall:** Yeah. That was the main reason behind the optimizations to defer, it was for the C path.

**Erik St. Martin:** We actually have a listener in the GoTime FM channel, Chris Heinz, who's asking a question for you. He's asking what the status of inlining \[unintelligible 00:30:11.05\] functions is, because currently you can only inline functions if all the functions they call can also be inlined.

**Keith Randall:** Right. Yeah, so actually we have an intern who's going to be working on that. He's started already, I believe, although I haven't seen \[unintelligible 00:30:25.01\] but it's actively being worked on. The tricky part is getting all the stack traces right when you start doing that, so that's what he's working on.

**Erik St. Martin:** Yeah, and that's actually what he's mentioning here, he said "Part of the problem is that we wanna preserve stack traces, and inline functions will not show up in stack traces."

**Keith Randall:** Right. We're working on it so inline functions will show up in stack traces. It will no longer be a one-to-one mapping between the PC you have and the function that you are in, because some PCs will be in two or three functions nested, so we sort of have to record all that information to be able to have runtime callers return that to you in a sensible way.

**Erik St. Martin:** Some other stuff... I saw the race detector detects concurrent map use. I actually didn't realize that that wasn't detected before...

**Keith Randall:** Actually the race detector always detected that. However, we implemented something additional in 1.6, which is that the runtime itself, even when the race detector is not being used, the runtime itself will detect concurrent map use and panic -- or not panic, it would actually just crash the program. But it wasn't complete. It handled some cases and not others, and we improved that in this release to make sure that we handled as many cases as we could possibly handle.

Basically, it detects if you have a reader and a writer at the same time for a map, and it will crash the program because in that situation programs would nondeterministically occasionally crash anyway, and then you'd have no idea why they crashed because they crashed some later time, in some unrelated code, and it was sort of a very confusing situation to be in, whereas now the map detects that you're doing that kind of thing and it crashes immediately, so you can hopefully find and fix the problem before you release some code to production.

**Erik St. Martin:** \[00:32:15.02\] I think the other stuff that I saw was around plugins, some stuff for the HTTP server, some more context stuff... Plugins seem cool. I mean, as far as readability, I think there's some concern there because you have to do some type assertion when you read from it. So it starts to look a little crazy, but the fact that we have plugins is kind of cool, and I'm not really sure how else to do that without doing the type assertions.

**Keith Randall:** Yeah, it's a difficult problem, and it re-rears all the problems you have with Java distribution - now you have to distribute your plugins somehow along with your binary... But for use cases where you need it, it's really useful and you can sort of wrap all that type case stuff into a library on the client side, so you don't have to see it except for the person who's actually doing the wrapping.

**Erik St. Martin:** Oh, that's interesting. It's just kind of like a wrapper library that does the type assertions.

**Keith Randall:** Right. So that's sort of how we expect it would be used - you have a plugin for, I don't know, some Photoshop transformation, and it takes an image and returns an image or something; you just have a wrapper on the client side of that library that casts the argument to the interface to pass it and cast the thing back to an image when you get it returned. In that way, the client doesn't need to deal with that.

**Bill Kennedy:** The plugins - I haven't even look at it yet... Are you able to reload plugins at runtime, or is it when the app comes up, those are the plugins that you'd have to restart?

**Keith Randall:** You can load plugins at runtime, whenever you want. You just call whatever the routine is - I don't even remember its name. I don't know about reloading. I think once something's loaded, you're stuck with it.

**Bill Kennedy:** Yeah, I'm a little concerned that people are gonna start abusing -- well, I guess you can abuse anything, right? But start breaking that up... The one area I guess always comes up with the static binary as opposed to having this as security, like "Oh my god, we just found a security flaw and we wanna fix that, and now I gotta rebuild every binary I have to do that, as opposed to just deploying maybe the new plugin." This is like the classic argument I'm constantly hearing about. Maybe the negative side of Go, always just building that single binary for deployment.

**Keith Randall:** Yeah, it's tough for distributions like Ubuntu or whatever... They really want to have shared libraries so that when there's a bug in a Crypto library they can just push the Crypto library and not every Go binary in the world that uses Crypto. Yeah, so I certainly understand the argument.

**Erik St. Martin:** I think it's about time for our second sponsor break, and then we can kind of get into some other cool stuff that's going on and interesting projects we've run across this past week.

**Break:** \[00:35:05.07\]

**Erik St. Martin:** Alright. Carlisia, wanna talk to us about some stuff you've seen?

**Carlisia Thompson:** Yeah, I wanted to mention that GothamGo videos have started to pop up on YouTube. There are three now - Russ Cox, Cassandra Salisbury and Aditya Mukerjee, and hopefully the rest will be coming soon.

**Erik St. Martin:** That one... What was that - reimplementing Git in Go, or something like that. I haven't watched it yet, but I saw it listed.

**Carlisia Thompson:** Yeah.

**Erik St. Martin:** Were you at GothamGo, Keith?

**Keith Randall:** No, I wasn't.

**Bill Kennedy:** I was there... Yeah, they built an entire package in Go so you wouldn't have to use the C libraries anymore. It looks really interesting.

**Erik St. Martin:** What were the other two, Carlisia?

**Carlisia Thompson:** The other two were Dissection of Gophers by Cassandra Salisbury, and Codebase Refactoring with Russ Cox, and the Cloning Git one was the one by Aditya Mukerjee. We also started having the Advent series, the blog post series on the Gopher Academy blog. Those are really cool. We have one that's about timers, and a really good one about contributing to Go. That got the blessing from Brad. \[laughter\] There are a bunch of really good ones. It's a longer list.

For people who don't know, every December Gopher Academy does this, and every day a new blog post will go out. Anybody can volunteer to submit a post, so next year, people, stay tuned and just hop in and ask around where you can put your name down for a post.

**Erik St. Martin:** There might be space left, too. Damian Gryski is maintaining the list of who's on what days, so there may actually still be openings this year.

**Carlisia Thompson:** That is a good point. I know for sure there are openings for backups.

**Erik St. Martin:** Oh, yes. And there was a talk at GopherCon this year too, Michael Matloob I think it was... He did a talk about contributing too, which was really awesome.

**Carlisia Thompson:** That is true. Contributing to Go, you mean...

**Erik St. Martin:** Yes. Speaking of which, do you get a lot of contributions for the compiler itself, Keith? Or are people mostly contributing to the standard library?

**Keith Randall:** We get a lot of people contributing to the compiler, certainly. It's sort of one of the most active portions of the development that's currently happening on Go, at least in the standard library and the runtime and so on. We get a lot of outside contributions, which is kind of nice, because we only have so many people inside of Google who have time to work on this stuff, and to the extent that we can get outside contributions, it's great.

We had a lot of help from Josh Snyder and various other folks early on in the SSA development which really kept us on track and kept us on schedule. Otherwise, I only work half-time, so we only had one and a half people working on it inside of Google.

**Erik St. Martin:** Oh, so you were the only one for most of it working on the compiler?

**Keith Randall:** Myself and David Chase worked on it in the early days from inside of Google, and then there were a bunch of people from outside who worked on it as well.

**Erik St. Martin:** So here's a question - for somebody who may have minimal or no compiler knowledge, how approachable is it for somebody to jump in and start trying to learn and contribute to the compiler? Is it something you kind of need a lot of knowledge about before, or is it fairly approachable for people to get in and fix bugs?

**Keith Randall:** It needs some domain expertise. It's not the easiest thing to jump in and touch. We made porting as easy as possible, so you don't actually need to write any Go code to port the compiler to a new architecture, or at least it's all tables and stuff, it's not stuff that executes all the time. But if you wanted to add, say a new compiler optimization phase or something, it requires a fair amount of knowledge if you know - what SSA is, what transformations you can do on it, what you can't...

\[00:39:59.03\] It's not the easiest thing to jump in and do, but the people who jumped in and worked on stuff on a compiler, I think they all had some compiler knowledge, but they were by no means experts. I would say it's sort of a middle-of-the-road thing if you wanna jump in; you should probably have taken Compiler 101 in college, but you probably don't need anything higher than that.

**Erik St. Martin:** Do you have a recommended book or something, that somebody interested -- not necessarily like designing your own compiler, but just for anybody who might want a better understanding of how compilers work.

**Keith Randall:** Well, there's always the Dragon Book - I forget who wrote it... But it's a standard compiler book. My advisor, Charles Leiserson has a great book on graph algorithms; a compiler is basically a big bag of graph algorithms. It's all depth-first search traversal, breadth-first search traversal connected components, all that kind of stuff. So yeah, any good algorithms book would also be a good starting point.

**Erik St. Martin:** Excellent. Carlisia, what else do we have?

**Carlisia Thompson:** We have... Oh, by the way, I wanted to give a shout out to Damian Gryski because he's been running the December series of blog posts for Gopher Academy, and he's doing a great job; it's so much work... He has to get after people who promised to deliver a post and don't show up on time... I don't know how I know that, but it's a lot of work and if it wasn't for him maybe we wouldn't have it. Those are really excellent posts.

Also, he's on Slack and he said that there are no openings right now, but there are backup openings. Whoever submits a backup and doesn't get published as backup in December, will get published in January for sure. So please ping him or us and we'll direct you if you're interested for this December.

Other things - there's the GoLab conference in Italy, somewhere near Florence. I'd love to go, but I can't. If you can go, it's on the 20th and 21st January. There's still time to book it.

What else... I ran into this because I was doing some research this week - another thing that I wanted to mention is Dominik Honnef. He has a blog post listing all -- not all the tools, but at least most of the tools in the Go toolchain, and it's very neat. He also explains and gives examples of how to use some of the most complex or not as popular tools. That was really cool to run into.

**Erik St. Martin:** Cool. Yeah, it looks like it shows not just the things that are part of the Go tool itself, but also some of the other tools that have kind of come out around it, like Benchcmp (BenchCompare) and the bench visualization, where it creates the SVG output of the comparing to benchmarks, and things like that. That's cool.

**Carlisia Thompson:** Yeah. And the last thing on the list here is that there is a proposal for the top mod on the Golang Reddit to be Damian Gryski, and I personally think it's great. Basically, what's happening is there's the Golang channel which hasn't been very well moderated, by everybody's account, and because of the Google presence there, people started thinking it was an official channel from the Golang team, and it never was meant to be. So now people are saying, "Whoever's the current mod, that person will step out and choose somebody new who can really moderate and choose new moderators", and the proposal... I think -- who was the person who did the proposal? Was it Russ?

**Erik St. Martin:** I think it was Russ, yeah.

**Carlisia Thompson:** \[00:43:49.00\] Russ, yes. He's proposing that Damian Gryski is the person. So if you have an opinion, hop on there and speak up because that's probably going to change very quickly.

**Erik St. Martin:** Is there a way to vote, or is it just unless there's no downvotes...? How does that work

**Bill Kennedy:** Yeah, I don't think anybody has downvoted that at all, so I'm sure it's just gonna happen, and it should.

**Erik St. Martin:** It should.

**Bill Kennedy:** Quickly.

**Carlisia Thompson:** Yeah. And it's going to be better for the community to have real and consistent moderation there.

**Bill Kennedy:** Yeah, I walked away earlier this year from Reddit. It was such poison to me that I didn't even -- if I've looked at it even five times this year, that's a lot. Knowing Damian's going to be the top moderator, I'll definitely come back and start looking at it again.

**Carlisia Thompson:** Yeah. It's good, because Reddit is actually very good. There are some interesting posts... I mean, the posts that are popping there, we see them everywhere, but there are some interesting discussions. Every once in a while it runs amok, but it's pretty good otherwise.

**Erik St. Martin:** Keith, how do you keep up with what's going on in the community? Are you mostly heads down, or do you kind of watch for projects that are coming out that interest you?

**Keith Randall:** I basically read Go Nuts, and that's about as much community involvement as I can take. \[laughter\] I sort of watch the project closely and I watch Go Nuts, and that's sort of where I get my information about what's going on in the community from.

**Erik St. Martin:** I think I'm in too many of them, and then I end up not keeping up with any of them. But it works out, because I think everybody else curates it, so I only hear about the good stuff.

**Bill Kennedy:** Keith, what office do you work out of, and where are you based out of?

**Keith Randall:** I'm in Mountain View at the main Google campus.

**Bill Kennedy:** Gotcha.

**Erik St. Martin:** Yeah, it seems like there's a couple different places... I heard that the New York office actually has more people working on the Go team than Mountain View does.

**Keith Randall:** That may be true now, yeah. It's about equal. I think we have 12-13 people here, and there's a similar number in New York, and then a couple people in Boston.

**Bill Kennedy:** And Brad's in Seattle now, right?

**Keith Randall:** Yeah, Brad's in Seattle. We have one guy in Switzerland and one guy in Pittsburgh. There's a couple other scattered people.

**Erik St. Martin:** And these are the people who are actually Google employees that are full-time; that's not including all the people who work for other companies who are basically being paid to work on Go.

**Keith Randall:** Exactly. Yeah, that's only the Google employees.

**Erik St. Martin:** I love that that's a thing now, too. You can work for a company that basically just sponsors you to work on a project that means something to them, right?

**Keith Randall:** Yeah, and that's open source. That's not something that there's directly a competitive advantage thing with; they just wanna make the ecosystem better, and that's great.

**Erik St. Martin:** Yeah, we're seeing it a lot with Kubernetes now, too. There's a lot of big companies that just basically have engineers on their staff that are full-time working on Kubernetes, and being paid by Intel or Red Hat or various other companies that are contributing back.

**Bill Kennedy:** Erik, you got paid basically to fix a bug in Kubernetes too, right? Because Comcast needed it...

**Erik St. Martin:** In Docker, yeah.

**Bill Kennedy:** Oh, in Docker.

**Erik St. Martin:** I wouldn't necessarily call it a bug...

**Bill Kennedy:** An enhancement.

**Erik St. Martin:** Basically the real-time thread support, we had an issue with running a real-time priority process in Docker, and that was really the way group scheduling works. Basically Docker creates a new C group, C group gets zero real-time runtime, the process inside the container cannot upgrade its priority... So basically, I was just kind of patching Docker to allow people to supply a real-time runtime at container creation.

**Keith Randall:** Right.

**Erik St. Martin:** But yeah, to Bill's point, it's kind of cool that they're like, "Why don't you fix it?" It's like, "Well, that works..."

**Keith Randall:** \[00:47:51.15\] Yeah, exactly. It's a great thing about open source stuff - the things that people care about, they can fix themselves, they don't have to wait for someone on high to fix it for them.

**Erik St. Martin:** Yeah, I prefer PRs over bug reports, too. I try to encourage that, because I think people should all try to approach the solution, because sometimes a solution si better than no solution.

A lot of people will refrain from contributing, and this kind of goes back to Michael's talk and the posts on the Advent series, with the contributing - a lot of people won't contribute out of fear that it's not a good enough solution to be taken in by some big name project, and they won't contribute at all, and then these types of things will just kind of linger forever, because it's not a huge priority to the people actually working on that. But it may be a big priority to you, and sometimes a good enough solution is good enough to be brought in just to solve the problem for people, and it can be refactored later into something that is more performant.

I'm sure there's specific language features that nobody's gonna pull in some gnarly code for, but for most people's bug fixes... They're usually fairly trivial, and they're not gonna introduce a lot of problems for the rest of the codebase.

**Keith Randall:** Yeah, and even if they're not perfect patches and they have problems, they often spur dialogue or spur someone to think harder about the problem, and end up pointing the way to a solution if not being the solution themselves.

**Erik St. Martin:** So does anybody have any other interesting news or projects they wanna talk about, or do we wanna move into \#FreeSoftwareFriday?

**Carlisia Thompson:** I don't.

**Erik St. Martin:** I've been traveling a lot this week, so I've been kind of \[unintelligible 00:49:30.27\] How about you, Bill?

**Bill Kennedy:** On my Twitter feed I think Daniel Whitenack, who gave that talk on Data Science at GopherCon, he has at least two or three packages a week around data science that he's publishing. Gonum is the big one right now; that repo, github.com/gonum has got a ton of stuff in it.

Daniel shared this week another repo called go-hep, which is High-Energy Physics community stuff. It's amazing to see the communities that are coming in, that I guess were kind of exclusively Python at some point; now, going full throttle into Go. That's really exciting.

**Carlisia Thompson:** Allow me to correct you, Bill, just a little bit. It's not a repo, it's a whole organization, and it's got a bunch of projects, very interesting.

**Bill Kennedy:** Yeah, that's what I meant. Thank you.

**Erik St. Martin:** That is a whole industry I know nothing about, physics. But yeah, it's so awesome to see all of this stuff come in. There's a lot more data science stuff, there's a lot more math stuff being done in Go, and that's awesome. And InfoSec stuff too, I've been seeing a lot more of that to start being written in Go.

**Bill Kennedy:** Another thing that was interesting is my business partner, Ed Gonzalez, he got stuck this week on the floating point stuff, trying to compare two floating points that should have been identical but were different because of binary decimals; he found a package from ShopSpring called Decimal, which he's starting to look at to help fix all that floating point decimal numbers in Go for the work he's doing. That was really interesting, too.

**Erik St. Martin:** Oh, interesting. And how about you, Carlisia?

**Carlisia Thompson:** I ran into a project - I have not used it before, but it looks really cool. It was here in this document, but it was also in this Brazilian newsletter about Go called The Week In Go. It is the JSON Incremental Digger (JID). Basically, you install it with Homebrew and you can navigate a JSON file on the command line. You can say, for example, "Node 0" and you get just that one node, and there are a bunch of things you can do. I thought it was really interesting.

**Erik St. Martin:** \[00:52:03.00\] Yeah, that's really cool. Have you seen this, Keith? You basically can give it JSON, and then you can kind of use JavaScript notation to traverse and dig down into the JSON file, and it has autocomplete of the properties, too.

**Keith Randall:** Interesting, I haven't seen it.

**Erik St. Martin:** Drop the link in the Slack channel too, for anybody who's in there. It's super cool to be able to do that.

**Keith Randall:** Yeah, especially when you JSON gets large and it's really hard to... They tend to format as giant blobs that are hard to parse because they're all nested, and so on. It'd be nice to have a way to see just the parse you care about.

**Carlisia Thompson:** Yeah, that's exactly what I thought. If you have a very long JSON, you can start up like, "Give me the counts" for whatever place in the tree or adds, and just get an idea of how many items there are.

**Erik St. Martin:** Yeah, some of the JSON gets really repetitive, and then you're trying to write these crazy regular expressions just so you can find the thing that you need in this giant JSON output.

Did you have a project you wanted to give a shout out to, Keith?

**Keith Randall:** Yeah, we already talked about it actually, Delve. It's my favorite debugger now. I use it all the time on my personal projects. It's hard to use when I'm developing the compiler, because often it crashes before you've got something that you can put into a debugger. But I use it all the time on third-party stuff. Yeah, it's great. It's better than GDB is for C, which is not great praise, but that's all I care about.

**Erik St. Martin:** People have been using GDB for C for ages now, so I consider that praise.

**Keith Randall:** Well, I'm just saying that it's a low bar, to be better than GDB is for C. \[laughter\]

**Erik St. Martin:** I've spent a lot of time this past week in meetings and on planes, so I haven't been writing a lot of code, standard Linux stuff. The last weekend... I'm kind of working on like a home meat probe thing for my smoker, because the wireless ones that I have stink. So I'm gonna give a shout out to the whole Arduino and Maker community, because it's ridiculously easy to just go on to some of these sites like Adafruit or Sparkfun and order parts, and somebody else has already written drivers for sensors and things like that; I don't have to write any of them. I was able to whip together something in just a few hours, rather than having to spend a ton of time writing I2C (I Two C) protocols and stuff like that. Or "I squared C". Naming is hard. Every time I think I know how people pronounce stuff, I'm totally wrong. Like, forever I thought it was "I Two C", and then it turns out it's actually "I Squared C."

**Keith Randall:** I always called it I Two C.

**Erik St. Martin:** See? And Rob Pike commonly throws off Goose and Gorch... It's like, every year I hear him do a talk or something and there's a new way to pronounce them, and I'm like, "Huh! I didn't know that's how you were supposed to pronounce it."

**Carlisia Thompson:** And now that you mentioned that, I feel compelled to mentioned that this week Brian Ketelsen dropped a blog post on the December series of the Gopher Academy posts, and it talks about the barbecue thingy that you guys did.

**Erik St. Martin:** Yeah, so initially... That's running on a Raspberry Pi, so they're kind of two separate parts that are going to be merged. So that's actually Go running on a Raspberry Pi, that's the PID controller, and I always forget the actual acronym. It's like proportional-integral-derivation, or something... It basically takes a set temperature and the current temperature and calculates an error value and determines whether or not the blower needs to turn on to provide oxygen to the fire to make it heat up. It's to keep a stable temp in the fire box of the smoker for long cooks, and that's all done in Go.

\[00:56:01.21\] I'm currently working on the meat probe side of things, and then we're gonna try to merge the two into the ultimate Go and C and custom hardware little grill device, so that we can plot out on Prometheus and all this stuff, you know, temperatures in the grill and things like that. Who knows what we're gonna do with the data, but it will serve our purpose and it will do better than the stuff we bought, so... And that's provided time; that's the hardest thing, having time for these little side projects.

So did anybody else have anything they wanna talk about, or do we wanna wrap this thing up?

**Bill Kennedy:** I think we're ready to wrap it up.

**Carlisia Thompson:** Yeah.

**Erik St. Martin:** Alright, so I wanna thank everybody on the show, especially thank you to Keith for taking time to come speak with us, and a huge thank you for all the work that you do on the compiler for the language we love.

A huge shout out to our sponsors for this episode, who are StackImpact and Backtrace. Without them, we wouldn't be able to do this show. A huge shout out to all the listeners, both listening live and who will listen to the recorded version of this. Definitely share the show with fellow Go programmers.

You can subscribe by going to GoTime.fm. We're also @GoTimeFM on Twitter. If you wanna be on the show or have questions for upcoming guests, hit us up on GitHub.com/GoTimeFM/ping. And I think that's it. I always feel like I'm forgetting something, because there's always so much to go through.

Next episode will be with Thorsten Ball, and we're gonna be talking about building an interpreter in Go, which is highly related to this, and then we're gonna do basically a two-week break over the holiday, and we will be back in January. So with that, goodbye everybody!

**Keith Randall:** Bye!

**Carlisia Thompson:** Bye, thank you!

**Bill Kennedy:** Bye!
