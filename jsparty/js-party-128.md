**Nick Nisi:** Hello, JS Party! Welcome! This week we have a really exciting topic to talk about, but first I wanna introduce you to my co-panelist, Jerod. Jerod, what's up?

**Jerod Santo:** Hi, Nick. How are you?

**Nick Nisi:** I'm good, I'm good. I'll say hoy-hoy, and I want to welcome our special guest, and that's Matt Gadd. Matt, say hello.

**Matt Gadd:** Yo, how's it going?

**Nick Nisi:** I'm good, how are you?

**Matt Gadd:** Yeah, not bad, not bad.

**Nick Nisi:** Awesome.

**Jerod Santo:** Nick, I noticed you're wearing your Dojo shirt today.

**Nick Nisi:** I am. I'm wearing a vintage Dojo shirt to talk about Dojo.

**Jerod Santo:** I just wanna point that out for the listeners' sake. They can't see your shirt, but I can, and I appreciate it. I bet Matt appreciates it, too.

**Matt Gadd:** Yeah, I don't have one of them, so I'm a bit annoyed.

**Nick Nisi:** I need to get a new, modern Dojo shirt, with the awesome dragon on it...

**Matt Gadd:** Do you not have one with the dragon on?

**Nick Nisi:** I do. It doesn't fit me anymore, in the good way...

**Matt Gadd:** Oh, the other way...

**Nick Nisi:** Yeah. \[laughter\]

**Matt Gadd:** I've just got a wardrobe full of those T-shirts that don't fit me, for the bad reasons... \[laughter\]

**Nick Nisi:** Awesome. Well, we are talking about Dojo today, and we actually did talk about Dojo on this show, way back in episode \#25. So go listen to that if you wanna listen to the history of Dojo 1 to Dojo 2, and the several years in the making of that... But we're not gonna focus on that.

**Jerod Santo:** Years ago.

**Nick Nisi:** Years, yeah. We're gonna focus on modern Dojo. This specifically came out of a comment I made a couple of episodes ago, where I shouted out the release of Dojo 7, and mentioned that if you like React, you'll like Dojo better. So I thought it'd be perfect to bring Matt Gadd on, project lead on Dojo, to defend my comment... And let me throw him under the bus with that; Matt, can you tell me why you like Dojo better? \[laughter\]

**Jerod Santo:** Come on, Matt!

**Matt Gadd:** Why YOU like it better... \[laughs\]

**Jerod Santo:** I should say, I'm here for that clickbait, so... Nick said that and I thought "Hm, I've gotta show up for that show."

**Matt Gadd:** \[03:52\] That is super. Super, super-controversial comment. \[laughter\] So to step it back a bit, and not make the bold statement - I guess the main thing that we've focused on since day one in modern Dojo was being TypeScript-first, and being unashamedly TypeScript-focused. I've been a big supporter of TypeScript since the super-early days, when there was a lot of rough edges...

The framework's basically entirely geared towards the TypeScript experience... I think that's really important, in terms of how you work with it, how things that we do because it's in TypeScript all kind of dovetail together to make it a kind of more out of the box experience than writing some React in TypeScript and the associated libraries. So yeah, I guess that was one of the key goals of Dojo as a framework.

**Nick Nisi:** Yeah, definitely. And I think that that's what I meant by that comment - the focus on developer experience; TypeScript does go big into that. I'm definitely not saying that React doesn't, because React is also nice to work with... But it's that, plus the whole ecosystem that is all typed together very well, that gives you more than just JSX and a component wrapper, and being able to go from there.

So that's kind of where I was going with that comment. I've used it on a couple of projects, as you know, Matt, and I really enjoy it. I really enjoy the whole ecosystem of it, and seeing it change over the last couple of versions has been really cool, because it's just gotten so much easier to work with, as new features and new versions have been released. So why don't we talk about that a little bit - what's changed in Dojo, since Dojo 2? From Dojo 2 there's the concept of components (or widgets, as we call them), and they were class-based in Dojo 2 and for a few versions after that... Why don't you tell the story, a little bit of what has changed?

**Matt Gadd:** Yeah, it's kind of interesting, obviously, with Dojo 2 being nearly two years old (or slightly older). A lot of the original work we did at the time was in super-early versions of TypeScript. And we never really intended deliberately to go with class-based components. We actually had a composition system called Compose, and the whole idea behind that was to support composition in widgets, and not inheritance... Which again, was kind of a concept in the original Dojo.

**Nick Nisi:** Yeah. Multiple inheritance.

**Matt Gadd:** Yeah... \[laughs\] We like to say it wasn't, but it kind of did look like it in original Dojo. So composing in theory and concept was a nice idea, but at the time, TypeScript was so limited in terms of what we could do in terms of the types for the generics, and the things that went with it. It was a really awful experience for the end user, so in the end we didn't really pursue that. So when we went out the door, the easiest way for an end user to approach these things was with classes, and the TypeScript support for classes at that time was very good...

So that was always a thing in the back of the mind. And this kind of goes back to what I was saying, we're a TypeScript-first framework; a lot of the APIs, when we're designing them, we're thinking about how that works with TypeScript. And at the point in time, with the kind of inference that we wanted to get, classes were really the best we could do. And we had a mix-in approach with classes, which was quite unique. So you could still do that composition, but it was never our end goal, and I think you can see that through the lineage of where compose was, and what Dojo the original version was.

\[07:46\] So I think, come around to Dojo 6 - obviously, we've iterated quite a lot over that period of time from 2 to 6 - we finally had the capabilities to provide a system based on functions that were class-based, that allowed us to a) compose behaviors that could also affect the types that came out as well, and I think that's one of the key differentiators between Dojo and more JS frameworks that have TypeScript definitions as an add-on; we have a concept in -- I don't wanna get too in the weeds, but obviously, we have this composition mechanism called middleware, and that can affect things like the widget properties. So you can design self-contained behavior that will add properties for you to the widget interface, that you can then use in a component... So the idea behind it being encapsulating the behavior and the types. And that was the key thing in Dojo 6 that we changed, which is out at the moment.

**Nick Nisi:** Yeah, so with middleware - would you equate that loosely to hooks in React?

**Matt Gadd:** Yeah, I think a lot of the times it's easy to squint and go "This is like-for-like behavior." In terms of how they behave, they're very different. React's hooks have an interesting mechanism in terms of how they implement it... But in terms of how you'd encapsulate behavior, very similar. Similar behaviors you would implement in hooks. But yeah, very different in terms of implementation and some other usability aspects.

**Nick Nisi:** Yeah, definitely. I learned middleware first in Dojo, and then later learned hooks with React, and they were so strikingly similar that the main concepts behind hooks really just clicked as soon as I started using them, because of middleware. So that's why I was kind of saying that they were pretty similar.

**Matt Gadd:** Yeah, and I think as a concept they're ultimately familiar. Anyone going the other way as well from React to try and hook middleware in Dojo should get the idea behind that... So yeah, absolutely.

**Jerod Santo:** I'm curious how you go from a version 2 in 2018 to a version 7 right now. Are you guys like on full speed ahead, or what's going on? That's a lot of versions.

**Matt Gadd:** Yeah, it's interesting... The interesting part of this is if you go back to Dojo toolkit, basically from over 16 years they went one major version; they never made it to 2. They were very keen on going with minor versions.

**Jerod Santo:** Right.

**Matt Gadd:** One thing that we really struggled with in the original toolkit days was getting poeple to upgrade, which - there was a kind of fear of upgrading major versions, because of the associated things with it... So one thing in modern Dojo - we try and make that experience of upgrading between versions as frictionless as possible, so we can iterate quicker.

As much as what I was saying earlier, with TypeScript evolving, it means we can do more powerful things. Now, obviously, those are breaking changes in a lot of cases, just due to the way even TypeScript is in terms of breaking changes... So what we like to do is we like to iterate as much as we can on major versions, but also provide -- so we've got an upgrade tool which basically mostly gives you a friction-free upgrade path upwards of versions. So yeah, it's a really good question.

**Nick Nisi:** I think that's something that we can do today that we really couldn't do back in the Dojo 1 days - we can release new versions that have some breaking changes... And this goes for every framework out there, but specifically with Dojo being so strict with its type correctness, that when we change things, the types change, obviously. If you're upgrading, you can immediately see because of the compilation step where breaks might be in your code, and then with that upgrade tool - like you said, that's using... Oh, I'm forgetting the name of the term for it right now...

**Matt Gadd:** Code mods, Nick...

**Nick Nisi:** Code mods, thank you.

**Matt Gadd:** \[unintelligible 00:11:50.11\]

**Jerod Santo:** Code mods. Come on, Nick... \[laughter\]

**Nick Nisi:** \[laughs\] I'm the worst... Yeah, code mods - it's using code mods to help you to rewrite the code, and it can do that in a very type-safe way, and it's used in the AST to walk that, so it's correct in the changes that it makes, which is really cool.

**Matt Gadd:** \[12:10\] Yeah, and I think you make a really valid point about the TypeScript aspects - again, it kind of gives you confidence that you're going to be aware of those changes if you do have to make... In the past, let's say, you had a huge codebase and it had no tests in it. Upgrading your framework then is kind of a big deal, because you don't really have that confidence, because you haven't got any tests.

Now, obviously, types don't replace tests, but they do help you still in discovering kind of those things that could break. As frameworks offers, having those types is monumental to big projects.

**Jerod Santo:** Well, I don't wanna be the guy that just keeps bringing it back to React, but Nick started it, so I'll just keep going... Is it an apples to apples comparison in terms of at least service area? I mean, React is a component library; you have to add a bunch of things and stitch together to have like a framework... But it's kind of a UI framework. For those who aren't as familiar with Dojo as you and Nick are - is it a lot like React, but does things differently? Does it offer things that are wildly different? What kind of things does it do?

**Matt Gadd:** Yeah, I think that's a really good question, as well. It's definitely not apples to apples, in terms of -- obviously, React is absolutely focused on the... It's a view component authoring library, and they spent a huge amount of time in terms of like the VDOM parts of it, the reconciliation, the works on scheduling... They've done an awful lot. They're basically micro-optimizing in that kind of space. And they don't really have a huge desire to expand out of it, so that's kind of been taken by the ecosystem, which there is a huge ecosystem for.

I think there's great power in having a diverse ecosystem with that, but there's also that kind of panic of too much choice at times, when you're trying to get things done. So Dojo is kind of the absolute opposite camp of that. For us, the kind of comparisons that we prefer to be in would be the Ember and Angular space, where we're going to be very opinionated out of the box, to hopefully remove some of those decision-making things from you... Which for some people - they might find it very limiting, but for other people it's a friction that they don't need, and they just wanna create things.

We find that a lot with enterprise customers, going through creating apps and deciding what things to use based on licensing, or what's maintained, or all those kind of things that people have to take into account when developing applications. Basically, the goal of Dojo framework is to remove the entirety of them, but obviously be opinionated about it.

So yeah, we cover the build tooling, the testing, how you start your components, how you theme components... Absolutely everything, you name it; it's a decision on that point.

But the main kind of takeaway is we're in a similar space to Angular, but we understand that people -- I mean, I personally prefer authoring in the more reactive function components like React over Angular; no, that's just an opinion... So we're kind of React-like, but as a more framework-encompassing thing. God, that was a lot of words...

**Nick Nisi:** Definitely similar to Angular in the surface area, but closer to React in the API surface area.

**Jerod Santo:** Hm... It sounds like a nice middle ground.

**Matt Gadd:** \[15:43\] Yeah, and to be honest with you, I feel like React kind of in the last year -- there's a lot of people pursuing that space with React as well. You've got things like Next.js... I think Ryan Florence and Michael Jackson are developing an application framework... So I think a lot of places are going that way, where they understand that -- you know, it's just the classic thing, you could waste months writing WebPack configs; you could spend months trying to correctly figure out the best way to test things. So yeah, just removing some of that overhead is a big deal.

**Jerod Santo:** Similar to what the Redwood folks are trying to do, saying "You're gonna use React and GraphQL, and we're gonna build an application framework around those technologies", and fill in a lot of the stuff that if React were a -- full-stack is a lame way of saying it, Because it's all frontend, but if it was a full-app framework, it would provide those things, a lot like Ember does, and it sounds like Dojo and Angular do.

**Nick Nisi:** Yeah. So it does cover a lot of things beyond just widget composition, and it includes things like a router, a way to store and manage data, so it stores middleware... And there's -- help me out, what other big pieces of a framework are there?

**Jerod Santo:** Code mods. You've got code mods...

**Nick Nisi:** Yeah...

**Matt Gadd:** Yeah, we got an awful lot, Obviously, we provide CLIs for grading, for testing, for building widget libraries, for building applications, obviously we have the bootstrapping for you to start making an app... In terms of the actual framework-level stuff - yes, we've got a state store, we have routing, or rooting, as English people like to call it... We've got obviously internationalization--

**Jerod Santo:** Why do they do that? Come on. Routing.

**Matt Gadd:** \[laughs\] I have no idea.

**Jerod Santo:** I always say, when you have a router, and then you talk about rooting, it doesn't make any sense. It would be a rooter, would it not?

**Matt Gadd:** We call that a rooter, yeah.

**Jerod Santo:** Oh, you do? At least that's consistent. Alright, I'm \[unintelligible 00:17:44.25\]

**Matt Gadd:** Yeah, we're consistently wrong alright... \[laughter\] But yeah, so a huge thing again was massive in Dojo 1 - Dojo 1 was one of the first frameworks that really pushed internationalization out of the box, for when you're writing apps. Because when you writing big apps, English isn't the only language that exists in the world. It's a kind of shoehorn and it's kind of a second thought in terms of support and internationalization, and localization is very difficult.

So again, in modern Dojo that's a key concept. All of our widgets are internationalizable out of the box, and we provide easy mechanisms to be able to localize and do translations etc. So yeah, that's a huge part. Obviously, our widgets, again - in Dojo 1 we had huge contributions from IBM to make all of the widgets accessible and provide a framework for creating accessible widgets... And then obviously, in modern Dojo we had a really good engineer in Sarah Higley, who went on to -- she's working at Microsoft in accessibility stuff, and she did a lot of work in conceptualizing the modern Dojo widgets with being properly accessible... So that's something we massively care about.

Yeah, so there's just a lot of things... We care a lot about interoperability as well with the web; that was a really pain point in Dojo 1, if anything, is the ecosystem in JavaScript is massive. There is still a lot of friction in terms of "Hey, can I use this thing, from this library, in another library?" That we never really solved in Dojo 1, it's just not there; but in modern Dojo we really care about being able to just create Dojo components but use them in any framework.

We have a really good custom element story for that, in terms of we have a build tool that will take our Dojo widget, and with no additional config or anything, or any code change, we can spit out a custom element that you can use just in plain HTML, that has the correct properties. You can use children in it, you can use attributes, events etc, just like you'd expect to use any other custom element. I think that's really powerful, because that's another thing that things like React, even though it's a component authoring system, it doesn't provide you any way to build those things out of the box, or ship them to use with other libraries.

**Nick Nisi:** \[20:14\] Yeah, that's the main story that I like, and what led me to that comment - you have all of this out of the box, and then as you go to upgrade and get all these new, awesome features which we'll talk about in the next segment (what's coming in Dojo 7), you can pretty confidently upgrade... And using the upgrade tool, it becomes pretty painless, as well. And all of the features and tools that you're going to use that ship with Dojo obviously just get upgraded and are usable in the new version, as well.

**Break:** \[20:45\]

**Nick Nisi:** So in the Dojo news, Dojo 7 is either here or just around the corner; I won't confidently say that it's here...

**Jerod Santo:** Don't make the same mistake twice.

**Nick Nisi:** Yeah. \[laughs\] But it is imminent in its release. Matt, can you tell us some of the highlights of what to expect in Dojo 7?

**Matt Gadd:** Yeah, I mean - Dojo 7 is absolutely huge. It has extended quite a long time. It's been maybe six or seven months since Dojo 6, which is quite a long time for us in terms of our release cycles... But we deliberately did that, because we changed quite a lot of the offering patterns in Dojo 6, like we said, from where we started with Dojo 2. We felt like it was a good point for us to kind of revisit our widgets and what we had...

So our widget library is a component library, and that's been around since the initial release. In that time we've discovered a lot of better patterns, or nicer ways to do stuff... So we took an opportunity in Dojo 7 to set ourselves some time to really try and make the widgets that we've got better out of the box, more consistent in terms of APIs, because it's quite difficult working on a huge widget library that might span 40 widgets... Lots of people working on them to try and have the standards there of documentation, and all the things around it.

I think it's really easy to go and write a component, but to do all the things consistently, with the right documentation, the right support for things... I'll get to some of the new things we've added in a minute, but to try and get the consistency there was kind of a huge thing for Dojo 7.

So we've really improved the usability of our widgets. We've got a more extensive set of widgets, and we've got some cool new features in widgets alone. We've always had a theming system for Dojo, so you can write your own themes for these widgets, but we only shipped with basically Dojo's own theme.

So in Dojo 7 one of the huge things, one of the biggest requests that we've had, obviously, is for Material styled-components. Now, a lot of people out there might go and use a specific Material component library; with our widget system the idea is that you could style this as Material, you could style it as Ant Design, you can style it however you want. So kind of this really proved how good our theming system was and how extensible our components were to allow us to create that.

\[23:59\] So we discovered a lot doing that, but at the end of the it we've got a set of widgets now that obviously you can use the Dojo theme, you can use the Material theme for Material-looking components... And beyond that, we really improved the theming experience. In Dojo 7 we've got this concept of variance, which allows you to -- it's basically powered just by CSS variables, but on top of the theme you can then configure a variant for it. We're shipping a dark version of Material, and that is just a variant of the Material thing.

**Jerod Santo:** That's awesome.

**Matt Gadd:** You could ship a red version of the Material theme. So yeah, it was a really good exercise to kind of build that out in Dojo 7. I think that's gonna be super-powerful, because customizing components - look and feel is extremely important for most users of apps, to be honest. So yeah, being able to brand and configure those themes was one of the big things.

There has been a number of changes in the Dojo framework, but really, the headline thing is a more exhaustive set of widget components, some big consistency changes in the API to make them more useful and work out-of-the-box. We've also tried to really improve the documentation side, because I think that's a really important thing.

In the past we were kind of manually updating markdown to document what the interfaces are, how you could theme it etc. But in Dojo 7 we've got this new tool which is called Parade, and it's kind of like a Storybook, if anyone's ever used that... It's basically a development environment to develop components in. You can run the tests from there, for instance, you can change the theme in there etc. But it also doubles as a generated documentation tool as well, so users can go and look at the examples, they can look at the code, they can see the interfaces for the components, and they can see the themable classes etc. So that's a huge thing... Not just for consuming components, but writing components yourself.

**Nick Nisi:** It made it so much easier to run the tests and to see it update, and to change the theme quickly... it's such a joy to use now.

**Matt Gadd:** Yeah, and to be honest with you, I think that was one of the really good things that we have approached in Dojo 7 - we've got out of that habit of having our own tool chain to develop our widgets, and use the tool chain that anyone else would write a component for, and make sure that we make that as frictionless as possible. Before, it was a lot more difficult. If you make a change to a component, you wanna be able to see that instantly. You wanna be able to see the types that you're changing; you wanna see how your widget is themable, and you wanna be able to test it when you're writing the themes for it... So yeah, it has made a huge difference, to be honest.

**Nick Nisi:** Oh, for sure. And from my perspective, helping with the widgets for Dojo 7 - I don't think that there's a widget that didn't get touched in this... And that is mainly being converted from a class-based widget to a functional widget, to take advantage of the new middleware, and the consistent way of handling state variables, and things like that... But also, I think another thing we did was all of the widgets were rewritten to use TSX instead of the hyperscript variant that we were using.

**Matt Gadd:** Yeah, absolutely, and I think that's a concession we've made over time in there.

**Jerod Santo:** What's hyperscript?

**Matt Gadd:** Hyperscript is basically just -- so TSX and JSX are obviously made up XML-like syntax that gets compiled down to (if you're using React) React's create element. Basically, that functional API was what we used before instead of JSX. And we supported TSX and JSX. TSX was always more declarative, and the hyperscript is basically a completely programmatic API. We supported both from day one, but in our reluctance to look too much like Re-- I think there's a strong affiliation with JSX and TSX with React. At the time, obviously, we preferred showing the programmatic API and using it.

\[28:15\] There's no functional difference in terms of what actually happened under the hood, but we've slowly over time realized that one of the biggest things about React actually wasn't React, it was about people writing (if you look at it) HTML-like things in a reactive way... So we fully embrace TSX now, in documentation and the rest of it.

**Nick Nisi:** Yeah, I really like that too, because -- not that I had anything against hyperscript, but it's easier. In Dojo at least there was two different hyperscript functions to call, whether you're creating DOM or creating another widget, and it just kind of blends together now, which is -- I mean, it always did before, but now the internal widgets all blend together and are easy to write, especially if you like that JSX/TSX syntax.

What else has changed in Dojo 7?

**Matt Gadd:** I'm trying to remember myself... \[laughter\]

**Jerod Santo:** He listed a lot of stuff out there. I was thinking, "Could there possibly be more?"

**Matt Gadd:** Yeah, we've done an awful lot, actually...

**Jerod Santo:** What hasn't changed?

**Matt Gadd:** Yeah, that's a good question... \[laughter\] One thing that we have been trying to improve is Dojo has support for this mechanism called build time rendering, which is allows you to have a flexible system for doing things at build time. This is kind of a hot space, or it's been a hot space for a while, with Gatsby, and the other static site generators... And build-time rendering is kind of Dojo's equivalent. It's not completely focused for static site things, but it can do it. So we've been improving the experience of that quite a lot.

In the past there was a lot of configuration in terms of saying "I want to render these pages, for instance", that you'd have to configure. And we've kind of tried to remove all of that to be kind of out of the box now. Hopefully, in Dojo 7 people will be able to write static websites with zero config; that was the goal. So that was a big thing that we changed.

As always, we've been trying to improve the story in terms of how we ship polyfills etc. to the browser. Dojo is found quite a lot in enterprise apps, so we still support IE11 in terms of the framework, because we get a lot of requests for it. Hopefully, that will eventually die out, because I think October this year is the official end of life...

**Jerod Santo:** That's right.

**Matt Gadd:** But then stubborn enterprise customers... But yeah, so we've been trying to obviously -- we don't want to ship legacy code to modern browsers. There's a lot of progress in this space - differential loading, and things like that. In Dojo 7 we're a lot more intelligent about how and when we'll load a polyfill. Some of those are decided on if you use that kind of thing in code, so if you use an intersection observer for instance in your code, then we will include the capability for that polyfill to be loaded. If you don't use an intersection observer in your code, then we won't even think about loading it. And then on top of that, when you get to loading that in a browser, we'll conditionally check if whether you have that capability unloaded... So basically the end goal being you never load more than what's required or what's used. That's really helped us kind of keeping our bundle sizes down, and only loading absolutely what's necessary, and only loading modern code... Because there's a big cost in shipping transpiled ES5 bundles. The difference between shipping a legacy bundle and a modern bundle is huge. So yeah, that's one of our key focuses all the time, is on keeping our bundle sizes down, and doing intelligent things to split code effectively.

**Jerod Santo:** \[32:13\] It sounds really great, Matt. When can we get it? \[laughter\]

**Matt Gadd:** That's a great question. I think hopefully we're gonna be released this week, but I said that last week.

**Jerod Santo:** What's in the way - is it just polish, or what's left to do?

**Matt Gadd:** We've had a few critical bugs in places. Again, IE11 always throws up some surprises, and with the new theme variance system, it's heavily reliant on CSS variables, and IE11 doesn't support CSS variables. But we still wanted to have the capability... So in the past, what we've done for CSS variables is basically we've computed those at build time for legacy browsers; so if you're using a CSS variable of red, let's say the CSS variables like a warning color at build time, for IE we would have changed that to just be hardcoded to red. But with the new variance stuff, the idea behind this is you should be able to switch those things if you wanted to, at runtime. So we've had to do a lot of work on the IE front to make that possible... Which we have done with some hackery, but that's taken us some extra time.

And obviously, we've really ramped up the amount of testing we've had to do around widgets and theming, because we've added the Material theme etc. So there's been quite a large quality assurance kind of period during this one... And that's \[unintelligible 00:33:35.19\] why we like doing more frequent releases than this. This has been a much longer release. The longer it gets, the more amount of things that we have to still -- there is a big footprint across this framework. We do try and do a lot of things, so there is quite a lot of things that we have -- obviously, we've got a lot of tests, we've got a lot of apps that use stuff, that we test stuff on... But it is a big thing to test, so that's really the hold-up.

**Jerod Santo:** How do you manage the push and pull between the desire to support IE11 and enterprise customers with a desire to push the framework forward, and maintain a bundle size that's reasonable, which I'm sure is always a challenge.

**Matt Gadd:** That is honestly one of the most difficult parts. Going back to before - I think there's two huge constraints that we have with this. One is TypeScript, like I've mentioned before; when we write APIs, we try and write APIs that work well with TypeScript. Now, that does mean that you do have some constraints on the TypeScript side. So quite a lot of the time really loosely-coupled stuff in TypeScript causes you a problem, because you can't get that type inference. So we design a lot of our APIs with TypeScript in mind, and a lot of our APIs kind of have similar constraints of IE11.

Now, what we won't do is -- early on we did flip that kind of constraint, in that yes, we were out of the box when Dojo 2 released the legacy bundle was the default way around, if that makes sense... As in, we would ship a legacy bundle to cover that. But over time, we have to be forward-thinking and modern. So there is a lot of design that goes into that in terms of our APIs; the polyfill projects that we've just completed for Dojo 7 - there was a lot of thought there in terms of how we can ship less code to the browser while still supporting IE11. And I think that, like you said, it is a push/pull.

At some point, that still continues even in modern browsers, because of the way that everything's moving a lot quicker nowadays, in terms of people intending to ship things early and frequently in the browsers... But there is still -- when you look at Safari, in terms of how quickly they ship things, for example, I think they only just ship ResizeObservers in their last release or the release before.

\[36:04\] Obviously, IE11 is the absolute worst-case scenario, but a lot of these systems we design work well in terms of modern features that are implemented in all browsers yet as well. For instance, in the Safari scenario, we don't ever wanna put the ResizeObserver in your bundle if you never use it, but also, we don't wanna put it in your bundle if you're in Chrome and you've got that implemented natively. So a lot of it is deferring and lazily loading things. That is genuinely one of the key things that we do.

**Nick Nisi:** You mentioned designing APIs around TypeScript, and what it supports... I'm curious, does that complicate things as you're looking to upgrade TypeScript, because of maybe workarounds, or ways that you're reaching for the right type of inference? Does it make it harder to support later versions of TypeScript?

**Matt Gadd:** I think we've been reasonably lucky, because quite a lot of the times I think TypeScript's for -- unless you're doing something absolutely mad, then generally, because we develop the framework in strict mode anyway, which is a really good thing to do, generally we don't get a lot of breakages, which is useful... And the most common scenario is that we end up with an API that we might want to change to take better advantage of types. That's generally the way we've found it.

TypeScript better supports recursive types, for instance, and in the past we would have expressed that in a different way, to get around it. So in some places we might have had this insane type overload. There's one in store that's like 50 lines of overloads, with generics repeated... And those things can be massively improved. And I remember working on them at the time, thinking "This is horrific." But for the most part, TypeScript gets more powerful, and actually that makes those things a lot easier.

Some things we can never change. There is a number of API considerations that you know that TypeScript can never know about. It's like kind of what I got back to before - if you loosely \[unintelligible 00:38:12.26\] so much, or you go to this kind of system where you're using strings, or things like that, it's really hard for you to get the inference out of things. And to be honest with you, that's one of the things I think people misconstrue about TypeScript - for us as a library offers, we write a lot of types.

We use a lot of generics, there's a lot of things there. But for people as end users, the end goal is you don't write types ever. You'll be typing maybe the params to your function, in your land. But in terms of using the framework, good frameworks in TypeScript rely on the inference. So that's really the key goal.

**Nick Nisi:** I promise you'll never have a 50-line generic in user land Dojo code.

**Matt Gadd:** Yeah, absolutely.

**Nick Nisi:** Taking a step back... You mentioned testing, and the thorough testing - I did wanna touch on testing in Dojo a little bit, because that's one of the things I really like about writing Dojo 2, is writing tests for Dojo components. It's really kind of a joy to use. I haven't really played with the new stuff in Dojo 7 that's coming; I think there's new stuff, at least, with the test harness and how we approach that?

**Matt Gadd:** Yeah, so I think there are some wildly differing opinions on the web on how to test things.

**Nick Nisi:** I just wanna make sure we're as controversial as possible.

**Matt Gadd:** \[39:39\] Yeah, yeah... \[laughter\] I think if you speak to some people, what their opinions are on unit tests, or integration tests, there is a lot of blurring there between what people think a unit test is and isn't nowadays. We could be super-controversial about the boundaries of a test, and things like that... But I like to think of it as - all we care about is being able to test our expectations of components, and I don't care how we do it. The Dojo test harness is an Enzyme-like shallow renderer, which is controversial... It does a lot of things differently to Enzyme; I think it avoids a lot of the things that I think those kinds of tests got a bad rep for.

The key thing for us is we want you to be able to write tests that are consistent, that are easy to write, and are not giving you false positives on what you're writing.

I think reactive components are kind of a tricky thing to test, because at the end of the day they're a render function, and really the unit of that test is the entirety of that widget, because that's what gets returned, and that's really what a VDOM is about - every time that render function is called, you're effectively returning the entirety of that widget. So testing little bits of it isn't really the correct way to think about it. So kind of what the test renderer in Dojo 7 and in the previous versions - this is just an enhanced version of it.

The approach we've got is we want you to be able to write tests in a partial manner, as in only test the things that you think are changing, but assert the entirety of it. So rather than just asserting partial against the things, asserting against the full thing but still modifying those things in a partial way.

I think we could go massive into depth into testing. I think there's a load of different opinions. We do support multiple styles. We do use Intern as our testing tool in the CLI, and that allows you to write in-browser tests for starters, which I think people have forgotten about. Everyone's very used to Jest and other test runners that just don't work in the browser still, to this day. I do think you can't beat testing something in the environment it's going to run in. And obviously, Intern supports functional tests with Selenium as well, so I think, as always, there's not one right way to write tests; it's a good mixture of low-level and high-level ones.

We do provide a testing harness for the component level, and what we class as a unit test effectively... But then obviously that doesn't replace writing a good mixture of tests. Was that the least controversial I could be there?

**Nick Nisi:** Yeah, I'm so disappointed... \[laughter\]

**Jerod Santo:** Spice it up, Matt. Come on.

**Nick Nisi:** But yeah, that test harness is cool, and definitely worth checking out. Also, as you mentioned, the tests are written using Intern, but we've done Dojo applications that use Jest as well, and the test runners work all the same in there... So it's definitely versatile in that.

**Matt Gadd:** Yeah, the test harness is agnostic to test runners, and to be honest with you, with the Dojo framework people do have opinions on testing tools... So bring your own if that's what you wanna do.

**Nick Nisi:** Cool. So yeah, definitely look for the release of Dojo 7. There'll be an updated blog post on Dojo.io, which if you're looking for an example of a build time rendered site with Dojo, Dojo.io is that.

**Break:** \[43:31\]

**Nick Nisi:** So that's what's coming in Dojo 7. Matt, what can we look forward to going into the future, with Dojo 8 and beyond?

**Matt Gadd:** Yeah, so we've got a lot planned in Dojo. I think one of the key things that we needed to get done was a solid foundation of those types of leaf widgets, like your buttons, your dropdowns, your menus, your dialogues... But I think one of the key things where the web is going or a lot of developers are looking for nowadays is those bigger components, those layouts that allow you to quickly put together an application. At least in the CSS space, that's a really hot place at the moment. If you look at Tailwind - Tailwind is a CSS framework that allows you to rapidly build things... But they're focusing now on those bigger components that are more layout-like.

People wanna be able to go "I've got this kind of app..." A lot of apps in the end are structured in very similar things - you've got the kind of newsfeed app, like your Twitters, or even to some extent your Gmails... You think about those things, and it's a list; it's got a search box, it's got a \[unintelligible 00:45:20.21\] or a menu of some sort... There's a lot of people out there who don't wanna spend all the time creating those kinds of layouts, so that's a really big space for us to provide a lot of functionality out of the box and go "Hey, are you looking for a newsfeed kind of layout widget?" And not only give you that CSS like Tailwind would, but also stitch that together for you to actually make it work.

I didn't really talk about in Dojo 7, but we've got a huge new concept in Dojo 7 that I nearly left out, and that is it's an abstraction on our store system, basically in terms of dealing with -- what our concept is called is resources. Those basically are an easy way for you to plugin data providers into widgets, to have them work out of the box. And the grand goal with this is to kind of remove that boilerplate of your state management of Redux, or whatever, and largely deal with that for you for the common scenario, which for a lot of people it's making a REST request to fetch a list of things, or calling out to GraphQLto do something.

So we're kind of really focused on making that area more seamless and friction-free, and we've stared implementing that in -- there's a very small version of that in Dojo 7, and we'll be massively expanding that in Dojo 8, in the hope that you'll be able to drop these app-level widgets in the page, your newsfeed, and be able to hook that up to a resource that you provide, and basically have a working Twitter app that you can search, for instance, or scroll down and have an infinite scrolling list-off, out of the box, with very little wiring.

I think you find that moment when -- and I get frustrated with it; I wear two hats in a week. In a week I'm working as a framework author, and you can get right into the weeds of that, but then on the weekend I'm trying to work on my pet project, right? And even as a person who writes Dojo, I don't wanna do all that boilerplate. I just wanna play around and get something going. And I think we've got a lot of people in that space, and that's a real goal for Dojo.

It's not just the developer ergonomics, because I think people get caught up in that... Developer ergonomics means "Yeah, this is nice to write code in", but it's also about just removing the friction of writing so much code, and doing a lot of things for people. And yes, in some cases that will be too contrived for them. That might only fulfill 90% of use cases, but that's the real idea, is to give more power out of the box, with less code to write. So that's a huge initiative in Dojo 8.

**Nick Nisi:** \[48:01\] That's really cool. So you would write one time how to fetch data from somewhere, and then theoretically that could plug into any component that needs that?

**Matt Gadd:** Yeah, that's exactly it. One thing that I think people have really struggled with in bigger applications, whether it be in Dojo or React - a classic thing is this cache invalidation, that no one knows when to do it. No one knows when to fetch something or when to evict that data out, because it's stale. And you see it in every app. It's really tough to work out in what lifecycle that happens.

So the idea behind resources is inside a widget you deal with a resource, like you would with something locally; so you don't worry about how it globally fits together, but under the hood it's global. So you can pass this concept of a resource around, and we will manage and coordinate when those requests are made. We won't make duplicate requests. We'll decide when those things are invalidated, when you need to refetch data because it's stale.

So the idea being we make it very simple for you to write components, and you don't worry about global state, and we'll deal with that under the hood. So yeah, exactly what you said - you can pass this concept of a resource around, and we'll do all the rest of it for you, all the wiring. So yeah, that's the end game for that.

**Jerod Santo:** Isn't cache invalidation hard because it's so contextual? It seems like that would be something that you would actually wanna push closer to the app developer, not further away. But maybe I misheard what you're saying.

**Matt Gadd:** Yeah, so when we started with resources, we took your typical TodoMVC. So knowing more about how you interact with a resource allows us to make good decisions. If you edit a to-do and you click Save, then we know more than likely that we need to refetch that list of to-do's. So basically the idea behind this is by making it more declarative on how you interact with resources, we can make smarter decisions for you.

It's a great question though, because obviously if you don't have that information, then you don't know how to do it. And one thing at the moment that we've seen a lot of frameworks is if you've got local state, then your widget doesn't know about anything else outside of it. The common case is if you've got a widget -- let's say you had two widgets on a page, two components on a page, and they're both gonna fetch a list of items. At the moment, they just make them two request from it. Now, that's fine; it'd be cached to the HTTP level. But we can give you an authoring experience that seems like you're locally writing it, but then reconcile that in a global manner.

Again, I think everyone's got a lot of fatigue from - I mean, I certainly have - from the Redux style stuff; the reduction style state technique is very boilerplaty, regardless of what you use. I think some libraries like MobX and stuff will have; they've made some good ergonomic gains on making this more like that. I think MobX has similar goals, in a way that you declare a lot of these decorating patterns inside your widget, and it deals with that reconciliation on the state level, but they don't get involved in terms of the data fetching kind of part of it. They're very separate. State management and data fetching are still quite separate in a lot of these libraries. So we're trying to bring all that together.

So the first version of that is in the Dojo 7 widget, so anything that's powered in Dojo 7 uses this new primitive and resources, and it's only a very early version of that, in terms of it only does the read part of it, as in getting things, because our widgets are obviously mostly read-focused, so they don't deal with saving resources at the moment.

But it's quite cool, because it powers the combo box, the select widgets, we've got a Typeahead, and things like that; they all use resources, so the resources out of the box are built to support kind of a pagination in these widgets, so infinitely scrolling things, managing the offsets, queries etc. All those things are dealt with out of the box.

\[52:11\] So you can provide a resource that's got three million items. That works in tandem with the virtualization of rendering, and the rest of it... And that all works out of the box in Dojo 7, while in our earlier ones all that was left to the end user. You would have to provide the number of items to that select widget or that combo box, and you were in charge with efficiently loading 30,000 items. So that's a big change in Dojo 7.

**Jerod Santo:** It sounds like a lot of stuff, Matt. Have you been working on this all by yourself, or do you have a team of people?

**Matt Gadd:** To be honest with you, I didn't do anything.

**Jerod Santo:** \[laughs\]

**Matt Gadd:** No, honestly - so many people have contributed to Dojo 7. Shout-out to -- I couldn't even name everyone; there has been many people that have contributed to it. I think the nice thing in 7 is we had a lot of room to think about a lot of things upfront and where we wanted to go with the goals, and I think at the end of it it looks like we've done a lot, and we have done a lot... But I think the main thing is we've not only done a lot, but we've provided a lot more value with those things.

I think a lot of the time people get caught up with those micro-things in a framework, but for us it's about how big a value you can give to that end user. So then bigger features, that give them more out of the box, with less configuration, so people can write apps - that is really the end goal... And that's it.

**Nick Nisi:** One question I was gonna ask is do you see Dojo becoming more opinionated about server-side implementations? Maybe in the same vein as maybe Redwood?

**Matt Gadd:** Yeah, we've been chatting a lot about that recently. Redwood is really cool in that. I think that space is a popular space. You can see it obviously with \[unintelligible 00:54:03.05\] They're clearly trying to bridge some of that full-stack. Redwood certainly is doing that more that Next in terms of that, and I think it's a really interesting domain.

I think there's a lot of value if you're writing TypeScript full-stack, because I think there's a super amount of value you can get from having strict contracts between the backend and frontend generated for you. I think that's still one of the common things that - if you're writing APIs, if you're using different languages, then that's complicated. I think that TypeScript provides real value there in terms of how all that stuff can be documented. I think TypeScript on the backend is a really interesting space. I'm a big fan of NestJS. I like TypeORM. It's a really nice ORM in TypeScript...

There's a load of interest in libraries there. I don't think as Dojo we'd like to reinvent the wheel on that entire -- I think, as Jerod just said, we already do a lot of things on the frontend, so thinking about those things on the backend would be a huge amount of work, but we certainly definitely see a space maybe horizontal to Dojo, a kind of stack that we'd recommend for you to be a full TypeScript stack. But whether we develop all of that or just have a composition of libraries - it's more likely to be a composition of libraries.

\[55:44\] But I think it's a super-interesting space again, because I think more and more people want to write full-stack apps, without changing languages, and not having that overhead. Now, that doesn't work for everyone. If you're in a big enterprise, you might be stuck with Java. It is what it is. I do think it's a really interesting space. I think Redwood is really cool, genuinely. I think that's a really good niche to be in. I think for now our key focus is going bigger on the frontend in terms of those application-level, and then see where we get to.

**Nick Nisi:** Yeah, that's awesome. I really like the idea of what you said, the generated contract between the client-servers is very interesting, and something that can be done with TypeScript.

**Matt Gadd:** Yeah, and I think honestly there's still a load of tooling out there that I don't think everyone's quite appreciated yet how powerful TypeScript can be for building your own tools... Because for us, we use the TypeScript AST - like I said earlier, we'll generate custom elements based on the properties interface that you write, and that's the power, again, of having types, to be able to build things off.

We do a lot of things in code splitting, where again, we go down the AST, so we can generate automatically the code splits in code. In Dojo you do not have to change your code to change the configuration of how things are split. I think that's a really powerful thing - separating code from how things are loaded and bundled is really smart, and TypeScript and working with ASTs allows us to do that. So the more type information we can get, the better idea we have about what we can do smartly for you.

**Nick Nisi:** Definitely. So if folks wanna get involved with Dojo, where would you point them, Matt?

**Matt Gadd:** Yeah, it's a great question. A great place to start is on Dojo.io, which is the official website. It has quite a -- it was a large amount of time spent... I think that was around Dojo 6 - reworking the website, and improving the documentation... So it's a really good resource now for getting started with Dojo and covering the breadth of the framework.

Obviously, again, we're on GitHub - it's Dojo/framework, and that's where the entirety of the framework is. Also, then we've got the repositories for Dojo widgets, which is Dojo/widgets.

Generally, a lot of the framework-level conversations happen on GitHub on Dojo/framework. We also have a Discord channel that's quite active. I think the link to Discord is on Dojo.io as well, under the community bit.

So yeah, we'd love people to contribute. Again, a lot of the things that I think are really valued is getting feedback in terms of what people struggle with in applications. And even if you're not actively using Dojo, that's something that we're really interested in, because that's kind of the things that we're out to solve.

So yeah, we definitely love to hear people's ideas, and if they wanna contribute to Dojo, we've got full contribution guidelines on both the GitHub repos. It should be fairly straightforward to get going. Like I said earlier, Nick, things like in Dojo widgets, with Parade now it's really easy to develop a feature, raise a pull request, see it deployed, run the test etc. Hopefully, our tooling there make it kind of accessible for anyone who wants to jump in, really.

**Nick Nisi:** Definitely. You can also check out Dojo on CodeSandbox and immediately start playing with it.

**Matt Gadd:** Yes, that's a great point. CodeSandbox is absolutely brilliant for that. The amount of times we get bugs, reproducing it in CodeSandbox makes it so easy... So shout-out to Ives with CodeSandbox, because that really is a revolutionary piece of technology, in my opinion.

**Nick Nisi:** Well, thanks so much, Matt, for joining us today to talk about Dojo. I really look forward to Dojo 7 and beyond coming out. Listeners, let us know what you think - was my initial comment correct? After checking it out, do you think that Dojo is better? Let us know on Twitter, @jerodsanto, and we will see you next week. \[laughs\]

**Outro:** \[01:00:22.26\]

**Jerod Santo:** You've now entered the break, you're free to roam about the Zoom. By the way, for those listening live, next week JS Danger returns. We've got brand new sounds...

**Nick Nisi:** Nice.

**Jerod Santo:** We have a new JS Danger theme song. Don't get it wrong, you might get this sound. Or this one. That one's painful. And it should be a blast. We're doing it actually in partnership/conjunction with HalfStack. So we're recording the Zoom video, we're doing JS Danger, HalfStack edition, with Suz, Emma and Divya, and I will be playing Alex Trebek. Then we'll ship the video over to them and they'll play it over the lunch hour, so it'll be like -- I don't know, it's weird saying "speaking at the conference." The whole record it and play it thing is just odd to me, but I guess we'll have a session where we can watch ourselves on the video, so I'm kind of excited about that.

**Nick Nisi:** Yeah, that'll be awesome. One word of advice to the panelists on there is make sure that you wager properly. \[laughter\]

**Jerod Santo:** Yes... You've gotta watch more Jeopardy, man...

**Nick Nisi:** Yeah...

**Jerod Santo:** You've gotta guard that lead at the end.

**Nick Nisi:** \[laughs\]
