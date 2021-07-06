**Mat Ryer:** Hello! Welcome to Go Time. I'm Mat Ryer, and today we're talking about test-driven development... Yes, that strange process where we write our tests before, we test the thing before it even exists. What are we playing at? Well, we're gonna find out today.

Joining me - welcome back, Chris James. Hello, Chris.

**Chris James:** Hello, Mat. Thanks for having me again.

**Mat Ryer:** Oh, always a pleasure.

**Chris James:** Well, it's twice now, so... Two times.

**Mat Ryer:** Both times it's been a pleasure.

**Chris James:** Yeah. Well, we're assuming this one's pleasurable. It might not be.

**Mat Ryer:** Good point.

**Chris James:** I guess we'll see.

**Mat Ryer:** One time it was a pleasure, and the other one - we'll see.

**Chris James:** Yeah.

**Mat Ryer:** Thanks. That was kind of like a test-driven development little -- I feel like I failed the test a lot of times, but we got there in the end.

**Chris James:** \[laughs\] Well, after the show we'll all appreciate the joy of seeing a failing test, so... It's fine.

**Mat Ryer:** Yeah, of course. That's it. We'll find out why. Joining us also - it's only David Wickes. Hello, Dave.

**David Wickes:** Hello! Hello, Mat. How are you doing?

**Mat Ryer:** Welcome to Go Time.

**David Wickes:** Thank you very much. Very pleased to be here.

**Mat Ryer:** Great to have you here. And don't worry, it's not just us. We have another special guest... Riya Dattani is also here. Hello, Riya.

**Riya Dattani:** Hello. How are you?

**Mat Ryer:** Good. Welcome to Go Time.

**Riya Dattani:** Thank you. Thank you for having me.

**Mat Ryer:** You're very welcome. And I've got some intros for you all here, which I'm going to read now. Dave is a former academic philosopher and local librarian. A terrible marketing guy, and now a web developer and occasional contributor to Learn Go with Tests. Interesting.

\[00:04:12.03\] We also have Chris, who's a former engineering manager, now funemployed. You write --wrote Learn Go with Test, didn't you?

**Chris James:** Yeah. It's an ongoing project though, so it's both a past and future tense.

**Mat Ryer:** Yeah. It's a difficult one to handle for me... And Riya, you have a background in economics and tax disputes... And now you're a software developer newbie, you say, and a teaching assistant. That's cool.

**Riya Dattani:** Yeah... So I've just been a software developer for, I'd say, like two years now... So I still count myself as a newbie, although I think I'll be a newbie for like the next 20 years, or something. And yeah, on Sundays I teach disadvantaged people how to code - so people of color, or women, or refugees... So yeah, it's fun.

**Mat Ryer:** Brilliant. Wow, that's great. You're putting me to shame, because I spend my Sundays doing nothing. What is TDD? We need to start here, because this is strange... And I know when I first heard of this concept, it just sounded like it didn't make any sense. What is it? What do we actually mean by test-driven development?

**David Wickes:** Well, the brutal (if you like) simple version is it's a process, in a way, where you will start before you've written any code by writing a test - this is super high-level; I'll get more into it in a bit - that describes some aspect of the system you want to build, and then when you've written that test (and you might spend some time doing that), you will write the code that makes the test pass. It sounds a bit weird, but that's it. And then after you've done both of those two steps, you will finally go back and look at maybe the test code and the production code and refactor them, change them to make them in some way better, or loosely some way better.

I think very often we call that Red-Green refactor. Red - the test is failing; you've written the test, it fails. Green - the test is passing; I have written code to make the test pass... And then refactor, fix everything. So that is like your super high-level, zoomed out, beginner's notes version of TDD.

**Mat Ryer:** Brilliant. Yeah. Now, in the real world you can't really do this, can you? If I was gonna make a bicycle and I got Chris to test it, and I was like "Right, Chris, can you test this bicycle?" and he just has to kind of walk around funny, because there's no bicycle yet, you can't really test it until I've built something. That's not true for software though, is it, Chris?

**Chris James:** No. I think it works in the real world because -- well, for one, we're working in the abstract anyway, so we're not in the physical world, because we're writing code, so the rules are a little bit more relaxed than the physical world... But the fact that the test doesn't work at first is the point. What you're trying to do is rather than diving into building lots of fancy code and abstractions of things, your first objective is to figure out what you're trying to build. And that surprisingly - or maybe not surprisingly to some - is a thing that people get wrong a lot of the time.

What I think TDD gives you in this first step is this kind of method for -- it adds discipline to the way you work. It makes you concentrate on trying to accomplish one thing. And by giving yourself this kind of like North Star of what you're trying to accomplish, in theory, or people who like TDD would say is that gives you a better chance of success.

**Mat Ryer:** Yeah, that's interesting. You mentioned that the test failing is kind of important in the beginning... Why is it important that a test fails first?

**Chris James:** \[00:07:53.06\] Because I think we've all been in places where we've written a test and then we kind of go along our happy way, and then we later realize that this test never fails; it's called an evergreen test, where you haven't actually verified that the test fails the way you expect it to fail.

If you don't do this step, not only do you have these tests that don't actually fail for the reason you expect, but it often means that you've left some assumptions on the table. You maybe haven't quite understood the problem as well as you should have.

What's great about writing tests first is computers don't deal with ambiguity. You have to be very precise about what you're gonna do next. Again, that's the reason you want to really make sure that the thing you specify that's correct, you wanna exercise that test and make sure it fails how you would expect.

**Mat Ryer:** Yeah. So you know you're saying something important if it's failing, and then it's later not failing. You know then you've impacted some chance.

**David Wickes:** Yeah, you've gotta have some sort of engagement with the world. You've gotta feel that "I'm changing something." We tend to like green stuff better, because we're human, but it's the red that's important.

**Riya Dattani:** Yeah. And I think later on, when the test fails for some other reason, if you have a useful message, it's easier to act upon it as well. So when you see that Red test, and the message telling you "Hey, you've done this and this wrong", it's really clear and explicit. So in the future, you can quickly understand what you need to fix.

**Mat Ryer:** Yeah, so that's nice then. One of the side effects is you end up with a suite of tests that really are saying something about your program, and then if you do do something which has some unexpected side effect, which happens all the time, in the most unexpected ways (doesn't it?), you then get that feedback from your test suite, so it can help you. That's really valuable. But I suppose people get that by writing unit tests after the fact. What's the benefit of writing the tests before? Is there a benefit, or is it okay to just write your program and get it working, and then just add some unit tests after?

**David Wickes:** Well, a thing that people get wrong with test-driven development is they think it's about tests. It's in the title, right? Test-driven. You think it's gonna be about tests. But if you think test-driven development is all about tests, it's almost like thinking astronomy is all about telescopes. The tests are a tool. They are not what this board game is all about. You're gonna be using tests, you're gonna be writing them. But the side effect of having a nice set of test suites, and being confident in your code - it's great, don't get me wrong. It's a nice thing. But that's like this much of the story.

The story I prefer to tell about test-driven development is this is a tool to help you design software. It doesn't magically design software for you - that's maybe another mistake people make - but it's a way of building software to allow for you to discover the design. It's a tool to let you think about the design of your software, rather than a sort of, well, a thing about tests; that's what it's not. Or a thing that magically creates a design. It's also not that. So yeah, let's think about that - it's a tool to help you design software.

**Mat Ryer:** Yeah, that is a nice point, because one of the criticisms you hear about TDD is that you end up writing weird code in order to make it testable... But in my experience, that's only led to better code. I've never looked back and thought "I wish I didn't have to test this code. Then I could write it in a different way that was better."

**David Wickes:** Yes.

**Chris James:** Yeah, the way I like to look at it relating to this is this whole idea of top-down and bottom-up for TDD. TDD doesn't say that you have to do one or the other, to be clear, but I think TDD is simpler to practice from the top-down. And the reason for that is that really the tests you should be writing should be very consumer-focused.

Now, consumer-focused is also quite difficult to pin down. Like, do you mean the consumer of an API? Do you mean the consumer as a user clicking around on a website? That can be quite hard to pin down. But by driving from the top-down, it means that your tests really should read as if it was being called by a consumer. And in that respect, you tend to not have these kind of strange-looking tests. Generally, you'll have tests that express the truth in terms of "When I call this thing, this useful behavior comes up."

\[00:12:07.14\] And again, this idea of behavior is very important with TDD as well; it's this idea of "We don't want our tests to be coupled to a sort of implementation detail", because implementation details we wanna be able to change freely. We don't want our tests locking us down. And I've certainly been in projects where we feel like we're doing a really good job, we've written tons of unit tests, we've got amazing, incredible coverage and things, but then at the same time we're all like "Yeah, I don't really wanna refactor that, because I'm gonna have to change half a dozen tests... So we'll just leave the code, we'll leave that tire fire as is."

And I think that comes again from this angle of maybe going bottom-up in trying to test your design, rather than thinking about it in terms of "What does a consumer want?" Because when you pin down what a consumer wants, that helps guide your design a bit better. Because rather than kind of imagining all of these abstractions, all of these designs, and interfaces, and all this malarkey, instead you're just thinking "We've got a single goal, and I've pinned it down precisely, because I've got it written down in code. It's not just like some words in JIRA, or whatever; I've got it really precisely defined. Now what is the design I need to accomplish that?" And that means - again, it's this idea of discipline to writing your software; not being overly imaginative, and things.

It's not trying to suck the fun out of software development entirely, but I think a lot of the time developers can be a bit guilty of diving in a bit too quickly and not really slowing down and thinking about what they're trying to achieve.

**Mat Ryer:** Interesting. Riya, you're perhaps the one that came across this concept more recently than the rest of us... So how was it when you first encountered this idea? What was your experience with it, and what did you think of it?

**Riya Dattani:** So what's interesting is I learned how to develop through a software bootcamp, and luckily, the bootcamp that I went to taught us how to do TDD. So in my experience, I've always known about it, and I've always thought "Yes, testing is part of software development. How could it not be?" So from my approach, I think testing is important, but I would say that I didn't really understand why, in the sense -- I knew that you should do it, but I didn't really grasp the importance of it, or how it would help me design code, until I started doing it a lot more at my job.

So from my perspective, when I was doing something that's real, so writing software for a company, I think I'd get really confused when I saw a JIRA ticket at the beginning... I was like, "Oh yeah, I know how to do this through code. I can just write this, this and this", and I would make it pass. But the tests made me break it down into smaller chunks... And that's when I really started understanding how it would help design... Because thinking of it in a modular way just made me think about just that one problem at a time, that one behavior. So I think it was only later on that I really grasped that importance of TDD.

**Mat Ryer:** Yeah. It's funny, you get to really also be like the first user of your code, don't you? If you think about -- like, hopefully, we know that user experience is important if you're building a product, or if you're building a website; the end user experience is very important. We don't always apply that to our code in our API's, and things... But it is important, because these API's are used by people, aren't they? The first users of that are the people. Obviously, at runtime it's machines talking to each other, but there is a human there.

So what's the benefit then, of being your own first customer? Does it change the way that your APIs end up looking?

**David Wickes:** I think it can change the way an API looks. It can. I'm not gonna suggest -- some people can't just roll right off the bat themselves without TDD-ing and going that way. I think for me it starts with that failing test you're writing. You should be thinking -- imagine this beautiful world you live in where you've got the thing that does the thing that you want it to do. When you're using it, you don't wanna be calling eight different things, five methods there, to get to the answer you want. You basically want "Give me the thing I want as a method or a function." That's it. The magic box that does the thing you want.

\[00:16:12.17\] And then by writing that in the test to begin with, just saying "This is what I as a person/consumer want to be getting out of this", you're then led through a nice API. Because yes, as you said, you're the first consumer of the API. Those tests are the first consumer of the API. They document the API quite nicely. API not just in terms of -- I mean, to be clear, API in terms of, say, an object's interface, or the way a function works. We're not just talking in terms of HTTP API's, which people often think about.

**Mat Ryer:** Yeah, good point. We mean any kind of code that \[unintelligible 00:16:47.18\] consume.

**David Wickes:** Interface.

**Mat Ryer:** Any kind of interface, yeah. And it is a user interface, really. So when talking about the Red-Green refactor thing - how strictly do you do that? Because if you stick to it very strictly, you basically have errors to start with, because you're calling methods or you're using objects that just don't exist... And in a way it's nice, because you get a kind of to-do list laid out for you; you try and run the tests, it doesn't build, so you get errors... And really, all you have to do is make those errors pass and you'll progress it in some way. How strictly do you do that? Do you tend to write a bit of code at the same time, or what's your process?

**Chris James:** This is one of these things where -- I definitely won't sit here and say "I'm absolutely strict all the time." But honestly, I think the more I've done TDD, the more I've appreciated the importance of being strict with it. I think people when they learn TDD, they read some post about it, and they'll follow the process, and they'll go "Yeah, I get it. It's getting a bit tedious now", and maybe they'll skip a few steps, or whatever; they're thinking they're too smart for it. But more often than not, that kind of ends up tripping you up in the end, and you start making these mistakes. And unfortunately, some of these mistakes don't become apparent until later. For instance, this idea of these evergreen tests is a good example of that. If you don't exercise seeing the test fail, that's the sort of thing that would bite you in the bum in three months' time when you've lost all the context around it... And even worse, it might be one of your colleagues rather than yourself, so someone else is paying that price.

You know, the steps are there for a reason. They're there to make sure that you keep focus on the particular task at hand. Coming back to the Red step, I just wanted to add to Dave's bit... We were talking earlier about how we don't like the Red states. We don't like seeing failing tests. But the way Dave was talking about it reminded me about how this is actually the chance to be optimistic about your code, and actually be a bit more idealistic and write the tests you want to see. And I think that's a really nice step.

The failing part is just the validation. It's not a personal attack on you, it's just "Okay, it's failing how you'd expect", and then you get on to the next step. And again, I think it's really important on the next step that when we're making it pass, the strict part is only writing enough code to make that pass. And there's this really nice quote from \[unintelligible 00:19:01.21\] And what he's saying here is you shouldn't be creative at this point. You're just trying to make the software work. Because \[unintelligible 00:19:10.17\] your software doesn't work how you want it to work. So you wanna get out of this Red state as quickly as possible, because then you have the promise of the refactoring stage later... But you should only be doing this creative thought process and making things nice when you know the code works. If you're trying to make things nice and make the code work at the same time, you're doing two things at once... And software development is hard enough. A thing I like about TDD is it's just trying to make it simple, really easy to understand steps that reduce the amount of overhead that you have to go through when you're writing software.

**David Wickes:** \[00:19:44.09\] I agree with everything Chris has said... I just would like to put out a word of warning in terms of following the process. Because we agree that following the process is important - Red-Green-Refactor. This can be terrible; this can be a terrible mistake sometimes... Because if you follow that process like it's a magic algorithm to spit code out, you're basically "I write my tests like that. It's done. I write my code. Next. Refactor. Well, I only know a few methods... Write another test. Write some more code. Refactor. \[unintelligible 00:20:11.13\]" It doesn't work. Rich Hickey has a great line about TDD. I mean, I feel he misunderstands TDD, don't get me wrong, but he says it's basically like driving by hitting the guard rails. "Oh, that broke. Oh, that broke. Oh, that broke. I don't really know what I'm doing, but I'm writing tests, so it must be working, and I must be making progress." This is wrong. If you're doing TDD like that, you're missing the trick. I'll put it like that. I don't think you're doing TDD very well if you're doing it like that.

You should be looking at each stage and thinking, carefully, "What's going on here?" When you're writing that failing test \[unintelligible 00:20:47.20\] But the other thing is "What is this like now, when I'm writing this failing test?" Now I've got all these other tests in my wonderful test suite; is it easy to write this next test? Is it hard? Am I now having to do some weird logical \[unintelligible 00:21:03.05\] in order to get this test written? If you are, don't do that. Back out. You need now to go back to refactoring. I know, we just went from writing a new test back to refactoring, but this is fine. You might need to do this sometimes, refactoring your code, to make that next test easier to write.

And this idea that people have is something I hear when people don't like TDD and it's okay not to like TDD. But it's usually a thing like "It doesn't lead to good design. It just leads to chaos, you end up with all these tightly-coupled tests everywhere...", and it's like, dude, this is not gonna drive things for you. It's not a replacement of thinking and common sense; it's a tool, you've gotta use it. So that's that off my chest... \[laughs\]

**Mat Ryer:** Yeah, that's a fair point. That's right, it's not an aimless thing. You're still responsible for designing your code. But I do find it helps me design better code.

**Break:** \[00:22:00.27\]

**Mat Ryer:** We should talk a bit more about how test code can get tightly coupled with program code. How does that happen, and why is that worth avoiding, and how do we avoid it?

**Chris James:** I think that there are a few things... I mean, it's very hard to give a pithy answer to that.

**Mat Ryer:** Oh, don't then.

**Chris James:** Okay, fine. \[unintelligible 00:23:20.13\]

**Mat Ryer:** \[laughs\] Yeah. We only want pithy answers...

**Chris James:** There are a few things that you can look out for. I think if you're happening to have mocks, which is everyone's favorite subject - there's nothing wrong with mocks, or test doubles... But as with anything, if you use them too much or you use them incorrectly, that can cause problems. Because one reason you use mocks is to spy on something. You wanna check that something happened within the internals of the thing you're testing. And sometimes you definitely need to do that, because your thing has side effects, and you're interested in those side effects, but you really need to think carefully about this kind of thing... Because if you end up spying too much on your code - again, it comes to the point where if you want to then change the implementation details, you're gonna end up having loads of failing mocks and all sorts of tedious changes you're gonna have to do to go through it.

\[00:24:05.22\] The other thing I would say is, again, I think you're less likely to have these kind of tests that are too coupled to implementation details if you start from the top. The problem with bottom-up development is you're not really using TDD at this point as a design tool, you're using TDD as a means of writing tests. And as Dave said, that's not really the point of it. And generally, if you're going bottom-up, what you've done is you've imagined some kind of design. You figured out "Oh, \[unintelligible 00:24:30.21\] Okay, I'm gonna write some tests around all of that." But if your design isn't correct, you're gonna end up again with this problem of these tests becoming more of a hindrance than actually helping you.

**Riya Dattani:** Well, to me, when I'm writing a test, I like to keep it simple... And from the top-bottom approach, it's just nice when you have, say, like an acceptance test, and that's already focusing on something, and then you have a couple of unit tests for something that parses that acceptance test. And that's okay if that's failing, but it's already kind of like narrowing down what you need to do, and trying to make it small. Obviously, you shouldn't write an acceptance test for every single thing, but having that approach is easier to kind of make sure that you're not dealing with too many things at once. So that's how I try to look at it if I even have to code something...

**Mat Ryer:** Yeah, I like that. It gives you something to focus on. It helps with that focus. Some people even, when they're writing code or working on something across many days, they will leave the state with a broken test. Because when they come to it the next day, you know exactly what you need to do, and you can sort of get straight back into the flow of it. And I do find that actually to be quite nice. Any other tips like that?

**David Wickes:** Well, the acceptance test will -- you know, if we're talking about top-down TDD, the acceptance test will fail for a long time. You're going to start out later with this idea of behavior of the whole system - you're not gonna get to that quickly. So that acceptance test - it may get committed in, commented out, or skipped. Whatever works for you in a testing framework, or a lack of a framework... Yeah, that's important. And yes, I find that works really well in terms of individual unit tests. If you end up at the end of the day thinking "Well, this is the next bit of behavior I would like to implement. This is the next thing I'll write", yeah, put it in there, say what's gonna happen, and get through. And Chris has got a hand up, so I think he's about to talk about behavior... \[laughs\]

**Chris James:** No, I was gonna say, given this is a Go podcast - you know, we're talking about TDD, but actually, I would personally recommend, when you're doing Go and TDD, from a default position, use the external test package technique, where your tests have \_test in their package name. And what that means is that they can only use exported members from the package it's testing. That has two benefits. One, again, it's this kind of idea of you see it from a consumer's point of view. I mean, in some cases you can more or less copy and paste the test code and dump it into your own code and it'll be basically the same usage. But secondly, it means you can't reach into implementation detail within that Go package.

So it just kind of stops that bad habit of testing unexported or private things... Because going outside of the Go world, it's pretty much a given that people say you shouldn't test private methods if you're working, say, in OO land. And the reason for that - again, you don't want your tests coupled to implementation details. So that's the way in the Go world that you can protect yourself a bit from that sort of anti-pattern.

**Mat Ryer:** Yeah. I like that, too. And it's also like -- even those silly things like you get to make sure that your API reads nicely. Remember that the package name is gonna be used each time those types and methods and functions are called... So it's kind of nice that you get to be that customer again, the first time. I do that if I can.

\[00:27:52.23\] I also find -- if I'm doing something that is hard... And by hard I mean say I've got some input data and I'm gonna transform it, or something; something that's quite difficult to keep in my mind. Having a test there which I can just keep running as I'm writing and tweaking the code - that to me almost feels like a cheating way of coding. Like, I don't have to be good at coding to do that. I can just keep trying little things, and do little experiments. And I find it catches off-by-one errors and things like that quite nicely. So I like that stuff.

We've got some questions in our GoTimeFM channel on Gopherslack... If you wanna join the chat, then you can do so in there. Barnaby Salter asks "Do you use Testify when writing your tests?" Troll emoji. Do you? Bear in mind, I created Testify.

**Chris James:** I believe Is is an improvement... Right? That was the correct thing to say, right Mat?

**Mat Ryer:** Yeah, thank you. I'll send you a fiver.

**David Wickes:** The cool kids are all using Is now, from what I can tell.

**Mat Ryer:** Yeah. \[laughs\]

**Chris James:** This is a difficult one, because I'm a bit of a stickler for type safety... And the thing that kind of gives me an uncomfortable feeling with those things is that they all take interface in order to have a generalized \[unintelligible 00:29:12.03\] It has to take interface, at least until we get generics... And I have been in situations where people have been confused because they see two things -- like, it prints out "These two things are not equal" and you look at them and it's like "Yeah, they are." But it's because the two types are different somehow, but the string coming out is the same.

So generally, I kind of don't use those things, but I don't think it's a big deal either way, personally. I think it's just a matter of taste, really.

**Mat Ryer:** Yeah. I mean, as long as you're writing good test code, that's really what matters. Is, by the way, which - I call it "Testify off steroids", it does actually check the types. So if you pass in a float and an int, and the wrong type, it will tell you that although they are the same number, they are not the same. And I think Testify also does that too, although I don't know...

There is some weirdness in Go where, because it's an interface, you pass in types and they're changed in that process; because an interface is kind of a type and a pointer to the data. So you're actually changing the things... So that's a rare edge case.

**Chris James:** Sorry, I was just gonna say, what I mean was compile-time check. That's what I was referring to.

**Mat Ryer:** Right, yes. \[unintelligible 00:30:23.21\]

**Chris James:** Basically, I see red squiggles in my IDE, because they reassure me that I'm wrong; because normally, I am. So whilst they might do that check when you run the test at compile-time, they're still at that interface level.

**Mat Ryer:** Yes.

**David Wickes:** That's actually a fairly good point. The first failure, the first red failure for your testing is compiling, right? You've gotta get the code compiling first. People often seem to think the failing test is the important bit in the actual running code. I think TDD starts at that point, where I've written my magical Wonderland code there that doesn't exist yet, and now I've gotta get it compiled, and then I'll get the test to fail, and then move on... I think, anyway.

**Mat Ryer:** Yeah. How about tests for collaboration? Have you ever tried writing tests for somebody you're pairing with, and then switching and they implement? Have you ever done anything like that?

**David Wickes:** \[laughs\] Yes...?

**Riya Dattani:** We did a lot of this at the bootcamp and at work. Obviously, there are different methods driving \[unintelligible 00:31:23.24\] But there are also things like ping-pong, which I think is really nice, as in - you write a failing test, and then the other developer that you're pairing with parses the test, and then they write a test, and then you parse that test, if that makes sense. And I think it's really interesting, because you're almost given that release from not even thinking about how you're gonna pass that test... That's kind of the other developer's job.

I really like that about ping-pong, because you could get a completely different answer or production code from what you had envisioned that you would write for it, and bouncing off each other in that way... Oh, is that why it's called ping-pong? Sorry... \[laughter\]

**David Wickes:** \[unintelligible 00:32:10.05\]

**Riya Dattani:** Yeah, so bouncing off each other in that way could actually surprise you on how you design your code.

**Mat Ryer:** \[00:32:19.13\] I love that. I've actually never thought of that... That idea that you're free to not worry about how you're gonna solve it. All you're focusing on is how you want to use that code. I think that's actually a great point, yeah.

**Chris James:** And tied to that, another important thing about CD is this idea of iterativeness. So it should be behavior-focused, but you should be trying to cut the scope of the thing down to the smaller vertical size as you can... Because the idea is that we work in a knowledge trade, and feedback loops helps us improve our knowledge of what we're doing. So if we tighten those feedback loops and we get faster feedback on what we're doing, we have a better chance of success.

And what I like about that ping-pong thing is it feels bad if you're holding the keyboard for a long time, or if your colleague is on the keyboard for a longer time... And it kind of brings out that conversation of like "Why have I been holding the keyboard for half an hour?" This sort of thing should be like "I write a test for like 2-3 minutes maybe, if that, and then I pass it to my friend, and we go back and forth." If you're not having that fast sort of back-and-forth, that tells you that you're not thinking about breaking the problem down well enough.

**Mat Ryer:** That's interesting.

**Riya Dattani:** I'd actually like to quickly add on that as well - I think I remember when I started off at my job for software development, I was actually pairing with Dave and he did something really good... And that was, when we were pairing on something - I think we did the ping-pong strategy as well. And if I would write a test, he would actually guide me to write a test that is focused on behavior.

For example, if I said "I expect 1+2 to be 3, he would just return the code and say "Oh yeah, so this function is gonna return three." And that was really good in the beginning, because we learned how to really test behavior, rather than the actual output of something.

**Mat Ryer:** Yeah, I see. So you have an example in your test code, and you can just pass that test by cheating...

**Riya Dattani:** Yeah.

**Mat Ryer:** ...so maybe then you'll write either a few examples, or maybe do something different. Maybe there's a loop; you do a little 1 to 10, or something like that. So that's quite interesting... Yeah, using Go code and treating test code like it's normal code, and seeing how that can impact it. I think that's great. Testing was a first-class concern for Go. Does that make it easier to do TDD, or can you do TDD in any language?

**Chris James:** I think it does make the barriers to entry a bit simple, but I would say it makes testing easier. I suppose, if you consider one of the goals of TDD is to help you design - Go is a fairly limited language, on purpose; it's very simple, there's not a lot of abstraction power and all that kind of business, so it reduces the problem space... It reduces the number of possible design solutions for the thing you're solving. So in some respects it kind of helps you with the design because you're not arguing over abstract classes or monads or whatever... There's a small collection of valid solutions to this particular thing... So in that respect it kind of makes design easier. But personally, I don't think it makes that much difference to TDD other than a slightly lower barrier to entry, I suppose.

**Mat Ryer:** Yeah.

**David Wickes:** I was just gonna say, I was wildly excited when I first met Go and testing was in there already. It's a wonderful thing, and I think more languages in the future should do the same thing. It's such a good idea.

**Mat Ryer:** Yeah, I think they will. I think Ruby on Rails was the first time I saw where it was just there from the beginning... And yeah, Go has it... And I think that is now a given. I think unit testing and these capabilities are kind of now what is just a given. Because we even had that before we had proper debugger support in Go... So that shows you, actually -- and I don't use a debugger, really. Do you, Chris?

**Chris James:** \[unintelligible 00:36:03.01\] I think actually the built-in testing does help with TDD, because I like to think that the Go community, because it's so built in and entrenched in the language, the community has a culture of testing. Not necessarily TDD, but it has a culture of testing, right? I guess people talking about testing, and what we want from testing, and things...

\[00:36:24.05\] So actually, I think the fact that it's baked in is just a signal to all Go developers, like "Go ahead, go write your tests, because it's important." And no, I don't use a debugger very much at all. I personally think just writing a failing test or just a test to exercise whatever I was doing with the debugger is a million times simpler. And I can never remember all the keyboard shortcuts of the debugger anyway... F10, F9... I don't know. I don't know what step in and step out means, I'm always just confused... \[laughs\]

**Mat Ryer:** Yeah. Are you a good dancer?

**Chris James:** Absolutely not.

**Mat Ryer:** There you go. They could be linked.

**Chris James:** It makes sense, yeah.

**Mat Ryer:** What about when you're prototyping, when you're just a new thing, brand new, you've no idea what you're gonna do, you almost don't even know how you're gonna even tackle a problem, or even think about it... How do you feel about people that will just do the prototype first, and then maybe that gets thrown away and they start TDD? Is that okay, or would you even write tests in that case?

**Riya Dattani:** I have a feeling I'm gonna steal what Chris is about to say \[unintelligible 00:37:26.06\] I think it's a really useful thing. So if you really have no idea what your requirements are and you don't even know what you're gonna build and you just wanna try something out, you should do a spike. And that is just writing production code, and seeing how you go about it... And then once you get an idea of what you're doing, delete it. But really delete it, and start over again, through TDD, and you'll almost always come up with a different design to your code, and probably a better solution as well. So yeah, I think that's the approach that I've been taught and I agree with.

**Mat Ryer:** Yeah, that sounds great. I like what you say about that. Really do disregard it. Don't keep any of it, because you don't have the protections that you would have if you TDD-ed it.

Another criticism people talk about with TDD is they think "We just don't have time. We don't have time to do this. We've gotta get a feature out by Friday. It's urgent", and obviously, writing test code and production code is slower. Isn't it...? \[laughter\] That was a leading inclination \[unintelligible 00:38:37.11\]

**David Wickes:** I think if we all just took some time to think about what we do in our lives and in our jobs as software developers - is typing at the keyboard, is that really the bottleneck in our lives? Generating code? The thing that stopped me getting this thing out into production this week was the fact that I have 60 words per minute and not 120? No. Right? Now, don't get me wrong, it's really important to have a loud mechanical keyboard and type quickly just to absolutely intimidate everybody around you, but...

**Mat Ryer:** Yeah, they've gotta know you're doing your work.

**David Wickes:** Yeah, it's important. It's great. It's like, "Oh, look, they must be doing something." I mean, to be honest, it's when I'm not typing that I'm doing something... It's when I'm sitting there, thinking, going "How the hell am I gonna fix this?" or "How the hell am I gonna make this work?"

**Mat Ryer:** You could do with a mechanical brain, so that people could hear that...

**David Wickes:** If only I had a mechanical brain... It would just rust.

**Mat Ryer:** \[unintelligible 00:39:32.08\]

**David Wickes:** Again, the bottleneck is not typing. The bottleneck is not code production. The bottleneck is thinking and understanding and trying to do the right thing. And that in terms of a bottleneck is not gonna be made any slower writing TDD... If you don't know how to do TDD, it will be slower; if you think... You know, the week that I've got crunchtime in order to get something out, in order to not get fired - that is not the time to learn TDD. This is a bad time to learn TDD. Don't start doing TDD that week.

\[00:40:07.06\] But if you do know how to do TDD, it is no slower, and it may be faster - because like I say, it's a thinking tool; it's a way of leveraging a test in order to think harder about your code and the right way to write it... That's when it might be better, and you'll get things done faster.

So I very much reject this idea that "Oh no, the tests are gonna slow me down. I've gotta write a lot of tests now, as well all the production code..." No. One, you should be writing those tests anyway. I think you should be writing tested code. I think not writing tested code is not a good thing these days. And the second thing is those tests are a tool to help you get to a good design and a good place if you're doing TDD. So yeah, please. I don't think it's a slow thing. But if people actually think -- and you know, could provide me some evidence that it's the typing that's slowing them down, then good for them; please don't do TDD. Crack out all that code as fast as you can.

**Mat Ryer:** Yeah, so I agree with that. I am much faster with TDD than I am without it, because of that immediate feedback I get. I don't have to imagine and keep it all in my brain. I can just find out the answer by running the test.

**Chris James:** Jason Gorman did a little test - he blogged about it, I think - around the Roman numerals kata, where he basically spent one day doing it TDD, and then the next doing it without TDD, and he ping-ponged between the two. You know, very different solutions each time. Over time, he was basically faster doing TDD, is essentially what he discovered. \[unintelligible 00:41:30.09\] but it definitely wasn't any slower. It's a hard problem, hard to think about.

**Break:** \[00:41:38.28\]

**Mat Ryer:** Is TDD something that's like, you know, you can sit there in your ivory towers, in this academic space where we can be on podcasts and talk about "This is what it should do"? What about when you're on the ground? Are there real examples? Do we know, are people doing this? Is this something that happens?

**Chris James:** I don' think TDD is as rare as people think it is. It's used in banks, and pacemakers, but the most wonderful news I heard was a fine gentleman who works on some Mars space rocket or something like that - he said that they did their code with TDD. So not only does it work in the real world on Earth, but it works in another world as well.

\[00:44:15.14\] It's an extremely practical tool for writing software. It's not some strange niche thing... It's actually a very mature technique in terms of the software world. It's not like this thing has been \[unintelligible 00:44:25.29\] five years ago. It's pretty old, there's some really good books on it, and plenty of people are using it successfully.

**Mat Ryer:** Yeah, it's brilliant. I love that. I mean, the fact is it's used on robots on Mars... I mean, it can't be that bad, can it? \[laughter\] If it's on Mars. What next for it? What do you think is next for it? Jupiter? That's a real question, you have to answer now.

**David Wickes:** I predict TDD in Alpha Centauri in the next 50 years. There you go. Hopefully I'll be dead by then. \[laughter\] Aliens doing TDD right now somewhere, I bet.

**Mat Ryer:** Well, maybe they would be. I actually think they would be. I think if there's any -- yeah, I mean that. I do think aliens would do TDD; I really do mean that. I'm not trying to be funny. It's a bit like how mathematics -- we send prime numbers out, we transmit, to prove intelligent life... We do that with the assumption that they have the same mathematics. I think they're gonna be writing software probably, if they're advanced enough... I don't know. And I think they'd probably be doing TDD.

Send in your tweets, tell us what you think. Do you think aliens are gonna be doing TDD? We'd love to hear from you.

Are there any gotchas to look out for with TDD? We talked about a couple. Are there any situations where you just wouldn't use that at all, or can it go wrong?

**Chris James:** It can definitely go wrong... I think lots of people go wrong with it, and I hope some people listening to this will give TDD a go. You will probably find it hard, and you'll probably fail at first. It's kind of inevitable. I think what people need to really do is to try and be honest about the quality of their test code at first. The amazing thing about tests is that they are a lens into your code. We talked about viewing the code as a consumer, and a lot of people kind of live with these terrible tests that are horrendous to read, and they accept that... And perhaps - again, coming back to this sort of culture of fear of deadlines and things, "We haven't got time to refactor the tests, we'll just live with them", or whatever... But we should be treating tests as seriously as we do our production code. And if we do that, you start to get insights about your code.

We talked about test doubles and mocking earlier... A really easy thing to check with your tests is that "Do you have a ton of setup code for your tests, creating a lot of mocks and mocking out behavior of things?" I think we've all seen tests like this, where there's like 100 lines of mocking setup and then three lines of code that are actually interesting. Again, people \[unintelligible 00:47:04.20\] you need to be asking yourself "What does this mean? Why does this thing have to collaborate with so many things in order to get its job done?" That should be ringing alarm bells in your head. "Why is this thing coupled to so many different things?" What happens when we change these things? Obviously, loads of stuff is gonna break. So you can use that to guide yourself in terms of helping improve your design.

Another trick I like to get people to do is just read your tests out loud to a colleague. It's often harder than you think it is. Even \[unintelligible 00:47:35.25\] you think to yourself, "Oh, this test looks great. It's only four lines of code. This test is brilliant." And then you read it out loud and you're like "I actually have no idea what this test is expressing at all. It's nonsense."

\[00:47:46.27\] Again, it's this idea that tests - they're telling you something. And the beauty of it is that it's this focused lens on a particular part of your system. It's quite hard to appraise lumps of code in your IDE in isolation. You see some function on its own, you go "Yeah, sure, that's great. It's just some function." But when you see it being used, that's when you start to understand. So the real pitfalls of TDD really are -- well, one of them is people not looking at their test code and thinking about it properly.

**Mat Ryer:** Yeah, I think that's right. You should treat your test code as important, or more important really, than your program code... Because that's another thing that happens - it's very easy to just "I'm gonna nip into this project, I'm gonna just add another test, because I can't be bothered to read all these other tests. I'm just gonna add another test." And you can end up with test code that's kind of duplicated in some ways, and it's testing the same thing in different places and things... And that's okay; sometimes it's probably unavoidable. But you lose the effect of like, if something does break later, it's quite nice when one test fails and points straight to the thing that's broken, rather than all of your tests failing. Then you still have all your work ahead of you to go and figure out what you've just done. So yeah, I think so. I think treat your test code like it's part of your program code. That is something that Go does well.

**David Wickes:** Test code ideally should tell you what your code does, and in a beautiful world it tells you why it does it. But the production code is how, and that's it. That's a reasonable separation to make between the two.

Just one more gotcha - there's loads of gotchas, but my favorite ones are people who have already got the design in their heads, and then they want to TDD it. So they're like "I've got my design, I know what my API is, I've got all these wonderful methods in my head now. I will now do TDD in order to produce this." And they go "Here's my method name. I'll write the tests with that method, and then next method..." and they just crack through it all. Basically, they could have written the test in one Go. They may have written the test in one Go (why not, at that point?) and "Here's the design." Then they wonder why everything is terrible, because they can't change the design, or they don't like the design, or why even bother doing TDD at that point? And this is, again, the wrong way of doing it.

There's two things going wrong here, one of which is you've already thought of a design. Nah... You want to feel the design approach you as you do TDD, and then slowly back up into it \[unintelligible 00:50:17.23\] Couldn't help myself. The tests will lead you towards it. It doesn't mean the tests will create it for you, but you'll see what is needed from that design.

And the second thing is don't test methods. Never test methods. Well, do test methods, or functions, because there's nothing else to test out there, but you should be trying to test behavior \[unintelligible 00:50:36.06\] Don't just think about "This method does this thing." Write something about the behavior in that test; describe it as well as you can. That way, those tests will last longer, and not just be something trashy and throwaway and really coupled and glued into that particular API you built. Anyway, rant over...

**Mat Ryer:** No, that's great.

**David Wickes:** \[unintelligible 00:50:52.13\]

**Mat Ryer:** That's great, I like that. So don't write too much test code... Because that is something that - when I started doing it, I would try and just write all my test code for everything that I needed. And in some ways, it can help with the design still. And then I set about making that pass. But that's much more difficult than taking it in tiny chunks. Write a piece of it and then make the program code go. How do you do that? Do you tend to kind of keep the progressions small in that way? Or do you sometimes write like "Here's the complete thing that I know I need?" Does it depend?

**Chris James:** I think TDD feels right when you are working in those very small steps, and it always feels very safe. I think TDD feels right when you write a small test for some kind of important modifying behavior, and then you make it pass, you do some refactoring, you do a commit, and you're moving on to the next thing. It should feel like steady progress throughout the day.

I think if you start with a test that you know - and when I say "test", here I'm saying unit test. If you have a unit test that you know is gonna take hours to parse, that is when you're not doing TDD right. You haven't really broken the problem down well enough.

\[00:52:06.00\] I think another sign you're not doing things right is if that sense of iteration and feedback loop - that's lost. If you're stuck in the red for a long time, or you're not moving forward, adding new tests, you're just kind of stuck in one test for a long time, that should tell you that you need to rethink your approach a little bit.

**Mat Ryer:** That's great.

**Riya Dattani:** I have something small to add there... I think it's nicer to do it iteratively, like Chris was saying, because I feel like the refactoring stage is such an important bit. You know, when you're writing something, and you've written the production code a bit, the refactoring stage is when you really look at it and you're not even thinking about the tests or anything. You're actually now concentrating -- it's like a state of mind, and very different to the second stage, where you're just trying to make it pass. The third step is "I'm not trying to make it pass anywhere, I'm trying to make this good design." When there, patterns start emerging and you start writing code that is actually good. It could change and evolve differently to when you would have written all your unit tests beforehand, all in one go. That's what I think.

**Mat Ryer:** Yeah. It's a very good point. And it made me think - do you write test code for the unhappy path, for every possible unhappy path? If your code has lots of if err != nil {return err} If it has a lot of those in a function, do you try and write test coverage so that you cover each of those cases, or is there an element of really picking the important bits and trusting yourself on the rest of it? What's your attitude to testing errors? It's a tough one.

**Chris James:** It really does depend on the nature of the work you're doing. Generally, if you're not really adding anything -- if you're calling something that returns an error, and all you do is just return "if error, return error." If you're not doing anything interesting with it, I feel like it's not really worth the hassle, personally, of adding the tests for that.

But if you're doing something interesting there, in other words, if you're adding behavior, just because it's \[unintelligible 00:54:12.09\] If you're adding behavior, then that's no different from the happy path. You should write some tests around that. And yeah, you might have to \[unintelligible 00:54:21.21\] to make it so the thing fails for you, so you can do the test... But again, when that starts to feel painful, you can start asking yourself questions around this kind of thing, and go "Well, is this worth it, or is there something a bit weird about it \[unintelligible 00:54:32.27\] making this hard to test?" It's difficult to give some concrete advice here. I think there's many things where you have to put on your big boy trousers and just think about it for yourself, "Do we need to do this? Am I confident?" I think another important thing is about confidence. If I know that this is gonna work and I don't need a test, and all the test is doing is just increasing some coverage number - don't worry about that. This whole obsession over test coverage is nonsense. It's an interesting metric, it can be helpful... If it shows that a whole particular function isn't tested at all, then yeah, that's useful. But if your boss is telling you to get 90% test coverage - you know, update your CV... \[laughter\]

**Mat Ryer:** Brutal. Well, it's that time again... It's time for Unpopular Opinions!

**Jingle:** \[00:55:30.18\] to \[00:55:46.08\]

**Mat Ryer:** So, do we have any unpopular opinions today?

**David Wickes:** I mean, all my opinions tend to be unpopular...

**Mat Ryer:** \[laughs\]

**David Wickes:** I'd say we should do this in a pub.

**Mat Ryer:** That was not unpopular! \[laughs\] It's just logistically difficult.

**David Wickes:** Yeah, I mean -- unpopular with everything else.

**Mat Ryer:** Yeah, but it's not Logistically Difficult Opinions, is it? It's Unpopular ones."

**David Wickes:** Yeah. Think about doing that next time, Logistically Difficult \[unintelligible 00:56:07.12\]

**Mat Ryer:** I don't know how I'd fit -- get the words into that song. \[laughs\]

**David Wickes:** Get in the recording studio... It'd be great.

**Mat Ryer:** Yeah.

**David Wickes:** Yeah, I can throw an unpopular opinion -- well, maybe it's not unpopular. Maybe I'm completely wrong.

**Mat Ryer:** We will test these. We test them on Twitter on the @GoTimeFM account. We'll tweet them out with a poll and ask people and we find out. And honestly, most of the time they're not unpopular, but we wonder whether that's just because you put the case so well. So the goal really is to try and get an unpopular opinion where literally more than 50% of people disagree. That's the goal, if we could, Dave.

**David Wickes:** Okay. But not something completely extreme, like "Go is terrible." We should do something else... Okay, so I've been around the Go community for a little while, and I think I can think of something that maybe more people will disagree with than agree with... Abstraction is really, really good. There you go. It's not just really, really good, it's your job. Your job is to write abstractions. You may think your job is to write code that works, but basically, anybody can write code that works. Your real job is to write code that works and abstracts it in a way that means you can build more and better things on top of it.

I feel I get an impression from a lot of people in the Go community that say that abstraction is something to be feared, and avoided. That we must never abstract, and that we must write everything in a 1000-line main method. Main function, sorry. Not method; this is not Java. And that's easier and better in some way, because we can now read everything... When I think that's just terrible. I think this is awful advice. You should genuinely be trying to exercise those muscles in your head that lead to good abstractions, good design, because that's what software design is ultimately - it's abstracting, writing functions, writing structs, not writing methods. This is all abstraction.

And you know, if you're not very good at it, if you fear writing bad abstractions - well, try to make your code something that you can change easily. Design should change, that's a good thing; that's not a bad thing. And also get better at it, because like I say, it's your job; your job is to write abstractions. It's not just here to write zeros and ones; there's a reason...

And you know, people talk about the standard library being brilliant. The standard library is brilliant. I love the standard library so much. It's got some great abstractions in it. Learn from those abstractions. Use those abstractions. Build upon them. Don't just say "Well, we've got this fantastic IO reader here. That's all I need for the rest of my life. I'm done."

So that might be my unpopular opinion... Maybe it's popular. I don't know.

**Mat Ryer:** Very compelling. Interesting. It's funny, I mean - I've definitely kind of advocated for avoiding abstractions until the time is right... Because early abstraction I think is a sin, or can be. But you're right, it kind of depends. And you also write the right abstraction - which is why I think there is a lot of people talking against it - because actually it is the goal; it's gold when you find a good abstraction for something. If you can model that idea in some way... Because it is such an enabler, isn't it? It lets other people then work in this way, and plug into your work. That's very interesting... Chris, do you think that's unpopular, or what?

**Chris James:** I think it might be a little unpopular. I think it's fine for people to have a healthy skepticism to abstractions... Like, yeah, that's fine. I think we've all worked in codebases where the abstractions are working against you because they're just wrong... And I hope that many people have been lucky enough to write some bad abstractions. I think about the first few years in my career - I was going nuts. I was being overly clever, I was trying to abstract everything, make everything cool, and all this kind of business... And you know, it didn't work out a lot of the time. But I wouldn't take that time back, because I learned a lot from doing it.

\[01:00:05.00\] To add to Dave's thing, my worry is that you need to exercise that muscle, you need to work harder and you need to fail before you get good at it. You have to keep practicing and keep trying it out. Coming back to the whole world of TDD and things like that - I genuinely feel what's nice about TDD is it gives you a bit of freedom to play around with this kind of business.

When I was doing my abstractions in the stone age, I didn't have automated tests, so I was just re-running the application every time and \[unintelligible 01:00:32.24\] Nowadays all you kids can write tests and get fast feedback. So I agree with Dave's sentiment, but there's a lot of nuance to it, as to everything.

**Mat Ryer:** Yeah. How about you, Riya?

**David Wickes:** No, there's no nuance. Just be angry all the time \[unintelligible 01:00:49.03\] Sorry.

**Mat Ryer:** \[laughs\] Riya, what do you think about abstractions? What's your take on it currently? Is it something that you strive for? Is it something you avoid?

**Riya Dattani:** Well, with my two years of experience... \[laughs\] Yes, I think I'm at that point where I'm just kind of -- I think I'm just going out there and doing what I think looks good, and in my eyes, when I see a nice abstraction, that looks nice, I'm like "Yeah, I did a good job." But obviously, there's times when it isn't good.

There has been one time though I remember doing something, and because of an abstraction, we saw something and we did the gathering (as we call it), and it actually made us put our code back together in a better way... Yeah, I hope I'm saying that well.

**Mat Ryer:** What's the gathering? It sounds like a horror film. \[laughter\]

**Riya Dattani:** Maybe Dave and Chris could explain that... \[laughs\]

**David Wickes:** Well, that's all on Chris. I think it sounds like a horror film, but that's me.

**Chris James:** Um, okay, I'll try. A lot of people talk about separation of concerns, right? About trying to pull things apart, to make things small, and all that kind of business. But a lot of people miss the cohesion side of this kind of design discussion about how a lot of things that people don't do when they design software is finding this bit over here and this bit over here and go "Oh, actually, these two things - they're related. Every time I wanna change this behavior, I end up going to this file, and this file, and this file. That's happened over and over again." What that should be telling you is that actually these things belong together. They're changing for the same reason. So if you bring it into a cohesive thing, or you could do the gathering, then you stand a chance of improving your code.

**Mat Ryer:** That was a software pattern that was put together by Stephen King originally, I think... \[laughter\] Do we have any other unpopular opinions?

**Chris James:** Well, I do... I think a lot of people talk about CI, and they say they do CI, but when you ask them what their process is, it's not continuous integration, it's continuous isolation. And what I mean by that is CI was invented because the extreme programmers at the time - they realized that a big pain in projects was this group of developers is working over here, and this group of developers is working over here, but they're working in isolation. And when you try to bring the units together, that's when you cause a lot of problems and a lot of pain. And nowadays it seems like the default position is to write pull requests. And they end up suffering the same problems of - people working in isolation, they're not really working together. And when they integrate things, they end up having merge conflicts, and all this other kind of hustle.

So to sum up the unpopular opinion, I would say if you have a group of trusted developers, you have a team who work together, I think you should look into trunk-based development, because it's far simpler a process to work in. And again, coming back to this idea of feedback loops, your feedback loops have way tightened, because you're just all working on one branch, effectively.

I think PRs are great for open source software, because you wanna welcome contributions from other people, and you don't have implicit trust. But presumably, you trust your teammates, so you don't need that overhead, you don't need that ceremony. You should just commit to main and get on with your lives.

**Mat Ryer:** \[01:04:03.03\] That's not unpopular with me. That's exactly how I do it. Just push straight into main. Yeah, nice one.

**David Wickes:** The only way to live. The only way to live.

**Mat Ryer:** \[laughs\] Well, unfortunately, that is all the time we have. I feel like we've really only sort of scratched the surface of test-driven development and testing generally. If you wanted to learn Go with tests, are there any resources that you could use for that, Chris?

**Chris James:** There is a free open source book called "Learn Go with Tests", which will both teach you Go and TDD. So yeah, you should go visit it, and even contribute. I'm trying to work through the pull requests at the moment, but I do welcome contributions and feedback. It's also available in Chinese, Portuguese, Korean, possibly Japanese as well...

**Mat Ryer:** So if you really want a challenge -- oh, I suppose if you speak those languages already, that'd be useful as well.

**Chris James:** Yeah.

**Mat Ryer:** Wow, that's really great. And people have contributed those translations, haven't they? Because no offence, you don't strike me as intelligent enough to do all that yourself.

**Chris James:** No, that's fair. I am a typical British person who just hasn't learned other languages. Basically, what happened was people from the Brazilian Go community - some people reached out and said "Can we translate this?" and I was like "Go for it. I'm incredibly flattered that you'd do that."

They're incredibly organized. They actually have a number of people doing it, and I kind of follow the projects. I mean, all the comments are in Portuguese obviously and I can't understand it, but it looks cool. It looks like they're doing some good stuff.

**Mat Ryer:** Wow, that is so good. I love that that happens... And it's great that you chose to do that just as a free open source thing for everybody, because - you know, I've got a book, "Go Programming Blueprint, Second Edition" still available, but people have to pay for that... So I really admire that, Chris.

**Chris James:** Oh, thank you.

**Mat Ryer:** I mean that as well. I know it sounded sarcastic...

**Chris James:** It didn't sound sincere at all, but I get it.

**Mat Ryer:** I don't know how to sound sincere...

**Chris James:** It's one of these things where I didn't intend it to be like that at all. I just had some free time, I had a perception that there wasn't a lot of TDD material for Go, so I thought "Well, I'll just make a Hello World tutorial in TDD", and it just kind of blew up.

If there's one thing I'll say to the listeners is if you've liked a project, tell the person that you like it, because it's such a motivator. There's no way I would have written all that stuff if I hadn't had such warm feedback about it. I would have stopped at Hello World. But people telling me that it helped them, and they understand TDD a bit better - all that kind of stuff, it makes my day when I hear that kind of stuff. So if you enjoy someone's project, just reach out to them and tell them.

**Mat Ryer:** That's lovely. And Riya, also, thank you for the work you do, helping people. It's great. One of the things I love about the Go community is that we do encourage diversity where other communities don't... And we get the benefit of it. So that's the thing, our lives are all richer for it. So thank you. I know it's not easy; it takes a lot of effort, so that's great. Dave, do you do anything nice, mate?

**David Wickes:** No. \[laughter\] One of my unpopular opinions might be about my two-and-a-half-year-old daughter who basically sucks all the time out of my life, and gave me a one-and-a-half-hour sleep last night.

**Mat Ryer:** Oh. That's generous.

**David Wickes:** So if I'm in any way incoherent and angry, it's mainly her... \[laughter\] I love my daughter, sorry. God, this is gonna be recorded, and she's gonna listen to this when she's like 12 or something... Oh, man. I love you...

**Mat Ryer:** Yeah, 12-year-olds love this podcast.

**David Wickes:** Yeah, yeah. She'll be a Go programmer, I can tell.

**Mat Ryer:** Oh, yeah.

**David Wickes:** I'm gonna get all the plushies...

**Mat Ryer:** Well, thank you so much, and thanks everyone for listening. This has been great. Chris, Dave, Riya - thank you so much. You'll have to come back anytime, we'd love to have you. We'll see you next time on Go Time. Bye!

**David Wickes:** Bye.

**Riya Dattani:** Bye! Thank you, Mat.
