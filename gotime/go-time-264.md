**Natalie Pistunovich:** Hi, everyone who is joining us to this episode today about maintaining long-term codebases. I was looking for people who worked at the same company for a long, long, long time, and not to mention stereotypes too much, but of course, Germany is a great place to find people who are consistently doing the same thing very well, especially in the field of engineering, for a long term... So today I am joined by Ole and by Sandor. Hi! How are you doing?

**Ole Bulbuk:** Thanks, I'm fine. Good to be here.

**Natalie Pistunovich:** Sandor. Would you like to introduce yourself?

**Sandor Szücs:** Of course. I'm Sandor Szücs, I've worked for Zalando since almost 12 years now...

**Natalie Pistunovich:** And you have the special role of a teapot engineer.

**Sandor Szücs:** I am a teapot engineer, yeah. Since some years I'm teapot engineer at LinkedIn... Yeah.

**Natalie Pistunovich:** For those who don't know, what is Zalando?

**Sandor Szücs:** Yeah, Zalando is a fashion company, so a reseller in Europe. It's the biggest one, I would say, with 50 million active customers. We test with four million \[unintelligible 00:01:50.27\] my infrastructure that I own now since five years. And yeah, I've worked 12 years at Zalando, in the infrastructure department, so mostly running the infrastructure, and nowadays the \[unintelligible 00:02:09.29\] of Zalando. So this is what I'm known for.

**Natalie Pistunovich:** 12 years' work passes definitely as a long-term.

**Sandor Szücs:** Yup.

**Natalie Pistunovich:** \[laughs\] Ole, how about yourself?

**Ole Bulbuk:** Yeah, sorry, I kind of missed the points, since I have never been working much more than 3,5 years or so for the same company... But I have been off working on projects that have been working on by others for like five years or longer, and saw what was left behind when other people left the project, that has been once a nice greenfield project, and now it wasn't so much anymore.

**Natalie Pistunovich:** And you've done that in all sorts of programming languages, like Go...

**Ole Bulbuk:** Yeah, mostly Go in the last years, of course... And Java a lot before; almost 20 years of Java. And then a little bit of Python, and very little JavaScript.

**Natalie Pistunovich:** We had an episode together a couple of months ago where we were ranting about Berlin's past obsession with PHP...

**Ole Bulbuk:** \[laughs\] I'm past that.

**Natalie Pistunovich:** Yeah. Sandor, what languages have you been working with other than Go?

**Ole Bulbuk:** So I started with Perl, I learned Java in the university, and then took Ruby as the next language... I played around with a lot of languages, and at Zalando I had to learn Python, so I used a lot of Python, and took over also the first monitoring system, also written in Python, written by a colleague... So I maintained this also for some years... And yeah, then we have a new company layout; we wanted to scale much more, and we had radical agility to move. And then we could basically change our idea of what we want to use. Then we picked Go. And since then, I've stuck to Go. I think it's six years now, so...

**Natalie Pistunovich:** \[00:04:29.06\] So you both have been doing Go for a while, you've been both maintaining code, especially in Go, but not only, for a while... So we briefly discussed before beginning the show about the concept of the Ship of Theseus. And for those who are not familiar with this term or concept, it's a thought experiment that if you have a boat and you keep rebuilding it and refreshing it and changing parts, and at some point not even one part is the same as it was in the original ship, is it still the same ship? And then we started kind of discussing into how this applies to our world of context... So what is your perspective on this?

**Sandor Szücs:** I'm still thinking I'm the same person, even though all atoms in my body have changed by now, since I have a baby, or whatever...

**Natalie Pistunovich:** Or even the last seven years, right?

**Sandor Szücs:** Yeah. I think it's still the same boat, in a way... But it might have evolved quite a lot, and not always in a good way, according to my experience.

**Ole Bulbuk:** Yeah, so in my experience it's for the good. So I also think we change a lot, and I would rather say it's not a boat, but maybe a jet, at 2,000 km/h or so...

**Natalie Pistunovich:** On green fuel...

**Ole Bulbuk:** We basically changed all the details, and just today I switched to like a very important functionality to use caching on one of the highest request/second clusters... And all these changes - I am the one that is brave, that does a change and executes it, and \[unintelligible 00:06:17.19\] implemented maybe, but I am always into the change... And yeah, it saves like 50% of the money right now. It's a good change, of course.

**Sandor Szücs:** Yeah, if you can do such deliberate changes that are really good, this is great, of course. Often, changes are called by necessity, that some customer needs something quickly, and nobody has time for it, but "Come on, you can do it. It's really worth it. You will get time later to rewrite it nicely..."

**Natalie Pistunovich:** "And test it..."

**Sandor Szücs:** "...so just do it somehow now, quickly." That's the road to the other side, right?

**Ole Bulbuk:** Yeah. In my case, I do a lot of open source, and the most important projects are open source... And we get pull requests, and we want to enable everyone to do whatever they want to do with the software, of course... And of course, we cannot have the quality in the pull requests normally; it's very hard to get a new contributor up to the quality level that we ourselves want to have, and then we have to get better, of course, over the time... And I had an initiative to have 80% test coverage. This is my goal, it's not yet finished, but... Like, I have the last module that has only 30% of test coverage, that we actually don't use, but I want to make it so good that everything is good, and then also switch to this function if you need. Because what I see is we get some pull request, and we think "Hm, maybe we don't need it", but normally, in the normal case, it's in one or two years later and "Ah, we need exactly this."

\[00:08:15.18\] This is what's so great about open source. I think it's also my \[unintelligible 00:08:17.21\] how I work, and how I can work, and for what tools I work with in infrastructure, it's open source... At that scale, I have the time to plan the changes greatly. If I do an error here and fail in production, everything is good. I cannot do the fast change always. Sometimes I do fast changes, but it's always tested good enough. I think there are other codebases, other jobs where it's more problematic.

**Natalie Pistunovich:** Ole, you were mentioning before, in our pre-show - or actually, beginning of the show - that you had to maintain a very old codebase, and you did that for maybe 3-4 years, but the code was there for many years; so it is an older codebase, and that was not always a good experience. So what's interesting for me to ask you about, and to ask Sandor about - Sandor, did you start everything from scratch there, or did you also inherit code? And if you did inherit, was it also for a while around and not that efficient, or was it just, you know, three log lines in some testing infrastructure? Or how are your experiences of that?

**Sandor Szücs:** I took over basically Ole's software. I'm not the one that starts a lot of projects... I mean, some yes, but normally I take over. It's Kube Ingress AWS controller, and also Skipper was not written by me; I only took over. And after some time I get used to the code, and got help from the maintainer that has written it before...

Now I am the longest maintainer of this codebase, and also before the Python \[unintelligible 00:10:06.06\] for example, many of them I didn't write, but someone else, and I took over... And I think right now with Go I am more familiar with the testing and how to do this right.

In Python there was one very good engineer, \[unintelligible 00:10:26.23\] He writes software so fast, incredible... But you can also see why; like, later in the codebase you see how it's evolving. Or we have these 20 parameters to a function, because we need this little hack here and there, and then we enable this feature... And he always adds it there, and he has like -- in five minutes he does it, and then you can think about how to do this better in the next months, right?

**Natalie Pistunovich:** So you all enjoy inheriting projects, and kind of improving them for a long term, and kind of bringing them to a whole new place?

**Ole Bulbuk:** I have to say, it's not a normal kind of joy, right? It's often -- the original maintainer thinks it is just natural and straightforward. It is natural and straightforward according to his own twisted ways of thinking. And as we don't have a very set way of how a software engineer has to think, at least not when implementing business logic or something, this is always different than the next, usually.

I've never maintained a codebase where somebody has been before and thought "Oh, this is exactly how I think", or something. And there are so many ways to twist things, and do things differently... These programming languages, you can do anything with them, and you can do most things in completely different ways. This is quite interesting, and leaves a lot of freedom, but this also makes the maintenance quite challenging. And I think, my personal view, a bit more structure will be good in the long run. I think when software engineering evolves, I hope we will get a bit more structured, that we understand better how to write software better, and make it easier to maintain long-term.

**Sandor Szücs:** \[00:12:36.20\] A colleague says \[unintelligible 00:12:37.02\] the code should look like this, that if you come back to it two months later and you need to fix a bug as fast as possible, then it should be written like this. It should be obvious. If you do it smart, it's always so complex, even for you, right? To debug a problem, it's like 2x as hard as writing. So if you think it's a smart hack, then maybe you are not smart enough to debug, and you should always keep in mind... So for your future self, it's better make the fool, to make it as simple as possible.

**Ole Bulbuk:** Absolutely. As fool-proof as possible. Definitely. And obvious. This is, I think, one of the most important things, to make things obvious... Because people don't have much time, and they do what's most obvious and natural to them, at that time when they are under pressure, and can't think about things for a longer time... And then just something happens that does the trick somehow.

**Natalie Pistunovich:** So what do you both see as the biggest problem with long-term maintenance of codebases?

**Ole Bulbuk:** I think the biggest problem that a software project can have is if you build the wrong software, or if you solve the wrong problem, in general. But I think for long-term maintainability, you can strike that out. I mean, software that misses the point will one day not get --

**Natalie Pistunovich:** It doesn't get to live so long, yeah.

**Ole Bulbuk:** Yeah, exactly.

**Natalie Pistunovich:** That makes sense.

**Ole Bulbuk:** You notice after a while. So this is not the problem for this. But what I see again and again - you have a mismatch between the way the business side or the product side thinks, and how the implementation side thinks, and what is done there. As software engineers, we often talk about patterns, or whatever, we have our own language that we use, and implementation often, and the business side is talking about workflows, or whatever... And then it's sometimes hard to find one thing and the other, and relate both sides to each other. This usually just grows further and further apart. Often, the one implementing it says "Yeah, I didn't use those words a lot, that make it that obvious... But come on, it's just there, and it's just a few pieces here and there. It's not so difficult.

And then the next one doesn't understand it, and the next one misunderstands some things too, and it grows further and further apart, and you need more and more code to get from one side to the other... And then the hacks get uglier and uglier. This is my personal experience.

**Natalie Pistunovich:** You've been working with Ardan Labs since 2019, right?

**Ole Bulbuk:** Yeah. \[laughs\]

**Natalie Pistunovich:** I mean, you've been contracting for them for a while...

**Ole Bulbuk:** I've been working with them for a while, yeah.

**Natalie Pistunovich:** \[00:15:53.18\] And we recently had an episode with Bill on yes or no TDD, and then - this is very similar to Bill's philosophy, how he introduced the data, to avoid kind of this conflict, exactly as you say, between the ideation part and the implementation part, and so on. So he's not a fan of TDD. He's -- how did he call that? PDD, I wanna say; like, product-driven development. He said "First write the API, have everybody agree on that, and then go ahead and implement that." And I can see how this is kind of a very interesting perspective, that is not -- you know, when you think about code development methods, you do think of TDD as one of the first ones, and not necessarily of what you say, but it is actually true; that is a big problem. So it's a very interesting listen... We will include a link to that in the show notes as well.

**Sandor Szücs:** Yeah, I think this is the right choice. API-driven... For example, I built a new Kubernetes \[unintelligible 00:16:51.24\] And this is an interface for the developers to use it. And if we change that, we have to stick to it; you cannot easily change it again and again and again. Nobody wants to migrate from one version to the other. It's \[unintelligible 00:17:11.21\] The work can take one year at least, and we don't want to maintain two versions, or three... You don't want this.

So there are library developers, for example, also in open source, in Go - they increase the versions so often that you have a moving target, basically. For example in Skipper - Skipper is an HTTP proxy library. So you can write your own proxy, with your own functionality... And we have a zero version as major; so we can change everything, anytime... But what we keep is - the interface for the developer will not change. If you do a proxy with Skipper, it should work since like the last four years, at least.

And we are very strict at this point, but in other parts we are not very strict. For example, we have a net package that has some HTTP client that we think is great. It fixes some problems that we know in the Go standard library, and adds some functionality we at Zalando need. And then all the gophers at Zalando, they just use it, and plug it in... This might change more often. We edit, for example, context, and we didn't add the major version. So I agree with the interface, it shouldn't change; you should think about the interface first, agree on an interface that the client and everyone can use, and then stick to it, and then try to do some workarounds, to make sure you can add functionality that you forgot... But don't change the interface for the people that don't need it. This we do a lot in Skipper - we basically do some hooks for us to not break the code for others.

**Ole Bulbuk:** Right. I'm more from a business software perspective, since I've been working like 90% on business software in my life... And there you don't have this. Even the API to the clients, like HTTP -- so JavaScript client usually nowadays, you can change it. You just talk to the frontend developer and say "Come on, this was stupid. Let's change this." And this makes everything easier, of course, but also nobody takes time to think about the interfaces a lot. So you just make it work, and you can make it nice and pretty later. This is one of the factors, that things grow and get out of bounds sometimes.

**Sandor Szücs:** \[00:20:03.04\] Do you think that actually you saw "Oh, this is not nice", and everybody agrees it's not nice, and "Yeah, let's change it, and make it nice", with your service?

**Ole Bulbuk:** Sometimes yes. It's not that often. There are different ways of people think it's nice also. Sometimes you have a team that is split up into two halves, and they are fighting a little bit... And two or three developers that like clever patterns, and read a lot of things, articles, how to implement something in a very performant way, and whatever; then other people who think "Well, we don't have those performance needs. We don't need this thing. We just want something straightforward, that does the trick. Please don't add more complexity." Yeah, and others are so inspired by articles from Google, or whatever, great companies that solve great problems, that most people don't have, but maybe some engineers would like to have, since they are good enough to solve those problems too, and they would like to show it... So I see some pressure sometimes, this over-engineering, or CV-driven development, or whatever.

**Natalie Pistunovich:** \[laughs\] CV-driven development... It can also be, you know, the challenges you want to solve, versus the challenges you need to solve.

**Ole Bulbuk:** Yeah, exactly.

**Sandor Szücs:** What about testing? I learned when I was writing Ruby a bit, I saw these test frameworks; I hated them, really. Go also has this Omega, and so on, and Kubernetes uses it... I really don't like it, but a former colleague, the one that created Skipper - he was all-in BDD, and he is a very good engineer, I have to say... And he showed me how to do BDD. And Skipper code is full of tests that are BDD style, but we don't use the framework. We basically instantiate the proxy, we instantiate the backend, we instantiate one \[unintelligible 00:22:25.07\] and then we actually execute everything, and make sure that all the tests are running through the proxy. I think this can help a lot for increasing test coverage, meaningful test coverage...

**Ole Bulbuk:** Yeah.

**Sandor Szücs:** And the more you do it, you start also to create packages only for testing. We have test packages that help us to test something.

**Ole Bulbuk:** Yeah, I think this is very good. So if you do something that is meaningful, tests that are meaningful for the product side too, this is usually very good. And they tend to be much more stable than when you do this just test-driven development, where for each line that you want to add to a test case first, and then you sometimes have tests and implementation tightly-knit afterwards, where you can't change a single line in the resulting codebase in the implementation without having to change tests, too. And this can be quite awkward. So I love that you have tests that are meaningful to the product owner. And even on detailed stuff. So it can be really down, a little function that is doing something very detailed, but hopefully it's still explainable what this function is doing to someone who knows the product side.

\[00:24:06.20\] This is really great, if you can do that; I've found this very helpful, because then you have enough meaningful tests, and when things change, you can explain what to change, and how to change, and you can talk to the product side, and don't have this gap between product and implementation so deep.

**Natalie Pistunovich:** So another question to you both... When you adopt a project, and you kind of lay out your plan on how to start working with it, what are the steps and what are the important things that you lay out first for the purpose of long-term maintainability?

**Sandor Szücs:** \[unintelligible 00:24:45.11\] Normally, I just read the code. So I start where it starts. Like, how it started. I start from the beginning, basically, and then I try --

**Natalie Pistunovich:** So you go to the very first commit, or to the first file list? What do you mean?

**Sandor Szücs:** The main function, and then I start reading from there. And then I start -- for example, if I have a proxy, then I start reading the proxy package, because it seems to be the most valued one, right? This is the main thing I have to do, so \[unintelligible 00:25:21.03\] And then after a while, I read this, and this, and that, and I try to work with the code first, before I think that I know better. I don't know better. The people that created it, they have their ideas, and maybe they are much better software engineers than me; I don't know, you also don't know, and they don't know. We all don't know, because you will see only in the long-term you cannot judge; if you start reading the code, you are the newbie. You have no idea. And there are a lot of ideas in this codebase. And these are also experienced engineers. I wouldn't say that I am a super-smart developer; maybe a great engineer, yeah, but there are also other great engineers. And sometimes I see some quirks, of course...

For example, I took over a codebase, and then \[unintelligible 00:26:24.15\] There are other things that are maybe more important, and maybe the codebase is good enough for the job. This all depends.

**Ole Bulbuk:** For me, the approach is -- so first of all, I have to say that the big problems are way more important than all the small problems. So no amount of clean code will save you when the whole architecture, how all your microservices work together is completely weird and broken, and you have this starved death, or something like that. Then it's useless if all the many, many microservices are beautiful and shiny all by themselves; it doesn't help you much. So you have to fix the big problems first, and then you can work on the smaller problems.

So I start from the outer level and go more inside. So first is how services are cut and working together, and then the next step is packages within services. So I have a tool for analyzing the package structure, a spaghetti-analyzer \[unintelligible 00:27:47.20\] sometimes you have spaghetti code that you have to analyze, and it's interesting, of course... And with that I can see the package structure in a table view, and see dependencies, what package is using the other packages, and so on.

\[00:28:12.15\] Then I can get some statistics out; this interesting package, how many packages is it using, which ones, how often is it used, by which other packages, and so on... So I can find out how things relate to each other, without having to read endless lines of code. This is for me quite good to get an overview as a start. Then I can work on that, and get it into a good shape. And if I have done that -- yeah, do you want to add something?

**Sandor Szücs:** Yeah, I want to add something... So I am not reading line by line.

**Ole Bulbuk:** Yeah, okay.

**Sandor Szücs:** I scroll the code. Normally, I just go -- even if I develop, I mostly scroll code.

**Ole Bulbuk:** Okay, reading line by line would be extreme, that's true. Yeah.

**Natalie Pistunovich:** That's for compilers.

**Ole Bulbuk:** Yeah. But if you only scroll, you have to pick up some lines for it to be meaningful, of course. The next step usually for me is to make sure when I have something established, a good structure, I've got another tool, spaghetti-cutter it's called; it keeps things apart and well cut.

**Natalie Pistunovich:** Is it an open source tool?

**Ole Bulbuk:** Yeah, these are both open source.

**Natalie Pistunovich:** Then we'll add it in the show notes.

**Ole Bulbuk:** Of course. And \[unintelligible 00:29:33.11\] can tell which packages should be able to work together, and which are not allowed to work together. There are some defaults to make it a short configuration file, and you can overwrite them, and that's it. And then for me the next step after that is then really trying to get this business side or product side and implementation match nicely. And often, the things I've been working on, workflows has been a good match; it was all about implementing workflows... So I have an optimized way to do that.

For almost ten years I've been working on different ways how to implement workflows in a way that each part is small and maintainable and independent of the others, and so on, and you can always do little tweaks and changes easily, and put something small in between, and all these things. So this can be very helpful for me. But of course, if you don't have something that looks like a workflow, but quite different, in technical domains, then you need something completely different. You can't twist everything and force it into something that it is not -- I mean, you can, but then you need more and more code to make this gap go away somehow, and to bridge it... And I try to avoid that as much as possible.

The last step would be another tool or something to document, to make it obvious what the structure is, and so you can dive into it preferably with the product side, and show them "Here, this is the flow we implemented, and look, it's exactly what you wanted. Here are all these test cases... And we've talked about this edge case, and here you can see it, and it's green", and so on. This is the perfect state for me that I like to achieve.

**Sandor Szücs:** For me, after reading and creating a little functionality here and there, I try to grasp the full architecture. And then I start to document. If it's not documented, I start to document. And this helped me a lot. I did this several times now, and I think it's a good approach. Very sophisticated, I have to say... This is really good.

**Ole Bulbuk:** \[00:32:17.06\] Yeah, if you don't understand the big picture, you have no chance to understand the details.

**Natalie Pistunovich:** So you both shared an interesting answer to the question "How do you start when you get a new codebase?" Like, how do you get to grasp it, to understand it, and so on. And maybe the last part of the documentation is kind of the first step of how to act. So what do you do, not as a receiving, but as making changes, when you start maintaining code? So you've improved the documentation a bit. Do you have some other pattern or checklist or good practice that you do when you go ahead and develop, or improve or maintain the code that you have inherited, once you've understood it and improved the documentation?

**Ole Bulbuk:** Of course, improving test coverage, if necessary, especially on these levels that are meaningful for the product side... So I have freedom to change implementation details and restructure things internally, but still make the implementation do what it should. I think this is, of course, very important to do this before you do all the changes and make it look nice internally, because otherwise you don't have this safety net.

**Sandor Szücs:** So for my side, I always do cleanroom first implementation, but never merge like this. Start cleanroom, and then I see "Oh no, this is not going in."

**Natalie Pistunovich:** So cleanroom was actually mentioned in the last show, last week. But for those who did not listen, what is cleanroom?

**Sandor Szücs:** Yeah, you don't care about testing everything. You just implement where you are in the code.

**Natalie Pistunovich:** From scratch.

**Sandor Szücs:** From scratch.

**Natalie Pistunovich:** Like, all you get is kind of you look at the API copy, the API titles, functions, signatures, and without looking.

**Sandor Szücs:** Exactly. And this is what I most often do. This, only this, and I think how I can make some functionality as simple as possible. And then after dropping the first iteration, basically, I check "What do others do?" And then I see, "Oh, they are also as smart as me. They also do this." And then I think "Oh, maybe it's the right approach." Maybe I have also other ideas where to put it... And after, then, if I think "This is good code" and so on, then I start to test, and every change comes with test and documentation. There's no change that you do that has no documentation. It can be one line, if it's okay, then you don't need documentation, but every feature, every change that changes a feature is always also having documentation. Since years now like this, and I think you have to maintain the documentation. I think the worst thing is if you have a split of great code, and then there's no documentation... Or old documentation is the worst. Even if it looks shiny, if it's not good...

I see so often in open source they have documentation, how to install the software, and then it has some features, but I don't know the architecture. They have no picture of the architecture. And then I say "Hey, I have now ten components installed in some Kubernetes cluster, with some templating foo that created a lot of things I have no clue about... I don't want to start like this. I have not the time to look at your codebase to understand how this works together. If you don't add this, I will never touch your code, and also not use this." I have not the time. I can build it myself faster than to get this... At least the functionality I need. I think this is very important.

**Natalie Pistunovich:** \[00:36:25.11\] I can absolutely imagine some AI tool that's coming up that will be just reading all the code and then creating for you the architecture. Just another one add-on in the GitHub Marketplace.

**Sandor Szücs:** Yeah, maybe. This is a good one.

**Ole Bulbuk:** That would be nice, but it probably would be just as easy if you could understand the functionality; you could rewrite it in a clean way also.

**Natalie Pistunovich:** Hm... "Did you mean to drop those three lines into this one?" \[laughter\] Yeah, it will be interesting how will it be for things like Go, where efficiency is not as valued as simplicity. You'll have to fine-tune it kind of for the concept of each language. Yeah, it will be interesting to hear back this episode like in five years, go back to this concept...

Yeah, the AI coding world is a little bit conflicting these days. Some people like it, some people not... And there are all sorts of opinions around that. Some are unpopular.

**Jingle:** \[00:37:25.22\]

**Natalie Pistunovich:** So now comes the fun part, where I'm asking you both if you have an unpopular opinion, what is your unpopular opinion, and then we go and paste it on the social medias, and run a poll - is it actually popular or unpopular? So who would like to start?

**Sandor Szücs:** There is no AI, there's only ML.

**Natalie Pistunovich:** Okay, okay... Wanna elaborate?

**Sandor Szücs:** I mean, AI - in people's mind it's always that can think about a problem. And this is actually not true. You always have the ML models that do something magic, and so on.

**Natalie Pistunovich:** Interesting.

**Sandor Szücs:** Yeah. I think the whole AI naming is a bit weird, because normal people like non-engineers think computers can think like a brain... So I would keep it a bit lower than the excitement always is. I'm not so excited about all of this. I write my code better myself than to let them do the code. It's too slow for me to read it later if someone else wrote it.

**Natalie Pistunovich:** Yeah. If it's too slow, yeah. But the thing you said before, that your code is better than the AI code - that can be your second unpopular opinion. \[laughs\] I wonder -- it will be interesting to see how many people think that their code is better, versus the AI's code is better.

**Sandor Szücs:** The question is "What is better?" Right?

**Natalie Pistunovich:** \[00:39:14.19\] Yeah, interesting. It's a good one.

**Ole Bulbuk:** For who it's better?

**Natalie Pistunovich:** Yeah, that's also a good question. Define... Yeah.

**Ole Bulbuk:** I mean, for me it's better when I have written it, because then I know it, by heart at least, a lot of the parts.

**Natalie Pistunovich:** And if it's half a year in the future, then you might have some flashback.

**Ole Bulbuk:** Yeah.

**Natalie Pistunovich:** Okay. That's an interesting one. Cool. Let's see how that turns out. Ole, how about yourself? Do you have an unpopular opinion?

**Ole Bulbuk:** Well, I've got one... I think it's maybe not that much with gophers unpopular, but especially probably with managers. So my unpopular opinion would be, according to my sometimes very strict definition, only when you have no gap between product view and implementation view of things, and so on, you have a greenfield project, and everything else is legacy, then I would estimate that in business software at least, more than 90% is legacy, and there is almost no greenfield.

**Natalie Pistunovich:** So your unpopular opinion is that this greenfield is not a thing, almost ever.

**Ole Bulbuk:** It is kind of a thing, and it's possible, but almost nobody achieves it. It's a technical possibility that some people have given up \[unintelligible 00:40:35.16\] and others say "Yeah, we might do this next year", and others don't have an idea where to look for it, even when they have the feeling that it could be a lot better. I think this is the first step that you need to know what you want to achieve. You want to have everything cleaner? Okay. And you can have clean code, which is a lot about details... But there's still something missing, even if you have everything technically according to the Clean Code book.

**Natalie Pistunovich:** So if you have to put that into a tweet, how would you phrase it?

**Ole Bulbuk:** Okay... Then I would say "Much more than 90% of all business software is legacy."

**Natalie Pistunovich:** And not greenfield. Okay.

**Ole Bulbuk:** Yeah. Brownfield, whatever you want to call it.

**Natalie Pistunovich:** It sure is a good episode on the unpopular opinions, before all... And we all know that this is the real hall of fame here, so... Cool. Well, my unpopular opinion is about chocolate. I think that the best thing you can add to chocolate is not nuts, it's not raisins, it's not cranberries or guarana powder, but it's cornflakes.

**Ole Bulbuk:** Corn flakes... And I hoped for licorice... But okay.

**Natalie Pistunovich:** Nope... \[laughter\]

**Sandor Szücs:** I hoped for salt.

**Natalie Pistunovich:** No, no...

**Sandor Szücs:** I love salty chocolate. It's so good.

**Ole Bulbuk:** Salted licorice. This is really great, yeah.

**Natalie Pistunovich:** No...

**Ole Bulbuk:** Totally for that. You can add some corn flakes, too.

**Natalie Pistunovich:** Salted licorice with white chocolate, or with like dark chocolate? Because salt licorice is just not on my flavor palette anyway, and I cannot imagine which of the chocolates would it fit better with.

**Ole Bulbuk:** Normal, the standard milk chocolate.

**Natalie Pistunovich:** Like standard milk...

**Ole Bulbuk:** Yeah. Not especially dark, but white might be a bit too much \[unintelligible 00:42:22.10\]

**Natalie Pistunovich:** If anything is unpopular opinion, this one must win... \[laughs\] Okay. Well, that was very interesting, and I learned a lot of a lot of new, interesting tools that are open source, and are related... So they will be all in our show notes. Thank you for sharing them. And thank you very much for joining. Bye, everyone!

**Ole Bulbuk:** Bye.

**Sandor Szücs:** Bye!
