**Mat Ryer:** Hello, and welcome to Go Time. I'm your friendly neighborhood, Mat Ryer. Today we're talking about the files and folders of your Go projects, big and small. Does the Holy Grail exist of this perfect single structure to rule them all? Or are we doomed to just be figuring this out for the rest of our miserable lives?

Joining me today to figure this out, it's my co-host, Kris Brandow. Hey, Kris.

**Kris Brandow:** Hello. How are you doing today, Mat?

**Mat Ryer:** Oh, very good, thank you. I'm excited to learn about files and folders, actually. And I suspect there is a lot to learn, even though it's one of those things we kind of take for granted, don't we?

**Kris Brandow:** Yeah, for sure.

**Mat Ryer:** We've got a couple of experts in with us today to tell us about files and folders in your Go projects... Ben Johnson's here, staff engineer at Fly.io. Fly.io, Ben?

**Ben Johnson:** Yeah, you nailed it there. Thank you. Thanks for having me.

**Mat Ryer:** Welcome, yeah. You're the author of BoltDB, Livestream, and you're working on a distributed SQLite implementation.

**Ben Johnson:** Yeah, it's called LiteFS.

**Mat Ryer:** Nice.

**Ben Johnson:** Trying to get at all the SQLite everywhere.

**Mat Ryer:** Yeah. SQLite all the things. And do you use files and folders? I mean, SQLite famously does.

**Ben Johnson:** No.

**Mat Ryer:** No. \[laughter\]

**Ben Johnson:** Um, we do. Yeah, just... A single-file database is great.

**Mat Ryer:** Yeah, just one file. Interesting. What is it though? What is the file? We're going to find out, don't worry. Chris James is also here... Chris, last time you were on Go Time you said you were an unemployed bum. But now that's not true anymore, is it?

**Chris James:** No, I'm an employed bum now. I'm working at Springer Nature, who are a scientific publisher... And yeah, I'm excited to be here to talk about files and folders.

**Mat Ryer:** Nice. Springer Nature. Is it a sort of Jerry Springer-based kind of science debate show?

**Chris James:** Yes, just that. Yeah.

**Mat Ryer:** Yeah. Scientists just come out and they say controversial things, and then people are fighting, and then they bring up their brother-in-law...

**Chris James:** Yes, somewhat that. Yeah.

**Mat Ryer:** Alright, cool. So let's just take a step back a minute... But first of all, this question- probably, of all the questions I get, this is probably the one I get the most, which is "How do I lay out my project?" And if you think back to Ruby on Rails days, Ruby on Rails did something very interesting where they basically didn't give you a choice in the file structure and the folders. Everything was by convention. So if you wanted to put -- it had a kind of model view controller pattern. Models were all in a folder called Models, views were in Views, controllers were in Controllers... And actually, it had meaning; the folder structure had meaning. Then there's other tech and other languages where that's not the case at all, and you really do all your linking, and you're sort of stitching it together somewhat manually, and you can kind of do anything. Go is somewhere in the middle, I think, of those two. But if we take a big old step back, do we actually know what files and folders are? Like, what literally are they on the computer?

**Ben Johnson:** No, we don't. I don't think any of us do. I mean, it's a great convention that we've built, for sure. I mean, Chris has mentioned this before, but yeah, just like, it's something we just don't think about day to day.

**Mat Ryer:** Yeah, they're just there. But when you make a folder, what happens? Does a folder exist somewhere? Is it just in a table of contents? How does it literally work?

**Ben Johnson:** Yeah, I mean, basically, we have file systems, and metadata, and they're all pointing to inodes, and there's all kinds of stuff in there that it's all hidden away, but at the end of the day, they just look these simple constructs for us. It's great.

**Mat Ryer:** Yeah. It sounds like you don't know as well, Ben. \[laughs\]

**Ben Johnson:** Yeah, that was all just made up on the spot.

**Mat Ryer:** No, but inodes I've heard of. I've touched on these concepts as well in various projects; you tend to become an expert in them when you need to. But when you're doing SQLite work, you mentioned that it's just a single file. So do you have to sort of know -- are you seeking across the file? Do you keep track of distances and offsets and things that in the file?

**Ben Johnson:** Yeah, so a lot of file systems are page-based. So SQLite kind of builds on top of that file system pages. So a lot of times they're 4k pages, and they're evenly distributed through a database, and then internally they're kind of structured -- or logically they're structured as a B-tree. So there's a lot of jumping around to these fixed blocks. BoltDB was the same way, 4k blocks... And with the SQLite stuff - a lot of the stuff I actually do a Fuse implementation. So it's a file system in the user space. So we actually intercept calls to SQLite, so we can extract out where the transactions work out, or start and end. So there's a lot of jumping around. And there's a lot of little concepts and file systems you really don't learn until it bites you... And you're like "Oh, that's really good to know that this file name can point to the same inode across two different files..." And really little things, like you can delete a file, but you still have a handle to it, because you're just deleting the name of the pointer to it... And that differs by file systems, and... Good stuff, yeah.

**Mat Ryer:** Yeah, same. I've done projects before where using inodes -- symlinks and hard links, digging into all that stuff... It turns out there is quite a lot going on, but it is nice, I guess, we just don't have to worry about it. Go gives us standard library packages for dealing with the file system.

\[05:56\] Now, how does that work? Since you mentioned that it's different on every kind of machine. Mac files and directories and things work differently on a Mac to Windows... Does Go literally just have an implementation per supported architecture?

**Ben Johnson:** Yeah, it tries to abstract away a lot of that stuff... And I know we haven't gotten to Unpopular Opinions yet, but Rust actually does some better things around those different implementations, whereas in Go you kind of have to know some of those tricks, where like if you're going to remove a file on Unix, that'll work great even if you have it open. But if you're doing it on Windows and you still have the file handle open, a lot of times it will error out. So it's one of those things you just kind of learn when you actually dive in and start running stuff in production.

**Mat Ryer:** Chris James, have you heard of the term inode before?

**Chris James:** No, no. Could you please explain to me what an inode is? It sounds like an Apple thing, but I assume it isn't.

**Mat Ryer:** Yeah, it does. It sounds like a new project. What would it be though? A node? It's too generic.

**Chris James:** Maybe when they do teleportation...

**Mat Ryer:** Yeah.

**Chris James:** It sounds like that kind of thing.

**Mat Ryer:** Yeah, yeah. They probably already reserved the name, to be honest, in anticipation of that. I look forward to it. What do you keep in your files, Chris?

**Chris James:** Computer code, mainly. My poems, song lyrics, my diary, meeting notes...

**Ben Johnson:** And novels?

**Chris James:** No... Yeah, lots of stuff, really. I mean, I think for me, as Ben mentioned, I think files are such a wonderful abstraction in general that most of the time you really don't have to care about the details. Like, we should all dream to make an abstraction that's so kind of ubiquitous and easy to understand. I remember when I first used the computer, when I was 12, or whatever, and the idea of files and folders clicked for me instantly. It was like "Oh yeah, this is obvious. I'm just playing with files of text here and there, and it will make sense." So I think whoever came up with it did a good job. I assume it was a number of people really, but yeah.

**Mat Ryer:** Yeah. It's funny - do you use the physical paper files in your real life still?

**Chris James:** Not so much. I think they're mainly just stuffed away in a drawer somewhere, and certainly not as organized as my computer files, I'd say.

**Mat Ryer:** Nice. So files and folders are meaningful in Go. I think the obvious thing is, you know, our Go files are .go; they have the .go extension. There's also, of course, \_test.go files, and they're different, to normal Go files; that's where test code goes. And when you build, that stuff's ignored, and when you run your test, that stuff is included. Are there any other rules that we need to be aware of for people?

**Kris Brandow:** There's also the \_operatingsystem or \_architecture; if you put that at the end of a file, just like \_test, it'll only compile or only be included for that operating system or architecture. So don't name things \_windows unless you only want them to be imported for Windows.

**Mat Ryer:** Yeah, that's interesting. How do you feel about that? Because you can do it with build tags as well, can't you?

**Kris Brandow:** Yeah, I heard an argument once that there's a good reason for having that instead of build tags. I don't remember off the top of my head. It can certainly keep your files a little bit cleaner overall, but then when you're actually looking at a file, you can kind of forget that, "Oh, this one's only for Windows, or this one's only for macOS."

**Mat Ryer:** Yeah, it can be awkward if you edit the wrong file, and then it sort of doesn't take any effect, because it's not for that architecture. So it's worth definitely knowing about that one. Another one, of course - a folder is a package in Go. So the Go files inside a folder - they are grouped in a meaningful way in Go.

**Ben Johnson:** Yeah. The one exception there is the \_test package, which I think is very underutilized in the community. That's one of my favorite features, just kind of being able to separate your test code out. Actually, to explain what it is - so if you have files, at the top you have a package, yadda-yadda-yadda, and you can also have just files in there, and you can have those test files be in a separate package, but in the same folder. So at the top it'll say package yadda-yadda-yadda \_test. And I think it's a great way you can kind of use your package code as an external package. So you're still treating it as you're just like a user of that code. So you only use exported stuff, you have to prefix everything with the package names... I think it's a great way to kind of abstract away your tests from your actual code.

**Mat Ryer:** \[10:20\] Yeah. So they're still inside the same folder, but they're allowed a different package. And is that because the \_test code is kind of explicitly handled differently? So is that a side effect, or was that a design decision? Do you know?

**Ben Johnson:** No, I believe it was a design decision. I mean, that's the only name you can actually use as a separate package inside of a single directory.

**Chris James:** I definitely try to do that by default when I'm writing tests, and the reason for that is - yeah, it's the kind of really healthy constraints that Ben was talking about. And I've definitely been through an experience where we started projects and I just think we weren't aware of the \_test thing, so we wrote a bunch of tests and things, and we're like "Oh, this is a cool thing"", so we'd add the \_test, and then we realized how bad the design of our package was, because our tests were coupled to so much stuff that just didn't need to be in. So that's why it's really good for me, because tests act as documentation for your code, so therefore you really want to consume the same constraints that someone imports in your package to use your code for real - make sure they have the same constraints as well.

I also think another thing that's quite underutilized is the internal folder, which is another thing I only really learned about maybe two years ago, and now I'm struggling to think how to explain it... But basically, what it means is if you have a package which has an internal folder within it, only the parents of that internal package can import things from the internal thing. I feel like I really butchered explaining that, but I hope it makes sense... \[laughs\]

**Ben Johnson:** That's close enough.

**Chris James:** What that means is that it gives you another kind of way of sharing code without having to share it with the entire codebase. So without this, you can make shareable code, but it means anything can import it, unless you have circular dependencies. So internal gives you another way of just having shared code, but just not with everything, which is a really powerful technique.

**Kris Brandow:** I do feel that internal is heavily overused inside closed source codebases, which I don't -- people, instead of fixing whatever internal problems they're having where people are importing code they're not supposed to, people are like "I will just make it very painful for you to import this." And it's like, you should probably solve those internal problems, instead of trying to force your codebase into some sort of way of functioning.

I do think it's useful for external. Like, if you're a library maintainer, I think it could be very useful. But still, it's of limited use most of the time. But I think if you're in a spot where you're for some reason, political or otherwise, you can't get people to stop importing your code, it's a very useful tool... But I shudder every time I see someone using it -- like, that's the first thing they do it. They make a new repo, and they're like "Oh, I'll put everything under Internal", and I'm like "No, please stop. Please halt. Don't do that."

**Ben Johnson:** Yeah. And then you have to make a PR to pull out a piece of code, and then you also have to rename all the imports that that code has in the codebase just to really use that piece of code. So I agree with you. In closed source, I don't think it makes a lot of sense.

**Mat Ryer:** But is it not a good signal though that this is kind of logically contained in this world, and isn't expected to be used outside of it? Because there is something about the blast radius of these internal packages; if you change them... You know, hopefully, if you've only used them in packages alongside that folder, then you're quite safe; it's at least in one place. Whereas if it has been imported elsewhere, you might be breaking things without realizing it. So in a way, it's a nice signal. But Chris, James, do you do that by default then? Do you use internal by default?

**Chris James:** \[13:52\] No... So I'm trying to recall an example where we used it... I think we had some kind of HTTP handlers stuff, code that was to do with HTTP handlers, that we reused around a bunch of HTTP handlers, but it was totally inappropriate to import elsewhere in the project. Now, you could argue, "Well just make it private to the package", but there's definitely a reason that we had -- we wanted to share it with some multiple bits, but only within a certain part of our system.

I agree that like just sticking internal at the start of your project - I think anything by default is a bit dangerous, because you're kind of turning off your brain and just going "Well, I'll just do this by default." I think there are very few things in this world where you should do things by default. I think, sadly, as engineers, we have to engage our brains sometimes.

**Kris Brandow:** I also think on a level that encourages people -- it encourages package sprawl in a way that I tend to dislike. So I think people are like "Oh, well, I don't want people to use this package externally", and it's like "Well, does that need to be its own separate package? Or could you just have one larger package instead of splitting things out?" So I think there is a slight tendency among some Go engineers to just like "Oh, I'm gonna have a bunch of little tiny packages." And it's like, this isn't Java; your package is not -- like, you don't need to make them small, you just need to make them appropriately scoped. And what that means is different for each person. But I tend to see that if you're using internal a lot, you might have misscoped your packages a little bit, and that's something that you might want to address and fix.

**Ben Johnson:** One thing I actually like internal for, that I haven't seen a whole lot... I like using it for almost like utility functions for packages that I use. Especially like standard library packages. So I might have like a testing util package inside internal, where I don't necessarily want anyone else to use it, and all my test code might use these helper functions, that kind of thing. I don't use it extensively, but I do find those kinds of things are helpful to kind of push it out somewhere that's not just dumped in a package in my code. It kind of cleans up the rest of the code, if you like... But that's kind of more of a side suggestion.

**Mat Ryer:** But Kris, you said something interesting too, which was if you have lots of these folders, that could be a sign that you're sort of overdoing it. So that tells me then that the files and folders that we end up with in a Go project are or should be influenced by the design of our system. And that might sound an obvious thing, but I think -- I don't know if that's always the case for different languages. But there's something meaningful, isn't there, about what folders we choose, and therefore what packages we're creating?

**Kris Brandow:** Yeah, yeah. I think Go is on the spectrum of - you can kind of put files wherever, and you can write some shell scripts to make it figure out too that you're using Rails, and everything is very prescriptive... I think Go tends to skew more towards the latter side of that. I remember in PHP you'd have class autoloading, where you'd put things in a special place and it automatically loaded them from that place, or things that. I think with Go you have much more flexibility there to just kind of bunch everything together, and be kind of fine in the beginning stages... And I think that's generally what people should embrace along that -- if you're starting a new project, just start with one package, and kind of grow it from there, and then figure out what the boundaries of the packages you need are after you've already kind of written them, or after you've developed them. I think a lot of people will -- and the way that Rails is set up, they think "Oh, I've gotta split off my HTTP handlers over here, and my database access over here, and this other thing over here", and it's like, well, you don't have to start with that. If that's where your project leads, and that makes sense, this division, then sure, go do that. But there's other styles that your project might fall into, that maybe you want all those things together instead, and you want to do more domain-specific packages, where you have all of those - the HTTP handlers, the database access, all of that grouped into a package, and you have multiple packages. There's many different options you have, and that is because of the flexibility that Go has, which is like "Oh, your packages mean whatever you like them to mean. Please define them for yourself."

**Mat Ryer:** \[17:54\] Yeah. And aside from internal, interestingly, subfolders aren't subpackages in any way. This is another thing that I've seen in other languages, where you have a subfolder, and that's to do with the scoping. It's a bit like how the internal thing limits what it's able to then import it. But we have to include the full path, of course, but there's no special relationship between a parent and the child package, is there?

**Ben Johnson:** No. Just relationship on the file system.

**Mat Ryer:** Yeah. So that's interesting, I think.

**Ben Johnson:** Yeah. It's mostly just communicating... Like, you might be grouping things. In standard libraries \[unintelligible 00:18:26.29\] the encoding package, or the archive package; there's not a strict relationship. It just helps people to understand the groups.

**Mat Ryer:** Yeah. In a way there's subpackages, you could say, but there's nothing enforced by the tools.

**Ben Johnson:** Yeah. That's the term I usually use, subpackage. It's easier than just -- I don't know what else you'd call them.

**Kris Brandow:** Yeah, they're semantic things, not syntactic things. It's just like "Oh, this is a subpackage because we've decided it's a subpackage, not because of where it sits, necessarily."

**Ben Johnson:** One thing I'll touch on with what Kris was saying - you know, there's some flexibility in Go, but I think a lot of package structure is really derived by the restriction of no circular dependencies... Like, a lot of languages, like Ruby or Java, you can kind of go willy-nilly, and put your packages anywhere, or modules, whatever want to call them... And at the end of the day, it's kind of bikeshedding; it doesn't really matter. There's nice groupings, everyone has their own taste, but in Go there's actually consequences to how you structure your packages, and because of that circular dependency issue.

**Chris James:** I think that's a really wonderful thing about Go. I reflect on Go a lot, and it kind of subtly enforces a lot of sort of design lessons learnt over the past 50 years... And people often don't appreciate that. Because for a long time, I've been taught, you know, \[unintelligible 00:19:47.22\] Your handler can depend on your domain, but your domain shouldn't be coupled to HTTP, right? And that's just something has been drilled into me since the start. But Go - I think it's the first language I've used where it's actually properly enforced there; it just won't let you do it.

A lot of people get frustrated with that circular dependency error, and you see lots of people asking questions about it, but to me it's just a wonderful signal that there's something fishy in your design; you need to think about this and go apply that rule. - dependencies should only go in one direction.

**Mat Ryer:** Yeah. So tell us a little bit about that problem that happens with this. You have these two packages, and they are interacting in some way; maybe you've got some interfaces so that they interact in this sort of nice, decoupled way... But sometimes you find that one of them does then need to depend on the other, and vice versa. And so if you have that, there's two packages and they both kind of need to depend on each other, how do you solve that?

**Ben Johnson:** Sure, yeah. I mean, there's different takes on this in the community. I think that one common thing when you see two packages that need to depend on each other, people will kind of \[unintelligible 00:20:54.20\] a third package, to put the other thing in there, and then both those packages can depend on that third package. And then that kind of explodes over time, you keep doing that over and over again, and that's when you get a ton of packages.

So for me, the way I structure things is I try to start from what I call the application domain, just kind of the things in your application that are -- they don't depend on a technology, they're not related to your database, or your web handlers, or anything like that. It's just like your user, your customer, those kind of objects - I put those in the root directory, and then everything, all the other subpackages kind of reference that. So your database - you might have a user database service, where it can actually fetch users, and communicate like that, and that can implement an interface inside of your domain package, your root package. And then your HTTP package, your web package might then depend on your interface inside that root package. So you're not depending directly on the database, or your database isn't dependent directly on your web handler.

\[21:58\] So there's some disconnect there, and you can do some interesting things around mocking around that as well, if you need to. It depends on how that fits your use case. And I think that works well, generally. I think that you don't have to be super-strict around that. I think you can start depending down the stack. So your web handler can depend on the database, but you don't necessarily want your database to depend on your web handlers. So it really depends on how you're structuring your project, how complicated it gets, what dependencies you have. Mocking things like your database isn't always that useful; mocking things like S3 is super-useful when it costs a lot of money. So it just depends on the use case.

**Kris Brandow:** Yeah, I feel like when you have multiple -- like if you have two packages that are kind of depending on each other, I tend to see that as a signal that maybe those shouldn't be two different packages, and maybe you should try and merge them. And merging is definitely more challenging, because you've got to go rename a bunch of stuff, decides what the new package name will be, and all of that... But that helps prevent that kind of package explosion that Ben was talking about, where you just wind up with more and more and more packages as things tend to grow over time... And it's easier to merge it now than to merge three, or five, or seven, or fifty packages later, when you realize you're kind of stuck. I definitely had codebases I've been in before where it's just like "Okay, well, we can just not avoid this circular dependency", and I've had to do some pretty egregious stuff to just make it work, and then try to unwind all of that and kind of get everything back into a better state. So even though it might be painful now to try and merge these two packages, merging two packages is going to be a lot easier than trying to merge many other packages down the line.

**Mat Ryer:** Yeah. So Kris Brandow, do you err on the side of having sort of one folder and everything just sort of merged in the beginning, and break it out later? Or do you try and do something based on your experience of what you think can work?

**Kris Brandow:** It depends. Usually, if I'm building an application, like some sort of executable, or something like a microservice that's gonna run on a server, I just start with one package. And then as I need to break things out, I start breaking things out. If it's a library and I have an understanding of the shape that that library ultimately needs to take, I might start breaking out packages early, but I do tend to start with just one package, and then kind of break things out over time and go from there. So unless you super-understand the domain of what you're trying to build, and maybe it's something you've already built before, and you're building a new version of it to clean everything up, then sure, start with multiple packages. But I think for anything else, especially if you're just exploring, it's okay to just have one package. It's okay to have one package with even a lot of files in it. That's not necessarily a bad thing. At least I tend to think there's not a golden number of files for a package. It all just depends on the context.

**Mat Ryer:** Yeah, they can actually be easier to find things... And I find that. Because I do the same thing, I have usually quite a big main folder, whether it's called -- yeah, usually it's called main if it's the main command; we can talk about that in a minute. I'll often have that, lots and lots of files, and then use file names to group them up into something that's kind of meaningful and logical. And yeah, the tooling is just -- there's just no problem. I remember on older machines there were limits on files; there probably still are, but I'm sure they're just way beyond anything we're gonna get to, probably.

**Kris Brandow:** Yeah, I think maybe with FAT file systems, where it's like a 4-gig max... But if you have a 4-gig file, that's -- \[laughs\]

**Mat Ryer:** Yeah. A 4-gig code file. Break that into a couple of packages.

**Ben Johnson:** For some older machines, I've found that -- and not even that much older, but running `go fmt` on a 10,000-line file takes just like that split second, that's just a little too long; and I save a lot, so it just annoys me every time it has to catch itself.

**Kris Brandow:** 10,000 for a single file is definitely a point at which you should be exploring... And then I have run across codebases that I think have 20,000 lines of code in one file, which is just --

**Ben Johnson:** That's pretty much, yeah.

**Kris Brandow:** ...like, "Okay, we need to do something about this."

**Chris James:** \[26:06\] Yeah... I sometimes feel like people take the "Don't do premature abstraction" thing a little too far sometimes. I don't think a file with 5,000 lines is acceptable, in my view. Just break it out a little bit... Particularly because with files in Go it's not like you can import from two files in the same folder. It's not a big deal.

**Mat Ryer:** Yeah. There's no difference.

**Chris James:** Almost cut a file in half, and just put it in a different file.

**Mat Ryer:** Just have Part One and Part Two, would you?

**Chris James:** Yeah, yeah, that's fine. PartOne.go and PartTwo.go.

**Mat Ryer:** I like that.

**Kris Brandow:** I would add a caveat... As long as the -- you know, if the 5,000 lines is one type, for some reason, please don't split it across files... Because I've run into that as well, where people have split types across files in Go, and it's one of the most frustrating things. Like, where is this method? Oh, it's in this other file. And then you wind up with these smaller files...

**Mat Ryer:** That's a pretty good tip there then for people... Like, put the stuff that's related together in one file. I think it's a usability thing. We are users of our codebase. So think about the user experience of the codebase. I think that's quite a healthy way to think about this. But yeah, so with the internal folder - we know it's different and special. There's also - I've seen the cmd folder and pkg folders, for the command and for the packages. What are those folders? Can someone just explain what they are?

**Ben Johnson:** Sure, yeah. So the cmd folder, a lot of times that's the subdirectory \[unintelligible 00:27:33.28\] and then inside of that you have other subdirectories, based on the name of the actual binary you want to produce. This is super-helpful if you want to separate out your command, your binary from your actual root domain package. That's how I do it. Or if you have multiple binaries you want to produce. So a lot of times, if you see -- like, in Kubernetes you have a kubectl binary that you might produce, and you might actually have to have a server as well, so that's a good instance where you have two separate binaries. So that's a great way to split them out. One caveat there is that stuff that you have in one of those binaries, you can't necessarily -- you can't import from the other binary; because they're both main packages, and that's another restriction on packages.

As far as the pkg folder though - I don't like the pkg folder, personally. I think a lot of people in the community generally don't. Your folder structure is your packages, so I don't think there's a usefulness to necessarily separating out kind of library packages from your binary packages. Just put it all in the root.

**Mat Ryer:** I wondered if pkg, originally they were supposed to be imported, where others perhaps weren't...

**Kris Brandow:** Years and years and years ago, before -- even before \[unintelligible 00:28:43.27\] In the old days, I ran across a codebase that used pkg, but it used it specifically so that you could have imports that didn't have the qualified name on it. They'd wind up looking like standard library packages, which was very annoying... But the way that you could do that is by having a pkg folder, and then basically pointing your GOPATH at the -- or adding to your GOPATH the repository you're working on. And so people did that sometimes. Very annoying to work on.

**Ben Johnson:** I've seen that, actually.

**Kris Brandow:** Yeah. Because you come across a package that's just like a single word, or a word in a subdirectory, and you're like "I don't think that's in the standard library. What is this?" It's like "No, that's just one of our things, Because we have this pkg folder here."

**Mat Ryer:** So I bet you that's where it came from... Because it's an unusual thing. But that makes sense, because the old GOPATH used to -- when you'd just do an import, it used to look in all the GOPATH folders for a pkg folder. So that's probably where it came from. And there is something aesthetic about just doing that. But one of the great things about importing things in Go, I think, is the fact that you see the full URL of the project, often. It's a shame they don't match exactly for subpackages, honestly... And actually, I wish GitHub would -- in fact, they could fix that, I think, if they wanted to. So just a shout-out there to our GitHub friends.

\[30:05\] But having it when you open a file, and you've got github.com/ your favorite package in there, you know exactly where it is; you know it's an external package. It's a nice signal. I agree with you, Kris, that just having the package name, although I can see the aesthetic appeal, it's confusing. You'd think it was a standard library package. Ben, do you wish that main was importable?

**Ben Johnson:** Yes, I actually do. I find that -- like, I always think of my application kind of in layers, and then kind of the outermost layer is that binary. That's one of the most outer layers, is the binary, and then outside of that is the main\_test, which will test that main program. But if you have multiple binaries, sometimes you want your integration tests them all together, and that'd be nice to be able to import to another layer, kind of another package to test those. So that's my main annoyance. I mean, you can just compile out the binaries, and run the binaries themselves, but... It's a minor annoyance, really.

**Mat Ryer:** Yeah... That is a bit annoying.

**Kris Brandow:** I feel like that has led also to people having very thin main packages, where it's just like "Oh, I'm just calling into another package that is my actual application", and that's all it does. It's just package main, and then you have a func main, and it just calls the thing, and then returns, because you can't import main. That can be annoying.

**Chris James:** I think it's nice, because -- I definitely strive to keep main as tiny as possible, and to have some kind of function that takes that STDIN and STDOUT, and then it means I can actually test my application, if not the actual compiled binary, as a separate thing. I'm actually quite a fan of that sort of thing.

**Mat Ryer:** So I do that with a run function or something, but that's inside the same file. Do you have all your stuff pulled out into a different package?

**Chris James:** Well, to be honest, I don't think I've been pretty consistent with it either way. I think in some projects I have just had a run function just living in the main package. Sometimes I felt the need to have it separately, but... Yeah, it's just in terms of just peeling away as much as I can, so I can write tests around as much as I can, without having to actually compiled the big, scary program. I think that's quite nice. But again, it seems so trite to say it, but context is important. If you're just building a fairly small program, like a script or something, it's probably not worth going through all these hoops to do that. If you're building something, dare I say, a little more enterprisy, then maybe you do want to do that.

**Kris Brandow:** Yeah, if you're building something that's production-level, then you might want to have more of the -- just to get some more testing, or ease the testing of it. But yeah, if you're just doing a proof of concept, or a prototype, you can just shove everything into a main function if you want. Don't get fancy before you need to get fancy.

**Break**: \[32:54\]

**Mat Ryer:** So is there one project structure then that we prefer? Is there a project structure that in most cases is just good, and -- and like with `go fmt`, we like the fact that all our Go code looks the same. Would we not benefit if we could all just agree on "This is the single structure of how we do all our things"? And this leads me on to the project layout package, which is quite an interesting -- it's on GitHub, and there's a kind of Go standard repo for package layout. Tell us a little bit about this, because it's quite a popular package.

**Ben Johnson:** Yeah, it's a package on GitHub that has been -- it's a point of contention, I would say, in the community. There's a lot of questions -- like, people will come to the Gopher slack. I've seen a lot of questions on there. I know Tim Heckman answers a lot of these questions, and other people... Where people will come and say, "Hey, I've found this standards repo out here. This is how I'm supposed to do my project layout", and there's a lot of things that people in the community disagree with that are in that repo. It's not all wrong, or anything, and by no means I think that there's a single one package structure for everyone... But I think that the kind of community guidelines we've kind of come together on - I think it can lead people astray in some ways, and confuse people, especially with the name of Golang Standards; I think is gives the impression that it is a sanctioned repo, and it's not.

**Mat Ryer:** \[36:12\] Yeah. Yeah, I think Russ Cox even wrote or commented about this. A little bit of drama for you, and we'll pop this in the show notes for you, so you can go down that thread yourselves. But it does have some interesting points in it, and actually, one of the folders it mentions - it talks about internal, the cmd, the package folder... Vendor folders as well. Are they still a thing?

**Ben Johnson:** Yeah, they can be. I mean, I've seen people that will use vendor. One interesting use I had for vendor recently was I had a project that would pull in a private repo, and I needed to build it up on a third-party service... And you can actually - the way that some of these things work, you can push up your project structure, your local structure, and it'll run it like a Heroku kind of thing. It can push out whatever code is in your local repo. So it's nice to just be able to vendor that in, and then it pushes the whole thing up, instead of having to pull down and send up keys, like API keys for GitHub. That's one option. I don't know that that's super-common... But generally, I generally avoid it for most open source projects.

**Kris Brandow:** It feels like vendors is a relic of the past as well. Like, it was that we really, really needed something - what was it, like six, seven years ago, when we had, the battle days of "Yeah, it just pulls whatever's on main. Good luck." Vendor definitely helped with dependency management, but now that we have modules, it doesn't seem like it's as useful as it was in the past.

**Ben Johnson:** Yeah, I'd agree with you. I think unless you have a really good use for it, a really good use case, you should probably avoid it. I find some CI systems, sometimes it works better for those, but... Yeah, I'd avoid it, generally.

**Mat Ryer:** So are there any signs that we've got our structure wrong? Like, are there sort of things we find ourselves doing again and again, that are red flags, that we should pay attention to?

**Chris James:** Yeah... When this was brought up on the Twitters, that it's all about files and folders and things, what I believe is that when we say things like "Context is important", that's not a particularly actionable piece of advice to people. "Context is important" - what does that mean? I think a more useful things to talk about are how do you know that your structure is working for you? And if you can get used to understanding those signs and listening for those signals, you'll be able to design the packages and things that you need for your context.

So when I'm coaching less experienced people about this, this is the thing I really lean on; I don't prescribe a particular structure or anything that, I just say that "Look, just listen to the signals you get." So for instance, if you find yourself having to constantly rewrite your tests, when you change your packages and things, that probably means that your package design isn't quite right, and maybe things that are coupled are things that they shouldn't be, or maybe actually your cohesion is lost, so you need to bring things closer together.

Another thing I love to look at is the blast radius of change. So how often have you worked on a project where someone's asking you to make what sounds like a small change, and then by the end of it, you've changed up 20 files, and you think to yourself, "Is this reasonable? I had to change so many things just to do this tiny change." And quite often, it's just easy to ignore that signal, and just kind of move on, and okay, "I'll go pick up the next ticket off JIRA, and just get on with my life." But you should listen to those signals; there's a lack of cohesion in your codebase, and things are often too scattered apart, and you need to think about bringing things together.

And finally, the other thing is having a sense of locality. So if engineers come into the codebase, and again, they don't know -- they've been asked to do something, and they just have no idea where to go or where to start, then you're not giving enough signals with your codebase. We talked earlier about how files and folders are a wonderful metaphor. And metaphors are such a powerful thing for software engineers, and quite often we can use folders and things to create these metaphors in people's minds so that they can find the correct thing to change whatever needs to change. \[unintelligible 00:39:56.02\] but for me that's a thing I try to get engineers to focus on, is listening to your code and trying to understand why is it difficult to make the changes that we need to do? ...and then using that feedback loop to change the design.

**Ben Johnson:** \[40:11\] Yeah, I'd agree with everything Chis was saying. I think those are great signals. I think that some concrete ways as well, that are good for kind of code smells - I think that if you have a lot of the same prefix on different types, that could be an example of where things might need to be split off. We look at like the standard library - I think everyone really likes the standard library layout, the package layout; it all just kind of fits, because they all kind of layer on top of each other really well... And I think a useful exercise is - like, one example where I think it kind of did poorly, in my opinion, is the net package, where you have just this gigantic package where it has every network-related thing ever put into it. And I'm not trying to critique the Go team; they're great. But I think that in hindsight, I think that you could split things out if you see like there's IP address, there's IP listener, or TCP listener, TCP address, all those things - I think those could be split out into a TCP/IP, a TCP/TCP package... Because you know, you have a network, a net stack where it kind of layers those things naturally, and IP doesn't depend on a TCP, or vice-versa. That kind of single dependency. So I think that's a good way to look at it, and kind of - as a code smell.

**Mat Ryer:** Yeah, that's an interesting point. I like, Chris, what you said - when you do a PR that's got 20 files have changed because of your structure... Those PRs are even harder to review; it's harder to really understand what's going on, and it's harder to just just by reading it really have a sense of what's going on. But that's probably true for any kind of abstractions; that is a price we pay by doing an abstraction. So it's like, yeah, we try not to do loads of abstractions, but also, the thing is, the abstractions are really what unlocks kind of phenomenal things when we get them right. So I think - yeah, that's quite important.

And yeah, Ben, your point was interesting... With the net package being so big, if it's an API that people are going to be consuming, you can't really do that trick of start with a main, and break it out later, when things become obvious, because people are going to be kind of relying on the structures there. Are there other downsides, Ben, to just having one folder with everything in?

**Ben Johnson:** I mean, I think understanding kind of how things are structured, and how they relate to each other in your project. I think you don't really get a sense of that necessarily just with a single GoDoc page that goes forever... So I think that could be an issue. But no, I mean, I don't think there's anything wrong with starting with a single one. And even with Go, there's no real guarantees up until we got to 1.0. Was it 10, 11 years ago? So before then, we depended on all kinds of things that changed. But once you actually get to that 1.0 part, you're really just saying, "Hey, you know what - this is the structure. We're running with it. It's not going to change." I think that's the most important piece.

**Kris Brandow:** And I think there are tools now, or there's more tooling than there was before to help migrate... So I think -- like, gofix isn't as big of a thing as it was in the early days, but having tooling like that, that can help to auto-migrate your code, if you do like "Okay, I've taken this type, and now I've moved it to this other package, and now I can just run this thing and it just does all that for me." That can be helpful, along with aliases, and that sort of thing.

I think over the past few years, we've gotten tools to make it a bit easier to do those migrations of things out of packages, and breaking larger packages into smaller ones... But I think on the question of "How do you know if your package structure is wrong, or if things are wrong?", I think that really comes down to "Can you justify why things are the way they are? And do you like that?" Because if you don't that, then it's wrong, and you should change it. But if when you put in a single PR, you touch 20 files, you're like "Oh yeah, but this is the reason why it's like this", and it's a coherent, explainable thing, then it's like "Okay, well, then it's not wrong." It's annoying, but that's a trade-off that you've chosen. So the term "wrong" really depends on "Have you sat down and analyzed the circumstances that you're in, and are you happy with those circumstances or not?"

**Mat Ryer:** Yeah. I think that's a really good point.

**Ben Johnson:** I think it's useful too to go back to code you haven't touched in six months, and it just looks god-awful, and you're like "Oh yeah, that package structure was not right." It gives you a lot of sense of what feels right and what doesn't.

**Mat Ryer:** Yeah, I did that once recently. I went back to an old package, and there was just a folder in there called Folder. So...

**Ben Johnson:** Did it deal with folders though? If it was a folder management package, then that might be okay.

**Mat Ryer:** Yeah. No comment. Well, speaking of no comment... It's that time again. It's time for our Unpopular Opinions.

**Jingle**: \[44:39\]

**Mat Ryer:** Okay, who's got a delicious, juicy, controversial opinion for us? This is the internet. We need controversy. Do you say controversy or controversy?

**Ben Johnson:** Controversy is the correct way to say it.

**Mat Ryer:** Okay. Kris Brandow?

**Chris James:** I don't even -- controversy, I think I say...

**Mat Ryer:** You're not Kris Brandow...

**Kris Brandow:** It's controversy. Like, come on...

**Mat Ryer:** Okay. Yeah, see? Controversial, isn't it? Or controversial, as I say. Alright, who's got an unpopular opinion for us?

**Ben Johnson:** I'm happy to start.

**Mat Ryer:** Yes, please, Ben.

**Ben Johnson:** My unpopular opinion is that the most widely-touted features in Go, so like channels, interfaces, I think are some of the -- not the worst features, but kind of the most misused features of the language. And I feel like people that come into the language, they hear about those things, and then they just - they can get confused on... Like, a lot of times channels are not the right answer for things. A mutex is awesome; you should probably use mutex. Or kicking off 1,000 goroutines is probably not a good idea. There's a lot of management around those constructs, that I think that people don't see. So I think those popular ideas and constructs are not always great.

**Mat Ryer:** But those goroutines are really cheap to make, and you can make just a million of them really easy, Ben... So I'm not sure why you wouldn't.

**Ben Johnson:** They're super-easy to make, I agree. Yeah. And then those \[unintelligible 00:46:15.17\] are great, too.

**Kris Brandow:** It's interesting... I think most of the time when you're using channels or goroutines, it's like, something else has done it for you so you don't need to do it yourself. Like, yeah, you use goroutines all the time in an HTTP server, but you don't need to spawn goroutines. I think they are good features to have in the language, but not necessarily features that you should be clamoring to use.

I agree with you, Ben. This should be a popular opinion. "Don't make atrocious packages or applications filled with channels. We've all made that mistake. Please stop."

**Mat Ryer:** Yes. I'm with you, actually. All the old code I had that was channels, I tend to end up refactoring away in favor of just a simple mutex, or something. I just find the semantics actually a lot easier to deal with. And I always want a - top tip, I always keep the locking and all that code very local, so you can see where things are locked, where they're released. Probably in one function, if I can, and break out the actual execution elsewhere.

And the other thing I like to say is - for packages, it's so tempting to want to... If you're delivering a package that's going to do some work, it is so tempting to want to solve that problem of doing loads of that work, and filling up the CPU and just really blasting through it. But actually, that's harder for people to use. It's easier, I think, for people to implement their own concurrency and their own kinds of things, because they can understand it more in their situation; just writing -- so long as you have type-safe, thread-safe types and things, which you can get with the atomic package... Yeah, I think it's worth doing.

**Ben Johnson:** \[unintelligible 00:48:02.08\] Sorry.

**Mat Ryer:** \[48:06\] Yeah, it might be really popular, that one. But we'll see. I still appreciate it.

**Chris James:** Just to add to that, I think quite often, and counter-intuitively, adding concurrency slows things down. Because concurrency isn't free. You might think that suddenly you've made your computer do things four times faster, or whatever... But actually, in practice, it's slower. I mean, that's why it's always best to benchmark things first, and then you can kind of indulge yourself by playing with the toys, and then going, "Oh, actually, maybe this wasn't worth it."

**Ben Johnson:** Actually, one of the things I've actually found interesting, on top of goroutines, is - you know, Rust came along, and Rust was supposed to be the super-safe language, and nothing ever goes wrong in Rust... I find that a lot of the things they fix, things concurrency, things like some type safety stuff, I don't find it's usually the bugs that I hit the most in Go. The bugs I hit the most in Go are things that will go out of memory, and then just the whole program dies. So I've actually been really fascinated with Zig lately, because they do all explicit allocations... So I think that's an aside, really.

**Kris Brandow:** Yeah, I think that people tend to optimize in the wrong parts of their application, because it's like "Oh, here's the place where the actual performance problems are happening. And then here's the other place where it's a bunch of fun stuff to do." And those are usually not overlapping spaces. So people tend to optimize things that -- you spent all this time optimizing this, and you haven't really gotten any extra performance... But there's that giant, ugly thing over there that no one wants to touch, where 90% of our performance problems are.

**Mat Ryer:** Okay, do you have any other unpopular opinions?

**Chris James:** I'll go...

**Mat Ryer:** Yeah, go.

**Chris James:** So just - let me preface this with like I love the Go community... But you are allowed to criticize those you love, so it's okay.

**Mat Ryer:** I hope it's Kris... I hope you're about to have a go at Kris and not me.

**Chris James:** Yeah. So I think a lot of figures in the Go community reject past teachings as like over-engineering, \[unintelligible 00:49:58.23\] And I was having some light bedtime reading a few months ago, I was reading Martin Fowler's "Patterns of enterprise architecture", and I can feel the Go community cringing, because enterprise architecture - that doesn't sound very Go-ish, does it? And it was written 23 years ago, or something silly that. But I was reading through it, and I was realizing that a lot of the stuff that has been discovered in terms of patterns, and best practices within Go - they were all written in that book. And I think a lot of engineers could do with reading some of these past teachings. You shouldn't bikeshed it entirely; you need to process it and understand it and apply it to the context. But I think there are lots of valuable lessons that don't need to be relearned. We can pick up these books and look at them.

So for instance, the classic thing that everyone kind of discovers or has to do some googling about, "how to structure my HTTP handlers", right? I think, Mat, you've written a post about it, and I've put a thing in my thing about it... Martin Fowler wrote about a pattern that basically everyone's kind of agreed upon, as I say, like 23 years ago.

So mainly, my unpopular opinion is "Read Patterns of Enterprise Architecture, and it'll make you a better Go developer."

**Ben Johnson:** I don't disagree with the take itself. I think my caveat to that is that I really don't want to hear people just dropping all the pattern names of like singleton, and abstract factory... I think you lose a lot of context when people start using these special terms, instead of staying within the context and nomenclature of the language itself.

**Chris James:** Yeah, I totally agree. We were talking about files and folders... So I tend to use ports and adapters, which is a very kind of enterprisy-sounding thing... But when I'm doing it in Go, I don't have a ports package, because Go is structurally typed, rather than nominally typed. So that means I don't have to say, "This thing implements this port." It just does. I can just plug this thing in and it works. So I think when people do ports and adapters in Go - cool; that's a valid idea for some contexts. But I really don't see the value in making the ports folder with a bunch of interfaces in them. You just don't need that in Go.

**Kris Brandow:** \[52:10\] Yeah. The knowledge is the thing that is useful. I feel like our industry tends to get very dogmatic about things, especially about older stuff. I think it's always incredible how people -- for a lot of the stuff we're doing now, people are like "This is incredible technology we're building." And it's like, yeah, we built this in the '60s and '70s, and then forgot about it for 40 years. It's not new; it's cool that we discovered it again. But I think a lot of the times we mistakenly take things from the past, misunderstand them, and dogmatically apply them. I think that's the problem. The Pattern of Four book - I don't think it's a bad book. I think the way that people -- or the Gang of Four book, sorry. It isn't a bad book, but I think the way people apply it is bad. So "Let me just take a bunch of patterns and slap them into my code, and then I'll have a good codebase." Or when people don't understand why something is the way it is, or associate i with something else. My forever example of this is XML. People are like "XML is so terrible." XML is actually quite fantastic. It's far better than JSON, and other similar types, for a whole host of reasons.

**Mat Ryer:** What?!

**Ben Johnson:** That's the unpopular thing...

**Kris Brandow:** \[unintelligible 00:53:14.28\] that might be an unpopular opinion, but... I still think the reason XML is unpopular is partly because it's associated with SOAP, which people don't like, but also because back in the day it was slow to decode XML in JavaScript, in the browser. And JSON was free. So people were just like "Let's use the free thing." But even this whole JSON craze is relatively recent as well. I mean, it's called XML HTTP, or \[unintelligible 00:53:42.03\] whatever it is, but it has XML in it. And AJAX - the X in there stands for XML. So I think sometimes we throw out old stuff because we have given it negative connotations, when we really should be like "No, that thing wasn't bad. Some of the stuff we were doing with it wasn't great", but I think itself it isn't bad.

**Chris James:** I think that's a much nicer way of putting it than I did, so thanks, Kris... \[laughs\] I think the astonishing thing about the Gang of Four book, just to round it off, is it literally has in there "Prefer composition over inheritance." I swear, so many people have taken the Gang of Four book and used that as an excuse to construct these mad inheritance hierarchies from hell... And I have every sympathy with people saying "Please don't do this in Go." And the wonderful thing about Go is it doesn't have inheritance, it encourages composition over inheritance, just like how the Gang of Four book wrote 25 years ago, or whatever it was.

**Kris Brandow:** It's a level of irony that we come up with these beautiful patterns for things, and these ideas, and the names we give to them tend to get completely inverse to be the thing that we were trying to move away from. This happened with object-oriented programming, it happened with relational databases, which also is another hill I will probably have to die on... Of like, no, all of our SQL databases aren't relational if you actually look at what Ted Codd wanted out of relational databases. But I just notice over time we keep doing it, over and over. And I hope we can do it differently in the future.

**Mat Ryer:** Is that a submission of an unpopular opinion, about XML being good? Would you to actually submit that? Because that one could win. That's an award-winning unpopular opinion right there.

**Kris Brandow:** Sure. XML is good. I feel like "SQL databases are not relational databases" would also be confusing, if not unpopular.

**Mat Ryer:** Well, that sounded very interesting.

**Ben Johnson:** Yeah, I was curious about that one.

**Kris Brandow:** Yeah. I mean, I guess the short of it is that the whole point of why he came up with relational theory was so that the programmer did not have to care about how data was laid out on disk... And so you could just query how you want to query, and the database will figure it out. And basically, every modern database requires you to understand how the data is laid out to disk if you want it to function well. Like, we have to care about indexes, and most databases don't generate indexes for you. And the way you write SQL queries is highly dependent on how the tables \[unintelligible 00:56:03.05\] everything is laid out on disk.

\[56:06\] The first thing that happens if you're going slow is like "Oh, you have to optimize that query to make sure it can run faster for the particular data structure that you have..." When literally, the reason why Ted Codd was like "I want this" was because programmers should not have to care about this. This is something that computers should figure out. So it's literally the opposite of what it is.

**Mat Ryer:** What is funny - any of these kind of higher-level abstractions, really, that's the promise - you don't have to worry about underneath; you can just use this thing. But if you're going to really use it properly, and use it well, knowing about what it's really doing, that mechanical sympathy of what's actually happening, down at the files and folders level (well, files definitely), it might well change how you do things. So it's like, yes, it's one of those things where I don't want people to have to stop and learn everything before they can be useful; the opposite, actually - get going building things. But when it comes to it, it's really interesting to dig deep, and learn about how something really is working under the hood, for when you come to optimize or improve it.

**Kris Brandow:** I feel like there's a nice phrase of -- there's the idea of... Especially for cryptography things, it's like "Don't roll your own crypto", and I feel like the whole phrase of that should be "Don't roll your own crypto and put it in production." Like, please do go implement crypto algorithms if you'd like, just don't use them for anything real. And I think that applies to all of this; like, I don't know, go roll your own little operating system kernel, or go roll your little file system. Go do these things, understand how this stuff works, because then you will actually know more about how the underlying thing is functioning that you're using.

**Ben Johnson:** I will say a caveat on that - BoltDB was originally not meant to be for production, and it just eventually got there... So there is some danger in just rolling your own.

**Kris Brandow:** \[laughs\] Yeah.

**Ben Johnson:** I will disagree with you on the relational database piece. I think that -- I think it's relational in the sense that the select defines what you want the data to do, and I don't necessarily see the DML, the data manipulation language, or DDL, create indexes, stuff like that, as part of the actual relational model unnecessarily. It's kind of almost separate, in my opinion. So I think that from a select side - I mean, obviously, there's ways to optimize a select, but you can adjust how it's implemented from an operator standpoint separately from the person that's actually writing the sequel itself.

**Kris Brandow:** Yeah.

**Ben Johnson:** So...

**Kris Brandow:** I mean, I don't want to say that none of the databases that are SQL databases could be, but really -- or technically no, because there's other reasons why SQL is not relational. But on that point I was making, I think yeah, you could have an SQL database that is relational. I just think that for the way that we practically use them today, they're not in spirit relational.

**Ben Johnson:** Yeah. And also, Codd as well, I think if I remember correctly, he was a mathematician, and not actually a programmer himself... Or maybe he did some programming, but I think he was mainly a mathematician. So a lot of it was theoretical, and I feel like once the tires hit the road, you've got those kinds of performance issues.

**Kris Brandow:** \[59:08\] Yeah, I think it's -- there's a whole host of reasons why things wound up the way they did... But yeah, I think people have in the shadows been working on actually relational databases... Because the other thing about SQL is that SQL is not a relational language, and the people who created SQL deliberately made it not a relational language, which is another one of those weird things of history when you go troving through the research and the papers... It's like, SQL - they were literally like "We don't think this relational model thing is great. We're gonna create this other language, that's specifically this other thing." So it was a competing idea, and I think over time they kind of got merged together.

**Mat Ryer:** Oh...

**Kris Brandow:** Yeah, it's weird -- I've spent way too much time falling down this rabbit hole.

**Ben Johnson:** Yeah, it's a whole thing. Actually, another fun fact is the SQL - it was originally called SQL, the language, and spelled out Sequel, but then another company had the same name, and they couldn't get the rights for it, so they switched it to SQL. But now everyone calls it Sequel. So I think it's kind of funny.

**Kris Brandow:** Yeah, trademarks and all that... That's \[unintelligible 01:00:07.04\] if you want to be pedantic about it.

**Mat Ryer:** Kris, I feel like you should do an episode like "Down the rabbit hole, with Kris Brandow", where you just dig deep on something like that. Just tell us all the history about it, and stuff. I'd love that.

**Kris Brandow:** It would be fun. I do have a number of topics that I'm just like "Oh, is that how that's supposed to work? Okay..."

**Mat Ryer:** I always think they're very interesting and you learn so much. But unfortunately, it's not for today, it's not for now, dear listener; it's time to say goodbye. What did we learn about today? Files and folders... I mean, I feel there's actually a lot we didn't even get to. There's the whole IRFS package, which is an abstraction on top of file systems... Maybe we'll do another episode on that another time.

But yeah, so what did we hear about then? Well, start small and grow from there... "It depends", I heard that a few times, and I think that's kind of an important takeaway here... Like, there isn't one structure that just works for everything... Don't just follow patterns for the sake of it; find out what works for you. The patterns can be a useful metaphor, but make sure you actually understand the actual benefits. And then don't obsess over it, and let it be informed by the design of your code, rather than the other way around before. I thought that's quite interesting. And I suppose be prepared for it to change. As Chris James said, if you're fighting with it all the time, maybe that's a sign that not all is well, and it needs to be evolved a little bit. And then be prepared to do that. Because it's not easy. You have to sort of practice it. Think about -- you know, you've got lots of people working on things; big refactors are going to touch lots of things, they're going to be difficult to get that PR in the normal flow. You have to sort of organize around it sometimes, so it might be worth practicing; it's a sort of a teamwork thing as well.

Lovely stuff. Well, thank you very much. We've had some cracking guests, didn't we, Kris? Which one was your favorite out of Ben or James?

**Kris Brandow:** I don't pick favorites...

**Mat Ryer:** Right. Just text me.

**Ben Johnson:** What's yours, Mat?

**Mat Ryer:** Chris James. \[laughs\] I just answered that... No, not really. I couldn't pick; it's like choosing between your kids... If your kids are, you know, your age or slightly older, younger... I don't know. Younger. No, I'd never be able to choose. Chris James, do you have a favorite on here?

**Chris James:** No... \[laughs\]

**Mat Ryer:** That's fine.

**Chris James:** You're all wonderful. Everyone's wonderful. The audience is wonderful.

**Mat Ryer:** The audience is wonderful. Yes, thanks for listening, everybody. We had Chris James, Ben Johnson, Kris Brandow, and me, Mat Ryer. We'll see you next time on Go Time, shall we? Yeah, why not?! See you next time!

**Chris James:** Yeah...!

**Mat Ryer:** Yeah...! Bye!
