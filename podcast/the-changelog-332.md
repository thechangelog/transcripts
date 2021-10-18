**Jerod Santo:** Rich, we're here to talk about your magical disappearing UI framework, but before we get to that, let's talk a little bit about your day job. You've been a long-time journalist and you're a graphics editor at the New York Times Investigation team - tell us about that lifestyle and what you're up to at the Times.

**Rich Harris:** Yeah, my job title is graphics editor, which is a slightly nebulous job title, honestly. A lot of the time I am working on graphics, I'm building interactive charts and things like that, things that help explain complex topics in the news, but really it'd probably be more accurate to say that I'm a JavaScript journalist.

**Adam Stacoviak:** Nice!

**Jerod Santo:** That sounds cooler even.

**Rich Harris:** Yeah. I currently work on the Investigations team at the New York Times, and I'm part of a unit that uses computational techniques to find out things and report them.

**Jerod Santo:** That's awesome. Can you give us a for-instance, maybe something you've done in the last six months or a year that's like a "For instance, I've built this particular story/graphic..."

**Rich Harris:** Sure. About a year ago we did a story called The Follow Factory, which was an investigation into the economy of fake social media accounts - the people that make Twitter bots, and the people that buy them. We obtained a list of clients of a company called Devumi, people many of whom you've heard of... People like Michael Dell, famous actors like John Leguizamo, people like that who'd bought fake Twitter followers to try and puff up their own online influence.

We used a variety of techniques to track down where these bots were, where they were coming from, and we did a whole big exposé on what that economy looks like. So that's a pretty good example of the kind of work that we do, that marries traditional journalistic techniques with the kind of more modern computational techniques that our team specializes in.

And it had some impact - after we did that story, Twitter got rid of millions of bots off their platform; it was like a big, platform-wide purge...

**Jerod Santo:** The purge...

**Rich Harris:** ...which got people paying attention.

**Jerod Santo:** That's cool. So that was a result of that story and some of that fallout. You'll have to give us a link back, so listeners can go and check that out.

**Adam Stacoviak:** I've got one, man. It looks pretty awesome.

**Jerod Santo:** \[03:57\] Have you got it? Nice.

**Adam Stacoviak:** Yeah. This is an interesting -- it's kind of a scroll-driven page, that begins with this montage, a grid of a person's face, but sort of broken up like a fragmented mirror... Pretty interesting. Did you build this whole thing? Is the whole thing kind of like your baby, or is it sort of a team effort?

**Rich Harris:** I'm one of four bylined reporters on that piece. I did the bulk of the graphics... Not the opening graphic you've just described; that was a chap named Adam Ferriss who did that for us. But the later graphics, where we look at what these bots look like, what their behavior looks like in aggregate, when you start to analyze some of the statistical patterns - all that kind of thing was me together with my editor, Gabe Dance, and colleagues like Jeremy Ashkenas and Danny DeBelius.

**Adam Stacoviak:** Jeremy Ashkenas is a friend of the show. We've talked to him since way back. Gosh, it's been so long since he actually began his \[unintelligible 00:04:51.23\]

**Rich Harris:** He's sadly no longer of this parish. He left the New York Times back in 2017, but... That was the last big project that we worked on.

**Adam Stacoviak:** Having seen this page, I can see why you describe yourself more so as a JavaScript journalist, because this page is definitely a culmination of not only good journalism, investigatively, as well as written, but then how it actually formulates onto a page; I'm sure that you've got mobile viewports planned for, web... It doesn't matter which platform, you're still gonna be able to enjoy this content in a similar fashion. It's pretty amazing.

**Rich Harris:** Thank you. We obsess over making things look good on a mobile device, as well as on desktop, and all of this stuff. It's an interesting challenge, trying to take this vast wealth of information and condense it into something that makes a point that a reader who comes to a story without any level of prior knowledge or expertise can actually get something from it, and trying to use technology in a way that makes that more apparent and more impactful.

**Jerod Santo:** Technological question on this, which may lead into Svelte, maybe not, but when you guys do stories like these, is each individual story -- this feels like a unique experience, where this would be like its own separate software application, versus fitting into the larger Times CMS... Just curious, do you guys start fresh each time? Do you guys have an existing framework that you're shoving stories and code into, or is it like little microservices for each little story?

**Rich Harris:** In that example, the story is written into the same content management system that all of our journalists use. The individual graphics are -- each one is an individual Svelte application. The idea behind Svelte is that you can create a full-blown web app, but you can also create little parts of web apps. You can create embeds, like the examples that you're looking at right now.

**Jerod Santo:** Very cool. Well, that is the perfect segue into the main focus of our conversation. By the way, I have to give a thanks to Kevin McGee, long-time listener, Adam, long-time show idea creator, who's still listening, according to ping, who actually gave us the idea for this show.

Now, Svelte did cross my radar a couple years ago. I think I read your initial 2016 post, "Frameworks without the framework", and we probably logged it on Changelog News, but I didn't see much else between then and (I think it was) probably back in June 2018, when Kevin said "Hey, get Rich on the show. It should be interesting to talk about this magical disappearing UI framework." So here we are, Svelte 3 is upon us, so it's been a couple iterations on the idea... Take us back to the big idea of frameworks without the framework, what Svelte is and how it differentiates itself from other things that are out there in the front-end space.

**Rich Harris:** \[07:53\] Imagine if React and Vue and Elm and Babel and maybe some other projects had a lovechild, and the lovechild somehow inherited all of the best qualities - that's what we're aiming for with this project. It's a JavaScript framework. If you've used things like React and Vue and Angular and Ember, you'll be familiar with the concept. You create a series of components and you connect them together, and the framework manages updating the DOM in a way that frees you from having to do `element = document.querySelector`, `element.textContent =` bla bla bla...

The clarity of style of programming that is the way that people build web applications nowadays is designed to do exactly that, but it does it in quite a radically different way from traditional frameworks like React and Vue. What it does is it works on your components at compile time; as part of your build step, it takes your components and it compiles them into optimal, vanilla JavaScript. Rather than having a library in the browser that you give your components to, your component becomes the JavaScript module that executes directly. The result of that is an application that is smaller, typically much smaller, and is much faster to update. At the same time, you the author, because you're writing this very compact component format, you end up writing a lot less code than you typically would with other frameworks.

**Adam Stacoviak:** Does that mean that the end product is kind of difficult to peek into as a developer, like view source kind of a thing? I'm sure that maybe at compile time their vanilla JavaScript - it's probably minifying it, things like that... Does it make it hard to viewport or view source, things like that?

**Rich Harris:** It's a really good question, and it is a thing that we think about a lot. Obviously, if you're compiling a representation of the component into vanilla JavaScript, there is a slightly larger disconnect between the code that you've written and the code that executes, than if, say, it was just a transformation from your JSX (if you're writing React) to the React.createElement calls that that compiles to.

However, first of all, we have pretty good source-map support, and you can use that for debugging... But also, when you look at the compiled output, which we do optimize for readability as well as other things, it's really easy to understand what is actually happening. So the disconnect between what you've written and what you're running might be slightly larger, but it's paradoxically much easier to understand what's going on... Because rather than looking through 20,000 lines of library code when you're trying to understand how a particular state change resulted in a particular DOM update, it's right there in front of you, and you maybe don't have to look through 100 lines. So the experience that a lot of people have had has been that debugging has actually got easier, surprisingly.

**Jerod Santo:** The way I'm thinking about this - and correct my thoughts if they're wrong here - is that what it kind of is, or it could be boiled down to like a code generator. You're writing your JavaScript into this framework, but when you build it, instead of saying "Okay, here's my runtime. I'm gonna ship that with my code", it's saying "Take the code that I wrote and generate new code", that's very similar, but also has -- I think in one point in the docs you say the framework is embedded in the component, so it's code-generating the component based on the component I wrote... A fancier component, that has svelty things in it, that provide the functionality that I don't have to write. Is that a good way of thinking about it, or am I upstream of it?

**Rich Harris:** That's exactly what's happening. You're writing at a high-level; you're sort of behaving as the architect, let's say, and the compiler is acting as the thing that builds that thing that you've designed. So you don't need to worry about wiring up the lights, or doing the plumbing, or anything; that is taken care of, and your time is spent at a higher level, thinking more creatively about the kind of experience that you're trying to deliver.

**Jerod Santo:** So the framework is embedded in the component - that was a phrase that spoke to me, it made sense. But then I thought, well, what if I have 150 components on this page? Do I have 150 frameworks embedded into them? It seems like it would actually bloat more than shipping a single runtime that gets called into. Is that not the case?

**Rich Harris:** \[12:09\] It's not the case. That's another very good question, and a lot of people do hit up on this straight away, they're like "How can this possibly make sense when we're building something at the scale of a typical modern web app?"

**Jerod Santo:** Right.

**Rich Harris:** I'm actually the author of a module bundler called Rollup, so I've spent a lot of time thinking about this question as well, about how do you deduplicate code efficiently, and all the rest of it. Svelte does have an internal library. When it turns your component into a JavaScript module, it's not a completely self-contained bit of code; it's actually importing helpers from that internal library, just the ones that it needs, and the rest get tree-shaken away.

All the code that does the heavy lifting is in fact deduplicated, and so while you would expect it to scale very poorly, it actually scales pretty well. There is theoretically an inflection point where if you have more Svelte components, because the incremental cost of a component is slightly larger than, let's say, the incremental cost of a React component; in theory there's an inflexion point where the lack of a library is outweighed by the extra size of the components, but in practice we don't see that. In practice we see that the inflection point is at a much larger application size than people are typically building. And on top of that, we have code-splitting. Code-splitting is a technique that people use to deliver small chunks of their app at a time, so that when you first hit a page, you don't have to get all of the JavaScript for every possible thing that you could then do as you move through the application; it just gives you the code that you need for that first-page experience, and then the rest is loaded as and when you need it.

Now, with a traditional framework there's a pretty strict limit to how effective code-splitting can be, because the smallest chunk of your application still needs the entire library - all of your state management, all of your router, all of this other stuff, and Svelte doesn't have that problem. So while in theory there is this problem with scalability, in practice it's actually better than traditional frameworks.

**Jerod Santo:** Have you done any of the math on where that inflection point is? Could you say, "Well, you need to have an application with 6,500 components, or a million components...?" What's even the order of magnitude where people might say "Oh, the trade-off isn't worth it anymore"?

**Rich Harris:** I haven't done the napkin math on that, no.

**Jerod Santo:** Okay.

**Rich Harris:** The reason being that there's really no point. It's just an intellectual exercise that doesn't actually bear a new relation to how we're building applications. There is a project called the RealWorld Project by Gothinkster, you can find that on GitHub. The point of this project is to actually do this comparison; it allows you to do this comparison between different frameworks, so that you can get a sense of what it feels like to implement something slightly less trivial than the traditional TodoMVC, or HackerNews Clone.

There's a Svelte implementation of the real-world project, and not only is it about half the size of the reference React/Redux implementation, but there's actually about half the number of lines of code as well. So your initial payload is much smaller, your total application size is much smaller, and the number of lines of code that you had to write is much smaller.

**Jerod Santo:** One of the things you wrote - I think it was the subtitle to that post back in 2016, which we will include in the show notes - is "Why didn't we think of this sooner?"

**Adam Stacoviak:** Yeah.

**Jerod Santo:** \[15:32\] And here we are in 2019, and React is dominating the front-end framework space, you have Vue which is very popular and gaining steam, but really it's kind of a two-dog race, it seems like, in terms of just mass adoption. Angular had a head of steam, but has fallen to the third place in that regard, and Ember of course is always there, always just plodding along relentlessly, which we love... But Svelte - this model - seems like it's markedly better in terms of end user experience, because you're not shipping as much JavaScript, and of course, the raw kilobytes of the size of your JS bundle isn't the end of the story, because you also have to parse and evaluate that code inside the device, which is slower on slower devices, especially phones... So it's not like a bunch of big images versus a bunch of big \[unintelligible 00:16:27.26\] The point being - this seems like a pretty big advantage... Why didn't we think of this sooner, and then why hasn't anybody else adopted it? Or maybe they have, and I'm not paying close enough attention.

**Rich Harris:** Well, actually they have. Svelte probably wasn't the first library to do this anyway. We've had things like Elm, which is kind of a version of this idea, you could argue. Before there was Svelte, there was a project that I wasn't aware of at the time called Monkberry, which was doing something vaguely similar. There is a project called Marko form eBay, which again, is doing something not a million miles away from what Svelte is doing.

**Jerod Santo:** Okay.

**Rich Harris:** And then we have Angular's Ahead-of-Time (AOT) Compilation, which they're baking into their new renderer called Ivy. Ember's new rendering engine is a thing called Glimmer, which takes your Handlebars components and compiles them to a very efficient bytecode format. So pretty much every framework is adopting this model, and Svelte I think is probably the purest expression of the idea, in that it compiles your components to vanilla JavaScript and you don't need any of the library code once you've imported the component... But it's far from the only framework that has caught on to the fact that if you can move work out of the browser and into your build step, you're providing a better experience to users, and in most cases to developers as well.

**Adam Stacoviak:** You've gotta imagine too that being from the New York Times, that you think about not only download time or performance page speed, things like that, but you also think about battery life and things that generally users shy away from. You're a newspaper, so generally you have ads on your pages, in most cases, so you've gotta have that as a concern... So after you load ads, JavaScript, all that good stuff with that, you've gotta now deliver your application, and the easier you can make that on your users probably is very important. Was this project born out of the New York Times, and we're not just hearing about that part?

**Rich Harris:** It wasn't born out of the New York Times. It was actually something that I created while I was working at The Guardian U.S, just before I came to the New York Times. But it is absolutely born out of the problem that people doing this job have, which is that we're putting code which is often very heavily interactive, lots of animations, all that kind of thing, pretty performance-intensive - we're putting it onto pages that we don't control... Because very often we're doing embeds that sit in someone else's article, and on that article, as you say, we've got ads, we've got analytics, we've got comment widgets, we've got all of this stuff, and our code is the last thing that gets loaded. So it's sort of this hostile environment that we're working in, and we're working with these extraordinary constraints; we're often working on really punishing deadlines... And when I started Svelte, I did so because the existing tools frankly didn't allow me to do the job that I wanted to do, as well as I wanted to do it.

**Adam Stacoviak:** When you say people in your job, how often do you encounter other JavaScript journalists? Is this a seriously big type of role at all these newspapers and all these different news outlets? This is the first time I've heard that title, and I'm imagining there's lots of you out there, but do they all play at the same level of have the similar skillsets you do?

**Rich Harris:** \[19:53\] It's a very broad church. There's definitely a lot of people who would qualify for that label. A lot of them are here at the New York Times; New York Times invested very heavily in building out the graphics department. Way back when a lot of other publishers were still trying to figure out what their digital strategy was, the New York Times was laying the groundwork for - I'm not boasting here - the best graphics department in the world. It's had a ton of really influential JavaScript programmers come through the graphics department... Folks like Mike Bostock, Gregor Aisch, Jeremy Ashkenas.

But at the same time, we've got a lot of people who don't have a background in hardcore programming. We've got people who have backgrounds in straight reporting, and design, and they've learned JavaScript because they wanna be able to tell stories that are richer and more interactive, and that is the way to do it. Other news organizations definitely have other people doing very similar work. I'd struggle to give you an estimate of the number, but certainly in the U.S. there's hundreds of people in hundreds of newsrooms doing similar work.

**Jerod Santo:** It sounds like a pretty cool job. I like to work at the intersection of things like that. And to a certain degree we're independent publishers, we're not journalists, but we have similar concerns and similar motives, I think, with regard to storytelling and providing valuable information for people. But that being said, it'd be cool to be like "JavaScript journalist", and really work at the intersection of all those different skillsets - journalism, data science, design, programming...

**Rich Harris:** I always tell people that it's the best place to be a software engineer. You're surrounded by so many people with overlapping but different interests, which means it's a great place to learn. You're doing work that is important - it's important for us \[unintelligible 00:21:55.18\] And this is my favorite part of it probably - you can spend four weeks working on a project, rack up as much technical debt as you can manage, and then you can just light a match at the end of it and walk away.

**Jerod Santo:** I was just gonna say that, you don't have to maintain things...

**Rich Harris:** You don't have to maintain a product for months after you've launched it. As soon as you hit Publish, that's it.

**Jerod Santo:** I was just revelating that thought; I'm glad that you said that, because I was thinking, "Wow..." You have to care about these things that matter, but you don't have to care about the things that don't matter, which - to most of us, the things that matter is maintainability, and for software to be malleable, to change over time, because software that doesn't provide value over time isn't valuable. We wanna have valuable software.

For your style, it really is kind of one and done, which means you have lots of green fields as well; you get to start over a lot, which many of us don't get to.

**Rich Harris:** It means that we get to experiment with a lot of different ideas and technologies, so I think it's one of the reasons that it's a pretty fast-moving, fast-evolving arena for JavaScript to come out of.

**Break:** \[23:00\]

**Jerod Santo:** Rich, help us understand the evolution of Svelte over time. You have version 3 which is imminently being released, depending on when you're listening to this... It may be out there, it may not; you know, software developers and timelines, we hate them. But it's right around the corner, or it's out there, one of the two. So Svelte 2 has launched April, 2018...

**Rich Harris:** I'm gonna put my money on "It's just around the corner."

**Jerod Santo:** Oh, okay. I thought you were gonna put a stake in the ground for a second there, and say "It's out there!" But no, you played it smart. You played it smart.

**Rich Harris:** Soon.

**Jerod Santo:** Coming soon, as all good software is. Things change over time; Svelte came out in 2016, as we said; it's three years later, you have version 2, you have a version 3, so tell us about the way it's changed. Has it been philosophical changes, just implementation? Help us understand where it's gone, and then where it's gonna be, today or in the near future?

**Rich Harris:** I guess if we wanna talk about the origin of Svelte, we have to go back to 2012, which is when I started working on Svelte's predecessor, which is a library called Ractive (as in short for Interactive); also a word from a Nils Stevenson novel.

Ractive was a Vue framework that was based around templates, it was based around the idea that if you had some data that existed as a plain old JavaScript object, and you had a template which resembled Mustache, and you could combine the two together, then you could generate a really highly-performing application by tracking which parts of your data were changing over time. This is something that I think was probably pioneered with Knockout back in the day, but I wanted a different developer experience than Knockout could provide, and I noticed that a lot of the things that we were building, all we were doing really was trying to make the page match some templated HTML... But the way that we were doing that was by inter-HTML-ing parts of the page, which is kind of gross and inefficient.

So I built this library that would allow me to create Mustache templates that would be self-updating in the most efficient way possible. That's something that I started when I was working at The Guardian in the U.K. back in 2012, and it powered a lot of our interactives back at that point... And it was reasonably successful; it was my first big open source project. It ended up getting used in a bunch of places... It was used inside Amazon, inside a Wall Street bank, it was used by the NFL, Delta Air Lines, Playboy TV at one point, apparently... In spite of that, it never really hit the mainstream, but I like to think that some of the ideas kind of stuck. Vue came along shortly after Ractive was launched, and sort of took all the best ideas, and jettisoned the bad ideas, and became very successful.

I was pretty pleased with it... It was better-performing than React, in most of the tests that I could throw at it, and it was really easy to use, and it had this really delightful community around it. But over time, as more of our work shifted to mobile, I became increasingly aware of the bundle size concern. People were always telling us that we need to make smaller JavaScript bundles because the initial load experience is so important, and if you've got a bunch of JavaScript that has to get parsed and evaluated when the page first loads, it provides this really bad experience... So I started thinking that there must be a way that I can deliver these applications without also having to deliver a library that knows nothing about the application... Because a library like Ractive, or React, or Vue - it has to be able to accommodate an infinite set of possible states of your application, but there isn't an infinite set of possible states; there's a set of states that can be known ahead of time, and if we could find out what they were, then we could deliver optimized JavaScript for them.

\[28:10\] So I started to think about what a solution to that problem might look like, and around that time I had a conversation at a JavaScript meetup in New York with a guy named Jed Schmidt, who is a really smart programmer, and he had been thinking about this problem, too... And he started talking about compilers - what if a compiler could look at your code and write the application for you? This idea bounced around in my head for a little while. Then I thought "I think I know how we can do this. We can take our existing Ractive components, and we can put them through a special-purpose compiler", and I know what code it needs to generate... So I spent a furious week coding, did a first version of that. The performance was unbelievable, the size of the applications that it was generating was unbelievable... So we started using it at The Guardian for some of our projects.

I open-sourced it, and it turned out that the idea resonated with a lot of people, and it kind of went from there. But the initial design was very heavily influenced by Ractive, because I wanted to be able to have a development experience that I was familiar with. And in retrospect, that development experience had a lot of flaws. There were a lot of mistakes made in the original design of Ractive, and it was getting a little bit difficult to move away from those mistakes.

Svelte 3 is in essence a complete reboot of the idea. It's a little bit inspired by the work the React team has been doing with hooks, it's very focused on developer ergonomics, but it also has a bunch of new features and a new approach to updating the DOM, which will result in even better performance in a lot of situations.

**Jerod Santo:** New to Svelte or new to the space in general?

**Rich Harris:** New to Svelte. The big difference between DOM updates in Svelte 2 and Svelte 3 is that they're no longer synchronous. We've embraced this new concept of reactivity in our applications. It used to be that the reactivity lived in the component API; you would do component.set and then you would provide a new data, and that behaves similarly to a React setState, or something like that... Except that it was completely synchronous. That was good enough for most situations, because you could pass in all of your data in one go and it would update everything very efficiently, but there were some situations where that could cause layout thrashing, and so on and so forth.

So we've moved away to an asynchronous batched update model. But what's more interesting is that the reactivity has moved out of the component API and into the language itself... And this is the big thing that we're gonna be talking about with Svelte 3 - rethinking how we approach the problem of reactivity.

**Jerod Santo:** So when you say "into the language itself", are you referring to extensions to JavaScript, or just functions inside of the Svelte component API? Tell me what you mean by that.

**Rich Harris:** Imagine that you have a counter component, often used as a demo for these sorts of things. You've got a button, and when you click the button, it calls an event handler, and the event handler changes the count part of your internal state. There's a few ways that you can do that. In classic React you might do component.setState; in React with hooks you would have a state update function that was specific to the count property, and you would call that.

\[31:55\] In Vue you might do `this.count += 1`, and in Svelte 2 you would do `this.set({ count: count + 1 })`. In Svelte 3 all you need to do is `count +=1`, and the compiler sees that you've made an assignment to a value that the template is bound to, and it will add a piece of code that invalidates that. It will tell the component "This piece of state has now changed, and we need to update the component." But what it does is it keeps track of which parts of the components have changed, so it doesn't re-render the entire thing and then put you through this fairly wasteful diffing process. All it does is update the parts of the component that are affected by the state that has changed.

**Jerod Santo:** Where I get confused starting to think about Svelte now is like "And what is that build time and what is that runtime?" So this is all accomplished at build time?

**Rich Harris:** As much as we can do at build time, we do at build time.

**Jerod Santo:** Surely, the events can't fire at build time. That would make it: "Oh, my click handler keeps firing when I build my project..." \[laughter\]

**Rich Harris:** You know, a podcast is fundamentally the wrong medium to discuss this, because I really need to show you some code. Once people see the code, they see the input and they see the output, it becomes very obvious how this works. There's no magic involved, it's not doing anything weird... It's doing very predictable and very obvious things, but it just frees you up from having to think about state management as something that you need to spend time doing, and it injects code -- it's more code instrumentation than code transformation. It instruments the code in such a way that you don't need to think about telling the browser that a value has changed beyond just changing the value.

**Jerod Santo:** So it injects instrumentation code that's watching for value changes then, and you just go in and change the value, and you didn't have to actually wire that up?

**Rich Harris:** You don't have to wire it up; the compiler wires it up for you.

**Jerod Santo:** Okay.

**Rich Harris:** So if you do `count +=1`, for example, the next statement gets injected by the compiler, and it calls a framework-provided function called "invalidate". Invalidate knows which property has been invalidated, and knows what the new property is, and so through that mechanism it's able to keep track of which parts of your state are clean and which are dirty, and if an update isn't yet pending, it'll schedule an update for the next micro-task, and then it will go through and just surgically update all the little parts of the page that are affected by the change in state.

**Jerod Santo:** Very cool. So has this yielded excellent runtime results then, of the DOM updates, versus Svelte 2?

**Rich Harris:** I don't put a lot of stock in benchmarks, personally. I find that they're very rarely measuring the things that actually matter in an application. It does perform extremely well on benchmarks. I need to just allay any doubt - Svelte is extraordinarily fast.

**Jerod Santo:** \[laughs\] Well, the question is -- you have to ask yourself, if you didn't have benchmarks... I agree, especially synthetic benchmarks are sometimes problematic; they may be misleading; sometimes they're helpful... It's a mixed bag. But the question is, if all of this reworking of how this rendering happens is for performance sake, because of the thrashing that was happening before - and maybe there's features as well - but how else would you know that it's working? All your efforts for rewiring this entire thing to be reactive, versus the way it currently is - if you don't have any sorts of benchmarks versus the other, then it's kind of just going on a feeling... Unless there are also features that you're yielding from this work...?

**Rich Harris:** There are features. The primary motivator for that change is the developer experience. It's really nice to write Svelte 3 components. You're incredibly productive. You need to write much less code than you do with other frameworks, and that's the unique selling point.

**Jerod Santo:** Oh, that's a win, yeah.

**Rich Harris:** \[35:57\] When it comes to performance, a lot of it -- I think we just need to rely a little bit more on common sense than on benchmarks. It stands to reason that if your update process consists of re-rendering your application and then comparing the previous virtual DOM with the next virtual DOM, and then finding out what's changed, and then applying those changes - this long-winded, indirect process - obviously that's gonna be slower than if you've got code that just directly updates the DOM for you.

**Jerod Santo:** I would tend to agree, assuming that the code works as desired... So one reason to at least have those benchmarks in place would be to see if you're doing it right, and catch it if it's not working the way that you'd expect it to work.

**Rich Harris:** We have thousands of tests in our test suite.

**Jerod Santo:** So that's a pretty substantial change... Anything else -- not to belittle that change, but anything else in Svelte 3 that's dramatically different than what you've produced so far like that?

**Rich Harris:** We have a new approach to cross-component state management, which is a lot more flexible. Again, it's a little bit hard to describe in the context of a podcast, but it moves away from having a single, central, global state atom, and into having values that can be passed around in different components, and composed in various ways... It's very flexible; it allows for some really cool things like spring animations, and all that sort of thing, without a lot of developer effort.

It's better at composition. We have some new composition primitives that just went in over the weekend, which will make it easy to build more complex compound components than has been possible before. There's probably a bunch of things that I'm just blanking on at the moment, but it's a huge release, and the changelog for this thing is gonna be an absolute monster to write.

**Adam Stacoviak:** We should make people drink when they say something like that, Jerod.

**Jerod Santo:** We should. Every time someone says "the changelog" on the Changelog...

**Adam Stacoviak:** That's right.

**Jerod Santo:** ...you win a free T-shirt.

**Adam Stacoviak:** A little inception, take a drink, get a T-shirt. There you go.

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** Where does something like CSS come into play? I know that one thing you've talked about is just the importance of scoping CSS; there's a lot of issues with that, with leakage... Is that a bigger picture of what you've just mentioned in Svelte 3, or is there something you can cover here in Svelte 2?

**Rich Harris:** No web application is complete without styles.

**Adam Stacoviak:** Right...?!

**Rich Harris:** CSS is a core part of any web app that you build... And yet, some of our JavaScript frameworks don't include any primitives for styling. I think that a JavaScript framework that doesn't have styling built into it is incomplete, and Svelte has had that philosophy baked in from the start. Because you write your components into an HTML file, you can just add a style tag and you can put your CSS in that style tag, and the compiler will compare your styles with your markup, it will see which classes are being used, which ones aren't being used, it will dead code eliminate your unused styles, it will transform your class names, so that they are scoped to that component, so that you don't have style leakage throughout your application... It does all of that stuff.

You can also use your favorite CSS in JS library if you want to. You can use plain old .css files, but Svelte has pretty good CSS handling baked into its core. It's not perfect, there are some things that we want to tackle after the version 3 launch, particularly around composing styles from different sources, but if you're familiar with CSS, if you're good at CSS, then you'll enjoy building applications as Svelte components, because it's not an afterthought, it's not something that has been left to an ecosystem of third-party libraries; it's baked into what the framework is all about.

**Adam Stacoviak:** It sounds like you may have some pretty decent opinions about this great divide Chris Coyier just actually talked about, which -- since I've said that, you may have already read the article... What are your thoughts on that?

**Rich Harris:** I skim-read it because everyone in my feed was going mad about it... I'm not gonna offer any opinions, because I will probably be basing those opinions on other people's misinterpretations of what Chris was saying.

**Jerod Santo:** \[40:10\] \[laughs\] It was a long post, so... Easy to misinterpret. The more words you put in, the more things can be misread, and I know I definitely also skimmed it; I didn't read it in detail because of the length, and I happened to be short on time, but...

**Rich Harris:** The part that I read, it seemed perfectly reasonable. It seemed like it was identifying a thing that indisputably exists in the industry. People seem to be interpreting it as "Let's encourage this great divide. Let's deepen it", and I'm not sure that's what I read into it, but...

**Adam Stacoviak:** I'm less interested about the politics of it, and more interested in the practicality of it...

**Jerod Santo:** How so?

**Adam Stacoviak:** Well, meaning that he just said "No JavaScript framework is complete without the necessary imprinting for CSS", so with so many that don't just based on that bias alone, means that there is in fact a divide... And that his stance on the divide, whether he says so or not in response to my question, is just simply that he cares, so he thinks that it should have a place at the table.

**Jerod Santo:** When you say "he", are you talking about Chris or are you talking about Rich?

**Adam Stacoviak:** Rich, Rich. Sorry. In all those cases it was Rich, not quoting Chris at all. I skimmed it just like you guys did, and I sort of just saw this divide that I'm aware of, but based on what you've just said with how you clearly think about styles in a JavaScript framework makes me think that you want to find common ground.

**Rich Harris:** I do. I was saying earlier that one of the great things about the work that I do here is I'm surrounded by people with different but overlapping interests, and that is when things really start to sing - when you have people who can share knowledge and expertise across disciplines, but all be speaking the same common language and working towards the same common goals.

When we put ourselves in silos - when you think of yourself as a JavaScript developer or a CSS developer - then it becomes harder to do that... So I'm all about ways of working that allow people who have expertise in one discipline to work right next to people who have expertise in another discipline, and not enforcing arbitrary divisions between them.

**Adam Stacoviak:** Yeah. Well, pulling somebody away from vanilla CSS, or making somebody who's very familiar with that work in others areas is a necessary learning curve for progress, but it sounds like you question "Does it have to be that way?"

**Rich Harris:** Yeah, I don't think it does need to be that way. If you're the team's CSS expert, then don't go and sit in the corner and write CSS by yourself, write the CSS in the context of the component that you're working on, and you will start to understand at a much deeper level how all of the different parts of the application fit together. That will give you insights that pay dividends beyond -- I'm not articulating this very clearly, but you understand what I'm getting at.

I think the more holistic a view of a project each member of the team can have, the better the end result is, every single time.

**Jerod Santo:** I 100% agree.

**Rich Harris:** And that means breaking down the barriers.

**Adam Stacoviak:** Now that we have a basis of your point of view, can you talk about scoping in components as it relates to styles, and having no overlap, or no leakage, as you're saying in the blog post about it?

**Rich Harris:** Yeah, so the big problems that people have identified with CSS, and the reason that CSS in JS has become a thing - there's a couple of main problems. First of all, CSS is global. If you add a style sheet to a page, then you will affect everything on that page that happens to have the same classes. Because of that, we've come up with these incredibly baroque naming conventions, that are designed to prevent your styles from one component affecting the styles from another component... Things like BEM, that kind of practice.

\[44:02\] The trouble with these is they make your style sheets incredibly wordy, and they don't actually prevent conflicts. It's just a convention, it's not enforced by anything that can actually stop styles from conflicting. If you wanna do that, a computer needs to do it for you, and it needs to happen as part of your build process.

The other side of it is that a lot of people have experienced the phenomenon of the append-only style sheet. It becomes really difficult to delete a piece of CSS, because you're never entirely sure what part of the application depends on it... So what tends to happen is if you need to counteract the effects of a class that is stopping your element from looking the way that it needs to, you will just add another CSS rule. And people keep doing that, going back and forth. Eventually you get into the important rules where you're just increasing the specificity of the selector, adding important to rules, so that your styles are the ones that apply, and not the previous styles, which are quite possibly unused in your application. So in that way, style sheets get bigger and bigger and bigger, until your entire CSS is just an unmaintainable mess.

Now, Svelte basically solves both of those problems. It solves the first problem by scoping your CSS so that if you have class=foo on an element in your component, and you have a .foo style rule, it will add another scoping class that you need to that component, and it's computer-generated, so it can't possibly conflict with anything else on the page. That will ensure that your foo styles don't affect anything else on the page, even if you have another element with the same class name in a different component.

It solves the other problem by analyzing your CSS in the context of your component's markup, and determining which classes are definitely not being used. And I say "classes" to mean all CSS selectors. It can look at all of your CSS rules and say "Well, this active class is not being used anywhere. There's no element that at any point could have that active class, so we can just remove that and not even emit it when we generate our style sheets." It will issue a warning, it will tell you, so that you can then remove the class yourself, so you don't have it cluttering up your codebase.

But between those two things, you end up with these very compact style sheets, because you're not using these incredibly long naming conventions, and you don't have styles that aren't being used in your application. So it's good for the developer, it's a nice developer experience, but it's also good for the user, because you're not shipping all this unnecessary CSS.

**Jerod Santo:** At this point I feel like just saying, "Shut up and take my money", because that's awesome.

**Adam Stacoviak:** What's interesting too is that a lot of this began - particularly around CSS - with pre-processors, like Sass and others kind of helping us know that CSS itself is not dynamic, while Sass is... And doing a lot of this preprocessing, now it's graduated from, say, just a particular sliver of the overall thing you ship, which is HTML, CSS and JavaScript to the browser - you're graduating it up to the framework level, and doing it at compile time, versus in just one area... Because Sass wouldn't solve these problems, right? It requires the kind of thought process you put in Svelte, because it needs to be at that level, not down at just CSS.

**Rich Harris:** Fundamentally, the only way it works is if the styles are analyzed in the context of the markup.

**Jerod Santo:** Exactly.

**Rich Harris:** If the markup isn't aware of the styles and the styles aren't aware of the markup, then there's a limit to what you can achieve... And this idea of being able to statically analyze your application at build time is kind of the thing that everything in Svelte springs from.

**Break:** \[47:59\]

**Jerod Santo:** Rich, you've talked a lot about developer experience, as well as user experience. You said version 3 really is keening on making the developer experience better; we haven't talked too much about what it actually looks like to use Svelte, or to participate with Svelte, or whatever you call it - use the framework. I assume it's a command line tool, or there's some sort of build tool? A lot of us have current workflows - does it integrate into Webpacks, and other things? Tell us about how it integrates with other tools and how you use it to get started.

**Rich Harris:** At its heart, Svelte is just a compiler that takes an HTML file in, or rather the contents of your HTML file, and spits out a JavaScript module at the other end, and some CSS, if your component has styles. That's quite low-level; you wouldn't typically use the compiler directly, you would typically use it via an integration for Webpack, or Rollup, or Parcel, or whatever your preferred build setup is, Svelte has a plugin that will work for it.

The way that you use it is inside your application source directory, in the same way that you write JavaScript modules, utils.js, you would write these HTML components at .html. Some people prefer to do at .svelte, it's really up to you. Then you just import from that file, `import App from './App.html'` and then that is a standalone component that has the Svelte API, `const app = new App()`, same way that you would use a lot of other constructors. It's just a regular JavaScript class at that point.

If people wanna get started with Svelte more easily, then having to rig up a whole build setup. We do have some really easy to use starter templates, and if you go to the website, svelte.technology, you can go into our REPL, start playing around with that, and just click the Download button and you will have a project fully set up and ready to go, with all of the optimizations and all of the bells and whistles.

**Jerod Santo:** Very cool. You also have a companion project which looks to be higher-level even than Svelte, which is called Sapper. The tagline is "Military-grade progressive web apps, powered by Svelte."

**Rich Harris:** Which we're gonna change, because some people don't like that tagline, it turned out.

**Adam Stacoviak:** Is that right?

**Rich Harris:** Yeah, it was supposed to be a little bit tongue-in-cheek, because a lot of these frameworks have slightly insipid and unmemorable straplines, and we wanted to get something that was a little bit more evocative, but... Some people really hate the military, so we're gonna change that.

**Jerod Santo:** \[laughs\] Wow.

**Rich Harris:** Some people have literally said "I'm not gonna use this framework because of that tagline", so we're gonna change it. But yes, this is a higher-level framework that sits around Svelte. If you think of Svelte as a component framework, Sapper is the app framework that uses Svelte. Have either of you used Next.js?

**Jerod Santo:** I've heard great things, but I haven't personally used it.

**Adam Stacoviak:** Yeah, same here.

**Rich Harris:** \[51:55\] Next is this amazing thing - the idea behind next is that each page of your application is a React component, and you put all of these React components inside a Pages folder, and Next will turn that into a server-rendered application. So if you go to a page, you get HTML, and then at the end of it it will load the client-side version of that application and seamlessly switch you into this modern native-app-like client-side navigation-style app. Very sophisticated, it does all of the code-splitting stuff out of the box, and it's just this really beautiful developer experience. I wanted to have the same thing for Svelte, and Sapper is that thing.

**Jerod Santo:** Sapper is gonna be updated alongside Svelte 3? Is that a thing that people should hop in on right now, or should they wait for Svelte 3? What's the situation with Sapper? Is it gonna get broken, or upgraded, or is it safe to just use it right now and it'll be seamless?

**Rich Harris:** I hate to say this, but I would tell people to wait. I've been telling people to wait actually from diving into Svelte full stop, until Svelte 3 comes out, because there are gonna be breaking changes. And people are building apps with Svelte 3 right now, in its pre-release state, and we're getting loads of really helpful feedback from that from the community, but it's not bullet-proof at this point.

There's this unfortunate limbo that happens when your previous version is not gonna survive that much longer, but your new version isn't quite ready yet, so I'm sort of telling people to just wait a couple of weeks and then we'll be ready for you coming by then.

**Jerod Santo:** What else in terms of community projects is there? Are there plugins, are there extensions, are there people building components that you can use with Svelte, or are there other people working on Svelte proper? Tell us about the landscape of people participating with the project.

**Rich Harris:** We have a really nice community. It's one of my favorite parts of working on Svelte - it's just a really nice group of people. We hang out on Discord, there's always people in there, we've got people from all around the world, just comparing notes and talking about the library, talking about the apps that they're using, talking about ideas for the project's future development...

It's not just me working on the project; I think we ran the numbers recently and there's something like 75 contributors to the project since it's been going. Obviously, some of those are people who have just done a drive-by pull request here and there - it's a long tail - but there's a pretty active group of people working on it, and the community itself is very active, putting out components, putting out pre-processors that would enable you to use things like Sass and Less inside your components, all that sort of things. There's a lot of stuff going on.

**Adam Stacoviak:** Since maybe Jerod and I are hearing about this for somewhat the first time - Jerod, you mentioned you heard about this a while back, but hadn't really gotten into it - I'm curious why it seems like if maybe I'm just an outsider and I'm not aware, but the visibility of Svelte to the greater community. Obviously, it's growing, but can you speak to maybe the sort of underground movement with it? It seems like it's more underground and ready to explode, rather than has exploded and at kind of a React level, for example.

**Rich Harris:** Absolutely. People talk about it like a well-kept secret. This isn't my first big open source project, I've been involved in a few different ones now, and the thing that I've learned is that it takes so much longer than you would imagine to gain the level of traction that you're talking about. People still talk about Vue as like the new shiny thing. It's been around since like 2013, it's six years old; there's nothing new and shiny about a lot of the projects that are only now reaching people's awareness... So Svelte is very much under the radar for the vast majority of JavaScript programmers.

\[56:05\] People are starting to \[unintelligible 00:56:04.08\] to it; there was the State of JavaScript 2018 Survey at the end of last year, and for the front-end framework section, Svelte was the number one write-in answer to the question "Which framework are you using?" It was ahead of Aurelia and other frameworks like that. So it's slowly gaining traction.

A little bit of anecdata - I've noticed a sudden uptick in invitations to speak at conferences, and things like that, so I think people are kind of aware that this is a thing, but a lot of people are hesitant to dip their toes into a new technology stack because there is a very high switching cost. I guess our task over the coming months is to try and persuade people that the cost of not switching is ultimately higher in the long-term than the cost of -- I confused myself...

**Jerod Santo:** Of switching... \[laughter\] Not switching versus switching.

**Rich Harris:** Our task over the next few months or so is to try and convince people that the cost of not switching to a newer and more future-proof technology is higher than the cost of staying put.

**Adam Stacoviak:** Something you can't change until the pain to change is so great that you are forced to change. That's a terrible place to be in. It's nice to be maybe an early adopter in those regards, but sometimes the pain gets so great that you're like "I can't take this anymore. My foot hurts, I need a doctor."

**Rich Harris:** You certainly don't wanna be in that position, but nor do you wanna be in the position of adopting something that isn't yet ready, so I totally empathize with people who have been using Svelte 2 and they're now gonna have to do some work to Svelte 3, and that's something that I regret, because I'm one of those people.

**Jerod Santo:** \[laughs\] You're causing yourself pain here. So one of the things with adoption that we've seen - Vue had great success with this; even Elm had success when they blogged about the fact that you can dip your toe into the water with Elm; Evan wrote a great post about how -- Elm seems like the kind of thing that's all-in, which a lot of frameworks historically have been. Ember is the kind of thing - maybe not anymore, but historically was like "You've gotta use it all, and you've gotta start with it, or you've gotta switch to something else." Is Svelte the kind of technology where you can say "Hey, I'm just gonna write my nav bar as a Svelte component, and not use it anywhere else on my site", or do I need to dive into it?

**Rich Harris:** Svelte is the perfect example -- it's like the platonic ideal of a framework that you can adopt incrementally... And the reason for that is that it doesn't have this bulky library that goes along with it. You can't have an Angular app and say "You know what, I'm gonna incrementally adopt Ember." It just doesn't really work, because then you've got two frameworks on the page at once, which means that you've got all of that extra JavaScript that needs to be evaluated and parsed... Whereas with Svelte, your minimum component size is something like a kilobyte or two. So you can really easily dip your toes in. And on top of that, you can compile to a vanilla JavaScript class, or you can compile to a web component. So if you're in an environment where web components are supported, then you can use web components that way, you get the nice authoring experience, but you also get the cross-platform, cross-framework compatibility that web components are designed to have.

**Jerod Santo:** That's excellent. I would definitely up, front and center on your guides and marketing materials, because that helps people bridge the gap, when the gap is much smaller than they think it is. "Oh, I can just dip my toe in. I can just try this, and if I don't like it, it's not gonna cost me very much. It's not like I have to completely abandon my current workflows or my current application to give it a try."

**Rich Harris:** Yeah, I'm definitely gonna think about that advice, because honestly marketing is not our strong point.

**Adam Stacoviak:** \[01:00:10.16\] That's where I was getting at too, with that sort of direction we were taking the last few minutes - if it's not well known, how do you make it more well-known? Jerod, your point of dipping your toe in is a great example of how to begin to inch towards that execution, because the easier you can give somebody an on-ramp to either contribute in open source (that's great, too), or also be able to try or adopt; adoption is one of the hardest things of open source - how do you get market share, how do you get somebody to try it? ...and the easiest way is to make it simple. How do you make it simple? Well, like Jerod said, rebuild your nav bar, and use it just in that case, and see how it works out for you and your team.

I'd actually write a blog post around that and make it a challenge... Like, "I challenge you to try it and see if this new way...", as you've just said before - talking about the pain to change, make it a challenge to try one small thing in your application to initiate change.

**Rich Harris:** Yeah, we should do that. The Svelte Challenge.

**Jerod Santo:** The other good way to market it is to have a bunch of synthetic benchmarks that all make yours look the best. \[laughter\]

**Rich Harris:** There are some benchmarks out there that we've taken part in. There was one recently that showed that Svelte was 35 times faster than React and 55 times faster than Vue, and I'm just not a fan of using...

**Jerod Santo:** No, I don't like that either.

**Rich Harris:** ...numbers like that in marketing materials because it's contextless.

**Jerod Santo:** It is.

**Rich Harris:** And it doesn't help someone decide whether it's suitable for their application or not.

**Jerod Santo:** No, but it sure makes headlines, that's the thing, so... Yeah, that's the problem with -- I don't know if you call it integrity, but I'll just call it integrity... If you have integrity, in the sense of you know there's an advantageous approach, but it violates a personal moral ethic, then you by-pass certain opportunities that otherwise will rise, right? So...

**Rich Harris:** And I think the other thing that I've realized lately is that people value developer experience more than they value that stuff anyway.

**Jerod Santo:** I think so.

**Rich Harris:** Yeah... People actually don't very often really do a deep exploration of the tools that they're using. Something that I've seen time and time again, people will opt for a really nice, easy developer experience, even if it comes at the expense of user experience, ultimately... And they'll come up with various rhetorical justifications for "You know, if the developer experience is better, then I can spend more time focusing on user experience", which is just so logically fallacious... But people will buy into it, because ultimately we want the thing that makes our job the easiest.

That's why Svelte 3 is so heavily focused on improving the developer ergonomics, undoing some of the original design mistakes that we inherited from Ractive, and trying to do something that will appeal to people in, for example, the React community, who've looked at frameworks like Svelte and said, "Ewgh, templates... I don't wanna deal with templates", and other specious justifications.

I think that if people really give it an honest go, they'll really enjoy the experience of writing applications in this way.

**Jerod Santo:** Well, I'll go on record to say when Svelte 3 comes out, let us know and I will take the Svelte challenge, I will write a little bit of Changelog.com, and let everybody know what I think.

**Adam Stacoviak:** Let's talk about the future then... The future seems bright, there's probably something on the horizon that maybe people don't know about. What's in the future for Svelte, and maybe Sapper as well? What's coming up?

**Rich Harris:** \[01:03:55.27\] More of the same, first of all - just trying to make the quality of the generated code as high as possible and as small as possible. We wanna make Sapper the best development experience for an application that you could possibly have. We wanna take the best features from other frameworks; we wanna do something that's similar to React Suspense, which is a nice way of allowing asynchronous data to not interrupt the flow of navigation around an app. That's something that we think is possible with the Svelte 3 architecture, and something that we'll probably do in the next few months.

Beyond that, something that I've been thinking a lot about and something that I would really love to do is take the ideas from Svelte - this idea of constructing what is essentially a graph of your application at a moment in time, and then turning it into DOM manipulation code; I would like to do that, but turn it into WebGL code. I think it's possible to apply the same ideas and generate a WebGL application that is built around a scene graph, and a camera, and lights, and materials, and all of that sort of thing, but doesn't have all of the library code that you typically associate with WebGL apps.

You know how when you go to see a cool WebGL thing there's often a loading screen, it takes like a minute or two before the progress bar finishes and you can actually experience the thing - I think we can do better than that, and I really want to explore that space once Svelte 3, and everything else that accompanies Svelte 3, including the documentation, which is gonna take me forever, is out of the way.

**Adam Stacoviak:** When it comes to following along, I noticed that the blog is a bit dated in terms of announcing Svelte 2, so what's the aside from that -- is it like Discord, or where are good places for people to keep up? ...or obviously they're listening to this podcast, they're probably tracking Changelog News in our newsletter, but what are other good sources for just keeping up with latest, greatest, bleeding edge stuff?

**Rich Harris:** You're right about the blog, it's not been historically something that we've been very good at keeping up to date. We do have a bunch of blog posts that are gonna be released along with Svelte 3, but if people want to stay up to date with everything that we're doing, they should follow us on Twitter, twitter.com/sveltejs, and they should come and hang out in our Discord chat room; there's a link to that on the website, which is svelte.technology.

**Adam Stacoviak:** Cool. We'll link it up in the show notes, for sure. Rich, thank you so much for taking the time to do this deep dive with us; I know that you're busy and you've got lots of stuff to do... You're a JavaScript journalist - that's the coolest title ever, but we really appreciate the time you've spent with us today. Thank you.

**Rich Harris:** My pleasure, thank you for having me.
