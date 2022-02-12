**Mat Ryer:** Hello, and welcome to another exciting episode of Go Time. I'm your friend in the neighborhood Mat Ryer, and today we're talking about functional programming. Yes, a Go podcast talking about functional programming. That's right.

I think it's gonna be a great show. There's only one way to find out, and that's to do it, and then listen to it and see if it was good or not. And joining me to make it good - I'm joined by two of my favorite gophers. It's Johnny Boursiquot and Aaron Schlesinger. Welcome, gentlemen. How are you?

**Johnny Boursiquot:** Very well.

**Aaron Schlesinger:** Hey! Very good.

**Mat Ryer:** Johnny, it's been a while since we hung out on Go Time... What have you been up to?

**Johnny Boursiquot:** Yeah, it's been a couple weeks at least. I've been doing some teaching, some Go training, but what I really enjoyed since I've been off air, so to speak, was a GoBridge workshop that I taught in New York last weekend. It was organized by some folks at the GoBridge community, but really the heavy-lifting was done by the Women Who Go chapter in NYC... So sho ut-out to the organizers there. [Jonas](https://twitter.com/YiGeNaNa) is definitely one of them, [Wilken](https://twitter.com/wilkenrivera/) definitely helped with that as well so shout-out to those folks and its TAs. This was really, really well put together; the spot was great, everything was well organized, and the only thing I did was to show up and teach, which I think was basically just half the battle there. But yeah, it went really well; the folks learned a ton, and I had a blast teaching it.

**Mat Ryer:** Brilliant! Who is GoBridge for? If any listeners are interested in getting involved, how can they either contribute or just take part in it?

**Johnny Boursiquot:** Its core mission is diversity and inclusion within the Go community specifically. Basically, we're open to all under-represented groups within the community. One of the ways we do that is by basically having those free workshops that target those individuals. They come in for the day, or if it's a two-day workshop, they come in Saturday and Sunday typically, and we usually have TAs, community members that give up some time, and we have people teaching... It's a community effort to help address the lack of diversity and inclusion in the community.

\[04:04\] You can either organize a workshop yourself, or teach, or TA, you can always donate money to the Bridge Foundry organization, and that money will find its way to us. It helps us with offering diversity scholarships to some of the conferences that you know and love, GopherCon included... And yeah, there's lots of ways to help, really. If you have any questions about it at all, feel free to reach out to me directly on Twitter, or reach out on support@golangbridge.org (email).

**Mat Ryer:** Brilliant. What's your Twitter name?

**Johnny Boursiquot:** My Twitter handle is [@jboursiquot](https://twitter.com/jboursiquot).

**Mat Ryer:** Awesome. That's great. What I love about this, of course, is diversity on teams makes the teams better, in my experience, whatever that diversity looks like. And actually, the more diverse, the better... Because you just never know what a different experience is gonna influence things; so a nice, broad range -- that's why I think GoBridge is doing such an important thing for the community and for our teams.

**Johnny Boursiquot:** Yeah, I totally agree, and I think there's been tons of articles and research and things that have come out and shown and proven that it makes business sense to have diverse teams within your organization or at your company, and within the community overall. I think it's a win/win for everybody.

**Mat Ryer:** Yeah, it's brilliant. Well, also joining us today - joining us again from last week - Aaron. Is it's Aron or Aaron when I pronounce your name? Or is it no difference to you?

**Aaron Schlesinger:** Nah, no difference to me. Not really. The last name though...

**Mat Ryer:** Schleslinger.

**Aaron Schlesinger:** Yeah, let's talk about the name though...

**Mat Ryer:** Let's talk about it.

**Aaron Schlesinger:** \[laughs\] You put another L in there again...

**Mat Ryer:** Oh, Schlesinger.

**Aaron Schlesinger:** Yeah, there you go.

**Mat Ryer:** Schlesinger, yeah.

**Aaron Schlesinger:** Yeah.

**Mat Ryer:** Sorry, mate.

**Aaron Schlesinger:** That's okay. No worries. You said it just fine the first time. I'm used to it.

**Mat Ryer:** We'll edit it out, so that in the podcast I sound like I got it correct.

**Aaron Schlesinger:** No worries. \[laughter\]

**Mat Ryer:** So what have you been up to since last week?

**Aaron Schlesinger:** I've been doing a bunch of Athens stuff, I've been teaching a bit too, on the topic of Athens... And I've been writing some TypeScript stuff too, which has been kind of a refreshing pause from Go, because it's totally different. It has classes, and objects, and generics, and all the things that Go doesn't, and it takes a completely different approach from Go... So it's been kind of cool to compare it in my mind interactively.

**Mat Ryer:** Very interesting. Maybe we'll get to talk a bit more about TypeScript as we discuss functional programming. Complete disclaimer - I don't know much about functional programming at all. It's not something that I've really had the time to properly dig into. I've got a sort of general enough idea about it, but I'm gonna act like the newb, the audience member who doesn't really know what it's for.

There's a lot of tech wars all the time on Twitter... It's very common to say "Which do you prefer, Go or Rust?" It's a very common thing you hear a lot... And really the question is kind of flawed, because it's more about -- well, there's lots of other things that I think would lead you to choose a language. The problem space you're dealing with is one of them. But actually, even just developer happiness - I think if a developer is gonna work on something, they should pick the language that they're gonna be most productive in, the development team. I think that's also an important thing.

So functional programming is gonna be somewhat new to me, and I'm keen to learn as much as I can about it. Why don't we kick off then? Aaron, you could perhaps give us a little bit of an intro. For somebody who's never even heard of functional programming, how would you describe what it is?

**Aaron Schlesinger:** \[07:54\] Yeah, usually there's a really simple, frustrating answer to that, and then a crazy, complicated, also frustrating answer... So I'll try to kind of hit the middle ground there, so that it's not frustrating. First and foremost, functional programming can be anywhere; it doesn't just have to be in some of those hardcore languages. As the name implies, it's all about functions. Obviously, you write functions, but also you use functions in new ways. You can pass functions into other functions, you can nest functions inside of other functions, you can do this thing called composing functions, you can return functions... And this is all kind of familiar to Go, because functions are first-class citizens there. So really in the Go context functional programming is just another strategy to pick up and use it appropriately.

**Mat Ryer:** It's really interesting to hear you say that. The first point you made was that you can do functional programming anywhere, even in Go.

**Aaron Schlesinger:** Yeah. I mean, I won't say everywhere, but 99% of the places you write code, you could do it. Including Go. Don't let anyone tell you otherwise.

**Mat Ryer:** Right. Is it more like a set of rules then?

**Aaron Schlesinger:** Yeah, it's kind of half set of rules and strategies, and maybe the other half you could say design pattern. I know that's a loaded word, but sort of design pattern.

**Mat Ryer:** So what are some of the rules then? Because for example I know that you should get the same output when you put the same input in.

**Aaron Schlesinger:** Yeah, that's a rule you can take and apply to some parts of your code in Go. That's called pure; purity. A pure function would be a function that always returns, like you said, the same thing for the same input. That means usually that it can't do I/O. So that's super-limiting, obviously... But it's also really powerful if you put it into parts of your code, because you can kind of reason about it super-easily. And you can write tests super-easily for it, too.

**Johnny Boursiquot:** From what we're saying, it sounds like it's a set of principles and strategies that you employ, but also one could argue that the underlying technology, the programming language does a lot to help or facilitate that. I imagine that writing functional in something like Scala or Haskell is gonna feel vastly different than doing it in Go, which wasn't really designed for that. Would you agree? What don't we know there?

**Aaron Schlesinger:** I would agree. There are languages - like you said, Haskell is probably the prime example... Those languages are designed for functional programming, and they just don't let you do the so-called imperative programming, the opposite of functional programming. So learning something like that, you just have to completely relearn programming almost. But then on the other side of the coin, if you're going into Go, there are limitations there. In Go's case, one of the big limitations is the lack of generics. There are some things you can't do in the functional programming world with Go. So there's a middle ground to strike everywhere, because Go has its strengths. And if you were to take 100% of the functional concepts and build them into Go, you would lose a lot of the Go strengths that we all know and love.

**Johnny Boursiquot:** So you're definitely not advocating that. If the things that you can do in Go that are functional - they should sort of replace the way you do Go; the idiomatic Go, the imperative style of doing Go. You're not gonna get the most bang for the buck there, so if you really want functional, you should use a functional language, right?

**Aaron Schlesinger:** \[12:12\] Yeah, I'm certainly not advocating in the Go case to just dump everything you know. In some cases, that would be impossible anyway. But for the Go world, it's all about just identifying when a functional pattern would help, and in most cases it would reduce the amount of code you have to write, and then doing it. And like you said, if you wanna go hardcore, then go pick up Haskell, or Scala, or even Rust. Those are the kind of languages where you really can dive in and go super-hardcore, and wreck your brain and relearn everything... And that's cool. But if you're a gopher and you wanna stick with Go, that's really what it's about - identifying when the pattern would help, and then going forward and implementing it just in that one part of the code.

**Mat Ryer:** That's brilliant. Now, remember, people listening live can join in on GopherSlack. We're in the \#gotimefm channel, and there are some gophers in there already asking some questions... What are some domains or problems where functional programming is a good choice and a good strategy? BarnabySalter asks "Is it only for mathematical or scientific disciplines?"

Aaron, could you tell us a bit about what sorts of problems functional programming is good at, and perfectly targeted for?

**Aaron Schlesinger:** Yeah. In the Go space it's definitely not just for math and science. That being said, if you go on Wikipedia and you look up some mathematical strategy, a lot of times you can literally translate one of the proofs into Go and it'll look functional... But domain-problem-wise, in addition to math and science, if you look at something like config parsing - let's take that as an example... Almost all the time you're gonna get back out the same thing if you give it the same exact config file. And I know before I said you shouldn't do I/O, but if you think about config parsing, you can give it a string that represents YAML, or TOML, or whatever it might be, and it'll give you back the exact same struct. And that's really powerful, because you can always rely on your config parsing code to give you back the same config. And right there, that's super-simple in terms of what we already know in Go... But that actually is a functional principle; and that's starting simple, but it goes on from there.

**Mat Ryer:** It would be weird if it wasn't the case where you put the same input in... If you got a different output with the same input, you'd probably consider that a bug, but what about things like if there was a time in the config, and it was setting a default value to the current time? Or actually, the current time at all - how is the current time even thought about in functional programming?

**Aaron Schlesinger:** Yup, of course that's an exception... And that touches on when do you depart from functional? When do you know "This is too hardcore, and we shouldn't deal with the purity example. But there is a way to get around that, and there's a way to parse a config file so that it instead of returning or setting the current time in one of the struct fields, it puts a function instead in that struct field... So you always get back a function, and then you can decide when to go ahead and call that function later on, and then that specific function becomes an impure function of course, because it always gives back something different.

But overall, when you're managing that config struct, you always have the same thing that you're looking at and dealing with when you pass it all around your code.

**Johnny Boursiquot:** \[16:03\] One of the major benefits that I immediately picked up when I started looking at functional programming in Go was the judicious use of basically passing around and receiving or returning functions; you could tell right away there's a heavy emphasis on --obviously, it's functional for a reason, right? So basically passing functions, just like you're saying, and being able to return functions that you can then call on... Go's treatment of functions as first-class citizens absolutely makes that possible.

I watched a talk by you, actually, at Gotham Go - it was probably last year - on functional programming in Go, and one of the things that you talked about was how higher-order functions make that whole notion possible. So if there's one thing a gopher could take away from thinking about functional programming, would you say using higher-order functions, basically the taking in or returning a function to do things - would that be a major takeaway? Because I'll be honest, that's something I don't see a ton of. Usually in the more complex cases, where people who really know Go, who really know what they're doing, you can see a bit more of that, but I don't see that in everyday Go code. But when I saw your talk, I was like "Wow, this is a natural way of thinking. You can do more of that." Is that a good way of thinking about it, if you're a Go programmer who's not used to doing that? Is that the first big takeaway you could have?

**Aaron Schlesinger:** One hundred percent, yeah. I'll even give a super-common example. If you're writing an HTTP server and you've got a global database variable, that's fine, because that database variable is gonna be sitting there probably for the whole life of your program... But on the other hand, you can pass a database variable as a parameter to a function that then returns an HTTP handler. Then testability gets a little bit simpler, because you can test each handler with a different database driver, or an in-memory driver, or something along those lines. So you're passing in something to a function, receiving a function, and that function itself is the HTTP handler that you can then plug into whatever router you're interested in using. And that right there is -- you're passing in a thing, you're getting back a function, and right there that's a functional pattern, because like you said, it's a higher-order function.

**Mat Ryer:** And it talks a bit about not having side effects as well to calling a function. Johnny, you touched on this a little bit. There's some principles there that I think we already have started to talk about in Go. For example, I like the idea of no unexpected side effects, because it's magic. For example, currently in the images package in the standard library, if you import the jpeg package and you just do an \_import, you're not gonna use them, but just by importing them, they then register themselves and you can then add support for jpegs or pngs or whatever you import.

Now, I assume that was early in the standard library's history that they were playing around with ideas like that. Generally speaking, I personally don't think that's great, because it's too magic. When you import something, I wanna import it and then use it explicitly; I don't want it to be implicit. So there's probably some of the thinking as well that you could apply in parts outside even just the functions within Go.

**Aaron Schlesinger:** \[19:56\] Yeah, you hit it on the head. I think a lot of the standard library database stuff does that, too. Just like, you've gotta remember to do it, and if you don't, you'll crash at runtime; it'll panic the mySQL drivers and register... And like you said, it's shared state. Another option then to go and replace that - I think we all know and love the builder pattern. That is also a functional concept, because if you were to go and say `db.WithDriver("mysql" )` maybe you pass in "mysql" or something like that and `db.WithDriver("mysql")` returned itself a database driver that implemented mySQL, right there that's also a pure side-effect-free function, and it returns kind of itself, so that you can chain those things together. And you can say `.WithDriver().Connect()` and then maybe you pass in the host string, and `.Query()` or `.QueryBuilder()`, or whatever that might be, when you start seeing those registration patterns happen explicitly in a function, then you start seeing those functions chaining together. Basically, you're doing the builder pattern, but you're taking advantage of those pure functions, and you start to do things that start to look like some other functional patterns that we kind of haven't gotten to, but they're maybe functional programming 102-style patterns, which start to get you some really, really powerful code.

**Mat Ryer:** Yeah, `func append(slice []Type, elems ...Type) []Type` springs to mind as one that you might consider pure, in the sense of -- you know, we always assign back to the slice, or to a new slice. Essentially, it returns a new slice... Although of course it can affect the underlying array. So I guess there are some times where it's not pure, is that right?

**Aaron Schlesinger:** Yeah. There's this concept of observable purity and interface purity. When you talk about a language like Go, you probably wanna be pure, in that you don't modify the underlying slice, the underlying array, because there might be another goroutine touching it... But append is always interface-pure, because it will always return the new array, instead of from your perspective in your goroutine just modifying the underlying thing and then making you just start using that same variable.

It's a really cool pattern in terms of you using append, because you always know that the thing that append returns is the new one that you have the new value on.

**Mat Ryer:** Yeah. I quite like it, because it also makes it very easy to branch things off, to sort of set up some commonality, and you'd be able to then -- whether it's literally branching it, or at least logically being able to think of... You could pass that thing, whatever the new thing is, into some other place, and keep a reference to one of the ancestors almost, in order to keep it -- I've not explained that very well, but... Don't worry. They'll fix it in post. I'll just say loads of words, and then they can put them together in the right order.

**Aaron Schlesinger:** Yeah. That was 95% the right order, I think...

**Mat Ryer:** Yeah, 95%, I'll take it.

**Aaron Schlesinger:** Yeah. Well, an interesting word that you said there was "branch." And you can actually make binary trees that are almost purely functional based on append. So if you're really into something like that, you can basically create a new tree, a copy of the old tree, using append. So you can have tree1, and you can add a new child node or a new leaf node, or... I forgot almost everything about trees, but I know there's a way to represent them in slices, and if you do an append, you can just create a copy of your tree number one, and get a tree number two out of it. It's kind of like the non-pure part of the append function actually helps there, because it's a really fast operation then to create a new tree.

**Break:** \[24:19\]

**Johnny Boursiquot:** I had this impression of functional -- in my early years as an engineer, I'd always hear of functional programming, and it always had this air of superiority around it... Like, only those who had mastered the unknowns, went to the mountaintop and came back with a tablet could understand or even approach functional... It was like the next level, it was the evolution of the coder; once you've evolved beyond the mere mortal imperative style, then you could do functional.

My functional experience is limited to a little bit of Elixir that I started learning, because I used to do Ruby, and that became very popular in that community... To me, it always feels like we're always trying to bring functional concepts into the imperative style, basically saying "Hey, you can make your imperative programming more stable, more resilient, by adopting some of the principles of functional programming", but I'm curious, given your background, have you come across situations in the functional community where you're doing the reverse? ...you're bringing some of the good ideas that exist in the imperative world - you bring in those to the functional world. I'm asking because I really have no idea what those would be.

**Aaron Schlesinger:** Oh yeah, totally. To address the first thing you said, there is totally a religious war... I think, Mat, you said it at the beginning, too... And the functional purists are kind of at the mountaintop, and a lot of times it's tough to break in. Even if you go on Wikipedia, there's all this math... And it's crazy. If you're looking at a math proof, and you're like "How does this relate to programming?"

But some of the stuff - for example, there's this concept of mapping over an array. Mapping over an array - I think somebody even said in here... Yeah, Barnaby said "Just remove for", in the channel. Mapping over an array actually just lets you do a for loop without having to write all the for stuff. You don't have to write `for i := range` or anything like that. Instead, you can just do `myArray.map()` and then pass in basically a callback function that the map function will just run for you on every element of the array.

**Johnny Boursiquot:** I was thinking, is that a *functor*?

**Aaron Schlesinger:** Oh yeah, but when you use that word, people start walking away, in my experience... \[laughs\]

**Johnny Boursiquot:** The only reason I can say that is because I watched your talk... "Yeah, I'll mention that word and that'll make me sound like I know what I'm talking about...", yeah, that was my...

**Aaron Schlesinger:** Oh, yeah... \[laughter\] So you're at the mountaintop then already.

**Johnny Boursiquot:** Yeah, I gleaned and it was shining way too bright for me; it almost burned my eyes out, so I had to come back down.

**Aaron Schlesinger:** I was just gonna say - I learned that word from the Scala days, and there were a bunch of crazy functional libraries in there, and I wrecked my brain trying to figure those out. I picked up *functor* and two other words, and then when I came over to Go, I kind of realized "Hey, this isn't really crazy. You don't have to call it something crazy." You just see it in the wild, and people just say "This is a callback", and that's it.

**Johnny Boursiquot:** Well, we like to use big words for simple things.

**Mat Ryer:** *Functor* sounds to me like a kind of Go super-villain would be called *Functor*. \[laughter\] It's like *SuperFunc and Functor*. \[laughter\]

**Aaron Schlesinger:** Can we get some action figures for those, too? \[laughter\]

**Mat Ryer:** Yes... I'm sure Ashley can design some for us.

**Aaron Schlesinger:** Ashley, if you're listening...

**Johnny Boursiquot:** *Functor*, go...! \[laughter\]

**Mat Ryer:** \[30:06\] So whenever there's this kind of snobbery around something, it usually ends up being -- it's either inaccessible for some reason, and I don't usually believe that the reasons are usually that valid, but one question this leads me to is "How about readability?" Is one of the reasons why functional programming has this elevated status - is it because when you read it it's difficult to read? Because I've read some functional code and it certainly doesn't spring out to me like Go code does. Go code has a very good glanceability, because it doesn't have much magic in there. Technically, functional programming should be even less magic, I would assume... But when I've seen some bits put together, it's a little bit like -- you know, you used to get these programmers that were very happy when they could cram all this program onto a single line; they get very proud of that... Whereas I always tell people in Go "Just be more verbose, break out onto many lines, because it's just so much easier to read." How's the readability of functional programming code?

**Aaron Schlesinger:** It really depends on the language. Go has this kind of asset that it really is so simple that if you wanted to make some crazy functional concept, or construct, you really would be forced to break it out onto separate lines. Even naming the variables makes a difference there, too. I would bet that the chances of you creating meaningful variable names would go up if you're gonna end up having to break stuff out onto new lines. Even that makes a difference. It's like, now I can tell what's going on, because instead of "i" it's my new array, with added integers, or whatever it might be.

But you can go on the other side of that coin... Even in Go, if you've got a query builder for SQL queries -- like I said before, that technically is a functional concept, but you can build up some super-crazy queries and have ten function calls chained together in a row. That can get kind of confusing, because you can go and say "Okay, I'm starting off with this select", and then somehow I'm doing a join and a filter... And after a couple function calls, at least to me, I can't really imagine what the actual query is gonna be that runs against the database. It's like there's an inflection point; at some point you're gonna be calling five or six chain functions, and at that point you're like "Wait, what? What am I trying to do again?" And that's probably where you start breaking it out; those variable names, and maybe some docs are gonna start making your future self and all the people on your team - making their lives easier and making them not wanna come hunt you down and do something to you... \[laughs\]

**Mat Ryer:** That's actually *Functor's* origin story.

**Aaron Schlesinger:** Yup, exactly.

**Mat Ryer:** He did some bad code, and the rest of the team hunted him down, and... But I don't wanna spoil it.

**Johnny Boursiquot:** I don't know how far we can take this one...

**Mat Ryer:** Well, I think all the way to Netflix.

**Aaron Schlesinger:** Yeah, yeah.

**Johnny Boursiquot:** Netflix original. Let's make it happen.

**Aaron Schlesinger:** Let's do it! \[laughter\]

**Mat Ryer:** Yeah, so what about testing then? I imagine if you have these pure functions where the input - whatever the input is, the output is always the same, as one of the rules... I imagine writing tests does get easier. Can you do a lot more table-driven tests, and things like that? Does that just completely make sense now, in that world?

**Aaron Schlesinger:** \[34:07\] Yeah, for sure. Take for example the whole pass in the database param and get back an HTTP handler example... Let's say you did a table-driven test that had a bunch of tests against a specific route - you could, in theory, take out the HTTP server, like httpTest.testServer; I think that's what it's called... You could save that for an integration test, and you could actually go and start passing in in-memory databases, and then just calling the handler directly, and you get these super, super-fast and efficient unit tests out of that, that really target your every single HTTP handler that you write. And then you can even build on top of that and start writing your table-driven tests against different types of databases, too.

An example there that I've seen a bunch if you've got your quick tests that run against memory databases, and then you've got a little bit slower tests that run against SQLite, and they will actually literally test your SQL queries out. Then you can start testing query injection and all that crazy, awesome stuff, too.

**Johnny Boursiquot:** So the imperative gopher in me, I guess, is basically saying "What would be the advantage of using functional here, using interfaces to mock out some of this behavior?" Does one offer a much greater advantage over the other, or really you can pick whichever one makes you more productive?" What's the decision, where's the threshold to making that decision to go to functional style versus basically just using your interface?

**Aaron Schlesinger:** That's a good question, and I think it comes down to that inflection point. If you're finding you're gonna write some crazy .map function that's gonna abstract away your loops, and you and/or your team are really struggling with it, that's probably when you just go back and you write your interface and you write your for loop... We know that's idiomatic, awesome Go code. But I think really where it matters is if you find yourself writing a bunch of for loops and your interfaces start getting bigger and bigger - that is probably a good place to start prototyping something in a PR, and figuring out "Hey, could I break apart this interface and replacing a couple of those methods with maybe a couple functions outside of the interface, that modify some stuff inside one of the implementations?"

I think a lot of folks will find just doing that, assuming you write some decent docs on that function - just doing that can really simplify things a lot. I would call that writing in the functional style, because that specific function you're writing can start getting pretty interesting... But really, when it comes down to it, you're just taking a method out of a struct or out of an interface, and just breaking it out into a function... And really a lot of times just that can simplify stuff in your implementations for the interface.

**Johnny Boursiquot:** Some of the questions in the channel are sort of hovering around performance impact - what kind of impact does that have on your code being able to run in parallel, if any at all? And along those lines, is there a performance penalty or gain to actually having all these functions calling these other functions? Although one could argue you're kind of doing the same thing in the imperative style, although in a more readily apparent way versus the functional style... But I guess those questions are kind of digging into "Okay, what is the performance penalty, if any, for using the functional style over the imperative?"

**Aaron Schlesinger:** \[37:58\] Yeah. I mean, if you go crazy, there's gonna be a penalty for sure, because you're gonna start copying memory all over the place in the heap... But let's take the map in that functor. A map is basically an abstraction over a for loop; so you're gonna have your same array, you'll wrap it in a struct, so there's some memory penalty there... You'll wrap it in a struct and then you'll call your .map, and the .map is gonna take in a function. So there's some memory penalty there, but inside of that .map function you implement that, again, with just a for loop. So you don't get the actual runtime performance penalty there, because you're really just building a convenience function on top of a for loop, in that case.

**Mat Ryer:** In this example, the map is like the `forEach()` in JavaScript, isn't it?

**Aaron Schlesinger:** Exactly, yeah. There is one difference, in that `forEach()` doesn't return anything, but the map will return the new thing, basically; the new thing that you've transformed using that function you passed into map.

**Mat Ryer:** Right. If you have an array or a slice of ints, and you just wanna increase them all by one, you could call map and have a function, and that function will just take in an int, add one and return the new, return the int with that plus-- okay.

**Aaron Schlesinger:** Exactly, yeah. And that doesn't necessarily need to return a completely new copy of the slice. So the function won't be strictly pure, but it'll have all the conveniences of functional maps, and it'll also be, like I was saying before - there's the observable pure and the interface pure. Interface pure basically means "Hey, I can write this in the style of functional programming", and that's what you get with maps. The trade-off is you still have the same performance.

**Mat Ryer:** You mentioned earlier the HTTP handler func, and I wonder, does the way that we talk about middleware - because in middleware it's quite easy in Go to have a function, and you pass in an existing handler, and you can pass in additional arguments too, and it returns a new handler, but it's in some way modified by whatever the middleware is gonna do. You could imagine it's very easy to run code before then calling the original handler, and things... Does that kind of thing happen in functional programming, too?

**Aaron Schlesinger:** Yeah, absolutely. Middleware... Barnaby just said, "Middleware is just a builder pattern." Pretty much. I mean, you take in this next function, basically, and you wrap it all around a new handler, and that is called functional composition. You take in a function, and then you return a new function, and then inside of that new function you return, you're calling the next function. And as you build up middlewares, you keep composing those functions deeper and deeper inside of each other.

Eventually - let's say you had five middlewares - you've got a top-level function that nests five other functions beneath it, and then all the way at the bottom of that you've got your next function that's being called... And assuming the middlewares do stuff, then there's a bunch of modifying the requests, and the response, and checking stuff, and all that good stuff, too.

**Mat Ryer:** That's very cool. I think I've written this kind of thing -- well, I've definitely written it like this before, without realizing it was functional programming, I think. That's always fun.

**Aaron Schlesinger:** A for loop would be a way of flattening all that out, because you basically have a tree of functions that goes down the chain, and then if you were to take a for loop, you would basically go through and execute a bunch of different functions one after the other to check the requests, and the response, and all the cool stuff that middleware does... And then at the very end of the for loop then you would actually call the route.

**Mat Ryer:** Are there any examples of this from the standard library that we could point to?

**Aaron Schlesinger:** \[42:05\] Yeah. If you look at sorts, sorts do this. They can pass in a callback, sorts, and you don't really know what two elements of the list you're gonna get... But you take a function that just takes two elements and returns, whether or not the first one is bigger than the second or vice-versa...

Actually, someone mentioned parallel programming... Yeah, Barnaby, you're on fire in the channel; you mentioned parallel programming. I swear I didn't pay him to ask that question, but it's a really awesome question... Because if you think about that, if you wanted to, you could go and write a sorting library, or a map function, or for that matter a ton of other functionality, and if you're talking about passing in a callback to a function, you get this great abstraction that the function can then go ahead and start doing cool parallel stuff, just by calling that function in different goroutines.

**Mat Ryer:** It's interesting - is that because it doesn't matter which order these things happen in, because it's all deterministic, in theory? So they iterate over a slice, but run them all at the same time if you like, and the end result should be the same.

**Aaron Schlesinger:** Yeah, this is one of the benefits of a pure function. If your callback is pure, and internally you're running all those same callbacks parallel, then it's all good, because the callback isn't gonna rely on some global state that's gonna be race condition-y, and it's not gonna be calling some outside network service, and all that cool stuff... And you can just spin up a ton of goroutines and pipe the values back in after each of those functions is done running.

**Mat Ryer:** Yeah, and it's not quite the same, but it reminds me in microservice architecture world, and message queues, and things - it reminds me of idempotent messages, where if the inputs are the same, then it doesn't matter really how many times you do it, the end result is the same; in a sense, we're trying to get the component to be pure in some way. It's not quite the same, but the principle, actually - I've definitely seen that benefit pay dividends, that design pattern in the past.

**Aaron Schlesinger:** Yeah. The idempotency is a subset of purity, in the hardcore functional theory world... And yeah, idempotency is usually enough for these sort of fan-out patterns. I actually read about another pattern in the microservices world that applies here... If you're building a search engine and you've got a news feed, and a weather feed, and of course the search results, images and all that stuff - you can actually do a fan-out and do multiple requests to each of those image service and search service and weather, and all that... And you can just take the one that comes back the fastest and dump the other ones on the ground. That works, because it's a get request, and it's idempotent, and it's not gonna make any sort of side effects... In other words, it's just all reads. When you're operating at scale, that can really give you some good speed-ups and sort of that longtail of request latencies.

**Johnny Boursiquot:** Yeah, I remember this pattern was actually one of the examples that I believe [Rob Pike](https://twitter.com/rob_pike) gave in one of his earlier talks. He was talking about the exact same example you gave, whereby you could have multiple goroutines go perform that same exact operation... And because it's idempotent, it doesn't matter which one comes back first; it would have been the same result, in theory, for all the goroutines... So whichever one comes back first, that's the one you go with.

Yeah, that's actually something I wish I saw more often. Maybe I don't work on things that work at that scale, but that is a very interesting and very useful pattern, actually.

**Aaron Schlesinger:** \[46:15\] I think I may have stolen this from him... I saw a talk of his a while ago too, in the Erlang world; this is a pattern there, too... But to implement it, I think the code Rob showed was -- it was a good amount of lines of code, and... A functional pattern would be to wrap that code in something like a map function, or something like a `doIn()` or something along those lines, where you just pass a bunch of functions to another function, and then under the covers that thing is gonna take care of spinning up all the goroutines, and running multiple of the same function over and over, and all the cool stuff about getting the result back that returns the fastest... But to the caller, really you're just writing one function per major functionality you want, and then the underlying thing does all this awesome magic, to do the cool background fast, or whatever awesome other stuff that you want your library to do.

**Break:** \[47:26\]

**Johnny Boursiquot:** I'm wondering what the impact for testing is... On one layer of my mind I'm thinking, well, if it's just a function, you can write basically at the unit level. You can write a test to maybe test every nested function you could possibly call for a given operation... But at the same time I'm thinking "Well, is it enough to just test at the API level?" Because the calls you're gonna make are gonna go through every single layer of function that you're calling, every nested function anyway. How do you approach testing differently, if at all, in the functional style?

**Aaron Schlesinger:** This is where the whole "Test the interface, not the implementation" thing comes in. I've heard that said a bunch in the Go community, and I've seen it implemented a lot. It's awesome, because in Go we can pull in all these insanely cool libraries that just make our life simpler, and those are obviously tested; if it's a solid library, it's gonna be tested really well... And in the functional world, you can kind of do the same thing.

If you're gonna take five functions that each does a slightly different thing, and you're gonna pass them into a package or a library that's gonna take care of making them all concurrent and cool, and stuff, really you just have to test each of those functions to make sure that it does the right thing, obviously, and also to make sure that it doesn't have those side effects and it's idempotent... And then beyond that, you're gonna just lean on that library, or another person that may have written the parallel stuff, or maybe even yourself in a different mindset that wrote that parallel stuff... You can split up the testing then, and you can test your business logic, and then in a whole different package, in a whole different test suite, you can test the awesome parallel stuff completely separately... And it really makes it a lot easier then, because you can just focus on your one thing in each different context.

**Johnny Boursiquot:** \[50:23\] It makes sense.

**Aaron Schlesinger:** That's a piece that I really love about generally functional programming. Since you've got these new, higher-level abstractions in general, the testing just becomes that much easier, because you can think about stuff separately a lot more.

**Mat Ryer:** Would it be strange if you hadn't had much experience with functional programming - you're just a Go programmer, and you've stumbled upon a repo that was written in the functional style... Would it make sense at a glance, and would the code that you end up writing with it make sense, or would it be different and would it feel different to the programmer as well?

**Aaron Schlesinger:** A lot of times when I first started in Go I would see code that would take callbacks, and I would say to myself "You know what, that's not really the Go style." I didn't really think callbacks were a thing that you did in Go. And I imagine that might be the same feeling that someone new to the functional style would say. "Why should I pass a function in? What is this library gonna do with my function?" I think yes, it would probably be kind of confusing, because it's this new thing that's not really idiomatic to Go necessarily.

I think docs are huge. If someone is writing a library in the functional style... You know, if you've got an exported function that takes a callback and does some insane, cool stuff with it, writing those docs that are gonna be visible in [godoc.org](https://godoc.org/), and really explicitly saying "This is how we're gonna use your function. This is what you need to make sure your function does. If you don't do it this way, we're gonna return an error, or your database is gonna blow up", or whatever it might be... That is massive. That's gonna be the most important thing that you can do in your new functional style library, for sure.

**Mat Ryer:** `filepath.Walk(root string, walkFn WalkFunc)` is an example where it takes a function and it calls that function for every file and directory that it finds as it's walking. That's the real standard library example of it. And what they do - even though you actually don't have to do this - is they create a type for that function... And I think that's there for documentation purposes. It's called WalkFunc, and it has its own type. You could just describe the function in the signature, although that could get ugly, but I suspect - to your point - it's more of a documentation thing.

But at the end of the day, you're just calling functions and methods and things, so at least the Go code - we'll be able to understand it, if we read it, won't we? We'd at least know that this is calling a function... Or does it get to the point where it really starts to look weird, where you do lots of nesting on one line, and things like that?

**Aaron Schlesinger:** Yeah, like you said, if you were to just copy that function signature in to the filepath.Walk, that would be crazy. If you start looking at that function signature, it would end with ten closed parentheses, or something... And at least for me, when I see that, my eyes just start glazing over... Because I've gotta start counting them, and it's crazy. Crazy business.

\[53:46\] One thing that I love that they did in that case is they created that file, the walker, but they also documented that type super-well. They said "You might get an error in this case passed into the function, and if you don't get an error, you're gonna get the path if it's a file; you're gonna get the directory name if it's not a file." There's tons of stuff in there that I can look up without having to look up the documentation for the actual filepath.Walk function. That lets me do that separation of context really well, because I don't have to think about how filepath.Walk is working; I can just go look at that type and figure out how does my function need to work, and how do I need to take into account all the possible errors that it might get, and all that cool stuff.

**Johnny Boursiquot:** That might actually be a good example of if you are gonna create a library, a package in the functional style, the WalkFunc documentation might be a good example to emulate, so that folks who are actually using your package know exactly how the function will be called and what to expect with every call of the function, the different edge cases you need to be prepared to receive, right?

**Aaron Schlesinger:** Yeah, for sure. And another example that's front and center is the `http.Handler` and `http.HandlerFunc`. Those don't really deal with errors, but those are a great way to say "This is the function that's gonna basically be the callback when your server gets hit at this path, and this is what you need to do in order to write this function properly." And that's another way (just like the WalkFunc) for you to focus on your business logic and not have to think about "How does this HTTP server work?" For me, that's been huge, many times when I've been writing servers.

**Mat Ryer:** Speaking of errors, do errors work the same way, do you think, or do you think of them as different? How does the fact that Go code actually returns and error value, and that's how it kind of does errors - how does that fit into this? It actually feels like it might fit quite well.

**Aaron Schlesinger:** Yeah, it does. The pattern that we have now, of doing `if error != nil` and then returning, that is actually the most basic, rawest form of this construct in functional programming, usually called "maybe" or sometimes called *Option*. I will try to explain this super-quickly and as clearly as possible. An *Option* is basically just the success value or an error, but never both. And the *Option* then - you can check it to see "Hey, did this thing error out?" and if it errored out, then deal with the error. And in the other case, "Did this thing succeed?", then get the success value. But the key thing about *Option* - and the annoying thing to a lot of people - is that you can't just get the success value. Literally, the type just prevents you from getting the success value.

So it's kind of similar to Go, where you get back that error and you've gotta deal with it, first class. *Option* is a slightly more annoying and in-your-face way of telling you "Hey, this thing might error out, and you've gotta deal with that error before we're gonna give you access to that success value in your code."

**Mat Ryer:** Wow, more annoying and in-your-face... Take that, any critics of Go! \[laughter\]

**Aaron Schlesinger:** We might start to hit the inflection point there, because now that you've got this thing, now you're talking about "How do I get access to that success?" And then you start talking about "Okay, maybe I need to write a callback to get access to it, or maybe I need to do some kind of `.get()` function that might panic" or something like that.

So this one is a really good one to know about, and I think it's more useful to know that the `if error != nil` is kind of a raw form of this type called *Option*... And also to know that it could be worse, basically. \[laughter\] If you've got this *Option* type, you've gotta deal with this thing a little bit more.

**Mat Ryer:** \[58:17\] Yes. You've written about functional programming in Go, haven't you? On your blog. I remember reading it.

**Aaron Schlesinger:** Yeah.

**Mat Ryer:** Where's your blog? How can our listeners find that?

**Aaron Schlesinger:** My blog is arschles.com... I think /blog. I wanna say /blog.

**Mat Ryer:** Arschles.com/blog. Okay, good. And there's one on there about dcode, which is a package... It's a JSON parser decoder package.

**Aaron Schlesinger:** Yeah. This one was an idea that I took from another functional language called Elm. Elm is a front-end language that aims to basically just cut out JavaScript completely.

**Mat Ryer:** Why? \[laughter\]

**Aaron Schlesinger:** Well, I guess the creator didn't like JavaScript, for some reason... \[laughs\] Who knows why...

**Mat Ryer:** They say it's good to have an enemy, if you're doing something. It's good to have an enemy sometimes, but... Fair enough.

**Aaron Schlesinger:** Yeah, that's like "Necessity is the mother of invention" type of thing. The creator of Elm and a lot of the hardcore followers - they really love that it's a purely functional language. Technically not quite pure, but for the most part it's completely pure... And you just write all of your front-end code in this way that it forces you to deal with all the possible errors that can happen. And then the Elm compiler compiles it down to this crazy-looking compressed JavaScript at the end of the day...

But one of the cool things about Elm is their JSON support, especially their decoding support. Their decoding basically looks like a builder pattern. You would say something like "When I get back this bucket of bytes, I expect an array. And then inside of that array, I expect the first element to be a number, an Int32, the second element to be a string, and maybe the third element to be an object", but you also have to define the shape, exactly what that object should look like. And this is kind of starting to sound like the built-in `encoding/json`. The only difference is that you get to define exactly what should come in. You can't do things like optional or non-optional. You actually have to call those out in the decoder functionally.

So it's a crazy idea... It's sort of a little bit hard to explain. I tried to write some decent docs in there... But it's sort of a different take on JSON decoding, and it doesn't have performance that's too horrible. It's definitely not faster than `encoding/json`, but it's sort of another there where you could actually use this thing and not expect your REST API to blow up.

**Mat Ryer:** Awesome. Are there any other projects that you've seen, that use this kind of builder patterns? There's a MongoDB -- it's called mgo (pronounced Mango), that's the name of the package. That was the driver for MongoDB, and that used to have this fluent API, which feels a bit like that, this builder pattern.

Didn't you also mention that Buffalo has this style, too?

**Aaron Schlesinger:** \[01:01:44.09\] Yeah, a lot of the query builders out there do. Buffalo has Pop. Pop is their SQL query builder. That's got the whole thing, where you would do newQuery.select.filter.order (I think they have one called "filter"), it's kind of like SQL translated into a Go API, and each time you do one of those .filter, .select, all that stuff, you get a new struct back, a new query struct back. Then you can call the next function on that struct. So that's the builder pattern, but it's also pure, because each time when you pass in `select * from dogs` from your dog database you're gonna get back a new struct that has inside of it the information that you're about to select everything from the dogs database. It's super-useful.

**Mat Ryer:** That's where you could do the branching thing, right? You could have a function then that's gonna go and get the latest dogs, and you could have a function that goes and gets the hairiest dogs...

**Aaron Schlesinger:** Exactly.

**Mat Ryer:** ...but you could base them off that original thing. My improvising use cases is not great, by the way. Just wanted to let you know.

**Aaron Schlesinger:** I started with dogs, so you're just going off of my thing.

**Mat Ryer:** Yup. \[laughter\]

**Aaron Schlesinger:** No one would blame you.

**Johnny Boursiquot:** Given your experience in Go, and functional, what would you say a gopher who is interested in knowing how to -- I'm asking this really for myself... It's like, okay, it all sounds interesting, there's some benefits to be gained there, but I don't necessarily want to dive in head-first into the functional world to try and basically claw my way back out to figure out what of that I can actually use in my day-to-day Go. So what would you say is a good resource other than your blog, where you have some articles, and the Go Functional GitHub repository where you have some examples there as well - what would you say is a good primer, that is just approachable enough for a gopher to glean some things and bring back to their Go?

**Aaron Schlesinger:** Yeah, so there's not a ton about functional programming specifically with Go, but there is a ton of functional programming resources out there that are in non-Go languages. So if it's with Go, I would say look in your own code and see if you've got global variables, and open up a new branch and see if you can start passing global variables into your functions instead, and that might push you down this path of starting to return functions instead of returning values, other values, and that kind of thing. It's kind of simple, it might feel like "Why am I doing this?", but it'll push you down the path a little bit.

Then if you step outside of Go, there's tons of stuff. There's one that I love called [Learn You Some Erlang For Great Good](https://learnyousomeerlang.com/). It's in the Erlang language.

**Mat Ryer:** We'll mix those words up as well, to form a correct sentence. \[laughter\]

**Aaron Schlesinger:** Yeah, Learn You an Erlang... \[laughs\] There's the same thing for Haskell.

**Mat Ryer:** Hang on -- sorry, could you say that sentence again? I just really didn't pause it. One more time, please.

**Aaron Schlesinger:** Learn You an Erlang For Great Good.

**Mat Ryer:** It sounds like you've had a stroke.

**Aaron Schlesinger:** Yeah, yeah. I promise I haven't.

**Mat Ryer:** Okay, good.

**Aaron Schlesinger:** These resources -- I guess they're probably 90% about functional programming, and they don't really assume any familiarity with the language itself, but they do try to really dive into these functional programming 102 concepts, which would be things like that .map function, and some stuff about parallel programming... And then when you go to page 2, you're gonna read page 2 like ten times, because then you start doing these higher-level things that take in functions that take in functions, and your head will explode... But even page 1 alone will bring you back to Go with some really interesting frame of mind. I promise that you can go into your codebase and you can start at least seeing like "Hey, this might be an interesting place to do a map instead of a for loop, and here's the reasons why", and that kind of stuff.

**Mat Ryer:** \[01:06:32.05\] That's great. Actually, Aaron, I'd love to see a talk on that very subject, which is just "Functional programming patterns and philosophies applied in Go in very useful ways." That would be a great talk. Because we've talked about a few of them on this show, but it would be cool to actually look at some real-world examples of where these principles - if not exactly functional programming, but some of the shared principles which might also help to make our code better, too. It'd be a great talk.

**Johnny Boursiquot:** Was that a hint?

**Mat Ryer:** Yeah...! \[laughter\]

**Aaron Schlesinger:** The thing that is sort of missing, at least for me -- like, if I was gonna give that talk, I would go through the Kubernetes codebase, let's say; that's an extreme codebase, it's massive, right? And there's tons of opportunity in there to refactor... A little bit; this isn't like "Go and replace 10,000 lines of code." I know the client builder library in Kubernetes, so the code that sets up the Kubernetes client and does all the cool stuff - there's a few places where you could replace 20 lines of code with 6, or something like that... And that's the kind of thing that I would go for. Not only would I talk about it, but if I was maintaining the client creation code in the Kubernetes codebase, that's the kind of stuff I would go for - even just in the implementation and not in the interface... Just go in and replace a couple lines with a few fewer lines, and start there. You can build up from there as you gain steam in the functional world.

**Mat Ryer:** Amazing. Aaron, thank you so much for joining us today and educating us on functional programming. Who knew...?!

**Aaron Schlesinger:** Well, thank you for having me.

**Mat Ryer:** It's been great.

**Aaron Schlesinger:** This channel - some of the comments in here are really awesome... And Barnaby did it again. He said "What's missing from Go to make Go a real competitor in the space?" I think without adding any new features, like \*cough\* generics \*cough\*...

**Mat Ryer:** Bless you!

**Aaron Schlesinger:** Thank you... I really think that what is missing are some more real production codebase examples of some functional concepts. I would say if generics came, it would be a Cambrian explosion of functional concepts, and really good functional libraries, general purpose libraries in Go. But that's not to say that there's a ton of opportunity even right now to build functional really awesome stuff in the standard library -- sorry, in libraries.

\[01:09:23.06\] I'll shamelessly plug this dcode library, but not because I want people to use it (you're welcome to if you do), but it's really more that I would love to just have this start a conversation. People go in, try it out, submit an issue, tell me I'm dumb, whatever it may be... It would just be really cool to expand mindsets in the Go community using functional programming.

**Mat Ryer:** Brilliant. I agree. So check it out. That one is at [github.com/go-functional/dcode](https://github.com/go-functional/dcode). And go-functional - there are other repos in that organization?

**Aaron Schlesinger:** There are... Most of them are just like I put a repo up and wrote a main.go and then said "It'd be cool if I did this", and then it's been completed.. \[laughter\] So that's really the only one with some meat in it. The rest are just defunct.

**Mat Ryer:** Okay, but you seem to be the person to get in touch with if anyone's interested in contributing.

**Aaron Schlesinger:** Yeah. DM me on Slack, or submit an issue, or whatever it may be.

**Mat Ryer:** Okay, brilliant. Well, thank you so much. We have come to the end of our podcast today. It's been emotional -- not emotional, but functional, if anything... Thank you to Aaron again for educating us here. We've learned a lot, for sure, about this... But the most surprising thing for me is actually that a lot of these ideas can be applied today to your Go code, and you can start to see the benefits. I think learning about the advantages and the reasons why these other things exist - wherever you can do that, you might find there's always little bits and pieces that you can apply in Go to your own projects as well... So absolutely check it out; what can you build with it? Let us know.

That's it, that's our show for this week. We'll see you next week!
