**Mat Ryer:** Hello there, welcome to Go Time. I'm Mat Ryer, and I have a cold. Sorry about that... Don't worry, we've got good editors, you probably won't notice anything. But I just wanted to let you know I'm not a hero, I'm just doing my bit for the Go community. So please feel free to celebrate that on Twitter.

Today, we're talking about generics. We're asking "So do we like generics or not?" Some people feared that they'd be the end of the language... You know, that people would abuse it, and use them in all the wrong places. Others were a bit more hopeful. They had clear use cases, and were kind of thrilled that we're getting this feature. But it was also often touted as the reason a lot of people didn't adopt Go. So we have it now; we have generics, our flavor of generics. What do we think of it? Joining me to discuss this - it's my co-host, Kris Brandow. Hello, Kris.

**Kris Brandow:** Hello, Mat. How are you doing?

**Mat Ryer:** I'm not too bad. I've got a bit of a cold, but getting through it. I'm just \[unintelligible 00:01:43.08\] really just been brilliant. How about you?

**Kris Brandow:** Doing great. It's a beautiful morning.

**Mat Ryer:** Good. Yes. And I appreciate this is quite early for you. We're doing this at a different time... So thanks for getting up so early.

**Kris Brandow:** No problem.

**Mat Ryer:** We're also joined by Roger Peppe. Roger has been a Go enthusiast since the day it was released, and has been contributing loads of things to the standard library and the ecosystem. Currently working on implementing modules in the CUE language, cuelang.org. Welcome back, Roger.

**Roger Peppe:** Hi! How's it going?

**Mat Ryer:** Good. Not bad. Pleasure to have you back, of course. I like your hoodie. For those that don't know, he's wearing a CUE hoodie.

**Roger Peppe:** It's my favorite hoodie.

**Mat Ryer:** Yeah. We're also joined by Bryan Boreham. Bryan's a distinguished engineer at Grafana Labs, working on highly scalable storage for metrics, logs and traces. Bryan's used Go since 2014, so again, a long time there, and contributes to many open source projects, including - you may have heard of Prometheus, perhaps you've used gRPC, and I know a lot of you have used Go itself. Welcome, Bryan. Welcome back.

**Bryan Boreham:** Hi. Thanks for having me.

**Mat Ryer:** Pleasure. Cool. So I'm very excited about this episode, because I was one of those people that was -- I'd used generics in previous languages, and I kind of was excited that we were getting it. How do we feel like -- maybe we could just give someone a quick overview of what generics are and when they came to go, just so everyone's caught up. Any volunteers?

**Bryan Boreham:** Roger, you go...

**Roger Peppe:** \[laughs\] Okay. Yeah, I mean, generics - they basically mean you can pass types to functions and methods, and you can have types that are themselves associated with types. It's all at compile time. In a sense, you don't need generics, but it means that you can have these things which -- where before you might pass a dynamic interface value, and maybe do a type coercion... The classic case, of course, is with containers. So I've made this nice, advanced data structure that holds all my values, and I put a value in, and I know that I'm only going to put integers in there, and I get this thing out, and - oh, it's not an integer anymore. It's the empty interface. So I have to assert that it's an interface, that it's an int, but maybe I didn't actually put it into there, and so my program panics at runtime.

Also, there are a bunch of performance improvements associated with that, because in that particular example, putting an integer in an interface - if it's greater than 256 or something like that, then it's actually going to have an allocation to put that in an interface. So you're actually paying the price of storing that data, where in fact you just actually only need one little integer-sized slot for it, and that can really \[unintelligible 00:04:26.02\] Particularly when you have larger data structures which incorporate types. The safety and the performance aspects, both can add up a lot in larger systems, I think.

**Bryan Boreham:** I think I might want to note that we had some generic types before, since the beginning pretty much; like a map, for instance. Whenever you used a map, you had to put in square brackets what the key type was, and then right after that what the value type was. So map string of string, map int o string, or whatever... And so what changed - was it Go 1.18? What changed is the kind of availability of the programmer to define their own things, their own types and functions.... Which still had those little square brackets bit with a type in the middle. So the power was kind of reserved to the Go compiler beforehand, and now we have the power.

**Mat Ryer:** Yeah. And have we been wielding that power responsibly?

**Bryan Boreham:** Well, I was a C++ programmer for a long time, 20 years... And actually, from the time before C++ had generics.

**Mat Ryer:** Oh, wow.

**Bryan Boreham:** And I think a lot of people feared that Go would suffer the way C++ did, because people started writing programs that frankly no one could understand, using templates, which is the same thing, basically, in C++. I feel Go has largely escaped that. I personally have not really come across people overusing generics.

**Roger Peppe:** \[00:06:02.16\] I think it's kind of too early to say, honestly. We're just past the point where people are generally using it, where people \[unintelligible 00:06:08.20\] And I think -- give it a couple of years, two or three years and we'll see, I think, whether things are moving in a dubious direction or not.

**Mat Ryer:** Yeah. What do you think about the choice of square brackets? Somebody that was quite new to the language was kind of surprised that it was just using square brackets and not something different, because it was such a different concept. Bryan, you make a good point about maps and slices being kind of the maps...

**Bryan Boreham:** Well, yeah, slices, the type, was outside the square brackets. It's not a great pattern.

**Roger Peppe:** And maps too, right?

**Bryan Boreham:** Well, yeah, maps - you have one type inside the square brackets and one outside. I don't know if we could read too much into that. C++ it's angle brackets; it's less than/greater than, so I guess they wanted to distinguish themselves from that.

**Roger Peppe:** Well, angle brackets are problematic, right? Deeply problematic, because you're syntactically ambiguous, because you can't tell... If you've got a&lt;b, then you can't tell "Is that the start of a type parameter, or is it not?" And I think there's lots of good reasons not to use angle brackets for that reason.

**Kris Brandow:** I think that's the same reason we didn't use parentheses as well, because there was some syntactic ambiguity...

**Roger Peppe:** Actually, the first generics proposal in Go - well, the first serious generics proposal in Go did use parentheses. So you really can use parentheses, but I think in that case they were considered not sufficiently distinguished. The square brackets - it's somewhat distinguished, but not... Yeah, there's still some ambiguity there.

**Kris Brandow:** Right. So I guess that would be semantic ambiguity on the human side of like "What is this thing saying?" if you use regular parentheses instead of brackets.

**Mat Ryer:** Yeah, I think that would look quite weird. I'm just trying to imagine what it would look like with parentheses...

**Roger Peppe:** Yeah, indeed, there were just loads of parentheses. Are we Lisp...? \[laughter\]

**Bryan Boreham:** Yeah... Take me back to the '50s.

**Mat Ryer:** So have you used generics yourself? Roger, you mentioned that you're currently working on implementing modules in the CUE language. Does that work call for the use of generics much?

**Roger Peppe:** Um, no. So I do use generics, and I quite often use them in a local way, that isn't part of the API... There was a nice example I came across recently, where I had an interface type and an implementation that basically joined two of those together. And you want to do that in parallel. So for every method call -- and there were maybe 10, 12, 15 method call... You wanted to make a parallel call to both the underlying values, and gather the results together. And without generics, you would have written a load of boilerplate code. With generics, I could write a little wrapper, and the code was really super-clean, and you could just do it in a couple of lines. Same thing for every function, regardless of the signature in the function. That worked out really nicely, actually. And not only that, you could "Oh, well, okay, we've got the boilerplate... Well, maybe we don't want to make that. Maybe we want it to be sequential and configurable." Super-easy.

**Mat Ryer:** Right. So how would you have solved that problem if you hadn't had generics?

**Roger Peppe:** I would have probably just written out all the code.

**Mat Ryer:** Just by hand?

**Roger Peppe:** Probably. Yeah. Maybe code generation, but it wouldn't have been too bad. Or maybe some dynamic type coercion. That also. But I would have had to implement a bunch of helper types probably.

**Mat Ryer:** Yeah. So that's it. And I think there are those use cases where it's just perfect. And that's why I think that I was quite pleased that they came to the language. We'll talk a bit more about changes in Go 1.21, but I do really like the slices package.

\[00:10:02.29\] So for anyone that doesn't know, this is just -- you know, there's common things you do a lot with slices, and of course, I've had the case where I wanted to search through a slice, and find something based on some function, something like this... And I had to just write that manually for the particular type that I was supporting. I tried doing things with interfaces and things before, but you end up adding a lot of complexity in order to just solve that problem. So I feel like the slices package is going to help us there. Are there any other good use cases we've seen?

**Kris Brandow:** I mean, I feel on the slices package this thing, too... I won't have to google the slice tricks document as much, because there's some things that it covers, which I'm very happy about... Because it was always annoying finding that thing, even though it was pretty easy to find. I was like "Okay, I've gotta google this thing." It's nothing like Dash, or anything...

**Mat Ryer:** Yeah. But also, the slice, you almost -- when you're reading the code, it's not always obvious what's happening.

**Kris Brandow:** Yeah.

**Mat Ryer:** So it's almost like you need to look at the slices thing when you're reading the code as well. Whereas if it's just -- I don't know, one of the examples, it's much easier to read, isn't it?

**Bryan Boreham:** So I was -- still in the slices package, I was really pleased that the sorting function there was faster. I always want to make programs faster. And we should say -- so slices will become part of the standard library in Go 1.21, but it's available right now as part of the experimental directory from Google. And I have been using it for like a year. So that change went into Prometheus using -- so where you would previously use sort.slice, you can change that to slices.sort.

**Mat Ryer:** That's much better, isn't it? Much more of an improvement now. I'd much prefer that.

**Bryan Boreham:** It is. You can easily see what's going on. No, really, you don't see it unless you look at a profile. The sort one works in terms of interfaces. So every single time it needs to compare two elements or to move things around or whatever, it's going through dynamic dispatch, through the interface mechanism. So it's doing extra lookups, like "Oh, what is this thing?" And in particular, when you're sorting integers, which happens a couple of times in Prometheus, for instance, the generic one just compiles all the way down to the machine instructions for less than. So there's no dynamic lookup, no function call overhead, no nothing, and it's way, way faster. In narrow, niche case, but it was night and day.

**Roger Peppe:** That's pretty cool. So does that actually happen when you're passing a function that does the comparison of two integers? So it kind of devirtualizes the whole thing?

**Bryan Boreham:** Yeah, so there's two variants. Slices.sort works for things like ints and strings that you can compare with less than. And then there's a variant which is called slices.sortfunc, where you supply a less function. And that one's pretty good as well. I mean, it's not as much faster, but as you just said, it's calling through a reference to a function, which is much faster than doing dynamic dispatch on the elements of the slice.

**Roger Peppe:** Yeah, I mean, one of the things that I was interested in - it's kind of a bit of a conflict for performance optimization, because in many languages... Well, in C++ particularly, but also languages like Rust, when you have a generic type, it's all devirtualized, it's all in-lined, so everything is basically expanded out. So one thing I worry about in Go in the future is that people make something generic because of that performance... When actually it would be kind of like a nicer, easier to understand and simpler to use if it was using interfaces. Because the moment you're using generics, you have to pass around that type parameter, although the actual type isn't hidden under the hood, as it were... And things become, I think, quite often harder to use.

\[00:14:05.17\] So there's a kind of tension there, because if people make generics truly efficient like they can be, then you have this pressure to use generic types, and then you start going down the route of "Oh, things become harder to use", and Go maybe starts to get that reputation. So I'm interested in what you think about that, Bryan, actually.

**Bryan Boreham:** Yeah, it's definitely complicated right now... And there's basically two cases. The case where you have some kind of method in your generic. Basically, if your generic type parameter has an interface, which has some methods on it, that's one case. And then the case where it doesn't have any methods, but you do want to use things like less than and greater than, and it basically has to be one of the underlying types that the compiler handles.

So right now, the first case - it basically boils down to an interface, and it's slightly worse than an interface, because the compiler is passing a little bit of extra information for the generic mechanism. So generic functions with parameters, which are interface type, are not that fast. A little bit slower than interfaces pre-generic. Whereas generic functions taking things which don't have methods can be blindingly fast. Certainly don't have any dynamic dispatch might enable you to in-line things you couldn't do before... So I think that's already too complicated for your typical Go programmer to really grasp. That's really down in the weeds... Sorry, I don't want to insult anyone; I just mean there's too much to grok, to get your head around, to read through the details of how this is implemented. And that's just where we are today, where it's what they call monomorphization. Everything is kind of coerced to look like an interface.

I think in the future, if they do start stamping out multiple copies of the code for different types for performance reasons, then it'll get much harder to understand the trade-offs. I certainly worry a little bit about that. I guess where we are, there's an uncomfortable thing that happens where you get advice to pass around a function parameter, and that's exactly why slices.sortfunc has this extra parameter that we kind of don't want to exist. And it's a value parameter, not a type parameter. In C++, that would be a type parameter. That would be parameterization on the type of the function, rather than a value that you pass into the function.

So yeah, we've got something that's a little bit ugly, I would say. I guess most people are just perfectly happy to get the expressive power. We should be trying to express programs nicely, elegantly; that should be our first concern. And then make it work, make it run, make it fast. Normally, the last thing you do is performance.

**Roger Peppe:** Yeah, my ideal scenario would be where you could use either approach. So you could pass an interface in or you could pass a function parameter in, and the compiler is clever enough to know that's static, to know that you're always passing the same function, and do the same thing regardless of whether you're using generics or not. And I think it does devirtualization in a bunch of cases. Apparently, profile-guided optimization is clever enough to do that sort of thing now in certain cases, which is interesting... So you know, that's pretty cool.

**Mat Ryer:** Yeah, but I like that message, this thing of "Focus on making the code easy to read, easy to maintain." There are times when -- and if you're lucky, you'll reach the point where performance really matters, where you've got either massive scale, or just you've got things that are being used... It depends on the problem, really. And then it's worth that kind of digging into the details, and maybe even worth a bit of complexity and a little bit of sort of ugliness just for that purpose. And then you're making a trade-off for quite a good reason. But I guess, Bryan, you'd recommend you profile first, you gather data, you wait until you have one of those situations.

**Bryan Boreham:** \[00:18:09.04\] Yeah. I mean, you'll almost always find that your performance problems are in a few small places. So maybe it's okay to make something that was five lines of code into 30 lines, because that's the bulk of your performance problem. But don't do that all over the place.

**Mat Ryer:** Yeah. And that is tempting. I remember, I just wanted to just have the fastest possible thing. It was almost like I gamified it for myself, of just like "Do I want the best performance? Of course I do." And I would sometimes trade off the -- you know, I felt like I'm being clever here. I'm doing this... And yeah, it might be complicated; you have to be smart to understand it. I wouldn't go as far as insulting half the community like you did, Bryan...

**Bryan Boreham:** \[laughs\]

**Mat Ryer:** Yeah. And then maintaining that code over time. And where I would forget, I'd be like "What on earth is this?" And then I was like "Do you know what? I'll just rather it was dead simple. Thanks."

**Bryan Boreham:** Yeah. Well, someone like Brian Kernighan said "You need to be smarter to debug a piece of code than you do to write it." And therefore, if you write the code to the limit of your ability, then you're actually not able to debug it.

**Mat Ryer:** I love that. That slices.sort - does it work with anything? Can you pass any type into that function?

**Bryan Boreham:** Only ones that support less than. So ints and floats and strings. But there's a sort func where you supply a function that implements less, if you have a more interesting type.

**Mat Ryer:** Yeah. So this is where constraints comes in. Sort of part of our generics is we have these quite interesting-looking ways of expressing, like, "This is a constraint of the types that you can pass into this thing." And there are a few built-in ones, aren't there?

**Bryan Boreham:** No, in fact they've gone the other way. In 1.21 there's a new package called \[unintelligible 00:19:55.22\] and I think the main purpose of that is to define an ordered type, which is these things that support less than. So it's in the library, it's not in the language.

**Roger Peppe:** I think there's a difference... So there's two kinds of -- you can constrain something in various ways. It looks like an interface type; a constraint is actually an interface type. And it can have methods like any interface type. So that means that you're constrained, that that type is constrained to have those methods. But also, you can name a number of other types and say "This interface must be one of these", and you just say \[unintelligible 00:20:29.15\] or string... And that basically means that that value must be any one of those, and if some operation is supported by all of those, then you're able to use it in your generic function.

For example, that sort function can work with less than, because it's got a constraint that mentions all the possible underlying types in the language, of which there aren't that many; like 10, or 15, or something... All the uint types, all the int types, a few others. And because we've mentioned all of those, it means we can use less than, and we can pass any of our existing types that we can compare less than... Which is - you know, that's pretty cool.

I gave a talk at GopherCon UK last year, where I talked about using unconstrained types, and how they were kind of strictly more powerful. I didn't talk about performance at all there. And yes, they're definitely less powerful. But the sort vs sortfunc example is an interesting example of that, because you can write one in terms of the other. So you can write sort in terms of sortfunc, but you can't do it the other way around... Which is kind of interesting to me, particularly as sort is more performant as well... Which is a bit of a shame, because we'd like to be able to write the more generic, the more powerful version, rather than the other one, ideally, I think.

\[00:21:59.08\] But that actually made me think of -- so there's one thing we haven't talked about here, which I think just kind of fell out from the design, and I think it's amazingly powerful and quite interesting... It's that of generic interface types, which people don't -- I'm not sure people are aware of quite how useful and powerful they are. So you can have an interface type that actually itself has a type parameter. For example, you could imagine a sorter, a comparer interface type that has a method that takes two parameters, both of type t, for any type, and returns boo. So that's kind of equivalent to a function that takes two \[unintelligible 00:22:35.20\] but you can have multiple methods.

It's actually a really powerful paradigm. Essentially, you can define a kind of algebra between your methods in terms of this abstract type, in terms of this type we haven't defined yet, which is quite cool. And because it's an interface, you've actually got an underlying value. You're passing this thing of type t into this interface, but you've actually got a value under there, too. So for example, it could know how to sort. And I've used that a few times, and I've found it quite interesting. But the performance implications of it - I have no idea. Bryan, you might know - is it efficient to call a method on a generic interface, or it's about the same as calling it on a normal interface?

**Bryan Boreham:** Methods are slightly worse with generics than they were before methods on interfaces... So it's a little bit disappointing. So I guess an example which is a little bit like what you're talking about is the heap; not the heap that you allocate memory on, but the one which sort of keeps the smallest element at the front. So that's expressed in the Go standard library as an interface that has a less method, but also has a swap method and a pop, or a push; I forget exactly what it has. Anyway, I noticed that there wasn't one of those in the slices package, and around about Christmas time I was off work, and I thought, "Oh, I should be able to fix that in a couple of hours..." And this ballooned into something that took weeks, because it's just not that nice to try and express a thing which is a container, and has operations on the objects being contained in terms of Go generics.

I've got a talk at GopherCon in San Diego coming up, where I sort of explain where all this landed, which is with a completely different data structure called a loser tree. So I won't go into the whole explanation of that right now, but anyways... The short version is that it leaves a lot to be desired right now, trying to express a kind of a generic thing which operates as a container on other things.

**Roger Peppe:** Interesting. So do you think that's a fundamental limitation of the current generics design, or something that could be addressed with a language change? Or maybe it's just because it's performant \[unintelligible 00:24:51.10\]

**Bryan Boreham:** No. Well, it's a little bit of everything. I mean, kind of borrowing from something we thought we were going to talk about later, there's a function couple of functions, max and min, that have been put into Go 1.21, and I think they form a sort of similar example. So you can write a generic -- in Go you can write a function using generics, which takes a type t, and just basically says "If a less than b, then the minimum is a. Otherwise it's b." You can write that, but it's not the function that you want in the case of floating point numbers. Because in the case of floating point numbers they have this exception which is a nan, not a number; and nan's are never less than or greater than. And this is a sort of annoying anomaly. And where that story ended in 1.21, is these things became built-ins in the language. So they sort of cheated. The Kobayashi Maru for feature development.

**Roger Peppe:** And it's ironic, because max and min were one of Ian Lance Taylor's kind of red lines. Like, if we can't express max and min with generics, then the generics design isn't good enough, right? But now, "Oh, dang it! We still can't express max and min with generics, and we're putting them in the language."

**Bryan Boreham:** \[00:26:08.07\] Yeah. So harping back to C++... In that language you can write what are called partial template specializations. You can basically say, "Well, if it's a float (you say this to the compiler), I want you to use this version of the code. And then if I don't say anything, just use this other version." And that technique, that language feature would, I think, get us out of this problem. So basically, I do think that's the thing that would help - the ability to put special cases into my generics, and say, "If it's this kind of a thing, then I want you to use this kind of code. And if it's this other kind of thing, then do it totally differently."

**Roger Peppe:** So this is a proposal that I made a little while ago for type switching on generic types. It's issue \#45380.

**Bryan Boreham:** Oh, how could I forget?

**Roger Peppe:** But would that give you what you want?

**Bryan Boreham:** I have to confess, I haven't read it. I mean, maybe. Basically, what you don't want is for the runtime to be executing these types. You don't want to be executing these types at checks at runtime, which is kind of where you might try and do it today. It would work, but it would just be horrible in performance for anything low-level, like a sort, or something like that. Yeah, so if the compiler is doing it at compile time, that would be better. I mean, is it literally a switch, like with key statements? Is that what you proposed?

**Roger Peppe:** Yeah, pretty much... Except the target of the switch is the type itself, rather than a value.

**Bryan Boreham:** Yeah, it'd be interesting to try it out. I mean, all the other things that I'm familiar with in that space tend to do more of a pattern-matching approach. I guess Rust does that, doesn't it? I'm not a big Rust user, but I think it borrowed the idea from Haskell, which sort of borrowed it from ML, which I did learn... Yeah, so I think conceptually it's a little bit nicer to sort of write out the patterns of things that you're trying to match, and the code that goes with those.

**Roger Peppe:** I mean, this wouldn't allow you to do something like "Oh, slice of anything", right? You'd have to type switch on specific types. Because otherwise, I think it might be -- otherwise, basically, you're in inflection territory... Not great for performance.

**Bryan Boreham:** Yeah... Interesting future anyway...

**Mat Ryer:** Yeah, well, that definitely seems doable. I was just scanning that proposal, Roger, and I feel like that could be done at compile time, right? I mean...

**Roger Peppe:** Yeah, it could definitely be done at compile time, yes. One of the things about generics is fundamentally, it's all exposed -- logically, it's all expanded out at compile time, even though it might not actually be fully expanded out at compile time. You have all the information you need. You can't dynamically generate dynamic generic types. Although, theoretically you can, except the compiler finds it out and says "No, no, you can't do that." Because you can have a recursive type, you could have a recursive type that has a type definition in there, which involves two of the original, and then calls itself, and then you get this blob of an infinite number of generic types, and the compiler's like "No, no... Not today."

**Mat Ryer:** How would people show support for that proposal? How does it work? Like, I noticed that there's thumbs up, and things... Do people pay attention to that?

**Roger Peppe:** I believe so. I mean, no one's come out -- I haven't seen any anyone come up with a good \[unintelligible 00:29:31.29\] I think they just need to have the energy... The Go team need to sort of say "Yeah, this is worth working on now." Because I think last I heard, Rust was like "Yeah, for later." It's a proposal hold, is what it is. Too much for now. And you can kind of do it at the moment with a dynamic type switch.

**Mat Ryer:** I'm surprised you yourself haven't been put on proposal hold, Roger.

**Roger Peppe:** I am pretty much on hold \[unintelligible 00:29:58.02\] I would say...

**Mat Ryer:** Yeah. Because Roger -- yeah, aren't you responsible for the error interface?

**Roger Peppe:** \[00:30:05.24\] I did, I did suggest the error interface, and they saw it and said "Ah, yes, this is what we're looking for." Because they were about to propose the error thing -- that it just be a package that you imported everywhere. Everywhere we'd have to import errors, and say \[unintelligible 00:30:17.19\]

**Mat Ryer:** Well, then it's more popular than Testify at least, until then... Oh, by the way, I've found out at GopherCon -- we did a panel with the Go team. I've found out that Testify, my package, is banned in Google.

**Bryan Boreham:** Good.

**Mat Ryer:** So that's going on my resume. What do you mean good, Bryan? Don't you use it?

**Bryan Boreham:** Well, I think conflict is good for -- a bit of tension, a bit of drama...

**Mat Ryer:** CDD.

**Roger Peppe:** Well, I could use that as a moment to shout out at qt, which is my generics-based testing package, which I quite like. It kind of has fake heritage from Gustavo's Check package, originally. But anyway, yes, it uses generics, and I quite like it, because it's small, which I don't think you can accuse Testify that it is small.

**Mat Ryer:** No. I also had that same feeling, and I actually have another package, which is on GitHub, matryer/is. And that is -- I call it "Testify off steroids." It's like the minimalist version, for the same kind of reason. But it's not generic, so that's quite interesting. I wonder how.

**Roger Peppe:** Yeah, so this is quite nice, because if you want to compare two things - you know, for equality, or particularly for not equality, you want to make sure that they're actually the same type. And generics can do that quite nicely. And I quite like -- the other nice thing, I think that that is composable. So you can put these things together and you can make new checkers, which all fit into the same framework. I've been using it recently and I've been quite a bit quite happy with it. I shall post a link to it.

**Mat Ryer:** Yeah, we'll put a link into the show notes for that. Very cool. I was gonna ask -- oh, it's literally qt, the letters?

**Roger Peppe:** It \[unintelligible 00:32:08.16\] fairly small prefix.

**Mat Ryer:** Cool.

**Kris Brandow:** Good thing we have a link, because I think people googling qt are going to find not that...

**Roger Peppe:** This is true. This is true. Actually, I should shout out Francesco Banconi, who wrote the original Quick Test. He was a previous colleague of mine, so we wrote it together, basically.

**Mat Ryer:** Nice. So when it comes to like people choosing to pick up generics or not, is this sort of advice -- like, we sometimes say "If you're going to do an abstraction, solve the problem a couple of times before, and that really helps figure out what the right kind of abstraction is", or if indeed there is one that's suitable. Do we have the same kind of advice for generics? Is this a case where you think there's a clear case for generics to just use it, or should you just solve your problems with the specific type if you only need to solve it for one type first, and make them generic later? What would be your thoughts on that?

**Bryan Boreham:** Yeah, I think I would agree with that.

**Mat Ryer:** I thought you liked conflict, Bryan.

**Bryan Boreham:** Well, yeah, I just like writing programs -- like, keep it simple most of the time. So if you just implemented one thing, then yeah, don't muck around making it generic. It's only if you find yourself implementing it two or three times, or you want to reuse the same thing in somebody else's program, and it really benefits from being made generic in that way...

**Roger Peppe:** One of the things that I really, actually, for using that pattern in Go - and it applies to both interfaces and generics, actually, is that you can do that; you can do it for one type. And actually, the changes to make it generic, the changes to make it a user interface tend to be pretty small. You can take that generic code and just like do a global substitution of the type by the type parameter, and - oh, done. Just add a few square brackets here and there and it just works. So I would say that's a good approach, and helped by Go's syntax and semantics.

**Bryan Boreham:** \[00:34:11.06\] I've found it sometimes takes a bit of thought to figure out what is the thing that I should be parameterizing. If I've sort of fundamentally got a slice of thing, do I parameterize on the thing that is the slice, or do I parameterize on the thing inside the slice? I'm not sure yet if there's a rule there, but those kinds of questions take a bit of time sometimes. You've gotta maybe try it two different ways and see what happens, or start out and see where you get blocked.

**Roger Peppe:** Yeah, I've actually found an interesting case for that recently, where I was changing an API, and I wanted to change it in a backward-compatible way. And there were basically two types, both of which were kind of set -- one was type XY. So it was like a new type, but had the same underlying type. The old one was deprecated; the new one was new, but we had this function that took the old type. So of course - oh, well, you know, we want to make it check the new type. And it was taking a \[unintelligible 00:35:06.18\] the type parameter is foo, and it's taking \*foo, and then we'll actually do a type conversion inside the function to the new type... Which technically should have worked; we were saying we're allowing just this old type and just this new type; we could type-convert between them, but you can't do that. But you can do that if you move the pointer out. Say your type parameter is either \*oldtype or \*newtype; then you can do the type conversion. So it's little nickles like that which is like "Oh, that's interesting", where that kind of decision can make a difference.

**Mat Ryer:** So generally then, Bryan, would you say that you are unhappy with the performance of generics, or do you feel like in most cases --

**Bryan Boreham:** I think I would go as far as disappointed, because I personally, with my background in C++, I sort of expected there'd be more stamping out of different versions of the code specialized to each type, and more opportunities for in-lining, and so on and so forth. And basically, the opposite is true... Unless your type is a built-in, like an int or a float. Performance gets a little bit worse when using generics, and methods on generics... So I was disappointed by that. I mean, you know, first-world problem... Having generics at all is vastly better than where we were before. But there are still these kind of corner cases that I tend to inhabit, where you're still reaching for other techniques.

**Mat Ryer:** We talked about this a bit before, but is this like that's forever because of the design, or is this sort of like over time these things will improve under the hood, and we can just wait?

**Bryan Boreham:** Yeah, I expect it to improve over time, and particularly profile-guided optimization, I think. Trying to not get too deep into the weeds... The current implementation says that anything where the layout and memory looks the same, i.e. this is always an 8-byte fundamental type, or this is always a 48-byte struct with four things in it, or something like that... Anything that looks like that will run the same code. And anything that looks the same in memory will run the same code, is the current implementation. So they could generalize that a little bit to say "Well, we run the profile. The profile-guided optimizer says there are these two cases that we should kind of flatten out into the most performant code, and then every other case is going to still run the same code." I think that's eminently doable. I'm handwaving a lot of work onto whoever actually has to implement it, but... I expect something like that will happen.

It kind of reminds me, I've gotta get profile-guided optimization plumbed into our CI pipelines, because it's been available since 1.20. I don't think it's turned on by default in 1.21, so I really should get going on that.

**Mat Ryer:** What will that do for people?

**Bryan Boreham:** \[00:38:08.11\] Oh, good question. Well, so first of all, the mechanism is basically that you supply the compiler with a profile, in the pprof format; that is a record of what the program was doing when you ran it doing its normal thing. So the compiler can then look at that and say, "Well, I see that 80% of the time in this program was in this one function. So I'm going to change the rules that I apply..." So there are certain rules inside the compiler, for instance when am I going to in-line other functions; and it normally only in-lines really small functions. But if it sees that this one thing is 80% of the whole program at runtime, then it can say "I'm going to inline a bunch more things, and I'm going to really change the rules on this one. I'm going to go all out for performance just in this one place."

So the Go team themselves said that the PGL, profile-guided optimization gave them a 6% performance improvement on the compiler, and their benchmarks on the Go compiler. So it's obviously case by case, but it's a little bit more work, because you have to come up with some kind of representative profile. Maybe if you only work in one environment, that's pulled from your production environment. If you have a wide range of use cases, you maybe use benchmarks and profile that. So...

**Roger Peppe:** Can you combine different profiles, a bunch of different profiles?

**Bryan Boreham:** That's a good question. In general, there are tools that do that. Fleet-wide continuous profiling is a very general case of what you just said... And several companies sell that kind of a product. So I don't know whether you can just sort of give six files to the compiler and it figures out what to do, but... I mean, a profile is essentially a list of stack traces in the code, and sampling counts of the number of times that stack trace showed up. So you can essentially aggregate different profiles just by finding the common stack traces and adding all the counts up.

**Roger Peppe:** I mean, to be clear, this is applying to one main program, one binary. So you can't sort of say "Oh, we've got profiles of a bunch of things for this particular library." That doesn't apply, or is it just...?

**Bryan Boreham:** That's a good question. I think it's matching on the kind of module name, function name, how often that shows up. So it ought to be applicable to libraries, and it ought to be fairly generally applicable. I guess the thing maybe that you don't want to do is supply a profile that's kind of wildly unrepresentative, because then the compiler will do the wrong thing, make your program at least bigger, which might make it a little bit slower...

**Roger Peppe:** So if I'm supplying a module that other people are using, it'd still be worth doing some PGL on that.

**Bryan Boreham:** Oh, that's a good question, because generally, people don't use precompiled code in Go. Generally, they're compiling it all on their target.

**Roger Peppe:** So it wouldn't see that if you import a module, for example.

**Bryan Boreham:** Yeah. So in that sense, it applies more to the main program.

**Mat Ryer:** And would you keep updating the profile so that as things change, you keep --

**Bryan Boreham:** Right, yeah. That would be a good idea. I don't think that's vital. Like I say, the worst thing that can happen is the compiler kind of optimizes the wrong thing.

**Roger Peppe:** That has the potential to be interesting, because the profile-guided program itself will have different profiles, so you kind of need to iterate.

**Bryan Boreham:** That's a good point, yeah. I think that it's at the margins; it's things like -- certainly right now in-lining; I think that's the main thing that gets affected. But it might in the future do loop unrolling, for instance, based on how intensive this function is used.

**Mat Ryer:** Yeah, until we have an AI that's just doing this all for us, and then we can stop worrying about it and we don't have to talk to Bryan anymore. \[laughter\]

**Kris Brandow:** On the performance point, I know it wasn't planned this way, but I kind of feel like having generics have slightly worse performance for that kind of interfacy case might actually be good for us in the long term, because I feel like it will make it so people don't right now jump into just using generics, where they're like "Oh, well, this is so much faster than interfaces, so I'm gonna use this thing instead of what's been there before."

\[00:42:27.07\] So I feel like maybe that in the long term will help us escape the kind of just using this thing because it's faster, just using this thing because it's shiny, and it will keep us solidly rooted in using interfaces, or interfaces that are appropriate, and then "Oh, well, I really do have this use case for generics, so I will use it in this place, even though I know I'm paying a performance penalty now." Even if it might not be true in the future. Like, I assume we're gonna get better with generics, and then they might be faster than interfaces in the future. Or maybe we'll also make interfaces faster in some way.

**Roger Peppe:** Yeah, that was precisely what I was trying to get at before, actually. I do think that there's this pressure, if it's much faster, to use generics, where it might not be appropriate. I think that's the worry that everyone has, or many people had, about generics just polluting code because "Oh, generics are faster, therefore everything must use generics." You know, you change io.copy, so instead of taking a reader and a writer value, you make it parameterized on the types, which could be faster, right? And it probably would be faster. So why wouldn't you do that? But that means it's actually more complex to use.

**Kris Brandow:** I'm hoping that the years of people using far too many goroutines and far too many channels has taught us as a community to not overdo the nice things where we kind of ruin them.

**Mat Ryer:** Yeah... We do hear that a lot, and we do say it a lot, and we talk about that a lot, and I do think that's important. So yeah, that's great. Well, before we move on to Unpopular Opinions, are there any other things coming in Go 1.21 that we're excited about? It gets released next month, in August 2023. Min and max - they're cool. Clear function's a bit weird, isn't it?

**Kris Brandow:** Yeah, I was gonna bring that up. I'm happy that clear function. It's like, I know it only saves a little bit of code, but having to write those loops over a map to clear everything out was always kind of annoying. I just want this to be empty now.

**Mat Ryer:** Yes. It's weird how it does it with slices.

**Bryan Boreham:** Yeah, it does something that you sometimes want to do with a slice; it fills it full of the zero value. But it's so different to what it does with maps. So if you have a slice that has 100 elements in it, and you can't clear on it, then you still have a slice with 100 elements in it, but they're all zero... Which I think is a very, very niche case. Most people would expect is they have a zero-length slice when they finish. So I don't really know that -- I didn't read through all the thinking that arrived at that.

**Roger Peppe:** I guess it's equivalent to \[unintelligible 00:44:52.19\] in C, right? So yeah, it's very efficient, because you can use essentially an underlying machine instruction, probably one, to just zero it out just like in one thing really efficiently... And that might not be easy if you're using a loop.

**Kris Brandow:** I feel like if \[unintelligible 00:45:09.01\] as well, and you just want to be "I'd like all of these things to be garbage-collected, but I still want to use this slice again." It could be useful for that, just clearing them all out.

**Bryan Boreham:** Yeah, it's very occasionally useful. It's just that the same name does something so different with maps and slices.

**Kris Brandow:** I guess it's the same with most of those, right? Make, and new, and all of that... I guess new doesn't, but make definitely does different things with maps and slices... Sort of, sort of.

**Bryan Boreham:** Yeah...

**Roger Peppe:** \[00:45:38.04\] One thing that I am looking forward to in Go 1.21 is some improvements to generic type inference, actually. So there's one particular -- in Go, a standard idiom is to return concrete types, but use interfaces. So you're returning a concrete type, but you're actually accepting an interface. But this didn't work for generic interfaces. So you could have like an implementation, a concrete implementation, and you pass it to this generic interface, and say, "You can't do that. You have to explicitly mention this type parameter", even though you can clearly see that one implements the other. And now you don't anymore, so that's pretty cool, actually.

**Mat Ryer:** Yeah, that's an interesting point though, about "You can clearly see", because there's more typing inference that can happen, where actually when you're reading it, you would kind of lose information. And that's probably a line that you wouldn't want to cross.

**Roger Peppe:** It's a tricky line to choose, and they said they were conservative initially, and now they're a little bit less conservative. And also, if you have a generic function, it will infer the type of that generic function from where \[unintelligible 00:46:47.17\] So if you've got a generic less function that automatically knows how to compare two comparable types, for example, and you pass that to something that expects another generic function, then you don't have to mention, you don't have to instantiate it; it will infer from where you're assigning it to the type parameter for the function... Which is also quite cool, actually, particularly in the context of things like slices.sortfunc, and that sort of thing.

**Bryan Boreham:** So we've talked about the slices package quite a lot... There's also a Maps package that sort of matches it. It has two or three functions, like keys - it gets you all the keys that have map values, it gets you all the values out of a map... Those were things you could do before you just write the loop, but those are little generic functions now that are going into the standard library in Go 1.21.

**Roger Peppe:** I want sorted keys...

**Bryan Boreham:** Well, you can do slices.sort of maps.keys...

**Roger Peppe:** It doesn't quite work, because it doesn't return the slice... \[laughter\] It's probably the generic function I've copied and pasted the most, because quite often you want to -- you know, like as a test result, or you're printing something in a deterministic way... "I just want all the keys sorted, please." Like, "Oh, damn." So just copy and paste sorted keys, and usually that strings, but not always.

**Kris Brandow:** I am pretty happy about the equal function, because that's another thing that was kind of annoying to do with a loop...

**Bryan Boreham:** Right. Yeah. Well, you did have to sort them then, given two maps. You had to get all the keys out, and then sort them, and then check if things were equal.

**Mat Ryer:** Yeah. I mean, the sorted keys - if someone perhaps hasn't contributed to Go, maybe they could start a proposal... There may already be a proposal that Roger's written, but if not, you could write one, get involved and see what that process is like. It's quite a nice opportunity. There's also clear as well; in that maps package there's a clear function. What's the difference between those two?

**Roger Peppe:** Maybe it was there before the clear built-in?

**Kris Brandow:** Looking at the docs for the package, it doesn't look like there's a clear func in here.

**Bryan Boreham:** Well, there was in the experimental one... And it suffered -- I mean, the whole reason why the clear \[unintelligible 00:48:59.27\] maps was justified was that you can't, again, float nan, not-a-number values. They break the obvious implementation of clearing things from a map... Because a nan is never equal to anything.

**Mat Ryer:** Not even itself?

**Bryan Boreham:** No, it's not equal to itself.

**Roger Peppe:** So if you try and delete the nan value from a map, it's like "No, you can't delete that, because it doesn't exist in the map."

**Mat Ryer:** Wow... Who is putting their nans in a map? \[laughter\]

**Roger Peppe:** Who would put nans in floats, right? \[laughs\]

**Mat Ryer:** Well, speaking of that, it's time for our Unpopular Opinions!

**Jingle**: \[00:49:43.26\]

**Mat Ryer:** Okay, I'll go first - somebody told me that jingle is too long. Apparently, this has been said a few times; people are like "No, that's way too long, that little jingle." It's nothing.

**Bryan Boreham:** The singing is great.

**Mat Ryer:** Thanks, Bryan. That's really sweet. You've accidentally been nice to me. Actually, it was very well put together by the Mysterious Breakmaster Cylinder, who edited that and made it sound good. It's 25 seconds long, our little jingle. Is that too long? I feel like it's the exact amount. Yeah, what's going on?

**Roger Peppe:** I like it. I like that "You should probably leave" bit.

**Mat Ryer:** Thank you. Yeah. "I actually think you should probably leave. It's gone too far..."

**Roger Peppe:** "Just wait..."

**Mat Ryer:** Does anyone else have an unpopular opinion?

**Roger Peppe:** I have an unpopular opinion... It's definitely non-techy. My unpopular opinion is that a shower is no good unless it goes properly cold.

**Mat Ryer:** What do you mean, you turn it cold, or you just stay in there until all the water's gone?

**Roger Peppe:** Yeah, I always finish by alternating on hot and cold, and it has to finish on cold. And if it doesn't, it's deeply disappointing. I think it was recommended by a physiotherapist once, to stop inflammation and things, and I started doing it. Now I go to someone's house and I turned it down to cold, and it's still lukewarm... It's like "Oh, no, no..." I just feel bad. I feel unfinished. It's just not right.

**Mat Ryer:** Do you gradually make it go cold? Like, sort of the opposite of boiling a frog. Or do you just blast it straight immediately cold?

**Roger Peppe:** Absolutely blast cold, blast hot, blast cold, yeah.

**Mat Ryer:** Yeah. I heard that's good for your immune system as well.

**Roger Peppe:** It's good for all things.

**Mat Ryer:** \[laughs\]

**Roger Peppe:** And lack of it is bad.

**Mat Ryer:** Bad for all things.

**Roger Peppe:** That's a bad start of the day.

**Mat Ryer:** Wow. I do like the ice pool thing. Bryan, have you ever had a freezing cold shower?

**Bryan Boreham:** Well, yeah, when things are broken. Or it's a good example of a bad user interface, where it's a little bit too hot, and you turn it sort of a tiny, tiny amount, and it's freezing cold. That's my experience. I do it by accident.

**Roger Peppe:** I think if I have the choice between a hot shower that couldn't go cold, or just a shower that was cold, I'd probably go for the cold one.

**Mat Ryer:** I'm tempted to get into cold showers, because I hear a lot about it... And I used to love the plunge pools you get some times in places, where there's just ice-cold water. You just basically throw your body in it. I find that to be really refreshing. People do all sorts of ice swimming, and things like that...

**Roger Peppe:** Maybe my opinion will become popular with Mat in the future...

**Mat Ryer:** I'm gonna give it a go, that's for sure. Kris, what do you reckon?

**Kris Brandow:** I feel like when it's hot outside I kind of want to do more of a cold shower. Or if I get back from a run when it's been like 90-something degrees outside, I'm like "I just really would like to be a lot cooler than I am right now", so I feel like that can sometimes be good. And I feel like I alternate. Sometimes I'm doing a little bit of cold at the end, it sounds good. But most of the time I'm like "I just want to do a nice, hot shower." Also, I keep my apartment very cold, so I think sometimes I get that cold by like stepping out of the shower and it's like "Oh, okay, now it's just like very cold all at once."

**Roger Peppe:** I find it weird -- if I have to have the cold at the end, I actually feel warmer when I come out of the shower. If I've had a hot shower, I feel colder. There's something about my body saying, "Oh, it's cold. I want to keep warm", and then you turn it off and it's like "Oh, I'm warm."

**Mat Ryer:** Yeah, because you feel different. You feel the difference.

**Roger Peppe:** Your skin texture is colder, I guess, but you feel warmer.

**Mat Ryer:** Yeah, because the outside air is warmer. That's cool. Do you do any other weird stuff in the shower? \[laughter\] \[unintelligible 00:53:42.27\] No, no, fair enough. I had an idea... This doesn't exist, I don't think, but this should exist. And the idea was a little device you could put on your tap, and it has a blue and a red LED. And then depending on the temperature of the water, it changes, and sort of like shines down. So the water is glowing red if it's hot, and cold if it's blue. I don't know if in every country that they're the two colors that people use for hot and cold. It should be, I feel like. It feels like quite universal, but I wouldn't be surprised. What do you think of that idea? Are you in? Do you want to invest?

**Roger Peppe:** \[00:54:24.23\] What's halfway? What's lukewarm?

**Mat Ryer:** It puts both. It's a kind of purple. Yeah.

**Roger Peppe:** Purple.

**Mat Ryer:** It would have to be. It literally would just be a very simple -- I could get Ron Evans to build this, probably, with TinyGo. It probably wouldn't even need that.

**Bryan Boreham:** Tricky... Electricity and water is not a great --

**Mat Ryer:** I disagree. They love each other. They get very excited. \[laughter\] They're too friendly, I think, if anything.

**Bryan Boreham:** Your product liability people might have something to say about this...

**Mat Ryer:** Well, that's why I don't hire those people.

**Kris Brandow:** I do feel that there's sometimes electricity in that, because you know, you have those obnoxious handsfree faucets that have to have some amount of electricity for the sensor, or whatever. So it's kind of like that, it's just adding some LEDs instead of some sensors.

**Mat Ryer:** Yeah. I've got one of those taps that does immediate boiling water, which turns out eventually good, because you're not boiling a full kettle. If you want a cup of tea, you can just do it straight from the tap. But then I think "I want that tap in my bath as well", so I can just --

**Roger Peppe:** Scold yourself. \[laughter\]

**Mat Ryer:** Yeah, well...

**Bryan Boreham:** Yeah, product liability...

**Mat Ryer:** So you don't want to invest, Bryan. That's what I'm hearing. Yeah, fair enough... Hopefully it does really well then, and you'll be like "Ah, I was the guy that missed out on the LED taps."

**Bryan Boreham:** Well, I have often thought that a hedge fund which the investment strategy was just exactly whatever the opposite i from whatever I've invested in, that would be a great product.

**Mat Ryer:** Yeah, there's another idea I had when we redid our kitchen... And I wanted to, instead of cupboards, just have dishwashers. Just every cupboard was a dishwasher. And you just put your dishes away, it just cleans them, they stay there, you don't have to pack them away... \[laughter\] Imagine how much time you'd save. And I pitched it to the guy that was designing the kitchen. I pitched it as though I was dead serious... And he was sort of contemplating, and then they just said it'd be really expensive and wasteful to run.

**Roger Peppe:** And you probably don't want to wash your cereal boxes, right?

**Mat Ryer:** Oh yeah, that's true. You want other -- there's other things; well, you could just not turn it on. \[laughter\] But yeah, that's a good point.

**Bryan Boreham:** You can cook salmon that way...

**Mat Ryer:** Is that what you do, Bryan?

**Roger Peppe:** Just don't put the soap tablet in.

**Bryan Boreham:** Don't put detergent in, yeah.

**Mat Ryer:** Yeah. We'll put like a dressing in instead.

**Bryan Boreham:** Wrap it in foil. Two layers.

**Mat Ryer:** Have you ever done that, Bryan?

**Bryan Boreham:** No...

**Roger Peppe:** I've heard this, too.

**Mat Ryer:** It makes sense.

**Roger Peppe:** I'm not gonna try it either... \[laughter\] If you've got a huge salmon, it's quite difficult to -- you know, it's not gonna fit in your oven, right? So I could see why people might want to do this.

**Mat Ryer:** Yeah. You could take the drawers out... I bet you could cook clothes, and stuff like that. What are we doing? We're wasting our time. \[laughter\] No...? \[unintelligible 00:57:11.17\] Kris. How do you cook salmon, Kris?

**Kris Brandow:** I don't actually -- I don't eat seafood, so I don't cook salmon at all.

**Mat Ryer:** Right. That's what I mean, I'm sure you could cook other stuff.

**Roger Peppe:** Easy answer.

**Mat Ryer:** Yeah.

**Kris Brandow:** Also, I don't know if my dishwasher is that much bigger than my oven.

**Mat Ryer:** Oh, really? Have you got a small dishwasher, or a big oven? They do tend to be smaller, don't they?

**Kris Brandow:** And you might not necessarily be able to pull all of the racks out of a dishwasher, depending on what type of dishwasher it is. It might get a little mad at you. They're very intricate machines, very magical.

**Mat Ryer:** Yeah, they're clever. They're good. I've got one which at the end of its cycle, it opens the door, it pushes the door open...

**Roger Peppe:** \[00:57:54.02\] Ours does that, too. Yes. It's weird when you're in the room and you've forgotten that it's on, and you hear that \[00:57:56.09\].

**Mat Ryer:** Yeah. I love that.

**Kris Brandow:** If anybody wants a good watch, there's a guy on YouTube that has not one, but two whole videos on dishwashers and how they work. That's not just like a five-minute; these are two hour-long videos on how dishwashers work... The channel is called technology connections. And it's one of those things where you're like "There's no way I'm gonna watch this whole thing." And yet, you will watch the whole thing. \[laughter\]

**Mat Ryer:** Does it cover cooking of salmon, and other fish, or...?

**Kris Brandow:** No. But he does scold people for pre-washing their dishes.

**Roger Peppe:** Yeah, we need that in the show links, please.

**Mat Ryer:** Yeah, let's do that. We'll put that in the show notes.

**Kris Brandow:** Yeah. You learn to not pre-wash your dishes, and not use pods. You should just use like the cheapest detergent you can get, because it's just soap, it's all the same.

**Mat Ryer:** This is good... The pods are actually worse, unless you use multiple of them, because there's a nice little pre-wash cycle, and... It's a good video, just go watch it.

**Mat Ryer:** What about rinse aid? And by the way, when he scolds people, does he use one of those taps that does the water, boiling water, quickly?

**Kris Brandow:** No... He just looks at you as if he's a disapproving father... Which might be the same. It might burn you in various ways.

**Mat Ryer:** That's how Bryan looks at me.

**Kris Brandow:** Bryan, did you think of an unpopular opinion?

**Bryan Boreham:** Oh, you mean beyond cooking salmon into dishwashers?

**Roger Peppe:** You expressed no opinion on that... \[laughter\]

**Mat Ryer:** \[unintelligible 00:59:18.14\]

**Bryan Boreham:** I wanted to rant about -- just a little short rant about people who seem to want to put the entire program in one line of code. They get the data, and then they filter it, and then they decorate it, and then they map it into something else, and then they... Maybe a little bit more in the JavaScript world, or the Python world; it's a little bit more pop -- but I see it. People trying to get that into Go. Just write the loop, please. Just write the thing that does the thing. Don't try and put it inside of -- it doesn't make it any better if it's in a function in a different file. I just have to go read that.

**Roger Peppe:** Is this another reason why slices.sort should not return the slice that's sorted?

**Bryan Boreham:** Oh...

**Roger Peppe:** Because that enables you to kind of \[unintelligible 01:00:08.21\] I've got this thing, it returns a slice, and it's sorted, and I can have them all in the same expression, deeply nested, sort, filter, blah, blah, blah...

**Bryan Boreham:** Yeah... Well, so I guess the implication would be that it should return a different slice. Whereas the one where it doesn't return, the implication is it mutates the one you gave it.

**Roger Peppe:** I'd say don't be scared of vertical white space, right? People want to put it all in one line because it looks look simpler, because it's all in one line. But actually, just have a few different lines. You can have a comment.

**Mat Ryer:** Yeah. You see, that pattern you see happening with -- I've seen it now in... I did a bit of Svelte.js, which is a JavaScript frontend frameworky thing... And the way that they recommend you format your code - having attributes inside an HTML tag, on different lines. And it really -- when you first see it, you think "That's really unexpected." It's very common to just have them going horizontally. But it's so much more readable. So yeah, it's like, that's what I do. And actually, a lot of the formatters do that as well.

**Roger Peppe:** I do that with Go function parameters, actually, a lot. Actually, if it's just starting to get a bit long, I just put every parameter on its own line, open brackets on its own line, each parameter separately, close brackets right at the end, on its own line too, and it works quite nicely.

**Mat Ryer:** Much more readable. It's also nice because they line up; all the variable names are aligned in a little stack, which is great.

**Roger Peppe:** Yeah, it's great.

**Mat Ryer:** But this is not popular opinions, this section...

**Kris Brandow:** \[laughs\] I feel like with the Code Golf community it will be unpopular. They're trying to minimize on lines, and characters, and all that...

**Bryan Boreham:** \[01:01:54.10\] Yeah. I'm relying on there being a lot of people who like the idea that they can write the whole thing in one line.

**Roger Peppe:** I guess that the sort of idiom that you're ranting against really is maybe epitomized by the sort of fluid programming style... Or fluent, sorry. Where you have one thing, it returns the same thing, it returns the same thing, and you're just kind of operating on that thing flowing through, so you don't -- yeah...

**Mat Ryer:** Yeah, people do that to create little DSLs, and things... And I understand the appeal of it, but almost in every case I find it to be I would rather it was just spelled out in the boring way. It's just very easy to -- it's much easier to debug things. You can put log statements in between, and things like this as well, rather than being -- yeah. And I think sometimes package developers - they want to really help the people that are going to consume the package, so they do a lot of things, like a lot of extra help, and a lot of work for them... When actually you aren't necessarily helping. You might as well just let them -- you know, they're not idiots. Let them do their thing. You don't have to solve every problem.

**Roger Peppe:** Yeah. Hard to argue against, when you're in the design phase and they're like "Oh, but this will make it easy for people..." I don't think so, but it's a tricky conversation to have, I think, sometimes...

**Mat Ryer:** Yeah, yeah. I think so.

**Kris Brandow:** I have an unpopular opinion... I feel like it might actually be -- maybe this time I'll actually get an unpopular one.

**Mat Ryer:** Humble brag.

**Kris Brandow:** I do have, I think, the second most unpopular opinion ever...

**Mat Ryer:** What was that one?

**Kris Brandow:** I think it might have been the one where I said "Calling Go Golang is like deadnaming somebody."

**Mat Ryer:** Oh, right.

**Kris Brandow:** That was very unpopular. People were very mad at me about that one.

**Roger Peppe:** That's popular with me.

**Kris Brandow:** I think it's popular with a certain subset of people, but...

**Bryan Boreham:** I'm with you.

**Kris Brandow:** So yeah, my unpopular opinion - it's about analogies. I think that the tech debt analogy - we should get rid of it, because I don't think the thing that we're talking about when we're talking about tech debt is debt. I think it's more akin to malpractice, and people are being irresponsible. Because I think most of the time when tech debt gets brought up, it's like "Oh, we're just gonna skip writing the tests, or skip writing documentation so that we can get this thing out the door faster. Or we're just gonna code this in like a really messy way, so it gets out the door faster." And I'm like, "That's not debt. That's you not doing your job properly. Please just write the comments, and the dots, and the tests."It's part of the job. You can't cut out vital things. Or if you do, then you're committing malpractice, and we should call it that, and that's why I think it's gonna be unpopular. So it's not tech debt, it's malpractice.

**Mat Ryer:** Do you ever though make technical decisions that are pragmatic? Like, there are ways that -- I don't mean skipping tests. I mean, I do TDD, so I rarely skip tests, and docs; I think that's all very important. But do you not sometimes think, "Well, this thing could be better, but we're going to just -- it's good enough for now, and we're gonna ship it. But then maybe at some point we have to come back and fix this up"?

**Kris Brandow:** I think if you have a good understanding of the trade-offs, and it's not like a -- like, I guess it's about how much future harm are you going to do in this, and also how much is it of a best practice thing? Like, if you're skipping best practices, then obviously you shouldn't be doing that, so it's not really debt. But I think a thing that might be akin to technical debt is choosing to use a library or framework instead of building it yourself. So it's like "Oh, I've assessed how long it would take us for us to build it, I've assessed the risk of taking on this dependency, and actually using this framework, and all of the knowledge that's needed for both options, and we've decided that taking on this framework makes more sense, even though it's more risky." I think that's closer to -- especially the way businesses use debt. Businesses aren't just going out and being like "I'm gonna go get a big ol' loan just for the hell of it." It's like, no; you're gonna sit down and assess what are you actually going to use the money for, how are you going to use it, how are you going to repay it, all of this stuff.

\[01:06:03.13\] So if you're doing all of that math and risk assessment, then what you are doing is likely a debt-focused thing. But that's rarely, if ever, at least in my experience, what people are doing. They're just kind of not doing the things they should be doing, and then being like "Oh, we'll just fix it later." And then later literally never comes, and then they just throw out the whole thing, and they're like "Okay, we're gonna do it right this time", and then they do the same thing again.

I guess the thing I think it's more akin to is using single-entry accounting for your multimillion dollar company, and then having no notes in your single-entry account. "Money is going places; where does it go?" "We don't know." It's that level of thing. And it's like, how do you clean up a single entry accounting system and turn it into a double entry accounting system down the road?" It's like, that's going to be awful for you. You should never do that. If you know you're going to build a big enough business where you're going to need double entry accounting, just start with it. And it's the same thing with this. If you're not building something, you're gonna throw away in six months, then just write the docs, just write the test code; think about what you're doing. It's gonna make you go faster in the long run. You're not gonna get that much speed if you're like "Oh, I'm gonna do this, because it's gonna save me like a few hours here." It's gonna save you a few hours here, it's gonna make you spend four weeks trying to unwind it in like six months, or less.

**Mat Ryer:** How to feel about that? I agree.

**Roger Peppe:** For me, a lot of the tech debt -- I'd say the biggest tech debt things that I've seen in the past have usually often been because you've made a new API, for example. You've made a new API, and you can't remove the old API, because people are using it. So you end up with two versions of the API. And at some point in the future, you realize that no one is using the old API anymore. But removing it -- maybe you've written it in such a way that it's really hard to remove the old one. But you kind of want to, because it's holding you back, because it's using loads of stuff that you want to be able to get rid of. So that's tech debt to me. You're in this situation of being indebted to this thing of the past, which you kind of had to take on this debt, and you kind of have to pay it sometime. That's often the case Like, not just skipping tests. That's an easy -- "Yeah, we're taking on this. We're committing malpractice by deliberately taking on this debt." I suppose. But there's loads of other cases, I think, where it just arises, because \[unintelligible 01:08:29.19\] pragmatism, because you have to do this this way, otherwise you won't make progress.

**Kris Brandow:** Yeah. And I think, once again, if you've done a lot of measured analysis of things where you go into it and you're like "Okay, this is why we've taken this on", I think it can be described as a debt. But I think a lot of the times when people are doing it, they're not winding up in those situations because of -- I feel like a lot of times, at least when I've walked into places, it's like we've wound up at those places not because people have thought things through, but because they just rushed to do something. So it's like "Oh, well this thing is hard to maintain, so we're just going to greenfield it." And it's like "Okay, but what's your plan to actually deprecate and dismantle the old thing?" And it's like "Well, we didn't think about that." I'm like "Well, okay, that's not--" Once again, we're back in the realm of - just because you have it... Like, you have it now, and you don't like that you have it. Well, you have it because you didn't plan to actually get rid of a thing, but you knew you had to get rid of the thing. That doesn't feel as much like responsible debt usage to me. That, once again, feels like "No, you should have planned for how you're gonna get rid of it if you knew you were gonna get rid of it."
Obviously, if you need to build this new API for some reason, and you're like "We don't know how we're gonna get rid of the old one, and we're marking that down as a debt, and we know we're gonna have to deal with it, and it's not gonna be painful" - different situation, right?

**Roger Peppe:** But we know how to get rid of it. It's just gonna take two man months of work, and we don't have that time. That's usually... We know how to do it, we know exactly what we want to do, but we just have to pay that debt.

**Mat Ryer:** Kris, I bet your finances are in great shape, aren't they?

**Kris Brandow:** Yes. \[laughs\]

**Mat Ryer:** Yeah. I thought so.

**Kris Brandow:** I'm the person that was like -- to my friends, I'm like "Yes, I balance my checkbook every month." And my friends are like "What do you mean balance your checkbook?" I'm like "I reconcile my finances... What do you mean what do I mean?"
I was also the person who was 21, at the bar, just like keeping diligent track of my drinks and how much I had spent, so I would know how much money I had spent...

**Mat Ryer:** Oh, wow...

**Kris Brandow:** Even while very drunk, I would do this. I'd be like "Okay, I'm just documenting all--" I'd wake up the next morning and be like "Okay, well, I guess that's exactly how much I drink. Okay." And then you look at the credit card, it's like "Oh, yeah." So yes, I keep very good track of my finances, yes.

**Roger Peppe:** You mean you actually count your change.

**Mat Ryer:** I mean, I don't spend cash anymore, so not really... Or I rarely spend cash.

**Mat Ryer:** I don't even look in my bank account. I'm basically the opposite of that.

**Bryan Boreham:** It's all gone, Mat.

**Mat Ryer:** Yeah, basically... Okay, I have another unpopular opinion, another one. A quick one. I get this -- we obviously want to be nice and kind to everyone... But actually, in the right places, banter, being mean, poking fun is the way I've built my strongest friendships with people. So I actually think that it's not as simple as just always be kind and nice to everyone. I think it's an intellectual exercise sometimes, too... Especially if you do it in a way that's funny, and somewhat uplifting. It can be. So I just don't think -- my unpopular opinion is don't always be nice to everyone, because you miss out.

**Roger Peppe:** Be mean to your friends, is that what you're saying?

**Mat Ryer:** I mean, I basically am. Kind if. I would hate the idea of upsetting anyone. And I do do that, because that's a risky take. One time - this is quite embarrassing, but I'll tell this quick story... I was introduced to this guy, and he had a very cool -- the way he was dressed was very cool, but it was deliberately... Almost like dystopian. He looked dystopian in his whole vibe... Which I really appreciated. I thought he looked great. So he had really sort of tatty clothes, and like scruffy hair, and stuff. He looked great. And then someone introduced him and said, "Oh, this is John." And I just said, "Didn't I give you a pound earlier, outside?" And I don't think he liked it.

So that's one of those things where I'm drifting off to sleep and I'm suddenly woken again where I've said this horrible thing to somebody... Take a risk; sometimes it doesn't pay off. But to the right person... Like, if someone said something like that to me, I'd be thrilled. And I do get it. At the conferences - I was at GopherCon EU recently, and someone said to me... Last year someone said -- because I talk about my hairline a lot. They said "Your hair doesn't look that bad from a distance... From a distance." It's like, "You're quite good-looking in low res." I'd be gorgeous if I was a Minecraft character...

And then this year... This year someone said -- because they're joking; they feel like they know me, and it's a complete stranger, but they just said "Is that a wig?" Why would I choose this?! \[laughter\] Imagine going into a wig shop and saying "Oh yeah, how much is that one? Very affordable. I thought it would, because it's tiny."

**Roger Peppe:** They clearly thought your hair looks good. I cannot think why, yeah.

**Mat Ryer:** Yeah, exactly. It doesn't look -- it's not great. It's not great, but... So yeah banter and -- what do you think?

**Kris Brandow:** The thing you said about the low res reminds me of that "Cute from far, but far from cute" line, which is always like fun... But I don't know how much I disagree with you, because I think in some spaces there is this very large sets -- I think especially within tech companies now, there's a very large sense of "Yes, be nice to everybody, be kind, be civil", all of that.

\[01:14:11.02\] And I think of like the like black or queer spaces that I'm in - like, people are not... Like, that's not how things work there. We're mean to each other all the time. This is not like all people in this community, but a lot of people; it's where the whole like throwing shade comes from, reading people, all of that... It's just like this - yeah, you kind of read people \[unintelligible 01:14:29.09\] sometimes. You're just like "Yeah, you're still my friend, but what you did - I've gotta rip you apart for that."

And I think there's also this slight level for me where -- I don't particularly like when environments try to be kind to everybody, be nice to everybody, or "We're welcoming to everybody", because that's like a little bit of a dog whistle for me that it's like "I'm probably not in a safe space." To be blunt, I guess it's like "This is some white people nonsense when that happens." We have to recognize that sometimes people are gonna not be nice, and what are you going to do then? Are you just going to tell them to be nice? That's not how this works. Who determines what is nice? Is it you that determines what's nice? Because what might be nice for you might not be nice for me. So I think there's a lot of complexity in there. But I think overall, Mat, I agree with you slightly.

**Mat Ryer:** Yeah. I mean, those roasts, when they do the comedy roasts of people... I'd love to be doing that. Maybe we could have that as a regular segment. Like, "Today's the roast of Bryan Boreham." \[laughter\]

**Bryan Boreham:** \[unintelligible 01:15:26.06\] the whole episode.

**Mat Ryer:** Yeah, it'd be a new series, that one. \[laughter\]

**Kris Brandow:** But I was listening back to one of the episodes - I think it was a Gophers Say episode where you were hosting, Mat... And all of us were just like roasting you for like the entire episode... And that was fun.

**Mat Ryer:** Yeah, exactly. Yeah, it was fun. But I think you miss -- if you have this very sterile environment... And I understand why this happens in tech companies; of course, we want to make sure that people aren't -- like, you don't want to upset people. But you miss -- there's a missed opportunity there to build some stronger... It's a little bit like a cut, where you get scar tissue on a cut, and it's stronger. That scar tissue is stronger than the tissue there was before. So these little cuts, these little jibes - I think we need it.

**Kris Brandow:** The more you explain this, the more I'm like "Maybe \[unintelligible 01:16:20.22\] Because I think too part of the issue I have with the "Just be nice to everybody" is like, is that really the biggest problem you think we need to solve right now? It's just like, people are saying mean things, and I'm like "That's not the biggest problem that I have certainly had in a lot of these tech spaces." I would just really like it if people weren't doing racist things all the time. And it's not them saying things, it's like other things. So I think sometimes we focus a little bit too much on the "Oh, just say kind things to each other, please."

**Mat Ryer:** Right. Yeah. It's almost worse by just "Now at least we've solved this problem, because we're all saying these right things."

**Kris Brandow:** It reminds me a bit of a few years ago, when there was a really big push to get rid of certain words that we use in tech, like whitelist, and blacklist, and master, and all of this... And people are like "Well, it's really painful for people of color to have to see these words, and all of this." And I'm like "Black people were just like -- what do you mean?" Like, seeing the word "slave" is not throwing me into an existential crisis, or anything. It's a thing that happened. But also, this usage of master, is not different; whitelists and blacklists have different -- like, words can mean multiple things. So it's like, this feels really weird as a thing for us to be focusing on right now, especially when it's like, there are much bigger problems that we should probably be looking at... And there was like a non-insignificant amount of effort that went into "Let's go through all the codebases and remove master. Let's go through all the codebases remove blacklist, and whitelist, and all of this", and I feel like after that people were kind of like -- it's kind of like after the election of Barack Obama, like "Oh, no more racism. We got rid of all the stuff." But it was like, "That's not the stuff. That's not the thing." I think it's kind of the same with this "Oh, everybody's being nice and civil and kind to each other right now, so there's clearly no problems with other stuff." That's not how that works.

**Roger Peppe:** \[01:18:18.01\] Tokenism, right?

**Kris Brandow:** Yeah. On a level, yeah.

**Mat Ryer:** But Roger, you're quite a nice guy. Are you ever mean to people?

**Roger Peppe:** Never. \[laughter\] Only my friends.

**Mat Ryer:** Exactly. Your closest friends--

**Roger Peppe:** We definitely have some good banter, yeah.

**Mat Ryer:** But you mentioned this, Kris. Sometimes -- I mean, I think it's really valuable... A joke that's a jibe can be a really kind of good way of actually people getting some feedback. Like, I've actually -- you know, that's how we do it. If someone -- if they're being big-headed or something, the punishment, the social kind of reaction to that is often a joke, or poke fun at it, or something like that... And it's kind of a nicest way, or a very nice way, in some ways, to deliver that bit of feedback. And it's kind of light-hearted, and it's non-serious.

**Roger Peppe:** Many a true word is best said in jest, right?

**Mat Ryer:** Yeah.

**Roger Peppe:** So it might sound like banter, but you're actually being mean.

**Mat Ryer:** Well, I think it's sometimes a good signal. And it gets you thinking. But it's a safe way to do. Humor is often a safer way. Bryan, you called a lot of people idiots today on this podcast, so I assume you're on board with this. \[laughter\]

**Bryan Boreham:** Individually, by name. Yeah.

**Mat Ryer:** Yeah, we'll cut it out. We'll cut out all the names. That's brutal. \[laughter\]

**Bryan Boreham:** I'm just sitting here thinking that there are a lot of cultural differences, and that really in a bigger company tends to be a thing that you need to watch out for, and in a broadcast medium you have to go to the lowest common denominator. That makes it harder. But I do love the sort of -- well, for me... Now I'm going to insult more people. So the sort of American thing of "Everything is awesome!" All of the "Fantastic!" If it's not fantastic, then you must hate it. You know, "Hey, I fixed that bug." "Fantastic!" Right? And the British thing is more "Yeah, it's alright. You could do better. Yeah, fair. Yeah." And I really love many of our Eastern European colleagues who just say "This code is s\*\*t." \[laughter\] They're just absolutely straight out with -- for the same code, to be clear, in each case.

**Kris Brandow:** Yeah. I feel to Eastern Europeans, the highest compliment they can give is like "Good. It's good." And you're like,

"Oh, okay." \[laughs\]

**Roger Peppe:** Once every five years, yeah.

**Kris Brandow:** \[unintelligible 01:20:58.20\]

**Mat Ryer:** But the other thing going around to conferences and stuff I've noticed is that because in a way we're all selected around this language, so we're all kind of in software, a lot of us like building things... So I think there's a certain level of -- I don't know what it is; there's certain level of intelligence you can kind of assume with technical people. Or it's whatever the Go community does that attracts people to it, I don't know. But I find that wherever I go, some jokes just work everywhere. And that was a big surprise to me, because I was very conscious of different kinds of cultures, and different approaches to things. But I do find that you can kind of have -- we just have a lot of fun with people. Anytime I've interacted with groups in the Go community, in tech communities, it tends to be a really high level of kind of really good, quality sort of interacting. Only sometimes -- well, like I said, people make fun of my hair, because I make fun of it on stage, and stuff. But it's fun, it's nice.

**Roger Peppe:** \[01:22:10.15\] So what kinds of jokes do go down well, universally? I'm interested, given that I'm giving a talk at \[unintelligible 01:22:14.14\] in Italy...

**Mat Ryer:** Yeah. Well, in the conference audiences, a lot of them listen to Go Time. So that's different, because they sort of expect it now. One of the big things I noticed is you have to let people know that it's a joke. You can't just say something that's hilarious, that we might think it's hilarious...

**Roger Peppe:** Arguably hilarious.

**Mat Ryer:** Yeah. But if they don't know it's a joke, they're probably not going to just sit and laugh at you, because they might consider that to be quite rude. So standard office humor works at conferences. I don't do it, but things like "Oh, forgive this code. I wrote it on a Monday." That will get a laugh. Or if you say, "Oh, I probably did this before I'd had any coffee..." These sort of things work, because they're safe. They're a bit like - we have these Christmas crackers in the UK, and they always come with a little joke that is just terrible. They're terrible jokes. And it's almost like you're united in the eye-rolling against these jokes... But it's safe, they know it's a joke...

I said once at a conference that my dad had said, "Oh--" Yeah, he'd said something that I can't remember what it was. And I just said, "Get out, dad." Right? That was my thing. Which, to me, that was really funny. And it was just silent. Everyone just thought I was telling my dad to get out. So it's like, it sometimes doesn't work.

**Kris Brandow:** Yeah, I feel like the broader thing is just you've gotta have a lot of nuance with this, right? I think sometimes in these types of spaces, or in communities, or I guess in the world in general, it's like, people want to have one easy way that's like universally true, objectively. Like, "Everybody should be nice to each other", or kind, or these other very positive words. And it's like "Well, I mean, that's not possible." There's gonna be some people who are gonna be not nice, or not kind. But it's also just infeasible, since what is nice from one person's perspective is not nice from another person's perspective...

There's the whole thing about Southern people, where if they say "Oh, bless your heart", it's like "Are you saying that in a nice way, or are you saying that in like the "nice way"? So it's like, the very same words, said in the very same way, could mean two completely different things. So I think it's more like we've gotta be like, let's navigate these situations better, and let's have ways of like, if there is harm that's done, repairing that harm. Focus on that, and making sure that it's like "Okay, that's a line we've crossed. Let's make sure we don't cross that line again." But I think when people start getting into the dogmatic universality of like "Don't tell jokes about things", or don't do this, or don't do that, it's kind of... I don't know, that's a little too much; this pendulum has swung a little bit too much to the other side.

**Mat Ryer:** Yeah. And we should forgive people as well if they do cross those lines, especially if it's a joke. It depends, but if it's coming from a good place, and it's too far, or whatever, I do think we need to be a bit more forgiving, rather than... I sometimes get DMs, and it'll just say, "Mat, no." It's just like what you might say to a dog. So I get that, and I'm just like "Ah, come on..."

**Kris Brandow:** I don't like the concept of throwing away humans, or like being like "You did something bad. You're gone forever." It's always irked me a bit. Even with things where I'm just like "I don't like you as a person at all." But still...

**Mat Ryer:** Yeah, you still do a podcast with me.

**Kris Brandow:** I'm not saying you specifically...

**Mat Ryer:** Oh, right. Not this time.

**Kris Brandow:** ...I'm saying "you" in the general. I mean, I find ways to poke fun at you... I made a whole little TikTok about you, that maybe one day will get posted, because I think it's hilarious.

**Mat Ryer:** \[laughs\]

**Roger Peppe:** Tomorrow.

**Mat Ryer:** Yeah. We'll put it in the show notes.

**Roger Peppe:** I'll install TikTok for that. \[laughter\]

**Kris Brandow:** Oh, a plug - we do actually have a TikTok. I found out. I'm on the TikTok. I didn't know. I thought it was just like I never had anything posted about me on TikTok, but that's a lie. There's lots of videos on me on TikTok.

**Mat Ryer:** Oh, wow. I didn't know that either.

**Kris Brandow:** Go check out Changelog.com. It's like @changelog.com at TikTok. We've got a nice little TikTok page.

**Mat Ryer:** Oh, wow. Nice. Okay, well, on that bombshell, it's time for us to wrap this up. We've gone way over... But this was great. I hope they'll keep this in. Thank you so much for joining us to talk about generics. Roger Peppe - always a pleasure. Hopefully you'll come back again soon. Bryan Boreham - again, we should maybe do some more performance-specific episodes. That would be really great to talk to you, pick your brains on that a little bit more as well. And of course, Kris Brandow. Thank you very much, see you next time on Go Time.
