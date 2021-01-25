**Erik St. Martin:** We are back for another episode of GoTime. Today on the show we have myself, Erik St. Martin, Brian Ketelsen is also on the show today...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And Carlisia Campos.

**Carlisia Thompson:** Hi, everybody!

**Erik St. Martin:** And our special guest today, although he needs very little introduction, is Dave Cheney. Say hello, Dave. Why don't you give everybody a brief introduction?

**Dave Cheney:** Hello there! My name is David, I am a Go enthusiast from Sydney, Australia. I've been involved in Go for many years, and I love the opportunity to be involved with the language and get involved so early with something I'm so passionate about. Hello, everyone!

**Brian Ketelsen:** It's kind of amusing having you introduce yourself, while one of the things we found at GopherCon just a month or so ago was that nearly everyone that we talked to learned Go from your blog. Out of the 1,500 people that were there, 1,499 of them listed your blog as one of the resources they used to use Go. So it is kind of embarrassing to introduce you, but we feel it's necessary.

**Dave Cheney:** Yeah, it was great to meet so many people at GopherCon. It was really touching the way that everyone was like, "Oh, I love to read your blog!" It was really touching. Five years ago, I never started out to be an author, a blogger or a public speaker. Just like every good engineer, you think "Oh, I've run into this problem so many times! I can solve this by just writing it down once and then I can give people the URL." That's kind of how I got started.

**Brian Ketelsen:** A question on that - did Go encourage you to find your voice, or did just becoming a better engineer encourage you to find that voice?

**Dave Cheney:** It's kind of like the question, "Does the tail wag the dog, or does the dog wag the tail?" I joined Canonical about four, five years ago, and we were encouraged to communicate on IRC all the time, so it was a great opportunity to moonlight in the IRC channel for Go. At the time Go 1.0 was just barely out and there were so many questions people had, and they would come into the channel all the time and ask the same questions. As I said, I tried to solve this problem by just writing it down, and I'd give people URLs. Then around the same time... So Go had supported Arm - I knew this, and I found a really cheap Arm box in Australia. One of the magical things about Australia is that we don't have access to Raspberry Pi's ant things like that; it's always hard to get equipment, so when I found this, I was like "Can I install Go on it?" I could, and that became the very first builder.

I was so excited about it, I wanted to tell people "Hey, you can run Go on this kind of hacked up Ras." That was one of the first things I wrote on my blog. Then it just went from there.

**Erik St. Martin:** In addition to all the blog writing, you've also contributed quite a bit to Go.

**Dave Cheney:** Yes. As I said in my introduction, it was kind of like this opportunity to get involved at the ground floor. All you needed to be involved was spare time, and it's just snowballed since then. You know, that kind of "see a need, fill a need" kind of thing.

**Brian Ketelsen:** \[00:04:01.15\] For years, you've hosted the unofficial builds for the Arm platforms on your website, and I think it was not too far in the past when Go started making the Build Dashboard and actually having builders that were hosted in-house. But I think for the longest time, all of us that used Arm boards with Go were downloading Go directly from you, which was awesome and we all appreciate it. Our Raspberry Pi's definitely are thankful for that.

**Dave Cheney:** I really think Arm is really special. I know Intel rules most of the server world, but Arm has a really special place. It's so simple, it's such a beautifully clean instruction set, rather than the Intel mess. Just like I appreciate Go for being simple and minimal, I really appreciated Arm for being all the same things. The story for how to build an Arm distribution, and mainly a lot of the magic about Arm machines is they're usually pretty weak, especially if they're on 5.1. A lot didn't have the opportunity to build Go; cross-compiling used to be quite difficult, as we all know. That was just something I could do. I reached out to Andrew and said, as long as I'd put a big warning at the top I'd be happy to maintain those builds", and he was happy, too.

In the last year, we've managed to get real builders using places like Scaleway. I think Scaleway hosts all the inter-builders. Now we have real builders in the dashboards, which means that the Go project can produce a real tarball for everyone to use, which is exactly what I wanted. It's graduated from being a side project to being something that's fully supported by the Go Team now

**Erik St. Martin:** I think the blog post I'm waiting for the most is the "How does Dave Cheney make more time in a day?", because... \[laughter\] You have a day job, you contribute to Go, you contribute to proposals for language changes... Recently you've been traveling a lot, doing talks at a lot of Go conferences. How you make time for that is just astonishing.

**Dave Cheney:** Yeah, it's a pretty full schedule. The magic of Australia is that it's a day or two on a plane any way you want to go. I don't know, I've always been very lucky. Canonical was extremely supportive of me, working on Go, and they even sponsored Arm and I to work on the first cut of the Arm 64 board. That was great, that my day job could become the thing that I love. And yeah, you just find time in the weekends, and after work, and you just integrate it into your life. I'm really lucky that I've been able to do that.

**Brian Ketelsen:** Well, on behalf of all of the people across the world, we all really appreciate the effort that you put into proselytizing Go, teaching everybody and building community. I don't think the Go community would be the way it is now without you, so thank you.

**Dave Cheney:** Thanks, Brian.

**Carlisia Thompson:** Yeah, I thoroughly agree with that.

**Erik St. Martin:** I have to add my name to the list of people who learned a ton from Dave's blog, especially in the early days. When Brian and I were starting out, in late 2011, early 2012, there wasn't a lot of content out there.

**Dave Cheney:** I feel really lucky and privileged to be able to do that, because it was this base that I could fill up with words. There were some great things to say about Go. I was learning a lot about it, and I wanted to tell other people about it, and there was just an opportunity.

\[00:07:55.28\] If you had met me, as I said, five or ten years ago, you wouldn't have picked me for any of these things. I don't know whether I've had to learn them or whether I've been lucky to learn to be a public speaker. I haven't done any public speaking since high-school. I thought when I graduated I can just throw away that bit of my brain, like "I'll never get to do public speaking or debating anymore", but I had to learn how to do that again. A writer? My father is very impressed by that. He was like, "Your writing has improved so much."

As an engineer, leaving high-school, I thought "Non-fiction writing - who needs that? We just need code."

**Brian Ketelsen:** \[laughs\] Well, I think we've spent 14 minutes now on Dave Cheney fanboyism, so why don't we slow down on the ass-kissing session for just a minute and talk about some of the really cool things that you've done lately. You gave a great talk at Golang UK last week about solid design. Why don't you tell us a little bit about that?

**Dave Cheney:** The meat of that talk - the solid design principles - came out of a presentation I did a couple months ago in Perth to Dave Thomas' YOW! group of conferences. That talk was to a group of people who didn't really know Go; it was a mixed bag of technologists, most of whom were very passionate about functional programming. So I had an opportunity to take this talk and kind of redo it for a home team crowd, and I wanted to make it interesting for the audience, and say why should you care about these things, not just presenting an abstract I wanted to wrap it in a bigger request. If Go is going to be a language which companies invest in, they build products in and they use them in their infrastructure, they're going to be investing in them for 10-15-20 years.

My bigger message was that Go programmers need to start thinking about how programs are designed, because the alternative is that we'll just become the JavaScript framework of the month, and possibly replaced by something else. But if we think about design and more importantly talk about design, develop a language to talk about the design of programs, rather than just moving from the next fuss - HTTP right to the next one - then Go has a chance to be a language that people want to use the programs that are written in 10-15 years.

**Erik St. Martin:** So Dave definitely listened to this show, because Brian rants about the number of HTTP routers about every episode. \[laughter\]

**Dave Cheney:** The other talk I gave at Golang UK was about how to write faster Go code, so I might be a little bit hypocritical in dumping on people who are writing HTTP routers, but the bigger picture is that the Go code that we write today has to be maintained, it has to be changeable; it can't just be something which solves today's need. It needs to be maintainable for the long term.

Otherwise, maybe in five years people will be like, "Oh, this Go code... It's not maintainable. What are we gonna do?" and they'll rewrite it in something else and continue that search for the next thing. To be an investment that a company is gonna make for a decade or more. The maintenance of the program is far more important than just sticking the prototype together and seeing how fast it goes.

**Carlisia Thompson:** \[00:11:38.02\] There is another aspect of thinking about design. For me, it does take effort; it does take effort in you learning what good design means. But once you start learning it, it makes coding easier. For example, when I started learning Go, I would think "Where do I put things?" and I see people asking that all over the place - "Where do I put things? Where do I put my models? Where do I put this? Where do I put that?" Well, if you take some time and think about how to design your interfaces, how to design your packages, how to organize everything, if you start thinking about dependencies - that question gets answered automatically, and you end up with good code.

There are multiple layers and multiple reasons for you to think about design, I think.

**Dave Cheney:** That's exactly right, and you touched on a really important thing - you just said "good code" there, but that's super subjective. What is good code? Well, I like it to look a certain way, I like to have long identifiers, I like to call my receiver this, rather than the single letter that we're used to, because that's how I used to do it. What I was interested in talking about in the UK is what if we had a different language to talk about design, that was not so subjective, like "I like this, I prefer it to be a certain way"? One that was more objective. And that's some of the ideas that Martin's solid principles talk about; they're not less opinionated, but they came from a point of saying, "I like this because it is easy to modify. I don't like this because there's a lot of coupling with the other types in the other packages. We can say it more objectively."

The thing Martin says about the solid principles is that they're not rules, they're guidelines. You can say every now and then, "Look, I should be honest in all my dealings, I should be truthful with my friends", but sometimes you have to bend the rules, tell a little white lie, those kinds of things. When you talk about design principles, you can say things like "I don't like this because it's quite tightly coupled, but this seems like a reasonable trade-off to achieve our objective."

It's interesting to talk about design using those kinds of words, rather than things like, "I don't like that. That code should be more beautiful", or "I don't like it, it should be shorter." These are not really actionable to have in a wider design context, because everyone's ideas are different. "How short is short? How beautiful is beautiful?" These become subjective and the subject of arguments.

**Erik St. Martin:** Right. Some of those things that people point out are more from an aesthetic standpoint, and it's like art - what I appreciate is gonna always be different from what you appreciate, but I think we can both agree that two highly coupled components are hard to maintain. We can collectively agree on that. I think talking about this at this objective level makes a lot of sense, and it's one of the reasons why I loved Ruby a lot when I came into the Ruby world a few years ago, because these were the conversations that people were having all the time, or about the Law of Demeter, coupling and cohesion, and things like that.

I really appreciated that people were talking about making clean abstractions and maintainful code, so I like the idea that we're starting to talk about that in the Go world, as well.

**Dave Cheney:** Yes, absolutely. I think it's critical, because if companies are going to invest in the long-term -- and they have started. We have Docker, all the CoreOS products, all the HashiCorp products, Kubernetes - there's an investment. But to make that investment pay off in the future, it can't just be just smashing out code as fast as possible. There has to be some fundamental design so we can change the code in the future, as the requirements change.

**Brian Ketelsen:** My question is, if there's a maturity model for Go as we evolve into a more popular language and a more well-adopted language, does that mean we have to go through some ugly growth phases, like Gang of Four patterns and Enterprise JavaBeans? What does our maturity model look like in Go?

**Dave Cheney:** \[00:16:09.16\] Does anybody else want to jump in while I think?

**Erik St. Martin:** Sure. I think that Gang of Four is probably a little too far. I don't think we want to get into that, because the language is specifically kind of designed to prevent that - this whole inheritance chain and things like that. But I think that there are some lessons to be learned. Most of those abstractions were built for good reasons. Abstracting away, creating clean interfaces and things like that, and I think that we can do that without having to have that many patterns.

To Dave's point, there should be objective goals that we're trying to achieve, and not necessarily set in stone patterns; that would be my take on that.

**Dave Cheney:** I did have a section in the talk which I cut because I didn't have time, but mainly because I had a lot of pushback on it. I start the talk by saying, "Who does code review? Why do you do code review?" Somebody yelled out, "To find bad code", and that's really the hook there. I continued with, "So the patterns book - does that tell you how to write good code?" My assertion was, "Perhaps not. Perhaps in the bigger context they're called patterns because you apply them like a sewing patterns, or like a recipe. When you have a particular problem, you could use a set of those solutions if they fit." But I think talking about design and principles - to take Martin's word - are higher-level notions of "What is the goal?" and not "What is the problem I'm solving now?" And if the goal is to make the code maintainable - and by maintainable I mean changeable in the future, a thing like a visitor pattern or an iterator pattern isn't gonna give you the vocabulary to talk about that. That's just a point solution.

**Erik St. Martin:** Yeah, and I think it also limits the possibilities. If we always refer to "You need to use one of these patterns", I think that it also kind of closes off creativity, but I think that we can generically talk about things. These two components should not be couples together.

I always mix up the two books... There is another book called Clean Code by Bob Martin as well, and then there's The Pragmatic Programmer: From Journeyman to Master - both of those books I really like. They have a lot of unique ideas. They show you that if one type seems to know too much about another type, maybe you have the function in the wrong place, and things like that.

We could talk about these at a very high level without having to go into, "Oh, this is a visitor pattern" or "This is a decorator pattern", or flywheel, or any of the other ones in the Gang of Four book.

It's actually kind of interesting... I haven't had to think about the Gang of Four book in a number of years, since Java. And that's a good thing too, because I succinctly remember a piece of middleware that I swore somebody went through the book and found a use for every single pattern in the book. \[laughter\]

**Dave Cheney:** So here's the weird thing about the patterns book. I guess it was written in the mid-to-late '80s, probably in the '90s... At the time, people - and I'm kind of gesticulating to the luminaries who thought that it would just be the first of many books; they thought there would be patterns in everything. Every year there would be Patterns - 2005, 2006, just an endless supply of them. But it actually turned out that the 30-odd of them that were in that book are pretty much all there are.

\[00:19:52.06\] It's not because \[unintelligible 00:19:51.17\] Demarco and his friends I think Gamma sat down and thought up 30 patterns, and then they were like, "Okay, we've gotta do a second edition of the book." They observed them in code that they were looking at. They kind of got it back to front - they looked at this wide body of code and tried to find commonalities, and from there they extrapolated a patterns book. But they could never find more patterns, because there are a finite number of them. They're kind of like a law of nature - you can't invent new laws of nature; they're just there.

That really kind of set the patterns book as being the start of a way that we're gonna describe every piece of software design; it became this one point in time, of these couple dozen observations about software at that time, written in the '80s.

One of the things about my talk - and I was very inspired to do it ironically in London, because Jim Warrick's talk from 2007 starts with talking about the Great Fire of London and saying then when they were going to rebuild London, they had all these proposals for how to rebuild London, and these questions... What he opened his talk with was, "Looking at all these different plans for how to rebuild London, how do you decide what's a good one? Looking at all the architects in this room, how do you decide which one you'd like? What is the right design to rebuild London?" And again, without language to describe what is good architectural design any more than what is good software design.

**Erik St. Martin:** Yeah, that's interesting. We could say the same about algorithms too, right? There's a lot of clearly design algorithms that have really good use cases, and we reach for that bag of well-defined algorithms based on need, but sometimes based on things we know about how things scale, and their performance, and how clean they are, we also are free to make our own choices, right?

**Dave Cheney:** Yeah, to talk about algorithms - what is the meta language that we talk about algorithms, the big O notation, what is the time and complexity versus the space complexity? A link list has better space complexity, but poor time complexity, and also in the current hardware it has even poorer time complexity, versus just the vector. So the metalanguage to talk about algorithms are these concepts of time complexity and space complexity; it's space versus time trade-off.

**Erik St. Martin:** Unfortunately, that's a lot more measurable than these concepts we're talking about now, with how coupled is something - that's hard to measure.

**Dave Cheney:** Yeah, yeah. But there's still probably an argument... You could compare a hashmap to just an array of items. For really big hashmaps and really big arrays of items, the lookup time is O(log n) versus O(n). But for really small ones, that n is really small, so it doesn't matter. These are the subtleties... If you're saying, "Well, we always have to use a hashmap, because hashmaps have faster lookups" is ignoring the fact of... Say HTTP had a map - is it ever gonna have five things in it? What's the overhead of setting up that hashmap, hashing all the items, versus just doing a straight linear search. HTTP headers only have five or six items in them, usually.

So those are the kind of design decisions you can talk about with space and time, the big O notation. That was the thing that I wanted to get people in the Go community talking about - talk about design at a high level, rather than just posting on Reddit, "Hey, what's the fastest way of framework? What's the best HTTP?" I wanted to see people starting to talk at a higher level, start thinking about "What is the best way to design my application to make it maintainable in the future? Make it maintainable and reusable, composable."

**Erik St. Martin:** \[00:24:06.16\] Yeah, I'd love to see more conversations along these lines, too. I've been developing Go for a number of years and I still struggle with package layout. At what point do I split things up into separate packages? When do I make sub-packages? How we have 'io' and then 'ioutil' and things like that. I'm still trying to abstract these patterns from common codebases that I see, and come up with my own rules of thumb. Having more conversations like this, more people talking about it I think is a really good thing, because I think a lot of people can learn from this.

**Dave Cheney:** Yeah, the standard library is a double-edged sword. For authors like yourself, or anybody who wants to give some advice that won't change the next week, the standard library is really good, because it's gonna be the same for five or ten years. We can give this advice and know it won't be out of date soon. But the thing about the Go library is that it contains one of the most well reviewed Go code in the world and it's written by the best Go programmers at the time. It's also some of the oldest Go code and it has some inconsistencies. You can look at it and pretty much prove whatever side of the argument you want to make. You'll always find an example in there that supports whatever argument you wanna make.

That's tricky, because what is one of the three things that we tell new Go programmers? Go do the tour, go do the language spec, go read the standard library. That's not as clear a guidance as I think we'd like.

**Brian Ketelsen:** Well, some of the problems with the standard library is that pieces of that code were written before we knew what could Go code design look like. It evolved with design, and we - the Go community - didn't take the time to go back and change those things in the standard library, for various reasons. So I agree, it is interesting to see some of the variances in style, especially in the standard library, based on the age of the code.

**Dave Cheney:** Yes, absolutely.

**Erik St. Martin:** Yes, and how you talk about things changing and evolving was based on what we knew at that time. One of those things that you've been also doing talks about and advocating is error-handling. I think before we shift over into that, we should probably break really quick to do a shout out to our sponsors, and then we'll come over and start talking into error changes.

**Dave Cheney:** Okay, cool.

**Break:** \[\\00:26:43.01\]

**Erik St. Martin:** We were talking about the standard library and evolving it based on new knowledge gain from years of writing code in what is the 1.0 spec. Some of the stuff that we're starting to see and one of the topics you're primarily advocating is the way error handling is done. It seems like some of the sentinel error value and just returning up the errors seemed to be good enough as the language was evolving, but I'd like to talk a bit more about your new approach. You did a talk at GopherCon about it, and you've got your own package to be used to help with error handling. I'd like to talk a bit about that.

**Dave Cheney:** Sure. First of all, before I say anything, I need to be very clear that I understand a very small amount above the shoulders of many giants who've done a lot of work before. The errors package that I wrote is directly influenced by the one that we wrote at Canonical for Juju, which is based on Roger Peppe's work from earlier. There is a long lineage of this idea evolving, which is something that I also see in other areas in Go. Not to get too distracted - for example two and a bit years ago Rob Pike wrote about functional options. I thought this was such an amazing pattern that I went and talked about it at dotGo, mainly because I didn't think people gave Rob's post enough credit; I thought it was a brilliant idea and it just kind of flew under the radar.

I got on stage and talked about it at dotGo. The idea keeps percolating, and the latest evolution of it is in gRPC - they used that heavily in the constructives for all the gRPC types, the formalization around the naming of options and the name they're gonna call it. What I see in the broader perspective is there's kind of an evolution of these ideas, which is how it should be.

To talk about errors is kind of two stories that sit side by side. The first story is that I've written a lot of blog posts about how I think error handling should be done, and this is separate from stack traces and things like that. In fact, embarrassingly, I actually wrote the same blog post twice, about a month in-between. I even gave it the same title. When it showed up on Reddit, people thought it was a cross-post. The big picture there is that I'm trying to push forward heavily this idea that if there's an error return from your function in general - and there are always exceptions, especially when you're dealing with the network and retriable things - you should try to basically say, "This error happened I don't know anything about, anything about the details. I just need to go through my cleanup behavior and then five the error back to the caller." It makes the code and the design so much simpler and so much more decoupled to just say, "An error happened. I'm gonna clean up whatever I was doing in this function", and most times that's almost nothing, because we have nice, small functions that are well-facted, and then you just give the error back to the caller. "I don't know what happened. I'm cleaning up and I'm gonna give the error back to the caller."

I've talked about ideas of rather than checking the error matches a particular value, or the error is a particular type, you should instead try and think about it as, "Okay, if I need to know something about this error - is it a temporary error? Does it fit the temporary interface? (which you get from net dot com or you can define yourself)." That leads to much loosely-coupled way of error-handling. I don't know anything about where this error happened, I don't know whether it happened in my direct call or whether it happened hundreds of stacked frames down. Something happened, I'm gonna clean up and hand the error back to the top.

\[00:32:06.06\] That's a way for designing Go programs that deal with errors in that fail-fast kind of way. At every stage you're not trying to, "Oh, something went wrong. I'm gonna look at that and see if it matches a dozen of the kinds that I know about, and in those particular cases I'm gonna retry, or I'm gonna adjust some timer and then do it again." No, just blow up. Just blow up, give it back to the person above you, maybe they know how to do it. Hand the error back. Fail early, fail fast, because we know that's the way to write reliable software, this idea of crash-only software. If an error happens, just quit; something will restart you, try again. That's one part.

**Erik St. Martin:** In the case the temporary check - I know in your talk you kind of brought that up - do you advocate that if it's temporary people do some kind of exponential backoff with some backpressure to eventually fail out? Or are you advocating just always return and pass up the chain and handle it at the highest level possible?

**Dave Cheney:** It's always a trade-off. I think in the places where your code does actually know it's dealing with a network -- this is to come back to the idea that you want to have modular design; the way that your modules interact with each other are interfaces, rather than concrete types. In the case that your code does know it's dealing with the network, you're actually writing an HTTP server or you're writing the SSH package, or something like that; something that will most of the time actually work out with the network. You have the simplest knowledge that when a particular call operation does fail, it could be because the DNS just flaked out, the network flapped or something like that.

Often times when you're working in this time when you're working with another package. You don't know where that came from - it could be a buffer, it could be a file on disk, it could be anything. It really depends on what is the goal of your package and to take that responsibility and just wrap up. You can image that the HTTP package knows a lot about the network. There's even things that we're trying to do in 1.8 to retry HTTP operations if we think that they're safe to do so. It's a GET request, it didn't have a body, there was a temporary error trying to make the connection. Maybe in that circumstance you can retry, but all those kind of caveats mean that you know a lot about the environment that that package is operating in.

I think it general you don't know have that kind of visibility to how your package is working. Many times perhaps you shouldn't; perhaps you should try and treat them more like black boxes, because that makes them easier to just clip together. There are less implicit agreements between code; they have to be explicit, or they're just opaque.

**Erik St. Martin:** I guess that makes sense... Because even if you think about it from the network concept - what are you doing? Some temporary error may have occurred, but you can't guarantee item potency, right? You could retry, but that may cause some undesired effect on the other side because it half-completed, or something like that. Retrying is always hard; you really have to understand what the system is doing and potentially check state and make sure that something didn't get half-committed before retrying.

**Dave Cheney:** \[00:35:46.25\] Exactly. In those situations, it shouldn't be so easy to just blindly put in a retry. You perhaps wanna think about how this operation fared. That means that you need to know very intimately about all the parts of the code downstream for you, which means a lot more coupling, a lot more knowledge of the components that you're building on top of. There are certainly cases to do that; I think they are less widespread than people think, and in general you want to try and compose your programs out of small pieces.

To give an example, the SSH package, which built on top of networking public keys, SSH agents... The interfaces that those types implement are just the usual read/write closer. We worked really hard to make the con interface and the session interface look pretty much like a read/write closer or a similar thing that you get from os/exec. People don't expect os/exec phase to be retriable, so we don't really expose those either. That's all from the point of view of building packages that interoperate at a very high level. They don't know a lot about each other apart from the interfaces.

There's a separate part of error handling, which is when error does happen, how do you tell the developer or the operations person -- what I was saying earlier, you just kind of wave your hands and say "I'm just gonna give the error back to the person above me, the code above me. It will figure out what to do."

Eventually, you're gonna reach the top of your function or the main handler of your web server or whatever it is, and if that is gonna come to you, you're gonna have to figure out what happened. In that case, you want to get as much information about the error that happened. You want to encode as much information as you can; preferably, you want to get a stack trace or something to point you to where the error actually occurred. Because as a developer, I'm gonna get a bug report, and if it just says, "Failed to request I/O.EOF" - where did that come from?

So the second part of error handling is using the fact that the error is a value, and we've just talked about it from the caller's point of view - just making it opaque, just making it, "An error happened" and you don't know anything more than that. Then we can use this fact and we can stick extra information into it. For a long time, the tradition has been to use fmt Errorf, put in a little prefix and then print out the error. Then annotate the error all the way up, so you get this kind of string that's growing, with a little bit on the front every time.

That's been a pattern we've seen in the standard library a lot, Donovan and Kernighan talk about it in their book... There's a lot of Go code written out there, "if err != nil {fmt errorf} some description that says what happened, and then the text of the error. \[\\00:39:06.14\]

And that's good, because at the top you get what Roger used to call 'breadcrumbs' of "This failed because this failed/because this failed/because this failed/because this failed", and you can kind of grep for those little individual strings and kind of manually construct a stack trace of where you were in that code.

That's good, but it has problems that... There are cases -as few as they are and as many as I would prefer they weren't - in the standard library where you do actually want to check for a specific value. I/O.EOF is the super example of this. Any I/O reader must return I/O EOF. It can't return ReadFile;I/O EOF. It must return exactly that value of I/O.EOF. We're actually checking for quality there.

\[00:40:06.18\] In certain cases you can't do this annotation, because taking I/O EOF, printing its string out, pending to another string and then returning an entirely different value from fmt errorf gives you something which doesn't compare, and you can't strip off that prefix anymore, because you've forever damaged it. So if we're talking about using the error value to annotate extra information, some kind of message, a stack trace or something like that, it has to be undoable. And again, my work in this area is very small, and it's certainly not unique. There's a lot of work that I stand on, with this idea of "Okay, so if we have an error, let's give it a method that lets you get the underlying error."

If we're stacking them one on top of another, let's have a method that we can undo the stacking, so that if we do need this behavior of saying, "Is this I/O EOF?" or if you use "OS does not exist", that knows about a certain bunch of types from syscall from Windows; there's a few other ones that it knows specifically to check, and says "I know how to interpret these error types. I know how to look at them and say, is this actually caused by a file not found?" So you need to be able - whatever wrapping you do - to add context, add a stack frame, add a message, and you need to be able to undo that, because there are cases where you need to extract the error, because that's the way the code goes.

**Erik St. Martin:** Right, and there are cases we've seen where people have masked the sentinel error values based on the type that they're returning in their error, too. Relying on those sentinel error values becomes problematic.

The nice thing I like about this approach too is the other pattern we've seen people trying to solve these same problems with is tagged log, but that only helps in the log messages that are going out; that doesn't help the callers that the messages are being passed back up the stack, too.

**Dave Cheney:** Oh, this comes into my other big rant, which is only handle the error once. Handle means basically I've inspected the error value; if error != nil, that's your inspection, I've looked at it. Then you get to make exactly one decision. That decision could be to log the message; you've written it out, so therefore the error is handled, you don't need to return it to the caller.

Now, what were some cases you might log it... Say you're searching in a search path, you're looking for a particular file. It's not in your home directory, it's not in the shared directory, isn't in the system one. You're not gonna bail out on that first time around; if it's not in your home directory, you're gonna look in the shared location, then you're gonna look in the system location. So you check the error, and it might be the case that "Okay, it wasn't found there, but I have two more search paths to look", so the error is handled at that point.

What I see a lot is at every level in the call stack, if error != nil, I'm gonna write out "Log - some error happened", and then return that error to the caller. That means however much you apply this pattern all the way in your code, you're gonna get 10 or 15 different log messages basically telling you the same thing "Error happened - Error happened, failed. Error happened - couldn't open file. Error happened - couldn't parse JSON." And then, right at the top of your handler or your main function, you're just gonna get the raw error, with no stack trace and no context. Logging kind of happens externally; it's written out to the standard out or it happens through some log shipping, and the actual program logic of handing that failure case operates in an entirely different universe. So not only you're generating a bunch of log messages, but the thing that you get back at the top of your program has not context, it has no hook to any of that log context that you're sending out to logging.

\[00:44:11.17\] I strongly advocate, if there is an error, just return it to the caller, and the error's package with the wrap method gives you the ability for that little piece of log context that you're gonna caught in log.error if, just put that in the error itself (Errors.wrap) with that message text, and return that to the caller. So you get all those annotations which are previously sent out to the log file via this kind of side channel, and now available at the top. When you're gonna print out or analyze that error and log it into a file, or you quit the program because the error happened, you have all that context there for the operator or the developer to figure out what happened.

**Carlisia Thompson:** I have a question about that. How does structure logging fit with this philosophy? I thought I would see the point of what you're saying, but the repeats, especially if you're not really crafting your logging message strings, how do you handle if you want to do structured logging? Do you use the dump of the levels that you accumulated into a value, and that's your log?

**Dave Cheney:** This is probably the most opinionated thing I'm gonna say, but I don't see the point in structure logging. Not because I think it's not a useful thing, rather than just have a free text blob of text; this idea of key/value key/value is useful, but I think there are really two consumers of logs - there is the person running the program (usually the operator, because I come from an ops background). In that case, if a program tells me something, like this UNIX philosophy - if the program tells you something, then it was important, you should pay attention to it. The number of environments I've worked in where you can't look at the log messages without grepping out a bunch of rubbish, it's a big problem.

So if the only things that you log are things that the user needs to take action on, then I don't see a lot of value in investing in a framework for describing keys and values for logs. To be very clear, this is my opinion; I don't want to push that onto anybody else. I know there's a lot of people who see a lot of value in structure logging, but for me looking through this window of like... If you're gonna log a line, it's actually something that I need to take action on, then arguably you should be logging very little, because if there's thousands of lines of output, something's gone terribly wrong. And if there's thousands of lines of output and nothing has gone wrong and your program is really chatty, then you've got a much more serious problem.

The second persona is obviously the developer, and I keep them separate from the person running the program versus the person debugging the program. The developer wants all the logging and tracing on, so I think in that case your structure logging is something that you use in development, and maybe interpret that to be always print out the file, the line and the function that it was executing in, and maybe some timestamps and things like that - then yes, that is super useful. But I don't think the two use cases should be conflated.

As the operator, I only want programs to output when there's something that I need to do. They shouldn't just tell me that they're still running, they shouldn't just tell me information like, "Couldn't dial the socket, but I'm retrying. It's okay, don't worry." That's not something I need to care about, you shouldn't tell me that. For the developer, yes, you want to turn on all those logging, so you can see the retry loop and say, "Well, it always retried three times before it does anything." But they're different personas. In that kind of worldview, structure logging doesn't seem as useful to me.

**Erik St. Martin:** \[00:48:15.06\] We had a conversation with Scott Mansfield from Netflix too, and he was talking about how they don't really rely on logs so much as they do counters. They use metrics for everything; they would count the number of reconnect errors that are occurring and measure that over time, and they could see that there's a clear problem because the number of reconnect attempts is happening at a much higher frequency than usual, and that's when they start digging in.

I think the other case where people like structured logging is in distributed application tracing. I can look for a tag that says a "request ID" and I can get all the logs associated with a given request. But to your point, when you get to large scales, it's really hard to manage all those logs anyway, so you kind of have to find different ways.

I want to roll back a little bit where we talk about trying the best you can to return upstream. One case that I see a lot of people use logging for in those cases is when you're in kind of a select loop; you're pulling from a channel, something happened, you don't want to return because you're just a parallel workstring, you're running concurrently to the main thread, so you don't want to die out because then you stop processing all messages. I typically see a lot of logging take place in those types of methods, so that people aren't just kind of throwing away the fact that there was an error with some given thing.

**Dave Cheney:** Yeah, so you've gotta consider the persona that you're in. Are you in the developer persona? "I want to observe the operation of this select loop. It's one of many that's going on concurrently; I believe that if I can get inside into how all these different intermeshing parts are moving, I'll be able to reconstruct the flow of events later on." That's the developer persona.

The operator persona, if that was just dumping out information like, "I'm going back through the select loop again, "what event conditions fired?" that would make me furious. I've worked in environments in trading companies where we would produce gigabytes and gigabytes of logs per application - there were many applications running at the time - and all my day was just bzipping and un-bzipping these things and then grepping out a bunch of stuff that was not useful. I think the distributed tracing examples are really a good counterpoint to my points about structure logging, that actually yes, that request ID is something you wanna thread through, but is that something that needs to be printed out on the console, like "I'm handling this request?" or is it just something that goes into...?

In terms of logging, there are definitely exceptions to this case. Order logs are probably a perfect example of where structured logging is useful. User ID, in-group ID, with permissions, set, did, operation. Because you do need, in logical systems and well-regulated ones, you do need order logs. But again, the order log is not something the operator sits tailing. It's not something you're gonna alert on, like an error happened in the order log. They are different personas.

**Carlisia Thompson:** On the same subject, I wanted to ask your opinion because I see logging and instrumentation of metrics as serving different purposes. For example, I can start tracking how many times a certain request came true because I usually get 500,000 a day, and if I suddenly start getting 200,000 I wanna be alerted that something is going on, and I wanna see those metrics. What is your opinion on instrumenting your code that way, and getting metrics out of it?

**Dave Cheney:** \[00:52:09.02\] Yeah, they're absolutely separate things. Logging is for the human, instrumentation is for the machines, for your monitoring, for your automated alerts, for your historysis, your automatic retry, your scaling up, your scaling down. If you're driving those processes off tailing a log file, you have a serious operational problem. They are separate and independent things.

**Erik St. Martin:** Yeah, and I think logging too should be something that you should be able to back off of. I've worked on systems commonly where it's streamed over UDP; you don't want logging to slow down your application because there's some slowdown on the disk, or things start catastrophically failing because you run out of disk, and things like that.

I guess it depends on how important your logs are. If you're doing something for a bank, you probably want every single message, it's probably of big importance to keep that for audit purposes. But in other cases, if your logging requests to your site, if you lose a minute and a half of logs because there was some slowdown there, it's just not the end of the world.

**Dave Cheney:** Yeah, they're different use cases - the order log, the HTTP request log, if you have to keep them for analytics, fraud detection or something like that... And then there's the log of your actual application code that was -- every time it speaks to you, does it tell you "This is something you need to care about?" or is just telling you things and you're like "I see that all the time." My rule of thumb is if to work on an application you have to get out grep to filter out a bunch of stuff which is not important to you, the problem is that you're logging too much and that logging is of not enough value. If this is completely separate from the ordered log, which has to happen for every action - the HTTP, it has to happen for analytics and fraud purposes, or the metrics which are how you monitor the health of your system.

**Erik St. Martin:** It's hard, because there's no cardinal rule, right? It's just like the other topics we've had here today... It's about looking at your programming, determining how important these things are to you. Are they a necessity to operate and maintain this application, or are they really just fluff that makes you feel comfortable that you could open a log and see that data if you wanted to. The number of times I've seen applications that are heavy on the logging side and nobody ever looks at the log - that's probably the better majority of the applications I've worked on. Most of the times, you're looking at your metrics dashboards and things like that. It's too hard to go grepping through logs, especially when you don't have a central logging place for these things.

At high scale it also becomes its own problem, because that's another system that can fail, when you're doing your distributed logging out to one place, and you have to make the decisions, how worthwhile is that additional complexity to you, and the additional storage to store all these logs, or are you really trying to get a rough state of your application.

**Carlisia Thompson:** In companies that handle that for you, they charge a lot of money. It's very expensive.

**Dave Cheney:** Oh yeah.

**Erik St. Martin:** Those companies love when you throw them just needless logs. \[laughter\] It's usually some kind of like a rate charge.

**Dave Cheney:** There's a strong moral hazard in there for them to not help you become better. They'll just write you a better tool to handle larger volumes of logs; by all means, don't change, just keep going how you're going.

**Erik St. Martin:** \[00:55:53.27\] I think the difficulty is that when you look at a line of code and you're thinking about, "If something were to go wrong here", you think about all the times that you're tried to debug an application and you didn't have enough information. I think people err on the side of providing too much information, just in case they need it. I mean, I guess there's other ways around it too, aside from logging all the time.

Some people will build in ways where they can signal the application to change its verbosity for the logging levels; some people will do Canary builds with additional logging in them... There's just a variety of ways you can attack debugging a problem.

The other issue becomes when you have errors - is it a systemic issue that continues to happen and plague the rest of the system, or is it just an anomaly? You're going to occasionally have bugs; it doesn't matter how much logging you put in there, you're probably never gonna figure out why that happened. If you can't reproduce it, it's always going to be hard to debug by just looking at the log messages that took place. The log messages are really only there to guide you in setting back up the conditions that were taking place when that error occurred.

**Dave Cheney:** Exactly, and once that's happened, it's too late; the horse has bolted. To come back to errors - you've mentioned errors. Why I think Go is so successful for being a language for writing server software - and this is really where we're seeing it; it's branching out into other things as well, but its home territory is server software - is because of the way we do error handling. We don't have exceptions. Perhaps not everyone has grasped this, but every time you type... You might think, "Oh, geez... If error = nil, return nil. I have to type this all the time..." - that's missing the point. It's making you think about what happens if this operation failed, and you have to do that everywhere, all through Go code, because we don't have exceptions. And we don't have exceptions because to write reliable programs you have to think about the failure case first.

Don't worry about the happy path, think about what happens when this fails. I think that is what is making Go really successful for writing server software, because you can't just write the code in this linear "Oh, everything's gonna work, and that throws cause on the function declaration is gonna take care of any problems." We see how the languages with exceptions go for reliability; you don't know if they're gonna explode at any point. And as kind of verbose as error handling is. It makes us think about the "What happens if this fails?" literally at every function call, because any function call can fail. And if you don't want that function call to fail, don't return an error. Write it in such a way that it can't return an error by having extra pre-conditions, or accept the fact that any time you deal with the real world (the network, the disk), it could fail, and you need to handle that failure right then and there, rather than just waving a hand and saying "I/O exception will bubble up to someone who knows how to handle it." The best place to handle that failure is right there, in that function, right at the point that the error happens.

**Carlisia Thompson:** And if people are really annoyed about checking, doing the if statement all the time to check the errors, they can use your errors package, right? I love the way you made it so you can just return the error, and if it's nil it's nil, and if not, the message is there, and that's it.

**Dave Cheney:** Yeah.

**Erik St. Martin:** \[00:59:47.04\] I know when I first got into the language, the kind of verbose error handling was kind of annoying too, because I came from languages that had exceptions, and then you start to realize it does make a lot more sense there. But I think it's just a change of viewpoint. It's a half glass empty, versus half full. We look at it and we're like, "Wow, this is annoying that I have to keep doing this", but it's much more exciting when we think about the fact that everybody else who's working on this project also has to do this, right? It's kind of like HOA regulations. \[laughter\] Kind of a pain in the butt, right? It's annoying, because you don't wanna have to follow the rules, but it makes everybody else follow the rules.

**Brian Ketelsen:** I think another corollary to that is the idea of interfaces in Go. I was thinking through this today, and I think there's a good parallel between the way you think about interfaces in Go and the way you handle errors in Go, versus other languages. With Go interfaces, your modeling behavior and you don't have to think very hard about that inheritance chain and which abstract classes to create above them. I did a lot of Java and C\# and Ruby, and all of that object-oriented inheritance, there is a big cognitive load to that.

Just using embedding and composition in Go feels so light and so much better, but it's hard for people who come from object-oriented languages to catch that feeling. Again, it's one of those things where it takes everybody some time to adjust to the new features that they're not used to, before they can embrace them.

**Dave Cheney:** I agree, and this is really the open question that I had from my talk. Every episode of this podcast, every time you interview somebody, everyone at some point in the podcast says, "Oh geez, you should have seen my first code... I used so many channels and I did them wrong." Everyone knows that lesson now. Anyone who has become a successful code developer is like, "Wow, far too many channels. I went overboard there." But "Don't use too many channels" is not actionable to a new Go developer. They're like, "What are you talking about? This is why I've learned this language. Apparently, concurrency is a really important thing; why shouldn't I use channels?"

It becomes really subjective and not particularly useful to say, "Be careful, don't use too many channels." Where is the design language that says, "Where is a channel appropriate, where is it not?" Those kinds of things are missing in the general discourse of Go. Or if not missing, not emphasized. It's not things that we talk about. We focus on speed, or static compilation, or cross-compilation, or other things like that, which are equally good, but they're kind of missing the wood for the trees...

Erik talked about it, the way that in the Ruby community there was this focus on design. People talked about the language design, always; those were the kinds of things that you would talk about at conferences. Where is that language, that discourse in Go? That's really the open question from my talk, I think.

**Carlisia Thompson:** I'm very glad to say that I'm starting to see a major shift towards that conversation with you and Ben Johnson and Mat Ryer. Mat Ryer [wrote a blog post](https://medium.com/@matryer/line-of-sight-in-code-186dd7cdea88) about his talk at Golang UK, talking about "Check your errors first, and then do the happy path, just like you were saying. It just goes to that concept of \[unintelligible 01:03:38.25\] design concept.

Going back to what you were saying about this conversation about design, when I started doing Go, when I was meeting people who were experts, I would ask "How did you learn?" and "Trial and error" would be the answer, and on and on again people would say "Trial and error." Now I see that people are thinking, "Well, let's not subject people to trial and error anymore."

\[01:04:14.01\] Katrina's talk at GopherCon in Denver had a lot to do with this concept of pave the path for people to jump in and not go through the hassle of trial and error. Let's have educational material... And now a lot of people are talking about design. I sense that there is a shift, and I think that it's very positive.

**Dave Cheney:** Yeah, Katrina's talk was fantastic, and the thing that we should all in this podcast remember is that we are the success story, we are the ones that didn't quit, we are the ones that didn't get so lost, that didn't make such a mess that we couldn't figure it out and we just gave up. We are actually the ones that figured out how to write successful Go code. And Katrina's code is really important, because as she said, as a beginner you don't have that... There's a phrase, "Hindsight is 20/20." We're all looking back at our experiences and saying, "Oh, it was hard to learn, but we got through somehow." Put yourself back into the mind of a beginner; you have no concept of right or wrong, you don't know when you're writing good code or bad code, you don't know when you're bringing knowledge from another language or you're just learning it from scratch, and it's this good or bad; am I having a hard time running this program because I'm fighting against the language or because I'm actually making a mistake?

As a beginner, you have no context to judge yourself, to judge your progress like that. Katrina's talk was really important to remind us all of... We are the success story, we are the ones who persevered and learned the language, even through trial and error or just reading the right example at the right time, that put us on a successful path, but we shouldn't consider that with enough time anyone can do that, because a lot of people are unsuccessful and they give up halfway through.

**Carlisia Thompson:** Yeah, good point.

**Erik St. Martin:** I think we are actually about overtime, so I think we're gonna skip over talking about news and projects this episode, as much as we would love to go forever. Can we do like a 12-hour podcast? \[laughter\]

**Brian Ketelsen:** With Dave I think we can, yeah.

**Erik St. Martin:** So I think we can skip into \#FreeSoftwareFriday, and then we'll kind of close out the show. As always, Brian, do you want to kick this thing off?

**Brian Ketelsen:** I do. I spent a whole lot of time playing with rsync this week. It's old school, UNIX tools, but I just can't like without rsync, so big shout out to the people who keep rsync fast and awesome and safe. I love rsync, thank you.

**Dave Cheney:** I think that is Jeremy Allison - is that his name? The same people that make Samba make rsync. Maybe I'm remembering it completely wrong, but there is a strong correlation between the two, I think. Using rsync and SSH can pretty much move the world.

**Brian Ketelsen:** Yeah, and I think I did this week. \[laughter\]

**Dave Cheney:** Do you want me to go next? I have one.

**Erik St. Martin:** Sure.

**Carlisia Thompson:** Yes.

**Dave Cheney:** Somebody gave a shout out to AG a couple of weeks ago on the podcast...

**Erik St. Martin:** That was me.

**Dave Cheney:** I have one better, because it's called pt - the Platinum Searcher, and it's written by a Japanese Gopher; I'll put the link in the show notes. Pt is way better than Ack, way better than AG... I use it every single day. I'm not a big one for editor integrations; I have a very Spartan environment, so for me my entire day is just pt, some piece of text, find the line, go in and edit it.

**Carlisia Thompson:** \[01:08:06.06\] I am so looking forward to installing that. With this endorsement... I use Ack all the time; also not on my editor, just on the terminal, and this is sounding like a lot better, by the description. I'm just dying to try it.

**Dave Cheney:** It has all the features of Ack and AG, of skipping over temporary files and .gits and things like that, but it's written in Go.

**Erik St. Martin:** I'm trying to think of who it was, too... Somebody had just mentioned... I think it was Harald Ringvold maybe, in the GoTime FM Slack. Just before the show he pointed that out to me too, like "Have you seen this?" So I definitely need to install it. You said it's basically feature-compatible with the Silver Searcher?

**Dave Cheney:** Pretty much... I mean, I don't know what the features are; I just use pt. My two requirements are pt and pt-l. Pt-l gives you the names, and you part them through Vim and edit your files. It's written by Monochromegane, a Japanese Gopher. I saw her presentation on this in 2014, I think, the first time I went to GoCon in Japan.

**Erik St. Martin:** That's awesome. Plus, we can contribute when we find new usage. But I probably have a similar workflow to you. I basically AG a directory looking for what I'm looking for and then just open it in Vim. I don't do a lot of editor integrations and stuff like that; I'm just pretty comfortable with having my editor open and a shell.

**Brian Ketelsen:** I just installed this and it's beautiful.

**Erik St. Martin:** You're ahead of us. So how about you, Carlisia?

**Carlisia Thompson:** Well, I recently got a job doing Go full-time, and I was working on a new project and going through the phase of defining and designing, and recently I got full-on coding. My shout out today - we've mentioned it before - is Sourcegraph. I can't not tell you how much faster I grep things. If I'm on GitHub, I don't want to download everything to my local machine and just search on my local machine; I could do that, but it's so much faster. I'm on GitHub looking at a library, I'm browsing through the code, and I have Sourcegraph guiding me through, just popping up the descriptions. If I want to go deeper, I just click on the link and I'm there. It's been AMAZING.

I've learned a hundred times faster, just learning what I'm looking at and also learning Go at the same time, because of course, I see the patterns. Another shout out is \[unintelligible 01:10:47.29\] I love that. The Go code that I see on people's libraries, they look pretty much the same as the Go code that I'm writing. The consistency is amazing, and it makes life so much better.

**Erik St. Martin:** Awesome. Mine this week is a little off, but I haven't been using a lot of new programming tools over the past couple weeks, and I don't think everybody wants to keep hearing old stuff, so I'm gonna shout out to Asciidoctor, which is asciidoctor.org. Typically, I'm a markdown person, but I haven't found a really good toolset for being able to do table of contents and things like that for markdown. Asciidoctor is similar to markdown. It uses AsciiDoc and then behind the scenes it can do DocBook, so it can generate PDFs with linkable table of contents; you can do little sidebars and annotations, it has source code highlighting, so it's really awesome for doing documentation, especially with code involved.

**Brian Ketelsen:** \[01:11:57.12\] Nice.

**Dave Cheney:** Yeah, I use it all the time. I actually write all my talks long form; I actually write everything I want to say, and I generally do before I then transpose it into Keynote or something like that. For one, I need to know how many words I've got, and Keynote won't tell you that. I tend to write up the whole thing long form, and I've taken to writing in AsciiDoc, just so that I can then turn it into HTML and send a link to people.

For me, that's so much better than using a Google Doc, because to use a Google Doc you've gotta be online, whereas this is just a text file, and you can edit it wherever you are.

**Carlisia Thompson:** Nice.

**Erik St. Martin:** And we can just use Vim. A nice little guard file, updates the PDF alongside of it... And then I get to give a second shout out to Afrin, for preventing me from sniffling this whole show.

**Carlisia Thompson:** \[laughs\] Is that open source?

**Brian Ketelsen:** No, it's not open source, and you probably have to show ID at the counter of the pharmacy to get it these days.

**Erik St. Martin:** The ingredients are listed on the back, so it's somewhat open source, right? \[laughter\] I guess the algorithm to combine them is not existent, but that's close.

**Carlisia Thompson:** Yeah, that reminded me of Katrina's talk again... \[laughter\] You have the ingredients, but you don't know how to put it together.

**Erik St. Martin:** \[laughs\] That correct mixture ratio... Alright, so as much as I would like to continue on, especially having Dave on the show, we've had a lot of interesting conversations and I think way more that could be had, I think we are way over time, so this will be a nice long episode. I definitely want to think everybody who's on the show today, everybody who's listening, everybody who will be listening to the show when we drop it live... Big shout out to our sponsor Backtrace.

If you aren't subscribed already, you can subscribe at GoTime.FM. We should have an upcoming newsletter. We are @GoTimeFM on Twitter, and GoTime.fm/ping on GitHub if you wanna submit yourself or suggestions for guests on the show, or questions.

I think that's it. With that said, everybody, goodbye.

**Brian Ketelsen:** Thanks for getting up so early, Dave.

**Dave Cheney:** Not a problem, thanks for having me.

**Carlisia Thompson:** Thank you so much, David.
