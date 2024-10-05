**Jerod Santo:** Alright, I'm here with Ryan Dahl, creator of Node, and more recently, but not that recently, it turns out, Deno. What's up, Ryan?

**Ryan Dahl:** Hey, how's it going?

**Jerod Santo:** It's going well. Thanks for joining me. I was just on YouTube, checking out some of the Node documentaries. I think Honeypot put up a new one that's a little bit shorter, about the origins of Deno... And I was looking, like, 600,000 people watched the Node.js documentary. I think the new one has thousands as well, and I wondered... Did you ever think this would happen to you just for slinging some C++ code and putting your ideas out there? You're kind of an internet celebrity now.

**Ryan Dahl:** Day after day, it continually surprises me. It's just -- every year, like "This is how big Node will be." And then the next year it gets bigger and bigger. It's a privilege to have worked on this.

**Jerod Santo:** Well, well deserved. Of course, not just yourself, hundreds, scores of people working on Node over the years. And of course, Deno, you are primary on Deno, but a team over there as well... And gosh, I said not too recently because you've been working on Deno a long time now. Hasn't it been like six or seven years?

**Ryan Dahl:** Yeah, it's been a while. I think we started this in 2019 and just kind of got off to a slow start, a demo for a conference, but... Yeah, it's been plugging away at it.

**Jerod Santo:** Yeah. We are on the edge of Deno 2 now, so you're going to have an official 2.0 launch pending, coming very, very soon. It's in a release candidate, so I'm sure people can get out there and use it right now today, right?

**Ryan Dahl:** Yeah, it's basically -- the release candidate is almost exactly what will be there. Yeah, we released Deno 1 back in 2020, so it's been four years now... We've talked a lot about it, we thought about this for a while, about what to do for Deno 2, and teased it multiple times, but always kind of pulled back from it, because we're like "Yeah, actually, no, it's missing this. We're not sure. We have to--" So we've thought long and hard about this release, and yeah, I'm excited to finally get it out there.

**Jerod Santo:** The cool thing about Deno and its origin was these "10 mistakes I made with Node" in that conference talk, like you mentioned, and then this was your second effort to rearrange the letters, start fresh, fix some of those mistakes... But you've been working on Deno now for seven years, and so I'm not saying there should be a third effort, but are there things you've learned about Deno, or do you have Deno regrets at this point? It's been long enough. Everybody has regrets, right?

**Ryan Dahl:** Sure. I mean, there are things that I said in that original talk that Deno 2 actually goes back on...

**Jerod Santo:** Oh, really?

**Ryan Dahl:** So for example introducing the process global variable is, I think, one of the things I regretted about Node. It turns out -- yeah, I think we're just kind of hitting reality with how big the Npm ecosystem is, and just realizing that -- and this is kind of a big part of Deno 2, is just realizing if you're going to... Like, if you want to be able to pull in some random Npm library like gRPC, which you definitely want to be able to do, because it's super-complicated, and you're not going to rewrite that, you have to be pretty close, you have to basically implement the Node built-in APIs. And although we look at this very carefully, and still have a core philosophy of leveling up JavaScript and narrowing the gap between server-side JavaScript and browser JavaScript, and looking to the future of JavaScript, Deno is not a re-implementation of Node in Rust. There is work that has been done to be able to import Npm packages, and be able to run Node projects out of the box.

And yeah, at this point with Deno 2, it's pretty great. You can basically drop into most Node projects, let's say modern Node projects, if they're using ESM - not if they're using CommonJS - and use Deno with them.

**Jerod Santo:** \[00:08:19.00\] So you initially started with a clean cut from Npm as well, with your own URL-based imports, and you've since had --- I mean, you basically had to do that stuff, because there's so much, like you said, there's extant code out there; there's packages that you just don't want to have to re-implement on the Deno side, because - let's be realistic, I mean... When Node came out, I remember that first call for contributors that you gave, and it was like "Come create things for Node.js", because it was available for use, but there was no standard library, there was no code there to use... And people did. It was amazing. I mean, it was like the frontier of web development server-side was "Make a Node package for this." I mean, the person who made the gRPC package initially - of course, that was probably years later; I'm not sure when gRPC became interesting to folks, but... That person - it was greenfield. And they were probably highly motivated to do that. But nowadays it's like "Well, I already have Node, I have a gRPC over here in Npm..." It's now a barrier to Deno, right? It's no longer greenfield. It's like "Do I want to rewrite this, or port it over?" And so when did you guys make that call? And was that a tough one, to finally -- it's a pragmatic choice; you have to kind of ditch a little bit of the pure idealism of the fresh start, right?

**Ryan Dahl:** Yeah, a very difficult decision to be made after wringing our hands over long periods of time. Yeah, I mean, the original idea with the Deno module system is "Let's follow the ESM spec exactly. Let's follow exactly what browsers do." And browsers allow you to have HTTPS imports in there, and local imports, and "Can we actually build an entire module system on top of that?" The answer is yes, you can, and it works pretty nice it's pretty great, especially for single file scripts and kind of small little programs; you can just kind of drop in some imports in there and get off to the races pretty quickly.

It gets problematic as you kind of scale up in complexity, and in particular when you need to interoperate with different systems, when you need to pull in the AWS SDK. There's just some things that you are not going to rewrite... And I think we've found a middle ground here with Npm specifiers, where we're still staying true to the ESM spec, these are still URLs, URIs, in that like it's \[unintelligible 00:10:45.14\] Yet, in order to pull in Npm packages, it's much more complicated than the HTTP specifiers.

I mean, the beauty of the original Deno vision was "Oh, this dead simple resolution scheme that really makes it easy to interoperate if people implemented this. It makes it very easy to interoperate with stuff." And yeah, frankly, the reality is that works to some scale, but we're interested in making software for lots of people... And I'm not satisfied working on a runtime that 500 people can use for small scripts. I really want to make software for millions of people. And server-side JavaScript is truly millions of people, and in order to allow those people to really level up JavaScript, I'm pretty convinced that you need to be able to pull in Npm modules, and understand package JSON, and implement the Node built-in modules in order to make any progress. Otherwise, you just face this boil the ocean problem.

**Jerod Santo:** \[00:11:59.27\] Yeah, exactly. And you have to meet people where they are, for them to actually benefit... Because you're trying to make software that's a) used by the mass developers, and b) it has to then be useful to all of them, or many of them... You're not happy, like you said, writing a niche runtime that 500 people use.

Back in the day, go back seven years, I know you had this initial idea... And it was like -- I think in that initial speech you said that Node kind of offended some of your sensibilities over time. And I know there's a lot of personal history there, and there's job-related stuff, and lots of baggage there, just mental baggage... I'm sure it was just more fun to start fresh with something else... But now that you're competing with your previous creation in terms of getting people to use Deno - and that's probably an uphill battle, because Node is established, and it's like the de facto, and it's probably hard to move certain people. Is there an alternate world where instead of starting fresh, that you've just said, "I'm either going to fork Node and start from there, and change these things", or "I'm going to rejoin the node technical steering committee, and --" I don't know if that could have even happened, but like moved it in a direction? Because then you wouldn't have to regain all these users; you'd have all the millions of users already.

**Ryan Dahl:** I'm sure that's possible, but I am still pretty adamant that this new base infrastructure that we've built for Deno, the Rust codebase that we have, the secure by default capabilities, the native TypeScript support, the fact that we have all these web standard APIs, the fact that it's all in one toolchain... It's literally a single executable that has an LSP, has code formatting, has linting... I'm not willing to sit in committees for 13 years, trying to make all of that stuff happen.

I think the failure mode of Deno might be that it ultimately ends up being an R&D effort, because Node these days looks at what we do and says "Oh, okay. Actually, that's a good idea. Let's kind of pull this in", like the native TypeScript support. But I am bullish on what we're doing.

I think it is very useful to have deno.exe, that you can hand to not just deep JavaScript developers that know what Prettier is, and know how to configure, how to get started with the project, but you can hand it to some random Java developer, or somebody coming from PHP or whatever, and just allow them to get started very easily. And I think this idea of striving for simplicity is -- well, let's put it this way. JavaScript I continue to believe is not like other programming languages. It is something like the default programming language, because so much of human infrastructure is built on the web. And because JavaScript is like HTTP or CSS or HTML, it is one of the protocols of the web. It has a future that you can't necessarily say about Swift. Lots of people use Swift, a lot of infrastructure is built on Swift, but it's not like JavaScript. JavaScript will be here five years from now, if not 10, if not 20, if not forever. This may be really deeply embedded in humanity at this point.

And I think it is worth the effort to try to strive and make this simple, and allow server-side JavaScript, which obviously is useful, to have the Fetch API, to use the same APIs that are in the browser, to use ES modules. I think this is slowly coming around, that people are accepting that ES modules is actually the standard, but... I mean, gosh, how long is it going to take? When you run a file in Node these days, it is still not defaulting to ESM. It's common JS.

**Jerod Santo:** \[00:16:11.04\] Good point. I mean, I think the autonomy and the ability to move quickly and not have to convince others of your ideas is, to me, highly desirable in any software project... So I 100% understand why you went that way. And your take on JavaScript is on point. There's been two recent rankings released, one from IEEE Spectrum, which had JS, I think it was one or two; maybe Python was one, JavaScript was two... In terms of surveyed from their readership. But then TypeScript was like five or six. So if you combine those two, which - I mean, come on, you might as well just combine those two... A clear number one. And so there's Academia right there.

And then you go to Industry... RedMonk recently did their rankings this year of top 20 languages in use in industry, according to their methodologies. I'm not sure what the methodologies are, but you've got JavaScript number one, and then TypeScript is down there at five or six. So imagine how number one number one gets if you just combine those two.

**Ryan Dahl:** I mean, top languages on GitHub as of the 2023 survey, which I'm familiar with, because I tweeted something about it... It's JavaScript number one, TypeScript is number three, and Python's number two. So it's yeah, no, it's massive. It's absolutely --

**Jerod Santo:** It really is.

**Ryan Dahl:** And just as a programmer, you know; if you're going to give -- it is the default programming language. It's kind of the shared knowledge that all programmers have.

**Jerod Santo:** So going back to Deno as different from Node from this project - we'll definitely get to Deno 2, so bear with me... But here's a thought I had. Deno is different insofar as it's a startup. This is a business, and that's different and new. That constraint informs a lot of decisions, I'm sure. How has that constraint helped Deno as a project over the seven years of its inception?

**Ryan Dahl:** I mean, it's worth pointing out, first of all, that Deno is MIT-licensed, so it is essentially public domain software. It's completely free. It's not a commercial product. Our commercial product is in kind of cloud hosting services. But yeah, when I was working on Node, there was a time where it was very clear that Node was taking off, and I could not hire any people to work on this. And that was a ridiculous situation, because the company I worked for saw this as some sort of marketing effort, when in fact this was the most important thing that that company was undertaking... Back in 2010 we didn't have the same kind of funding situation that we do in these days. And building software like Node or Deno is an expensive undertaking. Software engineers are expensive, it requires a lot of time and energy to work on stuff. And it's good to have clear direction, and not just herding cats. You move very slowly when you rely on external contributions, and it goes in different directions, and... Yeah, I have certain software that I want to build, and I want to push it in a certain direction, and this is software for the masses too, that is not so far away from all sorts of business concerns. So I think it's totally reasonable to have a company around this, and I think it's kind of the right incentive structure as well for building open source software.

There's two sides of the same coin... There's open source developers out there that will complain about how they have to work for free, and they have to deal with issues, and random people writing in... And then there's other people out there complaining about VC-funded open source projects that "Oh, God, what's kind of the motivation behind this? Are they going to do something sneaky here?"

\[00:20:01.17\] I think these are the same problem. Like, we need to get paid to write software, we're building open source public domain software... MIT license is very, very free. People can fork it, they can sell it, they can do anything with it. I think the important thing is to be honest and not change licenses out from under people. I think that is unacceptable. But beyond that, being able to build some software, release it for free, and then use that software and other situations for commercial purposes perfectly aligns the incentives... And I am fortunate enough to be in a position where we were able to raise money to work on this.

**Jerod Santo:** Is that no relicense thing - is that formalized in any way? I mean, I feel like there should be some sort of like no rug pull clause somewhere or somehow, in a way that you can't just say "Well, I, Ryan Dahl, say that it's never going to happen." Like, sure, that's great, but then what happens if somebody else runs the company, or you get -- I'm sure there's a board of directors, maybe you get excised as the CEO, and the next guy comes in and says "Well, we're relicensing to fair source", or something else.

**Ryan Dahl:** Well, it is MIT-licensed, so you can go start a company and you can fork Deno, and then you can release it under --

**Jerod Santo:** Sure.

**Ryan Dahl:** You can hire a bunch of engineers and work on it for two years, and then license those changes under something else. And it could be that Deno goes in a different direction, and Deno 4 or whatever gets relicensed... What we've built so far is MIT-licensed, and will be that way.

**Jerod Santo:** Sure.

**Ryan Dahl:** And no, there's no legal system in which this is dictated other than my own integrity, and saying that this is what we're doing as a company.

**Jerod Santo:** Well, you haven't pulled the mask off and said "Muhahaha! in the last seven years, so I expect more of the same in terms of "Ah, I'm now relicensing and everything I do in the future is going to go against everything I've said in the past."

It's just, there's good intentions, and then we have over time change in organizational structures, it seems, that usually changes what ultimately leads to a relicensing in the future. So I'm always curious if people have thought about how to somehow just formalize their intentions, maybe even if just saying out loud is sometimes all you can do.

**Ryan Dahl:** Well, I think it comes down to the business model. So you get into trouble with open core business models because you have to decide "Are these features commercial features, or are these free features?" And that kind of aligns the incentives in a poor way, where you're basically stealing from the open source users to -- or not stealing, of course; these people are developing it. But the incentives are just kind of the commercial is pitted against the open source. And what I'm trying to do -- I have long recognized this; I want my business model to be orthogonal to the open source project. So it helps it; we're developing a JavaScript infrastructure that can be used in many places. We don't sell an enterprise version of Deno with special enterprise features. We sell hosting services. We sell things that are orthogonal to Deno itself.

**Jerod Santo:** Yeah. I do think that's the best model so far for the style of software that you're building; of course, different types of open source I think lend themselves to different models.

**Ryan Dahl:** \[00:23:46.21\] We're all figuring it out. But I think it's really misplaced to look at somebody who is -- or anybody who is like putting out free, public domain stuff and say "You are doing something wrong." I mean, that's somebody else's time and energy that's being put into essentially free software, right? Whatever happens with it in the future, at least that software is free and benefits humanity in some way.

But yeah, I think a lot about this stuff, and I really want to set up Deno as a company to not be in a position where it needs to be relicensed in the event that I am somehow not part of the company. That's an inconceivable proposition right now, but who knows...?

**Jerod Santo:** Well, you know the old saying, "No good deed goes unpunished", and it's doubly true on the Internet. I mean, you are going to be criticized if you go left, and you're going to be criticized if you go right... And that's just kind of how it works.

**Ryan Dahl:** Yup.

**Break**: \[00:24:55.12\]

**Jerod Santo:** Alright, let's talk Deno 2. You said you guys kind of agonized over when you could call it a 2... This is always a hard problem, even for the folks who are trying to semver their projects, which is usually libraries, not so much runtimes, but... Hard problem. What's a major? What's a minor? Is this a patch? Of course, most majors in these cases are for marketing purposes, which I think is totally fine. You've got to get attention on what you've been up to, and you can't just simply release things all the time and people just don't pay attention. So usually a 2.0 comes with it, a whole bunch of stuff. This one certainly does. Do you want to iterate over a few of the high points, and we'll talk about them?

**Ryan Dahl:** Yeah, so Deno does follow semver, and there are breaking changes in this, but Deno 2 is really trying to -- I guess I'm calling it marketing, in some sense... Just trying to give some weight to the changes that are coming in Deno. So a lot of it's backwards-compatible. There are some minor breaking changes, but those are essentially just small API things that aren't super-important.

The big changes are the module system. The ability to pull in Npm modules is really good now. The fact that we support pkg.json projects. So if you have a pkg.json with some scripts in it and some dependencies, you can actually run those right in Deno. And the introduction of JSR, which is kind of this newfangled competitor to Npm. Not a competitor; in a way it's a superset to Npm. It's a new package registry where you can share JavaScript and TypeScript code.

And yeah, we are introducing some stability guarantees... Probably most people listening here don't care about that, but yeah, we're starting an LTS, a long-term support release, giving some better stability guarantees on not changing APIs in the future. Not that we were changing them very often, but having a branch that we backport security fixes to.

So yeah, this all kind of comes together, and... Yeah, we want to let people know that things are pretty different than the Deno 1 days, where you can only import HTTP specifiers... Which, by the way, you can still do in Deno, but it's not necessarily the recommended path for distributing code. We recommend you publish to Npm, pull in packages there, or publish to JSR, which is the delightful alternative to that if you can't figure out how to compile your TypeScript to JavaScript, and whether you should support ESM or CommonJS, or some other thing... And if you want to be supporting multiple runtimes, because JSR is not just for Node, it is for Deno, Node, Bun, Cloudflare Workers, et cetera. Browsers...

**Jerod Santo:** Very cool. JSR is very interesting, because the history of Npm is fraught with costs. It was a cost center, effectively.

It was infrastructure for all of us web developers... And Npm Inc, or whatever -- I think that's what it is, Npm Inc became the entity that had to bear the burden of that cost of just hosting millions and millions and maybe trillions of downloads over the years. And so JSR, I assume, also must cost some money to run. How are you guys doing that? How's it working?

**Ryan Dahl:** I mean, we just paid for it right now, the Deno company. It's designed to be simply hosted, it's designed to be cost-effective, it's designed to be very cashable and simple. JSR is not a commercial project. It is also MIT-licensed. I have no intention of ever turning this into a business.

The Deno company is running this right now, but I'm hoping to get this into a foundation, and generally having this be a public service for JavaScript... Because Npm is just not evolving, ever. It's just not changing post GitHub acquisition.

**Jerod Santo:** No, it's not.

**Ryan Dahl:** And this is just really strange for the world's most popular programming language. Like, are we really just going to stand by and let this be a static future forever? How difficult is it to publish a JavaScript package these days? You have to have a lot of knowledge, and that's in a language where things are just supposed to be trivially easy. If I want something that's really hard, let me go to the Rust ecosystem. At least I'll get a lot of speed out of it.

**Jerod Santo:** \[laughs\] Yeah, exactly.

**Ryan Dahl:** \[00:35:54.24\] JavaScript should be simple. This is a scripting language. It's for the children. It should just be super, super-easy to do stuff. And because of this module, because of the CommonJS, ESM situation, and because Npm is not changing, because Node changes very, very slowly, and us old timers in the JavaScript world maybe look past this because we're so familiar with all of the troubles that we don't even see them as troubles anymore... You realize that actually writing a library in TypeScript and figuring out how to post it to Npm in a way that lots of people can consume it is not actually super-trivial. It definitely does not tell you how to do that on the Npm website. And yeah, in JSR this is super-trivial. You just write your TypeScript, you post it directly, and suddenly you can use it in Node. You can use it anywhere. It is delightfully trivial.

**Jerod Santo:** Is it the kind of thing where you would write a package and you would maybe put it on both registries in the meantime, or does it matter? If I was going to author something, maybe I'd already know how to do all the crazy Npm things you have to do. Is it I just post them both? Do I post to JSR? How do you suggest?

**Ryan Dahl:** So there are quite a few people posting them to both, just because JSR is new, and people are kind of uncertain about it. But I think that will dissipate with time. JSR actually has an Npm registry built into it. Npm.jsr.io is the Npm registry. When you publish there, it builds an Npm package, and speaks the Npm protocol. So you can actually import JSR Npm packages in the Npm format directly in Node, for example, just by setting some stuff in your npmrc file.

There is a little bit of a -- like a one-line setup to be able to pull in JSR packages in a Node project directly from JSR. But nevertheless, people are also often posting things to Npm, and it's a feature that we're kind of dwelling on right now, about whether we should support it. It would be pretty easy to allow people to post to JSR, and then auto-post to Npm just to kind of have an Npm-first experience. If that helps people, I think that might be worthwhile doing. But generally, the broad strokes of everything I'm undertaking here is like "Let's level up JavaScript. Let's just make this nicer. Let's strive to make this nicer." And if you use JSR either as a consumer or a publisher, you will be delighted.

Auto-generated documentation... Why does JavaScript not have auto-generated documentation? With everybody writing stuff in TypeScript these days, we have all the information available, and yet somehow Npm does not have this feature. We need to make some progress here, and clearly Microsoft is not doing that. Microsoft slash GitHub, I should say.

**Jerod Santo:** Yeah, yeah, yeah. Totally. I agree with that. So as an author, I totally understand why JSR would be cool, especially if I'm an author of a package and I don't have all of the Npm know-how. As an end user who just has a pkg.json in my Deno app or something, does JSR help me, or does it matter if I'm npm-installing JSR --

**Ryan Dahl:** I mean, auto-generated docs, for example, is something that's going to help you. We have something called the JSR score, which is stolen from Dart, actually, where we kind of rank packages... We give you a better score if you follow best practices.

\[00:39:56.18\] We don't force you to do all this rigmarole up front, because sometimes you just want to publish something and you don't want to do too much. But you kind of get this signal about what sort of best practices are people following. Are they adding doc strings to all of their exported modules? Do they have a readme? Do they have a license file? This sort of thing. It's generally much more searchable, you can search through symbols... It allows you to pull in TypeScript types nicely... If those packages are written in TypeScript, there's not a definitively typed thing that you also need to know about... Yeah, it's generally a good experience.

But yeah, I would say the real 10x behavior is when you publish. Then it's like "Oh my God, I can't believe it's so simple." \[unintelligible 00:40:44.22\] I recognize how terrible Npm publishing actually is.

**Jerod Santo:** That's awesome. And JSR modules don't lock you into Deno. You can use it in Node, you can use it in other things... Right?

**Ryan Dahl:** That's right. Yeah, you can mark in your package which runtimes are supported, and that displays it on the package page. So there are modules posted to JSR that have nothing to do with Deno. Browser-only, or for Bun, for example... It is not Deno-specific.

**Jerod Santo:** That's awesome. So I'm here looking at a Node server file I have on my machine that has import Fastify, import Puppeteer, and import AWS SDK. At this point with Deno 2 I could just deno run this sucker, you think?

**Ryan Dahl:** I'm going to say yes. It's always a little bit of an open question about whether --

**Jerod Santo:** A little hesitation, but probably, right?

**Ryan Dahl:** A little hesitation, because - gosh, there are a lot of built-in Node APIs, and they have a lot of funky behavior that is really difficult to -- there's an endless list of compatibility bugs, and there's always going to be a long tail of compatibility, but AWS, Puppeteer, and Fastify, I think we support all of those, so I think it should work.

**Jerod Santo:** That's really exciting.

**Ryan Dahl:** Uh-oh... Are you going to try it live?

**Jerod Santo:** I was thinking of trying it... Well, I don't have Deno 2 on this machine. I still have Deno 1. I probably can't brew install.

**Ryan Dahl:** You can do deno upgrade, and then deno upgrade rc will get you the release candidate for Deno 2.

**Jerod Santo:** "This Deno was built without the upgrade feature. Please upgrade--" Probably because I brew-installed it.

**Ryan Dahl:** You have Homebrew, yeah. So you'd have to install from our curl script, and then you can do it.

**Jerod Santo:** I will post later whether or not it works...

**Ryan Dahl:** Okay.

**Jerod Santo:** We will not take this long of a diversion, unless you're super-interested in it.

**Ryan Dahl:** My hands are sweaty, but yeah.

**Jerod Santo:** Okay. Let's try it. How do I install via your -- just deno.land, and follow the...?

**Ryan Dahl:** Deno.com, you can grab that curl script, run it...

**Jerod Santo:** There it is. Now, if I already have it installed via brew, are we going to have any issues, or is it going to be all good?

**Ryan Dahl:** You might have to add something to your path, but it should be okay.

**Jerod Santo:** Alright. So I just got Deno version 1.46.3. So now I run deno upgrade...

**Ryan Dahl:** Deno upgrade rc.

**Jerod Santo:** Alright. So deno run server...

**Ryan Dahl:** You can just do deno task. Maybe you have some scripts in there in your pkg.json...

**Jerod Santo:** Yeah. Just a start script. This is a pretty simple thing, besides the fact that it has Puppeteer, which immediately makes it not simple... Task start node, server.js. Well, it's running... My task says Node. So is it running node now?

**Ryan Dahl:** I think it might actually switch that out with Deno.

**Jerod Santo:** Well, that would be--

**Ryan Dahl:** Can you do like ps and see if you have Node processes or Deno processes?

**Jerod Santo:** Yes.

**Ryan Dahl:** Ps tree maybe, to kind of see the sub-process of the Deno task process...

**Jerod Santo:** I see the task. Deno task start. I don't see any sub processes.

**Ryan Dahl:** In ps tree?

**Jerod Santo:** I don't have a ps tree command. Is that an argument, ps tree?

**Ryan Dahl:** \[00:44:01.23\] No, no. That's a special command. You might have to brew-install that. I mean, you can just do it in ps, but you might have other Node processes running.

**Jerod Santo:** I just have the one. I just have deno task start.

**Ryan Dahl:** And that's the only Deno process?

**Jerod Santo:** Oh, no, auto-updating Homebrew. Stop, stop, stop...! \[laughs\]

**Ryan Dahl:** \[unintelligible 00:44:19.01\]

**Jerod Santo:** Yeah, exactly. Hold on. Let me go this direction. I've got a bunch of Node tasks running... Apparently, Adobe Creative Cloud is running Node... Maybe it just happened to be a match. This is getting nasty... Let's try it this way. Can I do deno run server.js? Is deno run a thing?

**Ryan Dahl:** Yeah.

**Jerod Santo:** Yeah, let's just try that, because then we're guaranteed to use Deno, right?

**Ryan Dahl:** You might have to give it a -a, or \[unintelligible 00:44:44.11\]

**Jerod Santo:** Right. Should I allow -- I'm going to say "allow all", because I'm living dangerously. I'm allowing sys, I'm allowing read, I'm allowing write, I'm allowing run, I'm allowing net... Yeah. Hey, it is serving on port 3000... It works. Congrats.

**Ryan Dahl:** Phew.

**Break**: \[00:45:14.22\]

**Jerod Santo:** For me, that was relatively simple. I'm sure for you and your team, that was a huge lift.

**Ryan Dahl:** Super, super-huge lift. Yeah. Yeah, Deno does implement a huge number of the Node APIs at this point, and... Yeah, it was a very large lift. And also given from the principles in which Deno started, also kind of a philosophical lift as well. But yeah, we're here. We've convinced ourselves this is what we need to do in order to level up JavaScript, this is how we can make people's lives simpler... And this ultimately is kind of a better experience for everybody, even if this means -- deep inside of Deno, we do implement common JS somewhere. We have to do that in order to interoperate with Npm modules. And it gets complicated deep inside.

But hopefully for the user, it's a single executable that just does all of this stuff, that hopefully is pretty understandable. It has a Deno LSP, that if you open up VS Code, it will interact with that, and it'll give you linting, and code formatting, and all sorts of -- type checking, obviously.

**Jerod Santo:** Nice. That's exciting. I mean, as a fellow idealist/purist, part of me dies as you talk about this, but part of me actually is also excited, because I'm way more likely to use this. I think a lot of people are way more likely to use this. Have people responded? I know Deno 2 is just getting out there, but some of this Npm support has been there for a while now.

**Ryan Dahl:** Yeah, I mean, I am an idealist, and it was hard for me to kind of come to terms with this. But yeah, like I said, we're building software for people... And if people can't run it, then we're not achieving our goal of leveling up JavaScript. I think what excites me though is that we've actually built this in a pretty structured way. This is not just a monolithic app, but there's actually multiple layers.

\[00:48:07.20\] So you're using the Deno executable... That's kind of the highest layer, what most people will interact with. But there's also different Rust libraries, lots of different Rust libraries actually, that you can kind of plug into at different layers, depending on which experience you want. So people can actually build custom runtimes pretty easily with Rust, with V8, using - the lowest layer would be Rusty V8, which is our basically like zero overhead Rust bindings to V8... And V8's APIs are wildly complicated.

**Jerod Santo:** Yeah... \[laughs\]

**Ryan Dahl:** It is not an easy beast to drive. But in Rust, you can do this all in a memory-safe way. It's very nice to -- the C++ API, but you need to know what you're doing pretty seriously in order to drive it. In Rust you can kind of just hammer on the keyboard and write a V8 runtime, because when it compiles, it's kind of going to work.

Yeah, Rusty V8 is also going 1.0 next week, actually... And above that is Deno Core, which adds a little bit more infrastructure, it adds the module system, it adds - not the Npm stuff, but it adds kind of basic ESM modules... It adds a thing called Ops, which is basically our binding layer to Rust; an easy way to like make async functions kind of bind into JavaScript... Essentially do this in a super-optimal way. Above that we have EXTs, which are different -- think of them as like native modules. So for example, one EXT, one extension set of modules is like the fetch API. And so maybe you just want Deno Core plus the fetch API, and nothing else. Then you can build your own runtime using those two things.

Obviously, all this stuff is MIT-licensed... And so for different use cases -- obviously, you need to be programming in Rust.

Like, this isn't necessarily approachable to everybody... But for some systems -- maybe you're building a serverless system where you really only want fetch, and you just want some JavaScript execution while you can kind of plug into it at this lower layer.

So yeah, the high-level Deno executable is opinionated, has a bunch of functionality in it... But we still have these lower-layer things. And I think that's kind of the appropriate trade-off. Because there's a smaller audience at those lower layers, but they're also more technical, they're also able to kind of deal with this stuff... The highest level people just want to pull in the AWS SDK, and they don't care at all about anything else.

**Jerod Santo:** Right... \[laughs\]

**Ryan Dahl:** They're like "Do you have that? Yes or no?" End of story. And we in Deno just need to pull that in.

**Jerod Santo:** That's really cool, that you've been able to architect it in such a way that is extensible like that, and it allows people -- I mean, talk about, again, meeting people where they are. There are people that appreciate those lower levels, and they can use those open source projects to their own benefit... And that's really cool, and it allows you to continue to take pride in it, and to usher things forward, while still supporting the things that you have to support in order to bring people along with you.

You mentioned serverless computing... I think last time you were on the show, which I guess was two years ago now, we were talking about WinterCG and some of the efforts between you all and CloudFlare to kind of formalize a spec around serverless runtimes... I haven't really kept up with that. Is that something that's continued to move forward? Is there progress there? Is it bearing fruit, this effort to create these specs?

**Ryan Dahl:** \[00:51:47.19\] I mean, it is still a thing. People might imagine that it's more than it is. I mean, it's really kind of describing in minute detail kind of how, say, fetch works in server environments. It's kind of hard to get agreement between all of the server side vendors on like what constitutes servers in JavaScript... That is a goal, but is probably not something immediate. There's not going to be a spec for exactly how an HTTP server is going to work in JavaScript. But nevertheless, we participate in it... Yeah.

**Jerod Santo:** Fair enough. As you talked about these different layers, one of the more interesting features I think you have added, which for me as a person who's been in the open source world for a long time, and cares about sustainability, and talks about licenses - you know, real kind of wonky in these areas - Deno KV was very interesting to me, because it's kind of like where... a) it's open source. This is a key value store built right into Deno, and has a potential, I guess, upgrade path to Deno the service, Deno the hosted stuff, where that database can be hosted by you all for pay. But then also, you don't have to do that. And this is like one of those areas, again, where I wouldn't call this "This is not open core." I don't think so. It's a hosted service. But it's like that weird connection point of like "Well, where does the runtime stop and the product begin?" And I'm just curious your thoughts through that, because I'm sure you've thought deeply up about it as you guys designed it.

**Ryan Dahl:** Yeah. So just for clarity, in the Deno open source project, the Deno KV APIs are backed by SQLite, and you can kind of run a single instance and kind of have that same functionality. In Deno Deploy, our commercial platform, when you run these edge functions that are running across the world, the Deno KV APIs are backed by FoundationDB. It's like kind of this big distributed database that's pretty sweet. The Deno KV APIs are not stabilized in Deno 2. They continue to be experimental, in part because this is kind of an experimental business effort, and we're not quite sure if we want to go further down this route.

I actually want to decouple the KV APIs from the Deno runtime itself, and have them be a module that you pull in. You should be able to pull in a JSR \[unintelligible 00:54:18.13\] and just have -- there's no real reason that it needs to be built directly into the runtime. That's just -- yeah, for ease of implementation, essentially.

**Jerod Santo:** Sure.

**Ryan Dahl:** So I think the open core concerns or incentive concerns would be addressed by kind of decoupling them. It also makes the engineering effort a bit easier, I guess.

**Jerod Santo:** Yeah, yeah, yea. That's interesting you say that, because that was my initial reaction when it first came out. I think we talked about it on the show, and I was like "It's cool. It's interesting. It seems experimental." Would I use it? I don't know, it seems kind of strange that it's like a top-level global inside of the runtime. Like, why is this not just a package? It makes sense -- technically it's probably easier for you guys, especially when you're experimenting with a new feature, just like "Well, we're just going to drop it in right here, because that's the easiest button." Maybe not an easy button, but an easiest button... And see how it works out. So, I mean, that's fascinating that you've kind of thought "Well, maybe it makes more sense just as a package", versus a built-in thing.

**Ryan Dahl:** Yeah. And just to clarify, it is not stabilized in Deno 2, so it's not something that we are necessarily supporting indefinitely. I guess it likely will be moved. But nevertheless, the Deno KV stuff is pretty awesome to -- I don't know if you've played around with it at all, or...

**Jerod Santo:** I haven't, no.

**Ryan Dahl:** ...but like our other stuff, it's just freaking delightful to have an easy state store. But yeah, there's a lot of questions to think through with that, because yeah, obviously, a lot of people need a bit more of a complex database than a KV store... And real application code actually needs a relational database.

**Jerod Santo:** \[00:56:07.04\] And what's interesting is that Node recently added the experimental SQLite support, and I thought "Was that maybe --", again, you being their research arm. Maybe they're like "Wow, putting a key-value store in there..." We could just drop SQLite in there and you can give more power than a key-value store, but I don't know if they were inspired by you, or if it's not -- not simultaneous invention, but...

**Ryan Dahl:** Yeah, I think there's a lot of ideas around here, probably more inspired by Bun, that did that.

**Jerod Santo:** Oh, does Bun have a direct SQLite embedded thing?

**Ryan Dahl:** Yeah.

**Jerod Santo:** Gotcha.

**Ryan Dahl:** I think it's a little -- yeah, it's a little bit questionable, because you can always pull this stuff into packages, and there's always the question of "Where's the runtime concern, and what belongs outside of it?" And it's always a difficult discussion. It's hard to have kind of an algorithm for deciding that. But if node does stabilize that API because Deno does implement the Node built-in APIs, we will implement that. And of course, we have SQLite; we already use SQLite in there, so it'd be a pretty trivial matter to add that.

**Jerod Santo:** Yeah, that's cool. I love the competition and the spirit of innovation, and like the fact that all these ideas are going back and forth, in different directions... I think the whole community really benefits when these things happen.

**Ryan Dahl:** That's what's exciting about JavaScript, right?

**Jerod Santo:** Seriously.

**Ryan Dahl:** It's madness, it's chaos, but... Yeah, there's so many people with different ideas, and everybody's inventing new things all the time... I think it's really fun.

**Jerod Santo:** Yeah, 100%. Do you guys have any other experiments in the works? Anything you're working on that you're excited about testing out? ...whether it's monetization or otherwise; like, cool new stuff that Deno's working on.

**Ryan Dahl:** We do. I feel like I shouldn't talk about it at this date. We have new commercial efforts underway, that are under heavy development right now... But it's a little too soon to talk about it publicly.

**Jerod Santo:** Okay. What about non-commercial? Are there things in the open source side that are exciting to you? Maybe after the 2.0 gets finalized and you're working on what's next.

**Ryan Dahl:** Once 2.0 is stabilized, I think there are a lot of cleanups to do. I think there's still kind of a long list of Node compatibility to work on. I think making the LSP faster is something that we'll be looking at. We removed Deno Bundle for 2.0, because we didn't have a great bundling story... But that bundling is obviously part of the JavaScript tool chain, and we think that that's something that Deno ought to provide. It's just, in general bundling is a pretty hard problem to solve. It's not just simply bundle this script. There's all sorts of things you need to consider. And there's just tooling that is purpose-built for that, that is much better, like esbuild, for example.

**Jerod Santo:** Right.

**Ryan Dahl:** So we are, potentially -- not totally decided yet, but potentially going to undertake having that in the actual tool chain, and providing a really good experience there.

**Jerod Santo:** So you are obviously in the code, in the decision-making process, you are still rocking your code editor on a daily basis, right? You're still writing code?

**Ryan Dahl:** I review a lot of code, I write code sometimes... I write more example code to point out where our problems are... But yeah, Deno's --

**Jerod Santo:** Okay... It still counts.

**Ryan Dahl:** ...Deno's like a 27-person company, and even at this scale, I'm finding myself becoming more of a manager these days than an actual programmer... Which is fine, I guess.

**Jerod Santo:** I mean, are you fighting that off? Are you embracing that? What's your stance on it?

**Ryan Dahl:** \[00:59:58.17\] I mean, it's just at what scale are you solving a problem. Are you working on a much larger problem? Because very often I can just ask some engineer "Can you work on this for three days?" And if I work on something for three days, that is going to block other things that I might be working on. And so yeah, just working on problems at a larger scale. That said - I mean, I love programming, obviously; it's like deeply satisfying, and I just don't understand why people work on crossword puzzles... Like, work on software. It's the same thing, but much faster; much, much more fun.

**Jerod Santo:** Yeah.

**Ryan Dahl:** Someday, someday maybe I won't be working on Deno anymore. Deno won't be growing anymore, or whatever...

Then I look forward to sitting down and coding on some small stuff. But yeah, right now the scale of Deno is such that it doesn't make too much sense for me to work on coding stuff day in and day out.

**Jerod Santo:** Sure. Well, you're at least in the weeds of the decision-making with the architecture and the direction of the project.

I mean, it sounds like you are very well-versed in where Deno is headed, not just generally speaking as a business or as an open source project, but like in the technical details of the decision-making process... Whether or not you're actually coding up the functions or not. Yeah.

**Ryan Dahl:** Sure. More or less.

**Jerod Santo:** Have you ever considered reorganizing the company a little bit? So maybe bring on a CEO or somebody, and then just stay in IC? Is that something that's attractive to you? Or do you just think that you need to be at the helm?

**Ryan Dahl:** I've definitely thought about it, because I -- I mean, I'm like a nerdy engineer. I'm not necessarily the best salesperson... And doing the CEO job, I think you have to be kind of a salesperson. You have to have to go out and close contracts, and that sort of thing. But the focus in my life isn't to be like the best programmer in the world. Like, I'm just trying to build cool stuff, and I think it's interesting to learn new skills. Like, doing Deno as a company has been pretty eye-opening, because before that in my career I was an engineer only; and learning how to raise money, how to manage people, how to do sales, how to do product... All of this stuff has its own interesting bits. And I think it's about solving the problem at the end of the day, and you do what it takes to solve the problem.

**Jerod Santo:** Yeah. Wear whatever hats are necessary. What surprised you in that arena, in terms of things you weren't necessarily good at, or hadn't done previously? Is the sales process harder than you thought? Is it easier? What's been a surprise in this new role?

**Ryan Dahl:** I think the need to focus is the thing that I didn't understand very well going into this... Because when you have a bunch of people working for you, and you have a bunch of money to be spent, you can go in all sorts of directions, and that's all very conceivable. But I think there is a real need to kind of focus all of that effort in one direction, add up all those vectors and kind of make progress in one direction. So yeah, it's a learning experience.

**Jerod Santo:** I'm sure it is. In that sense, how do you make those decisions? Like, the focus of "No, we're not going to go right, we're going to go left"? When it comes down to it, is it intuition, is it data? Do you ask the people around you? How do you make the call of "This is what we're focusing on"?

**Ryan Dahl:** Yeah, it's hard to answer in general, but ideally with data. Ideally, we look at some data and we say "Okay, obviously, this is the way to go. This method is faster than that method, thus obviously we do this." Or "We took a survey, and people prefer this to this." But very, very often you don't have clear signals like that, or you just have some dirty signals or some intuition.

\[01:04:18.20\] Yeah, you talk, talk to the people you trust, you take their opinions... I don't, not back in NOde days, nor currently do I believe that a project should be run as a democracy. I just took a poll today about something, and I value people's feedback, people's opinions on stuff, but ultimately you've just got to think about it and weigh all the evidence that you have, and decide what is going to level up JavaScript, what is going to further the company, and try to try to decide that as best as you can.

**Jerod Santo:** Well, on the note of leveling up JavaScript, let's close on this... An open call, a letter to Oracle, of all people, if you can consider Oracle a person...

**Ryan Dahl:** It definitely is not a person... \[laughter\]

**Jerod Santo:** About JavaScript, not the programming language, but the word JavaScript that represents the programming language... Which really kind of belongs to the world at this point. However, the trademark - is "trademark" the word? Yes, the trademark belongs to Oracle. And if you go to javascript.tm, it says "Oracle. It's time to free JavaScript." So it's an open letter. I think -- was this penned by you, or just signed first by you? Tell us the story here. Is this your idea? This is a great idea.

**Ryan Dahl:** Yeah, this is my idea. I actually wrote a previous open letter to Oracle, I think two years ago, on my personal blog, which obviously did not get a response. When we were talking about "Is Oracle a person or not?", it made me think of a quote from Bryan Cantrill, my former boss at Joyent, now CTO of Oxide... "Don't anthropomorphize the lawnmower. The lawnmower is going to just spin its blade and cut grass." And he was referring to Oracle in that way.

**Jerod Santo:** Oh, hilarious.

**Ryan Dahl:** Oracle should not be anthropomorphized. Yeah, it might surprise people to know that JavaScript is a trademark. It came through a partnership that Netscape did with Sun back in the day for this newfangled scripting thing in their web browser, and they called it JavaScript. And the partnership with Sun was somewhat dubious, because JavaScript has nothing to do with Java, but they ended up calling it JavaScript... And Sun owns the trademark as a result.

And Oracle acquired Sun, I think in 2007 or so... And as a result, Oracle owns the JavaScript trademark. And they, like dutiful lawyers do, renew it every year. Yet Oracle really has no -- they do not have a product called JavaScript. They have several products that use JavaScript, like everybody does... But they are not a major player in JavaScript development... The major players being kind of Google with V8, and Apple with with JSC, Mozilla, of course... But nevertheless own this trademark. And because of this, the standard for JavaScript, the spec for JavaScript is called ECMAScript, because they have to avoid this name. And there is not actually a JavaScript conference; you cannot have a JavaScript conference, because Oracle will sue you. You have to have like JSConf. And it just kind of generally creates this confusion where the world's most popular programming language is somehow called a name that nobody can use. And I think it is really not reflective of what trademark -- it's not in the spirit of trademark law. With trademark law I'm perfectly fine. I have trademarks for Deno, I do not want people to call things Deno... But JavaScript is just this vestige of this acquisition and this weird partnership back in the day.

\[01:08:25.00\] And Oracle - whoever renews it at Oracle, some lawyer somewhere just does this because that's what they do with all of their their trademarks. And what I'm trying to do with this open letter is create some public pressure; let people know how annoying this is in the community. And gosh, my letter two years ago just was like "Oracle, you could get some goodwill here by just releasing this trademark into the public domain." Obviously, they have not done that... And recently, I've discovered that there's actually a process at the patent office, the USPTO to challenge trademarks, and that the USPTO is actually trade cracking down on trademark non-use. And there is a legal definition of what it means to abandon a trademark. And this letter explains why Oracle exactly meets this. It's like they have abandoned the JavaScript trademark, as defined in the US code. And so I am gathering support for challenging this trademark officially with the US Patent Office.

**Jerod Santo:** Very nice. Well, this is very well written. You go through it and you describe specifically how they have abandoned this trademark through non-use. And the call to action at the bottom says "If you agree with us, you are encouraged to sign this open letter below. Your support will help raise awareness and add weight to this cause." As of the time of us recording, 9924. It was three, but I signed it just before we hopped on the call. Very easy, just with your GitHub profile to sign that sucker... Many have lended their name to this open letter, including folks like Brendan Eich, creator of JavaScript, Rich Harris, creator of Svelte, Isaac Schleuter, creator of Npm, Feross Aboukhadijeh, CEO of Socket... Some big names. Of course, you're the one at the top there. So people who are very invested in JavaScript have signed this thing. So to our listener, if you are also so inclined to get behind Ryan's open letter, go sign that.

And what's the next step after this? You're actually going to start the legal process? Are you raising money? Do you have enough money? Are there pro bono JavaScript lawyers out there who might represent you?

**Ryan Dahl:** Yeah, we are looking for legal help. So if anybody listening is an IP lawyer, and is willing to contribute some time to help us put together this petition to cancel the JavaScript trademark, that would be very welcome. I think the email is lawyers \[at\] JavaScript.tm. Yeah, we'll start undertaking this process once I get Deno 2 out, so in a couple of weeks here we'll try to do this.

And yeah, I mean, this is just generally trying to make the world's default programming language better. It's not necessarily a product, there's nothing for sale here, obviously... It's just trying to rectify the situation. I have no intention of renaming the Deno company to the JavaScript Company, or anything. I just don't like this weird situation where I can't say that Deno is a JavaScript runtime. That's silly. That is not what trademarks were intended for.

**Jerod Santo:** 100% true. Well, that URL is JavaScript.tm. We will drop it in the show notes for easy clicking through, and lending your name if you feel so inclined. Ryan, thank you so much for sitting down with me; all the hard work you've been doing on this project over the last seven years, probably at least seven more years ahead of you... I mean, it sounds like you're in it for the long haul. As a web worker and as a web denizen, I appreciate you trying to make JavaScript and the web a better place, just to keep leveling it up... And we appreciate you.

**Ryan Dahl:** Thanks so much.
