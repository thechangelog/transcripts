**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking all about the Go stack. What on earth is it? What does it do? How much do we have to care about it? How much do we have to know about it as programmers in order to be effective? We're going to dig in and find out. Joining me today, co-host of course, Kris Brandow. Hello, Kris.

**Kris Brandow:** Hi, Mat. How's it going?

**Mat Ryer:** Not bad. Has anything dramatic happened to you recently in your building?

**Kris Brandow:** Oh, unfortunately so. New York City has had some unfortunate accidents as of late, and I was unfortunately affected. But we're all good now. We're all good.

**Mat Ryer:** Okay, good. But you didn't cause any.

**Kris Brandow:** No.

**Mat Ryer:** You didn't cause it. Good. We're also joined today by Yarden Laifenfeld. Hello, Yarden. Yarden is a software engineer at Rookout, or, as of Monday, Dynatrace, where you've been developing a production-grade debugger for Go. That's very exciting. We'll definitely talk about that. You're also one of the organizers of GopherCon Israel, as well as the Women Who Go Israel group. Welcome, Yarden.

**Yarden Laifenfeld:** Hi, thanks for having me.

**Mat Ryer:** Absolute pleasure. And from the Go team, we're joined by David Chase. David's been working on compilers and runtimes for around 40 years, and started working on Go at Google back in 2015, which I think is eight years ago, David. Welcome to Go Time.

**David Chase:** Hi. I don't know what else to say.

**Mat Ryer:** Yeah, no, hi is fine. Absolutely fine. But you're actually -- something interesting in your bio is that you grow lilies, and you're a judge for the North American Lily Society.

**David Chase:** That was like this weird thing, ages ago... So when we'd do vacations, ages ago - we had a job, we had a vacation, and work, but they let me drive. And my wife was alone, and she would plan some days, and I would plan some days. She plans very well, and I plan about five seconds ahead.

**Mat Ryer:** Just-in-time planning.

**David Chase:** Yes, really. So we were driving along and we see this sign that says "Lilies and begonias next right." We say "Oh, that's cool. We like lilies." And we go. And the guy that we met was, it turns out, a famous and incredibly innovative lily breeder. It's like "Oh, this is cool." He gives me his catalog, and I just order a few, and I start growing them... And it basically took -- and I've just been doing it for years... And I like them, and there's a local society, and they said, "Oh, we need a help-out, and a help-out more, we need judges..." And I trained myself up to be a judge, which is like this multi-year process, with exams, and test judging, and everything. And I need to emphasize, I am like a kind of a junior judge, which on the one hand you kind of get amazed at the things that you learn, and then on the other hand the guys who are really good at it are just like "Okay, wow. You can get that much better." It's sort of weird. So you'll be out with people and someone will ask you a question about lilies, and you will just start riffing, and explaining, and this, and this, and this. "Oh, geez, I just did all that." "Okay, fine. Cool."

**Mat Ryer:** That's amazing. Are they difficult to grow, I guess?

**David Chase:** Not especially, and that's one of the reasons I like them. Because I can do a concentrated bit of work that's important, and then it's like, I would just like to leave that there, and let it take care of itself. In the US there was an introduced pest from Europe, that for a while made it very difficult. They've introduced a natural control, a specific wasp, with specific taste in hosts for its larvae, and it's naturalized here, and it has made it be a fine thing to do. You just grow them, and they're fine.

**Mat Ryer:** \[08:10\] It's amazing.

**David Chase:** I should stop. I could talk longer.

**Mat Ryer:** No, no, no. I mean, maybe we should just do Lily Time. \[laughter\]

**David Chase:** Okay, we can do that.

**Mat Ryer:** Yeah, we'll do that next. Wow. Okay, great. And Yarden -- actually, something you both have in common, you both like bikes, and cycling, and stuff. Yarden, do you do a lot of that?

**Yarden Laifenfeld:** I wrote it as a response to David's mentioning of bikes.

**Mat Ryer:** Yeah. I've just read it again. It says you're not good with bikes.

**Yarden Laifenfeld:** \[laughs\] That's true. I wouldn't say that I'm not good with them...

**Mat Ryer:** Well, you did.

**Yarden Laifenfeld:** ...but I'm not good with them. \[laughs\] I'm not especially good with bikes. Like, I can ride one. I do ride one.

**Mat Ryer:** What more do you need?

**Yarden Laifenfeld:** Exactly.

**Mat Ryer:** Yeah. Well, fixing them I guess as well.

**David Chase:** Fixing them, yeah.

**Yarden Laifenfeld:** Someone else does that for me.

**Mat Ryer:** Yeah. Just get David to do it. David fixes bikes as well. If you want your lilies growing, or you need your bicycle fixed, David's your man.

**David Chase:** Maybe.

**Mat Ryer:** Yarden, before you did Go, you wrote Java, some Ruby, some C\#, C++, Python... What is it about Go that grabs your attention?

**Yarden Laifenfeld:** I'm actually doing all those now. At Rookout - or I guess I should say Dynatrace - we're supporting all of those now. But my main focus is Go. I think before I did Go, I did C, and I really liked that - the simplicity of it, and the closeness to bare metal. I know it's not really that close to bare metal, but it's as close as people usually get nowadays...

**Mat Ryer:** Yeah, relatively.

**Yarden Laifenfeld:** Yeah, exactly. And so I think I liked the similarities to Go rather than all those like higher-level languages.

**Mat Ryer:** Yeah. What's your favorite language out of those then?

**Yarden Laifenfeld:** It'd be either Go or C, definitely.

**Mat Ryer:** Nice. Good answer. Okay, cool. So maybe we could just get started... I'd love to start at the basics. What is the stack? What actually is that, and what does it do?

**David Chase:** In Go terms it's like a slice, but internally. It's used very much that way. It has a capacity, it allocates from high \[unintelligible 00:10:20.28\] to lower, rather than low to high, which is what you would do in a slice. And whenever you make a call to a function or a method, it extends the slice towards lower addresses by a constant amount. Each function has its own constant; that's the size of its stack frame. And it uses that for scratch storage. And so your local variables, and the temporaries that might need to be spilled to memory - that's the memory that would spill to, that's the memory for the local variables... And depending upon your calling convention on your architecture, you may pass parameters to functions and methods that you call also in stack space since Go 1.17. On some architectures we use registers... But we still reserve stack space for spilling them for certain purposes.

The interesting difference from slices is -- well, no, actually, that's not true. So your slice has a capacity, but you can just keep on appending to a slice on and on and on. And if you append out past the capacity, if you're appending, it says "Oh, I need to make it bigger", and it allocates a new slice if it's a slice. And in the case of the stack, Go is unlike a lot of programming languages here. It allocates a new stack, copies the old one to the new.

\[11:57\] A thing that it does, that is particular to Go, is all the locations of all of the pointers that might be on the stack are recorded. And those are all updated when you do the stack copy. And so your program has no idea that this is going on. You just did a function call, and the stack got copied into a new place, and it's bigger, and all of the internal pointers to its own stack got updated in that copy, and it carries on.

**Mat Ryer:** Is that an expensive operation?

**David Chase:** It is... I mean, it's just memory-copying, and then scanning the stack and interpreting the pointers, but you don't do it very often. It's sort of a hysteresis. The stack stays large until the garbage collector looks at a goroutine's stack and says "Wow, we've allocated you a megabyte, and yet you're only using 10 kilobytes. I think we'd like some of that back", and then it fixes it and it puts you back into a smaller stack. So it is an expensive operation to grow it, but it doesn't happen very often you grow to a large enough size.

An alternate implementation that they used earlier, and that has been used in other programming languages from time to time is segmented stacks. And so you don't relocate the old one, you just allocate a new piece of stack to be in. And the problem with these is that you have sort of a hysteresis problem and a crossing problem. If you happen to have that boundary at a place where you're doing a lot of function calls, you always trip over it, because it's not a smooth, easy increment. It's like "Oops, I hit the end. Gotta do an extra thing." Even if you've got that other stack there, it makes that function call more expensive. What I'm saying is even if you've set it aside and say "Yeah, I know I'm going to do this, so I'm going to cache my next segment and reuse it", you trip over that. And it's expensive enough that everyone that's done it that I know of that's done it the segmented way, unless they have a really good reason to keep on doing it in that segmented way - and there are other reasons, but Go doesn't have them - they moved to the contiguous stack and the recopy.

**Break**: \[14:14\]

**Kris Brandow:** When the garbage collector shrinks the stack, does that happen after a goroutine is kind of done being used? Or do you pause the goroutine? At what point does that happen? Because you said we grow stacks when we hit like a function call; that's like a clean space to do it. So is there a similar, analogous clean space where it can shrink the stack?

**David Chase:** So certainly, if you are paused. So if your goroutine is not actually running. It could be runnable, but not allocated to a thread and actually running. In those cases, I believe that -- if it's at a clean stop, it could shrink the stack. So we have to talk about preemption here. If you preempt a goroutine -- excuse me, if you need to preempt a goroutine; say if you need to do a garbage collection, so the garbage collector has to do a handshake with the thread, there's two kinds: cooperative and uncooperative. And so the cooperative one is part of the entry sequence to almost every function, where it checks to see if it has overflowed the stack bound. And what it does is if the runtime needs to interrupt, it lies about what the stack bound is; the goroutine says, "Oops, I guess I need a new stack." It goes into that code and says "Oh, actually, I'm here for this other reason, and someone needs to interact with me." And that's a clean cooperative preemption, and the state of all the pointers is well-known, and so you have the option of shrinking the stack at that point. And since that's also the place where you grow the stack if it needs to grow, that makes sense. You couldn't grow the stack if you couldn't find the pointers either.

Uncooperative preemption occurs if you have a tight long-running loop. We don't check on back edges. We profile whether we should explicitly check there, and we could not get the cost down enough. So we do a thing where we interrupt the goroutine, and there are places where we can't, and it records those, it looks and it says "Am I at a safe enough place?" So it's not a safe point where you know everything, but it's a safe enough place. And you might not know everything, but you know that it's okay to run a garbage collection at that point, and it's okay to examine the stack, but you don't know everything you need to know about the pointers in that last frame, so you can't move the stack. Sorry this took so long, but it's like there's a reason, and there's a reason... It's more complicated than it used to be eight years ago.

**Mat Ryer:** it certainly doesn't sound easy. And something you mentioned which was interesting, and Yarden, maybe you could shed some light on this... You mentioned that it grows the stack towards the lower memory address. What's that all about? How is it even doing that? Does it literally just have to reserve a load of memory, and then it's sort of working backwards? What's the advantage of it doing that?

**Yarden Laifenfeld:** I'll start by saying that Go's stack works a lot like a regular stack. And by that I mean like even if you write a binary in C, where there's no runtime that's controlling the stacks and stuff like that, you're still going to have a section of memory call the stack, that works in a very similar way, with a lot of the similar things on it. And so Go really mimics that behavior, and it makes sense, because it's a good concept.

And in a regular - I'm saying regular, but just in a non-Go, or non-managed binary, the stack does go from the higher addresses to the lower addresses... Just because you have like this big section of memory, or you've got a big dump of memory, and you've got sections in it, and so the stack will be one section, and the heap will be another, and they'll kind of grow towards each other. So the heap will go from low to high, and the stack will go from high to low, and they'll get closer.

So I said Go does it like this... And the thing with allocations is that - and David, correct me if I'm wrong. It does usually have -- like, it will allocate a stack when it's needed, but if I'm remembering correctly, it does usually keep the stacks aside. There's a lot of reuse of allocated stacks.

**David Chase:** I don't think it is intentionally reusing stacks. But it might. That's a part of the runtime I don't know, actually. The garbage collector would sort of tend to do it for the smaller-sized stacks, just because it would say "Well, that's a size class." And so anything of that size goes in a little pile of 4k or 8k or 16k chunks. And it would go there again, for the next time it needed something that size.

**Yarden Laifenfeld:** Oh, that's cool. I thought it was specifically for stacks, but I guess that makes sense for --

**David Chase:** It might be. That's a chunk I don't know about.

**Kris Brandow:** \[20:17\] It does sound like stacks really are just kind of slices that are just in this -- "Oh, they're just in this special place in memory, and we just use them for goroutines, and all." It doesn't sound like they're that special of a thing.

**David Chase:** Sort of. The end of the stack has some extra "Hm, now where did we put the G?" Every goroutine has this thing called the G, or the G structure. And I don't actually know if we keep it at the base of the stack or the end of the stack.

**Mat Ryer:** What's the G stand for?

**David Chase:** Goroutine, I think.

**Mat Ryer:** It's cool, ain't it? It's a good name.

**Kris Brandow:** \[laughs\]

**Mat Ryer:** Well, I don't know; if I was looking at the code and I saw a struct that's just called G... I mean, obviously, that's a concept that exists in that domain.

**Kris Brandow:** There's a couple of those single-letter things, right? There's like G's, and P's, and M's...

**David Chase:** Yes...

**Yarden Laifenfeld:** The thing is how do you call your variable type G?

**Mat Ryer:** Lowercase g?

**Yarden Laifenfeld:** Do you call it g?

**Mat Ryer:** Gee, maybe?

**David Chase:** No. G.

**Mat Ryer:** Just g.

**David Chase:** Just g.

**Mat Ryer:** Yeah. But are these like primary concepts, and therefore they sort of deserve this? Because it's almost like status -- it's a bit of a power play for a struct to call itself just a single letter, I think. Isn't it? It's like a bit of a move.

**David Chase:** Well, it's in the runtime, so there's the namespace. So it's not polluting everyone else's namespace. You could have your own g, you can have your own m, and your own p. It's allowed.

**Mat Ryer:** Yeah. But should you? That's the question, isn't it, David?

**Yarden Laifenfeld:** I do think it's the basics, though. So my whole approach to learning about the Go runtime has basically been looking at the code, and just trying to understand what's going on there. You've done a pretty good job of like maintaining readable code, but there are spaces that have been difficult, especially since I might not know the background for why it's there. So I do try to kind of complete that with reading stuff that people who have written that code wrote. So a lot of the stuff - when you start getting into the runtime, we'll talk about p's, and m's, and g's, because that's really the basics of how Go even works, and how it is so fast and efficient, and how it enables goroutines, or lightweight threads. So that's really where everything starts.

**Mat Ryer:** Yeah. So one of the nice things, of course, about Go being open source is we can go and look at this code; we can actually go and dig in and look at this. And it's Go code. It doesn't sound like it's the easiest codebase to understand... But it certainly sounds like we have a good chance. But Yarden, do you have to do a lot of that? Do you have to dig in because of the work that you're doing?

**Yarden Laifenfeld:** I get to do a lot of it.

**Mat Ryer:** Oh, you love it.

**Yarden Laifenfeld:** I do. It's so interesting, just because it is really complex, and things that are done there are amazing. And because I'm also writing Go code, I'm understanding what's happening in my code because I'm reading the code that runs my code, or that compiles my code. There's just so many layers to understanding it that makes me a better developer, and also interesting, I guess.

**Mat Ryer:** So do you recommend people do dig in and learn about this for that reason? Or could you still be a good enough Go programmer without even knowing, and just let David \[unintelligible 00:23:47.10\]

**Yarden Laifenfeld:** \[23:51\] I think that kind of varies. I think that if you're just starting out with the language, then diving into its internals or how it works is not the right way to go. But I do think that if you've been writing in Go for a while, or if it's like a big part of what you do, it might make you a better developer, because it might not only help you understand things, and just help you avoid bugs that might just happen because of incorrect use... It might be common, but it might still could be incorrect use.

And then if I'm going on to the more positive side, it can also make your code better, because you know how to improve performance, using little things from the runtime and how the runtime works. And if you know of the different sections of memory, you can control which things are where, and stuff like that. So definitely for more advanced developers I think it's important.

**Kris Brandow:** I think having some historical knowledge -- or back in the day it was probably a little bit more useful. For instance, we're talking about these g's and m's and p's... And the m's are threads. I don't know why they're not called t's, but whatever... But the p's are actually like cores on your processor. And until Go 1.5, by default, you only got one of those. So even though you have all these goroutines running, you're still doing kind of single thing at a time execution; you're not doing parallel execution, which I think is one of those things, at least in my early days of Go surprised me a lot, is that "Oh, I'm doing all these things thinking they're happening in parallel, and they're actually happening concurrently." And I think when you start looking into the runtime stuff, you can kind of see where those differences are, because that's really difficult to grok. I remember the first time I watched Rob Pike's talk about "Concurrency is not parallelism", and being kind of like "This is difficult to understand." But when you can go and look at something and see it tangibly, I think that helps quite a bit.

**Yarden Laifenfeld:** Yeah, I totally agree. Also, it kind of brings it down to our developer level, I think. When I think of the Go developers, they're kind of these imaginary creatures in my mind that know everything about everything, and know how to create the perfect like programming languages --

**Mat Ryer:** Have you seen my code? \[laughter\] Oh, the Go team, you mean.

**Yarden Laifenfeld:** Yeah. No, not like individual developers. Just the Go team. Only that.

**Mat Ryer:** Right.

**Yarden Laifenfeld:** No, but seriously, I'm like, okay, these people know everything about everything, and they know how everything works... And then reading the code, it's like "Oh, wait, they write code like me." Like, I write code, and they write code, and I can read the code they write. And suddenly, community-wise, I think it's really cool to think about how they're just part of the community, and we're all in it together, kind of.

**Mat Ryer:** Yeah, I understand that. That effect definitely happens. The thing is, Yarden, don't forget you are extremely intelligent. That's not all of us.

**Yarden Laifenfeld:** Oh. Sorry, Mat.

**Mat Ryer:** No, not me... I was talking about Kris.

**Kris Brandow:** About me?!

**Mat Ryer:** I'm just kidding. Obviously not.

**David Chase:** People in general.

**Mat Ryer:** Yeah. Yeah... Actually, I think - was it George Carlin who said "Consider the average intelligent person, and then realize half people are dumber than that..." Which is quite brutal, but quite funny.

**David Chase:** I mean, I think that's kind of mean...

**Mat Ryer:** Yeah, a little bit.

**David Chase:** The other way to look at it is that you're busy, and you have a lot of things to do, and stuff can slip your mind.

**Mat Ryer:** Exactly. That's why my socks are on the wrong way. I'm just busy.

**David Chase:** Yeah. You have more important things than the orientation of your socks.

**Mat Ryer:** Trousers.

**David Chase:** Trousers.

**Kris Brandow:** I feel like we're all -- I mean, this is a bit philosophical, but I think we're all intelligent in different ways, and I think that's kind of like what you're getting at, Yarden, with seeing the Go team. From the outside, it's like "Oh man, they all know everything about everything." But no, there's some people that know the compiler very well, and they know the runtime very well, and they know this part of it very well, and they have no idea how the other parts work... And they rely on the rest of the team to kind of fill in that information.

**Yarden Laifenfeld:** \[28:12\] It's kind of comforting, in a way.

**Mat Ryer:** Yes, it absolutely is. Well, David, when you joined the Go team, how long had you been writing Go before you joined the Go team?

**David Chase:** Oh, about zero days.

**Mat Ryer:** You must have aced that interview somehow.

**David Chase:** So there is a rule, and it was told to me, and we're certainly allowed to repeat it, which is certainly interviews here... How would you put it politely...? Don't try to BS your way through the interview.

**Mat Ryer:** Right. That's great advice generally, I think.

**David Chase:** So stick to what you know, and that's what you're being evaluated on. You're not being evaluated on the stuff you don't know. How good are you at what you do? And so I didn't know any Go, but that was okay...

**Mat Ryer:** Did you take a lily in?

**David Chase:** Not for that, no. I have brought them in a couple of times... You have a nice one in your garden, and you bring it in. It's nice.

**Mat Ryer:** Nice. That is actually genuinely nice.

**David Chase:** But yeah, so zero days. I started working in Go -- it's not a hard language to learn. I had a little bit of trouble - and I'm trying to think of how do you explain this to a really beginning programmer; there are types that are sort of reference-ish, like slices and maps. Maps are really reference types. If you pass a map and it gets modified, you'll see the modifications. If you pass a slice and it gets modified, you'll see some of the modifications; you won't see it if it grows. You'll see your old copy of the data. And so to me, that's kind of a -- and you won't see the extensions, you'll only see changes made to the part that you passed in.

**Mat Ryer:** Yeah, it's quite unusual.

**David Chase:** Yeah. So that's the one part of the language that has always sort of given me the creeps... But then when you look at problems people have in the field, that they never get that wrong, seemingly. And I do not understand. And maybe people just -- how do you put this...? Like, I'm always sort of a little worried about what's the pathological thing that could go wrong? And so I immediately gravitate to "Oh, they could do that, and that would go wrong." People don't do that, so it's fine.

**Yarden Laifenfeld:** Maybe people have gotten hurt by that the first few times they've tried, and then they've just found something that works, and then they've stuck to it.

**David Chase:** I don't even recall hearing people being hurt by it. This is what's so strange. And I have a friend who is working in Go in sort of a very different way... Huge programming language background; former assistant professor in everything, and worked at IBM Research... And you're sort of explaining these things to him and he's like "Well, that's just awful. But it's never been a problem..." \[laughter\] So it's just kind of like this weird thing where no one seems to get it wrong.

So yeah, I picked up the language pretty quickly... Which was good, because I was working on a compiler for it, so I kind of needed to know how it worked.

**Mat Ryer:** Yeah, but to Yarden's point, this highlights something which I think is an important lesson for everybody, which is - you have to get good at knowing how to learn. And that's the important skill. You don't have to know all the things and have everything in your head. You have to be able to learn in a targeted way, based on what it is you're doing, what problems you're solving... Because that's something that a lot of junior devs - like Yarden was saying, they see people giving a talk, and the talk is just packed. And obviously, they've just done a lot of work to research that subject, or they've got direct experience. The best talks usually is someone telling stories of something real that they've done. So they've specialized in that in order to do that, which is actually a great reason to give talks... Because if you really care and you want to learn about something, that's a great way to do it. But you don't have to know all the things and have all that stuff in your head. And I think that is a nice thing for everyone to remember, especially when you're new, because you don't have the experience of doing that so much. And it can look like people are just these geniuses.

**Yarden Laifenfeld:** \[32:25\] Yeah. I have a lot of experience sort of mentoring, I guess, really, really, really beginners. And the biggest issue I faced with people who this is their first time writing code is having them try the thing they're thinking of... Because they'll sit at the computer, and they'll look at the screen, and I'll come and ask like "What's going on?" and they'll be like "I'm not sure how to do this." And I'll be like "Okay, how do you think?" And they'll tell me the solution, and it may be right, and it may be wrong, but I'm like "Okay, why don't you write it down and try it?" And there's no real answer. It's just like "Oh, I didn't know I could do that." Or "I didn't really get that stuff there." And I think that's the first part to advancing as a developer is just trying things out and learning that way.

**David Chase:** Definitely "Oh, I didn't know. Oh, really? I can do that? Okay..."

**David Chase:** Same goes for even Go internal code. \[laughs\]

**David Chase:** Yeah, there are pieces of it that are a little creepy... The concurrency stuff is just -- or the weirdly-tuned things, like "I need to synchronize with that thread over there... And I think I'll spin for just a little bit." And someone figured out, "Yeah, yeah, that was a good thing to do." And then sometimes the spinning becomes inappropriate, if there's some weird architectural change \[unintelligible 00:33:49.07\] is your processor? What if the thing that you're spinning on never makes it into your cache for some crazy reason? And then you have a horrible problem.

**Kris Brandow:** I feel like Go is pretty good at allowing you to still get access to all that kind of scary stuff, but also not throwing it at you to start off with. I think your point about slices, David - I think one of the reasons why people don't mess slices up is because they never learn about arrays until you're kind of like much further into the language. It's not like a thing that comes up that often when you're first learning a language, is like "Here's a slice. This is what you would have in another language. That is an array. Use it just like that." Whereas I think if you kind of dove in and we were like "Okay, well, there's these slices things, and these array things. And they're similar, but different. And one can grow, and the other can't." I think that would probably lead to slices being much more confusing. But just having you be like "Here's a thing. It's a list of data items. Go use it like that." I think people are like "Okay, I'll use it..."

**David Chase:** And you can stick new ones on the end, and just keep doing that, and it's fine.

**Kris Brandow:** Yeah, it is. I agree that it's kind of interesting that people can like intuitively understand... It's like "Oh, well, if I modify something that's already in a slot, I'll see it on both sides. But if I grow the thing, then it's a new thing." But I think also the API helps a lot with that, too. It's like "Oh, if I append, I get a new slice back, and that's a different thing than the one I had before. The one I had before stays the same."

**Mat Ryer:** Yeah. That's true. But that is unusual to say when you append to a slice. In other languages I haven't really seen that. Particularly, I'm talking about Ruby and C\#, I guess. Yeah. And occasionally I've seen somebody who will append and they don't reassign it back to the slice, and then of course it's just unusual. But like you said, David, that is really quite rare that that happens.

**David Chase:** It may just be how they're explained in the beginning.

**Mat Ryer:** Yeah. You just learn that that's how you append to things, and therefore that's what you do, and you're good.

**David Chase:** Yeah.

**Mat Ryer:** So Yarden, I want to go back to something you said... Because you talked about how learning about these internals has made you a better programmer. How do we control what goes on the stack and what goes on the heap? Because at no point -- you're not saying like "Oh, add to stack." There's no functions you're calling to do that. So how do we know stuff's gonna go on the stack or on the heap? How do we actually control that?

**Yarden Laifenfeld:** \[36:20\] That's a good question. I am going to say that Go has some magic voodoo that I'm not entirely sure about; I can tell you what like for sure goes on the stack, which is like when you create a local variable, for instance, it's going to be on a stack. Or when you pass an argument to a function it's probably going to be on the stack. David did mention earlier that it might be in the register, but I think when we think about it overall, it's just not going to be on the heap. So that's what we should be thinking about.

And then the place where this kind of gets complicated is what's not on the stack, which is things that are on the heap. And those are things that are usually allocated, and we don't know how much memory they're going to take ahead of time. So if we think of a regular variable, like an integer, or a float, or anything like that, we're going to know ahead of time exactly how much memory it's going to take, and so that's going to be on the stack. But if we create a map, or a slice, or an array with an unknown number of slots, I guess, or items, that would probably end up on the heap. And I did say there's some magic going on... It depends exactly how you did it, but overall, that's the idea.

And then when we talk about pointers, it gets a little more complicated, because if we pass a pointer as an argument to a function - and this is where it gets interesting - is how does the garbage collector know when that pointer is out of use, or when the data it's pointing at can be released? And so overall, the general idea is put as much things on the stack, because the stack, as David said, is scratch storage. It's like automatically cleaned up; it does not need the garbage collector. And then only if you need to use pointers, and only if you need something on the heap, you'll do that, just to like avoid the overhead of the garbage collector running.

**Mat Ryer:** Right. You say when it's on the stack it's automatically cleaned up... So what happens when a function returns? Because presumably, those arguments go on the stack in order to call a function. So then when that function returns, is there something that happens?

**Yarden Laifenfeld:** So yes and no. Yes, theoretically. When we think about the stack, we like to think of some sort of pointer to the end of a stack, and then that moving, once we return from a function -- so everything, the way the stack is built, as we said, it's from higher addresses to lower addresses, and then the last chunk is going to be the last function that was called. So if we look at like a stack trace at a certain point, that's how our memory is going to look; that's how our stack is going to look. We're gonna have the variables from the last function, and then the variables from the function that called that, and so on and so forth.

And so we kind of like to think of the pointer to the end of the stack moving to the previous function when we return from our current function. So that's the theoretic part, where we actually do something. In practice, except for that pointer, we're not changing anything. So that memory isn't going anywhere, it isn't being zeroed out or something like that, but the next time that we write to that same space on the stack, it's just going to be overwritten, and we're going to just basically think of it as not existing. So the stack isn't really growing and shrinking, or not as we call functions and as we return from them; just the pointer to the end of it is moving.

**Mat Ryer:** Yeah. Because I guess it would be just extra work to just zero out the memory, or something. So there's no need for it, right?

**Yarden Laifenfeld:** Yeah, exactly. It's like doing the minimum you can to achieve what you want.

**David Chase:** \[40:09\] People don't want it. It would be slower, and people don't like slower. There have been people in the world of crypto who have asked for things like that - if I ever wrote an important thing anywhere in memory, how quickly could I get that zeroed after I'm done with it? So they kind of asked about that. And it's been proposed. We don't know what's the best way.

**Mat Ryer:** Is there no way for them to just programmatically change it to a different value?

**David Chase:** So the problem here is that the compiler sees that you're doing a bunch of writes to something that they're not going to read or do anything with, and it says "I could make that run faster for you. Let me just get rid of those writes." Which also then tells you the right thing to do, which is you would have another piece of code that you've ran, that verified that what you wrote there was really and truly zero. But that would take more time. And then the crypto guys say "Well, wait, we didn't want me to take that much time."

**Mat Ryer:** Yeah... There's no pleasing them really, is there?

**Yarden Laifenfeld:** Yeah, it's always the crypto guys...

**David Chase:** There's no pleasing anybody.

**Kris Brandow:** I mean, when it comes to security - talk about slow... I was listening to one of the Changelog & Friends episodes where they have the Oxide Computer folks on, and they were talking about how they had to take the printer they printed out the secret key on, and drill a hole through its microcontroller, and all of this to make sure that you couldn't ever recover the key, or anything. So that in terms of slow is like, okay, well, that's a whole big process. But I think it does kind of say something important about how we think about computing and how much we're like "Speed, speed, speed", and it's like, well, maybe sometimes we should have a little bit of a safety trade-off for speed. We just have to figure out where that balance is.

**Mat Ryer:** How quickly could you smash a printer though, Kris? I reckon I could get a printer smashed quite quickly. Like, destroy a printer.

**Yarden Laifenfeld:** But it's not just any printer. It has to be the correct printer.

**Kris Brandow:** And you have to smash it in the right way too, because you have to make sure that all of the chips and the memory and everything is just -- even the drum, you want to make sure, if it's one of those printers, that there's no...

**Mat Ryer:** Like the Terminator.

**Kris Brandow:** It's a lot.

**Mat Ryer:** Put it in some hot lava. That's one way. Throw it in the lava, and lower it down. That's just one of the things I learned from the Terminator franchise.

**Kris Brandow:** Industrial shredder.

**David Chase:** And it's a printer. They've never been good to us.

**Mat Ryer:** No, they haven't. They're the worst thing that we have to deal with, aren't they, printers? They're amazing now compared to what they were... But they're still the worst thing in the world, aren't they?

**Kris Brandow:** The original IoT device, and the most terrible of any that we've invented.

**Mat Ryer:** Yeah. \[unintelligible 00:42:44.14\] I don't want to say that too loudly in case mine hears me, and then I'll have problems next time...

**David Chase:** Yeah.

**Mat Ryer:** Yeah, it used to be like "You can't print, because your printer's not online." And then you'd go and press a button to say "Right, online", and then it's like "Oh, hang on then..." It's like, why is this even a feature? What do you mean? Why would you want it to ever be offline? I don't know, really, printers...

**Kris Brandow:** So speaking of stack and heap though, Yarden, you mentioned that sometimes you want to try and make things be in the stack, try and make things in the heap... Do you have any suggestions for people of how they might be able to control this, when they should control that, when they should care about doing either of those things, or any of that?

**Yarden Laifenfeld:** So you should almost always put things on the stack, which means -- like, okay, I know from my experience, I said that I wrote C for a while before I started with Go... And in C a really big thing is to pass pointers around. And the reason is not to copy big structures from one place to another one that's not necessary to copy them. I guess it's a thing of the past, when we didn't just have like really small hard drives that have a lot of space in them, where we wanted to save on memory, which isn't really such a big deal now; but that's how I was taught. And so I kind of took this practice with me to Go. But it's really wrong, because anywhere you can copy a struct, which means you just pass it around as it is, without taking its pointer, you should do that. Because then, as I said, it can be cleaned, and you're not giving any extra work to the garbage collector, which has to say "Oh, there's a pointer here", and then also just remember there's a pointer here, and then also go back and see where's that pointing to, does that have any additional pointers... Okay...

\[44:35\] So you should not be using pointers to save on memory. That's a big thing I learned. But you should be using pointers in case you want to share a reference to something. So sticking to that will probably get you a performance boost, if you haven't been doing that so far.

**Mat Ryer:** Yeah, so that's really counterintuitive, and I see people even that are new to Go, when they learn about a pointer, and passing something and it gets copied... And instinctively I think, even without that experience with C, instinctively you think "Well, I'll just pass pointers all the time." I see like slices to pointers of types, and things like this... Because it's like "Oh, of course, I'm just pointing to it. That's much easier." So that's really interesting.

**David Chase:** Sorry, I'm just sitting here thinking about how it relates to the calling convention.

**Mat Ryer:** What's that?

**David Chase:** Where we do use registers, we are willing to use a whole lot of them.

**Mat Ryer:** Hm. What's a register? What is a register, David?

**David Chase:** What is a register... You have a fixed amount of -- abstractly, before they started doing all the crazy things that they do in modern processors, you'd have a very small amount of scratch storage. And it's a fixed size, and they've got fixed names. 0, 1, 2, 3, 4, 5, up to sometimes 31, and sometimes more. And everything you really do, you end up moving it in and out of memory, into those registers; then you have all the operations on registers, and then you want to hang on to it and you store it. Sorry, I don't know what they implement them with nowadays...

**Mat Ryer:** It's so abstracted now.

**David Chase:** Very much. And now, with speculative execution, and hyper-threading, they have a layer of indirection between the names and the actual registers. And there's still a relatively small amount of them, compared to the gigabytes of memory that you might have on a machine. And so now, instead of 31 or 64, you might have a couple hundred. But it's still a small, fixed number; you have a number of names for them. And the machine instructions, which have a fixed size, have special fields where you code those small numbers, which are the names, into them, and that's a register. I hope that works...

You were asking about pointers, or mentioning the use of pointers and not... And there's a thing that Go does, that Java does a little bit, other programming languages tend not to do it as much... They do this thing called escape analysis. So there were reasons sometimes to make a pointer to something. Sometimes you need to call a function somebody else wrote, and it says, "I'm sorry, I take a pointer." Or maybe I wish to share that thing, I wish to do some changes to it, and then you need to see them. And then rather than taking a whole structure and passing it back, I decided, for whatever reason, to operate on a pointer. Go has this property on its package imports that there aren't any cycles. And what that means is that if you look at the runtime package first, it doesn't depend upon anything else. So you can compile it, and you can be done. And you can know things about the functions in the runtime package. And then you go up a little more, and you have another layer of packages that depend upon runtime and nothing else...

\[48:10\] And so for each function, you can say "Well, I passed a pointer to it", but when that function was done, it did not save a copy of that point or anywhere else. It didn't store it into the heap, or anywhere else. So it's done. And you could leave the thing that it pointed to on the stack; that would be okay. What they call this is escaping. So the pointer did not escape; it didn't get stored into the heap, or communicated to another thread... And they have this phase called escape analysis. And for functions and methods, they do escape summaries, so that you can call a function, and in kind of a crude way know that it did or didn't reveal it to the rest of the world; it didn't store it in the heap. And so this is a way that you can keep a little bit more stuff on the stack than you would ordinarily.

**Mat Ryer:** And does that happen at compile time, or is that a runtime thing?

**David Chase:** Right now that happens at compile time. We have been talking about how to do more of it, and do a better job... Among ourselves we have these competing proposals, and we go back and it's kind of a "Which of these is going to yield the most improvement? Are they going to have associated -- like a runtime tax to have this little gadget sitting around, helping?" And sort of what's the risk in the implementation? How hard will it be to get this done and not have screwy bugs prop up? So there's an idea that you might tell a function that returns something that it -- since it returns memory that it allocated, it says "Well, I can't put that in my stack, because when I return, my stack will be gone. So I guess it has to be on the heap." And there's this question of, "Could we change the calling convention to functions that return pointers to say "Here's a place -- you could use this memory here." Because the caller might see the lifetime of the result and say, "Yeah, I get this thing back, I use it, and I'm done. And I don't do anything more." Is there a way to hand it to him?

In Java, there have been implementations of Java... There was actual hardware with features for this by a company called Azul, where you would allocate initially, and it would try and keep it on the stack, and it said "Oops, sorry", and the hardware would have sort of high-speed fault, and it would record "That one was a bad idea to do on the stack. Don't do that again." But since it was in a hardware, the overhead was slow; it was not like some software gadget. So in the future, it would know "Take the other path. But meanwhile, this thing that you were just about to overwrite, that you need to escape, put it somewhere else. Fix it. But in the future, don't do this." So it had little clever hardware gadgets to help. And the question is, how far could you go in software? Would it be worth it?'

The Go garbage collector is not -- when you compare it to others, like the Java garbage collector, it's a little slower to allocate, and it's a little slower to collect garbage. What you get back is that it doesn't move memory. It handles interior pointers, and it has an extremely small stop-the-world pause time. So you have kind of like these interesting trade-offs in it. It doesn't have a lot of overhead to use pointers. But what that means is that -- so the trade-offs for what you might want to do to avoid a heap allocation, you might be able to spend a little more and have it still be profitable.

**Kris Brandow:** Yeah, I've definitely done some things in code in the past to make sure that what I'm writing doesn't escape to the heap. Just be like "No, I'm gonna write this in a specific way to make sure that the escape analysis makes it "Okay, this will definitely go on the stack."

\[52:08\] And one of the things that I wanted to -- I think we talked about it maybe in our tooling episode, or the episode on tools we love... It's like a way to run analysis in the same way you can do code coverage, that will then in your editor turn things like green or red; like, I would like it to turn all my variables, like, I don't know, blue, or some color, to be like "These will all escape to the heap, and these will all be on the stack."

So I think that would be also really helpful as a way to visualize for things that the compiler, or analysis tools are very sure will not escape, or pretty sure will escape. That would be, I think, a really helpful thing in this area as well, because I think we kind of lack tooling, and it's a lot of intuition and then analyzing your code after the fact, to see "Did that actually wind up on the heap? I don't know..." So if there's a way to see it more tangibly, I think that'd be super-useful.

**David Chase:** So there are two answers... At least two answers to that. And one of them is we've had these discussions with Go users in other companies; some of them were very focused on performance. And also with people working on the IDE. And so there's a flag you can pass to the compiler; it's kind of a little screwy. It's not one that a human would be happy to do. But it's intended for an automated workflow. You could say, "Here's this flag, -json=0,adirectoryname. And it will, for all the packages compiled, drop JSON in there, in an encoded - I think it's a URL-encoded name of the package. And it will talk about anything that the -- basically, the compiler logs, all of its failures there. "Mea culpa, mea culpa. Sorry, couldn't get debounced checkouts. Sorry, had to heap-allocate this. Sorry..." And it's in LSP format, the stuff that VS Code uses. And it was a little screwy to encode compiler messages. This is like the information you'd get from \[unintelligible 00:54:07.26\]0:54:08.18\] but in JSON, LSP. Format JSON. And so you could, in principle, pull this into an IDE, but one problem with this is that -- I mean, stuff goes wrong all the time, and the compiler is failing you constantly. "Debounced checks are still in here. Sorry, the null check is still here. Sorry..." But most of the time it doesn't matter, because most of your time is spent in just a few places... And so you need to combine that, I think, with something like profiling, so that you focus your attention on where the problem is, and not all the other places. Because otherwise you'll just say "Oh, look at this. The compiler's so terrible. Look at look at all it didn't do for me." And we're sort of working on that. There's PGO coming... Where are we at now? I think it's experimental; we're doing more soon.

**Mat Ryer:** So that's why you mentioned that it's not really for a human, because it's too noisy...

**David Chase:** I don't think it's really for a human, because it's too noisy. I think that there's another filtering step that you would need, either to look at their profile and say "I need to look at this function. Please show me the bad news for this function."

**Mat Ryer:** Do you have a CAPTCHA on it that says "I am a robot", they have to click? That's one way.

**David Chase:** No, we do not.

**Kris Brandow:** I think that would be actually -- that's the thing I was gonna say too, is it'd be nice if this was integrated into Gopls, or language servers in general, so you could kind of surface that information? So I think I would definitely use it in the way that I also use coverage testing. It'd be like "I care that this function in particular, or this file, or this package is very optimized, so I'm gonna go look at all nice coverage stuff." I think it'd be nice to be able to do that for like those specific places. But I think you're right, too; you don't want people just kind of looking at some random function that gets called once, and being like "Let me make sure it doesn't put anything on the heap." It's okay. A bit like reflection, where people are like -- you know, I've built a lot of those startup utilities that do like flag analysis, and all the fat. People are like "You're using reflection in here." I'm like "It gets called once when your process is starting. It is fine. Don't worry, it's okay if it's slow. We don't need to hyper-optimize this."

**Mat Ryer:** \[56:25\] Well, that raises a really good point, which - we do mention this a lot, which is "Measure first, and optimize after." But this raises a good question... Since the Go team are busy beavering away under the hood, changing things and adding optimizations and doing a lot of great work there, is it possible that we optimize our code and then a new version of Go comes out which makes some changes that then makes our code less performant, or makes some of our optimizations unnecessary? Is that possible to happen? Should we keep remeasuring and reassessing?

**David Chase:** I mean, I would never say never...

**Mat Ryer:** You just said it twice, David...

**David Chase:** I did. I did. I would say never say never more than twice...

**Mat Ryer:** Four times carry on.

**David Chase:** Okay...

**Mat Ryer:** No, go on. Sorry. I was just being annoying.

**David Chase:** Right. Right. So I think one thing that we would aim to do is to make some of your hard work in the past now be unnecessary. I have a bee in my bonnet to look into "Could we reorder fields, and quit telling people that they should sort their fields to make their structures more compact?" And we can make the optimization guide that much shorter. And then all of your good work sorting those fields out - sorry, that was time wasted.

**Yarden Laifenfeld:** Also, if anyone actually cares about the order of their fields...

**Mat Ryer:** Binary encoding often matters...

**Yarden Laifenfeld:** Yeah, stuff like that.

**David Chase:** And by the way, this is not likely to happen anytime soon. But it's just kind of a "You know, if we did that, we could do that, and then one step would be shorter." But ordinarily, no, we don't. People don't like it when their code gets slower. I can see -- so you may recall when Spectre and Meltdown came out... So for security things, sometimes the security fix is just going to make your code be slower.

There's a -- I can't remember where I saw it, but it was something horrifying with Java strings and two ways of encoding Java strings, and passing them to something, and you could have a race. So essentially, it validates the data, and then it uses the data. And because it validates and then uses it, you could have a thread racing to screw the data up in ways that it was no longer valid.

**Mat Ryer:** Oh, if you got in there in between those two operations.

**David Chase:** Yeah, yeah, yeah. So you can get very strange behavior. And I'm sure they're gonna fix it, and the way they're going to fix this thing is they're going to have to put in a copy. So you're going to copy it, then you're going to validate it, and then you're going to use the version that no one can mess with, and so you added some expense. And Spectre and Meltdown, it's like "Oh, you thought your processors were cool and fast? We're going to slow them down a little bit, and we're going to make you generate code a little differently." If that's your problem, it's like, "Too bad. It's slower now."

And when you first hear about Specter and Meltdown, and I guess Rowhammer, it's just kind of a "You did that? Oh, crap!" Because you'd like to think that the hardware was just gonna work, and not do these bad things to you.

**Kris Brandow:** Yeah. I think -- to kind of go back to that point we were talking about with like struct field reordering, one of the things I thought about... So yeah, it's nice when you order things so they're nice and compact, and fit in a small amount of space, but because of how caches work, sometimes you want the opposite of that, where you're like "No, no, I want these things to be on different cache lines." If you put them on the same cache line, my performance will just go out the window completely. So you can see how difficult of a problem this would be to kind of automatically solve for people.

**David Chase:** But that is not Go 101, and I also don't think that we would be solving that automatically.

**Kris Brandow:** Well, yes.

**David Chase:** \[01:00:20.24\] I mean, that's also not a thing that you would inflict on a beginning Go programmer.

**Kris Brandow:** Yeah. I was saying if like you reordered the fields of a struct, you might reorder them in a way that puts things in cache lines that shouldn't be next to each other, or something like that.

**David Chase:** Well, you also have to have a way to be specific anytime you talk to another programming language, or the OS... Things should be just so, and if they're not too bad for you.

**Kris Brandow:** Right.

**Mat Ryer:** Yeah. Speaking of that, we've reached the point in the show where it is time for our unpopular opinions.

**Jingle**: \[01:00:53.27\]

**Mat Ryer:** Okay. Yarden, do you have an unpopular opinion for us?

**Yarden Laifenfeld:** I do. I think it's really unpopular. My opinion is that Go should not add any new big features to the language.

**Mat Ryer:** Right. Why not?

**Yarden Laifenfeld:** Well, I like simple. I like simplicity. You asked me earlier what my favorite language is, and I said C and Go. And I think the reason for that is because when I look at Go code, or when I look at C code, I know what's going on there. And when I look at Java code, if someone has different conventions, like coding conventions, or if someone is using a newer feature that I'm not familiar with, the code might be virtually unreadable to me. And I think Go did a great job of really keeping it simple. I love that it like really forces you into a certain structure, and it's not like -- I don't know, if we compare it to Python, where Python basically lets you do anything you want... Even like Go's linters will be like "That's not how you're supposed to name a variable in Go." And I really like that. And I think it really helps get into the language, it really helps read other people's code, it really helps write good code... Because if you only need to learn the basics, and then you build off of that, instead of just learning more and more and more, then you're becoming a better developer so much quicker.

So all that to say that if we add any new big features, we're just getting away from that notion, and I think most big features would just Go against that and not add too much value to language users. And I'm not on the Go team, I don't know...

**Mat Ryer:** Yeah.

**Yarden Laifenfeld:** \[unintelligible 01:03:02.15\] by statistics.

**Mat Ryer:** You're talking David out of a job. But let me just ask you this... What about generics? How did you feel about that?

**Yarden Laifenfeld:** Well, I think you can guess how I felt about generics, Mat... \[laughter\] I just -- I really like it when there is one way to do things. And I know it's -- well, I know we've grown past that, I guess, as developers, and I wish we'd go back to it... No, I'm kidding. But I do like that we're advancing, and that things are more abstract, but I also like that Go keeps you kind of close to it. You do need to know what a pointer is... If you've heard this podcast, you know what a stack is... Important stuff like that. So - oh my God, I've completely lost my train of thought.

**Mat Ryer:** Well, that's fine. Okay, so -- but David, you're not thinking of adding any big features, are you? What do you think of this?

**David Chase:** I was curious how the generics were received... There's talk about extending iterators to be more general, and there's some question about whether that once coroutines are not - and coroutines would not be goroutines, because when you code up coroutines with goroutines, they're not fast enough.

**Kris Brandow:** \[01:04:15.26\] I do feel like that's a feature I want, is coroutines.

**Yarden Laifenfeld:** The thing is, these are all features I want. Like, I wanted generics. Before they existed, I was like "Oh my God, I need generics." I don't have the privilege of using them, just because we have to support really old-school versions... But I'm torn, but this is still my unpopular opinion. I stand behind it.

**Mat Ryer:** Cool. Okay. David?

**David Chase:** I have several. I don't think there is \[unintelligible 01:04:40.17\] no new features, but...

**Mat Ryer:** That's unpopular.

**Yarden Laifenfeld:** No, not no new features. By the way, I think the standard library could use some new features...

**David Chase:** Ah... \[laughs\]

**Yarden Laifenfeld:** And I think adding max and stuff isn't bad.

**Mat Ryer:** Yarden, this isn't a performance review for David. \[laughter\]

**Yarden Laifenfeld:** No, I'm sorry... I wanted to say this, but I wanted to be like "I'm so sorry. I'm so, so sorry. Please continue working on Go. You're doing a great job."

**David Chase:** I mean, I'm not sure. I mean, one of my unpopular opinions is more, I think, unpopular with the Go team, and it's kind of like squirrely and technical. But years ago, I had a lot to do with Fortran. My advisor, they referred to him as Dr. Fortran.

**Mat Ryer:** It sounds like an evil villain.

**David Chase:** I interned for John Backus.

**Mat Ryer:** Oh, wow.

**David Chase:** That's cool.

**Mat Ryer:** That is cool.

**David Chase:** And so I have a real soft spot for Fortran. And the thing that makes Fortran fast is just like one tiny, little thing, and it's usually true in programs. And that has to do with when you would, say, pass a pair of slices to a function, Fortran says -- you can pretend they overlap. If they overlap, it's not Fortran. And it's this interesting rule that you can't check with syntax, but if your code passes overlapping memory and parameters to a function, and it can tell, then it's not Fortran. So that's a convenient way of dealing with all the bug reports. They say, "My code can tell that you did this", and it says, "Well, that's fine, but that's not a Fortran bug. That's a bug in some other language. You're imagined. Go away."

But what this does is it lets you do vectorization, just willy-nilly; all sorts of vectorization transformations and parallelization transformations, and reordering. And this is sort of like the key to why Fortran is so fast. And so part of me says -- there's like these shaggy dog stories of all... And it gets back to stacks, actually. Like, the pain of inter-language calls and translating data between this language and that language... And it's never fun, and it's always annoying.

So if you just said, "We could make it go fast in Go", if you did this -- and it would need a lot of compiler work, and it would be more employment for people like me, which is great... But you could do this little Fortran change to the parameter rules, and then you could make code go faster. And to take this out of the previous century, or the previous millennium, I'd say "Machine learning. Whoo-whoo!" \[laughs\] So that's my unpopular opinion. And it's probably more unpopular with the rest of the Go team.

**Mat Ryer:** Yeah, they probably understand it. \[laughter\]

**David Chase:** Yes. I'm afraid that's the problem. That's the other problem, is to have an unpopular opinion that people don't quite understand.

**Mat Ryer:** Quite clever, in a way. Another one you wrote down, David, which I quite liked, was Go needs larger integer types. Int 128, int 256, int 512... What are you doing with all these massive ints, David?

**David Chase:** \[01:07:53.02\] Well, the processors nowadays have all of these crazy extra instructions that take giant inputs and giant operands. And they encode this in C by you -- for whatever reason, they chose stupid names for their integer types in C. And so when they had to go to these big integer types, they had to pick even stupider names. And you use them, and you have to include a special include file, and you pollute your code with these terrible, terrible names. And Go could have these instructions as intrinsics. And Go would have a perfectly good name for the input types: int 128, int 256, int 512. And so I think that would be fine. And we can implement this. We already handle 64-bit integers on 32-bit machines. It's not a hard thing in a compiler. Because people ask us things like "Well, we really want to get at the intrinsics. We want to do that", and we just go around and around on the best way, and we don't have good types, and so we'd have to do this hacky thing with structs, but that struct is special... It's like "Oh... Just say it. Int 128. There. It's done."

**Kris Brandow:** That reminds me of -- I think it was Rob Pike who might have put up a proposal to change int and uint to arbitrary precision... I was like "I like that. I want some arbitrary precision directly in my language." But...

**David Chase:** It could work. I think it would be interesting to look into whether you had a default behavior or a way to ask to compile code so that if they overflowed -- a counterproposal was that if you overflow your signed integers, boom; that's a panic. It's a little bit of a security issue, but it might not be a big one for Go. There have been exploits that involved integer overflow, but they also made use of "Ha-ha! Those guys don't check their array bounds. So they thought they checked their array bounds, but we overflowed their integer. We get to have fun." And Go would just say, "Yeah, no, we checked your array bounds. Get out of here."

**Kris Brandow:** Right.

**David Chase:** That might not be necessary, but that was a counter proposal. I think they would not go on the stack. I mean, maybe sometimes they would go on the stack, but then they'd have to have an option to not Go on the stack.

**Kris Brandow:** True. Yeah.

**Mat Ryer:** Well, on that bombshell - and thank you, David, for bringing us back to stacks then, and tying a neat bow on this... Yes, thank you so much. Yarden, thank you so much for all the community work that you do. GopherCon Israel, if anyone in that part of the world wants to Go and meet gophers, get on board... And also the Women Who Go Israel group... Something great about the Go community, and it's people like you putting all this work in... And if you don't do it, you don't really know how much work it is. I've glimpsed the amount of work that people put into this, so thank you so much for that.

David Chase - obviously, all your work on the Go team... What can we say...? Thank you so much for all that stuff. It was great to have you here. Kris, I've got nothing to thank you for, apart from showing up and being yourself. And thank you to our listeners for listening... Because honestly, without you, this would be genuinely pointless. I was Mat Ryer, thank you to me as well... I'll say it, as no one else was gonna step up. Thank you very much, we'll see you next time on Go Time.
