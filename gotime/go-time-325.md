**Johnny Boursiquot:** Well hello there, listener. I'm joined today by myself, Johnny Boursiquot. I'm your host. I'm joining this podcast as the host. But most importantly, I'm joined by Carlana Johnson...

**Carlana Johnson:** Hi!

**Johnny Boursiquot:** ...who is here to help us - how should I put this? ...unpack some of the new features coming out in Go 1.23 next month, so August 2024. And there's a lot of new stuff coming, but I think this is probably going to be one of those releases where not everybody, I suspect, is going to be super-happy with some of the things that are being added to the language. And we'll get to that. But before we jump in, Carlana, how have you been?

**Carlana Johnson:** I've been good. Yeah. So once again, it has been six months, and so just like the Go release schedule, I'm returning. And yeah, I think last time I was on the show I promised to talk about iterators, and now I'm here to do that.

**Johnny Boursiquot:** That is awesome. Thank you for coming back. Yeah, so let's dive right in. So yup, every six months we get a new release of Go. Obviously, in between that we get patches, and things... But this is a feature release. New things coming in hot. And obviously, the feature on everybody's mind is iterators. Before we jump in, we'll not assume that every audience member knows what an iterator function is... So let me hopefully try to do a good job of establishing what iterators are. And then please, Carlana, jump in if I say anything that doesn't sound quite right.

So an iterator is basically a construct that allows you to traverse collection types, like slices, arrays, maps, that kind of thing. And they typically implement a mechanism for getting to the next item in the collection, and also checking if there is anything else in the collection, if there is a next item. Otherwise, you need a mechanism of short-circuiting or stopping the iteration, because there's nothing else to iterate over.

So fundamentally, that's what that construct is. And you can find it in a number of languages, be it Python, Java etc. So iterators are not a Go thing, they're just a programming language concept. So what are good uses for iterators, generally speaking?

**Carlana Johnson:** Yeah, so that's a great summary. So if you're familiar with other languages, like Python, or JavaScript, and I'm sure... I know C++ has a thing for iterators, and I'm sure basically every language does nowadays. So yeah, an iterator is just the idea of you have some sort of list, or container, or it could even be an open-ended sequence. It could be just a counter that counts up forever. And you want to have one value yielded from it at a time. So you're just looking at a single value out of a stream of either some finite set of values, like all of the items in a list, or an infinite set of values like a counter, or reading from a file, or whatever it is.

Yeah, so iterators are a really important concept in general. And up until Go 1.23, the Go language did not have special support for making a custom iterator type. So if you wanted to iterate over a slice, or an array, or a map, or a channel - we've all done this. I think even if you're a beginner and you're listening to this podcast, you've probably written \[unintelligible 00:08:10.06\] and then your slice, or your map, or whatever it is. And so that gives you each individual value in the map. But up until Go 1.23 there wasn't support for making your own iterators.

\[08:32\] So let's say that you like the Go standard library, but you have an idea for how your map type could be faster, and you want to implement it yourself. Or you have a pre-sorted map, or you have some sort of linked list instead of a slice or an array, and you want to have some way of letting users go through all the values in your collection. Well, up until now, the thing that you've had to do is to build an iterator yourself, where you return let's say an object with like a next method, and the next could say "Okay, true", or "Okay, false", and you say \[unintelligible 00:09:09.01\] and then maybe do item.value... And that gives you each of the items in the collection.

So that's something you could do, but it's always sort of been kind of a pain to write. So as somebody who tries to write one of those methods, you a little bit have to think backwards, or you have to figure out "Okay, how do I keep track of where I am in the iteration?" Because from call to next to call to next, you lose your state. And so you have to pack up everything you need to know when you call next, and then unpack it again on the next call to next, and make sure you don't lose it. And so it's not too bad for things that are just like a straight line. But for things that are a tree, it gets a little bit tricky.

An issue that I've had before is I've wanted to iterate through DOM nodes of an HTML tree... So there's a really nice package - it's not in the standard library, but it's in the extended standard library, the golang.org/x/net/html package. And that's a really nice HTML parser. So you can give it a document you get off the web, you get back this beautiful tree of the HTML elements and all of the things... But now that you have the document, how do you actually go through it and find the nodes that match, and change them to be what you want to be, so you can emit them again? And so up until now, what you've had to do is to write a recursive function... That's the example that's in the docs right now for the net html package. It shows a little function that calls itself, and that one doesn't even have a way of stopping. It's just got to go through the whole tree.

**Johnny Boursiquot:** Yeah, the whole thing.

**Carlana Johnson:** Mm-hm. Because it's a little bit tricky. How do you tell it, "Okay, you've found the item that I want. Just stop. I don't need you to go through the whole tree. I just needed to get to the first link, and I want to print out the value of that link, but I don't want the rest of the tree once I get there."

So yeah, it's a little bit cumbersome to work with. So up until now, up until Go 1.18, Go didn't have generics. And so if you wanted to make a collection, or if you wanted to do something where you could contain different types, there wasn't a way to do it so that you could just contain any type, and then get the value back out again safely, without a lot of casting and turning interfaces back into concrete types. There were ways of doing it; you could use code generation, you could use reflection... You could do different things to work around it, but there wasn't ever a great way before generics were added to Go in Go 1.18.

But then once Go 1.18 added generics, suddenly you had this way of building container types. And once you have a way of building container types, people want to be able to read through the container types, right.

**Johnny Boursiquot:** Right. Naturally.

**Carlana Johnson:** \[12:04\] Yeah. They want some way of using them in this structured way. And so there's been a demand to add iterators to Go for the last couple of -- what year did Go 1.18 come out? I guess if we're on 24 now, three years ago. It must have been three years, because it's every six months.

**Johnny Boursiquot:** Every six months, right.

**Carlana Johnson:** So yeah, so for the last three years people have been saying "Generics are great, but when are we going to get iterators?" And so the way that you might think about doing iterators is "Well, let's just define that things should have a next method, and then the next method returns a bool, or maybe the next method returns a bool and the value..." And that would be one way of doing iterators. And that is definitely an approach a lot of people have thought of. I thought of it. I opened a proposal on the Go issue tracker saying "Hey, let's do iterators. Here's how it could look." And an issue that came up with that proposal and the other ones that were like it - there were also more detailed proposals by people who are actually on the Go team and know how to write the compiler, not just people who contribute four-line functions every six months... \[laughter\]

So the issue with that way is that let's say that in Go 1.21 you were like "Oh, I'll make a new type, and I'm going to define it against a slice. Or I'm going to define it against a map." Because the thing that you can do in Go is you can define your types just based on another type. So if you define it like let's say the headers type in the net http package, that is defined as just being like a map with a string for a key and a slice of strings for the value. So if somebody on the map type added a next method, and they put that in a range statement, then between when you added the next method and then when the next iterators get added to Go, it would change the meaning. Because in the old one, it would just loop through it like it was a map, but in the new one it would start calling that interface method. So it was like a little subtle kind of incompatibility between the two versions of Go. And so that wasn't maybe like the most definitive reason why they shouldn't use interfaces for iterators, but it was definitely one thing that was against it... It's that Go has this really, really, really strong backwards compatibility guarantee. And doing this, it would have been like something subtle; it would have been something that it's very unlikely that you just happened to define an iterator method... But it would have probably -- yeah, it would have been an issue.

Or like if you tried to use -- I think the more likely issue is that your company is stuck on an old version of Go for like security reasons or whatever. You need to get government approval or regulatory approval to move to a new version of Go. And then you import this package and it's using an iterator defined in the new style, and you just go to use it in a loop, and you don't even notice that you're getting the wrong kind of iterator back. So something like that could happen.

So again, it's not maybe the most definitive reason for why they couldn't add iterators as interfaces to Go, but it was definitely one strike against it, that like "Hey, if we're going to do this, we're going to be breaking our own standards for backwards compatibility." And that's not great.

So that was the situation for a while, that people had these proposals for how to do it, but there wasn't like one definitive way. I guess another issue that is maybe more definitively against it is a lot of times when you're doing an iteration, you create some sort of state. Like I was saying, every time you called next, you have to pick up that state and like pick up where you left off. And so you a lot of times need a close method as well, to say "Okay, you've been iterating through this file. Now close it, because we're done iterating through it." And so again, if you do it that interface-based way, you're going to have to have something to do with the close methods, and knowing exactly when they're called. And that one I think was a little bit stronger of an issue, of just like "Do we always call the close method at the end? Do we require people to like defer a call to close before they start? How do we know exactly when things get closed?"

\[16:17\] So Russ Cox looked at the situation and he had like a really clever idea. It's like one of those classic Russ Cox ideas of like sort of just looking at the problem a little bit orthogonally... And he said "Look, right now the range operator - it behaves differently depending on what the type of the value is." So if the type is a channel, then it pulls values out of the channel.

If the type is a slice, it gets one element at a time. If it's a map, it goes through in a random order. So what if the type of the thing at the end of the range statement is a function? So yeah, it's a little bit of a weird idea. Why would you put a function there? But that was like sort of the idea that unlocked it, of like "Oh, if we make it a function, then what we can do is we can call that function, and then the function can keep track of the state." And then when the function is over, the function can automatically close, through just a regular defer statement, whatever is going on inside of it. And so you end up with the typed signature of interfaces in Go 1.23. It's a little bit mind-bending. It's definitely something where the first time you see it, you're like "What...? What's going on?"

**Johnny Boursiquot:** There is a lot of funcs going on in there.

**Carlana Johnson:** There's a lot of funcs. It's a funky funky. Hey, dog, we heard you like functions, so we put a function in your function.

**Johnny Boursiquot:** \[laughs\] Exactly. Exactly. And three different styles of these range expressions - there's a simple funk that returns a bool, a func that accepts a k, returns a bool, and another one that accepts a k and a v and returns a bool. These are the initial set, or is there -- I mean, does it even make sense to think of like "Well, what if I needed three things?" Is it even the right way of thinking about this? Or is this sort of the canonical set, that is basically flexible enough to support all the use cases for range expressions?

**Carlana Johnson:** Yeah, that's a good question. So I'm not somebody who understands compiler internals really well, but the explanation I read was that the way that the language grammar is right now, it accepts either zero, one or two values in front of the word "range". So \[unintelligible 00:18:33.12\] So in terms of the way that the grammar already worked, it only accepted either zero, one or two values in front of range. And so then they were like "Um, that's enough. We don't want to extend it so that you could do three or four or a thousand, or whatever. We'll just say that it's enough just to let you do zero, one or two." And then if you do need something where it's like "Oh, I need to unpack five values" or something like that, then just return like a closure, and then inside the loop say value A, B, C, D, E are equal to, calling the closure, or whatever it is.

And yeah, that's one of those ones where it's a little bit inelegant too, that -- so because of this, if you want to accept a sequence, there's different kinds of sequences you can accept. You can accept a sequence that just has one value, or you can accept a sequence that's a pair of values.

**Johnny Boursiquot:** Yeah, the seq, and seq2 in the iter package, right?

**Carlana Johnson:** Yeah. So there's a new package called iter, and all it really has in it is just like a defined type. So we were saying that the signature for iterator functions is a little bit weird, because it's a function with a function in it. So if you don't feel like typing that whole crazy thing out, you can just say iter.seq, iter.sequence, and that is a function that takes a function which has an argument that is one type, and then returns a bool. And then there's iter.seq2, which is a function that takes a function and then it has two arguments, the key argument and the value argument, and returns a bool. And then there's the iter.seq0, which is just a function that takes a function that returns a bool.

\[20:20\] And so the way that all of these work is that if you're somebody who's a producer -- so if you're writing an iterator, what you do is every time you want to emit a value, you call that inner function and you say "Here's another value for you to consume." And then what you get back is a bool, a true or false, and the true or false either says "True, give me another value", or "False. I'm done looking for values. Do whatever cleanup code you need to do and just return after that." So again, it's a little bit mind-bending to learn it, but then once you've written one or two, it gets pretty easy to use as somebody who's writing it. And then as a consumer, you don't really have to think about any of this. Just say "Okay, I know that this returns an iter.seq", so that means it's returning a stream of a single value, or this is returning an iter.seq2, so it's returning a stream of two values... And I haven't even seen any places that do an iter.seq0 yet. But yeah, so as a consumer, it's pretty easy to use. You just put the thing in the range statement, and you get back values.

But yeah, as a producer, I think you have to write maybe two or three of them and then you'll get it, and it'll click, and you'll be like "Oh, okay, I know how to do this now." But yeah, the first time you see it, you're definitely like "Why are there functions inside of functions?" \[laughter\]

**Johnny Boursiquot:** For those who've ever used a database SQL package, for example - you are using this whole notion of an iterator already, right? Even outside of the 1.23 features and whatever it is. Because if you think about when you call the query method on a database value, what happens is basically you get a pointer that's moving forward through records from a table, from a SQL query. Not the entire table is not loaded up in memory. You have to literally call next to go on to the next record, move the points to the next record, and then you can process the results, do whatever you need there.

And then in the end, it's up to you to actually call the close, to say "Okay, I'm done with this query."

So if you've ever used a database SQL package directly, not through an ORM or something like that, then you are already familiar with using things in an iterator-like fashion. Now, the range mechanism sort of puts -- based on however you want to create your iterator, it puts the sort of the handling and the closing, the state tracking and all that stuff, it puts that in your hands by asking you to basically "Okay, provide an iterator function. Whatever you do in there, however you manage your state, however you clean up, whatever it is, that's all up to you... And just give the range function something that satisfies the seq and seq2 interfaces", or types rather.

**Carlana Johnson:** Yeah. So one thing that's a little bit funny is that the sync.map type, which has been in Go for - what does it say here? Since Go 1.9. So it's been in there for years and years and years. And it's just like a big map, but it's in sync, because the way that it works is that even if you have multiple goroutines accessing it, it's still going to be memory-safe, and it's not going to overwrite itself the way that if you tried to use a regular map and two goroutines, you would get like a race condition. So it has a method that's called range. And range has that same signature. It takes a function, that takes a key and a value, and it returns a bool. So you can actually use the sync.map.range method in a range statement in Go 1.23, even though they didn't make any change to the existing range method. They didn't change it to return the special iter.sequence2 type; it still is returning the same type it always returned. But just like the fact that it had this pattern in it means that it can be used as an iterator in Go 1.23.

**Johnny Boursiquot:** \[24:16\] Seeing the standard library sort of starting to change to take more and more advantage of these new concepts as they get introduced is kind of interesting to watch as well. Obviously, I'm sure the iterator package is going to sort of play a continued role in all of that, and you can already see some functions or some constructs in the language taking more advantage of generics and whatnot... So it's going to be interesting to see how the rest of the standard library starts picking up on this pattern. But beyond some of the, I guess, finer technical details that we've been talking about here, what is the sentiment that you are hearing on the street?

**Carlana Johnson:** So the sentiment... I definitely have read like one or two -- I mean, I don't even know if it's fair to say I read them. I saw like the titles of blog posts saying "This is too much complexity in Go", and I just sort of like tuned it out, because it's like "Look, once you accept generics, it was kind of inevitable that iterators would come."

**Johnny Boursiquot:** Right.

**Carlana Johnson:** Before generics came, it was really controversial, and I think it's true that once you add generics, you're letting the camel in the tent, right? And so now the camel is in the tent, and it's lying down for the night, and it's got its big nose under the thing... So the camel is in the tent. So if you were thinking that Go was getting a little bit too complex, this is definitely fuel for your fire. I definitely though -- I read another blog post; I wish I had remembered who this was by, but I read one last week where it was someone saying "I thought that iterators were too complex... But then I gave it a shot, I tried it out... The signature was really mind-bending at first, but then I wrote an iterator that adapted some existing code I had to work with the new pattern... And it was fine." Once you get used to it, it's not so bad.

**Johnny Boursiquot:** Right. Yeah, I think that's the sense I'm getting as well. There's initial sort of gut reaction to the syntax... I mean, looking at -- I think I've seen an example of somebody creating a backwards function, an iterator, and then trying to use that in a range expression. Basically, you have the func, followed by another func, with another func inside of it... It's like func inception. Reading it, at first you're like "Whoa, what is going on?" For people who have been looking at Go for for a long time and you see that, you're like "Go is going in the wrong direction. Why are we doing all this stuff? Why are we making this thing into a functional style language?" You see all kinds of sort of gut reaction to to that whole thing.

**Carlana Johnson:** I think the backwards iterator thing is actually a pretty good example. Like, somebody was trying to say "Oh, look at this backwards iterator. It's too complicated." But if you think about what does it take to write a backwards iterator with a Next method, the way that you would have to write it is you would have to -- you would have to keep track of where you are in the loop, and then on every try you're going to see... Well, first you have to decide you increment before or after, but then decrement it either before or after the call to next; either at the beginning of the call, or at the end of the last call... And then compare it to zero, and then... I don't know, it's just a little bit tricky. Versus the way that you do it with the Go 1.23 iterators is you just like write a normal for statement. So you write the for statement the way you would always write it, and then on the inside of it you call that iter function. And then if the inner function returns false, that means "Okay, I don't want any more values." So return, stop giving values. And if it returns true, then you go through the loop again.

\[27:56\] So from a writer side, again, once you wrap your head around the weird functions calling functions part, the weird signature, the actual code on the inside is much easier to write... Because again, you're just writing it in a normal for loop way, of like "I've got a for loop, I'm going to start with a value that's one less than the length, I'm going to break the loop when I get down to negative one, and i--." So like the normal three-part for loop. And the only hard part is -- yeah, the yield statement, you have to do "if not, yield value", instead of just saying something, I don't know.

**Johnny Boursiquot:** I'm not gonna lie, it's a little jarring at first, only because you're in the world of Go, and there's such an emphasis on simplicity and everything else. Personally, when the use for iterators comes up - and for me, that's going to be sort of the determining factor. Am I going to look at code and start identifying "Hey, you know what? This is a good place for an iterator"? Basically, once you understand how they work. Obviously, you're going to play around with it, get comfortable with it, and learn to recognize when you have an opportunity for using them. The same way you look at any piece of code and say "Hey, is there an opportunity for using generics here, for example?" There is going to be some situations where you need to recognize, "Is this a good place for the iterator pattern?"

And then you spend the time, you go look at the docs again, you get a refresher, and then you write the thing, and then you move on with your life. So it's not going to be something that I reach for sort of automatically because I'm trying to sprinkle it on everything, but it is going to be something that I need to be aware of, so that when I do come across an area of my code that could benefit from it, then I know that feature exists. I may have to find out "Hey, I've forgotten how to write these darn things. What signature do I need to satisfy? What am I doing?" I may have to read the documentation, but I do it, and then I move on.

**Carlana Johnson:** Yeah. I mentioned the x/net/html package before... So I've been writing, actually, just for my job lately a lot of code that deals with that... And the iterators have been really useful. Just because I have this tree of HTML nodes, and I want to go through and see if any of them match a particular pattern... And then if they do, I'm going to transform it in one way or the other. And just like writing all those helpers and things, having the iterator method exist just makes that a lot easier. And so yeah, I've been using it in work and it's been really good.

**Johnny Boursiquot:** Yeah, I think we'll be okay. I mean, yeah, the language is changing, and it's evolving... And again, once we let generics in the door, this was a natural --

**Carlana Johnson:** A little bit inevitable. So yeah, I mean, if you go back to when I was on the show a year ago, one of the things - I think it was a year ago - one of the things mentioned was the maps package came into the standard library, but it didn't have a keys function or a values function. And that was a little bit disappointing, because it was like "Oh, that's something you need a lot." As you want to do map.keys, you get back a slice, and then you want to sort that slice so that you can loop through the values in the map keys in order. So that's a pretty common need. But the reason that they held it back from the maps package at that time - because it had been in the experimental version of the maps package - was because they could see that "We think we're probably going to release iterators in the next year or something, so we don't want to release a sliced version of it now, and then release an iterator version of it like a year later, because that would be a little bit silly."

So that is like a nice thing... With Go 1.23 if you have a map and you want to go through the keys in a particular order, you can just call a range statement with slices.sorted \[unintelligible 00:31:48.23\] or whatever the name of your map is. So it's a pretty simple thing. It's just two function calls nested, and they're pretty straightforward what they're doing. It's like "Okay, the keys call is giving me an iterator of keys", and the sorted function is sorting those keys once they get out.

**Johnny Boursiquot:** \[32:09\] Right.

**Carlana Johnson:** So yeah, that's something that's helpful... Because I've definitely -- I mean, I know you probably have, too; I've written that code a lot of times. Like "I've got a map. I need to go through the keys in this particular order, for some reason, and here's all the steps I have to do to make that happen."

**Johnny Boursiquot:** Ooh, I'll tell you, this whole iterative business... But hey, again, we'll be okay. So obviously, that's not all there is to this release...

**Carlana Johnson:** Well, maybe just before we move on, I want to mention something that's not in the standard library... Because it's like jazz. It's like, what are the packages they leave out? \[laughter\] So yeah, right now the iter package is really simple. It's just basically defining those sequence types. And so somebody who's coming to this from a functional language, you're going to look at this and say "Okay, where is my reduce, my fold, the filter?" I'm gonna use the word map, but map not meaning like --

**Johnny Boursiquot:** The type map, right.

**Carlana Johnson:** ...a key-value pair, but the function map, where you're mapping from inputs to outputs.

**Johnny Boursiquot:** Yup.

**Carlana Johnson:** So yeah, people are gonna look at that and say "Where are those?" And so the answer is that there is a proposal for a package called xiter, which is going to be an experimental package that will have those. But I think really the answer is that for now, these are things that we want people to write on their own, write it for your internal company use, write it and put it on GitHub and see if other people use it... But I think for now the idea is to just let people write these for themselves, and then after another six months, another year of people using it come back and say "Oh, people use map all the time. We're not going to get by without having iter.map in the standard library." Or "People use filter all the time. It's sort of ridiculous that we don't have iter.filter." And those two, I think, are probably someday going to make it into the standard library. But then again, maybe not. Maybe people will say "Look, if you want a map, you can just put in a range statement, and have slices.append, and you'll get the values out that you want, and it's not a big deal."

**Johnny Boursiquot:** Right.

**Carlana Johnson:** So it could be that maybe those don't get added, because the language doesn't become more of a functional language kind of thing. So we'll see.

**Johnny Boursiquot:** We'll see.

**Carlana Johnson:** It's that slow and steady approach that is really what's impressive about the Go standard library and the Go community as it evolves; there's definitely a lot of thought put into things, of not just like "We came up with generics, and here are iterators in the same release", or whatever. "We came up with iterators, and here are 50 new iterator functions." It's like, there are iterator functions in Go 1.23, but they're ones where it's like "Okay, you're definitely going to want to iterate over a slice. You'll definitely want to be able to collect an iterator into a slice, and get the keys out of a map, insert values into a map", but that's really about it.

**Johnny Boursiquot:** Fundamentals.

**Carlana Johnson:** They're really just covering things that are absolute fundamentals, that there's no way that we can release this and not have those in it. Versus things that are a even slightly higher level, like filter, where it's like "Um... Do we need to have filter?" We'll see. Probably.

**Johnny Boursiquot:** Eventually. We will see, yeah.

**Carlana Johnson:** Yeah. I keep going back to that - where I'm using it in production, it's like "What do I need?" I definitely use the sorted thing, and I need something to collect all the items in a slice... But I also need something that is just getting the first value, because when you're doing DOM manipulation a lot of times what you do is if there's a value at all, then return it; if there's one value -- and if you don't find anything, just return nil. And so I actually use that a fair amount. But I don't even think that's proposed for the standard library, so...

**Johnny Boursiquot:** Yeah, the slow, deliberate approach... And if you need something, just write your own package. Like you said, put it put on GitHub, see... I think all that too basically gives the Go team signals for the things that the community cares about the most... And then saying "Okay, does this make sense to actually live in the standard library proper?" And I think that approach has worked well for Go for many, many years now... So I think continuing to take the same approach here is wise. Alright, so let's do a quick fire through some of the less contentious additions to the language...

**Carlana Johnson:** \[36:27\] Okay, I'm looking at our show notes, and the show notes is not less contentious... We'll see.

**Johnny Boursiquot:** \[laughs\] We shall see. So let's talk about telemetry. That's something that's been in Go for quite some time... Basically, how the Go toolchain is used. And that's an opt-in feature. Some telemetry signals have been -- you can capture them; that capability has been in the language for at least two or three versions now. So what's new?

**Carlana Johnson:** I might be misunderstanding this... So if we're wrong, somebody just like @ me on Mastodon... But I think that telemetry has been around for a while, maybe like a year or something, but it hasn't been in the actual Go tool itself. I think it's just been in gopls. So I think this is maybe the first time where it's in the actual Go tool itself.

**Johnny Boursiquot:** Go toolchain?

**Carlana Johnson:** Yeah, I think so. I could be wrong. So the telemetry is actually a very common feature in a lot of projects, whether they're open source or closed source... Just something so that you as the person who's maintaining the tool, you know how people are using it; you know what the popular features are, and what the unpopular features are. And when this was proposed, there was one of those big internet outcries of people saying "You can't just turn on telemetry", even with the ability to turn it off, which - it was always designed that like "Okay, here's the button you can press to turn it off." There was a worry that "Hey, what about my CI server, where I'm building secret binaries that are not for public consumption? I don't want Google to know about all of the binaries that I build, just because I accidentally forgot to turn off the thing."

And so even I think the proposed information that they were sending was it was supposed to be very deliberately minimized, and minimal, and they wouldn't ship your source code off to some random server... It was just like "What operating system are you on?" Really kind of basic stuff like that. But even with that, there was sort of an internet outcry. And so then the decision was "Okay, we're going to add telemetry, but it will be turned off by default."

So with the telemetry feature, I would encourage people, if you're just working on Go and you're not worried about it, if you're not like working in a highly secure --

**Johnny Boursiquot:** Super-secret.

**Carlana Johnson:** ...kind of situation... Yeah, I would say just turn it on, because it can't hurt. One of the issues that they reported that they said made them want to add telemetry in the first place is they found that on macOS a lot of computers were like just not caching builds, due to like some environmental mistake. It was basically just a bug. But Go compiles so fast that nobody noticed... \[laughter\] Nobody noticed that they weren't caching the builds, just because it builds so fast. And so if they had the telemetry, they would have gotten like a thing back saying "Oh, that's weird. On macOS the percent of builds using the cache is only 1%, when it should be 90%." So something like that would have revealed the bug sooner. But since they didn't have telemetry, it took until somebody was like "Huh, that's weird. This is taking 100 milliseconds, but it should only take five milliseconds."

**Johnny Boursiquot:** Right. Yes. It's so small. Yeah, it's so fast that you probably didn't even notice. Yeah.

**Carlana Johnson:** Yeah. So a little bit controversial, the telemetry... But I think that, hopefully, since it's opt out, people are going to be able to say "If you don't like it, just don't turn it on."

**Johnny Boursiquot:** \[39:56\] "Just don't turn it on."For the new stuff, obviously the new telemetry sort of subcommand for the Go toolchain you can -- and yeah, I'd encourage people to just... You know, when Go 1.23 comes out, you can simply do "go telemetry on", and that sort of opts you into sort of submitting some of those signals. And again, I think folks should definitely look at the documentation for the telemetry stuff, and figure out exactly what is being sent... But I think we all should definitely consider turning it on and sending those signals to the Go team, because that's going to help with the decisions on features and changes. Good stuff. So that doesn't seem as contentious as the other stuff...

**Carlana Johnson:** It's not as contentious as it was when they proposed it, I guess. When they proposed it, because they proposed having it on by default, that definitely was contentious.

**Johnny Boursiquot:** Right. Yeah. Let me see what else we got here? We've got link name. What is that? I don't even remember seeing this...

**Johnny Boursiquot:** So link name... This is another one where -- I don't know if this one is contentious, but it is something that if it affects you, it affects you. So in Go there's the concept of a package variable being exported, or not exported. And so we're all - if you're past the beginner stage, you're familiar with this, that you use a capital letter to say "Hey, this is a public variable. Anybody can import it", or you use a lowercase letter, and then it's like "Hey, this is internal. You can't import it." But there's actually a secret way to import it anyway, which is the link name.

So link name is just this idea of - you know, sometimes when you have like a complicated binary, you need to just like hook in some bit of precompiled code. And maybe it's from something from C, or something from Rust, or something from some other language. Or you have a DLL that you got from a vendor, and you have no idea how they built it, whatever it is. So there's different times when you need to be able to use the linker to just insert some binary code here from wherever.

And so link name is a magic comment that you can put into your code, that will let you link into different things. And people have been being a little bit naughty... They've been using it to link into the standard library and to access unexported variables and functions.

**Johnny Boursiquot:** Ooh, naughty, naughty.

**Carlana Johnson:** Yeah, it's a little bit naughty. So they've been using that to say "Oh, you guys don't export the runtime dot whatever but I need to know that" or "I feel like I need to know that, and so I'm just going to link into it." And so what they're doing in Go 1.23 is they're basically putting a list of "These are the things that you're still allowed to use link name on", because again, we have this really, really, really strong backwards compatibility guarantee. And even though people are doing something that's naughty, and you shouldn't be doing it, even though people are doing this bad behavior, we're gonna let them keep doing it, but we're gonna say "No new link names." So you can link name your own code, you can like name your own objects, but you are not allowed to use link name to Go into the standard library for any new functions that they add to it from now on.

And for old ones, there's a list that's in the Go tool project of like "Here's the list of things you're allowed to link name, and when you're allowed to link name them." And if you want to be accessing these secret variables you shouldn't be accessing, you should either open a proposal to make it public, or beg to get onto the link name list, because there's no more free link names.

**Johnny Boursiquot:** \[laughs\] So making it official, "These are the things that you you're safe to look for. Anything else, you're asking for trouble."

**Carlana Johnson:** I mean, people can always -- like it's a computer, so it's in there somewhere. So if you're really crafty, you can like use unsafe, and "Okay, I'm gonna load up the binary, I'm gonna use unsafe, I'm gonna inspect each byte until I get to the byte in memory that controls this thing. It must be in there somewhere, but hopefully people will not get to that level of desperation", although you never know.

**Johnny Boursiquot:** Yeah, I mean, unless that is your job. Unless you red team, and that's part of your job. Who knows, right? In any case, in any case... So we have what seems to be some efficiency changes to the ticker and timer types in the time package.

**Carlana Johnson:** \[44:22\] Yeah, these are just like some nice little quality of life improvement things. So with the time.ticker and time.timer functions - there's always been like a few little things where you have to like read the docs, and it says "Hey, just so you know, if you're in a loop and you're going through these timers really quickly, a problem that you can have is --" Let's say you have something where it's like "Okay, I want to have a timeout, and if this takes more than 500 milliseconds, then just abort." So what would end up happening if you wrote your code wrong is most of the time it goes through the happy path, but then meanwhile there's a whole goroutine out there waiting for that 500 milliseconds to pass. And then it finally gets to 500 milliseconds and it says "Okay... Oh, nobody wanted me. Alright, bye." And so you just end up with like all these expired timers just sort of waiting for their expiration to happen before they finally are free to clean up the garbage.

And there was a way you could work around that. You could defer a call to stop, or whatever... Just different ways of working around it. But now, just quality of life - don't even think about this. Ignore this whole thing. If you have any code in your project to make sure that the timers get cleaned up, that doesn't matter anymore. It'll just automatically clean itself up at the right time.

**Johnny Boursiquot:** Right. Yeah, which -- until I read the release notes, I didn't even know it was doing this. I was completely surprised.

**Carlana Johnson:** Well, the thing is, it was like, if you don't defer the stop, it will get cleaned up. It just won't get cleaned up until after the time has expired. So now as soon as it detects that nobody is waiting on the time, it's like "Okay, nobody's waiting for me. I'm just quitting."

**Johnny Boursiquot:** Right. Which makes sense.

**Carlana Johnson:** It's the Friday edition of go.timer.

**Johnny Boursiquot:** Alright. So there's a unique package... What is that about?

**Carlana Johnson:** Yeah, a very unique package. So there are two new packages in this version of Go. So the iterators thing is pretty big, but there's also two new packages. So the unique package is something that basically allows for interning, if you are familiar with that. That's something that comes up a lot in Java; I think that the strings either were interned before, or maybe they still are... But interning is just the idea that a lot of times, let's say you're parsing through a text file, and you want to read each word in the text file. And so each word is a little string, right? But an issue that you'll get is let's say the text file contains the word "the" 7000 times. Well, now you're getting 7000 copies of the same string. But you don't need 7000 copies of the same string, because they're all identical.

**Johnny Boursiquot:** Right.

**Carlana Johnson:** And so interning is just this idea of like going through and deduplicating, and like if the value is the same, then you only want one pointer to memory for it. So the unique package is just a new package that lets you do this interning efficiently with the garbage collector.

An issue you could get is let's say you're like "Well, alright, I'll just make a map, and it'll map from whatever my key type is - let's say a string - to like an empty struct or something like that. And so every time I get the string in, I'll just put it into the map, and I'll use that as my one memory location for it, and so I can deduplicate things that way." And that works fine, but the problem is the garbage collector, as long as the values are in the map, can never clean up that memory. So the only way to do a memory clean is just to delete the whole map and start over. Because as far as the garbage collector knows, everything in that map is something you're going to get back to later.

**Johnny Boursiquot:** It's still being used, right.

**Carlana Johnson:** \[47:51\] Yeah. And so the unique package lets the garbage collector work together with the package, and make sure that if there are duplicate values or deduplicated values that you don't need anymore, then it can go ahead and clean those up. So it's one of those ones -- it's pretty subtle. It's definitely something like following the issue for it that there's a lot of back and forth about "Well--" Weak pointers are another similar idea, of like a pointer to something where it's like the garbage collector is still allowed to collect this and take it away. So this sort of overlaps with the idea of a weak pointer. It's like a little pointer to something, but if you don't need it anymore, we can get rid of it.

**Johnny Boursiquot:** Right. Feel free to GC it. Okay. The structs package, the other unique package...

**Carlana Johnson:** Yeah, this one is interesting. We were talking off mic about how this package doesn't do anything.

**Johnny Boursiquot:** Right. \[laughs\] Yeah, I was looking at that and I'm like "What exactly is the use for this?'

**Carlana Johnson:** So the structs package is interesting. It's almost like it's like a future work sign. It's letting you know that "Hey, we're not doing anything right now, but we might want to do something in the future." So the structs package only has one type, and that type is host layout. And that is just a zero byte struct.

And the idea of the structs package is if you want to let the compiler know that "Hey, it's important for this particular struct to be laid out in the way that my host operating system - or host, whatever - expects it to be laid out, put this at the front." And so pretty much that's what Go does already.

I think the idea is that in a future version of Go, they would really like it if they could lay out structs more efficiently. Like, look at the struct and be like "You know what? It would be more efficient if we put all the bools together in the front, and if we put the slices over here, and get rid of the empty space..." Because one of the things with structs is if you have structs, the fields are different sizes; you sometimes have to put empty space in between them, so that the memory can all be accessed quickly and efficiently.

So it would be nice if you could do automatic struct field reordering, but you can't do that now, because if you do that, then anybody who's relying on the struct being laid out in a certain order is going to be messed up. So this is basically like a warning sign, like "Hey, we're not rearranging structs right now, but if you don't want to get rearranged in the future, just go ahead and put this in your struct."

**Johnny Boursiquot:** Right. Yeah, this whole struct packing business... I remember there was a time maybe five, six years ago, where there were a bunch of blog posts saying "Hey, if you lay out your struct in this particular way, you're gonna get more efficiency", and whatever it is. And I'm like "Why doesn't Go do this out of the box?" And I started thinking "Well, if we started messing around with the order of field, and things of that nature, anybody who is initializing structs not in a key-value style, you're asking for trouble", right? Because if you're relying on positional initialization for fields in a struct... Which is why I always teach against doing that; if you're gonna use a struct, always use key-value pairs... Because you never know; somebody could change two bools in fields, the position --

**Carlana Johnson:** Oh yeah, they switch it around and they're like "You know what? It makes more sense to blow up the planet first, and then have whatever \[unintelligible 00:51:00.02\]

**Johnny Boursiquot:** Save the puppies, or something. Yeah, exactly. \[laughs\]

**Carlana Johnson:** Yeah. So the planet gets blown up, but the puppies are saved.

**Johnny Boursiquot:** Exactly, exactly. Things of that nature. I'm lik, okay, so it sounds like the structs package is inching towards sort of more efficient, or some different way of lining up and doing some struct packing, I would imagine...

**Carlana Johnson:** Yeah. So I was reading through the proposal notes for this... I think the one area where this will make an effect in current versions of Go is if you're making a WebAssembly binary for that... I think there's something -- like, WebAssembly is weird compared to other platforms. Like, it doesn't have registers. It has stack values... And I don't know, I haven't looked into the details deeply. But it's weird. So for WebAssembly -- just because WebAssembly is so weird, if you want it laid out the way WebAssembly expects, you can use this struct to make sure that it is in that weirdo WebAssembly way.

**Johnny Boursiquot:** \[laughs\] You heard it here first. WebAssembly considered a weirdo.

**Carlana Johnson:** WebAssembly weird.

**Johnny Boursiquot:** The last piece here before we get into some unpops -- oh, actually you might have more things.

**Carlana Johnson:** Well, yeah I have --

**Johnny Boursiquot:** \[52:19\] You have some thoughts. You have some thoughts on --

**Carlana Johnson:** Well, I have one contribution to this version of Go, which again, it's like a five-line contribution. That's the Carlana special.

**Johnny Boursiquot:** Yeah, let's talk about that before we before we move on to the OS package. Yeah.

**Carlana Johnson:** Okay, yeah. So we said that with the iterators - not to go back to iterators; we can't escape them. We're returning over and over again... So the iterators - in Go 1.23 there are some basic just helpers for using iterators, but there's not actually a lot of use of iterators per se. You might expect "Oh, can we get a new version of the bufio scanner that returns an iterator?" Maybe it'll come in the future; it's not there yet. Or the one that I really want is a file walker. Because the file walker right now takes this weird function callback, and it's like... I don't know, I just hate writing it. Every time I write the file walker callback, I hate it. I would love that to be an iterator. But those don't exist yet.

But what did make it into Go 1.23 Is something in the reflect package. So I just opened the proposal because I saw that there was like a need for it. And basically, what it lets you do is if you have a reflect value -- so the reflect package in general lets you look at Go values of any type, and then figure out what the type is, and what you're allowed to do the type, and act on the type in different ways... So if the type is an iterator, now you have an easy and convenient way to call it using reflect.Value.seek, or if it's an iter.seq2, you can use \[unintelligible 00:53:48.03\] And then the reflect type now has like a canseq and a canseq2 method, so that you know whether you can call the seq methods on it or not.

So yeah, it's just like a little convenient way of getting an iterator back from this value. So you're inspecting it, you're like "Um... I think this --" Like, really probably the tricky part is going to be you have this function, and you don't know quite what the types are for the function, so that's why you're using reflect... And you're like "I know this is gonna be an iterator, or I think it's supposed to be an iterator. They're supposed to pass me an iterator, but I don't know what the types are." So this is just like a nice, convenient way of saying "Okay, whatever the type is, first I'm gonna see if it can seq by calling canseq, and then I'm going to get the sequence back by calling value.seq", and then just go through each of the values that way.

**Johnny Boursiquot:** Right. Yeah, that seems very useful. Yeah.

**Carlana Johnson:** Yeah. And so this was actually implemented I think now because they want to add it... So for the template package, the template package is also going to -- I don't think it made it into 1.23, but it's also going to get the ability to go through iterators in your templates, if that makes sense.

**Johnny Boursiquot:** That makes sense, yeah.

**Carlana Johnson:** So it needed to have this in already, so that you could add that to the template package as well.

**Johnny Boursiquot:** That makes sense. That makes sense. So the last one we're looking at here is from the OS package. What is this CopyFS?

**Carlana Johnson:** So FS is -- was that when I originally came on Go Time, was to talk about the file system embed? I think that was it.

**Johnny Boursiquot:** Probably...

**Carlana Johnson:** Who knows. So the file system package, so io/fs... So you can think of the io package as being like sort of virtual files; there's a virtual readable file, which is the io reader, and there's a virtual writable file, which is io writer. And then io/fs takes collections of virtual files and turns them into a virtual file system. And so os.copyfs, what it lets you do is to input a file system and then just copy all of the files out into wherever they need to be. So this is convenient. It also solves a problem of if you wanted to copy a bunch of - you know, not even virtual files, but like regular files that are on disk... Up until now in Go you've had to like either write the utility yourself, or find somebody else's package and import it to copy a directory... But now what you could do is you can just take the system directory, turn it into an FS using os.fs... I think that's the function that does it. But you turn it into an FS and then use the copyFS to copy the whole directory where you want it to be. So yeah, it's nice and convenient.

**Johnny Boursiquot:** Yeah. Okay. Alright, so this was packed with some goodies \[unintelligible 00:56:31.11\]

**Carlana Johnson:** That's a lot. Yeah. I was surprised. When I was going through the notes, I was like "Well, this is the big iterators released. They don't have time to do other stuff." And they're like "No, we're gonna put it two whole new packages."

**Johnny Boursiquot:** Nice. Nice. Nice. Alright, so I think it's time to talk unpopular opinions here... So let me get this jingle going...

**Jingle**: \[56:54\]

**Johnny Boursiquot:** Alright, alright, alright... What have you got for us?

**Carlana Johnson:** So I have to say, this is not my unpopular opinion, but maybe it should be... If you're a regular on Go Time, you need to have an Apple Notes, or Android notes file on your phone, called Unpopular Opinions, and anytime you think of one, you write it down. That's what I do. And so I've got --

**Johnny Boursiquot:** You've got a few.

**Carlana Johnson:** You know, I don't come on the show quite as often, so I don't have to like have quite as many... But I do have like a couple of spares at all times.

**Johnny Boursiquot:** Nice. Nice. Let's pull out one of those spares.

**Carlana Johnson:** Alright, so this is one of my spares here... It's two opinions about pencils. So I'm holding up this pencil for Johnny to see...

**Johnny Boursiquot:** Yup, yup.

**Carlana Johnson:** So this is a pencil I was given by my Japanese host mother. After I returned to America, we were corresponding, and she was saying "Well, is there anything from Japan you really want? Anything you miss?" And I say, "Can you send me some pencils?"

**Johnny Boursiquot:** Really? Are they that good?

**Carlana Johnson:** Well, they're nice. And what's really nice in Japan is that they don't use the number two pencil. They use the number one pencil. So my unpopular opinion is number two pencils are not as good as number one pencils. You should use a number one pencil. That's why it's called number one pencil.

**Johnny Boursiquot:** \[laughs\] Okay. What's the actual difference when you're using them?

**Carlana Johnson:** Yeah, so basically the scale is about how hard the graphite is... And a number one is just softer, and it writes so easily. And the downside is that the marks - they're a little bit blurrier; it's easier to like blur the writing, to smudge it... And you go through a pencil faster, because it's just melting off your pencil instead. But I love it. It's darker, it writes smoothly, it writes easily... Everybody should always use number one pencil. Number two pencils - they're crap; they're terrible. Every time I have to use one, I'm like "This is so awful." And then even the standardized tests, they all say "Number two pencil, or number one is good, too." And it's like "Oh my God, there's no reason to use number two. Just always use number one."

So that's my unpopular pencil opinion part A. And then part B is that you shouldn't put an eraser on the end of the pencils... Because what happens every single time?

**Johnny Boursiquot:** You use it...?

**Carlana Johnson:** You use up the eraser before you use up the pencil. And so you've got this whole huge pencil, and then like the little itty-grossy bit of eraser on the end... And that's awful.

**Johnny Boursiquot:** And now you end up having to have a separate eraser anyway.

**Carlana Johnson:** Yeah, you end up having to have a separate eraser anyways, yeah. So my solution is --

**Johnny Boursiquot:** Don't bother.

**Carlana Johnson:** ...use the eraser caps, get a number one pencil, with no eraser, put either a rubber eraser cap on the end, or just have like a separate, you know, square eraser next to it... That's the way you should do it. You shouldn't buy a number two pencil with an eraser on the end. That's just -- it's barbaric.

**Johnny Boursiquot:** Yeah. \[unintelligible 01:00:08.03\]

**Carlana Johnson:** Yeah. Japanese know about calligraphy. They know...

**Johnny Boursiquot:** They know the right way to do this. \[laughs\] Awesome.

**Carlana Johnson:** And you know, there's a lot of little strokes in those characters... So yeah, you have to be able to write it with a really nice pencil when you do it.

**Johnny Boursiquot:** \[01:00:23.19\] Indeed, that makes sense. I'm not sure if my opinion is unpopular... I think that's the -- everybody says that. Even me. "I'm gonna have an opinion, but I'm not sure if it's unpopular enough." So I'm starting to notice this trend with companies that have legacy software. In this age of AI that we're living in, they are starting to -- they've caught on to... I don't know if it's a trick, or if it's a business strategy, depending on who's looking at it... If they sprinkle a little bit of gen AI, maybe add a little bit of chat, a little bit of summarization or something, some thing AI in the app somewhere in there, whether it's a useful feature or not, who knows, maybe it doesn't even matter... And then slap the term "AI-native" on that legacy piece of software, then all of a sudden, revenue starts shooting up again. You've added a new shine right to your legacy product. Still does the same thing, but now you've got some LLM somewhere, generating text... But now you can charge more, because you're now AI-native.

**Carlana Johnson:** Yeah. I don't know, I feel like I'm at like an AI moderate. There are some people who are like real AI diehards, and then the extreme diehards are like "AI is going to destroy the world, but we have to keep going", and it's like "No." If you think it's gonna destroy the world, we should probably stop.

**Johnny Boursiquot:** Stop, right? No... No...

**Carlana Johnson:** But then there's the other side, are people who are just like "It's pure, spicy autocomplete. There's nothing to it." And it's like "Well, it's a little bit better than spicy autocomplete." The thing I've been using AI for a lot lately is just really extremely boring momcore cooking. It's just like "How do I make this casserole?" And I could just search for it, but the problem is all the recipe websites have now been junked up by AI.

**Johnny Boursiquot:** Right, right.

**Carlana Johnson:** They're all just like these terrible -- they're filled with ads, there's a million ads, all this stuff you have to wade through to get to the actual recipe, which probably wasn't even written by a person, it was just written by AI... It's like "Okay, I'm just gonna ask Claude..." "Claude, how do you make this casserole?" And then it's like "Should I substitute something in here?" And it'll just tell me, and it's fine. So I've been doing a lot of that with AI lately. It's just like "Claude, my ice cream came out too hard. Did I over --" And they're like "Yeah, you probably just put it in the mixer for too long." It's like "Okay, next time I'll only do it for 15 minutes."

**Johnny Boursiquot:** Yeah. You just gave me an unpopular opinion. I think recipe websites are trash.

**Carlana Johnson:** Oh, I don't know that that's unpopular. I don't know that anybody likes them. They're so bad now.

**Johnny Boursiquot:** They're awful.

**Carlana Johnson:** They're so bad. You have to read through like what -- and the thing is people complain about this all the time, so you would think that Google would be like "You know what - we really like people going to long web pages with ads... But for recipes in particular, so many people are complaining about how bad recipe websites are, we're going to send the SEO to the small websites, that don't have many ads, so that people will keep using Google." But it's like, no, they're not going to do it.

**Johnny Boursiquot:** Oh, boy...

**Carlana Johnson:** So those recipe websites are so -- I can't like look at them on my phone. I have this old phone, so maybe part of it's my fault, that I have a four-year old phone.

**Johnny Boursiquot:** No, no, even on new phones, it's terrible. Terrible.

**Carlana Johnson:** But it's like, my phone like grinds to a halt, and it's like... Yeah, it's so bad. So yeah, I'm always using Gen AI for the thing. So going back to your unpopular opinion - I think it's true; a lot of people are adding AI features where it's not clear that it's better to have AI in your app, versus just like "I have a second browser tab open to Claude, or to ChatGPT, or I'm running Mistral, or one of the local models." I don't know that it's better per se to have it integrated, at least the way that so far I've seen people integrating it... Because a lot of them they just feel like they're just slapping it on there.

**Johnny Boursiquot:** Bolt it on, yeah.

**Carlana Johnson:** Yeah. I don't know. I think that in the long run, it'll be good. As people figure out what works, and what doesn't work, and where it's helpful, and not helpful... But yeah, I think we're still in the pets.com era of generative AI, where they're like "We're gonna ship 10 pounds of dog food to people", and it's like, "That's really expensive, to ship something that heavy, from a small number of warehouses. You should start with something small and light, like a book."

**Johnny Boursiquot:** Like "No, go hard or go home."

**Carlana Johnson:** Yeah, go big or go home. Nowadays, in 2024, you can get 10 pounds of dog food shipped to you, and it's not a big deal. But that's because now Amazon has a warehouse on every street corner, and so the economics are different. Versus like "We're gonna start with 10 pounds of dogfood."

**Johnny Boursiquot:** Yes, indeed. Indeed. Well, that seems like a good place to wrap up the episode, Carlana. Always a pleasure having you on to review --

**Carlana Johnson:** Yeah, thank you for having me back again. It's always fun to come on and talk about what's new in Go.

**Johnny Boursiquot:** Indeed.

**Carlana Johnson:** And it's like this slow and steady improvement thing. It's really what's fun about Go, is like watching how they set down markers of like "We're not adding maps.keys. We're gonna add iterators, we think, probably, maybe..." And then it happens. So it's always exciting.

**Johnny Boursiquot:** Slow and steady. I like it.
