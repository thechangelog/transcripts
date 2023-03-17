**Nick Nisi:** Ahoy-hoy. Welcome to another exciting edition of JS Party. Today with me -- I'm Nick nisi, by the way, and today with me is Chris Hiller, aka b0neskull. How's it going?

**Christopher Hiller:** How's it going, Nick?

**Nick Nisi:** I'm excited. I'm excited that you're here, I'm excited that our guest is here. And that guest is Zach Leatherman. Zach, how's it going?

**Zach Leatherman:** Hey! Good. How are you all?

**Nick Nisi:** Couldn't be more excited. It's a beautiful March morning, or afternoon, I guess, depending on where you're at... And the sun is out, it's a beautiful day, and it's almost exactly a year since we've had you on the show. So welcome back.

**Zach Leatherman:** It's party time.

**Nick Nisi:** Yeah! A party every day. Last time you were here, I think we had you on to talk about going full time on Eleventy... And so that means that you've been at it for probably just over a year now. How has that experience been?

**Zach Leatherman:** It's still amazing. It's still awesome. I'm still like super-pumped to go to work every day... And yeah, I think it's been awesome for Eleventy the project, and I'm just really excited about what's coming next for Eleventy 2.

**Christopher Hiller:** Yeah, speaking about Eleventy 2, I was pleased to hear that it was re-architected and rewritten from the ground-up to use GraphQL and React. \[laughter\] Can you talk about that?

**Zach Leatherman:** Oh, that's a very interesting question. I don't know where you heard that rumor... It was in fact not re-architected from the ground-up, and it does not have any React compatibility... Although you can technically use JSX with it and TypeScript with it in version two. So it's a little bit nicer experience there.

**Nick Nisi:** Let's state, for the record, that Zach was the first one to bring up TypeScript. Not me. I guess that means it's fair game now...

**Zach Leatherman:** And may it be the last time we talk about it. Is this TS Party or JS Party, I'm sorry...? Which one?

**Christopher Hiller:** Whenever Nick's on it, it's TS Party.

**Nick Nisi:** Yeah. Yeah. So have an Eleventy.ts file now - is that the new big thing?

**Zach Leatherman:** Yeah, you can do that with esbuild, yeah. If you search for it on the docs, there's an example of how to get it going.

**Nick Nisi:** I was 100% kidding, and now you just got really excited, because I did not actually realize that.

**Zach Leatherman:** Yeah, we had a contribution come in that enabled that using esbuild, so...

**Nick Nisi:** Nice.

**Zach Leatherman:** Yeah, I think it's really great. I don't use it personally, but I think it's really great. \[laughter\]

**Nick Nisi:** So why don't you tell us a little bit about what you've been up to the last year?

**Zach Leatherman:** Yeah, just a lot of stuff... So we have basically been working on the Eleventy 2.0 release for almost the entire year, and also, I think the other big flagship thing that we did was release WebC, which is kind of like a server-rendered single-file component format for Web Components, using a lot of the same conventions that are built into Web Components, and an HTML parser to do that... So sticking as close to web standards as possible, but really getting some good server-rendered markup out of it. Really trying to handle some of the biggest complaints that you see when you're talking about web components, at least from a framework author's perspective.

**Nick Nisi:** Yeah, that is kind of one of the things that has always been difficult with me around web components, is just like how to actually like slot it in and use it. Because full disclosure, the only time I've really fully used web components was the version zero spec, which is not anything like it is now... And much worse. Or at least not -- it wasn't terrible, but it's much better now. But it's still always like -- you have to use the components, but you also have to define the components somewhere, and kind of put all of that together... And I'm pretty excited about WebC being a way to kind of flush all of that out. So that's really cool.

I want to dig into WebC a little bit more in full, but besides that, what are some other big changes that came to Eleventy 2?

**Zach Leatherman:** Yeah, there is just a ton of stuff. It's probably hard to go through the entire release notes. But with our 2.0 release one of the first things we did was strip out the Browsersync dependency. Now we have our own dev server built in. And that really manifested itself as a huge reduction in our Node dependencies. I think we went from like 120-megabyte Node modules folder down to like 30 megabytes... So the install times are much faster, the project is much lighter... And yeah, I think it's really great all around.

I think the other big flagship things that really went into it are investments in our plugin ecosystem. So we have a bunch of like official plugins that are bundled with Eleventy core. I think maybe the coolest one, or the one that I'm most excited about is our edge rendering plugin, that really allows you to do Eleventy templates on the edge. So it unlocks a whole ton of different, no-client JavaScript use cases that weren't possible before. So customized content for a single user, form handling, cookies, all that kind of server-side stuff that I think really, in many ways, has been taken over by other templating languages, and wasn't really as available in JavaScript as much as we would like. So yeah, I'm kind of an old school fan of PHP, and I think this really unlocks a lot of things that I really love to do in PHP, in a really light way.

**Christopher Hiller:** \[00:06:29.22\] Question about the -- so why did you swap out Browsersync? Just curious.

**Zach Leatherman:** Yeah, so the original issue that we ran into with Browsersync was we started to get a lot of Npm audit and security vulnerability audits coming back from the tool... And those were handled on a somewhat timely basis, especially considering if the project is like - I don't know exactly how it's funded or maintained, but I think fixes came out pretty good for it. It wasn't terrible. But we did want something lighter, and something that was under the purview of Eleventy, something that we could change and update, and have full control over what the experience was. And some cool features came out of it as well. Now we have like a DOM diffing live reload feature in the dev server... So you don't necessarily have to do full-page reloads for HTML changes now, which is kind of cool.

**Christopher Hiller:** So basically, you had to implement hot reloading from scratch, yeah?

**Zach Leatherman:** Yeah, that's true.

**Christopher Hiller:** How was that experience?

**Zach Leatherman:** It actually wasn't too bad. It was much lighter than I would have expected. A lot of the utilities for that, the WebSocket stuff is built into Node. there's a lot of stuff you get for free from the Node ecosystem. Not even necessarily like a third-party package that you would install. It's first-party Node things. So we have Live Reload implemented with WebSockets, and - yeah, it works great.

**Nick Nisi:** Kind of going back to the edge plugin, I'm just curious - can you give a use case of where you might use this? I'm trying to understand what it is.

**Zach Leatherman:** Yeah, it's kind of the ability to run a templating language on a request, and it's a little bit -- it kind of feels like a serverless request, but it's a little bit lighter weight thing. And we architected the plugin a little bit differently. You can kind of think of it as a separate template that runs in an edge function. So anything that you can do in an edge function, you can do on an Eleventy edge template. So you can read values of cookies, server-side cookies, and set and read values of cookies, you can find the user's geolocation, you can have access to post requests, so you can actually handle form submissions... There's just a ton of stuff that you can do server side... And that's - yeah, kind of neat.

**Nick Nisi:** Does it have access to things like other pieces that you would get normally through Eleventy? I'm thinking like collections and things like that...

**Zach Leatherman:** No. the Eleventy edge - well, you can link those things up; you can expose the data from your build into the edge function. That is a definite possibility. But it's more like you're building a template that can run on the edge. So there's like a certain runtime limit that's built into the platform. I think it's like a 50-millisecond execution time that's built into edge functions. So they need to be very, very lightweight. And because of that limitation, and because of the sort of scoped-down version of these templates, they're very speedy and very fast.

\[00:09:44.00\] So normally, with like an AWS Lambda, you're going to see a slow startup time. And I think with a lot of those -- what a lot of providers have tried to do is put a caching layer in front of that. So Netlify has like an on-demand builder, which after the first request comes in, it will just cache that URL for you, so any repeats to that one should just be served as a static file... But an edge function runs every time, so it needs to be much more lightweight... And most edge functions will finish running before that cold start of the serverless function is even stopped. So yeah, edge functions are quite a bit speedier.

**Christopher Hiller:** So I've never used edge functions stuff... But I know at Eleventy what you do is you run Eleventy and it reads your stuff, and it poops out some files... So then what do you do with those files if you're trying to deploy stuff to the edge? what's the development workflow look like? How do you deploy it? Do you run Eleventy on some cloud machine, and then it deploys your code to the -- how does that work?

**Zach Leatherman:** Yeah, so Netlify actually works with a thing called Deno. So they run Deno in the cloud. So Eleventy is actually processing your template on request, and the Eleventy build generates that template to run in the edge function. So all these pieces that are kind of working together, but the authoring experience is pretty nice, because the only thing you have to do on an Eleventy build specifically is that you just use a shortcode to demarcate what you want to run on the edge. So you just use your normal Eleventy build template, and you just use an edge shortcode inside of it to sort of say "I want this block of code in my HTML template, or in my-" whatever templating language you want to use. "I want this piece of the page to be dynamic on the edge." So in that way, you can combine, build edge templates together, in I think a very unique way that a lot of other frameworks aren't doing.

**Christopher Hiller:** And so what you can do is, I assume, then run your Eleventy build on Netlify as like a static site built. And then part of that will end up getting deployed to whatever functions thing they have, right?

**Zach Leatherman:** Yeah, yeah. Netlify handles all that for you. So really, the only thing you need to do is add the edge plugin, the Eleventy edge plugin, and the rest should be handled for you. Yeah, it's really pretty slick. I like it. But I do want to say, I feel like the ecosystem in a way is like fighting this tension of like build time versus request time thing; that has probably existed in the JavaScript ecosystem for a very long time. And some frameworks are going all-in on request time page rendering. I think Remix is one that does that, and Fresh, I think, is another one that does that. But Eleventy is, at its core, still a static site generator. We're build-first. We want to use the build to optimize your pages, whether those end up in an edge function or not. And yeah, Eleventy is gonna continue to be a static site builder as its core functionality. We're just layering these extra things on top. Because really, a static build - I really feel this to my core - gives you the most portability if you need to change hosts. And I feel like that is a valuable thing, even though I work for Netlify. I feel like it is a very valuable thing to have a portable site that you can put on a different provider.

And yeah, Netlify has been very supportive of that, too. We added a deployment page to the Eleventy docs, and we have a ton of different deployment providers on there. And I was encouraged to do that by folks at Netlify, so... Yeah, very supportive of that methodology.

**Nick Nisi:** Yeah, that's great. Another thing that I noticed while perusing the Eleventy YouTube channel - which you should check out; we'll have it in the show notes - was support for Vite... And I'm just curious what that means in terms of Eleventy.

**Zach Leatherman:** \[00:14:06.18\] Yeah, the Eleventy core - and I think I've talked about this a bunch before... We don't really want to tightly couple the Eleventy project to any specific bundler. And that's just because bundlers come and go, and I want Eleventy to exist on a very long timeframe. And personally, I really believe that Eleventy will probably outlast Vite, and I will work very hard to make sure that that is true. But I love Vite. I think it's awesome. I just don't want to couple the Eleventy project to a bundler in a tight coupling kind of way.

So we did actually ship a Vite plugin for Eleventy last year, and folks have been using that to use Vite with Eleventy. We run Vite as a middleware in our dev server, so you can get some of the great benefits side of the Vite bundler and some of the great benefits from using Eleventy at the same time. So yeah, I think the two things can coexist in a nice way.

**Nick Nisi:** Yeah. Are those things like access to Vite's plugin ecosystem, like things like that? I guess my usage of Eleventy always results in like zero client JS... Which is a good thing, but I guess I'm just trying to understand how that -- I'm trying to understand from my perspective what that buys me, that just the regular Eleventy build doesn't.

**Zach Leatherman:** a lot of people love Vite's asset bundling, so the stuff that's built in to sort of bundle your JavaScript and CSS into per-route assets. that's a nice feature, and that's something that you can also do with Eleventy as well. So it's really just about expanding the Eleventy ecosystem to include compatibility with more things. So if you love Vite, and you haven't been exposed to Eleventy, you'll probably want to use both of those things together... Until I win you over and try to reduce your dependencies down to zero.

**Nick Nisi:** \[laughs

**Christopher Hiller:** Yeah, so Mocha has been a user of Eleventy for a long time now... And are our -- I say "our". I'm not even working on it anymore. But I implemented it, so it just -- there's I don't know, like 20 lines of JavaScript, right? And there's hardly anything to be done. That's what I love about Eleventy - there's no extra fussing around with tree-shaking, and all this extra bundling, and you know... I don't even know if we minify anything. We just ship a little bit of code -- and we compress images, or something like that, but that's about it. And that's what I love about Eleventy. It's just out of the box, it's just dead simple, and that's really all you need for so many sites. But it seems like with the plugin ecosystem, you can use it to scale up from there.

**Zach Leatherman:** Yeah, and it can scale pretty far. I think maybe the thing the JavaScript ecosystem at large maybe bought into too hard was that a lot of folks just need HTML and CSS to build their sites. And anything on top of that, it's just an extra layer of complexity, and unnecessary dependencies that really eat into your long-term maintenance of a project.

We'd just released the 2.0 release, and someone had posted on Mastodon how they were going to upgrade to 2.0, and it was actually going to -- they picked up a project that was a couple years old, and it didn't require them to make any changes. So I think that's kind of maybe a unique thing to the JavaScript ecosystem, or a tool that exists in the JavaScript ecosystem, is that when you have such a lightweight project, with like a relentless focus on reducing third-party dependencies, that really does allow you to maintain things long-term, in a way that I think is enticing for a lot of people that don't want to necessarily do a ton of maintenance to bring an old project back up to speed.

**Nick Nisi:** As someone who is trying to go from version 4.0 of a project to version 5.0, or five dot whatever, and I'm looking at it and I'm "This is probably like six months at work", I really appreciate that. I'm not gonna call out the project, because I don't want to shame them... But yeah, it's monumental in its complexity.

**Break:** \[00:18:43.08\]

**Christopher Hiller:** So Zach, with Eleventy 2, what broke? What was the major release there?

**Christopher Hiller:** Yeah, I think the biggest thing was, as I mentioned, that default dev server experience. So we did switch the default dev server from Browsersync to our own internal dev server, and I think that was a big enough change in itself to merit a full version release. But there were a few other breaking changes that went into it, and we do have an upgrade helper plugin that analyzes your project and sort of reports what changes you need to make inside of it... But it should be fairly straightforward for folks to upgrade from 1.0 to 2.0, and I think that that has definitely manifested itself in the feedback that I've seen.

**Christopher Hiller:** That's very kind of you, to provide a plugin that does the migration... Or rather, it just tells you how to do the migration.

**Zach Leatherman:** I mean, it's very selfish of me, because it saves me helping everyone individually, so...

**Nick Nisi:** That is a trend though that I've seen with a lot of projects; they're like "These are the things that are going to break." It's almost like a -- I'm thinking of Homebrews Brew Doctor, that kind of shows you "These things are broken." And then some play some projects also ship code mods, that are like "For this very specific thing, run this, and we'll just go fix it for you." Like changing imports, and...

**Zach Leatherman:** Yeah, that's nice.

**Nick Nisi:** Yeah, super-cool.

**Zach Leatherman:** Yeah, that's awesome.

**Christopher Hiller:** I approve.

**Nick Nisi:** Did you want to talk anything else on Eleventy 2, or...?

**Christopher Hiller:** No, let's talk about WebC.

**Nick Nisi:** Okay. But before we do that, I just want to say... This project - really cool. I picked it up for my blog, because it's a very popular, a very demanding blog, and Eleventy was up to the challenge, so I appreciate that. But it's because it ships no JS bundle at all. There's no Jas at all. It just ships everything, and it's super-easy to put together. I love all of that.

Another cool project in this space that also hit 2.0 recently is Astro. And we just had Fred on a couple episodes ago to talk about Astro 2 and where they're going with that, and he just dished on Eleventy, constantly. So this is your turn to kind of retaliate...

**Zach Leatherman:** \[laughs\] What is the definition of "dished"?

**Nick Nisi:** Oh, you would not believe the things he -- nah, I'm kidding. He's great. I think Eleventy did come up as like a project with a very similar viewpoint on how to do things... But obviously, he loves Eleventy. I assume that the feeling is mutual here. So I don't know, I just wanted to give you the opportunity to compare the two, because they're both in the same realm, kind of solving very similar problems, from slightly different angles, but also very, very similar angles, too.

**Zach Leatherman:** Yeah, I think there is a lot of overlap between Eleventy and Astro. And I think Astro is a great project. I really -- in my opinion, I really love to see anyone that sort of is helping out in the HTML space, so the HTML Super-Friends, as it were... Because we really -- we need allies if we're going to improve the web in this way. It can't just be one framework or one ecosystem that does it. So the more, the merrier. So if anyone else wants to make an HTML-first framework, I encourage you, because we really need all the friends we can get, as we build this army of people that are sort of going away from the SPA-first, JavaScript-first, client-side JavaScript-first mindset... So yeah, the more, the merrier, in my opinion.

**Nick Nisi:** \[00:23:57.15\] I saw -- I can't remember where I saw it, but it was some graph that showed Eleventy, Astro, Next, Remix, all of these, and it showed the amount of minimal JS runtimes.

**Zach Leatherman:** It was probably my blog...

**Nick Nisi:** It probably was... And Eleventy and Astro were both at zero. And then all of the rest had at least some client-side JavaScript that they had to ship by default. So that's why I wanted to ask, because you're very similar in that. Another piece - and I've been playing around with Astro a lot, too... And when I approached Astro for the first time, kind of going in... I didn't really start until after 2.0, to be honest. But when I did, I kind of assumed "Oh, this is going to be kind of like Eleventy, but I'm going to be able to use the comfort and safety of the React ecosystem that I have been stuck in for years." And as I did it, I actually have written zero React with it. It's all been Astro components. And I thought that that was really cool, because they're these single-file components that let you put kind of everything together... And I was like "Oh, this is so cool." And I'll just be completely honest with you, my blog has been using Liquid, I think -- or no, Nunjucks, for Eleventy. And the project just always feels like it's -- you know, when I go to the documentation for how to do things with Nunjucks, I'm just always like "This doesn't look like it's been touched in 15 years."

**Zach Leatherman:** Yeah, it hasn't.

**Nick Nisi:** Yeah. \[laughs\] And that never made me feel good. And I'm like "Oh, this is really cool. I wish Eleventy had something like that." And then I was like "Wait a minute, didn't Zach just come out with something that is kind of similar to this?" And I think that's what WevC is, right?

**Zach Leatherman:** Yeah. In many ways, WebC is a new template syntax, with the focus on Web Components and HTML, and web standard conventions. So yeah, I think that that is very true. I think that WebC will be seen as a successor to some of these template syntaxes that aren't maintained very well anymore, as the maintainers sort of move on... But I will say that the Liquid template syntax is still very well maintained, and we sponsor the author, I think, with some of our Eleventy dollars every month to help maintain that.

**Nick Nisi:** Nice.

**Zach Leatherman:** But yeah, Liquid is very well maintained. Nunjucks not so much.

**Christopher Hiller:** So even though it's Web Componenty, if you start using this, you still don't have to ship JavaScript, right?

**Zach Leatherman:** Yeah, correct. There's no client-side JavaScript built into it. So you kind of get component authoring experience, without any client-side JavaScript requirement at all. And I do have a couple of really cool demos on the Eleventy documentation about how to add interactive components with client-side JavaScript interactivity built in, and we have some nice, kind of bundly features, bundler-esque features to sort of minimize the amount of JavaScript that gets sent to the client... And there's going to be a lot more coming in there soon, too. I've been working on, all week, improvements to sort of WebC bundling, and asset bundling... And yeah, I'm really excited about the stuff that's coming next.

**Nick Nisi:** Yeah. And you mentioned having some cool demos. I was just watching a couple of them earlier. You really start off with a WebC file that is like just the string of text that you want to show; not even like any HTML markup. It's just that, and it just works, which is really, really cool... And then you kind of incrementally --

**Zach Leatherman:** Yeah, I think that's very, maybe, surprising for a lot of folks that come from a React background, where React had a lot of limitations of the requirements around what can go into a React component, they were very strict for a while. And yeah, Eleventy is just freeform content; or WebC, excuse me, is just freeform content, so you can put anything inside of a component.

**Nick Nisi:** \[00:28:00.20\] Yeah. And kind of going on my comparison between that and Astro templates - you progressively-enhanced that text to then include some markup, and then include some styles in a style tag. And that style tag just kind of gets thrown into the head of the page that the component is used on, but you could also scope it, which was really cool... So you could just have extremely scoped CSS for that... And same thing with like script tags; those just get kind of bubbled up. Do you want to talk about how you do that, how you progressively-enhanced it into being not so static, and maybe adding a little bit of client-side JavaScript where it's necessary?

**Zach Leatherman:** Yeah, I think it all comes down to a really core understanding of what progressive enhancement is, and the benefits you can get out of progressive enhancement. I feel like the things that I've used throughout the years have really had a misunderstanding of different tools and frameworks that I've seen as a comparison; I've really had a fundamental misunderstanding of what progressive enhancement is. And I think that's kind of fair, because progressive enhancement is kind of a complicated thing to teach someone, especially when you're coming into web development from -- when your baseline, the thing that you learned on was a bundler, and maybe the things that you've learned from the beginning sort of violated those progressive enhancement core strategies. So I think that when it comes to WebC, the sort of really neat thing is that you have full control over what you want the progressive enhancement of a component to be.

I have a demo on the WebC docs that is -- I think it's like six or seven different progressive enhancement strategies for an image comparison component. So it kind of shows you -- it's kind of that classic, like "Here's an image", there's two different images, and you can slide back and forth between them to show the first image or the second image, to sort of compare or before and afters of an image... And so I built that in like six or seven different ways, to show how much control you have over the progressive enhancement of individual components.

And if you're creating a component that can be reused, you can even have multiple different progressive enhancement strategies built into the component itself, and the app developer can theoretically choose between one or more of those. And I love that level of control, because I really think that it does depend on individual use cases. And if you are too prescriptive about the progressive enhancement strategy of a component, it isn't going to have as much long-term benefit, and you won't be able to use it for maybe the next project that you want to build, if it isn't customizable enough.

So I don't know, that's sort of a long-winded way to say - yeah, Eleventy and WebC I think really both have that core ethos of "I really want folks to have as much control over the authoring experience as they can", and I think in some respects, that can be frustrating too, because more control means that you need to sort of piece things together in a more manual way sometimes. And I'm always working on striking the correct balance there between having to author too much and over-automating things. So I think there's definitely -- in competing frameworks, I've definitely seen over-automation or over-abstracting of things, and it makes it just hard to use it.

**Nick Nisi:** One thing that I'm curious about with this... So these components - it's right in the name, WebC. I'm immediately drawn to Web Components. But you also mentioned that this could be kind of a successor to some of the other templating libraries that Eleventy currently supports... Does that mean that you could use this at like a page level, and have like entire pages built out of WebC?

**Zach Leatherman:** Yeah, for sure.

**Nick Nisi:** Nice.

**Zach Leatherman:** \[00:32:02.27\] Yeah, you can do full WebC pages, you can do WebC components... We actually have extensions to let you do WebC inside of other template languages as well. We have some shortcuts for that. You can use the Render plugin that is new in 2.0 to render just a small block of WebC inside of your existing project. And yeah, I think that's useful.

**Christopher Hiller:** Yeah. But why would you want to do that? Isn't it nice to keep your docs in Markdown?

**Nick Nisi:** Yeah. Based on what I had seen of WebC and setting that up -- and I have a follow-up question that kind of leads into this, I guess... For me, that seems like a more appealing setup than what I'm currently using, which is Nunjucks. In hindsight, I probably should have chosen Liquid. But I didn't, and WebC seems like a nicer approach that kind of lets me bundle things a little bit more... But one thing I wanted to ask about was -- so I saw it has the standard markup that you can put in a script tag, and CSS handles those to move them, and whatnot... But does it have some kind of like special tagging, or templating for doing some other things that I would do with those other templating libraries? I'm thinking specifically like looping through a collection, for example - can it do things like that?

**Zach Leatherman:** Yeah, we have a JavaScript render function tag, so you can just write arbitrary JavaScript inside of your HTML, and that will render on the server... And so yeah, we have a ton of different extensions built into it, and with the Eleventy WebC plug in you can use Liquid inside of WebC. So the possibilities are kind of endless... But yeah, I would focus on -- if you're using WebC, I would focus on maybe trying to move away from those existing template syntaxes if you can, and just go to raw JavaScript. But some folks like it, so... I don't know, I'm not going to tell them what to do.

**Nick Nisi:** Sure. I think that's one of the perks of Eleventy too, is it's so versatile in what it supports, so it really should appeal to everyone, theoretically.

**Zach Leatherman:** That's what I'm trying to do...

**Break:** \[00:34:16.03\]

**Nick Nisi:** Now, where do you see WebC going from here? Well, actually, let me back up a little bit, because one thing that we didn't talk about was like the actual -- like, everything that we've kind of talked about right now has just been kind of raw HTML, CSS, and possibly JS. But if you want it to actually be a web component, then you do have to introduce that client-side JS, right? Or am I wrong about that?

**Zach Leatherman:** Yeah. So the Web Components specifications, which is kind of like a family of different things, of a bunch of different specs - it has a custom elements registry that you can do, and so that will basically tie an existing HTML element to a JavaScript class. And so anytime that you add a component with that tag name to your HTML, it will be registered through this client-side JavaScript class that you can use. And it's really kind of neat, because then you don't have to -- it works with completely dynamic pages. So even if you add elements later in the page cycle, maybe you fetch those with the fetch JavaScript on the client, it will automatically initialize those components for you if they're already registered.

\[00:36:37.28\] So yeah, a lot of that stuff was given to you for free by the platform. And that's things that you could not do in a competing framework, because you would have to tie into those lower-level browser things to be able to get that functionality for free. So I'm trying to keep as close to the platform as possible, just because I don't want to maintain things that will change later. And the JavaScript ecosystem has so much churn... I feel like it's just churning and churning and churning, and that's just a byproduct of how big it is. There's just a ton of people working in this space. And so yeah, I really try and stay as close to the platform, which has historically moved slower; it feels like it's going much faster now than it has in the past, especially in CSS land. Man, I'm just having trouble keeping up with all the new CSS things that are coming out.

**Nick Nisi:** Same. But I think that that's a good strategy for outlasting Vite, like you were saying; just for longevity, sticking as close as possible to the platform really probably will pan out as a huge benefit in the end. So yeah, I totally understand that.

Kind of going back to like registering those web components - would the main reason that you would want to do that, as opposed to just keeping it kind of vanilla HTML and CSS... Would that be for the lifecycle methods of it? Or is there another reason that you might want to do that?

**Zach Leatherman:** Yeah, so if you go to the very first demo that I built with WebC, it does use a custom element for just that quintessential counter demo that everyone builds in JavaScript frameworks... "Oh, look at this, it has a button; it can increment a number", and that is the thing that everyone loves to see when it comes to new JavaScript frameworks.

So yeah, that really allows you to tie in the interactivity to the button, for a very easy and cheap way to do that. So you kind of you can scope your event listeners to those individual elements inside of the custom element tag, and it really sets you off to the races in a pretty nice way. I really liked the authoring experience of it.

**Nick Nisi:** And then one other question I had about that was -- I think that button, that counter-example is kind of what I'm thinking of here... I that example you initialized several counters on the page, and they all kind of had that. Is Eleventy or the WebC compiler doing something special to ensure that only the JavaScript for one of those is getting added to the page at a time?

**Zach Leatherman:** Yeah, we do duplicate the client-side JavaScript and the client-side CSS that comes out of the individual components. So I think you'll see similar things in like the Svelte compiler. I really love the Svelte compiler and how that works. They really deduplicate the CSS that comes out of that. And so the same niceties are built into the WebC stuff as well. So even if you have like seven or eight or nine or ten instances of that counter component, you'll only see one instance of the client-side JavaScript show up.

\[00:39:51.26\] And just as a sneak preview, we do have this cool asset bucketing feature that's built into WebC... So I think what a lot of bundlers do is they don't have maybe deep insight into how the page is marked up, and so with the WebC asset bucketing feature you can actually say "I have this component, I want it to load in a different stage of the web page's lifecycle, so I can defer this component's assets to a later time, and I get full control over where that bucket gets loaded, and how that script in CSS gets loaded, because I get to declare that on my page." And yeah, in the next version of WebC we're gonna have some really cool ways to have those buckets be loaded in a very optimized way. Sometimes you want to hoist those to the top-level buckets or bundles, and we're going to have a lot of really cool features come out that's going to optimize how those assets are loaded, even when they may not live in the same bucket in WebC land. I know that was very confusing, but hopefully I'll be able to clean it up, clean the marketing of the feature up when I finish it up. \[laughs\]

**Nick Nisi:** So that's some really cool stuff that Eleventy 2 can do, and with WebC it really seems like a really great combination for this next generation of Eleventy and static site generators, which I'm really excited about. But I'm curious, what do you think comes next?

**Zach Leatherman:** I feel like our big flagship feature that we're going to work on for 3.0, which I'd like to see canaries out pretty shortly for that, is that we want to do ECMAScript modules. So that's maybe the biggest requested feature for folks in Eleventy land right now, is that we're still doing common JS templates. So I do want a first-party ESM story inside of Eleventy, and the ability to use ECMAScript modules for your configuration file. I feel like it's a big one, and that will unlock asynchronous configuration files, too.

So that should give us a lot of wider compatibility with what configuration files can do... Because I think a lot of times folks end up using event emitter stuff inside of early Eleventy events lifecycle to sort of work around the asynchronous limitations of config files right now... And yeah, I'd like to clean that up quite a bit, and I think ESM will do that for us. So yeah, I'm super-excited about that. I think it's going to be a great addition to Eleventy, for sure. And you can use Eleventy in ESM projects now, but your configuration file does need to be CJS or common JS right now. So yeah, this is really just gonna unlock first-party ESM on Eleventy config files.

**Nick Nisi:** Nice.

**Christopher Hiller:** Just don't take the CJS away, please...

**Zach Leatherman:** No, I definitely won't. I don't think I would be able to. \[laughs\]

**Nick Nisi:** Not a fan?

**Christopher Hiller:** Not for Node.

**Zach Leatherman:** Yeah, I do kind of wish that Node's VM module specifically worked better with ESM... I don't feel like it has a first-party -- it doesn't work as well as the Common JS version does. I don't know why it's still in experimental mode, to be honest, because I think it's been out for years and years and years. But yeah, if any Node folks are listening, let's get that VM package up to date.

**Christopher Hiller:** Yeah. Somebody just has to care enough to do it.

**Zach Leatherman:** Yeah. So maybe it's me. Is that what you're saying? \[laughs\]

**Christopher Hiller:** Maybe it is. Yes... That's kind of how Node works, so...

**Zach Leatherman:** Open source.

**Christopher Hiller:** Mm-hm...

**Nick Nisi:** Yeah, I'm trying to participate in this conversation, but I heard TypeScript support for all of that, and so I'm like "Why do you need anything else?" Just compile it the way you want.

**Zach Leatherman:** Compilers are another dependency that hampers your long-term maintenance of a project...

**Nick Nisi:** True...

**Zach Leatherman:** I'll just keep repeating that forever... I feel like I would use TypeScript features if it was built into the language.

**Nick Nisi:** Like Deno.

**Zach Leatherman:** Is it though...? It's not built into the language... \[laughter\] It's built into the runtime.

**Nick Nisi:** \[00:44:09.28\] Yeah, that's true.

**Zach Leatherman:** Anyway.

**Nick Nisi:** That is a good hair to split, I suppose. \[laughs\] Anything else exciting coming out in 3.0 or beyond? Any kind of - -I don't know... And also, I want to ask about WebC. Where's WebC going?

**Zach Leatherman:** Yeah, I really think that the coolest thing that's gonna come out of WebC right now is going to be like a tighter integration with our is-land partial hydration component, web component... And so yeah, you'll see a lot of really cool sort of automated bundling features in that. And I feel like that is like really diving WebC into some application use cases, even though I don't really buy into the sites vs. application dichotomy... But islands kind of gets you more in the direction, if you like have that continuum of sites and apps - the islands architecture really does satisfy a lot more of those requirements.

**Christopher Hiller:** You're gonna have to define islands for some of us, unfortunately...

**Zach Leatherman:** Islands is just a fancy way to say lazy-loading. And I know that's a very spicy take, but I'm sticking to it. It's a spicy lazy-loader, that's all it is.

**Christopher Hiller:** Hm...

**Zach Leatherman:** We've rebranded the term. Yeah, I know that there's been a lot of discussion in the last couple of weeks about the overlap between islands and progressive enhancement... And I really do think that islands is kind of a separate consideration from progressive enhancement. Yeah, it's more of a lazy-loading thing than it is a progressive enhancement thing. And there is overlap between the two, obviously, but you can have something that is an island that has terrible progressive enhancement. I think in Astro you can do like a client-only component, I think, if I'm correct... And that has very bad progressive enhancement, right? Because if you don't have JavaScript, it's not going to even show the component. And that might be for something on your page that is not like the core use case of the page, that might be perfectly acceptable. But you do need control over as it goes back to the original - the thing I was saying earlier, you need full control over the progressive enhancement of each individual component on the page, and how it loads really ties into that. So I hope that answered your question...

**Nick Nisi:** No, I think that's a good summary of it... And there's a page on like Astro's islands that we can put in the show notes, that I think comes from a post by Jason Miller, who created Preact, kind of talking about that terminology. And I know that - you mentioned Fresh earlier. Fresh, I think, is built all around this concept of islands. So another cool framework to look into there.

Now, you were talking about progressive enhancement, and I don't mean this to be a trolling question, and I'm not trying to get a spicy answer, or anything... I'm just genuinely curious your thoughts on the idea that JavaScript would be turned off. Is that a legitimate thing, do you think?

**Zach Leatherman:** I mean, that's not really how I think about it. That's not like a core use case that is like in my brain, is something that I want to solve for the sites that I build... I more think of it as at each stage of a page's load, how does that look while it's loading? I think that there's like a classic Jake Archibald tweet which talks about - it's not really about having Javascript disabled, it's about what the page looks like before JavaScript has loaded or initialized.

**Nick Nisi:** Yeah.

**Zach Leatherman:** And a lot of folks work around that by rendering on the client, which is terrible... But yeah, I guess that's a different problem and a different story.

**Nick Nisi:** \[00:47:59.26\] No, totally. And I didn't mean -- like I said, I wasn't trying to get like a drama-filled answer out of that or anything, but I kind of started thinking about that as I was watching that demo of you with the counters with WebC. And you had like a Chrome plugin that you were toggling JavaScript on and off, and kind of showing that... And I think you really did a good job of highlighting "When I turned JavaScript off, this is like the intermediary step; the JavaScript of it hasn't loaded and hydrated yet, so this is what it's going to look like when it's in that state", versus "I'm pushing for this use case where somebody has JavaScript completely turned off." It was more like "What happens before this hydration?" The problems -- and then network latency and things like that can really exacerbate that time. So having the component not be clickable in that state was a really good thing, because it just wouldn't do anything, and it would be a confusing experience for the user. So I totally get that.

**Christopher Hiller:** The no JavaScript thing is like a use case only for Hacker News commenters, as far as I can tell...

**Nick Nisi:** Well, I think this was a good example. This was a good example of using that as a -- it's almost like a dev tool to show kind of intermediary steps where JavaScript failed for some reason, or something along those lines, to where you're not in the state that you expect.

**Zach Leatherman:** Yeah. And on the image comparison demo that I have up, I actually used an island with like a viewport max width of zero, so it would never hydrate, to show in a side by side way "Here's the Node.js version versus here's the JS version." So that's another way that I've used, in demos at least, to show the pre -- I would call it the pre-JavaScript version of how it renders, versus the post JavaScript version of how it renders.

And I think just going back to that counter demo, I think I have it set up where it will actually start with an input type number, and it toggles it to (I think) an output element when the JavaScript renders. So even if you're interacting with the component before the JavaScript has loaded or your bundle has loaded, you still get a form element that you can increment and decrement. And yeah, I think we've all sort of had that experience of being on the subway, or being on a train or something and the page doesn't load all the way. Or you're driving around in the passenger seat of a car, looking at your phone, and you go in between towers or something, and the connectivity is not solid. Yeah, so... Just trying to handle as many of those cases as possible to make the page as robust as possible, too.

**Nick Nisi:** Totally. Now, one more question that I have is, with WebC - and I haven't looked at the underlying code for it and how you're doing it all, but I assumed that's like... It is like a WebC compiler, for lack of a better word, right? Like, it's doing that, some kind of compilation.

**Zach Leatherman:** Yeah, it uses the parse5 HTML parser, which is like the standards-based parser that includes all the weird quirks that go into HTML parsing... So you get the same exact parsing experience that you would expect. And then yeah, we just basically have a serializer, our own custom serializer, that iterates over that AST that comes back from parse5, and creates an HTML representation of that.

**Nick Nisi:** Nice. Now that Eleventy has this taste for compilation through WebC, do you see compilation expanding anywhere else going forward?

**Zach Leatherman:** I don't know what you're alluding at, but no, I don't think so... Or at least I have no short-term plans for that. I am not even sure of the context of the question in a larger sense. Was there something you had in mind?

**Nick Nisi:** No, not really, I suppose... I'm just curious. Are there more use cases that you could solve for with that compilation? But it has a lot of trade-offs the other way, so I'm not sure if that's the direction you want it to go.

**Zach Leatherman:** \[00:51:59.10\] Yeah, I think the template syntax stuff and the processing of HTML in WebC is maybe as far as I'd want to go, and I think I'd farm out the rest of this stuff to other projects, if folks want to use it. So if you want to extend your own CSS processing pipeline into WebC, you can do that; you can actually override our WebC-scoped behavior with your own custom behavior if you want to write your own scoped CSS implementation. If you want to wire up Babel to do JS processing or whatever, you can do that if you want. But again, I'd come back to - do you want to add all those extra dependencies?

I think the temptation when folks work on projects is they want to work on the cutting edge, they want to work on the very newest features that come out before their sort of GA, or before they're supported in browsers on the client specifically. And you get into this weird trap where you add these dependencies to process this stuff, and maybe it's specification changes, or maybe the preprocessor went ahead of things... You saw that a lot in CSS-in-JS implementations, where they just couldn't keep up with the specifications that were coming out. I think a lot of folks have maybe some issues with Tailwind in the same way, where it almost seems like Tailwind is having trouble keeping up with the speed of features that get delivered in the CSS world. And I don't know if that's actually true, but that's like the same -- like, you add on a layer, an extra dependency to work ahead of the game, in a way, to try and get access to these cutting edge features, and it really can come back to bite you later. So I just exercise caution...

**Christopher Hiller:** He just wants to use TypeScript in WebC, okay?

**Zach Leatherman:** TypeScript in browsers! Implement Typescript in browsers!

**Christopher Hiller:** It says, WebC Type JS, and he wants that to say TS instead of JS. That's what Nick wants.

**Nick Nisi:** It's true.

**Zach Leatherman:** Nick gets commission every time he converts a project to TypeScript. \[laughter\]

**Nick Nisi:** Brought to you by Carl's Jr. Yeah, I guess I was trying to ask if Eleventy lang or something was coming down the pipeline later... But no, I think that's a great answer, and a great way to wrap up this show. Zach, before we do, where can folks find you these days?

**Zach Leatherman:** Well, they can go to the Eleventy docs, Eleventy.dev, and also zachly.com is my website. And I'm pretty active on Mastodon now, so if you want to be friends on Mastodon, find me there through my website.

**Nick Nisi:** Yeah, it's a fun place. Well, cool. Thank you so much for joining us. We will just go ahead and preschedule you for a year from now, to talk again about --

**Zach Leatherman:** Sounds good. WebC version 2.

**Nick Nisi:** WebC 2, yup. Eleventy scripts. You heard it here first... EleventyConf... And all these other things I can pre-sign you up for.

**Zach Leatherman:** Oh, no... Yup, exactly.

**Nick Nisi:** \[laughs\]Yeah, so thank you so much for joining us. Thank you, Chris, and... This party is over.

**Christopher Hiller:** Thank you, Zach, for your work on Eleventy.

**Zach Leatherman:** Oh, yeah, thank you. Thanks for using it.
