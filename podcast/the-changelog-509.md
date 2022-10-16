**Jerod Santo:** It's Luca Casonato from the Deno team. Welcome, Luca.

**Luca Casonato:** Hey. Thanks for having me.

**Jerod Santo:** Thanks for being here. Fresh off your launch, and I can't avoid a pun...

**Luca Casonato:** A-ha! \[laughs\]

**Jerod Santo:** You've launched a Fresh, new --

**Luca Casonato:** I've heard that one before.

**Jerod Santo:** Yeah, you're gonna hear it a lot more.

**Luca Casonato:** Yeah. \[laughs\]

**Jerod Santo:** Sorry, you picked the name, nt me. I do it.

**Luca Casonato:** Yeah, it's good...

**Jerod Santo:** I liked the lemon-based icon as well. Cool stuff. A new web framework for Deno, from Deno. It's an official Deno project, y'all are building it and supporting it for the future...

3:Yeah. That's the idea.

**Jerod Santo:** Awesome. What was the idea why? what, what was the impetus or the reason why you decided to build this?

**Luca Casonato:** Yeah. So originally, the idea was actually not to build a framework. The idea was to just have a tech demo to showcase a bunch of cool features in Deno, and how you can use them together to make websites, essentially. And over time, this turned into "Oh, wait, this is actually really nice to use." We started building utilities all over the place, which were nice to use... And it turned out that we could integrate this all together into some sort of cohesive bundle. We started using that for it some internal projects, the team internally really liked it, so we decided to put more effort into it and open source it.

**Jerod Santo:** I like how the JS community, and I guess the TS community as well, what we call ourselves nowadays the web, web devs, are starting to embrace just even the term framework. We're starting to see frameworks come out, and a long time it was like libraries and routers and packages, and it was very much a build-your-own-thing out of these smaller things. But I think at this point, frameworks are back again, or they're here for the first time, perhaps. I think we're starting to be like "You know what, it's nice to have a lot of things all in one place, maintained by a group." And I wonder, was that something you all thought about, even the word framework for this thing?

**Luca Casonato:** Yeah, one of the core ideas of Deno for a long time, to have this whole batteries-included runtime where we're not just a runtime, but we also provide things formatting, and linting, and testing, and dependency management, and documentation generation, and a million other things, all in the same binary, maintained by the same people, with the same opinions, to sort of give you a cohesive experience. And I think this actually -- it's very nice that we managed to also extend this to this web framework now, because those same ideas that we built Deno with, we also used to build this framework. So it really nicely integrates with Deno, and it has the same core principles, that things should be fast, and things should be easy to use, and things should not be bloated.

**Jerod Santo:** Feross, what about your thoughts on frameworks versus libraries? I know you've been very much a "bring things together, but make your own decisions..." I do that ethos, of like "I'm gonna pick --" like a craftsman would pick their tools. And I know that you built a lot of websites over the years, and it seems each time we talk about the tech inside your websites, it's always a little bit different; you pick different things. I'm curious what your thoughts are on the framework movement that's happening currently.

**Feross Aboukhadijeh:** \[06:16\] I'm a huge fan of it, actually. I am starting to lean more toward that direction. It's nice to not have to think about these details when you're trying to solve a problem, and to keep your mind at that level of the problem you're solving and not constantly going down into the lower level, and trying to tweak the way the routing works, or these kinds of implementation details when you're trying to just solve a problem. So I'm a huge fan of it now. It helps you focus on what you're trying to do, just the actual problem you're trying to solve.

**Luca Casonato:** I feel like very often, with a lot of people, they think they don't it until they start using it. They think they don't want the opinionation until they use something which has the opinionation, and then they don't want to go back. Because once you've used it, you realize how much time this saves you, by not having to make all these decisions, but have someone else make the decisions for you.

**Jerod Santo:** Yeah. So I'm from the old days of the web. Pre Rails, pre Ruby on Rails, there wasn't much. And then that really brought the framework into the forefront. And then there was a backlash against that in the Ruby world with Sinatra, which is more akin to Express in terms of what it provides. And you could use Ruby on Rails, which was a batteries-included framework in the Ruby world, to build your web apps. Or you could go the Sinatra route, which was this super-clean, minimal, but beautiful, basically router plus some other things. And if you used that, you would then pull in different things that you need. And I got attracted to that style when I went that way, a couple of websites. And what I found myself was piecemealing together Sinatra plus all these other components to basically be my own ad-hoc Ruby on Rails... But it was just mine; it wasn't along with the big group of people working on it. I had all these 17 different plugins in order to recreate that.

I think something about that gravity of a bunch of people all putting their work on this one thing, especially when it's supported by the runtime creators and maintainers, is pretty attractive... Even though at first it kind of offends your sensibilities of like "Hey, I'd rather pick each part." Eventually, you start to see why that's attractive. And so it's pretty cool that I think we're starting to see a lot of people step up and say, "Let's, let's go batteries-included and see what how that turns out."

So Fresh has its own view of the world; every framework does. Otherwise, why create a new one, right? ...just contribute to one that currently exists. Tell us the perspective of the Deno team and the Fresh team on what a web framework in 2022 should look like.

**Luca Casonato:** Sure. So Fresh is really built to be fast. Fast as in it serves fast websites, and you as a user using a website should have a great user experience and a reliable user experience, even if you're in a slow network, or on a slow device. It should not drain your battery; it should try to use the platform for as many things as possible. It shouldn't try to reinvent the wheel. So Fresh really tries to not reinvent the wheel pretty much anywhere. It tries to really stick close to things that have already proven popular in other frameworks, and that have shown to be very fast or very reliable for users over the last couple of years... One of them being server-side rendering by default, and not shipping megabytes, or even hundreds of kilobytes of JavaScript to users on every request, but rather shipping them rendered HTML, and then hydrating parts of that HTML as is necessary. So that's kind of the worldview. Tried to make it fast and small, and use things which people are already familiar with, and have proven to work well.

**Jerod Santo:** \[10:02\] So no build step, no configuration unless you want to... A lot of the niceties that zero JavaScript overhead into the client by default, but of course, kind of allowing you to opt into more and more of that as need be. So it's a multi-page server-side-rendered application; as you navigate different pages in your browser, are you loading fresh pages every time?

**Luca Casonato:** Yeah, exactly. So there's no client-side routing at all. It's all completely server-side routed. And there's obviously downsides to this. There's upsides and downsides, certain trade-offs that you have to make. If you want to have a very great offline experience, that's not something you can do. You need to do more on the client. But most pages are things blogs or marketing sites, or even applications, e-commerce sites, which are -- they're applications, right? There's a lot of interaction that goes on there, but you don't want them to -- imagine to buy something you'd have to open your app store, search for the store that you're trying to buy something from, download their app, and then start using that. That's sort of how we're building a lot of sites right now... Except you don't go to the App Store, but instead you type in the URL and then you have to wait six or seven seconds on your 3G connection, or 20 seconds for all the JavaScript to download before you see anything that's interactive. That's really not a great development; we want to push back on that and try to do as much server-side as possible, and really only ship things to the browser that's absolutely necessary to be in the browser. Things that require sub-100-millisecond response times, like changing the color of a input field as you type, input validation, that kind of stuff.

**Jerod Santo:** What are some heuristics around that decision of client-side routing, versus server-side routing? Because it really seems there are cases where each one has its strengths. And I think my view of the world is that server-side rendering and routing, I guess, as a consequence of that, is probably the 80/20. I think it's the on the 80 side of websites and web apps. Whereas client side is probably more on the 20. And if it was me, it's probably 90/10, but that's just my view of the world. But I think it's hard to make that call. Have you ever had to decide "Do I do SPA? Do I do client-side routing? Do I do server-side?" And what are the tipping points that would push you in one direction or the other in terms of what you're trying to build.

**Feross Aboukhadijeh:** \[12:34\] I think that with SPAs, or client-side routing single-page apps, that model, you have the flexibility that if you do decide you need some of those features, you do want to have, I don't know, let's say audio playing across page loads. So you can have music, some audio player playing even when you click a link, or something that - that stuff's just not even possible in the fully multi-page app model. So I think some people probably are picking these client-side single-page app models for their website just because of the flexibility of not knowing whether they're going to need that in the future, and not wanting to be trapped, I guess... I felt that myself when I was building BitMidi; I needed that behavior, and so I was forced into this sort of model.

But then other times I wanted to just use React, or Preact, and have this nice sort of modern development flow, but also be able to do server-side rendering and have no client JavaScript, and I felt like it was pretty hard to get. I was either gonna have to go and build a really old-school website, or I have to take on client-side routing and client-side everything. And so what's cool with Fresh is -- I really like that you get to write your app in a modern way and get this sort of one-way data flow that Reacts and Preact and all that stuff gives you, while still getting all the advantages of a multi-page app. So I think this is actually going to be a really nice sweet spot for folks...

**Luca Casonato:** \[13:49\] Yeah. I always like the example of Figma, and your blog page. Figma is very obviously something that you need to do client-side rendering for. This is something that's impossible to do with server-side. There's just too much interaction. But something like your blog - this probably does not require client-side rendering at all. It can be fully server-side rendered. And it's really difficult to figure out at what point -- like, is an e-commerce something you need to SPA, MAP?

I think it really depends, as Feross said, on exactly what you want to be doing. If there are things that you require an SPA for, then you sort of have to use an SPA. But I think you should try to default to an MPA, and then only go with the SPA route if you really have to; like, if there's no other way around it.

**Jerod Santo:** Yeah, I would agree with that.

**Feross Aboukhadijeh:** What's the flow like then for upgrading to an SPA, or going into an SPA once you've started building something in Fresh? I see on your site you have this thing called an island. Maybe you could you explain a little bit about islands, because I've never heard --

**Luca Casonato:** Yeah, yeah.

**Feross Aboukhadijeh:** it seems like every so often there's these new words that the JavaScript community kind of invents for new concepts... Tree shaking was one a while ago that it felt like we already had a word for it... In C compilers we call that a linker, the linking step. But we had to create a new word... So is islands something that? Could you explain what an island is for us?

**Luca Casonato:** Yeah, islands is like progressive hydration, essentially. Well, it's not quite progressive hydration; it kind of depends on how you define progressive hydration. The idea of islands is that you do server-side rendering and you enhance with client interaction only some components of the page on the client.

For example, you have a blog page with a comments section. You want the comments section to be highly interactive, and client-side rendered, but you want the markdown itself of the blog to be completed server-side rendered. The idea is that that comments section can be an island, which is client-side rendered. The JavaScript for that is shipped to the client, but the surrounding scaffold does not need to be shipped to the client at all. Only the markup itself, the HTML needs to be shipped to the client.

Jason Miller came up with the this concept of island architectures two years ago, I think; he wrote a blog post about it. There's a really great illustration on his blog, actually, that really showcases very well what it looks like, where you have this page and you very specifically hydrate certain components, but not the entire page.

**Jerod Santo:** Okay. So an island would be a specific component that you want to hydrate client-side. Let's take the comments example, because I think I get it, but I might not get it. Is your whole comments section the island, or is each individual comment an island?

**Luca Casonato:** As everything in software engineering, it always depends, right?

**Jerod Santo:** Sure, sure.

**Luca Casonato:** Let's say you want to update the comments -- you want to live-refresh them in the browser as they're being posted. You would make the entire comments section an island, because then you can add or remove comments from the list. If instead you want to - let's say each comment has a Share button, which opens a share dialog, and that needs some client-side JavaScript, then the comment content itself can be server-side rendered; then you could make one island per comment. It's really like the smallest component surrounding the interaction, I guess.

**Jerod Santo:** Okay. So let's imagine the former circumstance. So we have a comments section that we want to be highly interactive. Each comment just like floats in from the side, or whatever you wanna do. So I make my comments component an island, and that means it's client-side hydrated. But what about the existing comments that are previously there?

So on a typical NPA, server-side rendered, if I had seven comments on my blog post and I hit Cmd+R to refresh, my server is gonna render the HTML for those seven comments. Now, does that still happen, but now you hydrate the interactivity, or you're actually just dynamically loading the HTML, JSON, whatever it is, that gets hydrated?

**Luca Casonato:** You could do either. By default, what will happen is that it will render the HTML on both the client and the server. So the Fresh homepage has this counter-example right on the homepage, that counts your server-side rendered, but the server-side render has the buttons disabled, for example. So when the client hydrates, it enables the buttons. So you still have the shell there, you don't get a layout jump, but it's not interactive yet, and it shows that it isn't interactive until the JavaScript is there on the client to deal with it. But if you want to render some scaffold on the server that's in your component, you can conditionally check "If I'm on the server, return a scaffold", right?

**Jerod Santo:** \[18:23\] Yeah. Or if you want it crawled. Maybe I want my comments section crawled, so I'm gonna server-side-render it.

**Luca Casonato:** Yeah.

**Jerod Santo:** That being said, every time you add a comment, you break my cache, and now I'm dynamically rendering this page more often than I would otherwise, and so there's performance concerns... So it's kind of an "it depends" all the way down. And it sounds like with the islands architecture you have the flexibility to make those decisions on a case-by-case basis.

**Luca Casonato:** Yeah. A lot of frameworks, like Next.js and Remix - they'll send the entire renderer for the entire page to the client, to be able to do client-side navigation and routing... And because Fresh does not do any of this, you can be very, very specific about what you send to the client. You could really scale it down to as small as you need it to be.

**Jerod Santo:** And what are the wins for doing that?

**Luca Casonato:** So the wins are that you ship a lot less JavaScript to the client. If you have a blog and you use Next.js and you use React Markdown or whatever to render some markdown into HTML, you do that once on the server, then you ship the entire rendering infrastructure to the client, you ship the markdown to the client, and then you do the rendering again on the client, even though it's already been done on the server. Like, what's the point there? That's just wasting CPU cycles on your mobile device. So the content hasn't changed since the server rendered it versus when the client renders it, so you can avoid that entire thing.

**Jerod Santo:** So this islands concept is not like a fringe part of Fresh. This is core to what Fresh is, right? Because I had generated a scaffolded app, and there's routes, and there's islands. Like, these are folder names in the structures. Islands, and Routes. So you're gonna be writing some islands, I suppose, when you're using Fresh.

**Luca Casonato:** Yeah. \[laughs\]

**Jerod Santo:** Okay. Feross, is this an old concept that's been renamed, or is this a new concept for you? Because now he's explained what it means. I mean, for me it makes sense, but I'm not sure if it has a previous name, or if it's actually just been invented by Jason Miller and the JS people.

**Feross Aboukhadijeh:** It's not ringing any bells for me. I know there's other frameworks that let you decide whether certain components should run on the client or on the server... I think Meteor even had something a long time ago. I don't know what they called it. My question about islands is just like how easy is it to go between something being an island and something not being an island? Because you have a whole folder there for it, so like if I start making some islands, and then I realize "Actually, I don't want this to be an island", is it a whole bunch of work to go back and forth? Because I would worry about --

**Luca Casonato:** No.

**Feross Aboukhadijeh:** I'd almost want it to be just like a boolean or something that I could turn on, and say "Do this on the client" or "Do this on the server."

**Luca Casonato:** Yeah. And it really is. The boolean is in -- like, is it in your components folder or is it in your islands folder?

**Jerod Santo:** Okay.

**Luca Casonato:** That's it. That's the only difference. The files are exactly the same. It's just a regular Preact component.

**Jerod Santo:** The code is just a regular Preact component.

**Luca Casonato:** Yeah.

**Jerod Santo:** Okay.

**Luca Casonato:** And the server-side render will automatically figure out when you're importing -- or actually not when you're importing, but when you're using an island, and it will only ship the code to the client if you're actually using a given island. So you can have like hundreds of islands and it'll only send the code for the islands that you're actually using to the client.

**Jerod Santo:** Okay. So the framework is smart enough to know it's in this folder, these are islands. And if it's not, it's not an island. Like, that's your indicator.

**Luca Casonato:** Yeah.

**Jerod Santo:** So drag-and-drop, Feross. Just drag it out of that islands folder and drop it into the components, I guess...

**Feross Aboukhadijeh:** Yeah. Interesting.

**Jerod Santo:** Not the best diffs...

**Luca Casonato:** Well, I don't know; on GitHub it would --

**Jerod Santo:** Like a boolean prop or something would be a better diff in terms of like "I'm switching it, but..." You know, trade-offs.

**Feross Aboukhadijeh:** I also wonder if you're gonna wanna have more flexibility down the line in terms of how you deal with an island... Because you might want to have certain ones where there's not even a server-side render at all, and it's 100% client-side... Or maybe you want some where it blocks the page. Like, this island is super-important, so you wanna send it pretty urgently down... I can imagine somebody would say "Don't even load the code for this until they scroll it into view, because this is like a really low-priority island, so just save on that JS if they don't even scroll to the comments section... Don't even send it."

**Luca Casonato:** \[22:10\] Yeah.

**Feross Aboukhadijeh:** I wonder if you're going to add more options and more flags there, and then the islands folder won't be enough, because you need like islands, and then like three others types of islands... \[laughter\]

**Luca Casonato:** Yeah, yeah. I get it. So I think right now what Fresh does is it will hydrate the islands as quickly as it can, but it'll still try to yield to the browsers as often as it can, so you don't block animations, stuff like that. But it is actually totally possible that we add an option in the future where you could just export an options bag from your islands file, in your islands folder.

So the other restriction is that you have to have one island per file in the islands folder. So every file is specifically one island. So you can have an options bag there which says "This island should only be hydrated once it scrolls into view." Or "It should only be loaded on small devices" or "It should only be loaded when this media query matches" or whatever else. It's just not implemented, because -- yeah.

**Feross Aboukhadijeh:** That would be pretty cool, yeah. That's cool.

**Jerod Santo:** So the islands folder... Then the routes folder. Tell us about routing and how it works.

**Luca Casonato:** Yeah, so the routes folder is actually very much inspired by Next.js. This is one of these things which -- like, Next.js did an awesome job originally with how their routing worked; it still does, I think. And yeah, it pretty much works the same way; it's one file per route. You can have dynamic routes where you specify the match here yourself if you need to do something really advanced... But yeah, it's one file per route, and the route can have a component that it renders, and it can have a handler. And that handler can do things like data loading... Handlers are really just like async functions which take in a request and return a response; web request and web response.

So you can do anything you want in there, and at any point in time you can call the render function. This might not make much sense if you haven't seen the code, but it's right in the documentation if you wanna look at it. And you can call that render function that will render out the component into a response. And by default, you don't need to specify this; the default for the handler is that it just renders out your component. If you wanna do data loading, you can do that in there. Or if you want to do like a redirect, you can also do that in there. You can do anything you want in it; it's just an HTTP handler. And you can have different HTTP handlers for POST methods, and GET methods, so you can handle form submissions that way as well...

The routes folder is really -- you have one file per pass you want to match, and inside of there you can declare both the component to render for that page, and the handlers for each of the HTTP methods that you want to handle.

**Feross Aboukhadijeh:** This is really cool. I like it a lot. It's really elegant.

**Luca Casonato:** Thanks.

**Feross Aboukhadijeh:** Yeah, it's cool. You have a handler function that gets called, and you can do your data fetching in there, and then you can have the JSX component that gets passed in all the props. Those basically come from anything that's matched in the URL. So like props from the URL, like different substitutions in the URL, and then also anything that the GET handler decides to return. So that's where you can do your fetching stuff from the database, or whatever you need to do. That's really cool. Does that mean that this GET handler thing runs for every single request?

**Luca Casonato:** Yeah.

**Feross Aboukhadijeh:** Okay.

**Luca Casonato:** Yeah. So what you can do - and this is not implemented right now; well, it is if you put in some muscle work yourself... But you can cache these things as well. You can have something called middlewares, which allow you to essentially intercept routes before they're matched, or intercept large swathes of routes all at once... And then you can do things like caching, for example, if you don't want to re-render on every request.

**Feross Aboukhadijeh:** So how would that work if you wanted to have a page that you only build once a day, or something like that?

**Luca Casonato:** So the idea with Fresh his still that you would have -- you always have a server running. It's really built to deploy to the edge, to deploy to things like deploying Cloudflare workers, where you server-side render really close to your users. The cost of doing that is very low. So if you wanna do something like that, what you would probably do is you would put a CDN in front of the origin, and use cache response headers to tell the CDN to cache pages for a given amount of time.

**Jerod Santo:** \[26:09\] Which is what we do with Changelog.com, and it works great. I think it's actually a really great strategy, to just server-side render it, but then just cache it for as long as you want at your CDN. Now, that assumes that you have a CDN, of course... But what about the data then? So if I have my Denos running on all these different Cloudflare workers, or Deno Deploy edges, and I'm server-side rendering a response, but let's say I've got a Postgres database that lives in LaGuardia, or something. Do they all just connect back to that, or is there a way of making that sucker live close to the edges? It's kind of a loaded question, because I know this is something that lots of people are working on... But I wanna hear what your thoughts are on it.

**Luca Casonato:** It really depends... As always, it depends.

**Jerod Santo:** Cop out... No. \[laughter\]

**Luca Casonato:** No, I'm just prefixing this, because I'm gonna answer a bunch of different ways here. So one way of doing this is if you're really read-heavy, you can do global distributed replicas for your data. If your data doesn't change very often, you can do caches. If your data does change very often, you can use something like CockroachDB, which can run in a bunch of regions across the world and it can -- even inside of the same SQL table, you could have certain rows live in certain regions, and certain other rows live in certain other regions.

For example, for users that are in the EU, you'd have their data live in Frankfurt, and for users in the U.S. you'd have it live somewhere in the U.S, like Ohio, or whatever... And for users in Asia you could have it live in Singapore, or Japan, or something like that. This really depends exactly on what you're doing. For a blog, it probably doesn't matter too much. Even if you have a comment section on a blog, you could do caching there, where if a comment shows up after 30 seconds versus after no seconds - that doesn't really matter too much.

**Jerod Santo:** Can you render an island by itself? And the reason why I ask that is I'm starting to think about this situation where you have this server-side rendered - or cached, in the case of what you're saying with an origin; you know, put a CDN in front of your origin and cache the response... That works great, except for like -- lots of websites have just some sections that are dynamic. Let me change that... Not just dynamic, but personalized to the signed in user, for example.

**Luca Casonato:** Yeah.

**Jerod Santo:** So that breaks a lot of caching in many places, and you're like "Well, I have to render the whole page dynamically, because it's different for Luca than it is for Feross." And I can have one that's for everybody who's logged out, but once you're logged in, it breaks. But I think maybe with islands, if you had certain areas of your site that are personalized, you could potentially have a static version of the HTML "server-side rendered", but it's the same every time, or whatever, cached... And then maybe hydrate just the dynamic, personalized portions, if you could have an island by itself just be rendered. Is that something people are doing?

**Luca Casonato:** Yeah, so that's possible... One problem with that is you would essentially send back an empty shell to users if they're signed in, and you would then fill in that shell using client-side rendering... We much prefer the model where for stuff like this you just render the page on every request dynamically. We have these edges nowadays -- like, Deno Deploy is like 34 regions across the world. You can get a 15 millisecond response time from anywhere. Not if you're in Australia

**Jerod Santo:** Yeah, but not if I'm going back to LaGuardia for my data. Like, if you think about an app like Facebook, which I honestly don't know how it works, because I haven't used Facebook since like 2008... But I know it has Messenger, I know it's got your list of friends, it's got your news... And all these things are highly personalized to who you are. All that data needs to get fetched from some database somewhere.

**Luca Casonato:** Sure.

**Jerod Santo:** At that point your edge executions - they're kind of moot, aren't they?

**Luca Casonato:** \[29:50\] Exactly. You need to have your data distributed as well. If you only have your compute distributed, but not your data, then that's not great. And things like CockroachDB - which is Postgres-compatible, by the way - does allow you to do this. It allows you to spread data across the world to where your users are, so you can have really fast read and write access to your data. And if you don't care about write access so much, you can have global replicas. And global replicas will allow you to do really fast reads from anywhere, at the cost of slightly slower writes, because you need to talk to some central database for the writes.

This really goes hand-in-hand with having some robust story on global distributed data... And I think that is actually something that currently we're really lacking. We don't really have a lot of good options for that. I don't wanna leak too much stuff, but this is something we are working on for Deno Deploy, to have really awesome globally-distributed data, where you don't have to think of these trade-offs as much. It'll just figure it out for you, so you can have fast read access anywhere to your data.

**Jerod Santo:** I think that's the goose that lays the golden egg right there. It's interesting to hear that you're working on it. I know fly.io for instance is working on it. I'm pretty sure Cloudflare is working on it... I bet Netlify is working on it etc. Exciting. And like you said, there are people like Fauna, Cockroach, who are providing the data layer for those things. But somebody that pulls it all together into a singular service I think is a pretty compelling offer at that point. I think until then, all this other stuff is cool, but you've kind of like got that one missing piece.

Do you wanna tell us more? I mean, you don't wanna say too much, but you could say more. But I don't want to get you in trouble. You're just smiling at me now... No comment. \[laughter\] Let's take a break right here. We'll tease them. We'll have a cliffhanger.

**Break:** \[31:39\] to \[33:03\]

**Jerod Santo:** Okay, let's get into it. Qwik, an HTML-first framework. Miško, there's lots of frameworks out there. You're the creator of one of them. It's still out there, people still use it, Kball. Lots of people are still using it. But there's React, there's Vue, there's Svelte, there's new frameworks like Fresh, from the Deno side. "Why another framework?", the million-dollar question.

**Miško Hevery:** Yeah, and that's a very good place to start, "Why another framework?" And you're right, there is a dime a dozen for them, the reason they're out there. So I'm gonna go on a limb here, and hopefully I'm not going to be too controversial, and I'm gonna say that all the existing frameworks we are familiar with, Angular Vue, Svelte etc... And Angular - I'm going to maybe take some credit here - kind of started the trend of component-based client side frameworks... They all are essentially the same, in the sense that how they work. But of course, the syntax and the DX is very different, right? So do you like your templates in the form of a string? Do you like them in the form of a JSX? Do you like him inline, together with the code, or separated in the files, etc? These are all different kinds of trade-offs different frameworks make... But in the heart of them, at the core of how they work, they're all essentially the same. And what I mean by that is that they really have one concern, and that is to just render things on the client... And that's pretty much what they kind of all do. And so Qwik is a different thing, right? Qwik is what I call resumable... And the best way I can explain resumable is -- well let me back off a second. So the existing frameworks that we have, I call them replayable, meaning that when they start up on the client - so if you do server-side rendering - they have to replay all of the work that the server did in order to get them in the correct state. And we have a word for that, and that word is hydration. And what that means is that when you navigate to a page, you might immediately see server-side-rendered content, but there is some time before you can actually interact with the page. And the problem is, the more complicated the page becomes, the more time it requires to wake up. And of course, we have tricks like lazy-loading, but it turns out lazy-loading doesn't quite work here, because lazy-loading is only useful for components that are not currently in the DOM tree. If a component is in the DOM tree, you have to hydrate it, and that means that even if it's a lazy-loaded component, you have to load it, and then do all this stuff.

So all of that means in practice that, especially on mobile devices and slow connections, the startup performance is kind of bad. And Google has this thing called Google Page Speed Score, and they measure and they look at different websites and how they do, and they're just trying to kind of push the industry towards faster, better experiences for the end users... And the Google Page Speed Score is not very good for most websites, right? And the reason, I'm gonna argue, for that is because all these frameworks have this thing called hydration. So I kind of spoke for a long time on this thing and I haven't really talked about Qwik, but does that make sense so far?

**Jerod Santo:** I'm with you. Kball, are you with him?

**Kevin Ball:** Yeah.

**Miško Hevery:** \[35:55\] Okay. So before I kind of explain how Qwik works, I think it's useful to kind of go and do a parallel. So back in the day when VMware first came out, virtual machines, I was blown away with a particular thing about them, which is that on my host computer I can boot up let's say Linux as my virtual machine, and the Linux boots up, goes through its boot-up process, and finally, at some point, I can log in. And once I'm logged in, I can, let's say, open up a Chrome browser, and I can navigate to like Google Docs, for example, and I can start writing my document. And at some point, I can just save the virtual machine into a disk, and I can take that file and send it to a friend of mine, and that friend can then just open the file up and continue exactly where I left off...

Specifically, they don't have to go through the boot-up process, the login process, the opening up of the Chrome, or Google Docs, or anything like that; they literally -- bam, they're in the final thing, and ready to go. And this is what I call resumable. And it is specifically how our current frameworks do not work, right? They can't do that trick. Instead, what they do is they essentially - every time you need to navigate to a page, for all practical purposes they have to boot up. And this boot-up process, what we call hydration, is really the way the framework recovers all of the information about where the components are, where the listeners are, what is the data, and so on and so forth.

And we have some tricks... We can prevent the client application from doing fetch requests back to the server by prefetching, and pre-populating local caches that we can inline into our page... But at the end of the day, the application has to replay, it has to hydrate, it has to boot up, it has to go through all of these phases. And all of these phases kind of slow us down in terms of the startup. What it means in practice is that if somebody sends you a link on Twitter or somewhere and says "Look at these awesome shoes. You should go buy them." You get the link, you click on it, and you see the shoes immediately, and then you're like "Yeah, I want to buy it", I add to shopping cart and nothing happens for several seconds, right? And at some point, you're just like "You know what - I don't really need the shoes."

**Jerod Santo:** Right.

**Miško Hevery:** And you leave. And so if we can improve the startup performance, I think it's a huge impact for companies. And Amazon has done tons of studies on this that they basically published, and I don't know the exact numbers, but basically they say for every 100 milliseconds that we can improve rendering performance and interactive performance, it's like X million dollars worth of revenue for us, right? So they actually know this, and they spent huge amounts of time and effort making sure that they can be as fast as possible.

And so this is one of the reasons actually that Amazon actually doesn't use any framework... Because all frameworks have this hydration or replayability property, this startup cost property, and it would make the startup performance of Amazon slow... And so they have kind of a custom -- I don't know what they do, but it's not any existing framework, right?

**Jerod Santo:** I just wanted to comment real quick on the impulse buy of those shoes... The first three or four seconds, you're like "I want to buy these suckers." But the point is taken; it's just funny to think about somebody clicking a link and just like ready to buy shoes before the thing can even download the payload. That being said, around the world, different places - maybe that can be 8, 9, 10, 12 seconds if things are not going well.

**Miško Hevery:** So Google Page Speed emulates things, and you can go and navigate to many popular brands - I don't want to call anybody out - and Google Page Speed will say "30 seconds before the page is interactive."

**Jerod Santo:** Really?

**Miško Hevery:** And it's like common big brands, right? So the point is you can go and look at top 50 ecommerce websites, and what you will discover is that I think the number -- in terms of performance, Google puts them in the red, yellow and green bucket. Top 50 websites, right? Nobody's in the green. Green is a unicorn, it doesn't exist. And I know for your simple Hello World website you can probably get green, but I'm talking about a real ecommerce website with the real needs, right? Nobody's in the green. There are very few in the yellow. I believe Amazon is in the yellow, I believe IKEA is in the yellow, and Staples, which kind of surprises me, is in the yellow. And then everybody else - red for you.

**Jerod Santo:** Wow. Even like Nike.

**Miško Hevery:** \[39:59\] Yeah, yeah.

**Jerod Santo:** I mean, assuming...

**Miško Hevery:** Everyone. And so the interesting thing for me is that we have this thing in the industry where - say your website is slow. What do we do is we kind of blame the developers, like "Oh, your developers are not very good. They messed up. They should have done this, this, this."

It's easy to kind of blame the developer for this thing. But it turns out the developer has actually very little choice about this. Or to put it differently, if I practice the best practices for whatever framework I'm using, I will end up in a place that is less than ideal, right? Like, you don't get a performant website out of the box by just following the best practices, right? It's usually like some crazy hacks that you have to do and spend time on afterwards, in order to get there.

**Kevin Ball:** So I'd love to dig in a little bit, actually, on the virtual machine analogy... Because I think it's quite interesting to think about. And I don't know the numbers on this, but when you send a virtual machine, with state, it's booted up, I would assume - and correct me if you know better on this, but you have to send much more data across, because you're sending application state and all of these different things, as compared to simply booting from a boot file, or something like that.

And I know in the sort of web world - was at CloudFlare, or someone was looking at doing web workers and trying to make them boot faster, so that if you were running JavaScript, you wouldn't have to boot up the whole JavaScript process. And they compiled it down to an image in WebAssembly, and it was much, much faster to boot. But they're doing that on the machine, where sending bytes over the wire is not a problem. So I'm kind of curious, first of all, do you happen to know what is the space differential in terms of how much data you need to send to kind of boot up in space, and how does that play out when we're talking about something that's going to happen over a web connection, potentially a slow one?

**Miško Hevery:** Yeah. So that's all excellent questions. Actually, I think the short answer is you're taking the analogy too far, I think.

**Kevin Ball:** Fair enough. Okay.

**Jerod Santo:** I was wondering that as well...

**Miško Hevery:** Yeah. So what I'm trying to get at is that we have this property we call resumability, which is that the application can resume where the server left off. And what we mean by that is that at no point should there be duplication of work. Like, if the server did some work, then the client shouldn't have to do that. Now, in a normal VM machine - yes, you serialize the whole memory, which is huge, and that's not kind of how this works. Like, we're not sending a serialized state in here. Instead, what we do is we basically say -- what we want to do is want to serialize the state of the application, as well as the state of the framework. People forget about the state of their framework, because usually the framework kind of deals for it on your own right. But when you're, let's say, using Next.js with React - and by the way, I'm not picking on any particular framework; they all kind of work the same way... So I'm just going to use React and Next.js because it's a common thing that people understand. So if you use Next.js and React, Next.js will serialize your state I think in something called a next data property, or something like that.

**Kevin Ball:** Yeah. And it'll just dump that on the page, and everything boots up from there.

**Miško Hevery:** Yeah, it'll just dump that on the page, right? So that's the state of the app, so to speak. But what it doesn't dump on a page, because React doesn't kind of expose it, is the state of the framework. What I mean by state of the framework is like the framework needs to know what are the components, what are the listeners, what do I do when you click on this button, and so on and so forth. There's a huge amount of state that exists inside of the React that isn't exposed to you; and you don't usually think about it, but it's there. And what Qwik does is it basically says "Not only am I going to serialize the app state, which others already do, I'm also going to serialize the internal state of the framework itself, which others don't do."

So that's one thing that we do differently. The second thing -- and by the way, the amount of data isn't that big; like, the amount of state information is not that big, right? The second thing we do is we now have to also serialize things like where are the component boundaries, and we can serialize that directly into the HTML by adding special tags. And we also need to serialize where are the listeners in a DOM tree, and we can do that as well by adding special attribute tags into the HTML. So between HTML and your JSON payload that represents the state of the system, we can basically serialize everything we need to make this thing run.

\[44:10\] Now, of course, the next question is "Well, where's the code?" So that's the next big problem. And existing frameworks have this particular problem which I call single-entrypoint problem. What it means is that the existing framework has a single main method, so to speak, where the application boots up. And this main method is the only way to get into the application system, and therefore it is the only way to get the system up and running. So it's the only way to create chunks, bundles, and so on and so forth.

When you have something that's resumable, like Qwik - let's say you just have a page with two buttons. If I click on button A, then I'm entering the system through a different path, different chunk, different code that I have to download than when I click on button B. And so Qwik not only has to figure out how to serialize all the state, it has a second problem, which is that it needs to take your source code and break it down into lots and lots of small JavaScript files. Or the other way to think about it is it has to break it up into lots of entrypoints. Every single interaction that you can do with a page is a potential entrypoint that re-enters the system in a different way.

In existing frameworks we have this problem that like, well, they end up with a single chunk, and therefore you have to download the whole thing at once. And not only there's the whole thing at once, you can't really resume it, because you have to kind of execute the main method in order to kind of build up the internal things. What Qwik needs to do is it needs to take the source code and break it up into lots and lots and lots of smaller ones, create lots of entry points, and then every component, every listener, every effect, and so on and so forth, becomes a separate entrypoint in a system. And then when I click button A, I only download the buttons A's behavior. And when I click on button B, I only download button B's behavior.

So the end result here is that we are actually downloading a lot less code than an equivalent, a regular application. And specifically, if you look at a typical app, lots of components are what I would call static. In other words, they're just kind of for the layout purposes, they don't actually do anything. And Qwik can basically look at all this stuff and say "This is all static stuff, it's already server-side rendered. I will never, ever need to re-render this on a client, and therefore this code never gets shipped to the client." So you end up with actually a lot less JavaScript than you would on an equivalent framework application.

**Kevin Ball:** So this is reminding me actually a lot about Svelte, which I think in some ways is different than React, Vue, Angular they take because of the pre-compile. And I am not a Svelte expert, but I have played around with it a little bit, and I think they do some amount of the same types of optimizations, where because they're pre-compiling, they can have multiple entry points. If there's no dynamism, you don't get any JavaScript for a component. And they don't have this sort of virtual DOM thing which creates that need for the centralized main loop that you have in like a Vue or a React. But I think they still do have a hydration problem.

**Miško Hevery:** Yeah.

**Kevin Ball:** So I'm kind of curious, are those problems deeply connected for you?

**Miško Hevery:** They are; they are absolutely connected. Actually, I'm also not an expert at Svelte, but my understanding is that they only have one entry-point; I don't think they can create separate ones. The thing that Svelte does really well is they can prune the tree; because they don't have VDOM, they can prune the tree and say "Oh, these things never change, and therefore I don't have to do updates on them." But they still have hydration, because in order to recover the state -- like, Svelte is also reactive, which means like if something changes, they know how to just update a specific part on the page, which is all great. But in order to rebuild the information about where the components are, where the reactivity are... Like, if I change this data, I have to change this component, and so on and so forth; in order to rebuild all this information, they have to execute the application, at least once, at the very beginning.

\[47:59\] The theme for all of these frameworks is that in order to recover the internal state of the framework, they have to execute the application. The process of executing of the application is what rebuilds the internal state of the framework.

And you're correct, that different frameworks you can say have different efficiency factors in terms of how good they are at rebuilding. But I think Qwik is in a category of its own, because it just serializes everything, and you don't have to download anything in order to make it page-interactive, right?

So imagine, anything you can build in Svelte, you can build in React, and vice-versa, right? We all agree that all these frameworks are kind of universally the same thing kind of apps that they allow you to build. And the same is true also for Qwik; whatever you can build in Svelte, React, Vue, Angular and so on, you can also build in Qwik. So the kinds of applications you build are absolutely identical. What's different is how the application resumes on the client, and all kinds of other implications we can get into in this show. But the resumability is kind of the key difference.

**Jerod Santo:** So I'm thinking about the statement that you said about the server-side rendering and the client-side rendering. With Qwik there's never any duplication, there's never any work that's done twice... And I'm curious, is Qwik aware of server, is the server aware of Qwik? How does the server know the state of the page in order to not rerender things that have already been updated since it rendered last? Is there server-side -- is it full-stack, or...? I don't understand how it works.

**Miško Hevery:** Yes, it's an excellent question. So the big difference is that, as I said, existing frameworks, really they only care about client-side rendering. And the reason why Qwik can do all these things is that quack doesn't just care about client-side rendering, it also cares about server-side rendering, it also cares about serialization of the data, sending the data across, deserialization, bundling, breaking the application into chunks, and so on, and so forth. So in that sense, Qwik is full-stack; it cares about the whole thing, because that's the only way Qwik can deliver all these things. We also care about prefetching of the code as well...

So basically, all of the concerns that you as a developer need to worry about in terms of what makes an application performant are directly the responsibility or the things that the framework cares about, and has an opinion about, and lays everything out for you. And so that's kind of the biggest difference between these; because we own the whole thing end-to-end, we can do certain things that others cannot. Let me give you an example. In order to break up the application into pieces - let's take a simple example. Let's say you have a component that's a counter; there's a button, you click on a button, and it increments, right? We need to be able to take this listener for the button and be able to lazy-load it.

Now, in this particular example, of course, when you click on a button, you're also going to rerender the component, and so they'll always come together. But let's say it's a more complicated example that sometimes you don't have to rerender it. So the problem is that you do something like a button onclick = state++ or something along those lines, right? You cannot take that function, that closure that increments the counter and lazy-load it because it closes over the state. Right? So if you pull out that function and make it lazy-loadable by itself, the function will not work, because it will say, "Well, what's the current count? Like, I'm incrementing something, but what is it? How do I get it?" And if you just lazy-load code, I say that the code has amnesia. It doesn't have the information that you need.

So as developers, we know how to serialize code. That's just JavaScript. We know how to serialize data - well, that's just JSON. But what we don't really know is how to serialize closures, right? Closure is function plus data. And so the thing that Qwik can do is it can serialize closures; so it can take the closure that represents your button that's add one to the count, and we know how to extract that on the top level and serialize the associated data with it, and then make that whole thing lazy-loadable. But the only way to do that is if the bundler and the runtime cooperate, right? But existing frameworks, they're like "Bundling is not my problem" and therefore, a bundler can't do anything that would change the semantics of the code.

\[52:22\] And so the bundlers are very limited in what they can do, because doing something crazy would make the application be broken, right? Whereas the frameworks are like "Well, bundling is not our problem" and so the amount of things you can do are very minimal. We aren't, because we own the whole thing. We can do magical things where we can be like "Oh, that's a closure that closes a bunch of variables. Let me extract it to a top-level function. I understand which variables you closed over, I know how to serialize them, I know how to recover them. I'm going to make a special kind of function for you", that of course won't run by itself, but the framework expects this and the framework knows how to put everything back together in such a way to kind of recover everything. So this is where the magic is.

**Kevin Ball:** So you are transforming the code, you're applying custom compilations in order to make it resumable.

**Miško Hevery:** That's right.

**Kevin Ball:** Interesting...

**Miško Hevery:** So you write code... Qwik DX (developer experience) is extremely similar to React. So if you know React, you know Qwik. And this is intentional. This is not like -- we thought about this, and we're like" This is the way to do it." So we intentionally designed the DX to be like React. So you write your functions, your components, and so on and so forth.

Now, Qwik has a special thing where we add dollar signs to the API. So it's not use effect; we actually understand server and client, so we added an extra word in there; it's used client effect, dollar sign. And the dollar sign communicates two things - it both communicates to the developer and also to what we call the optimizer, the thing that can rearrange the source code. So the optimizer, it basically says, "Pull this out as a lazy-loadable thing" and to the developer it basically says "Special rules apply here. You can't just do anything here. You can do a lot of things, but special rules apply." And basically, the special rules that you have to understand is, one, this thing is going to be behind the lazy loaded boundary, which means it's a promise, it's not a direct thing. And two is we can serialize lots of things, but not everything. So you have to be careful about what kind of things are serializable. But the framework will eagerly tell you that you're trying to like capture something that's not serializable, so that we have a good developer experience. But for the most part, you'd be surprised how we basically figured out how to serialize just about anything.

So obviously, the basic things like objects, primitives are easy. But we know how to serialize closures, which is kind of mind-blowing. But I guess we know how to serialize that, so that already gives you a lot of things. And we recently figured out how to serialize promises, which is even more mind-blowing, right?

And so certain things we cannot serialize, like -- I don't know, if you create a set interval, and then you get a number back, and it's a number -- like, that has no meaning outside of the server, or the place where you got it. So there are constraints you have to understand and work with. But for the most part, you could just like write your application the way you want. We know how to break it up into pieces... And that's extremely difficult. By the way, that's one of the blackest magic we have with Qwik. I mean, I'm happy to go into the details, it's not like a secret or anything... But it is this thing that was super-hard to figure out. And now because we have that, we get the resumability property.

So that on the client, let's say you have the counter example - on a client, let's say you click the button that says Add one. And let's say this button randomly decided whether or not to increment the value or not, right? So when you click on the button, the system has to download the closure that represents the incrementer. There is no choice about that. You have to download that. And then let's say that the button decides that it's not going to increment things, because it's random. Then the system is done. There's nothing more to download.

\[56:00\] But if the button randomly decides, "Actually, I am going to increment the value", then now the system has to be reactive and say, "Oh, you modified this thing. Which component is invalidated because of the action you have done?" And most frameworks are like "Oh, I give up. Just rerender everything." And then there's like ways to kind of prune the tree. But when you say "Give up and render everything", you just mean like "Oh, download the whole application." That's not a thing for us.

Reactive frameworks are like, "Oh, I know. You modify this, therefore I have to modify this component." And so they have an advantage. Except in order for them to rebuild the reactivity graph, they have to run the application once at the very beginning. So that's useless, right? So the thing that Qwik understands is what is the reactivity graph, but this reactivity graph is actually serialized into the HTML, so that when you go and modify the count value, Qwik can say, "A-ha, I know exactly which component I need to download and update." And so it can be extremely surgical about it.

Now imagine a page where you have Add to shopping cart, right? You have your prototypical shoe, you say Add to the shopping cart. So when you hit that button, the code behind it will go probably and update some shopping cart data object, which then means that I have to rerender the shopping cart. So you have to download the code for clicking on the button for Add to the shopping cart, and you have to download the code for the rendering of the shopping cart. But notice what you didn't download. First of all, you didn't download anything else on the page, but you didn't even download the component associated that originally rendered the button for adding to the shopping cart. Because you didn't change that part, you didn't write down anything over there, so why should we even download this, right?

So the one way to think about it is one of the things that Qwik is trying to do is to say, "Look, if you're going to go through the trouble of downloading some JavaScript, then you'd better execute the whole thing, right?" We don't want to be in a situation where we download JavaScript, and then don't execute it. If you look at code coverage for a Qwik application, you should be pretty close to a hundred, because we're only downloading and executing stuff that we actually need to do, right?

And so the magical bit is like how do you take an application that is written in a standard React-like way, and break it up into lots and lots of entrypoints, create ideal bundle sizes, and do all of this magic that needs to happen, and then basically push all of this thing to the browser in a way where the developer doesn't have to think about any of this stuff?

**Kevin Ball:** So I want to dig into one particular thing there, and that's how are you thinking about how state moves through these different components? Because I was thinking about your example where you have a button somewhere on a page, and you have a shopping cart somewhere else on the page, and you change some state based on the button, and it only impacts the shopping cart.

**Miško Hevery:** Yeah.

**Kevin Ball:** In many component-based applications, that state may live in like a prop or something that is propagated through a number of parents to get down into whatever the actual component that's depending on it is.

**Miško Hevery:** Yeah. Our current implementation is inspired by Mobex, or I believe what Svelte does as well. So we have stores, and stores have properties, and you pass stores around. And then when you read from the store, that's how we know that a subscription has happened. And when you write into a store, that's how we know that you modified something. That's one way to do it.

We're also actually thinking hard about what SolidJS does. They have signals, and that is another interesting thing that we would like to explore. We're kind of exploring it, we're liking it... We'll see what the thing actually lands. But yeah, the idea is that you pass stores rather than props, so that you don't do much prop drilling. You can also have context etc. But yeah, if you do the classical prop drilling, then you have the problem that you'll force rerendering all throughout the system, and you don't want to do that, right?

**Kevin Ball:** Yeah, that makes sense. Vue also has a store-based system a lot of the time so, yeah...

**Miško Hevery:** \[59:57\] Yeah. What I'm kind of getting at is that like your developer experience for building in the application is very much unchanged. And it's probably closest to React, but maybe some things like stores from Vue, or Svelte etc. But fundamentally, the DX is something you're very, very familiar with, right? But that's not what we're selling here. We're not selling you a better DX, we're selling you a better experience for your end user, because we are smarter in the way we bundle, execute and deliver the information to the client.

**Jerod Santo:** So what's the practical difference then? What you're offering with Qwik - let's say the DX is relatively the same as using React; you put some dollar signs at the end of things, and there's a few more rules, or different rules. What's the practical difference? Is it an order of magnitude, in a complicated application? We're talking about your apps can be 10x faster, 100x? Like, what happens when I use Qwik instead of React?

**Miško Hevery:** Yeah. So we have our homepage, Builder IO homepage, and we actually have -- that home page originally was a Next.js React homepage... And we've just switched it over to Qwik, and actually, we have the ability to run both pages simultaneously. So if you go to \[unintelligible 01:00:58.25\] render = next, you get the Next.js one, if you just do without anything, you get the Qwik one.

If you open up in Google Page Speed, we get -- I think around 40 our score is on Google Page Speed on Next.js, and about 95 in Qwik. Now, I'm not picking up on Next.js. We could have done this in any other framework, and I think the numbers will be about the same, because they all fundamentally have hydration that's happening. And what you're really paying for is the hydration here, right?

**Jerod Santo:** Okay.

**Miško Hevery:** So no matter which framework you can choose out of that category, I think you'll see similar numbers. If you go to Chrome and if you open up DevTools and you go to the performance, and the performance you record at the startup thing, what you'll see is that the builder.io page on a desktop computers spends I believe something around 80 milliseconds executing JavaScript at startup, and that includes Qwik, and Partytown, and third party scripts, and everything. And in the Next.js version it takes, I believe, 800 milliseconds. So we're talking 10x improvement in the amount of JavaScript that the browser has to execute on startup.

But I think the improvement is even greater, because when you have a regular framework -- let's go to the example of somebody sends you a link to the shoe, and there is a Buy button you want to click. When you do the normal frameworks, you render everything, there's a button, and you click on the button, and nothing's happened, because you clicked on it too early, right? And so you'll have to wait until hydration is finished before you can click on a button. And that can take time. On a mobile device, it can take literally tens of seconds.

The nice property of Qwik is that the moment Qwik HTML loads, the HTML contains all of the information about where the listeners are, and it also includes a little tiny, what we call a polyfill, which is a piece of JavaScript that sets up a global listener for everything at the root, which is super-tiny; it's about one kilobyte, and it executes in under 10 milliseconds. It costs nothing, basically.

And this polyfill is ready to listen for things immediately. So as soon as the HTML shows up with a button, inlined inside of the HTML is a script tag that already executed, is already listening for click buttons. So when you go and click, that click goes directly and gets immediately processed. And now of course you have to fetch the JavaScript, but instead of fetching this huge thing which is the whole application, you're fetching just the code necessary for that button. You cannot get any more efficient. We have removed everything that is strictly not needed, and we ended up with the absolute bare essentials. There's nothing else left to remove.

The other thing we do is we also know statistically - and also we can kind of guess through heuristics - as to what are the possible things that you as a developer can do. And so even before you click on a button, we already instruct the browser with a prefetch link to say "This is most likely what's going to happen, so go and start prefetching this JavaScript." We don't execute the JavaScript, we're just prefetching it. But the nice property is that if we guessed wrong, and you click on a button, your request goes in front of the prefetch request, right? So you immediately even pull yourself up.

So all of this basically means is that you are essentially ready to interact with the page immediately. It's hard to imagine a scenario where the interaction would be even better. I don't know what else could be removed out of this particular thing, this equation, right?

**Jerod Santo:** Just a blank page. Just white -- there's nothing.

**Miško Hevery:** Exactly. \[laughs\]

**Break:** \[01:04:31.19\] to \[01:07:09.10\]

**Amal Hussein:** So Astro just came out with this 1.0, but it's really not new. I mean, it's new, yes, but not really. I feel I've been hearing about Astro for a while, I've been seeing you all push stuff, and it's been this slow reveal... So can you give us some timelines and give us some insights into how long have you been working on this project and what motivated it?

**Fred K. Schott:** Yeah, it's like every overnight success, there's years in the making. This really traces back to even that Pika story, but Astro itself I think is about -- if you go back to the first commit, like a year and a half old, so we've really been working on this for a while, trying to get it right before we stamp it with that v1.

The best way to explain it is essentially a content-focused or content-driven web framework... So if you're thinking of how you want to build your website, and you're looking at like Next.js, SvelteKit, or Nuxt, or maybe you're looking at like a static JAMstack builder, like Eleventy or Hugo, we're trying to be the best choice for anyone who's building a content site.

So marketing sites, portfolios, blogs, personal sites - if the focus of what you're building is content, getting content to someone who's trying to read or consume that content, that's what we're trying to be the best at. And we have a lot of really cool features that are designed explicitly for that use case, where we see other frameworks optimizing more for apps and dashboards and really complex use cases, which are all well and good, but we see a real opportunity here to build a framework for people who build content sites... And so that's what Astro is.

**Amal Hussein:** Yeah, that makes a ton of sense, Fred. I feel like for me that's like a really refreshing motivator and perspective, because to some degree, even things like AMP were really created to focus on - well, we have all these static sites that need to get to users faster. What do we do? Oh, I know, let's just limit all the JavaScript, right? And also come up with our own cryptic set of rules... And oh, I don't know, use private servers to prioritize caching, and blah, blah, blah... And maybe a few years down the line, make a lot of publishers and whoever angry, right? So for better or worse...

**Fred K. Schott:** Yeah, we're gonna make by making it only what we let you do in this little sandbox, and therefore the web is fast now, and good. And yeah, that's pretty antithetical to Yeah, a lot of things about the web.

**Amal Hussein:** Right. But again, for me, I appreciate the experiment, I appreciate the innovation and I appreciate the intent, right? So now how do we further evolve from that, and it feels like Astro is taking a step in that direction.

I think for me this focus on content, and websites that are -- that's your niche. I'd say okay, great job picking a niche, because that's really the majority of the internet, right?

**Fred K. Schott:** Yeah. As far as niches go, you can't really get much bigger... I think the last number I saw is like around 60% of the internet, or the top 500 sites, are that type of content-focused site... So yeah, as far as niches go, it's a big one.

**Amal Hussein:** \[01:09:58.19\] Yeah. I totally agree. And where would you say places like Reddit fall into that spectrum? Because I feel like Reddit is so heavy on content... It's like read, read, read for the most part, and then there's some interactivity there as well from users... But that's like user-generated content, I feel like...

**Fred K. Schott:** Yeah.

**Amal Hussein:** So where does that fall in that spectrum for you?

**Fred K. Schott:** I think you used the right word, which is spectrum. It's definitely different sites, and even different pages within a site can take different forms. So yeah, Reddit, the creation of content is much more interactive than just reading the content. And then once you get into the comments, there's a lot of little interactive bits.

So we like that content focus, because it really is our Northstar. But there's really cool features that back that up. So the big one is thinking about how you architect your site. The biggest difference that Astro has from others is that we really like this idea of generating your page. It's all static HTML, and then you're hydrating the interactive bits around the page.

So for some things - if everything is connected data, like you post something here, it updates the dashboard, this doesn't work for every use case, but for content, when the majority of the site is actually the static thing that you're consuming, it really works well to color in almost within the lines, like a paint by numbers. "Well, here's the interactive comment here. Here's the button here. Here's the navigation there." The benefit of that is that you're actually only hydrating individual parts of the site, and the performance benefit there is that you're not sending down this entire JavaScript app to users, you're sending them these little snippets.

So that's the biggest difference - Reddit works really well. Hacker News is kind of this like --

**Amal Hussein:** Clone...

**Fred K. Schott:** Demo that people like to benchmark Astro against. Yeah. The Next.js Hacker News versus the SvelteKit Hacker News, versus the Astro. And the interesting thing about Astro is unlike all those other ones, we don't have to send a JavaScript app to render that page and make it interactive. We're just making sure the comment button is interactive, the navigation is interactive. It's much more selective and therefore much more fast. We're just sending way less JavaScript down to your users at the end of the day.

**Amal Hussein:** Yeah. Again, that's another really refreshing take, and I think another way that I think Astro and the folks involved with the project as a whole have really helped push the community's thinking on this... And we'll get into some really cool stuff in a second, like islands... And no, not islands in the sun, which is what I always think of; I'm like "Islands in the--" No, different kinds of islands. But I think what's interesting for me is that thinking about architecture that way means that you're also always planning for that fast-by-default experience, and you're being very intentional about what you want to be expensive. Versus this opposite world that we've been living in for however many years, where by default everything is chunky and heavy, and we ship it, and then we start subtracting from there after the fact. It's kind of painful; no wonder teams have so much difficulty making their apps performance. We're speaking English when we need to be speaking Italian, or something like that. It's like, what are we even doing? So are we using the right tools? Are we using the right methodology? Are we using the right architecture? I would say, "No, no, no."

So I think -- yeah, I mean, I've said this before on the show, I'll say it again... It might make some people upset, but for me in 2022 - I love tools like React, but they come with their own set of problems and whatnot... But generally, if I wasn't designing for a multi-platform, use case where I needed this to run in a native application or in a VR headset, or whatever... Like, if I just needed this to be on the web, I would not be using a tool like React to create a simple website. I just wouldn't; it's just too chunky, there's too much overhead... It's got too many pieces of luggage, you know?

**Fred K. Schott:** So I'll take the other side of that, and I -- you'll need to stop me, because I will talk about... I find the history of like how we got to where we are fascinating. But I actually don't -- and I think I'm in the minority of like the web perf diehards here, but I don't know if I find React the problem as much as I find the "Everything is React" kind of thinking. And then applies - like, everything is Svelte, everything is Vue, where if you imagine, even like a simple Hello World Next.js site... And not the index.js; this is like the model that they use that everyone else is using. You're not just sending down the -- a Hello World, there's nothing really interactive, but you're sending down JavaScript to power it. And this history goes all the way back to like Create React App... And JAMstack really kind of pushed this, because there were a lot of benefits to it. But the thinking that your whole site is a JavaScript app, it's rendering on the client, you're only thinking in one codebase, you have this really nice separation of concerns, your backends and API, your UI is all one codebase... Like, there's really nice organizational things that people love.

**Amal Hussein:** \[01:14:31.08\] From the developers perspective, right? Isn't that DX though? That's like the DX is --

**Fred K. Schott:** Yeah, the DX is incredible. It's unbeatable. Versus like PHP - I worked on sites where you're rendering HTML with PHP, and then you're also rendering it again with React. It's like, you're trying to keep two codebases... I've seen some bad stuff.

But it's that idea of "The DX was so good, but then we just took that path and ten years later we've found ourselves where we keep adding complexity and adding more code to solve a problem that is inherently too much code."

That's our take on it, that it's not that React's wrong it's that we've way over-indexed on how much is powered by React or Vue or Svelte. At the end of the day, the more code you're asking the user to run, you're just fighting physics at that point; that's code that has to run on your user's device, and that's going to slow it down.

**Amal Hussein:** Yeah, that makes a ton of sense. And again, it just goes back to like the intentionality of what we're doing and how often we're all working under such constraints and such cow paths that also the community has paved... There's best practices, there's tools like CRA (Create React App) that make things so easy, and just one button... Right? If we're not careful about the complexities that we're abstracting... If we're abstracting away things like that are, okay, generally best practices and good decisions - great. But the risk of mass adoption and abstracting away some of those things - you're making bad decisions that you didn't even make... The tool made it for you, right?

**Fred K. Schott:** Yeah. The way we phrase it is like Create React App and a lot of others, they'll -- if you ever look in your node modules when you install something with Create React App, there's I think like 2,000 packages. 2,000 dependencies all sitting on top of each other. And we call that like -- it's complexity, but kind of wrapped and hidden from you. But then when you want to go and do something new, it's either the tool says, "No, you can't do that. There's too much here, you're gonna mess it up" or like "Okay, but be careful, if anything breaks, good luck finding which one of the 2,000 dependencies is causing that problem."

So it's like we've hidden complexity for so long... What I love about this kind of new wave of tools like Astro is was what if we just actually removed a lot of that complexity? What if we dropped down what you have to think about when you build and instead gave you something that starts from first principles, web Standards, HTML? I think that's a much better place than just continuing to wrap that complexity in more and more layers of abstraction.

**Amal Hussein:** Yeah, that makes a ton of sense. And like put the onus on the developer to intentionally make the decisions about where they want to take the app in terms of like "Which sections am I bulking up?" and being very intentional about those decisions also. Everyone, when they have the time to think about it, typically comes to the right conclusions. But it's just actually like "Have we even thought about what we're doing, really?" Most of us are just on autopilot, and in all fairness to Create React App, I don't think anybody could have predicted the way it was going to take off. Clearly, there was a need in the community for having more boilerplate templates that could serve and manage away all of the JavaScript tooling complexity, right? Because there is some fatigue there from the community, and that's something that we can't not talk about, because that is a real thing, a real problem.

And React was also the first application - we've talked about this on the show before - that went to npm Land and said, "Okay, JavaScript frontend developers, we're gonna go hijack the Node community now, because we need Node tooling to build JavaScript apps now." That was a shift that happened, and then we ended up with a bunch of Node tools that needed to build your frontend app, right?

**Fred K. Schott:** Right. And then Node changed, and all the tools after...

**Amal Hussein:** Right.

**Fred K. Schott:** We really like this term, all-in-one, and I think it's a larger trend. I think Deno kind of falls into this... Bun, if you've seen that... I think people are starting to feel more comfortable presenting something as a full, complete platform, and not a collection of 2,000 different packages, all hopefully working together.

**Amal Hussein:** \[01:18:22.25\] Because it's hard to maintain.

**Fred K. Schott:** Yeah. So we like this idea of Astro being a really stable runtime almost, or platform, or foundation, whatever you want to call it, that is much more like "Build on top of this and we've got you."

**Amal Hussein:** Fred, that was really insightful and super-interesting, kind digging into some of the context and history behind some of the motivations of Astro... Y'all make some pretty bold promises here; we'll list through some of those. So Astro is content-focused, server-first, fast by default, easy to use, and fully featured, but flexible, right? And I think that's interesting. That's a tough -- fully-featured, but flexible. I mean, that's -- how do you make it easy for newbies to get started and make good decisions without having to really think about it? And then how do you not hold back power users? That's always the struggle with API design.

So let's get into some of this... So we've talked a lot about the content-focused piece... Can we talk about the server-first piece? Because there's quite a bit here with just being server-first. For me, I kind of read that y'all are promising that this renders in the server. So you don't have to ever worry about any state management, or whatever else, unless you want to. But I'm just curious, what does that even mean? Can you explain that to folks?

**Fred K. Schott:** Yeah, no, definitely. So it really ties back to what we were just talking about, because what we see is we're flipping the model a bit, where if the last ten years have been all about "Let's build a big JavaScript app, that runs on the client and the server", we're saying, "Let's go back to when a lot of the work happened on the server", because there's really nice performance implications there.

So this is a kind of message that a lot of other frameworks are starting to try to tell, but we have this really unique opportunity to just tell it from a fully fundamental "What we do best is generally HTML, and then make it interactive", versus what we do best being like a JavaScript application.

So the way that we see it is that we are very server-first. The templating language that comes built into Astro is essentially sugar on top of creating HTML templates. It's a nice way to work with HTML. And then we pair that with a way to bring different components in only when you need them. So if you like React, or you like Vue, or Svelte, you can actually use those components to build your UI. But again, by default, we're just going to render them out server-rendered HTML, and zero JavaScript being sent down the wire, unless you opt into it. You say "No, this component should be interactive. Give me the JavaScript. I'll pay the cost for the user's performance, but I'll get this really nice, interactive component", versus every other framework is default. "I'll send it all. They might need all it, so just send it all."

**Amal Hussein:** I see.

**Fred K. Schott:** We've flipped that model.

**Amal Hussein:** That makes sense. So how do you all handle this uncanny valley that we get with server-side rendering where like "Well, it looks great, because oh, this came fast, and it looks interactable", then I try to click it right away and like "Oh, nothing's happening. Oh, JavaScript's still parsing and loading", right? Some of that can be managed by reducing the amount of JavaScript that you send, but you're still just gaming the system, right? It's never going to be zero seconds, or zero milliseconds to process that JavaScript chunk. So how are you dealing with that, if at all? Are we just leveraging the fact that because the users have to be intentional and opt in, it's usually a lot less JavaScript, and then there's also no framework JavaScript that's being sent along with this? I'm just curious, how are you all managing that uncanny valley?

**Fred K. Schott:** That's the problem that Astro like exists to solve for, which - the uncanny valley is a result of the fact that, okay, we're going to server-side render your JavaScript application in one of these other frameworks, and then we're going to send the whole page down as a full application. And nothing's going to be interactive until all of it is. That's really a uniquely SPA kind of problem. That's really a uniquely kind of that model problem, that we just don't have.

You still do need to make sure that your components can handle what happens if they, can they fall back on nice behaviors? But the nice thing about when we can kind of hydrate in different components - we're doing that in isolation, in parallel. So where large JavaScript applications suffer from the problem of everything has to load before anything can be interactive, there's this really nice model where we can actually treat every component on the page differently.

\[01:22:31.08\] So for example, if it's not visible, we're not going to run it. Until the user scrolls down to it, that's when we'll hydrate it. That's a really cool, uniquely Astro feature, because we're treating that component isolated from everything else on the page.

And the other being like if something's really high-priority, you can bump up how quickly it loads, and you can also load that without worrying that something really big and heavy is going to block it. So your big, heavy image carousel lower on the page - that's not going to block the Buy button that's somewhere in the middle of the page from becoming interactive and loading. So it's much more decoupled, and by result, things that are like really essential can load much faster, because we let you control what loads when and how high priority it is.

**Amal Hussein:** Yeah, that makes sense. So there's this like waterfall that you get with like unbundled ECMA modules, right? You have a bunch of different JavaScript chunks; true loading in parallel - is that even achievable really in the browser these days? I don't know, you tell me about it.

**Fred K. Schott:** Yeah, I mean, that gets into something else you mentioned, which is the fast by default. Just because these things can load in parallel doesn't mean we've blown away all the performance optimizations of bundling and minification. We still do do that. But it's a really interesting model. Instead of saying, "Okay, here's your whole page as a single JavaScript bundle", we're saying almost "Here's each component as its own-" island is a term we like to use. It's its own bundle, it can load in parallel. And so you actually are getting still bundled and optimized, without you really having to think too much about it. But it's a result of us behind the scenes still giving you the model, while handling the complexity of the behind the scenes for you.

**Amal Hussein:** That makes sense. So there is some intelligence being managed under the hood in terms of like optimizations that are still happening.

**Fred K. Schott:** Yeah, it's a big thing of trying to keep that away from the user having to -- it's a trick of how do you talk about your framework when every framework claims to be fast... But what we like to say is it's fast by default, which I don't think the other framework can really claim. What we mean by that is it should be hard to build a slow site with Astro... Because for content sites, performance is so key; it's key to conversions, and Google SEO, they're gonna rank faster sites over slower sites... And a lot of other frameworks you're kind of like "Okay, we've built a slow site. What do we do? Okay, well, we can optimize... Let's bring in a performance expert. Let's spend a sprint on just performance." And maybe you can make some progress. But we want to come from a principle of it should be really difficult. You should be having to try to make Astro slow for it to be slow. Otherwise, just keeping you out of that pit is really a main goal of the project.

**Amal Hussein:** Yeah, yeah. That makes sense. That's really great to hear, and I would say... I think that's an interesting nuance that I didn't even pick up on reading your docs, like fast by default. Yes, you're right. It is the "by default" part that I think you -- maybe you need to like bold that, or something, or put some confetti around it, or something.

**Fred K. Schott:** Yeah. You have to try. You've got to break Astro to break our performance story. That's our goal.

**Amal Hussein:** \[laughs\] That's cool, good marketing. And so another kind pitch on the Astro site is easy to use. And I noticed that there is a .astro UI language that's part of this framework. So can you tell me a little bit about that? And easy to use is a tough claim, because that's always relative, but... How easy is it? Is it as easy as JSX, where it looks like HTML, sort of, but still comes with its, I would say, dragons? So what's easy here?

**Fred K. Schott:** \[01:26:02.00\] I will call out that what you're reading is kind of like our aspirations. Like, we want Astro to be easy to use, and we make design decisions for that goal, over maybe something else, like a really complex feature that's really hard to use. We'll avoid that, even if maybe there's some reason to do it, other than -- it's something that we really value, is we want to always be easy to use when we design Astro as a language, as a framework, as a platform, all these things.

So I agree, like "Why use this?" "Oh, it's easy to use" - everyone says that, but it's our aspiration; we really value that over other things that other frameworks might value over ease of use.

**Amal Hussein:** Okay, that makes sense. And so can you give me an example of like an easy to use API in the library? Like, something that's uniquely easy to use in Astro than some other framework that whoever might be using.

**Fred K. Schott:** Yeah, so you mentioned the .astro file, which I think is a really good example of how we're trying to give like basically two different paths you can go down, and you can mix them as you want. So if you love react, you love Svelte, you love Vue - bring those into your project; they're gonna work just like anything else to generate your UI.

So there's this idea of bringing something you know, to feel comfortable, pretty much from day one, using Astro. Even if you're migrating a site, bring that site; as long as there weren't framework-specific bits, if it's just a React component that's like super-agnostic - fantastic. It'll probably work in Astro, assuming you meet that -- you didn't bring in anything that was framework-specific from the old world.

The other side of that is that Astro is us building a templating language that's really just HTML. So one of these things about using React or Svelte or Vue is you're having to learn a framework that was built for the client-side. So it's dealing with reactivity, and hooks, and these atoms that are responding to state changes... Those were all frameworks that were designed first for the client, which has a much more complex interaction story. And then they've kind of been back-ported to the server.

Because we're so server-first in our thinking, Astro is just a templating language for the server. There's no reactivity to worry about, there's no hooks. Everything's going to run once and render, and that gives us essentially something that's just HTML. We call it like HTML with some nice-to-have features, like a JSX expression if you want to do some sort of templating. You can use components in it. So it feels a lot like a Svelte or a React, but we've stripped away all the bits that aren't really relevant on the server. So you have your framework that you love, and then also, we try and give you this baseline that's just HTML, with a couple of little things you can opt into if you want them.

**Amal Hussein:** That's so cool. And yeah, honestly, I didn't even really put those things together in my head... Really, like, when you optimize for server first, and you're optimizing for HTML, you also by default - it's just easy to use, because you're not like, you know... Yeah, reactivity is really where things get complicated, right? That's like the 201, 301, 401, 501 classes... You know?

**Fred K. Schott:** \[laughs\] Yeah.

**Amal Hussein:** HTML is like beginner-friendly, but doesn't hold you back in terms of presenting structurally complex data, or sites either. So that's like the beauty of HTML.

**Fred K. Schott:** It's something that's always bothered me, like "Oh, this Hello World tutorial... Well, you need to learn a bundler, you need to learn JSX, you need to learn React, you need to learn a state management system, a router..." There's like a lot to learn in web development today, and it's all about rendering HTML at the end of the day. So could we build a kind of getting started flow that is just -- like, valid HTML works as a template, as a component in our syntax. So if you just want to copy in HTML from anywhere, put it in an Astro, that's a site. You've just built a site with Astro, and that's our Hello World.

**Amal Hussein:** Yeah, that makes sense. Fully-featured, but flexible is the other thing. Right? So you hinted a little bit about bring your own sites, bring your own -- you can kind of BYOF, which is a thing that you all have coined... Bring your own framework. Very cool. What does that even mean? There's over 100 Astro integrations to choose from. What are Astro integrations? It sounds like a physics seminar of some kind, but I could be wrong...

**Fred K. Schott:** \[laughs\] Yeah, you've got to put on your lab coat, put on your goggles, jump into your config files...

**Amal Hussein:** Current astral projection for this equation is...

**Fred K. Schott:** \[laughs\] Oh, no...

**Amal Hussein:** \[01:30:08.19\] You know, it's okay. Listen, this is why I don't like writing -- it's hard to write Astro integrations; I'm sure it makes sense in the context of web development, and in the context of Astro. So why don't you tell us about what that is?

**Fred K. Schott:** Yeah, I'm just laughing because I'm never gonna be able to get that image out of my mind for the rest of my life. \[laughs\]

**Amal Hussein:** I'm sorry, Astro integrations...

**Fred K. Schott:** \[laughs\] It's okay...

**Amal Hussein:** It's hilarious.

**Fred K. Schott:** Yeah, it's our plugin ecosystem. We really liked this idea of our core providing all the things you need. So when you install Astro, you have the basic building blocks of a site. But then this idea of bringing your own framework - it's a pretty lofty, big scope kind of goal. We couldn't build everything into core without it just becoming this maintenance nightmare.

So what we offer is this idea of everything you need to build a site is built in Astro. We're going to focus on content sites, so stuff like RSS feeds... God, what else...? Rendering Markdown... There's all these nice little -- like, very much more coming from like a blog, or like an Eleventy, nice-to-haves that are essential in the content site. So we build stuff like that, and make it really easy to grab off the shelf. And then when you want to use something like Tailwind or React or Svelte, we essentially have not just a kind of plugin, an integration, but also even a command that you can run. So "astro add react" is going to do all the work to get that set up for you.

**Amal Hussein:** Oh, wow.

**Fred K. Schott:** It's gonna npm-install the package, it's going to add it to your config file, as you'd expect... And the idea is you run that, and now you can use a React component in your project, or Svelte, or Vue, or Tailwind, or whatever it is you need.

**Amal Hussein:** That is so cool. But I have to ask, as maintainers, what is it like trying to normalize the JavaScript community? Because it feels like that's what you're doing. You're like "We're just gonna run a big normalization query on the JavaScript community." Are you like hooking into the public interface, or like the output of these tools? Because it's too much to go any lower. But I'm just curious, how are you managing this and normalizing this experience?

**Fred K. Schott:** Yeah, that's kind of the key of why the .astro syntax exists. It gives us that base layer, where you can then plug in these frameworks into it. So create your shell, and then put in your React component... And if you wanted to build an SPA, if you wanted your whole page to be one React component, or many React components, you never wanted to touch Astro's syntax - that's fine, too. But that's kind of the normalization there. I think that's actually pretty much exactly the magic that we've shipped.

**Amal Hussein:** Yeah.

**Fred K. Schott:** The reason it's not too much for us to lift is that server-side rendering a React component - that's essentially what every other framework is doing for your whole site. We're just doing it shrunken down to a single component. So it's almost this full-circle story where React started early days, and was like "Yup, here's a component, here's a component..." It was all frontend focused, and then the "build your app as a JavaScript app with React" - that all came later. But we're just tapping into that original story, which is use React to build this component on the page. All the same APIs work. So we're basically doing the same thing that Next.js is doing, or any React framework that is going to call the server rendering internally, to create that HTML.
