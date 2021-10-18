**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about memory management. We're joined by distinguished engineer Bryan Boreham from Grafana. Hello, Bryan.

**Bryan Boreham:** Hi, there. Hi, Mat.

**Mat Ryer:** Welcome to Go Time.

**Bryan Boreham:** Thank you for having me.

**Mat Ryer:** No, it's our pleasure. We're also joined today by director of engineering at Cockroach Labs, it's Jordan Lewis. Hello, Jordan.

**Jordan Lewis:** Hi, everyone. Nice to see you over this video.

**Mat Ryer:** Yeah. Good, thank you. I like the way you said that, in a very sort of natural and authentic way.

**Jordan Lewis:** \[laughs\]

**Mat Ryer:** We also have my friend and yours, Jon Calhoun. Hello, Jon.

**Jon Calhoun:** Hey, Mat. How are you?

**Mat Ryer:** I'm good, mate. Welcome back. It's been a while. How are you doing?

**Jon Calhoun:** Yeah, it's been a while since we've done this together.

**Mat Ryer:** That's right. Yeah, you were on it last week, weren't you? It's welcome back to me, if anything. Do you wanna say it, or...?

**Jon Calhoun:** Oh, welcome back, Mat. Sorry.

**Mat Ryer:** \[04:04\] Oh, thank you. Thanks, good to be back.

**Jon Calhoun:** I figured if you're hosting I'll just kind of let you pretend like you've been here.

**Mat Ryer:** Yeah, fair play. Okay. Well, I also like to do just a little regular slot where I do a shout-at, or a shout-out to a Go meetup from the community. Today we are shouting at the Utah Go User Group, and Women Who Go Utah. Great groups there. Mariah Peterson tweeted that one at me, so... You've been shouted at now. And if you're in that area, and when you can, check them out; go and join them in.

Okay, I'm interested in this subject a lot, because it's one of those ones that I think has lots of interesting corners, but I think also having a good understanding of what's really going on can only help us. Maybe we can start with a little bit of history. What was memory management like in programming languages before Go?

**Bryan Boreham:** It takes me back, really, because I have programmed in C and C++ and a few other things, and... Basically, in C you call malloc( ) when you want some memory, and you call free( ) when you wanna give it back. You can have things on the stack if you don't wanna do that, and those are your options. So memory leaks, where you just forgot to free things, were very common. Memory overwrites, where you realize that someone else wanted that memory also happen; pretty hard to get it absolutely perfect.

**Mat Ryer:** Yeah, it's funny, isn't it? Because you think in the simple case that's quite easy. You're gonna ask for some memory, use it, and then give it back. But of course, as soon as you have anything a little bit more complicated, that becomes a nightmare, doesn't it?

**Jon Calhoun:** I feel like anybody who's tried to teach with that style of programming should pretty quickly realize that even the simple case is not simple to somebody who's not used to it.

**Bryan Boreham:** Yeah, I was gonna say, you get into things like reference counting, where you try and keep track of how many different things in your program want the same piece of memory, and when you count down to zero, now you can free it. I used to do that by hand on iOS programming. it's got a little bit more automated since then. Yeah, it's always a bit of a challenge.

**Mat Ryer:** Yeah, I had that same thing... So I kind of started in languages where memory was managed, actually, like -- well, scripting languages, and C\#... Languages like that. And then I wanted to do something for iOS, and so I learned Objective-C. And this was before the ARC (automatic reference counting), before that, where you had to do the allocations and things yourself... And it is hard. You definitely end up relying a lot on the tooling to sort of -- you know, you use the app in a simulator and watch the memory if it's leaking where it shouldn't, and things like that. But it was so nice when that ARC stuff came out, and suddenly you just didn't have to worry about that now. I think it was just the compiler was doing it for you, was checking where things were used and where they could possibly be used, and when they'd sort of fall out scope, then maybe they could be cleaned up... But yeah, we kind of take it for granted. Go has always had this, hasn't it?

**Jordan Lewis:** I was gonna say, I feel like I'm remaining quiet, because my whole professional career I've only used languages with garbage collection. I did a little bit of manual memory management stuff in school, and it was hard. And it didn't matter as much, that was kind of the great thing about it. You could get it a little bit wrong, and since it was just an academic project, it didn't matter too much.

I didn't wanna be the first one to mention the word lifetime, but for me whatever you do with memory management, whether it's a language that has a lifetime kind of thing in it or not, it's all about thinking about those object lifetimes. That's what it comes down to, memory-managed or not, right?

**Mat Ryer:** \[07:50\] Yeah. So maybe elaborate a little bit on that then. In the context of Go, just in the very simple case, we're gonna have a function, we're gonna declare a variable inside that function, we're gonna assign that to value, we're gonna give it a value, and maybe we're gonna print it out, and then we're gonna return. We're not gonna return it, we're just gonna leave it. What's going on in that? What's being allocated there for us, and when does that happen?

**Jordan Lewis:** I think it depends on what the function that you're calling is, right? I think in some cases, depending on what that function needs to do with the object that you're passing it, you may or may not be able to simply allocate it on the stack. You might be able to not have to use any kind of malloc at all, and just let it live on the stack, get passed to this thing, and get freed by the stack magic freeness of the world. If the function is doing something more complicated, if it has to store it somewhere... Or not even storing it anywhere, but the compiler can't infer that it's not storing anywhere, it might actually cause code that's generated for that function call to require that the object that you've allocated gets promoted to the heap, which is kind of where the story begins.

**Bryan Boreham:** It does very quickly get complicated, doesn't it? For someone like me, who's spent decades trying to both understand what's going on and make it go faster usually, kind of understand all the ins and outs. But if you're a beginner to all of this, it just kind of looks like a variable; what are we talking about.

So I think the two things, the stack and the heap - every goroutine has a stack, and mostly your local variables, things that you do in the course of a function will live on the stack. And it's very fast, because as you come into a function, we just kind of add. The compiler figures it out. The compiler figures out this function is gonna need 70 bytes of variables... So it just adds 70 to a number, which is the stack pointer. And then we use that memory, that 70 bytes - we're using that for local storage, local variables. You come out of the function and you subtract 70.

So you're just adding and subtracting, and as you call more functions, you add more, and as you return from functions, you subtract. And the stack is a really fast and simple thing. But that's all you can do, and that's what Jordan talked about lifetime comes into it. If you need a piece of data to hang around while you go call a bunch of other things or you're gonna keep that data and pass it between different goroutines, or you're gonna cache it for the entire life of your program - that needs to live somewhere else. That can't live on the stack of one goroutine. So we put it in this other place, which goes by the name heap. Heap as in like a big old heap of stuff. It doesn't mean anything particularly technical. it's just the word that we use for the way that those longer-lived -- or at least might be very short-lived, but we don't know for sure, so we put it on the heap, and then it can live for a long time.

**Mat Ryer:** Yeah. But do you need to know about this in order to write Go programs?

**Bryan Boreham:** I would say not. I would say that is part of the magic of Go; that's the intention of the authors, that you just write variables and you pass them around... And you can do things that are a complete nightmare in C. You can return the address of a local variable from a function. That's pretty much an instant crash in C. If it's not an instant crash, then it's a really weird bug. But... \[laughs\] It's one of those ones that will take weeks to find if it doesn't crash instantly. So Go certainly makes it look easy, I would say.

**Jordan Lewis:** I would agree with that. To me it feels like it really is trying to be a language where you can not have to think about any of these details if you don't want to. But if you want to, it also gives you some of the predictability, I would say, that you would expect from a language that is doing sane stuff using a stack and a heap, kind of thing. You can, for the most part, predict when something is going to live on the stack, versus something that's going to live on the heap, and that can really help you when working on problems that require performance.

\[11:54\] One thing that's kind of interesting is what is the line between not having to know about the stack and the heap, versus needing or not needing to know about, say, pointers versus values. That's something that I think trips up a lot of Go newcomers, especially ones that are coming from languages like maybe Python, where you're really not thinking about this stuff at all... But I think that's a little bit of an interesting choice, exposing the detail about pointers versus values, and not really thinking so much about stack versus heap.

**Mat Ryer:** So how do you decide then, just for anyone listening? How do you make the decision about whether you're gonna use a pointer or use the value? And we should say the difference - for example, if you've got a function that takes a pointer, you're literally just passing in a reference to something else, which is obviously a fixed size... Whereas you could be pointing to either big data, or maybe you just don't know, so you wanna be safe. Or you pass it without it being a pointer type, and you're then copying the entire value into the stack of the new thing. So what's the consideration that you make when it comes to that?

**Jordan Lewis:** I feel like there's a lot of them. I take this as one of the most tough things that people struggle with, right when they're switching to Go; it's like "What is the algorithm that you're supposed to use in your head when you're choosing one of these things?" There's certain things that are definitely constant. I'll name one of them, which is that if you have an object that has a method on it, or I guess we call it a receiver in Go, if that method is going to edit the object, that cannot be a value receiver of an object. That has to be a pointer receiver, or else you're gonna become pretty sad; you're gonna run this method, and it's gonna edit, it's gonna say "object.attribute=blah", the thing will return, and then you'll be extremely confused, because the attribute of some object that you pass will have never been edited, since really you're just examining and changing a copy of that value. I'd say that's a number one pitfall that I think even I've made mistakes like that, and I've been programming in Go for about five years now.

**Mat Ryer:** Yeah, absolutely. I like that one. That is like -- if you're passing a pointer to an object, then it's able to make changes to it. This is basically what you were saying. The analogy of taking in an argument there. And of course, if there's a value it's a copy so you can't. That also communicates something to the user of your API as well. If you have an API and you can use it as an opportunity where maybe you've got a mix of these methods or functions, and some of them are gonna modify and some aren't, would you use that pointer as a sort of signal to that?

**Jon Calhoun:** If I recall correctly, I think some of the Go style guidelines kind of suggests that if you use pointers for some of your methods, that generally you should use them for all, just for consistency's sake. I mean, I get what you're saying, but I think the other side of the argument is that if it's not all consistent, it just could lead to some weird code to manage and read.

**Mat Ryer:** They'd rather just keep it simple, keep it all the same.

**Jon Calhoun:** I believe that's what it was. I'd have to go look again, because it's been a while since I've read wherever that was...

**Bryan Boreham:** We've talked a lot about other languages, and (say) C++ you have this "const" word you can put, so you can explicitly say whether the program is supposed to be able to modify this thing or not by the absence or presence of the word "const".

**Mat Ryer:** You can do that on anything. You can do that on any variable, on any object type. Because in Go we're more limited with our consts.

**Bryan Boreham:** In Go, a const is a 3.14, the value of Pi. It's that kind of constant. A constant of the universe, or a constant of your program. But in C++ the word "const" can appear as a modifier, or anything. Anyway, we're talking about Go here, because it's the Go Time... So yeah, it's a little bit that -- certainly, if there's no pointer on a variable, then you've got a copy of it. You do not get to modify the original. When I say that, it's confusing, because something like a map is inherently pointer-like; that's the way I say it. If someone hands you a map in Go and you make a change to it, add something to the map, you've added it to the original. And it kind of makes sense, because the map might have a thousand things in it. You don't want the Go runtime to go copying a thousand things every time you pass a map to a function. But it is, I think -- you kind of build up this set of rules you have to remember, like an int, or a struct... It's gonna copy if I pass the thing by value. A map is inherently pointer-like. A slice is kind of in-between, because given a value of a slice, I can write into the elements of the slice, but I can't change the length of the original. I can change the length of my copy. Yeah, these are, I think, mildly confusing parts of Go.

**Mat Ryer:** \[16:32\] They are, but as you sort of iterated them out there, I realize that it doesn't come up often... I suppose because now I sort of am just second nature, I know if you're passing a map around, it's a map pointer, essentially... But yeah, I'm sure there will be cases where that matters. But this comes back to, for me, dead-simple designs, really obvious, not trying to do anything clever. If you're taking slices and you're gonna modify them, that sounds a little bit magic. I'd rather get them through a return argument kind of thing. So I don't know if I avoid it through that reason, but... It is interesting, these things.

And what about the size thing? You mentioned a map with a thousand items. If you have a struct and it's just this great, big object, and it's got some image data in there maybe; it feels like a big thing... Is that enough of a reason to decide to pass it by a pointer, always, just by default?

**Jordan Lewis:** Well, I guess I'm trying to figure out how your example works. Your example says you're holding a map that contains a big byte slice, or something like that...

**Mat Ryer:** I just mean a struct. Your own type, but you consider it big.

**Jordan Lewis:** I see.

**Mat Ryer:** But maybe it makes sense in your API that you don't have a pointer, because you're not gonna be modifying this, so you want to pass it in... But do you get a performance penalty if it's copying all that data in that?

**Jordan Lewis:** You definitely do, and I think there's a judgment call about what's that threshold. When is it worth it to allocate and pass this thing by pointer? And we haven't really talked about the performance costs of allocation really just yet. I'm sure that will come up soon. But definitely, depending on your program, to some extent, and probably there's some rule of thumb that says maybe if it's more than -- will your thresholds be like 64 bytes, 32 bytes, or something like that? I don't really know.

**Bryan Boreham:** Well, I can guarantee it will change from one CPU to another, probably from one type of memory chip to another. There's no one constant number where it's gonna pass that threshold of whether it's cheaper to copy or cheaper to pass the pointer.

Modern CPUs are amazingly fast at copying memory. I bet that number is bigger than you might have guessed, if you haven't actively gone out and measured it.

**Mat Ryer:** That's an interesting point. And you also mentioned measuring it, and I think that's another quite important piece - it's nice to write efficient code, but you can worry about it too much, I think. And sometimes it doesn't matter. But I don't wanna ever discourage people from learning more about that, because it is very interesting.

**Break**: \[19:04\]

**Mat Ryer:** Let's talk about the performance of allocating memory then. Of course, it's not a free thing to do, but it sort of feels like we are just reserving the memory, not that there's like effort to reserve that memory. What is the cost?

**Bryan Boreham:** Yeah. I do remember it's nearly free on the stack. It's when we do this lifetime management and we want it to hang around for longer, that's when the cost goes up.

**Jordan Lewis:** One of the most interesting things to me about doing performance measurement of simple things -- because that's what we really love to do as programmers... We're like "Well, let's try to figure out, what's the fastest possible way that we can write this fairly simple algorithm that just does a couple of things?" So we love to do that, we love to write a micro-benchmark... Go's micro-benchmark support is excellent; it's got all these different facilities, and there's benchstat, and you can profile things up the wazoo etc.

One thing that I find very interesting and that's kind of bitten me several times is that if you just take a look at a CPU profile of a little micro-benchmark that does a bunch of allocating, it's gonna seem really cheap. Those allocations are really fast, because the garbage collector is really good when the computer isn't under load, and when there isn't GC pressure; when the garbage collector isn't too taxed, it's gonna be very cheap to allocate, and the garbage collection is gonna happen in the background, and everybody's gonna be pretty happy.

What I've seen over and over again is under-estimating the effects of doing a lot of allocations in a real program, kind of micro-benchmark versus real program. In a real program, those allocations are almost always going to add up to be more than what it seems like in your micro-benchmark.

**Bryan Boreham:** I think it might be useful to try and motivate, think for a bit about what is hard about managing this thing we call a heap. So first of all, what is it? So you've got some random program, it's allocated a bunch of small blocks, maybe it's allocated some bigger blocks, maybe some 64k blocks, maybe one block of 103402 bytes, and the memory manager, the heap manager has to let you do all of these things, and do them in any quantities, in any order, and within some bounds. Your whole computer has got 64 gigs of RAM, 16 gigs, or whatever; there's some limit that you can't go above. But the heap manager will let you allocate any number of blocks, of any size, within that overall limit. And it will let you free them up, stop using them in Go. You don't explicitly do that when you no longer have any references to a particular piece of memory, then that's considered garbage to begin with. It's still hanging around... We'll get to that in a second.

But assuming we've managed to free up some memory, now the manager has -- the next time you wanna allocate some memory, it's got the task of figuring out where there's a hole. You don't wanna just get bigger and bigger and bigger the whole time. You've freed 64k, and now you wanna allocate 64k - you should probably use the one you've just freed. So the memory manager has a task of trying to give you back the best block to keep things under control. Maybe not the best, but some kind of reasonable choice of block. It's got a lot of options. If you freed up 64k and then you allocated 8 byes - well, it could take the first 8 bytes of that 64k.

I'm trying to motivate this picture that it's actually really complicated to keep track of all these potentially millions and millions of blocks at all different sizes. Then we throw in some performance considerations that most computers these days have multiple CPU cores, and you really wanna keep the memory together on one CPU core and not have little bits of memory next to each other being used by different CPU cores, so the memory manager is gonna try and help that along; it's gonna actually keep different, typically arenas of memory for different cores. And we haven't even gotten to our garbage collection yet. It's already really complicated. And any memory manager, in C, and C++, in Objective-C, whether you're automated reference counting - they're all doing the stuff I've talked about so far. They're all kind of keeping track of what's in use, what's not in use, what could be reused... They're all doing that.

**Mat Ryer:** \[24:12\] Yeah, so I was gonna say - the reason why you can be relatively proficient at Go and not worry too much about what's going on underneath... Although, Bryan, that was a good example of a case where when you do know what's going on, you might make different design decisions... The reason is really because Go has this garbage collector in there that's kind of freeing up the memory in our wake, as we just sort of plow through our program. Tell us about the Go garbage collector. Is it good?

**Bryan Boreham:** It's pretty good. I think reasonable people can have vicious arguments about this...

**Mat Ryer:** I'm sure they do.

**Bryan Boreham:** So garbage collection as a computing technique has gotta be 50-60 years old. A lot of work has gone into it since the early Lisp... So the Go garbage collector is not state of the art. It's kind of a couple of steps back from that. But it is very, very effective; I'm pretty sure I could go there, the exact nuances of which techniques it uses and doesn't use... There's a great paper - we should put a link in the show notes; there was, I think, a keynote speech at a conference where somebody went through the entire history of the Go garbage collector, and spoke about that they had actually tried out a lot of these more cutting-edge techniques, and the difficulties they had fitting them into the kind of world of Go.

We've kind of skipped ahead slightly. I mean, what is garbage collection? We talked about it in vague terms, this idea that once you no longer have any reference to a piece of memory, that it's considered garbage. So what you wanna do is identify all the garbage and then make it available for reuse, as your program carries on, trying to allocate more memory.

And these days in Go it's running goroutines in the background, kind of walking across the heap, and doing this process of figuring out what's in use, what's not in use. It needs to figure this out starting from all the places you can start in your program. So you can start from a global variable that could be a pointer to some memory, it could be a local variable on the stack of a goroutine... Anything that they point to, anything that those point to - all of that, there's some way to reach a lot of memory, and that's the not-garbage... And it has to work out what is garbage, which is everything else.

So yeah, it runs along in the background. So it doesn't stop the world. This used to be a big thing in Go. It used to kind of halt everything and then figure out where the garbage is, and then carry on. And that's a bit annoying if you're trying to have a very interactive program, something that's serving requests very quickly; it would stop for a hundred milliseconds, or something like that, and that's jarring if you're trying to interact with it.

So it does most of the work in the background, figuring out where the garbage is... And then there's a very, very brief pause where it does still stop the world, but it stops it for -- I don't know, a tenth of a millisecond, or something like that... And it resets a few pointers, and then you carry on allocating memory, running your program, and so on.

So that's basically how the Go garbage collector works. It does all of this in one heap, so it doesn't have what's called a generational design, it doesn't try and separate younger-lived things and old, longer-lived things. It's not a copying garbage collector, which can be nice if you sort of take all the non-garbage and copy it all the way down into one end of memory, that's all together, and the cache works better that way... Then you start fresh in the big expanse that you've just moved everything; a lot of garbage collectors work that way. The Go garbage collector leaves everything where it is. It never moves memory on your behalf. So that has pros and cons. I think that's kind of - up to a certain level - how the Go garbage collector works these days.

**Jordan Lewis:** \[28:02\] I like how you describe it in terms of what it's not. I think that's a very effective way. It's hard to describe something in terms of what it is, especially something that's so complicated as a garbage collector.

**Bryan Boreham:** Yeah, it's viciously complicated and really hard to get right, and I certainly take my hat off figuratively to the authors of the Go garbage collector.

**Jordan Lewis:** Absolutely. My colleagues like to remind me that even though the Go garbage collector is not a moving collector, I think the spec for Go allows it to be a moving collector, which is kind of interesting. No doubt, despite the fact that the spec allows this, it would break untold numbers of programs that use unsafe pointer and things like that... But I always thought that was kind of a neat loophole for the future that the Go team left.

**Mat Ryer:** Yeah. It's funny we talk about this idea that our garbage is gonna be collected for us... And Bryan, you mentioned a scenario earlier where you have a block of 64k, and you free it, and then you get another one immediately, and you free that, and then you get another one. Why not just hold on to the one that you already had? And this is a concept of kind of using pools, which, you can use -- there's a pool in the standard library... The sync pool, which sounds cool...

**Bryan Boreham:** Yeah. Well, I like to appeal to the song that goes "Reduce, reuse, recycle", at this point.

**Mat Ryer:** Yeah.

**Bryan Boreham:** First of all, if you reduce the amount of memory you're using, then it's gonna be less work for the garbage collector. But if you can reuse memory, like you were just saying, with a pool, then again, the garbage collector has less work to do. And then finally, I guess recycle is what the garbage collector does.

**Mat Ryer:** I like that. That's a great analogy.

**Jon Calhoun:** We've also seen cases where people try to do that on their own... I thought we had one episode with somebody who talked about channels, and passing (I think) byte slices into the channels... Do you remember that, Mat? I don't remember which episode it was.

**Mat Ryer:** Yeah, I don't remember that. But yes -- actually, let's talk about just quickly what a pool is, because it sounds really cool and clever. It's actually quite simple, isn't it?

**Jordan Lewis:** Well, I can tell you a little bit about what a pool is... I don't know so much about how it works under the hood, to be perfectly honest, but the general idea of an object pool is that it allows you to reuse big and complicated and expensive to create objects. You ask for one of these big and complicated and difficult to create objects, you fill it out, you use it for a little while, and then when you're done with it, instead of just giving it back to the garbage collector to chop apart and throw back into the heap, you have a little moment in which -- well, I guess you don't have to have this, but you can have a little moment in which you can clear it out, and get rid of any other references in there, or do whatever you want with it, and then stick in back into the pool for later use.

The purpose of this is really just to amortize the amount of work that you have to do to make one of these big things in the first place. And this can come into play in a lot of different scenarios. People love to use Go for microservices, so for maybe a web service, or some RPC service, or something like that... A lot of the time you can imagine an RPC service is sitting around idle maybe, or it's doing a bunch of work, and then it's doing very little... And every time that it gets some request, it has to do some complicated thing, and make a big object, and do a bunch of initialization work.

And with an object pool, if you don't mind using some memory for a big cache of these objects, basically, you can skip a bunch of that initialization work, and that can really be nice. You can see improvements in your overall program's performance, depending on how expensive that initialization really is. I think that's basically the summary of an object pool.

**Jon Calhoun:** It's probably worth noting that sometimes it's not even big objects, it's just things that are slow to set up... So a database connection pool is pretty common, where you don't wanna connect to the database every single time you're talking to it... But if you have a pool of connections that you can just take and use, then every single request isn't gonna have that delay of connecting to the database and making sure it's all good.

**Bryan Boreham:** \[31:50\] I would add one thing to that, which is -- we don't particularly talk about the performance angle, but the garbage collector does take a lot of work. It's work that mostly happens in the background; it's undeniable it takes a lot of work to walk through all the blocks of memory that have been allocated and freed and figure out which is garbage, and so on. It takes a lot of work. So the thing about big objects is that Go has a level, a number which is the limit that it's gonna let the heap grow up to. This is a dynamic number. Go tries to figure out what's the best number for your program. But let's say it's a gigabyte; your program is running along, it's doing a lot of stuff, and you're using memory, you're discarding memory, and the total amount of memory that is in play, if you like, will grow up to one gigabyte, because that's what I've decided the limit was for this example... And when it hits one gigabyte, now Go has to definitely figure out what's what - what's garbage and what's not garbage. Because that's the sort of target it's set itself. We call that a fool GC; it's stuff going on in the background, it can kind of reclaim stuff as it goes... But when you hit that limit, it has to do a full sweep and kind of know exactly where everything is. And one reason for that is it's gonna make a decision; if it genuinely can't get any more free garbage, it's gonna go to the operating system and ask for more memory. At this point, it's probably gonna go to two gigabytes. And going to the operating system for memory is a relatively very expensive thing to do. So Go is trying to keep to that limit that it previously chose.

So back at the question of large objects, simply by allocating -- let's say you allocate 10 MB. You can only do that a hundred times for the gigabyte, just in simple terms. So every hundred times you go through that bit of code that allocates 10 MB and then discards it, turns it into garbage, you're gonna have to full garbage-collect every time you hit that threshold. And full garbage collects are, in simple terms - I'm simplifying, because it's horrendously complicated under the hood... In simple terms, you wanna cut down the number of times you do a full garbage collect, and the rate at which you do a full garbage collect. So just for that reason, any kind of relatively large buffers, blocks of memory, you may wanna pool... Not because they actually cost a lot to set up, but because they drive that number. So that's kind of a subtle piece of knowledge that you might not pick up.

**Mat Ryer:** And how do you know if you're in that situation then? Is this back to "you measure things"? So how do we do that? What's the best way to measure this stuff?

**Jordan Lewis:** It's about setting up application metrics, and paying attention to the sort of things that you have access to as a Go program. I think you can get some pretty detailed information about what the garbage collector and the heap is up to as a Go program by sort of asking the runtime. There's a special function that you can call and it gives you back a bunch of information.

You can kind of do this at a low level, but there's a lot of libraries out there that have figured out how to piece this stuff apart and expose it, as metrics maybe as Prometheus or as a little web service or something like that, so you don't have to go through the pain of figuring out what of these -- there's a lot of metrics in there, to be honest. There's something like 50 little different struct members that all have subtle different meanings... That are important, but I think as just a basic idea of what's going on in the heap, I really like this program called Statsviz, which somebody named arl made, that just exposes this little HTTP server that has a little real-time drawn graph of the different lines. That threshold that Bryan mentioned is represented very clearly, and you can kind of see, it's really neat. If you're running it on an active web server, you can see the actual amount of heap trending towards that threshold, and as soon as it comes above, then you can see there's a line for the full GC, the thing drops back down again, the idle changes... It's actually very fascinating, both for just learning about how garbage collection works in general, as well as understanding the behavior of your program.

**Mat Ryer:** Great. Yeah, that tool looks great; we'll put a link to it in the show notes, for sure.

**Bryan Boreham:** \[36:02\] I work a lot with Prometheus; a lot of the Prometheus maintainers work at Grafana Labs... So that tends to be my go-to technique for looking at what's going on, particularly at scale, if you've got 100 programs running and you wanna keep an eye on what the bulk of them are doing. It's basically the same data. It's coming out of the Go runtime, but they show up as things like go\_memstats\_heap\_alloc\_bytes. That's one of the core ones. That's how much memory has been allocated. If it's going reasonably slowly, you can see that number rising. It typically looks like a sawtooth. It rises quite slowly, then it drops very sharply when we free everything up in that full garbage-collect, and then it rises again.

What might be happening - your program might be garbage-collecting like ten times a second, in which case the metrics are not going to pick that up. It's just like a blur. And unless it's a really, really small program, you do not want the garbage collector to be running ten times a second. Once a second is more moderate, or once every 30 seconds, or something like that... It's a trade-off; you're trading off how much memory you've got, against how much work you want the garbage collector to do, against how big is your program... There's no hard and fast rule -- well, there's one hard rule; if you're doing garbage collection, Go will run the full garbage-collect every two minutes. That's the slowest it will go. That's hardcoded into the runtime. But if you watch the rate at which garbage collections are happening, which is a different Prometheus metric, if you're doing it that way -- I've forgotten the name... But if you watch the rate at which it's happening, I think a lot faster than one a second is probably too fast. And you can't really go too slow, because you either run out of memory or you hit that two-minute point.

**Jordan Lewis:** I didn't know about that two-minute point. That's actually pretty interesting. That's a trivia question right there.

**Bryan Boreham:** Yeah.

**Jordan Lewis:** One thing I wanted to actually quickly mention, just to tie this back into the object pool question - I think that here's something neat that happens when there's pressure on the Go heap. Doesn't something special happen to the object pools? Don't they notice and maybe drop unused objects, or something like that? I'm never exactly sure how that works, but I bet one of you know.

**Bryan Boreham:** So the pool we're talking about is in the sync package in the Go standard library. So sync.pool. The way it kind of looks like it works is you get things out and you put things back. But under the hood, it's got a secret tie-in with the garbage collector, just as you say, and depending on how things are going, the pool might shrink a bit in order to free up memory for the garbage collector.

**Mat Ryer:** Hm... I didn't know that.

**Bryan Boreham:** Yeah, another good trivia question.

**Mat Ryer:** Yeah. \[laughs\] You have to go to a very specific kind of pub where these are the sorts of questions, but when they come up - you're gonna look great, aren't you?

**Bryan Boreham:** \[laughs\]

**Jon Calhoun:** I just thought it was every pub in San Francisco.

**Mat Ryer:** Yeah, it could be. Yeah. \[laughs\]

**Break**: \[39:06\]

**Mat Ryer:** So with this garbage collector cleaning up after us all the way, that means we can't have a memory leak, doesn't it?

**Jordan Lewis:** Ha-ha. Ha-ha-ha.

**Bryan Boreham:** \[laughs\]

**Jordan Lewis:** Y'all laugh. \[unintelligible 00:40:18.18\]

**Mat Ryer:** Aww... Sad face emoji. What do you mean?

**Jordan Lewis:** Well, there's a lot of different ways in which you can have a memory leak, even in a garbage collected language. One of my favorite memory leak stories, or types, I guess -- it also has to do with these sync pools. So not to hammer the sync pool to death, but imagine what happens if you have one of these objects that's a little bit complicated - maybe it's big, maybe it's small, but maybe it's a struct and it's got some slice pointers. Maybe you're actually slicing the front off of those slice pointers, little by little, because maybe you're implementing a queue, or something, whatever it is that we do when we slice off the heads of our slice pointers. As it turns out, the garbage collector cannot free the front half of slices. If you take off the first five elements of a slice and then you don't change what that slice is pointing too, that array never changes, let's say. Those first five elements will stay on the heap forever. And let's say that they actually are pointers to some other giant objects - those objects are basically lost, and you will never really know. You can get into really, really bad territory with stuff like that. That's happened to me several times working on CockroachDB, which is this big Go program that has a lot of tricky stuff to deal with memory.

**Jon Calhoun:** Yeah, that's one that I've seen myself, because I was trying to teach people how to write a queue in Go... The simple implementation - you want to do that, but then you also have to have the caveat of "If this goes long enough, it's eventually going to break, because it's just gonna indefinitely keep using memory." So it's hard, because you're like "I wanna show you the simple version, but I also don't want you to have something in your code that potentially is gonna be problematic."

Another case where that happens is when you have goroutines that just don't end, for some reason, and time.tick is an example of that. It's a function you call in the Time package that when you call it, it gives you a channel that will send a message every so often; so it's supposed to tick every second, or whatever time you want. It actually has explicit documentation that this won't be garbage-collected... And there's ways to do it with garbage collection, but that specific helper - there's just not a way to clean it up.

**Mat Ryer:** That's so strange. Why is that a thing, why is that slicing the heads off a thing? By the way, I like how you described that; you sound like a murderer. But why does it do that, the first five? That seems such a random thing. And is it not fixable?

**Jordan Lewis:** Basically, the reason for that is that a slice, as we know, it's got a little bit of information about the length - that's the slice header - and it's got an array, a pointer. That's what makes up the data inside of the slice. And as I understand, once you've created the array that has the data in it, you can't exactly say to the garbage collector that this array of a particular size is half-collectable. You're just not allowed to do that. That's based on how the implementation of the garbage collector kind of works. It probably gets into things like size classes, when you're allocating objects of a certain size... I think the allocator likes to give you chunks off of a particular area that's all doing chunks of a certain size. So if you were to maybe edit the size of an object that's already been allocated, probably something would get confused etc. I bet this is fixable. I don't think that it's something that's hard and fast, impossible to fix, but I doubt that it would be fixed soon, just because I don't think it's the most important thing to improve in the Go language right now.

**Bryan Boreham:** You can have pointers into the middle of an object, whether it's a slice, or a struct, or whatever... And that's kind of part of the picture, the way things are. A number of pointers, whether they're at the beginning or into the middle of a single object, keeps it alive. It keeps it from being turned into garbage.

**Mat Ryer:** That makes sense, I guess. You'd be surprised if it wasn't the case, would you?

**Bryan Boreham:** \[43:56\] I think Jordan's example - you could construct a kind of proof acceptable by humans that nobody could ever get to the beginning of this slice... But as you were saying, the garbage collector doesn't have sufficient information about what's inside objects that would allow it to break it in half, or whatever.

I was gonna say, the word "leak" - when I first programmed in C, a memory leak was when you had lost all reference to a block of memory. You would do that quite a lot. So it was just leaked; you could never free it, and it just kind of hung around, because there was no garbage collector in C. in garbage collected environments we use the same word, a leak, but we mean memory which we do still have a reference - something is still keeping it alive - but we didn't mean to. It's hanging around; we don't actually have a purpose for it. It's hanging around because we've got a reference to it, but we didn't mean to have a reference to it. So it's kind of a different use of the same term, but yeah, it amounts to the same thing. This thing called a leak, what it means is your program is gonna get bigger and bigger, and eventually go bang, because you ran out...

**Mat Ryer:** Yeah, that is where they're both leaks. It's like have a leak where water is staying inside, where it belongs, or something. I can't remember...

**Bryan Boreham:** Right, yeah.

**Jordan Lewis:** I think you can even use a leak for something I would say even more mundane, which is that -- let's say your program... Maybe it's tracing itself. Maybe it's working on distributed tracing, and it's got some big, long-lived request. And maybe the request is working perfectly well, but maybe the way that you've implemented your tracing machine is that it just keeps adding little entries to a list, and eventually it's gonna wanna publish that list somewhere... But what if that list never really ends? I mean, it's not exactly a leak, because we have a reference to this big list of events, or something like that... But we just haven't thought about changing our program to stop allocating when something happens in a little bit of a longer-lived fashion than we were expecting. I would categorize that as a leak, even though it's not really lost memory. Unbounded, unexpected growth - it seems like a leak to me.

**Mat Ryer:** Yeah, right. It could be completely valid code. All your tests pass, and everything's okay. But just because of a particular situation, it keeps growing forever. Yeah, I could see that.

**Bryan Boreham:** I just wanted to add one more thing about the leaking situation. How do you figure out where your leaks are coming from? ...is a big question. And Go has a memory profiler, which is really nice; a GUI, and bringing up a new web browser, and so on, read up on that... But what the profiler will tell you is where the memory was allocated. What you really need to know is where is this pointer that's keeping it alive. I know Jordan's been doing some work on tooling to try and figure that out.

**Jordan Lewis:** Yeah, so it certainly wasn't just me. There was a program called Viewcore that's existed for quite some time, that lives inside of a kind of Xdebug package or something like that in the Go library world... Maintained and created by somebody at Google. It's kind of rotted several times, because it has this weird property, which is that it's gotta precisely mimic all of the internal structures of the Go garbage collector. And if it gets anything even subtly wrong, it just won't work and it'll be just completely broken in ways that are impossible to understand.

For example, something that I looked at fixing and I have a patch for - I haven't merged it yet, but there is a patch on my fork on GitHub... They changed the meaning of this bitmap. There's some bitmap somewhere inside of the Go allocator/garbage collector world that says "Which object is alive in this chunk of objects?" And they switched it, so that instead of having -- I might be getting the details wrong, but it's something like instead of just having one bit per object, they've switched it so that every other bit was an object. And then Viewcore was not updated to have that change. So of course, maybe you could run it and it would kind of work, but the results would be completely nonsense.

So it's a little bit unmaintained... I have some patches that I think do get it back to a maintained state... And what does it do, by the way? I have been sort of just blabbering about stuff without explaining what this thing does... It's a really cool tool. If you take a core dump of your Go program -- so that's what happens if you send a killing signal to this program... Linux will dump a big file that contains all of the program's memory; all of it. Just exactly how it was in memory. So you can theoretically be the Go garbage collector.

\[48:11\] You can do that algorithm that Bryan mentioned, where you find all the roots of the program, all the vars, all the finalizers and all the stack variables, and follow all the pointers down, to figure out which of the objects that are alive and which are the objects that are dead... And crucially, since you know the layout of those objects based on dwarf information, which is this whole other thing - inside of a binary it's gonna tell you what the layout of objects are... Since you know all that information, you can actually figure out all of the pointers from an object to its children, to the things that it's referencing, as well as by doing a whole other graph algorithm you can figure out the things that are pointing to an object. That's like the Holy Grail information.

Let's say you have some big object that you can't collect, for whatever reason. You wanna know what is that object and what are the things pointing at it. So this is what you can kind of do with a tool like Viewcore. There's all sorts of neat things, like it's got a couple of different commands you can run, and stuff like that... I don't wanna go through all of them, but it's really neat, and you should check it out.

I will mention one last thing here on Viewcore. If you're feeling really ambitious and you wanna really blow everybody's minds in the Go community, in the Java world you can actually -- you don't have to run this algorithm on a dead core file, you can actually run it on a live program, using this completely insane technology that this company called \[unintelligible 00:49:25.15\] made. You sort of attach this little agent to your Java program, and it can figure out the reachability map and all of those things that I've just described on a live Java program. That really saved my butt several times at the last company that I worked at, that used Java... Gosh, if something like that existed for Go, it would absolutely change the game completely, for any Go program that uses significant or complex memory models.

**Mat Ryer:** Well, that sounds awesome. We should put a link to that project in the show notes, so check them out there. Well, I'm afraid it's that time again... It's time for Unpopular Opinions!

**Jingle:** \[50:08\] to \[50:20\]

**Mat Ryer:** Who's gonna tell us our first unpopular opinion today?

**Bryan Boreham:** I've brought one.

**Mat Ryer:** Let's have it, Bryan.

**Bryan Boreham:** And it's not about Go. I think all the ones about Go have been taken.

**Mat Ryer:** \[laughs\] Yeah, on Reddit.

**Bryan Boreham:** \[laughs\]

**Mat Ryer:** On Hacker News, yeah.

**Bryan Boreham:** My unpopular opinion is I want, in a chat program like Slack, say - they added threads, so you can take a message and sort of start a thread of conversation from that message...

**Mat Ryer:** Yeah, they're horrible.

**Bryan Boreham:** So I wanna be able to take something that's on a thread and make another thread. I want threads of threads.

**Mat Ryer:** \[laughs\] That is unpopular. To be honest--

**Jordan Lewis:** That's an unpopular one, oh yeah.

**Jon Calhoun:** I think that's gonna be really unpopular, because there's already some people that discourage the use of threads because they're not very accessible.

**Bryan Boreham:** That's like meta, isn't it? They should call them goroutines.

**Mat Ryer:** It's so meta though, that idea...

**Bryan Boreham:** \[laughs\]

**Mat Ryer:** So you mean like you go off on a tangent, and then you go off on another tangent?

**Bryan Boreham:** Exactly!

**Jon Calhoun:** I feel like this is basically Twitter threads, where they can do that...

**Mat Ryer:** Kind of, yeah.

**Jon Calhoun:** ...and it's awful sometimes...

**Jordan Lewis:** They have that on Reddit too, right? You can have the whole tree of threads.

**Jon Calhoun:** Yeah.

**Jordan Lewis:** I like this, for the record. I think that this is a great idea, and I will subscribe to it.

**Mat Ryer:** The UI needs to be different though, doesn't it? If you have a different UI, that model of conversation I think could exist. But it probably needs to be a VR world, where you can sort of navigate through 3D space and time and the 4th dimension. That's a good one though. We haven't had an unpopular one about Slack before.

**Jon Calhoun:** We've had people say they don't like Slack, but that's probably the extent of it...

**Mat Ryer:** Yeah... That's not unpopular, is it?

**Jordan Lewis:** \[51:58\] I feel like that's a 50/50 one. It's just about half the people like Slack, and half the people don't like Slack. Bryan, I think your idea is also kind of like -- it sounds like a work of complex literary fiction. Sometimes you get one of those books where there's a big footnote, and inside of that footnote there's actually several other footnotes... It's kind of like the James Joyce of tech, or something like that...

**Bryan Boreham:** \[laughs\]

**Mat Ryer:** Yeah, amazing. Well, \[unintelligible 00:52:21.09\] We're gonna put these on Twitter, of course; follow us on @GoTimeFM. I think the @ is optional, I don't know... Try both. Okay, do we have any other unpopular opinions?

**Jordan Lewis:** Yeah, I've got one... I don't know exactly how unpopular this is these days, but I switched to using Windows for my stuff...

**Mat Ryer:** Really?

**Jordan Lewis:** And I know that's crazy, to some extent, but it's also kind of great, because they've got this thing called WSL2 now, which is like the Windows Subsystem for Linux... And it's actually awesome. You can do all the Linuxy stuff that you wanna be doing... You know, run your compilers, and your top, and your whatever it is that you like to use Linux for... But then you don't have to have the pain of dealing with the Year of the Linux GUI, which I hear is still this year, maybe next year... And I don't know, I actually kind of like Windows. That's my unpopular opinion.

**Mat Ryer:** Yeah, wow. Okay... Is that like some kind of VM thing? Does it run natively in some way?

**Jordan Lewis:** I think that WSL2, the magic of it is that it is sort of native, to some extent. It's more of a hypervisor kind of technology - I'm probably using all he wrong words - than a VM... But I don't really know. All I know is that it's quite fast.

**Mat Ryer:** Okay, you don't notice any problems with it.

**Jordan Lewis:** Exactly.

**Jon Calhoun:** I really like the technology they're doing for that, because I feel like there's a ton of people that just use Windows for gaming or other stuff, and it's great to make programming more accessible... But it's so hard for me to switch back when I'm used to certain keyboard shortcuts and things like that that just aren't there. In Mac I can hit Ctrl+A and go to the start of a line, and that doesn't work in Windows, and it drives me insane every time...

**Jordan Lewis:** Yeah, I had to contend with that one, too... But what I ended up doing is using -- what is that program called, AutoHotkey? ...that lets you just go completely buck-wild and do all sorts of insane things with keyboard shortcuts... So I spent a solid couple of weeks just tweaking AutoHotkey, and now I have a customized machine of my dreams.

**Mat Ryer:** Nice. It only took two weeks...

**Jon Calhoun:** And he's gonna go to somebody else's computer and they're like "Show me how you do that", and he's like "I can't use this computer."

**Jordan Lewis:** \[laughs\]

**Mat Ryer:** "I can't use any other computer now. It's been so long I have now forgotten how to use it." Yeah, that's the danger. I got recently one of those ergonomic keyboards that's kind of split into two... And it is quite weird to use, because I'm not used to it... But I started to get kind of familiar with it, and then I went to a laptop and I was just like "I really need to cut this laptop in two, ideally, and see if I can get away with that... Just stretch it out to the same shape."

**Jordan Lewis:** \[54:57\] You try that and let us know how it goes.

**Mat Ryer:** Yeah, okay. Have you got a laptop I could borrow?

**Jordan Lewis:** \[laughs\]

**Jon Calhoun:** And then it kind of reminds me of people who use those different keyboard layouts, like -- what's the other one, aside from QWERTY?

**Bryan Boreham:** Dvorak.

**Jon Calhoun:** Dvorak, yeah. I had a friend in college who used that, and every time he tried to do something on somebody else's computer it was always fun to watch him type... Because it would take him like a minute to be like "I can't do this. This is so hard."

**Mat Ryer:** Yeah. There's a French keyboard layout as well, where it's basically QWERTY, except the M is just in a different place... It's just like -- you know, that's trolling at that point, surely.

**Bryan Boreham:** I used to sit next to a guy called Adam, who had no writing on the key caps. Very minimalist.

**Mat Ryer:** Very cool. What about you, Jon? Have you got any specific tech that you wouldn't do without?

**Jon Calhoun:** That I couldn't do without?

**Mat Ryer:** Yeah. Or wouldn't.

**Jon Calhoun:** I'm sure I have some, but it's hard to say... It's kind of like when you reset your phone and install it fresh, and you don't know exactly what apps you had until you go to click and you're like "It's not there. Okay, I know what app I'm missing."

**Mat Ryer:** Yeah. I always think that when on Star Trek they go to an alien ship, and they're like "Oh, I think this is the navigation control." "Can you make it work?" "Yeah, I think so." "What do you mean? I can't even use Android!" \[laughter\] You can't get some alien's ship and be like "Yeah, no probs", you know what I mean?

**Jon Calhoun:** I mean, they're optimistic...

**Mat Ryer:** Yeah.

**Jon Calhoun:** ...especially because phones are a lot less fatal if you mess them up.

**Mat Ryer:** It depends what you're doing.

**Jon Calhoun:** I've never done anything on my phone that was fatal, I'll say that.

**Mat Ryer:** \[laughs\] Congratulations. Okay. Any other unpopular opinions?

**Jordan Lewis:** I'm sure this is gonna be a popular one, but I love that this show has this game show component. It's amazing. It's really fun. I'm having a blast.

**Mat Ryer:** We did actually do an actual game show once, as part of one of the GopherCons... And it was great. We got actual contestants, we had questions, and they had points... We'll definitely do that again. Maybe we save it for some special event, like the 200th GoTime episode, which I guess will be happening his year maybe... So that'd be cool.

**Jon Calhoun:** I think that's very soon. In an episode or two.

**Mat Ryer:** We should do a special show on the 200th.

**Jon Calhoun:** This is 194, so anybody who's listening, you've got six more episodes - or I guess five more, and the sixth one will be the 200th.

**Mat Ryer:** \[laughs\] Well, that's all the time we have for today, unfortunately. I feel like there's so much more we can talk about on this subject. Maybe we'll do a follow-up episode sometime... Bryan, thank you so much. Jordan, a pleasure... And of course, Jon Calhoun. Thanks everyone for listening, and we'll see you next time.
