**Kevin Ball:** Hello, party people! Welcome to JS Party! I am Kball, I will be your MC this week, where we are going to celebrate Javascript and the web and talk about all sorts of fun things, with projects big and small.

I am joined by my man Nick Nisi. Nick, how are you doing?

**Nick Nisi:** I'm doing good!

**Kevin Ball:** And Christopher Hiller, aka b0neskull. I just have to bring that in every time, because I love that name. How are you doing, Chris?

**Christopher Hiller:** Super! How are you?

**Kevin Ball:** Life is great! I'm excited about this topic, actually, and I think you too are great to have on the show because you have such a range of experience in different types of projects. We're gonna be talking about the ways that projects vary across size and age. This is a topic I've been thinking about a lot recently. On an episode a couple weeks back we talked about how code camps often have a problem, because folks are learning with projects and the lifespan of the project is at most some number of weeks, so there are just practices that don't make sense in that range, so we're wanting to think through that a little bit more...

Before we jump into that though, I do wanna do a little bit of a hint and a tease... We have an awesome giveaway that we're able to do to JS Party listeners; we're gonna hold a little raffle contest, and we'll give details at the end of the show. So I suppose if you want to, you could skip all the way to the end to hear it, but really we want you to listen all the way through before you hear that... So that will come at the end; make sure you take the time to listen all the way through.

Let's kick off by talking about some of the dimensions along which projects vary, because there's so many different ways that a project might be different, in terms of things like age, \[unintelligible 00:03:00.04\] of change, mission criticality - all these other different things. Let me throw this out -- probably first let's go to Chris, since you've got some pretty different stuff in the open source world, versus your work. What are some of the dimensions you've seen projects vary, that have impacted the way you approach them in the way that you do your code?

**Christopher Hiller:** Yeah, that's pretty wide open, isn't it? Dimensions along which projects vary... I do a lot of work on Mocha, and the focus with Mocha is to make sure it works and it remains stable. That project is eight years old now, which -- to me, that feels like kind of an old project, as things go nowadays. So I think once you kind of reach this plateau of adoption, you need to kind of pull back the reins a bit, and instead of adding all these new features, maybe it's just focusing on bug fixes.

\[00:04:09.15\] It's not to say that the project is in maintenance mode, because it's very much -- you know, you think maintenance mode, you think "Oh, that's a project that's basically done, and all they're doing is fixing a bug or two here", but actually there's been a lot of activity on Mocha as of late... So that's really great to see.

Other projects that I've worked on for companies - definitely not that old. Part of the reason that -- I don't wanna go off on a tangent, but part of the reason I decided I didn't wanna do "production software engineering" anymore was because I was continually working on these projects, which were essentially on these dev teams which were feature factories; if you haven't hear of feature factory - it's this kind of terrible loop that a lot of software teams get into, where it's just all about shipping new features, and there's not a whole lot of design, there's not a whole lot of post-mortems, or really time to stop and think. It's just "Pile stuff on. We need to match what our competitors are doing", this sort of thing.

So I have never really gotten to this point with a software project in my professional career where I was mainly doing maintenance... So it's new, and it's definitely something I've had to learn as I work on Mocha, because it didn't come naturally to me. I started and I wanted to just add more features to stuff, because that's what you do, right? Little did I know, that's not what you always do... But that was my experience, and so I started and I wanted to add all this stuff, and I got frustrated when I couldn't, but finally came to terms with "This project - we need to focus on stability, and reliability, and make it robust", and it's more about quality of what we have, than quantity of what we have. I really like working that way now, but I didn't really know it was a thing before I did.

**Kevin Ball:** That's interesting. You've highlighted a couple different dimensions on that. One was maturity, and the other is this idea between a user-facing product, where potentially features are something that are just gonna get demanded for various sorts, as compared to something that is essentially a utility, a developer-facing tool.

**Christopher Hiller:** Well, I think people may make a little more of that than they should... I mean, granted, yes, the people that use Mocha are developers, and so there's a certain audience there; with any product, of course, you've gotta tailor it to what your users need. But they're still users, and you still need to -- it's not work for a client; we're not selling it, so we have the -- I guess I can say "luxury" of looking at the product/project as a whole, and prioritizing the health of that project, over necessarily one or two users who may want some really bizarre feature. That's kind of another neat idea, because we have the ability to say no. When you're in that feature factory and you're cranking out widgets, you just do it.

**Nick Nisi:** Yeah, and with that is also the luxury of not shipping anything until it's absolutely ready; so you're not cramming things, pulling late nights... Not necessarily, at least. You can really hold off until things are the way that you really expect them to be, and that leads to (I would assume) less -- not necessarily less error-prone code, but more deliberate code.

**Christopher Hiller:** Yeah. I mean, I have broken stuff, and I have stayed up late to fix it, because I know that that's gonna ruin somebody's day, and there's probably a lot of people who's day would get ruined, right? So if there's a huge mistake, it still needs to be addressed in a timely manner, but... Yeah, when it's ready, is kind of the idea.

\[00:08:07.06\] But thinking about when it's ready, projects like Node have a release cycle that's on a schedule. We're considering moving to something like that, to kind of support -- maybe offer support for older versions of Mocha. That's something I haven't fully explored, but it would mean that the next release isn't just when it's ready, it's just we cut it when it's time to cut it.

**Kevin Ball:** That is interesting, looking at things where there's a defined release cycle... I would imagine that forces you to approach it pretty differently.

**Christopher Hiller:** Yeah, I think a release cycle -- maybe a release cadence is the word I wanna use, but... Yeah, I don't really know what we're getting into there; I've only seen how it works for Node, and it seems to work pretty well for them. I think it may even more maybe too quickly for some enterprises, but... You know, certainly too quickly for AWS Lambda.

**Kevin Ball:** Nick, you work more in kind of an agency situation, right? So what are some of the dimensions you have seen projects vary along?

**Nick Nisi:** Yeah, I do. I do consulting, so I'll often join a new team and integrate in with them, or just get their own features and be asked to complete them... Or I'll be thrown in a complete project, and do it from start to finish. It all kind of varies, and that's the fun of what I do - I get to jump around in between all of that, and I get to see a lot of varying teams, and not bring a whole lot of opinion a lot of times to the teams that I'm joining, because I usually just try and be a part of the team and a part of their processes that they already have in place, rather than define my own... Unless they don't have any; then that's always a good time to do that.

But with that, some of the things that I see are things like them not having processes set up, or not having a strict code standards setup... Things that I'm used to in a lot of the code that I work on - I might go in and think "What year is this?" when I see code that has tabs and spaces in the same file, or crazy little things like that, or no CI set up, or tests that nobody touches because they're broken and nobody knows how to fix them, so nobody writes new tests... And then also dealing with -- you know, I'm part of a team that comes in and helps, so I'm like a contractor, but there might also be other contractors, so you have varying levels of standards within that... So there's a lot of variance that goes into the work that I tend to do.

**Christopher Hiller:** That's interesting. I haven't worked for an agency, and I always thought it was - oh, somebody comes to you, "Hey, we want this app built. You build it and give it to us." But what you mainly do is you actually integrate with existing dev teams to help them build their product - is that mainly what you're doing?

**Nick Nisi:** Sometimes. I kind of do both. So it kind of depends on the contracts and what the team or the company that we're going to work with actually wants... But yeah, it varies between both of those.

**Kevin Ball:** One dimension that we haven't talked about as much here but I think is interesting, and it's not something that I've worked in very much... The way that you wanna approach code that's gonna run inside of something like a pacemaker, or a car, or something else where failure modes have dramatically larger or more impactful effects than your average web app - that completely changes the way you're gonna choose to approach that code.

**Nick Nisi:** It is. That's terrifying. \[laughs\] Working on something so mission-critical like that, where lives are at stake... I can't think of a time that I've ever done anything like that, and it kind of terrifies me, if I'm being honest.

**Kevin Ball:** \[00:11:46.15\] Yeah, it's interesting to think about, because I feel like the web is so dominant in terms of mindshare and volume... There are so many people working on web-related projects; a very large amount of the code tutorials etc. that at least I see that are written, are kind of tied into the web in one form or another, that there's a set of assumptions and practices related to those assumptions that kind of rolls along with that. If we make assumptions about the cost of an error and how fast it is to iterate things, that's gonna drive us in a very different direction, if you're thinking about the web, where "Okay, an error might lose us a little money, and give a user a bad experience, but we can roll out a deploy for that quickly, and we'll see it instantly", as compared to "I'm writing software for a pacemaker. I will never see the results of this software, but if it fails, somebody might die."

Another interesting dimension that we don't talk about that much is actually the organization a project is embedded in, and its performance. I've done a lot of startup work, and something I see there - there's often challenges for developers coming into a startup for the first time, especially if they've worked at a larger company or something like that - is if the expected lifetime of a feature or even a product is small, the amount of code quality and investment in testing and things like that that actually makes sense are very different.

In an early stage startup, many times you are writing features or products that are literally tests. They're there to see "Is there any interest in this direction?" And if you spend three hours whipping up a prototype version that mostly works, or you can spend a week creating a great one with lots of unit tests, if you're gonna throw it away in two weeks after you have the information you need, that first choice makes a lot more sense, but that's really painful for most developers.

**Christopher Hiller:** And they don't end up throwing it away.

**Nick Nisi:** Yes.

**Kevin Ball:** Yeah, sometimes. I mean, most of the startups that I have worked at, most of the code ends up getting thrown away. The problem is the one that hits, the one that takes doesn't get thrown away, and that's the survivor bias... And you say, "Okay, I should have spent more time writing that, because now we're running with it in production and it's been two years", and we forget about the dozen tests we ran that we did throw away.

This is maybe a detour a little bit, but I think thinking about how we approach stuff that is tests, and then leaving time to rewrite the ones that succeed is an interesting area to look at this. I find that in my experience most developers over-assume the required quality for stuff that happens in an early startup... Because we come in with this assumption, "We're never gonna be able to rewrite this." We try to write all of them as if they're never gonna be rewriteable, and it ends up costing us way more time than if we did 12, with 11 of them thrown away, and then we actually spent the time to rewrite the 12th one properly.

**Christopher Hiller:** I mean, it doesn't even need to be a rewrite... But once you figure out something works - okay, ship it, but it's really hard to sell that "Hey, hold up... We need to fix some of the tech debt that's already here, instead of pushing forward in this direction." That's always a tough sell.

**Nick Nisi:** Yeah, because you have to get something like an MVP out to be able to sell that, and if you do end up selling it, there's inevitably features that need to be added on... So finding the time to do that, and justifying the time to the potential buyers that are waiting for it, or whatever, depending on what the product is... That's where things get difficult.

**Kevin Ball:** It absolutely is... Here's the thing - we all imagine these cases, and we think about them, because we know them; but that is also survivorship bias, that's the feature that worked. By far, the most common case as a startup is you launch it and nobody touches it, it's 100% ignored.

**Christopher Hiller:** Can you explain survivorship bias?

**Kevin Ball:** \[00:15:54.29\] Yeah. Survivorship bias is the concept that the thing that sticks in our head and the thing that we take as the example, is the example that survives, or that did best. A common way this is used is actually talking about the value of being a startup founder, in that world... So I'm gonna stay in the startup world a little bit. So we romanticize startup founders. "Oh, you're gonna get rich as a startup founder. That's how you're gonna get rich", and we have these very high profile folks - you look at Elon Musk, you look at Mark Zuckerberg, or Jack from Twitter, or whatever... And they talk about all the things that they did; and we look at those things and we say, "Oh, you've gotta go to Harvard and then drop out" or "You've gotta do whatever and drop out" or -- what's Jack's new thing...? "You've gotta go and meditate someplace", and we look at all these things and we take them as examples of "Oh, this is what this successful person did."

And if you step back and you say, okay, assume a random chance of surviving and doing well; if we only look at those examples, we're not looking at the failures. For every Mark Zuckerberg, there may be hundreds of dropouts from Harvard who tried and failed. For every Jack, there may be hundreds of failed startup founders who tried those things. The things that we look at and say "That's how you do it", or "That's the problem with that scenario", if we only look at the success cases, we completely bias our results.

So bringing these back to code - if we build 12 features, and one of them takes off, and the code is underdeveloped... Say we build 12 features, for all of them we under develop the code, which is what lets us ship 12 features, the twelfth one is really successful and we say "Gosh, we never have time to rewrite it. We should have built it better from upfront." And we don't look at the case of someone who spent the time to write things well, only shipped three features, and none of them took off. Does that make sense?

**Christopher Hiller:** Sort of... But what is the result?

**Kevin Ball:** The result is that if we do that - and as people, we have a tendency to do this - we draw conclusions based on the chance that succeeded, without taking into account the fact that it may have been chance, or that the factors that we're criticizing here may actually have been part of the reason that we even had the chance to see it.

**Christopher Hiller:** Interesting.

**Kevin Ball:** Anyway, I think we've pretty much covered a lot of the dimensions on which projects vary... We'll take a quick break and come back and talk about what are the implications of that, what are the different types of practices that you might do differently, based on those projects' size and age; how do those vary, what are the implications for us as developers, and what lessons can we take from that. But for now, let's take a quick break.

**Break:** \[00:18:41.24\]

**Kevin Ball:** Okay, welcome back to JS Party. We spent the first segment of this episode talking about some of the dimensions along which software projects vary... Let's now dive into some of the practices that will also vary along project size and age. Nick, you kind of hinted to this a little bit in your talk, about going into organizations and finding the processes are not set up, or various other things... Do you wanna expand on that a little bit more? What are the different dimensions that you've seen varying based on the client?

**Nick Nisi:** \[00:19:55.29\] Sure. Depending on the type of projects that I might go into, there's different metrics that they might prioritize above others. That's things like code coverage, or documentation, or what specific things get focused on in terms of features being built, and the teams building that, or going through QA processes and things like that; that might be \[unintelligible 00:20:18.08\] It's just depending on the type of project that we're working on.

**Kevin Ball:** Can you give some examples of different QA processes, or things like that?

**Nick Nisi:** It seems like a lot of the teams that I end up working with have kind of adopted this concept of inner source, which is kind of taking open source practices and using that internally, within the company, so you're not necessarily working on open source stuff, but you might be adopting open source practices... And I think that GitHub has really helped push that a long way. It makes it easy for teams to implement code reviews through pull requests, and things like that... So that's something that's almost always ubiquitously there - pull requests and code reviews based on that; so getting at least one person, one other developer to approve your PR before you merge it in, and then really working from there. They might have a dev branch, kind of following more of the Git flow pattern, or just might push straight to master... But almost always the master branch is thought to be never broken, or you try to never have it be broken, so everything that is pushed there has been tested, and reviewed, and it works.

**Christopher Hiller:** What kind of tests do you see, if there are tests?

**Nick Nisi:** Usually there'll be unit tests, and some end-to-end tests. One thing that we try and really push is -- I know it's not always a great metric, but we try and push code coverage numbers in what we will deliver; so we'll say like "Oh, all of our code will have at least 90% code coverage." It's just a metric that we can push, and say "This is something that we've hit. We've tried to test all of these factors", and that usually leads to -- you know, writing those tests and getting those up usually leads to trying to stomp out a lot of bugs that might creep in; not all of them, of course, and it's not perfect, but it is a decent metric to be able to push towards that. But then also things like end-to-end tests or functional tests, where we're using a WebDriver API and running the browser as if we were a user, and doing that in an automated way.

**Christopher Hiller:** Do you see separate teams for writing end-to-end tests, or anything like that?

**Nick Nisi:** I have, and that has been interesting, in that those tests often are very brittle, if it's not the developers thinking about it, I think... Or at least the developers who were working on those specific features, or that specific part of the app, if it's more of a team writing those tests; I've seen those tests be more brittle and break quite easily... Which is always scary, because then -- the first thing that I think of whenever an end-to-end test breaks is "What went wrong with the test?", not "Is the test broken?" or "Is the text actually showing me an error, or is the test just broken?", I guess is a better way to put it.

**Kevin Ball:** That raises an interesting question, and something that I have occasionally a heretical view on, but I'm gonna get you all's perspective first - are there cases or projects or situations where more testing is actually a negative?

**Christopher Hiller:** Yes... I feel like this is a leading question, but yes - if your tests are very tightly coupled to your codebase, it makes refactoring painful.

**Nick Nisi:** Agreed.

**Christopher Hiller:** And most this is seen in unit tests. If you're mocking stuff that you don't have control over, and making these very subtle mistakes, you can end up in trouble. And yeah, I could go off on my whole philosophy about it, but I'm curious what you think, Nick.

**Nick Nisi:** Yeah, I think that too many tests are especially bad if there's a lot of flux going on in the code, because then things just do break all the time, and especially things like unit tests, or a lot of the tests that we end up writing right now, testing the output of the virtual DOM, and comparing that, and making changes to the state somewhere, and then diffing that with what we expect the virtual DOM to look like... Things like that.

\[00:24:20.06\] And if there's a lot of flux going on in the way that that might look, then there's a lot of rewriting those tests that tends to happen. So I like pushing those -- I don't really follow TDD; I like to get things working and get things pretty much fleshed out, and then go and test later, just because it tends to avoid a lot of \[unintelligible 00:24:40.28\]

**Kevin Ball:** Yeah, I think that dimension of how much flux is there, what's the rate of change, how settled is this code - it's actually a really interesting one when it comes to practices and how we wanna do it. It ties into tests a lot in this. I think it also just ties into "How much do you wanna worry about making your code dry?" We had an episode 4-5 months ago where I had a conversation with Michael Chan (chantastic) from the React Podcast, and he had this whole talk about "dry code is brittle code." If you're changing your code a lot, the more you dry it out, the more you add lots of tests, the harder it is to change.

This ties into Chris's point about Mocha being now a more mature project. It's more mature, it's changing at least on a feature level more slowly; that would imply that some of these more traditional code quality metrics like test coverage and how dry it is and things like that may actually be more valuable and applicable than an early-stage project where everything's in flux.

**Christopher Hiller:** Yeah. If your codebase is churning, you're gonna have problems with your tests. Functional tests, or end-to-end tests in particular - I've had the experience that a) it's hard to write good ones; b) if you try to hire somebody to do that, usually the people that are hired to do it seem to be often very junior developer types that want to become developers some day, so they're getting their foot in the door as a QA engineer writing tests like this... And the more that the code changes, and the more features are added, the more tweaks that happen. So if you have this other person who's supposed to automate these things, it goes into this pipeline, and there's just this pile of tests that are perpetually broken, and there's like a backlog of things that they need to fix, or write new tests for, and it's just a huge issue.

I've seen certain companies out there try to solve this with crowdsourcing, and -- I don't know, I imagine they do some sort of macro recording or something, to flesh out these functional tests... But in the companies that I've worked for previously, it was always a really big source of conflict and headaches, just because keeping those functional tests up to date with continually changing features, and new code was just not scaling very well.

**Nick Nisi:** So what's the happy median then?

**Christopher Hiller:** I don't know what the solution is for a product team like I used to be on... I do know that I was indoctrinated that "Hey, you've gotta do TDD, and you've gotta write all these unit tests", and I thought, "Okay, great. I'll do that." And then we see that those unit tests don't necessarily mean too much if the whole end-to-end process is not coming together. You could have 100% code coverage and your app could be 100% broken. But in Mocha, for instance, I've come to see that we don't have 100% unit test coverage... And that's fine, because we have so many functional tests where we invoke Mocha from itself, and test the output of Mocha. Those are incredibly valuable, and it makes me think -- I could see unit tests from looking at TDD, and there's people who love it, people who hate it, people who fall somewhere in-between... I wouldn't see the value in going back and adding a ton of unit test coverage to a bunch of stuff in Mocha when it's already very well covered by the integration testing.

\[00:28:47.02\] So my thought has shifted from "Oh, functional tests are bad because it's impossible to keep them up to date, and it's really expensive, and unit tests are good; that's what we're supposed to do", to kind of flipping over, where it's like "Oh, well if you can write these integration tests and keep them maintained, and there's not a whole lot of flux in your project, then they're awesome, they do a great job... And unit tests are nice to have, but we don't need to go out of our way to add those corners of the code where lines are not covered.

**Kevin Ball:** I wanna throw out one more possible variation of practice, and ask if it's something that project type may influence; this is a little bit of a troll for Nick, but what about typing? I know you're a big TypeScript advocate. Are there projects for which typing is not a good choice? Are there projects for which typing is particularly useful as compared to others?

**Nick Nisi:** If you have one other person looking at the code, typing is amazing. \[laughs\] No, that's kind of my troll answer, I guess. I'm obviously a big fan of TypeScript and adding types, because I think that it makes working with the code easier; it helps me understand what I'm even trying to do... But it can be very limiting, especially at the beginning, if you're going into a project that maybe has a lot of flux in it; the types might make you feel like you're being constrained, because you did something and now you wanna go change it... And now maybe this interface changes, or several of these interfaces change, and you have to go update all of that, and it's just a lot of code that never actually makes it to runtime, that you end up dwelling on for a while. But I think that there's a lot of benefit to that, especially if you have a team of any size.

**Christopher Hiller:** I don't have any data, but I feel like there's an inflection point where developer productivity is going to be greater not using something like TypeScript. And as the size and the complexity of the project grows, there's some point where it would really be nice if we had types, and by then it's like it's too late.

**Nick Nisi:** Yeah. See, I guess now I feel like writing any code without types - it just feels awkward to me. For the longest time, I was just kind of this vanilla Vim user who didn't expect anything from the editor; I just had to type everything in, because that's what you get in Javascript... But now I just find it really nice getting little warnings and pop-ups from the LSP, telling me that things are wrong, or things aren't as I expect, and just helping guide me a little bit more. I've just become so accustomed to that that I don't like not having it anymore.

**Christopher Hiller:** You know what I love? I love that other projects are written in TypeScript, and not mine... Because I get all those types in my editor, and I don't have to write my own. \[laughs\]

**Nick Nisi:** There you go, the happy medium right there.

**Kevin Ball:** For me, not for thee...? Or, no - for thee, not for me. Whatever it is. \[laughs\]

**Christopher Hiller:** \[00:31:49.24\] Okay for others, not for me. No, I think that's awesome. You get a lot of the benefits without having to think about it. And I think I may have said before, even on this show - TypeScript is really difficult for me, because I have a lot of perfectionist type tendencies, and so if I started a project with TypeScript, I would spend all my time fussing with the types and not get anything done. That's just been my experience. But I love going and sending a pull request to a TypeScript project, or something like that; that's great. But I can't be expected to think about it myself. \[laughter\]

**Kevin Ball:** That's funny.

**Nick Nisi:** That is one of the big things with TypeScript - you can go down that rabbit hole of wanting everything to be perfect, and if it's something that's pretty well out of your control, then you end up doing a lot of writing this code that never makes it to runtime, like I said, and that can be really demotivating if you're trying to do something.

I was trying to use it on a project that was a Chrome extension. This was way back; things have probably gotten much better... But I couldn't find any types for the APIs that Chrome would give you, and so I just started writing my own. And the ones that I found were broken, or the APIs had changed, so I spent so much time just fixing that. Before I knew it, four hours had passed and I had no code with these types that weren't really even using right at that second... So I lost momentum on that side project.

**Christopher Hiller:** I feel like dev teams, if they're gonna use it, should designate a developer as the type master, and the type master is in charge of the types. And everybody else uses the "any type" until the type master comes and fixes it. \[laughter\]

**Kevin Ball:** How much of that is so you don't have to worry about the types?

**Christopher Hiller:** That's so everybody else doesn't have to worry about the types, except the type master. TypeMaster!

**Kevin Ball:** Yeah, I do work right now both -- I'm not using TypeScript, but I do use other typed languages occasionally, and then I'm using Javascript... And I feel like the value of typing, as Nick alluded to - it goes up the more people are working with the codebase, and the more complex your code is, and the more different pieces... Because then those hints and enforcements become extremely valuable. It does kind of slow you down when you're just trying to hack something together...

Looking back to this question about dimensions on which projects vary, if I'm doing a quick and dirty script to try something out, I'm not gonna use something typed. If I'm building a project I expect a lot of folks to interact with, types start to make a lot more sense.

Alright, I think that's good for this segment. Let's take another quick break, and when we come back, we will be talking about some of the lessons that we have learned or that we have seen other people talk about from big projects, because I think one of the big gaps in a lot of coding education is that teaching in courses, or if you're in a bootcamp or you're in a CS course or whatever it is, all your projects are pretty short-lived, so there's potentially some stuff that's getting missed. We will talk about that after the break.

**Break:** \[00:35:02.07\]

**Kevin Ball:** Alright, welcome back to the final segment of this week's JS Party. We are going to be talking about some lessons that we have drawn or that we've seen other people draw from working on big and long-lived projects, so that folks who are still out there learning or working mostly on shorter-scale projects - maybe you're at a startup or you're at an agency and your stuff doesn't last that long - what are some of the lessons that you may need to learn to help scale for larger and longer-term projects? Anybody excited to jump on a lesson they've learned?

**Nick Nisi:** Larger projects and long-lived projects are very boring, compared to very short-lived projects. Several big ones don't tend to use the latest and greatest of whatever is in the Javascript or whatever ecosystem... So there's a lot of older legacy code that, if you just go by Hacker News or Reddit, is totally dead and nobody's using, but it's actually very much in use.

**Christopher Hiller:** Grunt. \[laughter\]

**Kevin Ball:** Yeah.

**Nick Nisi:** That's exactly what I was thinking of.

**Kevin Ball:** Wait, isn't Grunt dead?

**Nick Nisi:** I heard Gulp was dead.

**Christopher Hiller:** Essentially...

**Kevin Ball:** Is Gulp dead?

**Christopher Hiller:** I saw some post that he made, and he was like "Oh, I have all these great ideas for the next version of Gulp", and then I think he said was thinking about crowdsourcing funding to work on them. I don't have the experience of working on -- I didn't go to Code School, I'm not sure what those projects look like... I haven't done a whole lot of short-lived projects, so... Yeah, I'm more curious to see what people like Nick, who have worked on both those types, what their experience is.

**Kevin Ball:** I do think one of the interesting things that I've seen going in sometimes to help folks with very old, long-lived projects - and this ties a little bit into what Nick is talking about - is there is often a lot of really old stuff, and an extremely valuable skill is learning how to essentially refactor code gradually. How do you put scaffolds in place so that you can safely update old code? A lot of that is concepts like "Okay, before you even do any update, bring anything in, can you make clean the interface boundaries between different parts of the code, so that you can update and change this part without having to mess with everything all at once?" Because a long-lived project is usually very complex, there's more things than you can hold in your head at once, and if you can move things to be more isolated and have cleaner interfaces, that enables you to then upgrade things a piece at a time.

**Christopher Hiller:** What sort of updates are you talking about? Can you give an example?

**Kevin Ball:** Sure. I helped out with a project - I went in and did sort of a training on a team that had a project that was written in ColdFusion. It's this old application, ColdFusion had all their SQL tied up with their templates, had these old CSS files, weren't even using Sass... Lots of different Javascript libraries getting pulled in willy-nilly... And they wanted to move to more modern front-end practices, understandably.

Working with them to think about how do we take, for example, these pages where our concepts of how we're manipulating data and how we're displaying data are all kind of entangled together, and even give ourselves the opportunity to upgrade pieces of it by disentangling those parts, and kind of creating separated data and presentation? That's a very legacy-seeming example, right? You wouldn't expect a modern company to be doing all of those things, and yet they were, because this app had been around for ten years, and they'd never had the bandwidth or time to refactor it.

\[00:39:57.15\] You can look at similar things, like if you're thinking about a modern front-end trying to adopt React or Vue or Angular, or something like that - can you find ways to segment out pieces of your projects, and start upgrading them bit by bit? Is that by making them more components? Is that by having an app that is moving over page-by-page? There are different ways you can approach it, but the skill you have to adopt or learn for these bigger and older projects is like "How do we create modularity where it may not exist?" Because in a small project you can usually hold the whole thing in your head. "I wanna update my React application and I wanna change it over to Vue. Okay, I'm gonna do a big bang rewrite, and since my app has 20 pages, it will take me three weeks, but then I'll be done."

If you have a project that's been worked on for years and years and years, you need to be able to create modularity where it may not exist.

**Nick Nisi:** And in Javascript modules didn't exist for a long time, so you might run into that still in older projects.

**Kevin Ball:** Yeah. Have you ever updated a non-modular project to a module-based project?

**Nick Nisi:** Yes. It was not fun. Those projects often times would rely on things like concatenating files in the right order, or having script tags just loading in the right order... So somebody had to manage that and understand "This piece comes before that, so if I need this, it has to be loaded before this, and before this", and then you can run into lots of problems with that.

But then the kind of community-grown modules got introduced, and that really helped a lot; AMD and CommonJS. But then CommonJS and the browsers - they don't really get along. We kind of covered that in the last episode, talking about how Npm has kind of taken over the world, including the front-end, but there's all of this CommonJS code that can't natively run in the front-end at all... So it's really nice that we have all of that now, but there's a lot of code that is still not anywhere close to using the ES module syntax, or anything like that. So I think that's another thing that you can do - segment off the code and introduce the build step into a small portion of the code that can give you the same kind of output, but then can help you modularize your code.

**Christopher Hiller:** I've done something like this. It wasn't switching to ES6 modules, but it was an app, and essentially it was maybe a PHP entry point, and in that PHP file there was a list of script tags; those were being output to the browser. I was able to look at all those and -- this is including third-party libraries, stuff pulled out of Bower; there was stuff just kind of thrown in using globals all over the place, and not encapsulated or contained in any way... And I was able to actually use Webpack to bundle the whole thing.

But I know people give Webpack grief because it's so hard to configure, and this, that and the other thing, but you know what - if you're presented with a situation like that where it's just script soup, Webpack does give you the tools to be able to sort things out... And eventually I figured it out; it was not easy. There was a whole bunch of aliases, and these hacks that needed to happen, but plugins were there to do all of it, and it was just a matter of figuring out "Okay, this module does this weird thing, and it's needed by module X." I was able to do it, because Webpack is very powerful and customizable. I guess you could call that a success story...

**Kevin Ball:** I think it highlights a really interesting practice that may not be obvious if you've, once again, worked only in smaller or newer codebases, which is the first thing you wanna do when you're tackling something like that is reproduce your existing system with the new system. Don't try to modularize your code, and introduce Webpack, and all of that, all in one go.

\[00:44:16.04\] Put WebPack in and just figure out "How do I use aliases to reproduce the existing build with Webpack? Okay. Once I've got that working and I know that it's there, then I can tease out bit by bit... Okay, this could become a module that's imported in a real way, or pull things apart...", but if you try to do it all at once, you'll get lost in the complexity.

**Christopher Hiller:** Yeah, absolutely. Just one thing at a time. And even that is just big enough. It's like, "Yeah, wow..." I mean you've got third-party vendor scripts that are pulled down and saved, and they're four versions old, and then you need to try to get everything to pull from Npm, and those versions are different, and the files on Git are different. Oh my god." But yeah, don't bite off more than you can chew. I mean, I figured I could do it, and that's why I did it, but... I knew it was possible.

If I would have tried to take those crazy scripts that just throw everything in the global namespace and try to make ES modules out of them, that would have seriously put the brakes on things.

**Nick Nisi:** Yeah. And in development, it's really -- that's one of the benefits of it, is that it's really set up for being able to incrementally add and change things... Or at least it seems to have evolved that way, with things like Webpack, and being able to take any kind of file and make them all work together. You can build a build process out of that that will get your code into production with any format, and mixing and matching everything, so that you can slowly migrate over towards one format and refactor your code like that.

Then the same thing goes with introducing types. If you're going to do that with TypeScript, you can incrementally start with one file and type that, and then make sure that it works, and then slowly add more types to more files as you go... But it's all about getting the infrastructure in there to allow you to make those incremental changes, and then rigorously test along the way. That's not something you have to think about much with newer projects, I think.

**Kevin Ball:** Well, that raises an example of an example of a place where tests can be super-useful. And a lot of times if you're coming into a legacy project, there may not be full test coverage. But if you can set up tests, whether they're automated, ideally, or even just manual, but well-documented, of what the expected outcome is, around the area of code that you're going to be modernizing or addressing, then you can, as you go along, be sure that you're not f-ing things up.

**Christopher Hiller:** Yeah. So if your legacy app doesn't have those functional tests, it may be really difficult to do that upfront... Especially if your code is spaghetti, or not written in a very testable way, and then maybe you want to... Oh, boy. Yeah, so you're afraid to move forward with the modernization unless you get these tests in place; and it's painful to put the tests in place, because the code is bad. \[laughter\]

**Kevin Ball:** That's one of the reasons that I highlighted that you can even do manual tests. "What is the functionality that this is even trying to support? If I test through it right now physically, what does it do? Okay, I wrote all that down; I wrote how I tested it, now I change something - does it still freakin' work?" Because ideally it's all automated, but there's some code that writing a test for -- you're gonna spend days on that.

**Nick Nisi:** Yeah. And it's totally achievable, because that's why all of our banks are running on the latest version of Node, right?

**Kevin Ball:** One thing I do wanna highlight here, too - we're using the word "legacy" a lot... Honestly, the speed that web technology moves, legacy code might be code from six months or a year ago. It doesn't have to be that far out of date before it's something that perhaps needs to be modernized, or there's better practice...

\[00:48:07.21\] I mean, legacy code might just mean "We wrote this in a hurry, because we were under a time crunch, and now we have time to look back at it, even though it's only three months later and we say "Oh, we should have done that differently." That feels like legacy code.

**Nick Nisi:** Yeah. And code that maybe wasn't written with performance in mind... Quickly getting something started and proving out that it's possible; maybe it's not done in the most efficient way and there's ways to refactor that. That could be code that's not years and years old, just months old maybe, that you wanna go back and revisit.

**Kevin Ball:** Alright, any other lessons that y'all wanna highlight, or shall we get to the quick special contest announcement?

**Christopher Hiller:** Contest it up!

**Kevin Ball:** Alright, so this contest is pretty exciting, and it's gonna be an experiment. The high-level is - coming up, this summer, June 21st and 22nd, there's going to be NodeConf Colombia, taking place in Medellin, Colombia, and we will be there, doing a live episode. We would love to see you there, and we have a free ticket to give away to one of our listeners. Now, caveat - the ticket only covers conference entrance, so you still have to deal with flights and hotel, but... Free ticket. And especially if you're already down in Latin America, it may be quick and easy to get there; or if you're coming from the States, there are plenty of ways to get in... I just looked at those flights \[unintelligible 00:49:23.10\]

So anyway, we have a ticket to give away, and we're going to give it away in a raffle. There's two ways that you can get raffle entries to get this. Way number one - rate or review JS Party in your podcast app. That will get you ten entries to the raffle. Alternative for those who either don't want to do that, or wanna do that but also want more entries, because they're really excited about this ticket - share your favorite episodes from JS Party on social media. That will get you one entry into the raffle per episode shared. Whichever of these you do, take a screenshot of it and send it to jsparty@changelog.com. E-mail it to us, and we will collect entries up through the end of April, so you have all month of April to do this; then we will be putting all the entries into a raffle software. I think we're gonna use an open source raffle software, so it will all be open. It is Changelog, so we wanna use open source and highlight that, and we'll pick out a winner who will get the free ticket to NodeConf Colombia.

With that, I think we're ready to wrap up this week's JS Party. Thank you for joining us, and we hope to see you next week when we have our next party about Javascript and the web. Take care, y'all!
