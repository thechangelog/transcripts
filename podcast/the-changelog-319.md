**Jerod Santo:** Richard, it's been just past two years since we first had you and Evan on the show to tell us about Elm, and now we're here to catch up, hear what's new, and learn some more... So first of all, welcome back!

**Richard Feldman:** Yeah, great to be back!

**Jerod Santo:** Two years is a long time in internet years. I'm assuming Elm has leaped forward... It's still out there, it's still popular, people still talk about it, I still see people retweeting things that you're saying about Elm. Before we get into the catch-up, why don't you give the elevator pitch - what Elm is, and what you use it for.

**Richard Feldman:** Yeah, sure. Elm is a programming language for building web apps. It compiles to JavaScript. People often consider it an alternative to JavaScript frameworks, because in addition to being a programming language, it also comes with enough tools out the box to build an entire web app... So we don't really have frameworks in Elm. It's sort of like the language provides enough that you don't need a framework.

I work at NoRedInk. We make tools for English teachers, and basically, our entire front-end - or just about; I guess we have some legacy React stuff from back in the day, but pretty much everything is in Elm. It's about 250,000 lines of code. Our first commit was in 2015, so it's been somewhere between 3 and 4 years that we've been doing it in production. Basically, everybody who works on the front-end writes Elm full-time; it's been really great.

Some of the stuff that's cool about Elm - 1) it's really, really reliable and easy to maintain. It has a really amazing, friendly, helpful compiler, with really nice error messages that tell you about problems before they happen to end users. As a consequence of that, I used to be able to say that we'd had zero runtime exceptions in the entire time we'd had Elm deployed.

**Jerod Santo:** That's right.

**Richard Feldman:** However...

**Jerod Santo:** Uh-oh...

**Richard Feldman:** Unfortunately, last year it happened...

**Jerod Santo:** Nooooo....

**Richard Feldman:** Yeah... So now I have this graph that I like to show -- because we have a logging system that tells us if anything crashes. So now the chart is like 60,000 JavaScript runtime exceptions, like, from our JS code, and then... Like, it's not zero, but it's zero pixels on the graph...

**Jerod Santo:** \[04:15\] The blip.

**Richard Feldman:** Right. So it is possible. It can technically happen.

**Jerod Santo:** What happened?

**Richard Feldman:** Well, it's actually a funny segue into Elm 0.19. It's a thing that is no longer possible in Elm 0.19, the root cause there...

**Jerod Santo:** Oh, okay...

**Richard Feldman:** Basically, there was a function called debug.crash, and it really did what it says on the tin.

**Jerod Santo:** It sounds like you shouldn't call that in production... \[laughs\]

**Richard Feldman:** You know, it's funny you should mention that, because yeah, you shouldn't call that in production. But we did, and sure enough, it got run and then it crashed. So in Elm 0.19 when you run an optimize build, there's a new compiler flag called --optimize, which I'm sure we will get into, because that's one of the banner features of the release...

**Jerod Santo:** Yeah.

**Richard Feldman:** When you run that, one of the things that it does is it says "Hey, you're still using some debug functions. Take those out before building for production." So that would have prevented us from having any runtime exceptions, but unfortunately that option didn't exist back then, so... We blemished our previously unblemished record, but...

**Jerod Santo:** Yeah, it happens...

**Richard Feldman:** It's funny, because we found out about it and I tweeted about it... That got way more retweets and likes than my previous comments, that "Hey, it's still been this many months and this many years without any runtime exceptions...", and I have this theory that maybe it's more credible if you say it's been like, you know, a very small number, instead of zero... \[laughs\]

**Jerod Santo:** That's right.

**Richard Feldman:** I guess people kind of wonder, "Well, maybe you just don't have your logging set up right." Well, we did. \[laughs\]

**Jerod Santo:** It's like, even Superman has his kryptonite, you know?

**Richard Feldman:** Right.

**Jerod Santo:** Zero is almost unbelievable, because it's statistically -- I mean, you're still at a blip, but it shows that even Elm and NoRedInk are humans, as well...

**Richard Feldman:** Oh, absolutely.

**Jerod Santo:** They're not perfect. \[laughter\]

**Richard Feldman:** Yeah, we very much are not.

**Jerod Santo:** Well, let's talk a little bit about the company. I mention NoRedInk often, because there are a handful of businesses who have done what you all have done in hiring Evan and allowing him to work on Elm, and I'd like to just promote that activity. Another one that comes to mind is Shopify, which hires Sean Griffin to work full-time on Rails, and I think they're hiring other such positions to fill out even more of their infrastructure scheme. DockYard hired Chris McCord to work on Phoenix, and it's like, his job is to work on Phoenix, and that's something that they believe in investing in.

I'm just curious from the business end and from your perspective, what it's been like having Evan working there, the push and the pull... Has he been able to dedicate most of his time on Elm proper, or does he get pulled into the business things? Help us understand how that's going.

**Richard Feldman:** It's in Evan's contract that he only works on Elm. We hired him in January 2016, and he's never done anything directly for the product. The product is basically a web application for teachers to help teach those students English, and more specifically writing. Evan basically is really just 100% open source engineer. He just works on Elm.

My boss - full credit to him, it was his idea to see if we could hire Evan. Basically, what he said to Evan was "Hey, the reason we wanna hire you is that Elm has been really great for us and we don't wanna mess with the formula. We want you to keep doing what you're doing, we just wanna be kind of more plugged into it."

He basically has complete autonomy to take Elm in whatever direction he thinks is best, and we trust his judgment, because that's what has led us to embrace it in the first place. I don't know, I guess we're aware that that's not a common thing for a company our size. For context, I think it's 26 engineers now. This is probably a good time to mention that we're hiring, so if you wanna come work with me and Evan...

**Jerod Santo:** \[08:15\] There you go.

**Richard Feldman:** ...on building stuff for teachers... We're super remote-friendly. I work remotely from Philadelphia, Evan works from Boston... The headquarters are in San Francisco, but we go anywhere from West Coast Pacific to Central European time as far as time zones go. The 26 engineers are pretty widely distributed across that.

The overall company - I think it's 67, something like that... Between 65 and 70 people. For a company our size to hire somebody to 100% work on open source stuff I guess is pretty unusual... But like I said, we really wanted to keep the good thing going, and to not mess with the formula that has brought us so many technical benefits.

**Jerod Santo:** Yeah, Elm has been much praised for its technical benefits. I'm curious about the community. It's been two years since we've talked, and we like to keep our thumb on the pulse of which direction things are moving, and anytime you have a project or a piece of software which has technical prowess, you always wonder "Will it catch on? Will it have a robust community? Will there be people who adopt it?" So I guess we're here two years later and it's still going, but I'm curious from your perspective how much adoption Elm has gained and how much the community has really built out around Evan and around your work?

**Richard Feldman:** Yeah, it's a great question. First of all, I think the biggest change that we've seen in the past year -- so we started doing The State of Elm Survey, and comparing 2017 to 2018, the biggest change that we saw was actually more people using Elm on teams, at work, rather than as individuals, as hobbyists.

In 2017 it was something like 18% of survey respondents said that they were using Elm at work, and 2018 it was like 40%, so more than double... Which was really fantastic, because one of the concerns with a project like Elm is it's like, hey, this is a new programming language. Obviously, that's a bigger barrier to a lot of teams trying to adopt it than it is to say we're a library, or we're a framework.

So there was always that kind of question, where it's like "Hey, even if this is really great, even if it has all these benefits, is that gonna be something that teams are just unwilling to give a real shot to?" And it turns out the answer seems to be actually they are willing to give it a shot, and that's really changing.

So as far as absolute growth numbers, we don't really have a great way to measure that, in part because around the time of GDPR we were like "You know, we could do a bunch of stuff to make the website compliant with cookies and whatnot, or we could just stop tracking visits", and we just decided to stop tracking visits. So we don't really have even like a bellwether of how many people are--

**Jerod Santo:** You could have just blocked all of Europe. We've seen a few companies doing that as well... \[laughs\]

**Richard Feldman:** No, Elm is really big in Europe. The biggest Elm meetup I ever went to was in London, it was like 100 people. And Oslo, Norway, apparently is just like a hotbed of Elm-- there are multiple Elm consulting companies, there's a bunch of companies using Elm to build their products... So I think the idea of just like "Oh, we'll just ignore Europe" would be a complete non-starter for us.

**Jerod Santo:** Yeah. It's interesting you find so much growth of Elm inside of enterprise and inside of the workplace. It seems like small, new, niche languages start off at least - many that I'm thinking of - in the hobbyist realm... People tinkering, trying it out on their own time, and then maybe it starts to get penetration as they sneak it into their organizations often. What do you think is the selling point for Elm that's getting so many businesses to hop on? Is it that example, the one runtime errors -- I was gonna say "the zero runtime errors." \[laughter\] The very few runtime errors? Is that what gets people to really dive in and try it on work time?

**Richard Feldman:** \[12:10\] That's a great question. I wanna go back a step though and just point out that I think -- we've gotten definitely increasing adoption over time, but I can't say Elm's like a runaway smash success. It's not on the level of like a React or an Angular, something like that. I like to say we've graduated from obscure to niche...

**Jerod Santo:** Nice.

**Richard Feldman:** ...where it's something that a good number of people have heard of, but a much smaller number of people have actually tried, and an even smaller number of people are actually using it professionally. That's been a really positive improvement, but I can't say that we're there yet.

Evan gave this talk a couple years ago called "Let's be mainstream." I don't think I can say that Elm is mainstream yet, in terms of adoption. Having said that, Evan also gave a pretty awesome talk about what are Elm's goals, what does success look like, and one of the things he talked about is actually - getting back to your point about community - the conclusion of the talk was basically "Let's try to make a really great community, where everybody wants to help each other build awesome things, and not worry so much about adoption or Hacker News or stars on GitHub, and just kind of let those things fall out of having a really happy, successful, functioning community where people are happy. So that's been kind of the bigger focus.

There are definitely some things we could do that could sacrifice Elm's long-term goals for the sake of driving adoption in the short-term, but we just decided we don't wanna do that. We'd rather just let it grow organically, at whatever pace that is. And so far, we've all been pretty happy with that outcome.

I have to say, it does benefit companies who do adopt Elm for now, because the result of that strategy has been - intentionally or not, which I don't think it has been intentional, since we haven't really talked about it on the core team... But it does mean that there's actually a pretty substantial hiring benefit to companies that adopt it. So we have seen this, and other companies have seen this, that basically there's just more Elm developers out there, people who wanna use Elm at work, than there are companies who have Elm positions, which means that it's actually paradoxically easier to hire high-quality Elm developers right now than it is to hire high-quality JavaScript developers... Because although there are many more JavaScript developers in the world than there are Elm developers, there's an even bigger proportion of JavaScript job openings that they're out there choosing from.

So it's sort of like you get to be a bigger fish in a smaller pond by being one of the few companies that's offering Elm jobs... And that's been one of the biggest benefits to us outside the technical realm, has just been hiring. Honestly, the number one thing that we get on our cover letters for like why the person applied - they all say the word "Elm." It's a selling point for basically everybody who applies for any kind of front-end or full-stack position, to the point where we've actually transitioned...

When I joined the company, which was almost five years ago now, we had a really tough time hiring front-end engineers. We were able to get back-end and some full stack applicants, but front-end - the well was totally dry... Until we started using Elm, and now it's completely reversed, where we now have a much harder time finding back-end people than front-end people, because we just get so many applicants who are interested in using Elm.

We even get some back-end people who are interested in using Elm. They're like "Hey, I'm a back-end engineer, but I'm actually kind of curious about this Elm thing, and that's what got me interested in your job position in the first place. I'd like to do a little bit of Elm stuff, even if I'm mainly on the back-end." It's pretty cool.

**Jerod Santo:** That's interesting. It makes me think of -- kind of on a different angle of the same idea... Not only is it easier to hire because there's less enterprises that are hiring in Elm, but there's also somewhat of a relationship between a programmer who will learn a new thing on their own, and who's diving into these niches because they see the technical merits of a language, and the quality of that programmer. It reminds me on actually a Paul Graham essay from all the way back in 2004 - have you heard of this one, "The Python Paradox"?

**Richard Feldman:** \[16:17\] The Python Paradox, yeah. Yeah, exactly.

**Jerod Santo:** You've gotta put yourself in the time of 2004, but his point was that Python programmers -- well, I just have it pulled up here, let me read a little bit. He says:

"In a recent talk I said something that upset a lot of people: that you could get smarter programmers to work on a Python project than you could to work on a Java project."

Of course, that would have upset a lot of people, right? \[laughter\] He said, "I didn't mean by this that Java programmers are dumb, I meant that Python programmers are smart. It's a lot of work to learn a new programming language, and people don't learn Python because it will get them a job, they learn it because they genuinely like to program and aren't satisfied with the languages they already know."

That Python paradox that he's talking about no longer applies to Python, because it has gone mainstream...

**Richard Feldman:** For sure, yeah...

**Jerod Santo:** ...and you can definitely get a good job learning Python, but it does apply to niche languages, and the kind of programmers that will go out there and teach themselves, or dedicate hobby time... They're usually pretty good programmers, so it kind of works both sides.

**Richard Feldman:** Yeah, I think it definitely correlates with a passion for programming. This is something my wife likes to say - she'll point out that "Your hobby is also your work." When I'm not working on my NoRedInk stuff, my hobby is doing more programming stuff, and running the Philadelphia Elm meetup, and whatnot.

**Jerod Santo:** Right. It's not fair.

**Richard Feldman:** Yeah, and I think it's important that our industry not have that as a requirement, that people need to do the same thing in their free time that they do in their work time...

**Jerod Santo:** Absolutely.

**Richard Feldman:** But of course, it's inescapable that it's an advantage. If you're spending more time engaging with your craft, then you're just on average gonna be better. Otherwise, that would be kind of a waste of time. And as much as I don't want that to become a requirement, I also appreciate the fact that companies benefit from that.

**Jerod Santo:** Yeah, it's fortunate and yet unfortunate, you know? It's one of those things...

**Richard Feldman:** Yeah... As long as it doesn't become a requirement, I think it's okay.

**Break:** \[18:18\]

**Jerod Santo:** Richard, as you said, Elm is moving from obscure to niche, and its impact has been, I would say, more than niche and more than obscure, because we've well documented it on this show... And one of the things I love about the Changelog and why we try to stay as polyglot as we can, even though that means we dive into things that sometimes we just can't quite swim that deep, is because the proliferation and the moving of ideas across different camps and different languages and different communities is hugely valuable.

\[20:14\] I think two years ago when you and Evan were on, I asked Evan about the feeling he gets when some of his great ideas and some of the things that Elm has really paved the way for - thinking about the Elm architecture, thinking about just the niceties of the compiler, and these ideas have either been borrowed, or from the great artists have been stolen, and taken to other languages, other projects, other frameworks... Really a neat thing that has happened.

That being said, somebody who knows JavaScript today and doesn't know Elm can benefit from a lot of the stuff that Elm brought to the table, but what are still some reasons in 2018 to give it a try, even though a lot of the great ideas have been moved around to other places?

**Richard Feldman:** Yeah, it's funny that you mentioned that, because from my perspective, I've developed sort of a strange relationship with the idea of Elm's ideas proliferating in the world. The big one is the Elm architecture, which essentially is -- Redux is very similar to the Elm architecture in a lot of ways, and that's the biggest way to do application state management in the React ecosystem certainly... And even in Angular and Vue, there's ways you can opt into that, which some people do... Whereas in Elm it's sort of a foundational concept; everything's built on top of that. It's the only way to manage app state, and there's actually no other source of global state, at all.

One of the things that's interesting to me is that if I talk to a JavaScript developer who's never used Elm, it's pretty common that they will say "Yeah, the Elm architecture seems really cool, and I appreciate some of the simplicity that it brings to organizing your app state." And if I talk to Elm developers who have been doing Elm for even a couple of months, nobody mentions that. It's all other stuff. That's just sort of like the table stakes in Elm, because it's this kind of foundational primitive... The stuff that people talk about are things like "I really love the compiler error messages" or "I love how everything in the ecosystem just works well together."

Now with Elm 0.19, two of the things that people commonly mention are, one, "My project builds so fast", because there was a big speed-up in the compiler. Evan basically rewrote the parser, and then he rewrote the exhaustiveness checker and the type checker, and basically, by the time he was done, pretty much all the insides had been rewritten for speed. The result is that -- somebody posted that they had a just shy of 50,000 line of code Elm project, with something over 100 files and so forth, and the entire thing from scratch, building it plus all of its dependencies, on a fresh Git checkout, was under 2 seconds.

**Jerod Santo:** Nice.

**Richard Feldman:** That's compiling it, type-checking it, spitting out the compiled JavaScript - everything, start to finish, was under two seconds. And that's not even an incremental compile, which, of course, they're much faster.

I think about, like, how many people's Babel - which is JavaScript to JavaScript - builds at that scale are running in under 2 seconds for a fresh build, let alone for an incremental build. That becomes a selling point, it becomes something that people are excited about.

So I think about it in terms of two things that are really exciting to me about Elm. One is the tools, the compiler and the tooling around it, the package manager, and the other one is the ecosystem, where basically everything is built in terms of Elm and I don't really have to worry about compatibility like I did in the JavaScript world. Basically, whenever I install a new package, I kind of expect it to just work immediately. I'll say "Install it", and then I expect to get the same experience I would get as if I were just using a new core library that shipped with the language. It's that level of smoothness.

\[24:14\] Asset size is, I guess, another thing we should talk about, because that's maybe THE biggest selling point of Elm 0.19. But it's relatively new, so I don't hear a lot of people talking about it yet.

**Jerod Santo:** Well, it was news to me. You announced in the blog post, which is linked in our show notes, August 21st... We're recording this October 10th, so a couple months back... But this one didn't make the headlines as much as some of the other things I've seen from the Elm community, even though it's a pretty big deal, especially nowadays when we're trying so hard to get the time to first paint down to as small as possible for our web apps, so that they can reach as many people, as fast as they can. Elm 0.19 has made huge strides with regard to bundle size. Give us the details.

**Richard Feldman:** Yeah, basically the comparison point that we ended up using was "The real-world app." This is a project that's designed to be a bigger cousin to TodoMVC. The basic idea is they have a really detailed specification for "Here's how to build this-- " it's like a Medium clone, it's called Conduit. You can sign in, sign up, post an article, view a feed of articles, Favorite articles, follow authors, unfollow people, you can edit some settings... So pretty typical web app type stuff. And they basically have a really detailed spec, and they provide all the styles for you, and they have a spec for both the front-end and the back-end. So if you want, you can try out "Hey, what does it look like if I'm running this application on a React front-end and a Django back-end? Or an Angular front-end with a Laravel back-end", and all those different combinations.

**Jerod Santo:** That's a great idea, by the way. I think I remember seeing that. It's very useful to be able to swap those in and out and just see how it reacts, right?

**Richard Feldman:** Yeah, and it's a really cool project just to be able to compare. If I'm trying to see "Hey, how would this thing be done in this particular technology?", I wanna evaluate that technology, just having a sort of substantial codebase to look at it to say "Okay, so I see how this thing maps to that other familiar thing/technology that I know."

**Jerod Santo:** Exactly.

**Richard Feldman:** So we have an Elm implementation of this, and one of the things that's kind of cool about this is that these are all projects where the goal is to show best practices, not to tune to benchmarks, which is always a concern with micro-benchmarks... It's like, "Well, how much of this is actually real-world, versus something that's just been tuned to do the best numbers on the benchmark possible?" And pretty much all of these are like -- people just built the apps to do a good job, showing how to do things right.

So the punch line of the blog post is that the React, Angular and Ember ones have anywhere between 105 -- something a little bit over 100 kb of minified and gzipped assets for this whole application... Which is usually like (I don't know) a couple dozen files, and a bunch of dependencies, and so forth. And I think down to the 70's, depending on which of those more popular frameworks you're using... Whereas the Elm one, the entire compiled asset size, minified/gzipped is 29 kb, which is actually just smaller than React by itself. That was a really cool result because that means that if you're doing a React version of this, even with the most aggressive possible code-splitting, you still couldn't get it down to as small as the entire Elm app with no code-splitting... Which was really surprising.

**Jerod Santo:** \[27:57\] How much of that 29 kb, if you could break it out, would be application code, and how much of it would be framework, or architecture code? Do you know the percentages?

**Richard Feldman:** That's a good question, and it kind of gets into why it's hard to measure... The reason that Elm got this to be so small is basically that what 0.19 introduces is function-level dead code elimination. The way that works is -- ordinarily, you have your application, you install some packages that you depend on, and by default, in the old world, you would just get absolutely everything that you install with the package; all the code in that package gets compiled into your bundle.

So then you have module-level dead code elimination, aka tree shaking, which is the target in the JavaScript ecosystem... It's like, "Hey, if everybody uses ES6 modules, then we can get tree shaking, and that'll be great." So that's one level of dead code elimination, where if you don't import a module, then it gets excluded, it gets stripped out of your compiled asset bundle... Which is cool, but there's one more level than that, which is function-level dead code elimination, which is essentially saying "I import this module. This module exposes 100 functions. If I'm only actually calling three of those functions, that's all I'm gonna get in my compiled output. The other 97 will just get stripped out." Basically, it doesn't really matter how your modules are organized anymore. You can just put your functions wherever it makes the most sense organizationally, and it also doesn't matter which modules you're importing. It only matters which functions you're actually calling. Those are the only ones that get used.

**Jerod Santo:** That's super-cool. So it does all the transitive dependencies and stuff to figure out which functions those functions are calling, and so on... So you're not gonna be missing a function at the end of the day.

**Richard Feldman:** Exactly. Now, this is really cool, and it's one of the big reasons that Elm 0.19 was able to get such a small bundle size. However many dependencies we pull in - it doesn't really matter how big they are; all it matters is how big are the things we actually use. And the reason we're able to do this is that Elm has its own totally separate package ecosystem from Npm. That whole SPA example doesn't actually use Npm at all. It's just only using Elm packages.

As a consequence of that, it means you get the system-wide dead code elimination, which is really great, but it also means that it's kind of hard to measure what percentage of this is X, versus Y, versus Z, because it's kind of like, well, what even is Elm's baseline? And the answer is, well, it kind of depends on how much of it you're using.

**Jerod Santo:** Good point.

**Richard Feldman:** That dead code elimination applies to Elm's standard libraries just as much as any package, so it makes it pretty tricky to measure. I guess what you could do is you could kind of like do surgery on the compiled JS, and map things back, categorize all of them, and say "Oh, this came from here and this came from there", but I don't think anybody has ever tried to do that. It sounds like a bunch of work.

**Jerod Santo:** Yeah... I was gonna say, one thing you could do from the other direction is say "Okay, how much application code do I have? How much application code have I written?" and assume that you're using all those functions, because why would you write app code for a demo that's unused...?

**Richard Feldman:** Sure.

**Jerod Santo:** And then say "How big is that, if I just minify it?", or do whatever... Maybe Elm can't do that. It can't just boil this part of the world without boiling the entire thing, especially with its checking, and stuff...

**Richard Feldman:** \[laughs\] Yeah, I don't think there's a way to directly say "Just compile this application code without its dependencies."

**Jerod Santo:** Yeah, because it wouldn't compile.

**Richard Feldman:** Exactly. It depends on those. \[laughs\]

**Jerod Santo:** I'm in the minify world, I'm still thinking just minifying all this down, but... It's actually compiling. Okay.

**Richard Feldman:** Yeah. And what's really cool about that is that it's a benefit that actually gets bigger the bigger your codebase is. If you have an example that's like, let's say, ten times the size of this application, and you've got a bunch more dependencies - because the bigger your project is, naturally, the more dependencies you're gonna end up having - as a general rule, the more you benefit from this, because each of those additional dependencies would otherwise represent all that code coming in... But instead, it's like "No, we're just gonna get what we actually use."

\[32:23\] And the other cool thing is that Elm shares transitive dependencies. So if I install two packages that, let's say, both of them depend on the JSON library, it's gonna find some version of the JSON library that works with both of those packages and only install that once. So it can do the dead code elimination not only across your direct dependencies, but also across your indirect dependencies as well, with just the one shared version between them. So you really end up with kind of the minimal set of dependencies you can get.

There's some other cool stuff that it does, like automatic record renaming, like field renaming... One cool thing about that is it does stuff where if you've got records which are kind of like JavaScript objects, but simpler, they don't have "prototypes are this", or anything like that, and they're immutable... Maybe you'll have a user record that's got fields like username, email, stuff like that... When you run Elm Make with the "optimize" flag, what it'll do is it'll actually compile those down to the smallest JavaScript field names it can come up with. So instead of username and email, it'll compile them down to like A and B... Which is ordinarily not something that's super-safe for a minifier like Uglify to do, because you might be potentially relying on those with dynamic field access, using a string or a variable.

**Jerod Santo:** Right.

**Richard Feldman:** But in Elm we know that that's not gonna happen with these records, because that's just not a feature in Elm. You can't do that. You can only access them with a dot. So because of that, it's safe to rename them. And one of the cool things, which granted, probably doesn't make a big difference in practice, but which I think is really cool, is that it actually goes through your whole program and counts usages, like "how many times this field is used", so that it can use all the single-letter ones for the most used fields, and then when you run out of single-letters, then it can move into two letters, or something like that...

**Jerod Santo:** Oh, wow...

**Richard Feldman:** Which is just, you know -- how much does that actually save in practice? Okay, it probably doesn't really matter... But it's a cool example of how much the compiler knows about your whole program.

**Jerod Santo:** We need to sit Evan down and tell him about the law of diminishing returns.

**Richard Feldman:** \[laughs\] I honestly think that was one of those things where it was like he had to track it anyway, so it was like "Well, how should I distribute these things?"

**Jerod Santo:** "Why not...?"

**Richard Feldman:** Yeah, "I might as well just count."

**Jerod Santo:** That's very cool. Function-level dead code elimination. That's the first I've heard of that. The next step is now line-level dead code elimination. Lay that challenge out there. Doing it line by line for the next version.

**Richard Feldman:** You know, speaking of diminishing returns... There are other potential optimizations out there. It could go even further, by eliminating branches of conditionals that can't possibly get run because of like "You're using this library, but we know it's not possible for that branch to get run..."

**Jerod Santo:** Exactly.

**Richard Feldman:** However, that's another really big project. It's kind of a whole different level of challenge, and at this point it's like, "Okay..." Basically, Evan put something out there about the design for code-splitting, because right now Elm does not have a first-class code-splitting mechanism... And the goal was "Well, let's see how much the dead code elimination does for us, and then let's see if a) that's something that there's actually demand for, and b) if there is demand, let's see what people's codebases actually look like, so that we can kind of design the feature that is gonna make sense for how their assets end up being in practice", because this is kind of a whole new ball game. We don't really know what it looks like. Maybe it turns out that actually if you try to code-split along these module boundaries that you end up with actually more than you would have before, because you lose out on some of the code-splitting benefits.

So we're gonna have to see how those things look in practice before thinking about even further investments in the asset size.

**Jerod Santo:** \[36:06\] When you say "code-splitting", you're referring to instead of having a single bundle, you'll have multiple bundles of smaller size, that are kind of loaded dynamically? Is that what you mean by code-splitting, or something else?

**Richard Feldman:** Yeah, exactly. Sorry. I should probably define my terms.

**Jerod Santo:** That's alright.

**Richard Feldman:** Yeah, code-splitting and lazy loading - the basic idea is let's say you've got a single-page application; you're gonna download one HTML file, and then when the user transitions to different URLs, that's actually all gonna happen on the client side. You're not actually gonna get a page refresh and a flash of white on the screen. All that's gonna happen is that the compiled JavaScript code is gonna go and do HTTP requests to the server, saying "Hey, give me the data I need to render the next page."

The idea behind code-splitting is you're not only gonna say "Give me the data to render the next page", but also you're gonna say "Give me the code to render the next page. That way, you don't have to download -- let's say you end up with like 50 pages on your web app... You don't really want the end user to have to download all of that when they do the first page-load; you'd rather have them download just enough compiled JavaScript to render that first page, and then when they transition to a different page, you can then say "Okay, I'll on the fly load the code for this new page and then execute it."

As applications get bigger, this is something that people commonly have demand for in the JavaScript world. That may very well turn out to be something that there's also demand for in the Elm world, just because why wouldn't there be? But we don't really know what the design constraints would be yet.

One of the things about performance optimization is that the bottlenecks are always where you least expect them. Now that we have this ecosystem-wide function-level dead code elimination, what does that mean for code-splitting? How does it impact it? We don't really know, because no one's really ever had it before.

**Jerod Santo:** Right. So now that 0.19 is out there and you have this dead code elimination, which sounds like it'd be a straightforward upgrade and then recompile, you could at least test -- I mean, have you guys tried it at NoRedInk and just seen your bundle size decrease from version to version, or is it not that simple?

**Richard Feldman:** It's not that simple, because we are still blocked on some of our dependencies not being updated yet.

**Jerod Santo:** You don't have the goodness yet...

**Richard Feldman:** \[laughs\] Not quite yet, and we're jealous of the companies that all of their dependencies have already been upgraded, and they're already gushing about it in Elm's Slack about how awesome it is...

**Jerod Santo:** You're like an Android user on three versions back on their OS, man...

**Richard Feldman:** Well, one version back, but... But yeah. No, we're very excited about it. It's something where we actually track what our compile asset size is for each of our different routes, and so we'll be able to do a pretty cool before and after.

For us, honestly, the bigger benefit is the compile time, because now we've got a quarter million lines of Elm code. You multiply really fast compile time savings across a big enough codebase - that adds up to a lot of increased developer productivity.

**Jerod Santo:** Absolutely.

**Richard Feldman:** We're looking forward to that.

**Jerod Santo:** Let's go back to the packages real quick. One of the reasons why this is possible, this function-level dead code elimination, like you said, is because all of the packages are written in Elm, on Elm-lang.org package manager...

**Richard Feldman:** Yup.

**Jerod Santo:** So Npm isn't even touched. Now, the gift and the curse of Npm is there's so much out there, right?

**Richard Feldman:** Yeah.

**Jerod Santo:** Every piece of code in the universe is on Npm somehow... So when we talk about community and advantages, how much has Elm at a disadvantage in terms of packages that developers need, versus Npm? I just think of that because of the limiting factor of you're waiting on some packages, they haven't been updated yet, and I wonder how big is the package ecosystem?

**Richard Feldman:** That's a good question. I don't know the exact number of packages, but I know that Npm being the biggest in the world is a lot bigger, there's no doubt.

**Jerod Santo:** Yeah.

**Richard Feldman:** \[40:00\] I see it in a couple different ways. One is Elm does have JavaScript interop. If worse came to worst, if I was starting a brand new project and there was some package on Npm that I was like "I can't live without this package", I would necessarily have to rewrite it in Elm. I could probably just do JavaScript interop and just get by with that. Of course, if I do that, then that chunk of code doesn't get me all of Elm's guarantees, all of its benefits, the function-level dead code elimination is not there...

**Jerod Santo:** Right.

**Richard Feldman:** The only way to get that, that I'm aware of, in JavaScript, is to do it with the Google Clojure compiler. That is like an Uglify alternative that has an advanced mode which, as long as your code abides by certain rules, it can do function-level dead code elimination. However, in practice, it seems like there is a lot of codebase -- there aren't a lot of codebases out there that actually happen to abide by those rules such that they can use it. As far as I know, the only community that really makes good use of that is the ClojureScript community, because ClojureScript was specifically designed to emit JavaScript that could be used with the Clojure compiler on advanced mode

**Jerod Santo:** Smart.

**Richard Feldman:** Yeah. ClojureScript and now Elm are the only two communities that have the function-level dead code elimination... Although I think ClojureScript tends to do more in terms of wrapping JavaScript libraries, as opposed to rebuilding them from scratch, whereas definitely Elm leans a lot more towards "Let's do it in Elm, and then we get all the benefits." So I think in practice we probably get on a percentage basis more benefit from it, but I think they're both capable of it.

**Jerod Santo:** Hypothetically, the JavaScript ecosystem could get there, but it would require -- it would kind of be on an app-by-app basis; it would require you to abide by specific constraints that a lot of apps aren't doing out there in the wild.

**Richard Feldman:** Yeah, and I think a lot of this comes down to ergonomics. I have a whole series of thoughts I've been fleshing out about just comparing how JavaScript has evolved over the past ten years, since 2008, when it got fast enough to build web apps in, because of the great browser performance wars... And I think in a lot of ways, a lot of the churn people have been seeing and complaining about, with like "Oh my gosh, there's so much stuff coming out all the time, and things are changing so fast" really dates back to that, that performance war that led to JavaScript being really suitable to have rich web apps that are really client-side heavy.

**Break:** \[42:44\]

**Jerod Santo:** One question I do remember asking two years ago, and you were teasing that - and I wanted the state of it, because I haven't heard - was Elm on the server. Did anything come of that, or is it still just a pipedream, a sparkle in your eye? What's the situation, is that gonna happen?

**Richard Feldman:** That's a great question. It's not that it did happen, it's more that I think we have a much better understanding of what that looks like now. As was the case two years ago and is still the case now, Elm does not have first-class server-side support, and that's intentional. We want to focus on the browser for now, but we're sort of keeping an eye on the server.

One of the (perhaps) surprising things that has been guiding this design question of "What should Elm on the server look like, if anything?" is actually Web Assembly. One of the things we've been surprised by was Web Assembly came out, and discovering that actually this is a thing that all the browser vendors were on board with and were actually supporting... There became this question at some point of "What does Web Assembly mean for Elm?" and that kind of transitioned to discussions with some folks at Mozilla, and asking about what's the garbage collection story gonna be like, and asking questions about what should Elm's interop look like... And where we ended up was kind of discovering that actually it seems pretty feasible that Elm could someday compile just to Web Assembly, not to JavaScript at all, and actually that all of the existing JavaScript interop would still work.

The reason that's possible is that the way that Elm's JavaScript interop works is essentially through message passing. It's kind of like a pub/sub, maybe EventEmitter system. So your Elm app broadcasts events out to JavaScript and then listens for events coming in from JavaScript... And since that's the whole model, it's like that, and then also you can use some WebComponents stuff if it's just view-specific... Neither here, nor there, but either one of those interop methods work totally fine if Elm was compiling to Web Assembly instead of to JavaScript; they can still talk to JavaScript just as easily as it did before, and nobody on the other side needs to know or care that it's compiling to Web Assembly under the hood... Which could be even bigger for assets, and also even bigger for performance, not just because it gets to have lower overhead, but also because it opens the door to really exciting concurrency stuff.

Right now, Elm is actually very much intentionally designed to be a language that's potentially great at concurrency, but a lot of that potential goes to waste because JavaScript is single-threaded, and web workers are, let's say, not usually great for improving performance of typical web applications in practice, even though in theory they might be able to because of serialization overhead. But a lot of that could potentially change if Elm compiled to Web Assembly.

Now, if Elm compiles to Web Assembly, that kind of opens the door to Elm on the server having a built-in way to get off the ground in an environment where concurrency actually matters a lot more, and you can have a lot more potential benefits from it. Because on the client-side, concurrency is basically a performance optimization, but on the server it can be a pretty fundamental thing as far as throughput, as far as how much the server can handle and what kind of a load it's actually capable of processing.

\[48:18\] So the potential seems to be pretty high there, and I don't know if that actually ends up the way that we end up going with it, but it's been pretty fascinating to realize "Oh hey, this actually seems like not only a plausible path, but actually a likely path at this point." We've actually started basically making design considerations. Anytime we talk about any kind of change that might impact the language or the core libraries, one of the questions that always comes up is "Will this still be fine if we're compiling to Web Assembly instead?" and it's basically become something of a design constraint.

**Jerod Santo:** Let me make sure I'm understanding you correctly - are you saying that the work to make Elm compile to Web Assembly is the kind of work that you would have to do to run it on the server and so the rearchitecting will help you, or are you saying that once you've compiled to Web Assembly, then you just magically build around that compiled WASM thing on the server?

**Richard Feldman:** Yeah, so I guess I kind of skipped a step.

**Jerod Santo:** Okay, thank you. \[laughter\]

**Richard Feldman:** Yeah, that was a total leap...

**Jerod Santo:** That's alright.

**Richard Feldman:** Basically, Evan wrote -- one of the FAQs is "Hey, does Elm run on the server?" and of course, Elm compiles to JavaScript, so literally if you wanted to, you could compile Elm to JavaScript and run that--

**Jerod Santo:** It doesn't mean that you should, right?

**Richard Feldman:** Well, more importantly, it doesn't mean you're gonna have a good time if you do that.

**Jerod Santo:** Right, which means you shouldn't do it. \[laughs\]

**Richard Feldman:** Well, so one of the big things that Evan points out is that basically compiling to a particular target is about 5% of the work of getting to a good experience. The ecosystem is a huge deal, so you have all this enormous amounts of design work, and also implementation work, to say "What would a good Elm experience on the server be like?" Elm has different design constraints than -- I don't think there's any other language that has exactly the same design constraints that Elm has.

So there's definitely design work to do to figure out what would a nice experience look like. Actually, Reason ML just ran into this recently... Reason ML is another programming language that compiles to JavaScript, although technically it's a syntax on top of oCaml, so it doesn't have to compile to JavaScript, although that's what its big pitch is, because the syntax looks very JavaScripty.

Anyway, a lot of people were saying "Well, if I can compile Reason ML to JavaScript, and I can also run oCaml on my server, why not use Reason ML on the server?" And what quickly turned out to be the case is that unfortunately that's not enough to get a good experience right out the box. There's still a huge amount of work to do to basically build an ecosystem around that to answer questions like "What should a web server look like? What should database access look like?" There's all these different things - working with queues, working with third-party APIs... All of these questions that sort of have to be addressed before you have something that's an adequate replacement from an ergonomics perspective for something like Rails, or Sinatra, or Express, or any of the other alternatives that people commonly use. So the folks who ended up doing that in the early days were basically doing on Reason - they ended up saying "Well, okay, we're gonna write our business logic in Reason, and then we're actually just gonna end up compiling it to JavaScript and then doing a lot of interop to Express, just to end up basically using Express as our application server."

I guess technically you could do the same thing in Elm if you wanted to - just use Elm for your business logic, and then use a whole ton of interop to talk to Express. But that's not really the Elm experience that people are accustomed to. People are accustomed to things just working, and being reliable, and really only having to use interop in very exceptional cases, not as like a bread and butter type thing.

\[52:17\] I think that's where the big amount of work to do exists - what's the design of a really nice system? And that's what brings me back to Web Assembly - what are the design constraints of that system? If one of the design constraints is we're running in this single-threaded, albeit asynchronous environment because we're compiling to JS and running it on Node, that really constrains the API design space, compared to if we're saying "Yeah, we just have complete control over concurrency, we have first-class threads that we can work with under the hood... We can offer a nicer API at a foundational level, on which that whole ecosystem can be built if we're compiling to something that has a really nice notion of threading."

This also gets into other questions... One of the things that Evan discovered in his research is that -- so Evans is a big admirer of Erlang's supervision tree model, and the way that they handle fault-tolerance and the way that they do servers... Which has a lot of really great benefits. And one of the things that came out of this exploration is that it seems like those ideas are absolutely at their most effective when they are part of the foundational primitives, as opposed to when you try to opt into them using a third-party package, which happens in a lot of languages. So that's also necessarily part of that initial design, and the way that Erlang is able to get really high throughput and really great fault-tolerance is because it has really great concurrency primitives and also supervision built-in from day one.

Philosophically, I think the phrase Evan used was "I built Elm because I wanted to make something that had a credible claim of being the best experience you could get for building front-end applications", and for me as a user of that, I absolutely think he succeeded. But he basically said, "Look, if I'm gonna do all the work to bring into the server, I would want that same goal post. I wouldn't wanna just say 'It's like Elm, but also on the server', but rather saying 'Even if you don't use Elm on the front-end, this has a legitimate claim to being potentially (if you're into the types of things that Elm does) the best choice that you would possibly have out there for servers." And that's a much higher bar to clear, and it requires a lot more--

**Jerod Santo:** I was gonna say, that's a longer field goal to kick, yeah. For sure.

**Richard Feldman:** Well, especially because on the front-end it's basically like -- who's your competition?

**Jerod Santo:** Exactly.

**Richard Feldman:** It's JavaScript and TypeScript, and then several niche alternatives. On the back-end it's like Python, Ruby, Go, Scala, Java... The list just goes on and on. There's so many different alternatives that have been around for longer than -- in some cases, longer than JavaScript has even existed. And a lot of them have a lot more claims to fame; certainly Erlang in terms of robustness, or Java in terms of sheer scale of some of those deployments... Elm really has a long way to go before it can say "Yeah, we're a serious contender in that space."

**Jerod Santo:** So you're on the frontline of Elm community and adoption, you go to the meetups, the conference talks, all this... Surely, you hear a lot of people that are trying Elm or have tried to switch or adopt, and they go back to JavaScript for one reason or the other. I always think of myself, with Sublime Text and VS Code - every month or two I try out VS Code, and there's always just like one or two blockers, and I'm just like "Yeah, I'm going back to SublimeText." So I don't do that.

**Richard Feldman:** Sure.

**Jerod Santo:** Surely you've heard some of those people where they say, "Yeah, this just isn't the way I like it" or "That's up to snuff" or "I just can't get over this, that or the other thing." What are some things people have been saying of why they don't adopt Elm?"

**Richard Feldman:** \[56:01\] That's a great question. You're right, I am very plugged into that, and I can rattle off a list... I would say they break down into a couple different categories. A common one is team buy-in. There'll be one person on the team who's really excited about Elm, and everybody else on the team is just kind of like "We don't really care. We don't wanna learn a new language", and the idea just kind of dies on the vine. That said - well, it happens, but at the same time, teams have to work together. I don't think there's really much hope for a success of adoption something (any technology) if only one out of n people actually wants to use it. So that's certainly a barrier.

Another one that comes to mind is basically the learning curve. Elm is a different programming language. That's just an innately higher learning curve than learning a library, learning a framework... I kind of think that's the progression. A library tens to have the lowest learning curve, a framework is more than that, a language is more than that... Especially because sometimes when you get into languages, people end up with roadblocks that are not necessarily matters of "It's too difficult to learn", but rather than people are just not interested in learning because there's some aesthetic turn-off. Elm does have a different syntax than JavaScript.

Quite a lot of people say they like the syntax better, but there's some people who say "Actually, I don't like the syntax as much, and this just bothers me too much. I can't get through the tutorial." That happens. That's another reason that people don't end up using Elm.

From a perspective of actual APIs and libraries, I think the number one thing that people say -- I don't know how many people walk away from Elm because of it, but I have heard at least one person say that they did sort of like a Hack Day project, where they decided they were gonna switch front-end technologies, and they tried Elm, and they tried Vue.js, and they tried React, and they tried... I forget what the other one was. But they ended up not going with Elm because of this, which is JSON decoders.

Basically, in order for Elm to have the level of reliability it does, it needs to not only say -- like, when you get some data from the server, it needs to not only say "I've got this data and now I can work with it", it actually needs to sort of validate and translate it into a format that makes sense for Elm. So if you think about it, in the JavaScript world if I've got a JavaScript object and I try to access a field on it and it's not there, I get back "undefined", and that might very well lead to a runtime exception, the good old-fashioned "undefined is not a function", that type of thing.

**Jerod Santo:** Right.

**Richard Feldman:** But in Elm we don't really have that. That's all sort of checked by the compiler. Now, when you get back data from the server in JavaScript, you can sort of parse that, call json.parse, and it'll just give you back a JavaScript object immediately, or it'll throw an exception, which you can wrap a try-catch around. But assuming it parses, then you've got an object and now you're playing by the same rules as normal, which is to say "Not much in the way of rules."

TypeScript basically does this the same way. It says "Trust me", and you say "Okay, I'm gonna give up type-checking right at the border. I'm not gonna have the compiler's help. I'm just gonna assume that this JSON sort of fit the shape that I expected and we'll just go from there." Whereas Elm is more serious about trying to maintain those guarantees as your program runs, and because the compiler can't possibly check what's coming out of your server because it's just a blob of data, it doesn't exist at compile time, there's nothing to check. Instead, it has this library for JSON decoding that will simultaneously parse the JavaScript, but also validate it against a schema, and say, if that schema doesn't match what we expected, then it will fail and you can do error handling, but you kind of have to specify the error handling upfront.

\[59:53\] So it ends up resulting in a more reliable system, but it does mean that you actually have to write out a schema for all of your JSON endpoints, whereas in JavaScript you just don't. You just say "json.parse" and it's just like "Okay. Good luck." Elm's not really into the whole "Let's just pretend problems won't happen." It's like, "No, we're gonna try and actually handle the problems and do our best to make sure that if there is a bug, we know exactly where it happened and we can gracefully recover from it."

**Jerod Santo:** This annoys some people because they're used to not having to do that, and now this feels cumbersome, or verbose.

**Richard Feldman:** Exactly. And people say it's a bunch of boilerplate. "It's stuff that I don't have to do in JavaScript, and I do have to do in Elm." We're working on this, and in typical Elm design sensibilities, the goal is not so much to say "Well, how can we make this less verbose?" The goal is actually to say "Well, what's the best way to do this? What's the end goal here?" Can we find a system where not only does it improve that, but actually we find something that solves other problems, which actually along the way solves that. That's actually been something I've been doing a lot of research into recently.

The short answer turns out to be that the people who have the best experience with doing client-server data interaction in Elm tend to have a single source of truth for the schema. An example of this would be -- at Google they use protocol buffers for everything. Without going into too much detail, the relevant part here is that they have one schema file that says "Here's what my data on the wire is gonna look like", and then they have a tool that they run that generates both the client-side code that's gonna decode that, and then also the server-side code that's gonna encode that... And vice-versa if you're sending data from client to server.

So by having this single source of truth between the client and the server in this schema file and then using code generation at build time to make sure that the two sides agree, you can actually make sure that you no longer have the problem of "Whoops! I changed what my server is sending, but I forgot to update my client-side code to receive it." If you change the one but not the other, something in your build is gonna break. So that has a separate really nice benefit, even beyond the "Hey, it's a lot of boilerplate that I don't wanna have to deal with."

But as a nice consequence of that, it also addresses that, because now instead of having to define it in multiple places, you only define it in one place. You just say like "Here's my schema file", and then it's gonna generate my code on the server, it's gonna generate my code on the client, and so rather than having to write out "Oh, here's the shape of my stuff on the client" and then also "Here's the separate decoder", you can just generate both of those at the same time for free, from this one schema file, and while you're at it also get better reliability because your build will break if the client and server get out of sync.

\[01:02:52.18\] So we've got something like this; it's not literally protocol buffers, but on one internal service, and so far the people who've been working on that system are like "Yeah, this is great. Everything's better." So that seems likely to be the shape of a solution to that particular thing that turns some people off from the language. It's sort of like a solution to the direct pain point, while also making something else even nicer.

**Jerod Santo:** Tell folks who are interested in learning Elm - maybe they're JavaScript developers - and they want to check it out... What's the happiest path to learning Elm?

**Richard Feldman:** The first resource I recommend to everybody is just the official guide. If you go to elm-lang.org, then it's got a nice walkthrough that just gets you start to finish. It's pretty short, so that's a pro and a con. It'll get you up and running, but it's not super in-depth. I'm writing a book - shameless plug - "Elm in Action", which goes into a lot more depth, and it's pretty much designed at people who know JavaScript, at least to some extent; it doesn't expect that you're a JavaScript master by any stretch, but it uses JavaScript as sort of a comparison point. I think if you're coming from JavaScript, that should be a nice introduction.

If you prefer the video thing, I've also got a course on Front-end Masters, which I recently updated for Elm 0.19. I've got two courses on there - one is Intro to Elm, which is basically a day-long course that gets you from zero knowledge of Elm, at the beginning, all the way up through building an application and working on a larger Elm codebase that does single-page application stuff, and HTTP and all that.

Then the advanced course - maybe come back in a couple of months if you've been digging at Elm, and get into some of the really cool, advanced stuff.

**Jerod Santo:** Very good. Thanks, Richard. This has been a lot of fun. Thanks for coming on the show.

**Richard Feldman:** Alright, thanks.
