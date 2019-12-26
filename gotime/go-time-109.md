**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about concurrency. Go was designed with concurrency in mind, and that's why we have language primitives like goroutines, channels, WaitGroups, mutexes, these sorts of things... And they're very powerful when they're used correctly, but they can be very complicated if they're used unwisely. So helping me pick the threads today - I'm joined by Johnny Boursiquot. Hello, Johnny!

**Johnny Boursiquot:** Hello, Mat.

**Mat Ryer:** How are you?

**Johnny Boursiquot:** I'm here to pull some threads.

**Mat Ryer:** Good. Glad. Well, you don't have to pull them on your own... We're also joined by Jaana B. Dogan. Hello, Jaana.

**Jaana B. Dogan (JBD):** Hello, hello.

**Mat Ryer:** How are you doing?

**Jaana B. Dogan (JBD):** I'm just having my first coffee of the day...

**Mat Ryer:** Congratulations.

**Jaana B. Dogan (JBD):** ...so I'm a bit sluggish, yeah.

**Mat Ryer:** Yeah, enjoy. And there's another voice, if you've heard it... It's Roberto Clapis. Hello, Rob! How are you?

**Roberto Clapis:** Hello! I'm fine. And since today is going to be a complicated subject, I'm going to tread lightly...

**Mat Ryer:** Oh, that is very nice to hear.

**Johnny Boursiquot:** Nice, nice...! Off to a great start, I'd say.

**Roberto Clapis:** Thanks!

**Mat Ryer:** \[laughter\] Olay, well why don't we jump in? When C was designed in the '70s, the computers had a single core, and they were much simpler than what we have now... And more modern machines have multiple cores, so there's more potential for doing things at the same time, whatever that means... So when Go was designed, of course, they knew this situation, and so that's why we have goroutines, and we have channels, and we have those other primitives. Go was actually quite famous for concurrency, actually. They've become quite synonymous, when you talk about languages out there. Do you think it deserves that credit that it gets?

**Roberto Clapis:** I think it does. Actually, before using Go, I had been using Python for years, and at one point I needed to solve a problem using all the 36 cores that I had available on a cluster at my university... And the pain of doing that with a language that wasn't designed with that in mind actually brought me to say "Okay, what about learning a new language that maybe makes this easier?" And with Go, it was I think 100 lines and I was done.

**Mat Ryer:** Wow.

**Jaana B. Dogan (JBD):** I'm coming from a JVM background, and every time we start this large, process-heavy type of stuff, I was always complaining that it's taking all of my processing power... But it sounds like it's a good thing, rather than doing this manually...

**Mat Ryer:** \[00:04:15.08\] For people that are new to Go, I'll give a quick overview of some of the primitives and some of the language that we're probably gonna use today, just to make sure that you know what we're talking about. A goroutine you can think of like as another thread that's running. it's actually not a thread, but if you think of it as your main application runs and that's one thread, and if you want to do some work in the background, then you can spin up a goroutine to go and do some work. And actually, you can spin up quite a few of these goroutines to go off and do their work, and they'll in theory do it as best they can with the hardware available to them.

And then of course we have channels, which allow communication between goroutines... So they're quite called for. You can send and receive information in a safe way, because if you have these goroutines trying to access the same memory, at the same time, you can run into problems.

So I'd say those are the generals of the -- two things. There's also the Go keyword, which is what kicks off a goroutine. So you can call a function and kick off a goroutine that way. So anyone who wants to learn more about this stuff, you can probably just search it in your favorite search engine - DuckDuckGo, or whichever one it is. So that's the overview I've done...

**Johnny Boursiquot:** I think it's important to also talk about the kinds of things that might be suitable for concurrency. Not every problem that you're gonna have requires you to leverage concurrency. Usually, if you write a program and you talk about "Okay, can this program be made to run concurrently, or parts of it be made to run concurrently?", you're usually trying to identify what are the parts that are independent, that can be worked on independent of each other. If you don't have any sort of dependency from one part of your test to the next, then these often are cases where concurrency perhaps could be useful to you.

The goroutines themselves - you don't actually need the messaging mechanism of channels to actually leverage concurrency in Go; just the keyword go will get you started. The real kicker is, especially when beginners try to unwrap, understand "Okay, how does this stuff work in Go?", they usually find out "Okay, your main program is itself a goroutine", and then if I'm gonna kick off other goroutines, they need to somehow wait on one another. Your main goroutine needs to be able to wait on the work to be finished by the other goroutine or goroutines before your program can finish.

This is where "How do you string these things together? How do you properly leverage concurrency in Go?" It becomes important. That's the part I think we could spend more time out in the community doing more to educate beginners really on how to think and reason about concurrency in Go.

**Roberto Clapis:** One thing I really, really love about Go is that concurrency and parallelism are kind of separated, and you don't have to think about them. For example, when you use the Http package, every time your handler is going to be called, it's going to be called inside its own goroutine. But when you write the code, it feels synchronous; you're always going to need an independent thread of execution, but you don't have to change your own mindset to use it properly. It's not like you have to use async things or some different primitives; you just write your code for what you want to do, and it doesn't even have to run in parallel with other things... Because, for example if you're running on a single core, you probably want it, and you just write it.

We probably should educate or put out some material to think about it and learn about it, but what I really love is that you can get started very easily, and just write your synchronous code and you don't care.

**Jaana B. Dogan (JBD):** \[00:08:03.07\] Yeah, I think it's fairly also easy to just migrate synchronous stuff to more concurrency in it. The magic of Go is I think in select statements... And people have been complaining that it's actually not that easy to understand the behavior of select, but otherwise it just looks really readable and really like there's no magic. This is one of the languages I feel more comfortable writing more concurrent code, and in other people just going through and understanding what I'm doing... So Go is definitely currently my best tool probably for concurrency.

**Mat Ryer:** Yeah, I agree with you about the select statement... When you really get that right, it can be extremely powerful. And the common way that I've used it recently a lot is checking for the context to be finished. So if I've got some work I'm doing in a loop, I'll have a little check somewhere, perhaps with a select block, that will just basically check if that context has been canceled or not, allowing me to interrupt the work and exit somewhat gracefully if it's canceled... And that's quite nice, when you wire that up with the HTTP request context as well, because then you essentially -- if the user cancels the request in the browser, in theory that is gonna stop the work that you were doing in order to prepare that request... And whatever saving that gets you, I don't know, but it's just very satisfying to know that that's what it's doing.

**Jaana B. Dogan (JBD):** Do you feel like Go can do more out-of-the-box things with context? I feel like there's a lot of boilerplate... You need to make sure the context is not canceled, there's on timeout, and whatever... Do you feel like there's any place that there can be some improvements? Maybe there could be certain features of select that automatically handle some cases, or whatever... I'm just brainstorming right now, to be honest...

**Mat Ryer:** Yeah, I don't know, that's actually a really interesting question. I wondered whether having context just part of the language - and this is kind of a non-Go thing, because Go likes to be very explicit all the time... But I could imagine there's always a context around, and you can always cancel it, and sub-functions and things will get canceled in the same way. You could almost imagine that. It's a bit like how exceptions probably work the opposite way in other languages. So I'm not sure it would get much support... But sometimes I do find myself just passing the context into every, every method, just everything, because even potentially my logging has needs for a context, so in that case so does everything; I'd like to not do that as much. But again, it's explicit, and you can't call that method without it.

**Roberto Clapis:** I hope that automagic context doesn't become a thing... I like to know when I start a goroutine how and when it ends. Let's take an example. I acquire a mutex and I defer the release of the mutex. And that is fine. Then I change a little bit of state, and then I do something else... And if I encounter an error, I want to be able to, for example, roll back what I've done so far. You can't always defer that. Sometimes when you write transactional code, you want to be sure that you will not be aborted... Unless the program panics, and in that case nothing will be committed, you really want to know how you exit.

I would really like to know when code that I'm writing gets interrupted, and I want to be in control on when that happens and how. If context gets canceled, I want to have a chance to say "Okay, then roll back what I started doing."

**Mat Ryer:** Yeah, that's a fair point. One of the nice things about the select block is that it is actually a block. There's a case, there's then code that runs in certain conditions... So you do actually have that opportunity that you describe, to be able to go and do some kind of tidy up or some cleanup... And it is explicit.

**Roberto Clapis:** Yeah.

**Mat Ryer:** \[00:11:57.06\] So it's interesting, you mention you want to know when it ends. Has anybody got any techniques of how you can find out when a goroutine has finished?

**Roberto Clapis:** I think that it doesn't matter how, but you should always know... I mean, I've seen so many projects and so many projects just become unmaintainable just because they were just spinning up goroutines and let them run, without handling their graceful shutdown. Has this been someone else's experience, too?

**Mat Ryer:** Well, they all shut down when your program ends, right? \[laughter\]

**Johnny Boursiquot:** Hopefully...

**Jaana B. Dogan (JBD):** So you crash programs...

**Johnny Boursiquot:** ...otherwise you have a problem.

**Mat Ryer:** Yeah.

**Jaana B. Dogan (JBD):** You know that there's a strategy of crashing programs once in a while, to kind of like release that type of resources... So that's a fair point.

**Johnny Boursiquot:** \[laughs\] Just reboot it...

**Roberto Clapis:** Yeah. I wonder even why do we have a garbage collector. \[laughter\] You don't have to \[unintelligible 00:12:48.20\]

**Mat Ryer:** Yeah, restart.

**Jaana B. Dogan (JBD):** That's what PHP is. \[laughter\]

**Johnny Boursiquot:** To address your question of do we know or can we know when the goroutine is done - I don't think there's any sort of lifecycle event or anything like that you can attach to to know when a goroutine ends. What you typically do however is that you need -- this is where the communication aspect of things start to emerge. For example, if you know you're in your main goroutine and you'd like to know when another goroutine that you spun off has done doing its work, and you wanna wait for it, we have mechanisms in the language... A WaitGroup, for example, would be a great way to block until the other goroutine is done, and then you're able to move forward.

This is also where channels come into play. So if the goroutine you spin off to go do some work, and when you initialize that, if you can pass some sort of channel to receive some sort of communication back when that work is done - either your main goroutine or some other goroutine that needs to know about that event can actually be notified. So this is where that communication channel - no pun intended - is necessary for you to know the state... At what point of the work that you spun off in a goroutine -- what's the state of that; is it done, is it finished? And there's other different ways as well you can enable that sort of communication, but there's no direct way of saying "Hey, did this goroutine finish?" You kind of need some instrumentation around that.

**Jaana B. Dogan (JBD):** You mentioned about the lifecycle, and there's literally no APIs for that... And it's by design, just keeping everything more compact and simple to the user. But in the last couple of years I've personally come into a lot of cases where I really wanted to execute the limitation in some ways, or wanted to pin certain goroutines, or the underlying OS treads to some processors, and so on. Did you ever have any troubles in the scope of this? What do you feel about like that Go is very simple when it comes to execution? It just kind of handles it all, and it encapsulates the problem from you, but it kind of limits the user, in a way... What is your take on that?

**Roberto Clapis:** I think it does, in kind of a good way. For some things, the layer it gives you allows you to build better abstractions. For example errgroup, which is a thing that I use everywhere, because when you cancel the context, it is immediate to know when everything has ended and propagate the shutdown. But at the same time, if you want to go lower, as you say... For example, at one point you want to drop your privileges. So if you want one goroutine to say "Okay, this program is running a root. It shall not be root anymore." Dropping privileges is still broken, and it has been broken for nine years... Because it's racy, it has problems... Go doesn't give you that fine-grain control on the underlying threads, or like pinning on a certain core, for example for graphics. The only way to do that now is from the main function say "Okay, pin me on this OS thread forever, and I'm gonna be the one that draws." And that's clunky.

**Jaana B. Dogan (JBD):** \[00:16:05.09\] Yeah, it's true. And with NUMA and all these new ways of actually controlling the scheduling \[unintelligible 00:16:10.19\] You can pin yourself to certain processors or a certain group of processors, and people do this for these fine-grained optimizations, because you know more about the task or whatever you're running, and just grouping things together, or whatever... It just makes sense. I've been experimentally using Go for this purpose, but it's been such a hard topic. All you can do is just lock yourself to the OS thread, and you have some control over the OS thread through some C libraries... And that's kind of funny.

**Roberto Clapis:** I think it was the Ristretto authors that said that they needed a thread local storage, but Go doesn't offer you that, so they used sync.Pool, which is lossy, and still decided they were good with that, because lossy was better than trying to share stuff with other threads... I guess when you get that far, you might be using something wrong. \[laughter\]

**Johnny Boursiquot:** To be fair, they said that there was actively use of some form of thread local storage under the hood, but it wasn't accessible to you as the user of the language.

**Roberto Clapis:** Yes. Yes, that's why they did it.

**Jaana B. Dogan (JBD):** There are actually some people who are abusing that underlying storage, and I'm seeing some companies doing some automagical instrumentation based on that... Some sort of execution tracing type of thing. It's very controversial, and of course, not recommended, but people are just reverse-engineering and hijacking that... Which is scary. \[laughs\]

**Break:** \[00:17:51.12\]

**Mat Ryer:** So what about some of the packages then in Go that we have for when it comes to working in concurrent ways? I'm thinking specifically about the sync package. Sync Once is a very helpful little utility. Essentially, you give it a function and it guarantees that that function will only be called once. So it's very useful in, say, a web context; if you've got a handler that's gonna do some initialization work upfront, and you might wanna defer that until the first time it's called - then you put it inside the handler itself... But of course, since every request gets its own goroutine in Go, it's possible that two requests could come in at this exact same time, spin up two goroutines, and they both try and do that initialization. Or they're checking for nil, or whatever they're doing, and they'll sort of step on each other's toes. You can use Sync Once to protect against things like that.

What happens is the first one that gets there runs the function, and all the rest will wait until that function is completed, and then they'll unblock and continue. Really useful, very practical, and it's such a great utility... But there are some other lower-level ones, aren't there?

**Roberto Clapis:** Yeah, like Sync Map, which I think is the most misused single structure in the entire Go standard library.

**Mat Ryer:** Really?

**Roberto Clapis:** Yeah, because people assume it's just a thread-safe hashmap... It's not. I think a thread-safe hashmap is a map with a mutex. That's about it. The Sync Map is actually to reduce cache contention. I've seen a lot of people plumbing it everywhere they needed a sync map, but actually what they needed was just a map, with some protection on top. Sync Map is useful if you start noticing that your content cache is too much, and you have a lot more reads that writes... But I think that's about it. It's even written, "Don't use this." Or even Sync Atomic - it's specifically written "Don't be smart."

**Jaana B. Dogan (JBD):** Yeah, I think it's the name... It's a "sync map", so I think it's just not very self-descriptive. That's the main reason. Because in the Go docs it explicitly says "Hey, most of the time you actually need a plain Go map instead." But the name just doesn't suggest that. It should have been called maybe sync dot like some, whatever map.

**Johnny Boursiquot:** So for those listening, the guidance there is to basically just use a mutex to protect the access to your maps... Right? Is that what you're saying, Rob?

**Roberto Clapis:** Yeah, basically that. And until you realize your mutex is the problem, don't switch to something else.

**Mat Ryer:** So that's an interesting thing then. Johnny, could you just tell us, what do you mean by a map and a mutex? How does that actually work?

**Johnny Boursiquot:** Right. So by default, your regular, good ol' map, the stuff you'd create in your plain jane Go code, is not safe for concurrent access. So you could have multiple goroutines trying to write to the same key, at the same time... That kind of thing. For read it potentially is okay, but typically when you want to limit the number of goroutines that basically are either writing and/or reading from your map to just one at a time. That's where your mutex - short for "mutual exclusion" - comes in. It basically guarantees that only one of your goroutines is going to be accessing or mutating something about your map at any one time.

So what we've been talking about is basically that "Okay, does the sync package map type? Does it give this out of the box?" To echo Jaana - well, it's named like it should be... But it's not. You should really be using a regular map, but introduce a mutex to deal with the possibility of contention.

**Mat Ryer:** Yeah. Thank you. So yeah, if you wanna access this map that Johnny was talking about, you lock the mutex, then you do your accessing, and then you unlock it when you finished... And if other things try and lock that same mutex while you've got it locked, they'll then wait for you to unlock. So they are synchronization points, and they do create contention. We're saying that we have this concurrent program, but not at these points. At these points it's not concurrent. You have to all come here and wait, for some reason... And it can get tricky to think about.

**Roberto Clapis:** \[00:24:08.22\] I wanted just to annoy you... You should lock the mutex, defer unlock, and then access the map.

**Johnny Boursiquot:** Oh, let's talk about defer. Mat, you've been wanting to talk about defer forever...! \[laughter\]

**Mat Ryer:** I love defer. I genuinely am trying to do an entire episode on defer, but I think we just have to do it at the end of the season, don't we...? We can't do it before the end... \[laughter\] It has to be the final episode.

**Johnny Boursiquot:** So with defer, the interesting bit - I think there have been a lot of performance improvements in defer recently. It used to be -- I remember once upon a time using defer and there were some benchmarks that were floating out there in the past, basically showing that defer... Basically, you incurred a performance penalty with heavy use of defer. That is now less so. I don't know if it's completely a non-issue anymore, but defer is much faster. So Rob, when you say that "Hey, you should just lock and then defer the unlock", I'm like "Yes, now I would totally jump on that bandwagon."

**Roberto Clapis:** Yeah. Now, it's almost impossible to measure the amount of time that it takes. If you have a single defer statement in a function and you measure it, you're going to get flakes. Sometimes you're going to get that defer is faster, because it's so impossible to measure nowadays.

**Mat Ryer:** It's it just optimized out, there in that case? Because if it's just a defer in the body of a normal function, and not in some kind of loop... If it's in a for loop, then of course you'd have to wait for runtime before you can know what's gonna be deferred. But just by static analysis you could probably look at a function and say "Well, I can see the exit points, so I'll go and call all the methods, whatever they are, in those places." I don't know if that's what it's doing, or if they're optimized the entire mechanism...

**Roberto Clapis:** It wasn't that easy because of panics. You might see the returns, but you would also need to check all the statements that can panic, because you need to run the defer statements on panic... And also, loops can be unwound, so you can actually start deferring five or six of the statements that you were going to defer anyway... So there is a lot of dark magic in the compiler, and I think this is one of the funniest ones to read.

**Jaana B. Dogan (JBD):** I've just read that if you don't recover, there's additional performance penalty; maybe it's because they're doing some optimizations... But if you have to recover, then it becomes a more hairy issue maybe. I don't know how it works, but you know... \[laughs\]

**Mat Ryer:** But for readability, of course, defer wins, hands-down. When you open a file and you check the error, and then you say "Okay, defer file close", you've got everything to do with opening and closing files in the same place... And it's quite obvious as well to notice when you've forgotten to close things, because you're looking in that same area. It's right near where you've opened it. So I think for readability it just wins, hands-down, doesn't it?

**Mat Ryer:** The typical guidance I hear from experienced developers like yourselves is "Hey, use defer because readability, and because you don't wanna forget to leave a file handle open", or something like that (that's just resource misuse). But I would say sometimes -- I've done it both ways, and yes, I have a penchant towards defer... But at the same time, depending on how big the function that I'm working with is, and how much I'm doing in there, if I open a file I may choose to have the 2-3 extra lines that I'm doing after I open the file, and then explicitly close the file, without using defer.

So yes, generally speaking you do wanna use defer, but I don't think it should be interpreted as gospel.

**Jaana B. Dogan (JBD):** That's true, it really depends on the job. In some instrumentational libraries we specifically didn't wanna use defer... But if I have more than ten microseconds of work to do, or whatever - I don't care, I will just defer.

**Mat Ryer:** \[00:28:06.23\] Yeah. Of course, the other benefit is if you defer, then it doesn't matter where you exit in your function, that's the only thing worth saying. So if you're opening a few files and you're gonna do a few more things a bit more complicated, then it definitely helps... But yeah, I think with everything it kind of depends probably on each individual case, unfortunately...

**Johnny Boursiquot:** "It depends..." That's our patron saint for everything.

**Roberto Clapis:** Yeah.

**Mat Ryer:** Yeah. It's true though.

**Roberto Clapis:** So what about concurrency? \[laughter\]

**Mat Ryer:** Oh yeah... I told you we could do a whole episode on defer.

**Roberto Clapis:** I'm sure of that, yeah. Actually, when you told me about defer, I said that together with defer we should talk about select... Because it's (I think) beautiful; most people say that Go channels are great, but a channel after all is just a queue with a mutex on top. Select, on the other hand, is so hard to implement. I think select is the real beauty there.

**Mat Ryer:** It's funny, because it seems really simple from the outside, when you just think "Okay, there's a few events that are gonna occur. I'm gonna put each one as a case." It really feels quite simple. And it's really powerful as well.

**Roberto Clapis:** That's the beauty of Go.

**Mat Ryer:** Yeah, right.

**Jaana B. Dogan (JBD):** I think the main concurrency feature in Go is the select statement than anything else. It's like where the magic happens, and it looks really simple to you... But it's just so complicated to implement.

**Johnny Boursiquot:** I wanna dig into that a little bit. I've seen several codes where you have a select statement and you have a number of different cases. Sometimes you have a default, sometimes you do not... Can somebody explain why that is, and what is the impact of having a default case in your select statement, as opposed to not having one?

**Roberto Clapis:** So select is used to receive and send from and to channels, and select blocks, until one of the cases becomes available. If you have a default case, most like a switch. Basically, if nothing else is available, select will just continue. It takes a while to get used to, because I've seen people doing stuff in a loop, and having a default case in there... And they were just spinning, trying to get some work. Then "Well, work is not available. Let's do another round", when instead it should have just blocked. And in other cases people check in for context cancellation without a default case, and that would just block everything that was hard to debug, because -- I mean, HTTP handlers don't detect that there is a deadlock, and stuff like that.

So yeah, default - non-blocking; no default - blocking. The best way to block a program from continuing is having an empty select.

**Mat Ryer:** Yeah... Which is useful sometimes. Sometimes you do want to have a program that just runs forever without consuming all the -- whatever it does in a for loop. Because even a for loop is doing more work than just blocking at a select, right?

**Roberto Clapis:** Yeah. And actually, what I find beautiful is that if you look in the runtime sources, the runtime builds a dependency graph. So when a goroutine becomes available to do some work, the runtime goes "Okay, that's the next one to schedule." If I have an empty select, that's one way to communicate to the runtime "This is never going to be ready", and so the runtime just doesn't handle it anymore. It just ends somewhere, and it's going to stay there.

**Mat Ryer:** That's great.

**Johnny Boursiquot:** So an empty select is like a humane way of saying "I want this program to just stop, but it's not really that all my goroutines have gone to sleep... I literally want everything to just stop."

**Jaana B. Dogan (JBD):** \[00:32:06.00\] You know, you just want the current goroutine to just hang. Everything else is going to work.

**Mat Ryer:** Yeah. If you have a main program and you've kicked off five threads, and the threads are gonna do all the work continuously in your program, I could see a case then for having an empty select on that main thread, maybe... Although if you think about context, you can trap the signal from Ctrl+C and cancel a context from that. And if you do that, you're actually able to tear down gracefully from a Cmd+C, and then there's a way to write it so that the second hit, the second signal that comes in actually kills the program. So that's quite a nice little pattern... Things like that.

**Roberto Clapis:** Yeah. Just have a channel that is one bit. That is very nice.

**Mat Ryer:** Yeah. A buffer channel with space for one thing.

**Roberto Clapis:** Yeah.

**Break:** \[00:33:01.24\]

**Mat Ryer:** You know when you do these signal channels... These channels where you don't plan on sending any information, you only really wanna send a signal of some event, like "I've finished", or something like that, what type do you use? Do you have a favorite? Because I have a favorite... It's a loaded question; I just wanna tell you what my favorite is, so if we could just get through yours... \[laughter\]

**Roberto Clapis:** For a moment I thought you were going for buffer channels, and I was like "Oh, that's a loaded question..." But you've found a better one.

**Johnny Boursiquot:** \[laughs\] Okay, so one of the idioms that have been floating around is you use the empty struct as a messaging mechanism. Because it really occupies no memory, nothing's been allocated, basically... You're just signaling; just a few signals. Beginners might also be tempted to use booleans, I've seen integer types, I've seen people passing over channels... I've even seen errors being passed as a signaling mechanism over channels.

I'm not gonna say that these mechanisms are wrong. Sometimes the value that you receive from that signal - basically, you treat it as both a signal and a value for you to do something with, and it's gonna depend on your case, obviously... But typically, if you want a zero allocation type of mechanism, you're just sending a signal, then the empty struct is your friend.

**Jaana B. Dogan (JBD):** It's also worth mentioning that it really depends. If this is going to be a public API, for example, like the signal package, or where you have different events and so on, I think it makes sense to have your type; you can have a type for the signals, and you can have maybe more predefined signals exported from that package, and so on. But if it's more of like a self-contained thing, it's totally good to just have an empty struct.

**Mat Ryer:** \[00:35:50.25\] Yeah, the nice thing about the empty struct is you can't put any information in there. It really just makes that very clear, what it's gonna be used for. I've seen a boolean used as well, and I just never know if it matters if I send true or false down there, if I feel like there's some API now... Whereas with an empty struct it can't be anything other than just a signal, so I like to use that as kind of a signal to programmers, too. It helps with glanceability.

**Roberto Clapis:** And sending false, I mean--

**Johnny Boursiquot:** \[laughs\] Is it the zero value?

**Roberto Clapis:** Yeah, boolean is dangerous. \[laughter\] Because if you get true, that was a signal. But if you get false...

**Johnny Boursiquot:** You don't know. \[laughter\]

**Mat Ryer:** That's the geekiest bit we've ever had on Go Time, while I've been on...

**Johnny Boursiquot:** And I think we all smiled at the same time... We knew exactly where you were going with that. \[laughter\]

**Mat Ryer:** We need more bits like that.

**Roberto Clapis:** Most of what I do right now is code review. I read way more code than I write. And when I see people using a map of something to boolean, I always ask "What if you get false, but the key isn't there?" It's the same for channels - "What are you trying to tell your users?" Or like buffer channels of size 50. I mean, I can understand one or two, but when it starts being like 100, I need a comment to tell me why.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** Treating it like a queue...

**Mat Ryer:** Probably there's some performance tuning or something going on, but you're right, it just gets hidden and it looks strange... And no one will touch it. You'll be scared to go near it, because you feel like "Well, why is it 50?" It's a bit like those numbers on Lost, when they just didn't know whether to put the numbers there... You just can't stop doing it, just in case...

**Johnny Boursiquot:** So let's talk about concurrency, as they are used in things like libraries. There's an idiomatic way of actually using concurrency in your library, basically hiding that completely away from the user of your library... And there's also guidance that basically says "Allow the user of your package, of your library, to do things, to orchestrate concurrency using your package." You can do things synchronously, or rather top-down, basically crossing that boundary, so to speak.

So if you're gonna do concurrency, do it internally, neatly, inside your package, but any other case you should let the user of your package orchestrate concurrency around there. And if there is a chance that you're gonna be doing things concurrently, your library should accept a channel for it to send back a signal or some result of having done the concurrent work for you. I've seen advice all across the board there... I'm interested in your take on that.

**Roberto Clapis:** I don't like APIs that are asynchronous by definition.

**Johnny Boursiquot:** Hm.

**Roberto Clapis:** Every time I see a library that for example takes a channel and is going to send results over that channel... Or even worse, you call a function and you get a channel back - I'm not a big fan of that. Because I always have to read the code, for example, if I cancel the context, if they take a context... And are they going to check for cancelation at every send, or do I need to drain the channel? Will they block if the channel fills up? All these kinds of questions... I prefer my libraries stay synchronous. I don't like promises.

**Jaana B. Dogan (JBD):** I completely agree with this. I think everything should be blocking as much as possible... Because it's so easy to orchestrate everything with Go, I totally see that it's more valuable to give that also precise control to the user. Some libraries end up actually having two different APIs in the same package. They're kind of replicating the same API, and it's completely unnecessary, because it's easy to orchestrate and put things together in Go.

\[00:39:52.08\] One of the things that Go is doing not properly is there is no easy way to - in the Go docs or anywhere - to carefully label things that "Oh, this is going to actually run in a different goroutine", or whatever. For example, the Http package - every handler is running a different goroutine, and you need to maybe leave a comment on the Go doc... But it's not really readable, or some people just kind of miss it... I think we need a better approach to maybe explain how the underlying implementation works from the perspective of concurrency. Sorry, I'm slightly changing the topic a bit...

**Johnny Boursiquot:** No-no, yeah...

**Roberto Clapis:** I agree. One thing is when you call a function, that might spawn goroutines, but as long as it collects them before returning, that is fine. But if that stuff keeps running, or it's going run for example your closure that you pass in in another goroutine, you might want to know -- for example the filepath Walk function; you might want to know if that thing is going to be run concurrently, because you might be closuring over a variable that you don't want to be touched across threads. Well, it doesn't \*spoiler\*, it's synchronous... But yeah, it would be nice to have a way to say "This is not going to require synchronization."

**Jaana B. Dogan (JBD):** Yeah. In the beginnings of Go I've seen all the people actually having mutexes for some of the stuff that they were trying to access from several closures... Which was actually never the case, because the library was given the guarantee that one function will be executed at a time, and so on... But there's literally no way to explain it other than just put in this information in the Go docs, and it's not really accessible.

**Mat Ryer:** Yeah, that's an interesting thing. It makes me think of something that always occurs to me, which is that concurrency -- any time you're writing concurrent code, it's best to keep it very local, keep all of it very nearby... And call out to functions to do other work. Don't try and do all the work, so that the page kind of stretches down and you're left with bits of concurrent code scattered throughout...

Also, things like passing mutexes by pointers, and things like this - if you can avoid that and just have a mutex in one place and do all the concurrency in one function, that's just so much easier to maintain and to reason about later. Experience has kind of taught me that now, and I tend to do that - I'll tend to have all my concurrent code in one place... And if it's a WaitGroup and it's doing some work, I will call out to a function to go off and do the actual work. It allows all my concurrent code to be uncluttered from that.

**Roberto Clapis:** I couldn't agree more.

**Johnny Boursiquot:** So we've been deliberate with our use of the word concurrent, right? So one of the first things you learn in working with Go is that concurrency is not necessarily parallelism. By having concurrent code you allow for the system that's gonna be running your code to have your code run in parallel, but that's not something you can actually control.

I think it was a talk by Rob Pike actually titled as such, "Concurrency is not parallelism", that sort of shed light on that whole mechanism. So has there been any case that you've encountered where parallelism wasn't the right thing to do, that you basically wish you didn't have concurrent code that ended up being run in parallel? Like any sort of races that you didn't anticipate, or anything like that.

**Roberto Clapis:** I had a big headache trying to figure out how to properly do init, because the code I was using was pulling goroutines, and was blocking until those goroutines returned. But during init time, you can't spawn goroutines. I mean, you can spawn them, but they won't run. So that code was deadlocking on startup.

**Mat Ryer:** Wow, that is a tough one.

**Johnny Boursiquot:** Never heard of that one before. That's... Wow. That's amazing.

**Roberto Clapis:** Amazing is one word, yes... \[laughter\]

**Mat Ryer:** \[00:44:06.11\] But, I mean, don't use init... If we don't use init, we might actually avoid problems like that.

**Johnny Boursiquot:** Hear, hear. I second that motion. \[laughter\]

**Roberto Clapis:** Yes, do not use init. I agree.

**Johnny Boursiquot:** Go ahead, JBD.

**Jaana B. Dogan (JBD):** One of the things that I actually -- I sometimes need parallelism, but not like any concurrent stuff, like such as I just wanna be able to lock a goroutine to a processor, and I wanna be able to access everything without inner locks or whatever... Go doesn't give me that precise level of control, so that's kind of funny. There's a lot of concurrency-related features, but if I just wanna distribute some workload over some processors, and I know the data affinity and everything, I can't really do it because there's absence in a way to do it.

These are different problems, parallelism and concurrency, and it gives you different advantages. I think that there's literally no way to tweak things, which is a bit bothering sometimes. I think it doesn't really represent the average user, but sometimes you feel like you're sort of blocked.

**Mat Ryer:** Yeah. My experience - mostly I build a lot of web stuff, a lot of web APIs, that kind of thing, websites even, blogs, things like that... \[laughter\] So I don't need to -- I'm not going in there saying "Hey, I want this goroutine on this core, and don't you move on to another one." I'm happy for them to get on with it, do what they need to do just to render some bits... But yeah, that is always the case, I guess, those trade-offs, and whether you think they're worth it or not - that's really the judgment call you get to make about the language, I suppose.

**Jaana B. Dogan (JBD):** Consider if we start having that type of precise control, I think it's gonna get super-complicated, especially if libraries start to tweak those arguments, and so on... So I think I totally can see that it's benefitting the entire community to maybe have more of like a simple API surface, which is just the goroutines and some sort of synchronization mechanisms, and providing nothing else.

It kind of also carves the community and the user base based on the functionality it provides... So you are not going to maybe pick up some certain tasks because you know the functionality is not there. If it becomes critical in the future, we can reconsider it, but maybe that's how things work. I don't know.

**Roberto Clapis:** I was following a very long thread on Go Nuts last year, and at one point someone suggested -- and I think it was Ian Taylor - to use the Unix package to call set affinity, to lock to a specific... So I've seen code using that; Unix syscalls - they're not cross-platform, as we love Go, but if you go that deep at a point, you might as well do your syscalls as you would in C.

**Jaana B. Dogan (JBD):** Yeah, that's what I do. I lock my OS thread and I call into either that set affinity or NUMA type of stuff, unfortunately...

**Mat Ryer:** That needs to be a talk, doesn't it? We need to see why on earth are you doing that, and how. That's what we wanna know.

**Jaana B. Dogan (JBD):** My current job requires it because of some benchmarks and so on, so this is literally a full-time type of project. It's not like some production service, or whatever... But you know, those tools are available to you, that's true.

**Mat Ryer:** Interesting.

**Johnny Boursiquot:** You might as well write in C...

**Roberto Clapis:** I meant that as a joke. \[laughter\] \[unintelligible 00:47:54.11\]

**Jaana B. Dogan (JBD):** My life is a joke, man...! \[laughter\] I like being on the edge.

**Johnny Boursiquot:** Bleeding and all.

**Mat Ryer:** \[00:48:13.20\] There's another trick that I do which I find really useful. I'll try and describe it... It probably isn't the easiest thing to describe, but... Essentially, sometimes you wanna do lots of work, there's lots of work to get through, but you know that you should only really be doing five at a time... So you're happy for it to run as fast as it can, but only do five at a time. And one simple way to achieve that in Go is to have a buffered channel, and the size of that buffer is the number of goroutines you'll allow concurrently... And then each goroutine tries to write something into that channel. And if it succeeds, it then unblocks, it goes ahead and it does its magic.

Of course, the first five - that will be no problem; that'll be able to write into the channel. The sixth one that comes along - suddenly this channel is full, because they were all filled up by the other goroutines... So this one then has to wait, and he'll block until something is then released from the channel... And they get released when the task is finished. So it's a bit like the mutex, where you lock and then defer the unlock. You'd actually write into the channel and then in the defer you read something out of the channel, freeing a space for another goroutine.

That pattern is quite easy to reason about if you know the basics of channel semantics and how to code that in Go... But actually, it turns out to be quite powerful, especially since that buffer can be configurable, so you could actually even make it a flag to the program to ask how many of these do you want to be able to run concurrently.

Another way to do it, of course, is just to spin up a certain number of goroutines and just have them drawing from a queue a different way... But I find that to be a little bit more confusing, because you then have to have -- in another goroutine you have to be then populating the work in some way, and that feels a little bit strange... But that's one little pattern I've found that I quite like.

**Roberto Clapis:** I really like that, and I really like how Go is so simple that you can actually implement a Semaphor in three lines. Because what you described is usually a Semaphor, and channels are such a higher-level primitive that they allow you to implement whatever you want. I mean, even if you need a mutex with a trylock method, because you want to tryAcquire, and if you can't manage, well, just retry in a bit... Well, you can do that with a channel, with a select and an empty default block. Channels are so much more expressive than just mutexes.

**Mat Ryer:** Yeah. And you remind me as well of the time.After that you can get in the time package, which actually returns a channel which sends the time on it after a certain duration... So you can use that in select blocks as well to say "We're gonna wait for maybe this goroutine to finish. If it hasn't finished within one second, we'll run a different case. We might update the stats, or something. We might present an update to the user, so every second they'll get an update while we're waiting." Once the task then finishes, of course the other case will trigger and it'll go and do the other thing.

There's also a ticker that you can do as well, but time.After tends to be quite nice... A nice way to express timeouts in test code as well, if you're waiting for test code to complete... It's nice to have those little timeouts in there as well.

**Roberto Clapis:** I've had bad experiences with the time package. \[laughter\]

**Johnny Boursiquot:** In general? \[laughs\]

**Roberto Clapis:** Yeah.

**Mat Ryer:** It sounds like a one-man show on Broadway, starring Roberto Clapis... \[laughter\]

**Roberto Clapis:** I've had trouble with time package...

**Johnny Boursiquot:** The time package monologue...

**Mat Ryer:** Yeah, exactly.

**Roberto Clapis:** I really found myself writing a flow chart on paper to understand what methods I could call on a ticker, and in which case. It was like stop -- and do you have to drain after stop? And if you do... And all that kind of stuff. So it's a nice package, but use it carefully.

**Mat Ryer:** Sage advice... Sage advice indeed. And that leads us neatly to the end of our show today. Thank you very much to our guests and co-panelists, Johnny Boursiquot, Jaana B. Dogan and Roberto Clapis. Nice to hang out with you, thanks very much.

**Roberto Clapis:** Thank you!

**Mat Ryer:** We'll see you next time. It's not your time to talk now, Roberto... I'm doing the closing bit. \[laughter\] We'll see you next time, on Go Time!
