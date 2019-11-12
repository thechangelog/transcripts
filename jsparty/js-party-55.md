**Kevin Ball:** Okay, Kball here. I'm at Node + JS Interactive one more time. I'm here with Nick Nisi...

**Nick Nisi:** Hello!

**Kevin Ball:** ...and we are talking to Laurie Voss, co-founder and COO of npm.

**Laurie Voss:** Hello!

**Kevin Ball:** How's it going, Laurie?

**Laurie Voss:** Pretty good, it's a great conference so far.

**Kevin Ball:** We're excited to have you with us. You gave a talk yesterday afternoon... Do you wanna tell us a little bit about it?

**Laurie Voss:** Sure. It was called "npm and the future of JavaScript", which is a pretty lazy title on my part, because I realized a couple months ago that basically I'm always talking about npm and the future of JavaScript; no matter what it is that I'm specifically talking about, it always involves npm and stuff that's going to happen. But specifically what I was talking about in this case was I was trying to help people make technical choices in 2019 by giving them some results from an analysis of the huge pile of data that npm has available to us about what people who write JavaScript are up to.

The two sources of data that we used were basic registry stats, so we can tell if people are downloading more stuff or less stuff on a per-package basis, and we also ran a really big survey of 16,000 npm users, and asked them directly "So what are you doing?"

The purpose of the talk is to address what turns out to be a sort of surprising, pervasive problem in JavaScript, which is that people are doing what they're doing without a good sense of whether or not it's a best practice. People do stuff, and they see a lot of articles about it, but they don't genuinely know if they've just got caught up in a fad, or if this is really something that everybody does... And we know, because we have data. So it behooves us to help you know, whether or not -- you know, you just read one article on Hacker News and nobody actually does that, or... Like, no, everybody does actually use this thing.

**Kevin Ball:** That's a really interesting point. So are there surprising examples of things that people actually are all using?

**Laurie Voss:** \[00:03:53.15\] There are tons of surprising examples of things that everybody is using. I think the one that's been getting the most gasps of surprise was the TypeScript stat, which is we asked people "Are you using TypeScript?", and 46% of people said yes. 46% of npm users is well over four million people, so that's a surprising usage space for TypeScript.

We were not expecting the result, and as a result, the question was kind of vague. Using TypeScript could mean that you are using some modules that are written in TypeScript, it could mean that you are writing TypeScript, it could mean that someone in your team is writing TypeScript and you have to use it, but you hate it. So when we run the survey again, which will be in a month or two from now, we're gonna be asking that question in a lot more detail, but at the moment, 46% is a lot; you can't ignore that. That's not just the Microsoft crowd, that's a whole bunch of people.

**Kevin Ball:** That is shocking.

**Laurie Voss:** Yeah. I think the other -- it's not surprising \[unintelligible 00:04:47.25\] is the adoption of React. React is being used by 60% of people who use npm, and no framework has ever got that big before; no framework has got that level of adoption before. The biggest framework prior to that was Angular, which peaked at somewhere between a half and two-thirds of that usage. Angular is a huge framework, but nowhere near as popular as React is now... And part of that is that React isn't a framework, React is one part of a larger framework. It's a solution to Web Components that share state; and you can use them to build web apps, but you can also use them to build mobile apps, and you can also use them to build desktop apps, and I think that's part of why React is seeing such adoption, because people who are not working in the web space at all - they're just working JavaScript per se - are adopting React, and that's fueling React, because it has all of these bug fixes, and it has all of this extra quality that comes from a larger user base that's being pushed back into the web stack, even though there are more people using it than that. So that's a really interesting mechanism there; that decoupling, which is unique in the web frameworks that I'm familiar with, has been tremendously successful for them.

**Kevin Ball:** That is really neat. One of the things I've been seeing is there's a lot of cross-talk across frameworks, in a way that there didn't necessarily use to be... Angular, React, Vue, Dojo - they've all kind of consolidated down to a bunch of best practices, and then they have kind of unique takes on those.

**Laurie Voss:** React Router, which is the most popular router framework for React applications - it is in fact Ember's router. \[laughter\]

**Kevin Ball:** Yeah, which is great for the web, that they're actually -- essentially, lots of different experiments going on, but then when something proves out, it gets quickly cross-pollinated across all these different things.

**Laurie Voss:** Yes, and it happens a lot faster on the web than anywhere else, I think. And I think part of the reason for that is JavaScript's sort of famous love-it-or-hate-it predilection for many small modules, right? As soon as something -- you know, it's not that when you see a pattern in another framework you can start rewriting your framework to start using that; you can just pull in that package any time, you can just use it, without having to copy or do a whole bunch of work.

**Kevin Ball:** Yeah. That is interesting. I'm curious, for the survey that you did, of npm users, how do you control for predilection to respond to surveys? For things like enterprisy folks versus not, and other factors that may play in there.

**Laurie Voss:** Our website gets 10 million hits every 90 days, and we ran the survey for 90 days, so we're pretty sure that 10 million people saw the survey. I'm a data nerd, so I wrote a 5,000-word blog post about the methodology and all the things that are wrong with the methodology. The ultimate answer is you can't, but the saving grace there is the survey is definitely biased towards people who would answer surveys, but there's no reason to believe that people who are biased towards answering surveys would be particularly in one camp or another; there's no reason why React users are more likely to answer a survey than an angular user. I cannot think of a reason that an enterprise user would be more likely to answer a survey than a user who's in full-time education.

There's definitely some bias there, but the bias is universally, across all groups, towards people who have some free time this afternoon.

**Kevin Ball:** \[00:08:23.01\] Right. The survey is anonymous?

**Laurie Voss:** The survey is optionally nominated. One of the things that we wanted to do when we were doing the survey is share the data with everybody, but unfortunately, as a result of not strictly saying this should be anonymous, people put a ton of really important personal information into their survey responses, so it made it very hard to put out into the world. We had to put out aggregate results only, because people kept typing their email addresses and snippets of code into our survey boxes... We can't give that away, that's not safe.

**Nick Nisi:** What does the survey tell you about the language itself?

**Laurie Voss:** What about the language? It tells us all sorts of things about--

**Nick Nisi:** Does it tell you anything about -- I probably took it, but I can't remember actually taking it, but... Does it tell you about people maybe using newer features of the language, or...? It probably tells you that, mixed with data about what's actually being downloaded from npm; it probably tells you what people are using in terms of like Babel, and other things... Does it glean information about specific features of the language that are very popular, or anything like that?

**Laurie Voss:** There's another survey the name of which I have forgotten, which focuses on the specific features of JavaScript. As the npm survey, we are more interested in what packages you're using, we're at sort of a slightly higher level of abstraction... So we ask about what tooling you use. We asked about TypeScript, we asked about Babel... I think it is 69% of people are using some kind of transpiler, and within that group, 80% of them are using Babel. Babel is tremendously popular.

**Nick Nisi:** That's a really interesting facet, because it tells you that most people are not just writing raw JavaScript.

**Laurie Voss:** Yes. The sort of baseline answer to the survey question about tooling, the sort of 100% bar answer was "We hate tooling. We would like there to be less of it. Why do we have to do all of this configuration? Why do we have to do all of this setup? Why is JavaScript such a pain in the ass to use in 2018?" And the base answer is it's our fault. Like, npm and Node produced this gigantic pile of now 808,000 libraries in npm... And I remember in 2014 thinking, "We are gonna have to come up with a story for the front-end people. This transpilation thing - this seems like it's a real pain in the ass. No one's gonna do that.

And there's all these web developers, there's these great libraries - we should really make them available to web developers", and it turns out npm didn't have to do anything; everybody just figured it out on their own, and Webpack and Babel came along, and now everybody who's doing web development is using npm to do it... But there's a fundamental point of friction there, which is that all of these libraries were written in CommonJS, which is the module format for Node. And CommonJS does not work in browsers, it was not designed for browsers; even if browsers supported it tomorrow, it would be a bad idea, because it's synchronous. It's not designed to work in a browser environment at all.

So everybody has to transform JavaScript from one form of JavaScript to another form of JavaScript for the dominant use case. The dominant use case of npm is "I use a bunch of npm modules on the web", and that is the least convenient use case right now. And that's a huge problem for JavaScript in general.

\[00:11:59.12\] One of the strengths of JavaScript historically has been that it's easy to get going. It's easy to learn, there's not a bunch of ceremony, you don't have to do a bunch of compilation, and we've sort of accidentally backed ourselves into this corner where that's not true anymore. I think one of the things that the popularity of TypeScript is showing is that if that's true, if to do JavaScript on the web you have to have a bunch of tooling and ceremony anyway, there's no reason that you would stick with vanilla JavaScript at all. You can adopt TypeScript; but now WASM has happened, WebAssembly, which allows you to compile any language into basically JavaScript bytecode that can run in the browser. And if you are a C++ or a Java or a Rust developer today, and you're like "Well, I could learn JavaScript, or I could just compile my language down into JavaScript and use it directly, with all of the npm modules working just fine, why would I do that? Why would I bother?"

This is not a problem for npm. Whether or not people continue to use JavaScript or they use WASM compiled modules from other languages, the gravity well of these 800,000 libraries is gonna keep people putting them into the existing pool of libraries, so that they can use all of them at once... But it is a problem for JavaScript, right? JavaScript has always been the default language of the web. WebAssembly creates a universe where that doesn't have to be true, and if JavaScript doesn't basically get its act together, it risks losing this really privileged place it has right now as the default language of the web.

**Nick Nisi:** I think a lot of it is because the new features come out, and they're very helpful; a lot of it is syntactic sugar, but it just makes us more expressive with what we're trying to write... but when it comes out and it gets finalized, and even if you're waiting until stage four and things that are for sure going to be in the next version of the language, on the web at least, a lot of us still have to support all the browsers, or enterprise versions of more modern browsers that won't have those features for maybe another year or two.

**Laurie Voss:** Absolutely. One of the things that a couple of people have been talking to us about recently is one of the things that npm has data about is what JavaScript features are supported on the platforms people actually are deploying to. We know what versions of Node you're using, we know what versions of Babel you're using, we know what versions of everything that you're using. This is something Babel has tried to address recently by babel-preset-env. They've basically said "Too many people are compiling down to too old a version of JavaScript, and you didn't need to do that. Use babel-preset-env and we will make sure that you are using a good medium of new features versus compatibility." Npm should be doing more on that front.

We have more data than anybody else about what people are using; we should be able to indicate to authors and users, you know, "Only 2% of users can't use this feature. It's safe. Or if 2% is too big for you, it's not safe." We can give ambient information, and without having to do any kind of hard and fast "You can't publish that feature anymore" stuff, which is totally contrary to our ethos; we can just nudge people towards "You can use this now, it's safe. We promise. We've got the data."

**Break:** \[00:15:25.11\]

**Nick Nisi:** Without getting too deep into a debate about the module syntax, do you see that as a way to smooth things out going forward for the web, as maybe more ES module support comes to modules that are published to npm? I mean, it's not even out yet, but as that goes forward...

**Laurie Voss:** My ideal state-- I don't think we'll ever get rid of transpilation in general... a) Because people always want features that aren't quite there yet, and b) transpilation often provides efficiency. Bundling is an efficiency gain that is over and above just being able to use it at all. Bundling provides efficiency gains that are always going to be true. It's always going to be faster that way, because the web is the web.

So my ideal state would be that transpilation and bundling were an optional step. I would like a newbie, or somebody who doesn't care too much about performance, that are just writing an internal app, or a demo or something, to be able to write just JavaScript, have import statements work, both in Node and on the browser, and be done with it... And then think about transpilation and bundling as that thing that they can do later if they want to, if it matters to them. That would be more accessible and better for the language.

**Kevin Ball:** Yeah. I'm not sure that... I think folks have looked at this -- once you adopt a build step, it's extremely rare that you're gonna go back, and there are real benefits to having that level of machine processing, and optimization, and various other things in there... But it puts a barrier in place. And if we can just get rid of the barrier piece and say "This is how you go from dev mode to pro mode..."

**Laurie Voss:** Right. The history of technology in general is always like "Whatever is the easiest to get started with wins over and above any other features that it's got", right? That's how PHP became the dominant language of the web for a very long time. People were like "Oh, this thing is clown shoes, and it's not for serious programmers", and I'm like "Yes, but I can get somebody started on a PHP application in 10 minutes, and I cannot do that with Java", and therefore PHP became a gigantically installed language.

One of the drags on React's growth recently has been people adopting Vue instead, because Vue has many of the benefits of React, but you don't have to make all of these choices upfront, before you're really ready to make these choices. Vue is just like, "We've figured it out. Do a Vue app, and you can extend it later if you want to, but the defaults work fine." That's a great story. Why did MySQL eat Postgres' lunch? It's because MySQL was easy to install on Windows... And over, and over, and over, technology is littered with "if you make it accessible to newbies, your technology will win", and transpilation creates a barrier that makes JavaScript harder for newbies, and therefore I think it's a bad idea. Transpilation by default anyway...

**Kevin Ball:** You raise an interesting point when you're talking about Vue, and how more and more people are starting to take Vue instead of React, and things like that... What do you see as the lifecycle of a project like React? I'm actually doing some research using your API right now, because npm has phenomenal data on this. I'm looking at what does Vue's growth path look like relative to React's growth path. It's several years later, in a lot of different ways...

**Laurie Voss:** Right.

**Kevin Ball:** But you've looked at this over multiple frameworks, so what is the typical lifecycle of a JavaScript framework?

**Laurie Voss:** Most tools, most frameworks have usually a lifetime of about 4-5 years; that's what it looks like. They peak, and they nothing falls off a cliff, they just very, very slowly decline... That's because nobody takes an existing project and switches to a new framework. They maintain the old project in the framework it was written in, and they start new projects in the next thing. JavaScript frameworks in particular show this pattern of like a sudden peak, and then a slow decline, as something similar but better begins to absorb the new users.

\[00:20:12.07\] My favorite example of this is Backbone, which at one point was 1% of all registry downloads, and now it's an afterthought. Most people don't think about Backbone, but backbone still gets 250,000 a day, because people are still maintaining a lot of stuff in Backbone.

**Kevin Ball:** Well, the WordPress REST API stuff is still using Backbone collections and models... Even in Gutenberg, which is coming out in React, the stuff dealing with data structures is Backbone.

**Nick Nisi:** Wow.

**Laurie Voss:** Right. These things are surprisingly long-lived... Although there are a couple of frameworks which didn't die, and instead they sort of transcended, and my favorite example is jQuery. Everybody's like "Oh, jQuery is old news. Nobody uses jQuery anymore." That's not true. Everybody uses jQuery. jQuery's primary contribution to web technology was that "the DOM API is a pain in the ass, let's use CSS selectors to select DOM elements instead", and that is built into browsers now. The thing that they invented is part of the web now. It's absolutely bedrock; everybody uses jQuery every day. It merged into the walls and you don't even know that it's there anymore.

**Kevin Ball:** I wonder -- is that gonna happen with React? We have this drive towards Web Components, but as far as I've seen, Web Components are still imperative. One of the really interesting things that React introduced was this state-driven way of interacting with your rendering engine. "I'm gonna change state, and everything's gonna kind of happen and trickle down from that", and all the different JavaScript frameworks seem to have coalesced towards that model of having -- you know, you manage state, state drives rendering, and it makes reasoning about your application a lot easier. I don't think Web Components is there yet.

**Laurie Voss:** I kicked off a really interesting thread on Twitter a couple of months ago, where I asked people who have actually built things with Web Components and like it, "Tell me about your experience with Web Components." I was very clear. I was like, "If you think Web Components are bad and you're not using them for some reason, I am not interested in hearing about why. Only people who actually use Web Components in production, for something, tell me what you liked about them", and it kicked off this really interesting sort of mini-conference on Twitter, where a whole bunch of people who are using Web Components talked about their experiences.

What I came away with was even the people who are most enthusiastic about Web Components recognize that they are - I don't know if fatally, but certainly currently flawed. They liked how fast they were, because they're native, so they're very fast... They liked that they had a good backwards compatibility story, because if the browser doesn't know what a tag means, it just ignores the tag and renders this stuff inside of it, which is a great fallback.

They didn't like the way that you have to put stuff together; like you said, it's very imperative. There's a lot of DOM manipulation in JavaScript, and nobody likes doing that... And my conclusion - I don't put it in my future talk, because it doesn't have a bunch of data to back it up... My own personal gut-check prediction is that Web Components - they were a top-down effort by standards bodies to fix a problem without looking at the user space enough, and as such, they will fail, like all of the other times we've tried to do that... Like XHTML 2, and HTML 3, and all the other times when the web standards bodies tried to get ahead of what usage was, they guessed wrong, and nobody used it, and we abandoned those things.

\[00:23:42.19\] The massive usage of React, the massive popularity of this pattern even outside of React, of stateful components and declarative structures - we should, as a JavaScript community, be thinking about blessing that. I would like JSX to be a part of the JavaScript standard, and every time I say this, people who are in JavaScript are like "No, it's fundamentally incompatible with JavaScript's syntax, there's ambiguities, it's not gonna work." I'm like, "We have dealt with much, much, MUCH worse fundamental incompatibilities in this platform. You are just whining. Get your stuff together and put JSX into JavaScript, so that it goes a lot faster and we can all stop using--", like, I would like to see React transcend, or something along the lines of React components transcend and just become the way that we do modules.

**Nick Nisi:** Yeah. And JSX, like syntax, almost did make it into the language, in ES4.

**Laurie Voss:** Right.

**Nick Nisi:** \[unintelligible 00:24:32.09\] was something that was proposed.

**Laurie Voss:** Right, yeah. I don't know if you ever used that.

**Nick Nisi:** No.

**Laurie Voss:** I actually had to use that in production. It was a nightmare. It was all of the joy of a DOM API, with a whole bunch of angle brackets for no reason. \[laughter\]

**Nick Nisi:** That seems like a lot of React right now though, too... \[laughter\]

**Kevin Ball:** I know... It's funny, because I did React a fair amount for a while, and then this last year I've been almost entirely doing Vue, and now when I go back and I look at JSX, I cringe... It's interesting, because while React itself is fundamentally declarative, which has lots of incredible benefits to it, JSX is almost like an imperative embedded template. The contortions you have to go through to create some things in JSX, because it is JavaScript and it is relatively imperative, make me cringe, now that I'm back working with powerful templates.

**Laurie Voss:** I have non-data-backed strong feelings about templating languages...

**Kevin Ball:** Yeah, fair.

**Laurie Voss:** Basically, I believe in the maxim that "All templating languages slowly accumulate features until they are PHP." \[laughter\]

**Kevin Ball:** That's great.

**Laurie Voss:** The temptation to just add, and add one more thing, until it becomes Turing complete is too strong for a templating language. So the thing I like about JSX is we don't have a templating language; it's just JavaScript. We were gonna get there anyway, so we just skipped to the final page, and said that it is JavaScript, and it's all the messiness of having to use an imperative programming language as your templating language, because you were gonna get there anyway.

**Kevin Ball:** Fair enough. \[laughter\] I like that description. You're just gonna reinvent PHP... That's great.

**Laurie Voss:** The thing about having been a web developer for 22 years is that I spend an awful lot of time being Old Man Yells At Clouds now. \[laughter\] I've seen us do this specific thing wrong three or four times, so I'm...

**Kevin Ball:** I'm done, yeah.

**Laurie Voss:** Fool me three times, I'm done. \[laughter\] I'm not doing it again.

**Kevin Ball:** I feel you, for sure. That's great.

**Laurie Voss:** What the JSX example right now highlights is something else that Babel sort of enables, but that I haven't seen folks do very much with... It kind of lets us develop domain-specific languages that embed directly in JavaScript. As you highlight, the web is the dominant platform for JavaScript, it has been, and it looks like it will continue to be. JSX maybe deserves to be blessed, because it is a domain-specific language for rendering web content; that's what it is, and if that's what JavaScript is meant to tackle, why not pull it up...? Why not transcend it, if I use your language.

I wonder if there's other areas for that though... I don't know, maybe you have data on this. I've always wondered why there weren't more JSX-style things where we're gonna embed a domain-specific language and then compile it into JavaScript.

**Laurie Voss:** I mean, what is the difference in your mind between that and Typescript? Typescript is a domain-specific language where they added a bunch of types. Typescript describes itself as a language, but Typescript is not a language; Typescript is a way of automatically writing tests in JavaScript. That's what types do - they add tests to your JavaScript, because of the way that you wrote it... It is a domain-specific language for testing, that also is your code at the same time. \[laughter\] I'm not sure in my own mind where the boundary is between a JavaScript alternative and a domain-specific language within JavaScript is.

**Kevin Ball:** \[00:28:14.12\] Fair point. Yeah, I'm not sure. I think we get a little bit of that as we evolve the language, too. Or creating syntactic sugar for patterns that recur over and over again, to make the way that we're writing code more expressive for that.

**Laurie Voss:** Yeah, I think one of the things that's been interesting in the last 4-5 years is as more and more people from other language communities have arrived in JavaScript land, usually against their will, they've sort of brought their favorite language features into JavaScript with them. Modern JavaScript certainly has a lot more Ruby structures in it than I would have ever predicted would get in there.

It makes the language more expressive, but I think that the downside of making a language more expressive is it also makes it harder to learn. JavaScript in 1996, when I learned JavaScript - it had like three language features that were of any importance. If you've got 'if' and 'for' and 'while' down, you were pretty much done. That was it. That was all there was in JavaScript. And now there's like a zillion subvariants of 'for', and I have to google them every time... And there's all of these syntactic sugars, and the triple dot syntax, which means one thing in one place, and a completely different thing in the other... And we're got fat arrow functions, which have a completely different syntactic binding for this than an ordinary function... All of these little things, which we were like "We added this because it was really convenient and it solved a problem" - they are creating a barrier to newbies. They're like "I wrote a function that was one function, and then I changed the function format to another function, and suddenly my code is broken." That's really confusing for somebody just arriving in the language.

So expressiveness is good, but it's not without downsides. I don't think adding features to JavaScript forever is a good idea.

**Kevin Ball:** Yeah, context in this has long been confusing, and each iteration just makes it more confusing, because there are more ways to do it, and each have their own subtle nuances.

**Laurie Voss:** Right, right. Eventually, you end up with a Perl obfuscation contest, where like "Is it line noise or is it Perl?" \[laughter\]

**Kevin Ball:** I heard a description of \[unintelligible 00:30:24.05\] as "It's a write-only language."

**Laurie Voss:** Right. That's the problem with sufficient expressiveness - you can express anything, and no one can read it anymore.

**Break:** \[00:30:40.17\]

**Nick Nisi:** There's a lot of other nuances to the language now too, with async programming, and especially async/await. That's a really great syntax, and I love using it, but it can be very easy to shoot yourself in the foot with that as well, and not realize that you need to return a promise from this, or return a value in a specific way, and that could just get swallowed up if it's not -- it's a very subtle bug, that can go unnoticed easily.

**Laurie Voss:** Yeah. I mean, it's a lot better than using actual promises, and the observed reality is that it's a lot better than callback hell was...

**Nick Nisi:** Yes.

**Laurie Voss:** So I'll take subtle bugs over giant, glaring bugs any day.

**Kevin Ball:** I honestly think using actual promises, once again, in the learning stage, is really helpful. I would rather somebody do promises first, and then go to async/await, than try to jump them straight to async/await.

**Laurie Voss:** This is one of the problems I have with web technology in general, especially when -- you know, I talk at bootcamps all the time, and people are like "So how did you get started in web development?" I was like, "Well, I got started at the same time as web development." I learned web technologies by having them accumulate around me. I don't know how I would start learning web development if I had to start today. It's big, and it's confusing, and the only reason that I know it is because me and it have been around roughly the same amount of time. \[laughter\]

It's really hard to learn, and that's one of the reasons I'm like "I don't know..." In particular, I get angry when people say "Oh, people should learn the fundamentals." I'm like, "I have no idea what the fundamentals mean anymore." People used to complain at me because I was using PHP, and PHP parsed the HTTP headers for you, and they were like "You need to know the fundamentals of the web. You should be parsing your own HTTP headers, dammit." I'm like, "Nooo, I shouldn't...! That would be a terrible idea."

And now you get people who do React, and people yelling at them, going "You don't know JavaScript, you just know React", and I'm like "So what...?" If you have two months to learn a language at a bootcamp, there's no way that you can start with vanilla JavaScript and work all your way up to the current incredibly complicated state of React. You have to just learn React, and trust the people will pick up the other stuff that is important over the rest of their career, and you also have to accept that there's some stuff that you think of as fundamental that's just never going to be important anymore.

There's people who are like, "Oh, if you don't understand pointer math, you don't really understand programming." I'm like, "No one has used a pointer since 1995, my friend." \[laughter\] Not unless they really wanted to.

**Kevin Ball:** Yeah, I think getting to where you can build something that is cool - and that threshold has changed over time; it's like "What is something cool?" But the faster you can get somebody there, the more likely they are to actually stick, and keep doing development.

**Laurie Voss:** Right. That's the joy of the web as a platform, right? It's like, you start programming, and the same day you've got a thing. You've got buttons you can click, and stuff happens, and a line appears on the screen... And that doesn't happen with any other programming language. Programming languages that are not the web, you're like "Well, I worked all day, and if you run this command, it spits out the phrase Hello, world." Right? But on your first day as a web developer, you're like "I built a whole app. It's done. It's sending emails to people. People are getting genuine value out of this." The web has so much more power, and it's so much more satisfying as a platform...

**Nick Nisi:** Yeah.

**Laurie Voss:** ...which is one of the reasons that I describe myself as a web supremacist. I think it's great, I think it's awesome, I think it's better than any of the other platforms. I'm here for all of the platforms, but this is mine.

**Kevin Ball:** \[00:36:01.25\] Yeah... I think the fundamentals debate is an interesting one, because I similarly -- I'll push back at folks who say "You've gotta do that first", but I also do think it is important that you keep in mind that there may be fundamentals that it's worth learning about. Don't learn React and say "I'm done." This is not an industry to be in if you don't wanna keep learning... Because stuff is gonna continue to change, but there's also layers upon layers -- like, the number of abstractions you have at the web is mind-boggling. How many places in human endeavors can you go down 10, 12, 15 levels of abstraction, at each one its own field of study?

**Laurie Voss:** Right. The chip designers are like "Everything is a level of abstraction to what's happening in the silicon", and we ignore that completely, until "Whoops!", it turns out that we made a performance enhancement in 1998 and it turns out it made all computers after 1998 vulnerable to timing attacks, and now we're screwed. That was a real case of the abstraction leak coming up to bite us; we were like, "Oh, well, it's in the silicon. There's no way we can patch this..."

But you make a good point, which is if all you know is the frameworks, and frameworks have a lifetime of five years, then your risk becoming like a ColdFusion developer; you only ever knew ColdFusion. And there are still lucrative jobs to be had writing ColdFusion, but only about 50 of them, and... \[laughter\] Like, that's fine, but you probably should have switched to something bigger at some point in your career. That's a real risk for people who get too deep on one framework.

**Kevin Ball:** Yeah. The one nice thing with the level of convergence we're seeing in front-end frameworks is if you get really good at React, picking up Vue is gonna be pretty straightforward... And vice-versa - if you get really good at Vue, picking up React is gonna be pretty straightforward.

**Laurie Voss:** Yeah.

**Nick Nisi:** Yeah, that's because there's really good ideas that are coming out of those, and just being implemented in subtly different ways, but...

**Laurie Voss:** Yeah, the convergence of the frameworks is definitely an indicator that this has gone beyond a framework choice to a thing that we should transcend.

**Nick Nisi:** Yeah, exactly.

**Kevin Ball:** Are there any other things on the horizon that you see, of - okay, this is an area that maybe isn't as visible as the massive web frameworks of React and Vue and Angular and all those things, but where there is some level of convergence or accelerated activity going on?

**Laurie Voss:** I think 2019 might not be the year that you put GraphQL in production, but it's the year that you see somebody else put GraphQL into production, and you end up having to learn it as a result. The growth of Apollo, which is the most popular client library on npm for GraphQL stuff - the growth of Apollo is staggering. It looks like early React. And there's some real benefits there to people who are starting an API from scratch. I don't wanna have to use an ORM - it's a nightmare - but I would like to be able to make complex queries of a data model without having to write a zillion REST endpoints. GraphQL has an answer for that. I think everybody should dip their toe in that water this year.

**Kevin Ball:** I've seen some interesting things if you have an existing REST API - you can essentially wrap it with GraphQL, and get started dipping your toes in without having to get rid of your old API, or anything like that.

**Laurie Voss:** Absolutely.

**Nick Nisi:** Going back to the data from the survey a little bit - has that transformed npm, the tool, in any way?

**Laurie Voss:** \[00:39:40.27\] Absolutely. I think one of the strongest points of data that you can get is competition, and that brings up Yarn. Yarn was Facebook running into a problem before anybody else did. Facebook were writing bigger and more complicated web applications than anybody else, and as a result they were one of the first - they weren't THE first, but they were one of the first people to run into a problem with semver. When you had 20 modules in a tree and you were using npm's package.json and you had semver-compatible updates being pulled in automatically, that was fine; the chances of somebody having accidentally released a breaking change disguised as a security release were pretty low. But the average web app these days has 1,000 modules in it. Some of them have 2,000 modules in it, and the chances of nobody in that tree having messed up even once are nil.

Facebook was having every build be broken all the time, so they were like "No, this is untenable. We are locking everything down to minor versions", and that was literally yarn's major innovation. I don't wanna say their only innovation, but it was the big thing that Yarn was doing. It was like "We will lock everything by default." We'd been considering for a long time, and the adoption of Yarn showed us that we were overdue on that one. We took too long to do that.

In npm 5 we put package-lock in. Package-lock it turns out also has some strong performance benefits, simply because you don't have to be checking the server to see if there's anything newer, because you know that it's package-lock. You just download the stuff that's in package-lock. Using a lockfile automatically made npm twice as fast, and npm 6 is 20 times faster than npm 4 was...

**Kevin Ball:** Wow...

**Laurie Voss:** ...because this -- it's a Discourse group called Package.Community, which is a domain, because this is 2018... \[laughter\] The Yarn developers are in there, the npm developers are in there, pnpm - all of the other alternative package managers are in there, and everybody started sharing code with each other about like "How do we make these things faster?" and they all got faster. The result is they're all now basically the same speed, because all of the low-hanging fruit is gone. We did everything that we could, and now all of the package managers are about the same speed.

**Kevin Ball:** That's another really nice example of the cross-sharing of information that we're getting now.

**Laurie Voss:** Absolutely.

**Kevin Ball:** You've been in the industry even longer than I have, I've been around a while, but it just feels like we're getting a lot better at the fundamental underpinnings of "How do we make this stuff better?"

**Laurie Voss:** I don't know, I think tech has always had that in its DNA in a way that no other industry has. When a car company comes up with a new way of making their car more fuel-efficient or anything, they don't go to CarCon and have a huge keynote address about "You too can make your cars faster!" They're like, "No, we're keeping this under our hats. We're gonna patent it, and no one gets to use it forever." But we do the opposite - as soon as we figure out how to make something cool, we tell everybody exactly how to do it. We're like, "And you too should build your web app better!"

That's great, it's one of my favorite things about tech - everybody just by default shares what they know. It's one of the things that keeps me motivated about tech. I think we're getting faster at it, but I think we've always been good at it.

**Kevin Ball:** Awesome. Anything else you wanna talk about?

**Laurie Voss:** Not off the top of my head, no. I think it's been a super-fun conversation. We've hit all of the points I wanted to hit, I think.

**Kevin Ball:** Yeah, this has been great.

**Nick Nisi:** Yeah, we really appreciate you sitting down with us.

**Kevin Ball:** Thank you so much.

**Laurie Voss:** Thank you for having me. It's been a great conversation.
