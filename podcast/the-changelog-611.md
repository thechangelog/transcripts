**Jerod Santo:** Today, I'm joined by Pablo Galindo and Łukasz Langa from Core.py, a podcast all about Python internals, because these two work on Python internals. Welcome to the show, guys.

**Pablo Galindo:** Thank you very much for having us.

**Łukasz Langa:** Happy to be here.

**Jerod Santo:** Now, your podcast - is it usually just the two of you talking to each other, or do you have a third party ever?

**Łukasz Langa:** Every now and again we would invite a guest, but mostly it's just the two of us.

**Pablo Galindo:** Yeah, when people are fed up of listening to us, then we bring someone to...

**Jerod Santo:** \[laughs\] Now, we've been asked to start a Python podcast a few times, as well as an Elixir podcast, and a Rust podcast... And we don't usually feel like we have anything to add to the conversation except when it came to Python, I remember telling our friend Brett Cannon, I said, "You guys should have a podcast where it's like the people who work on Python talking about Python", not randos like I would be, or people on the -- you know, it's a huge community, but there's no voice that is coming from the core team... And so I think it's pretty cool. When did you guys start this, and what was the big idea?

**Pablo Galindo:** So we started actually one year ago. Right now we are in the Core Developer Sprint at Meta, so this is basically a meeting that we do every single year, when we try to bring all the core developers together and spark some conversation in person... Because open source is basically based on asynchronous communication, but from time to time it's very good not having to discuss and wait an entire day just to tell the other person "I don't like your proposal."

After that, these meetings have a lot of discussions, and they are super-rich regarding that. It's fantastic; it's one of my favorite moments of the year. So I reached to Łukasz and I said "It would be actually very cool", because what happens here - people don't really know the discussions, they just know the output of them. And there's many of these projects that take years, or they only show up after a time, and there are some of these projects that just die, and they never happen. And I was telling Łukasz, it would be super-cool if we have this space where we can talk about how the sausage is made, and all these crazy ideas that we're having, and how they kind of transform into it... Because there is this -- I mean, to some extent it's improving, but there is this perception from people that core developers are these alien developers, that go into this room and then Python happens. But we are just regular people.

So our idea was, first, kind of demystify the core development thing, so it's not just -- you know, we're just regular people, just doing the thing. And the other is trying to inspire people to join it, right? So ideally, we can talk about not only the projects that we're doing, but also how hard it is, or how we struggle... And we try to always have some inspirational notes on the episodes, so people can say "Hey, maybe this is something that I want to do."

And then - and this was Łukasz's idea - we also try to highlight contributions that people have done. Because at the end of the day, people only know the big things. "Okay, the new parser, or the JIT, or the garbage collector", or whatever it is. But there is a lot of very cool contributions for core developers, or regular people that are contributing to CPython... So we spend at the end of the episode some time trying to go through the last - we call this section "What's going on in CPython", and we try to highlight the different things that people are doing, so people know about them, and hopefully, if a name comes again and again, people say "I know that person."

**Jerod Santo:** That's cool. So Łukasz, Pablo speaks very fast. How do you keep up with him?

**Łukasz Langa:** Experience. It's just a matter of just doing this for long enough. We've known each other for a few years before that, so I was prepared for the Spanish 2x speaking speed.

**Jerod Santo:** Yeah, built-in 2x.

**Łukasz Langa:** Right. We were joking about this many times, because people who are listening to our podcast, which for the most part is Python enthusiasts, but really the Python core team itself - so they're saying "Yes, this is the one podcast that they cannot listen to us at 2x", because Pablo is speaking quickly. I am not speaking so fast, so maybe, you know, with this development of AI and everything, we should have some adaptive playback speed, where it recognizes who is talking, and for me it would be 2x, and for Pablo it would be like "Whoa, whoa, whoa, no..."

**Pablo Galindo:** \[08:17\] 0.75, actually. I don't think 1x is enough.

**Jerod Santo:** Yeah, some sort of normalization where they just both go to the same speed. That would be a cool feature.

**Pablo Galindo:** As an anecdote, a small anecdote, we at PyCon - this big conference that happens every year; well, there's several other ones, but the big one is in the U.S. So I normally give like a talk every year. So especially at PyCon U.S, there's these people that try to transcribe live, so people with hearing problems can read, so it's really cool... And this year, before I've given the talk, I apologized to the person, like "I'm really sorry about what is going to happen, but I will not be able to speak slower." And she was like "Yeah, no problem", but oof, she really struggled with that. But yeah, she kept up, she was really good.

**Łukasz Langa:** Yeah, the closed captioning at PyCon is a magical thing. It turns out that it does help people with hearing disabilities to participate in the conference, but it's also helpful even for other participants. So just as subtitles are being turned on by most people watching now like TV shows and other programs at home, the closed captions happen to be helpful for regular attendees as well. So this is something that has become a staple of PyCon U.S. I'm very happy that this is there.

Definitely, some people present more of a challenge to the persons actually doing the closed captioning... I'm always amazed not just at how fast they go, but how much they can express the different TLAs, and Python-specific terms that we're using. You would think, "Okay this is very industry-specific." And if you talk to your dad, or to some of your friends that are not in tech, some of the words, verbs and so on that we're using might be mystifying. You don't even know how to spell this. And yet the people doing the closed captioning are excellent at this. You would be surprised how obscure project names and so on, they are just perfectly able to spell just correctly. And it always touches my heart when I see my own name spelled correctly, which also does happen. They added me to their alphabet, so I'm like "Ah, this is awesome."

**Jerod Santo:** That is awesome. The personal touch means so much...

**Łukasz Langa:** It does.

**Jerod Santo:** ...and it's worth going that extra mile in those circumstances. Well, we're here today to talk about Python 3.13. Hopefully, I'll be able to keep up with you, Pablo... Because not only do you speak fast, but I'm kind of a visitor to your guys's world. So maybe keep them in check, Lucas.

We're going to specifically talk about the biggest, and I guess -- I mean, this is monumental, in fact... Our community member who thought we should do an episode on this - shout-out to Christian Klaus - says this is kind of massive for Pythonistas. This is the biggest feature coming out in 3.13, which should probably be out there if you're listening to this. We're shipping this October 2nd, and slated to release October 1st officially; at least the RC is out there, but you know, software and ship dates... We think it's probably out there. If not, coming very, very, very soon... The ability to disable or remove the global interpreter lock, or the GIL, as it's so lovingly referred to. Let's start at base principles. What is the GIL? And then after that, why would you want to remove it?

**Pablo Galindo:** Right. So the GIL is basically a ginormous lock all around Python. So Python is the language, but it really doesn't exist. It's an abstraction. And really, normally there is a second language behind it. In CPython it's C. CPython is the default implementation of Python, that normally people use. There are others.

\[12:05\] But then when this program that is the Python interpreter is executing Python code, it can have multiple threads at the same time. And all these little objects that Python exposes could be mutated at the same time, which is a problem. And Python in particular, CPython as well, and most of the implementations is reference counted. This means that to decide if an object is still alive, the interpreter can actually get rid of it. We have this little number inside every object that tells how many different instructors or fields are using it. When this number reaches zero, we know that we can remove it. Any person who has done some multithreading in computer science knows having a little number being mutated by multiple threads at the same time is no bueno. So the solution is basically to add a ginormous lock all around the interpreter... So because we don't know what the threads are doing, we need to just basically lock the entire thing. This means that only one thread at a time can be accessing Python code and executing Python code... Which means that you can still use threads, because those threads can switch from one to the other, which is what we call concurrency. You don't need to wait until one thread finishes to start the other. So they interleave, but there is no parallelism really, because only one thread at a time can be executing Python code... Which is a big problem in these days, when we have machines with 120-something cores \[unintelligible 00:13:26.04\] Or even your phone. Your phone has plenty of cores.

**Jerod Santo:** Yeah.

**Pablo Galindo:** And right now you're running Python on iOS, which is now a thing, by the way...

**Jerod Santo:** Python iOS is a thing as well. Let's earmark that for a future part of this conversation. So what you're saying is when running Python, you can switch quickly between cores, but you can't actually run the same code on multiple cores at the exact same time. So you're saying it's concurrent, but it's not parallel...

**Pablo Galindo:** Yes, correct.

**Jerod Santo:** ...because of that lock, one at a time... And it can switch at the speed of light, but no true parallelism until now.

**Łukasz Langa:** Right. So there were a few ways in which we worked around this obviously huge design limitation. So there are plenty of cases in which we're confident we can drop the global interpreter lock for what is happening on a particular thread. So if your particular thread is doing some big NumPy computation that is only on the sides of numbers that are not shared as Python objects, you can drop the global interpreter lock in the time that this computation happens, so you can let other threads execute Python in that time. If your thread is waiting on a blocking network connection, it also does not need to hold the lock, because at that particular moment in time there is not going to be any Python code executing. So you can give that GIL to somebody else.

So there are special cases in which we were already sort of parallel more than not, but it is very implicit. It depends on us carefully finding all those special cases and enabling them. And in the end, it does not scale for a regular user application. So if you just write Python code that loops over things, and just executes some string concatenations, all these regular things that you expect from a Python program, most of the time you're not going to be seeing any parallelism there.

**Pablo Galindo:** And what is worse, one important thing here is technically, GIL is more than just a lock. It's a condition variable, which is a very specific kind of synchronization primitive. It's a boolean that tells you if you have it or not, and an actual lock. And the thing is that you cannot select which -- when one thread says "Oh, I don't need the GIL. Someone else pick it up." You cannot select which one is going to do it. This is up to the OS. You're using Linux, so the Linux kernel decides who is the next one. And this can be not great, because the Linux kernel may not know what you're doing.

\[16:00\] So you can have one thread, for instance, that is super-CPU hungry; it's just crunching numbers. So that thread is like all the time wanting this GIL. And then you have many threads that are doing this IO operation. Maybe they are waiting on a socket, or something like that. But because of how condition variables work and the scheduler in Linux works, which you \[unintelligible 00:16:14.28\] but like not from Python normally, that CPU thread will pick up that condition variable and the GIL many more times. So it's almost like a race. When the GIL is released, you have a gun in a race and then you fire the gun to signal that the race starts, and then all the threads try to grab it at the same time. And the first one that has it, that's the one that wins. But there is nothing preventing that thread to keep getting it the next time and the next time.

So even if you are used to it and you can still say "Well, maybe I can work with that limitation", it's very difficult to reason about it and to try to adapt it to your needs, because it's really up to the OS who gets the GIL or not.

**Jerod Santo:** This is one of the primary reasons why Python's reputation is being serviceable in terms of speed, but for certain workloads, certain things, it's too slow. Because of the GIL. This is one of the reasons why people will say "Eh, I might pick something else because of the GIL." Fair or not fair?

**Łukasz Langa:** Yes... Well, it depends. It depends. It's a factor.

**Jerod Santo:** Tell me why.

**Łukasz Langa:** Right. So first of all, the speed of Python is mostly affected by the fact that it does a ton of indirection. The thing that costs the most in computer science, say for bad algorithms, is indirection. So every time where some language can just point at memory, read a value and it's done, it's going to be faster than a language that, well, actually, everything is dynamic, so you point at the value, but then that value has another value, so you have to go somewhere else in memory to read another value, then decide what to do, and read yet another value. So every time in Python that you're accessing an attribute, you're executing a ton of code, compared to accessing a field in a struct in C. So that's going to be the main factor of it being slow.

But the way where GIL is hampering us is scalability, which means simply for things that you could parallelize, you cannot do that effectively. So this is where the reputation of like "Well, not really scalable" comes in. But ironically, the GIL also makes Python faster than it would be without it. The reason why is because reference counting is a major reason for the global interpreter lock's existence. But it's not the only reason you need a lock in your interpreter. There's going to be internal data structures like dictionaries, where if you insert another key that wasn't there before, maybe there's going to be some rehashing that happens. So suddenly, the simple operation is going to take a little more time than usual. So there's going to be a time, a split second where the internal structure of the dictionary is inconsistent. For example, you would be able to see that it has more elements in terms of count than you actually are able to access. Or you're going to be trying to access an element that is there, it claims it's there, but you cannot get it yet, because the dictionary is being mutated.

So for all those things - and there's plenty of cases like that - the global interpreter lock is very convenient, because we are already holding it, because we care about the reference counts to be always correct. So there's no other lock we need to care about. And this is actually making matters cheaper, because we only have this one. And once you hold it, you can just run, and it's great. And then plenty of authors of C extensions, like NumPy and so on, can also depend on the fact that as soon as you have the global interpreter lock, you have a lock that you can yourself depend on for your own synchronization needs. So now, without that, you're going to have to have fine grained locking. So for every of those use cases that require synchronization, you're going to have to have a smaller lock. And it turns out that if you do this, then you gain scalability, but you pay the price of single-threaded performance... Since being able to acquire multiple locks is necessarily slower than just doing it once, right?

**Pablo Galindo:** \[20:19\] It also has other consequences apart from this particular aspect, which is correctness. Right now, if you have ever done multi-thread in a language which requires locks, like C or C++ or something like that, when you don't have those locks, then you go into this thing that people call undefined behavior. Unicorns can appear in your program, and things can happen. In Python, because it's serial - sure, the results can be garbage, but it's not going to crash, because it's just one at a time.

And this especially happens as well on these C extensions or these native extensions, which can be anything. You could think about it like "Well, \[unintelligible 00:20:58.04\] one of these locks per extension -", sure, you may have these problems that Łukasz is mentioning, but it doesn't sound too bad. But one of the problems if you have many locks is that now those locks can interact between themselves. So if one extension just happens to call another for any reason - there is callbacks to schedule, or there is actually direct interaction or something like that, those locks now can do things like deadlocking, or live locking, or reentrancy if you don't have something prepared... And remember that these extensions are made by different people. So now you have \[unintelligible 00:21:28.25\] that only happen across them. And that is a nightmare; it's a real nightmare. And the GIL is basically protecting this, because there is one single one. So all of them share it. So it's very easy to reason about it, compared to not having it.

**Break**: \[21:44\]

**Jerod Santo:** So if you have slower single-threaded performance, you have loss of features, or more complexity, potentially, because your loss of a single lock... Now you need fine-grained locks and all kinds of other things you can do, which is problematic. And a huge lift by many developers over - how long you guys been working on this?

**Łukasz Langa:** This has been many years in the making.

**Jerod Santo:** Many years in the making.

**Łukasz Langa:** Yes.

**Jerod Santo:** Okay, add all those together. Worth it?

**Pablo Galindo:** We don't know.

**Łukasz Langa:** Well, we'll see. We can't answer that.

**Jerod Santo:** "We don't know."

**Pablo Galindo:** We're in the stage of -- so actually, this is an important thing, by the way, which I don't think we have mentioned... In 3.13, indeed, there is a build of Python that will not have the global interpreter lock, but you don't get it by default. You need to manually compile Python. I mean, there's people that are distributing Python with this, so probably you don't need to manually do it. You can fetch it from your distribution \[unintelligible 00:28:09.15\]

**Jerod Santo:** Somebody will build it, yeah.

**Pablo Galindo:** Yes, exactly. But it's not the normal one. If you install Python 3.13, it has the GIL.

**Jerod Santo:** It's not like a flag that you give when you run Python. It's a separate executable.

**Pablo Galindo:** Yes, it's actually called Python 3.13t.

**Łukasz Langa:** Threading.

**Pablo Galindo:** Threading, whatever. It's just the way it is.

**Jerod Santo:** Sure. It's free-threaded.

**Pablo Galindo:** Yeah, there you go. So you need to run that. And with that build, you can actually select a runtime, only with that one. You can select the runtime, you want the GIL or not. And this is very useful in case you want to try for a performance difference, or because you want to -- for instance, you are doing one of these libraries, and you want to test if your library works with and without, but you don't want to run your CI with two builds, or whatever. So you can do it. There are consequences to this, because for instance in Python over the years we have added a lot of new optimizations. For instance, one of the things that I think Łukasz was mentioning on the recent \[unintelligible 00:29:02.02\] is that it's dynamic. So this is very important. If you are adding two variables, x and y, the interpreter is going to say "What is x? Oh, x is an integer. Okay, let me fetch the code for adding integers. Okay, what is y? Oh, it's an integer. Okay, let me fetch the code." And then the next iteration of the loop is going to say the same thing. "What is x?" So it's very annoying, compared to just "Here's a bunch of bytes, and I'm going to add this to this bunch of bytes, because I know what they are."

So in this particular case, precisely to avoid this dynamism, we have added a lot of optimizations that try to find this pattern. So they say "Okay, you're adding these two variables together, but the last 3,000 times I have seen this addition, there were integers. So it's kind of a good chance that there are integers the next time. So I'm going to create this super-performant code that is going to just reach into the internals of the integer object in Python, it's going to grab the real integer, and it's going to add it at CSP." It's going to create a result without asking all these stupid questions, and then it's going to box it again into a Python object. And it's much faster. You can still have a float suddenly, and it will deoptimize and whatnot, but that is a good problem.

All those optimizations don't work without the GIL, because they are not thread-safe. So if you use the single-threaded version - or the free-threaded version, which is a bit of a mouthful...

**Jerod Santo:** Sure.

**Pablo Galindo:** So if you use Python 3.13t, but you don't have the GIL activated, you also don't have the optimizations activated, because we don't know if they are safe or not. So what does it mean? It means that the free-threaded version is slower in single-threaded. So you only run one thread, and you're using the Python 3.13t version is slower, because they don't have those optimizations activated.

**Jerod Santo:** Slower for now, or slower for good?

**Pablo Galindo:** Right, for now.

**Łukasz Langa:** Great question. So let's maybe take a step back and explain the kind of strategy that we took with this particular project, which is a huge undertaking, but at the same time, we have a release cadence that releases Pythons every year. Predictably in October, you're going to get a new version of Python. So there's no way you can shove a big transition like this within 12 months. So what we're doing instead - essentially, what you're getting is a state of the project as we are in right now. So there are things that we still need to do, that are still not done.

Most importantly, this split for the main interpreter still having the global interpreter lock and so on, and an experimental one that you have to build yourself, and then you can run without a global interpreter lock - that is deliberate, because with all those costs that we described, we really need to reach out to the community, saying "Look, this is now not an idea. You can actually grab this Python and check whether this helps you. Is it better? Is it worthwhile, the scalability for this extra complexity within the implementation, and maybe this cognitive complexity that is going to be sort of passed on to the user, is that worth it?"

\[32:05\] So the community will have to now step in and try out this new Python, and see "Okay, this is slower than the non-threaded version", but that's hopefully temporary. But the question to answer is "Does the scalability that this enables help?" So we really need them to give us two thumbs up, like "Okay, keep actually working on this", since this specialization that Pablo described, and the JIT compilation that follows from that, and so on and so on, are obviously features that we really want to have, including in the free-threaded version. And there are ways to go around it, but they are very complex. It is in fact like on the bleeding edge of computer science as we know it. There are plenty of known strategies for improving performance of interpreted languages that are single-threaded. For free-threaded interpreted languages, this is really where the science sort of is still unclear... Because JavaScript - there has been so much investment in that, like making that fast, with V8, like in Chrome, and so on and so on. Well, that is single-threaded, for the intents and purposes of our understanding of the interpreter. With a free-threaded Python, how to make that fast is more of a challenge. Literally, members of our team are going to be the people writing papers about this later... So this is going to take time. Longer than one release. Longer than two releases. But at the same time, we want to release what we already have, so that it's no longer just a pipe dream. It's no longer just a plan or idea. Users can actually experiment with this and tell us "Okay, this is actually awesome. This enables a use case we couldn't even try before." Because that's our chicken and egg problem. Before we actually enable this, we don't see use cases that are now impossible, so we cannot tell whether there's an untapped area of Python usage that would be now enabled with free-threading.

So this is what we're doing with 3.13. This is essentially this current state of the project. Now you can experiment with it. You can see whether your web framework is going to be faster now. Whether now you're going to be able to process data in parallel, and so on and so on. This is essentially one step of a longer project.

**Jerod Santo:** Right. And it's out there in Release Candidate. It's probably out there as we speak, at least in the official 3.13 experimental, as you guys pointed out. Are there early indicators? Are there people who have been just pining for this and they've already tried it in the RC, and are saying "Wow, we're seeing this"? Or no?

**Pablo Galindo:** Actually, that's a very good point. So one of the things that actually surprised me a lot... One of the unknowns here was how the community was going to adopt this, the reason being that it's just not that Python needs to be multi-threaded. Now if you compile C extensions, which are really, really popular in Python - that's one of the reasons why so many people use Python the language, because all the machine learning doesn't happen in pure Python. It happens in compiled code, and CUDA, and GPUs. But Python is the driver or the glue. So all that code needs to be changed, or adapted, at least... Because now you don't have the lock protecting you, and who knows what happens now, right? Which is really challenging, because right now you need to go through the entire codebase, that huge thing, and sanitize the codebase through this particular problem. And there's no manual for that, if you think about it. So you need to reason about the entire thing.

\[35:48\] And we were a bit scared about how people will approach this, or what will happen, in the sense that if you don't do this, or you don't do this correctly, it's going to crash all the time, or it's going to crash just once every blue moon, or whatever. So we don't know. So one of the things that we have seen, and is really impressive, is that the community has jumped this -- like, incredible. People are building two versions of these extensions, one for the normal build, one for the free-threaded build, which is already huge. This doubles your CI time, doubles your storage for the extensions... So it's a lot of work, actually. And there's a lot of people that are so excited to jump to these extensions, and they try to fix it and reason, and try these little locks all around.

So all those people have been trying it, and one of the things I have been super, super-surprised here is that once you add those extensions, and you have a final application -- like, I don't know, a machine learning, whatever it is... Or like an LLM, or whatever you're thinking, that uses a lot of these things, not just one; like five, six, seven really complex ones, plus interpreters, plus maybe a web server, something like that... And then you run it through the free-threaded version, it just works.

I mean, again, who knows? Maybe every Saturday you need your entire SRE team looking at it. But right now, it's not mega-crashing. Because what we thought is that this was going to immediately crash when you add enough complexity to this. Because it's just a statistics thing. The chances that there is some bad interaction when you pull out the threads and the amount of code that is used - it's inevitable. And still, from time to time, we find very funky s\*\*t in the interpreter when you call a method and sometimes another method is called, because there was something, like a memory reordering problem, which is a very technical, deep thing... And debugging that particular thing is just hell. But that is very rare, and obviously, we fixed it immediately.

And we are really surprised about, first, how many people have jumped at this, and they're super-excited, and they want all of those extensions, and working. And second, how "stable" this is, meaning how little bugs we have seen in the while. We expected many, many, many more, and we are seeing very little. So right now, it's super-promising.

**Łukasz Langa:** Yeah, what does help is that we do have the people behind it, like Sam Gross, who actually did the prototype of 3.9, and then 3.12, now who is working on making this for 3.13 and forwards, is being helped by other engineers who are really into this, and are able to find thread safety issues, and data races, and so on. We were able to set up a thread sanitizer, which is very complex to set up in an interpreter environment like Python.

It turns out it does help us with finding those issues. Some of them are pretty funny, like figuring out that for this entire time the thread handle in Python was not thread-safe itself. Or the threading lock was not thread-safe itself. So once you actually did the operations of locking - yes, those were thread-safe. But the Python object that you used was not, because it didn't have to be. And now all of those things have to be actually fixed, so they are probably formally correct now.

So yeah, there's been a lot of work, and a lot of work is still to be done, but our hearts are warmed by how little terrible and unsolvable issues we've seen so far. Some of them are complex to debug, and complex to diagnose, but we've been successful in improving the situation so far as we go.

**Jerod Santo:** So for your average programmer out there, with their average Python app, whether it be a web app or a desktop app or whatever, should they be hopping on this experimental and giving it a try? Or is it a thing where it's like, if you don't know that your code is thread-safe, it's probably not? Or is it the other way around? What's the water feel like? Is it warm, are there alligators in there?

**Pablo Galindo:** \[39:54\] It depends. If they are paid to make sure that the thing is stable, the recommendation is no. Because - I mean, try it out? Sure. You can get very excited, by the way. One of the things that we have seen... Me myself, for instance, at the company I work, Bloomberg, we have tried to see what will happen. Even if it crashes once every three months, or whatever it is, but just to see a sense of what is improving here. Because if then, down the line, you're going to justify any effort on your side to adapt your thing to the free-threaded version, it's really good that you know what you're going to gain. So that, for sure.

Trying - we really want people to try it, and tell us what they see, and what doesn't work. Is this a production-ready workload? Absolutely not. Not because we know it's going to crash or anything, but because we don't know the real status of the thing. We take stability very, very seriously in the core team, so we are not comfortable right now. That's why the thing is called experimental, because we are not comfortable right now recommending people -- especially when you not only have the interpreter, but all these other things. Still, we need to figure out good APIs for those extensions to hook into the interpreter, and things like that, and that is not there right now.

So the chances that we can look at these things and say "Yeah, this can run in production, no problem" is almost zero right now. But as we release Python 3.14 and 3.15, we will move this experimental into supported, which means that you can run it in production, but it still will be two versions. And eventually, when we gain enough confidence that this is the future we all wanted, it will be only one Python, which will be Python without the free-threaded version. But until we call it stable, and supported - that's the keyword, supported - I wouldn't recommend people to actually use it in production environments.

**Łukasz Langa:** Yeah, production environments. However, I would be a little more optimistic about this, saying that if you are an end user, probably the amusement park is still being built for you. So this is not something that is ready for end consumption, unless you are really just trying to just see how pure Python works, without all the libraries that you depend on. However, if you are a maintainer of a library that a lot of people depend on, you might be interested in checking it right now.

So we already see plenty of interest from data science libraries, and web frameworks, and so on and so on. And that's exactly the right moment for them to identify whether there's any blocking issues, or whether the gains are not enough for us to justify the change... Or maybe the opposite, or maybe they're amazed at how better things are right now.

Funnily enough, even things that were not ever designed with free-threading in mind, like Async IO - you run the test suite of Async IO and it's just faster on free threading, because it just can magically utilize the fact that it is now truly parallel.

So there is promise there. Definitely, we expect that once the library authors actually go through some of those hoops that are required for their things to be supported by the free-threaded version, we're going to see uptake on more libraries, and then more users, and so on. So now is the time for the library maintainers to check it out. But for end users, it is a little soon.

**Jerod Santo:** That makes a lot of sense. Somebody should start a list of libraries which have taken that initiative...

**Łukasz Langa:** There is a list like that right now. There is a website. I forget the name right now. We might add this to the metadata of this episode, so that you can check this out.

**Jerod Santo:** Yeah.

**Łukasz Langa:** Just as in the Python 2 to 3 transition, we had a list like this. There is a list. It is very fresh, so I forget the website name right now. But it's there.

**Jerod Santo:** \[43:53\] Cool. Very cool. Well, it's definitely exciting times. I'm even excited, and I don't use Python on the regular... But I think that's early indicators of something that's potentially a huge success. So congrats to you guys and the whole team for the effort, at least, to make it no longer theoretical, and make it an actual piece of software, a bleeding-edge piece of software that's going to produce even some papers.

Should we move on to the JIT? Łukasz, you mentioned the JIT as another feature of 3.13. Is there more to say about the GIL? I'm assuming these things will probably interact as topics.

**Łukasz Langa:** Right. So the JIT is still one of those other topics that I remember being this big pipe dream of CPython for as long as I can remember. We grew a few attempts to have a JIT in forks of Python, or entirely new Python interpreters... Most of those efforts failed. There's one holdout that is actually doing very well, that's PyPy, and that is actually JITed, which proves that this language can successfully use this performance strategy for good results.

**Pablo Galindo:** As a clarification also, for the people that don't know, PyPy is not a JIT for CPython, it's an entirely different interpreter. It's like the same language, but it's just a different interpreter, written actually in Python, which is JITed then.

But it's a separate thing.

**Łukasz Langa:** Yes. It is an entirely separate technological stack. It is attempting to be bug-to-bug compatible with CPython. People adopting it have seen "your mileage may vary" sort of results. It might be really a drop-in replacement in some cases, and it might be more tricky to actually adopt it otherwise. Plus, the approach of JITing they're using has some characteristics with memory usage being larger, and so on. So it depends on your use case. But obviously, the most popular version of Python is CPython, it's the version that we are working on, so this is an idea that just comes back, and comes back, and comes back... Like, "When will Python have a just-in-time compiler?"

So to a large approximation, if you squint really hard, this specialization that Pablo already mentioned is sort of slowly becoming a form of what the JITs are doing, which is to remove all this indirection. But the last step that they did not take so far, those optimizations, is to actually replace running this C code with this C code, with an actual compilation to machine code, as we go, dynamically, which is what the JIT is doing. And Brandt Bucher, one of our core team members, found out this paper about how you can automatically generate a JIT for the Lua interpreter, and how it is slower than a handwritten JIT, but not by that much as you would expect, and it is much more maintainable.

And using this approach, with this additional machinery that is needed for the just-in-time compiler that tries to compile during our build time, you know, the simple opcodes that are later glued together to this optimized machine code and so on, and to discover whether that trace that we're running is still correct or maybe we need to throw it away, because we thought this thing that we're running is like adding to integers, but now we're seeing "Oh, there's a float that we did not expect", so we need to throw out this optimized code and actually go back to the interpreter again... So all this infrastructure is already in 3.13, and so far we can proudly say that with all this added, Python is not slower.

**Pablo Galindo:** It's 0% faster.

**Łukasz Langa:** \[47:46\] Yes, it is 0% faster, because again, with the release cadence that we're having, 12 months of work is a lot, obviously, but it is not enough to just say we started from 0 JIT, and ended up with a mature JIT like V8, and we are done. It is just simply impossible, especially that our team is much smaller than the V8 team, it's much smaller than the Java hotspot team, and so on and so on.

So yeah, so far there is another experimental feature in Python 3.13 which is the JIT. You have to compile with that, and you have to enable it when you're running Python. So it does not have most of the optimizations that you would expect from the just-in-time compiler, because that entire technology of just-in-time compilation is essentially a framework on top of which you can now make optimizations that make things faster.

For example, if within the trace that you're building, connecting all those machine code blocks that are now faster and removing indirection, you have multiple checks whether something is none, or something is an integer, you can move that check of that same piece of data to the front of the trace, and just do that check once, and you don't have to repeat it in different parts of the code, and so on. And to make sure that the traces are as long as possible... Those are different levels of optimization.

You want to JIT relatively quickly, so that people can see the uplift very quickly, but you don't want to JIT every code that is being executed, because that would make the memory usage crazy. So there's things that you need to dial in there, and implement. So it is very much an in-progress project. It looks very promising, but so far, Python 3.13 is a snapshot of the current stage of that effort as well.

**Jerod Santo:** Pablo, anything to add?

**Pablo Galindo:** Well, one of the things that is very exciting with the JIT right now is that the approach itself is quite cool. Like, for instance, if you're making a JIT for a dynamic language, one of the biggest challenges is not only adding the infrastructure itself for a particular CPU, or architecture, it's that you need to do it for all of them, and for every single OS... Because at the end you're writing machine code, and machine code depends on your CPU architecture, your platform... So the JIT is not the JIT, or as we like to call it, legit... But you need one for Windows, one for macOS, one for Linux, but also one for AMD64, one for \[unintelligible 00:50:19.11\] one for ARMv7... So you can imagine how hard this actually is, because you basically are implementing now a compiler.

But this approach that the brand is taking not only has the advantage that it's basically leveraging an existing compiler behind, in this particular case LLVM, but also it's doing it at the front. So it doesn't happen at compile time. Like, all that assembly code has been generated before, and the only thing that we need to do at runtime is to stitch those things together. So we have these templates.

So \[unintelligible 00:50:50.29\] not a runtime dependency; it's just a build time dependency. So you build all these assembly code, and it uses the native compiler for your platform. So if you're in some forsaken platform, like, I don't know, AAX, or something like that, it will work if you are able to run Clang there.

So that's great... But also, which is really cool, most JITs need to also implement themselves, is that we are able to leverage an optimizing compiler for this particular workload. So not only does assembly code works for every architecture because someone else actually implemented the backend, but also, we can leverage all the optimizations that everybody that's using LLVM is using. It's the same optimizations that Rust is using. Rust is using LLVM these days still, and they are using -- I mean, if you program the IR, the Intermediate Representation correctly, and then you are able to leverage that well, which is easier to set that done... But the idea is that now you can use these many years of compiler research just to make your code faster, and we can just leverage that immediately, as opposed to having to re-implement all those things, and have like SSA ourselves, and streaming, and all that stuff. Now you just run Clang, and you get some super-cool assembly out, and you need to just stitch it together, and \[unintelligible 00:52:04.25\] the symbols and whatnot, but you can get results much, much faster than if we need to implement a full-blown JIT for Python. So I'm very excited.

**Jerod Santo:** It's like a JIT factory.

**Łukasz Langa:** Java style.

**Jerod Santo:** \[laughs\] Do you guys use factories in Python?

**Łukasz Langa:** JIT template factory, yeah.

**Break**: \[52:26\]

**Jerod Santo:** If we can move this conversation up a level for a moment - do you guys like this one-year release cadence? It seems like it has its drawbacks.

**Pablo Galindo:** Well, this guy implemented that idea, so what do you think he's going to say?

**Jerod Santo:** Who did? Łukasz, you did this?

**Łukasz Langa:** Yes. So we can make this good cop, bad cop, or actually devil's advocate... You know, this guy - he's trying to convince you this is good. So I'm also the release manager of some ancient Python versions. In fact, when Python 3.13 comes out, the first version I released, which is Python 3.8, is going end of life. So we're going to say goodbye to that.

It was a very, very nice release. I really enjoyed Python 3.8, but it's time to move on. So if your use case, if your production is still running on 3.8, now it's high time to move, since it's not going to receive any security updates anymore.

Right. So at the time I joined as the release manager, the release process was a little bit hand-wavy in terms of when are we releasing Python. So the theory said we're releasing it every 18 month-ish. But it could be anywhere between 18 and 2 years, and you know, you couldn't really tell. And definitely, what you could not expect was which time of the year is this going to happen in. And the consequence of this was that Linux distributions in particular, but also other operating systems and users, were lagging behind adoption of Python 3 versions a lot. And people are like "Well, Python 2 no, because Python 2.7." But Python 2.7 was out, and then essentially frozen for a long, long time. So people forgot how this thing looked like before, in times of Python 2.3, 2.4, 2.5, 2.6, and then 2.7. That unstable release cadence was problematic. And that caused, for example, for Fedora, which later is source for what is happening in Red Hat, was lagging behind with the releases that we had. And it turns out that the infrastructure that the big Linux distributions have, like Ubuntu and like Red Hat, is extremely useful for us to early find bugs in a new version that we are developing, in the betas, in the release candidates, and so on. So it would be worthwhile if we could actually ship the newest version of Python with those Linux distributions as they are also developed and go through their respective betas, and so on. That's also great for the end user, because then by your autumn release of Fedora, you are released with the newest version of Python, that was just released. That is a great experience for the end user.

So I wrote a PEP, a Python Enhancement Proposal document, arguing those things that I'm just telling you... That it would be amazing to have a fixed release cadence, that we can trust and share with the Linux distributions, such that they can essentially rely on us having certain milestones in the release, like reaching beta 1, like reaching release candidate 1, so that they can use the latest version as soon as possible. And we switched to that release cadence in Python 3.9, and we've been using it ever since. So yeah, your honor, that's my position on this issue.

**Pablo Galindo:** Well, as the other release manager of \[unintelligible 00:58:51.02\] I mean, one of the problems that this thing has -- I mean, it has worked really well, I think. People in general - and just to be clear, so Łukasz doesn't kill me after we finish the podcast... I think it's a positive change. So in general, very good. I think it has brought some predictability. People actually now have dates they can put their lives around.

One of the interesting side effects of this is that now people have this impression that Python is releasing too often, so every single year there's a new version, and then the old version gets out of support; or first bug fix support, and then security support. So they have this feeling that they're going to be -- if they don't move fast enough, they're going to be out of support super-soon... Which was always true; you get the numbers changing slower, so the impression was that it's happening slower. But right now there's this impression that Python is changing too quickly, or whatever it is.

\[59:54\] The other downside that this has is that, as you can see, for example, for Python 3.13, because we need to release every single year, it means we are releasing these features, maybe like big ones, like the no GIL, or the JIT in particular, not being super-exciting. So for instance, JIT in particular is 0% faster - well, it's kind of cool, but why would you use it? If we had a two-year release, maybe it would be a bit better. So you get these weird situations.

So planning big projects right now is a bit more challenging... For instance, one of the things that happened in Python 3.9, if I recall - we changed entire parts of the language \[unintelligible 01:00:25.01\] different parser. Which I'd like to describe as changing the wheels of a car that is moving. Not the best feeling. But we could have some extra rest if that was a two-year release cadence, and we didn't have to finish everything, and all the validation in one year. I mean, this doesn't mean that it was rushed, it's just that we had to put more hours in, just because we wanted it to make to the release.

**Jerod Santo:** Sure.

**Pablo Galindo:** But on the other hand, it's humans making it, so even before, when the situation was like Łukasz was describing, the day of beta freeze, which is the moment when no new features can come in, and we only bug-fix it from that point on in the release, everybody was rushing their feature out the last day; all the new features... Humans are humans, so it doesn't really matter. But that's one of the -- certainly, the heat has been raised a bit, because right now it's released more often, and the numbers are changing faster.

**Jerod Santo:** That was more the angle I was coming from, was from the -- when the train leaves the station once a year, you better get your stuff on it, whether it's ready or not. And I appreciate -- I didn't know the history of where it came from, so I think this is definitely progress and improvement. Predictability, you know each time of year it's going to go out etc. And it makes a lot of sense, especially a large project like this, with tons of people using it, you want to be predictable, but also not too frequent. I would probably tend towards more frequent, because now you have the train leaving the station more times. And if you miss this one, that's alright, we've got another train leaving six weeks from now. And so you can hop on when it's ready, versus having to hop on once a year. And we've seen success in projects like Chrome etc. with like rolling every six weeks whatever's ready, we're going to ship a new version... I don't know if that works with languages in runtimes. You guys know way better than I do, which is why I asked the question.

**Łukasz Langa:** Right. I guess for compiled languages that might in fact work better. For us the difference is that we're interpreted, so there's a lot of code that is lying next to your interpreter, and then you're trying to run it with whatever is available to you. With a lot of the libraries that we're supporting, they're a particular issue... So now I'm going to be the devil's advocate, because Pablo was too apologetic. So let me --

**Pablo Galindo:** Wow, wow. Shots fired.

**Łukasz Langa:** Yeah. Let me just say - hey, this is all a compromise, and there's obviously going to be things that are better and things that are worse. The price to be paid for a shorter release cadences is that the matrix of tests of CI that a library maintainer has to now kind of suffer with, has to run, is larger, because just the number of versions that is out there, that people are using; there's just more versions than there were before, right? You had 2.7 and 3.6 maybe. And then 3.7 appeared some 18 or 19 months later. So then the growth of this matrix was sort of spread out in time. Now that matrix is bigger.

I would claim that, okay, it's good that we're testing with every particular version, to identify where an incompatibility arose or something... However, I always like to say that it's still the same sausage, we're still the same sort of team that is developing the thing, we still have the same velocity, only we slice it thinner now. So every release is easier to migrate to, compared to the last release, because --

**Pablo Galindo:** \[01:03:57.07\] Yeah, that's a very good point.

**Łukasz Langa:** ...necessarily there were fewer changes.

**Pablo Galindo:** Yeah. Psychologically speaking, that's a very good point, actually. I'm glad that you mentioned it. Because one of the things that happen when you release every two years or more, especially for a language that needs to evolve and needs to change things, and maybe it doesn't have -- I mean we can \[unintelligible 01:04:11.07\] backwards compatibility, don't get me wrong... But other languages like C++ clearly care even more. So for a language that's changing this much, changing and adapting your code and all the libraries from a two-year worth of changes is brutal... And we saw that before, right? Which means that until new libraries are compatible with the new version, there's a non-trivial amount of time. So as a user or as a company employee that you want to leverage these new features, you're probably have to wait a lot, because now people talk about the scheduling the work, and finding even how much it is, and a library maintainer says "Well, we'll fix it later." But when the changes are smaller, psychologically speaking, obviously, in reality it's more or less the same; it's more or less a non-linear interaction. But in general, when the changes are smaller, then it's more enticing, because at least you know "Okay, maybe this and this and this thing..." And sure, maybe you need to wait for another library to do it, but normally -- right now, what we have seen compared with 3.8 when we started doing this is that people jump earlier. Before -- for instance, one of the biggest libraries is NumPy, which is numerical computing done in C, and Fortran and whatnot. So that library used to take a long time to be compatible with new versions. Like months, sometimes even like half a year, or something. And right now, we are having it almost day one. So this is fantastic, because people that want to use the new features in the language, they are not held back by the fact that their own particular dependencies don't have the support for this.

So most of these things, I don't think you can approach it from a data-driven kind of perspective, because it's very difficult to say what is better and what is worse. But certainly, from a psychological point of view, I think -- again, I think you have a very good point. Not too often, but also not too lagging behind. I think earlier is better; maybe not too early. Every three weeks it will be impossible for a compiled language...

**Jerod Santo:** Sure.

**Pablo Galindo:** We will ship a JIT compiler that compiles and optimizes your code. It will be like 6% slower, or something. But one year - yeah.

**Łukasz Langa:** I want to add one thing. So NumPy is not doing as well as Pablo is claiming. They're doing way better. There are already wheels for Python 3.13, before the release of Python 3.13. Those wheels are going to work on the final version of Python 3.13 released October 1st. We're releasing this mid-September. They're already there. Moreover, they're also already there for the specific version that is this experimental interpreter that does not have the GIL.

**Pablo Galindo:** I think everyone, a non-trivial amount of listeners probably, are saying "What is that wheel? What is this thing?"

**Łukasz Langa:** Yeah, so it's this binary package that lives on the Python package index, on PyPI, that people download NumPy from when they say pip install NumPy. So if you say pip install NumPy from Python 3.13, on day one you're going to be using wheels that are already there before the release of Python 3.13.

**Jerod Santo:** Wheels? Is this another word for a build? It's like a build?

**Pablo Galindo:** Basically, it's a binary package. So it's a package that doesn't contain Python code only.

**Jerod Santo:** Why do we make up another term for it?

**Pablo Galindo:** Well, this is the key... Because the Python package index used to -- well, I think it still is... It's called a cheese shop, because it's all about these multi-Python references and jokes.

**Jerod Santo:** Oh, okay...

**Pablo Galindo:** \[unintelligible 01:07:34.05\] that goes to this cheese shop. And that wheel is a wheel of cheese.

**Jerod Santo:** \[laughs\] Oh, gosh...

**Pablo Galindo:** So, you know... Ha-ha-ha!

**Jerod Santo:** They're taking that one a bit too far, maybe.

**Pablo Galindo:** Or like PIP. I mean, this is a slightly different joke, but do you know PIP? PIP is the package installer for Python. When you install Python, you do PIP install. Do you know what PIP means?

**Jerod Santo:** Python Install Packages?

**Pablo Galindo:** Pip Installs Packages. Yes.

**Jerod Santo:** \[01:07:58.27\] Okay. So a recursive acronym.

**Pablo Galindo:** A recursive acronym.

**Jerod Santo:** Yeah, yeah, yeah. Recursive acronyms I'm well aware of, but I'm not a Monty Python guy, so I missed completely this reference.

**Pablo Galindo:** Well, you know, I was missing this reference for years, and someone pointed it out, and I was like "Well, I suppose it makes sense."

**Jerod Santo:** Like, I have to watch it. Is it from Holy Grail, or which movie is this?

**Pablo Galindo:** No, I think it's one of the Flying Circus movies.

**Łukasz Langa:** Yes, one of the episodes of the Flying Circus has a skit about the cheese shop, and that's where that comes from.

**Jerod Santo:** It's a little obscure reference to build an entire Python ecosystem around, but okay...

**Pablo Galindo:** I think it's not helping for Python programs to look like they're in a \[unintelligible 01:08:35.15\] or something.

**Łukasz Langa:** But you just need to have some file extension for those things, and some name for those things.

**Jerod Santo:** Sure.

**Łukasz Langa:** We used to have a more primitive, early format for this sort of thing, and those were called eggs. Eggs were because, you know, snakes lay eggs. So that made this other sort of reference. Because Python and the name comes from Monty Python, but a lot of people just see the name Python, and they're like "Yes, snakes are cool." So snakes. We accept both sort of ways of interpreting this, because snakes are indeed cool; yes, sure. But yeah, now that we knew that eggs are not enough for what we need for proper binary packages, we were like "Ah, where to go now with names?" And naming is hard, let me tell you this much. Naming is very hard.

**Pablo Galindo:** Someone jumped in the middle of the podcast listening to us talk about eggs and snakes, and they were like "Wasn't this about tech?"

**Jerod Santo:** Again, this background is spectacular, because you do run out of references with snakes. How many things can you actually reference? But with Monty Python, there's just countless references you can make, just people won't get them.

**Łukasz Langa:** But yeah, they're very obscure these days. It's an increasingly old and hard to get --

**Pablo Galindo:** For instance, one of the funny ones, one of these attempts at JIT compiler from back in the day, I think from Google, was called unladen swallow, from the Monty Python \[unintelligible 01:09:57.25\] No, no, sorry. That was --

**Łukasz Langa:** Holy Grail.

**Pablo Galindo:** Holy Grail. The speed of an unladen swallow. Yes.

**Jerod Santo:** Good stuff. Okay, good meta conversation on release cadence. I think I agree with all your points. You had to find that sweet spot, and as frequent as you can be reliable, without being too frequent. And it probably varies per project, and I'm happy that you guys are happy with once a year. Certainly better than what y'all were doing before. That's very cool.

Let's go back to Python 3.13, because Pablo, at the beginning you mentioned it's officially iOS-compatible or something.

What does this mean? You can just fire up Python on your iPhone, or...?

**Pablo Galindo:** Well, not quite yet, I would say, but one of the things that - see, Python has a very old build system. \[unintelligible 01:10:43.29\] People that have been doing Linux for a long time probably have run into this. And one of the challenges of this is that -- well, and then it's different for Windows. But both macOS and most Unix platforms use that. So for a long time, that was okay, but there was a lot of platforms that we couldn't support, partially because of the build system, and partially because the source requires changes. For instance, many of the efforts that we're trying to do right now to make Python available in the browser... I don't know if you have heard about this, but right now there's a good effort to ensure that Python can run in the browser, and that it's a good alternative to JavaScript. There's a project, for instance, called PyScript, which allows people to run Python instead of JavaScript, which is quite cool.

So those require changes in these build systems, and even in the source of it. And iOS in particular has quite a lot of challenges. Actually, probably Łukasz can chime in to specify those, since this is very close to his hear... But one person in particular that has been working for iOS support, which is \[unintelligible 01:11:49.21\] He works right now at Anaconda, which is one of these Python companies... So he has been working quite hard to ensure that both the build system and the source itself works on iOS... Which has a lot of challenges, because iOS has not only an alien way of doing things, but many APIs are not available there, or others are available, but you need these specific things that you need Apple to bless you with their power just to be able to use... Like, the JIT compiler. How does the JIT compiler run in iOS? Who knows? Probably it cannot.

**Łukasz Langa:** \[01:12:23.03\] Yeah, so maybe let's start from the very beginning there. So the goal that we have with this iOS support, for the time being at least, is not to have an application on the App Store called Python. That's not what we're doing. What we are doing right now is to have the Python distribution, the source distribution, ready entirely for being embedded within another application that somebody wants to release on the App Store for iOS.

This was theoretically possible in the past with already a ton of hacks that Russell Keith-Magee historically made for a project called BeeWare, that is just running Python on mobile, on both Android and iOS. But in the Python source code, our source distribution was not making this easy.

There are plenty of changes that you may have to make, because the phone platform that Apple came up with is very limited. It is limited by design, such that it's more secure, and it doesn't waste your battery too much. And it does a bunch of other things that make it easier for applications to be just swiped up to kill them, and they don't run any runaway processes, and whatnot.

So there are APIs there that are not allowed. There are others that are just not implemented, so they're not available. You cannot run threads, and so on. So this sort of thing causes embedding Python to be complex. Then there's the new and increasingly strict rules around when you're packaging some sort of binary blob, and want to put it on the official app store for Apple - they have this automated, and sometimes in person, but mostly automated review process whether what you're publishing is safe.

So there's plenty of things that an interpreted language like Python would do that would be flagged by those automated systems as unsafe, that "This code is doing something fishy." So there are changes needed for those things to just pass review, so that your application that embeds Python can successfully actually appear on the app store. Until very recently, you couldn't really have just dynamic libraries lying around in your bundle that you're publishing on the app store. Everything had to be statically compiled, which puts depending on libraries like NumPy into jeopardy, because it is very hard for external C extensions to be built in a way that they're both all part of a single binary. Now this extension is lifted; however, you have to sign everything that you're publishing to the app store separately, so it has to be notarized by Apple, it has to be signed with your application developer certificate, and so on, so you know when you're sending out this code to Apple that "Okay this is the code I built, nobody meddled with it", and then Apple notarizes it that "Okay this one is safe to be run by users' phones", and so on.

So all this infrastructure - it seems like something that shouldn't really be our concern, but all of this was making it hard for Python to just be embedded. And now with Russell's hard work, this is a platform that we support. So if you want to have a text editor that has automation in Python, if you do want to have an editor for Python source code, there's a few of those, like Pythonista, Pyto and so on. Now it's going to be much easier for the authors of those to upgrade to a newer version of Python. This is why all those apps lagged behind and they were still on Python 3.8 or 3.10, because it was a ton of work to upgrade and redo all those hacks in a newer Python version. So now, unnecessary. We support it.

**Jerod Santo:** \[01:16:10.06\] That definitely wasn't what I was thinking, but it makes a ton of sense, and I think it's going to make some people very excited.

**Pablo Galindo:** What were you thinking about...?

**Łukasz Langa:** Yeah, what were you thinking about?

**Jerod Santo:** Write some Python code, and deploy an app based on it. Like, build an app in Python.

**Łukasz Langa:** Right. So this is kind of step two for the BeeWare project that Russell Keith Magee is part of, and which is now being essentially sponsored by Anaconda, where - yeah, you're going to be able to build Python applications from scratch, and end up with an app on the iPhone that you can put on the App Store and it's fine. But the first step of this is that all this additional tooling that BeeWare is building on top of Python needs to rely on Python being embeddable.

**Pablo Galindo:** Conceptually speaking it's not different from the first use case, because you're not going to have one single Python in the App Store that everybody can use. Everyone will have a different Python version, so it's a trivial embedding. So you're not embedding this on a text editor, you're embedding it on a binary that is just Python. But you also want to see not only your Python code; you want to see your dependencies as well... This is the same - if you want a text editor to have Python inside, to do some extensions, you may want some extensions that Python can do to interact with something else. So maybe you want also that on those dependencies.

So it's technically -- if you squint hard enough, it's really the same case. It's just that for the developer that just wants to put some files, and maybe to say "I require this and that", that's a lot of work. You're in the business of compiling Python yourself... What are you talking about? So it's much better if we can offer a specific workflow that says "Okay, if your case is only this and that and you only have these dependencies then you just click this, put this here", and the build process will take that for you so you don't need to. That's step two. But conceptually speaking, it's just dev tooling, not really a huge undertaking.

**Jerod Santo:** Right.

**Łukasz Langa:** But really, it's like -- again, incremental steps. So the important thing here as well is that this is now part of our CI. We are building Python on iOS every time you make a change, so it's going to be much less probable for us to introduce changes without knowing that they break support for running this on the phone... Which should be great news for anybody that actually wants to see Python on mobile devices, because now we are going to care to keep this running.

**Jerod Santo:** Well, now you have me thinking about the future. Let's close on this: wish list. Imagine that the three of us are sitting down next September and talking about 3.14. What do you want us to be talking about? What do you hope we're talking about going into 3.14, each of you?

**Łukasz Langa:** Okay, so my dreams are simple. I want everything. \[laughter\]

**Jerod Santo:** I like that.

**Łukasz Langa:** Honestly, I sponsored making GIL the optional PEP, so this is very close to my heart. What I would like to see is for this to pay off. For library developers to step in, try it out and say like "Hey, actually, this is helping us." What is related to this - to see that the performance efforts that we are having separately from the \[unintelligible 01:19:28.27\] lock removal actually converge, and kind of do work with this free-threaded version. And also, finally, again free threading - we don't expect people to actually start new threads randomly, and end up in this crazy world of free threading where you can just easily just write bad applications by writing on top of your variables, and accessing data you shouldn't.

\[01:19:59.23\] We don't want to reintroduce models that already we know failed in other languages. We want tooling to be more high-level. So I want this more high-level tooling to start popping up slowly. We deliberately didn't suggest any so far. We want to see what the community actually wants to use. There's things that happened in other more younger programming languages... You know, you have goroutines, you have channels in different programming languages, and so on. So I'm very excited to see where this goes.

So this free threading evolution is what I would like to be able to tell you next year that, you know, has done great leaps, and it's now way more usable, and it's literally the future. So yeah.

**Pablo Galindo:** Well, in my case, apart from what Łukasz just said, I think the key for me is that this pays off... Which is not trivial. It may pay off for some users, for sure, that are really hungry about this... For a lot of time, removing the GIL has been -- almost like a joke about it. This is what is missing; this will be like the last thing, and everything will be so green and fantastic when we remove the GIL. Well now - now prove it.

So I want to see everybody saying like, you know, "Now that there is no GIL, I finally can do this." Which is not going to happen fully, because people still will reach to other languages for other reasons and performance... But I just want to see a big impact there. And ideally, we talk again for 3.14, and we are saying "Okay this makes a difference." So it was cool, sure, and some people really like it, but like - wow. Now it's a different playing field. So it's different.

The other thing that I would like to see - and this is a bit more personal... So this is a project that I started I think in Python 3.10, which is - a lot of people were complaining that the user experience of the language was not really great in terms of error messages, and things like that. So like syntax errors, and you mistype something, or there is some import problem... So that was really bad, to the point that there were some situations that were laughable. And we have worked quite a lot, with the new parsers and with many other improvements, to improve this... To the point that right now I'm super-happy to see that many -- like, even papers that are researching error messages are citing Python as like one of the... Obviously, not in the same category as Rust, because we can all agree that Rust has fantastic error messages. A different kind, because those are compile time error messages, and we are talking about runtime ones, if you don't consider the parser... But we are right now quite high in that sense, to the point that I think there was some research about how LLMs can reason about what's wrong about your code from the errors, and you run it in 3.11, it was like a 30% better you know performance of those LLMs, just because it's telling you a bit more, so it can fix the code a bit better, which is quite cool.

So we'll continue doing this thing, and we are trying to add even bigger changes to the interpreter, that are helping in this regard... Which is challenging, because those changes sometimes require some non-trivial performance gains there. Obviously, we don't want to affect performance, but to do that we need to put a lot of engineering in there.

So in 3.14 we are probably going to try some new ones, that are quite big, so hopefully when we talk again, those have actually been implemented and they have been successful, which I would love to see.

**Jerod Santo:** Yeah, that's awesome. I was reading about your improved error messages, and I think that's the kind of thing that has to be a sustained effort over time. It's like one of those paper cuts kind of things, where it's like "We're just going to continue to polish this thing." So a great effort, and I'm glad that you struck that up.

Well, the podcast, core.py, if you are a super Python nerd and want to nerd out with these two about internals on a more frequent basis than we'll cover it here on the Changelog... Which - it sounds like it's going to be about once a year.

I'd love to have you guys back next September and we'll be talking about 3.14. Hopefully, all of our wishes will have come to fruition, and we'll have people out there free-threading it... Cue Lynyrd Skynyrd here...

**Sample**: \[01:24:08.12\]

**Jerod Santo:** And enjoying the new Python with no GIL, and the performance improvements that are possible there. Lots of potential, and I'm certainly looking forward to it. Guys, thanks so much for coming on the show this week.

**Łukasz Langa:** Thanks for having us.

**Pablo Galindo:** Yeah, thanks for having us. It's been a pleasure.
