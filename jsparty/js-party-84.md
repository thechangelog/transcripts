**Kevin Ball:** Alright, hello! This is Kball here, reporting live from React Amsterdam, in Amsterdam. I am here with Florian Rival, who is a software engineer at Facebook and has developed an open source gaming engine using React and Web Assembly. Florian...

**Florian Rival:** Hi, everyone. Nice to be here.

**Kevin Ball:** Yeah, thank you for joining me. I'm really excited to hear more about the game engine. But first - you're speaking a little later today...

**Florian Rival:** Yes.

**Kevin Ball:** Can you give us a little bit about what your talk is gonna be?

**Florian Rival:** Yeah, sure. My talk is about using React and Web Assembly to create applications that are going a bit beyond what we used to do. The idea is that I had this game engine that you just mentioned, called GDevelop. It was a whole C++ game engine, desktop application that you can use on Windows, macOS, Linux, and I was like "Okay, maybe I could port it to the browsers, and have a kind of refreshed version..." Because I'd been using React for quite a bit of time, and I was like "React is a really good way of making interface, so is there a way I can remake the software in a better way, using React?" That's how I happened to use Web Assembly to in fact port most of the software from C++ to Web Assembly.

My talk is basically about this, and what was the change using Web Assembly, and what are the things that we can use in the React ecosystem to make ambitious applications like a game editor.

**Kevin Ball:** So is the core engine still written in C++, but you're now compiling it to Web Assembly?

**Florian Rival:** Yes, there are the core classes of the software that describe what the game is - the objects that are in a game, and the rules that define the game. The interesting thing about the software is that people can create their own game without programming, because they are able to create rules of that game using visual events. It's a bit visual programming, in a way. And all of this is still in C++, because there's lots of business logic that I didn't want to rewrite - all the tooling to convert your game from vis structure and memory to a real game.

At the end, games are running in JavaScript, actually - HTML5, WebGL and JavaScript. So the idea was - can I take all this logic in C++ and convert it to Web Assembly? And that's what I did, using a project called [Emscripten](https://emscripten.org/), which is a Mozilla project, or at the beginning it was supported by the guys at Mozilla. I think that's the case, or maybe that has changed. Anyway, that's a really nice project, that is basically a C++ to JavaScript compiler, and now a compiler that is C++ to Web Assembly.

**Kevin Ball:** That's neat. Can you give me the spoiler? What did you have to change to get that to work?

**Florian Rival:** The user interface of the software at the beginning was all done in C++, using a cross-platform toolkit called wxWidgets. Also, cross-platform toolkits like this in C++, for example Qt. My idea was "Can I remove this user interface from the codebase?", so I had to dig a bit in the C++ code to basically remove all the classes that were defining the interface, just to keep the core classes, the business logic describing what the game is and all the tooling around it. And once you have it, you are then able to run Emscripten (the compiler), but instead of at the end having an executable that you can run on your machine, you can run it as a Web Assembly module.

**Kevin Ball:** That makes a lot of sense. Essentially, you are taking that UI that you wanna replace with a React application and saying "Okay, let's get rid of that, and let's bundle this thing up", so now I just plug it into my JavaScript and go?

**Florian Rival:** Yes, that's the theory. In practice, there are a few things that you have to know, of course. Once you have your whole codebase that is converted to Web Assembly - that's a very good start. You can actually see in the browser, for example when you log things in the console, it's actually redirected to the console in Chrome, so you can see that things are running. So it's a very good first step. You can use Emscripten, like I did, but if you want to write Web Assembly from scratch, you can use a language like Rust, or this interesting project called [AssemblyScript](https://github.com/AssemblyScript/assemblyscript), which is basically a kind of TypeScript that compiles to Web Assembly. So it's very interesting. I mean, there are multiple ways of writing Web Assembly. In my case, I had an already existing codebase, so I wanted to reuse it.

So that's the first part. Then the other part is how to use it in JavaScript without creating too much memory leaks, or these kinds of things that we used to bother in the whole native language, and that we kind of forget in JavaScript.

**Kevin Ball:** That's cool. I think this is actually a really interesting area for Web Assembly, of taking these existing engines that are out there, that have targeted other platforms, and saying "Guess what? Now we can target them to the web, and just plug into it the same way we would any sort of JavaScript module."

Were there any major gotchas along the way?

**Florian Rival:** I will say that the first thing that you will see, that the bundle that is created, the Web Assembly module is quite large. It depends on your codebase, of course, but even for something that is quite small, if your code is, for example, going from C++, you have the standard library that is coming along, so it weighs a lot. For example, for GDevelop it's 3 MB, the bundle containing Web Assembly code.

Honestly, I don't care, because I'm making an application, so I'm willing to have people wait a bit while they are downloading it. It would be better if it was leaner, but it's okay. It's maybe something that will be improved, and it's already better because the first version of my port to browser of my app was using asm.js, which is a kind of subset of JavaScript that Emscripten used to compile to, and it was 7 MB maybe. So things are progressing.

**Kevin Ball:** \[08:11\] Yeah. Well, and Web Assembly megabytes are cheaper, in some ways. They're the same amount over the wire, but parsing cost goes way down.

**Florian Rival:** Yeah. And again, it depends on what you're making. If you're making a complex game or app, it might be okay to ask the user to download this bundle. And also, as I'm packaging the application as an Electron application, 3 MB more or less - that's okay. So yeah, that's the first gotcha.

The other will be more in using the bindings to your original classes in JavaScript, where there are a few things like memory leaks, or passing the proper type of parameters, that are really important.

**Kevin Ball:** You raise a really interesting point... A lot of times we think about Web Assembly, "Oh, I'm gonna run it on the browser, and it's gonna be there", but part of this for you, it sounds like, was just you wanted to use React for your UI, even if you're shipping it in Electron...

**Florian Rival:** Yes.

**Kevin Ball:** Being able to have that seamless integration.

**Florian Rival:** Yes. Actually, my starting point wasn't really about "Oh, I want to use Web Assembly." It was about "I have this existing application, and I know that I can make a better, new interface using React... But how can I interface React with my existing codebase? I don't want to rewrite the whole application in JavaScript." It will be too long, and I will lose the backward compatibility, so existing users will be like "Oh, your new software has less features and is not working with already existing games..." So it would have been a foolish idea.

But still, I was really interested in React, because I've been using React Native for making applications, and React for making websites, or kind of applications on the web... And I was like "We can do things that are really impressive with React, so let's try to port the whole interface to React and see how it goes."

**Kevin Ball:** It's interesting to think about this, because React Native, as you bring up, is sort of trying to do a similar thing. "Let's use the React abstractions and ideas for native programming." Here we're taking something that wasn't originally planned for mobile or anything like that at all, and saying "You know what, it doesn't matter. We don't have to build it from scratch with this. We can just take out the UI component."

**Florian Rival:** Yeah, yeah. I think that's the approach of React Native, but binding to native components. Here I'm doing a bit the reverse - I'm staying with React.js because I'm primarily targeting desktop users, so it's fine to run React.js and the performance is correct. But I'm still binding to existing native code that I don't want to rewrite, and I want to reuse. So in my case, I'm really using a codebase that I did, but you could do the same with, for example, existing libraries that are doing computation, like a physics engine. I know that some have been compiled to Web Assembly. Codebases of game engines, of course, but also things like maybe physics simulation... I think that we'll see more and more people using Web Assembly modules inside applications without even us seeing it.

**Kevin Ball:** Yeah. Well, the cool thing about your approach is it's not limited to React. If you're a Vue user, if you're an Angular user, if you're an Ember user, if you're using any of these JavaScript frameworks, but you still wanna package up a bunch of native stuff, now you don't have to wait for Vue native, or what have you... You just package this Web Assembly and go.

**Florian Rival:** Yeah, yeah. In my talk I'm speaking about Web Assembly for the first part, and then moving to more React-related stuff, but that really could be another framework. The cool thing with React is that it has already a huge ecosystem. In the second part of my talk I more or less explain all the packages and open source modules that I've been using in React to make an interface that looks like a native interface.

\[12:03\] For example, a list of Android \[unintelligible 00:12:03.03\] and if there are performance issues, how to deal with them, and other things like displaying trees of nodes... For example, in my software, the events that are describing the rules of the game - it's basically a tree that is displayed on screen... So how to do it properly with DOM elements in React. But all these things could be applied to another framework.

**Kevin Ball:** Yeah, that makes a ton of sense. Were there any things that you found were missing, coming in into Web Assembly? I know for example the Web Assembly is making a big push - or the Web Assembly Coalition - towards being able to do multi-threading, and scripting across that... Was that something that proved to be a problem, not having those features?

**Florian Rival:** For me it was okay, because actually I don't have any performance requirements in Web Assembly, because all the Web Assembly code that is running is, as I said, some business logic that is not running the games; the games are actually in JavaScript at the end. But yeah, I think the thing that I had the most problems with was debugging, especially when -- imagine that you're calling a function in Web Assembly, so you have some bindings, meaning that you have a JavaScript object, and when you call a function, then it's calling into the Web Assembly module.

But if you pass the wrong type of parameter - let's say you pass a number instead of an object - then it won't be code at the runtime; Web Assembly will think of the number as being a pointer to an object, and then it will mess up the whole memory... So if you're not careful, it's easy to break things, and it's not as forgiving as JavaScript. You don't have an error telling you "On this line there is an error." You have a strange error telling you that the module has to abort because of some memory issue.

**Kevin Ball:** So how do you track those things down? What were the tooling that you had to apply in addition to just Emscripten to compile?

**Florian Rival:** The first thing -- I already had a set of tests in C++, but not enough, if you ask me... \[laughs\]

**Kevin Ball:** The universal developer situation, right? "Oh yeah, we have testing... Not enough..."

**Florian Rival:** "Well, maybe not..." So yeah, what I still did was that when I -- so when you have your Web Assembly module, you also have to create bindings that describe the classes existing in C++ or in your language that you want to expose to the JavaScript world. And when writing this, I've also been writing tests to check that I can create a new object, I can call a method on it, and that it's shortening the proper thing, just because I wanted to be confident about the fact that it was really working.

The first time, you're like "There should be a good chance that it's gonna crash at some point", so I started to write this, and basically what I've been doing without knowing is I created a set of tests on the interface of my library - because at the end, what I have is a library...

**Kevin Ball:** Right.

**Florian Rival:** ...and this thing is giving you great confidence in the fact that it's working, and also, if later something is crashing, you already have a test and you knew that "Okay, the base case is working, so maybe I've been misusing something, but it's working. So it's on me to fix it, it's not on Web Assembly."

**Kevin Ball:** That makes sense. And now you're bridging from a compiled language, where perhaps you have stronger types and things like that, into a dynamic language like JavaScript, and you have to do a lot more validation of your inputs, and things like that.

**Florian Rival:** Yeah, exactly. And I've been looking at things to automate the creation flow types, or TypeScript types for the library that is generated... It's still not a thing. I've seen a project called Nbind, that allowed to compile your C++ codebase to asm.js; so it's still not Web Assembly, but they are making automatic generation of typing... So I'm really missing Vis; I hope that we'll see more and more tooling creating Vis types.

\[16:12\] On the JavaScript side I've been using Flow to type all my stuff, so at least I have the safety -- not the safety as strong as a really strongly-typed language, but still... At first I started without, and now I cannot write any code without types, because I'm getting more confidence, and these kinds of things that are easy to debug in JavaScript - they are there in Web Assembly, so I want to be sure to pass the proper things.

**Kevin Ball:** Yeah, it is an interesting example of how these things that are convenient, but maybe not necessary in JavaScript - suddenly they become a requirement when you start bridging into other languages.

**Florian Rival:** Yes. And speaking of types, I'm a big fan of a typing system like TypeScript or Flow. It turns out that it's not really necessary when you're starting, but as the app is growing, it's really convenient to have typing that helps you to refactor; it will help you or someone else (a contributor or another teammate), and in fact, when you're back to your codebase after a few months without dealing with it, you are a stranger to your own code, and types will save your life. Or at least it's telling you "You've removed a prop in this component, but you've not done it in the rest of the codebase." So it's already powerful tooling, that I guess is really shining a few weeks or months after you're writing the code.

**Kevin Ball:** Yeah, yeah. It's the type of thing that it doesn't feel like you need it when you're getting started, and then as complexity grows, as contributors grow, you really wish you'd started it from the beginning.

**Florian Rival:** Yeah. Sometimes I'm back in some components of the user interface that are not typed, and I'm like "What was I thinking?!" I mean, it's okay, it's working well, but it's a good thing to add typing and to have the peace of mind that things will be alright.

**Break:** \[18:04\]

**Kevin Ball:** So it sounds like you have kind of a mixed background. You're coming from C++ and more traditional programming, and now you do a lot of Web, and React, and things like that... I think our audience -- we have also a mixed background; the listener here might have just JavaScript, or they might be coming from all of those, but for someone who is just used to coding for the Web and JavaScript, can you talk a little bit more about the things to wrap your head around if for example you wanted to come and start using your game engine, or you wanted to start working with some other native libraries? What feels different?

**Florian Rival:** The thing that is really nice with JavaScript - there is a simple mental model for how objects are living. Basically, you're creating a new object, and as long as it's not garbage-collected -- as long as you have a reference to it somewhere, then it's still there.

I think the important thing to think about when you're using Web Assembly with C++, might be better if Web Assembly is getting garbage-collected at some point. For others it's not the case. So I think the most important thing is to make sure that you understand the lifetime of your objects.

\[20:15\] I'm creating a new Web Assembly object for example when my component is mounted. Then I have to destroy this object when the component is unmounted, otherwise the JavaScript object that is the shell - or the Web Assembly object - will be garbage-collected, but the inner Web Assembly object in memory will stay there. So I think that's still something that I had issue with...

At some point, for example, I created a new Web Assembly object, then I deleted it at some point, and without seeing it, I was reusing it at some other point... So it was a crash, again.

**Kevin Ball:** Yeah.

**Florian Rival:** That's the thing you want to look at when you're starting, especially if you're coming from a more Web background.

**Kevin Ball:** Yeah, that makes a lot of sense... And I do know that is another big area that Web Assembly Consortium is working on - garbage collection. Because that will smooth a lot of how do we interact with this via JavaScript, and make sure that we're able to actually communicate objects back and forth, rather than having a wrapper around it, and serialization, and all that mess.

**Florian Rival:** Yeah, it's true that -- well, sometimes what I do in my codebase is I get the Web Assembly object as a prop, or I create it; it depends on what I do. But then sometimes I more or less convert it to a JavaScript object, so that I can then pass it down to other components, and I don't care about the lifetime, and all these things... So I think that if Web Assembly is getting garbage collection, it might ease the whole usage of it and bring additional safety. I'm pretty sure that I have some memory leaks in my application. I haven't got too much, it should be okay, but still - it's manual memory management. That's the downside for now.

**Kevin Ball:** Is there any tooling available for debugging those memory leaks? I know on the native side there are lots of different tools that folks use... Have any of those things been ported to Web Assembly?

**Florian Rival:** I'm not sure... I've not seen any tooling like this. Hopefully, that will appear. I've seen people -- when you compile your Web Assembly module with some debugging flags, you're getting source maps. For example, you can see in your Chrome debugger the source in C++...

**Kevin Ball:** That's cool.

**Florian Rival:** ...and you can go from one line to the other. That's really awesome. In my case, as I said, I have quite a lot of tests, so I'm actually confident in the fact that it's working. But if you are writing from scratch, it's a good idea to see if it's working, at least to see your worst Assembly script or your C++ codebase in Chrome. That's really fun.

**Kevin Ball:** That's really cool. But I feel like for the memory management stuff that's tricky, because it seems like a lot of the natural bugs are actually gonna be in the interface. You can test one side, you can test the other side, but are you letting these things go? That's an interesting question... So how would you write tests that bridge between your C++ codebase and the JavaScript?

**Florian Rival:** Ideally, you won't, and you will have an automatic generation of those bindings. In my case, as I'm using Emscripten, I'm using some language called Web IDL; it's a Java-like way of describing classes. This thing is used by Emscripten to generate glue code. That means that it exposes on the JavaScript the classes, and on the C++ side it's calling the method. So at least if I'm making a mistake here, the C++ won't compile. But still, if I pass too much or too few arguments on the JavaScript side, nothing will happen. That's why I think that automatic generation of typings will help.

**Kevin Ball:** Yeah, absolutely. I'm just thinking about if JavaScript is calling in to something that's gonna allocate memory, and then JavaScript owns that object and is required to then call in to write a test, we're gonna kind of have to bridge across...

**Florian Rival:** \[24:05\] Yeah, right. I think that there is no good solution for now, except maybe automatic garbage collection. Basically, you can't really test for manual memory management. You just have to be careful.

**Kevin Ball:** Yeah, absolutely. So you talked a little bit -- for the game engine your target is laptop, desktop, things like that. Is this also a methodology that will work for targeting mobile applications?

**Florian Rival:** I think that could be... If you're running a native application and you want to use your native codebase... Well, if it's C++, or even Rust maybe - I've not tried - you might as well compile to a native library, and reuse it in your iOS or Android application. I will say it's a bit the same in React Native. If you want to reuse a native library, you can keep it as a native module... But I think that this is getting interesting for mobiles for progressive web apps, for example.

There is an example made by some Google developers - it's called Squoosh.app. It's a PWA, but running Web Assembly code to reduce the size of an image, and to do transformation on an image... And it's open source, so it's a good example for people that want to start.

I think that we'll see more and more applications - well, web apps, and even web apps for mobile - that are running some kind of Web Assembly. And using this, we might get something that is not as fast as a native app on mobile, because native still has a lot of compiling advantage when it comes to making user interface; it's super-smooth, and so on... But you never know -- with Web Assembly running your business logic, or maybe some part of your interface, that might get really smooth and good enough to say that it's an app... And it's not a progressive web app or a web app, it's just an app.

**Kevin Ball:** Yeah, this is really interesting. I think one of the very nice things that Web Assembly gets you is it's got all these great sandboxing utilities, and then now if you're using Web Assembly in JavaScript, you have access to npm, and all of this incredible ecosystem that is much more expansive than might exist in--

**Florian Rival:** That's what I liked really with JavaScript - sometimes people are complaining about "I'm doing npm install and I'm getting tons of modules that I don't know what they're doing..." And really, that's the weakness and the force of the whole ecosystem. When I'm back to working with C++ and I want an easy function to do something, I can't find it; I have to write it from scratch. Or I can find it maybe in a library, but then it's a pain to install. So I think that's really the huge strength of the JavaScript ecosystem - you can npm-install basically anything.

**Kevin Ball:** Anything, yup. The strength is that you can npm-install anything. The weakness is you can npm-install anything. \[laughter\]

**Florian Rival:** Yeah, exactly. But I want to say that when people are sometimes like "There are tons of modules that are being imported", I'm like "Yeah, but you know the C++ standard library. It's huge, too." And with code, we cannot iterate as fast, because it has to go through a standardization process. It has advantages and disadvantages, but the reason I've written the whole interface in React is because I think that the React and JavaScript ecosystem is better now and faster at developing a good and advanced interface.

**Kevin Ball:** Yeah, JavaScript just moves faster, and the Web moves faster, and there's pros and cons to that. It's a constant effort, and I think the fact that every project then ends up having 1,000 dependencies and sub-dependencies, what that means is we need to improve the tooling around that.

**Florian Rival:** Yeah, yeah. Give more visibility around what you're importing, maybe some more checking around what's already inside your bundles, code-splitting; conversely, things that are in native are not yet in JavaScript... But things are improving.

\[28:02\] I like to look at even the language JavaScript - it used to be a scripting language, and now with all the ES6 and all the typing that we can add, we are moving toward a really robust language... And on the contrary, languages like C++ are now introducing things like lambdas, and automatic typing... So things are going in the same direction, actually.

**Kevin Ball:** Yeah, absolutely. When you were talking about the size of the Web Assembly, pulling in the standard library... Is there any concept of tree shaking when you talk about compiling? We've got this standard library, but maybe I'm only using five functions. And sure, they use 20 more underneath the covers, but 25 out of however many thousand...

**Florian Rival:** Yeah... So there is no code-splitting or tree shaking. Or in a way, there is. For example, what a language like C++ and compilers have been doing for some time is that when you're compiling your whole software and using a library, only the functions that are actually used will be included in the binary at the end. So it's basically tree shaking.

**Kevin Ball:** They're already doing dead code elimination, or whatever it's called.

**Florian Rival:** I think dead code elimination might still not be 100% exact, so you're still having more libraries than you want to have. I've seen things like O2 having some kind of dynamic libraries in Web Assembly. That means that you could have your native code that is required only when it's really needed.

I don't know, for example, if you have a physics engine that you want to reuse, if it's a 2D or 3D there might be a way to exclude the 2D library or the 3D library, according to what you're doing.

**Kevin Ball:** Yeah, that starts to get really interesting. There's some progress towards saying "Okay, do we wanna have a standard library for JavaScript?" or something like that, so that the browser just already has all this functionality. When we talk about Web Assembly and pulling in the C++ standard library - that is a standard. Why not? Why not just have it bundled with the browser?

**Florian Rival:** You have to get a good balance between enough innovation in your ecosystem and something that is robust enough. People like to say, for example, when the package left-pad was removed from npm, that was the end of the world. In a way, it was, but I think that still it's not a problem about the ecosystem, it's a problem about the thing that the package will be immutable, and it shouldn't be able to be removed maybe...

But those are things that we can improve, and it's great to see that in the JavaScript ecosystem we are able to build on things that are small as a really simple function of a few lines... And then it gets to more and more complex stuff. So in a way, that's maybe the dream of open source, or using stuff as much as possible.

**Kevin Ball:** Yeah. The thousand-module situation comes from the fact that module bundling used to be tricky, and it used to be expensive, so you'd only do it for very big things. But now it's so easy and simple - at least in the JavaScript world - that why not...?

**Florian Rival:** Yeah. You can npm-publish something in a few minutes. If you like for example React, when you have your tree of components, you have a large component, it's easy to take a bit of JSXMware, extract it to a new component, and reuse it really quickly.

I think this feedback loop that is really quick is important in the whole stage of the development, including in libraries. If you want to make a new C++ library, that takes a bit of time to get the whole tooling set up; that will be a nightmare, if you compare it to npm. I hope that things that are compiling to Web Assembly, like Rust, are improving this - the ability to create libraries really quickly. Because that's how you create an ecosystem that is exploding, instead of growing linearly.

**Kevin Ball:** \[32:00\] Yeah. We seem to be figuring out some of the factors that make that possible, I think. An emphasis on refactorability and composability is huge. That was one of the driving - at least stated - motivations for hooks; it makes it easier to cut and paste code, and refactor into new locations, and move things around.

**Florian Rival:** I was speaking about typing... I think it's a bit the same. When you're investing a bit in some tooling like this for making this easier to refactor, then it's a huge win. Some people told me "Yeah, but you know, if you make small modules, you will have things that have a simple interface, so you don't need typing, for example." That may be true, but on the other hand, you can't say that you will never refactor something. Even a small module, you'll want to, at some point, add or remove something. Even components -- a strength of React is to be able to move components easily, and I think something that you want to keep is your ability to refactor things without breaking things... So that's why I think typing and having a library that allows you to create a component using only a function - that's a really good thing.

**Kevin Ball:** Yeah. And anytime you are exploring somebody else's module, having those types is really useful... Because I don't know, am I using this right? Oh, it didn't compile. The types are wrong? Okay. Now I know what I need to do.

**Florian Rival:** Yeah. That's basically documentation, and it's a safety net. It's particularly useful for a library. This being said, it depends on your use case. I have the website of GDevelop, the game engine, which is done in React, using Gatsby, but I have no typing, because there I don't really care. The model of components that I have with React is enough to get something that is working well. This being said, I'm more or less the only one to be working on it, so I might change my opinion if I get more contributors.

**Kevin Ball:** Yeah. Okay, I wanna explore that a little bit, because we just talked with Jason from Gatsby... So we were hearing a lot about what they have working, and sort of the inside view, but you're coming and you're using it as a user. What's your impression of Gatsby?

**Florian Rival:** I've been very happy with it. I'm a big fan of the React approach, because when I was redesigning the website, I was like "I can identify components in the design that I want for my website." I wanted to have an easy way to start a website, so I started to look at Gatsby and all the performance that comes with it. I've been very happy with it. The website is running really fast, and the development experience is really nice, because there is auto-reloading, which is something that's a bit hard to set up; but it comes for free with Gatsby. So yeah, I only have actually good things to say about Gatsby and the ecosystem around it.

**Kevin Ball:** Yeah. It's funny thinking about, these days, with Webpack and various things... We almost take for granted -- okay, auto-reloading; I make change, it's just gonna be there... But that's a phenomenal upgrade in productivity, because of that iteration speed.

**Florian Rival:** Yeah, yeah. That's, again, the feedback loop in the development, that is really important, that is being improved by this. That's the reason why I ported my software interface to React, because I can use Storybook, auto-reloading -- well, I'm not using auto-reloading, but at least things like Storybook to develop the components in isolation. That's a huge speed improvement.

To come back to Gatsby, I think that it's making out of the box most of what I wanted from my website... So I went with it, and the thing that I like - if at some point I want to scale the website more, I'm not afraid, because it's based on React. I know that there is an ecosystem around it, I know that if I want to add, for example, a part of the website where you have to be signed up, you can do it, because at the end it's only React. And still, it's server-side rendered, so I get something that is blazing fast.

**Kevin Ball:** Yeah. It is amazing how fast Gatsby sites are... And they're doing a lot more than just the server-side rendering there -- or sorry, a lot of the pre-rendering. They're really emphasizing "How do we optimize this to make it super fast?"

**Break:** \[36:26\]

**Kevin Ball:** I wanna swing back now, because we were talking about the importance of auto-reload, and that kind of fast iteration... When you're working in your C++ codebase, is there a way to hook it up, so that you get automatic recompile and changing, or how does that end up working?

**Florian Rival:** At some point I'd like to have the compiler running after every change... That would be possible, basically. The compilation - there is a package.json that is running Emscripten and compiling the C++ to do a Web Assembly module... So I could more or less do my own watcher for files and rerun it every time I'm modifying something.

Right now, my feedback loop is changing something in the C++ codebase. I've been using VS Code. That has a good integration actually with C++, so I can even get the errors directly in VS Code. So that's the first thing that is important - get the errors displayed in your editor. In C++ you can't get errors at compilation; that takes your whole terminal... So having a good IDE to start is, I guess, the main thing.

Then I have a terminal, I run the npm run build, then the test just after, and when the tests are passing, it's copied to the non-modules of my React application. At this moment, as there was a change, the app is reloading.

It's still longer than I would like to, but it's not that bad, because I remember doing a change in C++, then recompiling the whole thing for a few seconds when you \[unintelligible 00:39:13.24\] then running the native application, going to the screen where you want to test, and see that "Oh no, I made a silly mistake. Let's start again."

Now I have less Vis because as my C++ code is more or less my business logic, I can test it faster using unit tests... And the interface is done in React; I can use something like Storybook, and have my component displayed directly. So I'm much faster at writing components in the interface, and I'm equally as fast as writing C++ for business logic.

**Kevin Ball:** Yeah, you kind of get the best of both worlds there.

**Florian Rival:** Yeah. I guess that's also okay with the gotcha that I told - you get the best of both worlds; that's what I want to show in my talk. I'm not saying that you will have a great experience all the time, but that's something that is working. That's working.

**Kevin Ball:** Yeah. Talking about the build steps - it sounds like you have a manual build still, but I've seen people do Webpack integration, essentially pulling in C++ or Rust stuff as modules, directly into Webpack.

**Florian Rival:** \[40:25\] I have to check that. That's surely possible, especially for a language like Rust, or any new language that compiles to Web Assembly. They have something to play on the side of integration with JavaScript. I'm using Create React App for direct application; I highly recommend it. I don't want to mess too much with the initial setup. I want to be able to upgrade it easily. That's why I'm okay with having a manual build step that I launch... But even this I could improve. I could do a watcher by myself. Or maybe later there will be some kind of integration between Emscripten, Webpack... We'll see.

**Kevin Ball:** I haven't looked at the newer versions of Create React App, because I've been more in the Vue ecosystem recently... Do they still require you to eject to customize the Webpack config, or do they use the Webpack Compose?

**Florian Rival:** I don't think they are using Webpack Compose. I will have to check to be sure. But I know you can use Babel macros. For example, I've been adding internationalization to the app, and I've been using js-lingui, which is using some Babel macros, so that you are able to use a component inside your application, to source date strings... And basically, they are changing the AST, they are parsing the JavaScript and changing the AST. That's all done using macros, and without ejecting.

**Kevin Ball:** That's cool. I love the way that essentially metaprogramming in the JavaScript ecosystem is growing up... Because we are now addressing things that -- there's the application layer, but then there's even this compilation layer, and we're using it to do things like JSX, Babel macros, and all this other fun stuff that is kind of compile-time abstractions.

**Florian Rival:** Yeah, yeah. There is -- I'm not sure if it's some newer language... Maybe it's ReasonML, or another language, but for sure they're allowing you to extend the syntax by manipulating the AST of the language. Basically, it's a meta-language that you can create. You can create your own language in the language. I think that's very powerful, and something that we are starting to see in the JavaScript ecosystem. At least it was very convenient, because I didn't have to eject for using the translation component, so the result is very lightweight.

**Kevin Ball:** I love this. I used to do a lot of curating these domain-specific languages using Ruby, but there it's all runtime, and it's Ruby, which is slower. Here we can do it at compile time using Babel, and it's lightning-fast. Rust has this idea of cost-free abstractions - that's basically what this is. It has a cost, but only at compile time.

**Florian Rival:** Yeah, that's great. In a way, the template metaprogramming in C++ was the same idea, but it's super-easy to use, so most of the time I'm avoiding to do it on my own codebase. It's super-convenient for libraries, but also a pain to use... And a pain to debug. \[laughter\]

**Kevin Ball:** Yeah. It sounds like "a pain to debug" is kind of a theme as we go along; if you're starting from the web, and you're used to the tooling that's available on the web... It's funny, because we used to say -- console log debugging became a thing because the tools were so bad. Now the tools on the Web are so good that anytime you kind of go away from it, you're like "Wow, I miss my..."

**Florian Rival:** You mean I come at a breakpoint without recompiling? That's strange. But this being said, if you've never tried for example native development on mobile, the experience is pretty good if you start Xcode, or Android Studio. Good things have to be picked up from both worlds.

**Kevin Ball:** Yeah, absolutely. Awesome. Anything else come into mind you wanna chat about before we wrap up?

**Florian Rival:** Not much... Just check out GDevelop. It's my game engine, and it's for anyone; because of the visual programming system, anyone can jump into software and start making games, so make sure to check it out.

**Kevin Ball:** And it's all open source, right?

**Florian Rival:** It's all open source.

**Kevin Ball:** So if you wanna see a practical example of compiling Web Assembly using that, integrating it with JavaScript in an application - there you go. GDevelop.

**Florian Rival:** Exactly.

**Kevin Ball:** Awesome. Thank you so much, Florian.

**Florian Rival:** Thanks. Thanks a lot.
