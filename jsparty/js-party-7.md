**Mikeal Rogers:** Hey, everybody! Welcome to JS Party, where it's party every week with JavaScript. I'm Mikeal Rogers...

**Rachel White:** I'm Rachel White...

**Alex Sexton:** And I'm Alan Samson. \[laughter\]

**Mikeal Rogers:** There we go... Can't even get the right intro without Alex cracking wise. \[laughs\] Alright, we've got a great show today. We're gonna talk a bit about Node.js native modules and VM neutrality, we're gonna talk about Mastodon - the project, not the band... Although we may talk about the band, too. We're gonna talk a little bit about how to get new people into JavaScript. It's gonna be a great show!

We have this new thing coming into Node.js in the version 8 release - it's kind of a big deal - called N-API. People have been calling it Nappy for a while, and then they decide that they are no longer gonna call it Nappy, and it's just N-API now.

Essentially, if you've done anything with Node.js for a long time, you probably at some point had to use a native module, or some module that you used a native module.

**Alex Sexton:** Wait, wait, wait... Nappy? \[laughs\] Is that because it means diaper in Europe? That's how you say diaper in Europe.

**Mikeal Rogers:** Oh, really? God...

**Alex Sexton:** I'm pretty sure a nappy is like a diaper...

**Rachel White:** Yeah, it is a diaper. \[laughter\]

**Mikeal Rogers:** That's probably why we're not calling it that... It's just for Native API.

**Alex Sexton:** Okay, that makes sense.

**Mikeal Rogers:** \[laughs\] But anyway... So if you've been doing Node.js for really anything, you've had to deal with a native module. Native modules are -- we've been trying to rewrite the whole world in JavaScript, but sometimes you still need to bind to some kind of C or C++ module. Those modules basically get bound pretty much directly to V8, to the ABI (binary API) that V8 exposes.

The modules that you're using that are native are probably actually using this middle layer called NAN (Native Abstractions for Node), but all that does is really just kind of a marshal between an older version of Node and the V8 VM APIs there.

This has been problematic for a number of reasons. One is that this really locks us into V8, but it also means that we break all of those native modules every major release of Node, because we take a new version of V8, and V8 has a new ABI in basically every release.

If you've ever upgraded a major version of Node, you've probably had to recompile some of your projects in order to work. If you're on the frontend, it's probably because of the SaaS library - there's a really popular SaaS library written in C. If you do database stuff, it's probably the level ecosystem, if you do robots it's probably Serial Port; Serial Port is a native module and it needs to get down in the depth there...

There aren't that many native modules in the native ecosystem, but if you crawl through the deep dependencies, the depths of depths of depths, about 30% of the modules in NPM are indirectly dependent on some kind of native module. Breaking all of those at a release sucks, nobody wants to do that.

If another feature impacted 30% of the ecosystem, Node.js would do everything that it could to ensure that that never broke between major releases. Nothing that impacts the ecosystem that much, other than native modules, would ever be considered in the core project.

We've been trying for a very long time to get past this, but the main problem has been that people need to support it - Google has to support an API that we can bind to indefinitely, right? They're not gonna guarantee support for any kind of middle layer. So even then, this native refactoring for Node - it went through a big breaking change because of the way that V8 exposed its API or changed so dramatically that it actually couldn't marshal between everything anymore, and it had to do a breaking change.

\[04:16\] So if we create an API and we wanna guarantee that it's gonna last forever, we need Google to support it, and we need any other VM that supports Node to support it.

That brings us basically to io.js. In the io.js days, we started working a lot more with Google. Google was very happy that we were taking newer versions of V8 in io.js, and from that point on, certain members of the V8 team, particularly from the Google Cloud project, have been working really diligently on Node.js and a lot of the integration points.

An effort was lead by Microsoft, because they, for Node Chakra (Node.js bound to Microsoft Chakra VM rather than Google's V8 engine), they had to just emulate the entire API... They really felt the pain of this problem, so they lead an effort along with Microsoft and even some people from Mozilla who were doing SpiderNode, to create a native API...

**Alex Sexton:** That's still going?

**Mikeal Rogers:** Well, it was rebooted.

**Alex Sexton:** Okay, got it.

**Mikeal Rogers:** I would not say "still going." I think they took like a four-year break.

**Alex Sexton:** Got it.

**Mikeal Rogers:** Yeah, so they got basically rebooted around this whole native API effort. So now for the first time Node 8 (the eighth major version of Node.js), there will be a flag where you can try out this new native API, and people can start binding to it. It's really exciting, because now major versions are not gonna have these giants bricks, and if you write a JavaScript virtual machine - a lot of people are writing new JavaScript VMs - you can expose this API in the future and Node will just work. Questions, comments...?

**Alex Sexton:** So back to how we pronounce it... \[laughter\]

**Rachel White:** Awwgh...

**Alex Sexton:** It reminds me -- there was like the NaCl and PNaCl... Some people called it PNaCl \[06:09\], which I always disliked...

**Mikeal Rogers:** I liked calling it Nappy... I was told shortly after the N-API Working Group met that they no longer wanted to call it Nappy, and not a lot of people are referring to it as Nappy, so I've been respecting that... Even though I don't agree; I liked calling it Nappy.

**Rachel White:** I can understand why people wouldn't wanna call it that. It could have a lot of negative connotations not just related to diapers, so... \[laughter\] But you know, diaper -- you don't want us to see your codebase with diapers anyway...

**Mikeal Rogers:** \[laughs\] Yeah...

**Alex Sexton:** You guys need to speak for yourself. Diaper.js comes out this fall.

**Mikeal Rogers:** Is that a library or a conference? Is that a conference at your house where people are allowed to change your baby for you? \[laughter\]

**Alex Sexton:** No comment at this time.

**Rachel White:** So I'm looking at the repository for this... So you mentioned the Node SaaS thing, but what are some other -- are these lists of modules, the LevelDown, NanoMessage, Canvas... Are these ones that already have enabled it, and there's other ones that need to be converted in order to be compatible with it?

**Mikeal Rogers:** So one of the things that this whole project identified early on was "Okay, what are the most used native modules? Let's make sure that we can support those." It's virtually impossible to take everything that the V8 VM or the Chakra VM does and abstract it into an API that can just live in perpetuity, right? Not even NaN does this, which is the thing that everybody's biased to today... But if you can look at the most common modules and the things that they do with NaN or with the V8 API, then you can get a pretty good idea of the minimum viable set of APIs that you need to expose.

\[08:09\] So that's sort of what they've done with that list of modules there, it's the most common native modules. Many of them actually use NaN today, so if you can entirely support NaN and have NaN built on top of this native API, then you know that you can support most of those...

A lot of modules actually use NaN for maybe 90% of what they do, and then they have an extra little bit of code that just talks directly to V8 for some kind of other thing, some operation that has to live outside of the NaN API because it doesn't support it, so they wanna make sure that they support even that last 10% when they go live.

**Alex Sexton:** I have a question... The Node GeoIP - is that at all related to this? You were like "That's native something or other..."

**Mikeal Rogers:** Node GeoIP... I don't know if I'm really familiar with that. Is it a module?

**Alex Sexton:** Yeah, it's super popular for building native something or other...

**Mikeal Rogers:** Oh yeah, here we go... "Native Node.js implementation of MaxMind's GeoIP API." Cool...

**Alex Sexton:** Yeah, I think this is in like half -- I don't know if I've installed Node modules in my life and this wasn't one of the modules that came down...

**Mikeal Rogers:** This module looks like pure JavaScript. This looks like it's not a native module, though.

**Alex Sexton:** Okay... Feels very nativey. Whenever you download it, you have to get the Node headers.tar.gz thing, and that broke this past week whenever NPM went down.

**Mikeal Rogers:** Oh, wow.

**Alex Sexton:** I guess the CDN went down, or something...

**Mikeal Rogers:** This might depend on a native module, so that's probably what it is.

**Alex Sexton:** Okay. \[pause\]

**Mikeal Rogers:** Cool. \[laughter\]

**Alex Sexton:** So the answer is "no".

**Mikeal Rogers:** Yeah, yeah... Another really annoying bit of this too is if you've done any Electron development, Electron has its own version of Node in it, with its own version of V8. If you have native modules, you need to compile them, not against the command line Node and command line NPM that you run on the command line to install the native module, but you actually need to compile them against the V8 and Node that Electron uses and Electron has, so there's all this crazy work that you have to do to swap out the header locations and make all that stuff work as well.

Hopefully this will also make that a lot easier to deal with, because if they're all just bound to the same API, then they can just get compiled and be hunky-dory... Hopefully. We'll see. It's still very early days, but that's the goal - the goal is to make everybody's life easier, and to eventually also have many VMs that support Node.js, so you can run Node.js on all these really tiny microcontrollers and devices, and they can have custom-built engines that work really well for those devices.

**Alex Sexton:** I've built guitar pedals, and I'm looking forward to the day when I can on a six-dollar microchip run all my audio transforms in Node.js.

**Mikeal Rogers:** Aren't we almost there though? What does the Tessl 2 cost? The Tessl 2 is pretty close.

**Rachel White:** I think we're definitely almost there. I've been actually thinking about trying to use the Tessl for some kind of like live visual feeding thing, because I do visuals for music stuff, and you usually need a resource with a bunch of clips. It would be easier than having to build a whole entire mini-computer with a Raspberry Pi.

**Alex Sexton:** \[12:05\] I was wondering, would it still make more sense that since Node.js is just becoming available on these harder for Node.js to run devices - is it actually just an easier way to run Go, or something that you know you can't ever install? If you're really resource-constrained, could you just compile Go via emscripten into JS and then do WASM on the microcontroller for $6?

**Mikeal Rogers:** We just went through four compile layers... \[laughter\]

**Alex Sexton:** Yeah, but I feel like -- not that you can't write JavaScript and it would be good, I'm just thinking in the audio situation I'm constantly resource-constrained, and I'm wondering if just the fact that JavaScript can run there means that I don't have to write in whatever microcontroller bytecode directly...?

**Rachel White:** Yeah, that's the whole point.

**Alex Sexton:** JavaScript doesn't have the memory management to be able to handle it on that resource-constrained device, right? So I guess I'd need to write Rust, not Go if I want a memory-managed language, right? I don't know. Don't listen to anything I say.

**Mikeal Rogers:** Yeah, I mean... Susan's making a really good point in the chat here - the value of writing things in JavaScript is that there's this huge ecosystem of modules that you can plug into...

**Alex Sexton:** Well, not necessarily for my use case... There are not a lot of guitar pedal modules, currently.

**Rachel White:** Well, I guess you're gonna have to make them.

**Mikeal Rogers:** It's like an opportunity.

**Alex Sexton:** \[unintelligible 00:13:38.24\]

**Mikeal Rogers:** But a lot of the underlying... Like, there's a huge bots community that you can tap into to help you build those guitar pedal modules as well, and there's a bunch of people doing different audio stuff and different algorithms for messing around with audio that work on top of web audio that could also easily be used in your module as well. So there are parts of the ecosystem that would be relevant for building guitar pedal modules.

**Alex Sexton:** Maybe.

**Mikeal Rogers:** \[laughs\] Yeah, and these devices are only getting cheaper and faster. IoT is an area where Moore's law is still in effect at a single processor level, so they're getting faster and cheaper every year... So depending on how long it's gonna take you to write this module, you may just wanna bet on the cost of that thing that's currently $14 coming down to $7 in a year or so.

**Alex Sexton:** Right. I don't even know Go, so this is purely hypothetical. \[laughter

**Mikeal Rogers:** Well, if we're just saying hypothetical languages that you could learn, you could just learn Assembler. \[laughs\]

**Alex Sexton:** Well, that's what I'm saying... You get the benefit of a language that you don't mind writing, which I assume Go is, and then you can still do something -- and I still think Go is actually a bad choice. Rust or something might be a good choice, where you have memory management, it's memory safe, and then you do have to write Assembler.

**Mikeal Rogers:** My issue with people who talk about managing memory by hand as a feature is that you're living in this crazy world where you wanna do that and you're not gonna mess it up, and very few people live in that world. If that's the only world that you can be in in order to access a particular device, then I don't see a lot of software being written for that environment until they get some \[unintelligible 00:15:27.03\] democratized.

**Alex Sexton:** Right, but I think that's the environment currently with tiny six-dollar chips for audio pedals, or whatever. That's all.

**Mikeal Rogers:** Yeah. Well, you know, some day...

**Rachel White:** When does Node version 8 come out?

**Mikeal Rogers:** Soon... Man, I should really know this. We're working on a lot of the messaging stuff right now, but I believe it's this month; I think it's April. Yeah, April or early May will be the initial release. A lot of people wait another six months though... For six months it will be the current release, and we're a little bit more liberal about adding features and stuff like that while it's the current release so a lot of businesses and enterprises and stuff like that wait until we put it in the LTS, where we have a slightly higher bar for getting code into it.

\[16:16\] But yeah, it will kick over pretty soon. Async 0.8 will also be in there, so that's fun.

**Rachel White:** What else is in there? Unless you shouldn't tell us, because then we can talk about it next week, or something... \[laughter\]

**Mikeal Rogers:** I think those are the two main points - the new native API stuff and Async 0.8. Every time I say Async 0.8 -- there's actually a video of this on the internet... Ben Michael, or Mitchell -- I love Ben, he's one of my favorite people, but I always forget how to pronounce his last name... He's an amazing musician, he worked for &yet for a while... He did the full soundtrack for the RealTimeConf and all of that - really impressive stuff.

**Rachel White:** He's really good at karaoke...

**Mikeal Rogers:** Yeah, I would imagine... He did this song, it was to the tune of The Lion Sleeps Tonight, but he did it at NodeConf and it was all about different modules in Node.js and stuff. The a-weema-weh part was "async-oh-eight, async-oh-eight", so now whenever anybody says Async 0.8 I just think of a-weema-weh, a-weema-weh... \[laughs\] Anyway, that was a random little diatribe there.

**Alex Sexton:** Yeah. In the jungle...

**Mikeal Rogers:** Shoutout to Ben. The RealTimeConf soundtrack was awesome! I think that we're good with this topic now...

**Rachel White:** Yes.

**Mikeal Rogers:** We're gonna take a quick break, and when we come back we're gonna talk about getting new people into Node.js. Stay tuned!

**Rachel White:** Getting new people into JavaScript!

**Mikeal Rogers:** Sorry...

**Alex Sexton:** Yeah, I was like "Node.js... What?!"

**Break:** \[18:02\]

**Mikeal Rogers:** And we're back! We're gonna talk a little bit about getting new people into JavaScript. Why don't you take it away, Rachel?

**Rachel White:** Alright, so this is something that people will come up and ask me a lot about at conferences that aren't necessarily JavaScript-focused... They just basically don't know where to start, especially with how we spoke about JavaScript fatigue and a bunch of other things...

There's just so many places to start from, and where should someone start? Should they use React, should they learn React before they learn anything else? Should they pay attention to j.Query at all? Should they learn Ember or Angular, or whatever?

I guess that's what we're gonna talk about, and I'm gonna say "No" to all of that... Learn vanilla... \[laughs\] Only because I wish that's what I would have done... Which I kind of did, but I kind of just learned pieces of everything, and then mashed it all together.

**Mikeal Rogers:** But how far do you take this? I literally learned Assembler and then C and then Perl... You can go way, way down the stack, so what is vanilla--

**Alex Sexton:** I actually learned hardware logic gates, and then I learned Assembler, or then I learned binary...

**Mikeal Rogers:** \[laughs\] Oh, god...

**Rachel White:** I guess that depends on what your goal is.

**Mikeal Rogers:** \[20:06\] I know, so how far do you go...? Like, even in vanilla JavaScript, what does vanilla JavaScript mean? Do you learn only raw DOM calls, or are you allowed to use j.Query when you're learning JavaScript?

**Rachel White:** Well, I guess that depends on -- I mean, I've had jobs where they've gotten mad if we used j.Query, and then I've had jobs where it was like "Use j.Query if you would like to use j.Query." I guess it depends on if you wanna focus on frontend, if you wanna focus on backend, if you wanna do full stack, if you wanna do JavaScript robotics, if you wanna do creative coding... It all depends on what your focus is going to be where I think you should start.

**Mikeal Rogers:** And where does some of the tooling fit in though, right? Babel is not vanilla JavaScript, you are compiling it down... But you're also technically kinda using a newer version of the language, so does that count as extra stuff that you're learning and not vanilla?

**Rachel White:** You mean like somebody going in and understanding ES6 syntax, and stuff like that?

**Mikeal Rogers:** Like, should they start there, or should they start without that tooling, in your opinion?

**Rachel White:** I don't know... That's a hard question. I can only speak from what I struggle with as somebody that definitely still does not understand algorithms or anything like that... I'm pretty much just solely good with DOM manipulation stuff, frontend strictly, and obviously Node and Node robotics... But I'm a weirdo. My method was totally different, and I wish that when I started there was resources available to me that there are available to people today.

I think the JavaScript 30 course that Wes Bos just came out with is pretty decent... It gives you a small exercise every day, and you are slowly building up the -- I guess it wouldn't be muscle memory, but the repetition of common things that you would use in JavaScript, like for loops and stuff like that to understand it.

**Alex Sexton:** I think that the question is a little bit loaded, because it's like "Should you start with libraries or should you start vanilla?", but I look at it a lot like music, or something like that. There are people who when they're four start taking lessons and then they learn all the fundamentals and they practice scales, they learn theory, and then they become musicians and are very good and have that type of knowledge. Then there are people who pick up a guitar when they're 15 to impress other people, and then they become musicians as well.

It's actually much more important that you're just doing it in a way that you know you'll keep staying motivated than it is the actual path that you take. I disagree that if I showed you a book of algorithms before you got into NodeBots that you'd be like "Oh, that's something I'm interested in." It's the fact that you got into NodeBots and that you now understand that algorithms can help you that you're interested in learning those algorithms. You have to kind of learn that that direction, instead of the other one.

**Rachel White:** True. And I think that this conversation is unique to people that don't necessarily come from a CS background, too... Well, from my perspective, at least. I'm speaking of self-taught, self-driven people that don't have that fundamental basis of "What is computing?" If you're coming from that background, it would be totally different, because you're gonna understand a lot of the concepts of how the language is structured anyway.

**Alex Sexton:** \[23:58\] Right. And just like in music, people who aren't classically trained always have these weird, interesting -- like, if you master the fundamentals enough, you can do weird, interesting things because you understand why they're weird and interesting... But also, the people who are self-taught, or weirder musicians are often more creating and interesting and do more fun things, whereas the people who are taught via rote stay in the box more often, because that's how they were taught.

It's totally possible to break out of those two molds, but I think that that follows somewhat pretty closely into development, just like any creative endeavor.

**Rachel White:** Yeah, definitely.

**Mikeal Rogers:** A while back I got thrown into a couple situations where it was like, "Oh, get these teenagers interested in programming", and the thing that we figured out to do was not try to show them code or anything like that... It was like pull up their Facebook page - this is how long ago this was; kids still use Facebook... But you pull up a website that they go to all the time, and then Right-Click on an element and inspect it, and then start manipulating the text in it, and they're like "Oh my god, this is not just readable, it's actually writeable!" and then you go from there to like "Copy out that element, put it on a page that you have, but there's no style, so you've gotta move over the style and manipulate it..." So you literally work directly backwards from something that they're already interested in.

They're not gonna learn entirely to program that way, but it is something that will capture their interest long enough for them to go "Oh, now I should really dive into this" or "I still don't care." Some of them still aren't gonna care.

**Rachel White:** Yeah, I totally agree with that. I don't think that people should just be explicitly exposed to chunks of code and be like "This is programming!" If there's a project that you have an attainable goal in -- and I think this applies to anything, not just programming... If you have a tangible - or intangible, if it's on the internet; I guess you could touch your screen, whatever - end goal of an end project and you know what you're working towards, then you're able to break that up into parts. It's a lot easier to see the big picture and understand the smaller parts, and I think that it's better to keep people's interest that way, too.

**Mikeal Rogers:** Yeah. The resource that I keep pointing people at that are new to programming is Free Code Camp, because it is sort of broken out into these structured lessons that you can go through. You basically get a certificate, and the way that they test you out of the certificate is that you actually work on a part of a real web application for a non-profit; so the other side of Free Code Camp is not just like finding people who wanna learn how to program, but also non-profits that need web works to be done, and they also have people that wanna learn how to do project management.

These people break it all up in the project management side, so that all these people learning how to program can bite off pieces of it and get certified. It's really cool, it's a nice mix of good course material and some real world practice, as well.

**Rachel White:** I have also heard pretty good things that seem like along the same lines of Free Code Camp, about Codecademy's intro to JavaScript course. I haven't taken it myself, but I've seen that it gives you those incremental steps of working on different concepts as you go through. I also really like Mozilla's Developer Network site for JavaScript basics, because it tells you a story as it's telling you the elements, and I end up using it as a reference a lot when I'm working on personal projects. I should post that as a link. \[honking sound in the background\] Why do -- stop honking, geez!

**Alex Sexton:** Yeah, so I think that the best way to get into JavaScript is to continuously do things that interest you, and the rest kind of follows. If you go about it the other way... I think once you get old enough and disappointed enough -- age is only barely related to this, but I find that now that I'm older, I've learned enough things to know that if I just sit down and slog through the fundamentals for long enough, it will really end up helping me, and I have that lesson embedded in me. So if you're that type of person, it's not necessarily better - it's probably worse even... But if you're that type of person, then sure, go learn the fundamentals as long as you can delay that reward of actually being able to create things.

\[28:34\] But I think the most important thing you can do is make sure that you're not gonna lose interest, because that's the biggest barrier, I think, to learning programming - there are plenty of people who want to, and certainly it's difficult and we can make things easier in tooling and documentation and all that stuff, but I think the number one thing whenever I've worked with people, or I know people who are like "I wanna learn programming but I don't have enough time" or "I started that and I never finished it", or "I read that book, but I still don't know how to do anything yet"... I think it's just a matter of -- they haven't found the thing that grabs them enough to stick with it, and that's a tough thing; it's just like working out or losing weight, or learning an instrument, anything like that.

**Mikeal Rogers:** That's a really good comparison actually, like diets... A lot of people try diets and don't stick with them indefinitely.

**Alex Sexton:** Right.

**Rachel White:** Are you sub-tweeting me? \[laughter\] There's one other resource that I love to recommend to people... Rebecca Murphy has this really awesome repository -- this is like, once you've got all the basics down and you are more involved in understanding JavaScript, it's a whole entire repository that's built around testing, and the tests are broken and you have to figure out what you need to do in order to fix the tests, and I think that it's really good for people that are actually wanting to get into having a career for JavaScript, and it's always really great for people that are starting out. I'm gonna paste that link, too... Because then it also gives people the fundamentals of understanding how testing works, so it will help in the real world, ideally...

**Alex Sexton:** It's a little dated at this point, right? It's like five years old...

**Rachel White:** It was updated within the past year, but that might have been...

**Alex Sexton:** It's like, links to the Mocha project was switched to the new URL to Mocha... It's actually pretty good, but just know that if you just into like a React codebase, they're not gonna use any of these specific tools, but all the ideas are gonna be roughly the same, and a lot of it is just like the syntax has gotten nicer, the environment has gotten faster, easier to call... People still use Mocha.

**Mikeal Rogers:** We sort of skimmed over this, but I think the motivation that people have for learning programming is really big. We tend to always talk about this in terms of like getting a job, and that one of the reasons why we wanna teach programming to a bunch of people is so they can get better jobs, which is a fine motivator, but I think a lot of the reason why people stick with something is because they actually enjoy it, and a lot of people come to programming because -- Susan was saying, customizing their MySpace pages was how they first got into it, and then they stuck with it because they enjoyed it and they enjoyed that kind of thing... And I think all of us that came up in the early web were like, "Oh my god, View Source... Holy crap! I can view the source and then do something with that!"

Now a lot of the result of some of these tools is that View Source isn't a good onboard into programming anymore... So what are the places that there is still this level of customization that you can do and this level of playing around that you can do?

One of the things I love about NodeBots is that it's still just so basic. You sit down and you just wire up a few things together and it's really simple; you can see how it works, and you can see a result immediately. But what else is like that out there?

**Rachel White:** I would say the places that have popped up in order for you to do code exploration, like CodePen, now Glitch, JSFiddle, those kinds of things... In the past I've used CodePen to be like -- you can type in a keyword, so I'll be like "I'll type in Glitch", (no relation to the other site that we were talking about) because I wanna see what kind of really cool effects people are doing with glitchy stuff, and then I'll be able to go in and see all these pens that people have tagged with this certain aesthetic that I'm looking for, and I could view the code and then play around with it myself...

That's probably the closest that I've found that feels the same way viewing source would be, because I definitely used to do that a lot, too.

**Alex Sexton:** \[32:44\] Yeah... My only issue with those things is that they're still one step between a Normy and that. In order to get to CodePen to search for something, you have to know CodePen exists and you have to know that you want to look for those things in order to learn how to program them, whereas the web in the early days felt more like "I was using this already, and now I can discover how it's built automatically", if that makes sense. And it's not a huge jump, but I think it's not insignificant.

**Mikeal Rogers:** I think that MySpace customizations were kind of like that too, right? You were just customizing your page and then it was like, "Oh, what's this thing?"

**Alex Sexton:** Yeah... Customizing your page is one thing, but you used MySpace not just for customization; you went to your friend's page and you're like "How the heck do they have a gradient background with rounded corners?" and then you had to learn... Or "Does this button resize AND have rounded corners? Are they using Sliding Doors?" and then you'd have to learn Sliding Doors.

**Mikeal Rogers:** That said, the reason why we probably don't use MySpace today is because the visual damage that that did to people and the site in general.

**Alex Sexton:** I mean, that's why MySpace was fun, right? I said it in the chat, but I've actually found that since MySpace died a while ago, the generation of programmers that are coming into jobs and open source projects that I have often are talking about customizing their NeoPets page. I think they actually end up accidentally being these probably more niche sites - I mean, NeoPets probably was big as well, but not as big as MySpace - where this type of thing is still possible, and then these little communities of people who accidently learn how to program pop up, which is cool

**Rachel White:** Yeah.

**Alex Sexton:** WordPress is what Adam's saying in the chat... Which I could see. There are one-click WordPress installs and then you get into themes and then you wanna update... I actually think that maybe the fact that a lot of people listen to podcasts and SquareSpace sponsors every single podcast in the entire existence, or whatever, so you hear about that and then you do SquareSpace and it's like these slightly modifiable things... Some of that... Just the ubiquity of the web replaces the need for a single product that makes this happen; the ubiquity of apps and the coolness of the tech culture among Western society - those are all drivers towards people wanting to build an app or get rich, or whatever... That pushes people in that direction.

**Rachel White:** I think a lot of the older natural code exploration that people did with MySpace and NeoPets wasn't out of necessarily a desire to learn how to code; it was pretty much more of a necessity for wanting to make something look cooler, and then that just ended up having to also be code... I don't know what that would be now.

I've never messed around with SquareSpace, so I don't know how specific you can get. I don't know, that's a weird thing.

**Mikeal Rogers:** I think just the act of saying, "I have a website" - not a Facebook profile, not a Twitter profile, not something in a social network, but literally like "This is my domain name" is really far down the path of like "Oh, you're basically gonna start programming pretty soon", just because of where the world is now.

**Rachel White:** \[36:33\] There's not really that need of necessity to do it yourself anymore, because so many places have come along to just do it for you.

**Alex Sexton:** I think that's a more fun way to learn. If instead of MySpace there was like "Here's a hosting platform where you can host a profile that connects with other people's friends" - that's GeoCities WebRings, or whatever, and that was successful, but not as successful as MySpace, right? I think going at it from that angle, giving someone something that they want in order to immediately get the gratification, and then telling them "Now you can customize this in order to become cooler among your community" I think is a really powerful mechanism for learning.

**Rachel White:** Yeah, but I don't think there's that many places that do it anymore. I don't remember seeing any sites recently... You used to be able to just totally customize your own CSS in and drop it into some places. You can't really do that anymore, but I guess -- Erik's saying Tumblr... Tumblr's definitely, I would say, a really modern equivalent of MySpace. They have their own custom templating agent that people are having to use in order to figure out how to display certain things on their profile... I think it's pretty similar to Mustache templates, with curly braces and stuff...

**Alex Sexton:** Yeah, it's fine...

**Rachel White:** And a lot of custom Tumblr pages actually evoke those early-mid-2000s design aesthetics, too.

**Alex Sexton:** Sure.

**Rachel White:** Maybe I'm just old, but they're also very small type, and the cute little animations and stuff, so it's kind of like how it was however long ago that is now.

**Alex Sexton:** Yeah.

**Mikeal Rogers:** Awesome. Alright, I think we're about to take a break now. When we come back, we'll talk a little bit about Mastodon.

**Break:** \[38:26\]

**Mikeal Rogers:** And we're back! Time to talk a little bit about Mastodon, the GNU social-compatible microblogging server. What the hell does that mean?

**Rachel White:** Servers! Servers! I will tell you what it means.

**Alex Sexton:** Federated.

**Rachel White:** Yeah, so Mastodon is a social network, and it is compatible with GNU social, but what it's doing is if you look at it, I think that the UI is very similar to how TweetDeck used to be, so it is definitely trying to be an alternative to Twitter. The cool thing about it and the reason that everybody is super excited about it is because it's decentralized. What that means is anybody can take the source code and spin up their own flavor of Mastodon on what is called their own Mastodon instance, and then they're able to participate in the whole entire social network.

\[40:13\] There are certain quirks to that. The main one is mastodon.social. This is the original one that has been in development for a bit. There's also mastodon.xyz. We'll talk about those two first.

What they are is separate servers, but they're also separate federations, and the way that I like to compare these federations as a concept is how Star Trek has federations. Basically, there's a greater code of conduct, a greater agreement across the whole entire Mastodon network as a whole. That agreement is pretty much like, you know, no racism, no sexism, no ableism, no isms, essentially... "Be nice to people, tag your content warnings, trigger warnings", stuff like that.

The main Mastodon social code of conduct actually explicitly says "No nazis" and "No Holocaust denial", no stuff that is against certain laws in Europe, which is "Hey, what place has a ton of nazis and we don't wanna hang out with them? Twitter!"

So a ton of people have made the jump over to Mastodon this week. The other really great thing is it's open source. It's primarily written in Ruby, the frontend's in JavaScript... There's a ton of different instances now -- there's a Witches team, which is a French base instance that's for people that identify with queer, feminism and social justice issues... Nolan Lawson made one that is toot.cafe, which is for JavaScript people, and he's looking for JavaScript people to join that one and play around with the frontend.

The way that the federations work too is you have an account on one federation - I am mastodon.social/oho, but I have a friend on Witches team, and her name is Kelsey; she's witches.team/@kelsey, and I can talk to Kelsey because both of our federations have agreed that "Yes, we have similar values and they're good, so we're gonna be able to allow cross-instance communications." So you're able to talks to these other places that have common interests, but different usernames because of the way that Mastodon is set up as a social network.

That being said, Mastodon is young, it is new (kind of a pun)... People are still trying to struggle with moderation, so there are some people that are coming in and are being shitty, as they do on the internet... But one thing that I noticed is everybody is pretty much super nice. Everybody is nice, really encouraging... I had mentioned briefly that "Oh, this is giving me a reason to really wanna learn Ruby...", and so many people messaged me and gave me suggestions, and they were like "You can do it!" It was just like a really positive experience, but that's because the community is so young. Does anyone have any questions?

**Alex Sexton:** Via the prediction I'd say that it seems like it will gain some steam, and it may even rule the countryside for a few thousand years, but it will eventually go extinct. \[police siren sound in the background\]

**Rachel White:** \[43:58\] Oh, these cops are coming for you. \[laughter\]

**Mikeal Rogers:** That was the fun police. Okay... So the UI looks a lot like TweetDeck, it's very similar to TweetDeck. It seems kind of optimized for power users at this point...

**Rachel White:** Yeah... There's also though some really great mobile applications for it. I downloaded one for my phone and it works great. That's for iOS... If you go to the main Mastodon repository, there's a whole entire list of apps already. Let's see - there's already apps for Android, and then there's stuff for iOS... Somebody has already ported Twit, which is the Node Twitter streaming API, to allow you to make bots; so there's a Mastodon version of Twit, and I know that the bot ally community has embraced Mastodon... There's a botsin.space federation instance that you can join, for making bots on it.

People are already making tools... Darius (@TinySubversions) made one for helping with OAuth with Mastodon... People are really excited about being able to have their hands in something that they're using as a community, and not have it being controlled by companies. The cost to run a federation is the same cost as it would be to run any kind of server... There is a server instance, you're just spinning it up and running it on your own thing. That depends on how many people you wanna be on your instance.

Right now, I think that they're still trying to figure out the best way to have the main federations, which is .social and .xyz, get other people's instances added into those... It's a whole process, but the issues page of Mastodon has a ton of stuff that you can find; if you're interested in contributing, you don't necessarily need to know Ruby.

They even tag stuff that's fit for newbies, which I think is really great. I don't know, I hope it succeeds...

**Mikeal Rogers:** It looks interesting. There's been a lot of attempts at doing a federated social thing, every time people get upset at Twitter, or whatever.

**Rachel White:** Well, I think that the thing is this has been being developed for a while, though. I don't know how long the GNU social has been working -- I guess I could google it, or bing it...

**Mikeal Rogers:** It's also built on a lot of APIs that they've been trying to do forever, like the Open Social APIs, the PubSubHubbub stuff, all of which people have been developing for some of these coming on ten years now... And a lot of the products that originally -- those were being used and didn't really take off. But you could argue that's not necessarily because of the protocol; it might be because of the actual application, or dealing with Twitter...

One of the annoying things about federation though is just... I wanna subscribe to Nolan Lawson, I don't wanna subscribe to NolanLawson @ whatever random instance that he happened to do. And how do I know that that's the right Nolan Lawson and it's not the Nolan Lawson at some other of those that is trying to be with the same avatar, or whatever...

**Rachel White:** True.

**Alex Sexton:** Well, you know because he's verified, his GPG private key, against other online assets.

**Mikeal Rogers:** So you just lost like 99% if all users of the internet... \[laughs\]

**Alex Sexton:** Yeah... So it's called -- what is the... Web of Trust? Circle of Trust? Web of Trust.

**Mikeal Rogers:** Web of Trust...

**Alex Sexton:** Yeah, I honestly think Web of Trust stuff is GNU's GPG's favorite term to throw around, but I think that works a lot in the favor of one of these federated networks, and it works for the nine people who use GPG key servers as well.

\[47:59\] If you've used Keybase, that's a good example of knowing that Nolan Lawson is really -- if you could verify yourself on Keybase, along with on Mastodon... Maybe they should implement that. Then you could know that this was verifiably, provably via math the correct Nolan Lawson. Does that make sense?

**Rachel White:** Sort of...

**Mikeal Rogers:** Yeah, enough.

**Rachel White:** Well, one thing that I do wanna point out that I think is important is if -- I don't think that Mastodon is trying to be a Twitter replacement. I think that Mastodon is filling a void that a lot of people need. They don't want to interact with people that think trolling is fun. The explicit, very strict code of conducts and specific federated instances that have their rules are extremely friendly to people that are queer and transgender, very interested in communism and socialism and anarchy and that kind of stuff... And Mastodon has come out of that to kind of give them a place where they feel safe talking about this thing, and they don't have to think that every single anime avatar is gonna be somebody that's gonna tell them to go fuck themselves.

I don't know, I've seen a lot of tweets lately that have been like "Hey, Mastodon users, if you see people with anime avatars, they're probably just like artists and geeks, and LGBTQ folks, instead of nazis..." Actually, Nolan said this. So it's like a bit of a culture shock.

Then I saw a post the other day that was very nice and interesting, and it was essentially "Oh my god, Mastodon is a way to be nice, but in a chill way, to strangers on the internet. This is all I've ever wanted in life, to make some mother-- feel good" - censor that if you need to. "I came here to be nice to people and chew bubblegum, and I'm all out of peppermint, but no worries! I totally have other flavors, so here, have some gum."

**Mikeal Rogers:** That was the most millennial thing I've ever heard in my life. That was amazing. It sounded like an ad for Gryzzl from Parks and Rec, or something... \[laughter\]

**Rachel White:** Oh my god... I think it's really nice. And it feels nice to go on and be in a timeline where people are not being jerks, and they're just wanting to be helpful.

**Mikeal Rogers:** So how are they enforcing that in the federated model? I understand how you can enforce that in an instance and have a code of conduct for that instance, but because they're federated and they're connecting to each other, how are they filtering the content out of the federation network?

**Alex Sexton:** Well, I'm gonna make an educated guess based on how a lot of the other stuff works. The federations can choose based on who you follow and who the people in the federation follow, what other instances to share content with or not share content with. So both the beauty and the pain of this is that it's perfectly possible, if not unlikely for other social reasons, that the nazis set up their own Mastodon instances and then all federate with each other.

**Rachel White:** Totally!

**Alex Sexton:** But then the crossover of those two federations is actually very small...

**Rachel White:** Basically, they would be isolated. Other federations would opt out into seeing that stuff, so if people do try and join and abuse the service, they're going to be isolated into those silos that they've created for themselves.

**Alex Sexton:** Right. So essentially, in three years you have the Facebook timeline problem where you only are looking at people who are confirming biases - not that I think nazis should have a platform for anything, but also there's a chance for hyper federation -- not federation; hyper-something, where it'd actually be better to open up a little more, in my opinion.

\[52:20\] I try to follow people who I disagree with currently on Twitter, in order to just understand perspective in those types of things. In no way do I mean nazis or misogynists, or anything like that... I mean fiscally-conservative people, or whatever.

**Mikeal Rogers:** I actually really hope that they do create their own instances and have their own federation network, because then you're gonna see them fracture and get mad at each other... The people there are crazier and crazier; it's gonna be great. \[laughs\]

It's like the 4chan/Achan problem...

**Rachel White:** I mean... Yeah. It's just subsections of horribleness.

**Alex Sexton:** That's a really good example.

**Rachel White:** But I have to go now. \[laughs\]

**Mikeal Rogers:** Okay. Well, share your pick with us before you go, and then me and Alex are giving our picks.

**Rachel White:** I didn't pick one, because I thought I was able to go early. \[laughter\]

**Alex Sexton:** Your pick is undefined.

**Mikeal Rogers:** What's your favorite hot sauce? That'll be your pick.

\[phone ringtone in the background\]

**Alex Sexton:** Oh, gosh...

**Rachel White:** Well, I can tell you my favorite ringtone... It's not that one. I'm gonna actually say that my pick of the week is going to be Nolan Lawson's branch of Mastodon, because I'm a moderator on it! Come be nice with me and let's make cute things on Mastodon!

Okay, I'm going now.

**Alex Sexton:** Yeah, Mikeal just got dropped... The episode is falling apart live. You heard it here first. He's back...

**Rachel White:** He's back? Okay, I'm leaving now. Have a good weekend!

**Alex Sexton:** Bye Rachel.

**Mikeal Rogers:** Yeah, for some reason when my phone rang, Apple decided that anything else should just be cut off, so... \[laughs\] So picks - Alex, what's your pick?

**Alex Sexton:** My pick this week is GPG Tools. Actually, that was a little bit of a joke... My pick is Keybase. I think all of the -- so, GPG is GNU Privacy Guard, which is an OSS version of PGP, which used to stand for Pretty Good Privacy (maybe it still does). It's all encryption/privacy type stuff, so if you have public key/private key, all that kind of stuff to where you can kind of verify your identity with big, long things. I'm trying to explain it in a way that makes sense, but nothing I do -- that's the whole problem.

Have you ever seen an email come through and it says "Begin PGP encryption"? That's what this is. The thing that I'm actually suggesting that you use though is Keybase.io.

\[55:07\] You generate yourself a private key and a public key, you keep the private key to yourself, you push the public key up to Keybase as well as other key servers, and then you can tweet out from your Twitter account that says "I'm this person on Keybase", and based on that, it verifies that you are really that person. So it ties your social identities to your encrypted identities. Then, if you need to verify that someone is someone, you can use those identities, or send them encrypted mail, if they know how to do that. So that's my pick this week, Keybase.io.

**Mikeal Rogers:** Awesome.

**Alex Sexton:** It's kind of like a user interface for being able to do encryption and privacy and all that kind of stuff in an easier way than it used to be.

**Mikeal Rogers:** Basically it's an identity authority, essentially...

**Alex Sexton:** Yeah, but federated, in the sense that... Well, it's not federated. But it uses other services in order to do those certifications. But it also doesn't need -- so it can be a web page or your email or something like that as well.

**Mikeal Rogers:** Cool. Awesome. So I picked this before and I talked about it a ton... WebTorrents is just one of the coolest projects on the internet... There's a whole Changelog episode about it, there's a great desktop client for using WebTorrent; if you don't know it, it's an implementation of BitTorrent on top of WebRTC and all the peer-to-peer protocols that we have on the web now. But what I specifically wanna plug actually is just pulling WebTorrent in as a library, like you would anything else that you run through Browsersify, and using it in some of your applications.

So start playing with the idea of just dragging and dropping files into the browser and sharing them out like that, and think about ways that you could integrate this completely alternate mode of content delivery and usage. The Changelog podcast on WebTorrent will be in the show notes. It's already been posted in the chat, so that looks good.

That's the show for today. Thanks everybody for showing up, it's been a great show. Thank you to all of our sponsors. Rate us on iTunes. Go to github.com/thechangelog/jsparty and suggest any new topics for us to cover. Also, we record live every Friday at noon Pacific. That's it for this show.

**Alex Sexton:** \[beatboxing\] That's the outro. \[laughter\]
