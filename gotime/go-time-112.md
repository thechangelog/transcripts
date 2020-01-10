**Jon Calhoun:** Hey, everybody. Welcome to Go Time. Today we are bringing on a guest, Dan Scales. Do you wanna say hi, Dan?

**Dan Scales:** Hello.

**Jon Calhoun:** And then we have our normal panelists - or some of them - Mat Ryer...

**Mat Ryer:** Hello.

**Jon Calhoun:** And Carmen Andoh...

**Carmen Andoh:** Hello.

**Jon Calhoun:** And myself, Jon Calhoun. Today we're gonna be talking about Mat's favorite subject, defer. Mat, I'll let you go ahead and kick it off. What do you wanna know about defer today?

**Mat Ryer:** Well, first of all, it genuinely is my favorite feature of the language.

**Dan Scales:** Nice.

**Mat Ryer:** Yeah. It stands out because it just has this kind of readability aspect to it. Apart from the functional use of it, it makes it so clear what you intend... And anything that does that, I always think is great. So defer is a great example. For anybody that might be new to Go, who doesn't know what defer is, I'm happy to give a little overview from my perspective, and then we're gonna definitely dig into it deeper with Dan as well, which I'm looking forward to.

**Jon Calhoun:** Sure.

**Mat Ryer:** Essentially, you tell it to call a function when another function exits. When you leave whichever function you are in, anything you've deferred will then get called. It's a bit like saying "Yeah, defer this function, and however you exit from this, then... Yeah, we want the defers to run."

**Dan Scales:** Exactly.

**Mat Ryer:** And that's nice, because - well, we'll talk about (I suppose) use cases. The use cases actually then of this simple -- it's quite a simple little thing, I think, but has amazing utility.

**Dan Scales:** Yeah, definitely. I think it's obviously a problem that you run into if you don't have it, which is you wanna take care of some things at the end of the function; you wanna make sure they get done, and you wanna make sure they get done even as the code changes and evolves. So it helps with maintainability.

Opening a file, you wanna put right near that statement where you open the file, you wanna put something that says "I need to close the file at the end of the function." And the classic way in C, for example, is at every single exit point you've gotta put a close there. The defer is just a really nice way to express it, and it's right near the open, so it's very well expressed... And you can contrast it with other language uses like try finally in Java or JavaScript, which is doing something similar. Try finally is another contract which says "Do some code, and at the end of it make sure you do something in the finally clause." But that stuff in the finally clause is pretty far away from where you did the open.

\[00:04:13.23\] So as you said, one of the nice things is it's right there, and I agree with that; it really makes it obvious, "I wanna get this done, and it needs to be done."

**Mat Ryer:** And with try finally you could easily end up nesting things quite a lot. If you're trying to open a few files and then you want to make sure they're all closed, and maybe making some API calls as well and doing a few other things, you can end up with really deeply-nested try catch blocks all over the place. One of the things defer gives you is that it doesn't do that, does it?

**Dan Scales:** No, exactly. It's not nested in that way. I think because of the nesting -- you can either do that nesting, or because people don't really wanna do the nesting in the try finally, usually they put a lot of conditionals in the finally block. So what they'll do is they'll have one try, and they'll usually say "If this file handler is not equal to nil, which means I didn't open earlier, then I'm gonna close." Does that make sense? So they'll have a whole bunch of conditionals.

The nice thing about defer is you don't have those conditionals. At the point where actually open the file - and you definitely did it - then you put the defer and then Go will take care of running it exactly when you actually did the defer.

**Mat Ryer:** I used to think that defer was a compile time operation, where it literally just copied the code at the exit points... But of course, when you consider that you can schedule defer statements inside loops, and all sorts of things, and conditionally... So yeah, it isn't that is it?

**Dan Scales:** Exactly, yeah. So it's definitely much more a dynamic construct than the try finally; or we can talk about the equivalent in C++ in a little bit. But those are more static constructs, and therefore the compiler knows everything, and when and where you run that finally clause is of course determined... But the defer - the compiler doesn't know if you need to run the defer if it's in a conditional, or a loop. So yes, the implementation in Go has to account for the fact that it can be dynamic, and so you have to have kind of a general implementation that depends somewhat on the runtime in order to deal with those dynamic cases.

And then the optimization we've been doing over time is to deal with those simpler cases more statically. We'll talk later about the optimization that I did - it does kind of what you said, which is in the simpler cases it actually runs that code right at the exit, as you might expect in the non-move cases.

**Mat Ryer:** I see. But where it's more complicated and it can't do that, it falls back to the previous mechanism.

**Dan Scales:** Exactly, yes.

**Mat Ryer:** That's very cool. So you mentioned what you did. Maybe you could just tell us a little bit about where you work and what you're doing; a bit about what you've been doing as well. It'd be quite interesting to hear about.

**Dan Scales:** In the past as well as in the current Go group, or...?

**Mat Ryer:** Yeah, sure.

**Dan Scales:** I've always been interested in low-level systemy stuff, both parallel and distributed processing, operating systems, but also compilers and languages. So I've kind of been doing a little bit of the circuit, and some kind of parallel and distributed work in PC theses, and work after that, and then I was at VMware for a fair bit of time and did a lot of operating systems stuff... But that involves distributed systems as well, because we do a lot with high availability, and keeping virtual machines highly available, and restarting them and so forth. Also, at VMware I focused a fair bit on high-performance storage, and virtualizing storage. So I did quite a variety of stuff.

Then I wanted to get back to lower-level stuff, like compilers and systems stuff after doing other things for a while, so I transferred to the Go team about a year ago, within Google, and just was interested in doing languages and compilers.

\[00:08:01.02\] I have done compiler work in the past, so... I've worked a fair bit of time on some stuff that's gonna help optimize Go usage in Google itself, and then in the last six months or so I've been working with the compiler and runtime people. I'm kind of a newer person, compared to a lot of the more senior people here. I've got this very interesting project to optimize defer further.

**Mat Ryer:** Yes. Well, that sounds great. And this project to optimize defer is a great one, because one of the things I love about the way that the situation is at the moment with Go is that we can use these language features somewhat liberally, and I tend to use them somewhat liberally... And sometimes there's like a trade-off between the performance and the readability. Occasionally, it's worth having very difficult to read code if in your particular case it's valuable that it is very performant. So I get that, for sure.

And there are sometimes in my code, where I've eventually optimized away some defers, but mostly not. But what were the performance issues. What's the actual problem?

**Dan Scales:** Yeah, so defers in general are not amazingly expensive, and they've been optimized quite a bit over the last couple of years; there have been a number of steps of optimization. In most cases, you don't see the overhead... But there are some very common cases where you do see the overhead, and that's when you defer a function that's fairly inexpensive. One of the most common cases is lock/unlock. An unlock operation is very inexpensive in the common case, when you hold the lock, of course, because you're basically just setting a lock to zero. But we don't wanna discourage people from doing that, because that's a perfect usage of defer.

We wanna optimize defer in the common cases, in the cases where it's not so dynamic and you can analyze everything; we wanna make it very inexpensive, so that you don't even see much overhead for deferring unlock, or deferring an atomic operation. Or maybe you have a parser and you kind of bump up a nesting level at the beginning of a function, and you defer the bumping of the nesting level down. All those functions can be very inexpensive, so you wanna make sure the defer overhead doesn't dominate those functions.

Of course, you can use defer in other cases for opening and closing the files. That doesn't matter as much, because an open of a file is probably somewhat expensive. Another way to think of it is we also wanna be closer to what C++ is. C++ has kind of an equivalent feature, which is basically it guarantees to run destructors of variables when you meet the scope of the variable.

**Mat Ryer:** So it's a class that has a destructor?

**Dan Scales:** Yes, exactly. So you may allocate just a normal object, for instance, and it has a constructor, and you declare the variable \[unintelligible 00:11:05.06\] And if that class of that variable has a constructor, you run the constructor at the time that you enter the block. And then C++ guarantees that you will run the destructor at the end of the block, and that may deallocate sub-objects or whatnot... The main thing is it guarantees it no matter what, whether you return early from the function out of the block, or also, again, like defer, if you're panicking. And that's especially important, just like defer, if you're holding on to a resource, which is the common case, whether it's a lock or a file.

In C++ one of the acronyms that's used that came from Bjarne Stroustrup is "Resource Acquisition Is Initialization", which is called RAII... But in any case, he's basically just saying that you can express acquiring a resource, and then guaranteeing that you're gonna release it at the end of the block by initializing a variable. So what people do is, for instance, they might have a class which is basically a lock, and they acquire it at the beginning of the block, and then just by exiting the block, the lock is released.

\[00:12:12.06\] All that was kind of a description to say, well, C++, and especially GCC, has made that overhead basically zero. They do the right thing; they generate code at the end of the block, that just calls the unlock call. So it's a very little overhead for that. And then they do the extra work to make sure it happens at panic time. If we can get closer to that all the time, then people don't have to think about it for defer as well.

**Mat Ryer:** That's very interesting. It's funny, you mentioned a little nugget there, which is something that surprises a lot of people, I've found, which is that of course - well, not of course at all, actually; it surprised me in the beginning - when code panics, the defers still run.

**Dan Scales:** Yeah.

**Mat Ryer:** And that's actually good to know. But I suppose it also speaks a little bit to defer's history, doesn't it?

**Dan Scales:** Yeah, so if you wanna get a little bit into the history - and I'm not the super-expert on this, but I've been asking around - I think most errors are handled using error returns, as people know... But there is always a need for a panic, because there's always the case where you run into a bug, or divide by zero, or something, and you're gonna have to do a panic, because there's no logical way to continue immediately. So the creators of Go knew they had to panic, and they knew they had to have mechanisms to deal with it. In particular, sometimes you actually even wanna recover from a runtime panic, and one case for that -- you might say, "Well, this is a bug. Why do you wanna deal with this?" You know, most of the time you don't, but you wanna just let the program crash.

But suppose you have a web server that has multiple threads, and they're handling requests... And you want that web server to be reliable and up even if there's maybe a bug somewhere. So you have multiple goroutines serving requests, and one of the goroutines may run into a bug and panic - you may still wanna do what's called recover; you may want to catch that panic on the way out, and just say "Okay, I'm just gonna kill this goroutine, but I need to continue the web server."

So the creators of Go \[unintelligible 00:14:10.26\] or Ken Thompson knew you kind of wanted to maybe deal with panics, and maybe have some way of recovering from them or modifying them... The defer was a way to do that. So one context for defer is it's a way to run code as you're doing a panic, either to release resources, which are important - and it's especially important if you're gonna do a recover, which means you wanna release resources that might be otherwise held by the web server that's continuing... And then also you may wanna do this recover step after you've released resources, which says "Okay, I don't wanna kill the entire program. I wanna kind of recover out, kill my goroutine and then maybe spawn another goroutine and whatnot."

**Mat Ryer:** Yeah. Well, the default behavior is that if a panic happens inside an HTTP handler, it just prints the panic out into the terminal and carries on, doesn't it? It doesn't crash the program.

**Dan Scales:** I think because there's a recover there.

**Mat Ryer:** Right. So they've recovered it in the standard library.

**Dan Scales:** Yes, exactly. Yeah.

**Jon Calhoun:** One of the things I've found panic recovery useful for is if you're using another library that you don't have control of, and you can't change for some reason, and they happen to panic at some instance where you don't fully agree with... I know I've found that really useful, where it's like "Okay, I can actually capture this in my code and handle it in some better way, or do something better about it." So maybe it wasn't what they were thinking about, but one useful side effect of that is that you can use code that you don't necessarily agree with how they handle their errors, and you can still make use of it and not have to recreate that entire library or whatever it is... Because that would be a massive pain if that's how it worked all the time.

**Dan Scales:** Yes, that totally makes sense. Definitely. The code that you don't have control over has a bug in it, say, and for certain things you wanna make sure your program doesn't crash if they have a bug in their program, or as you said, you don't agree with the error that they are indicating.

**Jon Calhoun:** \[00:16:06.03\] So at a high-level, does somebody wanna go over just what that recovery looks like? Like, why we need to use defer, how you would use defer... Because I know we've talked about it -- I'm guessing most listeners have seen this, but just at a high-level...

**Mat Ryer:** Yeah, well - you tend to use an anonymous function, don't you? So you defer the function and do it in line, and then there's a block. So at the top of the function you have a block of code that is in a defer, so you know that this is gonna run at the end. And then you call -- it's a built-in function, I suppose...?

**Dan Scales:** Yes, it's a function called recover.

**Mat Ryer:** And what does that return?

**Dan Scales:** That returns -- so there's a bunch of specifications on when that actually can successfully recover. For instance, it needs to be running in a top-level defer during the panic sequence. So as you said, if you have a defer in a function that you've maybe deferred this in-line function at the top of the function, and now you had a panic, so the current function called a bunch of functions and had a panic, as you're doing what's called stack unwinding and running your defers, if you run into a particular defer that directly calls recover, then you can successfully recover that panic. And with that successful panic, the recover function will return the value of the panic, what you supplied to the panic... And it could be an error, an object, or a string, or whatever.

That defer function finishes, and as long as it finishes successfully, then now you're kind of out of panic mode, and you'll finish any other defers in the function, and then you'll return to the caller. Basically, the panic has kind of ended all your functions up to the point of the recover, but the recover allows you to then return to the caller of the one that did the recover... At that point a web server, or whatever you can continue on.

**Jon Calhoun:** Yeah. I think one of the cases I've seen that this combos really well with is using named return variables; it gives you the option to actually set a return value yourself then. A lot of people I know will look at named return variables, and you have different opinions about whether or not you should use them, but one of the most obvious and most common probably use cases is when you need to recover from a panic, and then you need to actually return some sort of error to say "There was an error and I actually want this to turn into an error, rather than a panic."

**Dan Scales:** Exactly, yes. So you can translate the panic, error or whatever to a returned value error. Exactly, yes.

**Break:** \[00:18:33.29\]

**Mat Ryer:** As a general rule, I try and exclusively use errors, and I try not to use panics at all. It's interesting, that was where defer kind of came from, wasn't it? It was in order to be able to recover from panics that they needed this feature. Is that right, Dan?

**Dan Scales:** Mm-hm.

**Mat Ryer:** So that's where defer came from for that case. It's just funny, in my particular case I never use the panic, but I use the defer all the time.

**Dan Scales:** \[00:20:05.08\] Yeah. It was kind of a good combination, that defer can be used for both recover and for the more standard ways of releasing resources. And we don't wanna overemphasize the recover or the panic case, because that's certainly not the Go methodology. The Go method of having normal errors that you expect or whatever is obviously return values... So you don't wanna depend on panic recover as a way to return errors very often. They have to be very unusual, because that path is not optimized.

So the normal case of returning errors by return value; definitely you can do it, and it definitely is a good way, as you said, of dealing with packages you don't control, and errors you don't expect, and so forth... But yes, I think it's very nice that defer is used both for dealing with a recover, but I would say even more importantly at this point doing that releasing of resources and the guaranteeing of the function. That part is the one that is a really nice feature, that helps you maintain your code, and lets you do these interesting stuff.

**Jon Calhoun:** For me it's kind of like note-taking as I write code. It's like "Oh, I open this file. Here's a little note to close it." I've found, just in everyday life stuff, I'm better if I take notes like that. So it's interesting that in code we can now express that, and very clearly say "Okay, this is something I need to do", but you've already done it by doing that, which is really nice.

**Dan Scales:** And I know people have their favorite constructs in different languages, try finally and whatever, but I do think defer fits well with the Go language. It's very explicit. Go tends to not have too many hidden functions or anything, or functions off, and other things... So it's very nice to just have that explicit "This is what I need to do", and it's right near the open.

**Mat Ryer:** It's so expressive... I will go as far sometimes as to structure my code so that I can use defers. For example, if I do have a for loop and it's gonna go and process a slice of things, I could just do the work in there and defer things... But of course, if you're in a loop and you're gonna open a file, you might want that file to be closed before you open the next one. So having just another in-line function that's just called immediately, and then using defers within that function - it is an extra level of nesting, but the readability of that code that you get, the fact you can just use defers in that very liberal way is so nice when it comes to maintainability.

**Carmen Andoh:** And we've talked in the past about \[unintelligible 00:22:29.10\] and just conceptual overheads... I know that try finally might work for other people's ways of thinking, but I do think that defer is more of the human way of thinking. We just have a natural inclination to think about what done looks like when you start the thing. And we often lose in a try finally paradigm - at least when I did; I would forget. If I didn't make that, or structure that, or put that in now, you would forget. Also, your nesting map doesn't have -- you can safely nest-defer in a way that you can't do that with try finally.

**Mat Ryer:** Yes, that's true.

**Jon Calhoun:** It's also interesting - I feel like the Go community has embraced the way defer works to the point that you see people writing code where you'll call a function to set something up and it returns a teardown function. So you'll very commonly see people like "Okay, I called this and it returns teardown, and then I immediately called defer teardown." The fact that people have noticed this makes such a big impact on readability... And I don't wanna think about how to tear this down; the function that sets it up should have to deal with that, not me.

**Mat Ryer:** \[00:23:38.16\] Yeah, that's the nice thing about that. It is about keeping the tidy up close to where you're allocating the resources. It's literally harder to forget to do it, essentially. But I do love that pattern where you return the clean-up function. I do it a lot if I have test helpers that are starting servers, or anything. And you can hide a lot of stuff inside a function then, and change it later without touching the API. You've asked the user to defer this function, so you know that it's gonna get called kind of teardown time, so you can use that and add features to existing things just by having that as a pattern. It's a great one. Context does it too when you do -- with cancel.

**Dan Scales:** Cancel, yes.

**Mat Ryer:** Yes. And they ask you actually to defer that immediately regardless, I think. Because with the timeout one there's resources that are created that need cleaning up.

**Dan Scales:** Exactly. Yeah, I like that pattern as well.

**Mat Ryer:** Yeah. Another one that I use is if I wanna do some simple debugging, sometimes -- I mentioned this in one of my talks, and I heard later some feedback... Someone just said they thought I was an idiot for this thing I'm about to repeat now, for some reason. Essentially, if I had lots of log statements and I was trying to debug something by generating the logs and having a look at what's actually happened, and sort of tracing really, unofficially... And sometimes you have just log calls peppered throughout your code, and it's very useful to just log something like either a string that's just a line of hyphens, or something, and then defer the same thing, so that you print out a line of hyphens, and then when that function defers, when it exits, it prints out the other line.

So you can then capture a little snapshot. And it's a really practical way of just having a look, given potentially a lot of output, just to have a look at specific functions. If you mix that with the time, then it's quite easy to get a little timestamp at the beginning and defer printing, or capturing in some other place \[unintelligible 00:25:52.28\] and see the duration then of how long that function took to run, things like that. It's absurdly useful, and very easy to express with defer.

**Dan Scales:** Yeah, and it's especially nice to use with closures, with in-line functions. You don't have to have a separate function you're deferring, you just have code right there.

**Mat Ryer:** Yeah, that's a really interesting point. There's some interesting things around that, aren't there? Maybe you could just tell us a little bit about what literally is going on when we defer something... When does the function get called? And what happens if we pass an argument into that function?

**Dan Scales:** Yeah, I like the design of defer also because it deals with a little issue that you sometimes run into when you use these closures, these in-line functions, which is "Do you wanna use the value of the variable when you declare the function, or do you wanna use the value when you run it?" A defer statement is a defer keyword + a function or a closure (an in-line function), and then a set of arguments. The semantics is you evaluate the function or the function pointer - not run the function, but you evaluate if it's like a method call, or something... And then you evaluate the arguments, and you save the arguments and what the function is, and you store them away so that they can run at exit.

So one thing is you evaluate the arguments at the time of the defer statement. However, if you have a closure, a function - a function with \[unintelligible 00:27:20.19\] anonymous function - then you can also look at variables at the time that you run the defer, because that can look at local variables in the function. So you get a combination of both worlds. If you want to make sure you evaluate a value right at the defer statement, and that's what you're gonna use - the file to be closed, or whatever - then you can use it as an argument, and then you're sure that value you evaluate is what you're gonna use at the end of the function.

But on the other hand, if you want to look at local variables at the exit, and how they've changed, then you can use the closure part and look at the local variable. That's exactly how you can do some of the timing tricks, or various things; you can change error values, and so on.

**Jon Calhoun:** The last part you were talking about, that is what they're doing -- with all the error wrapping stuff, you see a lot of code that comes out now where they defer a function that will check to see if an error is nil, and if it is, they'll go ahead and wrap it at that point.

**Dan Scales:** \[00:28:15.23\] Exactly.

**Jon Calhoun:** That's using that latter part, where you're saying it's looking at what the actual error was at that time, and that makes that possible because you're waiting to actually look and see what the error was. But if they wanted to actually look at a value directly, then it would be the last set of parentheses; whenever they call defer, they would pass something in there, correct?

**Dan Scales:** Exactly, yeah. And you often have bugs -- when people use closures, these anonymous functions, you often have bugs where they think they're using the value at the time that they created the function, but they're really using it at the end, so you get bugs when you're running them in loops, and so forth. So it's nice that it separates out the arguments that you evaluate at defer time, with the other stuff you can look at if you want using the closure.

Alternatively, you could just have a normal function, in which case you don't get to look at the local variables, but it might be more useful in other cases. So that gets into the implementation, which is that however you're gonna implement the defer, you have to run the arguments and evaluate the arguments and what kind of function you're gonna be running at defer time, and store it away. And then at exit time you have to run that. We can get more into the details of the implementation whenever.

**Mat Ryer:** I've got one other question though... So panics don't stop defers. Is there anything that will stop a defer from running? ...apart from obviously frisbeeing your laptop across the room, which might stop defers as well... But are there any other things you can do in code that will prevent defers from running?

**Dan Scales:** No. Stack unwinding is guaranteed. I think there might be some kind of runtime abort that will completely terminate the...

**Mat Ryer:** OS exit maybe...

**Dan Scales:** ...process with no cleanup at all. But otherwise, the guarantee is that you unwind the stack during a panic, and do these defers.

**Mat Ryer:** Do they run on OS exit? I think that terminates it.

**Dan Scales:** They run on Go exit, which is to exit a thread, and I'm pretty sure they run on OS exit as well. So I think it's abort -- I have to check on that.

**Mat Ryer:** We can't stop them then. That's the thing, we've gotta be careful how many we start...

**Dan Scales:** Yes. There might be other aborts... I mean, obviously they don't happen if you kill the process, and then there may be another kind of an abort that you can do, which is just end the program. But I think on OS exit they do, and they definitely do on a thing called Go exit, which is to terminate a goroutine.

**Mat Ryer:** Hm... You could probably open Slack. That'd probably do it as well. That kills my computer.

**Dan Scales:** Oh, actually I get it, yes. Yeah, it does pull the plug.

**Mat Ryer:** \[laughs\] Don't worry, we'll edit in laughter later.

**Dan Scales:** Right, right. I see. \[laughs\]

**Mat Ryer:** Don't worry, Dan. So here's another one that's a very practical thing... When you close a file, that function can return an error. So if we just defer calling close, we aren't catching that error at all sometimes. What's the right thing to do there?

**Dan Scales:** Yeah, I think that's just a trade-off. I think Go tends to wanna catch all errors, but a close error is maybe slightly less interesting, so we wanna catch the main errors... But defer does give you the mechanism to deal with it, because instead of saying defer os.Close() or file.Close or whatever, you can use a closure or an in-line function and actually run it and get the error value, and then merge it into the error return of the function. So you can if you really wanna find out that the close failed; you can merge it in and make it part of the error return of the function. I don't know if you guys have ever done that; I haven't particularly tried to do anything. \[unintelligible 00:31:48.06\]

**Jon Calhoun:** You're not supposed to say the last bit. You're supposed to say "Mat, we can't help you. You're writing bad code."

**Dan Scales:** \[laughs\] I see.

**Mat Ryer:** \[00:31:58.18\] Yeah, it could have made me feel bad. Yeah, I think I've done that and logged it, just because I want to see what could happen... But nothing's happened yet, so I'm still waiting...

**Dan Scales:** Right, yes.

**Mat Ryer:** I wondered whether it was that signature just to satisfy an io closer, or something; there was some early decision to have a closer type... Is it io closer? Yeah, I think so... A closer interface, with a close method... And sometimes closing things - there can be an error, especially if it's writing, and it's gonna finish writing some things, or something...

**Dan Scales:** \[unintelligible 00:32:32.22\]

**Mat Ryer:** I wondered if it was just left over from that. But what can happen if you close a file? It doesn't close? \[laughs\] Then what? It's like, if we're not in control of the computers, Dan... Do you know what I mean?

**Dan Scales:** If you're doing a database, you probably do wanna check the close, and probably in other situations it probably is checked... Because during a close you may not have written out the whole file. Part of the close is writing out the final buffer amount of the file, and so to be really safe, you probably should be checking the error code of the close, and therefore express the defer in such a way so you can modify the error code. Maybe you just open the file for read, in which case it doesn't matter so much. But fortunately, unlock has no return value; unlock basically always succeeds, so defer unlock makes sense... And lots of other things, of course.

**Jon Calhoun:** Mat, your code is gonna get pretty boring if you just cut out everything you don't wanna deal with...

**Mat Ryer:** \[laughs\] Yup.

**Carmen Andoh:** And it won't be very functional either.

**Jon Calhoun:** He's already banned Lstatements and a bunch of other things, so... \[laughter\]

**Dan Scales:** Oh...

**Mat Ryer:** Well, no... I mean, please, help yourselves... But actually, there's that trick of if you flip the if statement, you can sometimes -- it's about dealing with the errors earlier, and exiting earlier, and keeping the line of sight down one edge really clear; that was the thinking behind it. But actually, it's not -- I mean, defer just sort of stands out... And I think I saw it a few years after I started with Go, I saw it turn up in the Swift language as well. It works slightly differently. I think it does it on the block, is that right?

**Dan Scales:** It is on the block level, yes. I haven't used it at all... It's a little more integrated with the language in the sense that it actually is a defer and then a block; not a function, but it's a block of code. You can kind of think of it as a closure or an in-line function, but it doesn't allow you to call a function call except if you put it in that block.

Yeah, so it's interesting - they definitely adopted it from Go, as far as we would guess, with the block level... And I think you could see it either way. One thing to note is you can't do conditional defers with that kind of a defer... Because you know, you do an if and you have a block, and then you do a defer - you're gonna immediately do the deferred operation at the end of the if, which is not what you want.

So the Go defer runs at the function level... It's a little different; I can see it running at the block level too, but it definitely is more useful for these conditional cases.

**Mat Ryer:** Well, I kind of simulate that block behavior when I just have these little in-line functions. That's kind of what I'm doing really, because I am defining the block that I want the defers to run after, so...

**Dan Scales:** Exactly, yes.

**Mat Ryer:** So Go 1.14 has some little treats in it for us, doesn't it, Dan?

**Dan Scales:** Yeah, there are several performance optimizations, of which one relates to defer... There's this work that I did, and it was from some ideas from a bunch of the people in the group. The idea was - as we started talking about it - to make the overhead lower in the more common cases... And that's what's been going on in the last few releases. Defer has been steadily getting faster in some of the common cases.

\[00:36:00.21\] In this release we wanted to make it even faster, and basically, you can think of it as we're running the function calls directly at the exit. So the compiler is directly generating those function calls at the exit... I think you were saying that's how you think of it... And in the common cases where we can do it.

So we can do that in most of the frequent cases of defer. This optimization is not turned on if any defer in the function is in the loop. However, we do do it if they're in conditionals. So if all the defers in your function are either just straight defers, no conditional, or they're in a conditional, then we will do the optimization that I'll describe. If any defer is in a loop, then we will not do that optimization yet, and we'll do the standard runtime thing.

**Mat Ryer:** But do you have to copy the conditional then?

**Dan Scales:** Do you want me to get into the details here?

**Mat Ryer:** Oh yes, please, because this is way too interesting...

**Dan Scales:** Yeah, exactly. So the notion is that at any defer statement -- let me describe the current way, before the optimization. The current way is at any defer statement what you do is you kind of create a defer record, and in that record you evaluate all the arguments in the function pointer that you need to defer, and you put that information in the record and you kind of add it to a chain in the runtime, that's kind of a defer that you're gonna have to run later. And then all exits you call into the runtime and you run the appropriate defers. So it's definitely runtime overhead, as you're adding to the chain in the runtime, and then at the exit you're \[unintelligible 00:37:34.16\] run all the defers that are on that big list.

So the optimization is - again, in this case where there are no defers in loops - that we're gonna generate in-line code at each defer, and at that defer we're gonna do \[unintelligible 00:37:47.20\] evaluate the arguments in the function pointer, but now we'll just kind of store it in some stack slots, so basically in some local variable space... And the compiler is gonna keep track of where that data is stored.

The other thing we're gonna do is we're gonna store in a bitmask that says "This defer was activated", so this defer statement was run. That's the way we deal with conditionals. So as you're running through the function, you're storing the defer arguments and the function pointers and you're storing in that bitmask what defers have run. And then at any exit, we generate again in-line code that says "If this bit is set in the defer bitmask, grab these arguments and this function pointer from the stack slots and run it." We go through in kind of Last In, First Out order, as the defer was defined, to run any of the active defers.

One thing to quickly say though is that this is all at the compiler level that we put in those checks for the defer bits, and stuff... So actually, if there are no conditionals, all the defer bit checks go away, because the compiler knows you set one and then you checked for one, and you set a second bit and you checked for a second bit. So they go away.

You do have to still set the defer bits, because we're gonna need to know about that stuff for panic and so forth... I can get into more details on that, but in the normal case you'll store all those arguments, set the defer bits, and then on the exit you'll run those.

**Mat Ryer:** That's great. It's really clever. So making it work with conditions is a bit of a genius move; I think that is a bit of a genius stroke. Because I think it's quite clear that -- if you think about how could you optimize defers, then yeah, just statically have a look, see what gets called, and just put them in the exit points. It seems quite simple. But yeah, to make that work with conditionals... And then with loops, that's gotta be impossible, isn't it? ...that kind of approach.

**Dan Scales:** \[00:39:48.27\] Yeah, you need some kind of runtime thing, because of course, you're gonna have to save an arbitrary amount of information... So you need some kind of link list, which is what we already have in the previous implementation, the more general implementation. So if you have a loop, you can call defer 100 times, and where are you gonna put all that information? You're gonna have to do some heap allocation, and so forth.

**Jon Calhoun:** So when you were deciding to support if statements, did you do any sort of code analysis or anything to say "This is something we need to cover", or was it more just "We should probably just do it, so we did it"?

**Mat Ryer:** Yeah, because I would have definitely said "Well, we can forget about conditionals..."

**Jon Calhoun:** That would have been the same thing. I'd have been like "Too much work upfront."

**Mat Ryer:** Yeah, forget about it.

**Dan Scales:** Yeah, I see. We had the notion on the conditional first, and then a little bit along the way we realized that for the case where there are no conditionals, all that code would kind of go away. So we realized "Okay, it's not that much cost."

And then the other thing is you need the defer bits anyways, because you need to -- in the case of a panic, you need to know how far in the function you got, how many defers you ran, and so forth... So you're either gonna have to look at some stack thing, or you're gonna have to look at the defer bits to know... We can get more into that, about what we do for the panic. But in the panic case, you're many frames up, and you're doing this panic, and you're going through the stack, and you need a way to know which defers are actually active.

So the defer bits made sense for a number of cases, especially at panic, and then a bit of the overhead goes away anyways in the non-conditionals case, so... We do have a mix. I did not do a percentage-wise in the Go library of how many have conditionals, but there certainly are a fair number.

**Jon Calhoun:** So when you were considering conditionals, do you consider panic a conditional then? I guess technically you have to have an if statement for that panic to become a conditional. Or I don't know if at runtime -- technically, you could access an array index that's not there, or something, so I don't know... Does that make sense?

**Dan Scales:** Yes. You cannot know statically that a panic is gonna happen, because there might be some reference past an array bound, or something... I would say a panic is conditional in the sense that that's kind of why also we need the defer bits, or some mechanism to figure out how far you've gotten into the function. There are other ways to do that, but the defer bits works out well for both. Either in a normal exit or in a panic exit you can look at the defer bits and they'll tell you how many defers you've run into and how far down you've got.

**Mat Ryer:** So is it one thing that runs at any exit point? Or do you literally copy the instructions?

**Dan Scales:** You literally call each of the functions. So it is not just one big function, and then that function calls a bunch of functions, currently. And there are many choices. We could change this in the future, with \[unintelligible 00:42:44.09\] to the compiler, but right now we're literally calling the functions in the Last In, First Out order, and whether it's conditional or not may be depending on the defer bits or not... But you're basically saying "If this bit is set, run your second deferred function, and if this bit is set, run your first deferred function." And if there are no conditionals, then it would just be "call second deferred function, call first deferred function." So in the simplest case it's very optimized in that sense, and kind of what you might imagine.

There's always certain choices, more optimizations that we could do, or there are other ways of doing it, so we can certainly analyze further to see what's best, but... It's working out reasonably well.

**Mat Ryer:** It's funny, because I wrote myself a little tool which took my Go code and did the first optimization that you talked about... And it just would comment out the defer line, and then copy the -- it was very rudimentary; it was just kind of an experiment.

**Dan Scales:** No, that's actually a good point. That's exactly what people do a lot of the times; of course, the \[unintelligible 00:43:46.23\] is showing up in their profile, so then they do exactly what you said, which is they take the defer statements, comment them out, and put the functions at the end... So this is great, we're doing this compiler optimization...

**Mat Ryer:** They do it manually though...

**Dan Scales:** Exactly.

**Mat Ryer:** I had a tool that did it for me.

**Carmen Andoh:** \[laughs\]

**Mat Ryer:** No, but genuinely... So my source code would stay looking with defers, so it was readable.

**Dan Scales:** \[00:44:11.13\] Oh, I see.

**Mat Ryer:** It was an automatic part of the build process.

**Dan Scales:** A post-processor...

**Mat Ryer:** Kind of, yeah. Yeah, that's why I didn't tell anyone about it.

**Dan Scales:** Yeah, yeah. Okay. Well, hopefully you can not do that as much maybe with the optimization.

**Mat Ryer:** Yeah.

**Dan Scales:** Because the other important thing of course is you might not put it in all of the exits... Or you will, because you're doing it automatically. And you're also not dealing with panic as well.

**Mat Ryer:** That's right.

**Dan Scales:** We'd rather -- especially if you're deferring an unlock, and you want your web server to continue on, you really wanna make sure that unlock happens, because you might have a thread that's about to die, but you're gonna continue... The web server might hold on to a lock that's important for all the other threads.

**Break**: \[00:44:58.04\]

**Jon Calhoun:** When you guys were deciding to actually make these optimizations, was it because you were seeing people do what you're saying, they were commenting these things out and doing that? Was it because you wanted to make sure code was more correct, or was it because you thought "We want code to stay readable, so we need to improve on this"? What was the motivation behind improving this, when arguably somebody could do what Mat said, and get rid of it themselves if they really wanted to?

**Dan Scales:** Yeah, I think pretty much everything you said. I think the main reason is we don't want people to remove a defer for performance reasons when it's gonna make worse readability, and it could make it could make it incorrect, in that web server case at least, and other cases. So the main thing I always say is readability. This feature is great, and we'd rather people are using it and you get that readability of the lock and unlock... And not just readability, but maintainability. Once you move the unlock to the exit, what if someone adds a new exit, a new early return, and they forget to do the unlock?

So readability, maintainability - that's a correctness problem too, and it's especially a correctness problem that's really hidden if it's a panic. Maybe this is a library, and they figure "We don't need to deal with a panic." But then you put that library on a web server and you want that server to keep running, even after one of the threads has had a problem... So all those reasons.

**Carmen Andoh:** \[00:48:02.11\] We have a question from a live listener... "Is there a way to call defer only in the case of a panic, so you only pay the penalty when it's needed?"

**Dan Scales:** That's a good question... No, there's nothing in the language -- \[unintelligible 00:48:17.02\] any way to stop defers? There's no way to stop defers... So you have to run that code, and you just do a quick check, of course, but you do have to run the deferred function.

**Mat Ryer:** How expensive is it? And obviously I don't mean cash, although I'll be clear, I will still pay for it; it's that good. But how expensive is it, before your optimization?

**Dan Scales:** Yeah, I can give you some numbers on a Linux AMD64 machine, pretty fast... So the rough numbers are that a function call might take one nanosecond. Obviously, we have very fast gigahertz processors; a function call might take one, two, three nanoseconds. A defer call has been getting faster and faster over the past time, but even with stack allocated defer records, which is 1.13, the defer overhead plus the function call is about 35 nanoseconds, instead of two or three nanoseconds.

So if that call is a call to unlock, which takes another nanosecond or two, then the unlock call and the function call take a 2-4 nanoseconds, and the defer itself is taking 35 nanoseconds. And then with the optimization that we've made in 1.14, the extra overhead is just about a nanosecond. Now the call, plus the unlock (maybe three nanoseconds), and another nanosecond is doing the defer bits, and storing it into the stack, and checking the defer bits, and all that.

**Mat Ryer:** Wow. That is amazing.

**Dan Scales:** It's a really good optimization. If the function call is much more expensive, it doesn't matter; these are nanoseconds. But if the function call is very inexpensive, like a lock or unlock, it does matter.

**Mat Ryer:** Yeah, so that's a good point for any people that are new to Go that might be listening. You hear these numbers and think "Well, nanoseconds... It's not gonna matter at all." But of course, if you think about that at scale - imagine you've got either loads of users, or you're doing loads of work, of course it just adds up. But yeah, from that down to just one nanosecond for defers - that is genuinely exciting.

**Dan Scales:** Yeah.

**Jon Calhoun:** The interesting thing about performance numbers like that is most of the time most performance numbers, or even memory allocations, that sort of thing doesn't matter... Until when it does matter - it really, really matters. So that's the hard part. When it does matter, it's a big deal.

**Dan Scales:** I see. And also, I think the original part of the question was have we seen this? And yes, even in just the Go GitHub repo, the Go language itself, you see this. But within the libraries, people have removed defers for performance reasons. And definitely you see it in other Go projects, people will do it.

Sometimes it's not totally necessary. They see defer overhead, but it's 1% or 0,5%, but in the profiler they still feel like "Okay, I wanna change this defer." So we'd rather not have people remove the defer to eliminate that 1% or 2% overhead that they see... So hopefully now they will not see that overhead and there will be no motivation to remove the defer.

**Mat Ryer:** Will we see people putting defers back into the standard library, do you think?

**Dan Scales:** Yeah, I think we should. So that will be next release, yes.

**Carmen Andoh:** Do you think with this optimization we can start to say that we're reaching RAII performance on par with C++, or we are on the way to doing that?

**Dan Scales:** \[00:51:49.02\] Yes, I think so. It's much more the overhead that you would expect from the normal semantics, and just like C++, and so forth. I think there are more optimizations to do, and the GCC compiler which does C++ of course has been evolving for years and years and years, and all that... And there's also a trade-off of how much information you store on the side, and so forth. To make exceptions and zero overhead in GCC took a number of years, and it requires information on the side, which we have as well. But they have a lot of information, and stubs, and so forth... So yes, I would say we're pretty close; we're quite close, as you can see from those numbers, and there's maybe little optimizations we can do further.

**Carmen Andoh:** That's great.

**Jon Calhoun:** When you're making changes like this, how do you go about testing it to make sure -- do you know what I mean? Because obviously, if there was a bug in this, it could be a really big deal... So how do you go about making sure that that's actually reliable, and that you're not breaking anything?

**Dan Scales:** I think the Go builders are an awesome resource. Obviously, all the tests are already in the Go source tree, and then I added a bunch more of deferred tests. Being in Google, there's also an advantage you have - the whole entire Go source code to test. That's an advantage we get inside Google, that you don't have outside. And that's a little more packaged up. You can kind of run tests on that in a methodical way... And you really just have to go through all the test cases and write test cases for them, and then run through a really large amount of code. And then running on all the architectures and Go builders really helps as well, because you get a variety of timings.

The Go builders have tests for running on different distributions, and they have long tests and short tests, and you can run with all the debug flags enabled and disabled, and so forth. So I wouldn't say there's a magic bullet, but it's running a whole variety of tests, in a whole variety of situations.

**Mat Ryer:** And it must be rewarding to know that if you can make any difference there, that given how widespread Go is, the impact that has is massive.

**Dan Scales:** It is nice, yes. Definitely. It's nice to have an effect on a whole, large ecosystem.

**Mat Ryer:** Yeah. And what's nice from our side, from the users' point of view, is we get to just use these language features, and the nice people in the Go team will keep squirreling away, making it better for us, and making it faster.

**Dan Scales:** Yes... Anything you can do so that a new person to Go doesn't run into a problem, a mistake or whatever. You make something that doesn't -- they don't have to learn that defer is slower, or something. Defer is absolutely what you wanna use, so... It's nice to attack those problems.

**Jon Calhoun:** I assume this means that with the beta release it's gonna be very important for people to test it too, just to sort of double-check that whole thing...

**Dan Scales:** Yes.

**Jon Calhoun:** Is that out yet, or is that later?

**Dan Scales:** Just about alpha--

**Carmen Andoh:** Let's see... I'm double-checking.

**Mat Ryer:** Jon, you've turned into like a new tech manager. You're like "Have you checked it for bugs? When's it gonna be ready?" \[laughter\] It's like, come on, mate...

**Jon Calhoun:** No, I mean -- this is one of those things where it's fun to grab and try it out, and make sure it's still working...

**Carmen Andoh:** Yeah.

**Dan Scales:** Yes, and we welcome feedback, absolutely, because there might be some obscure case.

**Carmen Andoh:** I need to double-check. We were targeting for the beta 1 this week... So I think maybe in the next couple days beta 1.14 will be out.

**Jon Calhoun:** Okay. I also think having more people run the beta versions is very useful, and since we have people listening, it's nice to tell them "Go grab it, use it, try it", just because the more people use it, the more likely we are to prevent bugs and things like that from being slipped it.

**Dan Scales:** Exactly. We wanna hear about all bugs.

**Carmen Andoh:** Right. And this is one of the many runtime changes that are being made for 1.14, so...

**Dan Scales:** Yes. There are memory optimizations, and some other optimizations \[unintelligible 00:55:52.27\] delays in running the garbage collector, and so forth.

**Carmen Andoh:** \[00:56:01.29\] For the scheduler... Yeah.

**Mat Ryer:** I wanna see time/sleep optimized, because it can really take a lot of time... \[laughter\]

**Carmen Andoh:** Alright.

**Mat Ryer:** No, I mean it. \[laughs\] Yes, sorry; I'm just being stupid. I just wanted to say thank you for all the effort that goes into these things, because genuinely, it makes a big difference, and it's nice to know that there's good, smart people working on these hard problems for us. So I mean that, Dan. Thank you very much.

**Dan Scales:** Oh, thank you. Yeah, the team is pretty amazing, both inside Google and outside Google, and obviously over many years it's just been optimizing continually... So yeah, it's very nice to help out and hopefully improve someone's program, and so forth.

**Carmen Andoh:** That's great. I'm gonna ask live listeners if they have any questions to please put them in the GoTimeFM channel now. Ask now, or forever hold your peace. We have a (especially the performance channel) very live and active -- Dan, I'm not sure if you're in Gophers Slack at all, but the performance channel is quite lively. I'm giving them a little shout-out.

**Dan Scales:** Okay.

**Carmen Andoh:** And they were quite excited to have you on, as well. I don't think as excited as Mat, but almost as excited. \[laugh\]

**Mat Ryer:** I've had strong words with people on this subject. I actually advocate for it a lot, and sometimes people would be upset by the performance thing. Naturally, I dig into their use case, and in that particular case it won't make the slightest bit of difference to them, but... It does make a difference to people. And now that is a massive optimization, so I really feel like that has now gone, we can now -- there is no reason to not use defers.

**Jon Calhoun:** Getting rid of that, especially if any of those people happen to teach, or anything -- you don't want them to teach that and then somebody to be like "Oh, I shouldn't use that", and not really understand why they shouldn't be using it, or... Like we mentioned, if you're opening a file it doesn't really matter.

**Dan Scales:** Yes.

**Jon Calhoun:** But there's a lot of people that probably don't even realize that, because somebody else got bit with a lock or something else, and told them "Don't do it there..." And especially junior developers - we talk about that a lot, where they just don't understand necessarily why they shouldn't use it, so they're just like "Oh, I don't use that now."

**Dan Scales:** You don't want them to have this vague idea that "Oh, defers are bad" or something.

**Carmen Andoh:** Yeah. Because once they get that vague idea, it's very hard to change that perception and that mind.

**Mat Ryer:** It is there. It's already here. That's the thing, there is now a challenge, I think, because I've seen it already; I've already seen this religion now against defer... So we're gonna have to go and find those churches and...

**Dan Scales:** And apostolise. We're gonna have to apostolise...

**Carmen Andoh:** Yeah, I think the first stop is the performance channel in Gophers Slack. I think that is going to be where the message will be sent. Like, "Please test beta 1. Go 1.14."

**Dan Scales:** Yes.

**Mat Ryer:** Yeah, and use defers.

**Carmen Andoh:** And use defers, to your heart's content, just like Mat Ryer. \[laughs\]

**Mat Ryer:** Just like I already was.

**Dan Scales:** Yes, and then profile your program, or measure and see that the defer overhead is not showing up.

**Jon Calhoun:** This means the Go standard library could have a lot of first-time contributor changes that are all just putting the defer back in and getting rid of everything else.

**Dan Scales:** Oh, yeah. Yes.

**Carmen Andoh:** Ooh... I sense a hackathon coming on, or some kind of fun -- hm, you're giving ideas, Jon.

**Mat Ryer:** Yeah, defer events tend never to happen.

**Carmen Andoh:** \[laughs\]

**Mat Ryer:** I don't know why that is.

**Carmen Andoh:** \[laughs\] Oh, that was drily and perfectly delivered, Mat.

**Dan Scales:** Actually, is that why you like defer so much? Are you a procrastinator? \[laughter\]

**Mat Ryer:** Um, I'll tell you later. \[laughter\]

**Carmen Andoh:** Well... Wow. I really think that Mat missed his calling as a stand-up comedian... Totally. Yeah, funny.

**Jon Calhoun:** I mean, he can still be one. He just has to choose his audience very wisely. It's gotta be a tech audience.

**Carmen Andoh:** Well, he has GoTimeFM. The funniest, low-key podcast out there.

**Mat Ryer:** \[01:00:09.27\] The thing is in tech no one likes a stand-up comedian. You just want them to get on, tell us what you did yesterday, tell us what you're doing today, and if you've got any blockers, and get off. You know what I mean?

**Carmen Andoh:** Aw...

**Mat Ryer:** There you go... See? That's why I didn't. I'll stick to programming.

**Jon Calhoun:** I mean, there's only three people here. You might have a whole audience that's live listeners that's laughing right now.

**Mat Ryer:** Oh yeah, let's assume that. \[laughter\] I'm pretty sure this could be edited to make me not sound like an idiot, I think. \[laughter\]

**Carmen Andoh:** You know what we need? We need 1990s sitcom audios... The 1990s with the laughter--

**Dan Scales:** Laugh track?

**Carmen Andoh:** Yes, yes.

**Mat Ryer:** Yeah, that's what Dan said earlier.

**Jon Calhoun:** I'm gonna have to buy a bigger monitor if I'm gonna put a soundboard on here as well. \[laughter\]

**Carmen Andoh:** Maybe we can ask for post-production for our lovely show producers to do a nod to some fun '90s sitcom with a laugh track. That would be fun.

**Mat Ryer:** That's a great idea.

**Jon Calhoun:** Okay, so I'm not seeing any questions, so I'm gonna go ahead and wrap this one up. Thank you, everybody, for joining us on GoTime. We hope you'll come back next week, and come join us live sometime in the GoTimeFM Slack channel on the Gophers Slack.
