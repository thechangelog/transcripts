**Jerod Santo:** Today is one of those days,

My functions just feel far away.

I can't quite sort my arrays.

It's not a case of the Mondays,

As much as it's a case of the...

What day is it?

I might know what's causing this haze,

I have that post-Independence Day malaise.

\[laughter\]

This poem brought to you by my utter lack of energy of what would have been a bad rap, but July 5th and all. What's up, guys? Happy post-Independence Day.

**Kevin Ball:** Yo!

**Jerod Santo:** I'm joined today by Kevin Ball, a.k.a. KBall, and Nick Nisi. How was your guys' 4th of July? Mine was rained out.

**Nick Nisi:** I really enjoyed the rain, because my dog was able to settle down after everybody got rained out.

**Kevin Ball:** We had no rain over here, it was lovely. We had two different potlucks we went to. one for the morning, with parade and sack races (three-legged races) and all that, and then in the evening we biked over to fireworks... All the whole shebang.

**Jerod Santo:** Sounds perfect.

**Kevin Ball:** Yeah, it was good fun.

**Jerod Santo:** Very cool, very cool. Well, we're a bit under the weather, because we were off yesterday doing various things, whether it was KBall having fun, or us getting rained on, or Nick enjoying the rain because his dog could relax... That's the problem with the 4th July - the dogs, the animals; they suffer. At least some of them.

**Kevin Ball:** Truth.

**Nick Nisi:** That's not to say I didn't light up fireworks. I totally did.

**Jerod Santo:** Yeah. Well, we were lighting them off from inside the garage and throwing them out into the storm, which was kind of fun.

**Nick Nisi:** Nice.

**Jerod Santo:** You've gotta do something... But we're not here to talk about fireworks, we're here to talk about JavaScript and the web. Welcome back, everybody. This episode is episode \#33, and we have three awesome segments for you today. Even though we're a little bit low on the energy, we're definitely gonna bring the energy as these things definitely excite us. So the first thing we're gonna talk about is an awesome feature of ES6, which has been around for a while. In fact, Brendan Eich was talking about it all the way back in 2010. This feature, proxies, allows all sorts of interesting things, and was requested by a listener, WeedShaker8, who hangs out in our Slack... What's up, WeedShaker? Thanks for requesting this to be talked about. He even was messaging me and said he just went down the rabbit hole of this overlooked feature, ES6 Proxy.

\[00:04:09.04\] It's very interesting what Brendan Eich was saying about it back in 2010. We have a talk in the show notes called Proxies Are Awesome. It's a long talk, by Brendan, about proxies. That was back when they were very first introducing it as a feature, and it was just kind of existent inside of Firefox, I believe, at the time... It's kind of a fun time capsule to go watch that. I watched the first 15 minutes or so, and he's talking about yayQuery, and he's talking about John Resig... The conversation at the time is very interesting to look back on.

But nonetheless, here we are in 2018, and this feature is very prominent and available in all browsers, except for IE. All Edges, I believe, have these features. Of course, it's not just one feature, there's a bunch of things involved... But older IEs never had it, and there's no polyfill, as far as I can tell... So it was kind of unavailable, unless you were in certain environments. Here it is today, and we have proxies.

Let's do an "explain it like I'm five." Nick or Kevin, who feels the most qualified to describe what proxies are in JavaScript, and how they work?

**Nick Nisi:** A proxy object - it's a constructor in all of the browsers except IE, like Jerod was saying, and it allows you to wrap any object or function or class and redefine behaviors.

You can say "new proxy", pass in the object or function or whatever that you want to proxy, and then you pass in an object literal as the second argument, and that object literal has a number of traps set on it. Those traps are just functions that you provide, and they're named things like "get" or "get set call", "get prototype of", "has" \[00:05:52.01\] - all of these different traps, and you define the behavior that happens when those behaviors get called on whatever object you're proxying.

If you're proxying an object and you set a get trap, any time that you try and actually get any property off of that object, it's actually gonna call your proxy function first, and that proxy function can decide what it wants to do based on that. That allows for a lot of power when you want to do something like dynamically create properties on the fly, or log things, log who's accessing what, or throw errors if you don't have access to view a particular property... And you can also do that for class instantiation, or method calls.

You can really just get down in the middle and change the behavior of the object that you're proxying. In that way, it's allowing us to do a little bit more metaprogramming in JavaScript.

**Jerod Santo:** Very good. KBall, anything to add to that?

**Kevin Ball:** Yeah, I think that's pretty much the idea. It's letting you create an interceptor layer in between the final level object and your code, and I think there's a lot of really interesting use cases for this, particularly when you start looking at frameworks and libraries. I'm not sure there's that many situations in which your application code needs to be doing proxying, but if you're putting in -- this lets you essentially create middleware for JavaScript objects. It's phenomenally powerful.

**Jerod Santo:** Yeah, I think the application-level concern that I would say is definitely there, all of those other ways of doing this as well, like with data validations, where you can intercept setters on specific properties and then validate whatever data is in that property, whether it's not something that you wanna allow a user to set, and then either arrays, or add some sort of error class, or something, inside the proxy.

So that's one application \[unintelligible 00:07:53.10\] I agree with you that most of the use of these things tends to be in lower-level libraries, from an application developer's perspective.

**Nick Nisi:** \[00:08:05.04\] Yeah, and this all came in ES2015, along with other metaprogramming features, including the Reflect API. So we've had a little bit of reflection in JavaScript in the past, with things like Object.getPrototypeOf(), or... I'm trying to think of another one. hasOwnProperty()... Things like that, where you can inspect at runtime an object and determine its structure, and then make choices in your code based on that.

There's also a Reflect global keyword in JavaScript now that has several different traps on it that you can use. So you can kind of use that in conjunction with proxies to ensure that whatever you're trying to do, you can call Reflect and have it actually do what the original behavior was, instead of you having to redefine that each time. That's because it's important to make sure that you are following whatever rules are associated with whatever trap that you're actually working with.

That's because they all have specific rules about what should happen or what should be returned from it, and if you don't follow those, then a type error is thrown. But by just taking and using Reflect, like if you were just gonna add like a logging layer, you can do the logging and then call the reflect variant of whatever you're doing and return that, and it will make sure that it returns undefined, or it returns the new length, or whatever that you need to work with.

**Jerod Santo:** Let's talk a little bit about semantics here. The word "trap" - I was reading on the Mozilla Developer Network... The reason why they use that word - it's like harkening back to OS-level traps, which seems to me is a far removed reason to name a thing. Just the idea of like you have a handler object, and then you have traps - are these things unnecessarily opaque to developers?

A word like a hook, or a callback... To me, a hook makes more sense than trap. Does that trip you guys up, or am I--

**Nick Nisi:** No, for sure... And those rules that I was talking about, where each trap has its own specified rules - those are actually called invariants, which I think also adds to confusion, because it's not a common word that you use in normal JavaScript programming.

**Kevin Ball:** One of the things that this raises for me is the more we add metaprogramming -- I come from Ruby, which is like the king of the metaprogramming languages, and one of the things that I saw there is folks would... You'd be beginning and you'd be like "Oh, what's this metaprogramming? That's kind of cool." Then you'd get into the stage where it's like "Metaprogram all the things!" and that usually caused problems, because it's really easy to get caught in traps of your own complexity when you start metaprogramming. There's lots of edge cases, and you're getting leaky abstractions and all sorts of disaster.

So folks, as they climbed through from that intermediate level to become more expert, would go back to "No, no, no... Actually, let's be really explicit about what we're doing and only metaprogram a few specific cases", and I wonder if the reason for using this somewhat opaque language is to actually try to say "You know what, I know you're used to doing with these things, but you need to think about them differently. You need to be a little bit more careful than you would setting a normal handler function, or something along those lines."

**Jerod Santo:** That's an interesting idea... Kind of like "This is serious business, so slow down and check yourself before you wreck yourself", kind of thing.

**Kevin Ball:** Yeah, because it's so easy to wreck yourself with metaprogramming.

**Jerod Santo:** It really is. What's the saying... Like, enough string to hang yourself with, or something like that...

**Kevin Ball:** Yeah, it gives you all the string that you need. And it's a special string, so it keeps expanding in ways you don't expect.

**Jerod Santo:** That's just the natural lifecycle of something new and something powerful, right? It's like "Okay, here's this new powerful feature." Metaprogramming is amazing in what it allows us to do. And then it's sort of the typical hype cycle, where it's like "Okay, this is amazing, this is life-changing." These are things that we, developers, say all the time - "This might have changed my life", and whether we mean that tongue-in-cheek or like actually "This thing changed clearly the way I program", we say it a lot.

\[00:12:18.05\] And then it's kind of like you said, Kevin - it's just massive adoption everywhere. I have this brand new, shiny, big hammer, and just everything is a nail right now. So you do all that, and then you live in that -- you've made your bed, and now you have to lie in it for a while, and you start to realize "Oh, this is an uncomfortable bed. This is a restrictive bed" or "This is a dangerous bed", and through time you learn moderation, where to apply these things and where it's too far... But you can't really get to the end. You can't get to that final understanding as an individual (or even as a community) until we kind of push those limits and see where they're at. It's like a cycle of progress, but it's not like we can skip the cycle, because how do we know where the edges are if we don't push them?

**Nick Nisi:** I think that one nice thing about proxies is they're relatively safe to use if you want to use them. What I mean is you could proxy something like the global array object, but you're not actually changing that array object at all, or you're not actually changing the array class at all, because you have to use the proxy that is returned from that new proxy call. So in that case, if you were doing that, it would return a new constructor for arrays that would pass through to the original array constructor... But you're not changing arrays globally throughout your application or throughout your entire page; it's only when you use that proxy... So you can kind of isolate that and use it just in specific areas without affecting the entire page, unless you are returning the proxy object as your default export or the main export that you use.

**Jerod Santo:** So we discussed a little bit some of the use cases... We mentioned limiting property access, specifically on gets and sets; Nick, you talked about proxying validations, I referenced profilings (another good one), you talked about the Reflection APIs as well... But the big one is I think, KBall, what you were alluding to early, which is it allows you to do data binding and to provide really tools for other people to build upon.

So you were talking about a little bit of that with regard to Vue... KBall, do you wanna open up that conversation? I know you've been into Vue for a while now. Talk about maybe its use of proxies, or how frameworks are viewing these things.

**Kevin Ball:** Yeah, so Vue has this data reactivity model that is kind of core to how Vue is doing its interactivity. Essentially, rather than something like the way that React and Redux thinks about things, where you have kind of an immutable state object that you're then replacing with other things, Vue has a mutable object that it then tracks all the different dependencies... So what are the functions that depend on this, what we're rendering as another type of function, are there computed properties that depend on this? And then any time that changes, it kind of traces through that dependency graph and updates all the things that you need to update.

That right now, today, is done with a kind of fake proxy system that they've built using getters and setters, because they wanna support all the versions of IE, things like that. It has some odd edge cases, because there's some things that you can't do right with getters and setters, or you can't track... For example, if you have an object and you know the set of keys, you can track changes to those keys, but there's no way right now to intercept inserting a new key. So if I put in a new key, my reactivity model breaks.

\[00:15:58.02\] And they have a wrapper that you can use to put that in with the correct tracking in place if you know that "Okay, I've got this limitation, so instead of just directly writing to my object that I expect to be reactive, I need to use vue.set to write to it, so that it gets all the right reactivity." But with proxies, those limitations would go away completely.

There's a branch under development, there's all sorts of stuff essentially to shift the reactivity model to be completely proxy-based, and then all of your holes go away. You've got simpler code, because proxies are design for this - getters and setters are only sort of appropriate to this - and you have relatively seamless reactivity.

Coming back to our conversation about string to hang yourself, I'm actually torn about whether that reactivity model is the right approach. React's model adds some developer level complexity to wrap your head around, but as a result, you end up with a much purer, easier to debug, fewer edge cases in your development, whereas Vue's model feels a lot simpler to learn, but as you get into more advanced edge cases, it's actually harder to reason about.

There's room for both, and I've actually been advocating Vue a lot to folks, because I find it is much easier to wrap their heads around, and the Vue community -- it's a lot easier to get into that if you're not a hardcore developer, whereas there's a pretty opinionated section of the React community... And I don't think this comes from the core team; folks like Dan Abramov are really good about embracing newcomers and not being exclusionary and things like that, but there's a hardcore segment of the React community that is very much exclusionary to folks coming from less hardcore backgrounds... And Vue doesn't have that at all; they're embracing traditional templating, they're embracing CSS styling and various other things, and Vue code feels a lot more like traditional web code than React code does.

**Jerod Santo:** Right. It sounds like it's a case of "What do you optimize for?" and the two projects are optimizing for different things. I mean, they both want a lot of the similar things, but it's just kind of "What angle do you look at the world?" and Vue seems like it's onbarding-focused and easier to dive into, but then as you've found - which I'm taking your word for, because I haven't found this - is that as you get into the nittier grittier, the edge cases, these fringe places, the more you use it, the deeper you dive. It has more kind of kinks in the armor on that side of the fence than React does.

**Kevin Ball:** I mean, yes and no. The nice thing about it is that it actually -- it has all the capacities that you need to do those more complex things, but React sort of forces you there upfront. So if you're doing things the React way, you're not gonna have to reshift your thinking as you start to get into these more complex cases, because you're already being very state-driven, and dealing with immutability and being very careful about your data model...

**Jerod Santo:** I see.

**Kevin Ball:** ...and you don't have to do that in Vue land, because this reactivity model, which is beautiful and simple and easy to use, gives you a lot of string, once again... \[laughter\] So you can hang yourself pretty good with that. And especially right now, with the holes and their proxy-like implementation, it's really easy to get confused with "Why isn't this being reactive in the way I expect it to?"

**Jerod Santo:** So this proxy-based branch of Vue - is it a branch because of IE? Is that the reason why it's not main line already? Are they waiting for a certain browser share? Is there always gonna be a fork? What's the situation...? Because basically, IE is THE browser that does not have these features, and Edge does. Is that a simple reason, or is there actually divisions on the ways that they wanna go?

**Kevin Ball:** \[00:20:18.00\] I don't know the answer. My understanding of the situation is it's around IE. Another thing though, looking at the \[unintelligible 00:20:31.12\] something that we often neglect talking about things over in the U.S. is some of the international browsers. It looks like actually UC Browser, which is one of the pretty common ones overseas, does support proxies. The Baidu browser does not.

The reason I bring that up is Vue has a very large audience in China, and so their browser market is probably pretty different than ours, and I don't know what the distribution is there, but I think it's going to influence it. Something that's gonna come up - we talked about reusable components - to the n-th degree when you start talking about frameworks is you have to be conscious of all those edge cases and users.

For example, when I was working on ZURB Foundation a lot, we turned down a lot of features or put them as sort of extensions to the framework because we had a large audience, a large set of users who were doing government work, and a lot of government work still has to support not only IE11, but often IE10, and IE9. So when you're doing frameworks and tooling, you have to be a little bit more -- well, I shouldn't say "have to be." If you want to be kind to your users and you want to have a large audience, often you need to make conservative technology support decisions.

**Jerod Santo:** Absolutely. Worth mentioning - \[unintelligible 00:22:05.19\] in the chat says that IE is the reason why Ember had this.get() at the beginning \[unintelligible 00:22:15.10\] and Ember back in the day definitely had this.get(). And the thing about Ember is, because it's very convention-based - okay, these are kind of fake proxies; they have their own implemented idea of a proxy, so they can provide those hooks... It was basically based on convention - you had to use it this way in order for everything to work correctly, and that's kind of what you're mentioning with Vue... It's like, there's holes if you use things slightly differently or slightly incorrectly, which could be plugged by the proxy feature if it was cut over to it.

**Kevin Ball:** Exactly. And Vue came along enough later that most of the time you don't have to use this. I remember looking at Ember back in the day - you had to use this.get(), this.set() for everything, and it seemed like "Wow, this is a lot of overhead. We're not just writing JavaScript, we're using this Ember magic", but what that allowed them to do was create essentially data reactivity way before Vue came along. And now Vue does it using getters and setters, but it has those holes... And since the default, the way that it's typically taught is you're just doing direct definitions, you're just accessing the data, it then gets confusing and there's a lot of holes when you're like "Oh, but in this case that doesn't actually work, and in that case this doesn't actually work."

**Jerod Santo:** Right.

**Nick Nisi:** I'll just say that another way that we've been kind of getting around that - not perfectly; like, we can't do everything that proxies can do, but another polyfillable way to get around this has been decorators, specifically in TypeScript, but it's also a proposal for TC39... But that is another way that you can kind of get in the middle of properties being set, or methods.

**Jerod Santo:** You're always trying to squeeze the TypeScript in there, aren't you, Nick?

**Kevin Ball:** \[00:24:06.24\] I have a question that -- so I haven't dug deeply into proxies... Are all the traps synchronous, or are there ways to deal with asynchronicity?

**Nick Nisi:** That's a good question. I think they're all synchronous, but --

**Jerod Santo:** Can you have a trap that's asynchronous? It's not a trap then.

**Kevin Ball:** Yeah, well... But it could trigger something asynchronous... I don't know.

**Jerod Santo:** Right. I mean, I say that a bit tongue-in-cheek, because the idea is that it stops, but... It looks like WeedShaker in the chat is saying they are synchronous, so... Can you trigger an asynchronous thing from a synchronous thing? You can have asynchronous that returns a promise; we're getting real-time feedback in the chat, so here's your answers. So it sounds like there are workarounds with promises, but they're synchronous otherwise.

**Kevin Ball:** Interesting. I wonder if there's timing constraints too, or how fast do these things have to be before they start causing problems?

**Jerod Santo:** Well, you've got enough rope; you can just go out there and hang it up and find out. \[laughter\]

**Break:** \[00:25:11.01\]

**Jerod Santo:** Alright, we're back, and we're gonna talk about reusable components... Something that we would all love to have, and that seems difficult first of all to write reusable components, but then actually share them with others, whether it's internal to our own teams, or externally to the world. Of course, KBall, you have a lot of experience with sharing things in terms of front-end with the world, with all the work on ZURB Foundation.

But today we're gonna focus on a pretty new project called Bit. You can find it at bitsrc.io (link in the notes) where they are saying "Imagine all of your components are organized on the cloud, made discoverable for your team, and synced in all your projects. That's Bit." Now, I should say that this is a commercial enterprise; Bit itself is open source, and you can self-host... So they're kind of very much following kind of a GitHub model with Bit, where the Bit tooling is kind of like Git, and bitsrc.io is kind of like GitHub, where they will host your things and you could have repos and stuff for pay. So that's there... But the idea, I think, is somewhat universal, and all the bits are open source.

\[00:27:59.20\] Worth talking about... Interesting demo where they show people basically having some React components inside of their project, and them kind of doing a bit init command line tool, very similar to Git, kind of pushing those out to this globally available place, and then somebody else effectively cloning down components and using them on the other side.

Now, there's some cool trickery in there. When you have your components on the website, where you can actually see them live rendering, you can see all of their properties, you can run UI tests against them, and then documentation as well... Very much kind of thinking about it like source code, but moving up a level, and saying "Let's think about components as kind of the foundational unit of abstraction." And of course, you can still get to the source code underneath, as you're gonna have to...

But an interesting project, and I think it brings up a lot of ideas... KBall, I know you have opinions...

**Kevin Ball:** I have opinions...

**Jerod Santo:** Let's just start with where we're at today, aside from this particular project... Component sharing - how are people sharing components today, that you guys know about, or how are you guys sharing components in your work today?

**Kevin Ball:** It's a great question, and it's a tricky one, and something that as you might have guessed, I've thought about a lot with the foundation background... One of the things that makes shared components really tricky is that they have a tendency to be locked into implementation specifics. For example, I might have a set of React components, and that works great on my application, but if some of those are brand components and I want a piece of that to show up on my marketing site, chances are my marketing site is mostly not React. My marketing site is probably Wordpress or some equivalent CMS; maybe it's running a very old version of jQuery... Yet I want those components that are essential to my brand to be shared across these different environments and to feel the same.

What will often happen now is you'll have a component library of some sort - the Foundation is an example, though the Foundation is really kind of focused at a low level, that don't add a lot of design language on top. Another equivalent might be Material, or Bootstrap or what have you, where you've got a design language, you have an implementation, but your implementation is actually -- you have separate implementations per JavaScript environment.

Let's use Bootstrap as an example, because it's probably the one that the most people have heard. Bootstrap is both a toolkit and a design language, and there is a React Bootstrap component set where they reimplement all of the JavaScript-enabled components in React. There is a Vue version, there's an Angular version, there's probably a Dojo version, an Ember version, and all these things... And they are mostly the same, but what will happen is if you've got these different environments, you end up with this almost funhouse mirror effect where you're almost replicating your components from place to place to place, but they behave just slightly differently in each one. So it's a really tricky problem.

I don't have a good solution, by the way. I'm just sort of laying out the problem here. People don't perceive somebody's brand as separated by "Okay, this is my web app, this is my mobile app, and this is my marketing site, and this is whatever..." To a consumer, that's all just that company and their product, and if things look mostly the same but behave slightly differently across all of those, it can really be confusing for folks. So there's a serious problem here, but I don't know of anybody who's solving it well.

**Jerod Santo:** Nick, do you have similar findings with sharing components? I know you work on lots of large-scale applications that may already have Bootstraps available, but is there sharing across repos, or across teams anywhere in your work that you guys have dealt with these issues?

**Nick Nisi:** \[00:32:02.05\] A little bit, yeah. The main way that we're tackling this in Dojo is you can export individual components as web components, and then just bring those in anywhere and use them... But that doesn't necessarily get around all of the issues that KBall brought up, I don't think... But it does get us pretty close.

The most recent project I worked on, we did just that. We created three individual components and we had examples of them working together in a Dojo app, but then we also exported them as web components and had an example of them all running together. So they were all completely isolated and only cared about the properties that you passed to it going in and out, and that was it.

Other ones that I've seen really are like -- I'm forgetting the name of that Ionic project... Stencil. That kind of does the same thing, where you're just building individual web components and doing that... So I guess taking the web components approach is the way that I've been looking at it.

**Kevin Ball:** I like that, because it gives you a sort of universal compile-to framework, and once again, that kind of interface or API that you can then interact with, so that you can take this component and share it... Because sharing within a JavaScript environment -- like, if we standardized our company and we're doing everything in React and we're using Gatsby for our marketing site, there's not actually a problem. Plenty of people are doing that well, where they'll share components within the framework. It's when you start bridging these gaps in the organization between "Okay, this team is doing React, but the marketing team sure as heck isn't" that you run into problems.

If we can compile to web components, plug them in everywhere and still have a way to interact with them in a sort of way that works across these different frameworks, that's a really good solution.

**Jerod Santo:** So let's turn our focus back to this particular project then, instead of the generic projects at large. I mean, it works with Angular, React, Vue, Node, and this idea of basically having kind of a separate but integrated tracking of components... You know, separate I mean from the rest of your-- so they're obviously still in your source code, but you're tagging them and you're exporting and importing and pushing and pulling components separately, explicitly --

**Kevin Ball:** ...but from within your own projects, right?

**Jerod Santo:** Right. Exactly. They're in your projects, but then they're also out here; and then they're in some other project, but there's also Git involved... Is this something that's like resonating, or is it confusing to you? I know the demo video is very nice, and we encourage everybody to go watch it, because I think these are ideas worth sharing... But it's very basic, and I would say somewhat idealistic in the way that they present the idea of "it works very cleanly." Is this something that you think you'd actually pick up and try and use?

**Kevin Ball:** So just for context, let's describe the video a little more.

**Jerod Santo:** Sure.

**Kevin Ball:** So the idea they have is, okay, I have a component in my app; I'm going to tag it, push it, and suddenly it's a shared component, with that version. I can pull it down in a different app, edit it there, tag it, push it, and I have a new version. So it's saying, "Okay, instead of having to separate this out into an individual package where I'm gonna edit in that location, I'm going to be editing it in place, in any one of a number of places, and pushing and pulling from there."

\[00:35:29.07\] To me, this raises some huge red flags. I've been trying to wrap my head around what exactly is it -- or how would I explain what I'm concerned with... I think that the biggest thing here is conflating the technical problem of "I'm going to separate this thing out into a separate repo with the decision-making programming problem of how do I make this something that is going to work well across multiple repos?" I could easily see if I have two people working on this, I make a change here on this site, I push it up, somebody else pulls it down, and they say "Oh, that's not the way I want it to behave; I'm gonna make a different change, push it up", and instead of ending up with a well-defined, shareable component with a clean interface, I end up with something that has 20 different application-specific pieces, that happen to have been pushed up from all these different applications.

The decision-making challenge of "How do I create a generalizable, reusable component that has a clean interface and supports all of my use cases?" is hard.

**Jerod Santo:** That's the hard part, yeah.

**Kevin Ball:** Exactly, that's the hard part. It's not pulling it out into a repo. Yes, it might be nice to automate that pull-out into a repo, but there's a lot of thinking and decision-making that needs to go on there, and as you version and change things, you need to have that bigger perspective of "What are all the places this is going?" not just "How is this functioning in my app right now?"

**Jerod Santo:** Yeah. When I start to get nervous about this idea, like I'm thinking about it in the practical sense of using this tool alongside Git, or a version control, I start to think -- the thing that makes me nervous is sharing components before they're ready. Massive iteration on these components from two different developers who are sharing a UI widget across two projects with different needs sounds like management hell. It sounds like merge conflict... You've got your Git merge conflict, and I'm sure there's a Bit merge conflict of some kind where I've made changes that are incompatible with the changes that you've made, and we're both pushing them up to the component cloud. To me, that makes me nervous... But then I say, well, that would be like premature sharing of a component. It has to reach a certain level of maturation or flexibility.

Like you said, the hard parts have to kind of be done before sharing the component is even useful... Otherwise you're just having two people (or n people) changing something that's still massively in flux). That's gonna ruin everybody's day. So what you're saying is resonating with me, because I'm thinking a lot of this is like design and systems thinking, more so than the actual mechanics of "How do I share this code?"

**Kevin Ball:** Absolutely. I was thinking about this for a blog post recently that I did on Vuejsdevelopers.com - the process that people tend to go through is they write a component for themselves. "I have a problem. I'm gonna solve it, I'm gonna build a component." It's very specific, and then they're in a new place in their codebase (in the same codebase even) and they say "Oh, I kind of wanna solve that same problem. Okay, let me go back to that component, make it a little more reusable, and use it there."

And then "Okay, I wanna use it in a different project. I wanna move it into an independent package. Hey, I need to make it even more reusable and think more carefully." There's an evolution that goes on there that is not as simple as "Hey, this is a component. I'm gonna push it to the cloud."

**Jerod Santo:** So let's shift the conversation a little bit here, because there's a good question coming into the chat room by Alex Ray. KBall, earlier you said if you had standardized on React, for instance... Like, the problem -- you're saying unstandardized marketing sites, versus application, versus this and that... You have all these disparate technologies. But if you had standardized across the org on React, for instance, then how do you share components?

They say "I think the smaller shops face is they build an app with a bunch of components, and then they want to use that component in their marketing site or admin UI etc." If that's all you wanna do, do you know of a good way to extract that and to share those things? Or is that also an unsolved problem?

**Kevin Ball:** \[00:39:51.11\] Bringing it out into individual npm packages or a framework libray - it could be published to npm, it could be just a repository... Separating out those components into something that is installable is relatively well solved. I think there's plenty of resources... I mean, there's articles on "How do I pull this thing out into its own package?"

Unless I'm missing something, I don't think the technical challenge of how do I take a component and turn it into a package that I can install into other applications - that's a pretty solved problem.

**Nick Nisi:** I agree. That's solved for most simple use cases, but the problem comes up when you're working -- like, if I'm working with my project that's using this generic set of components in an npm package, I bring that in as a dependency, but then I discover a bug or I want to add a feature to it, then there's actually a lot of pain right now - at least for me; I haven't figured out how to very well do it - in linking those projects together locally for development, so I can make the changes I need in the package repo, and then test them in the app that's using it.

That further gets complicated when you have a transpilation step, whether that's a Babel, or TypeScript, because a lot of the tooling -- npm link doesn't link properly to the build directory for your TypeScript code. So it's still pretty tough to do that, and if this could help solve that, that would be a big step forward, I think, but I'm not clear that it does.

**Kevin Ball:** That's a good point. Interesting. Yeah, I've primarily used npm link, though I think a lot of times what I was doing there -- I was not including the transpiled version, I would actually set up my projects to pull in and do the compilation on the project side.

**Nick Nisi:** What I'm doing right now is not very easy. I'm running a build step that creates a tarball on one project, and then I'm pointing to that tarball in my other project and using it... So it's not quite straightforward right now, but I'm working on trying to fix that and make it simpler.

**Kevin Ball:** Chris in the chat brings up that npm link does link to the build directory. As I understand it, npm basically just puts a symbolic link to wherever your directory is... So maybe the problem is how you're watching in the library side, where the transpilation happens...

**Nick Nisi:** Yeah, that could be it...

**Kevin Ball:** ...because a lot of libraries are set up such that their standard build does not build into the dist directory (or something like that), they only do that on release... So if you're set up that way, you would probably need essentially a under-development build version that is gonna auto-update your build directory...

**Nick Nisi:** Yeah.

**Kevin Ball:** ...which for an open source library is pretty non-standard, because you don't often want to be updating dist for all your changes. You wanna do that once, on release.

Though, thinking back, what we did in Foundation is we had the dist directory that was updated once per release, but then we also had a build directory that we could use for development... So then on the client, as I was doing it, you could basically instead of looking straight at dist, you look at the build for your library, so then you're tapping into that auto-change, auto-update.

**Jerod Santo:** Well, let's end this part of the conversation with a bit of a call to action for the listeners... If you are out there and have a whiz-bang solution for these things - or just something that you're relatively happy with - hit us up and let us know... We would love to hear about what you're doing to manage the sharing of these components across your projects. @jspartyfm on Twitter. We also have a ping repo where you can holler at us, tell us whatever you like, tell us you love the show, tell us you hate the show, tell us you'd like to hear about a specific topic or have a specific guest on... That's at github.com/thechangelog/ping. You can open up an issue there and just let us know that you are interested in discussing JSParty. That would be awesome.

**Break:** \[00:44:12.26\]

**Jerod Santo:** Alright guys, let's switch gear a little bit and let's talk to ourselves... Let's talk to our younger selves and do a little segment where we reflect back and ask ourselves the question "If I had to start all over again in technology or in software development, but I had the advantage of being able to give myself advice (my younger self) to make it easier this time around...", what would you say to yourself and why? Let's start with you, Nick.

**Nick Nisi:** I'm picturing myself like an older Marty McFly going back in time and giving me this book of sports bets, but they're tech bets...

**Jerod Santo:** That's right... Sports Almanac...

**Nick Nisi:** Tech bets... \[laughter\]

**Jerod Santo:** Yeah, "Buy Apple..."

**Nick Nisi:** It'd be "MySpace is gonna be around forever..." \[laughs\] Yeah, I think that I would say definitely get focused on JavaScript earlier. I didn't touch JavaScript until I was completely out of college and a year into my first job. I would say to get involved in my local community of developers earlier, because I feel like that really helped out, but I could have been there earlier, getting to know people and making connections, that whole networking thing. That would be a really good thing to have started earlier.

I'd also say learn version control, like a lot sooner, and actually use it in college.

**Jerod Santo:** So you didn't do any version control at all?

**Nick Nisi:** I had one project that they gave extra credit if you had a Subversion repo... So once we got everything done, we wrote a script that randomly put commits into a Subversion repo, so we'd get that... The lazy way.

**Jerod Santo:** Gotcha. I cut my version control teeth on Git, and then started writing some Wordpress plugins, so I had to go back to SVN, because Wordpress.org - their plugin system was built around Subversion... And I already had the distributed mental model in my head, and I had to go back and use SVN just to publish some plugins on Wordpress.org. And I was so lots... I felt like the biggest idiot, because I just couldn't figure out how to use Subversion after using Git, which is kind of -- I know a lot of people had to go the other way... They were deep into Subversion, were happy with it and everything, and then when Git came around, it was like a different mental model. I had the advantage of learning the newer mental model first.

**Kevin Ball:** I started with CVS, and then...

**Jerod Santo:** Oh, old-school...

**Kevin Ball:** Old-school. And then we moved to Mercurial, which is actually in many ways similar to Git. Then some Subversion, and then Git 1.

**Jerod Santo:** So you've done all the things. So if you had to go way, way, WAY back, to the CVS days, and talk to young Kevin, what would you say to him?

**Kevin Ball:** Good question. It was interesting listening to Nick talk, because some of those things I did... I got into the community pretty early, I was doing things, and it was really good for me.

I think the thing that I would tell myself that I didn't do, that I should, is start blogging early. Blog about what you learn, document your knowledge as you go, and be freakin' consistent about it. And don't let those sites disappear. I think I've started three or four blogs in the past that have just died and disappeared. I'd do it for a little while, very inconsistent...

\[00:48:09.15\] Number one, when you write about what you learn, you learn it better. Number two - now I'm out starting my business and trying to build an audience, and if I'd been doing that for as long as I've been in the industry, I would be golden right now. Number three - writing is an incredibly valuable skill. Writing is probably -- after the initial piece of learning software development, communication is what in my experience now makes the difference between somebody who gets stuck in sort of line-level developer jobs and somebody who's able to go on and have a bigger impact and continue to advance and be promoted in various other things.

Software is a communication-intensive endeavor, and that includes writing, that includes speaking, that includes being very good at listening... All those different things. So my advice to myself looking back is yeah, keep doing the tech that you're doing, but pay more attention to the communication side of things, because it took me way too long to pick that up.

**Nick Nisi:** That's really good advice.

**Kevin Ball:** Jerod, what would you tell yourself?

**Jerod Santo:** So this is advice I do give to young people getting into software development, and it took me too long to realize it, and I wish I would have known it right away, because I would have probably sprung into things a little faster... And that is that if you're trying to learn and you're trying to get to a level of proficiency in programming, in my opinion the best way to do that, in addition to - I'm not saying "Don't read books or watch videos or go to school", I'm not saying don't do any of those things... But have a real-world thing that you want to exist.

**Kevin Ball:** Amen!

**Jerod Santo:** And then bring it into the world. That's the way that you learn. And you will learn so much. It will be hard, it will feel impossible at times, and it's gonna suck, but that's okay. The point is that it didn't exist, and you want it to exist, and if you can just have your goal be "I'm going to make this one thing exist", then you will learn so much about software development achieving that goal, and you will not have all the false starts of like throw-away demo toy apps that don't mean anything, or they're somebody else's idea and you don't actually care about them. They're just not much to hold onto, and programming is really hard, especially when you don't -- and it's still really hard today for me. When I didn't know how to do it, it was even harder.

So to get over the humps, which are big and treacherous and can stop you in your tracks and completely destroy your will to continue, you kind of have to have something bigger that you're trying to build, and if you have that bigger thing and you can try to make that exist, you'll learn a lot faster and a lot better.

That's what I would tell myself... Eventually, I learned it the slow way, but yeah. Everybody that I've met that's had something like that, whether they were passionate about it from whatever perspective - I know passion gets thrown around a lot; I'm not saying it has to be super-passion, but it has to be something that you actually want to see exist, and then make that your aim. People who do that learn so fast. It's been amazing to see some people do that.

Alright, let's wrap up the show with a few shout-outs. These are projects, people, things that we think deserve a shout-out. Let's start with Nick.

**Nick Nisi:** Cool. I have a couple of things... The first is a Vim plugin called Nvim TypeScript by Mike Hartington. I've just recently switched over to it and I just love it. Really nice completion, I can jump to definitions to see where things are used, and it plugs in with -- well, it plugs in with all of that completion stuff and it just makes TypeScript development in Vim so much easier that I don't have to look at VS Code any time soon.

\[00:52:09.28\] The second thing is CodeSandbox and Ives van Hoorne for that. That's such a great project, and so nice to be able to set up full working project examples in React and Dojo and others; it just makes it so easy to share knowledge, to respond on Stack Overflow or in Gitter channels with working examples, and also to see examples of bugs using that, because it's a working example that all you have to do is click a link to have it set up... So that's just super nice.

And then the third is a project called -- well, you've heard of a project called Prettier, that formats JavaScript syntax and makes that really nice... Well, there's another project called Pettier. It's pretty cool.

**Jerod Santo:** \[unintelligible 00:53:01.07\]

**Nick Nisi:** Well yeah, I guess... \[laughter\] But it's just a Prettier config that randomizes all of the options and then arbitrarily switches between spaces and tabs. So just throw that in your project and have some fun. \[laughter\]

**Kevin Ball:** Oh, dear...

**Jerod Santo:** Alright, KBall, you're up. Shout-outs.

**Kevin Ball:** Alright, first off I wanna do a shout-out to the organizers out there who make events and meetups happen. Nick, you talked about getting involved with the community and I know you organize stuff, so you're on my list here. I used to do a lot more of this before I had kids; I don't have time. But people like Tracy Lee from This Dot Media, Jen Looper (Progress Software) continually organizing groups for learning, for advancing the profession, making things more accessible to folks who don't have more traditional coding backgrounds... All these sorts of things

There's tons and tons of volunteer labor that goes into that, and these are the people that make it work. So if you attend a meetup, go and thank the organizers, because there's a lot of work that goes into making that happen, and without it, our community would be a lot less.

The second shout-out is a functional programming in JavaScript library that I ran into recently called Ramda. It supports currying functions and all sorts of other fun stuff, so if you're into functional programming or you wanna learn about functional programming, they have a lot of interesting articles they've written about it. Definitely go check that out. I haven't actually gotten the opportunity to use it in a project yet, but I'm super excited about it.

My final shout-out is a little bit of a self shout-out, but if you didn't know, I publish a weekly newsletter on front-end stuff, all things web. I publish CSS, JavaScript and just other awesome happenings on the web, articles... I focus a lot on fundamentals, but I also include big happenings and good tutorials for all the major frameworks. That's the Friday Frontend, and you can find it on my website, ZenDev.com.

**Jerod Santo:** \[00:54:57.27\] And I can vouch for Friday Frontend's quality, because I'm a happy reader of Friday Frontend, so thank you very much for putting that together, and definitely, to the listeners, if you like KBall and you like the front-end -- I mean, what's not to love? Go check that out.

Alright, my two shout-outs - the first one goes to Jakob Egger who is a developer I think in Australia, but I'm not sure his exact locale. He's the developer of a Mac application called Postico, which is a Mac GUI for the Postgres database, which is my database of choice.

For a long time Sequel Pro was, in my opinion, the best game in town in terms of very nice GUIs for databases, but it was SQL only, and many of us were waiting and waiting and waiting for alternate databases support, because there really wasn't anything awesome for Postgres.

Postico is awesome. It's not free, it's a paid application, but it's an indie developer, so support that... And it's something that I use all day, every day, so I just really appreciate that Jakob made it.

The second one is Tmuxinator. A long-time screen user myself, I finally made the Tmux cut-over a couple years back, and a lot of that had to do with this Ruby Gem called Tmuxinator. What Tmuxinator does is it allows you to pre-configure and manage specific Tmux sessions so that you can have everything set up for specific projects in a very declarative, kind of a dotfile format... And then instead of typing "tmux", you just type "mux", and then you type the name of the session. You can have your splits all set up, you can have it change different directories, run arbitrary scripts in specific panes, and just really have a very nice starting place for all of your sessions.

If you're like me and have a lot of projects at client work, I'm always hopping between specific things, I can just easily fire up this specific session, have it configured exactly the way I want to for that programming task. So Tmuxinator, which is built by a bunch of people, long-time program, so I'm just giving them a shout-out; it's something that I use and love every day.

Alright, that is our show for this week. Thanks everybody for tuning in on this July 5th. I hope you had fun. Stay tuned next week - join KBall and Ferross as they welcome two guests from the Electron team to talk about Electron... So stay tuned for that.

Thanks for listening, we'll see you next week.
