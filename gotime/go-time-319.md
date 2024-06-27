**Kris Brandow:** Welcome to Go Time. I'm your host, my name is Kris, and today we're going to be talking about some of the news surrounding Go. One collection of articles. The last time we did this we got some really good feedback from you wonderful listeners, and you seemed to enjoy that episode a lot... Not sure if there will be as much laughing in this episode, but we can try. We can see. Joining me today as co-host is Ian. How are you doing today, Ian?

**Ian Lopshire:** I'm doing well. I do think we might miss Johnny's laughter, but we'll do the best we can.

**Kris Brandow:** Yeah. We'll still try to keep it fun and interesting and hilarious as best we can. So yeah, first up, from our nice list of articles here, is an article titled "Go evolves in the wrong direction." And I guess the summary of this article is that the author feels that Go is getting more complex, and dislikes this added complexity. And the most notable thing that he points out, or I guess a couple of notable things he points out is the addition of generics in 1.18, and then the upcoming addition of iterators in 1.23. So Ian, what are your thoughts on this?

**Ian Lopshire:** Yeah, I don't know... I guess I do know. I think I kind of disagree. I do think it's getting more complicated. I don't think that's something we can say isn't happening. But generics I think was a needed feature, and I think it's worth the added complexity, especially since I think in a lot of everyday Go you don't even notice it.

And then the range over function iterators - I'm kind of skeptical about this, but I'm also really excited. I've played with it some, and the function signatures are hard, and it kind of is confusing... But having a standard way to iterate is something that I've wanted in Go for ever. So yeah, I don't know... What do you think?

**Kris Brandow:** I mean, generics - it did add a lot of complexity to the language itself from like a specification prospective... But yeah, I haven't really seen them like abused, I haven't seen them make things worse in any way, so I think it's... For the everyday Go user, I don't think it added much complexity. I think it just added complexity if you want to implement Go, or if you want to maintain Go. And there's all sorts of very complex things about that. So I don't know if that complexity argument applies as much... And I think there have been some useful productivity gains for some things. I use the slices package all the time now; it's just there, and I'm like "Oh, I can just do this instead of having to remember that wonky syntax that I'd always have to look up, because I could never quite remember it unless I've been typing it a whole bunch lately." So it's just nice to break out the slices package and be like "Oh, slices.this, or slices.whatever." Especially slices.clone. That is one that I always was like "This is terrible. I don't want to have to do these three lines of nonsense to get a clone slice."

So I think on that aspect I don't really agree with him that generics have made the language considerably more complex... As far as iterators, I'm not really sure how I feel about this. On the one hand, I really like this idea. I see his argument around not liking the potential complexity that can come from looking at a line that says \[unintelligible 00:05:09.03\] and have it previously been like "Okay, well, that's like a static thing. That's not going to like block for a long period of time, trying to get the next iteration of something." And now that could be a thing that happens, because you might be making a network request in there, or something like that. But I think that's just like a thing we have to get used to over time. It's more just like a regular for loop with a function in it. Sometimes that function might be a little hidden... But I do think the tooling we have now will make it blatantly clear that this is a function; this is an iterator, powered by a function, and you've got to dig into that somewhat to see \[unintelligible 00:05:45.15\] we're going to dig into that to see what might be the issue at hand.

\[00:05:54.11\] But having designed things that have iterators in them before, I think this will be much better overall, because I think that is a very inconsistent pattern across not just the standard library, but across Go packages in general, of like "Oh, do you have a next function that just returns okay if there's something you can get next?" Or do we have a thing that just returns like an object and an error, or an object and okay...? There's just like so many different patterns and it's hard to know which one you should use in a given circumstance... And I think this at least helps out with some of them, where you just want to use the kind of like object okay pattern, and then you probably have like a separate error function, and then you have that kind of standard -- sort of like what the database SQL package does, where you check the error afterward if you get kicked out of a loop.

So I think it will be a useful addition. It adds a little bit of complexity, yes, but I don't feel like it adds such a tremendous amount of complexity that it's going to be difficult for new people to learn this. I think it's gonna be more difficult for people that have been writing Go for a long time to adjust to this.

**Ian Lopshire:** Yeah, I think it might be a lot like generics, where you don't see it a lot in every day, but when you're implementing libraries, you're going to be using it. So I think it could end up being like that.

**Kris Brandow:** Yeah, I do think like the push/pull semantics are a little wonky... Like, I don't know how I feel about them as far as like trying to implement it and trying to get all of that right. We'll have to see, I guess, how it all shakes out. I haven't looked at this in a while either, since it kind of first came onto the scene, so I'm not sure how much it's shifted from how it was before... But - I mean, in general, I don't see how this necessarily makes the language worse, or makes it immeasurably more complex compared to how things were before. Outside of that one instance of like now you look at a \[unintelligible 00:07:48.09\] statement and it could do something arbitrary in there, it could cause side effects, it could like pause for a long time... Outside of that, I don't know.

There was this kind of debugging argument that he was making, that I was sort of following, but I'm not really sure how that's gonna shake out in the actual implementation as far as like when you look at it, if it's gonna look -- I don't think it's gonna look this weird when you look at it, the iterators. But...

**Ian Lopshire:** yeah, I think that's also something that can be worked out in the error messaging and the stack traces, right? There's also an argument here that it implicitly transforms returns, continue, breaks, defers, all of those... And I understand that that does add complexity when you're thinking, but as far as writing code, I think that makes it a lot more simple. I don't have to learn how to do these things outside of the actual keywords. Like, trying to continue inside not like a custom iterator now is kind of a nightmare.

**Kris Brandow:** Yeah.

**Ian Lopshire:** And there's been so many times I'm like "I would like to continue here, please." So I honestly do think it's going to be simpler overall, just being able to use your normal semantics and keywords.

**Kris Brandow:** Yeah... Because I was using the Goldmark package the other day, and it has like this AST \[unintelligible 00:09:03.13\] and you have to like return special things to be like "Oh, continue" or like "Exit", or whatever. And I was like "This is kind of wonky. I don't know if I like this as much." And then also, error handling sucked a whole lot, and I think it's kind of easier to apply your own error handling if you can just do a regular for loop here, or for range loop... Because you can just have the capture error variable that should still work... Because I think it should work. I don't see why it wouldn't work.

**Ian Lopshire:** And there's also the argument that this is one more way to iterate. I think that argument kind of falls flat, because it's not like there were standard ways to iterate before. So we're not introducing a new standard. It's just, we're agreeing on a pattern.

**Kris Brandow:** Yeah, we're making the attempt to consolidate, or at least give people a predefined path to go on, and not just like "What package have you been using?" and deciding how you want to design your iterator based on what packages you've seen. Now you have an actual "Well, this is how you can canonically do it in the language." And you can still go do it another way if you wish, but this is how the way people are probably going to be most familiar with.

**Ian Lopshire:** \[00:10:17.17\] Yeah. So to sum it up, I'm not sure it's going in the wrong direction...

**Kris Brandow:** Yeah, it's a very bold and broad statement... Like, "It's evolving in the wrong direction..." I think the only direction that languages can evolve, especially if you want backwards compatibility guarantees, is to become more complex over time. I think through that complexity too you can gain simplicity. So I think there's a weird argument in here about like yes, we have to keep all of these old iterator styles, but perhaps not forever; we have ways of deprecating things, even in the standard library now... So it gives us a path toward all of the iterators eventually looking the same, or being able to like convert one iterator to like this style of iterator in the future, with some like glue code, or something.

So it feels like it will have the eventual effect of making things more simple, in the same way that generics had the effect of making things more simple... For example from the slices package. Right now you don't have to implement your own slices package, or implement all these functions all of the time; you don't have to write those same lines of code that are kind of confusing if you don't understand that pattern already. I think most people, if you see the word slices.clone, you're like "I bet this clones a slice", right? It's very straightforward what that means.

So yes, I think on the small scale it might add complexity to the language, but I think on the large scale it's making the language go in a good direction, toward more of the simplicity that we want. Because yeah, if you don't want to have any added complexity, then you just can't add anything to the language, and that is also a bad thing for the language.

**Ian Lopshire:** Yeah, I like that small scale versus big scale. Like, it's making the ecosystem simpler, not the language simpler.

**Kris Brandow:** Right. And there's a somewhat strange argument at the end here too, where he talks about "Oh, we should have more SIMD instructions and things like that, because Go is losing in the performance space to Rust." I mean, we can talk about this with the next article, but I don't really know if like Go is that great of a language for performance-critical things. It's not terrible for performance-critical things, but I don't think that's like the target that Go is usually going for most of the time. When I think of Go I don't think of "Oh, I need like low-level, raw performance." I think "I want a language that allows me to maintain large codebases, that do a whole bunch of different things, and I want to be able to actually maintain it with a somewhat large team of people."

**Ian Lopshire:** Yeah. I do think that's a good transition to the next article...

**Kris Brandow:** Yeah. So this one isn't so much of an article as it is a post on Reddit... And someone asking \[unintelligible 00:13:07.27\] "What software shouldn't you write in Go?" And interestingly, I feel like the people that commented, like some of the top comments, I'm just like "You're all oddly wrong." Most of it is about "Oh, garbage collection is a barrier." One of the comments on it says "Garbage collection's a barrier for some hard real-time processes." And there was an interesting other Reddit thread I've found... It was about the same sort of thing of like "Well, why do we keep saying that Go is bad at real time?" And people basically said "What do you mean by real-time? What type of real-time constraints are you talking about?" And it's a very insightful, just like -- you know, real-time doesn't necessarily have to mean "as fast as possible." It could also just mean "at a fixed interval."

\[00:14:06.24\] But also, we're not in the Go -- certainly not in the pre-Go 1.5 era, or in the even 1.5-1.6 era, where the garbage collection pauses where 10 milliseconds out of every 50 milliseconds. Now it's sub-millisecond max garbage collection pauses. I think it's like 100 microseconds is where they've gotten it down to for the longest worst case garbage collection pause... Which for most real-time systems seems to like -- that does not feel like it makes a large difference for most people as far as GC is concerned... So I don't really buy that whole argument of "It's bad at doing things that need to be real time." But what do you think?

**Ian Lopshire:** I mean, I get what they're saying... I'm not gonna write some embedded firmware in Go, that needs to recalculate something at 100 hertz. It just doesn't make sense anyways. But yeah, I think people are still kind of confused about the "Stop the world" GC stuff.

**Kris Brandow:** Yeah. And that also goes to a thing I always remember of like you don't have a garbage collection problem, you have a garbage problem. If the garbage collector is getting in your way, it probably means that you have done something pretty awful with your memory management, and you need to go fix up your memory management. Garbage collection does not mean you don't do memory management, it means you don't have to write as much of the code to manage it as intricately... But you still have to do memory management.

**Ian Lopshire:** Yeah. I also saw a lot of arguments on here "You shouldn't write GUIs with Go." And I think I would tend to agree with that. That's just not what I would reach for. I think there are some decent libraries now, but... Yeah, I don't know.

**Kris Brandow:** Yeah, I think GUIs is -- especially when the native platform languages and APIs are like just so strong, I think it's kind of weird... I guess it depends on what you're trying to do. If you're trying to do like an open source project and you don't want to write three at least different platforms' worth of GUIs, maybe you can do it in Go... But there's also like other tooling that can do that for you. Things like React Native, or even just using WebViews to do most of what you want and then writing it in JavaScript, in HTML, in CSS... So yeah, I would say GUIs are a little bit of a weird thing. I probably would try and learn the languages of the platforms I want to use, over just like kind of use Go and shoehorn it for all the different types of platforms I might be using.

Another interesting one here too was like the deeply-nested JSON argument of trying to parse that out... And I think that comes down to like we don't have a culture right now of people are implementing their own JSON decoders; people usually just want to throw a struct at the decoder and be like "Please place all of the things into this nicely. Thank you." So yeah, I think without having better custom JSON decoder building tools, those deeply nested -- or really just deeply-nested any type of like that configuration \[unintelligible 00:17:12.08\] language, whether that's YAML, or JSON, or maybe even TOML, it gets pretty hairy and annoying when you're trying to do some things in Go if you haven't built up that custom encoder or decoder.

**Ian Lopshire:** Yeah, I think I agree with that. On the same line of decoding/encoding stuff, it's not in the article, but I would not use Go to write anything that interacts with like canonical XML, SAML, anything like that. I've gone down that path, and it is -- you end up calling into a C library to make your XML canonical, and...

**Kris Brandow:** Oh, yeah. If you need to do canonicalization, that's tough. I think XML in general is fine. I worked on an XMPP server for a few years, and Go was not the issue at hand that we had; or Go parsing XML. It was pretty simple.

**Ian Lopshire:** Yeah, I haven't had as much issue parsing XML with Go as writing XML. Go just doesn't handle namespaces well, it doesn't handle other XML features well...

**Kris Brandow:** \[00:18:16.04\] Yeah. I feel like that's probably also part of just like we don't really have good libraries for doing that. If we don't have good libraries for doing that, then it's kind of rough to do it. I guess that's the same argument for like the deeply-nested JSON, or really any of these encoding/decoding things. If we don't write tools that make it easier to do those things, then it's just going to wind up being not great.

**Ian Lopshire:** Yeah, I don't know if you've had to use Soap with Go before. I would say avoid it.

**Kris Brandow:** I mean, I try to avoid Soap in general, as a whole.

**Ian Lopshire:** Sometimes you don't have a choice. You don't have a choice.

**Kris Brandow:** Yeah... \[laughs\] It's true. But yeah. Oh, God...

**Ian Lopshire:** I think my favorite comment on this whole thread though "Excel macros should not be written in Go."

**Kris Brandow:** Ah, yes. And then someone disagreed, and they're like "I'd rather write it in Go than Visual Basic, or VBA." I'm like "Okay, yeah, I mean..."

**Ian Lopshire:** True, but no.

**Kris Brandow:** "Sure..." I mean, really, no one should be writing Excel macros. Those things are dangerous. But... Yeah.

**Ian Lopshire:** I don't know, the custom function in Google Sheets - real nice sometimes. But that's just JavaScript. I don't even know what Excel macros are written in. Is it VBA only?

**Kris Brandow:** I think so. I don't know, I think you can write it in a whole bunch of different Microsoft languages, but it's just... Yeah, I guess it's mostly VBA, especially if you want it to be cross-platform. If you only care about Windows, I imagine you can write it in like C\# or something, maybe. I have no idea. I don't know how Excel macros work. I don't write them. I like spreadsheets. I don't like spreadsheets so much.

**Ian Lopshire:** Job title: Excel macro engineer.

**Kris Brandow:** That could be -- I mean, well, the world runs on spreadsheets, so I'm sure there's many a people who have many a custom macros to make everything work. But yeah, anything else on this list of responses? Oh, someone said they write everything in Go... Oh, God...

**Ian Lopshire:** I'm actually trying to answer this -- like, is there a class of software you should not write in Go? I don't think there is.

**Kris Brandow:** Yeah, I don't think there is. I think there's software that might be slightly better to write in another language, but... And this is kind of like a thing I've been thinking about a lot lately. It's probably another podcast idea, or another podcast episode idea... But we can also talk about if we have time, where I've been reading a bunch of Leslie Lamport's work, mostly because I haven't read the Paxos paper in a long time, the Part-Time Parliament, and I think I was looking for something else that he had written, and I came across -- basically, Leslie Lamport has this very long list of all his written works. It's, I think, currently 193 works long. So he's written a lot of stuff over his career. And in the kind of blurb he writes about Paxos in the Part-Time Parliament he's like "Oh, this is a simple algorithm." He's like "I don't understand why people don't understand this algorithm."

So essentially, I read that paper, and then after reading that paper I was like "Oh, this is kind of simple." And so I went through and got a whole bunch of his other papers, and I'm like "I'm gonna read all of these." And there's one of his papers where he's talking about teaching concurrency, and kind of like his suggestions for how we should teach concurrency to students, specifically computer science students and computer engineering students... And there's this really great line in that paper... Actually, let me pull it up, so I can read it correctly. And he's talking about like computation here. So he says "How should we describe computations? Most computer scientists would probably interpret this question to mean "What language should we use?" Which I think is kind of the question we're asking here, of like "What things shouldn't you write in Go? What things shouldn't you use this language for?"

\[00:22:03.24\] And then he says, "Imagine an art historian answering "How would you describe an impressionist painting by saying "in French"? Which is just a hilarious line, and just -- it's one of those deep and subtle cuts at us as an industry... Because it's true. We talk about "Oh, you shouldn't use that language to build that thing." It's like saying "You shouldn't write that novel in French, because it's not a good-- you should write all novels in English, because English is a good language for writing novels." And it's like, we should not be thinking about things in that way. And kind of his point is we should be talking about this stuff in the form of concepts. And I think that's true of this discussion as well, of like, I don't think that there are things that you -- there certainly aren't things you can't write in Go if you can write them in any language. Go is a Turing complete language, which means it's equivalent to all of the other languages. There might be missing APIs, you might have to go do some FFI stuff into C to make it work, or do other weird assembly stuff... But there's not like a fundamental thing that you can do with Go and can't do with another language, or you can do with another language and can't do in Go.

So I think it's more about the concepts that matter, and can you express those concepts well in Go... But also, there's the whole other argument as well of just like - I don't know if you're doing a startup or something like that, or creating a project... Is Go your strongest language? That's probably the language you should write that thing in.

For example when we were talking earlier about GUIs, it's like, okay, if you need to build a whole bunch of GUIs and Go is your strongest language, perhaps it's just better to make a slightly uglier GUI and learn something like Fyne, so you can just implement a GUI with that, and then have the application you want and then move on, instead of having to learn a whole new language just to build a GUI. It's like "Oh, I've gotta learn Swift, and C\#", and I guess C++ for Linux... I don't know what Linux GUIs are made in, but... Yeah, go learn three other languages to go express this same concept seems kind of silly. Like, you want to write this same story, but you need to write it in like four different languages now. That feels a little weird if you could just write it in \[unintelligible 00:24:17.24\] and it could still be accessible to everybody.

**Ian Lopshire:** We're right back to the "Ask a question in software engineering", and the answer is "It depends."

**Kris Brandow:** Yeah, yeah. I mean, I guess the answer to this is "What software shouldn't you write in Go?" it's mostly just like "I don't know, just write it in Go." If you know Go, Go is your strong language, write it in Go. And if that doesn't work for some reason or another reason, then Go write it in something else. But I think it's -- yeah, I don't think there's any broad answers that work for this. There's no broad answers that will fit into like a Reddit response that is reasonable to read... When people say "Can't build real-time systems in it." It's like, no. Nuance is required there.

**Ian Lopshire:** Like, if I'm writing Spark jobs, I'm not gonna write them in Go, though... Because it's Python or Scala, right? That's the supported languages. I think there's an argument for tooling here. Don't shoehorn Go into things where there is no tooling, just because you want to.

**Kris Brandow:** Yeah. I mean, it also depends on your goal, though... Because if you have that argument, then there will never be tooling for that thing, in that --

**Ian Lopshire:** Yeah, fair. Fair.

**Kris Brandow:** If no one does it, then there's never gonna -- it's not gonna be in that space. That creates those artificial barriers. And I think even thinking in this way is indicative, I think, of the problem that Leslie Lamport was bringing up in that conversation, or in that paper, which is like, if we think in the framing of certain languages are good for certain things, then we're not really thinking about the problem itself. We're thinking about this other colored version of the problem, of like "Okay, this problem in Go." And then now if we go to another language, you have to solve that problem in a different way in that language... Which is -- I don't know, not the best of situations. But that's a larger, industry-level thing we've got to solve for.

**Ian Lopshire:** \[00:26:16.07\] Yeah, I agree with you there... But I think there's some leeway on both sides. At the end of the day, you've got to make money, you've got to get stuff done.

**Kris Brandow:** Yeah.

**Ian Lopshire:** You've gotta get stuff done. I don't know...

**Kris Brandow:** Yeah... I guess like, once again, the big view versus the little view, from an individual person's standpoint, or a small company's standpoint. Yeah, there's probably some things you shouldn't write in Go, and you've got to make that trade-off. But it's also a different type of question. It's different to pose a question to a company versus toward an individual, I would say. So yeah, you're right... It depends. It depends.

**Ian Lopshire:** It depends. \[laughs\]

**Kris Brandow:** Lord...

**Ian Lopshire:** The answer to all the questions, it depends.

**Kris Brandow:** Yeah. There's a whole series over on Changelog. I think it's a Changelog & Friends series. It depends. I did an episode, it was fun. There's many more episodes.

**Ian Lopshire:** I have not listened to that yet. I'll have to check it out.

**Kris Brandow:** You should all go listen. They're good episodes. They're fun. Alright. Do we have anything else to say on what software shouldn't you write in Go?

**Ian Lopshire:** It's a choose your own adventure. I do think that leads interestingly into the make files written in Go. Alternatives to make written in Go. Should you write an alternative to make in Go? I think probably yes.

**Kris Brandow:** Yeah. Yeah. I mean, also make is for a number of reasons pretty awful. It's like standard, which is nice, but that whole only using tabs thing, and so many other weird syntactical things about make and makefiles is just exhausting... \[laughs\] For well established projects, or I think ecosystems like C, that have this more baked into them, it makes sense. But for Go, make files always feel so awkward, weird, in Go. So I think I've always like reached for some other alternative.

**Ian Lopshire:** Have you used any of the alternatives mentioned in the article?

**Kris Brandow:** I think I've used Mage a few times. I don't think I've ever used Taskfile. Also, I hate YAML, so I don't think I want to use Taskfile.

**Ian Lopshire:** Yeah, we use Mage pretty extensively where I work... And I think one of the great parts about it is I don't have to learn all that weird... Extrincicities? How do you say that...?

**Kris Brandow:** Oh, extrincicities. Yeah.

**Ian Lopshire:** ...of the AWS CLI for doing stuff. Go has a great AWS SDK, so we can do all of our automated AWS stuff in a Mage file, and it just works. It's amazing. I would definitely recommend --

**Kris Brandow:** That's nice. Yeah, and just being able to keep everything in Go sounds nice. I mean, yeah, having the full power of a full actual Turing complete language is nice, and not having to do -- kind of as the author points out, all of this kind of bending over backwards to make stuff work with the shell, and the weird version of the shell that make has.

**Ian Lopshire:** Yeah. Being able to do real for loops is real nice. Not that the shell can't do for loops, but it's -- I mess it up every single time I try.

**Kris Brandow:** Well, real for loops, and logging, and execution of parallel commands, and a whole bunch of other stuff that's just like "Ah, this is easier to do in Go than it is to do in other things." So yeah, I mean, I'm fully on board with things like Mage. Once again, when it comes to Taskfile, I don't really see -- I guess if you don't want to learn make, the syntax of make, and you're happy with YAML, then it's good... But I just really do not like YAML. There's just so many oddities.

\[00:30:01.10\] I was writing YAML inside of Markdown the other day, and it was like -- I was getting some weird error from it, because -- oh, because I was writing it, and it was like converting my tabs to spaces, or spaces to tabs; I don't know which. But the YAML parser didn't like the fact that it was not using the correct spacing type, and it blew up with some weird error. And I was like "This is obnoxious. I don't like this." Whitespace-important syntax is not what I enjoy in life. So I would probably just sit down and use make. Or really just use Mage, or something like that, instead of Taskfile. But I'm sure plenty of people like Taskfile.

**Ian Lopshire:** Yes. If we want to diss TOML or YAML some more, I think one of my most frustrating days ever was because YAML was not considering something a string I thought was a string. So you don't have to quote things, right? But every once in a while, that'll bite you.

**Kris Brandow:** Yeah, yeah... It's a messy markup language, for sure. I get why it was created, but there's a lot of things we create that sometimes are bad ideas. A lot of things in this industry we create are bad ideas, but... But yeah, I think Mage is cool. I've used it a few times in the past. If you haven't checked it out, you should definitely, listener, go check it out.

**Ian Lopshire:** Would recommend...

**Kris Brandow:** Yeah, especially the fact you can have like a directory of files, so you can kind of like properly manage the structure of it and have your own little build system within your codebase. I think it's helpful.

**Ian Lopshire:** Yeah. We've actually used Mage inside of GitHub Actions too, to help manage some of the build and test scripts. And it works really well.

**Kris Brandow:** Yeah. It's like you're building your own little build system, which if you're only writing Go, that's a nice little thing to have. Yeah. Yeah, I don't know, is there much else we want to say on good old Mage, or good old -- what are these, alternatives to makefiles?

**Ian Lopshire:** It's all I've got. \[laughter\] Do recommend. Check it out. If it works for you, it works really well.

**Kris Brandow:** Yeah.

**Break**: \[00:32:06.22\]

**Kris Brandow:** So the next article we have is titled "The long overdue problem coming for some people in Go 1.23." This is kind of like an in the weeds article. This is talking about a specific compiler directive called go:linkname, that the Go team is starting to really lock down...

**Ian Lopshire:** Yeah. Should we explain what it does?

**Kris Brandow:** Yeah, yeah. I was about to explain what it does. So go:linkname effectively allows you to reference an object or a symbol or something like that, that you would usually not be allowed to access. For example, you can use it to access a an unexported variable or function in another package. So if you have some package, that has some function foo, that would only usually be able to be called from within that package, and you have another package, you can use this go:linkname directive to be like "Actually, I want to be able to call foo from inside my package." Which obviously, it's necessary for the Go team and for Go to have this, for a number of reasons, but also is kind of not great, because it means that now the things you meant to be private are not really private anymore. You just kind of reach in and grab them and take them out and use them.

**Ian Lopshire:** Yeah. A couple of notes on that. You do have to import \[unintelligible 00:37:15.27\]

**Kris Brandow:** Right.

**Ian Lopshire:** So the Go team is telling you "Hey, this is going to break."

**Kris Brandow:** Yeah. So the changes that they're making is that you can no longer just go in and grab something out of any package. In the next version of Go, 1.23, only things that are explicitly marked as you being allowed to do this will allow you to do it... Which I just find to be kind of a funny thing, because this is just like another way of exporting things...

**Ian Lopshire:** Yeah, it is a little bit weird.

**Kris Brandow:** Yeah. I get why we're doing this kind of gymnastics to make this happen, but it's just kind of hilarious.

**Ian Lopshire:** You see it a lot in the standard library pulling in stuff from the runtime, right? Lik, if they're gonna lock this down, I wonder why there isn't just a runtime package that is used to pull those things in? There's probably a good reason, but I don't know why.

**Kris Brandow:** Yeah. And I think this directive also was probably intended to be used for something else, and people found they could use it for this thing and they're like "Oh, I'll just use it for this other thing."

It was also interesting, that particular situation of why the author kind of stumbled upon this was because of the \[unintelligible 00:38:29.22\] package that needed to get the default cipher suites for TLS 1.3... And in Go there was an explicit choice made that those cipher suites are not configurable. But also because of "Does your hardware support AES? Does your client want to use AES?" and a whole bunch of other things. It's not like the default cipher suites might not even be like an actual stable thing that you can reference...

An interesting little quirk of this quirk is that the reason why it's not an exposed variable is because it's an extremely complex thing, that can't really be determined until runtime, and still might shift at runtime. So it winds up being like this kind of odd, odd space, and that's why it's not an exported thing... But yeah, just a little bit of weirdness. This whole situation is just weird overall.

But yeah, it's like a little thing that's gonna start breaking random things. I'm sure there's tons of just people that have used this as some sort of hack to get around something, and now stuff is just gonna start breaking, and people are gonna have to figure out how to fix that.

**Ian Lopshire:** Yeah. And the proposal to do this I think is really interesting, because Russ Cox literally says "Hey, this is gonna break stuff, but it puts us on a good path forward, so it's worth breaking those things", which I think I agree with.

**Kris Brandow:** Yeah. I mean, once again, we probably shouldn't be able to just reach into other packages, and tinker with their unexported things. That's not generally what we want to happen in the language. But yeah, I don't know if I have much else to say about this article. Have you got anything else?

**Ian Lopshire:** Not really. I just think it's interesting that it exists, and that it works outside the standard library.

**Kris Brandow:** \[00:40:16.29\] Yeah, I mean, a lot of these directives are like interesting little tidbits of like -- once again, I see why these things are necessary. I think go:linkname is also used a lot when you want to refer to something in assembly. So you'd have like a function that's implemented in assembly use this directive, and then it goes and grabs the assembly code. And when the linker is doing its thing, it connects them together, even though there's no Go version of that assembly. So I imagine that usage of it will be left alone. But it's interesting that this ever worked, and that this continues to work.

**Ian Lopshire:** I think an interesting thing also for this proposal to lock it down - the 1.23 iterators introduced coroutine functionality for iterators, right? So you don't have to call out to a separate goroutine, and in sync back up... And they say this will not be able -- these new coroutine functionalities will not be able to be link-named, now or ever. So they've shut that down with this change, too.

**Kris Brandow:** Hmm... Fascinating. Yeah, little things that probably affect a very small percentage of the Go community as a whole, but might have profound impacts moving forward. Okay... And I think the last article we have in our list is called "Go. Don't name packages common nouns." Which - I don't know if I agree with this one. This one, basically the author is saying "Find a different name, a longer name, a multiple-noun name for things." And they give the example of the time-rate package, which is in golang.org/x. They basically argue "Hey, rate is a really good variable name, so it shouldn't be a package name, and you should call the package rate-limiter instead." And I think I don't agree with it. I think just because something might be a good variable name doesn't necessarily mean you shouldn't use it as a package name. Because at the end of the day, packages are effectively variables.

**Ian Lopshire:** Yeah... I mean, I agree with that. But. The number of times I've accidentally called a variable URL, with the URL package imported, and been like "Wait, why isn't this working?"

**Kris Brandow:** Yeah. But what else would you call the URL package?

**Ian Lopshire:** I don't have an answer to that either. But what do you call the URL that you're building?

**Kris Brandow:** U.

**Ian Lopshire:** Yeah, I guess you're right.

**Kris Brandow:** \[laughs\]

**Ian Lopshire:** I don't know. The latter part of this section, he says in all of his internal packages he generally prefixes them with a letter, like with p in this case for Crunchy platform. I don't hate this.

**Kris Brandow:** I mean, I hate the name of these packages, in general. Naming it package-server, or db, or client just feels lazy. It feels like your codebase isn't structured well if you don't have like a delineation for the name. If I look at a package-client, then what is this -- I guess if you're using the rest of the import path to say what type of client this is, that works. But I guess it's just an outcrop too of me not liking having lots of small packages, and we'd rather just have one big package, and have it like "Oh, you have like the --" Maybe it's the platform, or the C platform packet that has a client in it, instead of being like pclient. I guess there's times when this will crop up of like you have to have a package with his name for some reason or another, but I just think it's a bad pattern.

**Ian Lopshire:** \[00:44:08.24\] Yeah, this shows up for me in error packages. A lot of our services have an \[unintelligible 00:44:14.13\] package where we define a bunch of our standard error behavior that's shared between different subservices. And you don't want to call it errors, because then you have to -- if you're going to call it errors, I think you have to implement all of the general error functions from errors. So yeah, we end up calling it in-errors. I don't know, maybe that's just a footgun I'm building right now, that will come back to bite me, but... I think there's some merit to it.

**Kris Brandow:** Yeah.

**Ian Lopshire:** Like, I do think if you're going to have a package called the same thing as like a commonly used standard package, you should at least implement all of the methods and stuff inside that package.

**Kris Brandow:** Yeah. That really is just another outcrop of the "Naming is hard" problem in computer science. It's really challenging to name things well. I guess in general, saying -- I think don't name things with a noun is like too blankety. It's like too much of a wide purview. I think it needs to be scoped down to something else. What else? I don't know. But I like using nouns for packages.

**Ian Lopshire:** I mean, if there was any hard and fast rules for naming, it wouldn't be hard, right? Like, if we could create a rule set that made naming easy... I just don't think there is one. But also, I hate long package names, though.

**Kris Brandow:** Oh, yeah. Yeah.

**Ian Lopshire:** So I would rather have it be short and maybe not as obvious, than have a package called "This is my server."

**Kris Brandow:** \[laughs\] Yeah, I don't think it's -- but that's the thing of like "Why do you have a server package?" Why isn't it just a server is a type in another package? It's not like the HTTP server package, it's http.server, and http.client, because it's the HTTP package. So I feel like that's the sort of -- that's why I don't really like the suggestion of "We should call it rate-limiter instead of the rate package." But then there's other great things you could have in there besides a rate limiter. So it's -- yeah, I guess if it's a very general type of noun that you would use, perhaps you need to come up with a more specific thing you want to call it. Or make up a name. Take a name from another language of what that thing is, and use that. I've done that too many times in the past.

**Ian Lopshire:** I will say what not to do, is just give it a random name that means nothing. We have a lot of things where it's like catdog, named after an old TV show. And you have no idea what it does. Don't do that.

**Kris Brandow:** \[laugh\] Yeah. If you want to go with the fun theme names, you've got to really dig into the lore, or whatever. It has to all be related. At a previous job we were building something, and for some reason we called it The Matrix, so I used matrix characters for all of the different services... But it fit with what those characters were in the franchise, so it made sense. It was a whole thing. But you've got to go all-in if you want to use some sort of reference like that, and throughout your code.

**Ian Lopshire:** We had one called apicard, like Picard, the Star Trek captain, and that one worked because it started with API...

**Kris Brandow:** \[laughs\] Yeah. I mean, I think that's how they kind of stumbled into gopls. They had go lsp, and they're like "Oh, we'll just rearrange some of these letters." So sometimes stuff like that falls out.

**Ian Lopshire:** Yeah, gopls - clear what it does. Well, I guess kind of. I guess I knew it as golsp before gopls... So it might be confusing.

**Kris Brandow:** Yeah.

**Ian Lopshire:** It has all the right letters.

**Kris Brandow:** \[00:48:06.29\] Yeah. It's easy -- once you look at it, you're like "Oh, that's what this is. Okay." But yeah, I'm not completely sold on the "Don't use common nouns for package names." It doesn't have enough nuance for me. It's not subtle enough for me. But once again, what works for you, works in your codebase, if you like the letter prefixing, I'd say go for it. As long as like everybody in your team is on board with that as well.

**Ian Lopshire:** Yeah, it's like any other pattern. Don't just start using it. If you're gonna use it, use it, and document it, and tell everyone to use it.

**Kris Brandow:** Yeah. Do we have anything else to say about not using package names that are common nouns?

**Ian Lopshire:** Not really. How do you feel about underscores in package names?

**Kris Brandow:** Ugh. No. \[laughs\] I don't want to be typing an underscore when I'm typing a package -- that's just... No.

**Ian Lopshire:** What about underscores in file names that aren't test?

**Kris Brandow:** That's fine.

**Ian Lopshire:** Do you think that's fine?

**Kris Brandow:** Yeah. Yeah. So you want to be able to like read the file. I only have to type the file once, and the file doesn't have -- I'm not writing the file name in my code all the time.

**Ian Lopshire:** Can you even put an underscore in a package name? I don't even know.

**Kris Brandow:** Yeah. You can't put a hyphen, but you can put an underscore. At least I'm reasonably sure you could put an underscore. But yeah. You can't put a hyphen, but you can put an underscore. But yeah, if your package name is getting too long, there's something wrong. Like, I've gotta rethink all of this. Because yeah, once again, you're gonna be typing that thing out all the time. And typing underscores sucks. I don't like typing underscores. That's why I don't want it in a package name. Once again, it also means that your package name is long, which means that your line length is gonna get long, so you'll have long function names there too... Yeah.

**Ian Lopshire:** Yeah, I do think your idea that if your package name is getting too long, you're probably doing something wrong, and you should figure out what that is that you're doing wrong... But yeah, that's all I've got.

**Jingle**: \[00:50:03.24\]

**Kris Brandow:** This is Unpopular Opinions. Alright, Ian, what's your unpopular opinion?

**Ian Lopshire:** Can you go first? I'm still thinking. \[laughs\]

**Kris Brandow:** You wanna make this complicated. Okay. Yes, I think I do want to turn this into an episode idea... So I have finally, I think, figured out why I'm -- I don't want to say I don't like... I think it's better to phrase it as "I'm meh" on Rust. I've figured out why I'm meh on Rust. And the reason I'm kind of math on Rust, which is not like a strong dislike, but a slight dislike of Rust... Or not even a dislike of Rust, it's mostly a criticism of the way that Rust is sold, is because of this other paper I was reading by Leslie Lamport... And let me just like, once again, pull up this quote, because I want to get it right, because it's just, again, a deep and subtle cut, and I like it a lot. And then this paper - if you want to read it, the paper is titled "Computation and state machines." And I'll just read this paragraph from the preface, and then I'll talk about why this is the reason why I'm meh on Rust.

So he says "For quite a while I've been disturbed by the emphasis on language in computer science. One result of that emphasis is programmers who are C++ experts, but can't write programs that do what they're supposed to. The typical computer science response is that programmers need to use the right programming specification or development language, instead of or in addition to C++. The typical industrial response is to provide the programmer with better debugging tools", this is the crux over here... "So the typical industrial response is to provide the programmer with better debugging tools, on the theory that we can obtain good programs by putting a monkey at a keyboard and automatically finding the errors in its code."

\[00:52:20.11\] And for one, I find that paragraph, that last sentence to be hilarious. But I think that also like gets at why I've kind of disliked this whole aura of type safety and memory safety, and all of these other types of safeties will like fix the problems that we have with our code and with our software and with our programs. It's a theory based in a misunderstanding of where the problems with modern day software are, and with where software development is. And I think that Rust and the kind of ethos around it... Not saying that the language itself is not good and useful. I think it is good and useful. But I think that argument of "We need Rust, because C is not safe enough. So if we just had a memory-safe version of C, then our problems would be fixed."

And I know there's nuance. Lots of people have a much more nuanced argument. Like, it will solve some of those memory safety problems, and then there's other problems to solve as well. But the big selling point seems to be, feels like it is, the way to fix the problem with so much of our software is to add this memory safety thing, to have this borrow checker that exists in Rust. And by having this, we will solve some large class of problems and issues that we have. And I think what that does is it masks that problem that Leslie Lamport points out, of like "Well, we're not getting the programs right. We're not starting from the correct point." And if you don't start from the correct point, then you're just trying to like iterate your way toward a good solution at the end of the day, which is the whole monkey typing code thing is, I think, a reference to the, you know, if you give an infinite number of monkeys typewriters, they'll eventually write Shakespeare.

I think that's a lot of how we do treat software... It's like "Well, if you just keep banging at it, eventually you'll shove out the right thing." And we can bang on things faster if we have these tools that tell us when we're clearly wrong. And I think what we should be trying to do is teach software engineers specifically - and I think computer engineers as a whole - to actually think. I think that's the problem we have; no one wants to sit down and think deeply about the problem they're trying to solve. And we lack some of the training in the languages that we would likely use to do this thinking and then this documenting of things... Mostly like math. You can represent a lot of what we want to represent with simple math, and we've kind of run to a language instead, which also harkens back to that thing of like "How would you describe an impressionist painting? Oh, in French." We run to programming languages to solve the problems when the problems actually have to deal with the fact that we're just not writing correct software. We're not writing correct programs.

And we don't even have the frame of reference to know what correct would mean in that case, either. We never sat down and said "This is what we're actually trying to do." And so I think when we try and run away from languages like C, which is what it feels we're trying to do some of the time. People are like "No one should ever write C. No one should ever do this." It's like saying "English is a messed up language, and there's a lot of weird oddities with it, so we should be moving everybody to Esperanto, and nobody should write or speak in English anymore, because English is so bad." And that's a silly argument. It's not just impractical, it's rather silly, because the problems with English don't usually have to do with the structural language itself; it has to do with the concepts. Like, are we talking about concepts incorrectly in English? And I think that's the thing with programming and with software, it's like "Do we have the concepts right? Are we talking about the concepts right?"

\[00:56:00.05\] This is one of the reasons why I like Go, is because if you do sit down and you do really think about what you're building, and how you're building it, and then you document that and you go through this rigorous process of developing it, Go is a really nice language to just express that simply and easily. It's a language that just doesn't really get in your way&lt; and that when you need some help, there's some tooling there for you, but you don't have to use the tooling necessarily. And also, it makes it easier to do it on a communal level. It has all of those things. Go popularized gofmt, which is not like correcting somebody's code, but it's making it easier for all of us to read everybody else's code, so we can work collaboratively together, and so that we can see the obvious mistakes here and there between "This is what you were supposed to do, and this is what it's actually doing."

So once again, it's not that I don't think Rust should exist. I think it's cool that Rust exists. I think all of these features that it has are very nifty. But I think that that selling point of it really just soured the language for me, because it's so much of that -- it will replace C, or we have to rewrite everything in Rust because of blah, blah, blah, blah, blah. I think it's like much more advantageous for us as an industry to focus on "How do we actually get people to write software correctly?" And then also, how do we bring down the cost of software? ...which I think are two of the same thing. Because right now, I think we do have too many software engineers for the amount of software that we're producing, because for the most part, a lot of us are just monkeys banging on keyboards, being like "Oh yeah, I'm trying to write this thing", and "Oh, the compiler got mad at me. Oh, I guess I can't do it that way. Oh, I can't--" And then you just kind of inflate the number of people you have doing software, even though you're not really doing the thinking part of it.

I think this is also what leads to people believing that you can replace software engineers with AI, with kind of like a more advanced version of the current AI we have... Which makes sense if you believe that the whole "We're just monkeys banging on keyboards" thing is a reality, and "Yes, as long as we can correct the output of the AI, it will be a much faster monkey banging on the keyboard than a human could ever be." But if you recognize that "No, we actually need to have more thought in there than just blindly typing, blindly smashing the keys", then it's clear that AI is not going to be able to do those things, because AI can't think. But yeah, that's my very long-winded reasoning for why I'm kind of meh on Rust. Still think it's a cool language, but the way that it's been propositioned I think is what just sours me on it.

**Ian Lopshire:** I think I agree with a lot of what you said, but I definitely have a bit of a different perspective on it. Maybe Rust is saying that this borrow checker, this memory safety is gonna save us all, and it's what has to happen... But in my perspective, we're all human, we're all going to mess up and we're all going to design things poorly, or write poor code at some points... And what these memory safety features and what Rust is trying to do is just minimize the impact of that mistake. Like, if I'm just writing C and I let an index overflow and read arbitrary memory - that has big consequences. But if I just can't do that... I don't know.

**Kris Brandow:** I mean, I guess there's two sides to that, too. It's like, how many of those types of problems are the problems we're having? I think it's relatively little the kind of memory corruption problems we have are like the big things. I think a lot of the time, even when there are memory corruption problems, when there's buffer overruns and that, a lot of that gets patched, and the problem is that people don't update the version of the software they're using. So they're using some unpatched version that has the exploit on it, which is part of the larger thing. But I also think we like to think about things as if we have infinite resources, and we can do things infinitely fast. But there's a reality that we can't really be spending huge amounts of industry effort on developing these things, but also be spending huge amounts of industry effort on really rethinking and redoing how we teach software engineers, and then retraining the entire industry. We're not doing that.

\[01:00:22.26\] We're not shifting toward that type of thing where we actually push software engineers to be deep thinkers, because that is a very hard, very resource-intensive problem. It takes a lot of energy to teach someone how to think critically. It's not a simple thing to do. And we just aren't doing it, because I think we can get along well enough, since we have these tools that make it so we can kind of produce software at least somewhat decently, because we have all these tools and all these protections, where it's like "No, you have to use C, and we actually have to find a way to teach everybody to use C well."

I don't think that's an impossible thing to do. I don't think that's an impossibility, that most software engineers should be able to learn and understand C. I don't think it's an impossible thing that most people couldn't learn to understand C. I think that we as an industry have just given up on that being a possibility, because we have these little languages that are easier, and because we think that we can solve the problem through things like "Oh, we just add this one more type of safety. If we add type safety, if we add memory safety, if we add what have you, it will get to the point where everybody will be able to write software.

So I think these things might actually be a little bit at odds with each other, but I definitely think we won't fix this as an industry if we keep deluding ourselves into thinking that the solution to C is Rust, or the solution to the problems we have with C is Rust... Because we just don't fix the problems, at the end of the day.

It harkens back to a thing that I've also been thinking about a lot lately, with a few years ago we as an industry went through this whole thing of saying "Oh, we need to get rid of these "harmful" words out of our codebases." So master, and master and slave, and blacklist, and whitelist, and all of these things, and there's a huge hubbub, and people filed a bunch of PRs, and we eliminated a bunch of these words... And we changed it; it's no longer master, it's default; it's main. We went through all of this effort to change all of these things. And this idea that "Oh, using these words are harmful to people of color, especially black people, and they shouldn't have to see them every day", and all of this... And I pushed back a lot on that at the time. I was like "This is not where we need to be spending our time", and people said, "Well, we've got to do something. We should be doing some things. And we can do this, and we can do those other things..." And then you look at the same industry, the same people, and we're just full-on embracing AI right now... And if you go look at the underpinnings of how all this data is cleaned, how these things get trained, there's a lot of like subjugation of especially people of color going on, a lot of destroying of people's mental health, and oppression. And where is that energy from our industry to push back on those things? We said "Well, we'll get rid of these things. This is the first step toward fixing the larger problem", but then the follow-through isn't there.

I think that's the same thing that sort of happens in obviously different contexts for these other things. We're like "Oh, we've gotta make software better. So the way we make software better is by fixing the languages." But the languages aren't the problem, it's the concepts and understanding that's the problem. And that's where Rust isn't helping. But it's not just Rust, it's like any of these languages that are like "By making this language better, we will make it so you can write better software", and like that's addressing the wrong problem.

**Ian Lopshire:** So I guess at the end of the day you're saying it's not the languages that's the problem, it's us that's the problem.

**Kris Brandow:** Yeah.

**Ian Lopshire:** The engineer. I think I would agree with that.

**Kris Brandow:** \[01:03:49.23\] Once again, I think Rust is cool. I think Rust is a cool language. I think people should use Rust. I think we should have memory safety, and I think the borrow checker is a really cool thing, and I think we should have type safety, and I think we should have all these tools that help us write software better. But we shouldn't forget that the primary problem with software today is not that we don't have memory safety. We've been able to write many a systems without having memory safety. And we've been able to write many a system without having type safety. At the end of the day, your computer also -- like, Assembly doesn't have any of these things, and that's what's running everything. The instructions, at the end of the day, don't have these protections on them.

So not having these things doesn't preclude us from writing good software. So we should focus on what are the things that will help us write good software, which - I think that this could be a part of it once we actually teach people how to think about code, and how to think about their programs. Because I think if you actually do sit down and you spend a lot of time thinking, you wind up with massively simpler solutions to problems. And if you kind of aggregate those things together, you wind up with massively simpler, larger codebases at the end of the day... Because if you don't, the problem just snowballs. Once you're already in a mess, it's so much harder to get out of that mess.

**Ian Lopshire:** Yes.

**Kris Brandow:** We'll see how unpopular that is... I mean, it'll probably be pretty popular with people, because I just said Go is the ideal language for writing good software. Well, not ideal. It's one of the good ones. I would say Lisp is probably one of the more ideal languages for the translation, at least from the view of computation if you want to do it rigorously, into actual code you can run.

**Ian Lopshire:** I think I do have an unpopular opinion.

**Kris Brandow:** Okay, go for it.

**Ian Lopshire:** And this is something I want to do an episode on... I guess the premise is learning Go isn't easy. I know we say that a lot, like "Oh, Go is easy. You can get it down in an afternoon." And I would go on to expand that learning any new language isn't easy. When we say "learning a language", I think a lot of people think learning the syntax of a language, right? Like how to do a for loop, how to assign a variable. And I think that's not even the tip of the iceberg. It's just the pointy part on top, and nothing else. Learning a language is learning its paradigms, learning how its normal libraries work, it's learning how to write idiomatic code in that language... And you're never gonna get that overnight. That's all going to come with experience. So pretending that any language is easy to learn I think does the whole community a disservice.

Acting like you can jump into a language and immediately write good code is I don't think realistic. At least it's not realistic for me. You just don't know enough to know if you're writing good code when you first jump in. So learning any programming language is not easy. Learning the syntax is easy. The rest is hard.

**Kris Brandow:** Yeah. I agree with that, because I think the way I was just kind of translating that in my mind was if you think about it in terms of like language as a whole, it's like, yeah, you can learn the syntax and the grammar of a particular natural language... But also deeply embedded into a language is the culture of the community that developed that language. And it takes a lot of effort to learn that culture and to understand that culture, especially if that's a culture that is somewhat at odds or juxtaposed with your own. I think this is like the thing between -- I have some friends who are like Eastern Europeans, and the way that they express things, and the way that Americans tend to express things is vastly different, especially when it comes to levels of excitement. I think that same sort of thing exists within programming languages, where it's like, yeah, the way that you express something in -- I mean, Go and Rust are good examples. The way you do something in Go and the way you do something in Rust are going to be very different, because the cultures of those communities are very different. So you might be able to learn a syntax, but actually understanding all of that cultural stuff is real tough.

**Ian Lopshire:** I think that's the perfect analogy for it.

**Kris Brandow:** \[01:07:45.18\] Yeah. I think our unpopular opinions are like somewhat tangentially related, because the tough part of all of this is like figuring out how do you express what you want to express in the language, in the way it should be expressed in the language? And I think that's how you wind up with these languages or these concepts that get siloed into a particular language... It's because people are like "Oh, well, that language is easy enough to learn." I think Python and data science is a good example of this. "Oh, Python is easy enough to learn, so you can do data science and data engineering in it", and that whole world just kind of gets everything built for it. But it's like, do the people doing those things understand conceptually what it is that they're doing, and they're simply mapping those concepts into that language? Or can they only express those ideas in that language itself, and they can't pull it out to another language?

I think that's an actual more concise way of saying my own unpopular opinion. It's like no, we need to focus more on having the conceptual understanding and mapping into the language, as opposed to having the language be our only vehicle for expressing that conceptual thing.

**Ian Lopshire:** Yeah, it's almost like we're learning things in the wrong direction, inside out, instead of outside in.

**Kris Brandow:** Yeah. We're hyper-focused on language... Which, again, is Leslie Lamport's point. I haven't finished reading the Computation State Machines paper, but in that paper he basically talks about -- here's an interesting thing in the beginning of it, where he talks about "Oh, imagine if we didn't use equations in, say, physics." So you have two different parts of physics that have their own special notation, that it might not be obvious that like E equals MC squared is like the same thing in these two different parts of physics. Or for anything. If you use dissimilar syntax, then it's not going to be easy to recognize similarities and patterns between two different places. Or that you have the exact same thing in two different places.

So his kind of point there was "Oh, well, you have equations, and just because you have two equations that say the same thing doesn't mean they do the same thing inside of the branch of physics that you're operating within." In the same way, you can put this into natural language... You can say the same English phrase to two different communities of people, and it could mean two vastly different things, even though the words are still equivalent. But you have the ability to kind of understand and translate those things because you have the similar base of words that you're using in all of that.

**Ian Lopshire:** Yeah, I have that issue talking to non software people. A regular software term will slip into everyday language, and they're like "What are you talking about?"

**Kris Brandow:** Yeah. That's the beginner to master. You know you've mastered something when you can explain it to someone that doesn't have any context for what it is. Because you understand what the concept of the thing is, so you can better bring that over to what people want to understand.

So yeah, I think these would be two good episodes. I'd get some people that will probably disagree with me, and get Johnny on, get some -- who else would disagree with me? Maybe we can get Sam to come back and disagree with what I'm saying... If I'm gonna have this as an episode, like "Meh on Rust, for all these reasons", I've gotta have people that are gonna disagree with me. This is assuming that they're gonna disagree with me. They might agree with me, and then it wouldn't be as fun. Or it might be a lot of fun.

**Ian Lopshire:** Do you know Sam's stance on Rust?

**Kris Brandow:** I don't... I won't speak for him. I think he's fine with it, but I don't know. But that'd be a good thing to learn.

**Ian Lopshire:** Yeah. I'm interested to know. I'm still undecided on rust, so...

**Kris Brandow:** I'm probably going to learn Rust... Me being meh on Rust has little to do with the language or its usefulness or utility. I understand the current context. It's a more macro thing. Learn concepts, people. Learn how to think. That's the big thing. We all need to learn how to think. And I hope people don't think it's an insult. I'm not insulting us as an industry by saying that we don't think about things. Thinking is very difficult to do, and it's a very difficult thing to learn how to do, to think critically and intensively about things... So it's not an insult to anybody to say "We're not thinking." It's just a thing that we should fix if we want to build better software. It's like, yeah, you've gotta think. It's hard. It's hard work. We get paid a lot of money, we can do the hard work. But yeah, that feels like a good place to wrap it up... Any last words, Ian?

**Ian Lopshire:** I think we've said it all.

**Kris Brandow:** I think so. Thanks for joining me, and thank you listeners for listening to this kind of all over the place episode. I hope you enjoyed it as much as the last one we did.
