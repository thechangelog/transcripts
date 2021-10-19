**Jerod Santo:** Welcome back, party people! We are here, we are excited! We have a special guest, we have a special host. Unfortunately, they're both named Adam, so we'll have to deal with that... But hey, that's just the way it goes. Namespace clashes - we're used to those in programming, right?

**Adam Stacoviak:** That's what makes it fun.

**Jerod Santo:** So guest today - Adam Wathan from Full Stack Radio. You may know the voice...

**Adam Wathan:** Hey, guys!

**Jerod Santo:** You may know him from Tailwind CSS. Adam, thanks for joining us.

**Adam Wathan:** Yeah, thanks for having me on.

**Jerod Santo:** And then Adam Stac, who -- is this your first JS Party appearance?

**Adam Stacoviak:** First-time rodeo.

**Jerod Santo:** Out from behind the curtain, joining us to talk CSS. So this might be a CSS party...

**Adam Stacoviak:** Yes.

**Jerod Santo:** It might be a full stack party. Adam, first of all - Wathan - tell us about Full Stack Radio, that show that you do.

**Adam Wathan:** Yeah, sure. Full Stack Radio is a podcast that I started back in 2014, mostly just as an excuse to ask really smart people questions that I wanted answers to... And I figured, if I just email someone and say "Hey, can I harass you over Skype for an hour and bug you with questions?" they'd probably say no, but if I said, "Hey, do you wanna be a guest on my podcast?", there's a better than zero chance that they would say yes.

So yeah, I've been doing that for a handful of years now, and I still put on an episode every two weeks. I talk to people in the software industry about everything from product design, and marketing, to unit testing, to system administration, to front-end, to back-end, whatever. Kind of all over the place. So that's been pretty fun, it's been a great way for me to sort of quickly learn new things and find out how people who are experts in different areas tackle the problems that I run into when I'm trying to learn new stuff.

**Adam Stacoviak:** How much of that learning has fed into Tailwinds to bring it home?

**Adam Wathan:** I don't know that there's actually been a ton of stuff on the podcast before Tailwind came out there, really, and formed what I ended up doing with Tailwind. I have had a couple episodes about it, though. Actually, the very first episode of the podcast ever was about utility classes and CSS, before I had made up my own mind about it... So that's interesting to go back and listen to, if anyone is curious.

Then I did an episode with Mark Otto - who's one of the people behind Bootstrap - once, which was pretty interesting, too... But those would probably be the only two really deep-dive CSS episodes that we did before actually putting out the framework.

**Jerod Santo:** \[03:49\] It's funny your reasoning for doing Full Stack Radio, being able to pick the minds of smart people. I always joke that we have a similar tact with regard to the Changelog specifically, inviting on open source developers, but our trojan horse is "Hey, come on the Changelog and talk to us about your project!", and then we get them on the show and then we throw our feature requests at them, and they can't say no while they're live on the air, right?

**Adam Wathan:** \[laughs\]

**Adam Stacoviak:** Nope. It's the easiest time to get a feature.

**Jerod Santo:** That's right, it's the best way to get a feature or a bug fix.

**Adam Stacoviak:** Especially if you do the PR during the show.

**Jerod Santo:** That's right.

**Adam Stacoviak:** Which Jerod has done at least once.

**Adam Wathan:** Love it.

**Jerod Santo:** So we've gotta give a shout-out to Aparajita Fishman, who pinged us on GitHub... So for the JS Party people out there who do not know, we take requests, just like any good DJ, and we have a repo on GitHub, at github.com/thechangelog/ping, where you can open up show ideas. You can do that for the JS Party, you can do that for the Changelog, you can do that for Founders Talk, or for Practical AI - any of our shows, and you just hit a label or say which show it's for, and give us your show idea. If we like your idea and you pitch it well and it sounds cool, we will do it on the show. That's what happened for this - Aparajita asked for Tailwind CSS; he says that they're rapidly changing the way we think about CSS, and it will soon be reaching version one, so he asked to get Adam on the show... So thanks for the idea, and here we have him.

**Adam Wathan:** Yeah, thanks for inviting me.

**Jerod Santo:** So let's dive into it then - Tailwind CSS, tell us about it. You've already told us a little bit the utility classes and the timing around it, but... Version 1.0 coming up - tell us the big idea. You've been working at it for some time now. It seems like a big project.

**Adam Wathan:** Yeah, so the history of Tailwind is kind of prior to working on it. I was using Bootstrap, like a lot of people - I think it's a great project - and when Bootstrap 4 was coming out, they made the decision to switch from Less to Sass... And I just like Less so much more than Sass. There's just certain little things about it that resonated so much more with me, and there was one particular workflow I used with it quite a bit, that wasn't really possible in Sass easily, and it has actually since been something that we sort of have incorporated into Tailwind. People have really loved it, now that the idea has sort of been exposed, and we can talk about that more later maybe.

**Jerod Santo:** Yeah.

**Adam Wathan:** But yeah, Bootstrap 4 was coming out, they were switching to Sass, and I really wanted to keep using Less, so I thought "You know what, maybe it's time I bite the bullet and try to just put something together for my own projects, from scratch, that just kind of gives me the stuff that I need." So I started working on this Less -- I wouldn't even call it really a framework at the time, because I was really just building it for one particular project, and I just kind of put something together I needed that was very similar to Bootstrap in terms of the sorts of things it included... Like, a lot more component-y than utility-y, you know?

**Jerod Santo:** Yeah.

**Adam Wathan:** So buttons, form controls, cards, stuff like that.

**Jerod Santo:** Widgets.

**Adam Wathan:** Yeah. And there was a handful of utility classes in there that I found really useful... And the things that were really useful for me getting started were mostly stuff like panning and margins stuff. I think that's kind of the gateway drug for most people when they start writing CSS or building interfaces this way, where you have some elements, and you need to somehow control the distance between them, and it doesn't really feel right to bake that information into the components themselves, because you want them to be able to be used anywhere... So the only real solution ends up being using little spacer helpers and stuff in your markup to control the relationship between all the different things in the layout. So those utility classes were kind of where I first got deep into that sort of thing.

Then as I moved from project to project, or started working on new side projects, I found myself copying over all these base styles that I created for the previous projects, tweaking things here and there for the new project, because things like buttons maybe needed to look different, or forms needed to look different... And what I started to find was that over time I was adding more and more of these little helper classes to things like centering text, or doing some padding and margins, especially doing stuff responsively, which Bootstrap actually does in the latest version too, which is really cool, like being able to change the margin based on the screen size just as part of the class name... Kind of cool stuff like that.

\[08:03\] But what I found is as I kind of moved these styles along from project to project, the only styles that were really surviving, the stuff that I didn't have to change, was the more lower-level, closer to the metal helper utility classes. The stuff that was truly unopinionated about how the project was supposed to look. Then eventually, a buddy of mine, Jonathan Reinink, who I ended up working with really closely on getting at the first version of Tailwind, he had kind of like been noticing that I was building stuff this way, using more and more of these utility classes, and he wanted to give it a shot... So he wanted me to figure out a way that we could sort of share one codebase for our styles, and he could use it on his project, which looked completely different from the projects that I was working on... And that was sort of the forcing function that led to figuring out what's reusable and what's not reusable when it comes to this framework.

By the end of the day, we had to basically rip out things like form controls and buttons because there was no common ground. So all we were left with were these really low-level utilities, and figuring out cool ways to combine them and compose things out of them in HTML responsively, and do interesting things like that.

So we were kind of hacking on that together, because I was working on a project and he was working on a project, and we wanted to share the same CSS codebase for it... And he had never worked that way before. He had always been doing a more BEM-style approach, and he thought he was happy with that at the time, until he started doing things the way that we're doing with this sort of really early version of Tailwind, before it even had a name. And he couldn't believe how much more productive he was being, and he was really happy with the approach.

So we kind of worked on it together, tried to really polish it up and turn it into something we could release publicly, because I was doing a lot of these livestreams where I was building an app at the time... And I kind of was doing them because, you know, what I do for a living is I create courses and books, and stuff like that, and I thought it would be a good way to sort of put some free content out there for people who wanted to learn how to TDD with Laravel, for example, because that's one of the topics that I teach... So I thought "I'll do these livestreams, build this app with Laravel that I'm working on, people can kind of watch it and learn how I structure things on the back-end, how I do testing", stuff like that. But what was funny to me, that I didn't expect, was that all of the excitement around the livestreams and all the questions people were asking were like "What CSS framework is that? What CSS framework is that?" And I had never even thought about it as like something that I was gonna release publically originally...

**Jerod Santo:** Nice.

**Adam Wathan:** So that was another piece of motivation that led to "You know what, let's just open-source this. Try and polish it enough that people can use it." Yeah, so this whole time it was a Less framework, up until the couple ones before release... And I was just running into problems, trying to make it as customizable as I wanted to. One of the things Sass does a lot better than Less is you can do basic things like for-loops and create map structures and stuff like that. For generating CSS, it's a lot more practical, a lot more straightforward maybe, whereas in Less, you have to do everything with lots of really complex, recursive mix-ins, and stuff like that... Which is actually pretty cool, because it feels like you're writing functional code. It almost feels like something you'd be writing with Elixir, or something, but you're doing it in CSS.

But from just looking at it from the outside, trying to understand how it's all working, it's a lot more complicated. And I was doing things that weren't even really supported. They almost just like worked by coincidence... So it was getting me to a point where I was like, "There's gotta be a better way." So I started digging in in PostCSS and I eventually figured out how to port the whole framework into a PostCSS plugin, so I could write all of the code that generates all the classes using JavaScript instead of Less.

\[11:56\] Then what we ended up with at the end of the day is basically Tailwind is a CSS framework, but it's also really a tool that takes sort of like a design system specified in a big JavaScript object and basically transforms that into a giant CSS output... And it uses PostCSS to do that.

So eventually we got all that working with PostCSS. The codebase was way more maintainable, I could actually write tests for it, and stuff... Because it's not like there's a Less testing framework, or anything like that.

**Jerod Santo:** Right.

**Adam Wathan:** And then we put that out - I think it was like Halloween night 2017, and I've just kind of been picking away at it, slowly improving it ever since. I've been talking for a while, so I figure maybe I'll take a break, in case there's any questions about where we got to at this point...

**Jerod Santo:** \[laughs\] That's the awkward part about being a guest on a show, when you're so used to being a host on podcasts, as you're used to asking the questions and then listening, and then asking; you're not used to doing the bulk of the talk, so... I think there's a lot of things that we can dig into here, and I'm interested in many of them. I'll just kind of list off things that I think we can unpack and discuss.

First of all, you have this conversation which many people are still having, which is kind of a philosophical, maybe even a style-based conversation around the idea of utility classes, or what I've heard called functional CSS, versus more traditional, semantic CSS, with separation of concerns, which was touted for many years as the best practice, and many people still believe that today. So that's one topic that maybe we could dive into.

Adam, I know you -- Adam Stac, I know you have opinions about certain things; I don't know how firmly you hold them, but I think we could probably unpack that.

Also, I think it's very interesting that Tailwind itself is utility-based, but doesn't really provide, like you said, UI widgets or abstractions. It's very low-level, so I'm curious about the intended audience of that, versus the people who might wanna grab a Boostrap or a Foundation or a Semantic UI. So maybe we'll start with the opinionated conversation... And you wrote a post back in 2017 - we'll put it in the show notes - called "CSS utility classes and separation concerns." You put a lot of your thoughts in there, but even one thing you said is that writing CSS this way - and by "this way" I mean on your homepage you have &lt;div class="bg-white mx-auto mx-wsm shadow shadow-lg rounded-lg overflow-hidden", that way.

**Adam Wathan:** Yup. \[laughs\]

**Jerod Santo:** You said it was a pretty visceral reaction from a lot of developers, and you'd like to explain how you got to this point. So it sounds like this was an evolution for you, as well... Do you wanna speak to that?

**Adam Wathan:** Yeah, definitely. I think one of the things that happens a lot in these conversations about functional CSS is there's an assumption that happens a lot of times that I think is unfair, that someone who is using classes like "text-white" or "font-small" or something on an element, wasn't around for the days of like the font tag, and doesn't know what the problems are, and stuff like that... Or that's like the only way they can think of to style something, and that it hasn't occurred to them that it's important to have some layer of abstraction, and stuff like that... So I thought -- sort of my goal with this post was to document my journey, because I kind of started from the opposite end.

I had a very purist, deeply-held belief that my markup should be completely ignorant of how it's actually being styled and how it's meant to look... And for the longest time, I was writing Sass and Less the way that I'm sure everyone has seen on projects, where you end up with these style sheets a lot of the time where it's like a single Sass file for a single page of the app, or something, and the whole Sass file is just this incredibly deeply nested structure that almost mirrors the nesting tree structure of your HTML exactly, because you're trying to target everything in the HTML based on where it is in the tree, without ever having to grab an identified from the HTML, because you wanna keep the HTML as pure as possible.

\[16:09\] So what I was finding, at least with that approach, is that the idea, the whole point was that I was trying to decouple my CSS and my HTML. I wanted my HTML to be this pure place where there was no styling information and I could just slap on a different style sheet and style it completely different if I wanted to, like very CSS zen-gardeny... But I think the piece that's left out of that conversation is that when you're trying to write things that way, where your markup basically has no classes, and stuff like that, you're sort of doing a disservice to your actual CSS, because now you have to write the craziest, most tightly-coupled to your markup CSS possibly imaginable, right? Like, this CSS can only be used to style this specific HTML structure; that's the only place that it can be used. And this is like at the most extreme end, where you're literally trying to do nothing in your HTML to give any affordances to the CSS about what it can style and how it should style things.

So eventually this started to feel wrong to me. It kind of felt like "Why am I trying to make my HTML as clean as possible, at the expense of my CSS being this unmaintainable wasteland?" and the next step from that for me was discovering things like BEM, where you do use a lot of classes in your HTML, and the idea is this lets you sort of flatten your CSS more; you're not really doing all the crazy nesting, and stuff like that. CSS can just target, like profile--photo, or something, and it can sort of style it... The CSS doesn't really know how all the HTML is structured, where things are in the page, but you're giving explicit hooks for each little piece, so you can style it. And this did feel a lot better. Things were split out, and stuff like that. But what I found myself doing still is I was still trying to write my classes from the perspective that the HTML was in charge, so I would be naming elements in my HTML in terms of giving them classes; I'd be choosing the names for the classes based on the content. So I might have like a "sign-up form" class, or I might have like a "profile card" class, or like an "article card" class. Things that were specific to the topic of the site or the app that I was building. Then the CSS would -- you know, I'd have classes for profile card, article card, whatever, and sort of style them.

That was okay, but eventually I found myself in a situation where it's like -- there were lots of times where I'd have two things that maybe looked the same, but weren't the same content, or weren't used in the same context.

Imagine a situation where you have a sign-up form, and it has a button at the bottom. If you're trying to name all your classes based on what this thing is, what this component is, you're gonna have a class for that button that's maybe like "signup--button", or something, and you go and style that button. But maybe there's another place on your site with a button that looks exactly the same. So what you end up having to do is you see like, okay, there's a sign-up form, and then there's also this "edit profile" form, and they both use this button that looks the same. So I shouldn't have an "edit profile" button class and a "signup" button class that just has duplicate styles in the CSS; that doesn't seem very useful. And if I wanted to create another button on the site, I would like to be able to just re-use some of the existing styles. I think once you start going down that path, where it leads you is basically -- like, the correct thing to do is extract a new class that's sort of decoupled from the container. So instead of having a sign-up button--

**Jerod Santo:** Right, like a cross-cutting concern.

**Adam Wathan:** Yeah, it's just like a primary button. And now you can use that everywhere.

**Jerod Santo:** Right.

**Adam Wathan:** \[19:54\] And what I've found - to cut the story short, really - is that following that sort of trail and just keeping my mind focused on making things reusable, sort of just inevitably leads down this path where your CSS classes become less and less about the context or the content, and more and more about like "What do these two things have in common visually?" And eventually, it gets to a point where maybe you have one form that's in a card, and another form that's in a card, and previously you just had a sign-up form, and that had a box-shadow on a border radius, and a border, and that profile form has a border radius, a box shadow and a border, but to avoid that duplication, you end up creating a new abstraction that's like "card", and you just use the "card" class on both of those.

But I think the really interesting thing about this that people don't realize when they're going down this path and taking at these abstractions is that they're sort of making the decision to choose class names based on the visual outcome, the presentational outcome that they're trying to get, instead of the content. Because whether you realize it or not, what you're trying to do is you're trying to make it possible so that the next time you have something that looks like a card, you can just add the card class to it.

**Jerod Santo:** Right.

**Adam Wathan:** And what you've essentially done is you've made the CSS the source of truth for what your components are, and you almost haven't even realized it. If you were writing some HTML and you wanna add a class called "card" because you know you already have a class called "card" that makes it look a certain way, what you're doing is literally no different than saying that "I want to make this text red" and add a class called "text red." You're adding a class because of the way it's going to make it look, not because you're trying to add a class as a hook to then use to reference in your CSS to style that thing that you've added this hook to.

So there's a level of abstraction here that you can sort of choose where you wanna operate at. A card is obviously a lot more of an abstract concept than saying something like "text red", but conceptually you're still taking the same point of view that you're applying classes because you wanna change how something looks, not because you wanna create a hook that you can then hook into with CSS to directly style that thing. So it's like the HTML is choosing what to consume from the CSS, instead of the CSS consuming these class names or tokens that the HTML is inventing.

That was the important realization for me. When I realized that I was comfortable having classes like "card", it made me realize that I shouldn't be really uncomfortable with classes like "text center", or "margin bottom 4", or things like that, because I'd be applying them for the exact same reasons that I was applying a class like "card", if that makes sense.

**Adam Stacoviak:** So in the case of a card then, you're saying that when you thinking about Tailwind and the way it works, you would create a card class, give it its necessary layout styles, but you would then go back to the markup, and on that same div or whatever the property is, you would then add some utility classes to give it margin and other special things to sort of define (kind of like) layout stuff, not so much paint stuff... Is that right?

**Adam Wathan:** Sort of. The thing I sort of left out is that where I kind of land on this is eventually realizing that even things like cards were not a great primitive abstraction for the stuff that I was building, because -- you might have a card that has a medium box-shadow baked into it, right? But then you have a button that has the same box-shadow built into it, so now you have that same duplication in your CSS. And it's like, if I change the shadow on this card, would I also wanna change the shadow on the button? Probably, because it's probably part of my design system; like, what are my levels of elevation, and how those look, or whatever.

**Adam Stacoviak:** \[24:01\] Right.

**Adam Wathan:** So what ends up being a lot more practical is to just have a class to add that box-shadow. And I add that in both places in the HTML, and now I can just edit that class in one place and both of them change. You can do stuff for Sass placeholder classes, and weird stuff like that to do this sort of thing too, to an extent... But basically, I just found that things started to break down, and that I couldn't find any really good primitives that would survive from project to project that were any higher level of abstraction than essentially like single CSS properties.

The workflow in Tailwind is the opposite of the workflow that you would take traditionally, where traditionally you have something, you wanna style it, so you think of a class for it, you go to your CSS file, you type the class name, you type all the styles for it, and it sort of works.

The approach with Tailwind is you try and style everything in the markup as much as possible, with all the classes that Tailwind already provides for you... And it provides tons and tons and tons of classes, basically for every CSS property that you can imagine. It's at a slightly higher level of abstraction that just like inline styles, for example, because we don't have like "text 14 pixels", "text 15 pixels", "text 16 pixels." We have a typographic scale that maps those sizes to -- like T-shirt sizes, essentially: "text small", "text base", "text large", "text extra-large", stuff like that. And you can go and customize that scale to your heart's content. But the idea is we wanna give you just a little bit of abstraction, so that it feels like you're working within a bit of a constraint design system, but effectively you're still just editing single properties.

Anyways, the idea is if you want to build a card, you might start by just creating a div, and adding a class like "bg-white", because it should start white. Maybe you need some border radius, so you add a class like "rounded-lg", because you want large, rounded corners. Maybe you want a medium box-shadow, so you add a class like "shadow-md". Then maybe you add a class like "p4", because you want some padding around the whole thing, and 4 is the unit in the padding scale that you wanna use. The padding scale goes from 1 to whatever, and each number maps to a specific actual underlying value.

The idea is that you would literally just leave all six classes on that div until you've found yourself creating something else where you apply those exact same six classes, or maybe five of those classes, and you realized you were saying to yourself "Man, if I have to change this class on this element, I know for a fact I'm gonna want to change it on this element, because I think of them as the same."

**Jerod Santo:** Right.

**Adam Wathan:** So the solution with Tailwind there is not to go and create a class at the very beginning; the idea is you wait for duplication to happen, just like when you're writing real code, when you're programming - you wait for duplication to actually show up, and then you extract that duplication to avoid the maintenance burden. And there's sort of two encouraged paths to doing that in Tailwind. The truly CSS-driven Tailwind way to do that is using this feature of Tailwind called @apply, which is like a custom @ rule in Tailwind.

An @ rule in CSS, for anyone who's not familiar, is something like a media query is an @ rule. It's got an @ symbol, and then some text after it. @import is an @ rule, @charset is an @ rule... So in PostCSS anyways, which is what Tailwind is sort of powered by under the hood, it will parse your CSS and let you walk all of the @ rules or walk a filtered set of @ rules and manipulate those in abstract syntax trees.

\[27:37\] What we essentially do is we have this custom @ rule called @apply, and PostCSS doesn't know that it's not valid CSS, which is the whole secret sauce really to doing fancy stuff with PostCSS... But essentially we walk your CSS looking for instances of @apply, and what @apply does in Tailwind is it lets you say like -- you could create a class like "doc card", and then inside of it you would just say "@apply", and after @apply you would just dump a list of class names. So you might say "@apply bg-white p4 rounded-md shadow-md border-gray" whatever. So maybe you've got five or six class names there, and what Tailwind does in its processing step basically is it treats all those classes exactly like Sass mix-ins, and it takes the definition of those classes and inlines them into that card class.

So the workflow ends up being you have two cards in your HTML that have the same classes, and you think "Man, I don't wanna have to maintain these two lists in sync. I wanna create an abstraction." You basically just select all the classes and the class attribute, cut them, go over to your CSS, come up with a name - which is a lot easier now, by the way, because you have two instances of it and you can sort of think in your head "What do these have in common? What's a name that actually applies to both of these?" You come up with a class name like "card", you type @apply, you paste in the list of classes and save the file, and then you replace the class attribute on those two elements with "card" instead of that list of classes now, and now you've basically extracted a component class out of a list of utilities.

The nice thing is the whole thing is still built on that underlying design system that you've sort of been using for this site anyways, so there's no weird magic values or anything in there. You could add custom CSS, and sometimes that's necessary, but generally this workflow is just extracting these classes into a component class to sort of freeze them into this reusable unit, and then applying that in your HTML.

Then the other approach, of course, is if you're working on something like a React app or a Vue app or something, we already have primitives for reusable pieces of HTML which are components. So instead of creating a card class, you might just make a card React component, or a card Vue component. Then that list of six or seven utility classes is still only defined in one place - it's defined in that component, so you don't have a duplication problem anyways, so there's no actual pressure to even solve that problem.

**Break:** \[30:02\]

**Jerod Santo:** So what you explain right there sounds really nice. Just to give you a little bit of my experience - I consider myself not necessarily a full stack developer (like 90% stack) and if there's any of the stack that I'm not gonna do, it's gonna be authoring the CSS. A lot of times I find myself a consumer of CSS, so what you were talking about the semantic class names versus utility classes in your HTML, and the idea that the CSS is driving it, and you're basically trying to pick the correct thing in order to get it to look/work the way you want - I live there...

**Adam Wathan:** Yeah, exactly.

**Jerod Santo:** ...and anybody who uses frameworks spends their days trying to find...

**Adam Wathan:** Yeah, you already live there, no matter what framework you use, basically.

**Jerod Santo:** Yeah. Which is funny... One that I like - we use it on our back-end - is Semantic UI, which I just think has a really nice design I like for us available. It's kind of like ironically named now; I mean, it's probably a five-year-old project, because when he says Semantic UI, you think you're referring back to the semantic class names, but what it's really referring to is it's almost like guessable framework names.

Semantic is just none of like the really short utility names, but like "Call it a button if it's a button", versus a "btn". That's really what he's talking about. But at the end of the day you really are just trying to pick what I consider sometimes the magic incantation to make it look the way that you want. So if you have a button, it's like "UI red basic button". Well, you have a class name called "red", so that's basically a utility class at that point. There's no semantic in terms of contextual or content meaning to that.

The old purism and the idea behind semantic class names is like you're informing the computer what this is all about. So "red" is like a style concern, it's not a content concern. That being said, our systems aren't using the class names to determine these things anyways, so it's not as if they are parsing that out and using it.

**Adam Wathan:** Yeah. That doesn't affect how a screen reader works, or anything. Yeah...

**Jerod Santo:** I think a lot of us are using utility classes maybe without even thinking about it, especially people who consume CSS more than author it. That being said, there's still a lot of BEM out there today, and I think our front-end is in BEM... And I definitely feel you, in terms of like, it's working, it allows you some better scoping, and less like cascade issues, but you end up pulling out these cross-cutting modules or widgets, and mixing them in anyways. So it's kind of a hybrid style.

**Adam Wathan:** Yeah, and I think that's where things start to get messy, honestly. To me, it makes more sense to pick a side. Either you try and keep your HTML as restylable as possible, as ignorant as possible to what the actual underlying CSS is that's being applied. And if you're gonna do something like that, you don't want to reuse the same class from multiple different buttons or things like that probably, because who's saying another style sheet doesn't wanna change how those two buttons look, and make them look different from each other?

But the opposite version of that is basically trying to make sure no content semantics leak from your HTML into your CSS. So your CSS is completely ignorant to the content.

Maybe I've just moved from one purist approach to another purist approach, where I just either want to have pure CSS or pure HTML, and these days -- my experience has been that CSS is way scarier to maintain and grow and scale over time than HTML. Because everything in CSS is global, whereas any changes you make in HTML are really local.

How many times have you had that experience where you're working on a site, especially if maybe you're brought into a project that you didn't start on, but you have to implement some new piece of UI? The first thing I always did was and carve out my own little hole in the CSS file, where I could make sure that I was safe and I wasn't doing anything that messed with anyone else... But at the same time, I also had this anxiety around "Am I reinventing the wheel? Is that something I should be reusing?", but I just don't really know. So the approach that Tailwind tries to encourage is basically "HTML is easy, CSS is hard... So you worry about just working in HTML, where everything is predictable and works exactly the way want, and just assume that all the CSS is basically already written for you", unless you need to go and extend it with your own custom utilities, or extract a few classes here and there... But for the most part, that's like an escape patch, and generally you work in HTML, where everything is simple and straightforward.

**Jerod Santo:** \[36:23\] Yeah. I think what that leads to, especially when you're coming into a project or you didn't author the original CSS is this hellhole that we all live in, which is like the "append-only style sheet" style, where you never remove, because you're afraid of what you might be messing up; you only add. And you'd rather reinvent the wheel and add a few kilobytes than jack everything up. It's like the fear of messing up, or something; the FOMU, if you will. Not to be confused with FOMO. You just don't wanna screw it up, and you don't know it very well. You have to know it intimately to know exactly what you're supposed to do, and so we just keep it pending. I think that's really a systemic problem that many of us don't have answers to.

Now, on the purist from one side, purist to the other side - I've lived in both worlds, I've done some utility stuff, mostly as a consumer, and I can say that I think you can probably come up with pretty strong arguments either direction. If you are the purist on the semantic side, I think they have some compelling arguments; and on the utility side, I think there are some as well. I think where the utility stuff really shines with modern web development is what you mentioned at the tail end of the last segment, which is it lends itself really well to building components, which is more and more what we're building today.

**Adam Wathan:** Yeah, I think so. I think the strong argument for the semantic approach is if you're building something where theme-ability is really important, then that's gonna change how you author things, and that's gonna affect the names that you choose for things, for example. Because a class like "text read" is a really bad class name if it makes the text green when you apply a different theme, or something... And that's kind of like the classic argument.

**Jerod Santo:** Yeah.

**Adam Wathan:** But I don't think it's fair to say that "Oh, theme-ability is a concern that every developer on every project should be holding as a really important thing", because I have literally -- aside from working on maybe creating a theme for WordPress or something like that, I've literally never worked on a project where theme-ability mattered at all.

If you're working at GitHub and you're working on creating a GitHub UI, do you have to care about the ability for someone to be able to write a custom style sheet that moves the nav bar to the bottom of the page, or some weird stuff like that? That's not really a thing that you're concerned about. More and more we're building applications that are getting closer and closer to feeling like desktop applications than websites, and when was the last time that you needed to be able to theme a desktop application? Certain things yeah, like your mail client - maybe you can choose between compact more, or a more spread-out mode, or whatever... But a lot of the time that stuff is actually better handled these days by just reworking the component hierarchy based on someone's settings.

I think the new mobile Twitter app is a really interesting example of how a lot of the change to how something works or how something looks based on someone's preferences or based on their screen size is actually maybe better done in JavaScript than it is trying to do everything with CSS anyways. The way that the mobile Twitter app works - they don't even have media queries at all in any of the CSS, but it's still fully responsive... And the way that it's fully responsive is literally when the browser resizes, they're using the resize observer API and stuff to basically be able to see "Okay, the screen has gotten to this size. We pass that information to the React components, and the React components are querying that and checking, "Well, if the screen is bigger than this, then we wanna render these components. Otherwise we wanna render these components, in this order, or in that order", and you have so much more power when you're actually choosing like "How do we render the entire interface based on this information we have (the size of the viewport)?", compared to "How do I superficially style this interface based on that information?

**Jerod Santo:** \[40:31\] So you're saying that each component, or maybe just a certain parent in each component hierarchy is self-aware in terms of their ability to render based on the current viewport size, versus some sort of global-themed thing that happens?

**Adam Wathan:** Yeah, totally. You could imagine, you have this parent component that receives the current viewport size as a prop in React, and it basically says "If viewport size is greater than 600 pixels, then we render the desktop navigation component. Else, we render the mobile navigation component", you know what I mean? You have so much more flexibility. It's not just about "What CSS properties can I change?" You could literally change what interface is being created, you know?

**Jerod Santo:** Yeah. That's interesting.

**Adam Stacoviak:** It's interesting how that plays out, to put the logic there versus in the CSS, with media queries, and things like that.

**Adam Wathan:** I just think there's a limit that you run into, and if you're open to working in a way where you're comfortable offloading some of that workload to JavaScript, where you have more power anyways, then the theme-ability stuff really just doesn't matter as much anyways. You don't have to pick class names that are good for theme-ability, because you just literally render different classes, you know?

**Jerod Santo:** Right.

**Adam Stacoviak:** Yeah.

**Adam Wathan:** If someone has a red theme chosen, then you use "text red".

**Adam Stacoviak:** Well, the logic is removed out of the CSS, which is really a static language and it's not really for dynamics, which is why Sass or Less came into the picture - to start to put those kinds of things into place, because people wanted to program (for a lack of better terms) their style sheets. And in some cases generate, some cases reuse - you mentioned mix-ins earlier, and how using @apply pulls those classes in, very similar to a Sass mix-in.

What I find interesting about this subject is less like "There's one way to do it", and more like "Design is iterative, and building CSS or building visual design on the web is very iterative." Like you'd mentioned, you would begin with HTML by putting x amount of or whatever classes fit based on Tailwind, and eventually abstract that to a class, and so on and so forth... So what you find isn't like "It's a once and done", it's very evolutionary, very iterative, which also makes it very hard to say "Here's how you go right to point B." You kind of have to go to A.1, A.2, A.3 to kind of iterate your way to B, you know what I mean?

**Adam Wathan:** For sure.

**Adam Stacoviak:** And one thing about Tailwind too it seems to me is that it provides this underlying, kind of unspoken -- well, I guess in this case more of a spoken rule... CSS at large gives you no rules, but if you have Tailwind in place, you're adopting some of these principles you're talking about, then there's a set rule, or rules of engagement for building styles that you and I as team members on a style sheet building or front-end team can agree upon.

**Adam Wathan:** Yeah.

**Adam Stacoviak:** CSS by itself has none of that, and you're essentially saying "Here's at least some ground rules for us to apply to." These are things you're gonna use throughout various style sheets. Here's at least 1) a common naming theme for how you reference these things, and 2) here's what you and I can both use, rather than going to the bare metal of CSS values and properties.

**Adam Wathan:** Yeah, exactly. We're basically giving you a curated API on top of CSS, so that maybe we have like nine different font size on the site, or something - and even that is probably more than you actually need... But with Tailwind you're guaranteed to only ever have those nine font sizes every appear in your CSS.

One of my favorite things to do is -- have you ever seen the CSSstats.com tool?

**Adam Stacoviak:** \[44:26\] Yeah.

**Jerod Santo:** No.

**Adam Wathan:** Basically, what it lets you do is it lets you dump in a link to a CSS file, and it'll analyze it and pull out all the different colors that were used, all the different font sizes that were used, all that sort of stuff. I think it's created by Adam Morse, the guy who created Tachyons. It's pretty fun... What I like to do is I like to find style sheets from teams that I think are right at that right size where I bet you they're probably struggling with CSS maintainability, because they're probably a small team, on an app that's scaling... And it's not like you're working at Facebook, where every kilobyte matters that you're sending over the wire because they're trying to make it work on phones in third-world countries, and stuff like that, where they have a team that's like "Performance, keeping the CSS lean - we have that under control." There's a company size right underneath that, where the CSS is usually completely out of control, and you can find some of these apps that are great applications, but you put in the CSS file and you can see on CSSstats you get like "Oh, they have 71 different font sizes on their site", and it's all because people are like -- some people are using REMs, some people are using EMs, maybe some people are using pixels in some places, whatever...

And because people are authoring new CSS all the time, new magic values keep showing up over and over again... Whereas with Tailwind, that will never happen. You have all that stuff decided upfront, and you're just kind of applying that in HTML, which in my experience ends up being a really nice and practical way to work... Because you don't waste time trying to decide like "Alright, should this be a 16-pixel font or a 17-pixel font?" It's either gonna be 16 or 20, because those are the two options that are there; so you pick the one that looks better and you move on, because you sort of know that the way we style things is by applying existing classes, not by writing new CSS... Whenever possible, at least.

So it definitely leads to more consistent-looking user interfaces too, than what you'd get by authoring new CSS all the time. Unless you're being really careful. But again, I know so many people who are back-end developers who don't really have a good sense of design, because it's just not something that they've practiced or are super-interested in, but it's still their responsibility to add a new section to this forum on this site, and they don't have a designer to work with, so they've gotta do something. I think what we're doing with Tailwind makes life a lot easier for people in those situations a lot of the time.

**Jerod Santo:** So you mentioned Adam Mores, and I've been having déjà vu all over again during this call, because we did have an episode of the Changelog with him maybe a year-and-a-half, two years ago now. The author of Tachyons, which at least used to dub itself as functional CSS... A lot of similar themes here in this conversation.

**Adam Wathan:** Definitely.

**Jerod Santo:** Go back and listen to that, listeners; we'll put it in the show notes. He goes through his transformation to finding this, and what he was going through. So I'm curious - Tachyons is out there, version 4. Tailwind is out there... Can you compare and contrast the two, in terms of do they have different angles at the same goal, do they have different goals? Do you know Tachyons well enough to speak to it? What are your thoughts on that?

**Adam Wathan:** I sort of discovered Tachyons a little late, in the sense that I already had half the stuff put together... Because kind of like you alluded to, I sort of accidentally stumbled down the same path, and went from point A to point B sort of in parallel, a little bit later, but sort of on my own; I kind of landed on a lot of the same conclusions, although the third Adam that we're talking about here has done a lot of research into stuff like...

**Jerod Santo:** Oh no, I didn't realize that...

**Adam Wathan:** \[48:05\] ...a lot stuff like functional CSS performance, and a lot of interesting things there. And that stuff was mostly useful for me to go and look at after I'd kind of stumbled upon this philosophy myself and see it as sort of validation.

I think probably the big difference between Tailwind and Tachyons, the most obvious difference upfront - and some things in Tachyons have changed regarding this - is that I really wanted Tailwind to be really easy to customize, because I found that with Tachyons they kind of deliver it as a static CSS thing... Which is great for a lot of use cases, but if you need to change the colors, or you wanna change the type scale or something, sort of the recommended approach at the time that I was working on Tailwind was like "Well, you can always fork it and change stuff", which is totally valid... But I wanted to create a system that felt like it was more encouraging customization, or that there was like an idiomatic way to do it, with some guidance. That's why Tailwind has this config file that generates your CSS based on what you specify as "What font weights do you wanna use? What colors do you wanna use?", stuff like that.

Tachyons has a generator project, which is similar in a lot of ways now as well... Yeah, they are similar. The other difference I think is Tachyons tends to choose much more terse names for classes. I think if you have never seen an approach like this and you're used to working with Bootstrap or something, and then you look at Tachyons classes on an element, you'll be like "What the hell am I looking at? I don't know what this does." It's just like "br2 f5"... And Tailwind is a little bit more expressive in terms of what the class names are. They're longer class names, and they try to be a little friendlier.

Tailwind is a lot more palatable to someone who's already used to Bootstrap. It's a little bit more of a leap, but not too crazy... Whereas I think seeing the Tachyons class names can be a little bit off-putting at first. That said, the funny thing is once you get really comfortable with this approach...

**Jerod Santo:** The shorter the better, probably... \[laughs\]

**Adam Wathan:** ...I think you tend to want shorter class names over time. You almost want it to feel like keyboard shortcuts for CSS, or something. So I think there's definitely value in both approaches...

**Adam Stacoviak:** It just increases the learning curve though on the front-end.

**Adam Wathan:** Yeah, there's a different learning curve.

**Adam Stacoviak:** To get into Tailwind, I have to understand your reasoning for shortening, and then not so much just agree with it, but then just -- it's almost like Git. Every time I create a Git alias... I still wanna learn Git, I still wanna learn Git commands, and when I create aliases, it's great, except for "gc" to me may mean something completely different to you in your command line. For me it's "git commit"...

**Adam Wathan:** Yeah, for sure. Exactly.

**Adam Stacoviak:** ...and I actually append -m in the quotes, and it opens up my editor, and all that good stuff. So that's a practice I choose.

**Jerod Santo:** Right.

**Adam Stacoviak:** So I kind of agree with the terseness, but sometimes it definitely adds to that front-end of the learning curve.

**Adam Wathan:** I think it's good that there's multiple options out there for people. There's a lot of other utility bases as frameworks too, like turretcss or Basscss.

**Adam Stacoviak:** Have you considered making the class names changeable, too? Because you mentioned the config and being able to fine-tune colors, and stuff...

**Adam Wathan:** People have asked for that, and I'm still open to the idea. The one hesitation I have is I really like the idea of knowledge of Tailwind being pretty portable, despite the fact that the suffixes of classes can change, because maybe you change your type scale to be "Text 1, 2, 3, 4" instead of "Text SM, Text MD, Text-whatever." So it's already partially customizable... But I think if we made it fully customizable - first of all, I'm not convinced that most people would even touch the customizations anyways. I think most people want the decisions to be made for them and just to learn what the actual class names are. And then I think the other thing is it's sort of too bad if two different projects have completely different class names, even though they're technically using the same CSS tooling under the hood.

**Jerod Santo:** Yeah.

**Adam Wathan:** \[52:13\] It's nice if you can learn Tailwind and kind of memorize that stuff, and be able to apply it on another project. Maybe you have to learn a new scale, or new color names, or something like that, but for the core stuff to be as consistent as possible I think there's a lot of value in trying to shoulder the burden of naming for the community, instead of just off-loading that to everybody else. But maybe we'll still make it configurable to a degree, for the people who really want to dive into it. It already is, sort of... Tailwind has a plugin system; say you didn't like the names we used for our Flexbox classes - you could always disable Tailwind's internal Flexbox plugin (the one that ships with it) and just write your own Flexbox plugin that provides different class names. That's a little more effort than maybe just providing a map of what the old class name is and what the new one should be, and whatever... But technically, you can just use Tailwind as sort of a tool for generating CSS, if you just disable all the built-in stuff and replace it with your own.

**Adam Stacoviak:** I agree with your desire to make that one constraint be a constraint for everyone, because I think what may be underspoken here is the wisdom that comes from this. You built this out of the wisdom of many years of you building interfaces and websites and whatnot, and having had these same battles either just by yourself, with other team members, or whatever... So to leverage names that for you have made sense can help someone that's newer or getting more comfortable with CSS, or are jumping into style sheets - not having to rethink what you've already thought through, right? It's already pre-baked in a way, from that regard... Because, let's face it, naming things is hard.

**Adam Wathan:** Totally, yeah. That's the thing. People say they wanna have the power to name things, but I'm not convinced that they would actually enjoy it. I think the other thing is that the names -- it's important that they're pretty good, but eventually it just gets to a point where you've learned them and you're using them to accomplish a certain thing, and you don't really care what the exact characters that you have to type to get there were. There's like a threshold where a name is good enough, and this is something I've been battling with Tailwind 1.0 that I'm working on - kind of auditing the existing stuff and seeing like, you know, if I knew what I know now, after so many people have used it over the last year-and-a-half, would I have made this class named differently, or something? And that's been really hard, to decide when -- even if I think I have a better class name, it's like "Is it worth changing? Was that old class name actually bad, and is it worth creating a breaking change and kind of throwing people's muscle memory away?"

**Adam Stacoviak:** Any in particular you're struggling with, or recently on your list of "Oh man, I really..."?

**Adam Wathan:** Two of the ones that I've been battling with the last week, and I kind of made a decision on it earlier this week - for letter spacing and line height, we use "tracking" and "letting" class names. "Tracking" is the typographic term for letter spacing, and "letting" is the typographic term for line height... And we chose those originally because "line-height-loose" was too long of a class name. Or "letter-spacing-tight" was too long of a class name... Whereas "tracking-tight" is quite a bit shorter, and "letting-loose" is quite a bit shorter, while still not being totally cryptic... Although you do have to learn that terminology.

But those were two classes that I was revisiting and thinking "Do I really like that we're forcing people to learn these typography terms that maybe they've never heard before?" But I couldn't come up with a new class name that I liked better. I could do "lh" for "line height", or "ls" for "letter spacing." It felt like, "Yeah, that might be really easy for me, because I've been using it for so long", but I have to remember that one of the reasons that people feel comfortable trying Tailwind when they're already used to something like Bootstrap is that the names are a little bit friendlier. But I also don't want things to be super-long still...

\[56:08\] So eventually on that one, because I just couldn't come up with anything that felt like "This is obviously better. I can't believe I didn't name it this way in the first place", even if I could come up with something that felt 5% better, it feels like I have to take into account the breaking-changeness, and really give some weight to that, and I've just decided not to change them, because people have already learned them. People who have used Tailwind for more than one day don't care; they think the names are fine, and they have them in all sorts of projects anyways... So I've gotta be careful not to just break things for the sake of breaking them, as long as the naming is still past that minimum threshold of "It's a totally justifiable name", and it's good enough.

**Adam Stacoviak:** The good thing about breaking changes in CSS - the ease to fix them - is Find and Replace. Find and Replace still is an option, it's not terrible, and in most editors you can do Find All across many files, or even target a specific directory... So it wouldn't be the end of the world. I think the one thing you'd have concerns around is the learning, so once you've already baked it in. But even that... I mean, for me, I think some of these concerns around tracking and letting in particular is maybe in the documentation as you are learning it, explaining why you chose this name. Because half the reason why somebody may disagree is because they don't understand why you chose this equal ground to stand upon.

**Adam Wathan:** Yeah, that's a good point. I'll definitely take that into consideration, for sure.

**Break:** \[57:48\]

**Jerod Santo:** Well, let's change gears just a little bit and talk about you and your work... Because on December 28th of the last year you said something I don't think I've heard anybody ever say - you're going full-time on an open source CSS framework/utility library.

**Adam Wathan:** \[laughs\]

**Jerod Santo:** It's like, "Hm, full-time on an open source utility library...?" Tell us more.

**Adam Wathan:** Yeah, sure. So I am pretty fortunate to be in a position where I make a full-time living creating books and courses, like I mentioned before, and the nice thing about the little business I've created for myself is I don't have to trade time for money. I kind of grind on some new product, and marketing it and making sure that it's gonna do well, and then I put it out there... But most of my time during the year is kind of like R&D mode. I can just explore new stuff, work on stuff, look for new stuff to teach people, stuff like that. Because of that, and because in December me and Steve Schoger released this book Refactoring UI, which is a book and course for helping developers learn design, and that did phenomenally well, well beyond our expectations... Because of that, I feel really comfortable just basically not really focusing on making money for at least the next year, and just trying to get Tailwind 1.0 out the door, and trying to grow the community around it, and kind of put it out there as a really polished option for people.

\[01:00:02.19\] A couple of my friends - Taylor Otwell is a good friend of mine, who runs Laravel, and Evan You is a pretty good friend of mine, who created Vue... And what I think is really cool about what those guys have been able to do - they've been able to leave their mark on the web development world with a tool that a lot of people use and get value from and interact with every day, because that's the code that they're typing to solve problems for the company that they work for, right?

**Jerod Santo:** Yeah,

**Adam Wathan:** And I think - my hope is anyway - that I have an opportunity to do something like that with Tailwind, at least for the people that this sort of approach resonates with, where I can sort of really double down on it and put the time and attention into it that's necessary to make it feel like a really competitive player in the CSS framework space, I guess... And a lot of that isn't really about the tool itself and continuing to add features, or change class names, or stuff like that...

**Jerod Santo:** It's all the stuff around it, right?

**Adam Wathan:** It's all the stuff around it. Improving the documentation... I have plans to do a "Designing with Tailwind", a free video course that I wanna put out there... Maybe work on some more like opinionated Tailwind themes, layers built on top of Tailwind that give you a little bit more pre-built stuff... Because something that you've sort of alluded to before that we didn't really get into is who the target market for Tailwind is...

**Jerod Santo:** I thought we'd loop back around to that when we got to the full-time, because it seems like there's a missing layer on top, and even with Tachyons - he has a component library that he's building on top, which provides a lot of the stuff that a utility library wouldn't provide, but with the same opinions, with the same personality, and the same support behind it. It seems like a natural next step, just in terms of features.

**Adam Wathan:** 100%, yes. So I think there's an interesting opportunity there, to try and bridge the gap... The ironic thing about Tailwind is it's a CSS framework that prevents you from ever having to write CSS again (generally), but you have to be really good at CSS to really have good outcomes with it, because you really have to know how to structure your markup to make things go in the place they're supposed to be, how Flexbox works, how to be clever with absolute positioning, knowing that you have to set something to position relative for z-index to work - all these little things like that, that are not really abstracted away from you.

**Jerod Santo:** Right. The people that know that stuff are probably doing their artisanal CSS themselves most of the time, because they've spent all the time learning how to do it, so they can probably just start from a blank file.

**Adam Wathan:** Yeah, but I think there's still a huge group of those people that still love the idea of just being able to design in the markup. I think I fall into that category anyways. I think of myself as someone who knows and understands CSS pretty well, and can kind of make it do whatever I want it to do... But I still love the workflow of just living in the one file, typing at the classes to do what I want it to do, instead of having to come up with the name for something, jump over to another file, style it, jump back, apply the class, whatever.

**Adam Stacoviak:** The gymnastics is very fatiguing, let's just say... Especially if you're skilled. If you've done this a thousand times, the back and forth gets really old.

**Adam Wathan:** The naming is the brutal part. So anyways, like I was saying, I think there's still opportunity to bridge the gap a little bit more for people who don't have the CSS experience to really make Tailwind do exactly what they want without investing a lot of time learning it... So just trying to provide some more -- maybe some premium UI kits or something. And that's part of how I'm hoping to make the whole thing sustainable and being able to keep working on it, looking for opportunities to create pro stuff that I can charge money for, that can help me keep working on the community stuff and improving the documentation, and stuff like that. So we'll see what's gonna happen there.

\[01:04:12.09\] Me and my friend Steve, who did the design book with, have started exploring it a little bit, but we haven't got super-deep into it yet, because I'm still working on trying to get this 1.0 thing out the door. But yeah, I don't know - do you have any specific questions about the full-time thing, or any advice?

**Jerod Santo:** I would say both, maybe... I mean, it makes sense if your course work and the other stuff that you're doing, your product is giving you enough of a runway to do this... I think it's awesome. I think it's great that the natural desire is like "Well, can I just maximize my income by pouring myself more into these things that are generating revenue?" and so you're deferring that and saying, "Well, maybe there's a financial upside, and deferring that for now, and maybe Tailwind becomes bigger than anything that I could imagine on the course side...", but more than that, your goal is to -- I don't know, the old Steve Jobs, kind of put a dent in the Universe idea, of like "Well, let's make a real solid run at this", since you have the financial freedom to do so. I would just say that's awesome.

In my mind, I go back to Semantic UI with Jack Lukic, because he's struggled with this so much. That framework blew up. It was number one on GitHub probably for years, until -- what came around? Was it React? I can't remember what's number one anymore... Maybe Kubernetes. I don't know. \[laughter\] Very popular. He kind of - for a lack of more eloquent words - buckled under the stress of just the number of people... Like, the number of people using it was so many, and he's trying to figure out "How can I be sustainable?" And he's making a little bit of money over here, and he's doing consulting over there... It's been a long struggle for him, and so we can see what success can look like in terms of lack of sustainability. So I think it's awesome, first of all, that you're giving it a good shot... And it makes me wanna get on the Tailwind bandwagon, because here we have a person who has put years into it, and is gonna continue to put time into it, and love into it, and it's the thing that will persist, at least for a little while.

On the sustainability front - I don't know. Stac, it seems like you might have some ideas for him. Maybe you could--

**Adam Stacoviak:** I would say a plan B would make sense. I mean, a wise move would be a plan B.

**Jerod Santo:** \[laughs\] That's true. That's good advice.

**Adam Stacoviak:** I also see this like -- I can't imagine how long it would require you to be full-time on Tailwind. It might be just seasonal for you.

**Jerod Santo:** Sure.

**Adam Stacoviak:** Full-time for a year or two maybe.

**Adam Wathan:** Totally.

**Jerod Santo:** Give it a try, yeah.

**Adam Wathan:** Yeah, like a 2019 sort of "push it over the finish line", and then see what's next. I try not to think too far ahead, because every time I think I have the next three projects lined up, I'm always completely wrong. Some different opportunity or idea shows up.

I already have other things that I'd like to work on too, but I try to just not think about them and just focus on the thing that I know I wanna do right now, and kind of see where things are at after that. Worst-case scenario, there's things I need to do for my existing business anyways, like update courses when new versions -- like, I've got a Vue course. Vue 3 is on the horizon and it has some things that are gonna change how things have to be in my Vue course, so I've gotta re-record that eventually and relaunch that.

Worst-case scenario, the software industry is pretty -- you know, it's not too challenging to find a job if I ever had to, worst-case scenario, so... For now, I'm just gonna see what I can do with this thing, and have a good time doing it, hopefully.

**Adam Stacoviak:** \[01:08:02.17\] Have you considered any commercial opportunities with Tailwind? Not that you wanna take advantage of them of yourself... I'm thinking the easy one is just consulting or support around it. So if you've got designers who are freelancers, that could use some extra, and you have a support network, maybe that's something that businesses or corporations, or anybody who's using it that has some extra capital to spend on consulting or support, you can say "Hey, give us two or three hours of your time, or a certain product..." Productize something, say "Give me the leg up on this, aside from just the docs."

**Adam Wathan:** Totally.

**Adam Stacoviak:** Or have you considered anything? ...not just that idea, but that's just me spitballing.

**Adam Wathan:** Yeah, so one idea is to do these UIkit sort of things, where it's a little bit of a higher level of abstraction on top of Tailwind, while still giving you all the power under the hood, and maybe charging money for that. Not too different from Bootstrap's theme marketplace sort of thing; see what happens with that... Because I think Bootstrap has been pretty successful with that. I'd be curious to talk to someone who actually is involved with that on the day-to-day and find out if the numbers are as good as they appear from the outside... But there's other opportunities, too.

I know, for example, Taylor and Evan (Laravel and Vue respectively) both use Patreon sort of -- I kind of don't think Patreon is the right answer in terms of long-term sustainability, but what they really use it for is just a vehicle to sell basically ad space on the documentation, essentially...

**Jerod Santo:** Yeah.

**Adam Wathan:** And they both do really well from that. Evan is able to work totally full-time on Vue very comfortably from that, so that's interesting. There's perks you can offer to companies who wanna be involved in that too, like maybe to get a one-hour call once a month, or something, and you can sort of answer their questions or sort of give them some advice on things.

I think another interesting idea could be something like -- you know, people come into the Tailwind Discord or Slack that we used to have once in a while, asking if there's anyone who they can pay to build out a design with Tailwind, that they had done for them in Photoshop, or something... So maybe there's a way to create a network of people that I could sort of have vetted as like the Tailwind-approved implementers...

**Jerod Santo:** Right.

**Adam Wathan:** ...and maybe there's a way to sort of make some money there. So I think there's a lot of interesting opportunities. The educational stuff too, if I really wanted to, although ideally I'd like to just keep all that stuff totally free, because I think that's the best way to grow the community. But yeah, those are kind of some the ideas I'm tossing around right now.

**Adam Stacoviak:** The one thing you said around free was the video tutorials... Or what was that, Adam? I'm kind of scanning quickly, because you said the keyword "free". And you said something in your announcement of going full-time that it would be completely free... Oh, there it is. "Video tutorials will be completely free, and I'm hoping to have it ready around April or May." So you're in progress around some of this stuff, obviously, because it's not even March yet; it's February, as far as I can tell.

**Adam Wathan:** Yeah, getting 1.0 out the door, and then as soon as I know that 1.0 is good, then I think that's when it makes sense to really invest in putting together a really polished, high-quality educational resource, so that it's not out of date two months later, when I release 1.0, or something... So that's kind of the next big project, for sure. As soon as 1.0 is done, I've updated all the documentation and I feel good about that stuff, I'm gonna do this big video series.

One of the goals of the video series is not gonna just be how to use Tailwind, how to install it, what the features are - that stuff will be covered, too... But the real goal is more like some practical, recipe-style stuff. It's like, "Okay, let's build a responsive nav bar with Tailwind", and I would sort of walk through why we're doing it this way, and what these different classes do. So you'll sort of be learning CSS at the same time... To try and help people who don't have a lot of CSS knowledge be more effective with Tailwind really is kind of my main goal for that.

\[01:12:09.28\] So not so much just pure documentation stuff, but a lot more like "Learn how to build good-looking stuff with Tailwind." So a little bit of design knowledge in there, a lot of just understanding how CSS works knowledge, and then of course, how to do that stuff with Tailwind, too.

**Jerod Santo:** Let's talk about the state of 1.0 maybe, the state of Tailwind with regards to, you know, is the water warm? Should people hop in today? Should they go out to the website? Should they wait for 1.0? In terms of adoption, maybe hopping in and trying it out, is it worth waiting until you got finalized, or is it pretty safe to give it a shot today?

**Adam Stacoviak:** There's a couple things that are gonna change, nothing too significant. I've been really trying not to introduce breaking changes for literally no reason. The only things that are really changing currently are - the config file structure is changing, in a very superficial way though. I'm planning with 1.0 to basically ship a utility that could just let you pass on the CLI a path to your old config file, and it'll upgrade it to the new config file.

**Jerod Santo:** Nice.

**Adam Wathan:** So that'll be pretty chill, in terms of that. Other than that, there's not really any significant breaking changes. I'm just kind of going through and fine-tuning some of the default values. One of the decisions that we made for 1.0 - with sort of the 0.whatever versions that have been out so far, when you start a brand new Tailwind project, the first thing you do is you run this Tailwind CLI command; you do tailwind.init, and it creates a new Tailwind config file for you. It's just a single file, but it has Tailwind's entire default design system scaffolded out right there in the file... So all the default colors, the default font sizes, the default border widths - all that stuff is in there for you to add it and customize it as needed.

One of the decisions I made for 1.0 is to -- I kind of feel like that was almost cowardly, the way I was doing that, because I wanted people to own all of their styles from the very beginning of a project, because I didn't want to change my mind about our width scale, and then have that break people's projects when they upgrade it to the next version and some of the default values had changed, and they were sort of inheriting those from the default configuration... So one of the things that's changing for 1.0 is I've collapsed under that pressure and decided "You know what, it makes more sense for people to rely on the default design system that we provide." Instead of their config file being a combination of all the defaults plus their customizations and overrides, having their config file being the source of truth really for just the things that have changed; so the documentation is where you go to learn about how everything works by default.

If you've changed anything though, you can just look at your config file and see the 11 little tweaks that you made, or whatever... And it's not lost in like a big config file where there's no visual difference between what was the default and what was the customization. This way it keeps them a little bit more separated, but... A part of that means I'm shouldering more of the burden for making sure that the defaults are really good, because I want people to rely on them as much as possible. Because there's certain things that don't really have to change from site to site. If we give you a really good spacing scale for margin and padding, that doesn't have to change between two radically different designs. The things that are most likely to change between two totally different-looking sites are like the color pallet, the fonts that you're choosing, maybe what break-points you're changing things at... But really structural, under-the-hood things like what your type scale is, and what your spacing scale is - those same sets of values work really well on multiple designs. The thinking behind it mostly the same, no matter what site you're building.

So I think there's gonna be a lot of stuff in the default Tailwind theme or configuration that people shouldn't really have to change unless they really want to, but it's not gonna be required to change if you want to make your site look different than some other Tailwind site.

\[01:16:15.16\] All that to say - the other thing that I'm really working on right now is just fine-tuning all of the default values in Tailwind and making sure that I really feel good about the default scales and stuff that we're providing for people, and that I really think we won't need to change them. But that's not really a breaking change for most people anyways, because most people's configuration files have all of the values pre-scaffolded in. So if they're relying on a spacing scale that we change for 1.0, they can still upgrade to 1.0 and it won't matter, because they're already overriding it with the old values. So there's literally no reason for them to upgrade if the old values were working for them... But a lot of the time they've probably made customizations to decisions that I made that weren't that good, that I'm hopefully gonna make better now anyways.

So the upgrade process... All that to say - yeah, it will be really smooth. There's no reason really not to dive in right now. We're on version 0.7.4 right now. My plan was this week to get a 0.8.0, which would be sort of like a 1.0 preview... But that might not be till early next week, at this point. So yeah, I'm gonna get out a version pretty soon that's gonna look almost exactly like 1.0, and the idea with 1.0 is just I'm hopefully gonna retag an existing tag without changing anything, and just say "Okay, it's 1.0 now." I think that's probably the ideal way to do it anyways, but... Yeah, we're gonna be there soon. I originally promised it would be this month that we get 1.0 out. I think it's probably gonna be the first week of March now, because I'm gonna have to do a lot of work on -- not really a lot of work, but I want to improve the documentation. I don't wanna tag 1.0 without feeling like all the documentation is finished and polished... Because right now there's still a lot of pages that are not fully fleshed out, or there's topics that I'd like to get more into, and I'd like to do 1.0 as a little bit more of a splashy thing, and not just like "Okay, it's tagged, and it's on Npm, but none of the docs are updated yet." That seems sloppy.

Yeah, it will be out within the next couple weeks definitely. It's definitely still a good time to get into it right now though, and the upgrade process will be really painless.

**Jerod Santo:** \[01:18:32.12\] Very good. Well, any final thoughts from you before we call this a show?

**Adam Wathan:** I don't think so, man. Thank you guys so much for having me on to talk about this stuff. It's always a blast to talk Tailwind with people, and I've been a listener of the Changelog for many years, so it's really exciting to get my voice on here, too.

**Jerod Santo:** Oh, great.

**Adam Wathan:** That's kind of like a bucket list item sort of, for sure.

**Adam Stacoviak:** Nice, man.

**Adam Wathan:** Thanks again for having me on.

**Adam Stacoviak:** We've been fans of yours for a while too, so I'm excited that we finally crossed paths. It's super-cool.

**Jerod Santo:** That's right. Let me just promote a couple of our shows. So if you didn't listen last week, Paige Bailey on JS Party did an awesome job talking about machine learning and TensorFlow.js. Go back and listen to that episode. Coming down the pipe we have some awesome guests next week; Kball and Suz invite Ashi Krishnan. She's keynoting at React Amsterdam. Kball will be at React Amsterdam, so she'll be joining the show next week...

And then two weeks from this show we are having Chris Coyier on. Yes, we're gonna talk more about the front-end divide. We just can't get enough of that conversation, so that'll be me and Suz; Chris will be joining us, it should be an awesome one. So if you're just stopping by to listen to Adam, hey, give us a Subscribe, stick around; there's lots of cool episodes coming down the pipeline.

Alright, great show, guys. One last thing... We've added discussions to our website now, so if you have comments for Adam, if you have questions, if you wanna give us feedback on this show, open your show notes - there is a link at the bottom that says "Discuss on Changelog News." Click on that and you can fire us off a comment, or if you're on the website, Changelog.com/jsparty. This is episode 65, if I got that number right. Click on the Discuss link there, and we'd love to hear from you. That's our show, we'll see you next week!
