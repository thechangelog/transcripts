**Brian Ketelsen:** Welcome back, everybody. This is GoTime episode number 52, where we're joined by David Chase. I'm Brian Ketelsen, standing in for Erik St. Martin who is out today. I'm joined by Carlisia Pinto...

**Carlisia Thompson:** Hi, everybody.

**Brian Ketelsen:** And Ashley McNamara...

**Ashley McNamara:** If you're filling in for Erik, who am I filling in for?

**Brian Ketelsen:** You're filling in for me.

**Ashley McNamara:** Perfect.

**Brian Ketelsen:** Yeah, I'm standing in for Erik, you're standing in for me, Carlisia in standing in for Carlisia, and David is standing in for David.

**David Chase:** Right.

**Ashley McNamara:** Perfect.

**Brian Ketelsen:** So David, why don't you start off by introducing yourself, kind of giving us some background and telling us what you do?

**David Chase:** I guess my background is in programming languages compilers and programming language runtimes. I started out way back with Fortran, but now I work on Go, mostly on the Go compiler... But there is a pretty healthy runtime component to the compiler work.

The garbage collector, for instance, requires write barriers; the compiler has to be aware of them, and it can do optimizations involving them. The scheduling in Go is cooperative, and the compiler enforces the cooperation. And I'm already pretty much deep in the weeds with what I do with this example stuff, what the work is like. I have experience with some of the features that people talk about wanting for Go 2, so I try to contribute there too, like, _Gsenerics_.

**Brian Ketelsen:** Nice. I'm more of a business information guy rather than a computer science guy... Can you give us the rundown of what components are involved in a compiler, what does a compiler do when I type in source code?

**Ashley McNamara:** Stop stealing my questions, Brian.

**Brian Ketelsen:** Hey, be nice. \[laughter\]

**David Chase:** So it varies somewhat from compiler to compiler, but in general, they tend to have phases, and a sort of mix and match. So you start with the characters - they tend to transform those into a tree-based representation. Usually they do scanning to break it into tokens and then parsing to combine the tokens with more structure.

Once you have the tree, you can do a certain amount of - I think you would call it semantic analysis, so enforcing a lot of the rules of the language: can you look at this, can you look at that? Do the types match, and so on?

Some compilers go straight from tree to code generation, and in fact the Go compiler used to do that about -- God, I can't even remember which release it was. I guess we lit up SSA in 1.7, we added a phase... Keith Randall talked about this at GopherCon, and that talk will be online in a little while. But we added a lower-level phase; it's somewhat closer to the machine code, but it is also structured, and it makes it easy to express a lot of optimizations, and it was surprisingly easy to do our ports too, when we went from supporting it on one platform to all of them.

\[00:04:23.07\] So the Go compilers, again - characters come in, scan and parse into an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree), do semantic analysis to enforce rules, transform AST to [SSA](https://en.wikipedia.org/wiki/Static_single_assignment_form) and do a certain amount of optimization. Then we interface to the Go Assembler, and out comes machine code.

That's a crude description. There are certain important analyses that we do on the tree-based form still, and it would actually be a lot of work to get some of them out... [Escape analysis](https://en.wikipedia.org/wiki/Escape_analysis) is actually interprocedural within the package that's being compiled, and on top of all the packages that it requires. And it would be nice to move that into the SSA framework, but it would require several changes to the SSA framework, and in particular it would require us to do the entire package at one time in SSA, which is not what it's built to do just yet.

**Brian Ketelsen:** So when you say you do escape analysis against the AST, does that mean that there are notations added to the source code somehow or to the abstract syntax tree that show the results of that escape analysis? How does that analysis move from the AST into the final generated code?

**David Chase:** So the AST nodes are sort of an artifact; if you go look at the Go source tree, you will find two ASTs, and one of them is sort of very visible and it's for public consumption, for source code transformation. There's also the one that the compiler uses, and the one that the compiler uses, the AST nodes have a lot of extra baggage added to them to do just that, among other things, so that you can say "This identifier had its address taken, therefore probably can't go on the register."

Escape analysis runs over all the identifiers that have their address taken, or all the expressions too, because at the tree level, everything can have a name, even if it doesn't have a source code name. So everything that could have its address taken, escape analysis looks to see where those addresses go, and not only locally tags them by saying "You're a heap, you're a heap, you're a heap... Oh, you're a stack, you're a stack, you're a stack." It also generates interprocedural summary information to go into the export data for the package, so that if you -- I don't have any handy examples, but there are functions that you can call of, say, two parameters and it's like "This function - yeah, you passed the pointers in, but that's okay." This function looks, but does not tell, does not spread them around. So if they weren't escaping, they're still not escaping. It may have been, again, deeper in the weeds, but...

**Brian Ketelsen:** No, that's where we wanna go, we wanna go deep.

**David Chase:** Okay.

**Ashley McNamara:** We have several listener questions. We're gonna start with Matt first. He says, "What is a good place to get started if you wanna contribute to the Go compiler?"

**David Chase:** Oh, I'm seeing the Slack channel; I wasn't paying attention.

**Ashley McNamara:** It's fine, I'll read them.

**David Chase:** \[00:07:52.22\] So my personal hobby horse this month is that we need better benchmarks, but that's not the same as the technical work on the compiler, even though it's really important... Because our benchmarks are not the things that people run that they actually care about. Not all the architectures receive the same amount of attention. If someone were, say, a particular fan of ARM or ARM64 or PowerPC64, or MIPS -- we have people who look at MIPS and MIPS64... And it's possible that there are idioms that we're getting wrong, and we could do better.

So I'm thinking about what's the most accessible part of the compiler, and the most accessible part of the compiler is to me at least - I could be wrong - where we lower the code from generic SSA to the various architectures' instruction sets. That's pattern matching, and it's pretty obvious to see what it's doing. There have been cases where we just didn't have the right pattern for something, or we were missing a pattern. Some of them could be a little grotty, but they're not all, and that's (I'd say) a good place to start. You can look at it and you can understand what's happening, if that makes any sense.

**Ashley McNamara:** \[unintelligible 00:09:22.27\]

**Brian Ketelsen:** So that brings up a question from me though... Do we no longer have the intermediate Go Assembler that's output? Is there still a step that outputs Go Assembler, the old [Plan 9](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs) assembler, which then gets translated, or is that step gone now?

**David Chase:** It's essentially still there. It's building internal assembler data structures. I don't think we're actually writing a file.

**Brian Ketelsen:** Oh, I see.

**David Chase:** If they know we're not writing a file.

**Ashley McNamara:** There's a follow-up question to Matt's original question about how to contribute, and he was asking if there is any recommended reading for compiler internals?

**David Chase:** Hang on just a second.

**Brian Ketelsen:** I'm fully expecting David to come back with the title of his book that he wrote.

**Ashley McNamara:** Right..

**David Chase:** No, I have not written a book. \[laughter\] I was gonna grab three books that I know of... I don't actually know if any of these do a good job of covering SSA. Okay, so we have one whole sub-chapter in Cooper & Torczon, so that's one... That's _Engineering a Compiler_...

**Ashley McNamara:** And what you can also do if you want to research that question a little bit, is you can drop it in the Slack channel later, and I can help remind you.

**David Chase:** Okay, that might be a good thing to do. Yeah, so I have several compiler books; I know tha Andrew-Appel has written several for various programming languages, which might be interesting to look at. If you are already familiar with a particular programming language, that is another choice.

**Brian Ketelsen:** So here's a question - is there a compiler that people consider to be like a canonical compiler implementation or a particularly easy to access or easy to grab compiler implementation? Is there one compiler that's so much nicer than all the others?

**David Chase:** There used to be one... [LCC](https://en.wikipedia.org/wiki/LCC_(compiler)) had a reputation. It's by Fraser and Hanson. Some of this is a little old, but it was a relatively small, relatively easy to comprehend compiler. I don't think that the Go compiler is necessarily that scary.

**Ashley McNamara:** \[00:12:04.26\] I don't know, it seems pretty scary to me. I want you to explain everything like I'm five.

**David Chase:** Yeah, so the problem is I'm sitting here thinking of the compilers I've worked in, and what happens is that anything that's successful gets ported to a lot of architectures, and then as soon as it gets ported to a lot of architectures, that introduces all the generality that you need to support a bunch of architectures. Then people want it to go faster and you start getting more and more hair and optimizations. The Go compiler is not bad.

**Ashley McNamara:** \[laughs\] It's not bad...

**Brian Ketelsen:** It's not bad...

**Ashley McNamara:** What can make it better?

**David Chase:** So this is a problem, because it means "Better for whom?" We have stuff in the pipeline right now that is gonna be way better for compile time, and a little bit better for performance. We think that if we improve the import/export again - we already improved it once; if we do it again, then we can make it more on-demand and less patchy, and then that in turn will allow us to turn on _Inlining_... What they call _Mid-Stack Inlining_. That will be good. We think that that might make everything about 5% faster. It won't make compile time faster until we do this lazy import. Lazy import will be great \[unintelligible 00:13:35.08\] compiling a little bit faster than it is right now, even with the expensive extra inlining. But from the point of view of reading the compiler, it got a little worse.

**Brian Ketelsen:** Yeah, that makes some sense. I mean, there's always a cost.

**Carlisia Thompson:** What else is in the pipeline for the compiler?

**David Chase:** For 1.10?

**Carlisia Thompson:** Well, yeah... 1.9, 1.10, 2.0...

**David Chase:** So I don't know everything, I know around me. We tried to get in a CL, a big CL, that would have improved the debugging experience for optimized code, and we didn't make it... So that is definitely in the pipeline. We want to have a better story for that. In particular if you have a crash and you get a dump, that's generally optimized code, which is the usual case for Go.

**Carlisia Thompson:** And what was the CL for?

**David Chase:** Well, so when you run SSA, it tends to break up variable lifetimes into smaller chunks; so they'll go in and out of registers... Right now they're still homed to the same stack slot, but over this basic block it might be in a register, and then a little while later it might be in a different register, so we have to emit the debugging information that describes that value movement in and out of registers. That's something that we really want to get done at 1.10.

We have been getting more and more trouble with loop. So I've mentioned that the cooperative scheduling in Go is enforced by the compiler, and right now it's kind of lightly enforced. It enforces it when you enter a function or method. But if you are running in a tight loop that has no function calls within it, it does not enforce any cooperation there. This is a particular problem - Rhys Hiltner mentioned this in his tutorial or his [talk also at GopherCon](https://www.youtube.com/watch?v=V74JnrGTwKA) - where the garbage collector needs to interrupt all the threads right at the beginning of a GC, just for a few microseconds, but it does need to interrupt all of them. It does this by asking them to reschedule themselves; they all reschedule, they discover that a garbage collection is in process and they go stand in a corner and wait till the GC does its thing and then says "Yeah, back in the pool. Go!"

\[00:16:21.10\] Then there's this one guy running a tight loop, and the GC tries to tap him on the shoulder and he does not respond... And does not respond, and does not respond, and does not respond, so everything hangs up, and it can be an appreciable fraction of your pause time for GC. In some rare cases, it can be long.

We need to fix that and we need to change the compiler to add a preemption check on every loop package. The problem with that is it slows down your loops a little bit, and some loops it slows down a lot. So there's follow-up work to try to figure out if we can mitigate this cost using a clever implementation. We have already tried loop unrolling, and for whatever reason it was not helpful. Either we did it wrong... We probably did it wrong, because we did it kind of in a very bloody-minded way. Just take the loop, don't get smart about the indexing or anything, just do the check over and over -- I wanna say make two copies of the body, but check after every execution of the body, so twice per loop, whereas in many counted loops you could say "Well, I'm gonna unroll by two, increment by two, and then I'll worry about the odd case at the end." We didn't do anything that clever... So that's also for 1.10, dealing with that and the knock-on problems there.

The garbage collector guys are looking into whether they can make generational collection work, and that will add a write barrier that's gonna be on all the time, which will then motivate -- it's still like a lot harder to write barrier optimizations. I don't know who's gonna be doing that. It might be me, it might be somebody else, but we're certainly motivated to look at it.

**Carlisia Thompson:** I wonder if you have a feature that is at the top of your wish list that if you had no constraints you could implement that and make Go a ton better...

**David Chase:** I hate to say "if it had no constraints", because that's not really -- that's not really Go, and...

**Ashley McNamara:** Pretend it's Magic.

**David Chase:** Pretend it's Magic...? Oh, man...

**Brian Ketelsen:** Maybe no time constraints or no budget constraints.

**David Chase:** Well... So you're talking completely compatible -- are we talking about Go the language or Go its implementation?

**Carlisia Thompson:** Go the language. I'm just trying to assess where your mind is in terms of what you admire about Go and how do you see it becoming better than it is. It doesn't really matter, I just wanted to get a sense for how you think about Go.

**David Chase:** So if I were to say "Look at the proposals that went by in the last year or so for Go 2", the one that I almost thought they could have put in - I think it had syntax that would have allowed us to put it in if we wanted to - was the multidimensional slices. That's really kind of my Fortran background speaking there. It's one of these things where people who don't write that kind of code are like "Yeah, it's easy. You just code it and it's fine." And you know, it's the usual thing... Anything that I don't actually have to do that someone else has to do, that must be easy, and it's really much nicer to have the multidimensional syntax, and it's really much better in terms of generating code and doing balance check elimination if you have it built into the language.

\[00:20:12.11\] It's tremendously useful for a certain kind of computing, and the people for whom it's useful - this is the Fortran crowd. They've sort of been stuck at Fortran for ages. C++ has done amazing things for them, but often you have to be willing to sign up for crazy C++ templates.

Go is just a nice, clean, comprehendable language; this is a little thing, and you could do -- it appeals to me. _Generics_? Oh yeah, _Generics_ would be cool if we could agree on what they meant, and if we could agree on their implementation characteristics of what we want it to do, and there's all sorts of risks where it might not make it a better language.

**Carlisia Thompson:** Yeah, of course.

**David Chase:** So the one for me that looked like the most likely to win would be the multidimensional slices. I liked that a lot. It didn't make it in, and that made me sad.

**Carlisia Thompson:** I wanna flip this question around and ask you what is in Go today from a compiler perspective that you would be happy removing? Maybe that's not even a fair question, because as far as functionality, Go is already so minimalistic... But I was wondering if you had one or two things that you could get rid of easily.

**David Chase:** It's not a compiler thing... I have opinions about how things go back and forth to Cgo, and we're close and I think that we're converging... We may have already met and I may have just misunderstood, because I don't do enough Cgo programming to get a really good feel for some of the details. Nah, that's probably not even that. Like you said, it's a tiny language; there's not a lot of crud in it.

**Brian Ketelsen:** We like it that way.

**Ashley McNamara:** We do like it that way. Scott Mansfield has a question that sort of ties back into what you were talking about before, how the changes that you guys are making are not really going to affect compile time. He was asking "Do you think that the speed of compilation is hamstringing the advancements in the compiler?" I thought that that was a good question.

**David Chase:** So when he says "advancements", he's talking about like 17 zillion amazing optimizations that we could be doing that we're not... At one level yeah, sure, but I have worked on compilers like that, and if you wanna have -- so there's an aspect of Go that makes it... I wanna say this is a tricky conversation to have, but...

**Ashley McNamara:** He says it's a loaded question, but thank you.

**David Chase:** I mean, his question is loaded... Absolutely, there are things, there are optimizations that we are unlikely to do because the implementation costs are too high. Otherwise, it is just kind of a pain, and you sort of live with it. In some cases it means that you -- you know, it's one of these usual "three good things, choose two." Because you could make a compiler that did more optimization, and also ran quickly(ish), but that often means that you would be using really hairy algorithms. And we've had to do this already so...

\[00:24:03.25\] You know, returning to the SSA representation, it's really interesting because it lets you express a number of optimizations in a very clean way, and it lets you express these transformations in a very clean way. But if you actually look at how SSA is generated, there is a step in there that for some inputs the first time we did it just caused the compiler to go ape. 6 gigabytes, 40 minutes, that kind of crazy. And we read papers, and so we had to go and implement stuff from papers.

We have also had bugs once in a while, where someone very cleverly took a recursive depth for search numbering transformation kind of an algorithm and they derecursed it and they turned it into something that maintained its own stack, and they subtly perturbed the depth for search numbering; it wasn't really depth for search anymore. And you'd get these crazy bugs that you would not catch with any simple example.

So again, you have a nice, fast compiler, but some of the algorithm's underpinning SSA are delicate and sneaky... So this is the problem. It was like yeah, if we were willing to just burn time, we could pretty easily implement some hairy optimizations, some more aggressive optimizations, but we can't burn time, so whatever we do, we have to be a lot more clever.

**Ashley McNamara:** Right.

**David Chase:** The other reason to prefer simplicity, I think - and this may just be me - is I think one reason to like Go right now is that you do have a prayer of understanding it end to end, whereas a C compiler is crazy nowadays, and a Java compiler, including HotSpot, is absolutely crazy; just bananas. And what you care about that for is for things like correctness and security. Go has not a formally verified compiler; those are pretty rare, but they're getting less rare, and you can imagine that if we kept the language small that maybe we'd get there someday. Maybe not this Go compiler, but another one. But even without formal verification, we at least have a chance of reading the whole thing and understanding all the parts and how they work.

**Carlisia Thompson:** It is so refreshing to hear someone like you say that. I actually wanted to confirm that when you were talking about simplicity, you were talking about readability...

**David Chase:** Well, ultimately it's -- I worry a little bit about it from the point of view of security, but... I mean, don't forget who worked on this compiler - [Ken Thompson, Trusting Trust](https://www.ece.cmu.edu/~ganger/712.fall02/papers/p761-thompson.pdf)... \[laughter\]

**Brian Ketelsen:** Best paper ever.

**Carlisia Thompson:** I'd like for you to tell us more about what you just mentioned about -- I forgot the words you said...

**Brian Ketelsen:** The verified compiler?

**Carlisia Thompson:** Exactly. What is that?

**Ashley McNamara:** Yeah, somebody just asked that.

**Carlisia Thompson:** And why is that important? I'm sorry, and why don't we have it?

**David Chase:** So I don't have direct experience with them, so I wanna be careful I don't go out on a limb and make stuff up. A verified compiler is one where you have proved formally that it's transformations are formally correct. And part of the reason that you don't have these is because if you're gonna talk about actual dotted i's and crossed t's correctness, you need to have an exact specification of the input language and its intended behavior, and then you need to have an exact specification of how the hardware is gonna behave.

\[00:28:15.13\] Or in the case of so much of our hardware, you have to have an exact specification of how the subset that you use of the hardware behaves, so in particular -- if you don't know for sure what some of these instructions do, then you don't do those instructions.

So part of the obstacle is getting the specifications (clean specs) for the endpoints, and then the rest of the problem is that you get back to the "Boy, I want my code to run fast and I want my compiler to compile code quickly." This forces you either to have a great -- you either end up with a giant compiler, you end up with the tricky algorithms, and you might not have a proof for some of them. Is that getting in a vague direction? But you've actually proved that it's gonna do the right thing, and you have a proof, you don't just have testing.

**Carlisia Thompson:** It's still hard for me to grasp the why, if we have verified -- like, we have proved it, but we just don't have the test... I don't know what that means, but we don't have to go deep into those woods.

**Brian Ketelsen:** I'm just curious whether we have to verify every backend, every different target... So do you have to verify for x86/64 and also for ARM5 or whatever? You have to verify each different target?

**David Chase:** Well, what do you mean? It's verified where it's verified, and if you don't, then you don't know for sure... And you know, we don't know this now. I mean, we're talking about a different world than the one that we're in. The world that we're in - we compile our code and we feel lucky.

**Brian Ketelsen:** I feel lucky every time my code compiles...

**David Chase:** Okay.

**Ashley McNamara:** Same! \[laughter\]

**David Chase:** Certainly when you work on a compiler, there's -- a lot of times I'm working with a buggy compiler, because I'm usually breaking it. But right now, these are only used in very high-risk applications. I believe they are used... My recollections is that some of the interesting work has happened in England, and I think that some of it is used in avionics code, so real-time controllers for flight services and things like that.

**Brian Ketelsen:** That makes sense.

**David Chase:** I could be wrong on the details, because I'm pretty sure that the guys doing Airbus would care about this.

**Brian Ketelsen:** So I have a follow-up question on something we talked about a little bit before, the idea of adding more optimizations at the expense of compilation speed... Do you think there's a chance that we'll end up with optimizations that are guarded by build flags, like GCC has, for example?

**David Chase:** I assume it has to happen eventually, but I think it's our intent to put it off as long as we can, because every flag that you add then becomes something that you have to test, and then every flag that you add becomes something that you have to document. It complicates everything - it complicates your bug reporting. What happens if you have a bunch of packages that you depend upon and some of them are compiled one way and some of them are compiled the other way, and then you have a bug, and then you have to report the bug...? Does the bug report have to include the compilation flags for each of the packages that you have in it?

\[00:31:59.25\] I mean, I assume nonetheless that it will have to happen. There will come a time when there's enough extra performance to be had for something that's sufficiently important, but it hasn't happened yet.

**Brian Ketelsen:** So in terms of performance, I know that the [LLVM](https://en.wikipedia.org/wiki/LLVM0) ecosystem was considered very early on in Go, and it's changed quite a bit in the last ten years since they looked at it. Is there a possibility for back-end for Go and LLVM in the future?

**David Chase:** It's being worked on. Dan Macintosh, I can't see him because I've got my door closed, but he sits like 20 feet away from me. Dan Macintosh is working on that. We're not there yet, and it will be a while before we get the same garbage collector, but this might be an option for people who maybe don't need the amazing sub-millisecond pause times and want a higher throughput.

**Brian Ketelsen:** I'm not terribly familiar with LLVM, but wouldn't it bring a lot of extra tooling to the ecosystem, too?

**David Chase:** I don't know, I'm not that familiar with LLVM either.

**Brian Ketelsen:** Okay. We'll find out someday.

**David Chase:** Okay.

**Ashley McNamara:** Kaleb asked the most important question, in my opinion - what kind of pie does the Go compiler team like best?

**David Chase:** Oh, \[unintelligible 00:33:34.17\] key lime versus pecan.

**Ashley McNamara:** You are not limited to those pies...

**Brian Ketelsen:** No, that's a really bad subset of pies. If you don't include banana cream, then it's not even a pie question.

**Carlisia Thompson:** Wait, why is this question even being asked? Why not, like, what kind of muffin, or donuts...? Why pie? Is that an internal joke?

**Brian Ketelsen:** Because pie.

**Carlisia Thompson:** Okay, is that why? Okay...

**Ashley McNamara:** Right now we're just interested in pies, but we could go into the whole pastry line.

**David Chase:** So I can definitely say that for me pie beats muffins, and pie beats donuts. \[laughter\]

**Ashley McNamara:** I don't know if it beats donuts, that's easy, but...

**David Chase:** And personally, I am very happy with either key lime or pecan pie. I did once make six pecan pies for science, where each one was a different recipe, so I could see which one was the best recipe.

**Brian Ketelsen:** Nice.

**Ashley McNamara:** Which one was the best recipe?

**David Chase:** That's the problem, I forgot.

**Ashley McNamara:** That's a big problem. You can't say that one was the best and not know...

**David Chase:** You could say that one was the best, but not remember which one.

**Brian Ketelsen:** That's true. One was the best. There's no doubt that one was the best, and I think maybe the most important thing to do is make six pies again.

**Ashley McNamara:** Yes. For science, of course.

**David Chase:** For science. I do recall that the recipes with butter in them really ended up kind of slimy and I wouldn't recommend that.

**Ashley McNamara:** Oh... That's upsetting.

**David Chase:** Yeah.

**Ashley McNamara:** Okay, so pecan was the answer. Or key lime?

**David Chase:** I like key lime a lot.

**Ashley McNamara:** There you go, Kaleb.

**David Chase:** Pecan pie is just amazing; it's just so...

**Carlisia Thompson:** I think pecan pie has too many pecans. \[laughs\]

**Ashley McNamara:** How dare you...? \[laughs\]

**Brian Ketelsen:** It's just too nuts... \[laughter\]

**Carlisia Thompson:** I know...

**David Chase:** But I do like both of those pies. They are..

**Carlisia Thompson:** No Boston cream pie for you?

**David Chase:** It's okay... I mean, pie is good. I'm trying to think of which pie -- pecan has to win, actually.

**Ashley McNamara:** \[00:36:05.16\] I don't know, I'm all about apple à la Mode...

**Brian Ketelsen:** Now, you guys, we asked David this question; you can't tell him he's wrong... Telling him his answer is wrong. \[unintelligible 00:36:14.20\]

**Ashley McNamara:** Oh my god, can we hashtag that immediately?

**Brian Ketelsen:** \[unintelligible 00:36:22.08\]

**David Chase:** They're trying to refresh my memory, and I think that's okay. Because there's a lot of pies. There's chess pie... You can make a key lime recipe with other sour citrus besides limes, and some of those are very good. A key lime pie that's instead made with calamondin juice is very nice.

**Ashley McNamara:** All I'm saying is that you should not have to give an answer without receiving pies, so Kaleb...

**Brian Ketelsen:** Yeah, that's right, Kaleb... So get your shipping engines ready, because it's time to send some pies to the compiler team.

**Ashley McNamara:** True.

**Carlisia Thompson:** Hey, can I get a pie, too? I don't even care what pie - just send a homemade pie and I'm happy...Send me pie!

**Brian Ketelsen:** So I have one thing to add on the pie subject and then we should probably move on, because we're a little bit off topic... But the best pie in the entire universe is made by Emeril Lagasse at his restaurant, and it's banana cream pie, and it's by far the best pie ever. I won't even begin to describe how good it is because I'm hungry right now, but if you get an opportunity to eat Emeril Lagasse's banana cream pie, it's a life-changing, religious experience.

**Carlisia Thompson:** Where is this?

**Brian Ketelsen:** At any of Emeril Lagasse's restaurants. He's got a couple in Louisiana, and he has a couple here in Orlando, and I don't know where else. Good stuff. Crazy good stuff. Beyond good stuff.

So on that note, on that sidetrack note, we should probably move on to interesting Go projects and news, as we are starting to run low on time. Somebody's suggesting that maybe we should have our next GopherCon at a place where we can get that pie, and I think that's a really, really interesting idea that we should explore.

**Ashley McNamara:** I agree.

**Brian Ketelsen:** So let's move on to Go projects and news. Anything interesting other than [GopherCon](https://www.gophercon.com/) happened in the last couple of weeks that we wanna bring up?

**Carlisia Thompson:** Are you serious? Did you just ask that question?

**Brian Ketelsen:** Anything exciting OUTSIDE of GopherCon? We'll have a whole show just about GopherCon.

**Ashley McNamara:** Outside of GopherCon?

**Brian Ketelsen:** Yes.

**Ashley McNamara:** No, I'm sorry. I'm still...

**Carlisia Thompson:** Nobody's prepared to talk about anything besides GopherCon.

**Ashley McNamara:** I'm still getting over GopherCon slowly. It's all I think about.

**Brian Ketelsen:** Yeah, I'm still a little tired. So I ran across a couple news items that were interesting this week. [JBD](https://twitter.com/rakyll) wrote a great article on the scheduler, and that is at [rakyll.org/scheduler](https://rakyll.org/scheduler/). Really good article about how the scheduler works, and I always like those deep dives into the things that are happening underneath, so that was cool.

Then there's a cool game engine that I noticed on GitHub about two weeks ago that I didn't get to mention, because we haven't had a show for a while, and it's called Oak. That's at [gitHub.com/oakmound/oak](https://github.com/oakmound/oak), and it's a Go-based (not pure Go-based) game engine. It does all of its rendering, and all that stuff.

**Ashley McNamara:** OMG, Brian...

**Brian Ketelsen:** What?!

**Ashley McNamara:** Can we play with it in the PocketCHIP?

**Brian Ketelsen:** Yes, we can play with it with a PocketCHIP.

**Ashley McNamara:** Oh, my goodness...

**Brian Ketelsen:** Exactly.

**Ashley McNamara:** Okay! So exciting!

**Brian Ketelsen:** \[00:40:08.16\] Yeah, it looks very cool, and has very few dependencies underneath, which I think is probably the best part. When I was reading -- I actually did a couple of their examples and ran code and it worked really beautifully, and it has very, very few dependencies. The only thing on Linux is an audio dependency, so it's very self-contained, which is kind of slick.

**Ashley McNamara:** This is happy!

**Brian Ketelsen:** It is happy. And speaking of -- we should probably kind of circle back and talk about these PocketCHIPs. The PocketCHIP is this amazing, cool little computer thing. It's smaller than a Raspberry Pi, but it's got a little maybe four(ish) inch TFT screen and a keyboard on it, and it's ARM7 chip maybe... It's just so cool. You push a little button and it boots into Linux, and it does cool stuff... It plays retro games and whatever, but of course, the first thing I did was boot it up to the terminal, and after typing `uname` just to find out what it was running - which is Debian - I installed Go, as one does. It runs Go very beautifully, and it's like a little toy.

**Ashley McNamara:** It's so cute... And you can 3D-print cases for it. Did you see that, Brian?

**Brian Ketelsen:** I've got one printing right now... A screen cover with the keycaps and key covers.

**Ashley McNamara:** I went into my garage and I did not see a tarantula, so I might take my 3D printer out of my garage.

**Brian Ketelsen:** You braved to the spider just to get to the 3D printer?

**Ashley McNamara:** I did.

**Brian Ketelsen:** You are awesome.

**Ashley McNamara:** Are you impressed?

**Carlisia Thompson:** Well, she didn't see the spider... Don't overestimate...

**Brian Ketelsen:** Just because you didn't see it doesn't mean he's not crawling on your back right now.

**Ashley McNamara:** Why would you do that to me? Why would you say those things to me? Monster.

**Carlisia Thompson:** So to give people context, we're talking about the PocketCHIP because that was what was gifted to the GopherCon speakers.

**Brian Ketelsen:** Yes. It's a $60 or $70 computer; so amazing, so much fun. If you like at all playing with small devices, especially something that is Linux, but very, very portable and has a cute little screen and keyboard, then I can't recommend the PocketCHIP enough. It's tons of fun. I really haven't stopped playing with mine since last week. Totally amazing.

So back to news - there's a great new book out by Katherine Cox-Buday, one of our speakers from maybe GopherCon 2015, called [Concurrency in Go](http://shop.oreilly.com/product/0636920046189.do). That's an O'Reilly book that was just released to print, so I think it's available in electronic form, but not quite yet in paper form.

**Carlisia Thompson:** In two weeks.

**Brian Ketelsen:** Yeah, very exciting. I had the privilege of reading through an earlier version of it and it's very well done. Concurrency in Go is a tough topic to hit, and she did a great job on it. I'm excited that there's another good resource for concurrency out there, and a whole book dedicated to it.

**Carlisia Thompson:** Yeah, exactly. I'm really excited to see a whole book about concurrency. I pre-ordered it, and I'm waiting for my hard copy, because it's important enough that I wanna hold it in my hands.

On the topic of schedulers, I wanted to make sure we mention [Cindy Sridharan's](https://twitter.com/copyconstruct) amazing [blog post](https://medium.com/@copyconstruct/schedulers-kubernetes-and-nomad-b0f2e14a896) about cluster schedulers. It's really well-written. She got a lot of praise online for the post, so if you're interested in schedulers, you should read that, too.

**Brian Ketelsen:** Oh, that was a very good post, I agree.

**Carlisia Thompson:** Yeah.

**Brian Ketelsen:** Now I know what you're talking about. Good, we should put the link to that up on the show notes, too.

**Carlisia Thompson:** \[00:44:03.26\] Yeah, I just dropped it. I'm not sure if I'm using the right document, but...

**Brian Ketelsen:** Oh, perfect. Yes, Cindy is really active in the San Francisco Go community.

**Carlisia Thompson:** Yes.

**Brian Ketelsen:** Alright, so we like to end our show with \#FreeSoftwareFriday, which is a shoutout to any open source group or maintainer or project that you love, that you enjoy, that you can't live without. It's something that we like to do because we use a lot of open source and we really appreciate all the hard work that people put into those projects, and we feel like they're kind of thankless.

I will start off by shouting out to [Dave Cheney](https://twitter.com/davecheney), because we just don't give Dave enough credit for all of the amazing work he does for our community. If you have a question about Go, there's a [blog post](https://dave.cheney.net/) that Dave wrote the covers it. If you have a problem that you need to solve in Go, he probably wrote the canonical package that fixes that problem, like his package Errors. I don't know where we need to start to get his Errors package included into the standard library, but if it doesn't happen, I'm gonna leave Go for Pony. So just FYI...

**Ashley McNamara:** Plus one!

**Brian Ketelsen:** I'm moving out of Go if we don't get Errors in the standard library.

**Ashley McNamara:** Plus one to all of that.

**Brian Ketelsen:** Dave also puts in an unbelievable, immeasurable amount of work into helping us prepare the speakers for GopherCon each year. Not only does he head the selection committee, but he spends countless hours with each speaker, helping them prepare and getting them up to the A+ level that we expect from our speakers and that we get from our speakers every year. So we can't thank Dave enough for all that he does for our community, and that's why he is my number one \#FreeSoftwareFriday shoutout.

Anybody else have a person or a project or a thing that they wanna shout out for \#FreeSoftwareFriday?

**Carlisia Thompson:** I wanna give a shoutout to `godoc`. It's such a neat tool that we have, and for people who are new and don't know, you can run `godoc` on your machine if you're flying, and you get on your browser the documentation for all packages that you have residing in your system.

Yesterday I found out that you can write documentation for each of your packages in a separate file called `doc.go`. If you have a lot of documentation to write, you can put it all in there. So instead of ending up with separate files with tons of documentation in those files. It's really neat, I didn't know that.

**Brian Ketelsen:** Very nice.

**Ashley McNamara:** I wanna shoutout Brian and Erik. You had to have known that this was coming. GopherCon was amazing. Every detail was on point, the sessions were awesome... That contributor day - oh, my god! Why is the Go team not doing those like once a week? It was so good!

**Brian Ketelsen:** That was great. The contributor thing was amazing. I don't know if they had a final count, but I think more than 100 people got onboarded to contribute to Go, and I don't know how many contributions there were, but it was a lot, and so many people were excited about that.

**David Chase:** We found bugs.

**Ashley McNamara:** Oh...

**Brian Ketelsen:** That's fabulous.

**David Chase:** I mean, you know... You get new people using Go, and they do stuff that you hadn't realized that someone would try, and you get bugs.

**Ashley McNamara:** It's very cool.

**Brian Ketelsen:** That's awesome. So we do have some statistics from [Jess Frazelle](https://twitter.com/jessfraz). 44 new open CLs, of which 22 were merged, as of 2:46 this afternoon. That is awesome! Great news.

\[00:48:06.29\] And we can't even talk about this without me thinking about [Brad Fitzpatrick's](https://twitter.com/bradfitz) picture of him with his "Looks good to me" shirt on and a handful of Gophers stacked around him as he was helping us remotely take care of business, which was awesome. So we should definitely thank [Steve Francia](https://twitter.com/spf13) for putting that whole thing together, and everybody who contributed in the room, from the mentors all the way to the people who learned how to contribute the first time. It was fabulous.

**Ashley McNamara:** Yeah, it was so good.

**Carlisia Thompson:** We are talking about... A few of the meetup organizers were so taken by the whole exercise that we are -- I mean, different people went up to Steve separately and told him the same thing, which is "We should be doing this a few times a year", just getting meetup groups going through exactly that workshop. So it might be happening.

**Brian Ketelsen:** It actually reminds me... One of the Arizona meetups - I just saw on Twitter today they're actually going through the same exercise at their meetup this coming month. Phoenix, yes. [Brian Downs](https://twitter.com/bdowns328). Thank you, Phoenix, for doing this exact same thing. That's awesome. You've gotta love Brian Downs for being on top of his meetup organizing game. So if you're in the Phoenix area, go to the next Phoenix meetup and you can get that same experience.

**Carlisia Thompson:** My wishlist is to go through that and have someone from the Go team or one or two people going through the CL, submit it, so we can have that quick feedback loop. Anyway...

**Brian Ketelsen:** That's awesome. Alright, so anybody else have a \#FreeSoftwareFriday shoutout that they wanna make?

**Carlisia Thompson:** Dave, do you have one?

**David Chase:** Day in, day out, I'd have to say [MacPorts](https://www.macports.org/), because I use a Mac all the time and I use the UNIX tools all the time, and a lot of them -- you know, these guys are getting a lot of leverage off of the fact that they're packaging other open source software, but it's a lot of work. I have helped debug a few of them, and... Just all the packaging work is a big deal.

**Brian Ketelsen:** Now, I have a question for you on the MacPorts, since we've got just a moment... How do you find it in terms of quality and completion? I used MacPorts maybe 2006 or 2005 - quite a while ago - and abandoned it for [Homebrew](https://brew.sh/), because MacPorts just didn't seem to be that stable. Do you have any issues with MacPorts, or is it solid for you?

**David Chase:** \[00:50:55.21\] It is more solid now than it was. I don't know why I didn't do Homebrew... Back then I don't know if there was Homebrew; there was Fink, and I tried both and I ended up settling on MacPorts. It's better now. They do a better job in terms of the dependency tracking and the rebuild tracking and the cleanup. It used to be more often you'd get wedged and have to uninstall a bunch of stuff and reinstall clean, and I can't remember the last time I had to do that.

At the time - as late as five years ago, so 2012-2011 - we were hosting a big ol' track thing on it -- I mean, we were hosting track on another box, but I was actually mirroring the server on my laptop, and it was using MacPorts to get me everything that I needed, and everything that I needed - they included track and Python and SQLite, and Mercurial... The whole tech toolchain. This was for this crazy website that would run \[unintelligible 00:52:16.02\] it would use Emacs in bash-mode and \[unintelligible 00:52:17.25\] to do processing to turn your code into something formatted in a pretty mathematical style. And it worked.

**Brian Ketelsen:** And it worked... It's a miracle. Alright, so I think that wraps up our show today. I'd like to thank David Chase for joining us and going deep into compiler land. I probably learned more in the last hour that I've learned in years on compilers; I really appreciate that. And thanks to everyone who's listening and the folks out on the Slack channel. Thank you so much.

If you enjoyed the show, be sure to share it with fellow Go programmers in your meetups, in your office, all across the land. You can easily subscribe by heading to [GoTime.fm](http://gotime.fm), and subscribe to our weekly email which is coming soon. You can follow us on [Twitter](https://twitter.com/GoTimeFM), and if there's anything you wanna discuss on the show, or if you've got a guest that you think we should have, head over to [ping](https://github.com/GoTimeFM/ping) and open an issue.

With that, thanks everyone. We really appreciate it.

**Ashley McNamara:** Thank you.

**Carlisia Thompson:** Thank you, and thank you Dave.

**David Chase:** You're welcome. Thank you for having me.
