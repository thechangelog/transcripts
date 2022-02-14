**Kevin Ball:** Hello, JS Party people, and welcome to this week's JS Party. I'm KBall. I will be your host today, and I am joined by the one, the only, Chris Ferdinandi, the vanilla JavaScript guy, as I think he was introduced the last time we had him on the show. Chris, welcome back!

**Chris Ferdinandi:** Thanks, Kevin. I'm really glad to be here. Thanks for having me.

**Kevin Ball:** Yeah, I'm excited to have you, too. So the last time we were here we talked a lot about how [JavaScript is the CO2 of the web](https://jsparty.fm/80). It's something that just kind of seems to be accumulating over and over time, we get more and more around. I think you've been beating this drum for a long time.

**Chris Ferdinandi:** Yeah.

**Kevin Ball:** Do you want to give folks who maybe don't know you or weren't around for that episode - and I'll find the link to that episode and drop it in the show notes, but maybe give them a little intro of you and kind of who you are in this community... Because I think you have a bit of a stance here.

**Chris Ferdinandi:** Yeah, yeah, absolutely. And honestly, I feel a little bit like old man yells at cloud a lot at this point... And my position has become a little bit more nuanced as the hair in my beard has gotten a bit more gray. I'm a self-taught developer, and I learned how to code at a time when it was like really this perfect storm of really good browser APIs coming online, the platform itself borrowing a lot from stuff that jQuery had paved the cow path for years earlier. And also a web that didn't do like a ton of stuff yet, and it was way less complicated than it is today.

\[04:11\] And so one of the things I've really strongly started to feel is that if I were trying to self-teach myself today, I don't know that I would be able to do it or that I would really have the fortitude to stick with it. And so I really believe that there's a simpler, more resilient way to make things for the web. And I spend a lot of my time not just teaching people JavaScript, but focusing on a way to build for the web that's a bit more accessible, a bit more friendly to the people who actually use our stuff, that maybe centers the user over the developer, and in the process of doing so actually makes things easier for developers, too... And a web that's just more resilient and performant. I feel like the things we build today break really easily, don't really run meaningfully faster than the web did five or ten years ago, even though internet speeds have gotten like four or five times faster globally. Yeah, there's a lot to unpack here; we can go in a bunch of different directions.

**Kevin Ball:** Yes, I was feeling that break really easily earlier. I just was working on a big project to migrate our build system from Webpack over to Vite, and there's all these like subtle things that are slightly different. And I thought I had it all, got it together, and then deployed a test, and it was broken, and it's like, “Oh, didn't find this package right” or “Worked in dev, didn't work in prod.”

**Chris Ferdinandi:** Yep. I actually just ran into this myself yesterday. I had a pull request on an old plugin of mine from like five or six years ago, a form validation thing; and it was a really simple request, just some basic functionality, it was like a one-line change. "Yep, no problem, happy to accept it.” They only made the change to the source, so I had to like run a build and update the version number and everything... And it was built with Gulp, which I haven't touched in like three or four years, because I'm all in on npm scripts now. And so everything was broken; the build wouldn't run, npm install was failing because of like a bunch of broken dependencies... I think I was on like an old version of Gulp, long outdated, and I ended up just bailing on the PR, with the idea that I'm going to have to literally rebuild my build process before I can accept this PR. And that's just such a crappy feeling. One of the things I love about, I think, the more close-to-the-metal approach is you can pick up codebases you built years ago and you don't have to deal with that. For me, it's one of the biggest Achilles’ heel about the way we build today.

**Kevin Ball:** Now, to be fair, this is not a purely JavaScript problem.

**Chris Ferdinandi:** No.

**Kevin Ball:** I remember trying to pick up old Rails projects, or you know, heaven forbid, compiling something that actually depends on headers that have changed, and things like that. This is a problem, in some ways, that is as old as software development.

**Chris Ferdinandi:** Yeah, that's fair.

**Kevin Ball:** But JavaScript skipped it for a while.

**Chris Ferdinandi:** Yeah. And not just JavaScript, I feel like it's maybe the whole frontend tooling chain now. Everything requires a build step now, and there are really good reasons to do that. But the build steps do so much, and they, in particular, have such deeply nested dependency trees. Have you ever seen the meme of like, there's a bunch of really precariously stacked blocks—

**Kevin Ball:** Yes.

**Chris Ferdinandi:** —and there's just one little keystone block holding the whole thing up... And it's like, some guy who has been maintaining this project in his mom's basement for like a dozen years...? That’s the web, and it's so easy for the project -- you know, it's like pad-left or left-pad, whatever that left—the whole npm thing is...

**Kevin Ball:** Yup.

**Chris Ferdinandi:** All you need one person to stop maintaining some critical infrastructure and a bunch of stuff falls apart. And that just really sucks.

**Kevin Ball:** That does. And that dependency tree, as you highlight, is so big. Like, I remember the whole empty Create React app project that installs 1,000 packages. I don't know if they've changed that or not. It's been a long time since I've played with that. But yeah, it's deep. Okay, this is a problem... This has been a problem for the web for a while... But you also, when you reached out, you said, “Hey, I think I see some directions we're going that might be improving that.” Do you want to talk a little bit about those?

**Chris Ferdinandi:** \[08:19\] Yeah. And so to be fair, it's almost like there's two different directions you could go, and they're not necessarily mutually exclusive. They kind of work in tandem. And this will make a lot more sense when I actually start talking about it... So let me just shut up and do that.

So I originally had flagged two trends, but I'm actually seeing a third. So the first trend is the rise of micro libraries. So for a long time, we've had these big UI rendering libraries, like originally Angular, and I think there was some before that, but I'm old and my memory is crap now... And React, and Vue, and they're pretty big; like, even minified and Gzipped, they're 30 kilobytes. And once you unpack all that code, it ends up being a lot larger. And because of how JavaScript runs in the browser, there's not just the download time to consider, but the actual compiling of all that stuff, and then the abstractions that are layered in make working with these libraries really slow for browsers that use them.

I have a relatively modern smartphone, and the Stop & Shop mobile app is, I believe -- it might be an Angular app, or maybe it's React; I haven't actually looked at the source code. But I can absolutely tell that it's a JavaScript-based frontend for ordering online groceries, and stuff. And it works fine on my computer, it completely cripples my phone. It crashes constantly, just because of all the code. It just can't handle it.

One of the big trends I've seen is the rise of micro libraries. As far as I can tell, this trend started with [Preact](https://preactjs.com/), but there have been others that have followed suit. And so what these libraries are is they're effectively really small libraries that do a lot of the same things as the bigger libraries, but with less code and less abstraction; they sit a little bit closer to the metal.

So for example, Preact is a 3-kilobyte alternative to React; it uses the same API, but it's like a 10th of the size. And it has a few less features, but not many. So it has hooks like modern React does, and all of the state-based UI goodness that people love about React. It's not just smaller to download - you don't just benefit from that smaller footprint there - it's actually four times faster to render state updates than React is, too. So the initial renders faster, state updates are faster... And then Jason Miller, the guy who built Preact, claims he's working on a render engine update that results in optimizations that are actually up to 3x faster than Preact’s current render, and potentially even faster than the way people would normally handwrite Vanilla JavaScript, just because of some — yeah, there's just some weird stuff that's built to be optimized for the way computers handle code that isn't the way, like, someone who wants sane and maintainable code would actually author it... And that's really, really cool.

There was also Alpine.js, which is still around, and was inspired by Vue.js, but never really got as big as Preact. But it did inspire Evan You, who built Vue, to create [petite-vue](https://github.com/vuejs/petite-vue), which is a 5.5. kilobyte subset of Vue, specifically optimized for progressive enhancement. And the more recent entry to the market is [SolidJS](https://www.solidjs.com/), which is another reactive state based UI micro library that claims to be nearly as fast as Vanilla JavaScript in render performance, but has a similar API to libraries like React and Preact.

And so I'm really hopeful for these; they don't completely eliminate this problem, but they have less code, fewer dependencies, fewer breaking points, and generally, punish the user less for the developer making a decision that is really largely for their benefit, for developer ergonomics or developer experience.

**Kevin Ball:** So it sounds like a common trend on these is kind of trying to hit that Pareto principle of saying, “Okay, let's give you 80% of the functionality at 10% of the code weight.”

**Chris Ferdinandi:** Yeah.

**Kevin Ball:** \[12:13\] Because React is built for Facebook's needs. If you're shipping all of Facebook, you don't care about a little extra weight in your framework, because you need all of those additional features and functionality. But if you're shipping something small, you may not.

**Chris Ferdinandi:** Yeah, this was a huge part of our conversation last time. React isn't inherently bad; it solves a very legitimate problem that the developers at Facebook have. But for 99% of us, we are not building things that are anywhere near Facebook's size, scale, needs. And so we're using a tool that was built to solve a specific problem that doesn't necessarily match up with ours. State-based UI - problem; state-based UI at that level of scale, with all these other kind of moving parts and needs, usually not so much. The Pareto principle is a really good way to kind of frame that.

So I find that exciting. I'm really glad to see people kind of taking this concept and saying, “What can we strip out of here and still maintain kind of the kernel of what made this so good?” But there’s another trend that I actually think is even more exciting, and that's the rise of precompilers.

So a few years ago, Rich Harris, who works over at New York Times, realized that state-based reactivity can be a good thing; handling it all with a mountain of client side JavaScript is not. And I will send you a video - his kind of initial talk on this that we can link to in the show notes if you want. But he ended up creating a tool called [Svelte](https://svelte.dev/), which we talked about a little bit last time.

And the way Svelte works is it gives you a similar-ish authoring experience to something you might get with like Vue or React; it lets you create reactive, state-based components. But instead of shipping them as-is to the browser and then letting the browser kind of run all that stuff in real time, it runs a compiler that spits out plain old HTML, some Vanilla JavaScript, and that's about it. The Vanilla.js does the same kinds of manual DOM manipulations that you would do if you weren't using a framework. So rather than doing DOM diffing live in the browser, the compiler figures out what needs to change when different things happen... Alright, let's spit out just a little bit of JavaScript to do just those things. And, "Oh, this HTML never changes? Let's just spit that out, like, hard-coded into the HTML file already, so it doesn't have to get rendered with JavaScript."

And in my opinion, this kind of thing gives you the best of both worlds. You can write state based UI if that's your thing, but you get to serve an old school DOM manipulation experience to the users, that’s actually in many cases faster and more performant for them.

Rich also started working on this thing called [SvelteKit](https://kit.svelte.dev/), which is an extension to Svelte that adds routing, and some really, really smart progressive enhancements, so that if the JavaScript fails, you can fall back to some server-side stuff. He did a talk on this last week, the week before, at the time of our recording, on a new term he coined [“transitional apps”](https://www.youtube.com/watch?v=860d8usGC0o) that kind of bridged this gap between single-page apps and multi-page apps. And I'll share link to that with you as well, Kevin, just because I think it's really, really interesting.

**Kevin Ball:** Yeah. So I want to dig a lot deeper on this precompilation trend, because I am also super-excited about it, and I think there's a lot of different pieces that play into that. But one of the things I want to ask about before we go too deep on it is - so this solves some of the challenges in terms of what we're shipping to the client, what we're shipping to the customer... But does it just move those problems? Do we still end up with the 1000 dependencies, because now we need to do more complex things on the compilation side?

**Chris Ferdinandi:** \[15:45\] Absolutely. I have a lot of excitement tempered with deep resigned sigh, I guess... \[laughter\] The thing I've come to just really -- I've gotten to a very zen place about accepting this, is that my needs and wants as a developer seem to be very different from at least a vocal subset of the larger developer community. I have run into a lot of developers who legitimately enjoy the experience of working with these frameworks, and don't find kind of the maintenance costs of dealing with them particularly difficult.

I don't agree, I absolutely hate it. But I know enough people that like it, that it's not just kind of this like, “Okay, you're just like an outlier, or odd.” And I thought about this a little bit more acutely. Just last week, Tim McNamara over on Twitter shared kind of this idea that like, “It's harder to build websites in 2021, than it was in 1996.” And he was kind of lamenting being able to open up notepad, and write some HTML and push it up via FTP; a bit of a chore, but you know, predictable and easy to understand.

I started giving it some thought, and I realized that, first of all, you don't have to build with these tools if you don't want to. In fact, just last week I actually changed a file and pushed it up to my site with FTP, and it was glorious. Oh, my God. Like, it had some downsides, but it was also glorious in a really weird kind of way. Also, many things are easier than they used to be. Kevin, I think you're like me, probably old enough to remember when we used to have to use tables and spacer gifs to nudge and move stuff around, right? And now we have Flexbox, we have grid.

**Kevin Ball:** Now, you only have to do that in email.

**Chris Ferdinandi:** Right. Yes. \[laughs\] Which will never apparently catch up to the modern era. But between Flexbox and grid, we can build these amazing layouts with relative ease. Browser standards literally just weren't a thing back in the day, and now you can write code once and ship it to all the browsers without a bunch of if-else statements.

**Kevin Ball:** Flexbox rocked my world when that came out.

**Chris Ferdinandi:** Right?!

**Kevin Ball:** Like, it just completely rocked my world.

**Chris Ferdinandi:** So like in many ways, web development is easier, unless you let it not be; you don't always have a choice with the tools you use. And some people jump on the tool train just because it's the thing to do. But the other piece of this is that the web also is more complicated. I have a tendency to kind of over-nostalgize the early web. But the reality is -- there was a time when you couldn't even share images on the web. Yeah.

**Kevin Ball:** The things you can do have dramatically expanded.

**Chris Ferdinandi:** Right. You couldn't style links on hover; they were just the color they were and that was it.

**Kevin Ball:** Well, and I think this is actually kind of the key to some of this, is this idea of complicated complexity, the types of things that you can do. I have this theory that in general, complexity is conserved, right? If you have a complex problem, there's going to need to be complexity somewhere in your solution.

**Chris Ferdinandi:** Yes.

**Kevin Ball:** And this actually, I think, lies at the heart of some of the distinctions between who's really excited about these tools and who isn't. If you're solving a lot of really complex frontend problems, it's really nice to have a lot of that complexity baked into your framework. And as someone who built some very complex jQuery and Backbone apps back in the day, I love these frameworks for building complex apps. They are so much nicer than what we had to do previously, when that complexity was baked into your application and not handled by the framework.

However, the frameworks do have this kind of minimum complexity bar; they bake in a lot of complexity. And so if you're set on using that framework, you can only go so low in terms of how complex the work that you're doing is. And if the work that you're doing doesn't need all that complexity, you have now baked in an unnecessary set of things.

**Chris Ferdinandi:** I mentioned at the start, that there was kind of this third trend that I've just recently started thinking about, that I didn't mention when I originally reached out to you... And I think this, for me, is the thing I'm most excited about. Compilers are really cool, and we can dig a lot more into them if you want. But I think the thing that kind of gets at both of these -- and we've seen this trend every 5-10 years or so on the web, is eventually you build up enough... Almost like a steam valve releasing. You've built up enough momentum or pressure around the tooling, that the best parts of it get absorbed into the web platform itself.

**Kevin Ball:** \[20:15\] Yeah.

**Chris Ferdinandi:** And we saw that with ES5, where jQuery for years was the way you build things with JavaScript on the web, because it made stuff that used to be really hard, like selecting an element by something other than an ID, or adding and removing classes, really easy. And then we got querySelector() and querySelectorAll(), and the Class List API. Using an embedded video and web page used to require really complex JavaScript libraries. Now we have the video element.

There's just all this really cool stuff that's getting pulled into the platform, and I'm seeing more and more of that starting to happen. I don't think we're anywhere near where we need to be, but a lot of these tools that I hate have a really important role of paving the cow paths and showing what we could do. And then that stuff hopefully eventually gets pulled into the standards process and moves into the platform, and that's where the complexity lives. And it becomes easier for you, the developer, it becomes better for the end user, because it's already built right in...

I'm even seeing this now, there's been talk of interactive components, like tabs and carousels and accordions, having native elements, so that you don't have to roll your own or grab a library every time you want to add these very common user patterns into your interfaces. And so that for me is, I think, the trend that I'm most excited about, but I think it's also the longest way out. And so I'm excited, but I'm also like, “Okay, you need to be really patient, because this is not going to happen anywhere near overnight.”

**Kevin Ball:** Yeah, there's a [JS Party episode that we did with Laurie Voss](https://jsparty.fm/55), who talked about exactly this idea of libraries transcending into the platform. And jQuery I think, is the best example of this. It was something that made such a massive improvement in the way that we work on the web, that the web just said, “Okay, we're going to suck that in and give you those capabilities natively.”

**Break:** \[22:15\]

**Kevin Ball:** Okay, so let's come back and dive a little bit deeper, and I'm particularly excited to dive into the precompilation trend, because I think there's a lot of interesting things going on there. And it kind of hooks into some other trends we're seeing... Because the more you precompile, the more you can push things out closer to the user, you can do very edge located computation. There's all sorts of interesting pieces there. Looking at this landscape, in some ways, this sort of precompilation mania started with tools like [Gatsby](https://www.gatsbyjs.com/), which still ends up shipping a heck of a lot of code to the browser...

**Chris Ferdinandi:** \[24:12\] Yeah, there's a way to turn that off. But yeah, by default, it's a lot.

**Kevin Ball:** Yeah. So, I feel like Gatsby kind of had a rise where it was very, very popular, and then sort of had a fall, and a lot of folks are a little bit down on Gatsby at this point. But one of the things that I think it kind of highlighted that was really interesting, and I'd love to sort of put out there and then kind of see if this is something you're seeing elsewhere in the ecosystem, is that it highlighted that precompilation not only can mean what you do on the JavaScript side generating HTML, but it can also mean doing all sorts of different data and API pieces at compile-time.

**Chris Ferdinandi:** Yeah.

**Kevin Ball:** If you have something that lives in an API, but you know that it's bounded and you can enumerate the cases, sometimes it makes sense to do all those API calls upfront, so the user doesn't have to deal with that time.

**Chris Ferdinandi:** Yeah, I do that in a bunch of my own work, actually. I don't use Svelte or anything like that. My workflow is a lot more HTML-driven. I always talk about the JavaScript-driven tools, just because audience and all that, but I'm really, really, really into static site generators, like [Hugo](https://gohugo.io/) and [Eleventy](https://www.11ty.dev/). And they do the same thing; they have built-in fetch and render kind of capabilities that are really, really interesting, and I absolutely love. Personally, that's one of the more kind of powerful aspects of this, especially when you couple it with some sort of cron-based tasks, where you precompile at set intervals and then redeploy, depending on how time-sensitive your update needs are, how fresh you want the data to be, and how much traffic you get; you can reduce the load on your server, you can reduce the demands on the users’ end... It ends up being a really, really nice way to build for the web.

**Kevin Ball:** So essentially, what you can do in that case then, is you're basically doing all the things that a dynamic web server would do, but you're doing it asynchronously ahead of time or on a cron schedule, and then what you end up pushing out and serving from your web server is just static HTML, CSS, and JavaScript.

**Chris Ferdinandi:** Yeah, let me give you an example, just because I think, for me anyways, I find examples make things a little bit more tangible. So I run like a dozen different websites, because I'm a glutton for punishment. So I have my main website at [GoMakeThings.com](https://gomakethings.com/), I have [Vanilla JS Guides](https://vanillajsguides.com/) where I sell my Pocket Guides, Vanilla JS toolkit where I have a whole bunch of like copy-paste stuff, and a handful of other kind of like "help people with JavaScript" kind of sites. And whenever I launch a new course or product, I want to let people know. But I don't want to go update a dozen sites every time I do that. And then if I'm running sales, like, kind of time-sensitive, like “Today's your last day...” I don't want to have to go update all that manually.

And so for a while, what I ended up doing was I created a really simple JSON API. It's literally just a JSON file that has the sales messaging, and that's it. Like, you can call the API and get the data. And for a long time, I was doing this with JavaScript; you would inject into the page after the page loaded. But now I use Hugo, but this works with any kind of compiler tool that has API fetching capabilities or HTTP built-in.

Every time my sites compile, they call that API, get that content, and then use it to hardcode HTML into the file that gets rendered, and that's what gets shipped. So when you request that file, that content is already baked right into the HTML. And I have my server set up to rebuild all of these things at midnight, every night. So every day, if the message has changed, the fresh message displays. But you can do this with all sorts of things like I did.

\[28:03\] As an experiment, I used Eleventy and a fake photography website API, where it literally just had a giant array of photographs, their costs and a brief description. And with Eleventy, you can grab this API, generate different routes for each of them... So you can completely eliminate single-page apps if you want with a tool like this. And I think I'd used a GitHub action hook to recompile; the whole thing was just hosted on GitHub Pages for free. And so you know, it spit out fresh pages for each of the different photos that were available, and hardcoded all the information right in.

And as a result, you hit any of the endpoints for those pages, and they load instantly. And then when you pair them with something like a CDN or service workers or both, the latency time and the user experience is on par with something like a single-page app, without the accessibility issues that come along with that, and without the fragility that comes along with that. So I think it's a really nice alternative to some of the tools we've been using up to this point.

**Kevin Ball:** Yeah. You compare it to a single-page app... That's with a fast API on the single page app, right? If you have a pretty slow API you're working with... Like, a lot of single-page apps, the experience is, "Click. Loading bar, loading bar, loading bar, loading bar... Here's my page!” Right? And that's a little bit better than a "Click. Nothing, nothing, nothing, nothing... Here's my page.” But it's far inferior to "Click. Oh, there's my page.”

**Chris Ferdinandi:** Now, I think one of the limitations where we haven't talked about, but it's maybe implied here, is this approach works totally fine for API-driven content that is generic across all users. But once you start getting into customized content for individual users, it doesn't really work anymore, unless you want to precompile different views for every single user and all of their stuff, and I don't think that's necessarily reasonable or sustainable in most cases. So there's kind of that limitation there. But it does work really nice for architectures that are driven on micro services, or decoupled kind of situations, where you've got data living in a bunch of different places, all connected with API's.

**Kevin Ball:** Yeah. So that raises kind of an interesting point, of what are the kind of domains in which this works well, and where does it start to break down? So you have individualized content, logged in experiences, things like that. That's definitely a place where there can start to be breakdowns.

**Chris Ferdinandi:** Yep.

**Kevin Ball:** Though, you could have those parts be dynamic, API-based, and still statically compile most of it. Are there other places this starts to break down? Some of the things I'm thinking about is where you kind of end up with search experiences across very large numbers of pages, where you end up with just content that counts in the millions of pages, rather than thousand of pages, things like that.

**Chris Ferdinandi:** Yeah... It's tough for me to say, too... Hold on, I want to run a quick little—a quick little test here. So if I were to try and build—how many pages are on my site right now? I'm running a Hugo build, just to see how long it takes.

Yeah, so I do think on larger sites you maybe start to run into the kind of the edges here. The potential flipside is, you know, depending on what you're doing on the server, the server demands can be really high if you have kind of on-demand generated stuff too. And if you're like, "Okay, I'm just going to ship flat files, but then have JavaScript do its thing" you're effectively forcing every user to run their own little private server to handle all that stuff for you in the browser, and that's not necessarily very kind either.

\[31:52\] I hadn't really thought about the very large site thing. I think, for me, I'd always been thinking about it in terms of content needs. Precompiling works really well for stuff that doesn't change very frequently, or is kind of really consistent from one user to the next. I think that the time-sensitivity aspect is the thing here, too. Like, if you have -- let's say it's not specific to the user; I'm thinking like a ticketing site, right? Where you're buying tickets to a concert. You want, depending on who the artist is and how tough these tickets are going to be to get, you probably want up to the second information about ticket availability, and a delay of a minute is not necessarily acceptable if these tickets are going fast. Those are the kinds of things where - same information for all users, but the time sensitivity is so high that precompiling that just doesn't make sense.

Yeah, I actually think you probably have a better list for that than I do, Kevin. I don't know, I haven't given that piece of it a ton of thought.

**Kevin Ball:** So another dimension that we might look at here is the tooling around these, and how that's evolved, and sort of the infrastructure pieces to ship this... Some of the benefits that you get out of going this approach are, you know, we've mentioned massive performance improvements, because you can just serve static HTML, CDNs can serve it, all these different things.

Another big one, in my mind, is actually security. At some point, my sites that I maintained outside of work are all static sites, static-generated. I have one that's built with Svelte and one that's built using Jekyll. I'm not using SvelteKit, I'm actually curious. I did that site before SvelteKit came out, and I was using some previous thing... But the nice thing about those is like I can invite people to try to hack them; there ain't nothing they're going to get to there, right? It's just static files, there's no vulnerabilities there. Or if there are, it's vulnerabilities in NGINX, dealing with static files, right?

**Chris Ferdinandi:** Yeah, for sure. The tooling is wide and varied, and a lot of it depends on your, I guess, really preferred stack. I tend to use Hugo for all of my things, because I've found the Ruby templating in Jekyll confusing. Not that Go is particularly clear either, but it renders really fast. And I've found that I really like old-school static site generators because they're mostly HTML, with a little sprinkling of whatever your templating language of choice is. So Eleventy is another really good choice.

The one thing that has kept me from migrating to Eleventy, honestly, is I do not want to deal with maintaining Node.js on my server. And again, we're shipping flat files, but I have a process that involves, like, deploy to GitHub, send a webhook, pull the code, run a build on the server, and I just don't want to deal with the whole node on the server thing. It's a pain in the butt enough to do it on my own machine, never mind something I have to SSH into.

But there are tools for any kind of workflow. So if you enjoy working with React - and we mentioned Gatsby has kind of fallen out of favor a little bit, but you can use React in Gatsby for templating, and that's totally fine. These days, you also have like, Next.js. If you like Vue, Vue has kind of a -- they have a bit of a static site compilation thing. And then I think the one I'm probably most excited for, just because I think it'll reach the most people, is the new kid on the block, [Astro](https://astro.build/), which is heavily inspired by Svelte, and works in many of the same ways, but lets you pull in components from all of your favorite JavaScript libraries. So if you have a drop-down menu component you like from React and a card component from Vue, and as Svelte project you started working on, you can mash them all together, and it's going to run and spit out plain HTML and some Vanilla JavaScript, and it's going to shed all the libraries for you.

**Kevin Ball:** \[35:54\] Oh, that's interesting. So I haven't seen Astro before. I'm looking at it now, as you mentioned it, but... So there's a lot of talk in the micro frontend world about “Oh, let this team build with this framework, and that team build with that framework", and often what you end up with is -- you know, we talked about how painful it is shipping those 30-kilobyte runtimes or whatever... Well, try shipping three of them, or five of them, or what have you, right?

**Chris Ferdinandi:** Yup.

**Kevin Ball:** If I'm understanding you correctly, Astro essentially precompiles all of that away, gets rid of the runtime, just bakes down to "What is the minimum possible needed to run this app?"

**Chris Ferdinandi:** Yup. So I'm going to totally butcher his last name, and I'm so sorry... [Jason Lengstorf](https://twitter.com/jlengstorf) from Netlify, he's over on the developer experience team... He [tweeted](https://twitter.com/jlengstorf/status/1442707241627385860) like a week or two ago that he ported a Next.js site into Astro. He used 90% of the same component code, he obviously had to make some nudges and tweaks to accommodate the build tool a little bit... But he ended up reducing the amount of client-side JavaScript that got shipped by 90%, and the page load time went down by 30%. So just really, really huge wins all around. And this is with almost entirely the same code. So using Next, but no client-side runtime on that. It's just HTML and platform-native.

**Kevin Ball:** Wow. What are the limitations? Where does it break?

**Chris Ferdinandi:** That's a great question. It's still too new I think for me to really know, or for most people to really know that yet. It's on version -- the preview version right now is 0.21. So it hasn't even hit like a 1.0 release yet, it's still very much in beta. But it's gotten a lot of attention because of all the different things that it's able to do, and it seems to have a really nice developer experience, enough of it at least that the folks over at Netlify are paying attention to it. It's got really nicely laid out docs, which is always helpful, because so many tools don't. And I feel like the tools that really take off are the ones that have good documentation.

The thing with a tool like this - and this is where I think a lot of these really fall down - is there's still the whole npm install, npm init kind of thing here, and then like the updating and maintaining, and it's really hard to get away from that... But I think it solves so many other problems that I'm really excited to see how this project evolves. I think it's still maybe too early to say where this falls apart, and where its real potential is. I think it has a lot.

**Kevin Ball:** I don't know, it looks like Astro, while it's not built all in JavaScript, it actually compiles down to Wasm, and you can run it in the browser. So maybe you don't even need to deal with all of that; you just pipe your code into a browser-based version of the compiler and go.

**Chris Ferdinandi:** Oh my God, that's wild.

**Kevin Ball:** This looks really interesting. I'm excited to dig into it. So Astro - we'll include a link to this in the show notes, but it's just at [Astro.build](https://astro.build/). Very, very interesting.

**Chris Ferdinandi:** There's a lot of innovation happening right now. I feel like it's -- to your point, like the whole complexity thing, I feel like it's just kicking the complexity can in a different direction, in some ways, but potentially the right direction, if that makes sense.

**Kevin Ball:** Yeah. Well, let's take one more break, and then let's come back and look at, just kind of play forward the next couple years where we see this going.

**Break:** \[39:22\]

**Kevin Ball:** Okay, so let's get back into this. We've talked about what the situation is, kind of where we've come, talked about this exciting new trend in precompilation, and reducing the amount of JavaScript, and especially runtimes that we're shipping to the browser... Let's play forward a few years. Where do you see this going? Where are we going to end up? Is all of this going to get baked into the browser? That takes a problem we have now, where browsers are super complex, and monopolize because nobody can afford to build them, and makes it potentially worse. So where is this going?

**Chris Ferdinandi:** I don't know. My hope is -- I don't think we'll ever fully pull this stuff into the browser. And if we do, there will always be -- in my opinion, there will always be limitations or things that like, the browser gives you a really good baseline experience, but if you want to do it with a little more oomph, you're going to want tools. A really good example there is, if you're an expert in CSS animations, you can hardcode those to do all sorts of crazy things. But it's really complicated to get some of those more nuanced animations, and a lot of people reach for CSS libraries to handle that sort of thing if they need it, because it's difficult. The tools are there, and then you just kind of build on top of them a little bit.

But I would love to see some sort of browser-based solutions for things like DOM diffing, or tools that would make state-based UI a little bit easier to handle. There's an API in the works that's still in -- I think it might still be in spec, around sanitizing HTML strings before injecting them. Right now, either libraries like React or Vue will handle that for you, or you need to install something like [DOMPurify](https://github.com/cure53/DOMPurify) into a project to do it for you, and it helps protect your client-side code from cross-site scripting attacks when working with third party.

I think having that as a baked-in API, rather than something that needs to be re-rolled in every library will actually make the web more secure, and slash a bunch of weight out of these client-side libraries. I think compilers are here to stay. I feel, generally speaking, like the stuff that is predeploy always has a longer life cycle than stuff that runs in the browser. It seems like the in-browser code seems to trend and turn over a lot more quickly, whereas kind of the behind-the-scenes stuff seems to get a little bit more deeply entrenched.

**Kevin Ball:** Well, yeah, have you ever tried to configure your own Webpack? I'm just going to take what they built for me, right? I spent so much time changing out my build system.

**Chris Ferdinandi:** I mean, I know people who still use Grunt, and like, when's the last time you've heard Grunt mentioned in the conversation? But it's just -- once you get on a workflow, the migration cost is pretty big. But I'm really excited to see where compilers and static site generators go next, because I think they marry the best parts of the old web, the lean, performant, early 2000s web, with modern stuff. I feel like there's a really—it's a spectrum, so it's not "You can do everything with this one tool." But I think they provide some of the nicest benefits, without imparting those costs on the user, and they allow you to automate in the right places.

\[44:34\] So I'm really excited about compilers... But I think looking even further out, I am really hopeful, but a little skeptical that we're going to see more and more interactivity become a native part of the web platform itself. And I think for me, perhaps the shiniest model of what this could look like is the [details and summary elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details). They are hands-down my favorite HTML elements. I love them with a passion. I don't use them often, but they are, I think, the perfect example of what this could look like.

So just for anybody who's listening who doesn't know what they are or how they work - you create a detail’s element in your HTML. Inside it, you nest a summary element, and then any other stuff you want. The summary element becomes text that's displayed on page with an arrow next to it. And when you click it, all the other stuff gets revealed; it's hidden by default, and then it shows. And if you click the summary element again, it collapses and all that stuff gets hidden. And you can set it to be open by default by adding the open attribute to it.

And what I love about this element is that if the browser doesn't support it, it's automatically progressively enhanced, the user still gets all the content, they get a baseline experience. It's completely stylable with CSS. So you want to make that summary bold, you want to add padding or margins - you can do that. You want to change the way that arrow icon looks or replace it with something different, like a spinning yoyo or a party-popper or whatever, you can do that. And it even exposes a JavaScript event you can hook into to add additional customization.

So I've built some accordion-like things using it, where I have a group of them, and if one of them gets opened, it finds all the others in that group and collapses them. It just handles so much out of the box for you. I see it as a really great model for other interactive components.

And so my really big hope is that when I come back on JS Party in 10 years and we're having this conversation, we'll be talking about some completely different problems, and we'll have all these amazing native elements for all this interactive stuff we struggle with today.

**Kevin Ball:** Yeah, absolutely. So we talked a little bit about what some of the tooling and platform progressions are... What about in terms of like, where people are serving code from? I think we've mentioned Netlify a few times in here, and they're doing some really interesting things about making it easy to take these things and push them out towards the edge.

**Chris Ferdinandi:** Yeah.

**Kevin Ball:** And Cloudflare is also pushing in that direction, and I think that's going to force AWS and some other folks to innovate in this direction. So there's this kind of meta trend of serving infrastructure, or I don't know if meta trend, but there's this other related trend of serving infrastructure, that also is facilitating these changes. What's your vision into what's happening there?

**Chris Ferdinandi:** Yeah, so I love this trend, honestly. All of these kind of processes really kind of start from this core of "Imagine if deploying a site was as easy as pushing to a Git repository." And Git isn't always the easiest thing to use; it can be a little bit easier when you layer a GUI onto it. I'm finally at a place where I feel comfortable doing it with command line. But for years, I used a GUI, and that's fine, too.

It strips away some of the friction of working with FTP, but gives you a similarly easy experience, where you write some code, you push it up, and then the platform just handles the rest for you; it will run the builds, run any tests that you have, automatically deploy it, push it to a CDN... And then where I feel like Netlify, and now Cloudflare, with Cloudflare pages, are really, really winning is when they pair it with a serverless functionality.

\[48:12\] So there's always certain things that you just as capable as some of these tools are running, like asynchronous stuff or calling API's, there are certain things for which you need like live real-time API calls, and that has historically always meant, "Even though I use these tools, I still need to set up a server somewhere and do something with it, even if it's a cloud-hosted one." And for those of you who don't know, serverless is -- there’s still a server involved.

**Kevin Ball:** It's just not yours.

**Chris Ferdinandi:** It's not yours. But beyond—I mean, you could say that about cloud hosting too, and I think where it really... The key distinction is not only is it not yours, but you don't have to think about the server at all, you don't have to think about what bandwidth do I need? How large does it need to be? What's my input/output, any of that? It just scales up or down as needed and charges you only for what you use, and that's really cool.

The way they typically work is you write a file, and you upload it to your serverless provider, and they figure out what to do with it. They give you an endpoint to call when you want to run it, and you're off to the races.

**Kevin Ball:** Yep. Oh, man. So there's a great metaphor that I've heard around servers, which is like, when you have a small number of servers, you treat them like pets, right? You know their name, you know what each one of them is, and their nuances, their differences. And then at some point, as you scale up, it starts to be more of a farm, right? You don't know what that cow’s name is, or that pig’s name is, but you've got to herd that they're managed, in some broad way. Serverless is like, “I'm going to the supermarket and I'm getting bacon”, right? I don't even care that there was an animal in the process down the way; I just—I've got my bacon.

**Chris Ferdinandi:** That's a really good analogy, though. Yeah. What I love is most vendors allow you to author in a few different languages. A lot of them even let you mix and match across files, which is cool. So Netlify has a handful have languages, including just JavaScript. Cloudflare I love, because they run on Web Workers. And so their original kind of offering was just plain old Vanilla JavaScript, you were writing a Service Worker effectively, that lived out on the edge. It lets you do really cool things, like serve a static site, and then write like a little micro API that does just that last little bit of interactive functionality you need, without having to deal with servers at all.

And where both Netlify and Cloudflare I think completely eat Amazon for lunch is in the user interface and just the general working with it, experience; it is such a clean, easy process. And AWS is just miles behind in terms of how to navigate around their UI. Not that Netlify or Cloudflare are absolutely perfect in that regard, but they are so much better from a UI/UX perspective.

**Kevin Ball:** Yeah, absolutely. I think this is really one of the very interesting directions that we're going, and I think the key unsolved problem for me is how we push data further and further out, and what data can be pushed further and further out... Because as you highlight with the tickets, there needs to be a source of truth for the tickets, and I need to know how many tickets are left right now; not five minutes ago, but right now. And that's hard to push out to the edge.

**Chris Ferdinandi:** Cloudflare has gotten weirdly good at reducing the latency to milliseconds around -- they have a serverless database offering called Cloudflare KV. I just don't understand how they've gotten the latency down, like so low. They do kind of stress the data put in and out of those is always going to be a little bit off, just initially, as they true up... Because you know, all this stuff kind of lives out on the edge, and then eventually resyncs itself. But yeah, I feel like even like cold start is just so much faster now, with a lot of these serverless platforms. I have no idea how they do this with this technology, because I'm not a backend guy.

**Kevin Ball:** \[52:01\] Oh, there was a super interesting— it was in [a recent episode](https://jsparty.fm/183)... Wwhat was it? I will go find it. But at least one of these providers would essentially compile all that is needed of V8 and the JavaScript application you built, down to Web Assembly. Essentially snapshot it. Because then they could do all of the slow parts of booting up the virtual machine and all of those pieces at compile time; then they get a Web Assembly snapshot, and they're off to the races.

Let me find that real quick... But it was -- yeah, just fascinating how many things we can do to just speed that up.

**Chris Ferdinandi:** Now, I will admit, this falls into the area of "I am so grateful that I don't have to think about that" kind of stuff for me. I appreciate these tools, because it makes standing up and deploying websites a lot easier; maybe not as easy as LiveJournal or GeoCities back in the day. But for a modern build process, it's about as close to perfect as you can get at the moment. And I really -- I'm hoping to see more and more of this kind of thing.

**Kevin Ball:** Yeah, I've found it. It was Fastly. And basically, they take down the speed of starting up a JavaScript thing from -- if you're starting up a V8 isolate, it's like minimum six milliseconds, and if they precompile it, they can get it going in 300 microseconds.

**Chris Ferdinandi:** Wow.

**Kevin Ball:** Just incredible.

**Chris Ferdinandi:** Yeah, that's pretty wild.

**Kevin Ball:** And that's for live code, that's not precompiled. That's just like—I mean, it is precompiled to Wasm, but it's like, this is running in a serverless process. It's not just statically-served HTML.

**Chris Ferdinandi:** Unbelievable.

**Kevin Ball:** The world we're going towards right now is just wild. And for all that we hate on the complexity of the tooling, having it - it's more and more baked into the tooling so that you, as a developer, you don't have to think about it. Just pick your tools and you're off to the races, and your stuff is being served from all over the world in microseconds.

**Chris Ferdinandi:** This is where for me -- kind of that distinction between like... It's not really fair to like break it down this way, but like, good complexity versus bad complexity. This, to me, is like the best type of complexity, where it's relatively painless for me as a developer, and also makes it really easy for me to provide a very great experience for my end user. I feel like a lot of the other offerings either put a lot of the complexity on the developer or on the end user, so one person is always paying for it, and this seems to make it better for both people, or both parties, and that's really awesome.

**Kevin Ball:** Awesome. Well, I think at this point we're looking at a pretty good show. Chris, anything else you want to bring up or highlight before we go?

**Chris Ferdinandi:** No, no, I think we covered a lot of ground, so I certainly wouldn't want to bore people with any more of that. I will, I guess, just say - if you enjoy these kinds of heady conversations or you just want to tell me that I'm wrong, you can find me over at gomakethings.com.

**Kevin Ball:** You're used to people telling you that you're wrong.

**Chris Ferdinandi:** I get that a lot. Yeah.

**Kevin Ball:** You put your flag out, which I appreciate, right? It's hard to take a controversial stance, and you have not shied away from that. So I appreciate that.

**Chris Ferdinandi:** No worries at all.

**Kevin Ball:** Alright. Well, thank you, Chris, for joining. Thank you to all of you listeners following along. This is KBall, signing out.
