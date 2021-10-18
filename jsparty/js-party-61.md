**Nick Nisi:** Hello, and welcome to another exciting JS Party. I'm your host today, Nick Nisi, and I'm joined today by Suz Hinton...

**Suz Hinton:** Hey-hey! What's up?

**Nick Nisi:** And Kball.

**Kevin Ball:** I'm back! Again.

**Nick Nisi:** Welcome back. Today we're gonna cover a couple of different topics. We're gonna start with a great article on the CSS-Tricks blog called The Great Divide. Then we're going to talk about why 2019 is looking like it's going to be the year of TypeScript, and then we're going to give some shout-outs to people who are just doing awesome things in the community.

With that first topic, let's start right off. This is a blog post on CSS-Tricks by Chris Coyier, and it's talking about the divide in front-end development. Kball, do you wanna maybe give us a summary of what the article is talking about?

**Nick Nisi:** Sure. This is something we've talked about before, looking at the concepts or the separation between CSS and HTML/CSS-focused folks, and folks who are really JavaScript-JavaScript-JavaScript all the time, and kind of taking note of a -- he does something that Chris does really well, where he goes out and he just talks to or reads from influencers all across the industry, and he highlights that there's really this growing separation between folks who are very focused on JavaScript and perhaps very focused a little bit more on traditional engineering practices, maybe higher-level or more complex computer science concepts, and those who are in what you might consider more traditional frontend-focused areas where there's a lot of emphasis on semantic HTML, on CSS, on more user-experience-focused concepts, and that that historically may have gotten glommed together a lot. Your front-end developer was doing your HTML, was doing your CSS, was doing your JavaScript, but increasingly we're seeing this separation where there's JavaScript folks, and then there's HTML and CSS folks, and there's more and more differences between the two, and there's more and more frustration and conflict in the community over that difference.

**Nick Nisi:** \[03:41\] Yeah, I noticed that too, and I definitely see that personally with what I tend to work on. I definitely would consider myself to be more in the doing less CSS and HTML part, and doing more the logic and moving data around part, while still being on the front-end. But that hasn't always been the case. I've definitely done a lot with HTML and CSS, and I think that I can do a lot with it, but when I look at what has changed and what's coming in the CSS world, and even with markup, with semantic HTML, I often have to remind myself what semantic tags are out there, and what might be the best way to go about doing something in CSS.

**Kevin Ball:** I think there's a couple different aspects that we can look at here... There's this question of "Where is this divide coming from?" Is it due to the fact that the front-end ecosystem as a whole is getting much more powerful and expansive, so specialization is kind of resulting in this? Or are there other cultural aspects leading to it?

One of the things that I think about a lot is the relationship between design and front-end development, and I think that's a place where there are kind of blurred and shifting lines. There's always been some tension between design and development as a whole, and the front-end is one of the places where those two -- I won't say competing, but two groups with different priorities often end up colliding and having to interact... And that where those lines are, and what's considered design or what's considered development has been shifting and blurring and moving around.

I think increasingly we see designers who do work in HTML and CSS, and that has resulted in some developers saying, "Hey, that's not real development now", and I'm not sure how much of that is because it is a feeling of needing to make those lines clear, versus the fact that the paradigms are different... If you think about markup and CSS - those are much more visual and structural paradigms, rather that kind of logical and imperative paradigms... I'm not sure, but I think there are different angles that we can look at for where this might be coming from.

Suz, I'm curious what you have on this, as somebody who is kind of -- if I recall correctly, you started in the HTML/CSS world and have moved more and more into pure JavaScript... Is that right?

**Suz Hinton:** Yeah. I have a lot of feelings about this, which I'm trying to get in order, in order to actually be cohesive... When I read this article, I had a lot of feelings; I think that's sort of where it came from, because I felt that somebody was actually accurately describing something that I've seen on social media, that I've still sort of kept up to date with, even though I'm actually not a front-end developer anymore.

I even saw this in the last front-end development role that I was in a couple years ago, at the last product team that I worked on... I honestly think that it is mostly a cultural cause; it's mostly coming from people having different opinions, and also a whole bunch of cultural gatekeeping as well.

I think that some people think that certain roles should be designated to certain skillsets - you were talking about the designers doing HTML and CSS - and I think that most of it, in my opinion, honestly comes down to gatekeeping and people feeling super-defensive and overwhelmed with how much front-end development in my opinion has expanded. The article does address that it has expanded a lot, and given that a bunch of us who host on JS Party have very similar backgrounds to mine - I was basically a front-end developer for 12 or 13 years, so I've watched this actually change... And I think it's actually hard for me to understand the gatekeeping and the defensiveness, given that if you've been in the front-end field for that long, you've had a chance to get really good at HTML and CSS, and then when JavaScript became much more performant with the introduction of things like the V8 engine, you then thought, "Okay, well this is the new thing that I have to learn." Then when React dropped, and other front-end frameworks dropped, you were like "Okay, well this is the next thing that I have to learn."

\[08:17\] I think that people coming into the industry now obviously don't have that sort of slow gradient of learning, to the point where some of us have become full-stack engineers just as a side-effect of all of these changes, but other people coming in now have absolutely no idea whether they should specialize or whether they need to know absolutely everything.

That's my take on it. I think it's a lot of gatekeeping defensiveness and people feeling overwhelmed, but I really don't like this divergence; I don't like what I'm seeing being discussed on social media, I do not like people devaluing certain skillsets, and I'm of the belief that there should be more of us in the industry who know all of these things, rather than us diverging into specialization... Because I've seen the cultural issues in companies, even when we're having chats about features, where people are coming from so many different angles of front-end development that we cannot reach agreement about things like accessibility versus developer ergonomics, and things like that... That's what's been really disappointing to me, and that's where I've really appreciated having this article.

**Nick Nisi:** Yeah, I agree, and I too would like to see less of a divergence of these fields, but I'm wondering if the current state of frameworks and just JavaScript in general is kind of helping push towards that as we abstract away those things like HTML and CSS into a CSS-in-JS and JSX future... Is that what's pushing this divergence, too? Because then you're locked into the way that maybe these frameworks do things; and they are standardizing in different ways, but still, without coming to it from a programming background, it's a massive thing to undertake to learn that if you're not familiar with it.

**Kevin Ball:** I wonder how much of this is not actually a new divide, but rather a shifting in the lines of an existing divide... Because I'm remembering when I first started working in the web, there was very little -- I mean, jQuery was super-advanced; that was like "Whoa, we're talking advanced JavaScript here. jQuery - man, this stuff is cool!" and there was a divide already between the back-end engineers, the folks who were doing all of the intensive logic and all these high-level concepts and not worried so much about what the user interface looked like, and those folks who were thinking about things from a more visual and interaction perspective. There was a lot of debate and argument, "What's the right way to do interactions? Should this be valued or should that be valued? It doesn't really matter what happens on the front-end, so long as the back-end is right." That whole argument played out then, and it was happening between people who self-conceptualized as front-end developers and people who self-conceptualized as back-end developers.

Today, due to a number of factors, much more of the application logic is happening in what is now called the front-end, but is still logic code, not necessarily thinking about user experience or visualization, and we're having what sounds very similar in terms of interaction, but now it's between two sets of people who both identify as front-end developers, because now all of that user experience independent logic or various things is happening in the front-end.

**Nick Nisi:** David.Dexter in the chat points out that you used to have front-end and back-end, but now front-ends have their own back-ends, that are also in the front-end... And then a back-end as well. So things have gotten a lot more complex, and that definitely could be contributing to this.

**Kevin Ball:** I think it's worth looking at the different frameworks that have risen to prominence, and the ways in which they have their own cultures; they have the cultures that they're coming out of, and then they also have the cultures which have sort of sprung up around them in the open source community.

\[12:15\] If we think about our top three JavaScript frameworks of the day, we have React, Angular and Vue, and both React and Angular are coming out of companies that have a reputation of being very much engineering-first and engineering-driven... And not having as much emphasis - at least in the cultural side - on user interface, on user-centered design, on any of these types of things... And perhaps not coincidentally, the frameworks themselves are extremely complex in terms of the concepts required - especially Angular, but I think React as well; React has a lot of emphasis on pretty programming-centric, very CS-y concepts around functional programming and various other things that have (maybe intentionally, maybe not) fostered communities that exacerbate this divide.

If you look at Vue.js as the third of these, it's not coming out of one of those companies. In fact, the inventor is a designer - or was a designer by background - and I find that the Vue community has much less of this sort of divide, and it's much easier for designers in more traditional user experience and older-school front-end folks to get into, and the attitudes around it are a little bit different as well. So I think this is not necessarily something that is manifest destiny; this is something that is very much coming out of the cultures around these particular projects and the cultures that they are developed in and have continued to be developed in.

**Suz Hinton:** I totally agree with what you're saying there. I've definitely seen the same patterns just anecdotally, based on discussions, and things like that... I've also just seen outright rejections to learn something that is fundamentally tied to producing quality work as a result, if that makes sense.

For example, I know of developers who know React and all of the internals and how it works and all of these things, and I think it's great to sort of drill deep on something you really love and you're excited about, but you can use React mostly without knowing any of these things. The framework has been designed so that you shouldn't need to know details about the framework in order to use it effectively, and if you do need to know those details, then it sounds like the framework is not actually doing its job.

I guess what I'm saying is I see them drill deep on these topics, and I'm not sure where that personal motivation comes from; sometimes it's just they're really interested, sometimes they're trying to make themselves look invaluable, and that they know details, or it's just a way for them to feel like they know a lot of really technical stuff and bolster their feelings about them as a developer... But then I see these same developers outright reject learning something such as semantic HTML or accessibility concepts, or how to create manageable CSS systems, when that (in my opinion, because I know that these are all really just opinions at the end of the day) is very important to know, and it does inherently affect the quality of the work that you do.

So I'm confused as to why these cultural things happen, because a lot of the time it takes you away from the actual skills that have already been proven to be valuable in the field.

**Nick Nisi:** Yeah, definitely. So what do you see as a possible solution to this? Is there one even?

**Suz Hinton:** \[16:05\] I think what we're going through right now is because this landscape has changed so rapidly, I feel that we don't have an established set of best practices, and this is exactly what this article is getting at - "Do we need to redefine what a front-end developer is?" and you see those big diagrams people make just to sort of show the issue at hand, which is "Oh, these days you need to know all of these things" and they just plot out all of the logos of all the libraries and the different CSS things and things like that, just to show the sheer amount of things you need to learn. However, if we had something that is not specific library-based, but we had general foundational building blocks of front-end development - and we can even look at platforms such as Frontend Masters, or PluralSight, or any kind of education coding courses that try to break that down to the fundamental levels, then maybe we'll be able to establish a general idea of... You know, at the end of the day we're producing software for users, and if users are having a terrible experience using the software we're creating, then we're clearly not focusing on the right things. So I would rather we got more back to a holistic way of looking at it, rather than the developer ergonomics way of looking at it. I honestly think that even just looking at the current educational systems, they might actually give us some hints on where to get started.

**Nick Nisi:** I love that.

**Kevin Ball:** There's a concept that was very deeply embedded in the development of the web, that I feel like we've kind of forgotten as an industry, which is the principle of least power.

**Suz Hinton:** Yes...

**Kevin Ball:** And for those who may not be super-familiar with it, the idea is that we should use the least powerful language available to us that is sufficient to express whatever we're trying to do. So if we have something that is expressible purely in static markup, we should use static markup to do it, not a full-featured programming language that can then do it. If we have something that requires a little bit more, maybe it needs CSS because it's doing something, we should layer that on, and only do the things that we absolutely need all the power of a fully-featured programming language in that language.

The thinking behind this is what I think is commonly missed. The thinking behind this is the simpler the expression, the more tricks/analyses/other things we can do automatically with it. If you have something that is purely markup, the things that we can do in terms of statically analyzing that, and having machines do things to it, and transform it, and do all sorts of stuff is phenomenal. By the time you get to JavaScript, the amount of static analysis we can do and the amount of things that for example Google search crawler, or whatever - our ability to do things with that that don't require a human drops dramatically... And we've kind of gone around to another direction, where the industry at large is in a place of "throw as much power at it as possible." Templating languages don't let you do everything that JavaScript is, so let's actually wrap up all of JavaScript in something that sort of looks like a templating language and call it JSX, because you never know when you're gonna need all that power.

I think that is harming us along many dimensions, and it's creating -- you know, the other thing that the principle of least power lets you do is say "Hey, there's a whole lot of stuff that you can express without having to understand all of those different things as well."

**Suz Hinton:** Yeah, I definitely agree with that, and I think that the motivation behind this probably comes from trying to find that magic bullet. Also, if you are the most interested in JavaScript, you're gonna try your hardest to ensure that everything has to be done in JavaScript as a result, which is a flawed way of thinking.

**Nick Nisi:** \[20:00\] Yeah, I agree, but I'm wondering if maybe some of the thinking behind that is sticking to those barriers like semantic HTML and just straight markup... Is that the right approach, or are they trying to create an abstraction that will make it easier for doing all of this in an automated way?

**Suz Hinton:** Yeah, Nick, I think that that is definitely a part of a lot of people's motivations, for sure. I think what bothers me the most about where we've gotten to in the state of things is that the abstractions we're making are just dropping a lot of things on the floor, that have actually caused the quality of what it's outputting to be a lot lower than if we actually coded it ourselves, if that makes sense.

**Nick Nisi:** Totally.

**Suz Hinton:** And what I worry about is that we're gonna spend way more time debugging what it's output, because we didn't have that foundational understanding of what is actually quality output in the first place, if that makes sense. I mean, I'm just making this a very generic statement - I don't necessarily think that there are lots of framework authors or library authors out there who don't have the foundations of things like semantic HTML, for example... But if you do not have that foundation and you design tools that output things that have those gaps, that has a multiplier effect in our industry, and then we see just the general quality of things degrade if that's not done properly.

I'm excited about the idea of people trying to make this easier and trying to create abstractions, because making a webpage is actually complex; even if you are doing it with just HTML and CSS, there are a lot of things you need to think about. But I think we really need to step back and value a lot of the older crufts of the industry before you can actually start automating it.

**Kevin Ball:** The thing I wanna highlight on the principle of least power is something I'm gonna quote around from Tim Berners-Lee's explanation of that - he's saying the idea of doing this declarative form allows the data that you're putting there to be analyzed in ways that are never dreamed of by its creators. So by moving everything into JavaScript, we give the creators more power, but at the cost of taking away that power from other people who might wanna interpret that data... And that plays out very directly in things like accessibility.

If something is all markup, then somebody who cares very deeply about accessibility can worry about the right way to interpret that markup to make it accessible, and that can vary widely by device. Different devices might interact with that in a different way. When you move it into JavaScript, now suddenly the creator has to think about all the possible ways that somebody might want to read and access this data, and I can guarantee you that most creators don't have in their minds all of those accessibility things. I certainly don't; I don't deal with it every day. I'd far rather let somebody who deals with it every day be able to interpret my stuff and make it work well for them.

**Suz Hinton:** I agree with that. I think that some people don't have a full appreciation for just how beautifully HTML markup or XML actually works when it comes to these hidden details, and even just things that help them every single day... Even just browser hooks, such as being able to tap around a page, and things like that - all of that stuff is already there and working and very powerful, and I think that people will try and pave over that now, and it doesn't actually make a lot of sense to me.

**Break:** \[24:01\]

**Nick Nisi:** Alright, we're back, and in this next segment I'm going to be talking with the panelists about why 2019 just might be the year of TypeScript. Now, TypeScript has been around since 2012, I think, and I've been a big fan of it, but that's just been -- well, it's not just been me, but I've been a big fan and proponent of it for a while now. I wasn't always, but it seems like the end of last year and just the beginning of this year, TypeScript is just exploding, so I wanted to talk about that a little bit and see why that is, and what we think may be coming up next.

I think that the big thing that kicked off this year of TypeScript might have come in August of last year, when Babel added support for TypeScript.

**Kevin Ball:** Yeah, that definitely made a huge difference, because one of the things that was holding folks back... We had a conversation with Laurie Voss of Npm, and he sort of highlighted one interested thing - he said if you're using a build system anyway, maybe JavaScript isn't the language you wanna be using.

A lot of the value of JavaScript was you could just write code and it would just work, but by the time you're using a build system, maybe you wanna explore some other things, with some other additional power. Well, folks were using a build system, but it was Babel-based, and they didn't wanna lose some of the other things that they had from Babel... But once you could flip the switch, keep using your same build system, but start using TypeScript -- and I think TypeScript facilitates this by being very incremental... You can adopt just types, you don't have to adopt all sorts of other stuff; it's a superset of JavaScript, you don't have to refactor your whole application... This made the road to experiment with and using TypeScript so much smoother, so yeah, that was probably -- I mean, it would be interesting to see if there was a graph somewhere of TypeScript use, but I bet that was a kink in the curve.

**Nick Nisi:** Yeah. So kind of talking about what the TypeScript compiler does - it does three main things. It does the type checking, where it will look at your annotations and the types that it can infer, and then it will give you warnings based on that, if there are any. Then from there, it will strip out all of the type annotations, so you're left with just the JavaScript code, or the ES.Next code. Then it will transform that from tomorrow's JS to today's JS, or ES5, or somewhere in between there, and work.

\[27:54\] So what Babel adding support for this does is it allows Babel to understand and be able to strip out those type annotations during its build process, so that it can treat that like JavaScript code that it would run through Babel in any other way, but it's not doing anything in terms of type checking, so you're still relying on TypeScript, and specifically probably the TypeScript language service and plugins for your editor of choice for all of that... But it's doing all of that and it's enabling that through Babel now, so that you don't have to adopt a whole new build chain to be able to support TypeScript. You can just continue building things the same way that you've been building them, along with the way that you might build \[unintelligible 00:28:38.27\], or anything else, and run it through the same Webpack flow or Babel flow to get to the same result, but just with TypeScript instead.

**Suz Hinton:** It's so funny that you say that, because I had the opposite experience of how I got introduced to TypeScript, which was like -- the gateway drug for me was I wanted a one-liner, no-config transpiler... And I wasn't even writing TypeScript, because as you said, you can just incrementally ease into TypeScript, so I was just really using it to transpile my ES6 to ES5, by running just the TypeScript command. \[laughter\] Then I was like "Actually, this seems kind of cool. Maybe I'll just add some types." Then I was like, "Okay, yeah, I understand what a deeply thought out and high-quality superset this is now." \[laughs\]

**Nick Nisi:** But Kball, to your point with running a compiler anyway - that is pretty much what everyone is doing now, and that was the realization that I came to when I finally relented and decided that TypeScript was something that I would get behind... Because I was like "I just like pure JS. I want things to just run, and I want it to be simple and fun, but man, look at those cool ES6 features that are coming out. I really wanna be able to use those, too. So I have to run a compiler anyway." And then being able to add in those types - I didn't really understand why I would want those, because I just think of Java, and I hated working with Java... But when I saw it as less of a completely different language - because it's not; it's just JavaScript with types, and more of a way to self-document my code, and a way to make my editor smarter about what I was writing - then I really started adopting it and running with it.

**Suz Hinton:** What is the feature of TypeScript, as the actual superset itself - what was it that got you thinking, "Oh, okay, I get it, this is really nice"? Because for me it was interfaces, which kind of reminded me of C structs; the interfaces for me were what made me feel like immediately "My code is not only gonna be better organized, but it's also going to be better at self-documenting itself, too." But I'm curious about what it was for other people as to what got them into really liking it.

**Nick Nisi:** I think that when I first started playing with it, it was in 2013 - so that was before ES6 (2015) came out, and all of those features, so I think that when I first started looking at it was not something that I liked at all, because it had this weird module thing that they've since renamed to namespaces, that I didn't really understand. Then they had special ways of working with AMD code, or CommonJS, and it just seemed really weird to me. But then, when they started getting behind ES6 and the proposals in there, and going that route, things started to make more sense to me. And yeah, totally, interfaces were the thing that really got me hooked, and I think from a more direct route, it was being able to specifically state what a method should accept as arguments and what it's going to return. I saw that as "Wow, I can just document this, and it's like \[unintelligible 00:31:56.22\] but it's just in the code, and now look at all of these unit tests that I don't have to write." Because if I just rely completely on the type system warning me if I'm not passing the right things to it, then I don't have to worry about checking to make sure that I pass the right arguments.

**Kevin Ball:** \[32:14\] I have to admit I'm not actually using TypeScript yet. It is number one on my list of things to learn for the year, but I'm not using it yet. But I will tell you what triggered me over into saying "This is number one I'm gonna make the jump and start using it" - it was nothing related to TypeScript itself, really. I've been in what I think of as duck typed, or loosely typed languages for a long time; Ruby and Python and JavaScript are kind of my go-to's... And I've been working on a project (for not that long) using Go. And Go has types, and particularly for working in a project where I didn't build it from scratch -- and now I'm building a new one from scratch; but working in projects where perhaps you're expecting to bring in new folks, or things like that, the discoverability aspect of having types in there, and the ability to sort of "I'm working with a new library, that I'm not very familiar with, and it tells me when I'm using it wrong" - that's so cool!

It made the learning curve and the feeling of security without having to write a million unit tests much more powerful, and especially when working with things that are potentially hard to unit test, because they're working with third-party libraries and I'm still learning how those libraries are working - having those types in there just made it way easier to get started and be productive. So that got me thinking, "Hey, this duck typing thing that I've been so used to, and where I got frustrated when I was doing stuff with Flow, and whatever - maybe I should just bite the bullet and get over the learning curve", especially now that TypeScript, the recent stuff, they have an ability to do smarter things with functions that take multiple functions, and that sort of thing. This stuff is pretty cool.

**Suz Hinton:** \[laughs\] It's so funny, because it makes me think of -- you know, when you say this to anyone who is more used to strongly-typed language systems, you see them laughing, because we think this stuff is amazing, because we have never, ever had it, and it's like "Oh, my goodness, this feels so good!" And it is very funny when you do come into web development, or just programming in general through JavaScript, and then it's just amazing when you've never actually known a system like that before.

**Nick Nisi:** I was gonna say the exact same thing. My Java friends laugh at me when I'm like "This is the coolest thing! Look, it knows what I want!" \[laughter\]

**Kevin Ball:** But I think what is really nice about the modern era of typed languages - you know, thinking about things like TypeScript and Go and stuff like that - is that they appear to accomplish that level of support without the feeling of being strangled in a straight jacket that I always felt when I was trying to code in Java, or something like that.

**Nick Nisi:** Precisely, I totally agree with that. It's not like trying to take the static type system of another language and bring it to the web; it's trying to build a type system on top of a language that has never had types before, and allowing you to have that structure, but also to by-pass it when you really need to. But that's becoming less and less of a thing that you need to do, as types have been getting smarter, and things like conditional types and more complex generics have taken hold... It makes it really hard to justify using \[unintelligible 00:35:55.16\]

\[35:57\] So it seems like everyone's new year's resolution, with Babel now supporting TypeScript, and I think Create React App now giving you that as a flag, so you can start new projects with React in that way with TypeScript, I think that a lot of people's new year's resolution was to learn TypeScript this year, and it seems like a lot of the projects are listening as well.

There are three big projects that I wanted to highlight, that have announced that they're moving to TypeScript. The first one - and I think the oldest news - is Vue moving to TypeScript, so Vue 3 will be using TypeScript. But more recently, Jest is moving to TypeScript, as well as Yarn. I think that was just announced today. Those are two pretty big projects, that are both from Facebook, or have some origin at Facebook... Which is really interesting, because Facebook also has the competing type language for JavaScript, and that's Flow. So it's really interesting to see these two projects move in that way.

**Kevin Ball:** Yeah. And there was an article that I came across this week (that is going out in my newsletter) around someone moving from Flow to TypeScript. They highlighted a number of things, and they pointed out some places where Flow seemed better, some places where TypeScript seemed better, but the big thing that was showing up, and what I suspect is one of the reasons behind more and more of these projects moving to TypeScript, was community adoption and support.

The number of public types files in -- what's it called for TypeScript...?

**Nick Nisi:** DefinitelyTyped?

**Kevin Ball:** Yeah, exactly... It dramatically outweighs the number of existing public Flow stuff, which means that it's more and more possible to take advantage of types end-to-end, through not only your project, but all of the dependencies that you are pulling in... And that the community support in terms of people being able to help you out if you have questions is much higher. It seems to have reached critical mass, and that brings a whole slew of benefits in an of itself that Flow may have never gotten to.

**Nick Nisi:** Yeah. And in that article it has a link to a comment on Flow about having public milestones, and a Facebook developer responds to that with noting that Facebook has been very inward-facing with Flow, and working on performance, and hasn't really been keeping up with the full-time job of community engagement and understanding, whereas TypeScript, like you said, has taken over with its community support, and the third-party typings available has just skyrocketed... And I think that's defintely DefinitelyTyped that has facilitated that, but also the adoption of that through the @types Npm user that TypeScript uses to make it easier to pull in those types automatically.

**Kevin Ball:** I saw Laurie Voss tweeted a teaser, essentially... In some talks last year he was highlighting that 40%+ of folks responding to the Npm Survey were saying they were using TypeScript. Well, apparently, in the next survey, which is not yet published, but has been taken, that's up to 62% of users who respond to Npm's survey are using TypeScript in some form or another. That's incredible penetration.

**Suz Hinton:** That's much higher than I expected it to be, for sure.

**Nick Nisi:** And we've seen similar numbers with things like the State of JS Survey, so it's definitely not an anomaly there. TypeScript adoption has been skyrocketing and going up, but now we're seeing more prominent -- with these projects going to TypeScript, we're seeing more support for that and people getting behind that, so I think it's less likely that TypeScript is going anywhere any time soon, which is great news.

\[40:10\] But then we're also seeing native TypeScript support being added to possibly the future of Npm. There was a tweet by @maybekatz on Twitter about tink, which is the proposed next-generation CLI for Npm, supporting TypeScript out of the box. So you can just point it to a TypeScript file, and with no configuration it will be able to run that.

**Kevin Ball:** Yeah, and I think this is penetrating into folks' consciousness. I wrote at the beginning of the year a "What should you learn in front-end development post?" and I had TypeScript as my number one, and I think if I had done that two years ago, people would have laughed me out of the house. It would have been like "What are you talking about? Why would I learn TypeScript?" This year, that was probably the most viral post I've written in a long time. Folks were all about that.

So I think this idea that if you're not using TypeScript, you should be using it soon, you should be learning it - it is starting to become just what people do.

**Nick Nisi:** Yeah, exactly. And I think that another thing that we've learned from surveys is that VS Code has just skyrocketed in popularity as well. That's built with TypeScript, and it uses TypeScript for inference on TypeScript projects and JS projects. So it uses that language server built in... And I think that that might be contributing to it as well, because it's kind of free marketing for TypeScript. When you bring up your JavaScript project in VS Code and it starts giving you hints on things that it's trying to infer, it's just kind of giving you a small taste of what your TypeScript future could be, which is kind of genius marketing, I guess.

**Kevin Ball:** Though of course you can integrate that TypeScript into other editors, and if you're like me and you steal Nick Nisi's Vim config, you get it for free. \[laughter\]

**Suz Hinton:** I'm team Vim too, that's why I laughed.

**Nick Nisi:** Why didn't we talk about Vim on this episode...? \[laughter\]

**Kevin Ball:** But you noticed what I did there, I brought it in.

**Nick Nisi:** Yeah, definitely.

**Suz Hinton:** We could have a "Top Vim plugins for JavaScript development" as a segment maybe in the future.

**Kevin Ball:** \[laughs\]

**Nick Nisi:** So many opinions...

**Kevin Ball:** And we should probably survey the users, as well. I think the penetration of Vim among the panelists is probably way higher than among listeners, but... I could be wrong. I could be wrong.

**Nick Nisi:** Suz, are you currently using TypeScript right now? I'm actually not sure.

**Suz Hinton:** It depends on "Are you currently using TypeScript right now?" - that's usually a complicated question for me, because I don't work on a product team anymore. I'm actually in the process though of rewriting an old JavaScript hardware library; it was actually one of the first libraries I ever wrote, so it was not fantastic code... So it's been a dream of mine to rewrite it, just to see how much I've learned since then. But I thought that it would be perfect for me to also rewrite it in TypeScript, because in hardware things have to be very exactly correct at all times - it is very unforgiving - and I feel that TypeScript would give my code and my functionality in the architecture the structure that it really needs, so that I can maintain this library a lot easier going forward.

So I'm very excited to do that... I'm sort of breaking things out into modules, I'm creating a billion interfaces because of the different signatures and shapes of different payloads that you're sending over to the device, and things like that. So that's been really exciting, and probably not the first use of TypeScript that comes to mind for a lot of JavaScript developers, but again - I'm usually the edge case here, so that's how I've been using it recently.

**Nick Nisi:** Very cool. So do you see yourself using it more in the future, in 2019?

**Suz Hinton:** \[43:57\] Yeah, I would very much like to. I'm mostly doing this specific TypeScript project because it's low-risk; it's just sort of once I'm happy with it, then I will be re-releasing a new version of it. I'm really doing it to teach myself TypeScript on a deeper level, where I don't have a hard deadline to hit, if that makes sense. So yeah, I'm basically doing this so that going forward I will just automatically write all of my JavaScript in TypeScript hopefully, going forward.

**Nick Nisi:** And Kball, it's on your "Things to learn in 2019", so I assume that the same goes for you.

**Kevin Ball:** Yeah, it's on my "Things to learn." I will probably start with doing a play project with it, rather than trying to pull it into one of my client projects whole hog, that's existing... But yeah, definitely it's something I anticipate by the end of 2019 most or all of my new projects will be using TypeScript.

**Nick Nisi:** Nice. Same with me, but that's been the same for a while, so... \[laughter\]

**Suz Hinton:** I feel like you're the TypeScript person out of all the hosts on this podcast, for sure.

**Nick Nisi:** I'm constantly trying to make it a TS Party. \[laughter\]

**Kevin Ball:** You already have a TS Party...

**Break:** \[45:14\]

**Nick Nisi:** And we're back! For this third segment we thought we would shout-out to some of the people who are doing amazing things in the community, and deserve to be recognized. So with that, Suz, do you wanna go first?

**Suz Hinton:** Yeah. My friend Monica joined the Magenta team at Google recently, and I just think she's one of the most brilliant developers, because she knows so much stuff about so many things, and then on top of that, she's incredibly good at producing really interactive and very delightful experiences. Herself along with the rest of the Magenta team at Google have been creating some awesome demos. And just so you know, Magenta is basically like a JavaScript machine learning project that has been made at Google.

If you go to magenta.tensorflow.org/demos, they have some really cool stuff that people have made, and then there's also a bunch of stuff from Monica as well, because she's kicking butt... So I wanted to just give a special shout-out to Monica and the rest of the lovely folks at Magenta, if you wanna see cool machine learning demos in the browser.

**Nick Nisi:** Very cool. Yeah, and Monica is @notwaldorf on Twitter?

**Suz Hinton:** Yes, exactly.

**Nick Nisi:** I have not heard of Magenta, so I'm really excited to look at this.

**Suz Hinton:** Yay!

**Kevin Ball:** Yeah, I hadn't either. That looks interesting. Do you wanna call out any particular of the demos she's done, or...?

**Suz Hinton:** Yeah, I really like Tenori, which is basically generating drum sequence patterns when you hit Improvise. Also, Magic Sketchpad is really cute as well. I think that's using David Ha's work, who was working on basically training a model how to actually do sketching based on thousands of human sketches fed into the system.

**Kevin Ball:** \[48:20\] Awesome. Tenori was the drum thing... And what was the other one after Tenori? I was trying to find Tenori.

**Suz Hinton:** Yeah, it was the Magic Sketchpad, which is at the top of the Featured.

**Kevin Ball:** Alright. Yeah, these are cool. Awesome.

**Suz Hinton:** I think the whole goal of Magenta is to show the more creative use of machine learning. I know a lot of machine learning has been used for things like profit, or surveillance, and things like that, and I really like that the idea - trying to bring this more over to the creative side of things. I'm a huge fan of creative coding, so I think that is really cool.

**Nick Nisi:** The Sketchpad is so fun.

**Kevin Ball:** Yeah, I've gotta turn it off, because otherwise I'll be too distracted for the rest of this call. That looks really cool, I'm gonna definitely check those out!

**Suz Hinton:** Awesome! Who's next?

**Nick Nisi:** I'll go next. The one I wanted to call out was Dan Abramov. He is very good at teaching things, I think. I think that I first watched his Redux videos - he basically has you build Redux from scratch in a series of short videos, and it was really great... But he started a blog called Overreacted.io, and it's just really great - really great writing, a lot of information that's very informative and very educational, that I've learned a lot from... And I particularly liked his "Things I don't know as of 2018." It was just so nice seeing somebody like Dan calling out all of these things that he doesn't know. Because we have this celebrity in JS, it's good to see that there's a lot of things that he doesn't know, and he's very open about that, and things that he needs to learn and brush up on, so I really appreciate that... And using that as something that we can all learn from.

**Kevin Ball:** Yeah, I love how humble and outgoing he is at the same time. A lot of times the React community can be, shall we say, a little bit dismissive of folks outside of the community, and he is exactly the opposite of that. I'd see a conversation he's in on Twitter around something that isn't working right - he's always trying to understand where people are having challenges, and how they can bridge that, and how that they can bridge out that community. He is an incredible role model when it comes to trying to bridge that great divide that we talked about in the first segment.

**Suz Hinton:** Yeah, I was actually about to say, he seems like one of the people that can be the antidote to that kind of thing. It was pretty refreshing.

**Kevin Ball:** Alright, I'll do a couple shout-outs as well, and I'm gonna focus on potentially coming the other way on that great divide. This podcast is focused on JavaScript, but I think we have a lot of folks who are in the front-end world, and there is so much incredibly powerful stuff in the CSS side of things, especially when you look at things like CSS grid, but there's lots of different other things... So I wanna call out two women that do an incredible job at teaching and explaining concepts in CSS.

The first one I wanna call out is Jen Simmons. She works, I believe, at Mozilla; I think she's a developer advocate there. But she does both articles, but particularly she has this YouTube channel called Layout Land, where she just walks through all sorts of things related to CSS layout. She's a great teacher, and I think somebody that is well worth your attention as you start to look at "What can I actually do with this modern CSS?", which is just incredibly powerful.

\[51:54\] The other person I want to call out is Rachel Andrew. Rachel Andrew - she was one of the people who was responsible for getting the CSS Grid spec finalized, and going through, and doing all sorts of stuff. She did tons of advocacy, she's got a couple different websites she's involved with... What is it -- Grid by Example I think is what she started, that does a bunch of CSS Grid stuff... But she's also now the editor-in-chief at Smashing Magazine, and she has written a series of just phenomenal articles talking about and explaining different parts of CSS - both the new parts of CSS and the old.

Essentially, every article I see that she's written, I'm just blown away by it. She does incredible work; she's very good at explaining both how to use CSS, but also the thinking behind it, and understanding, and understanding what is the browser actually doing to lay these things out? So I definitely wanna call her out.

And then one just quick throw-away - CSS-Tricks recently redid their layout, and their new layout is super-sweet. It's awesome, I love it.

**Suz Hinton:** It does look really nice, I agree... And talking about the great divide before - I think it's excellent that you shared some CSS resources, because I think that if somebody is explaining these concepts really well, then there's no reason why we can't go out and learn those kind of things, especially if there are gaps.

**Nick Nisi:** Totally. Well, thank you very much for giving us those great recommendations, and you, the listeners, if you have any recommendations on people doing amazing things, reach out and let us know.

Thanks for the great discussion on the great divide, and what some of the potential problems are in the front-end landscape for today, and maybe how we can solve those, as well as for a trip into TypeScript. It sounds like we're all very excited about that going forward, and we'll probably be playing with it and talking about it more in the future.

And then, there are great people doing amazing things in the community, and we like to highlight them at JS Party, and we'd like to know more, so reach out to us.

Thanks, and we'll see you next week!
