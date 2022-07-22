**Jerod Santo:** Hello, friends. It is JS Party time! I'm Jerod, your internet friend, and I'm joined today by my friend, Feross. What's up, man?

**Feross Aboukhadijeh:** Hey, Jerod. How's it going?

**Jerod Santo:** It's going well, it's going well. Have you played with Deno at all?

**Feross Aboukhadijeh:** Just a small bit.

**Jerod Santo:** Have you built websites at all?

**Feross Aboukhadijeh:** Yes.

**Jerod Santo:** \[laughs\] Okay, so we've got a treat for you today... And Feross, I know you build websites. In fact, I was on one of your websites today, because I was getting ready to put on last week's JS Party, in which we referenced your annoying site, The Most Annoying Site, and I accidentally opened -- I thought "I'll put it in the show notes, because we talked about it on the show." I accidentally opened the site up in my browser, and I immediately cursed you and the ground you walk on for that...

**Feross Aboukhadijeh:** \[laughs\]

**Jerod Santo:** Because man, holy cow, it's still effective, that site. I could barely get the thing to stop opening new windows. It even tried to do the Apple Pay thing now... I don't know if you've been working on it. It tried to open the Apple Pay, and then like -- you should take that site down at some point... But anyways, I know you make websites...

**Feross Aboukhadijeh:** Twitter has blocked the URL now.

**Jerod Santo:** Oh, really? So if you link to it, they just won't redirect?

**Feross Aboukhadijeh:** Yeah. They won't let you tweet it.

**Jerod Santo:** Beautiful.

**Feross Aboukhadijeh:** It's been censored.

**Jerod Santo:** Yeah. Wow, they're really censoring a lot of people these days. Well, I don't wanna censor any longer our guest, who hasn't been able to talk yet, because we haven't introduced him... It's Luca Casonato from the Deno team. Welcome, Luca.

**Luca Casonato:** Hey. Thanks for having me.

**Jerod Santo:** Thanks for being here. Fresh off your launch... And I can't avoid a pun.

**Luca Casonato:** A-ha...! \[laughs\]

**Jerod Santo:** Because you've launched a fresh, new --

**Luca Casonato:** I've heard that one before.

**Jerod Santo:** Yeah... You're gonna hear it a lot more as well... Sorry, you picked the name, not me. I do like it.

**Luca Casonato:** Yeah, it's good.

**Jerod Santo:** I like the lemon-based icon as well. Cool stuff... A new web framework for Deno, from Deno. It's like an official Deno project. Y'all are building it and supporting it into the future. Awesome. What was the idea? Why? What was the impetus or the reason you decided to build this?

**Luca Casonato:** \[04:03\] The original idea was not to build a framework. The idea was to just have a tech demo to showcase a bunch of cool features in Deno, and how you can use them together to make websites, essentially. Over time, this turned into "Oh, wait, this is actually really nice to use." We started building utilities all over the place, which were nice to use... And it turned out that we could integrate this all together into some sort of cohesive bundle. We started using that for some internal projects, the team internally really liked it, so we decided to put more effort into it and open source it.

**Jerod Santo:** I like how the JS community - and I guess the TS community as well; what we call ourselves nowadays, the web, web devs -are starting to embrace just even the term framework. We're starting to see frameworks come out, and a long time it was like libraries, and routers, and packages... And it was very much a build-your-own-thing out of these smaller things. But I think at this point frameworks are back again, or they're here for the first time perhaps. I think we're starting to be like "You know what - it's nice to have a lot of things all in one place, maintained by a group... And I wonder - was that something you all thought about? Even the word "framework" for this thing.

**Luca Casonato:** Yeah, yeah. One of the core ideas of Deno for a long time, to have this whole batteries-included runtime, where we're providing the runtime, but we also provide things like formatting, and linting, and testing, and dependency management, and documentation generation, and a million other things, all in the same binary, maintained by the same people, with the same opinions, to sort of give you a cohesive experience.

It's very nice that we managed to also extend this to this web framework now, because those same ideas that we built Deno with, we also use to build this framework. So it really nicely integrates with Deno, and it has the same core principles, that things should be fast, and things should be easy to use, and things should not be bloated.

**Jerod Santo:** Feross, what about your thought on frameworks versus libraries? I know you've been very much a bring things together, make your own decisions... I do like that ethos of like "I'm gonna pick--" like a craftsman would pick their tools, you know? And I know that you've built a lot of websites over the years, and it seems like each time we talk about the tech inside your websites, it's always a little bit different; you pick different things. Curious what your thought are on the framework movement that's happening currently.

**Feross Aboukhadijeh:** I'm a huge fan of it, actually. I am starting to lean more toward that direction. It's nice to not have to think about these details when you're trying to solve a problem, and to keep your mind at the level of the problem you're solving and not constantly going down into the lower level and trying to tweak the way the routing works, or these kinds of implementation details when you're trying to just solve a problem. So I'm a huge fan of it now. It helps you focus on what you're trying to do, the actual problem you're trying to solve.

**Luca Casonato:** I feel like very often with a lot of people it's like they think they don't like it until they start using it. They think they don't want the opinionation until they use something which has the opinionation, and then they don't wanna go back.

**Jerod Santo:** Right.

**Luca Casonato:** Once you've used it, you realize how much time it saves you by not having to make all these decisions, but have someone else make the decisions for you.

**Jerod Santo:** Yeah. So I'm from the old days of the web, pre-Ruby on Rails; it wasn't much. And then that really brought the framework into the forefront. And then there was like a backlash against that in the Ruby world with Sinatra, which was more akin to Express in terms of what it provides... And you could use Ruby on Rails, which was a batteries-included framework in the Ruby world, to build your web apps. Or you could go the Sinatra route, which was like this super-clean, minimal, but beautiful (basically) router plus some other things. And if you used that, you would then pull in different things that you'd need. And I got attracted to that style and I went that way, a couple websites.

What I found myself was like piece-mealing together Sinatra plus all these other components to basically be my own ad-hoc Ruby on Rails... But it was just mine. It wasn't along with the big group of people working on it. I had all these 17 different plugins in order to recreate that.

\[08:14\] I think something about that gravity of a bunch of people all putting their work on this one thing, especially when it's supported by the runtime creators and maintainers, is pretty attractive, even though at first it kind of offends your sensibilities of like "Hey, I'd rather pick each part." Eventually you start to see why that's attractive. So it's pretty cool that I think we're starting to see a lot of people step up and say "Let's go batteries-included and see how that turns out."

So Fresh has its own view of the world; every framework does. Otherwise why create a new one, right? Just to contribute to one that currently exists... Tell us the perspective of the Deno team and the Fresh team on what a web framework in 2022 should look like.

**Luca Casonato:** Sure. So Fresh is really built to be fast. Fast as in it serves fast websites, and you as a user using a website should have a great user experience and a reliable user experience, even if you're on a slow network or on a slow device. It should not drain your battery, it should try to use the platform for as many things as possible, it shouldn't try to reinvent the wheel.

So Fresh really tries to not reinvent the wheel, pretty much anywhere. It tries to really stick close to things that have already proven popular on other frameworks, and that have shown to be very fast or very reliable for users over the last couple of years... One of them being server-side rendering by default, and not shipping megabytes or even hundreds of kilobytes of JavaScript to users on every request, but rather shipping them vendored HTML and then hydrating parts of that HTML as is necessary. So that's kind of the worldview; we tried to make it fast and small, and use things which people are already familiar with, and have proven to work well.

**Jerod Santo:** So not build step, no configuration unless you want to. A lot of the niceties -- the zero JavaScript overhead into the client by default, but of course, kind of allowing you to opt into more and more of that as need be. So it's a multi-page server-side rendered application; as you navigate different pages in your browser, are you loading fresh pages every time?

**Luca Casonato:** Yeah, exactly. So there's no client-side routing at all. It's all completely server-side routed. And there's obviously downsides to this. There's upsides and downsides. These are trade-offs that you have to make. If you want to have a very great offline experience, that's not something you can do. You need to do more in the client. But most pages are things like blogs, or marketing sites, or even eCommerce sites; they're applications, there's a lot of interaction that goes on there, but you don't want them to -- imagine to buy something you'd have to open your app store, search for the store that you're trying to buy something from, download their app, and then start using that. That's how we're building a lot of sites right now, except you don't go to the app store, but instead you type in the URL and you have to wait like 6 or 7 seconds on your 3G connection, or 20 seconds for all the JavaScript to download before you see anything that's interactive. That's really not a great development. We wanna push back on that and try to do as much server-side as possible, and really only ship things to the browser that's absolutely necessary to be in the browser. Things that require sub-hundred-millisecond response times, like changing the color of an input field as you type; input validation, that kind of stuff.

**Break:** \[11:45\]

**Jerod Santo:** What were some heuristics around that decision of client-side routing versus server-side routing? Because it really seems like there are cases where each one has its strengths. And I think my view of the world is that server-side rendering - and routing, as a consequence of that - is probably like the 80. I think it's on the 80 side of websites and web apps, whereas client-side is probably more on the 20. And if it was me, it's probably like 90/10, but that's just my view of the world. But I think it's hard to make that call. Have you ever had to decide "Do I do SPA, do I do client-side routing, do I do server-side?" and what are the tipping points that would push you in one direction or the other in terms of what you're trying to build?

**Feross Aboukhadijeh:** I think that with SPAs, or client-side routing, single-page apps, that model, you have the flexibility that if you do decide you need some of those features - like, you do wanna have let's say audio playing across pageloads, so you can have some audio player playing even when you click a link, or something like that - that stuff is just not even possible in the fully multi-page app model... So I think some people probably are picking these client-side single-page models for their website just because of the flexibility of not knowing whether they're gonna need that in the future, and not wanting to be trapped, I guess. I've felt that myself; when I was building Bitmidi I needed that behavior, and so I was forced into this sort of model. But then other times I wanted to just use React or Preact and have this nice sort of modern development flow, but also be able to do server-side rendering and have no client JavaScript, and I felt like it was pretty hard to get. I was either gonna have to go and build a really old-school website, or have to take on client-side routing and client-side everything.

So it's cool that fresh is -- I really like that you get to write your app in a modern way, and get this sort of like one-way data flow that React and Preact and all that stuff gives you, while still getting all the advantages of a multi-page app. So I think this is actually gonna be a really nice sweet spot for folks.

**Luca Casonato:** Yeah. I always like the example of Figma, \[unintelligible 00:15:49.01\] Figma is very obviously something that you need to do client-side rendering for. This is something that's impossible to do with server-side. There's just too much interaction. But something like your blog - this probably does not require client-side rendering at all. It can be fully server-side rendered.

\[16:09\] And it's really difficult to figure out at what point -- is an eCommerce site something you need to SPA, NPA? I think it really depends, as Feross said, on exactly what you want to be doing. If there are things that you require an SPA for, then you sort of have to use an SPA. But I think you should try to default to an NPA and then only go the SPA route if you really have to. If there's no other way around it.

**Jerod Santo:** Yeah, I would agree with that.

**Feross Aboukhadijeh:** What's the flow like then for upgrading to an SPA, or going into an SPA once you've started building something in Fresh? I see on your site you have this thing called an island... Maybe - could you explain a little bit about islands? Because I've never heard --

**Luca Casonato:** Yeah, yeah.

**Feross Aboukhadijeh:** It seems like very so often there's these new words that the JavaScript community kind of invents for new concepts... Like, tree shaking was one a while ago; it felt like we already had a word for it...

**Jerod Santo:** \[laughs\]

**Feross Aboukhadijeh:** In C compilers they call that a linker; you know, the linking step.

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** But we had to create a new word. So is island something like that? Could you explain what an island is for us?

**Luca Casonato:** Yeah, islands is like progressive hydration, essentially. Well, it's not quite progressive hydration; it kind of depends on how you define progressive hydration. The idea of islands is that you do server-side rendering, and you enhance \[unintelligible 00:17:18.19\] only some components of the page on the client. For example, you have a blog page with a comment section; you want the comment section to be highly interactive and client-side rendered, but you want the markdown itself of the blog to be completely server-side rendered.

The idea is that that comment section can be an island, which is like client-side rendered - the JavaScript for that is shipped to the client - but the surrounding scaffold does not need to be shipped to the client at all. Only the markup itself, the HTML needs to be shipped to the client.

And Jason Miller came up with this concept of island architectures like two years ago, I think. He wrote a blog post about it. There's a really great illustration on his blog, actually, that really showcases very well what it looks like, where you have this page and you very specifically hydrate certain components, but not the entire page.

**Jerod Santo:** Okay. So an island would be a specific component that you wanna hydrate client-side.

**Luca Casonato:** Yeah.

**Jerod Santo:** Let's take the comments example, because I think I get it, but I might not get it. Is your whole comments section the island, or is each individual comment an island?

**Luca Casonato:** As everything in software engineering, it always depends, right?

**Jerod Santo:** Sure, sure.

**Luca Casonato:** Let's say you want to update the comments, you wanna live-refresh them in the browser as they're being posted. You would make the entire comments section an island, because then you can add or remove comments from the list. If instead you want to -- let's say each comment has a Share button, which opens a share dialogue, and that needs some client-side JavaScript - then the comment content itself can be server-side rendered; then you could make one island per comment. It's really like the smallest component surrounding the interaction, I guess.

**Jerod Santo:** Okay. So let's imagine the former circumstance. So we have a comments section that we want to be highly interactive. Each comment just like floats in from the side, or whatever you wanna do. So I make my comments component an island, and that means it's client-side hydrated. But what about the existing comments that are previously there?

So on a typical NPA, server-side rendered, if I had seven comments on my blog post and I hit Cmd+R to refresh, my server is gonna render the HTML for those seven comments. Now, does that still happen, but now you hydrate the interactivity, or you're actually just dynamically loading the HTML, JSON, whatever it is, that gets hydrated?

**Luca Casonato:** You could do either. By default, what will happen is that it will render the HTML on both the client and the server. So the Fresh homepage has this counter-example right on the homepage \[unintelligible 00:19:53.27\] server-side rendered, but the server-side render has the buttons disabled, for example. So when the client hydrates, it enables the buttons. So you still have the shell there, you don't get a layout jump, but it's not interactive yet, and it shows that it isn't interactive until the JavaScript is there on the client to deal with it.

But if you want to render some scaffold on the server that's in your component, you can conditionally check "If I'm on the server, return a scaffold", right?

**Jerod Santo:** \[20:21\] Yeah. Or if you want it crawled. Maybe I want my comments section crawled, so I'm gonna server-side-render it.

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

**Luca Casonato:** \[24:08\] Yeah.

**Feross Aboukhadijeh:** I wonder if you're going to add more options and more flags there, and then the islands folder won't be enough, because you need like islands, and then like three others types of islands... \[laughter\]

**Luca Casonato:** Yeah, yeah, I get it. So I think right now what Fresh does is it will hydrate the islands as quickly as it can, but it'll still try to yield to the browsers as often as it can, so you don't block animations, stuff like that. But it is actually totally possible that we add an option in the future where you could just export an options bag from your islands file, in your islands folder.

So the other restriction is that you have to have one island per file in the islands folder. So every file is specifically one island. So you can have an options bag there which says "This island should only be hydrated once it scrolls into view." Or "It should only be loaded on small devices" or "It should only be loaded when this media query matches" or whatever else. It's just not implemented, because -- yeah.

**Feross Aboukhadijeh:** That would be pretty cool, yeah. That's cool.

**Jerod Santo:** So the islands folder... Then the routes folder. Tell us about routing and how it works.

**Luca Casonato:** Yeah, so the routes folder is actually very much inspired by Next.js. This is one of these things which -- like, Next.js did an awesome job originally with how their routing worked; it still does, I think. And yeah, it pretty much works the same way; it's one file per route. You can have dynamic routes where you specify the \[unintelligible 00:25:27.02\] yourself if you need to do something really advanced... But yeah, it's one file per route, and the route can have a component that it renders, and it can have a handler. And that handler can do things like data loading... Handlers are really just like async functions which take in a request and return a response; web request and web response.

So you can do anything you want in there, and at any point in time you can call the render function. This might not make much sense if you haven't seen the code, but it's right in the documentation if you wanna look at it. And you can call that render function that will render out the component into a response. And by default, you don't need to specify this; the default for the handler is that it just renders out your component. If you wanna do data loading, you can do that in there. Or if you want to do like a redirect, you can also do that in there. You can do anything you want in it; it's just an HTTP handler. And you can have different HTTP handlers for POST methods, and GET methods, so you can handle form submissions that way as well...

The routes folder is really -- you have one file per \[unintelligible 00:26:23.14\] and inside of there you can declare both the component to render for that page, and the handlers for each of the HTTP methods that you want to handle.

**Feross Aboukhadijeh:** This is really cool. I like it a lot. It's really elegant.

**Luca Casonato:** Thanks.

**Feross Aboukhadijeh:** Yeah, it's cool. You have a handler function that gets called, and you can do your data fetching in there, and then you can have the JSX component that gets passed in all the props. Those basically come from anything that's matched in the URL. So like props from the URL, like different substitutions in the URL, and then also anything that the GET handler decides to return. So that's where you can do your fetching stuff from the database, or whatever you need to do. That's really cool. Does that mean that this GET handler thing runs for every single request?

**Luca Casonato:** Yeah.

**Feross Aboukhadijeh:** Okay.

**Luca Casonato:** Yeah. So what you can do - and this is not implemented right now; well, it is if you put in some muscle work yourself... But you can cache these things as well. You can have something called middlewares, which allow you to essentially intercept routes before they're matched, or intercept large swathes of routes all at once... And then you can do things like caching, for example, if you don't want to re-render on every request.

**Feross Aboukhadijeh:** So how would that work if you wanted to have a page that you only build once a day, or something like that?

**Luca Casonato:** So the idea with Fresh his still that you would have -- you always have a server running. It's really built to deploy to the edge, to deploy to things like deploying Cloudflare workers, where you server-side render really close to your users. The cost of doing that is very low. So if you wanna do something like that, what you would probably do is you would put a CDN in front of the origin, and use cache response headers to tell the CDN to cache pages for a given amount of time.

**Jerod Santo:** \[28:07\] Which is what we do with Changelog.com, and it works great. I think it's actually a really great strategy, to just server-side render it, but then just cache it for as long as you want at your CDN. Now, that assumes that you have a CDN, of course... But what about the data then? So if I have my Denos running on all these different Cloudflare workers, or Deno Deploy edges, and I'm server-side rendering a response, but let's say I've got a Postgres database that lives in LaGuardia, or something. Do they all just connect back to that, or is there a way of making that sucker live close to the edges? It's kind of a loaded question, because I know this is something that lots of people are working on... But I wanna hear what your thoughts are on it.

**Luca Casonato:** It really depends... As always, it depends.

**Jerod Santo:** Cop out... No. \[laughter\]

**Luca Casonato:** No, I'm just prefixing this, because I'm gonna answer a bunch of different ways here. So one way of doing this is if you're really read-heavy, you can do global distributed replicas for your data. If your data doesn't change very often, you can do caches. If your data does change very often, you can use something like CockroachDB, which can run in a bunch of regions across the world and it can -- even inside of the same SQL table, you could have certain rows live in certain regions, and certain other rows live in certain other regions.

For example, for users that are in the EU, you'd have their data live in Frankfurt, and for users in the U.S. you'd have it live somewhere in the U.S, like Ohio, or whatever... And for users in Asia you could have it live in Singapore, or Japan, or something like that. This really depends exactly on what you're doing. For a blog, it probably doesn't matter too much. Even if you have a comment section on a blog, you could do caching there, where if a comment shows up after 30 seconds versus after no seconds - that doesn't really matter too much.

**Jerod Santo:** Can you render an island by itself? And the reason why I ask that is I'm starting to think about this situation where you have this server-side rendered - or cached, in the case of what you're saying with an origin; you know, put a CDN in front of your origin and cache the response... That works great, except for like -- lots of websites have just some sections that are dynamic. Let me change that... Not just dynamic, but personalized to the signed in user, for example.

**Luca Casonato:** Yeah.

**Jerod Santo:** So that breaks a lot of caching in many places, and you're like "Well, I have to render the whole page dynamically, because it's different for Luca than it is for Feross." And I can have one that's for everybody who's logged out, but once you're logged in, it breaks. But I think maybe with islands, if you had certain areas of your site that are personalized, you could potentially have a static version of the HTML "server-side rendered", but it's the same every time, or whatever, cached... And then maybe hydrate just the dynamic, personalized portions, if you could have an island by itself just be rendered. Is that something people are doing?

**Luca Casonato:** Yeah, so that's possible... One problem with that is you would essentially send back an empty shell to users if they're signed in, and you would then fill in that shell using client-side rendering... We much prefer the model where for stuff like this you just render the page on every request dynamically. We have these edges nowadays -- like, Deno Deploy is like 34 regions across the world. You can get a 15 millisecond response time from anywhere. \[unintelligible 00:31:20.09\]

**Jerod Santo:** Yeah, but not if I'm going back to LaGuardia for my data. Like, if you think about an app like Facebook, which I honestly don't know how it works, because I haven't used Facebook since like 2008... But I know it has Messenger, I know it's got your list of friends, it's got your news... And all these things are highly personalized to who you are. All that data needs to get fetched from some database somewhere.

**Luca Casonato:** Sure.

**Jerod Santo:** At that point your edge executions - they're kind of moot, aren't they?

**Luca Casonato:** \[31:48\] Exactly. You need to have your data distributed as well. If you only have your compute distributed, but not your data, then that's not great. And things like CockroachDB - which is Postgres-compatible, by the way - does allow you to do this. It allows you to spread data across the world to where your users are, so you can have really fast read and write access to your data. And if you don't care about write access so much, you can have global replicas. And global replicas will allow you to do really fast reads from anywhere, at the cost of slightly slower writes, because you need to talk to some central database for the writes.

This really goes hand-in-hand with having some robust story on global distributed data... And I think that is actually something that currently we're really lacking. We don't really have a lot of good options for that. I don't wanna leak too much stuff, but this is something we are working on for Deno Deploy, to have really awesome globally-distributed data, where you don't have to think of these trade-offs as much. It'll just figure it out for you, so you can have fast read access anywhere to your data.

**Jerod Santo:** I think that's the goose that lays the golden egg right there. It's interesting to hear that you're working on it. I know fly.io for instance is working on it. I'm pretty sure Cloudflare is working on it... I bet Netlify is working on it etc. Exciting. And like you said, there are people like Fauna, Cockroach, who are providing the data layer for those things. But somebody that pulls it all together into a singular service I think is a pretty compelling offer at that point. I think until then, all this other stuff is cool, but you've kind of like got that one missing piece.

Do you wanna tell us more? I mean, you don't wanna say too much, but you could say more. But I don't want to get you in trouble. You're just smiling at me now... No comment. \[laughter\] Let's take a break right here. We'll tease them. We'll have a cliffhanger.

**Break:** \[33:35\]

**Feross Aboukhadijeh:** So Luca, who should use Fresh? And who shouldn't? Maybe that's the more important question. Who is Fresh not for today?

**Luca Casonato:** Yeah, so if you're Figma, then don't use Fresh, because you've already built an awesome product and you should not be using Fresh. If you're an established large company and you have an established, great, very performant website, then what's the point of switching? You've already put in all the effort. If you personally thought "Oh, I was gonna start a podcast. I still need a website for my podcast." And obviously, the difficult problem with doing a podcast is not the podcast itself, but it's writing the website for the podcast, right? Obviously...

\[36:08\] So that's something you can totally do... Do your blog, marketing pages, eCommerce sites, anything greenfield like that - that's something great you can use Fresh for right now.

If you have something which is really highly interactive and it requires client-side rendering, then Fresh isn't what you're looking for. Then you want something which is better suited to doing a lot of client-side rendering, like Remix for example. But most pages - that 80/20 rule thing that we were talking about earlier - that are mostly static, or have little islets of interactivity, you can use Fresh for.

**Feross Aboukhadijeh:** So would you say that Fresh is production-ready?

**Luca Casonato:** Yeah. A lot of our Deno land properties run on it. Deno.land, deno.com, examples.deno.land... The website for the linting tool... I'm probably forgetting like half of them, but there's a bunch of sites which are running the -- Fresh is serving millions of requests every day successfully. It's very much ready to use for actual production traffic. That does not mean we're done developing it though. There's still features writing, and improvements we're making, and I'm sure there will still be bugs, but it's stable enough that we trust to run on it completely.

**Feross Aboukhadijeh:** What about breaking changes? If I port all my apps to it right now...

**Jerod Santo:** Which Feross is actually doing right now, as we talk. You can see him typing. He's actually porting them immediately. \[laughter\]

**Feross Aboukhadijeh:** If I'd do that, what would happen?

**Luca Casonato:** If you port all of your sites, then I will make sure to publish a breaking change tomorrow.

**Jerod Santo:** \[laughs\]

**Luca Casonato:** If anyone else does, I won't though. \[laughter\] No, it's 1.0. We went 1.0. I'm not planning to do a 2.0 tomorrow. Nor am I planning to do a 2.0 in the next three months, or six months, or nine months probably even. Deno has been out for two years now, it's still in the 1.x release branch; we're at 1.24 right now... And the reason we've managed to do that is because we really thought long and hard about the API stability before we release 1.0. And we did the same with Fresh. So we're hoping that the API is gonna be strong enough to have real people using it and not break. And if there are things that will change, they'll change in a backwards-compatible way, so as to not break your applications.

**Jerod Santo:** What kind of stuff is missing? When I think of batteries included, I think of things like testing harnesses, deployment stories, form builders, I think of things like CSRF protection and various things that generally are the kind of smaller batteries that get added later when the thing is more mature. But at 1.0, what is some major stuff that's missing? If I do pick it up for my blog, or my eCommerce site, or to rewrite Bitmidi for Feross, what \[unintelligible 00:38:37.18\] have to go out and find or build my own?

**Luca Casonato:** Yeah, so the things that are really included right now is routing, templating and data handling. What is not included right now is anything related to data persistence, so that's something that we're gonna be working on. The story around styling, around CSS - it works, but it's not great yet. There's definitely gonna be improvements there. And the story around being able to talk between islands, so client-side rendered code and the server, dynamically, to do like data fetching from the server dynamically - that's also gonna be improved in the future very much.

So those are like the three big things that are coming up pretty quickly here. And then our deployment story is already pretty fantastic. You can deploy to Deno Deploy with no configuration. Deploys are instant, because there's no build step, so it's literally you push something to a Git branch and it gives you the green checkbox immediately for the link to click on. But we're still working on some features here.

**Jerod Santo:** What if I have Stockholm syndrome for build steps? What if I really, really want one?

**Luca Casonato:** Actually, that's also totally possible. You can use GitHub Actions.

**Jerod Santo:** \[laughs\] Yes.

**Luca Casonato:** But I would urge you to see a doctor if you like build steps. \[laughter\]

**Jerod Santo:** Well, we've been running them for so many years now... You kind of feel naked without a build step. You're like "Wait a second... I'm just gonna ship this code as it is to production...?!"

**Luca Casonato:** \[40:00\] Yeah. It's been really fantastic not having a build step. Because originally, this started out as we just wanted to have so fast deploys that anything to do with a build step would just be too slow for the deploys (for Deno Deploy, this is). So we just originally didn't have any support for doing any sort of build step. We had to get very creative in how we do certain things to be able to support these modern use cases that people have without a build step. And I think it's been pretty successful so far.

We have a way to do build steps right now using GitHub Actions if you want to, but it's really nice to not have a build step. It's insanely fast. None of our internal sites use build steps, because -- I don't know, I like pushing code in them and immediately having my production... Or preview deployment, I guess.

**Jerod Santo:** Yeah. I'm being one hundred percent facetious; I do not want a build step, and I would love to get rid of build steps. I'm from the days where you used to just say "script source =" and then you'd just put your app.js locally referenced, all your code in there. And it was a beautiful thing. And then our apps got bigger and bigger, and it became cumbersome and unwieldy. But when it works, it's a beautiful thing. So I'm very excited to have this new trend back to build step. And because it's Deno, your TypeScript just works.

**Luca Casonato:** Yeah. Typescript JSX.

**Jerod Santo:** And because it's Deno, your JavaScript just works.

**Luca Casonato:** Yes. Also that works.

**Jerod Santo:** I noticed it does generate .ts files. Can I turn that off?

**Luca Casonato:** You can't actually in the Fresh \[unintelligible 00:41:20.15\] but you can manually rename all your files to JavaScript if you want to... \[laughter\]

**Jerod Santo:** Actually, that might be kind of satisfying, just to go in there and like "Just JavaScript, please."

**Luca Casonato:** Yeah, rip out all the types. But yeah, I don't know. Types are nice.

**Jerod Santo:** That's what everybody keeps telling me.

**Feross Aboukhadijeh:** I was against TypeScript for a long time, but now I'm actually for it. At least for apps. Working with other people with types is actually pretty nice.

**Jerod Santo:** Building your blog?

**Feross Aboukhadijeh:** Building your blog with types? I don't know. Maybe that's not necessary.

**Luca Casonato:** Okay, so what's the reason you think that's not necessary? Because it's too difficult to set up, or because it's too much overhead to think about?

**Jerod Santo:** Because it's just not solving a problem that I have, generally, on a blog.

**Luca Casonato:** Okay. For me, TypeScript - I don't even care about the type-checking so much as I do about the editor completions. For me, the editor completions are the really great thing with TypeScript. I can just type up some code and get really nice completions. Maybe that's just me though, I don't know.

**Jerod Santo:** Fair enough. No, I think it's not just you. I think a lot of people like that. I think that's cool. It doesn't' sell it for me. But I'm mostly a TypeScript hater by occupation because Nick Nisi is the TypeScript fanboy on this show, so therefore I must be his antithesis... And so I can't actually like it by fiat. So you're not gonna convince me because it'd be going against my entire purpose of being here.

**Feross Aboukhadijeh:** \[laughs\]

**Luca Casonato:** Okay. So once we're on break again you will switch to loving TypeScript.

**Jerod Santo:** Yeah, exactly.

**Luca Casonato:** I like it.

**Jerod Santo:** Feross was on my team for a very long time, but he's recently switched... In fact, I think everybody has. I think I'm the only one left. Actually, Chris Hiller likes to use the JSDoc style typing, but he doesn't like actual TypeScript. So I still have him as a holdout... But I really don't have much of a basis. I mostly just joke around about it.

**Feross Aboukhadijeh:** My objection is usually around just the amount of overhead it takes to get going, which I think Deno solves...

**Jerod Santo:** \[43:09\] Exactly. That's why I had to just say this, because this does solve it. Getting started \[unintelligible 00:43:12.02\] Okay, so that's stuff that's missing. We talked about who should use it, who should not use it... What about the community? It's very much a Deno company kind of building this thing, but is it like hands-off, Deno is building this thing? Or is it like "Hey, come contribute. We wanna form a community around it"? Is there a governance model? Etc.

**Luca Casonato:** Yeah, so it's open source, anyone can contribute. Just to give you a frame of reference of what the interactivity here is from the community... Every day I wake up -- today I have like (I don't know) 20, 25, 30 open PRs, and 30 new issues on the repo to deal with. And then I spend the first five hours of my day merging community PRs, and replying to issues, and GitHub discussions, and whatever. So there's a lot of community interest here, and people are actively contributing. And actually, one of the people that is working on Fresh - he does not work at the Deno team at all - he just liked the project and started contributing to it.

If you have awesome ideas for things to improve, just post an issue on the issue tracker, or we chat very actively on our Discord, discord.gg/deno. There's a Fresh channel there, where people come up with ideas and then we'll discuss them and figure out how to implement them together.

**Jerod Santo:** I love it. Well, you've piqued my interest. You've given us a little bit of the lay of the land. I definitely want to give this a shot. I've given Deno a little bit of a try and I've appreciated it for what it is. I haven't had a good excuse to use it in any sort of non-toy capacity, so I'm just kind of waiting for that opportunity... And usually that's a web app, and so -- I think I even said on the show maybe 6-8 months ago, what Deno needs is a web framework. And it turns out y'all were working on it, so that makes me feel like a smart human... But maybe you guys are the smart humans...

**Luca Casonato:** The killer app problem.

**Jerod Santo:** Yeah. Maybe I was just stating the obvious and you guys are the smart ones. Feross, any other questions for Luca, or thoughts on Fresh before we call it a show?

**Feross Aboukhadijeh:** No, I think this is awesome. I love that it uses Preact, I love that it seems really well thought out, and it's minimalist, and there's no build step... It's cool. Nice work.

**Luca Casonato:** Thank you.

**Jerod Santo:** Luca, any final words? Anything else you wanna say to the JS Party community before we let you go?

**Luca Casonato:** Thanks for having me, and if you wanna try Fresh, go to fresh.deno.dev and give it a spin. And if you have any thoughts, just let us know. Good or bad. I love good thoughts, too. \[laughs\]

**Jerod Santo:** Good or bad. I'll let you get back to your 21 open pull requests and your 52 open issues. You definitely have people interested, which is a blessing, and can be a curse from time to time, but at least this is your job, so that's a spectacular thing. We will have the links to all the things... Fresh, Deno, we'll have Jason Miller's architecture post in your show notes, so it's a great place to follow up with the things discussed on today's episode.

On behalf of Feross, I'm Jerod, Luca, thanks for being here... This has been JS Party, and we'll talk to you all next time.
