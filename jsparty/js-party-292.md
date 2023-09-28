**Amal Hussein:** Hello, JS Party listeners. We're back with an emergency podcast today.

**Jerod Santo:** Emergency!

**Amal Hussein:** This is an emergency. We've bumped up our regularly scheduled programming to have this very important conversation with you all today... Because I'm getting the sense that you all need to process, because I know I certainly need to process, I need to co-process... And who better than to co-process with today with me on the show is Jerod. Hello, Jerod.

**Jerod Santo:** Hello. Excited to co-process with you all.

**Jerod Santo:** Yes, yes, we're all co-processing together. We're going to light some sage, put on some mood music... Mood lighting, I should say... Is mood music a thing? I don't know, we don't have to answer that.

**Jerod Santo:** I think so. In a different kind of mood. But yes.

**Amal Hussein:** Okay. So we have a very, very, very special guest with us here today to co-process this really important topic... So we're going to be talking today about the little TypeScript dramatic brouhaha that's been going on within the community... If you don't know what I'm talking about, you just stay tuned; you'll find out. If you know what I'm talking about, then yeah, aren't you glad you're listening to this? I know, because I know I am. And so Rich Harris is here to help us co-process today. Welcome, Rich Harris. Hello.

**Rich Harris:** Hey. How's it going? Thanks for having me back.

**Amal Hussein:** Yeah. And you don't need an introduction, but would you mind just telling --

**Jerod Santo:** No introduction necessary...

**Amal Hussein:** Yeah, I know. He's like Jay Z, right?

**Jerod Santo:** But please do it anyway. Yeah.

**Amal Hussein:** He's like the tech Jay Z.

**Jerod Santo:** \[laughs\] Do you like that, Rich? Do you like being called the tech Jay Z? Is that a compliment for you, or... Not sure?

**Rich Harris:** Can't quite work that out. I'll take it.

**Amal Hussein:** \[laughs\] "I'll take it..."

**Jerod Santo:** Okay, so tech Jay Z, can you tell us a little bit about yourself, for people who may not know you?

**Rich Harris:** Yeah. I'm a dude who tweets a lot, and has apparently too many opinions, some of which get me in trouble... Which I expect we'll talk about. Prior to that, I did a lot of open source things. I made a JavaScript module Bundler called Rollup, and I started a UI framework called Svelte... And Svelte is what I work on day to day at Vercel. Ask me, I guess.

**Amal Hussein:** And you have a really cool British accent. It's not fake, right? It's like, you are from England...

**Rich Harris:** This is truly how I speak...

**Amal Hussein:** Okay, cool...

**Jerod Santo:** Just like the real Jay Z. \[laughter\]

**Amal Hussein:** Oh my God, imagine Jay Z with a British accent... That would be great.

**Jerod Santo:** That could be a good deepfake.

**Amal Hussein:** For sure, for sure. Don't tempt the internet, they'll do it. And so thank you so much for coming to talk with us today, Rich. This is a really important topic, because there's just so much to unpack here. The community essentially has had like kind of crazy, uproar reactions to several large well-known projects removing TypeScript support within the library. Some libraries have completely removed TypeScript without any other support for types, Turbo being one example of that. But Rich's project several months ago - so I feel like this isn't new news for you all in Svelteland, but you removed TypeScript support, and put JSDoc's type annotations in place of that, so folks have some backwards compatibility, which I thought was great. And you dealt with your own level of community uproar when you did that several months ago. And so could you kind of talk us through a little bit about what that process was like for you, and kind of how you came to that decision, Rich?

**Rich Harris:** I can, but I should say that the uproar very largely wasn't from the Svelte community. It was from, I guess, the TypeScript community, or like the wider web development community, who heard that we were removing TypeScript from the repo and immediately took the wrong conclusion. And they were up in arms, they thought that we were just doing this completely mad retrograde thing, and took a long time to yell at us on Hacker News, and on Reddit, and on Twitter, and elsewhere, without taking the time to understand the nuance of what we'd actually done.

\[08:01\] So a couple of years ago we were working on SvelteKit, which is the application framework that goes with Svelte. And we had taken the step of writing that codebase in vanilla JavaScript. So when you install SvelteKit, and that gets downloaded into your Node modules, the code that you're running when you run SvelteKit is the code that we wrote; it's the exact code that we wrote. It's not going through a buildstep, it's not going through Babel, or TypeScript, or it's not even being bundled with Rollup, or ESBuild, or anything like that... It is just the source code that was originally authored. And that's great for a whole bunch of reasons. Like, we don't have all of the complexities of a build step, we don't have anything in between you and the code that's running. There's no sort of changes of behavior that are being introduced by some kind of transpilation artifact or anything like that... But also, if you're inside a SvelteKit project and you want to understand what a particular piece of code that you've imported from the framework is doing, you can -- you know, in VS Code you have this command click functionality which is called go to definition, and it will take you to the exact line within the source code where that function was implemented. And you can start adding debugger statements, and console log statements, and whatever, and it will just work, which is kind of a magical thing.

Svelte, on the other hand, was for a very long time written in TypeScript with .ts files. And because we'd had such a great success with authoring SvelteKit in JavaScript, we thought "Why don't we do the same thing in Svelte? It's going to give us a whole raft of benefits", in addition to the things that I talked about; the go to definition, the fact that there's no complex build artifacts, any of that. It means that the package itself gets way smaller, because typically what happens when you have a codebase that is offered in TypeScript and you have to turn it into JavaScript, then in addition to the compiled output you have these chunky source maps, and all of these other things... And the package itself is way, way bigger. And so we've managed to shrink the package down by a huge amount, the complexity is way reduced, and everything is wonderful. But everyone wants to know what's going to happen when I use this library. Am I sacrificing type safety by using a library that is authored in JavaScript? And this is where what we did, and what DHH did, which I'm sure we're about to talk about, is very different. Because what we did is we're authoring in JavaScript, but we're annotating all of that code with JSDoc annotations, which gives the system the same type of information that we would have if we were authoring in .ts files.

And so we're still authoring .dts files, which get shipped alongside the package, and it's still being generated from the source... We're just not doing it by using this non-standard TypeScript syntax. So we get all of the benefits of type safety, autocompletion, IntelliSense, all of that stuff, but none of the drawbacks of complex build steps, and code in your Node modules that you can't edit, and all the rest of it.

**Amal Hussein:** Oh, yeah. And you're leveraging the JSDoc TypeScript integration; there's a plugin for doing that, right? Because I think JSDoc added support for that. It's like that's not --

**Rich Harris:** It's not even a plugin. It's not something that JSDoc did. It's just something that TypeScript just supports, since a long time ago. They introduced in version 3.7, or something; like, many moons ago. They added the ability to do type checking with JavaScript that has JSDoc annotations. And it's a subtly different version of JSDoc than people were using 10 years ago, before TypeScript... But it's basically the same. Above a function or an object you have this block comment which begins /\*\* and closes with \*/ And inside there, you have basically the same stuff that you would have had in your type annotations in the first place. It's a little bit of a different way of using TypeScript, but it's something that once you learn it, it is pretty familiar. And you can learn it in the space of a couple of hours.

**Amal Hussein:** \[11:59\] Yeah, JSDocs was like the savior back in the day; that was how a lot of libraries in Node published their API docs kind of automatically, with every release... And yeah, so just kind of getting back to your point about all the improvements that came with the removal of TypeScript, I'm kind of team idiomatic JavaScript any day... Idiomatic JavaScript meaning this is JavaScript that you wrote, it's not something that got spit out by a transpiler... And if you look at so many common things that we use in JavaScript... A recent example that was brought up on the podcast was optional chaining; if you look at what happens when you transpile something that uses optional chaining, it's a lot more bytes than what you wrote. So yeah, of course, for a library like Svelte that really prides itself on like "Hey, we're giving you code that you don't have to compile. It just works. You're running our source code, essentially, without any intermediaries", I can see how transpiling and doing a bunch of intermediary steps really pollutes the intention of the library, but also the readability, and your ability to even control the size of your bundles, or your output.

**Rich Harris:** Yeah. And that's actually an interesting case, the optional chaining thing; like, is it getting transpiled or not? Because you don't need to transpile that. If you have that optional chaining syntax inside your TypeScript, then you can just strip out the type annotations and run that as JavaScript. But it depends on what's in your tsconfig file. It's very easy to have the target setting such that that will get turned into the JavaScript that you would have had to write before optional chaining was in the language. And that's when you get that really bloated, transpiled output. And the reality is most people don't know what's in their tsconfig. A lot of people just don't want to learn what all of those different settings mean. And so when you start adding these tools, you really take on a responsibility for being very careful about what they're doing to your code, and most people just don't.

**Jerod Santo:** So Rich, would you agree that what you guys did is effectively equivalent to changing your internal tooling, without changing any of your external artifacts? Is that fair to say?

**Rich Harris:** That's exactly right. Well, actually, no. I'll caveat that. It's correct insofar as people who are using the library still get the type safety. And that's what people care about at the end of the day. They want to know that if they start typing the name of something that's in your framework, that they'll get the auto import, and that if they hover over it, they'll get the inline documentation, and if they pass the wrong arguments to it, they'll get red squigglies, and all of that stuff. That's what people want when they're using a library. But that's not to say that there are no user-observable changes as a result of changing from .ts to .js with JSDoc. Because as I say, the package gets way smaller because we're not shipping all of these source maps, and all of these other things get much simpler.

**Jerod Santo:** So improvements to Svelte, the compiled, bundled version, but you changed -- let me say it this way, you changed your team's tooling without affecting your users' tooling. Your users still have all the tools they had previously, with autocomplete and whatnot. Correct?

**Rich Harris:** Exactly. Yeah. If anything, we've taken on a bit of a burden ourselves, because TypeScript is, we think, nicer to offer. But we're very careful about making sure that our users get the best possible experience.

**Amal Hussein:** Yeah. And that's a good pivot, because one thing that I wanted to discuss today is what are those user-observable differences? Like, end user-observable differences. Especially - you're still supporting type annotations with JSDoc, so builds aren't going to break the next day for people if they upgrade... What else? Is there anything besides -- I don't know, is there anything at all, besides "Oh, my Node modules are slightly smaller"? Is there anything else?

**Rich Harris:** \[15:58\] I mean, I think that the go to definition stuff is huge, and something that we don't spend nearly enough time talking about. I'm old enough to remember the days before npm, when if you wanted to use some code off the internet, you would literally go find it on some page somewhere, and then you would copy and paste it into your project folder. And the expectation was that you would adapt it to your requirements. It wasn't something that you would get from somewhere, and then it was just a black box that you would never touch. But then npm came along and people started installing stuff from a registry, and then people stopped checking their Node modules into Git. They were like "Well, we can do that when we publish. We don't need to do it in version control." And then all of a sudden the culture changed. And nowadays, Node modules is kind of treated as this black box; like, you don't venture inside there unless you really need to. And especially once we started using transpilers, people don't ship their source code, they ship the output of Babel, or ESBuild, or TypeScript, or whatever it is. It really becomes this No Go area. You can go in there, you can have a poke around, but good luck finding the bit of code that you're trying to debug, or understand, or whatever. And I think that's a real shame. And I really believe that if you install a library, you should be able to poke around its internals and see what it's doing inside there. And the only way that you can do that is by shipping your source code, ultimately.

A lot of little libraries, even if they do have go to definition working, which almost none of them do -- like, you're probably going to be looking at some transpiled output. And if you start adding your console.logs, or your debugger statements inside this function that you're trying to understand "Why isn't this function working?", that's not going to do anything, because you need to rebuild from source. And that's just a headache that means cloning the repo from GitHub, understanding the very idiosyncratic build processes that they have, all of that stuff. It's just too much work, and so no one does it. So we've become this slightly helpless consumer culture of libraries, when back in the day the gap between library author and library consumer was a little bit more fluid and porous. And I'm trying to do my bit to bring that back.

**Jerod Santo:** So Rich, if you can go back and psychoanalyze, to a certain extent, the reaction to your change, which has been a while now in internet years, you said that a lot of it was because people didn't understand the nuance of what you all had done. I think that's fair to say that's part of it. Do you think another part of it is simpler than that, like "Rich Harris, who I respect, doesn't like TypeScript, which I love, therefore, I'm mad at Rich Harris"? Do you think some of it's that simple? Or do you think a lot of it was just not understanding exactly what had gone on? Because it seems like on the current kerfuffle it's more like that level of dialogue that's going on, and not so much about the difference between libraries and applications, and JSDoc versus not, and autocomplete versus losing that... It seems like it's more basic now. Was any of that there?

**Rich Harris:** No, I think you're right. I think that a lot of it is "TypeScript good, JavaScript bad." \[laughter\]

**Amal Hussein:** "Where's my pitchfork?"

**Rich Harris:** Yeah. If someone tries to bring any nuance into that conversation, then they're saying something less than "TypeScript good." They're saying "TypeScript mostly good, under certain circumstances."

**Amal Hussein:** It sounds like American voters, you know?

**Jerod Santo:** Yeah, you can't have that level of dialogue.

**Rich Harris:** Even that is essentially an attack if you are someone who doesn't have a very nuanced understanding of what these technologies bring to the table. And unfortunately, I think there are a lot of people to whom that description applies.

**Amal Hussein:** \[19:52\] I'd say like the majority of the internet, just in general. It's like, we've all been reduced to like headlines, and tweets... Anything over like 500 characters is like "Too much information. Sum it down. How do we sum this down?"

Yeah. Honestly, for me, I think what's just so strange about this whole thing is not just like the lack of nuance and curiosity... Like, I think I would expect developers who -- by the way, especially web developers, I will argue this with anyone, any day, hands down the smartest people on Earth; most creative people. I'd expect from a bunch of really smart people to be more curious, to be asking why, not just kind of this weird pitchfork reaction that we're seeing. And I know when that happened with Svelte many months ago... Was that around May, I think, or April? I don't even --

**Rich Harris:** That sounds about right.

**Amal Hussein:** Yeah, something like that. Yeah, your mentions kind of went crazy. Like, there was a lot of @Rich\_Harris, or -- there was just a lot.

**Rich Harris:** Yeah. To be fair, it all began with an interview on a website that I had given. I talked about the fact that we were switching from TypeScript to JavaScript, and I'd explained that this was going to yield certain benefits. And the way that it was written up didn't really explain what we were doing. And so some people saw that interview and they were like "Oh my God, Svelte is moving from TypeScript to JavaScript. Surely that's just a typo, or a mistake on the part of the reporter." And I did an even worse job of clarifying it at that point. I said "No, no, no, the article is correct. We're moving from TypeScript to JavaScript." And that's the point at which everyone just said "Well, you must clearly be a gibbering idiot, because no one would do that."

**Jerod Santo:** Yeah. So what's kind of funny is that Nick Nisi, who couldn't be here today -- of course, all of our listeners are like "Where is Nick?", because he's our resident TypeScript evangelist... And I'm sorry, listener... News of this kerfuffle caused Nick to literally become ill. So he can't be here today. He's literally ill because of this... No, not because of this; because of an unfortunate run-in with airborne viruses... But during this time, of course - you may not know this, Rich, but I've taken an anti-TypeScript stance on this podcast, merely for the lols. I'm just in it to be Nick's dramatic foil, because he's too positive, so I just go against it... And so when you did that, I explained it to him like "Hey, dude, Rich Harris doesn't like TypeScript. So TypeScript - bad", right? And I was just joking. And through the course of this - this was on a show we did. Through the course of the conversation, we ironed out exactly what happened with Svelte, and with the JSDoc comments, and everything... And at the end of it, he's like "Oh, that's not so bad. I'm fine with that." It's just interesting how when you actually address the nuance, and have the conversation, what was an immediate gut reaction of "Uh-oh, TypeScript's going down because Svelte's not using it" becomes "Oh, that's logical and reasonable, and I'm totally fine with it." And so we've found common ground in the details.

**Rich Harris:** Yeah. I mean, let me just state on the record once and for all, I f\*\*\*\*n love TypeScript. I think TypeScript is fantastic.

**Jerod Santo:** He'll be happy to hear you prefer to author it than you do JSDoc comments, because he thought that was crazy that you guys would want to do -- "Who wants to comment their code?" is what he said. \[laughter\]

**Rich Harris:** It's all situational. If I'm writing an application, then I will 100% use TypeScript. But if I'm writing a library that needs to be consumed by myself in another project, or by someone else, then having the raw source code in your Node modules just has so many benefits. And I think people are somewhat in denial about the costs that toolchains impose on them.

**Amal Hussein:** Yeah. And so are you all shipping ES5, ES7, ES6? I'm curious, since you are shipping just like Vanilla JS.

**Rich Harris:** \[23:50\] Are there any features that were preventing ourselves from using...? I think by and large browsers and server-side JavaScript runtimes are pretty current with syntax. I think optional chaining, that we mentioned, is one of the newest syntactical features, and that's supported everywhere that we care about... So I don't think that's something that we generally think about. We just authored modern JavaScript and just assumed that it's going to run. And if there's something that doesn't, then we'll remove it. But...

**Amal Hussein:** Okay&gt; So as long as it's basically gone through the full standards process, and it's like actual JavaScript, not just like in a proposal stage, then you'll write it.

**Rich Harris:** Right, exactly. Yeah. We're not using records, and tuples, or anything like that. But we're using everything that's available in evergreen browsers, essentially.

**Amal Hussein:** Got it, got it. That makes sense. So I guess for me what's shocking is like did people forget that before 2012 there was no TypeScript, and there was large-scale websites with millions of lines of JavaScript, and all that jazz? I'm just trying to understand... I know people love TypeScript, but why do they hate on JavaScript? As somebody who personally falls into the pragmatic TypeScript camp, where it's like, I definitely see the benefit of TypeScript, I think especially for large codebases, with multiple people contributing it makes sense... But it's still a superset of JavaScript. Why is vanilla JavaScript just so bad, so scary, even with types? Even with type annotations, apparently, it's not good enough. So I just worry that we've gotten to just this weird place in the community where people don't really know why they have the opinions that they have; they just have them, because someone else said it was cool, or someone else that they respect also has that, or... It's just disappointing, because I know how smart engineers are.

**Rich Harris:** So I have a theory about this... Everyone who uses TypeScript was -- almost everyone. I mean, some people come into the industry and TypeScript is the first thing they learn. But almost everyone who uses TypeScript was at one point a JavaScript developer. And when you've experienced JavaScript without types, and then you've experienced development with types, the difference is so stark. Once it clicks -- and it does take a while to click for a lot of people, myself included. It took me a long time to get onboarded to the TypeScript train. Once you get there, the idea of going back is just so painful. So everyone defends TypeScript with the zeal of the convert, because everyone is a convert. And people who have not yet made that journey themselves - like, it's so hard to explain to someone just how beneficial types are in a codebase if they either haven't yet had that epiphany, or they're actively resisting having the epiphany, for ideological reasons, or whatever it is.

**Amal Hussein:** Yeah, I get that. But TypeScript isn't perfect, right? Like, just to play kind of devil's advocate here. So I agree with everything you said, but types, a lot of time -- I mean, I wish actually as an experiment maybe we could do this with our listeners, or something... For the month of November, let's just like start a tally for how many minutes and hours that you spend in that month fussing with the TypeScript compiler.

**Rich Harris:** But you can't measure the amount of time that it's saving you.

**Amal Hussein:** Interesting. Yeah, that's a fair point.

**Rich Harris:** I know just from observing myself that TypeScript saves me literally hours a week, I would say. It costs me minutes a week, certainly... And those minutes are some of the most frustrating minutes that I spend programming. Let's say that I spend an hour a week fighting TypeScript, which is -- it's less than that, but let's say for the sake of argument that that's what it is. I'm going to be super-conscious of that hour, because at the time I'm like "Oh, I don't understand what is going on here." And usually, at the end of it you're like "Oh, right. Yeah, okay. I understand now. TypeScript tricked me into writing better code. It turns out I'm not smarter than Anders Hejlsberg --don't know how you say his name-- after all." But the time that TypeScript saved you over the same time period, which - just like an observation for myself, is way, way, way more time... You're not aware of it, you're just like happily coding. But there are times that you do become aware of it.

\[28:09\] Recently, I did a fairly major refactor on a sizable codebase, and if I hadn't had TypeScript to do that, where you just change some property of an interface somewhere, and then the type checker just tells you all of the places in your codebase, where the signature has changed; or like you can even do rename all references, and it'll just go through the entire codebase and it'll just do it for you. The idea of doing that refactor without the benefit of TypeScript brings me out in a cold sweat. But you know, you're so much more viscerally aware of the time that you spent fighting with TypeScript than the reverse.

**Amal Hussein:** Yeah, no, that's fair. And that's a good reminder, because I do like to be angry about how much time we spend on TypeScript, specifically fighting with the compiler. And for me, I'm like "Oh man, that's like time we're not spending writing unit tests, or doing other important things that are going to shore up the quality of this code." Or writing feature code, for example, even. So I think for me, that's just my own personal bias... But you're right.

**Rich Harris:** Yeah. I mean, there's two places where I really agree with you...

**Amal Hussein:** It doesn't ship in production. That's what gets me angry I'm like "Our customers are never going to run this code", you know?

**Rich Harris:** Right. Right. But if you're doing something very exploratory, and you don't yet know what the shape of the system that you're building is... Like, you're kind of like uncovering the design as you write it, that's a really bad time to be thinking about type safety. And I've always resisted adding types at that very, very early stage of a project that I don't yet understand the shape of.

But the other one is the build tooling complexity that I referred to earlier. I've got a great example just from a few days ago... I have this codebase that is written in TypeScript, and the tests all passed fine locally. Type checking fine locally. Linting fine locally. Send it to GitHub, and the CI is failing. And it's failing with the most inscrutable error imaginable. And it turned out from like a very long time spent digging through stack traces and something that somehow a module deep inside Babel was getting executed twice, and it was trying to update something on the exports object that had already been updated, and it was saying, "Well, this is read-only. You can't do this." And I couldn't reproduce it locally. There was nothing I could do. I made sure all my versions of everything were perfectly in sync, and I just couldn't figure it out. And I spent so long trying to sort this out, and I never would have had to if we just hadn't been using .ts files in the first place. Because the only reason that it happened is because our Rollup configuration mentioned Babel somewhere.

So without being able to actually solve the problem, the way that I worked around it in the end was just by not using Rollup, and using ESBuild instead. And so now the build artifact is 10% larger, because Rollup generates more efficient output. That is the cost of having to deal with this bull\*\*\*t. And the real solution is to just not be writing .ts files there in the first place, because then these things don't even arise. It's not the fault of TypeScript, but it is the fault of the enormous complex dependency chains that we've had to use in order to deal with all of this complexity.

**Amal Hussein:** Yeah. And don't forget the beauty of being able to also just copy your code into a Node context, or just in a browser console, and just being able to copy-paste your module and just have it run... That's another thing, for debugging purposes specifically, not having to worry about "Oh, this is TypeScript, and I need to do a few things before I can do that." It's quite, quite nice in that sense. And so for me, that's why I'm tremendously excited about the solution of kind of adding type annotation to JavaScript, and having that be in the standards, as part of the language. That's huge. So many wins can come from that, and part of it, I think, is also just reducing this tooling hell/nightmare that we're in right now.

We had Mark Erickson on the show a couple of weeks ago, talking about -- I'm sure you saw the blog post, his whole trying to modernize ESM.

**Rich Harris:** Yeah, yeah...

**Amal Hussein:** And yeah, a slightly different topic than the one we're talking about here, but similar pain points, just around kind of tooling hell, and interoperability, and all that jazz, so... The future can't come soon enough.

**Break:** \[32:36\]

**Jerod Santo:** Can we get anthropological again? Because I liked Rich's theory about - let's just call it the level of discourse that we tend to have around these things. The - would you call it the conviction of the convert?

**Rich Harris:** The zeal of the convert, yeah.

**Jerod Santo:** Yeah, and that's really interesting to me. I have a theory of my own, and I think it's actually dealing with the other subset of users, the non-converts... Because TypeScript's been around since 2012. It's been popular since maybe 2015, it's been dominant in the last five years... The size of the programming community roughly doubles every five-ish years. That's a lot of people coming into the industry. And so we are, as Bob Martin explained it to us on the Changelog, he said "This industry is perpetually in a state of infancy", because we always have new people coming in, just by the fact of every five years twice as many people are here; that means almost everybody is getting started. And a lot of those people get started in TypeScript today. And I think that's all well and good. But I think they don't have the conviction of the convert. I think what they end up having then is an identity problem. I think we have an identity problem inside of programming, which I think is probably stronger in people who are new to programming, because they have less experience with different things, and a lot of experience with one thing. And they begin to identify with that one thing.

And I think we have a lot of people who identify as TypeScript developers, just like people used to think of themselves as JavaScript developers. Hey, even JavaScript devs think of themselves as TypeScript devs and vice versa. It's like this superset kind of a thing. And that's problematic, because if somebody then speaks against the thing you identify with, they're speaking against you. And so like you said earlier, Rich, JavaScript good, TypeScript bad, that level of argumentation is usually because if you think TypeScript bad, I TypeScript, I bad. I'm speaking like caveman, somewhat on purpose, because it is kind of a basic --

**Amal Hussein:** But that's reaction that's playing out, is cave person.

**Jerod Santo:** It is kind of at that level... It's kind of the worst of who we are, and I think we can be better. And so I think that's a solvable problem. It's difficult because we have so many new people coming into the industry, and you're always gonna have people just getting started... But I think individually, we can combat that by generalizing, and not identifying with our tools so tightly. I know it's tough, because when you try to get a job, they want a React dev, they want a Svelte person, they want a TypeScript person. And so you have to say "I'm a TypeScript person, because I want this job for a TypeScript person." But that's one little context in which you have to define yourself as a certain type of person. But in your life, in your work, don't be a Svelte dev. No offense, Rich.

**Rich Harris:** No, I can agree with that.

**Jerod Santo:** Don't be -- unless you're Rich Harris. He can be a Svelte dev. Don't be React dev. Don't be a TypeScript person, a JavaScript person... Be a software developer, or an engineer, whatever you're gonna be called, and generalize as much as you can, and don't identify so closely with your tools... Because tools have trade-offs. Some are good, some are bad, and we should be able to discuss those trade-offs without attacking each other.

**Amal Hussein:** And shelf life. They have shelf life, too.

**Jerod Santo:** That's true.

**Amal Hussein:** I mean, for real, you know?

**Rich Harris:** It's super-hard, though. If you're new to any domain, not just programming, you want to build up some credibility, you want to run with the big dogs... And a very quick way to do that is to align yourself with a tribe, if you can identify the dominant tribe... And it clearly is TypeScript nowadays. TypeScript is in the ascendant, and JavaScript without types is not. Then it kind of makes sense to do so. People will project wisdom onto you by virtue of the fact that you have made the right choice of tribal affiliation.

\[40:07\] And so I don't know that it's as easy a problem to solve as just saying to people "Be a software developer." Like, people have been saying that for a long time, and it doesn't seem to have stuck... So I don't know if there's some way that we can -- I don't know, maybe it takes the people who build the tools to say it themselves. Maybe I should say "Don't call yourself a Svelte developer." \[laughter\]

**Amal Hussein:** Yeah, yeah. You should do it, in that voice.

**Jerod Santo:** Rich Harris says so. Yeah, you should. It's a very convincing voice. I like that.

**Amal Hussein:** Very convincing voice. It's like Barry White meets Jay Z's tech nerd, Rich Harris...

**Jerod Santo:** Yeah, that was good. If we can put that to a baseline, you know...

**Amal Hussein:** Yeah, yeah, exactly. It's like "Hey, y'all", you know...

**Jerod Santo:** That's what we need as advertisements. Public service announcement: Rich Harris says "Don't be a Svelte dev."

**Amal Hussein:** Right. Right.

**Jerod Santo:** Yeah, I do agree that there are incentives in order to do what you're saying... And you have to start somewhere, right? You can't start on everything. It does make sense when you're getting started to pick a technology, and dive deeper into it. I hope, as we advance in our careers and we start to see, like Amal said, that things have shelf lives, and Svelte won't be the best project forever, and TypeScript won't be the bee's knees forever... I mean, look, here comes Bun; maybe Node is on its way out, all of a sudden. Who knows what's going to happen? Maybe Deno is going to -- so it's interesting, technologies advance, and we need to be able to hop, skip and jump along the path in order to stay relevant. So I agree, it's tough because you want to start somewhere, and you can have a shortcut to competency perhaps, or at least perceived competency by picking the right popular thing... But in the long game, it doesn't pay off to stay there. And I feel like too much of us are just staying in one place, and throwing Molotov cocktails everywhere else.

**Amal Hussein:** Can I put my tinfoil hat on?

**Jerod Santo:** Sure.

**Amal Hussein:** Actually, it's not gonna be a tinfoil -- it's gonna be my $2, I'm gonna pretend to be a psychologist hat on; just bear with me for a second. So listening to you talk about this, Jerod, and Rich, it's very clear to me that there's some very kind of deep, primal things going on here. I do think community is very important in our industry, obviously. People identifying as a community means that they have a shared set of interests, tools, values, whatever. But people find comfort in those boundaries. You've got to know who's in your tribe. And so I feel like there's maybe an opportunity for the leaders of said tribes to kind of come together, like a little State of the Union, and do things maybe more often and put out joint statements, or whatever it is... I know that sounds kind of ridiculous, but really, I do think there's a need for more intermingling of thoughts and ideas. And people need to understand that you might think that "Oh, a React dev immediately hates every other type of developer", or whatever; or "Oh, this library is better than that library." But really, if you know the maintainers of all these projects, they're talking to each other behind the scenes all the time; they're collaborating with each other all the time. They're using pieces of code from each other all the time. They're inspiring things in each other's libraries... I mean, there's a lot of collaboration that I don't think gets surfaced in very binary environments like Twitter, or X I guess now... It just sucks, and I don't know how we can fix this problem. People need to stop being so unnecessarily hostile, I think, when they meet people from other tribes. And it's okay to have different opinions; it's okay to meet someone who hates TypeScript, and you shouldn't have to poopoo on them. It's fine. You might not agree, but we should agree to disagree. That's just like a sign of a civilized society, being able to agreeably disagree.

**Jerod Santo:** \[43:55\] The thing about Twitter though is a lot of people switch over to that to escape their current work that they're doing... And so some people just like to troll, and make stupid jokes, and throw the Molotov cocktails and see where they land. And it's not really them. It's like the worst part of them. And I do agree that maybe leadership could help, but at this point we have some leadership of certain projects actively throwing the cocktails into the mix... There's incentive on the internet to draw attention to yourself. And we have well-known contrarians who are very good at drawing attention to themselves, and they're well spoken, and they write very well, and they're very convincing... And they could be using that to bring people together, and not to cause this basic level of discourse... But it's more beneficial to just draw the attention, get all the clicks, all the responses, and then write a follow-up post that does even more. Like, that's more at a very individualistic level; it's like better for them individually. So it's a really -- maybe it's an untenable situation...

I don't know, Rich, you have large audiences... Do you feel pressure to lead in a positive manner? I know you're very funny on the internet, I know you also aren't immune to throwing in a Molotov cocktail every once in a while... What are your thoughts on the matter?

**Rich Harris:** I mean, Twitter is the Molotov cocktail throwing app...

**Jerod Santo:** It is. \[laughs\]

**Rich Harris:** ...that's why we go there. And if anything, because its current owner has made such a complete \[unintelligible 00:45:18.24\] of everything over the last few months, I feel like all of the moderate, reasonable voices have left, and all the people who are left are like the addicts and the people who just can't help but stir up some...

**Jerod Santo:** Yeah. The expert trolls are still there.

**Amal Hussein:** Thanks for explaining my reality, by the way, Rich... Because I don't want to say I was a moderate, but it definitely feels like I fell into like camp reasonable, camp "Can't we all get along?" And yeah, I've definitely disengaged and have left that platform right now. I've been toying a comeback; I don't know, I've been thinking about it... But really, everytime I look at Twitter, I'm like "Oh my God, all the people that are left are the people on the extremes", like you said. It's just like pole tents; you just see the top of the tents, but everything in the middle is gone...

**Jerod Santo:** It's not just Twitter though. It's Reddit, it's Hacker News... It's pretty much anywhere that developers hang out on the internet. I haven't seen quite as much on Mastodon; there's some talk... I'm just speaking on this current hooligan-ism thing going on. Like, pretty much anywhere, and Twitter is the worst place. It's kind of like that neighborhood where you're definitely gonna get a shiv in your back... But anywhere that we hang out and chat, it feels like, specifically on this topic, these X versus Y, is that this kind of activity is par for the course.

**Rich Harris:** I think that's just what the internet has done to all of us.

**Jerod Santo:** Yeah...

**Rich Harris:** Twitter is an extreme example, but the incentive's to -- you know, everyone loves that little dopamine hit of engagement, and the best way to get engagement is to throw Molotov cocktails.

**Jerod Santo:** Right. And rage.

**Rich Harris:** Yeah. And I am certainly not above this. I mean, I actually broke a long-standing rule last week with that whole thing with DHH.

**Amal Hussein:** Oh yeah, you gave a hot take. You gave a very hot take.

**Rich Harris:** So I thought I was late to the party. I saw everyone else talking about this, and like everyone was dunking on this...

**Amal Hussein:** But you have a loud microphone, so it doesn't matter. Even if you show up late, everybody knows when you show up.

**Rich Harris:** But I always forget that. In my head, I'm still a guy with 5000 followers. It's like really hard to mentally adjust to the idea that "Oh, there's people who -- if I tweet this, then a lot of people are going to think it's like a big sort of pronouncement." No, it's just me blowing off steam on a Tuesday afternoon.

**Jerod Santo:** What's your rule, and why did you finally break it?

**Rich Harris:** \[47:41\] So the rule is only do positive quote tweets. The quote tweet dunk is the lowest form of tweet. \[laughter\] And I've abided by that for a very long time. And when people quote-tweet me to dunk on me, I won't quote-tweet dunk on them back. I'm not gonna try and sick my followers on them, or anything like that. I will reply to them, and that's usually enough. But the tweet last week about the Turbo-8 thing, it was just so unambiguously wrong, and everyone was basically in agreement about that, that I just forgot my rule. I couldn't help it. But now I have relinquished any moral high ground I may have held from having that rule for so long. And so I do regret a little bit getting involved in that whole thing... But at the same time, it was kind of fun.

**Jerod Santo:** So - I don't know, should we give context? Because I feel like maybe our listener might not know exactly the tweet that was quote-tweeted, and what you said about it...

**Amal Hussein:** I was just gonna say, we'll put a link in the show notes to this famous quote, like to Jay Z not realizing that he was Jay Z tweet...

**Jerod Santo:** \[laughs\]

**Amal Hussein:** It's like "Oh, I forgot I'm Jay Z. I guess I can't just go to McDonald's and order a cheeseburger", you know? It's like, "Sorry..."

**Jerod Santo:** That's good.

**Amal Hussein:** But yeah, we'll definitely put a link. But yeah, maybe we can read it out loud, or share some context... Because I do want to pivot to DHH. I really didn't want this show to be all about that, because there's so much more important nuance to cover here, and I'm really glad we're having this discussion.. But I think DHH - his takes were also very specific, and he listed a slightly different list of reasons than you did, Rich, which is really around "Hey, TypeScript kind of shackles me, and shackles my code, and I'm not able to really write that beautiful, rich expressiveness that you get with just writing JavaScript, and doing all the fun things that you want to do when you're not restricted." So yeah, I don't know, should we pull up that tweet and read it out loud, Jerod? I'm not logged on to Twitter on this machine, and I will have to pull it up on my phone. But...

**Jerod Santo:** Well, I'm sure Rich has it open... \[unintelligible 00:49:46.09\]

**Amal Hussein:** \[laughs\] Yeah. Rich is like, "It's embedded. It's a feed embedded in my brain."

**Jerod Santo:** \[laughs\] It's his biggest mistake over the last week. It's gotta be right there...

**Amal Hussein:** He's like "I'm recording this podcast through Twitter." Sort of an iFrame on x.com.

**Jerod Santo:** So a little bit of context around -- so David Heinemeier Hansson, he's the creator of Ruby on Rails. He's a very outspoken developer and business guy, quasi-professional contrarian, and he's very good at taking a contrarian view... And he has a library called Turbo, which is a JavaScript library that helps your website go faster by basically hijacking anchor clicks and replacing them with Ajax non-full page refreshes. It's a long-standing thing that's on its eighth version; it's gone through a lot of iterations. Actually, we use it, an older Turbo, 5 I think, on changelog.com. I've used it for many years. It's decent software... And it's an open source project that's pretty much controlled and managed by him, and his company. And they took TypeScript out of Turbo; not the way that Svelte did it with type annotations, or with JSDoc comments, but just by actually removing it wholesale. And DHH wrote a blog post about why they did this, and he had a tweet about it, which Rich has now found, and I'm clicking on, which says "So farewell TypeScript. May you bring much rigor and satisfaction to your tribe, while letting the rest of us enjoy JavaScript in the glorious spirit it was originally designed, free of strong typing." So that's, I think, probably a pull quote from the blog post, as his typical fare is. So that's the context. And then Rich... Do you wanna dunk on him again? \[laughs\]

**Amal Hussein:** You should read this in your Jay Z voice, or your Barry White voice. Either one, you know...

**Rich Harris:** Hang on, I've gotta find my own tweet now...

**Jerod Santo:** Yeah, I liked the Barry White voice. That was good.

**Rich Harris:** Okay, here we go. Do you want me to read out my own tweet?

**Amal Hussein:** I can pretend guitar...

**Rich Harris:** Okay. So just, again, for context, a lot of people had already been attacking me... \[laughter\] This sounds like I'm an absolute psycho. Okay, okay--

**Amal Hussein:** It's just like being forced with your bad decisions like the morning after... "I'm sorry, I'm sorry to make you read your naughty tweet on a large podcast..."

**Rich Harris:** \[52:09\] If I had spent a little bit longer on this tweet and thought a bit more about the reaction... I probably did change some of the wording, but here we go.

**Jerod Santo:** Okay.

**Amal Hussein:** Did you know that you were gonna be reading it out loud? I'm just kidding... \[laughter\] Anyways...

**Rich Harris:** "Removing types from your own code is clownish, epically misguided behavior. But whatever, to each their own. Removing types from a library that other people have to used, however, is just user-hostile \*bleep\*.

**Amal Hussein:** \*bleep\* - is that even a word that we can...? That might even be censored. I don't even know.

**Jerod Santo:** We'll have to find out whether or not it gets bleeped... But it's a great turn of phrase, I think. Alright, so a little bit of nuance to this as well. So the reason I was describing Turbo itself is because it's not exactly the kind of library -- so I'm kind of defending DHH to a certain extent here... It's not exactly the kind of library -- you're not going to reference its API inside of your own code. It's the kind of thing that you link to, you bundle it in, you tell it to go, like turbo links dot whatever, start... And then everything else is just data attributes on your HTML, and it kind of does its thing. So I understand your statement there. I think with that particular library, there is a nuance where it's like no one's gonna be doing autocomplete on its functions. Like, it's mostly just internal stuff, and you just write your HTML to conform to the way it works, and that's how you use it.

**Rich Harris:** It does expose a public API though.

**Jerod Santo:** Oh, it does.

**Rich Harris:** Yeah.

**Jerod Santo:** But that would be an atypical use case for it. I mean, I'm a user of the version five, so I know that part, at least back then - maybe it's changed from five to eight... But giving him a little bit of credit, it's not like pulling our library and use our API is how you do it. Fair enough, it has a public API, so he's still removing features from his users... So I don't completely disagree with you, but it's a little bit better than I think people give him credit for.

**Amal Hussein:** Yeah. Well, I mean, people -- I mean, DHH could tell everyone that he's opened up an orphanage in South America, and I think people would still dunk on him at this point.

**Jerod Santo:** Yeah, he's earned that level of dunkage...

**Amal Hussein:** Yeah, he's just persona non grata for some people, and I don't know... This is, again -- I personally don't think it's healthy as a community to dunk on people that we disagree with philosophically. I think it's important to have diversity in thought, as long as somebody isn't being hateful towards others. They're allowed to exist, right? It's whatever. But anywho. So did anybody read the blog post? Because I didn't... So thoughts on the blog post.

**Rich Harris:** The reason that this is such perfect fodder for passionate nerd arguments is that there's just so much going on there. No matter what your bias is, what your priors, you can find something to strongly agree with or strongly disagree with. And even just the bit of the article that he quoted in the tweet that you just read out, "Let the rest of us enjoy JavaScript in the glorious spirit it was originally designed, free of strong typing" - it wasn't designed at all. It was thrown together by Brendan Eich over a weekend in 1980.

**Amal Hussein:** Right. It was a hack.

**Rich Harris:** Yeah. Okay, it wasn't 1980. It was a little bit more recent than that. But, you know...

**Amal Hussein:** 1980... \[laughs\]

**Jerod Santo:** Amal with the fact check.

**Rich Harris:** \[laughs\] It's not like JavaScript was supposed to be this way. This is just what we've --

**Amal Hussein:** It was an afterthought, yeah.

**Rich Harris:** And before that, "May you bring much rigor and satisfaction to your tribe" - well, Matt Pocock who, to be fair, is a TypeScript educator, and so has a little bit of a bias here, pointed out that consistently in survey responses TypeScript is a very large majority of TypeScript/JavaScript users. So it's not a tribe anymore. And even looking beyond the people who self-identify as TypeScript users, every JavaScript user in 2023, is a TypeScript user, whether they were aware of it or not. Because the minute that you start typing some code in VS Code, the minute that you start referencing anything from an external library, it's pulling in the type definitions, and it's giving you IntelliSense, and autocomplete, and all of that stuff. So everyone is a TypeScript user, it's just that a lot of people aren't aware of it.

And so just in that very small amount of space, just that tweet, there's a lot of different things to engage with.

**Amal Hussein:** Yeah, yeah.

**Rich Harris:** And the piece itself... I mean, it begins with -- like, we can't do a full read-through, because there's so much in there...

**Amal Hussein:** You know what, I would totally be fine with --

**Jerod Santo:** If you do the voice. \[laughter\]

**Amal Hussein:** Yeah, that's exactly what I was gonna say. If you read it like you're Barry White, but you know... I'm just joking. Okay.

**Rich Harris:** Well, let's begin. By all accounts, TypeScript has been a big success for Microsoft. Like, straight away we're getting some digs in at Microsoft. I'm like teenage me renaming the Internet Explorer icon to Internet Exploder.

**Amal Hussein:** Right. Right.

**Jerod Santo:** Oh, yeah. I remember that.

**Rich Harris:** Spelling Windows, Windoze. Take that, Bill Gates! \[laughter\] Okay, so Microsoft --

**Jerod Santo:** Or the MS DOS, and you do it with the M$, like M dollar sign DOS... That was one that we used to do, because Microsoft was all about money... \[laughter\]

**Amal Hussein:** So true.

**Rich Harris:** Exactly.

**Jerod Santo:** Well, as I said before, he's very skilled at being contrarian and just drawing out people's ire. And so he brings a lot of it upon himself. I mean, I think he actually enjoys that. I actually -- I've been around DHH long enough to know how much he despised JavaScript for many years, and would do anything possible not to write it. And so that sentence from the quote tweet is particularly interesting for me, because I know that he just despised JavaScript so much and they say it's the way that it was designed to be, you know? Like, it was so good back then.

**Rich Harris:** Well, in the blog post he says "The fact is that I actually rather like JavaScript. I go so far as to say it's my second favorite language after Ruby."

**Amal Hussein:** Oh, boy...

**Jerod Santo:** \[laughs\]

**Rich Harris:** Yes, a distant second, but a second nonetheless...

**Amal Hussein:** Oh, gosh... Because Ruby is so perfect, right?

**Rich Harris:** \[58:00\] Well, that's the thing... I mean, Ruby is like a pretty divisive language. I think that part of the reason that this created such a fuss was that - you know, to talk about tribes and communities again, the Rubyists are very much not our tribe. The JavaScript and TypeScript big tent, the broader coalition of JavaScript and TypeScript developers - it's going to feel like an attack if a Rubyist comes along and says "Y'all are doing it wrong. You don't know what you're doing."

**Amal Hussein:** Right. Right. Thank you for pointing that out, Rich, because I feel like -- I didn't quite follow the reaction that you got when you first went public with this announcement for Svelte and SvelteKit, but I think DHH being a Rubyist, and from a different tribe, adjacent tribe, where there's a Venn diagram, but definitely a lot of people who are writing Ruby code are not writing JavaScript... Dunking on TypeScript, and calling JavaScript cooler than TypeScript - yeah, I can see how that would really be like Molotov cocktail times a thousand. That's really --

**Rich Harris:** And I think you could make the case that TypeScript has made JavaScript less Ruby-like.

**Amal Hussein:** 100%.

**Rich Harris:** The two languages used to have some kind of spiritual similarities, in like the dynamic nature, the way that you can just kind of get in there and monkey-patch globals, and all of that stuff. You don't really do that if you're writing TypeScript, because the compiler's gonna yell at you for a good reason. Like "You shouldn't do that, because it's dumb..."

**Amal Hussein:** Exactly.

**Rich Harris:** But there's still this -- this cultural shift I think has been kind of encouraged, maybe slash forced by the rise of TypeScript.

**Amal Hussein:** Yeah. No, absolutely. I couldn't agree with you more. So I want to make sure we have time for our listeners' questions, Rich... So if you're not in our Slack channel, what are you waiting for? Join the Changelog Slack channel, and then join the JS Party channel and in particular. Yeah, so I asked some listeners for their hot takes and questions, and there was quite a few... Too many for me to go through line by line here, but just kind of paraphrasing... \[unintelligible 01:00:11.17\] was one of them, and essentially, his whole thing was like "I don't get how someone could do something this hostile. This seems like super, super-hostile."

**Rich Harris:** Are we talking about the PR, or my tweet?

**Amal Hussein:** No, no, no. We're talking about the DHH thing specifically...

**Jerod Santo:** The Turbo 8 removal of TypeScript. Is that what you mean?

**Amal Hussein:** Yeah. That any project that would basically flat-out remove TypeScript without providing type support - that feels very hostile. And so his thing was like "How many CI runs are broken because of Turbo this \[unintelligible 01:00:43.16\] Which I think is a fair --

**Rich Harris:** Well, they haven't released it yet, so none so far...

**Amal Hussein:** Okay, that's good to know.

**Rich Harris:** But it will be interesting to see if that happens...

**Amal Hussein:** Yeah. Fair point, you know? So I don't know... I mean, given that you didn't do that, you can't answer that, but... So I guess the answer is really --

**Rich Harris:** I mean, I can stab a guess... I think the reason that you would do that is if you literally don't understand what the purpose of the type declaration files is; what benefit it brings to people. If you think it is just some box that I have to check, filling out a pkg.json correctly, then you'll be like "I don't care about this." I see no benefit. But if you use JavaScript libraries, and you're part of like the JavaScript/TypeScript ecosystem, and you've experienced the difference between a library that has good types, and a library that just doesn't bother, or like delegate it to definitely-typed, or something like that, then you'll be a lot more sympathetic. And I think what was at the core of this whole thing was a lack of empathy for the people who are affected by this.

**Amal Hussein:** Yeah, that makes sense. So Daniel Buckmaster had a question... Well, it was more of a comment. They were like "Well, this is really interesting timing around this removal of TypeScript, especially when projects like ESBuild and Deno and Bun are all trying to actually add support." And I think that's an interesting point, but I'm curious if you have any thoughts on that.

**Rich Harris:** \[01:02:07.13\] Yeah, I mean, I Deno and Bun are written in TypeScript, but Chrome isn't... So I would prefer that packages continue to ship JavaScript. If I have to start transpiling stuff to run stuff that I've installed from Node modules, then I'm going to be mad.

**Jerod Santo:** Are you excited about the type annotations proposal? Is that something you've looked at and you're --

**Rich Harris:** Oh, yes. Extremely. Yeah. So I don't know how many people are aware of this... I think it's absolutely huge, and I really hope it comes to pass. Essentially, the idea is that you can write TypeScript syntax or something very close to TypeScript syntax inside JavaScript, and the JavaScript engine essentially just treats it as an inline comment and ignores it. And the idea is that in theory, you can express any type system in there; in practice, it will be TypeScript. And so you can have type-checked JavaScript without any transpilation whatsoever. And it will just put this whole argument about "Should you use .ts or should use .js with JSDoc?" to bed once and for all. And I for one could not be more excited.

**Amal Hussein:** Yeah. I mean, you're basically doing that already, just with the help of a library... And once this is supported in JavaScript engines, you won't need JSDoc. You can just do this using the famous web platform that we keep hearing about, right? Like "Just use the platform", right?

**Jerod Santo:** ...that we keep hearing about...

**Amal Hussein:** Yeah.

**Jerod Santo:** One of these days... When's that web platform gonna come out? \[laughs\]

**Amal Hussein:** Yeah, this thing... And lastly \[unintelligible 01:03:28.21\] says "I am here for it. I have been saying that, especially on the frontend, I lose a lot more time using TypeScript than any time it could possibly spare me for potential runtime bugs. On the API side, it makes a lot of sense, though." That's kind of how I feel... But of course, it would be completely irresponsible for me, especially when working in a large scale application or with other developers... I think in 2023 it would be irresponsible for me to not use TypeScript in application code. That's just my personal opinion, and it's fine, you can have a different opinion and that's fine. It doesn't make you a bad person, despite what the internet says. But yeah, I mean, what are your thoughts on that, Rich? We kind of talked about that a little bit earlier, but I feel like maybe your expertise in TypeScript helps you have minutes lost to TypeScript lost every week, versus hours... Because I've seen some people just literally will spend hours struggling with TypeScript. And that's not uncommon.

**Rich Harris:** I have so much empathy for people in that position, because I've definitely been there. When you first start using TypeScript, you really do feel like this is just busy work, "I'm just writing all of this extra junk to appease the compiler, and it's not doing anything for me." And then at a certain point, in my experience - and this has happened to me, and it's happened to so many people that I've talked to, and that I've personally helped on the TypeScript journey... At some point, it kind of clicks. And then you realize that you're not fighting with the compiler anymore. You're just giving the compiler the means to help you. And I think what sometimes happens is people aren't aware of the degree that you can take advantage of inference, for example; you feel like you need to annotate every variable declaration, when actually, by and large, you don't need to do that. TypeScript has got your back.

And it's this difference between fixing the types and doing type-driven development. And once you manage to flip from one into the other, it's super-hard to go back. And so I get it. I understand why someone would feel that way. All I can say is keep at it; it gets better.

**Amal Hussein:** Yeah, yeah. It does. It does. And once you're over the hump, it really does get better. You just have to keep fighting it, though. Just work towards getting over the hump, you know...

**Rich Harris:** And in the meantime, just slap in any on there.

**Amal Hussein:** Yeah.

**Jerod Santo:** Bam.

**Rich Harris:** Like, it's fine. It's there for a reason.

**Amal Hussein:** That's right.

**Rich Harris:** Or even like a @ts-ignore comment. If there's something that you just can't get to work, then just ignore it for now, and come back to it later; or get someone else to do it for you.

**Amal Hussein:** Yeah, I could not agree with you more. So Rich, it's been an absolute pleasure having you on the show. My last question is just what's the magic wish for the future here? Where do you see this landing in like a year or two? ...this whole situation.

**Rich Harris:** \[01:06:21.05\] Please let the type annotations proposal happen... The one thing that scares me a little bit is the fact that it has to be language-agnostic, or type system-agnostic, because otherwise that really would represent like a capture of the language by Microsoft... And so there is clearly still potential for tribalism, and nerd fights, and whatever, but just having the ability to write TypeScript syntax in JavaScript, and have it strongly typed and typed-checked, but also have it just run everywhere, without any need for all of these complex build chains is gonna make so many people, especially me, really happy. And so I just pray that that happens.

**Amal Hussein:** Yeah, amen to that. Your lips to God's ears. So Jay Z-Barry White-Rich Harris, it's been so fun... I ask this to everyone, where can folks connect with you online If they want to give you hot takes, or give you high fives?

**Rich Harris:** Well, I am still a hostage to twitter.com/rich\_harris. At least until they finally destroy that place. And I don't know, GitHub. Come and look at the Svelte and the SvelteKit projects. That's where I spend most of my time. Join the Discords for those projects and come hang out.

**Amal Hussein:** Yeah, that sounds great. Well, thank you again. Jerod, it's been fun having you co-paneling, or whatever the word is...

**Jerod Santo:** Thanks for having me. And thanks for not having Nick here. That was a really good call, Amal.

**Amal Hussein:** Oh, no, no, no... It's not my fault his immune system gave out in the wrong week.

**Jerod Santo:** Good call. I'm glad you uninvited him at the last minute.

**Amal Hussein:** Oh, my God. Now you're gonna start a controversy. Anyways... Alright, guys, so next week back to our regularly scheduled programming, so a show on JavaScript security...

**Jerod Santo:** Unless there's another emergency in the meantime.

**Amal Hussein:** Yes, unless there's another emergency. An awesome show on JS security with Ron Perris. He's a security engineer at Reddit. We worked together when were at npm. He's phenomenal. Just bring your notebook to that podcast. So with that said, have a good one, y'all. Cheers.
