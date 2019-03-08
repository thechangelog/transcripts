**Safia Abdalla:** Hi, everyone! Happy new year! I hope your 2019 is off to a great start. It's the new year, so JS Party is back, and we are here recording a podcast episode about static site generators, which I recently learned could be abbreviated to SSGs. I've actually never heard that abbreviation before... So we've already learned something new.

Joining me today we have the one and only Kball...

**Kevin Ball:** Hey, hey...

**Safia Abdalla:** And we've got Chris joining us!

**Christopher Hiller:** Hello!

**Safia Abdalla:** I thought we'd kick off the conversation just explaining static site generators to anyone listening who might not know... And also, I'd just love to hear y'all's definitions of it, because I find sometimes with these things everybody's got a different perspective on what it means... So anyone wanna throw off their definition for static site generators?

**Christopher Hiller:** Not it...

**Kevin Ball:** Sure...

**Safia Abdalla:** \[laughs\]

**Kevin Ball:** Are you gonna throw that ball over here...? So a definition for a static site generators is something that generates a static site. \[laughter\] Well, if we step back to how websites started originally, the very first websites were just static content - some files, at the very beginning probably just HTML; then you add CSS, you add some Javascript, and you have a web server that just sends those files to a browser. It doesn't do anything fancy with a database, or anything like that.

Static site generators are a way of sort of coming back to that, but giving us more power and more flexibility. The benefits of that kind of static approach is it's very fast, you can push things up to CDNs and take advantage of getting content really close to things, it's very cacheable, there's nothing that changes between when somebody loads the page once and they load it again. The disadvantage is it's not very flexible, it's very manual, and static site generators kind of give you a midway ground where you're still able to take advantage of software to generate your pages... It doesn't have to be "I'm literally copying out the layout in every page", like really old-school HTML sites, but the end of the day you end up with static files, so you get all the benefits. You're basically pre-computing a static site, rather than writing out a static site from scratch.

**Christopher Hiller:** \[00:04:00.16\] Right. I would add to that that it's almost like a CMS... Maybe typically, with some of these at least, you're actually editing a markdown file, or something, and you only really -- once you've got your page layouts and your styles, all you have to do is edit content. Once you regenerate the site, then all your content is in a new page. It's kind of like a CMS, but a little more close to the metal, I don't know.

**Safia Abdalla:** I think the kind of relationship between SSGs and CMS - wow, that was a lot of abbreviations - is interesting just because in my mind the explosion of different static site generators kind of correlated with the period in time that I associate with the explosion of blogs, and media sites on the web... And if you look at a couple of the static site generators out there, most of them -- not most of them, but quite a few of them are developed and maintained by media sites, whether it's a newspaper, or some sort of journalist blog, or something like that... So it's kind of interesting to see how a new type of content or thing on the web kind of directly correlates with interest in that technology.

I would say that 2008-2010 period is when I think a lot of the static site generators came out. I might be wrong on that, so don't quote me.

**Kevin Ball:** Well, there was definitely a generation where the first set were coming out, and they were very content-focused and CMS-like in a lot of ways... And that's still very much a niche within static site generation; that's something that my company website -- it's a static site generated with Jekyll, which is a Ruby-based static site generator that I think we'll talk about later... And it's very much in that CMS model.

We are also seeing now with the explosion of single-page applications, and taking advantage of pushing as much stuff out to the edge and to CDNs as possible, there's a whole new generation of static site generation (SSGs) that are around more fully-featured applications, and especially taking advantage of APIs for dynamic pieces. So you'll see folks using a static site generator to create an e-commerce store, and relying on an API for the actual purchasing, but the vast majority of the content is pre-generated; the entire website is essentially pre-generated, the cart is managed in Javascript, maybe with a cookie or something like that, and then you call out to a couple services, like a Stripe, and then something else - a Snipcart or something - to manage the final payments and ordering process.

I think this model of CMS-like, blog-like, simple content static site generators was the first generation, but we're very much in the middle of a boom and a second generation of static site generation.

**Safia Abdalla:** Yeah, I think that's a great point. It reminds me of something that I wanted to mention a little bit later, but sort of where static site generators are headed and their relationship with -- it's called JAMstack, which I think is a really funky name; it stands for Javascript APIs and Markup, and it's this new way of creating web projects that we can discuss... But seeing that evolution, from just static content to more dynamic websites is really interesting.

**Kevin Ball:** \[00:08:21.06\] I feel like to me it's gone from what is CMS-able, what is just content, to what is pre-computable, in a lot of ways... Like, what can we possibly calculate upfront or prepare upfront, so that at the time the user is interacting with it - and this speaks to the reason one might go with an SSG even with a more complex site... At the time the user is interacting with it, they don't have to wait for us to do calculations or database lookups or anything like that. You might have a static site generator that actually has a database that it's talking to in the backend, but it talks to that ahead of time; it precomputes all of those things, so that by the time the user is having to load it, they're just fetching some HTML, CSS and Javascript that has been pushed up to a CDN server that is close to them. This allows phenomenally faster websites, things that are just unbelievably fast, even though they may be relatively complex.

**Christopher Hiller:** I think it's important to understand when we talk about deploying these things to the edge - basically, these sites... You're gonna run your build, and maybe you run that in some sort of continuous integration, or continuous delivery pipeline or something, but maybe you run it even locally to test it out. Once you do that, the result is just a bunch of HTML/CSS images that can be deployed to any web server; it can be deployed to Amazon S3, it can be deployed to some Apache folder somewhere... So you don't need PHP running, you don't need Node running on the backend, you don't need a Python server, or anything like that; all you need is just something that serves pages.

**Kevin Ball:** Yeah, and a lot of times that something can just be an S3 bucket, or something like that. This enables you to essentially serve a website without actually hosting anywhere. I serve my static website -- I do have a server; I have a tiny -- whatever the smallest server allowed by DigitalOcean, and I've got Nginx running there serving my content, and then in front of it I put Cloudflare, and it costs me $5/month, and when I get front-paged on Hacker News, it handles it just fine, because it's basically not having to do anything at the time folks are loading it; most of the content gets served either very fast from Nginx, or even faster from Cloudflare.

**Safia Abdalla:** Yeah. So if I could summarize a couple of the things that we discussed about some of the advantages of static site generators, one that we mentioned right off the bat was they're much faster with respect to requesting content for users. We talked a little bit about just not having to hassle with having PHP or Node or whatever on the server, and then being able to handle surges in traffic more effectively when your new blog post makes it to the frontpage of Hacker News.

As a general concept, not directly related to a specific static site generator, are there any disadvantages that come with using SSGs?

**Kevin Ball:** \[00:11:55.25\] Definitely. It gives you a lot less flexibility in terms of reacting to variations in a user. For example, anything you would want to reference a database field and do some lookup, and maybe you want to do -- actually, here's a really good example... If I wanna do filters by category for my blog, and let somebody filter based on what category I've put, maybe by tag, do things like Search, or something like that... Search is almost impossible, in some ways. I have to end up doing that on the client; something that would be extremely simple to do in a -- I shouldn't say it's almost impossible; it's much more complex, particularly in a dumb static site generator, something that doesn't have advanced Javascript built in... Because to generate dynamic results, I don't have a database query I can run on that. I essentially have to look at everything and then do any sort of filtering or searching I would do on the client... Or I have to pre-compute those category pages and put everything on it, right? Stuff that allows a user flexibility in how they're consuming your content, in terms of search, in terms of filtering, in terms of that sort of thing it's not undoable, but it certainly becomes more complex to do in a static world.

**Safia Abdalla:** Chris, are there any other disadvantages to static site generators from your experience?

**Christopher Hiller:** I wouldn't say as a whole... I only have major experience with one of them, and I can talk about my experience with that, but I can't make any generalizations about it.

**Safia Abdalla:** Kball and Chris, if I am a developer and I'm looking to start up a new web project, what kind of criteria should I think about when determininig whether or not I might wanna use a static site generator for whatever it is I'm building? What's your piece of advice for me as I'm trying to make that choice?

**Christopher Hiller:** It seems pretty simple. If you're gonna use a static site generator -- I would almost default to using that if you can get away with it... And then kind of going and seeing "Okay, well, we need to list out the requirements", and are any of these requirements going to take a static site generator off the table? Because it's really a great way to build a site. I find it -- it's like my go-to if I'm gonna make any sort of site. If I need something on the back-end, I'll know that, but I'm going to start with a static site generator, and then see if I made more power, basically.

**Kevin Ball:** The biggest thing that I would ask for a static site generator, from a developer standpoint, is how frequently is the information that's being used for the site changing, and how flexible do users need to be to be able to access it? If it is something that has little pieces of it changing all the time... Oh, and I guess the final piece is "Who needs to be changing that content?" though there are tools that you can use to enable more flexible CMS stuff with static sites.

**Safia Abdalla:** What do you mean by "Who is using that?"

**Kevin Ball:** Yeah, so if you are creating a blog that has lots of different folks writing it, and maybe those folks have different levels of permissions for how they're writing, maybe those folks have different levels of technical expertise... When you're using a static site generator, you either need to have those folks actually in the code, writing their stuff or committing things, or you need a whole other set of tooling around that... Which you can do, and there are headless CMS's, or things that you can now plug static site generators into to enable that, but that's another level of complexity.

\[00:16:26.18\] If you're looking for something that lets you have a multi-person blog where you're managing who can write what and having publish approvals and things like that - you get that out of the box with something like a WordPress, whereas with a static site generator you're gonna have to plug together a bunch of different tools. So if it's a blog that's being written or a website that's being edited by one or two technical people, a static site generator is gonna be way easier to maintain; they just commit code, they build it, they push it up, it's great. So it really depends on who is needing to use this site that you're building, in what ways, and what are their workflows. If those are workflows where, once again, you need lots of different roles, and people editing, and you have non-technical folks involved in that process at potentially even different levels -- once again, I think there are tools that let you manage that with an SSG, but those are additional tools on top; you don't get that out of the box in the way that you would with a WordPress or something similar.

**Christopher Hiller:** There isn't something like that? I mean, I guess I would assume that somebody would have a -- I mean, basically the editing interface itself could be an app or a server that would actually let somebody go in there and use a nice rich text editor, and then it would save out in whatever file format (maybe markdown) and then at some point later you can trigger the build, which would deploy, and this would be a completely separate site. I don't know, I assume there's something like that out there; it seems like it would make sense. Does anybody know of any yet, anything?

**Safia Abdalla:** I am not too familiar...

**Kevin Ball:** I think there's tools for integrating content management with things like Jekyll, and Tim mentioned in the chat that he's used Siteleaf for folks to manage the CMS... And I've used -- I don't remember what I've used, but I've been recommended something similar for enabling non-technical folks to update the content in a Jekyll site, and things like that.

I would imagine -- I know Gatsby, which is a React-based static site generator, there's now a company behind that, they've raised funding... I would imagine that one of the things that they're going to be addressing - if they haven't already; I was trying to look on their site and see they do, and I don't see it at this point, but... I would imagine that's one of the things that they're probably gonna plug in and enable as well, some of the pieces around that.

Once again, it's something that you have to think about if you're planning to do a static site generator for a set of folks who are not comfortable or whose workflow does not enable them to manually update the code.

**Safia Abdalla:** So if I could summarize - when I'm looking to start a new web project and I'm debating whether or not to use SSGs, the two main questions I could ask myself are "Who's going to be authoring content on this web project?" and then the second is "How much of the interactions that users are having with the website is going to be dynamic, versus how much of it is just serving up articles, or something like that?"

**Kevin Ball:** Yeah, that sounds about right to me.

**Safia Abdalla:** With that in mind, one thing I wanna get right into after the break is starting to talk a little bit about some of our personal experiences with SSGs, because I know we were all talking about this before, and some of us have used static site generators across different contexts, so I think it'd be cool... I'd love to hear about all y'all's experiences with that, so we're gonna dive into that right after this break. Stay tuned, and we'll be talking about our own experiences with static site generators.

**Break:** \[00:20:34.00\]

**Safia Abdalla:** Hi, everyone. We're back, we're ready to dive back into the conversation about static site generators, and we're just gonna do a little roundtable and discuss our experiences using certain static site generators in the past. I can kick it off with one that I sometimes feel guilty about calling a static site generator, although it technically is... And I can kind of talk about how we used it in two different contexts.

This particular tool is called Next.js. If you're in the React ecosystem at all, you're probably super-familiar with it. It's a tool that allows you to create websites that are rendered server-side, with the actual markup in React or JSX.

I've used this in two contexts that I think show the flexibility of this tool... And these are both in open source contexts, so if you're listening to this and you're curious about what the code for this might look like, you can check it out; I'll mention the GitHub repos.

So the first is kind of a more traditional, content-heavy static site; it's the homepage for the nteract project, which you can visit at nteract.io. This is written in Next.js. If you go visit it, it looks like your standard landing page, with your menu items, and your hero image, and all of that fun stuff... And this is powered with React, and then styled-components in the back-end for styling, and then just rendered as a static web page.

The second way that we've used Next.js is more so for the fact that it's a server-side rendered implementation of React than it is as like a static site generator, and that's for a tool called nteract/play, which you can find at play.nteract.io. And if you visit the web page, what Play is - it's like a JSFiddle, or like a Repl.it clone, where you can write code on one side of the screen and hit Run and it'll execute and show the output on the other side of the screen... And you can use Python and R and a couple of other programming languages on there.

\[00:24:14.02\] One of the things that I've really enjoyed about Next is the developer experience if you're not looking to do too much outside of the scope of how they intended the tool to be used, which is a fair expectation... So to get started with it, you basically install Next and React and you set up some build scripts, and your Npm package JSON.

You can run a local dev server that has Hot Module Reloading, and a couple of other neat development features. Then when you're ready you can either export the page to static HTML and serve that, or you can just run a production build of it and I think it runs a Node server in the production build.

So yeah, developer experience is really great; it's really easy to get started with, they've got a ton of examples in the repo on how you can integrate it with other tools like styled-components, Redux, all of the things that exist out in the world that you would want to use.

One of the big hiccups that I've hit with it recently is getting it to work well in a TypeScript build. One of the things we've been doing on this open source project is migrating our codebase from type checking with Flow to having our source written in TypeScript, and having type checking done that way... And it's just been a bother to set up, mostly because you've got a ton of interesting attributes... For example, our code is in a monorepo, and so we have to set up references for packages within that monorepo, and have them be recognized by our development setup in Next.js.

You know I mentioned earlier we've had trouble stepping outside the bounds of what it was intended to be for, and their TypeScript experience has been a little subpar from my point of view. They're actually actively converting their codebase from Javascript with Flow to TypeScript, so that might change in the future... But yeah, that's been my experience with Next.

Again, I think it's super-cool that you can use it to make something like nteract/play, which is a very dynamic and interaction-focused application, and really all we're leveraging there is the fact that it's rendered server-side, and also leveraging the developer experience... But then you can also make something like the nteract.io website, which is just like a plain, standard, static landing page.

**Christopher Hiller:** Would you say it's overkill for something like documentation for an open source project?

**Safia Abdalla:** I think it's actually maybe a little underkill for something like documentation for an open source project, and I think it goes back to that -- one of those criteria that we mentioned in the last segment, which is thinking about who's going to be authoring content for this website, in my perspective documentation pages for open source projects should have authoring experience that doesn't require anybody to be a developer in order to write documentation. They shouldn't need to install Node or Npm or know about Webpack, or any of that; they should just be able to write markdown or write plain text and have that be the way they contribute to open source, or the way they document open source projects. So yeah, I think I wouldn't use it for documentation pages, but just for static sites I think it's adequate.

**Christopher Hiller:** \[00:28:28.08\] So you wouldn't be able to easily just toss some markdown files in a directory and have it render a site...

**Safia Abdalla:** Sure you could set it up to do that, and I've seen people do it, but I know in my personal experience we're using a completely different tool for that - it's called Doxify - which kind of accomplishes the task of put a bunch of markdown files in a repository and it'll take care of rendering them in a gorgeous web page. I'm sure you could set that up with Next.js; again, I'm not discounting it for that, but I think you'd have to write some of the glue yourself.

**Christopher Hiller:** Right. It does not do it out of the box.

**Safia Abdalla:** Yeah.

**Kevin Ball:** I haven't used Next much, but I've used Nuxt, which is the Vue equivalent, inspired by Next.js. Basically, they're front-end application frameworks that happen to also have a static site generation mode. They're designed for building a client application that is "universal Javascript", meaning it can render server or client, they have a bunch of stuff optimized for that, and then each one -- in Next I think they call it Export and in Nuxt they call it Generate, but they have a mode that lets you, if you want to generate a static site from that. But yeah, they're very definitely not optimized for that content-focused experience; they're application frameworks more than anything, I think.

**Safia Abdalla:** And I think it's kind of cool, because you do get the flexibility that I mentioned, where you can build a very interactive application on one end and a pretty static website on one end, using the same tool... So it's kind of a cool way to get the best of both worlds, in a sense.

Chris, you mentioned you had some experience with Jekyll... Can you share it? I'd love to hear a little bit more about something that's kind of come out of the Ruby ecosystem.

**Christopher Hiller:** Well, I've used Jekyll to build a personal blog, and do not anymore. But currently, MochaJS.org is built with Jekyll. Jekyll is one of these things where you define some templates, which represent the HTML skeleton of your site... And you have some markdown files, or in Mocha's case you have one big markdown file. You take this stuff and you run it through Jekyll, and it outputs a site on the other end.

It's really pretty easy to get started with, because it's a Ruby thing... You know, you mentioned the Ruby ecosystem - I don't really know too much about Ruby; I know that Jekyll is written in Ruby, and that I have to install Ruby and some other things to make it work. It's pretty easy to get started with, assuming you don't have troubles with getting Ruby and Bundler and some other things running.

One advantage to using Jekyll is that -- there's a couple cool things about it. One is that it's mature, it's been around for a while, and it has a really great plugin ecosystem. So if there's something that it's not doing, that you need it to do, somebody's probably had that problem and has published a plugin for it you can pick up.

\[00:32:12.14\] The other thing is that if you want to deploy a site to GitHub Pages, which is actually a great way to use Jekyll -- so if you wanted to make a little blog, or a development portfolio or something on GitHub, it's really easy to just create a repo and use Jekyll. And GitHub Pages actually supports Jekyll natively, so you can just push a Jekyll config and all your content and your templates and whatnot, and GitHub will automatically publish it to GitHub Pages.

There's some limitations there, like you can't use just any plugin under the sun if you're doing it that way, but you could still actually generate your site locally and then push the export up to GitHub Pages, and then there you go.

It's pretty cool, it's pretty easy to use... Mocha is going to be -- there's currently a PR open to switch over to a different system, one that's Javascript-based, because the Ruby requirements and everything was just kind of giving some of us fits. It's gonna make deployment easier, and... Right now it's like a barrier to contribution, because yes, it's a Javascript project, but if you wanna work on the docs and build it, you have to install Ruby, and blah-blah-blah. So I'm excited about switching away from that; I don't really have any major gripes with Jekyll other than it's not written in Javascript, but... Yeah, that's kind of my experience with it.

**Kevin Ball:** I feel like Jekyll is one of that first generation that's really focused on CMS-like behavior, and it's got a lot of those features you might expect in blogs, with lots of themes, and stuff like that.

What SSG is the PR open to switch to? I'm kind of curious whether the community is going to replace that style of SSG in Javascript.

**Christopher Hiller:** I haven't gotten a chance to look too closely at it, but it's something called 11ty. What is that URL...? It's not even a number.

**Kevin Ball:** I've found it.

**Safia Abdalla:** The website is 11ty.io, for those who are curious. I'm looking at it right now.

**Christopher Hiller:** Okay, great. So it's supposed to work similarly to Jekyll, which is why \[unintelligible 00:35:08.24\] one of the maintainers chose it. It looks like it's got some rave reviews. It looks neat.

**Kevin Ball:** Nice.

**Safia Abdalla:** Yeah, I've never heard of this tool, it's so interesting. It looks like the V8 website is using 11ty, and a couple of other quite popular websites. That's interesting.

**Kevin Ball:** I've used another very simple Javascript-based -- I almost hesitate to call it a static site generator, as opposed to a static page generator... It's called Panini, and it came out of Zurb and the team behind the Zurb Foundation. It uses Handlebars, so it lets you do templating, it lets you do your layouts and partials and all of that stuff.

\[00:35:56.16\] This is actually an interesting place to look at when you talk about a dimension that you could be making decisions on. We talked about the CMS-driven or CMS-like static site generators, versus the more application framework static site generators, and when you get something like Jekyll - it does a lot for you in terms of wiring the site together, and it has preconceived notions about the way pages fit together, and what a post -- it's "blog-aware", so it has some idea of what a post is and how that works.

Panini is simpler in some ways than that. It's only focused on one page at a time, it doesn't have a concept of a site; you have to put that together yourself, with your own structure... But what that enables is that you can actually use it for generating, for example, e-mails. So it's used both for generating sites, but also for generating HTML e-mails, and plugging things in, giving yourself a simple programmatic static site generator like Flow for that.

There are pros and cons to it... It's great in that it's simple to set up. If you're doing this simple Flow, it's really nice how flexible it is, because it does less; it lets you plug it into your own workflow in different ways. That said, if you're going outside of the pre-established workflows, you're gonna have more work.

It was nice to be able to use it for e-mails. If you're doing complex e-mails, it'll let you treat HTML e-mails in a modern development workflow, rather than the nightmare that they typically are, especially when combined with Foundation for Emails, which gives you an email-specific DSL.

I have an example site that we've built with it when I was working at Zurb, which is for the foundation Building Blocks... Which is kind of interesting, because it's a more complex -- it's a static site, but it's... Essentially, you'd build these code samples, that are sort of higher level components; they're example of how you might do something using the foundation... But the code - you build the pieces of it, you build the building block, essentially, with an HTML piece, a Javascript piece, a CSS piece (or Sass piece), and then the site, when it generates, it plugs that all together, it creates navigation, it does a bunch of stuff that lets you see a preview and do various things of how it works.

So it was a fun example of how you can flexibly create something that feels like a dynamic website, it feels like something where you've got a CMS-backed set of things that you're showing, and generating lots of different views for, and things like that, but it's all happening statically at build time... And it's open source, so you can go and check that out. We'll have in the show notes, and I'll drop in the chat right now the link to the final page, and then also the repo behind it.

**Safia Abdalla:** I'm curious to know... One of the static site generators that we mentioned earlier on was Gatsby. It's a pretty popular one. I think I've touched it a couple of times, but nothing too deeply. Do any of you have experiences with it, or have seen anyone do anything interesting with Gatsby? Because it seems like it's pretty popular at this point. I think it's technically a VC-funded open source project now. It seems like they've gotten a lot of attention, and I'm curious to know what it's like to use from a developer perspective.

**Christopher Hiller:** I've never used it.

**Kevin Ball:** I haven't used it either. I'm these days much more in the Vue ecosystem than the React ecosystem, so I haven't been doing as much there. I have however seen some pretty interesting case studies go by of using Gatsby; they're published in my newsletter, and things like that.

There was one that came out last November, on using Gatsby to build an e-commerce site. There's a whole article about how they did it, how they generated it, and what their hosting architecture looks like, and whatever...

\[00:40:10.07\] But the amazing thing is just playing around with the e-commerce site; it is so freaking fast. Every single thing feels instant. It's not a super-simple site; it has big, rich images. It's primarily women's shaving stuff, so I'm not the target audience, but just playing around with it, I'm so impressed at just how smooth it feels moving through it... Everything feels instant, whether it's loading these massive, detailed images, or what. It just feels very, very slick.

There's data out there about how speed matters when it comes to e-commerce. You can literally count your conversion rates based on how fast things are, and this thing feels freaking instant... And it definitely got me thinking, if I'm gonna -- I'm not doing e-commerce right now, but if I were doing e-commerce, I would look very seriously at using a static site generator plus some sort of JAMstack API type thing... Whether I'm doing it myself, using just Stripe and a couple other things, or I've seen -- I think it's called Snipcart, and it's just an entirely Javascript-based cart. But yeah, that's really, really fast.

**Safia Abdalla:** Yeah. I've just headed over to the website, and popped into slow 3D throttling on my Chrome DevTools and kind of browsed around their product page a little bit. It's actually not too shabby for the throttling that's on there.

I wanna start to look forward into the future, because we've talked about what SSGs are, what their past was, and then some of the ways that we're using them, but I'm curious to know what are y'all's predictions for what the future of SSGs will be, and then also what you'd like to see evolving in the static site generator ecosystem. We'll get into that topic right after this break.

**Break:** \[00:42:35.15\]

**Safia Abdalla:** Welcome back, everybody. We are going to move the discussion forward into the future and talk a little bit about some of the predictions that we have for static site generators, and then also what are some features or things we'd like to see come out of the static site generator ecosystem. Does anyone have a prediction or a request for the future?

**Kevin Ball:** Well, I can jump in with a prediction, which is that we are going to see and hear more and more about them over the next year or two. We talked about those two phases of static site generators - the first phase, very content-driven, and I think we're now still in the early stages of a second phase of static site generators, that is realizing essentially how powerful it is to combine static site generation with the proliferation of APIs.

APIs have become the way that companies have exposed their products to developers, and for a long time that was happening on the server side, but now that we have these rich client-side frameworks... We've got React maturing, we've got Vue, we've got Angular still going strong, we've got lots of stuff in Ember - all of these different powerful frameworks on the client. Everybody's made that a relatively normal way to interact with their APIs. There's been a lot done to make sure that we can do that in secure ways, and that enables static sites to add dynamic functionality bits at a time, and this kind of gets into this idea of a JAMstack architecture that we'll talk about in a sec... But that ability is they're now - and we're just starting to see people really take advantage of it... And you combine that with the performance necessity of -- we're trying to access a worldwide audience now, we're trying to get stuff out to folks who are all over the world with potentially slow network connections, especially when you talk about mobile websites, and it's really important to be able to push things out to be as close to them as possible.

SSGs give you that ability to get your content close to the end user, and we now have the power to additionally layer on all the dynamic pieces. We're just starting to see the possibilities here. E-commerce - we're just seeing a couple folks going that way; I think it's gonna dominate niche e-commerce. Niche e-commerce is gonna move to static site generators and API-based stuff because it's so freakin' fast.

I wouldn't be at all surprised to see Shopify or someone else ship a version that is "Use the Shopify back-end with a static site on the front-end. We'll generate it for you and just ship it out", because the speed advantages are so huge, and speed just immediately equates to dollars and cents when it comes to e-commerce.

**Safia Abdalla:** I don't necessarily have a prediction, but I do have a request for features... And it ties into our earlier discussions about making sure that your static site generator is accessible to the people who are authoring content. One thing I'd love to see is static site generators become a little bit more friendlier towards non-developer users. And again, I might be speaking here from my programmer bubble, but it seems like a lot of static site generators rely on knowledge of things like using the command line, or using Git and other things like that to manage and work with them.

\[00:47:58.07\] I think it'd be really cool to see things coming out that don't make any assumptions about somebody's technical skillset with respect to getting static sites set up. That might already exist and be out there and I might not know about it, but I think that more accessible static site generators would be a cool thing for the future.

**Christopher Hiller:** Yeah, that would be my request as well. I think that it would be great for these sites that are mostly content with templates wrapped around it - to decouple that content maybe from the codebase itself... Because right now you have your templates in there, you have maybe your markdown files, and it's all under version control and blah-blah-blah. But if you had just some sort of document store, with nice editing capabilities, where somebody non-technical could go in and edit the document and then save it, and then trigger a build and deploy, maybe that static site generator - and I'm sure something like this exists - could go and pull that document from the document store and then use it to generate the site. It would be cool to at least have the option to decouple that content from version control.

**Kevin Ball:** I think those options exist right now. There's lots of these headless CMS-type structures, but I'm not sure -- I think there is tremendous value in that "We're gonna wrap this all up for you in a nice way." In the same way that you get with Siteleaf and Jekyll - they have a perfect "Here's how you integrate this into Jekyll and go" type of setup. That e-commerce site uses Contentful, which is a headless CMS; "Integrate that with Gatsby and go. Here's how it works. Here's your hosted platform. It just runs." I think that is good.

I think one of the interesting questions right now in this space is the bridge between those two worlds - the very content-focused world and the very dynamic world. One of the static site generators we didn't talk about, but that has come out in the last year was VuePress, which is an Evan You side-project, essentially, Evan You being the creator of Vue... But it's a zero config Vue-based static site generator that runs off markdown. It's currently very optimized for documentation; I think that was the first use case, for docs, and it's a little weird to work with after doing some other SSGs, because any sort of custom components or other stuff is all done in a hidden .vue folder.

I think one of the really interesting things that it raises or that it's trying to raise is bridging between the power of an advanced Javascript framework SSG that you might get from a Nuxt or a Gatsby or a Next, but also having that simplicity of content management and markdown stuff... And I don't know that VuePress is getting that right, but I think it's that sort of space there of "How do we bridge the gap between something that needs some more advanced stuff, but that also has a lot of stuff that just looks like 'Hey, get this content up on the web' and make that transition seamless and work well in the same framework?"

**Christopher Hiller:** \[00:51:46.14\] Thinking about documentation a bit more, there are plenty of tools out there that will take your TypeScript types, or your JSDoc doc strings, and will generate some API documentation, but none of them work super-well... So I think it would be cool to -- for Mocha we have Jekyll to generate the documentation, and then this is just the tutorials, and guides, and "This is how to use Mocha", but then we have API documentation, which is yet another tool that we have to use. So we use JSDoc itself, with a custom template, and I would like to see a more all-in-one solution for documentation. It's possible we could actually just do it all in JSDoc, but the templating capabilities are kind of lacking.

So just on the documenting open source project front, and especially API documentation, I would like to see some more effort... Because JSDoc is old, and we've been using it for a long time, and nothing has really emerged as a clear successor.

**Safia Abdalla:** Kball, you mentioned this a little bit earlier, and I'm curious to get a little bit more into it before we end off the show... Can you tell us a little bit about what the JAMstack is, and how it relates with static site generators?

**Kevin Ball:** Absolutely. JAMstack stands for Javascript APIs and markup, and it is essentially taking this concept of the fastest thing to send to a user is just static files - HTML, Javascript and CSS... So it is saying, "Hey, the first thing a user sees is all gonna be static, it's gonna be pre-generated, it's gonna be something that they can load from an edge node on a CDN", but layering in and saying "Hey, we actually want this to have dynamic related stuff, so let's take advantage of the proliferation of APIs and make that possible."

In some ways you could think of it as like this is just your separated front-end; this is a rich client-side application that talks back to an API... But I think what the JAMstack approach is saying, or where they're trying to take that is saying that set of APIs doesn't have to be an API server that you manage in the back-end; that can be a set of third-party APIs, maybe that's a bunch of serverless functions that act as APIs... It's kind of decomposing your traditional back-end and saying "We don't wanna get rid of that entirely, because there's some functionality that for either security or persistence or whatever actually needs some sort of back-end. But we're gonna make that something that is only interacted with via APIs and is not the first thing that gets to a user."

I think this is this idea that applications might be primarily - or at least initially - all statically generated. This is the idea that a static site generator doesn't have to create something that is all truly static; it's just giving us the first view and the skeleton, and the thing that is then gonna talk back to an API.

Technically, that GatsbyJS e-commerce site is a JAMstack application. It is generating Javascript and markup, and then talking back via an API to manage any sort of purchase or anything like that. There is a proliferation of companies aiming to support that now.

\[00:55:59.07\] Conceptually, you could use anything that exposes a Javascript-based client side-friendly API could be used that way. Stripe could be used... I think they might just use Stripe directly on there to manage it, but also there's folks trying to manage "Okay, here's an entire full-featured shopping cart", there's folks saying "Here's your content-based stuff", so you could be doing content that is managed client-side, versus managed at build time or server-side. Anything that's happening where the first thing that gets the user is completely static, and any dynamic content is fetched after the fact from an API.

**Safia Abdalla:** Nice. That does sound like a really great combination of tech. I can see how that's naturally where things would be headed. Anyone have any last thoughts, feelings, opinions, rants, perspectives on static site generators?

**Kevin Ball:** We're still in the early days. This is clearly an (I would say) superior approach for a relatively right now narrow, but I think expanding set of websites and applications. It is fundamentally enabling better performance, in many ways better security, because you're essentially shielding any sort of interactions with a web server through some more well-defined APIs that are probably a lot easier to test. You can't hack a static site; there's not much you can do there. And if you're doing just content stuff, the fact that you can't hack it is phenomenal, compared to the security nightmare that can be WordPress.

And I think it's many times a better developer experience. It's better along a number of dimensions for some subset of applications, and I think that set of applications right now is narrow, but is growing rapidly. So if you're not already playing in this space, you should definitely be taking a look.

**Safia Abdalla:** Awesome.

**Christopher Hiller:** Somebody's gonna take that as a challenge to hack your static site.

**Kevin Ball:** Yeah, they probably will. \[laughs\] I'm not really sure -- so there are layers there, right? As I mentioned, my static site is served via Nginx, so if there's a hack that can get to Nginx doing static stuff, I suppose you could find a way to do that... But that's a much lower surface area than the PHP that is WordPress. You could get it even lower, right? You served your static site entirely from S3 buckets; now they've gotta hack freakin' Amazon before they can hack your site.

**Safia Abdalla:** \[00:58:56.16\] I was going to sign off the episode right after Kball's inspiring and optimistic bit about the future of static site generators... But now I've gotta figure out a sign-off after discussing hacking websites, which I don't have a good transition for other than "Please don't try to hack Kball."

**Christopher Hiller:** I'm sorry. I'm sorry, everybody... I apologize.

**Safia Abdalla:** It's okay... \[laughs\]

**Kevin Ball:** If you can hack Nginx serving a static site... I mean, granted, I'm not an Nginx guru, so my config might be sub-optimal... But seriously, if you can do that, you've got a job somewhere, because that is some serious hacking. Good luck.

**Safia Abdalla:** Alright, so that is Kball's challenge to you, listener. Do try and hack his site, he's completely okay with it. \[laughs\]

**Kevin Ball:** White hat hacking. You hack it and you send me the vulnerability. I will give you a bug bounty. If you manage to hack my site, the first person -- should I do that...? Oh, gosh... \[laughter\]

**Safia Abdalla:** You already started the sentence, you've gotta finish it off.

**Kevin Ball:** Alright, the first person who successfully hacks my site gets shout-out creds on JS Party. How's that?

**Safia Abdalla:** Oh, okay. I think that is a good -- that'll be like a radio show giveaway. If you call in with the vulnerability that you've found on Kball's site, we'll give you a shout-out live. And if you're listening to us live, you're probably one of the first people to hear that, so you've got a headstart on hacking Kball's websites... So thanks for joining us live. If you're listening to this later, you don't have a headstart, but you could still try and hack Kball and get shout-out creds on the podcast.

**Kevin Ball:** What have I set myself up for...?

**Safia Abdalla:** Whenever you're listening to this and wherever you're listening to this, thanks for joining us here on JS Party. Have a great day!
