**Jerod Santo:** Alright, welcome back, party people. We have a special show for you this week... Hey, it's always a special show around here, because Nick Nisi is in the house. What's up, Nick?

**Nick Nisi:** Hey, how's it going?

**Jerod Santo:** Going very well, going very well. Excited to talk about Pika. We have a special guest, Fred K. Schott, joining us all the way from - where are you at, San Francisco?

**Fred K. Schott:** San Francisco, sunny -- meh, cloudy. Cloudy San Francisco.

**Jerod Santo:** Joining us from cloudy San Francisco. Well, Fred, thanks so much for taking the time today - I know you have a busy schedule - to sit down and talk Javascript with us. We appreciate it.

**Fred K. Schott:** Thank you all for having me to be a part of the party, the JS Party.

**Jerod Santo:** That's right. You're here, I hope you brought some beverages; we've got some music, we've got some friends here, so it should be a good time.

Let's get down to the nitty-gritty and talk about Pika, which is a project to move the Javascript ecosystem forward. One thing I always say on this show is I appreciate people with ambition, and big, ambitious goals, and this struck me immediately as that. It is a package solution search thingy with modules, and stuff... I'll let you describe, Fred, because you can probably do better than that.

**Fred K. Schott:** No, that was pretty -- about as close as I've heard it yet. That's kind of one of the problems of this - it's so many things; but it is exactly what you started with - a project to move the Javascript ecosystem forward. There are lots of pieces to that; it's not any one thing, it is a collection of projects.

**Jerod Santo:** We should mention there's Pika/web, there's also Pika/pack...

**Fred K. Schott:** Right. There's the website, it's all part of this project.

**Jerod Santo:** There's a lot of things going on... But yeah, you were gonna talk about the genesis, and we'd definitely like to hear why this became a thing.

**Fred K. Schott:** Yeah, this all started about two years ago, just taking a look at the ecosystem as a whole; it's one of those things where everyone is acting in their best interest, so consumer of packages on Npm - they just want it to work in their system; publishers of packages - they want it to work on as many user systems as they can. And what this means is that everyone just ends up pushing the status quo forward.

It's very hard to actually see when you kind of pull the covers up and look under the ecosystem, what's going on. Actually, things don't really change that often, which - for good reason; but that also means that a lot of people - for example when they're publishing a package - will compile it down and downgrade it to work on the latest possible version of Node. And maybe they will stop maintaining that package, so then it's forever pinned at, you know, all these different Babel transpiler bloat, to get async/await working on Node... It ends up actually looking a lot hairier than it does above the surface, where these things all just kind of work, and they all just kind of work because we have these very powerful tools, like Webpack and Rollup, that allow for them to work on the web, and then everyone's looking out for Node in their own way.

\[00:04:29.07\] So this project was started to see what you could do about that. Obviously, that's a big - as you said - ambitious goal; I'm not trying to change the world in one day, but if there were little things we could do...

As of today, there are three different projects. The first is just the website. Pikapkg.com, the very first thing I did was create a place to search for ES modules... ES modules being these modern packages that actually do run on the web, in certain scenarios, or at least are much more modern; they're focused on the web. Generally, there's not as much risk of transpiler bloat when the target itself is more modern.

And then other projects as well that I can get into, to then work with those and publish them... But it all kind of came out of this, "What are the little things we could do to start building what would be a more modern ecosystem?" The mission statement of the project is to make modern Javascript more accessible, making it easier to find these packages, to publish them, to install them, and then really to use them.

**Jerod Santo:** So perhaps a more clickbaity way of saying that, which I think was successful, hearing about your exciting day on Hacker News - a recent blog post on PikaPkg.com, which was the announcement post you sent to us; we'll link it in the show notes... It says "A future without Webpack."

**Fred K. Schott:** Yes! I apologize for any clickbaity -- it really is...

**Jerod Santo:** \[laughs\] That's how you get the conversation going right there.

**Fred K. Schott:** Oh yeah, yeah. That definitely got people -- although, you know, talking more about the title than the actual software... But that's okay. That comes with the territory.

Yeah, one of the things - Pika/web is one of our other projects, one of the other three, which lets you install these modern packages that actually run in the browser. So a big reason that we use Webpack, which is what this article goes into, is the history of how we ended up where we are today with Webpack and these tools. A lot of that came out of the fact that everyone wanted to use Npm, and Browserify, and then later Webpack, and now Parcel and Rollup and all these others essentially promised that - that you can use an Npm package on the web. Today they do a lot more than that, obviously, but you can trace a lot of it back to that original desire, that Npm was on its way to grow and grow to be the biggest package registry that exists today. Javascript front-end developers wanted in on that action, and Browserify was very much the answer to that problem.

So what this is is kind of a look at that problem through a different lens, which is instead of trying to make Webpack simpler, what if you actually flipped that model and actually go back to "How can we run these packages directly in the browser?" and Pika/web allows you to do that. So it has some interesting implications for how you build websites, web apps, when you don't actually need a bundler anymore.

**Jerod Santo:** So the way it accomplishes this is really enabling you to use something that already exists now in 2019, and I think you can make the argument that Pika/web and this style of application bundling - not bundling, but lack of bundling - wasn't previously accessible or available to us as an option, and is now through ES modules. Do you wanna talk about ES modules, tell everybody about them, maybe a little bit of history if you have it, and then how Pika/web enables that as your code-loading system in the browser?

**Fred K. Schott:** \[00:07:51.06\] Yeah, we actually do let ES modules do a lot of the heavylifting in terms of what we can and can't do. Some background there - ES modules I believe were released as a part of the ES6 pack before it was even \[unintelligible 00:08:01.05\] I always run into trouble translating between the two... Is that ES 2015...? You know, several years ago this spec was introduced and ratified, to have a native module system for Javascript. Up until then we'd used -- God, the whole list of them: UMD, Require.js, CommonJS, which is what Node uses when you use the require function, and module.exports... That's essentially a module system; not native to Javascript, but supported by Node, and Node gives you the functions to use those modules.

**Jerod Santo:** Right.

**Fred K. Schott:** Everyone had solved this in userland, essentially, but never in a really great way, and it always ended up you having to roll your own module system; you have to choose one of the many when you publish a package, to support it.

CommonJS, which was Node's module system, the one that they wanted -- and I can never remember if it's actually strictly by the spec, CommonJS, but regardless, what they ended up shipping became by virtue of Npm being bundled with Node in it, starting as literally a Node package manager. We had inherited that same module system. And again, we talked at the beginning about how the ecosystem will very commonly just kind of keep doing what's working, because that's in everyone's best interest. Keeping that module system allowed you to work with the rest of the ecosystem... So different projects have tried to change that, but essentially you're basically saying "I'm forking this registry, this ecosystem", and that's usually a huge friction point for getting any sort of adoption.

So Npm is still using CommonJS to this day; that's your require in your module.export. What has changed is that we have this modern ES module on native syntax, so that's the import/export, those keywords. That lets you basically write a native Javascript module, one that the browser can actually natively understand or natively run in ways that CommonJS, Node's module system can't actually run on the web natively. CommonJS needs a bundler, while ES modules can run on the web natively.

**Jerod Santo:** And ES modules are globally available in modern browsers, or is it a bleeding edge kind of a thing? What's the status there?

**Fred K. Schott:** CanIuse.com is always my go-to site for this kind of answers. You can see the full support graph, but essentially, going back at least a year, I think, maybe even two years now, in the modern browsers - and someone please fact-check me on that... But regardless, many versions back on a lot of the modern browsers, this is all supported. There's some follow-up parts of it, like dynamic imports, that are still getting fleshed out; that's like the import function, that lets you basically load a module outside of the syntax, in an asynchronous way... But the core of the module system, that import/export - that is I think supported in every modern browser. IE 11 is the last holdout, I believe, from what I've heard from people trying to use these.

**Nick Nisi:** Sticking with one of the projects, which is Pika's website - how does it determine what is an ES module package on Npm?

**Fred K. Schott:** Yeah, that's a great question. I go into that in a bit of little different places, but it's always hard to get a kind of succinct place where you wanna look for it. The website uses your module entry point in a packaged json manifest. So if your package is published and you've exported an ES module build, basically, you'll traditionally add a little module entry point, similar to main, if you're familiar with that, where it points to the ESM build. So packages will actually build side by side if they are targeting both Node and a modern browser.

\[00:11:56.25\] An ES module build, which Webpack, Rollup, they all understand - it will be a little more modern, it will be a little faster because of that usually, and main will remain the Node long-term support; "What is the latest version of Node we wanna support?" It lets you decouple the requiremens of both, where Node v4, v6, v8 maybe doesn't have the same support that a modern browser that supports ES modules would.

That has been traditional in the community, so I actually have a stats page on PikaPkg. That was one of the first things... If you go up to the top right of the site, there's a nice little link that will take you to a stats site, and it's actually tracking module usage over time. You can see going back to 2015 - there's actually a fun, little history section of that page, where the first package to ever use a module entry point appears to have happened by accident... To this day, I would love to know the answer of why they did this, what tool they were building for. Who knows. They just said "module=" and there was like the name of the package. Maybe it was for their own testing, maybe they were just confused... I don't know.

But that was a year before this became the standard, which Rollup, and -- actually, I believe it was first proposed in a post called "In defense of .js" as a pushback against the Node communities or the people working on ES module support in Node, their proposal to add a .mjs file extension. Their take was "We would like to support ES modules. This is the new modern thing, we're excited. However, as Node, we don't know how to tell if you are using a file that is old CommonJS, or new ES module syntax... So we need this new file extension; that's how we'll know, and that's how it'll work."

They've since walked that back a bit - I don't believe it's anymore required - but at the time, that caused a lot of frustration, especially among the web community, that said "This is a Node problem. Why is the solution going to have to affect everyone? It affects me as a web developer. That's not my problem." There was a lot of friction there.

So this concept of having a module build came out of that proposal to "How could this work without adding a new file extension?" Since then, pretty much immediately after - that was around mid-May of 2016 - D3 started, Rollup started, all these big projects started buying into this idea, and that has just grown and grown over time. So about 6% of the packages on Npm now support an ES module build. Fairly low, but a lot of packages are older, deprecated, not maintained, or even Node-specific, where it doesn't make sense. Even today, only bundlers are really looking at this property.

**Jerod Santo:** Has there been any moving and shaking on the Node side of things to also support at least syntax compatibility with this, so there's just one way to do it on the web and in Node? Or are the concerns so different on that side of the things that there's no reason to support this syntax in Node?

**Fred K. Schott:** Yeah, it's definitely been a hard problem for them to solve, but the people on the Node team who are working on this are doing a great job. I think Myles has been leading an effort there, the head of the TSC, I believe, still. He's been heavy in this big effort to "Okay, we've gone back and forth on a lot of different solutions. Let's go back to the fundamentals, break this up into different problems, and then solve them one at a time."

I believe there's been a lot of movement that I would not feel comfortable summarizing. I'm sure I will misquote it, I'll get angry mail saying "No, that's not what we're doing." But I know they've been doing a lot of good work on that, so that it is moving in a way it hasn't moved in the last four years, at least.

**Jerod Santo:** Nick, do you have any insights on that, beyond what Fred has?

**Nick Nisi:** I don't. I was actually curious if Node is still planning on the .mjs route.

**Fred K. Schott:** \[00:15:53.27\] Yeah, the latest there that I know is that it is still going to be recommended, but it is no longer required. There may be a new type property of your package.json, similar to what the module field is trying to do - tell people what your package is (modern ESM or older CommonJS). Which is actually really interesting for this project, because over the last -- so let's say, in defense of JS, that post was published back in May/June of 2016; Node has not supported any sort of ES module outside of an experimental flag.

What's happened is the module property, that module entry point is kind of morphed into a web-focused entry point, where it almost implies that it is a web package. And we've been able to basically leverage that to say "Here's our collection of about 50,000 almost (probably by next month we'll hit 50,000) packages on Npm that are modern. They can run natively in the browser, and they're actually more than certainly built for the web." So we've been able to leverage that, and the fact that Node seems to be going a different direction with their own support plan means we can probably continue to use that. That's something that I don't think anyone has really talked about, because there's a lot of different moving parts to try and make any sort of assumptions... But what it looks like is that the module will continue to be a front-end Javascript entry point, and main will continue to be the Node Javascript entry point, regardless of what those two module systems end up looking like.

**Break:** \[00:17:33.14\]

**Jerod Santo:** So we're talking about ES modules native to the web... When I think about a feature that's native to the web, I think "Well, can't I just use that feature directly? Why do I need a thing? Why does Pika have to exist if we can just script type people's modules? Just use it directly."

**Fred K. Schott:** Yeah, I agree. That is kind of the -- if you really look at what Pika is trying to accomplish, it's trying to make itself obsolete. Each of these projects - it would be great if the platform, the ecosystem, the registry, whatever it is, just did a lot of these things. So it's very much calling out problems with the way things work today.

The exact reasons why you can't just script type module on most packages - and you can on a lot of the modern ES modules - the big problem you run into is the second they have a internal dependecy, the second that they depend on some other package, or even some other file, what happens is... This came from the Node community. Well, two things. One came from the Node community, and that was the ability to just import the file kind of by this lazy "This is generally where the file is. Maybe I missed the file extension, or maybe I even just did the directory of the file I'm looking for", and it'll just automatically add index.js into that directory. Node, for community's sake, had a lot of very sugary ways (for lack of a better word) to import your packages by a more loosely defined path.

**Nick Nisi:** \[00:19:59.12\] It's insane how many paths they have to check.

**Fred K. Schott:** Yeah. If you actually dig into what that looks like, it is like, "Okay, this directory --or is it a file, is there a .js, is it a .node file extension?" It does all these things very loosely every time you import without a file extension.

**Jerod Santo:** I think that was one of Ryan Dahl's ten big regrets, wasn't it? That we talked about...

**Fred K. Schott:** Yeah.

**Nick Nisi:** Yup.

**Fred K. Schott:** And you see Myles and the Node team was looking at the ES module implementation in Node, using this as a leverage point to solve some of these longer-standing issues. So I believe that at least right now that lookup isn't supported, and then discuss "Is that something we want?", kind of unscope that from the larger discussion.

But that's one of the big issues - if you've been using Node and you've been using Webpack or some other bundler to write this package, all of a sudden you ship it off to the web and it just immediately breaks on the simplest path, because it doesn't have a .js. That's issue number one.

The other one is importing by package name. If your package has a dependency on another package, that's one of the things that allowed Npm to be so powerful - this idea of small modules, small packages building on top of each other... Whether you love that or hate that, it is a big part of what makes Npm so powerful and useful, and people leverage that all the time.

The problem then is you run, let's say, "import preact" by name. That also will just immediately die in the web, in the browser. That's because there is no lookup mechanism that the browser shipped. As a part of the ES module spec, the only thing that's supported are file paths and full resolved URLs... So as you say, relative file paths.

What you end up with are packages that just can't run in the web, even though they run in Rollup and in Webpack; because they were built for those tools, they actually aren't to spec in the same way that the web browser requires.

**Jerod Santo:** So Pika is basically a shim; it fixes them for you. Is that what it does? What is it actually doing?

**Fred K. Schott:** So here is the big head fake of Pika/web, that tool - it is a bundler. It is the anti-bundler bundler. What it does is it actually uses that same bundler that we all brought into our codebases to solve this "how do you use Npm packages in the web", and instead of saying "Here, run this on your whole codebase", it says "Run this on your dependencies", to give you her dependency files... To give you installed dependencies that run on the web.

Essentially, what it does is it takes your entire dependency tree of dependencies that you care about for your website, so you can define them explicitly, you can try and guess from your dependencies list in your package.json... However it gets that list, it will iterate through them, get the module entry points that those packages have defined, and use those as entry points into your Node modules directory, and then give you each of those as an individual file in your web modules; what we're calling "the new web-focused dependency directory." Similar to Node modules, there's a folder where Npm installs your thing; run Pika/web and it will take those packages that you rely on and essentially bring them into single-file packages, where any internal dependencies that they relied on, it tries to bring those in. If there are any sort of shared dependencies between two of your packages that you're relying on, those will get split down into separate chunks.

You basically get to use all this amazing tooling for a much more smaller-scope project. It essentially gives you a very nostalgic type of web development, where you're actually loading Preact.js, and everything just kind of works through that. Then you get to basically decide "Well, now how do I wanna build my website?", given that Webpack - a big problem that it solves, or at least was originally built to solve, was "How do I use Npm packages?" Now I no longer have that problem. I can use a lot of modern packages, 50,000 packages almost. There's certainly something for everyone there.

\[00:24:11.14\] Now, what do you do? Maybe you use a bundler so that you can still bundle your application source code; maybe you decide to skip it for now, which is what www.pikapkg.com decided to do... We've built that fully ES modules, no bundler needed other than the Pika/web installation.

**Jerod Santo:** I think I understand now... Pika/web is kind of like a purifier, in the sense of imagine you're thirsty and you're standing by a river and you wanna drink some pure water; some of that water is pure, but you don't know where the other stuff came from... It looks clean, but you know, upstream dependencies and whatnot. So Pika/web is your purifier; you're taking that and you're purifying these packages, so that they can be used with ES modules. Some of them may already be pure, some of them need purification, but you do that once and then you're done; you can drink it all. Is that a good analogy, or is that missing the mark?

**Fred K. Schott:** I think that's a good one. I love the idea of web developers, and front-end engineers, UX developers (whatever you call them), we are thirsty in the dessert somewhere, and we have a purifier.

**Jerod Santo:** That's right. We're standing by a river of software, and we're just ready to drink it up. Nick, were you gonna say something?

**Nick Nisi:** Yeah, I was gonna ask if there are certain packages that it might not work with. For example, I'm trying to -- I'm failing to think of how this all gets abstracted away, but a lot of times in code you'll see the module system being hijacked to load in an SVG, for example, or something that's not a Javascript file. Is that something that Pika/web would choke on, or is that sufficiently abstracted out from the package that it would end up slurping it?

**Fred K. Schott:** Yeah, it certainly relies on package authors doing the right thing, to an extent. It gets to leverage a few of these implications of what's been built in the ecosystem so far. The idea of using a module entry point - people aren't usually making filesystem calls in that package. They aren't usually building it to spin up some very Node-specific work that they need done... So we get to leverage a bit that way, where a lot of these packages are meant to be run on the web, and people are behaving in a certain way because of that.

The other is that a lot of these packages are built for a general audience. Again, everyone's acting in their own best interest; package authors want to build a package that can run for the most people. If you say, "Oh, this will only run a few... Have an SVG Webpack loader in your config" - all of a sudden you just cut out a group of potential users, that would not have that.

With packages, you do get this -- there's a shared understanding of what a package is, and usually it involves compiling everything down to Javascript, .js files. If they're loading assets, they're doing it in a more web-standard way, versus just import the CSS file as if it were an ES module... It isn't actually a real thing. And it usually requires extra tooling on your part as a consumer, so they try to stay away from it... But I'm certainly seeing that -- I'm trying to run this over all the modules that we have in the ecosystem, or that we have indexed in PikaPkg.com, and there are certainly people doing all sorts of things: importing .jsx files, importing SVGs... For sure, it's a problem.

**Nick Nisi:** Yeah. What about from the more Node-specific packages - the Node package manager can load JSON files; does it have a special way of handling that?

**Fred K. Schott:** Yeah, so we try to walk that line between what is the best way to support as many packages as possible, and not do so in a kind of risky way that might actually build you a package that fails at runtime, versus catching it earlier. So that's a whole set of different compromises.

\[00:28:03.18\] We do try to do some things that are fairly either being discussed within the context of Node, or being discussed within the context of added to the spec. People are talking about "What does it mean to import a JSON file?" We see that a lot because Node supports it, so we do actually do that by default. If you're being a purist and you wanna only support the least disruptive type of transformation, we do have a strict flag, that is much more strict about what is and isn't a package.

**Nick Nisi:** That's awesome. I wonder just how shocking to my system that would be, to just do pure ES modules... Because I feel like hardly anybody does at this point.

**Fred K. Schott:** Yeah, it's definitely kind of a trip. I even called that out in the readme of the project, where it's like this very nostalgic 2014 feel, but you're using these modern technologies to get that. So instead of everyone rolling their own module system, or attaching things chaotically to the window object, and that's an export... It's like this same, but also nostalgic way of doing web development, because now you're looking at a per-package layout, instead of having everything in one vendor.js file, and you push a new change, you update one dependency and that whole file has to be busted into cache. It actually ends up being pretty vast. It's all kind of case-by-case basis, but because of the caching gains you get, and given that we have this new HTTP/2 standard, which allows you to load multiple assets in parallel, you actually see a lot of sites where it makes from a performance standpoint to at least start with this... Get that caching win, get a simpler development environment, and then go from there.

**Jerod Santo:** I love the idea of patch-bumping a single dependency and not having to have all my users download a new vendor.js, which is 200 or 300 kilobytes.

**Fred K. Schott:** Yeah, or even you only download the dependencies you need, as you need them... So another big win there is I load one page of my site; I only load the dependencies needed for that page. You're shipping much less unnecessary code down to the browser.

**Jerod Santo:** So what about other niceties you might wanna have? TypeScript, Babel etc. Are you gonna end up with a bundler, or some sort of additional tooling every time, no matter what, if you want those things? ...or are there other ways to get to similar features. What's the situation there?

**Fred K. Schott:** How do you mean?

**Jerod Santo:** Like maybe I wanna start off a new website, and I have some dependencies, and I wanna use Pika/web, to use the ES module approach, but I also wanna use TypeScript.

**Fred K. Schott:** Gotcha.

**Jerod Santo:** Just explain that - what does that look like, basically?

**Fred K. Schott:** That's the big goal of the project, I would say, succinctly... Not all of Pika, but just Pika/web. The idea is don't use any sort of tooling because you need to, use it because you want to. If you wanna use TypeScript, you can use that; and TypeScript has a way to actually -- the tool itself will export ES modules that will still run on the web. Or let's say you wanna cleverly bundle your code up, and not have to worry about if you have a giant site with many levels of dependencies and files loading each other; maybe you just want one big app.js file - then it's a great reason to reach for Parcel and Webpack, and that would all just work with these dependencies... Or at least that's the goal.

What we see is that a lot of this -- and I think you guys did a great job talking through this in the episodes about the Great Divide, that article by Chris Coyier... We see this -- it's new that we have so much tooling required just to run a Hello World, just to get started in like a bootcamp, in your first day of web development.

\[00:31:56.28\] When I learned it, it was PHP, it was hacking together this gnarly site, but you could get started really quickly. You didn't have to learn a whole course, or even read a tutorial on how a bundler worked or how Webpack worked.

I think when you talk about why is there this divide, or why do some developers -- why is there this need for tooling, in a way that there wasn't five years ago, I think a lot of it can be traced back to that... There was this desire to run Npm packages on the web, it was worth the trade-off for us to start using bundlers, and now that everyone today assumes a bundler, more and more tooling is being added to do cool things with those bundlers, and that's great, that's all well and good.

**Jerod Santo:** Right.

**Fred K. Schott:** But for the person just trying to get started, or the person who's more design-focused and maybe they don't have the interest, or the time, or for whatever reason -- you know, Webpack is big; I barely understand how Webpack works, and I've been doing this for a while now. For that person, instead of it being like "Oh, we'll all do something simpler instead, because I'm not interested in that", it's much more of a "Sorry, you can't. You need to learn that. Or we'll put up this wall where we do this bundling logic and this bundling math and all these interesting things, while you go design... You know, stay away from this; this is our area." At the very least, it doesn't help get rid of that wall.

**Nick Nisi:** So if you wanted to use Pika/web in a project, what would you do? Would you install that as a dev dependency? And does that set up a post-install script, or something, to create the web modules directory?

**Fred K. Schott:** Yeah. I would definitely recommend checking out both the article that you mentioned would be in the show notes, and also the repo with the readme... But the basics of it is that you would just add it as a script in your package.json. So there's the prepare script, which is a lifestyle hook within Npm, where anytime you run Npm-install, it will run that command. So put Pika/web into there, put it as a dev dependency, and anytime you run Npm-install it will rerun that.

And there are some other interesting things you can do on top of that. There is a Babel plugin if you really like the idea of importing new dependencies by package name, and you like the idea of having a Babel step to transpile experimental features, or what have you. You can use that plugin, for example, to keep the exact same developer experience you've had with dependencies, and then in your build process it will rewrite it to the /webmodules/packagename.

**Jerod Santo:** What advice would you give to the developer who already has figured out the magic incantation required by Webpack to do everything the way that they want it to work? Are there significant enough wins here, that maybe it's worth a porting of your application to Pika/web plus a few niceties directly, or is it kind of like this is for new applications; "if you already have something working, don't touch it, you might break it", kind of thing... What do you think there?

**Fred K. Schott:** Yeah, the first comment I saw on the Reddit post when this got posted to Reddit, in the Javascript community, was "Oh man, another thing I have to learn? Ugh...!" It's like, "No, that's exactly the opposite!" Don't feel any pressure to use this. This is purely if -- and I think it does speak more to someone starting a new project, just because if you're using Webpack, you clearly already have a setup that's working for you. I'm not trying to get anyone to do anything they don't wanna do; it's the exact opposite. If you are intimidated by Webpack, or you just want a much less complex starting point than Create React App, or even starting your own Webpack config file, then this is a great tool for that person. PikaPkg.com was started in that vein, where "I just wanna use ES modules. What does that look like?" It turns out it's pretty simple, and using this tool you can get a lot of that benefit.

\[00:35:54.15\] So no, don't throw out what you're using. If you're working on something small, you can try playing around with it. Again, with that Babel plugin, you don't have to change a line of code, as long as all of your dependencies are installable with Pika/web. So that probably is the trickiest part of it, if you have an existing app; you probably haven't given too much thought about what your dependencies are, which means you might have something in your tree which is very Node-specific. If you're using Request as the package, that is a very Node-specific package, even though Webpack and Rollup make it play very nicely within a single bundle. Those aren't modern ES module web-focused packages, so... I would definitely recommend checking out PikaPkg.com. The very first thing it started as was an index, a way to search Npm for these modern packages. I guarantee you you search the thing you're trying to do and there will be a modern package which will also probably be later more front-end-focused, more modern. If you're still working around callbacks because you're using this Npm package that was build for Node five years ago, I guarantee you there is a more modern web-focused async/await promise-based one, that hopefully runs even faster and runs much smaller.

**Break:** \[00:37:14.12\]

**Jerod Santo:** So we've talked about Pika/web, we've talked about PikaPkg.com... There's a lot of moving parts here. You have a third piece to the puzzle, which is a little bit more niche, because it's focused on package creators more than just the package user... It's Pika/pack, with the tagline "Npm package building reimagined." Tell us about Pika/pack.

**Fred K. Schott:** Sure thing. Pika/pack is all that and more. I feel like I went a little overboard on that tagline. \[laughs\] I sound like I'm trying to sell you--

**Jerod Santo:** You're good at the marketing side of things. You've got the marketing down.

**Fred K. Schott:** Sometimes I doubt it, but... Yeah, the idea there is to look at how we actually package and publish Npm packages. Definitely more niche, in that this is targeted at package creators, which is a much smaller group than package consumers... But it is still something very important, because everything kind of flows down from there.

I mentioned that everyone's working in their best interest when they are publishing packages for the most people to consume them; consumers just want a package that runs on their machine... The problem you run into there is that a lot of what Npm packaging and publishing is is still based on exactly what it was maybe coming up on ten years; I'm not sure how Npm is, but... It hasn't changed much at all since I've started using Npm, which was quite a while ago.

The basic idea is that you run Publish, it takes your entire directory, everything you have except for the Node modules folder and maybe anything being gitignored, it turns that into a tarball, it sends it to Npm, and that is your package.

\[00:39:51.18\] The problem there is that we've all started moving towards more build tools, so the code that we're writing actually very rarely looks like the code that you actually run on your system. Maybe that's because you as the author wanna write a modern Javascript and then you don't wanna have to worry if that will run directly; you instead just wanna use Babel, build for Node v4, v6, v8 and then be done with it... Or maybe you're using TypeScript, maybe you wanna try something really cool and experimental. All those reasons today we're not writing Javascript that is really meant to be run directly on Node, on the browser, especially for the package creator... So this is an attempt to reimagine (for lack of a better word) how that would work; instead of just being "Here's my directory. Enjoy!", actually building out a pipeline of what packaging and what building your package for Npm really means... To simplify all this, so that you as the package create don't need to "Okay, do I write this myself? Do I use Webpack? I'm building a package - how does that work?"

Up until now it's been a pretty tall lift for a lot of package creators to figure all these different tools out. Again, it's a smaller group, so there's a lot less out there for "How do I create a package that runs on as many machines as possible?" Jason Miller built something called Microbundle, which is pretty cool; that is another attempt at this. But Pika/pack is trying to look at it instead of just being "How do I build these small packages in an unopinionated way?" instead "How do I build out a build pipeline for my package?" It lets me very simply add in "Okay, I'm creating this package, and I want it to work on Node modern browsers, and I want to have other generated TypeScript definitions." Add those three plugins, similar to how you would in Babel, and run \[unintelligible 00:41:43.25\] That's at least the goal.

**Nick Nisi:** Well, I like this... It's really helping to standardize a build process and release process for packages to be the most friendly packages possible.

**Fred K. Schott:** Yeah, that's actually a more down-to-earth tagline. I might steal that. \[laughter\] Yeah, that's exactly it, all this complexity.

**Jerod Santo:** It's reimagined, guys. It's reimagined. \[laughter\]

**Fred K. Schott:** It's all these complexities to get around the original way that this was built, which is - if you think back to what an Npm package was, let's say five years ago, it was "Here's my index.js file, here's my package.json file. Maybe I have a lib directory of other dependencies, but essentially that's it." Now it's much more complex. This is an attempt to build a publishing system that works for that... And there is a Publish command to this as well, that borrows heavily from the np package, if anyone's used that... It basically walks you through a publish, so "Hey, what version are you trying to bump to? Here's all the commits that will go out in this version. Does that look okay? Okay, let's make sure that this is meant to go out to public, versus private", the pre-tagging, all of these things; it gives you a step-by-step CLI to walk through those, versus Npm's \[unintelligible 00:43:00.19\] is kind of just like "Alright. Tarball. Here you go."

**Jerod Santo:** Some interesting/potentially good news, specifically with regard to Npm, because it seems like a modernized aspect on building packages for Npm is that the Npm folks are looking at this as a potential integration for them. Is that correct? Do you know what's up with that?

**Fred K. Schott:** Yeah, so the Npm team created an RFC for their own project, to see what it would look like to support either an integration with Pika/pack, or maybe moving towards the same system, where they could share a lot of the same plugins... The idea being that thinking of publishing and then packaging your work for Npm specifically as a pipeline... And through that pipeline you give the source code, and then these plugins just make changes to it to either create the build for that environment...

\[00:43:58.18\] One of my favorites, which is still a little rougher than I would like it though, is there's just a Deno plugin. So if you're writing a TypeScript project, one plugin, the goal is to publish it in a way that Deno could consume it. That's something that -- you don't have to know how Deno works, you don't have to be running it necessarily on Deno, but the idea being that all these different environments are getting to a point where they start to have different requirements and different code that would be optimized for them... So instead of you as a package author being like "Okay, I've gotta learn how Deno works. I've gotta learn how ES modules and how bundlers work. I've gotta learn how Node 4, Node 6, Node 8 will all use this", instead the goal is use plugins to build your package, and let the plugin worry about what that environment supports.

There's also some cool things you can do about -- I wanna write a library; it's a library that does something like... Oh, I'm totally gonna blank on a good example. What's a cool package, that just does something silly? I don't know... There's like a Five package, I think, that just outputs the number five in different languages.

**Nick Nisi:** Probably.

**Fred K. Schott:** Let's say that you're working on that, and it's super company-specific, it's very important; this is production software that needs to be run. Let's say you wanted to add a CLI to that. I don't know why you'd need a Five CLI, but let's say you did.

**Jerod Santo:** Because the company you work for is Five Guys, Burgers and Fries... \[laughter\] And you need to be able to print Five in every language.

**Fred K. Schott:** Right. You're going up for promotion, and you need to show that... Okay, this analogy is getting out of hand, but... The idea there is that you've built this library, that's basically a Javascript file, and let's say it has to export some function. Do you also need to go then and look into "Okay, what kind of CLI library do I maybe wanna use? What are all these different things to support that? How do I parse arguments that are sent to the CLI?", all these things - what if there's a plugin that just wrapped your Javascript file, it wrapped your library in some very standard way, and calling that CLI would maybe just run your Javascript file, maybe it would call a function to it in a specific way, passing on the arguments that it got already parsed? There's some really cool things to do there; stopping to think about "Okay, this package needs to be built, everything has to be built by me." Instead, I build the library and then I augment it, I distribute it using these plugins.

**Jerod Santo:** Sorry, I got stuck on this Five package, because Nick found it on Npm... \[laughter\] And I'm just going through it. "five.upHigh() returns a superscript five; "five.downLow()" returns a subscript, and then "five.tooSlow()" returns a five, but it waits 500 milliseconds before it does that.

**Fred K. Schott:** You know, I've gotta be honest, I was about 10% sure that I got the right number; I thought it might have been four or three... Maybe there's one for every number. Maybe we're sleeping on this entire ecosystem of number-related packages.

**Nick Nisi:** Potentially.

**Jerod Santo:** Sounds like our next show.

**Nick Nisi:** I did search Pika Package for that, and I've found it on there with an exact match, but it is not a web-friendly ES module, unfortunately...

**Fred K. Schott:** \[unintelligible 00:47:00.09\] the Five package community to hear that... \[laughter\]

**Jerod Santo:** Weird, so what exactly... I mean, if we can take this one for instance, what would we find (I'm assuming that's pretty straightforward source code) in the repository or in the package itself that would make it not? Is it just the way they're doing exports, and stuff?

**Fred K. Schott:** That would make it not do what?

**Jerod Santo:** Not be Pika-compatible.

**Fred K. Schott:** Oh, gotcha. So you've searched it on the site and it's coming back with this match that says "This isn't web-friendly"?

**Jerod Santo:** Right.

**Fred K. Schott:** It essentially just hasn't found a module entry point, so... Maybe this will run on the web with a bundler. It's specifically not trying to say "This won't run on the web", but what it is saying is "This isn't built for the web." Now that we have these things built on top of this idea, we can say "This wouldn't run when installed with Pika/web. This might be a package built specifically for Node, so it requires the fs module; what does that look like when you put it on your website?", things like that. It's more of a signal that maybe there exists a more web-friendly version of this package... The goal being that you're now here, you're looking for a package that exports Five; maybe there's a five-es package, so there's specifically the modern successor, because the maintainer of Five - for whatever reason, I can't imagine why - stopped maintaining Five.

\[00:48:21.29\] Lodash is another good example, where the Lodash package is this CommonJS, Node-specific package, but they specifically have a Lodash.es that is much more ES module -- it is an ES module package, so it is a little more friendly to bundlers, it works a little better with tree shaking... All those things that ES modules bring to the table.

**Jerod Santo:** Well, shout-out to Jack Crawford, the author of Five.js. We'll link that up for anybody who wants to get an upHigh/downLow five...

**Fred K. Schott:** Jack, now is your chance. Start an Open Collective. Now's your chance, Jack. Get the big bucks.

**Jerod Santo:** Yup, this is your big moment. Everybody has their 15 minutes.

**Nick Nisi:** One last bit of serendipity is it was last published five years ago.

**Fred K. Schott:** Oh...

**Jerod Santo:** Uuh...

**Fred K. Schott:** Probably not web-friendly.

**Jerod Santo:** Nice... He can't touch it now.

**Fred K. Schott:** Jack, if you're listening to this... I don't know. \[laughter\] I've got nothing.

**Jerod Santo:** Congratulations...? \[laughs\] Way to advance the spirit of the Npm ecosystem, with this awesome library.

**Fred K. Schott:** The other interesting thing that Pika/pack can do is that it starts to look at -- and we are not the first to do this... Wasm-pack is good example of another person doing this, which is the Npm package is the goal. The built Javascript. And maybe it has some other assets, like CSS... Or maybe it has other assets like Wasm. And in that case, does your source language still need to be Javascript? Could your source repo be a Rust, or Reason, OCaml - something that could be built to something -- as long as it's built to Javascript, and maybe powered by Wasm or something else, it kind of unlocks this idea that Npm... Which is very much in the spirit of Npm. It's not just for Javascript, it's not just for a very specific use case; it's for supporting any number of packages that run on Node and on the web, or even other environments. So what would that look like, if you were writing Rust and then had a Pika/pack build pipeline that converted that into an Npm package?

**Jerod Santo:** Yeah, that'd be super-cool.

**Fred K. Schott:** We have some plugins now for that, and again, Wasm-pack has been exploring this area, through the lens of (I believe) Rust... But this is less language-focused and more just general, like "You have a build pipeline, the goal is X. As long as you build that pipeline out, the starting point can be whatever you want."

**Jerod Santo:** Well, Pika/pack - check that out if you are a package creator, whereas Pika/web sounds like a big opportunity to simplify some things, especially on greenfield projects; get out and use ES modules directly. Hey, give it a try, let us know what you find.

One of the cool things about doing this is we're bringing back the view-source. "Oh, yeah!", as you said on this blog post. \[laughter\] It's gonna open up a Javascript file... \[unintelligible 00:51:12.11\]

**Fred K. Schott:** I'm so sorry, I'm so sorry... I don't say "Bringing back view-source, Oh yeah!" like Kool-Aid guy; I say "Oh yeah, by the way..." \[laughter\] I'm so sorry.

**Jerod Santo:** Well, I said it like the Kool-Aid guy... \[laughs\] OH, YEAH! It's more like Ric Flair bringing back view-source... So I'm always excited about that; I think the more we can view each other's sources, the better; so that's a cool thing as a side effect of using this loading modules directly, without bundling it all up. Anything else before we let you go, that we wanna talk about? Or questions from you, Nick, that we haven't addressed yet?

**Nick Nisi:** \[00:51:51.05\] No, I think that it's a really interesting project, and I'm really excited for the work that you're doing to push the web forward, and I hope that you are completely successful, and that Pika eventually is irrelevant. \[laughter\] I mean that in the best way possible.

**Fred K. Schott:** Yeah, that means a lot to me, thank you. \[laughs\]

**Jerod Santo:** We hope this is irrelevant in the future... \[laughter\]

**Fred K. Schott:** Yeah, I'm really excited just to be working on this, and if anyone else is interested in these bigger -- you know, questioning the whole nature of the ecosystem we live in today, please get involved; it's all open source, it's all up on GitHub. File issues, play around with it... I'd love to hear what you think.

**Jerod Santo:** Very good. Well, the starting place for all things Pika is PikaPkg.com. Of course, all things mentioned, even a link to Five.js, is in the show notes, so click on those. And in case you were wondering, yes, if you call five.guys, the function, it returns you the hamburger emoji... So he's won the internet today with his library...

**Fred K. Schott:** \[laughs\] I'm sure that was a much-desired feature.

**Jerod Santo:** \[unintelligible 00:51:57.04\] Yes, Five Guys hamburger, so bringing it full circle... That's our show for this week. Hey, thanks for hanging out. We'll see you next time!
