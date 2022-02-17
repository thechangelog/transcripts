**Amal Hussein:** Hello, JS Party listeners. We have a very special show today, and it's actually extra-special because we're recording it at a special hour, because our guest is so special. We made all kinds of -- there's coffee going for Nick and I... This is very exciting. Nick is my co-panelist for today. Hello, Nick. Welcome.

**Nick Nisi:** Hoy-hoy!

**Amal Hussein:** How are you? It's been a hot minute since we've been on a show together. Right?

**Nick Nisi:** It has. How are you doing?

**Amal Hussein:** I'm doing great, I miss you, and I'm happy to be talking about Vite with you today... With our special guest, Evan You. Evan, welcome. We're so happy to have you here.

**Evan You:** Thank you, thank you.

**Nick Nisi:** Welcome.

**Evan You:** Yeah, happy to be here, too.

**Amal Hussein:** Yeah, for me you're like this -- I don't know, I feel like you're the most... I'm trying to say a word that won't get censored. You're the most prolific open source developers for me.

**Evan You:** Thank you.

**Amal Hussein:** Really. I think your story and your journey has been so interesting. I think you've gone from working at a big company, to working independently for yourself, and supporting yourself and creating some really great open source tools while you've been doing that... So can you tell us a little bit about yourself for folks who might not be familiar? Give us a little bit of your origin story.

**Evan You:** Hi, everyone. My name is Evan You, and I'm a full-time open source developer, and I've been doing that since 2016... So it's almost six years now. I've worked at a Silicon Valley startup called Meteor, and before that at Google for a bit over two years... So I mostly work on two projects, Vue.js and Vite, which we're talking about today.

I spent the first half of my life in China, the second half in the U.S, and I've recently just moved to Singapore. So this is like the third chapter. And it put me in a really awkward timezone for scheduling meetings with U.S. people.

**Amal Hussein:** Yes. It's like we're at almost a 12-hour spectrum here... It's like 9 o'clock for you, and 8 AM for me, it's 7 AM for Nick... Fun times. Well, thank you so much. We're so happy to have you here, Evan... And I think for me, one of the reasons why I find your work so interesting is I think you've always somehow managed to challenge the status quo, and whip out something that's not only impressive in terms of its ability, but I think in terms of its community as well.

\[04:15\] We were just talking last week with Tobie Langel about open source sustainability and what it's like also for corporations to start drawing all of our boundaries for us within largely adopted open source projects, and I feel like Vue has stayed true to its community roots, and it's truly great to see you've done the same thing also with Vite.

So can you tell us, what is Vite? First of all, anyone who's like "Vite \[veet\]? I thought it's Vite \[vyte\]. What's going on?"

**Evan You:** Yeah, so "vite" is the French word for "quick". Vue is in fact also a French word... The technically correct pronunciation would be Vue \[voo\], but I just decided to go with Vue \[view\]. And with Vite, I decide "Okay, it's a French word. Let's pronounce it the French way." Because I get the opportunity to actually set the record straight off the bat, so this time I'm doing that.

But yeah, it's a play on "quick", because the original motivation of building Vite was we were having some really slow build times during development, waiting for the things to compile... And especially for large Vue applications. So I was getting fed up a little bit myself... So I was looking into ways to say "Can we make this a bit quicker?" When I think -- and "Okay, maybe this is the thing that'll do it", so I decided to give it a name that has some connection to quick, or being fast.

**Nick Nisi:** We did a hack week at my work a few months ago back in November, and we had to do pitches, and my pitch was "Let's replace Create React App with Vite and see how that goes for a week." And as part of my pitch, I was like "Vite. Rhymes with feet." and that's how I hammered it in, the correct pronunciation.

**Amal Hussein:** "Vite, rhymes with feet..." \[laughs\] So first of all, thank you for even drawing the lines for me, that Vue is also French... I didn't even make that connection, which is so weird. You're clearly also winning on naming, it seems, right? \[laughs\] French Connection - also a clothing store, by the way... \[laughs\] But anyways. So - slow build times, right? Can you kind of like walk folks through what was maybe some of the source of that slowness? Because for a long time on the web we have not had a native module system, and so the community has put together all of these variations, like AMD, CommonJS, UMD, IIFEs and whatever else we could think of... And ECMAScript 6 has saved us from that universe, right? But it's taken a long time to really roll that out, in terms of like have we been able to really benefit from having unbundled modules in the browser, and also in our build system... So can you maybe walk us through how ESM has maybe saved the day a little?

**Evan You:** I would say ESM natively in the browser presented us an opportunity to just rethink how the model should work... Because previously, because we didn't have native module support in the browser, we have to basically bundle everything ourselves. So that's why we had tools like Browserify, WebPack, Rollup... They're all bundlers, because their primary goal is to take your source modules and then concatenate them, also put them into the -- essentially, pretend there is a module system and put everything into one file that the browser can understand. And the major downside of this is for every change that we make, even if we just change a single module, we have to still bundle the whole thing, because we have to rebuild this whole entire bundle so that we can reload it in the browser.

\[08:04\] So this essentially means during development the build speed just deteriorates linearly with the size of your app. The bigger your app is, the slower the build gets. So if you have an app with a thousand modules, even if you've just added a single one of them, you have to wait like ten seconds for the thing to build... And it just gets worse and worse the longer you work on a project. So that's why we started to have concepts like hot module replacement...

But interestingly enough, even if we did have hot module replacement - with WebPack primarily - we discovered that... I'm not entirely sure the actual reason behind it, but what we've found in the wild is that hot module replacement performance also deteriorates the bigger your app gets. And that's very common in large Webpack-based projects.

So I don't want to say that Webpack is the cause of this problem, because it's a pioneer in actually bringing the concept of bundling mainstream, right? The thing that we noticed is because our toolchain for Vue, called Vue CLI, was Webpack-based, and Vue single-file components also have some pretty intensive compiling involved. So when we have a large Vue project, it can still take like 4-5 seconds, even if you just added a single file, for the hot module replacement to happen. And for me, that really kills the feedback loop, the overall flow when I'm working on something, because I'm just making a simple tweak. I have to wait five seconds, and it's just like - during that five seconds, my mind gets a hold of something; maybe I see a message, see a Twitter message or something, and then I just get distracted. The longer the feedback loop is, the more chances that you get distracted or you just lose your flow state when you're working on something. So I was really wishing that I could find a solution that gives me that really instant, snappy feedback loop.

When we first started on the web - because you just load a script into an HTML file, you refresh the page, everything just reloads... You don't have to wait for things to compile. So native ESM kind of gives you that really snappy thing; you just write native ES modules, the browser can handle it... It's really fast, up to a certain point. There is some interesting technical limitations we can talk about later. But for most apps, if you're just loading maybe a hundred modules, the speed is very good, especially during local development. So combined with that is - if we also rethink how hot module replacement can be implemented over native ES modules instead of over a bundling model, we can decouple the hot module replacement performance from the size of our app. So no matter how many modules you have in your module graph, if you've added in just a single module, only that module and the import chain that imports that module should be invalidated. That's the ideal situation, and that's what this hot module replacement is able to do. So that keeps the hot module replacement speed constant, even if your app is really huge.

**Amal Hussein:** Yeah. That was a really great summary of the benefit of moving from this linearly-growing build time, to the benefit of everything is modularized, and so even the hot module replacement is able to be more optimized... So this really makes a lot of sense.

So Evan, can you tell us a little bit about how you were able to also leverage Esbuild to handle some of this heavylifting?

**Evan You:** \[11:51\] I talked a a little bit about the limitation of native ESM, and the limitation is it struggles a little bit when you have too many modules loaded in the browser. Let's say when you're loading one hundred modules, it's snappy, it's fast. But once you do something in the thousands, it just starts to congest at the network level, because the browser has to make an HTTP request for every module that's fetched. So when you have too many modules being fetched in parallel, the browser just gets stuck a little bit, and you kind of have this sort of waterfall of waiting for the request to come back... And we noticed that there are two aspects to solve this problem. The first is because ESM is loaded on-demand, so if you do code splitting, say you lazy-import certain parts of your app, which we should do in production for better performance for our users - well, it turns out that would also improve your local development performance when you're using native ESM, because now you're only loading the modules that you're actually working on.

Say if you have a big app with like 20 routes, but you're only working on one screen, and if each route is lazy-loaded, then even during development you're only loading and compiling your modules that's on the route that you're currently working on. So that's one aspect of it. So we really actively encourage our users to think about code splitting even right when you're developing, because that affects both development and production performance.

The second aspect of it is a lot of these dependencies, for example when you import Lodash - so Lodash has an ES module build called Lodash-es, but it has 600 internal modules. So when you import Lodash-es directly, the browser makes 600 requests all at once, and it just goes crazy. So one thing we noticed is that because these dependencies are almost always guaranteed to be playing JavaScript, there's really no special transform logic that you need to do about them... So then we go back to the bundling route, but we sort of pre-bundle them. So this is where Vite tries to be smart, as it separates your source code from your dependencies, because first, your dependencies don't change often; second, they're almost always plain JavaScript. So we pre-process them. Each dependency gets pre-bundled into one file, and we do that with Esbuild. So this is where Esbuild comes in.

So Esbuild serves multiple roles in Vite; it's a really great project. We first use it for dependency pre-bundling, as I said; this allows us to squash, for example, Lodash-es from 600 modules to just one module. So now it loads snappy, it doesn't create all these extra requests. And because Esbuild is extremely fast, and what we noticed is that a lot of time is actually wasted in large projects, when you rebuild a project - it's actually just building the dependencies over and over again. If your dependency is versioned and changed, why are you rebuilding it over and over again? So on your first server start, v12 pre-bundled your dependencies and then cached them. So on the next server start, if your packaged dependencies (your lockfile) didn't change - we'll just reuse everything.

**Amal Hussein:** Yeah, just caching.

**Evan You:** We don't need to do any work, we just cache them.

**Amal Hussein:** Yeah, that makes a lot of sense. I worked with someone who worked on a WebPack plugin - I think it was like WebPack Cache; we'll put it in the show notes...

**Evan You:** DLL plugging

**Amal Hussein:** Yeah, it was a plugin that helped optimize your WebPack build time and rebuild time, because it just cached all of that, it did a lot of caching, and I think that ended up being the base spec for how WebPack handled perf in v4, or something like that; they kind of took that model from that plugin...

**Evan You:** Yeah, file system caching is obviously going to be a big performance boost... But the thing is, in WebPack, because everything is bundled together, essentially how your code imports dependencies would affect how the dependency should be bundled. So changes in your source code would actually invalidate the cache for your dependencies, in some way. So in WebPack, if you want to really consistently cache your dependency build result, you'll have to use something like the DLL plugin, which is pretty complicated to configure right.

\[16:23\] So one of the things that we've also kind of struggled with is you can do a lot of very advanced optimizations with WebPack, but they are very hard to get right. Also, the more of these advanced plugins or configurations that you use, the harder it gets for you to get everything working together and nicely... Because we've maintained Vue CLI over a very long time. And Vue CLI is sort of this battery-included WebPack-based solution. We try to do most of the complicated stuff for our user, and during that process we absorbed so much complexity... It's just getting out of hand.

While working on Vite, I also tried to learn from the things that we learned during the development of Vue CLI to say "Okay, where is this step where maybe we can drop down to the right layer of abstraction, directly in the tooling itself, to solve some of this complexity problem." Instead of having the base tooling to be extremely configurable but then the configuration layer becomes extremely complex. How about we just collapse these two layers together, so that we solve the complexity directly in the tooling, so that we make the higher-level system much simpler.

**Nick Nisi:** So a question I had about the assumption that you make on dependencies - I'm just wondering how Vite handles non-JS dependencies. Because a lot that I can think of is maybe Tailwind classes, and CSS, or SVGs, things like that.

**Evan You:** I see. There are two ways to deal with this. The first is for assets, like CSS or SVG, when you import them - we externalize them during the pre-bundling phase. So those files will essentially be preserved and then go through the same plugin pipeline as your source files.

The second way to do it - for example, if you have a package that is shipping directly Vue files or Svelte files, you can use the configuration option to say "Don't pre-bundle this. Just load this as normal source files." So all those files will go through the same plugin configuration as your source file.

**Amal Hussein:** Yeah. I mean, I think for me what was so cool about Vite was -- I think there's a hindsight factor; we've been bundling and doing complex build development locally for a while now, where we've been able to synthesize on some really big pain points in our community. You've named some of them, around build time and optimization, or module loading, and lazy-loading... But also, I think there's stuff like just having CSS support just work, and then TypeScript support just work... It feels like we're moving a few layers up on our abstractions, where we're "Okay, the community seems to generally be synthesizing on these best practices, so let's in congress move up a few layers, so we can spend more time focusing on the core problems that you need to solve for your app, versus twiddling with your WebPack config."

And this is not a show where we're poo-pooing on WebPack. We're all standing on the shoulders of giants. WebPack helped enable us to learn so many different things, and so now we're just doing what we do as web developers, and just kind of like take the pain points and innovate on those cow paths a little further.

**Nick Nisi:** But that's just it - working within those cow paths and really optimizing for that, because that is in a lot of ways the general way to do development now. So you can build on top of that and just make those assumptions and keep things a lot smoother for the general use case, which is just so nice.

**Amal Hussein:** \[20:06\] Yeah.

**Nick Nisi:** I'm the same way as you, Evan - if it's taking a couple of seconds to build, or to refresh, my mind just immediately wants to go somewhere else. So the hot module replacement is amazing, especially when I'm -- I've been working on a multi-part form component for a long time. If I could have it automatically refresh at the part of the form that I'm at, instead of having to restart every time and go through it - that makes such a difference, and so it's so nice. That's why I was a big fan of AMD back in the day, because it just immediately reloaded, and the browser understood it.

**Evan You:** Yeah, in some way I think when Vite first came out, people were joking "Isn't this just like AMD, RequireJS back in the days?"

**Amal Hussein:** Well, you know, history does repeat itself. I think we had a talk with Rich Harris a few weeks ago and I think we kind of circled on - no pun intended - this "We're not doing a full circle necessarily. There's a pendulum swing happening, but it's a progressive one." It's like, we're pendulum-swinging, but we're continuing to progress and go up.

**Evan You:** Yeah, yeah.

**Break:** \[21:11\]

**Nick Nisi:** So we talked about Vite, and kind of introduced what it is and what it does... But let's talk about where it fits into the toolchain. If you replace your current build system with Vite, what are you actually replacing? What are the nuts and bolts of it?

**Evan You:** Yeah. So first of all, Vite covers both the development part and the build part. So during development it is a dev server, and during build we actually run a full bundling process using Rollup. So if you use WebPack, you would have to install WebPack, WebPack CLI, WebPack DevServer, then you need to configure the DevServer to do the same thing with the actual build. But Vite tries to just have all these things in one package. So when it comes to the modules, it handles TypeScript out of the box using Esbuild. So it only transforms the syntax. It strips away your types, spits out plain JavaScript; it doesn't do type checking. One of the reasons we do that is because TSC type-checking is really slow. So having that to be part of the module transform pipeline is actually a major performance killer.

\[23:57\] On the other hand, if you use something like VS Code, your VS Code already runs a TypeScript language service, and you already get all of this type-checking, but you're working on your code. So why would you wanna do it as part of your build process, to just slow it down?

**Nick Nisi:** It seems very redundant, yeah.

**Evan You:** Yeah. For those who really want to have type-checking on your command line, we also have a plugin system. The community has come up with plugins that allow us to just run TSC in a separate process, so it can leverage multiple cores, without making the whole build pipeline slower. I think that's also a better model than doing type-checking as part of a module transform.

So that's TypeScript... And because Esbuild is extremely fast, you don't really notice the difference. You can literally replace all your JS files to TS and the build speed will be the same.

**Nick Nisi:** Nice.

**Amal Hussein:** That's really powerful.

**Evan You:** Yeah.

**Amal Hussein:** I think for me what's lost on some developers is that TSC is good for type-checking, and I'd say transforming that into JavaScript can be a whole other separate process. That's typically best done with Babel, because Babel I think is a better transformer than the TSC compiler... So it's good to kind of split those up if you can, where you just use TSC for types and Babel for transforming... So I'm curious to see where does Babel even fit into this world, Evan? What decisions did you make? Let's put you on the spot. \[laughs\]

**Evan You:** Yeah. So by default, we don't even need Babel anymore, if you're building a Vite app. So the default assumption - the target browser support is modern browsers. When you build with Vite, the output is in fact also native ESM. So it assumes your browser already supports native ESM. You can support older browsers, but that requires using a dedicated legacy plugin. So the legacy plugin will in fact pull in Babel using babel/preset-env to actually do all the transpiling, down-leveling your syntax, and all that... But if you are targeting above ES 2015, Esbuild already does a lot of the syntax down-leveling. So if you're targeting modern, you still don't need Babel.

So Babel really only comes in two scenarios. One is you're really targeting legacy browsers, and two is you need to do really custom plugins. Like, completely custom Babel plugins. That's where Babel plugging. Another case where Babel plugging coming is if you use React...

**Amal Hussein:** Or non-JavaScript... Like, you know, I'm using stage two, and stage one... Right?

**Evan You:** Yeah. You want to get those early proposals in. You can use Babel, and you can directly use the Rollup plugin Babel, because Vite is compatible with most Rollup plugins. So you don't even need to look for -- for a lot of things you don't even need to look for a Vite-specific plugin.

**Nick Nisi:** Nice.

**Evan You:** You can look at the existing Rollup ecosystem, and we also have a page where it lists all the compatibility of existing Rollup plugins with Vite... And I think we cover all the official plugins. We maybe cover like 80% or more of them. So yes, you can use Babel if you want, but if you're targeting modern browsers, the chances are you don't really need to.

**Nick Nisi:** There was another use case that I've found in my week with Vite, and that was if you are relying in any way on the actual code being -- I don't even know if I'm saying this right, but would Babel essentially be treating that code kind of like common JS? It's transpiling it to not Esmodules, right?

**Evan You:** I'm not sure if I...

**Nick Nisi:** So the specific use case I'm thinking of, and one way that we ended up having to use the Babel plugin for Vite was specifically for our tests; and that was because we were using `jest.mock` and we needed to be able to get into the module loading to replace modules with mocks...

**Evan You:** So are you using Jest?

**Nick Nisi:** Yeah.

**Evan You:** Okay. So using Jest with Vite has always been a bit awkward, because --

**Amal Hussein:** Yeah, Jest has opinions... It just has loud ones.

**Evan You:** \[28:09\] Jest didn't really have native, built-in async transform support. So for a very long time we were completely blocked on that. I think in Jest they finally shipped it, so now technically we have a first-class integration with Jest. But still, it's sort of not optimal, because Jest really is -- people using Jest are very used to configure a completely separate set of transforms, just for Jest, which in a lot of cases is redundant, and you have two configurations, two different sets of plugins, for two systems. So that's why the community actually came up with a project called Vitest...

**Nick Nisi:** Yes.

**Evan You:** And it's a Vite native test runner. It uses Vite itself as its transform pipeline, and it uses a lot of Vite's features... It re-runs your tests almost like hot module replacement. It can even directly read your Vite config file and just use exactly the same config. So you just have one config file and it just automatically do the exact same thing as your source files.

So when Vite first came out, unit testing was a major pain point for a lot of our early adopters, but I think with Vitest it's really a solved problem now. In fact, Vitest can be used even in non-Vite projects. We've heard a lot of people just migrating from Jest to Vitest without even using Vite, and they've found their tests to be running much faster.

**Nick Nisi:** Nice.

**Amal Hussein:** Yeah. And they're probably maintaining less configuration as a result, too. So Evan, I just wanna go back to the Babel point, because I find Babel -- so just because an ECMA standard gets published, like ECMAScript 2022, if it gets published, or 2020, 2019... Just because a standard is published doesn't mean it's actually universally implemented in all modern browsers either, right?

**Evan You:** yeah.

**Amal Hussein:** So babel/preset-env essentially kind of helped manage that matrix of like "Hey, you're targeting the last two versions of every modern browser. No legacy browsers."

**Evan You:** Yeah.

**Amal Hussein:** "We know which browser supports what..." And they maintain this real-time check. So where does that come into play? Because they're an equivalent of that in the Vite ecosystem?

**Evan You:** Oh, yeah. So first of all, Esbuild covers that, to a certain extent. So Esbuild, when we do our final production build, we do have an option called build.target. You can say target ES2015. If you set that target, then all the syntax that's above ES2015, Esbuild will down-level that.

**Amal Hussein:** Okay.

**Evan You:** For example, if you use object spread, but you target ES2015 - Esbuild actually handles that for you. It will in-line a helper for you, sort of like Babel helpers, and then transform your code the right way. Which is why I say - if you target ES2015 or above, in most cases you don't really need Babel, for production build that is.

The other aspect of it is my personal preference is - say when I'm developing... I don't know, maybe I'm able to just -- whenever I'm using some features, because I work on Vue, as a library author I kind of just memorize which ES edition has a certain feature...

**Amal Hussein:** Yeah, of course.

**Evan You:** ...so I'm always trying to remember "Okay, this is a browser baseline support. I can't use this. I can use this, I cannot use that..." So I'm getting sad but yeah, I realized for --

**Amal Hussein:** Average, everyday people, for the rest of us... For the rest of us average folks... \[laughs\]

**Evan You:** Not average, but for most developers...

**Amal Hussein:** I know, I know. I know what you mean.

**Evan You:** For people who work on applications, you don't want to really just have to remember which feature you can use or not use... So you wanna leave that to the tools.

**Amal Hussein:** Right.

**Evan You:** So I'm glad Esbuild does that. But if you want to go even lower than ES2015, then babel/preset-env obviously covers that for you. I think SWC also replicates babel/preset-env. So we in fact have users in the ecosystem to use SWC as a Babel replacement in certain cases as well.

**Amal Hussein:** \[32:21\] What is SWC? I've seen it floating around in the ecosystem, so I feel like I know what it is as a high level... Do you wanna just maybe explain that to our listeners?

**Evan You:** To put it simply, it's sort of like Babel, but written in Rust.

**Amal Hussein:** Yeah. It's a good segue to like our Rust

**Evan You:** It's more opinionated than Babel... You can write plugins, but you can only write plugins in Rust, so it's a bit harder to extend for normal JS developers. I haven't been able to write an SWC plugin myself, but from a conceptual level, it does similar things. It parses your code, it transforms the AST, and then spits out JavaScript.

**Amal Hussein:** Yeah. For me, if we're pegging against the ECMAScript 2015, we're also holding the web back a little... Because there's some things that are newer, that would be supported in some browsers universally, across newer standards, but...

**Nick Nisi:** I would love to peg against ES2015, to be honest...

**Amal Hussein:** Really? Okay...

**Nick Nisi:** Until June, when the end-of-life of Internet Explorer comes. I'm still on that train...

**Amal Hussein:** Sigh...

**Evan You:** Yeah...

**Amal Hussein:** We're just holding the web back, yeah...

**Evan You:** I personally think it's an interesting trade-off, because for a Vite-based pipeline, Babel is in fact a pretty heavy dependency to add into it. Because without Babel, just by adding Babel into a production build pipeline, you could slow down your build by 30% or 40%. So when you have that in mind, I'm like "If I can't get 30% faster builds by just not using stage two features, I'm all for it."

**Nick Nisi:** Yeah. I actually have numbers against that. With Create React App and Babel, our biggest app in a monorepo took 2,5 minutes to build. When we replaced it completely with Vite, it went down to 22 seconds.

**Amal Hussein:** Wow.

**Nick Nisi:** And then when we replaced it with Vite with the legacy, the Babel plugin for it, it went back up to two minutes and twenty seconds. So we've got about ten seconds faster than Create React App, but it was still majorly slow.

**Evan You:** Yeah. It's mostly because preset-env is a very intensive set of transforms. It just does so many things; it has to do so many checks. That's where it really slows things down.

**Amal Hussein:** Yeah. So we have like this turnkey experience for the most part if you're targeting modern browsers, which is great... And then you have JSX support out of the box, and you have CSS processors support out of the box... And then you can import web workers easily, and you can import WASM files... Like, "Whoa, there's just so much." Like, who are these developers who are using WASM and web workers and JSX? I wanna know these people; we need to get them on the show. \[laughs\] Tell us about your apps!

**Evan You:** Surprisingly, there are a lot of people using these.

**Amal Hussein:** Oh, I just meant all together, but... In isolation, I think yeah, for sure.

**Evan You:** Yeah. We just recently had to rework our web worker support, because I think as someone from Google tweeted about like "I really like Vite, but their web worker support is kind of using a custom query string which I don't like", I kind of wanted to mention Parcel, which is another bundler project, build tool project... So Parcel is actually the first build tool that comes with this sort of battery included, everything works out of the box concept...

**Amal Hussein:** Yeah.

**Evan You:** So when Parcel first came out, it was the zero configuration build tool. In a lot of ways, the philosophy of assuming that certain things should work a certain way and make it work out of the box, this philosophy really aligns between Vite and Parcel.

So I just wanna give a shout-out, because Parcel is obviously the first tool to do this kind of thing. A lot of people who like Vite also like Parcel for the same reason, and they recently rewrote a lot of their internals with Rust, so it's also pretty cool to check out. Parcel 2 is a really impressive project.

**Amal Hussein:** \[36:16\] That's a project that I wish I've had a chance to play around with... Just following it, I feel like they've always been pushing the boundaries of how things should work, the thought leadership and North Star I think has been with Parcel-like implementation and APIs, so... Yeah, we'll have to maybe have them on the show sometime.

So I guess specifically with this WASM workflow - this is just really cool. So how are you -- can you tell us a little bit about how this works? Essentially, we're able to import WASM files...

**Evan You:** Yeah, it's really a simple transform, because we don't do all the magic. So when you manually do a WASM file, you have to fetch it yourself, then you instantiate a WASM instance... So it's basically a lot of grunt work whenever you want to import some WASM into JavaScript using just native web APIs... So we try to give you some help at the syntax level.

When we see that you're trying to import a WASM, we just transform it into the code that you would write manually, of instantiating it, then doing certain things.

**Amal Hussein:** Okay, I see.

**Evan You:** So it's all just build time transforms.

**Amal Hussein:** I see, okay. That makes sense.

**Evan You:** But still using web-native APIs.

**Amal Hussein:** Right. I guess it's maybe a similar pattern for web -- or, essentially, do you handle the instantiation of the worker?

**Evan You:** Yeah.

**Amal Hussein:** Interesting.

**Evan You:** The other part about workers is you want to apply the same transforms on your workers as your other part of \[unintelligible 00:37:53.03\] For example, you want to write your workers with TypeScript, you want to have module imports... Maybe you have a worker, but you want to have multiple files that import one another... But some browsers don't support module workers yet, so we have to pre-bundle the worker for you, so that your worker would work everywhere... That's a lot of these kind of things that we do under the hood so you can have a simple syntax, just import the worker, and then use it without having to worry about "Okay, how do I transpile the workers, how do I bundle the worker?" and all that stuff.

**Amal Hussein:** But you know how workers have all these special rules, because they're running in a specific context? I'm curious, is there like a lint package or something along those lines in Vite for handling all of the rules around workers?

**Evan You:** Yeah, Vite doesn't really do that for you.

**Amal Hussein:** Okay.

**Evan You:** We've actually had this thing where you can use TypeScript to essentially use a different tsconfig for your worker files...

**Amal Hussein:** I see. Okay.

**Evan You:** So you get rid of the \[unintelligible 00:38:53.18\] that you shouldn't have access to in that part of your project.

**Amal Hussein:** Yeah, I feel like that's the thing with workers that always trips me up - you just always need to make sure that you're not doing certain things, and I always find out the hard way... \[laughs\] Like, we just need some linting rules; I should probably research that. I'm sure it exists. \[laughs\]

**Evan You:** Yeah... Shout-out to a cool project called Partytown.

**Amal Hussein:** Oh yes, yes, Partytown. The third-party scripts...

**Evan You:** Yeah, but they've basically created a way to run code in the worker, but still have access to the normal browser APIs.

**Amal Hussein:** Yeah. They're on my list of people who I really wanna actually interview, because that project is the most creative that I have seen in a very long time. I don't know how that works -- it's like black magic to me. How does that even work? I don't even know. How are they doing that? \[laughs\]

**Evan You:** It creates a proxy object that simulates the browser... So every operation that you call, they buffer it into a series of commands, then send it to the main thread, do the things, then send it back.

**Amal Hussein:** \[39:56\] Yeah, so this is where -- proxy is probably also one of the least understood, but most powerful built-ins in JavaScript.

**Evan You:** It's extremely powerful.

**Amal Hussein:** It's so powerful, oh my gosh. We'll probably do a whole show on proxy. So we talked a little bit earlier about Rollup config being supported with Vte, and I'm assuming obviously all the tree-shaking happens as well... So can you kind of talk about this decision to support Rollup? Like, there's some intentional kind of steering I think you're doing, but that's an opinionated move; I think a good opinion, but it's opinionated nonetheless, so...

**Evan You:** Yeah. So initially, obviously if we could, we would want to do the bundling with Esbuild, because it's just so fast... I tested with that, but the thing with Esbuild is that it's great for bundling libraries, but it's still kind of a bit immature when it comes to bundling applications. Because when you're bundling applications, you have a different layer of concern that is code-splitting, chunk-cashe and how to best optimize your chunking so that you get the best loading performance in production.

So in that aspect, WebPack gives you the most control, but it's extremely complicated. Again, it's really hard to get a good default. You have to learn how WebPack chunk splitting configuration works.

Rollup gives you less control, but still enough for most common cases. The more important part is Rollup makes it easier for us to give you a good default out of the box... Whereas Esbuild gives you almost no control in terms of chunking. So when it comes to the final production build, we basically were facing this decision of "Should we just go with Esbuild directly, or should we go with Rollup, which is more mature, for application bundling?"

At the same time, another advantage is that Rollup has this already huge existing ecosystem. And personally, I also really like Rollup's plugin API. It's a very concise, simple, but also very powerful plugin API.

When I was writing the Vue single-file component support for Rollup and WebPack, the Rollup implementation - it's just so much easier to understand, even for myself... So I felt like a good plugin API is also really important for a build tool. Because essentially, the out-of-the-box features designs the baseline experience for all users. But how good the plugin API is decides the ceiling of the user experience.

One reason that a lot of advanced users also like Vite is because they can pretty much do anything they want by writing their own Vite plugins. So they're not sort of -- even though a lot of things are opinionated, they work out of the box, they can still sort of bend Vite to do what they want Vite to do by writing their own plugins.

So I think this is extremely important for power users. Having good defaults appeal to the maybe 80% of the users who just want to get things working, but at the same time, there will be this group of power users who want to do advanced things, and you need to give them that ability to do that with a nice API. So I think Rollup's API is a good way to give them that power, and Rollup itself is also powerful enough for us to give normal users a good default for production performance, and then it has a great ecosystem.

So going with Rollup is essentially sort of a trade-off decision between the plugin API friendliness, the existing ecosystem and how we can give a better production build performance out of the box for end users.

\[44:01\] I always say the reason we choose certain lower-level tools to do certain things is not always fixed in stone for Vite, because our goal is to have a coherent package to do things. So if, say, there is a Rust-based alternative that can replace Rollup, but is much faster, but gives you the same ability, can be compatible with Rollup plugins, then we can switch to that. I know someone who is working on a Rust-based version of Rollup.

**Amal Hussein:** Oh, wow. Yeah, so this is a really great segue into what I wanna get into next around Rust and where this fits into the ecosystem... So there's lots to discuss, and most are eager to hear about the server-side rendering story for Vite, and all of that... And then also, I wanna hear about your wishlist. If Evan could wave his magic wand, what would you wanna change or what would you wanna do, what would you wanna implement, or which issue would you want closed? \[laughs\] I know, there's too many...

**Evan You:** There's too many...

**Break:** \[44:58\]

**Amal Hussein:** Alright, Evan, so that was like a really impressive and exhaustive rundown of Vite's capabilities. It was not so Vite, but actually -- Viteless was not so Vite. I don't know. Alright. Bad joke. Either way... \[laughs\] We've covered a good chunk of, I would say, some of the highlight features, but really, there's so much more, and I encourage everyone to check out your awesome documentation... Because really, it's quite impressive how rich and robust and well-organized your docs are. I just wanted to say kudos to you and your team.

**Evan You:** Thanks.

**Amal Hussein:** Good documentation is so difficult for open source projects, because there's so much bias as a maintainer on the other side... So I don't know if Chris is still helping out doing docs, but I remember there was a few people on the Vue team that were helping with Vue docs... So I don't know if you've got the same thing going with Vite, but... It's a beautiful website.

**Evan You:** We do have a team. So after I wrote the initial edition, most of the later edits were just made by the team. And we also have PRs from our users, too.

**Amal Hussein:** Oh, that's great. Thank you for pushing that envelope. I'd love to get into the server-side rendering and what that story is, because that has typically been -- I'm curious to see if Vite has smoothed out those edges.

**Evan You:** \[47:54\] Yeah. So for server-side rendering the first thing is if you're doing it with Node, code needs to run in Node. The challenge is for a lot of projects, you have to compile code differently when you're targeting either a client, or you're targeting the server. So there are different code paths. Some code you'll want to only run in Node, some code you'll only want to run on the client... And then there's also, for example for Vue or Svelte, we actually compile our components differently when targeting a client or targeting SSR, because we compile our components into more efficient string concatenation while we're doing server-side rendering.

So this means for the same set of source files, you actually need to have two different compile outputs, so that you can do server-side rendering. Previously with WebPack the most frameworks do it in a way that you actually just make two bundles simultaneously. So every time you edit something, you rebuild the tool bundles. And that gets really complicated, and is also kind of slow.

So when we're thinking about server-side rendering with Vite, we want to have this same sort of snappy instant update, even for the SSR. The idea actually originally first was first conceived by Rich Harris. So Rich was working on SvelteKit, so he made this very early version of Transform that can take an Esmodule file, then rewrite it into something that can be instantiated in Node.js, in memory, basically creating a sort of virtual runtime for Esmodules in Node.js.

**Amal Hussein:** Wow. That's wild.

**Evan You:** Yeah.

**Amal Hussein:** This is pre-ESM support in Node, right? Before there was a path for --

**Evan You:** I'm not sure. Probably native ESM was already in an experimental version of Node at that time. The thing is we have different requirements. We can't just use native ESM, because we want to be able to precisely replace and invalidate a part of their module graph when you edit files.

**Amal Hussein:** Oh, right, right, right.

**Evan You:** And you can easily do that with native ESM. So we need to control the module graph, which is why we have to do this ourselves. So Rich came up with the idea first. When they were working on SvelteKit, he turned that idea into Snowpack, which is another --

**Amal Hussein:** No bundler, yeah...

**Evan You:** No bundler tool, with a very similar scope to Vite. We were sort of competing, because the two projects actually came out around the same time, but with kind of different design decisions on some parts of how we handle deps, and how we handle certain things...

Rich was investigating which tool he wants to base SvelteKit upon, so as a test, he PR-ed his SSR module transform into Snowpack. So I saw that and I felt like "Oh, this is a genius idea." Essentially, I implement the same thing in Vite. And the cool thing is we are able to apply the same client-side trans plugin pipelines on that node side module as well. And in order to do that, we had to extend Rollup's plugin format, so that you can use the same plugin to do different transforms based on whether you are doing SSR or not.

**Amal Hussein:** So do you have like a little abstraction layer in there?

**Evan You:** Yeah. So essentially, we took rich space transform, then we combined it with Vite's plugin system, and got it to a state where you can essentially use it quite smoothly to run arbitrary SSR for any framework. So we can do that for React, we can do that for Vue, we can do that for Svelte.

**Amal Hussein:** Wow.

**Evan You:** \[51:45\] So it's generic enough. I think that's also what I'm kind of proud about with Vite, is we try to find the right abstraction boundaries, so that we do just enough inside the framework so that it's still flexible enough to support different other frameworks, like client-side frameworks... But for the client-side frameworks we do so much that they can basically all share the same underlying implementation, without duplicating work with one another... Which is why I think we are seeing a lot of other frameworks, like Solid or Markal they essentially - they're able to do their server-side rendering implementation using Vite as well. I think that's super-great, because we have this common foundation that can be leveraged by different client frameworks. So they don't have to reinvent the wheels all over again.

So I think there are ideas coming from different places, and Vite came up with the most usable, flexible, but still powerful enough solution for people. A lot of these higher-level frameworks start to sort gravitate towards that as the common base... And SvelteKit is now also based on Vite, so using this same SSR system. We also have Hydrogen, which is the new React framework by Shopify, which is also using Vite SSR.

**Amal Hussein:** Wow. Yeah, it's amazing to see all this convergence of ideas, and it kind of came full circle... Rich created this thing, implemented it in Snowpack, which is used by Astro, or in that other ecosystem... And then Vite, and now SvelteKit is using Vite... It's just coming full circle in a way that's very interesting.

So I'm curious -- so you can still use all the same plugins that you would if you were just doing a client-side rendered app in this SSR workflow, right?

**Evan You:** Yeah.

**Amal Hussein:** Okay. But you're just leveraging this virtual context where you're replacing the module graph in memory, essentially...

**Evan You:** Yeah.

**Amal Hussein:** So is there a limit - I'm just curious - for like gigantic applications? Just think a really complex app, like something from Walmart, for example. If Walmart started using Vite, would they be able to do it on like a MacBook that doesn't have ton of memory? What are the constraints there?

**Evan You:** They probably could, because technically, the way we instantiate these modules wouldn't be more memory-intensive compared to native Node ESM. It's really just instead of Node instantiating those modules, we're just letting v8 instantiate it as function scopes. Technically, we don't really incur more memory usage.

**Amal Hussein:** Okay. Yeah, this is fascinating. I mean, we'll try to link to either this part of the code, or maybe the PR, or anything -- we'll try to get some info from Evan for folks who wanna dig into the specifics of this... But this is fascinating. I feel like it could be its own show.

So SSR support out of the box, for multiple frameworks. That's huge. And fast SSR, for local development specifically... Very, very exciting. I don't know, you haven't said the word TypeScript yet, so we haven't heard from Nick, but I can see Nick's -- that's his magic word. You have to say the word TypeScript. He'll be like "Did somebody say TypeScript?"

**Nick Nisi:** \[laughs\] I perk up immediately.

**Amal Hussein:** Yes, immediately. \[laughs\] But yeah, Nick... So anyway, we're moving on to some of this other stuff that we covered around Rust... So we've seen this interesting shift in our community towards like "Hey, JavaScript build times are taking too long. We need to go lower, closer to the metal. We need to use Rust to speed that up." Quite frankly, it's working. Things are faster with these Rust binaries. For me, I worry about the trade-off... And this is probably me just being grandma and cranky about it, but I just worry about the trade-off that we're making with just shaving a little bit of time here and there... We're also losing our interoperability and ability for people to contribute and know what's going on and debug etc. So I'd just love to hear your thoughts on that.

**Evan You:** \[56:24\] Yeah, I definitely share a concern. I've actually argued with people about this on Twitter, because I think there was an article basically saying Rust is the future of JavaScript tooling... And I was expressing the same concern, pretty much. I was saying "Okay, Rust is fast, but it's harder to write, it's harder to understand", and especially if you have a Rust-based dependency, I can't just crack-open Node modules and see what's going on. I can't patch it myself on the spot.

**Amal Hussein:** You can't debug it.

**Evan You:** Even if I look at the source code, there's a good chance that I can't figure out how to fix i. So when you think about Babel, the reason Babel became some successful is because people can write plugins for it, and you can actually try to -- if you already know JavaScript, then you can try to read its guide and understand how plugins work. But performant code in Rust is not easy. Incidentally, the author of SWC, who should be a very, very advanced Rust developer - he was trying to reimplement TypeScript's type-checking logic in Rust... And he gave up, because he was like "This is just too hard. I'm lost." The way that TypeScript's own codebase works - TypeScript is written in TypeScript, I think, right?

**Nick Nisi:** It is.

**Evan You:** It is safe, but it still uses a lot of these dynamic features of JavaScript where you have these dynamic references between different parts of your codebases, data structures that reference one another... And this is what Rust doesn't like. Rust is like "You need to be very explicit about what memory you want to put where, you need to have the lifecycles... Don't just link things everywhere..." And if you use unsafe, it's like "Ah, no." Your code will be unmaintainable.

**Nick Nisi:** I think I saw this tweet, or maybe a similar one, where they were talking about reimplementing the TypeScript type checker in another language, like Rust, or something in Go... Something else. And it really came down to -- somebody got a base set of features from TypeScript working, but...

**Evan You:** Yeah, I saw that.

**Nick Nisi:** ...the TS team chimed in. It's like, "Well, try generics." Like, generics just won't really work,

**Evan You:** Yeah, that was a subtweet from a TS team member, I remember, saying like - every couple months someone would write a new cache implementation that's like 30 times faster than memcached, and ask like "Hey, can you use this for Amazon?" \[laughs\] And the Amazon cache team is like "Um, no...? Does it do this? Does it do that?"

I think it's an interesting challenge. I'm pretty sure given the right people and enough effort and investment, you can definitely do that. But the thing is, Microsoft probably has that resource, probably has that expertise, but they're not doing it. And they're probably not doing it for a reason.

That said, I do agree that the speed of type-checking is slowly becoming the only major bottleneck of development speed... Because syntax transforms is relatively easy, especially with Go. Esbuild already -- like, people argue over whether Rust is fast or Go is faster, but as you can see, SWC and Esbuild aren't comparable in terms of raw speed when it's just transpiling or bundling stuff. This thing is relatively easy for native languages, and they can do this extremely fast.

\[01:00:03.24\] I think the complexity of TypeScript itself is not just type-checking itself is complex, but also you need to replicate what TypeScript is doing right now. And a lot of that has historical reasons, like historical burdens... You need to basically do everything TypeScript does in exactly the same way, and then you have to play feature catch-up. And I think that's extremely difficult

**Amal Hussein:** It seems like a losing game, honestly... In the sense that it's never gonna be perfect, and you're never gonna be caught up 100%...

**Evan You:** Yeah.

**Nick Nisi:** That is kind of the big bottleneck right now, but it is another use case for just relying on type-checking in your editor. It is a little slower, but it is async. So I can move on to the next line and it will just ping me, "Oh, something's wrong here."

**Evan You:** Right, right, right. It doesn't instantly block you from keep thinking about your code.

**Amal Hussein:** Yeah. I would agree with you, Nick. That's a really good point. But also, I think for me there's a deeper separation here that we need to think about more broadly, which is that our types never run in production... \[laughs\] So this is a development aid, and it's a build-time check, and I think we should start thinking about those two things as separate... Because when we're trying to optimize our developer workflow, and a couple of the concerns, it gets a little muddy... Especially because like, God forbid, if TypeScript isn't the hot thing in two years, what then? We're stuck with this --

**Nick Nisi:** But we have this fast way -- like, what Vite does presumably with Esbuild... It can just ignore TypeScript and continue on. So it's getting out of the way in development time and not really slowing anything down, which is really good.

**Amal Hussein:** Yeah.

**Evan You:** There's a few other things I kind of wanna touch upon regarding these native dependencies... There are some certain kind of jobs that JavaScript can actually be pretty performant. Because v8 is pretty amazing. If you write JavaScript code in the right way, you can get pretty close to native performance in certain cases. Because one of the things that Vite tries to do is we avoid full AST parses during development. A lot of these features that we do - for example, we resolve your imports and rewrite them... We do that without doing full AST parses. We use es-module-lexer, which is written in C, to only find imports. Then we rewrite those things using another package called MagicString, which is super lightweight... And only do this sort of direct string manipulations, without doing full AST transforms. So it's an order of magnitude faster than, say, Parsonage with Arorn and then transforming the AST, then printing it out.

**Amal Hussein:** Is that because you're only looking for the imports? For our listeners, I think when you're parsing -- like when you're, let's say like `const hello = "worlds"` when you're parsing that one line, the first step is the compiler does this like actually just break that string up and try to find the tokens. So that's like the lexicon -- like, what is const? What is hello? What is this string? So breaking that up, and then it goes into actually parsing the tree, and creating the AST. So I'm just curious, what's the benefit of the thing that you're doing?

**Evan You:** Actually parsing the whole file into AST is expensive.

**Amal Hussein:** Right, right, right.

**Evan You:** First of all you have to actually parse, then you create all these AST objects, which creates memory, then there's garbage collection, and then you need to serialize the AST to print the transform thing... But if you're only doing -- our only goal is to rewrite the import statements. So es-module-lexer is essentially a shortcut that only looks for import statements. So it doesn't care about anything else. It looks for import statements, it gives us their locations, so we can then look at those import statement sources, resolve them, rewrite them... So when we rewrite them, we use another package called MagicString, which only do these really fast, simple string manipulations, like replacing a part of the string, while retaining the relative positions of everything else, and then generating a source map.

\[01:04:21.20\] So this is in fact the only transform that Vite does by default. If you don't use any plugin, this is the only thing we do... Which is why it stays really fast.

So we've been thinking about maybe we can replace MagicString with a native dependency that does the same thing, because it feels like a good candidate. And it turns out someone actually did that. So they reimplemented MagicString using Rust. And in the performance benchmark we noticed that it's only maybe 30% to 40% faster than the JavaScript version. And for us, that becomes a much less attractive trade-off... Because the JavaScript of MagicString is lighter; when you compile something for native, it incurs another issue, which is distribution. Right now, for example you're trying to download -- like, Rust or Go, they all have to compile into native boundaries and you have to compile all these different artifacts for different operating systems. And then when the end user tries to install them, we need a way to figure out that you only install the correct binary for your target operating system. Previously, it was a big hack; everyone was doing their own thing. You have to use a post-install script to detect the target OS, then do a fetch yourself, fetch the binary and then put it on the machine... Which just sounds super-sketchy. It's like a super-insecure way of doing things.

**Amal Hussein:** Especially because it's not like we in the JavaScript community have the same hygiene around dependency management that folks who've been doing native development have, right?

**Evan You:** Yeah...

**Amal Hussein:** We just npm-install stuff, and we're not expecting "Oh, there's this binary that's compiling", or whatever. I mean, granted, that does happen, but the whole point is we don't have the same hygiene around low-level code running on our machine that a Linux developer would have, for example... But yeah, I'm just happy to hear that you have the same sentiment, Evan...

**Evan You:** This is one of the problems that the npm ecosystem needs to solve next, is like "How do we efficiently and securely distribute these native binaries if you want to actually make it easy for people to write JavaScript tooling with native languages?" Because from what I see, this is still something that's lacking from the ecosystem.

**Amal Hussein:** Very much so. We're having trouble doing that with just plain old JavaScript, Evan, so you know... Let alone the native binaries. But I'm just happy -- Nick's probably heard me say this a bunch of times; I poo-poo on this like "I don't know about Rust in the JavaScript ecosystem! This doesn't make me feel good!" I feel like the odd person out, so Evan, thank you for making me feel less crazy and less paranoid... And yeah, I'm with you.

So just to kind of like wrap up our discussion - we could talk about this for hours - what's your wishlist, Evan? What are some things that you're eager to see land, some things on the roadmap that you're excited about, or some things that you wish you could change? The sky is the limit, no boundaries here.

**Evan You:** Okay, if there's one thing I wish I could change is if we can magically fix the Node ESM problem...

**Amal Hussein:** Yeah, agreed. Check. \[laughs\]

**Evan You:** That would probably take some miracle, but that's probably my number one thing right now. Also some of the legacy module headaches in the ecosystem that we see. Actually, we've had this issue all along with Vite, is that some old packages in the ecosystem, they're like "We need to ship ESM now", so they ship an ESM version, but the code actually contains require calls, and imports a dependency that's still common JS, and all that weird stuff... Basically, a mixed module graph. And it just creates all sorts of headaches. And these packages also don't really play well when you're trying to load them in Node's native ESM mode.

**Amal Hussein:** \[01:08:17.05\] Yeah, we've made a mess; we have this mess right now with modules, and in Node specifically... Because yeah, things are clashing in weird ways, because we've gotten really creative over the years, and... I think this is just like a -- it's not anybody in the community's fault, this is just like we needed a solution for this much earlier...

**Evan You:** Totally.

**Amal Hussein:** ...and taking a train that's going 90 miles an hour West, and telling it to go 90 miles an hour East. It's like, that is not an easy feat, for what it's worth...

**Evan You:** Yeah. Part of the reason why with Vite we kind of -- we were like, "Okay, we're a new tool, so we try to push our users to say "Okay, if you wanna use ESM, stick to the packages that actually ship proper ESM."

**Amal Hussein:** Right.

**Evan You:** We get a lot of bug reports about this kind of packages. Sometimes these authors don't even know they're shipping packages that have mixed module formats in Node. Basically, we tried to tell the users "Okay, you can let that author know they're actually shipping mixed formats. Maybe they can fix that, so we can help move the ecosystem forward", instead of asking us for build tools to support these technically incorrect formats forever.

**Amal Hussein:** Right. Because build tools also - when we create that abstraction, we also create a crutch. So it's like, let's fix this source problem. But yeah, the long tail of open source is also tough. There's no guarantee a maintainer is even still working on something that's so widely adopted, so that's another challenge...

**Evan You:** Yeah, yeah.

**Amal Hussein:** And npm doesn't make it easy to identify like "Hey, here's the newer version of this thing that somebody forked and is maintaining." There's no easy way to also redirect people to the newer thing... But yeah. So any other wishlists before we wrap up? Are you like "Everything is perfect with Vite"?

**Evan You:** Another wishlist is if someone rewrites Rollup with Rust. I know someone's already working on it, I just wish they can finish it faster. That would actually help Vite quite a bit, but... That'll probably take some time. But I wish that can happen sooner.

**Amal Hussein:** Rewriting Rollup in Rust?

**Evan You:** Yeah.

**Amal Hussein:** Oh, wow.

**Evan You:** Yeah. So the idea -- I kind of forgot to go back a little bit regarding my stance on our native tooling. I think we don't want to natify everything.

**Amal Hussein:** The dependencies... Yeah, yeah.

**Evan You:** I think we should natify certain really well-scoped, important infrastructure projects. I think that's the right line. Something like Babel, or Rollup - these things that are the backbone of a lot of people's build stacks, where also you don't necessarily touch its code very often. I think these are good candidates to be rewritten with native languages, because tehy would provide significant overall build speed for the anti-ecosystem. But if you say you have a tiny helper library and you write it in Rust, it's probably not worth it.

**Amal Hussein:** I think you're right, that sounds like the right boundary to draw, for sure. And I think that's a nuanced, but important distinction. You're absolutely right. So yeah, I think it's hard to get that level of nuance out in the community though, because I think there's a hype train going on, it's like "Hype! Hype! Hype! Hype!" Nobody's listening, so nuance gets lost... But I'm confident we always find the way to do the right thing, always... Good ideas float.

So Evan, this has been such a -- wow, I mean, it's 9 AM where I am, and I feel like I've already had eight hours' worth of schooling... So really, thank you so much for educating us and walking us through some of the decisions that you and your team made.

**Evan You:** It was a great conversation.

**Amal Hussein:** Yeah, really. I feel like I could -- I've always been a fan from afar, and now I'm like... Yeah, Evan, you're actually also a really good teacher, so please consider doing more open lectures...

**Evan You:** Thank yo.

**Amal Hussein:** Just Twitch-stream your thoughts... I'll listen. I'll be there, taking notes. \[laughs\]

**Evan You:** Maybe I should get into streaming.

**Amal Hussein:** Maybe you should. You heard it here first, everyone. You'll have me to thank for all your future knowledge. \[laughs\]

**Nick Nisi:** Be sure to like and subscribe...

**Amal Hussein:** Yeah, like and subscribe, exactly. And we'll come up with like a French name for your stream channel; we'll have to think what would it be, I don't know... What's the French word for "twitch"? I have no idea, but I'm sure we can find it. \[laughs\]

**Evan You:** I've gotta--

**Amal Hussein:** Are you googling?

**Evan You:** I've gotta go to Google Translate, I guess...

**Amal Hussein:** Google Translate, right. Yeah, so we'll put all the links in our show notes for everything we discussed today. There's a lot to unpack, so we're excited for you to dig into that... And with that said, it's been a wonderful show, and yet again, thank you to my lovely co-host, Nick Nis. It's been a pleasure. We'll talk to you next week, everyone.

**Nick Nisi:** Likewise.

**Amal Hussein:** Bye-bye!

**Evan You:** Bye!
