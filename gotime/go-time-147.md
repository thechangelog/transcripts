**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're doing a very special live Q&A episode, because yesterday Jon Calhoun, who is with us today... Hello, Jon.

**Jon Calhoun:** Hey, Mat.

**Mat Ryer:** Yesterday, Jon, you posted on Reddit, asking for people's questions, didn't you?

**Jon Calhoun:** Yes, I did.

**Mat Ryer:** And what did you think? Quite a good response, isn't it?

**Jon Calhoun:** Lots of questions.

**Mat Ryer:** Lots of very good ones... And we're going to do our best to answer them. But don't worry, we're not doing it on our own. Joining us today, Peter Bourgon and Roberto Clapis. Hello!

**Peter Bourgon:** Hey!

**Roberto Clapis:** Hello.

**Mat Ryer:** Welcome. Peter, how long have you been doing Go?

**Peter Bourgon:** I guess since the beginning, depending on what "doing Go" means precisely. I remember the day it came out; I had been at that point working a lot in C++, and basically getting frustrated with how difficult it was to do concurrency stuff correctly... So it was very timely and appropriate, and I remember building \[unintelligible 00:02:35.03\] on day one and being very frustrated and confused as to why it wasn't fast. That was my start.

**Mat Ryer:** Hm... And what about you, Roberto? How long have you been at it?

**Roberto Clapis:** Five years.

**Mat Ryer:** And what made you get into it?

**Roberto Clapis:** Basically, I was using a piece of software that was extremely slow, and took way too many resources, in my opinion... So I just decided "Let's rewrite it in Go and see how it goes." And it was much better.

**Mat Ryer:** That's a very interesting thing. We've got some questions that relate to that, and I think that's kind of an interesting clue... So that'll be interesting. How about you, Jon? How long have you been doing Go?

**Jon Calhoun:** That's a good question...

**Mat Ryer:** You didn't expect it? \[unintelligible 00:03:21.28\]

**Jon Calhoun:** No, I've never had anybody ask me that one. This is a first.

**Mat Ryer:** \[laughs\]

**Jon Calhoun:** It was probably like 2012-2013... That one stemmed from - I was working on a project where we had to talk with a bunch of APIs concurrently, and it was written in Ruby... So it was kind of just annoying, because Ruby handles one request for a server you have up - if you're using Ruby on Rails at least - and while we could do all those different requests in threads and wait for the response, it was annoying that our server would basically sit there doing nothing while it waited for some APIs to respond... And I was like "If we could actually have a server that could handle multiple requests at once, there's no real reason why this one can't do it." It just wasn't set up to do it at the time.

**Mat Ryer:** \[00:04:03.05\] Yeah... See, that's another thing - you get a few things that it does out of the box, that are very attractive. And actually, one of our first questions from the Reddit feed is from dlibian. Dlibian asks "What kinds of projects are best for learning Go?" For people that really want to start to learn Go, are there any types of projects that are more suited and more suitable, or can they just sort of pick any problem and go after it? What do we think?

**Jon Calhoun:** I think generally speaking, diving in is more important than getting the perfect project. For me, I always like doing things on my local file system, like opening up files, appending to them maybe... Just simple stuff like that that I can actually go look at a file and verify that it worked as I expected. Not having to worry about servers and that sort of stuff, that doesn't necessarily make it super-complicated in Go, but it's harder to verify everything... So that's where I tend to start. But I think each person is gonna be different.

**Peter Bourgon:** I totally agree with this impulse - simple, and in a domain you are familiar with. You don't wanna be learning both a new problem and the language at the same time. Pick the thing to spend your energy on... Ideally, something you've written before, and it won't take you like a month.

I've heard Go described as like a DSL for writing network servers, which resonates with me. All else equal, a simple thing that deals in packets and requests and stuff I think is probably the type of project that's gonna expose you to the most and widest variety of parts of the language, I think.

**Roberto Clapis:** For me, one of the first things that I wrote was a web crawler... And I think that in general, Go shines best in tooling. When you need to do something - I don't know, a repetitive task that you don't want to do by hand, so you go automate it with Go; no UI, no nothing, you just write a console program and you run it... I think that's, in general, a good thing to start with.

**Mat Ryer:** Yeah, that has the nice benefit of also being able to solve a real problem that you have, and I think that's always an advantage. When you're learning something new, if you can solve a real problem with it, then you're in a much better position to focus your learning. You have to learn the bits you need for this thing. So it's quite a nice way to cut out a lot of what you could be learning and really focus on something and then at the end of it, hopefully you've got something useful.

I know teams that have done that as a way of introducing Go into the team. They've sort of found a little problem that they've all got, and somebody's just taken it upon themselves to solve it... And usually, it's a tool, it's exactly that; some command line thing, something that the developers are using. So it's not gonna go straight into production or anything like that. Something that you can have a slower introduction to. I think that is kind of a good strategy, and then yeah, I echo what you say about the domain as well.

**Roberto Clapis:** One thing I found really funny is that in a company a friend of mine works in, they started using Go to generate code for Java... Basically, to generate some repetitive code, they found that the text template package in Go was working pretty well for them, so they just generated some code with Go in another language, because that was just an option, and they started using Go with that... Which I found pretty funny, because many people say that Go has the downside of having to generate code if you need to write generic algorithms, and that was kind of a funny experience to have...

**Peter Bourgon:** I also wouldn't expect that Go's templating language, which I think we could all agree is maybe not the best in the world, would be the best default choice for something like this.

**Jon Calhoun:** I wonder if it had to do with the fact that it's built into the standard library, and in a lot of other languages - that I'm aware of, at least - it's not really built into the standard library.

**Roberto Clapis:** \[00:08:04.27\] Yeah, that and the fact that it could very easily expose language functions that you wrote in the language, to the templating language. So it was very easy for them to just write most of the logic in Go and just expose the function that they needed to the template.

**Mat Ryer:** Yeah. Another question that was asked by ninevolt is "Why should people try Go?" Some people are kind of skeptical, and I understand this; there's so many new things... You don't wanna have this shiny object syndrome where you're just chasing everything and you never really get good at anything... So some people therefore become automatically skeptical and hold back from learning a language. This is the case for this particular questioner... And they asked "Is there a kind of convincing sales pitch to convince people to try something with Go?"

And by the way, they are putting together a summer sound bites thing... So if your answers could be awesome little sound bites, then that'd be great. \[unintelligible 00:09:08.15\]

**Peter Bourgon:** Yeah, we need to drive all human conversation more towards the Twitter model and away from reasoned discourse. Yeah, understood.

**Mat Ryer:** Yeah, yeah. Because it's what works, isn't it?

**Peter Bourgon:** Yeah, clearly. We're all building our personal brands here, so this is also -- it's all part of the big picture, yeah.

**Mat Ryer:** By the way, that's a great example. That's going in. \[laughter\] \[unintelligible 00:09:29.28\] No, it's perfect.

**Jon Calhoun:** I'm waiting for Pace to pivot into Zoom plugins that count your characters while you're talking...

**Mat Ryer:** \[laughs\]

**Roberto Clapis:** Wow. Let's make that never a reality, please.

**Peter Bourgon:** Too complicated. So this is an interesting question, because there's a period of time where it wasn't clear that Go was gonna stick around, and you did need to make the pitch to get people interested. It's like, "Well, I understand you're not convinced, but here's some use cases, and here's some things that it has worked at, and here's some success stories." But I think we're past that point. I think Go has carved out a reasonably well-defined area/context in which it is useful, and I think if you look even a little bit, you'll find the success stories... And often, if you don't look at all, you'll find the things that people dislike about it, and you can get a pretty good idea of what's good and what's bad, and if it's appropriate to your use case.

So I think we're at a point - and this is my personal opinion, where if you're not convinced, then fine. There's nothing wrong with that. If you need someone to pitch the language to you, take some of your short life on this Earth and spend it in a way that brings you more joy. It's fine to say "Go isn't something that's gonna be useful for me right now" and move on to something else, in my opinion.

**Mat Ryer:** Absolutely brutal, as expected. Thank you, Peter. Roberto?

**Roberto Clapis:** My answer is a little bit less brutal... I think people should learn Go, because it makes their code better, even if they decide not to use Go anymore afterwards.

**Mat Ryer:** So how does it do that?

**Roberto Clapis:** I've found out that after years of using Go, my code in other languages which I still use is better, because I try to keep the line of sight, stuff indented to the left, code is simple, stick to the native types, do not create unnecessary types where they're not needed... I would also say that the lack of generics so far forced me to try to write the simplest code, and code that was closer to the data that it was touching, instead of it just being generic and maybe inefficient.

Now I've found that even when I write TypeScript, which is the other language that I use the most, and Java, my code is more readable.

**Peter Bourgon:** Yeah, Go biases you away from abstractions in general, and I think this impulse is probably extremely good in many different languages.

**Roberto Clapis:** Yeah, I agree.

**Peter Bourgon:** Or at least it moves you in that direction.

**Jon Calhoun:** I would generally agree with Peter, that if you haven't been exposed to a scenario where you've already considered Go, there's probably not much at this point that's gonna sell you, and I think trying to make the sales pitch is just not gonna resonate.

\[00:12:06.25\] The only thing that I would probably add to what Roberto added is that the community in Go is also something that I think other languages should sort of look at and get an example of at least -- it's one of the better ones, in my experience, so getting a feel for what it could be and making sure they set the bar at the right level, versus just sort of accepting a toxic community...

**Mat Ryer:** Yeah, I think that's a great point. I think these are all great points. For me, I'd say that in particular if you're building web servers, web services, JSON APIs, those kinds of things, Go does a good job with those kinds of things. You get a lot out of the box for free. For example, each HTTP request runs in its own goroutine because of the standard library, the way that that works. So kind of automatically you get a level of quite safe concurrency to operate in... And you may get that also with other languages.

Another point is that there shouldn't be a kind of language war thing going on as well, which just seems to very naturally happen quite a lot. People want to know why is Go the answer, and really, we don't have the question. So it depends on what that question is. Some languages are great at different things, and I think that's probably something that is worth avoiding in yourself early. I know that I used to think more like that, and a more relaxed, open-minded attitude - I think that helps. Because like you say, there's things in other languages which we can learn from as well.

Pure functions is one example that Rust makes extensive use of; in fact, it's the only way you can do it, I think... And you can then write pure functions in Go and take some of those lessons if you want to. So that sort of stuff is nice. But yeah, anything that involves web and APIs...

I think tooling is another great area. When you've got a task, something repetitive you wanna run through, Go is nice; it's not just a good way to learn, but it also does quite a good job, even if you haven't written it perfectly. I think it's quite cool.

**Peter Bourgon:** I just wanted to extend that a tiny bit, because you touched on something that I've seen over and over in the Newbies Gophers Slack. I think it's a little bit like what Go is or isn't suited for, and you said it's really good for writing web servers - I totally agree, but I think something a lot of people don't understand is that the Go model of what a web server or HTTP request is substantially different from a lot of other languages. In Go, the central model is the request itself, and the path that it takes through the handler stack, in the same way that the execution path takes through a call stack. So this is what Go wants you to think about, in terms of this relatively mechanical bit of the thing... And in many other languages, the model is completely different - the model-view-controller idea, where it's like a route being matched to a controller that interfaces with domain models in a repository. A lot of people who are used to this latter one come to Go and find it very low-level and unproductive, and I think for them it actually probably is.

To go back to the question, like "What is it a bad fit for?", if you wanna build in the consultancy style of like high throughput, very rapidly procured, kind of cruddy web services, I think Go is probably not a great fit, because that's not the model that it uses to talk about HTTP. I think this is a really interesting thing that comes up over and over again. I don't know, maybe that's just me.

**Roberto Clapis:** \[00:15:46.16\] I would say that to address that, some people wrote frameworks. I know that there are some frameworks that when you use them, they don't feel like Go, but they allow you to write Go in other parts of the code, and in the entire HTTP kind of CRUD stack, or an MVCstack is handled by the framework. But I would agree with you... There are other things in which Go is not good for.

For example, it happens all the time on Twitter when people discuss that some things should be made in Rust, or in Go, or in C, or stuff like that, and I would say that most of the time, one of the two is the better choice. It's like, if you need to write firmware for an embedded device, and there's a very limited amount of memory - yes, you could use TinyGo or TamaGo, which are two perfect options, but I would just say that maybe that's not what you're looking for. If you have to write a real-time application, Go still has a GC. You can write GC-free Go. It's not pleasant. So just use the right tool for the job.

**Jon Calhoun:** A follow-up question to this is bestform had asked "Do you follow other programming languages? Do you compare their design choices, and the ones they're making, with what Go is making as design choices? If so, which ones are you following? How has that influenced you?"

**Roberto Clapis:** I'm following TypeScript, JavaScript, Rust and Java, mostly... And I have to say, there are some things that I really like about those languages, there are some things that I have to use from those languages... I try not to do the comparison. I know what the languages are for. Sometimes I carry over some concepts, but it doesn't influence me too much to know other languages or to follow other languages.

**Peter Bourgon:** Do you think about them in terms of their founding principles, or theories? Or at a sort of more abstract level, and sort of compare that with Go? I find this often quite interesting, although maybe ultimately non-productive...

**Roberto Clapis:** You know, I never think of it in these regards; I just use them, and I try to click in the mindset. When I speak English or when I speak Italian, it's not like I try to think in the other language and see how I would put the sentence in the other language. I just click into it and try to think in it.

I've tried to build UIs with Go. I still prefer the TypeScript approach, some things... And I've tried to build stuff with Rust, and at one point I just gave up and I said, "Okay, I'm just gonna use Go. It doesn't work for me." But most of the time, when I start with a language, I just stay in that mindset.

**Jon Calhoun:** A follow-up to that - since you're switching mindsets, one of the big things in Go is you write readable code. Do you find in other languages that you don't prioritize that as much, just because that's kind of the norm in the language?

**Roberto Clapis:** Yes. I find Java unreadable. It's a big limiter for me, because Java uses very long lines, and most of the time you have an auto-format there that will split the line automatically. So I'm used that in Go one line means one thing, and in Java sometimes you have like 24 lines that are saying a single statement. That kills me.

**Peter Bourgon:** What I find super-interesting is that even what constitutes readable is completely different from ecosystem to ecosystem, or person-to-person also. This subjective definition difference is also super-interesting to me, because I think for a lot of people, for example in maybe the Rust sphere (I don't know), readable is like what is somewhat terse, and compact, and conveys the most semantic information; not objectively the most, but a lot of semantic information, in a few characters. But for Go, simplicity has a completely different meaning. What we mean when we say it is totally something else.

**Jon Calhoun:** I think Rust is probably the one that I see this the most in, because people will show me -- I think it's \[unintelligible 00:19:52.08\] and they'll show me code that does something... Like, they'll compare it to error handling in Go, and they'll say "Look, looking at if err != nil is distracting", and then they'll show me the example in Rust, and I'm like "I don't know Rust, so I know that's my issue here, but I don't know what that code is doing." It just is not clear to me.

\[00:20:11.11\] So for me, at least in the Go sense, readability is somebody who basically is just a junior programmer could look at this and probably get a pretty good idea of what it's doing. But in Rust, I think you're right, they're viewing it differently. What they consider readable is different.

**Peter Bourgon:** And this error handling thing is such a great example, because in Go error handling is explicit. It's part of the philosophy. Go considers error handling to be programming, and in a lot of other languages it's just not modeled that way. That has ramifications.

**Roberto Clapis:** Right. But I also think that it matters how much of your brain you're willing to dedicate to the language, instead of the code that you are writing, instead of the logic that you are writing, and how much you're willing to dedicate to the actual problem that you're trying to solve. Sometimes Go might exceed on the other side, but I like that when I read Go and when I write Go, my brain doesn't invest any energy in "How do I do this in Go?" I know how to do this in Go, and I just do it, which is not true in many other cases... So I like that simplicity and I like that I don't have to focus to write Go on Go, but I can focus on something else.

**Break:** \[00:21:27.21\]

**Mat Ryer:** There's some interesting questions actually around some of the specifics of how we actually do things as well. There's a lot on structuring, which I think we'll come to later, but there's one that I quite like here, which we can discuss, and we may have differing opinions... To constructor or not to constructor. Some languages make heavy use - in fact, sometimes they're compulsory; in order to create a class you have a constructor. In Go you don't really have classes, but you can still have this idea of constructors, where you just sort of have a function, usually pretty fixed with new, to create something, and then it returns the thing, and maybe sometimes an error, if there's some work to do to get that thing. How do we feel about constructors?

**Roberto Clapis:** I even have a follow-up question - how do we feel about builders? Once we decide on constructors, what about builders?

**Mat Ryer:** Okay, let's do constructors then first, and we'll do builders after.

**Jon Calhoun:** I can start by saying that when I started writing Go, I wrote a constructor for everything. And I think part of that stemmed from -- my history is Ruby and Java. And Go in some ways just sort of felt a little bit more like Java, because it was typed, and some of that stuff... So I think I just jumped into that mindset of "I need to write these." And then - I don't know when, but at some point I kind of realized that a lot of these constructors were not useful. I didn't need them at all. So I started taking a step back and asking myself "Do I really need it for this type? Why don't I just expose these fields and let the developer set them?"

\[00:24:24.08\] So I don't really have a specific "Yes, you should use them/No, you shouldn't" type thing. For me it was just stepping back and deciding, case by case, is it necessary? And if it wasn't necessary, I just tried not to do it, because it didn't seem worth the effort.

The other thing I would add is that if you are using a constructor, I think the common approach that people would take at first is to write -- like, if you're writing a thing, you write a new thing function that creates it... And I think there's a lot of times where you can make your constructor function a little bit more clear as to what it's doing. The database SQL package is a good example, where you call sql.open and it returns a db instance. I think that makes way more sense than sql.newdb, which isn't really clear what it's doing.

**Mat Ryer:** Hm... So if it could be like a verb...

**Jon Calhoun:** Yes. If you can explain what it's doing, I think that makes more sense.

**Roberto Clapis:** And you're allowed to have multiple names in that case, because you might construct something, but performing different actions.

**Mat Ryer:** Hm. Peter?

**Peter Bourgon:** Yeah, like in any language, there's not one answer that is generally applicable. Sometimes constructors make sense, sometimes they don't. The one thing that I think is important to understand when thinking about this question is this fact of Go that except for very few exceptional circumstances it's always possible to construct the zero value of a type. Basically, there's no way to avoid allowing your callers to do that. So the zero value of a type is always something that can exist.

With that in mind, it would be cool if the zero value of a type were useful. That's also like a proverb. If you can create a type where that is true, and all is equal, then maybe that's a good idea. You don't need a constructor; you can just use it in a useful way, without needing to initialize it. Of course, that's not always possible. If it's not possible, then it's probably better to use a constructor, because that gives you, by convention, control over what the -- I said "by convention" instead of like... It's not enforceable by the compiler, but it gives you some control over what the state will be in a way that setting fields in the caller context doesn't... So it's pros and cons. No single answer.

**Roberto Clapis:** Have you ever written a destructor?

**Peter Bourgon:** It's not possible in Go. It's finalizers, but that's something else, I guess.

**Roberto Clapis:** Yeah. Have you ever written a finalizer?

**Mat Ryer:** No, I haven't.

**Peter Bourgon:** I have, but it was almost always a mistake. \[laughter\]

**Mat Ryer:** I'm glad I haven't now. But that's interesting about the zero value. There are some examples, like the bytes buffer. You can just kind of say "I want a bytes buffer" and you can start using it immediately.

One of the things you get with constructors is you can take in required arguments into the constructor. So then of course it's not possible to get the type, according to the API, without providing those values. Of course, the zero value is always there.

I think one of the other counter things I hear is that in a way you're hiding what's happening. You could be spinning up goroutines, you could be allocating all kinds of memory inside a constructor, and by avoiding a constructor, it makes it very clear what's happening. If you're asking your user to create the instances, they see exactly everything that's going on.

But to be honest, I think for me the convenience -- I went through a similar evolution where I used to always create them, and then I went off it and I started to just try and get the zero value to be useful. And then almost all of those types evolved eventually on their own into basically needing a constructor.

So yes, but for me it depends on the case, which doesn't help. For services and things like this, if you've got these sort of service-level objects, structs and things, then I do tend to do it, because usually they have dependencies and it's kind of a nice way to tell that story.

\[00:28:16.16\] But yeah, it depends... If I was building some lower-level thing, or something that had more of a data structure component to it, I think I'd probably think maybe differently. What do you think about the options as well, a way of customizing things by passing in little option functions, which can then run and modify things?

**Peter Bourgon:** Functional options is a configuration pattern, right?

**Mat Ryer:** Yeah, right. What do you think of those?

**Jon Calhoun:** I can start by saying that I don't like builders that chain. In Go they just don't feel right to me half the time. I don't know, it probably comes down to like I've been bitten by error cases where one of the ways that they'll handle errors in a builder pattern is they'll have the created object have an error field, and you're expected to check it once you've built it. And I think it's really easy to miss that. Whereas if you use functional options instead, it's much easier to make your constructor actually return the thing and an error, and you know clearly what happened.

**Mat Ryer:** That's a good point, actually... If in creating or in constructing the thing, if something could error, that is probably a case for having a constructor, isn't it?

**Roberto Clapis:** Yeah, I agree.

**Jon Calhoun:** We're all nodding our heads, for people who can't see us.

**Roberto Clapis:** Yeah. And even for the builders that you were talking about, what do you do if something in the middle of the chain errs? Does everything else become a null operation? But what if some of the parameters that were passed actually called a function, or stuff like that? In that case, will it just return the error at the end? And how do you know what was executed?

**Mat Ryer:** The ones I've seen that have done well with those fluent APIs, they just change state; they're basically just changing internal state in a controlled way. They can't error. So that's why. And then usually there's an operation at the end, which is the big operation, and that one will return an error potentially. But they do make testing hard, or they can make testing hard if you wanna stub things out, or have some kind of abstraction on that stuff. They can get in the way a little bit, since they're returning the concrete type often. So you can't do the trick of creating your own test interface in order to provide different mechanisms for it, or a different implementation.

**Roberto Clapis:** Right. The one good use of builders that I've seen - and recently I had to use this - was for security reasons. We wanted to make sure that a certain object was constructed in a precise way by passing arguments in a certain order, and nothing would ever happen out of order. Basically, in the middle of the chain you would call a certain function that would return a new type, and on that one you could specify more stuff. So basically, it returned types that were not the entire thing, but in every phase you had to specify some things, and then you had to move on to the next state.

**Mat Ryer:** How did you name those types? That sounds like a nightmare.

**Roberto Clapis:** We still have to decide. \[laughs\]

**Mat Ryer:** Yeah, that doesn't sound like an easy problem... Because they're all the same thing.

**Jon Calhoun:** He's like "We started this six months ago and we still haven't decided."

**Mat Ryer:** It's just gonna be 1, 2, 3, ain't it? Step one...

**Roberto Clapis:** This issue was opened a month ago, and we haven't decided on the names yet. So yeah, you got a problem with that.

**Peter Bourgon:** Wait, I'm trying to understand... So you have a thing and a high level, which is like in the end a sequence of substeps, or something like that, right? And you're using the builder pattern -- you're modeling the substeps as different types, and you're using the builder pattern to move from one substep to the next. Is that right?

**Roberto Clapis:** Yeah, basically I can give you the concrete example. We are building a framework to develop web applications, and when you set up your entire server, you register handlers. After you have registered handlers, you're supposed to register plugins. That is something that will intercept requests and responses, for security reasons. Most of the logic will just be in handlers.

\[00:32:06.25\] And then after you're done, you start a server, and at that point you are not supposed to change nor the handlers, not the plugins anymore. And vice-versa, when you install a plugin, you still had to register a handler at that point. We could do this by panicking, if you did things out of order... And this is still on the plate. But we found out that checking these at compile time, making sure that if your code compiles and you did stuff in the right order felt like a good thing to provide.

**Mat Ryer:** I've genuinely never seen that as an example in Go.

**Peter Bourgon:** I would love to have a deeper conversation about this, because I have many, many more questions that are not appropriate to this call... But okay, we'll see.

**Roberto Clapis:** I can discuss it later.

**Mat Ryer:** Interesting one.

**Peter Bourgon:** Yeah. Just maybe quickly on functional options - I really liked them for a long time, but again, think about the actual property of the language or the invariant that they encode... If you're using functional options, your user can always not pass any - that is a valid state - which means that with functional options you can always create a zero value for a type, in a sense, by not passing any options... Which means that they're good when it's rare that you need to change anything away from the default value. When you do, you only wanna specify one or two things that are different.

So if your type has these semantics, then they can be good. But with that said, I rarely have types that work that way, and when I do, it's often equally easy to configure them in a different way. This has been sort of my experience. These days I don't really use them anymore. I think the way they pollute or change the GoDoc for a package, or make it slightly harder to understand outweighs the benefits that they give you.

**Mat Ryer:** Okay. Well, moving on, we have another question here from datacharmer... And I'm gonna paraphrase this, but it's basically saying "You know how when you parse dates in Go - that's weird, ain't it? This magic date - it's Monday, and it's January... It's a really specific time - why is it like that, and do you think it's weird?"

**Peter Bourgon:** I'm so confused by questions like this. I'm so confused.

**Mat Ryer:** Why?

**Peter Bourgon:** Because everything in a language is like -- they made a lot of decisions, right? Why is it func and not fun, or function? Why are declarations in the order they're in? Can you do var blocking with parentheses? There are so many things that just are...

**Mat Ryer:** So you just accept it.

**Peter Bourgon:** It's just something you have to learn.

**Mat Ryer:** It's just a law of physics.

**Roberto Clapis:** I would say that's beautiful, actually. That's one of the things that I like the most about the date stuff in Go... Because when you think about parsing a date, usually you have an example in mind. It's like, I've tried to use other libraries, especially Java ones, for date parsing. They're not intuitive at all. Yeah, the Go one is odd, but once you have understood it, it's very easy to use. It's like, you just write a date in the format you expect it to come, which is -- this is user-centric APIs.

**Peter Bourgon:** It's not hard, yeah.

**Mat Ryer:** Except it's not your date, is it? You have to use the right values in each slot, essentially. And they're numbered, aren't they? It basically counts up, if you notice...

**Roberto Clapis:** Yeah, exactly.

**Mat Ryer:** Yeah. But that is odd.

**Roberto Clapis:** Well, you have to remember \[unintelligible 00:35:34.04\]

**Jon Calhoun:** It doesn't help that the example they tend to give doesn't show it obviously that it's counting up.

**Mat Ryer:** Yeah.

**Jon Calhoun:** The one they give is like Monday, January 2nd, 15...

**Mat Ryer:** Yeah. Three, 04, 05...

**Jon Calhoun:** Yeah. And the way it's put there, you don't realize that it's really going 1, 2, 3, 4, 5... Because 15 - well, that's three, but people don't quite realize that it's 3 PM. That throws them off.

**Mat Ryer:** Yeah. And MM/DD/YY - that style... I feel like that is used in more places. What do you think?

**Jon Calhoun:** I think the hard part is most MM/DDs have capital Ms and lower-case Ms, and they mean different things...

**Mat Ryer:** Yeah, that's true.

**Jon Calhoun:** \[00:36:15.08\] And you still have to look something up. So I think at the end of the day, the short answer is that you're gonna have to look something up. Looking up a specific date is really not that big of a deal, compared to looking something else up. And there's tooling that makes that easier.

**Peter Bourgon:** Yeah, I always have to look up the \[unintelligible 00:36:29.08\] time stuff personally. I never remember that.

**Mat Ryer:** Okay, well I'm with the questioner now. I think that is a bit weird. But the answer is that's just the way it is. This actually could be quite easy; we could just hammer through these with that, if that's our answer. \[laughter\]

**Jon Calhoun:** That's just the way it is...

**Mat Ryer:** Yeah. The next one actually, which we got a couple of times, is "How come there's no enums/enumerators in Go?" So this is that thing in other languages where you get a compiler-time way of declaring a set of values that are only valid for a particular type... And you get kind of compile-time help there. It's useful if you've got status, and you've only got four different statuses that are possible. You can make types give you safety there. What do you think about that? Because there is the iota pattern, which is basically how we do it most of the time. What do you think about this?

**Roberto Clapis:** It's the only feature that I miss in Go. That is the one thing that I would add to Go. I would not add generics, I would not add many other things. Enums is the one thing that I miss.

**Mat Ryer:** Yeah.

**Jon Calhoun:** Go ahead, Peter.

**Mat Ryer:** Please disagree.

**Peter Bourgon:** No, I don't... I just wanted to say it would be nice, definitely.

**Mat Ryer:** Oh, you've not disagreed? I'm sorry, it's supposed to be controversial.

**Jon Calhoun:** He didn't do it.

**Peter Bourgon:** Next one. When we talk about frameworks we'll get in the weeds.

**Mat Ryer:** Okay. But Jon, you were going to say something about enums.

**Jon Calhoun:** I was gonna say, iotas terrify me, because I always worry that somebody's gonna insert a random one in the middle of the iota values, and all my code is just gonna break. Every time I go to use them, I get terrified of that, and I end up just writing strings for everything, because I'm like "I know these are gonna work if they're stored in a database, or something." Am I the only one that feels that way at times?

**Peter Bourgon:** I'm also afraid of iota. I tend not to use it.

**Mat Ryer:** To be honest, I use strings.

**Jon Calhoun:** So the advice we give everybody, we don't use.

**Mat Ryer:** Well, that's the Go way to do enums, as I understand it. But yeah, the alternative is just to have constants with strings, or constants with integer values. You can still document them, you can still describe it... And usually, if you use a prefix, that's a quite useful way. HTTP status is an example. They've got all the status codes as constants, and they've also done the HTTP methods, which - I don't know if we needed those, but we have them. So you can do http.methodget, methodpost, methodpatch.

**Roberto Clapis:** But that is weird.

**Mat Ryer:** Yeah. It's longer to type that than to type the string.

**Roberto Clapis:** Right.

**Jon Calhoun:** I don't know... I've found that it doesn't bother me using it, especially with autocomplete and everything.

**Roberto Clapis:** Right. But does it mean that we expect the get verb to change from get to another get? That is here to stay.

**Mat Ryer:** Yeah, yeah.

**Roberto Clapis:** I don't know, that feels weird.

**Mat Ryer:** Yeah. I probably wouldn't have done it, but it's completely fine. You could make the same arguments for the status codes. Frankly, I find those to be much more readable, especially because I don't know all the HTTP status codes.

**Roberto Clapis:** Yeah, exactly. That makes sense, because you read words, instead of a number.

**Mat Ryer:** Right.

**Peter Bourgon:** I didn't actually know that the methods were defined in the HTTP package.

**Mat Ryer:** Yeah, exactly. There you go. So you don't use them.

**Jon Calhoun:** At times I feel weird not using them, because somebody's gonna be like "Why aren't you using constants? Why are you hardcoding strings in here?" And even with status codes - I'll occasionally write 200, because I'm like "If you're writing a web service and you don't know what 200 means, you probably need to go figure that out first."

**Mat Ryer:** That's true. 404 is another one. Seeing status.notfound to me isn't as clear as 404. That's the big one.

**Jon Calhoun:** Yeah. There's a couple that are like that. There's just a couple that are like "If you don't know these ones, then you should probably figure them out." But then there's other ones where "Okay, I get it. This one's not quite as clear." So I have mixed feelings on that at times, but I tend to just use the written out "status okay" or whatever, just because I want all my code to be consistent... But sometimes I'm on the fence there.

**Mat Ryer:** \[00:40:21.13\] Yeah. If I wanna say, as a string, "We'll post you a T-shirt", I'll use the post const there. So I'll go the other way and use it way too much, where you shouldn't use it. That's a joke, by the way. Any beginners - don't do that. It'd be crazy.

**Peter Bourgon:** \[unintelligible 00:40:35.20\]

**Mat Ryer:** Yeah, don't tell jokes. It's risky.

**Peter Bourgon:** It's a tricky game.

**Mat Ryer:** It's a tricky game... Especially when your editors are not kind to you in the edit, as it turns to be the case for me. Okay, so shifting gears a little, when should we inject dependencies? Maybe we could just have a quick overview of what we mean by dependency injection, and then we could talk a little bit about that. Who wants to tell us what is a dependency injection.

**Peter Bourgon:** If you mean "When should you pass dependencies to things that need them?", the answer is always. Never not.

**Mat Ryer:** \[laughs\] Yes, but what about an abstracted -- do you believe in any sort of abstracted dependency injection mechanisms, or is it just a case of pass arguments, because then you get all the compiler help?

**Roberto Clapis:** I like to have a struct when I build web servers especially, that keeps all the dependencies that need to be injected. So if I need clockwork just to have a static time that I can measure in my tests, it's fine to inject time. Or inject a random source; like, have a crypto safe random source at startup on the real server, and one that is unsafe and predictable in tests. But I despise with all my strength dependency injection frameworks. I do not like them.

**Peter Bourgon:** That's what a lot of people mean when they ask about dependency injection. They mean the thing that figures out your dependency graph for you based on annotations, or something like this. I agree; I understand some circumstances where they might deliver value, but I think they are so rare that anyone who's asking the question shouldn't be using it, basically.

**Mat Ryer:** Yeah, I think I agree with that. You can't go wrong with just having fields and setting them. And if you do have constructors and there's a service that relies on other services that you have as different structs, then you can take those as arguments, or have them in the struct on the type, or whatever. And that is very clear -- and sometimes when you're then adding something, when you want to add a new thing, there is then some plumbing to go and do. And that's the bit that -- because it's repetitive, we wanna dry that up naturally, as programmers.

**Peter Bourgon:** That's such an interesting point, because you said when there's some plumbing to do, but I see that work as so virtuous... Because it's not just you doing this mechanical stuff, this is you expressing what is now a new truth in your application. There's this thing which is now being used in this dependency chain that is now visible. Someone new to the code is gonna see that that's there and it's needed for these things, and that's so important to make explicit.

**Mat Ryer:** Hm. So it's very rewarding, and usually it's quite easy work, too. It's just a case of looking at another service, going and looking where that's wired up, and doing the same. So it's quite easy... But you're right, it is quite rewarding. There is something very satisfying when you get to the point of actually exposing that service. It just feels like a bit of a milestone. That is a good point.

**Roberto Clapis:** Right. And it allows you to do more general things. In dependency injection frameworks one thing that really happens is that they compute the graph, and the server responds. They will need to build up the entire graph and construct most of the things, even if you're not gonna use them, because they don't know if you're going to use them.

\[00:44:06.18\] One thing that I like to do in my web servers, especially if I use cloud services - I use sync once everywhere to construct my stuff, so I know that stuff will be constructed only if I actually need it... And it's very hard to do that if you just inject magical things that depend on other magical things. I like to do the things that I need to do, not more.

**Mat Ryer:** Right. So by default try not to do anything, and then when it's needed... And that comes down to also the environment in which you're gonna deploy the code... Because if you put that into a situation where it scales down to zero instances automatically very often, you're probably gonna get a big saving with only doing things on-demand. Whereas if you've got services that run for a long time, or that are just permanently running, maybe it's easier to just get all the work done upfront, so you know it's gonna succeed, and then you can go from there. So I think yeah, those kinds of decisions matter more, for sure.

**Jon Calhoun:** This type of question is hard for me, because I agree with you guys that most of the time when it's asked, it's somebody coming from a Java background or something, where they're expecting to inject things with a framework... But on the off-chance they're asking when is it better to just put an actual type embedded into a struct, versus - or not necessarily embedded, but as a field in a struct - or to put an interface instead, I think for me it just comes down to "Are you actually going to replace this with something else at some point, either in your code, or in your tests, or something?" And if so, then the interface makes more sense. But if you're not ever replacing it, just start with a struct. It's really not that hard to change later.

**Mat Ryer:** Why is there this natural aversion to this? Do you think that there's something about the fact that just setting fields on a struct feels too simple and too easy, and therefore not professional, in some way? Especially if people were used to big enterprise frameworks in the past.

**Jon Calhoun:** I think some people just don't like having a main file that has all this setup of like "Okay, now I have to initialize this thing, and I've gotta assign it to all these different structs that need it..." Whereas if you come from a framework, like a Rails or whatever, you don't do any of that. It does all of that. Whatever assignment needs to happen, everything happens automagically, and you just access the things you need. So I think sometimes people are looking for this -- essentially, they wanna have some global db instance that they can connect to, and they don't wanna have to inject it anywhere; they just wanna be able to access it. And I think they don't quite realize that down the road that could potentially introduce some problems.

**Mat Ryer:** Yeah.

**Roberto Clapis:** I feel like people feel like that until they need to debug it. They like the magic until they need to find what's wrong. Because for me, I think everything magically injected was beautiful until I had to find out who was constructing that.

**Mat Ryer:** Yeah, that's true. Any time you use a pre-built framework or an abstraction or something, you then are kind of tied to its decisions. And if you then have to fight it, it can get very unpleasant. A lot of people I hear talking about avoiding frameworks are coming at it because they've been burned so many times... So that's why we talk so much about this avoiding early abstractions.

I think it was Ben Johnson on Twitter who made a good point about this... And he actually made the counterpoint, which was "Sometimes the right abstraction basically is amazing, is so powerful that if you do find that abstraction, then you really can unlock a lot of potential, enable lots of people to do things." That's why I think they're so attractive. But they're a bit like the Holy Grail; they're difficult to find. I think the Holy Grail is difficult to find, if I understand it...

Anything else on that? If not, we have a question about init, which I wanna put to Peter.

**Peter Bourgon:** \[00:47:57.11\] Why are you doing this...?

**Mat Ryer:** Well, I know we're gonna get a good answer. What about init? When should you use init, Peter?

**Peter Bourgon:** Since we've done a lot in this episode, let's go back to what are the mechanics of this thing; what are the truths of this part of the language. Init is a function that runs when you import a package, runs as part of program startup, and it's run before main starts... And it's a product of how it exists in a package. All it has access to, by definition, are the package-level consts and variables, the package-level declarations. It doesn't have access to any state that isn't declared at a package-level. And by design, its only purpose is to manipulate package-level state. That's the only reason it exists.

But you shouldn't have package-level state, right? In general, you should try to avoid it. I took it a step further, I say "You should actually never have any", and so therefore, for me every instance of func init is a huge red flag. You were doing something in there which ought to be done somewhere else.

**Mat Ryer:** Yeah, I concur with that. I would say just avoid init. It's a bit too magic, and anything that's too magic like that becomes a problem later. It's so fun when you're first doing it, and it gets things working, when you're writing it's fun, but when it comes to debug code and figure out what's going on, that's just too magic and probably worth avoiding. Jon, what do you reckon, mate?

**Jon Calhoun:** So I guess my only caveat to that would be -- let's say you're writing a SQL driver. Pretty much the convention at this point is to register you driver via init. And as much as I wish that would change, I think at this point you're better off just doing it because that's the convention... But I don't love it, it's just one of those "Because that's convention, at this point trying to change that is not worth the effort. Just do it."

**Mat Ryer:** So this is that thing where just by importing a package, its init function will register itself with another package.

**Jon Calhoun:** Yes.

**Mat Ryer:** See what I mean about magic?

**Peter Bourgon:** Right. And I hope it's uncontroversial to say, this is a design choice that was made in pre v1 of the language, that there would be this global registry and package db, and this would be basically the way to use it. And I hope it's uncontroversial to say that this pattern has not stood the test of time. This is not a good pattern. So to use the global registry and package db you have to do it this way, and that's true, and it's too bad. But if you're writing your own package, do not copy this pattern. This is not the way to do things.

**Break:** \[00:50:50.12\]

**Mat Ryer:** I think probably our final question is gonna be a big, meaty one. We get this a lot, I certainly get this a lot, and it actually turns out to be a very difficult one to answer, but we're gonna do our best... Or your money back; it's free. You get to forget the ads, that's the way we'll refund you; you can forget all about the ads from this podcast. The question is "How do you structure Go code?" This is something that people care a lot about, it's the kind of thing that for beginners is very intimidating.

You can learn the mechanics of "Well, this is how packages work, this is how you import packages", but what about "When should we build a package? When should it be in main? How should we structure this?" Because of course, a package is a folder in Go, so now we're dealing with folder structures, and things. This is a question I get a lot, so I'm just gonna ask you now - how do you structure code in Go?

**Jon Calhoun:** I think we can all agree on the general idea of creating a CMD or Command folder, and inside of there sticking your different main packages. And generally, those just sort of initialize some state and start the program. From there, I think that's where it gets more confusing for some people, trying to figure out where to put the rest of the code and how it gets organized. So I'm just gonna say let's assume we have that.

My general advice is stuff that I don't think people like to hear, but I really do think starting with a flat structure and waiting until you see a good way to break things up is the best way to go. Now, I will say that I have shown people how to do MVC simply because I didn't want them to think about it any longer. I just wanted them to get their stuff up and going, and I'm like "Later we can come back and figure this out." But for now, your goal is just to write some code. I think it gets asked so much because I think it's something that blocks people from moving forward, and it shouldn't.

**Peter Bourgon:** A lot of languages have this (I guess) convention of all of the project structures being roughly the same, for the same type of project... Like, if you're doing a web service in Ruby, you're gonna have this layout, and the packages are gonna be named after the architectural patterns you're using. MVC, for example; controllers etc. But in Go, that's not really what we do. We have package and project structures that are basically reflective of the domain of the thing we're implementing. Not of the patterns we use, not of the scaffolding, but of the specific types and entities in the domain of the project that we're working in.

So it is always idiomatically different from project to project, by definition. What makes sense in one doesn't make sense in another. Not to say it's the only way to do things, but this is what we tend to do... And so yeah, there's no answer, and that kind of truth about what is idiomatic in the language is extremely confusing for a lot of people, and it may be the wrong choice as a result... I don't know, but I think that's the main point.

**Mat Ryer:** I think it can be quite liberating though to say that there isn't really a way to do it, which also means you can't really do it wrong. It's what fits for your case. And if you're not sure yet, then just sort of defer it. Worry about it later, if you can. It doesn't always work like that, and of course, if you're talking teams at scale, I think that's a little bit different. It's sometimes then worth investing a bit of time and trying to do some kind of design based on what you know about it.

I personally follow the approach, when I'm building something new, of I just have a single folder, it's got a main in there, and then all the types. I just use file name prefixes with underscores actually to group the functionality up together, and have it all together. And then later, if we have to deploy this other service in a different way, or something changes like that, then I've got a good reason to go and have a look and make some changes. But I'm doing it in an informed way.

**Roberto Clapis:** \[00:56:07.24\] I will say that the sentence that you said - it seems there is no scheme that you will adhere to; you can't get it wrong. I would phrase it different; I would say that since there is no mandatory structure, you might have a chance to get it right... Because so many times in a project I had--

**Mat Ryer:** Less optimistic...

**Roberto Clapis:** Right. So many times in a project in another language I had to force my structure to adhere to the one of the framework or of the language, that it made no sense for me and it was impossible for everyone to browse it. Because if the structure is the same for every project, it gives no information. It's like, sometimes when you visit a package, the package structure already gives you some information, and in other languages you lose that chance.

**Mat Ryer:** So do you think that within a project you might even have contradictory things? You might have some things laid out one way, and other parts laid out differently, because it happens to suit?

**Roberto Clapis:** Yeah, I do, because I try -- to the question "How do you structure your packages?", my answer is "The best way I can for the user." If I think that a user will benefit from one type, for example, being the exception of a rule that is general in that framework, in the thing I'm building, I will do that. I will have that type stick out in another thing. It's like cookies in HTTP. They're a header, but they're not treated as a header in the HTTP package, and that makes it so much more usable. And I think there's a good reason for that.

**Jon Calhoun:** I will say the one thing that I have seen is that people will try -- Mat says there's no wrong way, I guess, and I agree that you should go try things... Because truthfully, if something is (I'm gonna say) "wrong" in quotes (not really wrong), but if something doesn't work, it's easier to understand why it doesn't work when you actually build it and start to actually experience why it doesn't work... And one of the common ones that you'll see is they'll end up with cyclical dependencies, where they're trying to import multiple packages this way... And I'm curious to get your take on this, but what I've been trying to advise people lately when I talk to them about this is -- I know nested folders don't really matter for packages in Go, but I basically said to try to think about your code almost as if you can only import things going up the tree, in your packages. If you think about it that way, there's no way you can possibly have--

**Mat Ryer:** What do you mean by that, Jon?

**Jon Calhoun:** Okay, so let's say your root level - you have an app. You just call it your app package. Underneath that you might have a SQL package that you're writing your database stuff in, and then inside of that you might have something even more specific, like a Postgres package or something.

**Mat Ryer:** Right. Specific to the database.

**Jon Calhoun:** So the Postgres package can import the SQL package, and it can use whatever types in there, and it can import the app package, but those ones can't actually import the Postgres package. They have to define an interface that the Postgres implementation would be used to satisfy.

**Mat Ryer:** It's funny, because I've done that the other way around, where you can only import packages that are inside, and you do it the other way. It's the same kind of idea, I think, but I wonder if we're saying opposite things.

**Jon Calhoun:** I'm viewing it like it might be similar. I'm viewing this as like you have a central object and it defines all your -- like, if you've ever read Ben Johnson's Standard Package Layout, it's the same idea. You have a central app that defines interfaces, and then as you expand, you get more specific implementations... And you might still have interfaces there that get implemented by even more specifics. And it's a little bit tricky, because as you work your way out, there's always going to be people who come up with some weird edge case.

For instance, if you're using an ORM, you'll be like "Well, my app might have a user type, but then my ORM has a user type that's representing what's in the database and which one's correct." And I tend to treat that, if you're gonna use the ORM at least to this point, my suggestion is generally to treat it like an API, where your application might have a Stripe Charge, or some sort of object representing that internally, but then the Stripe API has their own representation of it and you have to translate between the two to get it into your application. There are some downsides to that, I don't think it's perfect, but it tends to get you going in the right direction without cycles in your dependencies and things like that.

**Peter Bourgon:** \[01:00:17.25\] Ben expressed this really well... I think at one point he said "Packages should stack, and not interrelate." So there should be a clear stacking effect relationship between packages, and this is another way of expressing in the clean code, or hexagonal architecture, or domain-driven design - they call it the inward-facing dependency role. Your HTTP package can import your business logic, but your business logic cannot import the HTTP package. It should only go in one direction.

**Mat Ryer:** Yeah, and that is key. When we talk about things going wrong or not working, from a structure point of view it is usually cyclical dependencies, like you say, Jon... And those kinds of things are easier to avoid if you just have one folder. So that's another reason -- you sort of just avoid those problems early by doing that.

Well, it's that time of the show where we do our unpopular opinions.

**Jingle:** \[01:01:22.26\] to \[01:01:40.10\]

**Mat Ryer:** We did have an unpopular opinion from Reddit... It said "Unpopular opinion." This is from bklimczak, and bklimczak says "The simplicity of Go makes it less useful in some use cases." Which I think probably has some truth in it. There probably is a trade-off there... What do you think? Or we don't have to debate that one. Do you have any other of your own unpopular opinions?

**Roberto Clapis:** I think I can quote Brad Fitz on this, in which he said that Go does everything you need, 100% of what you need, 80% of the time...

**Mat Ryer:** It sounds like something from Anchorman.

**Roberto Clapis:** ...which is true. Sometimes Go doesn't cut it, and that's fine. The simplicity and the benefit of having that hard, very opinionated language - the benefit overweights the downside of not being able to write some code, sometimes.

**Mat Ryer:** Cool. Any other unpopular opinions?

**Jon Calhoun:** Well, apparently Chris James has one, but I don't remember it in the Reddit thread... But he says if we don't say it, he's gonna riot, so...

**Mat Ryer:** Okay... Then we're not gonna say it, obviously. Because we do not negotiate with terrorists on this show. We never have. They might tolerate that kind of thing on JS Party, but not on this show, baby. Or we can just do it though, if you want as well... Peter, do you have one, mate? You don't strike me as the type...

**Peter Bourgon:** Well, unpopular to who? What audience we're talking?

**Mat Ryer:** Most people. I think it just has to be most people wouldn't agree--

**Jon Calhoun:** 51% of people. You get to choose which people.

**Peter Bourgon:** To Go people, or to programmers in general?

**Mat Ryer:** I don't know. Any.

**Peter Bourgon:** Who am I offending? \[laughter\]

**Roberto Clapis:** You can go this way - you set the group, and then you say the opinion. You say "This is unpopular in group -", and then you say it.

**Mat Ryer:** Yeah, it's like targeted.

**Roberto Clapis:** Right.

**Peter Bourgon:** I didn't know this was a tradition actually, so I wish I had prepared a little bit better, because I'm sure I have lots of really offensive beliefs in here somewhere...

**Roberto Clapis:** \[laughs\] So maybe it's better that you didn't.

**Peter Bourgon:** No, we'll drag up something, and I'll try to keep it pithy, in a tweet format. This is maybe a little bit easy, but that's fine, we'll go with it... I think that in almost every case, if you're choosing whether to bias in favor of more work for you as a programmer, if it makes the reader of your code do less work, in every case you should make that bias.

**Mat Ryer:** \[01:04:12.18\] Optimize for read.

**Peter Bourgon:** Yeah. And the metric of how long it takes you to type code into your editor is approximately never worth tracking. It's just completely irrelevant. Anything that is like an optimization for that metric is incorrect, 100% of the time.

**Mat Ryer:** Great.

**Jon Calhoun:** But what if I'm writing code that only I'll read, and I'm very sadistic?

**Roberto Clapis:** \[laughs\]

**Jon Calhoun:** Like if I'm a masochist, or something. I don't know if I used the right word, but...

**Peter Bourgon:** Don't bring us into your \[unintelligible 01:04:38.04\]

**Mat Ryer:** What Jon does in the privacy of his own dungeon is his own business; in his own code dungeon.

**Jon Calhoun:** I write this code thinking "I'm gonna have a real treat for myself later, when I try to read this..." \[laughter\]

**Mat Ryer:** Well, that's usually how we really learn these things, is because we have actually done that, and we hate ourselves for it. So then we think "Oh, let's not do that again."

**Jon Calhoun:** And then you do it again.

**Mat Ryer:** Yeah.

**Roberto Clapis:** Once I tried to re-read some code that deeply used map filter reduce chains, and I decided that it would have been easier to rewrite, trying to remember what it was trying to do, rather than understand it. Don't do that to yourself, or to anyone. Just don't do that kind of stuff.

**Mat Ryer:** Yeah, that's interesting, because actually, if it's small enough, I quite like that. I like that I can actually just rewrite it. Because usually, then it's better, because some time has passed since I wrote it; and I didn't know anything about it when I wrote it.

**Roberto Clapis:** Right. You write the code right on the third time, right?

**Mat Ryer:** Yeah, if you're lucky.

**Roberto Clapis:** \[laughs\] Right. I'm always thinking about Radio Sunshine in this podcast.

**Jon Calhoun:** I think one of the other things to keep in mind there is just the fact that if you're gonna rewrite it, at least if it's for yourself sometimes - I view it as "I'll rewrite it better later, but if I never actually get to rewriting it, I save myself some time, because it didn't really matter; I'm not looking at this code." So there are cases where I'll just be like "I'll refactor this later", but I think I consciously make that decision. It's not like "Oh, this took me less keystrokes." It was like "Look, this was just me getting the first version done."

**Mat Ryer:** Yeah. Sometimes if it's only gonna live for a little while, you just want to do one thing on your machine, and you need to just crunch through some data, and then you're gonna save it somewhere, or something like that. It's a one-off, and it doesn't matter. I like to still do it as exercise, to write the cleanest code I can.

**Roberto Clapis:** Yeah, also because these things grow, don't they? Let's say that you start with a small Perl script that processes some data in one line. Then after a while you're like "I need to make this scale, or use it for more than one thing", and you have to do it again.

**Mat Ryer:** Yeah, it happens all the time. Someone wrote one script to scrape some university website, and that thing's grown...

**Peter Bourgon:** And now it's Facebook.

**Mat Ryer:** ... and now it's Facebook.

**Peter Bourgon:** Yeah, exactly. This is an interesting thing that we probably don't talk about nearly enough, which is like -- we're saying all these things like "You should do this. We don't like that. This is a good idiom. This is a bad idiom." But the context of all this stuff is maybe unstated. It's code you're writing with other people in an organization. None of this really applies if you're just writing some code that generates a fractal, or some thing. Do whatever you want. We're talking in the context of like how you can be a good citizen in an ecosystem. So maybe it's worth making that point a bit more explicit.

**Mat Ryer:** Yeah. I think it's a good point, because context actually applies -- it changes lots of things, too; lots of advice changes with context. if you're just a tiny team of two people, you might well behave very differently to even a team of eight, and certainly a team of 50 or 100 people. You're necessarily gonna have different attitudes, different problems, different ways of interacting.

**Peter Bourgon:** \[01:07:58.09\] And this is interesting too, because Go itself is biased for programming in the large, at large organizations with lots of engineers who come and go, on big teams... And that is explicitly what it's targeting, right?

**Mat Ryer:** Yeah, yeah. Because the readability -- the focus is that optimized for read. So yeah, I think that's why lots of people learn it quite quickly - it's because it's smaller, it's optimized for read, and it's kind of easy to get going with the tools. Once you download it and install it, it's kind of like everything you need and a bit more. So yeah, I think it's great for that. Roberto, what were you gonna say?

**Roberto Clapis:** I'm just saying that this also influences the community. There are communities in which the smartest code that you can write is a beautiful piece of code... And I'm totally fine with that. And there are communities like the Go one, in which if your code is smarter, it's too smart; you might want to consider dumbing it down a bit, because it's going to be hard to debug, and hard for newcomers to start understanding whatever you're working with.

So it's not just that the language influenced the libraries and the ecosystem, it's also that now the ecosystem influences the way we write the language, to keep it simple and maintain that tradition... Which is something I like.

**Mat Ryer:** Yeah. Well, I'm afraid that's all the time we have. I'm very sorry if we didn't get around to your question... It probably just means it wasn't interesting enough... No, we just didn't have time. There were so many great questions, and thank you so much. We will do another one of these again, because I've learned loads, and I'm sure the people have, too.

Thank you so much to our guests, Peter Bourgon, Roberto Clapis, and Jon Calhoun was also here... And I was here too, obviously. See you next time!

**Outro:** \[01:09:51.10\]

**Jon Calhoun:** So if anyone's wondering why Mat has a team with just one other person, it's probably comments like that... \[laughter\]

**Mat Ryer:** I'm the nice one.

**Peter Bourgon:** That, and many other reasons.

**Mat Ryer:** \[laughs\]

**Jon Calhoun:** You're the nice one...?

**Peter Bourgon:** I just thought of a much better controversial opinion, unfortunately...

**Mat Ryer:** No, no, you can do it. We can edit it in.

**Jon Calhoun:** We're still live, so yeah, it can get edited in, or whatever.

**Mat Ryer:** We're still recording.

**Peter Bourgon:** Well, maybe not worth it, but... Yeah, I've spent a lot of time thinking about the semantic import versioning rule in modules, and I'm increasingly convinced it's just a complete design error, and models are fundamentally broken in this way... But no one seems to agree with me, so maybe that's a deeply unpopular opinion.

**Mat Ryer:** We did have a question about which Go version you should choose in your go.mod file. What do you think about that?

**Peter Bourgon:** Well, it doesn't matter. At the moment it doesn't really have an effect. In the future it might, but at the moment it just doesn't really matter. If the question is like "Which Go version we should use in general?", it's the latest stable release, always. Definitely.

**Roberto Clapis:** Yes. And I've had a problem with that... Because if you choose the latest stable release, a library for example relies on the SQL package; in Go 1.15 a function was just added, and my library is a wrapper around the SQL package, so I had to write two versions, basically; one that was more backward-compatible, and one that works with the new one and exposes that function.

So for programs it's easy. Just the latest. For libraries it's not that easy, in my opinion.

**Mat Ryer:** Hm. Good stuff.

**Roberto Clapis:** I wish I could say "The latest that compiles with this code."

**Jon Calhoun:** It's hard for me to talk about the versioning stuff, because I'm just not in a situation where I run into the issues that some people have... My dependency tree is not that complicated, so as a result, it's like, what they have is fine. So my feedback on that is I don't have -- I can give you the just-somebody-throwing-something-together's feedback, but really, the complicated cases are gonna come from Kubernetes or some big project like that, not mine.

**Peter Bourgon:** But do you have projects that have a reasonable rate of change?

**Jon Calhoun:** Yes... But it's probably not library changes as much. It's whenever I decide to go back and change them, I guess. For the most part, once something is in there and I used it for the things I'm using it for, it's pretty good.

**Peter Bourgon:** \[01:14:01.10\] Okay, so you don't tend to have things that evolve over time, lots of contributors, or...

**Jon Calhoun:** No, right now I don't have many projects like that, no.

**Peter Bourgon:** Yeah, okay.

**Mat Ryer:** Yeah. That would be different, wouldn't it? Especially like when you release - you suddenly have to release the tag versions, and things...

**Peter Bourgon:** Right... Which semantic import versioning makes a much bigger deal out of than in any other ecosystem, and that's like the entry door to my Pandora's box of complaints.

**Mat Ryer:** Well, maybe we'll have to do another episode on that altogether, Peter.

**Peter Bourgon:** I would love that so much... And if you could get Russ on, so I can understand his perspective a little bit better - even better. \[laughter\]

**Roberto Clapis:** I think you should make episode on rants. You just bring people that have complaints, and you throw them against someone that caused that pain.

**Mat Ryer:** Like face your -- yeah, it's grim... But yeah. Just this. You get to do just this. Yeah. I don't know, because we're quite nice, aren't we? We're all a bit too nice for that. It sounds like a roast. Maybe we should just do a Gopher roast, where we just get Dave Cheney and we just write loads of horrible jokes about him.

**Peter Bourgon:** Sarah Silverman probably, too. Yeah.

**Mat Ryer:** Yeah, get Sarah Silverman up to do a bit; Jeff Ross will be in there, obviously... Yeah? No? Okay, won't do it then. I didn't get the support I was hoping for on that one... Grill a Gopher. Leah Anthony on Slack said Grill a Gopher.

**Roberto Clapis:** Grill a Gopher. If it is voluntary, like the person agrees to that, why not? We might end up learning something.

**Mat Ryer:** Okay, yeah. Fair enough. Grill a Gopher. I don't know... I don't think it's right for our community, is it?

**Roberto Clapis:** Also, a lot of people in the community are vegetarian. It doesn't sound good. A gopher is an animal still.

**Mat Ryer:** You can still grow vegetables though. Gopher like a person though, don't worry. It's a person. It's not an actual gopher animal.

**Roberto Clapis:** Right. Yeah, I got that.

**Mat Ryer:** And if they're prepared --

**Jon Calhoun:** If the community guidelines don't say anything now, all of a sudden there'd be an addition... Like, "We had to add no grilling gophers."

**Mat Ryer:** I haven't seen it say you can't grill gophers in the code of conduct, personally. And I read them every day.

**Roberto Clapis:** \[laughs\] Just to be sure...?

**Mat Ryer:** Yeah, just to be sure.

**Jon Calhoun:** In other news, we have an opening for a Go Time panelist...

**Roberto Clapis:** \[laughs\]

**Jon Calhoun:** ...because Mat is gonna lose his job.

**Peter Bourgon:** Okay, all joke aside, Mat - have you ever hunted and killed a human being, the most dangerous game?

**Mat Ryer:** Oh, no.

**Peter Bourgon:** Oh, you really should. It's so thrilling!

**Roberto Clapis:** How did it get so dark so soon?

**Jon Calhoun:** Like, it's time to go off live...

**Roberto Clapis:** It was so sudden!

**Peter Bourgon:** Oh, are we still live?

**Jon Calhoun:** We are. Sorry.

**Mat Ryer:** It's alright. It's obviously a joke.

**Jon Calhoun:** Obviously, it' s a joke.

**Mat Ryer:** I don't think anyone listening would not figure that one was a joke. But the answer, Peter, is "No. Not yet."

**Peter Bourgon:** Okay, very good. Very good. \[unintelligible 01:16:59.23\] It's probably more thrilling that way, too.

**Mat Ryer:** \[laughs\] We could have a gopher purge, where we just delete all the libraries that we don't like. Just one day where we can forget the consequences and just go around and delete all the libraries.

**Peter Bourgon:** There's a fun game - if you could delete one library from existence...

**Mat Ryer:** That is quite a fun game... \[01:17:22.00\]

**Roberto Clapis:** One library.

**Mat Ryer:** A Go package.

**Peter Bourgon:** Yeah. And force everyone who's using it to use something else.

**Mat Ryer:** Hm...

**Roberto Clapis:** \[unintelligible 01:17:29.28\]

**Jon Calhoun:** I feel like Peter would just be like "We're gonna delete database SQL" just so we can fix that init function. \[laughter\]

**Roberto Clapis:** Or that has an alternative, or would you build the alternative?

**Peter Bourgon:** It doesn't matter.

**Jon Calhoun:** I assumed they'd have to rebuild something...

**Mat Ryer:** No one's got to.

**Roberto Clapis:** Oh, it doesn't matter. HTTP. HTTP, every day.

**Peter Bourgon:** What's wrong with it?

**Roberto Clapis:** That is old. \[unintelligible 01:17:53.18\] done in the worst possible way, too many default things, recovering panics... Too many things. It's like, I have a document.

**Peter Bourgon:** Right. Designers... The main thing I think for me is allocations, of course.

**Roberto Clapis:** Yeah, also that, but -- I care about performance when it's the last concern... And I have a 24 pages document with the other concerns to be addressed before performance.

**Mat Ryer:** That's too many pages, mate.

**Peter Bourgon:** So Brad, that's a shot across the bow from Roberto.

**Mat Ryer:** Brad Fitzpatrick is on next week's show, so we'll absolutely be playing a clip of this, and getting his reaction.

**Roberto Clapis:** He would agree. He started redesigning the HTTP package a couple of years ago. Most of the stuff in my document comes from his.

**Mat Ryer:** It was written and then it evolved at a time kind of before we'd been doing Go for very long... So you can see, in the standard library there are lots of examples of things that really don't look very Go-like at all, and I think there's probably just stuff like that going around, isn't there, as well?

**Jon Calhoun:** I think this is a good thing for beginners too, to realize that even these people they look up to as amazing developers still look back on things they created and say "This could be improved drastically, now that I know more..."

**Mat Ryer:** And it's just in use by maybe millions of people; certainly hundreds of thousands of people are using these things, and yet they still feel like that. That is quite a good lesson, because software is never really finished, is it? That must be quite encouraging for a junior developer to hear, I would hope.

**Peter Bourgon:** Yeah, there's no hope. You're gonna feel awful about the things you write, in perpetuity. \[laughter\]
