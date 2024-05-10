**Jerod Santo:** Hello, hello once again, JS Party animals. I'm Jerod, your internet friend, and I'm joined today by Brian Leroux. Welcome to the pod, Brian.

**Brian Leroux:** Thanks for having me.

**Jerod Santo:** Having you back, actually. I think you've been on a handful of times. Always interested in what you are up to, and you're up to something right now. You and your friends...

**Brian Leroux:** I'm always up to something sneaky...

**Jerod Santo:** Yeah. Enhance Wasm, or Wasm - it depends on if you want it to rhyme with awesome - is a new thing from you and your team at Enhance. Lay the groundwork for a conversation here. What's Enhance, and then what's Enhance Wasm?

**Brian Leroux:** Yeah, so Enhance was kind of a response from our team to the state of modern JavaScript frameworks. We've got a lot of them, and they're great, and they patch a whole bunch of holes in the web platform that we don't have anymore. Be it Sveltes, or Reacts, or what have you, they all add a module system, and they all add a component system, and then they compile that away to generate HTML. And we realized that the browser has these things. The browser didn't use to have a module system, famously, for a really long time, but we now have pretty ubiquitous ES modules. And the browser has a component system called Web Components, which --

**Jerod Santo:** It does?

**Brian Leroux:** ...has a story... \[laughter\]

**Jerod Santo:** It may be a surprise to some... Like, it's there, it's been there a long time, but it seems like people are just realizing it's in there.

**Brian Leroux:** Well, and I went through some classic software iteration; it took a while for it to kind of come up to speed... And it's got limitations, but it's good. These things are built in now, and you can extend HTML natively, you can create your own elements, so you can open up dev tools, you can see those elements, inspect them, change them... And this is pretty nice, compared to the div soup that we get from transpilers that generate code. You get more of an even match between what you write and what you run, which makes debugging better, but even better still, you're not sending a bunch of code to user land to do stuff the browser can already do, so you get better performance as a result.

And one of the big holes with Web Components is they're very client-side JavaScript-centric. You implement a class by extending an HTML element. And then you register that with the custom elements define call, which runs client-side. And this happens after client-side JavaScript kicks in. And we wanted to do a lot of stuff before client-side JavaScript kicks in. If you take a normal web page, just like any given web page, most of the elements on that page are inert. They don't have event listeners.

**Jerod Santo:** \[06:37\] They're just sitting there.

**Brian Leroux:** Yeah, they're just hanging out, drawing boxes, or whatever... And that's great, but it's funny, because our whole programming model is downstream thinking about HTML elements is something JavaScript created, manages and maintains, and that's kind of inefficient. So server-rendering is becoming popular again, which is great, because that performs better, and it's also closer to how the ultimate page works. You just get a bunch of inert HTML, and then you can kind of save your client-side JavaScript for the stuff that client-side JavaScript can only do.

So Enhance is a way to serve-render Web Components. And we're unique in this way. There's other projects that are sort of attempting to do this through build steps and stuff, but they're not quite there yet. And we took an approach that was a little bit different than other projects, like Lit. Whereas Lit wants to think about the whole world as like JavaScript executes, and some events fire, and then I insert some HTML inside it myself. And we're inverting that and saying "Define templates using JavaScript, using just plain JavaScript, and then we'll render those templates and expand all the elements for you, with state, on the server side. And if you want, on the client, you can then also run JavaScript." But for the vast majority of the elements that you're producing for a webpage, you won't need to do that.

The classic example I like to give is your header and your footer of your website. Those probably don't need JavaScript, but they definitely need to render, and they're going to have a whole bunch of elements, like links and stuff... And you want to pop those out into the page as quick as possible, so people can have a good user experience at the end of the day. They can navigate around. If JavaScript fails, you still get some UI. And yeah, if you want, at that moment, you can run client-side JavaScript and do whatever you want inside of that.

So that's what Enhance does, at a high level. It's server-side rendering of Web Components. And that's been fun, and we like that... And one of our devs came across a blog post from Shopify, where they were working with a thing called Wasm Time, and Quick.js. And they had created a way to compile Quick.js into Wasm, with a JavaScript module, and then be able to execute that in any Wasm-compatible runtime.

So most of the time when we think about Wasm... Or Wasm. I'm not sure which it is, but --

**Jerod Santo:** However you like.

**Brian Leroux:** Yeah. I'm Canadian, so I sometimes say "JavaScript", so maybe I should Wasm...

**Jerod Santo:** \[laughs\] I would appreciate you to say JavaScript every time. I like that.

**Brian Leroux:** JavaScript. I unlearned that, going to conferences, because people would just look at me and be like "JavaScript...?"

**Jerod Santo:** Like "Who is this guy?" \[laughs\]

**Brian Leroux:** Usually, when we think of Wasm, we think "Let's take some native code and run that in the browser", which is a cool use case, and brought a whole bunch of stuff to the browser. This technique that the Shopify guys figured out lets us take JavaScript browser stuff, and run that in different backend runtimes. And so one of our devs was like "Wow, I wonder if I could run the Enhance SSR module in Wasm. And if we could, could we then server-render JavaScript components from different backend runtimes like Java, or PHP, or Ruby, Python, Rust, whatever?" And it worked... Which we were all kind of surprised.

**Jerod Santo:** Surprise! It seems like -- I would say it's a hack, but it seems kind of roundabout, or something.

**Brian Leroux:** It feels hacky. It does. Because we're bringing a whole JavaScript runtime to the party. And there's a whole bunch of immediate things you think. One, if you're bringing a whole JavaScript runtime into Wasm, it's gotta be big, right? It's gotta be slow.

**Jerod Santo:** Slow, big... Yeah.

**Brian Leroux:** \[10:22\] And it's not. It's fast, it's tiny... It's pretty quick. You end up with like a three-megabyte payload, but on the server side that's not as big of a deal. And this opens up a whole bunch of really cool use cases. So in the past, we've kind of maintained a good, clean separation between our frontends and backends. But that does create its own problems with those separations of concerns. So if I build my whole front end and react, that's great. But now if I want to server-render anything, I have to run Node, or Deno, or Bun, or something like that.

**Jerod Santo:** Exactly.

**Brian Leroux:** And a lot of shops don't do that. Like, there's tons of shops out there that are running Java, or Python, or whatever. And so they end up with spinners. They end up with a fully client-rendered app, skeleton screens, and poor user experience as a result. And that's a bummer. So this technique would allow them to do a design system, build a bunch of components, and still be able to server-render them in any backend runtime that they want, which is pretty exciting.

**Jerod Santo:** I agree with you 100%, which is why I was immediately excited about this, and I immediately reached out. And I was like "This seems like this could be --" I don't want to overuse the term game-changing, and of course, it does feel like a hack... But the possibilities it opens up are really big for a lot of shops. And so I want to get the word out about it, because it seems like it could be a really good thing for a lot of people.

**Brian Leroux:** Well, and I don't think it has to be just us. So there's a lot of zero-sum thinking these days in open source, but now the road is paved, so there's nothing saying someone can't take this technique and use this for other types of renderers. So maybe you want to use handlebars on the client server, and get that working in both places. Or maybe you want to try and get React to work. I don't think it will work very well from a performance perspective, but it's worth a shot.

And yeah, the kind of big example for me has been design systems. So this is a pretty big trend these days; it kind of comes out of big-co's. So if you've ever worked at a big company, you quickly learn that big companies don't grow kind of organically, they grow through acquisition. And what ends up happening is you get a big company that's actually 10 or 11 companies in a trench coat. And each one of those acquisitions has a different stack.

**Jerod Santo:** Oh, for sure. Yeah.

**Brian Leroux:** So design systems came around, where like what we'll do is we will have a cohesive UI for our entire portfolio of products, and we'll basically be reimplementing that in each one of these stacks. And so if you've got your blogs in WordPress, you're going to be implementing the look and feel inside of PHP, but if the main app is running in Java Spring, you're going to be jumping into a thing called Thymeleaf. And if parts of the app are written in Node, you're going to be jumping over to Node... So this would let you have a design system with a single set of definitions, and you would lose that kind of Uncanny Valley of having to reimplement everything in every different backend... Which is pretty cool.

**Jerod Santo:** Yeah, for me it also opens up the possibility of just globally sharing of components. Like, across every stack. It's like "Well, here's a web component that this person wrote. It's really high quality, it does all the things it has all the accessibility built in, everything's been thought through." And now, if you can basically run Wasm on your backend, which is most languages at this point, then you can server-side-render that sucker and just integrate it into your application, no matter what you're doing or where you are. I think that's pretty cool. I think it opens up a lot.

**Break**: \[13:50\]

**Brian Leroux:** It feels like a Holy Grail moment, for sure. And I'm certain -- there's probably people listening that want to figure out how to get this kind of going for themselves, or maybe they don't want to use Web Components, which is totally cool, by the way. I'm all about diversity in our solution space, so... We used a project called Extism. And it's spelled kind of weird, but it's Extism. And it made this dead simple. So our renderer is already pretty dead simple. I think it's got two dependencies. One of them is Parse5. We effectively take a string of HTML, we find all the custom elements inside of that, and then we expand them. And so our renderer is a couple hundred lines of JavaScript with two dependencies. So packaging it was super-easy. I think more complicated renderers, kind of the more mature frameworks that have been doing this stuff for a while might have more difficulty bundling and packaging this stuff... But definitely check out Extism if you want to run a JavaScript module in a weird place like Python, or Ruby, or something like that. They absolutely made this possible.

**Jerod Santo:** I will link up to that. Their GitHub has a list of languages that they support.

**Brian Leroux:** It's pretty comprehensive.

**Jerod Santo:** Yeah. I mean, I couldn't find one... Even Haskell. OCaml, Zig - which is, of course, up and coming, but not the thing that you're going to typically run a web application backend on. But yeah, lots of things. Happily, I did see Elixir on the list, so we are Elixir backenders around here at Changelog; our platform is written in Elixir. Of course, tons of JavaScript runs in our frontend, but I would love to have shareable Web Components that I can just run from my Phoenix backend, and just SSR those suckers into my application.

**Brian Leroux:** And there might be other things that you could do there, too. A common one is shared validation logic. So maybe you've got something that verifies a form, or whatever... It'd be nice to be able to reuse that across different properties before it mutates with time, which they tend to do.

**Jerod Santo:** That has been a panacea I've been chasing for many years...

**Brian Leroux:** \[laughs\]

**Jerod Santo:** ...as I was writing my Ruby on Rails apps and my client side JavaScript... And I tried to get those validation rules to matriculate into JS land, and it was just always a mess. You kind of get it working, and then something messes up... Especially uniqueness validation specifically, which require a server side call, because you can't check that in client, of course... Unless you're gonna ship your whole user database into the browser, but not advised.

**Brian Leroux:** \[20:02\] Right. And you've got to do that backend call anyways, because the client could be compromised.

**Jerod Santo:** Lying. Yeah.

**Brian Leroux:** We had a lot of fun -- I hadn't touched Rails since - 2.3 was the last time I'd played with it. And it was kind of delightful to get this demo running, because it was like seeing an old friend, you know, \[unintelligible 00:20:23.25\]

**Jerod Santo:** Right. "I remember this..."

**Brian Leroux:** ...there was no delay. It was like \[unintelligible 00:20:28.01\] Oh yeah, that still works.

**Jerod Santo:** Like riding a bike. You're like "Ah, it feels natural."

**Brian Leroux:** There's a few new folders, there's a few new idioms, but it generally felt productive.

**Jerod Santo:** Right,

**Brian Leroux:** It's something that I really missed, actually.

**Jerod Santo:** Yeah, I used it up to about five or six, and it's probably been maybe 10 years now, maybe less than that, that I've used it like on the daily... And slowly, people have been drawing me back in with reasons to like pick up and start a Rails new. I haven't done it yet, but I wouldn't mind trying it. It seems like it would be kind of fun. Nostalgic almost, you know?

**Brian Leroux:** It is a little nostalgic... But yeah, it's held its own, and it's still pretty good. And I had the classic Ruby experience, where my whole install was borked, and it took me a day to figure out why.

**Jerod Santo:** That's the biggest problem with it. \[laughter\] I mean, I guess I'm thankful for Docker, although I don't like to run Docker on my Mac, because it's so stinking slow on the Mac... But being able to have some sort of container-based setup for Rails specifically... Because Ruby version management over the years has been just a cesspool, and a hard problem to solve, apparently.

**Brian Leroux:** I mean, they all are, really.

**Jerod Santo:** Yeah.

**Brian Leroux:** And this project helped remind us of that fact.

**Jerod Santo:** Because you guys went out and set up like -- are they example apps, is that what you call them? Or implementations? Like "Here's what it would look like to run your Wasm server-side in Rails", for instance, to get your actual Enhance Web Components running in these different frameworks. And you did a handful of them?

**Brian Leroux:** Yeah. So we started with WordPress, because that kind of felt like one of the more neglected places these days... It's like, everyone wants to use and run WordPress, but the actual running and using of WordPress is a bit gnarly. It's grown over time. So Ryan Bethel on our team got that working, and he actually had the epiphany that any language with a DOM parser would actually be suitable to do an implementation of our server render algorithm... So he did a pass that's pure PHP, just to do the comparison and see what it's like. And it is faster to go drop into pure PHP, so he's been kind of pulling on that thread a little bit lately. PHP, of course, has a great DOM parser, and has been doing HTML for a long time, so... That was the first one.

I did a Rails demo, we got a Flask one... I think there might be a -- there's a few people jumped into .NET ones, which I was grateful for... And I'm trying to think of what else. Oh, there's a Go one, a Rust one, of course... So yeah, we built out a few. We want to kind of go a little higher level though, and do examples, and instead of doing it in Ruby, you do it in Rails; instead of doing it in PHP, you do it in WordPress and Laravel, that kind of thing.

**Jerod Santo:** Right. Pick some frameworks and show the integration points.

**Brian Leroux:** Yeah, exactly.

**Jerod Santo:** So let's say I was a backend Go person - not that any of them would listen to JS Party, because they despise JavaScript. But if I was... \[laughter\] And I thought "Okay, I want to try this out for Go", what would be my steps? What would I do first? Write a web component and then port it, or start with Enhance first? What do you do?

**Brian Leroux:** We've got a demo repo... I'd say join our Discord, because there's probably someone else out there that's already done this, and see what they've said. But I do believe we have a Go repo, but I don't know -- let me really quickly check. So our GitHub is enhance-dev, and then you can just do a search for your favorite language. And we do have enhance-ssr-go. And it's just a little silly... I guess the way that Go developers like to work is as few dependencies as possible. So our example is a whopping 120 lines of code that demonstrate doing this without any dependencies at all. So that's kind of cool.

**Jerod Santo:** \[24:12\] Okay. That's not too bad. Considering --

**Brian Leroux:** No. Yeah, I've never deployed a Go thing myself. It's on the list of things I'm kind of interested in, because it looks like a slightly nicer C, if anything... But I don't really know much about it.

**Jerod Santo:** Yeah. Well, a universal binary sure is nice. You can pile it all and just like ship a single file to a server somewhere, and just say "run", or ./

**Brian Leroux:** Yeah. And I know it gets killer-good performance, too. And Go and both Rust are very Wasm-centric projects, so there's very little outside machinery to get that working.

**Jerod Santo:** Right. So if you're a typical full-stack JS dev and you already had your Express backend, or maybe you're running Bun, or something - like, you don't need to think about this. You would just go for Enhance straight up, right? Because that's already what Enhance does. I mean, there's no reason to put it inside of Wasm, because now you're just like wrapping a container around something you don't need.

**Brian Leroux:** Yeah, exactly. I don't know the exact performance delta, but I think it's pretty significantly better to just run it in straight Node. I know that we're rendering something silly though, like thousands of elements per second... So unless you've got like a really egregious DOM, it should be fine.

**Jerod Santo:** And can you take existing web components that maybe you're just running in the browser via script tags, or whatever, and get those going? Is there anything that's Enhance-specific, or -- is it a port thing?

**Brian Leroux:** There is. Yeah, so our trick for server-rendering is a specific interface. And so you have to have a render method, and it has to implement a specific signature. The signature is basically - the method needs to be named render, it has to accept an object, that object has to have a key called html, and a key called state. html is a tag template literal that we pass in, and state is the state that gets passed in. And then you can do whatever you want in the body of your render function, but typically, you would iterate over state, and you would build up a variable to pass the HTML, which you return. And that sounds way more complicated than it is. You basically implement a function that returns HTML.

**Jerod Santo:** Okay. So there's a few things you have to conform to, but nothing that's too onerous.

**Brian Leroux:** Yeah. And so the kind of challenge with current web component systems like Lit is they implement the fullness of the DOM capabilities. And so when you're mounting a web component, it has a whole bunch of events. One of them is called connected callback. And it's very common for people to generate HTML inside of all these events that run. So in order to server-render, you basically have to mock the entire event system of the browser, which is why server-rendering Web Components hasn't really been a thing, because mocking an entire browsers event system, and then making most of it no ops is both challenging and kind of slow. So we cheat by saying "Here's the place where you render HTML. And it can only be this place." And this isn't like some huge innovation, this is very similar to how React works, where it's an immediate render pattern, UI is a function of state, as it were... So same idea, same thing. And this lets us reuse the template on the server and the client, so that we get a consistent experience and we don't have to mock out a whole browser on the backend to do our render step.

**Jerod Santo:** Are there certain things that just won't happen server-side, or that there's no reason to even do anything about them?

**Brian Leroux:** There's a bunch. Like submit, click, drag enter...

**Jerod Santo:** Those are pretty typical... Yeah.

**Brian Leroux:** There's a whole bunch of stuff that the browser just does. Most of what the browser does is respond to user interactions, and it tells us about this through events. And you don't need any of that server side. I'm just rendering a header here; I've just returned a bunch of \[unintelligible 00:27:53.24\] HTML, so it's not a thing you need.

**Jerod Santo:** \[27:58\] So what if you're entering a header that has a form in it with a submit, and stuff? Are you basically just rendering the first version of it, and then the browser attaches to those events once it's there, and then like you're done on the server side, it's all browser from there on out?

**Brian Leroux:** Yup, exactly. And you can have a single definition for that. So you could have my form extends HTML element, and then put all that business inside of that. And yeah, we'll do the initial render, and then if JavaScript kicks in - and I think that's a very key statement, because JavaScript doesn't always work. And it's okay to say that. It typically fails like 1% to 2% of the time for different reasons. Network requests, crappy carriers, drove under a bridge, whatever. Or you had an error on your page. And in client renders scenarios, that's bad, because nothing happens. You just get a blank screen. So if we server-render and then if JavaScript kicks in script tags there, it'll take over at that point.

**Jerod Santo:** What about when things do go wrong? Do you have any visibility into stuff? Or is it just like a black box?

**Brian Leroux:** Um... It's HTML, so it's pretty forgiving. So a lot of following the spec means not failing. But then trying our best, which might result in failure. \[laughs\] So an example would be I opened my h1 tag, but I forgot to close it. What do we do? There's ways that the browser and Parse5 in particular will handle this, and it will do its best effort, and it'll give you HTML back, and that HTML will render, but it might not look like how you want it to look. So... You get that experience.

There's no real black boxes that were client-side. In fact, I'd say it's substantially better than current transpiling techniques, because this is all just native. So if you go to enhance.dev the website, and view source, you'll see the source that we wrote, and it's a bunch of HTML elements, custom elements. And all the browser dev tools work. You don't need a special plugin, or anything like that. There's no source maps...

**Jerod Santo:** That's cool.

**Brian Leroux:** It's just the raw HTML, as it should be. And it looks very semantic, and what you would like it to look like. Your header says "My header", and when you open it, it's got a header element inside of it. Form would be like "My form."

**Jerod Santo:** That's cool. So the dev tools are very much aware of Web Components, and able to handle them natively.

**Brian Leroux:** They're really good, yeah. There's some weirdness with slots still... So if you have a component that slots in content in a few different places, sometimes they'll show that content in a different spot in the DOM in Chrome Dev Tools. It's a bit weird. But it's trying to preserve all of the information, so you know it's slotted content... So that's one part where I've been like "Oh, that's kind of strange", but you get used to it.

**Jerod Santo:** Okay. That's cool. I didn't know that. I haven't actually jumped on the bandwagon yet, I'm just kind of like over here writing my HTML still... But interested. I see my good friend Zack Leatherman publishing Web Components for all kinds of things... And it's like, okay, people are actually writing these and releasing them as things you can use... And I find that pretty compelling, so I'm getting close to like jumping in the water... But just kind of watching other people for now. And I've heard like this HTML Web Component movement, where it's like a subset... Can you tell me what that means? I don't understand. It's all JavaScript, right?

**Brian Leroux:** Yeah, so we've been doing this the whole time. I think a lot of other people kind of stumbled into a similar pattern and started calling them HTML Web Components, which seems like a bit of an oxymoron, but...

**Jerod Santo:** Yeah...

**Brian Leroux:** ...the meaning is basically, they're components that don't require client JavaScript to render per se. So there's nothing preventing you right now from doing my \[unintelligible 00:31:43.03\] and like putting that in HTML with no client-side JavaScript whatsoever. You're allowed to do that. That's okay. And HTML Web Components are... This. They're components that don't necessarily have a JavaScript analog or on client that's running... But they often can, and do, but you're supplying the HTML initially.

\[32:12\] The other aspect is treating the Shadow DOM as an opt-in, as opposed to a default. So when Web Components first kind of came around, one of the very strong desires was to have better encapsulation. I don't want to open up some component and have it leaking its styles and stuff all over the rest of my DOM, especially if I'm bringing it in from a third party. And that's a wonderful idea, and that's a great capability. This comes with a bunch of trade-offs. If you have a shadow root, or if you're using the Shadow DOM inside of your web component, a ton of behavior changes in the document. One of the big changes in the behavior can be the form elements might not behave the way that you think they will, and you'll have to write a ton of JavaScript to fix that.

And people struggled with this, and they've written a ton -- like, classically, we write a ton of JavaScript to fix the problems that we introduced with JavaScript... And we looked at the problem and we were "Well, just don't use the Shadow DOM." Just make that an opt in. So if you need it, it's there. We're not saying never use it, but we are saying "Hey, maybe my header component isn't going to be shared on another person's website." It seems pretty reasonable that my header would belong to me... Most of my components, in fact, almost all of them will probably only be used by me. So do I need to like protect myself from me? I mean, somewhat... But --

**Jerod Santo:** \[laughs\] Is that a philosophical question, Brian, or...?

**Brian Leroux:** Yeah, yeah... But we can definitely get away with not using the Shadow DOM as a default, and then make that an opt in for richer components that maybe get shared across different environments. So an HTML Web Component is a component that comes with its HTML already rendered, and maybe it doesn't use client JavaScript, and probably doesn't use the Shadow DOM. That's the definition for me.

**Jerod Santo:** Okay. And the advantage being that it is faster and more portable?

**Brian Leroux:** Faster, portable, more predictable. Working with the Shadow DOM is very much like working in an uncanny valley. It's like the DOM you're used to, except there's a whole bunch of exceptions. So styling is going to work different, forms are going to be broken... It's going to take a sec to initialize, so there can be some jank in the rendering... And so this just walks right around all those problems. And again, so everyone is clear, I'm not saying Shadow DOM bad. I'm not saying "Shadow DOM, don't use", I'm saying Shadow DOM is a good opt-in, and maybe not the best default. The light DOM got us here. Most websites are built with the light DOM, so it's okay to build with the light DOM, and then treat Shadow DOM as like a last knife in the boot kind of thing.

**Jerod Santo:** That makes sense to me.

**Brian Leroux:** It's a bit controversial, because the whole web component thing kind of waved the Shadow DOM flag a lot, and it really --

**Jerod Santo:** It did.

**Brian Leroux:** ...it really tried to push that, and a ton of devs are realizing "Maybe I don't need that. Maybe it's not a good part, perhaps."

**Jerod Santo:** It seems like some of that - and I'm going back a long time now. I'm not sure how long all of this has been out, but it seemed like the Shadow DOM and some of the encapsulation stuff was one of the reasons why Web Components were kind of \[unintelligible 00:35:26.16\] at first. Or people were saying "This is not going to be ready for primetime", or "I wouldn't use this", and "They're too complicated." I can't remember, but there was like a lot of pushback against the early versions of Web Components.

**Brian Leroux:** There was, and it's for a variety of reasons, I think. It's hard to get a group of devs to agree on anything anyways...

**Jerod Santo:** Right.

**Brian Leroux:** \[35:49\] And the ergonomics are a bit funky. At the time of their definition, \[unintelligible 00:35:54.04\] stuff was very popular, React was extending an element, and so they wanted to have those similar ergonomics. But by the time it shipped, it became a lot more functional in the kind of mainstream programming world. And so it looks a little long in the tooth; you've got an extended HTML element, which feels like kind of classy, maybe not quite right.

**Jerod Santo:** Right.

**Brian Leroux:** The Shadow DOM stuff is a cold shower as soon as you've got forms involved, because you've got to use an API called Element Internals. One of our devs did an example where he reimplements a checkbox. Just a boring ol' boolean checkbox. It's about 250 lines of code to make a checkbox work inside of the Shadow DOM.

**Jerod Santo:** Wow.

**Brian Leroux:** If you don't use the shadow route, the checkbox just works. \[laughs\] Now, that's a checkbox; most forms have a lot more going on, and you end up with a ton of bloat just to make a form do what it already could do. The argument would be "Well, what if I want the encapsulation of the Shadow DOM?" Well, most forms are pretty specific to my application use case. Not many people are sharing my database schema. So I think it's generally okay to keep a form out of the Shadow DOM until further notice.

And then certain elements absolutely may be needed. A good example is a text area that's a rich text editor. But you would probably want to serve the form with a text area, and then let JavaScript take over and do all of its business, but make sure you've got a working version first, that text area. So it's just an approach. And I think actually, that's another way to look at HTML Web Components there... They're treating Web Components as a progressive enhancement step, as opposed to treating them like something that you reify from running JavaScript and executing it. So it becomes -- JavaScript's still there, it's still running, it's still cool, we love JavaScript, but it happens after the script tag loads. And so you want to give people a working user experience first.

**Jerod Santo:** Yeah. Especially if JavaScript fails, then you have -- it's not even first, it's altogether... There's still a working experience that falls back. I guess "falls back" isn't the way that progressive enhancement people look at it; the other way around, right?

**Brian Leroux:** Well, yeah. I mean --

**Jerod Santo:** It's the same thing, different perspective. Yeah.

**Brian Leroux:** Yeah. What did they term it? ...graceful degradation.

**Jerod Santo:** There you go. It gracefully degrades.

**Brian Leroux:** Yes.

**Break**: \[38:24\]

**Jerod Santo:** How much of this is platformizable, insofar as like will it work its way into the platform? I'm thinking of the hacky stuff that y'all are doing to make this possible. Are there ways that the browsers and the platform creators can do things to help us, or...?

**Brian Leroux:** I mean, yeah, big time. So there's a couple of different groups... There's the Web Components Work Community Group, and then there's the Open UI Group. And I think we've all realized that we've implemented tabs enough times now. We feel pretty good on that one.

**Jerod Santo:** We could use some more high-level widgets, right?

**Brian Leroux:** We could use a few more... And stuff that we're implementing -- you know, combo boxes as icons, or the accordion thing... Like, come on, how many times do we have to do this? So some higher level components is a big one. I think another big one is figuring out DOM diffing for folks. So we still find it probably better to surgically update the DOM inside of a component. Bringing these various ways of morphing a DOM between two diffs, VDOM approaches are pretty heavy, and they're pretty slow. And this just feels like a candidate for standardization. Give me an inner HTML that's smart. And I know that the browser vendors have been punting this one around since React happened, so it's probably a pretty long road... But it really does feel like something that we need as a native primitive, because everybody brings a different solution to diffing, and they all have funky trade-offs.

**Jerod Santo:** Yeah. Not to mention you've gotta ship that logic every time, right?

**Brian Leroux:** Yeah. It's slower, it's a payload... It's new rules, too. We find the safest way to do a diff is to have a bunch of IDs, so your DOM bloats out with like a whole bunch of instance IDs, so you know which elements are supposed to be where... So having a native way to do that would be pretty great.

I think otherwise though, we're always looking so far forward... And yet things have gotten really good. Like, the browser's pretty incredible these days. And CSS especially. I'm moving more logic into CSS these days than I am into JavaScript, and I don't see that slowing down. We're just getting more and more toys for declaratively doing stuff, and it's kind of wonderful how little JavaScript we actually do need on the client these days.

**Jerod Santo:** Yeah, it feels like the golden years for CSS right now. For so long it felt like it wasn't going anywhere, and now, as a person who is not daily into it, I'm sometimes overwhelmed by how much new stuff there is. I'm like "Wow, I didn't even realize you could do that." And it goes deep, too.

**Brian Leroux:** Yeah. I saw there's a light/dark function coming now.

**Jerod Santo:** Oh, really?

**Brian Leroux:** So that's gonna be built in. You'll just be able to define a variable, "This is what to run when light, this is what to run..." Like, super-nice.

**Jerod Santo:** Nice. Yeah.

**Brian Leroux:** Lots of little things in there. Testing, we've got custom properties now...

**Jerod Santo:** Yup.

**Brian Leroux:** ...hiding and showing \[unintelligible 00:45:24.05\] is becoming a declarative thing, so we can just do that without having to resort to hiding and showing divs with JavaScript... Pretty great.

**Jerod Santo:** Yeah. Can we get to a point -- I don't know enough about design systems to answer this. Maybe you do, maybe you don't. But can we get to a point where you can just formalize your design system into the browser somehow? You know, a lot like CSS variables, but it's like "Here's my rules for my design system", and I'm kind of done, or at least kind of there...

**Brian Leroux:** \[45:55\] I mean, Brad Frost has been banging a drum about global design systems on his blog lately, and I'm pretty bullish on this idea, too. So we -- I'm not sure how we get there completely. I think we need some new components, I think we need some new toys from a high level... But we probably don't need to reimplement button every time anymore. And custom properties points to a way to make things somewhat themeable. The irony to me of this is that we will end up with a flat file of variables, and that really starts to look like BEM again to me. We've got like primary, secondary and tertiary colors, and...

**Jerod Santo:** Right.

**Brian Leroux:** I don't know, but it feels like we're super-close to figuring this one out. All the toys are laying around, but it's an unassembled Lego castle right now, and we know that there's something...

**Jerod Santo:** Right. We need someone to create the schema or the plan... To put them all together and say "Here, use this recipe", and then we all start to use it, and then we have the golden years again; the glory days Begin.

**Brian Leroux:** Yeah, maybe. I mean... There's a bunch of stuff that's just not reusable. And there's also a bunch of stuff that is just not interactive. And so these are two things that I think we've got to get better at realizing. Most of the elements in the page are inert, and probably the majority of your visual brand is not reusable to other brands. Walmart's not going to get much use out of Ikea's design system. And that's probably okay. But there is a bunch of stuff just under the surface that we all have.

**Jerod Santo:** Sure.

**Brian Leroux:** Typography, and accordions, and buttons... And so can we normalize that at least? \[laughs\]

**Jerod Santo:** Right. Let's raise the tide. But we don't want another Twitter bootstrap, where every website looks the same. Like, we still want you to be able to -- we don't want the web to get boring because of this... And that's what tends to happen when you create forms, and you create standards, and everything must conform... Then all of a sudden every website just has different colors, but the same exact buttons. And we don't want to put people in that box, by any means.

**Brian Leroux:** No... It would be cool to get back to those flashy days, where things were a little more experimental.

**Jerod Santo:** Do you literally mean the Flash days, where you load like this Flash animation?

**Brian Leroux:** Maybe not the loading --

**Jerod Santo:** \[laughs\] It's like 30 seconds to load this little -- I mean, they're always cool, but...

**Brian Leroux:** I mean, we're kind of there right now, with the skeleton screens, and stuff... But it would be cool to see a little more -- yeah, I mean CSS is incredible. We can do so much with that now. We should be getting a bit more creative out there.

**Jerod Santo:** I agree. So Enhance is the framework. Enhance Wasm is how you run it on arbitrary, somewhat arbitrary backends. What is Begin? So Begin is your business... Can you tell us how this fits into your whole story? Like, how does Enhance fit into Begin, and what do you all do? Are you an agency? Are you a startup? etc.

**Brian Leroux:** Yeah, we're startup. We do hosting. We help you deploy to AWS in particular.

**Jerod Santo:** Okay.

**Brian Leroux:** We think lots of people do that, and we've felt over the years that there could be a higher level, nicer way to do that... And Begin is that. It's about a minute and a half, and you can deploy a site on Amazon... Which is significantly faster than any other way to do it. And we have a local development environment for doing that, and so you could start building right away without a credit card, on your own machine. You don't need to sign up for Amazon necessarily, you can use our free tier... But if things grow, and you outgrow us, which is pretty normal, we can also deploy to your Amazon account.

And so Begin really started with us trying to build a way to build serverless applications. So when serverless really started to kick off, a lot of different approaches emerged, and a lot of them were pretty complicated... And we wanted to just cut all the business out that was complicated, get rid of all the infrastructure concerns, and just focus on your code. And that's been going well, and lots of people are using it, and it's based on an open source project called Architect that's a part of the Open JS Foundation. So you can look that up at arc.codes. You can run all of it yourself; you don't need to use us. You can deploy Architect apps to your own CloudFormation or to your own AWS at anytime. And so that's nice, because Begin is a startup. So if we have an exit, and we go away, your code is still portable to your own Amazon account, which we think is a customer-friendly way to work.

\[50:28\] So Begin's good, and that's great, and that's all very backend-centric. When serverless happened, I really believed that this would just be the way people would want to work. They wouldn't want to load-balance a monolith, or set up Kubernetes, and pods, and all this other business. They just want to write their code and run it.

What I missed was that a lot of people that are coming to the cloud are coming from frontend. And that's where all the growth is. So this is where Enhance fits in. We didn't want to be another React framework way to get to the cloud. There's a bunch of those, and they're kind of -- they do their thing, and that's fine. We wanted to be a way to do it with truly modern primitives and Web Components. And yeah, you don't need to use us or Amazon with Enhance, but it's designed to work well with those places, and it deploys to those places.

**Jerod Santo:** Very cool. Makes sense. Well, Begin.com, Enhance.dev, and enhance.dev/wasm. We will link up all the things --

**Brian Leroux:** Wasm!

**Jerod Santo:** I've called it now both pronunciations throughout the show, just to keep our listener on their toes. We don't want to bore anybody with standardization. Anything else, Brian? This looks really cool. I'm excited about it. I hope that people kick the tires, try it for themselves, implement their own backends, and start to build out some tooling around it so it's not just an idea and an example, but it's actually maybe something that's vibrant and community-oriented.

**Brian Leroux:** Yeah, I would love it. If you're out there and you're writing anything really, but especially not Node.js, we need your help. So please join our Discord. And if you want to give us a hand, we're looking for people that are cool with Python, PHP, Java, .NET, Rust, Go... Zig, I guess, if you want to do that on the backend... \[laughs\]

So we want to build out all those examples. We've just started implementing a suite of components ourselves, so that we can say -- the kind of dream would be we've got a page, like let's say components.rb. Enhance.dev/components.rb. But then you could change it to .php, and you'd get the same page. And that would be one codebase. So that's what we're working towards. We are definitely still in the early prototype phases.

Also, we'd like to ask out there if folks could take a look at checking out Extism, because I think it's got a lot of promise, and it's just really cool. Those guys are crushing it. If you have any JavaScript that you want to try and run in different places, do check that out and let us know how it goes. And again, we're not a zero-sum thinking company; we're super-into open source. So if you're a Svelte hacker, it would be cool to see if Svelte could run inside of Java. If you're a React hacker, I would love to see it running inside of Python directly. Let's do that, and then let's benchmark these things and see how well they perform.

**Jerod Santo:** Yeah. So many interesting possibilities with WebAssembly, that just weren't obvious. And the promise of WebAssembly, I've always said, has been "Next year it's gonna blow up" for a very long time. And we've seen cool things that have happened, people who have leveraged it for much success... But not like a mass -- they're never mainstream dev... You know, it's always been like "These people are using it for this, and you can kind of do--" But now it's kind of like "Hey, there's so many things that it can do" that it's just interesting.

**Brian Leroux:** It's one of the weird -- Web Components went through the same thing, where... This initial hype, and then a pretty deep trough of disillusionment, and now this plateau of productivity is happening, where people are just building cool stuff... Yeah, I don't know what's up with that. That's a thing though, lately, with our industry, where something's really promising, and we all get super-excited about it, but then we're all like "Yeah, there's some other exciting thing." And then it's like "Wait, no, this thing is still cool."

**Jerod Santo:** And five years later we come back, "Oh, it's still laying on the floor. I'll pick it up. Oh, it's a little bit nicer than it was before, but not majorly different. Still the same idea, just maybe a little bit nicer", and we start using it. So I don't know.

**Brian Leroux:** I mean, it guess with Wasm they had to do a lot of infra work in all these other runtimes...

**Jerod Santo:** Yeah, true.

**Brian Leroux:** ...but now it's kind of baked in everywhere, so I think it's --

**Jerod Santo:** Yeah, every language and runtime has a good reason to have good support at this point.

**Brian Leroux:** Weirdly though, the Java community not as much really.

**Jerod Santo:** Really?

**Brian Leroux:** Yeah, we started with Wasmtime, and there were some strange attitudes there, where like... I read like a Stack Overflow post where someone's like "The JVM is the universal runtime."

**Jerod Santo:** \[laughs\] Okay...

**Brian Leroux:** I was like "Okay, sure. We've been hearing that one for a while, too. But I just want to write a bit of Wasm there." But that's part of the reason we actually found Extism, because they had support for Java, whereas Wasmtime, so... I don't know.

**Jerod Santo:** Yeah, you kind of have a little bit of the innovators dilemma there. The incumbent can't see it, because they can't see it, you know?

**Brian Leroux:** Yeah, yeah, exactly. Well, that was the original promise of the JVM, but...

**Jerod Santo:** For sure. For sure. But not a silver bullet. Neither will WebAssembly be a silver bullet. But we put together these technologies in ways that serve people, and we hopefully get better at it over time... And eventually, we forget about a thing, and then we pick it up later, and we realize "This is useful." So it's cool that you guys picked it up and realized it, and actually are using it hopefully too much success. So I'm rooting for you, I'm excited to give you as much coverage as we can, because I think that there's a lot here that could help a lot of people if they see it.

**Brian Leroux:** Well, thanks, man. I appreciate that.

**Jerod Santo:** Awesome. For Brian Leroux check out all the links in the show notes. I'm Jerod, this is JS Party, and we'll talk to you all on the next one.
