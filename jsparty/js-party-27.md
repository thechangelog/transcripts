**Kevin Ball:** Alright, hey there! Welcome to JS Party, where every week we are throwing a party about JavaScript. Today we're gonna be talking about JavaScript tooling with three awesome panelists. I'm Kball, I'll be your MC, so I'm gonna introduce the panelists. Each one of you say hi as I introduce you, and what your favorite or most irreplaceable piece of JavaScript tooling is.

First off, we've got Nick Nisi.

**Nick Nisi:** Hello! Alert.

**Kevin Ball:** Next we've got Alex Sexton.

**Alex Sexton:** Hi, everyone. Probably MomentJS.

**Kevin Ball:** And then Chris Hiller.

**Christopher Hiller:** Would I be cheating to say Mocha?

**Kevin Ball:** I don't know if that's cheating... You made it, man.

**Christopher Hiller:** No, I didn't. \[laughs\]

**Alex Sexton:** I think cheating is immutable, right? That's pretty irreplaceable.

**Christopher Hiller:** I'm gonna go with NPM. I think that's somewhat irreplaceable.

**Kevin Ball:** Alright. So before we get started, I wanna make you all feel comfortable with being ridiculous, so I'm gonna lay down a challenge to Jerod. Jerod started off JS Party with a rap at one point, so I prepared a little rap to intro you guys. It's terrible. Just to throw that out there - it's terrible, but after this, no matter what you say, you know you're less ridiculous than I was.

So we're gonna start:

"Nick Nisi's the man, from NebraskaJS,

Organizing conferences for the rest of us.

If your talk was denied, you could probably blame him,

But he wins major cred, cuz he talks about Vim.

Next, Alex Sexton - he's a real star,

Proudly representing the JS Party Old Guard!

Leading the way with Modernizr and jQuery,

Keeping it real in Austin, the River City.

My man Chris Hiller calls himself BoneSkull,

His test framework keeps you from extraneous nulls.

If you check his site, your opinion may worsen,

Because he describes himself as a lizard person.

Last but not least, the voice you've been hearing,

Through today's episode I'm the one who'll be steering,

Helping things along if they start to stall,

Your MC, please to meet you. I go by KBall."

**Nick Nisi:** Amazing.

**Christopher Hiller:** Woord.

**Kevin Ball:** So let's kick off segment one talking about build tooling. JavaScript in particular used to be you didn't have to worry about builds, and a lot of folks who have been in this world for a long time and they want to the back and they're coming back to the front, they're like "What the hell is all this stuff?" There's so many different things.

We've got a few different things that go into a modern build setup - you've got Babel, you've got Webpack, Rollup, Parcel now, all these different module bundlers, people have been using Gulp and Grunt for a long time... So what are these things? What are you using, and what is it that somebody needs to know about build tooling today with JavaScript?

**Alex Sexton:** I don't think really anything. It should all just work out of the box, no decisions to be made, so... Maybe we may just close up shop.

**Christopher Hiller:** \[00:03:48.05\] Everybody wants to use the latest and greatest JavaScript, and because you probably have to support IE 11, you're not gonna get that, so you need something like Babel to compile or transpile your code... So that's part of the build tooling.

Of course, people don't usually just use Babel; they will couple that with a Webpack or something, and concatenate a bunch of files together and minify them, or split them out in certain ways... So it used to be people used Gulp and Grunt to do this sort of thing, and nowadays it's all Webpack and Parcel, and that sort of thing.

**Kevin Ball:** Anybody still using Gulp and Grunt? I know I actually have some projects that I use Gulp with still.

**Nick Nisi:** Yeah, I'm still using Grunt.

**Alex Sexton:** I'm not creating new projects with either of those tools, but there are several that exist currently.

**Christopher Hiller:** Yeah, I mean... It kind of felt like, well, there was Grunt, and everybody's using Grunt, and then there was Gulp, and then nobody used Grunt anymore, and everybody used Gulp... And then Webpack killed both of them. But yeah, lots of people still use these things, it's just that Grunt really kind of -- it really languished for quite a while.

I remember it was at version 0.4 or what have you for a couple years before it got to 1.0. So that can really hurt a project's momentum.

**Nick Nisi:** Maybe let's discuss a little bit about what we used to do with Grunt and Gulp, and how that's been replaced with more modern tooling. The main benefits of a build is obviously to build your files together, to serve them in a more efficient way to the browser; that includes things like concatenating them, and the minifying them so that you have the smallest bundle possible... But maybe let's build on that and talk about how it's changed for today's JavaScript environment.

**Alex Sexton:** What if even we step further back - what did you guys do before Grunt, before we had JavaScript task runners? I think I was pretty onboard with makefiles, which essentially just run shell scripts eventually. Makefiles, and then to do dev watching stuff you had to kind of -- I guess it wasn't really watching things that I remember, now that I think about it... But you would use a Python simple server or something like that to get a dev server, and then there was really no transpilation, so we didn't need as much runtime build...

**Nick Nisi:** I think the first thing that introduced me to the concept of watching was a CSS pre-processor, so Sass...

**Alex Sexton:** Yeah.

**Kevin Ball:** I was in the Ruby world, and I remember when the Rails Asset Pipeline came out, and in dev mode it would literally recompile every time you did a page load. So it would go through all of your assets and redo -- it was as all get-out -- but the idea that I could make changes and then just refresh the page and it was there was phenomenal.

**Alex Sexton:** The asset pipeline was also interesting because it didn't have dependencies as a part of the system, or whatever... So no matter what, it compiled and built everything in every folder of your JavaScript app, or whatever. So if you had anything you weren't using, it still would have to run through all that stuff. I remember cleaning plenty of those up.

**Kevin Ball:** When that actually gets into one of the key reasons behind the move from Gulp and Grunt to Webpack is that we now actually have true dependency management, and we can do analysis and actually build out these trees.

**Alex Sexton:** Yeah, did any of you guys use Broccoli in between the Grunt and Webpack days, by any chance?

**Kevin Ball:** Only embedded in Ember CLI, and I never got that deep into Ember; I played around with it. I remember at that time one of the big pitches for Broccoli was "Well, Gulp and Grunt are actually task runners. Broccoli is specifically designed to be a build tool", and I think that's one of the big changes we've got going to Webpack, Rollup and Parcel - they're also, in a lot of ways, conceptually build tools.

**Alex Sexton:** \[00:08:07.10\] Yeah. I felt like Webpack didn't really catch up to Broccoli in terms of dependencies and all that kind of stuff until much later, after it was already popular... And these days it does just fine, but I thought Broccoli was really ahead of its time; I'm kind of sad that Jo Liss kind of stopped working on it at the time. Ember eventually picked it back up, but it was fast, and it has caching down... All the stuff that HappyPack does for Webpack kind of was built into the nature of Broccoli. I think it got a lot of things right because it just stole a lot of stuff from Make, and I think that that was generally a good thing. It was a good project. Very difficult to spell. Try to spell Broccoli right on the first try; two L's, two C's... No one knows.

**Christopher Hiller:** Did it do well with non-JavaScript assets? Because one of my frustrations, at least with earlier versions of Webpack - I haven't tried this with 4, but Webpack was really slow for no apparent reason at compiling Sass. For mostly static projects, I would actually still use Gulp, because for some reason the Sass compilation was two times faster than with Webpack.

**Alex Sexton:** Yeah, I wonder if Webpack was using the JavaScript compiler, versus the native one, or something like that. I don't know why it would be different, except for caching. But Broccoli was somewhat agnostic to exactly what you were compiling. If there was a JavaScript program that could compile something and output an asset from the thing that -- you know, the input and the output, it could cache that and then make it very fast. Because it worked on a dependency tree level, it could cache very finite parts of the dependency tree, and then when something changed, it would only recompile the things that were leaf nodes of that dependency, and because of that it was very fast. That's what HappyPack tries to implement on top of Webpack these days, which is good. If you need a speed up in your Webpack and if you work at a semi-large company and have a large app, you probably could use one, HappyPack is a pretty big win.

The other big win that I think we got at Stripe for dev mode stuff is turn off minification in dev mode. I think a lot of people have that on just because you just run everything in dev mode, but you don't really need it. It's nice to test eventually, maybe run your tests against the minified version, but it takes a really long time to minify JavaScript, so don't do it in dev mode.

**Christopher Hiller:** Speaking of speed, it seemed to me that at least half of the reason that Gulp became popular and people were switching away from Grunt was the knock on Grunt was that it was very slow. There was a module that you could pull in that would make it somewhat faster, but with certain restrictions, where it would only run the plugins that you are actually going to use, instead of trying to load everything up. I think that's why it was slow; it took forever to load, because it had to find and configure all these different plugins, even if you weren't going to run any of them. And of course, the other part of that holy war was convention and configuration. Man, people got upset about that stuff.

**Alex Sexton:** Grunt was much more pleasurable to write than Gulp, in my opinion.

**Kevin Ball:** Oh, wow. I was totally the opposite... I prefer code over massive JSON files, and because the sort of piping nature of it, rather than having to figure out "How was I gonna write these things to this file, and then read them, and write them, and read them...?" The communication via the file system that Grunt had drove me bonkers.

**Alex Sexton:** \[00:12:00.09\] Yeah... I mean, I get it, but I always felt like I would stream one thing into the next thing, and it would never work. I would always have to write some compatibility layer between everything -- like, the dream of just streaming seven things together was never, ever the case... For me, at least.

**Kevin Ball:** Coming back to today's build tools, what about the trend towards "Every framework has its own CLI?" Are those just wrappers around existing tools, or are they providing unique value?

**Alex Sexton:** They are mostly wrappers around other tools when it comes to build systems. I think the value they provide are conventions in the specific frameworks that they're for. I personally think they're critical for beginners.

**Nick Nisi:** Yeah, they make it really easy to get up and running in a project. I'm not sure if they'll have long-term effects of abstracting away those underlying pieces; I don't think so, but... It is really nice being able to quickly get up and running with that, and also it makes sharing projects much easier. If you have to share a project for reasons like getting support or getting help on something, it's really easy to spin up a project with those tools.

**Alex Sexton:** Yeah. I mean, they've become so popular that NPM has roughly built their use case into the CLI in 6 now... So there's Npm Create, which is kind of a better dependency managed version of something like Create React App or Ember CLI. You can kind of create a runner for your framework, that runs across Npm Create, but you don't need to install some global dependency to do it... So they're kind of like fixing some of the rough edges around the NPM side of things when it comes to just needing a global installer that has to be different versions for everything.

So you can Npm Create React App, and there's a space there now... And then that can run all the same code, but in a nicer, non-global way. So I think they're becoming so popular that we're getting first-class support for it in our baseline tooling.

**Christopher Hiller:** Yeah, a part of me wonders if your framework is so complex to need its own CLI, maybe it's too complex. But I'm just gonna throw that out there... \[laughs\]

**Alex Sexton:** Well, complexity has to live somewhere if you're writing a complex UI... So you can choose to put that at the framework layer, or you can choose to put that at the application layer, and I think there are good use cases for both, but I don't think the complexity goes away. If you don't need those things to use your framework, but then you have to write a 500,000-line code base, you'll probably end up having to write those tools or put those tools together yourself... And there are a lot of customizations that you can do to make it specifically better for your use cases, and that's nice, but I don't think -- it shouldn't always be necessary to need to think about all those things.

I think a lot of people's FUD is that they long for the days where you could just write JavaScript in a file, and then load the page, and it worked... I understand that, especially from a beginner's standpoint, that if you don't have to know about the history and release cycles and stages of TC39 specifications in order to write JavaScript, then that's probably better.

**Kevin Ball:** Jerod asked a pretty good question in the chat, which is "Is there gonna be a Webpack killer, or is Webpack gonna stay at the cutting edge?" I know when Parcel first came out and it was saying "Oh, zero config module bundling", it zoomed up to like 15,000 stars on GitHub in like a month... But I feel like with Webpack 4 they've kind of mitigated that, and I'm not hearing as much there. What do you all think - is there gonna be a Webpack killer, or is Webpack gonna stay on the bleeding edge?

**Alex Sexton:** I assume that a Webpack killer already exists. It might be Metro, which is the React Native bundler, which does a lot of the same things, but way faster... But a lot fewer things. But it's pretty impressive. I think something like that will get adapted and picked up.

**Christopher Hiller:** \[00:16:01.07\] I've always felt like Webpack was really low-level, and it would make sense to me for there to be tools built on top of it that would be much easier to use. Angular CLI is built on Webpack, isn't it?

**Kevin Ball:** They use Webpack. Vue CLI extends Webpack... I've been using Nuxt.js - which is a Vue framework - recently, and they hide away the Webpack config under their own config; so they're setting up Webpack for you, and you can get access to it if you absolutely need to, but there's no correct configuration... So they're kind of building on top, as well.

**Alex Sexton:** That's roughly what Create React App does; it'll allow you to more or less just pipe right into it, but to do anything complex you have to eject, and in order to run your app you don't have to write anything at all if you don't want to.

**Christopher Hiller:** So what is the definition of eject?

**Alex Sexton:** Eject just means you can no longer easily pull the latest updates from Create React App. It means if you've changed something sufficiently enough -- really, specifically what it does is it stops using the dependencies to pull in configuration, and it starts using your configuration. But because of that, you can't necessarily update the builder anymore, the Create React App app, because it doesn't know what's in your configuration file, and may no longer support that in a future version.

The problem is that once you add a significant amount to your configuration, there's no way that they could anticipate breaking changes, and things like that... So it's kind of a mechanism around that. For simple apps, I absolutely encourage everyone to not eject, if you can, and just track it... But any significant application that you're working on - like at work, or something like that - you're probably gonna need to eject eventually.

**Kevin Ball:** This feels like an area that has been evolving very rapidly. I think a lot of that is spurred by the adoption of modules formally in JavaScript. And more recently, it seems like there's a little bit more conversion, so it's feeling a little bit easier to manage. Do you all feel like this is gonna continue to be a big innovation area, or is it calming down, and something where build tooling is gonna become well solved and more or less disappear from something we have to worry about?

**Alex Sexton:** Build tooling never goes away. I don't think we've seen that anywhere, in any other older ecosystem, but it becomes... For different things. Like, we take minification and concatenation for granted these days, whereas back when I was first starting, I had to run some Java program in order to minify my code; some Yahoo! thing-- whatever. So I think it just changes. The transpilation becomes transparent, or something like that, and a new, only-load-what-you-need type stuff becomes the build du jour.

**Christopher Hiller:** I wonder if it's going to move away from the CLI... Maybe you're gonna have more servers, or something to do this stuff for you.

**Alex Sexton:** Yeah, it would be cool to be in a world where you could have a render farm for your JavaScript-built stuff, right? You press a button and 9,200 AWS servers all calculate one equation and send back the results...

**Christopher Hiller:** Yeah, you deploy your JavaScript and the server takes care of all that crap for you and you don't have to think about it. That'd be cool.

**Alex Sexton:** That's already what CI servers do, but you still have to run it locally, generally, to develop it...

**Break:** \[00:19:41.21\]

**Kevin Ball:** We were talking a little bit and realized we should really talk a little bit about the module wars, and what has become of that, where that's going, what's happened there... So who wants to lead off on talking about SystemsJS or RequireJS or any of those fun topics?

**Christopher Hiller:** Well, I'm not sure which -- does anybody know if RequireJS and AMD showed up before Browserify? I don't recall.

**Nick Nisi:** I think that it spun out of CommonJS, which is what Browserify is.

**Alex Sexton:** CommonJS was just a -- it wasn't just a one-module spec, it was a set of specifications. Both the CommonJS modules that we know (the Node-style modules) and AMD were CommonJS specs. They were written around the same time... But RequireJS was very similar to what Dojo had already done for years. It just worked without eval.

**Christopher Hiller:** The difference there being that RequireJS or AMD is asynchronous, and Node require and what Browserify used is synchronous.

**Alex Sexton:** Right. The CommonJS modules as we know them are synchronous and require a build in order to run them on the web, and the case for AMD asynchronous module definitions was that by default the AMD modules did not need a build tool... And I have an article on my blog that everyone can go back and read (from whatever year that was)... I think the default standards for things, and neither ended up becoming a standard, or at least by any definition of standard that -- like, browsers implementing it. But I think you shouldn't be required to run a build tool in order to use JavaScript, if that makes sense. It was a nice feature before...

**Christopher Hiller:** Yeah, that was one of the really big benefits of AMD and why it was so nice, because you didn't have to do anything; it was just running the vanilla JavaScript files during development, and that wasn't slow for local development... So it was really nice and easy to get started with that.

**Alex Sexton:** Yeah. But on the other hand, everyone would run a build tool against their AMD anyways in order to ship it, so I understand the other argument, that's like "Well, if we're all actually using build tools, maybe it doesn't matter." I just didn't like that it locked you into using Node, which was not like a guaranteed thing that anyone was even allowed to run at their work, at this time. Most people were not allowed to run Node or couldn't run Node at their jobs at the time when this was happening, so it was somewhat frustrating as a web developer that we were kind of standardizing on Node as the only build tool.

**Kevin Ball:** Do you think that's been more or less decided at this point? Is anyone still using AMD or any of these things?

**Alex Sexton:** Plenty of libraries still use tools to output in AMD... Or UMD, as it's called. There was a project called BestieJS, with Mathias and... What's his name? The Lodash creator; oh, my goodness. One of my favorite people.

**Christopher Hiller:** John-David Dalton.

**Alex Sexton:** Yeah, John-David Dalton. They put out something called UMD, which is the Universal Module Definition, and it would kind of try to detect the module system that you used, and give you the right thing. So it was AMD and CommonJS, and whatever old things; window. So people use tools in order to just export their modules as UMD, and so anyone can use them. I think that's fine. I also think people can do that to your modules. I think you either do UMD or nothing, and either of

those is fine.

**Kevin Ball:** \[00:23:59.15\] Let's move on to looking at things like Prettier, and linting tools, and Flow, and all this. It feels like JavaScript is becoming a lot more formalized as a language in a lot of ways. What are you all using and what do you recommend?

**Nick Nisi:** As we discussed last week, I'm using TypeScript, which does kind of go in the opposite way and forces you into a build for everything... So the complete opposite of what Alex was saying, as a good starting point. But that's trading off to give me a bunch more helpful tooling during development, I think. We discussed that last week.

**Alex Sexton:** Yeah, I'm not against having build tooling, I'm just against requiring it as part of the JavaScript standard. So Typescript is not the JavaScript standard, but if you wanna use Typescript, then by all means add the build tool. I add the Flow build tool to my chain, but I just don't wanna force other people to do that.

**Christopher Hiller:** I used to use Jsint and JSCS in pretty much everything, until I saw that I could do the same stuff pretty much with just ESLint, so I've been using it ever since. I know the JSCS team I believe actually joined the ESLint project, so... ESLint absorbed everything JSCS was doing, so... If you're not aware, JSCS - I think that stands for JavaScript Code Style, or something. It is not a formatter, but it would (I believe) just spout out errors and warnings if the code wasn't formatted a certain way.

**Alex Sexton:** And they both became jQuery Foundation projects, and then later JS Foundation projects, whenever the jQuery Foundation moved over. And because of that, that was somewhat of a nice move to pick up both of them. JSCS was losing steam and losing contributors, so the JS Foundation somewhat facilitated kind of the joining of those projects. I kind of wish Prettier and ESLint were the same thing though, at this point...

**Christopher Hiller:** I do as well... \[laughs\]

**Alex Sexton:** Does anyone not use Prettier these days? It was one of the most quickly picked up projects I've seen, mostly I think because kind of by definition, if you have valid JavaScript, it just runs and then it's over. So it can be somewhat hard to put against an old code base or get people to adopt it on your team, but as far as running it, once you have it set up, it just runs. It's kind of nice in that it's not deeply integrated; it's hugely important and it runs on everything and changes a lot of things, but it doesn't have a lot of dependencies, if that makes sense.

**Kevin Ball:** I have a couple projects that don't have Prettier in, just because they weren't part of the template that I started from, and I didn't bother, but I should go back and put them in... Because it's essentially free, and it removes a whole class of problems.

**Alex Sexton:** I don't even agree with all of the stuff... I pretty adamantly think that some of the choices they make are wrong, but it's just worth -- I can still type them wrong, and Prettier will change them whenever I do a commit, or whatever.

**Christopher Hiller:** Yeah, I'm in the same boat. I don't really care for some of its choices, but I feel like the benefits outweigh the disadvantages... I'm using it on everything that I can. We just actually merged Prettier; now we're using it in Mocha. We did that just a couple weeks ago.

**Nick Nisi:** I'm curious how you all get set up with these tools. Like, when you're starting a new project, do you just kind of have global eslintrc's and prettierrc's that you copy in, or...? I can never remember all of the rules between all of the different ones for setting up the file just the way I want it. I'm curious how you handle that.

**Christopher Hiller:** I manually copy files from the most recent project that I worked on before... \[laughs\]

**Alex Sexton:** At Stripe we have a repo, and I think we might even have a published module... Or maybe it's private, I don't know. But yeah, we can just pull that in. Just like you might pull in Airbnb's defaults for ESLint and Prettier, Stripe just -- you can make your own pretty easily, in the same way. You can even extend Airbnb's and just change a few things... So I would encourage everyone to do that, even if it was just a local GitHub thing.

**Kevin Ball:** \[00:28:08.15\] Yeah, I start from the Airbnb, and then rip out the ones that drive me bonkers.

**Christopher Hiller:** Yeah, Mocha is using semistandard, and then it's--

**Alex Sexton:** Don't tell Feross...

**Christopher Hiller:** Yeah, well... Anyway. So it's usually that, and then there's some modifications. This is why I love ESLint - we have a situation where, okay, you're a test runner; you want to be able to run async code, so you wanna be able to do things in set timeout, in your own code base. But the problem is if a tool like SignOn or whatever comes along and it wants to use its fake timers and change things, so it essentially makes async things synchronous, well you don't want that to affect the test framework... So in order to avoid that, you have to actually avoid the use of global timers. So you can't use a set timeout, you can't use a global clear timeout... So what you do is before you load that stuff, before you load the tests, you essentially just create a reference to the global set timeout, you pass that around and you can use that in Mocha, and not have to worry about somebody else blowing it away.
So I was able to use ESLint to create some fancy custom rules to disallow use of this handful of globals, but also allow references to be made. That's cool, and I think that's part of the reason why ESLint was made, just to be able to create custom rules like that. It's awesome.

**Kevin Ball:** Mocha makes for a good transition. What sorts of testing tools are we using?

**Christopher Hiller:** I'm kind of curious about especially what are people using for functional tests nowadays?

**Alex Sexton:** I think as much as possible we're trying not to write functional tests. And I think also that \[unintelligible 00:30:16.18\] because everyone has different definitions of exactly the borders of functional testing... But when I talk about functional testing, I mean like you pretty much serve your application and have a browser -- like, there's a Java tool that runs against Chrome...

**Nick Nisi:** Selenium.

**Alex Sexton:** Yeah, Selenium has some sub-dependency that I'm trying to think of...

**Christopher Hiller:** Chrome Driver?

**Alex Sexton:** Well, Chrome Driver is an implementation of it, but yeah...

**Nick Nisi:** The WebDriver support.

**Alex Sexton:** WebDriver, that's what it is. So WebDriver is an actual standardized API that all browsers are supposed to implement and kind of do... But yeah, those are so slow and so hard to write in a way that doesn't make them super flaky, that as much as possible doing Jest and Enzyme style, like render this without a browser, and then click the things and check the handlers - that's absolutely like 90% of Stripe's thoughts on writing these tests.

We still want some end-to-end things, right? Just like logging in works, and doing these different things work, especially whenever there are servers involved, and you don't want mocked endpoints, and things like that... But we try to keep those to a minimum, just because they're kind of a nightmare to maintain.

**Christopher Hiller:** \[00:31:46.13\] Yeah. I mean, my experience with those types of -- basically, when I say functional test, I mean you're literally scripting a browser. My experience has been those types of tests are a) difficult to write, b) difficult to not write in a flaky way, and c) a maintenance nightmare... And in the end, it's just expensive; it's expensive as a business to invest in functional tests. At some point you have to decide - is it worth it for what we're doing? I don't know. That's a tough question.

And there's tools -- I'm curious about Cypress.io. I haven't used it, and from what I understand, it's an alternative to the whole Selenium thing.

**Kevin Ball:** I also think as developers we tend to undervalue the value of QA teams, and having people who actually go through and use this thing as users, not even scripted browsers... Which is the epitome of expensive, but when I've worked with a good QA team, they catch things that I never would have thought of.

**Christopher Hiller:** But on the other hand, it could be difficult to -- so I remember trying to hire people to write functional tests, and that was a nightmare, because anybody who could write these tests and write them well probably didn't want to be a QA engineer, and wanted to actually write the code... So that was a really difficult position to hire for, and maybe that's just the way things are.

**Alex Sexton:** Yeah, I think it is.

**Kevin Ball:** We as an industry put this idea that QA is less than engineering, and I think honestly that that's a mistake. QA is a fascinating problem set that is very different. We should be playing it up as something that is very different from engineering, but that for the type of person is an awesome career.

**Christopher Hiller:** Yeah... I mean, maybe it just needs to be framed differently, but anyway... I guess that's a can of worms.

**Alex Sexton:** To some extent, one thing Stripe does very well is almost nothing releases to everyone all at once. We kind of ramp anything up to 1%, or 10 users first, and this is like testing in production, or whatever... But to some extent, if you're reasonably well-tested, otherwise we write a ton of tests; we have coverage tools, all that kind of stuff that measure that stuff. But also, we never assume things are gonna work, even from like a UX standpoint, right out of the gate.

Every once in a while we'll release it to 5% of people, and that's enough to get a few reports that's like "Well, on my browser in IE, this pop-up never goes away", or whatever... And that's at least more acceptable in my eyes than sending it out to everyone that way, but it never is fun to be the person whose pop-up won't go away.

**Christopher Hiller:** You mentioned Jest and Enzyme, so what I guess I'm curious about -- so that does not run in a browser, right?

**Alex Sexton:** Correct.

**Christopher Hiller:** You're testing your React app that is going to run in the browser, but... So is the idea there that it's just not necessary, or it's nice to run it in the browser but it's really just to expensive, and all the problems we were just talking about?

**Alex Sexton:** Yeah... It uses jsdom, so it's using a browser by some definition of a browser; it just doesn't need interactions, because you're simulating clicks on DOM nodes you already have handles on, rather than clicking on like an X coordinate on the page... And that's kind of like the difference. You don't have X coordinates, you don't have a window that can actually be clicked. So things are faked. You get synthetic events, instead of real events, but I think for the most part you can test that changes occur. So if someone clicks on this, you want to make sure that this new content exists, or if someone clicks on these three things, you wanna make sure that this thing is now available for them to see.

I think for the most part in logic, they're somewhere between unit tests and functional tests. They're testing functionality of clicking through the application, but they're not really clicking through the application.

\[00:36:06.26\] I just think that with our current tooling maybe one day functional testing will be fast and easy, and stuff... But there is no flakyness, essentially... Like, comparatively. There is obviously flakyness in any testing, depending on how you write it, but comparatively, the quality of tests that we get and their ability to actually catch things - this is much better, because people actually try to fix the test if they break, rather than just assume they're flaky and turn them off.

**Break:** \[00:36:40.07\]

**Kevin Ball:** Let's circle into another part of the testing cycle, which is continuous integration and how you run tests automatically, and maybe even lay things out to staging and production environments. Alex, I know you said you're using a lot of CI tools - or at least some CI tools - at Stripe. Do you wanna lead us in with what you're doing?

**Alex Sexton:** Yeah, sure. I mean, I also do a lot of open source work - I used to do more, but... Plenty of CI involved in that, too. So you kind of have some different options... At Stripe we use Jenkins, which is a pretty self-service, large CI thing that a whole team needs to run, but it's good for that. Then there are also hosted solutions like Travis CI, or Circle CI, and different ones like that... The ones that you'll see the cute little green or red badges on the top of people's GitHub readmes.

I think if you have a smaller project, really bordering up into pretty large, the hosted things can do well for you... But once you need kind of things behind your own VPN or behind -- you know, start spinning up staging servers in AWS as part of it, or need to scale to hundreds of people building, then you start needing to do something like run your own Jenkins cluster.

But I think CI in the open source world is pretty different than CI in the business world. I think the business world does it pretty well... And I think the needs are different; I don't think it's like a lack of understanding.

So with open source, I feel like we maybe run tests against a few different versions of Node, something like that, and then occasionally, build assets will be done at the CI level. But actually, in open source JavaScript, usually it's just down at the deploy, like whenever you ship a new version, you pull a headless branch out and commit a DIST file with a force flag, or whatever... I think that's more common than CI actually doing the building.

\[00:40:25.22\] It's interesting that CI in the open source world is almost entirely testing, in my experience. In the business world, it's almost -- like, it runs the tests, but that's the first step. It also runs all the builds, it also helps facilitate QA, or staging, or any of those different things. So any time I submit a PR at Stripe, a server will be ready to pick it up, build the whole thing... It'll even spin up AWS servers that can run that branch, and then the bot will come in with a link to a usable instance of the application running against my pull request; there's a massive amount of stuff that you can do at the CI layer to send off resources, send requests, caching, make everything fast, spin everything up...

Stripe runs a monorepo, and I think all of our tests run sub 15 minutes, sub 10 minutes sometimes, depending on the changes... Which is long, I understand, for most people, but it's thousands and thousands of tests. Some of them are functional tests... You know, JavaScript, Ruby, Go - all of that stuff is all running at once. So there are probably several workers running different parts.

We even do things like time all the tests, and all the tests should be \[unintelligible 00:41:53.16\] from each other, and then the workers can split up certain tests into different boxes in order to balance the workers for the next run... So you can kind of do all these sorts of things to really eek out every bit of performance and value out of them. It's absolutely critical to our workflow.

**Christopher Hiller:** And somewhere you said something about how it needs a whole team, meaning you need a whole team to maintain it or configure it, or...?

**Alex Sexton:** I mean, there's that; I don't think that's what they're doing all the time. They're building new integrations, making things faster, maybe pulling in different tools... We have a team at Stripe I believe called Developer Productivity, and they work on everything from those bots that automatically spin up development environment servers for PRs... And quickly - it will happen in less than a few minutes after posting the PR, which is amazing. Like, knowing where to put a bunch of screenshots and explanations... It'd be like "Here, go to the link that the bot automatically posted and use the actual thing that I made, and tell me if it works." That is so great.

**Christopher Hiller:** Yeah, I would have loved something like that five years ago...

**Alex Sexton:** The same team is going to be working on making sure Jira is up and running, and making sure our GitHub Enterprise is up and running, and all of those are working smoothly together. But I think a good chunk of their time is making sure builds are-- like, if a build goes down -- like, if you think about the fact that there are a few hundred developers at Stripe now, if our build system goes down or it becomes slow or it has failures in the master of the branch, to where you can't get out deploys, it's a multi-hundreds of thousands of dollars worth of engineer time that you just lost, and momentum, and all sorts of things get pushed back. So it's vitally important at Stripe scale, which isn't even that big when it comes to number of developers compared to Facebook or something like that, that this stuff is running extremely smoothly.

If we go down - of course, it never happens - that's an incident at Stripe... But also, if the builds go down for longer than a minute or two at a time, that's also considered an equal incident.

**Kevin Ball:** \[00:44:17.09\] So you mentioned the difference between CI in open source and CI in business, and I kind of wonder - some of that is driven by the fact that open source really has teams to dedicate to that, but Chris, how are you using CI for Mocha?

**Christopher Hiller:** We're running CI on Travis CI, and we're running it on App There. We found there is some weirdness that will happen on Windows, so we wanted to make sure that we were getting coverage there. So every PR runs through like four versions of Node, on Travis it runs browser tests, it runs linting... Some self-promotion - I've got a recent blog post all about the changes that we made to our Travis config, that are pretty neat if you're looking to max your Travis build.

Then App There runs just a couple versions of Node. We don't double up on lint checks, or whatever, we don't have App There launch its own set of browser tests, because that doesn't make sense. But that's basically how we do it.

And I agree... Like, I haven't seen a whole lot of deployment happening from open source projects. Usually, the world I'm in, deployment means you publish to NPM. When that does happen in CI, it seems to happen with semantic release, if you're familiar with that tool... But yeah. So there is like an artifact that we -- so we publish an artifact to S3, or maybe a handful of them, which are the bundles created by Karma... So we run our browser tests with Karma, so we basically take the browserified, karmafied test bundle and upload that to S3 if we need to debug it.

I haven't had to use that for quite a while, ever since we dropped support for IE9 or IE8... Because that was really a nightmare to debug. I would log into Sauce Labs, because we run them through Sauce Labs, and you could get into IE8, but you couldn't really see a stack trace... You'd get like a line number, so you couldn't see the code, so I'd have to go back and actually look at the bundle and match up the line number... So that's what that was for. But I would say at least in Node land, we're not deploying much of anything.

**Kevin Ball:** Alright, let's move forward to our next set of tooling - I wanna make sure we have time to cover IDE's, because this is... There's been a lot of progress in the last couple years. I think between GitHub's Atom and the new round of Microsoft VS Code, there's a ton of innovation happening in the IDE space, so maybe let's start with what IDE are you all using?

**Nick Nisi:** As you foreshadowed in the rap at the beginning, I'm just using Vim, just terminal Vim, but I do get a lot of the benefits for my TypeScript code through TS server and through various plugins; I think I have 65 plugins right now, so maybe I'm going a little overboard, but I can do modern development in Vim.

**Alex Sexton:** What plugin manager do you use for Vim?

**Nick Nisi:** Vim-plug.

**Alex Sexton:** Interesting. More of a Pathogen user myself.

**Nick Nisi:** I was using that, but I like being able to just go and comment things out in my vimrc, and turn that off, rather than having to manage Git submodules.

**Alex Sexton:** \[00:48:02.27\] Yeah. I always used -- I use VS Code now, for what it's worth, but I still set up my Vim as if I'm going to use it... I still use it, sometimes... But yeah, I always use spf13 as a good starting point in case anyone needs one. Just like if you wanna try Vim, it's gonna be pretty difficult to use out of the box; that's just one of its features. But if you install spf13, it'll install all the tools that we all install into our Vim anyways; maybe it might pick a side on some holy war of autocomplete, but it's a pretty good starting point if you want some plugins.

**Christopher Hiller:** I'm using VS Code now, I switched a couple months ago. I had been using... Well, first PyCharm and then WebStorm for (I don't know) five years, or something. So yeah, I thought I'd try VS Code, because I saw everybody who's giving presentations is using VS Code, and there's gotta be something to it, and people seemed to rave about it. So I tried it, and I liked it. There's still some parts that bug me, but it works well, it's quick...

**Alex Sexton:** I use vim-mode-plus with overrides in VS Code, and I roughly have everything I really cared about from my Vim config, which is always the problem with Vim modes in different -- you know, in TextMate back in the day, as you couldn't customize it at all. You could do baseline Vim stuff, but everyone uses JJ, or ctrlp plugins, different things like that... So I was able to get my VS Code working to where all the things I naturally did - you know, :wq to save, all that kind of stuff. But also, if you need to click around, you can click around too. It's in my opinion best of both worlds at this moment, but I wasn't an extreme power user of Vim; I was this regular good at it.

**Kevin Ball:** VS Code feels fast until you start trying to do a bunch of Vim macros in it, and then you're like, "Oh, this is so slow!"

**Alex Sexton:** Same with Vim, though...

**Kevin Ball:** Well, yeah. I've started using VS Code explicitly for demos and for recording stuff, because it is pretty, and folks are used to seeing it, but I'm still down -- I've been trying to migrate to more of a full IDE forever, and I just always end up back in Vim. I'm very much a terminal guy, I live in my terminal; I've got tmux set up with Vim, shortcuts and everything, so my terminal and my editor are basically the same thing... It's really hard to get out of.

**Nick Nisi:** Yeah, I'm in the same boat. I'm actually using Neovim in the terminal, and in tmux. I really like that setup, but there are things that I'm really envious of in VS Code, that I just could never get in (terminal) Vim. Some of the new things with collaboration just look so cool. I've always had this dream of being able to use tmux for that, but in reality nobody knows how to navigate my Vim but me, so it doesn't work like that. They also allow you to share dev environments through VS Code, which is really cool. And then the integrated debugging.

**Alex Sexton:** Do you use Vim or Neovim?

**Kevin Ball:** I'm just on old-school Vim. I actually need to check out Neovim. What's the benefit?

**Alex Sexton:** I think it's rewritten in a more modern language; I can't remember even which one. Not everything is supported, but the things that are supported are faster and safer, and stuff. But also, I think it's more externally scriptable. I think you can actually run Vim mode powered by Neovim in the background; I think that might be how I have it set up... So certain things actually run against Neovim, the runtime, and then come back into VS Code. I think I have to provide my Neovim location, for some reason, at least.

**Nick Nisi:** \[00:52:02.13\] Yeah, I think I've read about that; that's really cool. Neovim gives you -- well, the initial benefit was that it had async job support, so your Syntastic or whatever could run without blocking the loop in the editor and freezing the editor while it was doing that, and it also had an integrated terminal. But Vim 8 has both of those now, so...

**Alex Sexton:** It also had better color support, and you didn't have to write Vim script.

**Kevin Ball:** Yeah, it looks like you can write scripts in Lua, and...

**Alex Sexton:** Yeah, I think it's Lua.

**Nick Nisi:** I've tried to keep my setup pretty portable between the two, but the way that it currently is after a couple hours of using regular Vim, I'll get a stack overflow error; I don't get that in Neovim, so... I haven't tried Vim 8.1 or whatever the latest just came out, but...

**Alex Sexton:** Yeah, I just aliased Vim to Nvim at this point, so... I think I'm fully over to Neovim, but again, I don't commonly use it anymore. I think it's good, like, if you don't commonly use it, just switch over now, that way you don't accidentally lock yourself into something that doesn't work.

**Kevin Ball:** Alright, so we've probably lost all the JavaScript fans, as we've been talking about Vim for a while, but good to know that we're on the same page here. Anything else, or last things we wanna touch on before we wrap up?

**Christopher Hiller:** How about Yarn?

**Kevin Ball:** Oh, Yarn...

**Alex Sexton:** My opinion - we use Yarn at Stripe. Yarn is one of those things that's gonna work fine for you if you work against it; enough people are using it to where it's good. I think it motivates the NPM team to speed some things up, and I think it's roughly good to have the competition or whatever, but also I don't feel like you're missing out on something great. I think especially NPM 6 has great features that Yarn doesn't have, as well.

**Kevin Ball:** Is it gonna go the io.js route, where they diverge for a while and eventually make good and remerge?

**Alex Sexton:** That doesn't seem to be how Facebook does things. I think Facebook will dig their heels in and build more things that are custom to just them, if history serves us right. But generally, they're pretty decent tools.

**Christopher Hiller:** I like Yarn just for what you've said, because it helps push NPM forward. Npm had a lot of big changes after Yarn showed up. I tend to just use NPM if I'm starting a project, but I use whatever lockfile I see.

**Alex Sexton:** Lockfiles are a massive improvement to the entire ecosystem. The shrinkwrap was a nightmare in the past... And I think a lot of criticism of Yarn was that like "Of course it's fast, it only does one eighth of what NPM does, and doesn't ensure any of these things", and the feedback that was heard was like "Well, most of the time, most people are only doing this one eighth of things."

So it wasn't so much that the code for Yarn was just brilliant compared to the code for NPM. I think there was just a lot of folklore... But Yarn does a lot less than NPM does, and I think it was motivating to the team to just streamline that most common use case, and I think they have done a good job. Speed-wise it's great.

**Kevin Ball:** Chris, do you wanna chime in?

**Christopher Hiller:** \[00:55:12.09\] No... I mean, I pretty much use NPM. The only thing I ran into with Yarn was that it had some issues... You had to pass a special flag or something to it, or else you could run into problems if you're trying to run it in two places at once.

**Alex Sexton:** Yeah \[unintelligible 00:55:32.01\]

**Christopher Hiller:** Yeah. But for me, I don't really know what the real value proposition is anymore, given that now NPM has all this other stuff, so... But yeah, it doesn't seem like anything that's necessarily gonna bite you in the rear for choosing it.

**Alex Sexton:** They have kind of versions of the same thing, like pulling in packages from local filesystem, or things like that work slightly different. The way the lockfiles store things are slightly different one is deterministic and one isn't -- maybe that is no longer true, but there are tradeoffs... Speed for consistency, or various things like that, but I don't think they're large. I think whatever you use now, if you're happy with it, use it; if it's broken, try the other one, and if it works, use that. \[laughter\] Keep doing that for the rest of your life. They're completely interchangeable from a runtime standpoint. If you know one, it's pretty easy to use the other.

**Christopher Hiller:** Just don't use Bower.

**Kevin Ball:** Just don't use Bower... And that's a perfect place to end - don't use Bower. Alright, so this has been JS Party, talking about tooling. If you're listening to this on the podcast, you should join us live every Thursday; though the time keeps jumping around, it's usually 10 AM Pacific, except when we wanna have Alex, and then it drops down to 9.

That's it for this week's JS Party, and we'll catch you next week!
