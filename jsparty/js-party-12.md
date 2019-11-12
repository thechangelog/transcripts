**Mikeal Rogers:** Hey, everybody! Welcome to JS Party, where it's a party every week with JavaScript. We're back! I'm Mikeal Rogers...

**Rachel White:** I'm Rachel White...

**Alex Sexton:** And I'm Alan Samson.

**Mikeal Rogers:** \[laughs\] Rachel and I are back from a nice little vacation in Europe. If you didn't check out the episode where yayQuery took over, definitely go back and listen to that one. That one was so good that Rachel and I were actually fired... I got a text from Adam Stacoviak while I wasn't here; he just said "You're fired!" and then it turned out that they can't do it, they can't schedule it for another nine months, so we're filling in now for them until they can come back around.

Alright, let's jump into it. We're gonna talk about actually using ES6 and ES7, new language features, with and without compilers, some of the tradeoffs and stuff like that.

**Alex Sexton:** \[unintelligible 00:01:27.09\]

**Mikeal Rogers:** I think that we should just talk about specific features rather than what bucket they land in, because they actually get implemented out of order anyway, so... Rachel what features are you using that you've been enjoying from the new language stuff?

**Rachel White:** I'm not... \[laughter\]

**Alex Sexton:** You don't write any ES6?

**Rachel White:** No, I mean... The only thing that I've used really -- because since I don't write production code, nobody tells me what to do, so I kind of just do what I've always done... I've worked with some things that have the new variable naming and stuff like that, but that's really all that I've dipped my toes in. And what is the other thing...? "let" is in there? I don't know... Enlighten me.

**Mikeal Rogers:** "let" has been there forever. The big ones for me have been arrow functions and template literals.

**Rachel White:** Yeah, the arrow functions are super cool and I totally get that it helps with readability so much, but I'm still stuck in that mindset of like forgetting to use it, and I feel like if I'm going to incorporate all of the new type of things, I'm gonna have to enforce it to strict in my code linting... But other than that, I'm not actively going out of my way to use it, because nobody tells me what to do when I write code.

**Alex Sexton:** Let me jump in... I think I disagree that it makes code more readable. I often am looking at typed and arrow function JavaScript; so there are types in there and there are arrow functions, and people are using implicit returns and stuff, and I look at it and it does not look recognizable to me. I'm smart enough to figure it out or whatever, but I can no longer scan it the same way... I don't know, it's just a skill that you can do that.

**Rachel White:** I mean, I'm lucky enough that a lot of the stuff that I work on is fairly small, so when it's much smaller scale I think it's readable, but I can totally get if you're looking at larger systems where you would be scanning through a lot of lines; it would be kind of hard to pattern match...

**Alex Sexton:** Yeah, it certainly encourages unnamed functions, for one thing.

**Rachel White:** Yeah, that's true. I don't line anonymous functions. I like to try and name everything if I can.

**Mikeal Rogers:** I don't know... They've gotten so small and so easy to use that I'm able to use them in ways that you wouldn't use functions before, because it would just be too verbose.

\[00:04:09.24\] There's a couple libraries that I've written for templatized HTML, and using functions inside of a template literal and stuff like that. That would have just been too verbose beforehand, right?

**Alex Sexton:** Sure.

**Mikeal Rogers:** I was certainly one of those people -- I mean, you can dig up me saying this, that the problem with arrow functions is that it's just a bunch of extra semantics that you have to keep in your head... Which is true; it is. To your point, Alex, it's certainly not as easily readable as the word "function". It's pretty clear what that is, and this arrow thing could be anything. So it is more semantics that you have to keep in your head, like any other language rule...

**Alex Sexton:** Sorry to interrupt... The semantics are maybe easier, because it's just like -- we talked about this a little bit while you guys were gone... It is kind of just the literal scope of the variables; there's no bound... It's just the lexical scope of variables, so you can reason about what a variable or what this is much more simply, because it's impossible for it to be anything but lexically bound. So to some degree, you can forget about some things that functions add, and then to another degree it's hard to scan maybe, especially implicit returns.

**Mikeal Rogers:** Yeah, I was just gonna say... Whatever complexity they take out of the pool by not having this, they probably add it with the implicit return stuff.

I don't know if you saw this or not, but there was a post that somebody did where he was essentially saying that his style guide now is that he no longer uses the function keyword ever. So he doesn't use old style functions anywhere. Everything is arrow functions, and classes have a different, new function syntax for properties. So he uses those when you would have traditionally used functions for any kind of prototypal stuff or referencing this...

**Rachel White:** Is this just for like personal projects, or is this in practice in his job? Or do you not know?

**Mikeal Rogers:** I think both. I mean, he is certainly advocating it to other people, which I assume would also be for production use. But I think that the argument that this actually can reduce complexity if you stop using older syntax is one that comes up a lot. People talk about -- eventually, the language does get simpler if we can stop using some of these older forms, and this is certainly somebody advocating for that.

**Alex Sexton:** So the primary rift I had with a person at my company who felt the same was that I was thinking of functions as the default and arrows as the sugar, and he was thinking of arrows as the default and functions as the sugar. Because arrows are - other than in implicit returns - simpler in the sense that they can't be bound. So it's like "Why would we use the more complex one that can have all these weird binding situations instead of using the default arrow functions which are lexically bound and so you always know...?"

For me, an unbound function is fine, because I'm just not using this inside of it, but for him it's like "Why would you use the thing that could be bound when you could just use a thing that's always lexically bound?"

So it's an interesting perspective of once you kind of switch over, seeing the arrows as a default and the function as this thing that can be different...

\[00:07:53.22\] The problem is that... I forget who he said does this, but the class functions, if you just use the syntax inside classes, or you do a class and then you just tab inside the blocks and you do a function name - that is not an arrow function, it's not lexically bound. You have to do "function name = (arrowFunction) function" in order to get a lexically bound function in there. So it's actually like you kind of have to modify some of that syntax.

Then if you decide "Okay, I'm always gonna use that syntax", the constructor inside of there can't be listed like that. You have to do the constructor the old way, so it could be bound, but you can't bind constructors; then a whole bunch of things like that start getting weird.

**Mikeal Rogers:** Well, in the case of classes though, you often do wanna reference this though... You have a use for that. I think what he was saying was that we can take the function keyword out of it at least, and then we can not have this ambiguity.

**Alex Sexton:** No, what I'm saying is that if you use arrow functions, the functions can't be rebound. It's guaranteed to be lexically bound, whereas if you use just the class syntax, it more mimics using the function keyword, and then using this will default to the right thing probably, to what you want. But pulling out, like if you just use an instance, kind of like a static function, this can change very quickly to a window. All those types of problems start to show up again. It's just sugar for prototypal properties on an object.

So there are still gotchas if you use the class syntax. You could still go further and say "I still want to use arrow syntax inside of my classes", if that makes sense.

**Mikeal Rogers:** Yeah, I guess you could...

**Alex Sexton:** And I think if you are going to say "We require arrow functions everywhere they can be used", you should also require them in classes, too. So rather than saying "function name(arguments)" and then brackets with the function, you should say "function name=(fatArrow)" brackets, if that makes sense.

**Mikeal Rogers:** Yeah. I don't think that the point that any of these people are trying to make though is to be zealots about arrow functions. I think the point that they're making is that we can deprecate the use of the "function" keyword and just rely on these numerals, and then we get out of a lot of ambiguity if we're just using the new rules around classes and arrows.

**Alex Sexton:** I think I disagree on what those people -- at least the people I've talked to who are doing this aren't necessarily... They're not doing it just because they think it looks better or it's smaller or it's more streamlined or anything like that; they're explicitly doing it because the lexically bound ambiguity problems go away. So you end up with a program that only has lexically bindable functions, so it's important to do it everywhere, even if the syntax is old. If there's some way to use the old function syntax and then just say "Oh, this is a lexically bound function" - they would still be cool with that. It's not about the fat arrow, it's about the semantics of how the function exists and how it can change and what contexts it can run in. It's taking away the footgun of this changing out from under you I think is the goal.

**Mikeal Rogers:** Okay. Transitioning a little bit... We're talking about all these features, and my assumption is that we're talking about using them without a compiler, and I think that that may not be your assumption. I'm wondering, where do you have to have a compiler done to ES5 to use this stuff right now? Are there IoT devices that have older dates that we have to worry about? Which browsers still don't support this kind of garbage? I mean, we're not supporting IE6 anymore, right? We're done with that.

**Alex Sexton:** \[00:11:59.23\] Yeah... IE9 doesn't -- IE10 and IE11 get into some of the territory, but still are missing quite a bit. I think the problem is that -- and Babel is perfectly capable of doing this, it's just somewhat uninteresting to try to solve unless there's a performance problem... But if you think about your application, let's say you're using ten new ES star features, and one of them is object spreads, which is totally gonna get in the language, but isn't in any browsers or Node or anything like that. It's just like an obvious thing that we're gonna do, and it's really useful to be able to -- much like an argument spread or an array spread, you can do the same thing into an object. It kind of like finally solves the jQuery.extend thing. So does Object.assign. But the problem is that you're already compiling with Babel at that point, so you're saying "I want all these features in Babel", and you could just say "Well, I just want object spreads and I know the rest will", but at the point where you pull in a compiler, you're like "Well, I might as well just go down to ES5", and I think that's the common way... It's just "Let me pull in everything that I know I need to compile to, because I want to just work everywhere" and then people don't think about it too much past there because there isn't too much of a hit for many things.

**Mikeal Rogers:** This isn't my thinking at all, though. I don't know if Rachel feels similar to this, but I don't use a compiler, like ever, for down to a different language. I only use browsers that support this, and if it's a feature that isn't widely available, I just don't use that feature.

**Rachel White:** Same. I don't.

**Mikeal Rogers:** Yeah, yeah...

**Alex Sexton:** I think you guys are definitely the minority.

**Mikeal Rogers:** That seems a little nuts to me. I really enjoy line numbers and all the simplicity of not having it...

**Alex Sexton:** Well all that works...

**Mikeal Rogers:** Well, yes... Provided that you have all that tooled properly, and it can be kind of a pain. Look, if you're gonna use Babel, then you're already in this -- or sorry, if you're gonna use React, you're already in this, right? So there's enough people using frameworks or other upper-level tools where the compiler is just a part of that toolchain already, but I'm certainly not gonna add Babel to my Node project in order to use object spread. That's not gonna be -- I don't understand that thinking, and I don't think that a lot of people do that.

**Alex Sexton:** I think a lot of people do that. I think it's pretty common these days to just start your project writing in the new thing even if it's compatible with the latest browsers or the latest whatever and still \[unintelligible 00:14:37.13\]

**Mikeal Rogers:** In your pure Node module you're already gonna have a compiler.

**Alex Sexton:** I think Node is a little bit less this way, because there are different norms there. But I think even in those cases it's somewhat common to see... Yeah, sure.

**Mikeal Rogers:** I wonder how many IoT projects Rachel has seen where they're compiling things with Babel. \[laughter\]

**Rachel White:** Not many, that's for sure. \[laughter\]

**Alex Sexton:** Yeah, I mean... I think IoT projects in the grand scheme of the amount of JavaScript that's being written are a small percentage...

**Rachel White:** True.

**Alex Sexton:** That doesn't make them unimportant or anything like that, I'm just saying that I think the average JavaScript developer these days is working in a framework, and those frameworks somewhat already introduce enough compile steps to where it's just a non-issue to add this.

So if you're working in Vue or you're working in React or you're working in Ember or you're working in Angular or you're working in any of these things, you have a Babel-like compiler already in your stack, so adding object spreads is just like a decision you can make or not.

**Rachel White:** I feel like most of the features that I have used and interacted with would have been like things that we touched on already: \[unintelligible 00:15:57.04\] arrow functions, some of the way they're doing class definitions and stuff like that. I guess this is gonna be the same thing that Mikeal was just about to ask - are there any features that you aren't using...? Which ones do you two think are the ones that people aren't really fully embracing or trying out yet?

**Alex Sexton:** \[00:16:18.04\] I guess there's two buckets there... The ones that people aren't trying out yet because they're bad, and the ones that people aren't trying out yet because they aren't' fully aware of them or they aren't fully powerful, or things like that. I guess there's also things that go in both buckets.

A lot of the stuff we use in Babel and the stuff that we're compiling down to is stuff that isn't even finished getting through ECMA and will change. Modules is something that everyone uses and a lot of the semantics of how modules load haven't been known for a very long time and that's kind of the driving force behind the problem with getting proper modules into Node specifically, because we've been doing it slightly wrong for so long, because we kind of just wanted to compile ahead of time. Now there's a clash in the semantics of how it should really work and we're gonna have to kind of work around that problem for a little while.

**Mikeal Rogers:** Yeah. I mean, without getting into the specifics there, there's actually a particular point where the spec sort of implies but does not define how things are supposed to work, and Babel made a decision about how they work at one point, and we're not gonna be able to support that in Node. In fact, the spec committee said that we should not do that and go that route, because of some of the other tradeoffs that we would have to make.

That one's even out. That one is actually in the spec, we just haven't had enough implementations to know what some of these really nitty-gritty details are.

You're by definition kind of on the bleeding edge if you're using features that aren't even actually in the browser yet.

**Alex Sexton:** Modules are now in the browser though.

**Mikeal Rogers:** In one browser, yeah. \[laughs\]

**Alex Sexton:** Pretty cool.

**Mikeal Rogers:** Yeah. So what features are you staying away from though? Like, actually staying away from...

**Rachel White:** The ones that I don't need... \[laughter\]

**Mikeal Rogers:** I think proxies are a terrible idea and I don't know why we should use them; they're just kind of a performance bottleneck.

**Alex Sexton:** Proxies were a really good idea for like a hot second. It seemed like a really solid solution to a thing that everyone was trying to solve at the time, and then we found better ways to solve those userland problems and then proxies became this thing that made a lot less sense... Namely like the "get set" type problems... The way that Ember used to work where you had to do .get and .set... There was a world where proxies in the future could do more .get or .set or .type stuff to where you could just say "myObject.foo=5" and then that would be the same as saying "myObject set foo 5" or whatever... It would need to do that because we need to run functions when things change in order to rerender. But now with virtual DOMs and all that kind of stuff,t the community moved on to different techniques for solving that problem that are a little less magic. So I think proxies kind of fell -- there are certainly use cases, but I think they're pretty small.

Generally, if you're using proxies you're hacking the crap out of a closed library these days...

**Mikeal Rogers:** Yeah, I remember similar features are in Python metaclasses, and the guidance for metaclasses is "Don't use metaclasses." \[laughs\]

**Alex Sexton:** \[00:19:53.18\] Other things - I'm trying to think... There are definitely proposals that -- I think it's less about... I'll use anything that's kind of in the language; they're pretty conservative, I think, about -- by the time it gets in the language, everyone's already been using it for so long that it's not even that cool. But there are definitely things that are level two in the spec that I don't think are ever gonna make it. Things like you could turn on stuff for immutable types, or even like -- one thing I don't use is decorators; I am skeptical that decorators are gonna go the distance, so I've been avoiding decorators. I don't have any data, I'm just waiting till they're more of a sure thing, I guess, if that makes sense.

**Mikeal Rogers:** I used them when I was a Python programmer, and my general feeling is that they complicate more than they simplify.

**Alex Sexton:** Yeah. There are some cases where they're really -- I think the authentication case for decorators is so pretty all the time; it's just like "This is an authenticated function" and it just magically makes off something that makes sense on a per-function basis. That's such a cool use case for decorators that it makes you wanna use them a little bit more.

I think they have a place, and I know the Ember community uses them a little bit. There are also people in the React community...

Ember concurrent uses decorators to do some of their stuff and I think it's a decent use case for it. But in general, I haven't seen a huge need for them, even though I'd probably use them once they made it into the language... Once they became more of a first-class supported thing by the libraries I was using.

**Mikeal Rogers:** I don't know, I'm more on the functional programming side of things, so I just don't -- I don't like encouraging people to write more classes.

**Alex Sexton:** Sure. That's a different conversation, but there are kind of two properties -- I'm pretty happy with the React world's... There are function components and some people are very big into that, but if you don't mind the class components. But then all functions that are a part of it are pure functions, and that kind of stuff... Kind of a mix of some of the better parts of each of the patterns to where you don't have crazy side effects and you don't have these different things, but then your Vue layer is a little more readable than just a function that calls a function that sends half of its arguments to another function. I don't know... I think there's a middle ground there that's nice.

**Mikeal Rogers:** Yeah. I think that we've hit a nice little spot here... I think we can take a short break, and when we come back we're gonna get into create-react-app.

**Break:** \[00:22:49.23\]

**Mikeal Rogers:** We're gonna get into some new features that just landed in create-react-app. It actually seems like a pretty substantial change.

**Alex Sexton:** Well it's 1.0.

**Mikeal Rogers:** Yeah. We talked about create-react-app on the show before, but Alex, why don't you give us a little bit of that back-story and a little bit about this in less than 12 minutes, how about that? \[laughter\]

**Alex Sexton:** That's tough... That's an Alex problem. Alright, create-react-app is very similar to Ember CLI, if you've ever used Ember. I think Angular has its own CLI tool as well that I don't know the name of, but pretty much the goal of create-react-app is to manage all of the things that Mikeal's always complaining about for you, that way you don't have to care about them.

If you want to color completely in the lines of the suggested React world set of tools...

**Mikeal Rogers:** And Webpack, for that matter...

**Alex Sexton:** Yeah, that's included in the suggested React world set of tools... Then you can use create-react-app. The idea is that you can say "Create create-react-app to do" and then you have a React app for to-do's that automatically compiles your ES6, has a way to do CSS in JavaScript, does error handling and building, and all sorts of the different things that you would normally have to set up manually, one by one... All is this one big package. It's kind of a template to get started with the project.

The history is interesting... It was like a hack weekend project, because React was one of -- a lot of the feedback React got was that there's no kind of baseline of guaranteed, supported tools that work together, and this is kind of like an answer to say like "Well, this stuff all works together." So it's kind of like a hackathon one-day thing, and then it's grown up a lot since then. This is the 1.0 release. It's been in use by a lot of people already, but now it's 1.0.

The idea is you have to stay within their -- so it even configures your ESLint, it configures your Webpack, it configures your CSS, it configures your Babel... All these different things. And that configuration is even hidden from you, because if you change it, then it's harder for them to make the assumptions that they can make. So you can either choose to use create-react-app as this thing that you can constantly update because you're staying within the coloring lines, or you can use create-react-app to generate a thing, and then you can do what they call ejecting. You can eject from create-react-app as soon as you create your app. It will pull all that configuration into your core directory or where it would go if you wrote it yourself, and then you can just edit it and all that stuff. But you can no longer pull updates from create-react-app in order to get automatic updates, if that makes sense.

Does that make sense as kind of a background?

**Rachel White:** Makes sense to me...

**Alex Sexton:** Cool. In general, I found that with the things at work that are difficult to do, if I wanna do a create-react-app, I have to eject pretty fast, because we need to change one ESLint thing in order to work with our build servers, and it's "Ugh, that kind of stinks." And that's like part of the deal... It's like if you can't do it, then you just don't get the updates. And sometimes that is not a problem.

In general, I haven't paid enough attention to create-react-app to get mad when they have an update and my thing can't update with them, but this release would be maybe a good example of something that's like "Well, if you stayed in the coloring lines, this would be a really nifty change." So we can go through the changes in 1.0 if you all want.

**Mikeal Rogers:** Sure, sure. My first question... So it says something on the order of like "Okay, you can use import/export semantics now without actually compiling down to CommonJS", but it's compiling down to something, just to get into the browser. It's not relying on the browser's support yet.

**Alex Sexton:** \[00:27:55.09\] It could... I think you skipped ahead. Webpack 2 is part of create-react-app now; it used to be based on Webpack 1. Most people were on Webpack 1. Webpack 2 is pretty new and it's a larger departure than a lot of 2.0 would be, so it's gonna take some work to get people moved over. But one of the features of Webpack 2 is that it supports imports and exports natively, like at all, as part of its parser.

Before, if you gave Webpack 2 imports and exports ES6 modules and you weren't using Babel, nothing would happen; it would break because it wouldn't understand that. So what the steps would be would be compile with Babel to require statements, and then pass this to Webpack, and then Webpack could understand the require statements.

**Mikeal Rogers:** Oh, okay...

**Alex Sexton:** But there are some features in ES6 modules like static analysis and stuff like that that are more guaranteed in ES6 modules, so they were able to say "Alright, we no longer care if you pass this require or these things, and so may skip the Babel step in order to pass imports and exports rather than first compiling down to Webpack." And then it can use the proper static analysis that is guaranteed as part of the ES6 modules in order to do better things with regards to bundle size and tree shaking and dynamic loading and all that kind of stuff.

So it's more of a "What does Webpack understand?" rather than... You still more than likely at the end will compile it down to require statements from whatever library in order to bundle it all together - it's part of what Webpack does - but it natively understands imports and exports now. And that is now included automatically in create-react-app, which means that if you were coloring in the lines before, all you have to do is update your create-react-app instance, the version, and you were automatically upgraded from Webpack 1 to Webpack 2, which is kind of the amazing thing. It's like, wow, that was a pretty big upgrade from Webpack 1 to 2. A lot of people are gonna spend a lot of time rewriting their Webpack configurations, and it was free because you stayed within the lines. Someone else worked on the hard parts of that... Which is cool. It's nifty. It's a good idea. Does that make sense, Mikeal?

**Mikeal Rogers:** Yeah, I'm just constantly sort of reframing how to think about Webpack. I think that for the longest time everybody thought of it as this compile tool, but in actuality it's more like a platform onto itself. It has a lot of primitives, like its own module system with more types and things like that than Node does... So yeah, I'm just kind of reframing how to think about that.

**Alex Sexton:** Yeah, it is an interesting tool. It kind of crosses over a few different boundaries of old tools that we've had, and so if you think about it as a Grunt type thing, you'll think about it as a Grunt type thing; if you think about it as a Babel type thing, you'll think about it as a Babel type thing. But it kind of is more of a piece of glue, but then it still needs to understand things like ES6 modules natively in order to do tree shaking and things like that. So it's an interesting project...

**Rachel White:** I was going through and reading the whole What's New in the create-react-app article, and a bunch of it made sense to me, but there's some things in here that I never heard of and I have no idea what they are... One of those being Jest 20.

**Alex Sexton:** It's a React-specific thing, just like the test running framework for React...

**Rachel White:** Oh...

**Alex Sexton:** \[00:31:49.26\] So they've just upgraded Jest I guess two versions. It used to be Jest 18, or something like that. Testing - we should do a whole episode on testing some time in the future, but one of the hardest parts about testing in the past, if you guys have done testing at scale for a web app (which may not be the case), functional tests are so sad... Where you need to pop open a browser with Xvfb and then send web driver commands to it in order to try to click around... They're so slow, they have so many false positives and timeouts and problems, and Chrome automatically updates and breaks all tests, and web driver implementations are shady between the different... But there's so many problems with that that there's this new world of writing unit tests where you can kind of mount components directly into memory, and then kind of write functional style tests as something that doesn't need a browser at all.

**Rachel White:** Nice!

**Alex Sexton:** And it's a little different than running jsdom, which is essentially providing a subset of a browser. And you can do a lot of the tests that you used to do very slowly, very non-deterministically with browsers as a unit test, where you say "If a click is applied here, the DOM should then reflect these different things", and you can test all that stuff, on kind of a per-component basis very quickly, without spinning up a whole browser.

So Jest is good at helping you manage those types of things. In general, if you're writing React code, there's a pretty -- Jest would be your default choice, even if it's not. I doubt it has more than 7D% saturation, but that's pretty good. There's still quite a few other options that people use... Ava, and a few different things. Jest I think is coming around and winning the default choice for testing, because Facebook wrote it and supports it and stuff.

**Rachel White:** Yeah. So it this one just bundled with the new release?

**Alex Sexton:** Yes. Jest used to be bundled... It's just a new version, so there are new things; the highlights include immersive watch mode, better snapshot format... Snapshots are where you can say like "Once this is rendered with this data, the HTML should look exactly like X." It's kind of like whenever people do screenshots with CSS frameworks and stuff like that, it needs to be pixel perfect - you can do the same thing with the HTML output of your components. You can just Snapshot like "I don't need to write down what it should look like, but I know this is good. Snapshot shouldn't change unless I change that module." So if some dependency accidentally starts changing your HTML, you'll get a test failure. And then just like the output and stuff, the APIs for new stuff in React... You also get automatic coverage reporting, which is good.

**Rachel White:** Cool. So it's kind of just like enforcing good practices on you anyway...

**Alex Sexton:** Yeah, and whenever you do a create-react-app it'll start you up with the test directory, with the test already written and imported and building and all that kind of stuff to where it's like really as soon as you write your thing it's a very fast and easy example on how to start writing tests for your thing without needing to learn about how to configure Jest.

**Rachel White:** That's awesome.

**Alex Sexton:** One tough thing for writing web apps is if you wanna write tests in the same JavaScript that you write your components and stuff in, but if you're using Babel and Webpack and stuff in order to compile everything down, then you're starting to watch and compile your test directory... Which is cool, but then while you're writing your app, you're spending an additional three seconds every time you do a save compiling your thousands of tests that you've written.

So there needs to be good configuration on whether you're kind of in a mode where tests run or get compiled, or whether it's important for them to get recompiled... And most of that's handled to where you're not doing unnecessary work as you're working, and then your tests can still be in new, cool, good ES6-y, Babel-y stuff that you write your other components in. You don't have to switch context to write older-school JavaScript for your tests.

**Rachel White:** \[00:36:25.14\] Great.

**Mikeal Rogers:** So moving off of testing, because I think it's boring... \[laughter\] I see that one of the things that it also does is it adds a service worker automatically and has an offline caching strategy, which I think is great that service worker support and PWAs are landing in frameworks like this. I'm terrified at the idea of the framework just implementing a caching strategy that I don't understand...

**Alex Sexton:** Sure...

**Mikeal Rogers:** ...because I've spent so much time fighting caches, it's just worrisome...

**Alex Sexton:** Yeah. I put a service worker early on the TXJS website in 2015 (I think) and if someone had hit it between 2 AM and 3 AM a week before the conference, then they would have been served that version of the website for the rest of their lives, unless they went in and cleared the service worker. \[laughter\]

So there's definitely some danger to where you can get yourself in a place where you accidentally cache everything and there's no way to break out, and that can be unfortunate.

I haven't dug deep into their service worker implementation, but my gut is if you don't do anything weird it should be fine, and if you do something weird - sorry. My gut is that it's fine for normal stuff, and you'll probably need to turn it off for crazier stuff.

It's probably very baseline, very lazy in the sense that it isn't gonna do too much because it can't assume as much. But if you think about just like a caching strategy of "Have we seen this before?" \[unintelligible 00:38:10.23\] if we've seen it before, return the old one, and always go grab the new one. And if there is a new one that's different from the old one, go ahead and also send up another event for new data." If that's kind of built into the idea of how you render things, which a lot of the React stuff is, as things change, it automatically updates, and it can kind of be a good default strategy.

**Mikeal Rogers:** Oh yeah, I hadn't really thought about that. React has a lot of understanding about the individual components, so it knows its rerenders need to happen when the backend updates. That's interesting.

**Alex Sexton:** Yeah, there's some nice synchronicity in some of that stuff, I think. It's not gonna be a silver bullet, but I think it's pretty good. Ember CLI doesn't have service worker, but by default whenever you do Ember serve a CSP (content security policy), which I think is a really cool default to have, just to make that a more widely used thing... Just like by default XSS is harder in Ember apps than it is in other apps because they do CSP.

So I really like these toolkit style CLI helper things doing things like solid generic defaults, that maybe aren't the best version of them, but maybe get people thinking about service workers or get people thinking about CSP. And it'll work in all the simple cases, as well.

**Mikeal Rogers:** Interesting... Very interesting.

**Alex Sexton:** You sound skeptical, but \[unintelligible 00:39:52.19\]

**Mikeal Rogers:** \[00:39:52.20\] No, I think just in general -- on the surface this looks like a boilerplate generator, and it's actually very much not just a boilerplate generator.

**Alex Sexton:** \[unintelligible 00:40:04.27\] It's like a living boilerplate generator, kind of...

**Mikeal Rogers:** Yeah. That's intense, though...

**Rachel White:** Well, it's a boilerplate generator but it keeps on helping. It just helps you continue on developing the app; it doesn't just run once and then you don't use it, right? Because it helps you put together all of the tools that you need for it.

**Alex Sexton:** Right, yeah. I mean, it's like all of this stuff feels like it's a great-grandchild of Rails, where Rails would -- there's a word for it... It would generate code; you would just say "Rails New Controller"...

**Mikeal Rogers:** Scaffolding... It was called scaffolding.

**Alex Sexton:** Yeah, that's the word. And it definitely feels kind of like scaffolding, and there's a bit of scaffolding in the initial create-react-app, but I think it focuses less on generating code for you and more about providing tools and examples and kind of a baseline for you to build on, and then allowing -- one of the things that scaffolding is it's like once it generates that code, that code is stuck there forever in that format... Whereas more of the strategy with create-react-app is that hopefully it scaffolds little enough to where it can update those things that it has generated on the fly.

I think the last thing that's interesting in the create-react-app 1.0 release is the code-splitting stuff, and that's part of Webpack, as well. But there's a standard that no one uses for dynamic imports... It mixes async/await with import.

I hadn't looked into it much, because it wasn't really a great place to use it, but it's part of the standards track. I don't know where it is in that, but... You're gonna have an async function and then you can import something... You can do "await import" and then that will automatically build into a separate -- all the dependencies of the thing that you're asynchronously importing can be built into a separate bundle.

**Mikeal Rogers:** Yeah, I think that you're complicating it a little bit. It's a piece of syntax that allows you to with a function do the same thing you do with syntax for import, right? And the nice thing about that is at some point in the future - which is like not part of the initial interpretation phase of the browser - you can say "Import this module." And then what you're saying is that now we can actually use that for code splitting, because you can say, "Well, these little pieces that you don't necessarily need we can now import dynamically using the same module system."

**Alex Sexton:** I guess I was complicating it because it would be invalid syntax to just throw an import there. It needs to be supported syntax; it's not just like something you could do before but people didn't know about it. I think awaiting in import is not -- like, it needs to be statically analyzable or at least known to be a part of it that isn't statically analyzable, because it doesn't need to be... Something like that. And that's why I think it's part of the standards track to do asynchronous imports like this.

So create-react-app supports this in order to do bundles, which is a huge part of the PWA community's problem. If you follow Alex Russell, you'll know that your JavaScript that you're serving by default is far too large. So if you can turn on HTTP/2 and then do something like a handful of these asynchronous imports for large portions of your application, I think it could go a long way to loading far less JavaScript on load, which is really nifty. I think this is such a good direction to automatically give to people. I hope they use it in the baseline example that they generate... That way people use it.

**Mikeal Rogers:** \[00:44:08.01\] Following on with your talk about scaffolding, it seems like the big difference between this and what Rails does is, like you said, Rails will generate a lot of boilerplate code. This seems to generate a lot of configuration, right? The joke about Webpack is you only write one Webpack configuration and then you copy/paste it into every project.

**Alex Sexton:** Yeah. I mean, that's a makefile joke, but yeah...

**Mikeal Rogers:** Yeah, exactly. \[laughs\] But I think also, like you were saying, one of the things that this does is really standardize what is the proper path for writing a React app with all these different configurations. So this allows you to sort of add features over time to that configuration without trying to get thousands and thousands of developers to update this particular line in their Webpack config.

**Alex Sexton:** Right. It's a noble cause. And other people are doing it. Ember CLI - they're doing this as well. When you upgrade these new-world configuration CLI tools, you get instant improvements in your applications, which is cool. Everything still works, and now it's 20% faster. Whenever Ember did the Glimmer update, all you did was upgrade Ember CLI and suddenly everything was using Glimmer. It was all supported, unless you were doing something weird, and suddenly your website rendered faster. I think that's a cool world -- I think that's a good goal for these well-used frameworks to go after.

**Mikeal Rogers:** Definitely. One thing I can't wait to see is not compiling down to ES5 anymore, but compiling down to a set of features that are actually mostly supported, because there's a lot of performance benefits, too. Arrow functions are faster than regular functions in V8, and for the most part, people that are working with compilers aren't getting those performance benefits right now.

**Alex Sexton:** Yeah. You can configure that... Not in create-react-app, but in a generic Babel config you can say "This is the target set of features that I want to compile down to." So it's certainly possible, but I don't think many people go that far.

**Mikeal Rogers:** And also there's only one minifier that supports it as well... And it's still under really active development, so that's one of the things that you kind of lose.

Anyway, I think that it's about time for another break. We're gonna take a short little break here and when we come back we're gonna talk about the project of the week.

**Break:** \[00:46:35.00\]

**Mikeal Rogers:** The project of the week this week is Electron. There's been so much stuff about Electron; I'm sure that we've talked about Electron apps on here, I know that the Changelog did a whole episode as well...

Just for some quick background, Electron is a way to build desktop applications for Mac, Windows and Linux using Node.js and browser technologies. If you can make a website and use Node.js, you can write an Electron app.

It was originally broken out of the Atom editor that GitHub was doing. it was initially called Atom Shell, and then Jessica Lord and some of the good people at GitHub moved it into its own project and now it's really taken off.

**Rachel White:** \[00:48:09.02\] And some of the Electron apps that people might know of is like Hyper and Slack, and something that we talked about recently, which is WebTorrent, and stuff like that.

**Mikeal Rogers:** Visual Studio Code, my current editor of choice, as well. Yeah, one of the interesting things that I've seen about it is that I think a lot of people initially viewed it as "Oh, I can take my website and turn it into a desktop app." That's sort of what the Slack app does. Or "I can write desktop apps, but it's a pain to do it across browsers, so I will write them in this instead." But what I've seen lately are applications that I don't think would even exist if it wasn't for having unrestricted access to Node.js, and then just being able to put a browser frontend on that. Just the size of the ecosystem is so amazing.

MongoDB has like a new DB Admin thing that's like a desktop app with Electron. Voltra is like this new music app that is way prettier and nicer than iTunes, and that is just because they knew Node.js really well, they can really dig into the nitty-gritty there. And a lot of the stuff that they're doing with data storage and sync-ing and stuff - they need that performance, that layer; they couldn't just do it as a pure web app. So it's awesome.

**Rachel White:** Have you built anything with Electron?

**Mikeal Rogers:** Yes. I wrote a little kind of a browser viewer on top of IPFS... Because I wanted to play around with IPFS, so I made a little drag-and-drop thing. I'm about halfway done with a desktop version of Roll Call, that uses Electron as well. And then I pulled down and just worked with a couple projects. I dug into the Brave code at one time, which is also an Electron app -- or was back then; I think now they're on their fork of Electron. And there was another app that I can't remember that I sent a pull request to, so I had to pull it down that way. And all of them have been great. I'm comfortable with Node, so it's a really comfortable place to be to develop in it.

**Rachel White:** Yeah. I mean, I'm super comfortable with Node too, and Electron has always been something that I have known existed as a thing, but is there anything extra that people that already know how to build web applications with Node would need to know in order to get up and running with Electron? Or does Electron kind of just wrap around all that stuff?

**Mikeal Rogers:** It wraps around all of it, but also... I don't think that we can underestimate how much stuff there is in NPM right now, like how many modules. And to make a lot of web apps work, a ton of what you do is that you build these backend services that just talk to something that has less security around it and more of the Node ecosystem, and then you push that to the browser in some way.

I've seen a lot of people just get up and running so quickly on their ideas because they can just store directly on the file system and access every module in NPM and then put a web front-end on it and not have to spin up a back-end service, not have to deal with a front-end and a back-end, where they just kind of have it all mashed together in this environment in Electron.

**Rachel White:** Alex...

**Alex Sexton:** Yeah?

**Rachel White:** Have you made anything?

**Alex Sexton:** \[00:51:43.23\] In Electron, no? My experience in Electron has been installing the Electron bin for -- actually, we used Electron in order to do screenshots for our CSS library visual diffs, because it was easier to just run Electron cross-browser, render something and then use the stuff to take a screenshot... And then not even reload pages, just inject the new components into the same page, and then you could take a ton of screenshots all in a row, and it ended up being really fast. I think it was an open source library that we have; I can find a link.

So yeah, I used it for a pretty different thing. That may be an interesting use case of it... It's just a cross-browser environment to run HTML in headlessly, which is kind of cool.

**Rachel White:** Yeah. What was the thing that...? Oh, this is gonna be horrible -- it's gonna showcase my horrible memory. What was the thing that Adobe had that was allowing you to make apps easier? It might have just been like in Max, or something? Does anyone know what I'm talking about?

**Alex Sexton:** Yeah, they had an editor, and then they had... Yeah, the name of this stuff, but it was kind of DreamWeaver 2000, or whatever...

**Rachel White:** Well no, not DreamWeaver... It was one that actually let you get some kind of -- obviously, I guess it's not as notable...

**Alex Sexton:** Oh, Adobe AIR?

**Rachel White:** Yes, Adobe AIR.

**Alex Sexton:** Thank you, Corvin U. in the channel.

**Rachel White:** Thanks! Okay, cool.

**Mikeal Rogers:** And Flex I think is what it eventually became, right?

**Alex Sexton:** Flex was the framework that you wrote in. AIR was the container that it would run in.

**Mikeal Rogers:** Okay.

**Rachel White:** Hold on, the cops are coming again. \[laughter\]

**Alex Sexton:** It was all Flash-based. ActionScript \[unintelligible 00:53:52.00\]

**Mikeal Rogers:** The cops are coming to arrest Rachel for talking about Adobe Flash... \[laughter\]

**Rachel White:** Okay, cool... So I remember when that came out and I was like, "Oh, this is rad!" I mean, Electron seems like -- I know that people are talking about it a lot, but I feel like people should be talking about it more... I know that's just like a handwavy thing to say, but why aren't people that are making pretty rad apps just not also by default making them in Electron as well? Does anybody know?

**Alex Sexton:** Because the web is an important distribution platform, and defaulting to native applications is maybe not the best strategy to reach the most people.

**Mikeal Rogers:** If you talk to people that have apps that people use daily - any app that you use for business or anything that you open up daily, people prefer desktop applications.

**Rachel White:** True.

**Alex Sexton:** They don't have to...

**Mikeal Rogers:** They don't have to, but if you talk to Slack, for instance... They have ostensibly the exact same thing on the website as they do on the desktop, and the desktop has a lot more engagement. Getting to people initially, asking them to (before they've seen any value) download this thing is a bit of a stretch for a lot of use cases. But I think that once you have people's attention and you really wanna up their engagement, that's where desktop applications are really useful.

**Alex Sexton:** I agree.

**Mikeal Rogers:** We still value the desktop, it looks like. There's been some great articles lately... GitHub actually -- they have these GitHub desktop apps that they've built a while back, and they have not actually moved them to Electron yet, so they wrote up their experiences - some C\# and Objective-C developers that are used to writing native applications for Windows and Mac - what they experience was like moving to Electron and doing Electron stuff. It's pretty interesting, I recommend it.

Alright, moving on to our picks... Everybody got their picks locked and loaded?

**Alex Sexton:** \[00:56:12.23\] Yeah, but mine's a copout.

**Mikeal Rogers:** Okay... Well, we'll start with your cop-out then, and then we'll go up from there.

**Alex Sexton:** It's create-react-app 1.0, baby.

**Mikeal Rogers:** Oh, shut up... \[laughs\] You can't pick the project of the week. That's like cheating.

**Alex Sexton:** Okay... Webpack 2.

**Mikeal Rogers:** \[laughs\] Tell us about Webpack 2. What's in it?

**Alex Sexton:** Tree shaking.

**Mikeal Rogers:** \[laughs\] Alright, I'm just gonna go on a little bit of a tangent here and you're gonna get mad about it... But I think that if you need tree shaking, you're dependent on some anti-patterns. I don't think that we should have these grab bag modules with a bunch of other properties in them that you should be shaking out. I think that we should be using modules that do one thing and only export one thing, and then you don't need to tree shake. There you go...

**Alex Sexton:** Maybe...

**Mikeal Rogers:** \[laughs\] Maybe... That's an amazing rebuttal. \[laughter\]

**Rachel White:** Anyway, my pick of the week -- were you gonna say something else? Go ahead, Alex...

**Alex Sexton:** I was gonna say that I agree to an extent that if you write something that has a few too many things, then tree shaking becomes a crutch, but I also think that take a substack or take a set of tools that are only substack and you'll still get some benefit from tree shaking in the end. It won't be massive, but you might as well do it.

I think tree shaking becomes even more cool when it can -- I guess you guys were gone when we made this the project of the week... What was that thing? Code-something came our recently... Facebook -- it was the project of... Anyways, it tries to code unroll and precompute things that are already available to compute at runtime or at compiler time... Things like that are also going to be massive, to where like there's an if statement inside of a substack module and there's no way that's gonna run based on the configuration, and therefore it can be compiled out. That's tree shaking-like, and it should be fine. Use it all. Use everything. Use every minifier at the same time.

**Mikeal Rogers:** \[laughs\] Alright. Rachel, what's your pick?

**Rachel White:** My pick of the week is a talk from JSConf EU that just happened that I unfortunately did not get to see in person... It's from Anjana Vakil and it's about immutable data structures for functional JS. She explains it in such a really simplified, easy to understand way for people that don't really understand what immutability or mutability or functional programming looks like, a.k.a. me... She just gives visuals that explains how nodes work and how you can do different things with it, and how you can have the arrays structured in -- well, I guess that's what mutability and immutability is, but she explains it in a way that makes sense and she talks about it in context of David Nolen's mori library, and Facebook's Immutable.js library and shows examples from both, so that you're able to understand the concept and see how different libraries are handling that kind of thing.

So yeah, if anybody else was wondering about that kind of thing, there's a link to it and it's pretty great.

**Mikeal Rogers:** Awesome.

**Alex Sexton:** \[01:00:10.11\] Earlier in the episode we talked about features that we don't use... My wish is that there was a way to use Immutable.js as the default in the syntax... Like there could be a Babel plugin for immutable versions of things. And there actually is a spec - I think Sebastian Markbåge proposed immutable data structures to ECMA, but I think it's dead and it's not gonna go, and it makes me sad... I really want to use Immutable.js but I really hate changing the syntax for everything. I want native immutable data structures... So that's a good example of something that I don't use that I wish I could.

**Rachel White:** Cool.

**Mikeal Rogers:** Cool. Okay, my pick is a book... It's actually a really old book. It came out like in the '80s, I think... '84. Crazy. It's called "Hackers", and it's not...

**Alex Sexton:** I've seen the movie...

**Mikeal Rogers:** It's not -- there's no rollerblading... \[laughs\] Hackers is about the origins of hacker culture, which eventually kind of became early technology and open source culture. You can skip the third part -- the book is in three parts, and the third one does not hold up. The first one is basically from the Tech Model Railroad Club at MIT in the late '50s and early '60s... They started using computers in a very different way, and how their kind of culture evolved and became the AI lab at MIT, which spawned a bunch of other AI labs and all of the early programming culture came out of what was going on there.

**Alex Sexton:** What's that chapter about...?

**Mikeal Rogers:** So hold on... The second chapter is about the Homebrew Computer Club and early Apple and early computing in the Bay Area, and also how a bunch of really crazy counter-culture political figures also informed that culture and what they were doing, and that's super interesting.

The third section is about the gaming industry, about Sierra and all those companies that were in the early '80s. At the time it was like, "Oh, and then this is what people are doing right now", but it really doesn't connect very well to the other parts and it really doesn't hold up as like "this particular section of computing is not nearly as influential as these other ones in hindsight." But also, there's some appendices.

One of the appendices is called "The last hacker", and it's about the last person in the MIT AI lab that is kind of the keeper of the flame for hacker culture. It's about Richard Stallman before he started the GNU project and before there was even such a thing as copyleft licenses or a GPL to argue about. It is fascinating! It explains so much!

I've been trying to read a lot about early hacker culture and how the counter-culture movement played into all this stuff, and this one of the best books to really dig into it. It's by Steven Levy and it's called Hackers. There you go.

**Alex Sexton:** My pick is the movie Sneakers.

**Mikeal Rogers:** Oh, that's a good movie!

**Rachel White:** Oh my god!

**Mikeal Rogers:** It's really the only tech movie that holds up, really...

**Alex Sexton:** River Phoenix?

**Mikeal Rogers:** Yeah, yeah... Oh man, that's a good one... That's a really good one. Some Robert Redford... Okay, anyway... Great talking with you all. I think that we're just about done now. Rate us on iTunes, check us out at Changelog.com/JSParty, you can get into our Slack, you can catch us live every Friday at noon Pacific time and something in other timezones, and thank you very much. Bye-bye!
