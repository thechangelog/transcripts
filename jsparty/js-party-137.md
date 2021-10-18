**Mikeal Rogers:** Hey, everybody! Welcome to JS Party, where it's a party every week with JavaScript. Let's get into it. We're gonna talk about ESM today. So what is ESM, and why do we have so many acronyms for things, instead of just talking about them like regular humans? Fred, tell us about ESM. What's ESM?

**Fred K. Schott:** Oh, man... ESM is everything, and it's nothing, and it's not a big deal, and it's a huge deal... It's a really cool technology, that I'm very excited about.

**Mikeal Rogers:** It sounds like JavaScript.

**Fred K. Schott:** Yeah, like JavaScript - it's but a toy, and changing the world at the same time. ESM is really just a way to load JavaScript, so... Yeah, a pretty simple concept, but it's a concept that works really well on the web, which is something that we haven't really had up to this point, which is amazing on its own. It kind of takes the best parts of the web, where things are usable by the browser, and they're URL-based, so the browser knows how to cache things, and load things, and load everything you need at once in parallel... But using all the things that we've gained over the last decade, really, of having a module system that is built on a registry that is huge, and growing, and popular... You can bring your tools, you have a really explicit connection to how your code is loaded. It's kind of all the best of everything we've gained over the last 20-30 years of development.

**Mikeal Rogers:** Yeah, and I think for people that are relatively new to software development, your comment about "It works well for the web" is probably not that well understood. If you've been doing web development for less than ten years, you're probably used to "Oh, I use Npm, and I use these compilers", and that's part of the web development experience, part of the web.

I think people forget that there was this time period called the 2000's. In the 2000's we didn't have those things... But there was some really cool stuff happening on the web, and the way that you loaded things on the web was with URLs. So the first thing you did was load jQuery, and then you could actually program... \[laughter\]

**Fred K. Schott:** And that was your whole package ecosystem.

**Mikeal Rogers:** \[04:05\] Yes, yes... \[laughs\] So you put a script-include in, add an URL, and it would just pull in things out of the web, in the browser; it wasn't running through a compiler. We were just pulling these things into the browser, just in time. And we kind of built from there. That was before this whole compiler ecosystem happened, because the web never really had a modules system. This was in the dark ages, when everything was using var, and all of that...

**Fred K. Schott:** Ha-ha! Shudder.

**Mikeal Rogers:** \[laughs\] Yeah. Did you forget about var?

**Fred K. Schott:** Yeah, I have a talk that I give, where it's a slide, and everytime I go to it -- like a gas reaction of just script tags, script tags, script tags... The way you loaded code was just kind of throw it on an HTML page, and hope that your order was right, hope that these things knew how to load each other implicitly... And they would fail if they didn't. It was a pretty Wild West of programming.

**Mikeal Rogers:** Yeah. On the one hand, you had this dependent ordering to make sure that things were injected in the scope at the right time, but that also meant that you had to load those in that order, and that you can do that recurrently and efficiently... Unless you added other tags, and then you had all these extra dependencies... It was really a mess, and to some extent, this whole compiler ecosystem - it definitely predates React, but React was the first web framework that was not a script-include. Even Angular was a script-include in those first few versions before it moved into this compiler space... And then with React and everything that came after it, the web frameworks and the web toolchain was all implemented as a compiler and part of a compiler toolchain, and you weren't really using just the web anymore, and just the browser.

And what ESM does is that it takes these primitives that we have in Node, like the module system, and this way to package up a program and give it to other people and let other people rely on each other's programs and build these dependency chains - it finally gives those primitives at least to the browser, so that now I can use this module system and depend on other people's stuff, like effectively add URLs, and things like that. But that's a pretty disruptive change. We have more than a million packages in Npm. It is an order of magnitude the largest package ecosystem in the world, and this is all not really working on that, so... \[laughs\]

**Fred K. Schott:** Yeah, it's a huge change, that feels very small, but it's so fundamental.

**Mikeal Rogers:** I was just gonna ask you, some of the early Pika stuff that you did was really looking at "Okay, what isn't Npm that is in ESM?" Because a lot of people have been using ESM and packaging stuff up with NPM. So what was the easy to translate layers of this existing ecosystem, at least for browser developers, to move into ESM, that's already in Node? And then where are some of the compatibility problems already?

**Fred K. Schott:** Yeah, it's really interesting -- the way it's come into the ecosystem is really interesting, because it actually was a pretty nice... There were a lot of things to like as an application developer for ESM, so using it in your application -- you are no longer using this require function that Node had kind of adopted and web developers just brought on as a force of habit and a way to work with Npm. You've got this much more friendly and much more easy to analyze method to import and export.

Bundlers were a little bit more efficient when you wrote your application using ESM... There were just a lot of things to like as an application developer. The problem was that then what people were doing was they were almost downgrading the things that they published to Npm, that they shared with the world, from this ESM to this CommonJS. So going from a really explicit, new import/export, to just that module.exports, that require function, the code that runs on Node... Even if it was something that they were building only for the web. So it was kind of like a downgrading almost of Fidelity, and you can no longer analyze really easily what it has and what it's exporting and what it relies on... So it was this weird problem that we had where we had the technology, application developers were loving it, but then everything that we were relying on, which makes up like 90% of most web applications, Node applications - it's a huge chunk of what we end up running - was this lower-fidelity, this downgraded experience.

**Mikeal Rogers:** \[08:00\] Yeah. And to put some more specifics on that, I think people have thought that they were using ESM for a long time, because they were using this import syntax and this export syntax. They weren't actually using Node's require function. But the thing that I think nobody really realized in doing that - they weren't using the browser primitives for that module system yet, obviously... But they were also relying on a lot of things that compilers were doing, that were actually not going to be practical for browsers to do in a native ecosystem. So one of the things that these compilers did was like if you imported a package by name, it would use Node's resolution logic for Node's module system to go and figure out where that module is by that name.

This is one of the big things that kind of breaks in native ESM, is that these things have to map to files. The browser can't go and check a bunch of areas and directories recursively to figure out where the root of a package is. So it either needs to have directly a link to the file, or it needs to have a name that then there is like an import map - which is another feature of the ESM that we might talk about later - that maps that name to a specific file... So for tooling authors, this is kind of amazing, because now you have this statically-analyzable module system that you can pull in and just look at the syntax and kind of know what's going on... And each of those things are not pointing at a complicated resolution logic, they're just pointing at a file, when you're in this native space.

But for the compilers that have kind of taken all of the old Node code and made it work in this ecosystem, a lot of the work they did kind of shielded people from how dramatic of a change this is actually going to be once we start to really move to native ESM. We actually have to get rid of a lot of that stuff, some of that stuff isn't gonna work anymore, or we're gonna start to do -- we'll talk about some of the nasty compile stuff that you have to do to get out of this world a little bit... \[laughs\]

**Fred K. Schott:** Yeah, I have definitely softened my stance there a bit, in that when you looked at this in the early days - everyone's using CommonJS, and we see the world shifting towards ESM, but there are these kind of still hairy things that we need to work with... So yeah, I wanna import something by name; I wanna import React - the browser wouldn't let you do that. It would say "React? What's React? I don't know what that is. I don't know where to find it. Pooh-pooh to you."

I think I see the middle path here, whether that ends up -- there's a world where we don't actually need that in the browser. There's a world where you still get all the benefits of developing with ESM, whether you're a library author or an application author; we're already coming from a world where web developers use tooling to sit in between what they're writing and what ships to the browser. So we're moving to a world where that can be much lower cost and much lighter touch. You can rewrite at build time, essentially, import React -- "Okay, well, actually, I wanna import it from here."

There are these things that seem like limitations of the platform, and they definitely are, but they aren't blockers in that way, where tooling that we're already relying on can both simplify itself, become lighter touch, but also take care of these last few issues that exist, these last few things that might be blockers, but can just be solved by tooling. That's really where Pika and Snowpack and Skypack - where all of these projects that I've been working on come from that idea of just "What would tooling look like in a world where we have these much easier to work with primitives/module system etc.?"

**Mikeal Rogers:** Yeah, and I've been really happy to see that tooling and that ecosystem really starting to take a lot of these problems quite seriously. So not just sort of supporting the things that Node is doing, like explore maps, for instance, which is a feature in the Node module system that's kind of important, and now compilers will look at that and have an understanding of it... But also, all the new versions of compilers, and even Rollup now, have basically taken the stand that they're not gonna inject Node polyfills anymore... Which is something that -- we got really used to all that tooling just kind of doing it automatically, and not really seeing the cost of using the Buffer interface, or using all these Node.js standard library modules...

**Fred K. Schott:** Yeah, all of a sudden you were looking for one hashing function and you installed the entire cryptographic library of Node into your web application... It's like, "Why is my web app a megabyte?" It's like, "Oh, that's why..."

**Mikeal Rogers:** \[11:59\] Yeah, yeah... It's pretty bad. \[laughter\] I've been dealing with removing just Buffer from my code. Just Buffer from our libraries and our dependencies. And honestly, at first it wasn't even migrating to uint8 array, it was just importing Buffer as a module instead of relying on the polyfill, because the polyfill was gonna break in all these compilers... And that took months, hundreds of PRs, and we have a much bigger change going down in the same stack where we're actually migrating to uint8 array, and changing out a value type is one of the most destructive things that you can do in these types of ecosystems. So it is a bit of a painful upgrade... But before we set this down, what are the benefits? What are we gonna get out of this other than just the pain of migration?

**Fred K. Schott:** Yeah, I'd love to talk about some of the stuff we've worked on. Pika started as a way to find these packages; this idea that right now Npm search is very Node-focused... And you can think of Npm as -- it started as a Node package manager; the whole ecosystem has had a preference for Node, I would say, and not really been about what do web developers need from it. WebPack, Rollup - all these things existed to basically take that ecosystem and make it work for the web. So it was very much "Take a thing that is built to run as-installed on Node, and now do things to make it work on the web." It's a subtle point, but it's a really interesting part of the model, that we all have built on for the last ten years.

**Mikeal Rogers:** Yeah, yeah.

**Fred K. Schott:** The realization was that this was a big change for evening that playing field, and that now ESM as a module system is something that everyone can rely on... And that what that means to make this work for the web is actually a much lighter touch. So when you have a module system that you can ship to the browser, if you think about what WebPack does, especially when you're doing development - you hit Save, and what WebPack has to do is take that one file change, now integrate that into these bundles that it's created, recompile, rebundle, reship to the browser...

What you end up with - and I've seen this myself, and if you've done web development you've probably seen this yourself - this idea that your dev server takes a long time to start up. When you hit Save, it takes a long time to react to that change. There's cool things you can do with HMR, and if you've heard of React Refresh, and all these different projects to kind of shorten that cycle... But at the end of the day, what you're looking at is I've changed one file, and now my dev tool has to go and change a bunch of files. And that's just built into the model of bundling, by definition of bundling, and by definition of what WebPack, Parcel, Rollup - what they're all doing is they're following that model.

What I've started experimenting with Snowpack is just a different model. So all the same build tools; you still use Babel, TypeScript, everything you're using today, but the model is changed, the underlying model... And what that says is that when I do development, I actually stop using a bundler. Because I have ESM, which works in the browser, I can actually make a change to a file, and now all I need to do is rebuild that one file. So instead of rebuilding lots of files, recompiling, rebundling and then shipping that to the browser, it's "How fast does Babel build a single file? Pretty fast." And what that also means for caching - bundlers have done a ton of work to create a really smart caching layer... But at the end of the day, again, when you're combining all these files together, your caching is just kind of lower-fidelity, because multiple files are combined; you change one, you change them all.

What we were able to do is that once that file is built in cache - because it's only one file - you never have to rebuild that file again until you change it.

So the caching story for Snowpack as a dev environment is that basically every file is built once... Once forever. And then as you make changes, you rebuild, and if you change a config, you rebuild it all... But these savings that you get on the second run, the third run, the fourth run - the startup time is essentially less than a second, down to 15 milliseconds for most people... Because all of that upfront work of combining files together and bundling - you don't need to do that anymore with ESM; you have a module system that the browser understands, so you can just kind of ship... And Snowpack exists to just -- again, like Mikeal had mentioned, there's a few little things that it has to do other than building just to make this run in a browser... But it's really light touch.

**Christopher Hiller:** How does that work with -- say you're consuming a library that uses CommonJS. What do you have to do to support that?

**Fred K. Schott:** \[16:06\] Yeah, so that's smack dab in the middle of our problem space, which is - revisiting that question, "What does tooling look like for a world where you're ESM-first?", the one thing we need to do is when you import React, we rewrite it to a URL, so a place that we are now hosting a React package... And then what we do is -- React is CommonJS, so that's actually a great example for this... What we do is we actually look at "Okay, you're writing ESM, so your files - they're the ones that change often. We'll have this really light-touch dev workflow where we rebuild and resend single files to the browser."

For your dependencies, those actually don't change that often. So what WebPack and others are doing today is they're rebuilding entire chunks of your application every time you save a source file. But what we're able to do is say "That CommonJS thing that we still need to handle - once you install it, it doesn't change." So we can actually -- essentially, what we're doing is we're bundling that one dependency, we're converting it from CommonJS to ESM one time, as an install step, more than a build step or a dev step. It's a one-time cost, but then gets reused until you change your dependencies again.

So we handle it as a -- we're ESM-first, but we have this CommonJS support where we just turn it into ESM... And that's why we do once, and now it's saved in your project and reusable forever.

**Christopher Hiller:** That sounds like a non-trivial problem to solve.

**Fred K. Schott:** Yes. \[laughs\] Snowpack has existed for almost a year now... So it's not something that we've just kind of stumbled into. The first version, that was all we focused on - "You tell me your dependencies, and I will give you..." essentially, what is React? It's many files combined together. What we would do is we'd take React and give you a react.js. We'd give you a single JS file, an ESM interface, and it would be runable in the browser.

The idea there is that that's the problem to solve here, and once you solve that, now you are essentially an ESM-only dev environment. All of the files you're working on are ESM, all the files that you're serving to the user are ESM, and you can start to do some really cool stuff once you're relying on that assumption.

**Break:** \[18:00\]

**Mikeal Rogers:** Okay, so something that I have been doing is trying to port a lot of my libraries to native ESM... Particularly, I have a set of new libraries that are really the foundation for a kind of stack in the ecosystem that we're building, and I really don't wanna -- it's gonna be very hard to move that to ESM later, after a lot of people depend on it and there's a lot of ecosystem on top of it. So I really wanna do that now... So I've really been struggling with a lot of the incompatibilities in Native ESM, particularly in Node.js.

It's been very easy for me for a long time now to write a library that works in Node, and works pretty well in browsers through compilers. If I'm using require, everything just kind of works; if I limit my dependencies, and stuff... I know kind of how to limit the tree, and things work out relatively well. There's definitely a bad way to do this and a good way to do this, and I've found a sweet spot.

\[19:59\] When I started going into native ESM I was like "Ugh, everything's broken!" So to talk about some of the compatibility differences, I should start with some of the history here. So Node has a module system because we didn't have one in the browser. It's the same reason why it's own Buffer API. There was no binary API in JavaScript yet, so we had to invent one. And when Npm was created, Isaac started working a lot more on Node core, and in fact took over the module system. So Node's module system in Npm kind of co-evolved together, and the resolution algorithm inside of Node actually came from Npm and these kind of play on each other.

If you look at where compilers are today, you can see that they all kind of started with Browserify... And the take there was like "Okay, I have all this code in Node. How do I make it work in browsers?" So Substack wrote this compiler called Browserify, and it is very much from the point of view of a Node person that wants to get things on the browser, and not a browser person that wants to get things in Node. Substack is really the sort of philosophical center of the small modules philosophy in the Node.js ecosystem.

**Fred K. Schott:** Yeah, what is he up to in terms of module count now, as an author?

**Mikeal Rogers:** Oh, it's gotta be over a thousand at this point. There's no way that it's not over a thousand. Because he was doing about a hundred a year for a while, and some years it would be more... But yeah, it's way up there. But he's actually running a lot more Rust now, so I think that it's probably come down a little bit in recent years.

Anyway, from there we started to get other compilers. And all of these compilers leveraged Node's module system as the sort of way in which you packaged up these little packages, and then brought them back in for use in the compiler. So even as frontend development became 80%, maybe more of what is actually in Npm, the usage of Npm... If you look at the numbers on this, frontend actually dominates this ecosystem, and the backend is not as big... I mean, backend in Node is bigger than backend in most other languages, but this just kind of shows how big web development is and how big JavaScript is compared to a lot of other languages.

And so the tooling has always had this very Node-centric view of the world. And one of the challenges that they had when they were building the module system, ESM, in the early days, was you can't really reconcile a lot of the decisions that were made with what needs to happen in the browser. You can't have a resolution algorithm like that. You have to just point at a file. That's not gonna work for us.

A lot of the things that you need in the syntax to make it statically-analyzable are important to make it fast in the browser. And so these things weren't very well reconcilable, and to top it off, Node was in a very bad position as a project to be able to actually communicate and to work well with standards bodies at that time.

**Fred K. Schott:** This was 2013, 2014, 2015?

**Mikeal Rogers:** Yeah, exactly. It was before io.js fork, before the foundation... Node just didn't have the capacity as a project to really participate well. So a lot of changes actually did make it into ESM, and people like Yehuda Katz did work to make ESM easier and more compatible with Node... But nobody who really understood the complexities in Node's module system were there, and so a lot of things were ratified before we had figured out how we would actually deal with compatibility in the future. And everything was really locked down and really ratified...

This was also before TC39 standards body doing JavaScript changed a lot of their processes, so it's actually a much better staging process, and you need a lot more implementations to get through to the stages now. This was one of the last things they passed in the old process.

So it's just been a real nightmare to try to get this into Node. I think the effort has taken roughly four years to figure out and get unflagged, and there's just been so many complications and compatibility issues... So at this point, the trade-offs that are there are somewhat permanent, and there are some things that are never going to work. So when you are writing ESM, you can import something that is CommonJS, and Node will figure it out and give you a module back.

\[23:57\] If you are using require, and you try to require a module that was written in Native ESM for Node, it will fail. So this is a one-way migration that you make. And if you just publish a package that's just native ESM with nothing else, it's not gonna be usable by anybody using require. So that's really painful. And this was one of the first things that I dove into.

Eventually, with some help from Myles Borins, I figured out a way for Rollup to actually generate a CommonJS version of the package and all of the package files (individual files), and then you can use this thing called an export map in package.json. You can look up that feature if you want... And this is how you say "Here's where the import file is that's ESM (which is the regular file), and here's the one for require. So when you require this, like don't fail on the ESM version, here's the CJS version." So now there's this build step as part of all my stuff, that's using this export now. And that works well for Node compatibility.

I eventually figured out a very clever trick, where there's a Rollup feature called "preserve modules." So instead of getting a bundle, what you get is all of the local files end up being compiled out as those local file names. So you get a new tree and a disk directory of all those compile targets. So that really helped.

And I realized I can point this script at my tests, and my tests actually import all of the relevant files in my package, so I get not only my tests cross-compiled that I can then test the CJS version of, but also that will automatically in an automated way find all of my endpoints.

**Fred K. Schott:** Wait - so Mikeal, are you saying that you added a build step to Node development?

**Mikeal Rogers:** Yes, yes...

**Fred K. Schott:** Whaaat...?!

**Mikeal Rogers:** I mean, if you just wanna say "Screw you. You've gotta use import, you can't use require anymore. You can avoid this build step", but yeah, Node people now if they wanna maintain compatibility with the old world, they're gonna have to suffer a build step the way that browser people have done for a long time.

**Fred K. Schott:** Yeah, that's a really interesting part of this. Web developers had to make this compromise seven years ago, or five years ago, or whenever it was... Where okay, you know what - to make the ecosystem work for us, because it is not compatible or because there are inconsistencies, we are gonna add a build step. So now it's so funny to see this, because now the web is saying, "Great! We get a lighter build step." But Node is having a very different conversation, which is "What does it mean to handle these inconsistencies? Do we have to build them into the platform itself? Or can we follow a path that you're kinda following where, in user land you add essentially just a layer in between the two to handle these inconsistencies for you.

I don't know what's the right answer, but it's very interesting to see for the first time the web is actually able to move in a direction that feels natural, and then Node is having this kind of come-to moment where they have to decide what they're gonna do.

**Mikeal Rogers:** Well, and Node is very concerned with performance, and very concerned with trying to keep the platform relatively thin... So the one thing that Node will not do, and there's kind of a line in the sand on this, is that it is not going to cross-compile your code. It is going to run your code in V8 the way that it looks to it; the most that it can do is try to create a compatibility layer.

There's a package by JDD who wrote Lodash called esm, and you can literally import this in your program, and it will basically cross-compile every ESM and CommonJS thing that comes into it in order to make all these compatibility concerns go away.

**Fred K. Schott:** Right. It's like a ts-node or a babel-node, one of those things...

**Mikeal Rogers:** Yeah, yeah...

**Fred K. Schott:** It makes code run on Node that shouldn't run.

**Mikeal Rogers:** It is very impressive that this hack can be built upon to make all of this stuff just work... But you do lose a lot of the native parts of it. The whole point is to try to migrate to this native experience, and you're definitely not doing that when you take that route.

**Christopher Hiller:** To be clear, you have to require esm. You do not import esm.

**Mikeal Rogers:** \[27:53\] Right, yeah. I should say that. You cannot import it, because the hooks that esm is using in the module system to do all this cross-compatibility stuff are deprecated in native ESM. So the moment that you're in an ESM \[unintelligible 00:28:08.15\]

**Fred K. Schott:** And this is esm, the package.

**Mikeal Rogers:** Yeah, esm the package. So you have to require esm, and then it can add all these hooks. If you tried to do that in the new native system -- because one of the things that happened in this transition is that the module system is not implemented by Node anymore, it's in V8. It's in the language. So we don't have the ability to give you user land hooks that just go and do all your YOLO crazy stuff. You can do that in the old require stuff, but you can't do that in ESM anymore. But yeah, there's been good work here trying to deal with this stuff.

But yeah, once you move to native, then you have to compile. But before you get too on your high horse about "Oh, now you're doing what browser people do", it also still sucks for browser people, because WebPack has opinions, I guess, and one of their opinions that they've had for -- I think the oldest bug I saw was at least three years old. But WebPack thinks that when you do export default (which is the default export thing that you do in ESM), that that should not turn into a representation to CommonJS that looks like a default export, like a module that exports equals. They have the view that when you do this transition from ESM to CommonJS, that should just be an object with a default property... And this opinion is shared by literally nobody.

So WebPack does that, and that's in WebPack 4; WebPack 5 is gonna be in beta for quite a while, and I don't even know if they've fixed it. That means that you run into this other problem, where I publish this module and it works in Node and you can require in Node... So you get your program up, you npm-install my module, you require it... It works, right? Because I did that cross-compile step.

Now you try to run WebPack on it, and what WebPack is gonna do is it's not gonna find the require step, because it doesn't know anything about export maps, and that whole require thing. It's just gonna look at the import -- or sorry, just at the regular files and the tree, and those are gonna be ESM, and it's gonna do its ESM changes to it. So the representation in Node and in WebPack is gonna be different. It's gonna break. So that sucks...

**Fred K. Schott:** Hooray...!

**Mikeal Rogers:** Yeah, yeah... WebPack loves to listen to people when they have -- anyway. Okay...

**Fred K. Schott:** I always get sensitive to this myself, because I think -- when I say that Snowpack is a different model, people say "Oh, so what do you hate about WebPack? What's wrong with that?" It's just a different -- it's like, they are coming from this world where you need to make everything CommonJS-y... And in that world, why wouldn't I want module.exports to be the thing? Why would I want a secondary default...?

**Mikeal Rogers:** And more than that--

**Fred K. Schott:** They have their mental model. I don't think it's the correct one going forward, but I see where they're coming from, just based on their ten-year history, or however long they've been around.

**Mikeal Rogers:** This is my view of it and kind of where I come from. When you're dealing with these cross-compatibility concerns between different systems, it's really important to agree on representations in these translation layers. What you're really talking about is two completely different things that you're translating from one representation to another, so that they look the same. And it's very important to agree on that, and to agree with other parties, other than just your own project.

They probably really made the right decision for their internal primitives, so that their import function can operate identical to the import syntax. That's what that's about. That is probably the right decision for their plugin ecosystem, but it really breaks compatibility in the ecosystem layer when you think beyond just WebPack as a project. So the fix for that is another compile.

One of the nice things about newer compilers - the new Rollup and Node.js - is that they look at this export map, this new feature that tells you for all these different endpoints in the package what files do they map to, and can they map to something different for the browser, for require or for import.

\[32:00\] But old compilers, like WebPack 4 and before, don't even know about that property. Browserify doesn't know about that property. They're gonna look at this old browser property instead. And so what you can do is you can fill that browser property up with another compile of the CommonJS compile like you did for Node, but just targeted for browsers instead of Node. So now you have to compiles that are now in your tarball...

**Fred K. Schott:** Oh, boy...

**Mikeal Rogers:** ...which are super-fun...

**Fred K. Schott:** Yeah, using deprecated fields intentionally to solve a problem. It's my favorite solution.

**Mikeal Rogers:** Yes, yes. And just managing all the fields in a sufficiently complex project is kind of a pain... So I did write a little project that I named Limbo, because I really hope it'd be -- this is a temporary state of limbo that we're in between these two systems... I would encourage people to look at and improve and use this module if you're trying to write native ESM libraries... But the intention of it is to eventually die. I really hope that someday we do not have to use this library. I very much look forward to the day that we deprecate it... But right now there's a project on my GitHub called Limbo, that will -- you run it in your package, it generates a dist with all of this stuff, and you can run it with a --save option that will also fill out the export map and the browser field for you... Because that gets really problematic over time.

But one of the cool things about that is that after all this is done, I can run all my tests in native Node EMS just using Node test stuff, I can then run as a test target all of those CommonJS files that I was doing before, and then it'll use all the CommonJS version... And I can also target all those browser ones, and it'll work with like an old WebPack in older browser test utilities. I use one called Polendina that Rod Vagg wrote... And Chris will like it - a lot of this stuff is actually using Mocha behind the scenes for a lot of the older stuff as well. Maybe I'll talk about new testing stuff if we have time, but... Yeah, that's kind of how all that stuff works.

**Fred K. Schott:** Yeah. Testing in ESM is a very interesting story.

**Mikeal Rogers:** Yes, yes, yes... I hate to do that last, because I'm sure that Chris will have really good things to talk about... \[laughs\] But yeah, so that's the state of what you need to do if you wanna write in native ESM, and have everybody be able to consume your library. But there's this other story where relying on Node's module system - and not just in Node, but in compilers - is increasingly problematic in a native ESM world. Even if you're converting these native files, you are constantly being presented with the complexity of your dependency chain, because you're seeing it a lot more visibly in this native ESM world, and it gets more and more problematic.

So sometimes what I wanna do is actually not npm-install a package and require then let all these systems figure out how to get it. What I want often is I just want to take something out of Npm and just bundle it into a local file that I import like any other local file. Sometimes that is the best solution to some of these problems, to just kind of quarantine this old Npm package for a while, rather than relying on this very complex system that is rife with surface area for bugs.

**Christopher Hiller:** Are you talking about vendoring it, essentially?

**Mikeal Rogers:** Yes, exactly.

**Christopher Hiller:** Okay.

**Mikeal Rogers:** I wrote a package called Brrp. You give it an Npm name, and it will just bundle out -- it'll actually install in a Temp directory (and then clean itself up) the package, and then bundle it up as ESM. And you can target either Node or the browser, and you can even use it to cross-compile \[unintelligible 00:35:26.21\] CJS version if you wanted that bundle for some reason. So that's another interesting tool.

Npm is successful because it did such a good job at hiding that dependency tree from me... I don't have to think about how nasty it can get, and how many old dependencies and cross-dependencies are in there. And for other reasons, as I'm being presented with that complexity and I can't ignore it anymore, it's just the Node module system npm-install workflow is just not as nice anymore. It lost a lot of its shine. I have to see how the sausage is made.

**Fred K. Schott:** Yeah.

**Mikeal Rogers:** It's as bad as you would think, right?

**Fred K. Schott:** \[36:02\] It feels like specifically you are starting to realize -- tell me if this is a fair representation... That this migration is gonna need some help from the tooling ecosystem, even for Node developers. That the idea of a whole ecosystem moving in lockstep from one module system to another is not gonna be easy, or just something that can happen naturally. That there will need to be some sort of limbo state (I think that's a pretty well-named title) of a package to handle all this transition.

**Mikeal Rogers:** Yup. So I will talk real fast - I know that we're sort of running out of time for this segment, but I do wanna talk about testing a little bit, because I think as a library author, it's one of the key benefits that you can see getting out of native ESM... Where the testing infrastructure can get a little bit nicer. One is that we just have a nicer primitive for a module system; so thinking of a module as a test, and as something that you can -- not just a file that you run and you have to inject a lot of environment around, but really almost like an object or almost like a data structure that you can pull in and poke at.

This is something that me and Fred have talked about for a little while now - if you have a test format that was somewhat framework-agnostic, you could actually pull those tests in and then update a dep tree, and then run the tests for your dependencies with your new thing in the dep tree really easily, because you have this componentized system.

So I started to write that because testing in native ESM is also really nice. Not having to bundle anything - or at least not having to bundle your local files - in order to get things running in the browser opens up a whole new vector of really nice testing that you can do. So I started working on something called Estest, and I have it running in Node, and in Deno, actually...

**Fred K. Schott:** Oh...!

**Mikeal Rogers:** Yeah, and I'm about halfway through the browser one right now. But a couple features of it is like 1) once I'm running tests on a million platforms - because I also wanna use this eventually to test a lot of the cross-compiled stuff... These are taking too long to run, so I need everything to work concurrently. So by default, the test format is concurrent, and you can set the concurrency to 1 if you know that this test can't work concurrently. But yeah, having things work concurrently by default means that I can run all the tests for all these environments, and all of those tests in those environments all concurrently.

If I have eight test files, I can run them in eight tabs in the browser, and even as those tests get added inside of it, they can run in parallel if they're doing async operations. It's really important once you have the number of tests that I have; that stuff is really nice.

But also, the test format itself - you don't have to import anything, and you don't have to have any globals injected into the files environment to run the tests. Literally, you export a function or you export a bunch of functions, and they take this test interface as their first argument. And tests are just async functions - they either throw or they pass; that's it. There's no additional state to manage, because in this native ESM world, now that we have async functions, you don't have to do a lot of the - I mean, Chris probably knows this better than anybody - stepping and setting up an environment and tearing down an environment and a lot of that complexity. A lot of that is really related to the way that the old callback system worked, and the fact that it was really easy to not call a callback and have a test pass; things like that.

I'm already starting to realize a lot of the benefits of this system. Using native ESM is now actually speeding up my development environment, now that I have the tooling in place... So that's been really cool.

**Fred K. Schott:** Yeah, it's a good way to showcase how having that one single module format for everyone really benefits the workflow itself. One thing that -- Jest I think is a really powerful test runner, but if you've ever run into like a caching issue, or tried to configure it, or peaked into that kind of plugin ecosystem that they built out, it's a pretty heavy process, especially for frontend developers, where you're building and bundling at the same time as you're then running tests on them... And you essentially have this shadow build system for a test runner, that again, they do their best to hide from you... But when you need to troubleshoot something, you really have to start digging into "Okay, what are they doing to make this code that doesn't run in Node run in a Node test runner?"

**Mikeal Rogers:** \[40:15\] Yeah, yeah.

**Fred K. Schott:** Everything you said sounds really exciting, but even just at the most primitive, this idea that -- the test runners have a lot of complexity that we don't realize until we really get stuck with a problem that's hard to solve.

**Mikeal Rogers:** And also, you really wanna be able to decouple these. I think that people have different opinions and really different styles for how they wanna write their tests. One of the nice things about Mocha actually is that it's a bit more agnostic about this. You can plug different interfaces in for defining a test. But having a test format that it's just functions that just throw or whatever, and it's just getting this interface pulled in, you can really easily write a test framework that's just a thing that you import, and then you export your test function, and your test function was actually created by this library. So it's not like "Oh, I can't use test frameworks now because I have to do them in this format." No, no, no. The format enables you to use any of these test formats; those new test systems don't have to implement a runner and deal with concurrency, and browsers etc. And I'm very curious what you have to say, Chris...

**Christopher Hiller:** Yeah, actually this looks a little bit like the old exports interface, which is simply - yeah, require stuff; it's CommonJS stuff. But you export a bunch of tests from a module, and it's not like the stair-stepping and nesting suites and all sorts of things. I'm looking at this Estest and it looks like - well, shoot, it would be pretty simple to just whip up a Mocha interface for this, and just "Now you can run these things." That would be cool. And I hope you don't mind if I steal it.

**Mikeal Rogers:** Yeah, no, no, no. If you do that, it would actually really help me, because I have a bunch of tests in Mocha that I would love to not have to port. Or some \[unintelligible 00:42:03.20\] would then just work, you know?

**Christopher Hiller:** Yeah. I mean, I'll play with this, and I can probably just publish a third-party interface, and then if people wanna use it, then maybe we can throw it in the core, or something, but...

**Mikeal Rogers:** Awesome.

**Christopher Hiller:** I'll take a look.

**Mikeal Rogers:** That'd be great. One of the things to note about it - it is pretty new code, there's pretty minimal docs, and the format is really simple, and the runner is also I think sort of deceptively small amount of code, that has a lot of implications and features because of the expressibility, if that makes sense. If you look at the runner and the algorithm for the runner, it looks like "Oh, it's just this tight little bit of code", but you're not realizing how infinitely nestable everything is, and how a lot of the after methods and things actually end up -- I'm really into this idea of dynamic test generation. Most of my tests that I write - it's a function that pulls in another function, that then loops over things and then generates a bunch of tests for something, because I'm often testing with multiple different interfaces and optionality.

This was really written in mind like "What is the most minimal set possible, that doesn't have a lot of opinions in it, but doesn't limit the expressability in what you could actually generate with tests." Really using all the dynamic features that we have in JavaScript that I know and love, so...

**Fred K. Schott:** Yeah. I'd love to give a shout-out to Luke Edwards. He has a package called Uvu, which is fairly new... And I think a little less ambitious than Estest and what you're proposing here, but a really simple approach to just like "Let's do a test runner in ESM for Node." And it becomes browser-compatible by default, it's really fast, it's not doing all these things that a Jest would be doing to build and bundle... I've been really impressed by how fast that project is moving as well.

**Mikeal Rogers:** Yeah, one of the nice things about this is that -- so import maps are a feature that's in Chrome under a flag, so not by default. It's not something that you can really rely upon, so you can't really do named imports in the browser right now. But they are on a flag, and so that means that if you're doing your tests in Puppeteer, you can actually totally rely on this feature, without anybody even knowing about it. So that's been awesome, and that's key to the browser support that I'm working on right now.

\[44:17\] So this was the only module that I have that runs in Deno and in Node, and it was very educational to see what it was like to really write code that has no dependencies, that truly has no dependencies on anything else. I do some terminal color highlighting, and I had to write all that by hand... And also just to remember how many of the Node standard library interfaces that we're using and rely upon and don't even think about aren't in the browser. A lot of the things in this runner -- you have to pass in the current working directory, and you have to pass in the standard out interface, and stuff...

**Fred K. Schott:** Oh, interesting.

**Mikeal Rogers:** ...because those are Node things, those are Node APIs. And you get some of them from compilers, but they're not in Deno, and it's really confronting you with the fact that "No, no, no, you're relying on some Node stuff here." So that was very educational for me, to get that running.

**Fred K. Schott:** Yeah.

**Mikeal Rogers:** And I ended up being pretty impressed with a lot of the stuff in Deno, actually.

**Fred K. Schott:** Yeah, I think that's really worth calling out, and I'm glad you did... That idea that just because now something is ESM doesn't mean it now runs anywhere. The package can still be using things that are only Node or only browser.

One of the things we saw in the Skypack CDN was that -- we released every package, essentially, as an ESM interface, which means that Deno can technically load it... But just because it can load it doesn't mean that it can run it by default. It could be using something on the file system, a package could be using the crypto library... There are all these things that you realize are really baked into how Node works, and just because now it's in a language format that a browser or Deno can understand doesn't mean that Deno can run the code itself based on how it's written and whatever lies on what it depends on.

**Mikeal Rogers:** We're probably gonna break soon, but I will bring up that I remember -- this had to be 5 or 6 years ago, but I remember Isaac, around the time that he was deep in maintaining Node.js and being the BDFL at the time, he was getting so sick of all the feature requests coming in that his plan was to start a new Node that was just half of the features and just half of everything, and call it No, because it was both half of Node and it was the answer to every feature request... \[laughter\] And I feel like Deno is actually like that a little; Ryan kind of beat him to it... \[laughs\] They're like "No, these are problems for the platform to solve, and the platform hasn't solved them yet. So go solve them in the platform or solve them on top of the platform, and then it'll work for us."

I think their approach to package management - they don't have any right now, and I think that their take is that it's not their problem to solve; it's your problem to solve, actually. \[laughs\]

**Fred K. Schott:** Deee-no.

**Mikeal Rogers:** Yeah. \[laughs\]

**Break:** \[47:01\]

**Mikeal Rogers:** Let's get into the thing that people actually care about. "I'm building applications; I'm one of the people who built applications and not just libraries, like Mikeal likes to mess around with... But what do I do? How do I build things? What kinds of benefits are there? Tell me how to do this, Fred, because I actually don't know."

**Fred K. Schott:** \[48:12\] How to build an application with ESM?

**Mikeal Rogers:** Yeah... I just write modules, so... You're gonna have to tell me how to make websites. \[laughs\]

**Fred K. Schott:** You're in luck, because it's 2020, and ESM has been around five years since it was ratified now... Most people actually are writing ESM; at least most readmes use it as example code, most applications almost assume at this point - that's what I've seen from WebPack and Rollup. It's a pretty common workflow. It's that shipping it to the browser that then becomes the thing that we're still moving our way towards as it's become more and more supportive in browsers. So really it's just IE11 that doesn't support this, and a couple of other smaller browsers. But it's pretty safe at this point to, at the very least, ship a version of your application that is ESM.

The way that it's recommended to do it now, which is kind of good, going back to your using a deprecated field intentionally to support both the new and the old at the same time - there is this idea of a type=module attribute for a script tag, and that tells the browser "This is ESM. If it's not here, we won't enable the ESM interface."

Then there's also a script with -- I don't think it's a type, it's just a no-module. And what that says is "This is intentionally not ESM." If you are a non-ESM browser, this is for you. I actually don't know much of the history of it, but it would seem in retrospect like this really smart thing that "Okay, IE11 is coming out. We know we're not gonna support ESM... We'll at least support a flag that says "I will run this and I will ignore type=module." So you can kind of think of it as a fork. Even the browsers that don't support ESM understand that limitation and won't try to run ESM code. Instead, they'll only try to run code that is essentially no-module.

Oh, god, I hope I'm saying this right... If not, someone please correct me on Twitter. There's essentially this forking mechanism where type=modules is for new browsers, and no-module only run on old browsers; new browsers will essentially ignore it.

**Christopher Hiller:** Maybe you're getting to this, but it seems to me that most people look at that and they're like "Well, I don't wanna bundle twice. That's a pain in the butt. I'm just gonna ship the old one and just use that."

**Fred K. Schott:** Yeah. And I'm kind of of the mind. If you're already in the bundled ecosystem and you don't wanna take on complexity, it's not the end of the world. It's really interesting, where if you're writing ESM, you're already getting 80%-90% of the benefits. Your bundler is able to much better understand the code you're writing. You're kind of like "You've done your part into the new world."

What you're missing out on is this idea to kind of drop the legacy requirements that you might have behind you. And what that means is that you can really put all the older, really old, really heavy polyfills and transpilation only for that second no-module bundle. So you can essentially start to target a much more modern ecosystem... And what that means is you get less code bundled, transpiled, polyfilled as a result.

So performance is that thing where if you're happy with what you're doing, it's a nice thing to have. It definitely gives you a better performance score, Google will treat you a little nicer with SEO... It's a good thing to do, but by writing your application in ESM you're already on the elevator, you're on the path. As tooling gets better and better and as the ecosystem evolves, you will continue to carry forward those benefits. It's the limbo. You're in the limbo, there's extra work to get out of the limbo... But in the future, by doing that you are already setting yourself up for success.

**Mikeal Rogers:** And it shouldn't be underestimated - these features really do enable a lot better performance, particularly for applications that are changing all the time... Because not every file, not every dependency is changing all that often, and a lot of the code that you're loading one time, you're actually loading every time because of a bundle. There's a lot that people talk about, like how small they got their bundle, and what their bundle performance is, and what minification does, which algorithm they use for compression... You're all getting the bundle down and down and down, but at the end of the day if loading the entire bundle is the best performance that you will ever have, that is actually still pretty bad. In an application that you're loading every day and that people are loading every day, they have all this cache that they really should be able to benefit from, and they can't.

**Fred K. Schott:** \[52:31\] Yeah.

**Mikeal Rogers:** And browsers that support this are a lot of people's mobile phones. Most mobile phones are running new(ish) Chrome or new(ish) Safari... Not the newest, but new enough that often they do have these features. So for a lot of especially mobile people, the first time they load the page it's gonna take as long as it always did, but the next time they load the page, after you updated a couple things but none of your big dependency bundles, it's gonna be really fast. You're only gonna need one of those.

**Fred K. Schott:** Yeah. I think that's the much more interesting conversation here, which is what can you do in this new world that you actually can't really do in the old? And there's some things there where it's like -- you know, we talk so much about how do we make the new and the old work together, and that's really about supporting the feature sets of both in each other, and making that harmonious. But there's also this whole other world of like "Things only really possible once you have a native browser loading system." And caching is a huge part of that, where once you have an ability -- basically, letting the browser go back to what it's good at, which is optimizing the things that you load.

In today's bundled world, the browser doesn't really know much about what's inside the bundled files. It's source files, it's dependency files, they're all mixed together, it's this big soup, and then when you go and make a change, you're now having to basically ship much more code down to the user on their second visit than you would have otherwise had to, because the source code that you changed \[unintelligible 00:53:48.22\] the dependency files that you didn't change... And even the source files that you didn't change.

Letting the browser understand basically how your application works, and the difference between a source file and a dependency file lets you then set proper cache headers on the two of them separately. It's two totally different performance stories between a file that changes every time you deploy, and a file that really doesn't change that often. It's version-tagged, it's pinned, essentially.

There's this really cool caching story there, where just by default you get a much better performance story on the second, third, fourth visit, where files only need to be re-downloaded when you've actually changed them... Versus the world today, where every time you redeploy, you essentially set a new hash, it all gets cleared out, and your user is stuck downloading on a second and third visit essentially the whole app over again.

**Mikeal Rogers:** I really wanna hear more about Snowpack... Because again, I don't write enough websites to use it, but I'm super-interested in it. Say I'm a WebPack user, I run my app and WebPack is doing all this buildy stuff, and I have this browser up that's -- you know, things are updating all the time... What is the difference in the development story, first and foremost? What does that development workflow look like and what are some of the trade-offs that might be there? And then after that, talk about the distribution story and how that actually gets packaged up in a new application.

**Fred K. Schott:** Yeah, definitely. It's one of those things where you really feel it instantly when you use it. The first thing I'd say is just try it out. Try one of our templates. We have a Create Snowpack App that lets you just kind of get started with something smaller... We also are -- essentially, our goal is to be a drop-in replacement for Create React App. Because Create React App is a pretty controlled environment, we can actually do our best to be a drop-in replacement. They don't allow a lot of customization, so it's not a moving target; it's one that we can kind of pin to. So if you have a Create React App template, I would also say just try to run that in Snowpack.

**Mikeal Rogers:** You have stuff like that for Vue too, right?

**Fred K. Schott:** Yeah, we have templates for all of these, and official plugins to support the build-in. The reason I say "Just try it and see how it works" is because what you get is essentially a 50 millisecond startup time, where instead of having to do any upfront work, we're following this model where we only need to build things as they request it. So you run your npm start, or whatever you do to start your dev server, and finger-snap, it's there. The way that that works is that because all we're doing is really setting up a server, that start-up time is -- there's nothing to do. We haven't seen you request a file yet. What that does is then you open your browser, you go to the dev site, and now all of a sudden the browser is telling the dev server "Hey, I need these files."

**Mikeal Rogers:** \[56:16\] And a lot of those files don't need to be compiled, right? A lot of them can just be loaded.

**Fred K. Schott:** Yeah, exactly. So if you're just writing plain, old JavaScript - you're not using React, you're not using TypeScript - we're essentially just piping them; it's a pretty light dev server. And then where we come into play and where we start to match the world that you're used to - the WebPack, the build compiled world - is that we will then take a file like a TypeScript file, or a Svelte file, or a Vue file, and as it goes through that pipeline from the dev server and back to the browser, we will just build that one file.

So instead of this really complex -- you know, the world that I've seen, of bundled development, you're trying to define a build that you never actually see really interacting. You only see it wrapped in this big, black box, which is a bundle. What we get is a much simpler -- the file that you load in the browser is a one-to-one representation of the file on disk. So debugging becomes a lot easier, you don't really need sourcemaps... They certainly help still, but you know - you look up the app.js file and it matches your app.svelte file kind of one-to-one, just the compiled version of it... Versus what I've had to do with bundled applications - you're like "Okay, I've found an error." I click into that error. I have a 10,000-line JavaScript file that I'm now trying to map back to a source file where the error happened. Sourcemaps help, but you know - that its own can of worms.

**Christopher Hiller:** Fred, what about non-script assets?

**Fred K. Schott:** Yeah... So are you saying like an SVG, or a WASM?

**Mikeal Rogers:** CSS...

**Fred K. Schott:** CSS?

**Christopher Hiller:** Well, sure, okay... Say maybe you want to write in Sass. Will it go and make CSS out of that?

**Fred K. Schott:** Yeah, that's a great question. It's interesting - we tackle that as if it's any other built asset. What's interesting about this world that we're moving into, where ESM is relying on what the platform and the browser can do - all of a sudden, the tooling... By being lighter-touch, it's also a little more flexible on how it treats what it's building. Instead of "I am building a JavaScript bundle", the Snowpack story is more "I am building your web application." And that means we need a story around CSS images, SVG. That's all configurable through our build system. It's essentially a build system for web apps, so you can think of it a little bit more like Eleventy in that way, where it has all the power of building a JS app...

**Christopher Hiller:** Yeah, that's where I was going. I was going to Eleventy. I was like "Okay, what if I ask for markdown?" Will it go and compile that markdown, or will it go and call out to Eleventy, or whatever?

**Fred K. Schott:** Yeah, that is something that we haven't tackled yet, because what Eleventy does - they talk about it like it's this really simple system... There's some complexity in there. But what we do is we have an Eleventy starter template and an Eleventy plugin, where essentially what we're saying is "Through Snowpack as the build system, the thing that you run npm start and npm build and you build your application with Snowpack - we can still run commands through that process." We can say "Okay, I am a plugin for Snowpack, and what I do is I run Eleventy to build your application."

So it's this flexible model where we are essentially -- we're taking on the idea of serving files and building your application, but in a much more holistic level, where you can start to connect tools like Sass and Eleventy into this (just a) build runner essentially that is Snowpack. So in the way that WebPack is really a very \[unintelligible 00:59:30.28\] where you're bundling things together and trying to learn the whole scope of a website as it's represented by JavaScript, what we're instead saying is that your application is your application. It's many things. It's JavaScript, it's CSS, it's images. And what we do is we one-to-one build those, we let you connect the tools you like, and our end result is not a JavaScript bundle, it's a website. So it's really like a website builder versus a JavaScript builder. And because ESM is lighter-touch and the tooling is lighter-touch, we're able to handle everything that you love about a bundle builder for JavaScript, but in the context of you're just building an application, you're not building JavaScript specifically.

**Christopher Hiller:** Mm-hm. Yeah, I'm gonna play with that.

**Fred K. Schott:** \[01:00:11.07\] So yeah, we have Sass plugins, we have Eleventy plugins... It's this really cool model where for a long time single-page apps have been the blessed way to do development, and tooling kind of assumes -- Create React App assumes you're following that model. But what we're able to say is a single-page app is one thing that you can build. If you really wanna build JavaScript-focused, JavaScript-only, CSS in JavaScript - if you love that JavaScript world, we handle that. But if you're trying to build a multi-page app, you're trying to build something that's a lot closer to what a website used to be, which is HTML, CSS and JavaScript all treated equally, you can do that as well. Our current website is built with Eleventy and Snowpack together, and they work pretty well together.

**Christopher Hiller:** I'm gonna give it a shot. That sounds fun.

**Fred K. Schott:** Yeah, it's a lot of fun... I'd say "fun" is the word we're going for; just realizing how much we've been slowed down by the generation of tooling, where - again, I feel like WebPack, Rollup, everyone who got us to where we are today... Yeah, we wouldn't be here if it weren't for them, right? This idea that we can all share one ecosystem of packages, and that something written will run on both Node and the browser, with tooling - that's still an accomplishment, and we're just kind of the next iteration. So we get to leave behind some of the legacy... But you know, I totally realize that how we got here is by standing on the shoulders of those giants and all the work they've done over the last ten years.

**Mikeal Rogers:** So obviously, I can use this and when I'm not running a dev server I can just compile it all out and I'll get a bunch of files, and then I can push them into GitHub Pages or whatever static site host... But we've been talking about there's a lot of new deployment stories and new opportunities in this new ecosystem, so I think we should talk about some of the other distribution stories for an application, and also get a little bit into like "Is there anything we can do to make the legacy part of that a little bit easier?" You talked about how there's this no-module thing, and like "How do I automate filling in that no-module thing for old browsers?" and stuff like that.

**Fred K. Schott:** Yeah, I think we're closer to -- so this whole episode I feel like has been a "How do you deal with legacy", how do you transition very large changes in a comfortable way? Again, I feel like for the first time the web is actually in a pretty lucky position here, where IE11 is getting end-of-life pretty soon. It's kind of \[unintelligible 01:02:24.26\] what that distinction is, but their general mainstream support I think ends in October of this year, which a lot of people don't realize.

So sure, you might have some larger enterprises getting an extension with Microsoft, and that still matters if you're a Salesforce, where most of your customers are these larger enterprises... But if you're building a general application for a general user, all of a sudden that user is not on IE11 anymore, or it's very rare that you really have that requirement anymore. So I think by waiting for October and waiting a little bit longer, a lot of these problems on the web solve themselves, a lot of the legacy just kind of melts away.

And then that idea where it's always harder to support both at the same time - you can kind of just start to build for that world. And the world we're entering on the web is really exciting. Every browser is essentially following this evergreen model now, where updates are sent automatically, even enterprises are encouraged to update regularly... It's this really nice model where now all of a sudden you can start to build for a much more modern platform. It doesn't mean right when a new feature is launched in Chrome or in Firefox that you can start using it everywhere; there's still, obviously, a little bit of onboarding of those new features... But your lowest common denominator is suddenly only a few versions back.

So there's a really exciting model that's happening there as well. That change is actually gonna be pretty influential for not just how you can build for the web, but what you can assume your users are able to use, and then not having to always find a really low common denominator to support them. Specific to Snowpack, it's one of those interesting things where we now get this option to build an serve an \[unintelligible 01:03:56.06\] application. Again, this idea of default complexity versus default simplicity.

\[01:04:03.13\] Right now if I'm building a web application, I need a bundler. I'm so used to saying "right now", but really, I mean in the old world - you needed a bundler to work with Npm, and that means you need all the complexity that comes with "How do I configure this bundler? What plugins do I need?" The model that Snowpack is following is that by default everything should just work. Everything should just work in a way where you don't need to do a lot of configuration to get an application that runs.

Instead of bundling being an assumption and a requirement, it's now just an optional thing that you can do for performance, and that's - again, we're taking the old and the new and trying to grab the best of both of them. Bundling is an optimization, at the end of the day. It's only in the last ten years that it became this requirement that we all had to build on top of... But really, what it is is we're saying "I wanna combine multiple files together to speed up my site." That's a much different model from "I need to do this for anything to run for anyone."

So the whole model is kind of flipping, and complexity is something you now go out and find because it solves a problem, versus it's baked into the very foundation that you need to get started.

**Mikeal Rogers:** So what's Skypack doing? \[laughs\] If this is all just handled for static resources, what does Skypack do?

**Fred K. Schott:** Yeah, Skypack is our next step into this kind of "Okay, now that we have this, what do we do with it? What's new, and only possible with this model?" Skypack is -- if you've heard of the Pika CDN, that was our first version, and this is essentially the production-ready version of that, where... If you think of what Snowpack is doing and what makes it so special, it takes an Npm package, and all the files and all the complexity and all the legacy stuff - it turns it into a single JavaScript file that can be loaded via ESM and run in the browser. Skypack is that idea taken to the CDN, where instead of a CDN being that thing that serves files out of packages and individual things, Skypack is a way to load a package, and any package name that you give it will be loadable as ESM, even if it wasn't written as ESM. We as a CDN do the work to convert it and compile it into ESM.

So essentially, we give you a unified interface to load any package by name from our CDN, and we do all the work to make that work really well in your application. Part of it is just building up this platform so that anyone can use it. If you're building tooling, you can start to pull from it; if you're building an application, you can kind of get rid of any building at all and just load dependencies on demand.

We see it as a really interesting model where now you're hosting code from the CDN that is thinking in terms of packages, and it's optimizing in terms of packages. So going back to that caching story - we can cache dependencies really well, because they're versioned, and they're cut, and they're done.

So once you load a dependency from Skypack, it is essentially locked forever. We \[unintelligible 01:06:38.15\] the cache header so that you only ever load it once in your browser, and the browser will cache it forever. It's all these things that you can really only do with an ESM system, where the browser is now able to go back to what it does best of the optimizing your files and understanding your cache state... Versus really realizing what the older tooling was doing, was trying to replicate that functionality and taking on a responsibility that the browser is just naturally better at. So the caching story for Skypack, and building on top of it is really, really cool.

**Mikeal Rogers:** That's awesome. That's really cool. I'm very excited. This is a good-looking space.

**Fred K. Schott:** Yeah. It's one of those things that just powers -- you know, it can power so much of what has traditionally had to be tooling-dependent; it can suddenly just load code dynamically, on-demand, as needed. It really is an interesting performance story.

**Mikeal Rogers:** Chris, any final thoughts before we close it out?

**Christopher Hiller:** My mind is empty. \[laughter\]

**Fred K. Schott:** Now I just wanna know what repos Mikeal has private.

**Mikeal Rogers:** I meditate for hours to empty my mind, so... I meditate for hours to empty my mind. I'm jealous that it happened so quickly for you. \[laughs\] This is a difficult state to enter. Yeah, I mean - I write modules, that's what I do; it's okay, it's nothing special.

Awesome, this was a great show. I think we really got into ESM -- I think I did an ESM show on JS Party nine months, maybe a year ago... And it was a little bit like "You can't use this yet. I'm sorry." \[laughs\]

**Fred K. Schott:** A lot has changed in nine months...

**Mikeal Rogers:** Yeah, yeah... And now it's like "Actually, if you're writing applications, it sounds like you're really ready. You're good. Just write web apps in it." If you're writing libraries, it's still a little tricky, but I think that the tooling is getting there. If you're a little more comfortable dealing with that, it's ready for you as well.

And like so many things in JavaScript that I was resistant to, but fully wrong about, ESM is also one of those things. I was very much like "Why are we breaking the ecosystem for this? Who cares about this syntax?" Now that I'm in the guts of it, I can see there are some really big advantages. People really should move to these patterns. They are better. Let's just do it.

Alright, great show, great talking with you... That's all.
