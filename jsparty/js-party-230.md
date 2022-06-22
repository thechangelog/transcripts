**Nick Nisi:** Hoy-hoy, JS Party. It's me, Nick Nisi. Welcome to another exciting party with JavaScript... Or TypeScript, probably, in this case. With me today I have Kball. Kball, how's it going?

**Kevin Ball:** Going alright, except my voice is down in scary monster mode today, but... That's what you get when you catch a cold.

**Nick Nisi:** Oh, I love it. Batman. It's reminded me of Batman a lot.

**Christopher Hiller:** Yeah.

**Nick Nisi:** And that "Yeah" you heard was Chris, a.k.a. b0neskull. How's it going?

**Christopher Hiller:** I'm fit to get my party on!

**Nick Nisi:** Yeah! Awesome, awesome. And we have a special guest with us today, and that is Josh Goldberg. Josh, how's it going?

**Josh Goldberg:** Hey, I'm so excited. How are you doing?

**Nick Nisi:** Fantastic now that you're here. We are going to talk about a lot of exciting things, including... TypeScript! We should have a ringtone -- or not a ringtone, a tone for TypeScript when that comes up, because I try and bring it up a lot... And we're going to do it a lot on this episode.

**Kevin Ball:** So if the BMC beats that we just intro-ed to are the JS Party tones, what's gonna be the attitude of the TypeScript tone? Is it more like stuffy, in some way? Or, like, classical music?

**Nick Nisi:** I'm thinking like ABBA...

**Josh Goldberg:** I was thinking like an angelic choir, sort of deal...

**Nick Nisi:** TypeScript...!

**Josh Goldberg:** Yeah.

**Christopher Hiller:** Canon in D...

**Nick Nisi:** Josh, tell us a little bit about yourself.

**Josh Goldberg:** Sure. Hello, everyone. I am Josh. I'm a frontend/general developer from New York. I used to work full-time for Codecademy previous Microsoft... But now I'm a full-time open source maintainer, contributor person, and as of this week a textbook author with O'Reilly. I made a book, Learning Typescript, that's out now, that you should all buy several copies of, and leave me glowing reviews for.

\[04:15\] I mostly work around static analysis in the JavaScript ecosystem, so things like TypeScript ESLint, which is the tooling that lets you run ESLint on TypeScript, and then I sometimes contribute to TypeScript also when I have time. So yeah, that's me... Happy to be here.

**Nick Nisi:** Yeah, and we're very excited to have you here as well. Congrats on the book, that's really exciting.

**Josh Goldberg:** Thank you.

**Nick Nisi:** Tell us about the process of becoming an author.

**Josh Goldberg:** Sure. I did not expect to do it, I'm still somewhat shook by the whole thing happening. O'Reilly reached out to me almost exactly a year ago, or a little bit -- we started a little more than a year ago, because I'd been doing a lot of work around conference-speaking, and my blog, and open source contributions, and I was getting involved at Codecademy, in their Learning TypeScript course, which we did end up releasing... And they wanted a book that can teach people who know JavaScript somewhat, but don't know any sort of types or other languages necessarily, the foundations and fundamentals of TypeScript. And that's pretty much what the book became - a ramp-up of "What is a type system? Why do you care? What are these angry, little squiggles in your editor? ...and here's how to really use that to your best advantage."

**Nick Nisi:** And we are all now, as of today, Chris, using it to our best advantage... Right?

**Christopher Hiller:** Yeah...

**Nick Nisi:** \[laughs\]

**Kevin Ball:** Oh, man... If this was all going out on video, that look right there captures Chris' take on TypeScript.

**Josh Goldberg:** One of the most sad people I've seen.

**Christopher Hiller:** I like the types, okay? I'm very fond of the types.

**Kevin Ball:** Is it just the compilation step that you don't like?

**Christopher Hiller:** Yeah, it's that, and it's just like, now I'm not writing JavaScript anymore.

**Nick Nisi:** Sure you are...

**Josh Goldberg:** So I try to avoid it.

**Nick Nisi:** With types.

**Kevin Ball:** Did you do the whole CoffeeScript thing, and did you insist that was different from JavaScript as well?

**Christopher Hiller:** No, I did not. I would not touch that. I've always been a purist.

**Josh Goldberg:** That's respectable.

**Christopher Hiller:** I'm one of those people.

**Josh Goldberg:** I'm very excited for the day when JavaScript has a type syntax built-in. Perhaps then you would like TypeScript a little more.

**Christopher Hiller:** As I said, I like types. I write all the JavaScript and I use all the docstrings, and it works great. And I don't have to compile it. And I can get definitions, or declaration files if I want to... And yeah, everything works super. No TypeScript.

**Nick Nisi:** Chris, you mostly work on Node stuff, right? So you're not really compiling, or anything.

**Christopher Hiller:** Yup.

**Nick Nisi:** I think the biggest thing for me getting over that hump of not caring about a compilation step was I wanted to use all of the new JavaScript features, and I would have to compile those anyway for the frontend... So TypeScript just seemed like a natural, safe way to get a lot of those new features in a curated package.

**Christopher Hiller:** Yeah. The newer Node versions have a lot of the fancy syntax and things that you wanna use, so I don't really see much of a need to compile down to ES5 or anything anymore.

**Nick Nisi:** Sure.

**Josh Goldberg:** Yeah. Out of curiosity, do you use any sort of type-checking on your JS docs? Have you tried running TypeScript in checkJs or allowJS?

**Christopher Hiller:** No, that's how I use it, yeah.

**Josh Goldberg:** That's perfect.

**Christopher Hiller:** Yeah, I'm working on a project called Appium; I don't know, you might have heard of it... It's kind of like Selenium for devices, and slowly it's kind of an older JS codebase, and I've just been adding all these docstrings over time, and we've got all these declarations generated, and everything... Yeah, it works really well. And the build fails if the type check fails, so...

**Josh Goldberg:** So you've been a TypeScript developer for a very long time then, and this is your favorite language.

**Christopher Hiller:** I like the types.

**Kevin Ball:** So draw the line there for me... The compilation phase... But what else are you including in TypeScript that you don't like, that's not the types.

**Christopher Hiller:** \[08:04\] Well, why are we talking about this? It's the language -- like, I don't wanna write .ts files. I try to avoid that, okay? But other than that - yeah, we do have a compilation step, but it's Babel in that project. And I know you can make Babel do that, but I haven't really seen the need yet... And of course, converting a JS codebase to TypeScript instead of a JS codebase with some comments is much more of a heavylift. But I'm just so accustomed to doing that now that any new module that I write is probably gonna just be JavaScript with checkJs enabled.

**Nick Nisi:** That's the real benefit. It's just a tool to give you all of these extra features, so that your editor knows more about how to help you correctly... And you're getting that, so we're all in the same family here.

**Christopher Hiller:** And as part of the build step, or whatever, the CI, the build -- there is no real build, but I just run tsc with no emit and if it fails, then I screwed up some types somewhere. Maybe I wanna emit declarations, or something, but... That's what I like. And I hear it's getting more popular, I hear...

**Kevin Ball:** This is an important context for anytime we talk about how b0neskull hits TypeScript - like, except for the types. Types are great.

**Nick Nisi:** \[laughs\] He doesn't wanna run a compiler, except for when he's running tsc with no emit.

**Christopher Hiller:** Mm-hm. So what I really want... Some months ago I popped into the issues on TypeScript ESLint, and it was like "Hey, can this work with JavaScript files?" in the comments, and it was like "No." I don't know if that was you that responded to me, Josh, but someone was like "No." And I was like, "Oh, well, I guess that's too bad, because that's what I really want." I wanna use TypeScript as a linter. I don't wanna use it as a compiler, I just want to lint the types, and sometimes like TypeScript ESLint - maybe there's some way to make it work, I don't know, but... That's what I want.

**Kevin Ball:** Maybe you could write an inverse compiler, that compiles JavaScript with docstrings into TypeScript and then run ESLint TypeScript on it. TypeScript ESLint. I cannot speak.

**Josh Goldberg:** That's actually a really good idea. I like that. I think that people get a lot of confusion, have a lot of confusion over what is a compiler, versus a transpiler, versus a linter. And the definition that I've personally been gestating is a compiler equals a transpiler plus a linter of some sort, where you're not using TypeScript for the transpiling part, you just want it for the linting part. And although TypeScript has historically focused on the compiling part and the linting part as kind of a unit together, it's very reasonable that in your use case, you're one of the very many, even major projects that don't want the transpiling, that it would actually get in the way. So yeah, I like that a lot. Someone should go do that.

**Kevin Ball:** If only we knew a full-time open source developer...

**Josh Goldberg:** Yeah, especially one who's well-funded. Paid well.   

**Christopher Hiller:** Yeah. And familiar with ASTs and linting... Anyhow.

**Kevin Ball:** That does get into an interesting area. I don't know if we wanna stay on the book in TypeScript or meander a little bit, but you mentioned you shifted to being full-time open source. I know that's something a lot of people are kind of interested in as a model... How is that working for you? How are you funding yourself, and how's that going?

**Josh Goldberg:** You know, you just made a very key assumption (perhaps mistake) that a lot of people do. You assume that I'm sufficiently funding myself, which is not a correct assumption. I'm making very little money from this open source thing. But that's okay. I have a wife who has great health insurance, that I can bum off of. But I am getting funded.

\[11:54\] I think a lot of people just wanna dive into open source just because they love it, but you need to prepare, you need to plan. I planned and prepared by getting active in a lot of open source projects, whether it's just contributing to TypeScript or other things, or actually taking on maintenance for TypeScript ESLint... You need to kind of justify yourself if people are gonna pay you money. You have to do a lot of work, kind of like an influencer, but I hope with less of a negative connotation. You need to convince people that you've got good things going on, you've gotta showcase your work and explain yourself.

So now that I've gotten used to just constantly spamming Twitter with links to my pull requests and whatnot, I'm actually really enjoying it. I've always wanted to do the fun part of coding more than anything else. I like working with people, mentoring, being mentored, team management etc. But what's always got me going is these are really cool things that you can do. You can write these linters that automatically lint, or whatever... And then you can find bugs automatically? That's incredibly cool. So that's made me very happy, and I'm just happy to be able to do that as much as I can per day.

**Nick Nisi:** It really seems like you're scratching your own itch, which is always the true definition of happiness, or the exciting thing that I would love to -- when I think about open source, it's because I want to contribute to the things that are helping me a lot, and scratch my own itch. It's the software I'm using, and it helps me more, which I like a lot.

**Josh Goldberg:** Yeah. And if you will permit me to go a little meta here, I love watching the industry and seeing these trends of how things are evolving over time. I think one thing that y'all were debating recently was single-page apps, a.k.a. day SPAs. Whether that's good or bad... And you see all these really fun advancements that go sideways, or forward, or even backwards sometimes in the industry... But the overriding theme is that people are getting better and better at writing more code, more rapidly, with fewer bugs. So to be able to take part in that, to write a rule in TypeScript ESLint that can catch bugs for people - that means that I feel like I'm helping advance the state of the industry. And even if I'm doing just this teeny little percentage, there are enough people impacted by my work that I can justify it as a positive effect on society. That's just a weird, good feeling. I like it. I wanna do more of that.

**Kevin Ball:** So you said you are not currently sustainably funding yourself on this... And I have gone back and forth and spent times where I thought "Oh, this would be great, to be a full-time open source developer", or whatever. So I'm self-support curious. But it sounds a lot like being an entrepreneur, where you're like "I have this cool idea, I wanna go do it", and then you find you're spending a lot of your time churning in money, which most engineers don't like doing. So I'm kind of curious, are you envisioning this as like -- is this a time-boxed thing in your life? Is this something where you would like to figure out how to make this sustainable indefinitely? Is this an exploration with no goals?

It feels like the type of thing where the reality of working on open source most of your time, for most of us - and there are a few exceptions... Evan You got funded to ridiculous amounts for working on Vue, because he has these particular successes with that. Or there are people who get to work on open source as a part of their company, and if their project is successful enough, the company will just be like "Your projects contributes to the ecosystem in a way that broadly makes our company better. We will pay you a salary, just keep working on your project." Vercel has been doing this with a lot of folks, and there's pros and cons to that type of corporate thing... But the individual making their way just doing full-time open source seems to be a pretty rare model because it's so hard to get anywhere close to a tech salary. So I'm like, do you have benchmarks? "I'm trying to get to this level of support", or it's just like -- where is this going for you?

**Josh Goldberg:** I'll let you know when I figure it out. Who knows when...? Yeah, it's a great question. I would love to become like a Sindre Sorhus, Evan You etc. type of person, who just makes a salary doing open source. I have this annoying mental block though where I feel bad splurging on myself, like going out for a nice dinner, if I know that this is based off of people giving me what could be misinterpreted as charity. I know that's wrong, but it's something I'm trying to get over.

\[16:07\] So right now for money, in addition to just living with a person who has a full-time job, I'm doing consulting on the side, or gig economy style things, like pull request reviews. But I think a goal that I could strive towards is to have enough sustainable backers so that I earn, rather than, say, a hundred dollars or a couple hundred dollars a month, maybe like one or two thousand a month.

For reference here - if you look at the salary of a software engineer... Let's say that you're looking at a beginner salary, which is like three digits, a hundred bucks an hour, or some situation... Like 50 to 100 an hour, just to make the math easy... Let's say $50 an hour, which is a really nice salary for a lot of people. In order to get yourself into the top - I think it's like five or ten, or some single-digit percentage of GitHub Sponsors... That's your monthly intake. $5 or $10 a month on GitHub Sponsors is a pretty impressive amount, honestly. Most people don't get all that much. So it's a very different kind of economy, talking about your full-time job, where people can get $200,000, $300,000 a year after a decade of experience, versus GitHub Sponsors where a percent of a percent make minimum wage.

Yeah, I think - to speak to the last point, the company sponsorship full-time is very interesting and appealing, and if Vercel or someone wants to talk to me about it, just pay me to do my open source. I'd love to hear it; happy to promote your company. But one of the reasons why I love doing open source full-time is that I get to work on the projects that I get to work on. If there's some cool little thing that I wanna do... If let's say I wanna work on a game engine specifically dedicated to ripping off old Nintendo games - which I plan on continuing later this year - I don't think Vercel is gonna be too thrilled to be paying me a wage for that... So we'll see.

**Nick Nisi:** That was a very specific example, I know pulled from your past. You've talked about that in conference talks before... That's wonderful, getting -- what was it? I don't know if Cease and Desist is the right terminology, but...

**Josh Goldberg:** That is.

**Nick Nisi:** Yeah.

**Josh Goldberg:** I bring it up once in a while because I think it's hilarious. Nintendo sent me a DMCA notice for a Mario rip-off I made... But I think there's also a lot of joy. I've been reading a lot about managing stress and taking time off of your work to make yourself happy, because that's a thing I need to be better at. And there's all sorts of research showing that when you let p people spend not just 20% time, but a significant portion of their time as they need it, to do fun projects, they come back invigorated and juiced to do more stuff, with all sorts of great ideas. And I wanna be able to rapidly, wildly fluctuate between super-productivity on TypeScript ESLint or whatnot and these stupid meta side-project that I've got going on.

**Christopher Hiller:** So I'm in that situation where for the past five years or so I've been employed by a company to work on open source. And I like it, I prefer to work in open source; I like working async, I like working with people across the globe on community projects... And it is community projects, it's not like "Oh, our company owns this open source projects, and we're just gonna run it like a normal product." It's community open source, so I really love that. But I don't do it for fun anymore. At the end of the day, I'm done. I don't go and hack on some sort of cool project.

Usually, the things that I do think of, that I need to scratch my own itch - I can rationalize them. So if I need to build that new little tool for something to help my dayjob, I'll go and do that on the clock, not for fun after work. I'll do other things after work, and play Minecraft, or something. But it really kind of changes your -- I think I was ready for it, I think I got kind of burnt out on just kind of working all day, and then working at night the open source stuff.

\[20:00\] I think it works for me... It may not work for others, but... You can do it. I'd recommend giving it a shot if you can find a company who's invested in especially a community-owned open source project... Like, I don't know, Kubernetes, or something like that.

**Josh Goldberg:** It's awesome that you've found that and had it for so long that there is a company out there that's willing to spend so much because they've recognized the value of open source. It really is super-valuable; incredibly, almost immeasurably valuable to have sustainably-funded, popular open source projects like what I'm imagining you're working on.

**Christopher Hiller:** Yeah. I mean, you know, certain companies will base their software-as-a-service on some sort of foundation-owned project, and it's in their best interest to make sure that project is healthy and moving forward. That's where you get in.

**Josh Goldberg:** So if they wanted to pay me to convert it to TypeScript, that would be okay with you?

**Christopher Hiller:** I suppose... But the problem with that is it's still a community project and we all have to agree. You can't be a company contributing to this community project and say "Well, we want this thing... Let's ram it through." You can't really do that.

**Kevin Ball:** Maybe they'd pay you to build that reverse compilation, so that they could run linting on it.

**Christopher Hiller:** Right. But Josh, if you came into the project and wanted to do that, I would say no, because I don't want that. So I would block any sort of PR. So that's the challenge, you can't be a company -- and companies can be kind of--can be kind of weird about it, and feel like "Well, what's the point, if we don't have total control over this thing?" And it's how you have to work. You have to put your people on it and trust that your people can work with others and get done what needs to get done.

**Josh Goldberg:** I came at you with a troll and you countered with a very savvy, insightful comment on the mechanisms of companies sponsoring open source that I strongly agree with... That it needs to be a community-run project to be called a community-run project. The joy and a lot of the benefit is that you have a large group of people contributing and coming to decisions by consensus, not from some dictation by a company sponsor. That's really important.

**Christopher Hiller:** Yeah, yeah. I don't really have that other experience. I never worked for Microsoft on TypeScript, for example, so I don't know what it's like to have an -- I'm sure there's some sort of Daniel is the product owner, or something; he kind of decides what happens, right?

So I haven't had that experience of having my boss actually be on the open source project. Actually, that's probably gonna change. But anyhow, I think it's a different dynamic, especially if you have total copyright ownership of the project.

**Nick Nisi:** Alright, let's take a break here... But before we do, I just wanna bring us back around to the book, Learning TypeScript, and just mention that I did get to preview it before it came out, and it's a fantastic book, that breaks things down really well. Josh, just from having met you before and heard you speak several times, I read it in your voice as I was going through it. It was in your calm voice, explaining to me these different concepts... And the way that you broke things down I thought was really beneficial as someone who's been doing TypeScript for a long time; it seems like a really good way to introduce a JavaScript developer to it... So I just wanted to congratulate you on that, and for shipping it this week; that's wonderful.

We're gonna take a break now, but when we come back, we will dig into more about Josh has been working on.

**Break:** \[23:46\] to \[25:43\]

**Nick Nisi:** Alright, Josh, so you mentioned that you contribute to a project, TypeScript ESLint. Do you wanna tell us -- start off by telling us what that is.

**Josh Goldberg:** Sure. It is the greatest open source SEO play in history. Our name includes TypeScript and ESLint, two of the most popular open source projects... But we are not either of those things; we are the bridge that lets you run ESLint on TypeScript, which involves, for the most part, most popularly, two things. One is that we provide a set of rules for ESLint -- for those who haven't used ESLint or linters, a linter comes with a bunch of rules that scan for really common code issues, like unused variables, or if your organization has a styleguide, violations to that styleguide.

We provide a bunch of custom ESLint rules for TypeScript-specific things... Like if you, say, use a for...in loop over an array, which is actually bad JavaScript practice. Because we have the guarantee you're running on TypeScript, we can let you know "Hey, we've found a type of this thing. Don't do that."

And then we also are a parser, which allows ESLint to parse in TypeScript syntax. ESLint by default uses just vanilla, regular JavaScript syntax, and won't recognize TypeScript things like type annotations or interfaces, at least not till that JavaScript proposal hits stage four TC39, which will probably be years. So between those two things, we've become kind of the de facto standard for linting TypeScript code in ESLint.

**Christopher Hiller:** So where did the TypeScript ESLint originate? I know that some time ago, when people wanted to lint their TypeScript, they would use TSLint, which was a Palantir project. And at some point, they abandoned it, or -- I don't know the story. Do you know the story? Who decided to make TypeScript ESLint and have that all come to play?

**Josh Goldberg:** It's a great question, statement. I actually know -- I'm not clear on the origins technically of TypeScript ESLint; I think James Henry started it. There were a few different efforts to create some similar project. Now the maintainer crew is James Henry, Brad Zacher, a person whose real name I don't know and never seen a photo of, an enigma called Armano2, and myself.

TSLint - yes, it was the linter for TypeScript. It took a very different strategy from TS ESLint. Instead of working on top of ESLint, which allows it to reuse a lot of the infrastructure and rules such as the React Hooks rules that are very good and popular, it is a complete reimplementation, a separate project specifically for TypeScript. I should say "was", because it was archived in 2019, or some similar year.

\[28:10\] I actually was a maintainer on TSLint when it was killed. I helped kill it. I wrote TSLint to ESLint config, which converts your TSLint config to ESLint... And actually, I felt a lot of joy in killing my old -- the first major project that I'd maintained.

Two issues with Palantir being the corporate sponsor of the project... Although they did a good job of not pushing any corporate interests or whatnot, the name Palantir has a lot of negative associations, especially since 2016, Trump got elected and Palantir was what many believe to be the wrong side of history. And there was a great moment where - I'm not gonna name names, but some well-known JavaScript community member started posting "TSLint, brought to you by fascists" on the GitHub issues page... Which was weird for me, since I have never associated with Palantir. Anyway...

The second issue was that Palantir is a corporate sponsor, and they are a sole sponsor, whereas ESLint is much more community-run and funded. So ESLint was getting features at a much more rapid pace.

In general, also, why would you have two linters? That's a lot of maintenance burden. Every time one linter got a feature - normally ESLint - the other one would have to scramble to get it, too. If you had a React plugin, or JSX accessibility, or Angular lint rules or whatnot, you'd then have to implement it in the other.

So now TypeScript ESLint, as of - I forget if it was 2020 or 2019, or 2018, some year several years ago now, took over from ESLint and has all the features that you would expect from a modern linter, plus the ability to use TypeScript-specific type information... Which actually gives it a huge leg up in power over just vanilla ESLint rules.

We can locate your code, understand your types, whether it's JS code with checkJs/allowJs, or TypeScript itself, and we can make really good, informed decisions on the code, and give you really nice, specific, powerful editor complaint squiggles as a result.

**Christopher Hiller:** Wait, so you said you can do the JavaScript...? Because when I tried that, it was not working.

**Josh Goldberg:** We have a lot of documentation debt, I would call it... And part of fixing documentation debt means you often find bugs in your own code. So there's no reason, theologically - or to my knowledge, architecturally - why you couldn't use TypeScript ESLint on vanilla JS code... But I don't wanna be too certain about whether it's currently advisable or doable today.

**Nick Nisi:** You heard it here first!

**Christopher Hiller:** I should figure that out... I think it had something to do with the filename extension. It was like, "Oh, that's not a TypeScript file. I'm not gonna lint it." Have you just tried converting to TypeScript?

**Nick Nisi:** \[laughs\]

**Christopher Hiller:** No. \[laughter\]

**Josh Goldberg:** We should support that use case.

**Nick Nisi:** I almost clicked the drum roll.

**Josh Goldberg:** We are a -- how do I phrase this...? Despite being THE way that people lint their TypeScript code, I would still consider us a somewhat young-to-teenager-aged project, in that we're still figuring out a lot of the major use cases.

One of the big things that we just haven't had the time yet to really solidly figure out is the JavaScript story - how to use TypeScript type checker APIs in a JavaScript file properly; do we just not support it? So it wouldn't surprise me if we're 99% of the way there and that 1% is some if statement that throws an error, or some such.

The other thing is performance. The single biggest reason why people haven't moved to us or complain when they do is that TSLint used to take, let's say, ten seconds, and now it takes two minutes. Of the vast majority of that is misconfiguration, which means we need to do a better job of getting people to configure things the right way... But then also there are some difficulties. ESLint was not architectured originally for a linter that has awareness of other files. It originally was made - you'd just lint one file at a time, for performance, and kind of backdooring the TypeScript type checker into theirs. Not an easy task.

**Nick Nisi:** What kind of things are you doing with that? Why would the linter need to look at other files?

**Josh Goldberg:** \[32:04\] I'll give you two examples. The common use case of just running ESLint on the command line, and then also the editor use case. Because those are two of the most common ways that you would run ESLint, and also therefore would run \[unintelligible 00:32:13.21\]

On the command line you need to have the full information of the TypeScript type checker in order to use type system, type API informed rules.

Let's say you have a rule that lets you know if you create a promise and then don't try catch or .catch it, so you might have a floating error. We call this no-floating promises; it's my favorite rule. I love it. It's my baby. In order to get that, you then have to let ESLint start. So the first rule requests the type checker that TypeScript provides. You then have to create a new instance of the type checker, and then ask for the type of that node in that particular file, which means now TypeScript has to fully understand your files. And if you are a large codebase, with let's say thousands of Node modules, dependencies that link to each other, and you have hundreds or whatever of your files - that is a shocking slowdown.

So we can be clever, we can try to reuse information, try to fine-tune TypeScript for you, but it's still a slower thing than just ESLint looking at code on its own.

Also, if you have an editor and you want real-time feedback, we need to be able to create a persistent TypeScript instance. We don't wanna have to completely reanalyze everything every time. And there are APIs in TypeScript for that, but it is still -- you have to configure those manually. And then you have to know which list of files to look at. If they change, you have to tell TypeScript about that, and so on and so forth. So it's fun, but also really challenging.

**Nick Nisi:** One question I have is kind of around what you were saying, where you build on top of ESLint to allow it to understand TypeScript files. I guess what I'm trying to ask is what -- you mentioned that you allow for TypeScript, the analyzation of TypeScript... Is that by changing out what abstract syntax tree ESLint is actually using? Is that how it works, or...? Can you explain that?

**Josh Goldberg:** So I like to start ASTs (abstract syntax trees) explanations with "What is AST?" Because that acronym I think inspires fear more than most other acronyms in people. It's a representation of your code. It's saying you have a file, and in the file there are these (whatever) statements, declarations, let's say functions. And let's say you have a function that has a name, and so on... So the AST is a representation of that structure. It's abstract, meaning it could have white space and move it around; it's not the actual code itself. Syntax - descript and use syntax. And tree, in that parts of it have children; a function has, let's say, a body, and a name, and a parameter list... Like a tree.

So ESLint natively - I always forget which one it uses, if it's ESTree, or some other similar name... There is a parser that comes with ESLint which takes in your text, be it JavaScript file, or in-memory string, or whatever, and then generates a tree. And now this is where TypeScript's famous marketing slogan, "TypeScript, a super-set of JavaScript" comes into play. TypeScript adds new syntax.

So we have a parser -- and I always forget how it works on the inside. I've been focusing on documentation mostly... But I wanna say it actually uses TypeScript's parser, and then converts the result into a format recognizable by ESLint. The TypeScript parser and the built-in ESLint parser use different formats to represent your code. They use different names for nodes, different tree structures, sometimes very different...

So an ESLint rule might not be able to work on the TypeScript AST. It might be looking for, let's say, method definitions, and then TypeScript might call it like a property, or some different nomenclature like that.

So really, there are three ASTs - there's the TypeScript AST, ESLint AST, and then the TypeScript ESLint AST, which aligns to the ESLint AST and adds in TypeScript features. And this is why when someone asks me what TypeScript ESLint is, I start with the "Oh, it adds rules" explanation, because it gets kind of hard to keep track on the inside.

**Christopher Hiller:** \[36:04\] So it's essentially just like an adapter between TypeScript and ESLint, right?

**Josh Goldberg:** It's a very good way of putting it, that I will steal. Thank yo.

**Kevin Ball:** So I feel like there's a couple directions we can go down here... So we can talk about the project and the project maturity; that is an interesting area to explore... And we can talk more about that adaptation piece, and how does that actually work. You just said you're not as deeply into the internals right now, so maybe that's not a productive place to go.

Looking at the project maturity, can you talk a little bit about the team? How big is this community, how many folks are working on this? If somebody wants to get involved, how would they get involved?

**Josh Goldberg:** Oh, I would love it if someone wants to get involved. We just went through a big of our issue and pull request templates. We started using GitHub Issue forms, which have been wonderful. We started enforcing that people provide us reproductions of their issues, rather than "It's broke, please fix", the most common open source issue to be closed.

The maintenance team is actually really well staffed right now. I think this might be the highest it's been in a while/ever. So what we're focusing now is on documentation and the interactive website. If you wanna go to typescript-eslint.io in your browsers, dear listener, you will find a DocuSource website. I love DocuSource, the static docs generator. It's got a whole list of all of our rules, with an interactive playground; kind of similar to the TypeScript Playground, but geared towards showing you lint complaints.

When I say it's not an -- I don't know the right phrasing here. It's not in end stage, like peak of project; it's still relatively early. What I mean is we are still figuring out some of the major architectural things. Most of them are resolved, but the performance is a big one.

I think another thing we're trying to figure out is how do we show ourselves as really useful. What are the banner headline rules we can provide? I mentioned no foreign array and no floating promises as really key motivators for why you should use us.

We also have a set of rules around any's, the TypeScript type that lets you just YOLO it, which is not good for type safety... We have a bunch of rules around misusing any, letting that creep in... But there are very few rules on that line that you can really point to and say "This will find issues in your code. We strongly recommend you enable it, otherwise you're not as good of a project", or maybe some more friendly welcoming term than that.

Once we've got the documentation down, I think the performance and the banner headline rules are really two things that I want us to really nail down before we can really consider ourselves a fully "happy where we are in the world" project.

To be clear, we are very mature. You have been able to use us stably for years. It is not like the project is some newcomer. It's established, it works well... There are very few crashes in production, and most of those are caused by external dependencies. In fact, most of our issues for bugs are people who use some other plugin, and then the call stack includes us, and then they complain to us that we send them somewhere else, which is great.

**Christopher Hiller:** Speaking about other plugins, you mentioned that certain ESLint rules or rules in plugins may not work with the TypeScript ESLint parser. Is that right?

**Josh Goldberg:** Oh, I'm sorry, I did not mean to say or imply that. They would not work if you tried to use the TypeScript AST natively, but because you are instead meant to use TypeScript ESLint's parser, they do work. So any plugin you would use - my favorites are the accessibility JSX one, JSX ALNY that all works with TypeScript code because of TypeScript ESLint.

**Christopher Hiller:** Well, that's pretty cool...

**Josh Goldberg:** Yeah.

**Christopher Hiller:** Yeah.

**Josh Goldberg:** I'm pleased. It's nice. The ecosystem can move forward, because we don't have two linters to maintain, and the React team isn't gonna keep getting pestered by people to write TSLint rules of hooks the way they used to.

**Nick Nisi:** \[40:00\] Yeah. There's some really cool rules out there, that are extremely helpful. You mentioned the React ones... I'm thinking specifically of like the -- I don't know the actual names of the rules, but the one that tells me if I'm missing dependencies in my use memo or use effect hooks. Those are really cool, being able to analyze the code down to that... Because it really does help me just make sure that I keep that list up to date, or keep that together.

And then you mentioned a couple of your favorite rules; the no floating promises one is a good one. I do really like the no explicit any... I love those, because whenever I foolishly want to use any, I have to disable that with ESLint, disable next line, and then usually I give a reason as to why, so it's called out, "This is why I'm doing it."

But there are also some rules that are annoying to me... I think that they're probably more stylistic rules. I'm curious if you have any rules that you don't like.

**Josh Goldberg:** Oh, man. I'm so glad you brought this up. There's such a good discussion to be had. I promise I will answer your question as asked - are there rules I don't like / opinions unstylistic. But first, I will say I'm commanding the audience/listeners, do not use ESLint for formatting. That is not what it has been built for. None of the maintenance teams of linters - at least in the JavaScript space that I know of - want you to use ESLint for formatting. The ESLint team has stopped adding new formatting rules, and they recommend you use a separate tool such as Prettier. By formatting I mean just white space. Rules that only care about white space. Putting things on a new line, versus the same. Having a space before/after parentheses or not, stuff like that. And the reason why is ESLint is, again, not architecturally built for that. ESLint is made to detect styles issues, likely bugs etc. But something like Prettier, which is specifically tailored to massaging your white space, is much faster and much more reliable. It'll catch many more edge cases and have far fewer bugs in white space formatting. So I highly recommend you use Prettier.

I don't even recommend people use their plugins that let you run Prettier as ESLint rules. It's just slower that way. I highly recommend keeping them separate. So that's one classification of rules to just shove off; don't. And then you have these annoying rules that, honestly, gave ESLint and other linters a bad name. It's why a lot of people don't like ESLint. "Why is it yelling at me? Why is my code not building?"

The worst is some products like Create React App would block your local development on like an unused variable... Who wants that? That's incredibly annoying.

**Nick Nisi:** It's so infuriating...

**Josh Goldberg:** I don't even let my Next.js builds be blocked on TypeScript errors. That's a separate part of CI for me. I enable typescript.ignore build errors, or whatever the flag is. So yeah, I highly recommend -- if the lint rule is being enabled, you are not at the lint's beck and call. It is at your beck and call. You are in control here. Disable the rule, like Nick was saying, with the in-line disable comment. Or in your config rules list, too. So that's my rant...

**Kevin Ball:** That raises an interesting - to me at least - philosophical question around how to think about what lints to use, what rules to use, when to create a custom rule... I've been thinking a lot about how do we use this as one of the tools in our tool chest to kind of eliminate classes of problems and put quality ratchets into our code that keep us from backsliding on things that have caused problems before... But I'd be curious how you think about that. How do you decide which rules you wanna use, and when do you decide to implement a new rule?

**Josh Goldberg:** I love it. I wanna speak in probabilities of certainty now. TypeScript will give you an error if it is, let's say, 99.9% certain you're wrong. If you, let's say, declare a variable to be a string, and then give it a number - there are code cases where that's reasonable, or the number might coincidentally work, but the vast majority of the time, TypeScript's bar of 99.9% is correct.

\[43:55\] I consider lint rules to be ones that you should give the angry squiggles on... Depending on the project and the team familiarity with JavaScript or TypeScript and the linter, maybe you'd wanna say "Turn on things that are 80% or 90% certain" as like "You should probably do this." Even though TypeScript has a flag for this, we recommend people use our lint rule for no unused variables. It's more configurable. The vast majority of the time unused variable is just a sign that you should remove it to simplify your code. Or maybe that you're forgetting to pass something somewhere.

So for stylistic rules, things like naming - I'm not huge that you should really go gung-ho on this. Some people even like sorting object properties; I personally do it, but I've never been on a team where I would think that politically appropriate. I don't think it's worth the effort, the pain, for many.

I'd say for the TypeScript ESLint project, our core built-in rule set is stuff that we think affects maybe 80% or 90% of TypeScript users. Things like no floating promises - it might not be applicable for all projects, which is why ESLint lets you opt into rules and opt out of them. But for the most part, that's relevant.

And I'd say if you think that maybe 60% or 70% of the time some particular classification of thing is wrong - maybe you have a company style that you should always declare functions with a particular method return, whatever it is... Maybe you just write a custom lint tool for yourself - I think it's really hard to answer that question with more specificity, because a solo developer working on passion project where they only wanna catch real bugs, versus an enterprise team that has extreme SLAs to adhere to have very different needs and wants for their linting experience.

**Kevin Ball:** Yeah. And I like the probabilities with it, because a place where I've found us using lints a lot is like - this is not necessarily wrong, but we've seen this pattern often lead to buggy code, or code that does not behave as people expect it to. And so it's not necessarily like saying "Your code is broken", it's more saying "This is a likely maintenance problem.

**Nick Nisi:** I was gonna mention that, first off, I love tools like this, because they kind of highlight the power that you can have when you are just really looking at an AST, and parsing it... There's so much power that you can get from that in what you wanna do; in this case, warning or erroring about things... And I love that it makes it really easy to dive right in and make your own custom rules for it, and stuff. It just feels like a super-power, being able to write code about your code, that understands your code. I love that.

One idea that I've had, as not necessarily an ESLint or TypeScript ESLint extension or custom rule, but just like an AST walker script, would be one that just goes through and looks for all of the custom ESLint-disabled comments that I have... And then just like puts up "You've used no-shadow 472 times. Maybe you should just add that to your config." I call that no-shadow because that's the one that I think that I probably override the most, because I just -- you know, I wanna destructure something, and then put it as like a shorthand object syntax on something else, and I don't wanna care about if it's declared \[unintelligible 00:47:13.11\] That's my biggest gripe right now.

**Christopher Hiller:** It seems like there should be a rule that detects disabling of rules... I know there's probably a flag on the command line that will throw an error if you do that... But I don't know about like just printing a warning that "Hey, you're disabling too much stuff, man. Do something else."

**Josh Goldberg:** I want it in that voice, too.

**Nick Nisi:** Maybe an ESLint Lint.

**Josh Goldberg:** So there is actually an ESLint rule that requires that you provide an explanation for rules. There's also a TypeScript ESLint rule that prevents you -- we shouldn't say "prevent". I shouldn't say "prevent", because nothing is completely preventable. You can always disable these disable rules. But flags issues of using TypeScript Pragmas or surpression comments.

And yeah, I actually really like that idea, giving you like a scorecard of "Hey, no-shadow - maybe you should turn that off."

**Nick Nisi:** \[48:14\] Yeah.

**Josh Goldberg:** I really like that. So file a feature request.

**Nick Nisi:** Okay.

**Josh Goldberg:** One of the maybe two contributions - very few - that I've done to ESLint itself was I added in a command line flag... I forget what it is now, embarrassingly, but it lets you know if you have an unused disable, which I think is fantastic. I really like that idea...

**Nick Nisi:** Oh, yeah.

**Josh Goldberg:** ...that we shouldn't just leave these things floating around. People copy and paste all the time.

**Nick Nisi:** Yeah. That's a huge thing that I comment about in pull requests, is like "Is this rule required anymore?" They do kind of stick out, but...

**Christopher Hiller:** That seems like it should be enabled by default, but...

**Josh Goldberg:** That would be great.

**Christopher Hiller:** I will check that out, because that would be very useful, because I've got a ton of those things... But you know, instead of a disable, there's TS ignore, there's TS expect error... If those ESLint disabling comments were more like TS expect error - that seems like that would work a little better... Because I always use TS expect error whenever I can. I pretty much never use TS ignore. That's a great idea, I'm glad I had it. Somebody else probably did, too.

**Josh Goldberg:** Yeah. I report unused disabled directives. I just looked it up. So I actually feel like an ego moment for myself is coming on here... I implemented TypeScript's TS expect error directive because I think that - why would you want to leave @ts-ignore in? There's no need if it doesn't. And there are some edge cases if you're running with different TypeScript versions, or something... But for the most part, you should really just not let yourself ignore things unnecessarily. And yeah, I have strong opinions that we should have as few angry, annoying, ugly disable comments as possible.

I am also of the opinion that VS Code and other editors should default to showing ESLint's squigglies and complaints in a noticeably different way than compiler complaints; the difference between a compiler and a linter here. Because I've seen so many people get confused and angry at TypeScript for no-shadow, or something, or they think that TypeScript is blocking their builds because they have an unused variable or the wrong variable name, or something. Very much not TypeScript's fault there, because both of them have red squiggles by default.

So I also added the option to the VS Code ESLint extension to downgrade all warnings, or to mess around with your severities.

**Nick Nisi:** Nice.

**Josh Goldberg:** That is useful.

**Break:** \[50:39\]

**Nick Nisi:** Alright, so Josh, we talked about your book, and kind of Learning TypeScript in the first section, and then we talked about code that learns about your code, sort of, in the second section about TypeScript ESLint... Let's take a step back from that and tie them together, talking about how you can actually teach in a way that's a good way for actually learning things. I don't know if I could have said that any worse, but... \[laughs\] Take it away.

**Josh Goldberg:** No, I actually like the way you said that. I think there are a few really good strategies for teaching, that I've only really started to learn in the last few years. One is that you can't introduce a whole bunch of stuff at the same time. You have to introduce one major concept at most, ideally; maybe two, if you really need, at a time. The other is that the language is super-important.

I've learned to detest when documentation says things like "It's easy to. Simply. Just." There are very few contexts where those phrases, especially "simply" are appropriate. If someone is a complete newcomer, or maybe they're just slightly incorrect in their understanding, you tell them something is simple, or easy. Now they feel like you're being a jerk to them, and that they're losing, that they're dumb, or something. It really does not help with the imposter syndrome. So that's important, I think.

Clarity is really key, and something that a lot of lint rules have struggled with. The original error message for the no floating promises lint rule was something along the lines of "promises must be handled appropriately." What is that? What does that mean? What is "handled", what is "appropriately"? What is going on? Now it's something like "Promises must be caught with a try catch, or .catch" or some such.

**Nick Nisi:** That's so much more helpful.

**Josh Goldberg:** \[54:01\] Yeah. And that really helps with the everyone hating on ESLint for giving you useless spew. Most of the time, if you have a well-configured ESLint config, you might be wrong. And actually, TypeScript as a language also has put a lot of work in, the team has put a lot of work in to improving the error messages there. Some of the most popular things for external contributors, like \[unintelligible 00:54:19.23\]

The thing that I've really come to appreciate and love about teaching code is using kind of a mathematical basis for how you introduce topics. We've already talked about trees, so we might as well talk about graph theory. How do you figure out what order to teach things in? Well, you can represent each topic as a circle or a node \[unintelligible 00:54:39.05\] would call it, and then you make lines between those circles called edges, and then you do a graph search to figure out what comes first. You can't teach interfaces in TypeScript before you teach the concept of what is a type annotation, what is a shape. And for those things to be taught, you have to explain why are type annotations, why are types important in JavaScript. Well, you see, someone in '94 or whatever took ten days to design the thing etc.

So I've really come to love using graph theory and flow kind of analysis, how much information can be spread through the graph to figure out what order to teach in. And this is all sounding very fancy and mathematical, but at the end of the day you're just trying to order things in a way that you only have to introduce one topic at a time.

**Christopher Hiller:** That's tough as someone who's well-versed in a language or a technology, where you have to kind of -- what is it, the curse of knowledge, or something? ...where you're unable to look at things from the way somebody who knows nothing would. So you may find it difficult to make that graph, and go backwards and see "Okay, what do I need to know? What are my assumptions that the reader knows? So what necessarily comes before what?" And that's tough to do.

**Josh Goldberg:** Yeah, for sure. I think good education content needs to be continuously iterated on with feedback. If you look at, say, Dan Abramov, who's currently tweeting a bunch of beta/draft articles for the React useEffect documentation - that stuff is getting rewritten like on a daily or weekly basis, because there's all of this nuance that people are discovering, that wasn't in there originally. It's hard, yeah.

**Nick Nisi:** Yeah, I used to do a lot of the same workshops kind of over and over, teaching JavaScript, TypeScript and Dojo... And I really tried to pay attention to what seemingly landed better; what descriptions of things landed better in one class, and then trying to reapply that in another class... But one thing that I really took out of that, that I think still applies to everything I try and teach today is I will oftentimes just repeat myself, but in a different inflection, or trying to do it from a slightly different perspective, just to give you like "This is the basic way, or this is a way to think about it", but then if you think about it at a slightly different angle, you just get a better perspective of both, and just kind of bringing that depth to it a little bit.

**Josh Goldberg:** A lot of people struggle - myself included, I think - with a lot of content online that does not take that strategy, and I really appreciate you saying that... Because the brain either gets it sometimes, or sometimes just doesn't, and you need a different way. Are there any particular topics you've found you've really drastically changed your approach on?

**Nick Nisi:** Hm... Yeah. I mean, not that it would apply to really any modern concept today, but just the way that I would teach Dojo's pub/sub, and the way that that worked. I just remember specifically completely revamping the way that I talked about that... And it was much more beneficial, because it was easier for me to go through it, and it was easier -- I think it was much more well understood.

But also, that's kind of where interactive examples or assignments - that's where they really come in to be valuable too, because they're just another perspective on it, and they're the more hands-on, applicable one, that you can then take and build on from there.

**Josh Goldberg:** \[58:04\] I think that's one of the biggest issues with the book format, speaking as someone who just made a book. The book is inherently hard to do an interactive example on, especially for a computer-based thing. In the Learning TypeScript book I gave up on that. There are no interactive projects in the book itself, just links to learnigtypescript.com, which has most of those projects filled out, and is pending for a couple chapters that I will have done soon.

I really love Execute Program for that, which is a great website; I wanna say Gary Bernhardt makes it... It's just all these really fantastic, hands-on examples and projects, which are, I think, one of the best ways to learn.

**Nick Nisi:** We'll put them in the show notes.

**Josh Goldberg:** Yeah, I think one of the good measures of whether you've successfully learned a topic is can you teach someone who doesn't understand the foundations of that topic the thing? Like, in my case, could I explain TypeScript to my mother, who does not understand these things? Or one of my non-technical, very-does-not-use-computers friends; and can you explain it in a way that makes sense to them, even though they don't have the time or interest, let's say, to learn what is even a programming language in the first place? It's hard.

**Nick Nisi:** Yeah. You're gonna lose them if you go back to '94 and the ten days story, pretty quick...

**Josh Goldberg:** Yeah, "Let me tell you about the bits here, and the bytes..."

**Nick Nisi:** \[laughs\]

**Christopher Hiller:** My life-hack is to submit talks for topics I know nothing about.

**Nick Nisi:** Conference-driven development.

**Christopher Hiller:** Right. And then be forced to learn well enough that I can talk about it to other people.

**Josh Goldberg:** That's how I got into TSConf. Just kidding.

**Nick Nisi:** That is stressful though at the same time, because then you actually have to learn that, and that directly goes against my proclivity to procrastination... When it's like three days before and I'm like "What am I gonna talk about again?"

**Josh Goldberg:** I think low-key, perhaps a lot of improvisational style speakers are benefitted, perhaps intentionally, by this strategy.

**Nick Nisi:** Yeah.

**Josh Goldberg:** But I also think there's a lot of joy in watching people learn things... And that's a conference talk I really wish more folks were able to do, or at least more confident in. I would love to go to an Angular conference, having not worked in Angular since 1x, and just learn all these things. I love dependency injection; I would love to learn what does Angular do for it.

**Nick Nisi:** Mm-hm. I have never, ever used Ember, ever. But I went to Ember Conf in 2016, and it was super-beneficial.

**Josh Goldberg:** Have you used Ember since?

**Nick Nisi:** Nope.

**Josh Goldberg:** That might be upsetting for some to hear...

**Nick Nisi:** \[laughs\] Well, cool. Josh, I really appreciate you coming on and talking to us about your transition into more open source development, contracting, and working on TypeScript ESLint, and of course, the book that you just had come out this week, Learning TypeScript. Is there anything that you want to say or pitch before we take off for today?

**Josh Goldberg:** Several things. First of all, thank you for having me on the show. I am a long-time listener, first-time guest. I enjoyed this tremendously. It's cool to see the other side of things.

**Nick Nisi:** Absolutely. You're welcome back. We'll have to catch up again about how things have been going.

**Josh Goldberg:** Yes. When I'm a world-famous author with only positive, glowing Amazon reviews. I'll let you know how that feels. I also wanna shout-out TypeScript ESLint; it's a great project. I also do a bunch of other open source stuff, so check me out on Twitter, and such. Give me money, buy my book, like and subscribe - all those good things. That's all... Thanks.

**Nick Nisi:** Thank you. We'll have links in the show notes, and we will catch you next time.
