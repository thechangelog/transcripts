**Jerod Santo:** Alright, it is time, once again, for JS Party. Today's show is gonna be a little bit different. It's not gonna be a JavaScript party, it'll be a superset of a JavaScript party, because our topic of conversation for today is not JavaScript -- well, it's kind of JavaScript, but we'll get into that. It is TypeScript, so we are officially calling this a TS Party.

**Nick Nisi:** This podcast will compile to JavaScript.

**Jerod Santo:** That's right. So go ahead and run it through your Webpack and see what comes out the other end. If you've been hanging out in the chat, thanks for sticking with us. We actually turned it into Troubleshoot Party, as our live stream had issues... But we're over that, we're here, we're happy, and we're gonna have an interesting conversation about TypeScript.

Joining me today -- by the way, my name is Jerod. Joining me is Nick Nisi. What's up, Nick?

**Nick Nisi:** Hey, how's it going?

**Jerod Santo:** It's going very well. How about you, how are you doing?

**Nick Nisi:** I am doing wonderful, excited to talk about TypeScript.

**Jerod Santo:** And you've talked about Dojo last week; I saw on Twitter that you are also on another podcast talking Dojo - is that correct?

**Nick Nisi:** Yeah, I'll be talking about Dojo, recording just after this one actually... It's the Script & Style podcast, with David Walsh and Todd Gardner.

**Jerod Santo:** Very cool. Well, after that goes live, share the link and we will share it through the JS Party channels as well. Also joining me today is Chris Hiller. Chris, how are you?

**Christopher Hiller:** Hello! I've had a lot of coffee this morning, so I'm ready to do this. Let's do it!

**Jerod Santo:** Alright, so let's start off. TypeScript - what is it and why should we give a darn? Nick, I've been calling you the TypeScript bull, as this show was your idea, and as you're very deep in the TypeScript community, and using it (I believe) on a daily basis, or at least on a regular basis... So why don't you give us the intro and get us started?

**Nick Nisi:** \[00:03:43.21\] Alright, cool. So TypeScript is, as you said, a superset of JavaScript, and it was introduced in 2012 by Microsoft. They brought it out after a couple years of internal development and introduced it to the world, and I have to say that when it first came out, SitePen, the company I was at, was really looking into it almost right away (I think). I wasn't enthusiastic about it, because I had these horrible flashbacks of like CoffeeScript, and changing JavaScript into something that it's not... But that's not at all what TypeScript is; it's really just a superset of JavaScript that adds in optional types, so that you can bring type safety to your apps on your own terms, as you need them, or slowly over time, or all at once right away, whatever you wanna do.

It was created by a guy named Anders Hejlsberg, and he also created C\#, Delphi and Turbo Pascal, and he's at Microsoft, continuing to work on this.

**Jerod Santo:** Sweet. He has no credentials, is what you're saying...

**Nick Nisi:** Yeah, he has no idea what he's doing. \[laughter\] He's a brilliant guy, and it shows through his work, obviously. He was on the Changelog, wasn't he, in the past?

**Jerod Santo:** That's right, we had Anders on -- man, it's quite a couple years ago now... Episode \#152, back in April of 2015. He gave the back-story, the inside story at Microsoft of TypeScript. Jonathan Turner was also on that show... So if you want the deep dive onto it being formed inside Microsoft, and then coming out, and at least the history between 2012 and 2015, go back and listen to that, we'll put it in the show notes... But no doubt, there's been progress, and really just massive adoption is what I've seen, mostly from the outside, of TypeScript, into different projects, different companies, different libraries... But I'm curious, Chris, what's your experience with TypeScript? I'll tell you mine - none. I write JavaScript... I actually liked CoffeeScript back in the day, Nick, you know that; I was a fan of CoffeeScript because I didn't like a lot of the older JavaScript trappings, and CoffeeScript kind of spoke to my aesthetic sensibilities. I've since moved on back to ES6 style JavaScript but I haven't actually used TypeScript at all. I've seen it, I've talked a lot about it, but I don't have any practical experience. Chris, how about you?

**Christopher Hiller:** I was also pretty wary of TypeScript. I didn't enjoy working with CoffeeScript actually, but... So you know, another thing that compiles down to JavaScript, not that excited about it... So it was a while before I tried TypeScript. All I've really done with it is basically try it. I've tried to use it on two or three different occasions on personal projects, and just haven't gotten too terribly far with it.

I do like some of the things that it offers, but I struggle with it. I suppose we can talk about some of that. But that's pretty much my experience. I'm really trying to get into it, but it just hasn't really clicked for me.

**Jerod Santo:** So it hasn't clicked and you've had a few false starts, but you still say you're really trying to get into it, so apparently you do see some value, even though you haven't quite gotten there... Chris, what is it about TypeScript that it offers that you're interested in taking advantage of?

**Christopher Hiller:** For me it's really all about the introspection and such offered by the server. Your IDE, your editor can talk to the TypeScript server and get all this information about your code that is terribly difficult to get in vanilla JavaScript, because there's too much loosey-goosey type stuff going on. And of course, TypeScript makes it kind of easier to understand what goes here, what goes where, what this function can do... Especially in VS Code there's a ton of in-line and context-sensitive help, and all that cool stuff. So for me it's the tooling.

**Nick Nisi:** \[00:08:18.14\] Yeah, I would agree with that. The tooling is the biggest win for TypeScript, and it's why I really like it. I just use Vim for all of my development work, but because TypeScript does provide this TS server, and that's what VS Code and others are talking to; Vim can talk to that as well through plugins, and I get much of the same benefits right there. I can do completion, smart refactoring, renaming of things, and also get information about what the actual value is of a variable under my cursor, or get information about the comments. If there's JSDoc comments associated with that, I can get that information, too.

**Jerod Santo:** One thing I learned while talking with the VS Code team recently about VS Code- and you were talking about the TypeScript server, and really the tooling wins that that provides - is that even when you're using JavaScript, you don't have TypeScript in your build toolchain for instance, or you're not opting in, because TypeScript is a strict superset, basically all JavaScript is going back to like ES3, or some really old JavaScript... All that is valid TypeScript, and so they're able to not even use the JavaScript language server in the back-end; they're using the TypeScript server even when you're writing JavaScript. So there are some features I think you can take advantage of, or that VS Code specifically is giving you with JavaScript, even though you don't know about it.

**Nick Nisi:** Yeah, that's exactly right. So VS Code does take advantage of that for your JavaScript work too, so it's passing all of your JavaScript code through the TS server to infer what it can about the files and all of the variables and everything within there. So if you're setting this variable somewhere in your file to a number, then it can infer that that's going to be a number. And if you change it to something else or try and use a string method on it, then it can provide you with some intelligent tooltips that tell you "Hey, you probably can't do this because you're using a number. We think that you're using a number." That's one of the big benefits.

TypeScript is just JavaScript, and then it just allows you to add in these type annotations, but you don't have to go crazy with that, because you can just rely on TypeScript being able to infer what you're passing around to it as well. So that's kind of the minimal standard that VS Code would use for something like a JavaScript file, and doing that.

It also is smart enough to understand some of the basics of JSDoc comments. So if you have a JSDoc comment above a function and you are describing the arguments that that function takes, you're not adding any TypeScript-specific code to that, you're just doing it in a comment, and the TS server can infer from that comment what types of variables can be passed to this function, and then give you warnings if you're using it in an improper way.

**Christopher Hiller:** I had a question about that... Is it like a traditional daemon that just kind of runs in its own process and responds to remote procedure calls, or something? How does that work?

**Nick Nisi:** I don't know the specifics of that, but on every keystroke in your editor -- and that can depend on the editor, too... But on every keystroke it's effectively blowing away what it knows, and then recompiling its understanding of the application to give you intelligent insights on everything. So I think so... But yeah, it does run in the background like that, and it's for every specific file.

**Jerod Santo:** So I'd understand how that would work inside of VS Code, even with a client-server architecture with a separate process, or maybe -- I wouldn't imagine it uses the network necessarily, but how about inside of Vim? Do you have to have the TS server installed with Node, or what's your setup to take advantage of those features in editors that aren't Microsoft's editor?

**Nick Nisi:** \[00:12:17.03\] I can really only speak for Vim in this case. I have a plugin called ALE (asynchronous linting engine). It's very similar to other plugins like Syntastic or -- I'm forgetting the names of other ones that I've used in the past... But in the past I've used those just for linting. So everytime I save a file, that will go through and pass the file that I'm working on to ESLint or JSLint, or whatever it was in the past, and then that will come back and tell me all of the linting problems that I did and highlight the lines. ALE does that all in real-time. As I'm typing, it's just constantly updating Vim with information about the line that I'm typing and what it understands, so that I get real-time feedback on everything. So it's going through that, and it's just reaching (on my TypeScript projects) into the local version of TypeScript that I would have installed in the Node modules for that project... Or it can go for the global version if you have that as well.

**Jerod Santo:** So it's using your Node modules that are relative... Project-relative Node modules, via the Vim plugin or extension. Okay.

**Nick Nisi:** Right. And then there's other plugins as well... I'm using one currently called tsuquyomi.

**Jerod Santo:** Say what?

**Nick Nisi:** I think that's how it's pronounced...

**Jerod Santo:** Excuse you, and it's only if you sneezed...

**Nick Nisi:** Yeah... \[laughs\] I'm looking at another one called nvim-typescript, that allows you to do other things, like it adds in functions that you can call from within Vim, so I can take the word that my cursor is over and give me what you think the type is, or give me the definition or the comments, or go to the definition of that file, navigate over to that. So it uses the TS server to further enhance the capabilities of the editor to be able to have a more holistic understanding of my project.

**Jerod Santo:** So where is the line drawn between -- because I'm all about getting those free features, but not necessarily committing to anything, if possible... Where is the line drawn between what it can give me automatically on my JavaScript code by using the TypeScript language server in the background, and then what features I can't get, or I could get, if I actually put .ts or opt it in to using like proper TypeScript, even syntax.

**Nick Nisi:** So if you're just using .js files, with no type annotations in there at all, then you're really only going to be getting what the TypeScript server can infer from your code. So your code would have to be written cleanly using those common de facto standards that we do within code, like not changing the types of variables, or other things, and kind of having a strict set of arguments to a function, for example. Anything that it can infer from that - so how you're using the code, what variables you pass into a function call when you do it, or what you're actually trying to do with the variables inside of that function... It can infer that, and then when you're doing something that it doesn't understand, then it can warn you about that, and let you know.

In my previous example, like, you pass in a number and you're trying to use a string method on the number, it can warn you that "Hey, it looks like you passed a number here", or "In this case you passed a number or a string." So it can actually do a union type, and it understands that, so it can say that "This variable that you pass in is either a string or a number", and then it can warn you if you're passing something else in. Then you can build in type guards within that function to say that "When it's a string, it's safe to do this, and when it's a number, it's safe to do this."

**Jerod Santo:** That's cool. So those guard clauses are -- can you return earlier or anything like that, in terms of the guards?

**Nick Nisi:** \[00:16:03.13\] Yeah, and because it's not really extending the language in any way, those guards are set up with "type of" calls; so you can say "if type of A = string", then inside of that if statement it's going to assume that A is always a string. Outside of that it could be the union type again - a string, or a number, or whatever... And you can return from within there, and then the return type of that function could be undefined, or a string, or a number, or whatever the case is for the types that you're returning

**Jerod Santo:** So Chris, going back to your desire to take advantage of some of the tooling, have you tried what VS Code offers through the TS server? Or do you use JSDoc perhaps with Mocha? Are there things that you could get for free, without having to get over the hurdles that you've hit a couple times?

**Christopher Hiller:** Yeah, I even was able to make -- I recently started using VS Code; I was a WebStorm person before then, and I had made WebStorm do this kind of inference about JavaScript using TypeScript types. So if I'm using some third-party library, like if I'm using a Lodash or something, I would have a copy of the -- we'll get to definitely type, but I mean, there's all these TypeScript definitions for third-party libraries like Lodash... Basically, if anything's popular, somebody has written TypeScript definitions for them... So I can pull those down, and WebStorm would use those type definitions to kind of infer about the JavaScript I was writing.

That works okay, and it seems to work okay in VS Code, with the JavaScript. It's not that awesome, it helps a bit, but... You know, not everything uses JSDoc, not everything uses JSDoc the same way, and it can only do so much with JavaScript.

Now, I've tried to use TypeScript in VS Code and TypeScript in WebStorm, and yeah, it's great. VS Code does a better job with the integration, but still... It's cool, but I still have problems with it.

**Break:** \[00:18:55.27\]

**Jerod Santo:** Guys, we talked about how you can take advantage of some of the TypeScript's tooling features with vanilla JavaScript... What if you don't want to go all-in, but you do want some of the TypeScript features? What's the easiest way, or the happiest path to "I have a .js file and I wanna go beyond taking advantage of the TypeScript language server and I wanna use some TypeScript features. How do I get started? What do I have to do to dip my toe in TypeScript water?"

**Nick Nisi:** \[00:20:17.14\] So TypeScript is a module that you install from npm, so you can bring that into your project, and then you'll want to create a tsconfig file, and you can do that through the TypeScript CLI; you can just say npx tsc --init, or mabe it's just init, and it will ask you some questions, and then it will create a tsconfig.json file from there. This is the file that configures how the TypeScript compiler actually runs.

So theoretically, you could start renaming files to .ts, and then in the Includes section of the tsconfig you could have some globs in there that point to those specific files, and you could start as big or as small as you want, and just have it start compiling those two JavaScript. So if you just rename the files, you would see a little bit of change with the outputted .js files, and you can specify if you want it to compile to an ES6 file, and ES5 file or an ES3 file, to take advantage of whatever platform you're trying to run on, the minimum platform there. Typically it's ES5 right now.

You can just have it run those through, compile those, and then you have the JavaScript files that you can then start running.

There's also different cases with Webpack where you can start doing that and using TypeScript and JS interoperably with Webpack's TypeScript loaders, along with others... So it gets even easier from there. So you can start slowly adding files or converting files from JS to TS. When you first do that, it will kind of all go back to the tsconfig, where it's going to be running those compiler options, and depending on the level of strictness that you have set up in there, that is going to determine how much the TypeScript compiler actually yells at you going forward... You can have it really relaxed, so it's not yelling at you for a whole lot of things, or you can go the route that the projects I'm on typically go, which is strict true, where everything is turned on, and it will yell at you for every little thing.

**Christopher Hiller:** It would seem to me that if you have a project, a web project, and you've got your Webpack config, and you've got a billion loaders set up, and then you wanna sprinkle some TypeScript on, that seems like it might be very disruptive to that Webpack config... Because if you have some TS files, some JS files, and then what about what happens with the code splitting, and yadda-yadda-yadda...

I've never tried anything like that, but I can speculate that that sounds painful. Do you have any experience with that?

**Nick Nisi:** Yeah, a little bit. So you should be able to really add the TS loader, and then add the .ts or .tsx extensions as resolvable extensions... And then you can start compiling or renaming files to .ts. Then from your JavaScript files, if they're written in the ES module syntax, you should be able to just pull them in like normal, and because you added those extra resolvers in there, it will just run the TypeScript files through the TS loader, and load those in, and then it should be able to take care of things like code splitting and others, but allow you to work with both formats while you're in that transition pretty easily. But of course, Webpack can be a black hole that sucks all of your time away, so... \[laughter\] Ideally, that would work.

**Jerod Santo:** I mean, most of us - don't we all - just kind of find a Webpack config on the internet that sort of works, and then just like cobble ours together based on that blog post, and then once it works, never ever, ever, EVER, touch it ever again.

**Nick Nisi:** \[00:24:15.20\] Yeah, exactly. That's where other tools - like, we talked about Dojo last week, and Angular, and others - have their own CLI's that are based off of Webpack, but they're really abstracted away, so that you don't have to deal with that, and you're just dealing with a simplified abstraction for all of that configuration. Those two projects in particular are built on TypeScript, so it gives you that TypeScript right out of the box.

**Jerod Santo:** I actually have a Webpack life hack that I think I shared on maybe the Changelog -- I don't know, I've shared it before, but I'll share it again, for those out there... Because in the chat, Alex Rae is just working on a Webpack config right now. If you are stuck with Webpack, the life hack is this - you turn to Twitter, and you complain loudly about Webpack, and you tag it Webpack, or you @ mention Sean Larkin (you don't even have to @ mention him). I don't know if he's still doing this, because he's gotten very busy, but Sean Larkin, who's one of the Webpack core contributors, used to just watch Twitter constantly, for anybody, and he would live-help almost anybody who's got problems with Webpack. It was an amazing thing to behold... You can get personal, one-on-one attention from a Webpack core contributor, mostly by just complaining on Twitter... So there's a life hack for everybody out there. That's how I've cobbled together a couple Webpack configs in my days.

Anyways, back to TypeScript... Go ahead, Chris.

**Christopher Hiller:** Yeah, so about that TypeScript loader - last time I checked... I mean, the TypeScript is not like a core part of -- it's not like an official loader... Is it?

**Nick Nisi:** I don't think so.

**Christopher Hiller:** I'm wondering if that's like on the roadmap...? Does the Angular team use this loader as well? I would be saddened but not really surprised if that TypeScript loader was some random single maintainer somewhere... \[laughter\] That all of these toolchains are depending on.

**Nick Nisi:** Yeah, that is a concern. It's under the TypeStrong organization on GitHub, so I'm not sure if that's a company, or what... But they also have the TypeDoc project, and others... So there's a lot of good, popular projects on the TypeScript ecosystem out there, and it's the one I've used.

There's also another one called Awesome TypeScript Loader. I have less experience with that one because TS Loader seems to work in the majority of the cases.

**Christopher Hiller:** Yeah, I remember when I tried that I wound up using the Awesome one, because the official one didn't -- I don't know, for some reason it was behind, and didn't work with the latest version of TypeScript, or I don't even know... But if I recall correctly, the Awesome TypeScript Loader is just kind of a personal project of a person.

**Jerod Santo:** It seems this TypeStrong one - the Ts-loader link in the notes - has about 70 people contributing, but if you look at the contribution graph, there's three people with double-digit commits; one of them has ten on the node, so... It's mostly two people running it, but it appears to be pretty well supported.

That being said, 106 open issues... Hm. That's the joy of open source, right? Figuring out what's worth pulling in and what's maybe more of a liability than an asset in terms of dependencies. But what's the official way to do it? ...that's the Webpack way, but is -- if you went to TypeScriptLang.org, or wherever you would go, what is the official supported "This is how you should use TypeScript"? Will they say use the npm module, or what will they say?

**Nick Nisi:** \[00:28:01.10\] So you would just install the npm module. That's TypeScript, and that will give you a CLI command tsc (TypeScript compiler), and that's what's going to run. You can pass in command line arguments to that all you want, or that tsconfig file that I mentioned - that just configures it by default, so you don't have to remember all the command line arguments over and over; you can just have it all in one config and then check that in with the project.

One of the config options in there is the type of module that you want to support. TypeScript by default supports ES modules, CommonJS modules or AMD modules. So if you're working with AMD or CommonJS in your existing project, you can configure TypeScript to take the TypeScript files that you're writing with the ES module syntax and actually output that as CommonJS or AMD, and then provide your own AMD loader or CommonJS loader, like RequireJS or Browserify (is that the other one?), and then just load the project as you would normally.

So it all really comes down to that - when you run the TSC command, it looks at that config, compiles all of the TypeScript to JavaScript, puts that in a build directory that you specify in that config, and then those are the assets that you can actually run in the browser.

**Jerod Santo:** So we've mentioned that TypeScript has gotten broad adoption by huge names - Microsoft, Google, Lyft, Slack, Dojo, RxJS... These are all either projects or businesses that are operating at a huge scale, and that's really what the sales pitch is, right? ... TypeScript is a superset of JavaScript that's going to help your JavaScript libraries or applications scale.

It's interesting that most of what we're talking about is tooling and documentation and refactoring abilities, but really the old-school argument of dynamic types vs. static types, or strong vs. weak - I never remember the exact lingo Gary Bernhardt would probably kill me if he hears that, because he's very strict on what means what... But I always think of dynamic vs. static typing is like, as your project gets bigger, you're either more or less likely to write bugs if you have static types. But none of us are talking about types. I mean, we're talking about it allows our tooling to introspect our code, it allows us to refactor at a click of a button, and stuff like this, but we're not talking about bug reduction, or the things that you think about at scale. I just wonder what you guys think about that.

**Christopher Hiller:** I think for me the reason why TypeScript has been a struggle is I'm kind of a perfectionist... That's difficult as somebody who spends their time coding, because it's really hard for me to call code good enough. So if I'm using TypeScript, I now have types, and I have to figure out what the type is of these things, and I have to be very meticulous about what I call this or that... And I think it pulls me way down the rabbit hole of thinking about types, when I really just need to be thinking about the code and what it does.

I think I said it, it's poison for perfectionists, because for me it just -- it's so distracting, to struggle to say "I have to get this type right, I have to get it perfect", and not being content to use the wildcard "any type", and that's just tough.

But as far as like in enterprise adoption and in bug reduction, I have no idea. I don't even think I've gotten to writing too many tests.

**Jerod Santo:** \[00:32:08.00\] Chris, I'm curious what you mean by "worrying about the types", because you've gotta think about it at some point, right? I think of it in the classical sense of like, you know, a function accepting arguments, and Nick, that's what you were giving the example - this function takes a string and operates on it, and returns a new string, for instance.
You've gotta think about that as a string at some point, and so where are you getting caught up? Because what tends to happen - I write in dynamic languages all the time, Ruby and JavaScript; I do not use TypeScript. Even Elixir is not a language I use, which is dynamically typed... And I have to think about that a lot of times inside the bodies of my functions, like "What if this is not what I'm expecting? What do I do about it?" So you do have to make those decisions, I'm just wondering, like, is it pushing it too far up your mental stack, so like "think of it all upfront", and you get stuck, and you're used to thinking about it later?

**Christopher Hiller:** No, I mean... The problem is not primitives; the problem is not string or number...

**Jerod Santo:** It's your own types...

**Christopher Hiller:** Yeah, the problem is these objects that -- maybe it's an interface, and I'm passing these objects around, that have these certain properties... Or perhaps I'm expecting somebody to give me a callback, and then describing using TypeScript what that callback looks like, and what it can or cannot return... And then just like throwing generics on top of everything; that's kind of where it falls apart for me, it's just like "Oh, no..."

**Jerod Santo:** Gotcha.

**Christopher Hiller:** Like, okay, this function accepts this object, that is this duck-typed thing that is, you know, some abstract -- I don't know, there's just too much there for me to... Yeah, that's just all it is.

**Jerod Santo:** Yeah, it makes sense that it's more about your own types and your own objects than it is about primitives. In my situation, as I'm very much working on small teams, or even lots of times a team of one, and I make apps - I'm not a library maintainer - and so I am most of my code's user. My end users are using a website, or a desktop app, or something; most of the time, a website. So I'm almost always gonna be my own user, so the annotations, even the documentation, defining the types upfront for me just slows me down and doesn't allow me to kind of mold the code as I go, or I have to go back and change the types. So that's what I hit, so that's why it makes sense to me that it's good for scale, but if you don't need scale, maybe not for you... So that's kind of where I feel like I'm sitting.

Nick, you work at scale, or you work on larger teams and larger projects, so tell us your experience.

**Nick Nisi:** First off, I would agree with both of you that that is one of the hardest parts to getting started, and it does feel like it's impeding your productivity when you're just worrying about types, because at the end of the day, the types are compiled out at compile time, and have no effect on the runtime at all, so it seems crazy to spend so much time on something that will never run. But when you do get to a larger team, with a lot more developers or a really big codebase that you can't keep everything in your head, I do think that it has benefits there, and it goes back to the tooling that we've been talking about, because your editor will be able to tell you how to use something that you may have written six months ago without you having to go back and even look at the code; it can just show you "this expects two arguments, that are this and this" or "it's going to expect an object that has all of these parameters, but some of them are optional", and all of that.

\[00:36:03.05\] So it does help you with that, it helps you to keep everybody on a bigger team on the same page, because you're really writing contracts for everybody to adhere to, and they have to strictly adhere to it, because the TypeScript compiler will yell at them otherwise. So it really does help with that.

But if you're just trying to do some rapid prototyping, it can definitely get in the way, because it makes you feel like you really have to think about things and flesh them out, and then write the types for them or write interfaces for them, and then go back and change those if you have to, so there's just a lot more code to change in between iterations, which can be tough. Or if it's just a smaller project, maybe that tooling, if you can keep everything in your head, maybe it doesn't make as much sense to have all of that, because it's just getting in your way and you can go faster without it... I totally get that, too.

And then it further complicates things when you have third-party JavaScript that you want to use within TypeScript. I've spent so much time trying to get types loaded and to find the correct types for things that are written in JavaScript, just so that I can get the compiler to not yell at me about some jQuery function I'm using, or something along those lines, like something external that just has these type definition files that have no real association with the project other than that they exist in the definitely typed repo or other places... And that can be challenging to get started up on, especially when you're first starting off on a project, that's like the slowest thing. I was just doing this yesterday, trying to get a project started up and trying to use some older Dojo stuff with the Dojo types, and it's still a struggle to get all that setup working properly.

**Christopher Hiller:** I think if there was a large project -- say there were two at your company, and one of them was written in JavaScript and one of them was written in TypeScript, and you were expected to choose between them, and which one are you going to step into and start maintaining and learn from scratch... Yeah, you should pick the TypeScript one, because it's going to be so much more clear about what everything is. I totally see that benefit. If somebody's done it for you - sure...

**Jerod Santo:** \[laughs\] As long as you're not writing the types, you're happy.

**Christopher Hiller:** \[laughs\] You don't have to do it yourself. I have contributed a few little random PRs to TypeScript projects, and it's fun; it's easy to understand what's going on, but... Just having to think about that stuff myself, that's pain for me.

**Jerod Santo:** We've seen a lot of open source library teams and authors adopt TypeScript for that reason, that they're willing to put in that extra effort upfront, if you will, or while they are building out the architecture, in order to ease adoption from contributors.

**Christopher Hiller:** It makes sense.

**Jerod Santo:** Yeah, that makes tons of sense from my perspective. I've never tried to -- you know, I've never opened a PR on a TypeScript and thought "Oh, this is way better!" I just haven't come across that situation, but it's interesting hearing, Chris, that that's an experience you've had; it's a testament to what it provides.

**Christopher Hiller:** And I think it's important to note that -- or maybe not important, but it's interesting to recognize that I never felt that way about a CoffeeScript project. If there was something written in CoffeeScript, I wouldn't send a PR... If I was like "Oh, there is a bug in this thing, I should go fix it", and I go and look and it's CoffeeScript, forget it.

**Jerod Santo:** Yeah, I mean... CoffeeScript was a departure, though. It's more of a dialect, as opposed to TypeScript, which you could say is also a dialect, I guess, of JavaScript, but more syntactically familiar, whereas CoffeeScript was introducing not just syntactic sugar, but also new functionality, so I could see where that would be a stopping point... And we've seen libraries switch from CoffeeScript to either vanilla JavaScript, or who knows, maybe now TypeScript, because of that road bump it was putting in people's way.

\[00:40:23.05\] But yeah, it definitely helped push the industry forward though, so I think it was a net win for programming... But I'm glad that it doesn't have to be out there in mass use anymore.

**Nick Nisi:** Yeah, and I think that TypeScript, being a superset of JavaScript, that's one of its big benefits too, in that JavaScript is always changing; every year we're getting new TC39 proposals going through that process and getting added to the language, and TypeScript isn't standing still; it's staying on top of all of those, and as features pass through that stage process from TC39 when they reach stage 3, if they can be transpiled back to ES5, they do get supported into TypeScript... So it is kind of a safe way to use the next version of JavaScript, with types as well.

**Christopher Hiller:** Is there any proposal currently in the pipeline that TypeScript couldn't implement because it would conflict with its own language?

**Nick Nisi:** So there's the class properties proposal, and with that there's the privates, so being able to use that pound sign for privates on classes natively in JavaScript... TypeScript has already been using the private keyword to do that, but of course, that's just a compile time check; this would actually be a runtime check. There are also some differences...

There is an issue opened - I can find it and put it in the show notes - that discusses that, but I don't know the exact outcome. I think last I checked it makes sense for them both to exist, but I don't know if they would ever reconcile.

**Christopher Hiller:** Yeah, it would need to be something like just a purely syntactic thing that has a conflict. I can't think of anything... It's probably in the best interest of everybody; as much as I'm sure the TC39 team doesn't wanna have to worry about TypeScript, it's probably a good idea to not just brazenly introduce things that will break TypeScript.

**Nick Nisi:** Right, and that's where I think it's a safe way to stay on the latest versions of JavaScript, because you're not on the bleeding edge, you're not on the stage 0, stage 1, stage 2 proposals... You're on this prescribed "These are likely not going to change", and so they're supported by TypeScript. And if for some reason they changed, there would probably be some kind of conversion within TypeScript to help handle that potentially... But usually they don't get there, they don't implement them in the language until the syntax is certain. The only exception to that is decorators.

**Christopher Hiller:** Oh, right, right. Yeah, TypeScript has its own idea about decorators, and that has diverged from -- I don't even know where that proposal is anymore...

**Nick Nisi:** Yeah, but they have it because of Angular -- when Angular was switching over to TypeScript, they actually wanted to have a superset of TypeScript called AtScript, that basically added that and some other features... But then those were actually brought down into TypeScript in version 1.5, and it just stayed as TypeScript.

**Break:** \[00:43:49.19\]

**Jerod Santo:** Alright, we are switching gears just a little bit... This is related to TypeScript in the sense that it's about types, but it's a different conversation. I wanted to talk about developer titles, and the difficulty of titling us, what we do, who we are... Stuff like that. There's two distinguishments that we see out there; one I think is completely arbitrary, so I'm playing my cards right up front, and I think it's not useful, but I've started to see a trend where people are distinguishing the terms programmer, developer, coder, engineer... And maybe there's more, but those are the four that I see often, either just used, or perhaps compared and contrasted.

A second type that I think is more useful, and perhaps just as hard to distinguish between is between the idea of a junior and a senior in terms of a developer/programmer/engineer etc. So I wanted to talk about that and get your guys' take, because my take on the first topic of this distinguishment - and I've seen it twice recently by people that I respect and somewhat admire - is distinguishing specifically between engineers versus programmers, and both examples were different. That's why I said I think it's arbitrary - neither one of them were agreeing; they were completely different criteria by which they were explaining what makes it engineer versus a programmer... And both of them introduced kind of a class hierarchy in terms of "You want to be an engineer now, you don't want to be a programmer...", so the programmer is somehow less than...

So let's start with that, what you guys think -- first of all, what do you call yourself to people, and does that matter, and do you see what I see, and what are your thoughts on programmer or developer titles?

**Nick Nisi:** My official at the company I'm at is senior software engineer, but I typically just go with developer. I don't really care about the distinction or think about it much...

**Jerod Santo:** What do you think about it when other people use it? For instance, what if I am ignorant of the distinction, and I call myself a programmer, because that's just the word that I've used...? But out there it's beginning to form a distinction in which a programmer is somehow a lower-level expert or skillset. Maybe I'm pigeon-holing myself... Is this a trend that you are for, against or indifferent to these distinctions? Like, you don't seem to care personally, but do you care if we kind of adopt a social norm around these things?

**Christopher Hiller:** This is kind of tough... Somebody said in the Slack chat it's a power cake of a topic. Personally, my job title is developer advocate, but the cross-section of people who have any idea what that means is very few... When I say "My job is such and such", depending who I'm talking to, I could say -- usually I'll just say I'm a programmer.

If I'm writing something on a forum that wants to know what my job is, I put "software engineer." But as far as like official titles, I don't even know; I do not know. There's all sorts of title inflation, there are states where you can't call yourself an engineer without -- it's like illegal to do that or something, because the term "engineer" is reserved for civil engineers, mechanical engineers, people with certifications.

**Jerod Santo:** Right.

**Christopher Hiller:** \[00:48:29.12\] There is no such certification for software engineers, though there might be in some states; I don't remember. But yeah, that's tough.

**Nick Nisi:** I think I saw a few years back, when this topic came up again, somebody referring to a better term, which would be like a software gardener, because that's more appropriate to what we actually do; we kind of grow software from seemingly nothing...

**Jerod Santo:** I know specifically a blog post that I think about often, it was Steve Klabnik's... "Open source is like gardening", or something like that, referring to how you actually maintain and grow an open source project. It should be modeled after the way a gardener goes about maintaining and growing a garden, so that definitely resonates. I haven't heard anybody say "I am a software gardener" or "We should be calling ourselves software gardeners", but I think that's a fit metaphor.

So this is a distinction that I heard a quote of that kind of got me thinking down this, where the one distinguishing -- and I'm not here to call anybody out, so I won't even quote who it is, but just the idea is that a programmer seeks first to solve a problem, and perhaps later understands the problem better, and then an engineer seeks first to understand the problem and perhaps later solves the problem.

I mean, that's completely out of context; that was a quote I saw on Twitter that got me thinking of like "What are we doing here...?" This seems like somehow now an engineer is a deeper thinker than a programmer... I've also heard elsewhere where people degrade the word coder, because it's as if you're a code monkey, or you don't actually think, you just go type into a keyboard, but a developer is like an enlightened person. So it seems like a troubling trend...

The three of us don't seem to have opinions on these words... I think they're -- just swap them in, whatever makes you feel good... But I think labeling other people as certain ones, and then creating distinctions, where I don't believe there's a standard around how they actually are distinguished... I think engineer might be, like you said, Chris, eventually more of a distinction if there is a license - I hope not - or an accreditation that makes you an engineer, and now it'll get you a raise, or whatever... But I fear that these things could be used to basically lord over other people whose skill sets are you think inferior to others.

**Nick Nisi:** Yeah, I do have a problem with it when it's referred to in this way, because to me that implies that a programmer will never be an engineer, and an engineer will not downgrade to a programmer, in this context. To me, the order of which you do things, solving a problem and then trying to understand a problem, or vice versa - that comes with experience, and I don't think that being more experienced would magically change you into an engineer.

**Jerod Santo:** Yeah. I mean, just thinking about how I talk about myself, and I don't think any of these terms hold weight over the others, but I will tend to just say, "What do you do?", "I write software." Or as MontesLew says in the chat, "What do you do?", "I make websites." To laymen, that's actually something that makes sense to them, "I make websites", but for industry insiders... And of course, these distinctions are happening inside our industry; it's not like we're making distinguishments for the general public to use, but I think we see it inside HR departments, and in hiring practices it could perhaps become toxic.

\[00:51:54.05\] Let's go to the other one, which I think is much more useful, but also just as hard to define, because it seems like the field goal posts are always moving, which is what makes a junior developer versus a senior developer? I saw a funny tweet about this that I was pulling up, from Trek Glowacki: "Since our industry seems hell-bent on giving people "Senior" titles who are in the first decade of their career, I'd like to propose we introduce a new layer of Elder Software Engineer, for people in the 11-20 years range, and Ancient Software Engineer for those 21+."
So a bit tongue in cheek there, but Trek is lamenting the fact that Senior is not being used the way he likes it, right? ...in people who are still in their first decade, so he's saying it's about decades... I'm curious what are your guys' thoughts on senior versus junior developer. Is there a distinguishment that we can come to? Is it completely in the eye of the beholder?

**Christopher Hiller:** If your title is Junior, then that just means your company pays you less.

**Jerod Santo:** That's definitely a fact. So how do you get them to call you a senior? \[laughs\]

**Christopher Hiller:** I don't even know... I mean, I was a Senior - let me see here, how many years into it...? Yeah, I was a senior before my first decade was out, sure.

**Nick Nisi:** Software moves a lot faster than decades.

**Jerod Santo:** Kind of like dog years, seven for every one, or something like that...

**Nick Nisi:** Yeah... There's a lot of experience that you can get, and then you have to stick with it and you learn how to learn, I think, and that might be some kind of distinction... But I don't really like that term either. I like thinking of them in terms of like a mentor/mentee-type thing, where a junior developer would be more of a -- you know, they would be learning to learn, and then the senior would be helping to facilitate that learning, but also trying to learn, because you should never stop (learning). And I'm not trying to say that seniors can't learn from juniors at all, but... I don't know; I feel like I'm painting myself into some weird corner now.

**Jerod Santo:** \[laughs\]

**Christopher Hiller:** Google's idea on job titles, for as many issues as Google has - that's not a bad idea, but others may disagree... As far as I know, most everybody there is just a software engineer; there's no senior, there's no junior, there's no programmers, there's no "Software Engineer 3"... There's nothing like that.

**Jerod Santo:** Right.

**Nick Nisi:** They just have pay levels associated with that.

**Christopher Hiller:** Yeah, as far as I know, everybody is a software engineer there, but maybe some people have different titles; I don't know. That's just the impression I got.

**Jerod Santo:** There was something about the way GitHub handled itself in the early days... I'm not sure how it works anymore, but everybody came on at this specific, exact -- everybody was software engineers, or developers, or coders back then, at first, and they wore many hats as a small startup, but they all started the exact same salary, and then every year you just got a raise. It was just standard. It was based on not how many years you'd been in the industry, but specifically your salary, which was based on how long you were at GitHub, and I think that had to change as they grew as a company. But yeah, there was kind of a leveled ground...

\[00:55:39.04\] I'm definitely a fan of leveled ground in terms of the nomenclature that we use amongst ourselves. I understand that inside businesses you have to come up with a structure, and businesses pick different structures, so they can all have their own definitions of these things... But I do think that there's a negative connotation towards juniors, that is like, you're trying to escape that... Like, "When can I become not a junior anymore?", and it seems like the goal posts are always moving. So tricky things, for sure...

**Nick Nisi:** I think that it can be detrimental to call yourself a senior, too. I know that when I "earned" that title, I felt like I lost permission to ask stupid questions, and I think that that put me into a period of burnout for a little while, or impostor syndrome took over, which led to burnout. I think that it can be dangerous in that sense, too.

That was just me coping with that. I know I can ask stupid questions, and I do regularly, but it really felt like "You're a senior now, you shouldn't do that" or "You should know this..."

**Jerod Santo:** Right. Cool, interesting stuff. Well, a fun little diversion from TypeScript, but you know, it can't be all a TS Party; we had to work some more stuff in here. That being said, I do want to promote our call-in line. We would love to hear listener voices on this show; that's one of the reasons why when we re-launched we expanded the channel. We want more voice, whether you're a junior, or a senior, or just a little coder, or a big software engineer... Whoever you are out there, we wanna hear from you; let us know what you think, and you may even hear your own voice on a future JS Party.

The number to call is 888-974-CHLG (2454). Hit extension one for JS Party, leave your name, leave your comment... If you have a question, or maybe you have something to say about TypeScript that didn't get represented and you want that played in a future show, maybe if you have a great way to distinguish between junior and senior devs and you wanna tell us, call that number and leave us a message; we will receive it, and you may hear your own voice on an upcoming episode. We would love to have even more people at this party.

That is it for today's show. Chris and Nick, thanks for hanging out with me, thanks for teaching me about TypeScript, and... That's all, folks; you don't have to go home, but you can't stay here.
