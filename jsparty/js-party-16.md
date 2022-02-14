**Mikeal Rogers:** Hey, everybody! Welcome to JS Party, where it's a party every week with JavaScript. We've got a special guest today - say hello to John-David Dalton, also known as JDD.

**John-David Dalton:** Hi! That's me, I'm JDD! \[laughter\]

**Mikeal Rogers:** I'm Mikeal Rogers...

**Alex Sexton:** And I'm Alex Sexton.

**Mikeal Rogers:** Today we're gonna dive into ES modules. To kick us off, I wanna get into the history of ES modules, because I listened to this terrible podcast in the JS Party feed where yayQuery took over and Paul Irish made some interesting statements about how the Node modules did it wrong, and why do ES modules have to be .mjs, if they are the ones that suck?

**Alex Sexton:** That was my line.

**Mikeal Rogers:** Yeah, okay, that was your line... So that kind of argument works if history doesn't matter. \[laughs\]

**Alex Sexton:** No, I mean... If you listen, I think we understand the situation; it was just kind of a fun time to use the "He's the one who sucks" line from Office Space.

**Mikeal Rogers:** Right, right. But when I listened to that in my headphones, I was screaming, because I was like "We couldn't have done anything at the time because these modules didn't exist!" \[laughs\]

We were joking earlier that we're highly qualified to do this, because Alex wrote two sentences of the AMD spec, and I wrote one sentence -- I wrote one sentence of a revision to the CommonJS spec, so we're well-qualified. \[laughs\]

**Alex Sexton:** I mean, I can't think of people who would have written more than that...

**John-David Dalton:** I write code that supports both.

**Mikeal Rogers:** So to really go as far back as we can, JavaScript is like a thing you script include in your page, it's been that way for a long time. The first people to do everything are usually Dojo - they do it in this way that everybody ends up hating, but Dojo really did do modules first; they had an independent loader where you could really isolate your code and write your own stuff. This was way, way before sourcemaps, so in order to get line numbers while you were debugging, you really did have to do the async loading stuff. So they had this whole async loading system for debugging, they had a giant Java toolchain for actually bundling everything together before people really bundled their code like that.

**Alex Sexton:** At first it was all synchronous, right? It literally used synchronous Ajax and eval().

**Mikeal Rogers:** Oh yeah, that's right, it was synchronous XHR.

**Alex Sexton:** Yeah. It would take like three minutes for your app to boot, and then that's where -- what's his name? He's one of my favorite people in the entire world; James... Wrote AMD... Oh, my goodness, this is not good.

**John-David Dalton:** James, uh, Oh, man...

**Alex Sexton:** \[04:11\] RequireJS...

**John-David Dalton:** GitHub... \[laughter\] I'm doing the same thing.

**Alex Sexton:** James Burke, that's what it is.

**Mikeal Rogers:** There we go.

**Alex Sexton:** James Burke was on the Dojo team, so AMD actually kind of came out of Dojo a little bit, and then was the official loader once the RequireJS kind of started to exist. But there was like the first synchronous loader, and then there was the asynchronous version of that, and then that kind of turned into the AMD spec. So even stuff we still kind of at least deal with today - I don't know too many people still using AMD, but it all comes from that original Dojo stuff very directly.

**Mikeal Rogers:** So before we get into AMD though I think that we do need to rewind a little bit... I don't think that they really looked at Dojo at all when they did this, but there was this early ServerJS community where people were building a JavaScript platform for the back-end. The primary one at the time was one called Narwhal, which was on the JVM. These were really dominant before Node came around, and there were a lot of people thinking about different ways to build out this backend. One interesting thing about Narwhal though was that it did have a lot of synchronous IO patterns inside of it.

Their module system was synchronous, and \[unintelligible 00:05:31.29\] and all that kind of stuff. So they didn't do any sync load at all, because it didn't really matter to them, so they wrote this really simple module pattern...

**John-David Dalton:** Did it use load?

**Mikeal Rogers:** No... I'd have to ask Chris Cowell to make sure, but I don't think so.

**John-David Dalton:** Okay.

**Mikeal Rogers:** This was like the first more formalized spec for how you could write JavaScript modules. Traditional NodeJS module users have seen this pattern, it's very similar. The big difference that I would note that is very important is that the module .exports equals a function, that whole pattern where a module can just be one function - that didn't exist in the CommonJS spec.

**John-David Dalton:** Correct.

**Mikeal Rogers:** That was something the guy added later. So a lot of people started using the spec in the Narwhal space, and when NodeJS started, it grabbed that spec. Also, CouchDB I think still to this day has CommonJS module support, so you can add them into properties on a view, and then in your view you can actually use CommonJS modules.

So the spec kind of got around and people started using it for modules and stuff like that, but eventually Node just became so popular that the ServerJS effort kind of died off. Node started to make some very Node-specific adjustments to the module system, so it's really not compliant in any way with any spec that CommonJS wrote. It's not just that module that exports equals a function thing, there's a lot of other stuff in there about how the resolution works inside of Node\_modules, and all these other little tricky things that really matter when you start to say "Oh, let's add another module." \[laughs\]

But a lot of people didn't like this module system, including James Burke. They felt like it was not quite fit for the web, because it didn't have this async loader, because it wasn't built around that stuff...

**Alex Sexton:** They were objectively right, right?

**John-David Dalton:** Yeah, I mean, it's synchronous versus asynchronous. Synchronous on the web is not great.

**Mikeal Rogers:** Well, synchronous in Node is also not a thing. With Node, what we figured out was that even though everything in Node is async, it actually makes sense to have a sync module system because you need to load up your entire application before you can actually handle things.

**Alex Sexton:** But that only makes sense on the server.

**Mikeal Rogers:** \[07:49\] Yes, okay. That is fair. But what people were doing already with Browserify was they were taking a bunch of these modules and bundling them up and using them in their web applications. And everybody in production, even if you're using AMD, ends up doing this bundle step. It's really only in debugging where you wanna truly asynchronously load these things, right?

**Alex Sexton:** Yeah, and potentially in the HTTP/2 push future, but...

**Mikeal Rogers:** Yeah... I've seen some interesting benchmarks around that that show that it's still not --

**Alex Sexton:** I think we're far away from that, but yeah, it's some theoretical future where it's just as fast to not bundle.

**Mikeal Rogers:** Right. So the AMD spec comes along... It had a lot of good fans, people that really actually...

**Alex Sexton:** It was actually part of CommonJS as well. It was a CommonJS spec.

**Mikeal Rogers:** Yeah, so they went back to CommonJS. When we talk about ServerJS and the CommonJS community, this was a mailing list; it wasn't an official standards body, it was really like a mailing list of people that argued about specs they were running on a wiki. There's wasn't much of a process, and I think AMD passed without too much turmoil, but when they started to try and define promises, they got into a lot of trouble, because people just could not agree, and so they ended up with five specs, or something.

Anyway... Yeah, so that kind of brings us to ES modules. I think ES4 had a modules spec in it, which, you know, ES4 kind of died off. Then there was still though like a spec kind of floating around; it was very much based on Python, very pythonic. That had some anti-patterns in it that we really advocated against in Node. For instance, the import\* from something, if you've ever seen this... You can do this in Python and in a few other modules systems where you basically say "every property in this module, just dump it into the current namespace with that name." It seems really convenient, but it makes it impossible to figure out where things in the scope came from... So it's just a terrible feature that nobody should be using.

**Alex Sexton:** You can do it in current ES modules, but it doesn't dump it into the namespace. You can import\* as foo, and then use the bucket of things off of foo, which is cool.

**Mikeal Rogers:** Right, so that dumps it into one property that is named at the top... That's totally reasonable! \[laughter\]

**Alex Sexton:** It's totally different, but it's still -- I know in some systems, (like Java) whenever you import\* versus import something specific, your runtime gets a lot bigger, because you have to actually pull in all those things separately; there's separate files, all that kind of stuff. With JavaScript it really matters; this is usually like a single file, it's rarely like someone re-exporting a bunch of stuff, so it ends up not changing anything.

**Mikeal Rogers:** The main problem with it is that you have three import statements, and they all say "import\* from somewhere." One of them gets the bar property from foo, and then later in the code it's just calling bar, and you're like "Well, where the hell did bar come from? I need to know what this does, I need to look up its docs." \[laughs\] There's just no way to figure this out.

So anyway, they revised the spec; it's still pretty pythonic, but it definitely started to use some of the new syntax coming down the pipe that was also in ES6, stuff like that. Were either of you involved in the spec process at that point, where it kind of came back on the table, and then Yehuda got involved to try and make it a bit more compatible with Node?

**John-David Dalton:** No, I wasn't. I popped in a little bit later.

**Alex Sexton:** I followed the tweets about it... \[laughter\]

**John-David Dalton:** Usually, when it comes to syntax, I'm not a chromogen, I'm pretty open to new syntax... So I'm like "Let's have the new syntax, let's start hearing on it and using it to see what shakes out." I'm all for -- at the time, I was all for the import, the export, all that stuff.

**Mikeal Rogers:** \[11:58\] Right. I think the spec sat in a weird state for quite a while. This was before a lot of new processes were put into place at TC39. The spec kind of lingered with people poking at it, nobody had really implemented it yet, nobody was using it in the wild, because this was kind of pre-Babel, so we didn't have people really experimenting with syntax on a bleeding edge like that... And I think most importantly now there's a staging process where you kind of go through stage zero, stage one, and at each stage there are some bars around how many implementations there need to be and how much input have they gotten... But there's a couple specs in what we call ES6 (which is really ES2015) that predate that process, and one of those specs is the ES modules spec. So it got finalized before there were really many implementations out there. There were some big question marks around the loader, for instance. The module loader is another spec in the W3C that is even less worked on.

Anyway, at the time that it got kind of ratified in ES2015, there was a lot of people saying "Oh, well this is gonna be compatible with Node", because Yehuda had done a bunch of work looking at how Node modules look and work to spec, and how ES modules work, and "Let's make sure that they have feature parity."

When Bradley started to really dig into this though (Bradley Meck) and figured out how we might actually implement this support, he started to run into a lot of crazy edge cases and gotchas in how Node's module system not only works today and loads modules, but also how it can be kind of dynamically shifted, and stuff like that. And we call them edge cases because you don't find them until you go way down this rabbit hole, but they affect something like 20%-30% of the Node ecosystem, so it's important that these actually get fixed... And that's I think where you really got involved, JDD. You started to work on another spec, and looking at changes... I think you can really dig into this here.

**John-David Dalton:** I got involved last year around May, June. I had seen a lot of the discussion about .mjs pop up, and I didn't really like the idea of a new file extension, so...

**Mikeal Rogers:** Let's unwind that a little bit - why do you need a .mjs extension? In the browser, you have this new script include basically that signals "Hey, this is a new style module, not an old style JavaScript thing", but we don't have that in Node.

**John-David Dalton:** You have type=module in the browser; in Node... Node loads things based off of file extension. A .js file, a .json file, a .node are handled based on their extension, and then it defaults to .js; it falls back if it doesn't recognize the extension.

For Node, because the existing module system is CommonJS, there needs to be a way to distinguish quickly between your parse goals - if it's going to be CommonJS or if it's going to be an ESM or ESN module, because they behave differently and there's different rules in place for them.

One of the things is like your EcmaScript module is going to have implicit strict mode, and there's certain syntaxes that are allowed at one and not in the other, so that's why the extension is there.

**Mikeal Rogers:** Okay, and you didn't like the idea that there would be this new extension .mjs?

**John-David Dalton:** \[15:37\] Yeah, I mean... The problem is that all new-facing proper EcmaScript modules would require this new extension, and it introduced some other things too where it was like "Node is not a vacuum, even versions of Node." Projects don't tend to just support one version of Node; there's usually three versions that you end up supporting, so if this is introduced, you're still going to have to have a transpile step if you're gonna wanna support Node 9 or Node 8, so then that leads to things like doubling your package size because you're gonna want to have your .mjs and your .js. But then that also leads to things like transpilation is not 100% accurate, so you get these weird edge cases that a bug will appear in your Node 9 code but not your Node 10 code in the same package. I didn't like the gap there for that.

**Mikeal Rogers:** Yeah. I think there's an additional gotcha in the transpilations, too. As we've been working with TC39 to figure out what parts of the spec maybe need to shift or adjust in order to make our support work, we're finding things in the Babel transpilation today that make the module system behave slightly differently than the spec says. So we're moving towards the spec, but we're actually kind of departing from the way that Babel works. If you're just using transpilation, you may actually end up with a completely different behavior than what you actually wanted.

**John-David Dalton:** But my main nitpick was just on the parse detection, or the detection of the goal. I didn't wanna introduce a new file extension, because that also carries over into the browser. I mean, you say the browser doesn't care what extension it is, but there's already blog posts that say "Hey, just write all your code in .mjs, even for the browser", and I think that seems unnecessary and it seems like there should be a way around that, so I've been kicking around alternatives.

Last year I introduced with Bradley a proposal called "Unambiguous JavaScript Grammar", which is a way that says "If your module has at least an import or an export, then you know that it is an ESM file, instead of a CommonJS file or a script target", because it has import or export.

At the time, Node really wanted that to be mandated by the language, so they took it to the TC39 and said "Hey, TC39, would you be interested in changing the language to mandate this?", basically saying that an ES module must have an import or export to make it unambiguous. The reason is that if you don't have an import or export, there's no way to determine if this is a script file or a CommonJS file or an ESM, because it could look like any of them. That happened to fall through though; they decided that no, they would not mandate that, and so because they couldn't get a language change, they went back to saying "Well, since we can't know based on grammar, we're gonna have to go back based on file extension", so they went, at least for right now, with that proposal.

**Mikeal Rogers:** Can you dig a bit more into the logic there? Why did they not go with this unambiguous grammar? Why didn't they say that?

**John-David Dalton:** Because they want assurances -- one of the things is when you're refactoring your code, you might remove an import or you might remove an export, and be in a state where you're a side-effect-only module, which means no import or export, and then if you do that, you've unintentionally changed your parse goal; you'll go from implicit strict mode to not strict mode. Certain keywords will be available to you or not available to you, so it's a stumbling block. There needs to be intent there.

In the browser you say that something is a type=module; it's very explicit. But with unambiguous, it requires it at a syntax level, and just having import or export, it's easy to slip out of that and accidentally go to a different parse goal, which is why there's other proposals now a year later that say "Hey, you can have a new directive that's like use module, because that's an explicit opt-in to ESM, and something that won't likely disappear when you're refactoring your code."

**Mikeal Rogers:** \[20:19\] So that brings us through up to that spec... So what does the landscape look like now? Who has implemented ES modules, how have they implemented them? Node is currently pursuing this both in standards and in implementation, trying to make this work with .mjs. What's the current status of the spec in the overall implementations in browsers and stuff like that?

**John-David Dalton:** Edge has experimental, I think Firefox and Chrome are both experimental as well, and then I believe it has shipped in Safari. So basically all the major ones have it, either experimental or shipped.

**Alex Sexton:** That means you have to turn on a flag about some thing or another.

**John-David Dalton:** Yes, right... Or have a preview build of the browser. So it's coming, it's right around the corner; it's super close. It's not something that's like a year out, it's something that is months out.

**Mikeal Rogers:** There's also the loader spec, which is its own kind of thing. Have they also implemented the loader spec, and are they considering that more experimental somehow?

**John-David Dalton:** I honestly don't know anything about the loader spec; it is super fuzzy to me. I don't know who's following that. I'm over here on the syntax side.

**Alex Sexton:** Have you guys seen SystemJS, or checked that out at all?

**John-David Dalton:** Yes.

**Alex Sexton:** SystemJS does a lot of stuff with the loader. It's built with the ES module loader project, it's ES module loader polyfill...

**Mikeal Rogers:** So it's a polyfill of the loader...?

**Alex Sexton:** Well, it uses that in order to do more, but it uses the minimal polyfill for the loader API, and then on top of that, it does other stuff... It's pretty cool; I was actually expecting it to catch on a little more, because it kind of does a lot of what JDD is doing now, with crazy support for all different types of things. But I think it went a little too hard into trying to create its own whole ecosystem, and I betcha that's probably what kind of got it..

But it has a lot of loader override-type things that kind of get towards that. That's Guy Bedford's project, SystemJS. It's worth checking out. It has 8,000 stars on GitHub, so it's not exactly hurting, but I've never used it, so I can't really talk too much about it, but I think it's roughly in this space.

**John-David Dalton:** I believe I've seen a couple projects use it. I know he's really into that loader space; I like to find devs that are super passionate about a certain topic and kind of defer to them for it. He's in it and probably is into all of the spec and follows all that stuff, so I would say if you have a question or something, feel free to ping him on it.

**Alex Sexton:** Yeah, it's a cool project. People should check it out. I had a blog post a long time ago (as we all did) about AMD versus CommonJS that I thought I'd find a spot to put in there... And it's not super important, but there was --

**Mikeal Rogers:** I remember that post, yeah.

**Alex Sexton:** I think it was a good post, still... It was like a response, I think, to some terrible Tom Dale post where it's like "Give up, AMD. You've lost. Everyone else is dumb", which is interesting, because I'm pretty sure a lot of Ember uses AMD under the covers.

**John-David Dalton:** I was just gonna say that, Ember does use AMD.

**Alex Sexton:** \[23:53\] Yeah... So I think maybe he read my blog post, which was just that, like, I don't care what you author in. If you're gonna compile, that's fine, but if we're defining a module spec that just has to work everywhere for everyone in all cases, then AMD is the superset. If you write synchronous require statements and you wanna use Browserify to compile it down, compile it down to AMD and then everything will be interoperable, whether you use AMD or you use the thing that needs to compile to AMD. The whole point of it was like -- the standard that we all choose needs to be usable on the web without Node.js, right? You shouldn't need a server step in order to use the default module specification... But everyone's gonna compile, it's just right now everyone compiles -- like, even to this day, Browserify compiles down to a function that's wrapped in functions with keys, and then Webpack uses these IDEs that throw everything onto an object... I feel like we could have kind of like interoperable bytecode modules, or at least for a long time -- now we have ES6 and it'll be fixed.

**John-David Dalton:** There was even a build step for AMD, and that was RJS, the build optimizer.

**Alex Sexton:** Yeah. If you don't mind authoring an AMD - which I didn't - then you might as well write it, and you're gonna build it, but... AMD worked without a builder. It was an optimization step, or whatever.

**John-David Dalton:** I never understood those kinds of fights. If you like CommonJS, use CommonJS. If you like AMD, use AMD. If you're a library author, support both and you'll get more users.

**Alex Sexton:** I understand you \[unintelligible 00:25:35.14\] JS were a AMD, or a UMD creator. We didn't talk about that either, but I would have been more of a fan of just like instead of UMD needing to exist, why doesn't CommonJS just compile down to AMD? Use whatever you want, and then everyone compiles down to AMD, including people who use AMD, and that would solve everyone's problem.

**Mikeal Rogers:** But at what point do you compile it down? If you write a reasonable module, do you compile it down before you publish that module, or do you just publish that module in the regular Node module system and expect that somebody when they use it in the browser they're gonna compile --

**Alex Sexton:** I think everyone -- much like now, you can't really ship ES6... Or a lot of times you can, you have to kind of transpile that way. Everyone, no matter their build stack, can use it. So the idea is like your Dist folder would have your AMD compile. You write in CommonJS and then you compile everything down to AMD in your Dist folder, along with your CoffeeScript, or whatever we were doing back then.

**Mikeal Rogers:** I'm remembering my position during this weird fight with AMD, and the reality was we had way too many modules in the Node ecosystem that were being used by browser tools and being compiled in another browser to say "Okay, we're just gonna not use this spec anymore for publishing reusable components." And on the "What does it get compiled to side when you use it on the browser?", yeah, AMD made more sense for people to use, but also there was already a spec for ES modules; we knew that there was gonna be a modules spec in the browser at some point in time.

**Alex Sexton:** No... It was extremely early and in no way was that a thing that anyone thought would happen anytime soon, and it didn't. It didn't happen for five more years... And it still hasn't happened. \[laughs\]

**Mikeal Rogers:** Right, right. I think the thing that nobody really saw coming was Babel taking off, and then frameworks being built as Babel toolchains, like React... At that point, you can use these new standards and just have them compile down to whatever. It's not even worth having an argument over what that's compiled down to, if it's AMD or CommonJS or whatever, as long as there's a good sourcemap.

**Alex Sexton:** \[28:01\] I actually think it's still a little bit sad that -- like, it will eventually not be true anymore. Eventually, modules will work in the browser without Node, but I think it is a bad thing, and was bad for the web, or whatever - and there are tons of bad things for the web and it's fine, everything's gonna be fine... But I think it's a bad thing for the web that we let that happen, to the point where like if you want to use JavaScript on the web, you also have to use Node. That became a rule. And that's great for Node, but bad for the web, I think. We locked people into "You must use this server-side JavaScript thing in order to use this open platform that's a completely different ecosystem."

**Mikeal Rogers:** So this is what I'd argue with though - one, referring to it as a server-side thing is a little bit disingenuous, because when you use it this way, you're actually using it as like a front-end compile step, and you're using it as like the way you would use Python, or...

**Alex Sexton:** On a server.

**Mikeal Rogers:** Well no, but you don't call Python a server language when you use it to just like run a script on your local system. It's a system language.

**Alex Sexton:** Sure, but I don't care. What I mean is that people already had Ruby-built pipelines, right?

**Mikeal Rogers:** But they sucked... Compared to what we know now.

**Alex Sexton:** They all could have got better in the same amount of time, if we--

**Mikeal Rogers:** No, they couldn't, because the people that innovated-- people that have been innovating in these toolchains get to work in JavaScript, and that's the language that they know and love, and they're part of that same community. And the reason why we have much better toolchain-- Node is not a particularly great language for this, actually... Doing everything from I/O in the callbacks is not particularly good at this case.

**Alex Sexton:** Your bias is showing, in my opinion. I think we can parse JavaScript modules in any language that we want...

**Mikeal Rogers:** But we were...

**Alex Sexton:** I mean, we were in Java, for one thing...

**Mikeal Rogers:** And in Ruby.

**Alex Sexton:** ...and two, there were plenty of really fundamental, huge leaps in tooling that happened in Rails and in a lot of these things prior to any of this taking off, and to think that those tools would have just stagnated because Node never existed to come save the day because everyone could type everything in JavaScript--

**Mikeal Rogers:** No, no, no, that's not what I'm saying...

**Alex Sexton:** That's exactly what you're saying! So silly...

**Mikeal Rogers:** No, what I'm saying is that it's definitely revisionist history to say that it would have been better if we didn't have to use Node for these things, because what we get from having a toolchain that can take all of these different Node pieces and put them together, regardless of what language it's in, is more valuable than not having it. So we were gonna move to this system anyway, and the reason that we moved to Node was because these people were able to innovate quicker in JavaScript.

You were at it, I remember that you were here -- so in 2011 at the first NodeConf in Portland we had a panel, and one of the questions to the panel was "What should you not use Node for?" and everyone on the panel agreed - Ryan Dahl, Isaac... Everybody. I think Brendan Eich was even on it. You probably don't wanna use this for systems stuff, for what you use make scripts for and things like that. It's nice to have asynchronous flow when you do that stuff... Literally the thing that is maybe the major use case right now, and we were saying "No, it's probably not good for this." And at the time, \[unintelligible 00:31:22.15\] was able to wrap half of all the modules in Node, so that tells you the size of the ecosystem at the time that npm had grown to.

After that, there were so many things written in Node and so many things written in JavaScript that could be compiled down to the browser that it was like "Oh wow, we get to tap into this great ecosystem when we write this tooling. This is a much better language to do this in", and a bunch of people stopped doing this stuff in Ruby and started doing it in Node. They found it better, even though it's not particularly a better language.

**Alex Sexton:** No, they found it required...

**Mikeal Rogers:** Required?! Who made them do this?

**Alex Sexton:** \[31:59\] My problem isn't that Node existed and offered these tools, my problem is that the default thing that we all chose required you to use this single language. We got away from being able to do anything in any other language because we standardized a specific tool. I'm not mad that Node existed, but I think Node should have compiled down to a common format that worked on the web, versus having everyone need o switch their entire systems over rather than choose their tool based on their needs, or whatever.

Revisionist history is to say like "Oh, well the Rails tools aren't good now." That's because everyone had to switch over, of course!

**Mikeal Rogers:** This has to do with those, because every tool that takes a Node module in the Node format and puts it into something compiled for the browser has to have its own interpretation of the module system. It doesn't get to leverage Node's module system... That being Node's module system is really no different than it being an AMD as far as Ruby is concerned, if you're parsing that in Ruby and creating a Ruby toolchain around it. You don't get any particular benefit actually out of using Node; you still have to implement the entire module system... Or at least enough of it to compile things down. Browserify doesn't use Node's module system, it has to actually reimplement it.

**Alex Sexton:** I think that is a very simple way of thinking about that, sure.

**Mikeal Rogers:** I think that these workflows won because they're better, honestly.

**Alex Sexton:** I'm not saying that they aren't better.

**John-David Dalton:** I thought they won because just -- I wanna write in JavaScript, so when the opportunity came to be able to do that and have system-level access be able to write files and load modules and reuse code, I jumped at it. That was a no-brainer for me to switch.

**Alex Sexton:** Yeah, so I think maybe both of you are misunderstanding me. I would have immediately used all of the Node's stuff... I think it is the best tool for the job etc. etc., but I think that it is explicitly anti-web to essentially say "This is the new standard", even if it's not a real standard; everyone said "This is how everyone has to do it from now on", which required people running Node. I think the fact that Node was the standard for modules and it did not work on the web without using Node was a step backwards before we took steps forward. That's all I'm saying. I still would have used it.

**Mikeal Rogers:** How do you load AMD modules without any code to load the AMD module?

**Alex Sexton:** AMD by default just works. It injects the script tag...

**Mikeal Rogers:** There's a still a little loader there.

**Alex Sexton:** You have the AMD runtime - there's even like a miniature one; it's 2k, or something... I think it's called Almond. It sets up the names \[unintelligible 00:34:59.24\] for things to be able to require and define, and then it loads your script, and then whenever you require a new script, it is asynchronous, so it doesn't run the function until it loads the three scripts that you say are required to run this, and then those are then available inside of the function that eventually gets run.

It works completely without any build, and I think that's a good default, because it doesn't require people who just wanna build a website to learn Node whatsoever, or learn any server-side anything.

**Mikeal Rogers:** So you can also do this with any module in npm. There's a thing called Browserify CDN, where you can just in a web browser say "Oh yeah, just require this module." You don't have to have a Node build pipeline -- you don't need a pipeline, you can just use it. And it's not super popular because guess what, everybody has a build toolchain anyway.

**Alex Sexton:** \[35:54\] No, it's not super popular because the only thing I can think of that's worse than requiring Node is requiring BrowserifyCDN.com as the required thing to build web pages. That's not a solution to this problem generally, it is someone else doing the Node build pipeline for you, that still requires Node.

**John-David Dalton:** As a sidetrack though, there is an AMD loader for Node too, so... That was kind of cool. You could use AMD syntax and have it work in Node as well, if you required the loader.

**Alex Sexton:** AMD actually even worked in most simple synchronous cases, with a small build step that didn't need any context of -- like, you could do it with Dash... So you just need to add a line at the top and a line at the bottom, essentially wrapping it in a require function. Then as long as you had essentially statically analyzable with RegEx require statements, it could then do a function.2 string and then figure out what you're gonna require and then not call your function until it asynchronously loaded those things. That was an alternate thing that most people didn't know about.

So you could actually author synchronously and then still ship async AMD with like a Bash build step that just concatted a line up top and at bottom.

All I'm saying is that everything's fine and I used the tools that were the best, but I still think it was anti-web and we could have done better, and we should have done better. We should do that next time.

**Mikeal Rogers:** I don't agree that it's anti-web, but I will say that the recurring theme here is that this thing that is standardized and adopted is just more important than this thing with feature X. That's a recurring theme that we'll see in technology forever. The thing that everybody happens to be using, the thing that gets the most adoption at a certain point in time is what we end up standardizing to, even if it lacks feature X, Y or Z.

**Alex Sexton:** I think that is the direct reason why websites are really slow on mobile devices today. Node is the reason. The fact that synchronous, giant builds \[laughter\] -- no, seriously... The fact that synchronous, giant builds became the quick standard of just like "Take everything in your Node modules and build it into this giant object that you ship as a 4 gb file at the beginning of your website synchronously." That's the Node pattern for this, right?

**Mikeal Rogers:** I thought Alex Sexton was my co-host, not Alex Russell. \[laughs\]

**Alex Sexton:** That's the problem. So if we would have started with something that could do asynchronous loading, then I think we'd be in a much better place, where people would only be loading things that they needed for any given page... By default, because that's how it works.

**Mikeal Rogers:** I actually think it's very valuable to not have to write a lot of your own code, and whoever is the best at creating reusable code and dependency networks that allow you to do a lot more while writing a lot less are gonna win. And eventually, that's gonna turn into a bigger bundle, and it doesn't really matter -- like, whoever won was going to be the best at creating this future problem...

**Alex Sexton:** No, I mean... By default, if you asynchronously loaded packages, you could just say -- like, nothing has to change, it's just when you hit this page, the new package loads. It's a built-in kind of feature to the asynchronicity of the thing. Right now there's some cool stuff with like async/await on top of imports that people are starting to clob onto for asynchronous imports... And those are cool. Finally, we're back into a world where this is possible, and I think once that catches on, to do like "Hey, this is a different view on a different route and it has a bunch of different dependencies because it's my settings", then once people move into this idea of "Sometimes I can asynchronously load dependencies", then bundle sizes will immediately -- like, if you cut your bundle size in half, that's huge; that's insanely huge.

**John-David Dalton:** It's already making its way into build tools, too. Webpack now supports dynamic import syntax, and it should do that - deliver part of the bundle upfront and then part as needed.

**Mikeal Rogers:** \[40:06\] I don't know, I'm so much skeptical of our ability to cut up the application code this much to make a big difference for secondary and third loads, when if you have a service worker, it gets loaded after the first load anyway, and if you have a mechanism by which you can update it before they requested the new code, like when you publish something it gets downloaded by the user in the background before it's actually needed - that's always gonna be much, much faster.

**Alex Sexton:** There are definitely parts of the solution to this problem, but you can never get around the fact that the first time that you go to a web page, it takes 10 seconds on a not brand new iPhone to parse the JavaScript. It's a real problem and it's not going away. I think out current build system is a direct child -- the cause of it is because we adopted a synchronous server-side tool for doing web building, and it worked for a long time.

**Mikeal Rogers:** I don't agree with that at all, but okay. \[laughs\] At some point we have to move on though. Alright... So Alex Russell is gonna take a break, and then we're gonna get Alex Sexton back for a minute. \[laughs\] When we come back, we can get into the project of the week.

**Break:** \[41:29\]

**Mikeal Rogers:** Let's now dig into the project of the week. JD, you wrote a loader to -- I believe this is too to the universal spec, that you do your working on?

**John-David Dalton:** Yes, so it's part of Lodash 5... So the Lodash 5 is the thing I'm working on. It's going to be ES6+ only, and I did not want to have to transpile it back for Node 4 or 5 or whatever, so I wanted there to be a loader for that, and so I had to create one. I've created a work in progress - this has not been published yet. If you go to the repo, which is github.com/standard-things/esm, you'll see the EcmaScript module loader there.

It is for Node 4+, it supports .js, .mjs, it supports dynamic imports, it supports the file protocol, it supports live bindings, it's going to be spec-compliant by default, which means that things like unambiguous grammar are off by default, but you can opt into them... Things like carrying over some of the CommonJS goodies like dirname and filename that require named exports of CommonJS modules - all of that can be opted into, but by default it will follow the Node behavior of what .mjs and ESM is in Node 10, except it will be available for Node 4+.

\[44:30\] What's nice about that is that you can just ship one version of your code and it just works. The consumers of your package don't have to care about it either. They don't have to worry about if they're loading ESM or CommonJS. For them, things will just work. So it removes the compile step, it removes having to have dual packages, it allows you to support a range of Node versions, and you can use import/exports, so it's a win.

**Mikeal Rogers:** I've really gotta ask you, so the usage here is -- basically you do require @std/esm, and then the import syntax in the language starts to work properly... How the hell did you do that? I'm looking at this going "How would this ever work?!"

**John-David Dalton:** So I need to add an example for common usage - what you would normally do is inside your package you have an index.js. Your index.js can be basically two lines long. The first line is to require the standard ESM loader, the second line is to then require your ESM code; usually module.exports=require your whatever.mjs and then .default, so that's it' After that, all of your ESM code should just work.
What we do is we tie into Node module compiling and loading mechanism, and we can then parse the code, transpile it on the fly, cache it and then load it. But the thing is because we're dealing with such a small subset of the language, we can do this in microseconds, so not even milliseconds - superfast. It's cached, so it's only done once for the lifetime of the unchanged file, which means that most of the time it will be comparable to CommonJS loads... And that's how we do it. It's a quick, speedy transpile. Then I selectively wrap the loader.

What we've been able to do is most of the time whenever you have a loader that you're overriding, it's a global change, but that would be not good, because you would have modules that all of a sudden start working that did not opt into it... So I've done a lot of work to ensure that only packages that are using the standard ESM loader get the behavior.
I've also done it in a way to where you can support versions of the ESM loader. So one package could be using version 1, one package could be using version 2, and they're not gonna conflict or stomp on each other.

**Mikeal Rogers:** That's impressive. That's really hard to do properly.

**John-David Dalton:** Yeah, so we've got that going... The idea is that, again, the consumer should not have to worry about it; it's just a way for you as a package author to have your import/export with a very little ceremony. You basically require it as a dependency, and then you have that small hook inside your index.js file to load in your ESM code... Which is great, because later on if you decide to drop the loader and you only wanna do Node 10+, then you just change the index.js file, and that's it. I wanted it to be super lightweight.

\[47:57\] Again, I like unambiguous module grammar; I don't necessarily want all my code to be .mjs. I like a lot of the Node carryover stuff, so for me, I'll be configuring it with those options. But for everyone else, it will be standards, and as spec-compliant as possible by default... Which is great, because if it's spec-compliant by default, then you can take that same code that you're writing and loading in Node, and then you can take Babel and transform it back, if you want to, for like a website... Or you can browserify it or webpack and bundle it, and it should just work. So having it be spec-compliant by default is a pretty nice default.

**Mikeal Rogers:** And to make Alex here very happy, it means that you can just use this in the browser without any tooling and without Node, right? Eventually, when we have \[unintelligible 00:48:48.24\]

**John-David Dalton:** So ESM and Node will still have Node's module resolution - lookup, I believe...

**Mikeal Rogers:** Oh, right, right.

**John-David Dalton:** So that doesn't transfer over to the browser. I wish it did, because that's super handy, but --

**Alex Sexton:** It could with a loader override, I assume...

**John-David Dalton:** That is correct, you are right. But the good thing is that existing tools should continue to work. So this is something that you can opt into, it gives you enhanced support...

Another thing I like is that with Node v7+ it's like 99.9% ES6-compliant, right? It's just essentially missing tail call and import/export. So this import loader, this ESM loader just adds that import/export bit to the language, so it's not having to support a ton of crazy stuff, and that's why it can also be super fast inside of its transformations.

One of the first things I did was reach out to one of the Acorn devs to see if they could come up with a way to do a fast top-level parse, and sure enough they were able to cook one up in like a day and a half. I then took that to a project called Reify, which is done by Ben Newman, and Reify is what my loader is based on. Then I started contributing to Reify, improving its load time, improving its parse time, adding support for gzipped modules and some other things, and then from there I'm now able to fork and create the ESM loader. It's been like a four-month plus process on this.

**Alex Sexton:** That's it?

**John-David Dalton:** For me? Yes. \[laughter\] It was four months for me, but Ben has been working on this project for over a year, so I'm leveraging the work and the experience -- a project that has not only been worked on for a year, but it's being used by MeteorJS right now in production... So it gives me confidence that this thing has some substance to it, it's just all theory; this is something that is actually being used at a company, people depend on it, so I felt more confident basing it as my approach to the problem, as well.

**Alex Sexton:** Sure.

**John-David Dalton:** To me, it's super simple - it's one function call, then after that you get it. What's nice is, as you see based on the readme, it works in the Node REPL too, which is where you just require it and then all of a sudden the syntax just works, import/export after that, which is super handy. I dig that, too.

One of the things I'm excited about that's non-standard is the support of gzipped modules. You know the browser supports gzipped compression for your resources - JavaScript, CSS, HTML... It seamlessly handles that; Node doesn't seamlessly handle loading those kinds of resources. Node has gzip support built in, but there's just not a loader mechanism for it. Because Lodash is depended on by a good chunk of the ecosystem, I get to see report after report about filesize, and the current build tools - going back to build tools having some issues - don't show the minified gzipped size of something, they show the on-disk size of your Node modules package, and Lodash happens to ship its dev build in the Node package. That means it's got all of it's documentation and source code in-lined, so it's a 4 mb on disk.

\[52:33\] Lodash 5 will be gzipped and will be less than 90 kb on disk, so I've optimized it heavily there. One of the secret sauces to that is loading gzipped files seamlessly. To the end user, their code will just work, but instead of it loading a .js file, it's loading a .js.jz or .mjs.jz file.

**Mikeal Rogers:** Word of caution, though - not everybody should do that, because if you have a lot of tiny gzip files, they end up being really large, actually... Like, there's not a huge amount of benefit to that. And I imagine uncompressing it in real time can be kind of slow, as well.

**John-David Dalton:** Actually, if you gzipped -- so I didn't experiment where I just gzipped my Node modules folder, Babel... You know. After a while, your build tools and your build change - you'll have over a gb inside your Node modules folder... So I gzipped it and I saved 500 mb out of the gate. And it turns out that reading from disk is actually more expensive in many cases than inflating gzip through your CPU... So in many cases, small gzip files will actually load faster.

Isaac of npm (formally Node) has also written a 3x faster gzip loader, which is what I'm also using. It's super fast. I'll be using it, like I said, for Lodash. I like that, because with Lodash, if you wanna load the kitchen sink, it's 600+ modules; I'm using that as my benchmark for the ESM loader as well, seeing how fast I can load 600+ modules in Node, with or without gzip there.

I will say it's not a silver bullet, but for me, since most people have multiple versions of Lodash, 4 mb x 4 mb + 4 mb starts to add up, and eat into people's quotas for things like Azure functions or AWS Lambdas, or Electron apps and things like that. Your Node modules folder tends to inflate and can have consequences, so it's nice to be able to have a way to zip that up.

**Mikeal Rogers:** That's a really good point.

**John-David Dalton:** \[unintelligible 00:54:50.08\] the actual ESM loader. What this doesn't show is that the ESM loader will be a zero dependency package, and will be under 30 or under 40 kb. So the ESM loader is not only small, but zero dependency as well. I wanted people to be able to feel like they can add this to their project without having it bloat it up, so I'm using Webpack to actually build-optimize the loader, I'm using Zopfli to compress it, and then using the built-in gzip support to load it up and execute it, and it actually runs on par with a non-gzipped version, but it goes from being over 240 kb to just being under 40 kb. Again, it will be fast, it will be small, a zero dependency package that you can just include.

Lodash will be taking a dependency on it - I'm incorporating feedback from people like Sindre Sorhus because he's massive in the ecosystem, so I want him on board with the ESM loader as well, the naming...

**Alex Sexton:** Is that based on his tweet that said "I will never move to .mjs in the history of \[unintelligible 00:55:58.03\]"

**John-David Dalton:** I had been discussing this with him before that even. If you noticed in his tweet, he says he might use the loader that I'm working on, so he's been in the loop for a while.

**Alex Sexton:** Oh, nice.

**John-David Dalton:** \[56:11\] Even the name... One of the first things I did was look up a standard, official-looking name, and get the namespace for that and the package for that. It's because I wanted to feel official, I wanted to be spec-compliant, I want to be easy to reach for and use, and that would be a user land solution to this whole .mjs/ESM compatibility issue that we'll crop up.

**Mikeal Rogers:** Corban in the chat is asking (just general) "What's the SSD and CPU on what you're doing these benchmarks on?"

**John-David Dalton:** Good question. I have the MacBook Pro (Touch Bar) laptop plugged in. Even unplugged, I get similar speeds unless I'm on low battery, and that's when the CPU starts to kick in. I will say that it varies from project to project, but the cost to me isn't egregious and in some cases it's a benefit. So for me the file size savings is the biggest win for the compressed file.

**Alex Sexton:** What are people's concern there? They're just on like a resource-constrained device, like a Raspberry Pi, or something?

**Mikeal Rogers:** Well, I also think when you're comparing -- the trade-off of \[unintelligible 00:57:30.16\] is that it's a lower file size, but then you have to take some CPU cycles to decompress it. It matters if you have a fast CPU versus a slow disk, or a slow disk versus a fast CPU, or if you just have a fast both, right?

**John-David Dalton:** Right.

**Mikeal Rogers:** On a MacBook you do have an SSD, but you're also on top of the worst file system ever created by human beings, so...

**John-David Dalton:** But this is also a single-time load for the lifetime of the application, because Node caches the loaded modules as well... So what you'll be concerned with is your startup cost, and that's something that you can weigh.

For me, the benefit is really clear because most -- so I should also mention this... Lodash 5 will not have an index file, will not have a main monolithic include; everything is cherry-picked, which means that -- a common usage is for people to reach for about five or six of the 300+ methods, and just use five or six. For me, five or six small loads are nothing, so I get to save over 3 mb in package download and have almost negligible impact on the load. It's a win for me in that case.

**Mikeal Rogers:** Right now I actually ended up pulling down the Lodash.whatever method that I need from npm, so that I get a smaller version - how is that gonna change in Lodash 5 with this?

**John-David Dalton:** So that actually ends up being a larger version. I'm stopping the individually packaged methods - like the Lodash.chunk package - because it turns out code can't be shared very well across those packages. Something that's nice about a single package that has a lot of submodules within it is that you can use build optimizations inside Webpack or Babel to alias and reduce functionality, and that's something that doesn't travel well across packages... So I would end up actually duplicating a lot of code in those individual packages.

Something I'm doing with the Lodash 5 is before, it gave you all the functionality upfront, and then you have to opt out of functionality, which means it created a bigger build by default. Lodash 5 is going in the opposite direction and giving you minimal functionality upfront, and then there'll be mechanisms for you to opt into more functionality, so you'll get smaller builds by default.

With that, I think the need for individual packages will be reduced, and I can standardize folks on just using the single Lodash package and the build tools around that, like Webpack and Babel or whatever you need to optimize and enhance your package and bundle.

**Mikeal Rogers:** \[01:00:19.13\] In order to do this, are Rollup and Webpack gonna have to become aware of your module system?

**John-David Dalton:** Actually, for the gzip files, they will; they will have to become aware. I have already contributed the loader to Webpack, and it's part of their Webpack-contrib. So it's already in Webpack, it's already been published for them. For the other ones, yeah, they'll have to. What's great is that it's about two lines of JavaScript to get it to work. It's really not complex, because Node already has gzip support, has a Zlib module, so... It's like, you read the file in, as a buffer, you pass it to the gzip decompressor and then you spit out the output (it's super tiny), but yeah, they'll have to add that, and I think that with Lodash it will get added, so I'm not super worried about that. There will be a time where Webpack will have it, and others won't. But I use Webpack, it's the thing with momentum, so I went and targeted that first.

**Mikeal Rogers:** That's great. Alex, do you have any remaining questions before we move on to picks?

**Alex Sexton:** No, let's do some picks.

**Mikeal Rogers:** Yeah, this is all super compelling. Alright, Alex, why don't you kick us off.

**Alex Sexton:** I am going to pick somewhat of an ecosystem of ideas, kind of... It's the Fantasy Land specification. At Stripe we use some types, and then there's some people who are really into types, and they make me use them a little more than I like, but some things end up being really pretty and good... And there's kind of this specification for interoperability of common algebraic structures in JavaScript called Fantasy Land. I think they're referring to the fact that if everyone used this, everything would be so much better, which is like, maybe...

**John-David Dalton:** Actually, I believe they were naming it that because someone had been poking fun at them in a Reddit thread, and they said "You must be living in a fantasy land!" and that's how the spec name came.

**Alex Sexton:** So I like it a lot, but I agree that it's a fantasy land. We use some subset of these at Stripe as part of our stuff, but it's just like whenever you need either algebraic structure to handle errors, and leftMap, rigthMap, whatever type stuff... But then there's kind of a community that wraps popular things...

For instance, there's a Lodash Fantasy Land implementation that--

**John-David Dalton:** Oh, now way!

**Alex Sexton:** Yeah, so you can get that, or you can get Ramda Fantasy Land as well. Any of that different stuff... Not only is it typed, because there are type defs for both TypeScrypt and FlowType, but also it adds in these algebraic structures for how things come back and how you use them, and things... And it's cool.

I think if you kind of start with it or use it for some base core of your fetching code, or something like that... Any sub-ecosystem could completely use this and be pretty successful, even if you can use it across everything, because other libraries don't necessarily \[unintelligible 01:03:33.06\]

**Alex Sexton:** I tend to think for functional programming a little goes a long way; I'm into the "a little bit in moderation is a good thing." I'm on the fence about this whole FP thing. I offer functional forms of Lodash modules called Lodash/fp - it's built into the existing 4.0 - and that has everything auto-curried, data-last, immutable, all of that stuff. And I kind of see it in the same vein as like -- I supported AMD, and the fans of AMD were so gung-ho and so supportive that they gave Lodash a boost in terms of usage, and they were super loyal...

\[01:04:26.02\] I see FP as kind of that same thing where it may not be as big of an audience, but they are very enthusiastic. The users of functional programming styles are very enthusiastic, they're super eager to help, so I'm trying to decide how to continue that with Lodash 5, too. Totally cool, yeah.

**Alex Sexton:** Yeah, you should look into Fantasy Land.

**John-David Dalton:** Yeah. It's actually the most requested feature on Lodash right now - a Fantasy Land compliant version.

**Alex Sexton:** Well, cool.

**John-David Dalton:** I bet you didn't know that! Totally close!

**Alex Sexton:** I did see that issue, but yeah.

**Mikeal Rogers:** Alright. JDD, do you have a pick for us?

**John-David Dalton:** I do have a pick, and it is for projects like Babel. I would say they're always looking for contributors to help. Projects that I see requesting for contributions and pull requests would be things like Mocha, MomentJS, Babel... If you're looking to get into open source and you're looking to get your feet wet, they have open issues that are tagged for things like "Good time first contribution", "Documentation tweaks" - things like that are a good way to get into open source and you're really gonna be helping out the projects.

I would say look to those, especially if you use them in your day job. If you use Babel, go contribute back to it; if you use MomentJS, which is awesome for dates, contribute back a little bit. It means the world to the maintainers; they're just like everyone else, they're trying to find the time to work on the project, so having a helping hand, or even contributing feedback to an issue or documentation is a big help. Check out Babel, MomentJS and Mocha.

**Alex Sexton:** The time may have passed, but for a long time the best place to contribute - anything that TJ wrote and abandoned was in dire need of people to do easy fixes. I think Mocha still falls there.

**John-David Dalton:** Yeah. That means the world to people. Help out. Lodash itself is in a pretty good, stable state. I'm taking my time with version five, so I'm coasting on that front, but on these other ones, these other projects could really use some help managing issues and pull requests and features.

**Mikeal Rogers:** Cool. My pick is Mapzen. If you've ever had to integrate a map with a website or app that you're using, you probably poked around with a few things that are terrible and then settled on Mapbox. Mapbox's definitely set like a great standard - they were better than everything else - but they get really pricey really fast if you go past the free tier.

\[01:07:12.08\] Also, I have a bunch of code sitting around that I have to copy and paste in in order to figure out how to do things. So the Mapzen JavaScript API is just a little bit more evolved, a little bit easier to use. They have a lot of the same support and cool tools and everything, but it's just a bit easier, the ergonomics are a bit nicer, and much more incremental pricing, so... I'm loving Mapzen. That's it.

Alright, thanks everybody for joining us, thanks JDD for coming on for this episode.

**John-David Dalton:** Thanks for having me.

**Mikeal Rogers:** Yeah, anytime. With that, we're all done for today. Thanks, everybody!

**John-David Dalton:** Bye!
