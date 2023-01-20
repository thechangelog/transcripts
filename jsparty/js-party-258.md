**Kevin Ball:** Hello, JS Party people. Welcome to the first recorded JS Party of the new year, though I will say it'll be the second published, because we're coming right after the New Year's party... I'm Kball, I will be your host MC today, and I am joined by a special guest, the vanilla JS guy himself, Chris Ferdinandi. Chris, how's it going?

**Chris Ferdinandi:** I'm doing great. Thanks so much for having me here again. It's great to be back.

**Kevin Ball:** Yeah, good to have you on. So let's start by setting the context for this conversation. So you have a bit of a background as the vanilla JS guy, and you have these opinionated takes... And you pitched me on a new take that you want to talk through, and I'm excited to kind of dig into it. So do you want to introduce your topic?

**Chris Ferdinandi:** Yeah, yeah. So you can call it a few things... You could call it the transitional web, you could call it the rise and fall of JS libraries, you could call it "JavaScript is the new PHP"...

**Kevin Ball:** \[laughs\]

**Chris Ferdinandi:** ...but at its core, the key thing here is that I feel like we are at the start of another wave of change in our industry. We tend to see these waves every like four to ten years, where some new kind of approach or methodology or thing comes along, that creates a shift in the way that we build things... The last one we had was kind of this big shift towards state-based UI, and client-side libraries is the way we build all the things. And I, just kind of based on some new tools that I'm seeing, and kind of these emerging talks and articles I'm seeing people write, I think we're at the start of another wave, and we're going to see a lot of the way that we used to build for the web go away, as some new best practices emerge... Which I think might be a good thing. Not a perfect state for me, but I think it may be a good thing compared to the way we do things today.

**Kevin Ball:** That's a bold statement. I don't think anyone has React going away on their 2023 Bingo card yet... Unless you do, and you're actually putting it out there.

**Chris Ferdinandi:** To be clear, I'm not saying 2023 is the year React dies. Actually, quite to the contrary; I think React will be around - I don't want to say forever, but like jQuery is still very much around on the web.

**Kevin Ball:** And you know what? For the type of simple problems that it solves, it's still phenomenal.

**Chris Ferdinandi:** Mm-hm. If we're making bold claims, I'm gonna go on record as saying that jQuery is better than React...

**Kevin Ball:** Ooh, spicy...

**Chris Ferdinandi:** ...at solving the problems it aims to solve.

**Kevin Ball:** That's interesting.

**Chris Ferdinandi:** Another conversation, but...

**Kevin Ball:** Yeah, I know. Well, we'll dive there a little bit...

**Chris Ferdinandi:** we can do it.

**Kevin Ball:** I mean, you could scope that down to jQuery is solving very different problems than what React is solving.

**Chris Ferdinandi:** Oh, yeah. I specifically mean not just jQuery \[unintelligible 00:03:40.07\] in the absolute sense, although I also mean that. But I think for the problems that it aims to solve, jQuery does a better job of that than React does. But yeah, the jQuery thing is really relevant, because most of what jQuery does has been replaced, or can be done with the same level of ease using platform-native technology now. Sometimes a little bit more verbose, and the documentation for platform-native stuff is garbage compared to jQuery's documentation... But jQuery doesn't need to exist. It just -- it persists nonetheless, mostly through kind of inertia and good documentation. And I suspect that tools like React and Vue will continue on that same trajectory, even though kind of like the new hot way that we build for the web will potentially -- I don't even wanna say leave it behind, but will kind of evolve past it.

So should we dive into what I actually think is coming next, or do we want to make fun of React some more? Because I can do either. I'm totally happy with--

**Kevin Ball:** \[laughs\] We had a spicy React show a little while back, where we were debating the premise that React is only good at being popular... Which - one can actually dive into the benefits of being popular; like, there's a lot of value there in and of itself. But okay, before we make fun of React, which I'm here for that -- I mean, there's a lot of things I love about React. I argued the side that React is actually really good at a lot of things, and while that was an assignment, I actually do believe that. That said, it's fun to pick on the gorilla... Let's get the premise of where you think things are going before we pick all the preliminary pieces to shreds.

**Chris Ferdinandi:** Yeah, for sure. So my thesis here is that large client-side UI libraries have really come to dominate. We have over the last few years started to see some pushback, because -- I make fun of React; it does do a thing that it sets out to do particularly well. I think it potentially has like a lot of trade-offs that we don't always effectively evaluate, like the performance impacts of loading all of that client-side JavaScript, and the fragility that that introduces.

\[05:57\] And so over the last year or so we've seen people try to address some of these shortcomings in a few different ways. You've got the smaller versions that do kind of the same thing. So you've got like SolidJS use similar patterns to React, but is a lot smaller. Preact is probably the most popular of this kind of genre, which is almost a verbatim copy of the React API, but a 10th of the size. And as a result of that, and having fewer abstractions under the hood, it also actually like renders the UI a lot faster... So in many ways, it is a superior React to React. And kind of this trend has caught on so much that Evan You, who created Vue, was inspired by Alpine.js, which aimed to be like the Preact of the Vue world, and ended up creating his own little mini Vue called Petite Vue, which is a six-kilobyte spin-off that has a more narrowly-focused use case.

So on one hand, you've got that. On the other hand, you've got the folks who have been trying to pigeonhole client-side rendering into these UI libraries. So you've got something like Next.js, for example, or Nuxt for Vue. And they're interesting, but they do this like hybrid thing where they'll render the initial view in the UI, and then they'll ship the entirety of the library anyways, and do some kind of like handoff in the browser once that happens. So you're eliminating one problem, but you're not really kind of addressing that core issue, which is too much JS. And I say this as someone who teaches JS for a living. We just -- we use too much JS. So we've kind of been circling around this idea, and then in the last year, I want to say, we've seen things shift from this idea of "Okay, what if we let JavaScript run in real time and do all these things?" to "What if we built some compilers that let you author the way you want, but cut out all that code and ship something that's more like old school DOM manipulation, which has a lot of benefits for a lot of reasons?"

So the first one that I'm aware of in this genre is Svelte, where you get to author your code in a state-based UI way, and then when you compile that into HTML files, there's some helper functions mixed in there, but the output JavaScript is smaller, generally, than what you wrote, and is a lot more like what you would write if you were just writing old-school DOM manipulations. So if you've got kind of this UI where only one element changes, rather than kind of diffing that whole UI just to render the one thing that changed, it's going to selectively update the text in that element, or toggle class on a div, or whatever the thing that needs to be done is. So you're still getting that authoring experience that a lot of people seem to like, but with less of that expense or that performance hit on the people who are using what you built.

And then in this same genre, we more recently have Astro, which works a lot like Svelte, but they took it a step further and got really weird, where like "What if you could just bring all your favorite libraries, mash them all together, and spit out like just the code you need?" In an Astro project you can include a component you love from React, some other components that you like from Vue, you can grab some Svelte files, you can mash them all together, and it's going to spit out mostly static HTML, with some JavaScript sprinkled on top as needed, which is really, really wild.

Jason Lengstorf from the Netlify developer relations team did an experiment where he took a Next project and ported it over to Astro using almost all of the same code. He just had to make a couple tweaks to make it fit. And the code that got compiled by Astro used -- I think it was 90% less JavaScript, and loaded and ran three times as fast, with almost no changes on his end.

\[09:50\] So for me, I'm kind of in this place where I don't know if these tools are the next thing, or they're transitional to whatever the next big thing actually is. And so to give this a little context - Kball, you've been around for a while... Do you remember when -- you're not as old as me; you still have hair, which is nice, but...

**Kevin Ball:** Oh, good genetics. My hair is just going gray. \[laughs\]

**Chris Ferdinandi:** It would be, if I had any left... So do you remember when jQuery -- like, the modern web could do some stuff jQuery could do, but not all of it. And people were like "Hey, we still need jQuery for some things, but not all... So what if there was like a smaller thing that worked kind of the same way?" You've got things like Umbrella.js, and Shoestring, and all these micro DOM manipulation libraries that were supposed to be smaller... So they all went away; like, jQuery's still around, but they all went away, but they kind of got us from that point to "Okay, I can do all that stuff with other tools."

And so I'm not sure if things like Svelte and Astro are the next big thing, or the thing that gets us to the next big thing. And so that's kind of -- that's the "Thank you for coming to my TED Talk." \[laughs\]

**Kevin Ball:** Can I dig into a few different pieces here?

**Chris Ferdinandi:** Yeah, yeah, for sure.

**Kevin Ball:** There's a lot of different trends here that you've kind of thrown out, and I want to pick apart a little bit which pieces you're hanging on to. So when you talk about something like a React, or a Vue, or something like that, there's multiple aspects to that. There's "What is the developer experience?" What is the model in which you are approaching your code? And one of the things that these frameworks allow you to do, if not completely, but is to think about your application a little bit more declaratively, and start building up these sort of functional components, rather than having to think in this very imperative world all the time, which sort of native JavaScript DOM manipulation is a very imperative, like "Take this thing and move it in this way." And React, once you're inside of the component, it's actually -- much of it is still very imperative. It's not nearly as sort of declarative and reactive as Vue or Svelte in some ways are, but at a component level, once you're piecing together components, it actually does feel very declarative. "I want this thing to happen, here it is", and kind of happening that way.

So that developer experience and mental model is one piece of this. Then there's "What am I shipping to the browser?" And there's a couple aspects of that. There's "What is the runtime there?" Old-school jQuery, a huge amount of what was shipped was essentially papering over browser differences, and giving you a common UI over this thing that was still very much the Wild West... And that problem is solved, right? Like, we have standards for browsers now, and all of the browsers that are still in use today pretty much - except you're on the very bleeding edge of things - match up. We don't need to ship kilobytes and kilobytes of code to paper over browser differences in the same way that we used to. We might ship a polyfill here or there, but it's not this massive problem.

**Chris Ferdinandi:** Yeah.

**Kevin Ball:** The third kind of piece of this is then "What volume of the application is compiled away, so to speak? ...is happening in sort of a pre-compile, happening on the server, is happening before anything ever goes over the wire, and then shipping only the minimum amount of JavaScript out to the world?" And in many ways, that feels like an optimization problem. It may be that you can keep exactly the same developer experience, mental model and everything that you have in React, and compile down so that you're actually shipping many fewer bytes, which is sort of an optimization of the web platform. And that's what it sounds like Solid is very much doing.

So what I want to kind of get a sense of is, is your take here that -- like, these mental models may be sticking around, but we're getting better at the optimization problem, and we're starting to care about it? Or is your take that actually the sort of developer experience mental model piece is shifting as well?

**Chris Ferdinandi:** \[13:56\] Yeah, so I'm not sure, to be honest... I think the thing that's most clear to me is the optimization piece. People are finally kind of latching onto this idea that "more HTML good", "more JavaScript bad." Or it's better to -- if you can reduce the amount of JS you're shipping, that's better for you, and for the kind of business goals of the thing that you're creating.

The developer experience piece is tough, because on one hand, I know very seasoned developers often really like the ergonomics of state-based UI libraries. And there are times where they absolutely make things easier. I think where that falls apart a little bit is like the barrier to entry for beginners, from people who are not specialists in JavaScript, but are in related disciplines within frontend development... So accessibility experts, for example - like, the barrier to entry for them to be able to participate in processes that use these tools goes way up. And so yeah, I'm not sure if the mental model itself will go away or not.

I think where state-based UI potentially gets a lot easier - some beautiful future state - is where diffing the DOM is as easy as passing a string into like the inner HTML property is today. That obviously doesn't diff the DOM; it clobbers the UI. But it would be really nice if there was some sort of browser-native way to say, "Here's the element I want to render stuff into. Here's the stuff I want to render as a string, or elements, or whatever. Please change just the things that need changing in the least destructive way possible." Because these tools do have... Like, just the process of getting set up with React, and understanding kind of the -- the mental models themselves are not super-complicated, but working with the tool sometimes is, especially if you're someone who's not particularly experienced, or the command line is a terrifying thing for you... Sorry, it's a long-winded way of saying "I don't know if the mental model will change." I think state-based UI can be a very great thing, and I think thinking about things as components can be really useful in certain use cases... So that probably -- I guess I'm talking myself into it here; that probably won't go away, but I do hope that the way we ship these things and the way that we're actually delivering the things we build - I do see that changing. And when I say JavaScript is the new PHP, I don't mean that in a mean way; I mean that like maybe moving JavaScript more and more to the backend, and ironically, in the process, reinventing a lot of stuff PHP did for us a decade or two ago.

**Break:** \[16:34\]

**Kevin Ball:** So I want to dig in to then this transition, of JavaScript as a -- you said it as a server-side language; I might almost think of it as "This is something that we're using to describe our application, and then it gets compiled away, in some way."

**Chris Ferdinandi:** Yeah... There are challenges that come with doing that though, right? So being able to debug your code gets a lot harder when the thing that gets like run in the browser isn't the thing you typed, and when that's not the source code, it becomes harder to debug, and to pin down what's going wrong, and kind of figure out issues. So there are trade-offs to this approach.

**Kevin Ball:** Back on your theme of relearning things - we might have to relearn some of the lessons that statically-compiled languages and compilers have learned...

**Chris Ferdinandi:** I feel like there's this constant process of reinventing the wheel in our space...

**Kevin Ball:** Absolutely.

**Chris Ferdinandi:** It gets really tiring after a while... Which is why I tend to not chase trends very much until the dust settles, because -- here's just a little pro tip, by the way, for anybody who is earlier in your career... You don't always have to chase every new -- like, one of the things I hear a lot from students is like trying to keep up with all the new things that come out is really, really exhausting. And I agree. So you don't have to do that; you could just wait until one of them emerges as the clear leader, and then go with that. These days I think it's really obvious that if you're just looking for like broad marketability, you can't really go wrong picking React, because it's on so many job descriptions... Whereas four or five years ago it was maybe a little bit fuzzier if it was going to be React, or Vue, or Angular, or whatever.

**Kevin Ball:** Yeah, React has pretty much won that space.

**Chris Ferdinandi:** Yeah. Tangent aside, but... Yeah.

**Kevin Ball:** So I think it's interesting to pursue then, for folks who are currently in that world - you're writing React... What are the incremental steps to reduce the amount of JavaScript you're shipping over the wire? Now, it sounds like for many cases it's just swap out React for Preact. How much of an API reduction do you end up with there? Because there's a reason React still exists as well.

**Chris Ferdinandi:** Yeah, for sure. To be fair, to kind of like throwback to the other episode you were talking about, like "How much of React's staying power is its current popularity?" It's the old "No one got fired for hiring IBM" kind of thing applied to the frontend. Like, React is the gorilla. And so if you choose it, it's hard to go wrong. So in terms of API reduction, to be honest, I'm not 100% sure where kind of the drop-off is, like what's missing from Preact that you would get from React. And from what I understand from some folks who have done conversions, the challenges tend to be more around certain components that you're trying to use don't always line up 100%... So that can be a little bit of a challenge at times.

But one of the other things that makes Preact a bit smaller is it was created a few years later, and so it uses some kind of native browser tech under the hood that didn't exist when React was created, and that they at the time wrote some abstractions, or some helpers, just for Reasons of if "It's working, don't -- don't break it by trying to fix it" remain in React, that don't in Preact. I believe React may also have slightly deeper backwards compatibility as a result of some of that.

**Kevin Ball:** \[20:12\] Well, and that is honestly one of the benefits that came up in that episode about React, is that they care more than possibly any other framework out there - except Ember, which is basically a non-competitor anymore - about backwards compatibility. And so you're not going to lose your job betting on React because when you have to update because of whatever it is, XSS bug, or whatever, your application may just work.

**Chris Ferdinandi:** Yeah, totally fair. So you asked what are these incremental steps... So there's a few different layers, depending on what you're trying to do. On one hand, dropping in Preact for React is a pretty easy one. Or if you're starting greenfield, choosing one of the smaller alternatives might serve you well.

On the other hand, Astro is really interesting, because it allows you to drop your existing projects in and spit out more performant code... But it's still kind of new. So I think one of the barriers to entry for it is, on certain projects, where if you're working with like a bigger kind of thing, it's really easy to be like "React is battle-tested, whereas Astro is kind of new, and it's maybe still ironing out some kinks, and things like that." I now see their website is using the "island architecture" buzzword, which is kind of one of the hot, new buzzwords in the frontend here.

But yeah, so I think a next step is migrating front -- or not migrating, but adding that compile step with Astro, especially if you're someone who's currently using Next. Switching over to Astro feels like a no-brainer. On the other kind of -- or I guess related to that, if you're starting completely from scratch, Svelte is also a really nice alternative that -- Rich Harris, the creator of Svelte give this really nice talk last year at JAMstack conference... Or I guess it was two years ago now, because we're in 2023... So a while back.

**Kevin Ball:** Still adjusting the brain...

**Chris Ferdinandi:** Right, yeah; still kind of trying to rewire here. But you know, a while back, he gave a really nice talk about what's coming next with Svelte, and just kind of his general thoughts on the future of compilers in general... And one of the things he talked about was how with these tools you can use them to - with SvelteKit anyways - render files where you don't have to choose "Do I want this to be a client-side or server-side application?", without doing what Next does and shipping the entirety of React, and also running it in the server. So things that are static get rendered statically, things that are a little more dynamic get rendered mostly statically, with some JS for the dynamic parts. And I believe, based on his talks, SvelteKit also provides a server-side fallback for certain things... So like if you have a form, it'll do the Ajaxy form submit. But if that fails, we'll still give you a backend to kind of call the old-fashioned way.

So yeah, again, it really feels like we're coming full circle to these old WordPress sites, with full-page reloads, but with some niceties; possibly better developer ergonomics, and things like that.

**Kevin Ball:** Yeah. That sounds to me a lot -- like, that trend of "Hey, wait, we can actually do something on the server, and doing everything on the client side is an optimization, not a necessity." That definitely seems to be coming around. It's there in the React world as well, with -- oh, shoot, now I'm blanking on the name of the framework... That just got acquired by Shopify.

**Chris Ferdinandi:** Oh, I did not know...

**Kevin Ball:** \[23:49\] Kent C. Dodds was on there. Why am I blanking on the name of this framework? Remix. Remix. There it is. They do a similar type of thing to what you're describing. They'll have the form, and they'll optimistically do it via Ajax, but the fallback is just a server-side action. And they really leaned into that, "Oh, let's actually take advantage of all the things the web does for us." And it turns out that HTTP, the web, all these different things were well-designed.

**Chris Ferdinandi:** Yeah, right? It's almost like they are the really smart folks who did all that, and kind of knew what they were doing.

**Kevin Ball:** I mean, we do keep learning... And I think this does come to -- the platform does catch up, eventually. Things do -- I think what Laurie Voss called "transcend", from like the frameworks that work well... You talked about it a little bit with jQuery, right? A lot of the things that jQuery did was expose these new, really convenient APIs for grabbing elements of the DOM and manipulating them, and the platform eventually absorbed some of them. I would love to see it do that with a state-based or functional approach to UI. That was what everybody hoped Web Components would do, and then Web Components exposed this extremely imperative-style DOM manipulation, which, it may be -- like, I'm not a browser developer; it may be that's just how the browser -- it's really hard to do that abstraction layer, but clearly, all of these different frameworks are doing it.

**Chris Ferdinandi:** I was literally just talking with a student this morning about how Web Components come so close to being awesome, but just miss the mark, for what -- at least what everybody thinks they could be, or wants them to be, which is a replacement for React Components. I don't think they're that. But yeah, so that's the dream, right? ...is that the browser supplants a lot of this stuff. Hopefully, it will, at some point... So we're kind of sort of veering in that direction.

One of the things that libraries do for you that's really nice is sanitize third-party data before rendering it into the UI. React has their set unsafe innerHtml, or something... I know they have some really scary-sounding property...

**Kevin Ball:** Dangerously set innerHtml... Oh, if we had our soundboard, Amal had a great -- \[Amal\] "Dangerously-set inner HTML... What's so dangerous about HTML's inner parts...? I don't know... But they're dangerous on the internet... Of React. React's internet, of course."

**Chris Ferdinandi:** Right, yeah. So most libraries will provide a way to kind of prevent you from doing bad things with third-party data. They're not bulletproof, but they get you a little bit of the way there. And historically, there hasn't really been a good way to do that in the browser. There is a sanitized API that's in the works though, that will allow you to do that. So you can pass in an HTML string and get a sanitized version of that back. It replaces either using a library like that, or something like DOM Purify, which is very big and very heavy. So I look forward to things like that.

It is really my dream that someday there will be like a diff property, or a diff function that you can run to just throw some HTML strings out there and make things happen.

One of the other things I always hear is like "Well, why isn't JSX in the browser?" And for me, template literals get me 90-something percent of the way there. They do a majority of what I want, that I would do in JSX.

**Kevin Ball:** Yeah, I mean, they're both giving you ways to, essentially, pre-compile and write things that are in this sort of domain-specific language of template-like, but using JavaScript.

**Chris Ferdinandi:** Yeah.

**Kevin Ball:** And you could build a whole framework around template literals. In fact, I feel like somebody's done that. I can't recall, but I saw that.

**Chris Ferdinandi:** Yeah, htm or htx... I forget the -- it's htmx, isn't it? And I'm just -- I'm dropping a letter.

**Kevin Ball:** That looks right, teah.

**Chris Ferdinandi:** Yeah, htmx is built around template literals. I think -- actually, that's maybe like the parent, and then there's like a few different tools within it... I'll drop a link to that in the chat if you want to drop it somewhere...

**Kevin Ball:** Got it.

**Chris Ferdinandi:** Cool.

**Kevin Ball:** Cool, cool, cool. Yeah, so you're right, we are headed in that direction... That said, stuff has inertia.

**Chris Ferdinandi:** Yeah.

**Kevin Ball:** \[28:10\] As you highlight, jQuery is still hanging on... It took -- React was growing and jQuery was still at 90% of the world's web for years and years and years. So what timeframe are you seeing this play out on?

**Chris Ferdinandi:** Yeah, so... Multiple years. So just thinking back historically... Well, so it's interesting, right? I want to say in five years' time we'll still see a lot of React sites on the web. But React still represents a relatively small amount of like the web; it feels like it's a majority of the web, because it's like the very popular thing that we use now, and so many job descriptions have it, and it gets talked about a lot at conferences, and it's kind of like the standard now. But still, just as a percentage of the web itself, it's still actually a relatively small amount. Like, something like PHP and WordPress still vastly dominate over--

**Kevin Ball:** Well, new WordPress installs ship React now, right?

**Chris Ferdinandi:** They do. Not always client side. You can, but it is by default primarily used in the dashboard area as part of the editor... Whereas kind of the frontend of most sites is still server-rendered, with -- so many plugins still use jQuery... Which is another reason why jQuery will not go away, it's because of WordPress. But yeah, that's kind of an interesting thing. So timeline-wise - this is one of those like weird and fuzzy things. So I want to say in about four or five years we'll probably start to have some other tool that is maybe the new standard, or that has emerged as a clear winner. Maybe. A lot of that depends on whether or not things like Svelte and Astro are the next big thing, or just the thing that gets us to whatever that next big thing is. It's tough for me to say. I'm not sure... Like, it's very clear to me that something like Solid and Preact are similar to Umbrella.js and Shoestring in the jQuery era. Like, they do the same thing, just smaller. Astro and Svelte - they have a similar kind of methodology, a certain way of authoring, but the way they actually kind of work is fundamentally different, where you're compiling things, and you're shipping mostly HTML. Preact isn't really built on a progressive enhancement model. It's like "Here's a smaller way to do client side JS."

So yeah, I guess that's really for me, the big kind of fundamental unknown, is "Are Astro and Svelte 'the thing'? Are they the next React?" Or are they also in that same kind of bucket as Preact, and Solid, and other tools like it, that will eventually be replaced by some other new thing? ...which - one possibility here is that the browser catches up, makes a lot of this stuff native, the tools persist for a really long time, and then some whole new suite of tools comes around to solve some crazy web problem that we haven't thought of yet... Like Web VR, or just some new stuff that people are trying to do... I don't think it'll be VR, but you know...

**Kevin Ball:** Or all of these compile-to-WebAssembly tools catch up, and WebAssembly is able to directly access the DOM, instead of having to jump out, and all those things.

**Chris Ferdinandi:** Right?

**Kevin Ball:** Maybe JavaScript goes away.

**Chris Ferdinandi:** A guy can dream.

**Kevin Ball:** \[laughs\] I actually -- I don't know that that helps. Shipping a lot of WebAssembly - it helps with the CPU usage problem of too much JavaScript, but it does not help with the bytes over the wire problem. Right? Because actually, WebAssembly is much more verbose, in a lot of ways. You're shipping these expensive binaries, rather than a higher-level language.

**Chris Ferdinandi:** That's interesting. Yeah, to be fair, I'm not very familiar with WASM, so I don't --

**Kevin Ball:** \[31:58\] From a performance standpoint, you can think about it similar to image sizes, right?

**Chris Ferdinandi:** Okay.

**Kevin Ball:** So with JavaScript, you both have bytes over the wire, and you have compile and runtime. WASM is fast to parse; it doesn't have the parsing overhead of JavaScript. It's reasonably fast to run, but it's heavy in terms of bytes over the wire. So more comparable to how shipping images, which -- you know, if you've got a good network, but a slow phone, or a slow CPU, that's great. And if you've got a bad network, it doesn't help you much.

**Chris Ferdinandi:** Yeah, it's very true. So related to this idea though, of like maybe all these tools just kind of become that thing grandpa used to do when he built for the web, and now we've got this other thing... So people forget that Angular was kind of a really big deal for a short period of time... But when tools like Angular and Vue and React were first emerging, the idea of building large user interfaces with state-based UI was pretty novel. Not that it didn't exist as a concept before, but as a popular one that people really latched on to - it wasn't a particularly popular approach to building for the web. And so I do really kind of wonder if the platform absorbs these approaches, like what will that next thing be? Because the tools always emerge to solve a specific set of problems. For React, it was "Oh, here at Facebook we have this really overly complex UI that has a lot of moving parts, and managing it sucks. So let's build something to make that easier."

I will be really curious to see what problems emerge in the next few years with the web that we have to build a set of tools to try and solve. I am not imaginative enough to kind of come up with what that might be. I heard someone suggest VR once... And maybe, but - I mean, they've been talking about doing VR in some fashion for years, and it's always one of those things that's exciting for like a hot minute, and then it goes away. Like, the Metaverse made it so laughable, I'm not entirely sure it'll --

**Kevin Ball:** Yeah, I mean, I think VR is one of those things where -- there's a lot of really valuable niches, where I can see the value prop immediately. There's also some very wealthy companies trying to make it a consumer product, and it's not at all clear to me that that's going to fly.

**Chris Ferdinandi:** Yeah. I can remember being a kid, and Disney was talking about doing some Aladdin rod on a magic carpet VR thing, with this like massive headset as like a ride at Disney. But yeah, whether or not that gets popular on the web will be an interesting one. I've taken us on a tangent though, so I'm really sorry, Kball. I'm very good at that.

One of the things we didn't mention, just in kind of this same vein of the web assuming some of this stuff... One of the other things that state-based UI libraries aid with - or the very least single-page apps - is the ability to do kind of like these transitions as you move from one page or one view to the next. I always hear that as a big kind of argument in favor of these things. But there is a shared element transitions API that - I forget if that's like officially in the web now, or if that's still in kind of development. It's basically an API that lets you do exactly that - animating your transition from one page to the next, with static HTML instead of just JavaScript. So you don't have to stay on the same page; you can like load a new page and transition over. I'm having a tough time finding an MDN article on this...

**Kevin Ball:** That's okay, you can look it up offline and we'll drop it in the show notes.

**Chris Ferdinandi:** Yeah, for sure. And there was a -- just a quick shout-out, my friend Steph Eckles did like a "12 Days of the Web" series a couple weeks ago, around the holiday season, and one of the articles was specifically around this. I'll see if I can dig that up and drop that in for everybody.

**Break:** \[35:58\]

**Kevin Ball:** So you've been on this "Less JS. Ship less to the browser" -- I think we did an episode like a year or two ago that was "JavaScript is the Carbon Dioxide of the web", or something like that. Like, this has been a long time thing for you.

**Chris Ferdinandi:** Yeah.

**Kevin Ball:** And framework adoption has not gone down. If anything, I think it's gone up. In fact, we've seen it take over more and more of the not-web, right? Things like React Native, things like writing React applications and packaging them up as desktop applications... These frameworks have gone bigger and bigger and bigger. So why now? What makes this time different? Why is the argument this time that we're entering this transition period and we're going to transition now?

**Chris Ferdinandi:** Yeah. So before, for me it was always like a want. Like "Hey, I'd really appreciate if we'd stop using all these tools." I think what's different now is that there's actually some tools that can replace what we've been doing in a more responsible way.

When I first came on the show - I can't remember if Preact was a thing or not, but it certainly didn't have kind of the name recognition that it does now. Svelte and Astro just didn't exist. And so now we have tools we can use, that replace the things we were doing before... And so I think that's a really big, a big difference. The other big thing I've noticed is that, for years, I used to shout about the performance implications of these libraries, and I would basically get okay-boomer-ed about it... \[laughs\] Like, "Ah, everybody has fast internet. 5G is on smartphones now. This just doesn't matter." And certainly through no kind of effort of my own. But for some reason, I've observed that people are finally starting to become aware of the fact that shipping all this JavaScript has real implications for performance and resilience in the things that people build.

I don't know if we just hit a tipping point where we started to ship so much that it became much more obvious, or we just had more people talking about it... And so you've started to have more kind of just general awareness in the industry than just Chris the lone nut.

**Kevin Ball:** I wonder if the pandemic and everybody suddenly shifting to home networks, instead of fast office networks, made people suddenly start to realize that this stuff ain't free.

**Chris Ferdinandi:** Oh... That's an interesting theory, right?

**Kevin Ball:** Because at my last job, which I have left - I'm now back to being independent. Woo-hoo!

**Chris Ferdinandi:** Ooh, exciting.

**Kevin Ball:** But we had an environment where there was no completely local dev server. You had a shared development database, but it was in the cloud. And that worked great in a fast office network, and it was bloody slow developing at home.

**Chris Ferdinandi:** Oh, man...

**Kevin Ball:** And I suspect there's a lot of other different practices, and some of this "JavaScript is free. Everybody has fast networks" that are just internalized based on having worked in very fast office network environments.

**Chris Ferdinandi:** So one thing I take for granted -- I have fiber at home; fiber optic. And it is just consistently the speed I pay, for all day, every day, regardless of how many people on my street are also using internet. I've kind of forgotten that when you have coaxial internet, which a lot of our countries still does, and a lot of other places in the world still do, or satellite, or DSL, or something that the weather can really mess with, your speeds can be really variable, depending on how many other people are also using it at the same time.

\[39:52\] The analogy I've heard used - that maybe not 100%, but I like - is the idea that if you have like a hose, or like a pipe with water, and you open four or five spigots, the water is going to come out of each one slower than if you just open one. So it's like a similar kind of concept. So with the pandemic, if you've got everybody working from home, even if you were previously a remote employee, now when all your neighbors are also home, using the internet all day on video calls, which are very bandwidth-intensive, suddenly that internet speed is going to drop for everybody. Yeah, that's a really interesting idea, that I had not considered. So maybe that's it; a good thing to come out of COVID.

**Kevin Ball:** I mean, we're looking for every silver lining we can find. Right?

**Chris Ferdinandi:** Right, grab them while you can. But I actually think that has a lot of teeth, because I really did -- it's just been in the last couple of years, I've started to see people talking about the performance implications of the stuff we do a lot more, in a way that nobody really seemed to care about. Not nobody; you cared. We talked about it a lot. But a majority of our industry did not seem to care for a long while. And I think it's one of those things where - you might be right, where people have to experience that pain themselves to actually develop the empathy, which is unfortunate...

**Kevin Ball:** I feel like that's true about a lot of things, right? There's a lot of lessons that can only be learned through pain. No amount of someone else telling you about it will fill you in, or get you to really understand it. I do wonder if the back to office trend will then steal some momentum from this...

**Chris Ferdinandi:** Oh. Yeah... The back to the office trend is interesting, because a lot of people are fighting it...

**Kevin Ball:** Yeah.

**Chris Ferdinandi:** So I mean, there are definitely people who prefer to be at the office.

**Kevin Ball:** It's lovely, fast internet...

**Chris Ferdinandi:** And if you're someone -- like, if you have a family, and it's like noisy in your home, I know some people just prefer having a quiet space, or being able to socialize, whatever it happens to be... But there are also a lot of folks who just don't want to. And digital-nomadding is becoming a lot more common... So my hunch is, even as kind of businesses start to try to go back to normal, I don't expect that this trend is going to buckle at this point. It feels like we hit a tipping point, which is great.

**Kevin Ball:** Yeah. And the tooling is making some of the things easy enough. That will help. It's interesting, because - coming back to the React question... Like, React has such of a mental presence out there. Everybody thinks React-first. New frameworks are then finding ways to adopt the React API, and make it look like React, make it feel like React. We talked with Misko Hevery, who is working on this new Qwik framework, which if you haven't checked out, also check this out. It's really interesting. A lot of the same concepts we're talking about now - compiling things away, having pre-compilation... He has this idea of resumability that is really big... I'll drop a link in the show notes to the episode we did with him... And I'm scheduling another one, so we'll go deeper on that as well. But they've very deliberately adopted the React API. They're like, "Everybody's learning how to write React. If we want adoption of this new framework, the simplest path - not "we've gotta", but the simplest path is to make it feel like React."

**Chris Ferdinandi:** Yeah... I think you see that a lot now, where React has really become kind of the -- they weren't the first, but they are definitely the standard bearer. They're the one that everybody tries to emulate... Even when new things come out. Like, SolidJS uses some different terms and things, but the feel and the methodology is all Reacty. I'm still a Vue guy, personally. But if I had to choose one, if someone was like "Pick a framework!" But yeah, I love my HTML, that's why.

**Kevin Ball:** \[laughs\] Yeah. I mean, I think -- it's hard. As you highlight. There's so many things to learn. You've got to pick and choose, especially early on in your career... And React is a pretty safe bet, right? You're looking for jobs, pretty much -- a very, very large swath of them have React in the job description.

**Chris Ferdinandi:** \[43:49\] Yeah. It catches people by surprise, because I'm so vocally against libraries... But whenever I get asked, "So what should I learn if I really want to like make sure I can get that job?" I'm like "Honestly, just learn React." And they're like "But you said no--" "No, no." I want us to use last React. It's great to know how to get by without it. But it is kind of the -- I don't wanna say the gold standard, but the industry standard now. It just is what it is. Hopefully not forever, though...

**Kevin Ball:** \[laughs\]

**Chris Ferdinandi:** I'm looking forward to tools like Astro and Svelte kind of changing the way we build.

**Kevin Ball:** Totally. Well, and if you're in the privileged position of not being desperate to find that next job, try exploring something else. Try out Svelte. I've been playing with Svelte again recently. It's fun. I enjoy it. It's neat, and it has that kind of like indie vibe to it, in a way that... I don't know, I like.

**Chris Ferdinandi:** Yeah. Where I always get hung up with new tools is so many of them just use a mental model that is not how I like to build for the web. But I'm also a dinosaur who really prefers a very like Spartan kind of dev experience, and I know most people aren't like that. I'm in a vocal minority here.

**Kevin Ball:** Yes. Well, you're talking to the guy who still writes everything using Vim, so... \[laughter\]

**Chris Ferdinandi:** Well, that's only because you can't figure out how to exit though. That's not --

**Kevin Ball:** \[laughs\] Oh, man... I have trained so well. I will say, my hands feel a lot better ever since I mapped Escape to Caps Lock, so I don't have to reach as far...

**Chris Ferdinandi:** \[laughs\] Oh, my gosh...

**Kevin Ball:** I did that because I had one of those old Macs with a touch bar, which - thank goodness they got rid of those. So I needed a tactile Escape. But now every computer, I just map Caps Lock to be Escape, because it's so much easier on your hand.

**Chris Ferdinandi:** Huh... But what do you do when you need to shout at someone on the internet? You're holding down Shift like a maniac?

**Kevin Ball:** Should I ever be in that position, then yes. I'm rarely shouting at someone...

**Chris Ferdinandi:** I'm just giving you a hard time. Caps Lock is a nuisance key. That's a clever hack, I like that.

**Kevin Ball:** I am not the old man shouting at the cloud, I'm the old man hitting \[unintelligible 00:45:56.24\]

**Chris Ferdinandi:** \[laughs\] Do you really still do everything in Vim? That's amazing.

**Kevin Ball:** Oh, absolutely. So my development environment - I have a terminal, I use Tmux. I have Tmux set up with Vim bindings. So I can do everything. Hopping around, running things, going from process to process - all of that without my hands ever leaving the keyboard.

**Chris Ferdinandi:** That's wild.

**Kevin Ball:** And it's great.

**Chris Ferdinandi:** Nice.

**Kevin Ball:** I've long since done the investment to map those bindings into my brain such that it's not worth trying to go somewhere else... And I at some point was trying to play around with VS code, because it turns out it's, I think, better for recording videos of yourself coding, and things like that... And I tried to get it to these Vim bindings, but I got so frustrated, because I could get within a file mapped to the bindings I wanted, but I couldn't get good keyboard bindings for swapping between files and navigating the file structure and all of that, and I kept having to go to my mouse. And I was like "Why would I do these things? I can do everything with my hands and my keyboard."

**Chris Ferdinandi:** Yeah, that's pretty sweet. I love a good keyboard shortcut...

**Kevin Ball:** Anyway, that's a diversion... I don't think that people generally should be learning Vim as their new onboard to the web, but if you are --

**Chris Ferdinandi:** Actually, it's the future of web development... So it's time. Get on.

**Chris Ferdinandi:** Periodically, they do these surveys about "What are the top coders using as their editors?" and Vim is always up there. But I think it's just because it's all of us old people who have spent 20 years learning all these different things, and so we're super-productive now, because we've spent 20 years working on our productivity... But it has nothing to do with the editor.

**Chris Ferdinandi:** Oh, for sure. For sure.

**Kevin Ball:** Alright, so this time is different, because there's more momentum, because COVID, because remote work, and because it's easier now. Was there anything else that leads you to believe "This is going to be the time we finally transition away from more and more JavaScript all the time"?

**Chris Ferdinandi:** No, I think that those were really the highlights. It feels like we finally have some inertia in the industry for this... So yeah, between tooling and this renewed focus on performance, I think we're just headed in that direction.

**Kevin Ball:** Awesome. Anything else about this trend you want to highlight before we wrap things up?

**Chris Ferdinandi:** \[48:08\] No, just - if anybody kind of wants to dig into this more, over at gomakethings.com/jsparty - I've cobbled together a bunch of kind of articles, and thoughts, and other conversations I've had around this, if anybody wants to explore the idea more.

**Kevin Ball:** Awesome.

**Chris Ferdinandi:** Relevant links, and things like that.

**Kevin Ball:** We'll include a link. That's a clever way to both give people resources, and self-promote, because I see the Get Daily Developer Tips forum right there.

**Chris Ferdinandi:** Oh, fancy that. I did not know that was there -- yeah, no, that's effective.

**Kevin Ball:** That's great. I'm gonna have to steal that one. Awesome. Well, thank you so much, Chris, for spending the time today. This has been fun. You know, I think you're right that there's much more focus on this now... And I think this idea of sort of moving as much of the work that we do to be before we ship things to the browser as possible is one that has legs. It's ones that we're seeing in various frameworks... Gatsby was one of the first for this, all these pre-compilation things... Gatsby kind of failed on this "ship less JavaScript" front of things... But this concept is now taking over, and you have Svelte doing a great job of it, you have Qwik doing it, you have Astro... All these different things where the idea is "You know what - there's a lot of this we can figure out ahead of time, and then we don't have to ship it over the wire, the user's device doesn't have to do anything with it... And maybe what we can't ship over the wire, we can at least ship out to some sort of CDN, or edge-based computing location, where it'll go quickly." So yeah, it'll be fun to see what happens over the next couple of years. What was the timeframe you said? You said --

**Chris Ferdinandi:** I suspect it'll be somewhere in the four to five-year mark, just because these deeply-entrenched habits take a while to kind of unlearn. You'll have a bunch of people who kind of dabble in it, and then some companies will start to use these tools, and then eventually it'll feel like it was what we've been doing for ages. Once the conference talks and stuff starts to really pick up.

**Kevin Ball:** Alright, so put a pin on your calendar - January 5th, 2028.

**Chris Ferdinandi:** There you go.

**Kevin Ball:** "Nobody's using React anymore", right?

**Chris Ferdinandi:** Nobody. Not a single person. \[laughs\]

**Kevin Ball:** Awesome. Well, thank you, Chris. This has been JS Party. I think we're about here now, so go check it out. All the different things we talked about will be included in links in the show notes. And then Chris has his resource list, which looks pretty massive. Lots of great stuff on there. You can check that out as well, and I'll link to that from the show notes.

This has been fun. This is JS Party. We'll catch you next week, and this is Kball, signing out.
