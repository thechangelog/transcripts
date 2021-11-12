**Mat Ryer:** Hello there, welcome to Go Time! I'm Mat Ryer, and today, as promised, we're revisiting fuzzing in Go, since... The beta has landed! Hopefully in the edit they'll make that bit sound cool, pop in an effect on it, or something... Maybe something flocculent; that'd be quite nice.

We're joined today by two of the people who made fuzzing happen. Before we meet them, I just wanna do a quick shout-out - a meetup shout-out. This may become a regular part of the show... Since we're gonna be meeting up again in person maybe soon, it'd be nice to meet local gophers in your local area. That sounds like a dating app; it's not. But if it was, you'd be swiping right on Golang North-East. A lovely bunch of people in the North-East of England in the U.K. If you don't know the difference between England and the U.K. - you know, read a book. There's a whole world outside of Wisconsin.

The North-East U.K. - this is my favorite thing... Golang North-East is called that because Go North-East was taken by a local bus company. So a shout-out to the great meetup there. If you want your meet-up shout-outing, or shouted out, or shout-outed - I don't know the past tense of shout out...

**Johnny Boursiquot:** Or just shouted at...

**Mat Ryer:** Shouted at, yeah... \[laughs\] That's what we'll do, we'll shout at your meetup, for a small fee. Okay, if you want that though, do Twitter, @GoTimeFM, and we'll shout them out.

\[04:13\] Okay, let's meet our guests. We're welcoming back Katie Hockman. Katie is a software engineer on the Go security team, focusing on fuzzing, and was previously the tech lead for the Module Mirror and Checksum Database. Welcome back, Katie.

**Katie Hockman:** Thanks for having me back.

**Mat Ryer:** Always a pleasure. We're also joined by Jay Conrod. Now, while Jay's name sounds like a JavaScript project, in fact, Jay is a software engineer on the Go command line tools team, mainly working on fuzzing and module support in the Go command. Jay, welcome to Go Time.

**Jay Conrod:** Hey. Thanks for having me on.

**Mat Ryer:** Absolutely. It's a pleasure to have you here. We're also joined by my co-host and good friend, Johnny Boursiquot. Hello, Johnny.

**Johnny Boursiquot:** Hello...

**Mat Ryer:** \[British accent\] Hello, I love that. Welcome back. Johnny, the other day I wanted to make sure I spelled your name correctly, so I just googled it, and your face came up... So I thought "What's going on here?" So I went into Incognito mode - which is the first time I've used that feature - I did it again, and same thing, your face actually comes up when you search for Boursiquot.

**Johnny Boursiquot:** Yeah, I'm very SEO-friendly.

**Mat Ryer:** Yeah, very. Amazing. Okay, well let's get into it. We spoke about fuzzing last time in August, 2020, episode \#145 if you wanna go and listen to that... But now the beta is here, right? It's exciting.

**Johnny Boursiquot:** And for those who don't speak, you know, Mat - by \[British accent\] beta, he means the beta.

**Mat Ryer:** Oh, thank you very much.

**Johnny Boursiquot:** It's just like "Beater." Who's the beater? Why are we beating people up? \[laughs\] \[unintelligible 00:05:44.23\] beating.

**Mat Ryer:** Yeah, okay. I appreciate it. Thanks for the translation. If you want to correct my English into incorrect English more...

**Johnny Boursiquot:** Yeah, please call me in.

**Mat Ryer:** Yeah. It'll be great.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Yeah. Apparently though, Shakespeare would have sounded more American if you heard him now... I don't know if you've heard that before. It's like -- it's not as simple as that. He'd be like \[unintelligible 00:06:07.22\] that kind of thing.

**Katie Hockman:** Is that your American accent?

**Mat Ryer:** Yeah, it's Brooklyn. Shakespeare from Brooklyn. "Yo, Romeo!"

**Jay Conrod:** That would have been great...

**Mat Ryer:** "Yo, Romeo, where are you?!"He didn't know where Romeo was. Fair enough. Okay, well, at the risk of this episode descending into basically fuzzing, maybe we could just have a quick recap on what fuzzing is, and what's it used for.

**Katie Hockman:** I'll take the first part and maybe Jay can take the second part. So in simple terms, fuzzing is a form of automated testing; rather than you tell it what to test, it generates inputs for you and can find things like security vulnerabilities that maybe you might have missed, or crashes, or edge cases that might not be covered by your typical unit test.

**Mat Ryer:** Yeah, very cool. So that's interesting, because you work on the security team, so fuzzing -- is that the primary kind of focus, around making sure that your programs are secure?

**Katie Hockman:** Yeah. I mean, we have lots of focuses on the security team and lots of projects going on, but yeah, that's one of the main benefits of fuzzing... Unit tests are really great and are important, but they're still relying on -- you know, the people developing it are the ones writing the tests a lot of the time, and there's a lot of assumptions that you make about how your code works... So we often write tests with those assumptions, too. So fuzzing is a third-party objective observer of your code that can basically check everything and find security issues if you might have them, or bugs that maybe you wouldn't have even thought about, because you assumed your code worked.

**Mat Ryer:** Yeah, which is fair enough, isn't it? So Jay, what's the aim of the fuzzer then? Is it trying to make a panic in your Go code, or are there assertions about the output of things? What's it actually trying to do?

**Jay Conrod:** \[08:05\] Yeah, panic if it finds one is definitely a great indication of a problem. In general though, it's a lot like a unit test, where if it fails, then you have a problem, and if it passes - well, it doesn't really pass, it just kind of keeps generating random stuff until it finds a failure or you get bored and give up.

But yeah, it's great about finding things that you don't expect, like things that you wouldn't have written a test for, because you know, you wrote a parser... We were just talking about this today, you wrote a parser that only expects valid Unicode. You didn't even think to write a test case for random garbage that someone might feed you over the network. So it's great at finding things you don't expect.

**Johnny Boursiquot:** Does this go beyond having a contract? For example, the use case you just gave - if I've documented my code, \[unintelligible 00:08:50.24\] you should only send valid Unicode, then that's what I would expect, right? But we're going beyond the contract, beyond the way you're supposed to be using the software and basically saying "Well, just in case, let's add in some resiliency in case we don't get what we're expecting", is that the land where we are right now?

**Jay Conrod:** Yeah, I think that's very much it. I think you have some room to say "This is not really a kind of input that I'm interested in looking at", so you could have your -- we'll get into how this is used in a minute, but for example, if you have an input that you don't care about at all, your fuzzing function could just return without doing anything, and the fuzzer will say "Okay, that wasn't interesting. I'll try something else."

**Katie Hockman:** And to add to that, it's not necessarily only things that are invalid. Let's say it's valid; you have a parser that takes parentheses, open and close parentheses. But you didn't think what if you nest 500 open and then 500 close, and then you just put them all together - what's that gonna do? So sometimes it is perfectly valid, but it's not something that you thought about, or that your tests covered.

**Johnny Boursiquot:** What would you say is a result then -- what would you say is the expected behavior? How am I supposed to treat a failure for a fuzz test? Typically, if I'm testing behavior and functionality, I say "Oh, okay, this behavior didn't behave --" You get what I mean; speaking is hard sometimes. So you go and fix the code that's supposed to perform a certain thing a certain way. Is the result of having discovered through fuzz testing that "Given a certain input my code breaks", is the resulting behavior then to go add more guards for my inputs, and the kinds of things I'm willing to accept and not accept? What is the expected behavior following a failure?

**Katie Hockman:** I think it totally depends, failure and also what your code is doing; is it client-side or is it server-side? Is it documented behavior that maybe you can just add, or is it a guard you should check? Is it something you should say "Hey, if you do this, this is what's gonna happen." Sometimes it's a bug, sometimes it's not... What do you think, Jay?

**Jay Conrod:** Johnny, you mentioned contracts earlier, and I think that's a really good way to think about it. If the mutator is generating inputs that are outside of the contract for the function... For example, let's say you actually want your function to panic when it gets invalid Unicode characters. You'll wrap around that in the fuzz function and you can say "This is invalid input. I don't even wanna test it." Or you could even verify "This actually does panic when I pass invalid characters to it", so you can recover from that panic.

**Johnny Boursiquot:** It makes sense.

**Mat Ryer:** Yeah, that's quite interesting. I quite like writing code that avoids panics where possible, and I rely on errors... And I suppose in that situation, an error is an acceptable response as far as the fuzz is concerned, right?

**Katie Hockman:** Yeah, you can check errors.

**Jay Conrod:** Yeah. And panicking is only one way to indicate a crash. You can also say "This was an error." Just like you do with the testing package. You can say "t.error, t.fatal", something like that.

**Katie Hockman:** \[11:50\] Yeah, that's something that's a bit unique with this design, where other fuzzers in Go or in other languages don't necessarily do - we're not just looking for panics, or \[unintelligible 00:11:59.15\] It's also basically -- you can virtually copy the text that you have in an existing unit test, with all the t.errors and t.fatals that you have, and just put it into the f.fuzz function, which is what was running in a loop under the hood... And it can act like a test. It is not just about panics, it's also in many ways property based testing; it's similar in that regard. You can set properties and see "Is this doing what I want?" and if not, then t.error, for example.

**Mat Ryer:** What was interesting when I first saw the design proposals was you get this new testing f type, and it just has these two methods, add and fuzz. And the add lets you add some realistic-looking data, and then you pass a method into the fuzz, and that then does the mutation, does the work to create -- it's not just random data, is it? It's kind of realistic data in some way. You mentioned the mutator - how does that actually work? How does it decide what data to pick next?

**Katie Hockman:** It kind of has several components to it. A lot of the underlying code, as far as the mutations themselves - let's say it takes a chunk from one part of the byte slice and puts it in another part, of it flips a bit, or it adds an interesting value, or whatever that might be... A lot of that actually came from the Go Fuzz project that was a collaborative work by the Go community over a lot of years, led by Dmitry Vyukov. So that's part of it, part of it is random, but also kind of smart about what it's doing. It has different kinds of mutations that it's doing, depending on the type, but also some of it is using coverage guidance, too. So as it's running its thing, is it finding new edges that haven't been hit yet? Is it an interesting value? And if it is, then now it's part of the corpus, and now it's learning as it's going, and the mutator then takes these new things and works with it.

So it's not necessarily the mutator itself that is doing the smart things, but it's the fuzzing engine around it that's finding what's interesting and what's not, and making decisions about what should continue to be mutated and what shouldn't.

**Jay Conrod:** Yeah. To step down a level, we're using compiler instrumentation to actually add a counter at the basic block level. So every time your program calls a function, or it returns, or it goes one direction or another in an if statements, it increments a counter. And the mutator can read all of those counters and say "Oh, I just passed in an input that triggers something new. We've gone down a path that we haven't seen before. So this is interesting; we're going to derive a bunch of new inputs based from that."

**Johnny Boursiquot:** What constraints do you have -- in reading the design doc there was some mention of sort of a resource utilization CPU memory, and that kind of thing... What constraints do you -- first of all, why the increase in compute resource reutilization, and second, is this like a knob one can tweak and turn on and say "I wanna do this much" or "This much fuzz testing is good for me" or "I want to let things go wild in CI and spend a thousand dollars per test run"? What controls do you have?

**Jay Conrod:** I think that's an area that we need to flesh out a bit. If people have feedback on that during the beta, that would be really helpful for us. What we have at the moment is there's a fuzz time flag... I think it's like Benchtime. Benchtime is the same thing. But it's a timeout, so it'll run for, say, 30 seconds, or whatever you set it to, or you can give it a fixed number of iterations, and so it'll run for a thousand calls of your function, or 100,000, or something like that.

As far as CPU and memory go, we don't really have controls for those yet. By default, it'll run the same number of worker processes as GOMAXPROCS which may be way too many or it may be way too few, depending on what you're doing. But that's also configurable using the -parallel flag that go test already accepts.

**Mat Ryer:** And what do you recommend then to people? How often should you run this? You mentioned earlier you run it until you get bored. Is it something that you might run every time you save a file? You just do a bit of fuzzing and just do a bit as you go, keep going? Or is this something that you imagine there's gonna be fuzz servers that are running on code to keep watching and trying different things?

**Katie Hockman:** \[16:15\] I think we're gonna answer that a lot based on what's already happening with fuzzers in the Go community and otherwise. I think a goal eventually would be to integrate it into something like OSS-Fuzz, that can run fuzzers continuously and report on issues when they happen. There's already fuzz targets that use go-fuzz that do this, and we wanna have something similar for the native support, too. So that's one way. Maybe you write it, you check it in, and then you just want it to be running continuously. So maybe that's really good for code that's not changing a whole lot.

You just want to test something that's been around for a while and really run for a long time... But also, maybe you do wanna run it for an hour, or... You know, it just kind of depends on the code and how well it's tested and what you think you are looking for when you're doing it... But it's also expensive right now. So if you're running the default of eight, let's say you're running eight, all of your computer is just like running this thing, and it can make everything else unusable. So maybe you only want to do -parallel=1 or 2 something like that... But then you can only run one at a time. So in the future we wanna make it so that you can run multiple targets in a loop, but right now you can only run one at a time.

So there's just some limitations, and there's also that kind of feedback we wanna hear, like "How do people want to run it? What do people find useful?" That's really useful feedback for us to have.

**Mat Ryer:** And you mentioned that it uses compiler instructions, and it sort of interferes with things when you run these fuzz tests... Is that something that only the Go team, or by contributing and building/modifying the Go tools - is that really the only way you could have done this kind of implementation? Because I know that Damian Gryski had a project that the other people have contributed to as well, that worked in a slightly different way. The design for this particular one, it fits so nicely into -- like, it feels very familiar already if you're used to writing unit tests in Go; you know you have a function that starts with fuzz-something, instead of test. It takes a testing f instead of a testing t; it's very familiar. So was that kind of like key, that you could poke around and modify the tooling in that way?

**Jay Conrod:** I think the compiler instrumentation -- we were actually lucky, because we could reuse instrumentation that was already intended for LibFuzzer, so there's a completely different fuzzer that is using the exact same instrumentation, and it was fantastic. We just needed a tweak in the runtime to be able to use that data. I don't think our innovation is there, but what's really neat about this is that we're exposing it through go test and through the testing package. That makes it really accessible to a lot more people without having to install an external tool. It's just right there, and it just looks very similar to unit test or benchmark, and people already know "Oh, I can call t.fail, t.error, t.log." It just seems so familiar. It's easy to get going.

**Mat Ryer:** Yeah, it is quite an unusual testing technique, I think, and that familiarity is gonna only help people actually start to use it, so that's quite exciting. If you don't mind me asking, how did you each get involved in fuzzing specifically?

**Katie Hockman:** I guess I can start, and Jay will jump in... So I basically joined the Go security team in 2019, like six months before the unspeakable times, that I won't mention, of 2020... And then we basically just wanted to find some new projects to work on now that we had the allocation of new people to work on it... And we've seen that the Go community has wanted this for a long time. There's already been a lot of work that's happened for it, and a lot of that work happened in order to demonstrate to the Go community that this is useful, and that this is helpful, and that people will benefit from having it around.

\[20:07\] There's been a proposal that's been around for years, and it's gotten so many upvotes, and we in the Go team also see that too, and so a lot of it was that this has been something we've wanted for a long time, and the Go community has wanted for a long time, and we just kind of have the time to do it. It seemed like the right time, as the security team is trying to focus on this end-to-end security of your code, from the time you write it till it's running in production, and this is just a part of that. And that's been really important for our team. So I basically started on it from the beginning, where I was given this task to start thinking about.

**Mat Ryer:** What about you, Jay?

**Jay Conrod:** I'll say - Katie wrote me into this project.

**Mat Ryer:** Oh, yeah?

**Katie Hockman:** I did. \[laughs\]

**Jay Conrod:** She's definitely come up with the proposal and a lot of that API design. I've been working on the go command for the last couple of years, mostly on module support. In a past life I did more compiler runtime stuff in another language, so getting back to that kind of low-level instrumentation and managing a bunch of processes that are like communicating at high-speed - at a technical level that just feels exciting to me... But I'm also really excited about the security aspect of this. Like Katie said, we're doing end-to-end security in Go. We really want to position Go as a secure programming language; have that be one of Go's real strengths. And there are a lot of aspects to that, but fuzzing I think is really an exciting new thing that we're doing this here. Almost everything the Go team is doing in some shape or form is touched by security now. It's very much top of mind for all of us.

**Mat Ryer:** Was it nice to get a break from all the Go module work?

**Jay Conrod:** \[laughs\] Yeah, it's nice to be doing something a little different...

**Johnny Boursiquot:** That was a loaded question, Mat... \[laughter\]

**Katie Hockman:** And it was definitely funny because I knew that Jay was a very busy person and he's just like "Oh, I'm just gonna --" I was like "I wanna work with Jay on this, but I don't know if he has time." And someone was like "Well, you could just ask." I was like "Okay." So I just called him and I was like, "Hey, I want you to work on this with me. I think you have all these skills that I don't have, and I think that you'd be great for this."

**Johnny Boursiquot:** Mat was like, "Yes, yes. Whatever it is. Yes." \[laughter\]

**Katie Hockman:** So I absolutely \[unintelligible 00:22:13.21\] and guilted him in. It was great. \[laughs\]

**Mat Ryer:** Yeah. It's like, "Random chaos craziness... I'll leave that behind and I'll go and do fuzzing."

**Katie Hockman:** Basically, yeah.

**Mat Ryer:** Nice.

**Break:** \[22:25\]

**Mat Ryer:** Yeah, it's interesting, the design process... What was that like, and how did it change? Was it always like it is now, or did it take a while for that design to happen?

**Katie Hockman:** It definitely took a while. I was probably sitting in design mode for like six months. It was a long time, and not necessarily like a hundred percent focus on that at every moment of that time, but it went from like "Okay, what is fuzzing? What are other people doing? What is go fuzz, and how does that look, and how do people like it? What do we care about?" And a lot of it was laying out what are the things that are important to us for this feature, and what's not, and making decisions about "Do we want to make our own fuzzing engine, or do we wanna use LibFuzzer, or existing fuzzing engines?" That was a big decision. And those things take a lot of time, because once you make that decision - it's the decision. You can't necessarily change it. So you really need to think about those things really deeply.

\[24:22\] So it did change a bit over time, and there was some resistance to having this f.fuzz layout... Because it's different than a testing.t from a unit test. So people were like "Well, what if we just have a fuzz that just runs a lot more similar to go-fuzz?" And if you look at that design, it's a little bit different. That's what people are used to. So there was a little bit of resistance, like "Is that what we want? Is this what people are used to? Does this look right? Is this gonna provide us the flexibility that we need in the future?"

So it was a lot of little things that were fixed over time, from an ever-growing group of people. Maybe at first it was like "I'll talk to Filippo Valsorda and a few other people, and talk to Dmitry Vyukov and others, and then maybe I'll bring in a few others, and a few others, and then the wider Go community, and so on." So it took a while, and a lot of small iterations of getting it to a good place. It's all been really, really useful.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** It's interesting, that journey you've gone through to get to really quite an elegant and simple and familiar API for this... You look at it and you're like "Of course, testing.f. Yeah, that fits right in." But I'm sure it took some time to refine and go through that process. I must say, I'm really pleased at the simplicity of it. It's something that is very familiar, that you can sort of jump into, and you already have the familiar mechanics and things, and as a Go developer you kind of know "Yeah, I can easily integrate this into my test suite." You mentioned this, but I think it's worth shedding some light on that, because making something simple is not a simple task, and I think y'all have done a great job of actually creating something very familiar for developers to sort of embrace... Because one, making it part of the standard library is the first step, and having people use it, and give you feedback and things like that is another. It's a second step altogether. So I think this is a good start. I'm looking forward to playing more with this.

**Katie Hockman:** Yeah, thanks. I just want to reiterate, it takes a village. A lot of people have come in and given really useful feedback along the way, and everybody who has contributed filed issues, commented on the proposal, inside of Google and outside of Google. Everybody has been a really big help, and it really has taken a lot of people's involvement, and it's definitely not a one-person, or even a five-person or a ten-person effort.

**Mat Ryer:** Yeah, it's always the thing -- whenever you see good UX, it seems obvious, which makes it feel easy. And that's the thing, it really isn't... And I agree. I think the learning curve, that familiarity is what's really gonna be kind of vital for people to start using it... Because you know, if you've already been writing unit tests, you can sort of get started very easily. And I think that's often undervalued as well. Did you have to say no to lots of ideas and lots of things, too?

**Katie Hockman:** Yeah, that's been difficult... And it's still something we have to push back on, because at the end of the day, we wanna do everything, and we always have to make decisions around what's a no, what's a not now, and what's a yes, and then everything in between. So there are a lot of things that we're like "Yeah, that sounds cool... Not yet." For example, dictionary support; that's something that some people do. I'm not even super-familiar with it, but I know that a lot of other fuzzers do those things to try to improve their mutator and their fuzzing engine. It's like, "That's gonna have to be later."

\[27:52\] The improvements on making this the best fuzzing engine - that has to be later. We have to make the UX work first. Or even supporting structured fuzzing - how do we support structs, or other complex types? That can come later, we can add it. But each of those things, we have to make decisions on what's important to get out now, for the feedback part, and then what can we add later and make it better over time.

**Johnny Boursiquot:** So you can totally see this with future versions of Go... My code, my fuzzing tests are not gonna break; they'll simply get better and faster and more performant.

**Katie Hockman:** Yup.

**Jay Conrod:** And we do have a ways to go in that beta period as well. We're definitely hoping to get feedback from people about what can change... Because at the moment, all of our code is living on a branch. It's not on the main branch yet. We're at a period where things still can change. We don't have a strong compatibility guarantee yet, but we have a few more months where we can really get that feedback. If anyone has something to say, like "This should work completely differently, and here's why..." I mean, I hope we don't find that we've made a complete design blunder right now, but we do have some time left, so please let us know what works and what doesn't.

**Mat Ryer:** Yeah, I think that's a good point. If you take anything away from this episode, it's please try it on your code and see what you find... And do let us know as well if you manage to find some interesting crashes, because... That's the point. Actually, I know that throughout the standard library fuzzing has found lots of things..

**Katie Hockman:** Yeah.

**Mat Ryer:** So that's very encouraging...

**Katie Hockman:** Yeah, definitely please tell us. I'm keeping track of them internally just in a little document right now, but I'm gonna eventually have something more public that I'd like to share... But in the meantime, you can post those things in the fuzzing Slack and the Gophers channel, or you can even DM me on Twitter, or email me, or Jay...

**Mat Ryer:** I wonder if we could just dig in a bit -- I'm very curious, and I'm sure our listeners/watchers are also interested in how it actually works. I know that there's the BinaryMarshaler and the BinaryUnmarshaler types, the interfaces, and TextMarshaler and TextUnmarshaler interfaces. These are new types for fuzzing, aren't they?

**Katie Hockman:** There may be a slight misunderstanding. So that's not implemented yet. Mostly what we're talking about when we're talking about that in the design draft is how do we support structs, how do we support complex types.

**Mat Ryer:** Oh, I see.

**Katie Hockman:** And one way that we can do that is by saying "If you implement the text marshaling, that interface in the standard library" or "If you implement binary marshaling", we can do something like unmarshal them into some bytes, mutate the bytes, try to marshal them back, run it in your code. But there's no other way of doing that easily. That might be one way that we support structs to start with, is we say "We'll support your struct fuzzing only if it implements these interfaces." And then maybe we can make it better in the future.

**Mat Ryer:** Right, I see. So what types can you use it for today, if we wanna try it out in the beta?

**Jay Conrod:** At the moment it's just primitive types, so integers, and I guess booleans, although fuzzing is not great for booleans... Yeah, integers, byte slices, strings, things of that nature; you can have multiple arguments to a function, but we're looking at in the future supporting structs. We have had some talk about interfaces, like different implementations of an interface... I mean, not during the beta period, just -- initially, the most useful thing you can do is primitive strings and byte slices.

**Mat Ryer:** And I suppose you could always -- if you have structs, you can always still choose strings in the fuzzing and then create a struct inside that little fuzz function, can't you?

**Katie Hockman:** Absolutely. Yeah, you can always just generate it on the fly, every time. That actually may be a good thing to do anyway. Even when we do support structs, if you have something that can create them in a way that's more guaranteed to pass any kind of validation and actually do something useful, that may be the best way to do it in the future anyway.

**Mat Ryer:** \[31:55\] Yeah, one of the nice things about the design is that you are writing Go code. So again, it's familiar, and you can write Go code. You can do whatever you need to do to support that fuzzing process. And I think that as a design principle is also very clever. And I think -- I imagine we're gonna end up having talks at conferences of interesting ways of using the fuzzing capabilities.

**Katie Hockman:** I'm super-excited for that.

**Mat Ryer:** I bet there's a lot of stuff that people innovate on -- you know, solving their own problems in their own domains, and stuff like that. I think that's a good lesson for anybody that's designing an API. Sometimes you might want to maybe write a DSL, or do something very specific for your case, where a function is sometimes a great way to let people control and contribute to some package, or whatever that process is. I find that -- you know, just little anonymous functions to be very useful as a design pattern, because you end up unlocking a lot of things for the people. It's not so strict to that one way that you thought of when you designed it. Yeah, I really do like that, and the fact that it's just -- test code I think is really good.

**Katie Hockman:** I wanna get people into differential fuzzing, that's my goal. Because it's not just for panics, like we were talking about before. You can use it, for example, to see "Do two different functions behave the same way? Do they have the same input and the same output?" and things like that. You can use it in really unique ways, and that's just one. I have this dream that it'd be awesome if there would be a way to use this infrastructure to test whether or not the code on your local development branch behaves the same way that it does on master, or a different branch, or things like that. That kind of differential fuzzing would be amazing, too.

I don't have ideas for how to do that yet, but there's all these things that we could do, and things that the infrastructure already supports. It already supports differential fuzzing for two different structs given the same value, for example; or two different functions, given the same value, and things like that.

**Mat Ryer:** Yeah, that would be great if you wanna deliver a new API that's backwards-compatible...

**Katie Hockman:** Exactly.

**Mat Ryer:** ...or you're gonna do a complete rewrite, or something. And one of the interesting elements of fuzzing in this implementation is that it remembers as it goes, but where does it store that memory?

**Jay Conrod:** We have a concept of interesting values, which maybe isn't the best term for this...

**Mat Ryer:** It sounds quite good...

**Jay Conrod:** ...but an interesting value is something that expands code coverage, or for whatever reason the fuzzer wants to derive more inputs from that. So we're storing that in a subdirectory within the build cache right now, actually... So if you run `go env GOCACHE` you'll get a directory where all of your build artifacts are stored. So these are all the *.a files that used to live in a GOPATH package a long, long time ago, before Go 1.10. So we're storing it there, and at the moment it's the simplest possible implementation that kind of works; it's one of the many things that we intend to refine during the beta... And there's a directory there that has all these little files. You can clear that with the go clean -fuzzcache command, because it can grow pretty big.

**Mat Ryer:** Yeah. And then how does it use that -- if it does grow big and you then run a fuzzing operation, how does it use that information? It just uses it to keep a history of what is done, or does it use that to then decide new values?

**Jay Conrod:** Basically, it will take all the values in that cache and it will throw each value out to each one of the worker processes. So we have this kind of coordinator/worker pattern where the test binary - the binary actually run by go test - sends work to all of these workers processes which are running the same binary. So we'll throw each one of those values out to each one of the workers, and the workers will run the mutator to derive new values from them. So those kind of act like a starting point for fuzzing.

If we find a new crash or a new value that expands coverage even more, then we will minimize it, which means we're trying to find a smaller value that does the same thing... And after the minimization is finished, then we'll write that new value into the cache.

**Katie Hockman:** \[36:10\] And to clarify also, just to add onto that - we also have two ways of storing corpus entries. We have the cache that he mentioned, and then we also have test data... So that test data directory that's within your package is actually where things like new crashes are stored. So if there's a panic or if there's a hit from a t.error or t.fatal, things like that, those are then written to test data. And how the fuzzing engine runs, and what it does, and how it interprets those two directories is a little different, because they serve a different purpose.

**Mat Ryer:** That's very interesting, actually.

**Jay Conrod:** So the crashes in test data basically serve as a regression test. So once you've found a crash, you've gone and fixed it, hopefully, go test, even when it's not fuzzing, will run all of those inputs and make sure that your programs still succeed. So your fuzz targets will still run just with the previous crashes, and make sure they're still fixed.

**Mat Ryer:** That's really good. That's a really good idea. Yeah. Actually, I would just want to go and try this now. That's the thing about having a kind of official implementation of fuzzing - that sort of integration I think is where it's gonna really shine as well, because that makes perfect sense. And one of the things with unit testing - and if you've practiced something like test-driven development, you kind of end up with a nice suite of tests that you can use to kind of rely upon when you're doing changes, like refactorings, and stuff. So this is the regression protections you talked about.

I think one of the nice benefits of having good test coverage is that it gives you that confidence to do big, bold refactors and changes and things... And as a developer, that's such a valuable thing to be able to do, because you learn so much as the project is under way, don't you? You can't really know everything upfront, so having good tests like that is kind of vital for that process, so that you aren't just constantly breaking things or reintroducing previous failings. That's really cool.

**Jay Conrod:** Really, having a good set of regression tests really reduces the amount of fear and anxiety in software development. A good set of tests on projects that have had it, I've felt much more comfortable working on.

**Mat Ryer:** That's it, yeah. It gives you that confidence. The other thing is - I try and get to the point in my code where if my tests pass, I can push to production. That's the only sort of thing that I have to meet. So in a way, the only promises I'm making about the software are in the tests. And that - some people, when I explain that, are sort of like "Yeah..." They don't really see the value of that. But that property of knowing with confidence that "Yeah, this is it. It's doing all the things it promises to do. You can deploy." Obviously, it's not perfect, but it's a good property to have if you can... So yeah, I completely agree.

Does the fuzzing stuff interface in any way with current unit tests that you've written, or is this kind of like completely new values you have to start at the beginning?

**Katie Hockman:** Um, also if you have existing tests, the nice thing about that f.fuzz function is that it doesn't take a testing.f, it takes a testing.t. So your fuzz target, that fuzz foo, which is the famous test foo, your top-level function takes a testing.f, and then you can call things like f.add to add a new corpus entry, or maybe f.cleanup if you need some cleanup to run at the end.

\[39:57\] But when you run that f.fuzz function, it takes a testing.c and the inputs that you would need, maybe similar to a t.run, where it takes a t and it takes some of the values that are going in, or something like that.

Basically, if you have existing unit tests, you can copy those into a map.fuzz function, wrap it around a little fuzz target - we have a fuzz target - and a dream would be in the future that people just write their unit tests like that a lot of the time. Anytime there's value in writing and fuzzing something, you just write the unit test as a fuzz target, with an extra line basically of an f.fuzz, and then you have everything... Instead of having your table-driven tests where you have your struct, your test cases and you put them all above, and then you do t.run, you can do things like f.add and you can do each of those in that way, as part of a seed corpus - the beginning corpus that's running, and then all of your code that would have been in t.run just goes into f.fuzz.

**Mat Ryer:** And that works because the things you add always get tested as well.

**Katie Hockman:** Yup, by go test. Just by default. Just like every other unit test does... As well as everything in test data for that fuzz target. It's all part of just a typical unit test, the default behavior.

**Mat Ryer:** Do you expect this to slow down testing? Like, if you were to do that, for example when I hit Save, I'll run the tests for that package. Go builds and runs very quickly, so you almost don't even notice that it's doing anything... But maybe this will introduce some latency. Do you expect that?

**Katie Hockman:** Well, it's not fuzzing by default, and that's the important part. It's only running them as a unit test by default. So it shouldn't behave much different, it shouldn't do anything much different. When you're running go test, so you do go test all, with or without it being wrapped in a fuzz target, it's gonna behave much the same. So it shouldn't slow down. The only thing that would be slower is if you choose to run it with -fuzz.

**Mat Ryer:** Right.

**Jay Conrod:** Yeah, this is all in the testing package, so it'll be basically just like writing another unit test. It's the same infrastructure. And when you're not fuzzing, we won't build packages with compiler instrumentation, so that won't have any overhead either. Basically, it's free if you're not using it.

**Mat Ryer:** That's really good, isn't it? It actually is really good. Those kind of properties, I think... I can see this becoming the new way that you -- not probably in every case, but in cases where it makes sense, I can see that becoming the kind of default way that you do write tests. Very interesting.

**Break**: \[42:32\]

**Mat Ryer:** What was a difficult thing you remember from the design process? Is there anything that stands out as tricky or contentious or something that really took time to get to grips with?

**Johnny Boursiquot:** You don't have to name names...

**Mat Ryer:** \[laughs\]

**Katie Hockman:** I think that f.fuzz function took a lot of thought... Just the basic structure of it, deciding whether or not it was going to be -- because the original design, the original-original, when I was first writing this out and talking about it with Filippo and some other people who had been thinking about fuzzing for a while, it looked very similar to what go-fuzz looks like. I don't think there's anything wrong with go-fuzz. But that was what it looked like - it had a fuzz foo, the testing.app, and then it would just run what was in there... And it was kind of just a continuation of their work.

And then we were just thinking "What about all these other things we wanna do? Is this gonna work?" and I was like "Okay, maybe we can do something a little bit different." Maybe we can have it be more clear that this is what is running the fuzzing, and then having people allow them to do some pre-work above it, as needed... And that's when we were like, "Well, maybe this f.fuzz" and then maybe rather than f.fuzz take a testing.f, we just have it take a testing.t. And that was kind of a later decision. At first, f.fuzz took a testing.f. And then we're like "Well, it's doing everything that a unit test does, so why can't it just take a testing.t?" And it was like, "Oh, that's better." And then it started to kind of come together in that way. But that took a lot of time and a lot of thought on how to work through that.

**Mat Ryer:** Yeah, that's very interesting, and it's also quite interesting that the fuzz method -- no, it's a function, isn't it? No, it's a method, isn't it? On the testing.f...

**Katie Hockman:** It's a method on testing.f, yeah.

**Mat Ryer:** Got it, yeah. I just wanna be correct for our pedantic listeners; we do have a few pedantics that will write in...

**Katie Hockman:** \[laughs\] I say the wrong one often.

**Mat Ryer:** Yeah. Okay, so it's a function -- no, did I get it wrong again? It's a method...

**Katie Hockman:** I call it the f.fuzz function because I just think it's useful that way. I don't know; Go developers often don't use the word "method", so...

**Mat Ryer:** Yeah. They're kind of all functions as well, aren't they? That's the thing... They just have a receiver, so in a way, the pedants \[unintelligible 00:46:10.02\]. But that fuzz thing... It takes an empty interface, but it expects a function. This is quite interesting, and this is something that is a little bit unusual... And why is that? Why does it take an interface instead of a typed function?

**Jay Conrod:** So if it takes an interface, it lets you pass in any kind of function you want... And we have this restriction now that whatever you pass to f.add has to match the type of the fuzz function. So if you f.add a bunch of strings, then your fuzz function must take a string. And we verify that at runtime with reflection, and saying like "If it takes a string and an integer, then it needs to be a string in the integer" and so on.

And we also -- we can't do it entirely statically either. We talked a while ago about - this is going to land hopefully about the same time as generics, so could we do something with generics? But we need to verify everything in the test data directory, and everything in the cache... So we're doing 90% of this at runtime anyway, so it seemed like we would need to do that, but... Yeah, it takes an interface so that it can accept any kind of function. So your function can match whatever kind of data that you wanna test.

**Mat Ryer:** That's cool then. So the add method - variadic, isn't it? So it takes any number of arguments in, and then your function has to match that, but it also has the t at the beginning... So that's quite a simple enough pattern to follow. And it makes sense, because you've got the seed data, and that's sort of like the contract that you're writing there.

And I notice in the example on the website that you have a parse query, you have the URL parser kind of function that's being tested there... And if it errors, if the query string gets given errors, you just call t.skip. So that's interesting... The user kind of becomes responsible for verifying maybe sometimes in test code that the input does actually make sense, right?

**Katie Hockman:** \[48:11\] Yeah. So in that case, if it doesn't pass the basic check... Let's say you wanna do something like decode it, and then encode it, and then decode it again, but the first time it fails. You're like "Okay, well, what was given is not valid, so I'm just gonna skip it." There's no error that makes sense for that. But if it passed the first time - let's say it successfully decoded it, and then I re-encoded it, and I tried to decode it again and then that second times it fails, that's a problem. Something happened somewhere in there. So you have to kind of make those decisions in that moment.

**Mat Ryer:** Yeah, it makes sense, because in that sense you're not testing -- you have to also care about what you're testing and be aware of that, but I think that also the fact that this is a Go function that you're writing really helps there, because you're just writing Go code, and we know how to write Go code. So we get to kind of transfer all that knowledge straight over.

**Katie Hockman:** Yeah. I also just added something a little bit different... We're gonna see how it goes. Previously if you wanted to do f.Add(0) by default that's an int64 but let's say that your input to the f.fuzz is an int, it would fail, because it's like "An int64 isn't an int." And you're like "But I did f.Add(0)!" Or maybe you gave it a string instead of a byte slice, or something like that.

So what we've just added was basically in the cases where it can be converted (heavy quotes "can") or it makes sense to convert it, we do... And I wanna see if that makes people more confused, or if it makes for a better user experience. So if you notice that when you're writing code and you're like "Why did this happen?", let us know. I wanted to know if that was gonna make sense for people.

**Johnny Boursiquot:** I can already -- I'm gonna give you some live feedback, if that's okay... \[laughs\]

**Mat Ryer:** New segment of our show, Johnny's Live Feedback. \[laughter\]

**Johnny Boursiquot:** Johnny's live, constructive, hopefully not annoying feedback... So even if the conversion was possible, I'd still wanna see that error, because I've come to expect a certain level of explicitness in my code. And if there's some under-the-hood conversion happening for me, it makes for a better - in this case arguably - developer experience... But I expect sort of a slap on the wrist a little bit if I'm passing in the wrong type.

**Mat Ryer:** But in a way you're not. You are passing in an int when you add it... That's interesting though; do you think people are gonna explicitly use the types to specify what the type is in that add? You could do an f.Add(int(0)).

**Katie Hockman:** Yeah, I don't know. That's the question. There are situations where maybe a function takes an int, and if you pass in zero, it's gonna pass. You don't have to wrap that today. Even though if you do a zero, typically it defaults with int64, I think. So there are certain things where it actually does convert it under the hood, in ways that you don't notice, or that I don't notice until you're like really "Actually, that did do it." So I don't know. Maybe, maybe not. Maybe it doesn't make sense. I wanna see people actually \[unintelligible 00:51:05.21\] There are definitely cases where we shouldn't... Like, if you do f.Add(-1) and then it goes for uint, it's gonna make it the max value of a uint. We don't really wanna do that, but we're figuring out how to make that decision or draw that line, or if we just say a hard-line "You have to do it yourself", because we got some feedback that it was annoying on the other side.

**Jay Conrod:** I'm curious how this is gonna play out over time... Because let's say you change your function signature from int to int64. You wanna be more explicit about that. So you have all these values in the cache that took a lot of CPU power to find, and they're all ints. We wanna continue using those and continue converting them to int64's where it makes sense. That may potentially preserve fuzzing test coverage.

**Mat Ryer:** Yeah, that's interesting.

**Katie Hockman:** It's tricky. There's an issue about it. I can find a way to -- maybe I'll post it on the Slack, or on Twitter... But there's an issue discussing it. So if you have feedback, please, respond to that issue.

**Mat Ryer:** In the go-fuzz package on the repo there is a trophies section where it lists out quite a big list of things that it's helped find and bugs that it's fixed. Do you see this having a similar kind of thing?

**Katie Hockman:** \[52:18\] Yes. That's where I was \[unintelligible 00:52:18.17\] where people have DM-ed me on Twitter, or people have emailed me and been like "I've found a bug!" I'm like, "Great!" and I put it in the doc. At some point I wanna make that public, too. I'm still kind of collecting it. So that's where it's like, for now, tell one of us and we'll put it in the doc. But in the future, I wanna find a way to have people add to the trophy list, or at least report them in a more official way. But we do wanna know about those, so if you find one, please tell us, if you're interested in telling us.

**Johnny Boursiquot:** Are there security implications for some of those discoveries sometimes?

**Katie Hockman:** Right, so yeah, they have to make a decision. If you find a crash that's not reporting anything back, there's no way of us knowing. It obviously is running locally. We don't know. I don't get a notification when a crash happens from a fuzzer locally... Which is good. \[laughter\] But yeah, if you've found a security vulnerability, don't tell me, unless you want the public to know, basically. But you know, if it's a bug that's filed publicly already, great.

**Mat Ryer:** So you can't keep secrets, basically. Okay. Well, speaking of unpopular... It's time for Unpopular Opinions!

**Jingle**: \[53:23\] to \[53:39\]

**Mat Ryer:** Okay, who's got a delicious unpopular opinion for us today?

**Johnny Boursiquot:** Or bitter...

**Mat Ryer:** Or bitter... \[laughs\] Yup.

**Jay Conrod:** I've got one. Mat, I'm not sure if you'll consider this a personal attack or not...

**Mat Ryer:** Oh, it's not gonna be about hairlines, is it?

**Johnny Boursiquot:** Go! I wanna hear it. \[laughs\]

**Jay Conrod:** My unpopular opinion is that Ctrl+V or Cmd+V (for the Mac users out there) should paste with formatting by default.

**Mat Ryer:** That is outrageous. That one genuinely \[unintelligible 00:54:04.26\]

**Jay Conrod:** I know, right? And the reason is if you're pasting within the same doc, like you're moving a paragraph or something, you definitely wanna keep that formatting. If you're copying from a different doc in the same app, you probably still do... I know it's weird when you paste from the web browser and it has formatting you don't want, but I think it's better for Ctrl+V to do the same thing wherever you are, every time. I like software that's simple and not too magical, or at least simple to understand and explain, even if it's doing something complicated.

**Johnny Boursiquot:** Yeah, that's why you work on fuzzing. \[laughter\]

**Jay Conrod:** I know, right? That's why I work on modules, too. \[laughter\] Go is a language -- I mean, there are definitely parts of it that are a little too magical for my taste, but Go is a language that values simplicity and explicitness, and that's why I have bad opinions about pasting.

**Mat Ryer:** Yeah. Wow. That one really -- I mean, I've never been angry before on this... \[laughter\] I mean, you make quite a compelling case, and we will test this on Twitter, but I've mentioned before - I shouldn't have to engage some kind of copy and paste claw in order to get some content over just the text. I don't think I've ever wanted the formatting to come across. And I use formatting in Word documents and things, for example, or in Google Docs - I use the formatting properly. I'll use the correct styles; a bit like a style sheet, I'll format them properly, and stuff. And if you do that, then I don't see why you would ever want that formatting to come across.

I think - fine, keep the information there, but force the people like you that want that background color to be slightly different just on that little bit \[unintelligible 00:55:54.01\] You're the one that should engage the claw, that's what I think.

**Katie Hockman:** I have a less angering unpopular opinion. \[laughter\]

**Mat Ryer:** Okay.

**Katie Hockman:** This will make you feel better. Mine is that -- I don't know if it's that unpopular, but I think we need a million more tech writers in the world. I don't think that software engineers are very good at writing documentation on average. There are plenty that are good at it, but I think there's a lot of documentation in the world and services that people can use that they don't because the documentation is unreadable and difficult and it's written by the people who have their head in the weeds too much. I think if we had tech writers more often, then the world would just be a happier, brighter, more easily understood place.

**Mat Ryer:** Very interesting.

**Johnny Boursiquot:** I see you've been reading the open telemetry documentation... \[laughter\]

**Mat Ryer:** Their names, I thought you said...

**Johnny Boursiquot:** Oh, okay. Sorry.

**Katie Hockman:** I just think they're undervalued, basically.

**Mat Ryer:** Yeah, I completely agree. I like to swap and write the docs for something else, because not understanding it in that point is a virtue. So that is an interesting one, yeah. I definitely value it, too. Good documentation makes all the difference... So yeah, I think you are a real engineer if you are contributing documentation, absolutely.

Well, that is all the time we have. What a great episode. Thank you so much for joining us, and thanks for taking us on that deep-dive tour of the crazy world of fuzzing. Please try it at home, and wherever you are; probably at home still... So do try it and let us know what you think of it.

Thank you so much to our guests, Katie Hockman, Jay Conrod, and of course, Johnny Boursiquot has been here... Haven't you, Johnny?

**Johnny Boursiquot:** Yes, I've been here. You saw me, right?

**Mat Ryer:** Yeah, exactly.

**Johnny Boursiquot:** Okay. \[laughter\]

**Mat Ryer:** It sounded like a lie when you said that.

**Katie Hockman:** Thanks so much.

**Mat Ryer:** Thanks!

**Jay Conrod:** Thanks for having us on. It's been a pleasure.

**Mat Ryer:** It's been great. You'll have to come back another time.

**Katie Hockman:** Thank you so much.

**Mat Ryer:** And we'll see you next time, on Go Time.

**Break**: \[58:00\]

**Mat Ryer:** I can't get over the copy and paste thing. \[laughter\] I've genuinely -- you're the first person I've ever met who had that opinion. I'm amazed.

**Jay Conrod:** I wanted to find something that would actually be unpopular.

**Mat Ryer:** I think you may have done it.

**Johnny Boursiquot:** Yeah, I think you hit it.

**Jay Conrod:** In a former life I've worked on Google Docs, and visualizing a copy and paste claw - that just brings me such pleasure.

**Johnny Boursiquot:** Especially on a Mac, it's just awful...

**Mat Ryer:** Yeah. It is weird. I mean, you're asking for trouble. Sometimes it locks in that, and you have to go around explaining to your friends and family why \[unintelligible 00:59:54.23\] But you know, you made quite a good case for it, and often, when we put them out on Twitter, people listen to the case that's made and it does convince people. That's why most of the time the unpopular opinions are voted popular. So we'll see.

**Johnny Boursiquot:** Not this one. \[laughs\]

**Mat Ryer:** I hope not, but we'll see.

**Jay Conrod:** I'm gonna get one of those notices under my Twitter account, like "This account has been propagating bad opinions and has been suspended for 72 hours." \[laughter\] \[unintelligible 01:00:25.22\]

**Mat Ryer:** Yeah. That'd be great. And the message will be in a slightly wrong format as well. \[unintelligible 01:00:34.00\] \[laughter\]

**Johnny Boursiquot:** Is it copied and pasted \[unintelligible 01:00:38.07\]

**Jay Conrod:** It'll be too bold and has like a yellow background, or something...

**Mat Ryer:** Yeah. Exactly. The background. Surely. Surely, you never want a background on it as well.
