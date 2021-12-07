**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and I close my browser tabs. I'm not like these people that just have millions of tabs open for weeks and weeks, and then they can't find anything... And when you pair with them, they can't even find anything. So it's like, "Close your tabs!" That's it. I close my tabs.

Welcome to part two of our deep-dive on Go language proposals. You don't have to have seen part one, or heard part one - we're not that organized - but you can go back and listen to it afterwards, for different language proposals that we all just discuss and chat about.

So let's meet the panel today... Joining me - it's your friend and mine, Johnny Boursiquot. Hello, Johnny.

**Johnny Boursiquot:** Hello, everyone. And I do keep my tabs open.

**Mat Ryer:** How many?

**Johnny Boursiquot:** I get to the point where I can only see the little favicons... And I have to sort of guess which one of the multiple tabs with the same favicon I have... It's really hard when you have GitHub icons on more than half the tabs you have, and you have like 50-60 of them... And then I wonder why my fans are going off. So it's like a self-inflicted wound almost.

\[04:10\] But yeah, I did find a neat little tool the other day called One Tab. It closes all the tabs and it creates links for you, and it puts it in one tab, as the name implies... So yeah, I use that as sort of an excuse to just open all kinds of things, because I can always One-Tab it and now I have a list of things.

By the way, am I the only one who doesn't use bookmarks anymore? Anyway, let's move on to the other folks.

**Mat Ryer:** That's a good question. I've honestly never really used bookmarks. I really should, because there's loads of stuff on the internet. There's loads of stuff. But yeah, I just DuckDuckGo everything, fresh, at the time. \[laughter\]

Let's also meet our other guests. He's back, it's Roberto Clapis. Hello, Roberto!

**Roberto Clapis:** Hello, hello.

**Mat Ryer:** Welcome.

**Roberto Clapis:** And I would like to say that I pin some of my tabs, and I close the others. So here's yet another approach.

**Johnny Boursiquot:** Oooh... Nice. Professional.

**Mat Ryer:** How many pinned tabs do you have?

**Roberto Clapis:** Nine.

**Mat Ryer:** Okay... What are they?

**Johnny Boursiquot:** Is that because that's the maximum number you're allowed to have? \[laughs\]

**Roberto Clapis:** No, it's just because that's the amount of chats that I use... And each one of them has to run in a separate Tab, because - the web...

**Mat Ryer:** Yeah. Okay. What are all the tabs, or the URLs? Can you just read them out quickly? \[laughter\]

**Roberto Clapis:** No, it's fine. It's fine. I don't want to advertise any chats.

**Mat Ryer:** I just thought I'd ask. No probs. We're also very lucky to welcome back Daniel Martí. Daniel, welcome back!

**Daniel Martí:** Happy to be back! And I feel like I'm back from the past, because I just realized that tab pinning is a thing... \[laughter\] As of ten seconds ago.

**Mat Ryer:** It's like back to the future...

**Daniel Martí:** I do close my tabs religiously. In fact, on my phone, on Firefox, I even enabled a setting to automatically close tabs after 24 hours, because I'm too lazy to do it myself, so they just automatically die.

**Mat Ryer:** Wow...

**Johnny Boursiquot:** That is very neat.

**Mat Ryer:** That's next-level.

**Johnny Boursiquot:** Your life must be clean and simple, and just minimalist.

**Roberto Clapis:** That's so on the edge.

**Daniel Martí:** Yeah. Just ignore my background, and yes. \[laughter\]

**Mat Ryer:** Great. Well, maybe we should just jump straight in. Although, actually, I was just thinking about this... There may be new -- there are in fact new watchers/listeners, so maybe we could just quickly go around and tell us a little bit where you work and what you do. Do you do computers, and stuff? Anyone? Johnny, do you do computers?

**Johnny Boursiquot:** Yeah, usually. My job involves finding out why they're not online anymore. Oh yeah, I'm an SRE, so usually I'm chasing down why they stop working, those computers.

**Mat Ryer:** Oh. What would we do without you...

**Johnny Boursiquot:** Not have any internet, I guess. No web for you, no tabs for you...

**Mat Ryer:** Exactly. It solves the tabs problem though, so... Difficult one there. Roberto, what are you doing with your days?

**Roberto Clapis:** Yeah, I also work with computers, also the web. I make sure that if it works, it doesn't work too much... Like, it starts giving data to people that are not supposed to get it. So kind of the other side of the spectrum.

**Mat Ryer:** Right. Yeah, so you two are kind of fighting, in some ways. You're sort of trying to get things online and out there, and you're sort of like "No...!"

**Roberto Clapis:** If I could shut everything down, it would be perfect. Everything is secure if you can't access it.

**Johnny Boursiquot:** That is true. \[laughs\]

**Mat Ryer:** Great point, yeah. Daniel, what about you, mate? Do you do computers?

**Daniel Martí:** I do computers. I've also been contributing to Go for a while, especially some packages like JSON... So whenever any of our listeners complains about JSON, I'm usually on the receiving end.

**Mat Ryer:** \[07:55\] Right. Yeah.

**Daniel Martí:** And I see Roberto laughing at that... \[laughter\]

**Mat Ryer:** Yeah. We'll have to do a proper episode one time, where you can just show us all the complaints that you get about JSON. I'd love that. I've worked with somebody once who complained about JSON, because he thought it had too many brackets, and he wanted me to not use that many brackets, because it's a waste.

**Johnny Boursiquot:** That's YAML.

**Daniel Martí:** Yeah.

**Mat Ryer:** He's invented YAML. \[laughter\] Okay, so let's jump in. Why don't we go straight to our first language proposal that we're gonna discuss today? Anybody following along, you can find these on GitHub.com/golang/go, and then we'll read out the issue number so that you can follow along.

The first issue number is issue number 20733. It's a proposal to redefine range loop variables in each iteration. This is a common gotcha for a lot of people in Go. Johnny, have you seen this in the wild, bugs that relate to this?

**Johnny Boursiquot:** Yeah, I've seen it, and I have committed the file myself. Not just as a newbie, every once in a while, still to this day, you'll still catch me. So yeah, it's a pesky little -- the best example that's usually given is where you have some shadowing going on. Maybe you have a goroutine you're launching, and you're closing over your iterator or something like that, and you realize that the value you're expecting is not quite coming out with each iteration, and whatnot. So it's a very easy trap to fall into, and this proposal is -- I looked at it and I'm like "Yeah, that makes sense. Why doesn't it do that by default?" But yeah, as we dive a little deeper into it, I think there's some reasons why that wasn't adopted... But I'd be in favor of it, actually.

**Mat Ryer:** Okay, so the problem is then when you range over something, it reuses the variables in each iteration. So if you do kick off goroutines and things, you feel like you'd kick off that goroutine and it's gonna use the value that was in that iteration. But actually, as that's updating, it'll update for all of the goroutines. And that's where you then think -- usually, you end up with the last number, and everything, and it's the same, and it's such a strange bug.

**Roberto Clapis:** It's like the last+1. So if you're iterating over a slice, you actually go out of bound, which is even worse.

**Mat Ryer:** Right, yeah. Of course. If you're ranging/using it over numbers, right?

**Roberto Clapis:** Yeah.

**Mat Ryer:** Yeah, that's a good point. I've never heard that one.

**Roberto Clapis:** I just fixed one last week for a framework I'm working on that wasn't working because of this issue.

**Mat Ryer:** So it's a fresh thing, it's a real thing.

**Daniel Martí:** And I also think a pretty common case of this is when you have table-driven tests, and then you suddenly say "Oh, I'm gonna make them parallel, so that they all can run in parallel with each other." The test cases, that is. And then days later you realize that one test should be failing, but it's not, and it's because you were testing the last test case 100 times, instead of testing each of the test cases separately... But it's because you forgot to make a copy of the variable. So you're just reusing the same variable and then the parallel test as a goroutine.

**Johnny Boursiquot:** So your tests are a lie then...

**Mat Ryer:** Yeah. But that last case definitely works..

**Johnny Boursiquot:** It really works. \[laughter\]

**Mat Ryer:** Yeah. And there are workarounds... But I genuinely find the workarounds to be really strange. You end up just essentially -- it looks like you're just creating a new variable and assigning it with the same name. That's weird, isn't it? Are there any workarounds that are better than that?

**Roberto Clapis:** \[11:54\] Yeah... In one of my first talks I was actually talking about this, because I was talking about Go pitfalls... And I proposed to pass it as a parameter. So if you're closing over the variable, instead of using a closure, you just accept that as a parameter and you pass it to the function. But it's so unintuitive, because you see the variable appearing at the end of your code. And when I was talking about this - Roger Peppe was in the audience, and he just raised his hand, just shaking his head and saying "Nope. You shouldn't be doing that, because it's unreadable." So I guess redeclaring the variable is the only readable way to do this...

**Daniel Martí:** I feel like redeclaring a variable is also kind of silly, because if somebody is -- especially somebody that's new to Go, they look at that code and they go like "That's kind of like a no-op. It's not doing anything." And then you kind of need a comment to say "Hey, this is actually doing something. Don't delete it." Because if you delete it, the code might not actually break at all either. So it's extra-confusing, I think.

**Mat Ryer:** Yes. Sometimes if you're kicking off goroutines, you can pass arguments in. That's another way that is actually quite a nice workaround, if in an anonymous function you actually take an argument, and then when you call it, you pass in that value. At that point then it'll be copied into that scope, so that it's then safe. That's not too bad... But even that's quite strange. So Daniel, what is the proposal suggesting?

**Daniel Martí:** So the proposal is essentially suggesting to change the default behavior to redeclare the variable at each iteration. So essentially have a variable scoped within each iteration, instead of sharing one. And then, essentially, I can't think of a single program that would break, that was doing something sane... If somebody was depending on this reuse of variables and then I only use the last one for closures, I would argue that that was wrong to begin with, and it wasn't something that would always work anyway... So I think it's a good change.

**Roberto Clapis:** There is one extra data point about that. I found out that in the JavaScript specification this is -- like, if you use let in a for loop, it is redeclared on every iteration. So there is a specific entry in the JavaScript spec saying "If you have a for loop and you use let, the scope of let is inside the body of the for loop, not the one that is for var, for example."

**Mat Ryer:** That makes sense, really.

**Roberto Clapis:** Yeah. And everyone that uses JavaScript has never had any troubles with that. This is something that no one knows, because it just works. It doesn't surprise anyone that this is behaving this way.

**Mat Ryer:** Yeah. And I think, to Daniel's point, this is probably completely backwards-compatible, because even code that has the weird, quirky workarounds - they'll still work, and they could be tidied up later.

This has 91 thumbs up on GitHub emojis there, and six thumbs downs. It's got 11 of these weird party emojis, and nine love hearts. I think emojis are essentially how we should make decisions these days in the modern world. Someone's just done it, deliberately party-ed it and turned it to 12. \[laughter\]

So yeah, I feel like this is actually quite a good one. Is there a difficulty in implementation. Was this a design decision, do we know, or is this just what happened, and we sort of found out later, this was a side-effect of how it was built?

**Johnny Boursiquot:** In my reading of the commentary going back and forth, most folks seem to be in favor of it... Yet people on the Go team obviously are chiming in - people that are or were, are chiming in... And for the most part, this seems like a change that wouldn't get a lot of pushback... Again, because with the sort of implicit implementation or support for this - I can't think of many situations where it would actually break someone's logic, if your stuff sort of behaves as expected. Not to say that there aren't any edge cases, but for the most part it seems overwhelmingly supported. And there's a comment in there from Brad Fitzpatrick around giving it more consideration for Go 2... So who knows, maybe we'll see this.

**Roberto Clapis:** \[16:07\] Yeah. And also, if you look at the way this is compiled, it's clear that the way it is is because there is no exception there. It just works. This is the way that for loops are compiled, because the first statement is run only once, and that's the declaration. And some people complain that this could introduce some performance issues, because then you get a lot of variables. But if you are really that concerned about performance - well, it's weird, because why are you optimizing that kind of things... But if you are, you can just declare it on the line before the for loop, and just don't use the first -- you can just do *for;* and go on with your life.

**Mat Ryer:** Yeah. So if you were ranging over some big chunks of data, and they're suddenly now being copied, could you ever notice that? Would that ever make a marked kind of difference?

**Roberto Clapis:** If you don't close over it and if you don't keep a reference, no, because the variable would be in-lined by the in-liner. It would disappear in the next loop. I don't think this will survive iterations.

**Daniel Martí:** Yeah, and I don't think copies are gonna be a worry, because if you have large structures as the element value that you're ranging over, they are getting copied today anyway; it's just a different kind of copy. But I think it's still just gonna be one copy.

**Mat Ryer:** Yeah. Well, I know that junior devs often -- and actually, people sometimes from other languages, and even just normal Go people, are really not trying to single any people out here. But there are some people that really do get a bit too worried about that kind of thing, where they'll kind of use pointers unnecessarily sometimes, because the idea of just passing pointers around is kind of much easier and lighter... But in practice - that's the thing. In practice, what difference does it really make? I think that's kind of a good point generally to make there.

Okay, we should do that one then. That's our decision. Is this what this is? Are we just deciding now?

**Johnny Boursiquot:** \[laughs\] Well, I've added a thumbs up. Maybe that'll kick it over the edge, what do you think?

**Mat Ryer:** Yeah. In the Go team HQ, they'll be like "We've got a thumbs up from Johnny B. Let's get on it!" \[laughter\]

**Daniel Martí:** I would actually bet on this one getting accepted soon. Of all the ones that we've talked about at least.

**Mat Ryer:** It's funny, because it's been there for -- I'm gonna just check the date on it...

**Johnny Boursiquot:** June 19th, 2017.

**Mat Ryer:** Yeah. So a few years. But yeah, it'd be great to have that one. Okay. Daniel, do you wanna pick another one then? ...unless anyone has anything more to say on this...

**Daniel Martí:** Yeah, we can go on to the next one then. I'm actually gonna go out of order, because I'm avoiding a complex one and leaving it for later, so that we can get to smaller ones first. I wanna talk about issue 29036, and it's to make imported symbols predictable. This is sort of a double proposal, and that is right now when you look at a Go file and you see a name, like foo, and you're thinking "Where does this come from?", you would think that the rules are pretty simple... Like, "Is foo in my current scope, in my current function declaration, as a variable? Or is it a parameter? Or is it a global? Or is it something that I imported?" And that's usually true, but it's actually not always true in Go... Because if you use a .import, a .import means import all the names from this other package... And if you just look at the Go file alone, you don't know what all those names are. So it's sort of implicit and sort of explicit.

\[19:53\] And the other case is when you import a package, and the last element of its package path does not match its package name. Go allows that; it allows you to then use the package name instead of the last element of the package path. And many people then use the name explicitly in the import, but you don't have to... And if you don't, then you've gotta get back into this edge case, where the name is implicit, it's not explicit. So this proposal is essentially forbid those two modes, and then when you look at a name in a Go file, without loading all the dependencies, without loading all the type information, you can always easily know where it comes from.

**Mat Ryer:** Yeah. This is one where -- one of those best practices is to name the folder of the package the same as the package... Because it just helps with lots of things. And then this proposal is talking about, I suppose, always require that symbol to be explicit, maybe... It would be harder to make it not allow you to put a different package name inside a folder, wouldn't it? That would be quite strange. But is that the proposal then? Always, it will define -- and you do it before the import. So you do import, the name that you're gonna use locally, and then the package as a string, and that's how you can do that.

You can also, Daniel, though, you could make up any symbol name, couldn't you? But that's probably okay, because it's local, and that's up to you. And in fact, it's kind of a feature too, isn't it? Especially if you've got clashing packages, or even you just don't like the package name.

**Daniel Martí:** Right. I think what's being forbidden here is that if I declare a package path called go-foo, but the package name is Foo, right now I can import that as literally just SomePath/go-foo, but then use it as Foo, because the package name is implicit. So those are saying "No, no, if you want to use it, you have to explicitly import it as Foo, because then the syntax alone will tell you where Foo is being defined." And I think that's a good change.

**Roberto Clapis:** I agree, also because we can have tools like go import automatically add that named import, and people will not touch it, but when you read the file from GitHub or wherever, you can just infer everything from the file, without having to look around and hope that you find the right name.

This is one of the features that I love about Go - every file is self-contained. You can understand a lot by just looking at the file, and if you can see every file of a certain package, you understand the whole thing.

**Johnny Boursiquot:** One thing I'll say I'm not in love with with regards to this proposal is the elimination of the dot imports. There are some legitimate use cases... Although I'll caveat that by saying that I don't use dot imports very often. Honestly, I can't remember the last time I used that in production code, to be honest. I do know of some use cases where it does make for more elegant code, more readable code. The code generator in Goa, for example, I think does a very good job of that, of using the dot import to allow you to leverage very nice DSL-like mechanism.

For those that don't know what dot import does - basically, whatever package you're importing with the dot import, it just kind of pretends that whatever you're just importing is in the same package where you're actually using it. So rather than saying goa.api, you can just say -- I mean, if you import the Goa package, you can just say api.whatever. You don't have to say goa.api.whatever. So if you're writing DSLs, it can be a nice tool to have in your tool belt. But these are very specific circumstances, I think.

But even then, something like this would probably break a lot of things, so because of that -- I can see the value of it, but because of that, we'd probably have to have some tools, or do some rewriting, and things like that, to prevent a widespread breakage of things... But yeah, I think I'm not too hot on this one.

**Roberto Clapis:** \[23:58\] I think that the first part, of adding explicit naming, will probably work. I don't see why this wouldn't be accepted. When I said that dot import - I see this as a harder one, especially because in tests I've seen a lot of packages that offer sort of a DSL for tests... And you just dot import and you can just assert or do stuff. I personally don't like it; I advise against it. But I can see why people would like to do this.

**Mat Ryer:** But these aren't mutually exclusive, or rather they don't have to go together. You could still have dot imports, but then also force the explicit symbol import.

**Johnny Boursiquot:** Yeah, this is kind of a two-in-one.

**Mat Ryer:** Yeah. Well, this one has 63 thumbs up and one thumb down. Just a single, solitary thumb down... So it does have some love.

**Johnny Boursiquot:** Some support.

**Mat Ryer:** Yeah. And also, there's a wider point here, which comes up a lot when we talk about Go. Daniel, you actually make this point in that issue; you made it years ago, like some kind of time traveler, or something... You said Go is read much more often than it's written. So we ought to optimize for it being read.

**Daniel Martí:** Yeah. And I actually think there's also -- we've talked a lot about the human element here, but I also think we should remember the tooling element, the machine element. Go is pretty well optimized to being fast to compile, but I feel like in these two cases, tools get slower, because they can take shortcuts. If names are predictable, you can predict where they're gonna be. Something like *Go to definition* could be a very simple Go program; you would just read a Go file, look at a name, "Where is the name defined?" You just look at your function, your imports, and that's pretty much it. Then you just follow the graph. But the moment you add dot imports, that kind of goes out the window. You have to do a linear search across your dependencies.

I think in practice this might not affect most people, because most people don't use dot imports as such, but I feel like the mantra of Go being simple and being fast to use and compile would fit this.

**Mat Ryer:** Cool. That's a really interesting one. Tell us what you think. Tweet to us at @gotimefm and let us know your thoughts. I've thought of one, just off the top of my head; let's see what you think of this... Switch true and false around, to really separate the wheat from the chaff. Think about what.

**Johnny Boursiquot:** Mat, Mat, Mat...

**Mat Ryer:** No?

**Johnny Boursiquot:** Nope.

**Mat Ryer:** Shall I open it though, and see what happens? \[laughter\]

**Johnny Boursiquot:** You could.

**Break:** \[26:51\]

**Mat Ryer:** Right, Daniel. What's the next one we should have a look at?

**Daniel Martí:** So I was thinking we could open the Pandora's box that is type-inferred composite literals. This is issue number 12854.

This is a pretty large change to the language, and it's essentially saying a composite literal is essentially an expression with the curly braces. So you can think of struct literals, slice literals and such. And the proposal is essentially if the compiler can statically know what type that expression would be, for example because you're assigning it to a struct variable, or you're passing it as a parameter that's a map, then it can statically know what the type of that composite literal is, and then you don't have to spell out the type.

\[28:28\] I think a lot of people support this idea, because Go can be quite verbose when you use a lot of these types... And oftentimes, the type is repeated multiple times in the same function or in the same local code... But at the same time, I feel like it might hurt readability, especially in terms of what we talked about earlier, about Go being easy to read at a local level.

**Mat Ryer:** Yes, that's interesting. There are examples of type inference in the language, and they do work quite nicely. Do you find that they affect readability much, the current examples that we have?

**Daniel Martí:** I don't think so, because the current examples we have, the type is always spelled somewhere local. You cannot create a new composite literal without having the name of that type somewhere in your local scope. I think it's impossible. With this new proposal it would be possible. You might call an API that returns a type, and then you assign a new literal to that type, but you're not spelling out what that type is.

**Roberto Clapis:** Nowadays this mostly happens for collections. You can say a slice of this type. And of course, you can just use the literal without the type again, because... I mean, you just said what this is. If this were to change, I would be in favor of this proposal with a little twist to it, which is you can type that code without the type, and then go fmt can just add the type for you. So you write fast, and then go fmt kicks in and makes everyone able to read it fast. So you don't compromise. You get readability and writeability.

**Mat Ryer:** That is very interesting, Roberto.

**Johnny Boursiquot:** Some are - to speak out for those that think omitting the type makes for more readable code... Right? I like the proposal, I'll start by saying that. I think it would make for less verbosity. But there are those who value that verbosity as part of what makes Go code readable. So it's really one of those things where you have some folks that are on either side, and they both make valid arguments.

I like the go fmt compromise, if you will, that you can type it quickly... But if your sensibilities are offended by seeing it and reading it, that's not gonna help. Well, perhaps the best judge of readability might be the beginners to the language, how much that makes sense when you read that; do you understand what's going on? And the second-best, I would say, maintainers of code that's been around for a while. If you haven't looked at this code for a bit and you pull it up and you open it, does having that type definition explicit - does that make the code more readable, more glanceable to you than not having it?

So I think this is one of those where I think we'd have to do a little bit of a research and really figure out where everybody kind of leans.

**Mat Ryer:** Yeah. Bill Kennedy makes a good point, and he talks about this a lot in our Gophers Slack. He says "This is about making things easy to do, and not easy to understand. And actually, making them easy to understand ought to be the priority." So yeah, very interesting.

I don't know how I feel about this one. There are some cases where I feel like it would still be clear enough without specifying the types... But I could see for sure other cases where that gets complicated, too.

**Daniel Martí:** \[32:01\] I agree with Johnny saying that readability and maintainability is also a factor here, and not just typing... And I think Roberto's point is mostly solved by editors and go please these days... So completion; if you're too lazy to type it out, just rely on your editor to do it for you. But I think my stance in all this is that I like the overall idea to repeat types less if it's obvious enough from the local context, but I also think this proposal as is is too broad. If we have catch-all type inference for composite literals, it's gonna be abused and it is gonna hurt maintainability. So I would like to see proposals which are more narrowly-scoped to cases where pretty much everybody agrees the code is better. I actually have a couple of follow-up proposals which are newer, which are a little bit narrowly-scoped.

**Mat Ryer:** Yeah, okay. Let's dig into those ones then.

**Daniel Martí:** So the next one is -- so this first one that we've talked about is from 2015. The next one is proposal number 35304, and it's from Roger Peppe, again, from 2019. It's essentially anonymous struct literals. So it's not about all composite literals, it's only about structs.

The basic idea is that you can use an expression which is a struct, but you don't say what type, and then the compiler essentially figures out what struct that fits into... But it's only for structs.

**Mat Ryer:** Yes. So this one definitely looks strange in the examples... Because in the proposal, Roger has written an underscore in place of where the struct definition would previously have been. And underscores in Go to me mean like "Ignore this" or "Dismiss this." So that to me didn't stand out -- I didn't quite understand that just by glancing at it. But the principle is an interesting one, because - yeah, often you are just repeating yourself. I do it quite a lot in test code, but in other code too, where I'll just in-line have a struct that I declare, basically, and then immediately I will instantiate that, create one of them and set the fields. And I do it all in one go. And it's very repetitive... It's essentially a list of the fields with their types, and then a list of the field names with their values. Would it help with that situation? It probably wouldn't, would it because you have to declare the structs still somewhere, don't you?

**Johnny Boursiquot:** Part of me feels like grabbing a chunk of the previous proposal and merging it with this one. What I don't like about this one is the use of the blank identifier; that's kind of rubbing me the wrong way a little bit. I associate that with what you said, Mat, with whatever it is that I'm assigning to this thing; I don't care about it, so I discard it, GC it, whatever.

Here I think we could get a mix of this and the previous proposal by omitting the blank identifier and basically relying on the type inference to determine that "Okay, I'm assigning this literal value. You already know what the type is based on my var declaration", or something. Obviously, it wouldn't work for the bucktooth operator, but you could use it if you do var, something of a given type, and then you provide the literal value... Then without the blank identifier I could see that working.

**Daniel Martí:** I would like to clarify one thing, which is that this proposal is not strictly a subset of the previous proposal. So I lied a little bit. My bad. There's one case that the previous proposal does not cover, which is what if you just want to create a struct expression, but it's not a named type that's been defined before. So you're creating an anonymous struct; a variable of anonymous struct type. So you could do var, something, some name, and then struct, define the struct in-line (anonymous struct type), and then the value.

**Johnny Boursiquot:** Gotcha.

**Daniel Martí:** \[36:00\] So with the previous proposal, because it's inferring what the type will be, there's nothing to infer to if you use foo:= and then underscore with this new syntax, because there's nothing to infer to. But with this new proposal, it would essentially be like "It's not it's an anonymous struct type. I'm not trying to fit it into any other type, so it's just an anonymous type, and it would just work."

**Mat Ryer:** Hm... So it figures out what the struct shape and structure should be from the values that you set... Is that right?

**Daniel Martí:** Yeah, so if you're using that expression in the context where you're assigning it to something that has an explicit value, then the compiler would figure out "Is the shape the same? And if so, it would just work?" If the shape is different, it would fail. And if there's no specific type that you're assigning to, it would just use an anonymous struct type, just as if you had spelled it out, duplicating all the field names, and so on.

**Mat Ryer:** Oh, so that I quite like... Because there's no other way... I mean, we're gonna get into the world of number types, like is this a float or an int, and things like this, which you have with constants anyway. You have to, in some sense, be explicit. If you want it to be a floating point, you have to put a decimal point in there. Even if it's .0, at least you're just giving a clue that that's the type. I quite like that, yeah.

**Johnny Boursiquot:** I have yet to dive deeper into the comments, but is there a performance penalty there? Because the compiler would have to figure out "Do you have a match with whatever it is you're trying to assign the value to?"

**Roberto Clapis:** Doesn't it already do this? Currently, as of today, you can take any struct type and assign it any other struct type, just with a cast. And it needs to be able to figure out if the field is a subset of the other field... So I think this is already there.

**Daniel Martí:** Yeah, this would all be statically, so it's not at runtime.

**Johnny Boursiquot:** Right.

**Mat Ryer:** Yeah, I wonder if you could just drop that underscore and just use the curly braces. It's almost like JavaScript has just JSON object notation in the language... But it's a struct, it's an anonymous struct. It doesn't have a type almost, or its type is created magically... Would that work? That's not reserved for anything else, is it? A block, I guess...?

**Roberto Clapis:** It's not reserved, but what I love about Go is that it's consistent. If you have *var token =* there must be two tokens afterwards. And it's a type and a literal, if you're doing a literal expression. And I like when I read code that I can just glance over it, and I know the order in which things come in.

If you drop one token, it's just feeling like unbalanced or clunky, so it would require more attention... Especially if you do open brace and you go on a new line, which this proposal is using already... If you glance over the code, that would feel like an if, or a statement or something, because it doesn't have that extra token. And I like to be able to glance over the code and tokenize it.

**Johnny Boursiquot:** It's like an in-line scope block, or something.

**Roberto Clapis:** Yeah.

**Johnny Boursiquot:** Yeah, something came to mind, but quickly left, so I'll defer it... \[laughs\] It wasn't flattering. \[laughter\]

**Daniel Martí:** I was actually gonna follow up with what Roberto said, which is that if we drop the underscore, we change the Go syntax... Because right now, when you parse a composite literal, you parse type, open curly brace, the elements, close curly brace. And if you drop the type expression, be it the underscore, be it some name, be it whatever you want, then every single program out there that needs to parse Go code has to be updated, and that has a pretty high cost.

**Johnny Boursiquot:** Maybe you can use Roberto's fix - just throw some go fmt at it.

**Daniel Martí:** You could, you could.

**Johnny Boursiquot:** Go have go fmt put it in there. \[laughs\]

**Mat Ryer:** While we're it, why don't we just have go fmt write all the code for us?

**Johnny Boursiquot:** I mean, yeah. Soon, it should. Aren't we working on that?

**Mat Ryer:** \[40:05\] Yeah, someone must be.

**Johnny Boursiquot:** Someone must be...

**Mat Ryer:** Sorry, Daniel...

**Roberto Clapis:** There is this joke that I've seen a lot in other communities, that is in Go, what the language can't do, the editors are supposed to replace. I've seen a lot of people saying that generating code when generics are not there, or using other tools to fill in where the language misses something... And that is always for writing. All of the things that I've seen was always about writing, never about reading. So honestly -- I mean, I wouldn't go as far as something "Okay, go fmt, write my code", because that would be writing my job away.

**Johnny Boursiquot:** Mat would.

**Roberto Clapis:** \[laughs\]

**Mat Ryer:** You're telling me you wouldn't pay for that, if I could build it...

**Roberto Clapis:** You know, I like coding...

**Johnny Boursiquot:** Oh, I never said that... \[laughter\]

**Mat Ryer:** That's what I'm doing tomorrow. That's the rest of my week.

**Roberto Clapis:** Yeah, so I like to be able to quickly read code, and quickly write. And if tools have to kick in every other line... I mean, Java is successful and it's exactly the same, so why not.

**Daniel Martí:** So we have one more proposal in this little group of eliding types. Maybe we can quickly mention that one. It's proposal number 21496, and it's called "Permit eliding the type of struct fields in nested composite literals." It's sort of a mix of the previous two, because it's only for struct fields... And it's only within nested composite literals. But it's still elision, it's not about anonymous types.

**Johnny Boursiquot:** Right. I like those ones where the compiler can figure out -- like, "Put in the type for me. You already know what it is, what it's supposed to be. Just put it in for me", kind of thing. But again, on the other side of that, you pay that readability cost.

**Daniel Martí:** I think this proposal might be the smallest in terms of effect. I would even argue that this proposal is not gonna affect readability, because it's only within nested types. So if you're in a nested type, then further up the chain you must have mentioned that type already.

**Johnny Boursiquot:** Yeah, I like this.

**Mat Ryer:** Yeah, I was just reading it...

**Daniel Martí:** At the same time, I'm looking at the examples, and they don't quite look like Go to me, so I'm not sure how to feel about it.

**Mat Ryer:** Yeah, that's an interesting instinct. I think it's actually quite important. I just sat here reading this, which I realized doesn't make for great podcast content... But yeah, I don't know... Roberto, what do you think about this one?

**Roberto Clapis:** This one out of all of them is probably the one that I like the least... Because it's such an uncommon instance. I would have used this probably five times in the past five years. Changing a language is a long process. It requires a lot of work and a lot of discussion... This small change would address part of the issue, not all of it. And if you use a modern IDE - well, I use Vim, so not even a modern one - and you're inside a struct, and you're about to type a field, and you're just...

**Johnny Boursiquot:** Careful... \[laughs\]

**Roberto Clapis:** *tab-complete-it* is going to be there. So this one would save me two keystrokes every five years... So I'm not a big fan.

**Johnny Boursiquot:** \[laughs\]

**Daniel Martí:** I think the reason I like this proposal is because it's a very small step we could take in the direction of more type elision, and we could experiment with that. And if people like it, we could take other small steps. Maybe we also do it for maps, or maybe we also do it for other very specific edge cases where we're sure that readability is not harmed.

**Mat Ryer:** Yeah, we did talk about this in part one of this, which is still available if you want to go into your little podcast app and find part one of this... And you can hear about that. We talked about doing this kind of thing for maps.

\[44:01\] I think the general point of "What does it do to readability?" has to be the main consideration, really. It's not naturally, I think, what you immediately go to... Because when we are doing the work, we're typing it, and that's kind of where all our conscious thought goes. But yeah, for sure, the glanceability, the readability - these properties are being considered, which is great really, to see that people do think about this.

**Roberto Clapis:** Right. And if this proposal is like Daniel said, which is we start taking these off, and then we look around and we see what else we can address, and maybe we can start eliding some types here and there, I would be in favor of that. But this proposal, as it is, just this, is for me not enough. But if we start looking around and see -- again, maybe in these other contexts it is very clear for the reader what the type is, and we can just remove it there too, why not.

I mean, this is how we started to change the language... I think one of the first changes to the language in a long time was numeric literals allowed underscores, or something like that... It was a small change, but it was a change; this was the first step towards moving forward.

**Johnny Boursiquot:** That was a great change, by the way. I found myself using that very quickly.

**Roberto Clapis:** Yeah, I agree.

**Mat Ryer:** What is it, for people unfamiliar?

**Roberto Clapis:** Basically, if you have very long numeric constants that have too many digits, you can just add underscores in between digits at any point. That is ignored during compilation. But if you have a billion, it just looks nice, because it's a one, followed by three triplets of zeros, separated by underscore.

**Mat Ryer:** Yeah, it's sort of an improvement of readability, isn't it? I've had another thought that I'd like to float. This is a serious one now. It's not gonna be silly. You know how in Ruby when you're accessing arrays, you can use negative numbers to come at it from the other side. So minus one essentially is the last item, and then minus two is the penultimate item, minus three is third from the end... That sometimes is very useful. Often, you do want to get the last item, and at the moment you have to take the length of it; you have to explicitly do that. How do you feel about having those Ruby-esque negative numbers in index accesses?

**Roberto Clapis:** I don't like it.

**Mat Ryer:** Why not, Roberto...?

**Roberto Clapis:** Because most of the time that I got an off by one, I noticed because it panicked. Most of the bugs that I saw in logs or stuff like that was because of crashes, because of off by ones, and I found out that the logic was flawed in other ways thanks to this... I would be in favor of having a built-in function called "last", that takes a slice or array and returns the last item, and the last index, if you read to others, for example. Because I've never needed the penultimate element, but the last one is frequent, as you say.

So I would prefer something like that, rather than having just weird -1 access... Unless maybe if it is a numeric literal that you write in the source code, which is a -1. In that case it's clear you're not iterating or having an off by one; you mean that.

**Mat Ryer:** Right. So you couldn't use it as a variable and count backwards through them. Because that's the other thing in Ruby you could do - you could loop backwards. That's silly, really... So yeah, actually a literal - so it has to be spelled out.

**Roberto Clapis:** Right.

**Mat Ryer:** I'll take that compromise if it would convince you. But it's an interesting point, this wrap-around. Johnny, we're not doing this one, are we? What's the matter?

**Johnny Boursiquot:** Next thing you'll probably have loaded up - it's like, you know, you want method missing from \[unintelligible 00:47:48.27\] Magical things happen in method missing.

**Roberto Clapis:** \[48:07\] Yeah, for those who don't know - in Ruby you can define something that runs in case someone is trying to use something that doesn't exist. Basically, it allows you to build a very simple, interactive shell in Ruby by just defining that method missing... And that is one of the best and worst features of Ruby, I would say.

**Mat Ryer:** Yeah, yeah... It's kind of amazing. Literally, it's like having a struct with methods, and another method called "method missing" that gets called if you call anything on that. And by the way, that's not what I was advocating for. Johnny as a joke said that that's what I was advocating for. \[laughter\] That for sure is too magic. Imagine - and this happened to me - you just do a typo and it's just not an error. It's just like "Sure. I'll keep going. No probs." \[laughter\]

**Johnny Boursiquot:** No problem here.

**Mat Ryer:** Probs. I wanted to say probs. Like... Yeah. That's not quite the same as the minus one thing... But I don't know. Daniel, you might have to do the casting.

**Johnny Boursiquot:** Yeah, break the tie.

**Mat Ryer:** There's no tie. I'm absolutely defeated.

**Johnny Boursiquot:** Daniel is like "What is wrong with these people?" \[laughter\]

**Mat Ryer:** What do you reckon?

**Daniel Martí:** I was actually reading an old proposal again, because this idea has been proposed before.

**Mat Ryer:** It's a great idea.

**Roberto Clapis:** The method missing?

**Mat Ryer:** No... \[laughter\] Not method missing. The negative index thing.

**Daniel Martí:** Yes, the negative index one. So it's issue number 33359, if anybody wants to look into it. It's rejected, which is why we didn't consider it... But there were some good points in that thread. Essentially, the main argument against a proposal was what Roberto said, which is what if you've got an index variable and it happens to go negative, and then you wouldn't panic; you would do something weird. And then people said "What about doing len minus something, instead of having the len of the slice minus something?" And that seemed to be the most reasonable option, but I don't think it gained enough traction to keep the proposal open.

**Mat Ryer:** I see. So inside the squared brackets you'd say len minus one, and you don't have to say len, brackets, and then the variable again. It's kind of like inferring what you mean... Although sometimes you might mean a different length of a thing, I guess... And we're just back to "Being explicit is better than magic", as usual. We can't have nice things in Go because they're too magic. Alright, is that a definite No then, everyone?

**Roberto Clapis:** In that discussion I saw that people rejected the literal thing. Someone proposed the same idea I had, which is if it is a literal, it's fine; if it is not, then it's not.

**Mat Ryer:** And what was the rejection of that based on?

**Roberto Clapis:** "It doesn't click with me." \[laughter\] I'm literally reading out of these--

**Johnny Boursiquot:** That's subjective...

**Roberto Clapis:** People say "It doesn't click with me." Okay, fine...

**Mat Ryer:** Yeah, fair enough.

**Break:** \[51:02\]

**Johnny Boursiquot:** That's the thing with all these proposals - we don't have an objective way of measuring readability. We all have hunches... And ideally, the more experienced you are as a developer, the better those hunches get. But it's hard -- like, when I sit down to pair with a more junior developer, every time I feel like I have to rely on "Well, because it's more readable." Then in the back of my head I'm thinking "Is there a better way...?" How do I explain this? How do I transfer this bit of intuition, or wisdom. Is there a better way to actually explain this? Simply saying it's more readable, or less readable - those are all what we think, those are ideas. We don't have a way of measuring that, so... Yeah.

**Roberto Clapis:** Yeah, and it also depends on where you come from. The other day I was doing a readability review on some code that was submitted, and the person, which was completely new to go, called every receiver for every method *this* and I said "Well, you should give it a more meaningful name, like s, because the type started with s..." \[laughter\] And he was like "How is that more readable? Please explain to me. What are you trying to convey here?" I was like, "Okay, so... Where do I start?" It's not that easy, because for me, calling that type, which was called something like "sorted something", calling it "sr", which was that something, would have been more meaningful than calling it just "these". Because *this* requires me to go back to the function definition and see what it is, because maybe I lost context. But it was a long discussion, let's put it this way. So readability really changes depending on your background and your expectations.

**Mat Ryer:** Yeah, I think there's a good lesson in that, because we can get a little bit dogmatic about things in Go, and we can be like "This is the way to do it", and we feel very strongly about that. And I'm a little bit guilty of this, because I've done talks at conferences - they're available on YouTube - where I'll show idiomatic things, and different idioms and patterns that are good... Although I always try and make the point that, you know, it should be taken in the right kind of spirit. And I think we should be a little bit more open when we consider these things. We can sometimes be a little bit closed off, like "This is the way to do it" and that's it. We should watch that, because that can be very exclusive if we go down that road.

**Johnny Boursiquot:** One last one...

**Mat Ryer:** \[56:03\] I don't know if we have the time...

**Johnny Boursiquot:** Oh, look at that, we're at that time...

**Mat Ryer:** Yeah, this has been a cracking show...

**Johnny Boursiquot:** Remember, you have to let Jerod know that he has to come back on and play--

**Mat Ryer:** Yeah, and he's either gonna do it or he's not. But if he's doesn't it, I'll just play it live. We'll do it live!

**Johnny Boursiquot:** \[laughs\] Will you just grab your guitar and start going?

**Mat Ryer:** No, I'm not doing it.

**Daniel Martí:** Shall we clap again? \[laughter\]

**Mat Ryer:** Let's get Jerod... He's not like a dog or a horse, where he just responds to claps. He doesn't respond to them, that's the annoying thing. I wish he was more like a horse, in a lot of ways. Okay, well - as I was saying before I was rudely interrupted, it's that time again... It's time for Unpopular Opinions!

**Jingle:** \[56:46\]

**Mat Ryer:** Okay, I'm gonna go first this time... This is my unpopular opinion, and this one hurts me to say, because people have done lovely things for me, and this is now gonna throw it back in their faces. Are you ready...? I think we should stop doing conference swag. It's landfill. I mean, give people more tickets, or something; or licenses for software, or something... No more conference swag.

**Roberto Clapis:** What about T-shirts?

**Mat Ryer:** T-shirts are okay, because they're useful. I'm actually wearing one now.

**Roberto Clapis:** Yeah, exactly. I was about to go there... \[laughter\]

**Johnny Boursiquot:** Except T-shirts.

**Mat Ryer:** Yeah, T-shirts are great. That's true. I mean, the other stuff... It's lovely, and people go to such great lengths, and a lot of effort goes into it. This is why I was very reluctant to say this... But yeah, it's a lot of garbage.

**Johnny Boursiquot:** What about the little plushy gophers, and stuff?

**Mat Ryer:** I mean, those little things... We don't know if they're gonna at some point come to life and try and get us.

**Johnny Boursiquot:** Do you see this? He's looking at us...

**Mat Ryer:** Exactly.

**Roberto Clapis:** Right. And Daniel was holding up one...

**Johnny Boursiquot:** Daniel's was creeping up the screen... \[laughter\] There you go.

**Roberto Clapis:** But yeah, it's like - I have this block from GopherCon UK, and I love this. This kind of stuff is fine. But stuff like a squeezeball - I'm never gonna use that. Or fridge magnets. My fridge is in a wooden thing. I can't use this.

**Mat Ryer:** You've got a wooden fridge?

**Roberto Clapis:** No, it's inside something to make it look like a cupboard.

**Mat Ryer:** Oh, I thought you said a wooden fridge, like from the olden days...

**Roberto Clapis:** You know, I put wood in it.

**Mat Ryer:** ...and you're like, "These magnets are no good." You have to hammer them in.

**Roberto Clapis:** No, it's just like -- I have to put wood in it. It has to burn in order to become useful. \[laughter\] \[unintelligible 00:58:54.16\]

**Mat Ryer:** Oh, that's classic. So retro of you, Roberto.

**Roberto Clapis:** Right. Steampunk.

**Mat Ryer:** Yeah, very. I don't know... What do you think? Is it too harsh?

**Johnny Boursiquot:** What you're saying is you want more useful swag.

**Mat Ryer:** Okay. Good point. Actually, yeah. I don't know. People love it as well, so I really do feel like a spoilsport a little bit. Daniel, what do you reckon? Do you like conference swag, mate?

**Daniel Martí:** I used to be big into free T-shirts, and swag T-shirts, and T-shirts that would say Go, or whatever. These days, not really anymore. So I tend to agree that there's too much swag.

**Mat Ryer:** You're too cool now, aren't you?

**Daniel Martí:** I feel like a little bit of swag would be fine, but... Yeah.

**Mat Ryer:** You're too cool now to wear Go T-shirts...? You just wear white.

**Daniel Martí:** Yeah, now I just wear literally white T-shirts.

**Mat Ryer:** Yeah. So minimalist. \[laughs\]

**Johnny Boursiquot:** You are an undercover minimalist, my friend... Current background notwithstanding. \[laughter\]

**Mat Ryer:** Yeah. No, I like to be able to see all Daniel's clothes. It's a bonus for everyone watching live on YouTube. You don't get to see those clothes if you're listening on the podcast.

**Johnny Boursiquot:** \[01:00:05.23\] That's true. You need more color though in your wardrobe, I'd say, Daniel...

**Mat Ryer:** Whoa... Brutal. \[laughter\] You could use some more Go T-shirts, Daniel, actually...

**Johnny Boursiquot:** Yeah, Daniel. Have some more variety in your T-shirts.

**Daniel Martí:** I'll wear a really ugly free T-shirt next time, I promise. \[laughter\]

**Mat Ryer:** Yeah. What's the best swag you've ever had? One time I was at a conference and they gave out hand sanitizer.

**Roberto Clapis:** Now you're talking...!

**Johnny Boursiquot:** Was this like immediately before COVID?

**Mat Ryer:** No, it wasn't, actually. Especially now, it would be great, wouldn't it?

**Roberto Clapis:** They were very forward-looking. That was almost an oracle.

**Mat Ryer:** Germs have been around for ages, Roberto.

**Roberto Clapis:** No, I don't know of any germs before 2020. Sorry.

**Mat Ryer:** Yeah. \[laughs\]

**Daniel Martí:** Once at a conference they were giving out rechargeable batteries to charge your phone with, because supposedly you were going around all day with your phone... So I was thinking, "Wait, now I need to remember to charge my second battery, so I can charge my first battery." That's kind of... \[laughter\]

**Mat Ryer:** Can you charge it from your phone? Can you do it that way? If it runs out, you could just charge it with your phone?

**Daniel Martí:** No, this was before the USB-C days, so it was like micro-USB that would only one way.

**Johnny Boursiquot:** I have an unpopular opinion.

**Mat Ryer:** What is it, Johnny?

**Johnny Boursiquot:** Do you wanna know what it is?

**Mat Ryer:** Yes, please.

**Johnny Boursiquot:** You may not like it. Do you really wanna know what it is?

**Mat Ryer:** Is it about British people? \[laughter\]

**Roberto Clapis:** Now it is, now it is...!

**Johnny Boursiquot:** No, seriously - I do think that we in the Go community can suffer from a little bit of groupthink. The whole thing about idiomatic Go - what does it mean to write idiomatic Go; again, to go back to this stuff that I touched on earlier, when I'm pairing with somebody... It was stuff that Roberto mentioned earlier. Some things you can't really put a number or be specific about it. You kind of have to go "Well, do it this way because that's kind of the way we do it."

Now, there's some wisdom that can be gotten from the crowd when a bunch of people try something, and they all discuss and exchange ideas and realize "Okay, you're doing it this way and more often than not it will yield some benefits. Do it that way and more often than not it will yield some troublesome things." There is value in that... But I think sometimes we can try so hard to go with the pack that we stop thinking for ourselves.

I've come across folks that are trying to learn Go, that are beating themselves up. They have a working solution, but they're beating themselves up because their code doesn't quite look like what a Go developer's code is supposed to look like. They're like "Oh, I have a working solution." Yeah, it might be a little bit of Guby, it might be a little bit of GAVA, a little bit of Gython... \[laughter\] Yeah, we all go through these phases.

**Mat Ryer:** GavaScript... Gobjective-C...

**Johnny Boursiquot:** Oh, no...! \[laughter\] All that, right? So we kind of have to --

**Mat Ryer:** Gust...

**Roberto Clapis:** You know, Johnny, I agree... And actually, my unpopular opinion was somewhat related to this. I don't know how unpopular this is now... Basically, my opinion is the standard library defines a lot of interfaces, and everytime someone comes up with an improvement, people say "Yeah, but we don't know who implements them, so we cannot change them." We are kind of stuck with some of those interfaces.

\[01:03:48.00\] For example, the HTTP handler interface allows you to write a slice of bytes... I work in security, and that is a nightmare. I've tried to secure that; there is no way to secure that. And when I try to propose to write something that would change the interface to something more secure, they would look the same. Like, you still write something to it, and it looks as close as possible to the standard library, but in a secure way. I got so much resistance and friction and rejections...

I think if there is a good reason to wrap or hide the standard interface with something of a higher level, why not. There are so many frameworks out there that are not used because people say "Yeah, but I don't want to use these because it's not using the standard interface." Maybe it makes your code much easier to read... Why not go for that? So that is my unpopular opinion.

**Mat Ryer:** Well, remember, we test these by tweeting them out from @GoTimeFM. We put a poll on it and we ask people, so we find out. We do that science. And that is science, okay? And we find out if they're unpopular or not. So we will test these ones.

Yeah, Johnny, on your unpopular opinion - I completely agree. We do always have to be more understanding and accepting and flexible, for sure. But you know, some patterns, even if they're just memes really, they're just around because they were ideas that enough people liked and enough people now say that that's how we do it - there is an advantage in having code that all kind of looks very similar.

When you jump into a repo that you didn't write, and you read the code and it feels like you could have written that, that is a massive shortcut to getting stuck in, or understanding and working with that code.

And the other thing is, there is such thing as good taste, which you can't really measure. It is subjective. But it exists, doesn't it? Doesn't good taste exist? So yeah, I don't know... Does it?

**Roberto Clapis:** Does it? \[laughter\]

**Johnny Boursiquot:** You were looking at Daniel when you said that... Are you throwing some shade? \[laughs\]

**Mat Ryer:** I like his clothes... No, I like Daniel's clothes. Actually, to be fair to him, look at those clothes. They are very cool.

**Johnny Boursiquot:** So much judgment on this podcast. My goodness. \[laughter\]

**Roberto Clapis:** How did we end up here? What happened?

**Mat Ryer:** It's the internet, ain't it? It's the internet. Eventually, everything turns bad on the internet...

**Johnny Boursiquot:** It evolves...

**Mat Ryer:** Yeah. And Johnny, you said something earlier and forgot, and said you were gonna defer it. We're about to close the show, so now's the time where the defers have to happen. Do you wanna do it?

**Johnny Boursiquot:** No... Probably something like "go fmt all the things." Like Roberto says, "go fmt fixes everything."

**Mat Ryer:** I'd love that on a swag T-shirt. go fmt all the things.

**Johnny Boursiquot:** That's right. \[laughs\]

**Mat Ryer:** Well, but we are overtime... That is all the time we have for today. Thank you so much for joining us - it's only Johnny Boursiquot, Roberto Clapis, and Daniel Martí. Thank you very much. I will see you next time. Bye!

**Outro**: \[01:07:08.01\]

**Johnny Boursiquot:** Wait, so did we skip Daniel's unpopular opinion? Something tells me we've skipped that.

**Mat Ryer:** Did we, Daniel?

**Daniel Martí:** Yeah, but it's fine. I can just say it the next time.

**Mat Ryer:** You'll have to come back, mate; we've just run out of time. We were way over.

**Johnny Boursiquot:** You have to come back, yeah. Come back just to deliver your unpopular opinion. It better be a good one. We're gonna have a whole show just for that. \[laughs\]

**Mat Ryer:** \[1:09:03\] Yeah. We could do that.

**Jerod Santo:** I think we should address why Mat would prefer to replace me with a horse.

**Mat Ryer:** Oh, you were listening... \[laughter\] Not replace you with one, mate...

**Jerod Santo:** Oh... Augment? \[laughter\]

**Mat Ryer:** Yeah, like a centaur. More like a centaur, so you can still be programming, but you've got a horse's back...

**Jerod Santo:** \[unintelligible 01:09:08.11\]

**Johnny Boursiquot:** I hope you're not attached to your legs...

**Roberto Clapis:** Someone is writing in the chat -- actually, Bill is writing in the chat, "Daniel doesn't have any unpopular opinions." Wanna prove them wrong?

**Jerod Santo:** Dan, if you wanna share, I'll splice it.

**Johnny Boursiquot:** Yeah, he'll splice it. Do it. Do it.

**Jerod Santo:** Or we'll put it in after the outro. Either way, it'll get in.

**Mat Ryer:** Hang on - if we're splicing, can we have the centaur first?

**Jerod Santo:** No, not for you.

**Mat Ryer:** Can we have the centaur first? I'd love you as a centaur. \[laughter\] 

**Jerod Santo:** I don't splice anything for you, Mat. I'll slice things out, but I won't splice things in. Go ahead, Daniel.

**Daniel Martí:** So my unpopular opinion is gonna be the vast majority of projects, including open source, should use monorepos. For example on GitHub. I see far too many projects that have like a sprinkling of 30 repos on GitHub, and oftentimes it's unnecessary. I feel like everybody should begin with a single repo and think very hard before splitting that up... Especially because -- it does have some advantages, like if you have some component that you think many other people are gonna want, you might wanna consider living with the downsides... But do you really think that many people are gonna use it? I don't think so... At least in general, or at least by default.

**Roberto Clapis:** I agree.

**Mat Ryer:** That one is not unpopular with me.

**Jerod Santo:** No.

**Mat Ryer:** I'm doing a reboot of a project of mine called BitBar... And it's got a website, it's an app, it has a frontend in the app, it has a backend, it has Go packages, it has generation code... That is all gonna be in a monorepo. I completely agree.

**Jerod Santo:** How did you manage to turn this into an advertisement for BitBar?

**Mat Ryer:** Well, it was just an accident. It was just a happy accident. For everyone, BitBar is still available. Yeah, you can put anything in your macOS menu bar--

**Jerod Santo:** Would you like to list any more of its features?

**Mat Ryer:** Yeah... \[laughter\] I don't know what happened, I was just saying you can put the output of any script or executable in your macOS menu bar... And you know, that's all I'm saying...

**Jerod Santo:** "That's all I'm saying..." \[laughs\]

**Johnny Boursiquot:** It just ran away from there...

**Mat Ryer:** \[01:11:11.12\] No, but the thing is - when you have a pull request, often you're changing things across the entire stack (very often). To have that all go in in one go is great; including documentation, it could be frontend, JavaScript changes, and server-side changes at the same time, all in one logical unit. I mean, monorepos for the win! That's my motto.

**Daniel Martí:** It's not even just about Git or repos, it's also what modules -- oftentimes you find projects that use like 30 modules, and you think "This could all be a single module." It might be big, but does it really matter? It's not like I have to link in every single package from the module.

**Roberto Clapis:** Yeah. I'm in favor of monorepo. At work I only use one repo for everything, and that works fine so far, so...

**Mat Ryer:** How long does it take to check out?

**Johnny Boursiquot:** Tooling, though... You need tooling for that to work well.

**Roberto Clapis:** You don't check it out. Not the entire thing.

**Mat Ryer:** Why not?

**Roberto Clapis:** I don't know how many billion lines of code. I don't check it out.

**Jerod Santo:** Well, why stop there? Why don't you just put github.com/therepo, and we'll just all put our code in one monorepo... I mean, if it's better...

**Roberto Clapis:** Git is not very well-fitted for that, I would say.

**Mat Ryer:** Well, it's funny, because there's no such thing as pull requests across multiple repos in GitHub, for example...

**Roberto Clapis:** Right.

**Mat Ryer:** It's not a thing, right?

**Jerod Santo:** Right.

**Roberto Clapis:** So if you want to change your API without breaking users, one solution is to fix your users when you change the API. But you can't, because your users are not able to sync on a single commit with you. So that's a pity...

**Johnny Boursiquot:** Fix your users... There's something there you can do with that.

**Jerod Santo:** You're holding it wrong.

**Johnny Boursiquot:** Fix your users.

**Mat Ryer:** Yeah. It's not Roberto's code that's broken, it's the humans trying to use it that are broken. They're the ones that need fixing. \[laughter\]

**Roberto Clapis:** No, it's different. If you change an API, you should be responsible to fixing all the code that you broke for that change, so you'll think twice before doing that. That's the approach.

**Mat Ryer:** Yeah, I could see that. It's a good unpopular opinion. Again, we'll test it. I don't think it's gonna be very unpopular. Well, it is, actually... Especially, there's a lot of projects that--

**Jerod Santo:** You don't see it much in practice, but I think people will agree with it.

**Daniel Martí:** I think if anybody agrees with it, then they have to fix their splattering of repos...

**Jerod Santo:** Ooh...

**Johnny Boursiquot:** Uuuh...

**Jerod Santo:** So that would have been a more unpopular opinion. You should have said "I think all these people need to fix their repos..." \[laughs\]

**Roberto Clapis:** Upping your stakes...

**Jerod Santo:** Yeah. Now you're getting unpopular.

**Johnny Boursiquot:** Put your effort where your mouth is. Can you imagine if we all had to deliver on the things we promise...? \[laughter\] Anyways.

**Jerod Santo:** Hm... That's why I don't make promises. I'm too much of a failure to promise things.
