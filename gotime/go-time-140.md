**Carmen Andoh:** Welcome, everybody, to this edition of Go Time. We have a very special episode for you today, the latest on generics. Here with us are Robert Griesemer and Ian Lance Taylor of Google's Go team. Good afternoon!

**Robert Griesemer:** Hello, everybody.

**Carmen Andoh:** And also with us are our hosts with the mosts, Johnny Boursiquot...

**Johnny Boursiquot:** Hello.

**Carmen Andoh:** ...and Jon Calhoun.

**Jon Calhoun:** Hey!

**Carmen Andoh:** And I'll be running point today, I'm Carmen Andoh. Welcome, again, to Go Time. So I guess let's start with the updates. We have Ian on here. I think it was about last October, discussing what was then the GopherCon presentation given on templates... And since then, a new draft proposal has come out, so maybe you can talk a little bit about what that update is, Ian?

**Ian Lance Taylor:** Sure. So Robert and I released the updated design draft for moving forward with generics. The biggest change was that we dropped the idea of contracts, and just decided that instead of having a separate syntactic construct, which was a contract that we could just use interface types to describe the contract between the type argument and the type parameter. A lot of people looking at contracts had seen that they seemed a lot like interfaces, and people had trouble separating out exactly when you would use a contract and when you would use an interface... So we simplified this - and this was, I should say, almost entirely due to Robert - to just use interface types.

And then the second big step we made was we've released a translation tool and a type checker. So we have a type checker that works for the design draft, the description of generics in the design draft, so that gives us some confidence that what we have written about can actually work...

\[00:04:11.20\] And we have a translation tool which translates code into ordinary Go. The translation tool is not, by any means, a final thing. There's cases it doesn't handle. It's just an experimental tool, but it lets people actually write code that can actually run using generics. So we can get a feel for whether generics actually works for people, and whether it actually addresses the issues that they have.

**Carmen Andoh:** Can you talk a little bit about what your understanding is based on the feedback so far of what people's issues are when it comes to either lack of generics or this current draft proposal?

**Ian Lance Taylor:** Well, a lot of the feedback has actually been about the syntax, which is sort of simultaneously the least interesting and the most accessible part of the proposal. Obviously, it's really important to have a good syntax, and we're really paying attention to the feedback that people have given. We actually now have two possible syntaxes implemented in the translation tool, which Robert did...

And beyond that, there's the semantics, of course... And I think the feedback on the semantics has been quite positive so far. People have tried out generics, they've written some pretty extensive pieces of code, and I think the feedback we've gotten there has been uniformly positive. Robert, do you remember any real concern to this point?

**Robert Griesemer:** No, I think most of the feedback was really based on syntactic issues, and we tried to address this with this alternative that we have now... And we need to play with this a little bit more. And then on the semantics side - of course, there's not everything ironed out quite yet. We have even mentioned that in the design draft, especially when it comes to type lists and exactly what does it mean to have for instance type parameters in the type lists, and things like that.

So we are in the midst of refining that, but I don't recall off-hand right now that this was a primary sticking point with feedback from the people.

**Ian Lance Taylor:** We're trying to sort of really pin down the real semantics of type lists, as Robert said. But we haven't had much feedback. There's been some people wondering about the exact details of embedding a type parameter inside a struct or an interface, which we need to decide precisely what it means... But as a matter of fact, almost no one, in terms of actually using generics in practice.

**Carmen Andoh:** Speaking of semantics, one of the things that you did in order to inform this new draft proposal version is team up with type theory experts, including Philip Wadler, and you came out with a paper called Featherweight Go, which I don't understand a word of... \[laughter\] And I actually am giving a bounty to the entire Go community for anyone who wants to try to demystify that. I know that there is a panel that you were on with Phillip, trying to talk about that paper and pairing up with that... But maybe you can try to demystify Featherweight Go maybe in its essence, for our listeners right now. Do either of you wanna try to take a stab at that?

**Robert Griesemer:** I can try. Maybe not a real stab, but maybe a little explanation. So this cooperation, I should say, happened because Rob Pike actually reached out to Phil Wadler. They knew each other from way back, and Phil Wadler was interested, and then we started talking with Phil Wadler and with Rob Pike... He didn't really have time to produce a beta in this, but then Phil Wadler, Ian Taylor and I started talking about what we wanna do... And they have, of course, a strong background in type theory. Phil Wadler has done this -- not the same work, of course, but similar work, many years ago, for Java, so he's really an expert.

\[00:07:56.20\] So now we have a whole team - it's not just him - that have been working on this Featherweight Generic Go... Which is based on Go, but very much slimmed down. So we now have a language that really only has type declarations and methods. And those type declarations are only interfaces and only structures (structs), and the only thing you can have is methods and interfaces, of course, and methods associated with structs... And inside those methods you can only have basically single functional expressions. So it's a very, very simplified language, but what you can do is you can invoke a method.

In this paper, he explores two situations this Featherweight Go, which is like the basic Go, simplified Go, without any generics \[unintelligible 00:08:45.28\] which is that basic, simplified Go, extended with generic features. And those generic features are very much modeled along the draft design, with the exception of type lists. So those type parameters, as in the draft design - the type parameters have what in the paper is called type bounds (we call them now constraints), and there are interfaces, there are also interfaces in the paper, and they basically model in a very simplified fashion what the design draft is trying to do with real Go.

The goal of this paper is to prove, first of all, that this is a sensible design, in the sense that the type system that we're creating here is sound; you cannot create situations where you could write a program that would be unsound in terms of the type system. And then also, they tried to prove and have proven that it is possible to translate such a simplified generic Go program into a regular Go program, through a process which is called monomorphization, basically expanding everything for every possible instantiation of these generic functions and types... And then they prove that these programs are basically \[unintelligible 00:10:06.22\]

That's the gist of this paper, and this gives us very strong confidence that they're a) not designing somewhere into the blue, and b) that what we're designing actually makes sense from a type system point of view. We're not gonna hopefully find problems down the road, where we have some internal inconsistency. So I think that's really the benefit...

I think it really helped us also understand a little bit better what it means to have interfaces as constraints, and how we need to type-check this. So I think there is a real synergy here.

**Carmen Andoh:** Very cool. And would you say because of the partnership it helped you understand some of the semantics better in terms of how it informed the newest draft proposal?

**Robert Griesemer:** Oh, absolutely. I think we had part of a prototype working before this paper was complete, and in the process there's of course all kinds of questions, and what we sort of invented ad-hoc, they basically did in parallel, independently. Then when we started talking to each other, especially when we went through the individual steps in the paper, we could basically verify that our thinking was matching their thinking, and vice-versa. So our ad-hoc design that was maybe more based on what seemed to be the right thing to do - and not so much driven by a mathematical background - matches... And so that's great; that means we're not doing something weird.

Phil Wadler actually took the time himself to walk us through the paper in detail, and this is how our understanding of the paper came about. I'm not a type theory person... So I now feel like "Okay, I have some sort of idea how to read the math", but I --

**Ian Lance Taylor:** \[00:12:04.06\] Actually, my name is on the paper, but I have no claim to understanding the paper at all. \[laughter\]

**Carmen Andoh:** Okay, you've heard it here, folks - it's not just you; even Ian and Robert had a really hard time with the Featherweight Go paper and all that math notation. This is funny.

**Ian Lance Taylor:** Let me add that they really helped us with the move away from contracts and towards interface types. They pushed us in that direction, as Robert did as well... So it helped make clear that it would be equally powerful, and it would be usable.

**Johnny Boursiquot:** It's worth noting that there is a YouTube video of Phil actually walking through portions of this as well... And I attempted to read the paper; I couldn't get very far, but I did watch the video and he did an excellent job walking through some of the key concepts there. I believe there is a plan for an expanding on the ideas of Featherweight Go, and I believe there's a \[unintelligible 00:13:00.06\] or some other implementations these I imagine are going to build on the foundation you have now, to try and figure out "Okay, what else haven't we thought of, with the Rust generics, in Go?" Is that correct?

**Ian Lance Taylor:** Yeah, that's exactly right. They're gonna try to add -- I mean, as Robert said, Featherweight Go really is very limited, so they're gonna try to add other features of Go in and make sure that this type system is still sound, and the generic system is still sound. Which we think it will be. But you know, it will be very interesting to see what they come up with.

**Johnny Boursiquot:** Something you mentioned earlier was that some of the feedback was somewhat superficial, in that it was limited only to the syntax; obviously, there's a lot more under the hood that really must be solved in order to really have a consistent implementation. But to do that some justice, you have folks that are sort of familiar with a common utilization of angled brackets as the way of specifying the generic types and whatnot... And people were scratching their heads, "Well, first it was in parentheses, now they're thinking about square brackets... Why can't we just do angle brackets? What's the problem?" So maybe if we can just kind of explain the dangers of trying to put that into Go right now - maybe that addresses somewhat some of that early feedback.

**Ian Lance Taylor:** So Robert had a really good example in the email he sent out about square brackets, showing a case where you really can't parse angle brackets if you don't know whether you're looking at a generic function or type, or whether you're looking at a pair of expressions that happen to have a comma in the middle because it's some kind of multiple assignment. So that's just sort of a fundamentally ambiguous syntax. Robert, do you wanna talk about the importance of parsing without type-checking?

**Robert Griesemer:** Sure. So even in existing Go we have some situations where we do not know at parse time what we have. The classical example is if we have a conversion or a function call with exactly one argument. So if you say f(x) is this a function call, or is it a conversion? We do not know at parse time. But it doesn't matter, because we can build the syntax tree at parse time. That's the only thing that matters. And that syntax tree that has a functor - maybe it's a type in a conversion... And a list of arguments. That's all we need. And that's the same for a function call or a type conversion. And then at type-checking time we can look at this functor and see "Is it a type? Well, then it must be a type conversion." Or if it's a function - then, well, it must be a function call. So that's all jolly.

The problem with the angle brackets is that at parse time we cannot even know how to create a syntax tree in this specific case, especially in that example that we've given in the mail. We don't know how to parse this, so we don't know how to build a syntax tree, and that means there's just no way forward to resolve this.

\[00:16:10.21\] One way to go forward would be if we had type information at parse time. In languages such as C++ where they use angle brackets for templates, there is symbol information at parse time, and the parser needs that to make the right decision. But that also means that everything that you will use at a particular place needs to be already declared at that point. And so in C++ you need to make sure that everything that you're using in an expression has been declared before, some way or another; maybe with a forward declaration of sorts. In Go we cannot do this, because -- well, we could, but we don't have forward declarations in Go, and we don't want them. In the very first version of Go, that's never seen the day of light, there was actually forward declarations, but we got rid of them pretty quickly.

In Go you can have a package that is spanning multiple files, and so if you refer to a function in one file, that function may not even be declared yet. It may show up at the very end of the last file that the parser is gonna see. So there's just no way to have this information available. So without that information we cannot -- it's just not parsable, and there's no way around it... So angle brackets, as it is right now - it cannot work. So it's not like we don't wanna do it, or we don't like them, it's just it cannot work with the Go as it is right now.

**Break:** \[00:17:37.23\]

**Carmen Andoh:** So what Robert is referring to is rather a discussion thread on Golang Nuts, and it is one of the most recent, and it's an addendum to their draft proposal, where syntax feedback had been received, and a new addition was adding parentheses. So now it's a case of getting feedback from the community about whether the preference is for square brackets, versus parentheses.

Robert, or Ian, what are some of the trade-offs for either/or of these, in your mind?

**Ian Lance Taylor:** The advantage of parentheses I think is that type parameters really are parameters, and type arguments really are arguments... So it makes sense to use a syntax for type parameters that's similar to the syntax for regular, non-type parameters. \[unintelligible 00:19:16.07\] And I find the result to be -- it sort of feels natural to me, at least... And it reads well. The disadvantage is in a complex generic function you can have lots of parentheses flying around, you can have type parameters, you can have regular parameters, you can have result parameters; they're all parenthesized lists, and it can get a little hard to see exactly what's going on.

\[00:19:47.21\] Also, in a call, at the call site, sometimes you pass type arguments, sometimes you don't, and it can be a little unclear, again, exactly what's going on. Like, if you had a new function, the new function might take a type, and then you have to have another set of parentheses for regular parameters... So there's some potential confusion there.

We've also discovered certain ambiguities with parsing when using parentheses. Not common cases, but cases that do arise in real code. There were cases where it was ambiguous when you referred to an instantiated type, or an instantiated function, and it was hard to know exactly what was going on.

A simple example would be an embedded field inside a struct. You can embed and instantiate a type in a struct. It's not really clear whether you're embedding a type in a struct, or whether you're doing some other kind of operation there.

So square brackets, by comparison - they're still a list syntax, so now type parameters and parameters don't look the same, which for many people is an advantage, but for some people it's a disadvantage... And then there seem to be at least so far fewer parsing ambiguities when using square brackets.

I don't have a good feel right now for the sentiment of the broader Go community... There are definitely people who like parentheses and definitely people who like square brackets. I don't have a clear sense as to one clearly being better than the other, but I have seen a lot of people saying that either could work; that they don't have any major objections. Do you have anything to add, Robert?

**Robert Griesemer:** No, I think that's an accurate description. I think we can confidently say that the square brackets don't have the ambiguities at this point that we've seen with the parentheses. We did not know this in the beginning, we only found out after writing that code, where we ran into problems... But we decided to stick with the parentheses because we wanted to make progress on all the other fronts. The reason for this alternative now is that we're revisiting this decision so we can make sure that at the end we have looked at all the alternatives.

**Johnny Boursiquot:** Anecdotally, from what I've seen in the Twitterverse and the feeds and all these things, I think there is a penchant towards the square brackets. From what I hear, most think it's more readily apparent what is going on when you look at the code. You don't have to do a double-take - "Okay, what's applying to the parentheses here?" We can more easily, very quickly figure out "Okay, this has to do with the generic type, and everything else is what I would expect." Basically, that's my two cents there, from what I'm seeing from the feedback from the community so far.

**Robert Griesemer:** Great. Thanks.

**Jon Calhoun:** So I do have one question on that... Have you guys talked with developers of IDEs or syntax highlighting tools that people use, to see if any of them have feedback on any of this sort of thing? An example is JetBrains - since they have GoLand, I assume that maybe they'd have some feedback on which one is easier to make obvious inside the editor, where people are actually coding... So have you had a chance to talk to people who are developing tools like that, to get their feedback?

**Ian Lance Taylor:** We have talked to the people who have developed the Go Please language plugin... And from their point of view, I don't think it matters that much, because they're just hooking in for the parser, and the parser does support both cases, and the parser is just gonna feed back to them what the code looks like... So they didn't have much trouble adding parentheses support, and they've just recently added square brackets support to Go Please as an experimental thing... So I think at least at that level it hasn't been a problem. We haven't talked to JetBrains, though; that's a good idea.

**Carmen Andoh:** So more practically, for the Go community - when do you think that you're going to get enough feedback to move forward with moving from a draft proposal to actually putting it forth as a proposal to change in the language?

**Ian Lance Taylor:** \[00:23:51.18\] We don't have any timelines in mind, I'd say. As we mentioned earlier, we're still trying to pin down some of the precise semantics, which I don't think is going to affect any existing code; in fact, I'm sure it's not gonna affect any existing code. We wanna make sure that we understand and we wanna make sure that the multiple Go compilers will all implement the same thing. We're gonna have to have some sense of how to add to the language spec. So those are the steps we're looking at now. We're certainly gonna move forward as fast as we can before making a formal proposal. Of course, at that time none of it will be a surprise. People will have seen all of the ideas already, and we'll just have to see how it flies. So far, I feel like the reaction has been largely positive, which is encouraging... But I don't know exactly what the timeline is going to be.

**Carmen Andoh:** What kinds of feedback at this point are you, Robert and Ian, looking for?

**Robert Griesemer:** I think we wanna see things that don't work, and that you would expect to work. We definitely have seen some of these things, which tended to be just bugs in our prototype... And we have spent some time fixing those bugs, and we have slowed down a little bit on that, because it's just a prototype, and at some point you have to make a call as to how much time you wanna spend on that, and making progress elsewhere... But yeah, generally I think we would like to know "Can you write the kind of generic code that you expect to be writing with this design?" And if not, why not? Let us know. Is there things that you expect to be working, but they don't? Are they fundamental to our design? And if so, is there something we need to do?

These are the important questions that we should try to answer ASAP, because once we have something more firm, it's gonna be very hard to make these changes later, if not impossible.

**Ian Lance Taylor:** Yeah, I totally agree. And I'd say - is there anything you find surprising? If you're looking at code that's written using generics and you read that code, is there anything that you just say "I don't get it", or "It just doesn't act the way I expected it to act" - that kind of feedback would be extremely useful.

**Jon Calhoun:** Were there any specifics that you guys wanted to avoid supporting? Like, do other languages have something in generics that you looked at and decided "This isn't something we want to support?" or maybe it's just like a really obscure use case, or something...

**Ian Lance Taylor:** Well, my favorite example is that C++ templates are in fact a Turing-complete language in and of themselves, which is really cool... And we decided we absolutely did not want to support that, in any way whatsoever. \[laughter\]

**Carmen Andoh:** One of the things that I happen to know about both of you is that you have extensive experience in generics coming from other languages... Ian, you were on the C++ readability team at Google, when you famously saw a spec for the Go language and wrote a compiler for it, I think... And Robert, you were on the V8 team that was writing a VM for Java... So are there any things from those lenses of experience where you kind of want to make sure you prevent -- and I'm specifically trying to get the angle here of the naysayers who say generics are gonna add complexity to the language. What is your experience about keeping that complexity at Bay in this proposal?

**Robert Griesemer:** So just to clarify - I was working on V8 in the very beginning for maybe barely a year... I didn't really do anything with generics in V8. I was on the implementation side. My experience with generics was maybe C++, with templates, and probably the highest point there was when I was able to - as Ian alluded to before, it's Turing-complete - write a program using C++ templates that would decide whether a constant was a prime number or not... And the compiler would decide it at compile-time. So that's not the kind of thing we would like to support.

\[00:27:54.10\] With respect to what I'd like to see or not see - honestly, I'm worried about the kind of code that people are gonna write. There's no question about that. And we see some of the examples that people send us, that cause crashes in the prototype, and they're just unbelievably convoluted and really hard to decipher... But as other people have pointed out, those people are really pushing the envelope; they're trying to just see "What can I do with this thing?" And I hope this is not gonna be the kind of code that people are gonna write down the road.

I think one of the first things we need to do if we have this for real - we need to come up with a kind of best practices guide, that guides everybody a little bit as to how you should use generics, and when you should use them and when you should not use them. Very similar to what we developed for goroutines and channels; in the early days of Go everybody was using goroutines and channels for everything, and it took a little while for us to learn where it was appropriate and where it wasn't.

**Ian Lance Taylor:** I agree completely. And I'll add that -- I think that one of the things we've been really focusing on during this whole multi-year process is to avoid the complexity that exists in C++, and to a somewhat lesser extent in Java... Because those languages are very powerful, and at the same time, they can lead to code that people find difficult to understand. And that's just not a good fit for Go. And partly, it's because they are languages that are much more object-oriented than Go is, that have inheritance built into the language, and therefore they have to reflect inheritance in their implementation of generics... Which then leads to considerable complexity in understanding "How do you choose the exact type that's going to be used to instantiate this C++ template?" And then they also have overloading, so we have to do overload resolution...

These are all really powerful techniques that let people write quite compact code, that can be extremely effective... But at the same time, novices come in and they just don't understand exactly which type is gonna be used... So we wanted to make sure that we avoided that as much as possible. We wanted to be very clear exactly how a generic function or type was going to be instantiated, and what the type arguments were going to be.

**Johnny Boursiquot:** It's just like we saw with the goroutines, and the overuse of channels for everything... It was kind of crazy there in the beginning. But I'm letting you know right now, you are gonna see that surge; there is gonna be that spike where everybody wants to use generics for everything under the sun... And then we're gonna start walking that back and developing best practices.

I'd definitely like to see some leadership from the Go team on that, maybe an expansion of effective Go on the Go blog, and adding some of the ways to caution, to provide along with that, that says "Hey, this is really the best use for this", and whatnot. And obviously, I think a lot of the community members are gonna be stepping up and writing blog posts and showing the do's and don'ts, and that kind of thing... So it will definitely not be all up on the shoulders of the Go team but it is something that I think is to be expected; like any new toy, everybody's gonna try and abuse it... But it's all in the spread of implementation, right? I think we are going to develop best practices around what should your generic code look like for a production system, for when you're the one who steps away from it and somebody else has to step in and understand and read what is going on... I think that's something that is going to come... I hope.

**Ian Lance Taylor:** Yeah.

**Carmen Andoh:** Yeah, I think one of the things that I really like about the Go culture is that we have managed complexity, our idioms through the culture. We have absorbed values and simplicity, and we can continue to do so for generic Go. I think that will be a big part in whether we keep complexity at bay. It's not necessarily the technical enforcement, but the idiomatic/cultural enforcement. We've talked about idioms as culture on this show before, so it's kind of interesting to see it play out with generics.

\[00:32:02.28\] One of the questions that we had was a forward-looking question, and it's assuming that this is gonna be a proposal that gets ratified and put into the language... Are there any plans for managing the surge of feature requests for the standard library, now that generic data structure and algorithms are possible? Are you gonna let that happen in the ecosystem?

**Ian Lance Taylor:** That's a great question. Are there any plans? I'd say no. There are not at this point any plans... But there will be plans. The experimental translation tool does come with a tiny little set of sample libraries. When I wrote those, I viewed those as kind of prototypes for what we might wanna add to the standard library going forward. I don't think they're great examples or anything, but I think that they can sort of show areas where we might wanna add new standard library packages, and show possible implementations as subject to people really looking at them and making sure they make sense. I don't expect there to be a lot of additions to the existing standard library packages. There might be a few, but most of the existing standard library packages were written without generics and they work fine.

So yeah, there may be a lot of people saying "What's that? Generics?", but you know, the truth is they work already, and we don't need to add generics there. I think it's more gonna be a matter of adding some new packages to really take advantage of generics. The translation tool, for example, has a slices package, which has various functions that operate on slices of any type... And it has a chans package that operates on channels of any type. This is the kind of code which we aren't able to write with Go today, but we are able to write with generics... So I feel like that's gonna be where we're gonna add to the standard library. We're not gonna be moving fast on any of this, for sure... But you're right that we should develop some kind of framework for how we're gonna add packages.

**Break:** \[00:34:00.19\]

**Jon Calhoun:** One of our listeners in the Slack had asked "While you're collecting feedback, is there a good time or a good expectation for measuring how build speed changes over time?" Especially now that things are experimental, I assume that it's not really fair to assume that that's exactly how things are gonna be whenever it actually ships... So what should people expect and when is the right time to give feedback on that?

**Ian Lance Taylor:** \[00:36:11.22\] Okay, that's a great question. Yeah, the experimental tool has no similarity whatsoever to any real implementation. We know it's slow, and it's gonna be slow, and that's just inevitable... If this does move forward to become a proposal and it gets accepted, then most likely the implementation will be to start with a branch of the main Go toolchain, and we'll start adding generic support on that branch, which will involve changing the compiler mainly, and any other changes to other tools that are required... So that'll be the time to start giving feedback about changes to build speed.

We've talked about it with some of the compiler developers, like Keith Randall especially, and we think we can do it without a significant increase in build speed. I mean, there will be some increase in build speed; we don't think it's gonna be a huge increase... But you know, this is really speculative at this point. So the time to give that feedback is when we're able to start doing development... And hopefully, people will also be able to contribute work when we start doing that work on the public branch.

**Carmen Andoh:** We can ask other questions there on the Slack channel... "When generics are released, would it be released together with the idea of best practices?" What they call it here is a standardized collections interfaces, to avoid fragmentation... "Or do you think this will not be a problem, for example size versus count versus length?"

**Ian Lance Taylor:** Yeah, it's a little hard for me to visualize exactly what a standard collection interface will look like in terms of Go. Clearly, it exists in C++, and maybe we can just borrow what they do. I'm not quite sure exactly how that's gonna work. But certain things are pretty straightforward. I think iteration is the more complicated one. C++, in part because of the sophistication of the template capabilities is able to have a generic iteration interface that works for any collection, and I'm not sure that we're there yet with our less powerful and less complex... On the other hand, I don't know that anyone's really looked at it in detail, so maybe we can make some progress in that area.

**Robert Griesemer:** There's also a difference in the sense that in Go we already have, for instance, maps, which of course is not the whole collection hierarchy, but it's a significant chunk, which doesn't exist in C++, so there is a temptation there to build this very complete hierarchy... While in Go in many cases we just use a map for various things, and that works fine; and the map isn't sometimes generic already. But of course, that's not to say that this would replace a more comprehensive package perhaps...

**Ian Lance Taylor:** It's a great question though.

**Robert Griesemer:** I think it's gonna be interesting to see what people will do with this. The design - we tried to make it as orthogonal as possible to the rest of the language. That really means adding generic type parameters somewhere adds a new dimension to the kind of programs you can write. So it really opens up an entirely new dimension of possibilities, and it will be very interesting to see what people do with this.

**Carmen Andoh:** One other comment from the Slack is a technological guard rail, if you will... So for the language, currently govet and golint function as sanity checks we depend on. What is your opinion on adding new checks added to discourage the use of generic code in this toolchain, if all you need is a non-generic version?

**Robert Griesemer:** Well, we can easily make the compiler two times slower for each additional type parameter; that would limit the complexity quite quickly...

**Johnny Boursiquot:** \[laughs\]

**Carmen Andoh:** It's really gonna have to probably be enforced through culture, or these best practices and idioms, right?

**Robert Griesemer:** \[00:39:47.27\] It's quite easy to see that programs have one or two type parameters and functions... But if it goes over two or three, then you are starting to wonder "What's happening here? Is this really necessary? Is this really good?" So I would say there's some immediate questions right there, when you look at code like that. But I'm shooting from the hip here; I'm just guessing here. And I suspect that there may be things we can say "This is not good." And maybe such things can go into a vet check eventually, but I don't know what that would be at this point.

**Jon Calhoun:** I suspect things like the Go Proverbs will sort of help on this front, just because -- like, we have the ones like "A little copying is better that a little dependency", I think is one of them... And I think if people stick with that mindset of copying an entire type -- like, if you're only using two different versions of it, or an entire function or whatever it happens to be, it's better than writing the generic version for just two different types. But if you do find yourself in a situation where you need to use it for 5-6 different types, then generics might actually be the right solution.

**Robert Griesemer:** Mm-hm.

**Johnny Boursiquot:** The rule of three still applies here... I think we've discussed this previously on the show; usually, I don't even start to think about abstracting away or making a generic version of anything until I've seen at least three instances of it, if you will. Then I start to say "Okay, I'm starting to see the edges here. I'm starting to see what is the likelihood of this thing being used in the future." Because any code you write - again, we write the code just once, but we have to maintain that code, possibly indefinitely... So the same rule around those decisions we're making today, asking ourselves these kinds of questions - I think it's the same thing we should apply here.

But again, you are gonna see folks who are anti-generics in our community. I'd say it's like a 50/50 split. We have people who love Go because of the lack of generics... Which is a very specific reason to love a language, but hey... And then you have others who are like "Hey, if Go had generics, I'd be using it." So it's kind of an odd mix, but again, I think it's gonna be up to the community as a whole to come up with what are the idiomatic ways really we wanna treat generics.

**Jon Calhoun:** I think those would be nice too, because if we have a concrete implementation to point to, even if you just copy it to the docs, for the comment, and say "This is a generic implementation of this concrete thing". I think anybody who is unfamiliar with generics, or a little bit newer to programming, could look at that and have a much better chance of understanding the code.

**Carmen Andoh:** One of the things I think about for generics if this does get put into the language is whether or not it's going to bring on what I would call the would-be gophers. Right now we have the die-hard gophers, people who love Go and use Go and maybe have internalized the no-generic philosophy of Go... And having generics or implementing generics into the language successfully may bring new gophers to the table, and those new gophers are gonna be your .NET and your C++ and your Java gophers. Robert and Ian, do you have any thoughts or suggestions on how to help them keep Go Go, while also giving them this tool that they've leaned on so heavily on coming from their other language?

**Ian Lance Taylor:** Yeah, I hope they will be able to carry their programming practices over where those practices make sense... Where they make sense for Go, I should say. I can't tell whether adding generics will make it that much more appealing to C++ or Java programmers; I certainly hope it will... But whether it really will in practice - it's just hard to know. It's still gonna be a different language, of course.

Certainly, there have been people in the past who have just rejected Go outright because it doesn't have generics... But I don't think there have been that many people who take that point of view, and I hope that those people will take another look when generics comes out. But from my point of view, I want Go to be open to everyone. I want all these people to find Go to be a productive language. It's not really a matter of hauling people from the other language communities... I think generics is interesting mostly because, as Robert says, it's orthogonal; it lets us write code that we couldn't write before, in Go. It lets us write code that solves problems in a way that we couldn't really solve before, at least not without going through type reflection, or massive copying, or whatever.

\[00:44:12.22\] So it'd be great to open more people; I hope that more people keep writing Go... But I think our main interest is to give people another powerful programming tool. At least my main interest.

**Robert Griesemer:** Yeah, I'd add on that that, again, Go is not now becoming the generic language. It's just yet another mechanism in the language, like we have interfaces, we have methods... It doesn't mean now you have to write everything in an object-oriented style. Go has always been multi-paradigm; we enable different ways of programming, and we encourage people to choose the right approach for the problem at hand... So in a situation where a generic approach might be the right approach, then by all means, go for it; and if it's not, don't do it.

Of course, there's gonna be people that really like that playing with types, and more so maybe than getting that code to just do what it's supposed to do. For them it's, of course, appealing to have this new mechanism. But again, if your goal is to get something done at the end of the day, use the mechanism, the tool that fits your needs and solves the problem in the greatest way.

**Johnny Boursiquot:** Along those lines, that's actually a good segue for the segment of the show where we talk about unpopular opinions.

**Jingle:** \[00:45:37.07\] to \[00:45:52.02\]

**Johnny Boursiquot:** So what I'd like to do is ask each one of you to spill onto the mic your unpopular opinion. It could be related to what we've been talking around generics, or it could be something that you're seeing out there that perhaps you have a different opinion from.

**Jon Calhoun:** Or if it helps, some people have just told us they think buses are more efficient than other forms of transportation in New York City. \[laughter\] So it can literally be anything.

**Robert Griesemer:** Well, let me start on that... So I cannot opine on the buses in New York City; I'm a big fan of public transportation, even though this is perhaps not the right time to advocate for them, for other reasons... But unpopular opinions - I don't know if it's an unpopular opinion, but I like short identifiers. I do.

**Carmen Andoh:** \[laughs\]

**Robert Griesemer:** And I feel like the closer they are to where you use them, the shorter they can be. And the further away they are from where you use them, the longer they should be. And then there's some exceptions, like when an identifier is really important in your package and prevalent, then it can be one letter, even if it's a global. And the most prominent example for that is perhaps testing.t.

**Jon Calhoun:** I'm not sure if you're allowed to be a teacher now.

**Johnny Boursiquot:** \[laughs\]

**Carmen Andoh:** Uh-oh... Why, Jon?

**Jon Calhoun:** Every teacher expects you to write really long, self-explanatory variable names, regardless of where you use them -- at least that was my experience. I felt like every teacher wanted long variable names.

**Robert Griesemer:** So I will comment on your change list if it uses -- in a simple for loop, if the iteration variable is called "index", I will probably comment on that. Call it i, or j, or whatever... \[laughter\]

**Johnny Boursiquot:** Ian, what have you got?

**Ian Lance Taylor:** \[00:47:48.10\] Okay, I don't know if this opinion is unpopular, but I feel like I write it a lot, so there's certainly people who don't seem to grasp it... And that's that the language is not perfect, but every change to the language carries a heavy cost. So when you wanna come and argue for why the language should be changed -- and we see that a lot; I'd say that there's probably one a day suggestion for some way to change the Go language... Don't just talk about how it makes the language better, but also spend some time to talk about how it makes the language worse. Because there's no such thing as a 100% good change to the language. Or I shouldn't say there's no such thing; maybe it's out there. Maybe no one has thought of it yet. But probably, it's a good bet that all the 100% good changes to the language have already been made. So when you wanna change the language, spend some time to think about how it makes things worse, as well as how it makes things better.

**Johnny Boursiquot:** I think I just saw Ian drop a metaphorical mic... \[laughter\]

**Robert Griesemer:** We're gonna go back now and think a lot about how generics make things worse... \[laughter\]

**Ian Lance Taylor:** I think we've got plenty of people telling us that already...

**Jon Calhoun:** I was gonna say, if you haven't gotten that feedback at this point...

**Carmen Andoh:** Well, it has been a pleasure... On behalf of my co-hosts, Jon and Johnny, we thank you, Ian and Robert, for taking the time to talk about the new draft proposal on generics with us.

**Ian Lance Taylor:** Yeah.

**Robert Griesemer:** It's my pleasure.

**Ian Lance Taylor:** It's been fun, thanks for having us.

**Outro:** \[00:49:30.00\]

**Jon Calhoun:** Carmen, I've heard a lot of if's from you today.

**Carmen Andoh:** Some what?

**Jon Calhoun:** A lot of if's from you today.

**Carmen Andoh:** What kind of if's?

**Jon Calhoun:** "If this makes it into the language..."

**Carmen Andoh:** Well, okay - I think partly because of what I have learned with try last year... In that a lot of time was spent really thinking about this and trying to solve a good problem, and then a lot of the community felt like it was a fait accompli. And I probably am speaking for Robert and Ian here when I say if a lot. I think that the draft proposal is explicitly meant to not seem as a fait accompli.

**Robert Griesemer:** Yeah. I mean, if there's something we learned from that is that we cannot just come out with a it doesn't matter how well thought out idea, and put it out there and say "So, yes or no?" It's just not gonna work. There needs to be an educational process, as we had to go through with too, and that we're trying to achieve now through being more open and going in smaller steps and getting everybody on board.

It's kind of strange, because programming language evolution is really a social process. It doesn't actually matter if you have -- if you have seen the light and you know exactly the perfect language, you would just put it out there. And you know, maybe it's 20 years ahead - nobody would even buy it, because people would not see the reasoning why you got to that point.

So you really have to get everybody along -- and some people may already be where you are, and some people may not, but you have to get everybody along in little steps, and that's how we eventually end up where we wanna be... And we can see this with all kinds of things, like garbage collection. Garbage collection was invented in 1950-something, with Lisp. The first Lisp had garbage collection; it was in 1958, I believe... And it's taken forever before it became accepted as something that a mainstream programming language should have. Maybe Java was the first one that really made it mainstream... And now this is not something that is still disputed or debated, I should say, but it's not as outrageous anymore. I think that's true for a lot of things.
