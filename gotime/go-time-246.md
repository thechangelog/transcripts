**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about avoiding bloat. Yes, indeed. I'm joined by Egon Elbre. Hello, Egon.

**Egon Elbre:** Hello, Mat.

**Mat Ryer:** Welcome back to Go Time.

**Egon Elbre:** Yeah, it's nice to be back.

**Mat Ryer:** It's nice to have you back. And you build things at Storj, right?

**Egon Elbre:** Yeah. Storage.

**Mat Ryer:** So that's how it's pronounced.

**Egon Elbre:** Yes. That's the first question I always get.

**Mat Ryer:** Yep. GIF or GIF all over again. GIF or GIF. Yeah. Well, welcome. Yeah. We're also joined by Roger Peppe, hacker at Cuelang.org. Hello, Roger.

**Roger Peppe:** Hello, good evening.

**Mat Ryer:** Good evening. Welcome to Go Time. We shouldn't say good evening, because we don't know when people listen to this podcast. One of the great things about Go Time is you listen to it on your own terms.

**Roger Peppe:** It's always the morning on the internet. Good morning! \[laughter\]

**Mat Ryer:** \[04:00\] It's always the morning somewhere on the internet. Well, people do terrible things in the morning then, in that case... Okay. Well, before we get going, Egon, I was interested, what have you been working on lately? Anything interesting?

**Egon Elbre:** One of the recent things I finished was a project called \[unintelligible 00:04:13.10\] which allows you to browse source code, and to compile the assembly side by side, and see how Go translates into assembly, essentially, and do this interactively. a nice way to visualize it when you're optimizing things.

**Mat Ryer:** Yeah, very cool. Because it's funny, a lot of people, I think, stay at the code level and don't really dig into that, and it's quite apt for this conversation about avoiding bloat, understanding what's actually this turning into.

**Egon Elbre:** Yeah, exactly.

**Mat Ryer:** Yeah. And Roger. Cuelang. Very exciting project. What's going on there?

**Roger Peppe:** I think it's an extremely exciting project. So I've been involved with the language Cue, I've been enthusiastic about it for a few years now, two or three years, since not so long after came out. I recently had the opportunity to join the project, so I'm now working on it full-time...

**Mat Ryer:** Yeah, amazing.

**Roger Peppe:** ...on this new language. It's sort of halfway between JSON and a normal language, I suppose... A configuration language with some very, very interesting properties. It's a very cool project. And hopefully, it should be useful for everyone in the both now, but in the future. It has a big future.

**Mat Ryer:** So keep your eyes out. I will put a link to it in the show notes for anyone who wants to dig in more, and maybe we'll do a different episode on that at some point, Roger.

**Roger Peppe:** I think that's a great idea.

**Mat Ryer:** And Roger, you also play the fiddle, don't you?

**Roger Peppe:** Not relevant here, but yes, I do.

**Mat Ryer:** Very relevant, because I went to a party once, and I thought I was having a stroke, but it turns out there was a man playing a fiddle... And that was you.

**Roger Peppe:** Oh, that was me, was it?

**Mat Ryer:** Yeah, yeah.

**Roger Peppe:** Oh, really? I was at the same party as you. Gosh... \[laughter\] There we go then. I'll try not to do it again.

**Mat Ryer:** No, do it. There's barely anyone ever playing the fiddle at any parties I go to, so...

**Roger Peppe:** You just go to the wrong parties, evidently...

**Mat Ryer:** Apparently so... Okay, so let's get started then. So when we talk about bloat, what do we mean? What is bloat?

**Egon Elbre:** So I like to separate it to code bloat and binary bloat. So one is your code is growing larger and larger, and the other is your binary, the final deployment thing growing larger and larger.

**Mat Ryer:** Yeah. We'll bear those two things in mind then as we have this conversation, because I think they're both important to pay attention to in different places. With code bloat, you can have relatively small amounts of code. But if you have lots of imports, your binaries might end up being quite big, right?

**Egon Elbre:** Yeah. So I actually dug up some statistics... I like to do some small quiz... So how much would you guess, how many lines of code, if you import a timestamp protobuf definition and just print it out? How many lines of code would that cause? marshaling it, and how many lines of code would it import?

**Roger Peppe:** In Go if you import it?

**Egon Elbre:** Yes.

**Mat Ryer:** It can't be many, can it?

**Roger Peppe:** I reckon about -- my guess would be about 30,000.

**Mat Ryer:** What?!

**Roger Peppe:** I know that protobuf is ridiculously bloated, so... That's my guess.

**Mat Ryer:** I thought it was all about being tiny little payloads. I was gonna say 50... I feel this is a good quiz.

**Egon Elbre:** 27,000 lines of code.

**Mat Ryer:** Oh, wow.

**Egon Elbre:** Yeah...

**Mat Ryer:** Roger, how did you get that so close? That's suspicious.

**Roger Peppe:** An order of magnitude... Yeah, no, Egon tipped me off, yeah... \[laughter\] He didn't, he didn't. I just know how big these things are.

**Egon Elbre:** Okay. The other common one is gRPC.

**Mat Ryer:** Yeah. Well, I know that's a binary format, so that sounds small... A billion. \[laughs\] I've learned my lesson.

**Roger Peppe:** \[08:06\] gRPC is -- well, that includes all the protobuf too, right?

**Egon Elbre:** Yes.

**Roger Peppe:** So we're talking like maybe 120,000 lines of code.

**Mat Ryer:** Oh, it's going to be more than--

**Egon Elbre:** In the same ballpark, so 100,000.

**Mat Ryer:** Ah... Roger, you're suspiciously close to these. Do you count lines of code?

**Roger Peppe:** I have too much experience with large code bases. \[laughs\]

**Mat Ryer:** Yeah, apparently... That tells you something though, because it'd be very easy to just build what you imagined to be a very small project, and just import one of those two technologies, and suddenly, you're really talking serious, serious numbers.

**Roger Peppe:** Yeah, compared to Net RPC, if you remember that package that not many people use, which is only about a thousand lines of code, or a couple thousand lines of code...?

**Egon Elbre:** Yes, something that.

**Mat Ryer:** Is that why people don't use it? It's not enough -- people are like "I'm not buying it unless it's got loads of lines of code in it."

**Roger Peppe:** I mean, gRPC also has its entire copy of the HTTP, another copy of the HTTP/2 stack, and that kind of thing. So it seriously reinvents many wheels.

**Mat Ryer:** So would you have to import that to use it in a project? Or is that just like the toolchain needs that?

**Egon Elbre:** \[unintelligible 00:09:13.17\] the code that you import, and the compiler has to parse through, essentially.

**Mat Ryer:** Hm... Well, you just don't notice, because Go's build times are so -- they're so fast. Maybe we're spoiled by that a little bit.

**Egon Elbre:** Every single line of code, that's one second to your build time, so...

**Mat Ryer:** \[laughs\] Well, that's what it used to do... That'd be good. You'd pay attention to code bloat if that were the case, wouldn't you?

**Roger Peppe:** I think it's all just got so ridiculous, from my point of view... It started off back in the '80s, where like 16k was a huge amount, was a very large program. And now it's in the many hundreds of megabytes, and "Well, doesn't matter...?" Well, does it really matter? I don't think it does, from my point of view, I think, unless you're really coming up against build times or against binary sizes. What's important to me is the maintainability aspect of code bloat. It's about the bloat in the code that you maintain, not necessarily the bloat in the code that you're importing.

**Mat Ryer:** Yeah, right. So that's the other side of this then, is as a project grow and grow, you have to maintain them. Sometimes you can just leave code for ages and you never really have to touch it, but you still have the cost of maintaining that, don't you?

**Egon Elbre:** I consider every single line of code that you are the maintainer of it now.

**Mat Ryer:** Yeah. Every line of code...?

**Egon Elbre:** Because maybe the maintainer goes on vacation, and you have a critical bug that you need to fix.

**Roger Peppe:** So you've personally reviewed all those lines of gRPC code?

**Egon Elbre:** Yes.

**Roger Peppe:** Good work...

**Egon Elbre:** Luckily, I don't have to do it anymore.

**Mat Ryer:** You do that every time there's a new release? Or do you just read the diffs, and then apply that in your brain?

**Egon Elbre:** No, we dropped actually gRPC for that maintain reason.

**Mat Ryer:** Yeah. So that's interesting then... When you import a package, it's because it's such an easy thing to do... I wonder how many people think I am committing to also taking on the responsibility of looking after this entire other project as well. I don't know that many people have that mindset, do they?

**Egon Elbre:** I think it depends on the background, where you come from. So if you start out by building websites and all that stuff, then probably you don't think about it. I used to work for an electronic medical records company, and every single dependency had to be thoroughly reviewed, and whether it's suitable. So...

**Mat Ryer:** Yes. For sort of regulatory reasons, I guess...

**Egon Elbre:** Yeah.

**Roger Peppe:** Yeah, I have to say that I don't personally review all our dependencies, because I don't have the time... But if I take on a dependency, I look at the dependencies of the dependencies often. I'm always more concerned about that. If something just depends on the standard library, I feel that I've got a handle on it. But if it's depending on other projects, then that's a bit more problematic. So in projects that I maintain, I try to keep the amount of dependencies, particularly when it's a library that some people are going to use, like the few I maintain, I just try to keep the dependencies absolutely minimal, if possible.

**Mat Ryer:** \[12:23\] Yeah. So how do you do that? Do you have to manually go and look at all the projects?

**Roger Peppe:** I look at go.mod, actually, and I'm like "Why have I got that dependency? Do I need that dependency? How can I strip it out?" And I was doing that a while ago with some fairly large codebase, "Why have we got this --" And I came across -- that was actually probably what ended up with me on this call actually, because I came across Egon's tool, Goda, which is a fantastic way to try and visualize to see why you are using a particular dependency, and how you might be able to hack it out.

**Mat Ryer:** Hm. What is that project, Egon?

**Egon Elbre:** So it was for solving this problem of understanding your dependencies. So it stands for Go Dependency Analysis Toolkit. So I ended up collecting these different tools, and then I eventually merged them into a single, large bundle of them. It's at github.com/loov/goda. And it has features for -- I try to explain it as you do calculations with package sets and dependencies. So you can start removing things that you don't care about in the package list or graph, and then you can drill deeper and figure out why is something being imported. There's also a sub-command goda cut, that displays packages that you might be able to easily remove, because they don't have many incoming dependencies to them. So a bunch of tools...

**Mat Ryer:** Yeah, that sounds really good. I mean, as a rule, I kind of agree with you, Roger - if I'm going to import a package, I'll prefer ones that have just a few dependencies. And even sometimes I used to just copy bits of the code in, with the license at the top, always, just to kind of avoid it... And often there's lots of tests; it may be something in the testing side that is -- Testify has quite a lot of dependencies. Is that okay? would you avoid Testify for that reason? Or because it's in the tests side are you alright.

**Roger Peppe:** Personally, yes, I would. But I'm biased, right? Because I maintain a package called -- I'm trying to think what it is now... QuickTest. I'm one of the maintainers of that. Which does not have many dependencies, and it's a bit smaller, so I quite like that... Because Testify has lots of dependencies. But it's hard to avoid them, because some dependencies are really useful. Like to print out diffs for example, like the CMP package, it's great for that... But it's another dependency.

**Egon Elbre:** When I bring in dependencies, I actually do review most of the lines of the code. I also run our usual linter suite through the codebase. And this means that if we import a new package, usually there are a few fixes that we contribute upstream already. Maybe there's a data race, maybe there's a global variable that can be removed, or many kinds of maybe minor things, maybe major things...

**Roger Peppe:** The other thing that the Goda tool is really useful for, I've found, is trying to sort of -- a code bloat which we haven't really talked about is code bloat in your own codebase. So when your code base gets really big, and you've done some changes, and you've made some big migrations, but you've still got some old bits of code, and just trying to make sense of this tangle of dependencies, that you end up with something... If you have more or less a monorepo, then you can have a very tangled set of dependencies, and it's really quite hard to make sense of them somehow, to try and work out "Okay, we want to factor these things out into their own thing", but you don't know where everything's coming into it, what's coming out of it... And I found that incredibly helpful when I was making some changes, particularly in my previous job at Influx Data... Trying to do some big, big code changes, and it was quite hard to work out the dependency relationship.

\[16:21\] Of course, Go is fantastic because of a great rule that it has - you can have no cyclic dependencies. That is amazing, actually. That rule, just in itself, has contributed hugely, I believe, to the maintainability of larger Go codebases. Because without it, you tend to get in a situation where something at the very bottom of the dependency tree tends to point something quite near the top, and then you have this big ball of mud, which is like a Gordian knot, and you can't cut it. \[laughter\]

**Mat Ryer:** Yeah. So for people that don't know, this is where you'll have, say, three packages. A imports B, B imports C; that'd be fine. But it's when then C imports A, and you get this strange circle, right? Is that right?

**Roger Peppe:** Yeah, that's it. And also, it's a really good rule, but it was also really frustrating at times, because there are times you're like "Oh, dang, we need to import this from here and we can't, because it says cyclic dependency." So then you have to break your dependencies, and often you have to split up a package, but it's not clear how you can split up the packages. It's actually quite a hard problem, but you're quite often forced to make this decision earlier than you would in some other languages, I think.

**Mat Ryer:** Yeah. And that's the thing; it's like, take on the pain early. A stitch in time saves nine, which means if you can stitch with one, do it early, a little bit of pain; it saves that, because it grows, and it becomes much more painful later. I've had the same thing too, and one of my approaches is actually just to keep everything in one package for as long as I can. As long as I can get away with it. I'm not joking; that genuinely works too, because of that.

I quite like it when the structure emerges, rather than is imagined... Because sometimes it's obvious, and sometimes I've got dependencies that -- I've got something that I know it's going to be a package, I know it's going to be useful in multiple places... But I'm often surprised as well, as the application is being built, which bits present... I certainly don't follow just a standard structure that I know some people do.

**Roger Peppe:** I agree with that, yeah. Definitely.

**Mat Ryer:** So with binary bloat then - like you said, 16k used to be a big program. And I remember -- you know, a floppy disk was 1.44 megabytes that you could fit on that. If you take a photo now and share it, that's about eight floppy disks, or something, at least. You wouldn't tolerate that. If you're like "Oh, you've got to check out this photo. Here's a little stack of floppies."

**Roger Peppe:** Those were big floppy disks as well, right? It started off at like 200k, if you were lucky...

**Mat Ryer:** Yeah, when they used to be actually floppy.

**Roger Peppe:** Yeah. Not to mention tapes...

**Mat Ryer:** Yeah. Honestly, I love that early tech. I really miss it when tech was rubbish. It was so cool. I had a Spectrum, with the tape cassette thing, when I was a kid... So literally - and people won't believe this, but in order to load a program... I don't even know if they know what a cassette tape is either. So it's something that you sometimes see on retro T-shirts, one of those. Literally then it was the sound, it was encoded as sound. So it would play the sound off the tape, and that would -- like how a modem works, really... And then it would read the data, load the program, often with mistakes, so you'd need to do it a couple of times to get it right...

**Egon Elbre:** I think you now need to explain the modem as well.

**Mat Ryer:** \[19:56\] Yeah... This is it. No, it's all changed so much... And by the way, I started young. I'm not old. I just want to make that clear. But why do we care about binaries now? Because we can get away with great, big binaries, can't we? What's the big deal? They upload in no time, they move around the web pretty quickly... Do we care about big binaries?

**Egon Elbre:** I think mostly we don't. If we did, we already would have done something significant about it. But there are definitely cases where we do care.

**Roger Peppe:** I do get shocked by the size of binaries sometimes. I look at it, I'm expecting like five megabytes or something, and it's 120 megabytes. I'm like "Wow...! That's ridiculous."

**Mat Ryer:** And is that usually because you've imported something in your own program? Or are you just talking about anyone's programs?

**Roger Peppe:** I guess I'm just talking about building a binary and having a look; it's not me importing something particularly. But yeah, binaries are very big. I mean, I care more about binaries on small devices, if I'm running something on a Raspberry Pi, or... Actually, even a Raspberry Pi, you usually have quite a lot of SD card space, so it doesn't matter either. But on smaller devices than that, then it really becomes an issue.

**Mat Ryer:** How many floppy drives can you attach to a Raspberry Pi?

**Roger Peppe:** How many floppy drives have you got? \[laughter\]

**Mat Ryer:** Not enough.

**Roger Peppe:** Clearly.

**Mat Ryer:** None at the moment... Actually, I do have one, because I've recently -- I decided I'm going to buy all my old computers that I used to have. I've got a Spectrum already, it's arrived. I've ordered an Amiga 500, and I'm bidding on one on eBay, the Amiga 1200. These were my early computers that I grew up with. So we'll have some floppy drives...

**Roger Peppe:** That's a good idea.

**Mat Ryer:** Yeah. I'm just going to put them on the wall. Plug them in, but just have them on the wall.

**Roger Peppe:** \[unintelligible 00:21:46.16\] Acorn Archimedes again. That was my first ever computer that I owned.

**Mat Ryer:** Did you? That's cool.

**Roger Peppe:** At university that was, yeah.

**Mat Ryer:** Yeah... We had those at school.

**Egon Elbre:** I started on a 286, so... A bit later than you.

**Mat Ryer:** Yeah... What are you trying to say?

**Egon Elbre:** I started later...?

**Mat Ryer:** Well, then you did a fine job. \[laughs\]

**Break:** \[22:11\]

**Mat Ryer:** Okay, so small devices - and this is where TinyGo comes in, because this is the problem that TinyGo is trying to address, is so that you can still use what is essentially the standard library, but it's much smaller; it's deliberately designed to be cut down and simpler.

**Roger Peppe:** Yeah. I love TinyGo. I use TinyGo a bit gratuitously, a friend once said. I wanted to build a doorbell with hanging -- not tubes; what do you call them? Maybe you call them tubes... \[unintelligible 00:24:41.27\]

**Mat Ryer:** Stick with tubes.

**Roger Peppe:** So I built in the software -- he built the hardware; he put the actual thing together with the relays in there, but he never actually got the tubes working. So I built the software, and it's great because you've got this tiny little microprocessor... You know, maybe it was 16-bit, maybe 8-bit; I can't remember. Pretty small, with 1k, 2k RAM, or something... And you can build this Go program, which -- you can list goroutines, and everything. So I just had this separate goroutine, which would be responsible for going through the tune, and then another one, which is listening to interrupts where you would press the bells, and it would interrupt the other goroutine... And it was just a really nice way to structure it; you couldn't have done that if you were writing in C... And it was great. And it all fitted; it's great. It turned the LEDs on in the end, it didn't ding the bells, but... You could pretend.

**Mat Ryer:** Yeah. You can have butler. Hire somebody to -- when the lights come on, they hit the tubes.

**Roger Peppe:** At the same time, that would work.

**Mat Ryer:** If he could... Yeah, eventually work their way up to that. That sounds cool. I love that. And Egon, at GopherCon EU in Berlin, recently, you were hacking with TinyGo, weren't you?

**Egon Elbre:** Oh, yeah. I did some MIDI controller thingy.

**Mat Ryer:** Yeah. So he was playing music on a little -- he had these buttons attached to this little breadboard, and then wrote the code to translate that into MIDI instructions for some music software.

**Egon Elbre:** Yeah, it worked pretty well, and it was really nice.

**Mat Ryer:** \[26:13\] Yeah, I liked it.

**Egon Elbre:** I did get some embedded device noise on it, so some of the buttons didn't work as they were supposed to, but it still did things, I guess...

**Mat Ryer:** Yeah, it was going \[unintelligible 00:26:26.26\] which I think is good. It's not as good as Roger on the fiddle...

**Roger Peppe:** \[unintelligible 00:26:30.20\] I'm afraid... It was actually great using Go with TinyGo, because you could have this debouncing code, which totally didn't care about any of the other code. It would just sleep for a bit, wait for debounce... And that was independent of all the other logic waiting for buttons, and stuff.

**Mat Ryer:** What was that doing them, the debounce? Literally stopping if you got noise coming through from buttons, or something?

**Roger Peppe:** Yeah, so if you press a button, then it's not a clean thing that you have pressed this button. It makes contact, and then bounces, and comes down again, and bounces, and comes down again... It eventually ends up either down or up, right? But you don't know when that initial contact is made, which way it's going to end up. You don't want it to go \[unintelligible 00:27:15.29\]

**Mat Ryer:** Yeah. You would stress the butler out.

**Roger Peppe:** Yeah, you don't want to do that.

**Egon Elbre:** I did have debounce code, but something was wrong. \[laughter\]

**Mat Ryer:** Well, that's funny, because debounce - I've used that in the frontend of web development, which is literally the same thing. If you click too many times, or sometimes on hover -- because you can, if you're just teetering on the edge, on the precipice of the pixel, you can end up with this horrible flicker. In your case, Roger, that is literally a bounce that you're talking about.

**Roger Peppe:** It is, absolutely, literally, a bounce, yeah. It was quite interesting to write... And it's so nice writing in Go, honestly. I can't get over how nice it was. You can have interfaces... They're quite clever about interfaces and TinyGo, actually, because they basically expand all the code out. They're really clever about some of the optimizations for space in TinyGo.

**Mat Ryer:** Yeah. Do you think people should, as an experiment, use TinyGo and try and actually experiment with that, and also run something on a tiny device, just to sort of understand what's going on? Or is this, again -- are we just at the point, most people, where we can just deal with a big binary?

**Roger Peppe:** I think it's well worth experimenting with it, and having a go, see what it takes to run in 1k of RAM, or whatever... Because binaries are still quite big, but you can still have 128k, 256k of binary. But you're not going to be importing gRPC. \[laughter\]

The other place that binary bloat really matters is on the web, right? You can compile Go to WASM. But if you're downloading a 100 MB WASM file to your browser, that's not going to go so well. That's actually, I think, another -- I haven't used it in this, but another use case for TinyGo is to target WASM and have a relatively small binary that gets downloaded to the browser.

**Mat Ryer:** Yeah, I've seen that. I've never done it myself, but I have seen a talk, which I'll try and dig out and put in the show notes, of somebody that basically did that. They wrote something just in Go, and showed you how long it took to actually run. Because it has to download into the browser. And then they did it in TinyGo, and it was obviously much snappier.

I think that's interesting future there with WASM, and I think therefore TinyGo probably does play a big part in that, for Go people. I know that Ron Evans, one of the main contributors, and I think the founder of TinyGo, he very much advocates for more people looking at TinyGo, and using it, and contributing. So he's very keen to get people on board with it as well.

**Roger Peppe:** Yes, it's really cool. An interesting observation is that in the smaller Go programs, one of the main contributors to binary bloat is the Fmt package... Because that actually is quite big, and so many things have it as a dependency.

**Mat Ryer:** \[30:02\] Yeah. And it feels something that's just baked into the standard library, and therefore it's just around and you can just always use it... But if you think about all the things -- when you use the verbs, all the different things you can do, the reflection, and everything... You can see why it ended up having lots of dependencies.

**Roger Peppe:** I mean, it hasn't itself got lots of dependencies, but it is itself quite a large amount of code; it does a lot of reflection code... It's quite a lot of code.

**Egon Elbre:** I think one of the major contributors to the Fmt package is actually Unicode tables, because it needs to handle many of those cases. And I think those tables - I might be wrong, but like a few hundred kilobytes or something already.

**Roger Peppe:** I don't know -- maybe white space. I'm not sure.

**Mat Ryer:** What do you mean whitespace? Surely it's not padded out, is it?

**Roger Peppe:** I mean, it's 3,500 lines of code.

**Mat Ryer:** Oh, we could have done a quiz, Roger.

**Roger Peppe:** \[laughs\]

**Mat Ryer:** \[unintelligible 00:30:59.07\]

**Roger Peppe:** I mean, maybe \[unintelligible 00:31:01.19\] I don't know. I'm not sure that Fmt itself needs those Unicode tables. Maybe it does.

**Egon Elbre:** Maybe that's changed, but...

**Mat Ryer:** Yeah, I don't know.

**Roger Peppe:** Quickly looking at the code...

**Egon Elbre:** I remember optimizing those at some point... Trying to optimize them.

**Roger Peppe:** When I was doing some of this stuff, I was like "I just want a version of Fmt that only has the very basic verbs, like percent S, percent D, doesn't even do widths, and you'd be fine, in most cases.

**Mat Ryer:** TinyFmt.

**Roger Peppe:** TinyFmt, absolutely.

**Mat Ryer:** You could make that, Roger...

**Roger Peppe:** You can't replace standard library packages though...

**Mat Ryer:** Well, you probably can do anything you like if you have some kind of pre-processing thing going on... Actually, genuinely, if it scanned to see which verbs you used, and then built a Fmt package that just had that... I don't know. That's maybe going too far.

**Roger Peppe:** I mean, that's kind of almost what Rust does, actually.

**Mat Ryer:** Is it?

**Roger Peppe:** Well, because in Rust the formatting stuff is \[unintelligible 00:31:57.20\] So it kind of expands out at compile time.

**Mat Ryer:** Oh, yeah. That's cool.

**Roger Peppe:** That's why the compiler is so slow.

**Mat Ryer:** That's it. It's a trade-off you've got to make, isn't it? That's the thing about, I think Go... I'm always quite pleased with the trade-offs that they end up making. I understand, and then someone will hit an edge case and they're really frustrated by it, because it's not performing for them... But by and large, I think they are pretty pleased with where they usually land.

**Roger Peppe:** Yeah, me too. And it does seem to be -- it is maintainable for large projects, but there is that kind of inherent complexity that you tend to accumulate when your project gets larger and larger. There's some threshold you seem to cross, at which people stop understanding the codebase... And for me, that's really when code bloat as I care about it really kicks in. People are making changes, they don't understand the codebase, therefore they tend to reinvent the wheel or just write much more code to jam their feature into the codebase... Rather than saying, "Oh, well actually, we could just change this little package over here to add this feature, and not add these 100,000 lines of code over here." And then you've added those 100,000 lines of code and it's even worse, right? For me, I think code bloat is quite strongly linked with technical debt.

**Mat Ryer:** Yeah. I think whenever you end up with bits of the system that you just don't touch, like "No, don't go and touch this. Be scared of this", I think... I've had that situation before. And even in projects where I've been the only one working on it, I'd just managed to get something right, and I don't have the context... And it's messy; I never cleaned it up, and then I just don't want to even touch it. And with Go, I find that I do less of that, particularly because testing is such a big, first-class concern in Go. And I tend to write TDD... So I will, at the end of writing and solving a problem, I can just go back and just very boldly hack away at it, change it, make big changes,= with the confidence that as long as the tests are passing, then all the promises I've made are being still true.

**Roger Peppe:** \[34:13\] That's great until you find that all the tests that you've written using mocking, and that you're changing some of the things that they depend on, and so all your tests are now invalid, right? Because this is can be very hard...

**Mat Ryer:** Yeah. I think strategies like when you keep the interface near where you're going to use it - that as a rule I quite like. Some packages will have - they'll expose interfaces, and I the idea... Like, if I'm going to use the SendGrid API, if I have a sender interface that just has the single method that I'm going to use in there, this to me - it's not really solving anything to do with code bloat, but I'm really explaining there that this is what I care about, this piece. And then if there's any mocking or anything that, then it's much smaller. But yeah... I tend not to do much mocking. I tend to do a lot more integration testing.

**Roger Peppe:** Me too, and I think there's a good reason for that... Because if you have integration tests, and then you refactor the insides to maybe use something with less dependencies, or something with a different kind of API, then your tests are still valid, right?

**Mat Ryer:** Yeah.

**Roger Peppe:** But if you rely entirely on substituting in the thing that's underneath, then you can't change the tests, or you can't change those dependencies, because your tests are now invalid.

**Mat Ryer:** Yeah.

**Roger Peppe:** This is a big problem with larger codebases and being able to refactor so that you are changing your dependency network, for example.

**Egon Elbre:** So a question... What's your definition on technical debt? I've seen it used in many different ways, and I wonder what's your definition.

**Roger Peppe:** Mine or Mat's?

**Egon Elbre:** Both, I guess, if it's different.

**Mat Ryer:** It might be different... Well, just off the top of my head, I'd say it's something that I should have done now, but I'm not going to. You see, I tend to avoid it quite rigorously wherever I can. So I'll go to great lengths to either -- usually by shrinking scope, but I'll try and not do as much, and then I can do it well... But that's a very vague answer. I don't know if that resonated with you, Roger.

**Roger Peppe:** I mean, for me, technical debt is something that is like a cost that I am unwilling to pay, or I wasn't willing to pay in the past... Because you've always got to prioritize, you've always got to triage and do some things first, and other things later... So technical debt is the things you left for later, right? You can pay that off early, or quite often it's like "Well, the other things are still more important, so we'll leave that." Or "This is really too big. We're gonna have to take an entire year out with our whole team in order to address this serious problem in our codebase... And that will take us out of the market; we're not going to do that. It will mean we can't ship any features." So this is a debt that you're not going to pay off, and you probably will never pay off... And that's the death, I think, of most projects.

**Mat Ryer:** It's a mortgage. Mortgage, actually, the word -- it's like "death loan." The "mort" in mortgage comes from death.

**Egon Elbre:** Oh...

**Mat Ryer:** Yeah, really. Because that was the idea, it was you'd just have this loan for your whole life. Sounds grim, doesn't it?

**Roger Peppe:** I never knew that.

**Egon Elbre:** At some point I was thinking about technical debt, trying to give a rigorous answer, like what is it... What I ended up is that -- let's say there's some effort that you put into maintaining a codebase. It doesn't need to be maintaining, but maybe there are other aspects. And then there's the ideal state of how much effort you need to put into that codebase to maintain it, right? So the difference between those ideal state and your current state is going to be the technical depth, right?

**Mat Ryer:** \[37:57\] Sounds reasonable.

**Egon Elbre:** Yeah. But there's one funny thing there... Let's say there's an innovation in the technology, right? When React came up, the idea of maintainability or the effort to maintain got lower, which means that your technical debt goes high up if there's an innovation. So...

**Roger Peppe:** That's interesting. And does that mean that when you start a project and it's not by any means finished, that that counts as technical debt, because you just haven't finished that project that you've just started?

**Roger Peppe:** Yeah, I guess... Let's say you have a security debt; you haven't done a proper security audit, right? There are other aspects too you can measure. And if you look at maintainability only, then an unfinished project isn't necessarily in debt because of it being unfinished. So that ideal state in terms of maintainability.

**Mat Ryer:** Yeah. That is interesting. So in that case -- because this is the other thing... If you have what you perceive to be a technical debt, and you acknowledge it, and you decide "For priority reasons, we're going to leave it", and then later you find out "We actually didn't need that. We never need it", then I guess that debt just pays off. It just kind of gets written off, the debt.

Yeah... And so I think one of the other principles is designing things so that you can change them. Designing things for that flexibility in the future. I think it's quite an interesting idea. I think I saw it on Twitter, somebody said, like, architects - architects are there, and it sounds great, because they're designing these systems, and they are laying these foundations, and telling you where all the important pieces are going to be... And then someone said if you called those people technical -- oh, I forget the term they used. It was something early decision -- like "unchangeable decision person." Then suddenly they sound really unreasonable, and that you wouldn't want that. So having the flexibility in the architecture, and being happy to change things, and evolve things... Acknowledging that we don't know stuff, we don't really know anything at the beginning especially, and we'll learn it as we go...

**Roger Peppe:** That said, I think it really helps to do a lot of thinking through. You can actually design stuff; it might not be set in stone, but I do think that you can eliminate a lot of bad code paths or bad futures by just thinking them through to start with, and thinking, "Well, if we went that direction, where would we end up? That's a bad place to go."

I think a lot of people are like "We shouldn't do any design upfront." I really don't agree with that approach at all. If you look at Go, for example - they designed a lot. They wrote the spec before they did the implementation.

**Mat Ryer:** Yeah.

**Egon Elbre:** I think there was one quote that when you're designing things, add flexibility into the places where you are most uncertain.

**Roger Peppe:** Yep, that's a really good point.

**Mat Ryer:** Yeah, that's true.

**Roger Peppe:** That sort of leads through to one of the things where I think is sort of key to avoiding code bloat, is just designing the right abstractions. If you get the abstractions right up front... There's this feeling when you're wrestling with the wrong abstraction, you just feel the code is piling up. You're just writing all this code, because you've got the wrong abstraction, because you're doing things the wrong way. If you get it right, maybe you change your abstraction and start to do things differently, and suddenly you can be like "Oh, gosh, I can delete that entire package. I can delete that entire directory." You can delete hundreds of thousands of lines of code sometimes because you've changed the way it's working in a very subtle -- in what was initially maybe not a very obvious way.

**Egon Elbre:** \[41:52\] I remember a talk about designing things for deletability, so that it's easy to delete features, rather than to extend... Because if it's easy to delete, then it's probably easy to replace.

**Roger Peppe:** Yep.

**Mat Ryer:** Yeah, I like that point, actually, on the abstraction thing... I talk a lot about kind of avoid doing the abstractions too early. Do a few examples first, and see. It'll depend on the project or the problem. But actually, the real value is in these abstractions. That is really probably one of the most valuable things we can do, I think, to your point, Roger, is get an abstraction right like that. If you think about a lot of the big innovations that you see, often it's an abstraction, and it's the right one, and somehow they get it right.

So that's the other thing, it is very important, and practicing designing abstractions, and honestly, getting it wrong; practicing, and making those mistakes, and living with the pain, and then you learn from that. And I think there is an element of takes -- it takes a lot of experience. I don't think any of these general rules apply in every case.

**Roger Peppe:** If anyone wants a good exercise for practicing abstractions - people I mentor, I usually give these exercises. You need to write \[unintelligible 00:43:09.26\] conversion code. But now you need to write it in 20 different places, and they have to be conceptually different design-wise, and the different properties that they optimize for. For safety, for flexibility, for ease of maintainability, for prototyping, and all these aspects. \[unintelligible 00:43:31.27\] may become easier, then it starts to become more and more difficult every single step of the way, but it makes you think of these different ways how you can implement things.

**Mat Ryer:** That'd be a good talk...

**Roger Peppe:** That sounds like an interesting exercise, yeah.

**Mat Ryer:** Yeah. I'd like to see you do that in a talk.

**Roger Peppe:** Then he would ruin all the future things for his mentors to learn...

**Egon Elbre:** Oh no, I can pick any different problem...

**Mat Ryer:** Yeah, the temperature thing reminds me... In my school, I was the first year to do IT as a GCSE, but the school just wasn't ready for it. No one really had computers. They were teaching how to do spreadsheets, and word processing, and things. But I was into computers from a very young age, so I really loved them... And one of the questions is, of these devices, is it an input device, a storage device or an output device? Monitor. My turn to do a quiz. Roger, monitor - is that an input, output or a storage device?

**Roger Peppe:** Input and output.

**Mat Ryer:** You can only pick one, Roger. Otherwise you get no points.

**Roger Peppe:** Oh, you can only play one? Oh, okay.

**Mat Ryer:** \[unintelligible 00:44:35.24\] feel my pain.

**Roger Peppe:** Oh, no...

**Mat Ryer:** The worst was hard drive. Hard drive - it's like, how are you getting things on and off if it's not also input and output? I left those notes in the side, on the exam, of course...

**Roger Peppe:** Of course you did.

**Mat Ryer:** Yeah. Pedantic. But the last question was -- it just said, "Design or explain how you would regulate the temperature in a swimming pool." And I wrote the BASIC code; because I used to write BASIC at home. So I wrote this little BASIC program that did that... And I don't know, it was just like -- we didn't learn any of that at school, so of course, they were surprised, to say the least... But I did alright.

**Break:** \[45:15\]

**Mat Ryer:** Egon, you made a point earlier about features... Because I think that is another way to avoid bloat. And a feature, when you imagine it, say, in a website, and it shows up - it just seems like a logical thing to have. But sometimes that feature adds quite a lot of complexity to the system.

**Egon Elbre:** Yeah.

**Mat Ryer:** And considering the actual cost, the engineering cost, the maintenance cost really, of features, I think it's something that gets overlooked a lot. Where I am at Grafana, because all the leadership, we're engineers, that is understood from the beginning. It's implied we are always thinking about that. I've worked in places that are perhaps more sales-driven, or product-driven, and that is a fight that you have to have. But it's such an important point, I think, for people. The features, the cost, maintenance... Maintenance more than how long is it going to take to build it even, because you're maintaining it for much longer, hopefully.

**Egon Elbre:** I think one of the issues with features is that they are really hard to remove afterwards.

**Mat Ryer:** Yeah. Because people rely on them, of course.

**Roger Peppe:** Yeah. You basically can't remove a feature when you've added it. The other thing is that interaction between features - that also leads to code bloat, because these things are maybe non-orthogonal, you're changing this other thing in the codebase, and that interacts with all these other features, which have to be updated... And then there's the whole thing about, "Well, you're designing this feature to fit this use case, and you can narrowly fit it." Or you can say, "Well, let's think a little bit wider here. Maybe if we make this a little bit more general, we can cover not just this use case, but also all these other potential use cases, and make a very generally useful feature." Then somebody asks for a feature later, and you say, "Oh, no, you don't need that feature, because you can use this other feature that we already built." I have to say, that's hugely satisfactory when that happens. It doesn't happen often.

**Mat Ryer:** Yes. That is also a thing I think people should always ask themselves when you're considering how to solve a problem. This is why I always like it whenever use cases come in, when they focus on the problem. It's very easy for people to write a ticket to say, "Oh, we need a button here that does this. This is what our customers ask for."

**Roger Peppe:** Yeah. A user story.

**Mat Ryer:** Yeah. Really, we want to know what's the problem that they're trying to solve, and then take a step back and see, like you say... And it's like, I can think of so many examples of places where we've had that thought, we found the general one, and then it's just paid dividends again and again and again down the line.

**Roger Peppe:** Absolutely.

**Mat Ryer:** So yeah, I think that's great.

**Roger Peppe:** That whole take a step back thing is actually key throughout all of software engineering, I think. Don't just focus directly on what you're trying to solve; think through the code and in the wider situation. When you're reviewing code -you know, this code is addressing this particular problem, but maybe it doesn't need to be, if you take a step back and fix it more generally. Maybe do a little bit more work now up front, but that might save you more bloat in the future.

**Mat Ryer:** Well, it's that time... It's that time that -- we always have a time on Go Time, and it's this time... It's unpopular opinions time. It's time also for the theme tune.

**Jingle:** \[50:26\] to \[50:46\]

**Mat Ryer:** Roger, would you record a fiddle accompaniment to that, so that we can play it next time?

**Roger Peppe:** Alright. Done.

**Mat Ryer:** Oh, that's gonna be great... Thank you. \[laughs\] And we'll get your TinyGo music machine as well, Egon, which we already have a recording of... Okay, so who's got an unpopular opinion for us today?

**Egon Elbre:** I think I already said it, but you should review every line - it's either direct or indirect of your dependencies - with similar standards as your own codebase.

**Mat Ryer:** See, I think that might be a good one for an unpopular one. I think that might be unpopular. So you're saying before you import a package, read every line...

**Egon Elbre:** Yes.

**Mat Ryer:** What about its dependencies?

**Egon Elbre:** Those as well, of course.

**Roger Peppe:** And presumably, every time you update to a new version, right? You have to review all the changes, too.

**Egon Elbre:** Yeah. I think people import packages assuming they are better than their codebases, right? And if you have such really high standards for your own base, why wouldn't you have those as well for other codebases?

**Mat Ryer:** Yeah. Isn't it about responsibility?

**Egon Elbre:** Yeah.

**Mat Ryer:** Sometimes there are packages out there and they maybe have a couple of stars, they're not really used by anybody... But there are clues, there are signals to look for for packages that are sort of a bit meatier and a bit more stable. Is it our responsibility?

**Roger Peppe:** \[52:06\] I have to say that I don't do that. What I do tend to do is when I look at a dependency, I look through the code and say, "Does this look what I would expect to find in a package that is implementing that functionality? Does it generally look good, feel about right? Is this too big for what it should be?" And I quite often say, "No, no, let's not that have that. This is horrible."

**Mat Ryer:** Yeah. "Does it have tests?" That's a quick check...

**Roger Peppe:** To be honest, I struggle to understand my own code, let alone other code that I'm importing... So I couldn't understand the gRPC code, the HTTP/2 code... You know, somebody's spent man years, man centuries probably working on that code, and there's no way I could meaningfully review it, I don't think.

**Mat Ryer:** Man or woman years. They years. They years. \[laughter\] That's the modern measure of time.

**Roger Peppe:** Sorry.

**Mat Ryer:** Yeah. That's all right.

**Roger Peppe:** Person years.

**Mat Ryer:** Person years. Yeah... Yeah, go on, Egon? What do you reckon?

**Egon Elbre:** But yeah, I think it has many benefits, if you do review them, even if you don't understand then, right? Because if you are reviewing other code, you might look at how they build things. Maybe you learn something new, right? Maybe you discover some bugs that need to be fixed, because you have different expectations of the codebase.

Of course, when I say you review them with the same standard, you don't worry about formatting details, or they decided to use spaces instead of tabs. Like, let them have those spaces...

**Roger Peppe:** I do. No way can they use spaces. Just, absolutely no. No. Out. \[laughter\]

**Egon Elbre:** And also, many of the -- there have been many attacks against code injections, and -- that you should be worried about, right?

**Mat Ryer:** It's one of those that's hard to argue against what somebody said. It's like if someone says you should have all this extra security; it's hard to say, "No, we shouldn't." But practically...

**Roger Peppe:** I think it's easy to argue against, because I don't think it's reasonable. I don't think it's possible for most people. I think that we should have better supply -- you know, better dependency chain assurances, honestly, that we do.

**Mat Ryer:** But until then...

**Egon Elbre:** I do think there is a case where you don't need to review them. If you're actually paying someone else to maintain that codebase, then you're intentionally offsetting your own responsibility to somebody else. I do consider every dependency as your own responsibility to maintain, and to fix things when things go critically wrong.

**Mat Ryer:** I mean, with that rule in place, you will certainly be incentivized quite strongly not to include many dependencies. So it has that effect, too... \[laughs\]

**Egon Elbre:** Of course, yes. Like, do you really want to read the gRPC?

**Mat Ryer:** I do now... I'm going to print it out, and take it to bed.

**Egon Elbre:** Maybe you can make a bed out of it already.

**Mat Ryer:** \[laughs\] Yeah. Nice. Okay, Roger, have you got an unpopular opinion for us?

**Roger Peppe:** Yeah. My unpopular opinion is that I think that often just working on a laptop with just a small screen - not on my big desk, with multiple monitors... Just my laptop, with my little screen, and just a keyboard, maybe just on a sofa or something, it's actually more productive than working on my big desk, with multiple monitors, and all the stuff. It seems that way to me.

**Mat Ryer:** Yeah. So is this about like there's no distractions, and you're just in that world?

**Roger Peppe:** I think it might be. I don't really understand it, to be honest, because it should be that I've got all these -- I can see all the things, I can do all the things, I've got the nice, rising desk, all the stuff that's absolutely optimized for me... And then I can sit on the sofa with my laptop, and suddenly the code starts to flow.

**Mat Ryer:** What do you think of that, Egon?

**Egon Elbre:** \[55:58\] I do think it's nice. I occasionally go to coffee shops to program there, and it does give you a bit more focus.

**Mat Ryer:** Yeah. I also wonder, Roger, if it's because most of your time has been spent there, rather than -- if you think about in the past, you didn't have all this tech and tease monitors and this desk that moved up and down.

**Roger Peppe:** In the past you didn't have a laptop. Laptops are a new thing, really... \[laughs\]

**Mat Ryer:** Hm... You just had to have your monitor on your lap if you wanted to do that.

**Roger Peppe:** It was a bit big and heavy... That big 17-inch thing.

**Mat Ryer:** By the way, instead of those desks that go up and down - it's a bit more expensive, but you can actually just have your entire floor move, and same effect; have your desk fixed, and then you just move with the floor.

**Roger Peppe:** It's funny, because I've got this rising desk, which technically has four saved positions in there... And I actually never use it anymore. I just stand. I started off \[unintelligible 00:56:51.26\] I might as well just get a desk of that height.

**Mat Ryer:** Oh yeah, yeah.

**Roger Peppe:** I never sit down. Apart from when I'm on the sofa. Maybe that's the reason.

**Mat Ryer:** But why do you need four? You've got standing, sitting... Is there one where you're on your knees, praying, really hoping the code is going to work?

**Roger Peppe:** My theory is that it's for you and one other person.

**Mat Ryer:** Yeah, that's my theory, too. But for comic effect, I pretended not to know that.

**Roger Peppe:** For comic effect...? \[laughs\]

**Mat Ryer:** Yeah, it doesn't always work...

**Roger Peppe:** Ha-ha-ha.

**Mat Ryer:** Ha-ha! Thank you. \[laughter\] Let me ask you this, Roger, as well. Are you a keyboard wizard type? Do you use Vim, Emacs, that kind of thing?

**Roger Peppe:** I am absolutely not. We might have gotten into this, actually... Because a previous unpopular opinion of mine was that Acme is the best text editor. And Acme is a radically mouse-focused text editor. I don't even touch-type, actually. I never learned, and I never went back to properly learn.

**Mat Ryer:** How do you get the keys tapping? You blow on them, but you refuse to touch it?

**Roger Peppe:** Yeah, just kind of -- you know, two finger, very slow, look for the key...

**Mat Ryer:** I worked with a guy who typed with a single finger, and he was faster than me, and I've never seen anything like it since... I hadn't seen anything before, I haven't seen anything it like it since.

**Roger Peppe:** Not even two hands?

**Mat Ryer:** Not even two hands. Single finger, one hand. It's just how we learned... And I've no idea why that happened.

**Roger Peppe:** I \[unintelligible 00:58:10.07\] three fingers, maybe four, because one for the Shift key. The little finger for the Shift key.

**Mat Ryer:** Oh, I assumed it was two if it's someone else... Like, two fingers for you to type, and then you've got two to spare, if you want to help out someone else's...

**Roger Peppe:** So I think the mouse is great. I don't \[unintelligible 00:58:26.24\] keyboard shortcuts in general. They get in my way.

**Mat Ryer:** Egon, \[unintelligible 00:58:29.14\]

**Egon Elbre:** Oh, I use three different ones.

**Mat Ryer:** Okay. \[unintelligible 00:58:35.27\]

**Egon Elbre:** So I use Sublime...

**Mat Ryer:** I thought it wouldn't be a simple answer. Something told me... Yeah. Sublime?

**Roger Peppe:** I use Sublime, VS Code, and GoLand, depending on what I'm doing. And I guess I edit the commit messages in Vim, because I haven't bothered to change the default editor. \[laughs\]

**Mat Ryer:** Fair enough. That's pretty cool. Yeah, I always wonder about these people that are amazing on the keyboards. I always look up to them, but maybe it is just that they're rubbish with a mouse. Like, they just can't do it. It could be that.

**Roger Peppe:** \[59:10\] I actually quite the touchpoint thing. So I don't use the touchpad; when I do use my laptop, I don't use the touchpad, I use this touchpoint thing, which is only on Lenovos.

**Mat Ryer:** Why is that?

**Roger Peppe:** It's just a little nipple that's in the middle -- a red thing which is in the middle of the keyboard, and I think it works really well.

**Egon Elbre:** Yeah. I do miss my touchpoint, so...

**Roger Peppe:** Interesting.

**Mat Ryer:** Yeah, so it's like a little thing with a grip on it, isn't it? And it's essentially a joystick. Like a tiny joystick.

**Roger Peppe:** Yeah, a joystick, except it doesn't move; you just kind of push it. And it does lose its grip after a while, after a year or so, and you have to get another, a replacement thing with more friction.

**Mat Ryer:** Or you could moisturize your hands...

**Roger Peppe:** Yeah, actually it's really bad -- if you're really sweaty, it can be a problem. \[laughter\]

**Mat Ryer:** Well, speaking of being really sweaty, my unpopular opinion -- I've got one today... I don't understand shower gel. I don't know if you've seen it or you have it. It's basically -- it's like some kind of bath time slime... And it never smells great. And people have it. Sometimes I'll go to my brother's, and I'll go in the shower, and he doesn't have any soap. He just has these bottles of shower gel. And it's sort of just slimy, and... I don't know, I never feel clean. I'm not happy with it. What's your stance on shower gel?

**Roger Peppe:** I tend to agree with you about the shower gel, because -- it just all drips away. You know, if you give me a bar soap, it's there, right?

**Mat Ryer:** You can really go to town.

**Egon Elbre:** Don't you use a sponge for it?

**Mat Ryer:** Oh, a sponge?

**Roger Peppe:** A sponge? No, no...

**Egon Elbre:** Like, something fluffy.

**Mat Ryer:** Oh, that makes sense. That does make sense, though.

**Roger Peppe:** I suppose that does make more sense. No.

**Egon Elbre:** Do you also feel the same about shampoo?

**Mat Ryer:** No, although I realize that that is very similar. I don't have loads of hair...

**Roger Peppe:** I have to say that I have recently \[unintelligible 01:00:52.26\] in the last couple of years changed to using bar soap for the shampoo. You can get these shampoo bar soaps, and it works really well. So you don't have that bottle which you have to throw away, so less plastic, it lasts for ages... It actually works really well.

**Mat Ryer:** Sold.

**Roger Peppe:** I totally recommend it.

**Mat Ryer:** I want everything in a bar. I want a bar of toothpaste now. You just rub the bar in... \[laughs\] No, but a shower gel -- in some places where the water soft, it doesn't even all properly come off, so you end up being all slimy.

**Roger Peppe:** You're putting it on during the shower, not afterwards, right?

**Mat Ryer:** \[laughs\] To be fair, I have not read the label. \[unintelligible 01:01:29.04\] but I just don't get it. I just don't like it. I like a nice, rough bar of soap; something that's rugged, and... You know what I mean? I'm not one of those really manly people.

**Egon Elbre:** Steel wool.

**Mat Ryer:** Steel wool. Oh, yes, please. I like a towel. I went to a hotel - it was a bit fancy - and the towels were all soft, and it's horrible. I want a rough towel. I want it like an elephant rubbing up against a tree, please.

**Roger Peppe:** A loofah.

**Mat Ryer:** A loofah, yeah. Well, I'm afraid that's all the time we have... But I learned a lot, mainly about bath things, but also about code bloat... So thanks very much to my guests. Roger Peppe - always a pleasure, Roger. Hopefully, you'll come back soon.

**Roger Peppe:** It was a pleasure.

**Mat Ryer:** Yeah. And Egon Elbre, \[unintelligible 01:02:17.13\] It's been great to have you. We'll see you next time!
