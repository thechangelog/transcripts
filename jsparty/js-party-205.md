**Amal Hussein:** Hello, JS Party listeners. Welcome to a very, very special show today... I know I say this every week, and I know I say that every week, but really, I'm very excited about this show. We have a really special guest, but before we get to the guest, we're gonna introduce my co-panelist, co-pilot for today, Amelia Wattenberger. Hello, welcome, Amelia.

**Amelia Wattenberger:** Hey-hey-hey.

**Amal Hussein:** Amelia, is your name German? Just curious... Because every time I say Wattenberger I have this urge to go full German. I'm like "All is good, ja?"

**Rich Harris:** Wattenberger.

**Amal Hussein:** Yeah, Wattenberger... So is it German?

**Amelia Wattenberger:** I actually looked this up a few days ago... My dad is really into genealogy, and he has our tree traced back to like the 1,200s...

**Amal Hussein:** Wow.

**Amelia Wattenberger:** But it comes from a German province Wattenberg, I think...

**Amal Hussein:** That's awesome. Yeah, my parents are Somali, and I can trace my lineage back like 27 ancestors, or something like that as well... It's crazy. But anyways, lineage aside, we're gonna talk about someone who's really important to web lineage, web history, web herstory... Rich Harris. Welcome, Rich. Hello.

**Rich Harris:** Hi. Thanks for having me.

**Amal Hussein:** Yeah, I don't even know how to introduce you anymore, because I would say you're that JavaScript engineer that makes everything better, who also kind of identifies as a journalist... You're an open sourcer, you're a teacher, you're an educator, a creator... And now kind of working on open source full-time. So yeah, just tell us a little bit about yourself for folks who might not be familiar... And welcome.

**Rich Harris:** \[04:22\] Yeah. So I'm Rich, I work at Vercel as of three weeks ago. I joined the company \[unintelligible 00:04:25.08\] work on Svelte full-time. Svelte is a project that I've been developing for the last five years now. It has its fifth birthday this month -- actually, no. Last month. It's now December. Man, time moves fast.

And prior to Vercel, I spent my entire career in newsrooms. I trained as a journalist, and I worked in the interactive graphics departments of The Guardian and then the New York Times.

I've done a little few bits of open source here and there along the way. Some people know me as the guy who did Rollup, the module bundler. They curse my name every time they have to configure a Rollup project.

**Amal Hussein:** It's okay, because Rich, you're only as good as the people who came before you... And I will say that Rollup has certainly pushed the needle. \[laughs\] So I think it's really incredible, Rich. I feel like you've kind of gained this reputation, at least for me, as being someone who kind of takes things that are best in class... Let's say bundlers like WebPack, that were considered maybe best-in-class, and perhaps still are, depending on your use case... But taking tools like that and then just creating something that seems to really serve a different set of constraints very well... Specifically, I think, constraints that are good for the open web... So how do we use open standards better, how do we ship less JavaScript, how do we create more performant web experiences. And Svelte is kind of, I feel like, in that same vein... It's good for the open web.

So can you maybe talk to us a little bit about some of the inspirations and origin story behind Svelte? You were on Changelog three years ago, I think... January 30th. We'll link to the episode. It's a great episode... But I'm just curious if you could summarize the origin story for us.

**Rich Harris:** I can certainly try. Svelte is sort of the culmination of stuff that I've been thinking about since ten years ago, roughly, when I first started writing JavaScript, and I was trying to do interactive articles... The kinds that you would see on places like The New York Times. And I was a very newbie programmer... And what I found was that it's hard. There weren't very good tools for doing what we now think of as state-driven, component-driven user interfaces.

So I started kind of day-dreaming about what tools would make my life easier... Then I stopped daydreaming and I started building them. For several years I maintained a project called Ractive, which was me just sort of trying to scratch my own itch.

Then after I gained a bit more experience as a programmer, and I started to become aware of differnet ways of solving some of these problems, the idea that turned into Svelte took root in 2016. Svelte is a continuation of that idea; it's like, "How do we make creating interactive content on the web as easy as possible?", but combined with some slightly more sophisticated thinking than its predecessor project had, around how you do that in a way that is gonna deliver a very small JavaScript bundle, with a very performant user experience.

So that's how it started... It's since evolved into a much more comprehensive set of ideas about web development. We kind of had a realization a couple of years ago that we weren't really designing a framework, we were actually designing a language. It's a language for expressing user interfaces... But all the ancillary stuff that goes around that is -- you know, SvelteKit is this meta-framework that is our take on how you should build web apps from soup to nuts, as opposed to just the component framework part. And all of the libraries that go around it, it's like "This is how we think about the problem of web development writ large."

**Amelia Wattenberger:** \[07:56\] I feel like there's so many good tools that come out of newsrooms, especially ones that do really fancy graphics, like The New York Times... Is there some secret sauce, or what are the conditions that lead to all of these awesome tools?

**Rich Harris:** I think the conditions are very important. To give some examples of the sort of thing that you're talking about... The New York Times graphics department - I was a member of it for a while. Before that, Jeremy Ashkenas was in the graphics department, and had other jobs at the Times... And he created Backbone, he created Underscore, he created CoffeeScript... Things that have had seismic impacts on the JavaScript ecosystem. And specifically within data viz, Mike Bostock created D3 very largely while he was working at The New York Times graphics department. And there have been other examples as well. Gregor Aisch has done a lot of really cool open source, and he was a member of the department...

My thesis is that the reason that that happens is because when you're building stuff in a newsroom, the constraints are just a little bit tighter than in more mainstream engineering, for a variety of reasons. Number one - the obvious one is you're working on the news cycle. You're operating at the speed of news, and you do not have time to futz around with a Babel config, or something like that. You've just gotta ship. And because of that, there is this very strong bias towards tools that are as self-explanatory as possible...

**Amal Hussein:** Like low-barrier...

**Rich Harris:** Yes. And that's the other side of it... Because a lot of the people who are using these tools in a newsroom - they're not JavaScript rockstar ninjas; they're people who learned JavaScript in order to do their jobs better. So the consequence of that is that tools that have an unnecessarily steep learning curve, or a lot of incidental complexity - they don't tend to succeed.

So there's a lot of homegrown stuff that gets its test in that fairly high-pressure environment, and it turns out that if you can solve the problems of developing in small, but fast and rich applications in a short space and time, then you've kind of solved a lot of the problems that web developers face more broadly.

So because of that, D3 has certainly succeeded outside the newsroom, Underscore and Backbone took over... It seems strange to say this now, but back in the day, Underscore and Backbone just completely changed the face of web development, as did CoffeeScript. It gave way to ES6.

Svelte has seen a lot of pick-up outside newsrooms. It's being used in all sorts of different contexts, far from what it was originally built for. And I think that's because, as I say, you solve the newsroom case and you've basically solved web development more broadly.

**Amal Hussein:** Yeah. The news is like -- it's open web-first, right? I think that's what drives a lot of healthy innovation, but also I feel like both e-commerce and news sites seem to really exercise many APIs, and a lot of richness of the web. So folks are thinking about SEO, they're thinking about images, they're thinking about content management, they're thinking about styling, they're thinking about performance, they're thinking about embedded third-party content... There's so much there, and all of that being delivered to you kind of like hot off the presses. So it really is fascinating to hear how much creativity has birthed out of that space.

And to kind of maybe shift that a little bit... So I guess you've now moved on from The New York Times, and you're working kind of full-time, and you've got, I would say, more of a pure focus on your open source projects, which is really exciting. And for me, Vercel is -- you know like when a really attractive person walks into a room, and I feel like Svelte is like another really attractive person walking into the same room, and those two attractive people found each other, and they're asking each other out - that's how I feel... I feel like Vercel and Svelte - it's a marriage that makes sense, because I think at the core, Vercel is really pushing performant web experiences, more turnkey developer experiences, and I feel like Svelte is kind of tackling those same things, from a different angle.

\[12:01\] So can you tell us a little bit about -- give us the Vercel story, and what can we expect with their support towards your projects?

**Rich Harris:** Well, I think you the nail on the head there, talking about Vercel being a place that is trying to make the web more performant, and also more turnkey. I think the reason that it makes sense for me to have a home at Vercel.

**Amal Hussein:** Don't you mean like for you to have Vercel's number? Because you know, you're an attractive person that's maybe trying to get to know this other -- just kidding... \[laughter\]

**Rich Harris:** I mean, if you wanna talk about attractive people, it so happened a couple of months after Guillermo slid into my DMs, so...

**Amal Hussein:** Well, well, well... \[laughs\] The plot thickens...

**Rich Harris:** Right. You know, Vercel and Svelte both very concerned with how you democratize web development, but in a way that doesn't compromise user experience. Obviously Vercel is attacking that problem in a far more expansive sense. Svelte is purely focused on authoring frontends... But there's this kind of philosophical alignment. So it just makes sense that Vercel would wanna invest in a framework like Svelte. You know, they have customers who are using Svelte, and there's always been an interplay between SvelteKit and Next, for example...

So the hope from the Vercel side, as I understand it at least, is that by investing in Svelte becoming a better framework, it's better for Vercel's customers, it's better for the web at large, because it means that one of the - I guess we can call Svelte one of the major frameworks at this point - has proper backing. And from my side, it makes total sense, because the biggest blocker to Svelte's development for me over the last couple of years has been my lack of ability to devote time to it, and that's now solved.

So I'm feeling really optimistic about what we're gonna be able to get done over the next year... And I think it's already starting to pay dividends. We're actually making some solid progress on the SvelteKit towards 1.0, which we had been making progress, but it's just really hard when you don't have someone working on this stuff full-time.

**Amelia Wattenberger:** What on the roadmap are you most excited for, other than SvelteKit 1.0?

**Rich Harris:** There's a long list of things... I hesitate to use the word roadmap, because that implies that we've actually figured out what the priorities are, and decided to devote resource to them. At the moment it's really more of a wishlist, and some of the things that we talk about are -- so for context, one part of Svelte, the main part of Svelte, I guess, is the compiler... Which turns your declarative component code into the equivalent imperative JavaScript, essentially. And it works really well, you get these tiny bundles in most cases. But if you have a huge numbers and you're not using code-splitting, for whatever reason, then the generated JavaScript will grow faster than your component source code size. And in some cases, you can hit the inflection point where your Svelte bundle is larger than your React bundle would have been, for example. It doesn't happen often, but it can. We think we have a solution to that, which incidentally might also give us the ability to implement things like error boundaries, and stuff like that.

**Amal Hussein:** Like at build time? Error boundaries at runtime?

**Rich Harris:** Yeah.

**Amal Hussein:** Okay. Interesting.

**Rich Harris:** So that's an idea that's percolating at the moment. Also, Vercel is super-keen on Rust right now... So I've started thinking, "Should I learn Rust? Should we rewrite the Svelte compiler in Rust?" Maybe it's a terrible idea, I don't know, but I think it's at least worth investigating.

What else...? We've got lots of big ideas around what motion and transitions could look like in a framework if they were a little bit more unified... This is something that Svelte's always been pretty good at. We have declarative transitions for when elements enter the stage and leave the stage, but I think we can probably push that further and do some really funky stuff with interpolating between different page layouts, and stuff like that...

**Amelia Wattenberger:** I have to say, the transitions are my favorite part about Svelte. I'll go back and forth between React and Svelte projects, and being able to just say \[unintelligible 00:15:57.11\] and then it does, and not have to pull in a library or write more code... It's so good.

**Rich Harris:** \[16:06\] Yeah. And the React team have occasionally talked about making that stuff esier in React... Adding APIs that will allow you to defer the unmounting of elements, for example... But it's super-hard, and it's something that you've gotta actively prioritize... Because it's one thing that we've learned from the process of building those transitions is that it's gotta be a first-class consideration as you're building the framework, is kind of deeply tied in there. So I don't know, we'll see... But as I say, I think we can take that idea and super-charge it. There's a whole list of things, none of which I'm ready to commit to, but all of which we're going to be looking at in 2022.

**Amal Hussein:** Yeah. It seems like basically folks at Vercel have -- it's like they're giving you an official sponsorship, in these that "Hey, we see the value of this, we care about performance", and I feel like they're kind of really putting their money where their mouth is, in many ways, and it's really nice. It's a great thing to see. So again, congratulations on that opportunity. We're all hopefully gonna benefit from their sponsorship; that's the beauty of open source, the stadium effect of our code.

So I'm just curious - we talked about SvelteKit a little bit... I feel like there's maybe just something that we're skirting around a little, which is this very intentional decision to be more full-featured. If you look at libraries like React, they're very clear about "We are a UI library, we don't even consider ourselves a framework." And then you have tools like Angular and Ember, that are much more opinionated about how you should be using them, and they come with all the bells and whistles. Angular, I think personally - great for enterprise teams, in many ways. It's easier to control large groups of people when there's those types of conventions built in. And I feel like Svelte is somewhere in between. It's not as rigid as Angular, but it's definitely -- there's less potential pitfalls than maybe using a tool like React, that lets you bend all the ways if you really want to.

So can you maybe just talk a little bit about that decision - what were some of those constraints, and how did you find that happy balance where you wanna let people... I love the Scratch team at MIT, they have this wonderful analogy; it's "High ceilings, wide walls, low floors." Low floors meaning like it's easy for new people to come in and use it, wide walls as in you can do lots of different things with it, and high ceilings as in it doesn't stop expert users, like people who wanna go crazy and go HAM and make the complicated thing; they can do it.

So it's very difficult to design an interface and design an API that meets all of those criteria - good for newbies, good guardrails, and lets experts run. So could you talk about some of those constraints and decisions?

**Rich Harris:** Yeah, I think the guiding light for us is "Is this something that enough people are gonna need that it makes sense to have in the framework?" For example, every app that has ever been built on the web, with very few contrived exceptions, needs CSS. So if your framework doesn't include a blessed way to include styles in your project, then it is leaving a huge chunk of work to the user of that tool.

This is something that I'm a little surprised that more frameworks haven't kind of adopted. Vue is a framework that obviously has opinions about how to get your CSS into an app, but React, and all of the React-like frameworks out there just kind of leave it to developers... To me, that just feels like an abdication of responsibility. And there is a good argument why you would do that, and the argument I think that React would make is that by being deliberately bare-boned about this stuff and letting the community come up with its own conventions, you get more people working on the problem, and the best ideas will float to the surface, and you can sort of gradually adopt them.

\[20:07\] But in the meantime, you're causing a lot of confusion and a lot of work for your users. And particularly in the environment in which Svelte was created, where -- we don't have time to mess around with stuff like that. It makes total sense that styling would be a first-class concern in the framework. And the same goes for things like the transitions that we talked about. Any kind of motion, like if you wanna get spring physics in your user interface, then you can do that in Svelte with an import that comes from inside the Svelte package. And that's there because we wanna encourage people to think of that as part of what you get when you use the framework, as opposed to a problem that we're giving you to solve.

But where historically we drew the line was Svelte was very much a component framework, in the manner of React or Vue; Angular and Ember would be sort of \[unintelligible 00:20:57.21\] frameworks. Because of the very different ways that you can use a component framework, and - you know, in particular at the New York Times we had these very esoteric requirements, that Svelte needs to integrate with our workflow, which is primarily driven by Google Docs. And so you just couldn't have this opinionated application framework that is gonna be able to serve all of these very different use cases... So it's always been very important that Svelte is this compiler that you can use however you like, you can build your own server-side rendering solution, you can build your own build tool, plugins, all of that stuff. It's completely free-form.

But that obviously leaves a gap, which is - someone comes to Svelte for the first time, they're like "Well, how the hell do I build an app with this?" And our answer for that historically has been a little bit lackluster. Whereas if you go to Angular or you go to Ember, then it just tells you from the beginning "This is how you build an app." The problem of course is that you can't use Angular components inside a non-Angular app, and you don't use Ember components inside a non-Ember app... I mean, maybe you can. Maybe there's somewhere in the bowels of the documentation where you can figure out how to do that, but you are very much discouraged from doing so. And I think that has real downsides. And so SvelteKit is supposed to be the thing that -- like, it solves that problem of "Okay, so now how the hell do I begin writing an app?", without getting rid of any of the flexibility that those expert users need.

So SvelteKit is the low floor, Svelte is (I guess) the high ceiling... I can't remember which was the high ceiling and which were the wide walls, but...

**Amal Hussein:** Yeah, wide walls is like do lots of things with it, and high ceiling is unlimited complexity; go crazy, you can go vertically complex. Does that make sense?

**Rich Harris:** It does, yeah.

**Amal Hussein:** And this attribution is to the MIT Scratch team. We'll put a link in the show notes to an article where they talked about that. Scratch is a programming language for kids, ironically written in JavaScript now... And I worked at a company -- a little company that you might know called Bocoup; we helped actually the MIT Scratch team do a full rewrite from Flash. It was a Flash-based application, and we converted it into JavaScript, and helped them convert it into JavaScript. And it's actually using React. It's one of the most complicated React applications on the open web, and it's beautiful, and performant, and thanks to the lovely engineers at Bocoup who've put a lot of thought into how to make it fast... Definitely worth checking out.

So Rich, we're gonna take a break, because there's so much good stuff to get into. I wanna talk about comparisons, there's community... There's so much. So we'll be right back, after these short messages, kids.

**Break:** \[23:40\]

**Amal Hussein:** Alright... Rich, thank you for that wonderful background and context around Svelte, and SvelteKit. It was really great to learn about some of the decisions behind what came to be this interface and these constraints; it's great.

You said something earlier around Svelte is maybe considered one of the major frameworks, and I kind of wanna challenge you on that a little bit. I wanna say "Really, Svelte?" Not "Really, Svelte", but "Really, Rich?" \[laughs\] \[unintelligible 00:25:09.02\] So really, Rich? Is Svelte really considered a major framework? Because -- I mean, it doesn't always take a while, but it does take a while for JavaScript UI frameworks to hit a tipping point where they're considered production-ready, stable, well-supported etc. Great, this project is now funded by Vercel; that's awesome. But who else is using it? It's been around for five years, but it seems like it's taken five years to maybe hit the "mainstream", so I'm just curious if you could maybe share some of the adoption metrics with us.

**Rich Harris:** Yeah. I mean, I don't know if I would even now call it mainstream per se... But I think we have a pretty sizeable mindshare at this point. Even though it's not being used nearly as widely as React and Vue, it's something that a lot of developers have heard of, a lot of developers are excited to try it, and I think what is probably keeping the Npm download numbers from being higher that they are is that for a long time companies were very reluctant to try and use something that wasn't supported by a full-time maintainer. That's feedback that I've heard a lot.People will tell me that me and my co-workers - we wanna use Svelte to build this project, but our project manager or our CTo says "No, you can't do that, because it's someone's weekend project." And that hasn't really been true for a long time. We have a pretty active core team.

**Amal Hussein:** Do they all work nights and weekends? Okay, no... \[laughter\]

**Rich Harris:** I'm the only full-time maintainer still, but there's a lot of people who work on the project on a fairly regular basis.

**Amal Hussein:** Okay. That's awesome.

**Rich Harris:** But now that it's got the backing of Vercel, I'm starting to hear people turn around and say "Well, actually, we can reconsider that decision." The Npm numbers, to be specific - we get 200,000 downloads a week, which is not a huge number, but it's doubled since the beginning of this year... And I calculated the other day that if it continues doubling every year, then by 2037 everyone on the planet will be downloading Svelte... \[laughter\] So we're not that far from global domination.

When I say that we're one of the major frameworks, what I really mean is that other frameworks in a few cases being influenced by Svelte's decisions... When people announce new things, like new cloud things, they will very often say "Okay, here is how you build a Svelte app on it." It's one of the first things that they have in their introductory documentation. Cloudflare Pages just came out and they used SvelteKit as their example of how to build a Cloudflare Pages site. And I think once you reach that level of awareness, I think it's probably fair to count yourself as one of the major frameworks, even if you are by far the smallest.

\[27:48\] And I'm pretty confident that we're gonna keep growing. We have pretty high satisfaction numbers. We've got the "Most satisfied" result in the most recent State of JavaScript survey, and we were the most loved framework in the Stack Overflow developer survey this year... So it stands to reason that we're gonna keep gaining adoption. But at the same time, adoption is not why we do this. Adoption is not the metric to try and optimize. It's just something that tells you whether or not you are in fact optimizing the right things.

**Amelia Wattenberger:** If you look at JavaScript frameworks, there's like a hype cycle, if you chart how much people like it and how much people use it. How much you like it is on the X axis, and how much you use it is on the Y axis. Usually, they'll go to the right and then up... So when people really like it, there's definitely an increase in usage coming, and then you'll see the opposite on the way down. Eventually, too many developers will have to use it for work, and then they'll hate it, and then they'll stop using it. \[laughter\]

**Rich Harris:** That is 100% going to happen. I think it's probably already starting to happen with Svelte. When we got those "Most satisfied" and "Most loved" recognitions, that was driven by the fact that the people who are currently using Svelte are people who've chosen to use Svelte. So they're already sort of sold on the idea of a template-driven framework, and all of the other decisions that Svelte makes, which are different to other frameworks... And there's definitely gonna be a point at which that's no longer the case.

So I'm not expecting that we're gonna necessarily win the same recognition next year, but as long as the people who want to use Svelte continue wanting to use Svelte, and as long as the people who are forced to use Svelte can tolerate using Svelte, then I think we're doing okay.

**Amal Hussein:** For me, this just brings back -- one of the reasons why I was excited about Svelte, I'm reminded now... It's because I was like "Wow, this is a project that's not sponsored by Facebook, Microsoft, Google, whatever billion-dollar/gajillion-dollar company." I feel like if you look at the landscape of the JavaScript open source community right now, and you look at what are the projects that get the most quick adoption, wide adoption, whatever, companies are using metrics like "Hey, are there people who are paid to work on this?" They're using things like that.

You look at projects like Rush, and you look at projects like Lerna, and you look at how hard Lerna worked to get to their numbers... You know, Lerna is a monorepo management tool... Same for Rush, but Rush came out of Microsoft; we'll put a link in our show notes. But I feel like Rush came out and people were like "Oh, great! A company-backed Lerna alternative." And totally fine, nothing wrong with company-backed software. All good. Vercel is doing the same thing, in many ways. But the idea is - I feel like the spirit of open source, and community and open governance is also kind of lost in projects like that. And I feel like with Vercel your relationship is a little different. It's still your project, they're sponsoring you to work on it, but I still feel like the governance and all of those things are still very grassroots, and open to influence by people who use the library, and that's very different than React. We had a wonderful conversation with Sophie Alpert a couple weeks ago, who is a lead on the React team, and she was talking about the challenges around open governance in React, and - yeah, it is absolutely a core team show. It can cause friction in the community sometimes, especially when you have a lot of smart people, with opinions that are quite often not all bad, you know what I mean?

**Rich Harris:** Yeah. It's difficult... A project like React is used for such a wide variety of projects - and I guess it's true of all frontend frameworks, that you are gonna get a lot of different decisions. We've always prided ourselves on being, to the extent possible, without things devolving into absolute chaos, this consensus and community-driven project. And the core team is very diverse. We have people from all sorts of different backgrounds...

**Amal Hussein:** Probably all over the world, right? It's probably folks that aren't geographically collocated either.

**Rich Harris:** It's a very international project.

**Amal Hussein:** \[31:56\] Yeah. Wonderful for the web. For me, my life mission is to increase the number of people, change the percentage of folks who are writing for the web, so that they are more reflective of the people using the web, you know what I mean? Like, let's have those demographics mirror each other, so that we create inclusive and delightful tools and applications. So I'm really happy to hear that.

**Rich Harris:** Yeah. And it manifests itself in real ways. When we're discussing features inside Svelte or SvelteKit, we'll often have a lot of back and forth between people who've just had these very different experiences, and can speak to some of those decisions in different ways. And that makes the project much stronger than if the team was a lot more homogenous, and people had had the same kinds of experiences.

**Amal Hussein:** Yeah. That's a hot topic in itself, but we'll have to save that for another show... But thank you for that. It really makes me happy to hear that, and congrats to you and the team. I hope you're able to continue fostering that level of contribution that's varied and diverse. It's important for the web...

So I'm curious, to kind of segue a little bit into maybe some of the specifics around why Svelte... I'd like to maybe prefix this conversation with - hey, everybody who's listening to this, APIs get deprecated, people don't. So when we're talking about this tool versus that tool, we're talking about it from an objective perspective, and it's not personal; this is not about beef, or flame wars, or anything. We're just engineers having an objective conversation. So I just wanna prefix the rest of this segment with that kind of warning or context.

So with that said, Rich, can you tell us -- like, if we're just gonna pick React... Let's just pick on React, because it's the one to beat, right? So if we're kind of doing apples to apples, why Svelte over React? Can you maybe give me some of the specifics around -- if I'm starting a new project, why should I start it with Svelte versus React today?

**Rich Harris:** The short answer is you'll ship faster. That's what we believe. And there's caveats to that, obviously. If you're someone who is already experienced with React, then it's gonna take you a bit to learn how to do Svelte. But overall, the argument for Svelte is that because of the design decisions that we're taking, and the foundational design decisions, that we have this compiler-centric mentality where we're essentially designing a component language, as opposed to trying to express user interface semantics in a language which is fundamentally ill-suited to them (namely JavaScript), because of that, you can express concepts much more concisely and idiomatically in a Svelte component than you can using React.

A lot of people will just disagree with me vehemently on that, but my observation has been that, for example, if you convert a React component to a Svelte component, it will be about 40% smaller in terms of the bytes of code that you have to write. And that has real consequences - obviously, how fast you can write the component, because you're physically writing that stuff, but it's also more readable. Less code is more readable than more code.

**Amal Hussein:** Also maintainable.

**Rich Harris:** It is more maintainable.

**Amal Hussein:** Easier to change too, right?

**Rich Harris:** Easier to change...

**Amal Hussein:** I've heard you often say something that I personally take with me as my new mantra, which is "Optimize for change." And yeah, less code is easier to change, hands-down.

**Rich Harris:** Yeah, absolutely. And there's been some research - not a huge amount, but there's been some research into how many bugs you will write for a given amount of code, and it turns out that the relationship between the amount of code that you write and the number of bugs in your app is basically the same across all different languages... But the relationship is super-linear with the amount of code you have. If you have a 10,000-line app, then you will have more than ten times the number of bugs you'll have on a 1,000-line app.

So if you can write code as concisely as possible, without it becoming this Perl-like gibberish, then generally you'll find that your application is gonna be more robust. So that is the big argument. And that's changed a little bit, because we used to think about Svelte in very different terms. When it first came out, the big selling point was you can make tiny JavaScript bundles, because at the time, we were coming out of this era when desktop frameworks had predominated, but mobile was becoming the more important place to write stuff on the web. We were shipping too much JavaScript to our users; we're still shipping too much JavaScript to our users, but that was like the most urgent problem.

\[36:19\] So that's what Svelte initially was aimed at solving, was just making bundles smaller. And because it's compiling to this sort of vanilla JavaScript without the heavy virtual DOM machinery, it also means that your updates are faster.

So that's what people first associated with Svelte, is the small and fast, and that's why it's called Svelte... But nowadays we think about it more in terms of how it affects how you think about the code that you're writing.

**Amelia Wattenberger:** Okay, let's see if you can solve this for me... So all my co-workers know that I would start new projects with Svelte if I could; and we're really focused on prototyping really quickly, so that would be awesome... But the issue is if we use React, there's like one million libraries that we can use for accessible components that are really easy to throw in... Which Svelte can't do anything about, because it takes a long time and a large community to build up that wealth of components... But that's like my biggest hang-up with -- we do need to go fast, and sometimes pulling in other modules is super-helpful.

**Rich Harris:** Yeah, component libraries -- I mean, there's a lot of Svelte component libraries; I don't personally tend to use them, because I don't typically need to, because of the sort of apps that I'm building... But there are component libraries out there. I can't vouch for any one in particular, but they do exist.

What I'm hoping is that the release of SvelteKit is gonna make it much easier for people to build really high-quality component libraries. And that's because SvelteKit, in addition to being a framework for building applications, it's a framework for building component libraries. I've used it for a couple of libraries so far, and it's just a much, much nicer workflow for building libraries than anything I've used in the past. So hopefully, \[unintelligible 00:38:06.00\] the release of SvelteKit is gonna mean that there's a bit of an explosion of component libraries. We'll check back in a few months to see if that's happened, but... I think that is the kind of problem that solves itself over time.

So if you're looking to build something immediately, and you wanna have a ready-made set of component libraries, then React is probably the way to go. But that's not a foundational technology choice. That is something that happens to be the case right now, and will probably stopped being the case at some point in the future. So it depends on your timescale, it depends on your appetite for building some of the stuff yourself, and it depends on how you're evaluating technologies.

**Amal Hussein:** This problem of ecosystem that Amelia brings up is very real... It's absolutely a reason why people hold off on an option; they need that table library, they need that Material UI library, they need all those bells and whistles in order to continue at least working at the same pace that they would with another ecosystem. So you don't wanna compromise on that. But I'm just curious, as a community, at what point are we going to start really leveraging web primitives like HTML, CSS and JavaScript to create this accordion widget one time for all the libraries to use. Because at the end of the day, React, Angular, Ember, Backbone, all of these libraries are still just outputting to web primitives, right? Isn't there a way for us to just kind of write this once and let people import it into the languages and the frameworks of their choice? So if you wanna interact with this thing in this way - great.

Ultimately, I think it's ridiculous for us to start over and create a whole new ecosystem and solve solved problems yet again, just using a different interface. I mean, isn't that kind of bizarre to you, that we're gonna start this over?

**Rich Harris:** It's almost like you're trying to goad me into sharing spicy takes on Web Components.

**Amal Hussein:** \[40:11\] I wanted to talk about Web Components, but then I was like "Let me not get eye rolls", because people are just gonna eye roll... But I'm like, "Shouldn't this just be a custom element?" Really, I'm curious. Because it is a web API, these are web APIs, supported natively on the platform by a majority of browsers, fairly well-ish... So I'm just curious, what are your thoughts on that.

**Rich Harris:** I think people tend to overstate that problem, the problem of having to rewrite things for different frameworks... Because there aren't that many frameworks. And having to rewrite something in three frameworks is a tractable problem; having to rewrite it in a thousand frameworks would not be. But that's not the situation that we find ourselves in.

So I would firstly just push back on the notion that "Ugh, we've gotta rewrite this for every single framework" is like a fundamental problem. It is a nuisance; it would be better if we didn't have to do that, but the web has these very unique constraints, and unfortunately, my opinion, having dabbled in this space for long enough, is that web components do not solve it.

**Amal Hussein:** Certainly the API failed to meet DX and -- right, there's certain usability aspects to web components that just don't jive with developers. There's certainly a disconnect with where developers are, and how people write modern web apps, and what you need to do to get Web Components to work at mass and scale. There's gonna be a chasm.

But I just feel like -- I don't know, maybe you're right; maybe it is not that big of a problem. I just feel like we need to have a hackathon where one week is Svelte ecosystem week, and everyone just picks the component that they need to rewrite from this thing to that thing, and then - boom, here it is in Svelte.

I find it a little ridiculous that we're just wasting any amount of brain power on solved problems. Solved problems, in a different color... I feel like web developers are the smartest people on Earth, and I just feel like that's not a good use of brain time. Making a new button type is not a good use of brain time, for me anyway. That's my salty opinion, but you know...

**Rich Harris:** I mean, you're not wrong, but ultimately, if these things are important enough that we're rewriting them in multiple frameworks, then they're probably things that belong in the platform in the first place.

**Amal Hussein:** Agreed.

**Rich Harris:** And my hope with Web Components back in the day was that they were gonna allow us to create the cow path that would later get paved. And we haven't been paving those cow paths, for a variety of reasons. So we're kind of left with this way of describing components that doesn't even work with JavaScript, which is just fatal for progressive enhancement and all these other things.

I've just got so tired of thinking about Web Components and how hard they make it for me to build the apps that I wanna make... I've just stopped thinking about it. I'm just gonna use Svelte and I'm gonna target non-custom elements, and I'm gonna have a great time doing it. If other people wanna try and solve the many problems with Web Components, then that's great.

**Amal Hussein:** \[laughs\] Different bag of problems, right?

**Rich Harris:** Yeah.

**Amal Hussein:** Yeah, a different bag of problems that an increasingly shrinkig group of developers seem to be caring about as well... Yeah, so thank you so much for weighing in on that and humoring me. You did a really good job of avoiding that pitfall, so good job. Points for you, Rich.

**Break:** \[43:38\]

**Amal Hussein:** Rich, thank you for walking us through part one of hot topics in the open source community. It's like a never-ending story. Actually, Amelia, remember you and I were preparing for this show earlier today? I think you said something really funny; do you wanna share it? That he's like the kind of hot takes... \[laughs\]

**Amelia Wattenberger:** Oh, they're actually filming a Svelte documentary, which I think we can talk about...

**Rich Harris:** Yeah, we can.

**Amelia Wattenberger:** They came to my house with all their film gear, which is very intimidating... And they \[unintelligible 00:45:23.25\] and they're like "Can you describe Rich Harris?" \[laughs\] And I was like "Oh, man... I don't know." And the first thing that came out was like "He's the kind of hot takes, but they're also not hot takes, but they're all very reasonable." They were like, "Let's do that again." But those are my true feelings. \[laughter\]

**Rich Harris:** Oh, I can definitely relate to what it's like to have a camera shoved in your face and being asked questions.

**Amelia Wattenberger:** Yeah, it's horrible...

**Amal Hussein:** Yeah. Well, I would say you're definitely really good at hot takes. You're also really great at -- I feel like when there's gasoline all over the floor, you're really great at showing up with a match on Twitter, and then dropping the match... And it's like BOOM! \[laughter\] There goes Twitter for today, you know...? Literally, three weeks later I'm still getting likes and mentiones on threads where Rich inserts himself into sharing a very reasonable opinion about JavaScript. For what it's worth, I agree with you 99% -- actually, 100% of the time, if I'm honest. But yeah, seriously, you're awesome.

So kind of just to continue our hot topics... So React - I've been using the library forever; really, it helped me even be better at JavaScript. It helped really democratize the component model that we were kind of skirting around for a very long time as a community. So I'm very thankful for the way it's helped push certain things forward. However, I think there's certain things around performance and other things where I feel like maybe React has kind of stagnated. And for me, I think a product of its success in many ways, React is a product that really supports a wide variety of applications and platforms. And this reconciliation algorithm, and this virtual DOM, and the synthetic events, and all these things that are kind of like extraneous and not necessarily found in other projects on the web... You can look at Preact, Svelte - y'all don't need a virtual DOM, y'all don't need synthetic events... Extremely performant, much smaller bundler size... But the constraint that React has is we output to many DOM trees; or not DOM trees, but platformy trees... iOS and Android being the other two major platforms. So it's got some bloat because of that.

\[47:48\] A friendly argument that I was having with a friend of mine a few weeks ago was like "Okay, is it safe to say at that point that maybe React is not the best choice if you're writing for just the web?" We agreed, and he was like "Yes. If you're just writing for the web, React is not the best choice." Because I was just trying to say, I don't think React is -- like, if I was starting a project in 2021 (or 2022 now almost) for the web, I wouldn't pick React. I wouldn't. Just because it's bulky. I would try to pick something that's really gonna force me to use as little JavaScript as possible. And React is more than I need, it's more engine than I need, if I'm just writing for the web. So I'm just curious, do you feel like Svelte is -- like, how is Svelte tackling this problem? Because I feel like for me Svelte feels very web-first, web-only right now. Is there a mobile story? Have you tackled those constraints around multi-platform? Because if I'm working at a company and I'm trying to get my manager to adopt Svelte, my manager is gonna say "Well, is there a native library? How does that work? I don't wanna have to hire folks to write Swift and Kotlin, or whatever."

**Rich Harris:** Yeah, I have many thoughts about all of this. I'm gonna preface it all with saying that I'm not a \[unintelligible 00:48:58.16\] developer.

**Amal Hussein:** Yeah. Me neither.

**Rich Harris:** It's not a thing that I care about. I'm a web guy. I would love it if native apps weren't a thing, and the web on mobile devices was capable enough that we could just get rid of all that. That said, it is true that React-native is probably the most tightly-integrated way to build something on iOS and Android if you already have a React codebase, or you're familiar with web development.

There are some things out there which will allow you to build native apps with Svelte. There is a project called Svelte Native, which is basically a wrapper around NativeScript, which is sort of an interface that makes the \[unintelligible 00:49:36.09\] platform look like the DOM to whatever is using it. And there's a Vue version of this, and there's a Svelte version of this, and there's a vanilla version of this... I haven't used it personally, but as far as I can tell, the results are pretty great.

There's some other attempts in this space as well that are going on. There's one that I learned about recently that isn't yet public, that is -- I think it's built on top of a Node GUI, or something like that... And there's a few of these things. So it is possible. There's also things out there that will allow you to use -- you can give them your progressive web app (PWA) and it'll bundle that as a native app and give you access to device APIs. Again, I haven't used them, can't vouch for them, but that at least on the surface would seem to solve the problem of deploying to mobile devices without having to hire Kotlin and Swift developers.

And then finally, there's the question of whether Svelte is gonna be able to do this stuff natively at some point in the future. And there is really a little bit of a misconception that Svelte is web-only. Obviously, web is our priority; we are built on top of HTML, CSS and JavaScript. A Svelte component is a super-set of HTML. But the compiler, when you're converting a component to JavaScript, it can go one of two ways. It can output code that targets the DOM, or it can output code that targets server-side rendering, which will take some data and just turn that into HTML. And those are very different. The compiler is doing a very different job in each of those cases.

What we haven't done is make that process pluggable and expose it via an API. But we could. We could make it such that you could build your own outputter for the compiler. And it's something that \[unintelligible 00:51:22.24\] never risen to the level of a priority, of something that we actively want to pursue... But we could. And then we would have an ability to build command-line interfaces with Svelte, and other stuff like that, which you can do with React.

**Amal Hussein:** It opens up the mediums in the platform. It opens it up in ways that are very interesting, when you have that level of pipeability between your outputs. But it's interesting...

**Rich Harris:** It's possible that Svelte will have more native support for native one day. For now, you can do it. The maybe caveats -- again, I'm not all that experienced, so I can't speak to them... But if you want a battle-tested solution for building native apps, then React Native is probably the best thing for right now.

**Amal Hussein:** \[52:09\] That's interesting. I'm glad to hear you say that. I'm really curious to maybe see in like a year what your answer is... Because I know the exponential compound interest natures of JavaScript ecosystem, and someone could have the solution ready for this like tomorrow. So I'm curious to see how that pans out. But thank you for weighing in on that.

I know Amelia and I were really excited to hear about Svelte's community. We can't end this show without talking about community. It's like the currency of open source, it's the currency of everything that we do. I know there's an incredible, very active Svelte community, and like you said earlier, there are the people who have chosen to get into Svelte - not because of work, but because they're hobbyists, or people who really appreciate the API. So can you just maybe tell us a little about the Svelte community, and where do you all convene...? You guys had your first conference recently...

**Rich Harris:** Svelte has a wonderful community. Discord has -- I just opened the invite page to check these numbers. We have 35,000 people in our Discord, 4,000 of whom are online right now... Wchih is quite a lot of people. So Discord is where people in the community gather to ask each other questions and share things they're working on, and advertise jobs, and so on. And Svelte.dev/chat is how you find it.

And yeah, there was a conference recently... Svelte - there's like the core team, the main maintainers, and people who work on that, and then there's also this kind of a sister organization called Svelte society. And that is run by a few people, but the two people I'm gonna call out right now are Swyx, who --

**Amal Hussein:** Shawn...

**Rich Harris:** Shawn Wang, everyone knows him as Swyx...

**Amal Hussein:** Yeah.

**Rich Harris:** He was sort of the initial impetus behind this, because there was gonna be a London meetup, and he was like "New York cannot not have the first meetup, when it's the city where Svelte was born." And so he very quickly organized a meetup on the same day. So he had this simultaneous London/New York meetup. This was back in 2019, right before the pandemic.

**Amal Hussein:** That feels very classic Shawn. He is the most driven and hyper-competitive in the best possible way person. He's just incredible.

**Rich Harris:** He's an absolute machine.

**Amal Hussein:** \#goals, you know what I mean?

**Rich Harris:** Yes, he's a remarkable guy.

**Amal Hussein:** Yeah, for sure.

**Rich Harris:** And so that was the birth of Svelte Society. There's also Svelte School, which is something set up by Kevin, who is also the host of the Svelte Radio Podcast. He made the first conferences happen. Back in (I think it was) April 2020 we had the first virtual conference, and then we've had two more since then... And then last weekend, two weekends ago we had the fourth virtual conference, but for the first time we also had an in-person component to it, here in Brooklyn. And that was wonderful. We had a bunch of people come to an event space in Brooklyn, just down the road from where the old Brooklyn JS meetups used to happen before the pandemic shut \[unintelligible 00:55:04.10\]

**Amal Hussein:** Yeah. Oh wait, was it in the exact same space as the Brooklyn JS?

**Rich Harris:** No.

**Amal Hussein:** Okay. Because that was a pretty cool space.

**Rich Harris:** Yeah, so it's \[unintelligible 00:55:12.03\] We were in a place called The Invisible Dog at 51 Bourgon Street. So just down the road.

**Amal Hussein:** Oh, yeah. I mean, it's just down the road in Hipsterville. It's the coolest city in New York, really. Coolest city in the country, I think, Brooklyn; let's be honest, you can't get any cooler than that... So that's awesome.

**Rich Harris:** I mean, the event was pretty cool, I thought.

**Amal Hussein:** I bet.

**Rich Harris:** We had a wonderful turnout, people got together... There was a real feeling of "Yes, we can actually start having tech meetups in person again. And there was a really nice vibe; people were kind of milling about, playing board games, and just chatting and catching up. And then we all went and played Shuffleboard afterwards. It was good.

Guillermo and some of the Vercel crew flew in to join the meetup, he gave a little impromptu talk to the assembled people, that was also broadcast live on the internet... It felt like a really nice moment, because as I say, it sort of coincides with Svelte's 5th birthday, and it was a really nice time to sort of take stock and think about everything that the community has achieved, and where it's going in the future.

**Amal Hussein:** \[56:14\] That sounds amazing. And there's also like a newer community group called Svelte Sirens, I think, that's geared towards folks who are --

**Rich Harris:** Oh, yes, yes, yes. I wanted to talk about Svelte Sirens.

**Amal Hussein:** Yeah, women and non-binary, I believe...

**Rich Harris:** Yeah.

**Amal Hussein:** It's just great. I'm so glad to see that there's spaces for folks that are under-represented. It's awesome.

**Rich Harris:** On the core team, we've done a little bit of handwringing about the fact that open source in general is a pretty homogenous scene, and particularly early adopter open source tends to be even more homogenous. And we've definitely felt that. But the core team is also along certain dimensions pretty homogenous, and there's limited things that we can do to fix that. So it really does need to kind of come organically from the community. And the fact that Svelte Sirens has arisen from the community, and it's been spearheaded by Brittney Postma, who is --

**Amal Hussein:** Incredible.

**Rich Harris:** She was at the summit two weeks ago... Wonderful person. I got to meet her for the first time; absolutely brilliant person, who's set this up with some other women and non-binary people from the community... And it makes my heart sing that that's happened.

**Amal Hussein:** So we've covered community, we've covered hot takes... I'm eager to hear what's next. What's cutting-edge, next-gen, next-next for Svelte?

**Rich Harris:** So next is SvelteKit 1.0. Everything is geared towards SvelteKit 1.0 right now. That's the big priority. And then I shared some of the wishlist items for Svelte 4. In between that, there's a few little kind of side projects that I'm into. I released a library called svelte-kubed recently, which is a Svelte wrapper around Three.js. It allows you to build interactive 3D scenes with Three.js, but as a declarative component scene.

**Amal Hussein:** Wow. Are you making WebGL easy for developers? Because there's such a big barrier to entry with that stuff. It sucks.

**Rich Harris:** That is the hope. We're wrapping Three.js. And Three.js already does a lot of heavylift. If you've ever written raw WebGL code - it is unpleasant. It is really, really difficult to get ahead. I've spent a little bit of time in that world... Not enough to develop any real expertise, but enough to get an appreciation for how much work libraries like Three.js are doing on your behalf.

So Three has done 95% of the work, and then Svelte Kubed aims to do the last 5%... Because working with Three is kind of like working with the DOM. And you can do it, you can build applications just writing against \[unintelligible 00:58:51.12\] DOM APIs. But eventually, you're gonna run into some maintainability problems if you write code that way, in my experience... Because of things like the fact that you're creating something that is essentially hierarchical, but you're not expressing it as a hierarchy. You're expressing it as linear, imperative code.

At the same time, state management becomes very difficult when you're building things imperatively... If you have a component framework that lets you use the same idioms that you use elsewhere in your app, to build WebGL stuff, then it does get a hell of a lot easier to manage. But you also get things like lifecycle management, which means that you get hot module reloading inside your Three.js classes, for example, which you will not get with Three by itself. So it's not just making it slightly more idiomatic and slightly easier to use, it's actually improving the experience of building stuff in some fairly tangible, but non-obvious ways as well.

\[59:48\] So I'm kind of excited by that... It's something that came out of a New York Times project over the summer, and now that it's open sourced, it starting to get some contributions from people who actually know what they're doing... So I'm excited to see how that shapes out.

**Amelia Wattenberger:** I was gonna ask, as someone who has used react-three-fiber, were there implementation differences, or API differences for using it? Or is it pretty much similar?

**Rich Harris:** So they're similar in the sense that they give you a declarative interface over Three.js. But in terms of implementation, they are wildly different. And here's where I've gotta be careful... Because Paul, who wrote, react-three-fiber, will disagree with me on a lot of this, and I have to channel his response as I'm saying this. But react-three-fiber is not a component library, it is a renderer. So it implements basically what React DOM gives you - it gives you that, but for Three.js, essentially. And because of that, the implementation of react-three-fiber is very complex. If you actually look at the code, it's just doing an awful lot of very clever stuff to make that possible. And there are some sort of theoretical advantages to thinking about implementing something as a renderer, as opposed to a component library. You're basically building your Three graph directly, as opposed to creating components that create the graph for you. In theory, that gives you some measure of defense against breaking changes between Three.js versions, and so on, but you have to weigh that against the implementation itself.

From the users' perspective, I think the biggest difference is that you are typically just using Three.js classes inside your app. And you can do that in Svelte, because you're not re-rendering your app every frame. In a React app, you can't re-render things frequently, and so because of that, you have this sort of intermediate layer which creates the classes, and then updates them later. You can't do new \[unintelligible 01:01:41.09\] geometry inside your component. I mean, you could, but it'd be recreating that on every update, and that's gonna be terrible for performance. In Svelte you just don't have that problem.

So \[unintelligible 01:01:50.23\] the way that you use Svelte Kubed is a little bit more idiomatic than the way that you use react-three-fiber. But someone who has used react-three-fiber and is familiar with it - I would love to get your take on how it feels different, and which things are nicer, and which things are not as nice.

**Amelia Wattenberger:** I'm so excited to dig in.

**Amal Hussein:** Yeah. I want Amelia's thoughts on all the things, especially when it comes to anything visual... I feel like you have a really great instinct for API interfaces, understanding how to represent information really well... Rich and Amelia, if y'all haven't collaborated yet, you should. For sure. But anyways...

So just to kind of wrap up this discussion, I wanna hear just really quickly, briefly, your thoughts on HTML, because we haven't really touched on it in this show... But it does feel like we're making this full cycle on the web, where we're back to kind of just rendering HTML. Astro kind of like boldly pushed the needle with HTML only by default; JavaScript makes it difficult for you to almost use JavaScript in a good way... Same thing for SvelteKit having that option for just outputting HTML. So is the future HMTL? Are we back to the web of the '90s? And I will say - we had a wonderful guest on our show last week, Salma Alam-Naylor. She's a wonderful developer advocate, who actually just recently accepted a job at Netlify, so congratulations to her. But Salma had this wonderful analogy of like "We drank too much JavaScript and we have like a hangover, and now we've learned we shouldn't be drinking so much JavaScript, we should take it easy." So it feels like we're coming full-circle, so I'm just curious if you have thoughts on that, since you're clearly part of that movement, in many ways.

**Rich Harris:** \[01:03:45.28\] I have a lot of thoughts on that. A pendulum swing - we're definitely swinging back towards the server. But we're doing it in a different way. Actually, I don't really like the pendulum swinging metaphor, because it kind of implies that overall there's this stasis, and that you're just going from one thing with trade-offs to another thing with trade-offs. But actually, maybe coming full-circle is a better way to think about it, because you pick things up on each revolution, and you get smarter, and you make progress.

I gave a whole talk on this recently called Transitional Apps... Because I feel like we've kind of gotten into this linguistic trap where we think about multi-page apps (MPAs) or single-page apps (SPAs) as being these completely different approaches to building the web... Whereas actually all of the application frameworks today that people are using are converging on something that is a little bit more nuances, which is something that's in between the multi-page app and the single-page app world.

We are generating HTML, but in many cases, when you navigate within an application, once you're in the application and you click a link and you go somewhere else, very often that navigation is gonna happen client-side, in a way that is instantaneous, and offline-friendly, and all of these other things.

And so yes, we are moving back to being more considerate about search engine optimization, and progressive enhancement, and all of those things... Not necessarily because developers care more than they used to, but because the tooling just presents that as a default, and you have to actively opt out of doing the right thing with these modern frameworks. But we are also taking the promise of the single-page app paradigm and preserving that. So this isn't a retrograde step. We're not going back to the '90s way of building apps. And we're also not going back to servers; all of our back-end rendering logic is moving --

**Amal Hussein:** Edge...

**Rich Harris:** ...either to -- there's obviously a lot of interest in serverless, but also to the edge. Cloudflare workers, and Vercel Edge Functions, and Netlify has edge handlers (I think it's still in beta). This is where things are moving. And you can't use that for everything yet, but you can use it for an awful lot of stuff, and that is changing the trade-offs that have informed the decisions that people have taken up till now.

**Amal Hussein:** Yeah. Well, I couldn't think of a better way to end the show, seriously... Thank you for your time today, thank you for your contributions to the web, thank you for never being satisfied with the status quo, thank you for questioning, thank you for saying "We can do this better, actually..." Really, Rich - you've done a lot for the web, and I think we're very lucky to have thinkers like you, who are able to elevate the conversation, and also be comfortable with maybe not being the popular kid right away. I think it's hard to disagree with a bunch of really smart people who've settled on some ideas, and say like "Um, actually, no." \[laughs\] So thank you... And I'm eager to learn more about Svelte this next year, it's on my list of things that I am willing to take my increasingly limited time to learn new things... So I'm very picky about what I learn, and Svelte is on there, so that's a big deal. It's a very big endorsement, Rich.

**Rich Harris:** Well, thank you so much. That really means a lot.

**Amal Hussein:** Yeah. And Amelia, thank you so much also for being my copilot, for your wonderful insights as always... So that's it for this week, kids. We really hope everybody has a wonderful holiday season. We've got some really fun shows to wrap up the year, and more stuff even planned for next year, so we hope to catch you in the ether somewhere, sometime, someplace. Take care, everyone. Bye-bye!

**Outro:** \[01:07:38.12\] to \[01:08:40.09\]

**Rich Harris:** ...and the short answer is you'll ship faster.

**Amal Hussein:** I thought you said the word "You'll s\*\*t faster" and I was like, "Wait, no...!" \[laughs\]

**Rich Harris:** That may also happen, but we're not gonna include that in our marketing...

**Amal Hussein:** Yeah, we'll edit this out. Anyway... \[laughs\] So you wanna start over? We'll ship faster... \[laughter

**Rich Harris:** Okay, so the short answer is you'll ship faster.
