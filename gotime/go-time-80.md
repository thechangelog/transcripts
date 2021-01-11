**Mat Ryer:** Okay, welcome to Go Time. I'm Mat Ryer. Today we're gonna be talking about Go 2 and the future of Go, so get into your little time machine, and join us with a veritable cast of characters. We've got thinkers and tinkerers from around the Go community. I'm joined by Mark Bates, Jaana B. Dogan, and Johnny Boursiquot.

Before we get started, I just wanna pay a quick tribute to the original Broadway musical cast of Go Time - Brian, Carlisia and Erik. They're setting such a great standard, and we're gonna fill those shoes, and dear listener, we're gonna need your help... So get involved - Gopher Slack, we're in the GoTime.fm channel, or on Twitter @GoTimeFM. We'd love to hear from you.

I'll kick things off by asking Mark Bates a question. Mark...

**Mark Bates:** Yes.

**Mat Ryer:** If you have the power...

**Mark Bates:** Which I don't...

**Mat Ryer:** ...which you definitely don't - to change anything in the Go language or in Go at all, what would you change?

**Mark Bates:** That's an excellent question. There's a lot of answers I could give you. There's some stuff I wanna take out - things like panic, and stuff... But I was thinking about this today, totally unprompted, just assuming that I was gonna be asked the very first question, and that being it... But the answer I came up with was I'd love to see them extend the ability to remove unnecessary typing of types. For example, when you're doing a slice of a type - you don't have to do the type each time, for each kind of entry in the slice... And I'd like to be able to see that other places; like a slice of strings, for example. I'd love to just be able to do curlies and then the strings, and have Go know that that is a slice of strings, because what else would it be?

**Mat Ryer:** Right. So cases where there's only one type it could possibly be, then maybe you could omit the type.

**Mark Bates:** Yeah. And they've done that in a few places already, where you can omit the type, and it'd be really nice to see that further... You know, where we don't have to do that necessarily all the time. Because there's a lot of typing; it seems a little pointless and unnecessary. Don't even get me started on wrapping strings and the slice of byte thing; that really annoys me, too. \[laughter\]

**Mat Ryer:** Okay. That's interesting.

**Mark Bates:** There you go. I wanna type less.

**Mat Ryer:** Yes. So you're lazy. Johnny - you're not lazy, are you?

**Johnny Boursiquot:** I am many things; lazy has not been used to describe me yet.

**Mat Ryer:** \[00:04:01.19\] So how about you? Is there is anything that you think you could get rid of in the language, or something that you would like to see added?

**Johnny Boursiquot:** Honestly, I've learned to love Go for what it is. I don't feel sort of like one way or the other. I mean, sure, there are some things that I use currently, in the current version of Go, that I don't use as much; I don't think I've ever used goto, for example; fallthrough doesn't come through a lot... Sorry about that. And then -- I mean, these things are useful to some, and they find excellent uses for them, but for me, I've learned to appreciate the language for what it is, and for what it isn't, at the same time.

So along the lines of Go 2 and what's coming up, and what I could do without, honestly, it's the whole generics thing, where everybody loses their cool when it comes to that - I've gotten by without it. Yeah, you have to type a little bit more and you have to find some creative ways around that, but... I don't know, I like the stability of the language, and not having to introduce features for the sake of introducing features. Again, there are folks that are gonna feel differently, and the folks that do see the value in that, and I do as well, but I like the stability of the language, honestly.

**Mat Ryer:** Yeah, absolutely. Actually, I tweeted an unpopular opinion recently, which said that I actually don't mind the ‘if err != nil’ everywhere. I've kind of become used to that, and now I sort of expect to see it, and I can kind of spot where it's missing as well now, because I've been doing it for so long... But I don't know. What were you gonna say, Mark?

**Mark Bates:** No, I just agree with Johnny, I don't need generics either. I think they just complicate the language. I think we've all done really well in languages that didn't have generics, I think we've all done really well in Go without generics... It's a little copy/paste, but the language is cleaner, easier to understand, parse, work with etc. Firstly, I'm not a fan of generics. Is that an unpopular opinion? I seem to stop the show; I apologize... \[laughter\]

**Mat Ryer:** No, I agree with you. I've used codegen in those occasional times when I needed something like that... But I've always been able to get by without it so far.

Jaana, is there anything that you would see taken out?

**Jaana Dogan:** I definitely have some opinions on this... I think some of them are more controversial. Oh, sorry...

**Mat Ryer:** Oh, let's have those first.

**Jaana Dogan:** I have really minor requests, such as I wanna see some of the shadowing issues are made illegal. You know that there's some convenience variable name err := sometimes allows you to error shadow errors. I wanna see some of them actually being more consistent, rather than us allowing them to be shadowed.

I also don't like naked returns. I wish they were entirely gone. I really like to call out the variable names when I'm returning things. People think that it's a little bit verbose, but we have some tools that actually ought to fill some of those places, so I think it's not really worth to have this second-guess, or make it so indirectional. I wish that we were more consistent with naked returns.

The select statement is one of the other things that I wish we could have spent some more time on... Because it's doing a lot of random things, and I wish that there was some sort of maybe a priority, or something. A very typical case is, you know, if my channel is closed, for example, I don't necessarily care much about what else is going on in that select. There are some very common patterns, and it's just so hard to figure out the right pattern, and use select in an easy way, because the select statement is really complicated.

\[00:07:57.24\] If we have time, I have some opinions on what packages I think need to be gone from 2.0. A typical example of this is the `expvar` package. It's like a straight copy of the \[unintelligible 00:08:08.22\] at Google, and I don't think that it's a really scalable approach. It uses global state, the number of variables is growing really quickly, the output format is human-readable but not necessarily a good representation; it doesn't really provide a good way to represent structured values... And it's really expensive to parse and format, so I don't think it's worth it at all. And there's some packages that we wanna get rid of, like the `container/` packages, the rpc-related package, which has been deprecated...

`net/http` also has a lot of organically-grown features, and the ResponseWriter has this sort of optional interfaces. If you think about the initial http package, even HTTP/2 was not around when it first came around... And over time it started to provide some features through optional implementing some of the interfaces, that is added to the package at a later time... And I really want 2.0 to kind of like clean that up, and make it easier for library makers, as well as the user, as they're engaging with the ResponseWriter.

**Mat Ryer:** Wow... Yeah.

**Mark Bates:** Can we just ditto everything JBD just said?

**Johnny Boursiquot:** Yeah, seriously... \[laughter\]

**Mark Bates:** I gave one answer, she gave them all.

**Johnny Boursiquot:** I do have a question around the `expvar` package though - would you replace that with anything, or you'd basically make that an external concern?

**Jaana Dogan:** I would say it's an external concern. I would rather libraries to expose the values through APIs, and you decide on the export format, and you read it from the library and then convert it to whatever format... I don't like Go is opinionated on this, to be honest.

**Johnny Boursiquot:** Mat, what about you? No one's asked you this same question.

**Mat Ryer:** Well, I actually would like to simplify -- there are some things that there are multiple ways to do it in the language. For example, you can create an instance of a struct, you can do that with a new keyword, and also just kind of do it literally, and then it starts and you set the fields, and things. So anytime that there's two ways to do something, I always would like to trim that fat a little bit. So I would probably drop the new keyword.

**Mark Bates:** Yeah, I would agree.

**Johnny Boursiquot:** I'm hearing a lot of removals, but not a lot of additions... So I think generally speaking we'd like to see fewer things in Go, which is kind of interesting from a community outlook standpoint, right? Usually you have folks asking for more things, more ways to do things. I think by consensus here, most of us are asking for fewer things.

**Jaana Dogan:** I think we might be a little bit biased. The language has been very small for a long time, and we have this resistance. I think people come into the language from other languages; in the first few years they're looking for all these features, and then they learn not to look for them. I've been using Go for a long time now; maybe I'm a little bit biased.

**Mat Ryer:** Yeah, me too.

**Mark Bates:** I can think of a few things that I'd like to add, if we wanna talk about that... Because we've all talked about things we want removed. I'd be curious to hear what everybody would add. For example, I would love a true sync.Map implementation - typed sync.Map implementation - in the standard library. So instead of just doing like, say, map-whatever, just do smap, or something like that. Because right now the one that's all interface-based is not that helpful, because you're casting everywhere.

**Jaana Dogan:** \[00:11:58.20\] I totally agree. I think Go is an overwhelmingly concurrency-friendly language, but it doesn't give you a lot of...

**Mark Bates:** Safe types.

**Jaana Dogan:** ...concurrent data structures and safe types, yes.

**Mark Bates:** Yeah. And map is the worst in terms of concurrency. It's the number one bug. When we teach concurrency to people, when I'm teaching, I always drill into their heads that maps are not thread-safe... Because they're so 100% not. They're the worst. And it'd be great if we had nice, concurrent implementations of slices, of arrays, and the common data types. Because having to sit there and put mutexes around everything is really annoying.

**Jaana Dogan:** Yeah, I totally agree. The tricky part is the runtime is not giving you a lot of -- it doesn't give you the identity of the goroutine; you can't really build these structures yourself in an efficient, platformed way... So you really need to rely on whatever is coming from the standard library, and then the standard library is not doing a good job in terms of having any support for the primitive data structures.

**Mark Bates:** Yeah. That, and I would love to see a map not need to be initialized before being used.

**Mat Ryer:** Yeah, I feel like that one should be quite low-hanging fruit, isn't it?

**Mark Bates:** Yeah.

**Mat Ryer:** Why is that not--

**Mark Bates:** Well, because it's a pointer under the covers. JBD probably knows this, too - in the original implementation you actually had to do the pointer on it, and then they just kind of cleaned that up for everybody else... But it's a pointer under the covers, it's nil. That's why.

**Mat Ryer:** What other things would we like to add? Let's just get it sort it now, can we? Get your laptops.

**Mark Bates:** Get our laptops... \[laughs\] Johnny, what about you? Anything you'd like to see added?

**Johnny Boursiquot:** Actually, no. \[laughter\] I mean, I hate to be a contrarian, but I like it just the way it is. From what I've sensed, from what I've seen, I think there's always pressure to -- being a programming language, or being a product or a service or whatever, there's always "pressure from the market" to be adding new things, to be innovating, to be always trying to make something better, "the next version will be better, faster, stronger", all these things... I really don't see that need in Go. And again, I'm not against innovation, and I'm sure there are ways that the language can evolve, can be made better to do some things that it does now, to make them even better and more approachable - absolutely.

We've identified a number of things that could be done better with the existing language; so I'm not saying that there are not better ways of doing things or introducing new things that make more complicated things easier to do. My sense is that the need to introduce new features into the language because of market drivers - for me, I tend to have a negative view on that. That's just where I stand on that.

**Mat Ryer:** Yeah, I think you're right.

**Mark Bates:** But there's nothing you would add? \[laughs\] You wouldn't add syncmaps or anything, Johnny? Come on, there's gotta be something...

**Johnny Boursiquot:** Well, in the sense that for a newcomer who doesn't quite know where the gotcha's are - absolutely. I could definitely see ways of making certain constructs easier to wrap your head around and use them in the language. Absolutely. But again, you identified the problem and you know how to get around it... So it's not like when you're coding now you're still banging your head against the table, saying "Oh man, I wish we had that, I wish we had that." You can program around it, you can code around it. In that sense, I would love to see things that make complicated things easier in the language be introduced. Not necessarily new concepts, new constructs, new data types or anything like that. Just really making things easier for people to do the right thing.

**Mark Bates:** Right, yeah.

**Mat Ryer:** How do you feel about the errors proposal, with the handler and the checks, and that stuff?

**Jaana Dogan:** If we are talking about adding stuff, I think error handling is one of the few places I would love to see an improvement. I think the problem over there is just not the verbosity, but bubbling up -- we have this tendency to bubble up errors, because there's no easy way to discover the error types. We don't have, for example, analysis tools that can help us to discover the types coming from the previous call tree, right? There's no stack frame if you do fmt error and not wrap things... So errors are definitely not in an ideal form at this point.

\[00:16:26.13\] I really like the fact that check is specifically -- it looks like maybe it's specifically trying to solve the verbosity problem, but it might actually help us to create some of these tools by intercepting every error, helping us to write some dynamic analysis tools maybe. It really depends on how much they're going to provide us some APIs maybe to diagnose what is going on... But I think it's an opportunity to us; rethinking about error handling is a good opportunity.

**Mark Bates:** Yeah, I was reading the error spec earlier, and I don't know - there's a lot in there I think might be just too much, just too many things. The biggest thing I've always had -- like, I don't need check; check doesn't really bother me. Like Mat said earlier, I think the `if err != nil` thing has always worked for me, and I've just gotten used to it. And in a function, if I have multiple points where I need to do something if there's an error, I just write a little anonymous function in-line and just call that my own little check, basically. So I don't feel like I need any of that.

What I really need is just a nice way to get a clean stack trace. From where the error was, that's where I want a stack trace that goes all the way back. I've been trying to use the `pkg/errors` package, and `WithStack` keeps adding on top of each other, and makes for these really hard to read stack traces. So for me, all I really want is just something that gives me the stack trace.

**Jaana Dogan:** So probably you need the stack frame rather than the whole trace, and you can reconstruct the thing by just looking at the stack frame. Also, this is such a big issue if you are running things in production - and we all do; you just wanna collect errors in a way that you can analyze, and you're able to see "Hey, what are the top reasons and where are the top places that are errors are coming from? What are some of the error patterns?" And currently, just because of `fmt.Errorf()`, we just lose the stack frame; it's not really nice if you wanna analyze... So definitely it's something that I would love to be improved... But I've seen the proposal, and it seems like it's covering a lot of things and exposing a lot of APIs, and it just looks like it's too much.

**Mark Bates:** Exactly. I was reading it and there are a few things in there I couldn't even grasp. I'm like "What is this even for? What problem is this thing solving?" And there's a few of those. I don't know if it's the best proposal I've ever seen.

**Mat Ryer:** Yeah, but it's part of the conversation. The other thing that's a part of that conversation too about errors is it's very useful to know whether something is a temporary error, whether you can retry it and it might work, or whether this is kind of "Okay, stop the world \[unintelligible 00:19:23.21\] but at least this request is not gonna ever be happening, so I have to go and tell the user something." All that stuff is just left so far really for the application... So yeah, there might be something they can do there around classes of errors, and come up with a really Go/nice/elegant way of solving that problem. I think it's quite interesting, too.

**Johnny Boursiquot:** I'm not sure if having that as part of the standard library itself would be the way to go though. I could definitely see a community-contributed package that actually does that - provides a standard set of error types that you could integrate into your code, if you need them.

**Mat Ryer:** That's a great idea, because you could do that today.

**Johnny Boursiquot:** \[00:20:06.15\] Right, exactly.

**Jaana Dogan:** Yeah. I would otherwise maybe advocate something more. For the error groups it's a really common case, but you can always build stuff to support those cases with a third-party library. I'm not sure if we should include more to the standard library, or we should experiment more outside of the standard library.

**Mat Ryer:** Well, one of the cool things about Go as a project is that it does engage with the community. If you've got something to say about it, you can write about it, you can get involved, and I know that they pay attention to it. I was talking to one of the team recently in Paris, and they're very interested in looking at particularly errors... And there's packages like [Dave Cheney's package](https://github.com/pkg/errors), and a few others that have really taken part in that conversation. That's something that I like to see just from a community point of view. It's quite empowering.

**Break:** \[00:21:03.13\]

**Jaana Dogan:** In terms of tools, I think we are not doing a good job in terms of giving introspection tools, for example. Do you have any opinions on that? What do you think is the right approach? There are errors that you wanna handle, transform into something else, or you can recover from. Then there are some errors where there's nothing else to do; just like Mat said, it's a "stop the world" type of error, and all you can do is maybe log it. What do you think our approach should be in terms of providing more visibility?

**Mat Ryer:** I think it's a great question. That means I don't have an answer. \[laughter\] A secret code for that. I don't know, but for sure, particularly in APIs, often it's very convenient as you're writing code to just, like you say, bubble the error up, and it pops out at the top, and the developer can read it. But of course, you can \[unintelligible 00:23:01.18\] the internals doing that so you do want to protect that, to some extent. And with some errors it's okay for the users to see it, and some of them you'd rather not; it's sort airing your dirty laundry in public. There isn't really a simple way -- say, for example, "This is the public message for this error."

That's an answer to your question, but... \[laughter\]

**Mark Bates:** Well, I think this is a great segue to talking about panics, because panics are really supposed to be that "Stop the world, I've gotta get off" kind of error, right?

**Mat Ryer:** Yeah.

**Jaana Dogan:** It just stops the entire process. I think there's something in-between--

**Mark Bates:** I know, which is awful! \[laughter\]

**Jaana Dogan:** There's something in-between.

**Mark Bates:** That's why I hate panic so much. \[laugh\]

**Mat Ryer:** Yeah, they're arrogant.

**Mark Bates:** It just stops everything, and it's maddening.

**Mat Ryer:** Panics are really arrogant, aren't they?

**Mark Bates:** They really are.

**Mat Ryer:** They're taking their ball home. It's like, "No... I can't do my thing, so no one else is gonna play, too."

**Jaana Dogan:** \[00:23:59.10\] I think panic is this specific thing, "Hey, if I continue, it's going to mess up even more crazily. I'm going to corrupt memory, or something." It's not like, "Oh, I got an error and I don't know what to do, and I should panic", right? I think there's an error type which is in-between; you don't have to stop the process, but you don't have much of a next action. There's only one thing you can do, which is to log it, report it to your error reporting analysis tool. I was specifically more talking about that case.

I don't know what is the best way to avoid panics. Would you rather see yourself corrupting memory rather than Go panicking?

**Mark Bates:** Oh, that's a great question. I don't have an answer for that. You know, working on a project like Buffalo, for example, where there's a lot of user stuff happening, we have to really make sure that panics don't crash people's applications... And it's a real thing. The standard library panics in some very strange places, for example... One of them being if you accidentally register a database driver twice it panics... Which can happen in a variety of cases, typically involving vendoring, but that's a whole another issue... Which is going away, thankfully.

So the standard library has this pattern of if you put the "must" in front of it, it panics, which I personally -- again, I'm against panics, so I think that's a really bad approach. Like, give me an error version and let ME shut down my app. So there's stuff like that, generally...

**Mat Ryer:** Yeah, you usually you do have that option... And I think those must methods - I think they came before we knew what panics really were and what they meant. I think originally yeah, there were errors and panics, and probably you'd use them in different ways, and it's only over time, from writing code and deploying apps and doing real things we've kind of realized panics are not good, they are difficult, and we'd rather just have an error to deal with.

**Mark Bates:** Yeah, so with the check proposal for errors, for example - I'd love something similar, but for panics; if we're gonna keep panics, I'd love to be able maybe at a package level to say "This is how I wanna handle panics."

**Jaana Dogan:** Just because you said "package level", maybe the problem itself is the global state, and everybody's interacting with each other, and so on... I think library space in Go is generally not really well contained; everybody's leaking to each other's global state.

**Mark Bates:** Yeah, I don't care where it is; I mean, I could do it at the top of every single function, but if feels like that's not the right place. I even have wrappers when I'm calling functions given to me that will capture the panics and return errors for me, so that when users give me a function, if it panics, it won't crash everything. So I always feel like I'm constantly writing that sort of stuff.

**Johnny Boursiquot:** It sounds like what you're asking for also may be some errors that are currently panics should be treated as sort of like a no-op. For example, registering a database driver more than once. If it's already there, then just no-op, just don't do anything, don't crush the entire app because of that, right?

**Mark Bates:** Yeah, exactly.

**Johnny Boursiquot:** Yeah. And the other thing, too - when I teach, especially those new to Go, they kind of run into some errors that we as sort of veterans consider to be obvious... For example, the "index out of range" error. Or if you're trying to access an index or an array or a slice that doesn't exist, then that's gonna panic. Sometimes they're surprised, they're like "Oh, I didn't see that coming." Things like that. I'm not sure there's a good way of handling these kinds of situations, but perhaps there's a softer way, there's something in-between, like Jaana is saying. It can't be all or nothing; maybe there's something in-between there.

**Mark Bates:** \[00:28:01.23\] Right. Yeah, I don't have an answer... I'm just voicing frustration.

**Mat Ryer:** And maybe we could have an error and we could have panics, and we could just have like a small anxiety that just gets returned... \[laughter\] It's like, "I'm okay..."

**Mark Bates:** Mildly frustrated... \[laughs\]

**Mat Ryer:** Right, "Just give me a bit of space..." \[laughter\]

**Johnny Boursiquot:** Like emotional errors... \[laughter\]

**Mat Ryer:** Oh, mate, they're all emotional to me when I'm writing code. So what about `context` as well? Someone asked on Slack. It's pretty common now to see code where context is passed throughout the entire package. Is that something that we'd like to see implicit?

**Johnny Boursiquot:** As in not passing in the context with every call down the chain?

**Mat Ryer:** Yeah, but you can still...

**Johnny Boursiquot:** Reference it?

**Mat Ryer:** ...do the same things that context gives you, yeah.

**Johnny Boursiquot:** My \[unintelligible 00:28:44.20\] is tingling. I don't know why yet.

**Mark Bates:** How would that even look in code?

**Jaana Dogan:** Implicit contexts?

**Mark Bates:** Yeah. Like, I just -- I don't know, how would you define "This is the context I wanna use going forward"?

**Jaana Dogan:** Just imagine an API call that, like, you say `context.Get(whatever)` and then it returns, so you don't have to explicitly pass it around.

**Mark Bates:** Yeah, but how do I set the current context?

**Jaana Dogan:** You can't really engage with the context in that case, probably. What you can do is to set the values by getting the current context, probably. It depends on the API design, of course, but I assume that there is a context always around, and you can engage it with some APIs, some Getters/Setters.

**Mark Bates:** Yeah, but if I can't then set, say, a new context for this goroutine, or...

**Mat Ryer:** You could. You probably could set the context when you call the goroutine, or when you call a function, or something. You'd probably have to, wouldn't you?

**Jaana Dogan:** Yeah, I mean, if it's not a one-on-one type of situation, like "Each goroutine gets only one context", usually you can drive contexts from contexts, and you can just set a new context.

**Mark Bates:** Yeah. I don't know if I'm for it. I would need to see a proposal.

**Jaana Dogan:** I like the explicitness of it, I just don't like that -- I mean, it has to be everywhere; if it needs to be everywhere, maybe it doesn't need to be explicit. But it's also nice, because it's visibly there. You know that it actually takes a context, and you need to do something about that context, right? But for people who don't necessarily care about the context, maybe it's a little bit too much.

**Mat Ryer:** Yeah, well I suppose you'd be able to ignore it always, and you wouldn't even know it's there if you didn't need it, if it was implicit.

**Jaana Dogan:** But from people who are coming to Go - their primary question is like "Hey, what is `context`? It's everywhere." I've never seen it in other languages as such a fundamentally visible primitive. Maybe they're familiar with context or not, but I think it's just too visible in Go... You need to explain them the story and the context and why it's useful, and so on. They learn not to see it if they don't need it. They know that they need to propagate it.

I think propagation is a little bit like the other concern. It's not automatic, so you need to pass it explicitly, and lots of newcomers don't know much about these concepts, and they end up breaking the chain sometimes.

**Johnny Boursiquot:** Yeah, I totally agree with that. And when I explain the `context` package and the context propagation, I usually basically have to take a couple steps back first and say "Okay, well this is what context propagation is. This is why it's useful, why you'd use it. Now, this is how it's actually done in Go." So there's two things there, two fundamental concepts that must be introduced for somebody to understand even how to use it properly and what it is..

**Mark Bates:** There's also a real... Hm, what's the word I'm looking for...? In the standard library they're not using it the same way all over the place, and it's really kind of frustrating. And I'll give you an example. In the `exec` package, there's `os/exec.CommandContext()` which takes a context and creates a command, yet there is no way to get back the context on that command; it's a private, unexported field. But in request, you can. On `net/http.Request` you can get access to it. So there's lots of places where it's not consistent, and I think maybe formalizing or making it more consistent would help a lot of problems.

**Jaana Dogan:** \[00:32:18.21\] True. And it's also like the context was added to the standard library at a later time; it doesn't even follow the best practices. The `context` package itself says "Use this as the first argument of a function call; never pin it." And if you take a look at the `net/http.Request`, context is a field, because they couldn't break the APIs; they had to put the context somewhere, and then they made it a field. So all of this organically-grown features is just making it very complicated for people coming to the language for the first time.

I'm not sure if any of this is going to be different in 2.0.

**Mat Ryer:** Well, there is an opportunity to potentially clean up some of that stuff. Context is one. It was added quite late, and I know that they didn't like the design when they had those methods in the request. They wished that \[unintelligible 00:33:08.17\]

Shifting gears very slightly, which areas of Go do we feel like we haven't really explored to full potential yet? Or which areas of tech could Go move into and make a bit of an impact? I know that initially Go wasn't really awesome for building websites; but of course, Mark, maybe for those that don't know about the [Buffalo package](https://github.com/gobuffalo/buffalo), you could just tell us briefly what that is.

**Mark Bates:** Oh, well the tagline basically is it's Rails for Go. \[laughter\] I'm not gonna pretend that it's anything more than that. For me, it solves a couple problems. One is I need to just knock stuff out very quickly, and I don't wanna deal with folder layouts, and I don't wanna deal with "How do I deal with sessions, and templates, and this and that and the other thing, and cookies, and whatever?" I just get all that by default with Buffalo.

But the standard library definitely misses a few pieces when it comes to web. It definitely got a lot right, but then there's some pieces where it definitely could do with being improved. One of the big examples that everybody talks about is a much better router. The current router is very weak, the muxer is really weak. You can't really build decent RESTful APIs on it without doing a bunch of case and switch statements, and yadda-yadda-yadda, to check verbs and stuff like that. So that would be the big place where I think web-wise that it's really missing - a much better router... Because we all have to go to these third-party routers. I hear everybody talking about "Oh, I use the standard library, but I use gorilla/mux." And it's like "Well, you're not using the standard library anymore", right? And it's like, "Well, I use the standard library, but with httprouter." It's like, again, you're not longer just using the standard library; you have to pull in a better router. And there's a bunch of those packages, for sessions and stuff like that, that we're just kind of missing, or are only halfway implemented, if that makes sense.

**Johnny Boursiquot:** Well, wouldn't you say though that these kinds of uses of the languages, to create these kinds of frameworks and whatnot - these are things that, I would argue, are better suited for the community to provide these things. In Go, you get the bare bones, you get the building block. It's up to you to add... Because obviously, these things tend to be opinionated, right? So how you assemble a web framework, how you do routing, how you store things in models, and how you interact with databases - these are choices that you're making, these are part of your design. So if the standard library is taking that choice away really from engineers, I'd argue that that's kind of overstepping its bounds as a language.

**Mark Bates:** I don't think improving the current router is taking away anything from anybody... Because you can still obviously have your own third-party routers. I mean, obviously, I'm somebody who doesn't believe that -- I completely agree with you, I think the standard library is about building blocks for library maintainers, such as those who maintain tools like Buffalo and other frameworks, and gorilla/mux and all those things; I completely, 100% agree with that, and the Go team also agrees. I've had long conversations with members of them where they say "These packages are meant as building blocks."

\[00:36:21.00\] The problem really becomes in that we've somehow got into this culture where if you use anything other than the standard library, you're doing it wrong... And I see that all the time; I see people getting very adamant, they're like "Only use the standard library." And it's like, "Well, it's not for everybody, and it's the building blocks." I could use the standard library in Ruby too to build a web app, but I had Rails, which made it a lot nicer. Or Sinatra. And the same thing in Java and every other language that has a web standard library. I just think the router that is there is really weak, and there are times when I do want to just use the standard library for smaller things, and that router just isn't enough to make it work, and I still have to bring a third-party router.

**Jaana Dogan:** I think the confusion started because Go is perceived as a "batteries-included" language, or standard library... And there was this culture of relying only on the standard library building blocks, rather than just like building more abstractions, especially for typical things like the http layers, or some encoders/decoders, like the JSON package. I think we are suffering from that initial culture, because we expected a lot from the standard library... Because, to be fair, if you compare ten years ago, this was the only standard library with a good http package, and a JSON library. So I think originally speaking, that is coming from there, but we need to just pass it and realize the truth. And I think the team kind of got to that point, "We need to keep the standard library as a building block, and let people build on top."

**Mark Bates:** Yeah, agreed.

**Johnny Boursiquot:** So you don't have to JUST use the standard library. \[laughter\]

**Mark Bates:** Yes. Did you hear that, everybody? You don't have to just use the standard library.

**Johnny Boursiquot:** It's okay...

**Mark Bates:** It's okay to pull in some other packages... Especially with modules now; it does make that a lot easier.

**Jaana Dogan:** Going back to the original question Mat asked, I think it's really hard to use Go when your problem has a lot of business logic. I was having this conversation a couple of times; my background is actually at smaller companies, where the problems are ambiguous, our abstraction changes all the time... But as we are tweaking our abstractions and so on, we still try to keep things simple, but there was this cost of organic growth. Because the problem evolves over time, your design evolves over time.

The Go type system is really small. It's really super-nice if you have a lot of confidence in your types. This is great for writing networking servers, or implementing a networking stack, because most of the time everything is well-defined, and so on, but it's not just really good for areas where things could be a little bit in flux, may require more design... You still need some sort of flexibility, you're still trying to keep things under control, but you need to just tweak your design as you go.

I've worked on a lot of big rule engines, message parsing systems, and I would probably not use Go for those types of problems where I needed flexibility... So I'm not super-opinionated against generics, because Go is disabling some of the use cases by not providing that level of flexibility.

**Mark Bates:** \[00:40:06.04\] I have to say, to piggyback on that, I do miss on occasion the flexibility that Ruby offered me for unstructured kind of data... You know, where you could just pull in whatever and it's just kind of there, and you can work with it, which is a lot harder to do in Go. I completely agree. But I also really love the type safety in Go too, so... \[laughter\] I'm not exactly eager to rush back to the dynamic world of Ruby, but there are times...

**Johnny Boursiquot:** Trade-offs.

**Mark Bates:** Trade-offs, exactly. I'm willing to let go of the bat a little bit, but I don't have that problem set.

**Jaana Dogan:** Yeah... I'm not an advocate -- I'm not encouraging people to go and use dynamic type systems; it's more of like "Yeah, maybe it could be a little bit better." I am probably biased because I'm coming from the JVM world, and it's also not a world that I suggest -- I think it's a very bloated world compared to Go, so I don't wanna end up being there, because there's already such a world, right? You use Java if you need that type of language. But yeah... This is just one of the use cases I would rather use a different language, rather than using Go.

**Mark Bates:** Right tool for the right job.

**Jaana Dogan:** Yes.

**Mat Ryer:** And speaking of other languages, are there any things that we'd like to steal from those other languages, to bring into Go, if we're talking about the future?

**Jaana Dogan:** That's a really good question. I really don't like centralized systems, but I wish that we had a central package manager, like a metadata service, and maybe we can build more tools around it. It's kind of hard to --

**Mark Bates:** Isn't that what [Athens](https://github.com/gomods/athens) is trying to be?

**Jaana Dogan:** Yeah, exactly. Athens is also more of like a proxy, so you can -- for example, organization; you can run your Athens instance, but it's also aware of the central Athens... It's a really good model, and having this metadata somewhere stored is going to enable everybody to write tools around it. I think it will make maintenance much easier for the library owners. It probably will be easier to just query who is dependent on what, what restrictions they have in terms of versioning, and so on... So I'm really excited about Athens.

**Mark Bates:** Yeah, me too. I think a lot of people are. But while we're talking about modules, can we talk about how we really need versioned binaries in modules?

**Mat Ryer:** Explain.

**Mark Bates:** If we wanna talk about adding things... So modules give us the ability to version packages, but what about the binaries that are associated with some of these things? An example would obviously be something like Buffalo, where I've got an app that's on an older version of Buffalo, I want to also have a binary that matches that...

**Jaana Dogan:** Yeah, definitely.

**Mark Bates:** You might have Buffalo 14.2 right now, and that generates a lot different code than, say, version 12 did. But if your app is on version 12 and you're using the binary from 14, you're gonna get this random code that may not compile in your application, or work correctly in your application. So it'd be nice to be able to say "I'm in this module. Use a binary that matches whatever I have in my module file." So you get your requirements, maybe you have a bins down the bottom, where you can add Buffalo 14.2, and then -- I don't know; you'd call "goexec buffalo", for example. Kind of like Bundler does. You do "bundle exec rails", and that runs a very particular version of Rails that's from your gemfile, which is their package management system in the Ruby world. So that would run the correct version of Rails for your project; I'd love to be able to see "goexec XYZ", where you could do the same thing.

**Jaana Dogan:** But this is not specific to Go binaries, right? It's a problem generally.

**Mark Bates:** \[00:43:53.23\] Yeah, we've got it in other languages. But I'm saying Ruby does that with Bundler, where your binaries are technically versioned if you call them through "bundle exec". I'd love to have that in my mod file, where it'll use the right binaries if I do "go exec".

**Jaana Dogan:** What does your current makefiles look like? Is it directly dependent on -- I mean, I say "makefiles", sorry... Because if it's such a huge workflow, I assume that you need to represent it in a Bash script or something.

**Mark Bates:** Well, no, I just use GOPATH/bin.

**Jaana Dogan:** Okay, okay. \[laughs\]

**Mark Bates:** My makefiles are currently littered with `go mod tidy`, but that's another thing for another time. \[laughter\] You've gotta run `go mod tidy` at the end of every single Go command... But that's another thing altogether. But like I said, I'd love to be able to say `go exec foo` and have it run foo at whatever version is listed inside my mod file.

**Jaana Dogan:** Would you rather the binaries are named after their version? Like for example Buffalo 1.whatever be in the binary name maybe, still in the bin directory under GOPATH, or whatever?

**Mark Bates:** Well, here's the thing - the GOPATH is going away, but I haven't heard anybody tell me where the binaries are gonna go. No one's really talked about what happens when you do "go install", where do they go. So we're kind of open for change there. Personally, I'd love to see them go somewhere in your path, so people don't have to add GOPATH/bin to their existing path already... Because we get that one in Buffalo a lot; it's like, "I installed it, but I can't find the command", and it's like "Well, did you add GOPATH/bin?" They're like, "Oh, I didn't know you had to." It's like, "Well, yeah, you do." \[laughter\]

So it's a real problem with Go, and I see it, and I'm sure Johnny sees it when he's teaching people, and Mat, too. You see it all the time in classes - they don't have GOPATH/bin added. So first - yes, I would love to see bins go somewhere where they are useful, without having another step of setting up your environment further; but also, like I said, maybe we could do like "buffalo @ v0.1.14", "buffalo @ v0.14.1", whatever it is, and when you do "go exec buffalo", it runs the right version from your mod file, wherever those files are. That would be how I would like to see it done. And maybe you get a symlink to whatever the latest version is, or something like that. So if you just run Buffalo, you get the latest version. I'm using, obviously, Buffalo as an example; it can be anything... Buffalo. \[laughter\]

**Mat Ryer:** So which of you did the [survey Go 2018](https://blog.golang.org/survey2018-results)?

**Johnny Boursiquot:** I do it every year.

**Mark Bates:** I do it every year, yeah.

**Jaana Dogan:** I did. Yeah, I do it every year.

**Mat Ryer:** Excellent. I wonder how many of our listeners do. Well, did you read it? Did you see the results?

**Johnny Boursiquot:** I saw the highlights, which were actually quite interesting to look at. This year there were about 103 countries participating, and with well over 5,800 server respondents. So it was much larger scale than it has been in previous years... So yeah, it has been an interesting read.

**Mat Ryer:** Yeah. I didn't even know there were 103 countries. I'm joking.

**Mark Bates:** You clearly haven't hung around my kids long enough. \[laughter\]

**Mat Ryer:** \[unintelligible 00:47:08.00\] lots of different countries.

**Johnny Boursiquot:** Wait, aren't you in the U.K.? Don't you have a little something going on right now, called -- what was it...? Brexit? You should be familiar with --

**Mat Ryer:** Nah, I don't know what you mean...

**Johnny Boursiquot:** \[laughs\]

**Mark Bates:** Yeah, you don't wanna be bringing that one up right now, Johnny. \[laughter\]

**Johnny Boursiquot:** Too soon.

**Mark Bates:** No. Not soon enough! \[laughter\]

**Break:** \[00:47:37.18\]

**Johnny Boursiquot:** For the survey, some of the things that I've found interesting -- because when I sort of looked through it to find things that were particularly relevant to me and my line of work, I saw a lot of.. basically the most common use of Go was building API and RPC services, and also building CLI tools. So a lot of people are building -- pretty much whenever there's a new project that comes along, that requires that type of use, Go is becoming more and more the go-to tool for that. That didn't surprize me at all, because from the very first time Go was introduced, it was sort of positioned as the language for the cloud, the language for building these types of services, these types of network programs... So that kind of didn't surprize me at all.

**Mark Bates:** Let's be honest, writing CLI tools in Go is awesome. It's really good.

**Jaana Dogan:** Yeah. You have a static binary. That's awesome.

**Mark Bates:** It's so good! It's so much nicer than any other language I've ever used to do it.

**Jaana Dogan:** Yeah. The startup time is really fast; it's just awesome.

**Mat Ryer:** Yeah, it wins at command line tools. But also, I mean, I learned Go -- I wanted to build something for App Engine back in the day, and there were three language options; it was either Java, Python or Go, and it just had this weird, little EXP badge on it, which is \[unintelligible 00:50:04.28\], so I go and collect them... So that's how I started getting into Go, I wanted to build APIs. And it just had everything I needed. Even with that router that comes built-in, which I agree isn't as powerful as it could be... But even with just that, and the JSON stuff, and the fact that the servers - they're just so quick.

I learned later, each request gets its own GOROUTINE, so you kind of have concurrency going on for free without even realizing, when you start building APIs.

**Mark Bates:** I think we all tried at the very beginning to launch every request in a GOROUTINE, and failed... At least I did. \[laughs\] Day one, I was like "Oh, sweet. I'm gonna throw all these in GOROUTINEs", and I'm like "Why aren't they working?! Oh, they're already in GOROUTINEs..." \[laughter\]

**Jaana Dogan:** The funny story is actually the initial Go App Engine implementation didn't really provide concurrency. There was like an event loop. You couldn't really realize that was the case, because they were able to hide it in a way that users cannot recognize, but there was actually an event loop. The new runtime is supporting full concurrency, so that's really good news, but... Yeah, it was different than the actual runtime.

Going back to the App Engine case, I think if you looked at other language supports, there was always -- since App Engine is a sandbox environment, and it has so much runtime restrictions, there was a lot of complexity, figuring out what framework to use, what libraries are supported on App Engine for other language runtimes... But I think Go just worked; the standard library at least worked, and since the standard library had a lot of things, batteries-included, it was so much easier to get started and be productive with Go on App Engine.

**Mat Ryer:** Yeah, absolutely. I actually have little things that I've built, that are still running. I go to it and it's still there, and I haven't touched it in years, literally.

**Jaana Dogan:** \[00:52:02.07\] Wow.

**Mat Ryer:** Yeah.

**Jaana Dogan:** I think we sent out some emails, "Hey, if you're using a very old version of Go, please just migrate, or something...", because we wanted to stop supporting 1.6 a long time ago, but we couldn't, because there were so many users... And you know what happened, we introduced the context package and the old APIs got broken, and so on... And for a long time, Google had to support the context package coming from the Net package, just because we can't really break people. That was really annoying.

**Mark Bates:** The switch from `x/context` to just `context` did really bite a lot of people.

**Jaana Dogan:** yes.

**Mark Bates:** That was frustrating.

**Johnny Boursiquot:** Wait, didn't `go fix` help with that?

**Jaana Dogan:** Lots of people just didn't wanna touch their existent deployments, so they would have their existing stuff relying on the older APIs, and we couldn't break. That's how all these aliases and everything actually came around, because we couldn't break and migrate people. There are lots of people who are not catching up with the latest versions, especially in cases where projects are hobby projects, or it's like a super-large company, or kind of like an enterprise company that deploys one particular solution and never touches it for ten years... It's really hard to go and tell people "Hey, you need to rebuild, you need to make sure that it's working with the newer version", and push it. Even if you enforce security releases and so on, some people don't care.

**Mark Bates:** It's true, we see that in corporate environments all the time... Companies still using 1.8, 1.7, because that's what they built their app on. They have a whole process that you have to go through, to declare new versions through AppSec, or whatever they need to do, so most of them just stay on the version that got cleared through their lawyers, and security team, and that's it.

**Jaana Dogan:** And sometimes, if you're deploying to a customer for example, they need to pay you more, because you're doing some extra work. So it's not that easy to say "Hey, I just need to rebuild this and I need to redeploy." The way that contracts work for software as a service type of situations is just really complicated.

**Johnny Boursiquot:** Another highlight which is kind of near and dear to my heart, and I think also for everybody on the panel here, is that most folks, most respondents to the survey, they said they felt welcome in the Go community. Basically, they thought that the community was making it easier for newcomers to onboard, to join and be part of the community, feeling like they can communicate with folks, and they can ask for help, and not feel like they're gonna get beat back, or not feel silly for asking questions... I think that's a pretty big deal, because not many communities are like that. A lot of communities these days are trying to become more newcomer-friendly, but I think that's something the Go community got right from the get, basically trying to be more welcoming to people from all backgrounds.

**Jaana Dogan:** Yeah, that's really nice.

**Mat Ryer:** Yeah, I think so. They did make a concerted effort in the beginning, I think. I noticed it, which was another thing that pulled me in a bit. I noticed that there was a focus around having diverse teams, and having diverse communities, and they saw the value in that. So it's kind of like it's a no-brainer in the Go community, which is why I always say in my talks, if you're weird, then come to the Go community. \[laughter\] Because this is where all the weird people get together and make cool things.

**Johnny Boursiquot:** We are weird, too. \[laughs\]

**Mat Ryer:** Exactly.

**Jaana Dogan:** I would never imagine myself being a participant of a language community. It was always like "Oh, these are programming language people. I should probably stay away." Go was very different, that's why I think it's the first programming language community that I feel like I'm kind of like a part of it, right?

**Mat Ryer:** Yeah, that's great.

**Johnny Boursiquot:** \[00:55:57.08\] Yeah, we're all people-first. We just happen to love the same language... You can't lose sight of that.

**Mat Ryer:** Yeah. Also, I've noticed, any dev team that I've been on, the ones that have had the most diverse group, that tends to be the best team, just because - different perspectives. We're building software for humans, mostly, or at some point a human is gonna probably interact with it. So having all those different perspectives on the team... I think that's what's happening, that's why it's so valuable. And the Go community just makes that a no-brainer, which I like.

And of course, because Go is growing so quickly, most people that we encounter are gonna be new. We're really growing rapidly. So I like that focus too, and I try and only really do talks for beginners, because I think the experts - they can look after themselves.

**Mark Bates:** What, am I a beginner? \[laughs\]

**Mat Ryer:** No. No, no, no.

**Jaana Dogan:** I like the fact that we can ask questions to each other, and we can challenge... That's really important. I think we are respectful to each other, and I think everybody understands that there will be differences in terms of priorities, and in terms of personal opinions, but it's really nice that we can have a conversation, regardless of the topic.

**Mat Ryer:** Yeah. It's going well so far, the first episode back, I think.

**Mark Bates:** Yeah.

**Mat Ryer:** We're not supposed to get meta.

**Johnny Boursiquot:** Yeah, I think it's going well.

**Mark Bates:** I love all the dead air.

**Johnny Boursiquot:** ...and that's okay, that's okay. Adam will \[unintelligible 00:57:32.08\] don't worry about it. \[laughter\]

**Jaana Dogan:** I'm specifically happy that we haven't recorded this show on April 1st, with this particular crew... So I kind of felt safe... \[laughter\]

**Mark Bates:** Oh, you're always safe with us, you know that... Although I think I made you pee once on a bus trip in Iceland, which I do apologize...

**Jaana Dogan:** \[laughs\] Oh, my god...!

**Johnny Boursiquot:** Oh wow, details, details... \[laughter\]

**Mark Bates:** I had Jaana laughing pretty hard. I'm pretty sure at one point she might have peed.

**Jaana Dogan:** Whoops...!

**Mark Bates:** Oh, those were the days...

**Mat Ryer:** \[unintelligible 00:58:05.17\]

**Mark Bates:** Ohhhh, snap!

**Johnny Boursiquot:** Ohhh, wow...

**Mat Ryer:** It's just comedy pop.

**Mark Bates:** Oh, we've gotta keep that in the final cut.

**Johnny Boursiquot:** Oh, please... \[laughter\]

**Mark Bates:** There's tons of people out there making fun of me. You don't need any extras.

**Mat Ryer:** Yes, absolutely. Well, this has been a great first episode, I think. The key thing that I took from this was the fact that we actually think Go is doing quite well, and we like some of the decisions that they've made. There wasn't a great deal that we wanted to add to it, but really just more about refinements, and finding small improvements in things along the way.

Thanks so much for my panel. Mark, Jaana and Johnny - it's been emotional... And that's our show this week. We'll see you next week!

**Mark Bates:** Thanks, everybody!

**Jaana Dogan:** Thanks!

**Johnny Boursiquot:** Thanks!

**Jaana Dogan:** See you!

**Mark Bates:** Thanks for tuning in...!
