**Carmen Andoh:** Welcome, everybody, to Go Time! We have a very special show for you today. Today is the 100th episode. Woo-hoo! We have some great guests for us. Your hosts today are Carmen Andoh (me, myself and I), as well as Jon Calhoun.

**Jon Calhoun:** Hi, everybody!

**Carmen Andoh:** And our two guests today are Rob Pike and Robert Griesemer, the creators of the Go programming language. Welcome, we are honored to have you!

**Rob Pike:** Great! Thanks for inviting us.

**Robert Griesemer:** Hello, everybody.

**Rob Pike:** Ken should be here too, but he's on vacation in Greece, so... He wins.

**Carmen Andoh:** \[laughs\] Right. The third -- I tried to get the hattrick, and... Yes, he said that he has a very good excuse, he is on vacation in Greece. We wish we were in Greece first, but we are happy to be on GoTime as a consolation prize... \[laughs\] Maybe. Maybe not.

**Jon Calhoun:** Apparently, our budget didn't allow us to all fly to Greece.

**Carmen Andoh:** Yeah, that would have been cool.

**Rob Pike:** Did you ask?

**Jon Calhoun:** No. I should have, but I don't think the budget would have allowed for that. The budget is pretty minimal.

**Carmen Andoh:** And hello, Robert.

**Robert Griesemer:** Hello, everybody. Glad to be here.

**Carmen Andoh:** Well, let's get started. Let's talk about Go. I guess one of the first things that people wanted to know was what it was like in the early days, in the very beginning, when you decided "Hey, let's start writing a programming language."

**Rob Pike:** Robert, I guess it was kind of my fault, right? I'm not sure exactly how it started, but the story we like to tell is we'd just seen a talk about a new release, a new version of C++, which was the language that most of the server software was written in at Google... And I had been thinking for a while about how inappropriate C++ was, because it lacked support for the new multi-core machines we were getting, and how I wanted to go back to some of the ideas I had explored many years earlier with concurrent programming... And then we were sitting -- Robert and I shared an office, and sometime in September 2007 I think I literally turned my chair around to Robert and I said "Hey, Robert, we should do something about this."

We talked for a few minutes, and then Ken was in the next office, so I ran and got Ken and said "Do you wanna help?" He said yes, and that was it. Does that jive with your memory, Robert?

**Robert Griesemer:** Yeah, so I think the C++ thing came a little bit later maybe - I'm not 100% sure - but definitely it was in September; I looked at my notes yesterday, and I think it must have been a Friday afternoon, or maybe a day before, because we had a conference room for three hours on one of those afternoons where we did brainstorming. My memory is a little bit different. I think you were working on a C++ program that was very frustrating, and you hit another compile-time pause of a couple of minutes, and...

**Rob Pike:** \[04:22\] 45 minutes.

**Robert Griesemer:** Okay, 45 minutes, and you were not particularly happy. And one of us said "We should stop doing this or complaining or whatever and try to do something about it." I guess both of us sort of instantly more or less decided "Yes, we should really do something about it."

**Rob Pike:** Yeah, part of that huge build was also and what I was trying to do was deal with the fact that I wasn't allowed to use threads to solve a concurrent problem in the program, because the C++ libraries didn't work properly in that way, and the style rules forbid the use of threads in the binary. So I was doing gymnastics, which were very difficult to get right, to do what struck me as a very simple job... And then every time I touched anything, I had to wait 45 minutes for another build, on a huge distributed compile cluster. At some point, my morale just broke. We had to do something... But I disctinctly remember turning the chair around and saying "Robert, help!"

**Jon Calhoun:** Whenever you guys started then, did you just immediately go full-time into it, or was this like a 20% type project or something on the side? Because I guess for most people it would be very hard to just drop what they're doing and go work on a language. That's a big undertaking. So what was that like - was it just like a partial "Let me work on this 20%, every Friday" or was it something else?

**Robert Griesemer:** I think we closed the door and started chatting. I actually was thinking about some language stuff for quite a while before that. I had worked in other languages before. I had a lot of ideas that I'd never written down, but they were in my head for a couple of years; I'd been on and off thinking about it... Not really thinking about doing something about it, more like a personal pet project.

For me, it definitely would have not been possible to just do another project, because I actually just had started on another new project, which was the V8 interpreter for the upcoming new JavaScript implementation that Google was working on for Chrome... So for the longest time, in fact, I tried to squeeze this in until I finally managed to get my manager to accept the fact that maybe I wanna do something else.

**Rob Pike:** We definitely still all had real jobs, and so we had to squeeze this in... But I must say that our boss - or at least my boss and Ken's boss - at the time, Bill Coughran who had come with us from Bell Labs, was extremely supportive in the early days to give us the freedom to do a significant amount of time on this, and had to defend us several times from people who thought we should be doing something else. But by about I guess around six months to a year later, I think we were all full-time on it.

**Robert Griesemer:** That's correct, yeah. I'd agree with Rob's assessment here. We owe a huge thanks to Bill Coughran because if he had not given us the leeway to do this, this probably wouldn't have happened.

**Carmen Andoh:** And Bill was with you at Bell Labs, and had already worked with you on several of your other undertakings, Rob, at Bell Labs, so he kind of understood what you were capable of and what you could create if you were left to your own devices.

**Rob Pike:** Yeah, Bill was the best manager I've ever had. He and I joined Bell Labs just a week or two apart in 1980, so we knew each other very well. We both worked in the Computing Science Research Center there for 20-odd years. At some point he rose up to be director of the center. I don't remember what my exact role was when he was a director, but we did work on a major project there; [Plan 9](https://9p.io/plan9/) came out under Bill's aegis, and some other things like that, some more internal networking projects.

\[08:23\] So we had worked together a lot with him as manager, and I recruited him very hard to come to Google, because they needed somebody like Bill, and I wanted somebody like Bill to be my manager. So yeah, he was a big part of it. I think often in these stories people neglect the importance of the right person to help make something happen without actually being part of it, and Bill was really good at that. That's why he was such a good manager.

**Carmen Andoh:** That's great. So--

**Rob Pike:** Go ahead.

**Carmen Andoh:** No, I'll let you.

**Rob Pike:** I was just gonna fill the timeline in a little more. So by April 2008 Ken was working on or wanted to work on a compiler; the first one was compiling to C code, which we then compiled with a C compiler, because that was easier to get started... Although that didn't last very long. And I think in April 2008 - I was in Sydney at the time, and I think Robert came out to Sydney then, and we had a conference room with the video calling set up full-time to Ken's office, who was still back in California, and the three of us wrote the spec together and implemented the compiler. Ken worked on the compiler, I was working on a spec, back and forth for a week or two, I think.

**Robert Griesemer:** Two weeks, yeah.

**Rob Pike:** But that's when the spec happened. Yeah, a couple weeks. So we really started out for six months or so brainstorming and approximate-shaping. One of the first significant things we did - maybe THE first significant thing we did - was we wrote a formal specification of the language, and I think that's a critical part of the success of the project.

**Robert Griesemer:** That's right.

**Rob Pike:** One of the most important things of that was Ian Taylor was also at Google, saw the spec, and decided he wanted to write a compiler for it. So one day he walked into our office and said "Oh, by the way, I've written a compiler for your language." That was an amazing moment for us. He, of course, became part of the team, and he's still working on Go now.

**Robert Griesemer:** Yeah, that was completely unexpected. So in Sydney I think we already had quite a bit written down, but not very formal, and if I remember correctly, we spent quite a bit of time trying to figure out how to do maps right. We wanted to get maps somehow into the language and we didn't quite know how to do it, and I think it was you, Rob, who eventually said "We should try to make them work in 90% of the cases really well, and for all the other cases we probably shouldn't make things more complicated." I think that was a really good decision in hindsight.

**Rob Pike:** I don't remember that, but that sounds like me. We also struggled to get arrays to work well, which became slices eventually.

**Robert Griesemer:** Right. That took a little longer, I think.

**Rob Pike:** Yeah. And I think slices happened when I was in the hospital... Because I had a bad accident a couple months later and was in the hospital for a while. And when I came out, I think slices were just happening then. I wasn't part of that, but I was very happy with the result.

**Robert Griesemer:** Slices were -- I think some of the key ideas were Ken's ideas there.

**Rob Pike:** Yeah, that's absolutely true.

**Jon Calhoun:** So when you say that those things were hard to figure out, was it because you'd seen other languages do it in a way that you thought was not the right way, or was it -- what made them hard, given that you've seen other languages do arrays, and there are examples you could have just copied, but you chose not to?

**Rob Pike:** \[11:50\] Yeah, you have to decide what the semantics are. At least Ken and I certainly came from a pretty C-heavy mindset, so it took us a while to let some of those ideas go. But one of the things C does not have, that I really wanted, and I think Ken and Robert would agree, was we wanted to make sure we had some way to do variable-length arrays, or what we would now call a slice... And how to do that inside of a C memory model is a little tricky.

Clearly, there were a lot of other languages that had done things like these, but we had to decide what the subset or how to choose the behavior of those features that they supported that best matched the model of the language we were trying to build. You don't get a good design by just grabbing features from other languages and gluing them together; instead, we tried to build a coherent model for the language where all the pieces worked in concert. Maps and slices were difficult, because we had to do something very different from the way we usually had thought about those things, at least from Ken and my point of view. Robert can speak for himself.

**Robert Griesemer:** Yeah, so I'm coming from a completely different background. I did not grow up necessarily with C; I grew up with Pascal and its successors... And in one of the successors was Modula 2 and then Oberon they had a similar feature, which was called an open array, which were dynamically sized... But they could only be passed as function arguments, so to speak. So you had an openly-sized array, dynamically-sized array inside a function, depending on the kind of array that you would pass. That was nice, but it was not as flexible as what we wanted, so it took a little bit of time to get from the various ideas from C and maybe from this idea, to get to what we have now.

**Rob Pike:** Both maps and slices have the property, which is not true of anything in C, at least at the base level, which is that the memory representation is somewhat hidden from the user. They come with a more complex structure to hold the length of the array, or the hash buckets for the map, or whatever. And in C you never have anything like that at the basic level language... So that was a challenge. It turned out to be a challenge later, because in order to make slices and maps work properly, they have to be passed as the address of that in a descriptor block, and we struggled with how to best hide those pointers from the user.

For a while they were explicit, but that got kind of uncomfortable, so eventually we just broke down and made them completely hidden. But to do that, we kind of had to change the way memory allocation worked a bit, which is why there's two allocators - new and make. And I was never happy with that; I don't think anybody was really happy with how it all worked out... But in practice it's okay.

It was actually made a little better when Russ came along and decided we could get rid of new most of the time by using an address creation operator on the literals. That tidied up something. So most people only ever see make now; they never see new. This is maybe getting a little specific for this audience, but...

**Carmen Andoh:** No, this is great.

**Jon Calhoun:** That's okay.

**Rob Pike:** ...that's what happened.

**Carmen Andoh:** I think this is THE podcast for that audience. You mentioned a little bit about moments that were surprising, and also moments that kind of became maybe historical points for Go's history. The first is Ian coming and surprising you in your office and saying "Hey, that spec you wrote - I've got a compiler for it." Are there any other moments that you can remember where you feel were like inflection points or turning points in those early years?

**Rob Pike:** Russ joined a little after Ian. He'd been an intern at Google, working with Jeff Dean. He did a code search external launch, which was pretty amazing to do as an intern... And I'd worked with him at Bell Labs. He was the son of one of the other managers at Bell Labs in the acoustics department I think - not in computing. But he hung around a bunch of the Bell Labs kids, and I had known him for a while. His name appears I think in at least one of the books that Brian Kernighan and I wrote... And I worked really hard to get him to come.

\[16:13\] I think I was actually in Sydney, around the time that Robert was there and we were writing the spec, doing a video interview with Russ, telling him what we were doing, to convince him to come and help us... And he decided to come.

So he showed up sometime around the middle of 2008, I think, and joined the team and really had a big effect on cleaning up some of the stuff that we'd left messy, and really helping us push it somewhere. So his arrival was a huge thing.

At that point we were five, and the five of us worked as a group for probably quite a while. I think we only added a couple helper people between then and the launch in 2009. Does that sound right, Robert?

**Robert Griesemer:** Yeah. I think in about 2009 we had at least Adam Langley, then maybe one or two more...

**Rob Pike:** But he was just helping. He wasn't officially a part of the group... Although he did a tremendous amount of work for us. We were very lucky.

**Robert Griesemer:** That is correct.

**Rob Pike:** He did a lot of the crypto work and helped us with the first website... Things like that.

**Robert Griesemer:** Right, right. Yeah, I think we were five or six, yes. There was a woman - I forgot her name, unfortunately.

**Rob Pike:** Yes, Jeanie Kim. Yes.

**Carmen Andoh:** And this was all the pre-open source. Do you wanna talk a little bit about the journey to the big day, November 10th, 2009, when it got open-sourced?

**Rob Pike:** We knew that if we were ever gonna do this, it was gonna be open source... So we planned it to be an open source release. But we wanted to be able to get it right, or as close as we could get to right, before we showed it to the world. It was about two years of work before we launched it. There was an enormous rush in the last few months to clean up everything we were too embarrassed to let out the door, although we didn't get rid of everything...

Those usual issues - launching from inside a corporation, we had to deal with trademarks, and patents, and all that nonsense to get the licensing right. I will say though that Google was absolutely fantastic in its approach to open source software and how much easier it was to do from inside Google than releasing things, in my experience, from inside AT&T. But to do that, we had to decide what the core libraries had to have in them. Adam doing the cryptography for us was fantastic, because it enabled TLS and other such things. Go has actually become a bit of a mainstay for a lot of cryptographic work now, largely thanks to Adam.

We had to do a website, so that people could see it; we had to get the spec into shape, we had to deal with the content management systems... We started with SVN and then moved to Perforce, because that's what Google used internally. But then Git had started to happen. The creation of Go I think predates GitHub, but not Git itself. We ran then a Mercurial, because that's what Google's open source product handled... So we used Mercurial for 2 or 3 years, I think, and then finally switched to Git once it was clear that was the future.

So Go has actually had four content management systems - SVN, Perforce, Mercurial and Git. That's part of loving the community - nothing constant but change.

**Carmen Andoh:** This leads to another good question, which is once you unleashed it to open source, how did that change the dynamics, now that you have a community coming in and giving their opinions and co-creating?

**Robert Griesemer:** Well, I think in the beginning the reaction was somewhat split into "Wow, this is great or interesting" and "This is absolutely horrible." And you take it from there, I think, slowly...

**Rob Pike:** \[20:04\] I think a lot of people didn't understand the point when we first launched it. This didn't look like an interesting language... Interesting in scare quotes. "Why is it like this? Why doesn't it have all these features I expect?" and so on. And the point of the language for us was we were trying to make it easier for us to build the software that we wrote in our day-to-day lives, and we thought that we didn't need all that complexity to do a good job of that.

But once people started to use it -- I think there's still haters out there, but it was gratifying seeing this mood slowly shift from "This is worthless" to "Actually, this is kind of okay" to "Wow, this is great!" It took a few years before things really started to happen.

The first GopherCon was several years down the road after the launch, and I remember the feeling of being in that room with 500 or something people, all excited to be there. It was just an amazing feeling, to think that Robert and Ken and I had brought this people into a room because of something we'd made. It was a really wonderful thing. But we could never have done -- it took those intervening years to get to a community; it didn't happen overnight, it was very gradual.

**Robert Griesemer:** Right, right. It's interesting, at least for me, when I think about the first GopherCon... I think we were not quite sure if this is real, because we had nothing to do with that event, in some sense; we didn't organize it, but we were obviously invited... And when we showed up there, it was not quite clear what to expect. "This is gonna be a big thing? Is there gonna be like 24 people sitting in a room?" And it turned out to be several hundred people and a pretty well-organized event, which was a great positive surprise.

**Rob Pike:** And really fun.

**Robert Griesemer:** And a lot of fun, yes. I think what helped also on that path to that point was that Docker, which became popular a little while back, actually used Go for much of its software. I think that, and probably the first GopherCon, I wanna say gave us the first big break. Would you agree with that? I'm not sure.

**Rob Pike:** Yeah, Docker was kind of our killer app, because it was written in Go, it worked well, and it became central to what is now called cloud computing... Which we used to just call system programming, or servers. And the fact that one of the critical pieces of technology was written in Go justified the language's purpose to a lot of people... And I think it's actually a really good language for that kind of thing; it's exactly the kind of thing we were thinking about when we were putting the language together, although we didn't do that ourselves.

Later Kubernetes was another one that came along, this time from Google. But having significant software written in your language is a really important part of making success happen with a language. It doesn't matter how good the language is if nothing's written in it.

**Jon Calhoun:** Did you guys know that the Docker team was writing it in Go when they started? Were you actively involved with them at all, or was it just kind of a shocker at one point?

**Rob Pike:** No, we weren't involved. We found out about it later. I met Solomon; he was the guy who was working on Docker... I think he was the head of the team, I'm not sure though. Solomon Hykes. He came by the Google office in San Francisco at some point and we chatted, but that was the first time I met him and the first time I really talked to anybody about it. But it was already a very established thing at that point.

I did see a demo of it on a YouTube video after some conference, and sort of could tell this was the future happening before my eyes. It was a pretty big deal. Docker is a really nice piece of tech. It took some work that had been done at Google for their internal system stuff, at the operating system level, and put a really nice user interface and packaging above it to make it actually usable for day-to-day stuff, and I think it was a really nice project. It became a nice, big project, and enabled Kubernetes and all that other cloud-level stuff that we use to run our big systems today.

**Break:** \[24:27\]

**Carmen Andoh:** So after this big break, what were (if you can remember) some of the growing pains, so that now Go is starting to get adopted, and is now the language of cloud computing? Do you think that there's any growing pains that you can think of? Or, alternatively put, is there anything that you wish you could have done differently, given those growing pains?

**Rob Pike:** Well, nothing's ever perfect... There's a lot of stuff about the language I'd like to change, but maybe I shouldn't dig into that here. I do think that the team was not really prepared for interacting with the open source community and what that meant. Ian was the only one of us who'd spent a lot of time in the open source world, and he did more than his fair share of the community stuff.

It took us a long time to understand what it meant to be part of an open source community, to have a project that's essentially paid for by a company, but with a lot of open source contributors... We actually, a lot of fantastic open source development occurred very early. The port to Windows was done entirely by outside contributors, which was fantastic... And the input of the community has been critical.

I think sometimes people think Google controls it too much, and that's their opinion, but I disagree; I think they underestimate how much the team listens to what the open source community says, reads all the issues, handles it all very well... Sometimes not so well, but then it gets fixed.

\[28:02\] It's a really challenging thing when there's thousands of people, and now it's believed to be millions of Go programmers in the world. They all have an opinion about this thing, and how to listen, but also make sure you keep the soul of the project right - I don't think there's any simple answer to that. I think a lot of people think it's trivial, and you just sort of take in what everyone wants... But then you wouldn't have Go, you'd have something else altogether. It's really tricky, it's a very difficult balancing act.

**Jon Calhoun:** I suspect that part of the reason some people feel that way is because, like myself, I work on a website where you can refactor the whole think; or I work on a library that I can just release a new major version. And yes, I might have got the first one wrong, but it's not that hard to change... Whereas you guys are dealing with something that's much harder to change in that sense.

**Rob Pike:** Well, we've made it hard to change. We deliberately wrote down, for Go 1, that we promise not to change anything. And that was critical to the success of the language, because it enabled businesses to trust that what we were doing and depending on us was not gonna break their stuff... And that made it much harder to make changes. I think a lot of people don't appreciate how passionately we believe in that contract. We haven't broken people's programs, even though it's a ten-year-old project now. It's just an incredible burden to carry, but it was critical to get us to the place we are now.

**Robert Griesemer:** That's right. Once we had 1.0, pretty much that's when companies started to jump on it. Before, it was like "It's interesting, cool..." That's also when we stopped making any significant changes.

One thing that we didn't talk much - even though after we had it released in 2009, we still made quite a bit of changes to the language. For instance, the semicolons were still present in our initial release, if I remember correctly. There were quite a few changes that we were able to make, and then after 1.0 that stopped.

**Jon Calhoun:** After 1.0 you couldn't make those changes. Were they still challenging at times, to make those opinionated changes? An example I can give is some people don't like the fact that it gives you a compile-time error when you have an unused variable. That's the type of thing I suspect if you wanted to add it later on, it'd be very hard, because somebody would be like "Why are you doing this? You're breaking my code." So obviously that would break the 1.0 promise. But before that, did you get open source community pushback, or was it relatively easier to do?

**Robert Griesemer:** I don't think we had that much feedback; besides maybe bugs, I don't think we had -- first of all, we didn't have a process in place for feature requests, or things like that. Things like that we didn't really see at that time. Of course, after 1.0 we could not make such changes anymore, just because it would break compatibility and that's something we don't wanna do. We still don't do it.

**Rob Pike:** There were features of Go that are important to its success that people didn't like, and we were very vocal about. I think the one you mentioned, compile error for unused variables, was one of them. It was annoying - you forget to delete an unused variable and your program will compile. But for us, that was part of the story we were trying to tell, which was to make a language that guaranteed better quality code as much as feasible, even though we can't stop you writing bad code... But we can make sure that things don't slip in that will make your build slower, or your code harder to maintain.

\[31:41\] I think the one that really drove people mad was you're not allowed to import a library you don't use. That was vitally important to us, because we had spent so much time with slow builds with massive binaries, making sure that the dependencies of your program are exactly the ones that you need, and no more; it was vitally important to us, but to a lot of people it was just annoying as hell that every time you made an edit and deleted a print statement or something, the compiler would say "You're not using this library. I'm not gonna build you anymore."

And then Brad wrote this thing called `goimports`, which was a variant of `gofmt` that managed the imports for you, and that pretty much silenced that complaint. As is often the case, automation can get rid of a lot of whining.

**Robert Griesemer:** And the point of the imports -- of course, the compiler could figure out easily whether they're used or not, but the point is that you actually see that you're being dependent on something else, and that you're actually visually reminded that you are now adding a new dependency, which was the point.

**Carmen Andoh:** This is a hindsight-biased question, but did you foresee the state of affairs of software reuse that would come 10-12 years later?

**Rob Pike:** No.

**Carmen Andoh:** So this was just kind of a lucky guess, or intuition?

**Rob Pike:** Well, it wasn't about software reuse per se, it was just experience, especially at Google, where we have a massive environment with hundreds of thousands of potential libraries to use in your program, and we had seen certain major efforts to clean that up had reduced sometimes 40% or 50% in the size of a binary, as truly unused dependencies were trimmed from the tree. So we knew that the dependency control was a really important part of keeping your builds clean, and the language could actually help you there. It's one of the rare places where a language can make software better by enforcing certain rules, and it was an easy one. It was very easy, and it was worth it.

But people bitched about it because the compiler would yell at you for something that seemed like an innocent mistake... But we wanted the compiler to accept only programs that were clean. As I say, the community -- we got a lot of mail asking and complaining about it, but Brad fixed it by just making a tool that took away the issue altogether, which was great.

**Jon Calhoun:** Was that the motivation behind tools like `gofmt` and stuff like that, or you were just trying to basically force people to have code that meets some set of standards? Because I know that every other language you see, everybody has different settings for Prettier, for JSON, or anything they're doing - they have some random set of "This is what we use", so no matter where you go, it all changes.

**Robert Griesemer:** `gofmt` grew a little bit out of my frustration as a readability reviewer. Most companies, and certainly Google has a process where we review each other's code, so that all code that gets checked in is peer-reviewed... And much of that review follows a style guide. And if you looked at that style guide for a language like C or C++, a lot of the style guide is full of "You shall indent this much here, and you need to have a white space there" and so forth. Things that have really nothing or not much to do with engineering or the piece of code that you're writing, and just take a lot of time away. So I felt like this is something that we should totally automate. It's just so much time wasted by thousands of engineers basically telling somebody else "You need to put a white space here or not", or following some style guide that somebody wrote.

Formatters had been written in the past, this was not the first time, but I suggested we should do this, and I wanted to do this... And Rob basically said "You know, show that it can be done." It took a while, there's no question about it; it took several years to get it to the place where it is now, and obviously it's not perfect, but people have come to love `gofmt`, even though they hate what `gofmt` does with their style sometimes.

**Rob Pike:** \[35:57\] I think `gofmt` was on the cards within the first day or two. We knew we wanted to enforce it.

**Robert Griesemer:** That's correct, yes.

**Rob Pike:** And full credit to Robert for making it happen, because it was a real engineering challenge. But I believe Go is the first language that enforces formatting through an external tool like this. And there's languages that work differently syntactically. But Go is the first one that says "You run this tool on your program and we enforce that format." And it's influenced the rest of the community. Other languages have propped up; there's a Java formatter that's widely used now, Rust has one, C++ has one through Clang, and I think more and more people are understanding the value of it.

One of the really interesting things that happened in the project from my point of view was `gofmt` was fantastic and eventually was adopted by everybody, but it enabled a kind of tooling that we hadn't anticipated. Because it turns out if you have -- so `gofmt` is basically a main program wrapped around a library that does the printing... And we realized after a little while that if you have a library that can format the code, you can write tools that work on the software and do refactoring automatically, but then generate perfectly valid, neatly formatted output... And that enabled a lot of dynamic editing tools that work directly on the code, and yet produce code that's check-in ready. And we had a number of those.

The run-up to Go 1.0 - there was a tremendous amount of change in the libraries and some details of the language, and there was a program that Russ wrote called `gofix`, that had these little plugin modules that implemented updates to the language or updates to uses of the library... But the amazing thing about that process was we'd issue a little tiny release about every week, and it usually came with a Gofix module that if you were a user of the language, you could update your Go installation and then run Gofix on all your code and it would automatically bring it up to date, totally. So we brought the whole community along. Rather than dealing with compatibility by having features or "if...that", things like that, we made a tool that let everyone bring their software along for the ride, and keep up to date with the changes that were happening. And that was made possible by `gofmt`, but I don't believe we realized that until it actually happened.

**Robert Griesemer:** Yeah, I think this was -- Russ started this.

**Rob Pike:** Yeah. We did some incredible refactoring with `gofix`, of massive scale, particularly inside the Google tree. It was an amazing discovery, and I think completely unexpected.

**Carmen Andoh:** You talk about `gofmt` and its unintended consequences... Tell me about how you think Go influenced the open source world.

**Robert Griesemer:** I definitely think that nowadays -- maybe not specifically the open source world, but let's say newer languages... If you are now coming out with a new language or system, you probably wanna send out with it some kind of formatter. It's become almost a standard requirement. I think the fact that everything is uniformly formatted probably influenced the open source world in the sense that everybody wants to do that, because it actually has some positive side effects such as when you merge against changes, you reduce the amount of artificial changes that are only due to formatting differences... So there's some synergy effects here.

**Rob Pike:** Also, all the code looks the same, which sounds weird, but -- no two C programs look alike, but every Go program looks the same. I think that increases the ease with which you can work with the language, work on a team with others, understand it... That's pretty great.

\[39:58\] Another thing we did was we -- the language was not the first, but it was the most vocal in being strictly UTF8 source code. We just said goodbye to all those ridiculous other encodings. I'm not gonna give Go credit for changing the importance of UTF8 in the world, but I think pretty much every language that came out after Go has the same rules about UTF8 input.

I think it was also important for us - where wish we had more influence was this idea that you write the spec first. I think a lot of follow-on work in other languages could have benefitted from that. I know Rust is only getting its formal spec now; the book is kind of underway, as I understand it... And I find that very strange, that you would implement a compiler without knowing exactly what the language is you're implementing, and having it written down.

The other thing about having a spec is it enables alternate implementations out of the box... There's quite a few Go compilers now. There's ones for Go to JavaScript, there's the one in the GCC/Clang suite, there's LLVM Go, there's the original Go compiler that we're running ourselves for the Go project, and all of those are based on a spec... Whereas if you don't have the spec and all you have is the compiler, you limit what you can learn about what's right in the language, what's wrong in the language, other technologies and things like that. So I think having a spec is not as widely-appreciated as it should be, but I wish it were.

**Robert Griesemer:** I think the difference here though is that with Go we didn't really try to do language research; we tried to come up with a simpler tool based on language designs and technologies that have actually been known for a long time, and we sort of packaged it up in a newer and more modern and nicer way.

A lot of the newer languages - certainly Rust, in my mind, is actually doing language research, so... There's a lot of unknowns.

**Rob Pike:** Yeah, they're trying something very different and very clever, and I hope it succeeds... But yeah, they're trying to solve a very different problem from the one we were trying to solve. What else did we head in, think the influence happened in?

I think our position on compatibility was also a really big deal for the community. We've mentioned it before, but I think others could profit from thinking hard about how they approach forward and backward compatibility with the precision that we have... Because that was a huge effect on us and our community. It makes certain things harder, no question; if you have a good idea, you can't just implement it. If you find something wrong, you can't just fix it... But the stability of the community and all of that software has been really important to the growth of the Go ecosystem.

**Carmen Andoh:** What has surprised you over the last ten years about the software industry and programming language development?

**Rob Pike:** I think everyone's surprised at how open source has become mainstream. I think when GitHub launch - around 2007-2008, something like that, so roughly the same time as Go happened, GitHub happened... Before GitHub, open source was very niche, I think, for a lot of people. But now enterprise software systems almost all use some open source components, and I think it's been a sudden change for industry to change the way it works like this. And it's not just about open source as grabbing code off the web; the whole process of how dependencies are managed, how you do updates, building in distributed worlds, using Git and code review tooling on the web, and all that kind of stuff. All that is new, and I think the open source community has contributed massively to modern software development...

\[44:10\] But it's not just the open source community anymore; the entire software universe is working with these tools now... And that, I think, is completely unexpected and surprising, but it has also brought along some terrifically difficult problems, like dependency management and how you keep your dependencies safe and up to date. A typical Node installation now will have somewhere in the neighborhood of a thousand dependencies, which is just crazy... And I don't think you can say with any confidence that you can trust a thousand dependencies you don't own. How do you know that that code is good, safe, robust, protected, the right time to update, the wrong time to update, the bugs are fixed - all those questions are really tricky. And Go has that now as well. Because it's part of this, it fetches dependencies from the open source ecosystem; the scale of dependency trees isn't quite as big for Go as it is for some of these other worlds, but it's still big. It's much bigger than it typically is for a C++ program, for example... And how do you know what you have is trustworthy?

The Go team is doing a lot of stuff on trying to improve the safety and reliability of grabbing code off the web, but... It remains a problem that surprised everybody when it landed, I think.

**Robert Griesemer:** One of the things that surprised me is how many new languages appeared soon after Go came out... Because around 2007 it seemed like the language world was a little bit stagnated; there was C++, there was Java, JavaScript, but there was not much else.

**Rob Pike:** Python.

**Robert Griesemer:** Python, of course. Yeah, widely used... And then soon after Go there were lots of different languages popping up all over the place, which I thought was kind of interesting. I think the idea that less is more is starting to resonate with more people. I think that's a positive development.

**Rob Pike:** Not with everyone.

**Robert Griesemer:** Not with everyone, yes.

**Break:** \[46:17\]

**Carmen Andoh:** I think the longer a programming language lives, the more it has to fight off complexity, or feature-creep, right?

**Robert Griesemer:** Correct.

**Carmen Andoh:** And so those that have existed for longer, they have to try to -- simplicity is reductive, and yet in order to make things more simple, they have to write wrappers, and super-wrappers, and it's additive, which is kind of an oxymoron... So I think that's also a function of where we're at in the history of programming languages being around.

**Rob Pike:** I think it's a strategic question. You can go the other way. There are other languages. C++ is one, Perl maybe, where the complexity is embraced. I give Bjarne Stroustrup (the author of C++) enormous credit, because he gave the users everything they wanted; they asked for more and he gave them more, and as a result he ended up building a language that was - and it remains - a critical part of software development worldwide. The core of Google is still mostly C++, and a lot of other companies I believe that's true as well.

\[48:13\] That was the exact opposite strategy that we took, which was to lock it down and not change it... And in order to lock it down, you have to trust that your vision makes sense, and it's the right thing to do. And I don't claim that either of those approaches is superior; they're just completely different strategies, and both can work. It's a decision you have to make at some point in your system, which way you wanna go.

**Robert Griesemer:** I find that it is surprising that C++ was getting even more complicated in 2009, and probably still is. And you're right, if you wanna keep backward-compatibility, and even if you add a little thing here and there, over time of course the language is gonna grow. I personally hope that going forward with modules we might be able to curb that a bit, by saying that if you are using version 1.15 or something like that, you won't get some of the features that we think are outdated, or that were maybe not properly or not as well designed anymore, and instead you get maybe something else. So at least that's my hope, that perhaps we can curb that growth and keep it in check... But we will see.

**Rob Pike:** Having tooling helps too, because as with `gofix` - you can imagine a new `gofix` helping us clean up the codebase for the outside world as we move forward... Which is another thing Robert did (related to the gofmt thing); having in the standard library parsers and lexers for the language made it very easy to write tools.

One of the things that came very early from the open source community was requests for an IDE. "Where is the Go IDE? Where is the Go-specific editor that I want?" And it never happened. We didn't create it. There are a couple... GoLand now is sort of Go-specific, but it's really just a version of IntelliJ. Instead, what we had was a really good library for analyzing Go programs and editing them, and the ability for a reasonably-skilled programmer - but not an expert, by any means - to write tools based on that library. So instead of creating an IDE for Go, we created a library that made it easy to write plugins for IDEs. So what happened instead was all of the IDEs now support Go beautifully, but we never wrote a Go IDE. And that's another strategic question. I don't think that one was on purpose. I think it was another accident. We kind of wanted a Go IDE, but never quite felt we were the right people to do it. But instead, it became unnecessary, because of the way that Go's integration with its own tooling works so well.

That's another thing -- Carmen, you mentioned, what have we done; I don't take credit for starting this, I really think Go didn't start it all, but it's a really good example of an ecosystem, not just a language... It came with its own build tools, its own very strong libraries. You can write a production-ready web server in about ten lines of code, right out of the box. The integration with dependency management is different from what people want today, but I think it was there from quite early on. The module stuff now is addressing that more directly. But having the tooling for the language come with the language is an unusual step for a compile language like this. I think Rust with its Cargo system is showing that's really the way to Go. That's a change.

**Carmen Andoh:** Well, we have about ten minutes left, and I would like to maybe talk about Go's enduring qualities. We're about to hit ten years and celebrate ten years... What about the next decade? Where do you hope Go will go in its second decade, or in the annals of history?

**Rob Pike:** \[52:07\] It's already gone further than I thought was possible, so I don't know what I think anymore about where it's going... I would never have dreamed that it would take off the way that it has, and become as large and mainstream as it is. And it's not the number one language in the world, it never will be - it's not meant to be - but honestly, the success of it has just been mind-blowing to us.

**Robert Griesemer:** Yeah, I totally agree. I don't think we could have foreseen this. I think only time will tell where it's gonna be in ten years.

**Carmen Andoh:** Do you think it will stand the test of time?

**Robert Griesemer:** It depends on how long that time is, I think. We're ten years in - 12 years really, from the start - and it looks pretty good. But things can change. I think we improved a lot our approach to the community. Our community is growing, the community feels like we're a welcoming community. I think a lot of this goes back to initially all the work of Andrew Gerrand, who did an enormous amount of community work in that respect, and set up the community code of conduct, and things like that. I think that's an important aspect. And then, of course, there's the language, and the libraries, and stuff.

Russ' work on modules is a tremendous step forward. It's what we originally somehow missed a little bit; we didn't really look into the vendoring and dependency issues very well. I think that's something that the industry wants to see, and they're pretty happy with it.

I think these are some big steps that we have taken in the last couple of years that are in the positive and right direction. And I think there's the big elephant in the room, which is generic features... And I think we're zooming in on something, but I don't think the last word has been spoken, nor do we know whether we wanna go there yet, for sure.

**Rob Pike:** Whatever the legacy of Go as a language and ecosystem is, I think the influence it's had will stand the test of time. I think because of Robert's `gofmt`, it's pretty much now accepted that most of the work of laying out your code should be done by a tool, not by a human. I think that the focus on getting a spec right and thinking about making sure you have the right features is a big deal. Forcing UTF into the language spec, doing a lot of the things we mentioned before - they have an effect. The way that we do code reviews as part of the standard process - not just pull requests, but we actually do a full review, with a nice tool suite... That kind of thing.

We've had conversations with other projects. We wanted to know how we do and how we accept community contributions, and sometimes they were surprised that we look at them first, rather than accept and then clean up later. It's just an attitude thing; we wanna make sure that everything that goes into the system is the highest quality it can be. That approach is not universally-liked, but it works very well, and I think a lot of other projects have learned as well to think about the health of your project, not just the feature set and the users that you're gonna get by adding them.

So there's aspects of our ecosystem that are not necessarily seminal, but have some influence over the way the systems of the future will be built, whatever happens with Go.

\[55:49\] Go is still growing as a community, and who knows how big it'll get. As I said, I don't think it's gonna be the number one language ever, or even close to it. One place where it has not established much of a beachhead is education. I'd like to see it. I think it will never really become a major mainstream language until it's taught in universities... And that pretty much hasn't happened yet. There's a little tiny bit of it, but not enough. And now that Python has pretty much become the de facto language for everything except systems software, I think Python is the language of the future that you should probably be talking about.

**Carmen Andoh:** Hm... Which is a shame, because I took computer science, but I really didn't like it; and I tell everybody this story. I just wished that I had Go, because I do feel like Go is a way that we can completely rethink about how we teach computer science.

**Rob Pike:** Well, most scientific software development now is done in Python... And it's fine, I have no problem with that whatsoever. But because of that, and because a lot of general software education is done in Python, it's very difficult to get a language that's so much crisper and close to the machine into the standard curriculum. And I'm not complaining, it's just the way it is.

I would love to see Go used in teaching. Not necessarily as an introductory language, but as part of the university curriculum. But so far it's really only happened in a few specialist courses.

**Robert Griesemer:** I think one of the problems with universities is that they have this mandate almost to teach students what industry wants, which is really not what has been done when I went to school. When I went to school - I'm talking about computer science - we learned about techniques and different kinds of languages, and different kinds of ways of doing things, which were not necessarily closely related to what the industry was doing at that time, which was probably COBOL or C. So as long as that doesn't change, it's gonna be difficult for universities to really broaden that perspective, and use other languages.

Python is of particular interest right now because of machine learning. Python allows you to easily connect with essentially C libraries, and it's just at the top level.

**Rob Pike:** Well, also Jupyter Notebooks are an absolutely astounding thing, that I wish I had when I was a student.

**Carmen Andoh:** Hard same! That would have been just life-changing. Well, Jon, do you have any more questions for Rob or Robert?

**Jon Calhoun:** I guess the one I'd like to ask about is you guys mentioned earlier that when you went open source, you weren't fully-prepared for that. It was like a learning phase to get involved with that. And I think at least for me, I know the first open source project I released, the biggest issue I made was probably the opposite of what you guys did, where I basically took everything and anything people threw at me, because I was so excited that people cared enough to want to do something that you just kind of like take it all... And maybe three months later I'm looking at it and trying to maintain it, and I'm like "This is really hard to maintain", because I made that mistake of just taking every feature; everything I could take, I did. And you guys had the opposite mindset. Were there any other things like that - if somebody's looking to get into open source, to start branching out of that - other takeaways that you guys would say are helpful to think about, that maybe aren't obvious?

**Rob Pike:** Well, I think the code of conduct business, although it's very controversial to some, is a really important part of having a community. I think people need to understand that it's a respectful community and trolls are not welcome... Especially nowadays it seems even more important to say that out loud, but I think it's a vital part of having a healthy community.

\[59:53\] From a technical point of view - yeah, you've gotta keep your eye on the prize. If you let bad features or too many features come in without control, you will end up with a very difficult to maintain piece of software. But it takes a lot of work to engage the community when they're pushing for something that you're not comfortable with, and making sure -- and you will drive people away. Someone will send you a pull request and you say "You know what, I don't want this", and you'll explain why, do a good job explaining it, but they may still feel that you're just wrong, and be offended and take their toy home. So you have to be prepared to be as pleasant as you can while saying no, and that's gonna be very difficult.

**Robert Griesemer:** Yeah, I think that's exactly the point. You basically wanna be firm, but polite, and you wanna make sure that people feel like you're listening to them, validating basically what they're saying, but that doesn't mean that you have to take every single piece of suggestion and implement what everybody else wants. I think there's a point there.

**Rob Pike:** But that said, a lot of stuff will come in that is great, but just needs to be refined, polished before you accept it. And if you engage well and politely, and explain what you wanna change, you will win an ally if their stuff lands, and it'll make the system better by having another person on board who wants to help.

**Robert Griesemer:** And the other way around too, by the way - if you can convince somebody why some feature request is maybe not a good idea and you can convince them, then you have an ally too, because they realize "Oh, okay, these people are really thinking about this stuff."

**Carmen Andoh:** Any advice you wanna give to this new generation of gophers, any last words from the two of you before we close out?

**Rob Pike:** Enjoy it! One of the words we used early on - we wanted to make programming fun again... Because it had become - certainly for some of the stuff I was working on, and probably Robert as well - just a slog. 45-minute builds, and one-line edits causing massive changes through the system. We wanted something that felt lighter, and I wanna make sure that we remember that programming can be a fun thing.

Working in cloud development environments now - there's so many moving parts. It's getting complicated again there. Make sure you focus on the right changes, and the right way to do things to keep things nimble and adaptable and fun to work with. More is not always best. Sometimes doing things leanly can be a better way to move forward.

**Robert Griesemer:** Yeah, I think it's important to keep an open mind and think a little bit outside the box. Just because something has been done in a certain way for five years doesn't mean this is the right way. I wanted to harp back a little bit to what I said before about languages and education... Today most people have seen maybe one or two languages when they go through a formal computer science course. Java is probably one of them, Python is probably one of them, but they're kind of in the same kind of world of languages.

Few people have seen some of the truly different languages in the past, such as Lisp, or Scheme, or Smalltalk, where things are completely different (or functional languages) than what mainstream languages are doing. Those languages give you different ideas and ways of thinking about stuff that might change your perspective. But most of all, I think we wanna make sure that we keep complexity as low as we can. We really have to keep it as simple as possible... And it sounds like such an easy thing. Everybody has a different idea of what's simple, but it's really hard. You wanna keep it as simple as possible under all circumstances, because it's gonna bite you at some point.

**Carmen Andoh:** Sounds like a new KISS acronym, extended. It's great. Thank you both, Robert and Rob, for being with us here today, and celebrating this 100th episode of GoTime. We really feel honored, and it was a pleasure to have you.

**Rob Pike:** Thanks for having us.

**Robert Griesemer:** Thank you.

**Carmen Andoh:** This is Carmen. Until next time, thank you, everybody.
