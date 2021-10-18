**Kevin Ball:** Alright, the sound of those beats means it's your favorite and my favorite party time - it is JS Party time this week! Hi there, I'm Kball. I'll be your MC today, and I'm joined by three amazing panelists. First, Divya Sasidharan. Divya, how are you doing?

**Divya Sasidharan:** Hello, hello! Pretty good.

**Kevin Ball:** We also have two elusive panelists - Mikeal Rogers...

**Mikeal Rogers:** Hello!

**Kevin Ball:** And Feross Aboukhadijeh.

**Feross Aboukhadijeh:** How's it going, Kball?

**Kevin Ball:** I am so excited to have this. I think the last time we managed to do an episode with both Mikeal and Feross on the same show I was just sitting there with my mouth open, absorbing things the whole time... And Divya is gonna add even more.

Our topic for today - we're gonna talk about refactoring large projects, which is something that I've been doing a lot of this last month or two. I joined a new company and got immediately thrust into "Hey, here's this long-standing refactor that needs to get done. You have fresh eyes, why don't you tackle it?" But I wanna really lean on the panelists here to get a lot of knowledge, so let's start with the first piece of the process, of even decision-making. Looking at our panelists, Mikeal, Feross or Divya - any of you chime in - how do you decide when is it time to do a big refactor? Should you do it, when should you do it, what code deserves to be refactored?

**Mikeal Rogers:** For me it's when I have to. There's no other option. Sometimes you just realize "Okay, it's gonna be easier to rewrite this than it will be to use it in some other way that it was actually designed for."

**Divya Sasidharan:** Yeah, I often find that refactoring is kind of the thing that people don't look forward to, unless it's refactoring it to a specific concept or technology that you're really excited about... But oftentimes when you're refactoring large projects, or legacy projects, it tends to be something that you'll push down to someone else, hopefully... You're like "You do it." Yeah, that's generally the reaction I often see... I've done it too, so I'm guilty.

**Kevin Ball:** It's funny, because I feel like a lot of times devs have a reputation for over-wanting to refactor. "Oh, this code isn't perfect. I'm gonna refactor it."

**Feross Aboukhadijeh:** Yeah.

**Kevin Ball:** "This code isn't perfect, I'm gonna refactor it."

**Mikeal Rogers:** I think young devs do that a lot. \[laughter\] People have been burned by that multiple times... Yeah.

**Divya Sasidharan:** When Mikeal creates stuff, it's perfect. \[laughter\]

**Mikeal Rogers:** No, no... I've just been pushing back recently, like -- I think the younger you are, the less that you've heard of second system syndrome, and things like that, and all the problems that come into play when you actually sit down to redo something.

**Feross Aboukhadijeh:** \[03:47\] It's interesting, it's like -- you can go extreme in both directions. You can refactor too much, but you can also... I mean, I've worked at some companies where they basically never wanna refactor, and the code looks like that. They're using stuff that has much, much better replacements... And using methods that just aren't the best way to do stuff anymore. They're really hesitant to refactor it, because there's no tests, there's risk of breakage, it kind of works, and "Oh, there's all these other things we could do", that seem more important to the project managers or the people who are making the decisions about what the developers work on. So it can really go wrong in both ways - too much refactoring, or not enough.

**Kevin Ball:** So do you have a decision-making process you use for deciding when you have to do it, or when is the right time?

**Feross Aboukhadijeh:** I think if you start to notice a lot of problems originating in one area of the codebase, you find that a huge number of the last set of bugs that you've had to go and fix have some sort of root cause that's in common; it might be that that's a good place to consider a better design.

Also, if you feel like working in that part of the codebase is really demotivational, it feels bad to you, it discourages you, it makes you not want to do it, or teammates on your team feel that way too, then it could just be like a big drag on everybody... And that slows down the speed at which you can do stuff, and it just makes work less fun. So that would be another reason to do it... And that's more of an emotional reason, but also that's really important. There's probably other reasons... What do others think?

**Divya Sasidharan:** I agree with the gut reaction thing, because that often is the reason I refactor certain things. I sort of know intuitively that it isn't exactly how I want it to be, and that generally tends to motivate me to refactor it.

And also, it goes hand-in-hand with being excited about that refactor, because you think that it needs to be better, so you work on it... It's not always the case, because there are times when you think something smells, but then you don't wanna touch it, because it just is too much work, or you're gonna go down this rabbit hole of work, and there's no light at the end of the tunnel, so there's always that fear as well.

**Mikeal Rogers:** I think there's also certain things for which there's no replacement for refactoring. If you're using a library and it has just a way too big bundle size, because it was never designed for that, and you were just thinking about Node when you wrote it maybe - the only way to fix that is to refactor it. There's no quick and easy way to just make the bundle size less. You end up using completely different modules, and you have to do things in a very different way... So you end up doing kind of an awful refactor just to take that on. So there's certain cases in which you really have no other option, other than just maybe using a different library.

**Divya Sasidharan:** Well, alongside that it's also if the technology is deprecated. It's 2020, so Python 2 is completely deprecated... So if your code is written in Python 2, you're gonna have to move it over. And that almost necessitates refactoring, because otherwise your code won't work moving forward.

**Kevin Ball:** That actually raises -- there's sort of two different areas that cause refactoring. One is code smells - things are bad, I don't like this, it's causing bugs. The other is there is some sort of functionality or requirement that this code is not meeting, and that its current structure means it is incapable of meeting, so I need to change it.

The first one I think was what Feross and Divya - you were talking about first, like "How bad is it? Is it causing a lot of bugs?" I've seen - and maybe even talked about it on the podcast with somebody - there's these two axes that you can look at things code on... It's "How complicated/complex is it?" and "How frequently is it being touched or modified?"

You can have a super-complicated, ugly function that just kind of works, and you never have to touch it, and there's no reason to refactor that. Or on the flipside, you can have code that's changing a lot, but is actually really well-factored and works well, and you don't need to refactor that either. But in that corner case of "This is both really complicated, and it's being modified or dealt with a lot" - that's a place where a code smell indicates "Hey, this is probably worth refactoring."

**Feross Aboukhadijeh:** Yeah, totally. It's about deciding where the time is best spent, for sure. If the grossness is isolated somewhere and you never have to look at it, then it still could affect the rest of the system... Like, if the performance is bad, and that actually ends up causing problems for users or for developers...

\[08:06\] But if it's performing fine and if from the outside world that code is actually just doing its job well, it's just that when you actually crack it open and look at it it's gross, it doesn't really matter so much if it's working.

I mean, yeah, there's all kinds of things that people care about in coding, and style, and aesthetic, and stuff like this matters... But like you said, if you're not looking at the code very often, and there's no other glaring issue with it, like performance, or security, or it not being supported anymore because of the platform changing, or something like that, then it seems like there's very little reason to expend effort there.

**Kevin Ball:** Yeah. The big refactor that I've been working on recently, or recently wrapped up and now I'm looking at another one - they were both the other category. They were related to new requirements. In one example it was we have this service, it's great, except it doesn't enable streaming data... So when the number of things you're working with get large and you're updating lots of things at the same time, it gets really slow. And unfortunately, the way it was set up, it was really hard to enable streaming.

So we did this big refactor of the service, to in most cases behave exactly the same way, but expose one more layer, which would let you stream it if you needed to. I think, Mikeal, your examples of -- or even Divya's most recent, of like "Okay, Python 2 is being deprecated. You must go to the new version." That's gonna force some sort of refactor. What's your sense - is that a more common case, where it's new requirements forcing the refactor, or is it code smells, complexity and bugs?

**Divya Sasidharan:** I don't know if you can say it's one or the other definitively, because often there's a mix of both... And even in scenarios where there's one project being refactored, those two scenarios might exist for them to decide to refactor something; that has happened before in codebases I've worked with. It's a matter of like one technology is being deprecated, like in the case of Python, or even in the case of React, when you go from React 15 to 16, which was like a major one that happened... But then alongside that it's also like things were not as modular, things were not as well built maybe, and using React Hooks would make it better.

Essentially, it's a decision that the team or whoever is in charge of the codebase has to make, whether or not it's worth the time and effort... Because I think that factors in quite a lot. Because sure, refactoring is great and all, but like Feross was mentioning, does it actually add value? Because sometimes if a thing works... Like, refactoring is nice, but is it worth the time? Is it better for you to work on something else, like the user experience, or another project entirely?

**Feross Aboukhadijeh:** Yeah, sometimes I worry that the developer community is really into fashion, and refactoring for the sake of "Well, this code doesn't look like what modern code is supposed to look like these days... And the kids at school are gonna make fun of me if I write code that looks like this. I can't go to school wearing that. I have to fix it, or else I'm gonna get called out for being old-school", or something like that. That's not a good reason.

I think it should be more about discovering that you picked the wrong abstraction, and that this abstraction is actually just making your life harder when trying to solve this problem... So actually we're gonna redesign the way that this class works, or we're gonna redesign the way that this entire module works, because it's not exposing the right interfaces to actually help us get our job done. That's more of a legitimate, good use of time for refactoring.

**Mikeal Rogers:** \[11:54\] I don't know, it's sort of arbitrary how you distinguish between a lot of those things. Like, how do you distinguish between "it's the new hotness" or "it's a new requirement"? If you're building a new thing and you're using new stuff... Let's take callbacks and promises. You're building a new feature, so you're using the new promise-based stuff, and then you have to interact with some old library that is still callback-based, and there's some funkiness with it, so you need to refactor it for the new thing... That is a new requirement. There's a new usage of it that needs this new pattern, so it makes sense to just go on and refactor it. I think you could paint that either way that you wanted to, honestly...

**Feross Aboukhadijeh:** I wasn't subtweeting callbacks versus promises, I promise... \[laughter\] That is actually a new requirement, and that is about the interface fundamentally being different... So yeah, I would consider that legitimate, for sure.

**Kevin Ball:** It does create an interesting push/pull between - so we talked with Katie Sylor-Miller about Etsy's tech stack, and they had this whole principle of "use boring tech, use stuff that's not on the bleeding edge", because they are delivering products, they're not worrying about the bleeding edge. But at some point that bites you in the butt, because in the JavaScript ecosystem things move so fast... There have been legitimate, large improvements in the last year, two years, three years, and they're talking 5-6 years; like, how long do you let something sit just because it's working as it currently is, but it's continuing to stagnate, and be harder to find people to support, and be harder to extend, and do things like that.

**Mikeal Rogers:** Yeah, a lot of people say that same thing. \[unintelligible 00:13:33.18\] has the same thing, the "use boring tech" thing. I think that when you really nail down though what Brian does and what his team does, that's not actually how they operate. What they're really talking about is like it's fine to use the new thing, or even the next thing, as long as the thing that you're working on is actually the next thing, and not a thing that we're just gonna ditch in a few years, or it's going to change so dramatically that the way that you did it doesn't really matter.

It's fine to take new syntax, but if taking that new syntax requires a compiler chain that you wouldn't have used otherwise, it's probably actually not worth it, and just wait for that syntax to show up in the language that you're using and in the platforms that you're using natively.

A lot of people really bet hard on CoffeeScript, and that turned out to not be maybe the best bet, for a lot of those libraries. I think that you see a similar argument right now, going in both directions, about TypeScript. A lot of people think that everything is gonna be written with this in the future, and a lot of other people are saying "I've been down this road before, and it was called CoffeeScript, and it didn't happen." And enough of the features landed in the language that we just kind of forgot about it.

So yeah, I don't think that anybody really believes that you should only use the thing that everybody was using three years ago in the JavaScript ecosystem, because we know that anything that was super-popular a few years ago, we can see already what the next thing is beyond that. I think that what people actually object to is using a thing that THEY believe won't be around in a few years... And there's a lot of arguments about who was right about what's going to be around in the future.

**Kevin Ball:** One more quick question in this area of decision-making about refactoring... Is it worth drawing a distinction between a refactor and a total rewrite? And when is one the right answer versus the other?

**Divya Sasidharan:** Can you define those things?

**Kevin Ball:** I guess that's part of my question - when we're saying refactoring, are we including in our heads everything up to and including rewriting this thing from scratch, or is there a more contained definition there?

**Mikeal Rogers:** I'll paint a definition... One is literally a diff, so you can think of it like maybe a major diff, but you can still see how all the code got moved around. The other is like a new, clean branch, or a new clean repo, that is just a complete reimplementation, that is them presumably exposing the same, or a very similar API, that people can migrate to. So the end result is probably an API that is either compliant with the prior API, or only changed so much that people can usually migrate to it... But the approach to how you do it is a little different. You would either use the existing code, or you would just start with a clean slate.

**Divya Sasidharan:** \[16:12\] So then the idea for a rewrite - because it's a complete rewrite - would be that you can't gradually migrate to it. It's essentially you flip a switch just to turn from one thing to another. Because if we define it that way, a refactor can be done in chunks, where you work on certain pieces of the codebase. Obviously, it might not be as clean as that... But with a rewrite, because you're rewriting the entire thing, then you can't just be like "Use both versions!", because they'd be in different states at any given time...

**Kevin Ball:** Yeah, I think there's also sometimes a problem of -- like, there's a desire to rewrite because it is a blank slate, and you lose a lot of learnings, you lose a lot of stuff that maybe this thing that is kind of weird in the code was actually there for a historical reason that is not relevant, but maybe it was there because it works around an edge case that you haven't considered yet.

**Divya Sasidharan:** I actually disagree that you lose the learnings. I agree in terms of you lose the history of the learnings, because you're moving from one entire codebase to another, essentially, when you rewrite; you lose that linear history that happens when you refactor on top of an existing thing. But sometimes when you do a rewrite, you can take whatever you learned from building it the first time and apply it to the new thing, and it might actually make for a better product, just because you have a lot more experience, and there's a lot of feedback that you had from the previous way of writing things that you can build into the new application you're writing, without having to refactor it to reach that point.

**Kevin Ball:** Alright, so would there be any reasons to do one versus the other that you can think of?

**Divya Sasidharan:** Off the top of my head I feel like time is the one thing... Because every time someone wants to rewrite something, especially if it's a large app, which is kind of what we're talking about with large projects, that takes so much time. You might almost need a team just dedicated to that effort... Because whenever you do a rewrite, the assumption is you're rewriting an application that people are using, which means that you might also have to be maintaining that project that people are using... So there's a lot of things that are happening at the same time, and so it's a matter of like "Do you have the time and the people to work on it?" I think that's a big contender when you think of refactoring versus rewriting.

**Kevin Ball:** Feross, Mikeal - thoughts on this closing piece for this segment?

**Mikeal Rogers:** I'm always just skeptical when people say "Oh, we're gonna rewrite everything (in a large app) and it's gonna be way better." I've just seen it go off the rails too many times, and take far longer. I tend to like iterative approaches to refactor where different parts are done in pieces, and can potentially more easily parallelized between different people, and communicated well, and tested independently.

That's another thing, too - when you approach something iteratively, it encourages you to write tests and to deliver things in an iterative manner, and often when you need to do a refactor, one of the big pain points is that there weren't enough tests... So that pushes you in the right direction.

Whereas when you just go off and rewrite it from scratch, people who didn't write tests before tend to not write \[unintelligible 00:19:26.22\] It's just the same problem all over again.

**Feross Aboukhadijeh:** Yeah, I wanna echo Mikeal. I feel like the tendency of programmers is probably -- like I said before, you can err to much in one direction or the other direction, in terms of refactoring too much or not enough... And I think a rewrite is just a more significant refactor, really, in terms of the definition of it... But it's probably worse to refactor too much, I feel like, in terms of just getting things done.

\[19:55\] I feel like, as programmers, we just look at code and say "Ugh, this is so hard to understand." And that's because it is actually harder to read code than to write code. That's just how it is. So it's gonna be annoying to read someone else's code, and the instinct to just throw it all away and start over is very strong. It's probably, a lot of the times, a mistake... That code might be gross for a reason - because those gross parts are bug fixes, or learnings that ended up in there over time, that will cause problems if you just throw it all out and start fresh.

And the tests are also a big issue, too. You won't write tests if you're just completely throwing everything out... So yeah, I would just say be careful when you feel super-strong feelings about throwing things out and starting over.

**Break:** \[20:48\]

**Kevin Ball:** Let's talk a little bit more about refactoring now, digging into approaches and tactics to make sure that your big refactoring project is going to be a success. Given that we talked a lot about tests in the last section, I think that will probably feature highly... But let's throw the question out first to Divya - when you're about to take on a big refactoring project, how do you approach that? What tactics do you use?

**Divya Sasidharan:** I feel like this seems obvious, maybe not... One of the things I do is I try to basically isolate the piece that I'm trying to refactor, and then perhaps writing tests to cover those use cases, to be like "This is kind of what it does at the moment." And it works as well for documentation for me, as I'm refactoring it, to figure out what exactly I'm doing. Because oftentimes when you refactor and you go very deep down a rabbit hole, you lose track of why you were doing it in the first place... So sometimes for me being able to write down what I'm doing in the form of a test allows me to isolate that piece of work, and also to make sure that when I refactor, it does the thing that it was doing before. Maybe it's a little better, maybe it's the same, but slightly easier to read...

But it also keeps me on track, because oftentimes when I refactor - and this happens a lot - when you're refactoring one piece, you realize that there are other pieces that need refactoring, and then you just start going and touching every piece of the codebase... And then there comes a point where everything is a jumble of all kinds of diffs. One, the Git history looks like crazy, and two, your refactor no longer works. So you refactor a bunch of things, but things don't work as expected. So there's weird edge cases that happen.

So for me, that's one of the very important things I do. It's almost like test-driven refactoring, just because it keeps me in check, it makes sure I do the thing I'm supposed to be doing without getting distracted really easily, which happens...

**Feross Aboukhadijeh:** \[23:42\] I really like the idea of doing it in phases. I think in a case where you don't have tests, which - you shouldn't do that, but say you have a codebase that doesn't have tests and you need to refactor it anyway... If you do it in stages and you refactor one function, or one file at a time, and each of those goes into a commit and then a pull request, and you go through a process for each piece, doing it piece-by-piece, then at least later on if a bug is found and somebody says "Hey, this part of the app stopped working" or "This function now has a bug when I call it this way", then you can write a test for the bug that they've found, at the time that it's reported, and then you can use Git bisect to basically find the commit where it was introduced.

Then you can be like "Okay, I must have made a mistake when I was editing this particular function, or this particular file", because you can isolate the exact commit where it was introduced once you write that test later... But if you just did it all in one giant commit, then when you do Git bisect you're just gonna be like "Oh... So when I did that big refactoring and changed every line of the project, then I must have introduced the bug there." And you don't really have an option to just revert; I mean, you could revert the entire refactor, but then that's just like you wasted all the time, and you're gonna have to now look through it to find where the bug is...

Whereas if you just did a commit at a time for each little piece, then it's not that hard to either just revert that one piece for now, until you can figure out what the problem is, or to find the bug in that small piece, because it's not that many lines of code. It's much easier to find. So I don't know... That piece-by-piece is definitely the way to go

**Divya Sasidharan:** I also find that if you're working on a team that's working on a codebase, that's working really well, because when you're refactoring there's often a specific GitHub issue associated with that refactor, and then when you do a pull request to the main codebase -- one of the things that I've done, and I do regularly, is that whenever you submit a PR for a refactor for a specific thing, there's a testing strategy that goes into it, to be like "Test that this thing works, test that this thing works..."

And having someone else look at the thing that you're working on, or that you worked on, gives you a second opinion on whether or not it's worth refactoring... Because there have been times where I refactored something, I created a testing strategy in the PR, and it's been rejected... Because what I thought needed to be refactored was not something that was worth adding to the codebase, or was not worth integrating into the project itself.

But overall, in the event that it was, it's useful to have that history... Feross, you were mentioning having that Git history, but also having that history in GitHub. Because I can look at a closed issue and I can see at what point a specific feature was refactored or worked on, and just trace back really easily... And for me, that's much simpler than using Git bisect.

I find Git bisect very confusing, personally. There have been times where I made very small commits for things... Which is great, but then when you use Git bisect there's just all this history you have to go through, and then I lose where exactly I am, and then tracking makes it really hard. I'm sure tracking is supposed to be easy with it, but maybe it's just the task of having to go through all of your history, and finding the one thing that introduced a bug is quite a big one.

**Kevin Ball:** It's one of my objections to Git squash, because you lose a lot of that history. If you do small PRs, okay. If not, it can be a problem. I definitely have a tendency, if I'm doing a large project, to do it all in a feature branch, and keep that branch up to date, but then if I squash it, bisect just goes away.

**Divya Sasidharan:** Yeah. Also with large PRs, the one thing is it's a headache for review, and no one wants to touch that. And then the other thing with feature branches - which can be good - is just like, again, it's isolated to the refactor or the task that you're working on... But the downside is that with feature branches, especially if it's an ongoing task and you're just constantly working on it - you have to really be on top of making sure that it's up to date. Because if it's not, it goes stale really quickly, and then when you try to rebase to master, or whatever - make sure that it's up to date with master - you get all kinds of conflicts, and that's such a headache. When that happens, I generally just burn it to the ground and start again, or just cherry-pick the commits I want and then start all over again. So that's something to keep in mind if you do that kind of approach.

**Feross Aboukhadijeh:** \[28:16\] Yeah, if your team isn't already sold on the refactor, then certainly sending a small PR that's changing one file and saying "What do you all think about this? This is the world we could be living in. Wouldn't this be so much better? Look at this one file I changed..." But if you just change every single line in the entire project and say "Guys, isn't this great?", people are gonna be like "What?! No, I can't understand anything", and it's extremely intimidating to review it.

And also, this is a really important pro tip when you're refactoring - don't refactor the tests and the code itself at the same time, because then you're not actually testing anything.

I've actually been dealing with this a little bit, because I've been refactoring a lot of my code from ES5 to ES6, modern class syntax and stuff, a lot of old, old packages... And it's tempting to just run a tool across the entire package that just turns the whole thing into the new syntax for you, or to just do everything at once if it's a relatively small package, with a couple hundred lines... But the problem is if you refactor the package and then you also refactor the tests, and you introduce a bug in the tests at the same time, the tool changes something wrong in both the package and the tests, and the bugs can cancel each other out, and it'll look like there's no issue. The tests will just pass.

So you need to really keep the tests completely unchanged and fixed while you're refactoring the code in the project, so that the tests are actually confirming that yes, it worked before, and yes, it works after. So that's just something to keep in mind... It's kind of obvious when you think about it, but it's easy to forget.

**Kevin Ball:** 100%. I think there's actually multiple things that you should do orthogonally. Tests is one - work on the tests at one point, one commit, make sure everything's working. Structure, and then functionality. If you're doing the refactor because you want to enable some new functionality, you should not add that new functionality in the same commit or same block of work as you're restructuring how things work.

I wanna explore a little bit this idea of doing things incrementally, and how you approach it. Feross, you mentioned "Do one file", and it's the new approach; or maybe it's using a new library, or something like that. In a really large codebase it's pretty much impossible to refactor everything. So you're gonna have to do some sort of incrementality. I've seen people use this walled garden approach, where they're like "Okay, here's the good section that's onto the new approach", and things move there over time, and once it's in there, it's gotta stay in the new version... Or inversely, like "Here's the section of code that is old and shall not be touched and shall not be moved to the new version." What have you all used for that?

**Feross Aboukhadijeh:** Well, it's easier to do the walled garden approach if you're using a lot of packages to build up your application... And I know this is not that common of an approach for building an actual web app; it's more common in the open source world, in open source libraries, where those are composed usually of a lot of packages... Because there you can just say "We're just gonna refactor this one package for now, and then we'll do the next one after that, and the next one after that." So it's kind of like pre-decomposed for you, in a way. It's easier to do.

I have less experience doing it on a very large web app, where it's all in one repo, and you have maybe a framework that's tying everything together, so it's hard sometimes to be able to just like move to something else... Say you're switching frameworks - it's hard to... Like, I have no experience in doing that while the app is still functional, where you have half React and half Vue, or something like that. But yeah, I'm curious what other people have run into with that, and how they've dealt with it.

**Mikeal Rogers:** \[32:00\] I had one recently that's kind of interesting... I had a couple of packages where in order for it to be really useful it has to ship with a lot of dependencies that really kind of blow up the bundle size... So you wanna have the default, in Node in particular, have all this extra functionality, but also when people care, you really need to be able to pair that down and just ship with the things that they're gonna use and need... So you have this big contrast between the two use cases.

When I did this in a refactor, what I ended up doing was creating a new import endpoint, that was /module/bare, and that bare import doesn't give you any of the other functionality. You basically have to configure it with different function calls. And then I just updated the main export, the default, so that it didn't break compatibility, to just import that bare version, and then add all the things that it adds... And that seems to actually work really well, and \[unintelligible 00:32:52.02\]

I had a similar situation, in which they realized that in order to actually be "safe" about some operations, we had to do a lot of extra memory allocations... So I ended up doing the thing that Node.js core does, which is the default API does all these extra memcopies, and then there's also paired functions beside it that are called unsafe, that do the unsafe things. And then both of these libraries - it was really important that I had 100% test coverage in both, just so that I knew that I was actually hitting all the code paths for all these \[unintelligible 00:33:22.08\] That model of refactoring seemed to work really well when I needed that new functionality but didn't wanna break compatibility.

**Feross Aboukhadijeh:** I like that bare approach that you mentioned.

**Kevin Ball:** Yeah, I like that. I think layering as well... In the project that I did recently - it was exposing a new API... But as I built out that new API, first I built it on top of the old API, and then I inverted it. The reason was to enable new functionality the old API didn't... So I did the first version saying "Okay, this implements the functionality, but it doesn't get the performance benefits we want. It's implemented on the top of the old one. Rework the internals, so that it can do more powerful things. And now rebuild the old API on top of the new one", if that makes sense.

People who are utilizing the tools can choose to go to the new version, or in your case they can choose to go to the bare version, but they can also still use the old API, even if I've totally ripped out the internals of it.

I'm curious - Divya, do you have any experience with the front-end multi-framework migration? Because that is something that I see happening in a few places. It's actually happening at my current workplace, but I haven't been super-involved in it, and I think there's some trickiness to that.

**Divya Sasidharan:** Yeah, I haven't worked on that kind of a thing per se, because oftentimes when I've worked on codebases we've already picked the technology, and we just move along with it... But it's often -- whenever we work with different frameworks, it's on different projects, so it's not in the same codebase, thankfully... Although it has happened before. I wasn't part of this project, but Netlify used to be an Angular application, and now it's a React app... So there was a huge refactor that happened from Angular to React, but I can't speak to that, mainly because I did not write any of that code, and I wasn't part of that process at all. This was, I think, 2016... So it's been a couple of years.

**Kevin Ball:** Yeah. I've definitely seen situations where you're embedding components from one inside of the other, so there's like a component-by-component migration process that sort of models the isolated process that we're talking about when it comes to packages.

There I think it was usually touching things as they needed to be changed, rather than doing "Oh, this functionality needs to change. We're changing the UI. We'll build the new version in (for example) React, instead of your Angular", or whatever you're coming from. But I didn't see as much of "Here, we're gonna exactly replicate that old component using the new framework."

**Divya Sasidharan:** \[36:12\] Yeah, I don't actually think that's possible, because every framework has idiosyncrasies to them... So if a component is written in Angular, and you wanted to move it to React or Vue, you would have to take a different approach. It's not a one-to-one.

So any framework saying it's just JavaScript - it's just a lie, because it's not. If it's just JavaScript, it would be very easy to move from one to another, and it's not, because it's very specific. So yeah... If you were to write it and move from one to another, it's always tricky, I haven't heard examples of that process being smooth. It often is very clunky, it requires a lot of work, and a lot of planning... Because it's a rewrite, it's not a refactor at that point. Or unless a rewrite is a subset of refactoring... But yeah.

**Kevin Ball:** Alright. What about other tactics, approaches, or gotchas that you've run into in big refactoring projects? Mikeal, I feel like this is an area you have a very opinionated approach to development, with lots of small modules, so you probably have a different approach to this than folks in the massive monolith repo area... What challenges have you run into, or what gotchas would you highlight for folks?

**Mikeal Rogers:** Funny enough, one of the things that the JS IPFS team is doing right now is moving to a monorepo... Because it actually just got too complicated to have a lot of things in external modules, that were really only consumed by JS IPFS, and didn't really have a good reason to be outside of it.

I mean, they do need to be separate modules, but they shouldn't be in separate repos, because it just ends up being too hard to coordinate all the changes to them. So there are different approaches that you can take for different situations, and that is actually all part of another massive refactoring that's happening in JS IPFS.

Having small modules really helps you when you're refactoring. I would say that as much as we say that this helps with refactors, what usually ends up happening with small module authors is that they just write a new module. Half the time it's just like "Okay, that old thing was working, but I need a new thing, and it's a big enough API change that - why don't I just write a new library?" And actually, I think that that's one of the benefits to the small modules approach.

Sometimes, instead of using my old library, I use somebody else's library... Because it matches the patterns that I'm building towards better. And because I broke things out into smaller components, it was easier to adopt a different library and swap something out, or write a new library if I need to. So yeah, that always helps; that always makes it easier.

I think that if you have -- the more monolithic your software is, the harder that it is to update and increment in any way, and this is a case in which it's particularly difficult. At the same time, if you have a large application built out of all these tiny things, the challenge is then coordinating all those changes up. So if you have a refactor in one area that has implications throughout the entire \[unintelligible 00:39:09.22\] that update is really painful. Incredibly painful. I find it's easier to just set it aside and do the whole thing in parallel; basically, ship a new version of the entire stack... Because it is quite difficult.

**Kevin Ball:** Interesting. I feel like there's a couple of things to unpack there. First off, your statement about essentially just rewriting a new module. Is that in your mind what leads to the many old, unmaintained modules problem that we end up in JavaScript?

**Mikeal Rogers:** I mean, is that a problem...? This is like a tree falls in the forest and nobody's there to hear it problem. It is not a problem to have modules that nobody cares about or uses in the ecosystem.

**Kevin Ball:** Well...

**Mikeal Rogers:** So if nobody new is adopting it, then it doesn't actually have much of a maintenance burden, and nobody really cares and they can just move on to the new thing. I think that it's only a problem when a lot of people depend on a thing that is old, and they're actively depending on it, and it's not maintained.

**Kevin Ball:** \[40:09\] Yes.

**Mikeal Rogers:** That's a problem that you get in any ecosystem, because that's a sustainability/governance issue. That's not even a problem with the size of something, right?

**Kevin Ball:** Well, yeah, but if your general tendency is "Oh, I need something different, so I'm going to do a new version", rather than "I'm gonna maintain and update this old version..." I feel like that's kind of what led to the EventStream situation.

**Mikeal Rogers:** \[unintelligible 00:40:30.17\]

**Kevin Ball:** The original author had moved on three times, or something like that. He's like, "Yeah, this doesn't work for me anymore. I'm gonna do a new version." He was done.

**Mikeal Rogers:** Yeah, but that is a better approach than breaking compatibility in that module. Because a lot of those changes that he did in those new modules were different enough approaches that they would have been backwards-incompatible API changes.

So it's actually less useful to people that depend on a library to take a big, breaking API change, than it is to just build a new library. Because nobody maintains those old, major versions after they've pushed a new major.

So they're effectively saying "Not only are we not maintaining the old one, you don't even get to update it. We're not really taking patches to update the old thing anymore." At least when you go and build a new thing, and you say "The breaking API compatibility is over here in this new thing", other people can go update the old thing, that wanna stay on the old thing.

**Kevin Ball:** Interesting. So it increases fragmentation, but that could be good thing.

**Mikeal Rogers:** Oh, definitely. We've had a lot of painful upgrades in the JS ecosystem, of moving to all these new patterns, but the one thing that has actually made it not as awful is the fact that everything is so fragmented, and moving to new versions of a lot of these pieces in the new library is actually not as difficult as it would be if we had a lot of really, really big frameworks.

Python - it's been over a decade of them taking relatively modest breaking changes, to be fair, and it's still a problem. We've gone through -- what is it now? We're on like the third set of pattern breakages across the Node ecosystem, and things are mostly working.

**Kevin Ball:** The Python case is astounding to me still. I don't understand the reasons behind it, but it is an astounding example of how badly things could go.

**Feross Aboukhadijeh:** Yeah. I know Mikeal has a lot of thoughts on that, actually...

**Mikeal Rogers:** Well, I was using Python when that breaking change was taken, and so... That was one of the many things that led me to move to Node and adopt Node when Node came out... Because it wasn't just that they were breaking compatibility; they were breaking compatibility to resolve none of the problems that people had with Python, and in many ways made a lot of them worse... They didn't deal with concurrency, they didn't deal with the performance of the VM, they actually made the VM slower...

All the feedback that people who were using Python had about the language and the platform at the time were just not addressed by it; that was my main problem with it - there didn't seem to be alignment between the core team and the ecosystem... And I think that that's one of the things that made the upgrade so painful. Not only is this a breaking change or we have to update a lot of our code, but it's slower; why would we take it? And it doesn't address the actual problems that we have, that we're over here trying to solve... So yeah, I don't know. I don't think that we should index too much on that; I think that other languages have done breaking changes that have been much more successful.

I think in JavaScript we don't really break, we just take entirely new parallel patterns, that make the language incredibly large... \[laughter\] And then we're like "Yeah, everybody should use this now." It's worked surprisingly well. I'm honestly impressed with how much of the ecosystem has migrated to these new patterns. We effectively have a new language... And the old language is still there, but most people don't use it or learn it.

**Kevin Ball:** \[43:58\] Yeah. It is a fascinating example of how the legacy was the web, and the fact that JavaScript came out of the web has influenced that, right? Because the number one rule is "You don't break the web, because there's lots of old stuff that has to keep working." So you end up with this situation where anything that is a breaking API change becomes essentially maintained in parallel.

**Break:** \[44:25\]

**Kevin Ball:** Alright, let's talk pro tips. How to make your life, your career, your coding, what have you, better. We're gonna start with Mikeal, because over the break he said he had a couple different things, and that's gonna give Feross more time to think about it.

**Mikeal Rogers:** Cool. So one is that -- so there have been like a half dozen popular package managers for Vim, and all of them were kind of annoying to work with, and a lot of them really leveraged Python... Which is fine, Python is a fine language, but it actually doesn't have great startup performance \[unintelligible 00:45:33.23\] performance really lacking in those systems.

It turns out that Vim actually has a native package manager called Vimpack, that I didn't even know about. And the way that it works is that you just put a bunch of stuff in this directory, and then it just works. When you put it in a start directory, it starts up. And it's a little bit annoying to configure, but it's really nicely repeatable. This fits really well with the way that I build out my dev environment, which is through this development container.

So I now have a repository /mikeal/dev-vimpacks, and this is just a Vimpack. I actually only use one right now, which is called nerdcommenter. But that is now what I put -- it's part of my container build process, where I pull that in and put it into each container, so that I have all of those Vim modules there.

So there's no external shell calls, or anything, and no messing around with the .vimrc file... It's literally just "put things in this directory", which is great.

And then I think secondly - I may have mentioned this a few times, but I've started to rethink the way that I approach programming as a practice, and part of that has been kind of debugging my own mind, and thinking about the different states of mind that I'm in while I write code... And I started to document these a bit, because as I talk to other people about dev setups and choices and things like that, it's good to get on the same page in terms of language. So /mikeal/way-of-code - I've started to document that.

Essentially, there are three states of mind that you cycle through while you program, and each state of mind actually lends itself to very different tools and workflows, so that's an interesting thing to check out. Some people have been asking questions as well, but I've been answering in the issues, and whatnot. So that's about it.

**Divya Sasidharan:** Cool!

**Kevin Ball:** Awesome. Divya, are you ready? You look ready...

**Divya Sasidharan:** Yeah, I can go. One of the things that I've been doing a lot this year, in line with making resolutions -- I didn't really make any resolutions, but one of the things I've been forcing myself to do better is I tend to push tasks that I don't want to do to the next day for eternity, until I actually really have to do them. That includes planning for travel, if I have to go to a conference.

\[47:53\] I generally plan for travel not as early as I should, because I just really hate the process of doing that, and it adds to a lot of anxiety, because I just generally keep thinking about the thing I should be doing, but I don't want to do, even though I have the time... Like, I may have a pocket of time that I can work on it and I don't, because I'd rather do something else.

So one of the things I've been pushing myself to do more is just to do the thing. So just send the email, it's not that hard. And what helps with that is to write down... In the morning I'll just write down all the things I wanna do, including all the micro-tasks. It really helps to write it down, because then I can see what I need to do for the day... Including big tasks. So if I need to write a blog post, or create a specific tool, then I can work on those, because that takes up a lot of mindspace.

But then when there are breaks in tasks that I'm working on, I can just look at the micro-tasks that I need to do and do those, which actually adds to me getting things done more so than if I just don't write them down, and try not to think that they exist... And that's really helped me just to manage anxiety with not doing the things I should be doing, and also making sure that I'm tracking progress. Because it's nice to be like "Oh, \[unintelligible 00:49:05.24\] two large tasks, but I did like ten micro-tasks." That's actually really satisfying.

And then alongside that is also an eternal goal of mine has been just to write a lot more, because I don't write often. I tend to get into rhythms of writing a lot and then not writing, which might happen again... But for this month I've been blogging every day, and the way I've done that is through micro-blogging. Essentially, instead of expecting myself to write a really long blog post, I'll write a tiny one, and publish that. I've been publishing to dev.to, and specifically given myself an area of focus. It's January, so I created a blog series called JAMuary, where I talk about JAMstack... Because puns are fun.

It's been great, just because (again) it's a task that I do every day. In the morning is generally when I write, so I can sit down, write for 30 minutes to an hour, and that gives me -- like, 1) I'm accomplished, because I did a thing, and I published it in the world, and then that accomplishment - I can just ride that wave of getting things done for the rest of the day.

**Kevin Ball:** Awesome. I'll go next, and then we'll close out with Feross. My pro tip is to identify the things that you wanna be learning and growing on, and then do everything you can to move the process of doing the learning and growing there out of volitional, something that you're deciding to do over and over again. So set up commitments and habits that are gonna force you into a pattern of growth for those things.

The best example I have for this was when I first started working on speaking and public speaking; I signed up for Toastmasters, I would go every week, regardless of whether or not I had something ready... I would go, it would force me to speak, it would force me to do things. Sometimes I was signing up for things that were volitional, but regardless, the default was to go, to put myself in an environment where I'm practicing, where I'm learning, and where the environment was gonna encourage me to keep making progress on this thing that I had decided that I wanted to... Because willpower is hard, and anything that you set up to require willpower will probably not happen, and it will quickly fall off.

So commitments to other people, and habits where you just go and it's not a decision, it's just something that happens, make a huge difference for your ability to actually continue to learn and grow. And if there's anything we know about our industry, or the way the world is going, we have to continually learn and grow if we want to succeed. You have to keep moving in order to even stand still, much less get better...

So identify what it is that you are working on right now, what is your learning path, what is your growth path, make the decision once, sign up for something that happens every week, or every month, or every day, so that it's no longer a decision you're making over and over again to learn, it's just a part of your routine.

And let's close with Feross. Feross, pro tips for us?

**Feross Aboukhadijeh:** \[52:09\] Kball, you should have gone last... That would have been the perfect one to end on. \[laughter\] My pro tip is along the lines of what you're saying, Kball - it's actually to get in the habit of learning one new things a day. It's a thing you can incorporate into your workflow, so that it's not a thing that you have to go and spend a whole day learning a new thing, but it's like - while you're doing a task, if you can find one part of it that can be slightly improved or slightly optimized, and if you just keep doing that over a course of a long time, that one small habit ends up leading you to a place where at the end of the year you've learned a whole bunch of little things and you're much better.

So along those lines, I have a concrete suggestion of something that's really powerful. I'm sure a lot of the listeners know about bash aliases, or whatever shell you use, you can set up aliases, so that you can type little shortcut words that will end up running a much longer command. If you don't know about that, check that out; it's a really powerful way to save a lot of typing for commands that you type really frequently.

Stuff that I type really frequently are things like Npm start, or Npm test... And so for those I have little aliases where I can just type the letter T to run an Npm test, or you can type the letter U to run Npm update... And little things like this, that I do frequently throughout the day, are just much faster now, and a lot quicker to type.

Also, a really cool alias that helps me publish a lot of packages is I have little aliases for publishing new versions, because there's a whole set of steps that usually you need to run when you do that. Things like making sure that the current working directory is clean, you don't have changes that are stages, checking what files are gonna actually be included in the package, running Npm install and Npm test and making sure the tests pass, actually incrementing the version and making a commit for that, setting a Git tag, and then running any build scripts that may be present, or updating the authors if you have an authors file... There's a whole bunch of things you can do. And then finally, actually pushing that out to Npm. I have all of that behind a single command, which is really cool. So I can literally just say "patch" or "minor" or "major", and then a whole series of things just gets kicked off, and it feels really powerful to be able to do that... So that's a huge pro tip for me.

And if you ever wonder how some Npm authors can publish 20 or 50 times in a day, this is how they're doing it. They're not superhuman, doing things constantly. They have a giant script that's basically running, that's doing all of the little things for them that makes things appear to be really fast... So that's my pro tip.

**Mikeal Rogers:** I don't even run this manually, I just have GitHub Actions do it. \[laughs\]

**Feross Aboukhadijeh:** Always one-upping me, Mikeal. You've always gotta one-up me, man...

**Mikeal Rogers:** \[laughs\]

**Kevin Ball:** Yeah, I read an article recently about how the combination of a cumulative advantage and winner-take-all effects means that oftentimes even 1% improvements - if you're 1% better than the competition in something - you can get disproportionate benefits, whether it's double the effect, or 100% of the victory, or what have you. So these little micro improvements over time - they add up and make a massive difference in your productivity and success.

Alright, with that - I think that wraps up our JS Party for the day. Thank you, everyone, for coming. Thank you Divya, thank you Feross, thank you Mikeal. This has been a lot of fun, and we'll catch you next week. This is Kball, signing out.
