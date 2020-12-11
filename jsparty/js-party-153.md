**Nick Nisi:** Hello! Welcome to JS Party, a party every week with JavaScript. I'll be your host today; I'm Nick Nisi. Hoy-hoy! Joining me as well is Kball. Kball, what's up?!

**Kevin Ball:** Hey, hey! Life is good... I guess... For 2020 standards.

**Nick Nisi:** Yeah, awesome. Well, that's always good to hear. And we have a special guest with us today, and that is Mike Hartington from the Ionic team. Mike, say hello.

**Mike Hartington:** Ahoy-hoy. Welcome, everyone. I'm excited to be here.

**Kevin Ball:** Oh my gosh, you might have a better Mr. Burns than Nick himself.

**Mike Hartington:** Ahoy-hoy, everyone... There's an inside joke with a friend of mine from high school that every time we call one another, it's always Ahoy-hoy, because he's such a big Simpsons fan... It's like "Well, I've gotta -- I have to follow suit with him."

**Nick Nisi:** Absolutely. Disney Plus right now is basically just the Simpsons streaming service for me, and that's pretty much what it's been since they came out. So yeah, I really like him.

**Mike Hartington:** Simpsons plus The Mandalorian. That's constantly on repeat.

**Nick Nisi:** That's true.

**Kevin Ball:** I'm doing my fair share, but I think I've seen half of The Simpsons episodes in my entire life...

**Nick Nisi:** Oh, my gosh... I don't think I've lived --

**Mike Hartington:** That still accounts for like - what, 15 years? \[laughter\]

**Nick Nisi:** I don't think I've lived in a time where The Simpsons haven't been on air, so... That's just crazy.

**Kevin Ball:** I just, you know, don't watch TV much, and I'm not a fan of that type of humor that much, but I do know a couple of the snippets... Like, the Spider Pig is \[unintelligible 00:03:53.12\] our house.

**Nick Nisi:** Yeah. To be fair, it's really only seasons like 3 through 9 or so that are worth watching... But anyway, we're not here to talk about the Simpsons. Let's talk about Ionic.

First off, why don't you tell us what Ionic is, Mike?

**Mike Hartington:** \[00:04:08.21\] Cool, yeah. So Ionic is kind of a UI framework for building cross-platform apps. If you wanna build a native iOS app, or a native Android app, or desktop Electron progressive web apps, Ionic gives you the UI and interactions for building that up, all based on Web technology, so HTML, CSS and JavaScript.

**Nick Nisi:** Very cool. Looking at it - and I'll be honest, I haven't really used it yet, but... It is a framework, but not in a traditional sense of the way we typically think about frameworks, like a Vue or an Angular... It's more of like -- is it something that can sit on top of those?

**Mike Hartington:** Yeah, and I think we can think of it more like a meta-framework... Almost equivalent to like a Tailwind, where it gives you the design language and design system for building out these apps... So what does a button look like? What are the interactions that this button should have? How should navigation and transitions happen?

But we don't dictate how your app should be built. So if you wanted to use Angular, you could use that. If you want to use React, you could use that as well. And more recently, if you want to use Vue, you could use that as your framework of choice... Kind of "Choose your own adventure", and then our components can just enhance your app.

**Kevin Ball:** Yeah. It reminds me of traditional component library frameworks, like a Bootstrap or Foundation, or something like that. Well, early on, I think, you dug deep into the integration for mobile piece, as I understand. I remember looking at Ionic quite a bit back when y'all first came out, and I think it was originally Angular-specific, and then you made it more generic, and sort of pulled up a few levels there. But what stood out to me as unique was the deep focus on mobile development in particular. Is that still the case?

**Mike Hartington:** Yeah, I would say that's still the case. Our story kind of -- we started off all as cross-platform developers using things like jQuery mobile back in the day... And we were kind of frustrated with a lot of the obvious issues and limitations of using that framework. We were like, "Well, what would we do?" And we wanted to build the Bootstrap for mobile. Comparing ourselves to Bootstrap - it's kind of an honor, because it's like "Yeah, that's what we originally set out to do, is just be this ubiquitous set of components and UI library for building mobile apps.

As that's kind of evolved, you know, desktop, largest form factors, traditional web apps - that definitely has come into focus. But you know, our bread and butter is still mobile very much.

**Kevin Ball:** And why would somebody go for an Ionic, rather than for example just packaging up - let's use the Bootstrap example - use Bootstrap, maybe one of the React or Vue integrations, and then packaging it yourself with Cordoba?

**Mike Hartington:** Right. So I think the big reason why you would want to use Ionic is the big focus on modern browsers, modern CSS and JavaScript, and having that deeper integration to the native design systems. So how a button works on iOS is very different from how a button works on Android with Material Design. Bootstrap gives you yet another option for how these interactions work, but it's not necessarily at home to these platforms. Ionic gives you the platform integrations that you would expect to get, so users of your apps don't feel like "What am I using here? This doesn't feel right." It feels obviously not native. Ionic would be a great case here, because it just gives you that native experience... Because we've built it to be an exact clone of how these platforms behave.

**Kevin Ball:** \[00:07:58.24\] And when you describe that as an exact clone - so is it still implementing it in HTML, CSS and JavaScript, or are you calling out to native components and using an integration like a React Native style thing would?

**Mike Hartington:** No, we are still using HTML, CSS and JavaScript. Web developers don't have to learn a subset of CSS, or some custom way of integrating in code; they just have the building blocks of the web.

**Nick Nisi:** That translates -- is it like a translation layer between Ionic and React, or Ionic and Vue? Is there like just bindings to an Ionic component to make it a React component, or how does that work?

**Mike Hartington:** The way that works is that we have this core package... So we build everything as Web Components; we ship them as standard Web Components that people can use without any framework... And it includes core styles and interactions for the JavaScript.

Then as we want to adopt other frameworks, we provide framework shims, I would say, to make that integration feel like what you would expect if you were working in React. So for React we have our own set of React-branded components, that just gives you the functional import statement, provides the correct type information, makes sure that it can pass events and props correctly to the actual web component and manage that... But really, once it is done with the React aspect of it and it is just rendering it to the DOM, you just have a core web component being rendered out there. Angular has the same thing, where it's just passing the types to the Angular type system. Vue does the same thing; it just makes sure that the components are recognized as Vue components, and it understands the different types and props and events that can be emitted on the component itself.

**Nick Nisi:** Nice. And you mentioned Angular - I think that when I first hear of Ionic, I heard of it in terms of being like an Angular project, but it's obviously grown a lot since then. Do you maybe wanna describe a little bit of the timeline of that?

**Mike Hartington:** Yeah. So we started it off wanting to be framework-agnostic, mostly because AngularJS was still getting its foot off the ground, and jQuery was the big framework that everyone used. Ember was a thing, Knockout... It was still the early days of JavaScript frameworks, and we were like "Oh, wouldn't it be cool if we could just support all of them?" So we tried to do that, realized that AngularJS probably gave the best option at the time, with directives, and it was a custom component idea... We sat on that for a little bit; we were very successful. Angular 2 came out, and we were upgraded to the newest version of Angular, rode that for a little bit... And then we kind of saw all these frameworks just get to a point where there is no real difference in which one is better, it's just what is the mental model that you want to work in.

We were thinking, "Okay, can we actually do this cross-framework stuff now?" And we ended up building a couple tools along the way to make it possible. But I think around 2018 we released that first version of Ionic, that was built on Web Components and supported Angular.

A few months afterwards we released the React version. Then earlier this year, actually 3-4 weeks ago, we released the Vue version. So we've kind of hit the big 3, I would think. The core components haven't had to be rewritten in over two years, which I see as an absolute win.

**Nick Nisi:** Yeah, that's awesome.

**Kevin Ball:** How heavy are those integration layers? I think this is the dream, right? You build in one place and you're able to integrate with whatever folks are in... And I'd love to see more people doing that. But I'm kind of curious -- that feels challenging. So are those layers pretty heavy, are they hard? Are they needing to be updated a lot as the frameworks churn? How is that working?

**Mike Hartington:** \[00:12:04.02\] I wouldn't say that they're heavy. Most of the things that each integration layer does is kind of set and forget. For Angular specifically it's just making sure that the Angular compiler knows about the component types, and we're mapping the Angular events back down to the native element under the hood.

What's really been helpful here is the way that we author those core components. We have our own toolchain called Stencil, which helps out in generating the Web Components. They're all written as TypeScript components, and we have all that type information at build time, so we can extract all that out, and basically automate the entire integration layer.

I gave a workshop for \[unintelligible 00:12:52.12\] a nice little plug - where we went over how to actually build that integration layer... And I was like "Alright, well, here's our vanilla web component. How does this integration layer work?" It's as simple as just enabling it in a config file, and it will generate the Angular component, the React component, Vue, and even Svelte, if you wanted that. So just a streamlined process, now that we've figured it out.

**Kevin Ball:** If somebody wanted to extend one of those components for their own work, can they plug in ahead of the build layer, so that you're doing that? Or would they kind of wrap it in some way? I'm imagining, for example, if I have a React component, I'm pulling in a component library, and say I'm using Styled Components or something similar locally. I might wrap it and extend it, or do other things with it to really add my flair to it. Say I wanted to customize it in a way that y'all haven't thought of. What would be the way to do something like that in Ionic? Is it pulling in post-build, is it updating? Can you plug into that build chain in some way? How would that work?

**Mike Hartington:** I guess that would really depend on what it is that you're trying to do... Like, how far do you want to extend it. Because if you just have a toggle , and I want it to be my company's branded toggle, you could totally just use Styled Components or use some kind of CSS setting where you are just changing the base styles and the base CSS variables that are used there, and completely re-theme it to your own thing. That would be one kind of -- we're just changing some styles, we're not overhauling the entire component.

If you want to overhaul the component - and honestly, I would suggest building your own anyway - you could use ours as a base, and just reference it inside of your markup... But if you have something that's very specialized, kind of build it yourself. You're going to be able to better understand all of that, than trying to shoehorn our components into an existing system.

**Nick Nisi:** So really just treat them as like a black box component, and not worry too much about the implementation.

**Mike Hartington:** Yeah. We can think about more like leaf components. There's a termination point at the end of a component chain, each one of these. They can be composed together, but you don't necessarily go in like "Oh, I want to rip out this aspect of a toggle, and I wanna rip out this aspect", and kind of recompose it together. It's not necessarily what I think you should be doing.

**Nick Nisi:** Cool, yeah. I definitely wanna dig more into the underlying Web Components piece of that, and Stencil that you mentioned, but first I wanted to ask how did you get involved with the Ionic project?

**Mike Hartington:** So many, many moons ago, before the Covid times, I was a low graphic designer at a company, who was put in charge of writing a web app, because I was the only one who knew anything regarding programming... And it was ActionScript in Flash. So I did that, my boss got an iPad and was like "Why can't I load your stuff on an iPAd?" Because iPads don't run Flash. So I learned JavaScript, found stuff that I needed to do to build a mobile app, which was Cordova at the time... I didn't wanna make my own components, I found Ionic, and I just started doing that work more than doing my real job.

\[00:16:18.20\] I would join their developer forum, help people out, answer their questions, try to do free customer support for them at the very beginning. I saw that they were hiring, I reached out and I was like "Hey, can I have a job?", not knowing that that would actually work. So I reached out to them, I was like "I see you're all hiring. I think I do a lot of stuff; I think it would be cool to work." That was a contract that ended three months later, and they hired me full-time, and it's been like 6,5 years or so with them... Kind of just, you know, growing through the ranks of community member, semi-official person on the team, to official person on the team, and now dev rel and representing the team.

**Nick Nisi:** Yeah, I'd like to know a little bit more about that, too. I'm always intrigued by dev rel and what y'all do... What does a typical day look like for a dev rel?

**Mike Hartington:** That would definitely depend on the dev rel person you ask...

**Nick Nisi:** I should also caveat probably, now and pre-Covid, or post-Covid... Because it's probably changed a lot.

**Mike Hartington:** So pre-Covid I would figure out if I'm going to a conference or not in the coming weeks... But you know, it actually hasn't changed too much for me, because I've always been remote... So my works mostly always been online. So it's like check email, check our developer forum, check GitHub issues, convene with the team, figure out "Hey... I'm seeing 5 or 4 different reports on this bug; what's going on here?" Maybe work on a blog post and a video. I would say the standard dev rel kind of tasks that you would expect. That's what I do. And I also appear on podcasts.

**Nick Nisi:** Yeah. So your users are other developers, in that sense... And you're really creating content and helping them along with their journey.

**Mike Hartington:** Yeah... I think another \[unintelligible 00:18:14.20\] I fight for the users. So when our team, or our engineering taem, or our framework team was just like "Oh, well we can't really do that", it's my job to internally explain to them what problems they are trying to solve, and how changing this one thing could be beneficial for not just this one person, but "Here's like 20 people who have the same issue, and asking the same thing over and over. We should probably make this change and make this fix."

**Break:** \[00:18:51.21\]

**Nick Nisi:** So in the last section you talked about using Web Components as the underlying technology for the Ionic components that you're creating. What's it like working with Web Components in 2020?

**Mike Hartington:** It's actually pretty good. I know there's been a long history of maybe Web Components kind of seeming like "Oh, they'll never be ready. They'll never do this. They're never going to be supported in any other browser than Chrome." But they're supported in Chrome/Edge, Firefox supports them, even Safari supports them, which - if Safari supports something, you've gotta admit it's kind of stable.

**Nick Nisi:** That includes mobile Safari too, right?

**Mike Hartington:** Yes, that includes mobile Safari, and iOS. So it's a pretty good experience overall. I think that probably the best thing that I would describe it as is being very low-level. So there is no templating language, there's no bindings for how things should get reflected back to the component, and then should that trigger a re-render... All the niceties that we're used to from frameworks - that kind of goes away. But if you're okay with that and you just need to know "I set this on it, and then that gets reflected", or something happens when that is done - that can be pretty nice.

**Nick Nisi:** Yeah. I have little experience with Web Components, but it was the version zero spec, so way different in terms of -- it was really esoteric back then... But it's been a year kind of building a component library on top of that, which then had some React bindings on top of that later on to kind of help that transition out of it.

But it was not the easiest thing to work with, and I think that that's probably my biggest complaint with it - compared to something like React, or other ways of interacting with the DOM, and setting things like that, it's a little bit different, because it's not as declarative as those other ones. You have to create this element, and then set all of these properties one by one on it, or write a tool to do that... But I guess it's a typical DOM API, is the way I would put it.

**Mike Hartington:** Well, kind of the reason why it's built that way is because it is a typical DOM API... And I wasn't in the room when they were created, so I don't know the whole back-story... But whenever I talk to people about it, it's like "You're not supposed to use Web Components directly, or use some of these APIs directly." At least I don't think so. They're low-level because they're hoping that people would make micro-libraries on top of them, that help improve the developer ergonomics... Because there is no one-size fits all approach for building components on the web. So if we can get these micro-APIs that really are easy to compose together, developers could write their own mini framework, or their own mini library to make that ergonomic fit for them.

**Nick Nisi:** Would you say that somebody should create a Stencil for people to copy from them?

**Kevin Ball:** Oh, Nick... Oh, Nick...

**Nick Nisi:** \[laughs\]

**Mike Hartington:** Segue...

**Kevin Ball:** That was the most forced segue, my friend... \[laughter\] But it is actually really interesting; we had that conversation a couple weeks back about jQuery as a programming library and model, and actually, Web Components are much closer to that type of thinking and programming; this very imperative style, rather than the declarative approach that has kind of taken over modern web development, in a lot of ways...

So it does raise the question of "Are they intended to be worked on directly, or are they a primitive that you then want to wrap up in a framework, like a Stencil, or something else...

**Mike Hartington:** I guess it really just depends... I would say that they are meant to be something that you build on top of, or that you are creating some sort of abstraction, a Stencil, a lit-html, something that's based on Web Components, but you have some niceties on top of it to make it fun to work with?

\[00:24:00.05\] Depending on who you ask, some people would also say "No, the primitives are perfect, and we can always use those", but in real teams that we talked with - not always the case.

**Nick Nisi:** So tell us how you approached that then, with Stencil. How does Stencil simplify that API?

**Mike Hartington:** Stencil -- think of it as like the melting pot of all different frameworks... Because there's a little bit of Angular in there, there's a little bit of Vue in there, and there's a little bit of React in there... But it all builds on the idea of "Can we simplify the Web Component authoring process?" So we use decorators to annotate classes, like "Here's our component tag, here's some associated styles with it...", should you shadow DOM? We basically borrow the component decorator from Angular. We have decorators for setting properties on the component that get reflected back to the HTML element, that are reactive... So anytime a value is changed on those properties, it'll automatically trigger a re-render and update the bindings.

And then it's authored all in JSX... So they'll use JSX, and there's like a small virtual DOM for speed and updates. So if you're using React, a Stencil component feels pretty familiar. That authoring experience is basically one and the same, except we can use class.

**Kevin Ball:** How big is the Stencil runtime?

**Mike Hartington:** It depends on what it is that you use. Everything itself is tree-shakable... So if you are just rendering out a static div that says "Hello, world", the runtime ends up being like nothing. If you are bringing in more of the reactivity aspects of it, with the property decorators and some of the watchers that we have in there, it can go up a little bit... But it's never going to be the size of a full-fledged framework. It's significantly smaller than React.

**Kevin Ball:** Does that get embedded? Are you able to just load that once? I'm not super-familiar with how Web Components handles shared runtimes like that. Because you've got these individual component packages. One of the complaints that's been raised about Svelte, for example, is that you end up with a lot of duplicated code in each component, because it's compiling down, but it doesn't have this ability to share the runtime. So it's substantially smaller with small numbers of components, but it scales substantially more rapidly than like a React application.

**Mike Hartington:** Right.

**Kevin Ball:** Do you get the same effect, or are you able to share that code in some way?

**Mike Hartington:** If you have, say, a component library with ten Stencil components, you get one runtime or one namespace that is for that component library. So component A, B, C, all reference that runtime or that namespace set of features... And they can reference that if you're including multiple Stencil component libraries; you include an Ionic one, another one called Shoelace... Those might have conflicting features, because each component library could be using different APIs. But you're not going to have one virtual DOM implementation for this component, another virtual DOM for this component... That stuff kind of gets normalized.

**Kevin Ball:** Got it. So basically, when you build Ionic using Stencil, you get a single runtime that all of your web components are able to reference.

**Mike Hartington:** Yup. And be lazy-loaded.

**Nick Nisi:** Does the shadow DOM change that at all? I'm not super-familiar with how that works, but would that be its own self-contained environment that needs its own runtime?

**Mike Hartington:** \[00:27:47.16\] No, because the scope in which our stuff works in - really, we're only paying attention to the host. So as the component gets authored, we are just listening for how our properties or how our events methods being figured on this host element. Then we can compute the inner elements in the shadow DOM programmatically, and just update all of that. So we kind of remove -- we're using shadow DOM, but that just becomes an artifact of how the components get built. It all gets updated programmatically, internal to how Stencil and the components work. So the users don't really pay attention to all that. It's just an implementation detail that we know.

And I kind of mentioned it quickly at the end there, \[unintelligible 00:28:30.27\] all those components get lazy-loaded on the fly. So you're not having to reference them if you're just using the raw Web Components. Once you import that main runtime, it knows what components it should be using, and as it gets parsed out, it'll lazy-load each component on the fly. So it ends up being very small.

**Kevin Ball:** You don't happen to have typical numbers on that, do you? Since you challenged me to make you uncomfortable...

**Mike Hartington:** Okay, let's go. Let's get uncomfortable.

**Kevin Ball:** \[laughs\]

**Mike Hartington:** I mean, it really depends on, again, your use case. So if I go in my own terminal right now... I'm going to a disk folder that I have, and if I look at, say... Ah, that's not the right file. They tend to be pretty sub-1k. Sometimes a few hundred bytes.

**Kevin Ball:** Per component?

**Mike Hartington:** Per component. Because they're all specialized to do this one thing. The biggest file that I have in this project is framework code, and that's at like 500 kilobytes. Everything else that is like --

**Kevin Ball:** Whoa, whoa, whoa... What do you mean framework code?

**Mike Hartington:** That's like the framework runtime and the framework API for -- in this case it's an Angular project. This is including 500 kb for Angular.

**Kevin Ball:** Oh, okay. Angular being 500 k doesn't bother me. I was like "Wait, you're adding 500 k of Ionic framework?"

**Mike Hartington:** No, no, no.

**Kevin Ball:** Angular is already obscenely large, so yeah.

**Mike Hartington:** But we're adding for one of these, which is including three or four different componets. It's like 5 kb, and it's like a spinner, so it generates SVG on the fly; so it's a little bit more complex... But yeah, 5 kb for that component.

**Kevin Ball:** And that includes whatever Ionic runtime there is that's separated from Angular?

**Mike Hartington:** No, that's just the one component. The Ionic runtime itself would be wrapped into a vendor file, so it would be 10 kilobytes.

**Kevin Ball:** So not that crazy.

**Mike Hartington:** No, they're relatively small.

**Kevin Ball:** If you were using Angular, you wouldn't even notice, because you're already paying for 500 kilobytes of Angular.

**Mike Hartington:** If you're using React in the entire React ecosystem you wouldn't even notice anyway, because you get React, React Router, Redux...

**Kevin Ball:** Fair point.

**Mike Hartington:** \[laughs\]

**Kevin Ball:** I will highlight that neither of these is my favorite framework, though I have in the past used more React than -- I use React a lot right now because of work, but I haven't used Angular that much in years. If you're gonna pick one, Svelte or Vue is the way to go, right?

**Mike Hartington:** If it fits your mental model...

**Kevin Ball:** \[laughs\] That's actually a very good point. There is actually no best framework. It's about matching your mental model, the skills on your team, all those different pieces. If we were doing sizing battles, those two frameworks come out a little bit smaller. They have other trade-offs.

**Mike Hartington:** But it's no Preact. At least we can all agree. It's no Preact or Svelte. Nothing \[unintelligible 00:31:26.26\] that small.

**Kevin Ball:** And you can handle all of them... So no worries.

**Mike Hartington:** Yeah. Ionic wins either way. We don't care what framework you use.

**Kevin Ball:** Do you actually have an insight into the distribution of frameworks, so people using Ionic? Like, how many folks are using it with web frameworks?

**Mike Hartington:** Yeah, so for historical context, we are still pretty heavily Angular-focused... But with the release of both Vue and React bindings, we're starting to see the gap close pretty quickly. Let's say Angular is ahead; Angular is probably at the 40%, React is probably 25% to 30%, and then Vue and no framework is taking up the last piece of it, if I can do math correctly...

**Kevin Ball:** That's actually more even than I would have expected, given how long you had Angular only... Cool.

**Mike Hartington:** \[00:32:22.07\] Yeah, people were asking for React support for years, even before we wanted to do the whole cross-framework thing... So I think once we added that, people were like "Yes, this is what I wanted. React makes sense for me." And... Okay. It seems like a similar thing happened with Vue right now. I would say let's come back in 2021 and hopefully the world will be back to normal, and the numbers would be a third, a third, a third, for each of them.

**Kevin Ball:** I don't know if we can count on the world being back to normal for much of 2021, but... Maybe 2022. I think 2022 is gonna be a banner year for in-person events. Everybody's gonna be so sick of just being on your own, and when we finally pass things, everybody's like "PARTY!!"

**Mike Hartington:** That's giving people too much credit. I'd say 2025, and we're gonna have some pretty awesome conferences. It'll be like I/O for every single conference.

**Nick Nisi:** Yes. Amazing. I'd love that. Now, speaking of the gap between frameworks, let's talk about another gap; the phone gap. \[laughter\] How does--

**Kevin Ball:** \[unintelligible 00:33:33.06\]

**Nick Nisi:** I do... \[laughs\] I actually mean Capacitor. I'm trying to transition into talking about Capacitor. Mike, why don't you tell us what Capacitor is?

**Mike Hartington:** Sure. Capacitor is our native runtime and API library for taking your web app, shipping it to a native device, and getting access to native device features like geolocation, the camera, Bluetooth, the file system... Your kind of run of the mill native device features.

**Kevin Ball:** So it's essentially a component library for a Cordova? Like the native half of Ionic?

**Mike Hartington:** It's more like a replacement for Cordova.

**Kevin Ball:** Okay, so you're not actually building inside of Cordova anymore? Because once again, my Ionic background is years old, and it used to be that you were using that as a toolchain. But this is a different toolchain.

**Mike Hartington:** Let's kind of rewind the clock a little bit. We were, again, built all on top of Cordova from the early days, because that was the best solution at the time... But as time has gone on, we wanted to do our own things, and we were developing our own opinions on how should this native cross-platform library stuff be done. Pretty haphazardly, we hacked together some demos, and over six months or so of time we solidified something that took a lot of inspiration from things like React Native, a competitor of ours, NativeScript, how they approached managing the native projects. And we were like "Okay, what can we do that takes inspiration from that and is still part of Cordova in spirit?" So we have full-native project access, no components inside of it; you're using things like Android libraries, CocoaPods for managing native dependencies, and just getting a JavaScript API that you can reference in your projects to call these native APIs.

**Kevin Ball:** And just so that I understand - it looks like this is an open source project; is it entirely managed and run by Ionic the company? Because y'all are a company; you have a business model and all that. You're not just doing open source. So is it a company-run open source project at this point?

**Mike Hartington:** \[00:35:54.17\] Yes and no. We have a team from Ionic who are maintaining it, working on it, adding features, but we do have a pretty nice community that is sending some commits, sending some patches here and there, building out third-party plugins and APIs... But it is something that is kind of corporate stewardship... But we want the community to --

**Kevin Ball:** Okay. From a governance model, y'all are running the governance, but you haven't engaged \[unintelligible 00:36:21.15\]

**Mike Hartington:** Yeah. From a governance model, yeah. It's all kind of driven by us. But we do have the community voice represented. Question about open source governance model... I am touched. No one asks that stuff.

**Kevin Ball:** Well, we are representing The Changelog here, so we care pretty deeply about that. So - question then... Because Cordova came out of PhoneGap. PhoneGap was a commercial product. They open-sourced it. I believe they've put it under the Apache Foundation. Is that correct? Do you all have intentions to move to a more open governance model, or is that not in the cards for now?

**Mike Hartington:** I don't think it's in the cards for now. I think a lot of what -- so when we saw Cordova go to Apache, there's obviously a lot of benefit there, but there's also... There's a process involved to make sure that things go through; the Apache process are done the Apache way... We saw that as a factor for why it was getting held back, or kind of not iterating fast enough.

So for us, being all on GitHub, being open source, but we kind of can dictate how the releases happen, what features get in, how the overall vision happens - I think it makes sense for what we want the project to do, and what we want the project to have for features, where we don't have to gain consensus from an entire board, or have a voting process, like "We wanna release this. We have to vote on it." If there's something broken, just release it; just make a fix and ship it, and hope that you didn't break anything else.

**Kevin Ball:** I don't wanna derail this discussion too far, because there's definitely -- I mean, I've led a corporate-run open source project as well; no judgment there. But there are definite pros and cons to both. It doesn't seem like Ionic is going to give up on this project any time soon, but... Definitely that is.

**Mike Hartington:** I will say that we are making a lot of leeway and putting a lot of effort into making sure the project is very successful, because it is a big factor in how our company is successful. If Capacitor is successful, Ionic is successful. If Ionic framework is successful, Ionic the company is successful. So it kind of helps us make sure that we are investing the right time and energy into maintaining these projects, and growing a community voice around it.

**Break**: \[00:39:00.29\]

**Kevin Ball:** So let's dig in a little bit more about Capacitor and Ionic and how you make life good for developers... Because I think, looking back at experience with Cordova, setting up a build environment, a build chain, dealing with it, getting all of the different integrations set up so that you've got... Because often when you're doing native stuff, or you're having to work in many different languages - it's not just a JavaScript environment anymore, or a web environment; you've also got an iOS environment, you've gotta deal with Xcode, you've got an Android environment, Google's whole build chain, all these other things... So maybe talk to us a little bit about the developer tooling you've built out around these areas.

**Mike Hartington:** Yeah, so the developer tooling aspect is, I think, closer to the native chain than trying to abstract it away. If you're building a native Android app - yeah, Android Studio might be a lot to download and might look confusing at first, but it's like WebStorm, with just a different coat of paint on it. It also gives you probably the best step forward for building something that is going to follow the best practices, support the most platforms, be less error-prone to user configuration error... Basically, building a native app in Android Studio is like I press a Play button, it tells me to fill in this sign in information, and I don't really need to manage it myself, which - I can't count on both hands how many times I've had that issue with Cordova, because I would run out of fingers.

Having that kind of configuration and maintaining it across these platforms in an abstracted way is super-difficult. So if yo're gonna use native tooling, just use the native SDK and the native IDE. it's probably the best tool for the job.

**Nick Nisi:** You build it using the Capacitor bindings, but then to actually test and deploy the app you're using the IDEs for each of the platforms.

**Mike Hartington:** Yeah, I mean -- we're using them in the sense that we are giving you a native project, you open it up, you set the sign in information, and then you hit the big button that looks like Play This Song, and it builds for you. We don't necessarily expect most web developers to want to dive into Swift, Java or Kotlin and start writing the native configuration, so we want to make sure that when they get these native projects, we can document the process on how to generate your build and how to generate that binary... Which is a lot easier than saying "Okay, let's go through and generate the build configuration that we've created out of thin air, and it's this obscure reference to a build.json file, and we're hoping that we can cover every single use case." No. Just open up Android Studio or Xcode. It's going to be the best way to get a native project built right out of the box.

**Kevin Ball:** And for those of us who have spent the last 15 years in Vim, and look at an IDE like that and say "Okay, how do I..."

**Nick Nisi:** I'm scared...

**Kevin Ball:** "...recreate this with plugins and other pieces that are gonna let me work in an environment that is so much infinitely better than all these silly GUIs for code?" How would you recommend approaching that?

**Mike Hartington:** So at that point -- there's these things called shell commands that we can batch out to... So you would do \[unintelligible 00:43:12.04\] For people who are not used to opening up these IDEs, they can be scary at first, but so can be learning Vim. It just takes a little bit to figure out -- and that's why the documentation aspect of making sure that we are pointing people in the right direction and not kind of just leaving them to their own devices. If we wanna get into how to configure Vim, we can always do that.

**Nick Nisi:** Yeah. So I actually came to know about you because of your nvim-typescript plugin. You've actually developed several plugins for Vim. What got you into that?

**Mike Hartington:** \[00:43:54.16\] So we can get pretty recursive here... I watched a talk from a meetup by Eunuch...

**Nick Nisi:** Really...?

**Mike Hartington:** ...about how to do modern development in Vim. Because I saw a co-worker using Vim, and I thought it was the coolest thing I had ever seen. I was like "Wow! What are you doing?!" He was like "Oh, I'm just in Vim." I was like "What's Vim?!" And I'm on like a two-year spiral of just like how to set Vim up and how to configure Vim to be great for a web developer. I saw your talk, learned a whole lot, and I was like "Okay, I think I have something set up."

I found this project called Neovim, I got involved with that, I started helping maintain a Node.js binding, so it could write Vim plugins in JavaScript... And then I was like "Well, I've gotta write a TypeScript plugin for Neovim, because there isn't one that works and is asynchronous and fast." And I ended up writing one.

**Nick Nisi:** Nice! You took it way further than I have. I haven't really written anything.

**Mike Hartington:** I don't recommend it.

**Nick Nisi:** \[laughs\] I've written some. I have a lot of Vim script in my dotfiles, but it's not packages as a -- I guess it is kind of packages as a plugin, just because I'm following the directory structure and the file names, things like that. I just haven't isolated it as Vim plugins. But I have looked into yours a but, specifically the nvim-typescript one, and a lot of that is actually written in TyepScript, which I thought was pretty cool... Does that make it easier, or was it specifically easier because it's a plugin for TypeScript?

**Mike Hartington:** It was easier in the sense that I wasn't having to learn a new language to work with TypeScript's APIs. I could just import something from TypeScript's library and just use it right away. And I could import various things from like a temp file creator from Npm. I would just pull that up and I was like "Oh... Okay. I can use this in my plugin and know that it's going to work."

It's basically recreating a Node runtime inside of Neovim, so I was like "I know how to write stuff for a Node environment... It should be the same thing, right?" There's some weird race conditions and things kind of coming out of order that you have to manage there, but once you're aware of those, you just kind of await everything.

**Nick Nisi:** \[laughs\] Yeah. Well, tell us about some other plugins that you've writte for Neovim, or for Vim.

**Kevin Ball:** Are there any Ionic-specific or Capacitor-specific plugins? Once again -- like, you can point me at a GUI or at a modern IDE all day long, but my life is in the terminal and in Vim. I've tried VS Code; it's supposed to be super-cool. I pulled in the Vim bindings or whatever, and I have to get out of my terminal. Like, what is this...?

**Mike Hartington:** \[laughs\] No, I fully agree. Actually, I think I can say, because it's open source - we basically are planning to create a Capacitor build command inside of the Capacitor CLI, so that way we'll just use the Android SDK from the command line, and then Xcode builds form the command line. So in theory, there should be a Cap Build iOS, or a Capacitor Build Android Vim plugin coming soon.

**Kevin Ball:** Okay, now you're talking my language, because once it's in a CLI, I can script it, and once it's plugged into my editor, I can access it from anywhere.

**Mike Hartington:** Trust me, it was tough having to go from like "Alright, well I can run my build", I've run Capacitor commands, and I was like "I have to reach for my mouse... Ugh. My hands are hurting already, just thinking about it." Now that it's all CLI-based, creating a plugin should be not problem.

\[00:47:47.11\] Other plugins I've created - I've built a theme based on this thing called Oceanic Next. So Dan Abramov had this really cool, slightly blue theme that he would always use for his talks, and I was like "What theme is that? What theme is that?" And then I found it, and I was like "Cool. It's for Sublime." I don't use Sublime, so I made a Vim color scheme for it.

More recently I've made a code formatting plugin. There is one right now called Neoformat, but it's all written in Vimscript, and I want to try this new language called Lua, so I wrote a code formatter for Neovim, written in Lua, that just generates and automatically will format your code, basically all async.

**Nick Nisi:** Is that specific to a language, or is it language-agnostic? How does it determine how to format?

**Mike Hartington:** So you have to pass in the configuration for it. There is a bagillion different formats that you could use, so I figured "Just let the users figure that out." I have mine wired up to use Prettier for most things, but I have a setup for Rust format, I have a setup for Lua format, for Clang format if that's your thing... If the tool supports passing in code via standard in, you should be able to do it.

I have a branch where I'm working on passing it to like a real file, but standard in is so much easier to do, and I just print it back out to the file.

**Nick Nisi:** That's awesome. So it's really just facilitating it to another tool that's probably walking the AST and doing things with it, and then passing it back. Is that the gist of it?

**Mike Hartington:** Yeah, it's using the Vim mantra - just pass it off to another tool that knows how to use something, and then print that to my buffer.

**Nick Nisi:** I love it. That's very cool. This is like the classic scratch your own itch and have fun doing in the open type scenario.

**Mike Hartington:** I want to learn Lua. It seemed like an interesting language. Neovim added it as a feature; it seemed like such a weird choice of a language, so I was like "Well, let's actually write some Lua." And now I'm like "I can see why it's pretty cool." Because I have access to random C libraries now, and I'm like "I don't know why I would wanna use this, but cool. I can do that."

**Nick Nisi:** \[laughs\]

**Kevin Ball:** Alright. I feel like we've pretty much exhausted the gamut of... \[laughs\]

**Mike Hartington:** That's all we've got.

**Nick Nisi:** That is really cool. I didn't know that you watched my talk, and got something out of that... So that's really cool to hear.

**Kevin Ball:** Is that when the hoy-hoy started?! Or did you not know that that was a Nick thing, too?

**Mike Hartington:** I had no idea that that was a Nick thing. I could have sworn I told you at KCDC a few years ago, but it was also like a bagillion degrees in Kansas City around that time, so I can't tell if heat was just making me like "Yeah, you told them about that, didn't you? Or is that just the heat playing tricks on your memory?"

**Nick Nisi:** You might have and I may have just forgotten... But still, it's really cool. That video - I'll link to it in the show notes, but... Almost nothing about what I show in that video is true in my setup today. It's completely different.

**Kevin Ball:** You should do a new video, Nick...

**Nick Nisi:** I'm planning on it... But the funny thing is -- that one has gotten over half a million views on YouTube, and it's something that I literally put together.

**Mike Hartington:** Have you turned ads on for that?

**Nick Nisi:** I did, yeah. After 200k views I turned on ads.

**Mike Hartington:** Monetize that stuff!

**Nick Nisi:** Yeah.

**Kevin Ball:** So that's 300k more views on YouTube. That's what - 15 cents?

**Nick Nisi:** It's actually gotten over 800 at this point. So...

**Kevin Ball:** Wow...

**Mike Hartington:** 800 cents? That's a lot of cents.

**Nick Nisi:** 8,000 cents. \[laughs\] But yeah, it's cool. I put that together in an hour before the talk, and gave it, and I have to somehow recreate that magic to recapture the 2020 version.

**Kevin Ball:** It will never happen. Your next video will get 300 views.

**Mike Hartington:** What you need to do is go on to Twitch, which is what all the cool kids do these days. Go on to Twitch and on the fly just recreate that talk. It's like "Alright, we're gonna go over some Vim. Hi, everyone..."

**Nick Nisi:** \[laughs\] That terrifies me. All those young kids, I don't know; they'll laugh at me. \[laughs\]

**Mike Hartington:** I don't understand what these Twitch people do this days. What's a Twitch bombing...?

**Nick Nisi:** Yeah... Thank you so much, Mike, for joining us. Of course, we'll link to you in the show notes. Is there anything else that you wanna provide, like ways to reach out to you or to contact you?

**Mike Hartington:** Yeah, probably the best place to get in touch is on Twitter. Like many people, I'm just on Twitter, and I have that phone glued to my eyes all the time, so... Tweet at me, @mhartington. I'm pretty responsive.

**Nick Nisi:** Cool. Thanks so much for being here, for making it a party, and we will see you all next week.
