**Kevin Ball:** Hello, JS Party people out there! Whether you're live, or listening to this delayed on the podcast, we are excited to have you back with us. I will be your host today, this is Kball. I'm joined by two of our amazing panelists, Divya and Chris. Divya, how's it going?

**Divya Sasidharan:** Pretty good! How are you?

**Kevin Ball:** Life is good. I'm getting over jet lag, and starting to feel normal during the day again.

**Divya Sasidharan:** Nice. That's awesome.

**Kevin Ball:** Chris, how are you doing?

**Christopher Hiller:** Super-duper. How are you doing? I know you've just answered that question... \[laughter\] But that's how we do it here in the States.

**Kevin Ball:** It is, we have all these automatics. "How are you doing?" Well, I can't say "Bad", because then you actually have to have a conversation. You've gotta say "Well, life's good... Fine... How are you?"

Alright, so our episode today - we are going to do three of our recurring segments, except one of them is brand new. We're gonna experiment with a new segment. So if you're listening to this, let us know what you think of our new segment.

We will start off with a segment called The Framework Wars. We're not gonna make it into an actual war, but... One of the big, rapidly-changing, hard-to-keep-track-of things in the JavaScript world is all these crazy front-end frameworks, so we're gonna do some quick hits on what's going on in at least some of the big ones, some new stuff we've checked out... I think Divya is excited to talk about Vue; I don't blame her, Vue is pretty awesome. But then there's interesting things happening in React land, Angular, I think we might touch on Svelte a little bit... That type of thing. Then we will kick into another segment on pro tips, and close out with some shout-outs to awesome stuff in the community.

Let's start on framework wars. The framework wars, if we were gonna go in order of use and popularity, we should start with React, but instead let's go with the order of enthusiasm of panelists... Divya, do you wanna tell us what's going on with Vue?

**Divya Sasidharan:** Yeah, so Vue 3 is in the works. I do not know what the release date is; I think it's slated for end of this year, potentially... I don't know if they've actually confirmed a specific date. It's been said end of this year, but there's a lot of talk happening in the Vue 3 RFC repository on GitHub, where people are just talking about the APIs.

For those of you who are not familiar -- I mean, I'm sure everyone at this point is, because it was a huge conversation that happened from one of the Vue RFC recently... Well, semi-recently. A couple months it's been. So that was with the functions-based API. Kball, you were aware of that as it was happening, right?

**Kevin Ball:** \[00:04:20.11\] Yeah. I thought it was awesome, but there was definitely some blowback going on there.

**Divya Sasidharan:** Yeah. So it's a huge change to the -- it's sort of a pattern that was being introduced into how you write Vue. Essentially, they took a page from React, and were moving towards a functions-based API, so writing more function-based things rather than your componentized -- it's still componentized, but the way you write it is slightly different. Instead of have your JavaScript, your script, your HTML markup and your CSS, you have just one single function that returns some markup.

That whole thing caused a lot of controversy, mainly because people felt like that was a huge shift in the way you would write Vue. So the functions-based API was written in a way that seemed to indicate that Vue 3 would move away from Vue 2's current syntax... Which I think sent a lot of people up in arms, because the reason a lot of people love Vue and use Vue is because of the current syntax, and the functions-based API implying that there was gonna be a change basically pulled an Angular, in a sense... Or the community assumed it was pulling an Angular, and moving and shifting completely away from what the community had been used to.

What I think sparked that is -- and the Functions API has been in the works for a while. I believe Evan has been talking about it... It's been labeled differently. It was called The Reactivity API, and then there were various other things... And then Function API was kind of a consolidation of all of that. But what caused that whole debate was this idea of different builds.

Within the Vue 3 RFC there was mention of there being a standard build and a compatibility build, and the idea was that Vue was recommending people to move away from -- so the standard build would not include a lot of Vue 2 syntax, whereas the compatibility build would... So in doing so, there was already -- what we mentioned earlier, there was an indication that they were not gonna support Vue 2 anymore. So Vue 3, potentially Vue 4 would look completely different than what you were used to in Vue 2.

So that was the reason why it blew up on Hacker News and Reddit, and there were a lot of conversations that happened there.

Granted, it was a bit of a miscommunication. The Vue team could have talked about things a little better, and the community could have tried to ask questions in a way to understand what the meaning of things were, instead of jumping to conclusions. There was a lot of missteps that happened along the way, but essentially the conclusion is that Vue 3 will not move away from Vue 2, and neither will Vue 4. I think they made that promise as well, that both Vue 3 and Vue 4 will include a lot of Vue 2 syntax... So the community can rest assured that they will be able to continue to use Vue how they would now, but Vue 3 obviously will still include newer patterns, functions, and so on.

**Kevin Ball:** Thank you for that summary. I thought it was an interesting thing to observe in real-time. Vue has relatively recently adopted a process where they're asking for feedback, they're proposing things before they implement things, and this was kind of a -- I mean, on the one hand they got exposed to a lot of fire from that. On the other hand, they probably kept themselves from making some missteps by doing this, because they heard about it early enough in the process that it was easy to adjust.

**Divya Sasidharan:** \[00:08:11.04\] Yeah.

**Christopher Hiller:** I've heard people say "pulling an Angular", or making a mistake... I think we should just have a word and say something like "If a library or a project completely breaks all of its API in this terrible way that alienates all its users, it's an angularization of the project." \[laughter\]

**Divya Sasidharan:** Just turn it into a verb...

**Christopher Hiller:** Yeah, it needs to be a verb. Angularize.

**Kevin Ball:** Yeah. Change management is hard.

**Divya Sasidharan:** Definitely.

**Kevin Ball:** I really like what Ember does on this, even if it's a little unintuitive for folks coming from other places. In their major releases, Ember are never adding new features. Major releases are for removing deprecated features. So over the course of a set of minor releases they'll add new features, they'll deprecate old features, so they give you lots of time to migrate, and then a major upgrade is not about adding new functionality, it's about removing that deprecated stuff that's been around long enough you've probably moved off it anyway.

**Divya Sasidharan:** Yeah, that's a really good method of doing things. So instead of forcing the community to move and alienating them completely -- it's not like a cut-off; you give that tail, the long tail of allowing people to slowly transition.

**Kevin Ball:** Yeah, and you introduce the new features early on, so they'll never remove functionality in a minor release. They'll always add or deprecate. So you introduce stuff, and people can start experimenting and trying things, but you never have a backwards-incompatible break, except at a major, and there you've always had a long run-up leading into it.

Other stuff going on in some of the other frameworks... React obviously had their big Hooks release a while back. That's almost old news, except that it's inspiring Vue... But they're working hard on some new things related to concurrent mode and suspense, which I think are pretty interesting. They're allowing much cleaner component-related abstractions around asynchronous stuff - how do we represent a state while we're off fetching data, and coming back.

There was a really fun, in-depth blog post that Dan Abramov did, because he loves to tie up all developers' productivity as they try to wrap their heads around his blog posts... And he wrote this post on this concept of algebraic effects, which is one of the things they're using inside Suspense, I think. But basically being able to more or less do goto statements, or doing try-catch stuff, but where you can kind of move back and forth between different layers of the stack in pretty powerful ways.

I'm excited to see what they're doing there -- we've seen before that frameworks can push languages forward. A lot of functionality that is in JavaScript now is in it because of things like jQuery and Dojo, that early on were working around the limitations of the language and of DOM APIs, and now they've been embedded in web APIs and embedded in the language. Some of the stuff that React is doing now I think is really pushing the entire ecosystem forward in pretty interesting ways.

**Divya Sasidharan:** \[00:11:49.12\] Yeah. There was also a conversation that was happening online, on Twitter, yesterday. Actually, the day before yesterday, so 13th of August... I think Sebastian Markbåge tweeted that render should be pure, and it was just about this whole concept of algebraic side effects, and how exactly people deal with render, and how the patterns are generally anti-patterns, and how React is trying to move people away from doing those things... Which sparked a really interesting discussion online.

I think even Yehuda Katz, who is in the Ember core team and wrote Ember weighed in on that, in terms of React -- because I think the concept of, and the conversation around algebraic effects a lot of time was framed in terms of purity, and writing it purely... And I think the argument there was that whenever you talk about something being pure, it becomes very abstract, and it takes away from beginners learning it, because you're starting to make it super-high-level, and you're introducing patterns that kind of are hard to grok if you're learning a framework or you're new to a framework... Which I think -- there's a lot to be said there and unpacked within that, but I think React has done a lot of this (as you said) pushing the bar of thinking, and introducing ideas and concepts that I think sometimes the community has to take time to catch up with, in a sense.

It's similar to a conversation we had before, which is that what makes a lot of the -- and I feel like I'm going ahead a little here... It's that every framework is very unique, because specifically with React, it has a huge company behind it; Facebook is what drives a lot of React development. So the problems and the solutions that React -- basically, a lot of the features that React implements is solving problems that Facebook has... So it might be a little high-level for us as a community, or as a single person who's working on a side project, or a company that's really small, to work on stuff and try to understand why exactly you would need those pieces of the feature. And that's compared to something that's more open source.

Svelte - we'll talk about that in a bit; Vue is the same - it's not backed by an organization, it's pretty much one developer with maybe a couple of people in the core team, working on specific things. They are all developers, they have problems that are unique, in things that they worked on, and that drives the development. So you could argue it's a lot more community-driven than others.

**Kevin Ball:** Even a framework like Ember, that is driven by quite a team, that's distributed, but it's not owned by a single company - it's more community-driven; they have much more of a community process.

**Divya Sasidharan:** Oh, yeah.

**Kevin Ball:** That said, they have very large numbers of core team members who are inside of big companies. I think their core team is quite large, compared to for example Vue, which was for so long the one-person-driven thing... And even though it has expanded, it's still a pretty small core team, relative to the popularity of the project.

**Divya Sasidharan:** Yeah.

**Kevin Ball:** This type of cross-proliferation is super-cool. One of the things I love about the Vue Functions API that we were talking about is how it takes concepts that were introduced with Hooks - which were really quite innovative - and adapts them to the somewhat different mental model that Vue has, and the way that Vue approaches reactivity... And it almost -- I mean, part of this is my bias, enjoying Vue quite a lot, but it feels almost more natural in the second iteration. It works really cleanly with Vue's reactivity model.

**Divya Sasidharan:** Yeah, I think that's the whole point of the Functions API. Because a lot of the times with Vue the reactivity is tied into the component, so you need Vue logic in order to have the reactivity work... But with the Functions API you get the niceties of reactivity without you having to actually write much Vue logic.

\[00:16:05.04\] So if you were to -- it's a very common example of like the use mouse, where you have a mouse and then you wanna follow and change the XY coordinates as you're moving your mouse... You can extrapolate the logic of calculating that XY into a Functions API, and then the logic of the front-end and manipulating that event can be separate, as well.

So it's kind of like you encapsulate the business logic in a function, and then you can create your Vue or whatever else elsewhere. Then you can plug and play, which is really nice. And I've found it more intuitive, too.

This is also a biased opinion, and partially a result of being outside of the React world for a while, but when Hooks came about, I was like "I don't fully understand..." I think there was a lot of magic that happened with set state, and use state, and all of these things... So when you were using a hook, you would use those specific things, and then manipulate things in a specific way... Versus in the Functions API all you're doing is you're literally writing functions, and there's actually zero magic there.

I think the reactivity is the one piece where it's like, it's using proxies under the hood, so if you change the data, similar to set state, it updates, and so on...

**Kevin Ball:** That sounds magic...

**Divya Sasidharan:** Yeah, it's a little magic. It is magic. Again, it's a very biased opinion, but...

**Christopher Hiller:** For what it's worth -- and I've barely used React... But when I've first touched it, it was after Hooks had come out, and it made a lot of sense; not having all this baggage of what React used to do in my head. It was like "Oh, I'll just use this thing, and there you go." Of course, I haven't looked at some of the other functions that people talk about, like useEffect, or whatever... But Hooks seem to make a lot of sense to me just coming in as a newb with React.

**Kevin Ball:** Yeah, I like the Hooks approach. It's a very approachable concept, it's just different enough that people who were deeply invested in there absolutely had a little bit of an adjustment...

**Divya Sasidharan:** Oh, yeah.

**Christopher Hiller:** Yeah. And that seemed to be a big part of the uproar with Vue - people who didn't wanna have to change their stuff. I don't know if they were -- you probably have a better idea if they were actually against the idea itself, or just that they didn't wanna have to change how they were writing code.

**Kevin Ball:** I think there was definitely some of each there... But yeah. There's a lot of just resistance. "I like what it is! I don't wanna change it!" And it's something that is important for framework and library maintainers to remember - we like continuity; there's enough stuff changing in the world. Things that we can hold on to are rare and valuable.

**Christopher Hiller:** Wasn't some of the motivation there to better support TypeScript, essentially?

**Kevin Ball:** Yes.

**Christopher Hiller:** Can you explain in a nutshell what that problem is?

**Kevin Ball:** I can explain a little bit... Though maybe Divya you may know a little bit more... But I think one of the big challenges with supporting TypeScript within Vue is that it uses a lot of essentially metaprogramming and introspection, which is somewhat magical, and can be somewhat hard to represent with types.

\[00:19:59.26\] People who have used Ruby and Rails a lot may know that there they used a lot of metaprogramming, and if you try to come in and insert hard types -- or at least early days I always ran into typing problems, because the introspection in metaprogramming meant you had to do a lot of extra stuff to deal with types. Ruby has a very flexible type system. TypeScript -- I don't know. It's challenging... It's trying not to be duck-typed in the way that Ruby is.

Going to a functions-based API, it removes -- Divya, you said there's no magic... There's still magic. Reactivity still feels like magic. But it removes some of the magic. It's just functions. It's functions with defined types for their arguments. It's easy to model and represent a system in a way that a type checker can validate, as opposed to something that's assuming properties on an object that may or may not be there, that can be set dynamically in various ways. Was that a fair assessment?

**Divya Sasidharan:** Yeah. I think the whole reasoning for the rewrite is to support TypeScript and type inference... Because that was an issue, especially with how components were being wrapped, and checking for types was an issue... And I think there were also discrepancies in types in specific components, or props, and so on. So the rewrite kind of made it a first-class citizen, so if you were to write Vue in TypeScript, it would work very well... And also, whenever -- so you have the option in Vue, whenever you create a component, you can choose to give the props types. I think that makes it a little better with the newer rewrite. It makes it a bit better as well. I'm not 100% sure in terms of the internals, of how exactly that is, but... There's more information in the RFC for the Function API, I believe, on TypeScript support.

**Kevin Ball:** One thing I wanna make sure we touch on before we leave a segment on frameworks is Angular. They are often neglected by me personally, I know, and I think by other folks on this show, but they do still have huge numbers of people using them, especially in the enterprise world.

I did a little looking to see what's new in Angular. It sounds like much of the buzz right now is around Angular Ivy, which is a new compiler/engine/renderer. I'm not being an Angular expert, I don't know exactly how it fits into the ecosystem. Some of the touted benefits include reducing bundle size, though coming from Vue -- I was looking at the bundle sizes they were quoting and being like "Really...?"

There was an example on a blog post that I'll put here, where it's like "Oh yeah, with Angular Ivy we dropped the bundle size from 509 kilobytes to 432." And I was kind of groaning a little bit about size...

**Divya Sasidharan:** Is Ivy the current version of Ember?

**Kevin Ball:** This is Angular...

**Divya Sasidharan:** Oh, Angular. Sorry, sorry. Yes, Angular.

**Kevin Ball:** I believe it is opt-in-able, but not the default, for their renderer.

**Divya Sasidharan:** Oh, okay.

**Kevin Ball:** They've recently released version eight.

**Divya Sasidharan:** Eight, yeah.

**Kevin Ball:** And that made Ivy available, but opt-in.

**Divya Sasidharan:** Okay. I know very little about Angular to weigh in on anything. \[laughs\]

**Kevin Ball:** Frankly, it feels to me that on many dimensions they are catching up. Some of the other touted benefits are now it's easier to do higher-order components, and things like that, that have been around in Vue and React for a long time. I do believe that some of the functionality that exists in Angular around managing large-scale applications, the way they do dependency injection - all of that sort of stuff provides substantial benefits for people who are doing massive projects.

But yeah, it feels like right now they're in many ways doing the same thing Vue is doing with the Functions API, of playing catch-up to innovations that have happened elsewhere in the ecosystem.

**Divya Sasidharan:** \[00:24:17.22\] I think they also with Ivy -- I haven't used Angular and I don't know much about the ecosystem, but I've heard people talk about it... And Ivy also -- I think tree-shaking is top priority in Ivy, which again, results in faster performance, because your bundle size is smaller... And it can remove unused pieces of code, and so on; load times are great. I'm not 100% sure, but... Does it have anything to do with how things get compiled? Has that changed with this?

**Kevin Ball:** I think so, because one of the things touted is faster compilation, but...

**Divya Sasidharan:** Okay.

**Kevin Ball:** Anyway, this is definitely outside any of our expertise, it looks like. If you are an Angular expert, I would love to hear from you a little bit more about how this works... So you can jump into the JS Party Slack channel, you can tweet at me or at JS Party.

I think there's some interesting stuff going on in that world, but I feel like I'm kind of outside of it. But because Angular is still quite widely used, especially at larger enterprises, I felt we would be negligent if we did not bring it up.

**Divya Sasidharan:** Oh for sure, yeah. It seems that Ivy is a new rendering pipeline and Vue engine... So yeah, the compilation and stuff has changed.

**Kevin Ball:** One last thing that I think is really interesting going on in front-end frameworks right now is this idea of compile-time frameworks. The one in particular I'm thinking of is Svelte. Chris, you mentioned that you've played around with it some. Do you wanna talk to us about Svelte?

**Christopher Hiller:** There's really not a whole lot I can say, except that I was working on an app, I was just kind of playing around, trying to get something working with Node SerialPort in Electron... And I wanted to try a framework and didn't wanna get into a huge toolchain, like with Create React App, or -- Vue's toolchain is sizeable... All these boilerplates drive me nuts, but that's another thing. So I didn't wanna use the boilerplate. I found something very simple with Svelte - it's basically you have like a roll-up config, and you run the thing and it compiles the thing... And you look at your code, it is -- it's kind of like Vue, where you have this (I think it's a) .svelte file, which is kind of analogous to a .vue file... Where you have your script, you have your styles, you have your markup in there... It is so straightforward and simple and elegant, and just like "Wow! How easy can this be?"

My brain melted a little bit, just because it was far and away the most straightforward and easy to understand framework that I've used in a long, long time. I think definitely people should take a closer look at Svelte, from that end of things, the architecture of the project.

\[00:27:58.17\] What's different about Svelte, as far as I understand, is essentially it has no runtime; it's just a compiler. And you write this code, that follows these conventions, and it poops out a bundle, and markup, and whatever it needs to do, and it runs. And the bundle sizes are very small. There's not a lot of startup overhead, because it doesn't have to bootstrap all this stuff... It's just kind of incredible, and a great idea, and I feel like frameworks are going to start moving in that direction, where they get rid of this whole overhead of loading a runtime in your browser, or what have you, and it's just simply compiling down to minimal vanilla JavaScript.

But because of that architecture they could optimize for - well, what's the simplest straightforward thing we can do? Let's look at what's been successful in the past. People talk about how easy Vue is to understand for somebody who's really new to JavaScript or web development. They went with that idea, I think, and just kind of "Let's make this even easier, and just simple and straightforward.

I was really impressed with Svelte. I don't really build too many web apps. If I do, they are of the hobby variety... But I'm definitely going to take a look at it, and I'm gonna keep working with it on this particular project, because... Yeah, it's awesome.

**Divya Sasidharan:** Yeah. Svelte also has a server-side rendering framework called Sapper. That's really cool if you wanna do server-side rendering, or using a Node.js back-end, and so on. It's pretty cool, it's really easy to use... It's also super-small. According to the website, it's 39.9 kilobytes zipped, which is pretty small. Way smaller than React. Not sure about Vue, but definitely smaller than React. And I think they argue that they don't have to do code-splitting, and stuff like that, because of the way that the compilation works... And so it's incredibly performant and efficient.

**Christopher Hiller:** Yeah, I noticed that and I didn't pick it up because it's an Electron app that needs to use a native module, which can kind of a harrowing experience. If you have a dev server running in Node and you need to use a native module, you're SOL.

I tried to use Next.js, I tried to use Nuxt.js, and neither of these things worked for me, because I needed that native module... And if the dev server is running in Node - well, the native module is compiled for Electron... It's water and oil; it just doesn't work. But yeah, that definitely looks like a pretty cool server-side framework... Sappa? Sapper?

**Divya Sasidharan:** Sapper.

**Christopher Hiller:** Sapper...

**Kevin Ball:** And with that, I think we can wrap up this segment, the framework wars. This was our first try on it, so listeners - let us know, give us some feedback. Did you like it, did you not like it? Was this useful?

When we come back from our break, we will be talking about some pro tips, things you can use today to make your life, your development better. Talk to you on the other side.

**Break:** \[00:31:48.10\]

**Kevin Ball:** Welcome back, JS partiers! We are here to talk about pro tips. Pro tips from each of our panelists. It looks like - Chris and Divya, you both have very technical-related pro tips, whereas I have kind of an interpersonal one... So let's sandwich me in the middle. Either of you wanna particularly go first?

**Christopher Hiller:** I can go first. I write JavaScript, I do not write TypeScript, so I'm used to using doc strings. So I'm using doc strings, and I'm seeing that VS Code is giving me some information about types, and it's able to understand the doc strings, and stuff... So I'm like "Huh, that's neat." So I was digging into it more, and I'm like "How can I make this work even better?" So I got kind of OCD about the Doc strings, and was reading up in the VS Code side about writing -- there's like a guide or two on there about writing JavaScript in VS Code; how it works, and how you can get better integration.

One of the things I started doing was in my JavaScript files I would put a little directive in a comment called @ts-check. What that does is it enables the TypeScript language server to essentially check your JavaScript. So because JavaScript is a subset or TypeScript, or TypeScript is a superset of JavaScript, or whatever - because of that, when you're writing JavaScript in VS Code, you're actually using the TypeScript service anyway. So this ts trick - it enables full type-checking of all your JavaScript. So it'll give you some little gentle warnings when it finds something it doesn't know about. And it's got this little -- I don't know what they call it... Intentions, I think; that's what they were called in JetBrains anyway... So you go and you hover over that little squiggly, and it says "This is an any type. Do you want to try to determine the type of this by its usage?" And you say "Yes." So it goes and looks throughout your code, and it tries to determine what the type is. So when it does that, it actually plops a little doc string in there, and it's all working with JSDoc.

So TypeScript supports a few JSDoc tags... Pretty much as many as it really needs, which is not too many. So you can use TypeScript types in your JSDoc doc string types. So I started doing this, and I'm like "Wow, this is really neat." I can get full type-checking just with a few extra doc strings, essentially.

\[00:36:21.21\] Eventually, I went and -- there's a setting called the jsconfig.json file; I'd seen this file before, and I wasn't sure what it was. This sits in your project root, and it tells the TypeScript language service in VS Code, how to check your JavaScript. So I configured that, and I told it to check all the JavaScript files, and so that's what it did. It goes through all my source files and finds all the places where the JSDoc doc strings don't match, it finds all the places where it can't make inferences, and of course it pulls out all these typings from Npm and automatically downloads them. All the third-party modules I was using already had some types, so it knew about all those. All I had to do was write a few more types in my doc strings.

So my project that I'm working on - at this point it's pretty much fully typed, using doc strings and Typescript, but it's not TypeScript at all; there's no TypeScript whatsoever, and it's fully type-checked. I'm like "Wow, that's kind of amazing.

In fact, it's like "What's the point of TypeScript anymore if the language server can actually type-check all your JavaScript for you?" And if you have these definition files, you have doc strings, there's really no need for all that extra syntax. And at least from my point of view, that's a huge win, because I don't really wanna get hung up on the extra syntax of TypeScript. Certainly there's a few things that you probably cannot do, but I have not run into those yet.

This is like many, many source files. It's a relatively large project for a single person to have been working on... But everything is type-checked, and it's just doc strings - if you follow their guide, you can create type definitions. Like in TypeScript you would make an interface to do this sort of thing, or a type alias, in JavaScript what you do is you use a JSDoc @typedef. That's @typedef, and then you can define what the base type is, and define all the properties of a particular type... And I just made it work with @typedef, to define my interfaces, and it's great. It's awesome.

As long as I'm talking about it, shout-out to Daniel from the TypeScript team, who helped me get some of this stuff working a little more quickly. I was running into performance issues because I essentially had a misconfiguration in this monorepo that I had. He helped me get that set up, and now it works just splendidly. I totally recommend -- if you're writing doc strings, if you're using JSDoc and you're using VS Code, take a look at writing JavaScript in VS Code, and it'll show you how to set up all your TypeScript settings and get all that type inference just as you would in TypeScript. It's great. That's my big pro tip.

**Divya Sasidharan:** \[00:40:00.12\] That's awesome. I had no idea about that. I feel like there's a lot of times I question why -- and I see the reason for using TypeScript, because type inference and type checking is really nice, but a lot of the times it's a huge extra thing for me to do, and write things in a completely different manner than I'm used to, and so I tend to chuck it to the wayside... But JSDoc is something that is actually really easy to integrate, because it's essentially just documenting your function. And if you could do a lot of the type-checking within that, that's super-cool.

**Christopher Hiller:** Yeah, it speaks the param, it speaks the types in return values, it supports TypeScript syntax, it seems to support the Closure Compiler syntax too, for defining types... So it's pretty loosey-goosey with how you wanna write your docs strings... But the inference works great. All you've gotta do is really fill in some holes, and if you're passing objects around, you need to describe the shape of those objects, and that's basically it. That was the main thing that I needed to do.

Otherwise, if you have a class, an ES6-style class, it understands everything about that class, it understands all the methods, the static methods, it knows when you say this.foo is bar - it knows that foo is a property of an instance of whatever class you have... And the inference is awesome. I didn't have to go through everything and define every return type, because it knew. So yeah, I've gotten a long way with it, and I highly recommend it.

**Kevin Ball:** Cool. I will pick up for the next one... My set of pro tips is related to talking to users or stakeholders. I think most engineers have now heard it's important to talk to your users, and whether or not you have internalized it or not, it is important to talk to your users to understand how they're using and what they need... But one of the trickiest things, particularly for engineers, is to understand that users are really bad at telling you what they need and what they want. And they're bad in kind of a particular way.

They will come to you and they'll say something like "I think this project/thing needs to do X, Y, Z", and they'll tell you what is essentially a solution. "I want this thing." But users are really bad at solutions; this solution will usually be half-baked, it'll be really weird, and if you actually build it the way they say it, they'll try it and it won't work, and it won't do what they want. And I'm saying users, but stakeholders or clients are often the same way. They'll say "I want this" - they'll describe a thing, you build the thing, then they try it and they don't like it.

But where users and stakeholders, and people - this is a human thing, we're very bad at imagining the future in general, but what we're really good at is describing what our problems are. So when somebody comes to you - if you're talking to a user - and they say "I think you need X, Y, Z", your job as an engineer or a project manager, whatever your role is in the situation, is to try to uncover what is the underlying problem.

Sometimes it's as simple as saying, "Okay, what's the problem you're trying to solve with that? Can you show it to me? Can you tell me more about it?" Sometimes you need to dig a little bit more. An extremely useful question I've found is you say "What's the most challenging or frustrating thing about X?" If they've put a solution in front of you, say "Okay, with that, what's the most frustrating thing that you're trying to solve with that?" And use that to kind of uncover the problem, which - if you have a really good problem and a really good understanding of the underlying problem, coming up with a solution... You can try a bunch of different solutions; you can explore the solution space and figure out something that will actually solve that problem very well. But if you stay at the level of "The thing that the user told me..." or "The thing that my client told me...", you're gonna end up with a really half-baked solution.

\[00:44:18.22\] So my pro tip is talk to your users, talk to your clients, but use the things they tell you to try to understand their underlying problems, not as "This is what they actually want." And that is my pro tip. Divya, how about you? What have you got?

**Divya Sasidharan:** Mine is a bit technical, but also builds on what you were mentioning. I think the key part of it is this idea of communicating, and I think it's under-appreciated in tech, the importance to communicate, because everyone just assumes you have to be an elite coder, and be very technical, and know everything there is to know about code, and writing code... But a lot of the job is just basically talking to users and stakeholders, and co-workers, and having those communication things.

I am usually on the developer experience dev rel team, which means that I work outside of the product team. I work kind of alongside, but more or less outside. So they have their own sprint planning, and their own review cycles, and we are kind of outside of that.

The last few weeks -- we're doing product rotations, so the dev rel/developer experience people move into product to work on product... And my perception of it, interestingly, was that "Oh, I'm gonna write so much code, and be really productive, and contribute to the codebase", and do all of these things, but I realized that I actually have more meetings now, because I'm talking to key stakeholders, I'm talking to co-workers, I'm doing a lot of these sync-ups with the design team, just to make sure that everyone's on the same page and that we're onboard with things that are happening.

That's just something that is often forgotten - that in tech often times you're actually talking more than you're writing code. You're either talking or you're reading other people's code more than you're actually writing code, just because there's a lot of work that has happened before you, or is happening while you're working alongside you... So you have to always be aware, because you're not working alone, unless you're a freelancer or you have your own projects. But otherwise, if you're on a team, you constantly have to have that back-and-forth communication that happens.

**Kevin Ball:** If you're a freelancer, you absolutely have to have that communication with your client.

**Divya Sasidharan:** Yeah, with the stakeholder. I mean, maybe not like direct co-workers, but yeah... Related to that is actually this idea of Git hygiene. I've more or less in my time at Netlify - it's been about a year - a lot of the projects that I work on tend to be pretty independent. So it's similar to being an individual contributor - you're working on code, you don't really get a lot of review, because often times it's demos, it's integrations... You work with the community a lot, so there's community review, but it's not as stringent as working on a team. So I realized that my Git hygiene has actually gotten pretty bad... Which is nice, because in a way, me being on the product rotation has kind of put me back into the right track of making sure I'm aware of that.

\[00:47:37.23\] One of the things is just this idea of merging and squashing, and changing history. That often is like shooting yourself in the foot. I really like clean history, and that actually ended up being terrible for me in my time on the product team, which is actually really short... Because I was working on a specific update to a feature, and that, like a lot of things sometimes, the feature set grows, so they're like "Oh, if you're doing this one thing, you also have to do this other thing, and then you have to do this other thing..." So what I ended up doing was I branched off of that branch; I branched off of master, and then I branched off of that branch, and I think there were like three or four branches of a branch, that branch into master.

I don't know why, but I was so committed to like "Yeah, I've got this. I'm gonna make sure the history is clean, and everything." And master kept moving forward, and obviously I wanted to make sure everything was continuous... So I changed the history of the main branch, which is horrible. Never do that, ever, ever. Because if you change the history of the branch that other branches are branching off of, you're just in for a nightmare. Nothing is gonna resolve. Every time master moves forward, you need to do a rebase. You're gonna have infinite merge conflicts... It's horrible. That's something I've learned from this experience...

So I think if anything, it's just like, have a better sense of working with Git. If you're working on a team, understand what the conventions are. At Netlify it's pretty nice, because there is a documentation for conventions in terms of how you name branches, how you branch off of things... If a specific feature is starting to get bigger, you call it a release branch, and then you make sure that anything branching off of a release branch gets merged in as soon as possible. Because otherwise, when there are still branches, it's not fun. It's not fun.

**Kevin Ball:** We had a mini-discussion on a different episode about Git histories, and whether to squash or not squash, and we quickly derailed, because we could see -- I mean, this could be a debate episode entirely, so...

**Divya Sasidharan:** Oh, for sure. But I was very much on the side with Nick, in that I really like squashing, and then this was the one time where I was like "Oh my gosh, squashing was the worst thing to do."

**Kevin Ball:** It reminds me of metaprogramming, in the sense that if feels really cool and slick, and it makes things so clean and nice and beautiful, and as you hang yourself with it or shoot yourself in the foot with it a time or two, you start to value more and more the beauty of explicitness.

**Divya Sasidharan:** Oh yeah, and I think it's a matter of making sure you understand why you're doing something, and the pros and cons of that decision, rather than being dogmatic. The reason why this whole debacle happened was because I was so sure of myself that squashing was -- this is how I made sure everything was gonna be clean and efficient, but I didn't think about the ramifications of that decision... Because if I were to think about it again -- I still like squashing, but if you wanted to squash, you wouldn't change the history if anything is branching off of a branch. So if you're like Master, you have Branch A, then you have A', and whatever else... Never change the history of A, because A' is related to A, and therefore it will cause a lot of issues. So until A' gets merged into A, do not ever change history.

Afterwards, once everything is done and there's only one branch, then sure, whatever, change history if you want, or not... But that's the main thing. It feels so obvious. It feels like such an obvious thing. But yeah, that was one of the things that is a learning point for me... But it's obviously really nice to have that course correction for me.

The other thing that I wanted to know is we've been talking a lot about the frameworks, and I'm really excited about Vue, because I work on Vue a lot... And from the conversation that we're having, if you're interested in how exactly the implementation of that works, there is a Node module for the Functions API that allows you to play around with the Functions API as a separate -- you can add it into an existing Vue project, and you can import it... I think you would just do like vue.use. It's essentially like a plugin. You'd plug it in and then you can use it alongside your current Vue code.

\[00:52:22.28\] I've done it with projects that I've worked on, just to have a better sense of what exactly the Functions API is. I think it also gives you an ability to have an opinion, because it's really hard to have a sense of the implications of a feature change without knowing how it translates into code. So though there are examples in the RFC of how exactly to use the API, I think writing it yourself gives you a better sense of how exactly you would use it, rather than how someone else would use it.

And obviously, being able to make mistakes within it also gives you a better sense... Because I would use it liberally, everywhere, and I would be like "Maybe I can do it this way, and this way", and I've had chats with the core team and they're like "That's not how we intended it to be used..." But I think that is great, because it's a good way for you to experiment with up-and-coming features, and then also be able to contribute to that discussion.

**Kevin Ball:** Awesome. I think that makes for a great set of pro tips - communication, and communication with yourself, with Git...

**Divya Sasidharan:** Yeah.

**Kevin Ball:** Alright, let's call that a segment and we will be back shortly with segment three, where we're gonna do some shout-outs to our favorite people and things happening in the community. Catch you on the other side.

**Break:** \[00:53:51.25\]

**Kevin Ball:** Welcome back, JS Party people! Let's talk about people and things that are awesome in the community. Chris, why don't you give us your shout-outs first?

**Christopher Hiller:** So there was an experimental feature added to Node recently, proposed by Jan Krems, and Guy Bedford actually landed the PR... It's the Package Exports proposal. What this thing is is it's a new field in package.json, and it lets libraries specifically essentially create aliases of -- so the best way is probably just to use an example.

If you've ever used something with a very large API surface - Lodash comes to mind, RxJS, sometimes they don't want to just export the whole API from the root module. So you don't say "give me foo, bar and bazz" from RxJS. If you want the operators, you reach into rxjs/operators. The same with Lodash, lodash/fp is a sub-path of Lodash.

Essentially, when you're doing that, when you use the sub-path, it's exposing implementation details... Because in order for that to work, so in order for Lodash/fp to work, one of two things has to be true. One, there needs to be an fp.js in the root of the Lodash module, and it must be published as such.

\[00:56:23.16\] The other thing is there may be an fp directory, and in that directory is an index.js, and it has to be published that way. So what Package Exports does is it allows a module author to declare "Okay, these are the--" I think they call them sub-paths. So these sub-paths point to these files.

So you could say something like, okay, if somebody requires mymodule/foo, that requirement will map to this other path somewhere in my source files. So you don't have to expose the directory structure - which is an implementation detail - in order to provide those sub-paths and allow your consumers to reach in to some other place in your module and pull things out.

Right now it's experimental, but it's a really great idea. People will kind of rail against aliases; I've seen this before, where they don't like the idea of -- well, it makes code hard to find, essentially. This is for libraries, so if you need to reach into a third-party library and it's got this export path in there, I can see where it might be difficult to actually find the source, but I'm sure tools will adapt to this.

Right now it's experimental, and you can probably just go ahead and play with it, but because it's experimental, it's behind a flag and you can't really start publishing your things and expect it to work, because it's not gonna work for everybody yet.

Anyway, really great idea. Thank you Jan and Guy for the Package Exports proposal.

**Kevin Ball:** Sweet. Thanks, Chris. Divya, do you wanna go next?

**Divya Sasidharan:** Sure. I think NEJS happened last week, and I was listening to the Twitter threads that were happening and people talking about it, and it seemed really cool. I'm really excited for the talks that they curated. This was the last year. I think it's five years that they've done NEJS now, and... There was a talk -- I had no idea; so last we talked a little bit about package management, and that came up, and Pika package was one of the things that we discussed... And the author, Fred Schott, actually spoke at NEJS, which I had no idea that he did. I only noticed when it was tweeted out that he did, but I'm really curious to see that talk.

I think it accompanies a post that he created maybe last week; it was very recent, it was beginning of August sometime. So yeah, I think that's really cool. NEJS is a wonderful conference; I'm really sad to see the end of it. But at the same time, they've done a wonderful, wonderful job with it. I think it's a really great example of a community-driven event. It's really well-received.

I've spoken at it before. My co-worker Phil Hawksworth spoke at it this year, and he had a wonderful experience. I've always heard good things about it, and I've experienced it, and I can say that it's a great conference. Unfortunately, you can no longer experience it, but I look forward to future conferences that are very similar like that.

**Kevin Ball:** \[01:00:08.06\] Yeah, I hope next time Nick is on we get a little bit of a debrief. I guess Jerod was there too, they're both organizers. So next time we have Nick and Jerod on the show, they can get a debrief on NEJS.

**Divya Sasidharan:** Oh yeah, I think it'd be good to do a community episode, just like how to rally -- a retro on community and conference things. That'd be really cool.

**Kevin Ball:** Awesome. Alright, final set of shout-outs - I wanna do a couple shout-outs to people in the community who are doing a ton of work to make the tech industry more welcoming and accessible to people, and particularly to women. We have a long history of having an industry that's very dominated by men. There's been a big push recently -- I can tell when I go to a conference if they've paid attention or not, because there are more and more conferences that really make a big deal out of gender equality, and having not just men and women, but all genders feel welcome, dealing with simple things like "What are your preferred pronouns on your tag?", things like that. All sorts of stuff around that.

There's people really putting a lot of time and energy and investment into making this industry more welcoming to people who are not just white men, and I wanna shout out a couple. The first one I wanna shout out is the new Ladybug Podcast, that actually one of our panelists, Emma Wedekind, is doing along with Kelly Vaughn, Ali Spittel, and Lindsey Kopacz. I probably butchered all of your names, I apologize... Though I hope I got Emma's right, because I asked her how to pronounce it once.

So that's one thing, check it out - The Ladybug Podcast. They're talking about all sorts of stuff in the tech industry; they're talking about things that are not just stuff that women run into, but it is also doing some things about particular challenges that I think women sometimes get hit by a little bit more... But more than that, they're just talking about the tech industry from women's perspective, which is something that we need a lot of... Because as much progress as we've made, there's a lot of white dudes like me out here.

The other person I wanna call out who's doing some great work in that space is Tracy Lee (@ladyleet). She's the CEO of This Dot Labs, but she's done some really interesting things in terms of curating women in tech to help improve their visibility. So if you are like me and love the Twitters, and you wanna find some amazing women in tech who are doing awesome things, go check out ladyleet's Fempire list. There's just a lot of really cool people.

I'm focusing on women in tech right now, but broadly I wanna advocate for expanding of sets of people that you follow to people who have different perspectives and different backgrounds. If you are a white woman, find some black man to follow; if you're a white dude like me, find some women, find some folks who are of different backgrounds - Latin American, African American, and folks from outside the country.

When I was traveling recently I discovered I was overseas, timezone-wise I was off by like nine hours, and I discovered "Holy smokes, my feed is extremely U.S.-centric." I don't have those perspectives of people who are even similar to me, but in different countries in Europe, and people who have very different backgrounds... So I highly recommend looking for, seeking out people with perspectives different from yours to follow.

Yeah, those are my quick shout-outs. With that, I think we are done with this episode. Thank you for joining us for our experiment with the framework wars, for our pro tips, and now closing with shout-outs. Do send us some feedback on what you thought of the framework wars segment, and we'll catch you next week.
