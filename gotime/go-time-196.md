**Kris Brandow:** Welcome to Go Time! This week we're gonna be doing part two of our multi-part mini-series on maintenance and the importance of maintaining our software. As I said in the first episode in this series, we talk a lot in this industry about innovation, about greenfield projects, about prototyping and hackathons, but rarely do we talk about the longer side of things when it comes to software - the maintenance and the long-term prospects of it.

This week's episode is going to be focused on building actually maintainable software and what goes into that. This week. I am joined by Sam Boyer. Hi, Sam. How are you doing?

**Sam Boyer:** \[04:12\] I'm lovely. How are you?

**Kris Brandow:** Great! And to give you a little introduction of Sam - Sam is a principal engineer at Grafana Labs, where he just switched teams to be responsible for Grafana's Go backend. The team is nominally in charge of around 250,000 lines of code. That's a huge amount of code right there... Sam thinks a lot about code evolution and quality, usually under the umbrella of package management, an area he's been working in for the better part of the decade, as I'm sure many of our listeners are well aware of.

I'm also joined today by Ian Lopshire. How are you today, Ian?

**Ian Lopshire:** I'm doing great.

**Kris Brandow:** And to give you guys an introduction of Ian - Ian is a senior engineer at Timehop, where he's responsible for keeping Timehop's Go backend in working order. Timehop integrates with multiple social media platforms to surface millions of user photos and posts each day.

**Ian Lopshire:** It's like your own little day in history.

**Kris Brandow:** Yeah, I remember Timehop from back in the day... You guys are still going strong, it seems.

**Ian Lopshire:** Yeah.

**Kris Brandow:** And I'm also joined by my fellow host, Johnny Boursiquot. How are you doing today, Johnny?

**Johnny Boursiquot:** Not too bad, not too bad. I bring hot takes, so...

**Kris Brandow:** Yeah, I'm ready for some Johnny hot takes.

**Sam Boyer:** I thought of a couple unpopular opinions, but if you have extra to spare, maybe I'll just lean on you for those, Johnny... \[laughter\]

**Johnny Boursiquot:** Plenty to go around.

**Sam Boyer:** Excellent.

**Kris Brandow:** There's gonna be a lot of unpopular opinions in this episode, I feel... \[laughter\] Alright. So with that, let's get into talking about maintenance and how to build maintainable software. I wanna start with thinking about how do we build actually maintainable code for new codebases... Because there's some maintenance you do for old codebases, but then you have new codebases, and we always start with these great ideas when we make a new one... But rarely are we thinking about what's it like when that codebase actually goes to production, what are the steps to get toward it.

So I guess we can start with -- let's start with you, Johnny... What are the things that we should be thinking about when we build a new codebase and we're aiming to get it to production, from more of like a maintenance standpoint?

**Johnny Boursiquot:** Well, that's the thing, you don't know if whatever it is that you're working on is going to be around for the long haul. So we have this assumption that all the pieces of code that we write is worth getting all production-ready and everything else, all the time... And that's really not true. So as you say, a lot of times you start out with basically doing some prototyping, some R&D... It is an unfortunate fact that a lot of times, due to business pressures, or timelines, most of the time manufactured timeframes for things, the stuff you have ends up going to production and you're like "Man, we really didn't do all the due diligence necessary", or all the prep, all the operationalization, all the production-readiness that should have gone into this. It was just a prototype, and now management wants it to be deployed, and whatever it is. So you're playing catch-up now.

But in the ideal scenario, you figure out basically what is it that I'm tasked with building, and making sure that everybody understands, "This is the scope of this work." This is really -- it's meant to show you something. Maybe you're trying to determine product market fit... Is this thing real? Does it have legs? Whatever the case may be. But with the intention of actually making it ready for production. These are very separate steps. When you're exploring and when you're making something production-ready, these are very, very different things. Again, it's unfortunate that a lot of times the play, the toy ends up going to production... But yeah, you've gotta basically ask yourself, start out by saying "Hey, do I have an agreement with whoever's asked me to build this piece of software? Do I have an agreement on where this actually needs to go? Is it a toy that I throw away at the end, or is this it? Because there's gonna be very different approaches with these things.

**Kris Brandow:** \[08:02\] Yeah. That gives me a lot to think about, man... You just started unwinding--

**Johnny Boursiquot:** I told you, man, I bring the heat. I told you. I mean, I've got opinions about this stuff.

**Sam Boyer:** That's the start of the diverging path though, right? We can all imagine the best of intentions for making things maintainable over the long-term... But those pressures exist at all times. And certainly, I don't disagree at all. That initial stage - you don't know if the thing that you're making is trash or not. And the only way to figure out if it's trash is get it to the point where it actually runs, and see if it's not trash. And the faster you get to that point, the faster you figure out whether it's actually worth putting the effort in.

So my only point is to say I agree, but I think the point there is that the diverging tensions between a sort of high-quality or maintainable codebase - and I have a thing to talk about whether we think those are different things later... But I think those paths start diverging right from the beginning. Is it a high-quality, maintainable codebase, or does it do the job? Resources are finite, time is finite, and I think it's a good point; those pressures are there right from the beginning.

**Kris Brandow:** Ian, do you have anything you wanna say?

**Ian Lopshire:** Yeah, it's kind of along those same lines. I think an important piece of the beginning there is "Is this something that we can actually solve with software?" I've been in the situation where you've gotta build a piece of software to automate something or do something, and it turns out the edge cases and the error cases are just too numerous, and it's more of a headache to fix those than it is to actually just manually do the work... So I think at the very beginning you're gonna kind of start with an actual solvable problem.

**Kris Brandow:** Okay. But let's say that we've already figured out that -- we have some code; we wrote some code, we prototyped, we're like "Okay, this idea is solid, and we can go forward with it." At that point what should we be doing, what should we be thinking about to make that codebase more maintainable? Are we saying that perhaps we shouldn't be focused on maintenance in these earlier times, and we should be trying to focus on it later? How do we start to strike that balance there? A lot of us go into companies, and whether it's moving from monolith to microservices, or just you have microservices and you're starting a new one, and as Johnny and Sam said, there's always this hope - there's this green field, this whole new path you can go, and there's all these different directions, and there always is that trade-off of time, as you also brought up, and constraints... But there's obviously a trade-off at some point where if you don't maintain, then you're gonna have to wind of throwing this whole thing out, and then all of that time you've put into it is now gone, and you have to start all over again, and pay those costs all over again.

So is there a point, or is there, I guess, some signal or some way of knowing at what point you should start focusing a little bit more on maintenance and stop trying to maybe optimize for those time, product features or whatever it is.

**Johnny Boursiquot:** I think we need a definition for what maintainable is at that stage, right? Because if I'm speaking from a developer -- like, the person writing the code standpoint, my idea of maintenance is perhaps different from, say, an operator's viewpoint of maintenance. And again, there's a subtle difference - well, in a lot of cases not so subtle - between operating a piece of software, that you and other teammates have written, and making that easy to operate, easy to maintain from an operational standpoint, and then there's the aspect of "Okay, I'm working on a problem domain. I don't know what business they're gonna throw at me next. I need to structure my code, and perhaps follow some best practices and design patterns, whatever the case may be, to be able to extend the software easily."

So different kind of views on maintenance and maintainability over the long-term. And interestingly enough, different companies, depending on their stage of technology maturity, or engineering discipline and maturity - they're gonna be in different positions on that spectrum.

So I think really, you can't look at maintainability in a vacuum, on its own. You kind of have to say "Well, for us, what does maintainability mean?" And that's gonna vary from team to team.

**Kris Brandow:** I feel like Sam has something he wants to say about that.

**Johnny Boursiquot:** \[12:09\] Mm-hm... \[laughs\]

**Sam Boyer:** I'm not sure I can -- well, the problem is I think I hung on to something you said earlier there, Johnny, about the difference between operating and maintaining. Certainly, there are differences, but I've had a few thoughts swirling around in my head about what it means to do maintenance. Because I do agree, we need a definition for what that actually is.

My sense is that there are two fundamental ways in which we can think about maintenance. One is fixing bugs, and the other is adding features. And those two things have tensions involved, but what I was thinking about when you were talking was how -- I think there actually is a really important commonality between operational characteristics and development time characteristics. And to me, that's failure locality. It's the idea that I want the computers to tell me as closely as possible how the thing is failing, so that I can fix it. And that is true whether I am writing tests, because to me a good test is something where when it fails, I know right where to look, I know right where to fix, and that's not something that I need to rebuild a ton of context for or somebody else can come in and do.

Similarly when something is failing in one of its operational characteristics, I wanna know as closely as possible where to look, where to go. So I think there's a common principle there in terms of the way that we should be approaching making -- and that's mostly on the bug fixing side. Mostly, I think, at the bug fixing side.

But maybe where the paths meet in the woods of the two approaches - the bug fixing and the feature adding - is the extent to which your tests and your telemetry and whatever systems you have set up for consuming your operational information are able to tell you when the thing that you were adding over here broke some stuff over there, and \[unintelligible 00:14:05.07\] Because ultimately, what we're talking about here is like "Does the software continue to be correct or not, and how can you tell?"

But I apologize though, because like I said, it kind of took off like a thing you said at the beginning, and I feel like I missed the tail end of it, which is why I was thinking about biding my time... But then Kris called on me, so... I'm sorry. \[laughter\]

**Kris Brandow:** Ian?

**Johnny Boursiquot:** Ian's got some thoughts, too. He looks deep in thought.

**Ian Lopshire:** Yeah, so this idea of locality I think is important for maintainability as well. I feel like if we minimize the amount of unrelated changes that have to happen to make a desirable change that is maintainable.

**Johnny Boursiquot:** So because maintainability has all these facets, perhaps we can sort of come at it from the other way around. What would we call unmaintainable software? How do we define that? I think that's something we perhaps all might agree on as these are the sets of things in practice that make a piece of software unmaintainable, and I'm sure \[unintelligible 00:15:05.12\] we've probably seen a few, right?

**Sam Boyer:** I mean, you could start with anything you can lint for, right? Especially in Go, where there isn't a lot of disagreement about what should go into linters... That's a lot more common in other languages. But if you can lint for it, then yeah... Put basic docs on your functions and your exported members. Maybe don't have insanely short variable names for literally everything that you do... There's the minimum bar, right? And I feel like we can almost just put a checkmark on the list and say "Okay, if you can lint for it, maybe just do that from the start." Actually, I would loop back to the earlier question - even in a new codebase, throw the linters in as soon as you can. Maybe you can ignore and just write some dumb one-liners for your function docs, but don't make things harder for yourself. Just start from that and get yourself a nice little foundational baseline going of the basics.

\[16:02\] But I used words to identify the easy parts, so somebody else can talk about the other things that might be harder to agree on, about what makes a maintainable code... Because I think it's a great question. I think coming at this from a negative angle is a good way to do this.

**Kris Brandow:** Ian, do you have ideas on what makes unmaintainable code? \[laughter\]

**Ian Lopshire:** I mean, I do... I think fundamentally untestable code is unmaintainable. If you can't know if it's correct, you can't make changes to it... Some things that make things fundamentally untestable - heavy use of globals, that sort of thing I think is probably the biggest thing that sticks out to me.

**Kris Brandow:** I feel like there's something you said earlier, Ian, that I would classify as making software unmaintainable, which is - if we don't know what we're building, I feel like that fundamentally makes it very difficult for us to write software that we can maintain. If you don't know the scope, if you haven't sat down and written a scope, and written a design, then the resulting software... It might do what you as an individual thought the software should do, but that might be slightly different from what other individuals thought the software would do... And that's one of those longer-term maintainability problems.

If people have different concepts of what a specific codebase or a specific package or a specific function even is supposed to be doing, then when multiple people work on it over time, it kind of atrophies and it kind of falls apart... And I think we've all seen these functions that live in codebases that have just been hijacked to do something completely different from what the original author intended... And you're like "How did that happen?" I feel like that's upstream a scoping problem. We didn't properly define what this thing was supposed to do... And I feel like that fits in that category of gnarly things that Sam is just like "You did the easy stuff. This is a harder thing." \[laughter\]

**Sam Boyer:** Well, no, I agree, but I wanna ask a maybe annoying question there, which is -- so Ian said "Code is fundamentally untestable", right? How is code that's untestable different from code where the intent is not clear?

**Ian Lopshire:** It's not. If behavior is not defined...

**Johnny Boursiquot:** What if you're testing the wrong thing? You have tests; you test that the assumptions you've made, though wrong, pass your test.

**Sam Boyer:** Right.

**Kris Brandow:** I feel like there's that cyclical testing that people tend to get into with unit testing as well, where they test at the wrong level... And it's like, "Well, that thing is tested." You've tested it. It does the thing that you thought it was supposed to do, but the thing you thought it was supposed to do is not the thing that you actually want it to do. I think that's the difference there, as well... You as an individual, if you write the function and then you write the test, then I hope that the tests that you wrote have now confirmed that that function does what you want... But if you, Sam, and I, have two completely different ideas about what this function is supposed to be doing, we can both write tests, and those tests can both pass, but that doesn't solve that initial problem of scoping. This function itself is still not well defined. So I do think that they are divergent paths \[unintelligible 00:19:04.08\] one encapsulates the other. If you have untestable code, then you've most definitely probably scoped it wrong... But scoping it wrong doesn't necessarily mean that it's untestable.

**Sam Boyer:** Yeah, that certainly is the case. I agree, I do think there's a difference between these things, but I think that it's worth asking that question, because having a clear sense of what it is that this code is supposed to do, the boundaries within which it's supposed to exist is astonishingly important to actually trying to maintain a code... Especially as a codebase gets larger - should this function go in this package? Should it be a new package? Why? What's the logic by which we are grouping these things? Is there some broader theme that we can use to decide that this is how we actually organize our code? This is where we ought to look for something.

\[19:57\] As your codebase grows larger, you can't just kind of \[unintelligible 00:19:59.29\] your way through finding things inside of it; having larger patterns for why code gets grouped in different ways, having larger structural patterns, whether those are something formally defined by type-checkable interface contracts, less formally defined in terms of naming convention patterns, or really informally defined, but still very important in terms of general patterns and responsibilities, and like "We're gonna put a collection of packages under a single tree that are servicy-shaped, or something like that."

As your codebase gets larger - and take note for that intro bit, where I'm currently thinking about and mostly learning a 250,000-line codebase at the moment... And having patterns and structures like this I think do an enormous amount to orienting the maintainer, who inevitably, given a large enough codebase, you just have to assume that every maintainer is basically naive at some level about what's in some code... They do a lot to orient the maintainer towards intent, which is the first step towards being able to figure out what should be tested, which is the next step on the path to figuring out whether the thing does what it's supposed to do in the first place.

**Johnny Boursiquot:** So you don't wake up one day and have an unmaintainable codebase, right?

**Sam Boyer:** No.

**Johnny Boursiquot:** You're going with the same terminology that we've established. So you gradually get there. We've already sort of created - or at least identified - the nuance between correct code and testable code. The two are not necessarily the same thing. But I think to me, you start to gradually get towards unmaintainable code as you start to let your technical debt, which is -- that's not a bad word, that's not a dirty set of words, right? Technical debt is absolutely (I think, personally) necessary when you're evolving software, as long as you pay it back.

**Sam Boyer:** If you don't have debt, you haven't done anything great.

**Johnny Boursiquot:** Exactly. Yeah, literally. Technical debt is part of the currency that you have to trade for things... Basically, to pay an upfront cost for a certain feature, and then to come back and actually fix the things that really make it maintainable in the long term. So when you don't address your technical debt, you start to creep towards that unmaintainability, to the point where it's like, "Oh, man..." I'm looking at a codebase which has been out for a couple of years, and there's three different ways to do the same thing, with a slightly different parameterization. This one accepts an empty interface here, because somebody wanted to make it super-flexible, but they didn't understand enough about the problem domain, and now you end up having to create another one, with more specific -- you can see those sprinkles of just different people trying to solve the same problem in different ways, and not basically saying "Okay, we've done enough damage. We have an understanding of what it is that this thing is supposed to do now. Can we just take a minute, take a step back, take all the different ways \[unintelligible 00:22:48.11\] refactor for maintainability", as opposed to somebody coming in next week and saying "Now I need a slightly different version of this thing." Now you have four ways of doing the same thing.

So you start that march towards increasingly unmaintainable software... But is any software truly unmaintainable? That would mean that you can never do anything else to it... Unless you're basically on a code freeze... That's it, it's done; you're never touching it again. As long as software is delivering value for the business, you have to maintain it. So if you don't do the things you're supposed to be doing towards making something maintainable for the long term, you're gonna increasingly creep towards that unmaintainable -- like, increasing the unmaintainable state.

**Break**: \[23:30\]

**Sam Boyer:** Have you guys heard the rant about the word "performant", and how it's a made-up word that doesn't mean anything? Like, is the software performant? What does that mean...? \[laughter\] How fast is performant? I ask it here because I think maintainable is the same kind of problem. The point is we're on a sliding scale here, and whether or not you would call something maintainable or unmaintainable - realistically, that's a question of how bad your day has been... But if you're being a little bit more high-minded, it's like, what is the appetite of the organization that I am in for allocating a bunch of time for being able to make changes to this thing.

So it is fundamentally contextual to the environment that you are operating in, in the same way that like "Is the code performant?" is actually a question about what the appetite of the organization is for accepting latency or whatever, along this particular path. There is no objective standard here for it, which is why, as you say, Johnny, it's this risk of the creep towards you can continually add things that might make it more maintainable, but maybe it would never necessarily reach there, or exogenous factors might change, like how many things are relying on that code that will suddenly have it be in that unmaintainable state, whereas before it seemed fine...

**Johnny Boursiquot:** I think you have a good call-out there, because I think the business is also on the hook for ensuring that there is enough, space, time, resources for keeping the software maintainable... Because if you don't - and as I'm sure we've all either experienced or heard, if you're never making room for improving your codebase... Not adding new features, not fixing bugs alone, but really improving the codebase to make it easier to work in, eventually your shipment of features is gonna come to a crawl... And everybody's scratching their heads, wondering "Why does it take 3-4 sprints of two weeks a pop to add just this one feature?" Everybody ends up scratching their heads, asking that same question, and the answer is always the same thing - well, we keep wanting to go back and fix these other things, but we never get the time, there's always a demand to ship this next thing, this is important, \[unintelligible 00:26:53.06\] Basically, the business is not caring about what it takes -- behind the things; it's things that they can't see. We're the engineers, we need to make the case for the time, the resources, the space to improve the codebase. If we don't do that, the business is not gonna do that for us automatically.

To them it's like "Hey, can I get this?" and you deliver. Then "Here's what's next. Can I get this?" Because they have pressures from customers, from stakeholders... As long as you keep giving them stuff, they're gonna keep asking for more stuff. If you don't fight for the space and time to make your codebase maintainable, easier to keep adding things to, that's how you get in trouble.

**Sam Boyer:** We had a discussion recently... We have a thing at Grafana called Gardening Week, which I had not heard referred to this way before; it's my first time hearing the term, but... You know, after we do a release, we have like a gardening week, basically. And there was a discussion about "Well, should we have a gardening week? Is it a bad thing that we have a gardening week? Wouldn't it be great if we didn't need to have a gardening week?" And my sense is that there are three -- I'm gonna try to pre-count the number of universes and then get it wrong... So I'm gonna say there's three universes, and then get it wrong.

\[28:01\] There's the universe where you don't have a gardening week, but you need one, you don't have a gardening week and you don't need one, and you have a gardening week and you need one. I don't think that "have it and not need it" is a super-realistic one, but there you go... There's my missed count. There's three, but maybe there's four. Anyway, the point is - I had this initial reaction to seeing the existence of gardening week and seeing "Oh, come on, camp... We kind of do that as we go along." And then I realized, "No." Actually, I would so much rather be in a world where there is two words, "gardening week", that has an understood meaning and an understood reason why it's valuable to the business, and why it's valuable to the people involved, and that we have that time and that space allocated in a sort of structured way, because it is way better than being in a world where you need a gardening week and don't have it.

I would love to be in a world where we don't need one at all. I'm not sure that's ever realistic... But having phrases like this I think help to maybe make it less of a fight all the time to have to advocate for this. But if you don't have one and you need one, you need to advocate... Because otherwise you're just gonna keep on trying to push that Sisyphean Rock up the hill and struggling, and the business will only see things slowing down, and not really understand why.

**Kris Brandow:** I guess I have a sort of question off of that, but I wanna preface it with something. The codebases I've worked on that have been unmaintainable, or feels like unmaintainable, where it's like "This thing should take a week, and instead it's taking four months to do. This is miserable, I hate everything." Whenever I wound up in one of those situations, there's not like one big thing that's the problem; it's always thousands of little, tiny things, and then you look at those in isolation and everybody's like "Well, that's a little thing, so is it really worth it to go and fix it? There's all this other stuff we need to do." We know that it's death by a thousand papercuts, but we never want to stop any one of those papercuts from happening. So the question I have based on that is "Is gardening week enough?" or should we actually be pushing further and saying "We want a gardening team."

\[30:15\] I think there's this myth that exists in our industry that people wouldn't like working on said time. It'd be like this miserable thing, where like "Oh, well that's the team of people that doesn't get to do the fun stuff of building features and building new products and doing all of that." But I think -- and I have some friends that are like this; they're just like, "No, just give them codebase. Let them go and just clean up some certain parts of codebases..."

**Sam Boyer:** Scratch that itch...

**Kris Brandow:** Yeah, like the garbage man. Every city -- like, imagine what our cities would be like if there were no garbage people. Not garbage people, but trash collectors. \[laughter\] That's a better -- I mean, it'd be good to have a city that has...

**Sam Boyer:** I didn't hear it till you said it...

**Johnny Boursiquot:** I mean, it would be a wonderful world if we didn't have garbage people... \[laughter\]

**Kris Brandow:** Imagine a world where we didn't have trash collectors. Our streets would be disgusting, our cities would be awful... But there's no one there that's saying -- and there's some people that are trash collectors, and they love their life. They are so happy with what their job is and how they live their life. And I think there's a significant portion of software engineers that want to do that sort of thing, that are like "Let me take this part of the codebase that has that function, that has like 15 parameters. I'm gonna think about it and refactor it, and just make it better... So the next time someone comes through it's not as bad to be in that space."

But I'm wondering if that's something we should be pushing for, or if there's another version of that... Or is it just like "Let's just start with gardening weeks, and then we can figure out what we should be doing after we have this at most of the organizations?"

**Johnny Boursiquot:** I don't think that's something that needs to be optional. Personally, if I'm running a team, if I'm an engineering manager, unless the team is jelling so well that I don't need to formalize the process, I'm just making it a formalized process. I'm making it -- just like going on call, there's a rotation schedule; you go in that squad... You know, other people call it health squad; we can call it "gardeners", if you want... But you do your time in there.

\[32:12\] And I'll say that - I don't want it to sound like it's a punishment or a chore. I think every engineer needs to understand what it's like to work on greenfield projects, and they also need to understand how you maintain existing software that's been around for a while, that is making money for the business and paying your salary... You need to understand how that software works. Because when we need to change it, maintain it, add features, fix security holes or whatever it is, everybody should be somewhat well-versed in that software. And obviously, different people, depending on tenure, and seniority, whatever, they're gonna have a much better time at sort of holding the whole problem domain in their heads, depending on how large your codebase is and all these other factors... But at least everybody is working towards a shared common understanding of the software, so that we can all keep this thing alive that's paying our salaries.

So I think this is something that every engineer should feel responsible for basically contributing to the health of a piece of codebase, or however many you have in case you have microservices, or whatever.

**Kris Brandow:** I would question though if that's actually a good idea... Because here's what where I'm coming -- I always pull analogies from other things... I gave a talk at GopherCon where I basically talked about how we're similar to the publishing industry. And when I hear "Everybody needs to do a rotation on this team to help clean up the codebase", I hear "Everybody needs to become a copy editor", and I don't like that idea. I feel like this is a higher form of engineering, in a way, than even just like product or feature engineering. I feel like feature or product engineering - that's like \[unintelligible 00:33:52.01\] it's like "Here's the requirements, here's the scope. Go make a design." It feels like this more structured thing... Whereas when you're trying to do gardening or doing maintenance of a codebase - I know that's still kind of \[unintelligible 00:34:03.22\] but when you're trying to do this, it's like trying to pull out value when you don't necessarily have that level of structure, especially within organizations, to make that happen.

And the thing I worry about is making bad trade-offs when it comes to trying to garden your codebases... Because just like we have to make trade-offs when it comes to product features, we have to make trade-offs when it comes to gardening. There's a thousand papercuts that are happening here... We have to decide which ones are at a part of your body that's just annoying and which ones are like slicing an artery that is going to make you bleed out.

**Johnny Boursiquot:** Gosh, Kris... \[laughter\] Your analogies, my friend...

**Ian Lopshire:** His analogies are escalating, right? \[laughter\]

**Kris Brandow:** Up and away... But I feel like that's like a very difficult thing to figure out and to determine, and I feel like there are people that are really good at that prototyping, that hackathon-style engineering, and I feel like there's people that are really good at this more maintenance mindset engineering. And just like I don't wanna put maintenance people into hackathon-style stuff, because they burn out, they are miserable, I don't wanna take people that would rather just be doing product features. I'd rather be like "Give me a ticket. I'll do that ticket and then I move on", in a situation where now it's just like, "Here's a codebase. Go make it better" or "Go figure out the things that we need to do to make it better." I think that's where I fall on that.

**Ian Lopshire:** I disagree with you on that...

**Kris Brandow:** Disagreement...

**Johnny Boursiquot:** Nice!

**Ian Lopshire:** So this idea of green field development, right? I think in a lot of ways it's an easier process. You're starting from new, you don't have a lot of things to consider... But you can only do it well if you have had the experience of having to go back and change things. So if all you do is build greenfield stuff, you're gonna leave a trail of debt behind you and never realize it. So if you have this distinction between a maintenance engineer and a green field engineer, I think you're gonna kind of end up with bad software.

**Kris Brandow:** \[36:06\] It's not necessarily saying that you have to be one or the other, it's more so saying that we shouldn't make everybody -- that's why I don't like it being a rotation. That's the thing I was more objecting to more than anything else... It's like, if people don't want to do this, that seems like an option that we can have, in the same way that I think if people don't want to do product engineering, for example -- we're not like "Every engineer that works at a company must do product engineering." So I don't think that every engineer should have to do maintenance work. I think they should have to be aware of the maintenance work that goes on... Just like in observability, or with SREs, we can't just be like "The SREs will just take care of all of our reliability things." The engineers still have to care about this, but I think it's important to make the distinction of who winds up working on this the most, and who develops the ethos of it.

But I don't disagree with you either... I think it is important to get people seeing the repercussions of what they build. We can't have a world where there are just like -- I mean, that's kind of the world we live in right now, where there's just a bunch of people running around, creating stuff, and then they're never around to pay for the repercussions of it, whether that's because it's kind of built into the organization, or because it's a startup or whatever, and "Oh, well, we've built this thing, and now we've made an exit, and now the next group of people can deal with all of our terrible decisions." Whatever form it takes of like cut and run, we don't want people to be doing that sort of thing.

So I think it is important for people to understand -- I guess I'm trying to raise maintenance engineering to a higher level. It's like, maintenance engineering in some ways probably should be above product engineering, because you can't do product engineering without maintenance engineering, but you can definitely do maintenance engineering without product engineering, because there's some codebases that have been around for decades, that it's just like "No, your job is to keep this going. We're not adding features to it, we're not doing anything new with it, but we have to keep this thing going."

**Ian Lopshire:** I don't know, I would point back to... At least on the maintenance engineering is a higher form than product engineering - I'm not sure I can compare them. I would go back to Johnny's earlier point about technical debt... You borrow money to start a company. You take on debt for a good reason, and it's because you're trying to make something on the outside..

**Kris Brandow:** But I would say the debt you have to take on needs to be good debt. There's good debt and there's bad debt.

**Ian Lopshire:** Well, we can push the analogy too far... \[laughs\]

**Kris Brandow:** But I do feel like this does come up in our codebases though, because there's some codebases that are like, "This technical debt - this is acceptable for the trade-off we got." And there's other technical debt you're like "Why? This was not debt we needed to take on" or "This was debt we were never going to be able to pay down..." I think that's worthy of making sure we understand the debt that we're taking on, which I feel like is what maintenance engineers would understand a little bit better than people who aren't as focused on what the repercussions of different types of technical debt we might take on.

**Break:** \[39:08\]

**Sam Boyer:** This feels like a good moment to stick in the question that I alluded to earlier, which is "Is there a difference between maintainable code and good code, in the way that we are talking about it?"

**Johnny Boursiquot:** "Good" doesn't tell me anything though...

**Sam Boyer:** Maybe. Okay...

**Johnny Boursiquot:** I mean, I can show you very good code that is obfuscated code, and it's designed to be short and terse... And it's good by that definition. I always feel like we have to sort of provide the criteria.

**Sam Boyer:** Sure. But that's why I'm asking the question, because when I was thinking about maintainable code, I've found myself sliding into thinking about good code... And the distinction between these - I think it's interesting, where it is or isn't different.

One thing that jumps out to me clearly is how I've internalized that belief that the best code is code that is easy to delete. That is the best code. It's not easy to extend, it's not super-abstract and great - No you can delete that. That's what makes it great... \[laughter\] So the point there being -- and I agree, I do have some of my own internal definitions of "good" that I think have started to skew towards maintenance... But I ask the question here because if we're having a discussion about "What is the relative value of maintenance, versus pushing forward?", it seems like part of the thing we're asking is what our values are in terms of what actually makes code good, versus not. So I ask the question kind of to put a spotlight on (I guess) another definitional issue that seems to be at play behind some of this.

**Kris Brandow:** I feel like they're different, because I feel like there's code that I've seen and code that I've dealt with where I'm like "This is not good" for whatever reason. Maybe it's like a Go codebase that's written in Goava. It's Java, but it just happens to have Go syntax.

**Sam Boyer:** Wait, that's a thing?

**Kris Brandow:** Yeah.

**Johnny Boursiquot:** \[laughs\] Why, you've never come across an iterable?

**Kris Brandow:** You've never come across some factory factories  in your Go codebases?

**Sam Boyer:** Oh, okay, wait... I thought this is like an actual thing... Like a Java person wrote Go -- like, I was about to google "Goava Go", or something...

**Kris Brandow:** No, no, no.

**Sam Boyer:** Okay, okay. Alright.

**Johnny Boursiquot:** You've probably heard of Guby as well, and Gython, and...

**Sam Boyer:** Okay, yes. Yes, yes, we're back in the domain that I'm familiar with, and slightly less terrified by... \[laughter\]

**Kris Brandow:** So I've worked on some of these codebases before where I'm like "This is bad, and this is gross, and I do not like this, and it makes me as a gopher very mad that someone has done this." But I wouldn't say that those codebases were unmaintainable, or weren't maintainable. It's like, you're using interfaces everywhere; I hate you for it. But there's a logic to them. They're arranged in a way that makes sense, and you can see "Okay, this is where we would add things, and we want to get rid of this, so we'll delete that..." For that reason, it seems like yeah, we can have bad code that is still maintainable code. So I do think they are separate things...

I do think in that case the reason we're saying it's bad code is because you're writing it in a language, but not embracing the language you're writing it in... And to your point, you could say "Good has to encapsulate both writing the language for the language, and also making it maintainable", in which case then -- you can definitially make it so that "Yes, good code and maintainable code are the same thing", but I don't think you necessarily have to do that. I think they can be distinct.

**Sam Boyer:** So, I mean, under that -- never mind, it's not even worth doing that. \[laughs\] Let's go look at a Go implementation of Paxos and see if that's super-maintainable by someone. Is it good code, is it maintainable code? I think it's complicated...

**Johnny Boursiquot:** It's personal.

**Sam Boyer:** ...but there's certainly a degree of subjectivity to it. But that's actually part of the thing too, right? It is personal, it is subjective, so is a given codebase maintainable in the hands of one team, but you swap out different people, or a different team dynamic, and it's not maintainable anymore?

**Johnny Boursiquot:** \[43:57\] I think if you're using Go it's a bit more so than it would be otherwise... And I'm speaking completely from my own experience here. Because Go was sort of designed with that in mind. It was designed with the ability -- I mean, linters, they all follow a similar approach. go fmt, to remove everybody's pet peeves around formatting. "I want my braces on this line. I want \[unintelligible 00:44:22.12\]", these kinds of things. So our entire ecosystem prides itself on the ability of anyone finding a Go codebase - you might not understand a problem domain that you're reading about, you can read Go code, and the code itself will be readable to you as somebody who's completely new to that codebase. And since you're going through a 250,000-line codebase right now, you can attest to that probably, right?

So to me, that's the thing - the technology that we use can help in the maintainability of software. So if we add that sort of lens to it, I think the technology plays a huge role in that as well, not just the people.

**Kris Brandow:** I think in that case too we have to maybe level up what maintainability means as well, because it's like "Okay, well if we want to be able to move this codebase between teams..." If we have, say, microservices, and those microservices might be handed off to different teams to reorg, to make things make more sense... I think that's where you have to start building more documentation in this case, or just processes and practices into your organization that allows that code to be moved between, and that inability for a codebase to move from one team to another team becomes a problem of maintenance. It's like, "Okay, now this codebase that might be maintainable for one team is now classified as unmaintainable", because it can't be maintained by two teams, or three teams, or however many teams that you want it to be maintained by. Then that's a thing you have to go back in and resolve.

I wonder if that helps us frame maintenance as well, to kind of help us answer this nefarious question that exists right now, of like "What is maintenance?" Maybe it is this thing of like a sense of the team, so it's like a subjective thing, and like a comparator over time. So it's like, "Alright, well, this codebase is currently maintainable, because we can do some thing that we weren't able to do before. Now we can do it, and we continue to sustain the ability to do that into the future."

If we add a new thing to our definition of maintenance, then something that was maintainable becomes unmaintainable and we have to bring it back to home of maintenance. It reminds me a lot of simplicity, like what is simple; the famous Rich Hickey talk of "Simple made easy", and all of that. It's just a very difficult concept to pin down, grab down, and you know it when you go into a codebase; you know a simple codebase when you're in it, and you're working in it... And it's hard to figure out when you've lost that simplicity, but you always sense that you've lost it. I feel like maintenance is the same thing - you know you're in a maintainable codebase. It has a certain feeling. And then you know when you've lost that; you know when something has diverged and it's like "Okay, this no longer feels like a maintainable codebase anymore. There's something wrong with the way that we can properly maintain it.

**Johnny Boursiquot:** I feel like this is all subjective though. This is all very much our own experiences, and I think naturally, as an engineer grows from junior, intermediate, senior, super-duper senior, or whatever other titles we throw out these days...

**Kris Brandow:** Staff!

**Johnny Boursiquot:** Staff, and whatever...

**Sam Boyer:** I prefer superest-senior, thank you very much... \[laughter\]

**Johnny Boursiquot:** Yup... I mean, you learn -- you get that gut feeling that Kris is talking about, where you say, "Yes, based on my experience, based on what I've been through, this feels good." And when you start to lose that grip, and when you can no longer hold in your head all the different strands that you've had to pull to understand one single feature in a codebase, once you've lost that, then you kind of "Ugh... This could be better." But is there a more scientific method?

\[48:01\] I remember back in my Ruby days, Ruby relied quite a bit on things like code climate and what not to measure complexity and repetition, all these kinds of things... Some heuristics, and trying to figure out "Okay, based on a common set of agreed-upon don't-do's (in this case for the Ruby community), these are the things that you should avoid doing in your codebase." So you get that feedback almost immediately. You open up a PR and then boom, you've got some feedback from a machine... Not from another human, from a machine, telling you "Hey, we ran some linters and this is what we've found." RuboCop yelling at you -- I mean, I remember I'd be finding RuboCop every day, on every PR, and I'd be like "Okay, fine. I'll have to go and fix that." But you're paying that cost and you have a machine helping you to identify these things... And all in the hope that you will not get to a point where you've got so many of these -- the accumulation of these minor papercuts, I would call them, that the codebase becomes sort of "Uhh..." Everytime you're in there it kind of feels yucky... That feeling that you're talking about, Kris, like "Oh, man... We've got too many \[unintelligible 00:49:04.16\]" kind of thing. Is there such a thing in Go? Obviously, we have our linters... We can have that sort of immediate feedback mechanism, but do we all agree on patterns and best practices and things? The stuff that we sort of usually thought of as idiomatic Go - is that our common set of patterns? Is that as scientific as we get?

**Kris Brandow:** I feel like for Go we could probably get at least part of the way there... Once again, I'm always thinking about writing, because I'm a writer... But another thing is like manuals of style, and how -- when you have a manual of style it has a lot of very strong opinions about "This is how you do things." \[laughter\]

**Johnny Boursiquot:** For those wondering what we're laughing about, Sam just pulled up a book on style...

**Kris Brandow:** Yeah, \[unintelligible 00:49:52.18\] a classic.

**Sam Boyer:** THE book on style, in fact. Yes.

**Johnny Boursiquot:** THE book, yeah.

**Sam Boyer:** Indeed.

**Kris Brandow:** The Chicago Manual of Style is sitting on my bookshelf right over there.

**Sam Boyer:** Oooh, it's a fight. It's a fight. \[laughter\] Writers' version of tabs versus spaces. Yeah.

**Kris Brandow:** Yeah, exactly. There's the famous -- you know, you have closing quotation marks. Does the comma go inside or outside of that?

**Sam Boyer:** Mm-hm. Outside!

**Kris Brandow:** There are these things that are like -- I don't think there is an objective answer, but we still need an answer. So I think if we as a community or if we as a group of people can craft something like that, then I think the answer to your question is "Yes." I feel like there is a more scientific approach we can take to things.

But I think for us, especially if you take a wider angle of it, not just Go, I don't think so. I think a lot about, you know, once again, writing - what's good in a romance novel, or one of those trashy airport romance novels, versus what's good in the New York Times, is going to be very different. And neither is wrong, and you probably wouldn't wanna label either one as wrong. I feel like code is the same way. What is good in Go is not the same with what is good in Java. And I think even within Go codebases, what's good in some Go codebases is probably not good in others. I think of the use of the unsafe package, or the use of the sync package; some teams in some organizations - that's a good decision, that's a good thing to use. You have the engineers with the experience. Other teams probably shouldn't be doing that. Someone's gonna blow off their foot with that. Man, gruesome analogies today... \[laughter\]

**Sam Boyer:** Seriously, it's just -- and also, I don't know about you, but I start every main package with a \[unintelligible 00:51:34.22\] because that's just how I roll...

**Kris Brandow:** Why use mutexes when you can use atomics? Come on... \[laughter\]

**Sam Boyer:** Seriously. All the cool kids are doing it.

**Kris Brandow:** I think it's like what are those things that if you define enough components of it though, you can get toward a more objective thing... But I think it will always have hefty, hefty amounts of subjectivity that you need to abide by. And I think we as a Go community -- I think this is a thing that we need to do... We need to start writing these things down more. When you look at the Chicago Manual of Style, or the AP Stylebook - they didn't just appear as thousand-page (well, the AP Manual of Style is shorter), huge books...

**Johnny Boursiquot:** \[52:14\] The important parts...

**Kris Brandow:** They appeared over time. Okay, I have problems \[unintelligible 00:52:17.03\]

**Johnny Boursiquot:** Style, the good parts... \[laughs\]

**Sam Boyer:** 85 pages...

**Johnny Boursiquot:** The elements of style... \[laughs\]

**Sam Boyer:** What is this thousand-page business you're talking about? Continue, sorry...

**Kris Brandow:** There are some antiquated things in that book. Anyway, anyway.

**Sam Boyer:** Yes, yes, there are. \[laughter\]

**Kris Brandow:** They didn't just spring out of nothing. They were developed by smaller style sheets from specific books, over time, and then compounded over time. So I think we as a community, to start just doing that action of like more people writing manuals of style -- there's some out there, right? I think Uber has one for Go, I think Facebook has one for Go... You can go look, you find them... But they're all very, very short. Not even 85 pages. These are like five pages. And I think that's what makes it so hard to understand what maintainability is at the end of the day. Because once again, to go back to the papercuts - those small papercuts are those small, little decisions that aren't being aligned over time. It's the equivalent of not making a decision about whether the comma goes inside or outside the quotes, and then it's different for every paragraph, in the whole book. And it's like, pick a way to do it and then stick with it. It's one of the reasons we love go fmt; it's like, "Brackets go here. These things go in these places, and that's where they live, and now we don't have to care about these things." That was a very, very long way of answering your question; I hope I actually captured some of it...

**Sam Boyer:** Can I try to sum that up into a pseudo-scientific, still subjective, but something that has more numbery bits in it?

**Kris Brandow:** Go for it!

**Sam Boyer:** I wanna loop back on the correctness bit that we were talking about earlier. I mean, everything you're talking about just now are essentially correctness criteria. Not formal verification correctness, but like it's correct if it passes linting and not if it doesn't. I would offer that the maintainability of a codebase starting, just accepting the premise, is subjective, because I don't see any way around it. Is the ratio -- you can understand the maintainability of a codebase by looking at the ratio of time spent researching what is correct, versus making the thing correct. Whether you're talking about trying to fix a bug, so failure locality... Like, how long does it take to figure out why the thing is failing? How long does it take to figure out the rule you should apply in deciding how to fix the thing, versus actually fixing the thing? That ratio, which - yes, it will vary from person to person, based on the length of their experience, their familiarity with the codebase... But again, I don't see a way around it. I think that may be the kind of core of what we're driving at here.

**Kris Brandow:** I feel like that sums up what I took ten minutes to say. \[laughs\] Okay, so speaking about Go - because we're kind of getting toward the end of the episode here, and I feel like we've been very light on the Go content in this episode, so... It's Go time, we've gotta talk about it.

**Johnny Boursiquot:** No, I think it's been implicit in there. I think it very much applies.

**Kris Brandow:** Well, thank you for saving me there. But is there anything that any of you would give as -- what makes Go a good language for building maintainable codebases? What things do we have that are like "Yes, this is why I like and enjoy writing maintainable code"? ...knowing that we haven't quite defined maintainability that well... But "This is what I like that Go has, that makes it so I can write maintainable code." And then what are some things - if there are any - that make Go a bad language for said maintainability? If you each want to answer that in turn...

**Johnny Boursiquot:** I already gave my reasoning for that - the fact that I can drop a new person in a Go codebase, and even though they're still learning about the problem domain, it's not Go they have a problem -- they're not fighting the language; it's not Go they have a problem understanding, it's "What is this type doing? Where is it used? What business problem is it solving?"

\[56:04\] So that for me - I've never experienced a language that gives me that sort of room with my engineering team, to be able to say "Hey, go into this codebase -- I know you've never worked in this codebase, but this is what it's supposed to do. I have a bug fix or I have a feature... Drop in there and see what you can do." And relatively speaking to other languages, they come back much more quickly with the fix, or the feature, or whatever it is, because they didn't have to fight the language. They easily understood what they were reading, and once they understood the problem domain, they were able to execute and get the job done. To me, there's nothing like Go that does this, in my experience.

**Kris Brandow:** Ian?

**Ian Lopshire:** Yeah. I'll mirror that - the simplicity of the language just adds to maintainability. But on top of that, I think the errors as values really adds to this; being able to explicitly see error paths, and not worrying about exceptions and trying to trace these all the way back up really adds to glanceability, and therefore maintainability.

**Sam Boyer:** Wait, so you don't use panic defer recover everywhere in the code, all the places, all the time? That's crazy, I thought that's what we all did... \[laughter\]

**Johnny Boursiquot:** Sam's best practice.

**Sam Boyer:** I've gotta go rewrite a lot of code right now, guys... It's not good. \[laughter\]

**Johnny Boursiquot:** Panic-driven development.

**Kris Brandow:** Sam...?

**Sam Boyer:** Yeah... I mean, I'll go with the definition I've just offered - I think that I will mirror these same statements and translate them into the ability to quickly, with very little research time, and mostly fix time, hone in on the basic answers to the questions about structure of code. I remember running face-first into a very large Ruby codebase, and being gobsmacked about my inability to figure out what felt like basic questions. I've been really just focusing on Go code for a while, and came back and I was just like "Wow, I can't even look up symbol names and find them in places. There has to be special, pseudo-static analysis."

The manner in which the structures and variants, rules, whatever, of the language make it possible to, even over large codebases, have clear answers to questions about basic things like "What are all the instances of references to this type, or to this interface?" Or perhaps even find all the implementations of it, a relatively difficult thing to do, and yet so very doable.

Go is very enumerable, it's very analyzable, and that means that most of my cognitive effort is spent on dealing with the higher-order abstractions that people have tried to create, because all the boring questions are quickly answerable, so I can get right to the heart of the matter.

**Kris Brandow:** \[58:50\] Alright. And then final question - what would you add, if you have anything, to make Go more... Not just make Go itself more maintainable, but make the code that we write more maintainable?

**Johnny Boursiquot:** Generics... Hell no. \[laughter\]

**Sam Boyer:** No, I want generics, but just for me. Everybody else can screw themselves. \[laughter\] Because then I know what mine do, and I don't have to deal with any of your garbage... And then we're fine. Right? I'm fine... That's what's important here.

Oh, I would add Rust. That's what I would add... \[laughter\] I would really like to have compile-time --

**Johnny Boursiquot:** Unpopular...

**Sam Boyer:** There you go... I would really like to have compile-time guarantees about shared access to global immutable state. Forget this go test race garbage... Come on. Static or nothing, that's my... \[laughter\] Is this a helpful answer? This isn't a helpful answer. I'm sorry.

**Kris Brandow:** Well, we avoided dependency mentions. It's okay.

**Sam Boyer:** We did, we did! \[laughter\] Scooted right by it. Well done.

**Kris Brandow:** Okay...

**Johnny Boursiquot:** Nice.

**Kris Brandow:** It's time for unpopular opinions.

**Jingle**: \[59:56\] to \[01:00:12.14\]

**Kris Brandow:** Ian, you're up first. Unpopular opinion.

**Ian Lopshire:** I really don't have one this time. I cannot think of anything.

**Kris Brandow:** Oh, man... It's okay, Sam has an extra four for you.

**Sam Boyer:** Oh, crap...

**Kris Brandow:** \[laughs\]

**Ian Lopshire:** Let me hear some other ones and I'll \[unintelligible 01:00:26.08\]

**Johnny Boursiquot:** Get the wheels turning... \[laughter\]

**Kris Brandow:** Sam, any unpopular opinions?

**Sam Boyer:** I totally had like two at the beginning, and then we were talking about all this interesting stuff... I was gonna say "Don't use gRPC", but I can't actually back that one up... \[laughter\]

**Ian Lopshire:** I don't think that's unpopular.

**Kris Brandow:** You don't have to back it up. You can just throw it out there...

**Sam Boyer:** Oh, I can just throw it out there? God, that's liberating. Okay, don't use gRPC!

**Johnny Boursiquot:** Let the masses interpret. \[laughs\]

**Sam Boyer:** Alright. Don't use gRPC streams. Unpopular opinion. There we go.

**Johnny Boursiquot:** Oh, okay. That's nuanced. Yeah.

**Kris Brandow:** I feel like that's not unpopular though \[unintelligible 01:01:03.08\]

**Sam Boyer:** Right. That's the problem... All of my opinions are right and popular, and so how am I supposed to -- \[laughter\]

**Kris Brandow:** There's the unpopular opinion.

**Johnny Boursiquot:** There it is, there it is...

**Sam Boyer:** There it is...! \[laughs\] There we go. There we go. There we go, yeah. And yet I also think that that one might be a relatively common one, even if not necessarily unpopular in our industry. We've done enough meta dancing. I feel like Johnny gets to go, and then maybe I'll have something more real in a minute, maybe.

**Kris Brandow:** Johnny. I know you have many unpopular opinions, so...

**Johnny Boursiquot:** Yeah, let me formalize it into an actual unpopular opinion. I don't think you should have separate teams, feature teams, health squads, folks who only work on green field stuff, or whatever... I don't believe in -- because what if I was hired and I was put on the bug squash team, and then I wanna work on some features stuff? What - am I never gonna get a chance to do that?

I think teams should be loose in terms of their memberships, and people can just -- if you wanna have a formalized rotation to put people on different teams... And that goes for on-call as well. I firmly believe that if you're on a team, writing software that goes into production and it needs to be operated, I think you need to be on the hook for when something goes wrong. You're on the pager, you get called as a responder. Perhaps that is another opinion, but I think you need to be part of that rotation as well.

It all basically falls under this umbrella that as an engineer you need to be exposed basically to all the layers of the stack as it pertains to running the piece of software that helps a business make money. I think you need to understand each -- maybe even spend some time in support, at the front lines of customer requests and bug filings, or whatever it is.

So play a role in each layer of that, and trust me, this is not a punishment. This is going to make you an exponentially better engineer, if you understand the different vectors of things that are coming at your piece of software that you're writing, that your teams are responsible for... That's gonna give you superpowers as an engineer, that's all I can say.

**Kris Brandow:** I think I agree to that. Not the on-call stuff, because I don't wanna wake up for anything when I'm asleep, so... \[laughter\] The thing is just gonna be broken until I wake up in the morning. So if that's okay, then sure... But I feel like maybe on-call should be for --

**Johnny Boursiquot:** You wouldn't do well on my team.

**Kris Brandow:** This is also why I purposefully avoid roles that have on-call components to them, because I know this about myself.

**Johnny Boursiquot:** It's good to know thyself.

**Ian Lopshire:** A man who understands his constraints. Respect.

**Kris Brandow:** I like high-level stuff. I like being at 30,000 feet. I can come down to the ground at some point, but on-calls - usually not at 30,000 feet.

**Johnny Boursiquot:** That's for the birds? \[laughs\]

**Kris Brandow:** \[01:03:52.23\] You know, a little bit lower. But no, I think you're right though. I've been doing a bunch of security engineering-related work at work, and I'm like, more people need to understand security; not to implement it themselves... Please don't go roll your own crypto... But I think from an actually getting in and understanding how public key infrastructure, how certs work, how public/private key pairs work, how cryptography in general works - I think enough people don't get exposed to that, because security is in a specialized area. I think reliability is the same sort of thing, where it's like "Oh, there is the SRE team. They tackle stuff."

So I am in general agreement with you. I think software engineers need to be taking more on as far as what their \[unintelligible 01:04:38.07\] is. It shouldn't just be "Go build some products. Go write some code."

**Johnny Boursiquot:** Kris is like "I agree, except when it applies to me." \[laughs\]

**Kris Brandow:** I can agree with something in general and know that it wouldn't work that well for me... I mean, I could do on-call, just during the day hours. Or more so, I just will write software that doesn't crash at night.

**Johnny Boursiquot:** Oh, okay. Okay.

**Kris Brandow:** Or doesn't crash at all.

**Johnny Boursiquot:** Oh, that's the trick.

**Sam Boyer:** Or only crashes. \[unintelligible 01:05:04.23\] which is a real thing, that's a great thing. Ian, I have another -- I do have one, if you want another minute to think... Otherwise, go.

**Ian Lopshire:** You can go ahead.

**Sam Boyer:** Do not use semantic versioning for any versioning system that you create, unless you can define what backwards compatibility means, clearly and precisely.

**Kris Brandow:** Yeah.

**Sam Boyer:** Skating into dependency management just a little bit...

**Johnny Boursiquot:** Yeah, that is -- yeah.

**Kris Brandow:** A little subtweet there, but yeah... \[laughs\]

**Sam Boyer:** Just sneaking it in, you know...

**Johnny Boursiquot:** You snuck that one in.

**Sam Boyer:** Yeah, yeah.

**Johnny Boursiquot:** I got you.

**Kris Brandow:** I mean, I don't know if that's gonna be -- it'll be popular among some people, and very unpopular among other people, so...

**Sam Boyer:** The conditionality makes it very interesting. If I've had previous conversations with you about it, you know that there's a deep troll in that statement too, but I'm not gonna unroll it here... \[laughter\]

**Johnny Boursiquot:** I was gonna say, depending on how -- there's gonna be a whole swathe of new Go developers who have no idea of the back-story for all of this... And there's gonna be a bunch of people who are like, "Yeah, yeah, I get what you mean."

**Kris Brandow:** \[unintelligible 01:06:15.20\]

**Sam Boyer:** You know, I think it's a statement that stands on its own though, independent of any history.

**Johnny Boursiquot:** Yeah, yeah.

**Sam Boyer:** There's a lot there to that one.

**Kris Brandow:** I think it hooks into the episode -- you know, we started out just talking about maintenance, and we're like "Maybe we should define what maintenance is." So if there's a specific thing that's at the crux -- I feel like when it comes to semantic versioning, the thing at the crux of it is this idea of backwards compatibility, because that's what all of the digits in it are about, is like "How much have you maintained backwards compatibility?" If you don't define what that means - well...

**Sam Boyer:** You kind of have a problem.

**Kris Brandow:** You wind up with that function that is like "It means different things to different people", and then it has 14 parameters.

**Sam Boyer:** \[01:07:00.23\] And they still don't describe the entire possible space... Because thus far we've been talking mostly about maintenance as though it's something which is kind of confined to a single team... Which kind of isn't true when you've got a blast radius that is as large as your \[unintelligible 01:07:12.24\]

**Kris Brandow:** This is why this is a series and not an episode. \[laughter\]

**Johnny Boursiquot:** Yup.

**Kris Brandow:** But yeah, I've never, ever run into a codebase that I've maintained that has a 14-parameter function that only has three lines of code. Never. I've never felt that situation happen.

**Sam Boyer:** Not even one time?

**Johnny Boursiquot:** Never have I ever...

**Kris Brandow:** The thing about it is in that situation too that code is like "This is actually correct for the state of the codebase right now, and I'm mad about it." Yeah, just one 14-parameter function calling another 14-parameter function...

**Sam Boyer:** Well, I would hope it's at least a 14 calling a 13, so you're doing like partial function application all the way down; you're just peeling parameters off one at a time... Does it not do that? Now I'm picturing like a code pyramid...

**Kris Brandow:** It was an unpleasant situation when I -- I had to refactor a lot of code to get rid of that. \[laughter\] I looked at it and I'm like, "Um, this looks wrong, but it's not wrong... Alright, merge it." Yeah, it was a bad situation.

Anyway, Ian - unpopular opinion. Got anything? It doesn't have to be related to Go, or code...

**Ian Lopshire:** It is not related, but I do have something.

**Kris Brandow:** Okay.

**Ian Lopshire:** I do not think variables belong in paths of URLs, especially in APIs. I think we have query parameters that are built for this, so all these APIs that are /1 to get something, I think that was a misstep.

**Johnny Boursiquot:** You're old school, huh?

**Ian Lopshire:** When I started, Rust was already a thing. I think it was just a bad thing.

**Kris Brandow:** Clean URLs! Great idea for WordPress, bad idea for APIs.

**Ian Lopshire:** That was on my mind too. I went to Drupal days, for sure...

**Kris Brandow:** I feel like Roy Fielding would be very happy with you right now... I think he has a couple of rants about that, of just "Your URLs are opaque. Stop putting stuff in them that you need to parse. There's other parts of the protocol for that." Anyway... Yes, all good unpopular opinions.

**Johnny Boursiquot:** Or so we think... They end up being popular anyways.

**Kris Brandow:** I'm not really sure how many of these are gonna wind up being popular. I feel like it could be -- I'm wondering what the poll results will say... Because we do go and we poll all of these on Twitter, so... It should be good.

**Sam Boyer:** \[01:09:38\] I mean, my semver one really - that one gets unpopular when you start suggesting alternatives. It sounds fine when you're just like "The world's terrible! Don't do that thing!" and everyone agrees. Then you try to suggest an alternative and everybody's like "Go f\*\*\* yourself!" \[laughter\] So it depends on how far you're walking out, I guess. \[laugher\]

**Johnny Boursiquot:** I think I'm gonna fall over... We haven't had a bleep on this show in a while, so this is gonna be a good one.

**Sam Boyer:** Sorry, sorry. I should have enquired at the beginning.

**Kris Brandow:** I mean, Peter got his one swear, so I feel like you also can get a couple swears in. It's okay.

**Sam Boyer:** Okay, alright.

**Kris Brandow:** We're a mostly family-friendly show.

**Sam Boyer:** Gotcha. Noted. I'll remember for next time.

**Kris Brandow:** Thank you, Ian and Sam, for joining us today, and thank you, Johnny, for being my co-host through this... And thank you to all the listeners out there for enduring through another episode about maintenance. There are more to come.
