**Jerod Santo:** So we're here today to talk about functional CSS. I don't know what you guys normally write, mine's usually dysfunctional CSS... And that's my lame attempt at an intro joke. But functional CSS - a different way of writing CSS than maybe some folks are used to; definitely it was new to me when I first heard about it, but I think that's been gaining steam.

We're joined by Adam Morse, who has written a lot about functional CSS and has a framework called Tachyons. Adam, let's just start with maybe you telling us what functional CSS means to you.

**Adam Morse:** I was under the impression we wouldn't be doing hard-hitting questions... \[laughter\] I don't know if I've ever thought about that.

**Jerod Santo:** Okay... Tell us what it means to somebody else then. \[laughter\]

**Adam Morse:** For sure... Yeah, I think John Gold is the one who coined that phrase. Maybe not, but I remember hearing it from him for the first time. I had largely viewed Tachyons as kind of -- I don't know if they want credit at all, but it's really for me just smashing together Nicole Sullivan's work and Nicolas Gallagher's work, and kind of like pushing that as far to the extreme as I could.

Yeah, so functional CSS for me -- I don't know, I guess it's all semantic, but for me it really just has one function, and you understand the context of that thing, and it's always the same... So it's reliable and predictable in my world.

**Jerod Santo:** Okay. In 2016 you wrote a post "Scalable CSS." I believe you had taken a job at (I think it was) SalesForce - correct me if I'm wrong there, but a large company with a lot of active CSS, or legacy... A big project with a lot of CSS written, and you were going through the CSS theory, you wrote this post which a lot of people have referred back to when they talk about "Is functional CSS the way to go?" It sounds like it was very convincing, and it's a nice post; we'll add that into the show notes.

Tell us about that situation, what you found when you were tasked with either adding to or improving a large CSS and why that lead you to kind of continue down the functional path.

**Adam Morse:** \[04:31\] I think a lot of things happened at the same time, and I don't know if my memory is good enough or if I'm smart enough to know the causality or the correlations and where to separate them, but I was testing a lot of things at the time, and I was very against what was known as object oriented CSS. When I first started seeing code examples, I thought it was just an anti-pattern in relation to everything I'd been thought up to that point.

It was also about this time that I saw a talk by Christopher Joseph, who was working on Topcoat at Adobe. They had commit graphs for components that showed if the rendering speed was improving with each commit, which blew my mind. I was like "This is how I wanna work." When you make a code change, you get this instant feedback loop on if you made the component paint faster or not...

**Jerod Santo:** Wow.

**Adam Morse:** This just melted my brain, so I asked him out for coffee, and he sat and chatted with me and illuminated me on all these different ways you could test CSS performance. So I got set up with Telemetry, which was inside the Chromium build. It's just this testing suite where you can test a wide variety of JavaScript and CSS things.

JavaScript at the time was not of my wheelset or interest, but I was interested in learning more things about CSS performance. So I set out to write the mic drop blog post on why object oriented CSS was awful, and I just came up with all these code examples and they just painted faster than my examples that I thought were optimized for how CSS should be written.

**Adam Stacoviak:** Wow. So in the process of writing this blog post against something, that something changed your mind...

**Adam Morse:** Well, I don't know if it changed my mind yet. It taught me that it painted faster, but that's only one concern when you're authoring CSS, right? I was interested in the pure "What paints the fastest?" That was of interest to me for a variety of reasons. So I was convinced on that front... I mean, I had a lot of compelling data that said it was significantly faster.

**Adam Stacoviak:** It's a good start at least.

**Adam Morse:** Yeah, for sure. And over that time I was also working a lot with Brent Jackson (he goes by jxnblk), and he was really pushing me on design system values and kind of having cohesive measurement units in a way that was a bit deeper than I had been pushed before on that front.

We were exploring a lot of different systems and patterns there and kind of like testing them at various scales. That was also informing some of the work that went into Tachyons, but what happened was I just looked at file sizes of all these websites and it was just massive amounts of CSS, so I decided to put what I viewed as like an unreasonable amount of the CSS spec into a single file, just to see how large it was.

\[08:02\] That was what I was using to do a lot of these performance tests, and then I just started to build websites with it to run these tests and have data, and then just started to pair it down of like what I wasn't using, and that kind of ended up becoming Tachyons.

**Jerod Santo:** Very interesting. A few things grabbed me from that post that you wrote... I'll kind of paraphrase them back to you, and I just want your current thoughts on them. I'm not necessarily asking you to remember everything that you wrote back then, because it's been a year and a half, but one of the things that you said is that you found -- whether in that particular project or holistically over time is that cascading in CSS is the thing that's really the problem.

When we talk about scale - not necessarily performance, but we talk about scaling across humans, like how many people can work on this, you said that. And then another thing you said is that unlike other types of code with CSS, you're more likely to find the most recent code towards the bottom of the file, which I had never thought of, but resonated with me immediately... Because it's kind of additive; we just keep adding, we don't necessarily refactor or delete very often.

But you start with cascading as the problem; I think maybe we just inherently all think that that's probably true, but what do you find specifically is a problem with cascading?

**Adam Stacoviak:** What's funny about that though, Jerod, in this question is that that's the whole point of CSS. It's the first word in the acronym, "Cascading Style Sheets." So for the cascade to be the bad thing, we're essentially saying the core principle of CSS is wrong, but I'm interested as well in Adam's answer, so... I just wanted to put that out there, because that IS the first word in the acronym.

**Jerod Santo:** It's a feature.

**Adam Morse:** Yeah, so first off, I'm not very good at writing, so we'll put that out there. Second, I should probably rewrite parts of it. I think that in my experience there's a big difference between things that I like and then trying to scale something out. A lot of that blog post is kind of, again, against necessarily how I like to work, but I found when you work with like hundreds of people who often times you're not even ever going to meet, it's really hard to get every single person to understand the intricacies of a deep cascade... So what happens is they don't reason about it, and then things are just broken, and that's what you ship to your users, and then you have less usable software. And that makes me sad.

So the cascade's great; I think that teams I've found have much-increased velocity when it's a really shallow cascade, because you can't get rid of it. Even Tachyons has cascade in there; a lot of people don't realize it, but you still have the cascade at your fingertips. So it's not something that I'm against or trying to get rid of, but I've found that by flattening it or making it more shallow, it's a lot easier for beginners, it's more accessible for them to design and write code, which I've found is something that I aim for. The easier I can make it to onboard new people and make the entire process easier for people to get their hands on - that's a win for me.

**Jerod Santo:** It's interesting, I found a similar analog between the cascade in CSS and classical inheritance in an object hierarchy, where the deeper-nested that inheritance becomes, like you have leaky abstractions and you have unintending consequences - which is really the problem with the cascade... "Oh, I just wanted to change this thing. I didn't realize, or I never knew it would change this other thing further down." So a lot of people even inside talking about "How should you model your objects in your program?", they will throw out inheritance altogether as a tool that should be used, and that's really hard also, because you have to use composability, which is a good thing to use, but in the extreme it's actually less efficient to do code reviews that way.

\[12:16\] I found actually just having a very shallow inheritance hierarchy in programming is very fitting, and allows kind of the best of both worlds, so it's just interesting that you say you can't get rid of the cascade completely, because first of all it's encoded in the browser, so it's gotta happen... But if you just keep it shallow and thoughtful, without getting to deep, then you save yourself a lot of trouble.

**Adam Stacoviak:** So what's a good shallowness, like depth? Is it two layers, three layers, one layer? What's a good 'shallow' versus 'deep'?

**Adam Morse:** I think that's contextual. For me, Tachyons is the representation -- I don't know how many layers you'd call it (one or two), but I think whatever's successful for a team of people; they all know their strengths. I've definitely worked with teams where everybody who touched frontend code was a CSS expert, so I didn't really ever think about code architecture at all, because everything that we tried to do was easy to get done.

When that's not a reality, that's when you take a look at "Okay, what's tripping us up? What are people spending time on that they shouldn't spend time on?" So I don't really think that there's ten layers can -- ten layers deep is fine to me if that's manageable for you. The larger the team I work with, the shallower I want... Maybe one or two.

**Adam Stacoviak:** Yeah. You almost even make it component or module-specific, which is a growing trend these days, too. I've seen something recently with Webpack where - I can't recall what it was; we were gonna include it in Changelog Weekly, but for some reason it either made it in there and I'm lying, or it didn't, and I wish it did... But I recall it being something like in this vein here with Tachyons and functional CSS, where you want modules to be modules, and you kind of throw away the cascade. Maybe you use it within that module or that component, but that's about it. And even Webpack goes one step further and makes the class names for you, where you don't even have to think about that.

If you're a listener out there and you know what I'm talking about, send us a link or remind us what we read out there, because it was very interesting, and I know kind of wish I had it right here right now to put it in the show notes... And I don't, I'm sorry, but that's what it is. What do you know about that, Adam? Does that ring a bell for you, do you know what we're talking about?

**Adam Morse:** That doesn't ring a bell for me in terms of something I've read recently, but the trend is definitely there. I think the other part of these things is that the way JavaScript is working now, there are a lot of frameworks where even using something like Tachyons, you can still localize the component level, and it'll manipulate the class names and hash them out so that there are no collisions, and only inject the CSS that you're using.

So there's so many different options, even regardless of how your actual CSS architecture is, of how that gets included and encapsulated into a component.

**Adam Stacoviak:** Should we be specific too that like this conversation seems to be not for your general, run of the mill, My Blog website? This seems to be more for - as you say, Adam - teams, scaling CSS, scaling a design team. Does this matter or should this even apply to, say, a smaller website that is run by maybe one or two people at the most, that doesn't have what a application on the web might, or a web app, or a progressive web app, or something very more complex? "Very more" is probably not the best way to say it, but you know... Lots more. Very complex.

**Adam Morse:** \[16:09\] No, I think it's a fair question. I'll just say I'm biased; I built Tachyons for me and the people that I was working with, to solve the problems that I could see, but it's interesting to get feedback on how people use it, because it had unintended consequences both on my development workflow, and I think for others.

I think even for smaller websites for a lot of people, especially designers, there's a language that's fairly quick to grok, and it allows them to just design in the browser in a pretty fluid manner. It doesn't matter if they're building just a single component or an entire site, whether it's a page or a few pages of just static -- it could be a Jekyll build, it could just be vanilla HTML. Is that a phrase, vanilla HTML?

**Jerod Santo:** \[laughs\] Now it is.

**Adam Morse:** Can I coin that? Yeah, so I'm always surprised at how people enjoy using it. I don't think it's the best for styling content management stuff; I think there you kind of need to use unqualified selectors -- or unqualified elements in your selectors and kind of style things by traversing the DOM, right? And that has a bunch of pros to do it that way. Some people can affect the markup that they're trying to generate and have a lot of control over their CMS, so maybe it does make sense to use it there...

Sometimes people will try to use it in a way and I'm like "Yeah, it's not the best for styling blogs." I would definitely be the first in line to say that. It's always kind of pleasantly surprising what people like to do with it.

I know that Credit Karma was one of the first larger companies to use it in terms of like how many page views they have, and they've told me that they've had a lot of success being able to test multiple designs in parallel, and really do a lot of rapid changes to the UI. And that was what I set out to do - be able to iterate through thought as quickly as possible... And you know, for me, Tachyons was an implementation of that mental model.

**Jerod Santo:** Let's talk about Tachyons, where it fits into the landscape, so some people can have a frame of reference with regards to what it is as a thing. We've mentioned it's a framework, a tool for doing this style of building components on the web... People may be familiar with a Bootstrap or a Foundation or maybe a Semantic UI; does Tachyons fit into that category of a framework, or is it working at a different level than those?

**Adam Morse:** I don't know. I think those are definitely more complex in regards to they offer a JavaScript layer, and kind of interactivity of the components that Tachyons does not have, but I also know that some people just use the CSS of Bootstrap and none of the JavaScript, and just use the visual styles.

I think that they're similar, but definitely different. I think Tachyons is a little less out of the box in regards to having fully-baked components as a part of the CSS, but that was my long-term vision with creating the component library that's a part of the website... Kind of creating that in a different model. So it's not maybe out of the box in regards to you have components in the same way of just attaching the classes. I guess it's the same, but to me it was just like I wanted to give people the ability to cut and paste HTML examples or maybe React components or Vue components and be able to use those and just have a composition of Tachyons classes already put together.

**Jerod Santo:** \[20:03\] Surely there are drawbacks or downsides on any argumentation around how you should be doing things on the web, especially with CSS probably, well also with JavaScript, well anything that goes on in the web; I was trying to limit that, but probably all things are debatable online.

There are probably people that say "This is not the right way to do it. This is worse than the object oriented style." I'm not very familiar with OOCSS, but it sounds like it would be kind of like this, where everything's componentized. Then there's also BEM, and then there's (the traditional) what I usually do, which is like just start throwing styles out there until it looks okay, and then hope you never have to edit it again...

**Adam Stacoviak:** That's very common, by the way.

**Jerod Santo:** Yeah, it's... You just hope it doesn't grow big enough.

**Adam Stacoviak:** Which is why the new CSS is at the bottom.

**Jerod Santo:** That's right, you just keep adding until you're done, and then...

**Adam Stacoviak:** And you never remove, because the two CSS classes walk into one bar, and a barstool in another falls over.

**Jerod Santo:** That's right.

**Adam Stacoviak:** That's a quote by Thomas Fuchs.

**Adam Morse:** That's my absolute favorite CSS joke.

**Jerod Santo:** And with me, since I do client work, so I had different projects through the years, often times what I'll have is a client come back, everything's fine, but they just want one thing tweaked or changed or added, and I have to go back to CSS that I wrote a few years ago or somebody else wrote under my hire, and determine how will I do in hiding/showing elements back then, how was I doing these things, and then usually I'm just like "Well, I'm just gonna throw a "!important" at the bottom and be done with it." That doesn't scale.

But the people who say "Functional CSS is suboptimal for reasons X, Y and Z", what are usually the downsides that people quote? Or that you found as you've gone about using it. Surely it's not a panacea or a silver bullet.

**Adam Morse:** No, definitely not. I try to drown out the haters; it's depressing. I think one of the first things is it bloats your HTML, or that it's not semantic... Yeah, a lot of people say it's bad and don't really qualify it, which I totally get. I mean, that's literally what I first thought. I almost wouldn't trust anybody who did like it at first glance; I'd be like "What's wrong with this person?"
I'm the biggest fan of the people who are skeptical of it at first, and honestly, my favorite thing is to screenshot people who are like "This is awful!" and then use it for two days and then they're like "Oh, I've never worked faster", and you're like "Yup..."

**Break:** \[23:12\]

**Adam Morse:** What's familiar is like what's great, right? The more you practice with something, the more you're like "Oh, I understand this. I feel empowered."

Yeah, I think that different people like to work different ways, and I think that that's okay.

**Jerod Santo:** Let's take a couple of those arguments, though. You said one thing is it's not semantic...

**Adam Morse:** Yeah.

**Jerod Santo:** ...which definitely it's not. What you're doing when you're putting together a component, you're adding a bunch of classes to HTML that basically compose how that thing looks, or how it works, so you might have a -- people who are familiar with CSS frameworks, have done all these things... For you, with your grid, it's FL and then the class w-100, w-3rd, 2-25 - these are not things that computers can derive semantic meaning out.

**Adam Morse:** But regular class names aren't either though, right?

**Jerod Santo:** Tell me more, tell me more.

**Adam Morse:** Like, what meaning does the computer derive from news-title?

**Jerod Santo:** It's a title of a news...? I don't know, I'm not a computer --

**Adam Stacoviak:** I think it's less computer -- maybe I'm awful in this, but it's like speaking to the developer so that when you come back to it, if you wrote that component, I can define meaning as a developer from a class or a module based on some naming, whereas things are a bit more obscure when you just use w-whatever.

**Jerod Santo:** I think that's a good point. I think that we have two stratas here. We have the one where it's like the semantic folks with regards to micro-formats and all that; that argument around what I think Adam (Mores, the guest Adam) was referring to... Where it's like the computer is Google or whoever the bot's using inside actually deriving meaning that they're then applying in a useful way to your HTML... And then I was kind of playing devil's advocate and saying maybe they do, but I don't think we've seen tangible benefits from that.

But then the other side of that is like semantic meaning for humans. I think that one that you just mentioned, Adam Stac, I guess holds more weight with me. What do you think?

**Adam Morse:** I think -- Nicolas Gallagher wrote what I think is the best piece about CSS architecture. He's got a great quote - I don't have it in front of me, but he defines what semantic means. Generally, when people say "It's not semantic", what they really mean is "The semantics of this class name isn't derived from the content", because to be semantic is just to have meaning... And you know, "bg-blue" has meaning to a lot of people. Even before they've ever heard of Tachyons, they'll look at bg-blue and know that it's gonna set the background to blue, and that's a pretty powerful concept for some type of people.

A lot of designers can instantly grok the class names without looking at the definitions, and they'll even guess the presence of a class name without having read it. I think that that's when I get the most excited, when I can watch that happen in real time, because I've never worked in a CSS framework where that was true. Nobody could just guess that the news-title was in the CSS file, and they couldn't guess what it would make that element look like.

\[30:00\] So a lot of people, when they're designing in the browser, care less about the content semantics, because those can change, and often times you actually want different content fed into the exact same design, so that model starts to break down in regards to how do you reuse these things when the content that's gonna be pumped into them is of a different type. Do you just keep adding the class names everytime you need to declare a new type of content to be pumped into a module or a component?

I think for some people in their workflow or their architecture it makes more sense to segment out to visually semantic classes, but I don't think that they're not semantic at all.

**Jerod Santo:** That resonates with me and my experience when I've come to people who are using the style or a framework that I'm not familiar with... It just takes a little bit of initiation, and you can often times -- even though it's brief and you're like "Does that mean fluid width 100?" and it's like "Yeah, it does." So it is less semantic in terms of -- I guess less verbose or explicit, but ultimately, as a level-headed developer who's trying to do a thing, I'm gonna figure out what these things mean pretty easily. It falls into a framework, and once I understand the framework, I can then transfer that knowledge to the next project, and so on.

**Adam Stacoviak:** Yeah, once you get past the training wheels of any framework, regardless if it's the old had bootstrap or something newer and edgier like Tachyons, you've got some sort of learning curve that you've gotta get over, and I think this debate of semantics is sort of a move point because at some point it's gonna be semantic to someone. So your point, Adam, is totally spot on, because once you learn the naming scheme of Tachyons for example to do background colors, like bg-red, or all these different color schemes you've got here - once you learn that principle, you can sort of then guess your way into them or begin to anticipate, because you've got at least some of the things done, but you're gonna have to take some time to learn a lot of the stuff, like fluid width, like Jerod was just saying... But I'm curious, is Tachyons advocating to rather than write a bunch of styles, add a bunch of classes to HTML objects? Is that the way going forward for this?

**Adam Morse:** Well, I'm not very into the word "advocate", because I don't really bestow my findings on how other people should work.

**Adam Stacoviak:** Let's rephrase it then - how should someone use this?

**Adam Morse:** Some people say "I love mixing certain parts of Tachyons into components, and then mixing it with these more monolithic component classes", and they kind of mix and match to suit their needs, and they find a lot of success with that. That never worked for me, but that doesn't make me think that it's bad.

For me, now I am trying to abstract it out even more, and just have these saved components where I'm not re-writing the same things over and over again, because that's what I was doing even with Tachyons. You stop writing the same CSS over and over again, but now you're writing the same HTML over and over again.

For me, I've found a lot of success in just -- yeah, I could build almost anything with a pretty small set of classes by just composing them onto HTML elements. It was for custom animations and interactive stuff that I would have to write a lot of CSS. And it saved me a lot of time, and it also made the pages paint about as quickly as they could, so it seemed like a win/win for me.

\[34:01\] I got into it as a performance experiment, and it turned out to really affect my dev velocity in a way that I did not anticipate at all. Then it started to affect some of my teammates' dev velocity in a way I didn't anticipate. So that was all unexpected, and not really what I set out to do. But I don't know if I'd recommend doing anything I've ever done with code... \[laughs\] So yeah, it's definitely not something I'd advocate for, but I think more people have had success with it than I anticipated four, five years ago when I started this; I guess it was four years ago. Most everybody said it was the worst idea ever, so now it's very weird to even have a few people be like "Oh, I really like your thing", and you're like "Wait... What?!" That's very odd.

**Adam Stacoviak:** Adam, you've mentioned before about certain people who have used Tachyons and had an experience... You started this thing four years ago, and at that time people thought you were a little crazy for doing it, and over these years the trend has gone the way of Tachyons, essentially. Now, the people that have used this, at least based on Tachyons.io - Daniel Eden, Ian Storm Taylor, a favorite of mine, just because Wilson is so smart and had one of the most prolific talks at the Build Conference at least five years back - Wilson Miner...

These are not unknown or uninfluential designers. These are really influential people who have said phenomenal things. Let's not leave off Dustin Senos... So these are people that have given you quotes; I'm assuming you've got the right to say they said these things, so having known who they are and their influence in the design space, continue on that path of like who's used it and how they feel about it.

**Adam Morse:** Yeah, well I don't really wanna speak for them, but I will say that it was definitely a surprise when each one kind of privately chatted with me about using it and asked me questions about it. Sometimes I can tell they were experimenting and weren't sure how they felt about it at first... But yeah, to have them say even anything remotely kind or not super critical was really nice. It spurred a lot of interesting conversations with a few of them.

I'd have to say a number of them were people that I really look up to. I don't know how accurately I can speak about their experiences, but it definitely made me really excited.

**Adam Stacoviak:** Can I share a couple from the site? I don't wanna say Dan's, because Daniel Eden's is essentially a short love story, so we'll leave that one to the audience to go Tachyons.io and check it out... Scroll to the bottom where the page begins to turn green and you'll see what I'm talking about... But Ian Storms Tailor said "Tachyons has seriously blown my mind. Making landing pages responsive now is somehow actually fun?!" (co-founder of Segment.com). They're doing landing pages pretty often I'm sure at Segment to bring in new people to understand what they do and whatnot, but I mean, that's not a "Oh, it's pretty awesome", it's very "It's blown my mind!"

**Adam Morse:** Yeah, I hope he doesn't mind me sharing this story and I hope this isn't incorrect, but I believe he was actually working on a political site in the fall, and he needed to put a landing page together for it, and he had asked his front-end developer at Segment like "How do we do stuff here?" and the front-end developer was like "Use this thing that's based off Tachyons." So he looked into it, and I think at first he was like "Oh, this doesn't look right at all", and then started playing around with it and was like "Okay, I think I see what's going on here" and was just able to get done what he was trying to get done pretty quickly, and I think that that's why a lot of people end up liking it.

\[38:05\] Like I said, there's a speed that they can get to; they just don't have to think about a bunch of stuff and they don't have to type out a bunch of stuff they already know they need.

**Jerod Santo:** One of the other things you mentioned is that when you first started doing it people would have this guttural reaction against the style of CSS, and that started to change. Like Adam said, the trend has been moving more towards the style... I think we're seeing the benefits, especially as many of us still doing the traditional style CSS are pulling hairs out of different areas and trying to maintain sites that have existed for a very long time. It seems like some of that shift has been around the kind of React-ification of web development, with a focus on components with the moving of the CSS - or at least class things even into JavaScript... We have a CSS in JavaScript now, so it seems like the whole developer ecosystem is more open to kind of like taking our sacred cows out, behind the barn and killing them in order to find a better way; we're not holding on to what we used to consider the best practice.

**Adam Stacoviak:** We're not advocating killing cows here, by the way.

**Jerod Santo:** No, we'd never say such a thing.

**Adam Stacoviak:** Unless you eat hamburger of course, but otherwise...

**Jerod Santo:** Right. A lot of disclaimers on this episode. \[laughter\] Speak to React - how Tachyon fits in... One of the things you have here, in addition to the gallery of people using it, is you have this component library, which you're like "Off the shelf, grab the HTML, and you can just drop it in and use it." It seems like that would fit very well into building out a component with React, or a similar style JavaScript tool, so... Speak to that.

**Adam Morse:** My long-term vision there was like - most developers I know, if they have the discrete HTML and CSS they need to render, can port that to whatever templating language they're building, but that's often times the difficult part for them.

Also, I was trying to drive Jackson nuts, because he was doing a lot of stuff with React, and I knew that if I just built out like a ton of static HTML, he'd build me some design tools to help me out... Which is totally what ended up happening.

So yeah, I think that that movement is more towards this mental model of encapsulation and kind of keeping our sanity, having things be declarative and being able to predict stuff... So Tachyons is one of the things that I set out to do on the design system side of it in regards to the values that I chose, because that's separate than the CSS architecture; that has to do with the actual design part of it.

I wanted to set out to see "Can you make a whole bunch of different, disparate-looking website with the same CSS framework?" Could you make it so that people can't just look at it and go "Oh, that's Tachyons?" I really wanted you to be able to generate almost anything you could ever need, and I wanted to see how far you could push those bounds.

With React, I've been kicking around this concept that I have a bad name for, that I'm calling component API's, but there's probably -- I don't even know if it's an API, but Tachyons is just a sequence of values, but there's scales, right? So you have border radius, and you can have like 2 pixels, 4 pixels or 8 pixels or 16 pixels... And I feel like that's kind of a reasonable range of like things that you're gonna have for border radii. And you can also do the pill, and make it look like Twitter, and everything's a circle.

So what you can do is like kind of defined for each component, every single thing that you would ever style. For instance buttons, because buttons are easy to wrap your head around - I think it's reasonable to declare a font weight for a button, so that would be a part of the button styling API. You might wanna change the background color of the button, because they don't have the best default background colors, so you put background color in the API. You can set color, that's in the API.

\[42:13\] Now, on hover, I think it's also reasonable to change background color, so that's part of the hover API of the button... But I don't know if I've ever in my entire life hovered over a button and had the font weight change, and then be like "Nice, this is awesome! This is really, really great design."

**Jerod Santo:** \[laughter\] Nice!
**Adam Morse:** So you could not have that be part of your API. So for each thing that you do declare, you can style for the component; then you can either pass a single value as a default, which could be overridden, or an array of values that are okay... And you could pull those dynamically from a design system. If they're scales, you could just reference steps in the scale.

Then if you built your design specs this way, you then have basically a combinatorial math problem, and you could just generate what each one of these components would look like with all the possible combinations of the values that you're passing in for your design system, and that's the kind of generative design tooling stuff that I'm really interested in.

So how do you kind of take those root primitives and combine them in all the ways you would realistically want to combine them in...? Because I'm really lazy, so it would be neat to not have to build the same components anymore.

**Break:** \[43:52\]

**Adam Stacoviak:** I think the interesting thing here is that what you've done here is rooted in time to paint. So it came from this journey to discover speed, and focus on some of those things, and out of this has come Tachyons and all of these components, and as you've just mentioned, being able to generate a lot of these things... Everything from cards, to avatars, to buttons, to entire news articles that have really good design principles; that's a good place to start.

That to me is pretty wild, that the beginning of it though however was about performance and not just about, let's just say, develop user experience, or even usability of a framework or design principles. It was founded in the performance arena.

**Jerod Santo:** Perhaps even more pointedly is it was him trying to prove that this style was bad, right? I mean, that's the funny part... \[laughs\]

**Adam Morse:** Right, and what I learned is Nicole Sullivan is a genius, and I've never seen her be wrong. Yeah, I was also using CSSLint at the time, and it was yelling at me about some things and I was like "Is this true? Did somebody just make up these rules?" and testing multiple different frameworks and it was like "Nope, these rules are all definitely accurate." She has basically just been a constant voice of reason at the beginning of my career, as I was learning about CSS.

**Adam Stacoviak:** \[46:20\] Yeah. I wanna put my designer hat on for a second, because that's where I began, as anything on the web. That was my forefront, on the front-end side, but primarily HTML, CSS... Not really much JavaScript, but really the designer, the user experience person, and so I look at things like these components, collections and stuff like that and I think "Okay, how can I, as a designer, work with a team that plans to and wants to use Tachyons - or even its principles - and design around its constraints, essentially?" So how can I take the various collections that are there, but then also the ones that we can even dream of or build, and help my team make really awesome-looking stuff, and all they've gotta do is essentially either generate them or use the right classes, with the right numbers, and all those different things to essentially assemble this beautiful page?

The collections that you've got here - this is a particular component we're talking about - there's six different examples, all very similar code (or the same code) and very much different user interactions.

**Adam Morse:** I feel like there was a lot to impact there... I don't know if I --

**Adam Stacoviak:** Well yeah, it's not really a question, it was more like pontificating... I'm like "Designer hat - how does somebody...?" I'll ask \[unintelligible 00:47:38.11\] How does a designer looking at this, working with a design team to build an application or to use Tachyons, how do they go in and put their designer hat on and use the constraints of Tachyons in a way that allows them to design freely, but within the constraints that Tachyons plays out?

**Adam Morse:** Yeah. I mean, the word "constraint" I feel like has so many negative connotations... It's like less options, less power, whereas -- I don't know, there was a period of time where Jackson and I were working together and he used to kind of talk about this concept of smart defaults. He would point out lots of examples in life, even like mathematically... Something like more than 80% of people get like a medium coffee or what not, but yet every single time they ask you what size you want, instead of just defaulting to giving you a medium unless you say something else.

Yeah, so it was like "Okay, how much can you do with these smart defaults?" and through a lot of testing I found out I could do a lot of stuff, and that the teams I've worked with haven't actually felt constraint.

I think with designers it's always different. I think a lot of the tooling we're trying to build with Compositor is lending itself towards that workflow of defining a system, and then being able to work quickly within that system. Because even if you're a designer and you are bought into using a lot of the design system aspects of Tachyons, it's really hard in Photoshop or Sketch or Illustrator to just say like "Okay, these are my spacing scales" and snap everything to these steps on a spacing scale. We think that working within those constraints should be easier.

Some designers just feel really comfortable hopping into the code, they actually feel really empowered by it, but others don't necessarily like the value, so some people just completely customize it and just use the CSS architecture, and the designers kind of handpick the type of scales they wanna use and they make the scales with a lot more steps and with absolutely completely different values.

**Adam Stacoviak:** I feel like its a tough world for the designers to not be in the code. I'm not saying they have to be, but it's a tough world whenever a lot of what you do may be in a graphics program like Sketch or Photoshop or something like that, and you're not really playing a role in the implementation of the code that makes it real. That's a tough place to be in, because you essentially create a lot of roughly good ideas when it's just a graphic that you hand over to a team.

\[50:20\] However, Sketch is making a lot of inroads to turn that into code or to aid in the handing to developers. There's a couple other unique design tools that are doing similar things, where you can actually generate code or maybe even use principles from a framework like this, where you can essentially have that API or that brain, so to speak, to say "Okay, this is what I designed, and this is how it matched the actual code."

**Adam Morse:** Yeah, exactly. I've worked with some designers who aren't in code at all, but the way we were able to communicate, the way they design is at a fidelity of something I can't think through as quickly in code, so they were able to provide an asset with the documentation I need to implement something. But yeah, the reason I started coding was out of necessity, just because I was making images the first time somebody built something, and it wasn't looking like this image I handed off... I was like, "Cool, let's see if I can..."

**Jerod Santo:** "Cool, I'm gonna do this myself."

**Adam Morse:** Yeah, yeah. Let me get in there! Anyway, I can't decide if that was the smartest or dumbest thing I've ever decided to do.

**Jerod Santo:** One thing you mentioned, Adam, was Compositor, but we haven't quite defined what that is for the listeners. Can you tell us about Compositor and Compositor Lab that you've been working on?

**Adam Morse:** Yeah. Compositor started when Jackson and I, and this guy John Otander worked on CSS stats together. Jackson and I had launched a web app and we knew nothing about tech ops or DevOps, we knew nothing about servers, Jackson barely knew anything about JavaScript at the time, and this guy comes along and just starts refactoring all of our horrible code right away and making our website way more stable.

After I think the 10th amazing pull request in a two-day or three-day spin, I was like "Hey, do you wanna just own this project with us?" Then we all kind of got in a chat room, and... Yeah, every now and then we would do these sprints on CSS stats, and chat, and then sometimes we'd go dark for a few months. But then I started working on Tachyons a lot more and I was stumbling on trying to get certain things done with JavaScript in terms of like dynamic build things... So I asked John for help, and he started helping me out.

Jackson at the time was building lots of open source tools, everything from lots of different color tools, to his rebase library of stateless React components. So the three of us were all kind of still in the same chat room, and John and I worked together, and Jackson and I worked together professionally, but not a lot on dedicated open source projects...

That's just kind of been our relationship for the last 4-5 years, kind of all infecting each other's brain with ideas. John would listen to Jackson and I talk about CSS stats, and then he'll go off and build something crazy. He built a service to download the top million websites' CSS with snapshots in like one-month intervals, going back to 2005... So he has just graphed out the history of design systems in CSS on the internet, and it's just awe-inspiring to go through these graphs and just see these trends at this 10,000-foot scale. That's something we'll make public later; we still have a bunch of things to clean up there.

It's just a lot of fun working with them, but at the same time we all know that open source is difficult. There are things that we wish we could pay contractors to help us with, there are features that we totally want in that we don't have time to build, but we think are valuable, especially in something like CSS stats.

\[54:03\] And for our own work, it's like "How do you just make all of this sustainable so that people don't burn out? I don't know how many modules we have between the three of us.
So I think it was about this time last year when I set out to just say like "Okay, let's just make this a company and start to string a lot of our open source things together and build some apps and some design tools that nobody else is building, like the way that we wanna work."

I think Jackson and I have been together for five companies now. Most companies, big or small, have the same problems. Most places don't ship the result of validated design. One design stumbles across the finish line. It's not like you're keeping six or seven things in parallel and doing a bunch of different user testing. So that's kind of where our head's at, it's like "How do we create an environment where we can get the tools built that we wanna use to design stuff." So this Compositors, that's kind of what the company is about.

Our first product is Lab, and that's basically a tool where you can build React components from scratch, you can build the design system, and set scales for typography, for spacing, for color pallet... And then, as you're building out components, you can compose them together. And in your React app, we have a command line interface, and we'll also be releasing a separate app for this, but you can tweak values in your design system or edit things about your component and see them editing in real-time. You can drag sliders on border radius so you can change colors, and it's -- yeah, it'd be like if you could edit sketch symbols and see that update at the same time and not have to switch between artboards. That's always been my dream - to be able to edit things about a system and then see them propagate everywhere and know what's gonna render, and not have it be unpredictable.

I'm really excited about Lab, because I am not good at JavaScript or React, so it's helped me speed up my ability to build components and reason through that abstraction.

**Jerod Santo:** I always love to hear how open source hackers are trying to keep doing open source. So many avenues, so many of those end in failure, so hopefully Compositor is a success.

**Adam Stacoviak:** Well, financial failure...

**Jerod Santo:** Yeah... Well, failure at that particular effort.

**Adam Stacoviak:** Right.

**Adam Morse:** Yeah. I was gonna say, I feel like we're successful because we enjoy working together. I use the tools that we build to design stuff, and that's kind of the whole point, so we're pretty excited about what we have coming down the pipe.

**Adam Stacoviak:** Is Tachyons under the hood of the things you're doing with Compositor? I know you've got the Labs you mentioned, but on the homepage you've got projects, you've got even Zero -- I leaving off Compositor, because it's the brand prefix... So Compositor Zero, as a response of a kind of app you can use to build responsive pages, and it seems like Tachyons is behind the scenes here. Or am I assuming that and I'm wrong?

**Adam Morse:** No, I've always considered Tachyons to be like a modular set of ideas. This is the CSS architecture part of it, but that's just one implementation detail. I think the most important things are the aspects around performance, which if you could ship fewer than 16 kilobytes of CSS - which I think is the Tachyons entire build size now - you could ship two kilobytes of CSS; that would be nicer.

I like the values, the constraints of having a scale for spacing, for typography... So that stuff is under the hood. The same patterns of being able to target a breakpoint and set any value at any break point. Those are the underlying principles under the hood for the products, but most of the stuff is built with various CSS and JS libraries, so the actual Tachyons classes aren't being used. But to me it's the exact same, and it's a pretty fluid transition for me, to use this different architecture... Because all the patterns are still the same.

**Jerod Santo:** \[58:21\] The CSS stats tool, which I had previously never heard of, is very cool. I've been in the background, putting Changelog.com through your tool. It basically will throw out your size of your CSS, all the rules, how many selectors you have, so on and so forth... All the way down to font sizes, how many web fonts you're pulling in... Very cool. You said you have a lot of features; this feels like it's all open source stuff. Is this a thing that people could hop in and help out with, or is this limited to the three of you all? What's the situation with this particular thing?

**Adam Morse:** No, that's completely open. I'm actually doing some work at my day job - I work at CloudFlare, and we are working on a living style guide right now, where... You know, a lot of people when they do a living style guide kind of like present one site, but every company I've ever worked at has multiple websites. You might have a blog that's a different front-end codebase than a logged in app, then you have your marketing site that might have been built out of house, maybe you have a status page... But there are generally more than five to ten websites for even a small company, and so in the effort of having a feedback loop for a design system, and whether or not you're becoming more consistent over time, less consistent, or maintaining the same amount of consistency, we're using a bunch of CSS stats modules and then combining them with the Internet Archive's Wayback Machine, and we just have an array or a matrix of where the common values are.

So you can scrub the data over time and see "Okay, for these ten websites, these are the four font sizes that are present on all of the websites", but you can also see where you were wherever the back data is. That's something that we wanna open-source as a web app that anybody can use and generate an actual dynamic, living style guide for an entire set of URLs, which I think is kind of an exciting project.

**Jerod Santo:** Nice.

**Adam Morse:** But it's definitely all open source, so people can feel free to jump in and make it better.

**Adam Stacoviak:** So CSSstats.com is what we're talking about in terms of open source, or is this something future that you're working on? Or is it connected?

**Adam Morse:** It's just connected, and CloudFlare will probably actually run it as a web app and pay for all the hosting there... But they're just using a bunch of the modules. But yes, all of CSSstats, all the modules are open; there's a lot of powerful stuff that you can string together there and there's a lot of things that we just haven't had time to do.

CSSstats in many ways started out as our stab at making a rudimentary style guide, in a first pass of just like what's already available in this visual system. Especially when you're a new front-end developer to a codebase, that's one of my -- like, you can only read a CSS file so fast when you really just wanna see like "What are the colors here?", and I think that you can kind of make some agnostic themes and just run that as your own living style guide and be able to theme it with all your own company stuff, and kind of make it look however you want, but also toss in a lot of custom documentation with rationale and stuff like that, and maybe some fixed values that you also wanna document. I think there's a lot of work that people could do there, if they were so interested.

**Jerod Santo:** So just for the listeners - it'll show you all the unique colors, unique background colors, that kind of stuff, with the hex codes and everything. Just looking at ours, it's like "Yup, there's all of our stuff." It actually looks like it represents - like you said - kind of a style guide of what Changelog.com looks like.

\[01:02:08.16\] What would be really cool - so maybe this is like a "PR is welcome" type of an opportunity - is to have some sort of relation between where you stand with the rest of the world... So if you're trying to use it the way that I would, it was like "How can I optimize our CSS some more?" And it's like "Well, you have 138 font size declarations." That seems like a lot to me, but maybe that's like completely typical on a web app of this size, or something.

So like say "Well, this is like six times out of the standard deviation for font size declarations", or somewhere where you could say "Yeah, you're struggling here in relation to other people's websites" would be cool.

**Adam Morse:** Yeah, so that's one of the reasons why we downloaded stats from the top million websites, was to kind of get some of those numbers. We could look at averages, medians, means, and give some useful information. Because that was a big question of mine when I first started out doing stuff on the web; it was like "Yeah, this seems like a lot or a little to me, but what does everybody else...?" I remember just going around and being like "How much is too much CSS?" and people would be like "120 kilobytes", and now I'm just like "120 kilobytes is so much!", but at the time I was like "Okay, cool. That's just like a number."

I remember just like 50 kilobytes was like "Fine, that's nothing", and now I have -- I'm like "Well, we could have less than that, but it's also not as bad as some other websites." So yeah, it's definitely something we would love to have in there for sure, because I think it's useful information across every single CSS property.

**Adam Stacoviak:** I could be wrong, but it sounds like you know what you're talking about in terms of where you're trying to go with Compositor, what you're trying to do with Jackson and John, and even your work at CloudFlare; it seems like you know what you're doing. Am I wrong in saying that or am I right in saying that?

**Adam Morse:** I mean, I feel like I stumble through every day, so I don't know if that means I know what I'm doing, but...

**Adam Stacoviak:** What I mean to say about that - obviously it's a joke, but to say that like you're the kind of person we want doing the things you're doing, because you're innovating, you're pushing the boundaries, and you're shedding light in areas where people really haven't or aren't as much doing this... So my question for you really is like, if people are listening to this show and they're like "Adam's amazing. I wanna support him and his team or whatever he's doing in any way I can", how can they do that? Is it tackle some issues, is it step in on some different projects with you, is it financial? How can people support the efforts you've been doing for the last four years with Tachyons, but then also the future that you've shared here with us?

**Adam Morse:** Well, cosmically, I think, the best way is to pay it forward and just make it easier for more people to get into the industry and make things accessible... Even though I try to - as you said - innovate and be bleeding edge, a lot of it is in an effort to lower barriers between thought and execution for people of all technical abilities.

I think for Compositor - yeah, we are excited about this... We have probably five or six different apps in development that we've been working on for about a year now, so we plan on having a growing suite of tools that kind of work together, and we'd love if people bought subscriptions to them and tried them out if they're useful for them.

We think that they're gonna provide a lot of value, so we're excited to see where that goes. But besides that, I would just say contribute to the open source community at large, because there are a lot of people that you've probably never heard of that don't get opportunities, and if you just gave them money, we would have better things, right?

\[01:05:53.18\] One of the reasons I was able to do so much open source stuff was because of, you know, certain financial privileges, from being really lucky and at the right place in the right time in my career, and nothing to do with any talent... But free time and mental freedom breeds innovation, and so I think just finding junior people to invest in is like -- I was lucky people randomly invested in me, and I definitely wouldn't have gotten to where I was if people didn't do that.

So that would be the best way I think you can support me, is just by supporting the entire community at large... Which seems like a larger ask, but yeah... \[laughs\]

**Adam Stacoviak:** Maybe a little more direct might be the Available Now Compositor projects. A lot of listeners here are familiar with GitHub - I think so at least; maybe one or two haven't heard of it... But it seems like this is a beautiful, fast and simple GitHub project page, so many listeners who support open source, run their open source, maintainers, sustainers, a wide variety of listeners to this show, but is that maybe a good place to go in and sign up for that? Is that a free thing, is that a paid thing? Can we share some of that before we tail off the call?

**Adam Morse:** For sure. That's a free thing. The first thing we did - we wanted to get some user testing and we wanted to start experimenting with the patterns as we built this web app, to build project pages, like marketing pages for open source projects. Since then, we learned a lot from putting that out and we've kind of been heads down and building the infrastructure that we found we needed to really make that thing what we want to.

So we have big plans for that down the road, and we're basically working on all the underlying infrastructure right now. So it's still useful as it stands, but yeah, I'm excited about what in another six months that project is gonna be like.

**Adam Stacoviak:** And to give a little bit more context, it says "It's a free service for easily generating single-page sites for open source projects", which I'm not really sure what that means, "a service", but there's a Sign In With GitHub button there, so you can easily check it out, take that first step, and (it seems) use it for free, for now at least.

**Adam Morse:** Yeah, I can tell you that that will always be free.

**Adam Stacoviak:** Nice.

**Adam Morse:** Like I said, we just wanted to make something where we could start to get some user testing and then learn some things about building the type of generative design tools we wanted to with JavaScript. So yeah, we definitely wanna keep that free for the open source community, and like I said, we've been a little stagnant on updating it for a little while, but we've got a huge long-term vision to make that a really robust thing.

**Adam Stacoviak:** It's a smart strategy too for listeners too to earmark in the fact that you released something as part of this growing, budding company that has much deeper plans and much long-term plans to put something out there as a way to get QA basically, to get quality assurance or to get beta testers, so to speak, to see how the things you're building can be used or are being used so you can learn. It's a pretty smart strategy.

**Adam Morse:** \[01:09:02.28\] Yeah, it was really valuable for us. I think the more I get into my design career, the more I focus on testing things with real users and just watching them. Tachyons was a big part of that, too; I would just sit and watch people write CSS, try to use Tachyons, try to use other CSS frameworks, and some of the biggest things I've learned about product design or writing code have just been observing how people use existing things.

**Adam Stacoviak:** Well, Adam, thank you so much for all that you do, these many years of service to the community, and even your advice back to everyone, and the way to help you is to just level up, for the love of the game, the entire community. Thanks so much for your time today, man. It was great talking to you!

**Adam Morse:** Yeah, likewise. Thanks so much for having me.
