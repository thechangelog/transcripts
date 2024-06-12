**Jerod Santo:** Hello, JS Party people. I am Jerod, your internet friend, and I am excited because it's been too long, far too long, since we've done one of our Yep Nope style debate episodes. We have an awesome set of debaters lined up for you. First, some guests... We'll get to you eventually, Kball. Eric Clemmons is here. What's up, Eric? How are you doing, man?

**Eric Clemmons:** Hey, I'm doing great. Thanks for having me.

**Jerod Santo:** Always happy to have you on the pod. A recurring guests now at this point; I think third or fourth time on JS Party, and we love having you, so welcome. And from Compressed.fm, it's our friend, Amy Dutton. Hey, Amy. How are you?

**Amy Dutton:** Hey, what's up, everybody? Thanks for having me.

**Jerod Santo:** You're always welcome. You're always welcome. We'll get to eventually, Kball...

**Kevin Ball:** \[laughs\]

**Jerod Santo:** Also on the panel we have Nick Nisi. Ahoy-hoy, Nick.

**Nick Nisi:** Ahoy-hoy. Ready to debate.

**Amy Dutton:** And lose...?

**Jerod Santo:** What did your preparation look like, Nick? How many hours, how many days, how many weeks did you spend preparing for this?

**Nick Nisi:** I asked you to remind me what the topic was yesterday, and then I did nothing, and you told me what side I'm debating today, and I continued to look at nothing.

**Jerod Santo:** That's the kind of research we do right here at JS Party... We are too prepared sometimes, they say. Too prepared. Okay, I guess I've stalled long enough... Kball is here. He's been on tons of debates. Always happy to have you, Kball. Welcome to the show.

**Kevin Ball:** I'm excited. I'm coming to this one cold. Nick found out yesterday, I found out three minutes ago.

**Jerod Santo:** Well, you're already making excuses for yourselves... These guys are definitely not going to represent well. Hopefully, our guests are more prepared. I know - a little birdie told me - that Eric has prepared for both sides... So that's some of that Sun Tzu Art of War stuff, right? Know yourself, know your enemy... I mean, he's ready to go.

**Eric Clemmons:** I mean, shouldn't we say we have the whole career preparing for this?

**Jerod Santo:** Oh, see? He prepared that statement. Look at this guy. He's ready to rock. Okay, so here is the premise... Should web development need a build step? That's the question. And we will have two representing the yes answer, and two representing the no. Arguing for "Yes, web development should need a build step" is Nick and Eric. And arguing against, Team Nope, will be Amy and Kball. We do this quasi formal, insofar as we take turns; I guess that's as formal as it's going to be. And then I tally points, and they're arbitrary, and then at the end I forget what the points were, and I declare myself to be the winner. That's basically how these debates go. I think I'm undefeated thus far, and we'll see how well you guys do. So let's start with Amy. We'll go to Amy first, and then we'll kick it over to the other team. So Amy, you have one minute on the clock. Should web development need a build step? Go.

**Amy Dutton:** No, it should not. The web was founded on open principles. You can run HTML, CSS and JavaScript in the browser, and so you have all the tools that you need. You shouldn't have to do any additional build steps. By adding build steps, you're only making it harder for people to get started, and already the web is so fast, and bandwidth is so great that you really shouldn't have to worry anymore about compiling -- I mean, minifying, or compressing or anything like that. You should just be able to ship your files, and they run within the browser.

**Jerod Santo:** I forgot to mention up top that if you hit your timer, you'll hear this sound. \[Wut?\] That's, of course, b0neskull saying "Wut?" because we couldn't afford an actual bell. However, Amy, you did not use all of your time. You used 30 seconds. Any final words, or is that your argument in a nutshell?

**Amy Dutton:** You know what, this is such a strong argument that I don't even think it needs a full minute.

**Jerod Santo:** \[07:47\] Okay, I like that closer. What do they say in politics, "I yield my time"? Or I don't know what they say. Something like that. She yields it over. We will now go to Eric for the rebuttal. What have you got, Eric?

**Eric Clemmons:** Yeah, I mean, it makes a lot of sense, but it's inevitable that there will be some sort of bundling for performance reasons... And it makes a lot of sense that you want to develop the way that your code gets delivered to your end users at the end of the day. So bundling will be a step, building will be a step... And even though that the web eventually makes it way to browsers and language features out there, we go through our proposal in stages, one, two, three, four, five, for browser adoption... So if you ever want to get ahead, or take advantage of new language features, at some point you're going to have to build down to the lowest common denominator. So I feel since it's an inevitability, it's better to just embrace it early, pay the tax soon, upfront, get it out of the way, and then you never have to think about it again. I yield my time.

**Jerod Santo:** Alright. Thank you. Keeping Chris Hiller off the show. No need to use that \[Wut?\] sound. Strong arguments, I think... But Kball - it is now your turn. You have one minute to state your case.

**Kevin Ball:** Alright. Eric, you said the web eventually makes its way to the future. We're here, baby! It's 2024. People are used to things being slow, because they're dealing with ChatGPT all the time... So a little bit of a few microseconds you might shave off by bundling does not overcome. I mean, look at where we are today. Evergreen browsers. You don't have to worry about lowest common denominator. All these different pieces. It takes me to Why - if you don't need it, you shouldn't do it. Build steps suck. It's additional tooling, you don't need it. It takes time, you don't need it. It's brittle. You have something that's different when you're doing local development for fast iteration than you have when you finally ship to the browser... Why would you do all of that? The browser is capable.

You've got ES6 in the browser. It's up to date. You have import maps. HTTP/2 isn't the norm. You don't need to bundle to get fast performance, get things out there. And bundling will even sabotage your cache expiry, so you might actually give up some performance. So I think - yes, you're right, at one point in time building was the way to get to the future. But we're here. 2024. You don't need a build step. \[Wut?\]

**Jerod Santo:** Well said, Kball. Those bullet points sound like they came from somebody smart. Alright, Nick, you have one minute to state your case with Eric's.

**Nick Nisi:** Alright. Well, first off, Amy, you said that there's a beginner argument that you want to keep things simple to make it easy for beginners. I agree 100% with that, but I think that that's more of a DX story and not a case against build steps. Why does the build step have to be difficult? It could be easy, and we could make it easier, and make the tooling easier.

Kball, you talked about we have this magical world of evergreen browsers, and we don't have to think about that... That works really well if you're in this Chromium bubble, I guess... But even if you want to say that every browser is perfect now, we have this other problem where we've regressed on the backend. And now we have all of these backend steps. And do you know how to use modules correctly in any given instance? I don't. I want a build step to wash that away for me. And so I just need that.

Plus, build steps give me this superpower where I can write this condensed or terse code, and have it magically spill out to be real code. It's the real 10x developer. It makes me the 10x developer, and I want to embrace that. And then I'll just drop my mic right here with the word TypeScript. \[Wut?\]

**Jerod Santo:** Sorry, you still had time left, but I just had to ask... \[Wut?\] Okay, Nick drops the TypeScript mic... None of us have yet determined why he did that, but he did it.

**Nick Nisi:** \[laughs\]

**Kevin Ball:** He was opening the door.

**Amy Dutton:** I got it. Let's go, round two.

**Kevin Ball:** Put me in, coach! Put me in!

**Jerod Santo:** I was gonna say, he's now set up Amy for the most epic rebuttal of all times. Go ahead, Amy. You've got one minute.

**Amy Dutton:** \[11:49\] Now, Nick, you mentioned TypeScript. \[laughs\] The thing is, right now it might be needed for a build step. But should it? Like, just because that's the way that we've been doing it doesn't mean that that's the way it should always be done, or be done in the future. And I think TypeScript is fantastic. I love TypeScript. But let's just include it in the browser. There's no need then to have a bundle step if we continue to use these things to push browsers forward, instead of giving them excuses to stay in the dark ages and use bundling. Let's push our tools forward. Yeah, that's my TypeScript point.

**Jerod Santo:** Okay. Kball, 15 seconds for free, if you want to use them.

**Kevin Ball:** It is shocking to me, absolutely shocking, that Nick Nisi of all people is invoking wanting more tooling... Because I don't know if you all listened to the deep-dive... Nick Nisi uses more tools than any human on this planet. He spends all his time down in his tools, customizing his tools... If you want \[Wut?\] to spend your time in tools, you can be Nick Nisi and use a build step. But if you want to get onto production development, you probably shouldn't.

**Jerod Santo:** \[Wut?\] Please, respect the wut. Alright, well said. Well said. But you used more than 15 seconds, so I'm gonna dock you three points for that. Alright, Eric, you're chomping at the bit. I can see it. Let's hear it.

**Eric Clemmons:** Well, I mean, look, you don't have to listen to me... I mean, you can listen to someone like Rich Harris and be like "Oh, look, the Svelte project, they went to JSDoc, and they've been successful with that." If you're developing a library, that's probably true. But if you listen to a TypeScript expert like Matt Pocock, they'll say that you're gonna continue to have large performance issues in bigger codebases as you grow over time, unless you actually build your declaration files. And that's the only way to be able to get into a more performant codebase. So at some point, if you want performance, you're gonna have to build.

**Jerod Santo:** Well said. Yielding the time... Nick, you've got 15 seconds that Eric didn't use. Do you want to say TypeScript a few times?

**Nick Nisi:** TypeScript...! \[laughter\] I think that TypeScript in the browser would be cool, except it might slow things down. I remember the ES3 to ES5 era, and that was a long, dark age. Do we want that with TypeScript once it has to go through standards to get any new features? That'd be terrible. \[Wut?\]

**Jerod Santo:** Alright, good point. Kball, a minute.

**Kevin Ball:** I'm gonna jump into some of what Eric was saying about as you get to these larger, complex situations... And I think that actually speaks to another reason why build steps are bad. They push you in the direction of additional complexity. Languages like TypeScript, massive libraries that we can just count on our build step to worry about how is it going to truncate all of these different things... We don't live in the zero interest rate world anymore. We can't afford to be building gigabytes and gigabytes of JavaScript. We should keep things simple, and avoiding a build step leads you towards that simple approach. Less and less JavaScript is the answer, not more and more.

**Jerod Santo:** 30 seconds, Amy, if you want to use them...

**Amy Dutton:** I totally agree with Kball. I'm going to ask that he be on my team every single time. \[laughter\] But I think he's right - just because you have the complexity and the build steps now doesn't mean that we should always have to have them. I'm just going to underline that point again.

**Jerod Santo:** Well said. Okay, this ends round two. I've been keeping score... And so far, Nick has negative three, and everybody else has four. So at that point, it's now eight to one, Team Kball and Amy, because Eric has scored four points, but Nick has subtracted three off of them. It's because he said TypeScript three times, and so that's three negative points. And so we're at eight to one, and these points are 100% real... And we'll now go to our final round, in which you pick amongst yourselves one person to make your final case. As an innocent bystander, I will just say nobody has keyed in on the word "should". Maybe that could be a fertile ground for argumentation.

We will start with Eric and Nick. Who's going to make your guys's final argument? You've got one minute. Who wants to be the representative on team Yep?

**Nick Nisi:** \[15:58\] Eric, I think you should do it. I'm coming in too hot, and I'm just shaking here thinking about my build step...

**Amy Dutton:** \[laughs\] Thinking about TypeScript.

**Jerod Santo:** And you're also \[unintelligible 00:16:04.28\] from your team so far. He has outscored you by quite a few, so I think that's a good call. Alright, Eric, any final arguments before we discuss freely what we really think?

**Eric Clemmons:** Yeah, I think we're actually all on Team Build step. I think it's just who performs the Build step. And so I totally agree that we should be authoring this stuff in a way that's like simple, that's low code, where you don't have to think about the complexity... And Amy even mentioned moving this over to the browsers. That's what happens today with language features. So I think we're all on board, like that natural evolution.

So to Nick's point, it sounds like more of it's a DX issue, and like a batteries-included issue. And as a guy who kind of spun up the JavaScript fatigue fiasco back in like 2015 or 2017, I wholeheartedly recommend that the community and the ecosystem needs to get more mature here with a better out of the box experience. Luckily, we're moving that way. Vitest is getting close to zeroconfig or no config. Matt Pocock even has like a TSconfig library that just came out last week, so you can have like a one-line TypeScript configuration... So we're already pushing all that complexity left. And eventually, it's going to get towards browsers, it's going to get towards your production build pipeline... Even whenever you publish packages, you can author in TypeScript and JSR, I believe, this new package registry will take care of the compilation and publishing for you. So I think we're actually \[Wut?\] all team build step.

**Jerod Santo:** Well said. Good choice, Nick, to let Eric take it. Amy and Kball - who wants to represent final arguments for your team?

**Amy Dutton:** Kball, you've got this.

**Kevin Ball:** Amy, I saw you reacting, so I was gonna point to you.

**Amy Dutton:** \[laughs\] Oh...

**Kevin Ball:** Up to you.

**Amy Dutton:** I can do it. I'll do it. I got it. I got it.

**Jerod Santo:** She's got it, she's got it! Talked her into it. Here we go.

**Amy Dutton:** Okay, we are all Team Build step in the sense of I'm not going to write zeros and ones binary. There will always be some type of Build step in that sense... But I shouldn't have to worry about minifying or compressing my code. The browser should be able to handle that stuff. So I shouldn't have to have a build step to compile all that stuff, to put it in the best, most performant way. I should be able to do the TypeScript stuff. We shouldn't make excuses for the tooling, or for the browsers, or things like that. We should continue to push those forward. And I would argue just because we do that now doesn't mean that that's the best thing, or the way that it should be in the future.

**Jerod Santo:** Very well said.

**Amy Dutton:** I still have time... \[laughs\]

**Jerod Santo:** You only had three seconds. I was just waiting for it to run out, to give you the wut.

**Amy Dutton:** Oh, good.

**Jerod Santo:** And you finished well. Alright, let's tally the points... I'm looking at these -- oh, wait a second. There comes one more argument that wasn't made... it comes from your moderator, and it goes like this. Here's cool things that don't need a build step: HTML. HTML doesn't need a build step. CSS. CSS doesn't need a build step. Plain text. One of the coolest things in the world. Plain text doesn't need a build step. People. People aren't built. They're born. Fully formed. And people are so cool. Love. Have you ever heard of love at first sight? There's no build step there. It's just a feeling. Therefore, I win. \[applause\]

**Amy Dutton:** You forgot PHP.

**Kevin Ball:** You need a mic drop audio...

**Jerod Santo:** Ohhh, PHP...! No, no, Amy, I said cool things that don't need a build step. \[laughter\]

**Eric Clemmons:** You don't have a Lambo...

**Jerod Santo:** Thanks for the setup, though. That was great.

**Break:** \[19:36\]

**Jerod Santo:** A solid debate, y'all. I know we assigned sides... I'm curious why there was not more emphasis on the "should". Because whether we need one or not, the real debate is "Should we need one?" And I think it's a lot harder to argue that we should need one. It's easy, I think, to argue that we do need one. But I think should is a lot harder thing. So I think Nick and Eric had a harder side to debate if you had drilled down on the should, guys. Kball, you ignored it completely. As a seasoned debater, I wonder what's with that strategy.

**Kevin Ball:** So I actually -- part of it is because I think that building is actually useful. When we moved from assembly language to compiled languages, that was a step in the right direction. It allowed us to move up several levels of abstraction and forget about all sorts of different types of optimization pieces that we used to have to worry about. Do I think JavaScript is the right target for our build step? I'm not actually sure. I think there's all sorts of other different things that we could talk about in terms of WebAssembly, other different things... But having a build step with regards to JavaScript, as advanced as it is in some ways, it's also remarkably primitive right now. We don't think about more advanced transformations. We historically haven't thought about the levels of abstraction that starts to unlock. Now, that is changing with some of the more advanced JavaScript frameworks. So you see an Angular or a Qwik or these other frameworks that are starting to use that compilation step as a way to unlock new types of interaction paradigms, and performance unlocks and things like that automatically for people. And so I actually think we are starting to finally get to the place where we're using a build step in JavaScript land to do something useful, and not just to work around problems in the ecosystem... But having that perspective in the back of my head made it hard for me to come in from a should perspective, and so I just stood with the where are we at perspective and went that way.

**Jerod Santo:** Fair. I think Eric and Nick, it was smart for you guys to ignore the should, because I think it's harder to state your case on the should than the "Do we?" Because I think nine times out of ten in 2024 you still need to build step. I think there are cases where you can write vanilla HTML, vanilla CSS, vanilla JavaScript, ES import it as individual files into a webpage, and serve that web page. I think that works once out of ten, depending on the use case. But I think "Do we still need one today?" 90% of the time yes. So I think it was smart for you all to ignore the should and talk about where we're at. What are your actual thoughts, Eric? Do you think we should need a build step, or do you think it's just a sad fact of reality, of history?

**Eric Clemmons:** Yeah, I'm trying to grapple with that one, especially recently... Because I've written libraries without a build step, and like Rich Harris, it's like "Oh, it's great being able to just copy-paste code." If I Command+Click in VS Code, I go straight to the source definition... If I want to patch a third party dependency... There's no obfuscation. It's so readily accessible. And there's some caveats, I'm sure, with it, but it was nice to be able to prove that's possible, but it definitely was like the untrodden path.

\[25:53\] And so whenever I think about like a build stuff outside of like do versus should, I think about "Well, what should a build step be doing that I don't really want to do?" And I was thinking about React compiler recently, where you don't change the way you author your code, but the compiler is making your code more performant, just because you're adhering to the paradigms and patterns within like React. And I think that's probably the more compelling case for should, is whenever you buy into patterns, or the ecosystem, or language features or whatever, you should have the computer making your code better, more correct, more performant, for free. But whether or not that's a detail that you have to pay attention to is the part where I'm hung up on. I'm very much wanting everything to go to the left of like "I shouldn't have to think about it", and this should just become table stakes for "I'm just going to write my stuff, focus on the differentiating logic, and the should is going to be outside of my responsibility." So it's tough...

**Jerod Santo:** Yeah, I mean, I think that is a really good point. I think that performance optimizations are at odds with clarity and readability. They always have been. And oftentimes, you'll find the codebase where a certain code path needs to be highly optimized to run at speed, or at low resource... And you'll find comments in that section like "Here be the dragons", because somebody has personally by hand done some fancy memory allocation stuff, or whatever it happens to be in order to make that particular bit of code more performant. And therefore, it's hard to read, because you're like "What are they doing here?" It's some fancy footwork.

And ideally, you could have both things. You could have the clear, idiomatic code that is linting and everything else is great, and your TypeScript compiler is nowhere to be found, because you don't need one, and everything's hunky-dory... And then also get the performance. And really -- I mean, that's kind of what React Compiler's premise is, right? Like, "Don't rewrite your code, write it the way you'd normally write it, and don't worry about hyper-optimizing in the small. We will do that work for you." And I think that is win.win. Nick, do you have anything else to add besides the TypeScript stuff? I mean, you kind of \[unintelligible 00:28:05.27\] over there...

**Nick Nisi:** Oh, no, not at all. I mean, that's just the perfect example, I think... There's a lot of innovation that happened because there was this build step. And it wasn't even really like introducing a build step. Before that there was things like Closure Compiler, and we were really relying on that for doing things like -- like doing a lot of optimization to make the web faster, automatically. Things like dead code removal, for example, tree shaking, those types of things... But also, there's a lot of innovation that comes when you can add a build step. A perfect example would be JSX. Like, that's not actually part of JavaScript, but we all probably use it with some framework or another at this point. And that wouldn't exist without a build step. And they could build that into the browser, but how would they mess it up? I only wonder that because you look at things that we have today, like the DOM API... How easy is that? Or the Web Components spec. How easy are those to build with? They're not, which is why JSX is still like a prevalent thing for things like Solid, and for React, and for other ones. So there's a lot of innovation that comes from that.

But then, as Eric was mentioning, there's a lot of innovation that gets built on top of that to reduce the footprint that the build step takes in like a developer's mind, or in the process, the flow of an everyday developer. And I'm thinking of things like the Svelte compiler. You can write this regular code, and then the compiler figures out what needs to be reactive. And now they have like the runes thing, with signals and all of that... But we're moving more towards these primitives that make it easier to remove some of that compiler magic and make it easier... But then we have things like Tailwind. Tailwind has a build step, because it takes the classes that you actually use and builds them down. And what's the big thing in Tailwind 4? It's basically the removal of the config file for their build step, in a big way, and kind of moving it back into CSS... So it's just DX improvements on top of the existing build step, but the build step's not going away.

**Kevin Ball:** \[30:11\] Yeah. I mean, I feel like those performance pieces where it's like "Build this down, compile it", those are the least interesting ones. The ones that you highlight -- like JSX, that's creating a new DSL for writing HTML. That's a new abstraction, it's a new way to think about things that lets you operate at a higher level of abstraction and be more productive - that's where a build step gets really interesting. And it allows you to experiment with that in userspace, as you highlight, so you don't have to do that innovation at the level of standards and browser.

So yeah, I think there's these two pieces here, but the innovation side is what's really interesting. And as build steps are becoming so prevalent, because TypeScript is, which - it is a forcing function; I think it unlocks things like that. And I don't know that we've talked about this on the show, but languages like Elm, or other stuff, where it's like "Let's just explore a fundamentally different way of writing our code, thinking about our code, and the build step lets us do that and compile it down to something that will run today."

**Amy Dutton:** I genuinely do think we shouldn't need one, but I think the performance argument is really interesting... Because like you said, it is boring. I'm not gonna write my JavaScript or my CSS for that matter with Class A, Class B, Class C. That's unreadable. But when I say "Oh, we can push stuff to the browser. Bandwidth is great", I'm coming at that from a place of privilege. And when you start thinking about things that need access... Now, there are places where they don't have that same privilege. A compiler that will minify all that stuff for you really does make a huge difference. Or when you're talking about SPA applications, and the fact that you can bundle pieces of JavaScript to send to the browser as you need it - like, that's another huge performance gain. I don't want to send a giant SPA to the browser to download. I mean, everybody hates that giant wheel of like loading...

**Jerod Santo:** Right. Yeah, I agree. And I think HTTP/2 is supposed to be our savior on a lot of this stuff, because it was designed - at least the tagline, or some of the sales pitch was like "It's just as fast with H2 to send 15 small files as it is to send one large file", which is what a lot of JavaScript bundling was about... Like, "Let's just take all of our files into a single file", because with H1 that multiplexing is not -- in H1.1 there's like the feature... But anyways, there's a connection each time. I don't know the details anymore. But it was just much faster to send one large file than 15 small files. And it's supposed to be with H2 that that was inverted, and it's no longer a huge optimization to do that. However, it just seems like in reality that has not played out to be as much of a win as many of us were hoping for... And so yeah, I agree that putting everything as small and as packaged as possible, especially on resource-constrained devices and resource-constrained areas is a huge win.

Kball's point, that I think might have been read out of the bullet points about cache expiry, is a real one though. So one big bundle, whenever you change something you expire the entire cache, versus expiring smaller caches is a loss. But I think it's a net win still, from what I see.

**Kevin Ball:** I did read that straight out of your points. That came from you, Jerod...!

**Jerod Santo:** Happy to oblige. I thought it sounded familiar. That's why I won, Kball. That's why I won. Nobody has actually addressed the root argument that love doesn't need to be built. Why should our websites need to be built?

**Amy Dutton:** It just needs to be maintained.

**Jerod Santo:** \[laughter\] That's true. Well said, well said.

**Amy Dutton:** Well played.

**Kevin Ball:** I was gonna say that it's false. It's a false comparison. Maybe not every love is built. Some may arrive at first sight. But many loves are built over time.

**Jerod Santo:** That sounds a lot like websites, too. Well said.

**Eric Clemmons:** \[33:56\] I was curious, is this a problem, like with the build step, to where it's becoming a smaller footprint? Like, is this a SAP era kind of issue of, like "Too much JavaScript", and we're seeing -- I was looking at HTMX. Not just HTMX's library, but how do they maintain it. It's like a single deliverable file that's ES11-compatible. So it's authored without a build step in an ES11-compatible way. So no ES6 features until I guess the next release, where they become ES6-compatible. But I think that's kind of like fascinating that we're pushing less of the client side interaction into server-side behaviors, and having islands in Astro, or React Server Components... So maybe some of the stuff of like the promise of HTTP/2 is less impactful, because we're just trying to not send as much JavaScript anyway, and we're trying to go to zero JavaScript.

**Jerod Santo:** I think the pendulum has definitely swung that way, and I'm here for it. I think that's great. There's a whole lot -- there's 10 years of SPAs that are just massive, that are sitting out there in production apps that are 3-megabyte bundles, and people are downloading all the time. So while we are seeing that as a burgeoning trend, and one that I hope continues, I think that there's a whole lot of web apps that are just massive bundles of JavaScript still. And I think that process is going to be one of tooling, I think, and trending, versus switching -- I don't know, I just see a lot of legacy out there that's just not going to change. I mean, jQuery is still in 80% of websites. Is it 80? That's probably two years old, but that was about the number. And so how long will large single-page applications, that have been written years ago -- it's just still what they are. It's a hard problem too, to go ahead and either rewrite, or -- actually, rewrite's probably easier than a transition, in many cases. And you know how difficult big rewrites are...

**Eric Clemmons:** Yeah, I have a 13-megabyte single-page app at work that I'm trying to figure out "What is the future for this thing?"

**Jerod Santo:** Well, what have you figured out so far?

**Eric Clemmons:** It's kind of like what horse am I going to bet on to bring me into the future... And so the recent announcement of React Router or Remix becoming React Router is very pertinent. So I was able to go from React Router 3 to React Router 5. And so the promise, or at least the hope that I have, is that anchoring to something like React Router will let us push the complexity to the left, eventually to server-side render, and go from like a client loader to a server-side data loader. Because really, the benefit that we want is to just have reloadable pages with smaller JS bundles. And so that's like the really compelling \[unintelligible 00:36:39.09\] I just wish there was one way to where I could take a legacy spa, and say just analyze my routes, and turn on basically into like a file system individual bundled route. That's really all I really want. And so if the only thing I have to do is just update React Router to make that work, that's isolated to like one file.

**Jerod Santo:** Yeah, that's a huge win if that could actually work.

**Eric Clemmons:** Fingers crossed.

**Kevin Ball:** Can you quickly flesh out all the things that go through your head when you say "pushing to the left"? Because you've used that phrase a number of times, and I'm not sure that's something that all of our listeners are going to be familiar with.

**Eric Clemmons:** Yeah, I'm likely in a bubble, too... So I think of like a feature kind of originating somewhere like on the server, where it's deployed it, and then furthest to the right is where the user is actually interacting with it. So often whenever you see a diagram of like "Here's a network request", and it kind of goes through back and forth, and the arrows point left and right - it's kind of like that. So if there's local code, to the left of the local code would be your CI/CD, and to the left of that would be like production, and that sort of thing.

So whenever I say something like "push into the left", what I really mean is like pushing it down away from users, into another layer...

**Jerod Santo:** Right, earlier.

**Eric Clemmons:** Yeah. So from the client's responsibility down to the server responsibility.

**Jerod Santo:** \[37:53\] Right. There's this term "shift left" which exists in a lot of, I would say, enterprise development contexts, especially around information security and best practices; they will say "You need to shift it left", meaning make it earlier in the software development lifecycle... Versus a thing that you put in at the end. Because - well, with security, you can't actually bolt it on at the end; if you're trying that, you are doomed to fail.

And so I think pushing left, shifting left - these are terms that I've also had to wrestle with... But now I know what they mean. Good question, Kball, to clarify, to get all of us on the same page.

Amy, you wanted to talk about shifting left PHP somewhere...

**Amy Dutton:** \[laughs\]

**Jerod Santo:** I know I pick on PHP; it's just because it's fun. I've got no problem with the language. In fact, I owe a lot of my career to PHP. That being said, you mentioned you want to make the case why PHP is better than Ruby and Java... I don't know if that was just a joke, or if you actually have brought argumentation... But I thought, "Hey, we've explored the build step, I think, probably to its logical conclusion... This might be an interesting conversation." Do you do you like PHP better than Ruby and Java, Amy?

**Amy Dutton:** I do, just because I know it.

**Jerod Santo:** Okay.

**Amy Dutton:** So I did say it as a joke, but knowing that it's going to get some people excited, and ruffle a few feathers... But yeah, I mostly like PHP, just because that's what I learned early on. I was building WordPress sites, and the fact that I didn't have to worry about a build stuff, I'd just upload a PHP file to a Linux server, and it works. That feels magical as a beginner, so that's kind of where that beginner argument comes from. But I've recently been digging into Laravel, and really been watching the Laravel verse full-stack JavaScript debate online, which has been really interesting... So I think it does enter this conversation when you start talking about a build process, and the fact that you can just put a file on a server and it runs.

**Jerod Santo:** Yeah. That is the magic of PHP. I used to even take my index.html and I remember just changing the file extension, and then it would execute dynamic code, and it was just so cool. It was so easy. And I built a lot of stuff that way.

**Amy Dutton:** Yup. Or you just have your includes.

**Jerod Santo:** Yeah, exactly. Just start writing some PHP code.

**Nick Nisi:** I think I've mentioned it on this show before, but my first attempt at a blog was a single php file, and whenever I added a new blog post, the php file just appended to itself with that post.

**Jerod Santo:** Warning. Warning. Do not try this at home. \[laughter\] I always have to disclaim that whenever Nick brings it up. This was an ingeniously naive thing to do, Nick. What could possibly go wrong...? \[laughter\]

**Amy Dutton:** Did you have a guestbook and a counter on your site as well?

**Nick Nisi:** I did... It was of that era.

**Amy Dutton:** \[laughs\]

**Jerod Santo:** Oh, visit counters are cool. I'd definitely want one of those.

**Kevin Ball:** I feel like that is one of those examples where you learn by doing, and you do it, and then you learn to never do it again.

**Jerod Santo:** Did it ever bite you, Nick?

**Nick Nisi:** Oh, probably. That doesn't exist anywhere anymore, so.... There's a reason.

**Jerod Santo:** The only thing worse you could do is actually put a notice in your comment form, like "By the way, when you write this comment, it's going to execute server-side on my VPS." Just let them know. I think you're gonna have to even do a JavaScript alert and see if it actually triggers.

**Nick Nisi:** I'm pretty sure it wasn't password protected in any way, either... So you know. I was doing everything right.

**Jerod Santo:** Was this a school project, or...?

**Nick Nisi:** No, I was in school, but it was my personal blog at the time.

**Jerod Santo:** Right.

**Amy Dutton:** When I was in school, we only got one meg on the school server.

**Jerod Santo:** Oh, you'd fill that up pretty quick with a comment form. \[laughs\]

**Eric Clemmons:** Or one image.

**Jerod Santo:** Yeah, that's true. A one-meg image, yeah. You had to use one of those small language models on that one. Don't bring it up, Jerod; don't bring it up. We're not going to talk about language models in this episode, I promised myself.

**Kevin Ball:** Those could become your new build step, right? You write some sort of text-based thing, and then you run it through a language model to generate your Typescript, and then you run the TypeScript through a build process...

**Eric Clemmons:** I would like to fund your startup... \[laughter\]

**Amy Dutton:** \[42:01\] He said AI. That's the key, right?

**Jerod Santo:** I think we should go back to this PHP blog idea that Nick made. Let's fund that startup, you know?

**Kevin Ball:** I bet you an LLM will do a better job on that blog.

**Nick Nisi:** That's not hard... \[laughter\]

**Jerod Santo:** A lot of my first server-side programming was hacking my WordPress blog. Like, just -- actually, the word "pimping" is probably better than hacking. Back when I got started, everybody's sidebar had cool stuff in it. Like your latest scrobbles... I know you guys were Last.fm people, but you'd like -- and it was so cool to listen to a song in your iTunes, and then go to your own website and be like "Jerod just listened to 'Hit Me Baby One More Time' by Britney Spears", for instance.

**Nick Nisi:** Last week.

**Jerod Santo:** What else did I throw in there? Images off Flickr... Just like pulling in all the things... Like, "Here's all my socials, and I'm gonna pull them into my sidebar." And that was surprisingly productive learning.

**Amy Dutton:** Let's bring it back.

**Jerod Santo:** Yeah, right?

**Amy Dutton:** Like "Currently reading."

**Jerod Santo:** We should. Where's the Flickr nowadays? There's no Flickr.

**Amy Dutton:** I'd say RIP, but I do think they're still around...

**Jerod Santo:** Everyone's just posting on Instagram, I guess. Alright, but not really want to make a case why PHP is better than Ruby or Java. Fair enough. It's better because you can just switch your HTML file to PHP, and just execute... And nobody has been able to match that developer experience yet, really.

**Amy Dutton:** Well, I will say, to Nick's point, you can make a TypeScript file by just changing the extension from JS to TS.

**Jerod Santo:** True, but it won't turn a static file to a dynamic one, right? It's just changing a perfectly good JavaScript file into -- well, you know...

**Nick Nisi:** A better one.

**Jerod Santo:** Alright. Well, any other topics we want to take up?

**Eric Clemmons:** I pasted this in the chat, but I was curious about it, though... What is the gap that still forces us to build, that could potentially go away? So TypeScript's a big one, and TypeScript it moves fast, and apparently even minor changes can have breaking changes... But there is some sort of annotation comments coming to JavaScript, I think... I don't know where it is in terms of like staging, but some sort of typing or type checking proposal...

**Nick Nisi:** Stage one.

**Eric Clemmons:** Yeah. And so you have something like that... And JSX is the only other thing that kind of stands out to me, of like if both of these frontiers had a solution for it, that would be vanilla JS... Would that become like the final unburdening to let us actually have a real conversation of like "Okay, do we need to have a build step anymore?"

**Jerod Santo:** Yeah, what else would be missing? I think you might still just have the performance argumentation, and that's probably about it, right? Kball, what else are we missing?

**Kevin Ball:** So I think -- once again, I'm going to bring this back to aspirations, rather than current state... Because I do think, as we sort of hashed out in the debate, with the current state we're actually shockingly close. And to your point, if you get JSX in there - maybe a little bit of an alternate take on TypeScript that can work - you're fine. I believe that that is underselling what we can do with a compilation step. And I would look towards things like what Qwik is doing, things like what Svelte is doing, things like what Angular is starting to do, where they are extending the set of primitives that are available, and saying "Hey, if you build something like this, in this form--" It's like an extended version of what React is doing, where we take this to have special meaning, that the compiler will then do transformations on, and enable new capabilities.

So I actually think, rather than asking "What would it take to remove the build step?", we should be asking "What new performance and productivity gains could we unlock if we think more about what we can do in a build step?" If we take more inspiration from compiled languages, if we look at the different types of things that are hard to do in the web ecosystem today, but by perhaps constraining ourselves or doing something we could actually do automatically using a compiler?

**Jerod Santo:** \[46:12\] That was very JFK. I like that. "Ask not what your build step can do for you, but what you can do for your build step."

**Kevin Ball:** I mean, I just fundamentally think we should be raising our aspirations here. I think the web is incredibly powerful, but there's so much more we could be doing with it... And we do see these sort of unlocks of like fast by default, or like -- I mean, you look at the islands stuff... We're explicitly configuring that. Could that be automatically detected in the way that a Qwik does, where it only loads it when you need to load it? All those different areas. And I think the answer is probably yes, but not if our goal is to \[unintelligible 00:46:49.21\] or build this ship. I think it's probably more embracing the things where you say "Can we do a full analysis of this thing at build time, when it's cheap, and we're doing it once, and optimize it, and transform it, so that then when people are running this thing it is magical?"

**Nick Nisi:** I don't know... I think we've reached the pinnacle. I can write SQL statements in my React components now.

**Jerod Santo:** \[laughs\] No comment from Kball. He didn't even look at you.

**Eric Clemmons:** Nothing? Well, okay. It just got quiet...

**Jerod Santo:** He's like "I'm not even gonna acknowledge that." Well, I guess the question -- I mean, Kball, I guess what you're saying is that a build process is... I don't wanna use the word "a shim", but it is a way of pushing the platform forward. The platform is always going to trail the builders, and the builders will be the ones who innovate, and then that goes into the platform... Because I think what Eric's question is is "What would need to be in the platform for it to be sufficiently optimal to deliver high-quality web apps, with all the best things, without additional tooling?"

**Kevin Ball:** No, I'm gonna bring it back to this concept of shifting left, and thinking about when you should do what. So we think about this in terms of when we're developing things, pushing things out to the edge, pushing them close to the user, but I think there's also a perspective of like a build step is conceptually a -- it's a precompilation; it's an opportunity for us to do a whole bunch of assessment, analysis and work before this thing ever gets close to a user. And there's a set of things that we can do at that time that we're already doing, but there's also probably a whole class of things that we have not yet explored, where we could be optimizing this, where we could be enabling ourselves to write software in a different, more expressive way, that then is handled, before we have to worry about what is actually shipping out and getting touched by a user.

Actually, using that example of edge-based services versus not - like, if you have a multi-tiered operational infrastructure, let's say you have something that has a set of edge functions, but also has some things that have to be centralized and doing things, one could imagine having a language that gives you enough expressiveness in the language, that a build step can automatically assess, "Okay, here's the sets of things that can be split off and sent to functions that run on the edge. Here's the set of things that need to run in my central server. Here's the set of things that I can run at build time, because they're going to be the same every single time, and just push those as static." There's no reason we can't do that. In fact, I think there are some frameworks that -- like, doesn't Next do some of this, where if you build it, it can like push out some of its API endpoints to be edge functions, and things like that? That is the type of thing that you can do at compile time, that will save you loads of things at runtime.

And if we think about a build step not as a burden that we're trying to get rid of, but rather an opportunity to let us think about things in a different way, it can help us write simpler applications, that still take advantage of our sort of multiple layers of operational infrastructure.

**Jerod Santo:** \[49:57\] I just don't see how you can push further left than the platform. Like, isn't that the furthest thing left? And I don't just mean the browser. I mean, we also have the transport layer. And then we have the application layer, we have layers below where we are writing code, which would be further left, in my opinion, and more optimal than a compilation step. Wouldn't they?

**Kevin Ball:** Not necessarily, because they don't necessarily know your project model. So it doesn't make sense to include my application logic in the platform. But it might make sense to analyze my application logic at build time and say "Oh, here's a set of things that we can precompute for you. Here's a set of things that we know you're not going to need on first page load, so we'll split those out into a bundle that loads lazily", right? Like, there's all these different pieces of my application logic that don't have to actually arrive in one big blob of JavaScript that gets loaded by the user. Or many small bundles of JavaScript that get loaded by the user.

**Jerod Santo:** Yeah. I just -- I'm thinking, do you include your web server as your application logic? Because I just feel like there's a lot of things you can do dynamically with your web server, that you can give those contextual hints to, whether it's headers, or whatever it is, that don't require a build step. Like, they're at request time. So that was a form of a question. Maybe it didn't sound like it. Are you excluding the web server from the application layer in this context? Or do you look at that as part of your application? Maybe that's a question for everybody. Like, when you write an app, do you think about the web server like a server-side rendered -- maybe it has some frontend stuff as well? Do you all think about the web server as part of your application? Because here's a context in which I've expanded my definition of my application, because we have a CDN in front of our stuff; it's Fastly right now, and it has a bunch of rules and stuff. And I was complaining that I'm putting too much rules over here in the Fastly dynamic routes and stuff, and I want it in my application. And then somebody said "No, that is your application." And I was like "Yeah, I guess you're kind of right." And so now all of a sudden my third-party CDN, which is effectively Varnish in the cloud, it actually does have a lot of logic that is contextual to what we're up to there... And so I shouldn't be thinking "Get it out of there", unless I don't want it there... I should be thinking like "That also is part of my application." So a lot of us, I think, either are thinking of frontend or are thinking of a full stack, and you're still just talking about dynamic application serving, and not even broader than that, which is like your web server is a very powerful tool.

**Kevin Ball:** You're getting all the way down into infrastructure as code, right? So where this is really a question of is how are you thinking about managing and deploying and versioning these things? At the scale that you're talking about right now you have - I think in that world it would be called a pet as your server. You have one that you have carefully configured and set up. It is a part of your application stack, and it's there, and I think as you scale up, you need to transition from a model of these things as pets, to these things as cattle, where you can spin them up and spin them down... At which point you need to much more carefully be able to manage their configurations in a way that is versioned and controlled. So I think it's less -- like, yeah, that is all part of your boundary that you can play with, and how you think about it depends on your needs, and like what level of kind of scaling and version control and team management you need to enable.

**Jerod Santo:** I don't understand why you think it's a pet. Where did you get that from?

**Kevin Ball:** Because you have a single place that you are configured, that you have hand-tuned.

**Jerod Santo:** I mean, that is my code though, there. That's still infrastructure as code. Like, there's not a single machine.

**Kevin Ball:** Yeah, I guess it's --

**Jerod Santo:** It's like a mesh network of things that go all around the world, right?

**Kevin Ball:** Okay. That's fair. So yeah, maybe it's not a pet.

**Jerod Santo:** So when you go to build time, are you just talking about my Node app, and my frontend code? Or are you talking about the holistic system? That's where we're detaching.

**Kevin Ball:** \[54:04\] Good question. Which are you talking about? I think you could make an argument either way.

**Jerod Santo:** Well, I was wondering which one you were talking about. I don't have an argument over here... I'm just trying to follow. I guess your argument is that build steps should be a part of that no matter what your setup is, because you can do fancy things at build time.

**Eric Clemmons:** Yeah, it's interesting... Especially here with the pet/cattle analogy... In my mind it's like "What do I want to concern myself with?" What is the thing that I feel like is a responsibility for delivering value for the business? And I want to make sure that's as high as possible, with as low noise and complexity. Infrastructure as code I rarely like to deal with, unless that is going to have some sort of differentiating value. And I think that's like the benefit of platforms.

Vercel, where the abstraction is something like Next or Svelte, and how it gets deployed - you might just write a three-line function that returns Hello World underneath like pages/ap/whatever. That's all you're concerned with. That's what your application is. That's what your business needs. How that gets deployed is not really your concern, and becomes the responsibility of like the framework's output. And I think that's the thing that's powerful, is finding either Language abstractions, or project filesystem conventions with like routing, and other things like that to give you the right set of primitives, and... I'm trying not to say "move it to the left", but now that becomes the responsibility of your deployment platform on "How does this actually go out in a performant way?"

So whenever a hosting provider puts a DDoS protection in front of my site for free, that's part of the reason why I want to leverage that abstraction, versus writing my own infrastructure as code, and having to configure my own AWS resources, and ARNs, and all that sort of stuff. So that's the way I kind of see it, is that there's a point where you kind of have to draw a line in the sand, and say "What do I want to be responsible for?" And over time, we're continually trying to make that as small as possible, and have terse, clear, code-specific to the problem I'm actually solving for, and not trying to solve for "What does it take to get this thing out in the latest, greatest, safe, performant way?"

**Jerod Santo:** Well said.

**Kevin Ball:** Totally agree with that.

**Jerod Santo:** Amy or Nick, do either one of you want to chime in on this?

**Amy Dutton:** I don't think I have anything to add... I rely so much on the tooling stuff of that, and... Nick, I know you said you love your tools. I love my tools as well. And some of that stuff to me is just table stakes when I look at hosting platforms and things like that, to handle that stuff for me. And talk about tooling and bundling - let them do all the work. I don't wanna have to worry about it, I don't want to have to think about caching... The only time I care about caching is when I try and update something and it's not reflected on the site; in that case, give me a good way to bust it. But other than that, I would rather solve different problems.

**Jerod Santo:** Fair. Nick, let me ask you this question. So we are web developers... How much do you think about consider and use the HTTP protocol in your web development? Are you leveraging HTTP? Do you use the compression, the cookies? I mean, you obviously use cookies for that kind of stuff. But I mean, there's all kinds of things you can do with caching... And that's an application layer protocol, but it's one that it seems like a lot of us are largely ignoring. And I'm wondering -- I'm not necessarily passing judgment for ignoring that. I'm just wondering how much are we thinking about HTTP as web developers? And you're more of a full-time web developer than I am even these days... So are you actively thinking about HTTP in your day to day work?

**Nick Nisi:** Nope. \[laughs\]

**Jerod Santo:** Okay.

**Nick Nisi:** Yeah, no, I don't think about it too much.

**Jerod Santo:** Fair answer... Amy? Same?

**Amy Dutton:** \[57:52\] Yeah. Well, I don't think about it, but I am gonna throw a thought out there... I wonder if some of this just comes down to the fact that with the JavaScript world we've become more serverless... And so I do rely on tools like Vercel or Netlify just to "Hey, here's my GitHub, and go ahead and take my site, put it up there, and then I don't have to worry about it." And so it'll be interesting as this pendulum swings the other way, and then we have React Server Components, we're having to configure servers, we're having to think more about databases and how we interact with those different layers, that all of a sudden now caching and HTTP/2 - all these things, they start to enter the conversation more because we don't have necessarily the tooling that handles it, or doesn't handle it yet.

**Kevin Ball:** I think a lot of this comes back to kind of what Eric was saying, in terms of identifying the business problem we're trying to solve, and doing the minimum possible things -- having the minimum set of things under our control to solve that, and shifting as much of the rest of it as you can into tooling, platform etc. Depending on what you're solving, as you start to expand to bigger and bigger problems, and also depending on the types of scale that you're addressing, those things become things you start to have to worry about. So there's a tremendous range of things that you can throw static HTML and CSS up on a static server, S3 bucket, what have you, and you have solved the problem. And now there's so many problems you don't have to worry about, and that's phenomenal. And then there's a layer you can do things with just a few JavaScript functions that Vercel is going to run for you really nicely. And then there's a set of things that you need a little bit more server-side control and infrastructure to handle with. And it kind of goes on and on until you're at one of these mega corps that are handling all of their own infrastructure, and then you say "Okay, it's the infra team's problem, and I'm still going to worry about my little bundle."

But I do think there is one tricky thing here though, which is thinking about how you move up and down those levels of complexity. And I think we as developers often fall into two different failure modes. One is we have a tool that we love, and we try to use it for everything, even though we probably don't need all of its complexity for things... Like, this is the static websites that were massive Gatsby applications, or other things, where you're like "Now you're putting some text files on an S3 bucket. That's all you should do." And then the flipside of that is holding on too long to the very simplified version, and then jumping through all sorts of hoops to try to accomplish the thing that you need to do, where if you were to expand your view of what is under your control - maybe to Jerod point, think about the routing piece as part of your application. Suddenly, those problems become much easier to solve.

And so I think that would actually be kind of an interesting conversation... I don't know if we have too much time to dive into it now, but how do you recognize when you are at the wrong layer of control, and you need to either simplify the sets of things that you're doing, or expand the boundaries of what you want to take control of?

**Jerod Santo:** Yeah. I love that. We should earmark that for a future conversation. I think that there's a lot to explore here... And it's easy for us to live in our little world that we're currently in... I think Eric mentioned his echo chamber earlier, with the whole shifting thing, which now we brought so many more people and echoed it around for all of us to enjoy shifting things in various directions - left, right, up, down... But it's helpful to think beyond your current scope. I know there's this idea about a local maxima versus breaking out of that. I can't remember the exact way you do it, but you can maximize in your locality, but not realize that there's an entire different way of going about what you're doing, that's above and beyond anything you can maximize here, in your current bubble. For instance, like you said, Kball, I'm shipping a Gatsby site to Vercel. Can you do that? I assume you can do that. And I've got a problem because it takes forever, and also I've got some dynamic stuff now that I need to like do some things... I'm trying to use edge functions, and I don't know whether my serverless stuff is running correctly, and I don't have visibility there... And that feature is coming soon, but I don't have it yet... I'm making all this up, obviously. But then it's like "Wait a second, there's a whole new world out there", where you change the file from an HTML to a PHP file, and now it can do dynamic stuff. And it's like "Oh! That's actually really powerful."

\[01:02:19.02\] It may not be the best solution, but I think having these conversations and realizing "By the way, HTTP is an incredibly powerful, and really world-building protocol, that we're all using all the time." And as a web developer, I think it does us well to understand it probably a little better than we currently do. And I speak to myself as well, because I know some stuff, and I speak to people who really know HTTP, and I'm like "Oh, wow. There's a lot of things I could do I had no idea about", and then I don't need to offshore that to Netlify, for instance.

So I like that idea, I like this conversation... I feel like we've come to a really good place. I'm excited. Any final words from our guests - Amy, Eric?

**Amy Dutton:** TypeScript... \[laughter\]

**Jerod Santo:** Awww...! She's never coming back. You know, I was about to invite you back, but...

**Kevin Ball:** Do you have a Nick Nisi type scripts audio thing you can just like put there...?

**Jerod Santo:** Yeah... Now, Amy, Nick's gonna have to invite you back, because you've lost your invite from me.

**Amy Dutton:** \[laughs\]

**Jerod Santo:** Eric, how about you? Can you say anything wiser than what we've just heard over there?

**Eric Clemmons:** I really appreciate Kball's framing recently... Drawing that line I think is really interesting, especially with the shift to serverless... One of the things that's been on my mind is "When was the last time I deployed to a VPS? When was the last time I ran my own server, and what is the complexity there?" And that opens up so many doors to running other runtimes too, like PHP, and having it available. And now it's like, I have forgotten that; I may have lost that skill. So it's kind of a shame to be limited now, with like the latest and greatest, and lose all the possibilities that I used to take advantage of. So... Food for thought. Thanks, Kball.

**Jerod Santo:** Well said. Well said. Alright, well, this has been a Yep/Nope debates. If you don't know why we call them Yep/Nope, that's because you'd never use the yepnope.js library, which was an old feature detection library, from our old friend and one-time JS Party panelist Alex Sexton. So that's a shout-out to Alex every time we do this, and we say Yep or Nope.

It seems that the answer after this debate is "It depends", and probably yep wins more than nope... But as always, your mileage may vary. So on behalf of our awesome guests, Eric Clemmons, Amy Dutton, and our awesome panelist Nick Nisi, and Kball was also here... \[laughter\] I'm Jerod, this is JS Party, and we will catch you all on the next one.

**Outro:** \[01:04:48.20\]

**Eric Clemmons:** I don't think Nick should have lost so many points, though... That seemed a little rough.

**Nick Nisi:** Thank you.

**Eric Clemmons:** Coming back from that negative three...

**Jerod Santo:** You were doomed when I assigned him on your team, Eric... I'm sorry, but it was over at that point. I mean, the guy just brings TypeScript to every single party, you know?

**Nick Nisi:** "This is a build step talk..." \[laughter\]

**Eric Clemmons:** You thought you were safe...?

**Jerod Santo:** \[unintelligible 01:06:17.25\]
