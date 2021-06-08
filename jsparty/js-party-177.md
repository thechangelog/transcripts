**Amal Hussein:** Hello, party people. I'm super, super-excited about today's show. I'm so excited I actually forgot - what episode number is this?

**Nick Nisi:** 177.

**Amal Hussein:** 177, thank you. Episode number 177. And we're talking about rendering patterns today. It's super kind of fundamental stuff to how we deliver incredible user experiences, single-page applications, server-side render, everything in between. We're gonna cover history, we're gonna cover bleeding-edge topics, and we're gonna be hopefully doing a twinkle-in-the-eye look-ahead. And we're super-excited to have a very special guest with us today, Brian LeRoux. Hello, Brian.

**Brian Leroux:** Hi. I'm stoked to be here. Thanks for having me.

**Amal Hussein:** We're stoked to have you.

**Brian Leroux:** I love this topic.

**Amal Hussein:** Yeah, it's a great topic. It's a topic that I'm genuinely concerned about fitting into, you know, an hour... So Nick, you're gonna have to keep us on track, because I feel like I'm gonna nerd out, so bad, bad host today... \[laughs\]

Speaking of Nick - welcome, Nick.

**Nick Nisi:** Hoy-hoy! I'm happy to be here. Partially rehydrating...

**Amal Hussein:** Oh, so punny. How many puns can we fit into today, I wonder...? \[laughter\] So Brian, before we get started, why don't you tell us a little bit about yourself.

**Brian Leroux:** Yeah. I'm Brian, I've been around here for a while now; I've been responsible for all kinds of bad websites, \[unintelligible 00:03:30.06\] and some good ones, too... I'm really passionate about this space and the topic, especially things like accessibility, and the web as a whole... This is Global Accessibility Day, so it's a good day to talk about rendering. I'm the CEO of Begin.com, I guess I should plug that... It's an elegant platform for building full-stack web apps, so you should check that out if you're into that... And yeah, that's me.

**Amal Hussein:** \[00:03:56.14\] That's super-cool. And you've worked on some pretty cool open source projects, and you've also been involved with the mobile web space for a very long time. Do you wanna give us an insight into that?

**Brian Leroux:** That's right, I almost blocked all that out. So these days I'm mostly working on sort of serverless tech, things that are on-demand and scale to zero. But the thing I kind of became known for, the thing I was working on for almost a decade, was called PhoneGap, and then later Apache Cordova. That really rose up when JavaScript became acceptable socially to admit you did, around the 2008-2009 timeframe.

This is a funny thing, the way I remember it anyways... JavaScript used to be uncool, and now it's like the coolest thing ever... It's like, "Oh, really?" Okay, I'm here for that... And it didn't use to be the case. \[laughter\]

**Amal Hussein:** \[unintelligible 00:04:46.07\] we've got a new tagline for JavaScript. It's like, "JavaScript. Socially acceptable since 1999." \[laughter\]

**Brian Leroux:** Yeah. It was a good run there where it was not considered cool, and it still isn't in many circles, which is funny... But yeah.

**Amal Hussein:** Still lots of trolls, I agree.

**Brian Leroux:** Yeah. \[laughs\] That's a perpetual problem with the internet; we're always refilling it with lots of negativity, as well as positivity, unfortunately.

**Amal Hussein:** TypeScript seems to be soothing some of those problems a little bit. There's a decent number of trolls who have kind of been permanently silenced by TypeScript, I think... But there's still lots more out there. So Brian is super-humble, but yeah, he's been working on the web for a long time, on some pretty cool projects, and somehow has managed to live life on the edge, I feel like... Even the serverless movement, you've really kind of got involved with that pretty early, and I think you're a subject matter expert on the serverless framework, and you're a contributor... Did you create it? I don't even know what the back-story is with that.

**Brian Leroux:** No, no, no. I was there from the very beginning, for sure. That was created by a dude named Austin, and he's got a company around that. I work on one called OpenJS Architect, which would be I guess technically a competitor, but I don't really believe in that concept in open source. They take a different approach than we do, and they do good stuff.

But yeah, I always end up -- this is an affliction of mine... I get interested in something probably prematurely, and then I go all-in. When mobile was happening, I was really excited about that. That was a big deal. Steve Jobs was like "Hey, you're gonna build websites and they're gonna run on your phone." That blew my mind, completely. The idea of even seeing maps on your phone was novel at that point. And getting directions was a pretty weird idea. So we've absolutely come a long way in ten years, and in a sense I actually predicated the whole SPA thing.

And then yeah, when I saw serverless happen, I had been doing a bunch of cloud stuff for PhoneGap actually, up to that point, and I saw Lambda get demo-ed with API Gateway in 2015, and it's like something snapped. I was like "Yeah, that's how it's gonna work. We're not gonna build balanced containers. That's a ridiculous proposition. Why would you do that? Let somebody else do that and outsource it to them."

So for me, that was just immediately obvious in 2015. Here we are in 2021 and that's still news to some people, but that's kind of my curse and my blessing. I'll see these things as they're happening and get excited about them. I kind of \[unintelligible 00:07:16.26\] maybe a little earlier than I should...

**Amal Hussein:** And for anyone who's listening, this is exactly why I wanted to talk about this topic with Brian. I feel like he's got some really unique insights as someone who's worked on these technologies, but also I think he's a little bit of a Cramer, in the sense that -- I'm curious to hear what his predictions are as somebody who's lived life on the edge for quite a long time.

Let's talk about how rendering started on the web. We know there's three primitives: HTML, CSS and JavaScript. They weren't even all official at the same time, right? HTML was first... Can you talk about that?

**Brian Leroux:** Yes, Style Sheets actually came later, and JavaScript came even later than that. And JavaScript was \[unintelligible 00:07:57.29\] comparatively years later.

**Amal Hussein:** Right.

**Brian Leroux:** \[00:08:02.24\] The first Style Sheets - you can actually see it in the source code... I can't remember the \[unintelligible 00:08:06.29\] Tim Berners-Lee had worked on... And back then it was like H1 and H2 could be styled differently and that was about it. \[unintelligible 00:08:13.18\] were much later other fun techniques... But originally, the whole concept was around the document. And I think this kind of gets forgotten sometimes, but there is no JavaScript without that document. You have to render a script tag at some point in order to get the JavaScript running. So that's the very first thing that's gonna happen, and it's a pretty guaranteed thing to happen... Whereas the rest of this stuff isn't necessarily guaranteed. We don't really know for sure if that thing is gonna load; the sub-resources might be turned off. They might be turned off for good reasons, because of accessibility, or they might be turned off for bad reasons, like bandwidth, or network, or who knows why. But that HTML will always get there, and that'll be the first thing... And that's really where we all started.

When I first, first started looking at this stuff many years ago, it was pretty much CGI scripts and Perl, and good luck with that. Then time prevailed, and Microsoft decided they'd help us, and we got ASP classic... Somewhere in there Cold Fusion and PHP happened, and in all these cases we were running a dynamic process; a trusted process, we would call it. It was a process I controlled, and that would generate HTML usually based on some kind of database rows, or something like that, and return it.

Then at some point around 2007-2008 (I think it was) GitHub did GitHub Pages, and they were like "Hey, we could just do static assets and we could pre-render this stuff." And I think a lot of people thought that was a pretty good idea for a large number of use cases, especially static content, content that's not changing. No point in using a dynamic process for that. It doesn't need to be trusted if it's public content, so you don't have to have any calls to a database, or anything like that... So that was the original pre-rendering thing; it never really had a name... And then weirdly, I guess, somewhere along the line, Netlify decided to call it JAMstack, although I still don't quite understand how JavaScript APIs and markup equals pre-rendering, and I don't think it does. They are different things, and those goalposts are currently moving.

And yeah, I guess SPAs became a bit of a thing too, when JavaScript became socially acceptable around 2009 timeframe. There were a lot of projects out there that were trying to be mobile. And I'm not talking about \[unintelligible 00:10:40.25\] I'm just talking about web pages.

**Nick Nisi:** Dojox Mobile.

**Brian Leroux:** Yeah, and it was like, pinch and zoom to get to the form... It was terrible. And no one liked that. Reloading a page over a 3G network, a flash of unstyled content... Ugh! It's just bad. So SPAs became really popular as a way to deal with that navigation transition jink, and especially popular in embedded web apps, like PhoneGap/Cordova, Electron \[unintelligible 00:11:10.01\] of the world. And it's just continued to get popular, although I don't know that it is necessarily appropriate for all things. Browsers are faster now, and none of these are good at that. That's kind of my disclaimer around this - if you're building a single-page app, that's probably appropriate for your context, and good for you. That's awesome. And there are trade-offs that come with that. It might not be appropriate for all contexts. If all your data is dynamic and trusted and needs to be accessed through a database, because it's secure, and it needs to be more than one user that can access different private data, then that has to be dynamic. You can't pre-render that. So it's not a bad thing, it's just the constraints of the use case that you have.

\[00:11:58.12\] There are different ways to deal with that... Single-page apps don't have to be static per se. They can call out using APIs, but now we're inviting Spinorama to the party, and not everybody likes landing on a page full of spinners... There's that trade-off, which maybe doesn't matter. I'm just gonna keep hedging here... \[laughter\]

**Amal Hussein:** Spinorama... That was quite the storytelling journey, thank you. Spinorama - I'm gonna totally use that from now on. I just call it like the Wheel of Death, or something...

**Brian Leroux:** My bank does this to me. So much anxiety... And I know that they think they've got a good Lighthouse score, because those spinners load so fast... But the last place I wanna see a non-deterministic page is my bank statement. The last place. I want that rendered right away. I wanna know that you have that data and it's safe. And all they're telling me is like "Yeah, we might get to that... There's gonna be some eventual consistency here..." And often there is. Some spinners \[unintelligible 00:12:58.02\] and others one don't, and it's like "What is going on on this page?!"

**Amal Hussein:** Right. Oh, gosh... You mentioned SPAs being this thing that made mobile particularly painful, I would say viewing the web from a mobile device... And for me, I kind of think of SPAs as something -- I feel like they were totally designed for desktop. So it's really interesting to even hear you talk about the mobile case, because I don't -- when single-page applications became a thing... I don't know, was this like sometime in early 2000's, or something like that, is like when they kind of started to become a how, new thing? Frameworks like Backbone, and Angular kind of popularized -- was there something before Backbone that helped with...? I feel like CanJS or...

**Nick Nisi:** Dojo...

**Amal Hussein:** Dojo, d'oh. Yeah.

**Brian Leroux:** Dojo already did all that, yeah.

**Amal Hussein:** Of course, yeah. Dojo did everything first, right?

**Brian Leroux:** Yeah, yeah.

**Amal Hussein:** I was like "What else...?" I'm like "I know Backbone wasn't the first..."

**Brian Leroux:** It's true.

**Amal Hussein:** Yeah. And I'm sure even before that, a bunch of unknown -- kind of just one-off tools or processes, I'm sure people were... It's just kind of like when did it hit big; but somewhere in the early 2000's. And desktop was like -- you know, folks were just really profiling for desktop, and the whole thick client movement... It was like, "Oh, move everything to the client." Everything was server-rendered previous to this, and now with things like Ajax we had this way of doing partial rendering in the client, and it was all about trying to make experiences fast and optimized for hardwired desktop connections. And that's something that we're just still so stuck with in 2020... The web has moved on, it's accessed more on tiny devices, that are touchscreen, and that have internet intermittent connectivity... And still, our primary use case, even when new products roll out, we are assuming hardwired desktop. It's interesting how that SPA architecture has really stuck around for this long.

**Brian Leroux:** Well, it's getting good... And it's never gonna recreate the whole browser, as good as the browser can be... But it's getting pretty good. And the tooling is getting pretty sharp. And the frameworks allow people to have a consistent mental model to work against their artifact. So instead of having a clean separation of concerns, we have one mental model for everything, and everything is coming out of that one place... And that's nice. There's an arity argument for simplicity. It's more simple if there's only one way to think about your JavaScript.

Unfortunately, that JavaScript probably runs in a couple of places. It's gonna run in a node and it's gonna run in the browser, at least... And those are different runtimes. And that \[unintelligible 00:15:52.14\] mismatch, which does create problems. Yeah, I think it makes sense... The pendulum always swings around between client server over the years, and we're fully, deep in the client now, and a lot of people are going "Hey, this doesn't smell right."

**Amal Hussein:** \[00:16:08.09\] Yeah, and people are trying to -- definitely, the pendulum has swung the other way in terms of thought circles. Obviously, there's the web in reality, and then there's the web that we are striving for. Those are two different things, and I think the intellectual circles and best practices have shifted towards "Hey, SPA probably not the best use case for most things." However, it's not one-size-fits-all. It really depends on your use case. It's server-side rendered versus not... There's this rubric that you need to go through for yourself, and make sure that you're not over-optimizing either, because you don't wanna try to solve problems you don't have, which is a tough thing in our community, because there's a lot of hive thinking. It's like, "Oh, let's do this new thing", without really understanding why and what problem it's solving.

**Nick Nisi:** Do you think that that is what precipitates these pendulum swings back and forth between server-side and client-side? It's something popular, like Facebook, for example, solving their big, massive at-scale problems with something like React, and then everyone following that, and then now maybe swinging back to more of like a server-side thing with Next.js, or things like that? What do you think precipitates that to just constantly swing back and forth?

**Brian Leroux:** Well, there's lots of ways to look at this lens. I think appeals to popularity and authority are a big part of it, for sure. No one got fired for buying Oracle in the '80s, and no one gets fired for choosing React today... And it's a really solid question, because I don't think there's a clean answer to this one, like "What are the predicates for shifts?" There are massive technology shifts going on right now. Pre-rendering has truly been a solution for cold start. It takes a second to talk to that database... Whereas if you pre-render and you eat that cost locally at author time, with your build step, your user gets a much faster experience. So that is slowly becoming no longer true. Computers are getting faster, it's not a controversial statement. Networks are getting faster, it's pretty obvious that's happening as well... So do we need to eat this step anymore? And will we continue to need to eat this step on our local dev machine? I think the answer is probably no, as of like a few years ago, but it takes a while for this stuff to catch up.

Other things changed, too. Like I said, it used to be pretty socially unacceptable to ship JavaScript to the client. Clearly, that has changed. Now it is acceptable to ship as much JavaScript as you want to the client. And maybe that's worth examining in the lens of accessibility, because I don't think it is actually true that it's super-acceptable for all cases... But it can be for some.

The beauty and the wonder of this whole thing that we get to work on is that it is diverse... And thank God there's so many options and that we have this amount of complexity and confusion... Because the opposite is way worse. The dead years of the web, when IE was the dominant browser and had no innovation at all was horribly painful. We had to resort to some pretty ugly hacks. We used to manually make rounded corners. Can you believe that? Like, what the hell? Why were doing that?! \[laughs\] And where would the world be now if we were spending time on that, like in those dead years in the browser?

**Amal Hussein:** Seriously. Yeah, I couldn't agree with you more. Well, in the next segment we're gonna get into some of the specifics around what were kind of the pivotal, game-changing moments around rendering patterns, and we'll dive into some of the bleeding-edge, super-forward-thinking architectures and patterns that are being tossed around in what I like to call the Cigar Club of JavaScript... You know, the "smoking cigars and intellectualizing on how the web should be" community. So we'll get into that, and more.

**Break:** \[00:20:11.02\]

**Amal Hussein:** Wow, so what a wild journey the web has had, through its discovery... I heard a long time ago the web being described as being in its teenage years, or in its kind of like 20's, so it's still very much discovering itself... And that's maybe a permanent feature of the web, the constant innovation and discovery. Earlier you were saying computers are getting faster, so we're kind of being saved by our computer power improving... However, for me there's a linear correlation there with also web apps being more complex.

**Brian Leroux:** Totally.

**Amal Hussein:** So yeah, our hardware is getting better, but we're doing a lot more, so it's a challenge.

**Nick Nisi:** And we might hit a wall with one, with Moore's Law slowing down... So will we hit a wall with complexity, or will that just keep skyrocketing fast?

**Amal Hussein:** Yeah.

**Nick Nisi:** I know what I think... \[laughs\]

**Amal Hussein:** Right. Yeah, you should start a betting pool on that. But there's been some really key moments for the web, around not just actually native web APIs, but also tools and technologies that have really helped with how we pivot and create better experiences for our users... Kind of getting into some of those, like Ajax, CDNs, serverless APIs, ESM, web workers... Even GraphQL has changed the game for shipping less data on tiny devices, and reducing the API maintenance surface area for developers. You don't need to maintain a mobile version of an API. So yeah, can you kind of talk to some of the things that you see as really kind of game-changing?

**Brian Leroux:** Well, Ajax was definitely one of the things... You don't hear that one very often anymore, but it used to be--

**Amal Hussein:** Nobody loves Ajax.

**Brian Leroux:** \[unintelligible 00:22:52.19\] They just call it partial hydration, or something... \[laughter\] Jesse James Garrett is the guy that coined the term. He used to work at a company called Adaptive Path, and what he predicated for was this tiny API that Microsoft actually \[unintelligible 00:23:11.19\] people that look at that and they see XMLHttpRequest and it's like an annoying API... But it used to be the way to make a network request from a client to the server, and back then we did XML... \[laughter\] So that was a while ago \[unintelligible 00:23:37.06\] And funny enough, people used to actually send document fragments very often. So you would send chunks of HTML over the wire. So this wasn't a new thing that had been recently discovered; this has been going on since IE.

**Nick Nisi:** It's called a Hotwire...

**Brian Leroux:** \[00:23:53.24\] Yeah... \[laughs\] I don't know. Ajax really lifted the JavaScript thing out of the Dark Ages. At that point it was generally considered a thing you would use for validation and that would be about it. You'd validate your form so the user didn't have to submit it to discover if they've entered something incorrectly. And then Ajax gave us permission to start rendering little chunks of UI, and that really started snowballing fast into where we are today, where we're outsourcing as much to the client as we can.

CDNs have been a pretty pivotal thing for this, especially recently. A CDN used to be where I put my fonts and stuff, and now a CDN is like the fronter for everything that happens. It is the sort of API gateway for the user interface.

**Nick Nisi:** That's Content Delivery Network, in case \[unintelligible 00:24:46.22\] aware.

**Brian Leroux:** Yeah. And CDNs are a funny one, because people toss a turnaround now for just about anything... But really, it's supposed to mean that there are data centers closer to the user. Many of the people purporting to be CDNs do not operate data centers; they build on top of people like Amazon and Akamai to do what they do... And the idea is you push the content closer to the data center where the person is, and now you're only bound by the speed of light, and that's kind of nice. CDNs typically only deal in static stuff, although that is changing fast, and we're gonna start to put functions on the edge.

**Amal Hussein:** Yeah, so much edge compute happening

**Brian Leroux:** Mm-hm.

**Nick Nisi:** There used to be best practice info out there about loading your static JavaScript from CDNs, like jQuery or those...

**Brian Leroux:** Yeah.

**Nick Nisi:** Yeah, because then it would be shared by everyone, and you probably already have it loaded by the time you got to your site.

**Brian Leroux:** Yeah. And we've kind of lost that with the bundle thing a little bit... And probably for the better. \[laughter\] The joke would be we don't want John Resign to go rogue and take out half the internet. If you ever met John Resign or seen him speak, the idea of him going rogue is pretty funny, but...

**Nick Nisi:** But that did happen, right? ...with I think Douglas Crockford and the JSON parser - am I wrong?

**Brian Leroux:** Yeah, this is tickling a cobweb in my brain right now, but... Anyways, the idea would be you can't really necessarily trust the internet. And if you're loading your source code from some third-party that you don't control, then you might have a bad day, your data could get exfiltrated, cookies could get stolen... \[unintelligible 00:26:27.10\] I think that's a case-by-case. If you're a financial services company or you're dealing in healthcare data - yeah, load on your own same origin, don't use a third-party CDN. If it's a static web page for your personal site or something, no worries; it's probably fine.

**Amal Hussein:** Yeah, actually one of my favorite security headers is around just having a very strict allowed list for what origins you will accept running JavaScript from. And that's such an easy way to get a bunch of really good coverage around not having people hijack your website, or whatever.

**Brian Leroux:** This is the beauty of the web - the same origin sandbox is so powerful, and it has allowed us to outsource untrusted computers all over the world, and clearly in devices in your pocket, like your phone. And that's a little bit getting lost in the complexity of the day, but at the end of the day if you can put everything on the same origin, with the same URL, and you control that DNS, then you have a really high guarantee if that sandbox is secure... Which is a publishing -- we've never really had this in the history of humanity before. Anyone can publish anything, anywhere, at any time to a trusted place, and verify that that's probably safe and good... It's kind of nice.

**Amal Hussein:** \[00:27:56.23\] Yeah, totally agreed. So looking at this movement of JAMstack and/or the statically-rendered content, or whatever... Serverless APIs I think have been a huge enablement for that as well, and also to a degree not just serverless APIs, but I guess CDNs too in theory have also really -- like, the CDNs plus serverless APIs have made that marriage really tight...

**Brian Leroux:** Yeah. The thing that kind of happened - I think, anyways; and this is super up for debate in the comments... We realized that we needed indemnity, or determinism, or another fancy word is immutability. We wanted to get the thing we thought we would get when we deployed that thing. So in the dynamic world we've got lockfiles, and infrastructure-as-code. In the static world we don't need any of that. If you pre-render it, it's done. You baked it, you can see it, and when you deploy it, that's what happens.

In the server world - servers are very stateful. They have all kinds of stuff going on. They've got operating systems, they've got runtime, they've got patches, they've got network adaptors, they've got different cloud providers. They're very, very stateful... Which is a nice way of saying they're bug farms, and you kind of end up in this place where idempotency is very difficult to achieve, and so reproducibility is difficult to achieve, and if things aren't reproducible, then you're gonna have a bad day trying to fix that bug, because you can't reproduce it necessarily if it works off of my machine. It becomes a real problem.

So the CDN and the move to static is a big endorsement of being stateless and deterministic. And these are also faster. There's just like a lot of guarantees here... And I don't mean runtime faster, I mean faster developer velocity. When I can reproduce a bug quickly locally, that's exactly the same to the version I thought it was, and then prove I fixed it - that's nice. I get to go home at five.

If I'm running something on my machine and I'm like "It works here... It doesn't work when it ends up in Kubernetes...", that's a bad day. That's kind of how we got here. But the problem is if we do all this work at author time, it gets slow. And there's no real fix for this one. If you have a million-page website, you're gonna wait for a million pages to build. This is a good problem to have, by the way; you've got a million pages of content... Sweet. That's awesome. It sucks though if you change the copyright and you've gotta wait for that whole thing to rebuild, to discover that you got the spelling wrong on one page, or something... And I guess that kind of pushes us into this new world, where we're trying to find hybrid techniques for dealing with that build step.

**Amal Hussein:** Yeah. I mean, optimizing that feels very much like a problem that we can engineer ourselves out of... You know, with hashes, and just more cached binaries, and whatever else...

**Brian Leroux:** Fast compilers...

**Amal Hussein:** Exactly. So we can totally engineer ourselves out of that problem. I think web workers and service workers have also done some tremendous things for improving the web, in terms of getting things off the main thread with web workers... And service workers have kind of changed the game of -- yeah, there's a proxy in the browser now, and you can have really smart caching managed via JavaScript, and not via complex headers. You have a lot more flexibility in how you cache, and your strategy can change really in a way that's very responsive to your user's client. I think that's for me -- I feel like service workers are probably my favorite... Like, if I had to pick one API that came out in the past ten years - API, tool, framework, whatever - it would probably be service workers. They're just so under-appreciated in terms of how powerful it is to have a proxy in the browser, and what that means for just a caching strategy, and how easy it is to progressively create that strategy. It's huge.

**Brian Leroux:** \[00:32:02.04\] Yeah. We use them for dealing with state with our WebSocket. So what we used to do was we had a listener \[unintelligible 00:32:08.21\] modify some state, and then we'd have something observing that state, and then that would re-render the DOM elements that we need to re-render... And like you said, it's kind of computationally expensive, and you block up the main thread, and sometimes you caught a moment where you'd be scrolling and you knew it was talking to the WebSocket when it did that... And as soon as we pushed that into a worker, all these issues went away, and now we have this wonderful little state manager hanging out in the background, that's just chucking data into the DOM indirectly.

Well, that, ES Modules and Fetch. These are all kind of semi-related things. Networking, backgrounds tasks \[unintelligible 00:32:48.12\]

**Amal Hussein:** I'd say indexing too, if we're talking about fetching. How could I forget...?

**Brian Leroux:** It's a big one...

**Amal Hussein:** Yeah, IndexedDB giving you a really smart -- not the best API, but a smart way to be able to manage your cached or persistent data. You can version it, and it's great. Some really good libraries help you deal with some of the quirks around the API, so we'll link them in the show notes; or good abstractions on IndexedDB. I don't even think it's recommended that you -- folks are like "Just use a library to abstract it", because it on your own is just a little much...

**Brian Leroux:** I would say so... \[laughs\]

**Amal Hussein:** But yeah, so all these awesome web APIs have kind of changed the game. ESM totally -- how could I forget about ESM? ESM is the probably true kind of --

**Brian Leroux:** I wish I could forget about ESM... \[laughter\]

**Amal Hussein:** Well, I mean, if you're from the Node community maybe... It's a bit painful getting there, but you know...

**Nick Nisi:** Yeah, I was gonna say, I think that's probably an easier one to forget because it's been kind of abstracted away for so long that you just forget about it not actually being something that existed natively in a browser... And now it does.

**Brian Leroux:** Yeah. We actually as far back as 2016 have been using ES Modules - naked, standard spec ES Modules, not the transpiled kind - in the browser very happily. I've been telling people this for years; it's fast. And finally, in the last six months people are like "Hey, did you know it's fast?" I'm like, "Yes, I'm very aware it's fast... It's built into the browser, of course it's fast."

The only downside is after you get a larger graph, you end up in a waterfall. So now we're still stuck with the bundle step, but... What a joy to have -- and I don't know if y'all have been playing with Deno at all, but to have a runtime like Node, except for it uses ES Modules... It's a lot of fun. And it's clear to me -- this was and still is extremely painful; it shouldn't have gone this way. We should have \[unintelligible 00:34:58.19\] but we didn't, and that's fine; we are where we are. And where we are is we have two module systems and they're competing, and we're fixing it up by adding a third and compiling into the native one... \[laughter\] That's not great, and it's probably not gonna last all that long. Eventually, people are gonna be like "Hey, we already have a module system. Why are we compiling this other third one?" It's a bit of a pain, because there's so much great JavaScript code that's been written in the last decade that is probably going to get abandoned to \[unintelligible 00:35:28.10\] because we didn't follow it along with the latest stuff... And people can say that you can transpile to fix that problem, but do you know what's better than transpiling to fix that problem? Not having that problem.

**Amal Hussein:** Not having that problem, yeah. \[laughter\] Oh, man... I feel like there's not a world where we're never going to have no build steps. I mean, even just beyond transpiling - there's so many other benefits that you can get, just with accessibility, and whatever else, and just managing your different versions for different browsers... But yeah, I hear you; if we could just end one thing in JavaScript, I'd say yeah, let's just get rid of transpiling. Everyone just use JavaScript that's legal...

**Brian Leroux:** And spec...

**Amal Hussein:** \[00:36:14.13\] Yeah, and spec... Yeah. Especially for our dependencies, it's a huge bottleneck. But anyways...

**Nick Nisi:** Meanwhile I'm just over here, writing TypeScript, and completely relying on transpiling.

**Amal Hussein:** Oh, man...

**Brian Leroux:** You are right, by the way - there is no version of this story where we don't do it. And there's technical reasons for that. We can sort of put a pin in this one as a discussion point, because sometimes people do think it's like an either/or, but there is no or. The network is hostile, the network is strange and weird, the topology is unknown, and the performance is unknown... And there's nothing we can do about that. And because of that fact, we have to fingerprint our files, which is a fancy way of saying we need to be able to invalidate the cache. If I have index.js being served from my origin, usually that's gonna work, and usually you'll get a fresh version over time. But you can't guarantee that. There could be a third-party proxy in the way that caches that index.js forever... And this isn't hypothetical, this happens a lot out there. So we have to fingerprint these files in order to invalidate the cache, so that our users get the latest version every time... And we have to fingerprint the file, and we have a build step. No one wants to look at a file named index-gui.gs. That's gonna be uncool.

**Amal Hussein:** Yeah, yeah.

**Brian Leroux:** So for those that are unfamiliar with it, fingerprinting is a technique where we'll create a hash of the content from the file, we'll append that to the filename; this ensures the file is unique, and then we can cache it forever. And then if there's a new version of that file, the fingerprint will be different, and that's what will be loading the next time.

So there's always a build step to fingerprint. If you're doing this in any form of scale, you'll discover this caching issue with the network. As soon as you've accepted that there's a build step, that's when things get difficult or tricky, because now it's like "Well, I might as well use Babel stage 6 stuff." That's where you end up with decorators being rewritten three times.

**Amal Hussein:** Right. "I'm gonna use my own JavaScript. My own custom transform. This is how I would have written the Map API."

**Brian Leroux:** Right.

**Amal Hussein:** Anyways... I love how Brian's "We're gonna put a pin in it" turns into like a masterclass... This is my favorite type of nerd, so thank you, Brian... We've been yapping so much, we haven't even had a chance to get into some of the fun acronyms that I'm excited to learn more about in today's show, like ISR, and DSR, and some of the other things that the cool kids are talking about. So folks in the cigar club - or whatever we're calling it, the intellectual, philosophizing club - just hang tight for the next segment.

**Break:** \[00:38:40.19\]

**Amal Hussein:** Okay, folks, we're gonna try to contain our nerd for this last segment, so bear with us... We've talked about some of the evolutions on the web, in terms of rendering patterns, and some of the -- not even evolutions, I would say revolutions sometimes, as we've made this 180, full-circle... Either way, we've kind of--

**Brian Leroux:** We're coming to 360 now.

**Amal Hussein:** Yeah, we're coming to 360.

**Brian Leroux:** The client render was definitely a 180 from the server-rendered...

**Amal Hussein:** \[00:40:07.07\] Oh yeah, client render was 180, and now we're coming back to 360. So we've talked about some of the cool APIs that have powered these changes, they've enabled this stuff... So now let's talk about some of this stuff that's really, really bleeding edge. There's some patterns being pusher, like ISR and DSR. What are these thing, Brian?

**Brian Leroux:** Well, I think they're primarily marketing, so we've gotta keep an eye on that... But I don't think that's necessarily bad. Sometimes marketing does turn into categories and thought processes... But the sort of crux of the problem with the client rendering everything - you've gotta wait for that JavaScript to get loaded. If you pre-render, you've fixed that, but now you've gotta wait for the build. So is there a happy medium? Can we do some build, but not all the build? And this is where incremental static render comes in. It's definitely kind of more marketing than a term I've heard organically grow out of community consensus. It's basically Vercel's idea.

Vercel's idea is your component model will be aware that it is going to come in as an initial state, and then asynchronously it will statically render, and the next person will always get the static render... But somebody's gonna get \[unintelligible 00:41:20.11\] I think sometimes people call it stale when revalidating, or something like that...

**Amal Hussein:** Yeah. I was gonna say, that sounds like the stale-while-revalidate pattern; I didn't realize it was kind of being rebranded in this ISR...

**Brian Leroux:** Yeah... \[laughs\] So I'm gonna try really hard not to be cynical, but I do wanna just point out when these things are organic, community terms that have come up from a consensus of fellow, collegic technologists, or it's something that came out of a marketing blog post.

I just this was more of marketing blog post, and it sort of pushes things towards that Next.js or Vercel's idea of stale-while-revalidate, which is fine; it is a very valid technique. You do end up with Spinorama as your goal, but maybe your goal is okay for that. Maybe your app is a back-office, widget ordering form for your supply manager who doesn't care if there's a spinner. But if it's the place where I'm gonna get my vaccine appointment booked, maybe not a spinner. Maybe that should be a form that loads for sure. And this is where things get sort of tricky.

DSR is Netlify's response to ISR. Netlify saw ISR and was like "Well, that's cool, except now you don't have idempotency; you don't have an immutable, deterministic build. You've got a placeholder that's spinning before you get the thing that you thought you would get." So their model has always been about these immutable deploys, and you always get the same thing... So DSR is the same thing as ISR, except for it's distributed static render, and the idea is somebody out in the network pays for that first load. So it will render it, it renders it on demand, but progressively, when it's being requested. And that's it.

So DSR is like ISR, except there's no spinner... But otherwise it's roughly the same idea. And I guess these are just trade-offs... Like, if you've got a gigantic content site and it's got hundreds and hundreds of pages, and you just change the copyright, that's a pain in the ass. You don't wanna wait for that whole thing to load. So sure, you're gonna push that up, and then let someone else pay for that app render; when it needs to be requested, it happens. And I think that's totally cool.

I don't know how you model this yourself. These are kind of proprietary to the Vercel framework and the Netlify platform. So if you wanted to port these concepts over to Azure or AWS or something else, you'll probably have to do some of your own magic to make that happen... But ultimately, these are just tricks for pushing that cache invalidation problem around who gets the stale and who gets to deal with the build step... And increasingly, programmers are like "I don't wanna deal with this. I wanna get back to work, I've gotta close these tickets. I've got stuff to do, and waiting on this build is not part of that."

\[00:44:17.17\] This is where for me things kind of start heading back in a full-circle direction, especially as technology improves. Lambda cold start used to be a few seconds, now it's 100 miliseconds. Dynamic render was a Lambda function that was actually not all that unreasonable, and lots and lots of people out there are doing it now, BBC is probably the most famous one, where the whole website is coming through a Lambda function on the way out... And people will say "Oh, that's more slow", or inefficient I've also heard, but it doesn't have to re-render ever time; you can cache. We still have headers, the web still works. Is it inefficient? I don't know. It's 10 cents for two million requests of Lambda. It seems pretty efficient to me. It might not be efficient to AWS, but from my perspective as a customer it's plenty fine for most cases. I should ask, do we have anything else to add on the ISR/DSR?

**Amal Hussein:** I have some thoughts... What about you, Nick? Do you wanna chime in there?

**Nick Nisi:** I don't know, I was trying to think -- because I hadn't heard of these terms before, and that's because I really haven't done a ton with Netlify or Vercel. So from that standpoint, it does seem more like marketing, just because like you said, it's locked into their respective stacks. And then I started thinking about how I would as a developer work with this, and work with it locally... And I guess with both of these, because you kind of have almost two different renders, or two different ways to getting to that - could you have bugs that get introduced at that point, potentially?

**Brian Leroux:** Yeah, ideally there is this immutability, and everything's gonna be the same every time... And I think in the case \[unintelligible 00:46:01.20\] These things will introduce a dynamic process at runtime, which is definitely walking in the non-determinism path. Could it introduce bugs? Yeah. Will it? I don't know... \[laughs\] Maybe. How often and what kind of bugs? Like, Lambda is down and you're depending on that to render your thing - it's a bad day. But if Lambda is down is down, lots of people are having a bad day...

**Nick Nisi:** Yeah, that's true.

**Amal Hussein:** Yeah, seriously, that was the thought for me. It totally seems like a very undeterministic way of having users experience your website. There's so many paths... There's just users kind of creating their own journey, and you don't know what combination or permutation of stuff is gonna cause something weird... And for me it just feels like -- you know, there's the whole "How do I lose weight?" question. "Just exercise and eat generally okay", and I feel like "Just ship less JavaScript, keep it lean", and use tools like web workers that have been around in the browser for a very long time. All the major browsers have had them for a while, to kind of do some pre-fetching, or whatever. I feel like there's existing patterns that use open web technologies where you can achieve the same or better results even, without being locked into a stack per se, or a service provider contract.

**Brian Leroux:** Yeah... It's not an easy one, because if you've committed to this architecture and you're still \[unintelligible 00:47:52.21\] and your builds are blowing up to two hours...

**Amal Hussein:** Yeah...

**Brian Leroux:** \[00:47:57.21\] ...that's a problem. You need better iterations from that. So any solution, any band-aid along the way is probably acceptable. If your builds are two hours though, and now you're adding band-aids, it might be time to evaluate "Hey, this data is kind of dynamic... Maybe it's time for us to consider not pre-baking all this stuff."

**Amal Hussein:** Not trying to pre-bake everything, yeah. And that gets into something else that we'll cover in just a bit, which is really some of the decisions -- like, "How do you develop a rubric for yourself, and your team, and your product? What solutions do you really need?" and trying to be as objective as possible, because it's really tempting to do the hot, new thing... But "What you need?" is often different than "What do you want to do?"

**Brian Leroux:** There's so many weird stakeholders in this problem, too... I mentioned this at the beginning, that it's World Accessibility Day, and that's an important topic for this whole thing... The end consumer, the web consumers out there are all \[unintelligible 00:48:58.28\] And whoever they are, they're your customer, and it's who you wanna be working backwards from. And if you really do care about this thing, the craft, then you've gotta work backwards from a place of the most inclusive, the most accessible place... And accessibility isn't just about people or disabilities, it's also about people on a moped with devices, it's about people that are on networks that might be hostile, in countries that might be hostile... So there's a huge amount of power we have. There's not a lot of web developers compared to how many humans there are on the planet...

**Amal Hussein:** And how important the web is.

**Brian Leroux:** Yeah. And it's our privilege to be able to author for this platform, and part of that - it's our responsibility to live up to this lens. So that's where I'd like to start the rubric of thinking "How do we be the most inclusive thing possible, for the most people possible?" And that will start with rendering HTML. \[unintelligible 00:49:57.15\] And this isn't to say that you have to work with JavaScript disabled, but I think you should try, and I think this is -- I'm gonna get a little challenging for some folks, because they're gonna wanna say "Oh, everyone's got JavaScript enabled", and you're right, most people do. But 1% of people don't, and that's actually millions of people, and those people matter to you.

**Amal Hussein:** Yeah, they do. I feel like the web is a protocol, and there's lots of different clients... And browsers are certainly the most popular client, but... Terminals are clients. Emacs browsers are clients. And we don't need to optimize for the minority use case, but it's important for us to include it in this. Give those folks something. 1% of the web is millions of people, and it's just really important to build a web that's open to everybody, and not just the select few.

With that being said, there's some interesting other movements around, like islands, partial hydration... And one for me -- I don't know if we'll have time to get into too much of those, but one for me that's very exciting and radical is Astro from Fred Schott. He's the creator of Snowpack, and Skypack, and has been kind of a huge advocate of ESM on the web for a long time. He worked on something called Pika Package a while ago, that morphed a bit, but it was basically like "Hey, how do we identify ESM compat dependencies in Npm?"

But anyway, so Fred Schott is collaborating with some folks on this project called Astro. It's still very much in development, but we'll link to a demo and a talk that he did at Speakeasy JS. He showed this JavaScript framework that only renders HTML by default... And if you wanna render JavaScript and you wanna have that level of interactivity, it's something that you have to be intentional about... So it kind of flips the script, so instead of by default rendering lots of JavaScript etc. It's like, the JavaScript that you need, you have to be intentional about when it's loaded and when it's used. It's almost like JavaScript on a tap, where you get to turn it off and on. But yeah, any thoughts on Astro, and islands?

**Brian Leroux:** \[00:52:20.03\] Yeah, Astro I'm thrilled with. They're absolutely speaking my language... Although they're using different words for the same things, but that's fine. Astro to me is really all about progressive enhancement. Progressive enhancement though does start from a world where this will fall back to links and forms that work. Astro - that's still a bit of an opt-in, but it's pushing in the right direction, where we're gonna prioritize an initial render that is content-aware, not a bunch of spinners. I think they're not saying progressive enhancement because they wanna specifically call out the islands architecture angle of this.

The islands architecture idea is you separate your app not only into components, but into independent apps; they're almost like little mini applications in the page, and they progressive-enhance themselves independent of each other. And this is interesting and nice, because you could have different components evolving in the same document. So you could have your Vue.js component beside your React component besire your -- I don't know what other components are out there... And that's kind of neat.

This is common, and this happens a lot. I was on a call this morning with some other CTOs who are at a bigger company than mine; they were in the midst of the migration \[unintelligible 00:53:29.06\] React, and predictably, they had both. And they imagine they will have both for the next 4-5 years, because they're not turning off their business. So something like Astro is really interesting, because this is gonna give us an evolutionary path out of these big rewrites, so we might actually see systems being composed of the older systems; they'll place nice. That was always kind of the promise. Never been able to load a React component from a Svelte component from a Vue component. The idea that we could start combining these things into larger documents is pretty cool.

**Amal Hussein:** Yeah. I'm curious, can you elaborate for folks how this is different than micro-frontends?

**Brian Leroux:** God, I don't know... \[laughs\]

**Amal Hussein:** For me, that trend came and went.

**Brian Leroux:** It did.

**Amal Hussein:** Like, thank God, RIP... But it was interesting...

**Brian Leroux:** It's like a bunch of frameworks where like, you know, we're gonna be the Rails, except for client-side. Ember was saying this, and others have said this over the years... I think it's a neat idea. The concerns are different, and the reasons that we were doing things in one place \[unintelligible 00:54:39.29\]

I think micro-frontends was one of those things where it's like as soon as you saw it, you were like "This doesn't actually make sense", but \[unintelligible 00:54:50.26\] So it's really a messaging issue... \[laughs\]

**Amal Hussein:** Yeah, I was gonna say - what's the distinction?

**Brian Leroux:** Yeah... One feels icky and one feels like a place where I'd get a pina colada. That sounds nice... \[laughs\]

**Nick Nisi:** Honestly, it's just reminding me of when I first got into -- at my first job... I can't remember what they were called, but we basically had the same thing, and I don't know if we called them applets... It wasn't like Java applets, but it was...

**Brian Leroux:** Portlets.

**Nick Nisi:** Portlets, thank you.

**Brian Leroux:** Yeah, JSF. I remember that. Oh, yeah, that's was fun.

**Nick Nisi:** No, it wasn't... \[laughter\]

**Brian Leroux:** \[unintelligible 00:55:26.20\]

**Amal Hussein:** Right. So we can do a whole show on decision-making, but if we can kind of summarize for folks when you need what, if you had to kind of summarize it for people.

**Brian Leroux:** Use accessibility as your blueprint for making decisions.

**Amal Hussein:** Oh, yes!

**Brian Leroux:** Or your web consumers... As web authors, that's probably one of our biggest responsibilities. And there is no easy answers there. Different audiences are gonna have different needs, and being inclusive is gonna look different ways over the years. I think it's kind of like security and performance... There's no moment where you're like "Ah, we did it. We're secure, we're performant and we're accessible." It's not like that; it's an ongoing, continuous improvement situation." We'll never be perfect, but we're gonna try to be perfect anyways.

**Amal Hussein:** Yeah, totally. That was the perfect answer. I really think we should blog about that, and that should be something that we coin... Because really, using accessibility as your guide is the best way to create not just performant user experiences, but delightful ones too, for everybody. It's a healthy North Star... So thank you so much for sharing that.

Again, this was such a -- a lot to fit into an hour, maybe even a little bit more than that, but we're excited to have had a chance to dive into this with you. Thank you so much, Brian. There'll be lots of links in the show notes, and we're excited that the web is continuing to evolve, and push, and question, and iterate... So we're very privileged to be contributors to this wonderful platform. Thank you, everyone, and have a wonderful day.

**Brian Leroux:** Thanks for having me.

**Amal Hussein:** Thank you, Brian.

**Outro:** \[00:57:15.14\]

**Horse JS:** The JS drama. It's rare.
