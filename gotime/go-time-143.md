**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about the Context package. We're gonna find out what it is, how we should use it, how we shouldn't use it... And on this journey today we're joined by Jaana B. Dogan. Hello, Jaana.

**Jaana Dogan:** Hey! How are you?

**Mat Ryer:** Good, thanks. Welcome back. Have you had a good week so far?

**Jaana Dogan:** Yeah, it's kind of slow here... I'm not sure what's going on there. We're in the same cycle every day, so I'm not sure if it's good or bad...

**Mat Ryer:** I know what you mean, yeah... Everything starts to blend together, doesn't it?

**Jaana Dogan:** Yeah.

**Mat Ryer:** Don't worry though, this episode will one way or another change that for you. We're joined by one of our favorite Gophers - it's Francesc Campoy. Hello, Francesc. Welcome back!

**Francesc Campoy:** Hey! How's it going?

**Mat Ryer:** Good. Are you having a nice week this far?

**Francesc Campoy:** Yeah. I mean, you know, what Jaana was saying - all day is the same day... But excited to be talking to friends, and stuff. It changes my life a little bit. I'm excited.

**Mat Ryer:** That's it - if we can just change it a little bit, for better or worse...

**Francesc Campoy:** Just enough.

**Mat Ryer:** Just so it's different. \[laughter\]

**Francesc Campoy:** Just different.

**Mat Ryer:** Yeah. Well, we're also joined by a very special guest, Isobel Redelmeier. Hello, Isobel.

**Isobel Redelmeier:** Hello, hello! Glad to be here.

**Mat Ryer:** We're very pleased to have you. How's your week so far? I know it's only Tuesday, but how is your week so far?

**Isobel Redelmeier:** It's going pretty well... Week three of new job, so...

**Jaana Dogan:** Nice.

**Isobel Redelmeier:** ...it's a different kind of rhythm from the job search one.

**Mat Ryer:** \[03:56\] Yeah, that's cool.

**Isobel Redelmeier:** Or the visa wait one also...

**Mat Ryer:** Oh... No, thank you. Well, we're gonna talk today about context, and I had a quick look in the docs for the Context package. It says that package Context defines the context type which carries deadlines, cancellation signals and other request-scoped values across API boundaries and between processes. Emphasis - mine. Who wants to have a Go explaining what that means?

**Isobel Redelmeier:** I can talk a bit about how the latter part makes things exciting for things like open telemetry, where you really have a lot of use cases for distributed contexts, distributed as in across process or over the wire... Or we can dig into that after.

**Mat Ryer:** Yeah, actually that just sounds amazing. I wanna hear about that, because it does mention API boundaries between processes, but I've only really used Context within a single program.

**Isobel Redelmeier:** Do we want to start with the within process one, or cross-process? It makes sense to--

**Mat Ryer:** We'll start with the simpler one. If there's any beginners out there that haven't perhaps -- or maybe they've seen this and don't really know what to do. Maybe all they do is just pass context to do every time... And good on them.

**Francesc Campoy:** It works...

**Mat Ryer:** It works, yeah.

**Isobel Redelmeier:** That's better than nil...

**Mat Ryer:** Yes, yes. The docs actually say you should never pass nil. We can talk about why that would be, too. So it's really a way to cancel things; it indicates this process is gonna stop, for some reason, isn't it? In the HTTP world every request has a context, and since it runs in its own goroutine, and of course, it can spin up other goroutines to then go and do work, if the user cancels that request, it might be nice in some cases to abort the work and have a little bit of a saving...

You can also use it to pass values around as well, can't you? Request-scoped values. What's that for?

**Francesc Campoy:** That's a good question. I actually like the Context package for cancellation stuff. I think that's the main usage that I will recommend for inside of your own process. Passing data inside of Context - I would think very much before I've started doing it, because otherwise what you end up is just having a bag of stuff, and it can be a pretty bad idiom to follow. But for cancellation - yeah. The way I normally explain why Context makes sense is imagine that you have something very expensive to do, and after one second out of one hour of computation the user decides that they don't care about this anymore, or they just crash. You don't wanna do that whole hour of process for no reason. That's why cancellation makes sense.

And the way you implement it is actually interesting, because the idea is that you could technically keep this data somewhere else, and many other languages do that. For instance, for Java we have ThreadLocals. Go doesn't expose ThreadLocals, which means that you actually need to make that explicit. But making it explicit and passing this context around all the data is not an easy thing to do. You would need to keep on adding more parameters to your functions as you go. Context kind of solves that, and it also provides the possibility of passing things that you don't even know you're passing.

So as a function, if I receive a context, maybe in that context there's some value that one of the functions I'm gonna be calling will retrieve. I don't even need to know about that. So it's those sides, like cancellation, and then kind of a generic way of passing data that you don't care about.

**Jaana Dogan:** \[07:54\] Can we say, in a way, that in the critical path of a user request you are going through a lot of different things, right? It could be a lot of microservices, or in the same microservice you may be bouncing between different goroutines. Some work may be getting done in our goroutine, and some of the other one is just getting done... So in order to coordinate all that work, we sometimes need to pass some values, as well as need to single some lifecycle-related events such as cancellation... Because let's say that if the user cancelled some task, all the lower-end services might have received some incoming request to do some work about it... But we already know at the higher level service that it's just not required anymore, so you may wanna propagate that signal to cancel all the work.

It also applies within the same process. You're sharing some work between multiple goroutines, for example, and then you wanna just cancel all that work, because we already received some additional signal that that work is not required anymore.

So it gives us this good, unified way of passing around some data and passing around some lifecycle signals inside the same process... As well as it gives us a foundation to do this when we are going to other processes, other services.

**Isobel Redelmeier:** Very much so.

**Jaana Dogan:** I was able to summarize your thoughts... \[laughs\]

**Francesc Campoy:** Yeah, I'm actually curious -- there are the two things; it's cancellation, so making sure that unnecessary work is not done, and then the other thing is passing values. And they're very different. And for me, the weird thing is that they're the same thing. They're the context. And I feel like they could have been completely different things, because the way we pass values -- it's useful, because for instance the traditional example is like "Well, when you're logging, you may want to log a request ID", and no matter what function is logging it, that request ID should always be the same, because that's what makes sense. That way you can see all the logs for this request.

But that is completely unrelated to the fact that maybe that request should be canceled. I feel like we put them both together just because, you know, once you have cancellation and everything, and you define an interface for it, you could also put values in there so why not... But also, it could have been completely different things, and I think that it's important to think about Context in that way, and the fact that it does two things that are completely unrelated, and that you can use one without even ever understanding or looking at the other.

**Isobel Redelmeier:** I find deadline on contexts to be kind of an interesting bridge, since on the one hand, it has a lot of functionality that is similar to more general-purpose cancellation, and on the other hand it is kind of this special value where you can check the active deadline on a context, last I checked...

**Francesc Campoy:** Yeah, true. It's kind of like metadata that you -- it's data around the cancellation, so technically you're also passing values, but you use that value for cancellation. Yeah, it's kind of in-between, that's true.

**Isobel Redelmeier:** And for anyone listening who isn't familiar with how it works under the hood, Go will respect the deadline. So if you have something that goes over the deadline, it will get canceled automatically. You don't need to manage that yourself... Well, assuming whatever code you're using handles it. For example, SQL will do it for you.

**Mat Ryer:** Yeah, you're right. It's interesting that this is something that's quite unusual in Go, because it is serving multiple purposes, isn't it? And you probably could actually, just by having values, have a channel in there which you could close, and stuff... But having it as part of this sort of official API does solve quite a nice, broad range of problems for people. And I always think, like, if you're not sure what to do with the context, if you're working on some codebase, you really just sort of pass it around; if there's anything you're gonna call that takes a context, give it the one that you've got if you don't care anything else, if you don't wanna manage the lifecycle in any way.

\[12:13\] Sometimes it is useful to -- say you're gonna make a third-party API call; you might decide "I'm only gonna wait one second, and then if not, I'm gonna fall back and use some cached version, or something like that..." And then you can create a context from another context. So does that create a kind of tree structure then?

**Francesc Campoy:** Yeah, totally. That's the idea. For instance, when I tell you to do something, and you go and ask three other people to do something else, because you need those things so you can do the thing I asked you to do, once I say "Oh, I don't care about it anymore", you should also let others know that it is not necessary to continue. And cancellation -- creating those contexts provides that.

The interesting thing is that implementation-wise, that's also how it works. What you're doing is that when you deal with deadline, or with timeout, or whatever, what you're doing is literally creating a new context object that refers to its parent context. So you're literally creating a tree, yeah.

**Isobel Redelmeier:** That goes for any value you add to the context also.

**Mat Ryer:** So when you access values then - and this kind of points out one of the dangers of Context... When you access a value from that, you basically pass in a key, which is of type interface, so that means it can be anything; anything can be a key... And you get back an interface, because of course, it is kind of generic in some way, and this is what generics in Go kind of looks like, for now... And you get a second boolean, whether the value was there or not. So what's the danger there? What do we lose by having that way of accessing and storing information?

**Isobel Redelmeier:** You need to handle the type checks and existence yourself, and you also need to make sure that you don't have key collisions. So there's an idiom, basically, around having dedicated structs for each of the keys that you care about, so that you don't, for example, use a string called "key" and then have collisions with everyone else, for example.

**Francesc Campoy:** Yeah, that's actually a very good point. It's something that not that many people actually use, but that's something that's like -- so if you're creating a package and you're gonna be storing data that you know that you're gonna be retrieving later, instead of choosing a string, or an integer, no matter how complicated the string could be... You could find a super-fancy string that you know no one else will repeat, or I guess you could also copyright it if you want to... But the important thing is instead you could just use a -- even an empty struct, and an empty struct with a type that is not exported. Because when you're comparing two different interfaces, the first thing you do before you compare anything else that's compared with it, the type is exactly the same. If it's not the same, then it's different. It's different values. So then you can just have -- normally, what I do is *type key struct {}* - key in lower case, that way you make sure you have avoided any conflicts.

**Jaana Dogan:** And there's an example of this in the GoDoc, by the way, if you take a look at *func WithValue(parent Context, key, val interface{}) Context* it's kind of harder to explain this concept on a podcast, but there's an example, and that's almost how you use/create canonical key types, so there's no collision. You create your own key type and use that.

**Mat Ryer:** And would you recommend exporting those keys, so that people can access the values? Or is there a better way?

**Francesc Campoy:** No, never.

**Mat Ryer:** Why not?

**Francesc Campoy:** \[15:52\] Because when you export it, people will mess with it. The whole idea is -- like, Context can contain so much stuff that if you allow people to start using it, then you're gonna start getting really weird designs. You could do something that -- it could say "This random package is gonna start depending on another package having introduced a value", and things like this, and now you have these weird dependencies across packages that are not code dependencies. It's not in the code. There's no imports or anything, it just happens to expect things. It would end up being like dependency hell, but in a slightly different way, all inside of the context.

So I would say that instead of doing that -- for login, for instance, I've recently created this little Login package, and what it does is actually... So for an HTTP request, it will get the context from the request, and do something like logger.width... I don't even know, from context or something like that... And it will put in the context the key that is private and no one else can find, with the value of my logger. And then when you want to retrieve it somewhere else, you do it from Context and you pass that context, and that will give you a context with the right type. So that way you avoid collision, and also you avoid having to do that conversion, the type conversion from empty interface to whatever type you're actually using.

**Isobel Redelmeier:** Totally. And then the from functions, generally... It's nice to either return a boolean or return some sort of empty/nil type that still behaves the same way, so at least users aren't going to have nil errors from your value.

**Francesc Campoy:** Yeah. So for the example of the logger - when you do from Context, if the context that you pass didn't have any logger in it, it just returns a default logger that logs into standard output.

**Mat Ryer:** Right. And so in this world, Francesc, that you made earlier, where I'm somehow a middle manager in an organization where you're the boss, and I've got contexts that have been created from mine, if one of those that asked for a value and they don't know what it is, they didn't recognize the key because it's private to something else, what happens then? How does the context work?

**Francesc Campoy:** Oh, so if you try to get a value from a context?

**Mat Ryer:** Yeah, if \[unintelligible 00:18:21.12\] not in the child context.

**Francesc Campoy:** Oh, yeah, so you would go up the tree. This goes basically for every single feature of Context, like deadlines, and cancellation, and values. What you're gonna do is if it has not been changed by your context, if you have not redefined it -- because you could redefine it; you could hide the previous value for a key. But if you have not done that, what you're gonna do is you're gonna check on the one you have, and then if that doesn't contain the value, then you're gonna basically call "get value" (the value function) on its parent, and so on, until you get to the empty context, which is the one you get from background, or the to-do context, and which do not have parents. Then at that point you stop and you say "Nope, could not find it."

**Isobel Redelmeier:** Just that that happens seamlessly for you. You don't need to think actively about the tree.

**Francesc Campoy:** Yeah, so that's why some people will think that -- it feels like you're using a map when you get a value, but you're not. You're actually using a linked list.

**Mat Ryer:** That is really cool. When you think about cancellation as well in this sort of tree -- because you could imagine kicking off a few subtasks to go and do some work... And you might cancel just one of those subtasks, or it might have its own deadline. If it then has created others, they will also get canceled. So that cancellation - that's how it sort of propagates down, isn't it?

**Isobel Redelmeier:** Exactly. And a similar thing with deadlines, where if you have, let's say, a job that has a bunch of serial tasks, so you want the whole thing to take one minute, but you want each task to take no longer than five seconds, then you can say "Okay, each of these gets its own deadline that is the sooner of five seconds from now, or the end of that initial one-minute deadline."

**Mat Ryer:** \[20:17\] That's really cool. And you do that by using those functions on the Context package, don't you? And you pass in the parent one every time.

**Isobel Redelmeier:** Mm-hm.

**Mat Ryer:** That's very cool, yeah.

**Francesc Campoy:** The cool thing about it -- so I actually gave a talk a long time ago... I don't know if you remember; you were there, Mat...

**Mat Ryer:** I do remember.

**Francesc Campoy:** In Italy, GoLab... And I decided to do a keynote with live coding, which is a bad idea; now I know. \[laughter\] So I decided to give a talk on reimplementing the Context package, just because there's one thing that is really cool, which is how when you cancel a context, how all the children contexts get also canceled automatically. And there's this very cute way of managing goroutines in channels. The way it works is very satisfying as a gopher. When you see it, you're like "Oh yeah, this is definitely idiomatic Go." It's also not something that I can explain in a podcast, so go read the code, I guess... \[laughter\]

**Mat Ryer:** Well, we'll put a link to that talk in the show notes, because yeah, you basically implemented the Context package just as a talk. It was very impressive.

**Francesc Campoy:** No, no. It was bad. \[laughter\] It was a little bit of a failure, but I did then -- on justforfunc I made a video on it, that I actually had the time to edit down, to remove all the things where I failed, so it looks much better. I'll have a link to that one instead.

**Mat Ryer:** Okay, fine. We'll \[unintelligible 00:21:47.04\]

**Isobel Redelmeier:** The original package's code also is quite readable, and well-documented.

**Mat Ryer:** Yeah, and it's in the standard library, isn't it? Is that from Go 1.15...?

**Jaana Dogan:** Five-something...

**Francesc Campoy:** 1.6? 5 or 6, or something like that.

**Jaana Dogan:** 5 or 6, yeah.

**Mat Ryer:** What was it?

**Jaana Dogan:** I think 6. The only reason that I can tell it was 6 is because we had App Engine runtime supporting 1.6 for years, even after 1.6 just went away, because of this Context package related stuff, related to gRPC, which is like another dependency hell type of situation... But I think it was 1.6.

**Isobel Redelmeier:** Before that it was in xContext for a while.

**Francesc Campoy:** Yeah. And before that it was internally at Google. For many years it was actually a part of the networking package, or something. I think it was like the internal networking package... And they changed the implementation completely before open sourcing it, but they left the API exactly the same. And I feel like that is a clear proof of the power of interfaces, of the fact that we went from having one thing that that's everything, to having a bunch of different contexts that create this cool tree. Before, it was not a tree. But from the point of view of the user, you don't care, so they were able to rewrite the whole thing and make it much smaller and efficient without ever changing any interface.

**Mat Ryer:** It's a good testament to the interface design itself as well, isn't it?

**Francesc Campoy:** Yeah, definitely.

**Mat Ryer:** So if you're writing code that's gonna take a long time to do something -- let's say you're walking a file system, so you're using filepath.Walk, how would you be sensitive to that context either passing a deadline or being cancelled at some point?

**Francesc Campoy:** The first thing is you should get the context. So if you're getting it from a function call and you have the first parameter, it should always be the first parameter for no reason, really, other than that's how we do it. But yeah, you should receive it and do something with it. If you are not receiving it, it doesn't mean that there's no context. It might be that you are missing it out, and that's something that lots of people miss - the fact that when you have an HTTP handler, there's a context in there. You don't see it directly, because it's actually hidden behind the HTTP request.

\[24:17\] So if you do request.context, then you get the context. And that was actually done this way because if we had added the context at the beginning of the handler as an extra parameter, then we would have broken every single interface of the HTTP package, which would have been sad.

So that's how you do it... I would say the first thing is make sure you use it, and that you get that context, and then the next is check whether it's canceled or not. And the good thing is that basically the way you do it is just getting a -- it's just a channel. So you do a select statement, as you were doing it from a channel; it's like, I might either receive that context cancellation, or something else might happen. So you need to change a little bit your code, and if you've never done that it's a little bit confusing, but the idea is that you should have the path that that's the thing that you actually want to do in the path that handles the cancellation.

If you just literally do that on every single HTTP (what is the word?) handler - if in every HTTP handler you just do that, of either -- like, "I'm gonna call this function, but also if this happens, just cancel it", if the user just sends a request and cancels the request, because the TCP connection goes down, that context will be canceled. So even if the user that is hitting your REST API doesn't know anything about contexts, you're already getting a lot of benefit from it.

**Isobel Redelmeier:** You can also stick that check into a wrapper handler, like basically middleware, so that you don't need to remember to add it to every endpoint. I know that this is audio-only, but basically, raise your hand if you've ever had something that you're adding manually to each endpoint and you've forgotten to add it to one... I certainly have.

**Francesc Campoy:** Yeah, copy-pasting is the best.

**Jaana Dogan:** You mentioned something really significant affecting people, which is the fact that context package was added to the standard library at a later time, 1.6... And now in terms of APIs--

**Francesc Campoy:** Sorry to interrupt, but actually I just looked at it, and we were wrong; it was Go 1.7.

**Jaana Dogan:** Okay, good.

**Isobel Redelmeier:** Off by one.

**Jaana Dogan:** 1.7, okay.

**Francesc Campoy:** Which was the drama, because Go 1.6 did not have Context, and that's the one we were supporting and appending, and everybody was mad at that. I remember that, yeah.

**Jaana Dogan:** We were right about there was some drama related to 1.6, but it was because 1.6 didn't have the Context, not because it had the Context.

**Francesc Campoy:** Yes.

**Mat Ryer:** Off by one error, again. \[laughter\]

**Jaana Dogan:** Yes.

**Francesc Campoy:** Close enough...

**Jaana Dogan:** We're programmers... \[laughter\] Yeah, it created this sort of like different APIs all around. The SQL package, for example, became very complicated after Context, because they had to introduce the same sets of APIs with the Context... So it's just kind of like hard to figure out; people are like "Why are all these APIs replicated? Which one is the best one to use?" and so on.

It also seems to be kind of giving a lot of trouble for some people, just because they don't have this context - context as in they don't have the history, how Context came around. Context is the most overloaded term probably in computer science also... So I'm glad that we're having a conversation about this topic.

But yeah, what I wanted to say is it is a challenge for people, because they don't know the history, and it was more of like a later thought. So I was saying if you're starting a new language, think about how you're going to be handling context propagation at the very earlier day, because it has a real impact on the library ecosystem.

**Isobel Redelmeier:** \[28:05\] Very much so. And I think someone else mentioned earlier that, for example, Java has ThreadLocal variables. The problem that you run into with any language that has ThreadLocal variables, let alone only global variables, is that at some point likely someone is going to want something that is finer-grained than threads. Goroutines are one example of this; it's probably familiar to most of the audience here. But then other languages like let's say Python, for example, have things like futures, which are, again, different from threads. So Python handled this by adding context local variables after the fact. But then if you're writing a library, you still have to handle the case of something maybe having something not yet supporting context local variables.

**Jaana Dogan:** Yeah. Actually, I have a follow-up question on that. So we have explicit context propagation with the context objects in many languages; actually, context propagation is implicit. How does that, in your experience, affect people's awareness around there is TLS, or context propagation, there is maybe signals that you can kind of like use to cancel, or you can propagate some values...

I think in terms of awareness or in terms of usability, explicitness is also a positive contribution. Do you agree?

**Isobel Redelmeier:** I would say that it's one of those things where it's both good and bad. It's on the one hand nice that the implicit is easier to use, because you can access it anywhere, you don't need to worry about explicitly propagating, and "Oh, what if I'm using a library that doesn't offer propagation yet? What if I have a legacy codebase that doesn't have context propagation yet? Do I need to play a bunch of \[unintelligible 00:29:54.26\] in order to add it everywhere?" So on the one hand, it's nice to have it implicit, so you can just easily add it from any starting point. On the other hand, making it easier means that it's also easier to abuse. So you can overuse it more easily.

I've seen this a lot with languages that have request local variables where people end up using this one request object - in Rails, for example - to propagate everything, their entire state. And then you end up with these tiny little methods, somewhere very deep in your codebase, that really shouldn't know about this, what is like almost global state, but it's coupled to this massive object that just kind of convenient has. So it's nice until suddenly it's not... And when it isn't, it gets bad.

**Jaana Dogan:** Yeah, I've seen examples of like people can't break the APIs, so they actually have to put things into -- they end up putting things in context, and it becomes this... I think it's called "the god object". Basically, your API is represented on the context propagation, which is an anti-pattern, but it happens way too often.

**Isobel Redelmeier:** Yeah.

**Mat Ryer:** And there's no compiler safety, is there, in this world? The compiler is not gonna help you out at all with these, because you only find out at runtime if the values are there or not.

**Isobel Redelmeier:** That is true in most languages. I think some will give you some more safety...

**Francesc Campoy:** Yeah, but you could somehow fake that in Go. You could have a request object, and then add more and more fields as you go. Then each handler kind of creates a request object, and then calls something... And all of those are methods. So you always keep that context. You can always access it. But if you do that, you're gonna write code that is so hard to test, because you're gonna have this object thing that goes on over and over. That's why I was like, if you're writing code that uses context, most of the time you actually do not have access to anything in that context, unless you know what you want.

\[32:13\] So you cannot be broken by things that you don't have access to, so it makes it a little bit easier by making me more restrictive. It actually makes it so it's harder to misuse. And I feel like that's something that Go tries to do all of the time - to make things easy to use, but even more important, hard to misuse, and this is an example of that.

**Isobel Redelmeier:** "God object" is a pretty searchable term these days, I believe... If you want more articles on people talking about the woes they can cause.

**Francesc Campoy:** What I wonder about -- and actually, I don't know about this, but Isobel, you may know... For other languages, when context propagation is implicit, if you have a for loop, each iteration needs to do it in a different context. Can you even do that, or do you need to somehow go into actual threads, and stuff like that?

**Isobel Redelmeier:** That's a good question, and it varies by language. If you have something that has -- let's say, worst-case scenario, only has global variables (the base case, basically), then you would need to add locks and stuff in order to ensure that if you're trying to parallelize that loop, let's say, that they don't clubber one another's state. If you have something like context local variables in Python, then you have it per future, I believe. I don't write much Python; I'm starting to write a lot more Python right now, and it is making me miss Go... \[laughter\] Where was I going with that...?

So if your parallelization is using something that maps nicely to your context local variable type, like futures that are aware of context local variables, then you've got it for free. However, if you have something that -- if you're using, let's say, futures, and you only have ThreadLocal variables, then again, there's this mismap, so you need to add a lock or something in order to ensure, again, that you're not clobbering state across one another. It's kind of that same classic global variable problem, and sometimes it's better mitigated, sometimes it's really not.

**Break:** \[34:27\]

**Mat Ryer:** \[35:56\] So we've talked about Context in an HTTP context... So we can access the context method on the HTTP request, and we can also use with context on that to get a new request, if we want to set the context in a request. Are there other places -- one thing I'm thinking is I actually use Context in my normal tools in Go, in command line tools, and I have the signal, the Ctrl+C signal - interrupt - to actually cancel the context... And that turns out to be quite a nice pattern. Does that break the rules a little bit? Some people think that you should only be using it in a kind of request-response world, but then maybe CLIs are kind of request-response.

**Isobel Redelmeier:** I would consider them request-response. Slight side note - Dave Cheney has a couple parallel articles; one is called "Context is for cancellation", and the other is called "Context isn't for cancellation."

**Mat Ryer:** Thanks, Dave...

**Isobel Redelmeier:** It's been a while since I've looked at the articles, but as I recall, they kind of dip into this a bit.

**Mat Ryer:** Yeah. That's the series from Doctor Cheney and Mr. Dave there... \[laughter\] Giving us two sides of the same argument. Well, I saw a proposal, and I think it's making good progress, for officially supporting that signal cancellation I was talking about. I think they were talking about adding something either to the Signal package, I think, so that you could trap and get a context that will cancel when it sees those signals... And that can be very useful.

One thing I just wanna say, for anyone that hasn't used this to implement the cancellation - there's a really cool thing; the done method returns a channel, and that channel gets closed when the context should end. So if you're doing a select block, or something, one of the cases can just be a read essentially on that done channel, and that's the little bit of code that runs when there's a cancellation; and then in that, usually you can either return the error, or exit, or something. Maybe you need to do some tidy-up, and hopefully you've deferred that or something, so it happens kind of automatically.

Are there any other little programming tips and tricks like that that we can use, that you know of?

**Francesc Campoy:** There is one that is pretty cool, which is if you're going to have -- there's a very straightforward way of cutting down the tail latency in your requests. So let's say that you have a request that you send into a server, and it takes five milliseconds 99% of the time, but then there's 1% of the time that it takes one minute, which is not good. So what you could do is make that call multiple times, and you're gonna do it with cancellation. So you're gonna do context with cancel of your original context. And then what you're gonna do is you're gonna use the same context for all of those calls, and have defer cancel at the top of your function.

Then as soon as any of those values returns and you return from that function, the rest will be cancelled. And that's gonna take down your 99th percentile from one minute down to five milliseconds.

Those are small things that you can get a lot of performance, especially when you're using a server that is not something you manage, so you cannot go and complain to them about like "Hey, your 99th percentile latency is awful." You can still fix it by doing this little hack.

**Mat Ryer:** Hm...!

**Isobel Redelmeier:** And for those unfamiliar with tail latency and its implications, what can happen is that you have what's called a long tail, where some small percentage of your requests take all of the time, and often almost all of the times a lot of the resources. So rather than letting them take all of the resources, instead cancel them, it can actually improve your throughput by freeing up those resources for the faster requests.

**Mat Ryer:** \[40:02\] That's brilliant. Why is one of them taking a minute? What's it doing?

**Francesc Campoy:** It's \[unintelligible 00:40:04.06\] sleeps 60 seconds.

**Jaana Dogan:** Databases...

**Isobel Redelmeier:** Yeah, databases... \[laughter\] Databases - one service is down, and something is doing infinite retries, network issues... Always network issues somewhere...

**Francesc Campoy:** There's a really good talk by -- what's his name? The guy that does everything at Google... \[laughter\] There's even degrees of separation from him. Jaana, you need to know who he is.

**Jaana Dogan:** Jeff Dean?

**Francesc Campoy:** Yes, him. Jeff Dean.

**Mat Ryer:** Well, that's impressive...

**Jaana Dogan:** I didn't assume that you can forget his name, so sorry...

**Francesc Campoy:** It's the guy that does everything at Google, basically... \[laughter\] \[unintelligible 00:40:47.12\] by him somehow. He has a really good talk on how to manage long tail latency. It's really good. It's not for Go, but all of those things that he proposes are actually things that you would implement in Go with the Context package.

**Mat Ryer:** Oh, cool.

**Jaana Dogan:** Yeah, yeah.

**Isobel Redelmeier:** Yeah, tail latency is not unique to Go...

**Francesc Campoy:** Oh, absolutely not.

**Isobel Redelmeier:** ...alas. If it were isolated in one spot, that would be nice.

**Jaana Dogan:** That's one of the reasons that context propagation, deadlines and cancellation is a big part of our RPC systems, RPC stack. The Context package, the Go package kind of grew up from there, internally. When we were talking about the internal Context package, it was actually in the context of the RPC framework that we were using. It was back then Stubby, now gRPC. They are both used in similar concepts, and it's very important for gRPC to have a context propagation building block like that.

**Isobel Redelmeier:** On the note of gRPC and more code examples, a lot of the gRPC Go code around context is also pretty readable. For example, there's a Peer package, which is almost only for context handling. It basically has (I think) two functions; one for adding pure to a context, one for retrieving pure from a context, so you can see how it works in the wild.

**Mat Ryer:** Oh, it's a great tip, yeah. There's another thing that was quite interesting. We had a problem where we were using io.copy to copy from some source data to some destination place, it takes the io.Reader/io.Writer pair. We wanted to cancel that, and because you can't pass a context into copy, the way we solved it was we made our own reader, that essentially wrapped the other reader... And this reader was context-aware, so that it would check to see if it calls a Read which happens multiple times as io.copy is reading through that source data... Each time, it would check to see if the context has been cancelled, or if it's gonna return an error. And then if it did, it would return that error from the read method, which then would propagate through and get returned from io.copy.

That was an interesting solution to how we could actually add context support to places that don't yet have it. But those kinds of things are crazy, aren't they...?

**Francesc Campoy:** That's interesting, because I really like the solution. When you mentioned the problem, I was like "Oh yeah, that's how I would have done it, too." But also, doesn't it mean you were storing a context in a struct... How dare you? \[laughter\] That goes against what everybody says you should do.

**Mat Ryer:** No, we didn't, because we used a closure, I think...

**Francesc Campoy:** Oh... Sure, okay. Yeah.

**Jaana Dogan:** I was about to give that as an example... Lots of people are asking, for example, this particular thing - how can you get rid of a goroutine once you're done, or whatever? What is the most canonical API? One way to do this is actually using cancel. If you have this infinite select, for example; you start a goroutine, there's an infinite select, whatever - you can just basically rely on that. I'm not sure if I was following your example, Mat, but was it something like that? Like, you had some task, and just basically using cancellation as a way to signal that cancellation and lifecycle events?

**Mat Ryer:** \[44:21\] Yeah, it was... Because you can call the error method, can't you? The err. You can call that anytime.

**Isobel Redelmeier:** That and done.

**Mat Ryer:** It's nil while it hasn't been cancelled. I don't think we used the done channel in this case. I think it was just checking that error...

**Jaana Dogan:** Oh, okay.

**Mat Ryer:** ...and if that returned nil, then it went and allowed the parent to do the read. And if not, it would return and short-circuit early.

**Francesc Campoy:** That's pretty cool.

**Mat Ryer:** Yeah, it worked. We wrote about it on the blog. I'll put it in the show notes, everyone.

**Francesc Campoy:** Yeah. The io.copy example actually reminds me of what gRPC does for streaming. If you're doing bidirectional streaming, you don't know who's supposed to finish... You actually handle that by canceling the context. So it's kind of similar to io.copy, yeah.

**Mat Ryer:** Oh, yeah. That is cool.

**Isobel Redelmeier:** Loops are a good place to have that repeated checks. If you have something expensive, like maybe you're copying a really large file, you can instead copy pieces at a time, and then do the check after copying those pieces.

**Mat Ryer:** Yeah. Actually, when you walk the file system, from my example from earlier, each time you check -- I often check the incoming error to that walk func that you get... And then if there's an error there, I'll usually -- that'll be the end of it for me. And then after that I'll check the context error there. And if there's an error there, I just return that in kind of a similar way.

Yeah, it's quite simple, and very easy to read. It's just normal Go code, which I quite like. I mean, I get how having it implicit might make for a less cluttered language, but a little bit like the reason we like errors in Go is you are explicit; you can see what's happening, and you sort of are in control of it, which is quite nice.

**Francesc Campoy:** Actually, that's a very good point about errors, because if the cancellation was implicit -- like, if you didn't need to do anything, your code would just be cancelled, then you would need an exception... Which we do not have. There should have to be some extra, weird thing in there, or like a panic, which would be pretty bad; it'd be pretty weird to do.

**Isobel Redelmeier:** The only language I can think of that doesn't have exceptions and has, in some spots at least, something like an implicit context local is Rust, where some of your future engines basically have context local variables... But they don't know about cancellation, so it would be up to your HTTP library, for example, to add that on top.

**Mat Ryer:** Yeah, and the problem is sometimes you actually do want to do some work in the event of a cancellation. If you've got some temporary files, or... There may even be additional things. Maybe you have to update the state of some task somewhere, in some database. There may be actual active code that has to run during that cancellation, and having it explicit lets you just spell that out right there, which I think pays dividends always for maintainability.

**Francesc Campoy:** Yeah. Also, having it explicitly allows you to do something which is kind of an optimization, but if you know that a task takes five seconds, at the beginning, before you start doing it, you could actually look at the deadline. It looks like "Oh, I only have half a second. There's no way I'm gonna finish. Just return error."

**Mat Ryer:** Hm... That's a great idea, actually.

**Francesc Campoy:** You don't need to even do it, yeah.

**Mat Ryer:** Yeah... Huh. That's another one I was thinking.

**Francesc Campoy:** There's that cool thing about -- oh, is it about this topic, or...? Because I have another topic that I think is kind of interesting.

**Mat Ryer:** \[47:57\] Yeah, go for it. I've forgotten... You snooze, you lose.

**Francesc Campoy:** Okay. \[laughs\] So yeah, it's like - why is there context.TODO?

**Mat Ryer:** Hm. Great question. I don't know. \[laughter\]

**Francesc Campoy:** Context.TODO and context.Background do exactly the same thing - they return an empty context. And an empty context doesn't have values, doesn't have timeouts, it never gets cancelled. So it's literally an empty struct, that's what it is. The interesting thing is that when you return a background, what you're saying is that "Oh, this is something that I'm starting from scratch." So you're basically saying "There's no previous context. This is something that I'm creating."

For instance, in the example of the CLI - you're running your CLI, and at the beginning there's no previous context, or anything; maybe at one point we will have actually a context coming from signal. That would be an interesting thing. But otherwise, we don't have anything. So you would call "background".

Context.TODO was added just so as different functions -- like, you're creating a tree of functions that are calling and passing contexts around... So how do you do it if you want to add it to all of them, but little by little? If you start from the top, it's gonna be -- you cannot pass functions until they're accepted. But if you do it the other way around, you'd build a function that starts by saying "Oh, I accept a context now, and you can pass that context to me." Then the caller could say "Oh, okay, so I should have a context, but I do not have it yet." So instead of calling context.Background, which implicitly says "I do not have a context and I never will", .TODO is just "Hey, I do not have it yet, but let's fix it later." So it's literally just so when you grab .TODO, you can find where you need to still do more work... \[laughter\] And I think that's kind of cool; the fact that they've thought about these -- I mean, you could have done the same calling context.Background and then having on top a comment going “TODO pass a real context”. But they did it this way so it's more explicit, and you actually could do code analysis and see "Hey, this is not done yet."

**Isobel Redelmeier:** That's a very real use case. One example that I've encountered multiple times is trying to add distributed tracing to existing codebases that don't use context yet... I kind of hinted at this before, but most open source distributed tracing libraries at the very least use context to propagate what are called Trace and Span IDs, so basically your metadata keeping track of the trace. So if you're adding it to an existing codebase, you don't have those contexts yet, then you don't want to be starting Spans from scratch; you want to be able to connect those Spans to one another at some point, but not necessarily from day zero, if you have a multi-hundred-thousand-line codebase and you have a lot of context to re-add.

**Mat Ryer:** Yeah, that's a really good point. I mean, you can tell that this came out of real engineering, the fact that it has that TODO and the fact that it kind of, as you said earlier, Francesc, it is a kind of very elegant design, it's a very elegant solution, and I think it's worth looking at. There isn't much code, as you say; it's worth taking a look... And some interesting things in there, too. There's a string method often on these contexts... So when you print them out, they tell you meaningful information. That was a surprise when I've found that in the code.

**Francesc Campoy:** I actually didn't know.

**Isobel Redelmeier:** I didn't either...

**Mat Ryer:** Yeah. Okay, I could be wrong... If it's wrong, it'll get edited out, so I don't look like a fool.

**Francesc Campoy:** Oh, did you make that up? \[laughs\]

**Isobel Redelmeier:** I have certainly printed contexts before... You can do it. It hasn't been super-pretty in my experience, but... When in doubt, I have printed many contexts.

**Mat Ryer:** Yeah.

**Jaana Dogan:** If it's just strings, if it's just primitive stuff - yes, the print will tell you something. But in most cases - in my cases, for example, it's either another struct, and it doesn't provide you a nice string, then yes, it's getting harder to use it as a diagnostic tool.

**Mat Ryer:** \[52:12\] Yeah, you probably can't, no. But I've seen it for at least telling you the type of that context, and things... Because often you pass around the .context interface, and sometimes -- well, hopefully not, but...

**Francesc Campoy:** Yeah, I actually tried it, and it's kind of cool, the way it prints it. I just wrote a little program that calls context.Background, and then I add a value... It was like key is one, and value is two, and then I print that. And what it prints is context.Background.withValue, and then the value inside. So it kind of creates this linked list of like what are the things that you obtain, and prints it... They key is type int, so it doesn't tell me what key it is, and the value is "not a stringer". That's what it says... So yeah.

**Jaana Dogan:** Okay... That's not useful. \[laughs\]

**Francesc Campoy:** Not incredibly useful...

**Jaana Dogan:** It could be useful.

**Francesc Campoy:** I'm almost sure that they don't print the value or the key just so people do not parse the result of print in the context and they use that to get the values...

**Mat Ryer:** Because that could be dangerous, couldn't it?

**Jaana Dogan:** Yeah, could be. Nice concern.

**Francesc Campoy:** Yeah, that would open a gap, yeah...

**Isobel Redelmeier:** I think I've been able to successfully use it to either see if a key has been added, like basically "Oh, I still have an empty context.Background when I expect it to have some key on here", or else to see if a key has maybe been clobbered... But I don't remember how I was able to see the details there.

**Francesc Campoy:** Yeah, I guess it tells you the type of the key. So technically, if you're using only that private key, as we were saying before, and there's only one value per type. Then in that case you actually know what value it is.

**Isobel Redelmeier:** Yeah.

**Break:** \[53:55\]

**Mat Ryer:** Well, before we call cancel on the context of this episode, it's time for Unpopular Opinions! So let's hear them... Does anybody have an unpopular opinion this week?

**Isobel Redelmeier:** JSON isn't always as bad as people make it out to be...

**Mat Ryer:** Hm, tell me more. Who is he? Who is this Jason you talk about?

**Isobel Redelmeier:** Yeah, that JSON who gets so much flack...

**Mat Ryer:** Why are you defending him all the time?

**Isobel Redelmeier:** \[55:43\] Well, I've seen a lot of people switch, in my opinion, prematurely to protobufs in particular, sometimes to a thrift, where you just change from one problem to another... And especially for anything that is used externally to your company, so for example open source code, protobufs can get very complicated, especially if you're exposing something that is going to be used across multiple languages. So... Nice to use in Go, not necessarily as nice to use in Ruby, for example, or in PHP.

**Mat Ryer:** Yeah, or indeed a web browser.

**Isobel Redelmeier:** Yes, that's a big one.

**Mat Ryer:** Actually, we did an episode on this very recently. We called it Encoding JSON, and we actually spelled the episode title using JSON, to see if any podcasting technology is vulnerable to JSON injection attacks... \[laughter\] So far, everything's just been fine, which is a shame.

But yeah, I completely agree, actually. I think we tend to get as programmers a bit obsessed with -- it's a very attractive proposition, the binary protocol. It's so tiny, isn't it? Binary is so tiny, where text is this wasteful, big thing... So yeah, I get why people are drawn to that, just from sort of technical, pure engineering drivers.

**Isobel Redelmeier:** There are also people who kind of associate gRPC with HTTP/2 and don't seem to realize that you can use HTTP/2 without gRPC, but not the other way around... So they think "In order to use HTTP/2, I must use gRPC. In order to use gRPC, I must use protobuf", and it changes a ton of things, where you can often get some part of the win more cheaply, just by switching to HTTP/2.

**Mat Ryer:** Great.

**Isobel Redelmeier:** Or using MessagePack, using streaming... Various things like that, without going wholesale.

**Mat Ryer:** Hm. Brilliant one.

**Francesc Campoy:** And you use streaming in JSON without -- or that's when you would say you should move to gRPC?

**Isobel Redelmeier:** You can, you can. It' not always as pleasant, although I've also seen enough issues with gRPC streaming. And to Mat's point, I think that you still can't use gRPC streaming in browsers, for example. There is no gRPC for the browser, but I believe it's unary only. One day maybe I'll write a blog post on how to do basic streaming and when it stops working.

**Mat Ryer:** Yes, please. Yeah, I've done a JSON streaming thing which was just using the line feed, but we also found out in that episode that it's buggy if you just use the JSON encoder on the request body, and just use encode, or decode each time to read those lines... Apparently, there's risks involved, and if you wanna know what they are, you have to go and listen to our JSON episode. Cross-marketing of episodes; that's how good this podcast is getting. \[laughter\] Any other unpopular opinions? I like that one, so I don't know if that's that unpopular... But maybe it is.

**Francesc Campoy:** I don't know if it's popular or unpopular, but I think that generics in Go are a good idea. I would say that's unpopular with many people that I know... But I do think that. I gave this talk a long time ago around functional programming in Go, and basically why not to do it, and one of the biggest reasons -- there were two reasons; the first one is because there's no tail recursion optimization, which means that your program is actually ten times slower just because of it... So that's a small thing that maybe we should fix. But the biggest thing was the fact that if you wanna do any kind of interesting composition of types without generics, you are out of luck. You cannot really do it. You need to do empty interfaces everywhere.

So generics - I am very excited about seeing them. I've been trying them, and had a look, and now that contracts are kind of like gone, or at least they make much sense, they're not as complicated as they used to be, I'm pretty excited about getting to use it. I don't know when it's gonna be released for real, but I'm looking forward to that.

**Mat Ryer:** Yeah, I think the design work is phenomenal. I like the fact that we've been able to see it evolving as well. I think that in itself is quite an interesting study of language design. And again, there's another episode of GoTime, your favorite podcast, where we actually speak to the designers, Ian Lance Taylor and Robert Griesemer on the show.

**Francesc Campoy:** \[01:00:14.19\] Nice.

**Mat Ryer:** Yeah... So put that in your ears. Jaana, do you have an unpopular opinion?

**Jaana Dogan:** I have a controversial one.

**Mat Ryer:** Let's do it. Let me just re-record the theme tune then.

**Jaana Dogan:** \[laughs\]

**Mat Ryer:** What's your controversial opinion?

**Jaana Dogan:** I do think that -- like, I really like Go as a language; the simplicity, and verbosity-wise, it's just one of the best options that you have... But all the proto generated artifacts is just making everything kind of like messed up. Each time I have to touch some proto generated protos, it just doesn't look like Go anymore. It's so cryptic... There's all these types on top of the standard library I have to learn about... Proto has its own struct... All of the mess, and even the timestamp type, for example, is a completely different representation. So you basically have to adopt into that verbose alternative universe, and it's just my main pain point.

I've been trying to collect all these gotchas and tips and everything about protos for a long time, and I can tell you, there's at least 20 pages of me putting some tips here and there... And I still need to go back to that document and reference it to be able to take a look, like "Hey, this is what I'm supposed to do if I see a proto generated type like this." And that's just like a big, big struggle to me.

They've been trying to improve the generated artifacts, but it's just too late, I think, to make anything significant. And to be honest, working for a company that is so proto-oriented, the prototypes are the types that I'm engaging with on a daily basis, and it just takes away all the fun I get from Go... Because at the end of the day, I'm engaging with the protos more than anything else.

**Mat Ryer:** Yeah. So that's interesting, because I've found the same, and actually I've deliberately avoided gRPC and protocol buffers for that reason. We actually made -- I've told you about this before for sure; let me just quickly tell you about this other alternative project that we've got, which is just a codegen thing, but it uses Go interfaces to describe the RPC. So you have an interface for each service, and then the methods in there, and then you use Go types. And then it uses the Packages package and the AST stuff to understand those Go types... And then using templates to then generate server stubs, client stubs, and TypeScript client, things like this. And it's JSON over HTTP, because as was mentioned earlier by Isobel, it's good enough for most cases, and actually preferable in some cases, because we can open up the web client and have a look at the requests and the response going on in there, and look at the JSON, and it's every pretty-printed by default, and things...

**Jaana Dogan:** Yeah.

**Mat Ryer:** So yeah, there are trade-offs. Sometimes we focus too much on one thing over others, and I think maintainability and familiarity and just having a sort of JSON/HTTP thing, given that so many people already understand that so well, does kind of have that feel. We'll put a link to that project - it's called Oto - in the show notes.

**Isobel Redelmeier:** I did a talk last year on gRPC that was basically like gRPC war stories... \[laughter\]

**Mat Ryer:** \[01:04:02.14\] Nice.

**Isobel Redelmeier:** I don't think it was recorded though...

**Mat Ryer:** Oh, it wasn't?

**Isobel Redelmeier:** Or at least I haven't found the recording.

**Mat Ryer:** Oh, that's a shame.

**Isobel Redelmeier:** gRPC Conf.

**Mat Ryer:** Yeah, I'd like to see that.

**Isobel Redelmeier:** There was a camera... So Google may have a recording somewhere, but I don't have access to it.

**Mat Ryer:** Hm. This is intriguing. Okay.

**Jaana Dogan:** I talked with the gRPC team about this, and one of the leads were actually interested in reconsidering designing the proto generator... But then, that person left Google. I have to do some grassroots movement again to make this deal.

But it's just so bizarre... Maybe it's because Go is such a significantly simple, small language. Anything that just doesn't fit into that category just stands out too much, and you feel frustrated maybe... Because you're coming to this language because you want something very small and simple, and then the reality just doesn't match. On the other hand, there's no other way to do multi-language... Like, if you wanna use a proto style transport layer plus, you need multiple languages.

There are a few other options, but they all suffer from the same problem, because this is an inherently hard problem. You're talking about having compatibility between different languages. Yeah, so of course you introduce some of these additional types on top of the standard types... But you know, in the end I think as a user it's just making me sometimes unhappy, unfortunately.

**Mat Ryer:** Yeah. And there's another thing that I wish it didn't do... When it generates the interfaces, somehow they made it so you don't get a compiler if you don't implement that interface. I think they embed a type that has all the methods automatically, so it's never a compile error. And one of the nice things I would have thought is when the definitions changed and you then regenerate your code, you then will get compiler help to make sure that you've implemented that interface. It probably comes down to, again, another pragmatic reason, like context.TODO.

In Oto, for example, it's a compile error if you haven't implemented the interface, and that really helps us make sure that it's always correct.

**Francesc Campoy:** Yeah. I think that the reasoning behind that might be something around like "Oh, I can add new methods on the definitions, and those servers that are not satisfying that method yet, rather than not compiling, they will compile and they'll tell you "Oh, this is not implemented." So from that reasoning, it kind of makes sense. But also, I got bitten by it recently, and I did not enjoy it. I was like "Why are you compiling? Do not compile. You're missing a method. Do not satisfy the interface."

**Jaana Dogan:** \[laughs\]

**Mat Ryer:** Does it return an error, or is it just a no op? Because you need a response.

**Francesc Campoy:** There's an implementation that just returns a "Not implemented."

**Mat Ryer:** Hm.

**Francesc Campoy:** I mean, at least it makes sense. Once you get the error, it's like -- but if you got the error because you have a proxy somewhere that you forgot to update, and now instead of getting the whole thing going all the way to your server, now the proxy is just saying "Not implemented", and you do not know, because it was not compiled. Like, it compiles -- so in Go, if it compiles, it works... So you break that. That's bad.

**Jaana Dogan:** \[laughs\]

**Isobel Redelmeier:** And if you don't have a panic -- I saw code like this recently, where it had the "Not implemented" all over the place, and it didn't have a panic handler. So if you had your routing misconfigured or something, suddenly you were basically accidentally self-DDOSing.

**Francesc Campoy:** Interesting.

**Mat Ryer:** Yeah. Well, I'm afraid that's all the time we have for today. What a great conversation; thank you so much. I think I've learned a lot about context there. Don't forget to check the show notes, because there's lots of bits and pieces in there that we've talked about today. Thank you very much to Francesc Campoy. Francesc, thank you. Thanks for coming.

**Francesc Campoy:** Thank you for having me.

**Mat Ryer:** Yeah, mate. Anytime. Come back again, please, another time. Will you? Do you want to commit to that now, while we're recording?

**Francesc Campoy:** Eventually, yeah... Sure...

**Mat Ryer:** Eventually, right. \[laughter\]

**Francesc Campoy:** Send me a DM, I might answer eventually... \[laughter\]

**Mat Ryer:** We will. And Isobel, thank you so much for coming. You'll have to come back as well. And of course, Jaana, always a pleasure...

**Jaana Dogan:** Thanks, yeah. Thanks a lot.

**Mat Ryer:** Okay, this is the longest long-tail goodbye... It's the longest one we've ever done. Thanks for listening, and we'll see you next time.
