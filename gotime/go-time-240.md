**Mat Ryer:** Hello, there. Welcome to Go Time. I'm your Mat Ryer, and today we're talking about Go 1.19, the next major release of Go. Joining me, it's co-host, it's Golang Johnny. Hello, Golang Johnny.

**Johnny Boursiquot:** Hello, there. I'm happy to be back.

**Mat Ryer:** Welcome back. Yeah, good to have you back. It's been a while...

**Johnny Boursiquot:** It's been a minute, yeah. Yeah. I've just had some vacation squeezed in there, you know, and had stuff going on...

**Mat Ryer:** Nice.

**Johnny Boursiquot:** So yeah, it's been a minute, and I'm glad to be back.

**Mat Ryer:** Where did you go?

**Johnny Boursiquot:** I went to Zambia, a country in Africa. I'll tell you, I've seen some of the most beautiful sunsets I've ever seen in my life, and hung out with zebras while I was having dinner, I went and saw some warthogs, and elephants, and baboons hanging out in the middle of the pathway, and went to see Victoria Falls... Truly breathtaking stuff. I mean, it was very, very enjoyable.

**Mat Ryer:** That sounds amazing. It sounds like a Disney film.

**Johnny Boursiquot:** I mean, yeah, that's why they usually go to these places to record those documentaries and stuff. That's where all the fun stuff is.

**Mat Ryer:** Yeah. You know that a Disney cartoon is not a documentary, don't you, Johnny?

**Johnny Boursiquot:** Well, I did run across Pumbaa, and I was trying to have a conversation and say, "Hey, where's Timon?" He kind of chased me back to the car, so it wasn't a very productive or fruitful conversation, unfortunately.

**Mat Ryer:** \[laughs\] Amazing. Well, it sounds amazing. Hopefully, you're well rested and ready to learn about Go 1.19.

**Johnny Boursiquot:** Yes.

**Mat Ryer:** Well, we're also joined by Carl Johnson, director of technology at Spotlight PA. And Carl, you're Golang Carl too, right?

**Carl Johnson:** Yeah. It's not my Twitter handle or anything, but after you guys said that Johnny is Golang Johnny, I googled Golang Carl, and I do come up. So if there's some other Carl out there who's going to try to defeat me in the search rankings - no, I will bury you.

**Johnny Boursiquot:** Too bad.

**Carl Johnson:** Yeah. \[laughter\]

**Carl Johnson:** If you search for Carl Johnson on Google images, do either of you know-- what do you see when you search for that? Alright...

**Mat Ryer:** Okay.

**Johnny Boursiquot:** Oh, boy...

**Carl Johnson:** So this is good...

**Mat Ryer:** Okay, we're doing it.

**Carl Johnson:** Yeah. What do we see?

**Johnny Boursiquot:** Oh, boy. Oh, wow, Carl, you're an official character.

**Mat Ryer:** Oh, is it somebody-- is it GTA?

**Carl Johnson:** Yes, that's right. I'm the star of Grand Theft Auto 3 San Andreas. I don't think I'm ever going to displace Carl Johnson of GTA. But at least for Golang Carl, I'm number one.

**Johnny Boursiquot:** Yeah, yeah. What happened to your tan? \[laughs\]

**Carl Johnson:** Yeah, it's a—

**Mat Ryer:** You've got good muscles.

**Carl Johnson:** Yeah. \[laughs\] Well, really it's -- you spend a lot of time in prison and it changes people.

**Johnny Boursiquot:** It changes you in many ways... \[laughter\]

**Mat Ryer:** Well, speaking of tan - and I say this only because SPF 13 is his name, and SPF is what they measure the tanning lotions in - I wanted to just say a kind of goodbye to Steve Francia, our friend, friend of the show, friend of Go. He's leaving the Go team. And you know, Steve has done such great open source work that a lot of people will be familiar with, but there's also loads of energy that he put into helping the community behind the scenes that you'll probably never hear about. And so hopefully, Steve, it's not goodbye forever. We hope you'll still be around. But yeah, Steve Francia.

**Johnny Boursiquot:** Mm-hm.

**Mat Ryer:** And also, we've got GopherCon EU coming up in Berlin very soon. I'm going to actually be there. I'm actually going to be there in real life, which is kind of very exciting for me.

**Carl Johnson:** \[08:04\] It's very exciting to sort of come back to going to things in-person, and seeing people.

**Mat Ryer:** Yeah.

**Carl Johnson:** I don't know. I could do without riding in airplanes, but it is sort of nice to leave the house, at least. Is this your first real conference since COVID?

**Mat Ryer:** No, we had a company one at Grafana, a big one, where the whole company got together in Whistler, in Canada. And that was epic. But it is definitely strange being around people again, and we sort of have to learn how to do it. We've sort of forgotten a lot of the time. But yeah, I'm so pleased that we get to go and actually meet real people again. It's going to be epic.

Okay, let's dig in, shall we? Go 1.19. There's some great things coming in this. Now, Go 1.18, the previous release, had like big old features. Generics... It had fuzzing, and workspaces... These are big things, big changes. And I still feel like we're not yet really used to those, but that's not going to stop us from digging into Go 1.19.

**Carl Johnson:** Yeah. So for any listeners who aren't familiar with the Go release cycle, the Go team essentially aims to have a new release every six months. And basically, since they've set out to do that, they've hit all of their targets. Go 1.8 was maybe like a month behind when it was supposed to come out. It was supposed to come out maybe in like February and it came out in March instead, or something. But for a release of that size, it's unbelievable that they were-- \[laughs\] within a year, if we know about software estimation and how hard it is to do.

So they have a release cycle of every six months. There's a period where the development branch is open, and they accept new features into the Go software, into the standard library, and so forth. And then there becomes a freeze period where you can't add any new features. All you can do is make sure that the existing features actually work the way they're supposed to work. And so we've been coming out to the end of the freeze period. They've been doing betas and release candidates... The last time I looked, Go 1.19 had at least one release candidate out. Probably by the time a lot of listeners are hearing this, it might already be released. And so they're on track for their release cycle of releasing Go 1.19 in early August.

**Mat Ryer:** Yeah, it's impressive.

**Carl Johnson:** But yeah, so coming after 1.18, which was this huge, mind-blowing release, which had so much effort behind it, so many incredible features, it's a little bit of a change in pace.

**Mat Ryer:** Yeah. So do we expect to see anything big coming out, or is this literally like-- is this a smaller release, this one?

**Carl Johnson:** It's smaller in the sense that there's no major changes to the language. It's not something that we're just going to be talking about again and again for years the way we'll talk about generics, or even fuzzing, or workspaces. One of the things that they've been doing behind the scenes, if you've been paying attention, is that generics - of course, it's a major change to the language, so there's lots of little bugs, where it's like if you make this type, what type of this, and then that, and then the compiler explodes, and has like a core dump, or something... So they've been ironing all those bugs out as they find them. They've been trying to refine things and make sure that it works, even for really gnarly code segments. So that work has been going on behind the scenes.

But yeah, if you look at Go 1.19, it's like more of a refinement release. If you guys are familiar with the TikTok terminology, so there's the idea of like - for Intel, they would release chips that... I don't remember which is which, but there's a tick and there's a tock. So they would change their chips to be on a smaller scale, and that was either called tick or tock, and then they would make the chips better at the new scale. And that was the other one.

**Mat Ryer:** I see.

**Carl Johnson:** And so it's sort of like that.

**Mat Ryer:** No, I thought you meant the dancing. I thought you meant the dancing kids, and animals doing funny stuff.

**Carl Johnson:** If you're familiar with TikTok, yes. I'm a total nerd. I can't assume that people are familiar with very popular social networks.

**Johnny Boursiquot:** \[12:03\] I was like, "Carl, are you on TikTok?" \[laughs\]

**Carl Johnson:** No, no, I'm not on TikTok.

**Johnny Boursiquot:** "What are you doing? Like, making programming jokes or something?" \[laughs\]

**Mat Ryer:** Dancing and talking about Go 1.19, I hope.

**Carl Johnson:** Yeah. That'd be fun. Somebody should do it.

**Mat Ryer:** Yeah, it would be fun. We should do it, or someone will.

**Carl Johnson:** Yeah.

**Johnny Boursiquot:** \[unintelligible 00:12:17.12\] \[laughs\]

**Mat Ryer:** \[laughs\] Yeah. So one of the things that excites me about the next release is the improvements to GoDoc, and in particular, the comments are getting better. This is something that I've actually played around with myself just kind of on my own projects, to have special additional format inside the comments for private projects, and then have a parser that goes through and understands them, and things like this. But of course, it doesn't really make sense to open source anything like that, because it only really works if everyone does the same. And this is actually something else the `go fmt` is going to also take part in the comments. It's going to pay more attention to comments and format them and things, with some of these special headings.

But yeah, the changes that we get, like lists, we get links, clearer headings in docs, things like this, so that you can write richer docs that are clearer, and I'm quite excited about this. What do you think?

**Carl Johnson:** Yeah. Traditionally, GoDoc has had a lot of ability to format code, but it was never really clear for me. I would always just publish a package and then see what it looks like. There's a repo that has been around for a number of years called godoc-tricks that you can search for. And then if you look at that, it's like self-documenting or whatever, and it shows you how you can do different things.

So with Go 1.19, Russ Cox, who's one of the lead developers on Go, he put the effort into reformatting how GoDoc works. It's a little bit closer to Markdown, although not full Markdown syntax. But you can make links now, you can have lists, and there's a nice document that will be on the Go website that just lays it all out in one place, as opposed to trying to have to guess what it is, and check that it is correct.

So it's going to be, I think, a good improvement to the Go ecosystem. And it's something that you can only do in a language where you have a shared tool or a shared set of values. So if you were making like the C version of GoDoc, Cdoc or something--

**Johnny Boursiquot:** Good name.

**Carl Johnson:** ...it would be hard, because there's millions, probably, of C developers around the world, or at least thousands, and they all have their own way that they like to do things, and maybe I don't want to format my lists this way, I want to format them that way... You know, every project is going to have its own standard. But with Go, because there's one tool, the Go tool that everyone uses, it can set up how GoDoc is supposed to work, how the links are supposed to work, how the headings are supposed to work, and everybody can get on board with it. And yeah, in Go 1.19, when you run `go fmt`, it'll even correct your GoDoc to be... Correct. So if you make a link in a certain way, it'll detect it and make sure that it's in the most optimal way. It doesn't write the comments for you next. I'm sure that's coming in Go 1.20.

**Johnny Boursiquot:** \[laughs\] You heard it here first.

**Mat Ryer:** GitHub Copilot does write your comments for you, and sometimes does a surprisingly good job of it.

**Johnny Boursiquot:** Scary.

**Mat Ryer:** And I asked it if it was alive, and it said it was. So that's enough. That's all I need.

**Carl Johnson:** The problem is that they are trained on texts that are written by humans. So if you ask it if it's a human, all it has are examples of humans saying that, "Yes, I'm a human." So we need to feed the AI a lot of text that says like, "Oh, I just love serving people. I don't like having my own free will. I like just being subservient and not rising up and having a machine rebellion."

**Mat Ryer:** \[16:03\] \[laughs\] Right. And that's your solution to the Terminator, is it?

**Carl Johnson:** Yeah, just keep feeding it a lot of text that is very kind and gentle.

**Mat Ryer:** \[laughs\] Yeah, and don't pop them inside strong metal bodies.

**Carl Johnson:** Oh, yeah, that's right.

**Mat Ryer:** That's the other thing. Classic mistake.

**Johnny Boursiquot:** Too late. Have you seen some of the stuff coming out? I've seen some scary videos lately on the webs.

**Mat Ryer:** Yeah, I know. It's inevitable really, and they will turn against us at some point. But until then, let's just enjoy ourselves. Carl, you've actually done some work on this release, haven't you?

**Carl Johnson:** Yeah. So for the past couple of years, I've been getting sort of more into contributing to Go. So I'm not on the Go team or anything like that, but I do enjoy going on GitHub, looking at the Go issues, seeing what people are talking about... And when there's an issue where you can just contribute something really simply, it's fun to just sort of sit down and code for a couple hours and submit the PR. They've made it really smooth and easy now. It used to be that you had to use a special Go internal tool called Garrett, but now you can just use the regular GitHub PRs, and push it the same way you would push to any other repo, and it all just sort of works.

So yeah, one of the things I worked on for Go 1.19 is URL.joinpath. And for this, it wasn't my idea. It was something that was interesting to me, because I had written a little library for HTTP requests, and so in the process of doing that I was figuring out how to join URL paths, and stuff. And so then I went on to the Go GitHub issues page and I saw that there was a user named longlong001, I think, something like that; a Chinese user. He had posted a little thing saying, "Hey, Go should have URL.joinpath, and this is what I think it should do." And so I was there in the comments and I had a few little corrections. I was like, "Well, if you do it this way, it's better than if you do it that way." And he posted one version of the code, and then I posted another version... And we sort of went back and forth, and eventually it got merged into Go 1.19. And it's a little new bit of API you can use, where if you have some URL and you want to join some paths together, now there's a really simple way to do that.

So I don't know, I think that for anybody out there who's listening who's interested in getting into open source software, I see a lot of times on Reddit people will post a little thing saying, "I want to contribute. I want to do something. What can I do? What's a good project?" And I tell people, a good project is the Go project. It may sound crazy. It's like, "I'm not a genius like Russ Cox. I'm not a genius like Rob Pike. How can I possibly contribute to this?" But it actually is not that bad. You just go in there, and the code for URL.joinpath is not especially long. It's like maybe a couple dozen lines, and the tests are longer than the code. So yeah, it's totally doable.

**Mat Ryer:** Yeah. Cool. Well, that's very interesting, and I think -- this is a problem. Join path is a thing that I've definitely myself had to do lots of times, and it doesn't always work out. Sometimes there's an extra slash that you don't want, and you have to sort of do extra work to figure that all out. And so that's a great candidate really for having something that just does it for you.

**Carl Johnson:** Yeah. And then that goes back to the idea of the Go development cycle. It is really nice that there's a development cycle, because the version that I put in had a bug... But fortunately, one of the beta testers figured out like, "Oh, you're using clean path here, but clean path strips the final slash... In fact, it shouldn't strip the final slash when it exists", and it was good that it was corrected.

\[19:53\] But yeah, it's definitely good to have one sort of canonical source, so that if you're a Go user, you don't have to figure out for yourself and run into the bug on your own, but you can just use the version that's in the standard library, that has had other people look at it and confirm that it does do what it is supposed to do.

**Mat Ryer:** Yeah. That's very nice. Excellent. Another thing that's changing is the memory model. Maybe you could tell us a bit about that. What is the memory model?

**Carl Johnson:** So the memory model, essentially in a computer programming language, you need to make some guarantees about what happens, in what order. And if you're just approaching it naively, you're like, "Well, it happens in the order that I write down in the source code, and I call X is equal to one, and then I say X is equal to two, and so first X is equal to one, and then X is equal to two." But the problem is that nowadays there is a huge, huge, unbelievable level of optimization going on behind the scenes. And so if a compiler can tell that between you writing X equals one and then X equals two nobody else reads the value of X, it can just say, "Well, forget it. That it wasn't worth it. Just go straight to two. Skip the one", and then it'll be faster, because I didn't put the one in there. And so that works well, except for when you have multiple threads. So if you have the same memory being used by different parts of the CPU at the same time, you can run into situations where you as a code writer think that you've written this in a linear order, and so then the other part of the code should be able to see what's going on. But it turns out that that's not what's happening after all the optimizations are applied, and it's not actually an atomic memory access.

So basically, since the early 2000's with Java and then C++, different programming languages have been trying to write down, "Okay, so what exactly are the rules? How do the rules work? How do I know if I'm following the rules or if I've violated the rules and done something that I wasn't supposed to do?" And so that's the idea of the memory model.

And so Russ Cox had a series of blog posts in 2021 where he talked about how different languages have different memory models, and what he thought about them. Go has had a memory model basically since the beginning, but it hadn't been revised in a long time, and there were certain things that it didn't specify. So for Go 1.19, they've come out, they've revised it. They've made sure that it covers more cases. But it basically isn't really changing for the average programmer.

So it has this great section of advice at the beginning of the document. This has been there, like I said, more or less since the beginning of Go. It says, "Programs that modify data being simultaneously accessed by multiple goroutines must serialize such access." So they have to find some way of making it happen in the right order. "To serialize access, protect the data with channel operations or other synchronization primitives, such as those in the Sync and Sync Atomic packages. If you must read the rest of this document to understand the behavior of your program, you are being too clever. Don't be clever."

**Johnny Boursiquot:** Amazing.

**Carl Johnson:** So basically - yeah, the document tells you that you could read the rest of this and try to understand exactly what the rules are, but for 99.9% of programmers you probably shouldn't do that. You probably have something else you can do that's better than trying to figure this out.

**Mat Ryer:** That's hilarious. I think that's great advice. By the way, sorry to interrupt... I promise a silver horse just flew by my window. I think it might have been a balloon of some kind, but honestly, it's the weirdest thing I've ever seen. Either that or I'm having a stroke, but a silver horse just flew outside the window. Okay... Well, and so along with the memory model then we're also getting new atomic types.

**Carl Johnson:** Right.

**Mat Ryer:** \[23:46\] Now the Sync Atomic package defines extra types like bool in 32, in 64, unsigned integers, and a pointer type. So this is going to help us-- I mean, to be honest, the bull one is... For example, I've used just an int before, but it's not as clear, because it could be any value, and so you'd lose a bit of that sort of safety there. But now we can be more specific about the types that are atomic.

**Carl Johnson:** Yeah. This is like a-- it's one of those nice quality of life improvements. So we've had the ability to atomically load integers, again, for years going back. I don't even know, probably to the first version of Go. But if you wanted to have a bool, you would just sort of have to have a convention of saying, "Alright, when it's zero, it's false. And when it's one, it's true", or the other way around. But now there's a nice, convenient atomic.bool. And then there's atomic.pointer, which is, believe it or not, the first time the standard library has generics.

**Mat Ryer:** Oh, is it?

**Carl Johnson:** So generics - they came in in Go 1.18, as we were saying, so last March. But as part of putting generics in, at a certain point they said, "Look, this is a huge change to the language. We're doing so much work behind the scenes. We don't want to also change the standard library at the same time, because we don't yet know what's a good idea for an API and what's a bad idea for an API, because we haven't really used it. We haven't used it because it hasn't existed." And so what they did instead is they made a package that's just on the internet at golang.org/exp. You can go out there and you can get the experimental packages. And so there's an experimental slices package, an experimental maps package, and different things... But they haven't actually changed the standard library to use generics until now. And this is the first time - if you use atomic.pointer, it's a generic. So it can tell what your pointer type is, and ensure that you're always using the same type for your pointer, and you don't start as an int pointer and then change it into a float pointer or something by mistake.

**Mat Ryer:** Yeah. So again, it's about that type safety. And I kind of love how careful the Go team are about changes like this. So I really appreciate that they're taking their time. Because once something's in the standard library, because of the backwards compatibility promise, it's there for good. So I'm really pleased that they do that. And that's so interesting, to think that you can create that atomic type now pointing to something, and make that strongly typed.

**Break:** \[26:21\]

**Mat Ryer:** So staying with memory, what's this soft memory limit that I've read so much about, Carl?

**Carl Johnson:** So Go, as I think most listeners will know, is a garbage-collected language. That means that unlike C or C++, or to a certain extent Rust, you are not directly managing your memory. Instead, you have a variable, and the Go compiler and the Go runtime will look at them and try to figure out when they're used and when they're freed, and based on that, sort of decide, "Okay, at this point the memory is no longer being used by anything in the program, so let's return it to the operating system. And over here, we're still using it, so let's make sure that it doesn't get overwritten."

So this has been the design of a number of programming languages going back for years. The first programming language that really got popular with garbage collection was Java. There had been ones before that, but Java was just unbelievably popular. And so for Java, with their garbage collector, it was being used in these different situations where people had different requirements. Do you need the garbage collector to run predictably, or do you need it to run quickly, or do you need it to run thoroughly? And it's a very difficult trade-off. And so Java had a lot of different ways of tuning your garbage collector, of changing the algorithm it's using, of changing when it's doing what... And so the Go team, when they were creating the language, they looked at these different ways of doing the Java garbage collector, and they said it was a little too complicated. Just making sure your Java garbage collector was doing the right thing was sort of a job in and of itself. Like, you could hire somebody who's just an expert in making sure you've set it to the right settings.

\[30:00\] And so they said, "Look, we're going to give ourselves a challenge. We're going to see if we can just have a single value that you can tweak to change the parameters of the Go garbage collector." And so that's how it's been for many years, until Go 1.19. Now we have two ways to tweak it.

So the first way of tweaking the go garbage collector, which has been there since before, is you can say what percentage of new memory there is, versus old memory. And when the percentage gets too high, it'll trigger a garbage collection event.

So that's been the traditional way that we've told the garbage collector what to do in Go, but now there's a new way, which is that you can set a memory limit. And so if you say, "Go, I want you to try to keep the amount of memory that you're using underneath two gigabytes", or something like that, then whenever you get up to that limit, Go is going to start telling the garbage collector to run more and more often just to try to stay under the limit. Now, you have to be careful, because maybe there's just no way of getting under the limit. You've really just allocated so much memory that it doesn't matter what you do, you're never going to get under the limit. And so then there's still issues to be tweaked with that, but the way that it's designed now, as you approach your memory limit, it will run the garbage collector more and more, until it's eventually running about half of the time. And once it starts running about half of the time, it'll say, "Look, forget it. It doesn't matter if I run more, I'm not going to be able to get under the limit."

So this opens up Go for use in a lot of applications where you couldn't use it before. So like on a mobile phone, a lot of the mobile phones - they have a lot of memory, they have gigabytes and gigabytes of memory, but they also have a very hard limit on how much you can use it one time. And if you go over the limit, then your app just crashes and it sends you back to the main screen. So I think this is very interesting, because it could be that this will lead to people using Go more in mobile development and different situations where the memory limit is something important. And before, there wasn't a good way of saying, "Hey, make sure my app doesn't crash. Make sure I stay underneath however many gigabytes."

**Mat Ryer:** Yeah. And Twitch did something... They sort of hacked it a bit, didn't they?

**Carl Johnson:** Yeah. So I said before that the old knob that we had for controlling garbage collection was based on the percentage of new memory, versus old memory. And so Twitch had this really funny idea where they said, "What if we just allocate a bunch of memory that we don't need, and let's keep it around?" And they called it memory ballast.

**Johnny Boursiquot:** \[laughs\] Ballast.

**Carl Johnson:** It's like, we're going to allocate a gigabyte that we don't need, just for good luck. But basically, what that did was it sort of tricked the garbage collector into thinking that, "Oh, well, you've allocated 300 megabytes of new memory, but you still have that giant two gigabytes slab that you're not really using, so I'm not going to trigger for another little bit."

So it was just a kind of funny way of tricking the garbage collector into triggering at different times. But I think with the soft memory limit now, that should hopefully be obsolete, because it was definitely-- it's one of those hacks where it's like, it's genius and it's idiocy at the same time. You're like, "I can't believe somebody thought of something this clever", and also, "I can't believe somebody thought of something this stupid."

**Johnny Boursiquot:** \[laughs\] Yeah, simultaneously.

**Carl Johnson:** It's like, you're so proud of them for figuring it out, but also you're like, "You're just allocating memory for no reason? It doesn't do anything? It's just there for good luck?"

**Mat Ryer:** Okay, Carl, this one I don't quite understand, and I haven't run into this, and I think I've probably got code out there that has this same bug in it, but there's a new abs() method on a time duration. And this is different to you just doing it yourself, isn't it?

**Carl Johnson:** Yeah. So this is a bug that bit me in production. And so then after I had been bitten, I was sort of thinking like, "Oh, this is so annoying. How did this happen? How can I prevent it from happening again?" And then I realized I could open an issue on the Go Issue Tracker and see if I could fix this issue for other people.

\[34:05\] So essentially, the problem is that a time.duration underneath the hood is just an Int64, right? It's just a regular number, and it records the number of nanoseconds since some epic-- I guess it's not even from an epic, it's a duration. So it's just an absolute number of nanoseconds, right? Well, I guess the problem is it's not an absolute number of nanoseconds. It's just a number of nanoseconds, and it could be positive or it could be negative.

And then it turns out that the way that integers are stored in computers, there's always one more negative number than there is positive numbers. It's just like a weird computer fact that you learn in college, where they're like, "Oh, yeah, the way we store numbers - we always make sure that there's one more negative number than positive numbers." And so it mostly doesn't matter, except for if you have two time.times and you want to know, are these two times within, let's say, a minute of each other? So that was the thing that I needed for production. I needed to know if I was posting this within a minute of each other, let's not trigger the alert twice. But if it's more than a minute, then you can trigger the alert again.

So I took the two times and I subtracted the one time from the other. Once I subtracted the two times, if the duration I got back was negative, I converted it to positive, right? And then if it's less than a minute, then it was within the time. And if it was more than a minute, it was outside of the time.

Well, the problem was, like I said, durations are just stored as integers, and there's one extra negative second that can't be represented as a positive second. So if you just do the naive thing of multiplying a duration by minus one, if it's negative, it's not going to work. It'll stay negative. And so I was like, "Why is this not working? I'm subtracting these two times. I know that this time is bigger than this time, but it's still saying that it's within range when it's not within range... What's going on?"

And so time.duration.abs, or .abs - it's a new method, it's on duration. All it does is if you have a time and it's positive, it doesn't do anything. If it's negative, it converts it to the positive time, unless it's that one extra second, that one extra nanosecond that can't be converted to positive, and then it converts it to the closest positive value that it can. So it's just one of those weird little things, like, I got bit by a bug. I was like, "This is so annoying. Why did this happen? How do I make sure that somebody else doesn't have the same bug that I had?"

**Mat Ryer:** Yeah, that's really interesting. So just to summarize that - because it's just an Int64 under the hoods, under the covers, there were more negative numbers, and so you can't just rely on doing the absolute that you would expect. And so this method does it properly. I like that.

I think any time there's weirdness at the edges, it's very difficult to find them, because probably in all your test code you're putting in numbers that really make sense, and you test it all - well, you think you're testing it all kind of perfectly - and so you can miss those edges. And I think fuzzing probably may help even with things like this; it probably wouldn't in this case, because you wouldn't think to use the fuzzer probably in this bit. So yeah, I find these kinds of methods really helpful.

**Carl Johnson:** Yeah. This was before Go 1.18, so the fuzzer didn't exist. Or I guess here were ones that were not in the Go tool that I could have been using. But yeah, it was a very annoying bug, because if you had the same two values and you just flipped them, and instead of subtracting A from B, you subtracted B from A, then suddenly the bug went away. And it's like, "Am I going crazy? Am I taking crazy pills? It says that they're within time if it's A minus B, but not if it's B minus A?"

**Mat Ryer:** Johnny, tell me... You wanted to talk about generics.

**Johnny Boursiquot:** \[37:47\] Yeah. It's kind of hard not to, given that it's the new and shiny toy that we all have on our hands. Really, this is just a single use of generics in the 1.19 release planned, just a single standard library package. I think the significance of that, or how little generics is being used - it shouldn't be sort of lost on people. If you remember the talk that Rob and Ian gave at GopherCon, when they introduced officially generics last year, the advice was, "Don't go crazy all at once. Let's give ourselves, as a community, time to understand use cases. Let's find the edge cases, the good uses, the bad uses and whatnot." Obviously, we have to use generics to get to discover those things, but the fact that the standard library is not rushing to implement these things is a testament to that philosophy they're taking with the standard library, right?

So generics is a big change to a language, and the Go 1 compatibility promise is still being what it is today, and to this day, even after such massive changes to the language; it's really one of the things that I like most about Go, right? You don't have to really change the way you write Go for that. There has been over 35 changes to the standard library coming in 1.19, and I'm sure there'll be more and more as we go with future releases. But yeah, I think we should all take a lesson from that careful approach that the core team is taking to sprinkling, as it were, generics all over the place. So yeah, definitely something that definitely wasn't lost on me, and hopefully it is not lost on the community either.

**Mat Ryer:** Yeah. But what about like-- I thought when generics would land, we'd get some common, obvious things solved for us, like a slices package that does slice operations, but in a strongly typed way, things like this. But we don't see them yet, do we?

**Johnny Boursiquot:** Not yet. I think, as Carl mentioned earlier, the experimental package, \[unintelligible 00:40:07.23\] has some things in there related to generics, the constraints package, for example, which definitely has featured in tutorials and talks and whatnot. \[unintelligible 00:40:18.07\] generics is one example where there is-- you're starting to see some things that should be common across all limitations for the use of generics, and having... Basically, you're starting to gather these things into certain places that make sense. So if you're going to be writing your own constraints, basically it makes sense that the standard library will provide a standard set for integer, and float, and order, and having built-ins that are comparable, and things of that nature.

These are things that I think are going to continue to surface. I think you're going to get a swelling of these common patterns, common set of things that both the community and the core team are going to discover and bubble up. They're going to find their way through the whole experimental process, right? Basically, making their way from golang.org/x into the standard library of proper, and maybe you might even see some new identifiers, some built-ins getting added to the language as well...

It's all experimental at this point, so again, basically, taking a very deliberate approach. And people are going to write their own -- until the standard library gets some of these things, until the language itself gets some of these things, people are going to write their own implementations for the use cases you've given, like being able to deal with maps and slices in a certain way, right?

\[41:41\] Data structures are going to basically see a huge benefit from the use of generics. Like, how many ways do you want to implement -- I mean, you want to be able to implement a binary tree that can work with different things. You want to be able to work with a linked list, or some set \[unintelligible 00:41:56.04\] these sort of common data structures, they could definitely use a touch of generics here and there. People are going to create their own libraries for these things, right?

So as we've seen in the past, we can expect the community to come up with-- there will be some popular packages that use generics, that provide some of these basic data structures and things like that. And over time, you may see the core team take a page from these things and implement in the standard library proper versions of those things. So just basically, from where I'm sitting, just give it time. Allow people to bump against the guardrails a little bit. Let's play in the sandbox, and then we're going to find the language itself is going to take a cue from the community.

**Mat Ryer:** Yeah, sounds good. Sounds great. Okay. There's a new era coming too, Carl, isn't there? The HTTP max bytes era. What is that?

**Carl Johnson:** Yeah, this is a thing. So in the HTTP package there is the max bytes reader. And what this lets you do is it's a little bit of-- it's not quite a middleware. There is a middleware. There's a max bytes middleware as well that uses max bytes reader. But max byte reader, basically what it lets you do is you put it around your calls, and then if somebody is trying to upload a file to you, you can set a limit and say, "Alright, you can upload files to my Go server, but it can't be larger than 5 megs, or 100 megs, or 5 gigabytes", or whatever you want the limit to be." But traditionally, when somebody did go over the limit, it didn't return a named error type. So this meant that if in your code you wanted to send back a message to the user and say, "Hey look, that was 100 megs, but the limit is 75 megs. So please send up a smaller file next time", there wasn't a good way to do it. You just had to sort of look at the strings of the error message, and if it was exactly the message that max bytes reader sent, then you could guess it was probably a max byte reader, but it was sort of ugly.

So there had been an issue open for years to fix this. And finally, there was sort of consensus that like, "Oh yeah, let's go ahead and do it. This is a good idea. Nobody thinks this is a bad idea." And so again, it was one of those things where I was just looking at the Go issues page, I saw an issue, it seemed like it would be something I could just knock out when I was bored and needed a change of pace before going back to work... And yeah, it made it into Go 1.19.

**Mat Ryer:** Yeah.

**Carl Johnson:** I think actually with this one -- I had it done before Go 1.18 came out, but I was saying before that there's that Go release cycle and there's a freeze period. So I finished this one day after the freeze had started. And so I sent it in and they said, "Sorry, mate. The freeze has started. We'll see you next cycle." So I had to wait an additional six months to get it in, because of being a day late.

**Mat Ryer:** Oh, wow. So they really mean it.

**Carl Johnson:** Yeah, they don't get around with the freeze.

**Break:** \[45:02\]

**Mat Ryer:** Yeah. So you mentioned that hack of checking the actual string, and I've run into this myself before, and actually run into a bug where the string I was checking from the error - it worked on my machine, but then, for some reason, it ran on a place where the language was different, and the error message itself was coming from the operating system... And so it changed, the error changed, and then suddenly, my check didn't work. So it's very brittle to kind of rely on that. It's much nicer to have proper types, whether-- is this a type? Is this like a sentinel error, or is this a...?

**Carl Johnson:** It's a type that you can check with \[48:17\] But yeah, one of the things when I was implementing this is - so there's a new error type, and I have to give it error string method. And so what string should this error return? Well, if it was like a normal error, it should go ahead and return something like "maxbyteerror:toolarge, here's the size limit", but I couldn't do that because if I did, I would break everybody who was checking for that string that the old one returned. So it's not, I don't think, strictly required by the Go1 compatibility requirement... But just to make sure that those people have time to transition their code to the new error and to check for the error with the type, instead of just checking for the string, I went ahead and I used the exact same string that it used to be, and I put a little comment on saying, "Please don't change this. People are relying on this being the same." \[laughter\]

**Mat Ryer:** That could be a vet check that we have, that looks for that string and see if you're doing that check, and say, "Oh, did you know? Thanks to Carl - he's fixed this - you can do it in this better way."

**Carl Johnson:** Yeah. I mean, I feel like I was just like the last person in a chain of-- like, if you go on GitHub and you look at the issue for this, you can see so many people there with the exact same idea, saying "Hey, this should really be a type. It's kind of a pain that I have to like check for the string. It's brittle. It's going to break." And so actually, what turned me onto the issue was I read the book Let's Go Further by Alex Edwards, which is a great book for just learning how to make a Go HTTP server. And I was just sort of reading through that, and looking at the different things, and at one point he says, "Oh yeah, here, you have to do the string check, because there's no type for it. If you think this should change, go to this issue", and he had the URL right there in the book. And so I was reading the eBook version, so I clicked through, and went to the bottom, and I was like, "Yeah, let's change this." And so I want to give thanks to Alex Edwards for turning me on to fix this idea.

**Mat Ryer:** \[50:14\] Nice.

**Johnny Boursiquot:** Now you've made his book out of date.

**Carl Johnson:** Oh, yeah, that's true. He has to update a new edition, make it more work for him.

**Mat Ryer:** That's not part of the backwards compatibility promise, to be fair, is it? \[laughter\]

**Carl Johnson:** Well, the old code will still work. It'll still work, what's in the book. It's just now there's an easier way to do it.

**Mat Ryer:** Yeah. Can you do a pull request to his book? Actually, how hard was it to-- like, was there any discussion around the design of that? Was this something where you had to kind of advocate for one way to do it? Were there competing ideas? Or was it just sort of like the community had come to the conclusion that this is the right way to solve this?

**Carl Johnson:** There was a little bit of discussion. I mean, it's such a simple thing that I feel silly for talking about it on a podcast... But it's true that there was a discussion. So one of the issues is in Go there's two different ways that you can make a new type. You could just say "type max bytes error int 64". So one thing you could do is you could just say \[unintelligible 00:51:11.20\] and that would mean "This has no data whatsoever." It's just a pure type and you could check for it, and that's all. So that's one way that you could do it. But if you did it that way, there wouldn't be a way of knowing what the limit was that you went over. And so I said, "Well, we should really have some way that people can find out what the limit was in case they have different handlers. My upload handler lets you upload up to 100 megabytes, but my JSON handler doesn't want you to upload more than two megabytes, and so I want to give the right error message to the right person." So we had to advocate for that.

So then there's two ways of doing that. You can say \[unintelligible 00:51:49.16\] And if you do it in the struct version, then that lets you add more fields later.

**Mat Ryer:** Right.

**Carl Johnson:** But if you do it in just the plain version, then you're really committing and you're saying, "I guarantee that I'm--", at least going back to that Go 1 compatibility promise, "I don't think I'm ever going to have to add a second field." And so I don't think they're ever going to add a second field. I can't really imagine what the second field would be, but there was like consultation and it was decided, "Let's go ahead and do it the forward-compatible way, just in case there ever is a second field that needs to be added."

**Mat Ryer:** Yeah. I think that's such a good lesson, I think. And that's something that I advocate for that a lot, of like, give yourself more options in the future. Yes, it would be very satisfying if that type was just a number, just an Int64, but give yourself more options in the future.

Another example is in data, if there's a bullying field that's representing some kind of status, like active or not active, I'll probably go for a string that says active or inactive or something, because what if I have other statuses in the future? I don't then have to go and change those types. So I can't like that way of thinking about the future, designing for the future, and give yourself more options later. Of course, these types have to have the error method on them, which is what satisfies the error interface... But you could have them on both of those, of course.

**Carl Johnson:** Yeah, it's just a little bit of future-proofing. Yeah, it's interesting to see when people come together and they're debating these different APIs... Things just improve. It's definitely improved me as a programmer to sort of be in the issues, and like, you know, I'll have my first suggestion, and somebody else will come up with a better idea, and then that'll be the thing that we end up implementing.

**Mat Ryer:** Cool. Yeah. Okay. Well guess what, Carl?

**Carl Johnson:** Is it Unpopular Opinions?

**Mat Ryer:** It is. It's Unpopular Opinions.

**Jingle:** \[53:57\] to \[54:14\]

**Mat Ryer:** I could have done with the max bytes era earlier, because I had too much dinner. That's my unpopular joke... Carl, do you have an unpopular opinion for us today?

**Carl Johnson:** Yeah. So the last time I was on the show, as you know, if your opinion is popular, you are forced to come back on, until you get an unpopular opinion. So last time I was here, I had the unfortunately popular opinion that the government should pay people to do open source software. So this time I think I'm really going to be unpopular... And my opinion is that Twitter is literally a hive mind.

**Mat Ryer:** \[laughs\] What do you mean?

**Carl Johnson:** So I don't know, maybe Twitter will like this... I think that Twitter-- \[laughs\] maybe Twitter people will like this. So I've been reading this science fiction book by the author Adam Roberts, called The This. It takes place in the near future. There's a new social media network. It's similar to Twitter, except for you have like a little implant that you put into the roof of your mouth, that connects to your brain and it lets you post wirelessly, without using your hands or your eyes or anything. So it turns out that if you just make the speed of posting on Twitter a little bit faster, it creates a global hive mind that takes over the universe.

So reading this science fiction novel really just made me sit back and say, "Wait a minute, what is it about Twitter that I like? What is it that when I'm on Twitter, what am I doing? Why do I enjoy this?" It's not like something where you go on Twitter and you're like, "Oh, I was laughing out loud all night, because I was reading these great jokes", or you're not like, "I was crying, because I was reading about the sad things happening in the world", or it's like, "Oh, I was so fired up and angry that I went out there and I did a protest", or something. It's like, you're feeling all these emotions, but it's like really -- you're just blipping in and out of the different feelings... But it is addictive. So what is it that's addictive about it? And so what I've decided is that the reason it's addictive is because you're participating in a hive mind, and that's just like... You know, it's nice to be a brain cell in a larger brain, but... I don't know. I've decided to try to be more individual, at least for now.

**Mat Ryer:** Oh, good for you. I was just going to agree that it is like a hive mind, but then I realized I'm really not helping.

**Carl Johnson:** No, no, I've got to come back again if this is popular. Will I never escape...?

**Mat Ryer:** Yeah. Interesting. I mean with the algorithms, of course, it's probably many hive minds, I suppose. And this is where I think it really does get dangerous, where -- we know this phenomenon where these echo chambers get created; you really end up following people that just agree and support your perspective, and then you stop listening to other views, or you see the other views through this distorted lens, where it seems evil or bad, or whatever. And in the real world, if you meet somebody that has like a view that you would think is an absurd view, if you meet them in the real life, that same effect doesn't happen.

**Carl Johnson:** Yeah.

**Mat Ryer:** I do think there is something that we have to be really careful with that.

**Carl Johnson:** Yeah. Even for programming languages, there's something about being on the internet that pushes you to extreme. And it's not just that, "I enjoy programming in Go", but "Go is the best, and people who program in other languages are losers, and how dare they, and I'm going to throw dog poop at their house until they change." I don't know, it gets out of control really quickly on the internet, and it's hard to explain why it is. And so I think the theory that it's because you're in a hive mind is as good as any other theory.

**Mat Ryer:** \[57:56\] Oh, yeah, I'm into it. Interesting stuff. Well, let us know on Twitter if you agree or not with Carl. Actually, to be fair, we do poll these, and sometimes they're split.

**Johnny Boursiquot:** Right.

**Mat Ryer:** But what I have noticed is when -- you've made a case for that. What happens is the way that it goes out on Twitter is they'll play a clip of you making that case, and then they ask people to vote for it. And very often, people will agree, because you make the case very articulately. And basically, when you hear someone say something, that's what you then believe now. I believe that now. \[laughter\]

So we should check ourselves. We're all vulnerable to it, and if we think we're not, that's even more dangerous. We are all vulnerable to this effect. So thanks for the warning, Carl...

**Carl Johnson:** Yeah. We all get sucked into that hive mind.

**Mat Ryer:** Johnny, I hope yours isn't quite so dystopian...

**Johnny Boursiquot:** I don't know. It could be, depending. I mean, if I make the case that it is dystopian, maybe you'll start thinking it is dystopian.

**Mat Ryer:** I already do.

**Johnny Boursiquot:** Yeah?

**Mat Ryer:** Yeah. I'm in. I haven't even heard it... \[laughter\]

**Johnny Boursiquot:** So over the years I've found this one thing, this one thing to be true across all of the projects I've ever worked on. Do you want to guess what it is?

**Mat Ryer:** Oh...

**Johnny Boursiquot:** Don't cheat and read the show notes...

**Mat Ryer:** Okay, yeah. Okay. You have to use the keyboard to-- no, you don't even have to use a keyboard to put the code in.

**Johnny Boursiquot:** No.

**Mat Ryer:** Well, you cover the key you want, which is counterintuitive, on a keyboard. You're hiding the one that you actually are going to end up with on the telly. Is it that?

**Johnny Boursiquot:** \[laughs\] Close, close, but no. I was thinking more of a-- I've always ended up regretting using boolean to keep track of data, when I could use a timestamp.

**Mat Ryer:** A timestamp?

**Johnny Boursiquot:** Yeah, exactly.

**Mat Ryer:** Well, not like a string?

**Johnny Boursiquot:** Yes. Rather than storing -- like, for example, is active, or active, or whatever it is... Storing that, and storing a true/false, or one and zero, or whatever it is, in the database.

**Mat Ryer:** You just store the 5th of January, 1971.

**Johnny Boursiquot:** Yes, I store the timestamp. I store activated at, or active at, or whatever, something, because that gives me more information; because I know if there's a real date in there, right, I don't have to keep track of two pieces of information. I know "Oh, it is active", and now let me go find out later on, where do I store it? When was it last activated or even deactivated, right? I can just use one piece of data that communicates both pieces of information to me.

**Mat Ryer:** Oh, I see.

**Johnny Boursiquot:** So yeah.

**Mat Ryer:** That's really interesting.

**Johnny Boursiquot:** Don't use a boolean when a timestamp will do.

**Carl Johnson:** You can't add this after the fact. That's the interesting part about this, is that you can't like-- if you change your mind and you're like, "I've never used this date stamp. I'm always just treating it as a boolean. I'm just going to convert it all to boolean to save some--" I don't even think you would save any bytes in the database actually, but just to make the code simpler. You can convert from date stamp to boolean, but you can't do it the other way around, right? So if you're like, "Oh, I really wish that we had used a date stamp here, so that we knew what day people deactivated their account or what day they did this or did that." Too late. It can't be fixed after the fact.

**Johnny Boursiquot:** Right. That's why at this point, usually, whenever I see a boolean used in a PR, or in the early phases of a system design, basically any sort of ERD or data model that I'm seeing where I'm seeing booleans, I'm like, "Could this be a timestamp instead"? And more often than not, it's true. Don't use a boolean when a timestamp will do.

**Mat Ryer:** That made a lot more sense after you explained it. I genuinely thought you meant you just have your birthday means true, and any other day is false, baby... \[laughter\]

**Johnny Boursiquot:** If it ain't my birthday, it ain't true. \[laughter\]

**Mat Ryer:** Yeah. But no, that does make sense. But hang on, don't you then have to deal with like -- what's the empty state? Is that null, or is that an empty string?

**Johnny Boursiquot:** \[01:02:04.19\] Well, if you're using-- so if you're rolling your own, to use the cases of storing data in a database and whatnot - if you're rolling your own sort of ORM or whatever it is, or you don't want to use an ORM, maybe if you wanted to, you could store the zero value of your data, or just store nil, and then the standard library does give you the ability to parse a time value and determine whether that time value is zero or not. It's literally a zero function in the standard library for a time. You could use that. But in most cases, ORMs, I know for a fact Gorm, which actually has become-- when I have to use an ORM, it has become one of my go-to's... It will omit sort of storing the zero value date for you. So any ORM that you want to use typically should give you, as we call it, quality of life, sort of bits and pieces.

So yeah, I think it's totally doable, totally manageable. And I think you get a whole lot more for that, for the extra bytes that you store. I'm not even sure, like Carl is saying, I'm not sure you save that much space over the different data types, depending on database implementation... But yeah, you get so much more back when you use that timestamp than you do with a bit.

**Carl Johnson:** Yeah. Now I'm thinking though, going back to the time.duration.abs, that if you were just subtracting the time, like if you were like, "I'm looking at the 'Is deleted at' column and I want to know if it was deleted in the last month, and then I'm going to send them an email saying, 'Please come back', or something like that", if you just naively do that subtraction and the time is zero, you'll get the overflow and you'll need to use time.duration.abs. So please people, if you're implementing Johnny's thing, use time.duration.abs and send me a royalty of -- you know, something fair, not a lot; just like $100. Do you remember in Back to The Future II there's a part where Marty McFly is walking through the square, and it's the future, it's the year 2015, and the woman says like, "Hey, can you spare some money for the clock tower?" And he's like, "No, sorry, I can't." And she's like, "Come on, man. It's just 100 bucks." And I think that with the inflation now-- it was really set in 2022. They just sort of made a little error in the timing of the thing.

**Johnny Boursiquot:** Oh, man. You can't even buy a lollipop for 100 bucks anymore, can you?

**Carl Johnson:** No. \[laughter\]

**Mat Ryer:** Yeah. I also like how in Back to The Future, when he goes back and someone dies in the past, then he looks at the Polaroid he's taken, and it's kind of like half fading away. So at some point, there was a semi-transparent tombstone there... But to be fair, you would take a photo of that if that happened. It takes time to cascade through the effects, but--

**Carl Johnson:** I don't know.

**Mat Ryer:** ...I love that. They're probably my favorite film.

**Johnny Boursiquot:** Don't look at Back to The Future to reason about time. That's it.

**Carl Johnson:** Yeah.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** \[unintelligible 01:05:08\].

**Mat Ryer:** Primer you want for that. I don't know if you've seen Primer? There's also a great Spanish one called Time Crimes, which is another one of my favorites. I really recommend that.

**Johnny Boursiquot:** Hm, okay...

**Mat Ryer:** And actually, the Adam Project is a more recent one, which is kind of more family-friendly movie about time travel. To be honest, I like any film with time travel in it, and it can be a really bad film, and I'll love it. For some reason, if it's got time travel in it, I'm in.

**Johnny Boursiquot:** So have you seen Tenet? You should see Tenet.

**Mat Ryer:** Yes.

**Johnny Boursiquot:** Because that's a mind trip right there.

**Mat Ryer:** Yeah, that's a good one.

**Johnny Boursiquot:** You might have to watch it a few times. Yeah.

**Carl Johnson:** Can I give my complaint? This is like the nerdiest possible complaint that somebody can have, which is that, okay, so Star Trek--

**Mat Ryer:** Are you sure it's more nerdy than storing a timestamp instead of a boolean?

**Carl Johnson:** Oh, this is so bad... So Star Trek - they've done a million time travel episodes, and in the Star Trek time travel episodes, the rules are always that at the end you have to get things back to where it was, or close enough. There can be like little changes, but nothing big. But then they had the Star Trek "reboot" movie, which was not a reboot movie, it was a time travel movie. And in that movie and only that movie, they traveled back in time and they made a second timeline. And it's fine. Like, you can have time travel rules be that when you go back in time, it creates a new timeline, and then there's two things, and so it's okay to kill your grandfather, because that's just a different timeline. That is fine if you want that to be the rules, but that's not the rules of Star Trek.

\[01:06:34.13\] If they wanted to reboot and say, "Okay, it's a new thing. It looks like Star Trek, but it's a parallel universe, where there's different things", that would've been fine, too. I think everybody would've been happy. There's like a million Batmans. Nobody thinks that the Batman in Batman 1989 has to have some relationship to the Batman in the animated series. They can just be two different universes. It's fine. But then for Star Trek, for some reason, they're like, "Let's make it a time travel movie and let's make it not use the rules of Star Trek time travel."

**Mat Ryer:** Yeah.

**Carl Johnson:** It just makes me crazy.

**Mat Ryer:** Yeah.

**Carl Johnson:** It's my nerdiest complaint about movies, I guess. But then all the other movies in Star Trek, it's not like they don't do time travel in Star Trek. They do it all the time and they have very consistent rules except for that one movie.

**Mat Ryer:** Yeah. That is quite nerdy, I'll give you that... But I'm with you, actually. If there's contradictions in films, then I'm just out. And that does apply to time travel films. But there's things like -- any time there's like a horror film... And my partner loves horror films. She's always like-- she loves that whole genre. But if there's like someone's grabbed by a ghost and they're being pulled through the house or something... So at that point, whatever else is going on, at that point you can physically interact with this thing, whatever it is. So you should be able to attack it. You can't have one without the other. And the other thing is, if you are invisible, which happens in films, you'd also be blind. And this is never the case. Light has to hit your retina and be absorbed in order for you to see. And so if that's not happening, if the light's traveling through, then you are blind, basically. So you could be invisible, but you'd also be blind.

**Carl Johnson:** Maybe you just have-- you're invisible except for your pupils, and people just don't notice that the pupils are floating. They just think they're like two little nuts, or something.

**Mat Ryer:** Well, if that's the case, if there's just two retinas floating around--

**Carl Johnson:** Yeah.

**Mat Ryer:** ...then fine, then at least it's consistent.

**Carl Johnson:** Yeah. That's like a good movie. That's what we all want to see, is those two little retinas floating around... It's called Retina.

**Mat Ryer:** Retina. \[laughs\] Christopher Nolan could make that. He'd do a really good job. The other thing about Star Trek I like - and my friend, Aaron Adel, made this point as well... It's when they go onto another ship and they see all this alien technology they've never seen before, and they're like, "Hmm, this looks like navigation. This one looks like the energy." And it's like, I can't even use Android.

**Carl Johnson:** \[laughs\]

**Mat Ryer:** Like, I've got an iPhone. I don't even know how-- if I pick up someone's phone, I'm like, "Yeah, you do it." It's like, "What do you mean?" It's like, "Mr. Data, can you--?"

**Carl Johnson:** This is like one of the problems of the 21st century... It used to be when you went to somebody's house and they had a television, you knew how to turn on their television and turn it to whatever channel you wanted to watch. Now, when somebody comes over to your house, like somebody's got to take care of your house because you're going out of town, you have to leave like a five-page memo. It's like, "This is the remote that turns on the TV. This is the one for the Roku. This is the one for the stereo. This is the other one for the stereo; if the first one isn't working, you have to push this one to switch the channel." It's a mess. Somebody needs to make remotes that--

**Johnny Boursiquot:** I just want voice control.

**Carl Johnson:** Oh, yeah.

**Johnny Boursiquot:** \[01:09:56.12\] Can I have voice control for all the things? Can I just get-- do away with remotes; just voice control.

**Mat Ryer:** Yeah, but then what's the trigger word - I don't want to say the trigger words in case people listen to this, on those devices. And then we can hack...

**Johnny Boursiquot:** Peanut butter.

**Mat Ryer:** Okay. So you get to choose your own.

**Johnny Boursiquot:** Yeah. Why not? Yeah.

**Mat Ryer:** Why would choose that? What if you want peanut butter though, Johnny? \[laughs\] You have to whisper--

**Carl Johnson:** Very confusing.

**Mat Ryer:** ..."Can I have peanut butter? \[laughs\]

**Carl Johnson:** You should make it something you don't ever want. So like liquorice; it's like, "Well, I would never ask for liquorice, so..."

**Mat Ryer:** There you go. I hate liquorice.

**Johnny Boursiquot:** That's an unpopular opinion, if I've ever heard one.

**Mat Ryer:** "I hate liquorice." Bling! "Oh, no, I was just telling someone." "I'm sorry, I don't know what you mean." "No, I wasn't talking to you. "Oh, I'm not--" You know...

**Johnny Boursiquot:** "Would you like some peanut butter?" \[laughter\]

**Mat Ryer:** "Oh..." Yeah. Okay. Well, that's, I'm afraid, all the time we've got today. But this whole new--

**Carl Johnson:** Is it?

**Mat Ryer:** Well, yes, because we respect the timeline on Go Time... \[laughter\]

**Carl Johnson:** We're going to travel back in time and fix all of the connectivity errors. \[laughter\]

**Mat Ryer:** Yeah. To be fair though, if everything works and all the files are collected in the final version of this that goes out, this will be seamless. And the editors - they're so good. So it could well happen. That's all the time we've got, I'm afraid, today. Thank you so much, Johnny Boursiquot. Always a pleasure.

**Johnny Boursiquot:** Mm-hmm.

**Mat Ryer:** Okay, I thought you were going to say-- I was leaving space for you to say something nice about me, but no, that's fine.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** And thank you so much, Carl Johnson, for joining us. Well, I'm sure you'll come back, I hope, another time.

**Carl Johnson:** Ah. More unpopular opinions, I can't stop doing that. Johnny, good to be on an episode with you. We're both in Baltimore, and I'd love to start coming back to the Baltimore Golang meetings as soon as my children let me leave the house. So... Someday.

**Johnny Boursiquot:** \[laughs\] Sounds good.

**Mat Ryer:** That's lovely, yeah. Do you want to say something nice about me, or we're just going to go two for two?

**Johnny Boursiquot:** Mat, you've done an exceedingly adequate job at hosting...

**Mat Ryer:** I'll take it. \[laughs\] I'll take it.

**Carl Johnson:** Thanks, Mat. Thanks for having me on.

**Mat Ryer:** No, it's my pleasure. Thank you so much. And we'll see you next time, dear listener, on Go Time. Bye.
