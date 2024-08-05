**Nick Nisi:** Welcome to another exciting JS Party. I'm your host this week, Nick Nisi, hoy-hoy, and joining me after a long time - it's been quite a while. How's it going, b0neskull?

**Christopher Hiller:** Super. Yeah, I haven't been on a show in a little while, just because I'm lazy... But here I am.

**Nick Nisi:** Wow. You're just loving life, and having fun, and not talking about this wonderful JavaScript world.

**Christopher Hiller:** Yeah, that's me. Yup.

**Nick Nisi:** \[laughs\] And we have another special guest with us. Joining the podcast once again is Josh Goldberg. Josh, welcome back.

**Josh Goldberg:** Thanks for having me. I also haven't been on in a while. I feel a sense of kinship with b0neskull.

**Nick Nisi:** Yeah, I think it's been almost a year, maybe a little longer since you were last on, and I think the episode title was "10 years of TypeScript bliss."

**Josh Goldberg:** Oh, yeah.

**Nick Nisi:** Celebrating 10 years of writing this wonderful language that b0neskull loves so much.

**Josh Goldberg:** Wild.

**Christopher Hiller:** I've warmed on it...

**Nick Nisi:** Yes...! \[laughs\]

**Josh Goldberg:** Because of that episode?

**Christopher Hiller:** No... No. But I've warmed on it, yeah. I'm not like a fanboy or whatever, but you know, I like my types.

**Nick Nisi:** This just made my week. I am so excited about this, and I can't wait to tell Jerod, who's not here.

**Christopher Hiller:** I still mostly write JavaScript with docstrings. But still. They're types. Types are types are types, right?

**Josh Goldberg:** You're close. That's basically what TypeScript is.

**Nick Nisi:** Pretty much. Well, cool. Yeah, that's exciting news. So Josh, for those of the audience who may not know you, why don't you give us an intro?

**Josh Goldberg:** Sure. Everyone, I'm Josh. I work full-time independent open source, which means instead of one specific company funding my work, I work kind of in the open on a few different projects, each of which brings in a little bit of funding. The main projects I work on - I'm a core maintainer on TypeScript ESLint, that's the big one. Also, I've recently, thanks to b0neskull, actually, earlier this year joined the maintenance team at Mocha, and I'm a committer on ESLint. So if you're writing JavaScript or TypeScript, there's a very good chance that code that I helped maintain, perhaps even \[unintelligible 00:03:02.29\] is running in your editor as we speak.

**Nick Nisi:** That's awesome. And another thing I think that you were maybe working on last year, or - I don't know, I was just on your website, and one of your recent blog posts was about it. Recent-ish blog posts... It was about all the work that you did to modernize Definitely Typed. So that definitely touches everyone...

**Josh Goldberg:** Yeah. So I'm distracted... b0neskull has given me a very inquisitive look, and has been for about a minute now...

**Christopher Hiller:** No, that's just my face. That's just my face.

**Josh Goldberg:** Okay. I'll get used to it.

**Christopher Hiller:** Don't mind my face. I can turn off my camera if you don't want to look at it.

**Nick Nisi:** Please don't.

**Josh Goldberg:** It's a fantastic face. I've just been mesmerized by it, you know.

**Christopher Hiller:** Okay... \[laughs\]

**Josh Goldberg:** Okay, part of the joy of being independent in open source means that I can jump around the GitHubs and touch stuff that I think is useful. So one of the "side projects" that I did was helping the Definitely Typed folks first move off of a dedicated -- sorry, off of using a linter for formatting, and instead use a dedicated formatter, specifically dprint, for formatting. And then that was helpful in also helping them move off of TSLint, which is an old, deprecated linter, and on to ESLint with TypeScript ESLint, which means now Definitely Typed is using much more similar to link to the rest of the TypeScript ecosystem. Fewer people are using TSLint, and there's a nice community dogfooding of dprint, which is I think is all very nice for the ecosystem. So I'm happy.

**Nick Nisi:** That is awesome. Awesome to hear. I didn't know that such a big project was still using TSLint, but I shouldn't be surprised... So that's really awesome. And a good shoutout for dprint. I haven't had a chance to play with that yet, but it looks really interesting.

**Josh Goldberg:** Dprint is great. Yeah, it's like Prettier, but faster. I've never had problems with Prettier speed until I've worked on a codebase the size of TypeScript or Definitely Typed, and it actually kind of does make a difference at that scale.

**Nick Nisi:** That is interesting... I'm just trying to see where the speed improvements come from. Is it like running it in the command line? Because most of the time when I run Prettier, it's just like my editor on Save is just reformatting that file.

**Josh Goldberg:** Yeah. So honestly, most of the time it really doesn't make a difference. If you just have one file, Prettier is fine. It doesn't matter if it's one millisecond or 200 milliseconds. But if you need to, say, update the tool \[unintelligible 00:05:24.29\] Renovate or Dependabot PR, and then you want to run it on every file, when you have tens of thousands of files, it tends to take a little longer. So that's one nice situation.

Also, TypeScript itself has a 50,000+ line file, the notorious, the acclaimed checker.ts... And at that point it does make a difference in your on Save editor speed.

**Christopher Hiller:** Is it like Rust, or Go, or something like that?

**Josh Goldberg:** It's one of those native speed ones... Rust.

**Nick Nisi:** Very cool. Well, yeah, that's definitely a project worth checking out. I hope not to run into any 50,000-line files in my day to day work anytime soon... But I'll remember that. Alright, so let's talk about ESLint. There's some changes to that, that have recently or over the last year maybe - they've been on my radar, at least with the flat config... But then also, tell us about what's the latest going on in TypeScript ESLint.

**Josh Goldberg:** Sure. I'll start with flat config if that's okay, because it kind of predates a lot of stuff... ESLint has traditionally had what we call legacy now, but just the eslintrc file... And it used to be that this was the only way to configure ESLint, or at least that format was; you could have it in a file, and/or in your pkg.json... And you can have nested files on disks. If you have a monorepo, each package could have its own ESLint config.

Then also ESLint's configs can have overrides. Say you want to change all TypeScript files to have the TypeScript parser, or all YAML files to be parsed. Well, now we have this kind of ridiculous system where you have overrides in files, and it's really hard to map which file, especially if you have multiple nested configs, applies which overrides. Also, the eslintrc format doesn't actually use ECMAScript modules, or common JS requires. There's these weird string aliases that then get mapped to what is essentially the Node require algorithm, but not quite exactly that. It works as a format, but they're confusing points.

So now ESLint has this new format called flat config. It's flat because you only have one file. It just exports an array of settings, and that's it. That's done. You can't have nested configurations. And it actually has you import or common JS require your packages. There's no weird string indexing in the format. So overall, it's been a little bit of a work item for folks to migrate over to, but the format is objectively, I think, a lot better.

**Christopher Hiller:** \[00:07:49.12\] Yeah, there was some -- a little bit of drama about the flat config recently on Twitter. People that are upgrading to ESLint 9 are shocked and confused and angry that essentially the file format has changed. And they are mad because all the plugins that they use have not yet upgraded to this new format, because any plugin will also need to upgrade to the format. So yeah, I know that this has been in the works for a while. The old config format was soft deprecated in version eight of ESLint. Is that correct?

**Josh Goldberg:** Yeah, I don't know whether deprecation is the exact words they used, but it was explicitly stated in V8 this is not going to be the thing forever. V9 will switch the defaults to only allow in flat config, which is what's happened.

**Christopher Hiller:** Yeah. And it's curious to me that this just -- it's been in the works for a long time. We've known about this, and if you've been paying attention. But it took so many people by surprise... Why do you think it took so many people by surprise?

**Josh Goldberg:** Great question. This is a hard one for me to answer, because politically, I have since joined the ESLint team right about when flat config was really getting thrust onto people with V9. So I not only wasn't a part of ESLint core when these decisions were being made, but now I'm on ESLint core, and don't want to trash talk... So I'm going to try to speak very precisely, without ascribing blame anywhere. I think the problem is twofold. One is that people generally don't like their linter. It's a very common thing that people associated with the negatives. So they tend to not look at it. Not that many people get really excited about ESLint's blog posts. And then two is that I think there was a lack of activity on core ESLint, where they could have done more to outreach to the community, to file issues on repos that are containing plugins that haven't been migrated to post up like a tracking issue or a discussion showing all the community ones. And although some of that has been done - actually for a lot of repos that's since been done - it wasn't done until really late, until ESLint v9 was already about to be released. So the timing has not been ideal there. I think it's those two things in conjunction that people tend not to come to ESLint, and then this particular time ESLint didn't come to the people that's caused that gap between the two.

**Christopher Hiller:** Also - I mean, I'm not sure about how this shook down, but if ESLint comes with a breaking change to config format, it's important to communicate not just what it is and when it's coming, but why you're doing it. For so many people it seems like "Well, it was working fine for me. And now it's not. Now I have to do more work to change it." And they don't understand why, and like why it was so important to do. And while I do appreciate the new format, I am also curious... Like, it can't just be because it was hard to use, because everybody was using it, and it was working for so many people. So what were the reasons for making that change? That's what I'm curious about. I don't know if you can answer that question.

**Josh Goldberg:** I can. And in fact, there's a huge three-parter blog post from creator/maintainers of ESLint, Nicholas Zakas, going into that. It worked, but it didn't work great. There were a lot of issues. For example, a lot of people when they started to get bigger configs, especially monorepo ones, would get tripped up on the differences between what applies in extended configs, when you have multiple files, versus overrides in one or more files... That was a confusion point.

\[00:11:48.17\] The other big one is that in flat config you say things like \[unintelligible 00:11:50.24\] TypeScript ESLint, or the equivalent with imports. And in legacy, in traditional configs, you would just refer to them by their string name. Like \[unintelligible 00:12:03.09\] plugin, colon type ESLint. And that has subtle weirdnesses when you're trying to map that weird resolution system on top of what is now a standardized spec of ECMAScript modules. Those are the two big ones, and I think -- it's possible to tell people about those, and maybe they can have empathy that if they were to get a big enough codebase when those matter, that's big... But I think honestly, a third important reason is that the old system was convoluted and hard to maintain. And the ESLint project, because it's a fully independent open source project, can't have the operating budget to deal with that crap. Money is important, therefore time is important, and it's just not well spent on maintaining a convoluted, old config system that has so many user-facing flaws. Even if ESLint were like a well-funded project, it doesn't strike me as worth the budget if there's an opportunity to move to an objectively better format long-term.

**Nick Nisi:** Yeah, and I guess the reason -- I'm not involved with the project in any way, but I assumed that this was like a nice way to, yeah, get rid of a lot of those configs and consolidate into a more modern one. And also ride the coattails of anger that is moving over to ESM, and kind of just be like "Well, here's an ESM format that we can all move to", and that'll be the future anyway. And it does a lot -- a lot of things that I really like about it is it's really utilizing a lot of the language, like you're spreading out these different configs together to put them all together. So like you're using the language to define this. And it's really easy to follow along if you know the language features to be able to see that, and there's less "magic", in like what you said, where these names map loosely to require calls or import calls or whatever. That said, I do feel like in the new config - maybe you can help me understand a little better, but is there still a little bit of that magic around? And I'm thinking specifically between the names of rules and mapping to like the name that you assign it for plugins. Is that making sense to you?

**Josh Goldberg:** Yeah, it does make sense... I will admit, I don't like that this is the system, but I don't personally have a better one. In both flat and legacy configs the way you specify plugin rules is plugin name slash rule. Like \[unintelligible 00:14:24.19\] In legacy, in eslintrc, that plugin name was just the name of the package... Which is actually why it was kind of hard in legacy config to use local rules. There was a third party plugin that would load in your local files for rules.

Now in this new system you're just importing or requiring, so there's no actual name... So the way that you register that is now a magic string... Where in TypeScript ESLint we've told people "You should always register it as \[unintelligible 00:14:51.24\] with an @ sign in front of it. But in theory, people could register the same plugin twice, and enter different string keys, and thus have the rules enabled twice under different names... Which I don't like. That's unfortunate magic. But I don't know of a way around it, which is why the original RFC from 2019 that took until 2022 to implement, no one figured out a better way that we should use instead.

**Nick Nisi:** Fair. That's totally fair. But that is like one of the -- it felt like I was moving away from some magic, and then it was like "Oh, here's some more magic." And I agree with that. It's easy because I want to name those things like @typescript ESLint slash whatever, and fight my urges to be lazy and call it just like @ts, or something... Yeah. But it can make configs a little bit more convoluted.

**Josh Goldberg:** Yeah, a little more convoluted, a little magical. I would love a way for plugins to be able to say "This is my name, you'd better use it." There was an issue filed somewhere that may eventually get implemented. But I think right now, the stage is -- we're still seeing how people use this format, so... Still in evaluation.

**Nick Nisi:** \[00:16:01.10\] So ESLint has -- this has been out for a while. I'm looking at those blog posts, and like you said, the first one was August 3rd, 2022, kind of talking about that and the changes that were coming... I know that I started using it last year at some point, although it was a little rough. I'm just looking at my old config, and I'm using TypeScript ESLint, but I had to cast it as any in the plugins to make it actually be useful... Because the types were different. Because TypeScript ESLint didn't officially support the flat config quite yet. So from that point, you're in a unique position to kind of see both sides from the inside. What's that been like in terms of adoption? Has it caused extra headaches or problems as people want to jump the gun and migrate, but TS ESLint isn't ready yet? ...things like that.

**Josh Goldberg:** Yeah. We're one of the plugins that basically blocks you from migrating to a core ESLint upgrade if we don't support it. And to a lesser extent, also with TypeScript. You can use us with newer versions, it's just we don't guarantee it'll work. And then a lot of people were annoyed at us because we didn't support flat config until a little bit after the ESLint fully jumped on board. We actually still don't support ESLint 9 in our main version, at time of recording. Right now, our main version is v7; we have a beta out and have for a couple of months of our v8. I think around time of release is also when we're releasing v8... So let's say congrats to us! We've just supported ESLint v9, in stable. Yay! But ESLint v9 was released earlier this year, and we're recording in July, so... It's been a while.

**Christopher Hiller:** Wait, I'm confused. I'm confused. Because I've used TypeScript ESLint in a flat config...

**Josh Goldberg:** We didn't support it for a while, but we do support it now. Flat config support is actually not the same as ESLint v9 support. It's just that because ESLint v9 turned flat config to the only supported one by default when you don't pass in an environment variable or option, people assumed the two were the same. But they're not.

**Christopher Hiller:** Between ESLint and TypeScript, you have to kind of keep pace with both of those projects. How's that been? Is it easy to -- I can't imagine it's easy to support new syntax in TypeScript, right? Or is it?

**Josh Goldberg:** It's normally fine. Once in a while there's some obnoxiously different thing that we have to adjust for that's difficult, in either ESLint or TypeScript. But for the most part, it's just an added tax, that every couple, three months we have to support new TypeScript features. Or every couple of years, year or two, we have to support a new ESLint version. Unfortunately, both projects are big and stable enough - they're both over a decade old; congrats to each - that they're not shaking too much these days. But yeah, I wish we didn't have to constantly keep up with everyone else. It would be nice.

**Christopher Hiller:** I haven't looked at the guts of TypeScript ESLint, but are you taking the TypeScript AST and then like converting it into what ESLint uses? Is that what happens inside?

**Josh Goldberg:** I love it. That's exactly what happens inside. How did you know?

**Christopher Hiller:** I don't think of any other way that could be done. You get what you get from TypeScript, and that is not the same thing that you get out of ESLint, so it must convert.

**Josh Goldberg:** Yeah, you're absolutely right. That's the logical conclusion that everyone went through. In order to keep up with TypeScript versions we basically need to use their parser, because otherwise we'd be reimplementing their parser. So whenever someone wants to parse their code their TypeScript code with ESLint, TypeScript ESLint's parser will generate a TypeScript tree behind the scenes, and then convert that into the equivalent ESLint, or \[unintelligible 00:19:42.11\] representation... And then we get both of those back. So if a lint rule needs to get to the TypeScript tree, such as to retrieve type information for a rule - like, no floating promises; how do you know if it's a promise? Well, then you have to jump from the ESLint tree to the equivalent TypeScript tree, and then pass that to the TypeScript API.

**Christopher Hiller:** So is it not always clear where you need to go? If I wanted to implement a rule in TypeScript ESLint, that sounds hard, right? Because you need to know exactly where that rule -- like, which AST it needs to touch, or both. Or what. Is that accurate?

**Josh Goldberg:** \[00:20:20.24\] It's accurate that you do need to know, but fortunately, the answer is almost always just use the ESLint version. The TypeScript ES tree. ES tree is what we call them, the ESLint one. We actually added wrapper APIs, I want to say a little less than a year ago, so that you for most rules never actually need to touch the TypeScript shenanigans under the hood. If you want to get the type of a node, which is a little part of your file, we expose an API where you can pass in the ESLint equivalent node, and it'll give you back the TypeScript type. It just maps it for you so you don't have to think about the differences.

**Christopher Hiller:** Are plugins for TypeScript ESLint a thing? Is that a thing that people make? Can you do that?

**Josh Goldberg:** You can make plugins for ESLint, such as TypeScript ESLint's ESLint plugin, the naming of which is indeed typescript-eslint/eslint-plugin. And then we expose tools that help you make your own TypeScript-flavored plugins for ESLint. But at its core, we are an ESLint plugin, an ESLint parser, and a set of tools to help you do those things.

**Nick Nisi:** And when we're talking about plugins, just to clarify - would a plugin be like a collection of lint rules? Or would it be anything else?

**Josh Goldberg:** Yeah, good clarification. In ESLint world -- fun fact, actually. There's a glossary on eslint.org. One of my favorite things I've helped with... Because there are quite a few terms that are specific to ASTs, or static analysis, or even linters. So on the glossary, I would encourage any listener to just read through it; it's actually really good information for general programming.

So the first, entering the glossary, a) abstract syntax tree, AST. It's a representation of your code. Kind of like a JSON description of it. A plugin in the ESLint world - yeah, it's a collection of rules. For example, you might have like the TypeScript ESLint ESLint plugin that has TypeScript rules. So there's all sorts of stuff, like imports. Specifically, a plugin is able to provide rules; it can provide preset configs that are recommended, or recommended type-checked... And then it can also provide processors, which are things that can, say, take in a Markdown file and tell you that there's a JavaScript file to be linted, like JavaScript and some code block. So that's plugins, preset configs - which can be on their own or part of a plugin - processors, which most people don't use, and then rules, which are the really important part of the plugins.

**Christopher Hiller:** But a parser is a different thing.

**Josh Goldberg:** Yes. A parser takes in your raw file and turns it into an AST. So a parser is actually completely separate from the plugin. It just so happens that we're a monorepo that exports packages with the same org prefix, that are both a plugin, TypeScript ESLint ESLint plugin, and then the parser, TypeScript ESLint parser.

**Christopher Hiller:** Right. And you need both.

**Josh Goldberg:** Yes. So now that we've gone through the 15 minutes of requisite docs and glossary reading, this is a big part of why a lot of people are excited about competitors - or neighbors, I like to call them - like Biome, and OXLint. Because it is conceptually not light to configure ESLint. And people are very excited about tools that let them do that, but with a very clean config that doesn't require knowing these things.

**Nick Nisi:** I haven't used Biome yet. I'm vaguely aware of what it is, but how does it get away from that? Is it just more -- is it like Prettier, in terms of like it's less configurable, so it's more of like "This is the one way to do it", the opinionated way to do it, whereas ESLint is more like you bring your own opinion? Or how does that work?

**Josh Goldberg:** Yeah, it's a little like the Vite thing, where WebPack was popular and good, and WebPack still does a lot, but Vite is structurally simpler, more straightforward to configure. There are some things that because Biome is relatively new or doesn't yet support, but overall - yeah, instead of having to set up an import from some ESLint thing, some package, and then export it etc, etc. there's just a Biome config file where you enable or disable rules. And then in theory, once they add plugins, you'll be able to add plugins, too. b0neskull, I swear, your face changed. You are more displeased now... I'm sorry, I just -- I haven't hung out with you guys. I haven't talked with either of you in a while, and I'm still getting used to it.

**Nick Nisi:** I saw it, too.

**Christopher Hiller:** I just have resting grouch face. I don't know. \[laughter\] The listeners can't see it, so it's irrelevant. Irrelevant. Let's just ignore me.

**Break**: \[00:24:42.22\]

**Nick Nisi:** So that leads to another thing that I wanted to talk to you about, and that is - and I've totally forgotten the name that you have for it, but this idea of standard setups. Kind of like the TS ESLint recommended, but I've seen a lot of people kind of make their own configs, that they then just import into their projects and gently extend from there, so that they did all the work to set it up once, and have everything mostly the way they want, and then they just kind of tweak things at a much smaller level for each individual project. You have one. I forgot what it's called. Do you wanna mention it?

**Josh Goldberg:** Create TypeScript App.

**Nick Nisi:** Create TypeScript App, thank you. I knew it was something like that, but I could remember.

**Josh Goldberg:** CTA.

**Nick Nisi:** So do you wanna explain what you do in that? And I'm also just curious what you think about that trend that I've seen. Maybe I'm just very biasedly looking at people who have done that.

**Josh Goldberg:** I like that trend. I think it's really useful for linters and for people to do the thing where -- I mean, everyone does this with all of their tooling. You have something that works, and then you copy and paste it into a new project, and then once in a while you change something, and then over the years it evolves. I think it's really useful to see what people tend to want to enable or disable for rules. Both because it's important, it's one of the big selling points of ESLint over what it was competing with 10 years ago, is that you can configure it. That's a big, important thing. And then as we see folks consistently take the same actions, we actually do tend to reflect that in the preset configs.

For TypeScript ESLint, for example, there are a lot of rules that used to be recommended, because they are objectively correct and good rules... But they're so strict, and people just really rebelled against it. It wasn't worth it for them on average to enable those rules, which is why we pulled out the strict preset from recommended.

**Christopher Hiller:** What's an example of one that's too onerous for people to want to use?

**Josh Goldberg:** I just plugged/opened typescripteslint.io/rules in my browser, and you can filter now to what config group things are in... So I'm going to filter to everything that's in strict and not recommended. Ooh... \[laughs\] No array delete is the first one. You can use the delete operator in JavaScript and TypeScript, but it does weird things when it's on an array. That rule actually I think might be an example of we're putting it in strict to test it out, and then we'll eventually move it to recommended.

**Christopher Hiller:** But what's one that you've taken out because it was awful?

**Josh Goldberg:** Where is it...? Oh, no non-null assertion. Stopping you from using the exclamation mark operator.

**Christopher Hiller:** Oh, oh, I hate that one.

**Josh Goldberg:** You don't like that lint rule?

**Christopher Hiller:** No, I do not like that rule. I got it sent to warn, because it still bothers me. Sometimes you just have to use it, unless you want to just do a type assertion, right? And it saves time... I don't know. I hate it.

**Josh Goldberg:** Well, first of all, why are you writing not typesafe code?

**Christopher Hiller:** Okay, is there foo in this set? Has returns true? And then I can get it. And that is my thing. And it's like, okay, I can either use a type assertion or the non-null assertion.

**Josh Goldberg:** You're right, you're right. And we do have a rule that enforces you using the non-null assertion if it's equivalent to the type assertion. Like instead of as string, if it's already string or undefined. You bring up a great point, actually, and there are always -- when you're writing dynamic code, there are always going to be cases where you actually do need to use the type assertion.

\[00:31:58.25\] So the real user difference is not "You should always adhere to the linter. The lint rules are always correct." It's "The lint rules are what's correct most or all the time. And if there's an exception, you should disable the lint rule, with a comment explaining why." And then if that is so common that it's inconvenient and not worth the lint rule, turn that lint rule off. Dear God, it's not worth it. Rather than hate the linter and get resentful over time.

**Nick Nisi:** Yes, that was exactly what I was gonna say... It's not that I never want to do that, it's that it forces you to put that comment in there, and then have a comment of why you're disabling it right there. So it's a way to justify "Yes, I need it in this case", and it's not just like there's no documentation as to why, so that you or a co-worker in six months comes by and sees "Why are we doing this?" and then just deletes that. It's there, and it forces you to think about it and know about it.

To that end one thing -- because I used to work on a fairly large monorepo project; lots of TypeScript apps all together in one... And one thing that I wanted to write, but I never got around to it, I never actually checked to see if it exists is a way to go through and statically analyze to find those ESLint disables, and then sort them by the most common one, to see like "Oh, we are actually like using this all the time. Should we actually just make that a rule?" Do you know if that exists yet?

**Josh Goldberg:** I don't. I feel like I've seen people make ad hoc dashboards for this kind of thing, but I've never seen it that I can remember in a product or tool. I know that ESLint Nibble is a really nice project, but it works -- it's more for rules you haven't yet enabled, rather than rules you are currently disabling, I think. It's a good idea though, Nick. You should build that.

**Nick Nisi:** Patent pending. Patent pending.

**Josh Goldberg:** \[laughs\] That's the difference between open source and corporate life. In corporate life you say "Patent pending" and try to stop people from making things. In open source I just tell everyone my ideas in the hopes that someone will do it, so I don't have to buy that domain name. You know?

**Nick Nisi:** \[laughs\] Yes.

**Josh Goldberg:** I also want to shout-out the ESLint plugin ESLint Comments plugin for ESLint. It's in the ESLint Community org. It's able to enforce good practices around ESLint comments. Like if you disable a rule, also include an explanation why.

**Nick Nisi:** Okay. I was wondering if that was just a built-in thing or if that was a plugin that I had added. So that's great.

**Christopher Hiller:** So I totally derailed you with this talk about the rules that people are disabling... What were you talking about?

**Josh Goldberg:** I don't know, because no one ever in my projects disables ESLint rules, or writes anything other than -- no, that's a joke. One of the beautiful things about working in linting, like what really gets me excited is that even though this is not a new concept, we're still learning core things about users and the user behavior. Like, we just revamped flat config.

There's an ESLint rewrite project that just got started, \[unintelligible 00:34:52.26\] where they're trying to make ESLint more of a generalized tool, such that TypeScript would be just another language. Same with JavaScript. I think it's really cool to see the proliferation of stuff like ESLint rewrite, Biome, and so on, as folks try to resolve this problem.

**Christopher Hiller:** Oh, you were talking about Create TypeScript App, or something.

**Josh Goldberg:** Oh, yeah.

**Christopher Hiller:** We were talking about scaffolding. And you know, back in the day if we wanted to scaffold things, we would use Yeoman, right?

**Josh Goldberg:** Yeah.

**Christopher Hiller:** And it's kind of crufty, and crusty, and old... And maybe there should be a new, modern way to easily scaffold things. And I've seen people try, but nothing has really stuck. And I wonder why that is. But I would love to see a great general-purpose scaffolder that's easy to use, and not terrible, and modern, and... Build something, somebody, please. Thanks.

**Josh Goldberg:** Yes. So that's what I'm doing with Create TypeScript App, where right now it is just a generalized starter for TypeScript apps. And I've been using it on all my new repos. But the problem then becomes how do you adapt the application to what everyone needs? If I'm writing a GitHub action, the build step is different from just like a CLI, versus dot dot dot.

\[00:36:10.19\] So my goal with it is to make it super-duper configurable now, and then eventually pull out a kind of generalized framework, akin to Yeoman - I think that thing was nice back in the day - but using the more kind of modern practices that we were now. I think that I probably wouldn't use any kind of templating library, like Mustache or Handlebars. I would just have people write plugins that are just JavaScript/TypeScript. And then they would generate, say like an object describing files, with some metadata explaining how it interacts with your package dependencies or other files.

I don't have a solid vision of how this would look, but my intent is that Create TypeScript App should eventually just be a consumer of that... Because I agree, it's very inconvenient that in this ecosystem we don't actually have a standard way to scaffold new projects, or to build things like Create Next App or Create TypeScript App. It's really an inconvenience.

**Christopher Hiller:** Yeah, I always wanted something like that, and I got so frustrated by trying to build my own Yeoman plugin like five times, and I was just like "Okay... I give up." And I created a template in a GitHub repo. And that's what I use. And now I'm thinking "Well, I should probably throw renovate on that and just keep everything up to date." Because even if I do that, the template gets old, if it's not maintained. And if I don't create a new project for a couple of months, it's already too late. Anyway, I really hope you solve that.

**Josh Goldberg:** It's a hard question, you know? What do you do when your template updates? How do you indicate "Accidental, this can be removed" differentiation, versus "No, I intend to, say, add in these lint rules, or have this second build step", or whatever? It's a hard problem.

**Nick Nisi:** Chris, you got me thinking about my history with ESLint, and I've had a lot of the similar thoughts about like -- it depends. If you enable everything, it can be too much of a nanny. And the thing that I really disliked the most is like, I've seen rules -- I can't think of one off the top of my head right now... But I've seen rules that disable specific syntax because it could be seen as confusing. And I feel like that's overreaching, but I can't -- maybe that's not so much of a problem anymore. Or maybe I just never run into it anymore. I'm trying to think of something where I've seen that.

**Josh Goldberg:** Isn't that lovely, that all your complaints that you can think of are old and no longer an issue? It's like, someone, some group of people has been really --

**Nick Nisi:** \[laughs\]

**Josh Goldberg:** No, that is a common problem. Especially from the days of ESLint plugin Airbnb, which tried to get everyone on the same style, but wasn't yet -- we didn't yet learn as a community how to effectively do that for people. So it just pissed everyone off. And then a lot of people hated ESLint and linting as a result.

**Nick Nisi:** Yes.

**Josh Goldberg:** But yeah, we don't do that anymore. We have an explicit rule in TypeScript ESLint - a behavioral rule, not an ESLint rule - that we don't take in new proposals that just ban syntax, unless it's incredibly bad syntax that you should always ban. Because most of the time that's just some stylistic preference, it's not actually useful.

**Nick Nisi:** Bring back with...

**Josh Goldberg:** Oh, my God... Oh, my God. Would you like to explain, Nick, why that's such a terrible idea?

**Nick Nisi:** I think it's a fantastic idea. What are you talking about? \[laughter\]

**Josh Goldberg:** Can you imagine...? So the with statement - you say with some object, and then all those object's properties are in your scope. That's impossible to be typesafe. Structurally, you cannot make that thing typesafe with the current model of TypeScript. It would be impossible.

**Christopher Hiller:** \[00:39:47.28\] You can't make things typesafe, but you can use with in a way that will sandbox the code that's running in it... Which makes it useful for certain things. But it's also deprecated, and everybody hates it and doesn't want to add it to their new JavaScript runtime, or what have you. Anyway, with is like a big deal for me. It's part of my job, is the with statement.

**Nick Nisi:** Like you actively use it?

**Christopher Hiller:** Yes, essentially. Yeah. It's like a core part of what we do on our security projects.

**Nick Nisi:** Interesting. This did not go the way I expected it to.

**Christopher Hiller:** Yeah. With is actually really useful for like one thing, and that is restricting the scope of stuff. Because you can essentially stub out objects. So if you don't want somebody to be able to, I don't know, use array.slice, or whatever, you can use the with statement to make it so it's a no op.

**Josh Goldberg:** So if you don't want people to call fetch, or to modify built-in prototypes, okay.

**Christopher Hiller:** Yeah.

**Josh Goldberg:** Is this what shadow realms are supposed to help with as well, the TC39 proposal?

**Christopher Hiller:** It's part of it. Yeah, it's part of it fast.

**Josh Goldberg:** Okay. Fascinating.

**Christopher Hiller:** And yes, there may be a day where we don't have to rely on the with statement for this... But we're hoping. But right now the with statement is -- it's badass. And people don't even know.

**Josh Goldberg:** Most people don't even know it exists in the first place. This entire sequitur is confusing and off-putting to most. \[laughter\]

**Christopher Hiller:** No, no, I mean, Crockford wrote about with, right? In the bad part. You know, in "JavaScript, the Good Parts", and how with is the devil. And mostly it is... But, yeah. So people just disregard it as useless and bad, but it has a use.

**Nick Nisi:** This is absolutely fascinating. I love it. I love that in 2024 we've found the one person using with based off just a one off comment... And this also explains why you're slowly coming around to TypeScript. You're just in this unsafe with place.

**Josh Goldberg:** \[laughs\]

**Christopher Hiller:** Okay, yeah... No. But the code that runs in the with is not necessarily the code that I'm writing, right?

**Nick Nisi:** Sure.

**Christopher Hiller:** So I don't care if it's type-checked or not.

**Nick Nisi:** Yeah.

**Josh Goldberg:** This is a big reason why it's so important that web dev tooling is flexible and fun. Everyone wants things to be standardized the one true way, but you will always -- no matter how much time you spend in this space, you will always find people who are doing weird and wacky crap for actually really good reasons. And your tooling needs to be able to be flexible. There are people who pushed for TypeScript to not support the with keyword... But oh my God, I can't imagine a world where we would block this from adopting TypeScript. That would be awful for everyone.

**Christopher Hiller:** Well, yeah. I mean, there are runtimes that don't support it. They're passing everything in the test suite except the with statement, right.? Or they don't operate in sloppy mode, right? And it is important to implement what the spec says. And I think that's huge.

**Nick Nisi:** When you say runtimes, are you saying like Deno, or Bun? Like those kinds of runtimes?

**Christopher Hiller:** No... Like JavaScript core, or V8 equivalents. I don't know, Quick.js. Stuff like that. Hermes, if you're into React Native... Which does not support the with statement.

**Nick Nisi:** \[00:43:57.09\] So yeah, there's a lot of really cool stuff about ESLint, TypeScript ESLint, this new flat config... More standardized packages like Create TypeScript App... There's lots to dig into, lots of improvements to it... And like you said, Josh - yeah, a lot of my disdain for it in the past probably did come from things like the ESLint config. It has a lot of really helpful use cases, and in particular I do think that just like having the happy path, but knowing that you can just disable the rule if you know what you're doing. It's there to be a check on yourself to not just do something silly. But if you can justify it, justify it and move on. It's great. Anything else you want to say that we didn't talk about regarding ESLint, or TypeScript ESLint and their latest versions?

**Josh Goldberg:** Yes. Thank you for offering. Typed linting, or type-aware linting - it's the big thing. The major value prop, why we're putting so much effort into TypeScript ESLint, the ESLint plugin is that we are the main - and I believe currently the only mainstream - lint situation that can do type-aware or type-informed linting. That's writing ESLint or similar lint rules that can use the power of the type checker such as Typescript. That's huge. That is a hugely important thing to be able to do.

The big banner rule that we always talked about is no floating promises; rules that can detect when you say create a promise and forget to await it, which is a very common problem that we all accidentally fall into. Rules around other async things like awaiting stuff that's not \[unintelligible 00:45:38.28\] custom rules that help you migrate off deprecated endpoints, because you know that the type of the thing is dot dot dot.

Typed linting is really hard, because you're mapping between the ESLint way of doing things, which is a linter, and the TypeScript way of doing things, which doesn't even use the same AST format. As we were saying earlier, you have to map between the two to use TypeScript APIs. So that's why I haven't jumped over to something like Biome or Deno\_Lint yet, because we're the only thing - TypeScript ESLint is the only thing that supports typed linting right now.

I'm very excited they're all working, or at least have it on their roadmap to work - on their public RFCs in all these projects like Biome, the open source ones... But it's a really hard problem to solve, because these projects are intentionally written in a native speed, typically, like Rust for many. You get incredible parallelization, you get very nice performance... But then TypeScript is not written in Rust, it's written in TypeScript, so JavaScript. And no one has yet solved the problem of "How do you call to TypeScript type-checking stuff in a way that doesn't slow your Rust linter down to the speed of a JavaScript linter?" And I can't wait till someone does that. But until they do, I'm stuck, I'm keeping myself in the TypeScript ESLint space to be able to work on typed rules the way we have them now. Ta-dah!

**Nick Nisi:** I'm processing that. I'm trying to think... I guess I never really realized the power of that. But it is really there. And floating promises is a really good example of it.

**Christopher Hiller:** Wait, wait, wait... Why couldn't no floating promises be implemented in ESLint?

**Josh Goldberg:** Let's say you import a function from another file. You need something like a type checker to know the return type of that function. And that's not something that works when you structurally run only one file at a time, the way ESLint is built. You would need something that looks at all your files, like TypeScript.

**Christopher Hiller:** I see. Oh, gosh... Now I just want to dig into that rabbit hole. It's like, okay, so ESLint works on one file at a time, but not TypeScript, right? And so that's gotta be a challenging problem to solve.

**Josh Goldberg:** Yeah. The big thing for TypeScript ESLint v8 is that we're stabilizing a new way of setting up type linting. Previously, we told people to use parseroptions.project, what we called the project. Now we're using parseroptions.projectservice, what we call the project service, which is this new API exposed by TypeScript for consumers like editors, VS Code, that we're kind of hooking onto also to make it a lot easier to set up type linting, and hopefully with performance benefits as well, for most users.

**Christopher Hiller:** \[00:48:16.12\] Yeah... I will say that -- I haven't tried this new thing, but it can be difficult to get that working in like a monorepo. Like, what do I put in this project field? And you end up with files using the wrong tsconfig, essentially. So that is a welcome change, and I'm eager to check it out and see if that makes things as easy as you claim they are.

**Josh Goldberg:** Put me to the test. See what happens. F around and find out. Yeah --

**Christopher Hiller:** \[laughs\]

**Josh Goldberg:** ...the first thing we did to make this easier... \[laughs\] The first thing we did was we made it so you can set project true, instead of explicitly passing all your typing projects. For those who haven't done anything around this area, in order to configure your TypeScript, tell it where your files are, you have these tsconfig.json files. And you need to tell TypeScript ESLint where your tsconfigs are, so that it can generate type info for you.

The first thing we did recently was set it so you can say project true, to just find the closest tsconfig to each file. That honestly works for many cases. But now Project Service says "Yse the same APIs that my editor is using." So if my editor is doing something funky and different, if I've got like weird project references setup, just go along with whatever that is. And we've found that that's both easier for users - you don't have weird situations where you need to specify projects - and faster, because those code paths are more optimized than the manual work we were doing before. So please do, put me to the test.

**Christopher Hiller:** But by editor you mean like the TS server; like the language server itself, right?

**Josh Goldberg:** Yes. The language server, which is what VS Code and other editors use, calls to the same APIs that the project service, which we are using, calls to. Language server, project service. It is unfortunate naming, but that's what we've been given.

**Christopher Hiller:** So the language server is not the project service.

**Josh Goldberg:** Correct. The language server is a piece of TypeScript that runs in your editor, and communicates with a running -- well, with your running editor session to inform you of squigglies, or other issues, little diagnostics in your code. You know what - I'm probably messing up some of this, because it's been a while since I've spelunked... But generally speaking, the language server is the editor situation, and then within that you have the one instance, and that one instance of something calls to the project service, which is what generates for a given source file the TypeScript project, defining its types. Does that track?

**Christopher Hiller:** I mean, I kind of get it. So basically, it's better and faster, and it's more correct.

**Josh Goldberg:** Yes.

**Christopher Hiller:** That's fine.

**Josh Goldberg:** Sorry. One of the lovely things about working on TypeScript ESLint is that -- we're in beta; I haven't figured out really how to explain this stuff, and there are not a lot of people to talk to about how do you explain the project service option. So if folks want to kind of help me out here, please do. I would gladly take issues, like GitHub issues explaining or suggesting how we could better explain this to folks in our docs... Because we're struggling.

**Christopher Hiller:** And there's a Discord.

**Josh Goldberg:** Yeah. Yeah. Types ESLint Discord. Linked on our website. Join. Yell at us, honestly. Tell us how we can do better.

**Christopher Hiller:** That's what I did...

**Josh Goldberg:** Did you?

**Christopher Hiller:** Yeah, I did.

**Josh Goldberg:** I thought you were very nice.

**Christopher Hiller:** Well, I did complain...

**Josh Goldberg:** Well, you have good things to say. Thank you for those.

**Christopher Hiller:** You're welcome.

**Nick Nisi:** \[00:51:43.25\] Now I need to join, and just search for "b0neskull with", and then see where it takes me. So not to switch gears too much, but you did mention something, and I wanted to bring it up... You mentioned the language server, which adds little squigglies to your editor, and that made me think of SquiggleConf, which is a conference dedicated to dev tooling. Do you want to talk more about that?

**Josh Goldberg:** I would thank. Thank you, Nick. Yes. What a great segue. Nicely done. SquggleConf is a conference I'm one of the two lead organizers for, along with Dimitri, who runs Michigan TypeScript... Shout-out, Dmitri. We're running it in October, October 3rd, for a single day, a single track of talks, and then October 4th for separate paid workshops.

It is a conference all about excellent web dev tooling. The things that give you squigglies and other fun stuff at dev time. So stuff like TypeScript, ESLint, Biome, Zig. All these fun tools, and the processes and people around them. I'm really excited about it... And it's terrifying and nerve-racking to run a conference for the first time, but I think I've done enough conferences that I have kind of a sense for how to do the right thing here.

**Nick Nisi:** Yeah. Based on what I know about it - single day, single track - it's gonna be nerve-racking. But that's I've done nine of those, and they are probably -- I mean, it's straightforward because you have a limited number of speakers, and a limited number of paths that people can take. Because it's one path. It's just the straightforward path, so everybody has the same experience, and you can kind of guide based on that. So that's really good. But yeah, that's exciting. And first-time conference - yeah, that was so much fun, just going through everything... So I'm really excited for you.

**Josh Goldberg:** Thanks. Do you have any advice?

**Nick Nisi:** Surround yourself with good people who jump in and help out. Let's see... If it's single day, single track, think about the audience that's going to come for this. If it's going to be all -- or if a majority of it's going to be local, and you're thinking about doing something like an after party, one big mistake that we made at Nebraska JS Conf for the first time was assuming that all 200-something participants at the conference were going to be at the after party. So we had food for over 200 people. And then like 30 showed up. Because a majority of the people who came were local, and so what do local people usually have to do at the end of the workday? Go back to their families, go take care of their kids, things like that. We didn't think about that too much, so we ended up donating a lot of food to the homeless shelter. And that was fine, but we adjusted accordingly for the following years.

And then yeah, the -- I mean, a lot of it revolves around food. Like, if you're serving food, people remember food. It's like a wedding. If people don't eat -- we ran out of food at my wedding, and never heard the end of that. So... \[laughter\]

**Josh Goldberg:** Love it. Yeah, we're not buying food for lunch. We just don't have the money. The tickets would be twice the costs. But we are in the New England Aquarium's IMAX theater in Boston.

**Nick Nisi:** Nice!

**Josh Goldberg:** Probably the comfiest conference seats I've ever seen, and it's right next to -- I don't know how to say it yet. \[unintelligible 00:55:00.28\] The marketplace that has a lot of food shops. So we're hopeful that by just sending people over there, they'll have a fun Boston experience. And if they're vegan etc. they can get what they need.

**Nick Nisi:** That's awesome, and hilarious, because my first conference was in an aquarium.

**Josh Goldberg:** Really?

**Nick Nisi:** That's awesome. Yeah.

**Josh Goldberg:** Hell yeah. Yeah, shout-out to Boston Aquarium. It's got a fantastic penguins exhibit. Really, really cute.

**Nick Nisi:** That's awesome. Do you have any -- well, so I think by the time this episode goes out, the CFP will be closed. So can't promote that probably on this. But people should definitely check it out. I'm biased, because I'm just like -- I love dev tooling so much, and when I saw this, I was like "Yes! I'm so happy that this exists." And I'm so happy that you're the one doing it, as somebody who is so deep into this world. Perfect person, so that's great.

**Josh Goldberg:** Thank you. Yeah, I would encourage anyone who wants to learn about excellent web dev tools - you don't have to be like a framework author or open source extraordinaire. Just, if you have an interest in the tools you use... Yeah, I'm hopeful that it'll go well. Thank you. Squiggleconf.com. Fun fact, the website is built in Astro. I like using these little projects as an excuse to try new things in tech. So...

**Nick Nisi:** \[00:56:15.00\] Nice.

**Josh Goldberg:** One of the things also that I'm doing with it is just trying to bring together people to have nice conversations. This is really good user research for me. What does everyone there actually think of the ESLint and TypeScript ESLint?

**Nick Nisi:** Nice. That's great. That's a great idea. I mean, you mentioned Astro, and I want to go deep on that, too... But there's another topic that I wanted to bring up too, that we talked about before this... And that is Mocha.

**Josh Goldberg:** Yeah.

**Nick Nisi:** Because we have the current and former maintainers of Mocha here. So we should take advantage of that and talk about that. So how do you want the format to be? Do you want it to be a therapy session, a retro? What do you think, Chris?

**Christopher Hiller:** I don't know... I mean, if he has questions, I can try to answer some, but... Yeah.

**Nick Nisi:** Let's start with what Mocha is, first.

**Josh Goldberg:** Mocha is a flexible and fun testing framework for Node and browsers. You define tests with syntax that many tests runners use, like describe, or it, or test, as functions, and then it will run those tests, letting you know if any failed. The key differentiators for Mocha is -- well, for starters, it's old. It's like a decade old also. I learned to unit-test in JavaScript on Mocha. It's not as big and expansive as more modern ones like Jest and Vitest. So it does less, but it is much smaller and leaner as a result. In fact, it can actually can outperform both of those in some cases, because it's just running JavaScript. It doesn't do all sorts of fancy module isolation, or anything. Unfortunately for Mocha, it fell out of maintenance mode for a few years, in and out, and so now I'm one of the current maintainers of Mocha, somehow. Despite having never actually worked on a testing framework before.

**Christopher Hiller:** Yeah. Well, I mean, when I started, I'd never worked on a testing framework either. So...

**Nick Nisi:** Great.

**Christopher Hiller:** But... Yeah.

**Josh Goldberg:** Chris, what was your tenure? Or when did you maintain Mocha?

**Christopher Hiller:** Well, I don't remember... I know it was for about five years, five and a half years or something like that, where I was maintaining... And I'll learned by the seat of your pants. Because at the time, Mocha was the most depended-upon project in the ecosystem. And later, ESLint took over that top spot, and Mocha has lost adoption since... But yeah, it was really popular when I started. And so that kind of -- a new maintainer, not really sure... I'd never even maintained a project before, I don't think. And so I wasn't really sure how to handle things. I learned... But yeah, I got tired of it. I burned out of it. But hopefully, that won't happen to you.

**Josh Goldberg:** Oh, it's already happening. I'm on my path to burnout. It's inevitable. That's the nature of open source right now. You're off alone, doing your thing... If you're lucky, you get people who might sometimes intersect with you... But it's a very lonely, isolating experience.

**Christopher Hiller:** Yeah. And I mean, I wasn't the only one. There were other people involved, too. But still, I think for most of the time, most of the other maintainers didn't have a lot of time for it. And I really felt this imbalance between trying to carry the project, and just the overwhelming number of users. Josh, at least, I think that you are experienced with that; you're experienced with either maintaining or leading a project that has such a large user base, and maybe not so many maintenance resources.

**Josh Goldberg:** \[01:00:00.14\] Yeah. I'd say this year is probably the biggest year for me in terms of projects. When I was lead on TSLint, which was my first major open source project I was on, there was a very small number of months before they decided to kill the project and move over to ESLint and TypeScript ESLint. Also, when I was there, it was a similar situation where just none of the existing maintainers had time. They were all completely capable, very, very much. They knew more than me, but just -- time is hard. So then I dropped out a bit.

Now I'm on TypeScript ESLint, but I'm not the only maintainer there, and I'm not on core maintenance of ESLint, I'm just on the committer team. So in some ways for me Mocha feels like the first time I'm trying such a large thing as a maintainer. But also Mocha is no longer on the ascent. It's not top of mind for most people. I think most of our users are kind of legacy at this point.

**Christopher Hiller:** Yeah. I mean, I still use it. It's my go to, just because I am typically only writing for Node, and I don't need the things that a Jest gives me. I'm not bundling stuff. I don't need Vitest, or what have you. I think, personally, as work continues on Node's own test runner, I'm probably going to adopt it in more of my projects. But there's still a need for a good assertion library.

**Josh Goldberg:** Yeah. Which Mocha --

**Christopher Hiller:** So what what's the plan with Mocha then? What are you trying to do to it? Because I know at least one of those maintainers had some PR that he wanted to get into support, like aggregate errors, or something like that... And he was annoyed that it sat there open for a year. And I was like "Well, nobody's really maintaining it." So that was kind of a kick in the butt to raise the alarm about it.

**Josh Goldberg:** Yeah, I actually just started reviewing that PR today, support reporting aggregate errors.

**Christopher Hiller:** Yeah, okay... Okay... The thing is, you've got to be so careful with the output. The output of Mocha, and especially the default output of Mocha - if you change it, it will break somebody. And maybe that's not true anymore, because there aren't as many users as there used to be... But that's what I was looking at. So when you go and you want to support aggregate error - well, what's the blast radius of this? And that's what I had to evaluate for any change like that. Anything that was ostensibly an improvement to the UI or UX, or output was just like "Okay, how many people this is gonna break? Is it really worth it?"

I think doing stuff like aggregate error, and keeping pace with the language as it evolves is important for Mocha. But yeah... What else do you have in store? Are you gonna add your default assertion library? What are you gonna do? Rewrite the website, or...?

**Josh Goldberg:** Rewriting the website would be interesting. As an umbrella, we're just keeping it afloat. We're not looking to reinvent any wheels. Keeping it afloat is kind of a flexible term, and I think it actually does include revamping the website... Do you remember back in the day everyone's website was like 5000 lines long, and it had every single possible thing you could want on a single page, the front page? Mocha is the only open source project I come across now that I actually use that still does that. Everyone else has moved to some kind of page navigation.

**Nick Nisi:** You said that as I'm scrolling this massive page... \[laughter\]

**Christopher Hiller:** It's like the only website where Command+F or Control+F will find you what you need, right?

**Josh Goldberg:** \[01:03:56.15\] \[laughs\] Yeah. I's mocha and Zod at this point. The problem with that type of thing is that it can be very overwhelming. I can't speak to the user experience of using the Zod site, so I don't know if there was an explicit decision to keep it that way for them... But for Mocha, it means that you have to give the same docs experience to people who are just kind of looking on the surface for how to vaguely do stuff, and people who are deeply trying to understand. Those two are very different forms of docs to write. So what I'd love to do is split the site out into features, options, deeper dives... Have a real docs website. That I think would be good, and within the realm of keeping it afloat.

I'd also love -- we've been talking about making it work on alternate runtimes, speaking of which, like Bun, and Deno... Because there's actually not really, to our knowledge, one test runner that works well across all of those. And that might be a nice value prop for Mocha itself, because it's so simple.

**Christopher Hiller:** Yeah, that should work. That should work. It doesn't do anything weird.

**Josh Goldberg:** Yeah.

**Christopher Hiller:** The only weird thing it does is add some globals.

**Josh Goldberg:** Yeah. How nice would that be, if you wanted to write code for both Bun and Node? And you could write your tests in one situation, in just JavaScript or TypeScript, and then it would just validate, "Okay, this does work the same on both of those."

**Nick Nisi:** Does Mocha provide any -- really, the only other ones that I've used are Jest and Vitest. And the big difference -- or I guess a thing that I liked in both of those is being able to mock things. Does Mocha provide any of that out of the box? Or is it strictly just "Here's the test layout and assertions"?

**Josh Goldberg:** Nah. Mocha is much closer to the platform to Node, and it doesn't provide any of that stuff... Which means that actually it kind of has a nice story for transpiling module support, because it can directly use Node importers or loaders. But then yeah, doing like module mocks is -- I actually don't know how to do that in Mocha. I have to refresh on that. Chris, do you know how to do that in Mocha, if there's like a sanctioned way right now?

**Christopher Hiller:** There's no sanctioned way. I can tell you that I use a library called RewireMock to do it.

**Josh Goldberg:** Yeah. But it's unfortunate. I think that part of flushing out Node's ESM story should involve having a nice way for ultimate test runners like Mocha to do that. It really is a core need, that -- honestly, I don't like how any test framework does it now. I don't like how it's not typesafe in jest.mock or v.mock. I, again, have yet to come up with a better solution, but I hope, inshallah, there is one later that we will discover.

**Christopher Hiller:** Yeah, I'm interested in what's the story around using loaders with Mocha... Because back when I was working on it there was no such thing. And it barely supports ESM, like native ESM. So yeah, I'm curious where we'll go with that. Because for ESM you need something like a loader if you want to mock a module.

**Nick Nisi:** Is that the only use case for them, for loaders?

**Christopher Hiller:** No, you can do all sorts of terrible things with loaders. Just crazy stuff. You can do -- yeah, loaders are awesome, actually. You should poke around at them.

**Nick Nisi:** I want to. Can you give an example? Not to derail this, but could you give an example of something crazy you could do with a loader?

**Christopher Hiller:** Yeah, so you could use a loader to parse and run JavaScript out of a Markdown file. That's just an example. It allows you to basically touch two things. It allows you module resolution, you can control how anything that is requested is resolved... And two, it allows you to -- basically, you get a path, and you can return any sort of... Like a string, right? You can return a string, and that is the JavaScript that you want to run. And so whatever you can do with those two things is a lot of things. Loaders are cool. Yeah.

**Josh Goldberg:** \[01:08:08.11\] Yeah, you can do things like if the person imports from a TypeScript file, transpile it to JavaScript first, which makes for a really nice story of running TypeScript via Mocha, instead of something that automatically bundles, or \[unintelligible 01:08:19.21\] like Vitest or Jest.

**Nick Nisi:** Yeah. I think I have used that with a project called -- I think it's tsimp, maybe...

**Josh Goldberg:** Tsimp, yeah... \[laughs\] Yeah.

**Christopher Hiller:** T-simp?

**Josh Goldberg:** There are a few of these that have -- yeah...

**Nick Nisi:** \[laughs\]

**Josh Goldberg:** Are you a big fan of it, Nick?

**Nick Nisi:** I did like it as an alternative to -- what's that...? Is it tsnode? Like, I was just using it to write shell scripts, basically, in TypeScript.

**Josh Goldberg:** Yeah. First, there was tsnode, and then there was tsimp and Tsup. Tsup's the builder. But tsx is the one I personally use.

**Nick Nisi:** Yeah.

**Josh Goldberg:** I really like tsx, but it does hurt me that it's the same name as the jsx TypeScript file extension. That is a little confusing.

**Nick Nisi:** Yes. But it's very straightforward. Like, you just write the TypeScript file, and then run Node with that --loader... I think it's tsimp/slash loader, and then the file, and it runs. And that was great.

**Josh Goldberg:** It's actually really straightforward oftentimes to run TypeScript on servers now. It used to be a whole pain in the rear where you had to have a separate build step, and whatever. Now you can do just-in-time transpiling and it's fine.

**Nick Nisi:** Yeah.

**Christopher Hiller:** Yeah. Tsx is solid, tsnode is solid... There's plenty of ways to do it.

**Josh Goldberg:** It's funny, I think Jest for a lot of people became the way they liked to do testing in Node, because it solved the big pain points of using prior things like Mocha... TypeScript support, or Babel at the time we were still using... And then Vitest came along, because Jest was slower and harder to configure... But now that it's actually straightforward at the platform level to support stuff like TypeScript, the value prop of something like a Jest or Vitest - it's still there, but it's I think a little lessened... Which is a nice opportunity for folks to, again, think "Well, how can we make this stuff even simpler, and even more straightforward?" Someone else will think on that.

**Nick Nisi:** I like that. Keep it as simple as possible, and build from there with plugins, or something.

**Christopher Hiller:** Also, people want code coverage, too. And Mocha doesn't do that out of the box. And if you run it in parallel mode, you're not gonna get it, because of the way it works... But yeah, people wanted that stuff, and now Jest came with it, and... Now people expect it.

**Josh Goldberg:** Yeah. I would love more common and more fleshed out support for code coverage across parallel runs, or across different tools even... I think a big annoyance that I always used to have was I would have end to end tests in one tool, like Cypress back in the day, now Playwright, and then unit testing in another tool. I personally use Vitest for my projects. And it's just a pain in the rear to get services to merge them together. I have yet to find in my once a year angry searching a really reliable way to merge. Please correct me if that exists now, but that would be nice.

**Nick Nisi:** I can't think of anything... It's a tough problem to solve I feel like, because an end to end test could touch a lot of stuff... And how would you count that?

**Josh Goldberg:** You'd have to instrument your entire app... Which is not impossible, but not great. But even like Chris said, with parallel mode - in theory, if I'm building a testing framework that I want to be as simple as possible, I would hope that there are good tools for each of the steps, like loaders, like code coverage... And it's exciting to see that folks are constantly iterating on these things. But it means that if you're taking a step out of the sanctioned path of something like Vitest and trying to use an older tool like Mocha, it does mean you have to kind of figure out what the current state of all these different things is, which is an added tax, and why I personally just still use Vitest for all my personal repos.

**Nick Nisi:** \[01:12:13.13\] So Josh, you're covering the linting piece, the testing piece, the conference piece... You talked about all of these things. What's next for you? What's the next piece of that conglomerate?

**Josh Goldberg:** Probably fewer pieces... I want to calm down. The first year you run a conference, I think, as you know, is the hardest; the most amount of new work. I'm mostly cutting out conference travel, because I have historically done a lot of conferences, and it's tiring, and I miss my family. But yeah, I want to get TypeScript ESLint V8 into stable, I want to get Create TypeScript App good, and split out that create thing... And then once I have that create thing, I want to try to roll it out to more use cases. Like if you have a Create Next App, or Create React App equivalent.

And my last project is once I figure out monorepos, which is necessary for this create thing, I have this old project called Typestat that I'm renaming to tslift, that converts JavaScript to TypeScript. And I think that's going to be my swan song with open source. I think that's going to be the thing where I focus on that last, and then before quitting open source and going back into industry, that project is going to be my white whale that I may or may not ever finish.

**Nick Nisi:** I can't tell you how much I want that tool right now...

**Josh Goldberg:** I used to worry, "Will people still want this in five years?", and now it's been five years and people want it more than ever. It would be so nice to get it working. But it's such a hard problem figuring out what people want in their code...

**Nick Nisi:** Yeah. And I don't think the language -- the ecosystem itself doesn't make it easy in any way. I was thinking about this in terms of other languages. Because I've been dabbling in code mods for a while, and I'm like "Oh, I could just write a bunch of code that can do all of these conversions like that." Specifically, the latest one I was working on was converting Material UI to Tailwind components, and just like having an easy transition between those. Pretty straightforward for that. But then I've also taken up some work converting an old React project that hasn't been touched since 2016-2017, into modern React. So that's a lot of removing classes, and getting function components, and cleaning up a lot of pain points that are in there as well to be compatible with React 18, or React 19 coming up. And I was talking to a friend about this who does mostly like PHP development, and they're like "Oh yeah, I just use Laravel and I pay for the subscription", and it's basically a code mod as a service that plugs into their GitHub, and it just keeps them up to date on the latest Laravel. And it's like a subscription that they're happy to pay for every year to easily do that... And I'm just thinking "That would be so awesome in our ecosystem." And it feels so impossible, because there's not like a one way to do things, in the way that I perceive it being Laravel or Rails. It's just like, "How could you write such a tool to do that?" And I feel like it'd be the same for JavaScript to TypeScript. The language can be so -- you can be so forgiving in what you write as JavaScript, or what counts as JavaScript, and converting that to TypeScript can be a pain.

**Josh Goldberg:** Yeah, Angular is the closest thing we have to that right now. They have migrations between versions, but it's not the same. There's a code mod service literally called Code Mod that they're trying to build up, that's getting nice partnerships... But it's a hard problem.

**Nick Nisi:** For sure.

**Josh Goldberg:** Can you imagine how nice it would be if we solved that?

**Christopher Hiller:** Well, I'm sure there's going to be plenty of people trying to solve that with AI.

**Josh Goldberg:** Oh, my God... I can't stand it.

**Christopher Hiller:** Good luck with that.

**Josh Goldberg:** \[01:16:07.16\] The annoying thing is AI actually is kind of well-positioned to help with it. It's a God-awful way to run an application. I would never build an application using AI as the core foundation of it. Not the current \[unintelligible 01:16:19.06\] But when everything else is exhausted, when you have no more known ways to improve the code, and you just need to figure out what interface should be used for this function parameters type, getting AI in there might actually be a "Well, this is better than nothing" kind of guess. Because a lot of these tools are very iterative, and they're known to guess wrong in each iteration as they improve. I really hate that that's the case. I just don't want to use AI in there.

**Christopher Hiller:** Yeah, I could see a tool working pretty well like that, where it does everything that it can, and the things that it's not sure about it can punt, and say "Okay, ChatGPT, what do you think?"

**Nick Nisi:** That'd be interesting. Yeah. Just "Here's what I know I did right, and then here's \[unintelligible 01:17:03.20\]

**Christopher Hiller:** Yeah.

**Nick Nisi:** But document it well. That'd be interesting.

**Josh Goldberg:** I gave a talk at CascadiaJS this year called "Your AI needs an assistant", talking about what AI is or is not good for. AI is really bad at creation. It just synthesizes stuff together. It's basically global autocomplete. So what I did was I wrote a tool that, given like a LeetCode style problem, biggest number in array, return that, it generates an initial solution with AI, and then keeps running it through generated unit tests, also linting and type-checking. And whenever those are \[unintelligible 01:17:35.13\] which of course there's going to be, because AI doesn't solve code well, typically, it feeds that complaint into the AI, and then the AI fixes the code, in this beautiful virtuous cycle of eventually it actually is pretty good at solving issues. But you know, seven Open AI or Gemini calls later...

**Nick Nisi:** That's interesting.

**Christopher Hiller:** It only costs one barrel of oil to run all those AI calls.

**Josh Goldberg:** Yeah. \[laughs\]

**Nick Nisi:** I will say, just like digging in -- the thing that I've found AI to be the most useful for is like some of this AST stuff. It actually knows ASTs really well in terms of helping me to be able to properly query for something, or just knowing the APIs that are out there in the TypeScript compiler, or in ESLint, to find all of that... Because it's so well documented, it can regurgitate that pretty well.

**Josh Goldberg:** It kind of sucks working on projects that aren't a common tech area. For example, when I work on TypeScript ESLint, when I'm fixing up an ESLint rule, the amount of help I get that's good from something like Copilot or Sourcegraph Cody is much less, because there's just so much less code in production writing lint rules. And then when I jump to raw code mods, it's basically useless for me. It's really upsetting... But then when I jump back into React - oh, my God, it's fantastic. It does everything.

**Nick Nisi:** \[laughs\] Well, Josh, we've taken up a lot of your time, touched on a lot of different things... You're doing a lot of amazing work in the community, and so I want to thank you for doing all of that, for making it easier for me to write Typescript, and for Chris to continue his slow fanboy-ism in jumping into it... So thank you. Any parting words before we go?

**Josh Goldberg:** To anyone listening, try out TypeScript ESLint v8 with the project service. If it's still in beta, please help us find bugs and performance issues. If it's not in beta, as I suspect will be the case - oh my God, it's so nice. And always, check out our -- if you have a lint config you haven't redone in a while, check out our preset shareable configs, our recommended and recommended type checks in particular. That stuff is great. And if you're not using just the recommended rules from ESLint and TypeScript ESLint, you're missing out on a whole bunch of good stuff. But yeah, thanks for having me. This has been great.

**Nick Nisi:** Yeah, thank you.

**Christopher Hiller:** Thank you, Josh.
