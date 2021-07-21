**Jerod Santo:** Welcome back, friends. It is JS Party time. We have a fun show for you today. I am joined by Amal and Chris. Let's talk non-dev things. Maybe pre-dev... Help me understand what we're about to talk about here. It's kind of like when you're not coding; there's tons of things around the code. There's decision-making, there's design, there's architecture, there's convincing people that what you're doing is the right thing...

**Amal Hussein:** Aligning people...

**Jerod Santo:** There's collaboration... There's just many concerns that happen even before you start to code. And then you have the coding stuff, which we talk about all the time, and then there's things that happen afterward... So maybe we'll get to the after as well, but we're gonna start with before, at least. And this is a world that, Amal, you've been living in quite a bit. Decision-making, what to work on, how to build it... Tell us what your thoughts are.

**Amal Hussein:** Yeah. Jerod, this is my life, really. I mean, it feels like the longer I go in my career, the less and less code I write. And in some ways it's good, in some ways it's annoying. \[laughs\] In some ways it's good, because -- I think the thing that's changed for me is, you know, when you first start out and you're really excited about software, and you get your first job, and you get your first task, the thing you first start doing is banging your keys in the keyboard. You go right into the code, you don't even think. And then you're thinking and coding at the same time, and all the cycles... You have like 20 million cycles before you get to the solution, because you're really bad at parallelizing your thought stream... Because it's hard to write software and think about how you're going to write software at the same time, to do it well anyways... It takes years of experience to do that seamlessly.

\[00:04:11.27\] And now, the more mature you get, you realize - no, no, no. You have to really design the solution, think about it, iterate on it, outside the keyboard sometimes... Potentially, depending on how large the problem is, get feedback from colleagues, align on it so you're not arguing in your PR, you don't have like a 200-comment PR, because people have opinions, and you've solved it a different way.

So there's just so much that goes into that pre-time... So in a sense, I'm happy now that I spend less time on the keyboard, because I know when to just focus on the keyboard... But I think the annoying thing comes for me in that the flipside is also for me that being a principal, a lead engineer now, we're just ahead of people, and you're in this crazy land between engineering and product and design, and architecture, and platform, and this and that... And IT sometimes even, and support... You're in this world with all these other people that aren't writing software all the time necessarily; there are other stakeholders, technical or non-technical... And yeah, I'm just spending a lot of time there, coming up with how we're gonna do what we need to do, iterate on that, and then come to my team with a plan. And then it's like "Go!"

**Jerod Santo:** What does that plan usually look like? What level of granularity are we talking about? "Here's a bunch of specs, or here's some user stories to go work on"? Or are we talking about bigger-picture, like "This is the direction that we're going"? Give us more the \[unintelligible 00:05:45.04\]

**Christopher Hiller:** Yeah, that's a great question. So it's all of the above, quite frankly. We have our kind of \[unintelligible 00:05:52.15\] and so then it's my job to come up with -- myself and other colleagues of mine that are in lead roles, come up with essentially the architecture, the implementation, the feasibility, what the MVP looks like, do the trade-off analyses for different options, present that to our stakeholders for feedback, get a thumbs up there, and then when it comes down to the actual team level, I'm involved with the story creation and breakdown and sub-tasks... Kind of like being a consultant on like "This is how we should do it." And then obviously, from there we iterate with the actual folks that are gonna implement it. But yeah, I'm kind of involved in both that, and even code reviewing it... And obviously, at times, when I get the chance these days, it seems less and less, actually contributing to the code... But yeah, I obviously work alongside that, but I'm heavily involved with the code review process, obviously.

**Jerod Santo:** Yeah. What about you, Chris? Are you a "grab a ticket and work on it" kind of a developer? Are you higher-level decision-making in the strategy of the software? What's your role usually in this?

**Christopher Hiller:** Well, it varies. My last job at IBM was more of a dev advocacy/open source engineering type role, and so I'm working with the open source communities, I'm working with maintainers and foundation peeps... So I haven't been on a product team in really any capacity in a long time.

I'm trying to think about how I work and how things happen in the open source world - there are certainly quite a few differences in how work is done, and who does the work, and where the ideas come from, and how those ideas get bounced around to stakeholders or not...

**Amal Hussein:** \[00:07:48.12\] There's some interesting parallels though, Chris... For example, folks thinking that a lead maintainer of a large open source project needs to have the highest number of commits, which is completely a very false correlation. There's so much governance that goes into open source, so I think for me there's lots of parallels with enterprisy product companies. Lots of parallels, wouldn't you say?

**Christopher Hiller:** Well, I can't say I've really worked on much enterprise software, but it feels a bit like night and day to me. I spent the earlier part of my career working in product companies, building products, working in a team, essentially collaborating with designers and product people and all that sort of thing, for the past five years or so, and it doesn't look like that. And I prefer what I'm doing now, obviously... \[laughter\]

**Amal Hussein:** Well, to be fair -- to clarify, Chris, I mean to say that the parallels are in how the software gets made. There's still a before-code phase for large, new features in widely-maintained, adopted projects.

2. Sure. Sometimes.

**Amal Hussein:** And that before-code phase is usually involved in RFC, which is very similar to kind of what I would put together as my final proposal plan for architecting a new set of features... And then you have architecture proposal \[unintelligible 00:09:17.06\] on my side, and then you have feedback on the RFC, and all the discussion, and those are your stakeholders - the users of your library and the other maintainers. And they contribute to that issue on GitHub, they have that discussion... But for me, it's a series of 6-7 meetings over four weeks, or something like that. \[laughs\] Unfortunately. We're not as good at async communication in enterprise land, unfortunately...

**Jerod Santo:** \[unintelligible 00:09:46.13\]

**Amal Hussein:** But for me, those are the parallels.

**Christopher Hiller:** Yeah... Um, most open source projects don't have an RFC process.

**Amal Hussein:** Oh, I'm thinking of large-scale ones, I guess...

**Christopher Hiller:** Right. Most are very informal.

**Jerod Santo:** Well, how about Mocha? That's the one that you maintain...

**Amal Hussein:** Wouldn't you say that about startups though?

**Christopher Hiller:** Yeah, Mocha is really informal as well.

**Jerod Santo:** Yeah, I would expect it to be.

**Christopher Hiller:** I'm spending a lot of time working with Appium lately, and it's also pretty informal.

**Amal Hussein:** But most software development is informal though. There's a good chunk of the internet's websites code isn't living in GitHub. It's not even in source control. I think RFCs are the most formalized way in open source to collaborate on big ideas... And I would say not every company has an architecture committee reviewing process, so...

**Jerod Santo:** Right...

**Christopher Hiller:** Yeah, yeah. I mean, if you look at -- sure. So yes, this RFC is -- I can see the parallels there. I think I'm just kind of saying in my experience, the projects that I've worked with are not at that level... And that's fine. I certainly wish certain projects would have an RFC process, but you know, things happen how they happen.

**Amal Hussein:** We should talk to GitHub about putting that as a default template, or issue type, or whatever... There could be a way to do that. But anyways. I hope someone at GitHub is listening. \[laughs\]

**Jerod Santo:** I think lots of us are kind of in the middle, versus in either extreme. It's probably more of us on the small extreme than the large extreme, but I think many of us live on a bell curve of org size and infrastructure around their work, and I think Amal is probably representing the larger enterprise side, where there's a lot of -- let's just call it "ceremony", for a lack of a better term... But things that need to happen.

**Amal Hussein:** Cogs. Just kidding.

**Jerod Santo:** \[00:11:56.15\] But as developers -- I mean, all three of us here are developers, whether we're actively coding day in and day out or not, at a certain point some sort of idea or spec or need comes to you, and you're still pre-code. Like, "Here it is..." Whether it's a JIRA ticket that tells you exactly what needs to happen - okay, kind of not that interesting. But most of your tickets are written in a way that still you don't know what to do when you get it, right?

**Amal Hussein:** \[laughs\] "Is this English?"

**Jerod Santo:** Yeah, "What in the heck do they want here?"

**Amal Hussein:** "What this?! Qu'est que c'est?"

**Jerod Santo:** So when you get that, when you have that tangible thing, which is either a need, or a user story, or something... Like, "Hey, we're gonna add comments to the website." Right? Like, there you go. Before you're coding, are there processes, are there things that you do personally in your dev work to figure out how you're gonna attack that problem? Or is it just like break out the editor and start writing some tests or some code? Or pop open your WebPack config and just get it rockin'? What do you guys do?

**Amal Hussein:** I actually think in my head Chris, before he starts coding or solving any problems, he puts on either super heavy metal rock music, and cracks open a can of beer, or he's like listening to classical music and smoking a cigar. It's one of the two, and I'm trying to understand, Chris, which of the two is closer to reality? And you're gonna say neither, right?

**Christopher Hiller:** I am a paradox...

**Jerod Santo:** A paradox... \[laughter\] He's not letting you in.

**Christopher Hiller:** I'm an enigma.

**Amal Hussein:** You know what - dang it, you know...

**Jerod Santo:** He's not gonna let you in --

**Amal Hussein:** I thought a direct question would be one way to find out something more about you, but now you're just even more intriguing and mysterious. Dang it, this experiment failed...

**Christopher Hiller:** Well, mystique has never really been one of my strong suit...

**Amal Hussein:** \[laughs\]

**Christopher Hiller:** But okay, a lot of my role now is R&D, making hypotheses and doing research, building prototypes... That's a lot of my role right now.

**Jerod Santo:** No wonder you're having fun.

**Christopher Hiller:** I'm loving it. I get to come up with an idea, and I go and I talk to people and say "Okay, is this idea a stupid idea, or is this idea something that I should build out more and see if it's worth doing?" So I'll talk to people and find out, and then I'll go either way with it, and then if they're like "Yeah, it sounds like a great idea", then, well, I'm gonna build my prototype. And I don't do a whole hell of a lot of thinking about what I'm gonna build, because I'm trying to get in there and see what's really possible, and which direction I should really take things.

It's not necessarily "Hey, let's move very fast and do things just barely scraping by, just to get it out the door; it's not like that. It's experimentation. It's fun, and I find that the easiest way for me to experiment and what makes the most sense to me is to actually build something, throw it away, and go build something else. I throw away a lot of code. It's fine, I can live with myself... But I don't know if other people who may do more prototyping kind of do things that way.

I'm pretty new to having this as a defined part of my role... So if there's a better way to do it other than just getting in there and just throwing stuff to the wall and see what sticks, I'm all ears.

**Jerod Santo:** Well, that sounds like a really fun role. I've done that some, but never been cut loose to just research and develop. I sure would like to. Oftentimes when I do those things, it's at the cost of something that I'm not doing, which I know I should be doing, or I could be doing. So there's opportunity cost, which tends -- as someone who's running a small business, you tend to take the opportunity cost very highly, because it's like "Well, these things need to get done, or else things fall apart." And these things might be great, but they're gonna get dropped down. So I would love to have unfettered access to idea prototyping, and being able to just throw code away when it's not panning out.

**Christopher Hiller:** \[00:16:12.08\] Yeah. I wouldn't call it unfettered. It still needs to make sense.

**Jerod Santo:** Well, sure. I mean unfettered in terms of -- it's a part of what your allotted work time is for.

**Christopher Hiller:** Yes.

**Jerod Santo:** Yes. So you're not opportunity-costing necessarily... Like, "Well, I have this time dedicated to this role, and I'm gonna do the role." And that sounds great. So you're pretty fast, so you might come up with an idea, you might throw a pass to a colleague, or maybe your users, or your customers, and then you're basically at that point breaking out the code and start coding.

**Christopher Hiller:** Mm-hm. Mm-hm.

**Jerod Santo:** Any whiteboarding, any diagramming or anything you do?

**Christopher Hiller:** No.

**Jerod Santo:** Go ahead, Amal.

**Amal Hussein:** No, I said that's a super-cool job... I love that.

**Jerod Santo:** Yeah. I'm jealous also.

**Amal Hussein:** I'm super-jealous. I'm so jelly. Yeah. That's great. You're gonna have to tell me if you get more creative over time, or less creative over time. I think my deepest fear is that I'm gonna run out of ideas, and I don't know -- I'm curious how the creativity might evolve. Because you're in a very creative role, so I'm just curious if there's gonna be like highs, or lows...

**Christopher Hiller:** Yeah, I don't tend to run out of ideas, but I have so many bad ideas... And that's why I need to validate my assumptions and talk with people who know better than I do.

**Jerod Santo:** How fast is your feedback loop? When do you know your idea is bad? Are we talking within hours, within days, within weeks?

**Christopher Hiller:** Yeah, so I talk to a couple of people, maybe get that done in a week or two, and just kind of get a general feeling, go and maybe build that little prototype, and then from there, it can become more formal, where there's an actual proposal... And I haven't gotten to this part of the job yet. But it seems like there might be a drawback, where I had this idea and I built my prototype, and I've written a proposal. And everybody loves the proposal, and somebody else implements it, but I don't get to.

**Jerod Santo:** \[laughs\]

**Christopher Hiller:** That might be a little weird for me.

**Jerod Santo:** Isn't it more likely that the prototype becomes the implementation? Isn't that how things usually work?

**Christopher Hiller:** It's pretty unlikely the way we're set up.

**Jerod Santo:** Well, that's a disciplined company then.

**Christopher Hiller:** Well, I'm not like -- so I work for a product company, and there are people building our products. But I'm not in their division, or whatever. I'm not on those teams. So we're fairly sequestered, I guess. I don't think there's really any way I'm gonna build some dumb prototype and it's gonna actually show up on the website.

**Jerod Santo:** Well, that's good discipline, like I said.

**Amal Hussein:** They are a testing company, you know...? Don't you work at Sauce Labs?

**Christopher Hiller:** Mm-hm.

**Amal Hussein:** And I know from a recent email that you guys just acquired Backtrace... Congratulations...

**Christopher Hiller:** Thank you.

**Jerod Santo:** "Thank you..."

**Amal Hussein:** I was like, "Did you really need to email me about that, Sauce Labs?" I felt like I really didn't need to know. But now that I know, congratulations.

**Jerod Santo:** \[laughs\]

**Amal Hussein:** It's really exciting.

**Jerod Santo:** Are you also in Mergers and Acquisitions, Chris, or...?

**Christopher Hiller:** No. \[laughter\]

**Jerod Santo:** You're supposed to say "No comment." You're supposed to stay mysterious.

**Amal Hussein:** Yeah, exactly.

**Jerod Santo:** One of your good ideas...

**Amal Hussein:** Well, to actually answer your question, Jerod...

**Jerod Santo:** Yes.

**Amal Hussein:** For me, there is no -- at this point I can't even think of the last time I was figuring out how I wanted to design the problem before writing it... So my hands don't touch the keyboard until I kind of know how I wanna target this problem exactly. So my time \[unintelligible 00:19:58.15\] is very scapular as a result of that.

**Jerod Santo:** Hm... Slice and dice.

**Amal Hussein:** \[00:20:03.07\] I'm like, "I need to get from point A to point B", and it's like "Okay, most efficient route." That's it. And the only reason why I know what the most efficient route is, or my preferred route, is because I've thought about it in advance of writing anything, or touching the keyboard.

**Jerod Santo:** Okay.

**Amal Hussein:** So yeah, that's my -- you know, it's required for me. It's very anxiety-inducing to write code before you know exactly how you wanna finish the solution end to end... It gives me anxiety.

**Break**: \[00:20:30.29\]

**Jerod Santo:** I kind of take the Mike Tyson approach... He says "Everybody has a plan till they get punched in the face."

**Amal Hussein:** Oh, right.

**Jerod Santo:** So the plan becomes worthless immediately, once the real world hits. So I try to get as fast as possible into some sort of coding, knowing that whatever I come up with in my mind or on a whiteboard, it's usually gonna be like -- as soon as I start coding it, I'd be like "No. That actually sounded really good in my brain, but when it hits the real world, it ends up being tossed to the side anyhow." So I'm pretty fast to just experiment, and maybe just think through some small coding, using kind of a TDD flow to design the solution and let it kind of come out somewhat organically.

That doesn't mean I don't put any thought into anything. I'm not just like a "Head West and start coding." But rarely will I spend too much time before having something that I can at least touch and feel intellectually.

**Amal Hussein:** Yeah. That's awesome.

**Christopher Hiller:** Amal, you're building big things...

**Amal Hussein:** Yeah. Usually. But even when I'm working on a small feature, I kind of like know exactly what I need to do before I touch the keyboard. I don't like figuring it out while I'm trying to write the code. I like to look at the code, know where I need to make the change, do my research, walk around and like snoop, look for how someone else did it and see if I even need to invent the solution... Is there prior art? Otherwise, you're just reinventing the wheel, or forgetting to use a common util that already existed... You know what I mean?

**Jerod Santo:** Yeah.

**Amal Hussein:** It pays to do a little bit of "How I do this" investigation. And literally, I did not accidentally forget a word, it's literally "How I do this." "How do", for short.

**Jerod Santo:** \[laughs\] Okay, so maybe I spoke too brashly... Because I also do those things. Maybe I just don't think about that as planning, as much as like that's part of the process. Like, "Do I even have to write this code?" is always the question that I'm asking.

**Amal Hussein:** Yes, that's what I'm saying. That's the first thing. You've gotta be lazy.

**Jerod Santo:** Yeah. So I'm just kind of like--

**Amal Hussein:** Um, not only lazy, but just--

**Jerod Santo:** I guess I just figured that that's like dorking around time. Like, I'm not actually doing anything yet, but maybe I am... I'm \[unintelligible 00:23:39.05\]

**Amal Hussein:** No, you are. You are, trust me. Your mind is a powerful weapon, Jerod.

**Jerod Santo:** Thank you.

**Amal Hussein:** So you are absolutely--

**Jerod Santo:** You've just made the soundboard.

**Amal Hussein:** Oh, God...! \[laughter\] Of course I did... Of course. A self-serving comment. Oh, my God.

**Jerod Santo:** Draw a marker right there, I'm gonna cut that one out...

**Amal Hussein:** \[00:23:55.22\] Could you just anonymize my voice? I don't wanna forever be associated as the woman who's -- "Is she the woman behind "Jerod, your mind is a powerful weapon"? \[laughter\] You know, that's my claim to fame now...

**Jerod Santo:** Yeah.

**Amal Hussein:** ...because you're constantly playing it, and it ends up on all the podcasts on Changelog...

**Jerod Santo:** That's right. I just show up as a guest on other people's shows and just play that clip... Yeah.

**Amal Hussein:** The mind is a powerful -- yeah. Anyways. So... No, your mind is constantly solving problems, and our employers get a lot of free time from us. Unpaid labor, I should say... The subconscious is much more absorbent than your conscious mind. So even when your conscious mind is skimming...

**Jerod Santo:** Back when I was doing consulting, I would tell that to my potential clients. I would say "If your problems are interesting enough, I'll work for you 24/7, but I'll only charge you for the times when I'm writing the code." Because I actually can't stop thinking about it.

**Amal Hussein:** \[laughs\] Exactly. Exactly.

**Jerod Santo:** I think they like that.

**Amal Hussein:** It sounds like a puzzle.

**Jerod Santo:** Yup.

**Amal Hussein:** Yeah, we're lucky we get to solve problems for a living, so... Lucky us, Jerod... And Chris, the enigma...

**Jerod Santo:** It's fun. It is fun. And Chris gets to solve problems that he devises, too. He can just come up with something and solve it.

**Amal Hussein:** Yeah, he can make up his own stuff.

**Christopher Hiller:** Yeah, create my own problems.

**Amal Hussein:** Keep himself employed.

**Jerod Santo:** \[laughs\] That's right. "See, I create the bug, and then I fixed the bug. I created my own work."

**Amal Hussein:** Yeah. \[laughs\] But the challenge with Chris' job, which is why, Chris, I'm very genuinely curious about this for you, is like -- you know, for me it's very much like you're in Hard mode all the time. I live my life in sprints. I'm working really hard for a month or two months, and then taking a down month, where I chill out... And I feel like when you're in R&D and you're working on this creative project, and it's like one thing after another, after another - I feel like you have a lot of high-intensity intervals for your brain, so I'm really excited to see what that's like for you over time... You're just like, "No, I'm an idea factory, and I'm willing to mill it out."

**Jerod Santo:** He's not going to tell you...

**Christopher Hiller:** I don't know... I think maybe it's just like a different style of how I prefer to work... Because what's really gonna stress me out is like daily stand-ups, and deadlines, and stuff like that. So if I can provide some vague "Well, I think it'll take me this long to have something to show", and then I'm not gonna freak out about that... But I don't get too stressed out working this way, let's just put it that way.

**Amal Hussein:** Yeah, but you just hit something for me that's so important, which we should double-click and do for folks... Especially folks who are managers that are listening to this... Please pay attention. I'll give you a minute to take out your notebooks...

**Jerod Santo:** \[laughs\]

**Amal Hussein:** Okay. So Chris, what you've just said was like "I don't have all these external artificial deadlines and pressures", and also just like cadence meetings, which really are more like chores than they are useful... You know, sometimes \[unintelligible 00:27:10.09\] I'm given this kind of unfederated control of my time and creativity, and because of that, I don't see myself really getting tired of this, or just... Whatever. Like, I'm productive and happy. Managers - it's about output, and I really do think we have a lot of rigidity in what we expect of engineers and their time, and also their ability to be productive. Some people are better at night, and some people prefer writing software in the mornings, or whatever. Some people, if they have one meeting in the middle of the day, it throws their entire day off.

Makers' hours are a thing, and they're different than manager hours... And I think we should be working more towards making our makers as happy and comfortable as possible... Because writing software is an art, and you have to respect the creative brain that's required to produce that.

**Break**: \[00:28:10.16\]

**Jerod Santo:** For this segment we're gonna be talking about a recent Dan Abramov blog post about npm audit, which probably at this point we're all aware of npm audit; that's one of the things this post is covering.

We had some folks from Npm on the show way back when. The company that got acquired and was doing the audit stuff got rolled out together. I can't remember the fella's name. - very nice guy - talking about npm audit... But here we are, it's probably a couple years later, and Dan Abramov says the way npm audit works is broken. It's rolled out as a default after every Npm install, was rushed, inconsiderate and inadequate for frontend tooling. He then goes on to say "If you ever heard the story about the boy who cried wolf...", and we probably have heard that one, where every time he cried wolf it was a false alarm, and then when it was finally true, his parents didn't believe him, so the wolf ate the sheep...

And Dan goes through, in great detail, how npm audit works that way, mostly becuase there's so many false positives. They're not false insofar as it really is reporting real vulnerabilities, it's false because those vulnerabilities, for whatever reason, are irrelevant to your code, in many cases. So because of that, it's mostly an annoyance, it makes everybody's lives a little bit worse, for various reasons... And it was broken by design, he says, because it was added as the default, a post-install deal.

I'm curious what you two think of what Dan has to say about npm audit itself, but also about this general software challenge of tooling that is overly noisy and ends up basically making itself useless. Think of notifications and things that we build in order to notify us when there's problems such as this, which - in theory, it's very useful knowing when your code has vulnerabilities. It's very useful. But because of implementation or some of the hard problems out there to solve, end up becoming more of an annoyance, and you just ignore it; you just don't pay any attention, like "Oh, I don't pay attention to --" It's like the compiler warnings. "Ah, those warnings don't matter." And then when it actually has something that's real, you're no longer paying attention to it. What do you all think?

**Christopher Hiller:** \[00:32:20.22\] Well, I've complained about this for a couple of years... And npm audit itself I don't see as being necessarily the problem, but it is part of the problem. Essentially, what Dan's saying in this article is "Okay, somebody has paid a security researcher to go and find prototype pollution bugs in these random JavaScript libraries", or what have you. And that library might be consumed by, say, a build tool. And that build tool will output code, but it doesn't really have anything to do with that vulnerability. a) The vulnerable code path might not even be hit, and b) even if it was hit, the context in which the code is running, which is like a shell, or a command line, is already vulnerable because it's already a shell.

It's just like all these warnings basically become then irrelevant. Now why is it this way? Well, static analysis of security problems - that's what npm audit does; it looks and sees "Oh, is there a dependency there that has an associated CVE?" "Oh, yes." And that's essentially all it's doing. And certain other companies, that start with an S and end with a k - they do something similar, where it's like "Let's analyze your dependencies and see which ones are broken." But as I said before, it doesn't know that you're actually using the vulnerable code, and it doesn't know where that vulnerable code will be run, because it's examining code at rest. Code at rest is a text file. It's not a security risk until it is run. So then wherever the code is run, that's where you should worry about your attack surface.

So these static analysis tools are essentially too dumb to do this, and with a language like JavaScript, which is extremely dynamic, it becomes an even tougher problem. With something like, say, a Java, you may have enough type information and introspection to understand "Okay, is this vulnerable code actually run?" And maybe you can do that with static analysis, I don't know. Maybe it's something you wanna throw machine learning at, I don't know. But the state of things now is that they just don't work very well; most of what they're reporting is irrelevant.

So then there's these two problems. One is the boy who cried wolf, where you're confronted with all this noise and all these warnings, and you eventually ignore them. The other one is the people who are in these maybe enterprise companies where the security or IT has mandated that the code must pass these audit checks.

**Jerod Santo:** Right.

**Amal Hussein:** You mean basically hell... \[laughs\] Hell for most of us, anyway.

**Christopher Hiller:** But they exist, right?

**Amal Hussein:** Oh, absolutely.

**Christopher Hiller:** And so you have to pass these audit checks, you must make sure that--

**Jerod Santo:** And you can understand from a higher-up perspective why that's a good decision, you know?

**Amal Hussein:** Absolutely. Compliance.

**Christopher Hiller:** \[00:35:46.05\] Sure. And the way Npm works - and maybe you can get around this problem with yarn - is that if something like Mocha is consuming some transitive dependency that's broken, well, Mocha is going to have to upgrade out of that. It's not something that the consumer can do directly, which --

**Jerod Santo:** Yeah, it's a supply chain problem. It's outside of your control.

**Christopher Hiller:** Right. And so we have people who have these overzealous security policies that mean they have to pass the audit checks coming into the open source project's issue tracker, and demanding that the stuff gets upgraded.

**Jerod Santo:** Totally.

**Christopher Hiller:** Maybe that turns out to be like a hundred Dependabot, or renovate, or whatever PRs every week; I don't know. But it's just like a flood of things, and then people want it to be -- so it creates more work for maintainers to try to manage what is essentially busy work because it's just irrelevant. The only real problem is that there's a warning, and somebody's company policy says they can't use this software until it's fixed, and their builds fail because of it. And that's not something I can influence. I can certainly say "That's stupid. Don't make your build fail on these things", but I can't do anything about what some random company decides they need to do.

And yeah, security people I've seen do take a hard-line stance on this stuff. "Well, you might as well upgrade. You should get used to upgrading, and it's good practice to avoid these vulnerabilities wherever we see them." At one level, that is true, but unless you're paying me to do that, I have no interest in it, and people aren't paying me to do that, and they're not paying open source maintainers to address that.

**Jerod Santo:** Yeah. So I'm gonna have Amal continue to foam for just a second; I'm gonna skip in line and just add onto that real quickly and say it's not just an Npm problem, like you said, because GitHub's notifications - their whole system does the exact same thing to me all the time...

**Christopher Hiller:** Yup.

**Jerod Santo:** And I'm always like "This is irrelevant. This part of my build step of my assets, which becomes static, and it never runs in any sort of capacity or could be exploited." To their credit, you can click through on those and say "This is irrelevant." You can give them -- I'm not sure if they're capturing that feedback in terms of learning (probably not), but they're at least allowing you to say "This audit is irrelevant. Make it go away." I'm not sure if that would be compliant with certain org's policies and stuff, but you don't have to go back and have the open source person just upgrade arbitrarily because I need my audit to pass. I can just go ahead into there and say -- and it has like 5-6 options of why it might not be relevant. So it still annoys me, but at least it gives me an escape patch.

**Christopher Hiller:** Yeah, there is no escape patch with Npm, unless you adopt third-party tooling that gives you one.

**Jerod Santo:** Alright, Amal... Unleash the wave.

**Amal Hussein:** No, first of all, Chris, just thank you so much for walking us through that. It was really great to get your summary, and then also walk through your pain points, both as an engineer, but also as a maintainer and someone who's been aware of these problems from the points of view that Dan Abramov also has.

For me, I feel like we've kind of created this problem for ourselves by not having more crowdsourced -- like, the spec is broken in the sense that it's missing context. So where is this code being run, and what's the context? How does it link into dev dependency versus production dependency? Those are inputs to really saying "This is actually a vulnerability that matters, or isn't." That's kind of what you were saying. That's the missing piece.

But that should just be part of the spec, and parts of that data should be crowdsourced, or there should be a consensus, or some way of saying "Okay, 700 people agree that this is not important. Over 90%, or whatever high number/percentage of people, this number of minimum threshold..." Similar to like a machine learning training model, usually you wanna give it a score, like "Hey, this machine learning algorithm is 80% sure that this is a picture of a cat." Something like that for saying like "Hey, this vulnerability is not applicable to your context, so it's safe to ignore", and that could just be part of a configuration where you specify where these dependencies are being used, and in what context... And based on that, you have a customized report output of what's actually a vulnerability to you. I just feel like we can fix this problem for ourselves if we take that approach. I don't know if you think that would work, Chris...

**Christopher Hiller:** \[00:40:46.27\] For some small subset of people it is going to be helpful, because it is going to surface an actual vulnerability. And so yeah, you wanna know about it. You wouldn't want that information to be squelched because it's not a problem for most people, but it actually is for you. I don't know, and I don't know what to do about that. I feel like whatever the real endgame solution is, it needs to be a combination of examining your code at rest and examining your code in the runtime, and what happens when it runs... And that's gonna vary depending on the language and platforms that you use.

JavaScript, as we can see from this whole debacle - you're gonna learn more about if a program is actually vulnerable when that code is running, because it will have hit the code. And how do you know if something hits a code path? Well, you probably figure that out with -- I can't remember the word for it... It's like proving your code is correct; it's like a way to prove... I can't remember the word for it, but you can do that with certain languages, but probably not JavaScript. You could prove that "Hey, this vulnerable line will get run, or it won't get run, or it could get run", and that sort of thing.

I think if you're running, say, tests, that's a great opportunity to do this sort of check for "Hey, you're hitting this line in Lodash version whatnot, and it's bad." I think we could build tools like that.

**Amal Hussein:** Yeah, it's like a world of opportunity. It's such a hard problem to solve with one turnkey solution... It's like a multi-faceted approach. So I think solving each segment alone is valuable, but it feels like maybe it alone is maybe not enough of a commercial value for companies to \[unintelligible 00:42:49.00\] I don't know, it's kind of like an all-or-nothing situation; I think that's maybe why this problem hasn't been solved yet, quite frankly...

**Christopher Hiller:** Yeah. I mean, I'm not sure there's really a big incentive...

**Amal Hussein:** Yeah, there's not an incentive enough.

**Christopher Hiller:** ...for Npm to devote resources to do something here. Do they wanna be in the market? Do they wanna really compete with Snyk, or whatever?

**Amal Hussein:** Right. And Npm at this point is basically just GitHub, but I think it's interesting that the focus is on AI spitting out your code, having a co-pilot...

**Jerod Santo:** Yeah, writing my bugs for me.

**Amal Hussein:** Yeah... It's similar to kind of -- you know, GitHub should be invested in the ecosystem, because the ecosystem is what feeds them, right? A healthy developer ecosystem, a healthy open source ecosystem, whatever the hell else... So they would be the perfect people to tackle this problem deeply, because they can; they have the resources to do it, and the connections, and whatever, all of that stuff. This would be an area for them to demonstrate some leadership. I hope they do... We'll see.

**Jerod Santo:** \[00:44:12.04\] So Dan did post three quasi-solutions or workarounds, a couple that we've discussed here, none of which are spectacular. I think short-term what Npm should do is cut a new version of the client and just disable the default. Let us opt into this, versus opt out. Probably they're not gonna do that, but I think that would at least take care of the crying of the wolf... And you know, if you want someone to yell at you, then you have to pass the flag.

**Amal Hussein:** Npm has been making some pretty bold changes lately, some very aggressive ones. For example, peer dependencies being installed for you in v7. I don't know if you're aware of this, Chris... Basically, v7 is potentially a massively breaking change for lots of people because of this peer dependency install...

**Jerod Santo:** What are the implications of that?

**Amal Hussein:** ...or bundle sizes getting increased, or whatever else. It's that, like, if you have missing or incorrect version of the peer dependency, it's not gonna auto-install it for you, versus just warning, where people get the warning and maybe they fix it, maybe they don't... But something's behaving potentially differently now. I think this should have been in the spec from the beginning...

**Christopher Hiller:** That probably was --

**Amal Hussein:** But retroactively adding it now is, I think, potentially really reckless.

**Christopher Hiller:** I thought it used to do this, and then they changed it not to, because of dependency hell. I don't know the issues off the top of my head, but... And then now they're changing it back for -- I have no idea why. And I have no idea why they disabled it in the first place, other than it was causing problems when there's -- I think just the mismatches between peer dependencies. If you have dependency A, which depends on B version 5, and you have dependency C which depends on B version 6, then you're stuck, because you need peer dependencies of both 5 and 6 of B, and you can only install one of them. And I don't know what they're doing about that now.

**Amal Hussein:** Yeah, but that's the thing... It's like, changing the spec at this stage, at the scale that they're at - oof... I don't know. I mean, the reality is most people who use Npm upgrade with their Node version. Rarely does the average company/set of users do an Npm install \[unintelligible 00:46:37.17\] Because Npm is an Npm package, by the way. I know, it's super-meta. But \[unintelligible 00:46:45.17\] is what you use to bump your version of Npm, which doesn't depend on the version of Node. So people aren't gonna start hitting this until they get to later Node versions; it's been caught with v7, so... You know, it could be a slow-rolling discovery, and that's why it's really -- you need to be really responsible when you have a tool that's that widely adopted and used. You can't just do things that are even mildly risky. You have to be conservative. And that's why I just feel like with this change, and the peer dependency thing - I don't know there's just been some... Whatever. I mean -- I have some interesting insight into some of the cultural changes since the acquisition, which could be attributed to this... But yeah, I think things are just a little too rogue for something that's that widely used, in my opinion.

**Christopher Hiller:** \[00:47:46.13\] Yeah. I mean, I do want them to turn it off, but that's probably gonna break somebody, right? Changing defaults - you don't wanna change defaults.

**Amal Hussein:** That's what I'm saying. You don't. At all. You should try to preserve backward-compatibility as much as possible, with your life almost, you know what I mean? You know what - somebody made a comment recently about how scripting tools like Npm, or a CLI, these little JavaScript modules that we write, and there's people who have hundreds of JavaScript packages - scripting in particular, it's a very unique type of engineering. It's like, there's a whole different set of constraints that they need to think about when you're connecting with the OS and you have to manage versions... Their dependency tree and matrix is quite large. There's lots of different variations of considerations to take into play, so... It's a hard job. I don't envy those engineers. Kudos... It's easy for us to judge, but I know it's a hard job.

**Jerod Santo:** Well, to be continued... I guess we'll find out what happens next in this saga. Likely nothing on this front in particular; maybe just some more discussion, a little hemming and hawing. We'd love to know what you think as a listener; definitely hit us up. You can comment on Changelog.com, you can send us a tweet at @jspartyfm, you can hit us up in the Slack, of course...

Two things I wanted to know before we call it a day... The first one, we are gearing up for Frontend Feud. We have a very special -- what I think will be a very exciting episode of Frontend Feud in the works, but we need your help. Of course, Frontend Feud is our survey-based show, a lot like Family Feud, and we need to have the Survey Says. So we need more people to take the Frontend Feud survey. We have 55 respondents, we're trying to get to 100. You can find it at jsparty.fm/ff, and one lucky respondent will win a JS Party T-shirt; that's the very one I'm wearing right here, if you're watching the video... It's very comfortable. You want to go to there.

So please help us out, fill out that survey, and make Frontend Feud awesome. And then secondly, we do take requests, so we'd love to hear what you would like to hear - guests or topics you wanna have on the show, so you can let us know at jsparty.fm/request. We'd be happy to do episodes that are requested by the listeners.

Those are the two things... That's all we've got for today. Chris and Amal, thanks for hanging out and sharing your knowledge and wisdom. That's JS Party for this week, we'll talk to you next time.
