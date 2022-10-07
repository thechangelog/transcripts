**Johnny Boursiquot:** Welcome, welcome, friends... And those who want to be friends. You want to be friends with me, right Aaron?

**Aaron Schlesinger:** Of course. Why do you think I'm here?

**Johnny Boursiquot:** Awesome. Awesome. So today we're gonna talk about functional programming with generics. I'm your host, Johnny Boursiquot. If you haven't heard from me for a while, that's because I've been heads down, trying to ship some stuff that's coming out later this year, and I'm pretty excited about it, but I can't spill the beans on that yet. You're just gonna have to stay tuned... And if you want, you can go to golandjohnny.com. \[laughs\]

**Aaron Schlesinger:** Nice...

**Johnny Boursiquot:** Since I own that, I made sure to snap that up. Last time, Jon Calhoun mentioned it on a show... So joining me today is - you know him, he's been on the show before, and you see his name everywhere, especially as it relates to things like GopherCon, and getting us ready for the big show coming up next month, actually...

**Aaron Schlesinger:** Coming up!

**Johnny Boursiquot:** Yeah, yeah. Please join me in welcoming Aaron Schlesinger.

**Aaron Schlesinger:** Hi, everybody. Thanks for having me, Johnny. It's wonderful to be here again.

**Johnny Boursiquot:** Yes, yes. And it's great to have you. So we did a show on functional programming a little while back... This was episode 87, right? This was a while; this was like May something of -- let me see, let me double-check... 2019. Back in 2019.

**Aaron Schlesinger:** Before days...

**Johnny Boursiquot:** So a lot has happened in the GO world since then, right? Most notably, the introduction of generics in 1.18. So it was suggested, actually... There was a listener who went back and listened to the old show, and basically said, "Hey, I've found an episode on functional programming from back in 2019. However, it was a time before generics appeared in Go. It'd be nice to hear what can be done with functional programming in Go with generics." So this was from Steve Nicholas. So Steve, shout-out to you; we indeed got this show put together on your suggestion.

So the others - you can follow in Steve's footsteps if you want to ask for certain shows, and you can basically suggest them. We often look through the list and see what's interesting. You tell us what you want to hear, and we put on shows like this as a result of that.

So you and I, along with Mat - we did that episode, and we learned a lot during that time; we learned how to use what we had back then, mainly things like the empty interface, and things like even generators, and things like that... And even using reflection, right? Because those were some of the things that really enabled or facilitated the creation of functional programming style libraries, and things like that, or approaches to Go. But those were also some of the gripes when trying to do functional programming in Go. Too much use of the empty interface, too much use of reflection, on and on.

\[06:15\] And even thinking that "Well, Go is really for imperative programming", right? The verbose style - not really suitable for functional programming. But I think we made a pretty good case for it, listening back to the show... But now that we have generics, I wanted to bring you back so we can talk about what's easier now to do with Go. Like, what was hard to do then, that is easier to do now?

**Aaron Schlesinger:** Yeah. I think maybe we can do like a little bit of a recap of what FP is... That's actually a really good introduction into -- or I should maybe say segue into why generics can help, and kind of answer your question to "Where did generics unlock new areas of functional programming awesomeness in Go?", if you will. That's a technical term, awesomeness, just for our listeners...

**Johnny Boursiquot:** \[laughs\]

**Aaron Schlesinger:** So I'll give it a crack to start off the recap of functional programming... Really, you can go from a math perspective and say everything in FP is based on the function, and from a theoretical perspective, a function takes inputs and returns outputs. From a math perspective, you can chart a graph from a function, for example, just to map the inputs to the outputs. That's what it is, it's a mapping.

In real life, of course, our functions don't just spit something back out. They also do some IO, or maybe talk to a file, or use a timer, or send down a channel, or whatever else. And so that's really important, actually, to remember that all of this stuff that we're going to talk about in functional programming comes from the theoretical, but when we apply it, it looks like a design pattern. It's not like adopting a framework, or if you're in school, like doing an assignment. There's not just a right answer and a bunch of wrong answers; or a right answer, and then everything else is just wrong. There's some gradients here. And we kind of saw that with the -- there have been talks on FP before, including one that I did way back, in 2017... There's been talks at GopherCon UK, there's another talk from GopherCon in 2020... And obviously, like you said, Johnny, there's been previous Go Times, there's been blog post... They all attack FP from a different perspective. And it was all possible to do some FP things before generics. We were able to take some of the theory and apply it even before generics. Obviously, now generics has unlocked more stuff, and now we can unlock more things.

So FP, the theory is things are based on the function. We can transform functions by putting two together. So if the output of one gets passed into the input of the second one, now you essentially have a transitive property where you can input to the first one and get an output from the second one, and it all looks like one function. Composition, right? You can curry functions, so you can think of it as partially applying a function, meaning if a function takes in three parameters, pass a lot of the parameters, and now you have a function that takes two parameters, and that first parameter that you already passed in is already baked into it.

Then you can take those tools in Go to what I kind of think of as the next higher level. So moving into the programming world, not just the math world - because all of that stuff that I just mentioned is basically just the math world... In the programming world you can have sequences of things, like a list, or an array, or in Go a slice. So what if you could apply a function on every item in the slice, without having to write a for loop? That's called, in Go and in a lot of other languages, it's called a map, right? You just apply the function on each element in the list, and then you get a new list out the other end, that has the outputs of that function in the same indices as the respective inputs.

\[10:26\] So now starting to bend the mind a little bit, what if you had a function that took in an element of a list, but then output a list itself? Now you can do something called a flat map, where you take in an element, so you apply the function on each element - the output is a list, right? So now you're taking a bunch of lists and combining them together to make a much bigger list. So whereas before you were just dealing with input one element, output another element, now you're inputting one element, outputting N elements for each element in the original list, and you end up with a much bigger list.

Now, you can go even further here, and you can start doing things like filtering... So if you have a function that takes in an element in a list and returns a boolean, you can use that to decide, "Can I make a new list, and can I decide which elements from the original list are gonna end up in the new list?"

You can also do things like zipping, which is using a function to determine the ordering of a final list given two, or three, or four, or five, or six, or ten initial lists. So you can determine how they're interspersed together. And I'm gonna stop there, but there are a lot of other ways that we can apply this very basic, but powerful concept of a pure function - just takes in an input, returns an output. Doesn't do IO, or anything else. So this concept of a pure function... And applying that into the programming world of maps, and lists, and other things, other data structures, like trees, and so forth.

Forgive the overloading of the term list, but this list of things we could do - you know, it goes on... And I could spend another hour and a half talking about it. Of course, I'm not going to do that. But the reason that I went into all that is to kind of start to talk about what could we do before, and what can we do now, with the addition of generics.

And really, thinking about generics - this is another branch of math, right? We're talking about types here, statically defined types. And not only that, but now we're able to vary the type of the input of a function, or the output of a function - we're able to vary that type based on a parameter. It's called type parameterization. So if we can do that, now we can write one function in Go, but we can have an infinite number of actual implementations of it, because the type can change.

So if you've got a function that takes in a type parameter, or a parameter of type t, where t is a type parameter - well, I can invent infinity types, right? So if I can invent infinity types, and that function can take an infinity different types of parameters, which means there are infinitely different implementations of that function. And you know, the Go compiler is going to figure out how to define actual implementations that take in those actual types. I don't have to worry about that anymore, which means I don't have to generate code, or anything like that... But now that we have this power - and this is an immense amount of power - now we can start to have things like... Say, take the map example - we can start to have things like a single function called map, that can operate on a list of any type. Instead of before, we had to have a function called map, that only could operate on a list of one type, and we had to repeat the implementation of map over and over and over again, for all our different lists. Now the compiler just does that for us, like magic; thank you, Go team. You all gave us this opportunity to save tons of generated code, and that's amazing.

\[14:11\] So that's kind of where we're at now. The implications of this go beyond map, but fundamentally, now we're at a point where instead of using raw interfaces, or you know, the any type now, instead of doing reflection, now we can add compile-time proof that certain functions will work for some definition of work, right? We can prove via the type system that certain types of functions will work. Like map, for example. We don't have to wonder whether our reflection code or our type assertion on an empty interface does the right thing and figures out the right type of the list, and then applies that to the function. Now we know that if our code compiles, that you've passed in the right function, that takes in the right type for the type of elements in the list, and you will get back another list with the output type of that function in it.

**Johnny Boursiquot:** So if I'm hearing you correctly, it seems like now -- so we're no longer arguing about some of the benefits of FP, right? So you've done a pretty good recap of why you'd want to introduce FP, or at least know of its usefulness in certain contexts. It's about now how easy is it to actually implement in an elegant way in Go, and that's what a generic gives us, right? Because like you said, there were FP libraries, and talks, and blog posts, and everything; it was possible before. We just either had to write a lot of boilerplate ourselves, or use go generate to produce a pile of variants of a particular function to support the different types, as many types as we wanted to support... Or we had to do some voodoo reflection to get to some \[unintelligible 00:15:55.03\] information. So now it's about the elegance that we get to leverage with type parameterization. Say that three times fast... \[laughter\]

**Aaron Schlesinger:** That's crazy, yeah...

**Johnny Boursiquot:** Okay, so if I'm understanding correctly, then some of the libraries pre-generics - is it fair to say that you are going to see a lot of -- at least for those who practice FP and are interested in practicing FP, and doing FP in Go, which is something we'll touch on as a separate thread in our conversation... So we can expect that a lot of those FP libraries are gonna start adopting generics, because it just makes the implementation that much easier.

**Aaron Schlesinger:** Yeah. I think, as someone who has written library to do a bunch of FP things - yeah, I saw not only did it make the implementation easier in the form of less code and more guarantees at compile-time about types, but also, it extends those guarantees to the caller, so the user of the library, too. So like I said, I no longer have to take in an interface, or any type, and return in any type from, or a list of any types, return a list of any types from map. And since now I can return the type parameter T, and then a new type parameter for the return type of the list - well, now those guarantees are extended to my user, the user of a library. And now they can also say, "Oh, well, my program compiles, therefore my types are right, too."

So this is like a domino effect of benefits that if a user is using someone's FP library, or even rolled their own, now they know that "Well, my types are right." They don't have to remember -- it's one less thing they have to keep in their head, that "Oh, well, the input - it should be a slice of ints, and return should be a slice of strings", but all a compiler knew about in the past was just an empty interface. Or maybe a little better, a slice of empty interfaces, or something like that. It is simplicity, but it is benefit, too.

**Johnny Boursiquot:** \[18:04\] So I was looking at this, how Go talks about this instantiation of a generic function... So for those who haven't gotten into generics yet in Go, pretty much when you create a generic function, what you're basically saying is that you're going to support a number of types based on the \[unintelligible 00:18:21.22\] information you provide, and basically, what happens behind the scenes when you compile your code is that Go is gonna generate an instance of your function for each of the types you said you support, right? So it's kind of like a natural code generation that we have, that provides the type safety, the type checks that the compiler is able to provide. Now the language itself is actually producing that for you behind the scenes, and you don't have to actually write your own generators. So effectively, you're doing the exact same thing you were doing before, except now it's basically baked in and supported into the language.

So this is an efficiency game, in terms of you the programmer being able to write these libraries, being able to support multiple types of given functions, and things... This is an efficiency game really; not really a game-changer for functional programming in Go per se, just a more efficient way of writing the functions, basically.

**Aaron Schlesinger:** Yeah, that is a really great point, is that everything we can do now, technically, you could do before, because we had the empty interface. The empty interface is the set of all types, all possible types in this context. So you could have a function that took in an empty interface, and that is a function that can take in anything you can come up with. Same thing it can return - if you have the empty interface return, then it can be a set of anything.

So your task before was write the code to define a subset of all things that your function wants to deal with. Now, there is a massive issue again, because now you can constrain a type parameter and have the compiler compute for you whether a given type, for a type parameter that has constraints on it, is legal. So do you want it to be integral, or do you want it to be comparable? Do you want it to be stringable, or anything else under the sun that we can come up with? You write less than a line of code, and maybe you write a new constraint somewhere and then you apply it on your type parameter, and the compiler does what I consider a very advanced and very useful computation for you across your entire codebase. And if you're writing a library across, everyone's entire codebase that uses it, which is pretty amazing.

**Johnny Boursiquot:** That is amazing.

**Break:** \[20:41\] to \[22:39\]

**Johnny Boursiquot:** So the Go team has been very vocal and deliberate about advising pretty much everybody to not go gangbusters which generics on all the things, right? Not use it as a hammer with everything being a nail; just don't spread it everywhere. It's a very cautious approach, until some of the best practices start to emerge, and we can see the best use cases for generics in Go. Do you think that applies even more so for those who want to practice functional programming in Go? Or do you think, "Ah, actually, it makes our lives a lot easier? Let's just go full throttle?"

**Aaron Schlesinger:** Well, that is good advice for all software, I think. So yes, the answer to your question is yes. There is no telling right now whether map is enough. Or no one wants to use it. And if people do want to use map, there's no telling whether the parallel version of that is better, or complementary to the regular serial version of map, for example, right? So the parallel version, for listeners, would be instead of applying the function on every element of the list, one after the other, it's applying them in parallel with X number of goroutines, or at least concurrently with X number of goroutines, and then return the result. There's no telling right now... You can say this is correct, you can say this as possible, you can guess this might be useful for this case, or this case, or this type of software, or that type of software... But there's no substitute for usage in the wild, in the community, if you will. There's just no substitute.

\[24:22\] So these things should be tried... Maybe we should go a little crazy, as they say, as the Go team has said, a little overboard, to see what is possible... But we should not say that this is the result, this is the solution to all problems in FP. We should get these things out there, play around with them, experiment with them, see what works at a larger scale, and then say "That is the solution to problems X, Y and Z." This is why we all say we test in production, right? Because there's no substitute for real -world use cases. In that case, it's data; in our case, it's programmers experimenting with things, and seeing what actually works, in real-world code bases, but it's the same effect.

**Johnny Boursiquot:** So piggybacking off of that, the thread that we paused and now I want us to resume - you see what I did there...? \[laughs\]

**Aaron Schlesinger:** I do, I love it.

**Johnny Boursiquot:** The idea of -- basically, the when to use generics, and in our case here, when to use functional programming... I think that's a fair question to ask, regardless of generics. So one of the strong gripes that I found out there, that I've heard even in talking to some folks, is that, look, Go is imperative, through and through. We're kind of side-bending, and kind of pushing it in a direction it wasn't meant to, even though some of its features, some of its capabilities are well-suited for functional programming; you know, functions being first-class citizens etc, etc. A lot of the things you look for in functional programming, you can do in Go. But just because you can doesn't mean you should, right? That old adage. So is functional programming still in the realm of experimentation, and just people who are curious, they can play around with it, but really, at work or whatever, they don't really use it? Where are we in terms of -- I guess it's an adoption question, right? Like, are people interested or increasingly more so interested in using FP, now even with the bells and whistles that are enabled through generics? Is FP attractive enough for people who are traditionally doing this imperative style, especially in the world of Go? Should they be looking, or really, should we try to bring FP into our production code?

**Aaron Schlesinger:** Well, it's already here. Anyone who uses context is using a part of FP, right? Because context has a -- with cancel and with timeout, those return a function. This is how pervasive FP is. That is technically a higher-order function, because with cancel is a function that's returning a function that you call to close, to free the resources; there's an internal goroutine running, with a timer, and it frees that resource. That is FP.

And I think, like all technologies that are used by more than a trivial number of people in the world, a corner of this technology is used a lot, right? SQL is as another good example here. You can do many, many things with SQL. You can turn Postgres SQL, or PostgreSQL... I think that's how you say it, right?

**Johnny Boursiquot:** Yeah, yeah... I'll allow it... \[laughs\]

**Aaron Schlesinger:** \[27:53\] Yeah? Okay. It's got the Johnny stamp of approval... So you can turn PostgreSQL into a time-series database, if you want to, for example, right? By using very advanced features of SQL. But not many people do that, because obviously, a lot of times it's not the best tool for the job. But also, most people prefer, including myself, to stick with a smaller set of foundational features of the technology. And same thing with FP. There is a smaller set than even all the stuff that I said today, there's a smaller set of functionality that most people prefer to use, and my hypothesis for why that is is because it makes more sense, and it fits into more workloads.

So if you need to capture some state of a function, and expose one operation on that state to the caller, using a higher-order function makes a lot of sense. It's a lot easier than doing a bunch of boilerplate, and building a whole struct, and storing the state in the struct, and having a bunch of methods on it. And that - it just fits right into that use case, and that use case is applicable and exists on a ton of workloads, and so we use it. So FP, strictly speaking - it is everywhere.

Now, I'm going to modify your second question a little bit, accordingly... You said "Should we be trying to get FP into more workloads?" Well, given that it's already in a lot of places, I'm going to modify it and say, "Should we get more features of FP into more workloads?" Will you allow that? \[laughter\]

**Johnny Boursiquot:** Yeah, let's do it. Yeah, tell me more.

**Aaron Schlesinger:** Alright, so now we've got the seal on that, alright... So the way that I think about it is trying to model it as the imperative/declarative difference, I guess. There's a fundamental difference between imperative and declarative. You can see it with SQL versus Go, right? Because SQL, you say, "Dear database, this is the result that I want" and then the database has a ton of usually very clever implementation to figure out how to get whatever the way that it represents the data on disk into the result that you want. So you can filter, you can join, you can group, you can order etc.

Now, in the FP world, let's just take this map example I keep using. So with map, the intention is to take a function, apply it onto every element of the list, the slice, and then return a new slice with the results. You might return the same slice with the new results. That's also sometimes legal as well. But let's just say, for the sake of logic, we're returning a new slice, with new results. Well, we're iterating through a list, so that's a for loop. That's just what it is, right? We can write a for loop, and that's the imperative way. It's telling the machine to go through the list one by one, call this function every time, put the result into a new list. Or, the other way is someone else did that for you, and you just call map. And that's the kind of declarative way. Because when you call map, you're effectively saying -- like, with SQL, you're saying "This is the data that I want back." With map, you're saying, "I want a new list back, with the results of the old list applied to the function that I gave to map." And that's pretty much it.

So when we think about this question of "Should we get more features of FP into codebases that are mainly Go codebases?" the way that I think about it is "Would this codebase (or this part of a codebase) benefit in some way from more declarativity?" I think I may have made up that word, declarativity...

**Johnny Boursiquot:** \[laughs\] It works.

**Aaron Schlesinger:** \[31:53\] Yeah. I think people know it. We did benefit in some way. And there are a lot of possible ways that declarativity can help. It can reduce lines of code, it can add structure, it can add readability... It can also reduce readability if you're not careful, so that's a trade-off... It can fix bugs; like, if you have an error in one of your for loops - this happens a lot with parallel and concurrent code, and thus also code that deals with channel \[unintelligible 00:32:25.22\] a lot, too. I've seen that a lot as well. So it can reduce bugs, because you're just getting someone else's code that did it the right way.

And so if you think about it in this way - and this is where I start, with any codebase. I always start "Okay, well, is there code in here that we can reduce by using the declarative features of FP?" Whether it's maps, or reduces, or filters, or zips, and so on, and so forth.

And as a quick anecdote to close that thought out, I have seen filter as one of the most valuable next tools to take and put into codebases, because tons and tons of code has for loops that reduce down into selectively taking things out of the list and putting them somewhere else. And that's \[unintelligible 00:33:17.05\]

**Johnny Boursiquot:** Awesome. Awesome. Yeah, I can definitely see that. I think, at least for me, it's a mindset shift. I don't have a reason not to use FP, or not to bring some of the ideas... Or I should say, not to think FP-first in terms of "How do I approach, how do I solve this problem?" I'm so used to the way I'm used to doing it... It's more of maybe education, and maybe seeing more people talk about it, present about it, and having shows like this, where people knowledgeable like yourself come on and advocate for it... I think it's more of an education issue, more than the merits of it... Because all these things you're talking about here - these are things that make my program safer, they make my programs easier to understand... And obviously, as with everything in programming, we sprinkle things where they make sense... And if your team at work is not using FP style for things, and perhaps they want to or don't want to, so "Don't force it" kind of thing... But I think every once in a while, even using your example like filter, for example - I see the use case for it, now that you mention it, I see that everywhere. It could definitely be used in a lot more places. And who knows, maybe that triggers somebody to say "Hey, what's that? I've never seen this particular approach" And then boom, that's a brown bag lunch right there; you can educate some co-workers around the merits of FP.

So for me, I think it's an education thing more so than capabilities or features... Which kind of leads me to my next question. Is there anything missing in Go to nudge us even more towards the -- I don't want to say traditional FP, because I don't think we want to make go an FP language per se... But is there missing features in Go that would allow us to take even more advantage of FP concepts?

**Aaron Schlesinger:** Well, generics are young, and FP using generics is even younger. So really, the best I can answer that is hypothesize based on very, very unscientific things like gut feel, and things I've seen, and anecdotal evidence. I think the biggest thing that could unlock just building these things a little easier would be type parameters on methods of a struct or a type. You can't do that now. So you can't have -- let's say, you have a custom list type that's a list of type t; you can't have a method called map on that list that takes a type parameter u, and then returns a new list of type u.

\[36:05\] You can still build map; I've done it, and I know others who have done it, I've seen it all over the place. You can still build it, it has the same effect, and it works the same. The reason that I'm hypothesizing that type parameters on methods would make things easier is because for many folks who are trained using Java or C++, or other what I'll call pure object-oriented languages, although whether they're pure or not is another podcast...

**Johnny Boursiquot:** "Pure" in air quotes, for those not watching.

**Aaron Schlesinger:** Air quotes, yes. Thank you for that call-out. Definitely in air quotes. So folks who are trained with the classical OOP type of programming, OOP design patterns and methodology, having a method on a struct feels a lot like a method on a class in Java. It's not strictly the same, but for folks who are used to thinking of methods, if you have a method - again, air quotes; if you have a "method" on your list struct in Go, well, it makes more sense to do it that way, rather than to do it the more kind of pure, again, air quotes... "Pure" FP way, which would be a totally separate function that takes in a certain type, and returns a new type. Again, for some of the things that I've talked about today, that's not going to limit or reduce or eliminate correctness at all... But there are some more advanced things that could be unlocked by having something called higher-kinded types in Go. Maybe this is my unpopular opinion right now, is just to say higher-kinded types make -- and I was just talking to my manager about this two hours ago... Higher-kinded types add a ton of complexity to a compiler and a type checker inside of the compiler. But they do offer basically something called a type constructor, which is a type that depends on another type, right? And if you can do that, I'll leave it as an exercise to the reader, or listener or watcher, what kinds of things could you do with that. It'd take me a while to get into it, so I'm not going to go there now... But if you had that, now, assuming it was correct in the compiler, you can start to do some very advanced things. But the only thing that I'll say is, whenever I've seen that feature in a language, or not in the language, and then introduced into the language, at that point it starts to become what you call a functional language... Because getting to that level of sophistication in a type system often means that there are a bunch of people already there who have been demanding it, and those people are the majority, and those people write very heavily function-oriented code.

So really, I'm gonna just limit it to the type parameters on methods thing, because that thing is not very controversial, but higher-kinded types or higher order types are a very interesting and cool thing that I really do wish was in Go, because it would enable some very slick FP things.

**Johnny Boursiquot:** Yeah, that doesn't sound controversial to me. I can see that.

**Aaron Schlesinger:** Some might. Maybe some people will.

**Johnny Boursiquot:** \[laughs\]

**Break:** \[39:35\] to \[41:12\]

**Johnny Boursiquot:** Okay, so before we transition into unpopular opinions, maybe I want one of those controversial ideas... \[laughs\]

**Aaron Schlesinger:** Okay...

**Johnny Boursiquot:** Alright, let's get it going.

**Aaron Schlesinger:** I'm not gonna give one that talks about higher-kinded types, because it's been a while, first of all, so I don't think I would do it justice, or maybe even get some parts incorrect... Also, it would take me a while. But I want to mention one pattern from FP that I think is really great, and it's not that hard to do yourself in your code. I also don't think it's too hard to imagine how it would work in a codebase; it's called the lens. It maybe sounds like an intimidating thing to some people. It certainly did to me. The lens is essentially a tupple of two functions. One function is a getter for some data, and then the other function is the setter for some probably the same type of data. But you can have separate things, too. You can have a getter for one piece of data, and a setter for another piece of data in the same tupple. So usually, it's the getter first in the tupple, and the setter second in the tupple.

Now, the first function takes no parameters and returns the result, the data; it might take one parameter if the data is multi-dimensional, like a map, and you want it to specify a key... And that's up to you; that's part of the design pattern. And then the setter potentially takes in the dimension of the data, again, like the key of the map... And then it also takes in the data that you want to set into that place. So it might be the value of a map, if we're going to use the map, like the example of a map, right? And then it returns nothing. These things can also alternatively return an error if this is doing something over the network or something that might fail. Traditionally, they're not.
So if you could kind of imagine how these functions would be created, they would probably be closures. They would close over your data, they would take some parameter... Let's take the get case, for example - it would take the parameter for the thing to get, and then they would return the value of it. Same thing with the set - it would close over the data and then do its thing.

It's a fancy term called a lens, but it's a fairly basic, foundational thing. And that is a common theme in FP, actually. So I call this the lens, and it is in Wikipedia, and it's in the textbook, and everything... But it just boils down to functions, like most things in FP do. They just boil down to one or more functions, maybe combined together in some creative way, or maybe one function applied across a data structure in some other way.

\[43:59\] So I would challenge everyone listening to just give it some thought. Can that reduce code somewhere in your codebase? If you have a bunch of getters, can you get rid of those getters and just replace them with a closure, the lens? That's a very interesting one to me, because it is exceptionally simple... I'll put it a different way - the return on investment is very high, right? It's very simple, but it tends to be applicable and useful in a lot of places in the codebase.

**Johnny Boursiquot:** Very cool. I'd love to see that in action, like in practical use. The way you explain it, it sounds great. That sounds like something I'd be up for.

**Aaron Schlesinger:** There you go, yeah.

**Johnny Boursiquot:** Perhaps we need a blog post from you when you're done with school, or something... \[laughs\] If you don't mind me asking, what did you go back to school for?

**Aaron Schlesinger:** Well, I went back to school for computer science. I got an undergraduate Computer Science degree in 2008. I'm not that old, but I feel older than I am, I guess... You can do the math at home, see and figure out how old I'm likely to be... And so then I've been in industry ever since, focused on industry things... And they all tend to be very practical, they all tend to be single-goal-oriented... And all of the learning that I've done has been very focused on a goal, rather than broader. So I went back to get a masters, to get that breadth again... Because I've kind of missed that.

I kept using the SQL and the database examples because right now I'm taking a course in databases, so that --

**Johnny Boursiquot:** \[laughs\] There you go.

**Aaron Schlesinger:** ...easy extension there. But the thing that I'm planning to specialize in now is formal methods, because I love this stuff... Programming language theory, and things like that - I really do enjoy it a lot. And the formal methods specialization happens to have quite a bit of language theory stuff in it, so I look forward to that.

**Johnny Boursiquot:** Yeah, it sounds like you're in your bread and butter kind of space right now... That's nice. Nice, nice.

**Aaron Schlesinger:** Yeah.

**Johnny Boursiquot:** Now that you mention it, interesting enough -- I think we tend to go to school to get a specialization and to narrow down on a very particular set of skills... Even though when we go in, we might not notice what we're doing, but we're going to learn how to do X, and then we come out and we get a job to do X. It's very rarely do you go back just for the sake of breadth, right? Just to basically go find out what you don't know about it, and then you sort of see how you can apply it to your already existing set of knowledge that you acquired in industry. So yeah, I commend you for that. It's very cool.

**Aaron Schlesinger:** Well, I'm very, very lucky and privileged to be able to do that at this point. Because I think probably all of us remember in undergrad we probably just went so we could get to whatever our next step was. Most of us it probably was a job; maybe some of us was grad school, but most of us was a job. It certainly was me; I was laser focused on getting done, so I could get paid. But these days is different, right? I have a job, and I'm able to continue working in this job while I do this part-time program... So I fully acknowledge and I try to remind myself daily that I'm very lucky to be able to do something like this, just because I want to, rather than having to do something.

**Johnny Boursiquot:** Pretty cool, pretty cool. Well, Aaron, unless you have another more unpopular opinion for me -- although I don't think anything you said here is unpopular. Maybe it's just the way you talk and put it, but I don't think any of it was unpopular...

**Aaron Schlesinger:** Diplomacy, yeah... Well, I do have an unpopular opinion.

**Johnny Boursiquot:** Okay...

**Aaron Schlesinger:** This one will be unpopular.

**Johnny Boursiquot:** Okay, wait, then I've gotta play the song if that's the case.

**Aaron Schlesinger:** Okay, let's do it.

**Jingle:** \[47:55\] to \[48:11\]

**Johnny Boursiquot:** Go on, lay it on us.

**Aaron Schlesinger:** Alright. Well, I've been doing a bunch of Rust lately, some very low-level stuff dealing with virtual machines... And I believe now that I've used Rust long enough... I believe the type system in Rust is more complete, and leads to more concise and easier to write and read programs in Go.

**Johnny Boursiquot:** Okay then...

**Aaron Schlesinger:** Yeah, so the Go type system has some work to do.

**Johnny Boursiquot:** Okay, okay...

**Aaron Schlesinger:** I don't mean to fan the flames of the Go/Rust thing, but I'm sure I \[unintelligible 00:48:47.25\]

**Johnny Boursiquot:** \[laughs\] Too late, buddy...

**Aaron Schlesinger:** I've just done that... The flame war...

**Johnny Boursiquot:** It's been zero days now since the flame wars... \[laughter\]

**Aaron Schlesinger:** I know. I know... I talked a lot about type system things today, and it's not that Rust lets you do all those things. It certainly doesn't. But the type system in Rust has more features than the type system in Go. It certainly allows for some programs that take forever to compile and are hard to read, so that's the pro and con thing here... But from my experiences so far, it lets you write more expressive code, with fewer lines than the Go equivalent.

**Johnny Boursiquot:** Okay. Well, we shall put that to the test... The audience - they will tell us whether they agree with you or disagree with you, and come find you in the night, or something...

**Aaron Schlesinger:** Yeah, you all know my Twitter, so you can send me hatemail... I still love Go, don't get me wrong. I've been writing Go for something like ten years, or something... And there's no language I can build something more quickly in... And I'm just getting started with Rust, so this my initial opinion, though...

**Johnny Boursiquot:** Hey, you can love more than one language, that's cool. As long as it's Go and Go, that's cool. \[laughter\]

**Aaron Schlesinger:** Love anything you want, as long as it's Go. \[laughter\] I love that.

**Johnny Boursiquot:** Awesome, awesome. So thank you so much, Aaron, for coming back on the show and talking about functional programming. Hopefully, we hit a few nails on the head for folks that have been curious about functional programming, and how it's done, how it's been done, and what generics enable for us moving forward. This was a fun discussion. Thanks again, Aaron, for coming on the show.

**Aaron Schlesinger:** Thank you so much for having me, Johnny.
