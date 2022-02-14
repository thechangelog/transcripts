**Nick Nisi:** Hello, and welcome to another adventure with JS Party. I'm Nick Nisi, and I am so happy to be here today! Hoy, hoy! I want to introduce my fantastic panel with me today. First we'll start with Divya. Divya, welcome!

**Divya Sasidharan:** Hello! Happy to be here.

**Nick Nisi:** Then we have Kball.

**Kevin Ball:** Hey, hey! ...to go with your hoy, hoy.

**Nick Nisi:** \[laughs\] And Mikael. Welcome!

**Mikeal Rogers:** Hey-o!

**Kevin Ball:** We should create distinctive sounds for each of us.

**Divya Sasidharan:** Was that part of the agreement that I missed? We all had to have distinctive sounds?

**Mikeal Rogers:** Oh, you didn't get your codename and your distinctive yell? Oh... \[laughs\] Somebody messed up onboarding you...

**Divya Sasidharan:** Yeah, I know... \[laughter\] Clearly.

**Nick Nisi:** Do you wanna make up one right now?

**Divya Sasidharan:** It's fine, I'll think about it. I'll think about it.

**Nick Nisi:** Alright. Well, today we are talking about all things ES Modules - where that is, what's going on with that... There's been some recent news, and we've got our resident expert, Mikael Rogers here to walk us through it, tell us what it is. So maybe we can start off, because we were kind of discussing on the pre-call a little bit how we're really not experts - besides you, Mikael - in this... So let's start off and get us all on the same footing with what is actually ES Modules; what does that mean?

**Mikeal Rogers:** Yeah, well let's go back a little bit... So they wrote a spec... TC39 wrote a spec for modules a long time ago, before they had their new staging process... And as a result, it was ratified a little bit too early, to be honest. But the goal was to put a module system in the browser. You've got a module system in Node; wouldn't it be cool if you had a module system that was native, in the browser? And the browser has a very unique set of constraints compared to something like Node... So the standard was really written around those constraints.

**Nick Nisi:** And this is kind of an important thing, that Node already had modules.

**Mikeal Rogers:** Yes, yes.

**Nick Nisi:** So this is coming after that.

**Mikeal Rogers:** Yes, yes. I mean, if you wanna go all the way back to ES4, I think that they had considered it a little bit... But it was very different. They came back to it after Node had an ecosystem. And when they started working on it, Node's ecosystem was not what it is now. But by the time that they finished, it was something that they probably should have considered just a little bit more. There were some really tiny corners of incompatibility that were tough to work through.

\[04:00\] But anyway, years before it even shows up in browsers, it shows up in Webpack and in compilers... And so the syntax for ESM is something that people have been using for a long time. Everybody uses React -- from I think day one React used import syntax, and just ran that through a compiler.

The thing is that syntax change is probably not worth taking a giant ecosystem break... It's just different from the other syntax. If you're running through a compiler, there's really not a very big functional difference between the two syntaxes and what they output. The main reason to have ESM is so that we can have a module system in the browser, and then hopefully put that module system also in Node, and then at the end of the day maybe we can have modules that work in the browser and in Node, and maybe even in future platforms, without a compiler. And it's actually very important to move past compilers.

There's a lot of problems and corners that compilers paint us into, that we won't get out of until we can do something that is not bundling everything into one file asset. So yeah, everybody thinks they're using ESM, but they're really not. And in fact, almost nobody is using ESM, I've found out... In browsers in particular. There's just not a lot of people that have written this. Because think about it - you can't use any Node modules, you can't use any browser modules that require a compiler... You're really kind of on your own, so there's not a ton of people right now using native ESM.

I think the goal now for a lot of people around the JavaScript standards and around the Node ecosystem is to move in the direction of these universal modules that we can run everywhere without a compiler.

**Kevin Ball:** That does make for kind of an interesting question around what is the migration path? If we're already using a compiler, either because we wanted the ESM module, or just because maybe we're writing TypeScript, or we're writing JSX, or we're writing something else that requires transpilation of some sort, 1) what are the benefits to migrate towards a more pure ESM approach, rather than transpiling down to CommonJS? And 2) what's the incentive for folks? What's the path to get there?

**Mikeal Rogers:** There's a couple things with that. It's not about moving entirely past compilers, it's really about having the output of a potential compiler run everywhere. So not bundling all of the code together and targeting an environment for the final compilation. So still using TypeScript, but your TypeScript files turning into native ESM module files, that then are loaded one by one in a file, not in a big bundle.

So you can imagine building up some tools that can migrate -- not all of the npm ecosystem and everything we've built, but certainly parts of it; it's certainly possible. And working some of the DSLs, and things like TypeScript into that equation isn't gonna be too difficult. I think that the harder thing is that everything that touches the Node.js standard library, for instance; everything that touches browser APIs that aren't available in Node. Those are things that we can't make work in both places in one source file... So we need to create some more abstract -- probably it's something that looks like a new standard library, that can mount on top of all of these systems, so that your final targets just use that kind of built-in system.

**Kevin Ball:** That makes sense. So when we say that ESM is no longer experimental, it's live - that means we can sort of start using it, but a lot of the infrastructure that's gonna be needed to start using this at scale is not there yet.

**Mikeal Rogers:** Oh yeah, correct. It's very early. It's really hard to unwind in people's heads, because they've been using the syntax for five years, "What do you mean it's new?" \[laughter\] But really, building an ecosystem and starting to build real applications using only ESM natively is really something very new... And we are talking about rewriting huge portions of the ecosystem, and getting rid of a lot of tooling.

**Divya Sasidharan:** Yeah.

**Mikeal Rogers:** \[07:57\] A couple things about the constraints in the browser... So you end up having this one-to-one match between a string that you import and a file URL. You can use these things called import maps to create namespaces, and things like that, so that you can do fancy stuff with those names... But at the end of the day, that name has to translate into a single-file URL. And this is a really important distinction, because Node does not do that. Node takes a \[unintelligible 00:08:18.25\] it looks at different file extensions, it works its way up the tree in order to figure out what thing to load... All of that dynamic loading. And we solve a lot of really important problems for ecosystem building in that dynamic algorithm - that's gone; we can't use that anymore. We have to figure out how to solve all of those problems in a different way. Everything that you do in package.json right now, anything that you put in package.json that you rely on, that changes how the source file was interpreted or loaded - that doesn't work anymore. You can't have out-of-band information either.

So a lot of problems that we've figured out how to solve with compilers, when we move them into this other space, we have to find different tools and different approaches to solving them.

**Kevin Ball:** Can we break down one example of that? We're talking about automatic finding of different things... This is for example requiring something that lives in a package that I've npm-installed, or something like that... There's some magic that happens for finding that.

**Mikeal Rogers:** Yes, right.

**Kevin Ball:** So that's part of what's going away? Are there other things in that chain that I'm not thinking of, or is that the main one?

**Mikeal Rogers:** That's the main one, but you have to think of all the different problems that get solved there, because it's not just one thing. One thing is that it looks at different file extensions. If you install something that will automatically transpile TypeScrypt, it'll check for ts files and js files. That's a nice feature. You can't do that with dynamic loading, so you've gotta figure out how to front-load all of the work that you would have done before that.

The really important thing, the thing that npm does maybe better than any other package manager in the world is that if two people rely on a package, they publish at different times, so they need different versions of it, because it changes - they do an import of just that bare string, and they get the right version that they needed, and you can have these two things existing in the same namespace.

So that string require that you do in Node does not map to that file. It maps to the version of the file that you put in some metadata. And that is not a global. That is not a global registry inside of the system. In Python, in Ruby, in most programming languages that is just a global system. And if two packages that you're trying to require need two different versions, you've gotta figure out how to resolve that manually, maybe by updating it. This is why npm has such an amazing ecosystem and these really big dependency networks, because people can still freely rely on other people's code without worrying about having to manually resolve coordination issues. That needs another way to solve that problem, because now we can't solve that with the dynamic loader, and we can't hook code into the browser to do this either.

These constraints in the browser are there for a reason. You really can't go "Oh, let me try four different URLs and see what they say, and then when they come back I'll decide if I'm gonna load something else..." Nobody's waiting for that page to load that long. \[laughs\]

**Nick Nisi:** So is that really a constraint of what we're trying to do with Node, having parity with the constraints that the browser has when it comes to module loading?

**Mikeal Rogers:** Sort of... I mean, I would say that Node's top priority right now is just supporting a native module system, and we can talk about custom loaders later... But they have code in there to figure out what to do with dynamic loading. You can actually access Node's algorithm to do dynamic loading, and stuff like that. So if you're only solving these problems in Node, you can figure out a way to solve it probably natively, because you have much more dynamic logic. But that's not gonna port to the browser. So whatever you end up with if you go that route, you're not gonna end up with source files that will work in both the browser and in Node. So if we want universal JavaScript, we're gonna have to figure out tooling that we can build on top of that Node interface, that then also just works natively in the browser.

\[11:59\] In fact, the right thing to do really is just scale everything down to the browser constraints and find creative ways to resolve that... And then if you need to do crazy little hacks in Node, fine... Because you have a dynamic loader that you can write code in, that you don't have in the browser at all.

The closest thing that you have in the browser is if you load a service worker, once that service worker is loaded, you can now take over the HTTP URLs for your domain, so you can do really dynamic things for what end up being file URLs to the browser. But that's kind of advanced, and because it's a service worker and you can't rely on it always being loaded, it's not a full solution; it's really sort of like a performance upgrade.

**Nick Nisi:** When it comes to the loader and ES modules, obviously they've been in the works for a while, and behind the flag for a while, and I know that there's a couple of competing approaches to this... So I guess I'm kind of just lost in the confusion of everything, because I know at one point they were talking about changes to the package.json, or changes to the file extension, to .mjs, for example... Where has that landed?

**Mikeal Rogers:** So the mjs thing was pretty controversial... It was there to solve one really specific problem - and this is actually the main thing that I was talking about when I said that they probably launched the spec a little bit early. In the browser you have this script type=module thing that you do... So there's a different-looking script include when you include JavaScript, that it knows is an ES module versus code that is not. ES modules are strict mode by default, so you can't just interpret the file, and there's no signal when you look at the file to know how to interpret it, and that it's strict mode, because it won't have the strict mode practice anymore in it.

For a lot of reasons just detection does not work well, so you need some signal in Node that replaces that script module=browser to say "These things are going to be ES modules." There's two ways to do that. One is that you can have a .mjs file extension, that still is in Node, and it works. Another is that you can put this thing in your package.json called type=module, and then all of the files in your package will be interpreted that way by Node, natively. All of your .js files. And that's a more ideal pattern.

The problem you get into is that -- so Webpack is very confused by native ESM...

**Kevin Ball:** \[laughs\] Could we just stop at "So Webpack..." \[laughter\]

**Mikeal Rogers:** Yeah...

**Kevin Ball:** \[unintelligible 00:14:22.28\]

**Mikeal Rogers:** Yeah, yeah... Webpack has an even tougher problem to deal with, because they convinced millions of developers to write import statements in .js files, and then they compiled them into something else... And then windows are actually native; windows are native modules, that use the native syntax, and they actually mean something different. They kind of don't know how to compile that well, and what to do there... So trying to use native ESM is a really good way to break all your Webpack stuff... Which is very ironic, because so much of the push to finish up ESM was from people using it in Webpack, and now it's all broken... \[laughs\] But yeah, so that's the situation.

**Kevin Ball:** Is that a current state of Webpack situation, or is there a fundamental challenge underlying that?

**Mikeal Rogers:** As far as I know, that's the situation. That is what I've found0--

**Kevin Ball:** Like the current state, rather than there's something fundamental that prevents them from \[unintelligible 00:15:26.08\]

**Mikeal Rogers:** Right, right. I had conversations with people just a few weeks ago who thought this was still a problem. I ran into it personally maybe 3-4 months ago, something like that... That was the first time that I noticed how bad it was. Maybe somebody's working on this, maybe they're not. The fact that ESM in Node just came out from behind the flag probably means that it didn't have the highest priority on trying to resolve it... I don't know what the fix is.

It is a Webpack problem, it is a Webpack concern... It's gonna have to be handled on their end. And I really don't envy the position that they're in, because in Node it took roughly three years to figure this out, and it took changes to the spec, and it took an MJS extension... So it's really not easy. So yeah, we'll kind of see how that shakes out.

**Divya Sasidharan:** \[16:13\] Would that also be the case for Rollup? Because I know Rollup uses polyfills for import/export.

**Mikeal Rogers:** Yeah, probably.

**Divya Sasidharan:** So theoretically do you know if ESM would work with Rollup as is, or is that something that needs to be fixed as well?

**Mikeal Rogers:** I don't know, I haven't used Rollup really...

**Divya Sasidharan:** Okay.

**Mikeal Rogers:** You should ask the Begin folks about this. They've done a ton of stuff with Rollup and native ESM. And they're actually using native ESM in the browser, and then just using Rollup on the deploy. So their whole dev environment is just natively loading the original files, and then they use Rollup to publish something... So they have figured out how to make this work, and they have a toolchain on top of Rollup to do it... It's possible it may require some configuration; it might not work out of the box. I think that they've essentially figured out how to do it.

But again, I think that where this becomes really tricky is where you start importing other things that are not following the same standard. You're loading other npm modules, and then those have potentially separate entry points for Node in the browser... And you know, "What if they're ESM? Is that the browser entry point? Is that the Node entry point? How do you transpile that?" So how will these options interact is really difficult to figure out, because it's not a very clean matrix. We used to think of Node in the browser, and now we're thinking of "Is a module ESM or old style?" and that doesn't tell you if it belongs in either of those buckets... So yeah, it's a difficult problem. There's a lot of really odd edge cases.

I would say that if you were gonna try to adopt native ESM today and try to do something with it, it would really only be worth it if you were using it natively in the browser and you weren't trying to depend on a bunch of stuff that wasn't written that way. I don't think that it's worth it today to do that. I think that in the future we'll probably have better tools. But if you wanna play around with it today, it'd be part of like building a new universal JavaScript ecosystem. Like, awesome. Dive in. It's totally worth it for that. But if you just wanna make your React app work, but you want it to be Native ESM, you're gonna suffer. \[laughs\] I wouldn't recommend that.

**Divya Sasidharan:** But I imagine most modules use CommonJS as is, and so if you wanted to use native ESM, you would also equally struggle \[unintelligible 00:18:32.01\] because then you would have CommonJS and then you'd try to use native stuff, potentially using Webpack or something else to transpile, so that it works together... I don't even know how you'd cobble that.

**Mikeal Rogers:** People use lots of things... That is the case. There's not a lot of stuff in npm that uses native ESM targeted to Node... But if it was targeted at the browser, it could potentially run in Node, right? And there's really this question of like, you know, when you're transpiling some code that way, what's the intended target? Or what was the original intended target, versus what you're trying to compile it to? Because that kind of tells you how you need to get at certain things. Yeah, it's tough problems... A lot of people have a lot of code to write... \[laughter\]

**Break:** \[19:23\]

**Nick Nisi:** Alright, so we've been talking about ESM and what that is, and it's now available in Node without a flag... Let's talk a little bit about compatibility. With this, you mentioned that you basically have to be explicit about what you're loading, and there's a couple of different ways to do that, either with the MJS extension, or with a type of module (I think you said) in the package.json... My question is if I have a big package in Node, could I incrementally start switching things over to ESM, or would I have to do it all at once?

**Mikeal Rogers:** You could, theoretically, with the MJS file extension, right?

**Nick Nisi:** Okay, yeah.

**Mikeal Rogers:** Then you could have the files live next to each other and you'd have the right signal. There are some difficulties in porting between them that you would have to deal with...

**Nick Nisi:** Is that just things like the default export, versus more of a dynamic export that you might have with CommonJS, things like that?

**Mikeal Rogers:** There are features in each one that can't be ported... So it gets a little tricky. I wouldn't recommend doing it a file at a time. I'd recommend doing it a module at a time. And if you have a really big application, I would start breaking parts often to independent modules that are then just native ESM. That would be the route that I would recommend. Yeah, it's tough... Don't move applications over yet. Just... Don't do that. \[laughs\]

**Nick Nisi:** It's there, I have to jump on it!

**Mikeal Rogers:** In the early days of Node, a lot of people came to the ecosystem specifically because there were no modules, because they wanted to be the people that wrote that first thing... And it's really exciting to be a part of that community, and it's really exciting work to do... And in general, if you are early to something and it blows up, there are really big rewards to you personally, just FYI... \[laughs\] If people are looking to step up their career... These things really do pay off in the long run. A lot of people around Node did quite well; not me, but... \[laughs\] I mean, I'm fine, I'm fine. I just didn't have like an exit, or something like that... But a lot of people did.

Yeah, it's really fun. One of the things that really excites me about this is getting back to that, and going like "You know what - nobody has figured out how to write command line utilities that you could potentially port around." One thing that I've been working on lately is "How do we write tests that you could run in both Node and in the browser?" That would be really great; I'll talk a little bit later about this dependency management thing that I wrote... But it'd be really cool if when I wanna check \[unintelligible 00:22:59.11\] one of my dependencies breaks something, I can just do it in a website, and then in an iFrame sandbox it can run all of those tests... I don't have to spin up some infrastructure to go do the tests like we would with any kind of Node package. You can sort of break out of the platform.

So there's a lot of flexibility, a lot of things that we'll be able to do with this new system once it's built... And some of the most exciting things to build right now are at the intersection of the new things that you need to do and the gaps that don't exist yes.

**Kevin Ball:** You mentioned there are some things that you can do or express in each type of module system that aren't expressible in the other... If you wanted to bridge between those - and you mentioned "Do stuff as a module, at a time" - what are the options available to you? One that I'm thinking of is -- I remember when I first started doing Node, after years of doing the browser, I tried to set up transpiling within Node, and it was pretty freakin' flaky... But is that how you'd go? Or how would you start pulling in native ESM modules as you created them into a CommonJS application?

**Mikeal Rogers:** \[24:07\] Carefully...? So if you're only using Node's native system and you weren't using a compiler, you could do it pretty easily. You could publish it to npm, you could just import it like any other package by name that you just installed... That part of it should work now that ESM is out from behind the flag. What's not gonna work though is anything that requires dynamic hooks into the module system. You'd be surprised at how many things you rely on that do that...

Any transpiling of languages at import time is all done that way. So if you use TypeScript, CoffeeScript... Any kind of transpiler, in Node itself, you now don't have that loader to do that dynamically. And the dynamic loader interface is like a separate sort of command line flag, and you really only get one of them... So there's very different ergonomics that happen around it. It's also still experimental, and very buggy. If you do any I/O in it, it just crashes... \[laughs\] I've found that out the hard way. I have some crazy hacks around this. But yeah, if you're just writing JavaScript, if you're just using it in Node, it's pretty easy, and you won't be too mad.

**Kevin Ball:** Okay, so now that it's outside of the flag, I can import an ESM module into a file that is otherwise using CommonJS or other things... It's just then that would have to export. Can I require an import into the same file without using a transpiler?

**Mikeal Rogers:** Yes.

**Kevin Ball:** Okay.

**Mikeal Rogers:** There are some caveats, but yes.

**Kevin Ball:** Okay. So so long as I'm doing vanilla stuff there, I can do that import in both places... So if I'm doing it a module at a time... Interesting.

**Mikeal Rogers:** But how you import it is really specific. There are things that you can't do if you're going between the two systems. And there's documentation on that. I would just read through that. They've documented that quite well.

**Kevin Ball:** Awesome. And we should probably include a link to that in the show notes. So you were talking about the potential benefits of getting into the trend early and publishing modules... Do you think the future of this is a new set of ESM-focused modules, or is it migrating older CommonJS modules to ESM?

**Mikeal Rogers:** I think it's mostly gonna be new. It's actually quite difficult to imagine compiling a lot of what's in npm today into a file that would run universally. That's really hard. It's possible, but it's probably pretty unlikely. You may end up with some pretty gross stuff in there. You could potentially end up with just a bundle as one of the dependencies, so you're not getting any of the other sub-file and module deduplication, stuff like that. There's a lot of concerns that you should have about that method. And to be honest, a lot of what we rely on is pretty garbage...

**Kevin Ball:** \[laughs\]

**Mikeal Rogers:** I mean, I wrote some of it, so I can say this... \[laughs\] It's really bad. We've just been stacking layers upon layers upon layers, and a lot of things that are in dep chains are not maintained anymore... Simple packages with just a few deps, and every time that I run npm-install it's like "You have 12 known vulnerabilities in your dep tree", and I'm like "Really?" And you're like "npm fix/audit fix", and then it's like "No, we can't. Sorry." This is not great. This is not a great state of things.

Another thing too is that I think that it would be presumptuous to assume that this whole ecosystem that we've built, at first without even thinking about browsers at all, and then for the next five years of that only thinking in terms of compilers, that the modules that we built in that ecosystem are just gonna work easily and performant in this new system. If you're loading these as individual files in the browser, you're gonna want the exact same patterns in that ecosystem.

\[28:17\] I think that ecosystems form really organically, and whatever constraints that you have on the tooling or on the usage end up persisting into the way that people develop things into that graph. The early Node ecosystem before we had a lot of transpiling, before Webpack - I mean, we had Browserify, but it was very Node-centric - the patterns an dep trees looked very different... And now they look quite different from that because of how much has changed for a lot of the front-end tooling. I would just not expect to see us just port that directly over to this new system. That wouldn't make a ton of sense to me.

A lot of why we wanna do this is so that we can get better performance than we get from bundling, for most application use cases... And some of the trade-offs that you would probably have to make when you were migrating all of that stuff over would bring you back to worse states of performance than bundling would.

**Nick Nisi:** So that's probably gonna be one of the big drives over time, to get people to this, is performance, potentially...

**Mikeal Rogers:** Yeah, yeah. I can talk a little bit about how I saw that, or how I'm working on solving that, I should say. I wrote a little package manager called Reg for universal JavaScript. It uses the custom loader in Node, and it works sort of natively in the browser. And the way that it works is that you give it a file, and it sort of parses through the whole dep tree, and it basically statically links everything. It basically takes each one of the files, whether they're local files, or they're files that are in the package registry, and it puts this data structure around them.

The data structure uses a technique called hash trees or Merkle trees. It's very similar to the data structure they have in Git... And Git is amazing at so many things, so there's a lot of reasons to use that data structure. But you end up with a hash for every module, essentially. So what you do is you replace all these import statements with the imports of the hashes all the way down, and then you get a new root hash module for the thing that you published. Then you stick it on a name, or a version, a tag, or whatever.

That sort of static linking process means that you can now have two modules rely on two different versions of the same thing, because you've swapped out the name for just the statically-linked name. It means that you have a full immutable data structure for the entire dep tree of everything that's ever published, which is really nice. No package log files, not extra stuff... It's all just that by default.

The really cool thing about this is because we have that statically-mapped tree, we can basically -- let me think about this for a second... Oh, HTTP push. So now when you ask for a module, I can go "Oh, yeah, I know what that is, and I know all of the depths of it, so I'm gonna push you all those files." So we'd basically get a sort of unminified bundle version of all those files, which is amazing. And if you use Brotli compression, you don't really need minification; it's like 8% probably in savings.

But the really cool thing is that then you go and ask for that module again. Say that module is your application code... When you go and ask for that module again, you're gonna give me an e-tag for the last one. And if it updated, that e-tag is not for one file, it's actually for the entire package tree, so I can diff those two trees and then I just HTTP-push you the files that changed. So when you update one module and it has a dep, you just get those files and not the entire tree again.

The problem with bundle performance is that ever time you load the page, you're gonna get the bundle again, because people are doing daily deploys... So whenever you reload, it's changed, and so you're blowing out the cache every time. So for any applications that you load twice and update, you will end up getting better performance out of the system.

**Kevin Ball:** \[32:04\] Does this also let you -- like, can you cache those modules cross-domain?

**Mikeal Rogers:** So here's the thing... Technically, yes. Technically, today, most browsers treat their HTTP cache as a universal cache. The caveat here is that that's going away. Browsers have found really clever ways to fingerprint people, and one of them is by this shared HTTP cache. You know that if you get a resource back reasonably fast, that they already had it. So if the New York Times is the only place still relying on some old module, then you can just go like "Oh, let me see how long it takes to load that module, and then I know if you went to the New York Times." So there's a tracking vector here, there are fingerprinting vectors... It's bad.

So browsers are, by and large, moving towards a model now where the HTTP cache is no longer shared between domains. The HTTP cache for your application, even of other domains, is just gonna be scoped to your application... Because we can't have nice things.

**Kevin Ball:** I can see all of the reasons there, and it just makes me sad.

**Mikeal Rogers:** I know, I know... It's really bad. If we could figure out how to fix that, we could go back to the system that we had before. This is why everybody uses that CDN version of jQuery, because everybody already has it in their cache. And yeah, we could have had something very similar to that, but unfortunately that's probably going away. We shouldn't rely on that.

**Kevin Ball:** So if you use CDN's, you're not gonna have that shared; it's still gonna be across the domain of the web page, rather than the...

**Mikeal Rogers:** Yeah, yeah...

**Kevin Ball:** Oh, my gosh...

**Mikeal Rogers:** Yeah... Sorry... Sorry to break it to you.

**Nick Nisi:** That fingerprinting is really clever, but also completely disgusting.

**Mikeal Rogers:** Oh yeah, yeah... Advertisers are very clever. It's true. Another really cool thing that I can do -- \[unintelligible 00:33:58.18\] Say you dynamically load a module later - you're still gonna have great cache between all these modules, for any of the sub-dependencies. That's gonna work really well. Another thing that I do though - so I'm using these data structures that I built for the next generation version of IPFS; it's called \[unintelligible 00:34:16.14\] These are data structures that represent a file... And directories, but we're not using the directories in Reg, because in Reg a package is a file, and it has a one-to-one relationship with a file, because that's how the browser thinks of it, so it's better that we think about it that way... But this other thing that I'm doing is that I'm actually chunking up the file, and then referring to the -- the hash of the file is actually then an array of all the parts, and the hashes of those parts.

There's this algorithm called Rabin, that rsync developer like forever ago. Rsync has used this for a very long time. And what it does is it gives you really consistent block boundaries. It uses this rotating hash fingerprint over the file to give you really consistent boundaries even between changes of the file.

So what that means is that when you change a part of the file, you're only gonna change that one block, and you're not gonna then push all the offsets in every block after that, like you would if you just chunked it up by some integer, some max size. This is really cool, because in Node - and potentially in the browser with service workers - we actually get subfile data deduplication... So as you're pulling down files locally, Reg keeps just a local cache on your system. And as new versions of that package come out, you're literally pulling the bytes and the blocks that change, you're not even pulling down the whole files that changed anymore. So it's just this incredibly efficient sync and caching protocol for everything.

**Nick Nisi:** And is that all set up just as soon as you load a package that's using Reg? Is that what's setting it up in the browser?

**Mikeal Rogers:** The browser can't really use that, because it has to think of things as just file URLs. In a service worker I could take over that URL space and then have the data structures locally... And the way that the registry works is that the registry just serves you all of these files by hash, and it'll give you the metadata or the file data potentially, depending on the API that you hit, for every package as well. But what you do in Node is that you actually parse through that whole tree, go "Oh, what parts of this do I not have yet?", and then it goes and pulls down the underlying block data from the registry, and then just materializes the files that you need.

\[36:21\] Eventually, as you need them -- like, I wanna do this really dynamically, as you need it, eventually, but because there's this bug in the loader right now where I can't do any I/O, there's actually a step before your code runs where I materialize all the files, so that I don't then have to do a new I/O in the loader itself... So yeah, it's really cool... There's some really cool stuff.

I ended up chatting with Brian Brian LaRue for a while, who's doing this big serverless thing, and he made the point that we have maybe like a half dozen HTTP APIs now. In the browser you've got the service worker API for doing HTTP servers, you've got the Lambda API, which is just its own weird thing... You have Node.js' API, you'll probably have a new style Node.js API at some point... Mapping something to work on top of all of these is actually really difficult. Nobody's written just a nice standard that you could port on top of all of these... But if we defined such a standard, like, "Write a function like this that takes this request and this response object. This is what they look like", and we'll create those and interact with them \[unintelligible 00:37:19.21\] Or maybe it's just a request, and then you return some kind of response object... Figure out what the signature needs to look like, and then we can map that on top of all these systems, and then if anybody publishes anything into this package registry, he can have a service in Lambda, or a service in Cloudflare Workers or wherever, where you just give it any hash that's in the registry and it'll run that function. And he can have his users with different accounts for the actual compute costs of that, and all this sort of pricing and tallying, but they don't have to worry about actually deploying any of that stuff, ever. It's all just there, kind of just in time.

**Kevin Ball:** And there you don't have the advertiser \[unintelligible 00:37:58.04\]

**Mikeal Rogers:** Yes, exactly, exactly. And then - I don't think that I can talk about it, but... I can't talk about specifics, but if there was theoretically a way to share a directory or some kind of shared resource across a bunch of different Lambda functions, the cache for all of them could just be in the same thing, and be really localized. There's a reason that CDNs use hashes for everything... And these data structures work really nicely with LRU-based caches, because each data structure sort of roots as its own hash, and then any of the common pieces in that data structure that don't change, that continue to get access, will stay in, even if the root changes, and things change over time and they need to fall out of the cache, so... There's just a lot of things in general about these data structures that are quite nice, that I've been working on for a while now, and this is the first application that I'm really putting it through.

**Kevin Ball:** Got it. So you're doing this native registry for ESM modules...

**Mikeal Rogers:** Yup. It's up now. It's in Cloudflare Workers, so it's pretty fast... \[laughs\] Don't put too much data in it, or else you'll mess up my account. \[laughs\] I might have to shut it down.

**Kevin Ball:** How, if at all, does this interact with other registries like npm?

**Mikeal Rogers:** It doesn't, at all. There's no compatibility. If there is any compatibility at some point, it'll end up being some way to take packages out of npm and compile them to Reg... And potentially even maybe somebody puts up a namespace where you just in time materialize those assets and move them over. But when you're thinking about what a package is in npm, how it's referenced and how it is loaded, there's not really a way to do direct compatibility in that direction. You could pretty easily take out Reg package and just push it into npm. That would be pretty trivial. But because you can't do that dynamic loading, you can't reason about things the same way, and you can't really port them over very well. You really end up just kind of compiling it into something else. But you know, npm doesn't work natively in the browser, so you've gotta kind of pick one...

**Break:** \[40:07\]

**Nick Nisi:** Alright, that was quite a deep dive into modules, and the biggest takeaway I got is don't use them yet.

**Kevin Ball:** \[laughs\]

**Nick Nisi:** That's great, I will continue to do what I'm doing, and do it well, which is not use them right now... Other than through the approximation that I'm using through TypeScript right now. And I'll continue to be happy with that. So thank you for that, Mikeal, that was really awesome.

Now let's talk about one of our recurring segments, which is "I'm excited about X", where X could be literally anything. Kball, do you wanna start us off?

**Kevin Ball:** Sure. I am excited about CSS Subgrid, which just shipped in the latest version of Firefox (Firefox 71). This is the level 2 part of the CSS Grid layout specification. This allows us to nest grids within one another, which solves some really tricky problems with getting nested grid items lining up with your original grid. Previously, it was pretty hard to, for example, have isolated components that used Grid, and put them correctly inside layouts or other components that used Grid. CSS Grid makes that straightforward, and helps in a ton of different ways. I'm super-excited about that.

It just launched. It's only available in Firefox, so once again - don't use this for real yet, because it will break in the majority of browsers that are not Firefox. I think we're at 60% or 70% of people using Chrome.

**Mikeal Rogers:** Super on-brand for this one. \[laughter\]

**Kevin Ball:** But it's coming, and it's real, and you can play with it for real in Firefox 71, which just shipped, so... Go.

**Nick Nisi:** Very cool. That is something I will definitely check out, and continue to not use... But check it out. \[laughter\] Divya, do you wanna go next?

**Divya Sasidharan:** Yeah, sure. I'm really excited about the Web Almanac. It was officially released at Chrome Dev Summit this year, which is 2019... And Rick Viscomi worked on it, and there's a lot of contributions to the Web Almanac. It's really neat, because it's essentially just a whole plethora of knowledge of various web-related things, and it takes in a lot of expert information on specific things - performance, as well as JavaScript and CSS and various other pieces that you might not fully understand, or... Yeah, just have the full understanding of that piece. So it gives you a really high-level concept of what that is from a web perspective. Then there's also some data associated with -- for example, the JavaScript one talks about general JavaScript bytes per page (the average amounts) and what that means from a performance standpoint, and things like that...

I think oftentimes as developers you hear a lot of numbers thrown at you, and you're like "Oh, this is whatever kilobytes of data", and you're like "Okay, I don't understand what that means." The Almanac breaks down key figures that you as a developer should know, or what it useful for you to know, and that's really cool... So I'm excited about that. It's very well done as well.

**Mikeal Rogers:** Another thing that I did -- I actually did this quite a while ago... I started pulling all of the data -- I think I may have talked about this on a prior one, but I started pulling all the GitHub archive data and filtering it, and getting a lot of daily metrics out of it... And for a while now, I've just been creating a markdown file every day in this repo, using GitHub Actions, and sending myself an email.

\[44:25\] This has been really cool... I've started to learn a lot about what is trending on GitHub, and projects that I wouldn't have seen otherwise, and different stuff that's going on, and which projects are active and which ones aren't... So now I opened up that email list, and you can subscribe to it. You can find the link at github.com/mikeal/daily. Also, there'll probably be a link in the show notes. It actually turned me on to this project that I just never would have seen called Postwoman, that is really popular. It's sustained stars for weeks now, and it's this API request builder that was built in Vue.js, and it's really phenomenal. It's a really, really nice project, and I never would have seen this if it wasn't for sitting in this data for a while now... So yeah, that was what I wanted to bring up. Super-cool project, check it out.

**Divya Sasidharan:** Where was that email list again? It's on your page...?

**Mikeal Rogers:** There's a link in the repo, the actual -- you know how you can say "Here's my website" and the website is actually just a link to go sign up for the email list... But we'll also put the link directly in the show notes I imagine too, so...

**Divya Sasidharan:** Oh, okay. Yes, I think that would be good.

**Nick Nisi:** We're gonna put it in the show notes. Congratulations, you have broken the trend. I have used Postwoman, and it's great. So there's something I have used and will continue to use, instead of not use... \[laughter\]

**Divya Sasidharan:** That's so cool.

**Nick Nisi:** Cool. I'll go next, and to round it off, the thing that I'm excited about is a terminal emulator called Kitty. Its tagline is "It's a fast, feature-full, GPU-based terminal emulator." I have been a long-time iTerm2 user, but this quickly got me going. I really like it a lot, and it's just so fast. You would think that I wouldn't complain too much about a terminal being slow, but it can be quite slow... And especially if you're trying to use something like ligatures in iTerm; that turns off the GPU renderer in iTerm, so it's pretty slow... But Kitty takes care of that, so you can have ligatures if you want them, and it's still really snappy.

You can get that from Homebrew, for not just Mac, but Linux as well, and maybe some kind of WSL Windows, or something... Yeah, check it out. Kitty. We'll have a link to that in the show notes.

**Mikeal Rogers:** Yeah, I did not realize how slow the terminals that I was using were until I started using the Blink terminal on iPad Pro. I was like "This is so fast."

**Nick Nisi:** Right?!

**Mikeal Rogers:** Like, what is going on...? Yeah, yeah.

**Nick Nisi:** Blink is pretty fantastic.Yeah, without it I just feel like I'm running my editor in Electron, or something.

**Mikeal Rogers:** Yeah... \[laughs\]

**Nick Nisi:** Well, that does it for our show today. Thank you to all of the wonderful panelists for talking modules, talking about awesome things that you're excited about, and we will see you next week! Cheers!
