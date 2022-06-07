**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about what happens when Go programs end. What happens when the func main returns. What happens to goroutines that might already still be running, or... Remember those deferred statements? What's happening with them? How are they gonna go? What about open files? Do they get closed for me, or do I have to do that? And what about those HTTP response bodies? We're supposed to be closing them; everyone's been remembering to close response bodies, but what happens to those when you exit? Well, there's loads of questions, and we're gonna find out the answer to all of them on this deep dive, forensic analysis breakdown edition, super-cool, where we look at what happens when Go programs end. So yeah, a very dramatic intro for what could be a very mundane subject, but I don't think it's gonna be.

Joining me today to discuss this, it's regular Jon Calhoun. Hello, Jon.

**Jon Calhoun:** Hey, Mat.

**Mat Ryer:** You told me earlier you've never had a Go program end, so this is uncharted--

**Jon Calhoun:** \[03:59\] I didn't say that... \[laughs\] I said most of my programs aren't designed to end. So when they end, what happens is I'm trying to make sure my server gets it back up.

**Mat Ryer:** Right. Interesting. Okay, I'm sure we'll talk more about that. We're also joined by a member of the Go team who's been working on the runtime for the last 2.3 years, he told me. Welcome to the show, Michael Knyszek. Hello!

**Michael Knyszek:** Hello.

**Mat Ryer:** Welcome!

**Michael Knyszek:** Thank you. Excited to be here.

**Mat Ryer:** Okay. Good. Is that real, or are you just being show-biz polite?

**Michael Knyszek:** I am nervous, but also excited.

**Mat Ryer:** Okay. They're similar things. Okay, well let's start, maybe right at the beginning then, for someone new to Go, what happens -- I mean, ultimately, a program at the end will stop running... So what happens there? What's going on?

**Michael Knyszek:** Well, I guess basically Go itself is just gonna sort of -- this is gonna come out the wrong way; hopefully, we'll dive deeper and explain why and what, but Go kind of just leaves a mess behind and calls directly into the operating system, just like "We're done with everything." And everything dies and gets cleaned up; the operating system goes and cleans everything up, and if that running Go program had a parent process -- well, on Linux all the processes have parents... Then it gives that parent a return code. On Linux I believe there's just some value between 0 and 255. For compatibility reasons, Go's os.Exit -- well, I won't get into os.Exit yet, but basically Go by default returns zero, which means all good. Returning anything non-zero effectively means something went wrong. Some programs like to use a different number for different meanings of something went wrong, but generally, that's the pattern... Just, everything went fine, and something went wrong.

**Mat Ryer:** Okay, great. And are they like HTTP status codes, those exit codes? Are there any standards, or is it just zero means it was a success, and everything else is then defined by the program?

**Michael Knyszek:** I think that's the only thing you can actually rely on. If you're dealing with a specific program, like you're writing a wrapper script for and you wanna \[unintelligible 00:06:21.27\] another error message come out, or log that somewhere, then it can be useful. I feel like I know a few programs that define in a big table what all the different values mean... But I think in general, the only thing you can rely on is zero or non-zero.

**Mat Ryer:** Right. So in Go, a main function, when that returns -- there's no return argument, so it just returns by falling out the back of the block. That will just by default return zero then, would it?

**Michael Knyszek:** That's correct, yeah.

**Mat Ryer:** And then if you do want to return something non-zero, that's when we need to look at os.Exit.

**Michael Knyszek:** Yes, precisely.

**Mat Ryer:** Okay, we'll get into that later... But you mentioned that everything gets cleaned up by the operating system, and Go kind of leaves a mess... What things get cleaned up specifically there?

**Michael Knyszek:** Basically, Go asks the operating system for a bunch of memory. The most obvious thing is all that memory gets collected. All of the memory-related resources that the \[unintelligible 00:07:20.23\] in the application get reclaimed. Other things include if there are any open file handles... So this extends quite broadly. But in the simple case, you just have a file on your local hard disk, or what you usually think of as a file - basically, the OS will close that file handle for you. It keeps track of all of them, and once your program exits, it goes over all of them and just says "Okay, this process is no longer using this file."

**Mat Ryer:** That's cool then. Reclaiming the memory is nice... So then if we've got some program that has a massive map of data, before we return we don't have to go through and delete all that data, do we? We don't have to go and do that sort of cleaning up, releasing memory. That will just happen automatically, right? Yeah.

\[08:12\] And then the files one is an interesting one. If you open a file in Go, and normally we defer the close of that file, or we might have some other mechanism for closing that... If you don't close that file and the program exits, does that leak a file handle, or does the operating system clean that up?

**Michael Knyszek:** No, the operating system cleans that up. Files on most systems are pretty -- the concept of a file goes pretty deep into the OS. It actually just keeps track of these things and says "Okay, this process exited", and it usually keeps a reference count for these files, if I recall \[unintelligible 00:08:47.10\] and it goes and decrements its reference count.

**Mat Ryer:** Right, right.

**Michael Knyszek:** But basically, it does the equivalent of closing any open files.

**Mat Ryer:** Of course. But if you've got that code in a loop or something, then it's important to remember to close files as you go. You can't rely on that program ending. Yeah, very cool. Jon, how do you normally exit and deal with cancelation and things in your programs? If you ran a command line tool, how would you do it?

**Jon Calhoun:** The most common way you see is using context and sort of handling it that way... But I can definitely say I'm guilty of not doing that all the time, especially when it's -- you know, if I'm writing just a quick tool for myself or whatever, and I don't expect it to take very long, if it's only gonna grab three files, parse them real quick, do something and be done, usually if I wanted to cancel it, the program would be done before it ended anyway, so it really doesn't make much of a difference.

Now, if I had something more long-running, then maybe it makes more sense. I guess it depends on what you're doing and whether or not stopping in the middle of something is actually really bad or not... So that's kind of like the determining factor for me, is does it actually matter if it just stops.

**Mat Ryer:** Yeah, that's interesting - does it matter if this program just stops. And you could imagine programs - and I've written one recently that was processing files, and it would open another file to generate some data basically from the first file. So it would create a new file for each file that it found. Because it was a small, hacky thing, it was relying on the existence of that file for state, to see whether it'd been processed or not. So in this case, if the program just ended in the middle of all that somewhere, I could end up in a state on disk that wasn't desirable and didn't reflect the reality of it. That leads us into talking about graceful shutdown as well, where we notice that a program wants to end, or the operating system or somebody wants to end this program, but we've got some work to do before... So what are our options for doing something like that? How do we know that the program is gonna end, and how can we then do some work before?

**Michael Knyszek:** Programs can really end -- I mean, broadly speaking, can end in two ways. Either something tells the program to end, or it decides "I'm done" and closes itself out. In the context of something external, you might see something like Ctrl+C. If you type Ctrl+C in your command line, what basically happens is Linux sends what's called a signal, which are surprisingly difficult to work with correctly outside of Go. Go actually makes this quite nice to use, because it wraps the whole thing in a channel. But once your program receives a signal, it needs to handle it in some way. So with Go, you can use the os/signal package to get notified about when you get something like Ctrl+C. Something wants to end your program, and so using the os/signal package lets you capture that and say "Okay, let me do the cleanup that I need to do, so that I can get my graceful shutdown."

\[12:06\] If the program wants to end internally, there's more of an assumption that the program as a whole would know that, and if it wants to gracefully shut down, then it has to provide its own mechanism for doing so.

**Mat Ryer:** Right. That makes sense. So is that quite messy in the runtime code there? Because I imagine there's lots of edge cases that it's dealing with, and lots of different operating systems, right?

**Michael Knyszek:** Well, signal handling is notoriously difficult, because a signal handler can run just about any time, on any thread. A signal can land when you're right in the middle of holding several locks, and you're like "Okay, is it safe to do anything?" Yeah, that part of the runtime is actually quite tricky and difficult to get right. It's also a complicated part of the OS, too.

Austen on the Go team found a bug in the Linux Kernel related to signals in the Go 1.14 release cycle... So you know, it's tough.

**Mat Ryer:** Yeah, it's old tech really, isn't it? Because it's really core, so it's really deep somehow in amongst this.

**Michael Knyszek:** Yeah, yeah. But the signal package does really give you a very nice wrapper around this. It's very safe, and much easier to use than a regular signal handler.

**Jon Calhoun:** So let's say I'm jumping into this and I want to figure out how to capture signals... Do I have to learn about a bunch of different signals? If somebody is using kill in the Linux terminal to drop the process, versus Ctrl+C, versus a bunch of different ways you can try to stop a program... Or is this kind of you pick one or two signals and go from them? Where does somebody start if they wanna get started with this?

**Michael Knyszek:** I think the os/signal package documentation does describe the different signals pretty well. It's funny you mentioned kill, because if I recall correctly, kill is one of those signals that you just simply can't catch. That's what's kind of dangerous about kill - if you send kill to a process, it never gets the opportunity to clean up. It's like a force-force-force-force quit. There's no opportunity.

The other two that I'm aware of are SIGINT, so that's interrupt, that's Ctrl+C. And SIGABRT is kind of interesting, because that will cause the Go runtime to basically dump a bunch of goroutine stack traces... But SIGABRT is another one that is sometimes useful to handle explicitly. But Ctrl+C is the big one.

I do think the os/signal package provides some pretty good documentation on this, because it's also wrapping around the fact that you have lots of different -- Go supports lots of different platforms; of course, this is going to work slightly differently on Windows, and stuff... So I defer to the os/signal documentation for precise semantics.

**Mat Ryer:** Fair enough. And since Go 1.16, we actually also have a NotifyContext helper too, in the signal package... Which will cancel a context on a signal. So that's kind of like nice. If you're using context for cancelation across your program - and this is essentially the pattern for anyone unfamiliar, where you pass in a context argument as the first argument through the chain of all your programs, and then whenever you've got loops within that, of work, or maybe you're iterating over a set of data, you can just periodically, i.e. at the start of each loop, check to see if that context is finished, and there's either a channel that will be closed, or you can check to see if there's an error being returned. And then you can abort that operation. So that's a nice way to do graceful shutdown, or at least "I'll finish what I'm currently doing, and then I'll stop." It gives you that sort of graceful shutdown, and you can do that quite nicely with context. But you used to have to write that signal code yourself; with the addition of NotifyContext, you don't need to anymore. You can just wire it up to a context and it will be canceled for you when the program is interrupted.

\[16:07\] I think it's a good practice - this is something I always do... If you get a second interrupt signal, then it's worth doing a more serious exit. Sometimes I think operating systems will send that kill as the second signal. But if it's just a command line and you press Ctrl+C and something's wrong in your logic somewhere, you can easily hang, because you've caught that signal. So it can be good practice to look for a second one and to do an immediate os.Exit, and that way you never get caught having to go and try to force-quit your own business. So yeah, graceful shutdown I think is very cool.

Another way to get a kind of form of graceful shutdown, or at least of cleaning up after you, is with a defer statement. In the func main function, when you defer things in there, they do get called before the function exits, and therefore before the program exits. But that's not true for os.Exit, is it, Michael?

**Michael Knyszek:** No. So os.Exit is a hard exit. It basically does the minimal amount of cleanup necessary, which basically for the Go runtime just means if you're running with a race detector enabled, it'll do some cleanup with the race detector, so try to signal that "Oh, if you have a racy program, it's gonna make sure its exit code is non-zero", for instance. But otherwise - yeah, it basically just does a hard exit. It doesn't bother trying to run deferred functions; it also doesn't bother trying to run finalizers, if you're aware of those. Kind of a dark, dark corner, but worth mentioning.

**Mat Ryer:** Yes. Okay, so os.Exit is a very immediate stop, and you're not gonna have the nice things that Go would give you; you do have to bear that in mind.

Another thing that's quite interesting is what happens to the STDIN and out streams, and STDERR? For example, will just STDOUT receive an io.EOF at the end of it? Does it do something to close the pipe? What's actually going on there? Is that operating system-dependent, too?

**Michael Knyszek:** This might be somewhat system-dependent. I'm thinking more in terms of the Linux/Unix philosophy, where pipes are just files. To the operating system, it uses the same sort of resources -- a file handle. And these STDOUT, STDERR, STDIN - they all get closed in exactly the same way as any other file.

I will note that the moment you do this sort of exit call, whether or not code runs is sort of completely up in the air. Some Go code may run in that few milliseconds before the process gets taken down, or rather its thread stops... But you can't rely on that. So there's no EOF propagated through, because there's no code to even process that io.EOF, if that makes sense. The code is not guaranteed to run at all.

**Jon Calhoun:** So when we call os.Exit, you can just assume that from that point on it's like somebody just walked away, and whatever happens, happens, but it's all tumbling down at some point...

**Michael Knyszek:** Yes. It's a very, very hard exit.

**Mat Ryer:** And that's actually the only way you can return an exit code that's non-zero, isn't it?

**Michael Knyszek:** Right.

**Mat Ryer:** That's interesting then... So you have to be careful with that. But you may well want your program to exit with a specific status code. But if you're doing that deep somewhere in your program, it's possible other things aren't happening... So you probably would only want to use os.Exit right at the top in the main, or very near there, based on probably the return from some other functions that you're creating as part of your application.

**Michael Knyszek:** \[19:57\] Yeah, that's generally a good pattern. Basically, what I see is you have main, and if you just return cleanly from main, then that's your os.Exit(0)... Because interestingly enough, if you look under the hood, when you return from main, all it does is do a very tiny bit of cleanup, which is that race detector stuff... And then it calls the same exit system call. It does exactly the same thing that os.Exit does.

So that's sort of also just the right point to put the exit, because it's basically like saying "Well, if I return for main, it will just call os.Exit(0) effectively, so now is a good point to run os.Exit(1)." That being said, it depends on the program. I could certainly imagine a program where you get to a point when you're like "There is no way I can proceed. Even if other things are still running, there's absolutely no way I can proceed. Maybe it just makes sense to drop everything on the floor."

**Mat Ryer:** Yeah. And we have panics in Go for situations like that. That is interesting. Panics themselves are quite an interesting case then here, because they can occur anywhere in the program... And if uncaught, they have the effect of ending the program. But defers do run with panics, don't they? We know that because that's how you recover from panics - you run code in a defer function.

**Michael Knyszek:** Precisely. Panics are going to run defers, and that's actually not the only thing that's going to run defers. If you do runtime.Goexit, like a goroutine calls runtime.Goexit, it will also have its defers executed. And this is totally safe to do, because basically the goroutine itself is synchronously -- we know we're stopping execution of the goroutine at this point, and we're sort of walking back and running all of the defers.

**Break:** \[21:48\]

**Jon Calhoun:** So if you're doing runtime.Goexit for a goroutine, I assume that you don't have the same cleanup guarantees that you would have with a os.Exit call... Like, how you said all the files and all the other stuff from the OS gets handled. I'm assuming that the goroutines files aren't kept track of separately.

**Michael Knyszek:** No, no. That's handled at a much lower level. If one goroutine exits - unless it's the last goroutine, of course - then that says nothing about the rest of the resources that program might be building onto.

**Mat Ryer:** Yeah, that's interesting, when you think about things like HTTP response bodies, it's very important you get a read closer when you get one of these. You get it if you make a request using an HTTP client; you get back a response, and that response may or may not have a body. And we are responsible for closing those bodies to clean up memory, and things. Presumably, that gets sorted out for us if the program ends, things like that... Because they sort of rely on the underlying operating system for managing resources, right?

**Michael Knyszek:** \[24:01\] Right. Again, in the Unix philosophy of "Everything is a file. So is an internet connection, so is a TCP/IP connection", which sort of underlies all of HTTP -- it's the backbone that most operating systems build right into the operating system, and it's usually exposed through an interface that looks like a socket... And the interface for this in Go looks like a net.Conn. That sort of represents the underlying connection. So basically, if you os.Exit, it's gonna close that socket like it was any other file. So if you have a client on the other side listening on that connection, then it's going to be the same thing as if the connection was abruptly ended. So it's the same sort of failure mode.

**Jon Calhoun:** The cool thing about some of these is you can actually test them if you go write a little program that just has a web server and just sits there and sleeps for ten seconds, and you curl into it or whatever just to make a connection, and then close the server and see what happened, you can kind of see what's going on.

**Mat Ryer:** You mean as a client of that, of the server just dying.

**Jon Calhoun:** Yeah. Like, if you just use curl as the client to connect to your server, and you're running a local host or whatever, and your server is just like doing a sleep for 10 seconds before it responds, and you Ctrl+C it or kill it before it's actually done, you can kind of see did this close the body or respond or anything.

**Mat Ryer:** Quite a cool API, that -- just sort of restful mindfulness. Not RESTful, but mindfulness of just sleeping; a little API that just sleeps. I think that's a great idea, especially in today's world, where everything is going fast outside, like in a film.

**Jon Calhoun:** It's perfect. People call it to see if a web request has timed out.

**Mat Ryer:** Yeah, there you go. It's nice. Michael, how did you get into computers in the first place, mate?

**Michael Knyszek:** That was a long time ago... I actually started with what is now dead, Flash...

**Mat Ryer:** Oh, really? Flash?

**Michael Knyszek:** That was sort of my foray into it, a really long time ago. And then it just kind of spiraled from there. I thought I wanted to be an animator, and then it turned out I was terrible at drawing things. Then I kind of dug into the programming aspect, and...

**Mat Ryer:** ActionScript, wasn't it?

**Michael Knyszek:** Yeah, yeah. And then I dug more into it in high school and college, and now I'm here. Well, several years later and now I'm here. \[laughs\]

**Mat Ryer:** Yeah. That's cool. I used to do Flash as well. ActionScript got quite good as a language; I couldn't believe all the things you could do with it at the end...

**Michael Knyszek:** Yeah...

**Mat Ryer:** But I agree -- and I liked the fact too it was very visual... Because for the web you couldn't do that much with CSS; you were very limited with stuff, so Flash was the way to get something a bit more interesting on the web back then. Nothing wrong with Flash, yeah...

**Michael Knyszek:** Yeah. I have very fond memories of using the actual Flash software itself; not Flash Player, but like -- yeah, just being able to drag and drop things, and you click a little object and you put code directly on it... It just feels like "Wow! I can put code directly on this button to have it react to things."

**Mat Ryer:** Yeah, it makes sense, doesn't it?

**Michael Knyszek:** Yeah.

**Mat Ryer:** I liked the fact in Flash and in ActionScript you had objects that were like base classes... So you could have other objects that were versions of that in some way transformed. That was a very strange mindset to get into... But I supposed if you're used to OO programming, it probably fits quite nicely. I remember that being quite cool, where you could make changes to the base object and it would cascade down the entire tree as well. Yeah, I don't know if that'll make it into the Go podcast made about Go, but...

**Michael Knyszek:** \[laughs\]

**Jon Calhoun:** So one of the questions that was asked (I believe) on Twitter was "Why are deferred functions not run when os.Exit is called?"

**Michael Knyszek:** \[27:49\] I think there's actually a pretty good explanation here. If you call go exit, then you have a goroutine that's saying "I'm done. I'm gonna quit." So it is totally safe for it to run its own defers. But now consider you have a goroutine that decides "Oh, I'm going to exit", and now let's consider this world where if you call os.Exit it runs all the defers in your application. What ends up happening is the goroutine calls os.Exit, and it stops everything else and it asks all these goroutines, wherever they are, to start running their defers. The tricky part is it's not always gonna be safe to run those defers. You don't know where those goroutines actually stopped. With the go exit, at least you as the programmer know "Okay, I'm calling this at a point where I know the defers are gonna run fine."

Let's say you have a defer that relies on some variable that it captures. You have defer func() and in there you do something with a variable declared outside that's a pointer, and it's nil at first. But by the end of the function, it is actually non-nil, and it's relying on that to not actually panic inside of the defer. Well, what happens if some other goroutine calls go exit right in the middle of that function's execution? Now your exit is gonna cause this other goroutine somewhere else to panic, and that isn't what you intended at all, right? And it also brings this sort of global thinking into your code where now you have to consider "Oh no, but maybe this can actually be nil because something else can call go os.Exit()."

There is a valid question of whether maybe os.Exit should execute the defers of the calling goroutine, the goroutine that actually called os.Exit, but it just seems a little inconsistent to do that. It seems a little weird to just have that one go. But I don't actually have a good answer there; that for me could go either way.

**Jon Calhoun:** I would imagine that one would be weird in the sense that -- like, if your defer somehow has like an infinite loop in it, which I know sounds weird, but... If there was something weird like that, you'd probably want some other way to finally terminate the program, I guess, programmatically... So you'd need some other API that basically does what os.Exit does. But not being os.Exit, then it would just be weird.

And I think one thing worth clarifying, which I don't know if we've actually touched on - when you call os.Exit, it terminates all goroutines, correct?

**Michael Knyszek:** Yes.

**Jon Calhoun:** I was gonna say, I don't know if we'd actually touched that, but that was a big part of what you were saying there - if another goroutine gets shut down randomly, it's not the one in control of that.

**Michael Knyszek:** Yeah. When I think about exit, I think of a Go program as just like this one big black box, and it's almost like you're just throwing that whole box into the garbage; that's what I think of when I think of exit. And that includes all the goroutines inside, all of the resources that were contained within that box.

**Mat Ryer:** So it's interesting then - do you think that's a sensible strategy, if you've got a program that maybe, like Jon, you never expect them to end, because they're that good, and people rely on them that much; they can never end. Or if you've got a situation where you've got lots of goroutines maybe that are gonna be running, but when you want something to stop, you're just happy that they all just get aborted and it doesn't matter. Is that an okay strategy? If a junior developer did that, would they receive scorn from senior developers?

**Michael Knyszek:** I don't think so. I think generally speaking there aren't that many cases where a truly graceful shutdown is necessary... And especially because in those cases things get really messy. There are some resources that you really do want to clean up. If you have a child process and you say that you wanna wait for that child process to end before you exit it, or let's say you're running \[unintelligible 00:31:45.25\] and you create a new network interface, because you're a Docker, or something like that... When you exit, you might wanna actually clean that up. And cleaning that out, especially in a large application, no matter what could possibly happen, is actually fairly complicated to do.

\[32:03\] So one way to look at it is have a graceful shutdown, try to clean up everything before you exit. Another way to look at it is just have your program be resilient to stuff being left on the ground. So when it comes back up and it sees that there's something with the same name already there, then it just deals with it in some sane way. It's always gonna be hard. This is always going to be a hard problem. Cleaning up, or teardown, or shutdown, termination, whatever you wanna call it, is always a hard problem.

**Mat Ryer:** Yeah, but I think that's good advice though, Michael, even if your program you're writing doesn't really need to do much graceful shutdown; it's quite a nice practice to build that into a little command line tool, for example, where you interrupt the Cmd+C even if it's just printing a statement to say that we're cleaning up, or finishing, or whatever. I think it is a good practice building it in.

Dave Cheney talks a lot about "When you start a goroutine, know how it's gonna end." If you think about long-running systems that have this long life, then it matters when things are gonna get torn down, especially if you're not relying on them to just be restarted all the time.

So I think it is quite nice. It's nice to have that as a mindset. And also, it can help you design, too. It might lead you to a slightly more elegant design. If it's difficult to see how you're gonna stop certain things from running, maybe there's a simpler way to put it together.

**Michael Knyszek:** Yeah, I absolutely agree.

**Mat Ryer:** Yeah, so processes are interesting. I learned by default when you run a sub-process, it doesn't get terminated when your program gets terminated. At least on a Mac it didn't. I had to set the program group, I think; I had to set some group ID. I think there was some workaround. It was a strange thing though. Do you know anything about what's going on there, Michael?

**Michael Knyszek:** Yeah, so the way this works is that if a process has children and it exits... Basically, every operating system -- Windows has this exact same behavior, and so does Linux. If a parent process exits, then the child is orphaned, instead of just being exited immediately... Which - like you said, there are workarounds with this. You can make a process group and send a signal to everything in there. But if you don't do that, then the child is orphaned and it has to have some kind of new parent to fit into this sort of hierarchy of processes. On Linux, that means getting inherited by the root process, which is just this process that sits there and waits for its children to finish up. So if you do exit and you still have a child process running, it will continue to run until it closes.

**Mat Ryer:** Yeah. That is interesting. That is worth watching out for, because I don't think that's what you'd expect to happen. I feel like if you think of starting up sub-processes, you'd expect them to terminate when the signal is received into the program that started them. But yeah, there are workarounds. One of them is of course to use CommandContext and use context again. That way, when you cancel the context, it has this cascading effect, killing basically the sub-processes. That's another way to do it, which is quite cool.

**Jon Calhoun:** When you do it that way, if you just os.Exit, does it end up propagating through all of those as well then?

**Mat Ryer:** No. I think os.Exit just kills everything \[unintelligible 00:35:26.18\]

**Michael Knyszek:** Yeah. If you have Go code that's supposed to run to clean up your sub-processes and you call go exit, there's no guarantee that it's going to run...

**Mat Ryer:** Yeah, you'd have to exit through some managed mechanism. Usually, returning an error, or something; there can be different ways to do it. It's just part of the design, I guess.

**Jon Calhoun:** And just to make sure I'm on the same page - when you're talking about sub-processes, you mean if you're using like... I think command is the function in Go?

**Mat Ryer:** os.exec.Command...

**Jon Calhoun:** Yeah, os.exec.Command, and then you grab the output from that if you need it.

**Mat Ryer:** Well, there's an os.exec.CommandContext as well, that takes your context and kills the command if the context gets canceled. So that's very cool.

**Jon Calhoun:** \[36:06\] Okay. I thought that's what you were referring to, but... It is interesting that that doesn't exit, because I don't know what I would've really expected without reading the docs or hearing you say that... Because I've definitely used it before, but I've never thought too much about it, because most of the time I'm running really quick things... But I could definitely see if you were like starting up a server, doing something external, that that might lead to some weird behavior.

**Mat Ryer:** Yeah. Well, it just keeps running the processes and you have to go and figure out why.

**Jon Calhoun:** I should say it'd be a weird bug, where like the next time you run, it's like "This port is taken" and you're like "What?! Why is it taken?"

**Mat Ryer:** Actually, that is exactly almost I think how it manifests for me. it's always that case.

**Michael Knyszek:** Yeah, os.Exit is actually -- putting it into context, it's really low-level when you think about it. It really does just drop everything on the floor. If you \[unintelligible 00:36:58.21\]

Actually, I've run into this too, where I'm trying to clean up a child process and now I have all of these complicated defer statements, and using the signal package to capture Ctrl+C's, so that I can try to gracefully clean up the sub-processes, and stuff... Because again, yeah, it's a server sitting on a port.

**Break:** \[37:14\]

**Jon Calhoun:** So you said that os.Exit is pretty low-level... If I recall correctly, in C++ don't you return the status code from main?

**Michael Knyszek:** That's correct.

**Jon Calhoun:** I guess what I was gonna ask is what are your thoughts around that... Go obviously doesn't do that, so if you were doing that, I assume defers --

**Mat Ryer:** It could do that...

**Jon Calhoun:** It could, I assume.

**Mat Ryer:** Func main could return an int. I don't think there's anything wrong with that.

**Jon Calhoun:** No, it doesn't. I'm kind of curious... Like, my guess as to why it doesn't do that would just be that most people wanna return zero anyway, and it might be confusing to somebody. I know if you're first learning C++, you're like "Why am I returning a number here? Who's using it?"

**Mat Ryer:** Yeah.

**Jon Calhoun:** But when you actually wanna have an error status code, the only way to really do it, that I'm aware of at least, is os.Exit. And if you're calling that, then things might not behave the way you expected.

**Michael Knyszek:** \[40:04\] Yeah.

**Mat Ryer:** On that, specifically, I've done it before where I'll have sentinel error types, which is another term coined (I think) by Dave Cheney... Where you have a variable that is just an error type; or some other way of being able to figure out what the type of error is. And then at the very top in main, I always just call into a run function, and then on the response of that, I check the error that returned from this run function, and check it against any specific values for the specific numbers. Otherwise I would just return with some generic 1... And that way, you keep all of it in func main; all the os.Exits are in one place, and you can logically see the entire flow when it starts to get unwound.

**Jon Calhoun:** We've talked about that patterns a couple times, and I think until you run into some of the bugs, it's hard to understand how many different small bugs it can kind of prevent like this... Where like if you're doing it that way, \[unintelligible 00:41:03.21\] But if you don't realize that you could quickly see just putting everything in main, and calling os.Exit, and them being confused as to why some defer didn't run...

**Mat Ryer:** Yeah, I think that's a good point. One of the nice things about not having an int return from func main is that it is kind of simpler. So it's that expected thing, and it looks like other Go code returning an int would as well. But yeah, I love those little run function abstraction things. I do it as well where I'll pass arguments in... So even if I'm gonna parse flags or something, I do that inside the run function, pass in the os.Args... Because I can test that entire program in test code without any shenanigans, just by calling that run function with different arguments and check the response. So yeah, that one turns out to be a great-- and often I'll take a context into that run as well. That allows me to even test cancelation and timeout, and things... I can make sure that if I set a timer and a test for one second and I kick off the program, I can check the time difference after to make sure it wasn't too much longer. Then I know that my program is respecting cancelation in context, for example.

**Jon Calhoun:** Mat, you talked about graceful shutdown quite a bit... Can you give some more concrete examples of when somebody should be thinking about it?

**Mat Ryer:** Yeah. Well, the times where I've done it -- originally, in a sort of HTTP context... We wanted to finish any current requests before exiting. That's now built into the HTTP package, I think. You can use listen and serve in a specific way to get that; I'll check that and put it in the show notes... I need to just write that down, because I've sometimes promised show notes and not delivered them, and I've received quite a stern telling off. Sorry about that.

And another time is if I'm processing files and I'm gonna be doing some kind of io.Copy or some operation like that, where I would rather not interrupt it and leave some weird half-file that I don't know what's gonna happen with it. It could become self-aware, it could -- um, probably not, but you don't wanna take chances. That's how things happen.

So yeah, it's things like that. I don't know if it's that big a deal to let it just be a corrupt file, because maybe I'm deleting all the files when I run this program anyway. But I like the practice of making programs gracefully shut down. Then it's a tool I have in my toolbelt, that I can just use whenever I need to.

**Jon Calhoun:** I definitely agree. The practice part is good to keep there, so that you're doing things the right way when it actually matters... Because like I said earlier, I'm guilty of not always gracefully shutting down, and one of them is where you said about cleaning up files... If I were to just Ctrl+C a problem that was doing something with files, I would just assume all the files are probably not valid, delete them all and just restart if it was generating files.

**Mat Ryer:** That's another strategy, isn't it?

**Jon Calhoun:** \[44:05\] Yeah. I mean, for quick things, it's like "Alright, is deleting the files and rerunning the program gonna take more time than writing graceful shutdown code?" So you kind of have to weigh which one makes more sense... But if it's like a one-time program, then sure, whatever. But if it's something you're gonna be using a ton in a company, then maybe that doesn't make sense.

**Mat Ryer:** Yeah. I think it also depends on the situation as well. Another time I've used this is when we were gonna run code in Docker; and running in some kind of cloud environment, the interrupts are essentially the platform telling you that this instance is gonna be going away. And you may well be in the middle of handling some request where that could happen.

So yeah, that's another time where we've had to just take the signal and don't just deal with it, don't just os.Exit, but hold on to that signal, usually in a buffered channel with space for one buffer at least, so that you don't block there... And then just wait for it to finish the work, and then exit -- you know, don't take on any new work. That's the other thing. You sort of flip some switch to say "No, we're in shutdown mode now, so we won't receive any more traffic." A lot of these problems are probably solved... But if you look at a 12-factor application design, using these fundamentals and being consistent like this, it just has benefits, because other systems that are gonna be running your code or interacting in some way will also expect this kind of behavior. So there's something to be said as well for being a kind of good citizen in the operating system I think as well.

**Jon Calhoun:** The 12-factor stuff is something that definitely plays a big role, because -- I mean, for anybody unfamiliar, one of the big things of it is that your server can be shut down pretty much at any time, and you'll lose anything that was on the hard drive, or anything like that. So you can't really count on all of those local file systems to be there. And usually, there's workarounds around this, where you can directly upload files to wherever you wanna get them... But I've definitely seen services where you upload a file and then the server will take and process the file or something and upload it somewhere else, like S3 or something like that, or Google's Blobstore. And if you're doing something like that, I could see graceful shutdowning being something that's vital, so that you know that somebody didn't upload an image and then you don't actually push it where it needs to go... Because that would be frustrating for the user, to be like "Well, the image was uploaded. Why isn't it still there?"

**Mat Ryer:** Yeah.

**Jon Calhoun:** Alright, I think we are ready for Unpopular Opinions.

**Mat Ryer:** Okay, it's that special time again, so gather around, children, with your pints of beer... I've got nieces and nephews, but I don't know what I'm doing. It's time for Unpopular Opinions!

**Jingle:** \[46:47\] to \[47:02\]

**Mat Ryer:** Okay, who wants to kick us off? Michael, do you perhaps have an unpopular opinion?

**Michael Knyszek:** I am sure I have lots... And I wanna preface this one with saying that my mind is absolutely open to alternatives in the future; this is not a hard, set thing. But my thinking right now is that - and this is maybe gonna go a little deep, but I don't think the Go garbage collector needs to become a copying or a generational collector.

If you're not familiar with those terms, don't worry about it... But I think going forward there's enough room to grow here that we can make a really, really -- I mean, it's already first-class and quite good. There's been a lot of excellent work put into it. But I think there's so much room to grow here that the common sort of -- there are lots of reasons why the common thinking of like "Well, of course generational garbage collection is gonna make your programs run faster." I think there's a lot of reasons why that same sort of thing doesn't hold in Go, and I think there are actually better paths going forward.

\[48:11\] So that's my unpopular opinion... And of course, maybe I'll change my mind in like a year or two, but that's where I am right now. That's where I've been for like a year.

**Mat Ryer:** No, that's a great one. We will be testing these on Twitter. We do the poll and find out if they are popular or unpopular that's gonna be an interesting one. Jon, what do you think? I suppose you don't use garbage collection, because none of your data is garbage, or something?

**Jon Calhoun:** No, I use the garbage collector all the time, Mat.

**Mat Ryer:** Oh, okay. What do you think about that opinion?

**Jon Calhoun:** I mean, I am probably in agreement. I don't get worked up about the garbage collector like other people do though. I don't have any need for it to change, or -- like, yes, it's been improved, and that's great, but most of the time garbage collection is not a limitation for me. So it's not something I think about is the best way to put it.

**Mat Ryer:** Is it, Michael, that it could be in some situations one approach is better than others, depending on the situation?

**Michael Knyszek:** Absolutely, yeah. The design space for garbage collection is quite large. For a general purpose application it almost sort of feels like a lot of different languages and runtimes have sort of settled in a particular place... There are a lot of niche collectors, but I think maybe it's worth exploring that design space for general-purpose programs, too. And I think Go has some special properties that make it particularly worth looking into.

**Mat Ryer:** Yeah. I know somebody who turned off the garbage collection because they had this program that just ran for a short amount of time, and would never need that much RAM... And it just ran kind of lightning-fast, because they didn't have a garbage collector at all.

**Jon Calhoun:** How do you turn off the garbage collection? It's a flag, isn't it, Michael?

**Michael Knyszek:** Yeah, so Go's garbage collector famously only has one knob, and it's called GOGC. You set it via an environment variable, or you can use the \[unintelligible 00:50:08.01\] What it does is it lets you make a trade-off between CPU and memory. But you can also just say Off. So you either pass it a negative number in the runtime API, or an environment variable. You just write "GOGC=off". It won't collect anything. It will just keep allocating memory, even if it's garbage. It won't try to collect it.

**Jon Calhoun:** So this is the perfect way to make sure my programs eventually shut down.

**Michael Knyszek:** Yeah. \[laughs\] It's funny, when you look at memory profiles, sometimes -- because you can look at a memory profile and see the total amount of memory that your application has allocated... And for a long-running server you'll see several terabytes, or petabytes of information, depending on how long it was running, going through there... And it's like, "Wow, if I didn't have a garbage collector, I would have died a long time ago." \[laughs\]

**Mat Ryer:** That's funny though... Those numbers are never -- you never have any frame of reference for those numbers, really. It's like when they see it on the news, they'll say "In the U.K. people have drunk 50 billion cups of tea." \[laughter\] Well, is that a lot? I mean, that sounds like a lot, but maybe it's not.

**Jon Calhoun:** It's like, "I don't know how many people there are there... I've gotta look that up first."

**Mat Ryer:** Exactly. So it doesn't help knowing how much RAM you've needed in a lifetime... Although I'd like to see it.

**Michael Knyszek:** It's useful for finding memory leaks and other things, for sure.

**Jon Calhoun:** It's good for infographics, if you're gonna build one.

**Mat Ryer:** What about that idea though of "Just don't worry about it. Turn off garbage collection." It sounds like a hacky thing, but... Somebody made the case for doing that in a cloud environment, where you just have these little short-running function-like things that just spin up, do their work, and then disappear. Kind of like a \[unintelligible 00:52:05.25\] or some other... I don't know; I can't use that reference, I don't think. What about that as a strategy? Is that just mad?

**Michael Knyszek:** \[52:13\] I don't think it's totally mad. I don't know if the wider Go community knows (it probably does), but the Plan 9 C compiler somewhat famously just allocated memory and never freed it. It was written in C, and it just called malloc, but it never called free, because the assumption was by the time you're done compiling - "Whatever. The OS will clean it up. It's fine."

So for short programs there is some wisdom here... And I've known other systems that have done something similar, because there are performance gains to be had. If you know you're not gonna run for a very long time, then of course it works.

Of course, I will say that in most cases it probably doesn't make sense. It could certainly be a premature optimization, especially if you have a command line tool that's growing to do more things; one day it's just gonna crash, and you won't know why. But it can be valid in some circumstances.

**Mat Ryer:** Very cool. Well, it's that time where I'm canceling context, I'm going around giving you signal interrupts... I'm not gonna kill you, but I'm gonna be calling os.Exit on this episode. Thank you so much, Michael, for joining us. You'll have to come back and talk about some other things in the future too, if that's alright.

**Michael Knyszek:** Yeah.

**Mat Ryer:** We'll test your unpopular opinion on Twitter. If it's not unpopular, you do have to come back. That is legally binding.

**Michael Knyszek:** Got it.

**Mat Ryer:** Jon Calhoun, always a pleasure.

**Jon Calhoun:** Thanks, Mat.

**Mat Ryer:** Are you gonna say something nice to me?

**Jon Calhoun:** I mean, right now I'm the only person who actually has os.Exit for Zoom. You guys can't end the meeting for everybody, just for yourself.

**Mat Ryer:** Oh, you've got it yeah. Yeah, you got the power to exit. All we can do is end call runtime; that runtime one for goroutines. Pathetic.

**Jon Calhoun:** Zoom doesn't quite work the same way. It doesn't give everybody that permission.

**Mat Ryer:** Fair enough. Okay, well thanks so much everyone for joining us. See you next time!

**Outro:** \[54:15\]

**Jon Calhoun:** I'm genuinely not sure how the Terminator would work, given how much internet of things -- like, all the devices that go offline when AWS goes down... If you go back in time where there is no AWS... Like, this isn't gonna work.

**Mat Ryer:** Yeah. \[unintelligible 00:56:21.16\] run on AWS?

**Jon Calhoun:** I mean, he's gotta be using some sort of cloud stuff.

**Mat Ryer:** You'd think he'd be abstract cloud if he needed that, but...

**Jon Calhoun:** If it's anything like our current timeline, \[unintelligible 00:56:28.29\] make everything in the cloud.

**Mat Ryer:** Yeah. Maybe the Terminator just got loads of Raspberry Pi's running a Kubernetes cluster in his tummy. Probably. Could be. Robocop's got a gun in his leg. He can just get that whenever he needs it.

**Jon Calhoun:** Oh, my... I haven't seen those movies in so long. I remember I was wrong and my parents would be like "You aren't allowed to watch this. It's an R-rated movie." But it was still at the house somehow. It was like a movie they pulled out to test the surround sound system.

**Mat Ryer:** Really?

**Jon Calhoun:** I think so... Because all the shooting -- I don't know, it was just... I remember a new surround sound system -- I was really young at the time, and that was the movie they got out to test it, and I wasn't allowed to watch it.

**Mat Ryer:** Fair enough... Okay, we should maybe start the... Remember that podcast we were doing?

**Jon Calhoun:** Maybe...

**Michael Knyszek:** What?! Sorry, what? \[laughter\]

**Mat Ryer:** Yeah, we should do that.

**Michael Knyszek:** Oh, okay. I guess I'm ready for that.
