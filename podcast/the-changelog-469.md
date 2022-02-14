**Adam Stacoviak:** Ilya, it's good to have you back. We've been obviously acquaintances and friends over the years, having done many shows together; we've talked about a lot of stuff you've done - PostRank, Speedy, performance on the web, your career at Google, and now it's Shopify, and just... Excited! I reached out to you on LinkedIn when you made that move, and you said "Well, we'll talk later." So I think now is later, because there was this big release; Hydrogen is out there, Oxygen to come... A lot of fun stuff happening. And I guess you're combining a lot of the efforts, which is like performance, but also dev tool-related in this release, and what's going on... But one, just good to catch up with you, so welcome back to the Changelog.

**Ilya Grigorik:** Thank you. Thanks for having me back. It's always fun.

**Adam Stacoviak:** Yeah. And even more, we're big fans of Shopify. We have our own -- I'll plug our merch store; if you don't mind, Jerod, can I plug our merch store?

**Jerod Santo:** I don't mind. Ilya, do you mind?

**Ilya Grigorik:** Please.

**Adam Stacoviak:** It's easy. It's merch.changelog.com. It is powered by Shopify. I think we use the kit - I forget what it's called; whatever kit, it's like the basic way. The CLI version of like deploying our theme; that's how we do it. We deploy our theme to Shopify via the CLI, super-easy. We have it stored in Git, of course, on GitHub, but then we deploy it via a CLI, and I love it. So it makes managing our store so much easier... But - big fans of Shopify, big fans of you.

So catch us up. You've moved from Google to Shopify... What made that move make sense for you? Why did you make that move? What's so big about Shopify?

**Ilya Grigorik:** First, I just wanna say that I've spent a decade or so at Google, working on a number of different projects, and it's an amazing company, with lots of smart people, and an amazing technical playground. So there's no shortage of opportunities and really interesting projects. But at the same time, I was always really curious about commerce. I've worked with commerce, a lot of large commerce sites, helped many improve performance... But I always had this inkling towards "Hey, it'd be really fun to get really hands-on, and work on a capital-p Platform for commerce." And Shopify is an obvious place today; it's emerged as a really big player, and enabling millions of merchants to build their online presence. So it felt like a great opportunity, and a really interesting and familiar technology stack for me, of course.

\[04:19\] I think one of the first shows that we did back in 2011 was a Ruby server that my team was developing called Goliath. So I was working on streaming, an async HTTP server for Ruby; and of course, Shopify is a Ruby on Rails shop through and through. So it's just an opportunity to come back to the Ruby tribe. That was also very fun; I rediscovered a lot of long-lost friends. It's like, "Hey, remember we hung out at this event back in 2008?" The combination of all those factors, and the fact that commerce is only growing in relevance and importance... I think it's one of the themes that maybe we'll touch on today. Covid was an accelerator for commerce. It shifted a lot of commerce online. It became much more important. There are many merchants who have thought about "Hey, I should get online", and then all of a sudden they had to, overnight. Shopify was there to help. I think we did a really good job on that front.

So yeah, a combination of all these factors enticed me to jump aboard the Shopify ship, and I've definitely not regretted it. I've appreciated the scope of opportunity coming in, but seeing how the factory operates from the inside only gave me more appetite for this space, because Shopify is not just a storefront builder... A naive view of Shopify is it's a place where you get an online store and you sell stuff. But it's so much more, because the superpower of Shopify is that it integrates all of the pain of doing commerce, which is very, very deep. It's questions like "How do I do shipping? How do I do credit card billing? If I have a return, how do I handle that? How do I handle my customer database?" And there's a million of these little things.

As you guys know, because you're running the store, if you don't have a system that actually works well together, you'll end up spending 80% of your time on that minutiae, instead of actually doing the thing that you're supposed to be doing, which is doing your podcast, or selling your merchandise.

**Adam Stacoviak:** Yeah. And I mean, I love that we all have Ruby roots too, and that it's a Rails app. I mean, it's a Ruby app now. We've talked about the big rewrite in a past show; we'll link it up in the show notes... But even the R&D around that front, like "What does it take to make the application performant for all the necessary reasons?" I think you're absolutely right - the one thing that has been holding, or in any way holding Shopify back would be the integration of developers... And I think the React framework and the storefront is a phenomenal move; Theme Kit is great, but it's got its limitations... Even how do you build locally, and all these fun things... Like, how do you give a developer a playground that is commerce-related is the question that you've solved here. And I think that once you solve that, it's just like floodgates. I'm expecting floodgates to open up, because this is gonna be a lot of fun.

**Ilya Grigorik:** Yeah. I think we still have quite a bit of work to do - if we're honest - to really transition into a capital-p Platform... But I think that's where you're seeing the company head, and that's what has me really excited. And just to double-click on that briefly - I think the super-power of Shopify is the fact that it actually appeals to non-developers. This is the no-code commerce; if you're familiar with the foundational myth - but it's not a myth - of Shopify... Like, every tech company has its myth; and the Shopify lore is Tobi, who's our founder, at the time he was also a Rails contributor. He was working on Rails... Moves to Canada, he's stuck in an auto winter and he has an idea for "Hey, I'm gonna open an online snowboard store." And this is like early 2000's. He is a developer, so he starts coding, and he takes a year to build this thing. And he launches his snowboard store and he does have a couple of sales, and all the rest... And then comes to the realization that maybe the value prop here is not the fact that I'm selling the snowboards, but in the technology that I build to power the store... Because unless some other merchant is also as technically proficient as I am, they have no chance in this space. And then that becomes the foundation of Shopify.

\[08:24\] And you can see this kind of woven through the product through and through, where Shopify historically has optimized for your non-technical person who wants to start an online store. Let's make it as simple as possible. In a couple of clicks, you type in your product, you click Publish, you have a website. You should not have to reason through all the complexity of that. And that's the kind of no-code environment. And I think this is why Shopify has millions of merchants on the platform, because we make it approachable, and you don't have to be a technical expert.

**Adam Stacoviak:** We have a local friend we have here... I live in a small town in Texas; a small town outside of a big town. We live in Houston technically, but it's a small town outside of that called Tomball. You know about that, Jerod, Tom Ball...

**Jerod Santo:** Tom Ball.

**Adam Stacoviak:** And there's a street called Main Street, in Tomball, like any small town might have... And that main street has a store called Kids Anthem. KidsAnthem.com is powered by Shopify, it's friends of ours... We built that from a theme. We didn't build the whole storefront, we didn't do all the technical bits behind it... But this is a small, next-door -- literally, next-door neighbor friend of ours we helped get online. And her store is a large percentage of her revenue. Small town shop in Tomball.

**Ilya Grigorik:** Yup. I think that's exactly right. And just to contrast that - this is early 2000's, and if you wanted to do commerce at the time, you would be looking at an RFP with hundreds of thousands of dollars, to hire an agency, to do an integration, and then you'd have to navigate through banks... It's just inaccessible. And that's the problem that Tobi wanted to solve. And I think we've done a pretty good job of it.

And to your point, now you can start with this no-code experience, and then we have the ecosystem of apps and themes where you can start flexing and customizing. So you can bring in a custom look, you can hire a developer and pay them for a couple hours of work to really make it your own, without having to build this whole thing from ground up. And I think this is where Shopify has really scaled and succeeded over the last 15 years. And now, we've built all this technology, we've built this platform, we run millions of merchants, and we're looking at this thing and saying "Look, it's kind of like magic. Our merchants don't have to think about scale, or running Kubernetes clusters, and CDNs, and all those things. We handle that for them." But there is a subset of merchants and a subset of developers, folks like yourself, who want to have a bit more control. They wanna peel back the curtain and tweak it.

So could we use Shopify hosting infrastructure to run our own custom stack? It's not a crazy question. Historically, the answer has been no. You had to write Liquid code. You can do a lot of things in Liquid, but maybe it's not the right tool for every theme under the sun. So now I think we're going through this exercise of saying "How can we bring out some of the components that power Shopify and make them accessible to developers in a composable way?" So Oxygen is one of those pieces; Hydrogen is the framework that we're gonna talk about, the React framework... And I think we're still at the beginning of this journey. As you said, opening the floodgates - I think that's exactly right.

**Adam Stacoviak:** Absolutely.

**Ilya Grigorik:** And we still have a lot of work to do.

**Jerod Santo:** Well, should we dive right into Hydrogen, or should you give us some Oxygen first? Where should we start?

**Ilya Grigorik:** Let's see... Maybe to start, we can talk a little bit about headless commerce... Because oftentimes when folks approach -- you'll likely discover Hydrogen and Oxygen because someone, maybe a product manager or customer, came to you as a developer and said "Hey, I keep hearing about headless. I need one of those. Can you build me one of those?"

So what is that? It's a term that I love to beat up on, because I think it's unfortunately very much outdated. I'll just allegory to depricate. So if you allow me a little tour down the memory lane here...

**Adam Stacoviak:** \[12:13\] Please, yeah.

**Ilya Grigorik:** Well, where did headless come from? I think the inception and why it stuck so vividly in everyone's mind is around 2011-2013. This was when the web was going through this transition from desktop only to desktop and mobile. And that was very painful, as you guys remember. We all have memories of trying to browse the web in our little mobile streams, and pinch-zooming, and trying to tap on a link that is way too small, and you're missing it... It was just frustrating. It kind of dawned on everyone that the technology of the past, the WAP protocol and all the rest is not suitable enough. The mobile web needs to be more capable. But you can't just cram desktop web. So now we had this tight coupling between the backend and the frontend, and the frontend was synonymous to desktop web... You needed to separate those out. You needed a different mobile experience. You probably also wanted to explore a different mobile app experience, and you had a desktop experience.

So the whole meme of headless is about "Let's chop off the head, which is the desktop web, and instead focus on APIs." If we have a robust API, that exposes all of our content, databases, business logic, what have you, then we can build these different experiences. So it's kind of an unfortunate term, because as with any definition by negation, like headless - I'm headless now. It's like, "Well, great. You have an API." You have a headless storefront.

The point is not to be headless, the point is to have many different modalities in which you can sell. It's the desktop web, it's mobile web, it's a mobile app... Nowadays it's like VR apps, AR apps, you're selling on Facebook, and Instagram, and TikTok... There's all of these channels that you need to be present as a merchant to really drive commerce.

So it's not headless, it's API-first, and Shopify of course has been a provider of APIs since the very beginning. We were one of the early adopters of GraphQL, actually.

A fun anecdote... I was just looking at one of our API dashboards last week, and it's always fun to see the growth, up and to the right, and just how is the slope changing over time... And recently, we saw a peak of 1,000 QPS. That gives you kind of a sense for scale that Shopify operates. And this is purely API traffic.

**Adam Stacoviak:** What's QPS?

**Ilya Grigorik:** Queries per second...

**Adam Stacoviak:** Okay.

**Ilya Grigorik:** ...coming into the GraphQL API. So Shopify is actually one of the largest, as far as I'm aware, public GraphQL providers. I think there are other apps, like Facebook and others that operate on an even larger scale in their private use case... But as a public API provider, I think Shopify is one of the largest providers... Which is kind of a little-known fact. And we have a really smart set of folks working on the GraphQL infrastructure at Shopify.

So Shopify is headless in that sense, and I think that is one of the misconceptions in the market... It's like, "Oh, Shopify is the thing I go to build my online store." Not quite. We also have the GraphQL API and lots of merchants have built really amazing mobile and other experiences on top of that. That may be part one.

The second part is - and maybe a replacement term that's now being used in the e-commerce industry is this notion of composable commerce... Which is "Hey, there's lots of different tools out there. There's some really good tax applications, and there's some really good shipping applications, and inventory management, and asset management. They will provide APIs. Why don't we just use the best of the breed for all of them, stitch them together, and build the best commerce experience?" Which sounds really nice, and Shopify certainly plays in that space. Many of our more advanced merchants use Shopify for a set of workflows, but then extend their capabilities via other tools, by providing integrations with APIs, or just custom code integrations, and all the rest.

\[16:01\] The challenge though, as anyone that has built a distributed system will know, is just the fact that you bought the best car parts doesn't mean you have a good race car. You really need to invest into a really solid pit crew and engineering crew, to build out a system that works. This is the hard part of integration in all of these systems, and actually keeping it up and running. So this is where I think Shopify excels, or historically excelled, because we integrate a lot of this pain, so you don't have to think about it. But if you want to go to this composable route, now you have kind of a set of hard choices.

Let's say you wanted to pick a different frontend framework. So you don't wanna use Liquid. Sure. It can take a React, a Vue, or whatever other flavor. It doesn't matter, because you just have GraphQL. And you can build that out. But now you're not querying data locally or from the same data centers as Shopify. So now you have to think about the latency of your data requests. And maybe you can patch that with pre-building all of your product pages. This is kind of the statically generated route. Okay, that works. Then your product manager comes to you and says "But actually, I have a thousand or a couple thousand products, and each one of them has N number of variants", so your build tree just exploded in complexity. And of course, I also want to run A/B tests on top of that... And did I mention that I want personalization? Oh, and make sure that you architect in such a way that I can do a really effective dynamic search. And before you know it, you're kind of sitting there, scratching your head, trying to figure out how to make sense of all of this soup. And this is where we saw a gap in the existing frameworks and tools, and why we thought "Hey, first let's open up some of the technology that we've built at Shopify", which is the Oxygen runtime.

So Oxygen is the V8 -- so it's a worker runtime. Similar -- if folks are familiar with Cloudflare workers, or even AWS Lambda. It's a JavaScript worker runtime. More similar to Cloudflare than others, because we adopted web APIs. And it runs on Shopify infrastructure. It's powered by V8 isolates, and effectively you just throw -- it's an HTTP function. You've gotta accept an HTTP request, it runs your JavaScript code, it spits out an HTTP response. That's basically the entirety of its signature. But it allows us to run React code on the server. Or any framework.

So if you want to write your kind of isomorphic JavaScript where you're using React on the server and a client, you can do that. You can just throw it over the wall to Shopify and it'll run it. And most importantly, we can run it without you have to worry about how's it going to scale.

One of the nice properties of Shopify is it's a fully-hosted platform. So if you run your store, you don't have to think about "Tomorrow I'm gonna have a big campaign on Instagram... Do I need to provision more servers to handle that spike?" We just absorb that traffic; we see enough of it, and the platform is flexible enough for us to handle that for you.

So in the same way, our hope is that you can just throw your JavaScript code over the wall, the server-side code, and we will run it on top of our platform. And this is a game that we've been playing already for over a decade, so we have a lot of operational knowledge. So it's not like this is an entirely new muscle for us.

But what is new is the fact that we're running the V8 isolates. They're wrapped in Go processes, and all the rest. So there's a set of new infrastructure being built out on that side. But otherwise, this is something we're very familiar with.

And further, because we're specialized in commerce, we have commerce-specific logic. So things like block protection. It turns out if you really dig into commerce and you have flash sales, there's an entire ecosystem of malicious actors that I didn't even know exists. Bots that try to drain your inventory.

\[19:52\] If you have a really coveted sneaker drop, which is a big thing, believe it or not, you get tidal waves of bot traffic trying to drain your inventory the moment you launch your sale. And you have to build a lot of smarts to figure out how do you protect your inventory from those folks, such that they don't end up on the resale market somewhere else.

**Adam Stacoviak:** Wow.

**Jerod Santo:** Also, their MO is to buy all your inventory and resell it.

**Ilya Grigorik:** Yeah, exactly. It's a very clear arbitrage play. It's like, there's a coveted, limited release, maybe a hundred or a thousand, and you wanna buy up as much of it as possible, because there's -- people are willing to pay big bucks for a pair of well-known sneakers.

**Adam Stacoviak:** That's right. It's like TicketMaster and ticket sales for a concert. Same concept. Try getting tickets... You've gotta be there the moment it opens up, and even then, you're lucky if you get the ticket, if it's a coveted concert, for example. They sell out pretty quickly, in minutes. And that's nothing a merchant should have to -- I should have to operate a sneaker store, and my focus should be on the coveted sneaker and my customer base, and the loyalty of that customer base, not the bot network that's trying to attack my inventory.

**Ilya Grigorik:** Exactly.

**Jerod Santo:** So the bot network is actually purchasing your inventory, right?

**Adam Stacoviak:** Yeah.

**Ilya Grigorik:** Yes.

**Jerod Santo:** So you sell out immediately at the price that you named. I'm not seeing what the downside is for the merchant here... Right?

**Ilya Grigorik:** Well, your customers are upset.

**Jerod Santo:** No, the bot is your customer at that point.

**Ilya Grigorik:** Yes, except that you actually have your fan base.

**Adam Stacoviak:** Jerod's the bot writer, by the way, Ilya. \[laughter\] That's why he's the advocate for the bot, because he's the bot writer.

**Jerod Santo:** \[laughs\]

**Ilya Grigorik:** Yeah, yeah. I think it is a good point though, right? Like, what's the loss for the merchant? You made the sale. Okay, good. But you have your community. And the whole value of -- why does this thing have value? It's because you have a community that believes and wants the thing that you're about to sell, right? So if they're all lining up in a queue to buy one of these things, and they'll wake up at ungodly hours to just have a chance at it, just at Adam said... They'd like to have a chance at this. If they lose this game every single time, they'll lose faith in your brand, they'll lose faith in the whole thing, and they'll move on to some other product. So it is important that it gets into the right hands...

**Adam Stacoviak:** I guess maybe to make the game fair. The purchasing game. You're making the purchasing game fair.

**Ilya Grigorik:** Yeah.

**Adam Stacoviak:** Like, if you're a bot that's trying to play a majority role in what should be an equal play, then we're gonna (I assume) throttle you based upon some sort of knowledge of "This is a bot network, based upon its traffic type."

**Ilya Grigorik:** Yeah. And that's actually another good point, which is let's say you are solo tech entrepreneur that is willing to roll up your sleeves and say "Look, I've got this. I know how to write WAF rules." The problem is, this is a continuous cat/mouse game, as with anything security-related. And you actually benefit from scale. You actually benefit from working with thousands and millions of merchants, and being able to observe the large traffic, to build better signatures, continuously evolve them... And there are teams at Shopify that are dedicated full-time to do this. Shopify is not the only company, as you said. TicketMasters and others have the same problem. And it's annoying that we have to fight it, but it would be even more annoying if you as a merchant had to now think about that the next time you have your sale.

**Adam Stacoviak:** Yeah. Well, what you're describing really is like this technical challenge that, you know, if we can remove, abstract away (to use a technical term that we often hear), if we can abstract away the technical bits that is the hard part that you could do at scale, with dedicated engineering teams etc. for merchants at large... Is Shopify global at this point? I know we're here in the U.S. Is it global commerce? I know in a lot of ways it is, but I'd imagine if you'd take that pain away from merchants at large globally, then you make the friction to get into the game of like--

**Jerod Santo:** Selling shoes.

**Adam Stacoviak:** ...transferring value to little customers, then it gets a lot easier.

**Ilya Grigorik:** Yeah. So certainly the scope for all the work that we do is global. We are globally distributed in terms of our infrastructure, we have clients and servers across the globe... So that's certainly true. I think it is also true that there's still a significant portion of our merchants that are English-speaking countries, but increasingly it's becoming much more distributed, and I think you'll see Shopify invest into other markets as well, kind of in a big way.

\[24:15\] International selling is its own domain of complexity, and if you're a merchant that needs to work in multiple geographies, I think that's its own complex world of functionality that you need, some of which Shopify has. There's still lots more to be done.

But maybe just to come back to the Hydrogen and Oxygen bits... So I hinted at one thing, which is once you go into this world of composable commerce, and as a developer, there's a lot of complexity in "How do I connect all the services together?", one, and two, "How do I take it to production?"

So Oxygen is our answer to "How do you take it to production?" because hopefully we'll just give you a platform where you just throw the code over, and we just take care of a host of things that you don't have to think about. In the same way that you use Heroku, and you don't have to worry about "Is my Dyno running?", in the same way we'll take care of scaling this, putting a CDN in front, doing all the bot protection that we talked about, and all the rest.

The other bit is the tools you actually build great commerce experiences. Our experience of working with merchants at scale, large merchants and merchants with sophisticated needs that are actually looking to hire developers is that they're not building static commerce frontends. I think you can definitely build really high-performance, really nice, statically-deployed commerce experiences, assuming you're a certain size of a merchant, or maybe like catalog size, or you have a fixed set of products.

But once you move out the complexity curve into larger catalogs, and you want to do things like A/B testing, personalization, contextual pricing, multiple geographies and all of these things that a lot of the larger merchants have to battle with, the tools kind of fail you today. They don't give you all the right batteries included things, and you have to reinvent that wheel time and time again.

So our hypothesis - and all of our data backs this up - is commerce is dynamic. And if you buy that, I think you need to start with really fast server-side rendering as a core foundation on which everything else is built. So instead of starting with "I'm gonna build my site and push it to the edge, and then I'm going to add layers of dynamic capabilities, like A/B testing and all the rest", our bet is actually the opposite, which is you have to start with really fast server-side rendering, and then of course you add all the edge capabilities. There's a set of pages on your store that can be cached for a long period of time; maybe it's the marketing pages... Like, great. Serve it off the edge. Maybe even certain products are mostly static and you can cache this at the edge. We have the tools for that, Cache-Control headers, and all of these other things. We can do that at scale. But to really power dynamic commerce with large catalogs, you need to collocate data and rendering, which is one of our super-powers. So when you deploy your storefront to Oxygen, you get the runtime, but you also get the Shopify database, or your database, your storefront database, collocated, right alongside.

So when you're making those queries to resolve your GraphQL and other requests, they should be returning within milliseconds, as opposed to having to traverse the public cloud to get to hit the storefront API, and get that response. And that really stacks up. So we believe that a) yes, it is harder in many ways to deliver high-performance, dynamic commerce. But if you have the right infrastructure and you're running collocated data and rendering, it can go really far. And that's how Shopify is built.

**Break:** \[27:48\]

**Jerod Santo:** So Ilya, this sounds really cool, how you're talking about collocating the data and the edge functions. One of the things that I keep saying over and over again - and I spoke with Evan Weaver from Fauna on this - generalizing that problem of "We have our functions running at these edge CDNs, and yet our data is not collocated." That seems like a problem that lots of people are working on. It sounds like with Oxygen, at least in the context of your Shopify, y'all are solving that for everybody. Now, generic solutions for your random web apps is not out there, but in the case of Shopify, you're collocating that and making that server-side really fast.

**Ilya Grigorik:** I think the best way to think about Oxygen is it's a function as a service runtime that allows you to bring custom JavaScript code, which will execute on the Shopify platform, with the benefit of having your commerce data being collocated, which just allows you to build better experiences. And that runs on top of our Shopify infrastructure, which is powered by Google Cloud.

In front of that, we also have the edge CDN, and that has its own set of function runtimes, you can actually think of it as onion layers. There's a set of requests that you really want to render being collocated with the data, and there may be a set of maybe routing decisions, or maybe even some simple A/B testing optimizations that you can do, or tests rather, that can run directly at the edge.

I think this is one of the areas that are still being actively explored by the community. We saw some really interesting work done by Next; we were thinking about it with Hydrogen as well, which is -- when you're building your page, or when you're building your website, there's some set of pages that can run at different tiers in the network. At least that's how my mental model is. And how do you designate them to run in those locations?

So you could say "Maybe for this particular page I don't actually need any data fetch. Or if I do, I'll cache it at the edge. I'll make that request once. I'll pay the cost once, and I'll cache it for a long period of time and revalidate it asynchronously."

For some other types of requests, like where you're actually personalizing let's say prices for your customer, because they signed in, they have a loyalty program, and they have a stacked set of discounts - that really needs to traverse deeper into your network path, or into your topology, if you will, to hit that other endpoint, which was collocated with data and passed and serves a fast response.

**Jerod Santo:** Pretty cool stuff. So server-side rendering - let's get into the Hydrogen side. So this is a React framework... So maybe let's just start with React and we'll branch out from there. Because you're placing some bets on this; SSR is one of your bets you're placing. You also are selecting React, which - does that lock out a subset of developers? Of course, React is a large frontend ecosystem, but you do have people who love Vue, they love Svelte, they love other things. Are they able to use Hydrogen, or is this just for React folk?

**Ilya Grigorik:** Good question. So we started with React because we asked our merchants; we talk to lots of merchants for what are their needs, what are they hearing, what are they asking, and the message was pretty loud and clear, and not surprising, I think, to anyone listening to this podcast, which is - React is a very large and vibrant ecosystem, and just simple access to developers, a number of components, and all the rest.

\[32:08\] So they asked us to build something that helps them be more productive with React. So that's pragmatically where we started. At the end of the day, the goal of Shopify is not to build web frameworks. We'd like to build a really good one, to power developers to build great commerce experiences, but ultimately, our goal is to help merchants sell. So we're certainly thinking about "How do we build all of these technologies in a way that empowers developers of all flavors, regardless of what your technology choices are, to build experiences that they like?"

As we're building the React components for Shopify, we're thinking about "How can we abstract them as web components, and make them reusable across the system?" Now, is that true today? No, it's not, because we took the short path. But we're already building -- if you look at how the code is structured and how it's laid out, you can see how we can make it modular, such that even if you wanted to use a different, for example, React framework - let's say you're using Next - could you bring some of the Hydrogen components?

So Hydrogen components are Shopify-built, Shopify-optimized commerce components. At the end of the day, we're building with a core assumption that you're building on top of Shopify, and on top of a Shopify data model. That allows us to specialize and offer an opinionated set of components. If you want to use that in another React framework, you should be able to do so. I think we still have some work to do there, and we'll get there based on demand and folks willing to contribute... But all that to say - I don't think we have a strong bet on the framework, like what's the right choice. We're taking a pragmatic choice, which is "This is what our merchants have asked." And when we looked at the available set of tools in the React ecosystem, we felt like the existing crop of frameworks, and particularly ones for commerce, don't solve the right problems, or maybe don't stack the right decisions to enable this dynamic commerce experience that we've been talking about.

There's a host of really good tools for statically generated pages, but if you really wanna build a fast, server-side-rendered, React-powered experience, you have to hire some really smart people to make that work. And that gets very expensive very quickly. So most teams fail. They end up with subpar experiences, and we thought we could help. So this is why we entered into this space and said -- it's not like we've invented server-side streaming.

**Jerod Santo:** Right.

**Ilya Grigorik:** I think I was with you guys on this show ten years ago, talking about streaming in HTTP servers.

**Adam Stacoviak:** Yeah.

**Ilya Grigorik:** So this is not new technology, but it's a new stack. It's a different stack, it's a different set of choices. So now the question is "Well, I do want to use React on the server and client. How do I do that, while still delivering a really fast server-side streaming solution that is not blocking on data requests, such that I can enable the clients to quickly render at least like a visual shell of the page, provide some loading indicators, and speak to that user experience aspect of speed, not just the technical metric of speed?" Like, did you get the fast time to first byte?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I can imagine us being two years down the road, having you back on, Ilya... So we're at the opening gates of a new thing for you. You've put six months into this, you've worked closely with the React core team, so you've had very knowledgeable people involved with this project on how React works. But I can just imagine, to Jerod's question, like "Why did you choose React over Vue, Svelte, and does it lock out other frameworks?", I can imagine this as the beginning. And like any beginnings, you start from somewhere.

**Ilya Grigorik:** I think that's exactly right. We took a pragmatic choice. So if you look at Oxygen - as I said, it's a thing that accepts an HTTP request and spits out an HTTP response. It doesn't matter what JavaScript code runs inside. So any server-side JavaScript is fair game. On top of that we have GraphQL, which is framework-agnostic, of course... And now it's a question of "How do you make the right architecture decisions on the server? How you compose the response such that you don't end up blocking the response for too long?"

\[36:12\] So let's say you need to fetch product data, query some product description data, maybe figure out card discounts... Can you do those things in parallel, as opposed to sequentially and blocking, and stream that such that the user has a good user experience?" So that's a set of choices that you have to make, and that's a problem that we're solving with Hydrogen.

**Jerod Santo:** You mentioned Next.js... Did you consider a similar approach, versus all server-side rendering, but kind of a hybrid, where they have some prerendering, they also have some server-side rendering? Or is it just caching is your answer to all prerendered pages? Like, you've got a marketing page, or your About page, and instead of prerendering it, you just cache it?

**Ilya Grigorik:** Yeah, we actually work very closely with the Next team. They're also innovating and pushing the boundary on React Server Components. React Server Components is this new hot thing that the React core team dropped as a Christmas gift to the community last year... And everyone got super-excited, because it's this RFC, and it answers the perennial question of "How do we actually separate client and server concerns? Can we create a convention around data loading patterns?" Because right now, every React framework has to figure out "How do you do data loading?" You know, getServerSideProps vs. something else... You have to learn a new dialect every time you pick this up. React Server Components tries to answer that.

And further, it adds a set of new -- or opens doors to a set of new possibilities. Things like -- it wasn't possible to do component-level updates before. So if you render the page, and the user is interacting with the page, and you want to reload just a sub-tree, you can hack that via various ways, but there's no well-defined convention for how the framework itself can do that. React Server Component answers that. Also, by creating this boundary between client and server allows us to build better and more optimized bundles.

One of the pitfalls - pardon the tangent here - of isomorphic client-server JavaScript is, ultimately, we're building these React applications to run in the browser. So there's a set of assumptions about browser capabilities and browser APIs being available. You bring that onto the server, and you go "Well, it's not quite like the browser", right? These APIs are not available, and now I need to figure out - if I only run this code, do I export these exports to clients as well? It becomes really muddy, really quickly. And maybe if you're super-judicious, you can navigate through that forest, but it's a very challenging problem.

RSC (React Server Components) defines those boundaries, and at least on paper it promises to solve many of those things. And it's still under active development. Shopify has been one of the early adopters. We saw it, we played around with it, we tried to rebuild our own applications with that pattern, and we felt like it felt nicer than what we were using before... Because similar to any other framework, we were inventing our own data loading strategy. And then we swapped it out for RSC, and we're like -- look, it's new, so there's still friction for most React developers, because, well, it's a new shape of API... But you kind of get these second-order effects; it just feels more intuitive. It's easier to grok. So even though it takes a little bit of runtime for someone new, they see the filename, and it says .server, and it kind of just clicks. It's like, "Oh, I can infer what that means."

So we have the benefit at Shopify of starting anew. We're not a framework with an existing install base of thousands of apps. We don't have to move them over into this new world, which is one of the challenges with the React Server Components, Suspense, and all the rest. If you have an existing application, a lot of these things are not easy to adopt, because they change how you have to think about data loading, different state transitions, and all the rest. For better or worse, we're starting from scratch, so we're willing to take some opinionated and future-looking bets, because we have the luxury of not breaking anything... Yet.

**Jerod Santo:** \[40:04\] \[laughs\] Yet. You have the luxury for now.

**Ilya Grigorik:** Exactly. So this week -- this is maybe a good transition... So what have we launched this week? This week we launched the Hydrogen developer preview, which is -- we're not claiming it's production-quality code. In fact, we wouldn't encourage you to write production code; you could, and nothing stops you, of course... But we wouldn't encourage that, because we wanna use the period of the next couple of months to really iterate on the APIs based on feedback from real developers, and probably break things. Right now is the time to dramatically change in backwards-incompatible ways, before we declare it to be a 1.0 that folks can build production storefronts that run on Shopify... And then we have to maintain for a while.

So this is a really good time, if you're just curious about what is React Server Components, what is Suspense, how do I do server-side streaming - go kick the tires on this thing. Play around. I think we've made it really simple. For anyone listening to this, if you just type in Hydrogen.new in your browser, it will open up a StackBlitz-powered dev environment that runs completely in your browser, and you can just start hacking right away. It's a really awesome experience.

**Jerod Santo:** That's cool.

**Ilya Grigorik:** Yeah. Give that a try, and just see how it feels. If you find something that's really throwing you off, open an issue on GitHub, or ping us on Twitter. I'd be curious to hear how folks experience it.

**Jerod Santo:** Sidenote on StackBlitz - we did an excellent episode of JS Party about that, with one of the StackBlitz people. Really cool stuff they're doing over there, so... I wanna cross-promo that episode. I learned a lot from it, and it's cool to see you guys using it in this way, that really just lets you test the waters immediately, right there in your browser. Pretty awesome. Does that point have some sort of Shopify demo, or is there data available to be playing with, or what?

**Ilya Grigorik:** Yeah, yeah. So I love StackBlitz. I've demo-ed it to many folks, and I think it takes most at least a few seconds to really click what happened... Because all they did is they tapped a link, or they typed in a URL, and all of a sudden they're looking at an editor. So it's a VS Code environment, everything's virtualized, including your server runtime... And under the hood, what it does is it basically clones the Hydrogen repo, and Hydrogen comes with a starter template, which is hooked up to a demo Shopify store.

So right from the get-go, you have a preview pane on the right, which is the actual live website, with some example data, like product data and components. So you can just start fiddling with it, and change the product description, or something else, and get a feel for how it a) feels to work with this technology stack, but also for how's the shape of the data laid out at Shopify, and what are the hooks that we provide.

We talked about components, so we provide a set of components to optimize for Shopify. So they know how to intake Shopify GraphQL and render out common things, like variant pickers, product carousels, carts and all the rest, but we also provide data loading hooks, and a set of cache APIs and fetch primitives, such that if you want to integrate with, let's say, a third-party CMS, because you're storing your marketing content in Strapi or Contentful - you can do that, too. And we provide a set of built-in hooks for caching. So we try to build in smart caching strategies by default, so you don't have to add it after the fact. We do it for you in an opinionated way, but we give you the power to override them.

So we make choices like we will cache all third-party responses for up to 10 or 60 seconds, we will do async revalidation in the background, so stale will revalidate so you don't have to block an error response. But if that doesn't fit your particular use case, you can just drop into the config and change that to suit your particular needs.

**Adam Stacoviak:** I love the Easter egg. You mentioned Tobi earlier, and the launch of Shopify being a snowboard store... And I loved the Easter egg here; I'm not sure if this is intentional... I assume it is, based on that... But the store that launches in here is called SnowDevil, and it's a collection of snowboards.

**Ilya Grigorik:** \[44:15\] Yeah. So just to bring it back - SnowDevil was the original name for Tobi's store.

**Jerod Santo:** Nice.

**Ilya Grigorik:** And one of the internal missions, if you will, was - imagine you were Tobi and you were starting SnowDevil today... What would you pick? Back in the day, he was a Rails contributor. He knew Rails, so he started building -- he was working on Active Merchant, so he started building on Rails. But today, if Tobi was starting to build a store and he was a developer, what would he pick? And our hope is that he would consider Hydrogen... Because there's a platform, it's optimized for commerce, it has the right hooks, and all the rest. So yeah, it's a little bit of a homage to the rebirth of Shopify.

**Adam Stacoviak:** Yeah. Even the art is very nice too, obviously. Hydrogen is one of the arts on here, you've got Full -- The Full Stack, actually; not Full Stack, but The Full Stack, and it's a stack of just servers, or something like that... Squares in 3D... The Liquid is on there... And then the first one, which is The Toggle. I love it.

**Jerod Santo:** Attention to detail.

**Ilya Grigorik:** Yeah. We definitely went all '90s retro on the website as well. If you go to hydrogen.shopify.dev, that's the landing page which talks about the high-level value prop and features. I recommend checking that out. It also links out to some example repos for, for example Shopify Supply. Shopify Supply is the Shopify store, but like for various merchandise, where we're building in Hydrogen. So you can poke around that and just see how the team is progressing there.

**Adam Stacoviak:** I mean, I wanna go buy one of these snowboards. You've got morning, evening and night for the Hydrogen board... You've even themed the variants, speaking to the complexity of what happens in commerce... You've got the variants, issues with different products out there. I mean, I'm going to buy the nightboard right now.

**Ilya Grigorik:** \[laughs\] A brief detour. So yes, we offer Shopify components, but I think one of the super-powers that we can do here is it turns out that humble things like a product carrousel turns out to be incredibly complex. You start with a very simple -- like, I just need to show an image for my snowboard. Before you know it, it turns into "Well, actually, I have multiple images." "Okay, fine." "I also have a video I'd like to play." Maybe you wanna inject a 3D model in there. By the way, it needs to be swipeable. Did I mention it needs to be zoomable? Because I really wanna see the artwork on this damn thing... And of course, it has to work on desktop and mobile, so it has to be touch-friendly. Obviously, it has to be accessible... And don't forget about SEO, for all of these things.

And on top of that, it has to be performant, too... So don't just blindly load all these images. You have to have a really smart loading strategy for how to do all these things. And before you know it, you're looking at a product spec for something that started simple, but it turns out to be incredibly complex. And when you audit most stores, you'll find that they fail across many of these dimensions.

One thing that we can do at Shopify is we can amortize that cost. We're working with millions of merchants; we can do the research, we can figure out "What is actually a good variant picker experience?" Based on qualitative research, based on data that we gathered from our merchants... And transfer that knowledge as defaults into your variant picker.

Does that mean that every storefront needs to use the same variant picker? No, of course not. But it's probably the right starting point for most... And if nothing else, it's a good reference point, so you can take that code and make it your own, and you don't have to reinvent that wheel.

**Break:** \[47:51\]

**Adam Stacoviak:** We talked in the pre-show about Amazon having the commerce cornered, essentially... And I don't think that's true. For me, when I shop at Worldwide Cyclery, or KidsAnthem.com, which is the store I mentioned earlier, my neighbor's store - when I go through the checkout process and I see that Shopify checkout process, I can almost trust that merchant even more, because I just know that Shopify's brand cares so deeply about this cool stuff. And this journey for developers -- like, you can go to any startup out there, the opportunity for a developer, where they can go to make their next dent in the world, their next impact in the world is not limited now. Now you have the opportunity to build for great merchants on Shopify, because you've enabled great dev tools. You said before "limited by Liquid..." Yeah, you had some great tech there. Theme Kit was awesome. But it had its limitations.

**Ilya Grigorik:** Yup.

**Adam Stacoviak:** And I think now, with how the stack integrates, and all this stuff - it's just... I said floodgates earlier, because I think the future is floodgates. Developers are gonna cling to this, and build the next best thing for their neighbors. You know, that person who was an entrepreneur, who should be on Shark Tank, that may or may not be, pitching their thing... And now you're buying their stuff because they have maybe one or two developers who work with them, or whatever, to make their Shopify experience amazing, using great dev tools, not just cobbled together things that have been cargo-culted from Ruby on Rails days... That still work, and are amazing tech; I'm not saying anything bad about Liquid, but it's got limitations for the next frontenders, full-stack devs making real impact. And I think that's why I'm so excited about what's happening here.

**Ilya Grigorik:** Beautifully said. And it's not just Shopify either. I think what you said here is about enabling more entrepreneurship and more commerce on the web, broadly. There's a lot of different teams, a lot of products building really interesting technology to enable that. I think Shopify has a key role to play here, as both one of the largest platform providers, and I think you're seeing us make that transition from kind of a fully integrated infrastructure into more composable building blocks for developers. Oxygen, Hydrogen... More flexibility. Even things like Git integration. It wasn't that long that you didn't have that; it's only within the last couple of years we've enabled that. So just allowing that flexibility...

So if nothing else, if this is a world that is of interest, and I think this is a world of a lot of potential as a developer, if you have React experience, I think it's a really sound investment of your time to learn a bit about commerce. Because as you said, there's lots of merchants out there that need your help.

**Adam Stacoviak:** So many.

**Ilya Grigorik:** It's a really robust ecosystem, that you could make a really good living in.

**Adam Stacoviak:** It's an untapped market, in my opinion. For the developers out there listening, it's an untapped market. It's like walking into a room with mad skills and everybody wants them. That's what it is. There's so many merchants who trust Shopify, who - they want a direct-to-consumer -- that's what it is. They may or may not be on Amazon. This is kind of getting in the weeds of like choice, and entrepreneurship, and how they choose to deliver their products to the customers they have. But I think there's just such an interesting path there, because if you enable more opportunities for entrepreneurs to succeed, and to deliver their products to wherever - I think that's just a huge opportunity. There's so many people out there waiting for developers to make and deliver more tooling on top of this, and to leverage what you've built to make their stores so much better.

**Ilya Grigorik:** Yeah, yeah.

**Adam Stacoviak:** And I can imagine that at some point because of Shopify and the way you all think, that you may have some sort of support mechanism to train or provide docs, or some sort of university or course that can help developers get up to speed even more so on what React is, and... This is now an entry point. We may say "I'm not a developer, I'm a Shopify developer." Because it's specific to only commerce, only on Shopify, because it has that much potential.

**Ilya Grigorik:** Yeah. So I'll plug a little bit about Shopify here... Because we can unpack what you've said into different aspects as well. When you think about the Shopify ecosystem, there is a huge number, millions of merchants today that are looking for some customization. And that could be as simple as "I'm non-technical. I need someone who knows how to navigate through the admin panel", all the way to "Maybe I need some CSS configuration in my theme, to just kind of tweak it to my liking." You can apply your skills today to that.

Beyond that, there's also opportunity to build extensions to Shopify. So there's this whole ecosystem of Shopify applications; the same thing as iOS and Android applications. So you can build applications that extend your backend capabilities; maybe you have an idea for a T-shirt store, and there's specific logistical things that you need to do to run that sort of business - you can build an app that tailors to that use case, and you can plug that into Shopify such that when a merchant comes and says "I have a need for that", I can just install an app and use that. And Shopify provides all the monetization primitives and all the rest.

\[56:18\] So there's the app ecosystem. There's the "I'm an indie developer, maybe I'm an agency specializing in building this stuff." And then there's the "I work with a large merchant, as a full-time, or as a contractor", and they want a custom thing. That could be a web frontend, it could be next AR/VR experience. Actually, we're seeing some really cool innovation with AR and VR, and it still, I think, feels like hype for a lot of folks, but there's some really cool stuff being built. If you've opened the all birds app on your phone, you can actually try on the shoes virtually, just on your foot. Is it as good as real-life? No, because you don't have the tactile feel; but it's still really damn cool to be able to swap through colors and just see them right on your feet... That's really neat.

And then there's examples like ComplexCon, so a large event for the sneaker community. Last year, because of Covid, they couldn't meet in person, so the whole thing happened online. I was a virtual world, it had commerce built in, it was powered by Shopify... So it's a game that you venture through, and you could walk into a room and go into a panel, which would be a video stream.

It's completely reimagining the experience, way beyond everything we talked about here. It's not touching React, it's not anything else, but... Once you have the right primitives, once you know how to think about commerce and all the possibilities that it can unlock - to your point, I think it's just such a vast playground.

**Jerod Santo:** So do you see this -- I know it's not fully formed yet; Hydrogen, like you said, developer preview... Oxygen not even available yet; it's gonna be a 2022 thing, or maybe closed preview... What's the state of Oxygen?

**Ilya Grigorik:** Oxygen is in closed beta with a set of merchants right now. So there are folks running on Oxygen, but we're still ironing out some of the infrastructure to do effective routing, some of the security bits, and all the rest... So our plan is to make it available in early 2022. By then we hope that Hydrogen will be in robust enough shape as well, such that we can actually recommend folks to write and deploy production apps on top of this infrastructure.

**Adam Stacoviak:** I'd imagine Hydrogen requires Oxygen. We're getting kind of maybe in the H2O world potentially, with actual chemistry, and considering which recipes make something... But you can go now to hydrogen.new, and that's what you can play with. Beyond that, you would need Oxygen to throw the React code over the wall, as you said, and run it on Shopify's infrastructure. It's still decoupled, it's not ready to do beyond what you're doing, right? Is that where it's at?

**Ilya Grigorik:** Yeah, so the way I think about developer preview is ephemeral environments that you as a developer can spin up quickly, play around, test, figure out if this fits, give us feedback, and all the rest. At the end of the day, it's server-side React code. And if you can run server-side React code on your platform of choice, you can run Hydrogen. There's no direct coupling to Oxygen. In fact, if you go into our documentation, you'll find some docs on "How do I run this in a Docker container?" So you can throw this on Linode if you wanted to. Or even try to deploy to Cloudflare workers.

Our bet is that long-term, in order to unlock the full power of dynamic commerce, you do want that rendering and data collocation capabilities, and most merchants don't want to think about writing Docker configs, and commerce at scale is not a Docker container. It is a fleet of Docker containers that you need to orchestrate, and you need to figure out the CDN and all the rest. We take care of that for you.

So you don't have to use Oxygen. You could use Hydrogen, query our GraphQL API and run it on your own infrastructure, totally fine. But I suspect that most folks will find a lot of value in just deferring that problem to Shopify, to say "You guys know how to run commerce. Why don't you do that for me?"

**Adam Stacoviak:** \[01:00:02.10\] So if this is a current bet then, what bumps do you see along the road? Sure, you're in developer preview with Hydrogen, you're in closed beta with Oxygen... What are some of the bumps anticipated? What are some of the most technical challenges you're currently tackling as a team? What's the next few months for both of these projects?

**Ilya Grigorik:** I think there's still a lot of unproven technology in the React space. Adopting Suspense, adopting React Server Components... There's a promise of optimized bundles... But a lot of the tech is still being built, it is being experimented with right now by our teams. I think all of those are solvable problems. The question is how quickly. Is it a month problem, is a three-month problem, or is it a twelve-month problem?

And I suspect that it might actually be a 120-month plus problem for the React ecosystem at large... But it might be a much shorter timeframe for the needs of Hydrogen and Shopify, because as I said earlier, we don't have to think about the existing ecosystem and how do we move them over, and all the rest. So we can stack these technologies in a more opinionated way, and kind of be more forward-looking.

At the same time, that also means that we need to spend a lot of time on education, which comes back to your earlier point of like "I'm not a React developer. Where do I start? How do I learn about React Server Components?" I think that's the role that we will have to play. We will have to partner with the React team to figure out how to tell that story right, and make sure that it actually resonates and lands right.

On the platform side, running a production platform at scale is a non-trivial undertaking. So there's lots of work that we need to do under the hood to provide the right security, isolation... We have some very large stores, running some very large record-setting sales. So we need to ensure that we provide the right amount of scalability, while at the same time maintaining efficiency. One could imagine that you isolate every shop to provide the best performance, and everyone lives on their own Docker container, but that quickly gets out of hand. So how do you navigate through those waters as well? That's a lot of stuff that we have to think about, that as a merchant you shouldn't and won't have to think about, but there's still lots of questions to be answered there.

That said, once again, we come back to "This is about server-side streaming, this is about isolation, security" - these are all problems that have been solved by smart people before; we'll solve them here, so it's more a question of timeline than it is about "Is this actually technically possible?"

**Adam Stacoviak:** Yeah, it's just a time problem, not an unproven concept problem.

**Ilya Grigorik:** Yeah.

**Jerod Santo:** So when this is fully formed, do you imagine that developers will be able to create things that they can't currently create on Shopify, or do you think this is more about speed to creation, developer experience and the making the hard parts easy, not having to worry about the accessibility and the speed of the rendering? A lot of the parts that you have to think about, having that stuff taken care of as part of these components, or do you think this is gonna unlock new capabilities for devs?

**Ilya Grigorik:** I think it is both. I think it is possible to do the things that we described, like really high-performance, dynamic commerce with A/B testing and all the rest... But that has been the domain of very few, very well-resourced engineering teams... Typically, large organizations, because you can only absorb that amount of cost and technical pain at that scale... And because of that, I think we're not seeing the amount of innovation that we could, in the kind of medium and smaller-scale merchants.

Questions like A/B testing - A/B testing is still a dark art for most folks. It is technically complicated, larger organizations typically have to have entire engineering teams dedicated to this sort of thing... So one question that would be interesting to explore is - and this is both an opportunity for Shopify and the developers building apps on top of Shopify, is to think about how would you deliver an A/B testing experience that a non-technical merchant could actually understand? And how do I provide that user interface that a) just allows them to create that test, but then manages the entire deployment, while not destroying the performance of the website?

\[01:04:17.08\] It's possible to do A/B testing before. Typically, how that's done is you drop a JavaScript snippet on your page which blocks rendering, then you get a beautiful WYSIWYG editor that you tweak the strings, or description, or price even... You hit Save, and it dynamically re-renders the page after it's loaded, on the client. It's actually a really good merchant experience, but performance-wise it's a disaster. Why can't we have both? And I think that's -- if you just tap on that, and all the related questions around localization, and pricing, and discounts... There's so much to be built in this space still, and I think this is an opportunity for developers, as I said, to build apps, and for Shopify as well.

**Jerod Santo:** Do you think there'll be any ripples in the water, so to speak, with regards to the greater developer community, beyond Shopify, from your work on Hydrogen? It seems like Oxygen is clearly Shopify's side functions... But the open source side of Hydrogen - is there fruit coming out of that for folks who aren't gonna build on Shopify, or is it all simply scoped to Shopify?

**Ilya Grigorik:** I think so. I think the work that we're doing, for example, with the React core team to validate and prove out React Server Components will have a huge impact for the React ecosystem at large... I guess conditional on your belief that React Server Components are gonna become the de facto standard for React. I am betting on that future. I think it will take time, especially if you have existing apps, but it feels right based on our experience, and we're working with a team now to figure out things like "Yes, in theory it allows more effective bundles." So the idea is that you could isolate code that only lives on the server, and not ever export it to the client. But in practice, how do you actually hook that up? How do you make that work with WebPack? How do you make that work with Vite? And there's a lot of gnarly, technical things that are still being built. So we're working through that now, and once that lands, that benefits everyone in the ecosystem, not just Hydrogen.

**Jerod Santo:** Cool.

**Adam Stacoviak:** The final tweet in your thread, whenever you announced all this work and what you're doing here and whatnot - it mentions you peaking at your 2022 roadmap, and saying "Much excite." What's on the horizon? What's got you so excited? What can you tease here on the show before we tail off?

**Ilya Grigorik:** I have to be careful about what I can and cannot say... So I think the first and major milestone is getting this to production quality, and getting real merchants shipping stores. That's the obvious next step. That's true for Hydrogen, that's true for Oxygen.

I think there's a lot of potential for us to innovate on both. If we take them in order, on Oxygen's side - yes, it's a worker runtime that accepts JavaScript code, but we're not just a generalized worker runtime; we're powering commerce. So what kind of specialized APIs and services that we can provide alongside that runtime, that supercharge commerce? Maybe it's something related to A/B testing. Maybe it is a better set of caching primitives. Maybe it's CDN. There's a lot of opportunity here...

**Adam Stacoviak:** I like the maybes.

**Ilya Grigorik:** Right, right.

**Adam Stacoviak:** "Maybe it's this, maybe it's that..."

**Ilya Grigorik:** Yeah. So if you just put on your thinking hat and say, like, if I was building a hosting platform specialized for commerce, what are all the fun toys and capabilities that I could add on there that really make it more fun, more easy and more scalable to build high-performance storefronts? That's a different take than "I need to build a general-purpose runtime" that allows you to run anything under the sun. Like, could you run a blog on the same infrastructure? Sure. My guess is you'll find better tools for that though, because we're gonna specialize in commerce.

Now, in the same way for Hydrogen, I think there's still a lot of unanswered questions on the actual technology choices, as we've just described... Really investing into the components, following up on that vision of making them reusable, not just in Hydrogen, but if you wanna use them in other React frameworks, let's make that work. Also, going one level down and saying "Which of these can we hoist down into the web component layer, and just kind of bind into React?" So if you want to use another framework entirely, you shouldn't have to reinvent the product carrousel; that should just be a thing that you can just import and customize to your needs. So expanding the options I think is another avenue with a lot of leverage for us.

**Adam Stacoviak:** Very cool. Ilya, it's been great catching up. I'm glad to have you back on this show. It's been too many years; hopefully, we get you back with some of these realizations, some of the maybes of this roadmap solidified, that can be talked through. Anything left unsaid, anything else we didn't ask you about that you wanna share before we go?

**Ilya Grigorik:** Probably hydrogen.new - type that into your browser. If you wanna read the docs, hydrogen.shopify.dev, and please give us feedback.

**Adam Stacoviak:** Cool. Alright, Ilya, it's great having you, man. Thank you so much.

**Ilya Grigorik:** Thanks, guys.
