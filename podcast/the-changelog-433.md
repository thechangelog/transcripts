**Adam Stacoviak:** Ben, you're back. It's good to have you back on this show. You've been on Go Time, you've been on The Changelog forever ago basically... But we don't wanna \[unintelligible 00:01:44.16\] There's a new open source database out there, Litestream... But the reason why we reached out to you was because of (I suppose) the anti-normal of open source, but closed to contributions aspect of what you wrote there... So let's open out there.

**Ben Johnson:** Yeah, for sure. Like you mentioned, it's a database -- it's actually a database tool that wraps around SQLite, and it lets you stream data into the cloud, basically, so you can run SQLite in production and have it safely persisted. And yeah, it got a lot of notoriety early on; not for the actual code that I wrote, but for the code that I'm not allowing... And then that's really -- yeah, there's a closed contribution policy on the repo. It came from some other projects I've done over the past, like BoltDB, that I wrote quite a while ago... And a lot of them just kind of became -- it was just a lot of maintenance; and not even just like checking code and doing all that, but just responding and just really... You try to take a lot of people's desires for what they want in the project, and 90% of the time you have to say "No, that's not really where we're going with this", and just trying to figure out that overhead and trying to mitigate that.

**Adam Stacoviak:** Yeah. What you said in the readme was -- you've said more than this, but I'll give the TL;DR version of it. "I've made the decision to keep this project closed to contributions for my own mental health and long-term viability of the project." Which I think - we'll go into the deeper parts of it, because you've done other open source before, and you've got some scars and some history to you, and some aspects to (I guess) what motivates you... But what kind of feedback did you get initially from this? Was it a lot of high fives, or was it a lot like "Well, hey, Ben, that's kind of wrong", or what happened? What's the fallout so much from that line there?

**Ben Johnson:** Sure. I mean, I was fully expecting people to just rag on that... Actually, I expected people to not really even notice it, because it was buried at the bottom of a long readme at first... And it somehow made it to Hacker News. And honestly, I would say it was probably 95% supportive; just other people kind of saying "Oh yeah, I've totally been there, too. It's just a lot to take on, and take in changes, and trying to manage that thing."

\[03:58\] And I really tried to distill it down to "What is my goal for this project?" and I like to make tools that are minimal. I have a fixed idea of what I wanna build. So for Litestream, I wanna run SQLite in production. And anything that doesn't really support that, any extra uses cases are just not that important to me... And I wanna make it as simple as possible.

So I didn't really necessarily wanna make the biggest project or the fanciest project. I wanted to make something that just kind of works, and works well for what I'm doing. So I didn't see external contributions really moving the needle for that kind of thing.

That being said, I think there's a fascination in our industry around code, and contributing code... But honestly, I feel like the code piece is such a small part of it all. If anything, I would love to have people try it out, test it out, submit feedback, bugs, that kind of stuff. Or even docs changes. I feel like that's 90% of the project, and then the little bits and bobs of the code are a smaller piece.

**Adam Stacoviak:** Well, that's why we wanted to talk to you really about this, because I feel like there's a lot of nuance here. Prior to that, you said you're grateful for community involvement, bug reports... So you did say those things. But the highlight really was that you wanted to keep it closed to contributions, for whatever reasons - whether it's mental health, or long-term viability, as you mentioned... But just for whatever reason, you wanted to keep the codebase itself limited to your input, because you had a specific scope. And I think that's where you have to have a podcast like this go into those details, where it's literally Ben Johnson sharing with us the details of why that makes sense for your project, and how you can see community involvement still taking place, but just not so much in the contribution to the codebase itself.

**Ben Johnson:** Yeah, for sure. And actually, I can give you some good examples too, recently, where some people -- you know, one thing that people wanted to see was Windows support, and the code changes to make Windows support happen were relatively small. I would say it was probably a dozen, two dozen lines of code... But actually, I haven't run Windows in 10-15 years, so actually getting in and reading the docs on how Windows services work, and getting it up and running, getting a VPS started that runs on Windows, doing RDP \[unintelligible 00:06:16.03\] logging in and setting stuff up, all the packaging stuff around MSI installers, getting a code signing certificate... There's just like a million things to do to actually make this really run and have a good developer experience, that aren't just those 20 lines of code that were pushed in. So I feel like those are the kind of under-appreciated parts that you really just never see, but that's really what makes the project, rather than the actual code itself.

Actually, another one that came up right after that was S3-compatible stores... So right now it pushes to Amazon S3, and there was maybe like a 4-line change to make it work with Minio, or Google Cloud Storage, and a couple other cloud stores... And those little bits aren't that hard just to put a little tweak in there, but I wanted to make sure that the experience of getting on and trying it with those pieces and how they integrate into the docs, and changing the Getting Started to make it simpler for people to actually try it out, and going through and testing - all those things... It's just crazy, everything beyond the code that really doesn't get talked about, but is just hugely important.

**Jerod Santo:** Yeah. I may be splitting hairs here, but you say it's not open to contribution, and it sounds like those are all contributions.

**Ben Johnson:** Yeah, that's a really good point, actually. That's probably some copy editing I need to change... Those are huge contributions; I guess code contribution is the thing it's closed to.

**Jerod Santo:** Yeah. Only Ben can write code, but everybody else can-- because the question is, if I don't want contributions, then it's like "Well, why did you open-source it?" But it's clear why you open-sourced it, because you do want participation, or community involvement, and all these things. It's just specifically you're writing the code for this project.

**Ben Johnson:** \[07:57\] Yeah. And I think there's a lot around the actual direction of usability and how you want it to feel, how everything integrates together, that I think is easy to miss if you're an outside contributor just bringing in an initial PR into the project. And I think I could certainly get people up and running, explain to them why certain things go together, and certain things work in the way they do... But again, that's just a lot of overhead, that I'm not necessarily opposed to. But is that time better spent building the product and making it kind of gel a little better together?

And I guess from my side, I haven't gotten to that point where I need a second person to come on and really commit code in that kind of way.

**Adam Stacoviak:** So break it down for us then, a suggestion or a contribution non-code-wise. How does that happen? Does it simply happen in issues? Or "Hey Ben, by the way, I wanna have not just simply S3, I wanna support Minio, or XYZ Store." How does that permeate into the actual codebase? Does it just simply come through you, or how does it work?

**Ben Johnson:** Yeah, issues have been a great way. It's been pretty active on there so far. If people have bugs, they tell me; or if they have issues running it, or whatnot, that's a great way to do it. The GitHub discussions I have actually really liked, where you kind of have a threaded discussion board, which I feel like they haven't really announced enough, because I don't know a lot of projects using that... But I find that it's a great way to get people on and talking about stuff that don't feel like they necessarily have an issue, they just more have a question, or "What's the best usage for this kind of thing?" So I think those are great ways to do it.

As far as the documentation, that's actually all MIT-licensed. So if someone wants to come in and make changes, suggestions, or fix typos, that kind of thing, or whatever contributions from a docs side, that's all open source and open contribution... Not really code contribution, but PR contribution.

**Adam Stacoviak:** Right.

**Jerod Santo:** So you didn't make this decision in a vacuum, and your previous experiences obviously informed this decision, at least some... So you're talking about mental health, and really your enjoyment overall in the success of the project are kind of informing this decision... What have you been through that brought you here? Have you been through burnout, have you been through terrible pull requests, or low-value code contributions? What's the kind of stuff that you've been dealing with over the years?

**Ben Johnson:** Sure, yeah. So previously I'd written BoltDB, which is a database in Go; it's a key-value store. And that project - there were definitely valuable contributions; I don't wanna diminish that. But I feel like a lot of contributions either -- they can fall in two buckets. Or a few buckets, I guess. So you can have very small, trivial contributions, which - I don't have anything against small contributions at all. But then you also have mid-sized to large contributions, which can either really skew the scope of your project very much, and a lot of times you just can't accept those, or you have to do a lot of changes to really accept those...

And the other side to that is if you do get some great feature added, the person that added that feature, that sent that pull request - they're not probably gonna be around six months from now, when people are asking you to support that, and if something's broken on it, you've gotta debug that... So I guess -- I come from a database background over the last decade or so, and I find that people in other realms of the industry, I feel like they really focus on the "Hey, look at this new/great feature we have" etc. They really tout that. Whereas in my position, I really see features as like a liability. Every little feature I add is something that could possibly corrupt the database. It's really pretty serious.

I mean, not Litestream. Litestream doesn't actually overwrite your database, but there are huge liabilities if you just add some small pieces of code. I feel like there's a utility side and a liability side to every feature, and I feel like the utility side needs to vastly outweigh the liability side. So that's why I feel like I tend to reject a lot of features.

**Jerod Santo:** I've heard it said often that code is a liability, and features are assets. But I've never heard anyone say "Features are liabilities." And I definitely see where you're coming from. With that being said, you're probably talking about the code of the features, the maintenance of the features, which are liabilities.

**Ben Johnson:** \[12:17\] Features interact with each other, and the more that you have, those interactions really grow exponentially; or is it exponentially? Whatever, geometrically. Some kind of math equation where...

**Jerod Santo:** There's multiplication...

**Ben Johnson:** ...they can really grow as they interact with each other, and there just could be unexpected ways that they do that. So I think features really very much are - even from a documentation standpoint, usability standpoint - liabilities.

**Jerod Santo:** Yeah. And they're kind of one-way streets as well, because it's easy to add, but it's very difficult to remove...

**Ben Johnson:** Oh, yeah.

**Jerod Santo:** ...especially if you have empathy for your users. I can't just take away this thing that you're relying upon, but it's really screwing up this part of the codebase. So in that way it's a liability, even though that person sees it as the value. As the maintainer, all you see is how it's slowing you down or causing you headaches, because taking it away is selfish, lots of times, as the maintainer...

**Ben Johnson:** Yeah, for sure. I thought about different ways you can run Litestream and whatnot, and I've really been trying to figure out how to run SQLite on a serverless platform, which is a weird idea... But I feel like it would be an easy way to get people to deploy their applications and it runs just simply with no configuration outside of your serverless platform. And for that, one idea I had was running kind of a service for people where they can replicate to the server that's outside their serverless platform -- sorry, this is a long story, but again, thinking about that, it kind of stresses me out a bit to think "Hey, if someone does choose to use a service that I put out there, I can't just give up on it. They might be really relying on it for their business, or their organization..." I feel like this is a commitment you really need to consider a lot, for sure, and the long-term effects.

**Adam Stacoviak:** Features are kind of like hiring people, in a way, right? If you wanna have an analogy, I think of that with business even. I can recall back in the day when I worked for a non-profit, and I was very green behind the years, or what's the word -- wet behind the years...

**Jerod Santo:** Wet behind the years, yeah...

**Adam Stacoviak:** Is that a bad term to say these days?

**Jerod Santo:** I think it means you're fresh out of the water, isn't it?

**Adam Stacoviak:** Yeah. I was inexperienced, let's just say, in the realm of business... A lot of ambition, but my boss, the founder of the non-profit company - I was keen on getting the help, because we needed support in the design front... And I wanted to hire somebody ASAP, because I was the one feeling the burden, the need, essentially... So the feature... And he's like "We've gotta be slow to hire." And he taught me this lesson essentially about being slow to hire, and it seems similar with "slow to feature", essentially...

**Ben Johnson:** Yeah.

**Adam Stacoviak:** ...because for every feature or for every hire, you may have to eventually deprecate it, or fire them, or circumstances change... So just be very wise and very calculated with your hires, or very calculated with your feature adoption.

**Ben Johnson:** I agree 100%, for sure.

**Jerod Santo:** And it's easy to get in over your head, because when that feature comes in for free, overnight, while you are sleeping, and all you had to do is hit this button - it's exciting that somebody likes your software enough to work on it.

**Ben Johnson:** Yeah.

**Jerod Santo:** I haven't had a successful project like you have been with BoltDB or any of the other stuff. I've had things where maybe it's my open source deal, or I would love the contributions but never quite got there... But I've gotten features - little ones or medium-sized ones - on a few projects, and for me it's always been like... I was giddy about it. But that's kind of like you get a dopamine hit, and it's enjoyable, and so you just do something quickly, because you're like "Yay! Somebody cares!" But then six months down the road you're like "Why did I do that...?" \[laughs\]

**Ben Johnson:** \[16:02\] Yeah, for sure. I certainly still feel the same way when people submit issues on the project, or submit feature requests, and things like that, or wanna discuss it... I love talking about this stuff and working it out with people... But yeah, I totally agree, there could be some regret later on.

**Jerod Santo:** Yeah. So when you made this choice, have you read Nadia Eghbal's "Working in Public", or have you been thinking about these things? Because the reason why I made the connection - I thought maybe you were inspired by that, because she said in that book, or on our podcast afterwards, that one of the things she's realized over this time researching and being part of open source, she realized that open source doesn't mean open participation, and it doesn't have to mean that. And that resonated with me, and when I saw your post, I thought "I wonder if maybe you have been inspired by that concept..." Or maybe you came up with this completely in a silo.

**Ben Johnson:** I mean, I haven't read the book. I've seen other posts of hers... She definitely influences thoughts around this. But I think there's definitely a crowd of Twitter OSS maintainers that -- you know, we commiserate a bit to each other when we see a project that gets closed down because someone gets burned out... You see these large, public things that happen like that, where it happens, someone has a hard time, closes the project, or shuts it down, or something to go sideways, and a bunch of people all kind of know that feeling and we kind of share that feeling.

I'm passionate about open source sustainability, but I think it's a just as hard problem. I don't know as far as how do you get people working on open source, which is free, and I don't feel like people have really found great ways of making money off of it to sustain them in that way, financially... So I think there's people out there trying to figure this stuff out like her, and I don't think there's really an answer quite yet... But I think that trying to lower that burden at least, in some way, can maybe help in some incremental, small way.

**Jerod Santo:** Yeah. Well, I think that your choice here - and I think probably her findings and her statement, what she said on this show and elsewhere, that it doesn't have to be participatory... And many times it is the situation where you have the one maintainer serving the many users, and the contribution does not scale alongside the use of user growth. She calls that a stadium, and you're kind of a rockstar on the stadium. There's one person on the lead microphone, and there's a hundred thousand in the stands... Pre-COVID. Now there's like 10% of a hundred thousand. \[laughter\]

**Ben Johnson:** There's people on the Zoom, yeah.

**Adam Stacoviak:** There's cutouts.

**Jerod Santo:** Yeah, there's a hundred thousand cutouts out there. You know, so that circumstance happens a lot, where the growth of the project happens, but the growth of contributions doesn't scale or doesn't match... And that's okay. And it's okay to actually even say "That's what I'm gonna do. I'm the only person on this, and that's the way I want it to be." And I think it's fitting for scoped things like this, like the tools you like to build, where it's not a thing that you're gonna work on into infinity necessarily, unless it grows outside of the scope that you initially defined...

But I think what that comment from her did, and maybe probably what yours has done, with putting your stake in the ground, and then having it on Hacker News, and 95% positive - it's probably given a lot of other people permission to do that; to feel like "Oh, Ben can do it. I can do the same thing." Because a lot of us like to put stuff out into the world just for that reason, and don't necessarily want it to be community projects. Open source does not have to be community-maintained.

**Ben Johnson:** Yeah. I was thinking about this today... I feel like there's two kinds of projects out there - you have frameworks, and you have libraries, and there's kind of a debate out there, like "Do you build this big-scoped thing, say like a React or a Kubernetes?" Like, "I'm not gonna build that by myself." It's meant to have this huge, overarching scope that your application runs on top of, versus - you know, say you have a library or a tool that is kind of an incremental, small-scoped piece... And I don't like writing frameworks; that's just not my passion. I don't like those never-ending scoped projects. I like saying "Hey, here's a problem, and there's the solution", and build the tool for it. I feel like my favorite projects are those kinds of projects, and within those tools I feel like the best projects are those. They tend to have that benevolent dictator for life management around it.

**Jerod Santo:** \[20:23\] So why do you do open source? What's your intrinsic reason?

**Ben Johnson:** I would say it's twofold. I like the reach that open source has. When I wrote BoltDB, I had people say that I could monetize it; I don't have any idea how you monetize an embedded database like that, but I'm sure you could make more money than I did off of it, obviously. And to take that and then say "Hey, this is free for anybody to use" and it gets picked up by another project... Like, it got picked up by Etcd, and then Etcd got put into Kubernetes. It's crazy to think of the reach that BoltDB, while it's a small, small piece, is deployed in some of the largest companies in the world, helping to persist state in their Etcd cluster.

So it's little things like that. Just seeing that I can make some small incremental change in the world, that has a large reach. I'd say that's probably the biggest reason I do open source. And then kind of a secondary reason... You know, a lot of the things that you do at a day job are -- you know, you're doing CRUD apps, or you're doing things that move the business forward, but they're never gonna be this kind of edgy/researchy kind of down in the weeds, fixing some deep, interesting problem a lot of times... A lot of times it's just a day to day kind of work you do. So I feel like the open source stuff that I do tends to be that more esoteric, unusual stuff.

For example, Litestream is one of those problems I've always had, where I don't wanna have a complicated application deployment. I just wanna use SQLite. How do I make that happen? What is the thing that's stopping me from doing that in a production app? I could never write Litestream for a company, because that just sounds ridiculous. There are other solutions out there. People could run Postgres, you could run on RDS, on Amazon... There's not a justifiable reason to build Litestream in a company.

So that kind of thing -- I worked on a project before that where I ported over a tool called Klee... It's this crazy code execution tool where basically it'll analyze your code and go through all the paths of the code, and you can do things where you can generate test cases from code, and it has a solver in the backend... Anyway, it does all these kind of crazy things. So I ported that over to use with Go. I spent a ton of time on that. I released it, but it was never really finished; I just wanted to try these new things, and kind of experiment and push my brain in different ways. So it's really like an intellectual interest... That was a long answer.

**Break:** \[23:03\]

**Jerod Santo:** So one of the reasons that you say you do open source is because of the potential impact of your code. I think it's a great reason. I think it's one reason why lots of people do open source. And it's pretty cool to see, like you said, your little key-value store inside Kubernetes, powering all these deployments. It has to be satisfying. Was there any fear, trepidation or concern that maybe this decision around no code contributions would limit Litestream's impact?

**Ben Johnson:** I was probably a little naive with it. I thought nobody would notice, to be quite honest...

**Jerod Santo:** Nobody would notice Litestream, or nobody would notice this policy?

**Ben Johnson:** The contribution policy. I mean, I thought some people might, when they try to open a PR, but I didn't think it'd become a big topic. Actually, the thing that I worry more that would limit people - this is actually the project I've ever used GPL for, and I'm still not sure about that decision. I haven't had any blowback; I was surprised I haven't had any blowback about that, but... Yeah, I think not being able to embed it, or just... People get weird about copyleft licenses.

**Jerod Santo:** What drove that decision?

**Ben Johnson:** It's weird, the little things that kind of change your mind... I've always written libraries; and libraries, especially in Go - you pretty much have to have a very open license, like MIT or Apache... And this is kind of the first command line tool that I ever wrote, that kind of runs separate from your application.

Mike Perham (I think that's how you say his name) from Sidekiq - he had a tweet years ago that just stuck in my head; I think he was kind of trolling a little bit, but he was basically saying "If you don't license a GPL, you just don't care about your code." I think he was a little bit trolling; it was a little bit in jest, but that kind of sat with me. If you don't really control what happens to your code, and where it goes, and what people do with it, you kind of limit the ways you can grow that project.

Again, around sustainability... I guess my biggest thing with sustainability is it feels like -- I know GitHub's recently added corporate sponsorships, but a lot of it is always focused around individuals contributing to other individuals doing open source... Whereas really the people that benefit the most are these bigger companies, that could easily spend $1,000 a year or whatever, paying for some library that really supports their business.

I think having more control around the actual license and what people can end up doing it with it can really shape that conversation more. Did that make sense? I'm not trying to sound too greedy or anything, but I find that to be a fascinating direction that I've never really taken before.

**Adam Stacoviak:** Have you read this license end-to-end, Ben? Just curious.

**Ben Johnson:** The GPL?

**Adam Stacoviak:** Yeah.

**Ben Johnson:** I don't know if I've read it end-to-end. I think I've read most parts at one point, but I probably should. It's a long license.

**Jerod Santo:** It is long.

**Adam Stacoviak:** Well, over the years, having so many more conversations about licenses, I find myself actually reading more and more. Now, I have to admit I haven't read the GPL end-to-end, but I don't have any code out there that has it adopted as its license. At least I'm clear there, and you're not, but \[unintelligible 00:27:25.00\]

**Ben Johnson:** That's totally a good point.

**Adam Stacoviak:** But I'm just curious... When you choose this license, and you mentioned Mike Perham and that tweet, and whether it was in jest or not - what specifically about this license, what clauses made you think "Okay, this is suited for Litestream"?

**Ben Johnson:** Sure, that's a good point. And I will say, I tend to defer to people that probably know more than I do. I'll read summaries on a license more than I will go word for word in the license and pick it apart, because I'm no lawyer... I mean, I think the ideas around if you're gonna use this code -- or not even just use it; if you're gonna take the code and change it around, I think that stuff should be put back in the world for the benefit of everybody.

\[28:11\] The one thing I don't like about it with libraries is linking this tool into your code suddenly means your code needs to be GPL as well. And that seems ridiculous to me... Whereas Litestream is pretty isolated. It's a single binary, it runs next to your application, and any changes to that should, I would assume, probably be helpful ultimately to the wider community out there. I would welcome, if not even the code contributions from that, just simply the ideas around what people are changing about it, and putting that back out there.

**Adam Stacoviak:** So you wanna make sure that whatever value is there currently or can be derived from the future, whether it's you changing it or someone else changing it, you wanna make sure that future public use, the open source spirit remains with the software.

**Ben Johnson:** Yeah, that's basically the idea.

**Jerod Santo:** Yeah, so if I'd adopt it at my company, and then we invest labor hours into making Litestream 10x faster - or I don't know what sort of metric you would improve it...

**Adam Stacoviak:** 1x.

**Jerod Santo:** I'm a 10x engineer, so I'd 10x it... \[laughter\]

**Ben Johnson:** As soon as you touch the code, it just goes that much faster.

**Jerod Santo:** That's right.

**Adam Stacoviak:** Immediately.

**Jerod Santo:** I actually just put a comment in there that says 10x, and then I -- anyways. You'd want that to be out in the world, right?\]

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Even if that code is not going back into Litestream, you may look at that and be like "Oh, that's a clever thing, Jerod. I can't believe he's such a good 10x-er", and then you might just pull that in. But if I didn't have to do that, we could just keep it for ourselves, and Litestream wouldn't benefit and the world wouldn't benefit.

**Ben Johnson:** Exactly, yeah.

**Adam Stacoviak:** Let's be honest real quick... Jerod, you're not a 10x-er.

**Jerod Santo:** No, I'm not a 10x-er,

**Adam Stacoviak:** You're an 11x-er.

**Jerod Santo:** Oh, thank you... \[laughs\]

**Adam Stacoviak:** Boom! \[laughs\]

**Jerod Santo:** You called me out, insofar as I can't multiply things by eleven.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Yeah. That's as far as I'll go. So you were concerned that GPL would limit it; you weren't so concerned that the non-open-code-contribution would be a limiter... But it sounds like, at least in terms of an open source project, it's off to a great start, wouldn't you say? Lots of attention, lots of people looking at it...

**Ben Johnson:** Yeah, so far so good. I haven't had anybody push back on the GPL. I think one person asked about it, and then I told him why, and they just said "Okay", and then he moved on. So that's been good to see, for sure.

**Adam Stacoviak:** You mentioned that you made this choice somewhat naive, in a naive way... And I'm curious if there were alternative options. Because I suppose you could not put it out there so explicitly, it's open source but no contributions. You could just simply just not accept pull requests, which is kind of what GitHub forces you to do now, right?

**Ben Johnson:** Yeah.

**Adam Stacoviak:** Because even though you've made this declaration in your readme doesn't mean that the tooling has supported your desires for keeping your pull requests closed. You're still sort of stuck with that.

**Ben Johnson:** Yeah, for sure. And I've had folks from GitHub reach out over DM on Twitter, asking what they can do to help support the project, and honestly, I just asked for being able to hide the pull requests; just not allow those. I think that'd go a long way. And it sounds like it's something they've definitely debated, and they've talked about... And I'm sure there are nuanced reasons why they can or can't do that, and maybe it's coming in the future, but I'm not privy to those decisions. But I think it would unload a huge burden on people if they just didn't have to think about that.

And closing PRs after the fact is just the most soul-sucking thing to do... Where it's like, someone might have put in so much time into that PR...

**Jerod Santo:** Yeah, totally.

**Ben Johnson:** ...and you have to just close it and be like "I'm so sorry. I can't take this, because it's not what I'm looking for." So I'm trying to be as explicitly as I can, without \[unintelligible 00:31:58.27\]

**Adam Stacoviak:** \[32:02\] Yeah. It's really difficult, I suppose, in the world of open source to not waste someone's time without some sort of explicit visual cue. I would imagine if you have a repository that does not have pull requests, which is sort of -- I can remember back in 2008 when GitHub first launched, that was the cool thing. PRs is the DNA of GitHub, essentially; so if you take that away, to me, you'd need to be visually far more clear on a repository that that's not an option. Maybe you have a red banner, or something. Something very different, starkly different that every other repository out there.

**Ben Johnson:** No, that's totally \[unintelligible 00:32:36.28\]

**Jerod Santo:** Or that skull and cross-bones emoji would be perfect.

**Adam Stacoviak:** There you go...

**Ben Johnson:** "None shall pass", yeah.

**Jerod Santo:** Yeah, exactly. \[laughs\]

**Ben Johnson:** I totally agree. You know how the license shows up on there? It'd be nice to have some kind of -- I mean, I guess it's community guidelines. I don't know, I feel like there's something they could do to basically say "We're welcoming, but not that welcoming."

**Jerod Santo:** Right.

**Adam Stacoviak:** I was gonna say, what's the most polite way to say "PRs not welcome."

**Ben Johnson:** Yeah, I don't know, man...

**Jerod Santo:** You may have done it.

**Ben Johnson:** It's definitely been an interesting thing to tiptoe around, and like, how do you convey to somebody that "I value your input, just not the code that you're giving me." It's a nuanced thing that I don't think I accomplish very well.

**Jerod Santo:** Right.

**Adam Stacoviak:** And you're touching on it. That's exactly why I thought that it would make sense to talk through this with you, because we've had (I would say) the luxury of knowing you for many years now. Not like buddies hanging out on the weekends, but we've known you for many years, and I know where your heart is at, or at least we have some direction of where your heart is at with open source and the community... And a passer-by, a brand new person to Ben Johnson and your code and who you are may not understand the nuanced reason of why you would make this choice. And I think that's -- good luck to GitHub and the interface designers there to encapsulate what this podcast may convey, well or not so well, in a button or some sort of visual elements.

**Jerod Santo:** "Some button..." \[laughs\]

**Adam Stacoviak:** It's gonna be difficult.

**Ben Johnson:** Yeah, I think the podcast is a great medium to convey that. Even a blog post is not gonna -- people are gonna read that in different ways. Hopefully, I don't sound like a \*\*\*\* on here, but you know, it's easy to come off that way when it's just written text.

**Jerod Santo:** Yeah. I'm just enjoying the thought of GitHub putting our podcast in a button somewhere...

**Ben Johnson:** There you go...

**Jerod Santo:** When you click the button, you just have to listen to this conversation. It's like, "Here, this is why he's doing it, alright?

**Ben Johnson:** There you go.

**Jerod Santo:** Going back to the GitHub features end of this... So you can use an Issue template, but is there like a PR template? Is there anything in between the person and their pull request beside your readme, where you could inject a thing that says "Hey, don't do that. Don't waste your time."

**Ben Johnson:** There's a PR template, which I have the same kind of paragraph about why I don't take pull requests. But again, you have to get to the point of finishing the code and pull-requesting it to actually see that. So in that sense, the person still has wasted their time. I don't see that pull request that I have to then close, which probably makes it easier for me, but... It still hurts that somebody may have put time into that.

**Jerod Santo:** Yeah. You almost want it like on the Fork button; when you click Fork, it might tell you at that point that you can fork this project, but know that--

**Ben Johnson:** Yeah, that's be nice.

**Jerod Santo:** Because that's usually the first step that I would do, is fork it, right?

**Ben Johnson:** Yeah.

**Jerod Santo:** Unless you're doing a typo edit on the readme, inside the GitHub web interface.

**Ben Johnson:** Yeah, something like a full-screen banner that comes across and just says "You're not taking this code back, once you fork it..."

**Jerod Santo:** Right. So what would happen if somebody came up to you and they're like "You just misspelled something in your readme", and they just did it anyways. Are you gonna close it and be like "I'm gonna commit the same change, with my own signature?"

**Ben Johnson:** It's something I definitely struggled with. \[unintelligible 00:35:45.11\] argument of slippery slopes, but it is one of those things where like -- I don't have a problem with small pull requests, those little/tiny minutiae. But then there's gonna be somebody who instead of changing a word, they change the whole sentence. Maybe it just reads in a weird way, or it's just not what I'm trying to do. Or then maybe it becomes a small code change, but then that slowly grows... And I don't have a perfect answer for this. This is really an experiment, so I don't wanna come across saying like "I know that this is the best way to do open source out there." And it definitely has its flaws, and this is a perfect example of one. So in that sense, it's definitely hard.

**Jerod Santo:** \[36:24\] It's tough... Yeah, because it seems so petty to be like "Actually, I'm not gonna accept this, because I don't accept them..." But once you accept one, now your list of contributors is two people, and you can't go back on that, and now it's like "I don't accept contributions..." "What about that person? Why did you accept that one?" It's like, "Oh, now I have to have this conversation every couple of weeks?" or whenever it happens.

**Adam Stacoviak:** Or even back to the license - you mentioned GPL being good now; if for some reason you change your mind, every contributor is a liability to a veto to that change.

**Ben Johnson:** Yeah, you've gotta do a CLA (contributor license agreement), and then that becomes a whole thing... I don't know, I just -- I really appreciate people pointing out the typos and whatnot, but the amount of overhead just seems weird, compared to the actual value of the change.

**Adam Stacoviak:** This all comes back to the scope of Litestream though... The scope is limited, and that's why you wanna maintain control. It's also influenced by past interactions in open source, and your work... It's a culmination of many things; it isn't just simply "I prefer my code, not yours." That's not what you're saying. You're saying "I will be the contributor to it."

**Ben Johnson:** I mean, I do, obviously... I have the best code, but... \[laughter\]

**Jerod Santo:** And you never make a typo, right? That's how you solve that problem. No typos. Boom.

**Adam Stacoviak:** Well, you're not saying it condescendingly, is what I mean.

**Ben Johnson:** Exactly, yeah.

**Adam Stacoviak:** You may be saying that, but you're not saying it as like "You suck, I'm better." It's more like "I just have a preference here." It's your prerogative to feel that way, Ben.

**Ben Johnson:** Yeah. I think everyone generally prefers their own code, but I think there's definitely something around continuity of code. If I contribute to somebody else's repo my code, even if I really try to follow their code style, it's gonna be a different approach, it's gonna be just a different way of doing things, which -- you know, it's gonna be that one section of code in their whole codebase that just works a little bit differently, and they've gotta kind of keep that in the back of their head. Or they can come in with your PR and change it around to the way they would do it, that kind of refactor.

**Adam Stacoviak:** Let's be super-explicit then. If someone on the GitHub team is listening, what exactly is your request to make, the way you wanna run this operator. Is it simply turn off PRs and hide the button, or hide the fork, or do some of the things that Jerod mentioned? What's a good suggestion?

**Ben Johnson:** Yeah, I think hide the PRs is probably number one. I think some notification when someone tries to fork would be awesome as well. It's a great idea. But beyond that -- I mean, I think that discussions are a great direction to move the conversation away from code and actually the use of the tool, and how people use it. That's really the thing that I miss out on for a lot of things - use cases, and how you use it, and the workflows, and stuff like that.

The code in Litestream - you're not gonna be blown away by it. I'm not doing \[unintelligible 00:39:15.27\] crazy coding in there. It's just ifs and for loops and whatever you do in code... The real value of it I feel like is when you actually apply that stuff, and how that looks in the real world. So I think discussions go a long way in that.

Then my other request to GitHub - we talked about this briefly, they do corporate sponsorships now... I really wish they would allow you to only take corporate sponsorships. I feel really weird about taking money from other individual developers, and I actually don't do sponsorships for that reason.

\[39:52\] If you really want a wishlist, beyond that, I would say - I think that there's this idea that corporations should come along and benevolently support projects. It's in their own self-interest, for sure, but it's definitely a charity, and I don't think that's the right way to frame it; I don't think you're ever gonna convince a large swathe of companies to support open source, without really giving them something direct and tangible in value. So I know it's a contentious idea, but some idea of giving priority support to some corporate sponsorships, or giving some additional benefits that you can really give to a company and say "Hey, if you sponsor this thing for $100/month, then you get these benefits."

You can do that outside of GitHub, there are ways of doing that, but I think to streamline it inside of GitHub would be really powerful. I think that would really motivate a lot of open source contributors.

**Adam Stacoviak:** I think the framing of the sponsorship is really where it gets, as you said, weird. Even, I would say, at a company level. I would personally much prefer it if you just offered a product, and that one product was just simply support, and it was only open to corporations or businesses. LLC, corporation, whatever you wanna be; just not an individual.

So an individual software maintainer like yourself, doing business with corporations - I might personally prefer to just do the business with that business personally, rather than leverage GitHub, but I think if GitHub could produce tooling, the framing of it being GitHub Sponsors, that's where it gets, in my mind, weird. Even for us as a podcast network and a podcast business, a media company, we sell sponsorships. But once we pass that threshold of relationship, we begin to call them and treat them much like partners, because we're not looking for sponsors and transactions, we're looking for people who care about us as a business, the community we serve, which is software developers... And they get in the door with the word "sponsorship", but we soon after help them understand our own lexicon, which is "We treat you like a partner, and not so much like a sponsor, and at that point we'd prefer you to not be transactional and prefer to lean on relationship." I'm kind of going in the weeds on our own business, but I think the word "sponsorship" is what gets a little murky, in my opinion.

**Ben Johnson:** I think that's totally fair. Yeah, whatever you wanna call it. I think the biggest hurdle that GitHub can help with is that companies tend to have these painful procurement processes, where you have to invoice them, and it has to be whatever... I think to be able to streamline that piece would help. The idea of most developers going through procurement processes for every company I think seems overwhelming. I would be happy to pay GitHub 30% (or whatever typical app store fees are) to manage that kind of stuff, to provide tooling around that. I would have no problem giving that money away to them... Rather than having to side-channel all that stuff through a website at the build, or some tool I have to use outside of GitHub.

**Adam Stacoviak:** That makes sense, because if they can knock down all that red tape, all that minutiae in the process, the bureaucracy of that buying process, PO numbers and accounts payable - it can be a nightmare if you have no patience, or you don't wanna spend your time there, which I would imagine you would much rather just write code, or handle non-existent pull requests, or hang in discussions, or whatever... I'm just kidding, but - that would be a better use of your time. And if GitHub could level the playing field globally, at a corporation level, and remove that red tape, and make it as easy as just a relationship thing, rather than saying "Let me ask my Accounts Payable department, let me talk to my boss..." GitHub's already sort of leveled the playing field and made corporations who do wanna pour back into or buy these guys of would-be products from open source developers like yourself - that would be pretty cool.

**Ben Johnson:** \[44:08\] I mean, I don't have all the answers. I'm sure there are reasons that this is a terrible idea... But I think normalizing companies paying for some kind of product on top of open source, especially support or other things of that ilk I think are a good direction, for sure.

**Adam Stacoviak:** I'm curious, Ben, if you've been to the SQLite website much, or read much of their documentation lately.

**Ben Johnson:** I have read all of their documentation. \[laughs\]

**Adam Stacoviak:** Did you read their copyright?

**Ben Johnson:** Is it the public domain?

**Adam Stacoviak:** The reason why I ask is because they say something very similar to you. They say "Open source, not open contribution." So even a lot of language is very similar on that front... And they say a lot of what you've said. So a similar stance, at least.

**Ben Johnson:** Yeah, yeah. I think I pulled in some of that for the readme as well. I think I tried to reference that. It definitely did influence some of my thoughts around it. I don't mean to discount anything that was brought into the conversation...

**Adam Stacoviak:** No, I'm not trying to. I'm just trying to draw similarities.

**Ben Johnson:** Yeah, and I think that they do it mainly to keep the copyright clean.

**Adam Stacoviak:** Exactly, yeah.

**Ben Johnson:** And that's definitely part of what I'm doing. I think my main focus is more mental health, and just keeping a really tight scope, which I don't think necessarily applies for SQLite. I think they can broaden their scope quite a bit.

**Adam Stacoviak:** Have you gotten the call yet?

**Ben Johnson:** The call from Mr. Hipp himself?

**Adam Stacoviak:** That's right.

**Ben Johnson:** No, they actually reached out pretty early on. We did a conference call with them. They were super-nice. Yeah, they got on and we kind of walked through how it all works, and I was fully expecting them to think that I have done some unspeakable, terrible things to their database... But they were quite supportive of it, so I really appreciated that.

**Adam Stacoviak:** Is that right?

**Ben Johnson:** Yeah.

**Adam Stacoviak:** Well, Richard even, when he was on the show, he talked about -- essentially what you said in why you built Litestream was SQLite is kind of touted as this \[unintelligible 00:45:59.20\] and not taken super-seriously.. And obviously, when Jerod and I had him on that show - I forget what episode that was, but it was... Episode 201, yeah. Great episode. And just a whole different side, having had that conversation with Richard about SQLite, and how it's used... Even the business model behind it and how they run it. And I just drew some similarities, I suppose, to the challenges you have. They had some pretty expensive prices on their--

**Ben Johnson:** Memberships?

**Adam Stacoviak:** ...their Pro Support page. They've been able to make money from it, Ben, so I'm hopeful for you at least.

**Ben Johnson:** I appreciate it.

**Adam Stacoviak:** You may be able to be in their stream, so to speak. Pun intended.

**Ben Johnson:** \[46:42\] Yeah, I've actually -- I won't say who this was, but I had a conversation with somebody who's a CTO of a VC-backed company, a database company, and he had talked to Richard Hipp before... Essentially, they run their group -- they make money through memberships... And I have no idea how much they make, but the guy was talking to him, like "How are you guys doing?" and all that stuff... Kind of like asking his approach to doing it that way, instead of going the VC route, and raising a bunch of money and doing a big exit... And my understanding - again, this is second-hand, but Dr. Hipp basically said "How much time do you spend coding at your company?" And the guy at this VC-backed company is like "Basically zero." He's just kind of management, and talking to VCs, and talking to investors and whatnot... And Dr. Hipp basically said he gets to spend every day, he gets to code. And that's kind of my end goal - I would love to be able to get in a place where I can just work on open source. I don't have any interest in raising VC money. If there's something that it would really help with, sure. But at the end of the day - I thought about this... If I made 100 million dollars, I don't see my life changing significantly, other than I would just spend my time working on open source...

**Adam Stacoviak:** \[laughs\] All the time.

**Ben Johnson:** I don't love yachts, or fancy cars, or anything like that. I just like solving problems that I find interesting. So I think my long-term goal would be somehow to make it a sustainable thing that I could just work on in that sense. So there's my goal.

**Break:** \[48:17\]

**Jerod Santo:** So we've been talking for a while about open source, but let's talk about the software, shall we?

**Ben Johnson:** Yeah, sure. So the project is Litestream; so it's L-I-T-E, and stream, however you spell that...

**Adam Stacoviak:** However you spell stream... \[laughter\] S-T-R-E-A-M.

**Jerod Santo:** There we go. Say it together.

**Ben Johnson:** Yeah, there you go. It's a way to basically... If you have a SQLite database and you wanna deploy your application on a little tiny $5/month VPS, and you want that to run -- it doesn't need to be the biggest scale platform in the world, but maybe an app... Most apps can probably run on a $5 VPS running SQLite. But the problem is that if that VPS dies suddenly, then all your data is gone, too. So the idea with Litestream is you could do backups every hour, every day, but then you're losing an hour or a day of data if that happens, if you lose that VPS. So what Litestream does is it basically runs separately, outside of your application, in a little process, and continuously pulls in changes from your database and streams those out to Amazon S3, an object store, so that you're never losing more than a couple seconds of data if your VPS just dies catastrophically. That's the idea with it.

So that's kind of where it started, and that's largely the use case I'm looking at... But there's been a lot of really interesting use cases coming from other people, where they're like "Hey, can I run this thing, but I actually wanna have a bunch of read replicas, too." So you get to scale out SQLite, which is kind of a weird idea.

**Jerod Santo:** It is kind of a weird idea.

**Ben Johnson:** Yeah. And that's not in there yet, but that's definitely on the roadmap right now. And I've had other people that are interested -- actually, there's been a lot of interest around this whole idea of the JAMstack... I've never really gotten into the JAMstack, so please correct me if I'm totally wrong in this... But a lot of people will take the data they have and they basically generate out the pages and post those on a CDN; you put those on a CDN, and then everyone in the world gets a local copy of that page, and it's super-fast, and super-responsive.

\[52:14\] But then if you take that idea and instead of generating all your pages you just have read replicas around the world on these tiny $5/month VPSes, you could really have a global application where you have 100 millisecond or less latency between you and the server for everyone in the world, because you're replicating out... Which is kind of a weird idea.

There's actually a service - I haven't used this yet, so I guess I'm plugging them but I cannot vouch for them - called Fly.io. It's kind of like Heroku, they have persistent disks available as well... But you can run those things for a couple bucks, and I think they have 20 different regions you can deploy out to. So really, you could run this as a serverless platform, basically; but you can run the serverless platform for $40/month, and you're running globally around the world, and your users get these super-fast latencies.

So there's a lot of potential for where Litestream can go. That was a really expounded answer, but the idea is really, in a nutshell, Litestream is meant to let you run SQLite in production, in whatever way you wanna look at that.

**Jerod Santo:** Right. Well, let's loop back around at the JAMstack bit, because that is interesting, and the conversation has been somewhat ongoing on the show. Maybe even more so on JS Party, but I wanna loop back around to that. Let's just start with SQLite in production. First of all, I'm a SQLite fan. But I do tend to reach for Postgres when it comes to production... And I don't know if I do that because I just feel like SQLite's just not made for production... We do use it, I guess, in one production capacity for Changelog Nightly. It's what backs Changelog Nightly. But that's basically a batch process that runs Nightly, and does some processing and sends out emails, and persists its state in SQLite. But it's not like a web server that's getting hit by hundreds of requests a second, and all that...

And I always thought SQLite was cool and all, and for specific things, like in your phone it makes sense... But would you run it on a VPS with a web server frontend?

**Ben Johnson:** Yeah.

**Jerod Santo:** Aren't there concurrency issues with SQLite or anything like that, that you wouldn't wanna do it?

**Ben Johnson:** It does run multi-threaded... So I write Go, that's my language of choice, and I've written projects in SQLite, and I will say a few things on that topic. It does well multi-threaded. I can run thousands of requests at this VPS at a time, and the fact that you can actually -- you can run a request, and I've done testing where I've had several queries run on an HTTP request, and the total time (and this includes rendering out HTML as well) to connect, do the queries, pull that back, render out the frontend was about 50 microseconds.

The way that you develop (I find) with embedded databases tends to -- you almost change your mindset a bit. I have this theory that all databases are actually the same; the only real difference that you have among databases is latency. So once you have a client-server situation, you have issues of like n+1 queries. So you really wanna optimize to get as much of your data back in a single query as possible. You have to do joins, there's a lot of stuff around ORM tools, where they kind of like try to batch together requests... And it's always a pain in the ass.

And that query language is what really makes the difference. If you have graph data, you wanna have a graph language. If you have document data, you wanna have a document language. SQL works on relational tables. But once you actually move the storage locally, into the same process as your code, you really don't even need those separate languages. I mean, they can kind of help from a usability standpoint, but from a performance standpoint you could just as easily look up your individual -- traverse your graph nodes locally using your own language, versus the actual query language itself. Does that make sense? It's a bit esoteric.

**Jerod Santo:** \[56:17\] To a certain degree...

**Ben Johnson:** Yeah. So underlying pretty much all databases - there's some exceptions, but I would say most use a B-tree. You have a thing that you store according to a primary key. And that's true in a document store, in a graph database... Pretty much all databases use that underlying format.

So it's not that I'm particularly in love with SQLite. I think it's a good database, but at the end of the day it's a B-tree that has some nice SQL on top of it that make it a lot more usable. In that sense -- it's a bit of a rant, but I think once you move the data locally, then it really changes how you approach the database.

**Jerod Santo:** So what makes SQLite different than BoltDB, for example? They're both similar foundations, but is this a query language?

**Ben Johnson:** Yeah, I mean query language -- you know, I've built applications on top of BoltDB, and there are a lot of things I really like about it. I would say the biggest thing that you miss that's really nice about having something like SQLite is that you're separating out your code, kind of almost like your code schema from your data schema... Say for example you change your application; you add a new type, or maybe you split off some type in your code into two separate tables. Does that make sense? And then you go to deploy that, but if your underlying data in your database is tied to the structure of your code in your application, then it makes it really tough to transition between versions of code... Because when you deploy it--

**Jerod Santo:** Yeah, your schema changes.

**Ben Johnson:** ...your data is still in that old format.

**Jerod Santo:** Right.

**Ben Johnson:** So having that declarative schema and being able to change that separately from your code I've actually found to be super-nice. And just little things like indexes, and foreign key constraints. \[laughs\] So pretty simple things...

**Jerod Santo:** Right.

**Ben Johnson:** I don't use any crazy features. Postgres has all kinds of crazy features you can use...

**Jerod Santo:** It does.

**Ben Johnson:** ...but at the end of the day, 99% of my code is just some select statements, and some DDL.

**Jerod Santo:** Gotcha. So you can go concurrent with it via threading, and because it's embedded, I guess you don't have the network connection setup and teardown, so you're not worried so much about batching or pooling connections, because it's not connections. It's just in the same process. It's in memory.

**Ben Johnson:** Yeah.

**Jerod Santo:** And the only problem is it's just sitting right there with your binary and you don't have it backed up, but now you've got that solved with Litestream.

**Ben Johnson:** Yeah, that's kind of the idea. When I thought about what was the thing that was keeping me from running SQLite in production, replication and disaster recovery was really the main thing. I actually spent a long time trying to figure this problem out. The code itself isn't even huge. You can open up the code, it's not gonna blow your hair back, or anything; it's not that fancy. But trying to figure out how to actually make it happen was a long journey... I originally actually ported SQLite to Go. This is a kind of a thing I do, where like I don't understand code until I really work with it and move it around... And the idea wasn't necessarily to release that code, but just really try to understand what was going on underneath... And I did that, and then I actually moved on... I tried to do -- do you know what a FUSE filesystem is?

**Jerod Santo:** It's like a network mount thing?

**Ben Johnson:** Sort of... You can build your own filesystems in Linux, basically, with FUSE. And it's this weird -- like, if you wanted to make a filesystem of all your GitHub issues, you could have this intermediate binary that kind of interacts between your UNIX commands, like ls and whatnot, and then your binary can translate those commands into GitHub calls, or something... People do all kinds of weird things with it. So I kind of built like a -- I tried doing an intermediate FUSE filesystem to intercept the writes to SQLite and replicate those... And that was overly complicated.

\[01:00:18.15\] Then the actual trick with Litestream, the thing that actually makes it work is that -- so there's a write ahead log in SQLite; I don't know if this gets too much in the weeds here... But every time you write to the database, it doesn't write to your data file, it writes to this write ahead log. And those writes are append-only, so they keep it intact on the end of your write ahead log. And eventually, that write ahead log gets too big, and it has to do a thing called checkpoint, where it essentially moves all those pages from your write ahead log back into your database. And the issue that I had originally is that I didn't have any control over when SQLite would checkpoint and move that stuff back over... And that's kind of the key - you don't want your underlying data \[unintelligible 01:00:59.12\] to disappear, because that's what you're replicating from. But SQLite has this little caveat where it actually can't checkpoint if there's an open read connection on the database... So Litestream actually keeps a persistent read connection/transaction on your database at all times, and it has some tricks around when to release that checkpoint back; it kind of takes over that checkpoint process.

So Litestream essentially controls that whole process and is able to capture every WAL write that goes in, and then can ship those off to S3. So when you take the sum total of all those writes and you replay them, then you basically get your database, your end state of your database. Does that make sense? I know it was a lot of words...

**Jerod Santo:** Yeah, so it's kind of like -- I wouldn't call it hijacking that write ahead log, but it's kind of like forcing it to be there long enough that it can piggyback the data over, and then it flushes.

**Ben Johnson:** Yeah. And the wall basically acts like a circular buffer. It goes to the end, and starts back at the beginning... So it essentially just keep track of the end of that and tails it, more or less.

**Jerod Santo:** And that doesn't degrade the performance of the production database at all...

**Ben Johnson:** No. Actually, when you're running -- like, Litestream uses almost on CPU at all. It's pretty low overhead. Most of the stuff is in OS page cache anyway, like the data itself, so you're not really even doing much disk access... And yeah, there's definitely some optimization still to be done, but you generally shouldn't really notice Litestream running.

**Jerod Santo:** Have you tested it against large databases, like megabyte, gigabyte-sized SQLite files?

**Ben Johnson:** Yeah, I actually have a VPS running at all times. This is the one thing that actually gives me confidence around Litestream - so there's two different kinds of replication. You can do logical replication, which is where someone submits an update, X to 1 for all your records, and you're storing that command of how to make the change... And then there's physical replication, which is what Litestream does, where every page that gets written, we actually replicate that whole page, and then we can reply those pages to build a database.

So what Litestream is able to do is that it can actually checksum the database, so it can do an MD5 hash on the database at a point in time, and then it'll replay the replica from S3, and those two should match byte for byte. There's a VPS I run that actually constantly pulls from the GitHub archive; so it's pulling in events from there, pushing them into the database, and then I think every hour or so it actually pulls down the replica, replays it all, ensures that they're byte for byte matching exactly... And yeah, it does great. I haven't had issues with multi-gigabyte databases at all.

**Jerod Santo:** Cool. And it just keep growing. It just keeps growing, yeah. \[laughter\] Growing, growing, growing. It's kind of what Changelog Nightly does... \[laughs\] Only we're not storing the actual events.

**Ben Johnson:** Another little interesting bit is like - S3 is super-cheap. You get billed for a couple different things. You get billed for the number of files you push up there, the actual request itself, but you don't actually get billed for the bytes that you push up. You can send up a 10-gigabyte file, but you only get charged for a single PUT request. It's only when you download the data that you really incur much charges.

\[01:04:23.19\] So I think the PUT request costs like five thousandth of a penny, or something like that, for each request. So you can essentially Litestream where it's pushing up about every ten seconds, and it costs you about $1,30 a month... And because you don't incur the cost per bytes sent up, you really have minimal cost in that realm.

So it's a weird, super-cheap backup strategy... That doesn't seem like it should work, but the actual economics work pretty well... Although the VPS that I run to continuously verify it does actually cost a little chunk of change, because it's constantly \[unintelligible 01:05:01.16\]

**Jerod Santo:** Right. So you're just replacing the same file over and over again, versus proliferating files, right? Is that why it's a single PUT?

**Ben Johnson:** No, it's actually -- so it's doing a new PUT for every new chunk of WAL writes that gets pushed up...

**Jerod Santo:** Okay.

**Ben Johnson:** But it'll snapshot it periodically as well. So you generally a fixed size of data that you're pushing up, and the SQLite files tend to compress really well. B-trees in general do. They tend to have a lot of empty space... So the actual monthly cost of the gigabytes tends to be pretty trivial, too.

It's also a weird thing, too - I've had people ask me if I'm gonna start a business around this thing, and I've had interest from VCs and whatnot, but it has this thing where it almost shoots you in the foot, where it's so cheap and so easy to run that I don't think... I can't think of a service that would actually make it easier or cheaper or better necessarily that I could sell... So it's worked out great so far, but not from a money-making standpoint.

**Adam Stacoviak:** It scales so well that you can't sell it.

**Ben Johnson:** Pretty much.

**Adam Stacoviak:** Or make a service that makes it better.

**Ben Johnson:** It is one of those things, yeah.

**Adam Stacoviak:** In that blog post though, where you talked about why you -- I think it's titled "Why I built Litestream", you mentioned about scaling. Can you talk about scaling a little bit there? Because I'm sure that once you proved it's stable and usable and you can actually use it, at some point you're gonna rely upon it more so than just simply \[unintelligible 01:06:23.26\] for the application. You'll need to scale to more CPUs, more RAM, more servers...

**Ben Johnson:** Yeah, sure.

**Adam Stacoviak:** Talk about that.

**Ben Johnson:** Yeah, so I think scaling is an interesting topic in our field. I feel like there's been an obsession over scaling, and uptime. I think they have kind of gone off the rails over the last 10-20 years, where we have this idea of like -- everyone tries to build their application to be the next Twitter, or whatnot. People worry about "What if I have to scale like crazy, in whatever amount of time?" And generally that's not the case, first of all. But given Moore's Law, where we are seeing exponential increases in compute that we have available on single blocks, but for some weird reason we keep having this exponential scaling of the number of nodes we actually need to run applications... It seems backwards to me.

We have nodes on Amazon where you can spin up a 96-core box for however much money a month... But that's a lot of cores. Each one's doing three billion operations per second. We should be able to run a couple hundred HTTP requests to that. So as far as the scaling piece, I find that most people, if you're running a local SQLite database, you're not gonna hit those scaling concerns.

Actually, one scaling concern I find people actually hit is things like Postgres tend to have a high overhead for connections, so you end up having to put in something like a PgBouncer in between, that can actually start to pull those connections to not overload Postgres... Whereas you just don't get that when you have an in-process database.

\[01:08:02.24\] So from that standpoint it's great... I would say that if you're running applications -- again, I write in Go; it's a super-fast language, and running locally, I can push through thousands and thousands of requests per second on pretty modest hardware... And I think that that really covers probably 90% of applications out there that people are gonna write. And even if you don't use SQLite for your main company's application, there's probably a ton of applications in your company that are on the side, that are periphery, that don't need to be some huge Kubernetes cluster.

So I would say that on the scaling side... And then on the uptime side, I feel like people have this obsession around uptime.... But I feel like the more tools that people add -- and I don't really mean to rag on Kubernetes all the time; I do, but I think of it as a tool that has an appropriate use case, but it's not the vast majority of people's use cases.

I think that from an uptime perspective you're getting many more layers of complexity in there that are gonna cause you to have more downtime than simply running a single node that may go down because of a network connection once a year, or a couple times a year, for a couple minutes. I don't think people really take in the cost of downtime when they think about the trade-off they're making to make these complex systems that give them the illusion of uptime. I hope that makes sense.

**Adam Stacoviak:** In your blog post you mentioned "Solutions such as Kubernetes tout the benefits of zero downtime deployments, but ignore that their inherent complexity causes availability issues." Then you link out to this other thing which I had no clue of before, which is a public post-mortem website for Kubernetes, and there's just like... A lot.

**Ben Johnson:** It's an endless list of post-mortems for Kubernetes...

**Adam Stacoviak:** Yeah. It's k8s.af. That's a compiled list of links to public failure stories related to Kubernetes. The most recent publications are on top. But it's several scrolls...

**Ben Johnson:** Oh, yeah.

**Adam Stacoviak:** So there's a lot.

**Ben Johnson:** People have put in good effort into Kubernetes. I don't think it's a bad piece of software. I feel like Core Kubernetes is generally good; I feel like the ecosystem around it is overly complex for most people. And I feel like Kubernetes is the future, but I don't think it's the present right now. I feel like people really need to have a great use case for why they're gonna use Kubernetes before they jump on there.

I've worked with companies before that are trying to evaluate their Kubernetes strategy before they actually have customers, and that seems insane to me.

**Adam Stacoviak:** Yeah, it does.

**Ben Johnson:** I generally have a rule of thumb that -- the cost of going to Kubernetes is probably, say, a million dollars; and it's not meant to be like a hard and fast rule, like it's gonna cost that much for everyone... But you need to have a million-dollar problem that you're solving with Kubernetes... And if the number one million dollar sounds like a lot of money, you shouldn't be using Kubernetes. It's probably well beyond your problem space. So that's my personal view on where we're going with the technology and the complexity around it. I don't think people should take on those tools lightly.

**Adam Stacoviak:** What would you consider the best use case then for -- I'm gonna say it like Richard Hipp says, which is SQL -ite. \[laughter\] I'm starting to correct you guys on that, because that's what he said... SQL -ite...

**Jerod Santo:** He's not here right now, so... I say it how I want.

**Adam Stacoviak:** \[laughs\] So what's the best use case for SQLite, and then using Litestream? If someone's using Postgres, or they're chasing uptime, or they're chasing scaling, why would a team or an individual developer that's building an application choose SQLite or Litestream?

**Ben Johnson:** Sure, yeah. I guess I kind of think of it in the opposite direction. I kind of start from a default of "Hey, SQL -ite..." as they say it...

**Jerod Santo:** See what you did, Adam?

**Adam Stacoviak:** Yeah... Because it's supposed to be like a \[unintelligible 01:11:54.25\]

**Ben Johnson:** Actually - so this is a bit of an aside... I cannot for the life of me pick up that pronunciation... But whenever I'm writing, there's always a distinction of -- like, if you call it SQLite, then you would say "a SQLite database." Whereas if you call it SQL -ite, you'd call it "an SQL -ite database." Anyway...

**Jerod Santo:** Right... \[unintelligible 01:12:18.17\]

**Ben Johnson:** \[01:12:20.22\] I'm touring around the grammatical side. Anyway, so I think of the actual deployment from a different side, where I feel like most applications would probably work fine on SQLite, and I think you really need a good reason to move off of that. If you're gonna start introducing additional tools, you're doing multi-node deployments, I think that you really should have a good reason for that.

There's inherent complexity in that, in that once you move away from a single node, there's a lot of things you can't do anymore. You might have a Postgres cluster and it's connected to from multiple nodes, but that becomes slow because of latency of the database, so you may want to add some kind of in-memory cache; but you can't add in-memory cache on the web notes, because those are all connected to the database, and they don't have a full view of changes that came through a different web node... So then you have to use something like memcached or maybe a Redis node... So you really -- I have this phrase, "Complexity begets complexity." Anytime you add more complex systems, those complex systems are gonna probably rely on more complexity later on. You're not gonna have a full view of the complexity you're adding initially.

So to answer your question, I think most people should run SQLite databases, especially now that you can run them safely, and I think you should really have a good reason not to, if you're not going to.

**Jerod Santo:** Well, I'd say we loop back around to the JAMstack... I wanna do that before we forget...

**Ben Johnson:** Oh, sure.

**Jerod Santo:** ...this idea of read-only replicas, and basically shipping them off to points of presence around the world, so that not only is your static assets CDN, but your data store is CDN, effectively. So you could run -- you know, when we're talking about edge computing, and you have these functions on the edge, and JAMstack proponents are big on that... But I always say "Well, the function is running on the edge, but anytime it needs to interact with my database, it has to come all the way back to whatever centralized server that the actual backend is running on. It has to incur that cost."

Of course, you can cache, and stuff, so there are advantages of doing that, but ultimately, your database is still in one place, or a few places... And so the goal would be to get your database just everywhere, and not have to worry about how that works. \[laughs\]

**Ben Johnson:** Oh, yeah... Absolutely.

**Jerod Santo:** Right? That does sound pretty awesome. So I've kind of just been saying "Well, who's gonna--" And then there's like "Well, FaunaDB is doing that", and I think Cockroach has some angle into that... There's people working on this. Mostly, what people say is like "Well, it's being worked on." So everybody kind of wants that, because once your database servers are just CDN, then of course your application servers can just be that way as well, if you have a separate \[unintelligible 01:15:12.02\] But in the case of an embedded database, well your application is already out there, and your database is embedded, and Litestream is just managing that.

So it sounds really rad... But they're read-only replicas, so when it comes to writes, you'd still have a centralized thing, but writes are usually less often than reads... So it's not the panacea, but it's pretty stinkin' close if it could work well.

**Ben Johnson:** Yeah, exactly. And I think people generally -- at least a lot of the web apps that I've worked on over the years, tend to be like 90% reads, 10% writes. If you go to an e-commerce website, you're probably browsing around a bunch, clicking on at least nine different pages before you actually check out... And I think that that idea of the read-mostly apps really benefit from this kind of thing.

\[01:16:02.29\] I think most people are pretty okay with -- you know, they get on a website and by the time they have to go check out, they're used to waiting a couple seconds at worst for a credit card to go through, that kind of thing... I think the expectations around that are pretty okay. But to be able to actually \[unintelligible 01:16:16.07\] through a website, to browse around an e-commerce website, and every page loads in sub-100 milliseconds, I think it would be awesome, no matter where you are in the world. I think that's a pretty compelling case.

**Jerod Santo:** So what would it take to get SQL -ite... \[laughter\] What would it take to get SQLite--

**Ben Johnson:** We're gonna spend most of the rest of this podcast \[unintelligible 01:16:38.25\]

**Jerod Santo:** I should've called it the way I'd been doing the whole time... It'll make it real hard for our transcriber... \[laughter\]

**Adam Stacoviak:** Yeah... To just throw back to the episode we had with Richard Hipp though, Jerod, you did say that you were gonna try hard to say it the way he said it. So...

**Jerod Santo:** I did try hard, and that was like ten years ago... And I've given up. \[laughter\] I also told Gregory Kurtzer that I would pronounce it his way, because he was right here on the show.

**Adam Stacoviak:** CentOS...

**Jerod Santo:** And once he leaves, I'm gonna go back to my own way.

**Adam Stacoviak:** That's true.

**Jerod Santo:** So that's what I'm doing with Richard Hipp, so...

**Adam Stacoviak:** Okay, you've got an out. Go ahead and keep the -- go your own way.

**Jerod Santo:** SQLite... I go back and forth. I call it SQL, then Sequel... I have no consistency. I'm not internally consistent. And now I've lost my train of thought. Thanks, Adam...

**Adam Stacoviak:** Sorry. Gosh...

**Jerod Santo:** What was I talking about? What would it take to get SQLite plus Litestream deployed in such a fashion? You mentioned there's some serverless platforms... Maybe they would have to use Litestream somehow? Or just go to DigitalOcean, or Linode, and just pick VPSes around the world, and then just do my own thing? How would that actually play out?

**Ben Johnson:** Sure, yeah. I think the biggest issue you really have around these read replicas, especially serverless. It's like, you really need all your writes to go to a single node. It doesn't really make as much sense if you're going everywhere, because most of them are going to be read replicas.

So I think solving that issue is probably the biggest one... I mean, you can certainly do it in your own code; it'd be nice to make it more automatic. I'm not quite sure how that'd work... But once you redirect your writes, and you're pushing all your posts and PUTs and patches, HTTP methods over there into one single node, I think that makes it a lot easier. And then from that, a read replica is coming into Litestream in the next version, and that basically streams out those changes to all the different serverless nodes.

So that one system, the Fly.io - they have persistent disks, which solves a lot of the issue... You can do it without persistent disks too, but you get some issues around -- you essentially need to download the database on the startup of that serverless function when it's called, and actually bring it into the local file system. So that kind of negates some of the benefit of a fast serverless platform. So those are kind of the two main issues. Persistent disks, I would say you can solve that, but otherwise it's redirecting writes.

**Jerod Santo:** Yeah, as you redirect writes, you're kind of turning SQLite into a client-server database though, because you're pushing all your writes to one particular instance... So aren't those other instances having to basically become clients of that instance, in a way?

**Ben Johnson:** I wouldn't go that far. I think you can do a lot just simply with rerouting, or doing a proxy through an HTTP server.

**Jerod Santo:** Gotcha.

**Ben Johnson:** It could probably make a lot of that invisible.

**Jerod Santo:** I see what you're saying. So the proxy can handle it \[unintelligible 01:19:28.16\]

**Ben Johnson:** If you can guarantee that all your Git methods are gonna be read-only, then I think you could probably easily do that.

**Jerod Santo:** Yeah, fair enough. That's a good point. Read-only replicas are coming soon... And then is Litestream done, or there's a future beyond that for the tool? Or do you feel like that's your scope and sticking to it?

**Ben Johnson:** I mean, I would say that's largely the scope that I'm looking for... I really wanna make it just hardened and just work as easily as possible. I think that's where a lot of work really comes in, is just getting every single little edge case that comes up, and making sure that it flows smoothly, and that you can use whatever S3 store you wanna use... Making it work well with NFS disks is another thing... There's some different configurations you can do with it. I don't really have any big plans for anything crazy beyond that. Honestly, if I can get a globally distributed SQLite database, I'm pretty happy.

**Adam Stacoviak:** Well, Ben, thank you so much for, I suppose, being bold to say no to contributions... Bold enough to ruffle some feathers, but -- I mean, that's certainly one way to draw some attention to a new project, so congrats on winning, at least, on that front. And thanks for coming on the show and sharing the deeper sides of this. I know that a lot of people have been on Hacker News and commenting and stuff, and they can kind of see some details there, but hearing a full-length episode like this I think does provide some pathways to understand what a maintainer is truly trying to do with their software... So I appreciate you sharing your time and your wisdom here today. Thank you, Ben.

**Ben Johnson:** Yeah, thanks for having me on. I appreciate it.
