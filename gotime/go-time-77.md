**Erik St. Martin:** Welcome back, everybody, to another episode of GoTime. Today's episode is number 77. On the show today we have myself, Erik St. Martin, and Carlisia Pinto...

**Carlisia Pinto:** Hi, everybody!

**Erik St. Martin:** And Brian Ketelsen...

**Brian Ketelsen:** Hello, hello.

**Erik St. Martin:** And our special guest for today is one of the members of the Go team, Russ Cox. Welcome, Russ.

**Russ Cox:** Hello, gophers!

**Carlisia Pinto:** May I ask the first question?

**Erik St. Martin:** Sure!

**Brian Ketelsen:** Go.

**Carlisia Pinto:** I am dying, because I forever have wanted to ask this question to somebody, and Russ is super-appropriate... So Russ, why is it that the most technically brilliant someone is, the tiniest the fonts on their website? \[laughter\] Seriously...

**Russ Cox:** I have no idea, I don't know.

**Carlisia Pinto:** It kills me.

**Russ Cox:** That was not a question I was expecting.

**Erik St. Martin:** I don't think I've ever noticed that correlation. Now I wanna go crawl people's websites and actually make a comparison...

**Brian Ketelsen:** Okay, so that fits perfectly with the random bit of news that I read this morning on Hacker News. There was a link to an essay (I guess that's the best way to put it) about that South-West crash that happened yesterday... And the person that wrote the essay was a very pompous-sounding individual with a Harvard.edu website, and it was the tiniest font ever. So... Interest. I don't know if that causation or correlation or which, but... I'm just saying.

**Erik St. Martin:** I'm gonna back things up for just a minute... \[laughter\] I'm gonna go out on a limb here and say that most people listening probably know who Russ is, but if not, maybe a little background. Can you kind of let people know who you are and maybe how you got started on the Go team and your history there?

**Russ Cox:** \[00:04:17.11\] Sure, sure. I'm Russ Cox, I'm currently the tech lead for the Go team, and I got involved with Go just about ten years ago. At the time, I had worked with Rob Pike on Plan 9 when I was in college, and then I did an internship at Google in grad school. And when I was finishing up grad school, Rob told me about Go and basically said "Hey, we're trying to take all the things that we really loved about developing software on Plan 9, and make them work for writing the software that we wanna write at Google. Do you wanna help with that?" and I was like, "Yeah, of course." That was how I got in.

It's funny, I was thinking about this because I thought you might ask this... It was ten years ago, and I just can't believe how lucky the ride has been since then. First of all, as I'm finishing grad school this job comes along, and it's like the perfect combination of all the things I'd been doing for the previous ten years. It really was just sort of -- everything I had done found its way into Go somehow. Then I get to work with all these great people, like Rob, and Ken, and Robert Griesemer, and Ian Taylor... And you know, we sort of toil away for two years, having a lot of fun.

Then the truly amazing thing happens that honestly none of us expected, which was that we did this open source release and people actually wanted to use Go. That was mind-blowing to us. When we did the release -- Rob reminded me a while ago that I said to him a few days earlier before the release that my hope was that maybe a few people would notice, and ideally whatever the next big language to come along would steal the concurrency and the interface ideas from Go, and that would be our tiny little contribution to making programming a little bit better. Obviously, that didn't happen, but I'm okay with how it turned out instead.

**Brian Ketelsen:** \[laughs\] You've gotta love the opportunity being presented to you by Rob Pike. I mean, who says no when Rob Pike says "Come write a language with me."

**Russ Cox:** Yeah, it was pretty awesome. We were on a video call actually; he was in Sydney at the time, and I was in Mountain View, visiting Google... It was probably the middle of the night for him. I remember after I hung up just like thinking about it some more, and I just couldn't believe my luck.

**Brian Ketelsen:** Yeah, that's awesome.

**Erik St. Martin:** Yeah, I think Brian and I don't have the level of contribution you guys do, but finding this language we love, and then like "Oh, we wanna share it with other people", and then kind of the explosion of "We loved it, but we thought it was a small niche maybe of people who loved the language the same way we did, and I don't think we ever imagined the language exploding in popularity so fast."

I think you estimated like one million Go developers, or something like that, in a post...

**Russ Cox:** Yeah, last summer we thought it was about half a million, and at this point we think it's over a million... And we try to be conservative; we don't wanna be just making numbers up, but with conservative estimates, we think we're over a million now. And honestly, I can't even comprehend that. It's just nuts.

**Brian Ketelsen:** It's awesome.

**Erik St. Martin:** Yeah, I think in 2013 when Brian and I first started talking about a conference, we hoped we could get like 100 or 200 people to show up... So to think that there's a million people now is insane.

**Russ Cox:** I mean, honestly, it was insane -- I was thinking about the first GopherCon in 2014, I remember standing at the front of the room and just looking around... I think that was (what) 700 people? ...and I thought "Wow, this is crazy. This cannot possibly keep going", and it clearly has.

**Erik St. Martin:** Yeah, I think we were amazed and thought like that had to be every Go programmer in the world, at that time...

**Brian Ketelsen:** I think it was close. The best comment though was from Rob - he pulled me aside and he said, "You know, this is kind of like a debutante ball for my little baby." And I was just like, "Aww..." Like, "Our little girl grew up." So cute.

**Erik St. Martin:** \[00:08:12.15\] So what are you working on these days on the Go team? Are you mostly kind of leadership, or is there a particular part of the Go programming language that you're super into right now? ...outside of vgo, which we will get to.

**Russ Cox:** Mostly I do sort of leadership and helping us decide priorities, and that sort of stuff... Especially since I had kids, I don't have so much time to program as I did before. So I spend a lot of time trying to help other people be as productive as they can, and then the vgo stuff is the main work that I've been doing. The last release, the main work I was doing was with the build caching and the Go command, which it sounds like it might be unrelated, but really it was all about getting set up for vgo.

**Brian Ketelsen:** Build caching is awesome. Those build times just keep dropping, test times keep dropping... It just makes me happy. So personally, thank you.

**Russ Cox:** Yeah, I'm thrilled about it.

**Brian Ketelsen:** I'm curious - this is a little bit of a roundabout question, but I'm curious about Plan 9... Really curious. I know you've been heavily in the Plan 9 space - is it something you can still use? Do you find uses for Plan 9 today?

**Russ Cox:** Plan 9 was a lot of things. I mean, it really was its own world, and it pre-dated Linux at some level, and in addition to the operating system, it had this whole way of thinking about resources, and presenting them; then I had all these simpler commands, and UI... It was derived from Research Unix, but it was not Unix. So there was a lot that was Plan 9 that if you think about the experience of using Plan 9 -- there was the whole system, it wasn't just the operating system kernel.

People still run the full system today, and then in addition to that, when I was in grad school, I tried to use Plan 9 for a while, and eventually I realized that it just wasn't gonna work out, mainly because everyone else in my group was not using Plan 9, so it was very hard to coordinate with people.

So I took all of the userspace software and I ported it to Unix, and it now runs on pretty much all the Unixes. That's called Plan 9 from User Space, or plan9port, and if you do a Google search for plan9port you'll find the source code and you can download and install it. I still use essentially all the tools from Plan 9 and Rob's editor Acme and all of that. So yeah, I still use Plan 9 every day at some level, even though I'm on a Mac.

I actually really think that a lot of the spirit and the way that we approached structuring programming in Go owes a lot to Plan 9. Plan 9 had its own language at one point that had concurrency; we didn't call them goroutines, but it had goroutines, and it had channels, and it was the place where we really experimented with all this stuff... And we took what we learned and we moved on to other systems; I can run the editor on the Mac, and we can run -- all the concepts that we had on Plan 9, we can do them in Go now. It's great.

**Brian Ketelsen:** The thing I find most intriguing about Plan 9 is the file system. I don't understand all of it, but I've read several articles about people who wrote Plan 9 file systems, and it seems like you can expose resources across a file system in any way you want.

The article I read, they used the folder structure to show different types of sorting for the files that were on the file system. You could browse them sorted one way by going into a different directory - the same files, but they're presented differently based on how you access them. I just love the idea of using that file system metaphor for completely different purposes than just storing things on a disk. I really wanna play with the 9fs.

**Russ Cox:** \[00:12:19.04\] Yeah, it was a really fun system to use and explore. It was a research system, it was really meant for learning more about the way it could work. We used it as our day-to-day programming environment for many years, and the file systems... That was really the first interface -- it was the only interface in the whole system, and you got to define what happened when the user called read, or when the user called write...

It's a little bit like /proc on Linux, where it really is kind of a free for all if you read and write files there what happens, and it was the same way with all of our file servers, and it was up to the person who wrote the file server to figure out something that made sense, that actually felt right to use. We never had things like automatic sorting of files, or things like that. It was usually about presenting resources. But it was really easy to share files...

The other really nice thing is that if everything is a file and presented as a file and you know how to share files, then you know how to share everything. So you could do things like import /proc from another machine and then run your debugger locally, but you are debugging a process on another machine. That was not that uncommon. You just did it, because you wanted it to be working on your machine.

**Brian Ketelsen:** Wow. That sounds really powerful.

**Russ Cox:** Yeah, it was. Too bad we didn't have a web browser. \[laughter\] Honestly, that was why I gave up; that was actually the final straw. It occurred to me that it was gonna be so much easier to port literally all of the software from Plan 9 to Unix than it was to port a web browser over to Plan 9... So I took the easiest path.

**Brian Ketelsen:** I don't blame you. So I think the topic that's on everybody's mind right now is dependency management. I think we should go there. Let's talk about vgo, and what led us to where we're at with vgo, and what do you think about the future with dependency management.

**Russ Cox:** Wow, that's a lot.

**Brian Ketelsen:** I know, it's a loaded question... Like five questions. \[laughter\]

**Russ Cox:** I guess maybe I should start with what led us here, right? We released go get about eight years ago now, and if you go back and read the mail thread, the very first thing that someone asked was "Well, what are you gonna do about versions?" and we said "I don't know, we'll find out." Go get has actually been fairly useful, but of course, not having versions hinders various things... So we started these discussions at GopherCon in 2016, and then into the fall, and that led to dep being released.

The really important thing that dep did is that it got package authors thinking explicitly about issuing releases that are tagged with versions, and users thinking about consuming tagged versions, and this was something that go get had not had; everyone was just "I'll put my code out there, and you pick a commit that looks good to you. Even though they have these random hex numbers, just pick one you like."
So this idea that "I'm gonna mark the ones that I think you should be using, and you probably shouldn't be using the other ones" is really an important social change for the community, and I think that that's the most important thing that's happened as far as like changing people's behaviors.

But there's this problem that was really bugging me about a year ago that I couldn't articulate at first... It was that one of the major goals of Go is to work well for these really large-scale software developments, and that means you have to have gradual changes. And by gradual I mean that you've got some change that you wanna make throughout your whole project, and it has to be okay to make that change one package, or maybe even one file at a time, because you've just got too much source code to change it all in one commit.

\[00:16:12.14\] I gave a talk at GothamGo a few years ago, showing how important it was to make gradual changes for various code repair, and I was showing in particular how type aliases are essentially required for that kind of gradual change when you're moving a type from one package to another.

A similar problem happens when you need to update a large program from using v1 of a package to v2 of a package. You can't expect that the entire project is gonna move from v1 to v2 in one commit. For one thing, the code is coming from different repositories, so there's no such thing as one commit. So once your program gets big enough, it absolutely has to be the case that you can migrate the program a little at a time. One part of it is now on v2, now more of it is on v2, and eventually it's all converted, but it's this gradual thing and you've got a working program the whole time.

So I was thinking about, you know, how is this gonna apply? Dep's design really forces you to decide; it says "For the entire build, I wanna know which one version I'm gonna use." This seems like -- if one of Go's goals is to work for software at scale, this isn't gonna actually work.

I thought a lot about this, and this led me to this idea that, well, if we're gonna take semver, which is what people want and kind of expect - everyone is expecting semver - then semver actually gives us a way to talk about this, because they have this idea of a major version, and if the major version is the same, and otherwise the version is newer, then it's supposed to be backwards-compatible with this older one. But when the major version changes, then it's okay to make breaking changes.

So if you just put the major version in the import path, now you've established that any particular import path should never change what it means. New things might get added, but things shouldn't be removed, things shouldn't break. And if you do that - and I call this now "semantic import versioning" - then a lot of other things get a lot simpler, and a lot of the complexity that's involved in selecting which version you're gonna use and all that sort of stuff, a lot of that complexity just melts away.

This took me probably six months to realize... I'm mostly doing other things; I get pulled off for other projects at Google sometimes. But around November of last year - that was sort of the a-ha moment that I had when I said "Wow... If we do this, it really seems that this might work really well."

Then I spent a chunk of the next couple months prototyping this idea, trying to convince myself that it was worth sharing with people. Then of course in mid-February I posted a whole lot of text about it, and that's where we are now.

**Erik St. Martin:** I think it's really interesting too, and I know that there's still some big supporters of dep. Is there a lot more buy-in now from the dep supporters after kind of taking some time to take all this in, or is there still kind of some points of contention with adoption? I know some people didn't like the idea of the minimal version selection...

**Russ Cox:** Well, I haven't actually talked much with -- I haven't been involved in discussions about trying to convince people to use vgo today. What we released was a prototype, we wanted people to experiment and tell us what worked and what didn't; if they wanted to try it in production, it worked with just the standard Go toolchain, so that they weren't running some experimental compiler or experimental runtime... So as long as the program built, you're probably okay running it.

But we didn't actually want to tell people "Go out and convert everything right now!", because we weren't ready; there are things that are gonna change. So we haven't gotten to the point yet where we've really gone out and said "Hey, we'd really like you to change", and if people say "No, I don't wanna change", then have a discussion about what's wrong, or something like that. We're getting close to that, but at the moment we've really just been taking the initial feedback, trying to incorporate it and understand what we might need to modify a little bit, and try to get something ready that we can get to that next step where we start to actually have conversations with people about "We'd like you to actually use this... Can we do that?"

**Erik St. Martin:** \[00:20:24.10\] I guess that's an important thing to note, that part of the plan for vgo in the future is as these things are decided and people try it out, and the design is adjusted based on use cases that weren't initially thought of in the beginning, the end goal is for this to ultimately end up as part of the Go toolchain and not an additional tool.

**Russ Cox:** Yeah, absolutely. This is just supposed to be the Go command. You shouldn't have to know it's there for the most part. I really want it to fade into the background. I want it to be the case that you just don't think about it, and it mostly works; when it does break, you understand what's wrong and you just do your work instead of worrying about versions.

**Brian Ketelsen:** The only pushback that I've seen anywhere -- I follow the vgo channel on the Gopher Slack, and really the only pushback that I see is the version number being part of the import path. I think that's something that grates on some people. But that's really the only big complaint that I've seen.

**Russ Cox:** Yeah, that's definitely a sticking point, and it's not where I thought we were gonna be. I mean, if you had asked me nine months ago (or twelve months ago) "Do you think version numbers belong in import paths?" I would have said "No, absolutely not", and I also would have said "It kind of doesn't matter. It's kind of a matter of taste", and I think from a taste perspective, they probably shouldn't be there. I wouldn't really have had much more to say other than that.

It wasn't until November that I realized that if we do put them in import paths, it actually has this very important system effect that it simplifies things, and now you can have version one and version two in your same build, and all the tools just automatically keep those two things separate, instead of understanding that actually there's two of a particular import path, and every time you see one you have to ask "Well, which one is this?" If you just use different names for them, all of those problems go away.

So the thing I would tell to myself from 12 months ago is "Look, we've actually got a good reason for this. It's not that we think it looks nice." In fact, I don't think it looks nice, but I think that we'll get used to it and it'll look normal in a few months, or maybe half a year, or a year.

**Brian Ketelsen:** \[laughs\] Like with GOPATH - a lot of people resisted GOPATH, but now a lot of us are so ardent about using the GOPATH. Everything goes in the GOPATH, not just Go code.

**Russ Cox:** Well, we'll change that too, maybe you'll get over that.

**Brian Ketelsen:** \[laughs\] I doubt it.

**Erik St. Martin:** I mean, even if you think about imports, right...? The fact that it is actually a URL. A lot of people who look at Go who aren't in the Go community or are just getting into it think it's the oddest thing ever. And once you've been around, you don't really think about it much. In fact, I kind of like it... Like, "Oh, I can go find the source code at this URL!" But yeah, I think anything new or different just takes time to kind of get used to.

**Russ Cox:** Yeah, and I remember that transition. We had code without URLs; people just handed out code, and you said "Oh, I have a package called Foo. Here, download this and put it in your GOPATH under Foo", and you just had to put it all together yourself.

That actually worked pretty well, but you couldn't automate any of that. And when we introduced URLs - absolutely, they looked ugly. But now we think "Oh yeah, that's just the way Go code looks. It's fine."

**Carlisia Pinto:** And talking about changes, is go get going to go away?

**Russ Cox:** \[00:23:49.09\] I don't think go get will go away... It's going to change in the way it works. I'd really like to keep commands working as well as they can, as close as they can to what we have already. For example, I write lots of little throwaway commands, and there's like a two-factor authentication thing at \[unintelligible 00:24:10.04\] and I tell people "Run go get \[unintelligible 00:24:14.06\] and you have this command now." That's, at some level, the UI or the UX of the Go command, and I wanna preserve that. I want that to continue to install a command for you. But obviously, it's not going to work exactly the same way as it does today, because there's all this new stuff around modules and exactly what that means, but the end effect of "something gets installed" is supposed to stay.

The write-up from February essentially overloads get to mean a few things. It means "Do the install" and also "Download", which are the two meanings it has today, and then also "Update the go.mod file", which has all the versions in it that you're using for your future builds. So if you wanted to adjust the version of something you were using, you might say "Go get this import path at v1.2", or something like that.

That part... It's not obvious that -- you know, that's a third thing that go get does, and it's not entirely obvious that we shouldn't move that out to a different command, but we're still trying to figure that out.

But if you have in your fingers go get something to go install a command, we absolutely wanna keep that working.

**Brian Ketelsen:** For the record, my vote is to let go get continue to update that go.mod file, because I love that a lot.

**Erik St. Martin:** So do you have a particular timeline in mind for ultimately seeing this in the Go tool? I know that's kind of hard, because it's hard to predict what will come and everything, but what's your ideal timeline for this being kind of baked fully in?

**Russ Cox:** Well, fully in -- it's obviously not gonna happen in 1.11, which is wrapping up development half now, and then we'll do three months of testing and bug fixing... Go 1.11 is meant to come out on August 1st, so it'll come out August 15th, or whatever... And then Go 1.12 would be February 1st. So my guess -- we definitely want to have a Go release where the Go command is aware of modules and can be used with module code and people get a sense of what it's like, but we're not committing to all the details staying the same forever... A kind of technology preview, but as part of a release, so that people who only run releases can experiment with it.

And we've done this before with some of the other changes, like when we added vendoring - there was kind of a preview release, and there was the real one. So my hope is that we can do the preview release, and then maybe the one after that is the real release. But like you were saying, things come up and timing might shift... But it looks to me like maybe Go 1.11 can be the preview release, and then the only question after that, assuming that happens - and that's still a question - then Go 1.12, maybe that's the real release, or maybe we have to shuffle things around enough that we do another different technology preview release. We'll see.

My goal would be that we do the preview in 1.11, and then in 1.12 we have the full thing. But even once we have the full thing, we're not done. There's a lot of tooling and other follow-on stuff to really build up some more ecosystem around it. That all is disconnected from the release. So maybe that happens after 1.12, maybe it happens concurrently with 1.12... It's sort of hard to say.

**Brian Ketelsen:** 2.0?

**Russ Cox:** Yeah, 2.0... \[laughter\]

**Brian Ketelsen:** I think that was a dismissal... It sounded like a dismissal.

**Russ Cox:** Yeah, I don't know when 2.0 is happening, so it's hard to tie things to that. Actually, if you wanna shift gears just a little bit, I think that 2.0 will be kind of a non-event. I think that we'll probably end up making changes a little bit at a time in the 1 series, and at some we'll say "You know what, enough has happened. Let's call this one Go 2."

**Carlisia Pinto:** \[00:28:09.12\] So you're saying there will not be generics?

**Russ Cox:** No, I didn't say that. \[laughter\]

**Brian Ketelsen:** That was a big jump.

**Carlisia Pinto:** Because that would be a big event, I would say...

**Russ Cox:** Well, but maybe generics are like 1.54, or something.

**Carlisia Pinto:** Gotcha.

**Break:** \[00:28:29.15\]

**Erik St. Martin:** That's interesting, that at some point you might just label something 2.0... But does that mean you don't give yourself the opportunity to make breaking changes to get away from the Go 1 compatibility guarantees? There's just the hope that you're never really breaking any old Go code ever... Well, maybe not ever, but you try your best not to.

**Russ Cox:** We definitely wanna fix some things, but at the same time we don't wanna hurt people. We have a million users, we don't wanna have 10% of them walk away or 50% of them walk away because we broke all their old code and they can't do anything anymore. I don't wanna name names, but we all know transitions that have been like that. So we're sensitive to both sides of that.

One thing you could imagine doing, that we've kind of talked about a little bit, is if you had some sort of signal that this is a Go 2 program, and let's leave to the side for a second exactly what that signal is, but somewhere you can extract a bit from the source that says "I'm trying to be Go 2" or "I'm trying to be 2.1" or whatever... And then it just compiles differently and different things are available. Maybe there's some things we wanna take out of the language that were mistakes, but we can't break everyone's code, so they're gonna stay in the compiler forever, but if you're compiling in Go 2 mode you don't have that, but you have better error handling, or something like that.

That's one way we could evolve... And the active practices evolve, but all the old code keeps working. I don't know if that's exactly what's gonna happen - probably not - but something along those lines is what we've been thinking about and is very attractive, because you don't break everything but you do get to improve.

**Brian Ketelsen:** You hinted that concept in the vgo papers that you wrote, the idea of writing forward and backward-compatible -- I don't wanna say landing, but you know, the main library imports might be smart enough to understand what to do based on versioning, and then the Go tooling could change how it compiles based on that. You used an example of like a go fix command that might fix that. Is that something that you expect to be in the compiler, or in an external toolset?

**Russ Cox:** \[00:32:10.03\] I don't think that it would be in the compiler. I think that that would really be go fix. Go fix right now does very little because we don't break things, so you don't have to fix your code.

**Erik St. Martin:** Can I tell you how much I loved Go because of go fix in the beginning...?

**Brian Ketelsen:** Oh, my god...

**Erik St. Martin:** ...when things were changing all the time pre-one?

**Brian Ketelsen:** It was the best ever. We'd download release 56, run go fix and ship it to production. Just done.

**Russ Cox:** \[laughs\] Hopefully you ran your tests first...

**Brian Ketelsen:** We didn't write tests back then.

**Erik St. Martin:** We actually talked about it one episode where the only -- I forget what release I started using Go in, but the only thing I remember ever having to manually fix in all of those breaking changes was when the rune was introduced, because I couldn't tell the difference between whether it was supposed to be a byte or a rune.

**Russ Cox:** Right, right. Yeah, so go fix - the real problem is that we wrote these one-offs everytime we made a change, and it really wasn't something that scaled. The cool thing about the little throwaway comment at the end of that first blog post about go fix is that you could really imagine go fix being a general thing to help you migrate from v1 to v2 of an API. And the way that it was presented there - it can't do everything, but the things that it could do, it could actually do completely flawlessly, because it would look at something and say "Oh, v1 is now implemented as call this function from v2 and change the arguments a little bit in the following way..."

And clearly, if you're happy running that code, you should be happy essentially manually in-lining that code, except it's automatically in-lining the code... But doing it in the source code, so now the source code refers directly to v2 instead of v1. That should be fine, right? And now go fix works for everyone; it's not just these one-offs that are about the language. I think that'd be really exciting. We haven't actually done that, so maybe something doesn't work about that, but I think it'd be a lot of fun.

**Brian Ketelsen:** Yeah, it's hard to put your finger on the best features of Go, but the ability for us to write tooling like that - it's gotta be top three, in the way that we can rewrite Go source code, the way we can change things on the fly... The AST parsing and all of that, it's just such an amazing feature of Go.

**Carlisia Pinto:** And talking about change, Russ, I would like to ask you for -- what would you say would be things that you would like to have in the language, that maybe is not something that necessarily there will be enough consensus so it makes sense to add, but you personally would like to have? And also things that you would like to remove from the language.

**Russ Cox:** Oh, boy... Well, on the adding side, it's usually not so much a problem of consensus. I think that if we talk about things long enough, then typically there's specific details we might object to, and everything gets better as a result. Usually, the way it worked early on was that someone would have a crazy idea, we'd present the crazy idea to people. Instead of turning it down immediately and just saying "No, we're not gonna do that", you say "Okay, well maybe we could change this detail." If you're willing to essentially be improvisational about it and accept what's been presented and then try to figure out how to make it better... You know, we made a lot of progress that way. So I'm not so worried about not reaching consensus, I'm more worried about just never figuring out the right thing to do.

One example of that is immutability. I would love to have better support in the language for saying things like "When you call a write function on a file to write some bytes to a file, I would like the language to be able to guarantee for you and say in the program "The write function is allowed to write the byte to the file, it is not allowed to modify the bytes, and it's not allowed to keep a reference to the bytes after the function returns", so that after the function returns, I know I can modify the bytes and no one's looking at them anymore.

\[00:36:14.13\] This is kind of Rust's superpower. This is the thing that makes Rust so amazing... And I don't need the full superpower, I'd be happy with baby superpowers, but I don't even see how to do that, and that's the one thing that I would absolutely love to figure out. I've talked to a bunch of people about it, and it's one of these things that if there's any small case where you're not 100% right about it, you can't prove anything anymore. It has to be airtight.

What Rust does is it gets it all right and it's completely airtight. I would like to find a way to do that without quite so much annotation, and I don't know if that's possible or not.

**Carlisia Pinto:** Is backwards-compatibility a constraint for making that work?

**Russ Cox:** It absolutely is, in the sense that like if we want it to just be Rust, Go wouldn't compile anymore. But it's not so much about backwards-compatibility I don't think, as about the sorts of programs we want to be able to write. I think there's a lot of things where we'd say "Well, we don't wanna have to put annotations in this program. We think that this should work." If you don't annotate every last piece of the program, then the compiler has a hard time figuring out what's going on. So it's not so much compatibility as it is conflicts with the rest of the design.

Go is at a certain spot in the design space, and we consciously kind of put it there, and we don't wanna move too far away from that... You end up with a different language.

**Carlisia Pinto:** That makes sense. And while we're still on the subject of making or not making changes to the language, I remember your talk from last year at GopherCon Denver, and I remember you requesting the community to submit reports, and this is something that we bring up on the show once in a while, reminding people to submit those reports, and I'm curious to know if you guys ended up getting anything useful out of that.

**Russ Cox:** I think we've gotten a few useful ones. There haven't been that many that I've seen. I haven't looked in the last few months, but Robert and Ian have been sort of taking point on triaging all the stuff that's coming in. They've been going through all of the Go 2 issues on the issue tracker and trying to figure out "Is this an obvious yes/no? Is this something we need to put into \[unintelligible 00:38:44.19\]" and then trying to organize them... That's still an ongoing process.

So the \[unintelligible 00:38:51.19\] to start going through... I haven't looked at the current list in very much detail yet, but the really critical part about the experience reports is that they're kind of like tests. If someone says "I did the following, and this is a place where better error handling would have really helped", and then we come up with the design for better error handling... We can go back to that report and say "Well, how would you have used that here?" and then we can see "Oh, actually that would have helped there, because there's this other detail that it doesn't capture." Or, you know, it would have been great.

So the really valuable thing is to get us thinking and also to serve as test cases when we have more concrete proposals to evaluate. So we haven't gotten to the point where we can use those for evaluation yet, but I think at that point they'll be very helpful. The other part that I wanted from the experience reports was to get a sense of "What are we missing? What are we not thinking about?" It seems pretty clear that people want generics, people want package management, people want better error handling... And after that, it seems like we weren't really missing anything. It's not that there's nothing missing, it's just that there's nothing at that level of importance that we're missing... So that's good to know.

\[00:40:07.14\] If you look at the survey that we just did (the end of year survey), I think the next thing in the "What is Go missing?" question after those three is UI. But UI is probably an order of magnitude less popular than the first three. So if we get those first three out of the way, I think that'll be a really big deal for people, and then the rest is kind of lower order bits.

**Brian Ketelsen:** UI is an order of magnitude more complicated than all of those combined, too.

**Russ Cox:** Yeah, absolutely, and there's lots of different things... It's not at all obvious that UI is something that the core library should be doing anyway, so I feel pretty good about not having a plan for UI. I'm happy to let other people have that plan who actually understand UI.

**Brian Ketelsen:** We got a good question in the Slack channel - Florin asks "What role do you see for Go moving forward? In which space should Go evolve, and which space should Go stay away from? Is this something that's influenced by Google, or the community, or a mixture of both?"

**Russ Cox:** It's hard to say. I don't really think of spaces that way. We've staked out for Go that Go is supposed to be about programming in the large, where large is large-scale programming, where you have lots of engineers, or lots of code, and also large-scale deployments where you have big distributed systems, things where you're talking to a lot of things at once, and the concurrency really kicks in. I think those are still Go's strengths, and I think Go is always gonna be centered around those strengths... And to the extent that Go can stay centered around those and grow and make contributions in other areas, that's fantastic.

I would be hesitant to stray too far away from those strengths, so if there's something that we wanna pick up as far as a use case, or that someone proposed to pick up as a use case and it meant essentially not taking advantage of either one of those, then that would give me some pause.

For example, we talked to a team at one point who was working on 16-bit code on very tiny microcontrollers, and they wanted to know if Go would be a good fit, and we said "No. That's not something you'll want to do", because that's not what Go is targeting. Go is targeting server machines, and if you're targeting 16-bit systems, that's just a totally different ballpark.

**Erik St. Martin:** Have you seen some of Emgo and things that actually run on Cortex-M0? I think it supports kind of like a subset of Go, but it looks very Go-like.

**Russ Cox:** That's awesome, yeah. I haven't seen it. I heard you talking about it on the episode of last week or the week before, but I haven't had a chance to look at it. And I'll actually admit - I don't know what a Cortex-M0 is. How beefy a processor is that?

**Erik St. Martin:** It has like 16k of RAM, I believe.

**Brian Ketelsen:** Yeah, they're tiny. And just to pause for a minute, did we just confirm that you're a GoTime listener?

**Russ Cox:** I listen to podcasts a fair amount. I drive half an hour back and forth to work every day and I listen to GoTime.

**Brian Ketelsen:** I'm putting that on LinkedIn...

**Erik St. Martin:** But yeah, so it's got 4 kb of RAM, it's a 40 MHz processor, 16k of flash...

**Russ Cox:** Okay, cool. But it sounds like it's a different Go implementation.

**Erik St. Martin:** Yeah, for the most part... Though you've got your functions and imports and structs, and I think it supports goroutines and channels, too... They just don't work exactly the same way. But it's interesting, because if you like the syntax of Go, you know... It's much more appealing than writing these things in C, I'll tell you that.

**Russ Cox:** Yeah, absolutely. That's fantastic. I mean, if Emgo had existed when we were talking to that team, maybe we would have suggested that.

**Erik St. Martin:** It's interesting though, and I'm curious to hear kind of the way you and some of the core people who worked on the language in the beginning feel when you see stuff like this... Because it wasn't the end goal, right? But you're like "Oh yeah, embedded probably isn't that great for Go", and then it's like "Oh wait, people are using it to do embedded."

**Russ Cox:** \[00:44:14.16\] Well, it's not so much that embedded is not great for Go, it was really that the current Go implementation is not at all suited for embedded. So if a team comes to us and says "We want you to figure out a way to make Go run on a 16-bit system", what they're really asking you to do is start over. And it sounds like the Emgo authors pretty much did start over, and that's fantastic. They got something that's great.

So there is a question about sort of the language, versus the implementations. I was sort of focusing more on like where is the implementation going to go. You can move into a lot of spaces without changing much about the language, so I think that the main concern is the implementation... And I'd love having more implementations. I think Emgo is awesome, I think GopherJS is awesome... All of these are fantastic. It's just mind-blowing, but it's fantastic.

**Erik St. Martin:** I guess that's a good point too, right? ...there's a difference between having full coverage of the language and having something that's very Go-like. I guess the Go team's focus is on areas that you can implement the entirety of the language. So you can't do all of the language on 16-bit or small microcontrollers; it's only a subset, and you know, why focus your time there?

**Russ Cox:** Yeah, it would just be a totally separate project as far as the implementation, and we have limited time, and we're trying to make the current implementation as good as we can, so it probably doesn't make sense to start a second one for us. But I'm thrilled that other people are doing it, I think it's just fantastic.

**Brian Ketelsen:** So what would you consider the specification for a Go implementation? One of the questions we had from Slack was "How do you feel about the LLVM versions of Go, the WebAssembly, and all of the different versions of Go?" Is there something that looks like a Go specification, or is that just the Go 1 test suite guarantee?

**Russ Cox:** I mean, there is a Go language specification, so first let's get that working. As far as compliance - yeah, if you can run all that Bash, which is all of our tests, basically, then sure, that sounds good. Let's do that.

I want as many Go implementations as possible. That's how you know that it really works. People who sit near me are working on LLVM and doing a great job pushing that forward... And GopherJS and Wasm and all these things - it's absolutely fantastic.

**Brian Ketelsen:** We had another question, and we're starting to run low on time... What can you tell us about what the shape of the Go team looks like today? How many people at Google are working on Go? What are they doing? What's the Go team looking like today?

**Russ Cox:** Well, there's tons of people at Google working on Go in the sense of using Go, writing libraries in Go, all that sort of stuff.

The core Go team, which is the people that you'd actually see doing things on the mailing list and that sort of stuff is about 30 people right now. We focus on really doing as little as possible as far as the scope. There's a ton of Java and C++ in the world (and at Google), and it's not the case that the collection of all the people writing Java or C++ in the world are called "the Java team" or "the C++ team." We've been very consciously trying to encourage people like "Look, if you're building X in go, that's the X team, that's not the Go team." We've been trying to focus on the language and the libraries, the core pieces that we need to be really deeply involved in... So that's what we mainly work on.

**Brian Ketelsen:** \[00:47:59.05\] Can you give us a sense of the adoption of Go at Google, or is that proprietary?

**Russ Cox:** I can give you a sense - it's used for a number of fairly important things; there's tons of people checking in Go code every day, and we're pretty happy about that.

**Brian Ketelsen:** That's a good sense.

\[pause\]

**Erik St. Martin:** Apparently, it helps if you're not on mute. \[laughs\] My dog was scratching, and I was like "I don't think anybody wants to listen to that", so I muted myself and then forgot to unmute. So I think we've got like maybe 10 or 15 minutes left of the show... Do you guys wanna talk about any projects and news?

**Brian Ketelsen:** Holy cow... So many projects and news!

**Erik St. Martin:** I know we just mentioned Emgo and kind of talking about it last week... There is a follow-up to that post as well that we'll put in the show notes, so if you wanna follow along... I think it was \[unintelligible 00:49:04.09\] was his name, that posted it? I'll have to click the link, but yeah, there's a follow-up, a second part to that series.

**Brian Ketelsen:** I'll put the link in Slack, and we'll get that in the show notes, too. The thing that really got me excited this week was lgo, which is at github.com/yunabe/lgo. That's Jupyter Notebook, and it's 100% Go-compatible. So unlike the Gopher Notes implementation, which is still awesome, but has a lot of limitations about what kind of Go code it'll run, this new lgo implementation for Jupyter Notebooks does everything, including importing external code, it gives you runtime code introspection, code completion - the whole works. It's amazing. I was playing with it last night, and I can think of a million ways to use this for teaching Go specifically, so I'm super excited.

**Erik St. Martin:** Did anybody see the announcement yesterday from Netflix for Titus?

**Brian Ketelsen:** Who's Netflix?

**Erik St. Martin:** \[laughs\] Just a small company that does some video streaming, I think...

**Brian Ketelsen:** That was for you, Scott, heckling us in the channel; you get this... Yeah, see?

**Erik St. Martin:** So I think that was just mentioned yesterday. I haven't got to play with it and really kind of take in the differences between some of the other container runtimes, but I'm pretty positive that their runtime - or executor I think is what they call it - is implemented in Go, but the control plane is in Java. This is where we need our sound effects board...

**Brian Ketelsen:** I skimmed the article, and I seem to remember that it's like a divergence of Mesos, perhaps... I'm not positive about that, but it was -- it's based on something else, but it's diverged completely, and it seems to very much embrace the Amazon cloud environment. It's kind of built in... Which looked interesting.

**Erik St. Martin:** Alright. Do we have anything else, or do you guys wanna move into \#FreeSoftwareFriday?

**Brian Ketelsen:** Let's hit \#FreeSoftwareFriday. There's some good stuff in there, too.

**Erik St. Martin:** Alright. Who wants to go first?

**Brian Ketelsen:** You!

**Erik St. Martin:** Me? Alright... So I think I may or have not mentioned this project before, but as we know, there's a lot of overlap in the containers in Go world... Kube-lego by jetstack on GitHub - it is a controller that runs in your Kubernetes cluster, and if you add annotations to your Ingress, essentially it will go out using LetsEncrypt and fetch certificates for all of the host names that you have configured in there, and configure NGINX automagically for you... Which is awesome, because then we can do TLS Everywhere and nobody has to do any actual work for it... Well, assuming you're running Kubernetes.

**Carlisia Pinto:** \[00:52:16.21\] That's amazing.

**Erik St. Martin:** Carlisia, do you wanna go next?

**Carlisia Pinto:** Yeah. I have a shout-out to all of the people who added their names to the new speakers resources wiki page that Go is maintaining... And I'm pretty sure it was Russ Cox who started this page. It's just fantastic to see a bunch of people making themselves available to help with talk proposals and speaking questions, because we do need more people speaking, and especially new people... So shout-out to every single one of you on that page.

**Russ Cox:** I'll second that. I'm absolutely thrilled that so many people are interested in helping, and absolutely, we wanna see as many new speakers and new perspectives as we can. I really wanna encourage everyone to try to make people feel welcome, I encourage people to speak, and conference organizers, do everything you can to get new people to come, because we have a million people, but that's not enough. We need all sorts of people. Let's make that happen!

**Brian Ketelsen:** Yay!

**Erik St. Martin:** And I'm curious how we can get more people to take advantage of that, because I think that we see these lists and we see people tweet, like "Hey, I'm willing to review your slides" and stuff like that, but I feel like not as many people take advantage of that as probably should. Maybe there's a fear of reaching out to some of the people because they're more well-known, or things like that... But I'd love to figure out a way to kind of be more approachable, so people take advantage of that more often.

**Brian Ketelsen:** I know your name's on there, Erik. How many times have people reached out to you?

**Erik St. Martin:** Zero?

**Brian Ketelsen:** I've had three.

**Erik St. Martin:** I mean, I've had people I've already known ask me, but I don't think anybody knew from being on that list.

**Brian Ketelsen:** And I don't know if it's from the wiki page or from just me babbling on Twitter, but I've had three people ask me for help with their non-GopherCon-related talks... So not our conference, but other people's... And it's gone really well, and I hope that people continue to do that, but like you said, I don't know how to encourage that anymore.

**Erik St. Martin:** I take it back, I did have one.

**Carlisia Pinto:** How about you, Russ? How many have you got?

**Russ Cox:** Assuming I haven't missed an e-mail, I have gotten zero.

**Carlisia Pinto:** That's amazing...

**Erik St. Martin:** I feel like people may feel it's presumptuous even when being offered, so... I'd like to find more ways to do that, whether at a local meetup we host a "Bring your slides and we'll help" day, or something that encourages more people to do that.

**Brian Ketelsen:** What if we put those people behind some sort of e-mail alias and made it a little more anonymous -- maybe anonymous isn't the right word, but made it a little less certain that you were gonna hit Russ Cox when you send that e-mail; maybe people would feel less intimidated by sending a request out.

**Russ Cox:** I mean, if the goal is to get people to have e-mails land in my mailbox, then I guess that might work. \[laughter\] I actually thought about that, but I thought it was really important that people could select who they wanted to talk to, because you might feel comfortable with someone, or you might have seen someone give a talk and you feel comfortable approaching them, but you don't feel comfortable just e-mailing an anonymous list and not even knowing who's gonna see your request for help. So I thought it was actually very important that the people asking for help got to choose who they asked for help.

**Carlisia Pinto:** \[00:56:12.06\] That is a good point.

**Brian Ketelsen:** Yeah, I agree with that. That makes sense.

**Carlisia Pinto:** And realistically, we could have both.

**Erik St. Martin:** This is true. And I think we can probably do a good job of reminding people of the list, that we all volunteered our names willingly; somebody just didn't put us on there.

**Russ Cox:** Yeah, we could \[unintelligible 00:56:36.17\] to that effect. I think that this page is important; I created this page because I wanted people to be able to find places to get help, but this is probably like step five or something in what we need to fix. I think it's probably more important to encourage conference organizers to make sure that they're casting a wide net so that it's not just people who are following the conference circuit that know that these conferences are looking for speakers. You have to actively advertise to lots of different groups, to try to get the word out there that this conference exists and they want you to come speak. That's gotta be step one.

So this is helping with people who have somehow gotten through that part and know that they would kind of like to give a talk and maybe they wanna talk it over with someone. But I think that we need to step back and also focus on these sort of bigger, higher-impact things as well.

**Carlisia Pinto:** Yeah, and how about if the conference organizers helped promote this resource, for example? This resource specifically, or resources like that... Because for example if I never spoke at a conference and I have low self-confidence and I could majorly benefit from help but I couldn't get that kind of help or didn't know that help was out there, I would never submit a CFP. So I can see your conference announcement and I can see that, okay, you're making it safe for me, but if I can't really submit a good CFP, I wouldn't do it.

**Russ Cox:** Absolutely. We have to do everything.

**Brian Ketelsen:** Yeah, GopherCon says that all speakers will be assigned a mentor of their choice, and a mentor will help you from every step along the way up until delivery... Or something like that; I don't remember the exact words. But if there's a way to word that better, I'd love to change it next year to make it more welcoming and more comforting.

**Erik St. Martin:** And we can probably link to that speakers page on the CFP page, saying "If you'd like help preparing your proposal, these people are willing--"

**Brian Ketelsen:** Yeah, that's a good idea.'

**Carlisia Pinto:** Yeah, that's what I'm talking about.

**Erik St. Martin:** Then I think the next bridge to cross is a lot of people when you talk to them won't even look at the CFP page because they just think they don't really have anything of value to offer, so they don't even bother trying... How do we approach those people, and say like "We all have vast experiences, and things like that; there's usually something people can learn from your experience."

**Brian Ketelsen:** Alright, I'll do the next \#FreeSoftwareFriday, because I got super excited about this one... Last night the Visual Studio Code team released Linux support for the new Live Share feature, and I got to try it out this morning for about an hour... And it blew my doors off. I was so impressed with how cool it was. I was remotely connected to someone else's Go project, so I had none of this code on my local machine, and yet I could browse through the entire process and look at all of the source code, I could make changes, we could see each other's changes live... There's a little button where you can summon someone to "Come look at this file I'm editing right now."

But the coolest thing is that it's got a built-in ngrok. So the person running the code on the other end can share the network port that Code's running on, and it appears on my machine like it's local host. So they're running a web server on port 8080 off in California, and I just go to localhost port 8080 and I see the website.

**Erik St. Martin:** \[01:00:17.11\] That's awesome.

**Brian Ketelsen:** It was so amazing! I've got goosebumps right now; it's gonna be so awesome for live-pairing, for remote team working... I can't wait to use this more. Super-cool. So shout-out to the Visual Studio Code team who is kicking butt!

**Russ Cox:** That's cool.

**Erik St. Martin:** Russ, I had seen you had posted a project in there...

**Russ Cox:** Yeah, so we talked about Plan 9 a little bit, and the editor that I use came from Plan 9, it's called Acme, and if you google for me and Acme, you can find a screencast I did a number of years ago... And I just wanna give a shout-out to \[unintelligible 01:00:52.10\] who have been working on a port of Acme to Go. It's called Edwood. It's at github.com/rjkroege/edwood. I don't think it's quite usable yet - I think that they're getting close - but I'm really excited to see how it turns out, and I just wanted to call that out.

**Erik St. Martin:** That's awesome. Acme is still one I haven't played with yet. I keep meaning to add it to my list of editors to try, but I just haven't gotten around to it.

**Russ Cox:** Honestly, I'm sure that you're all lapping me with all your fancy editors, so I don't know that I would encourage you to go use Acme. \[laughter\] The main selling point is that it's programmable, in much the same way that Plan 9 - everything was a file system, so you could program through the file system and present things... Acme had that sort of idea, too. In fact, under the covers, Acme actually is a file server, but it's running on Unix, so you can't see the files that easily... But it lets you do plugins that talk to the editor, but there are separate processes, so it doesn't matter what language they're written in. It's not like Emacs, where everything is written in Elisp. That actually gives you a fair amount of power.

I have written Acme plugins, essentially, different programs that talk to Acme, and a lot of those are written in Go. I can do GitHub issues, I can look at code review comments, I can do all that in Acme, and that's all external programs written in Go. That for me is -- you know, I have all these comforts that help me be more productive...But watching other people, as far as actual text editing - you guys are light years ahead of me. And that's okay.

**Erik St. Martin:** I think once you reach a certain point in your career, you're just like -- like, even for me, people were talking about a bunch of stuff in VS Code for I don't even know how long, and I'm like "I've been using Vim for 10-15 years", something like that... I don't even wanna reconfigure Vim, much less learn a new editor.

Alright, did anybody have any other projects we wanna give a shout-out to - or people - before we close this show?

**Russ Cox:** I wanna give a shout-out to the entire Go community. I talked about how I was staying in front at GopherCon, and it was 700 people and it seemed like a lot; now it's just completely nuts. We have people doing podcasts, and conferences, and books, and courses, meetups and all this sort of stuff... And Go would not be the success that it is without absolutely everyone who's here. We wanna keep bringing even more people in and make it even more successful, but I'm so thankful to everyone who's here.

There's absolutely no way that I could have spent the last ten years having so much fun working on Go if everyone else hadn't showed up. I would have moved on to something else and Go would have been shut down... And I'm so thrilled that that didn't happen. Thank you to everyone who's come along for the ride. It's really fun.

**Carlisia Pinto:** It has been fun, yes.

**Erik St. Martin:** I agree. I think part of my love isn't just the language, it's the community... Just too much fun. And the conferences, too. I can't even keep up with the number of conferences that keep popping up. I'm actually really sad I'm gonna miss some of them. And they're in really cool vacationy areas too, like Iceland, and Brazil...

**Brian Ketelsen:** \[01:04:10.09\] \[laughs\] Yeah, the new one in -- was it Seattle? Go Northwest - I'm really disappointed it's like the day before GolangUK, because I accepted a speaking slot at GolangUK and I wanted to go to the new one in Seattle, too... But that only leaves me like an overnight flight to London to get there; I don't know if I can pull that off.

**Erik St. Martin:** You can try...

**Brian Ketelsen:** I could try, but I'm getting too old for that crap. \[laughter\]

**Carlisia Pinto:** Oh, I highly recommend you go to the conference in Brazil. It was amazing.

**Brian Ketelsen:** Oh, they're opening their CFP on Monday...

**Carlisia Pinto:** There we go.

**Brian Ketelsen:** Super exciting.

**Carlisia Pinto:** There we go Erik, and Brian, too.

**Erik St. Martin:** Yeah, I need to think of a topic.

**Carlisia Pinto:** And Russ! \[laughs\]

**Brian Ketelsen:** When is GopherCon Brazil? What month is that in?

**Erik St. Martin:** October?

**Carlisia Pinto:** November.

**Brian Ketelsen:** Oh, even better. As long as it's not August...

**Erik St. Martin:** Feel lucky, Russ. Last time --

**Carlisia Pinto:** Oh, I'm sorry. I stand corrected - it's in September. They moved the date.

**Erik St. Martin:** Oh yeah, I remember it shifted... For some reason I thought it was October. But yeah, the last time we had somebody from the Go team on, we had Brad Fitzpatrick on, and Carlisia got him to do something, close an issue or something... \[laughter\]

**Brian Ketelsen:** That's right, she bugged him... "I've had this issue open..." \[laughter\] It was awesome.

**Carlisia Pinto:** I didn't come prepared today... Darn it! \[laughter\] I could have milked something out of Russ. \[laughs\]

**Erik St. Martin:** So I think we are about out of time... Thank you everybody for being on the show. Huge thank you, Russ, for coming on and talking to us today. It's been a blast.

**Russ Cox:** It's been lots of fun, thank you.

**Brian Ketelsen:** We're so excited we finally got you on!

**Erik St. Martin:** And thank you to all of our listeners. If you're not following us, you can follow us on Twitter @GoTimeFM. If you have suggestions for topics of guests, please file an issue at github.com/gotimefm/ping. With that, goodbye everybody! We'll see you next week.
