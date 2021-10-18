**Jon Calhoun:** Hello, everybody. Welcome to Go Time. Today I'm joined with guest Andy Walker... Go ahead and say hi, Andy.

**Andy Walker:** Hi!

**Jon Calhoun:** I have Carmen and Johnny both with us again. Carmen, do you wanna say hi first?

**Carmen Andoh:** Hi!

**Johnny Boursiquot:** Hello!

**Jon Calhoun:** Alright. And I am Jon Calhoun. Today we're gonna be talking about bugs, which is kind of ironic, given that we've all had software bugs trying to get today's episode started. \[laughter\] And on top of that, our one guest is missing, because she has the bug, so we are switching up the topic for today. \[Oh, nice, I'm a cab!\] What we wanna talk about a little bit is just bugs, debugging, how we prevent bugs, how we track them down, different things like that... So we're just gonna go ahead and jump right into that. Where do you guys wanna start?

**Andy Walker:** I used to be a long-time Perl developer, for a long, long time - probably like 8 or 10 years, I'd say - and that's kind of how I really cut my teeth in enterprise development. I did a lot of back-end stuff, and mostly just CGI mode Perl... There were a lot of unholy contracts that we had to make to make that work.

I remember one of the things that I really liked about it was that it had a pretty good "debugger", that you could easily just hook into. I got kind of, in a lot of ways, addicted to that. I've noticed that there really seemed to be two types of developers - those who were just all debugger, all breakpoints all the time, and then those who were more just like "Drop a println in there." And Go definitely lets you do that with your variants of print verb and everything.

Recently, I have made the switch from Vim to starting to use VS Code primarily, and VS Code Go plugin, which of course has Delve integration. Just a couple weeks ago I fired it up for the first time, and I had a pretty good time... So I think maybe I'll be switching back.

**Johnny Boursiquot:** You'll be switching back to Vim?

**Andy Walker:** No, switching back to using a proper debugger a bit more, with breakpoints and conditionals and such. But by and large, usually, I don't get too much more sophisticated than like a println or like a spew.

**Carmen Andoh:** Oh, you mentioned spew... Yeah.

**Johnny Boursiquot:** That's one of my favorites.

**Carmen Andoh:** \[03:59\] So you kind of jumped right in there with Go-specific types of debugging tools.

**Andy Walker:** Okay, do you wanna get more broad?

**Carmen Andoh:** Well, yeah... I think just talking about debugging... So whether a person coming to this podcast is a Go developer, or he's coming from a different language -- like, is there universal debugging, that spans beyond tools or beyond language ecosystems?

**Andy Walker:** Well, yeah. I do think though that you're right, there's certainly a lot of good advice that you can give on general debugging, but I think also it's important to consider the language that you're working in, that you're talking about - the various different, special tools that it offers you. At the end of the day, if you just stick with the judicious use of println statements, you can get really far... Surprisingly far, and almost any language can do that.

**Jon Calhoun:** I think the println statements are interesting, because in many ways I feel like it depends on how well you know the codebase you're working with, and if you have a sense of where to start looking. Because if you're just dropping the printlns and you know nothing about the code, you're gonna be at it for quite a while. I mean, it's probably true with the debugger too, but I feel like when you don't know the code, you don't really even know where to put print statements, so at that point you're just kind of not sure what's going on. And then I'd say there are certain parts of -- it kind of depends on the code you're working on, I guess, to figure it out.

If you're making closures and things like that, sometimes they can be a little bit more confusing, depending on -- a good example I can give is middleware. If you're writing HTTP stuff in Go and you're writing middleware, where it does something before and after a handler, there can be some weird times where I've found that it's not obvious because you think that code got called once and it eventually comes back to that code, and it can make it seem a little bit weird, so you have to think about how the code works for that type of debugging to work.

**Andy Walker:** Yeah, I think having a visual mindset really helps. I've had some really insidious bugs over the years, that after I solved them in less than a day, I was like "Oh my god, I'm so lucky. I'm so lucky that I was able to find that." And I think one of the reasons that is is because, like you say, it's important to know the code first, and at least for me, I have a very almost visual map of what I've written in my head, and I can see the flow, and it helps me to picture it sometimes. I've had some really insidious bugs, and I think you make a good point, it's important to really dive in and read stuff first.

This reminds me of a discussion that I had recently with another developer in terms of what makes a good first issue, if you're doing open source stuff. One of the things that's really important for that is locality. If you wanna give somebody a crack at something, you can say "Well, I'm pretty sure that it starts here, or it happens in this subsystem", and give somebody at least a place to start... Because yeah, it can be especially tricky if you're trying to debug something you don't know.

**Carmen Andoh:** Yeah.

**Johnny Boursiquot:** Do you find that Go bugs are easier to find than other programs, or vice-versa? I have my own opinion, but I'm interested in hearing what you all think first.

**Carmen Andoh:** Yeah, what is your experience, Andy, with Go bugs versus your Perl enterprise day bugs?

**Andy Walker:** \[07:50\] Oh, it's so much easier... I mean, yes, there are times when it can be -- I think anytime that runtime stuff enters into the equation, or rather any kind of runtime... I don't know what the right word would be; polymorphism, right...? Like, anytime you're dealing with, say, interfaces, or duck typing like you would see in Perl or Ruby, anytime you're dealing with that kind of thing, things can become really crazy, really fast. And at least in Go, a lot of the time you're not dealing with that as much. I mean, if you're doing a lot of empty interface stuff maybe, but of course, it's best to keep that to a minimum and to lock it down.

Also, if you're dealing with cgo or unsafe, stuff like that -- which is why, of course, it's best practice to segregate those into their own little boxes. But yeah, generally I find it easier.

Again, I moved away from primarily using a debugger all the time to really not using one at all. I've only just started using Delve a little bit, and it's been around for a long time. I think part of what drove me to not use a debugger is because there really wasn't one available. For the longest time you couldn't really debug Go easily. And even now, it can be kind of tricky. But Delve has come a long way.

**Jon Calhoun:** I think one of the things that I've noticed is that Go almost had to make it easier to debug, because it's making concurrency so easy... That adds a whole new level of like wanna-bang-your-head-off-the-wall confusion and just frustration. A language like Ruby on Rails is what I used before. So I used Ruby and Ruby on Rails, and there was so much magic there that debugging some things was just awful. But at the same time you had this whole model of like there's one web request -- depending on how you have things set up, but a lot of the times you can consider it as like there's one web request coming in, and I don't have to worry about anything running in parallel, or anything like that; that's all I have to worry about.

So you can get away with a lot more debugging tools, and things like that. You know this is this specific user, doing these things, and he's somehow generating all these queries... Whereas in Go, if I have something running and there's a bunch of things happening in different goroutines, there's no real guarantee that what I'm seeing in one area is necessarily that one specific thing that I'm trying to track... So that can sometimes make it more -- like, I wouldn't say Go is harder, but I'd definitely say that because I tend to see more concurrency in Go, that potentially makes it harder. But everything else about Go makes it easier, so it comes out easier in the end.

**Andy Walker:** Yeah, I think concurrency -- like, normal bugs that you encounter in a concurrent environment, it goes pretty good. For a while now, it has given you the goroutine that is most likely to have caused the problem, and that's pretty great. Hearing you talk about Rails - Rails always used to terrify me... Because there's all of this -- what is that crazy database abstraction model they use?

**Jon Calhoun:** Active Record?

**Johnny Boursiquot:** Active Record?

**Carmen Andoh:** Active Record...

**Andy Walker:** Yes, right. \[laughs\] So there's all of this crazy runtime metaprogramming stuff going on with database access, and as somebody in security, it just used to terrify the hell out of me.

**Johnny Boursiquot:** Oh, that's just Ruby, my friend. \[laughter\] Don't get me wrong, I have nothing against Ruby, but back in the old days "method missing" was my friend, you know what I mean?" You can do magical things with that thing.

**Andy Walker:** Yeah, that's true.

**Jon Calhoun:** "Method missing" was my biggest method. \[laughter\]

**Andy Walker:** And would that basically just hook into -- like, at runtime it would tell you what somebody was trying to call on you, that wasn't there?

**Jon Calhoun:** The basic way it worked was whenever somebody called a method that wasn't present, it would call that, and then you could define the method as you were going.

**Andy Walker:** Oh, yeah.

**Jon Calhoun:** So a lot of metaprogramming was simply wait for this to get called, and then dynamically throw that method in there, and suddenly it's magically there. It was confusing, but it was also pretty cool at times.

**Johnny Boursiquot:** \[12:12\] I mean, you wanna talk about hard-to-find bugs - half the time that was the source of my issues; basically, looking in places and not realizing "Oh, that is something that's actually going to be injecting the code that actually gets run at some point, that I can't quite read." It's not obvious, right?

I think the biggest problem I have - and this goes back to the question I was asking before - these days is they're more design-related issues that surface... I don't know if I can call it a design bug, but they're more like -- I don't have runtime issues coming up as much anymore. Because of Go's compiled nature, I eliminated an entire class of bugs out of my life. But now I have a lot of logic bugs; the code compiles, and it runs, and it does the right thing 99% of the time in a particular code path, or given a particular set of inputs, and I get unexpected behavior. Those are the things that these days I'm finding to be harder and harder to find. And then you add to that, like you were saying, Jon, a layer of concurrency - then yes, that can indeed make things a lot harder to find

I think Go by design and perhaps by the way it's used -- I feel like it's okay; we go out of our way to make things explicit as Go developers, and I think that has removed the cognitive burden of trying to track down some smart, clever things that developers might be used to in other languages.

**Andy Walker:** Yeah. When you guys were talking about method missing, it reminded me of this technique we used to use at my last job for a long time... One of the problems that we had was since all of this stuff was in CGI mode Perl, for every single web request you'd get all of these branching dependencies pulled in and compiled on the fly for every web request... So we wrote a library that basically just abused the Perl UNIVERSAL autoloader to let us just do away with imports entirely, and just call things by their fully qualified name... And then if the code path called it, then it would compile that. That kind of thing is what I always think about any time somebody says to me "Oh, Go is so boring, and it's not very expressive..." and I'm like "That's great, that's fine. Try going in the opposite direction." I'll sacrifice a little bit of that kind of magic if it makes my bugs easier to find... Even if it makes things longer.

**Carmen Andoh:** Yeah. And I think that's by design. I think that Go's readability and one way of doing things - you can quickly get a sense of what the code is trying to do, and then also it lets you help debug it. Now, debugging - we've talked about a lot of cool things here. One is depending on the programming language and/or possibly the programming paradigm - whether it's an interpreter language, or it has a virtual machine or not - you're having different flavors of debugging. So there's no one programming language over another, it's just different flavors... But debugging is just inherently difficult.

I remember that Kernighan quote; I've probably overused it, you've probably already heard me say it on this show... Let me see if I can get it right. "Debugging is twice as hard as writing a program in the first place." So if you're as clever as you can be when you write it, then how are you ever gonna debug it? That was the Kernighan thing there. So it's just a part of programming, no matter what language you get.

But one of the things I wanted to ask you when you were talking, Andy, was you said "Oh, thank goodness I have a good visual memory, because then I was able to get this really insidious bug...", and I wanted to follow through on that - the idea of what do you mean by that, and a visual memory?

**Andy Walker:** \[16:02\] I don't want this to sound like I'm trumpeting some special ability that I have, because I don't believe it is... It's hard for me to explain, really. When I'm debugging, it's an intensely visual process for me. I like to imagine that it's like this for a lot of people... That there's this kind of sticks and boxes model in your head that represents the layout of the memory, and the kind of control flow... For me, what I see - especially when I'm really trying to track something down - is it's almost like a map, a series of interconnected rooms, and how they connect with each other... For some reason, there's always that visual component for me, and that helps me.

**Carmen Andoh:** I have a story about my most impactful debugging moment as a software engineer; I've told it on Twitter, but I'll say it here... It's a story that Rob Pike said, which is like the most useful programming advice that he ever got was when he was working at Bell Labs with Ken Thompson. And I'm gonna say that it's appropriate - they're the two creators of Go, Ken Thompson and Rob Pike... But the two of them were pair-programming on a compiler, and Rob was at the keyboard, driving, and Ken was standing behind him.

And they were working fast, and things broke, often visibly, and Rob would just jump into -- he just reflexively would dig into the problem. He'd examine stack traces, or he'd put printf statements everywhere. He'd invoke the debugger. All these things that we've talked about in terms of what ways you wanna debug. But Ken would just stand and think. He would ignore Rob, and he'd ignore the code that Rob just had written... And then after a while, Rob would notice a pattern. And Ken would often understand the problem before Rob would, and he would just suddenly announce "Oh, I know what's wrong." And he usually was correct.

Rob realized that Ken was building - and this is something that you said, Andy - this mental model of the code. So when something broke, it was an error in Ken's mental model. So by thinking about how the problem could happen, he'd intuit where that model was wrong, or where the code must be not satisfying that mental model.

**Andy Walker:** I think it's an intensely personal thing, too. Like I say, I'd like to believe that everybody has the same kind of visual model that I have, but I don't think they do; I think everybody's may be slightly different. But it is something that's important to cultivate, and one of the things that - at least to me - has really helped me is 1) working in Go, which is a language that is comparatively boring, but I say that as a compliment; I love that about it. But also, working in a language like that and then also turning off most of my syntax highlighting has really helped out a lot, too. And I don't wanna be that guy, the "turn off his syntax highlighting" hipster... Because I do still have some. I highlight my strings, and whatever. But I think one of the things that's really helped me do that is turning that down somewhat.

**Jon Calhoun:** One of the things that's interesting - Carmen, you were talking about how Ken would not actually be coding or looking at debuggers or anything like that, and I didn't think about it until you said it, but I think that's part of what's shaped how I debug now. When I was in school, I was on their -- they had a programming team that did ACM/ICPC competitions; there were things like Code Jam, or TopCoder - basically, algorithmic competitions like that... And the way it worked is you had one computer and three people on the team.

So whenever you had a bug, it was really wasteful to sit there and try to debug it on the computer, because there's two other people could be solving different problems, and you're blocking them. So there was always this rule of "If you have a bug, you just immediately print your code and step off the computer, and the next person steps on." If you wanna get 2-3 outputs or something to give you something to work with, you can do that. But the idea was you shouldn't be pulling out the debugger; if something's wrong, it's probably a logical issue or something like that, and you need to go through and make sure you mentally understand what's going on in your code.

\[20:11\] That's where a lot of my debugging skills came from, I think. As a result, I don't pull out a debugger very often, but I think it's just an artifact of that; it's not necessarily that I dislike debuggers, it's just that's the way I've done it. And I think whenever I see people with the debuggers, they're probably doing the same thing. I'd always sort of start with like "Here's roughly the code path my code is taking", and I'd pick somewhere in the middle and be like "Can I try to trace to this point? Is this thing going wrong by this point, or is it after this point?" And with the debugger, I think it's the same - you're trying to look at something at some point in time, and saying "Is it what I expected right now, or is it something wrong?"

**Andy Walker:** Yeah. Conditional breakpoints can be really powerful for that kind of thing, too. But again, you have to know what you are expecting, and what might be wrong, and where it might be... A lot of the time recently when I've opened up a debugger-debugger - it's cool, but it hasn't... Like, there's been one time since I switched to VS Code where I was like "Oh, thank God for Delve. That's so cool." But still, most of the time it's just me popping open a terminal and using plain old println, so that it's easier to find and remove later. \[laughs\]

**Carmen Andoh:** Yeah, debugging is really just problem-solving at its hear, right? And problem-solving -- I've given talks about mental models, because I really think the two are intricately connected. And when you said "Oh, I'm glad I'm a visual learner", I say "A-ha!" because I feel like what we're trying to teach is our mental maps. You set a map, and that's also a way of thinking about things; visual, spatial things. That's why we whiteboard so much, so that we can see the hierarchy in things, or we can see the relationship between things.

**Andy Walker:** Yeah. I guess it's that BA and CS coming out, but...

**Carmen Andoh:** \[laughs\] Wait, wait, wait... Repeat that. What is a BA and CS? I already know the answer, but I want you to say it...

**Andy Walker:** Yeah, it's funny... I have a bachelor of arts and computer science. It's one of the things I enjoy telling people. They're like "Oh, you know, I'm such an impostor..." "No, it's okay. I have a bachelor of arts and computer science. It's okay." \[laughs\]

Yeah, one thing -- I guess like a corollary to the quote that you said before... I sometimes say something to the extent of like "Debugging would be my very favorite thing about programming, if it wasn't for all the damn bugs I'm trying to track down." It can be so challenging, and also so deeply satisfying. It's nice to write an API and it works the first time. But if you're finding out what was causing that type assertion error and it ended up being like a shadowed error variable four or five calls deep, which is a real thing that happened to me, and then you finally fix it and everything works, you're like "Oh, I'm so smart...!" \[laughs\]

**Carmen Andoh:** It's one of those things where nothing ever worth anything ever came easy... So we're all gluttons for punishment, and we need debugging in our lives...? \[laughs\]

**Andy Walker:** I don't know, I mean -- for me, some of the greatest satisfactions that I've ever had as a programmer has been fixing some insidious little bug.

**Break:** \[23:26\]

**Jon Calhoun:** I feel like for me it's either the greatest satisfaction, or the biggest frustration.

**Andy Walker:** Oh, yeah.

**Jon Calhoun:** Like, there's no in-between. It's either I spent all this time, and I'm like "Are you kidding me? That's what's wrong?" or it's the opposite, of like "Oh yeah, that was a really tricky thing, and I'm proud of myself for figuring it out." But it's never the middle, it's almost always like "How in the world did I let this slip in there? How is this what was causing my code to break?"

**Andy Walker:** Yeah, it's like that.

**Carmen Andoh:** How much do you estimate - I'm just gonna ask a poll here, everyone - Johnny, Andy, Jon... What percentage of time do you think you spend validating and debugging your code? Andy?

**Andy Walker:** Oh, man... Debugging?

**Carmen Andoh:** Yeah.

**Andy Walker:** I don't know... 30%.

**Carmen Andoh:** Jon?

**Jon Calhoun:** On a good day, like 25%. On a bad day, 75%.

**Carmen Andoh:** Wow. So we'll average at 50%.

**Jon Calhoun:** It's probably not, actually... I probably have bad days less often. It probably comes out to around 25%, 30%.

**Carmen Andoh:** Johnny?

**Johnny Boursiquot:** I'd say that that's in line with what I've seen. Usually around 20% of my time, which is in stark contrast with how much time I spend writing tests. I think these days I spend probably 60% of my time writing tests, and then the remainder is just basically trying to come up with a feature. I don't always do TDD. Sometimes I write my tests after. As long as I have tests, I don't care. Come at me. \[laughter\]

**Andy Walker:** I mean, hey, as long as you unit test everything, it's not gonna break, right?

**Carmen Andoh:** Yeah.

**Jon Calhoun:** I probably should have asked that at the start though - do we count testing as part of finding a bug?

**Carmen Andoh:** Yeah...

**Jon Calhoun:** Because that's hard. When you write the test--

**Andy Walker:** It's a postscript.

**Carmen Andoh:** I think it's part of this debugging mindset, right?

**Johnny Boursiquot:** I think so, yeah.

**Carmen Andoh:** I think it absolutely matters. When you test, you are already -- it's like your future self already knowing the cases to debug.

**Andy Walker:** Well, it's like somebody said in the comments. Anthony Starks says that debugging is like being the detective in a crime movie where you're also the murderer. \[laughter\]

**Carmen Andoh:** Yes, I love that one.

**Andy Walker:** I was reminded of that, because it's like - the testing that you add afterwards is the part where there's the freeze frame, and Joe Friday comes along and is like "Such and such was arraigned in the Supreme Court of..." It's like the postscript to the murder mystery; it's where everything is laid out... You're like "Okay, let's write some tests that specifically exercise this bug case that I had."

That's a pretty good practice, and I don't think a lot of people really talk about it. It's like, you find a bug - you should exercise that, because clearly your unit testing didn't catch it.

**Johnny Boursiquot:** In my Go code I can mention how having table driven tests has helped me tremendously, and coming up and easily adding cases in my test suite that I otherwise wouldn't even think to test. For those who don't know, you basically set up a structure, either using a map of anonymous structs, or however you wanna track that, and basically you just iterate through every single test case that you initialize that map with, or that set of -- it could be a slice, or however you wanna track that.

\[27:59\] And basically, in your test code, you're just then going through all those test cases and using subtests to actually run the test. So whether I have a single test or three when I start out with - I always start out with table-driven tests, even if I just have one case in there, because I know I'm gonna come back and I'm gonna add some more. And even if I can't think of one right now, I'm gonna start with the one I have and then I'm gonna be sitting there and thinking "Okay, what are the different ways this could fail?" Because when I do that, I'm anticipating bugs that could arise from unexpected behavior. So by setting myself up in this mindset... I truly believe spending time writing tests has a proportional impact on the number of bugs that you have in your code.

**Andy Walker:** Yeah, and I can hear Damian Gryski silently screaming from Canada, so I should probably mention at this point that fuzzing is something that we should all consider, too. And I'm including myself in that, because fuzzing is kind of like writing all of those tests, but not having to actually do it. And it's definitely something that I've been meaning to do more of... So I would encourage all of our listeners, myself included, to look into fuzzing, and fuzzing your software.

**Jon Calhoun:** Yeah. Even to add to what Johnny was saying - I don't feel like there's many things more satisfying than when you have a bug and you just add one line to a test case, to a table, and you can replicate that bug. Those are the nicest bugs to basically be presented with, because it doesn't take a lot of effort to reproduce them, and it usually doesn't even take as much time to debug either... Because you can just throw that in there and it's like "Okay, now I can go find it, I can replicate it, and I know it's not coming back in the future." But whenever there's not a test case that even comes close to it, you're just like "Where do I start? What do I do?" Because reproducing bugs is a huge, huge issue.

**Carmen Andoh:** Yeah. You say "Where do I start, what do I do?" and I think of it in the sense of "How do you teach debugging skills?" I came to the conclusion that typically, the most effective debugging draws from extensive experience... So how do you give the novice that experience? I think these kinds of tests, like table driven tests, do exactly that. It starts to get them to build up that experience, and mental model, and the scope, and the locality of things, bit by bit by bit, so that they can understand it.

**Andy Walker:** Well, yeah, and I think that's where good beginner issues are certainly helpful, too. If you're somebody who's learning a new language, one of the things I might recommend in terms of learning how to debug is -- well, first of all pair programming; I think that's probably step one, really, if you wanna learn debugging skills. Just really get somebody and sit down, either in-person or virtually, but ideally in-person... Because it's also kind of a diversity thing; everybody's minds work differently. And having more than one person there can also help it, but especially if it's somebody with more experience than you. And somebody who's patient, and is willing to walk through an issue with you. Maybe even they know the solution already themselves, they've just kind of earmarked it for educational purposes.

**Carmen Andoh:** The way I see that as a visual person as well is that my mental map just needed filling in, or my mental map is quite different and I'm helping -- because all of our mental maps are just approximations, and we're trying to help bring people along.

**Andy Walker:** Another thing that occurred to me that's really important is in terms of debugging, always getting that -- especially if it's not something that you've found... Like, if you're working on an open source problem, or something; that kind of minimum pathological case, it will reproduce it in the shortest number of lines possible - I think that's tremendously important. It really distills that poison pill down to its very most basic essence. I think that's really helpful, trying to find exactly what caused something, and have that ready ahead of time for whoever might fix it.

**Jon Calhoun:** \[32:06\] On that note - Carmen, before the episode you had mentioned a bug, or I think it's in a specific version of Linux... When it comes to a bug like that, where it's really hard just to say "This is the one test case that breaks it." And I think we've all probably seen something like this; probably not at that same scale... But you know, we've seen a bug like that, where there's not an easy way to reproduce it, whether it depends on the time, or it depends on multiple things happening in concurrency, whatever it is... So how do you guys tend to start when you're trying to debug that type of complex issue?

**Andy Walker:** At first -- you know, it's like the stages of grief. Denial, and just anger... "What is going on?!" \[laughs\]

**Johnny Boursiquot:** "This should never happen!"

**Andy Walker:** Right... "Corner case?!" If every time I'd said corner case was an actual corner case, this would be a very bizarre, sideways\[unintelligible 00:32:57.02\] kind of world but it's not... So after that, a lot of the times it's just kind of like "Okay, where could this possibly be happening? Let's just throw this stuff against the wall, let's see what sticks...", run it 100 times, run it 1,000 times... Those are the hardest bugs, those kind of flow control, edge case kind of bugs. At the end of the day that's where a stack trace is particularly helpful. Sometimes that's all I get.

Or once you've kind of got an idea of where it's happening -- I think this is one of those cases where a debugger can actually be really helpful. I mean, sure, you can still just like drop a bunch of printlns of all of the adjacent stuff that's around where that site is... But with a debugger - an interactive debugger, I should say - you can say "Okay, well I know this happens one in every million times, but the reason it happens or appears to happen is because of this. Let me just go ahead and set a conditional breakpoint, or something like that..." And then when it fires, "Okay, let's take a look around, let's see what happens around here." Sometimes you can't do that, and you just drop everything into spew based on that condition... Something like that.

**Johnny Boursiquot:** In my case, the kind of bug I know we're talking about here is one -- I pasted a link in for us, Jon... It's a runtime issue, a memory corruption on Linux 5.2. That's a change in a kernel. It's almost like your code worked on this particular version of an OS yesterday. Maybe there was a fleet roll and you just got a new kernel upgrade, and then now all of a sudden your code is breaking. You change nothing; all of a sudden, you're getting these kind of memory corruption issues. Like, why do you start with that, right?

**Andy Walker:** I mean, continuous delivery, right? \[laughs\] And bisecting...

**Carmen Andoh:** Well, yeah...

**Johnny Boursiquot:** Maybe...

**Carmen Andoh:** Bisecting is that, but this is the reality that many of us live in for 2019, or if this airs in 2020... Right? Which is the upstream bug. But think about 20 years ago - we would run a thing on a fixed toast, and we didn't have to worry about... Everything was pinned, the OS was pinned, and now everything is moving under our feet. So we now have to understand several levels of our dependencies both on the operating system -- or just upstream. Upstream bugs are the gnarliest.

**Jon Calhoun:** You mentioned continuous deployment and continuous integration, and all that stuff - that helps to a degree, but I think you also have to remember that what you're creating makes such a big... Like, the Go team cannot have continuous deployment or anything like that, because if everybody had to reinstall a new version of Go every day, we'd all lose our minds. It just wouldn't work. That's just not a realistic approach. But if I'm building a website and something's wrong, I can push a new version out tomorrow.

**Carmen Andoh:** Yeah.

**Jon Calhoun:** So I think the way we approach these bugs and the way that we have to consider them so drastically depending on what we're making and how people are consuming it, and all of that...

**Andy Walker:** \[36:04\] Sure. Yeah, but even if you don't have some kind of continuous integration system -- I know they've got Gobot internally, that does a bunch of this stuff, and it's constantly hammering away at stuff as things are checked in... But even without something like that, you kind of sometimes just have to do it mentally, and take a step back and say "Okay, well..." It's very Sherlock Holmes, right? You eliminate the -- sometimes it's different though. You don't have the time to necessarily eliminate the impossible, because how do you know what's impossible?

After you've banged your head against something for a little while, stepping away both physically and metaphorically can really help, too. It's like, "Okay, what if it's not me?" And I think that's something that I wish I did more - being able to take that break earlier, and say "Okay, well how likely is it that this is coming from outside?" And that's not very common, but there have been a few times where it's an upstream bug, it's a dependency thing... But you know, thankfully, modules are gonna save the world, right? So...

**Carmen Andoh:** \[laughs\] Well, you say you need to rage-quit, or you need to go and take a walk... I think that is one of the best thing -- I know a colleague of mine, Julia Ferraioli, one of the things she would have is a jigsaw puzzle on her dining table. And she would just need to get away from the problem and she would just go relax the mind and just let herself -- let it percolate in her mind while she did a jigsaw puzzle. And I don't have that, because I don't have the space, but man, I felt that was brilliant. And especially because -- again, we're talking about problem-solving, we're talking about getting a model of the system. This system is now interdependent on multiple layers and levels, and you have to check all of those, and your knowledge of them.

So yeah, I think getting away and -- because sometimes when you're chasing it too hard, you're doubling down on your interpretation of a thing, instead of stepping back and saying "Are my assumptions even correct in the first place?"

**Jon Calhoun:** I used to smoke, which I'm not encouraging to anybody, but the only upside I ever saw out of it was that if I even had a problem, I would walk outside and smoke, and that forced me to step away from my computer and everything else... And the other thing that it did - because you're sitting there and you sort of wait until you're finished smoking - even if you had an idea, you wouldn't rush back to the computer immediately, you'd wait until you finished smoking. So you'd have that "Oh, maybe this is it!", but then you'd stop for a second and think about it a little bit longer and be like, "Nope, that's not it." It forced you to sort of step away from the problem and not type on your keyboard, and not do this stuff that is in many ways distracting.

It's one of those things where I have learned -- it's not the smoking, it's the stepping away from your keyboard. Just walk away from the keyboard, so you can't even type. You don't want that temptation. And try to get that couple minutes to yourself to think without distracting yourself with everything else. That's been a hugely valuable lesson for me to learn.

**Andy Walker:** I never thought that debugging was gonna get so philosophical... We're talking about "Stepping back, expanding your viewpoint..." I'm gonna add another one, actually. Let go of your ego, and the concrete advice that I will give for that is this - how many times have you been like "Oh my god, this is insane. This must be some Turing problem level bug. I can't solve it", and then you finally, finally call somebody else over and they're like "Didn't you forget a parenthesis over there?" And you're like "Arrgghhh!" Do that as early as possible... I mean, I wish I could say that I'm good at it; I'm actually terrible at it, because like a lot of programmers, I've got an ego. My self-worth and how smart I am is tied up in that, so a lot of the times I'm like "No, man. No. I'm gonna solve it myself. Whatever. No." But you know... Just let that go. Have somebody come over, take a look at it... It's gonna be better. It'll be fine.

**Carmen Andoh:** \[40:08\] I think debugging should absolutely be approached from this socio-emotional/philosophical standpoint. One, because no one tells you when you start out being a software engineer or developer that failure is the default. It's kind of that trope; I think it's the XKCD comment, like new programmers say "Oh, yay! It worked the first time!" and then master programmers say, kind of dubiously, "Hm. It worked the first time... I don't trust it." But it just goes to show that debugging, again, is problem-solving, and as all of you said, it takes up anywhere from a quarter to half of our time, just trying to figure it out. And it's normal.

In my early days I just thought I wasn't gonna be cut out to be a developer, because I took it way too personally. "Oh, I'm just not smart enough." And then I saw somebody -- I paired with someone, as you suggested, Andy; I saw someone who I thought was like the lead developer of that day - it was like 5-6 years ago - spending 50% of her time kind of looking at it, and then talking outside, and doing the rubber duck and saying "Huh. Now, what's with this...?" etc. That's when it clicked for me. Like, "Oh, this is normal." And I just try to say that to anybody new entering into the industry. This is normal, and this is just part of the process, and you are going to enjoy it when you figure it out. On some days you're gonna need to go out and not have a smoke, because we don't condone that, but maybe go take a walk and a break. \[laughter\]

**Jon Calhoun:** I'm in shame now...

**Carmen Andoh:** No... The other thing -- yeah, I won't say it.

**Jon Calhoun:** When Mat is on the show, he always talks about how it's impossible to estimate how long something is gonna take to build. And I think part of that comes down to, like you said, if you run into a tricky bug, there goes an entire day sometimes, just figuring out what's going on with that bug... And you can't predict that, ever. That's part of the reason why every developer is like "Oh, we tried to guess how long things are gonna take", but at the end of the day you just never really know if it's gonna take a day to figure something out, or if you're just not gonna have any bugs at all, it's just gonna be a straightforward thing.

**Johnny Boursiquot:** Before we transition, two techniques that I used, that have helped me tremendously in bug hunts, or really throughout my day - I use the pomodoro technique. At any one time, I have a 25-minute timer that's gonna audibly ring. That kind of "Hey, snap out of it!" kind of thing. Sometimes it's good, sometimes it snaps me out of my concentration and I'm like "Why did I have this thing on?" But most of the time it works out. At least it gives me -- you know how when you're in the zone, the whole day could go by and you don't realize it, and the next thing, you look outside and it's dark out... Well, that's all well and good, but I can't afford to see the whole day go by; I have too many balls I'm juggling, so I need to be cognizant of the passage of time.

So where am I going with this? If I have two pomodoros go by, I hear the bell ring twice, and I'm on the same problem, trying to troubleshoot the same exact issue - I've already had two audibles; that tells me "Okay, you need to do that step away thing now. You need to go for a walk, or call somebody in, pair with somebody", whatever it is. That's the limit I give myself. I say "Okay, so you spent at least 50 minutes on this thing, so now is a good time to step away."

I already have that expectation of myself, so basically I'm trying to remove, wean out the whole -- as you were talking about, Andy, the ego and the stress you add to yourself. "Oh, I should be able to figure this out." So I'm missing saying "Hey, you're a professional. Your time is valuable, so spend X amount of time on any one thing."

**Carmen Andoh:** \[43:45\] Yeah. That's really helpful advice, because it is also a thing, like "How much time should I spend on this? How much time until I walk away?" I need to go get myself a pomodoro timer... Because I have done that; it's like, nerd pride is on the line, and I'm spending a day doing this when really it would have been better for me to walk away... And I had no visual queue to do that if I didn't have a schedule going. So that's really good, useful advice.

**Andy Walker:** Yeah. I think time-boxing is really powerful. I can't do it... I'm working on it so hard. I've got like two hourglasses, and at least three pomodoro apps, and every time I'll be like "Yup, today's the day we're pomodoro-ing. We're time-boxing this perfectly." And I get two or three through it, and it's just... I don't know; maybe it's just a matter of pushing it.

I've started doing bullet journaling. That helps a lot for time management. It's like "Alright, what's the crap that I need to solve today?" You know, reorder it at the end of every day... But yeah, I agree, I think Jon is right; I think time-boxing can really help. And whatever hard and fast rule you need to know when to step away from something, you should take it.

**Carmen Andoh:** Have you ever as a debugging device ever gone to the whiteboard or gone to a sketchbook and doodled? I don't have a whiteboard anymore when I'm not in the office, but I have a sketchbook full of debugging sketches. I don't know if anyone does that, or if that's just me.

**Johnny Boursiquot:** All the time.

**Jon Calhoun:** Every year, Walmart has their Back to School Sale, and they have notebooks for like 20 cents, or something... \[laughter\] And every year I buy like 50 of them, and my wife looks at me like "Why do we need this many notebooks?" And I'm like "Trust me, I will use them." \[laughter\]

**Carmen Andoh:** You know what - take pictures of some of your sketches, and maybe just tweet them out or something, and just say "Debugging sketches" or something... Because I think that would be lovely...

**Johnny Boursiquot:** Yeah, yeah.

**Carmen Andoh:** ...especially as we are trying to communicate our mental maps to other people. I really love when someone will sketch a thing, just -- oh God, speaking of the kernel debug; I think it was like 35777 on GitHub, which is the upstream thing... The person that was in on that, Mr. David Chase - he's a colleague of mine. He on the back of a napkin talked to me about a certain garbage collector method... But I've saved that sketch because there was so much goodness in it, and I just love sketches. So I really want everyone to just \#debugsketches. Do it! Tweet it out if you hear this. You could @ me. I just wanna see everyone's sketches.

**Andy Walker:** Okay. I honestly think that if everybody took the time to diagram things in the way that makes the most sense to them... Like, not just computer science, but so many different things. Everything finally clicks when you have that visual representative model in your head that works for you. And for some people it's different. How you understand the real numbers, for example, or something like that, or irrational numbers. It's different for everybody, but once you have it, it clicks... And I think that would be a very helpful thing to share. Because sometimes if somebody else has this mental model that is just so concise and so perfect, and then you see it for the first time and you're like "Alright, that's it forever. That fundamental misunderstanding is gone from my life forever." So I think that's something we should share more.

I don't think a lot of people realize that they do it. They're like "Okay, I've got this picture in my head, and it represents this concept, and I kind of always return to that anytime I'm trying to think about it..." But everyone's different, so your mental model might be the thing that is somebody else's breakthrough, and you just kind of casually use it every day.

**Carmen Andoh:** How do we teach debugging skills? Or how would you? ...if you were to do this, pairing with a junior, what were some of the things you'd use in your toolbox?

**Johnny Boursiquot:** \[47:44\] Pairing. Honestly, that's the only thing I've been able to find that is effective. I mean, I can send them blog posts, I can give them books to read, I can do all that, but there is something out of sitting down with somebody. You verbalizing your thought process, and walking through something along with them, and for them to hear how you're navigating in your mind the code, what you're thinking as you do. That doesn't mean they're gonna think the exact same way. That's the magical thing, right? They're gonna pick up -- you're queuing things for them, like "Oh, okay... I didn't think to think of that." So they're picking up things. There's nothing quite like pairing with somebody to go through that process, to actually really demonstrate the art of debugging.

**Andy Walker:** Well, and I think it was Carmen that said earlier, debugging is primarily an experience-based skill, and the only way to quickly teach an experience-based skill is to have somebody with experience stand there with you and give you the hard lessons that they learned, as shortcuts. That's the quickest way to convey that kind of skill, I think.

**Break:** \[49:10\]

**Jon Calhoun:** I think even if we look back at like a school level, I remember seeing tests for homework or whatever it is where they'd be like "Find the bug in this code", but then they'd have you looking for silly things like semicolons missing... And I'm like, "If you're gonna have me look at printed out code, don't make me look for silly things like that, that the compiler can just tell me what's wrong." I think instead it makes more sense to present them with "Here's some code. Maybe it'd be like "And here's how we're gonna test it. Give us a couple test cases that you think would be useful for this code." But then on top of that, you could have them trace some code and be like "Here's what the code's supposed to be doing, here's what it's outputting." And you could keep these relatively small... But you could keep it sort of like math problems, where it's like "Here's a simpler program that you've never seen before. Try to figure out what's causing it to print out this output, when it's supposed to have this output", or something.

I think if we did that more with students when they're learning to program, and focused on this "You need to understand the logic, not--" So many people think of programming as like just putting these words on the screen, when most of our job is thinking about how things should logically flow, and thinking about all of that, not the actual -- putting words on the screen is the after effect. It comes later.

**Carmen Andoh:** Pairing is difficult to do in a remote fashion, although the tools are getting better and better and better. I often found that one of the remote ways you can help with debugging is even though it takes more time on the people doing it, to maybe narrate your thought process in an issue \[unintelligible 00:51:31.08\]

**Andy Walker:** Sure. One of the things that occurred to me when we're talking about pair programming is I think that is one of the things that is more difficult when you're in a primarily remote working environment. Now, I'm not gonna go so far as to say that it's impossible, but I do think it's more difficult. How many bugs have been solved by hearing somebody fling an expletive over a cube wall, and you're like "What's that man cursing about?" and then you go over there and all of a sudden your that other pair of eyes.

So I do think that there are extra steps we kind of have to take to facilitate that in a remote environment. Open office hour or something like that. I think that's important. Reaching out is important.

**Carmen Andoh:** \[52:15\] Yeah.

**Andy Walker:** Because there is that ego hump to actually reaching out. It's one thing to just make passive-aggressive, disgusted sounds and hope that somebody will notice, but it's completely another to actually type out to somebody and be like "Please help me." That's something we need to encourage as much as possible, and open office hour or stuff like that I think can be good. But I don't have a full solution.

**Jon Calhoun:** Yeah. Earlier you'd mentioned letting go of ego and just admitting you don't know that something's wrong, and I think sometimes it's not strictly ego, it's the fact that they're in a different timezone, or something. So it's like, I have two hours until they're up. I can't ask for help right now. That's one of the reasons why I -- not to get in the whole remote versus local, but that's one of the reasons why I think junior developers are sometimes better served in an office... It's because a lot of that stuff is more available. And you don't feel like you're bugging somebody as much to say "Can you look over at this screen?" versus "Let's bring up the screen share, get your mic out and your headset." It's a little bit more involved, or it feels like it, and I think that can discourage them from doing things that could really help them grow quicker.

**Carmen Andoh:** That is a good point.

**Andy Walker:** But you can also start off early, and just be like -- like, one of the things that I tell people... This is kind of a pet peeve of mine, but I really hate it when people ask to ask, instead of just asking.

**Carmen Andoh:** What does that mean, "ask to ask"?

**Andy Walker:** Certain people will just be like, "Hey, what's up?" And then three hours later I'll be like, "Okay, here I am", and then they'll ask me the question. It's like, "Come on! This is the reason we have these out of band communications. I appreciate you trying to be polite..." And I think that's when there's always a very polite thing to say, very polite conversation where I'm like \[unintelligible 00:54:01.05\] I'm not always here, but I'm always willing to help, so you just throw whatever you want in this channel, and I'll come back to it and we'll talk about it then." I think that is something you need to start with early, especially if somebody is transitioning into that environment. Just be like "If you've got a problem, put it in here. I may not be there, but when I get back, we'll talk about this." So that can kind of help to overcome that, especially if you hit it early.

**Jon Calhoun:** Especially if they know that it's okay to say "Can you help me with this?" And then even if they come 15 minutes later and say "Oh, I figured it out", that's okay. I think some people worry about doing that, but it's like, I don't mind reading a chat that says "Can you help me? Never mind, I've figured it out."

**Andy Walker:** No way, I love that. Wake up in the morning and somebody's like "Never mind...", I'm like "Great!"

**Carmen Andoh:** \[laughs\] Yeah. I love that we're talking about maybe the more human side of this thing. We also have to debug human intention, and debug human emotion, and I think that that is also really hard.

**Johnny Boursiquot:** Yes.

**Andy Walker:** Well, this is something that I was gonna talk about for the episode that I was supposed to be talking about today... But humans... This line of work, as much as we might want to imagine that it's sort of perfect, technical meritocracy, where ideas speak everything, and the power of your ideas -- no, this is fundamentally a human endeavor, just like anything else. It's just that we tend to try and push that away, and forget about that. That makes debugging hard. That in itself is something I feel like we have to debug.

**Carmen Andoh:** It's like a meta debugging within the technical debugging.

**Andy Walker:** I mean, I don't wanna get too wonky about it, but sure. I feel like I might have gone a little off the rails there.

**Johnny Boursiquot:** Debug yourself.

**Andy Walker:** Yeah, yeah.

**Carmen Andoh:** Debug yourself... Oh, that could be another hashtag, Johnny.

**Johnny Boursiquot:** I know, right? \[laughter\] I'm here all day, I'm here all day.

**Carmen Andoh:** Thank you! \[laughter\]

**Jon Calhoun:** So I think that's it... Thank you everybody for joining us for this episode of Go Time.

**Andy Walker:** Thank you for having me.

**Carmen Andoh:** Thanks! Take care. Until next time.
