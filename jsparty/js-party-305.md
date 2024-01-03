**Amal Hussein:** Hello, everybody! Hello, hello. This is so exciting. It's the last show that we are -- well, it's not the last show we're recording this year, but it's the last show we're releasing this year. So this is -- it just feels we're ending this year on such a good note, with such an incredible guest, and a more incredible topic, the topic that's in the name of the show. We're going to be talking about all the things that are new with JavaScript, and we will introduce our guest in just a minute. I want to first welcome Nick, one of my co-hosts for the day. How are you, Nick?

**Nick Nisi:** Hoy-hoy, Amal. How's it going?

**Amal Hussein:** It's going well, it's going well. I had a bit of a morning today, a little bit of a scare... A friend of mine was driving in the snow and lost control of their car, and of was helping with the aftermath of that whole situation... So just a reminder, don't take anything for granted, everyone. Life is short, you know? So yeah. Anyways. So Chris, welcome to you as well.

**Christopher Hiller:** Hi. Thanks for welcoming me...?

**Amal Hussein:** Yeah, you're welcome to be welcomed. Our special guests for today is none other than Daniel Ehrenberg, also affectionately known on the internet as a Little Dan. Welcome, Dan. Hello.

**Daniel Ehrenberg:** Hello. Thanks for having me here.

**Nick Nisi:** Yay...!

**Amal Hussein:** Yeah, we're thrilled. We're so thrilled. So for folks who might not be familiar with Dan, he works at Bloomberg, but I think for me what resonates when I hear Little Dan is I pretty much associate him one to one with ECMAScript and standards work... He's been really, really involved with TC39, and has helped push forward a lot of really incredible specs in JavaScript, both as a champion, as an author, and also just a community liaison. I think he does a lot of really great communication to the community about new specs as well. So Dan, I don't want to butcher your intro, so please, why don't you tell our audience a little bit about yourself?

**Daniel Ehrenberg:** Oh, that was a great intro. So yeah, I'm Daniel Ehrenberg, Little Dan. I got involved in JavaScript when I was working at Google, and I did an internal transfer to the VAT, where I got to implement some of ES6, including some features that were about arrays, maybe some that were not as good, Symbol.species, and helped out with the async/await... And then I jumped ship to a company called Igalia, which is a consultancy that was also working on this project of implementing ES6, and beyond. So we worked on things BigInt, private fields and methods in JavaScript... And now I'm working at Bloomberg. Bloomberg was sponsoring much of my work that I was doing at Igalia, and I'm working on further proposals that I'm excited to talk about later today... As well as improving the way that we use JavaScript in our internal systems, frameworks. We have 8,000 plus engineers here at Bloomberg, and all UI development is done with JavaScript/TypeScript, basically. So we have our own ways of doing it that have been working out well, but it can always be more...

**Amal Hussein:** Yeah, that's really great. That sounds amazing. It's such a -- I also just generally love Bloomberg, and Bloomberg engineers. They're some of my favorite people in the community. And you work on a really cool project; the terminal and the engineering behind that is just mind-blowing, and I hope one day that we will be able to do a show on that in the future. But today, we're here to talk about JavaScript...

**Daniel Ehrenberg:** Oh, wow. That'd be cool.

**Amal Hussein:** Yeah, that would be cool, right? I mean, it is a very cool engineering feat; like, what is the terminal? It's four instances of WebKit wrapped around with a bunch of other custom C++ and JavaScript... It's crazy!

**Daniel Ehrenberg:** Yeah. My coworker, Rob Palmer and I have been talking about making a blog post about all this... And it's just a lot of work that we haven't done yet.

**Amal Hussein:** \[00:07:58.04\] Well, Rob Palmer has been invited. He has had an open invitation to this show. And I know you're listening, Rob, so I just want to say - let's talk about the Bloomberg terminal on JS Party, okay? But today, again, we're going back to JavaScript. There would be no Bloomberg terminal without JavaScript, right, Dan? Is that fair to say?

**Daniel Ehrenberg:** At this point, no.

**Amal Hussein:** \[laughs\] Proving me wrong...

**Daniel Ehrenberg:** In the '90s the Bloomberg terminal didn't use JavaScript, but it's been a pretty core element since the early 2000s.

**Amal Hussein:** Wow, that's amazing. And yeah, I can see how that was the case. But yeah, so getting back to JavaScript, what I'm excited to dig into today, folks, is just -- we have many new listeners, some of you are very familiar with the standards process and how JavaScript gets made, some of you are not... So I of want to do a little bit of baselining for everyone... What is the TC39? What is ECMAScript? This ECMAScripting that we keep mentioning and talking about interchangeably with JavaScript... And then we'll talk about the staging process. So what are the of steps and milestones that a proposal has to go through in order for it to actually make it into a JavaScript engine, and be shipped in the wild? And after that, I hope to get into all the fun new specs that have landed recently, as well as some things that are interesting in stage two and three and one. And lastly, we'll hopefully talk a bit broadly about open source sustainability... So we have a very packed show today. Dan, are you ready? Did you bring your dancing shoes, or the equivalent of that? \[laughs\]

**Daniel Ehrenberg:** I'm wearing some shoes that I got from Walmart after -- one time I was in a kayak, and it tipped over, and my shoes were of destroyed... So I got some $20 shoes \[unintelligible 00:09:38.07\] to the fancy office.

**Amal Hussein:** Nice. \[laughs\] Alright, so let's start with the TC39. What is it?

**Daniel Ehrenberg:** Yeah, so you might have heard of ECMAScript as a synonym for JavaScript. That's partly because JavaScript is a trademark that Oracle of has some intellectual property related to, because of Java. And also to recognize the fact that JavaScript is standardized in ECMA. ECMA used to stand for the European Computer Manufacturing Association. Now it's KFC, it doesn't stand for anything... \[laughter\] It's not even fried anymore. And yeah, I'm actually currently vicepresident of ECMA. That doesn't mean very much. I'm vicepresident of the board, so I'm helping bring in new projects. CycloneDX is now being standardized in ECMA, and trying to bring in WinterCG, which we can talk about later... So within ECMA, TC39 was the 39th technical committee to be created. That's the name. And it's about standardizing JavaScript.

Years ago, before I got involved in this process, I of thought "Oh, it would be really cool to work on JavaScript... But it just seems these things are already of fixed, or it'd be very impossible to change. You would have to be in some-- I don't even know what of powerful position to do it." But instead, we aim to have this open process where anyone can join the committee, people can participate from outside the committee, and make contributions to the language, and propose changes, and work together with the open source community on developing those changes. So because it's -- you know, in the old day, we would have a waterfall model. We would say, "Okay, here's the goals for ES6. Let's work on them for five years, and then publish ES6." After ES6, we decided "No, this is too much. We have to go more incrementally." Just with developing software. It used to be Windows 95, Windows 98, and now we're on these sort of rolling releases.

\[00:11:46.19\] So instead, we develop the proposals through this four-stage process. Actually five stages now. So it's stage one, we have an idea that we're all discussing. That means that someone has brought it to committee, it's on the table, and we haven't yet agreed whether we should do anything about it. At stage two there's a concrete first draft. So there's a concrete specification, showing what the language feature would do, and the committee of agrees that it should move forward. We of hope that it can eventually be part of JavaScript, collectively.

At stage 2.7 - it's the new stage - we've basically finished with the design, as much as we can, in theory, based on community outreach, and based on thinking things through carefully as a committee...

**Amal Hussein:** And discussions with implementers too, right? Because the folks that are working on this stuff for various browsers are also part of TC39, and they weigh in on implementation. Well, they weigh in on the specification as well.

**Daniel Ehrenberg:** That's right. So some parts of the implementation discussion happens before stage 2.7... Like, "Does this seem a design that would be implementable?" But then to get to stage three after that, we have to write tests, conformance tests. So this is Test262. Test262 is a test of the full JavaScript language. It includes all the corner cases - or at least we hope it includes all the corner cases - and it's a it's an open source project that's used by all the JavaScript engines. And you know this, Amal, because you wrote some of the tests. So thank you for your contributions there.

**Amal Hussein:** My pleasure.

**Daniel Ehrenberg:** And for stage three, then we have both the initial design, including the community implementers thinking through logical implications, and then after stage three, we're saying to implementers "If you haven't already started implementing this, well, now it's somewhat stable. You have your tests, so you might want to think about implementing it." Because the community can only move forward once we have some experience, seeing if it works out in actual JavaScript engines.

Sometimes engines try out a prototype implementation beforehand, and that can build some important information. Then at stage four we have multiple engines implementing and shipping the feature, and it makes sense to put it in the JavaScript standard. So at that point we merge the PR; the ECMA 262 is just a normal GitHub repo. It has a CI that builds some Markdown document into some HTML document, and that's the specification. Technically, it's an editor's draft, and every year we have a cut of it. We have a version ECMAScript 2023, or ES2015, which was the same as ES6, and that is what gets standardized formally. But I think if you just look at the current specification that includes all the stage four features, that you can get to at TC39.es/ecma262, then that's what I think of this, the JavaScript \[unintelligible 00:14:46.13\] It's the editor's draft, technically, but it's really the standard.

**Amal Hussein:** Yeah, and it's this book, believe it or not, folks. ECMA is still a legal entity that exists in Geneva, where all the things in the world apparently -- whenever people have to talk to each other and work globally, thing seems to be headquartered in Geneva. It's the neutral, safe zone of the world. But anyways, this book gets printed out. There's an actual -- one of my former colleagues sent me pictures of this; she went into this room in Geneva where all of the actual JavaScript gets printed out... And it's this big, thick bound paper... And there it is, in its physical form. It's quite interesting how that happens, because it's an actual standard; it's an international standard. Manufacturers use it, all these different people rely on JavaScript to do very serious and important things.

**Daniel Ehrenberg:** Yeah. Back in the day, you could write a letter to ECMA and ask them to just send you a hard copy of the standard.

**Amal Hussein:** \[laughs\] Why did they stop doing that?

**Daniel Ehrenberg:** Well, you know, there's printing costs, and then there's--

**Amal Hussein:** Trees, you know...

**Daniel Ehrenberg:** Yeah. I think if somebody really wanted a hard copy of the standard, something could be worked out. Hard copies are still produced. They're archived in the Swiss National Library.

**Amal Hussein:** Right, right.

**Daniel Ehrenberg:** And that's part of what makes it a real standard, in some sense.

**Amal Hussein:** \[00:16:09.18\] Yeah, absolutely. For sure. And just a couple of really important points that you've made there, Daniel... First of all, amazing job summarizing that. Thank you so much for the wonderful explanation of this super-dense topic. I just want to clarify one thing. You said once something is of in stage four, the PR gets merged. It's not the Test262 PR. You're talking about the actual draft PR to edit the spec, right? That there's a repo, and--

**Daniel Ehrenberg:** Yeah.

**Amal Hussein:** Because I think you said the Test262 repo, so I think you just messed that up.

**Daniel Ehrenberg:** Oh, thanks. Yeah. The Test262 PR can actually be merged after the proposal is at stage three. Because even though it's not in the full standard, it's really useful for engines if they have access to those tests, in the same Test262 thing. So in reality, no engine gets 100% on that suite, partly because there's new things being merged, but partly because there's certain edge cases that we're still working out and need to fix in the spec.

**Amal Hussein:** Interesting. Oh, it's interesting that you said that we have to fix them in the spec. I thought that it was "Oh, the way we wrote this code makes doing--" For example tail call optimization, remember that? Safari never implemented that, or JSC never --

**Daniel Ehrenberg:** Oh, Safari was the only one to implement it... But that was --

**Amal Hussein:** Oh, sorry, I had that reversed. I apologize.

**Daniel Ehrenberg:** Tail call optimization - it's a tricky topic. I was involved when I was in the V8 team on coming up with our position... Which was very subtle. I don't know if -- maybe it was too subtle. But if we had automatic tail call optimization, then we would drop some stack frames when you look at the error stack... And that -- we were worried that it would make it hard to debug.

**Amal Hussein:** Interesting. Yeah, I had that reversed. Only one browser had implemented it, and then it was just the other ones said no... For reasons, for reasons. There was technical reasons, you've just said.

**Daniel Ehrenberg:** Well, we said - you know, it should be a specific syntax that you invoke on purpose when you want to do a tail call that's optimized.

**Amal Hussein:** That makes sense.

**Daniel Ehrenberg:** As opposed to it being implicit.

**Amal Hussein:** Yeah. And I would agree with that, especially because you never know what you're breaking, with the depth of the web. So yeah, again, really great summary... And just one thing I want to highlight for folks is that the TC39 has really been kicking butt super-hard since ECMAScript 2015/ES6 came out. We had that big leap. And ever since then, Daniel said, all the other of subsequent releases of the specification have just - they've been less eventful, and I think better for the community, actually, as a result of that. ES2023 just landed quietly this past June, or whatever. And yeah, there's new things, but it's not this big hoopla all the time. So it's nice to see that you all are of doing things sustainably... But I think for me what makes the TC39 uniquely work well is that you have this perfect mix of implementers, so the people that are writing the C++ code in the engines, and then you have language experts, people who are researchers, PhDs, or just really true masters have language design. Polyglots. And then you have, on the third part of this triangle, then you have web developers; you have people that are building things at companies, you have people building things for different consumers, library authors, application developers... And you really need that trifecta of skills in order to get it right. And so by the time a spec really lands, especially -- even when it gets to this 2.7 stage, it's very well thought out.

And I think for me the interesting part, as somebody who's written tests for the language - tests really, really helped implementers. Imagine having the ability to TDD your specification. So I'm an engineer on JavaScript core, I'm implementing top-level awaits... Me being able to have tests along the way, while I'm implementing, to see what I'm doing right or wrong - it greatly speeds up my processes as a browser developer/engineer.

\[00:20:07.08\] But on the flipside of that, for folks who are writing these tests, they're actually the first -- I remember I was writing tests for atomics, for example. I was one of the first people on the planet hitting different edge cases with like "How do I do this in atomics? How do I do that?" What kind of a harness do I need? And how do I need to set this file up in order to make things work?" And it's really interesting being that early, because you also get a chance to potentially give feedback to the people who wrote the spec, and say 'This is difficult. This isn't working." So it's actually this really nice chance to also further polish up the spec.

**Daniel Ehrenberg:** Yeah. Like when you found that bug in my BigInt proposal...

**Amal Hussein:** Yes, yes, I remember. Yeah. Yeah. Yeah.

**Daniel Ehrenberg:** What was the bug?

**Amal Hussein:** It was like the base was wrong... And it wasn't just me. Valerie and I were looking at it, and basically, the base that you had printed, it was like N64 Versus -- I don't know, the numbers were wrong. And if we implemented it that way, no computer would have been able to do it, because it was just too... It was too big of an int, you know what I mean? But yeah, we find bugs in the specs when we're writing tests, too. So it's just -- I don't know. Tests are awesome, and just writing tests for JavaScript is super-meta; you're using JavaScript to test JavaScript... It's fantastic. And even things like modules; testing modules was also unique, because then we had to set up this whole harness for like "How do you test modules using JavaScript?" It's so -- but anyways. Fun engineering challenge, and it was an honor to work on that stuff for a while.

**Daniel Ehrenberg:** And it's an open source project that you can contribute to.

**Amal Hussein:** Correct.

**Daniel Ehrenberg:** There's all these issues for missing tests on the repo, and there's a number of maintainers of that who are happy to help you figure out how to write tests. So if you're interested, just -- I don't know, go to the repository. It's at github.com/tc39/test262.

**Amal Hussein:** Yeah, we'll link it in the show notes. Great project. And even if you just want to look at tests to better understand how does map work, how does MapReduce work... You can learn about specifications even just through reading tests, which is my favorite way also to learn new language features. But anyways, we're gonna get off this nerdy topic, because we have more nerdy topics to cover, which is... What's new, right? So let's start with stage four, and kind of work our way down. And there's too many new things for us to cover in one show, so... I kind of gave Daniel free rein to come up with the things that he was most excited to talk about, and so we're gonna focus on those.

**Daniel Ehrenberg:** Well, I kind of wanted to ask you all, are there any language features you're excited about in JavaScript? ...whether they're being considered by TC39 or not? Nick, you're nodding. What are you thinking about?

**Nick Nisi:** If I let Amal answer, I bet she could answer it pretty quickly... Right?

**Amal Hussein:** I could answer it, but you go. The question was at you, Nick... Don't redirect.

**Nick Nisi:** I know, I know. I just -- I like it better when I'm not the one who brings up types on this show...

**Amal Hussein:** Oh... \[laughter\]

**Nick Nisi:** The type annotations proposal...

**Daniel Ehrenberg:** Yeah, I'm very excited about the type annotations proposal.

**Amal Hussein:** Actually, I am too, for what it's worth, Nick, because that means maybe we can stop saying TypeScript, and we can just go back to saying JavaScript, you know?

**Daniel Ehrenberg:** Well, it's still TypeScript... Is it really? Is it, Daniel? I don't know...

**Daniel Ehrenberg:** Well, when people have their JavaScript with types in JSDoc comments - I don't know, that still seems like TypeScript, but everybody says "No, it's certainly not TypeScript."

**Amal Hussein:** It's an annotation. I mean, it's a comment.

**Nick Nisi:** Yeah. It doesn't matter, because the most interesting part of TypeScript is the language server. So you'll get that no matter what.

**Daniel Ehrenberg:** Yeah, yeah. So type annotations is a stage one proposal that adds syntax to JavaScript where you can put types. It's to solve this problem where - you know, right now you have to choose between either writing TypeScript, in which case you have to use TSC to strip out the types before running the code... Or use JSDoc comments, in which case the types are really ugly, and then you're missing a bunch of features. So it only handles parts of your code. And instead, the idea is "What if we put types in JavaScript?" But there's a problem. Type checking is really complicated, and also TypeScript keeps evolving its type checking pretty rapidly. In a way, that's good. It keeps getting better.

**Amal Hussein:** \[00:24:24.20\] One might say a breaking release every release, you know? \[laughs\]

**Daniel Ehrenberg:** Yeah, yeah. That's not something we could do in JavaScript. We try to be compatible; we call it -- we say web-compatible. We try to not break the web with each release. Maybe there could be something that's technically a little incompatible, but it's not going to break too many websites. That's of the criteria.

**Nick Nisi:** Yeah. And that's the interesting thing, I think, with that proposal, is kind of where it will go and how it might evolve to handle that, to be the stable JavaScript that we're used to, without constraining too much the ingenuity that TypeScript might bring to future releases.

**Daniel Ehrenberg:** Yeah. So the idea is -- you know, because the types don't do anything at runtime... We don't actually want it to be that when you load your website, the first thing it does is this expensive type check calculation. Those type checks should happen at build time, or they should happen in your language server. And then and then what would it even do? It would just like pop up an error message? That's not how we do things on the web.

**Nick Nisi:** No. It would have Duke pop up... Duke the Java mascot guy... I don't know, I'm losing the thread here.

**Daniel Ehrenberg:** You mean that little carrot is named Duke?

**Nick Nisi:** I think so.

**Daniel Ehrenberg:** I didn't know that.

**Nick Nisi:** The little black and white guy. I thought his name was Duke...

**Amal Hussein:** Yeah, this is my signal to change the subject. So hey, y'all, we can come back to this topic, because it's a stage one thing... But yeah, I definitely am personally excited about that. The other thing I'm excited about is something Mikeal Rogers is also excited about, to the point where he specifically came and asked me to ask you, Little Dan, where are his immutable types?

**Daniel Ehrenberg:** Ah, yeah...

**Amal Hussein:** He wants a record tuple. So that's the proposal that I'm also very excited about, bringing tuples into JavaScript. That would be amazing.

**Daniel Ehrenberg:** Yeah. Mikeal Rogers could -- he's been at TC39 meetings before; it would be great to have him back. I remember he brought this big box of very fancy croissants, or --

**Amal Hussein:** Oh, I thought you were gonna say something else, for some weird reason... \[laughs\] Anyways...

**Daniel Ehrenberg:** Yeah, he brought pastries to share into the meeting, which was very nice.

**Amal Hussein:** Oh, nice. That's very sweet.

**Daniel Ehrenberg:** But yeah, records and tuples are stage two proposal. You have immutable data types. The idea we had at first was that these would be primitives. So they would be like numbers or strings. You can compare them with triple equals, they compare by value... But we got some feedback from web browsers, from JavaScript engines that this would be really complicated to implement. And in particular, developers seem to assume that they could do comparisons, and that they would run in constant time if it's with triple equals... But that's really hard, or maybe impossible to implement reliably.

**Amal Hussein:** Why, I wonder?

**Daniel Ehrenberg:** Well, even with strings, the comparison is sometimes kind of cached, and sometimes linear... And it's already a big pain point for developers, where they have to kind of figure out how the strings are being optimized, to decide how to use them. So anyway, we have a rough plan. The rough plan with records and tuples is that they would just be objects instead of being primitives. So we would have immutable data types, they would be like a special frozen arrays, special frozen object, and it just wouldn't work to use triple equals. You'd have to use some other equals method.

**Amal Hussein:** Interesting.

**Daniel Ehrenberg:** And that could be a lot easier for engines to implement, while still getting a lot of the -- meeting a lot of the goals. So for example --

**Amal Hussein:** So what are we losing with that, though?

**Daniel Ehrenberg:** \[00:27:56.22\] Well, one thing that we wouldn't be losing is the ability to use them as keys in maps and sets. Or at least we would have a version of maps and sets that compare those by value. So that's one of the big things that people want records and tuples for, so that you can have a kind of compound key.

**Amal Hussein:** That was such a political diplomatic answer, though... This is how I know you've been doing standards work for a long time. I asked you for the glass half empty, and you gave me the glass half full.

**Daniel Ehrenberg:** Oh, I guess I was just twisting around your words, because I wanted to say that positive point...

**Amal Hussein:** Yeah, of course. That makes sense. Thank you. \[laughs\]

**Daniel Ehrenberg:** Sorry...

**Amal Hussein:** Give me the real answer, though.

**Daniel Ehrenberg:** So you know, we'll miss out on the triple equals.

**Amal Hussein:** Ah... Yeah, that makes sense.

**Daniel Ehrenberg:** What'll happen is that each record in tuple will be its own object. Previously, it was going to be possible for an engine to do this operation called interning, or hash \[unintelligible 00:28:50.02\] which is basically whenever you allocate a new record or tuple, it could check "Is there already a record or tuple with this contents? If so, just return the existing one." And that's a pretty cool optimization, kind of... But really, with modern generational garbage collectors, the cheap allegations are the ones that are only in the nursery; the ones that are short-lived. The expensive ones are the ones that are long-lived.

**Amal Hussein:** Oh, nursery. Is this -- I'm learning terms. I'm learning new lingo.

**Daniel Ehrenberg:** Oh, sorry.

**Amal Hussein:** No, this is fascinating.

**Daniel Ehrenberg:** So garbage collection, it's about how -- you know, in JavaScript you just have objects, and then when you stop using them, they go away. That's because you have a garbage collector that goes around and cleans them up. But the garbage collector has some cost. So the strategy that all browser JavaScript engines use these days is called generational garbage collection, where they have what they call a nursery. So when you allocate a new object, it goes to the nursery, and then you do collections just on the nursery, because it's about what's called the generational hypothesis, that most objects die young, when they're in the nursery. Kind of grim terms... \[laughter\]

**Amal Hussein:** This is so --

**Christopher Hiller:** I didn't realize it was so dark.

**Daniel Ehrenberg:** This is actually what people call it. I don't know...

**Amal Hussein:** I know, I know. This is fascinating. Please keep going. Just ignore our faces and laughter...

**Daniel Ehrenberg:** Is that how life works?

**Amal Hussein:** Yeah, it is absolutely -- I mean, I would say life 700,000 years ago worked that way... Our infant mortality rates have definitely been on the decline for a long time as a human species.

**Daniel Ehrenberg:** Yeah. Well, let's hope that doesn't happen with your JavaScript program. Because the thing is, when the nursery gets cleaned up -- the nursery is way smaller than the old generation. So you really want the collections to happen just within the nursery. If you fill up the old generation, then you have to do a full GC, which takes more time.

So anyway, all this means that interning is not something that you always want to do. You want to do it sometimes, when something's really going to get reused, or really going to get compared.

**Amal Hussein:** And interning is...

**Daniel Ehrenberg:** Interning is the optimization where you reuse the allocation.

**Amal Hussein:** Okay.

**Daniel Ehrenberg:** So if anyone ever told you "Hey, you should really use a free pool, and reuse objects to make your program faster", that might be true, but a lot of the time it's not true, because of this generational garbage collection.

**Amal Hussein:** Yeah. And thank you for reminding me why I enjoy working with high-level languages... It's because of this.

**Daniel Ehrenberg:** Yeah. That's the whole point. You don't have to think about it.

**Amal Hussein:** You know...? Like, I don't want to think about it. I've got bigger problems, and I've got 99 problems, and garbage collection ain't one, you know what I mean? I can tell you that much.

**Daniel Ehrenberg:** Yeah. That's the whole point.

**Amal Hussein:** I mean, it is and it isn't. You know what I mean? It's the meta problem, but it's not the day to day problem. But yeah - Chris, you've been making faces this whole time, and I'm super-curious to click into that... So do you have anything to share?

**Christopher Hiller:** Are you calling on me?

**Amal Hussein:** Yes, I am.

**Christopher Hiller:** ...like my teacher, like...?

**Daniel Ehrenberg:** Yeah, give me a feature.

**Amal Hussein:** Oh, no, no, not give me a feature.

**Nick Nisi:** You're in the nursery, Chris...

**Daniel Ehrenberg:** No, I mean give me a feature request.

**Amal Hussein:** Okay... \[laughs\]

**Daniel Ehrenberg:** Chris, anything to share?

**Christopher Hiller:** \[00:31:54.28\] No, no...

**Amal Hussein:** \[laughs\] I can do it that way. I can say it in that voice if you'd like.

**Christopher Hiller:** Alright, no, so the thing -- so what I'm excited about is more helper methods on maps and sets... Because every time I've got a map - oh, I want to filter all this. Well, now I have to change it back to an array and do the filter. Or just stuff like that. I would love those helper methods, because I use them all the time. And I was really happy about groupBy, until I used it, and it didn't do what I thought it should do...

**Amal Hussein:** Oh, that's good feedback for Dan. Can you tell us what is groupBy, and then what did you expect it to do?

**Daniel Ehrenberg:** I kind of would have wanted the feedback earlier...

**Amal Hussein:** That's already shipped...! Dang it...!

**Daniel Ehrenberg:** Yeah... So let's talk about the map and set one, and then talk about groupBy. So I have good news and bad news. New methods are coming to sets, for union and intersection. And they're not coming to maps. The idea was that the -- this is a stage three proposal, set methods... And it's focused around things like union and intersection. For things filtering, you can do that both for maps and sets. You can get the iterator by doing .values or .entries, or just the symbol iterator. And then you can use the iterator helpers proposal at stage three, you can do .filter on any iterator. Actually, there's a new convenience method, iterator.from; you can put that on the map, and then do .filter on the result. You could .map it...

**Christopher Hiller:** Is this sync iterator helpers?

**Daniel Ehrenberg:** Sync iterator helpers, yeah. It's at stage three. There was a web compatibility issue that forced it to be a little bit delayed... Iterator helper should let you filter over a map or set. And if you want to union or intersection sets, then set methods do that. We had huge debates over these; there's so many details to work out, and a lot of this is about what are the conventions that we're going to use going forward when we add things to the JavaScript standard library. So these are moderately big additions, but I hope that they'll pave the way for even more things that you don't have to use an Npm package for something as simple as filtering over an iterator, or \[unintelligible 00:34:13.27\] or groupBy. What was wrong with groupBy, by the way? How did it not do what you wanted?

**Christopher Hiller:** I don't remember.

**Daniel Ehrenberg:** Well...

**Amal Hussein:** That's not helpful, Chris. \[laughs\]

**Daniel Ehrenberg:** Because I'll take .groupBy and map.groupBy, depending on whether you want it to be strings as object keys, or keys in a map.

**Amal Hussein:** Yeah. And Daniel, actually, this is a good time to ask this question, which is -- I know there's a lot of implementers on the committee, but do you ever kind of just for fresh eyes - because you there is obviously bias amongst everyone in the committee - throw things at folks like Chris, or other people, just to kind of say "Does this work and make sense for you?" I'm just curious...

**Daniel Ehrenberg:** We try. I mean, everything's open on GitHub for people to comment. And people who maintain proposals, who are championing proposals definitely read those comments, and respond to them. Maybe sometimes it takes them a while, but generally, people take that seriously.

Also, a lot of us go to conferences to speak about proposals, or just to learn from different developers... I just came back from -- well, I saw you at NodeConf EU. That was great. In Ireland.

**Amal Hussein:** Yeah. That was so fun.

**Daniel Ehrenberg:** And I was talking about one of the proposals, Async Context... And that's a good way to learn from developers. But yeah, this of podcast is good, also. Generally, we're trying to get the feedback before a certain point, before stage 2.7 or stage three. Because after a certain point in time, we just have to of make decisions and move forward.

**Amal Hussein:** Right.

**Daniel Ehrenberg:** So that always makes it hard when it's not clear when the point is that you should give feedback before. And so I'm always trying to do outreach to encourage people to give feedback earlier in the process.

\[00:36:08.24\] We've also had some specific outreach mechanisms. I've created a couple of calls to talk to tools, authors, and also framework authors, and some JavaScript educators. If you're interested in getting involved in those, please write me through any means of communication you could see on my GitHub page; there's a few ways that you would contact me. But yeah, we'd always like more participation in those things.

**Christopher Hiller:** I retract my displeasure with groupBy... I think it was userError.

**Amal Hussein:** Okay, that's good. Because I love groupBy, for what it's worth. I'm like "It does exactly what I want it to do." And I had wished we had that. When I was writing more code, I wish I had that.

**Nick Nisi:** I in fact just had to write a wrapper, because Node still doesn't have it.

**Amal Hussein:** Well, that's weird, because Node just -- it's the engine. I mean, Node doesn't do -- like...

**Daniel Ehrenberg:** Yeah, but it just came out. It's probably going to be until Node 22. You'll have to wait until then to get it.

**Amal Hussein:** Yeah, until it's in V8, and Node pulls in the latest version of V8. Yeah.

**Daniel Ehrenberg:** I don't know if it's gonna make it into Node 20.

**Amal Hussein:** Well, no, it's already shipped. Node's on 21.

**Daniel Ehrenberg:** Right, exactly. So I don't think it's going to be in Node 20.

**Amal Hussein:** Yeah, yeah. So y'all, I really appreciate that. And if you're listening, everyone, basically what I hear when Daniel says feedback early and whatnot is like "Hey, if you're going to be paying attention to TC39's nines repos, great." If you're gonna watch anything -- those are good repos to watch if you're really interested in seeing what's new with the language, specifically, the proposals repo. But anything that's listed in stage one, and two - those are really in active discussion. And so if you have feedback, or if you want to jump, in they work in the open intentionally, because they want engagement and feedback from the community. So please, go check it out. We'll put all these links in the notes. But you want to go to the TC39's proposal repo, and look at early stage proposals and feel free to chime in.

**Daniel Ehrenberg:** Yeah, I want to especially encourage people to look at stage two proposals, because those are the ones that are under the most strong, active development, that are of the furthest along and most concrete, where we would really to work out all the details.

**Amal Hussein:** Yeah. Thanks for sharing that. So back to my list, because I want to go four, three, two, one. We kind of jumped all over the place. So stage four - promise with resolvers. So let's talk about that. What is that? And Dan, we want you to explain everything to us like we're five. Okay? And actually, I realized we were talking about tuples, and I don't even know if everybody who's listening knows what a tuple is. So if you're listening, we'll go back to that. We'll come back to that topic. Just hang tight, okay? But for now, promise dot with resolvers. Qu'est-ce que ça?

**Daniel Ehrenberg:** So Promise.withResolvers() is something that my co-worker \[unintelligible 00:38:49.04\] in Bloomberg did. It was actually his first project in TC39. So this is little function that makes it easier to construct promises.

**Amal Hussein:** Did you say Jason?

**Daniel Ehrenberg:** \[unintelligible 00:39:03.11\]

**Amal Hussein:** Okay. Okay. Got it. Sorry.

**Daniel Ehrenberg:** Oh, yeah, and there's also a Jason Williams in my team, who's involved in a lot of spec things as well.

**Amal Hussein:** Yeah, I got to meet them at Performance Now, actually. Not this summer, this fall. Yeah. Which was another amazing conference that I went to.

**Daniel Ehrenberg:** Yeah, he was there. There's a lot of cool stuff coming out of the Web Performance Working Group. I wonder if you might want to talk about that sometime on this show.

**Amal Hussein:** Yeah, for sure. I'm telling you, man, I'm booking shows into March right now. It's kind of ridiculous.

**Daniel Ehrenberg:** Oh, that's great.

**Amal Hussein:** So we might want to start publishing two episodes a week to get through everything next year... So we'll see. We'll see. Anyways, so...

**Daniel Ehrenberg:** \[00:39:41.11\] So for Promise.withResolvers(). Right now the promise constructor - we needed a new promise. You have to pass it a function, and then that function is passed to other functions for resolve and reject. And then you're supposed to launch the stuff within the function that you're passing. It's called a revealing constructor. And then the whole thing returns a promise. I think the idea behind this was that it would encourage people to use promises the right way, or something... In particular, if you throw an exception within the function, within that callback that you're passing to the promise constructor, then it'll get caught and the thing will be rejected, rather than throwing an exception... Because you're not supposed to -- when you have a function that returns a promise, it's supposed to always return a promise. If it has to throw, it should return a rejection.

Anyway, that was lost on, I would say, 99.9% of people, the rationale for that... Unfortunately. And instead, it just seems like extra work. You have to save off the resolve and reject functions that you could call them later... And this new form promise.withResolvers is just a simple function that you call; it doesn't take any arguments. It returns you an object with three named properties: the promise, the resolve function, and the project function. And it just saves you an extra five lines of code that everyone has to keep writing over and over again.

**Amal Hussein:** Right, right. No, absolutely. It's so simple. It's kind of like "Duh... Why didn't we do this from the beginning?" But I think for me, we didn't do this from the beginning because we had promised before we had the ability to destructure in this way, and const, and all these things of landed at different times.

**Daniel Ehrenberg:** The destructuring did come out in ES6, and promises came out in ES6, but...

**Amal Hussein:** Because they came out at the same time, I feel like that's not conducive to one thing relying on the other, right?

**Daniel Ehrenberg:** No, I think it had more to do with people at the time felt very strongly about this property that you shouldn't be using the resolve and reject function for very much... And that this would kind of hide them away. And now we've all realized "Well, these things just aren't going away."

**Amal Hussein:** Oh yeah, no, they're super-important.

**Nick Nisi:** That was one of the big things that I had when actual promises came to the language, because it didn't have things like this, and so I had to do this extra five lines, or whatever... Whereas I'm from the old world, where dojo.Deferreds exist, and they were awesome, and did basically the same thing.

**Daniel Ehrenberg:** Yeah, we were debating calling this thing promise.deferred.

**Nick Nisi:** Oh, yeah?

**Daniel Ehrenberg:** But really, that only made sense to people who were around back then. It only makes sense from a historical perspective. Actually, when I was on the V8 team, I removed promise.deffered from the V8's promise implementation... Because that was one of the extra out of spec things that V8 had. And the goal was to not do that kind of thing.

**Amal Hussein:** Oh, yeah, that's interesting. Yeah, I didn't even know that kind of stuff happened in modern times, like post-browser wars, where there were things that are non-spec-adherent that are kind of sugared on. That's surprising to hear.

**Daniel Ehrenberg:** Well, it's because there were these active debates in TC39, different people -- actually, different Google employees, working at the same company, had different points of view, and just sort of went with it. Post ES6, we're being a lot more organized about that.

**Amal Hussein:** Of course, that makes sense. Chris, you had something to say?

**Christopher Hiller:** Yeah. I mean, it came out in 2015, so... Is it 2023 still?

**Daniel Ehrenberg:** Yeah, yeah.

**Christopher Hiller:** Anyway, however many years that is - I can't count them in my head right now... However many years later, I still feel naughty if I save those resolve and reject functions.

**Amal Hussein:** Me too.

**Christopher Hiller:** And I always feel like I'm doing something wrong... Because somewhere along the way we learned that you shouldn't do that. And I don't know where that came from.

**Daniel Ehrenberg:** \[00:43:43.03\] Well, I mean, there should be some other API that returns a promise, and then you should just do then. But the cases where you need to save it off, where it's legitimate to do so, is when you have an API that has a callback, or an event, or something like that. You shouldn't really be using the resolve and reject functions when you're just dealing with a bunch of other promises. But yeah, I think that message was marketed a lot. Probably the new generation of programmers hasn't even heard it, and it didn't fully make sense, because nobody fully followed through on making promise-based APIs for everything. And we have the node FS Promise APIs, we have -- on the web, new APIs are made with promises, but in general, nobody went back and made promise-based APIs for all the old things.

**Amal Hussein:** Right.

**Daniel Ehrenberg:** I think we probably should do that, like with setTimeout at least...

**Amal Hussein:** Oh my God, setTimeout as a promise would be game-changing...!

**Nick Nisi:** But there's always a one-liner...

**Amal Hussein:** Yeah, it would always make you feel so much less dirty about using it. Just a little less, not too much. I never feel good about using -- I never feel good about setTimeouts, because just for me there's some indeterminism that I feel like I'm trying to smooth over whenever I use it, quite frankly.

**Daniel Ehrenberg:** Well, yeah.

**Amal Hussein:** I'm bringing order to the indeterminism, but I don't like it. Does that make sense?

**Daniel Ehrenberg:** Yeah, yeah,yeah. You don't want to use setTimeout to avoid a race condition, or something.

**Amal Hussein:** You got it. You got it. But that's usually when I'm doing it, when I don't have time to fix the real problem; just got to band-aid it over... But hey man, that's called shipping to production. That's life. Okay, so we talked about Promise.resolve() at stage four, so that is coming to a browser near you. Okay.

**Daniel Ehrenberg:** Yeah. So there's a lot of stage four proposals, and generally, in ES2023 we have a bunch of standard library proposals. So we have a bunch of new methods that are being added to existing JavaScript classes, that just make them work a little bit better. We have a bunch of these in stage three as well. I mentioned set methods, and iterator helpers... Also in stage three is the Temporal proposal. So Temporal --

**Amal Hussein:** Yeah, hold on, I want to stick with stage four.

**Daniel Ehrenberg:** I don't think we have time to go through all of them, though.

**Amal Hussein:** Oh, we don't? Oh, no... I wanted to talk about array grouping, because I do think array grouping and error cause are interesting...

**Daniel Ehrenberg:** Okay.

**Amal Hussein:** And there's also a theme there, which is like maybe we're improving our standard library within JavaScript, sort of... Right? So array grouping, real quick.

**Daniel Ehrenberg:** So array grouping. This is kind of like the Lodash group by method. Or is it called group? I can't remember.

**Amal Hussein:** Yeah, in Lodash it's \_groupby, if I'm not mistaken, I think it was...

**Daniel Ehrenberg:** Oh, yeah. So yeah, we made those as methods on object and map. So at first we thought, okay, array instances, we'll just have a group by method; you'll have an array, you'll do .group, or .groupby, or something like that. And then it'll give you the output of the Lodash method. And we wanted two versions. One version that outputs an object, like Lodash does, and one version that outputs a map, in case you don't have string keys, in case you're comparing something else.

So the problem was we kept having trouble coming up with a name. It's really hard to add names to methods on array, because lots of stuff, like type checks -- it's not just because it exists already. Sometimes people add extra methods to arrays, or sometimes --

**Amal Hussein:** You mean prototype pollution?

**Daniel Ehrenberg:** Yeah, prototype pollution.

**Amal Hussein:** ...which is bad...

**Daniel Ehrenberg:** Or sometimes they're not even doing that.

**Amal Hussein:** There's a way to do it safely.

**Daniel Ehrenberg:** Yeah, kind of... Sometimes people check whether something has like a .group property, to say "Oh yeah, if it has a .group property, then it's an instance of my class. Otherwise, it's an array." So if you add .group to arrays, suddenly everything messes up. And that actually happened in this case. So we decided, yeah, we're not going to add more methods to arrays. It's just too bad. Too terrible. Because what happened was browsers actually implemented it, they shipped it, and then they found it breaks lots of websites.

**Amal Hussein:** So it's just object and map, even though the proposal is called array grouping. So why did the proposal name not change?

**Daniel Ehrenberg:** \[00:47:58.26\] Well, it's still Groups Arrays. Well, now groups are all iterables, so it's kind of more general.

**Amal Hussein:** Oh, iterables. Okay. I see. That makes sense.

**Daniel Ehrenberg:** I mean, because it used to be an array method, and now because it's an argument, it's just going to accept any iterable.

**Amal Hussein:** Yeah, that makes sense. And then the Lodash group by, which does pretty much the exact same thing... So now this is part of the language, yay. But it has 850,000 downloads a week. This is where I wish Npm had this memo feature, where it's like "By the way, this package can now be deleted." It'd be cool if we had this broadcast, honestly.

**Daniel Ehrenberg:** Well, Lodash being deleted is kind of a long way off...

**Amal Hussein:** Oh, no, no; this package specifically. Hopefully, you're downloading just that one package, and not all of Lodash.

**Christopher Hiller:** You can use Npm deprecate to mention it on that one package, whoever is --

**Amal Hussein:** Yeah, but I meant like as a community, I wish we had just like a weekly community broadcast... Just like "Everybody..."

**Daniel Ehrenberg:** Yeah, that kind of would be nice, in some ways. The good thing about JavaScript maintaining compatibility is that you can keep using Lodash, and we're not going to break it.

**Amal Hussein:** Correct.

**Daniel Ehrenberg:** And you just have another option that's kind of easier, it's kind of made a little bit better... But it's just an option. This is not like in Python 3 means you have to do this big upgrade process. I mean, maybe ESM brings that, but at least group by doesn't come with that.

**Amal Hussein:** Yeah, no, that makes sense. Alright, so moving on, just because I know we have a lot to cover... Error cause.

**Daniel Ehrenberg:** Yeah. Error cause is when you call the error constructor, you can pass an extra cause. So this happens, for example, if you have a function that calls some other function; then that inner function throws an exception, and then the outer function catches it, and it wants to explain sort of at a higher level what's going on. But also, you want to point to the inner thing, so that you can see more details about what's going on. So error cause lets you bring those both together, just based on the standard error constructor. So you can use the .cause property to figure this out.

**Christopher Hiller:** What's the semantic difference between that and an aggregate error that contains one error?

**Daniel Ehrenberg:** Well, aggregate errors - they're all on the same level. And error cause is like you have one that's the main error, and the other one is the cause.

**Christopher Hiller:** Oh, okay. I'm using aggregate error wrong. Thank you.

**Daniel Ehrenberg:** Well, whatever works.

**Amal Hussein:** Yeah, no, this is pretty cool. And I love this, because I think for me error management and just the observability, kind of the semantics around that just gets so much nicer with this. And it's just easy to kind of abstract into a nice little helper, and just standardize this throughout your whole codebase, and then all of a sudden you just -- it's just nice. So just props to whoever pushed this. I think it's really great. So thank you. And it's now stage four, so yay. Very exciting. So we can move on to stage three, but you have something more to say on this, Daniel.

**Daniel Ehrenberg:** All the stage four proposals, when January comes, then they get rolled into the new JavaScript standard. After then, things that happen during the year of 2023 don't actually make it into ES2023.

**Amal Hussein:** Okay, so this is officially part of 24.

**Daniel Ehrenberg:** Oh, sorry. Yes, this is all ES2024. So...

**Amal Hussein:** That's a big deal.

**Break**: \[00:51:32.04\]

**Amal Hussein:** Alright, so moving on to stage three. So now we're getting into stuff that's either very close to officially shipping, or still in discussion, like stage two and one. So let's talk about decorators, because this has just been like -- when this thing officially gets to stage four, I think there's gonna be like a worldwide JavaScript party, led by Pitbull, Mr. 305, honestly... Because --

**Nick Nisi:** What ECMA standard is Pitbull, 305?

**Amal Hussein:** \[laughs\]

**Daniel Ehrenberg:** What? Who's Pitbull? I'm missing these \[unintelligible 00:52:56.20\]

**Amal Hussein:** I mean, if I have to tell you who is Pitbull... Yeah, the rest of this podcast is basically going to have to be dedicated to it. So I'll leave that for an offline discussion the next time I see you in person.

**Daniel Ehrenberg:** Alright, alright...

**Amal Hussein:** But point being is I think everyone is going to celebrate, because this baby has been in the can for a long time. So what's going on?

**Daniel Ehrenberg:** Yeah, decorators started all the way back in 2014, based on Ron Buckton and Yehuda Katz working together on the initial thing that got implemented in TypeScript and Babel, with some minor differences. But then based on feedback, it evolved over the years in the committee, pretty slowly. There was a lot of opposition from engines initially, because initial versions were kind of too dynamic; they were going to be too hard to optimize. And actually, Michel Weststrate of MobX, he benchmarked the final signals, and found that they were 30% faster than the original signals. So we did actually achieve some performance improvement in practice...

Anyway, they went through a lot of changes over the years. Eventually, Yehuda dropped out, and then I was working on that proposal, also with Ron, and then I dropped out, and Christian Hewlett Garrett got involved working with Ron, who has an amazing amount of constancy... But this was all together with a broader group of people, including \[unintelligible 00:54:23.17\] and others who have these regular calls.

So we went through all these different iterations of what decorators should be, and eventually settled on something that works both from an expressiveness standpoint, in terms of letting decorators express things that we hoped they would express...

For me personally, I really wanted it to be that you could decorate a private field or method, and have that work, which didn't work in the original version... And for implementers, make sure that it was kind of consistent enough to be implemented fast. And working with framework authors, we ensured that it met the various different needs that the frameworks had.

One of the things that we fixed up at the last minute was - for a while, we were going to make it so that if you have an exported class, you have a class decorator, then the export initially came before... Well, initially, in TypeScript and the first version of Babel, first you had the decorator, and then you had the export keyword. And then it got switched, actually initially by accident. But then some people on the committee really liked it, the order; so you would put export, and then the decorator. And finally, we decided at the 11th hour that you should be able to use either order. Because people were pretty worried about the difficulty upgrading from one version to the other; it's going to require a lot of changes in documentation, and such. Maybe it wasn't a big problem, but it was kind of nice that we were able to take the feedback from the decorator community, and make sure that the proposal listened to it.

\[00:55:59.24\] Anyway, now it's at stage three, it's implemented in TypeScript... There's some implementations in progress in engines, but I think they're somewhat early. So I wouldn't expect that that's going to be usable directly in your browser tomorrow, but in the next couple of years \[unintelligible 00:56:14.08\]

**Amal Hussein:** But it's in the works. Yeah. In the next couple of years... Wow. Even the implementation... That's amazing. So it's taking a while. I understand why. I mean, I think implementers were the loudest to contest why this was gonna be really hard to do, if I remember correctly, the first go around.

**Daniel Ehrenberg:** The thing is they always gave objective reasons for what was hard about it. You can't just stand up in the committee and say "Ah! Stop --"

**Amal Hussein:** And say "I don't wanna."

**Daniel Ehrenberg:** Yeah. You have to give reasons for what you're doing.

**Amal Hussein:** \[laughs\] "You're not my real dad!" Yeah, got it. Okay.

**Daniel Ehrenberg:** So that's what helps us keep working and keep being able to make decisions that we really share. We're able to really -- even though we're coming from different points of view, able to work these things out.

**Amal Hussein:** Right. That's really cool. So decorators stage three coming soon-ish. Big on the -ish. But the shape of the proposal, in terms of the actual API, how it works, all of that stuff is pretty -- that's stable, right, Daniel?

**Daniel Ehrenberg:** Yeah.

**Amal Hussein:** So if people want to start learning how it's gonna work... And can folks use it through Babel now? ...I guess that's the other question.

**Daniel Ehrenberg:** Yeah, you can use it through Babel, through TypeScript...

**Amal Hussein:** And the TypeScript version is the updated -- like, it's the spec-compliant version. It's not the runaway train version from years ago.

**Daniel Ehrenberg:** Well, they still have both. I mean, TypeScript, you could still use the experimental decorators flag to get the old decorators behavior... At least I think that's how you invoke it.

**Amal Hussein:** Huh.

**Daniel Ehrenberg:** There was a thing where decorators metadata, kind of core piece of decorators was at stage two for some point when main decorators were at stage three, but now it's all at stage three together.

**Amal Hussein:** Okay. Interesting.

**Daniel Ehrenberg:** So maybe it'll all be implemented in a year, but from a standards timeline, a year or two means yeah, you're on track. This is good. It's happening. I'm used to these really long timelines.

**Amal Hussein:** Of course, of course. Absolutely. Yeah. I'm just being facetious about like two years being a long time, but in standards world that's like the blink of an eye. Okay, so we don't have a ton of time to talk about all of the other amazing things, so I want to just pick out two or three more things, and then we've got other things to discuss. So Temporal - I think we should talk about this, because this is the thing that we've also been waiting on for a while... And it's parked in stage three; it has been for at least two years now, I think. I don't know.

**Daniel Ehrenberg:** Yeah. Temporal has been at stage three for a while, but I think it's really getting to this turning point where it's done, and gonna start shipping soon. So Temporal is a new date and time library in JavaScript. You already have JavaScript Dates, but those are really broken in some core ways. For example, you have methods on the same date that work in terms of UTC and the local timezone, but the local timezone isn't even part of the date. If you move your phone from one timezone to another, and you have the webpage open, then it will make the local timezone methods return things based on your new timezone that you joined later. And all the browsers have these fancy code paths that invalidate caches and such when you change time zones to implement this. And I don't know, it's useful in some ways, but it's also weird; why not have two types - one type for an absolute UTC time, and one type for a local time that has a timezone. So that's what Temporal does - it splits out date and time types based on what pieces of data that you have. For example, if you have just a time, and you don't have a day, then you just use the class for times.

So Temporal has a number of different types. It has good integration with internationalization, so you can use Intl.DateTimeFormat together with all these different Temporal types... There's a type for durations, and a way to format those... And you can do calculations on them. So you could say what's the time one hour from now. But it's not like date, where you're doing set hour, hour plus one. It actually implements the calculations correctly. And it does so with no mutation. So it's like Luxon, in that the date/time that it's representing doesn't change. It's kind of immutable. When you do a calculation, you get a new one.

\[01:00:22.19\] So you can go to the Temporal documentation page at TC39.es/proposaltemporal/docs, and there's a cookbook with lots of examples, and there's a full polyfill... And I'm really, really excited for this to get out there.

**Amal Hussein:** Is the polyfill safe to use? Because the last time I was on a team evaluating this - because we really didn't want to pull in Moment for this new project... But of course everyone and their mama is stuck with Moment, and everyone is counting down the day where they can delete Moment and just start using Temporal... Because obviously, it's a huge package, that takes up a lot of bytes. And so I'm just wondering, this polyfill - is it stable enough for folks to start considering integrating it? Because if you're working on a greenfield project, then you've got low traction on the usage right now. And I would be willing to take the chance on the polyfill if it was decent...

**Daniel Ehrenberg:** Well, unfortunately, the team maintaining the polyfill has been really focused on the needs for it in a kind of specification context to just be completely correct, rather than being totally production ready. And ultimately - yeah, maybe we would have to ship the timezone database anyway if we wanted to -- well, we could be like Luxon and use the Intl.DateTimeFormat for that.

Anyway, there's a lot of messy decisions that you have to make when making a date/time library really production-ready. And we know how to do that engineering work kind of generally, but it just hasn't been done. But this is an opportunity for contributions. The polyfill that was written by the proposal authors is there, it's open source; I will have a link to it in the show comments. And people there would love to have contributors work on productionizing it, and are happy to mentor folks to do so.

**Amal Hussein:** Nice. Yeah, you learn a ton, and get to help everyone else along the way.

**Daniel Ehrenberg:** Yeah.

**Amal Hussein:** Thank you so much. Thank you so much for that context. And yeah, I'm so personally tied to this specific proposal because I'm really close friends with some of the Moment.js engineers that did the right thing and deprecated Moment, and did the right thing and took Moment and put together this proposal for Temporal... They're the ones that actually helped drive this, so for me, this is just like another really great story of how innovation from web developers helped kind of shift the web forward. And it's a really nice, circular story where we get to see it come full circle, and be part of the web platform. And then we're going to have a show on this, so we're just waiting for it to officially hit one browser, and move into stage four... But we're going to have a big celebration about this with the Moment.js team and the folks who championed this... And so it's going to be an epic mega-show, but we're just -- obviously, we're waiting on it to land. Because we don't want to get excited and tell everyone to start using it, and then they're just like "Wait, what?"

**Daniel Ehrenberg:** Yeah, it'd be really cool if we had the production-grade polyfill ready by then, too.

**Amal Hussein:** Yeah, that would be nice. That would be very nice. Because then all you're doing is deleting the polyfill code, but the rest of your code stays the same. It's like the best kind of situation.

**Daniel Ehrenberg:** So Temporal just reached this milestone where there was one part of the proposal that led the proposal champions to go to IETF to standardize a new extension on ISO8601, the date format... Because they wanted to represent timezones and calendars inside of that. Because Temporal can represent those things, and it was important to be able to serialize and deserialize those. So they actually got it added in IETF.

\[01:04:03.23\] We didn't bother with ISO yet, but IETF has released a -- I would get it wrong if I said what the actual stage of the IETF process was. Obviously, the goal is to publish a request for comments, but then you have several requests for comment before that... And I don't know, it got to a good stage where we think it's finished enough for browsers to ship.

**Amal Hussein:** Yeah, that's really cool. So we're talking about stage three right now... And I'm going to kind of switch gears to go into stage two. There's over 20 proposals in stage two.

**Daniel Ehrenberg:** Oh, yeah.

**Amal Hussein:** That's huge. We're not going to obviously have time to talk about all of them. We'll link to the proposals doc in the show notes, and we'll specifically link to the ones that we've talked about here, so that you don't have to click twice... But for now, I think the one that I'm the most excited about is records and tuples. We talked about this a little bit earlier, but can we just explain it to people like they're five? Because we didn't really quite set the context for what the hell are records and tuples; we just started talking about it.

**Daniel Ehrenberg:** Honestly, I would prefer to talk more about records and tuples once there's been more work documenting and publicizing the --

**Amal Hussein:** That's totally fair.

**Daniel Ehrenberg:** ...the revised version. Right now it's just going to be confusing. I can give a brief answer to that question, but I don't want to spend too much time on the topic.

**Amal Hussein:** That sounds like a plan.

**Daniel Ehrenberg:** So yeah, records and tuples - the point of them is to be immutable versions of objects and arrays. And that can be really useful, because if you have your state in Redux or something, or anything that you're passing to useMemo. I guess Redux is considered passe, or something... But we still like it in Bloomberg, I don't know...

**Amal Hussein:** Oh, no, Redux is great. And Redux is not dead at all. It's just taken a new life in Redux Toolkit, which is the way I would use Redux if I was using it today.

**Daniel Ehrenberg:** Anytime you have your state -- like, you don't need Redux to maintain your state, but it's a good way to do so. But anytime you have your state centralized, you have this object or array that has a bunch of other objects or arrays inside of it... And then you're going to change it, maybe with a bunch of object and array spread patterns... And the important thing is you don't want to mutate it. If you mutate it, then you kind of lose the game, because it could make other things that are using useMemo or something - it could make them get the wrong answer, because it won't do these comparisons properly.

So React might forget that it has to rerender something if you do mutation instead of returning a new object. So the important thing is to use immutable objects. Or there was a time when everyone was using Immutable.js, but now everyone just uses the normal arrays and objects, which is just fine. The thing is, if you use normal arrays and objects, you can just mutate them, and fall into this trap. People end up having to copy their state. Every frame, every rerender, they copy this object graph, just to avoid the risk that they're going to mutate part of it. And that ends up causing a lot -- the copying itself takes time, the rerenders that it triggers takes time sometimes... There are a million ways to write all this stuff. So records and tuples gives you this built-in immutable object and array system, that also has this built-in deep comparison that can be used to see if something changed.

**Amal Hussein:** Okay, so I'm going to quickly shift this over into module expressions and declarations. Can we -- that's also another stage two proposal that I'm very excited about. Could you just very briefly tell us about that? And then we want to talk about async context.

**Daniel Ehrenberg:** \[01:07:41.10\] Yeah. So module declarations or expressions are about having inline modules inside of other JavaScript. So ESModules right now, you have one file that contains one module, but that doesn't fully work, for a number of reasons. Sometimes you want to start up a worker with code that you have in one file; it can be of difficult bundler-wise to package another file, and refer to it... I mean, bundlers have worked this out, but it ends up being kind of a configuration mess sometimes. It's nice if you can have everything in one piece of code. So module expressions let you have one of these modules just inline in your JavaScript, and then you could refer to it and pass it to a worker, or import it...

**Amal Hussein:** Export it and read it from another file...

**Daniel Ehrenberg:** Yeah. But then if you want to export it and read it from another file, you might want to use module declarations. So the thing about -- if you have a module expression, you can only really dynamically import it. You can't use the static import statement, because \[unintelligible 01:08:40.17\] the namespace. And module declarations, what it does is it makes a statically-known namespace that has these different locally-defined modules. So all you do - the code looks really intuitive. It's just module, and then the name, and then a curly bracket, and the contents of the module, closing curly bracket. There is a little problem that that kind of conflicts with TypeScripts old deprecated module construct... It's just a synonym for namespace.

**Amal Hussein:** You mean the one that they created when they went off the script with JavaScript? As in like it was Typescript and not JavaScript?

**Nick Nisi:** It was AtScript.

**Daniel Ehrenberg:** In 2012-2013 that made perfect sense. There was nothing for them to align to. There wasn't --

**Amal Hussein:** Yeah, but I guess I have so little sympathy for that, honestly... But I think it's just because I'm a little -- I'm still a little upset that parts of TypeScript are not standard JavaScript. I'm very crispy about that, personally speaking.

**Nick Nisi:** I mean, I thought that that was to prevent Google from forking TypeScript to create AtScript, and it was a compromise to get TypeScript to keep going.

**Amal Hussein:** Really?

**Nick Nisi:** Yeah. Because they wanted to AtScript for Angular.

**Daniel Ehrenberg:** Yeah, they needed a lot of features...

**Amal Hussein:** Oh...

**Daniel Ehrenberg:** But modules - I don't know exactly where modules got introduced in all of this... But modules are good. They're a thing. Now, the TypeScript module keyword is just a kind of synonym for namespace. There is a real problem that needs to be solved before we would do something like module declarations, which is that there's a lot of types indefinitely-typed, even ones that are generated, that use the module keyword... And they have to be switched to namespace before we could even consider this. But then, people probably have private code that does the same thing, so I'm kind of sympathetic. At the same time, it's good that now TypeScript has finally actively started deprecating the module keyword.

**Amal Hussein:** Fantastic. Good choice, team. Good one.

**Nick Nisi:** Yeah. And to be clear, I was wrong. I was thinking of decorators still, for some reason. I'm sorry.

**Daniel Ehrenberg:** Oh, yeah, yeah, yeah.

**Amal Hussein:** \[laughs\]

**Daniel Ehrenberg:** Yeah, the Angular team really wanted decorators...

**Amal Hussein:** Yeah, yeah. And I understand why. I mean, decorators is a huge part of working with Angular code... So anyway, great, great description, and great summary. So the net benefit --

**Daniel Ehrenberg:** So I think module declarations will let bundlers -- you still need bundlers, and bundlers will still do more than concatenate modules, because they implement all kinds of optimizations, like module inlining... But it allows for a simple kind of bundler, that just outputs module declarations, instead of implementing its own loader. So right now, every time you use a bundler, it has no way of using native JavaScript modules. Maybe it can wrap everything in native ESM, but it can't use native ESM internally, because there's no way that's efficient, to have that include multiple different modules that are importing each other. So it ends up having to implement a CJS or AMD loader, which is just -- I don't know, it's just kind of sad. I was hoping that we would get native JavaScript modules. Maybe that's too ideological, or something... But it's something I was hoping for.

**Amal Hussein:** I'm a little confused as to why. I don't think I followed. Why can't it use ESM?

**Daniel Ehrenberg:** \[01:11:57.13\] Oh, if you want to take a bunch of JavaScript modules and put them in one file, without module declarations - sure, you can do that, but you have to do that with the bundler, implementing its own internal notion of modules. It will do the ESM to CJS transform internally to make it work.

**Amal Hussein:** But let's say I'm not using a bundler and I'm just using vanilla JS. What then?

**Daniel Ehrenberg:** Yeah. So if you just use vanilla JS, you can use module declarations to put a bunch of things together efficiently; kind of building your own little Bundler.

**Amal Hussein:** Yeah. I mean, I think you're making a little case for something, but that's its own show...

**Daniel Ehrenberg:** Yeah. We don't have to--

**Amal Hussein:** ...and I'm fascinated. It's fascinating. So we can move on to our last spec that we can dig into, and then I'm really excited to talk about this new thing called WinterCG with you. So tell us about what is async context, which is also another stage two proposal, and why is it important?

**Daniel Ehrenberg:** Async context gives you the ability to share information across an asynchronous data flow. So what do I mean by that? I mean, if you have some data, maybe you stored in a variable, and then you await it - well, if it's a local variable, you can read it before or after the await. But if it's a global variable, you kind of want to save and restore that global variable. So one concrete example is with distributed tracing, with Open Telemetry, you want to remember which span ID you're using.

**Amal Hussein:** Kind of like your request header?

**Daniel Ehrenberg:** Yeah. You want to be able to send it in your request header, but you also want it included in your log messages, so that then you can recover a distributed trace. So the span ID --

**Amal Hussein:** Your request ID, sorry, is what I meant; not request header. Kind of like a request ID, being able to kind of pass that along all the handshakes, right? Like some value...

**Daniel Ehrenberg:** Oh, yeah. That's what the span ID is for.

**Amal Hussein:** Yeah, yeah.

**Daniel Ehrenberg:** So you want to hold it in a global variable, but if you do async/await, then it doesn't get restored on the await, because some other thread might come in and need it for something else. So this was raised as a really important issue within Winter CG. Winter CG is this new group that is working on standardizing JavaScript for all web intercompatible runtimes - that's where Winter comes from - especially in servers. So in servers, this comes up really frequently. It's really important for logging, and for distributed tracing to have access to this kind of storage. They have a way to do so right now in V8 with promise hooks, but that is slow, it's unstable, and it's not available in browsers. And unstable in the sense that V8 has it now, but it's just a V8-specific thing. It's not a standard thing. So it could go away in the future via their deprecation process, if they decide.

So the solution is to make a new thing, async context, which is specifically for storing these variables, that have this property, where they work in callbacks, across await and such. And this was an effort that was jointly done between TC39 and WinterCG. In WinterCG we have the different server runtimes gathered, so that we can discuss the needs together, and then in TC39 we develop the actual standard based off of it. So WinterCG doesn't directly publish its own standards, but it's a place to discover and to develop descriptions of shared needs between different server environments, so then we could figure out how that should affect standards.

Part of WinterCG is defining a minimum common API, a common environment for all things. So you might call this WinterCG-compliant. Actually, some people might already be claiming to be WinterCG-compliant, but we have not defined what this means yet. So it's a little early. Actually, we're working on opening up a new TC in ECMA. Maybe it'll be TC55. Or you could call it WinterTC...

**Amal Hussein:** \[laughs\]

**Daniel Ehrenberg:** And that would be where we could publish standards related to WinterCG.

**Amal Hussein:** \[01:15:58.21\] This is so much, because I'm still kind of jawdrop on the floor around async context and how awesome it is... But I also can't wait -- I'm so eager, I'm foaming at the mouth to dig into WinterCG... And what I want to understand is why was this something that couldn't just be in the TC39? ...as in what -- was it just like this group of people isn't technically part of ECMA, and...? There's so many questions, I don't know where we start.

**Daniel Ehrenberg:** Well, one thing that I like about WinterCG is -- so it's a W3C community group. That's what CG stands for. And that means that anybody can join; it's completely open. You just have to sign on to the intellectual property policy. And that's a really good quality for this kind of group, because it makes sure that we don't exclude anybody who would be an important stakeholder. Also, the initial thing from WinterCG, this minimum common API - it's a set of web APIs. So it's a set of things - like, we say "Yeah, set timeout should be available in all these environments." And fetch should be available, but maybe a different version of fetch.

**Amal Hussein:** Okay, so let's set the environments. What are these environments? And let's maybe set the groundwork first around -- so TC39 typically targeting JavaScript runtimes, JavaScript engines, right? Things typically that run in a browser or Node context. So ChakraCore, V8, JavaScript Core, SpiderMonkey... What else?

**Daniel Ehrenberg:** Yeah, yeah. TC39 is for the JavaScript engines themselves. So all those things you listed. And then WinterCG is for things that go on top of that, like Node, Deno, Bun, Cloudflare Workers... Bloomberg has its own kinds of these...

**Amal Hussein:** Oh, yeah.

**Daniel Ehrenberg:** ...which - we're also integrating Node a lot. So these server environments like Deno, and like Cloudflare Workers - ultimately, they're all aiming to be pretty web-compatible. And this is also the case with Node and Bun. Really, they have a lot of the same goals in mind, and it doesn't make sense to... I mean, it'll be useful for programmers if they can be as compatible with each other as possible, sso then code can be portable.

**Amal Hussein:** Absolutely. We don't want lock-in, we want standards. And you're bringing -- so this is kind of an effort, if I'm understanding this correctly - it is an effort to bring standardization to these kind of higher-level JavaScript server runtimes? Is that right?

**Daniel Ehrenberg:** Yeah, yeah, exactly. So the goal is not to say --

**Amal Hussein:** And would Bun technically be part of something like this in the future, or at present?

**Daniel Ehrenberg:** Oh, yeah. Yeah, we really hope that Bun will join WinterCG. We're definitely watching what they're doing, and hoping that we can all align.

**Amal Hussein:** So can you give us some examples of things that you are actively trying to standardize? So obviously, this async context thing came out of that, which is cool... But what's an example of where something is working one way in Cloudflare Workers, and another way in Deno, and another way in Node...?

**Daniel Ehrenberg:** One that people are working really hard on is fetch. Making sure that you have fetch in the browser, available in servers... And these environments all have their kind of fetch, but sometimes they're a little bit different from each other. There are a lot of cases where the fetch standard for web browsers just doesn't make sense in servers. For example, when it says "You need the right CORS headers to make a cross-origin request", if you're a server, you're already kind of privileged enough to request to whatever website you want. So does it make sense to require CORS headers on cross-origin things? Or enforce the same origin policy in general? So there's work ongoing to specify exactly how fetch should work on server environments.

**Amal Hussein:** Wow... And so where would that standard get published, is my question.

**Daniel Ehrenberg:** Well, it depends. Different things in WinterCG go in different places. We kind of hope that fetch - we can ultimately upstream this within the WATWG fetch standard.

**Amal Hussein:** But is that like a scope creep for WATWG folks? Because they're not often thinking about the server, right? They're just like "We need these damn browsers to talk to each other, and talk the same way", you know what I mean? And so adding this server runtime context actually is a bit of a scope creep for WATWG, in terms of things that they specify.

**Daniel Ehrenberg:** \[01:20:10.23\] Yeah, in some sense. But in another sense, it's something that some WATWG contributors have expressed openness to. So we'll just have to see. Plan A is getting it upstream in WATWG, and plan B is we publish a fork. Other parts won't go in WATWG. For example, the common minimum API, just the listing of all the APIs that are supposed to be supported - that will have to go someplace else; it's not a web standard, it's not on the web... So yeah, we're trying to establish an ECMA technical committee to publish that.

**Amal Hussein:** Okay, so this is beyond, beyond fantastic. Amazing work, you all. Seriously. And as a community, we get to benefit from this level of standardization... Because exactly what you said - it means there's no lock-in. If I want to move my code, lift and shift it, I lift and shift without using a bunch of proprietary APIs. Granted, we've seen with Deno, there's already language-level tools they've put in with this KV store, and that being something that you use when you're using a paid service... It's never going to be 100% interoperable, but having at least a subset that is unspecified - that is very exciting. And I just want to say yay.

I also want to give you some free advice, Daniel, which is - you're doing something new, and I think trying to kind of work within the constraints that... Like, the existing landscape doesn't have a clear space for something like WinterCG from a standards perspective. And so I wouldn't be afraid of just kind of having a whole new committee within ECMA. That just feels like the right thing to do. And also, I really think published specified standard docs need to come out of this work as well. And I think those needs to be independent; I don't think they need to be part of WATWG, or ECMA. I think they can be referenced and linked in both of those spaces, but this feels like a standalone thing, to be honest.

**Daniel Ehrenberg:** I mean, yeah, some things are standalone, and some things are not... Sometimes we've been adding extra APIs to web browsers, to make them work better kind of in all places. And one of those was this tiny library function called response.json, that makes it easier to construct a response if you're writing a service worker, but it's also useful in the Cloudflare Workers API for web servers. So we're really, we're really interested in both sides - both doing some of our own thing, and in aligning.

One other place where we're thinking about doing our own thing is in Socket APIs. TCP, or raw TCP socket - that is not safe to give to websites. Maybe it could be given to like a super-duper PWA with extra permissions... That's something that there's some early discussion about in the W3C. But honestly, they've been talking about that for a long time. So depending on how those discussions go, we might try to work with them, or we might define our own WinterCG library, that would be like a built-in module. So that's still new ground. That would be developed in WinterCG, so the technical development happens all in the open, in that CG, and then standardized in TC55. So right now the ball is in my court to get TC55 started, because WinterCG agreed on it, in principle, that we're going to try to work with ECMA, but we have to define the scope and statement of goals for the --

**Amal Hussein:** That might be a committee I'm interested in joining, by the way.

**Daniel Ehrenberg:** Oh, yeah, please.

**Amal Hussein:** \[01:23:51.29\] Yeah. Especially if I end up at the place that I think I'm gonna end up working. I'm in the middle of interviewing right now... Well, I'm flirting with companies right now. I shouldn't say I'm interviewing. I will start interviewing in the new year... And if I end up where I'm going to end up -- or if I end up where I'd like to end up, then it would be especially poignant for me to join this... But yeah, very cool.

**Christopher Hiller:** So is something like defining what a package manifest looks like - is that part of WinterCG's scope?

**Daniel Ehrenberg:** Oh, yeah. There's definitely interest in WinterCG in investigating pkg.json or other kinds of package manifests. We have a bunch of work streams, and we've made a -- this was, I think, an initiative from Ethan Arrowood; he made a work stream for looking into pkg.json. But I'm not sure what happened once that was started. Definitely Node's pkg.json is something that a lot of different things implement parts of. It seems important.

**Amal Hussein:** Okay, so that's super-cool. So what's going on with TG4 and source maps? This is something I keep hearing about... Can you shed some light on this? Are you all trying to standardize source maps, or something?

**Daniel Ehrenberg:** Yeah, so source maps are mapping of JavaScript source. When you have a minifier or a bundler, then it's going to do this transformation on source, where you have JavaScript in and JavaScript out, but the out hopefully is more efficient. But then when you're debugging, you kind of need to know what the original was, even though the engine's been writing this bundler output. So you need a mapping that you can go from the minified code, and the output, back to the input, the full code. And source maps have been this mechanism to solve that problem. And they came out more than 10 years ago. But the standard for source maps was a bit informal. It was just a description in a Google doc. It was kind of ambiguous. And different people implemented it in different ways.

**Amal Hussein:** Oh, wow, I did not know that.

**Daniel Ehrenberg:** Just a little bit, just around the edges... And yeah, this totally gets on people's nerves; if they're ever developing either browser dev tools, or build tools, you run into this problem really quickly, where it's just not clear how to do things correctly, and you just get an endless stream of bugs due to the interaction of all these different systems.

So yeah, we really wanted to fix this in Bloomberg, because we have a lot of developers debugging via source maps... Actually, we have our own feature that we added to source maps locally, called Pasta Source Maps, which improves some of the information... Yeah, it's a pretty accurate stack trace analysis.

**Amal Hussein:** Oh, fancy. Nice acronym.

**Daniel Ehrenberg:** And so we wanted that information to be part of the standard. But we also wanted to -- in addition to making sure that the standard was unambiguous, we wanted to make a process where more things could happen. So in the end, the group is working together on both this sort of correctness track, which is fixing up the specification so that it can be a real standard that we could publish, and on the features track, where we're thinking about things like standardizing the metadata for Pasta Source Maps... Google made this ignore list feature that we all kind of like and want to put in the standard...

**Amal Hussein:** And so the standard - who's going to implement the standard, and where's it going to get published? And what's the committee responsible for standardizing it? Is this a WinterCG thing, or is this something else?

**Daniel Ehrenberg:** Oh, it's a task group of TC39.

**Amal Hussein:** Okay, so that's the TG4.

**Daniel Ehrenberg:** So it's like TC39 can -- any ECMA TC can sprout its own mini-subcommittees whenever it feels like, and that's what we did with TG4.

**Amal Hussein:** And those also get incrementally numbered? Like, TG4, task group 4...

**Daniel Ehrenberg:** Maybe...

**Amal Hussein:** So there's only been three other task groups for this?

**Daniel Ehrenberg:** Yeah, yeah.

**Amal Hussein:** Or do you guys start at index zero? TG zero.

**Daniel Ehrenberg:** TG1 is the main TC39.

**Amal Hussein:** Okay.

**Daniel Ehrenberg:** And then TG2 is -- well, there was some reason that it was started that way, because it became a royalty-free task group...

**Amal Hussein:** I'm just surprised that y'all don't start at zero. I mean, I would fully have expected you all to start counting at zero, like real programmers. That's my biggest disappointment.

**Daniel Ehrenberg:** Well, there's document numbers. They go by their own rules. So TG2 is for internationalization for ECMA 402. TG3 is for security, and TG4 is now for source maps.

**Amal Hussein:** \[01:28:13.26\] What about that other TC? Like, the secure runtime... I think it was TC53, or something like that.

**Daniel Ehrenberg:** Oh, TC53. That's defining a bunch of built-in modules for embedded systems.

**Amal Hussein:** Right. Right. Right. Is that still active? Because I was there when that committee started, at Bocoup, and I remember Rick Waldron --

**Daniel Ehrenberg:** Yeah, they just had a meeting in California...

**Amal Hussein:** Nice. Yeah. I think Rick and \[unintelligible 01:28:33.27\] were sponsoring that, and making that happen, and I was so excited to see stuff gets specified for embeddable code... And hey, there's a different level of security, and different level of considerations that you need to take when thinking about running code, and from where... So it's very, very cool. So congratulations on WinterCG being a thing. It sounds like there's a need, and I'm happy to see that that need is being funneled positively, through collaboration and standards across the board. We'll put a link into the show notes for folks who want to join; again, it's an open committee, so if you've got opinions, they've got eyes and ears, so they can give you feedback, or you can chime in...

**Daniel Ehrenberg:** Make sure to put that comment earlier, when we were talking about WinterCG...

**Amal Hussein:** Yes...

\[01:29:23.20\]

**Jerod Santo:** Hey. Jerod here, in post... I tried to move that comment earlier, but it was just too hard to fit in. You can just do it in your brain, right? Yeah, you can do it. Thanks.

**Amal Hussein:** I kind of want to end this podcast talking about open source sustainability, and just taking a step back and looking at all these people that are contributing to standards work in various capacities... Many of them work at browser companies and/or companies with pretty big stakeholders of the web, like Intel, and Samsung, and Sony, and companies that really rely on the web to be healthy and functional, for their products to work well for users... So those folks. But then there's folks like from Bocoup, and Igalia ,that are kind of independent consultants being paid by various companies to work on different initiatives, because of their expertise on the platform. And so where are we with just general open source sustainability, and more importantly, making it easy for people who don't work at these big companies to be a part of the conversation when shaping the web?

**Daniel Ehrenberg:** Yeah. Well, not everybody who works on this stuff does work for companies. Some people are doing it in their free time, or as part of these Open Collective funded efforts, the way that Babel has. So one of the things in TC39 was to make sure we had a strong invited expert program, to make sure that people who aren't working for particular legal entities can participate when they're playing a core ecosystem role. But it's always better if developers can get paid, I think. I shouldn't say always; it's great to have code projects that people are doing in their free time, but then when they become really critical ecosystem dependencies, when they become really important projects, I think it's better to have people paid to work on them... So then there's a question - where does the money come from? Sometimes it can be a person allocated part of their time within their day job to do things, which is good. At Bloomberg, we've found it to be effective to work with other consultants, so that they can be full-time on the project. So we pay Igalia, as well as other consultancies...

This is important, because we can really get things done this way. Every year, we have a contract with particular expectations. I think this is an understated thing for open source sustainability that can be done... Everybody's working on setting up Open Collectives, which are great when they can be done. That's a great way to get funding collected from multiple places... But to make that add up to a single developer's salary is really hard; it takes a lot of effort to just collect all the different groups to make donations. It takes a lot of visibility. And some efforts are really important to get done that aren't so visible.

\[01:32:05.05\] So within companies, if the company has resources for it, then they can pay these consultancies such as Igalia to get some work done on these projects. And that's what we've found to be pretty effective in Bloomberg. So we've been sponsoring Node.js, we've been sponsoring Chromium, all through this sort of consultancy model, in addition to -- we have a program of donating $10,000 per month to different open source projects, one project per month.

**Amal Hussein:** That's awesome. So 12 projects a year? How do you all come up with that list of 12? Is that your dependencies, or...?

**Daniel Ehrenberg:** Well, there's so many dependencies, so it's not like we can just go through them in alphabetical order. We have to figure out what's the most important projects. So this is a program that Alyssa Wright, who runs our OSPO in Bloomberg...

**Amal Hussein:** OSPO is like open source office...?

**Daniel Ehrenberg:** Yeah, open source program office. So Alyssa Wright was a co-founder of Open Source Collective, and now is at Bloomberg, and she created this program in partnership with Bloomberg Philanthropies, where we do polls every month - or every quarter? I can't remember. Anyway, we do internal polls of which projects people think are important. There's a nomination process, and then we filter out the ones that don't make sense, and then we do a poll of all the engineers at Bloomberg who are interested, about which projects should be donated to. So if you want to vote - I don't know, Bloomberg is hiring. And you can go onto our \[unintelligible 01:33:31.08\]

**Amal Hussein:** Yeah, yeah. Join Bloomberg. Yeah, very indirect way of doing that, but yes, that is certainly an avenue. That's fantastic, Dan. This is a topic I'm really passionate about personally, because I have so many friends in this community that work on really critical infrastructure, and really critical software, and really critical dependencies, libraries, whatever else... And yeah, they definitely don't get the monetary support, as well as, I would say, just even having contributors and maintainers. And so for me, I'm interested in kind of putting an open letter out to the world at some point next year around "Hey, here's three ways you can get involved. You can just give straight up cash, monthly, or annually, for whatever amount you can afford..." And I think there's a really good formula that Sentry has come up with, for how they kind of come up with how much they can donate, and to who, and whatever else... But there's just "Give money." The other is "Give time." Have some of your engineers contribute to your dependencies, and/or just in general, open source projects that are good for the ecosystem across the board. I don't even think there should be boundaries. If it's open source and free, and it's important, it's worth contributing engineering time... So that's an indirect way. And then the third is a combination of give money and also hire people to work on this stuff full-time. You can do both. You can just have someone on payroll, whose job it is to be a Node contributor, and then the kind of return to you is that you now have this in-house expertise that your team can leverage, and so forth and so forth.

There's so many ways that companies can contribute, but I think without having that framework and understanding of how, I think it's just not top of mind for most people, because they're just trying to ship things to their customers. So we just have to kind of make space for this and do advocacy work as a community... But this is not impossible; this can happen, you know?

**Daniel Ehrenberg:** Yeah. And I would say conversely, if you're an open source maintainer or developer, and want to make this a paid full-time job, I would encourage you to consider looking for clients to sponsor specific pieces of the work involved. And this can be either through making your own, being your own independent contractor, or there are many different consultancies set up that specialize in different areas of open source work, if you just look around a little bit. That's what I did when I was working at Igalia. I didn't want to set up my own, find my own clients and set up...

**Amal Hussein:** A business, and an LLC, and all that jazz?

**Daniel Ehrenberg:** Yeah. There are lots of different specialized consultancies for different pieces of open source... So I recommend that model.

**Amal Hussein:** \[01:36:13.28\] Yeah. I thought it was, for what it's worth \[unintelligible 01:36:14.19\] to share this with you, so I'll share it on air, with you and thousands of listeners, which is like, I really loved when you did that. I loved your stint and your time at Igalia. I thought it was so cool. Because you had -- I don't want to say golden handcuffs, but you had a plushy job at Google for many years, on the V8 team, and then you kind of just went and did the indie open source hacker thing for a while through Igalia, and got to work in this unshackled way... And obviously, you weren't just a developer there; I think you had some leadership roles, which was fantastic... But I just appreciated seeing that move. It's not a move that we get to see; we see a lot of the opposite, where companies like Google and Microsoft poach engineers from places like Igalia, and Bocoup, or whatever... And so it just made me happy to see that, Dan, and I just want to say you're just an awesome human being in general, and I'm happy -- we're lucky to have you, dude. You're your gold, you know?

**Daniel Ehrenberg:** Yeah, and Igalia is a cooperative, so I got a leadership position in the sense that I became a partner of Igalia; an equal co-owner of the company, which is what I think when I was there it was a little over half the company was partners.

**Amal Hussein:** That's awesome.

**Daniel Ehrenberg:** There's a lot of emphasis on equality there, which is something that I liked.

**Amal Hussein:** It's a pretty cool company. Yeah, we should do a show on Igalia at some point... I'll put that in the queue as well, going into now -- we now have enough show topics, I think, to get us through to June next year... So we'll see how much we can get through. But no, Dan, thank you so much for such an insightful and delightful discussion. I mean, obviously, it's very clear that both JavaScript and CSS are moving towards really good semantics in the core language without tooling, and it's just really great to see all the little gaps in the spec kind of fill in with these good ideas. It's just humbling to watch this process also come together, just as a consumer of these specs, now that I'm not super-involved with the standards process anymore.

So I just want to say thank you for everything that you do, my friend. And not just to you, but thank you to everyone involved in shaping the web as we know it. It's the best thing we've ever made, everyone. The web is the greatest thing. It is the greatest thing humanity's ever made. I will argue that; I think so, hands down. Hands down. So it is our collective knowledge base. It is how we communicate and collaborate and build, and create, and share.

**Daniel Ehrenberg:** But if you had to choose between the web and bread, which one would you choose?

**Amal Hussein:** I mean, honestly, I think with the modern web, I think ChatGPT could help me figure out how to sustain myself without bread... So I would probably still choose the web.

**Daniel Ehrenberg:** Well, I really love bread, I don't know... I would choose the bread over the web. That's just me.

**Amal Hussein:** \[laughs\] Okay. Well, I think we see who the true diehards are today. \[laughter\] Anyways. Alright, kids, so with that, we'll end it. It's been a really long discussion, there'll be lots of great links in the show notes... Thank you all so much for your time. Another one in the can. The last show of 2023... Holy moly, what a year, y'all. Thank you for listening. We love you all. We'll be back with a really fun New Year's show, so please tune in for that... And we have a really, really, really exciting year planned ahead. Y'all are gonna love all the shows, so thank you all. We love you. Cheers! Bye!

**Daniel Ehrenberg:** Bye!
