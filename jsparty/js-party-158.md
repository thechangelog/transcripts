**Jerod Santo:** Hello out there! Welcome to JS Party. It's 2021, we are here! I am Jerod, I'm your internet friend, and I'm joined - not as always, but as often - by one of my internet friends, Nick Nisi. He's in the house. What's up, Nick?

**Nick Nisi:** Hoy-hoy!

**Jerod Santo:** Hoy-hoy to you. We are joined by a special guest today, Jason Miller. You may know him as @\_developit. He is making the web faster at Google, he's the creator of PreactJS (the p very important there), and... He's on the podcast, so welcome, Jason.

**Jason Miller:** Hi! I'm happy to be here.

**Jerod Santo:** We're very happy to have you, and we are happy to talk about your new thing. We'll talk about Preact by proxy, because it's involved in WMR, but Preact was not what prompted the call; WMR is. WMR is a cool, tiny little all-in-one development tool for modern web apps, which brings a question to my mind which I'll ask in a second... But the first question--

**Jason Miller:** I know what that question's going to be...

**Jerod Santo:** Well, I've got two questions queued up, so I guess you can guess which one's which. The first one is "What does WMR stand for?" and I know that that's not controversial, but it's ambiguous, because you're not really sure yet. You've got some multiple things going on... Tell us what WMR stands for, Jason.

**Jason Miller:** Yeah, I think I remember what the team decided on... To say it was an argument would be a miscategorization. It's more -- you know the npm header, how they scroll through random definitions of what npm might mean? We essentially just have a joke where we continue to do that in our chat. So I think the dry, boring version is originally I started this project as a joke, and the joke was it was going to be called Warm Module Replacement, which is...

**Jerod Santo:** \[00:04:28.24\] Not quite hot.

**Jason Miller:** Like, less hot than hot module replacement... \[laughter\] Like, it's module replacement that you can touch... I don't know. It seemed funny at the time. And the npm name was free. And then we spent a week or two trying to come up with a better name, and failed. So we called the company Apple -- or, we called the project WMR. \[laughter\]

**Nick Nisi:** This is probably something that we can help out with...

**Jason Miller:** \[laughs\] There's a lot of funny ones. I forget what the one -- it was like "Wet Module Replacement", or somebody suggested "Web Modules Runtime", which, that feels kind of reasonable.

**Jerod Santo:** Right. That one's almost too normal. So here's what we did, Jason - we saw this conundrum, and we're fans of the npm scrolling title... Or not scrolling, but random acronym replacement... And so we thought we'd help you out. We assembled a crack team of marketers and came up with some alternate replacements for you. So we're gonna pitch you a few, and you let us know if you like these. The first one is Windows Me Returns.

**Jason Miller:** \[laughs\] Yeah, I would take that.

**Jerod Santo:** It's a good one. Whales Meet Rodents?

**Jason Miller:** Okay...

**Jerod Santo:** It doesn't make any sense at all.

**Jason Miller:** Well, there's a programming language that's a rodent... Is it Go?

**Jerod Santo:** That's a gopher. And a gopher is a rodent, so I think you're on point there, yeah.

**Jason Miller:** If the gopher is a rodent -- or is it a type of... I don't know.

**Jerod Santo:** I do believe it is.

**Jason Miller:** If a capybara is a rodent, then a gopher is definitely a rodent.

**Jerod Santo:** I think they're both of the Rodentia family. I know nothing about science, so... \[laughter\]

**Jason Miller:** \[unintelligible 00:06:01.29\] They've got big teeth, I don't know.

**Jerod Santo:** It's the genus, or a phylum? I don't know. I don't know what's going on here.

**Jason Miller:** Is it a platypus, or is it not a platypus? That's all we care about.

**Jerod Santo:** A couple other ones for you... WMR - Wicked Mr. Renderer...

**Jason Miller:** Yeah, I like that one.

**Nick Nisi:** I like that one.

**Jerod Santo:** We tried a recursive acronym in the style of "GNU's Not Unix", but it didn't' work out at all. "WMR Means Reboot..." See, it doesn't even -- I couldn't even finish it.

**Jason Miller:** Nice... \[laughter\]

**Jerod Santo:** Where's My Rumba...

**Jason Miller:** Yeah... So that would make sense, because when I googled this, after we created and launched the project, I was seeing if we had gotten any form of notoriety... Apparently, WMR was already a thing, that I wasn't aware of, called "Where's My Refund", which is like a service offer by the IRS...

**Jerod Santo:** Oh, wow.

**Jason Miller:** I'm not American, so I didn't know that.

**Jerod Santo:** It's like your tax returns, or something...

**Jason Miller:** Yeah, so...

**Jerod Santo:** Okay. Well, the last one - this one is yours, Nick... Waldo's My Roommate.

**Jason Miller:** \[laughter\] Do you actually have a roommate named Waldo?

**Nick Nisi:** We found him. No...

**Jerod Santo:** It actually answers the question also "Where's Waldo?" He's right here... \[laughter\]

**Jason Miller:** Nice... \[unintelligible 00:07:04.06\] I guess he just got over it.

**Jerod Santo:** So what we can do is when the show goes live out there on the internets, we can put a poll out and find out which of these are the best WMR, and then you'll be required to use that from here on out. I think that's a fair --

**Jason Miller:** Just set up a bot to PR the headline change in the readme every week?

**Jerod Santo:** Just constantly, yeah. Or we'll just have Nick do it.

**Jason Miller:** Yeah.

**Nick Nisi:** I've got the time...

**Jerod Santo:** He's got the time... \[laughter\]

**Jason Miller:** This is like \[unintelligible 00:07:34.03\]

**Jerod Santo:** Nick will write a Neovim plugin which writes a bot which submits the PR. That's the way Nick does it. Okay...

**Jason Miller:** Nice.

**Jerod Santo:** Well, I would say enough tomfoolery, but there'll probably be some more upcoming... But in-between the ridiculousness, let's get some actual content out there. WMR - who cares what it stands for...? As I said, your little tagline is a tiny all-in-one development tool for modern web apps, and so that begs the question then "What is a modern web app?" That's the one you knew I was gonna ask, right?

**Jason Miller:** \[00:08:10.21\] Yeah, that's right.

**Jerod Santo:** So have at it... What's a modern web app?

**Jason Miller:** So there's probably two answers for that... One is it's a web app that you're building now, because modern is a timeframe, and that timeframe is recent.

**Jerod Santo:** Okay.

**Nick Nisi:** That's a good, safe answer.

**Jason Miller:** Yeah, that's the lame answer.

**Jerod Santo:** Right.

**Jason Miller:** The maybe more appropriate answer is it's a web app where the thing that you have front of mind and the constraints that you have on your mind as you develop are modern browsers, modern UX, modern dependencies... Sort of this general assumption that this is not going to be trying to use code from the late 2000's, this is not going to be trying to service necessarily browsers from the late 2000's... Certainly, it would be written in modern JavaScript, which -- yeah, another recursive definition there, but... You know, ES2017 or newer kind of thing.

And the most important one, I think, at least for me, is the toolchain is optimized to give you the best experience possible for ES modules, and TypeScript, and some of these things that are now only present on npm... But there are still large swathes of modules on npm that have not moved over to those things, or that sort of exist from an era prior to all of that.

So in a typical bundler setup, especially in like an ahead-of-time bundling setup, generally there's layers of abstraction added in. So you import a thing and you're not actually importing that thing, you're importing a compiled version of that thing... And WMR basically takes the stance that some of those layers of abstraction actually hurt newer, more readable dependencies in code you might write in order to support older, maybe less readable - and in WMR's case, we hope, slightly less important to your project - modules.

So the idea is "Okay, well, let's build a tool that tries to still sort of support some of the older stuff, but the focus, if we have to choose, the focus is always going to be on make the more recent/newer stuff as good as it can be. So don't detract from it just in order to have compatibility."

**Jerod Santo:** So if you were to liken it to something that already exists, just for context or for frame of reference, what kind of a thing is it? Would you say it's kind of like a Create React App, or it's kind of like a Next.js, or it's kind of like a WebPack? What's it kind of like, that people would be like "Okay, it's like this, but different"?

**Jason Miller:** It's weirdly probably closest to WebPack, but that might be sort of an awkward comparison. In terms of existing tools, it's closest to Vite, or Vite \[Veet\]. I never got clarity on how that's pronounced... Vue's new bundler, and Snowpack. And also es-dev-server or modern-dev-server; I can't remember which is the more recent name. It exists in that space of like ESM-first bundlers/non-bundlers.

**Jerod Santo:** Gotcha.

**Jason Miller:** And I guess the thing that makes it maybe sort of like WebPack in that regard -- actually, I shouldn't say WebPack; it's closest to Parcel in that regard. WMR really, really, really tries to remove itself from your field of view as a developer. So it tries to sort of stay out of the way. Normally, when you start a project with a bundler, like a WebPack or a Rollup, your first job is configuring the bundler. You know, tell it the semantics of your project, and your file structure, and what you're trying to build. There's good reasons why bundlers allow that... Rollup, and WebPack are super-versatile tools.

**Jerod Santo:** Right.

**Jason Miller:** \[00:12:08.11\] But that's also -- as somebody who is a fairly severe ADHD sufferer, and who does a lot of prototyping to manage to be productive, despite all of those "Stop. Configure..." Those are all steps that kind of get in the way of you actually starting a project. Or at the very least, they eat into the time that you might spend... You know, if you have two hours to prototype something, you really don't wanna spend the first hour and a half configuring your bundler. I've definitely failed hackathons for that very reason.

**Jerod Santo:** So it's very much about greasing the skids, right? Like, "Just get me running." No config, or out-of-the-box, preconfigured for you, don't-make-me-think style tooling.

**Jason Miller:** Yeah. And the interesting take here - because we have Microbundle, which is basically written by the same people... Obviously, Microbundle is a configuration for Rollup that you would install as a command line tool, so you don't have to also install Rollup... And that one is very strictly like "We're just Rollup, but with heavy-handed defaults that make sense for a lot of modules.' WMR kind of tried to flip that on its head. We do support configuration, which is already different from Microbundle... But instead of basically saying "We're going to give you what we think is right out of the box as defaults", what WMR does is it tries to extract all of the possible configuration defaults from what you write. So rather than saying "This is how you reference entry modules in your HTML; this is how you bundle and then reference stuff from HTML." Instead we flip that on its head and we say "We will look at your HTML and find the modules that you have referenced there, and that's how we'll figure out how to bundle your application."

**Jerod Santo:** Gotcha...

**Jason Miller:** So Parcel was definitely a trailblazer in this regard. They still do this very well. They really try and give you a bundler that incorporates the web's defaults as its defaults, so you don't have to tell the bundler "Yes, I am building for the browser. Yes, these are the semantics of our browser." Those are things that you can actually just know upfront in a bundler. And it even tries to take that -- I could probably get into the semantics of why this ends up mattering later, but... You know how WebPack has the optimized chunks configuration, and you can tell it "Oh, collapse such and such stuff if it's below this threshold..."

**Jerod Santo:** Right.

**Jason Miller:** Rollup doesn't have that, but we grafted it into Rollup, which is what powers WMR's production output. For CSS files, as an example, WMR will try to not produce CSS files below 1 kb, because in general, that's going to be the point at which the headers for your request are approaching the size of the response body itself, and we start to see really, really diminishing returns in terms of gzip compression, which has a threshold of about 1k... So it basically tries to work back from compression thresholds, TCP window sizes, all these sorts of things that like "Oh, there's actual specifications that define these things", or at the very least there's convention that defines these things - why don't we just have that be what defines the defaults for the tool?

So it really tries to stay out of your way not by telling you what to do, but by finding concrete -- I don't wanna say evidence-based; I feel like that's giving it too much credit. Finding concrete, obvious defaults that you're gonna tell the bundler at some point anyway, when you're doing your optimization... And just saying "Yeah, we're just gonna do that by default. That's a logical default to have."

**Jerod Santo:** \[00:15:51.03\] I'm listening to you talk about it and it almost sounds like akin to a compiler doing type inference, where it's like "I think you must be using an int right now, so I'm just gonna infer that that's what it is, and not make you declare it, like you might in some other typed languages." This is kind of like config inference, or style inference, to a certain degree. Not trying to give you too much credit again, but it's kind of akin to that. You're like, "Well, find out what they're doing, and also what's the best practice here", if they don't wanna defer from that or divert from that, and just do that... But also like what style are you using - we'll just go ahead and just do that.

**Jason Miller:** Right. So the similarity there is actually pretty reasonable. You could almost think of WMR as -- let's say in production mode only, because development mode is this whole other story... But in production mode, it's almost like WMR looks at your codebase and generates a Rollup config that is optimal for that codebase and then runs it. That's actually sort of how it works. It's a little bit more complex and contextual than that, but at least in terms of our production output; you can kind of think of it like that.

In a normal bundler, you would configure entry points, and your minifier, and your Node modules resolution, and all the weird "Oh, but React is modules commonly used from ESM, with named imports, but it doesn't have any, so patch that." Instead, we just do all that on the fly, based on the code that you wrote. You already code that essentially said "Oh, import \[unintelligible 00:17:23.06\] from React is." So we don't need configuring to know that you're trying to use named imports from a CommonJS module; it's right there in the code. So that's the one angle.

And the other whole piece of this is during development, WMR doesn't actually really bundle at all. This is where a Snowpack and Vite and modern-dev-server comparison comes into play.

**Jerod Santo:** Right...

**Jason Miller:** WMR -- it's really similar to those tools, and to be honest, throughout the entire development of this project, since we started it in May (April, May), we've been kind of discussing stuff with the authors of those tools behind the scenes, saying "Hey, at some point maybe we should just consolidate these things." But I think the logical thing, and the thing that's gonna be the most beneficial for the ecosystem right now is to just kind of let these flowers bloom for a little bit, and then see what are the similarities, what do we end up duplicating, how can we collaborate better...

So what we try to do with WMR is working back from that model of "In development you are not bundling. We are just shipping modules over the wire as HTTP requests", we try to optimize the pathway for every module, from disk to browser. So instead of pulling a module off disk, running it through Babel, running it through Terser, or running it through a source code transformer that finds import statements and rewrites them because bare imports don't work in browsers - instead of doing all those steps, generally in sequence, generally with different tools, we actually wrote our own Babel-compatible AST transformer, and Rollup-compatible plugin API.

So if you ever built a Rollup plugin, that whole API is actually supported by WMR, even though WMR is not running Rollup. We just call all the same hooks in the same order, we expose the same \[unintelligible 00:19:17.26\] But at the end of the day, what it means is we read a module off-disk and put it in memory cache, we pass it through, at most, one AST transformation that will parse all the code, but in almost no cases will it stringify all of the code. It's only going to reserialize mutated AST nodes, so it's extremely fast... But actually, in most cases no AST transformations. We're using Guy Bedford's es-module-lexer to do basically token-based transformations. We don't make a whole graph of your code, we literally just know that "Oh, this is an import statement. Here's the string that was imported. What are you gonna do with this string?" And then that all feeds back through this Rollup-based plugin API, or Rollup-compatible plugin API.

\[00:20:04.19\] But the idea is, basically, WMR should get modules into the browser roughly as fast as it can read the module off disk, and stream it to the browser. It really shouldn't be adding overhead to each request in order to do transformations. And that originally actually just comes from -- I work on Glitch a lot; it's cheap... It's just a habit I've gotten into. And Glitch has a static mode, but the static mode just supports JSX, or TypeScript, or bare imports, or ES modules, or Node modules, for that matter... Which is just slightly too limited.

So originally, I started WMR as like a better Glitch static; basically, a static file server that does some intelligent stuff with JavaScript, but very little. Just what's necessary to make it usable. So that's kind of the premise there.

That's also where this whole concept of not having to install dependencies came from... So it's a pain in the butt to manage your package.json; and especially on Glitch, every edit you make to the package.json redownloads all the Node modules via Pnpm and populates them in the Node modules directory.

\[unintelligible 00:21:18.21\] if you don't run npm install and you import a package in your code, will just go and fetch it for the registry, and stream it to disk. And interestingly, we stream it to disk knowing that you're only gonna use it as a source code package, so we don't run package install scripts, because that's unsafe; we don't even write temp files, test files, unused source stuff to disk. You basically get a Node modules directory that only contains package.json's JS and TS files, and TypeScript definitions... Which is kind of nice.

**Jerod Santo:** Something about that just sounds like almost too good to be true kind of a thing... \[laughter\]

**Jason Miller:** There's definitely modules that won't work...

**Jerod Santo:** I mean, I'm sitting here thinking like "What could go wrong...?" Something has to be able to go wrong there, right?

**Jason Miller:** Yeah. There's definitely some pushback we got in the initial announcement saying "Oh, we're doing streaming install." Because I think people think "Oh, streaming install. They're running npm install in the background", and we don't actually even use the npm client at all, in any form. This actually does --

**Jerod Santo:** So you're just literally fetching the source files, and that's it.

**Jason Miller:** Not even that. So it's fetching the tarball direct from the npm registry...

**Jerod Santo:** Okay.

**Jason Miller:** ...and it streams it. And as each file in the tarball passes through our streaming untar and ungzip mechanics, those files get analyzed and conditionally written to disk. So if you have something like a shell script, or an executable, it never even makes it out of memory. So I don't wanna say it's secure, but it definitely avoids all the footguns that would immediately jump to mind for like "Hey, streaming autoinstall." It's also just really fast. Basically, we can get your dependency installed and shipped to the browser, whatever file from it you're importing, as fast as we can get that tarball from npm, because it's streaming.

**Jerod Santo:** It sounds like an awesome feature. It kind of goes along with what you were talking about with the inference, where it's like "You're using this? Okay, we'll get it for you", and that's it.

**Jason Miller:** But we know not only are you using the Preact package, but we know that you're using it from WMR, and we know that - as an example, the Preact package has an export map, which defines what is externally accessible, what files are externally accessible. So we know that in a properly spec-compliant bundler you can't import files that aren't in the export map, so we just won't write those files to disk, because they frankly don't exist... Unless they're TypeScript definitions, because TypeScript kind of made up its own thing there; but that's fine, it's very few files.

But we can sort of infer, "Oh, this isn't just a random package. This is not a command line tool that you're installing. It's not arbitrary code. It's source text that you're gonna wanna import."

**Jerod Santo:** It's specific.

**Jason Miller:** \[00:24:01.28\] Yeah. So when we do that, again, with the inference thing - we stream it to disk, and we send you the file... Because you're waiting on this request in the browser, the browser will either have reloaded, or hot module updated, or whatever; you're sitting there, waiting for this dependency to download... We get the dependency to the browser right away; it runs through an extremely lightweight Rollup pass, but doesn't do any minification, doesn't do any \[unintelligible 00:24:26.29\] anything like that. It basically just concatenates modules together that wouldn't have been individually addressable anyways, so that we're not shipping thousands of ES modules over the wire, but as close to zero milliseconds as we can get there...

And then behind the scenes, after you've actually requested that module and after it's been loaded in the browser, we then schedule it to go off into a minification and Brotli compression pass... So if you import Preact, you'll get Preact right away, but then after a second(ish) or two of idle time, WMR will have already generated a hyper-optimized version of that dependency and written it back to disk, so that the next time you request it, you get the optimized Brotli-compressed version, but just straight from disk; there's no overhead on the request itself. It's a funky setup, but...

**Nick Nisi:** You said that when it goes to the browser in that - either development or production build; I guess probably both - it's just basically the concatenated values. It's not actually running like ES modules in the browser. Is that right?

**Jason Miller:** So it does use native ESM for everything, yeah. Actually, that's one of the reasons why the Rollup bundling process is done even for the unoptimized version; that's where we convert CommonJS and UMD to ESM.

**Nick Nisi:** Gotcha. I'm a little behind on using direct ESM, as I do it through TypeScript... And I ran the create-wmr project and played around with that a little bit... It looks like there's kind of a mix of -- like, I'm specifically looking at the imports, and there's some with file extensions, some without, and I was wondering, is it doing rewrites of those for me automatically, or...?

**Jason Miller:** Yes. And that has shaped a little bit since this tool was originally created... So we always have rewritten bare specifiers, just because the browser is gonna -- it just is a syntax error in the browser, and there's no way for us to patch that in on the frontend. So if you do import foo (the module foo), we will rewrite that to -- I think it's a URL like /@npm/foo.

**Nick Nisi:** Okay.

**Jason Miller:** It's a pattern, it always looks like that, and you kind of get used to seeing it on the frontend. And in your browser's network console you'll just see foo, because it shows the base name, not the path name.

In the case of something like TypeScript, or if you're using JavaScript files and you don't want to use file extensions, WMR in its current state will infer the file extension and correct it. So in the browser, if you imported /utils, and the file on disk was called utils.ts, in the browser I believe you will /utils.ts.

**Nick Nisi:** Oh, really?

**Jason Miller:** I'll have to check if that's the case.

**Nick Nisi:** Interesting.

**Jason Miller:** Yeah. Basically, that happens because, as I'd mentioned, we support the Rollup plugin API during development. Originally, we did not do file extension inference. So if you wanted to import a file that had an extension, whether it's TypeScript, JavaScript, TSX, whatever, you just type the file out with the extension.

I actually personally really like that approach, because I know that behind the scenes that means that WMR never ever has to read a directory, or call into Node's file system API to check if something exists. Basically, when you do an import, \[unintelligible 00:27:52.06\] That's it.

**Nick Nisi:** So even if you were writing TypeScript, you would do a .ts extension for all of those?

**Jason Miller:** \[00:28:01.05\] Yes. Or you could also use a .js extension, but that's a \[unintelligible 00:28:02.28\] .js extension when there's a .ts file on disk, it's the .ts file.

**Nick Nisi:** Okay.

**Jason Miller:** But that was actually one of the reasons why we ended up going down the road of implementing file extension inference...

**Nick Nisi:** Yeah. So you kind of treat it like \[unintelligible 00:28:18.29\]

**Jason Miller:** Yeah, exactly. You don't have to use it, and it is faster if you don't use it, but you can use it. One weird case where this actually rears its head is if you have a script tag in an HTML document, the correct thing to do in WMR is to include the full file extension of that script, regardless of what it is. If it doesn't exist, don't put it; if it's a .tsx, it would /foo.tsx.

We're trying to steer people towards the spec, which says "There is no magic. A URL is just a URL. There is no such thing as inference." But we also, to your earlier point - we are aware that a lot of people are used to the semantics of things like Create React App, which are essentially the semantics of WebPack. So as kind of a way to bridge that gap, we do the inference.

There's a debug environment variable you can set to 1, and that will print out all of the plugins that got executed on every request, and you can actually see in real-time "Oh wow, I just roundtriped through the file extension resolver three times, just because I didn't wanna type .tsx." So we won't show the performance stats on it, because it's on a per-request basis; it's very minimal. But you can still see "This is what I've opted into by choosing that thing."

The other piece of this is I think the file extensions thing, especially for TypeScript, is still just sort of in the last stages of settling out. The nice thing with specifying full file extensions is at least in VS Code - and I think JetBrains - if you have any imports that have a file extension in your module, and you use the autoimport thing, like you click "Suggest the results" and it imports, that new import will also use a file extension. So it's smart enough to see "Oh, this person is typing file extensions out." I don't think it does it on a project-wide basis by default yet, which would be like a nice next step. That's sort of \[unintelligible 00:30:20.29\] And I think right now the template -- I think we ship .js by default.

**Nick Nisi:** Yup.

**Jason Miller:** Although TypeScript is supported by WMR itself by default, we don't scaffold it by default.

**Nick Nisi:** Yeah. I noticed that there was a tsconfig in there that it created... And then I just went into -- there's a header.js file, and I just renamed it to header.ts, and it still worked.

**Jason Miller:** Yeah. That's actually an interesting point. WMR -- obviously, there's a whole bunch of stuff that it's doing, its goals, or whatever, but the other piece is... This is coming from the Preact team; and the Preact team - we still by and large write everything in vanilla JavaScript, but over the past year or two have all but replatformed onto JSDoc-based TypeScript that is actually just JavaScript, to the point where WMR itself is written in JS and JSDoc, but is strictly-typed...

**Nick Nisi:** Gotcha.

**Jason Miller:** ...like a type error breaks the build... Which is less crazy than you'd think, because there's this clever thing where you can stick all your types as ambient types in the source directory, and then just reference them without even having to import anything from your JSDoc annotations... And the TypeScript team has been really good over the past year about extending the JSDoc functionality and finding that nice balance of JSDoc that isn't entirely TypeScript-specific... So we're all on board on that. Even the main Preact codebase right now is basically being rewritten to use this strict variant.

\[00:31:56.28\] So we kind of wanted to scaffold something that shows people "Hey, you can turn on checkJs and get all these lovely compilerisms that you wouldn't expect from a standard JavaScript environment, as long as you're using an editor that cares about TypeScript."

And then the other piece is we support CSS modules and some import prefixes. You can do -- it's url: and then the path to something, and the thing you import is the URL of that file... Which I think Parcel supports the same thing.

**Nick Nisi:** How does TypeScript handle an import that looks like that?

**Jason Miller:** That's what the tsconfig is actually for.

**Nick Nisi:** Oh, okay.

**Jason Miller:** So when you install WMR -- or actually, it's not the tsconfig. When you install WMR, we ship ambient types in the WMR package that define ambient module definitions using wildcard statements for url:\* Same thing for CSS modules - if you import \*.module.css, the value generated by the import will be an object mapping of class names.

**Nick Nisi:** Nice.

**Jason Miller:** And again, we are providing you the thing, and it's technically configurable. You can turn this off, but that's the default, so we provide you the type definitions for that default... Which is nice. It's something that I think we always wanted to do in Preact's CLI, but we didn't have the .module.css thing, that convention... And we maybe couldn't guess as much about the type of code you were trying to write to be able to infer these things.

**Break:** \[00:33:23.00\]

**Nick Nisi:** So as I mentioned, I was playing with the create-wmr, or the npm init WMR, which was really cool, and playing with the project that it creates there. I really love just how, like you said, I wasn't spending any time configuring things, I was just going. And I wanted to use TypeScript, so I renamed the file to .ts, and it just worked. That was really awesome.

But the create-wmr package, or the project template that it uses ships with Preact, and I was curios about the relationship between WMR and Preact. Is that a requirement, or can it really work with anything? Tell us a little bit about that.

**Jason Miller:** It's definitely not a requirement. The struggle here is we wanted to build something that met a need that we had on the Preact team, which was like, Preact is tiny, and it's really good if you wanna do a lightweight project, so where's our tooling for that?

**Jerod Santo:** Right...

**Jason Miller:** We have a WebPack-based tool that's used in production by a bunch of high-profile sites, but that's the heavyweight tool. Where's the prototyping tool? So that was the one hand. But then the other hand is myself and a bunch of others, who just happened to be on the Preact team. We've been kind of on the sidelines in the bundler ecosystem for a little while, at least leading through 2019 and 2020... You know, prodding people, kind of trying to get consensus on a direction that we can move in to further this idea of writing modern code and shipping modern code, and getting these things right.

I feel like everybody in the community at this point is at least mostly rallying around like "We want to start shipping modern code, given that it's supported in the overwhelming majority of browsers." 95% of browsers support ES2017. So actually the thing that my Google work has been focused on for the last two years has been going and finding all the chokepoints there, and trying to do the research and outline a solution that might not be the perfect solution, but it might be the way forward... So part of that is trying to convince folks to use export maps, the new Node feature, as a way to publish modern JavaScript packages.

\[00:36:23.03\] So you can publish a package that has modern and legacy JavaScript, and now bundlers have a way to use one if they know how to get to it. And there's various reasons why -- in the article that I released in the December and the video that went along with it, I kind of explain how that could be justified. Node started supporting export maps in 12.7 (or 12.8?) and that version of Node supports ES2019. So if you ship an export map, it only works in a version of Node that supports modern JS, and thus you would assume that that code would be potentially modern JS, because it's a modern package.

So to kind of extrapolate that - okay, well what if bundlers also jumped on that same assumption? Could this be finally the modern field that we've been not able to standardize for five years? So that and the timing of browser support kind of converging on that 2017 baseline - there was a very clear need for a tool or really a bunch of tools to basically stake the claim here, saying "Actually, it's not just that we can ship smaller bundles using modern code, but also, we can do a better development experience." We can ship readable code in development that's not one line of a val for a 2 MB module.

So the non-Preact part was just getting a tool out there that demonstrates, in addition to what Snowpack and Vite and some others have demonstrated, getting a tool out there that demonstrates that there is even more that we could do if we double down on this. WMR ships HTTP/2 out of the box; on the overwhelming majority of machines it will set up certificates for you, and basically at some point you will get prompted to enter your administrator password, which I know scares the crap out of people (rightfully so), but this is using literally the de facto standard module that implements this thing. It's relatively safe, all things considered... But we ship that out of the box, because we know that H2 with ES modules is the fastest and best experience during development. And then also showing \[unintelligible 00:38:29.04\] on ES modules, things like hot module reloading and asset references can also get easier. Hot module reloading is just you dynamically import the current module with a query string parameter to bust the cache. That's it.

There's some weird logic that we do right now to recache exports onto the old module, but even that we're actively pursuing avenues for getting rid of that piece. And all this to show not only can we ship something that's really good, but also, we can ship something that's fairly easy to understand.

In here, I said dynamically import the current module and replace it... You can kind of picture how that would work - dynamic import, \[unintelligible 00:39:12.04\] And that's roughly accurate... \[laughs\]

**Jerod Santo:** Yeah...

**Jason Miller:** Minus some weird --

**Jerod Santo:** A close enough approximation about what's exactly happening.

**Jason Miller:** Right. So there's just a lot less guesswork between you and the actual generated code that you run in the browser, which is potentially less surface area to have things go wrong in.

So then getting back to the Preact thing, our goal with this was basically keep WMR as agnostic as it can possibly be to Preact, so that all of the little pieces inside WMR -- because WMR is literally just built as like 20 Rollup plugins and a couple of standalone libraries, that we haven't published yet, but they're all independent... Keep that totally separate, so that Vite can grab the plugin API and use it, or... I've actually just this morning been making the rounds, looking at all of the export maps implementations in these bundlers, finding some issues with them, and it's very clear that -- it's not to say that WMR gets this right, but... Having a package, possibly WMR's export maps implementation, that just gets extracted out and published to npm as like a "Here's how you resolve export maps" type package, that's valuable.

**Jerod Santo:** \[00:40:30.14\] Yeah.

**Jason Miller:** And it would be really shameful for us to do the work of building this and hopefully getting things correct, but have it be weirdly Preact-specific, right? That doesn't make sense to me.

So we try to keep the core, and essentially everything about WMR, Preact-agnostic... Except when it came to scaffolding. So by default, we scaffold the JSX support, so that it's actually generating type templates... Which is unique, and I don't know that that's been done elsewhere before... But again, it's that modern-first mantra.

**Nick Nisi:** Interesting.

**Jerod Santo:** With the modern side, yeah.

**Jason Miller:** Yeah, exactly. But the tag templates, by default, they are bound to Preact. It takes two seconds to rebind them to another library, like Vue or React, or your own custom thing, but the default is Preact, just because we have to serve both needs.

And then the create-wmr package, which - that was built the day before launch, so that people could use the tool easily... But we create-wmr package scaffolds a Preact app because that's the one that we were most confident people would be able to poke around with and try -- even if you're not a Preact user, even if you're a React user or a Vue user, you can get a feel for it... And it lets \[unintelligible 00:41:47.27\] hot module reloading, and some things like that.

And then the last piece is WMR in about the last two months leading up to the launch -- originally, we were gonna launch it in August, and we kind of had to sit down and decide "Oh, you know what - maybe there's more we can do here. Maybe we can ship more than just a good hot module replacement solution."And we kind of went back to the drawing board and added things like the prerendering and the CSS optimization stage... And a lot of that, a lot of the reason why you see Preact as the default now is because Preact was the testbed that we used for all of this.

So create-wmr will scaffold a project that when you do wmr build or npm run build, you don't need JavaScript to run the output at all. And Preact in the scaffolded thing is how that works, but the API is actually completely independent. Prerendering in WMR is just you export a function called prerender from whatever the first script tag in your HTML file, and that function -- it's an async function, so it returns a promise resulting into an object, with an HTML string property, and the links property that is an array of strings. So the HTML is the stuff that you prerendered, however you chose to do that; it could just be returning a string if you wanted... But you can could see how that would work in Vue, and React, and Svelte, and whatever... And then the links property is, if you want, other URLs to then go and prerender. WMR won't prerender if it's already prerendered stuff, but that's actually the guts of how our automatic prerendering works, and it has nothing to do with Preact. It happens that Preact can use that in a way that is extremely optimal; we don't ever have to parse the HTML, because we generated it, and the thing that looks for links happens during the generation of the HTML... But it's just an array of strings.

So anybody -- I think there was somebody working on a Svelte test for this... And we've got one bug we need to fix for having Svelte templates, but... You could easily adapt this to any framework. So my hope would be like -- because WMR supports config files, and anyone can create their own replacement for create-wmr (it's a really simple package), somebody could create a package that scaffolds a WMR-based React app, or Vue app, or Svelte app. And it would be just as much of a first-class citizen as Preact, it just would have a one-line config file that just says "export default react plugin".

**Jerod Santo:** \[00:44:24.20\] Right. Just minimal changes. So somebody could create that, and somebody will probably create that...

**Jason Miller:** Yeah, that's my hope.

**Jerod Santo:** ...for sure.

**Jason Miller:** Or fork WMR. But forking WMR - we lose out on a lot of the shared momentum aspect and collaboration aspect. Not to say that WMR is necessarily the place where it should happen, but the hope was like - if everybody is using plugins on top of the tool, that we can make the tool better, and at some point, when we take all the pieces of the tool and publish them to npm as independent things, everyone benefits.

**Jerod Santo:** It kind of leads me to a meta question around collaboration versus competition, and the decision here to start a new tool... Of course, it was like "Well, Preact needs something. We need our story", and so it makes sense that the Preact team would make their own story, and I like how you're building it in a way that can be reused and collaborated as much as possible, but still be Preact's tool. But like you said, there's Snowpack, there's all these other efforts out there, and the decision was "We're gonna build at this level of abstraction. We're going to experiment, so that there's more things."

But then for example the export maps level, you're like "Well, if we extract this into a library, everybody who's doing Vite, or doing these other tools, could use the export maps library, and we could collaborate at that level." How do we know which layers of abstraction is like "We need a thousand ideas to flourish", and how do we know "Hey! One good idea, we can all collaborate. Let's team up"? Where do we draw those lines? It seems to me like a very difficult thing to decide.

**Jason Miller:** It is an extremely hard problem, it is a distributed problem. I have this terrible habit of throwing myself at distributed problems... For some reason, Google seems to be willing to keep me on staff partly to do that... \[laughter\]

I mentioned I was making the rounds, looking at everybody's export maps implementations. Rollup just landed it. I think Lars from the modern web server implemented it in Rollup. Yay. But part of the reason why I'm doing that - and this is not to say that I'm the most objective person to be doing this, but I'm hoping that I can go and do the survey, write the doc that gives the lay of the land, publish that, and then whether or not WMR is the right implementation from which to derive the common implementation, I will have one place that summarizes all of the current implementations.

I think the difficulty is always with the thing you said, which is like -- okay, export maps is an easy one, because that's a spec; that's something that Node put there, so obviously there's value in a shared implementation of a spec, and a reference implementation, essentially... And bundlers aren't necessarily able to use Node's implementation because it is not independent of Node, so it's not technically a pure reference implementation... And that's not to disparage it, but it just...

**Jerod Santo:** Factual.

**Jason Miller:** ...fits their need. Yeah. The other things are hairier. So we wrote that custom AST transformer that is largely Babel-compatible. What do we do with that? Is that a WMR thing? We literally built it to optimize WMR's performance while still supporting Babel plugins... But does the community need a potentially lighter-weight Babel alternative? Not sure about that. My default answer would be "No, that's actually something we don't need, or potentially don't want." Yeah, that gets tricky. And all these things were also written in JavaScript, and right now there's that whole move towards "Okay, could we use a faster language?" We even have an experimental PR from a while back that uses esbuild for JS transformations and minification, which was very fast.

**Jerod Santo:** \[00:48:11.07\] Which is a Go tool, right?

**Jason Miller:** Yeah, it's written in Go. It has a great JavaScript interface. We used it prior to it being pluggable, but for our need -- we use Terser for minification, and we use this custom Babely thing for transformation. It does both of those things, and it does them faster than both of those things, by a lot.

So I think there's potential there. But we didn't want to -- this is actually the reason why WMR wasn't published as "WMR and 16 packages that power WMR." There's lots of packages in there that are independent and publishable, but the rationale or the logic for why we would publish those things as independent is not clear, or we already know that we don't want to. So some of the stuff that's in there is stopgaps while we wait for the ecosystem to settle, so that we can use someone else's thing.

**Jerod Santo:** Gotcha.

**Jason Miller:** Yeah, I don't have a clear answer on that.

**Jerod Santo:** Not clear answer; that's a difficult decision, and like you said, it's a distributed problem, so it's not as if you just get to decide that. Everybody collaborates or doesn't, and they make their decisions, and this team makes that decision, and sometimes it's the right, sometimes it's the wrong... And it's just an interesting mind space to consider those things. But that's meta. Bringing it back down to ground floor here... For somebody who's just like "Oh, WMR looks cool. I really like how you don't even have to --" I was actually playing with it as well, with Nick, and I was like "I haven't seen this npm init thing where like I didn't even... I expect to \[unintelligible 00:49:37.14\]

**Jason Miller:** \[laughs\] \[unintelligible 00:49:37.19\]

**Jerod Santo:** Yeah. Just for an emphasis on it, you don't npm install -g wmr, at all. You just init a new project; npm init wmr, and then your project name, and it just is done.

**Jason Miller:** And even the project name is optional. If you run npm init wmr in a directory, it will make the directory a wmr app.

**Nick Nisi:** Nice.

**Jerod Santo:** So cool stuff like that is what gets people excited. Go ahead, Nick.

**Nick Nisi:** I was gonna say, when I ran it and then CD-ed into the directory, it ran so fast, so I ran npm install, just assuming \[unintelligible 00:50:06.11\] \[laughter\] Then I looked in the Node modules directory and there was nothing there it was great.

**Jerod Santo:** Right. So lots of cool stuff, like ground floor, for people who are like "This is a pretty neat tool." What else is cool about it? And I guess before you answer that, it gives us breadth, right? So it says "From development to production." So there's the breadth of the tool. You're gonna use this to dev, but you're also gonna deploy production apps with this... But it doesn't give the scale. You've mentioned prototypes, you've mentioned hackathons... If I'm reaching for a tool tomorrow to build a modern web app, what kind of web app would I use WMR? And maybe where does it stop scaling? Or does it stop scaling? Is there a complexity? Like, if I'm building a modern Gmail, would I maybe reach for something?

**Jason Miller:** I'm building a modern Gmail right now with WMR, so... \[laughs\]

**Jerod Santo:** You are? That's hilarious.

**Jason Miller:** Yeah. Nothing to do with my employer, but just like...

**Jerod Santo:** \[laughs\]

**Jason Miller:** What I want is something that is not just a mail client, because I'm sick of just the mail clients; I want a work client, that has all of my tasks, and my calendar, and my emails, and my to-do's...

**Jerod Santo:** Oh, wow.

**Jason Miller:** ...and does time-based notifications, and stuff like that.

**Jerod Santo:** So maybe that answers the scale question. WMR is your tool, so of course you're gonna use your own tool. But if I'm not you, is there a scale problem or not? It's smooth for prototypes, but you could build a complex, multi-faceted web app with this thing?

**Jason Miller:** So there's two halves to this. The first is it's new, so like with every new tool, there's obviously always going to be warts. I don't know whether me not running into them is more because I know what the warts are, or maybe it's the other half, which is that I don't tend to be the person using the legacy packages. I mostly write my software, I don't install a lot of it... With the exception of UI toolkits, which was always the big challenge with WMR that we had to overcome... Because they're big, and early in the use, weird package semantics that aren't always correct... But those work in WMR at least.

\[00:52:10.05\] The other piece is the actual physical scaling of the development time approach of shipping ES modules. There have been some maybe not super-scientific experiments, and right now the answers we have is whatever the opposite of definitive is. We know that if you ship 10,000 individual ES modules, especially if you're using HTTP 1, that's going to be somewhat slow. And I'm actually in a unique position where I am building WMR on one hand with the Preact team, and we're relying on that... But then also, I'm talking to my V8 teams on the other side, who are investigating module streaming performance. So we're actually using this, and things that look like this in benchmarks right now.

**Jerod Santo:** Gotcha.

**Jason Miller:** So there's a bit of a cart and horse situation there form the performance standpoint for scaling up many thousands of modules... But even today, for fairly large-sized projects, the way that this constraint ends up working is that your npm dependencies actually don't scale one-to-one with the number of files on disk, because we do compile those with Rollup.

In a typical project you'll add a bunch of dependencies to your project, and then at a certain point it mostly plateaus. You're not constantly re-adding new dependencies from npm as you work. You kind of end up with your framework \[unintelligible 00:53:39.08\] and then a couple of random things that get added over time. But that number doesn't grow super-fast, and those all get cached, in the HTTP cache and on disk. So they're relatively fast. And then the number that does change relative to your files on disk is your source files. So that's kind of the thing that you would wanna keep in mind.

I don't know that today I would necessarily jump to using WMR on a project that has 2,000 source files. I don't have any reason not to suggest doing that...

**Jerod Santo:** Just don't do it.

**Jason Miller:** Yeah, exactly. But that would be the scaling characteristic that I would be concerned about. Not concerned from like a "Should I do this?" standpoint, but "How long is this gonna take during development?" standpoint. And hot module reloading helps with that, because now you're only talking about the first load that might be waiting to stream modules to disk. And this all changes as the semantics of browser module streaming parsing change... But that's the main one.

The other side of the coin, which is "What about production?" I don't think I'm overstating WMR's abilities -- I don't think it would be overstating WMR's abilities to say that it is fairly solid... Because in production, WMR is just a fairly sane Rollup config. We don't hit the custom code pathways. We're not running through our own plugin runner. We're not doing those things. It's pretty similar to a standard Rollup config.

We use our Node modules resolution, but it's never gonna be different in production than it was in development, because that would be very awful. And some similar things for transpiling. We use the custom transpiler, again, because we don't want it to be different. But then when we go to minify, we minify with Terser standard tool; we bundle with Rollup standard tool. By default, the browser support for WMR is modern browsers...(?) You know, question mark. Essentially, Edge 16+ \[unintelligible 00:55:39.15\] But there is a one-file plugin that runs those bundles through Babel, and creates copies of them. So now you have the modern files, served via a script type module to 95% of browsers, and then it creates a second set of files that it automatically injects script no-module tags \[unintelligible 00:56:01.05\] legacy browsers, and polyfills them.

\[00:56:05.26\] So in terms of the production output quality, the production output -- like, what has been taken into consideration, there's not really a consequential difference between what WMR can produce and what other tools can produce.

**Jerod Santo:** Yeah.

**Jason Miller:** Honestly, the main thing to point out is the production output is Rollup-based, and Rollup is the gold standard for production output at this point. It's not the default, so that's always something to consider. Usually, this for people would mean moving away from a WebPack configuration and onto a Rollup one... But I think there's lots of reasons why one might consider doing that. So that's something to consider.

**Jerod Santo:** Yeah. Another aspect of scale in terms of app complexity, which I think also affects the production story, is not just module count or that kind of complexity, but as soon as you start to want to do maybe custom server responses... I know there's like a plugin interface for middleware and stuff, so you can proxy, you can add some headers... Surely, you can shoot yourself at that point, once you start to extend it to return arbitrary responses based on logic... Now you're basically running a dynamic web server, and you can of course have production issues there, right?

**Jason Miller:** Yes, that's a good point. I don't think we've properly put verbiage around this in the readme and in some of our stuff, but in the launch announcement and in the couple of videos I did, we wanna be clear - WMR server, our production-style server, we did not build that as a suggestion that you should use that to serve your application in production. I wouldn't do that. Because at the end of the day, the best outcome is it's the Polka module and the Sirv module, both by Luke Edwards - which are great modules, but that's all it's doing. It's \[unintelligible 00:57:51.26\] than an HTTP/2 server. And really, in production, you shouldn't be serving HTTP/2 from Node, you should be serving it from your CDN... And at that point, why serve your files from Node in the first place, and deploy it into a CDN? You know, deploy it on a Netlify, a Cloudflare, now they've got pages, or Firebase, wherever.

The prod server that we bundled - its goal was to give you a very accurate local representation of what prod would be like.

**Jerod Santo:** Okay.

**Jason Miller:** That's actually why we had the middleware support, so you can add proxies, and stuff. It's because in production you might have that setup. But I don't think it would make sense to do that through WMR. We're the development and bundling side of things, and we'll get you to production, but we aren't production.

**Jerod Santo:** Right. Like, it produces production assets, but it is not your production server.

**Jason Miller:** Yeah. And that's actually a dividing line that I think we could make clear... And you had mentioned Next.js early on... Next.js is a server. It is a runtime that your application runs in. WMR - we have no intention of being that. There was an SSR plugin that I built, more as like an experiment to see "Could you do it?" But even then, I think if we ever actually formalized going down that road, it would still be we will generate a server as a JS file, that you're gonna go and host yourself. Or it'll be like a piece of middleware that you're gonna mount into your own Node server, because WMR is not a stack. That's kind of the dividing line.

**Jerod Santo:** That's a good distinction from an outsider reading the readme and checking it out... And like I said, is it like a Next.js? Because I'm trying to figure out, "Is this gonna host a hybrid application or not?" I mean, it can; obviously, it could...

**Jason Miller:** It can, yeah.

**Jerod Santo:** ...but does it want to be that? And I think the answer to that sounds like no. It doesn't really wanna be that.

**Jason Miller:** No. And to the point where like -- I think in order to do that, we would end up having to compromise on being good at generating static apps. If there was a need there, I would rather have it be a separate tool, or like a tool that uses WMR for bundling, but that's it.

\[00:59:55.22\] There's a bunch of folks right now who are trying out wiring up Eleventy, the static site generator, and then just using WMR as the frontend thing. So you can have Eleventy with a script-type module tag that just points at WMR, or even use WMR's middleware thing to proxy to Eleventy. But then when you do a production build, you're just saying "Hey, WMR, give me your assets" - okay, those are in Eleventy now. Eleventy is ultimately the stack. And to me, that just fits a lot better with the model. It's generative, not runtime.

**Jerod Santo:** Gotcha. Anything, Nick?

**Nick Nisi:** No. That sounds really interesting. That's kind of a use case I was thinking of, is using WMR with Eleventy, as like a side-project, fun idea, and a way to use this a little bit more. It does seem like a good fit.

**Jason Miller:** And especially because we have that theme where we started from HTML files, and in development we don't even look at the HTML file, it's just that first script tag request; when it comes into the HTTP server, we deal with that. It lends itself quite well. You would get hot module replacement in Eleventy, which is normally a pain in the ass...

**Nick Nisi:** Yeah. That'd be really cool.

**Jason Miller:** And then the other piece there is there are folks, myself included, who if you're not currently using Eleventy, or let's say you're building a website that isn't strictly content, you might want to have page-based routing, kind of in a Next.js style. So we have plugins and recipes now... There's a plugin that lets you import a directory \[unintelligible 01:01:25.05\] in the directory as an array. And you could actually build a whole static site generator on top of that. We've got demos now showing how to do that.

But WMR is actually lower-level than any of those things. It's more like if you want to do that, you can; it's fully supported. But we're not telling you "This is what it's for."

**Jerod Santo:** Well, the project can be found at github.com/preactjs/wmr. Or hey, just hop into your terminal and type "npm init wmr", and you can even leave off your project name; it'll just take your current directory and turn it into something cool.

**Jason Miller:** Just be aware that it will blow up your directory. \[laughter\] That's not like a WMR thing. \[unintelligible 01:02:03.10\]

**Jerod Santo:** Yeah, just go ahead and run that in your home directory. Everything will be just fine. \[laughter\] Jason Miller, thanks so much for joining us. You can find Jason online. He's @\_developit, depending on the context... What's the best way to reach you, Jason? Twitter is the best? GitHub?

**Jason Miller:** Yeah, Twitter is fine.

**Jerod Santo:** Alright. So links to Jason in the show notes... Links to WMR, all the things discussed on this episode, of course, are right there in the show notes for easy clickings. Nick, thanks for hanging out for our first episode back. JAson, thanks for joining us, and for really putting so much work into these cool, new tools. I mean, I love not having to write cool, new tools, but getting to just use these cool, new tools, and criticize them, and enjoy them... So we appreciate all the effort you are putting into pushing the web forward for all of us.

That's our show. Talk to you again next week.

**Outro:** \[01:02:54.14\] to \[01:03:54.17\]

**Horse JS:** Just waiting for dark mode to eventually land in Node.js.
