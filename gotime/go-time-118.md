**Mat Ryer:** Hello and welcome to Go Time. I'm Mat Ryer. Today we're talking about abstractions and interfaces, and we're obviously gonna deep-dive on Go interfaces, and look at some patterns and things there. Joining me today, it's Mark Bates. Hello, Mark.

**Mark Bates:** Hello, Matthew. How are you doing today?

**Mat Ryer:** Good, thank you. And yourself?

**Mark Bates:** Not bad. It says here on my show notes that I'm supposed to mention BitBar and complement you accordingly.

**Mat Ryer:** Wow, that's very kind of you to say, Mark.

**Mark Bates:** So this is my mention of BitBar...

**Mat Ryer:** Yeah, thank you very much.

**Mark Bates:** ...and I'm complementing you accordingly.

**Mat Ryer:** You've surprised me there, yeah... But I'll talk more about that later, because --

**Mark Bates:** Oh, is that not the sponsorship portion of the show? Is that not where I --

**Mat Ryer:** No, \[unintelligible 00:02:19.09\]

**Mark Bates:** Oh, sorry. Sorry.

**Mat Ryer:** That's Fastly. \[laughter\] We're also joined by Johnny Boursiquot. Hello, Johnny.

**Johnny Boursiquot:** Hello, Matthew. Wait, your first name is Matthew? I didn't know that.

**Mat Ryer:** Yeah, yeah.

**Johnny Boursiquot:** Really?

**Mat Ryer:** Yeah, Mat's the shorter version of it, but it's just one t.

**Mark Bates:** Whow, whow - Mat is short for Matthew?

**Mat Ryer:** Yeah...

**Mark Bates:** I've just been...

**Mat Ryer:** Mind-blown.

**Mark Bates:** Totally. I did not see that coming.

**Mat Ryer:** And John is short for Jonathan. And speaking of which, Jonathan is Jon Calhoun. Hello, Jon.

**Jon Calhoun:** Hey, Mat.

**Mat Ryer:** How's it going?

**Jon Calhoun:** Good.

**Mat Ryer:** Good. We're gonna talk about interfaces and abstractions today, and I thought, since you've done a lot of training material and stuff, it might be cool if you could kick us off, and tell us what is an interface, and what are they for.

**Jon Calhoun:** Yeah. I mean, at its very core, they're just a way of defining behavior that you want. When we talk about code, a lot of times you look at structs and you'll see very concrete things that say what a user is, or all these different things... But whenever you're actually writing code, a lot of times you don't care specifically about the type that you're getting, you don't care if it's a user or if it's an admin, or if it's something else... You just care about some specific behavior that it might have. In Go, this is typically represented with methods of some sort.

**Mat Ryer:** Yeah, so an interface is a type that just lists out methods, and then any of the type that happens to have those same methods can be used wherever that interface is requested.

**Jon Calhoun:** Yup.

**Mark Bates:** \[00:03:51.19\] The example I always use when I'm doing training is like an entertainer interface. So if I'm starting a club, some sort of an entertainment venue, if I use a concrete type, if I say "I want to use this concrete type; the concrete type is Beatle. Anybody who's a Beatle can play at my club." Well, there's only two people in the whole world who can play.

Admittedly, if I got one of those two, I could easily pack the house. The other one would be tending bar. But that's concrete behavior. I can only fill it two nights of the year, possibly. If I accept an interface, if I say "Anybody who's an entertainer, anybody who can play something, whether it be a guitar or a flute, or can read poetry, or an improv troop", they can all entertain; they all have this play method on them, just like a Beatle would. Now I could have Paul McCartney come play, I can have the flutist come play, I can have that dance group come and perform, because they all implement that. They're not concrete anymore. To me, that's always a clear analogy, but... Maybe not.

**Jon Calhoun:** See, I like that, because it's a good way of showing that you can also do interfaces that are like a long-running process. Anything that can play and that might block for a half hour... You know, everybody sits down and listens to an entertainer play. Or you can have behaviors like if you're dealing with packages in the post office, all you really care about is "Give me the dimensions." You don't typically care what specifically in the box. You might have something like "Is this hazardous?", a couple things like that. But once you've checked those things off -- and those are sort of more behaviors that just give you some quick data back and they don't necessarily block, but interfaces can cover everything on that broad spectrum of "A server that can start up any type of server" or it could be "Just give me some information."

**Mat Ryer:** Yeah, and I love in Go that you don't have to explicitly say that you're implementing an interface. In a lot of languages, when you create your type you actually list out all the interfaces that you're going to implement, and then the IDE usually helps you enforce that and make sure that you put all the right methods in, so that you satisfy the list. It doesn't work like that in Go. In Go -- it's called structural typing, so it's kind of like duck typing, but because it happens at compile time, it's called structural typing, apparently.

But the duck typing idea is if it looks like a duck and it sounds like a duck, it's a duck. And it's kind of like saying "Yeah, so here is the interface with a few methods, and even if you didn't know about this interface, you can still implement it. Or you can write interfaces to things that already exist, or that other people have written." That turns out to be really quite powerful, as well.

**Mark Bates:** Yeah, the implicit over explicit is really where it shines in terms of the interfaces... And I know a lot of new people coming to go - I've seen from class - really struggle with that bit, understanding that just because they've written a method, they are now implicitly implementing an interface... And they get hung up on "Well, how do I know that I'm implementing that interface?" Like, "Well, it's not important until you need to use it as an interface." That's the beauty of it. And you say "Well, how do I know?" You just look at the docs; what is this thing taking? It's taking a writer. "What's a writer?" A writer is anything that implements the write functions \[unintelligible 00:07:00.08\] That's the beauty of it. You just kind of do it, you don't have to worry about tying into all these other things. It also means - and we can also talk on this later - that you can break a lot of dependencies, too. You can keep dependencies out of the mix by using interfaces in ways too, as well, which is quite nice.

**Johnny Boursiquot:** Along those lines, my favorite use of interfaces is to leverage its ability to provide that sort of independent means of decoupling packages, the dependency between packages. For example, I do a lot of work with the AWS SDKs, and for example when writing a lot of data to (say) DynamoDB, I don't necessarily have to bring in the AWS SDK in the DynamoDB interface or implementation anywhere near my code. I can simply create an interface that I expect my code to use, and basically have that interface be local to my code, not even export it to the rest of the application at all... Have that be local to my code, and maybe in my main package when I'm initializing my application, I can then basically initialize a value that represents a client to my DynamoDB server, and then pass that in.

\[00:08:16.15\] And as long as it satisfies the interface I've defined for my code locally, everything is good. My code didn't have to know anything about the fact that it's even a DynamoDB implementation at all. It can be anything that actually implements that interface. So that allows you to create that separation, that decoupling, because of that implicit satisfaction of those methods. Then it really allows you to keep your code separate and not have to depend on any sort of actionalities at all. That's my favorite part of using interfaces.

**Jon Calhoun:** I'm glad you brought that up, because like Mark was saying, a lot of people got hung up on this fact that "How do I know if I'm implementing an interface?" and I think it's a weird paradigm to get used to. You kind of lift that responsibility off your shoulders, and it's the person who's using the type that actually has to care about "Is this going to be implementing an interface?" and then they define the interface.

Like you were saying, Johnny, your code that needs something, that interacts with a database of some sort - it defines the interface and it doesn't even necessarily have to export it to the rest of the code... And it's weird to get used to that when you come from another language like Java or something, where you're explicitly saying "Here are all the interfaces I'm implementing", and that's very different from the way it is in Go. In Go you just write your code and then if somebody wants it to be an interface, it's their job to define the interface and make sure that it's the right one.

**Mark Bates:** Yeah, a lot of -- especially, again, new developers, don't realize that you can create non-exported interfaces inside of a function or a method, to check right there. You don't have to export them, you don't have to have tons of interfaces. You can say "I'm looking for one very specific thing", create an interface in-line right there... And it's amazing. It's so wonderful that you can do stuff like that. Because you can even then turn around and create your own default implementation of that interface using functions and types to have a back-up in case the thing you're looking for doesn't exist, or is nil, or whatever. It's such a wonderful way of working and asking for and getting more and more enhanced functionality.

**Johnny Boursiquot:** Along those lines, I've seen way too many times where as I'm writing my code, if I happen to -- I used to create public interfaces all the tie, and then I realized "Okay, first of all, I don't need to." And I came to a point where I'm like, every time I create a public interface, I'm kind of implicitly saying to whoever is gonna use this package, this code, that "Hey, you can actually depends on this, because I've exported it", thereby making it hard for me to actually change that later on if I wanted to.

Like every other type, if you don't need to export something, don't. By keeping it local and private to the package, I'm basically saying "Hey, this is what you should expect to send in, or you can actually read the code, the implementation and see what interface you're expected to satisfy", and that enforces that separation. It removes the temptation to have my interface be in your code.

**Mat Ryer:** It's interesting you bring that up, Johnny, because Eric Fouga on the Slack channel in \#GoTimeFm was actually talking just about that thing. He says that he likes the idea of providing the interface with the implementation, because you get this sort of explicit storytelling, I guess... And he's apparently challenged this before and people have said "You don't need to do it" or "It's not necessary", or something. He asks for a more concrete reason why it is bad to ship the interface and the struct, say, if you've got a package. What are the pros and cons.

**Mark Bates:** I don't think it's wrong, and I don't think that's what Johnny was saying. I think what he was saying, like most code, is start with the least amount exported, and export what you need as you go. And I can tell you from very much so first-hand experience that I'm feeling a lot of pain around a lot of this - exposing too much of your API too early, and exporting too much of it does cause problems. It causes a lot of problems down the line in terms of migrating things, dependencies, things get stuck, and it becomes difficult to work with.

\[00:12:19.12\] If you start by exposing nothing and then expose the things you need as you go, that's really very useful. So yes, there are very much so reasons you should expose interfaces. I don't think anybody would ever say don't. The standard library is littered with them; they are very useful. I think what Johnny is saying and what most people are advocating is "Don't expose the ones that people don't need to know about", the ones that are just useful for you, inside of your package. Only expose the ones that people need to fulfill to work with your package. Maybe I'm misunderstanding the question, but that's the way I was viewing it.

**Mat Ryer:** Yeah, I think that's right. And I think I have a special place in my heart as well for single-method interfaces, for a kind of similar reason like about the whole minimalist mindset of keeping everything as tiny as possible. And doing that even down to the interface level, there's some surprising things that can happen, which only work with single-method interfaces. One example is just being able to use a function type, like the HandlerFunc is the great example of that. For anyone that hasn't seen that code, go and look up the HandlerFunc and Handler types in the HTTP package. It's not very much code, but it's very cool how there's a function type which happens to match the signature of the ServeHTTP method in the handler interface... And it too implements the ServeHTTP method and then just calls itself. So it's this kind of weird inception. It's the weirdest little thing that I think you encounter in Go often.

**Mark Bates:** It is. It's a beautiful \[unintelligible 00:13:55.20\] I know that wasn't an intended thing; it was just a fall-out from the way the type system is designed. For those of you that don't know, in Go you can declare your own types. We do "type foo struct" and that's declaring a new type based off of struct, or based off of interface. We can do it off of ints, we can do it off of slices, we can create new types off of anything, including functions. And when you do that, then you can put methods on that new type, and that method can implement in this case an HTTP handler and then just call itself. I use it all the time; it's a wonderful little thing, especially for those single-method interfaces. Depending on what the other methods are, you can easily mock those out, too.

**Mat Ryer:** Yes.

**Mark Bates:** "Yes..." Thank you, Mat. \[laughter\] That was deep insight into what I just said there, I appreciate that.

**Mat Ryer:** I was contemplating challenging it, but I was just gonna let it go... But actually, it only works with a single-method interface, that trick of doing the function thing... Because there's only one function it can call. Unless it's like a ()Close. Sometimes you get like a no-op ()Close and then you can implement those, actually, and it just doesn't do anything.

**Mark Bates:** Yeah. But on the testing side it's incredibly useful. That's where I use it all the time, it's to implement testing versions of these interfaces.

**Mat Ryer:** Yes, that's another use. If you do have some kind of concrete dependency, like you're gonna send an email, and you're using a package from SendGrid, let's say that they didn't export an interface, so you only have a struct to work with. If you wanna stub that out and test the code that you're writing to make sure it uses that SendGrid API int he way you expect, if that's indeed the kind of test you wanna do, then that can be quite tricky if you forget that you can write the interface after. You can write an interface that just essentially describes the same methods that you're gonna call in the original SendGrid API. You use that type instead in your real code, and then you've got an opportunity to build your own stub version of that, that you can use for testing.

\[00:16:07.00\] Sometimes you can't avoid the situation of having to test those types of dependencies if you wanna unit-test something. And for those cases, that's incredibly useful. So it's really worth remembering that you can write your own interface about something else. It doesn't always have to be the other way around.

**Jon Calhoun:** Another one that's come up with some of that weird stuff is any type that chains (there's method chaining) can be really hard to use an interface for, so you almost have to wrap the whole thing in something else that returns interfaces, and sort of define your interface there. It can get frustrating at times, but it's just kind of the way it is.

**Mark Bates:** Yeah, method chaining is a real drag in that respect.

**Mat Ryer:** Yeah, it's not very Go, actually.

**Mark Bates:** No, it's not.

**Mat Ryer:** And what we're talking about is these fluent APIs where every method call returns the object itself, so that you can add --

**Mark Bates:** Or a clone, or a modified, or a new version of it.

**Mat Ryer:** Yeah, right. The same type, yes...

**Mark Bates:** Yeah.

**Mat Ryer:** ...depending on what it's doing, yeah. I get it. And in some languages, they really work well. But in Go - Go is very strict about types, and in this situation it's very difficult for you to not replace wholesale some of these concepts regardless.

**Mark Bates:** It's funny, I ran into, I think, the very first time I've ever really wanted generics in Go the other day. It was all about interfaces. The problem I had was I have two identical interfaces, and all they had was one method on them that returns a string. that's it, just a plain method, called name, returns a string.

**Mat Ryer:** Both the same --

**Mark Bates:** Both called plugin, they both have a method called name, they both return a string, they're identical, just in different packages. But because they're in different packages, they are now different types, and you cannot use one as the other in, say, a return. Even though they implement the exact same interface, they're not the same type, so therefore they don't work. That was the first time where it's like "Well, the compiler could tell that. That information is there. They are identical, so they do implement each other. They are interchangeable interfaces, so therefore their types really shouldn't matter." That's a case where generics would have solved that problem.

**Mat Ryer:** Yeah, so this was Russ Cox when they did that alias. Do you remember that type "alias"?

**Mark Bates:** Oh, yes. It's still there, you know... It's here \[unintelligible 00:18:38.19\]

**Jon Calhoun:** I mean, I've used it before, I just -- I feel like you're something you're not supposed to be using when you use that alias. That's the hard part with it. I've used it occasionally to experiment with some stuff, and it just feels like I'm doing something naughty, that I'm not supposed to be doing... And I'm like "I probably don't wanna advertise this code now..."

**Mark Bates:** Yeah, it doesn't quite feel right when I use it, too. I'm with you.

**Mat Ryer:** Well, it was a fix, I think... And yeah, it didn't quite do its thing. Now, what's interesting - we're hearing breaking news from the Slack channel. Marwan is actually saying that in 1.14 there could be some changes. "I don't think that changes"-- okay, I'm reading it live as we speak, for some reason... It's like proper live journalism, isn't it? ...no, it's just me reading out Slack. I'm distracted by Slack, even now. \[laughter\]

**Johnny Boursiquot:** The overlapping interfaces, yeah.

**Mark Bates:** That's the overlapping in one struct. I don't think that's the same.

**Mat Ryer:** Yeah. Because you can just do that with structs, can't you? If you've got two structs that have exactly the same fields, you can just cast one to the other and it's a very cheap operation. Is that right? I think that's right.

**Mark Bates:** No, you can cast the type that's based on the other type.

**Mat Ryer:** What do you mean "based on"?

**Jon Calhoun:** I'm pretty sure what Mat's saying is right, I just -- it's one of those things that every time you happen to do it, you're like "Let me go ahead and write this real quick and make sure it works." \[laughter\]

**Mark Bates:** \[00:20:03.11\] Yeah, make sure this works...

**Mat Ryer:** Exactly.

**Mark Bates:** Well, it's like, if you have a type MyInt based on int, you can cast it back and forth between MyInt and int, so I guess you can do that with a struct, too.

**Mat Ryer:** Yes. Exactly. With structs if there's same fields and same structure, essentially, you can do the same. Just the name of it, and then brackets, and then pass the other type in.

**Mark Bates:** Yeah. That's not at all weird Go code... \[laughter\]

**Mat Ryer:** Exactly. And the fact that -- I mean, it just feels so brittle. But I guess if one of the structures changes, you get then a compile error. It's a compile-time error, because the types are no longer compatible. So maybe it's quite reliable, really... But it's surprising to see, because it looks like you're calling a method, actually, and that is quite strange.

**Johnny Boursiquot:** The 1.14 feature that's coming with regards to the overlapping interfaces is that now if you actually have two interface that have the same method, before 1.14 you couldn't do that. Now, as long as they match obviously, you can do that. And obviously, your implementation can only have one -- say you have an open method, or something; your implementation can only have one anyway, so... Basically, the fact that the embedder and the embedded have the same thing kind of makes it mute. So now you're allowed to do that. The compiler won't let you, so that's the new thing.

**Mat Ryer:** Oh... I didn't know you weren't allowed to do that before, actually... Funnily enough. Yeah.

**Johnny Boursiquot:** Yeah, I think I never tried to do that. \[laughter\]

**Mat Ryer:** Yes, certainly I haven't. I didn't know you couldn't do that. I thought it'd be alright. \[laughter\]

**Johnny Boursiquot:** Well, now it is.

**Mark Bates:** It doesn't solve the problem I had, but yes, it is useful that that fix is there.

**Break:** \[00:21:36.09\]

**Jon Calhoun:** I know this is really delayed, but earlier we were talking about single-method interfaces... I think the one thing that I wanna point out is that one of the aspects of them that I really like is just that it makes writing closures and turning them into an interface much easier. Because otherwise, using a closure for an interface would be a nightmare.

**Mat Ryer:** Yeah. I do this a lot with HandlerFunc, again, actually. My handlers, which usually are methods on some server type - when called, they return a function. They return a HandlerFunc, essentially. In that case, the compiler will cast the type for you if it matches, actually, for that function case. So essentially, you get that little closure environment that you were talking about, Jon, where you can do some setup, you can prepare some resources if it's a web request, which it is in this case... And then in the body of the function you return - that's the real handler that gets called every time.

So it's a tiny bit of indirection, but what you get from that is you can have per-handler dependencies just passed in as arguments, you can have the little setup code all in one place, near to where your actual handler is being done (the work of it). And similarly, you can have request and response types also in that space as well. And it keeps them all in one place, out of the way.

So for some projects, that's quite a nice little neat package, a little neat way of designing these services. This is a good time for a commercial break. Please purchase... \[laughter\]

**Mark Bates:** This dead air, brought to you by BitBar. \[laughter\] Bitbar. For all your stroking of Mat's ego needs.

**Jon Calhoun:** We're gonna find out after this that BitBar has not been working with the latest update, or something...

**Mat Ryer:** \[00:23:59.16\] No, it works. It doesn't really need many updates, frankly. It's kind of like done. For anyone that doesn't know, it's a little project which puts the output of any script or program into your Mac menu bar.

**Mark Bates:** And the contents of your password manager into Mat's email. \[laughter\]

**Mat Ryer:** No. \[unintelligible 00:24:21.15\] mistake on my part.

**Mark Bates:** Open developer tools.

**Mat Ryer:** Yeah... Actually, it's a nice example really if we're talking about abstractions, because the key point is the little tool doesn't really do anything; it just calls another program. And then the output of that program is what basically builds the menu bar and the menu that you get when you click it. So it's a kind of perfect example of an abstraction that really worked, because there's hundreds of plugins now for this, and they all do wildly different things, none of them that I could have imagined when I just made Bitbar for the one case that I had it for.

So it's nice. That's the side of interfaces that enables other people. If you do provide an interface or a very simple way for people to integrate and extend what you're doing - if that's easy, then more people are gonna do it. And the point of having that there surely is for people to use it. It's enabling other people to also build on top of what you're doing. So even for its own sake it's great, but obviously in business it has massive value, as we've seen, as well.

**Johnny Boursiquot:** So we've talked about all the benefits of using interfaces... Can you think of reasons when you should not use an interface?

**Mat Ryer:** That's a really good one... I've definitely in the past overdone it. I've definitely done cases where I've overused interfaces when a simple struct turns out to be much simpler. I tend not to do that anymore, because I tend to start with the structs first and then let the interfaces find themselves, or reveal themselves over time.

**Johnny Boursiquot:** So you don't design your code; you don't try to abstract too early by saying "Oh yeah, this thing's gonna receive an interface."

**Mark Bates:** So Mat, can you go on record right now as saying you don't design your code?

**Mat Ryer:** Well...

**Mark Bates:** Come on, Johnny just asked you a question - do you or do you not, sir, design your code? \[laughter\]

**Mat Ryer:** I feel like it designs me... I don't even know what that means. \[laughter\] Well, yes. I mean, obviously, you do. And interfaces are a great way to do that as well, especially if you're collaborating with people. You could say "Well, we know that our two things have to communicate, so let's agree on the interface between them and we can both build towards that. So in those contexts it's great. But yeah, of course, it is useful if you 're just sketching out concepts, actually.

Sometimes in my notebook I'll actually write out Go interfaces to try and think about what these things are gonna be doing, and stuff. But yeah, I do tend to wait... If I'm doing a package, I want that to be the smallest possible footprint, so I am definitely in that camp of -- I wouldn't have an interface unless it was an extremely important part of this package, like the io.Reader, io.Writer, those kinds of types.

**Jon Calhoun:** Building on what Mat said, I think one of the downsides to jumping straight to an interface is that it causes you to think "Oh, I'm gonna have three implementations of this", and starting to focus on breaking things into multiple versions, when sometimes that's just never the case. The classic example is typically your database. You're like "Well, what if we switch out for another database?" But in reality, most people never do that. So it's one of those -- it's not that you can't do some of that stuff to make it easier for you, but it doesn't make sense to bend over backwards to make this possible later, when in reality you're probably not gonna do it.

**Mat Ryer:** \[00:27:56.16\] Yes. And often, whenever you think like that, the detail actually doesn't allow it anyway. Two different data stores often behave very differently. You wouldn't treat them the same. So it's more likely to encourage bigger changes anyway, isn't it? So I completely agree.

**Mark Bates:** When I design interfaces upfront, they're almost never correct. It's because you're guessing; you're taking a wild stab at what you think the interface is, and especially if you go ahead and publish that. Now, I've been doing a lot of work with interfaces recently, and I can tell you that a lot of what I've been doing now is working with problems that I do understand and problems that I do know what these interfaces need to look like now, and how people are using them. But even then, I'm still saying "What's the simplest I can get away with?" and see how far I can push that before it starts breaking, and before I need a second method, or a concrete type, or something further down the line.

**Mat Ryer:** Yeah. In the Buffalo project you're quite flexible. It's kind of like a framework, and it's flexible. It lets people plug different things in and out, doesn't it?

**Mark Bates:** Wait a minute, I feel like you jumped about ten steps... \[laughs\]

**Mat Ryer:** Oh, really?

**Mark Bates:** Yeah, yeah...

**Mat Ryer:** I mean generally though, Buffalo -- the reason why interfaces are important, and these kinds of concepts... Abstractions are important, and they're especially important in the Buffalo project, because of the nature of it. The fact that you can use different technologies.

**Mark Bates:** Well, yeah. The reason I jumped ahead was I think Buffalo does a terrible job today of doing that.

**Mat Ryer:** How does it work today?

**Mark Bates:** Well, today we have a lot of hard, concrete types all over the place, lots of dependencies, we've got a plugin system that goes and searches your path for executable binaries named a certain thing, and asks them for information... It's very slow... Generally, as a whole, the Buffalo project was very much so -- like a lot of projects, I started it when I first came to Go, and I started writing Ruby for Go, basically. We all bring our baggage with us, right? So a lot of this has grown over time, with just me making choices that at the time seemed logical, or at the time were what I just knew how to do, because I didn't know Go well enough to make those choices.

And then as projects grow, things evolve, and people come in, and changes are made, and new requirements are added on, or whatever. So today, what we have in Buffalo isn't as pluggable as I want it to be, and it doesn't achieve the goals I want it to in terms of saying "I don't wanna use GORM. I wanna use nothing. I wanna use ego templates, or raymond templates", or whatever templating you want; or whatever it is you wanna do, right now you can't do that in Buffalo.

So I definitely have to go back to the drawing board, and we're currently rewriting it all now using a completely different system, but all interface-driven, using pretty much all of what we've just been talking about.

**Johnny Boursiquot:** I have to ask though... If I'm going to use a framework, I want it to make some decisions for me. I want it to be opinionated. Personally, I think that's the reason why I use a framework, and not one of the reasons you use a framework, right?

**Mark Bates:** I'm with you.

**Johnny Boursiquot:** So if you're now telling me you're gonna provide this whole new pluggable system that can basically take any ORM tooling you want, it can use any UI interface you want, all the bits and pieces - if you make everything pluggable, then do you not create another problem? Now you have to document patterns. "Hey, you could use this set of things. This for ORM, this for template generation, this for that..." It's almost like you're pushing the decision to the user of the framework, as opposed to being opinionated about it.

**Mark Bates:** \[00:32:07.06\] I'm absolutely doing that. I think a little bit cleaner than you might be imagining it... Buffalo today - right now you can say "Generate a new app" and you get this whole web stack, and it's got Node, and it's got Pop, and it's got Plush, and all that sort of stuff. That's that very opinionated that you were talking about. There's also a flag and you can generate a JSON one, which is slightly different. And that won't ever go away. We will still have those -- Rails calls them templates, but I'm not quite sure exactly... Kind of default presets, if "presets" is a good word, where you'd say "Give me the web preset", and Buffalo will ship with a few of them... And you're gonna get a Go file that has all those plugins in them, and you could just pull them out, or add your own, or whatever... Or you could come up with a different present that your company has of all these plugins, and just use that instead.

So yeah, there's always gonna be opinions, and it's just like -- you know, Rails basically generates a Basecamp for you whenever you do Rails new... \[laughter\] Buffalo new will always generate the Basecamp for me, I would assume... Or something like that. But we need to make it easier for other people. Not everybody wants Pop, not everybody wants these things. And I know myself, I have hit points where I'm like "I need to do X, Y and Z" and I can't, because I don't have the hooks in the tooling, I don't have the hooks in the library itself...

I mean, we talk about tooling in CLIs, and you start talking about how do you get versioning, and stuff like that... But that's getting way off this track.

**Mat Ryer:** Do you think if you sit and design for much longer before you started Buffalo, that you would have come to these realizations just by exploring in your mind, or do you think the process was important?

**Mark Bates:** Oh, god no. I think everybody else would probably agree with it - you can't design stuff like this in a vacuum. If you've never written a web framework, and managed a web framework, and all that goes along with something like Buffalo for example, or if you're writing Docker, or whatever tool/project it is you're talking about, you can't just start one of those in a vacuum, and say "I know how to solve this problem." Problems are always infinitely more complex than you know. Always. It doesn't matter the domain.

So no, I could not have come up with a better design than I did when I first started writing Buffalo. What I can do is spend the last six months going on a kind of \[unintelligible 00:34:39.01\] a vision quest, if you will, for code, trying to figure out what that needs to be. What it needs to be to be truly idiomatic, and pluggable, and easy, and dependable and trusted. You can only do that sort of a thing with time and experience.

**Mat Ryer:** Yeah absolutely. So in a way, this next API has emerged in some ways out of what you had before. But also, of course, it's not to say you shouldn't do any design. I mean, that's what you're doing now, when you're thinking about this - you're taking everything you know before and putting it into a new design... So of course there's value in that.

**Mark Bates:** Yeah. We're currently rewriting the entire CLI project to a v2, using pure Go and interface-based plugins to really drive us. We're about 70% done, including some major pieces like generate some command, generate resource, and build, and test... And so far it's holding up beautifully. We've got some very small interfaces, not a ton of them. They're all standard libraries, there's no Buffalo types. Everything is a plugin; even the subcommands are plugins... And it's all managed with just a slice of plugins. It's ridiculously simple in its concepts, but really powerful. You could build really amazing things with just a few interfaces if you line them up correctly, and think about what it is you're doing. And you set yourself a space to work in.

\[00:36:12.23\] For me, it's been understanding that everything is a plugin. If you take something like Buffalo generate, that generate command is just another plugin, and it implements the one interface you need to be a subcommand of Buffalo, which is a main function that takes a context, root, string for where you are, and the slice of arguments returns an error. That's it. Now it's a subcommand of Buffalo.

That generate plugin issues three or four interfaces maybe, that say "Hey, if you implement these, you're gonna get these different \[unintelligible 00:36:46.03\] hooks when you run Buffalo generate", one of them being, say, a subcommand of Buffalo generate, like resource. And that's it.

So you can write your own implementation to generate. If you pick those couple interfaces, you can write your own drop-in replacement for it, or any of the other things. So it's not about a lot of interfaces, it's about targeted interfaces, it's about defining the scope of where your interfaces are.

**Mat Ryer:** Yeah, I like that idea, which I think everyone could actually use potentially. You don't have to be building Buffalo for it to apply... But that idea of having hooks into something. So if you do have some process that's kind of a closed box process, you may want some hooks into that. Having different interfaces for each hook, essentially - each method gets its own interface - and then they get to just implement the methods that they care about, you can of course check if a type implements an interface in Go very easily. And if you use the two-argument format, then you're not gonna panic when they don't implement that, so it's pretty safe. So you could use that pattern to allow other people then to hook into your own code, a bit like how you've done it for Buffalo.

**Mark Bates:** Yeah, exactly. One of the examples I like to use is the Buffalo dev subcommand, which currently watches your Go files, compiles them, restarts your app every time you're working, which when you're working with a compiled language, it's great. So every time you go back to your browser, it's the fresh app again. And the same thing with Webpack. But the problem is you can't add your own build scripts. You can't say "I want something else that's watching my files and running my tests." You can't have something else that maybe is starting up a Docker service. There's no way of hooking into that build lifecycle.

But you can easily add a couple plugins, and this is exactly what the develop plugin for Buffalo does now - or will do - in v2. It's like "Okay, we've got a before develop and after develop", so if you wanna set up some stuff, you need to launch Docker, write some files, run migrations before everything starts up, do that... There's a teardown you can hook into... And then there's a develop that \[unintelligible 00:39:00.05\] You can implement the developer interface and get spun off in a goroutine with everybody else to run your things you need to. And again, that's contexts, string, slice of strings, and error, and your context gives you all that cancelation. You can easily test async code if you're taking a context as your first argument.

In this case, testing this plugin that runs all these things in a goroutine was super-easy. I just wrote another plugin that implemented that one function, and then I just canceled the context when it ran. That was all I needed to do. So they're easily testable, and you can hook in with so much ease. They're really powerful if you start thinking about interfaces in the right way. And yeah, you can do some pretty amazing stuff.

**Mat Ryer:** You've reminded me of another one that's great, and Jon and I were talking about this the other week, as well... It's that idea of being able to wrap things with interfaces. A bit like how the middleware things work in the HTTP way. You have a function that takes in a handler and returns a handler, and then what you can essentially do is create a new handler that does extra things before and after passing the execution on to the other handler. So that thing of wrapping is actually quite useful.

\[00:40:23.09\] One trick that you can use as well - if you've got a long-running io copy operation and you want to cancel that with context, you can create a kind of a reader with a context yourself... Which essentially wraps another reader and intercepts the read method (that's obviously the first one that gets called), checks to see if the context has been canceled by checking the err method; if that returns an error, the read method can return the error. If not, it passes it on to the inner reader. That's a way that you can actually get a cancelable io copy, which - it's really cool to think that just because of these basic interfaces you can add actually quite a lot of power just by thinking about it in the right way.

**Jon Calhoun:** The reader is a really fun one to experiment with. I would definitely encourage anybody trying to wrap their head around this idea to spend some time with that. When I was messing around with the context -- Mat and I were talking about "Is it possible to cancel a reader?" and for whatever reason we hadn't read the whole thread on the GitHub issue, where somebody actually proposed just wrapping it like we said... But in the process of looking at it, I was like "Alright, let me go ahead and just throw this context in there and just check to see if it's canceled and just stop it." Well, one of the issues you run into is if you're doing really small files to test it, your one read will just read the entire file in one method call... So it's like, "Well, that doesn't work."

But then you can quickly be like "Okay, can I make another reader that limits it to reading five bytes at a time?" Now you have an easy way of saying "I can chunk this and make it a little bit easier to see when it cancels", and I can actually have another one that's set that after it reads maybe eight bytes, it actually cancels the context. So you can do these things to sequentially exactly see what's happening and make sure your code is doing what you think it's doing. It's really weird at first, but it's also really cool seeing how much control you have over these things by just chaining these interfaces together.

This all stems from a single-method interface, which is the crazy part. It's not like we went ahead and had some really complicated types; it was just a read method.

**Mark Bates:** The single-method interfaces are really key for stuff like that... Because like we've been talking about, you can just create those types right there in your tests, and have them do whatever you need them to do. And they're just an interface. Whether it's read five bytes and cancel, whether it's capture the arguments and whatever that came into this function so that you can check them later and then cancel the context, or return some error you want it to return... You can just implement those types right there, implementations of them, using simple functions, or slices, or whatever you need.

**Mat Ryer:** And it'll never get as complicated as abstract classes and big class hierarchies used to in C\#, because this technique really only works well with tiny little interfaces. So I think Go protects us a little bit there. There's another trick you reminded of when we talked about wrapping - if you're doing an HTTP response where you're writing to a file, and you're copying or you're writing to that file, if you want to see what's being written out, you can actually just replace the writer with a multi-writer, and pass it an os.Stdout as one of the writers. Os.Stdout is a file, so it actually implements io.Writer, and you pass in also the original writer. So it still carries on doing what it was doing before, but because of that multi-writer, you also see it printed out into Stdout.

So again, not many keystrokes and suddenly you can peer inside your code without having to open up a debugger and things; those are difficult to use, especially when you're dealing with byte streams, and things.

**Jon Calhoun:** \[00:44:03.21\] There's a lot of really cool ones like that in the io package. \[unintelligible 00:44:05.07\] is another one that does kind of like what Mat was saying, I believe, except whenever you're reading, you can actually pass in something that will write everything that it reads to that output. So you can actually have it write to Stdout everything that it's reading from a file, so you can actually see "What am I actually reading from this HTTP request body, and what does it look like?" and you don't interfere with the rest of your code, you just wrap it real quick, test it, look at it and visually see "What am I getting?" and then you can remove it as soon as you're done.

**Mark Bates:** Yeah, the multi-writer is awesome. I use that one all the time, just for that purpose, just for debugging what I'm expected to see, if I'm generating files, or whatever... It's like "Why am I not seeing that?"

**Mat Ryer:** Yeah, it's important in some cases, isn't it? And sometimes you don't wanna interfere with what it's doing. You don't wanna invoke the Heisenberg principle; you wanna be able to observe it and for it not to change behavior.

**Jon Calhoun:** I mean, nothing's worse than you're trying to debug, and in the process of interfering with it, you break it yourself, and you're like "It was never gonna work after I did that..."

**Mark Bates:** \[laugh\] Yeah, right...

**Mat Ryer:** Yeah. I saw a great example which involved putting a log line. The log line slowed the program down enough that the behavior changed... And it was obviously the thing you do when you're debugging something - you're gonna put some log statements in. Even that can interfere in some cases.

**Mark Bates:** Yeah, I used to have weird ones in Ruby, where just the act of printing it would cause something in the function. Whatever it was I was trying to debug would get kicked off and it would actually produce different results when you printed it versus when you just executed it.

**Jon Calhoun:** I think that's one that catches beginners off-guard. If they're dealing with a linked list, they'll iterate through it to actually print it out, and then they won't realize that their list is pointing to the end of the list, which is nothing... And then they'll be like "Why is it not working anymore?" \[laughter\] I've seen so many beginners get messed up by that. It's like, "No, you need to reset back to the front of your list", and if you don't have a pointer to that anymore, you're done. So printing out really screws you up.

**Mark Bates:** Yeah.

**Mat Ryer:** That's a great one. Well, in Ruby, of course, you could just do anything. There weren't any rules. \[laughter\] Someone probably took the to\_s method and just wrote their own, and did something crazy in there, and that's it.

**Mark Bates:** Well, it usually was never even anything that mean or intentional. The to\_s was probably calling some other method that gave you a default value, and it was maybe calculating an evolved value, or something...

**Mat Ryer:** Right, right. Or it maybe had some caching logic that malfunctioned.

**Mark Bates:** Exactly, yeah. So it wasn't necessarily-- I mean...

**Mat Ryer:** I'm not so sure it wasn't. I wasn't suggesting Ruby people go around casting spells on each other, or anything...

**Mark Bates:** No, no, no... I certainly have never modified the plus sign on the American Ruby to do division to my co-workers, ever. \[laughter\]

**Mat Ryer:** Yeah, because why wouldn't you want a language that lets you change what the plus symbol does?

**Mark Bates:** Hey, you know what - it made debugging fun. It was an adventure every time.

**Johnny Boursiquot:** I don't know if I want an adventure when I'm debugging. \[laughter\]

**Jon Calhoun:** I mean, when I was young I did...

**Mark Bates:** You didn't like grepping for source code that didn't exist? That wasn't a fun time for you, Johnny?

**Johnny Boursiquot:** No, I don't miss method missing. \[laughter\]

**Jon Calhoun:** You could implement every interface that way.

**Mark Bates:** Yeah, but you couldn't find it, so it's hard to say it was missing. Method missing itself isn't defined anywhere. \[laughs\] I do miss Ruby sometimes. It was fun to do. You could do some really fun stuff with things like method missing, but...

**Mat Ryer:** You could of course do some very appropriate use, as well... I did see some great examples.

**Mark Bates:** Oh, absolutely. But honestly, you look at Rails, and one of the things that made Rails Rails was method missing. And a lot of Rails is based entirely off of method missing. All that magic that everybody loves in Rails is essentially using method missing. Sometimes well and sometimes not so well.

**Mat Ryer:** \[00:48:11.22\] Yeah. So for anyone not familiar, basically if you call a method on an object, if you do that in Go, if you call a method and it's not there, that's a compile-time error. In Ruby, it'd just let you do that, but then it would just call like a catch-all inside, called "method missing". Then it gave you a kind of second change of seeing if you could do something with it. And a lot of the Rails things - you could write things like "find by name and age", and then that becomes a new method that you just invented...

**Mark Bates:** Yeah, you could basically parse the name of the method and generate -- in that case it was generating queries for SQL... And also (in Ruby) if a type didn't exist, a module or a type, you could also capture that and define types on the fly. I had a library that distributed Ruby, and if you'd just ask for any type inside of a module, it would just create the module, it would create the type and connect it to a remote data source somewhere for DRb stuff... And it just did all that by capturing those error hooks where things don't exist in Ruby. \[laughter\] That's -- I know... Isn't it terrible?

**Johnny Boursiquot:** Oh, my god...

**Break:** \[00:49:36.05\]

**Jon Calhoun:** So getting back to Go...

**Mat Ryer:** Yes, please.

**Jon Calhoun:** I feel like we've talked about interfaces a bit... How have we not talked about errors? I feel like that's something we should talk about.

**Mat Ryer:** An error is probably the most important interface we have in Go, actually...

**Johnny Boursiquot:** The best part of Go, you'd say, Matthew?

**Mat Ryer:** The best interface in Go.

**Mark Bates:** I thought BitBar was the best thing... \[laughter\]

**Mat Ryer:** BitBar is good. There's no bones. No one ever said it's not. \[laughs\] Yes, Mark, you have said it's not... But you shouldn't phone me at 3 AM to tell me.

**Mark Bates:** Well, when should I phone you to tell you?

**Mat Ryer:** Leave a comment on Hacker News, like everyone else. \[laughter\] There's office hours. Please.

**Mark Bates:** You answer phone's full by midnight. I have no choice... \[laughter\]

**Mat Ryer:** Yes. Well, Jon...

**Johnny Boursiquot:** Errors. \[laughter\]

**Jon Calhoun:** So I guess it depends what we wanna talk about. The first obvious thing is, for anybody who's unaware, errors in Go are just an interface. It's an interface that just has the single error method, and it returns a string. And it's weird how powerful that ends up becoming, because it allows you to return nil, it allows you to just return any specific error type you want...

\[00:51:55.00\] I find that really useful, because you'll see all this code where people get to return specific errors, and you can actually check them and see what they're doing. It's probably led to some bad patterns too, but it does let you do a lot more with the code that you otherwise could have. So I'd like to explore that more, but I don't really know where to start. Any suggestions?

**Mark Bates:** \[laughs\]

**Jon Calhoun:** I mean, there's a couple things I'd like to look at. The first one is, for you guys, if you're writing code, do you return specific error types, or do you just return an error that has a method and just tell them "Look for this method with an interface"?

**Johnny Boursiquot:** My first pass is with the simple error types... And then if the program gets complicated enough where I care, where basically the call site needs to do different things depending on the kind of error it is, then I'll start using typed errors.

**Mark Bates:** I'm assuming, Jon - real quick, just to clarify - you're not advocating that we don't return the error interface. You're just asking whether we use simple fmt.errorf for errors that \[unintelligible 00:52:54.04\]

**Jon Calhoun:** To give you examples, io has specific errors like end of file, and different things like that.

**Mark Bates:** Sentinel errors, yeah.

**Jon Calhoun:** So there are some like that... But then by using that, you then make anybody who's using your package have a dependency on your package, which a lot of the times when you're using interfaces, your goal is to get rid of that dependence. But then the other side of it is you could return an error that just looks like the error, but then they have to actually check "Does it implement this interface where maybe it has another method of some sort?" And then more recently, one of the things that makes that even more confusing is with all the wrapping of errors, when you start wrapping interfaces, you lose access to some of the embedded methods that are there... Which is something we didn't really get into, but it is a more challenging thing to tackle.

**Mark Bates:** Oh, are we out of time? We've gotta go? We can't talk about this anymore? Oh, no...

**Jon Calhoun:** We can always do another episode on the more advanced stuff...

**Mark Bates:** \[laughs\] As Mark tries to skirt out of the issue...

**Mat Ryer:** I've used the error interface... I use errors.new by default, for sure...

**Mark Bates:** See, I use fmt.errorf by default.

**Mat Ryer:** Yeah. Well, I tend to use that -- there's an errors package. Dave Cheney, by the way, was the one that coined "sentinel errors". They're the special variable error types that you return. The context package does this. It has canceled and deadline exceeded to errors, that you can then see why the context has stopped. So yes, that's nice, but as Jon said, it becomes part of the API, doesn't it? It becomes a part of the public surface of it, so you then can't change that. You live with that. That's then a design decision.

**Mark Bates:** Sentinel errors also offer a problem in that they can be changed at runtime.

**Mat Ryer:** Oh, right.

**Johnny Boursiquot:** Oh, that's fun.

**Mat Ryer:** Because they're just variables.

**Mark Bates:** They're package-level variables. So you can redeclare io.EOF at any time.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Julie Qiu does a good talk on finding dependable dependencies, Mark, which I really recommend you watch again.

**Mark Bates:** Okay. Oh, I've seen that talk, yeah.

**Jon Calhoun:** Dave Cheney has a good write-up on making constant errors, but I don't think everybody does it. But it is possible.

**Mat Ryer:** Yeah but it depends what you're gonna do with it, that's the thing. So it's nice to think "Oh, we'll build this system and all these errors will be strongly-typed, and everything will be brilliant", but what's the real use? I mean, you're gonna end up just sticking these errors in a log, or is there gonna be a notification at some point if it's mission-critical?

**Mark Bates:** So what I've found myself doing is I find sometimes for myself internally sentinel errors can be very useful in a few different places. So if I need one of those -- so not even a sentinel error; let me take that back. I just often might need to return the same error in multiple places. File not found, or whatever the stupid error is; resource not found. So I might declare that as a non-exported variable error at the top, that I can just return, but it's not for anybody else to use. It's not a sentinel error, it's not exported...

**Johnny Boursiquot:** It's documentation.

**Mark Bates:** No, it's just more so I can say "return file not found err" as opposed to "fmt.errorf file not found." I can kind of declare the error once and return it. But I'm not telling you to check for it, I'm not making you aware of it. It's just so that I don't have to change --

**Jon Calhoun:** \[00:56:07.00\] A shorthand.

**Mark Bates:** Yeah, it's a shorthand. Exactly.

**Mat Ryer:** Well, it does let you change it in one place...

**Mark Bates:** Exactly.

**Mat Ryer:** ...so your methods would just return the error interface. Externally, it just looks like a normal error.

**Mark Bates:** Exactly, yeah.

**Johnny Boursiquot:** Right.

**Mat Ryer:** Of course, it is a normal error, because you either use errors new to make it, or it has somehow that error method on it.

**Mark Bates:** Yeah. And I've been leaning towards the behavior-driven errors... Again, in the last few months, as I've been working more and more towards using interfaces a lot more. That makes more sense to me in terms of asking for information... But I don't return a ton of errors that are customerized like that anyway... But we do have that -- losing the embedded history thing becomes a problem.

**Jon Calhoun:** Yeah. It's tricky, because one of the cases that I'll use errors with extra methods on them for is like if I'm building a web server, I sometimes like to differentiate between an error where I can actually expose some information to the end user, and an error where the end user just needs a generic "something went wrong" error. That's it.

Because I've seen many applications that'll just expose the error every time, and I'm like "That's probably a bad idea." You shouldn't be just printing out strings when you don't really know what's in that string when it gets to the end user.

And then the other area I've seen it useful is if you have users submitting forms, or they're doing something... On the back-end of your code you might have the same code handling an API, and handling forms... So it might want to return something that says "This field is wrong, or it's invalid" or whatever, and then on the front-end you kind of render that differently.

If it's an HTML page, you're gonna render an input box with a red line around it. If you're dealing with JSON, you might have something that says "This is the field that's wrong", to try to help out the developer... So there are some errors that that's useful, but when you start wrapping them, it becomes a little bit trickier. And it's not impossible -- like, with wrapping it's not impossible, luckily, but that's the one case of interface embedding that doesn't cause you to lose it... And that's because of the wrapper type (is that what it is?) that has the unwrap method...

**Johnny Boursiquot:** Wrap error...

**Jon Calhoun:** Yeah. That's the only interface where the name of it is not what the method is... \[laughter\] It always throws you off. But because of that, you can actually write errors.as, or errors.is... I forget which one it is, but use one of those two...

**Johnny Boursiquot:** As, is... Yeah.

**Mark Bates:** Yeah. Were... \[laughs\]

**Jon Calhoun:** You end up having to define a bunch of variables ahead of time, and it's kind of... It's not pretty-looking, but you can do it. So it not being pretty kind of makes you only do it when it's important. So there is one upside to that - you just don't throw it in there for everything. It has to be important enough for this code to look kind of ugly.

**Mat Ryer:** Yeah.

**Jon Calhoun:** But it is tricky sometimes...

**Mat Ryer:** On that too, whenever you have APIs that return errors, or if you're gonna show them in the UI somewhere, I personally think that should be its own explicit mechanism in your code. I don't think we should use error for that. I think error in Go code means something's gone wrong; not that this field doesn't exist, or you don't have permission to access this resource. Those kinds of things should be, I think, done explicitly, because for these reasons it's too complicated, and you expect these different things to know too much about each other. But yeah, that was just sort of an extension on that... Otherwise, I completely agree.

I have to say, we are approaching that special time where we launch our new radio slot...

**Johnny Boursiquot:** BitBar? \[laughter\]

**Mat Ryer:** It's time for your unpopular opinions.

**Jingle:** \[00:59:42.21\]

**Mat Ryer:** \[00:59:50.21\] So let's go. Actually, for the first time we have an unpopular opinion from our Slack channel. Dylan writes that interface names should be adjectives, rather than er verbs. SO he prefers "closable" to "closer". What do you think about that? Is that unpopular?

**Johnny Boursiquot:** All I'll say is sometimes it is hard to twist a name into following that convention. I mean, I'm with Dylan on that one; you don't have to be dogmatic about it. Sometimes just for readability's sake it just makes more sense to go with what makes sense, right?

**Mark Bates:** I use a combination of both, because some are "-ables" and some are "-ers". Some are more describing, and some are more doing. Some are more verbs and some are more adjectives, or adverbs, and I think that's fine. I don't think you have to be dogmatic about it.

**Jon Calhoun:** Yeah. I think it's nice to have a general guideline to get everybody on the same page, but it's not -- it's kind of like the... It was mentioned in the Slack channel as well, the "accept interfaces return structs." It's not a rule, it's a guideline to get you moving in the right direction... But there's always exceptions to that.

**Mat Ryer:** Yeah. \[unintelligible 01:01:02.25\] on Slack says that they use a prefix for their interface names. And I know that in C\# it was a tradition to use like iClosable, so that you know it's an interface. Does anyone use prefixes or suffixes or anything like that?

**Mark Bates:** No...

**Johnny Boursiquot:** If I see i in front of any interface, that developer and I are gonna have a little chat. \[laughter\]

**Mat Ryer:** You refuse to implement it. "I'm not gonna implement that, ever. I'm not gonna implement that interface", which takes a lot of work.

**Mark Bates:** Well, again, other languages do it, and it's idiomatic in other languages, so I think that's fine for those languages... In Go it's not idiomatic, so... You know, if a PR came across that had that for me, I would probably ask them to change it, just because it doesn't conform with idiomatic Go. Not for reasons I may or may not agree with, it's just that's kind of what it is.

**Jon Calhoun:** All of these are interesting too, because -- so an example of a company going completely against style guides for a language is Google was pretty notorious for going against the Python style guide slightly internally. And even when the creator of Python started working at Google, he had to suddenly not use his own style guide, which would have been frustrating, I'm sure... But I think if you have an organization where your entire org is using the i prefix, then by all means, keep it consistent there; that's probably more valuable than being idiomatic. But if you're working on open source, then you need to conform to whatever the norm is there.

**Johnny Boursiquot:** I'd say find out during the interview... \[laughter\] Because I would seriously have a problem with that.

**Mark Bates:** "So Johnny, the interview is over... Do you have any questions for us?" "Do you use any prefixes when naming your interfaces?" "Well, yes, we do." "I'm out..."

**Jon Calhoun:** "I just need to see some code. I need to see some legit production code with interfaces in it."

**Mark Bates:** "I need a 10% bump, or I'm out." \[laughter\]

**Mat Ryer:** I like that there's still a price though...

**Mark Bates:** There's always a price.

**Johnny Boursiquot:** Like, "I'm willing to overlook this, but you've gotta make it worth my while."

**Jon Calhoun:** They'll have an intern just write plugins for everything you use that just removes it...

**Mark Bates:** \[laughter\] Exactly.

**Johnny Boursiquot:** It just hides it and puts it back in during commit...

**Mark Bates:** Yeah, exactly. \[laughter\] \[unintelligible 01:03:19.13\] Your own version of gofmt. Just puts an i in front of every interface.

**Mat Ryer:** GoTroll. It could be a tool. We could make that.

**Johnny Boursiquot:** \[laughs\] Nice.

**Mark Bates:** Unpopular opinions, I guess...

**Mat Ryer:** What about you, Bates? Have you got an unpopular opinion, mate? Have you got a popular one?

**Mark Bates:** No, I don't have any popular ones... Everybody knows that. It was difficult choosing \*an\* unpopular...

**Mat Ryer:** Yeah, that's the bit that you struggled with, wasn't it? The \*an\*.

**Mark Bates:** That was the bit that I struggled with... And I think I'm gonna come up with "I don't like the way that the main package and the main function is designed."

**Mat Ryer:** I see.

**Johnny Boursiquot:** Explain, explain...

**Mark Bates:** \[01:04:05.04\] Explain... Yeah, I think it promotes global scope, for example, and os.Args comes to mind. We were just talking about you can redefine io.EOF, and the problem with CLIs is if you're not immediately taking that os.Args and handing it off to something else, it's hard to write tests around; everything's kind of globally-scoped. Present working directory - well, technically it's global... Again, it makes it hard to test if you're talking about those things.

So I feel like that, and a context. We have no context when we're in there. And admittedly, that was all after; context came out later. But if the main package was exportable, if we could call it, if the main function was exportable, and took a context, a current working directory, the arguments, and returned even a basic error... They'll let us do os.Exit() or whatever, but if we return an error, just do a default exit of some kind. I think that allows for better-tested CLIs, nicer-looking code that Go can give us that information at runtime. That's not difficult information to give us... And I think it promotes generally a better way of writing our CLIs.

Right now I feel a lot of CLIs get written in the main function by accident, just because people are hacking away, trying to get something right, and then they've got a big, long main.go file that's not very well tested, or broken out, and other people can't make use of that CLI without compiling and shelling out.

**Mat Ryer:** I completely agree with that, actually. I solved that problem though by -- I have a little run function, and that takes in the Args, and it takes in an io.Reader and the writer (if there's standard in/standard out) and returns an errors. And then I just have a standard little main... I do create a context in that main, which is canceled when Cmd+C is hit the first time. That cancels the context.

**Mark Bates:** Right.

**Mat Ryer:** Then the second Cmd+C exits the program. Because you don't wanna be annoying people if it's hanging for too long, or something.

**Mark Bates:** Right.

**Mat Ryer:** And then you can write test code and just call run and pass in the different slice of string for your arguments. So you could pass in a different writer; you could use a buffer, so you can read then what was written by your tool...

**Mark Bates:** My biggest problem with that - which again, giving it to another function is a good thing... But my biggest problem there is as a third-party I still can't use your code programmatically from Go.

**Mat Ryer:** Yeah, they're different. Packages and programs are fundamentally different.

**Mark Bates:** Yeah. So the way I'm trying to solve it in my code now is my main is very simple - context, background, get the slice of Args, get the working directory, and then hand all of that off to an exported main function that takes those things in a package that I can then work with... And I basically don't have to look at the main.go file ever again, right? Now I'm just kind of off in Go land, and you can come along and import it, and you can pass it a context, a working directory and some Args and start using my CLI in your program. And it's really nice and clean, and kind of top-level... I don't know, I've been finding that as a pattern it's been working really well for me recently.

**Mat Ryer:** \[01:07:22.26\] Do you shell out or do you call them directly?

**Mark Bates:** What do you mean?

**Mat Ryer:** Do you create a command exec and run an actual process? Is that how you run things? Or do you just call...

**Jon Calhoun:** I think he just has a method; he calls a method -- or a function, on another package.

**Mark Bates:** Yeah, exactly.

**Jon Calhoun:** He might name the other package Mark, and it might have a main exported function, and he calls mark.main inside of his actual main that doesn't do much.

**Mat Ryer:** I bet he does have a program called that.

**Johnny Boursiquot:** I was thinking the same thing. \[laughter\]

**Mark Bates:** I've been leaning towards a CLI package, and then having a type -- not even a top-level function, but a top-level type there, whatever it is, and that has the main function on it. Again, no scope; I don't want any global scope here. A zero value struct should be able to handle that CLI. And like I said, it's a pattern I've found has been working really well for me, because then I can kind of manipulate whatever I need to just with those three pieces.

**Jon Calhoun:** It is nice though that Go makes it easy enough to do that. You've found a pattern that works for you, and you can sort of build around that. I get what you're saying, but I also feel like because it's so easy to just build around it, that it's kind of not that much of a limitation.

**Mark Bates:** No, it's not necessarily a limitation. It's just an unpopular opinion, by the way... \[laughter\] I'm just saying, if they were to rethink it for v2, those would be my suggestions for --

**Mat Ryer:** Well, on those bombshells of suggestions...

**Mark Bates:** Wait, wait, where's Johnny? Isn't Johnny supposed to come up with one today?

**Johnny Boursiquot:** No, man. That's next week.

**Mark Bates:** Oh, that's not cool...

**Johnny Boursiquot:** I need time to think about this.

**Mark Bates:** Oh yeah, fine...

**Mat Ryer:** He's too nice, he's too nice...

**Mark Bates:** That's right, he's too nice. I remember now. You broke into a cold sweat when we said we might upset somebody... \[laughter\]

**Mat Ryer:** Well, that just makes him a nice guy, doesn't it? \[laughter\] Mark's trolling him...

**Jon Calhoun:** Why can't these two upset each other? Mark's nowhere near too nice...

**Mark Bates:** Oh yeah, absolutely...

**Mat Ryer:** And Mark trolls him for being nice. That's where we've got to... \[laughter\]

**Mark Bates:** That's how evil I am.

**Mat Ryer:** Well, welcome to the internet... And I'll say our goodbyes. We've reached the end of the show. Thank you very much, Mark, Johnny and Jon. Hopefully everyone's learned a little bit about interfaces and abstractions, and grappled with them, as you go into your future endeavors. We wish you all the best, and we'll see you next time.

**Break:** \[01:10:02.11\]

**Mat Ryer:** Recording!

**Johnny Boursiquot:** I see bytes, and kilobytes...

**Jon Calhoun:** Alright, that's good...

**Mat Ryer:** That's great. I want that as my ringtone.

**Johnny Boursiquot:** Kilobytes...

**Mat Ryer:** "Incoming kilobytes..."

**Jon Calhoun:** Alright. Are we cool with me going live?

**Mark Bates:** Yup.

**Mat Ryer:** Yeah, man.

**Johnny Boursiquot:** Do it.

**Jon Calhoun:** Alright, we're live. Two minutes early.

**Johnny Boursiquot:** Well, we still have to wait like two minutes, yeah, to let people in...

**Mat Ryer:** Okay, okay. Two minutes...

**Mark Bates:** Let's all sit in uncomfortable silence then...

**Johnny Boursiquot:** Well, I don't think it has to be silent.

**Mat Ryer:** It can still be uncomfortable and we'd be talking... \[laughter\] We don't need to be--

**Mark Bates:** Well, if we do that now, then what are we gonna do for the next 60 minutes? \[laughter\] Not talking, make things uncomfortable...

**Mat Ryer:** Yes.

**Johnny Boursiquot:** Wait... You all weren't kidding about that? \[laughter\]

**Mat Ryer:** No, we just genuinely ran out of things to say.

**Jon Calhoun:** That's it, folks... We're done with the episode.

**Johnny Boursiquot:** \[laughs\] Come back next week.

**Mark Bates:** Is that it? That was amazing. That hour flew by. Thank you for having me.

**Mat Ryer:** It's the best hour I've ever spent with you, Mark...

**Johnny Boursiquot:** \[laughs\]

**Jon Calhoun:** In silence, huh?

**Mark Bates:** Definitely. Absolutely.

**Mat Ryer:** Yeah, we're not -- this isn't the show yet...

**Mark Bates:** I hope not.

**Mat Ryer:** No.
