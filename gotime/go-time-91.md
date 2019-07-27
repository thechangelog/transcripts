**Mat Ryer:** Welcome to Go Time! I'm Mat Ryer, and today we're talking about errors in Go. We're gonna learn a bit about how they work, we're gonna talk to a panel about how they use errors, and we're also gonna talk about the future of errors, including some of the new proposals that are flying around.

Joining me today, all the way from Australia, is Dave Cheney. Hello, Dave.

**Dave Cheney:** Hello, Mat. How are you?

**Mat Ryer:** I'm good, sir. What time is it for you?

**Dave Cheney:** I don't know... It's ten in the morning, something like that.

**Mat Ryer:** Yeah, it's insane. And it's also tomorrow, isn't it?

**Dave Cheney:** That's right. Ask me what the football pools are.

**Mat Ryer:** \[laughs\] We're not allowed. The Queen has made it very clear, no leaking information across timezones. I don't know what that means.

**Dave Cheney:** \[laughs\]

**Mat Ryer:** The editors, by the way, of this podcast, do not edit out anything that I say that is ridiculous. I've got an ongoing feud with them... Hopefully, I'll patch things up. Let me continue to introduce the panel here then... I'm also joined by -- it's only Peter Bourgon. Hello, Peter.

**Peter Bourgon:** Hi, there. I've never been on a panel before, so this is very exciting for me.

**Mat Ryer:** Oh, I'm glad. Hopefully this is an enjoyable experience. Where are you, Peter, currently?

**Peter Bourgon:** I am sitting in my bunker, in the center of Berlin, where it is currently 9 PM and the sun is still up there. So... That's me.

**Mat Ryer:** Nice. Berlin... This is a very worldwide show today, actually. We're all over the place. I'm in London; Dave, you're in Australia... Dave, please remember - it's a podcast. And I'm gonna introduce further guests... This is going really well so far, the introducing guests bit.

I'm also joined by -- well, it's Carmen Andoh, isn't it? Hello, Carmen.

**Carmen Andoh:** Hello!

**Mat Ryer:** How are you?

**Carmen Andoh:** Good afternoon from New York.

**Mat Ryer:** Oh, New York City. How's the weather there?

**Carmen Andoh:** Hot, like I like it.

**Mat Ryer:** Cool! And we also have an additional guest. Usually we don't have this many, but this is a special show... It's Marcel van Lohuizen. Hello! Could you introduce your own self...

**Marcel van Lohuizen:** Sure!

**Mat Ryer:** ...in my accent.

**Marcel van Lohuizen:** In your accent...? I don't know if I can do that though... I'll just stick with my own. Marcel van Lohuizen, from Switzerland. Also very hot here. And I'm on the Go team, as you may know.

**Mat Ryer:** \[00:03:55.28\] Excellent! Thank you. So... Yes, we're talking about errors today, and I think it might be nice to just sort of get started and talk a little bit about what it is that makes errors different in Go, and what makes them special... Because they are unusual for people when they first come to the language. Does anyone wanna chat a bit about the differences there?

Essentially, the languages that have exceptions, they're kind of always there; they're part of the fabric of everything... Whereas in Go, that's not really the case, is it? Errors are really just values that you can return. And in fact, error is just an interface.

**Dave Cheney:** I think maybe what you're alluding to is the fact that in Go error handling seems to be very explicit. It's not just the technicalities of exceptions versus explicit return values, it's more -- at least to me, it's the tradition that we have of... People often say, you think about the unhappy or the sad part first, and because the error handling is part of the return value, not any kind of additional mechanism, it's kind of like the thing that you have to think about first.

The language guides you to not being able to "Oh, I'll think about the error handling at the end", or "I'll put that in a cache block", or something like that. That's certain how I think about it - error handling is explicit, and has driven a culture of focusing very much on "If we solve all the unhappy parts, at the end out of our code falls the happy part."

**Mat Ryer:** Yeah. And I think writing code like that also is quite nice. If you do catch all the errors early and do that thing where you return early throughout a function, you do end up with the last line in the function being the happy return... So it becomes quite a handy way as well of just being able to glance at a function and see what's going on.

**Peter Bourgon:** One thing I notice, especially among people coming from different - maybe not so hardcore - computer science backgrounds is that this style of sad path first, they don't see it as nice at all. Their mind is strictly in the business logic of the thing, and they look at error handling as a necessary evil. They wanna think about specifically the thing that they're doing, and if it doesn't work, then "Oh, well." I think that is at the core of a lot of frustration with this part of the Go language; people expect to program in one way, and Go in some ways forces - in other words encourages - them to think about the way they structure their programs in a completely different way... And I guess it's open for debate how much of that is good. I would argue a lot of it is good, but maybe there's space in the discussion to say "Well, maybe we don't need to go quite that far", and I guess that's what all these new proposals are talking about, at least a little bit.

**Dave Cheney:** Yeah, maybe there are two parts there. One is the explicitness of error handling. People say it's in your face. You feel you need to always be talking about it, and always be typing about it. The other one, going to Peter's point about a cultural background, or bringing your history with you - from my point of view, coming to software development from an operator's point of view, I always want to know about how the software can fail. I don't care if it works. If it works, that's great; it's not gonna page me. But I wanna know how it's gonna fail. So that was for me one of the great things that attracted me to Go in the very first place.

We always talk about "What if this doesn't work? What if this file isn't here? What if I can't read from it?" and so on. So being able to talk explicitly about the ways that a particular operation doesn't work was like catnip to me. "This is great! I wanna talk about this all the time."

**Marcel van Lohuizen:** Another point, that Rob made early on, is if you have a file that doesn't exist, that is not really all that different from if some values input by the user are not according to some spec and you need to generate some error. These are the same things, so the error really shouldn't be handled different as any other value... In most cases.

**Dave Cheney:** \[00:08:01.17\] For my sins, I came from a background of Java, where always there was this discussion about the overuse of the idea of exception. We make things that are not exceptional exceptions, mainly because of that driving force in Java to unify all the things behind this one exception mechanism... Therefore every kind of failure, from the trivial to the catastrophic, always smells the same way.

**Mat Ryer:** And in Java they had the unchecked and checked exceptions, didn't they? What were they trying to do with that? What were they?

**Dave Cheney:** Does somebody else wanna go? I don't wanna monopolize the conversation.

**Mat Ryer:** No one wants to talk about Java exceptions, Dave... \[laughter\]

**Dave Cheney:** Well, put me in that category, too.

**Mat Ryer:** Okay, fine.

**Dave Cheney:** No, no... I did some research about this, because the notion of Java's checked exception was absolutely a reaction to the way the exceptions in C++ are handled, which are there was no way of knowing "Does this function throw?"

One of the great sports of C++ is to open up any of the C++ conference talks and \[unintelligible 00:09:03.26\] will put a three-line piece of code on the page - it'd be something like adding two numbers together - and say "Is this safe?" and he'll spend the next hour talking about all the ways that adding two numbers together can be unsafe. Like it'll just blow up. And part of that is because "Well, someone might have an overridden edition for that type, and it might throw an exception, and you just don't know."

So Java's checked exceptions were very much a reaction to that, which is if this thing can throw an exception, you have to put it in the signature of the method. Unfortunately, they figured out eventually that that was going to require every single theme to have a throws clause, and so they kind of created the secondary category of "What we think of in Go not as panic, but as throw?" There's a concept inside the runtime - there's actually a function - called "throw." And "throw" you can think of as panic that you can't catch. So if you think of checked exceptions as a category of those, and then there's even larger ones, things like dividing by zero, out of memory, things like that, which are subclass from the not checked exception category, but the one that doesn't need to be checked. So effectively, you could throw exceptions and not have to mention them.

So all that work to say "Right, we're gonna make sure that everyone has to write down all the exceptions that their code can throw" was kind of undone by the reality that "Well, that means we have to write it down everywhere."

**Peter Bourgon:** And I never used them, but is it true that you have to enumerate all the transitively-thrown exceptions from all the functions you called? Is that how that works?

**Dave Cheney:** Precisely.

**Peter Bourgon:** I see.

**Dave Cheney:** If you didn't catch them, if you passed them up, then set a set of possible exceptions group.

**Peter Bourgon:** Yeah, okay.

**Dave Cheney:** So the reason that I ended up doing this - was Java the only ones that ever implement checked exceptions? And within the caveat of mainstream languages, which is up for your interpretation, I could not find another language which went and chose checked exceptions. C\# certainly didn't... There's a long thread from 2004, interviews with C\# designers, who were like "So you haven't done checked exceptions?", and they're like "Yeah, we're just waiting. We're gonna see how it goes. We might do it later." 15 years later, I guess they didn't.

So Java is kind of out there on its own, of the mainstream languages, that went down the path of actually forcing people to note their exceptions.

**Mat Ryer:** Great. And when I write Go code these days, I wrap the errors. If I call some function and I get an error back, almost 100% of the time I will return that error wrapped in some way... And actually, I use the pkg/errors package, Dave, which I know you've worked on... Or did.

So does everyone do that same thing? Does everyone wrap errors? And what's the value in wrapping an error?

**Marcel van Lohuizen:** I do and don't... If I wanna have context, I wrap it. If I create a new error, I wrap it. But sometimes you're not really adding too much information, and then I don't. So it depends on the situation.

**Dave Cheney:** \[00:12:03.16\] Yeah, I wanna just correct one thing. Pkg/errors was based on four years of work that we did inside Canonical at Juju, and giving credit where credit's due... A lot of the ideas which pkg/errors is built on is built on Roger Peppe's ideas. He had Juju/errors/errgo that he wrote. If anything, the pkg/errors that I have was in my style of throwing out everything which I possibly can, and leaving only the bare minimums. That was all that I contributed to the errors package.

But I remember sitting in Starbucks with Roger in 2012, and we had a few \[unintelligible 00:12:41.05\] Juju at the time using fmt.Errorf to add an annotation. Because -- what is the classic example... Something 20 lines down fails, and the only error you get is "io.EOF". So we had a tradition of wrapping the errors with fmt, Errorf, and the classic style that's documented in \[unintelligible 00:13:01.09\]

And having that discussion back then, "Well, now all we've got is a string, and a sub-string matching. That's not cool. Can we do it better?" And that was really where the ideas for wrapping an erorr so that we could unwrap it, so that we could get the original type back... Because back then at that time we were very obsessed with the types of thing, and we really wanted to check them, and check we've got exactly - not just an error, but its specific type and perhaps its specific value... So going into a string form with fmt.Errorf kind of blew all that up. That was where a lot of those ideas came from, the work that Roger and Gustavo did on the Juju project.

**Mat Ryer:** One of the nice things I like about that story, Dave, is that the errors package came out of actual use. It wasn't imagined; it came out of real pain that you had... And I think that shows. Because every time there's a package that just really hits it on the head, you realize they've just solved their own problem here, and then they've shared that afterwards.

**Peter Bourgon:** Speaking of coming out of actual use... Marcel, you mentioned that you wrap errors sometimes, and sometimes you don't. I'd like to dig into that a tiny bit and ask you - is there a rubric, a way to generalize when you do and when you don't, that is a bit more concrete than "When it feels like it has information or not." I have my own ideas, but I wanna hear yours first.

**Marcel van Lohuizen:** Sure. Well, if you have helper functions within your code, for example, and you know that might change... You're just passing an error through the chain, up your code, basically, then some functions don't really add all that much information, so... I wouldn't wrap.

Of course, there's this other problem that things like pkg/errors solves. If I really want to return some sentinel error, but wrapping it would eradicate that. I have to return this sentinel error... Even though I would want to wrap it - sometimes you would want to add this information, and we're just standardizing on something that... What pkg/errors does is important. But sometimes there's something like too much wrapping, I think. You could go there.

**Peter Bourgon:** Okay, so it's still--

**Marcel van Lohuizen:** Yeah, generally I would try to wrap more often than not.

**Peter Bourgon:** This is also my experience, but I raised this in an issue comment with - gosh, who was it...? Robert Griesemer - somewhere on GitHub, and his position, which I found a little interesting, and it makes sense to me, is that you only wrap errors once they cross a package boundary. So the package boundary represents some kind of a barrier beneath which everything else is an implementation detail... And I get that. I get that in code that has been carefully thought through, and produced and reviewed by essentially intermediate or advanced programmers... But it really doesn't match with my experience of working in large teams, or consulting, or anything like that, where it's very rare that packages are well defined; it's very rare that the modularity of the code is such that packages represent a good, coherent boundary. Much more often I say "Just wrap everything." Maybe if it's a tiny helper function, don't do it there... But the risk of overwrapping, especially in my private code, is much lower than the risk of underwrapping, when the service crashes and you get io.EOF.

\[00:16:22.05\] I wonder if this -- I mentioned this to Robert, and maybe it's worth talking here... I wonder if this represents a disconnect, in a way, between how Go is perceived by the core team, how it's used in real life, and how maybe those of us a bit further removed from the Go team actually see it being used... Maybe that's something worth discussing, especially in the context of this sort of thing.

**Marcel van Lohuizen:** I looked at a lot of different types of error uses, so I didn't really go for frequency, but I wanted to see, and I did some research on what different error wrapping styles or error creation styles do people have... So I looked at uses for different packages, but also things like Upspin.io, who's using a different approach to errors... And generally, there doesn't seem to be a lot of consistency here. There's really a large variation of the way people use errors and wrap errors, and I really don't think there is one good way. Whatever we do, we shouldn't constrain people one way or the other. I think it's completely valid in some cases to wrap a lot, whereas in other cases you're really don't have to.

One thing I sometimes do is to have an internal type, an "error type" that isn't even in implementing the error interface, and pass data around, and only at a later stage convert that into a different error, so that I can really use the compiler to enforce different properties of the error throughout the system, until it makes its way out. So this is, again, very inconsistent with any of these approaches.

What's important is to standardize in something that I think will still allow all these different cases... But I think they're all legitimate.

**Peter Bourgon:** Carmen, I know you've done quite a lot of outreach, and probably more than anyone else among us... Do you have any perspective on ways people use errors, or don't use them successfully?

**Carmen Andoh:** A lot of it is actually looking at some of the data other people are doing using tooling, including what Marcel has done, and including some people in the community... It is a mixed bag, and it is highly -- the community contains \[unintelligible 00:18:31.01\] and that also includes people who don't maybe have deep contextual knowledge about the Go way, or really have groks in understanding of the Go way for error handling, like errors as values, or implementing the error \[unintelligible 00:18:44.15\]

So there's a lot of conversation and opinions, and it comes back to -- my final conclusion is the community is just, because it's bigger, we just have a lot more here, and this idea that there's one way or two ways to do things in Go no longer holds water; the people are using error handling, trying to bridge from other languages that they're coming from, whether that be Java, dynamic languages that are not really used to this idea of sad path first, or the idea of -- two things that I really like are the idea of really understanding that failure is the default in any computer programming language... And errors taught me that in Go.

And the second thing that I really learned was this idea of mechanical sympathy, which is something that I didn't hear prior to coming to Go and using Go, but now I hear it all the time. And errors are front and center in that.

I kind of went a little bit on there, Peter, but yeah, it's all over the map.

**Peter Bourgon:** \[00:19:50.10\] I also wonder, when you say "doing analysis of the code that's out there" - to me that automatically biases the data you're getting, because at least to my experience consulting and speaking to people and meetups, I would say the vast majority of Go code is in private repos... And I can say more about my experience with that, but I wonder how we're biasing...

**Dave Cheney:** Oh, an enormous amount. Like that 90% below the waterline.

**Peter Bourgon:** Yeah, so I wonder if we're making decisions based on patterns we see in open source repos, if we're really responding to Go as it is used in practice.

**Dave Cheney:** Don't forget how do you learn anything, from being a child, through to being an experienced programmer. The first day you sit and you look to the left, and you do what the person to your left is doing. Recently the company I worked for was acquired by another, and I'm coming to a now very large company that has really strong graduate recruitment programs. The funnel of experience is very wide at the bottom. Folks coming out of either interns, or their first job as grads. They have only the background -- the two tools they have at their disposal are the background that they learned in university, which is probably them more towards Java...

There's a huge tension inside the university; should university teach people to expand their mind, or should it prepare them for industry? There's huge pressure inside the CS curriculums to resolve that in the way that -- the industry wants programmers trained, so they can start straight away. So the languages - they use a little bit of Python, a little bit of Java... If you're coming out of the Australian system, a little bit of Prolog, just to add some spice... So that's one tool that they have available to them.

The other is the code that they're being asked to maintain, which is literally the conceptualization of "Look to your left. The person to your left just wrote that code." So it can drive an enormous amount of groupthink, of trying to fit in, of trying to model what they see to the left. What I'm getting at with that is literally like a tiny perturbation of a particular house style will bloom as "This is the way that we do it here."

To make a completely random observation, you can trace the \[unintelligible 00:22:11.06\] of that pkg directory -- I don't wanna make this a hobby horse to stand on, but you can trace the \[unintelligible 00:22:17.05\] of that pkg directory that is inside the Kubernetes repos that have pkg, all the way back to the way that Go is written in 1.0, for historical reasons... Because the makefile packages were in this directory called pkg, and other things were in a different directory, and in terms of like "Oh, I see that in the big, popular Go repo. I will follow that style."

So most of what I see in private repositories, across now six or seven different companies I've programmed Go in, is a kind of "This is the way that we do it here" kind of thing, without a great deal of understanding of why.

**Mat Ryer:** Yeah, so what about that though...? Because being consistent within a codebase - there's value in that, isn't' there? But do you just mean that there's just this inertia that happens, and it just gets unchecked, and that's how a lot of these things can come about?

**Dave Cheney:** A lack of reflexivity, a lack of "Why do we always wrap here?" And I think this goes to both Peter and myself's point that there's an enormous way that -- to take the example of overwrapping, and annotating on every single error return path comes out of traditions of "Well, this is just how we do it here." If you're at level one, you get pulled up in your PR reviews if you don't annotate every error message. I certainly remember when we were really into that at Juju that would be the number one thing we'd pick up on. "Didn't wrap here, didn't wrap here, didn't wrap here..." In some way it'd be like "Always comment your functions, always add a doc string", that kind of thing. So it can be enforced by rote, but also, again, without a lot of reflexivity of "What is the value of this?"

\[00:23:56.20\] One of the things in the errors package that I made a mistake very early on is following these patterns that we'd established in Juju. The first thing I had was a wrap function, so that you could on every error return wrap on every way out. And then after trying this on my own code for a while, I've realized that the message in the code that I wrote was actually the name of the function that it was in. So if it was in an open file, the message would be \[unintelligible 00:24:17.11\] So it's like "Well, why am I just duplicating...?" I'm literally in code duplicating the stack trace. So I changed the errors package quite soon after it was released publicly, to not just capture the stack line, but actually capture the whole stack trace.

In my mind, if your code is well factored - and for the audio listeners, I'm making the air quotes - then the stack trace, the name of the function in the stack trace is a very good proxy for the little message that you'd annotate with. But to get to this point, that's a big if. Code is well-factored, people have good function names, they use packages... All these things which perhaps we as advanced Go programmers, we're like "Well, of course you do all these things." I love to sit down and teach people how to do these things. There's no evidence that those practices actually permeate out into the industry, where people are learning either by rote, or bringing a lot of their "Well, this is how I used to do it at high school", or "This is how I used to do it at my last job", or "This is how I used to do it in Python. I was a Python programmer" experience to Go. Those traditions don't translate over, so their error handling strategies, all of the ways that they approach Go code is different. By definition, \[unintelligible 00:25:38.28\] been programming for five, six, seven, ten years in Go. We had to be doing something right to get this far. We're kind of transposing those values onto people without a lot of background.

**Mat Ryer:** That's really interesting, I never really thought about that.

**Break:** \[00:26:00.28\]

**Mat Ryer:** Whenever I wrap errors, I do it really so that I don't need the stack trace. A stack trace would also do for me, too. Yeah, it is about just finding out where the error came from. Some errors - in the OS package, for example, if you're trying to open a file, the error is not there. It contains the file name, I think, in the actual error message... So you kind of have everything you need, really. \[unintelligible 00:27:08.09\] But if I was just opening one file in the program, then of course I probably wouldn't bother wrapping that. But if I'm gonna have some program that's gonna deal with files, and I've got a few points throughout my codebase where I'm gonna be doing that, then I'll use wrapping to just sort of tell me where those points are.

And that idea of just wrapping the errors only when they cross the package boundary wouldn't work for me, because internally I'd still need to know all that stuff as well.

**Dave Cheney:** \[00:27:42.12\] I think that goes to Peter's early point, which is -- you know I'm a big fan of this mantra of like "Package do-one-thing"; it's name should be the ultimate one-line description of what it provides to you. That's really not the case in industry. I'm sure all of us have seen so many codebases where packages are factored along Java lines, or along Ruby on Rails lines. A package called "Controllers", or a package called "Forms", a million packages called "Utilities", or no packages at all. And in that sense of "I just wrote the code in the file, because I didn't know where else to put it", without any of that structure, that is where individually I find that people write a lot of wrapping comments, because they literally don't have any structure in their code to fall back on. It's all just in one big package, or worse, they've imported a library that somebody else has written.

That was usually the advice from the errors package. I don't claim to have made it up, but for example where do you wrap? Do you wrap when you call into somebody else's code? Obviously, that's in a different package, but at the time, before \[unintelligible 00:28:55.18\] if you are calling to something in the standard library, by definition that error would be unadorned, unwrapped; you wouldn't have a stack trace associated with it. This was the thing that -- coming back to what programmers expect coming to Go, they really expect a stack trace. Whether that's useful or not to them is, I think, independent of the fact that that's what they're used to in other languages. Python \[unintelligible 00:29:27.02\] Java will give you a stack trace any day of the week. They're like "Okay, I have an error. Where's my stack trace?"

That was one of the selling features of the errors package. People were like "Errors with stack traces. We love it. We understand exactly how this works." So if you wanna guarantee that you at least get a stack trace that leads you at least part of the way there, even if you fall into the standard library or some package that somebody else has written, at those interface boundaries where you're talking to somebody else's code - that's where you wrap.

**Carmen Andoh:** There's a point to be made here, and I'm seeing it also in the GoTime.fm Slack channel, and that is all the things that we're talking about take a really long time to develop an intuition for, right? And especially in the Go way of doing things. It just takes time, and there's a mental model that needs to build up... And if you're more pragmatic, you just wanna get the job done, so you're looking left, as you say, Dave, and you copy the thing, and it compiles, and you build it and you run off and you go into the sunset. Just get your job done, 9-to-5. And it takes a long time to build up these mental models, so finding clear package boundaries, or how best to use errors, or even like "Why would I wanna do one versus the other? Are there maxims, are there proverbs?" It just takes a long time, and it's really hard to teach, and it's really hard unless you are in it every day, for a number of months, even years.

**Dave Cheney:** Absolutely. For me, I'm less interested in the idea of wrapping, and more interested in - to bring it to today's topic - the actual mechanics of what happens in that if err != nil block. All the time that I've been involved in Go, there have been this kind of set of repeated themes of trying to reduce the verbosity of this. Like the meme of Brad Fitzpatrick with his pedal that makes the little stanza - it's a direct reaction to the "I dislike having to type the same thing over again."

There's an entirely different realm, which will not fit in this podcast, about the evil of -- the notion of DRY above anything else... But the visceral reaction to the mechanicalness of having to type those if err != nil return error.

**Peter Bourgon:** \[00:31:38.16\] And Dave, if you don't mind, I just wanna jump in and maybe highlight -- maybe it's worth drawing a distinction between simply the verbosity of that check, and all the parts that you have to repeat, including the return whatever within the middle of it... And for me at least, somehow the semantics of it - and that's probably the wrong word, but... The idea, like we spoke at the beginning of the podcast - it's a critical part of Go, in my opinion, that errors are handled directly, upfront, and not kind of deferred to some other scope or some other place, where context might be lost.

For me at least, that semantic (or whatever it is) is extremely important to keep \[unintelligible 00:32:15.19\] The verbosity, we can talk about... But I wonder if other people feel, first of all, that that distinction makes sense, and second of all, if they agree with me.

**Marcel van Lohuizen:** Yeah, that makes absolute sense, and any of the proposals you'll see from the Go team, they have that property. Like, "We're gonna treat errors as values. We're gonna keep the context."

**Peter Bourgon:** I do not agree. I do not agree.

**Marcel van Lohuizen:** Can you give an example of one where it's not?

**Peter Bourgon:** I think Try definitely does not, and I think that because it's designed as a built-in, as a function; it can be interlaced several times in an expression, and the handling of that error is then deferred to either a deferred block at the top of the function, or the calling scope... And you don't actually deal with it in situ.

**Marcel van Lohuizen:** So in practice it's not actually a function, right? It's a macro. And I've stressed this very point that you've made, I've stressed this to Robert, and he assured that we will be able to find the original location of the error.

**Peter Bourgon:** What do you mean by that?

**Marcel van Lohuizen:** The context in which it occurred.

**Peter Bourgon:** But I mean visually, in a code reviews context... Not like a stack trace.

**Marcel van Lohuizen:** So how is that visually not \[unintelligible 00:33:25.20\]

**Dave Cheney:** I think what Peter is talking about is... There's an example that's been posted many times in various issue forms, which is because Try effectively \[unintelligible 00:33:41.29\] you get a single return value at the end, you can chain things together. The example people love to show is "try os.Open \[unintelligible 00:33:52.23\] and stacking them up with tries, using Try to turn a multiple return argument back into a single one, and then build that confluent pattern out of it. So on one line you have many tries, wrapped; either "tryThis.tryThat.trySomethingElse", so Try is kind of wrapped one in the other. This is a very poor medium to express that...

But the thing is that you now have this idea of open, read and close, all stacked onto one line, permitted by this Try macro or Try helper function, that is taking the error value, stripping or filtering them out, and then returning you actually the thing - in the success case - that you can then move on with. And you go from the very kind of declarative/imperative style of "open the thing, check error, return", "read the thing, check error, return", "close the thing, check error, return", to a more fluent style of "open the thing, read the thing, close the thing", all in one line. Very neat and concise.

**Mat Ryer:** You can do that too if you call a function that returns another function, that you're then gonna defer. Then you can cram that onto one line as well, and you end up with basically two sets of brackets at the end, two sets of parentheses at the end. Is it just that we have to be disciplined when we write code, and just not do it like that? Or is that nested Try thing represented as a feature of Try?

**Marcel van Lohuizen:** I think they've been stressing the discipline part of it quite a bit. You just shouldn't go overboard with it. If we get to the point that we have generics in Go, all of this would be very easy to simulate also. So there is still a matter of a certain style that people should adopt to make things clear, whether there's Try or not, or whether there's generics or not.

**Peter Bourgon:** \[00:35:48.28\] This gets to an interesting, maybe philosophical point, which is there's certainly people that want this chainability; people who look at Go and say "Well, I don't care. I wanna be able to chain expressions, and just deal with it this way." In fact, there was recently a blog post about the same program written in three programming languages; it was an image manipulation program. They did one in Rust, in Go, and Python, and the author explicitly said "I wish Go had this Rust (?) macro, so I could do all this at once." But my question is, if we give them that, does it not subvert what I think is a really core principle of Go the language, which is that this sort of occlusion of the sad path is problematic? I certainly believe this, but I've been doing this for a long time, I'm fully on board the hype train or whatever, and maybe it's not true. Maybe I am too rigid in this belief, but that's certainly what I think now, and that's certainly why I push back against this kind of thing.

**Marcel van Lohuizen:** In my own head, as I see Try, it's exactly the same as what we had before, just shorter... But I can imagine that it will be interpreted differently by other people.

**Dave Cheney:** I wanna respond to that, because the Try proposal as it stands now cannot replace every instance of if err != nil... Which means -- when you say "If I see Try in a code review, that means there are plenty of cases where there will not be Try." So now instead of having one way of handling the error return from a function using good old if, there are now two different ones. The great concern I have is following this line of -- Try is added to the language; people are gonna wanna use it. I mean, by definition, why would a feature be added to such a Spartan language if we weren't supposed to use it? That's a really complicated message to try and explain and teach in class, and explain in blog posts, and in my position, explain in code reviews. Using the new shiny thing is actually not appropriate in this case.

Looking at the data that's been provided -- in any of the data I've looked at, it's less than 5%; less than 1% in the case of my codebase. Let's be super-generous and say 20% of cases can be replaced with Try. One in five. That means there's gonna be this constant pressure in every single code review of like "I should use Try there." And the person arguing "Well, I think it's actually more complicated. It doesn't fit in that 20% case." So in attempting to bring a style that favors making the happy path easier - enormously harder for the thing every programmer does every day which is negotiating in code reviews, by giving an option, by saying "You can use this most of the time, but actually 80% of the time this doesn't apply well."

I think the focus on trying to make the happy path easier to appease people who want this \[unintelligible 00:38:44.23\] is, in the broader view that I look at, counter-productive.

**Marcel van Lohuizen:** It depends a little bit on the type of code you're dealing with, how often it would be useful. If you look at system code, or if you look at the Go codebase, for example, there's actually very few cases where Try will be useful. The higher you go up the stack, the more you're using other people's libraries, the more useful it will get. Sometimes it would even reduce -- quite a large impact on the size of your code, and actually make it more readable. So it really depends on the type of code you're writing.

**Dave Cheney:** I can't get on board with your "make more readable." The point that I wanted to make before is there's a thing that happens inside every error check, and most people don't see it, because a lot of the time it's actually invisible. It's the cleanup. The thing that happens in the block, once you said "if error isn't actually nil, open brace", it happens on that line before you return the function... And that's cleaning up, that's undoing the work that you've done. And yes, we have mechanisms for deferring that, but the most important thing in my mind that you do in that error path is you put the state back to where it was; you make sure that you can retry that function, or you do whatever it is that "Okay, this failed to happen. We need to correct this state and then return \[unintelligible 00:40:07.00\] deal with its correcting of the state and dealing with the error."

\[00:40:14.01\] And even though it's explicit there on the page, the fact that if there is no line between if err != nil and return error, then you know that there's no cleanup. It's not hidden anywhere else, it's not smuggled into a fur, it's not smuggled via some very clever thing of a named return value. You know, right there, and that's all we need.

Also, as a code reviewer, when you do see some work before that error return, you know very clearly "Oh, I need to pay a lot of attention to this, because this is in the error path, this is trying to correct or put the world into a sane state before this function returns." This is the most important thing, because this is part of the error handling path, and it's right there, in the block.

**Marcel van Lohuizen:** But if you're not already using defer, for those cases you would still be using a \[unintelligible 00:41:01.11\] right?

**Dave Cheney:** Yes. The canonical example is the one that we've \[unintelligible 00:41:05.04\], which is file copy. You started to open one file, you started to make a new temporary file on disk; defer isn't gonna help you, because that's only applicable for actions that happen on both success and the failure case. Normally, in those file copy type examples you have to, in your error path, if you're at the point where you've created the temporary file, you need to delete the temporary file, so the world goes back to how it was beforehand.

So as you say, that's not applicable for Try, and I think that's my point - I think there is pressure to try and find more places where Try can work, because there's no point in adding a feature that no one can use... But from my point of view, this explicitness is something that is to be cherished. It's super-critical to making reliable code, and any moves to hide that, or in cases where it's not important introduce a kind of simple syntax - this is the point; it dissuades programmers from thinking about error handling first. Yes, it is annoying, but you have to do it first if you want to write reliable programs.

**Mat Ryer:** Is it a bit like go run? Because we probably don't use go run in production anywhere; we use go build, we build the binary and we deploy binaries, and things like that. But go run is used at the time when you're just sort of playing around with things, and as you're learning, really. Go run can be useful to just run a -- it doesn't matter. It's kind of magic; it's doing a build secretly in a temp folder, and things... But it's okay, because it's a learning tool. Does Try fall into that?

**Marcel van Lohuizen:** I think you have to assume that if you're providing a functionality like Try, it will be ending up in production code all over the place... So if it's supposed to be that, then it shouldn't be added.

**Mat Ryer:** Right. So it's not just for learning only. But what I mean really is if you are gonna write a really simple program, I could see a case where you just use Try, because all you can ever be doing is returning the error, and you could write that program and maybe if you're coming from a language with exceptions, maybe that would read in a more familiar way, and things. I mean, I'm just trying to explore that, because I personally - just because of the way that I do wrap, all over the place - I don't think I would use Try very often... And then I'm in this situation where, like Dave said, some of the code has Try, some of it doesn't... And there's a few other things that I feel like I would lose, as well.

Something that I noticed I do is the shape now of this little if err != nil check - when I scan through code, that tells me something about the landscape of this code. It really helps with scanning it, and I wonder if we'd lose that... I mean, if it was everywhere, I feel like it's okay... But the fact that we're gonna have a mix of it - I don't know... It feels like multiple ways of doing something, and there are trade-offs.

**Peter Bourgon:** \[00:44:09.08\] I'm sensitive to that same kind of instinct, that something exists now that is useful to me in the structure of the -- there's a special word for this thing, were everything is only one level indented... It's even listed in the code review comments... Anyway, whatever that property is, it's nice, and I like it, and I can leverage it now. And this new thing will change that. But as I'm getting older, I realize this is the same format that a lot of things take, that eventually turn you into an old man yelling at a cloud. So I personally will back down a little bit; maybe it will be worth it, maybe not - I'm not quite sure.

But I guess there's one thing actually - sorry to grab this again - worth highlighting, which I think you hinted at, which is that we may not use it in our typical error handling patterns, but plenty of the new people will. And at least I believe a lot of new people will overuse it, and it will be our job as code reviewers to say "It doesn't make sense here, it doesn't make sense here." The point is that we're not programming in isolation, and we don't have to worry about only our use; we have to worry about uses that other people have, and the code that we will see that other people will commit and push, and we may not have a voice in.

So it's like, should a language feature guide people to the right path, gently? Or should it just be there, and you can use it if you're a power user; should a language feature have an opinion in this kind of discussion? I have my opinions, and other people probably think different things. Are there opinions about that here?

**Carmen Andoh:** I've tried to think this from the perspective if maybe Robert, or Russ, or the Go team who's getting this input, even if it is maybe sample-biased by surveys, or votes on Twitter or not... And I think language design is hard. Dave had a wonderful proverb in his "Error handling gracefully" GopherCon 2016 talk, and that was "The frog and the well." Do you remember that, Dave? It does not know the ocean. And I sometimes wonder if that can work in the opposite direction, meaning "What percentage of people are Go programmers out of the larger world?" Is it 4%, is it 6%? Are we a small bunch, and we're a small bunch that has gotten acclimated to things? And is adoption being checked because we are so rigid about the way that we like the things, because we are the old men and women yelling at clouds? ...or to keep things how we want them, we're curmudgeons.

So it's hard -- we can certainly look at maybe the consequences of Try being adopted, and we can know the known knowns. We know that this will probably create a conceptual overhead when reviewing and reading code; we know that this might mean that we're gonna need a style guide, or "A strict Try shopper. We do not use Try here." There's gonna be consequences.

But what we don't know - and this is kind of having to look at a crystal ball, and this is where the perception gap comes into play... Is who that would benefit? And we kind of can make some guesses, and we kind of can make some assumptions and say "Oh, it's not really in our benefit, because it's not an all-or-nothing, or it's not a comprehensive error handling..." But it is much harder to do that, and so I'm kind of trying to put myself in the Go team's shoes and look at the constraints that they have.

There's solid complaints coming from the community; they have to assess the authenticity -- well, not authenticity, but just like "Okay, are we biased in looking at these complaints, and do we have a sense that this is a priority for us to fix?", and looking at all these other things. I see you raising your hand in the \[unintelligible 00:47:35.13\] Dave. I'm giving it to you.

**Dave Cheney:** You opened a bunch of really good points there, and that is about "Is our stody ways holding adoption back?" I can't say strongly enough "No, it is not." In the last two months -- Gopher China had 2,000 people in it. We haven't even got that in GopherCon. The usage of Go is exploding everywhere. And to talk about "Is error handling holding Go back?" - absolutely not. We even know that from the survey data. It's 5%. It's number five below web development on people's list of complaints. I cannot find any evidence to suggest that the verbosity of Go error handling is true or is holding adoption back.

**Marcel van Lohuizen:** \[00:48:21.07\] And just to maybe add onto this point a little bit, even though it is a complaint somewhere in the list, I don't think anyone's really giving voice to specifically what the problem is; only that the current state is "too much a verbose" or something like that. It's an interesting \[unintelligible 00:48:36.16\]

**Dave Cheney:** Sorry to jump back in... The data which everybody seems to be rotating off is "The Go Survey told us that error handling is hard." What the Go Survey didn't say is "Do you want to add Try?" It said "Go error handling is hard", and for the 5% of people, that's the hardest thing about using Go. Marcel and Jonathan did a huge amount of that work in adding errors is and as, adding wrapping into 1.13.

I think there's a false dichotomy of rejecting Try is implicitly rejecting all the people who wrote in the Go survey "Oh, error handling is too hard for me." No, it's just one up.

**Marcel van Lohuizen:** I wanna really talk to this... So I have my own reservations about Try, it's not all perfect, but one thing that's an absolute prerequisite for Try to succeed if it were there is to have something like the package that Rust proposed, like the \[unintelligible 00:49:32.20\] But in order to still to wrapping when you use Try, you need to have something that facilitates wrapping in a defer, otherwise it's not possible. So what do you guys think of that kind of style of wrapping, doing it in defer? I'm curious to hear your thoughts.

**Dave Cheney:** I think it's an abomination.

**Carmen Andoh:** \[laughs\]

**Dave Cheney:** I think the use of forcing through these \[unintelligible 00:49:57.17\] because the Try syntax is so weak is an abomination.

**Mat Ryer:** Peter, you like it though... Don't you?

**Peter Bourgon:** Mm-hm. I won't go all the way to abomination, but I can say that I have never wrapped errors in this way; I never have. I've never suggested anybody do it. It's not intuitive to me. Actually, the first time I ever saw it was in the check handle proposal, that I even considered it could be a possibility.

**Carmen Andoh:** Using defer kind of takes it away from the code, too. So if you're that kind of thinker that wants to keep it close to where it's happening, as you go down the blocks... That's the other downside that I think, from the way that I like to think and use errors.

**Marcel van Lohuizen:** With the check handle approach, one of the complaints was that if you go by the normal recommendation of wrapping errors, you'll end up -- this not often the case, but very often you will end up with calling the same kind of timid Errorf's all throughout your code, with the same message, the same arguments... And because that becomes so repetitive, people would just prefer to not wrap at all. So that was part of the assumption, or what seemed to be the case. So doing it in the defer was also not possible; it was just too slow. So the check handle sort of addressed that issue, but now with defer becoming very performant, it could be different.

Just one point, Peter... Another advantage of wrapping - first, we're having this kind of idiom that also allows us to address some of the other problems, like checking an error on the close if you defer a close from a writer, and things like that. So this idiom might also help solve these other things that are really complicated in error handling right now. This is not really what we're looking at, but it opens up some opportunities to address things that a lot of people get wrong, and that are very hard to explain how to do right.

**Peter Bourgon:** Yeah, so I've just observed two things... One is that I haven't personally seen repetition in locally-wrapped errors, but think that's because I don't wrap the error to say "Failure in the function that I'm in", I say "Error in the thing that I called." This is kind of a style difference but until I had read these proposals, again, I've never seen anyone say "Error in the closing function." That's always been the responsibility of the called, to sort of recontextualize the thing that they called. So maybe it was a file operation, but I don't wanna expose that detail to my callers. That's a decision that I make.

**Break:** \[00:52:35.10\]

**Mat Ryer:** Marcel, I remember in Paris we had lunch. It was beautiful. But we talked about this, and that's where I started to wonder whether I was wrapping things incorrectly... Because I do what Peter described, where I wrap to describe the thing I've just called; I'm not describing this function that I'm already in. And so that's why just setting the same message for within one function, wrapping in the same way - I never did that. And it never occurred to me that you actually could, either.

**Marcel van Lohuizen:** Yeah, there's different style there, and that's why you often see the stutter as in a failure to open a file \[unintelligible 00:54:15.04\] So the usual convention was to not repeat what the error that you're wrapping says, right? But yeah, it did go astray in a lot of ways.

**Dave Cheney:** That was definitely something that I noticed in package errors. \[unintelligible 00:54:36.10\] in your return path, I realized I was just saying the same thing over and over again, and that drove me to say -- well, most of the details of what the thing was doing, if your function is well named, is actually in the name of the function. If you call it "Open file on disk" function, what do you think failed when "Open file on disk" didn't work? So that drives me more to a notion of wrapping at the package level, when you're moving between domains, when you're moving between different purposes.

**Marcel van Lohuizen:** And the other useful thing to add is arguments to that; argument values. But yeah, generally I think what you're saying is right - it should be in general sufficient for wrapping errors.

**Peter Bourgon:** Sorry, I remembered another point, which will be quick - the other thing that a deferred block does is it splits your attention between the error as it exists in situ and other things that happen elsewhere. Sometimes it's necessary when you need to clean up a file, but I think those things are exceptions, and I think most of the time having all of that important context right there is actually a really huge virtue that we should be careful dissuading people from taking advantage of.

**Dave Cheney:** \[00:55:57.05\] Yeah. If Try becomes very popular, or it becomes the question "Why aren't you using it?", you can imagine the classical \[unintelligible 00:56:04.15\] method... Try everywhere down there, because it's -- on a lot of the cloud management code I've written, everything returns an error. These functions are very long, because you're building up a lot of state, and then your little defer handler has scrolled off the screen, where it used to be right there, in the error path. Some people say it's verbose, other people say it's explicit; I think they're actually saying the same thing.

**Marcel van Lohuizen:** One of the problems is there's a certain number of people - a certain percentage of people that if it gets to this verbosity, their choice will be to not wrap at all. So the idea partly is how do you find a happy medium, so as to encourage most people to at least wrap something when that would be a good thing to do. That's sort of the trade-off you make.

**Mat Ryer:** Yeah... And I wonder if Try does that. It probably wouldn't encourage that, would it? It feels like of all the features of the language, it stands out as being the least Go-like, only because... You know, it's a bit magic; it can return -- we don't know how many arguments it returns. It's a macro, so I guess it's not a function; it doesn't have a set thing. Whenever there's two arguments, the optional second argument for example - that stuff actually I feel like we should just always have the second argument and deal with it. That's what I always do when I write code. Say I'm gonna check for value in a map and cast it to a particular type - I'll always check to see if that succeeded or not. I won't rely on the panic, just because I don't really like panics... And it just feels like that it's certainly the most magical proposal we've seen, and it certainly doesn't feel like -- some of the core principle of why I like Go is about this being very explicit, and it feels like this steps away from that a little bit.

The question really is "Are there other people for which this trade-off is then worth it?" If this meant that you could learn the language much quicker... Because I've heard it a lot that when people are learning Go and they see this over and over again, they'll say "Oh, I'm not gonna learn this... I have to keep typing this. In C\# it was automatic, and had exceptions." And it's not really the point, of course, but I wonder there's an audience as well that isn't like what we've talked about here.

**Marcel van Lohuizen:** Yeah, especially for things like generics. We've definitely gotten feedback... Our team, even if a lot of the team members were encouraging it, some manager override, we will not adopt the language without generics. That doesn't still mean you need to add it, but this stuff happens quite a bit, and then what do you do? You wanna increase adoption. That's set. Nothing is set in stone with respect to Try at all.

These things are put out so that people can start to imagine how Go would look like using it, and its benefits; would it get shorter, would it get awful...? By putting it out it also allows people to come up with examples, like "Look, this is really a horrible idea. Don't do this." So either is an option.

**Mat Ryer:** Yeah, and hopefully this show also contributes to that conversation as well. Robert in one of the issues suggested people write experience reports. Is that something that our listeners should do if they've got something particular they want to contribute on this subject?

**Marcel van Lohuizen:** I think it's useful, yeah. The question is in how far are they representable for the programmers at large.

**Dave Cheney:** Yeah, I think you had some observations on that, Peter... Our little community, that we can get on video conferences and talk - how representative is that actually of the actual corpus of Go programmers? What has Russ estimated it to be like - 1,5 million? It sure as heck isn't at 1,5 million on any of the social forums where Go is discussed, that I'm aware of.

**Carmen Andoh:** \[01:00:12.25\] \[laughs\] Yeah, there is definitely a local minority... And you asked, Mat, is this going to be useful for people maybe in the C\# community, who just get it out of the box in their language? And I think it's super-interesting that language design, and looking at the evolution of it -- Rob Pike even talked about this... I think it was almost probably like ten years ago, at OSCON, the "Public Static Void" talk; I'll link it. It's fascinating, because he quotes the list... "Gabriel, I'm always delighted by the light touch and stillness of early programming languages", and then he talks about how Java \[unintelligible 01:00:45.11\] ten years old, and now Go is ten years old... And we're thinking about this idea of inclusion. And inclusion has and always will have trade-offs. It's a paradox.

So that's the kind of thing that I'm wondering, like "Okay, do we include to make people who are used to and entrenched in their deep mind-meld of their other programming language, to include them into the Go fold, at the cost of alienating Go programmers?" And that's really a hard question to answer. I'm happy I'm not on the decision-making side of this.

**Peter Bourgon:** I totally agree that this is hard to answer. I think that it's almost impossible to come up with a correct or even optimal answer. And in this situation, I think the right thing to do is to instead try to come up with a framework. Like, what is a framework you'd use to decide what changes we should make, what we should push back on...

As far as I can tell, or what makes the most sense to me, is that framework is distill a language down to its core principles. And we can argue about some of them, but it feels to me that explicit error handling in situ, without exceptions and all these other things, is one of the core principles. And if that's true or not, I don't know... But this feels this way to me.

**Marcel van Lohuizen:** I think that's where we maybe disagreed on this, that Try to me is still explicit error handling. It's not the exception; it doesn't fall in the exception class of error handling at least.

One thing that I try to do when I'm writing code is always think "How would this language feature work?" And then I often write my code twice. Once with the new features, and of course it won't work, and then I throw it out right the way it would be, just to get a feel on how would it be, or how would it look like if we have this new feature, how would I feel about it, how would I structure things differently... And that gives an interesting idea on where it could be.

**Dave Cheney:** On the subject of trying Try... I know a number of people have tried it, people have looked at it statistically, others have said "Oh, I rewrote my code to look at it, and it made it shorter", as if shorter is a goal... But the point I wanna make here is that we are experimenting with code that already works. We are taking programs which we have already correctly \[01:03:12.27\] error handling, correctly tested, correctly fixed all those paths, and then adding a little (as you call it) syntactic macro on there to clean it up a little. We're not starting with new programmers trying to understand how the program operates using this new feature; we just think of all the things that Go fixed over time, how it made our code shorter. We were like "Yes, it worked before, and now it's a bit shorter."

I don't think it's correct to apply Try to an existing codebase which we know very well, and say "Oh, in this whole set of cases where it could clean up the error handling, it has made this a little bit shorter." People look at the size of the diff as some kind of success factor. "It made my code shorter. It made correct code, which was already working, which was already tested and already new, shorter." I don't think we can extrapolate that to writing a new program.

**Mat Ryer:** \[01:04:09.24\] That's a fair point. That's quite an interesting one.

**Carmen Andoh:** I wanna go back to something Peter said and something that I wanted to follow up with about inclusion, and things that I'm also seeing in the chat... Which is inclusion is important, but maybe the way forward is also really making an effort to teach newcomers to the language about why these things are the way they are. Having that as a way forward... And Peter, you say "Distilling it down to just core language features", and making sure that -- you know, we always as learners are trying to bridge from existing knowledge. We have existing mental models, and we have existing ways of doing things, and we look left... And I think that having something that's educational might help with this, and is also another way of attacking the problem, if you will.

**Marcel van Lohuizen:** I think that's right, and to address Dave's comment - it's not always about just being shorter. In a lot of the examples I looked at, or a good chunk of them, using things like check handle or Try didn't actually just make things shorter, it made the essence of what the code was doing clearer. These were cases where you would just have repeated fmt.Errorf's, or whatever... They were getting in the way; sometimes they were as much as 50% of the code, and it was just hard to see what the code was actually doing in the meantime. You could have factored out different functions, but that's not necessarily making things better either... And this was some good quality code; I'm not talking about some crappy code that was out there, that looked better after using it. So there are cases where I think it really makes things clearer.

**Peter Bourgon:** I don't really want to counter that point, but I do wanna bring it back to something we mentioned at the beginning of the show, which is that in a lot of cases, and from some people's perspectives in most cases or even all cases, the error handling doesn't distract from what the code is doing. The error handling is often the most important part of what the code is doing... And at least it seems to me that Go's perspective from the very beginning has very much been aligned with this, that the sad path first is how you should think about constructing reliable code.

Now, we can talk about whether the characters fmt.errorf and all the ceremony that goes with that is necessary, and I think probably there's a good case to be made that it's not, but I'm not sure that -- I don't know, a counter-point might be that all that stuff you say is distracting is actually as important, or even maybe more important.

**Marcel van Lohuizen:** I would agree with anything but a wrapping string \[unintelligible 01:06:45.17\] These can get pretty verbose and in the way of visually being able to see the program. It becomes sort of visual overload. If you were just returning the error plainly, it would already get clearer, but that we don't want; or in many cases we don't want. If you add any code in your error block, by all means, that should stay there. You should not replace it with Try.

**Peter Bourgon:** Yeah, then I guess it's just a matter of opinion; does the prefix string confuse things...? For me at least it never has, but I can understand for some people it might.

**Mat Ryer:** Well, the point of it is to add information, isn't it? The point of it is to make that more clear, what's gone wrong.

**Marcel van Lohuizen:** Yeah, but if visually 50% or 60% of the characters on your screen are related to error messages... You know, it's just a visual overload to see what the code is doing besides of that. It should be in proportion.

**Mat Ryer:** Yeah, I mean... I tend not to read code top to bottom like that; I tend to jump around a bit more. That's why I always try and do that line of sight thing, have the happy path down one edge, and then to solve the errors and handle things \[unintelligible 01:07:59.08\] and all that stuff. That for sure helps with this kind of glanceability. But what's nice is to be able to jump straight to a point and a final and then see what's happening. And to be fair, Try doesn't stop that. I mean, you would just be in that case returning the error untouched... But I've never felt like the error handling bits got in the way; in fact, they're where I need them when I'm maintaining code as well.

**Marcel van Lohuizen:** \[01:08:28.15\] And you're right, by the way - if you have no annotations, and all the annotation in the code is related to error handling, it actually works quite well. It's the cases where you have one extra indent, where you have sort of a normal happy path, where it starts to get annoying.

**Mat Ryer:** Yeah. But I suppose Try would get rid of the indent for errors, wouldn't it?

**Marcel van Lohuizen:** Yeah.

**Mat Ryer:** I mean, again, I could just be like "I feel like I've got something that I'm gonna lose, and that worries me", but I feel like there's value in that stuff, and I'm glad that that is part of this conversation, too.

**Marcel van Lohuizen:** Yeah. And again, the whole argument from the Try proposal, or the whole result from the Try proposal can be that we are now much more confident or can much more clearer express to the newcomers to Go why we don't have something like Try. That can very much be it.

**Carmen Andoh:** Yeah. I'd like the idea that we have a historical artifact that says "This is why we know it won't work." The other thing that I just keep thinking about - you used the word \[unintelligible 01:09:28.23\] We've talked about it in past podcasts, Mat; we talked about readability... Rob Pike has said readability is paramount... But readability is still quite subjective, and it can be also very personal to the programmer. So we can fall into bias there as well, and I did wanna mention that.

But again, it becomes like -- I have a neural groove that's well-worn, I start to look for familiar patterns and shapes... If you change that shape, you're adding a conceptual overhead that I don't want... And that's why change is hard, but I just wanted to mention about that.

Kyle Simpson - he's in the Javascript world, and he wrote "You don't know JS", but he had a lovely talk (I'll try to find the link) about readability, and the assumptions that we make about terseness versus verbosity, and all the other things, and just trying to contextualize that... And I wonder if we can have an equivalent for Go. That would be great.

**Mat Ryer:** Yeah. It's funny, I'm one of those people that loves it when there's a new feature; I get really excited... But it's not that for me, for sure. Because I love when they add new things. It's more about whether this fits in as the rest. It's whether it fits or not.

I'm afraid we've run out of time, but this has been a very interesting discussion. Thank you so much to my panelists and my co-hosts - Marcel, Dave, Carmen and Peter. We will see you next week!
