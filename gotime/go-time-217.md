**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer, and today we're talking about the other features in Go 1.18. Now listen here, you... Come here, come here. Go 1.18 has got two great, big features that everyone's talking about. I mean, everybody. All the popular people are talking about it. Everyone. Well, we're not popular. We're gonna be talking about the other features, not those two. And just for anyone that doesn't know, it's fuzzing and generics. And that's the only time they're gonna be mentioned on this episode.

In fact, we've got a new rule - if they are mentioned by anyone, even accidentally, unfortunately you will be immediately booted from the podcast. So please bear that in mind. No talk of those two subjects. Pinky promise? That's a pinky promise from me, and we'll find out if we're also gonna get a pinky promise from our special guests today. Joining me is Daniel Martí. Hello, Daniel.

**Daniel Martí:** Hello. Nice to be back, and nice to bring my technical problems along with me.

**Mat Ryer:** \[laughs\] Your technical problems are, like you, always welcome, Daniel. Daniel's been using and contributing to Go for quite a few years now, and you've actually written a few tools as well, like the stricter gofmt, and what could be described as the opposite, a Go code obfuscator. They're interesting tools, Daniel... How is the gofmt more strict?

**Daniel Martí:** It essentially restricts how you can write and format code in a few extra ways. For example, no empty lines at the start of the function body. Things that I generally do.

**Mat Ryer:** Cool. Okay, we'll put a link to that in the show notes, if anyone likes -- I like the fact we have gofmt, and I like the idea of a more strict one. Oh, Daniel, do you pinky-promise you're not gonna talk about those two other subjects today?

**Daniel Martí:** Pinky-promise!

**Mat Ryer:** \[00:04:03.10\] Okay, Daniel's pinky-promised. Okay. This is really professional. Okay, we've also -- you're not gonna believe this, Daniel... You will believe it; you already know. But imagine if you didn't... We've also got Michael Matloob with us. Hello, Michael. Welcome to Go Time.

**Michael Matloob:** Hi! Great to be here.

**Mat Ryer:** Oh, it's a pleasure to have you. Michael's on the Go Tools team at Google, living in, you know, New York City, no big deal... And he previously worked on go/packages, which is very useful if you're writing code generation tools and things like that, and infrastructure for tooling. And now he works on the Go command, right Michael?

**Michael Matloob:** Yes.

**Mat Ryer:** And do you pinky-promise to not mention those two big subjects on this very episode?

**Michael Matloob:** I won't mention them by name.

**Mat Ryer:** Okay, that sounds like a good pinky-caveat...

**Michael Matloob:** It is. It is a pinky-caveat.

**Mat Ryer:** Okay, fine. We won't mention them by name. We'll see how it goes. So this episode -- obviously, there's a lot of people blogging and talking about the big headline features. A lot of people are very excited, a lot of people are very dismayed about generics in particular; I've just said it, and I can't believe that I have to leave the podcast... But a raft of other things. And this release in particular seems very packed and dense with features. Why is that, do we think?

**Daniel Martí:** I believe they've been saving a few large features for some time. They've been building up the generics for nearly two years now, and now it's shipping, right? And I did mention the taboo subject, but I think it's also happened with fuzzing, which has been in the works for like a year now.

**Mat Ryer:** Yeah. I see. By the way, just mentioning another taboo subject doesn't cancel out the other one. You're just compounding your crimes. I asked Daniel and Michael to find a list of the things that they're sort of excited about, or interested in, that we can go through and talk about... And obviously, Michael worked on module workspaces as well, so we'll carve some time out at the end to talk about that in particular. But Daniel, maybe you could kick us off... There's a really interesting one that to me seemed like a silly, unnecessary helped, but it turns out to be actually quite worthy. That was strings.cut. Could you tell us about that?

**Daniel Martí:** Yeah, so I think anybody who's written any non-trivial amount of code knows that they have to deal with strings, they have to add strings, look at prefixes and suffixes and so on, and one quite common operation is wanting to cut a string in two. For example, maybe you've got a domain name and you want the actual name and the extension. Or maybe you've got a file name and you \[unintelligible 00:06:38.14\] that kind of thing. You can use Go APIs like strings.index, or there's also strings that split n, and you can give it the number 2. So like "split this string in up to two pieces." But these APIs are not super-easy to use. For example, if you use index, it may give you -1, and if you don't check for that, that might panic. And split has the same issue, because it gives you a slice. You could say cut has less sharp edges, so it only gives you two strings for the two sides, and a boolean telling you whether or not it's successfully cut.

**Mat Ryer:** Yeah, that's nice. So if say you were cutting on a colon and there wasn't a colon in there, it wouldn't be in any way like a panic or a problem. You'd just get a false as the second argument.

**Daniel Martí:** Exactly.

**Mat Ryer:** Yeah. What do you think about that, Michael? Have you written code that cuts things up like this?

**Michael Matloob:** I have, yeah. It would be a nice convenience. I like conveniences.

**Mat Ryer:** Yeah. I thought this was like an unnecessary helped, because whenever you can already do something, that's usually my preferred way. I looked at some of the commentary on this one, and the number of cases where people are basically doing the same operation over and over again is kind of everywhere. And including some places where we've done it incorrectly, or in a way that would panic if it got some bad input, or something.

\[00:08:05.10\] If there was some testing tool that helped you test out all these different possible ways of responding to input, that'd be great; but not on this episode there isn't. But yeah, okay... So strings.cut, and that's coming in Go 1.18. Okay, Daniel, have you got another one for us?

**Daniel Martí:** So I've got another one that's significantly more complex than strings.cut, and I believe it was developed by the people at Tailscale over a few years. It's essentially a replacement for the net.ip type. Right now, IP addresses in Go - they're represented as a byte slice. So you can think of a byte slice that can have many lengths. So an IPv4 is gonna be shorter than an IPv6, for example... And they designed a new IP package which they've called netaddr, but now it's being merged as net.ip. So it's /netip, and it's got a bunch of advantages, mostly related around performance, but the two main properties that it has as part of its design, which is "do not use a slice", essentially... One, it's comparable, so you cannot compare slices; you can only compare them to nil. And the other one is that it doesn't allocate. So you can create a new IP without calling make, or new, or anything like that, because I think it's backed by what is essentially a bunch of integers.

**Mat Ryer:** So will the standard library - bits of it - be rewritten to use this new type, or is this just gonna be something that's available for calling code?

**Daniel Martí:** I think that's a good question. I think anything that exposes APIs with the old type will have to remain the same because of backwards compatibility. I seem to recall one of the reasons to add this to the standard library is so that, for example, HTTP/2 and /3, which -- I think it's only HTTP/3 which reimplements something like TCP write in user space, and that deals with a lot of IP addresses. So if you can remove a bunch of internal allocations that don't leak into the API, that can be a very large plus.

**Mat Ryer:** Yeah, that's nice. And do you know if there are gonna be helpers to switch between the two? Do you think we're gonna see code like that flying around for a bit?

**Daniel Martí:** I believe the package comes with helpers, but my memory is failing me...

**Mat Ryer:** Okay. I mean, if not, people will probably end up doing that, I imagine... But yeah, it's nice to know that there's a sort of improved data type there. And it's funny - you know, with the Go backwards compatibility promise you can't just break things, and break APIs, and break everyone's code. It's not Python... I shouldn't have a go at other languages, but Python does that a lot...

But with that promise, of course, your hands get tied. So this is kind of a nice way of releasing almost like more modern implementations, is to sort of release them alongside, and then they kind of co-exist. But does that create confusion? Like, how will people know which one to use?

**Daniel Martí:** That's a good question. I think the Go standard library has a bunch of cases where there are packages and APIs that everybody knows not to use. There's container/list, that has like a linked list, for example. I don't think everybody's used that outside of an example... I don't think they can deprecate net.IP, as in the existing net.IP type, because it is used in existing APIs. But I think there is gonna be a common understanding that if you want the extra-nice features of the new type, you should just use it.

**Mat Ryer:** Great. Thank you, nice one. Alright, Michael, maybe you could pick one to talk about next...

**Michael Matloob:** I'll pick a couple of features that my colleagues Jay and Ryan added to the Go command. So they are vcs build stamping, and a debug buildinfo function to get information about the versions of modules in a Go binary as an API.

**Mat Ryer:** Hm...

**Michael Matloob:** \[00:11:49.25\] Both of these have a similar core motivation, which is like to improve visibility into binaries and which packages they were built on, so you can determine, say, if binaries were built with certain commits of code, in the case of vcs build stamping, because the main module may not have a version associated with it, and in the case of a buildinfo of dependencies.

This is shaping up to be a big thing in these days, to know whether your dependencies and the code they are built with have bugs or bad features in them, and if the code that you're running with is safe, and to audit everything properly. We've seen several cases of bad libraries in the wild, and people have to quickly audit if all their code running in production is safe or not.

**Mat Ryer:** Yeah, and it's a tricky thing. So unpicking that a little bit then... So vcs, version control systems, like the Git hash when you have a certain level that you've committed up to, and everytime you commit, you get a new hash... And so now when we build, that will be incorporated. Is it like it supports all the major vcs systems? So it'll support Git, and...

**Michael Matloob:** Yeah, yeah. I mean, it definitely supports Git. I don't know other vcs'es we support. Dan, do you know?

**Mat Ryer:** But they will be coming soon.

**Daniel Martí:** I think there's Mercurial, Bazaar, Subversion, and that might be it for these days.

**Mat Ryer:** It's a good selection... Could you name five? \[laughs\]

**Michael Matloob:** Five vcs systems?

**Mat Ryer:** Yeah. Just five, dead-quick.

**Michael Matloob:** Well, Dan named four, so...

**Mat Ryer:** I know. So it should be easy.

**Michael Matloob:** I've seen in the Go command a vcs named Fossil that had support somewhere... So that'll round us out.

**Mat Ryer:** There we go. Fossil. There we go. Five. Brilliant. Learning. Okay, and the other thing is that buildinfo, with all the dependencies, because that is a big thing. We're paying a lot more attention now to reporting vulnerabilities, capturing that data, and then being able to, in the tooling, use that to know whether we are running something that has some known vulnerability. So that is a massive thing... And of course, having this put in there automatically saves us a lot of effort, right?

**Michael Matloob:** My understanding is the buildinfo is like a function that's like accessible to programs that were just in the Go command before, like go version -m. So it makes it easier for other people to write these auditing programs that can help detect if there are bad versions in your dependencies, and then flag it, or fix it, or whatever. These automated things I hope can solve a lot of manual human work that we've had to do when these issues have come up.

**Mat Ryer:** Yeah. Well, it's very useful if you have Dependabot running in your continuous integration, or just running in GitHub... Having those tools help. It's all great, so anything in that effort I think is worth having. Very cool.

And yeah, before we had to use either build tags or do something else funky to get the version. I would always do that, I would have some script that would -- I think I did it with Go Embed as well, successfully, recently. But we just don't have to do that now. And so will we be able to access that version inside the build as well from somewhere?

**Michael Matloob:** Sorry, access the --

**Mat Ryer:** Access the Git hash inside the binary itself?

**Michael Matloob:** Yeah, it's in the binary. I don't know what the API is...

**Mat Ryer:** Yeah. But there's some - either method, or...

**Michael Matloob:** Yeah.

**Daniel Martí:** It's honestly a bit confusing, because before there was an API to get the module information of yourself, like of your own running binary, but the new API they've added - you can give it a binary path, so you can use it with any binary, without having to shell out to go version -m, blah-blah-blah. It's essentially the same feature.

**Michael Matloob:** Oh, so the buildinfo includes that, the hash. There we go, okay.

**Daniel Martí:** \[00:16:03.11\] And I think the vcs stamping is also a bit confusing to end users, because you tell them "Go 1.18 now stamps vcs buildinfo", but they might say "If I go install a Go main package that I run Go version -m with Go 1.17, \[unintelligible 00:16:14.22\] module version, right?" But where that doesn't work is if instead of doing a global Git install via a module path, if you Git clone and then go build or go install locally from that Git clone, Go doesn't know what module version that is; it just has a Git clone. It's not resolving that module through the whole proxy system that tells it what version it is. In Go 1.17 it tells you version \[unintelligible 00:16:38.00\] has no idea. In Go 1.18 it will add some extra, separate metadata that will say "Hey, this was built from Git hash blah-blah-blah, date blah-blah-blah", and so on.

**Mat Ryer:** Oh, right. Okay. Daniel, your turn to pick one from the list. What else is cool coming in Go 1.18? By the way, do you say one eighteen, one dot one eight, one point eighteen...? How do you say it?

**Daniel Martí:** Now you're making me doubt myself about how I pronounce these things...

**Mat Ryer:** Yeah... You just have to forget -- just clear your mind and then just say it. See what happens.

**Daniel Martí:** One eighteen.

**Michael Matloob:** Yeah, I say one eighteen.

**Mat Ryer:** Yeah. Okay. That's good. It is kind of one eighteen; it's not a decimal number, is it? It's semver, so that second number is eighteen. I think we're right.

**Daniel Martí:** So does that mean that when we reach 1.20 we can go back to one point two?

**Mat Ryer:** I think for just that release. No, you can't, can you? No, because that's what I mean, it's not decimal. That's it, yeah. Yeah, we got there in the end.

**Daniel Martí:** So another feature... I mean, it's maybe a bit cheeky that I bring this up, because I worked on this... But gofmt without a space now formats files in parallel. So up until we had -- well, you have two tools, which is also confusing. You have gofmt without a space, and then you have go fmt.

**Mat Ryer:** Yeah, it's ironic that the gofmt tool can be called in different ways just by changing the formatting... Yeah.

**Daniel Martí:** Oh, God... The difference between the two tools - and I think it also confuses a bunch of users - is that without a space it takes files and directories, but it doesn't know what packages are... And with a space, it takes the package pattern. So you can give it \[unintelligible 00:18:15.04\] for example. And the one that works on packages has always been relatively well parallelized, because what it does is I believe it formats each package in parallel, or something like that, but the one that takes directories and files - it would just do one at a time. And now we've essentially removed the parallelism from the one with the space, and just made both tools use the same kind of parallelism, which is gofmt (without a space), when you give it a bunch of files to format, it's just gonna figure out how to format them as fast as possible.

**Mat Ryer:** That's cool. Does gofmt work only within the context of a file at a time then? Like, it doesn't need to know anything else about types, and things, because it's just doing formatting tasks?

**Daniel Martí:** Yeah, that's correct.

**Mat Ryer:** So it makes sense. You just do all that at the same time.

**Daniel Martí:** Yeah. Even though there's a few tricky bits about that, because initially, my naive implementation was just format each file as a separate goroutine as they come in... But some files are really, really tiny. Think like a \[unintelligible 00:19:14.23\] that only has like ten lines, with like a package documentation or something like that... And spawning a new goroutine, synchronizing with append, maybe allocating the new parser, the new printer, and stuff like that - it actually consumes quite a lot more CPU just because of the overhead of all those tiny files. So we ended up with something that's kind of like chunking groups of files in groups of similar sizes, so that they're big enough that actually doing that as parallel units it's fast.

**Mat Ryer:** Oh, that's really cool. That's a surprise. I would not have expected it to be doing that... But it's nice to know that that's measured and done properly. That's very cool. Have you used this then? Did you really notice this in practice, the speed improvements?

**Daniel Martí:** \[00:19:59.22\] I think it depends on what people do. I think many people use the tool that works on packages, and then they just format their packages... But I like using the one with directories. So I go to the root of my repository and I just tell it "format everything", including test files, including everything. And because I did that, it was really slow before. So now, depending on your machine, it's usually about 3-4 times as fast. So for me, for example formatting a large repo might go from like five seconds to two seconds, which is nice.

**Mat Ryer:** Hm... Matloob, do you format your code?

**Michael Matloob:** Yes. I mean, we all format our code...

**Mat Ryer:** It's not a trick question.

**Michael Matloob:** No, is there anyone who doesn't format their code?

**Mat Ryer:** Yeah, I don't know...

**Michael Matloob:** Because I wanna hear about it. It's like a problem we need to solve.

**Mat Ryer:** Oh, yeah... I don't think so, because you only have to do it a few times, and then when pull requests -- although they improved it in GitHub, where white space was understood better... But it certainly used to be that you'd get just pull requests that every line has changed, because some white space thing. And that got so annoying that it's a very high motivator, I think, to get people formatting... But I don't know, I assume everyone does format their code. Do you do it in the way Daniel described then, or do you do it like me, where just every time you save a file, it does just that file?

**Michael Matloob:** I don't think I've ever run either of the tools... Or I certainly haven't run either of the tools by hand in years; my editors are just set up to format files as I save them.

**Mat Ryer:** Oh, yeah. I thought you were saying that you just write it in perfect gofmt way the first time.

**Michael Matloob:** Oh, no, no, I don't.

**Mat Ryer:** Nailed it.

**Michael Matloob:** I write it in the wrong way and just let the formatter take care of it, like any good Go developer.

**Mat Ryer:** Yeah, exactly. To be honest, I'll deliberately make mistakes so that when I hit Save, I get a visual clue that is has formatted. Because if I write it and I get it right, and then I hit Save and nothing happens, I'm like, "The computer is no working." So I genuinely sometimes like to see the little shift into place of things as a clue that it's working...

**Michael Matloob:** Yeah, that's like a nice way to know that "Oh, the syntax is correct."1

**Mat Ryer:** Yeah, that's true.

**Michael Matloob:** You know it can parse.

**Mat Ryer:** Yeah, because if it errors, it doesn't complete it. So it actually is a feedback loop thing. There you go, a tip there for everyone.

**Daniel Martí:** I've actually done that with tests. If you write a ton of software and some tests, and you run the tests and everything is green, you often go "I don't believe that. Let me break one of the tests to see if I'm doing something really dumb right now."

**Mat Ryer:** Yeah, absolutely. In TDD you talk about that red-green testing for that reason; you have to see the test fail, so you know it's saying something useful; and then when you fix it -- that's true. If I write some code, even if I'm just running it, and I'm gonna run it myself and look at the results in the terminal, without even any tests, if that works the first time, I'm highly suspicious; really suspicious. So yeah, in a way, I'm not happy when it does.

Okay, we've also got the pacer redesign in the garbage collector. That's interesting... What's going on there then?

**Daniel Martí:** I brought this up because I think it's a very interesting topic... But I think we should also warn that none of us here are experts in this area. So we can talk about it at a high level, but I'm gonna stop there. If anybody wants to read more about it, we can mention the issue number and then they can go and read the whole doc. And I think that's very reasonable.

**Mat Ryer:** Yeah, fair enough. Good disclaimer.

**Daniel Martí:** To give a bit of an intro, the way I understood it - because again, I've just read this... The GC pacer - it's the part of the garbage collector that decides when a new collection should happen. It's sort of the thing that times when the GC should be doing its work. Because if it happens too often, then you're just burning too much CPU, you're wasting time; but if you run it too little, you might be holding on to too much memory, or you might be delaying some things happening in the runtime that you don't want to delay by very long.

It seems like the GC pacer was designed a while ago. For the purpose that it was designed, it was good, but over time it's accumulated a bunch of debt and a bunch of quirks... And they've sort of sat down and said "Okay, let's redesign it in a way that it does a lot better in these edge cases that we've found in production workloads, that the old one doesn't do very well in." And I think that's where I'm gonna leave it.

**Mat Ryer:** \[00:24:16.15\] Oh, it's very exciting. I'm really interested whenever there are these kind of really low-level -- because it's funny, when you dig into these little subsystems, they're just like other types of programs. They are just doing the same things that we're doing in our programs, but it's such an interesting domain... It always makes it more interesting. I love the fact that as programmers we get this for free; people are doing this work for us to make these improvements... I didn't even know about a pacer, to be honest. So it's very nice to know that that's happening. What do you think about that, Michael? Do you know anything about this?

**Michael Matloob:** No... I mean, I am not closely acquainted with it, but I think any runtime improvements are well-appreciated. Good work, team.

**Mat Ryer:** Yup. And there's another Michael who I think was the author of the redesign, is that right?

**Michael Matloob:** Yeah...

**Mat Ryer:** Do you know all the other Michaels on the Go team? Have you got together yet with all the rest of the Michaels?

**Michael Matloob:** There's a Michael --

**Mat Ryer:** Or it may just be a contributor, actually...

**Michael Matloob:** There's two... Are there more than two? Or they're three, I guess, including myself.

**Mat Ryer:** Okay.

**Michael Matloob:** I don't wanna be forgetting anyone, so if I forgot --

**Mat Ryer:** No, I think we should spend time on this. Don't forget anyone.

**Michael Matloob:** We should not spend time on this...

**Mat Ryer:** Mind you, you're just telling me a number; even if you forgot a Michael, they don't know which one -- they don't know that they've been forgotten. I think it's safe.

**Michael Matloob:** There you go. So everyone can assume that I included them in the list of Michaels.

**Mat Ryer:** Yeah. So calm down, Michaels; you were counted. All Michaels have been accounted for.

**Michael Matloob:** Yeah.

**Mat Ryer:** Excellent.

**Daniel Martí:** I was thinking, before we go on to the next topic, if anybody wants to read about this, the issue number is \#44167. And at the end of the issue, which is very short, there's a link to the full proposal design, which is very long... And you can read that carefully, and get the full picture.

**Mat Ryer:** Yeah. It looks very well written. And we'll post the link to all of these in the show notes, so you'll be able to go and actually look at the original issues. And honestly, notice that some of these issues aren't created by members of the Go team, or even popular contributors like Daniel, who've contributed massively. Sometimes these come from just people in the community that have a problem that they wanna solve, or something they care about. So do get stuck in, basically, because you never know, you might get some improvements made, and that'd be great for everyone.

**Break:** \[00:26:49.06\]

**Mat Ryer:** Does anyone have the M1 chip? Apple's M1.

**Michael Matloob:** I have it on my personal laptop.

**Mat Ryer:** Yeah, that accounts. It's fast, isn't it?

**Michael Matloob:** Oh yeah, it's great. I've been surprised with how fast it is.

**Mat Ryer:** Me too. I got a new MacBook Pro recently, and it's phenomenal, absolutely. But Go had support for the M1 chip for quite a while, didn't it? What does that look like? How do we support another chip? Could someone just briefly -- and I do mean briefly; we don't need to get into the weeds of it. But what do we have to do? Is it literally we have to add some kind of mapping file for all the instructions so a compiler knows what to compile them into, and it's different if it's a different chip? Because there's also the Rosetta 2 stuff, so that even if a binary on these new architectures hasn't been built for that architecture, this is a translation layer... And to be honest, they're still lighting fast, as far as I can see when I run programs like that. But there are some improvements coming, is that right?

**Daniel Martí:** I do seem to recall that when the M1 first came out, Go did already support ARM64, so the 64 version of the ARM architecture... But binaries build for Go targeting the architecture didn't work out of the box, for one reason because there wasn't a darwin/ARM64 port yet. So Go did support Mac, and it supported ARM64, but not together yet... So they needed to add some glue code to essentially make those two work together. And I think the other major work they had to do was the whole thing about signing binaries... Because I think the M1 was the first machine that required old binaries to be signed. So they had to teach the linker how to sign binaries locally, something like that.

**Mat Ryer:** Yeah, yeah. Oh, that's very cool. Well, I just noticed it started working.

**Michael Matloob:** There's also a lot of work that needs to be done when we're making releases; when Apple makes changes to their operating system, we often have to change the infrastructure we use to produce the Go distributions that people get... And that takes a lot of work. I kind of just wanna mention all the work that the Go release team has done to make our releases smooth... Because sometimes that goes -- it's not explicitly talked about as much.

**Daniel Martí:** So I imagine every time Apple says a new major version of macOS is coming, I imagine some people start sweating, thinking "Oh no, what is coming..." \[laughter\]

**Michael Matloob:** I mean, sometimes there's nothing, but sometimes \[unintelligible 00:30:59.05\] Was it Catalina that they introduced major \[unintelligible 00:31:03.20\] caused by problems.

**Mat Ryer:** Well, yeah, again, we do appreciate all that work. Newer x86-64 machines are also getting improvements, aren't they, Daniel?

**Daniel Martí:** Yeah, so that's a good segue, because going from, for example, ARM-based machines, there's a lot of versions; if you have an old phone, I believe that's gonna be like ARM version 6. But later phones are gonna be ARM version 8 or 9, which is 64 bits. And if compile a binary that's targeting the lowest-possible denominator, the older version, it's not gonna run as fast as it could on a newer device. So Go has had a flag called -- I think it's called Go ARM64, and you tell if what version of the architecture your target machine supports, and then if you swap a 6 for a 9, it might run 10% faster, depending on what kind of code you're running. And x86-64, i.e. AMD64 desktop CPUs - they don't suffer from as much of the same problem, because they haven't had as many versions, with as many changes in the last decade or two... But you have had some changes.

\[00:32:13.26\] And sort of marrying the same environment variable for ARM64, now we have Go AMD64, and it targets one of four versions. These are sort of standard versions between Intel and AMD, where roughly speaking I believe version 1 is like the common denominator; it's basically every single machine that's a valid AMD64. And then you've got version 2 for things that are starting in 2010 or so, version 3 staring in 2013-2014, and then version 4, which is I think AVX-512, which has mostly server computers or very new desktop computers.

So if for example you knew you were targeting a cloud machine and you know the cloud machine has all these new instructions, you can swap from the older version 1 to version 3 or 4, and maybe you're gonna save 5% or 10% CPU cost, depending on what kind of code you're running.

**Mat Ryer:** And presumably, if you choose a higher number and then the architecture is lower, then that's a problem.

**Daniel Martí:** I believe it's just gonna refuse to run. It's gonna say not supported.

**Mat Ryer:** Okay, cool. Yeah, it makes sense. There you go, that's good to know. Often I'm so abstracted from the physical hardware in certain environments, to where I would be able to make use of that... But there's certainly some cases where I could probably use that today. I appreciate you telling me about that one.

**Daniel Martí:** And even if you think "Well, my workload is not that special", I believe in the Go AMD64 version 3 there's an instruction that the runtime garbage collector can use to quickly scan memory for pointers or something like that, in a way that essentially batches the work and makes it a lot faster... So you might get the runtime GCs being like a few percent faster, even if you don't care about new CPUs.

**Mat Ryer:** Oh, so even if you're not gonna make use of it, maybe the Go tooling and runtime and bits and pieces do. Very interesting. I do wanna speak about one more subject before we get onto workspaces, if we can... And this is something I use a lot, and these are the templates in Go. So we've got text template and HTML template. These sometimes get criticized as being too rudimentary and to low-level, but it sort of has enough of what you need; as long as you mix in Go code, usually in functions that you make available to the templates, you can really do everything you need. But are we getting some new functionality in templates?

**Daniel Martí:** Yeah. So I added a couple here, which are pretty simple to understand, I think. They both revolve around control flow, or logic, if you wanna think of it that way. So one is about adding break and continuing. So it's the same feature that you have in regular Go loops, but for ranges within a template.

And the other one is that the and and or operators in boolean expressions now short-circuit in a template, like in Go. Which means that if you do a or b and \[unintelligible 00:35:06.25\] then b is not evaluated. Whereas right now it evaluates all the expressions and then works out the boolean expression.

**Mat Ryer:** Yeah. And the result on the expression itself is the same, isn't it? But if you're calling functions within that, then you can save those functions; they won't need to get called. So that short-circuiting sometimes is very important. That's very nice to know...

So the break and continue - I guess they are quite simple then. So continue is gonna loop back and -- actually, I'm not sure it is that simple... Because the template is kind of declarative, isn't it? What does a continue do then? What happens if there was, within the block, content after the continue? Is that skipped?

**Daniel Martí:** So you can think of templates as sort of scripts. I don't believe they let you run code forever... At least not that I can remember. But they do have a range statement, where you can say \[unintelligible 00:36:01.15\] and then within that body you can set variables, or you can template them.

\[00:36:09.10\] Like, if you just type something without using the brackets, that's gonna be output as part of the template. If you have two blocks of code within a range, and then between you say continue, then the second block is gonna be omitted, and then you're gonna go back to the top of the range.

**Mat Ryer:** Okay. So that is how it works in Go, so that should feel quite natural. But that is quite unusual for templating. I don't think I've seen that before.

**Daniel Martí:** It is a bit unusual, yes.

**Mat Ryer:** Very cool. Well, we have somebody here, of course, Michael Matloob, who has done a fair bit of work recently on workspaces. This is coming in Go 1.18. Michael, could you just tell us briefly what are Go workspaces? What problem do they solve?

**Michael Matloob:** So just like at a simple level, the Go command in the module mode allows you to have a single main module that you're working on. That's the module that your current directory is in, and all the files in the module, all the packages in the module are the packages that Go builds by default. And if you have any other code on disk, previously you would have to add replaces, or other ways of getting it in which are kind of annoying if you wanna make changes cross-modules. It was hard to work across two modules at the same time, basically.

Now, workspaces - you have more than one main module. Those are modules where you are making edits and go builds from, rather than getting it from a specific version. So workspaces allow you to say "These are the modules on disk that I'm working on", and those are the base that the minimal version selection uses when computing its dependency graph.

We think this is gonna be useful because we've gotten a lot of feedback from people who work across multiple modules. In fact, that was one of the number one complaints we saw in the Go user survey, people working with modules - they had problems when working on multiple modules; they found it cumbersome. So we hope that multi-module workspaces make that workflow a lot easier for them.

**Mat Ryer:** Yeah, this is definitely something I've encountered. Do you think people were overusing modules? Do you think that we were doing something wrong? It felt like that, because we were kind of fighting with the tools a little bit...

**Michael Matloob:** What do you mean overusing modules?

**Mat Ryer:** Well, I mean like sometimes in a project you have multiple packages. Sometimes people will -- each one of those will be a module, instead of just a package inside this bigger module. Things like that.

**Michael Matloob:** Yeah, I feel like one thing that we learned after some experimentation with modules, after some time using vgo and then modules in the Go command, we learned that multi-module repositories should be rare. They have a lot of surprises when you're working with them. So now our general recommendation is for people to usually have like one module per repository, unless there's a specific, very rare set of use cases where they wanted to have a sub-module in their module. So in that sense, yeah, I guess we were overusing modules, because we were learning how to use modules. Now those modules exist, and we kind of have to work with them.

**Mat Ryer:** Yeah. I think for packages and things if you're releasing a library that people are gonna use, I think that's kind of great advice. Definitely a time I've seen where multiple modules exist is if you have a monorepo... The way that you would do it at the moment - I use Visual Studio code - you basically open the subfolder just as the root, and that essentially becomes the context of that module, and that's a way to get around it. If you have multiple folders and they have modules in different ones, workspaces I think is gonna enable that now. So you'll be able to operate, right?

**Michael Matloob:** \[00:40:18.04\] Yeah. I mean, one of the driving forces behind us starting to work on modules was the user experience in not just Visual Studio Code, but any editors that user Gopls, which kind of powers the Visual Studio Code Go experience. The team was thinking of different ways of representing multiple modules and providing that information to the Go command... But it had to introduce a new concept that didn't exist in the Go command. The Go command had no concept of people working in multiple modules at the same time. It just had replace directives or requirements.

So we decided the best thing to do is to make this a first-class feature of the Go command, so not only could Gopls use it, but users who introduce modules can then open up command line and the Go command understands that they're working in the same workspace, in the same set of modules.

**Mat Ryer:** So how does it actually work in practice then? Do you have to set up a workspace? Is this a new concept of a thing you create?

**Michael Matloob:** Yes, so we have go.mod files, and now we have go.work files. So you create a go.work file, the syntax is very similar to go.mod; we wanted it to be easy for people to pick up... And the go.work has one new directive as the use directive. So you tell it which directories you want it to use, and all the modules in those directories, if you're under the go.work files \[unintelligible 00:41:48.29\] are in your workspace. So you make your go.work file, and CD under it, and now you're using all those modules in any build that you do, or go list, or any such command like that.

**Mat Ryer:** And it's gonna be aware of those other modules, and you're not gonna be fighting the tools anymore.

**Michael Matloob:** Yup.

**Mat Ryer:** And can you do replaces as well in there?

**Michael Matloob:** You can... We don't think people should need to add replaces, except in very specific circumstances. We actually added replace because if you have multiple modules in your workspaces, they might have conflicting replaces... So replacing the go.work file can override the replaces that are fighting. But if you wanted to use a specific module, then usually the right thing to do is to just use that module in your go.work file.

**Mat Ryer:** Yeah. So I feel like lots of tools probably got touched by adding this kind of support. Was it a difficult one to get in?

**Michael Matloob:** Most of the work was in the Go command itself. There's definitely an amount of complexity in the Go command, because their module-loading code - it does more than you'd think. But once we got it to work in the Go command, one of the nice things -- most of our tools call into the Go command. So as long as they're making a call into the Go packages or the Go command, they kind of get all that for free, as long as the go.work file exists on disk.

We've had to make on the VS Code Go and Gopls teams -- they've made changes to understand go.work files and pass them into the Go command, but... You know, once you pass that in, all the hard work is done by the Go command itself.

**Mat Ryer:** This is a really nice thing to have. In the way that I work, this is gonna change a lot. There was an experiment for a while where you could try this out with an environment variable, wasn't there?

**Michael Matloob:** Yeah. I filed a proposal for this, and I made it available, and we had a link for people to easily download a development version that included these changes using the gotip command, and so people could try it in and give feedback. We got some feedback on it, which was super-helpful. And we got a lot of feedback on the issue too, which was very helpful in developing the proposal. Hopefully, we've addressed most of the important issues people have. For anything else, there's 1.19.

**Mat Ryer:** \[00:44:27.25\] Absolutely. Well, honestly, I think these kinds of things make such a difference, so we're so pleased. And honestly, I feel like there's a lot more to talk about with workspaces and modules. Maybe, Michael, you could come back one day and we'll do like a modules and workspaces special.

**Michael Matloob:** Oh, sure. I'd love to.

**Mat Ryer:** Okay, cool. Well, we will hold you to that. I do consider this to be legally binding.

**Michael Matloob:** Like the pinky promises?

**Mat Ryer:** Pinky promises are, of all the types of promise, I think, they're up there with the most important. You've got local laws, you've got national laws, and then all the way at the top, after the Supreme Court, you've got the little pinky promise there.

**Michael Matloob:** Pinky promise at the top. Got it.

**Mat Ryer:** Yeah, I think that's the legal structure of the pinky promise. Well, here's another pinky promise - I promise you're about to hear some unpopular opinions.

**Jingle:** \[00:45:25.28\] to \[00:45:42.07\]

**Mat Ryer:** Okay, who's gonna go first with -- I don't know why I'm speaking in this spooky voice. Who wants to say the first unpopular opinion?

**Daniel Martí:** Maybe I can start with mine... Mine is that I think code generation should be avoided whenever possible.

**Mat Ryer:** \[laughs\]

**Daniel Martí:** I think the main reason for that is because it adds developer friction, it often increases build size and build time, and oftentimes people overestimate how slow reflection is. If you use reflection well, the cost is actually very reasonable. And it's not like you're building your whole program around reflection. You're using it in very careful ways, in small places.

**Mat Ryer:** What do you think of that, Michael?

**Michael Matloob:** I guess I don't have a very strong opinion about this either way...

**Mat Ryer:** I do.

**Michael Matloob:** Yes? Let's hear your opinion. Is it the popular or unpopular variety?

**Mat Ryer:** The thing is, I love code gen, because it's like you're doing loads and loads of typing. You just do a bit of typing, and you run a command, and it's just like you've done loads of typing. So that's the thing... Reflection is hard, so it's quite satisfying when you get it right, but editing a template and then running a thing and having 1,200 methods update... You've fixed 1,200 bugs at the same time... \[laughs\] What do you think, of that, Michael?

**Michael Matloob:** I will say this - I find that working with code generation when using the Go command is not very fun. I don't like using go generate, I don't think it has a good user experience... It happens separate from the build, so it's really easy to have stale files.

You know, I feel like this ship has sailed, but if you're gonna do a lot of code generation, Basil is very nice for that, but it's not very heavily used in the Go community. Inside of Google we use mostly generated \[unintelligible 00:47:40.12\]... And it's seamless, because the build just generates some automatically and you don't need to think about them. The tools that take care of all of the annoyances that are caused by code generation. But our tools don't really do that, so there's like a lot of friction when using generated code outside of those build systems. So I get pretty annoyed. If I have to run a make before my go build, I feel like there's a problem. That's kind of answering a different question, but you know...

**Mat Ryer:** \[00:48:13.22\] I think generics -- ugh, I've said it. Yeah, I'll get booted out of here... But I think this rule obviously is very weakly enforced. So much for pinky promises, right? After I was \[unintelligible 00:48:24.21\] and giving them all that legal weight, look at it now. It's been reduced to a silly, childish thing. How sad...

Well, what I was saying is, I think generics are gonna get rid of a lot of cases for code generation... But reflection is pretty difficult to write, because there's no kind of feedback -- like, you need unit tests really for your feedback to... I mean, you don't really need that; let me rephrase that. I think reflection is quite hard to get right, because it's that sort of meta-programming. But then code generation templates are also meta-programming, and they are often quite difficult to look after and maintain. So maybe you've got some legs.

I'd be interested to test this one on Twitter @GoTimeFM. We will tweet out a poll and find out if this really is unpopular. It's a candidate for one though, it's a good one. Can you beat him, Michael, is the question?

**Michael Matloob:** My unpopular opinion is we should bring back the try proposal.

**Mat Ryer:** Oh, really?

**Michael Matloob:** And this is where I'm going to not mention other features by name, but I'll say - of all the features that people have proposed as language changes to the Go language, I feel like none have been as potentially impactful as the try proposal was... And I was sad to see it pulled back. Because I think error handling properly is really important to writing good Go code, and I think the language ergonomics should encourage people to handle their errors properly. And so often people will just -- "if err!= nil {return err;}" and just not think about what they're doing with their errors... And I feel like try gave an opportunity to think a little bit harder about wrapping errors properly, and what to do with errors, and kind of nudged people to do the right thing a little bit more.

Certainly, the proposal as it was needed more work before it should go in, but I really do think we should bring back the try proposal, and keep working on it and make it better. I don't know when we'll have the bandwidth for another big language change like that, but...

**Daniel Martí:** I have to agree with Michael. I think the reason the try proposal got so much bad feedback is because Go is so opinionated, a lot of its users have gone into this mentality of Go doesn't need features, so sometimes the users can have this knee-jerk reaction of somebody proposes a change to the language and they go "Well, but that wouldn't be Go, right?" And I agree with Michael in the case of try, I think it would have been a very interesting change, and I hope it comes back.

**Mat Ryer:** So just refresh our memories. What did try do?

**Michael Matloob:** Yeah, so basically it gave you a mechanism to try with a function that returned an error as its final argument. And then it would allow you to handle that error elsewhere. So you could add -- I think in one of the variations of the proposal there was like a handle for handling a number of tries in a function. I think in another one, if I'm remembering correctly, recover was an option for handling the error... But you could kind of have the errors handled in a single place. Basically, people realize that error handling is awkward in Go, and the awkwardness I think causes people to take shortcuts.

\[00:52:10.20\] So addressing that awkwardness and nudging people towards doing the right thing, especially if try and handle came with helpers... And now we do have functions like \[unintelligible 00:52:18.18\] that help people with wrapping errors. Those together would provide a better model for handling errors and for people to think about handling errors.

**Mat Ryer:** Well, fascinating stuff there... Yeah, I'll tell you what - it's interesting, because I think... See, when I handle errors - and I don't know if I do this different to other people. I may be unusual in this... But when I return the error, I add quite a bit of context there. So each one is different; I'll add and I'll include the thing it's trying to do in that wrapped error. So it's not that I'll have a wrap where I just put the method name into the error, and it's the same every time. So if it was the same every time, having it pulled out and deal with it in one place is quite nice.

But yeah, the other thing is -- I mean, this doesn't hurt that, but I do like that error handling is at least explicit. The try proposal didn't really interfere with that, but I like the fact that in Go we are kind of handling errors, even if you are just returning it. It's like, as long as you're not forgetting about it, it's nice that they are in the forefront of our minds when we're coding.

I literally was writing something today, and I literally had to write if err!= nil, and then I had to stop and think "Oh, what do I do if this errors like that?" That actually is not a trivial problem in this particular case. \[unintelligible 00:53:49.25\] able to just return an error. I had to handle that... So I quite like that it's in the forefront, at least of the language, but... Yeah, interesting. We'll definitely find out what other people think on Twitter when we post that one. It's gonna be very interesting, I think.

**Michael Matloob:** Yeah. I'm interested in seeing how unpopular that is. Do you think that could go for the most unpopular opinion expressed in one of these segments?

**Mat Ryer:** It could. Or it might surprise us and maybe everyone's like "Yeah, we loved that." Honestly, I think that point of like, we're now so familiar with Go, we have to be careful we don't just become curmudgeons about it and resist any change... Because it should change, it should evolve, it should get better, like all software. Yeah, I'm kind of interested to hear what people think about it.

**Daniel Martí:** I think Michael also needs to think that if this opinion is gonna be really unpopular, then try is not gonna come back... So you want it to be very popular.

**Michael Matloob:** I mean, I would like for it to be popular...

**Mat Ryer:** Yeah. That's not really in the spirit of the segment, but... It's fine.

**Michael Matloob:** I think it is unpopular, but...

**Mat Ryer:** Well, we'll find out.

**Michael Matloob:** ...if it's an opinion that I hold, I would like it to be less unpopular, even though it is unpopular.

**Mat Ryer:** \[00:55:07.04\] Sometimes, when the case is made, in fact it's hard to get unpopular opinions. This is what we've found. Because people make the case so eloquently, like you did. And then people on Twitter... You know, they're easily swayed. They'll believe that now.

**Michael Matloob:** I mean, if I'm gonna make reference to the g-word again, there was a time in the community where you brought up the g-word, and people are like "No! Not in my Go!" And people were right to be worried about those things. But I think the case was made, people worked really hard to present the case why it would actually be an improvement and really convince people; convince people who use Go that it was actually gonna be a net positive. I think the sentiment now towards the g-word is a lot more positive than it was 5-6 years ago.

**Mat Ryer:** Yeah. That is definitely true. And then the counter is we don't want it to be too easy to change things because of the backwards-compatibility promise. I do quite like the fact that it's quite a rigorous process before we really get any big changes like this. I think there's value in that, too. So that really only good stuff is gonna get through, hopefully.

**Michael Matloob:** Every new thing we add is something we have to maintain forever. We do have to be careful about adding new things, for sure.

**Mat Ryer:** Yeah, because forever is ages, ain't it?

**Michael Matloob:** It's a pretty long time.

**Mat Ryer:** Yeah.

**Daniel Martí:** I also remember somebody recently criticizing Go - I think it was on Hacker News - saying something along the lines of "Go is a popular language that has ignored all the programming language development in the past 15 years." But that's kind of why it works, right? Because it only builds on top of what has been well-tested. And I think the only major exception there is modules, which goes against everything else that has been done in package management.

**Mat Ryer:** Yeah, that's quite interesting. It is a very stable thing. And yeah, that other thing of having lots of different ways to do the same thing... In JavaScript, you almost have to learn a particular flavor of JavaScript now in order to contribute to a project. Someone using all the latest language features, like the little arrows for functions and things like this... You sort of have to learn all that.

**Michael Matloob:** Yeah... I mean, I find that sad from the other side. JavaScript and all the other parts of the web ecosystem have become so big that it is impossible for anyone to make a new JavaScript interpreter engine without the resources of a huge multi-national corporation. That sucks.

**Mat Ryer:** Well, I'm afraid that's all the time we have, on that somber note... You can forget about your dreams of writing your own JavaScript engine. It's not gonna happen... \[laughter\] So just wake up.

**Michael Matloob:** Sorry...

**Mat Ryer:** No, it's a harsh wake-up call, Michael, but we needed it. Thank you very much. \[laughter\] Thank you so much to our guests today... Michael Matloob joined us, as did Daniel Martí. It was a pleasure, as always. Thank you very much. Thanks for joining us on Go Time.

**Daniel Martí:** Thanks!

**Mat Ryer:** We'll see you next time.
