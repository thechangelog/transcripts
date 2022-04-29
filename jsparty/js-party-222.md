**Nick Nisi:** Hoy-hoy, JS Party! Welcome. I'm Nick Nisi, and I'm your host today. With me today I have Chris Hiller a.k.a. b0neskull. How's it going, Chris?

**Christopher Hiller:** Super! How are you -- what's up, in the morning...?

**Nick Nisi:** Ah, it's morning, it's awesome... Every time I say b0neskull I always wanna say it like Bone Saw from the Spiderman I movie... Like "BONE SAW IS READY!"

**Christopher Hiller:** I don't know Spiderman... I do know World of Warcraft, where in Wrath of the Lich King one of the bosses would say "BONESTORM!" And that made me happy every time that happened.

**Nick Nisi:** \[laughs\] Awesome. Well, there's lots of lore to explore with that. Alright, and we have two special guests with us today. We have Daniel Rosenwasser... Daniel, how's it going?

**Daniel Rosenwasser:** Hi! Not too bad. Yourself?

**Nick Nisi:** Good, good. Welcome. And we also have Ryan Cavanaugh. Ryan, how's it going?

**Ryan Cavanaugh:** Good, good. Happy to be here.

**Nick Nisi:** We're excited to have you here as well. And I didn't mention it, but you're both on the TypeScript team, and I'm always ready to talk about TypeScript on this podcast, so I'm very excited to have yo here... It's a very exciting day.

But we're gonna be talking a little bit about TypeScript, and also about sort of types coming to JavaScript, in a way... We'll explore that more. But first, why don't you tell us a little bit about yourselves.

**Daniel Rosenwasser:** \[00:04:29.13\] Sure. My name is Daniel Rosenwasser, and I've basically been on the TypeScript team for about eight years now. Time really flies. I started off as an engineer, and I've been the PM for the last six years or so, because I just love working with the community, and I just have a lot of fun with it as well.

Yeah, and in general I'm just a big fan of programming languages, type systems, runtimes, things like that; it all kind of tickels my brain, I guess. I don't know, it's a weird way to say it, but...

**Nick Nisi:** No, it's definitely unique from typical web app development, or even application development. Developing the language - it takes a different kind of person to really dig into that, and we're all benefitting from it.

**Daniel Rosenwasser:** A lot of people in the JS community are just really geeking out on the specific tools these days, so... I don't know, we're seeing more and more of that. But maybe we're not such different creatures, I don't know.

**Nick Nisi:** Yeah, absolutely. Ryan, do you wanna introduce yourself?

**Ryan Cavanaugh:** Yeah. I'm Ryan Cavanaugh, I've been on TypeScript for - I think it's like ten years now... Worn a bunch of different hats, I started out doing some testing on TypeScript, and then I did some data stuff, and for the past 3,5 years now I've been the dev lead for the team... And much like Daniel, I love JavaScript, I love types, I love programming languages, and I just have a ton of fun with it.

**Nick Nisi:** Awesome. We're happy to have both of you here to talk about that. So let's catch up with TypeScript, since I mentioned we've never had you on before... Tell us what's going on in TypeScript right now.

**Daniel Rosenwasser:** What isn't going on in TypeScript right now...? I mean, it's really hard to recount so many of the things that kind of go into every release... Some languages go out every year, every couple of years, and they have some really high-level great features and whatnot. We go out like four times a year, every three months or so, and there's always new stuff to talk about.

It always helps to kind of break it down into buckets of what we focus on. There's like the type system innovation aspect of it, and that's like "Do we make inference better? Do we make analyses better?" Things like that. There's the \[unintelligible 00:06:36.10\] whatever gets added to JavaScript aspect of it, so if something new comes into ECMAScript, then we add that. There are editor features... A lot of people don't realize it, but basically whenever we're talking about the TypeScript team working on TypeScript, we're talking about not just the TypeScript compiler, the type checker, it's also the same experience that powers your editor experience, which also means that things like refactoring, completions, all that stuff is powered by us.

**Nick Nisi:** Yeah. A language server.

**Daniel Rosenwasser:** And the cool thing about that is also that we also power up the JavaScript experience, too. Anything that we do there is gonna benefit JavaScript users, even if you don't care about types remotely.

Through the editor side, for example, we've got like two new quality of life improvements. I feel like maybe we should jump back and forth, so I'm not just hogging up this one. I don't know, Ryan, do you wanna speak to a couple of these at all?

**Ryan Cavanaugh:** Well, what are they, Daniel? \[laughter\]

**Daniel Rosenwasser:** Okay, so there's the organize imports improvements that I'm thinking of...

**Ryan Cavanaugh:** Ah, yes.

**Daniel Rosenwasser:** ...which is just a very nice -- anyway, I'll let you do it. And then also just like improved completions for objects.

**Ryan Cavanaugh:** We've got new functionality around keeping your imports organized in the way that you sort of set them out... The thing that people keep running into is they have some import that needs to go first, because it modifies some global state, and then they have some subsequent imports, which can go in whatever order, and usually when it's arbitrary, people like it to be sorted according to the filename, or whatever.

\[00:08:10.08\] So the new cool feature is instead of having weird comments, we're just gonna say "If you have an empty line between some block of imports, then we'll set up those groups of imports independently", so that makes it really natural to just keep your imports in the order that you need, except sub-ordered by the order that you (I guess) don't care about. So that's really cool.

**Nick Nisi:** Nice.

**Ryan Cavanaugh:** The other thing we have coming in is when you're writing an object literal, and you complete a function name, we'll fill in the primary names for you, which is just a really nice quality of life feature; just save your fingers for the typing that you need to type.

**Daniel Rosenwasser:** Yeah. It's one of those things where if you see the before and after, you really do feel just the differences. There's small things where if you add a feature to an editor, you might as well not have it if it does the wrong thing every single time, because it just pisses people off... So people have it just saying "Don't regroup the import. Don't collect them all into one squishy thing. Keep them in groups." That's one thing. Then from the type system analysis side there's a couple of things where -- there's better inference within objects, there's better... We have this new thing called variant annotations, which is pretty deep, and Ryan and I both have strong opinions about that too, so we can dive into that... Ah, man, there's just too many things to list off off-hand. I literally have to consult the list.

**Nick Nisi:** Yeah.

**Daniel Rosenwasser:** And it's why the blog posts are always massive. So... Sorry about that.

**Christopher Hiller:** Can I ask a question?

**Nick Nisi:** No, that's much appreciated.

**Christopher Hiller:** ...about the import organizing, or auto-completion stuff. That's in the language server, is that right?

**Daniel Rosenwasser:** Yeah.

**Christopher Hiller:** Does the language server depend on the compiler, or...? Is that how it works? I haven't looked.

**Daniel Rosenwasser:** Yeah. So for people who are not familiar with this concept, basically in the last 5-10 years or so the way that a lot of editors have started architecturally thinking about how do you build an editor, and then also build the thing that powers up the language experience is you should decouple them, typically. So what will happen is you can think of your editor as like the frontend, with the server on the backend, communicating and telling the editor "What should you do when you ask for completions at a specific position."

So what we've learned also, at least at Microsoft, was you shouldn't have two codebases to do different things here. If you build a type checker for let's say TypeScript, or C\#, or whatever, and then you have to build a language server that knows how to report the exact same errors, you're doing the same work twice, and in a way that is prone to have divergences... Which is great for the spec authors, because they can say "One is right. Pick the other one." But it's really bad for users, where you have a different experience between the compiler and what actually get surfaced.

So yeah, it's all layered for us. We build the compiler, and the compiler is leveraging the language service, and then the server talks to the editor there.

Not to keep going, but the other big thing that landed, which I really don't know how it slipped my mind, is the Node ESM functionality that we're shipping unflagged in 4.7 beta right now. So we can talk to that a little bit, too...

**Nick Nisi:** Yeah. I'm interested in -- like, it's been hard, honestly, to keep up with where ES modules are at right now.

**Daniel Rosenwasser:** I agree.

**Nick Nisi:** I don't write Node a lot day to day, but it's hard to keep up. So do you wanna elaborate a little more on what is now being supported?

**Ryan Cavanaugh:** So this is the new, big family of fields that you can put in your package.json that say "This is the entry point for my module, under these conditions", and sort of all the associated import paths that you can use to refer to those things. It's hard to under-sell it or over-sell it, I guess; it's support for the new Node module resolution system, and kind of up and down the entire stack. So this has effects on how auto-imports work, effects on how we emit declaration files that refer to these modules, that you get into your program, and just sort of general, like, the definition has to go to the right place.

\[00:12:17.08\] I don't wanna just kind of enumerate all the features that Node has added to this, because I don't know all of them, and it would be pretty boring, but... To our knowledge, we've supported the whole stack, the whole suite of features there, and you can now use them unflagged in 4.7 beta.

**Daniel Rosenwasser:** Yeah. The thing you really have to think about is there aren't any libraries that ship as pure ESM, like, ECMAScript modules. They might use a bunch of specific features that have been added to Node, that are different from what you're used to if you've been writing Node maybe let's say 5-10 years ago. So you might wanna be able to say "I wanna scope which specific files you can import from a package. I wanna be able to use mjs or cjs as your file extension for JavaScript. And then if you're a TypeScript user, you wanna be able to use mts and mcts.

These are things that are maybe like a lot of conceptual overhead, but whenever you need to actually use Node ESM functionality, you're gonna need to have these things handy and available to you. Especially as a TypeScript user, you just don't want a red squiggle telling you "You can't do this", whereas you might know better. So we need to bridge that gap and make sure it's not tough to use, as much as we can at least.

**Nick Nisi:** Yeah, that's really cool. And awesome that going forward it's going to be much easier to support all of the different module resolution types in Node, with TypeScript.

**Christopher Hiller:** Can you figure TypeScript to output dual modules?

**Daniel Rosenwasser:** We have talked about that a little bit... You're talking about like - you wanna have like a compiler that takes your TypeScript files and it's like one folder away of like ESM and one folder with CJS?

**Christopher Hiller:** I mean, I imagine that's just two separate builds, right?

**Daniel Rosenwasser:** It is... I don't remember the specific state of that right now, to be honest with you. I think you can kind of control that by basically -- I'd have to just sort of look into that.

**Ryan Cavanaugh:** I mean, we're definitely not doing two outputs in one build. It would be separate builds. But I don't think anything right now would prevent you from setting that up. But with all these things, it depends so much on the specifics of exactly what your input and desired outputs structure are.

**Daniel Rosenwasser:** Yeah. I think you could get away with an extra package.json, which no one wants to do, but it's possible.

**Christopher Hiller:** Yeah... Because you said if it depends on all that junk... Like, to make a dual module you still have to do some hacky stuff, right?

**Nick Nisi:** Yeah... I was gonna follow up on the optional variants annotations. That seems pretty interesting, and I guess I'm trying to understand, does it help the compiler? Why was it added, I guess is what I'm trying to ask...

**Daniel Rosenwasser:** "Why are you doing these things and making my life harder...?"

**Christopher Hiller:** Did we even explain...?

**Nick Nisi:** Oh no, I don't think it's harder at all. I think that it's interesting, and I think that being able to annotate "This is specifically the return type" is very interesting. And I'm just wondering if there's a use beyond that that I'm not seeing right now.

**Christopher Hiller:** Did we explain what these are?

**Nick Nisi:** Actually, no. We didn't.

**Christopher Hiller:** Okay. Because I have no idea.

**Ryan Cavanaugh:** When you have a type that is generic... So if you have like an array of strings or an array of numbers - we call those instantiations. So a generic type will have some instantiations that are effectively themselves non-generic types. So if you think about -- let's just say like a box. You can have a box and you can have a thing in it. If I gave you a box of recyclables, or whatever, and there's a box of food - well, the way that those boxes relate to each other relates the same way that the contents of those boxes relate to each other. So you can't put food in the recycling bin, or vice-versa. I should have come up with an example that has a bit more clear real-world subtyping, but anyway...

\[00:16:04.21\] We talk about this as the measured variants of that generic type. So you could think about a function that accepts an argument. Well, this actually kind of flows the other way compared to a function that returns a value. Because if I have a function that can accept a string or a number, that's more general than a function that only accepts strings... Versus a function that produces a string or number and a function that produces a string relates in the other direction.

So when you're relating generic types and you wanna figure out if like a box of t is related to a box of u, to do things performantly you need to have shortcuts that say "Instead of relating the entire structure of that generic type, we'll just relate the type arguments. We'll relate t to u when relating box of t to box of u." But to do that correctly, we have to know which direction we should do the relation in. Because if this is an input position, like a parameter, we have to do the opposite check as if it was a return type.

So that's what we call the variance, and that emerges in a structural typed system naturally from where the typed parameters appear in the type. So we can go and measure it, and we can get results called covariant, contravariant, invariant, and then some others that I'm definitely not gonna talk about. And that measurement takes time... In some codebases it's a non-trivial amount of time. And also, if that measurement is different than the one you expect, it's pretty hard to debug why it's not the one you expected. Also, if you have some type, you might wanna communicate to someone else like "Hey, this type is covariant. Don't mess that up for me, please." So anyway, in 4.7 beta we let you write down an annotation on these typed parameters that say "This generic type is covariant, contravariant or invariant on this typed parameter." We'll do a quick check to make sure that you didn't get it completely wrong... But from that point forward, we can use that annotated variance, instead of having to measure it. Because when we measure it, we actually have to measure it I think up to four different ways, just to see what the relation is.

And yeah, I think my guidance for people would be don't do this eagerly if you're not sure what the variance annotation should be. Just put this feature out of your mind, it's fine. We're gonna measure the right thing in 99.9% of cases anyway.

**Daniel Rosenwasser:** It's a total power-user feature.

**Ryan Cavanaugh:** Yeah.

**Daniel Rosenwasser:** For library authors mainly, I would say.

**Ryan Cavanaugh:** Absolutely, yeah. I guess the other kind of motivating scenario is our variance measurement algorithm is very good, but you can actually break it under some very weird corner cases. Basically, if someone found a bug in this algorithm that was present for - what, like four years without being noticed, maybe longer... So \[unintelligible 00:18:44.19\] So this lets you - in the extremely rare cases where the measured variance isn't what you expect, you can fix it.

**Daniel Rosenwasser:** This algorithm is, like Ryan said, pretty good. There are cases where you will end up going in a loop forever, and you need to be able to have yourself say "I need to stop at some point." And if you say "This is the variance", then when you come back into yourself, you can basically say "Oh, I know what that is. The user told me... Stop, and keep going for the rest of the thing." That's what other languages do, but TypeScript has always tried to not make it so that you have to do this thing.

So for a user now, you don't really have to think about the concept of variance per se. It'll come up, but the way that this feature works is you just say "Am I using the type parameter in an input or an output position, or both?" Those are the keywords that we use to describe them. So if you use t in an input position, you would just write "in of t", in front of the t. If it's using an output position, you write "out t", and if it's using both, you say "in out t".

\[00:19:55.15\] So you don't have to think about what is the variance, you would just have to think about "How am I using this thing?" That makes it a little bit easier for people to author these things as well. So a bit of a deep-dive, but... Necessary evil sometimes.

**Christopher Hiller:** It seems to be a little easier to grok in the announcement...

**Daniel Rosenwasser:** \[laughs\]

**Christopher Hiller:** To have the code in front of you is --

**Daniel Rosenwasser:** The code helps a lot. It's very hard to talk about code in the abstract, but...

**Nick Nisi:** Absolutely. And we will definitely have a link to that in the show notes, so check that there. But I'm just excited. There's a lot of cool features coming in that. I checked this morning and I am locked at version 4.3.2 of TypeScript right now, because that's what I get with Create React App at the current moment.

**Daniel Rosenwasser:** Oh.

**Nick Nisi:** So I have a lot of exciting features coming to me when I can get that upgraded.

**Break:** \[00:20:47.19\]

**Nick Nisi:** Alright, so that's really exciting... But the main thing that we pitched you on coming on the show to talk about is this new proposal to JavaScript, or to TC39, to add not necessarily types, but add a new way of exposing those types as just comments that can be ignored by the JavaScript interpreter. And I talk to you guys every year at TSConf, and one of the recurring questions every single year is "When is TypeScript just gonna build into the browser?" Is this kind of the answer to that, finally?

**Daniel Rosenwasser:** Yeah, I would say so... Okay, there's a lot of history with this one. We've always given, I still think a pretty good answer overall... And what is that answer typically, Ryan? Because you usually put it pretty well.

**Ryan Cavanaugh:** Well, I don't remember what I say...

**Daniel Rosenwasser:** It's like the "what does it mean" answer.

**Ryan Cavanaugh:** Well, types in the browser means a lot of things to a lot of different people. Some people think that means static type checking in the browser, where before your code runs, some sort of type-checking phase would occur... Some people think types in the browser means dynamic type checking; so if you write a function and say "This parameter is a string", then nothing sort of happens until an actual call into that function occurs.

\[00:24:12.13\] For some people, types in the browser just means the proposal that we're putting here, which is types as comments. And then some people have even further out ideas, I guess. I think static, dynamic and comment-only is sort of the three main classes of what I think of as what people mean when they say "types in the browsers."

I think it's a long side discussion to talk about why we think that the static types and dynamic types in the browser aren't a good fit for JavaScript, and that's sort of the attitude that we've seen from TC39, which I think we're all in sort of pretty decent agreement with, I think... And then what's left is types as comments, and that's what we're going with here.

I think of this as different programming languages have different ways to annotate your code that aren't used by the runtime. So Python has significant white space, and JavaScript doesn't. So a good way to trick yourself if you're writing a JavaScript program is to write a for loop or an if or a while, and put a semicolon at the end of that closing parenthesis, and then what follows is just like a statement block that runs without control flow... But then the indentation there makes it look like your code does one thing, but your code does actually something else, because indentation just isn't a part of JavaScript, whereas in Python it is, and you would get a syntax there.

Similarly, JSDoc looks like sort of something that is there for a machine... It's actually just there for a human, right? Or a different machine, like a closure compiler, or TypeScript with JavaScript checking on.

So I think of the types as comments as being a place where JavaScript just didn't have a syntax to do the sort of thing that we've seen people like to do. People like to indent their code, people like to put nicely-formatted comments in their code, people like to put type annotations in their code. Not just to communicate with the machine, but to communicate with other humans, and that's really what types as comments is - a way to tell other humans how your code works, and you can have a computer check that for you or not; the same way that a computer might check your indentation and say "Oh, you didn't--" There are tools that will tell you that your indentation is wrong, according to whatever you've decided wrong means.

**Daniel Rosenwasser:** Let me add on that just for a bit... So with the whole proposal - there's been just a question of like "What does it mean to have types in your JavaScript?" and we just saw not much agreement when the subject matter came up ten years ago. "Oh, does it do any of the things that Ryan just mentioned?" And really, what we saw is several convergences. One, there are at least three major type checkers that looked at types and basically emitted no runtime checks. So there's no dynamic behavior there. TypeScript, Flow, Closure Compiler - they all check either type annotation syntax or comment syntax for your JavaScript, and then it interprets it as types, and says "You screwed up here." And when you run it, nothing changes about that. It's still runnable JavaScript.

So we saw convergence there -- I mean, we knew that engines would not really favor that runtime behavior of checking your types. And then what we've also kind of figured was like "Okay, well even if we kind of are convinced of this, we're not sure that we have sufficient buy-in from the broader JS community, the JavaScript committee, things like that." And what we saw more of was like confidence in the existing approaches. Confidence in the type systems, confidence in how this could work and prove itself out...

This idea, with at least the types as comments proposal, was like, your types are literally -- you can think of them as comments, right? You can imagine if they were all erased away, they don't have any impact on running your code. They're purely a design-time thing for type checkers, so they can read your code, do some type checking and report some errors... But you could just plug that right in, something like your TypeScript syntax, or Flow syntax, whatever, into a browser, and then just have that run, and the browser would not do any of those checks at all. In fact, it would be mandatory not to do that in any way.

\[00:28:24.17\] And so this is something where we were not totally bought off on it ourselves in some way either, because it's like, okay, well there is this sort of uncanny valley of like I've written my code in such a way where like "Oh, you've said this thing takes a string, but you're passing in a number", and my JavaScript runtime is just not gonna do anything to validate that at all. It feels really weird.

And that kind of goes back to what Ryan was saying, which is like you could literally write your code in any way. You could write a comment that says "This thing takes a string", and that comment is totally out of date, or someone's using it wrong... So when you see that code, you're like, "Ah, someone has screwed up! How did they miss the comment here?!" It's like, "Well..." Okay, wouldn't it be great it something checked that for you? So your JavaScript runtime is not gonna do that. That would be unreasonable. No one would say "You should read the comments and make sure you're doing the right thing every time." It's the same thing with type annotations. So basically, that's what we mean when we say "Types as comments" - they just act as comments, and they don't have any runtime effect.

Now, that said, we presented this thing called Types as Comments at TC39, which is the standards committee for JavaScript, a couple of weeks ago actually... And it moved to stage one, with the caveat that it get renamed to type annotations.

**Nick Nisi:** Interesting.

**Daniel Rosenwasser:** This is a thing where calling it "types as comments" - it was a little catchy at first, but now it's probably better named as "type annotations". I like the name better. It sounds a little bit more like what we're actually trying to get, what we're actually thinking about. And the caveat was - well, okay, yes, you've come into discussion with a set of opinions about how this feature should work. We should still discuss why those have their merits, right?

So the idea of these types having no runtime impact at all whatsoever is still something that probably should be discussed in committee, instead of just being proposed as like "Yes, we're already dismissing that." That was something that we got some feedback on as well.

So we will have that discussion. We do feel pretty strongly that that's not the right way to go about it... But nothing comes easy. You have to talk these things out and understand why one has benefits and the other might or might not. So that's where we're kind of at right now. There's a whole bunch of specifics and caveats and nits. I don't know if there's any aspect of it that is worth diving deeper into, or things that are on your minds...

**Nick Nisi:** Yeah, I have a list of questions, but maybe let's start with just exactly what it is. From my understanding, it's just like adding in this almost -- not necessarily white space, but this space between a colon and something else to add in whatever you want.

**Daniel Rosenwasser:** Right.

**Nick Nisi:** Is that correct, or...? What are the limitations of it right now?

**Daniel Rosenwasser:** It is a carve-out for type systems. It's kind of like what you say. The idea is you take a look at what TypeScript has done, what Flow has done, and try to basically find a space where JavaScript could say like "I don't care about this. Type systems can take up whatever syntax they want at these specific places." So you could say \[unintelligible 00:31:46.13\] and that says "Now you're gonna start reading a type out", and the whole thing is like because it's just supposed to get ignored, an engine can just go \[unintelligible 00:31:56.28\] until some end, and then just throw that away. It doesn't have to care about that at all.

\[00:32:05.29\] And then we need some other stuff, too... So those are annotations. We need declarations too, so like interfaces, and type aliases. So you say like the interface keyword, some name, some extra stuff \[unintelligible 00:32:18.06\] So the way that we're thinking about this -- I mean, you need to think about where these things start and end. So there's gonna be some top-level set of things that an engine will have to know how to parse out and then throw away, but then there's places where we need to be able to grow out the type systems that exist today. Or a new type system should be able to leverage this space if they want to.

So let's think about object types, for example. Let's say you wanna add a new modifier for properties on object types, right? We could take whatever TypeScript and Flow have right now and try to figure out this combined set of syntax in between the curlies, and say like, okay, whenever you say "type foo =" and then some object type, and then you say "Okay, here's how you parse out every single member of the object type." You could do that, you could say "Oh, you need to know about the read-only modifier. You need to know about plus and minus for Flow, you need to know all these other things." Instead, what we're looking at is this place where you say "Okay, whenever you find braces, or brackets, or parentheses, you just skip through that until you find the closing brace." Kind of like when you have /\* with a comment, you just skip through that and you get the \*/ So an engine doesn't care what's in between there, it just looks for the next \*/ at the very end of the comment. And that's what we're leaning on to make sure that this thing is extensible, too.

So there's some top-level syntax, there's top-level types... So you'd have names of types, identifiers, the same way that they look at variables in JS. Maybe union types, so you can say string OR number... And then maybe in curly braces just whatever the hell you wanna put in there, and that just works. And there's caveats there too, because curly braces can nest, and so if you have curlies and then a curly and then curlies, you can't just stop. So this was a pain point for a lot of people, that comments can't nest in JavaScript. So these comments nest, and we'll have to basically support them in whatever whacky way we do.

So that's one part of it... And then there's some other stuff we're looking at adding too, like being able to do assertions, say like "This thing is actually a number. I know you didn't realize that, but here's the truth of it, TypeScript." Or type arguments, and things like that.

At the end of the day, just remember though that these things all just get erased. You can treat them as if they were just erasable, or just comments, is the idea.

**Nick Nisi:** Yeah. I wanna dig into one thing that you mentioned... So did you say that the ability to somehow support something like type aliases or interfaces would be supported by this, in terms of like treating them as comments?

**Daniel Rosenwasser:** Yeah, that's what we're hoping for. You can think of them as just metadata of like "Hey, there's a thing called foo." A JavaScript engine doesn't have to think about that. It doesn't have to think about scoping, or any of that stuff at all. You can declare 30 types with the same name; an engine should not care about that whatsoever, is the idea. So that's what we're aiming for there.

**Nick Nisi:** I guess would that reserve the interface keyword for things like that?

**Daniel Rosenwasser:** Probably, yeah. I mean, there is some discussion around whether or not "interface" should be reserved for a different purpose. There's another proposal called Protocols... We still think that interface is probably best suited for a proposal like this; and to be honest with you, the type systems have had this keyword for at least ten years now. I don't really think that it's appropriate. I think that given the number of people using TypeScript in the JS community these days - they would find it really confusing to repurpose that at that point.

\[00:36:11.07\] I hate the argument of like "Hey, this thing's already been done by external forces, in some way." It probably rubs people the wrong way; that was never the intent. But it always definitely seemed to us like the obvious purpose of the interface keyword is to define an interface the way it's defined in literally every other language. It seems like the most reasonable thing to me, to be honest... But yeah.

**Ryan Cavanaugh:** I hope that the committee follows where the (I guess) observed desire of the community is... I think the other thing to think about is if this proposal gets whittled away by like "Okay, we can't have interface, we can't have type, we can't have whatever" - that's kind of fair, but we don't wanna make something that's like "Here's 60% of TypeScript" or "Here's 65% of Flow" or whatever. I don't think that's gonna be super-useful, and we'd probably think about other ways we could accomplish this at that point.

**Daniel Rosenwasser:** Yeah. This is a hang-up a lot of people have, which is like how much of my existing typed code can I use under this mode? Can I just take my TypeScript file and can I just convert it over to a .js file and have it work? And some people take a very absolutist view of like "If I can't do that, then it's a useless proposal." And I think that that's a little too extreme, because there's just a lot of stuff that's just like out of scope for this proposal anyway... Like, "You know, I'm just gonna \[unintelligible 00:37:32.26\] proposal", stuff like that.

Also, people have written code without EMs and things like that for a while, so it's not impossible, but... I get where they're coming from, but there is like a decent amount where it will benefit so many people to not -- so this is like "So why are we doing this?"

**Nick Nisi:** That was gonna be my next question.

**Daniel Rosenwasser:** So first, a lot of people are really growing distasteful of needing a build step for everything, just because they want whatever syntax extension. For some people it's like JSX, for other people it's the type annotation syntax, and stuff like that. And Ryan and I probably every so often have to write a new JavaScript file, something within 100 to 200 lines, because there's no end to offshoot, ad-hoc scripts that you're gonna write in your lifetime... And you're gonna not write that in TypeScript because you're not gonna set up a whole build step for that, because it's a script that is gonna live in a repo that might or might not even have a package.json anyway. So don't waste anyone's time.

So we use the JSDoc type-checking functionality that TypeScript supports. If you're ever interested in this, you should go read up about type-checking in JavaScript files with TypeScript. And it works pretty well, but it's really verbose. Writing out that comment and knowing the correct syntax for JSDoc - and I don't do it right like 90% of the time. Actually, this is really funny - when I wrote the blog post for the types as comments announcements that we were actually gonna be making a stage zero proposal for this thing, I got the JSDoc comment wrong, the syntax for that... And it didn't matter, because TypeScript just says "Yeah, I'm gonna do it anyway, because I know what you meant." Other syntax in JSDoc is just like not intuitive at all. And we could keep doing this, but it's just hard. It doesn't feel natural. So how do you balance the benefits of like "I am still able to run my code, but also, I can get type checking and I don't need a build step at all." Complexity for newer JavaScript users is awful.

I've been thinking recently about "How do you get started with JavaScript these days?", and the easiest learning paths all seem to involve "Okay, install Vite", or something like that; that's probably the best bet, right? It sounds nuts! That's one aspect of it.

And then if you go from like "How do I get started with JavaScript?" to "How do I get started with TypeScript?", that's another entire hill that you have to climb. So what we wanna do is "Hey, look, you can still use TypeScript as ts files, you can still use a build step, you get to do all this stuff, but can we at least make the barrier to entry easier for people, and make a simple script file, easy to write, with types? Can we make small websites approachable to write again?" Things like that, that carry a lot of weight and can make accidental coding easier again, that sort of thing.

I'm not trying to go with like "It's a call for simpler times", but also, it would be nice to make it easier for newcomers to get into this stuff, too. I think that there's some value in that, and it would be really inconsiderate if we didn't at least try to tackle the problem and see how we could bring a solution or two.

**Break:** \[00:40:58.03\]

**Christopher Hiller:** So one thing that's not really clear to me is does this proposal actually propose some type syntax, or is it just really more of a place/bucket where a type system can put in its own types? Or is it a little bit of both?

**Daniel Rosenwasser:** It's closer to a little bit of both. So the main thing there is there needs to be some set of what we call top-level syntax. You need to be able to, let's say, create an interface, create a type alias, stuff like that. And then you need to be able to have a concept of union types, and let those exist. But then the carve-outs, so to speak, are basically the parenthesization, like putting things in brackets, putting things in curlies. That's the biggest carve-out. And then there's some top-level carve-outs, where again, it's recognized by the engine as how you should parse it, but you basically don't do anything with it. So you just toss it away immediately.

So there's some top-level stuff that at least both Flow and TypeScript have agreed upon, that is like, "Okay, we both use these things." We definitely used those in this proposal. But again, this is stuff that's very likely -- I mean, I don't know how likely, but it can change at this point, because it's still like a stage one proposal... And all that means is the committee wants to discuss the topic of the proposal. It doesn't mean that we've agreed on syntax, it doesn't mean we've agreed on semantics, it means just like "Yeah, we're kind of interested in talking about this", which is probably a lot more \[unintelligible 00:44:17.28\] we're at stage one probably sounds like it has more fanfare than you might think, but it is actually a big deal in my opinion, just because even within the committee it was like a thing where we basically boxed out like 90 minutes of discussion time, and still needed to add another 45 minutes at the end of the meeting this past plenary. So it was discussed to \[unintelligible 00:44:43.17\] basically.

**Nick Nisi:** \[00:44:47.12\] Well, from our perspective on the outside, it was introduced as like a stage zero proposal, and then it seemed like within a few weeks it immediately went to stage one. So it seemed like quick progress... You know, there's still a long ways to go, but quick, exciting progress on the proposal.

**Daniel Rosenwasser:** Yeah. And this is in a big part thanks to -- so we have two co-champions on the proposal, Robert Palmer and \[unintelligible 00:45:10.02\] They've been extremely helpful in making sure that this thing came together. They have a very good set of intuitions of what we need to have ready in terms of materials, in terms of planning, in terms of all this stuff. They've been extremely helpful for making that come together. Because if it was just all on us, then -- we have so many things going on that we'd be stretched thin. And they've just been -- I just have to give them a huge shout-out. Thank you so much for that.

And then also, the other community participants in the proposal, too. The original author, Gil Tayar, other people who have worked on it as well... I can't do full acknowledgments right now, but you can check out the repo too on that. But yeah, it wouldn't have come together -- there's a lot of work happening way before the proposal went public, and then within that month it was just like crunch time for us. Making sure it all came together - it was a lot. But I'm really glad we even got to stage one.

**Nick Nisi:** Yeah, for sure. One question that I wanted to ask was about the perception by the community of this proposal, and I think I wanna ask Chris... Because before this call we were talking about how -- I think you referred to me as a TypeScript zealot, and you are using types through JSDoc comments... And so from your perspective, what do you think about this proposal?

**Christopher Hiller:** Well, I agree with what Daniel said. Essentially, JSDoc types - it works pretty darn well. I'm not missing a whole lot, it feels like. But where it is difficult is it does get verbose. And there are probably some ways that one could get around this, and that would be essentially just like adding more tags to make importing types from somewhere else easier. But the verbosity is a little hairy.

\[unintelligible 00:47:16.17\] if we can make it less verbose, if we can make it so, again, I don't need to add a build step, I don't need to convert JavaScript to TypeScript... If all I need to do is add this, that and the other thing at these certain points in the code, and have the compiler understand that, that's great.

So it sounds cool to me. I was definitely skeptical; I was like, "Why are you doing this? This thing already works?" And yeah, it already works, but again, it could be better, and it sounds like this is a solution to that.

**Daniel Rosenwasser:** \[00:47:57.00\] Yeah. We've seen a lot of support, a lot of excitement. We're really happy when people tell us "This is great", or "I've thought about it, and I've been thinking about it more and I've come around to what Chris just said... But you know, we're also just watching the sort of feedback that we get that is like, "Hey, I don't like this", and we're trying to think about it very thoughtfully, too. We're not coming at this from a very absolutist view of like "This is the right way to do it." We have some intuitions, we hope that people agree with them in some ways, and if not, we're willing to think about what are some of the downsides here, what are some of the places that this falls over, whatever. So in these cases, I hope that basically, first of all, being on this call, Chris is not just like trying to be nice about the proposal... \[laughs\]

**Nick Nisi:** I don't think he'd do that.

**Daniel Rosenwasser:** I'm sure you're being honest. But from my perspective, the best thing that we can make comes from taking people's criticisms to heart and thinking about them a lot. So if you have legitimate criticism, first of all, if you can make it constructive, that makes our jobs always easier. But also, I think it's fair game - if you have hunches, if you have thoughts, if you have feedback, the proposal repo is a reasonable place to put that to.

I also think -- one thing you also touched on was it would be nice if the JSDoc stuff had more ways to do things that could do what TypeScript can do, in a lot of cases... And that's also a difficult design space for us, because the JSDoc support was "JavaScript users need a way to leverage all the smarts that we've put into the language service." Let's try to see what people are already doing with their JavaScript code and model that and make it work, so that if you've just decided to write comments and say that this thing is a string, that it just lights up, and you get method completions, and all that stuff.

At some point there was this really weird inflexion point where most of the JSDoc being written was primarily for TypeScript, or the language servers in VS or VS Code, rather than being something for the JSDoc authoring tool. So whenever people would ask us "Can you add this feature?" we're like "Well, other JSDoc tools don't really understand them", and they'd be like "Well, I don't care. I don't use JSDoc for JSDoc." I use the JSDoc comment format for TypeScript, and people are just like "Oh, is this --" So how much investment do we put in there? How much do we add new concepts that other tools are not gonna understand? It's like, ESLint is not gonna understand that... It's this whole coordination problem there.

**Christopher Hiller:** I'd hope to be able to pick up the ESLint TypeScript project, and just run ESLint, so I don't have to use TSC to do anything, right? But they don't support JavaScript. So it's like a whole other thing. It's like, "Oh, okay..." He's like, "No! You should convert to TypeScript. We will not support it." I'm like, "Okay, bud. Sorry. Just asking."

But yeah, it sounds like a line to walk there... And certainly, once you start talking about documentation, that's a big can of worms, too. But I for one would love to see -- anyway. Go ahead. Next topic. \[laughs\]

**Nick Nisi:** Yeah, I was gonna say, some of the criticisms I've seen are like -- well, I think that out of the three ways that Ryan proposed that this could happen, this seems like the best way in terms of compatibility and backwards-compatibility and still being completely optional. But if it does become allowed, then I can start writing everything that way and publishing everything that way, and you're going to have to read that, whether you like it or not. Because if you're just perusing my code, that's what it's going to be. So it is kind of thrust upon you in that sense, but I still think that the benefits outweigh the negative effects of that. But that's my opinion.

**Christopher Hiller:** \[00:52:06.29\] I did see a fair amount of criticism "Well, if it doesn't do runtime checking, it's pointless."

**Daniel Rosenwasser:** People have been writing type-checked code for a decade now for their JavaScript... At least. It goes further back, if you go to -- but anyway, a lot of these systems do that, and it's okay. And actually, Python is another language that -- I know this is the JS Party, not the Python party, but they have had type annotations built into the language for at least as long as I've been on TypeScript at this point. I think a lot of people were probably either apprehensive or upset about that decision early on, and no one really cares now. It's a net good thing at least.

We have a partner team that we meet with, and they're \[unintelligible 00:53:01.07\] depending on which part of the stack you're using... But it's a type checker, with a really good language service that is powered by types. And it's like, I couldn't write Python without that thing. And it's so nice. And again, Python doesn't have any runtime checks based on the things that you write by default. They have a little bit of what they call \[unintelligible 00:53:24.04\] where you can introspect things. We're not really doing that in our proposal, but... It's ignored, and it's fine as an authoring tool, because people get the value of that. And there's also seven type checkers or something like that for Python, too.

So clearly, there's demand for taking these dynamic languages and having some checking. I mean, that's what a linter is, right? ...making sure you're not making a mistake before you run your code. So this is not a controversial topic, I feel. So a little bit of extra syntax for this thing that has massive amounts of industry investment and resources is to me obvious. But we have to build up that consensus and make sure that we're addressing people's concerns, that sort of thing.

**Ryan Cavanaugh:** And I think the diversification in the Python ecosystem is really interesting to think about, because by way of analogy with linting, I think it's interesting to think about "My code can interop with your code even though we might have different lint settings." We don't have to agree on how our code is formatted for our code to interoperate with each other.

If we take type checking and push it to be a runtime feature, we're all gonna have to agree. And that's really, really a huge lift. So I kind of like the idea that different projects can have different type checking that is configured according to their preferences and design goals.

I take the criticism seriously, because I think the idea that you can write something that won't have semantics - it can be confusing, and it's gonna depends on user education and how editors display these things, and in general just learning to... So that people understand that a type annotation is, like we called it originally in the proposal, a comment; and serves the same role, and is there for things that aren't the runtime.

**Nick Nisi:** I'm just thinking about ways that this could be abused. We have minifiers now...

**Ryan Cavanaugh:** Well, people \[unintelligible 00:55:18.05\] as three separate words maybe, right?

**Nick Nisi:** Yeah. \[laughs\]

**Ryan Cavanaugh:** And it's gonna be like, "Well, okay..."

**Daniel Rosenwasser:** Yeah, we saw some creative trolling on Twitter, for sure... \[laughs\]

**Nick Nisi:** Yeah. \[laughs\] I'm just thinking of like a -- you know how you minify the code, and you can rename variables and things like that; it makes it harder to read. Well, you can just have something that just randomly generates fake types \[unintelligible 00:55:42.04\] \[laughter\]

**Daniel Rosenwasser:** \[00:55:47.28\] Again, it always comes back to the -- the original mental model, the original title of the proposal gives the good mental model there, which is like "It's just comments." So you could have always done the insane comment \[unintelligible 00:55:57.13\] as well... But it is really funny to think about -- we've known what type syntax is for as long as we've been around, but seeing people just write total nonsense between curly braces... I think someone on the Chrome team was joking around in curlies, like "One fine summer day, I..." \[laughter\]

The example I always give of nonsense types and "Does this feel good?" is like you can write in curly braces like "Kitty kitty kitty kitty kitty", all on the same line. And what does that mean? Nothing. To an engine, nothing. But how do you make sure that a type checker tells you that "Hey, this doesn't really seem to make any sense."

I guess what I'm getting at is it's gonna be a challenge for tooling like type checkers to bridge the gap between the carve-out that engines make for the type checkers and whatever the type checkers actually decide to understand. You want your tools to truly understand what JavaScript you're writing, but you don't wanna allow total nonsense. It would be like a disservice to the purpose of the proposal. So there's gonna need to be a place where like "Yeah, you're writing JavaScript, but this doesn't make any sense. I'm gonna give you an error message." So how do we bridge that gap and tell users, right?

**Nick Nisi:** Yeah.

**Daniel Rosenwasser:** If it's a type as a comment, do we highlight it as green entirely? Or do you wanna actually get syntax highlighting that looks like comments? It's kind of like this weird set of trade-offs that we're gonna have to -- you know, the onus is on us. We're volunteering ourselves for this challenge.

**Christopher Hiller:** Speaking of tooling, are you maintaining a proof of concept that understands the syntax?

**Daniel Rosenwasser:** It's called TypeScript -- no, I'm just kidding. \[laughter\] We don't have the full proof of concept because it's heavily inspired by TypeScript and Flow. I would say look to these to get a sense of what it's gonna understand, at the very least. And then once it gets to stage two or something like that, that's probably when we would experiment. Because today if you try to write a type in a JavaScript file - we're not gonna do that until it actually has more support from the committee.

So today we say you can't use a type in a JavaScript file. We're not gonna try to push the proposal by just building it into the tooling, and allowing it in JS files. You kind of find that to be a distasteful way to go about the proposal. But I can totally imagine a Babel preset of some sort...

**Christopher Hiller:** I'm sure somebody has already made one.

**Daniel Rosenwasser:** I think someone is actually working on it right now, which is always a beautiful testament to just the Babel core team and whatnot, and the ecosystem around it... So it's really cool to see that.

**Nick Nisi:** It really has me thinking, though... TypeScript always kind of supports JavaScript first, and leads the way on that. So if this became a thing in JavaScript, and then -- like, honestly, I'm not super-familiar with Flow, but suppose that there was some kind of Flow type that was incompatible with TypeScript, and then I try and bring that in or use it, what does TypeScript do in that sense?

**Daniel Rosenwasser:** You know, that's the same problem as the person writing gibberish in the parentheses. It's kind of like languages with dialects with a lot of overlap. At some point you're just like "I don't know what that is." So some of the time it'll work, and then other times you'll be like "Sorry, I have no idea what that means." So basically, we would give a hard stop on those in TypeScript probably. We would say "Hey, I don't know what this operator means." And we would probably expect Flow to do something similar if you use a TypeScript-specific construct, and then run into that.

What I would imagine is we would have a mode that says -- so not in TypeScript files, but in JavaScript files, where you could say "Allow the full set of gibberish that I wanna write in type positions." That's your escape hatch, right? Because otherwise you probably don't wanna make a mistake. With JSDoc we can kind of give errors, but then we often have to just sort of fall back on whatever nonsense you might have written in the comments too, so... It's tough.

**Christopher Hiller:** \[01:00:18.05\] Yeah, that does sound difficult. Yeah, if you're trying to import -- so you have this JavaScript, and one is using this type system and the other is using the other type system, well they can't really talk to each other, right?

**Daniel Rosenwasser:** Yeah.

**Christopher Hiller:** And you know, the way we get around that nowadays is people don't ship types in JavaScript, right?

**Daniel Rosenwasser:** Yeah.

**Christopher Hiller:** They ship declaration files. Or if you're using Flow, whatever they use. I don't know.

**Daniel Rosenwasser:** If you wanted to support both, you could find the subset and emit from the subset for each of those things. I mean, today they don't talk to each other either, right? So...

**Christopher Hiller:** Right, but it's not an issue. If Flow emits anything, it's just like JavaScript with comments in it, I imagine.

**Daniel Rosenwasser:** Yeah... I don't remember exactly what they do anymore, to be honest... But yeah.

**Christopher Hiller:** The point being the JavaScript engine understands whatever Flow emits. Likewise with TypeScript.

**Daniel Rosenwasser:** Yeah, exactly.

**Christopher Hiller:** That's not gonna change, because the engine ignores it, but your type checker will mind.

**Daniel Rosenwasser:** Yeah.

**Christopher Hiller:** That's gonna be interesting to figure out.

**Daniel Rosenwasser:** It'd be an interesting ecosystem discussion.

**Nick Nisi:** Yeah. Let's wrap up here, but I did want to ask one more question before we go, and that is could you foresee any follow-ons to this proposal, assuming it gets through? ...that further this idea of type annotations in JavaScript.

**Ryan Cavanaugh:** If this goes through, I think you'll see probably a gradual expansion of the grammar as we discover more things, things that we wanna have that wouldn't quite parse correctly. So it's one avenue. I think the more interesting thing is if this doesn't go through; depending on how this goes, I think we might see a -- I hope to see a revival of interest in how to improve the dev tooling in JavaScript, because... I'd love to see this proposal go through, but I'd also love to see a resurgence of interest in "How can we make JavaScript more ergonomic?", whether that's making it so that transpilation is required in just fewer scenarios instead of no scenarios. Something Daniel and I talked about is pasting into the dev console in your browser - should that \[unintelligible 01:02:20.01\] type annotations? I don't see a good case against it. Exactly how that works is a technical detail, and we can talk about that.

If Node understands TypeScript in some capacity, should I have to run some tool before running Node on some file? Again, I don't see -- once you kind of imagine this world, it's hard to be like "Well, why don't we just have that world today, just based on the tooling that's on our dev machines?" Because ultimately, this is a dev tool. It's a thing for the developer experience. We don't need this to load your local newspaper.com. That's not what it's for. It's for us. And probably, if this happened, I think you would still see those types stripped from your local newspaper.com, assuming they've got good JS devs minifying their JavaScript.

\[01:03:03.22\] So when we're thinking about the pre-minified JavaScript world, which is where we inhabit in this dev space - like, let's just make it better one way or another. That's what I wanna see.

**Nick Nisi:** Very well said.

**Daniel Rosenwasser:** Back to more the original question of like "Would we see any new stuff getting added to JavaScript, or getting proposed...?" when I look at the stuff that has explicitly been dropped, they're mostly runtime features. And so namespaces is one; we don't really think we're gonna ever try to add that, and I don't think anyone would want to try that either. There is a thing called a parameter property, which is like when you write a class, and then in the constructor for each of the arguments or the parameters for the constructor you can say "public" or "private" or "protected". And this is a construct that TypeScript added early on, where you automatically make a property with the same name. And it's super-convenient, but it has runtime, so it's kind of fallen out of fashion for a lot of developers. But \[unintelligible 01:04:00.16\] So I could see some form of that getting added to JavaScript.

And then another one is enums. Enums actually got proposed two sessions ago, but the conclusion within TC39 was there's not enough motivation for them, in a sense... And it's gonna be really interesting to see how -- if this proposal makes it to stage four, then what does it mean for enums. Because the whole motivation for enums is like you have a set of values, right? Cool, I can have a set of values in JavaScript too, right? So what are they used for? It's like, oh, they're used for static tooling. And so the response to that was "Okay, static tooling should add their own thing, a JSDoc comment or whatever, to better understand objects with a bunch of properties on them."

So the motivation was not there. But once you say that type annotations are well motivated enough, then it's not the craziest thing to talk about. Like, okay, an enum has some extra-semantic meaning. Or maybe enums are a little bit different from what TypeScript proposes, and that's gonna be an interesting world for us to bridge, too. So I think that last one, enums, is the biggest question on a lot of people's minds, both from the TypeScript and JavaScript perspective on future language directions.

**Nick Nisi:** Very cool. Well, let's end it there. Ryan, Daniel, thank you so much for coming on and chatting with us today about this. I really look forward to watching this proposal go through the stages, hopefully, all the way to four, and then we can have a nice celebration day in JavaScript.

**Daniel Rosenwasser:** Yes, absolutely. Thank you so much for having us.

**Nick Nisi:** Thank you, and thanks, Chris, for joining.

**Christopher Hiller:** Thanks, everybody.

**Ryan Cavanaugh:** Thanks.

**Nick Nisi:** We will see you next time.
