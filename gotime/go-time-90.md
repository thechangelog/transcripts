**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and on today's episode we're talking about tooling. All those great tools that help us be successful, help us do our job. We use the Go tools all the time, every day. We use them for building, for running code, for testing, we use them for formatting our code, for linting and vetting, and many more things, too.

I think this show will be useful to anybody new to Go that wants to get a sense of the tooling that we all use. I'm sure there will also be some golden nuggets for the seasoned gopher also... And I'm so confident because of who's joining me. I'm joined today by - in no particular order - Jaana Dogan. Hello, Jaana.

**Jaana B. Dogan (JBD):** Hello, hey!

**Mat Ryer:** Welcome back to Go Time! How have you been?

**Jaana B. Dogan (JBD):** Yeah, it's been a while. I've been traveling, I guess.

**Mat Ryer:** Yeah, yeah. Where did you go?

**Jaana B. Dogan (JBD):** I was in Marbella, Spain. The last time we talked I was just going for a conference, and then I never came back to the show. I'm so sorry...

**Mat Ryer:** That's alright. I can understand. This year you're off on travels to exotic places for work... Tough life.

**Jaana B. Dogan (JBD):** Such a tough life, yeah.

**Mat Ryer:** And you told me earlier that everything you do at work is completely confidential. Do you wanna just break all the rules and tell us anyway, or...?

**Jaana B. Dogan (JBD):** Well, kind of... I'm actually about to switch to a new job. I mean, not a new job, but sort of like a new role. Currently, I'm still exploring what I'm supposed to do, and... It's confidential not because it's supposed to be super-confidential, but I am not sure about what I will be focusing on, so... I think I will need a week, or something. Just don't get oppressive now. It's not about you, it's just... I'm still exploring.

**Mat Ryer:** \[00:04:03.12\] Yeah, absolutely. Obviously, I do take it very personally, but I'll pretend that I don't. Well, also joining us on today's show, it's only Johnny Boursiquot. Hello, Johnny!

**Johnny Boursiquot:** Hello there.

**Mat Ryer:** And speaking of new gigs, you've just started yours, haven't you?

**Johnny Boursiquot:** Yeah, recently. It's been a couple weeks. I'm still on-boarding, as they say. But yeah, it's still exciting, I'm still looking forward to contributing and learning... New gigs are always exciting that way; there's that honeymoon period where everything is new, and you're learning; you're learning about the systems, and the people, and all that good stuff... And then at some point I'm gonna cross that threshold, I'm like "Ugh, what is going on...? I need to start fixing things." But so far everything is going well.

**Mat Ryer:** Oh, good. I'm glad to hear it. Yes, it is exciting. It's scary and exciting all at the same time, new jobs. But yeah, I wish you all the best. If you don't mind, we'll keep asking you about it on the show, because I'm very interested; I think it's useful for other people as well to hear about things that we get up to in our professional lives... So if you don't mind, I'll keep bugging you about that.

**Johnny Boursiquot:** Sure thing.

**Mat Ryer:** Let's jump straight in. We're gonna be talking about Go tools today. I asked on Twitter earlier which of the Go tools are people's favorites, or which ones do they like the most... I'll just kick off - mine probably has to be `go fmt` (go format). For those that don't know, it formats all the Go code so it looks the same, and all the rules are baked into the tool. So you don't get to choose tabs versus spaces, you don't get to choose where the braces go, you don't really get to choose a great deal about the actual format of your code... Which again, I think to some people when they're used to having tools that allow them to configure all this, they feel like that's a deficiency in Go... But it turns out to be one of Go's super-powers, in my opinion. Because what happens is all Go code starts to look the same, and starts to look familiar... And I've done it where I've been to a project and found that the code just looks like I wrote it, and I definitely didn't. I think that's awesome.

If you think about pull requests, with white space... Sometimes pull requests having loads of white space makes it really difficult to see what the crux of the change is. Well, with Gofmt we don't have that problem, because it's all formatted nicely.

Anyone else? How do you feel about Gofmt? How do you pronounce it, by the way? Let's just get that one out of the way.

**Jaana B. Dogan (JBD):** Gofmt, right?

**Mat Ryer:** Okay, good.

**Jaana B. Dogan (JBD):** I mean, that's what I know. \[laughs\]

**Mat Ryer:** Yeah, that's what I'm told.

**Johnny Boursiquot:** It's always awkward when I'm teaching something and I say "the fmt package" for example... People kind of look at me sideways; I'm like "Yeah, I know. I know. Just go with it." If you say "fmt" or "format", God forbid, gophers are gonna look at you a little weird, like "We did just go with it."

**Jaana B. Dogan (JBD):** Yeah, it takes a while for people to parse it initially, and then they learn it and they take it and they don't question it... I'm trying to keep it consistent by saying "gofmt".

**Mat Ryer:** Yeah, same. I agree. I've done that, I don't think naturally, but I heard about it, and yeah, I do it for consistency, too.

It's funny, because sometimes people will say "golang", because when we use Google and we search, or when we use hashtags, we tend to write "golang", but we never say "golang." So it's a little pro tip for anyone that's new to the Go community - when you're talking about the language, just call it Go. Don't say "golang." Same with "fmt".

**Johnny Boursiquot:** \[00:08:06.15\] With regards to Gofmt, the reason -- well, let me step back for a little bit. When I first came across Gofmt, I was taken aback, honestly, because I wasn't used to basically tooling, formatting my code to look in a standardized way. I come from programming languages where everybody has their little pet peeves, their little quirks about "I like my braces to be lined up together." Another person might be like "I like my braces to end at the declaration, and then for the closing brace to be at the end", or whatever.

People would have these back-and-forths around styling, what's more readable versus what's not as readable... And obviously, it was all sort of subjective. Everybody has their own preferences, their own quirks and what they're used to and what they're not used to... But Gofmt sort of threw all of that out the window when I first came across it.

I'll be honest, for the first month or so, I was like "I don't like everything about what it does. I'm happy with 90% of it, but I don't like everything about it." But then as time went on, I really began to love the tool and what it does. The beauty of it - I think you touched on that - is that every Go code started looking like I expected it to. Basically, that cognitive load, that aspect of looking at code and reviewing code - that just went out the window. I didn't have to worry about "Okay, is this person's code gonna look different formatted than this other one?" Basically, I could just focus on the actual code and what it was doing, as opposed to trying to figure out, parse in my head, "Okay, this person's quirks are that way, and that person's quirks are that way", kind of thing. So it was valuable in that way.

**Jaana B. Dogan (JBD):** Yeah. There's actually something from Robert Griesemer that he used to say... He's the person who's maintaining Gofmt, and all the tools and so on. He says that he doesn't agree with all the styling; he doesn't necessarily agree with Gofmt, but some tool is enforcing it, so there's no question.

I work for a very large company and I witnessed -- it took like four years to just tweak one little style guideline change on the Java style guideline. And can you imagine - there's all these hundreds of people with strong opinions about style just wasting four years debating on minor style issues... I like the fact that there's this Gofmt, this canonical place, and there's no debate; there's one source of truth type of thing, and everybody has to agree with it, even if the formatting is not always what you desire.

**Mat Ryer:** Yeah. Do you think they would be able to retrospectively fit that into the toolchain? Say that there wasn't Gofmt originally, and it just came out now... Do you think the community and everyone would rally around it in the same way, or do you think there's something to be said for the fact that this was there from the very beginning?

**Jaana B. Dogan (JBD):** I think it's necessary that initially you create some initial culture around -- you know, just relying on a tool... Because I think it creates this community with enough people supporting an idea, and understanding why it's valuable. If you try to inject this type of tool at a later time, the community is already fragmented and there's a lot of excuses to prefer a personal style, because you already (for example) invested in one particular style all across a company, and there's no way to just fix things at a later time. So it's really good that they came up with that tool initially... At least that's my opinion.

**Mat Ryer:** \[00:12:01.10\] Yeah, I agree with you. There's a few examples where the foresight or the insight from the team in the original design -- I think we really benefit from some of those decisions, and we'll talk about more of them as well. I think the fact that another one of the tools, `go test` - that was there as well, from the very beginning. So testing as a concept was a first-class concern in Go. And that of course makes sense, because the time it was being designed - that was how we were building software. We were writing tests a lot, it was an important part of software engineering... But the fact that they make these decisions early just sets a precedent... And yeah, from there it pays dividends every day.

**Jaana B. Dogan (JBD):** Yeah, I think Go is doing a good job in terms of identifying 80% of what is essential in software engineering, and I think tooling is also representing those priorities.

**Mat Ryer:** Thinking beyond Gofmt then, if we look at Golint and also Govet, does anyone wanna have a stab at describing the difference between those two, or describing what they actually do? \[pause\] Cool. Well... \[laughter\] Yeah, so Golint - I like it. It essentially looks at your code and does some static analysis, and can catch common mistakes and can give you warnings about them. And sometimes they're not mistakes, but they're just best practices. You can run the lint tools on your code and see if it's got any recommendations for things that you might change.

One example is if you have something in a package that's exported, if it starts with a capital letter, then you should have a comment on that, really. That's the accepted practice. Now, the Go spec doesn't say that, so it's not a compile error if you don't have a comment there... But the Golint tool will catch it and say "For maximum quality, for the best quality, you should consider putting a comment here."

And there are a few rules around how we write comments as well, where we repeat the name as the first word in the comment. So there's a few little things like that that are encoded in the linter, right?

**Jaana B. Dogan (JBD):** Yeah. Well, we need to mention first, I think there's a difference between that and lint. That is reporting more of like suspicious stuff, and some patterns that might be a misuse of an API that may corrupt some memory, or whatever. Think about the typical example of printf - if you pass the wrong type of arguments, that is going to complain about it.

So lint is more about style errors. For example Godoc, a public API, is going to complain about that type of problems. So that became a part of the test, but not all the things that is reported as a part of Govet is genuine. There could be false positives, as far as I know. And it also applies to lint as well. These are not part of the compiler because there's some reports that are not accurate, or something... But they generally generate genuine enough reports, and they're really useful.

**Mat Ryer:** \[00:16:02.01\] Yeah, you're right. If you use printf or wrapf, if you use one of those f methods and then you don't put the correct number of verbs/arguments in, catching things like that is extremely useful, because it's quite hard at a glance to just see those kinds of mistakes. So yeah, I think people should switch on those tools for their codebase, at least run them for their codebase and see what kinds of things it is actually saying... Because you might find you agree with them.

The comment one is a good example. It's quite dogmatic. It just says "Okay, it's exported, so it needs a comment." Now if that function says "new thing", then it's obvious that's making a new thing, and your comment is probably gonna say "new thing makes a new thing." So we have a little bit of redundancy, but I think generally speaking, if you do follow the lint tools, I find that the code (again) starts to look more familiar, and you get all the benefits of Gofmt.

**Johnny Boursiquot:** One of the things that I typically do, and partly the reason why for me, off the top of my head, differentiating between the linting and the vetting was I was like "Hm, I guess, I've never really talked about the difference that much, because they're part of my toolchain." In my day-to-day I use a lot of VS Code and Vim as my editors of choice, and they have plugins and extensions built-in; that's part of my workflow. So every time I hit Save, these tools are running, and I'm getting different markers at different spots, from different tools.

There's another popular open source project out there that I think is called [gometalinter](https://github.com/golangci/golangci-lint), which includes a bunch of those tools, as well. You can configure it, turn some off and others on, and whatnot. But these tools together, they give you a set of outputs that you can basically go through and figure out "Oh yeah, I use the wrong verb here. I'm supposed to use an integer and I'm using a string instead." Things that the linter and vet would find for you if you ran them individually; but because they're part of my toolchain, basically I just look at the view at the bottom of my editor and get a list of things that I go and fix.

I almost don't care, I should say, which tools give me what, unless I really need to work with a specific tool... But it's part of my workflow, they're just a part of my editor, and everytime I hit Save, formatting gets done, Goimports does its thing, whatever I'm referencing in my code that is not imported - it brings that in automatically. All these things happen. The tooling makes it easy to just focus on writing the code and not worry so much about having to run individual tools, one-at-a-time kind of thing.

**Jaana B. Dogan (JBD):** Yeah, it's a good point actually making it a part of the everything experience; it's really useful. Especially vet is reporting a lot of useful stuff, like "Hey, this is unreachable", or you're passing for example unmarshal a non-pointer, and stuff like that... It's so hard sometimes when you're typing, and when you're just like coding, but tools are sort of helping you to do the right thing as you are programming.

**Mat Ryer:** Yeah, and I extend that to running tests as well. I tend to write unit tests, which run very quickly, and then you can run those everytime you save the package, usually. If they start getting too slow, then of course you have to have a different strategy, but certainly in the beginning, if it's unit tests, they just run very quickly... And the build time in Go is still phenomenal. We always kind of forget about it, until you have to go and build a different codebase; then you appreciate it again.

And Johnny, by the way, the gometalinter now apparently is called golangci-lint. So if you want to install that into VS Code, it's golangci-lint. That's the new name of that.

**Johnny Boursiquot:** Interesting.

**Mat Ryer:** \[00:20:19.25\] But you're right, it's the metalinter - it runs a range of other linters, and kind of gives you that one view of it. And they integrate brilliantly into the IDEs as well. So that's the other things, like you say... You can run it on Save, but even if you don't, you can still usually integrate it into the IDE in some way that just makes it part of your routine... Because you know, anytime you can get that live feedback from the code, that's valuable, because usually, as you're working, you learn, too. And that's a great way to learn things, as you're writing code, to see a linter saying "This is unreachable now" or "That things's over there now." And if it's tests too, then "Oh, these tests are broken over here that you didn't expect." You just get that feedback from the code which is so useful when you're working.

**Johnny Boursiquot:** And you shouldn't have to wait until -- if you have continuous integration (CI), you should; but you shouldn't have to wait until that code reaches that remote server, where all these tools are run, for you to get that feedback. It's much easier and much faster. Like you're saying, that feedback loop is much tighter when it's part of your tooling. So there's some things you can do locally to make sure your code is fmted, it's vetted, it's linted, and all that good stuff.

Then when it goes up for review, for a PR, whatever CI tool you're using - Travis, Circle, whatever; there's dozens of them these days - they give it a blessing, and now people can just focus on what does the code do. They don't have to tell you "Hey, you forgot to run gofmt on it", or something. You take advantage of these tools locally. They're very good tools, so I wholeheartedly encourage folks to make them part of your development workflow.

**Jaana B. Dogan (JBD):** Yeah, one of the best parts is they are really fast also. It's part of the editing experience, because they're fast. I'm coming from a background where I used a lot of Java tools, and it's not like it's a smooth experience. We used to have similar static tools, but it was not as smooth as all these Go tools. Nobody is making it optional because it doesn't really make the editing experience more challenging, because they are fast and they are useful.

**Break:** \[00:22:49.03\]

**Mat Ryer:** We mentioned `go test`. That's another tool that we use a lot. Anyone that's not used it - if you write test codes in your Go programs, you do that usually by naming the file with \_test.go at the end, and then you run go test. It will look through all those test files and it will actually run all the test code for you, and that's really how if you do TDD, you know that your code is fulfilling its promises, it's doing what you said it was gonna do.

There's also another little feature in the test tool which I think gets overlooked a little bit... It's the race detector. When you're writing concurrent code, it's possible for you to break the rules and try and read and write from the same data at the same time; if you try and do something like that, that's illegal and it will crash the program. But of course, it's very difficult to see that sometimes if you've written the concurrent code, and certainly difficult to write tests for it, because sometimes it might just not happen, just because of the way that things get scheduled... But there is a race flag which you can pass into the go test; it's a bit slower, but it does some additional checks, and you can catch those potential deadlocks early... Which is kind of cool.

**Jaana B. Dogan (JBD):** Yeah, the tooling is also part of the standard tooling. It's not just a test, but it's a really good edition like that decent detector is also a part of the tests, because we all have this workflow of not merging things if the tests are not passing... So you would ideally wanna enable the race detector as a part of your CI.

And it's amazing, but there's one thing I think we should mention - your tests should cover concrete cases, so that the detector can detect them. If you don't represent those by concrete situations, the detector won't be able to detect them... But it's amazing, because it's just so on point, and it's easy, and it's a part of the standard tools, so you don't have to figure out all these additional, extra tools in order to get the benefit.

**Mat Ryer:** Yeah. Now, it's worth saying that the race detector - if it reports that there's a violation, then that is a violation, but it doesn't necessarily catch everything... Isn't that true?

**Jaana B. Dogan (JBD):** Yeah.

**Mat Ryer:** Okay. But it's still -- to be honest, I've never seen a race condition get through after testing it with...

**Jaana B. Dogan (JBD):** Because you are actually good, in terms of like you care about your tests, so you represent all the cases, probably... I've seen a lot of times people are just not creating those situations where concurrency is a problem. They have all these super micro-tests, so they don't really capture it. And I think it's really important to tell that your tests should represent those cases, so the race detector can detect them.

**Mat Ryer:** Yeah, that's a really good point. Well, with TDD you tend to get good coverage. Code coverage, by the way, is also another part of the tooling that we just get for free, which is awesome. But yeah, I never try and shoot for 100% code coverage or anything, but naturally, it's quite high with TDD, and I suppose naturally you'll also cover a lot of those cases that you talked about, as well.

I like `go run`, as well. You don't tend to have much magic in Go, but go run is probably the magic tool, because it actually secretly does a build, and then executes... It does a few steps behind the scenes. It's great if you're just learning to code, or you just wanna write a little script quickly and just execute a program. You can use `go run` and you pass in the name of the file(s), and it just runs it. It builds it to a temporary directory, and I think it gets deleted afterwards; I'm not sure.

I think that also is such a nice thing, to be able to just quickly see results and see feedback from what you're doing, and go run is another example of that.

**Jaana B. Dogan (JBD):** \[00:28:35.05\] Yeah. I think people use `go run` for their first Hello, world program. It sometimes becomes complicated... They have this habit of using `go run` -- I think before GOPATH was a little bit more difficult to rely on; `go run` was able to work outside of GOPATH, so the behavior of `go build` and `go run` was not quite the same. People have been advocating to always rely on `go build` or `go install`, rather than `go run`... But I think it's just really nice for a Hello, world, or if you have a script type of thing that you just `go run`. It's really useful.

**Johnny Boursiquot:** You were right, Mat, when you were saying -- from my understanding, it does the same thing as `go build`, the difference being that once the programs run, it just discards that temporary artifact. At least that's the high-level of what I think it does.

One thing that's worth mentioning also is you can run it with `-race` as well. That way, if there's any sort of race conditions in the code, when the program fails, if it panics, then you'd actually get some information around where that race condition occurred, as well.

**Mat Ryer:** I didn't know that. That's brilliant.

**Jaana B. Dogan (JBD):** Yeah, I think race is supported in test, build, run... Generally, all across the tools.

**Mat Ryer:** Hm. But it adds overhead, doesn't it? And it slows down your program, and things. It's not something you would just always switch on.

**Jaana B. Dogan (JBD):** Yeah, that's why I think it's useful to make it an optional thing for tests. But apart from that, you don't wanna have the race detector always on.

**Mat Ryer:** Yeah.

**Johnny Boursiquot:** I've had mixed results, depending on the size of the codebase, obviously... But these days I'm working on small codebases. I've been working a lot with microservices, that kind of thing, so these codebases tend to be somewhat small, relatively speaking... So by default, I use the make command and by default I just run the test with the `-race` flag.

I haven't noticed significant slowdown in that, but again, obviously, it might vary, depending on the size of your project and how many things you've got going on.

**Jaana B. Dogan (JBD):** There was a benchmark about this... I think it was kind of like memory usage is like five times larger if you have the race detector on. And I think execution time-wise - again, there were some reports, but it's really depending on the use case, let's just say... It's kind of like adding some overhead, which could be 2-20x, or something, if I can remember the numbers correctly. There's a really good blog post actually, or an article on the golang org about [the race detector](https://blog.golang.org/race-detector), and there must be some numbers over there.

**Mat Ryer:** Yeah, cool. Okay. I was thinking as well about `go get`. `go get` is another one of the tools which I think -- obviously, things have changed a lot, especially in the module space... But I've gotta say, when I was first using Go, to just be able to install packages by saying `go get` and then the package name... And then for that package name also to be the import path and to be the URL of where that package lives - I've found that to be such an elegant thing, that it was very easy to install things. This is in a GOPATH world where everything just gets put into one place, but `go get` just really made that very easy. How do you feel about `go get` versus the new module tools? Because working with modules is a little bit more complicated.

**Johnny Boursiquot:** \[00:32:36.17\] I'll punt the modules to JBD and let her tackle that, but I can tell you when using `go get`, especially when I'm teaching, being able to say "Look, we're gonna import this package. Before we can actually import this package and use it in our code, we need to `go get` it." So I'd literally say "Okay, go get", and then basically I'd find the name of the package at github.com, or wherever the public repository is... And then basically I'd get this blank stare from the students; they'd be like "Okay, what just happened?"

Then it dawned on me that if I literally copy that path, go into the browser and paste it in the URL bar and navigate to that repository, immediately they were like "Oh, okay. I see what this is. You are literally pulling this code, that lives at this very path; you're putting it on the command line. You are pulling it down." Now I can actually see and read that code in my browser and see what it is I'm actually pulling down. So the whole thing about pulling down the package, it goes in your GOPATH - none of that stuff makes sense for them, but the moment they can actually go into a browser and put that very path in, it sort of clicked. Now they understood the value of `go get`, and it didn't really matter much where it was being put in the GOPATH. The fact that they knew how to get it, they knew where to go and see whatever was being pulled was almost magical for them.

**Mat Ryer:** Funny, because it's no magic, and the fact that it's so obvious, i.e. "That's the URL. Go look at it. You know what a URL is." I think that's great, and the little story you've just told makes total sense. If I use some Npm stuff for a project, I install a few things and I look in that Node modules folder - there's 16 million folders in there. \[laughter\] And I don't know where they've come from... It's kind of hidden. It is magic. Whereas that thing of being very simple and clear, even if you sacrifice some features for that - I think that's such a positive dividend that it keeps paying again and again later.

**Jaana B. Dogan (JBD):** I think we need to make an episode of Go mods, but I agree that go get is a really good initial experience. One thing I like about it - if you're go getting a main package, it installs it, it puts it in your GOPATH /bin directory... So it's just a good way to distribute tools, as well. Before Go, I was just publishing binaries, and making sure that I have the right version all across. Versioning still is a problem with `go get`, but I think it's an okayish sacrifice.

**Mat Ryer:** Yeah. What I'm gonna do is just keep moving on to different Go tools, because I'm already learning things about these as well... The other one with `go build` which I love is the fact that we can do cross-compilation. Now, this has been around from (I think) the beginning.

**Jaana B. Dogan (JBD):** Yeah.

**Mat Ryer:** \[00:36:11.13\] Essentially, for those that don't know, you can choose the target architecture, the target machine to build your Go code for. That's very useful if you're using Docker, because on a Mac you can do the build for Docker, and then you've got the Linux binary that you can then put into the Docker image. Or you can, of course, put the code into Docker and build it in there, in that environment. How's your experience with cross-compilation so far?

**Jaana B. Dogan (JBD):** I think it was magic. When I first saw -- they were typing GOOS (it's pronounced goose) and Windows and `go build`, and you'd get a Windows binary... It was like "Whoa!" It was fascinating. I usually generate binaries for Linux, so I kept working on my Mac without any worry, or anything. It was so awesome.

**Mat Ryer:** Yeah. Have you used it, Johnny?

**Johnny Boursiquot:** Absolutely. One of my first jobs using Go full-time, my first responsibility was to have a multi-platform build process. I relied on GOOS and GOARCH quite a bit. And for those of you who don't know what GOARCH is - that's the companion to GOOS, for Go architecture. Using GOOS and GOARCH were sort of bread and butter for having that work done, and being able to push out binaries for all kinds of different platforms.

There are a ton of them that Go supports out of the box. For ARM processors... The sheer combinations you can have - I've lost track of all the different variations you can push out. It really was a godsend. There's no way I would have been able to get that job done without these things being in there.

**Jaana B. Dogan (JBD):** I think it's also awesome that -- I was doing a lot of development for ARM, for Raspberry Pi, for example... The processor on a typical Raspberry Pi is going to be not comparable to my laptop, so I would just build things on my laptop because it's going to be faster, and then I'd push it to the Raspberry Pi, because it was just so easy to do cross-compilation. It's maybe ten times faster, or something.

**Mat Ryer:** Wow. So how does that actually work? Because obviously, the compiler is doing a few steps, and then it ultimately creates a binary that's made up from the machine code. Is it just that the machine code is generated differently, depending on the architecture?

**Jaana B. Dogan (JBD):** Yeah, you know - they know what to generate for each architecture, so they just basically take the input, they know what to map it, and then they generate the output based on the operating system and the architecture.

**Mat Ryer:** That must have been possible because of the way that they built the tool system. Do you think it was deliberate that they wanted to be able to build it to any target architecture, or do you feel like they just realized they could after, because they'd just built it and designed it in a simple way?

**Johnny Boursiquot:** I don't think you stumble on something like this by accident. If I had to guess, I'd say this was by design... Considering that the creators of the language -- basically, they were building for Google, so I imagine that at some point they needed to be able to run binaries on different platforms, for different CPU architectures; 32-bit versus 64-bit, all that good stuff. So I imagine this must have been part of the plan, part of the design. This seems way too complicated and way too powerful a feature to just come across, to have fallen out of the build system.

**Jaana B. Dogan (JBD):** \[00:40:12.12\] I think we simplified the process, but there's this intermediate assembly... The compiler first translates everything to that intermediate assembly, and from that point on they are being compiled to the architecture's specific instructions. So the internals of the compiler is this two-step thing... And this is a really typical way that compilers work. They're just taking it and converting everything into an intermediate language, and then from that intermediate language you can just basically target whatever architecture you wanna target.

**Mat Ryer:** And of course, you can have build tags, as well. Does anyone wanna describe build tags?

**Jaana B. Dogan (JBD):** Yeah, build tags are providing conditional compilation, and you can create different rules. For example, you can have constraints to say "Only use this file for Linux builds." Or you can say "I just want only ARM builds to have this file included in the build." There are many different rules provided by the toolchain. Goversion is one of them, arbitrary custom build tags is one of them... So it gives you this possibility to switch to different implementations depending on the Go version, depending on the operating system or architecture, or some custom build tags.

**Mat Ryer:** Yeah, I've used those successfully when it comes to testing. Sometimes if there are long-running tests, or if there are integration tests that require a different dependency to be running or something, I use a build tag in our test files. That's quite an easy way to choose a subset of things to run. And it's just a special comment that goes at the top of the file, isn't it?

**Jaana B. Dogan (JBD):** Yeah, I think it's on the top of the file, there's a particular place... But that's it. And it's really readable. I think my only complaint about these rules, about the build constraints, is that it's just really hard sometimes to just have multiple rules represented. It becomes really hard to parse. If you wanna have more complex rules, like "Hey, include this file on Linux, Darwin and blah-blah, but not on this particular thing; on top of that, not for this custom build type." I think expressing those more complicated/complex type of constraints is a little bit hard... But otherwise, I think it's just pretty straightforward, and I use build tags all the time.

**Break:** \[00:42:54.08\]

**Mat Ryer:** Okay, I want to also mention a couple of tools from the community, as well. Because remember, we are using Go tools all the time, but we can write tools as well, and some people have contributed. I think goimports was a Brad Fitzpatrick project; that was his own idea, that he just did on his own... It essentially wraps gofmt, so you get all the formatting, but it also resolves imports for you. And you can do these things too with your own tools.

Some of the tooling as well doesn't have to be Go tooling running on our machine. Matt Holt has a great JSON-to-GO service. If you google "JSON-to-GO", you basically paste in a JSON blob, and then it generates the Go structures for that JSON blob. Extremely useful, especially if you're gonna consume an API and you need all of the data, so you just don't wanna sit and type out all the field names. So that's a very useful one, and that's a [hosted website](https://mholt.github.io/json-to-go/), so you can go to that.

Are there any other community tools that we like?

**Johnny Boursiquot:** I personally like [Go Report Card](https://goreportcard.com/), which -- well, I guess it's less of a local tool, but something that can basically evaluate how close to the idioms of the Go community your code is being kept at. I think it might even incorporate some of the tools we've mentioned before - the linter, the vetting... And it includes some other things, like cyclomatic complexity analysis, and there's a bunch of other nice adds in there. Based on these things, it gives your repository a grade, I think on a scale of A through F, or something like that.

I find that useful, especially when I'm evaluating a repository, a third-party package, to determine whether I'm gonna use it or not. If it has a score, I will look at that. If it's anything other than A, then I'm gonna take a closer look; I'm gonna be a little bit more hesitant with bringing it in, because I'm like "Okay, what best practices, what idioms are you not following?" So I'll take a look at that.

Sometimes I may just see what's happening and maybe replicate it locally, without having to bring in the package, if I don't like the score, so to speak. So it's sort of another data point, so to speak, to help you evaluate the quality of the repository. But yeah, it's one of the things I like to see, as well.

**Mat Ryer:** The same for `go doc`. `go doc` is a tool you can run locally, but we have also the [godoc.org](https://godoc.org/) hosted service, which lets us view documentation for any open source project. I think that's also nice. It's a nice way to provide that capability, because it makes sense; yo want to share just a link.

The nice thing for GoDoc - it's just godoc.org/pkg/importpath. So again, you're still referring to that import path, and we see it.

**Jaana B. Dogan (JBD):** I personally use a lot of tools from Dominik Honnef. He has this [go-tools](https://github.com/dominikh/go-tools) repo, Staticcheck tool, which contains a lot of style check, a lot of linting type of features that Golint doesn't support. There are some cases sometimes - like, there's a controversial style topic; it's not possible to merge it into the official tool, so people would just go and put it in the Go Static tool. So it's a really useful tool to take a look at. In terms of static tools like that, I just rely on Staticcheck more than Golint.

**Mat Ryer:** \[00:48:13.27\] Yeah. And Fatih Arslan - he made a service which I think is called Fixmie. It's kind of a GitHub integration, as I understand it, and it analyzes -- it does a bit like the Go Report Card, but it actually creates PRs with changes in it. It's sort of proactive, like you've got another member on your team -- like the pedant, who just cares about all the style rules, and all that... That's a project that I think is worth checking out. It's Fixmie. Have a look at that one, too. It's a similar kind of idea to the Go Report Card, but more tightly integrated into GitHub.

Has anyone here written any tooling, static analysis or otherwise?

**Jaana B. Dogan (JBD):** I only wrote some tools to generate some stuff from an interface -- well, these are also some static tools... One common case is generating implementations of interfaces, and there's a lot of boilerplate, so I wrote a tool that takes the interface and creates the concrete implementation, and then you just go and fill the implementation, fill the methods.

**Mat Ryer:** And did you use the AST stuff in the parser, and things, to build that?

**Jaana B. Dogan (JBD):** Yeah, I used whatever there was in the standard library. It was not that hard. It was not that good-looking either, but it was possible to get it done in 100 lines, or something.

**Mat Ryer:** Yeah. Okay, cool. Well, I think we should also spend some time talking about some of the performance tools as well, that we just get for free. There's some great talks on YouTube... It's quite an interesting subject, and it's talked about quite a lot, and from different angles. Jaana, perhaps you could tell us a little bit about -- did I see you do a talk about the performance tools?

**Jaana B. Dogan (JBD):** It might be possible, because I worked on some of the dynamic tools when I was working on Go, so it was part of my full-time job... And I generally have been working in this area for a while... So it's possible that you have seen me giving a talk, but I can't remember, because I'm giving too many talks nowadays. \[laughs\]

**Mat Ryer:** I thought it was all confidential what you work on.

**Jaana B. Dogan (JBD):** The confidential stuff is different than this.

**Mat Ryer:** Oh. What's that?

**Jaana B. Dogan (JBD):** It's none of my performance tools, it's more about computing products...

**Mat Ryer:** Yeah.

**Jaana B. Dogan (JBD):** We'll figure it out in a couple of weeks. \[laughter\]

**Mat Ryer:** Yeah. I'm just trying to be like one of those hard-hitting journalists that tries to get out the information that you don't wanna say. \[laughter\] But I'm just too polite. You just say "I'm not gonna talk about it", and I go "Oh, okay. Bye..."

**Jaana B. Dogan (JBD):** Well, the problem is I really don't know. Like, I know generally what I'm going to be working on, but I don't know the specifics, and I'm a really precise person, I think. I don't wanna give any impressions that I'm going to work on something that I'm not going to, because people will get upset.

**Mat Ryer:** Absolutely fair enough.

**Jaana B. Dogan (JBD):** Just joking, yeah.

**Mat Ryer:** So Jaana, could you tell us about some of these tools and what they're for, for anyone that doesn't know about them?

**Jaana B. Dogan (JBD):** Yeah. Generally speaking, let's go beyond the performance tools - there are a lot of dynamic tools in Go, and they are part of the standard tooling. Some of them are related to performance, some of them are more like debugging type of stuff...

\[00:51:59.24\] We can talk about, for example, performance initially... When Go first came around, it came around with some of those dynamic tools, because we went to the SRE team and they are just really specific about what they wanna put in production. They wanna have enough visibility into things, and some of these were related to performance.

They wanna be able to get the profiles, they wanna get some runtime traces... Because they specifically wanna be able to understand when there is something going wrong, and they wanna be able to pinpoint to those. So `pprof` support was baked into Go since the early times, because of that requirement, for example. It provides you some profiles, you can also add your custom profiles, which is a useful topic... But it provides the CPU profile, memory profile, goroutines, thread profile and mutex contention profile. It was really crucial to have a language mature enough to put in production, because basically -- what most people think about performance is about development time, but it's also important in production time.

On top of `pprof` support, there's good benchmarking support baked into `go test`. So benchmarking is a first-class citizen in Go, which is not really quite the same situation in other languages. I think it kind of creates this culture where you care about benchmarking stuff. I don't know what is your opinion on this, but I've seen lots of different communities have different opinions about benchmarking just because of the tooling, or it's really easy to write benchmarks or not. What do you think about it?

**Mat Ryer:** Well, I've seen it used perfectly, and I've also seen it used incorrectly. I've seen an example where the benchmark, just because of a slight issue with the way it was written, it was reporting completely incorrect results. But if it's used in the right way... It depends on what you're testing, I suppose. If you're gonna be testing something and you're making HTTP requests, for example, there's so much variation anyway in HTTP you're not really gonna be getting any meaningful information. But if you've got two little algorithms and you wanna know which one's better at certain tasks, then yeah, it's great.

I agree with you, Jaana - I love the fact that it's baked straight into the language, and you just have to write a function that starts with "func benchmark name", take in the special variable, and as long as your get the for loop inside it in the right place, and also think about setup and teardown work and where that's happening, then yeah, it's a great way to really just find out which is better... Because sometimes it can be really surprising. In fact, I think it would make a great talk (or presentation), if someone out there wants to do it, of like "Here's some code. Which one's the fastest?" and have people guess. Sometimes I find the results to be very surprising.

**Jaana B. Dogan (JBD):** Yeah, I think benchmarking in general is a discipline that takes a lot of time to learn, and what are the other factors that actually impact the performance. I agree with you, I've seen a lot of wrong benchmarks, and people are super-strongly opinionated that it's actually an optimization, but it's actually one specific thing that improves performance maybe for one specific case, or something... And I think you need to have a really good understanding of the runtime and everything around the language in order to write good benchmarks, as well as interpret the results correctly. So it's a really tough game... That's true.

**Johnny Boursiquot:** \[00:56:08.17\] When it comes to benchmarking and performance optimization, I try very hard not to jump to that right away. I'll try to solve a problem first, and then try to optimize... Basically, prevent premature optimization. And these tools, because they're part of the standard toolchain, they make it very easy to just start using them right then there, just basically start leveraging them right away.

There was a time - maybe we're still in that time - where it seems like there was a new HTTP Muxer or router coming out every couple of weeks, and they were all like "Oh, benchmark. Compared to these other things, this one has zero allocation, and is 0.05% faster than the other one." I kind of found it silly a little bit, because of all that going on, and I was like "Okay, we're kind of missing the point here a little bit." But yeah, having that tool I think is great, and like you, I don't think I've seen that capability built in, part of the language, from the start.

I'm very careful with that, because it's too easy to create a culture within an engineering team of "Okay, if I can even ship this thing, I have to make sure it's super-optimized." We're kind of putting the cart before the horse a little bit there; it's too easy to do that, so I tend to shy away from that stuff. I bring it in when I need to.

**Jaana B. Dogan (JBD):** I completely agree. I think optimizations in development time is kind of like fabricated problems. You realize what needs to be optimized in production, right? For example, what we do is continuous profiling, which is we keep collecting some profiles from the production binaries, and we sort of like have an understanding of like "Within this project, what are some of the hot calls, and what is some of the stuff that is in the critical path? And what critical paths are more often being called? What happens if I just optimize this function? Or what is the actual cost of this particular function if you think about the whole system, and depending on the usage, and whatever?"

I think it just really makes more sense to start thinking about these cases in production, and by looking at the data you just go back to the development environment and try to optimize those things, and keep using these tools.

One of the nice things about Go profiling - the actual pprof - is it's a really low overhead type of profiling thing, and you can enable it in production. So you can just keep getting profiles from production, without impacting the critical paths so crazily. There's overhead, but there's some strategies - if you have multiple replicas of a web server, for example, you can enable production maybe for like one minute, or five minutes on one replica... Depending on how much latency you will experience, it's sometimes doable. And that's why we do it. That's what we do. Just try to optimize based on the usage, and what is the critical usage, and what are some of the hot paths; identifying those hot paths is also very important before jumping into any optimizations.

**Johnny Boursiquot:** Right. Having a problem before you solve it.

**Jaana B. Dogan (JBD):** Yeah.

**Mat Ryer:** Jaana, when you say you do continuous profiling, when you deploy services, do you have pprof already enabled in there, and you just switch it on?

**Jaana B. Dogan (JBD):** \[01:00:01.11\] Yeah, so all the pprof tools -- pprof can be tweakable. You can turn it on dynamically, and you can turn it off. So what we do is basically turn it on for several minutes, collect the data, just parse it, store it, and then we aggregate all that data, and we have this daily, weekly etc. report... And you can take a look at "Oh, this service, particularly this handler, is often used, and all these particular functions are accounting for the most CPU time, or memory, or whatever", and you can just go and dig and optimize those particular places.

I wish that Go had some tools around maybe supporting this type of more continuous profiling features. It's possible to write a tool that aggregates multiple pprofiles. It could be possible to write a library that automatically just turns once-in-a-while reports to some central service, and then turns it off, and so on. I think we can do much better in this field; it's just kind of up to the user right now to plan and design and do this type of thing... But that's basically what we do. I wrote on this topic for a while.

Some companies are aware of these methodologies and some companies are not. It would be so nice if the community was producing more best practices, as well as more tooling around this.

**Mat Ryer:** Well, there we go; there's the call gone out. Anyone who's looking for a new open source project or something to hack on - what a great problem. Could you build something that samples running Go code periodically, at some schedule, and collects the results up? It would be extremely useful, and really fun probably, as well.

**Jaana B. Dogan (JBD):** Yeah. It's a lot of fun once you start to see, for example, a large company aggregating all the profiling data. For example, you can actually improve your bill on your cloud provider; you can say that "Lots of the calls are dependent on this one function, and if you optimize it, we can actually cut the billing by 10%", or something. It's actually pretty useful once you start to do this systematically, everywhere.

**Mat Ryer:** \[01:02:49.14\] Well, I love the message of "Wait till you've got something running, and then look at optimizing it." I think in some cases you can shortcut it, but generally speaking - yeah, that advice is sound. The idea of being able to profile running production systems to understand them better I think is a great goal to have... And what a great use of the tools that we have as part of our ecosystem.

Well, on that bombshell -- I mean, I think that's it. I think we've reached the end of the hour, and so the end of this episode. Thank you very much, Johnny and Jaana. It's been awesome. Have you liked it?

**Jaana B. Dogan (JBD):** I can talk about this topic for hours, and I think this was awesome... But we should keep talking about tools, I think. \[laughs\]

**Mat Ryer:** Yeah, absolutely. Well, there's lots more to discuss, and I might even see if we can bring in some people from the community that have built some of the tools that we're using today.

One other little bit of info that I think is quite interesting - the only actual contribution I personally made to the Go project was to remove something from Golint. One time Golint got a bit easier to satisfy thanks to me... \[laughter\] You're welcome.

**Jaana B. Dogan (JBD):** Yay! \[applauds\]

**Mat Ryer:** I delete code. I love it. Well, yeah, that's it. Thank you so much, and we'll see you next time on Go Time!
