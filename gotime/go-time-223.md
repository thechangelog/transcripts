**Angelica Hill:** Welcome to Go Time! Today we're gonna be talking about how to prevent legacy code from creeping in. I'm joined by a wonderful array of guests, as well as my lovely co-host, Kris. Hello, Kris.

**Kris Brandow:** Hello! And yes, that is my voice you hear out there, listeners. I am finally back, after four months. It's been quite a while, but I am very excited to be back.

**Angelica Hill:** It's been far too long. And along for the ride with us, talking about how to work with, avoid issues arising from, as well as just how to deal with legacy code on a day-to-day basis, we have firstly Dominic St-Pierre, who operates a small consulting company in Montreal. He is the maintainer of a FOSS alternative to Firebase called StaticBackend, and is the author of Build SaaS Apps in Go. Welcome, Dominic. Welcome back, I should say.

**Dominic St-Pierre:** Thank you.

**Angelica Hill:** Pleasure to have you.

**Dominic St-Pierre:** Happy to be here.

**Angelica Hill:** Then we've got Misha, who is a first-time Go Time guest, but also (I'm told) a first-time podcaster in general. Very privileged that you decided to grace us with your first podcast. How are you today, Misha?

**Misha Avrekh:** I'm good, thank you.

**Angelica Hill:** \[03:57\] And then we have Jeff, who is an associate backend engineer at the New York Times. I should also say, Misha is also at the New York Times and is a software engineer. Welcome, Jeff. How are you?

**Jeff Hernandez:** Great. I'm excited to be here.

**Angelica Hill:** Excited to have you. And then Jon, we've been here before... Jon Sabados, who is also at the New York Times. I promise I'm not biased. They just happen to be people I spend most of my life with... He is staff software engineer. Welcome back. How are you today?

**Jon Sabados:** Doing well, and good to be back.

**Angelica Hill:** Awesome! So before we dive into the nitty-gritty, I wanted to ask the group, what is legacy code? How do we even define what we call legacy? Dominic, do you wanna dive in? I know you've been working with something that I'm sure we would all agree is legacy...

**Dominic St-Pierre:** Yeah, I think in my case it's really a "passion." To me, legacy is when a company starts to have difficulties hiring developers to work on their software, you can think of that as legacy, I think. Also, when there's no unit tests, not really good documentation, it's very old software that nobody other than the original author can maintain anymore... I'm talking about like 20 years old software. So this is one of the things that I do in my consulting.

So yeah, to me when the tooling starts to not work for you anymore, and things like that. In a nutshell, that's a little bit my definition of what legacy software is.

**Angelica Hill:** So you said very, very old... So we're on Go Time. Go to me doesn't feel like a very old language. So I wonder, maybe - Jon, I know that you've had a little bit of experience working with this... But at what point did Go applications turn into legacy?

**Jon Sabados:** Well, that's a good question, because you can actually -- and again, it depends on how you define legacy, but at least in our scenario it's very possible to have fairly recent code that is suddenly legacy. One example of where you might hit that is if you have a system that was implemented in a fashion that really didn't suit the needs, so you're forced into a greenfield rewrite, and supporting two systems. That's an easy definition of legacy code. We've got a new thing that's going to do the stuff, but an old system that we have to support. I might define legacy code as any type of code that your engineers hate to work on.

**Angelica Hill:** Okay, so any code that I don't wanna work on, I can say "Oh, it's legacy. It was written last week, but it's too old; I don't wanna work on it." \[laughs\] Okay. And then I wonder, Jeff, specifically - I know you've joined the New York Times preferably recently, and I know that you came to a kind of legacy system... Coming in, how do you identify whether something you're working on is legacy or not? Is it that like everyone on the team is saying "Oh, this legacy system..."? Are there indicators when you're joining a new team you're like "Oh, this feels legacy..."

**Jeff Hernandez:** I feel like part of it is everyone just says that this portion of our services are really difficult to work with, they're kind of considered legacy. But I don't know, I feel like maybe my own definition of what is legacy is more broad than what's been given so far. Legacy is definitely for me something that is already there by the time you join the team, regardless of whether people like to work with it or not. That's kind of like software itself - we're building on top of what has come before us. I guess that would be my own definition of legacy. But I definitely take into account what other people on the team who have been working with this system have to say about it. Our old system is very difficult to work with; it definitely informs my opinion on what I consider legacy.

**Angelica Hill:** \[07:59\] Yeah, for sure. And then obviously, when we're talking about legacy, I feel like not only are we talking about legacy architecture, legacy infrastructure, but we have legacy dependencies. A lot of our apps have hundreds possibly of external dependencies. At what point and how do we go about defining our dependencies as legacy? I don't know whether Misha, you wanted to speak on how do you think about dependencies and when they become legacy.

**Misha Avrekh:** Right. Well, for example the project that I work with now, which is written in Go - it's about two years old at this point, so probably not legacy strictly speaking, although there are parts of it that are starting to feel like legacy code... I can talk about that separately later. But yeah, as far as external dependencies that are legacy systems - we have a few of those. The way we've dealt with them is by caching as much as possible. Caching the data that's returned by the external dependencies to reduce the latency, essentially, of dealing with external legacy projects.

**Angelica Hill:** And is that something that you do for all of your dependencies? Or is that something you kind of have a specific list, or -- like, how do you make that decision?

**Misha Avrekh:** So on our team we made those decisions specifically based on our latency metrics. It doesn't really matter whether the external dependency was written in Go, or Java, or what have you. If we feel like we need to optimize for latency, we try to cache it. That's been our approach. So yeah, monitoring and testing for latency, in this case.

**Angelica Hill:** For sure. And then, obviously, when we're talking about legacy, in its many different definitions, because as we can tell from even these initial definitions, there is kind of a fluid way of defining, we can't just identify and then say "Great! We're gonna rebuild, refactor..." We have to maintain it, whether it be for a month, a year, many, many years... So I'd love to hear a little bit about what it is like, both from like a day-to-day, personal, but also from a technical point of view, to maintain legacy code.

I know Kris, our wonderful co-host, has been kind of spearheading a maintenance series, so I know this really tees into the various different topics you've been exploring... Perhaps for our listeners who aren't fully familiar, I'd love to kind of pass over to you before we dive in, to talk a little bit about how we've been exploring and thinking about maintenance.

**Kris Brandow:** Yeah. I guess I would start with saying my view of maintenance is definitely not in some ways as maybe negative as everybody else seems to think it is. When I hear the term "legacy", I think there is this feeling of dread that a lot of us have, but the term legacy can actually be a good thing, too. Like, the legacy that you leave from the life that you lived, and things like that... And I take the same view that I take for something like debt. It's like, there's good debt and there's bad debt. There's good legacy, there's bad legacy. And I think that really informs the way that I also see legacy when it comes to code. Anything that's hit production to me is legacy. It's out there, it's something we have to deal with, it's something that we have to maintain, and we have to understand, even if we don't necessarily like that code at the end of the day.

So I think before it gets to production, when you can still change it and mold it and do what you like with it, I think at that point - yeah, we're still dealing with something that's not legacy, it's not debt yet, it's not something that we have to necessarily deal with in the future... But once it hits production, once it's out there, it becomes very difficult for us to pull back.

Now, of course, we can get into the semantics of what does it mean when something actually gets to production, but I think that's the way that I at least conceptualize this... Pulling it further back than anybody else has, and really seeing it as all of our code is legacy, and it really comes down to which code do we think is good legacy and which code do we think is bad legacy.

**Dominic St-Pierre:** \[12:01\] Well, yes, I really like what I'm hearing so far... One thing that jumped to my mind is to me a Go codebase, even though it might not have been designed the proper way or whatnot, it's still easier to refactor, it's still easier to change the status of the codebase... Because there's probably unit tests and whatnot; there's probably lots of tests in a modern codebase. So to me, I understand all of this, but I feel it might not be the same thing here. When you're stuck with something and you have no documentation, no tests to exit yourself out of this situation... Because I really like what you said - everything is legacy; yeah, I understand that. But it seems to be that when the budget is there and when the team is there, you still have options. Whereas I've worked at small companies that just cannot invest into any kind of refactor, or even a rewrite at that. So you still have to maintain the codebase.

**Kris Brandow:** Yeah, and I think that's definitionally just bad code, at the end of the day, if you can't maintain it in any way... But I'll also say, I've run into lots of circumstances where we have lots of tests and they're not good. They give us a false sense of confidence. Or you have lots of tests and they're written in the wrong way, so whenever you touch something of the codebase, you have to go refactor a few hundred lines of tests.

So I think even in your example there, it's like - yeah, tests definitely can make a codebase better, and generally they show the mark of a better codebase, but I think there's ways in which even those types of codebases can be a pain to work with. But I would absolutely say, a codebase that has zero tests, no documentation, none of that, is the worst kind of legacy codebases that we can deal with.

**Dominic St-Pierre:** How do you know then if your test suite is going to be good for the long run?

**Kris Brandow:** Good design of your software. I think if you've gotta kind of push the boulder up the hill, or really go back to the genesis of the stream... Like, if you're gonna build a dam, it's a lot easier to build a dam across a stream that's two feet wide than it is to build one across one that's 200 or 2,000 feet wide. So yeah, it's like, if we put a lot of the stuff downstream to know if we've done the right thing, we can, through various techniques, understand how good it is. But I think it's much better to try and put in ways of knowing how correct your code is upstream.

But of course, a dam across two feet of stream is quite useless of a dam... So there's a middle ground here where we need to find the right place to put things. And I've definitely found that right place to be in good design documentation and good design ideology for the software that we build. But I'm sure other people have different opinions on that.

**Jon Sabados:** And I think I'd add a modern codebase does also not mean tested. There's plenty of fresh code that I see written that engineers oftentimes don't like to write tests, so that is a pervasive problem that seems to plague all codebases, is stuff just isn't tested.

**Misha Avrekh:** Yeah, one thing I can say we've done to mitigate that problem is to keep an eye on the coverage thresholds and actually building the test coverage thresholds into our testing and deployment pipeline. So if someone adds new code without adding tests, the pipeline actually fails.

**Jon Sabados:** That is definitely an interesting approach, but I've also seen it backfire horribly in the past. I've seen engineers, and this actually got someone talking to, this is in java land, put an entire class on a single line, because they were just annoyed by the test coverage requirements. So you can kind of get malicious compliance with those code coverage requirements. And also, depending on your language -- Go is not as bad, but in Java land there's all sorts of... Like, you've gotta catch these exceptions that practically are never going to happen, but you might not even be able to write tests to get there. So I think you do have to be a little bit careful with coverage requirements. I think it's a good metric to have and to track, but there's a danger zone when you start failing builds because of it.

**Angelica Hill:** \[16:10\] I'm interested to hear a little bit more about -- you referenced Java, Go... Are there aspects of Go as a language that make it easier for you to either "avoid" legacy code, or avoid it being a whole huge refactor project? Because in fact, refactoring bit by bit, backwards-compatibility comes to mind... Are there aspects of Go that make it easier for us to avoid legacy creeping in?

**Jon Sabados:** I think there's some, in that it's a simpler language. Up until recently you didn't have generics, so you're not gonna have people going nuts with generics and creating really complex things, like trying to deduplicate everything through generics... So that helps. But I think the biggest thing that Go has going for it with the lack of legacy and maintainability is that it's a newer language. It hasn't been around for that long, so you don't have projects that have been sitting under that were conceptualized 20 years ago, to carry that forward. But there's a lot of Java projects out there that have been around for a long period of time. So I think there might be a false sense of security saying "Well, Go is going to have less legacy" just because you don't see it as much, but that's also a function of the language being newer and therefore not having the crap that's been around for a long time.

That's also something we learned every time we write code and every time we develop, so there's a lot of patterns that we might have been doing 20 years ago in Java land, that we've maybe learned better ways than Go. But again, that's not so much a function of the language, just of the newness of it.

**Jeff Hernandez:** I just wanna add that what Jon was saying kind of made me think about what this topic of legacy will be like for Go in 10-20 years, in terms of when it gets to be old enough to -- the same age as Java is currently, and we have a lot more Go projects around that need maintenance... It's just an interesting thought experiment to be having.

**Dominic St-Pierre:** Well, I can tell you about stories with .NET, even though -- let's say it started in 2001. So in 2005 there were already projects that you could not even migrate to the next version. So to me, the tooling that the language provides, which is very solid in Go, in my opinion, and the fact that it's backward-compatible - if they can maintain that for a long time, it will diminish the effect of that, I'm certain of that. Because in my case, at the moment, the tooling of Microsoft is my main issue. It's not the code per se; it's not that at all, but the tooling.

**Jon Sabados:** I guess I'd be interested, because I've never really worked in .NET. I've always been allergic to Windows. But the Java side of things, they strived for a long time to make the JVM backwards-compatible with prior versions of Java, and that didn't necessarily stop the need to have complete rewrites, or like you being stuck on an ancient version of Java because whatever new thing.

I've actually even seen the new thing with Go, where they're seeing projects that were running on old versions of GAE, that have pinned their version of Go to 1.11, or something, and upgrading those has become a nightmare. So again, it's less likely in Go, and it is for sure easier to generally upgrade versions of Go than my experience has been with Java. But again, in Java land you're also dealing with a ton more dependencies, because there's this massive ecosystem that abounds, where you're not having to do everything. In Go, a lot of that ecosystem doesn't exist, so you're reimplementing a lot of things, and not sucking in as many dependencies. The benefit of that is when it's time to upgrade, you're only worried about your code, not a million different libraries. I'd be curious to see if that easy to upgrade continues as the Go ecosystem grows and as it becomes more complete.

**Dominic St-Pierre:** \[20:09\] Yeah, but you are talking about the platform. So the Google App Engine is a platform; it's not really Go's fault or responsibility, in a sense. You can still take codebases from the early, early days of Go and compile that with the new compiler. This is something that you just cannot do in the .NET world. So that's mostly what I'm talking about - when the tooling is failing you, it's a different ball game, because you have the code, but the technologies that were suggested to use when a company makes a choice of going with something, and three years later it's not even supported by Microsoft anymore, then it's a different things than that design, I think.

**Jon Sabados:** Yeah, and I guess there's a different past user story there, and experience, because - again, coming from Java land, everything will compile just fine, but the things that I've encountered, that I've seen, that make upgrading hard isn't so much the compilation, which it sounds like in .NET that might be a thing... But it is the platform that is the hard thing to upgrade, from my past experience. So that's where I think that Go won't be immune to the platform increasing scope and hardness to upgrade with that as it becomes more robust, or there's more things, it's gonna be like GAE and whatnot. So I definitely agree with you - yeah, if your vendor is making stuff that doesn't compile it in three years - on my God, that's terrible. And I'm sorry.

**Dominic St-Pierre:** Yeah, I can give another example. So you know, TLS 1.1 just vanished recently, but there is still old applications that run under an old version of Windows Server 2008, which is not supported anymore... But because their migration path to the next version of .NET is not an easy one - I'm not saying it's not possible; it's not what I'm saying. But there is lots of investment that a company needs to do to migrate to the next version. So that's another aspect of legacy... When the OS and the bare-bone communications system, the protocol starts to fail you, what do you do? So I had to start writing some very small piece in Go that just do HTTP call, because I needed to use TLS 1.2 or 1.3. So yeah, it's a different ball game, I think.

**Jon Sabados:** That does bring up is working in legacy with a closed source system is different than working in legacy with open source systems when it comes to those dependencies... Because that is one thing I've always liked about working in all the various different techs I've been in open source. You know if Oracle buys Java, somebody is gonna be like "Well, we can take the JVM and run with it still." OpenJDK... It's been a while since I've been in Java land, so I'm not sure how successful OpenJDK has been, but that is a possibility, right? When you've got closed source, you might be forced into complete rewrites.

**Angelica Hill:** So do we feel like that's one of the differentiators of Go, in that we have this vibrant, wonderful community where if there's anything that is detrimental, it's causing people to feel that it's legacy in some way in terms of the tools provided? That there's gonna be mass opera in the comminuty saying "Hey, can we fix this, please?"

**Jon Sabados:** It definitely can help, up until the point that there's enough bifurcation that there's a fork, which hopefully won't happen. It's rare to see languages truly fork like that. So I think largely yes, but that forking is also a potential danger.

**Kris Brandow:** Languages except for JavaScript... \[laughter\]

**Jon Sabados:** Oh, God, JavaScript... Yaay!

**Break:** \[23:54\]

**Angelica Hill:** So we talked about the pains of maintaining, and the need to - as you've kind of touched upon, Dominic, kinda of hack into these small    solutions to make sure your apps continue running... But at what point do you throw your hands up and say "No, we need to completely rewrite this"? Well, one, relying upon having the time and investment to do that, but we'll touch on that later... But if you feel like there is the time and investment to do a rewrite, at what point do you go from maintaining to really advocating that we need to rip this out and plant a completely new tree?

**Dominic St-Pierre:** One nice thing about legacy software is that at some point they kind of run without any intervention from any developer. So that is something that could help with a complete rewrite. If the company is able to do that and seize the value in doing that, then yes. I think at some point the maintenance -- because after 20 years you are not really maintaining any codebase. You're not changing lots of codebase. It's everything around the software that is failing. So it's not the code. The code is battle-tested. So even though there's no unit test, I trust those old software completely. They have been fixed, there is not really any bugs anymore... They are pretty stable, but it's a huge investment to decide to rewrite the software, especially old applications like that. So yes, I don't really know what to answer to that, but maybe someone else has another point.

**Jon Sabados:** I don't know that there is a hard and fast rule for when to do a greenfield rewrite other than it should probably be one of your last resorts, because it is an incredibly expensive thing to do. Oftentimes you have to do it bug for bug, depending on your downstream clients, and that can be a nightmare to do.

And you know, different scenarios can offer different reasons. If you're doing a cloud migration - well, there may very well be a reason to do a greenfield rewrite of fairly recent stuff, in that case, because your underlying platform is changing dramatically.

**Misha Avrekh:** \[27:41\] Based on the projects I've seen, there definitely needs to be a close alignment between business and product, as it were; business requirements and the tech requirements and what needs to be done on the tech side... Because that's when you start seeing possible solutions, like "Oh, maybe I don't need to rewrite the whole thing. Maybe I need to rewrite just parts of my legacy code, and those will work as standalone pieces, while the legacy thing continues to chug away in the background." And also, of course, the expense part that needs to be understood and underwritten by your business, if that is to happen, if any kind of rewrite is to happen.

**Jeff Hernandez:** I'm curious as to when it is important for business and product to be aligned, but also taking into account the engineering quality of life. If I'm spending all my time -- like Dominic said, I'm not fixing the code itself, I'm trying to keep the code standing, keep it running, because everything around it is just crumbling... Speaking for myself, I don't feel like I would last very long if that's all I was doing at a company. Like, yes, I'm willing to support legacy systems, but that's not all I wanna be doing. I wanna be creating something new, or at least extending it, or something. I don't wanna just be maintaining forever. I feel like I won't grow as an engineer if that's all I'm allowed to do.

**Dominic St-Pierre:** Yeah, I can totally relate with what you're saying. \[laughs\]

**Misha Avrekh:** Yeah, if your engineers -- oh, sorry.

**Dominic St-Pierre:** I'm alone at the company at the moment, so they are simply not able to hire anyone else. So I'm kind of stuck there.

**Kris Brandow:** I do think there are some engineers who actually do like just tinkering on old codebases and not adding new features or anything, but just keeping something running. I think there are people that just get an immense amount of joy out of just doing that. But I definitely think trying to put engineers that don't wanna do this sort of thing onto a codebase where that's all of the work is not going to work out very well for anybody involved.

**Angelica Hill:** And do you feel like that is more in keeping with just like personal preference, or is that perhaps to do with where you are in your progression as a software engineer? I mean, purposefully we have kind of a range of different levels on this call, because I wanted to really get an understanding of what is it like coming it at like Jeff's level, and very early, looking to learn, looking to grow at a very rapid pace, versus someone like Kris, Jon etc. who are at that -- I don't wanna say end phases; you have many more years in you... \[laughter\] But you see what I'm saying. You've worked on enough problems to have learned a massive amount, and perhaps to find a new problem for you to solve is more difficult. Or do you think it's just personality? Go on, Kris.

**Kris Brandow:** I think it's a different type of engineering, rather than a certain level of it. I think there are people that want to be maintenance engineers in the same way there are people that want to just be pure R&D, pure prototype engineers. They wanna build stuff, they never want any of that to be in production, because they know it's not gonna survive production, and they know that they don't want to have to maintain it. They're like, "I'm just doing research, I'm just proving out an idea. That's what I like doing." And I think there's leveling within those types of engineering, but I don't think they stack on top of each other, or anything."

I think there's like, okay, maybe you're on one far end of the spectrum, you really like getting one of those old, nasty codebases, and you're like "I'm not gonna add anything new, I'm just gonna fix it up. I'm gonna add tests, I'm gonna document things, and I'm gonna turn this into a really nice codebase to work within."

At the other end of the spectrum are those prototype people that are like "I just write code that I just clobber together and make something work. But there's no way this will work for the long-term." And I think the majority of engineers fall in the middle. They like doing some new stuff, they like maintaining some old stuff, and that's just kind of it. And I think it's important that we start seeing that as a spectrum, instead of trying to see that as like "Well, who's better than the other?" There's no better, there's just like "We need a bit of all of them." You need to keep your organization balanced.

I think that's one of the criticisms I have for a lot of tech companies right now, is that they are very much focused on the other end of that spectrum, that is the R&D engineers and the people that want to build newer things, and the results of that is a lot of codebases that don't wind up getting properly maintained because there's no one in the company that wants to do that maintenance. So there's no one in the company that's advocating for it, even though everybody in the company is aware that it needs to happen.

\[32:19\] I think that happens, a lot of teams sitting there being like "Well, we really want to work on all of this old, legacy stuff, but where is the time to do it? How are we gonna make this happen?" So I think getting some of that balance is good.

But to answer your original question - yes, I think they are different types of engineering, not different amounts of time that you've been doing software engineering.

**Angelica Hill:** For sure. And off the back of that, people know that a certain platform or a certain part of that technology, that stack is legacy; it's known about. You're slacking about it, "Oh, this annoying platform. Oh, this annoying..." Like, it's all known. But how do you then advocate for a rewrite, or for the time to maintain? What are, from your experiences, the key things that you have to bring up to get buy-in from product, business etc. to actually give you that time? Because that is, I know, a challenge that many people face. So how do you overcome that? How do you make them care?

**Jon Sabados:** Yeah, that's a hard problem, because effectively, that maintenance is a cost center, with no -- you don't see the benefit immediately. Generally, my experience has been everyone is short-sighted and more concerned about getting their current feature out than they are about the ability to add another feature six months down the line. And I think the best argument that I've had is working with business and explaining that this tech debt is something that actually has a cost down the line, and will impede future things.

Most people understand the idea of debt; there's only so much you can have. And explaining it as tech debt and being like "But we will get to the point where all we can do is pay our tech debt, and we won't be able to make any new investments." And oftentimes, that falls on deaf ears, so...

**Kris Brandow:** I definitely think structuring it as a conversation around debt and the financial aspect of it can help people, but also just like -- I think a lot of it has to do with process and project management, of like "Okay, when we said that we could deliver this feature, we said it would come with this amount of debt, this amount of stuff that we have to do later. Well, here's the later part, and we have to go do that, and you said that we could do it, so you're gonna have to actually stick to what you said you were going to do and give us the time to do this."

I think it does take a lot of fighting and advocating, but I think part of the problem is that in general, the teams I've been on have been kind of not great at explaining exactly what that technical debt is. It's like, we took on some technical debt, but it's just kind of this mysterious thing. It's like, "Oh, you've gotta go write some tests. You've gotta go do some other stuff."

So I think it's less that product and business don't want to pay for it, but the cost of it is not known, not quantifiable. It's like, if we talked in debt, but you never found out what the interest rates are. It's like, "Okay, well, you're telling me I have to pay down this debt, but is this debt that's at a 0.5% interest rate, or at a 25% interest rate? Because we're gonna deal with that in very, very different ways. 25% interest rate - we've gotta pay that down immediately; stop everything else, get rid of that. 0.5% interest rate - I'm just gonna let that sit there, because it's not gonna cost me much in the long-run."

Not being able to talk about things in that kind of quantifiable level I think is what holds back a lot of engineering organizations from being able to pay down that technical debt and handle that legacy. So I think, at least in my experience, the closer that I've gotten to talking in terms that are more concrete, of like "Here's what we need to do. Here's the tactical project. Here's the plan for it. Here's how much time it's gonna take, and here are the benefits that we're gonna get out of it at the other end", I've been very successful in selling that. It's definitely the other side of it when it's more just like -- you can't get a good grasp on it, when it's not quantifiable in terms of the business or in the product team.

**Jon Sabados:** \[35:58\] Quantifying it can be interesting too, because yeah, there's some things you can be like "Yeah, this is a huge thing that's going to bite us hard." But when you're trying to quantify in exact terms for like "This may or may not be a problem, depending on what we do", which oftentimes maybe the answer is "If it's not a problem, don't worry about it." But I guess quantifying that debt is hard.

**Misha Avrekh:** Would it be fair to say that that is exactly the different between legacy code and technical debt, where technical debt is something that needs to be repaid and that will potentially grow with time, whereas legacy code, as Dominic said, it might just sit there and work for years until anyone notices?

**Kris Brandow:** I feel like legacy code is like the technical debt that we haven't paid down for so long that we kind of declare bankruptcy on it. And the way that people think about legacy code - it's that code that's just like... Whenever you make that declaration of a greenfield, you're like, "Okay, we're done with this. And since we haven't planned well for our debt in the first place, we haven't planned well for how we're gonna replace that debt, because we also haven't quantified it for ourselves..." So I think it starts off as "We want to declare bankruptcy, but we don't actually know how to do that", so we have this thing that kind of sits there and lives on continuously... But I'm definitely open to other people's interpretations of that as well.

**Dominic St-Pierre:** To me it boils down to once the company is near reaching a point where it will affect their bottom line, and when you're not able to find any engineers to work at your company - this is terrible. You've already reached a certain point that you should never have passed, in my opinion. But yeah, before going there...

The other point from just a minute ago - I think we might see a new kind of engineering type evolving... Because if you think about it, how many software are we creating these days, compared to 25 years, 30 years ago? It's incredible. There will not be enough of us to maintain every single piece of software that's being created at the moment. I think we will see new jobs evolve. And I'm not talking about AI. An AI can help maintain software. I'm looking at you, GitHub Copilot. But yeah, my point is there should probably not be a difficult argument to be said about if a piece of software should be left as legacy like that, because it will impact the bottom line of the company at some point. And that should be the metric that every businesspeople should understand.

**Kris Brandow:** I think there was also a question about how we might start quantifying what this debt looks like for the business. And I think kind of using their own terms would be helpful here. Businesses tend to have really good -- or at least the ones that survive for a long time, tend to have really good risk management apparatuses, so they have really good ways of talking about things probabilistically, and we as engineers hate talking about things in probabilistic/statistic terms. We're like, "That will absolutely happen" or "That will never happen", and those are the only two options. But I've also found some success in talking about things in a more probabilistic way. This can go as far down as story-pointing, kind of changing it to be like "I have 70% confidence that this will take this amount of time", and just kind of bubbling that all the way up.

Once we start talking in less of these absolute terms, I think it becomes easier for us to communicate with businesspeople and give them something quantifiable. It's like, "Okay, if we don't do this work, there's an 80% chance that we're gonna run into a problem", versus like "If we don't do this work, there's a 20% chance we're gonna run into this problem." And then we can start doing those types of trade-offs, and then importantly, that also gives us something to track, so we can improve there as well. Because once again, if we're trying to figure out what our interest rates are, or figure out how much things are costing, it doesn't matter if we're just making up terms that don't actually come back to reality; that's going to degrade the trust from product and business.

\[39:52\] So we have to say "Okay, we have an 80% probability of this thing happening. Okay, did it actually happen, and how many times did it actually wind up happening?" Just going back and tracking all of that and tracing all of that, so then every time the business asks, we can be like "Here's the pages and pages and pages of how we've discussed this and how we came to these numbers, and how we came to this probability, and here's the historical aspect of that, and how much it has occurred historically, so then we're actually able to give you some basis to believe us, and kind of build that trust back up." I think that's how you start making it more quantifiable for people.

But I think, to your point of that type of engineer that we need to develop, I think one of the types of engineers we do need to develop are people that are kind of focused on going into codebases and doing this type of analysis, and figuring out how to prioritize that debt that we have and come up with debt consolidation and debt paydown plans, and help us actually determine "Hey, we want to declare bankruptcy and build a new thing. This is how we're going to do it so we don't wind up with the old things still being there, haunting us forever."

**Jon Sabados:** That is definitely an interesting thought, and like you mentioned, that is almost like a new type of engineer, a new type of position, because coming up with all those percentages and whatnot - that's like an FTE almost. It's not something that you can just kind of do on the side, while you're doing your feature work. You need somebody who's focused and dedicated to that.

**Kris Brandow:** Yeah, absolutely. It's a thing you have to be dedicated to doing, and actually want to push your organization forward with doing in the future. And it's like a whole process and a whole framework that you have to develop as an engineering team. We're lacking this in most of our engineering organizations. I've not been to (I think) any companies that have had this type of robust way of talking about technical debt, or legacy systems, or even just future work. Most of the time it's just like we've got a bunch of story points, we've got a bunch of sprints, and we're gonna take a guess, and we're gonna have retrospectives... But retrospectives are complaining about things that went wrong, not about "Did we actually meet what we said we were going to meet?" So I think there's definitely a lot of area here that we could kind of build up something better for being able to discuss a lot of this stuff.

**Jon Sabados:** Yeah, and I wonder if that also calls up -- there's oftentimes so much ceremony involved; at least my experience has been a lot of engineers are like "Well, this is kind of killing productive time, because if we spend a bunch of time pointing things, and we do the work based on scrums, but no one's holding us accountable for our sprints, and they actually end up devolving into something like business ends up wanting Kanban anyway, so I'm doing all this ceremony work for nothing... Why do I wanna add more ceremony on to that?"

**Kris Brandow:** Yeah. I think it's the kind of hole we've dug for ourselves in, building a system where we are supposed to be getting these benefits, but then not actually the back-half of that work. Not actually figuring out, "Is this form of agile we're doing, are sprints working for us? Are storypoints working for us? Are we able to actually get the benefits out of them that we think we're getting? Or is this just kind of --" in reality, yeah, as you're saying, a ceremony. Something we just do because we've done it, not because we're getting any intrinsic value out of it at the end of the day.

**Angelica Hill:** I feel a whole Go Time episode coming on on this exact topic. So I'm interested to hear a little bit more about -- we've talked about getting to that explosion point where it's falling apart, having bugs every day, making on-call engineers' life hell; that is the point at which you're like "We need to do something." Going back to our original question, like "How do we stop legacy code creeping in?", as we talk about accumulating tech debt etc. what are some ways that we can stop getting to that final point of explosion where everything is falling to pieces?

**Jon Sabados:** I think one thing if you wanna keep from code becoming legacy, I think that testing is a helpful tool for it. It's by no means a solve it, but if you can define your actual problems that you're trying to solve, and the right tests that exercise those problems, that will also help ensure that you've got discrete chunks doing those things, rather than tangled mess all playing together.

**Jeff Hernandez:** \[43:58\] It sounds like you're advocating for test-driven development... Is that right?

**Jon Sabados:** I just might be!

**Jeff Hernandez:** \[laughs\]

**Jon Sabados:** It's the cure-all, and there's oftentimes a lot of places where test-driven development doesn't work, especially like lab settings or where you don't know what you're going to do, but it is a tool that helps on more than just like ensuring that your code functions correctly.

**Misha Avrekh:** In my experience, you have to invest in your infrastructure and your monitoring probably before you invest in actually rewriting your code... In the sense that for example if your deployment pipeline takes hours for your changes to get deployed, you need to rewrite the deployment pipeline first, right? Add tests, add monitoring to make sure that you know what your system is doing, what queries it's executing on the backend, or what external calls it's making, or whatever it is. Probably do that before you get to that explosion point that Angelica just mentioned, and then the explosion point will be a lot less painful.

**Dominic St-Pierre:** Yeah, I like that. Going small piece by piece, and just being in a better way each week probably than you were last week; it feels like a great way to do that, and also probably less scareful and dangerous, if I can say that... Because when you think about that rewriting as an entire software, it is scary, for sure.

**Kris Brandow:** I think I would say writing documentation, or just comments, really. I think testing is definitely helpful, but I think if I were to be given a codebase that has really good tests, but no comments and documentation, or a codebase that has documentation and comments, but no tests, I would definitely take the latter... Because good comments and documentation tell me the intent of what this thing is supposed to be doing, which then I can go write the tests for myself.

But when I only have tests and they don't have good documentation and comments, then it's like, I have to assume that the tests were also written to do the thing that was intended to be done, or kind of try and derive from those tests what's supposed to be handled here.

But I think just going through and being like, okay, here's a function with this name. Here's a type with this name. Here's a method with this name. Does this do the thing I think it does, and then writing that down and making sure everybody has an understanding of that - a real great way to actually a) start exploring and understanding a legacy codebase, but also helps prevent codebases from becoming legacy. Because then other people can catch the bugs and what you intended, versus what's actually written in the code.

**Jon Sabados:** Clarity of intent is a good one, because that's also like comments, documentation, and even just the coding style as well can go a long way towards that... Because naming is one of those things that's really hard, and people tend to just eventually give up on, or get frustrated and be like "Ah, whatever." But it is worth that time to take care of your naming, because if you can structure your code in a way where the code declares its intention, that's even better than having comments about saying what it's going to do, what it's intending to do.

**Dominic St-Pierre:** I think that's another strength of Go, in my opinion, due to the packages and whatnot, compared to other frameworks and languages that I've worked with in the past. So you kind of already have a small sense of what something is going to do in terms of business case and whatnot, because they are probably properly placed into the right packages.

**Jeff Hernandez:** I'm wondering if people have any examples... Because everything so far sounds like having good engineering standards and protocols for your team and organization is a big help in preventing legacy code, I'm curious if others have examples of maybe not just good documentation or good tests and stuff like that, that could help in preventing legacy code... Because a lot of times that comes from the whole team that has to kind of agree upon a set of documentation, and the coding style... But if there's maybe something that you as an individual can take upon yourself and improve yourself as an engineer... I'm totally not trying to talk about myself.

**Kris Brandow:** \[47:59\] I've definitely found that, at least for me -- well, the outcome of this is usually writing better documentation, or tests, or whatever... But I think just like taking some extra time to stop and really think about what you're trying to do and what you're trying to implement. It doesn't have to be like a ton of time. I'm not saying like take hours and hours and hours. But just like, sitting there and looking at the thing, and then thinking about the problem you're trying to solve for even just a few minutes longer than you would have before I think can really help you perhaps design something a little better.

And I think also just many iterations of things. So if you write something and you budget your time and plan on being able to write it 3, 4, 5 times, that gives you the space to like write it once, maybe quick and dirty and look at it and say "But is this the way that it should be written?" and kind of get that feeling of if this is the right thing.

I think a lot of the times we wind up with legacy code, or the bad legacy code, because we didn't go through enough iterations of thinking about something... And I think it can be very difficult to sit down and do that, because we do have deadlines we're trying to hit, but I think that's one of the things that has definitely made me a better engineer, is like pushing back on myself and my team and saying "I'm going to take the extra few minutes here to think this through a little bit more, because it doesn't feel right", and really just listening to your gut and developing your gut instinct over time, to know "Okay, I've written something. Okay, this is good" versus "I've written something and this is rough." And listening to that feeling inside you that's like "It's rough, but I don't know why", and then following that thread.

I think a lot of times, once again, we ignore that thread, because we have things to do, we have features to develop, and we have something that works, so why are we gonna follow this thread; but I think really just following that thread at the end of the day has definitely helped me write codebases that are much more resistant to legacy... Even when I'm working with a bunch of people that are just trying to move really fast; at least the parts that I'm working on are a little bit more immune to that bad legacy at the end of the day... Which can help quite a lot, because that kind of thing tends to be contagious and other people tend to pick up on it, because they're working in the code that you wrote, and they're like "This is great. This is amazing. I want the whole codebase to feel like this." It's very infections at the end of the day.

**Dominic St-Pierre:** Do you think that pair programming could also do this effect?

**Kris Brandow:** I think it can, if your environment is one that is, I'd say, opportune for pair programming. If you're actually in person, you can actually sit at the same desk, you can actually work through things together at the same time, I think then yeah, pair programming can be very helpful. I think also just group design, group thought processes... Whenever you can get people in the same setting and you have enough psychological safety where people can just ask those questions that they might think are done... Because at the end of the day, that thread you have is very much a "I don't know what the problem is, but this doesn't feel right", so you have to be in an environment where you can express that, and the people you're working with will help you work through that, and have enough trust in you.

So yes, I definitely think pair programming can be excellent for this. I think whiteboard sessions, if you can be in a space where you can do whiteboarding, is great. But I think also just - maybe not doing the pair programming part of programming, but just hopping on a call and talking through an idea with people, maybe over a Google Doc, that also I think is equivalent and a very helpful way to execute this.

**Angelica Hill:** So we've talked a little bit about kind of you have this legacy thing, and how do you make it so that you don't get to that final explosion point... But I'm interested to talk a little bit about when/if you get that buy-in to rewrite a legacy codebase, or to change up a system and business, for whatever reason, decide -- they're having a great day, and you're like "You have a year, you have two years, or however long it takes. We need to rebuild this thing and make it better." When you are architecting that new solution, or you're thinking through "How do we build this new thing?", how do you from day one, from the whiteboarding session, build something that is going to avoid being legacy for as long as possible? I.e. is it always having microservices, making sure nothing is deeply coupled? What are some things, some questions to be asked? How do you go about designing a new system, already with legacy in mind?

**Kris Brandow:** \[52:08\] I would say from the jump understand what went wrong with your old system. I think people run for microservices or for Kafka, for some new, flashy tech, at the end of the day; they're like "Oh, the problem was we weren't using microservices", or something. But it's like, sit down and actually think, why don't you like working on this code? Why have we had to declare bankruptcy on this codebase?

A thing that I have done, that has hilariously sometimes wound up with me not actually abandoning old codebases when I really wanted to, because the problems I wanted to fix I could just fix in that old codebase, so why make a whole new one, with all new problems... But I think that's definitely where I tend to start, is like "What is it about this codebase I'm working on now that's making it so I want to build a new one?"

**Angelica Hill:** Jon, what do you think? I know this is something that I'm hoping you're thinking about...

**Jon Sabados:** I don't know if I've got too much on this one...

**Angelica Hill:** Also, off the record, for those who didn't see my cheeky smirk, Jon and Jeff in fact are both on my team... So when I make any cheeky comments in their direction, it's slightly more layered than other people who don't have that context may know. And I am their technical product manager, so that's also a context that you should know. I am speaking off the record as a businessperson.

**Kris Brandow:** Undercover businessperson.

**Angelica Hill:** I'm undercover. Secret gopher... Well, over gopher, secret product manager. \[laughs\] Jeff, what are some questions that you would hope -- if I was to go to you, Jeff, and be like, "Hey, Jeff, I'm thinking we should completely get rid of our current platform and rewrite it." What would be things that would pop to your head as things you would want to be given time to think about, before we kind of went "Right, this is the new architecture. Let's go. Code."

**Jeff Hernandez:** Yeah, I'm definitely following what Kris is saying. You definitely have to understand why you're trying to rewrite everything. You don't wanna rewrite just for the sake of "Oh, we have lots of issues with this codebase. Maybe we should just declare bankruptcy and start something new."

It's definitely something I myself have been interested in. For our team specifically, we're in the middle of rewriting our two platforms, and getting some historical context as to why we went that route. It would be interesting. But I don't wanna trigger Jon's PTSD too much, because it looks like he's going through something when the question came up. \[laughs\]

**Jon Sabados:** Yeah, and I guess rewrites are tough... I feel like everybody at some point in their career needs to go through the "Let's just do the rewrite because of it, and feel the pain, and watch it fall flat on its face, and waste like six months of our lives..."

**Kris Brandow:** Six months if you're lucky.

**Jon Sabados:** Yeah. I've seen entire years go down the drain. So having an understanding of the risk involved is huge. And you know, there are scenarios that do warn it, but they're the exception rather than the rule.

**Angelica Hill:** So am I right in assuming that if your product partner or the business came to you - I'm speaking to all of you here - and said "Right, Kris, Misha, Dominic, I know you've been working with this 20+ year (in Dominic's case) infrastructure. We're gonna give you five years maximum to rewrite completely." Would there be cases in which you would then, after assessing, be like "No, actually, we don't wanna rewrite." Or would you always, if given the opportunity, want to rewrite? If given the buy-in, the money, the time to do it, would you always jump at that opportunity?

**Dominic St-Pierre:** I would only rewrite a software that works if the technology is not going to exist sooner. Take an old system like Cobol. In Quebec there's a couple of companies that are still built on top of AS/400 and Cobol and whatnot. I mean, there's no manpower anymore for that, so what do you do? You don't have a choice. But I would be extremely careful to rewrite a software, not built from a long-time software, from scratch. I would still try to see if there is something that can be done, other than a complete rewrite.

**Kris Brandow:** \[56:22\] I'm in agreement there. I think when it comes to greenfield projects, or when it comes to rewriting legacy projects, just don't. I think that's kind of the hard and fast rule most of the time. Because sure, usually we get to the point we want to rewrite something when there's 20% to 30%, maybe a fifth to a third of the project is just obnoxious to work within. But there's still 70% to 80% of it that is doing things correctly.

When you do a rewrite, you have to account for all those things that it does correctly, and then replicate them, and then also fix all those bugs. So it's always going to take way, way, way longer to rewrite the thing than it is to fix the problems in the thing that exists. So I think that's the thing that we have to account for. And if you go into it and you do that math and you say "Yup, nope, we want to rewrite because we have X, Y and Z reasons why" - sure, go ahead and go forth. But if it's just like "Here are some individual pain points that I don't like about this system, and it's causing us to slow down some. Let's rewrite the whole thing" - absolutely not. You have to do in-depth research and understanding of the project that you're dealing with before you can rewrite it. You should actually be able to rewrite it before you start rewriting it, which sounds like something that sounds super-obvious when said, but is a thing that I have witnessed over and over again; it's not something that we do as engineers in general.

**Jon Sabados:** Yeah, there's gotta be some fundamental problem that requires a complete greenfield rewrite. It can't just be bang where everyone is gonna be like -- And also, it shouldn't come from product. It should be tech being like "There's this technical roadblock that means we just cannot do this anymore." Because you know, if you've got this legacy codebase and you just wanna make it better and get there, there's ways that you can boil things out, too. So you can be like, "Well, we're gonna move this small set of functionality to a new thing", and piecemeal things out if you really want an entirely new codebase, versus improving it. But again, that should be, I think, tech-driven, rather than coming from product.

**Kris Brandow:** If you can't come up with a way of conceivably, actually retiring completely the thing that you're rewriting at the beginning of your rewrite, then you shouldn't do it. Because you're not going to be able to retire it if you don't already have a plan for how to do it. I think that's just like fact at this point. I've never seen anywhere that's been able to successfully retire something... Either it's you've been able to successfully do it because you had a plan, or you were able to successfully do it because you just threw engineering bodies at the problem and basically said "All other work halts until we've finished this movement and this migration", which is incredibly difficult and really requires buy-in all the way up to the CTO level at the end of the day, and probably CEO level, to really say "No, we're actually going to no matter what throw as many bodies as is required to get rid of this thing." Either you have to do that or you have to have a good plan from the beginning of how you're gonna do it. And most of the time we don't have a plan, so we're really saying the latter. And if you're not gonna go and spend that political capital to buy into that, then just don't rewrite the thing, and really sit down and think about what is frustrating you about this codebase. Because I would say for most of the codebases, except for the ones, once again, written in Cobol or in some other really old language that we don't wanna deal with anymore... For the most part, especially if it's a Go codebase and I wanna rewrite this, just stop; just stop and be like "What's bothering me about this?" and then go fix those things. That will take tremendously less time, and you will be happier with the result, because now you will have the codebase you wanted, without the codebase you didn't. You don't have this legacy codebase that someone gets stuck maintaining until your new thing actually does what you promised it would do... Which also will take a lot longer than you think it's going to take. The rewrite always takes longer, and if you can't shut down the old thing until the rewrite is done, well now someone has to keep fixing bugs and keep the old thing operable until the new thing is ready to go in full capacity. So if you really don't wanna work on the old thing anymore, just fix the old thing in place.

**Dominic St-Pierre:** \[01:00:20.26\] You know how it is, even if everyone is agreeing to not touch the old thing anymore, they will always have a new feature, there will always be bug fixes that you will need to replicate on the new system. It's extremely difficult.

**Kris Brandow:** Yeah, don't assume that you will not have to add something new to the old system until the old system is completely off. So if your new thing is "I'm gonna go build something new, and it's gonna take me 2,5 years to build it", assume that you have to keep adding stuff to the old thing until that 2,5 year mark hits, and you actually get to turn that old thing off.

**Angelica Hill:** Moral of the story is greenfield rewrites are not always the right direction to go. You need to sit, take some time, think it through, identify the core issues, and then get really good - nod to your wonderful series, Kris - at maintaining your software and your technology.

**Jon Sabados:** Yeah. I think I have participated in one successful greenfield rewrite in my 20-year career.

**Angelica Hill:** And where was that, Jon?

**Jon Sabados:** That was with us.

**Angelica Hill:** And who is your product manager? \[laughs\]

**Jon Sabados:** That is with the Times, yup.

**Kris Brandow:** I also have a side note about the term "greenfield", which I find hilarious... Because if you want to have an actual greenfield, someone has to maintain that. If you go into nature, you don't find a lot of greenfield -- you find a lot of mud pits and stuff, and all that overgrown grass and stuff. But a real greenfield? You've gotta have good lawn equipment, good agriculture... It takes a lot of work, a lot of maintenance to have a greenfield. And people are just like "We're just gonna start with a greenfield." That's like, you're gonna start with something that's well-maintained and well-manicured. Okay. So it's like, we should really call it mud pit development, and then people will probably --

**Angelica Hill:** The grass is always greener on the other side...

**Kris Brandow:** Because the other person actually maintains their lawn, unlike you... Right? \[laughs\] Their grass is greener because they take care of it. You go over there, it might be green for a little bit, but then your old grass is going to be greener, because that person maintains it now. So it's like, no, just learn how to maintain your grass and then you'll have a really green lawn. And also, don't envy your neighbor. There's lots of lessons in here. I can take this analogy all day long.

**Angelica Hill:** I feel we're getting into the Canterbury tales here

**Kris Brandow:** This is what happens when you have two writers on a podcast, Angelica...

**Angelica Hill:** I know.

**Kris Brandow:** We just feed off each other.

**Angelica Hill:** Don't even get me started on Shakespeare and references... We'll be here all night. To rewrite or not to rewrite? That is the question... \[laughs\] Whether it is greener on the other side... Okay, I'm gonna stop now. But I can go on for days.

Great! Well, regrettably, we have to move on to our next section, because I wanna hear your unpopular opinions. But it's been an absolute pleasure chatting about legacy code, and I'm sure myself and Kris have many an episode as a follow-up we now will like to do.

**Kris Brandow:** This maintenance mini-series is becoming a series. It's just kind of expanding.

**Angelica Hill:** Yes. I feel like we should stop calling it mini and just go with "This is a series. Maintenance is important. It's a thing." We should make its own little theme tune; I'm ready, Kris. Let's whip out the keyboard. I'll do the vocals, and I'll rap a little bit; it'll be great.

**Kris Brandow:** A new jingle. We'll make that a note for Jerod. Hey, Jerod, we need a jingle for the maintenance series.

**Angelica Hill:** Yeah. And on the topic of jingles... Here's our unpopular opinion one. Smooth transition...

**Jingle:** \[01:03:34.16\] to \[01:03:50.28\]

**Angelica Hill:** So... For all you lovelies who have not heard Go Time unpopular opinions before, this is where we ask our lovely guests, and also Kris if we have time, for an unpopular opinion. It does not need to be about Go, it does not need to be about technology. It can be about your aunt's favorite sock collection, it can be about china dolls, it can be about your view on the ethos and life. It can be on anything.

First I'm gonna turn over to you, Jeff, for an unpopular opinion. Now, the goal of this is to come up with an opinion that you believe will be unpopular, because we're gonna post this opinion, we're gonna tweet about it, have our lovely gopher community vote on it, and then we're gonna tell you what percentage unpopular it was.

**Kris Brandow:** And if it's popular, you have to come back.

**Angelica Hill:** Yeah. If it's popular, we're getting you back on Go Time to grill you again, to get a better unpopular opinion.

**Jeff Hernandez:** What if I just use that as the way to keep coming back on the show? I just keep giving popular opinions, because I like it here.

**Angelica Hill:** Oh, we'll sniff you out. We're savvy individuals on this show.

**Jeff Hernandez:** So I've been racking my brain with this ever since I agreed to be on Go Time, so I don't think I have anything Earth-shattering like Jon's previous unpopular opinion... But what I came up with is I do not like any type of yogurt. I feel like that's a very popular snack that people like to eat. I just do not like yogurt at all. I have a story actually about that...

So I bought Greek yogurt as a substitute for sour cream, because I heard that's like a good, healthy substitute... And it was my first time actually trying it. I opened up the container and it just smelled really funky. I told my college roommate at the time, "Did this go bad?" And he came over and smelled it, and he's like "No, that's just how it smells." I'm like, "Oh... Definitely not for me then."

**Angelica Hill:** \[laughs\] Wait, are we talking just like plain, or are we talking like mixed in with some granola and fruit?

**Jeff Hernandez:** Any...

**Angelica Hill:** You also don't like it?

**Jeff Hernandez:** I don't like any yogurt. I've never been like a yogurt person.

**Angelica Hill:** Like, Greek only? Are we talking about Yop, like drinkable yogurt?

**Jeff Hernandez:** No yogurt. No yogurt.

**Angelica Hill:** Oh my gosh, this is like an umbrella yogurt ban in the Jeff household.

**Jeff Hernandez:** Basically, yes. \[laughs\]

**Kris Brandow:** Fascinatingly, I thought I always hated Greek yogurt, and for some reason I know like Greek yogurt, and I don't know why. So I'm kind of on the opposite spectrum as you.

**Angelica Hill:** Well, Kris, you know, your taste buds do mature as you age, so... \[laughter\] That's a good unpopular opinion. I love yogurt. I love Greek yogurt. Also, it's very good for your digestion, I'm told, and it has things called active things... \[laughter\] Active -- what are they called?

**Jeff Hernandez:** Probiotics?

**Angelica Hill:** Yes. They have active probiotics that are apparently, I've been told, being brainwashed by the media, are very good for my digestion... But I have no scientific facts to back up that view. But I will after this google it and check. Maybe as you get older, like Kris, you'll develop a taste.

**Jeff Hernandez:** I get all my active probiotics from Yakult, if anyone else has had that. I don't know what I would describe it as, but it's like a small little drink. It's not yogurt, as far as I know... But that's where I receive my active probiotics, since I don't have any yogurt.

**Angelica Hill:** World's leading probiotic beverage created in Japan, in 1935, and is now sold in over 40 countries.

**Jeff Hernandez:** And it's not yogurt, so...

**Angelica Hill:** And it's not yogurt. I actually felt like it was, and I was gonna google it in the hopes that I would catch you out... But it's not.

**Jeff Hernandez:** I've done my research, so... You won't catch me.

**Angelica Hill:** Misha! Unpopular opinion.

**Misha Avrekh:** Let's see... Alright, so my unpopular opinion, that is not about Go, is that CSS is a full-fledged programming language that will someday replace all other programming languages. Now I just need to figure out how to rewrite all of my backend microservices in CSS.

**Kris Brandow:** \[laughs\]

**Angelica Hill:** I don't even know how to respond to that one.

**Jeff Hernandez:** You broke my brain, I think.

**Misha Avrekh:** That will solve the legacy problem, for sure.

**Angelica Hill:** Yeah, let's just write everything in CSS...

**Jon Sabados:** Does it have to be CSS, or can I write it in Sass, and then transpile it to CSS?

**Misha Avrekh:** \[01:08:20.08\] Sass is fine.

**Jon Sabados:** Okay.

**Angelica Hill:** Getting snazzy with it here.

**Kris Brandow:** Well, you can do math in CSS now, so I can kind of see how you could create a virtual machine out of C but the bytecode is CSS, and then... Oh, God. Now we're gonna wind up with someone writing a C compiler that compiles C into CSS, that can actually -- ah, this is terrible.

**Angelica Hill:** What have we started...? \[laughs\] I would be surprised if that was not unpopular. That's a very good unpopular opinion.

**Misha Avrekh:** Thank you.

**Angelica Hill:** But I do now really want someone to do that. I want to see this compiler.

**Misha Avrekh:** It's a challenge.

**Angelica Hill:** Dominic, over to you. In fact, Misha, you can do it, and we can come back on the show and talk about it.

**Kris Brandow:** You've just gotta write it in Go.

**Misha Avrekh:** Sounds good.

**Angelica Hill:** I'm ready. Though I swear that defeats the purpose... If you write it in Go, is it not then fully CSS?

**Kris Brandow:** You can eventually bootstrap it so it's self-hosting on CSS, but you'd have to write it in some --

**Angelica Hill:** Does that count?

**Kris Brandow:** Yeah. Go is written in Go, but it didn't start off being written in Go. It started off being written in C.

**Angelica Hill:** Oh, okay... Misha, and the definition for your unpopular opinion that you just came up with - does that count?

**Misha Avrekh:** Yeah, that would count, yes.

**Angelica Hill:** Can we do this? Okay. It's official now. \[laughs\] Dominic, hit me. Unpopular opinion.

**Dominic St-Pierre:** Well, last time I thought it was the highest I could go, so let's see...

**Angelica Hill:** Clearly not, because you're back.

**Dominic St-Pierre:** Clearly not, exactly. GitHub Copilot will do more harm than good, I think.

**Kris Brandow:** Oh, that's not gonna be unpopular.

**Dominic St-Pierre:** Yeah...

**Kris Brandow:** \[laughs\]

**Angelica Hill:** It's more of an opinion that needs to be put out there.

**Dominic St-Pierre:** Yeah, I know... I was supposed to think about -- maybe I will pass, because like I was saying at the beginning, I caught the Covid yesterday. I was supposed to think about that yesterday, and to be frank, I did not, so... Yeah, let me pass on that.

**Angelica Hill:** Shout-out to Dominic for doing Go Time with active Covid.

**Dominic St-Pierre:** Yeah, it was rough.

**Kris Brandow:** Real trooper.

**Angelica Hill:** Yeah. Thank you so much.

**Dominic St-Pierre:** Yeah, that's my unpopular opinion, in fact... Doing things with the Covid.

**Angelica Hill:** Powering through. Alright, Jon, you are the person who holds one of the most unpopular Go Time opinions ever... Shameless plug to a previous Go Time episode where we go through all of our unpopular opinions of the year. I don't know exactly what number it is, but if you DM me, I'll let you know. It's a great episode... Where Jon said that he hates chocolate. So I'm ready for this next one. It better be a good one. My expectations are sky-high.

**Jon Sabados:** I'm gonna swing for the fences on this one and say that I think adding generics to Go was a mistake.

**Kris Brandow:** Ooh...

**Jon Sabados:** So while there are use cases where generics actually are very handy, I think overall I have seen more harm done with generics than in general... Because I think that it encourages developers to try and deduplicate things that are not necessarily the same. And when you're trying to reuse for the sake of reusability and accomplish different tasks with code, you oftentimes end up with code that is much more of a tangled mess, and harder to maintain, and harder to understand. And I think that generics encourage that.

**Dominic St-Pierre:** I think like everything in life, balance will return at some point... But in my opinion, it will be good. Just think about all the loops that we are doing, that we will not be forced to do... Like removing an item from a slice, for example, or... I don't know. So I think for the next 6 months it will be very dirty everywhere; everyone will try that, but... I'm not sure. I disagree with that, respectfully.

**Jon Sabados:** Totally. And I totally get you with those loops and whatnot; there's cases where it totally makes sense. But I think that having those cases is the lesser sin from the abuse of generics that's going to follow.

**Dominic St-Pierre:** \[01:12:09.21\] Yeah, I see the point. But I hope we will see a balance at some point.

**Kris Brandow:** It's gonna be channels and goroutines all over again. People are just gonna sprinkle that stuff all over their codebases. It's gonna be "Oh, can I use a channel here? I'll use a channel. Oh, now I need to use seven channels? I'll use all seven of those channels, just because I can. I'll sprinkle goroutines everywhere." It's gonna be that all over again.

**Angelica Hill:** Need I return to my first app ever, that I think Kris you've seen, where I literally ended up having 317 channels, individually written, partly because I didn't know you could know you could send stuff to one channel, but also because I just had fun. I was like, "I'm gonna create all these--" And then I had pointers to channels...

**Kris Brandow:** Oh, boy...

**Angelica Hill:** It was a lot of fun, but clearly not the right approach.

**Jeff Hernandez:** Too fickle to maintain.

**Angelica Hill:** Oh yeah, and then I added goroutines onto every single one. That was fun. \[laughs\] Yeah, Kris, I know you loved it when I showed you, like "Look how pretty it is." "Nooo...!" \[laughs\] Kris, do you have an unpopular opinion to finish us up with?

**Kris Brandow:** I have many an unpopular opinion. I think I hold one of those most coveted unpopular opinions...

**Angelica Hill:** You absolutely do.

**Kris Brandow:** Okay, so this one is tech-related, not Go-related... But I think that we should kill off all C-like languages and C-derived languages, and get rid of the van Neumann architecture and move on as an industry.

**Angelica Hill:** Do you have a bit more as to why?

**Kris Brandow:** Yes, actually. So when the van Neumann architecture was created, we were still using discrete parts. But even when we made that first transition in the '70s to transistors, we had on the order of thousands of transistors operating at kilohertz. And now, as of a couple weeks ago, you can buy a chip, buy a computer on the market that has over a hundred billion transistors operating at several gigahertz each. So we've had many, many, many orders of magnitude along two different dimensions of improvement in our hardware capabilities, but we still used the same fundamental architecture, that has the same fundamental bottlenecks attached to it... Which ironically is turning our systems, our chips into distributed systems just to keep pace with the improvements that we've made. I think all of this extra work and all of this strife is caused by the fact that we're still using this architecture. And the reason we still use it is because - well, it's the architecture of C, at the end of the day. C very much programs in this mentality that recognizes the van Neumann architecture as being there. It's very difficult to write truly parallel, or good parallel code, or concurrent code in C.

So jettison the van Neumann architecture, and along with it C and C-like languages... Which unfortunately includes Go as of right now, because while you can write some good concurrent code in Go, it's still pretty difficult. We want languages that look more like Erlang, or at least have the same underpinnings of things like Erlang at the end of the day, to really capture the capabilities of the silicon that we have. Because it is quite incredible; I mean, Apple did just come out with a chip that has 115 billion transistors on it. And it's like -- yeah, we can't really utilize all of those if we're using them in our CPU-based architecture. So more stuff that looks like graphics cards too, because they're very good at capturing this idea of parallelizable and concurrent workloads, but... Yes. No more C, no more von Neumann. Get rid of it, move on as an industry. Let's get better. Let's stop wasting so many CPU cycles waiting for main memory to get back to us.

**Angelica Hill:** Yeah, that may be an unpopular one... Especially if you add in that very blaze like "Oh, Go is included."

**Kris Brandow:** I mean, Java, Go Rust, C, C++... All those popular imperative languages, just - goodbye. Time for something new.

**Dominic St-Pierre:** Let's rewrite Linux in Erlang. It will be fun.

**Angelica Hill:** So on that fine point, "Let's get rid of Go", regrettably, that is the end of our episode. Thank you all, it was an absolute pleasure having you on, and I hope we'll have you all back very soon, subject to how unpopular your opinions are.
