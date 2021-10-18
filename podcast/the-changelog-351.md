**Jerod Santo:** Ned, when it comes to maintaining open source, you have two contexts that you do quite a bit of. The first one is coverage.py, which is a code coverage measurement tool for Python, and then the second one is Open edX, which is the software that powers edx.org and a whole bunch of other online learning sites. Kind of cool - you have both the micro view, and kind of a macro view of open source maintainership.

**Ned Batchelder:** Yeah. I'm deeply embedded in the open source world. edX is my day job, so I work on the community team, the Open edX team at edX, and we try hard to encourage and enable contributions from people to this very large codebase that, as you say, powers edX.org. It's very exciting. edX gives away free education, and there's a thousand or so other sites out there using this software to also do their online education. Working on open source is a noble cause, and working on open source that educates the world is (I guess) a doubly noble cause.

**Jerod Santo:** You're double-dipping on nobility there.

**Ned Batchelder:** Double-dipping on nobility, exactly.

**Jerod Santo:** The software that powers edX.org - can you tell me a little bit about the technical details, and then maybe just how people contribute, and is it self-deployed sites...? Go ahead.

**Ned Batchelder:** It's a large Python, Django and of course JavaScript codebase. The software was started about six years ago in sort of the classic Django style then, with a lot of server-side rendered templates. We use Mongo and MySQL databases. These days we're doing a lot of work on the front-end, to move away from that style of server-rendered HTML to React, and what we're calling micro-frontends... So there's a lot of technology there.

When you install the software, you either find someone who can help you install it, or we'll run it for you, because we've got a couple of dozen companies out there that make their living running Open edX sites, and customizing the sites, and helping people write courses on the sites. But if you wanna install it yourself, their instructions - you get yourself an Ubuntu machine, and then you run some commands and it pulls down some Ansible playbooks and installs all the software. It's a little complicated - I wouldn't recommend it to someone who's new to that kind of thing - but it can certainly be done.

One of the challenges we have is that the type of people that are drawn to Open edX are not necessarily technologists, they're educators; a professor someplace tells their grad student, "Hey, on your free time, can you download and install Open edX?" and that doesn't always go so well, because chemistry Ph.D. students don't know what I mean when I say Ansible.

\[04:07\] On the community side we try hard to make that clear, and help people find the right pathways... But it is open source, so they can install it and run a course, and they don't need permission from us, they don't owe us any money... We don't even know where these sites are until we go out with our web scraper and find the sites... Which is kind of exciting - you run the web scraper, it finds a new Open edX site, and you can go and see what kind of courses people are running out there. It's pretty cool.

**Jerod Santo:** That is pretty cool. On another show we do, called JS Party, we were just talking with George Mandis, who wrote this kind of silly JavaScript library called Konami-JS, which is just the Konami cheat code; it adds it to your website and calls an arbitrary function callback, and you can do whatever you want. People use it for Easter eggs... And he didn't really track who was using it all that much when it was super-active, and then recently he's been giving talks about it, so he went back to archive.org and scraped a bunch of old websites to find all the places where Konami-JS is being used; he was pleasantly surprised that a lot of big sites were putting Easter eggs in...

**Ned Batchelder:** Yeah.

**Jerod Santo:** So that always feels good, when you find somebody using your software... And he didn't even know it.

**Ned Batchelder:** Right, exactly. And the great thing about it is that edX is doing a lot to educate a lot of people, but our design center, our strategy is to get large educational institutions and corporations putting their courseware on the site for a very broad audience. So we've got Harvard, and MIT, and Microsoft, and the Linux Foundation, all putting courses on our site, and that's great, but there's a ton of education that needs to happen that doesn't fit that model.

One of the sites I've found through our web scraper is in Indonesia, the Ministry of Education has a site that has 160 different courses - they're pretty short courses - all focused on vocational skills that will help lift people out of poverty. So there's courses like how to raise chickens, and how to fix motorcycle engines, and how to be a hairdresser... And edX.org is never gonna run a course about how to raise chickens, but that site in Indonesia is probably doing a lot for its students, and it's just really great to see our software being used for that kind of education. So while it's great to see large sites using this software, it's also great to know that there's a long tail of different kinds of education happening, because people can run courses on whatever they want using our software.

**Jerod Santo:** In terms of community-building and open source, there's an overlap there...

**Ned Batchelder:** Sure.

**Jerod Santo:** But it's not 100%. Like you said, a lot of people aren't necessarily interested in the open source software, they just wanna get the software running, or they're just using it to create courses... Are there takeaways from community-building that you use in your open source work, or vice-versa, that are cross-over skills that you've found have served you well?

**Ned Batchelder:** Well, one thing is that it takes a lot of work to make contribution easy. The old school model of running an open source project was "Well, it's on GitHub, and you can click the Make Pull Request button, and that's all I have to do." Then someone makes some pull requests, and you ignore it for a long time, and you don't give them good feedback, and you're not very friendly... You're being sort of a typical engineer about it. That makes contribution difficult, because people don't feel welcome, they feel confused, they're not sure what to do, they don't know how you feel about their work, they're not sure when they're gonna hear from you...

Making contribution really successful takes a lot of people skills. It's not a technical problem. I mean, there are technical challenges to it. Your codebase might be obscure, or poorly documented, or it's under-tested, but in order to get the contributions to really flow, you have to have a lot of people skills upfront to make sure that people are welcome, people are supported, people know what kinds of things you'd like to see them work on, they know how you feel about things, you're not being too stringent in your rules before you can merge the pull request... And I've been learning this on both sides of it - both at work, with Open edX, and on coverage.py. Coverage.py - to be perfectly honest, I'm probably a lot more like that bad side description that I just said.

**Jerod Santo:** \[08:32\] \[laughs\]

**Ned Batchelder:** If you go look at coverage.py on GitHub, there's some really old pull requests, and there's some bugs that have been written a while ago that have no comments from me yet. That's just one of the challenges of being a single maintainer in your spare time of an open source project. But at work, at edX, we've been working a lot on trying to improve our contributions process, just making sure that the pathways are as smooth as they can be.

One of the things that we've been doing at edX - it's a large Python codebase, and of course, it was started six years ago, so it's been running on Python 2 all that time... And Python 2's end of life is in about six months, so we've been working on getting our codebase to Python 3... And a lot of that work is actually kind of low-level work, meaning it can be automated, and it just requires someone to push the button on the tool, and babysit the pull requests...

**Jerod Santo:** Review it, yeah.

**Ned Batchelder:** ...to see what the tests do, make sure it didn't do anything really crazy... But there's nothing controversial about the change, for instance. One of the difficulties with contribution to Open edX is someone says "Hey, I wanna build a new feature." Well, now you've gotta have a big discussion, "Is this the right feature?" We have 30 million learners on edX.org, so the feature that you think is gonna work great for your hundred students - how is that gonna scale up? It becomes a long discussion, and for good reasons.

The good thing about work to convert from Python 2 to 3 is we all know that that's exactly what we want. We don't have to have a big discussion upfront about what's the design, what does it look like, what's the user experience... All those questions that are really difficult.

So we've built a separate contribution process at edX, specifically for that kind of incremental, uncontroversial work. That's worked out really well, to build a separate lane for those kinds of contributions.

**Jerod Santo:** So just like on a website somewhere there's a big IF condition, like "Is this a feature that you wanna add, or is this a small thing?" How do they actually funnel into those places?

**Ned Batchelder:** Right, so we use JIRA for issue tracking, and so what we did is we automated the job of looking at all of our files, and identifying which ones had to be run through the Python futurize converter that sort of does the mechanical Python 2 to Python 3 changes. Our tool wrote a JIRA ticket for all of the files that need to be converted, in bunches of ten, or something. So there's one JIRA board that people can go to, and if there's a ticket on that board, then it tells you exactly what to do. We know it's not gonna be controversial, so you can take one of those tickets and you can make a pull request based on it, and make a contribution.

**Jerod Santo:** What about big features? Because you have an entity behind this - like you said, 30 million learners on edX.org - how does that decision-making process go? Is there a product team ultimately? And how is it communicated back to potential contributors, like "This is a good idea, but not for us" or "This is a terrible idea"? How does that all work?

**Ned Batchelder:** This is one of the things that makes Open edX as an open source software project very different from other potential models, other projects that we might try to be like... And that is that edX as an organization pays roughly 100 engineers to work on the software all day, every day, and runs a business based on that software.

**Jerod Santo:** Exactly.

**Ned Batchelder:** \[12:09\] The software is deployed live to production at least once a day, sometimes more... So if a pull request gets merged and it brings the site down, people are gonna get mad. So we have to be very concerned with exactly what goes into the contributions. You asked about product decisions... We have a product organization, of course. At edX almost all of our software is open source; if you just walked around the hallways here, it looks like any software business that has a website that it's running; there's product people that talk about what the feature should look like, and the engineers take their directions from there, and they've got JIRA tickets to work on, and the DevOps team is making sure the deployments are going well, and all of that stuff.

So when someone suggests a change, it can become a big discussion, and it can be hard for them to get our attention... Because we're all heads down, making sure edX.org is doing what it's supposed to do for our business. And that is a big asymmetry and an unusual characteristic of Open edX. It's honestly kind of the fighting that is one of the big persistent challenges for the Open edX team here - figuring out how to try to bridge that asymmetry, to make the borders around edX as porous as possible, to give a voice to the community, to find ways for them to get done what they need to get done, with or in spite of edX people. Again, it's really a people challenge.

There's plenty of technical challenges in the Open edX codebase; it's big and old, there's tech debt there, it's complicated. But it's the people challenges that really are the limiting factor in the contributions.

**Jerod Santo:** Has edX been open from the start?

**Ned Batchelder:** Not quite the start. We actually open-sourced on June 1st, 2013, so it's been quite a long time. We've been open source for six years. I've been saying it started six years ago; I guess at this point it was about 7,5 years ago that the first commit went into GitHub.

**Jerod Santo:** Time flies.

**Ned Batchelder:** Yeah, time flies, exactly.

**Jerod Santo:** So pretty early on... And you've been there since the beginning?

**Ned Batchelder:** I've been here since October 2012, so yeah.

**Jerod Santo:** Okay.

**Ned Batchelder:** When I came in the door, the plan was "We're gonna open-source. We have to get around to it."

**Jerod Santo:** I was gonna ask that question.

**Ned Batchelder:** Yeah. Because edX was spun out from MIT, so we've got a culture behind us of sharing, and the whole point was to open up institutions of higher education to help get their teaching out onto the internet. We're a non-profit. Technically, edX Inc. is a non-profit, so sort of from the ground up it's been built as an open source kind of organization.

**Jerod Santo:** Well, that probably serves it well, because if it wasn't, there was debate internally, and then maybe it was open-sourced in haste or in anger... Buy-in is an important thing, so that's what I was trying to drill down on - how long it has been open, and if it was at least planned from the start. That seems like a recipe for success, more so than the other way around, where some organizations will open-source for reasons like they read in a magazine that they should do it, and it will help them get business, or whatever...

**Ned Batchelder:** It's what all the cool kids do, so we should do it.

**Jerod Santo:** Exactly.

**Ned Batchelder:** Yeah. No, we've got a strong culture of that kind of sharing... And that doesn't mean that everyone here can easily recite an elevator pitch about why we're open source. In some ways, having it as almost kind of background culture noise in a way almost hurts the mission, because people aren't quite sure why. It's just like "Well, yeah, of course we're open source... But what does success look like for the open source part of edX? Are we measured on how many sites are running, or how many contributions we get, or how many people are chatting in Slack every day? What is the actual success metric?"

To me it's a very interesting open source experiment to be doing open source inside what is otherwise a classic business on a website kind of software organization.

**Jerod Santo:** \[16:26\] Right... So what are your metrics? What do you gauge as success for edX, you personally?

**Ned Batchelder:** Right now we are looking to maximize contributions... And for good reason. If we can get contributions into the codebase, then that can feel tangible to the people who are maybe at the farther end of the "Open source is of course a good thing" spectrum. So if there are people who are like "I'm running a business here. Why do we bother with this? Well, we've got this feature because we're open source." If we can point to those kinds of things, then it's a very clear win. We don't have to get into subtle moral arguments, or try to be altruistic. We can be capitalists about it.

**Jerod Santo:** It's so interesting that an organization with 100 engineers would be trying to optimize for contributions... Because you would think "We've got those covered over here. We've got 100 engineers on this." So that's interesting that you say that.

**Ned Batchelder:** Well, but if there are 100 more engineers out in the community... And some of them are very good engineers. I always make that joke about the chemistry Ph.D. student, but there are, as I said, a couple dozen firms who are filled with software engineers whose business is running our software for their own profit, and they make good contributions... So we want to make sure that they continue making those contributions.

**Jerod Santo:** Hence the efforts at making your contribution flow and onboarding better, right?

**Ned Batchelder:** Exactly.

**Jerod Santo:** Well, let's turn our focus to coverage.py, because unlike edX, which is 100 engineers, this is basically one engineer, and that engineer is you.

**Ned Batchelder:** That's right.

**Jerod Santo:** Tell me when it started, how long you've been maintaining coverage.py, and maybe how many people are using it... That kind of stuff.

**Ned Batchelder:** This is the part of the story where I start spitting out numbers and people's eyes get really wide. First of all, just to set the record straight, I didn't write coverage.py. I did not start the project.

**Jerod Santo:** Okay.

**Ned Batchelder:** I was a user of the project in 2004, and it wasn't doing a thing that I wanted it to do, and I tried to contact the author, Gareth Rees, and for whatever reason I couldn't get in touch with him... So I made the change to coverage.py, and I put it up there. He seemed okay with that. I've been maintaining it ever since. So to answer your question, I've been maintaining coverage.py for almost 15 years (14,5 years).

**Jerod Santo:** Wow.

**Ned Batchelder:** So anyone out there using a project and thinking "Hey, I could just make one small tweak to it", watch out, you might be the maintainer for the next 15 years.

**Jerod Santo:** \[laughs\] That's kind of the beauty of open source though, right? Somebody else is interested, and then they can just take the ball and run with it. It's beautiful.

**Ned Batchelder:** Absolutely, yeah. So I've been maintaining it for a long time... It's used by a lot of people. In the Python world, it is pretty much the only game in town for coverage measurement. In fact, many people don't realize this, but there is a coverage measurement tool in the Python standard library that many people have never heard of, because they use coverage.py.

**Jerod Santo:** Wow. That's gotta feel good.

**Ned Batchelder:** Yeah, it's very good. I love the fact that I can make a thing and a lot of people get benefit from it. That's sort of the original motivation for getting into this. That's sort of the lone engineer working on open source - that's their motivation. They don't think they're gonna get rich, they don't even necessarily think they're gonna get famous, although that seems cool... They just think "Hey, I wrote some code, and then this guy I didn't even know - he's using my code, and he seems to like it. That's cool."

**Jerod Santo:** Yeah.

**Ned Batchelder:** So coverage.py - you ask how many people are using it... GitHub now has a Used By thing on the top of --

**Jerod Santo:** I love that.

**Ned Batchelder:** Yeah. I'm trying to type...

**Jerod Santo:** \[20:24\] I've got the number for you if you want me to fill you in, because I'm staring at it...

**Ned Batchelder:** Yeah, tell me what it is.

**Jerod Santo:** 68,760. These are repositories (I assume) that are dependent upon coverage.py somehow. Or maybe just included in there.

**Ned Batchelder:** Right. I'm not sure exactly the way they count it, but they seem to know how to examine the Python requirements or setup.py files to decide that. So yeah, 68k.

The funny thing about my GitHub metrics is that that number is up at 68k, but I only have 700 stars. So I think I might be setting a record for the ratio of Used By to Stars.

**Jerod Santo:** That's interesting.

**Ned Batchelder:** I don't know that that's a thing to be proud of, but...

**Jerod Santo:** \[laughs\]

**Ned Batchelder:** And the reason it's got so few stars is because I only moved onto GitHub about a year ago. I was on BitBucket for years and years, and I moved to GitHub, and there's just a dynamic about -- you know, if you're not making a splash on Hacker News, you're not gonna get stars, so... I just kind of quietly moved over all my users. I don't know it's even moved, because they're getting it from PyPI, so... We don't have that many stars.

**Jerod Santo:** Well, listen up, Python people out there listening to the Changelog... Coverage.py is on GitHub now. You need to head over there and star it, help Ned out, because he's got 14 years of effort into this thing. It needs more stars.

**Ned Batchelder:** Yeah, get me some stars.

**Jerod Santo:** There we go.

**Ned Batchelder:** Yeah, so coverage.py is run like the classic guy in his bedroom open source project. I work on it in the evenings, or in the mornings, over my cereal bowl, on the weekends... And it's been very gratifying to see the use and to see it become the de facto that it is, and to know that people are getting benefit out of it.

The downside, of course, is it can be hard to keep up with people's desires for it. I don't seem to get much drama in it. A lot of open source maintainers seem to find that when their project becomes popular, it also becomes a magnet for drama... And I'm not sure why. I haven't gotten that kind of infamy on coverage.py. But people ask for things, and that does seem like a good idea, but honestly, it's gonna be two years before I get to that, and that's not a good feeling.

Like I said, there are issues that are languishing there, and pull requests that seem fine maybe... I don't even know; I don't have time to look into it and think about it.

**Jerod Santo:** You do have 50 contributors over the years, at least in the Git history; maybe there's more way back in the day, when it was on some other version control, but... Are many of those -- you still say it's one person, coding over your cereal bowl... Are there other major contributors? Or maybe that are not even major, but they're in the issues? Or has it really just been casual contributions over the years?

**Ned Batchelder:** Most of them are casual, but there have been some things that stand out. For instance, way back in the history, coverage.py only had a text-based report on your terminal... And the beginnings of the HTML report were contributed by George Song, who just by coincidence years later worked here at edX with me for a year or two; that's a small world kind of story. So he contributed that.

Recently, I've been working on the 5.0 alpha series of coverage.py. The big new feature is going to be - and this is a long-requested feature, so I'm glad to finally be able to get to it - instead of just telling you which lines of your product code were covered, it'll tell you for each of those lines which tests covered that line, so that you can analysis like "Alright, I did a whole test run, but now I just wanna see these tests, what covered it." Or "I can see that only one test covered that line, so I wanna think about whether to do more tests that would get to there" etc.

\[24:21\] That feature has been a long time coming, and Stephan Richter and his co-workers at Shoobx have made some significant contributions this year to that. He added the HTML changes, some of the fixes for the SQLite code that's in there... So they made a lot of contributions, which I'm really grateful for.

A year and a half ago a guy I didn't know named Loïc Dachary, from France - he wrote to me and said basically that his way of working in open source is he picks a project and he commits to it for like three months, and he's fully-embedded in that project for three months. Then he moves on. I didn't know what to make of that, but sure enough, suddenly he was commenting on all my open issues, and triaging them, and trying to reproduce them, and trying to fix them... And there was just dozens of contributions from him all over the project...

**Jerod Santo:** I love that.

**Ned Batchelder:** Yeah, it was amazing. And it was amazing not only because people were getting responses and I was getting contributions, but his energy just sort of helped me with my energy.

**Jerod Santo:** He sparked it.

**Ned Batchelder:** Having him doing things, I was in there doing things, too. So the lone maintainer - not only can you only do as much as one person can do, but it can feel literally lonely... And having someone to bounce things off of, or just see that they're making progress too can really be energizing. So I was really thankful to Loïc for that.

And again, just by coincidence, now Loïc is doing work for one of those companies that I said runs Open edX sites for profit, so I'm glad to have him back in my circle.

**Jerod Santo:** That's such a cool thing... A man with a plan. He's like "I'm gonna go out, I'm gonna do three months, I'm gonna really dive in and go all-in for three months, and I'm gonna move on to the next person." That's really cool.

**Ned Batchelder:** Yeah, and that's exactly what happened. At the end of the three months, I was like "No, don't go away...!" But he said he was gonna do it, and he did it. I was really glad for that time. And maybe it wasn't three months; I'm forgetting the exact timeframe. But there was that period where Loïc was all over everything, and I was really thankful for it.

**Jerod Santo:** Well, he sounds like he might be a future guest, because I've gotta hear -- he probably has stories from all sorts of projects that he's gone into and helped out.

**Ned Batchelder:** Yeah. And until I'd heard from him, I'd never encountered anyone who worked that way.

**Jerod Santo:** I haven't either.

**Ned Batchelder:** My way of working - I make lots of tiny pull requests on things that I need fixed. I use a Vim plugin, and it doesn't work quite right, and I'll go and make a fix. Or \[unintelligible 00:26:53.24\] library I'll make a fix.

**Jerod Santo:** Right.

**Ned Batchelder:** So I will make little changes all over the place, but I'm not just gonna pick a project almost at random - I don't know how he picked coverage.py - and commit to it. So that was a very interesting style of working, and something that I really liked.

The other difficulty I find with being a maintainer is just the context switching. If I'm working on coverage.py with my cup of coffee in the morning, and then I go to work, I've gotta forget about all of that coverage.py excitement that I might have had in the morning, and become excited about Open edX. I'll do that, and during the workday I'm embedded in those concerns, and I'm thinking about what to do and I'm plotting out where I can go from that, and then in the evening - well, now I'm switching back to coverage.py. Then during the weekend it's sort of the same dynamic, but with much bigger shifts.

That kind of context switching can be difficult, not only because you might lose the technical thread of what you were thinking about, but you get excited about like "The next thing I'm gonna do... Oh, now I have to wait eight hours before I can do that thing."

**Break:** \[28:09\]

**Jerod Santo:** I have to ask for your opinion on code coverage, since we're here and you write a code coverage tool...

**Ned Batchelder:** Okay. I have opinions.

**Jerod Santo:** ...and I'm seeing you have 90% code coverage on coverage.py.

**Ned Batchelder:** It sounds kind of ironic, right? Why isn't it 100%...?

**Jerod Santo:** Yeah. You're not a 100% kind of guy?

**Ned Batchelder:** Well, it's not that... I don't know if that's the question you wanted to ask.

**Jerod Santo:** I have a couple questions, that's one of them. Yeah, go ahead.

**Ned Batchelder:** The problem here is that there is a significant amount of code in coverage.py which runs inside the Python trace function, which is code that cannot itself be covered or measured, because you are inside the measurement, and Python is not set up for it to measure its own measuring function. So there's a lot of code there that cannot easily be seen by coverage.py.

**Jerod Santo:** It's like a doctor operating on himself... He just can't.

**Ned Batchelder:** Yeah, exactly. Something like that. So that's where that 10% comes from. I mean, there's a couple of percent that are probably just me not pushing quite hard enough on the lever to get the percentage up, but the bulk of that 10% is because of that problem. And honestly, I've thought about tricky ways to get at it, but I also recognize that it's probably not worth it.

**Jerod Santo:** \[laughs\] So do you feel a pressure to go to 100% because you build a code coverage tool, or do you believe in that level of coverage as a practice?

**Ned Batchelder:** I do believe in that level of coverage as a practice...

**Jerod Santo:** Okay.

**Ned Batchelder:** I have myself personally been in a situation where I had a file that had only one line that wasn't covered, and I looked at that line and I thought "Well, that's fine. There's no need to test that weird case, but okay, let's go ahead." I write the test, and there's a bug in that line.

So I have found it to be useful to get to 100% coverage. I know it can be very difficult, and it means dealing with weird edge cases and maybe contorting a bit to get at those edge cases...

The other thing about 100% coverage is once you get there, then you're really out of luck, because...

**Jerod Santo:** You're not writing more code. \[laughs\]

**Ned Batchelder:** Well, the coverage tool can no longer tell you things about your code, and there's probably still plenty of things you don't know about your code. For instance, code coverage tools can't tell you whether you covered the full range of data that you have to cover in your function, only whether you covered the full range of code in your function... And there's probably tons of edge cases in your data that are missing from your tests, even when your function is 100% covered.

There's lots of downfalls to believing in 100% coverage.

**Jerod Santo:** Gotcha. One question I guess about Python community stuff, because you're in there and you've been a part of it for a long time, and I'm on the fringes of that, looking in sometimes, talking to people who use Python, but not using it on a day-to-day basis...

**Ned Batchelder:** \[32:17\] By the way, just to fully flesh out how deeply embedded I am - I'm also the organizer of the Boston Python Meetup.

**Jerod Santo:** Okay, so you're deep in the community. Love it.

**Ned Batchelder:** I'm deep in the community.

**Jerod Santo:** That's awesome. A great community, by the way. I love -- all the pythonistas we talk to, we always have a great time. So that 100% code coverage goal - do you find that to be a norm inside the Python community? I always think of the docs -- great documentation is something that Python needs to strive for, and I love that about pythonistas, even though that term... I can't say it too many times; I start to feel strange, I'm hitting the ratio... But what about code coverage? Is testing that important, or is it just for you, Ned?

**Ned Batchelder:** No, I think Python has a pretty good track record of testing as a good thing. One of the things Python people will say when they're debating with static typed language people is "You don't need static type checking if you have good tests." You could do a whole hour about getting into the details of that debate, but certainly because we can't find the types of errors that static typing at compile time can find you, we do rely more on tests to find those kinds of problems. And that's also shifting a bit, because now we've got gradual typing in Python, that can be checked by static type checkers separate from the compilation phase... But that's still fairly new to the community, so it'll be interesting to see how that see-saw tilts as gradual typing becomes more and more \[unintelligible 00:33:56.14\].

**Jerod Santo:** We mentioned a couple times you've been doing this maintenance thing for 14 years on coverage.py...

**Ned Batchelder:** Yeah.

**Jerod Santo:** I'm curious how you stay motivated. I liked the story with Loïc, who comes in and gives you this spurt of motivation... But even on a technical level, just working on the same code for such a long time... I'm curious if you've had fits and spurts, or if you've just been "slow and steady wins the race"? How did you stay motivated all these years?

**Ned Batchelder:** Well, one thing -- my personality is I will stick with a thing for a very long time. I've been here at edX for 6,5 years, which is longer than probably everyone but five people here... I've been in the Python world since 1999, I'm about to celebrate my 35th wedding anniversary...

**Jerod Santo:** Congrats. That's awesome.

**Ned Batchelder:** Thank you. I pick things and I stick with them. So just by my personality, once I start a thing, I probably am fine sticking with it. Also, I enjoy the polishing aspect of projects. There's people who just wanna start new things and just be throwing out new things all over the place... I like being able to say "I really nailed that. And if it took a while, that's okay, but we're gonna make it really, really good." So I don't mind sort of "Ugh, I've been working on this project for 14 years."

**Jerod Santo:** \[laughs\] Yeah.

**Ned Batchelder:** The place where that bothers me is when there's a thing that I still don't understand about my own code, and once a year I'm revisiting the same thing and I feel like "Why can't I internalize this finally, after all this time?" So there is that aspect to it. So there's my personality.

\[35:45\] The other thing is hearing from people who use the project, getting contributions, knowing that it's helping people to improve their code in various ways... Because I work in a Python world at work, we use coverage at work, and so I see how it's being used there, and that helps inform what I think is important to add to the tool... So it's that kind of thing, that seeing it actually get used and actually have some benefit... Which again, to go all the way back, that's why most people get started writing software in their spare time and then giving it away; you sort of can't explain that in pure economic terms.

**Jerod Santo:** No, you can't.

**Ned Batchelder:** It's about the sharing and having the benefit reflected back to you from others.

**Jerod Santo:** Now I'm gonna ask you just a series of maintainery questions, so you can just use whichever project makes the most sense, or helps answer the question better, whether it's coverage.py or Open edX... Whichever one you choose.

**Ned Batchelder:** Sure.

**Jerod Santo:** I guess the first one - you may have already answered this, but I'll just ask explicitly and see if this is true... What do you like the most about being an open source maintainer? It sounds like maybe that feeling you get when somebody is using your thing, but I'm wondering if that's truly the number one, or if that's just one of the things you like. What would you say if you're like "Well, the reason that I do this, or the thing I like the most about this thing I do with my free time...", what would it be?

**Ned Batchelder:** That's a good question. On the coverage.py side, I really like being able to build a thing, and do it well. Just the pure hacker feeling of it. You tell people "You like coverage, that's cool, but what if it could tell you which tests covered each line?"

**Jerod Santo:** The challenge.

**Ned Batchelder:** \[unintelligible 00:37:34.20\] How would you do that? That would be amazing. So it's cool to just "Alright, let's think it through. What would it take? How can we make all that happen?" So I like the building aspect of it. But the other thing - and I keep coming back to this - I also like the people aspect of it. As I get older and older, I find people more and more interesting, both in terms of what I get back from them and also the challenges in working with them.

On the Open edX side - honestly, I'm not as technical in the Open edX codebase as I was 6,5 years ago when I started, because I've been doing a lot of community work... But we do an annual conference every year, and it's just amazing to fly to that place and see all those people from around the world, who are there because of this project. They're people that I've known for years now, and I know what sites they're building, and the kinds of education they're doing, and it's just a community of people that really appreciate what I'm helping them get and what I'm helping them do, and that's really rewarding.

**Jerod Santo:** Flip that on the other side... What do you like the least about being an open source maintainer?

**Ned Batchelder:** I don't like the feeling that I'm not doing a good job at it, but I'm trying not to beat myself up. It's not like coverage.py has to do whatever I think it should do. It's sort of got a safe position as a popular project now, but even if someone were to make a new project and that were to become the one - that would be okay. So I try not to beat myself up about it.

One of the things I don't like about being an open source maintainer is that people have gotten into open source for that sort of pure sharing idea, and there's a lot of people getting value from open source projects who do not think that way, for a variety of reasons; it can be easy to feel bad about that imbalance, but I'm trying to think more realistically about it, and at sort of a deeper level about why that imbalance is there, and what could be done about it.

**Jerod Santo:** Over the years do you have any "war stories", or any crazy things that have happened, or bad things? You said you haven't had too much drama, which is nice...

**Ned Batchelder:** \[40:02\] No.

**Jerod Santo:** But anything else that maintainers might relate to, or enjoy hearing about?

**Ned Batchelder:** Well, the craziest thing that happened with coverage.py -- I mean, of course there's stories like "Oh, there was that day that I released 4.3.1 and then also realized that it was broken, so I had to release 4.3.2, but that fix was also broken..."

**Jerod Santo:** Sure. \[laughs\]

**Ned Batchelder:** So there's days like that, everyone's been through that. But the craziest thing that happened with coverage.py - coverage.py has an HTML report, so it generates HTML pages... And for whatever reason, I was using single quotes around the attributes in my HTML tags, just because it's visually less obtrusive than the double quotes... And I got a bug report that said "Could I please change to double quotes? Because I've got a tool here at work which is copying the files around, and it needs to find the stylesheets, and it can't find the stylesheets because it only finds stylesheets that have double quotes around the URL." I was like, "Who's writing tools that are parsing HTML and doesn't know that both styles of quotes are okay?"

**Jerod Santo:** Right, yeah.

**Ned Batchelder:** So I was like, "No way. I am not changing for that." But then I went to PyCon, and at PyCon there are sprints after the conference, and I was there for a day of sprints, and someone comes up to me and says "Hey, I'm looking for something easy to do", and I say "Well, there are the issues." He pulled up that issue and says "Well, I can change all the single quotes to double quotes..." And I thought "Do I wanna let him do that? This is just the dumbest change ever... But okay. He's gonna do it, he'll feel good about it, whatever." So he made the change, and in the entry in the changelog I said "Change the quotes to double quotes to capitulate to the absurd request from 'software engineers' who don't know that single quotes exist."

**Jerod Santo:** Love it.

**Ned Batchelder:** So I got a little snarky in the changelog, but the change was there, and everyone's happy now.

**Jerod Santo:** That's awesome. It's funny how we can go about such trivial things, such small, nitpicky...

**Ned Batchelder:** Yeah, I know. Why did I care? Like, okay, double quotes; what's it to me?

**Jerod Santo:** Right.

**Ned Batchelder:** But it's because it's for such a wrong reason.

**Jerod Santo:** Yeah, exactly. It's the principle of the thing, not the style.

**Ned Batchelder:** It's the principle of the thing, that's right.

**Jerod Santo:** Do you have any tips or tricks that you've learned over the years that make your life easier as a maintainer? Or maybe text expander snippets, or scripts you use, or anything like that that you can share?

**Ned Batchelder:** Well, I do use GitHub pull request issue templates. If you go to write an issue on coverage.py, it'll offer you either this as a bug report, or a feature request, and then it prompts you for what to fill in there. I'm not sure it's making a huge difference in the quality of the bug reports, but it seems like a good first step. GitHub is doing a lot of good little things like that, that should make open source work better.

Again, from my point of view, my main tip is to really think about the person on the other side of that issue or pull request, and try to be good to that person, whether that means using more words when you tell them why you're not gonna take their pull request, or answering them quickly, even if it's to say "Thanks, but I can't get to this for two weeks", which again, I'm not doing that well myself, but I'm trying...

I feel like I've been saying the word "people" more than I've been saying "code" during this podcast, and I think that's for a reason. I think the whole point is people, ultimately... So the more you can think about it as a people effort than a code effort, I think the better off it'll go.

**Jerod Santo:** Absolutely. Well, speaking of people, are there any people out there that are maintainers, or they provide you tools or services, that you admire or appreciate and you wanna give them a shout-out and say thanks? Or maybe even point somebody towards a tool that you use, and that helps you in your day-to-day maintenance?

**Ned Batchelder:** \[44:07\] Yeah, sure. One tool that I haven't been able to use on coverage.py, but I have used on other projects, is called Hypothesis; it's maintained by David MacIver. I'm not sure that I'm pronouncing his name right... And it is a property-based testing tool. It takes a little getting used to, but when you get to the point of knowing how to make it work for your code, it can do a really great job. Instead of writing explicit tests of "This is the input, and this is the output I expect", you write code that expresses what properties you expect in the results, and it tries to generate input test cases that fail those properties.

**Jerod Santo:** So is it kind of like a fuzzer?

**Ned Batchelder:** It's kind of like a fuzzer. It's a little bit more advanced than that. For instance, you can say "I need a list of integers, at least ten long, as input to this function", and it will start generating lists of integers, and it'll start doing things like -- you know, the list is a million long, or the list is exactly ten long, but all of the numbers are bigger than 2 to 64, or whatever; just try to find all those weird edge cases. And then if it does find a failure, it tries to walk back to a simpler case that still fails, to try to get at exactly where that line is between what works and what doesn't work.

So it's the same ideas as a fuzzer, which is put some intelligence into the randomization of the inputs, and then detect whether something failed.

**Jerod Santo:** That's cool.

**Ned Batchelder:** Yeah, it's very cool. I've used it on other projects to good effect; I haven't been able to use it for coverage.py yet.

**Jerod Santo:** Now, if we could just hypothesize on the actual code required to pass the test, then my job here would be done.

**Ned Batchelder:** Exactly, yeah. No, no, you've still gotta record podcasts.

**Jerod Santo:** Oh, that's true. Anybody else, maintainers you admire/appreciate? Maybe some sort of effort that you've seen put together? "A maintainer does this thing that I really liked, and I stole it and I do it as well", or anything like that?

**Ned Batchelder:** Another name that's in my head - I've never met him - Daniel Hahler. I don't know how to pronounce his last name. His GitHub handle @blueyed. He just seems to pop up on a lot of projects. He's been helpful on coverage.py; not in quite as large a way as the other people I mentioned, but he's been sort of a consistent presence... And when I go and look at other projects, I see his name in their pull requests, too... So I think he deserves a shout-out, because he seems to be doing a good job at spreading his efforts around to a lot of projects, and just improving things all over the place. Julian Berman is like that, too.

**Jerod Santo:** Awesome.

**Ned Batchelder:** I keep running into Julian. I had dinner with him. When he was in Boston we got together and that was really cool, but I've known him online as a faceless maintainer of code for a long time, and it's good to see his name pop up in various places.

**Jerod Santo:** Isn't that fun when you know somebody online for years, and you've never actually met them, and then you finally get to meet them in the flesh? It's always so interesting.

**Ned Batchelder:** \[47:20\] Yeah. Well, the real trick is do you call him by his real-world name, or by his online nick?

**Jerod Santo:** You tell him "Hey, what do you do?" \[laughs\]

**Ned Batchelder:** Well, it feels weird to call someone Daniel if you've only known him as @blueyed... But you're not gonna call him @blueyed when you're sitting across the table in a restaurant, so... You've just gotta get used to that cognitive shift between the online world and the real world.

**Jerod Santo:** Or just the social awkwardness of calling him @blueyed and dealing with the consequences.

**Ned Batchelder:** Yeah. You've gotta hope he doesn't \[unintelligible 00:47:50.27\]

**Jerod Santo:** \[laughs\] Exactly. Well, Ned, this has been lots of fun. I love the two perspectives that you bring with coverage.py and with Open edX. Any final words to maintainers out there, or the open source community writ large? If you had a call to action, or anything you'd like to say before we call it a show?

**Ned Batchelder:** Yeah - keep up the good work, stay optimistic, don't let the bad stuff get you down, whether that's people yelling at you at your issues, or feeling like someone should be contributing when they're not contributing, in whatever form that contribution might take. Open source started from a really good impulse, and it's those good impulses that are gonna keep it going.

**Jerod Santo:** Awesome, Ned. What's the best way people can reach you online?

**Ned Batchelder:** I'm on Twitter as @nedbat. It's the first three letters of my first and last names, Ned Batchelder. Coverage.py is on GitHub as /nedbat/coveragepy. I have a blog that I've been running (again) for way too long on nedbatchelder.com, where I write about open source. One of my recent pieces was about me getting over that feeling that big corporations should be doing more to help open source, or at least understanding more about that dynamic... So you might wanna read about that. Those are good ways to stay in touch.

**Jerod Santo:** Awesome. Listeners, as you know, the links are in the show notes; all the ways you can get in touch with Ned will be there, as well as links to all things discussed, and to the people shouted out, so... Hit up your show notes for those things.

Ned, this has been a lot of fun. Thanks so much for coming on the show.

**Ned Batchelder:** Thank you, Jerod. It's been fun.
