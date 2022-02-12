**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about Go language proposals. Go is open source, so you can open issues and make proposals. Sometimes people do that, and then sometimes they end up in the language itself. So we're gonna learn a bit about that process and take a look at some of our favorite proposals.

Joining me today - Johnny Boursiquot's back. Hello, Johnny.

**Johnny Boursiquot:** Hello!

**Mat Ryer:** Welcome back, sir. It's been a while.

**Johnny Boursiquot:** Yeah, it's been a while... Although I was on last week's episode; you weren't around.

**Mat Ryer:** Yes.

**Johnny Boursiquot:** But for you, I'm back. Yes. I'm back.

**Mat Ryer:** Yes. You're new to me.

**Johnny Boursiquot:** I'm new to you.

**Mat Ryer:** The listeners are probably sick of you, but to me - I'm not.

**Johnny Boursiquot:** Yeah. Fixture on the wall, kind of...

**Mat Ryer:** \[laughs\] No, not really. It doesn't happen that quickly. Two or three episodes... We're also joined by Kris Brandow. Hello, Kris. Welcome back!

**Kris Brandow:** Hello! Glad to be back.

**Mat Ryer:** How have you been?

**Kris Brandow:** I've been well... You know, getting the new year started, almost done with January...

**Mat Ryer:** Yeah. Same for us, actually... And same for Daniel, who's joined us also. Daniel Martí, welcome back, sir.

**Daniel Martí:** Hi. Happy to be back.

**Mat Ryer:** Thanks for coming back, thanks for accepting our invitation. Maybe you could just start off by telling us what's the process behind the proposal? What's the usual flow? How do they come about, and what happens to them?

**Daniel Martí:** \[04:02\] So it's been a process that has iterated quite a lot in the past few years. Initially, as you can imagine with any open source project, people would open issues and be like "Hey, please do X or Y." With language features it was kind of messy, because sometimes you would get two lines of somebody saying "Hey, add generics", that kind of thing. Over time it became more formal. For really fancy changes, like generics or error checking, there's a formal process where you have to write a document and write an experimental implementation of your language change... But most changes that get proposed are smaller, so instead there's like a small template that you have to fill. And I think that's what most people end up doing.

**Mat Ryer:** Right. And then what happens once they're out? We're talking open source, aren't we? So this is available for everyone to look at.

**Daniel Martí:** Right. It's a bit tricky, because it's hard for the team to prioritize... Because something they could do is, for example, go from oldest to newest... But there's such a large backlog, and some proposals are much more complex and large than others... So if you do them exclusively by creation time, I don't think you would get very far. You would get stuck very quickly. So they do a mix of easy ones, and ones that they agree with, sort of, and then over time they tend to get to most of them. And I think they meet up once a week and they consider about a dozen proposals per week.

**Mat Ryer:** Right, yeah. That's amazing, really... To think of all the different possible things you could change in Go... Of course, there were gonna be a lot of those proposals, because - you know, sometimes it comes down to personal taste, sometimes people think of things that perhaps in their one specific case it would be a great feature, but maybe it doesn't fit in other situations. So it is kind of a difficult thing to do, I think, to balance that. And like you say, some easy ones as well... So of course, you have the difficulty of implementing and maintaining features as well; you have to consider all that stuff.

**Daniel Martí:** Yeah. And I think the template is the first filter nowadays, which I think is pretty well designed... It's pretty long, so I'm not gonna read the whole thing, but some bits are pretty interesting. There's stuff like how long have you been using Go for, or who would this change help? Such as only researchers, or maybe people who do 3D games. And other questions, like "Has this been proposed before? And if so, how is this different?" Or things like "Is this backwards-compatible with existing Go programs?" Because sometimes if the answer to a lot of these questions is not what you're after, the change is most likely not a good idea.

**Mat Ryer:** And you can sense that they're encoding in those questions a way to make sure you've checked to see if there's already a proposal that's been made for this... Because actually, GitHub issues are probably the best way to solve this problem... So I imagine there's a lot of duplication, and things like that.

**Daniel Martí:** Yeah. And I actually find GitHub search is not very good. It's almost like a keyword substring search... So I actually use Google to search for Golang issues, because there's like 50,000 of them, so it's the only way, really.

**Mat Ryer:** That's a good tip. How do you do it? Any special way?

**Daniel Martí:** You can filter by site, so I filter by github.com/golang/go/issues, and then whatever keywords. And it mostly works... But it's especially better than GitHub search in terms of relevance, because if you didn't get exactly the right keyword, GitHub might not even show the issue at all... That kind of thing.

**Mat Ryer:** Okay, so maybe we could have a look at some of the proposals that are out there. There's some really interesting ones. And we're not gonna pick any that are currently underway... Is that what we said? Although I think we've added a few extra since then, haven't we? Maybe...

**Daniel Martí:** Yeah. At least what I try to do when picking these is avoid the big issues, like generics and error handling, because I feel like those are too controversial, and there's already a lot of material on them... And we also pick proposals that are still being considered, but that haven't been accepted yet. So it's still stuff that's a bit up in the air.

**Mat Ryer:** By the way though, Daniel, nothing's too controversial for this show... We'll go anywhere. That's a promise. \[laughter\]

**Daniel Martí:** Fair enough.

**Mat Ryer:** \[08:17\] Yeah. So one of the first ones on the list we have is this -- this is a really interesting one. It's issue 21670, which makes me feel like I'm in Star Trek by saying that... It is "Have functions auto-implement interfaces with only a single method of that same signature." So this is essentially how we have HandleFunc, which is a function type that implements the Handler interface... And you have to explicitly say that in the code, at the moment; it's quite a short amount of code usually, because all you're doing is creating a method that then calls itself... So it's not too difficult to do, but this proposal is about making it automatic. So given a handler interface that has a ServeHTTP method, you wouldn't ever have to have a HandleFunc type; you could always just make a func that matches that single method. It would only work for single-method interfaces, of course... What do we think about it? Daniel, what do you think about that one?

**Daniel Martí:** Somebody made a comment on this proposal which I think was a good point, which is that in Go you can go from a method to a function by using a method value... So we've got a variable of type bytes.Buffer, and you name it *buf*; you can do *buf.write*, and that is a function. So you can go from the method to the function, but you cannot go back, if that makes sense. If you have that function, you cannot easily say "Okay, now use it as a method." You have to statically define a new type to use that function.

So in a way, this would make the language more consistent, but then the question is "How often does this come up?" Net/http is a good example, but I struggle to think of more than like four examples.

**Mat Ryer:** Well, from the standard library maybe, but I love that pattern from that, computated from the HandleFunc. So whenever I see opportunities to use that, I do. And there are often opportunities. There are lots of times, especially when you're building something new - there is a new abstraction somewhere, but you're not sure about it. Or all you really need is just one thing from it, so it inevitably ends up being a single method. So I do a lot of home-grown single-method interfaces, if you like, and usually have a func version of them. In fact, sometimes I only just have the func thing, too.

**Daniel Martí:** I think maybe the main argument against this proposal is that you could argue that an interface is not defined only by the signature of its methods, or in this case a single method, but also the name of the method. For example, is any function that looks like a read really a read? It could do something entirely different, and it might match the reader interface by accident. I'm not sure that this would be a problem that happens often in practice, but it does sort of break Go's explicitness a little bit.

**Mat Ryer:** That's true, yeah, because you're no longer dealing with that interface type, and it's not explicit. That's a good point. Kris, what are your thoughts?

**Kris Brandow:** I just have a clarifying question here. So this is like when you pass a function into something that takes the interface - it would just be like "Oh, this satisfies this interface." I think in that case, I generally like this. I feel like when you do have a function, you just wanna pass it in. It's kind of annoying to have to wrap it in that "Oh, Http.Handler func, here's my function." It just adds a bit of verbosity when it's already kind of obvious what it is...

I'm sure there's other use cases where it would be used, but from that perspective, it feels like that is something good about the language; it would cut down on verbosity. I feel like Go is often a lot about just cutting down on verbosity overall.

**Mat Ryer:** Yeah, that's interesting... To Daniel's point - he makes quite an interesting point; if somebody made an interface that just returned a string... Say that it was called Identifier, and it had an ID string method. You could easily have a function that returned a string. And passing that in - I was just wondering about that case, about accidentally implementing an interface... But you're passing a function into a thing, so you're really aware of what you're doing at that point, aren't you? In fact, you're probably making the function anonymously, aren't you? ...so that you're doing it in-line, right there. I can't imagine that becoming a problem.

**Kris Brandow:** \[12:34\] I think in some cases... But I think you could also just have package-level functions that you want to use as an interface... And I think as far as confusing interfaces, or accidentally implementing them, I think the only one that I've consistently accidentally implemented is stringer, which I just think is an issue with stringer overall that we're probably never gonna get away from. It's just like "Yeah, this thing will always print out whatever this method puts out if you pass it any of the fmt functions, because it implements stringer." But I've never really had that issue with any other interface, of like just accidentally implementing it.

**Mat Ryer:** Yeah, I think I'm probably the same. Johnny Boursiquot, what do you think about this idea of having functions automatically kind of magically implement an expected interface?

**Johnny Boursiquot:** I have somewhat of an allergic reaction to magic, so I tend to prefer--

**Mat Ryer:** It's all the glitter that gets in your nose...

**Johnny Boursiquot:** I know, yeah; it just gets everywhere and I start sneezing and coughing...

**Mat Ryer:** Beautiful sneezes though... Like fireworks.

**Johnny Boursiquot:** \[laughs\] Yeah, exactly. Exactly. I mean, I kind of see the intent behind it. It's one of those things where it's sort of adding a layer that I'm not super -- well, I don't wanna say I'm not comfortable with that, I'm just... It solves a problem I don't find myself having very often; I don't mind that explicitness... So I'm on the fence about this one. I don't think I'd be pushing for it very hard.

**Mat Ryer:** Right. No thumbs up on the GitHub issue from you.

**Johnny Boursiquot:** No... No.

**Mat Ryer:** Okay... Let's move on, see if any of these we can get some love for. Have you seen this one - it's Issue 43557. This is about function values as iterators. This is a way to let you implement a type that will work with the range, for loop... And it does it by having an inter-method which returns a function, which will get the next item. So it kind of relies on closures to keep the state... And then obviously, if it's a method - which it would be - from a type, it can use data from that type when it's called. So it can return the next item in the list, or whatever it's doing. How do you feel about this one?

**Johnny Boursiquot:** I feel like that's a carry-over from other languages. I've used this pattern in Java, and stuff like that. And it's fine... Again, my default stance with improvements like this to the language tends to be "What is it that the language does now that this could improve?" So this adds another way, a different way of doing your iteration... And I don't have a need for that.

Again, I don't wanna be the curmudgeon in the corner saying no to everything... But to me, if they're gonna improve the language in some way -- like, I don't want half a dozen ways to do the same thing in Go. The fact that Go only has *for* for looping - I mean, to me, that was like... At first, I was like "Wow, really? Aren't you gonna be missing some things and keywords, some construct, whatever it is?" And then you sit down and you start using it, like "Oh, okay... I guess I don't need much else. I can do all the things that I need." So to me, this is another one of those.

**Mat Ryer:** Well, this doesn't add a new way to loop over; it just means you can write types that work with the current for range thing. The way you have to do it at the moment is either you build your own API, you have your own methods and you just implement your own iterator... Or if it's small enough data, you will just maybe have a method that creates a slice, and then that slice can be easily ranged over by the for block thing. That's right, isn't it, Daniel?

**Daniel Martí:** \[16:29\] Yeah.

**Mat Ryer:** I thought I saw you shaking your head in my periphery.

**Daniel Martí:** I was thinking that I've actually seen some people use channels for this use case, and that is avoiding the boilerplate with next, done and so on, that kind of method interface... And it kind of works, but channels are also the biggest footgun in the entire Go language... So I really don't like when people use channels for that. And they also have their own inherent overhead. A channel is an allocation, and it also means that there has to be a different goroutine on the other side, sending your stuff... And how do you signal that you're done? That kind of thing.

So I'm kind of with Johnny on this - I don't think this is a big enough problem to require a language feature... But at the same time, out of all the solutions that I've seen to implement custom ranging, I feel like this is the simplest and nicest. I wouldn't oppose it, but...

**Mat Ryer:** Yeah, so you wouldn't thumbs-down on the GitHub issue. I'm with you on that - of these solutions, this is probably my favorite... It's a little bit complicated, because it's a method that returns a function. And then you have to know about closures in order to make that work properly. But it is very neat to have all your iteration code in just one method. And then the fact that you're able to use it as a normal type is kind of quite nice.

The only things is it hurts readability potentially, because at the moment, when you see a range block, you know that that is a map or a slice or an array. You know that isn't anything more, and it's not doing much more work. Whereas if you've got your own iterator implemented, that could be doing expensive things, and that wouldn't be very clear, straight from just looking at that code.

**Johnny Boursiquot:** And you're also relying at that point on the convention, the naming. Basically, whenever you see that, you're like "Oh yeah, the iterator pattern." You're like, "Okay..." So you have to kind of trust... Obviously, you can always go take a look at the code, hopefully, but to me, again, the explicitness of my iteration matters to me, I guess.

But this is nice. As presented, it is a nice idea. I'm not gonna beat down on it. Is it worth the trade-off for me? This is another one where I'm like "Nah, I can't see it."

**Kris Brandow:** I think I want to like this. I like the idea, but I think the big thing for me about it is slices and maps are known quantities. We can get the links, we know how long they are. With most other types of iterators, you usually have some error that might happen. If you're getting something from a database, or you're getting something from somewhere else, and there's not really anything in here about how you would do error handling. That's one of the things I like about the iterator pattern that I've fallen into a lot, which looks a lot like -- I think db.Rows() does this where you just have .next() returns a bool and then inside of it you can actually get the value, and then you have an error afterward if the bool returns false... And then it has this neatly-packaged way of handling iteration.

I just think this would definitely get abused in some ways, and lead to people just not recognizing that they need to handle errors, or call another method to get the error when they get false back. So I think this adds a little bit of nicety, but I think it would become a giant footgun for API designers.

**Mat Ryer:** Very interesting. Cool.

**Johnny Boursiquot:** One thing I wanna come back to, Daniel - you said channels are a footgun... I'm considering that an unpopular opinion, but we'll swing back to that one later. \[laughter\] We'll make it a verbal mental note.

**Mat Ryer:** It sounded like a verbal mental threat, more than just a note.

**Daniel Martí:** I was about to also bring up something about ranges being simple nowadays... Because they're not really. You can range over a channel, and that could block forever, basically. Or you could range over, for example, a slice, where each element takes a gigabyte of memory, and then you have to copy that in every iteration, and that could take a long time.

**Mat Ryer:** Right.

**Daniel Martí:** So I think ranges are already kind of confusing. This would maybe make them more confusing, but it's not binary, like suddenly they become bad.

**Break:** \[20:43\]

**Mat Ryer:** It's time to move on to the next proposal. Daniel, do you wanna tell us about this next one?

**Daniel Martí:** Yeah, so this next one is pretty easy to understand, I think. It's essentially type inference for when you use make or new. You can use make or new to -- for example, make to create a new map with some capacity, or new to allocate a pointer to an int, or a boolean, or whatever you want... And that is fine, but quite a lot of the times when you use make or new, you're assigning that to something that already has a type, like a struct field. So in those cases, you have to repeat the type, or even worse, you have to remember what the type was to then copy and paste it, or write it again manually.

So this is a small language change to say "Only within those two built-in functions infer the type if, for example, it's missing." That would be like new syntax.

**Mat Ryer:** And this is number 34515 in the GitHub Issues in the Go repo, if you wanna follow along at home. Okay, what do we think about this one then? Kris, have you got any thoughts?

**Kris Brandow:** I like it. I'm kind of thinking about like when I write test code, I sometimes like to have lots of anonymous structs and anonymous things, and it'd be a little bit easier to make a map if it already has a type there, and it'd cut down on the code a little bit. I don't know how I feel about the kind of empty -- or whatever the syntax we come up with; like, just having something be like make, I think it'd take a while for me to get used to that, since I'm so used to seeing a type in there... But I think overall it could be a benefit to the language, and make things a little bit less verbose in obvious situations. So overall, I think I'm a general thumbs up, but cautious.

**Mat Ryer:** Yeah, general thumbs up. Ian Lance Taylor actually recommended using the three dots again inside the make, to indicate "infer the type." Because that's what we mean inside a buffer, like lengths of arrays, and also if we're doing -- other times... I can't remember.

So yeah, I'm with you, actually. I quite like this one, too. I feel like you don't get really any benefit from repeating it, I suppose... So maybe that's the argument though - would there be a benefit if they're separated, those two types? Would you lose something, would you have to then go back to the type?

**Johnny Boursiquot:** \[24:00\] I like that one. Of the ones so far, this was probably my favorite one. I could see using it, what we settle on in terms of how to indicate "Hey, we've already specified the type. Go figure it out", whether it's a three dot, or - the original post was proposing a type of keyword, which would definitely get abused everywhere... But I could definitely see that. Because we've already specified the information. The language can infer the type, so it's like saving a few keystrokes.

Of the bunch we've seen so far, this is probably the one that I could see using... To borrow Kris' opinion, it would take me a little bit of getting used to, because I'm always used to specifying my types... But I could see myself getting used to it.

**Mat Ryer:** Yeah.

**Kris Brandow:** I think aside the proposal *make* and *new* are weird functions anyway, since they take a type name, whereas most other things in the language don't take type names, so they're already a bit different and weird.

**Mat Ryer:** Yeah, why are they different? Why couldn't that be one keyword?

**Daniel Martí:** Yeah. And I was actually gonna go in that direction. I find make and new to be too special, and this would make them further special. For example, if people wouldn't currently have composite literals for like maps or something else, they might switch them over to use make, just so that they could get type inference... And I find that kind of weird.

So I would rather almost say make and new gone, and -- well, make wouldn't be gone for good, because it's still useful to, for example, specify the capacity, and that kind of thing. But in most cases you don't need to specify. You just want to create a new thing.

**Mat Ryer:** Yeah.

**Daniel Martí:** So I would rather see composite literals become more powerful.

**Mat Ryer:** Are auto-instantiating maps such a big problem? I mean, I love how the append built-in function will make the slice if it's not already there; if it's nil. Or if you've just declared, then it will make it when you put the first item in; it will set things up. Could we not also have maps that behave that way? Or is it just that way because it sort of would be too magic?

**Daniel Martí:** If you had that though, any time you wanted to assign to a map, you'd have to call a built-in function and reassign to the map, which I guess would be worse. I don't know.

**Mat Ryer:** Well, it could be, but I was thinking -- the language would stay the same, but it would work; you'd be able to just... I mean that as a core principle, not as a change, I suppose.

**Kris Brandow:** That's where the compiler would be like "Oh, this is a nil map. I'm gonna instantiate it for you, and then add this value", or whatever.

**Mat Ryer:** Yeah. Because that's really the experience we get with append. But that's not this proposal, by the way; I was just saying, I always thought it would have been alright.

**Kris Brandow:** I definitely agree with Daniel though on how make or new are kind of weird... Especially when you're first learning the language and you're like "Oh, I wanna make a map, or I wanna make a slice", and you think "Oh, I use new if I'm gonna make new other things, so I should make new here." It's like, "No, new is not what you want at all when you make a map or a slice." And I think that's something that trips people up a lot, and you just have to kind of get used to it.

So yeah, if there was a way to reduce down what you used make and new for, I think that would be good... Because a lot of the time it's just better to do an instantiation without using the built-ins... Unless you really do wanna have that capacity or you wanna specify the length and don't wanna type a bunch of empty values in a slice, or something like that.

**Johnny Boursiquot:** It is awkward explaining new to a Go beginner, when to use it and when not to use it. Usually, they're like "Well, is that a constructor kind of thing? Can I use it to initialize a new thing? How does that work? I can only use make in certain cases, like with channels and other--" It becomes very confusing. But I don't think that's a bad thing; I think that's just Go. Once you learn how Go works, you kind of get over those minor issues. I call them minor, but... Again, I'm speaking for somebody who's been doing this for a little while, so my opinion is gonna be very different from somebody who's approaching the language, and I'll admit that. It's the curse of those who are experienced - you no longer see the problems beginners have, and I totally own up to that.

**Mat Ryer:** \[28:27\] Yeah, I think that's fine. I like the curly brace to create new things, because it's the same for maps and slices and structs and stuff... So you can yourself choose to just do it one way. So I'd actually be happy with just that way. I think we should just only have that.

**Daniel Martí:** Except basic types.

**Mat Ryer:** Right, yes. Well, also zero value types are also quite nice. So the fact that that works I think is kind of good. You can call methods on nil types, and it isn't always a disaster. Anything else on this? Then we shall move forward! Sorry if that was too loud. \[laughter\]

**Johnny Boursiquot:** Jerod is gonna have words with you...

**Mat Ryer:** Yeah... Someone's got a mouse wheel, because I've been listening and you've done about six miles so far... I'm not calling anyone out; someone's got a mouse wheel is all I'm saying.

**Daniel Martí:** It might have been me...

**Mat Ryer:** It's a wheel on a mouse. It doesn't matter, I'm just saying I can hear a mouse wheel going; it's been about six miles, I've been keeping track on my Apple watch. \[laughs\] Okay, the next proposal then is called lazy values. Daniel, what's this one?

**Daniel Martí:** So this is proposal number 37739, if anybody wants to check it out... And it's essentially trying to solve the problem that, for example, if you've got some verbose logging lines and you are logging some things that might be expensive to calculate, to evaluate, such as "Give me the string of something" or "Give me the length of some very large decentralized data structure", or something like that. And the thing is - yes, the log verbose function can do nothing if the verbose logging is not enabled, but those parameters, those arguments have to be calculated anyway, because it's still a function call. And you can wrap the whole function call in an if statement, but that's very verbose in itself. So what this proposal says is essentially what if we have a sort of generic interface that has a method called "eval" to evaluate into some type t, and then when you pass that onto a function which is designed to take lazy values, then it's gonna evaluate that lazy value as it needs it, but not otherwise.

**Mat Ryer:** Yes. Essentially then, you can pass functions into other functions, and under the types, and it'll only be called when they're used inside that function body. Is that right?

**Daniel Martí:** Yeah, pretty much. And you could do this today with interface types, of passing functions, but I think this is more about making it more of a proper language feature that people should be using for this kind of thing.

**Mat Ryer:** Yes. Well, often lazy loading is a good thing to do in code, for various reasons. Kris, how do you feel about it being an actual language feature?

**Kris Brandow:** I guess I'm kind of on the fence with it. I can see where and how it would be useful. I think my only concern would be getting the API right, and then also -- or I guess I have two concerns... And then also how it can be abused, and helping to make sure that it's not abused to make egregious Go code. I think channels always come to my mind when I think about that, of how people just really abuse channels in bad ways, just because they're there... And channels are a feature of the language. I could see people perhaps being like "Oh, we have this lazy evaluation. I know how lazy evaluation works in language X, so I'm just gonna do what I do in language X", even if there's a more idiomatic Go way to do it, that has either better performance, or more clarity, or whatnot.

But I think if we can, as a community, figure out how to convey "This is the kind of things you should be using lazy evaluation for", I think it could be a very useful feature, in a wide range of software.

**Mat Ryer:** \[32:23\] Yeah. You see, I've implemented almost this, but by using functions. So the idea is you've got some kind of loader, and you just pass in the function... And it works, because it can also be the method of a type as well. So you can even have it in services, or other higher-level object design situations as well. So it's nice - you pass the function in, and internally, depending on when you call it (if you even do), it only gets called at that point.

The nice thing about doing it explicitly is you get to choose arguments, and things like this... Whereas this proposal - it almost looks a bit like defer, how you're calling that method immediately... But I guess, again, it's kind of trade-offs, and things... Johnny, did you have a chance to look at this one? This is the functions, lazy values...

**Johnny Boursiquot:** Yeah, I didn't have enough time to form an opinion of it. On its face, it looks like an interesting idea, I just don't have an opinion on it.

**Daniel Martí:** Somebody also left a counter-proposal somewhere in the comments, essentially saying "If we made anonymous functions less verbose to write and use", then people would do what Mat said, of using function parameters more often... And I think I agree with that.

**Mat Ryer:** Hm... Yeah, those function parameters are -- it's definitely worth a look, I would say. Okay, that's an interesting one. It's funny seeing these proposals - a lot of them so far are solving real code problems, that we've lived with for a while... So it's interesting to see the different kind of points in the life of a language... Because of course, there've been language proposals all along, but these are interesting, to see some of the level of these.

Shall we talk about ints? Who uses ints in your programming life \[unintelligible 00:34:19.20\] Yeah. Because you're always on point, or something like that...

**Johnny Boursiquot:** \[laughs\] Ooooh...! Nicely done.

**Mat Ryer:** Something like that.

**Johnny Boursiquot:** That was the first good joke you made today, Mat... \[laughter\]

**Kris Brandow:** Just today...

**Mat Ryer:** \[laughs\] Yeah, that's a compliment.

**Johnny Boursiquot:** Oh, it's a pile-on. Daniel, it's your turn. \[laughter\]

**Daniel Martí:** Oh... No, I was gonna say a joke about Batman and not-a-number... \[laughter\]

**Mat Ryer:** Thank you for taking the heat off me, and placing it rightly onto Batman, and that not-a-number thing in JavaScript. They both deserve \[unintelligible 00:35:00.17\] Okay, let's talk about ints. There's a proposal to change an int to be arbitrary precision, which... When you think about that - this is number 19623... That as a headline doesn't make much sense, but Daniel, perhaps you could explain this one to us.

**Daniel Martí:** Yeah. So to recap, Go has for example int32 and int64, which are fixed-size. For example, in int32 you've got 32 bits; when you get to the maximum value, which is 2 to the power of 31, or whatever it is... If you go past that, then it overflows and it goes to the lowest negative value.

**Mat Ryer:** Right, so it wraps around.

**Daniel Martí:** Yeah.

**Mat Ryer:** Yeah, like Pacman. I think it's called that. If not, it should be. Go on. I'm just trying to make it clear for all levels, all abilities. \[laughter\]

**Daniel Martí:** Yeah. So essentially, you don't have protection against that kind of error, where it essentially loops around and goes back to the bottom. And then there's int, which doesn't have a fixed size. So when 64-bit computers, like most laptops and desktops these days - it's 64 bits, but for example on small routers, which might still be 32 bits, it's gonna be 32 bits.

\[36:15\] And this causes some bugs in real programs, because for example people might only test on 64-bit machines, and then their code might actually break on 32-bit machines with regular workloads... So this proposal is essentially to say "No, the int type without a size never wraps around. It's essentially infinitely-sized." And then it's up to the compiler to generate good code to implement that.

**Mat Ryer:** So would you be able to go beyond int64 with this proposal as well?

**Daniel Martí:** Yup.

**Mat Ryer:** Hm... That's getting more interesting... Although I've never needed numbers that big. But still, I want them.

**Daniel Martí:** It would be kind of like -- I'm not sure if many of you have seen the package math/big, but it has a big.int there, and that is arbitrary size, so you can store whatever number you want in there... So this is kind of like that, but in the language.

**Mat Ryer:** That is a big int. You can get some really big ints in that type. \[laughter\]

**Johnny Boursiquot:** I keep trying to squeeze that one in...

**Mat Ryer:** It's massive, you can't. It's a big int. What's the biggest int you've ever used, Kris? Be honest. \[laughter\] Have you ever gone beyond int32?

**Kris Brandow:** I have written things that need to use int64, for various reasons... I like this proposal; I'd like it if we did have more arbitrary precision things in the language itself... The math/big package is a little difficult to use, and I think there's some interesting opportunities for having good arbitrary arithmetic built into the language... Like adding arbitrarily big integers together, which I assume that would come with this, if this proposal was accepted.

I think maybe the only strange thing about this is if you were doing any bit shifting, or using an int as a bitmask, but you probably shouldn't have been doing that... So that's probably not an issue.

But in general, I like this. I feel like the int type right now is kind of in this useless space, because it's like, you can't really guarantee how large it's going to be if you're writing code that is cross-platform... So I think that kind of forces you to default to using an int64 or an int32, or a uint64 and a uint32... But I also think that it's good for like if you're trying to specify a link, through kind of what Rob lays out in his proposal... I think that it's good to know that you won't overflow or you won't have that type of issue when it comes to specifying something. Or you won't have the issue of it being only 32 bits, and you have a really large thing, and now you run into this problem where your code isn't working, and failing in a weird way.

**Mat Ryer:** Yeah. But what about the implications at runtime of this? Does this mean ints would be slower? Because there surely has to be some runtime element checking to see the size before you cross the threshold into needing bigger and bigger ints.

**Daniel Martí:** Yeah. And I think that's where people wave their hands a little bit and say that modern computers are good enough at this stuff. On one hand, the compiler can be smart enough to, in some cases, realize that it doesn't need to check if something will overflow... For example, if you use an integer to range over a slice, a slice is never gonna be too big to not fit in memory, so that's fine.

Another case is if you cannot statically know that for sure, you can also say that modern CPUs are good enough at predicting branches, and say "Oh, this is basically never gonna happen in practice", so the CPU is essentially not gonna be any slower executing this code. But those are the kind of things where you would have to actually experiment with this implementation and see.

**Mat Ryer:** Yeah. Good points. Anyone else wanna say anything else about this one? I like the idea of just massive ints.

**Johnny Boursiquot:** Just generally? \[laughs\]

**Mat Ryer:** Yeah. Like, I don't need it. But it's like, whenever I buy a laptop, I always get the most RAM I can get... And honestly, I try and find reasons now to use up RAM. If you've got any data you want me to store for you, let me know. Send it over. I've got loads of RAM going to waste.

**Kris Brandow:** \[40:26\] I do wonder as well if there's maybe a corollary proposal - it probably already exists - to have a float type in a language that is arbitrary precision... I feel like that could be useful for perhaps financial applications, where you really need that arbitrary position. You can't use a float64 for money; please don't use a float64 for money, that's a bad idea. \[laughter\]

It's one of those things where I always wanna go to use a float, I'm always like "Oh yeah, float" and I'm like "Oh no, it has to be a float32 or a float64. I have to specify it." So I feel like adding that type there could also be useful if we're gonna change how int works and how uint works.

**Johnny Boursiquot:** Does anybody know why we don't have that? I mean, we have it for ints... Why don't we have it for float? I don't know.

**Daniel Martí:** I think it's a carryover from C... Because C does have an int type, which is essentially just the machine-size int, but it doesn't have the same for float. It only has single and double-precision, like Go.

**Mat Ryer:** Yeah, because an int is just a bit of memory; it's like one bit of memory, not a bit... \[laughs\] But the machine is 32-bit, so that's what it can move around the fastest.

**Johnny Boursiquot:** For those that are gonna be listening to this show, they're all making a face at Mat right now, shaking their heads... \[laughter\]

**Mat Ryer:** But they've already paid for my computer science course, so get up! But no, I'm just saying -- yeah, it's that reason; what Daniel said.

**Daniel Martí:** And I feel like my overall stance on this is that I like the next proposal better, which kind of aims at the same problem, so maybe we should talk about that one.

**Break:** \[42:00\]

**Mat Ryer:** So the next one talks about having new types that are stricter; as well as like an int, you'd have an oint, which is a kind of overflow int, or overflow-protected... And it would panic if it was to overflow. So instead of just wrapping around like Pacman, it would be like if Pacman went off the screen and never came back, right?

**Daniel Martí:** Pretty much. And this is Issue 30613, if anybody wants to check it out.

**Mat Ryer:** Yes. So are there people that struggle with numbers and them overflowing a lot? Are there particular programmers that struggle with this? Because I have never come across it.

**Daniel Martí:** I'm gonna bring up one case that's quite common with this kind of issue - overflows and underflows, that is - and it's when you implement codecs, or things that have to encode or decode images, video, audio, that kind of thing... Because you can quite easily -- like, if you just write the code and you're not thinking about overflows and underflows, you're thinking about inputs that might be like one kb in size. But what if somebody feeds you really large data, or something that you didn't expect? And then suddenly, one little loop that looked very honest and fine, it suddenly loops forever, because it's overflowing, and it's just looping and looping forever, and then suddenly, your CPU is stuck.

**Mat Ryer:** Yeah. Why not just put it all into a big int...? Okay, don't do that int idea. I won't teach computer science, don't worry. \[laughter\] How do you feel about this then? I feel like adding a new type like this definitely makes sense, because it's completely backwards-compatible. Anyone else have any strong feelings either way?

**Kris Brandow:** I feel like this would be a good addition, especially for the smaller ones. I know I've sometimes written code that needs to check for overflows, and it's a bit annoying, and there's a bit of verbosity, and it'd be nice to just kind of like catch a panic instead, as bad as that is... But I think it's pretty tricky to detect when overflows are happening, especially if you're just adding things to numbers, and just trying to be efficient, and have clean code.

I also don't see a downside to adding these. I don't know how they would be abused in some way that's like "Oh no, that's gonna be such a problem." And I think if it does make writing code in some of these encoders or decoders, or whatever other circumstances people have - it makes it easier to write that code, and write that code safer, which I think is important, then I think it's worth adding to the language for.

I think Go is one of those languages that's like "Okay, we're safer than C", and this could be one of those things that's like "This is a way in which we are safer than C."

**Mat Ryer:** Right. Yeah, because when it overflows, it does so silently, doesn't it? I mean, it's essentially -- if there's no error and it just wraps around, you wouldn't know it's happened. And of course, that is a problem. It could be.

**Johnny Boursiquot:** It is a problem, yeah.

**Daniel Martí:** Yeah. So I like this idea, I like both of these proposals in that they handle overflows in some way, because Go doesn't have a good way to deal with those...

**Mat Ryer:** You can't have them both though, can you?

**Daniel Martí:** Well, yeah...

**Mat Ryer:** You have to pick one.

**Daniel Martí:** Right. So what I'm thinking is -- for example, with this proposal you would still have to check for overflows, because if you don't, your code would panic, and that might not be the best idea... But the thing is it would be a safety net of sorts. it's kind of like in Go there are no buffer overflows, because - yes, you can check against them, but if you forget to check them, you get a panic. It's not like you execute arbitrary code or you hang forever, or that kind of thing.

So to me, this proposal feels quite Go-like... But at the same time, what I don't like is that there are separate types, so the user has to choose every single time which one to use... And I think the defaults should be the safe version; it shouldn't be the weird, funky version that wraps around.

**Mat Ryer:** That would be a backwards-incompatible change though, I suppose, wouldn't it? Maybe? Maybe not, because -- is overflowing kind of unspecified behavior, or would there be people that rely on it?

**Daniel Martí:** \[48:00\] It is specified to wrap around in the Go spec, but the thing is, does much code actually depend on that? If they do, this could be triggered by a new Go language version. So if your go.mod says "Go 1.17 or later", then suddenly ints and uints - they're all safe against overflow. And then if you do that upgrade and you want the overflow, you use the other type, that explicitly allows you to overflow without panicking.

**Mat Ryer:** Okay, so you would have another type, but you'd flip it, so that the new type had the old behavior, and the default behavior was panicking overflows.

**Daniel Martí:** Right. Because otherwise, you have to trust that people will use this safer type, and I don't think that's a good idea, especially with the amount of existing code.

**Mat Ryer:** Yeah. That was a fair point, wasn't it, Johnny? That last point Daniel made. What do you think?

**Johnny Boursiquot:** I think it's fair to say it was fair.

**Mat Ryer:** Oh, I've made a fair point, too... \[laughter\] I wondered, because I'm trying to see if it's actually time for our regular slot... Unpopular Opinions!

**Jingle:** \[49:00\] to \[49:16\]

**Mat Ryer:** Okay... Who's gonna kick us off? Does anyone have an unpopular opinion?

**Johnny Boursiquot:** Well, now that you bring it up...

**Mat Ryer:** Mm-hm...

**Johnny Boursiquot:** Daniel...

**Mat Ryer:** You don't like him? \[laughter\]

**Johnny Boursiquot:** You see - usually, when we have you on the show, you have one of those faces, one of those voices that is soothing to me... It's a good thing. But you said something earlier that I want you to explain a little bit more... About why channels are a footgun in Go.

**Mat Ryer:** What did he say?

**Johnny Boursiquot:** He said channels are a footgun.

**Daniel Martí:** Yeah. We were talking about ranging, and I said that people use channels for ranges as a sort of iterator, and I said I think channels are probably the biggest footgun in Go... And I think that's probably triggered a reaction. \[laughter\]

**Mat Ryer:** \[50:15\] It certainly did that... He's livid. What's the phrase you're using?

**Daniel Martí:** As my unpopular opinion, you mean...

**Mat Ryer:** No, no. The foodgun, you were saying, right?

**Kris Brandow:** Footgun.

**Mat Ryer:** Yeah. What's that about? Can somebody explain that for anyone who's never heard it before?

**Kris Brandow:** Oh... It's basically like if you have a gun - you know, usually you're trying to shoot other things with it, but instead it's gonna hit you in the foot, and that's bad.

**Mat Ryer:** Oh, footgun. I thought you were saying food--

**Johnny Boursiquot:** What did you think we were saying? Foodgun?

**Mat Ryer:** I thought you were saying foodgun.

**Johnny Boursiquot:** Like, I'm gonna launch a burger straight at your mouth, or something?

**Mat Ryer:** I couldn't figure out if it shot food out, or if you used it for shooting food. \[laughter\]

**Johnny Boursiquot:** Like, it's gonna shoot up some food in the range today? \[laughter\]

**Mat Ryer:** Oh, man... Yeah. I mean, if you want a language proposal, I propose that our American cousins pronounce their T's a little more, and then we wouldn't get in this mess... \[laughter\] That's a language proposal for me. I'm gonna actually open that. Can you open PRs for America? \[laughter\] Okay, Daniel, do you have a real unpopular opinion?

**Daniel Martí:** Yeah, I guess so. My unpopular opinion is that Go as a language should be frozen again at some point over the next few years. We've had a couple of years where new features have been added in, especially big ones are being considered, like generics... I want to see that slow down again, like it was for 6-7 years after Go 1.0 came out.

**Mat Ryer:** You're like "Yeah, you've had your fun. You've gone too far. It's time to take a step back..." Why?

**Daniel Martí:** It's a mix of reasons. On one hand, I feel like Go succeeded the most when it was stable. A lot of the amazing software that came out in Go was conceived while Go was essentially frozen as a language... And I feel like if Go keeps growing and growing... It's not like it's growing very fast at the moment, but if it keeps the upward pace like that, I feel like it might lose this good quality of just being chill and letting other languages experiment, and then just taking the good bits and being a small language.

**Mat Ryer:** \[52:19\] Hm. Interesting. Well, what do you think of that, Kris?

**Kris Brandow:** I think that's popular. I think that's something I would like to see. I feel like especially over the last few years we've had some -- I don't think they were missteps, but I feel like we've been moving a little bit too fast, with a sense of urgency. I think modules is a pretty decent example of that. I feel like the end result has been good, and I think there was a need, but I feel like there was a lot of stuff with modules that was like, "Oh, how are we actually gonna make this work? How are we gonna get the tooling to be there for modules?"

Now I think the tooling is pretty solid, but there were a few really rough years of "What does my editor install look like? How do I operate in both modules and with GOPATH? How do I make both of these two worlds that need to exist for various reasons actually work?"

I think that, yes, slowing down some, letting other people experiment for a bit, and really stabilizing the language would be a good idea.

**Daniel Martí:** I think the main reason why this opinion might be unpopular is because it means that a lot of the proposals that people have filed for the language might not make it... Because if we stop at some point for another five years or so, that means the proposals are gonna keep coming in, but they're either gonna be rejected or put on hold, which might be frustrating for some.

**Mat Ryer:** Right. Well, good, strong point. We'll certainly be testing that unpopular opinion on our Twitter feed, @GoTimeFM. And we actually do a poll and find out if it is indeed unpopular or not.

Does anybody else have an unpopular opinion?

**Kris Brandow:** I have a somewhat related one to what Daniel said...

**Mat Ryer:** Is it unpopular? Because that's all I care about.

**Kris Brandow:** I think so...

**Mat Ryer:** Well, then proceed.

**Kris Brandow:** \[laughs\] I don't think we're ever going to fix the v2+ module problem in the language. I think we're stuck with that.

**Johnny Boursiquot:** Oh, get over it. \[laughter\]

**Kris Brandow:** Because I think anyone that's experienced a package or a module that has a v5 version, but also at one point was like a GOPATH, or incompatible, and now they're just trying to import it, and the tooling is just like "Oh, of course, you meant v1, not v5, which is the latest." I think we might find ways to make that a little bit less rough, but I think that's an inherent design flaw in how semantic import versioning was constructed, and I think we're more or less stuck with it at this point.

**Johnny Boursiquot:** I saw a very popular project - an ORM, actually... GORM. Their approach was to basically say "You know what - the old codebase, the supposed version one of this thing, we're gonna move that into a separate branch altogether." They just skirted the issue altogether by basically saying "Hey, our v2, whatever our new features and everything else that was supposed to be v2 - we're now gonna put that behind a /v2 module path." Now when you pull it down, that's what you're getting. So they've basically skirted the whole issue by saying "The latest stuff is the v1 now&gt; If you want the other stuff, then lock to a commit hash or something, find another way to do it."

Honestly, I think that's a nice way to actually get around the problem, although it may rub some people the wrong way. But I think that was a nice way of actually getting around the problem, rather than introducing a v2 in the path.

**Mat Ryer:** It's a bit of work for maintainers, because suddenly they might build their code one day and it doesn't build, because they've made breaking changes... But with a relatively simple fix, which is just change your imports, or fix your Go \[unintelligible 00:56:03.17\] Interesting approach. Has anyone got any views on that?

**Daniel Martí:** \[56:11\] I think semantic import versioning had to happen, because otherwise it wouldn't have been possible to have semantic versioning work at large scale... Because for example with the GORM case, if I depend on one library that wants an old version, and I depend on another library that wants a newer version, if both are at the same version one module, there's a clash; there's like a diamond dependency problem. I can't build with both versions at the same time, because they're the same module. So that's what version 2+ is meant to fix - you can build with version one and two at the same time.

But I kind of see Kris' point. We are kind of stuck with this version \[unintelligible 00:56:46.07\] but I think it's mostly gonna get better with better tooling, like the package site for example now, if you look at the docs for version one, and version three is the latest stable, it tells you "Hey, did you notice that you're not on the latest version?" And that's kind of a hint that users should be getting moving forward.

**Mat Ryer:** Nice. And by the way, if anyone doesn't know, a diamond dependency thing - it sounds good, but it's not. \[laughter\]

**Johnny Boursiquot:** It's shiny, and expensive...

**Mat Ryer:** It sounds like you've unlocked an achievement. It's like "BRRRRRNNG! Congratulations, achievement unlocked! You've got a diamond dependency problem." Although it'd be cool if it was like that.

**Kris Brandow:** I also feel like for the next couple of years it's gonna be rough on people that were already on v2 when it was using Dep or using some other system, and now they're like "I wanna update the modules" and it's like "You have to go rewrite your entire-- you can do it automatically, but you have to go to every single import path in your entire codebase and update them." That can be a lift for some people for sure. That's a big change, especially if you have a monolith of some sort... I have a friend that has this exact problem at work, and it's just like "I'm just hanging onto GOPATH for dear life, until it is very dead and gone, and we have to deal with modules, and it's going to be a lift." Because they've tried to do the upgrade, and it just didn't work out well for them. So maybe there's something we can do to alleviate that, but I think that's also gonna be a struggle for some people.

**Mat Ryer:** Brilliant. Anyone wants to say anything else? Because I'm just gonna wind up... I don't know why I say that; hopefully, that gets cut out. It's a silly thing for me to announce on it... Plus, this is live, so... Sometimes we go meta, and we talk about what we're talking about, instead of just talking about this thing we're meant to be talking about... I do anyway... This is one of those times.

It's time to say goodbye, I'm afraid. I really hope you enjoyed going through these proposals with us... There's actually so many more; Daniel, you'll have to come back, and we'll do a part two of this episode and talk about some more proposals to the Go language. I'd also love if we could find some bonkers ones. I don't wanna be mean to anyone, definitely not, but I'd love to see some of the really out there as well, if we could find some of those... If anyone knows of any, please send them in on a stamped address envelope, or \[unintelligible 00:59:14.00\]

**Johnny Boursiquot:** Bonkers... You mean like generics? \[laughter\] Sorry, I'm just yanking your chain.

**Mat Ryer:** That was great. No, that one's definitely gonna be made into a wrap, or put into some sample somewhere... Hopefully. Thank you so much to our guests... Johnny Boursiquot - goodbye, Johnny. Have a lovely time.

**Johnny Boursiquot:** And prosper... \[laughter\]

**Mat Ryer:** Can't do it. Are there vulcan kids that can't do that, and they're like "Aww..." and there's like a stigma about it, and stuff, and they're like "Oh, live long and prosper..." Do you know what I mean? Daniel, can you do that?

**Daniel Martí:** Apparently...

**Johnny Boursiquot:** You never tried. You got it on the first try. Man, that is...

**Mat Ryer:** Skills.

**Johnny Boursiquot:** I'm just not using my hands good enough, I guess...

**Mat Ryer:** You're not using it for that enough.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** To be fair though, that isn't very useful in any of the -- like, you can't even use it for digging... There's nothing. So it's only for that, showing off that you like Star Trek, or at least are aware of it. Kris, thanks so much again; it was lovely to have you, as usual.

**Kris Brandow:** Of course.

**Mat Ryer:** And Daniel Martí - Daniel, see you next time.

**Daniel Martí:** Thank you. It was fun.

**Mat Ryer:** Thanks, everyone. See you next time. I said it twice. Ridiculous. It's really hard to do just basic things sometimes... whether it's just say goodbye in a way that I haven't just said those words...

**Johnny Boursiquot:** \[singing\] Now it's time to say goodbye...

**Mat Ryer:** Goodbye, everyone. See you next time!

**Outro:** \[01:01:07.29\]

**Mat Ryer:** \[unintelligible 01:02:53.03\]

**Johnny Boursiquot:** Was that in the show notes?

**Mat Ryer:** \[unintelligible 01:03:06.11\] only do what's in the show notes...
